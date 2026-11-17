import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from 'three-mesh-bvh';
import { sanitizeName } from '../util.js';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

const SKY_VERT = `varying vec3 vDir; void main(){ vDir = normalize((modelMatrix*vec4(position,1.0)).xyz - cameraPosition); gl_Position = projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }`;
const SKY_FRAG = `uniform vec3 top; uniform vec3 mid; uniform vec3 low; uniform float stars; uniform float time; varying vec3 vDir;
float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
void main(){ float y = vDir.y; vec3 c = y>0.0 ? mix(mid, top, pow(y,0.55)) : mix(mid, low, pow(-y,0.6));
 vec3 q = floor(vDir*260.0); float s = step(0.9975, h(q)) * smoothstep(0.05,0.4,y) * stars; s *= 0.6+0.4*sin(time*2.0+h(q)*40.0);
 gl_FragColor = vec4(c + vec3(s), 1.0); }`;

export class World {
  constructor(app) {
    this.app = app;
    this.root = new THREE.Group();
    this.dynamic = new THREE.Group(); this.dynamic.name = '__dreams_dynamic';
    this.colliders = [];
    this.byName = new Map();
    this.meta = new Map();
    this.doors = [];
    this.mixers = [];
    this.clips = [];
    this.bounds = new THREE.Box3();
    this.center = new THREE.Vector3();
    this.size = new THREE.Vector3();
    this.ray = new THREE.Raycaster();
    this.ray.firstHitOnly = true;
  }

  async load(buffer, data, onProgress) {
    const loader = new GLTFLoader();
    onProgress?.(0.1, 'Membaca geometri dunia');
    const gltf = await new Promise((res, rej) => loader.parse(buffer, '', res, rej));
    this.gltf = gltf;
    this.root.add(gltf.scene);
    this.app.scene.add(this.root, this.dynamic);
    onProgress?.(0.45, 'Menyiapkan material dan cahaya');

    for (const o of data.objects || []) this.meta.set(sanitizeName(o.name), o);
    let lightCount = 0;
    const env = data.environment || {};
    const envBoost = THREE.MathUtils.clamp((env.strength ?? 1) * (env.hdri ? 1.35 : 1), 0.2, 1.8);
    gltf.scene.updateMatrixWorld(true);
    gltf.scene.traverse((n) => {
      if (n.name) this.byName.set(n.name, n);
      if (n.isLight) {
        lightCount++;
        n.intensity = (n.intensity ?? 1) * (n.isDirectionalLight ? 1.5 : 1.15);
        if (n.isDirectionalLight || (n.isSpotLight && lightCount <= 4)) { n.castShadow = true; n.shadow.bias = -0.0004; n.shadow.normalBias = 0.02; }
      }
      if (n.isMesh) {
        n.castShadow = true; n.receiveShadow = true;
        for (const m of [].concat(n.material)) {
          if (m.transparent && m.opacity < 1) n.castShadow = false;
          if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
          if ('envMapIntensity' in m) m.envMapIntensity = 0.45 * envBoost;
        }
      }
    });

    this.bounds.setFromObject(gltf.scene, true);
    if (this.bounds.isEmpty()) this.bounds.set(new THREE.Vector3(-5, 0, -5), new THREE.Vector3(5, 3, 5));
    this.bounds.getCenter(this.center); this.bounds.getSize(this.size);
    this.radius = Math.max(4, this.size.length() / 2);
    this.floorY = this.bounds.min.y;
    this.showcase = Math.max(this.size.x, this.size.y, this.size.z) < 3;

    if (lightCount === 0 || !data.lights?.some((l) => l.type === 'SUN')) this.addDefaultLights(lightCount === 0);
    this.fitShadowCameras();
    this.setupSky(data.environment || {});
    onProgress?.(0.65, 'Membangun sistem tabrakan');
    this.buildColliders(data);
    this.addSafetyFloor();
    this.setupDoors();
    onProgress?.(0.8, 'Menghidupkan animasi');
    if (gltf.animations?.length) {
      const mixer = new THREE.AnimationMixer(gltf.scene);
      this.mixers.push(mixer);
      this.clips = gltf.animations;
      for (const clip of gltf.animations) {
        if (/walk|run/i.test(clip.name) && gltf.animations.length > 1) continue;
        mixer.clipAction(clip).play();
      }
      this.mainMixer = mixer;
    }
    this.cameras = gltf.cameras || [];
    return gltf;
  }

  addDefaultLights(noLights) {
    const hemi = new THREE.HemisphereLight(0xdfe6ff, 0x3a3326, noLights ? 0.9 : 0.35);
    hemi.name = '__dreams_hemi';
    const sun = new THREE.DirectionalLight(0xfff1dc, noLights ? 3.2 : 1.2);
    sun.name = '__dreams_sun';
    sun.position.copy(this.center).add(new THREE.Vector3(0.6, 1, 0.45).normalize().multiplyScalar(this.radius * 2));
    sun.target.position.copy(this.center);
    sun.castShadow = true; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
    this.app.scene.add(hemi, sun, sun.target);
    this.sun = sun;
  }

  fitShadowCameras() {
    // fit to the main structure so shadow texels stay dense (whole-terrain fits cause banding)
    const core = new THREE.Box3();
    this.gltf.scene.traverse((n) => { if (n.isMesh) { const b = new THREE.Box3().setFromObject(n); const s = b.getSize(new THREE.Vector3()); if (Math.max(s.x, s.z) < this.radius * 0.8) core.union(b); } });
    const coreR = core.isEmpty() ? this.radius : core.getSize(new THREE.Vector3()).length() / 2;
    const r = Math.min(this.radius * 1.3, coreR * 1.5 + 8);
    const cc = core.isEmpty() ? this.center : core.getCenter(new THREE.Vector3());
    this.app.scene.traverse((n) => {
      if (n.isDirectionalLight && n.castShadow) {
        const cam = n.shadow.camera;
        cam.left = -r; cam.right = r; cam.top = r; cam.bottom = -r; cam.near = 0.1; cam.far = r * 6;
        const dir = n.position.clone().sub(n.target.getWorldPosition(new THREE.Vector3())).normalize();
        if (n.target.parent == null) this.app.scene.add(n.target);
        n.target.position.copy(cc); n.position.copy(cc).addScaledVector(dir, r * 2.5); n.target.updateMatrixWorld();
        n.shadow.bias = -0.0005; n.shadow.normalBias = 0.04;
        cam.updateProjectionMatrix();
        if (!this.sun) this.sun = n;
      }
    });
  }

  setupSky(env) {
    const c = env.color ? new THREE.Color().fromArray(env.color) : null;
    const top = new THREE.Color('#1d2a5e'), mid = new THREE.Color('#8a7fb8'), low = new THREE.Color('#2a2440');
    if (c) { const lum = c.r * 0.3 + c.g * 0.59 + c.b * 0.11; mid.lerp(c.clone().convertLinearToSRGB(), 0.55); if (lum > 0.4) top.lerp(new THREE.Color('#6c8fd8'), 0.7); }
    const skyLum = c ? c.r * 0.3 + c.g * 0.59 + c.b * 0.11 : 0;
    this.skyUniforms = { top: { value: top }, mid: { value: mid }, low: { value: low }, stars: { value: skyLum > 0.12 ? 0 : 1 }, time: { value: 0 } };
    const sky = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16), new THREE.ShaderMaterial({ uniforms: this.skyUniforms, vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: THREE.BackSide, depthWrite: false }));
    sky.scale.setScalar(4000); sky.frustumCulled = false; sky.renderOrder = -1; sky.name = '__dreams_sky';
    this.sky = sky;
    this.app.scene.add(sky);
    this.app.scene.fog = new THREE.FogExp2(mid.clone().multiplyScalar(0.6), 0.22 / Math.max(this.radius * 8, 60));
  }

  async loadEnvironmentMap(buffer, ext) {
    const loader = ext === 'exr' ? new EXRLoader() : new RGBELoader();
    const tex = loader.parse(buffer);
    const t = new THREE.DataTexture(tex.data, tex.width, tex.height, tex.format, tex.type);
    t.mapping = THREE.EquirectangularReflectionMapping; t.colorSpace = THREE.LinearSRGBColorSpace;
    t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = false; t.flipY = true; t.needsUpdate = true;
    this.app.renderer.setEnvironmentTexture(t, true);
    this.sky.visible = false;
    // Blender's world background has no aerial haze; drop the gradient-sky fog so distance matches the render.
    this.app.scene.fog = null;
  }

  buildColliders(data) {
    const skipRoles = new Set(['character', 'animal', 'light', 'camera', 'water']);
    this.gltf.scene.traverse((n) => {
      if (!n.isMesh) return;
      let meta = null, p = n;
      while (p && !meta) { meta = this.meta.get(p.name); p = p.parent; }
      n.userData.dreamsMeta = meta;
      if (meta && (skipRoles.has(meta.role) || meta.collide === false)) return;
      if (!n.geometry.boundsTree) n.geometry.computeBoundsTree();
      this.colliders.push(n);
    });
  }

  addSafetyFloor() {
    const hit = this.castDown(this.center.x, this.center.z, this.bounds.max.y + 5, 1e4);
    const size = Math.max(this.size.x, this.size.z) * 3 + 60;
    const geo = new THREE.CircleGeometry(size / 2, 64); geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: '#2c2a44', roughness: 0.55, metalness: 0.15, transparent: true, opacity: 0.92 });
    const floor = new THREE.Mesh(geo, mat);
    floor.position.set(this.center.x, this.floorY - 0.02, this.center.z);
    floor.receiveShadow = true; floor.name = '__dreams_floor';
    floor.geometry.computeBoundsTree();
    this.app.scene.add(floor);
    this.colliders.push(floor);
    this.safetyFloor = floor;
    this.groundY = hit ? hit.point.y : this.floorY;
  }

  setupDoors() {
    for (const [name, m] of this.meta) {
      if (m.role !== 'door') continue;
      const node = this.byName.get(name);
      if (!node) continue;
      const box = new THREE.Box3().setFromObject(node);
      const sz = box.getSize(new THREE.Vector3());
      const pivot = new THREE.Group();
      const alongX = sz.x >= sz.z;
      pivot.position.set(alongX ? box.min.x : (box.min.x + box.max.x) / 2, box.min.y, alongX ? (box.min.z + box.max.z) / 2 : box.min.z);
      node.parent.add(pivot);
      pivot.updateMatrixWorld(true);
      pivot.attach(node);
      this.doors.push({ name, node, pivot, open: false, angle: 0, target: 0, meta: m });
    }
  }

  setBaguaVisible(on) {
    if (!this.bagua) return;
    this.bagua.visible = on;
    // roofs/ceilings hide the floor plan from above; hide them while the overlay is shown
    for (const [name, m] of this.meta) if (m.role === 'roof') { const n = this.byName.get(name); if (n) n.visible = !on; }
  }

  toggleDoor(door) {
    door.open = !door.open;
    door.target = door.open ? -Math.PI * 0.55 : 0;
    this.app.audio?.sfx(door.open ? 'open' : 'close');
  }

  update(dt, t) {
    for (const m of this.mixers) m.update(dt);
    if (this.skyUniforms) this.skyUniforms.time.value = t;
    for (const d of this.doors) {
      if (Math.abs(d.angle - d.target) > 1e-3) {
        d.angle += (d.target - d.angle) * Math.min(1, dt * 5);
        d.pivot.rotation.y = d.angle;
        d.pivot.updateMatrixWorld(true);
      }
    }
  }

  isDoorBlocking(mesh) {
    for (const d of this.doors) {
      if (!d.open) continue;
      let p = mesh; while (p) { if (p === d.node) return false; p = p.parent; }
    }
    return true;
  }

  raycast(origin, dir, far, extra = []) {
    this.ray.set(origin, dir); this.ray.far = far;
    const hits = this.ray.intersectObjects(this.colliders.concat(extra), false);
    for (const h of hits) if (this.isDoorBlocking(h.object)) return h;
    return null;
  }

  castDown(x, z, fromY, far = 200, extra = []) {
    return this.raycast(new THREE.Vector3(x, fromY, z), new THREE.Vector3(0, -1, 0), far, extra);
  }

  // Find a standable point. opts: { near:Vector3, radius, interior, sameLevel, minDist }
  sample(rng, opts = {}) {
    const top = this.bounds.max.y + 2;
    const pad = this.showcase ? 8 : 2;
    const near = opts.near, radius = opts.radius;
    for (let i = 0; i < 80; i++) {
      let x, z;
      if (near && radius) { const a = rng() * Math.PI * 2, r = Math.sqrt(rng()) * radius; x = near.x + Math.cos(a) * r; z = near.z + Math.sin(a) * r; }
      else { x = rng.range(this.bounds.min.x - pad, this.bounds.max.x + pad); z = rng.range(this.bounds.min.z - pad, this.bounds.max.z + pad); }
      let hit = this.castDown(x, z, top, top - this.floorY + 50);
      if (!hit || hit.face && hit.face.normal && this.worldNormalY(hit) < 0.7) continue;
      const p = hit.point.clone();
      if (opts.sameLevel != null && Math.abs(p.y - opts.sameLevel) > 3.2) continue;
      if (opts.minDist && opts.from && p.distanceTo(opts.from) < opts.minDist) continue;
      const up = this.raycast(p.clone().add(new THREE.Vector3(0, 0.1, 0)), new THREE.Vector3(0, 1, 0), 30);
      if (up && up.distance < 1.9) continue;
      if (opts.interior && !up) continue;
      return p;
    }
    const a = rng() * Math.PI * 2, r = (near ? radius || 6 : this.radius) * Math.sqrt(rng());
    const c = near || this.center;
    return new THREE.Vector3(c.x + Math.cos(a) * r, this.groundY, c.z + Math.sin(a) * r);
  }

  worldNormalY(hit) {
    const n = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
    return n.y;
  }

  spawnPoint(data) {
    const named = [...this.byName.values()].find((n) => /^(spawn|playerstart|player_start|start)$/i.test(n.name));
    if (named) { const p = named.getWorldPosition(new THREE.Vector3()); const h = this.castDown(p.x, p.z, p.y + 1.5, 50); return h ? h.point : p; }
    // focus on the main structure, not the whole landscape
    const core = new THREE.Box3();
    for (const m of data.objects || []) {
      if (['terrain', 'plant', 'light', 'camera', 'water'].includes(m.role)) continue;
      const c = new THREE.Vector3().fromArray(m.center), h = new THREE.Vector3().fromArray(m.dims).multiplyScalar(0.5);
      core.union(new THREE.Box3(c.clone().sub(h), c.clone().add(h)));
    }
    const b = core.isEmpty() ? this.bounds : core;
    const bc = b.getCenter(new THREE.Vector3()), bs = b.getSize(new THREE.Vector3());
    this.focus = bc;
    const front = new THREE.Vector3(bc.x, 0, b.max.z + (this.showcase ? 4 : Math.min(7, bs.z * 0.4 + 3)));
    const h = this.castDown(front.x, front.z, this.bounds.max.y + 2, 1e4);
    return h ? h.point : new THREE.Vector3(front.x, this.groundY, front.z);
  }

  metaFor(object) {
    let p = object;
    while (p) {
      const m = this.meta.get(p.name);
      if (m) return { meta: m, node: this.byName.get(p.name) || p };
      p = p.parent;
    }
    return null;
  }

  nodeFor(meta) { return this.byName.get(sanitizeName(meta.name)); }

  worldPos(meta) {
    const n = this.nodeFor(meta);
    if (n) { const b = new THREE.Box3().setFromObject(n); if (!b.isEmpty()) return b.getCenter(new THREE.Vector3()); return n.getWorldPosition(new THREE.Vector3()); }
    return new THREE.Vector3().fromArray(meta.center || [0, 0, 0]);
  }

  // Feng Shui bagua overlay (3×3) on the floor plan, from the analysis in world.json
  buildBaguaOverlay(fs) {
    if (!fs?.grid) return null;
    const g = new THREE.Group(); g.name = '__dreams_bagua';
    const { min, max, cells } = fs.grid;
    const w = (max[0] - min[0]) / 3, d = (max[1] - min[1]) / 3;
    const y = this.groundY + 0.03;
    for (const cell of cells) {
      const cx = min[0] + w * (cell.col + 0.5), cz = min[1] + d * (cell.row + 0.5);
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.97, d * 0.97), new THREE.MeshBasicMaterial({ color: cell.color, transparent: true, opacity: 0.16, depthWrite: false }));
      plane.rotation.x = -Math.PI / 2; plane.position.set(cx, y, cz);
      const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(15,18,40,0.72)'; ctx.fillRect(0, 0, 512, 256);
      ctx.fillStyle = '#ffe2a6'; ctx.font = '600 54px Figtree, system-ui, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(cell.label, 256, 110);
      ctx.fillStyle = '#c9cdf5'; ctx.font = '400 36px Figtree, system-ui, sans-serif';
      ctx.fillText(cell.sub, 256, 175);
      const tex = new THREE.CanvasTexture(canvas); tex.colorSpace = THREE.SRGBColorSpace;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true, toneMapped: false, fog: false }));
      const s = Math.max(1.6, Math.min(w, d) * 0.75); sprite.scale.set(s, s / 2, 1); sprite.position.set(cx, y + Math.min(2.2, s * 0.6), cz);
      sprite.renderOrder = 10;
      g.add(plane, sprite);
    }
    g.visible = false;
    this.app.scene.add(g);
    this.bagua = g;
    return g;
  }
}
