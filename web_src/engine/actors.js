import * as THREE from 'three';

const PALETTE = ['#f2c26b', '#9aa7ff', '#7fd6c2', '#f29bb5', '#c3a6ff', '#ffd9a0'];

export class Actor {
  constructor(app, { node, meta, kind, procedural = false }) {
    this.app = app; this.node = node; this.meta = meta || { name: node.name, role: kind };
    this.kind = kind; this.procedural = procedural;
    this.name = this.meta.label || this.meta.name;
    this.home = node.position.clone();
    this.baseY = node.position.y;
    this.baseRotY = node.rotation.y;
    this.target = null; this.wait = 1 + Math.random() * 2;
    this.speed = kind === 'animal' ? 1.1 : 0.9;
    this.behavior = this.meta.behavior || (kind === 'animal' ? 'roam' : 'idle');
    this.roamRadius = this.meta.roamRadius || (kind === 'animal' ? 3.5 : 2.5);
    this.phase = Math.random() * 10;
    this.override = null; // game logic can drive the actor
    this.lines = (this.meta.dialogue && this.meta.dialogue.length) ? this.meta.dialogue : null;
    this.walkAction = null;
    this.bobAmp = 0;
    this.lastGreet = -99;
    this.pose = null;
  }

  worldPosition() { return this.node.getWorldPosition(new THREE.Vector3()); }

  setWorldPosition(p) {
    const parent = this.node.parent;
    const local = parent ? parent.worldToLocal(p.clone()) : p.clone();
    this.node.position.copy(local);
    this.baseY = local.y;
    if (this.pose) this.pose.baseY = local.y;
  }

  faceWorld(dir) {
    if (dir.lengthSq() < 1e-6) return;
    const angle = Math.atan2(dir.x, dir.z);
    const parentQ = this.node.parent ? this.node.parent.getWorldQuaternion(new THREE.Quaternion()) : new THREE.Quaternion();
    const want = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angle + (this.meta.forwardOffset || 0));
    const local = parentQ.invert().multiply(want);
    this.node.quaternion.slerp(local, 0.12);
  }

  update(dt, t) {
    const w = this.app.world;
    const pos = this.worldPosition();
    let moving = false;
    if (this.override) {
      moving = this.override(dt, this) === true;
    } else if (this.behavior === 'roam') {
      if (!this.target) {
        this.wait -= dt;
        if (this.wait <= 0) { const homeW = this.node.parent ? this.node.parent.localToWorld(this.home.clone()) : this.home.clone(); this.target = w.sample(this.app.rng, { near: homeW, radius: this.roamRadius, sameLevel: homeW.y }); }
      } else {
        const d = this.target.clone().sub(pos); d.y = 0;
        if (d.length() < 0.2) { this.target = null; this.wait = 1.5 + Math.random() * 3; }
        else { this.stepToward(this.target, dt); moving = true; }
      }
    }
    const player = this.app.player.pos;
    const dp = player.clone().sub(pos); dp.y = 0;
    if (!moving && !this.override && dp.length() < 4.5) this.faceWorld(dp);
    if (this.walkAction) this.walkAction.weight += ((moving ? 1 : 0) - this.walkAction.weight) * Math.min(1, dt * 4);
    if (this.procedural || !this.hasClips) {
      const amp = moving ? 0.06 : 0.015;
      this.bobAmp += (amp - this.bobAmp) * Math.min(1, dt * 3);
      this.node.position.y = this.baseY + Math.abs(Math.sin(t * (moving ? 9 : 2) + this.phase)) * this.bobAmp;
    }
    if (this.pose) this.updatePose(dt);
    if (dp.length() < 3 && t - this.lastGreet > 25) { this.lastGreet = t; this.app.ui?.bubble(this, this.greeting()); }
  }

  stepToward(target, dt, speed = this.speed) {
    const pos = this.worldPosition();
    const d = target.clone().sub(pos); d.y = 0;
    const len = d.length(); if (len < 1e-3) return;
    d.divideScalar(len);
    const stepLen = Math.min(len, speed * dt);
    const next = pos.clone().addScaledVector(d, stepLen);
    const hit = this.app.world.castDown(next.x, next.z, next.y + 1.2, 4);
    if (hit && Math.abs(hit.point.y - pos.y) < 0.7) next.y = hit.point.y + (this.meta.groundOffset || 0);
    else if (!hit) return;
    this.setWorldPosition(next);
    this.baseY = this.node.position.y;
    this.faceWorld(d);
  }

  greeting() {
    if (this.lines) return this.lines[0];
    if (this.kind === 'animal') return `${this.name} menoleh ke arahmu.`;
    return `Halo, aku ${this.name}. Tekan E untuk bicara.`;
  }

  talk() {
    if (this.kind === 'animal') return [`${this.name}`, this.meta.description || 'Belum ada data hewan ini. Tambahkan lewat panel Object Override di Blender.'];
    if (this.lines) return this.lines;
    return [`Aku ${this.name}.`, this.meta.description || 'Dunia ini dibangun dari project Blender. Silakan jelajahi setiap sudutnya.', 'Kalau bosan, coba tombol Kejutkan aku di dok bawah.'];
  }

  playPose(name, dur = 0.9) { this.pose = { name, t: 0, dur, baseQ: this.node.quaternion.clone(), baseY: this.baseY }; }

  updatePose(dt) {
    const p = this.pose; p.t += dt;
    const k = Math.min(1, p.t / p.dur), s = Math.sin(k * Math.PI);
    const n = this.node;
    n.quaternion.copy(p.baseQ);
    if (p.name === 'jump') n.position.y = p.baseY + s * 0.9;
    if (p.name === 'spin') n.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), k * Math.PI * 2));
    if (p.name === 'bow') n.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), s * 0.6));
    if (p.name === 'wave') n.quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.sin(k * Math.PI * 4) * 0.25));
    if (k >= 1) { n.quaternion.copy(p.baseQ); n.position.y = p.baseY; this.pose = null; }
  }
}

export class Actors {
  constructor(app) { this.app = app; this.list = []; this.procedural = []; }

  init() {
    const w = this.app.world;
    for (const [name, m] of w.meta) {
      if (m.role !== 'character' && m.role !== 'animal') continue;
      const node = w.byName.get(name);
      if (!node) continue;
      const a = new Actor(this.app, { node, meta: m, kind: m.role });
      a.hasClips = (m.clips || []).length > 0;
      const walk = (m.clips || []).find((c) => /walk|run/i.test(c));
      const clip = walk && w.clips.find((c) => c.name === walk);
      if (clip && w.mainMixer) { a.walkAction = w.mainMixer.clipAction(clip); a.walkAction.play(); a.walkAction.weight = 0; }
      this.list.push(a);
    }
  }

  of(kind) { return this.list.concat(this.procedural).filter((a) => kind === 'any' || a.kind === kind); }

  // Returns at least n actors of a kind, adding labelled procedural ones when the scene has fewer.
  ensure(kind, n, rng) {
    const have = this.of(kind === 'any' ? 'any' : kind);
    const out = have.slice(0, n);
    let i = 0;
    while (out.length < n) {
      const k = kind === 'any' ? (i % 2 ? 'animal' : 'character') : kind;
      const p = this.app.world.sample(rng, { near: this.app.world.center, radius: this.app.world.radius * 0.9 });
      out.push(this.spawnProcedural(k, p, i++));
    }
    return out;
  }

  spawnProcedural(kind, pos, i = 0) {
    const color = PALETTE[(this.procedural.length + i) % PALETTE.length];
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.05, emissive: color, emissiveIntensity: 0.12 });
    const g = new THREE.Group();
    if (kind === 'animal') {
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.5, 4, 12), mat); body.rotation.x = Math.PI / 2; body.position.y = 0.42;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), mat); head.position.set(0, 0.6, 0.42);
      g.add(body, head);
      for (const [x, z] of [[-0.14, 0.2], [0.14, 0.2], [-0.14, -0.2], [0.14, -0.2]]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.32, 8), mat); leg.position.set(x, 0.16, z); g.add(leg); }
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 8), mat); ear.position.set(0.08, 0.78, 0.42); g.add(ear, ear.clone().translateX(-0.16));
    } else {
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.8, 4, 12), mat); body.position.y = 0.66;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.19, 20, 14), mat); head.position.y = 1.38;
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), new THREE.MeshBasicMaterial({ color: '#1a1d3a' }));
      eye.position.set(0.07, 1.42, 0.16); g.add(body, head, eye, eye.clone().translateX(-0.14));
    }
    g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
    const names = kind === 'animal' ? ['Kelinci Mimpi', 'Rusa Bintang', 'Rubah Senja', 'Burung Fajar', 'Kucing Bulan', 'Kura Embun'] : ['Pengembara Lila', 'Penjaga Aru', 'Pelukis Nara', 'Pemandu Sora', 'Penyair Bima', 'Penjelajah Kai'];
    const label = names[this.procedural.length % names.length];
    g.name = '__dreams_actor_' + this.procedural.length;
    g.position.copy(pos);
    this.app.world.dynamic.add(g);
    const meta = { name: g.name, label, role: kind, generated: true, description: 'Aktor prosedural yang ditambahkan 100 DREAMS karena scene belum punya ' + (kind === 'animal' ? 'hewan' : 'karakter') + '.' };
    const a = new Actor(this.app, { node: g, meta, kind, procedural: true });
    a.behavior = 'roam';
    this.procedural.push(a);
    return a;
  }

  removeProcedural() {
    for (const a of this.procedural) { a.node.parent?.remove(a.node); a.node.traverse((m) => { if (m.isMesh) { m.geometry.dispose(); m.material.dispose?.(); } }); }
    this.procedural.length = 0;
  }

  update(dt, t) { for (const a of this.list) a.update(dt, t); for (const a of this.procedural) a.update(dt, t); }

  nearest(pos, maxDist = 3) {
    let best = null, bd = maxDist;
    for (const a of this.of('any')) { const d = a.worldPosition().distanceTo(pos); if (d < bd) { bd = d; best = a; } }
    return best;
  }
}
