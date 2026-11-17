import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { clamp, el } from '../util.js';

export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = new Set();
    this.pressed = new Set();
    this.look = { x: 0, y: 0 };
    this.joy = { x: 0, y: 0, active: false };
    this.mouse = new THREE.Vector2(0, 0);
    this.clicked = false;
    this.enabled = true;
    addEventListener('keydown', (e) => {
      if (e.target.closest?.('input,textarea,select')) return;
      if (!this.keys.has(e.code)) this.pressed.add(e.code);
      this.keys.add(e.code);
      if (e.code === 'Space' || e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'ArrowUp' || e.code === 'ArrowDown') e.preventDefault();
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));
    addEventListener('blur', () => this.keys.clear());
    canvas.addEventListener('mousemove', (e) => {
      this.mouse.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
      if (document.pointerLockElement === canvas) { this.look.x += e.movementX; this.look.y += e.movementY; }
      else if (e.buttons & 2) { this.look.x += e.movementX; this.look.y += e.movementY; }
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('click', () => { this.clicked = true; });
  }
  down(...codes) { return this.enabled && codes.some((c) => this.keys.has(c)); }
  hit(...codes) { return this.enabled && codes.some((c) => this.pressed.has(c)); }
  axis() {
    let x = (this.down('KeyD') ? 1 : 0) - (this.down('KeyA') ? 1 : 0);
    let y = (this.down('KeyW') ? 1 : 0) - (this.down('KeyS') ? 1 : 0);
    if (this.joy.active) { x = this.joy.x; y = this.joy.y; }
    return { x, y };
  }
  endFrame() { this.pressed.clear(); this.look.x = 0; this.look.y = 0; this.clicked = false; }

  buildTouch(root, onAction) {
    const pad = el('div', { class: 'joy', 'aria-hidden': 'true' }, el('div', { class: 'joy-knob' }));
    const knob = pad.firstChild;
    let id = null, cx = 0, cy = 0;
    pad.addEventListener('pointerdown', (e) => { id = e.pointerId; pad.setPointerCapture(id); const r = pad.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; this.joy.active = true; move(e); });
    const move = (e) => { if (e.pointerId !== id) return; const dx = clamp((e.clientX - cx) / 52, -1, 1), dy = clamp((e.clientY - cy) / 52, -1, 1); this.joy.x = dx; this.joy.y = -dy; knob.style.transform = `translate(${dx * 38}px,${dy * 38}px)`; };
    pad.addEventListener('pointermove', move);
    const end = (e) => { if (e.pointerId !== id) return; id = null; this.joy.active = false; this.joy.x = this.joy.y = 0; knob.style.transform = ''; };
    pad.addEventListener('pointerup', end); pad.addEventListener('pointercancel', end);
    let lookId = null, lx = 0, ly = 0;
    this.canvas.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'touch') return; lookId = e.pointerId; lx = e.clientX; ly = e.clientY; this.mouse.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); });
    this.canvas.addEventListener('pointermove', (e) => { if (e.pointerId !== lookId) return; this.look.x += (e.clientX - lx) * 1.6; this.look.y += (e.clientY - ly) * 1.6; lx = e.clientX; ly = e.clientY; });
    this.canvas.addEventListener('pointerup', (e) => { if (e.pointerId === lookId) lookId = null; });
    const btn = (label, code, cls) => el('button', { class: 'touch-btn ' + cls, type: 'button', 'aria-label': label,
      onpointerdown: (e) => { e.preventDefault(); this.keys.add(code); this.pressed.add(code); onAction?.(code); },
      onpointerup: () => this.keys.delete(code), onpointercancel: () => this.keys.delete(code) }, label);
    const wrap = el('div', { class: 'touch' }, pad, el('div', { class: 'touch-btns' }, btn('Lompat', 'Space', 'jump'), btn('Aksi', 'KeyE', 'act'), btn('Lari', 'ShiftLeft', 'run')));
    root.append(wrap);
    return wrap;
  }
}

const UP = new THREE.Vector3(0, 1, 0);

export class Player {
  constructor(app) {
    this.app = app;
    this.camera = app.camera;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = -0.05;
    this.height = 1.65; this.radius = 0.32; this.step = 0.45;
    this.onGround = false;
    this.gravity = 18; this.jumpSpeed = 5.6; this.walk = 3.4; this.run = 6.8;
    this.mode = 'first';
    this.speedScale = 1;
    this.frozen = false;
    this.avatar = this.makeAvatar();
    this.avatar.visible = false;
    app.scene.add(this.avatar);
    this.orbit = new OrbitControls(this.camera, app.renderer.renderer.domElement);
    this.orbit.enabled = false; this.orbit.enableDamping = true; this.orbit.keys = {};
    this.cine = { t: 0, curve: null };
  }

  makeAvatar() {
    const g = new THREE.Group(); g.name = '__dreams_avatar';
    const mat = new THREE.MeshStandardMaterial({ color: '#cfd6ff', roughness: 0.35, metalness: 0.1, emissive: '#3b2f7a', emissiveIntensity: 0.25 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.85, 6, 16), mat); body.position.y = 0.72; body.castShadow = true;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 16), mat); head.position.y = 1.47; head.castShadow = true;
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 8, 0, Math.PI), new THREE.MeshStandardMaterial({ color: '#ffcf7a', emissive: '#ffb347', emissiveIntensity: 1.6 }));
    visor.position.set(0, 1.49, -0.11); visor.rotation.y = Math.PI;
    g.add(body, head, visor);
    return g;
  }

  place(p, yaw) { this.pos.copy(p); this.vel.set(0, 0, 0); if (yaw != null) this.yaw = yaw; }

  lookAt(target) {
    const d = target.clone().sub(this.pos);
    this.yaw = Math.atan2(-d.x, -d.z);
  }

  setMode(mode) {
    this.mode = mode;
    this.orbit.enabled = mode === 'orbit';
    this.avatar.visible = mode === 'third';
    if (mode === 'orbit') { this.orbit.target.copy(this.app.world.center); this.camera.position.copy(this.app.world.center).add(new THREE.Vector3(1, 0.7, 1).normalize().multiplyScalar(this.app.world.radius * 1.4)); }
    if (mode === 'cinematic') this.buildCinematicPath();
    this.app.renderer.setDof(mode === 'cinematic');
  }

  buildCinematicPath() {
    const w = this.app.world, pts = [];
    for (const cam of w.cameras || []) pts.push(cam.getWorldPosition(new THREE.Vector3()));
    const r = w.showcase ? w.radius * 1.6 : w.radius * 0.9, h = w.showcase ? w.size.y * 0.8 + 0.6 : Math.max(2.5, w.size.y * 0.6);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; pts.push(new THREE.Vector3(w.center.x + Math.cos(a) * r, w.floorY + h + Math.sin(a * 2) * h * 0.25, w.center.z + Math.sin(a) * r)); }
    this.cine.curve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    this.cine.t = 0;
  }

  forward() { return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }

  update(dt, input) {
    const look = input.look;
    if (this.mode !== 'orbit' && this.mode !== 'cinematic' && input.enabled) {
      const arrowYaw = ((input.down('ArrowRight') ? 1 : 0) - (input.down('ArrowLeft') ? 1 : 0)) * 1.8 * dt;
      if (arrowYaw) { this.yaw -= arrowYaw; }
    }
    if (this.mode !== 'orbit' && this.mode !== 'cinematic') {
      this.yaw -= look.x * 0.0022; this.pitch = clamp(this.pitch - look.y * 0.0022, -1.45, 1.45);
      if (input.down('KeyQ') && this.mode === 'free') this.pos.y -= 6 * dt;
    }
    if (this.mode === 'orbit') { this.orbit.update(); return; }
    if (this.mode === 'cinematic') {
      this.cine.t = (this.cine.t + dt * 0.012) % 1;
      const p = this.cine.curve.getPointAt(this.cine.t);
      this.camera.position.copy(p); this.camera.lookAt(this.app.world.center);
      this.app.renderer.setDof(true, p.distanceTo(this.app.world.center));
      return;
    }
    const ax = this.frozen ? { x: 0, y: 0 } : input.axis();
    const sprint = input.down('ShiftLeft', 'ShiftRight');
    const speed = (sprint ? this.run : this.walk) * this.speedScale;
    const fwd = this.forward(), right = new THREE.Vector3().crossVectors(fwd, UP);
    const wish = new THREE.Vector3().addScaledVector(fwd, ax.y).addScaledVector(right, ax.x);
    if (wish.lengthSq() > 1) wish.normalize();

    if (this.mode === 'free') {
      const f3 = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
      const move = new THREE.Vector3().addScaledVector(f3, ax.y).addScaledVector(right, ax.x).multiplyScalar(speed * 2.2 * dt);
      if (input.down('Space')) move.y += speed * 1.5 * dt;
      this.pos.add(move);
      this.applyCamera(); return;
    }

    this.vel.x = wish.x * speed; this.vel.z = wish.z * speed;
    if (!this.frozen && this.onGround && input.hit('Space')) { this.vel.y = this.jumpSpeed; this.onGround = false; this.app.audio?.sfx('jump'); }
    this.vel.y -= this.gravity * dt;
    this.moveHorizontal(this.vel.x * dt, this.vel.z * dt);
    this.moveVertical(dt);
    if (this.pos.y < this.app.world.floorY - 60) { this.place(this.app.spawn.clone(), this.yaw); this.app.ui?.toast('Kamu jatuh keluar dunia. Kembali ke titik awal.'); }
    this.applyCamera();
  }

  moveHorizontal(dx, dz) {
    const w = this.app.world, extra = this.app.extraColliders;
    const len = Math.hypot(dx, dz);
    if (len < 1e-6) return;
    const dir = new THREE.Vector3(dx / len, 0, dz / len);
    let blocked = null;
    for (const hgt of [this.step + 0.08, 1.0, this.height - 0.1]) {
      const o = this.pos.clone(); o.y += hgt;
      const h = w.raycast(o, dir, len + this.radius, extra);
      if (h && (!blocked || h.distance < blocked.distance)) blocked = h;
    }
    if (!blocked) { this.pos.addScaledVector(dir, len); return; }
    const n = blocked.face ? blocked.face.normal.clone().transformDirection(blocked.object.matrixWorld) : dir.clone().negate();
    n.y = 0; if (n.lengthSq() < 1e-4) return; n.normalize();
    if (n.dot(dir) > 0) n.negate();
    const allowed = Math.max(0, blocked.distance - this.radius);
    this.pos.addScaledVector(dir, allowed);
    const slide = dir.clone().addScaledVector(n, -dir.dot(n)).multiplyScalar(len - allowed);
    const sl = slide.length();
    if (sl > 1e-4) this.moveHorizontalOnce(slide.divideScalar(sl), sl);
  }

  moveHorizontalOnce(dir, len) {
    const w = this.app.world, extra = this.app.extraColliders;
    for (const hgt of [this.step + 0.08, 1.0, this.height - 0.1]) {
      const o = this.pos.clone(); o.y += hgt;
      const h = w.raycast(o, dir, len + this.radius, extra);
      if (h) return;
    }
    this.pos.addScaledVector(dir, len);
  }

  moveVertical(dt) {
    const w = this.app.world, extra = this.app.extraColliders;
    const origin = this.pos.clone(); origin.y += this.step + 0.4;
    const down = w.raycast(origin, new THREE.Vector3(0, -1, 0), 50, extra);
    const groundY = down ? down.point.y : -Infinity;
    const next = this.pos.y + this.vel.y * dt;
    if (this.vel.y <= 0 && next <= groundY + 0.001) { this.pos.y = groundY; this.vel.y = 0; this.onGround = true; this.groundObject = down.object; }
    else if (this.vel.y <= 0 && this.onGround && this.pos.y - groundY < this.step && this.pos.y - groundY > 0) { this.pos.y = groundY; this.vel.y = 0; }
    else {
      if (this.vel.y > 0) {
        const head = this.pos.clone(); head.y += this.height - 0.1;
        const up = w.raycast(head, UP, this.vel.y * dt + 0.15, extra);
        if (up) { this.vel.y = 0; }
      }
      this.pos.y += this.vel.y * dt; this.onGround = false;
    }
  }

  applyCamera() {
    const eye = this.pos.clone(); eye.y += this.height - 0.08;
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ'));
    if (this.mode === 'free' || this.mode === 'first') {
      this.camera.position.copy(this.mode === 'free' ? this.pos : eye);
      this.camera.quaternion.copy(q);
      this.avatar.visible = false;
    } else if (this.mode === 'third') {
      this.avatar.position.copy(this.pos); this.avatar.rotation.y = this.yaw;
      const back = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
      const target = eye.clone().add(new THREE.Vector3(0, 0.25, 0));
      const hit = this.app.world.raycast(target, back, 4.2, this.app.extraColliders);
      const dist = hit ? Math.max(0.6, hit.distance - 0.25) : 4;
      this.camera.position.copy(target).addScaledVector(back, dist);
      this.camera.quaternion.copy(q);
    }
  }
}
