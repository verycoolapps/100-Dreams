import * as THREE from 'three';
import { Renderer, detectCapabilities, suggestPreset, PRESET_ORDER } from './engine/render.js';
import { World } from './engine/world.js';
import { Input, Player } from './engine/player.js';
import { Actors } from './engine/actors.js';
import { Audio } from './engine/audio.js';
import { GameEngine } from './games/engine.js';
import { Randomizer } from './games/randomizer.js';
import { UI } from './ui.js';
import { mulberry32, store } from './util.js';
import catalog from '../web/games.json';

class App {
  constructor() {
    this.data = JSON.parse(document.getElementById('dreams-data').textContent);
    this.canvas = document.getElementById('world');
    this.caps = detectCapabilities();
    this.rng = mulberry32(1234567);
    this.extraColliders = [];
    this.ui = new UI(this);
    this.ui.loader(this.data.name);
    this.hoverT = 0;
    this.clock = new THREE.Clock();
  }

  async boot() {
    if (!this.caps.webgl2) throw new Error('Browser ini tidak mendukung WebGL2. Gunakan Chrome, Edge, Firefox, atau Safari versi terbaru.');
    const r = this.renderer = new Renderer(this.canvas, this.caps);
    this.scene = r.scene; this.camera = r.camera;
    const stored = store.get('preset', null);
    const wanted = this.data.defaultPreset || 'cinematic';
    const sug = suggestPreset(this.caps);
    const preset = stored || PRESET_ORDER[Math.max(PRESET_ORDER.indexOf(wanted), PRESET_ORDER.indexOf(sug))];
    if (stored) r.auto = false;
    r.onAutoChange = (p, fps) => this.ui.toast(`Kualitas grafis diturunkan ke ${p} (rata-rata ${Math.round(fps)} FPS) agar tetap mulus.`);

    const buf = await this.loadAsset('dreams-glb', this.data.glbUrl, (f) => this.ui.progress(f * 0.5, 'Memuat dunia'));
    this.audio = new Audio();
    this.world = new World(this);
    await this.world.load(buf, this.data, (f, t) => this.ui.progress(0.5 + f * 0.4, t));
    if (this.data.environment?.hdri) {
      try { const env = await this.loadAsset('dreams-env', this.data.environment.hdriUrl, () => {}); await this.world.loadEnvironmentMap(env, this.data.environment.hdri); }
      catch (e) { console.warn('HDRI gagal dimuat, memakai langit prosedural', e); }
    }
    this.input = new Input(this.canvas);
    this.player = new Player(this);
    this.spawn = this.world.spawnPoint(this.data);
    this.player.place(this.spawn); this.player.lookAt(this.world.focus || this.world.center);
    this.player.mode = this.world.showcase ? 'orbit' : 'first';
    this.actors = new Actors(this); this.actors.init();
    this.world.buildBaguaOverlay(this.data.fengshui);
    this.games = new GameEngine(this, catalog);
    this.randomizer = new Randomizer(this);
    r.apply(preset);
    this.ui.progress(1, 'Siap');
    this.ui.build();
    this.bindInteraction();
    window.__DREAMS__ = this;
    window.__DREAMS_TEST__ = () => this.games.selftestAll();
    this.loop();
    document.documentElement.dataset.ready = '1';
  }

  async loadAsset(tagId, url, onProgress) {
    const tag = document.getElementById(tagId);
    if (tag && tag.textContent.trim().length > 10) {
      onProgress(0.3);
      const res = await fetch('data:application/octet-stream;base64,' + tag.textContent.trim());
      const ab = await res.arrayBuffer(); onProgress(1); tag.textContent = ''; return ab;
    }
    if (!url) throw new Error('Aset dunia tidak ditemukan di dalam HTML.');
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Gagal memuat ${url} (${res.status})`);
    const total = +res.headers.get('content-length') || 0;
    if (!res.body || !total) { const ab = await res.arrayBuffer(); onProgress(1); return ab; }
    const reader = res.body.getReader(); const chunks = []; let got = 0;
    for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; onProgress(got / total); }
    const out = new Uint8Array(got); let o = 0; for (const c of chunks) { out.set(c, o); o += c.length; }
    return out.buffer;
  }

  enter(mode) {
    this.audio.start();
    this.ui.hideLoader();
    this.ui.setMode(mode, true);
    if (mode === 'first') this.lockPointer();
    this.ui.toast('Selamat datang. Tekan G untuk 100 game, M untuk peta.');
  }

  lockPointer() { if (['first', 'third', 'free'].includes(this.player.mode) && !this.ui.root.classList.contains('is-touch')) this.canvas.requestPointerLock?.()?.catch?.(() => {}); }
  releasePointer() { if (document.pointerLockElement) document.exitPointerLock(); }

  bindInteraction() {
    this.raycaster = new THREE.Raycaster();
    this.ui.entry(this.data, (m) => this.enter(m));
  }

  pick(useMouse) {
    const locked = document.pointerLockElement === this.canvas;
    const ndc = !useMouse && (locked || ['first', 'third'].includes(this.player.mode) && !this.ui.root.classList.contains('is-touch')) ? new THREE.Vector2(0, 0) : this.input.mouse;
    this.raycaster.setFromCamera(ndc, this.camera);
    this.raycaster.far = 400;
    const hits = this.raycaster.intersectObjects([this.world.root, this.world.dynamic], true);
    for (const h of hits) {
      let o = h.object, skip = false;
      while (o) { if (o.name === '__dreams_avatar' || o.isSprite) { skip = true; break; } o = o.parent; }
      if (skip || !h.object.visible) continue;
      const actor = this.actors.of('any').find((a) => { let p = h.object; while (p) { if (p === a.node) return true; p = p.parent; } return false; });
      return { ...h, actor };
    }
    return null;
  }

  inspect(node) {
    const box = new THREE.Box3().setFromObject(node); const c = box.getCenter(new THREE.Vector3()); const r = Math.max(0.4, box.getSize(new THREE.Vector3()).length() / 2);
    this.ui.setMode('orbit', true);
    this.player.orbit.target.copy(c);
    const dir = this.camera.position.clone().sub(c).normalize(); if (dir.lengthSq() < 0.1) dir.set(1, 0.6, 1).normalize();
    this.camera.position.copy(c).addScaledVector(dir, r * 2.6 + 0.6);
    this.ui.toast('Mode orbit: seret untuk memutar objek. Pilih mode Orang pertama untuk kembali berjalan.');
  }

  goTo(pos) {
    const p = this.world.sample(this.rng, { near: pos, radius: 2.5, sameLevel: pos.y });
    if (['orbit', 'cinematic'].includes(this.player.mode)) this.ui.setMode('first', true);
    this.player.place(p); this.player.lookAt(pos);
  }

  step(dt, test = false) {
    const t = this.clock.elapsedTime;
    const modalOpen = !test && this.ui.modal.childElementCount > 0;
    this.input.enabled = !modalOpen;
    if (!modalOpen) this.player.update(dt, this.input);
    this.actors.update(dt, t);
    this.world.update(dt, t);
    this.games.update(dt, this.input);
    if (!test) this.interact(dt);
    this.input.endFrame();
  }

  interact(dt) {
    const inGame = !!this.games.active;
    const input = this.input;
    this.hoverT += dt;
    if (this.hoverT > 0.12) {
      this.hoverT = 0;
      const h = this.pick();
      let target = null, prompt = '';
      if (h) {
        const door = this.world.doors.find((d) => { let p = h.object; while (p) { if (p === d.node) return true; p = p.parent; } return false; });
        if (h.actor && h.distance < 4) { target = h.actor.node; prompt = `E: bicara dengan ${h.actor.name}`; }
        else if (door && h.distance < 3.5) { target = door.node; prompt = `E: ${door.open ? 'tutup' : 'buka'} pintu`; }
        else { const m = this.world.metaFor(h.object); if (m && h.distance < 30 && !['floor', 'terrain', 'wall'].includes(m.meta.role)) { target = m.node; if (!inGame) prompt = `Klik: info ${m.meta.label || m.meta.name}`; } }
        this.hover = { h, door, target };
      } else this.hover = null;
      this.renderer.setHighlight(target ? [target] : []);
      if (!inGame || !this.games.active?.stage || this.games.active.stage.status === 'playing') this.ui.setPrompt(prompt);
    }
    if (input.clicked) {
      const locked = document.pointerLockElement === this.canvas;
      if (this.games.wantsPick()) { if (!locked && ['first', 'third', 'free'].includes(this.player.mode) && !this.ui.root.classList.contains('is-touch')) this.lockPointer(); else this.games.pick(this.pick()); }
      else if (!locked && ['first', 'third', 'free'].includes(this.player.mode) && !this.ui.root.classList.contains('is-touch')) this.lockPointer();
      else if (!inGame) { const h = this.pick(); const m = h && (h.actor ? { meta: h.actor.meta, node: h.actor.node } : this.world.metaFor(h.object)); this.ui.infoFor(m?.meta, m?.node); }
    }
    if (input.hit('KeyE')) {
      if (this.games.wantsPick()) this.games.pick(this.pick());
      else if (this.hover?.door && this.hover.h.distance < 3.5) this.world.toggleDoor(this.hover.door);
      else if (this.hover?.h.actor && this.hover.h.distance < 4 && !inGame) this.ui.dialogue(this.hover.h.actor);
      else if (!inGame) { const near = this.actors.nearest(this.player.pos, 2.5); if (near) this.ui.dialogue(near); }
    }
  }

  loop() {
    const frame = () => {
      requestAnimationFrame(frame);
      const dt = Math.min(0.05, this.clock.getDelta());
      this.step(dt);
      this.renderer.trackFps(dt, this.clock.elapsedTime);
      this.renderer.render();
      this.ui.updateBubbles();
    };
    frame();
  }
}

const app = new App();
app.boot().catch((e) => { console.error(e); app.ui.loadError(e); });
