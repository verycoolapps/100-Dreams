import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { el, fmtNum, clamp } from '../util.js';
import { makeQuestions } from './quiz.js';

export const CONTROLS = {
  move: 'WASD atau joystick untuk bergerak, Shift untuk lari, Spasi untuk lompat, mouse atau geser layar untuk melihat. Esc untuk jeda.',
  aim: 'Bergerak seperti biasa. Arahkan tanda bidik atau kursor ke objek lalu klik atau tekan E. H untuk petunjuk arah. Esc untuk jeda.',
  overlay: 'Klik atau ketuk pilihan di panel permainan. Esc untuk jeda.',
  photo: 'Bergerak dan bidik objek. Tekan P atau tombol Foto untuk memotret. Esc untuk jeda.',
  carry: 'Arahkan ke balok lalu tekan E untuk mengambil, E lagi untuk meletakkan. R memutar. F menilai tata letak. Esc untuk jeda.',
  studio: 'Geser slider di panel sampai cocok dengan target. Hasil terlihat langsung di dunia. Esc untuk jeda.',
  talk: 'Bergerak ke karakter lalu tekan E untuk bicara. Esc untuk jeda.',
  slowmo: 'Bergerak seperti biasa. Tahan Q untuk memperlambat waktu bagi pemburu selama energi masih ada. Esc untuk jeda.',
};

const GOLD = '#ffd27a', IRIS = '#9aa7ff', MINT = '#7fe0c4', ROSE = '#ff8fb1', RED = '#ff5d6c';
const glow = (color, k = 2.2) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: k, roughness: 0.25, metalness: 0.1 });

function orb(ctx, color, r = 0.28) {
  const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), glow(color));
  const halo = new THREE.Mesh(new THREE.SphereGeometry(r * 1.9, 16, 12), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.13, depthWrite: false }));
  m.add(halo); ctx.group.add(m); return m;
}
function beam(ctx, color, h = 7) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.22, h, 12, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide }));
  m.position.y = h / 2; return m;
}
function ring(ctx, color, r = 1.3) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(r, 0.09, 12, 48), glow(color, 1.8)); ctx.group.add(m); return m;
}
function label(text, color = '#fff6df', size = 0.9) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d'); g.fillStyle = 'rgba(20,22,52,0.78)'; g.beginPath(); g.roundRect(8, 8, 240, 112, 40); g.fill();
  g.fillStyle = color; g.font = '700 64px Figtree, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 128, 68);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, depthTest: false, transparent: true, toneMapped: false, fog: false })); s.scale.set(size, size / 2, 1); s.renderOrder = 20; return s;
}
function portal(ctx, color = MINT) {
  const g = new THREE.Group();
  const r = ring(ctx, color, 1.2); r.position.y = 1.3; g.add(r);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1.1, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false }));
  disc.position.y = 1.3; g.add(disc, beam(ctx, color, 10)); ctx.group.add(g); return g;
}
function zoneDisc(ctx, color, r = 1.2) {
  const m = new THREE.Mesh(new THREE.RingGeometry(r * 0.82, r, 40), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false }));
  m.rotation.x = -Math.PI / 2;
  const fill = new THREE.Mesh(new THREE.CircleGeometry(r * 0.82, 40), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide }));
  fill.rotation.x = -Math.PI / 2; const g = new THREE.Group(); g.add(m, fill); ctx.group.add(g); return g;
}
function hotCold(ctx, target, maxD) {
  const d = ctx.playerCenter().distanceTo(target);
  const v = clamp(1 - d / maxD, 0, 1);
  const word = v > 0.85 ? 'Membara' : v > 0.65 ? 'Panas' : v > 0.4 ? 'Hangat' : v > 0.2 ? 'Sejuk' : 'Dingin';
  ctx.setMeter(v, `${word} · ${fmtNum(d, 0)} m`);
}
function relDir(ctx, target) {
  const p = ctx.player, d = target.clone().sub(p.pos); const dist = Math.hypot(d.x, d.z);
  const ang = Math.atan2(-d.x, -d.z) - p.yaw; const a = Math.atan2(Math.sin(ang), Math.cos(ang));
  const side = Math.abs(a) < 0.4 ? 'di depanmu' : Math.abs(a) > 2.7 ? 'di belakangmu' : a > 0 ? 'di sebelah kiri' : 'di sebelah kanan';
  const up = d.y > 2 ? ', lebih tinggi' : d.y < -2 ? ', lebih rendah' : '';
  return `${side}, sekitar ${fmtNum(dist, 0)} m${up}`;
}

// ---------- Hazards (chasers / bouncers), shared by several mechanics ----------
class Hazards {
  constructor(ctx, n, speed, mode = 'chase') {
    this.ctx = ctx; this.speed = speed; this.mode = mode; this.list = []; this.scale = 1;
    this.center = ctx.player.pos.clone();
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), glow(RED, 2.6));
      this.respawn(m, i); ctx.group.add(m);
      const a = ctx.rng() * Math.PI * 2; m.userData.v = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)).multiplyScalar(speed);
      this.list.push(m);
    }
  }
  respawn(m) {
    const c = this.ctx.player.pos, a = this.ctx.rng() * Math.PI * 2, r = 11 + this.ctx.rng() * 6;
    m.position.set(c.x + Math.cos(a) * r, c.y + 0.9, c.z + Math.sin(a) * r);
  }
  update(dt) {
    const pc = this.ctx.playerCenter();
    for (const m of this.list) {
      if (this.mode === 'bounce') {
        m.position.addScaledVector(m.userData.v, dt * this.scale);
        const d = m.position.clone().sub(this.center); d.y = 0;
        if (d.length() > 14) { const n = d.normalize(); m.userData.v.reflect(n); m.position.addScaledVector(n, -0.2); }
        m.position.y = pc.y;
      } else {
        const d = pc.clone().sub(m.position); const len = d.length();
        if (len > 40) this.respawn(m);
        m.position.addScaledVector(d.normalize(), this.speed * dt * this.scale);
      }
      m.rotation.x += dt * 2; m.rotation.y += dt * 3;
      if (m.position.distanceTo(pc) < 0.85) { this.ctx.loseLife('Terkena pemburu'); this.respawn(m); }
    }
  }
}

// =====================================================================
class Mech {
  constructor(ctx) { this.ctx = ctx; this.p = ctx.p; this.rng = ctx.rng; }
  setup() {}
  update() {}
  dispose() {}
}

// ---------- 1. COLLECT ----------
class Collect extends Mech {
  static objective(p) { return `Kumpulkan ${p.count} ${p.ordered ? 'rune berurutan' : 'kristal'}${p.exit ? ', lalu masuk ke portal keluar' : ''}.`; }
  static rules(p) {
    const r = [`Waktu ${p.time} detik. Waktu habis berarti kalah.`, 'Sentuh kristal untuk mengambilnya. Tiap kristal bernilai 100 poin.'];
    if (p.ordered) r.push('Hanya rune dengan nomor berikutnya yang bisa diambil.');
    if (p.hidden) r.push('Kristal kecil dan redup. Indikator panas-dingin menunjukkan jarak ke kristal terdekat.');
    if (p.hazards) r.push(`${p.hazards} pemburu mengejar. Tiga kali terkena berarti kalah.`);
    if (p.slowmo) r.push('Tahan Q untuk memperlambat pemburu; energi pulih saat tidak dipakai.');
    if (p.dimension) r.push('Warna dunia bergeser selama permainan.');
    return r;
  }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    if (p.hazards) { ctx.lives = ctx.maxLives = 3; }
    const pts = ctx.points(p.count, { interior: p.interior, sameLevel: p.interior ? undefined : ctx.player.pos.y });
    this.tokens = pts.map((pt, i) => {
      const color = p.ordered ? IRIS : p.hidden ? GOLD : [GOLD, MINT, ROSE, IRIS][i % 4];
      const m = orb(ctx, color, p.hidden ? 0.17 : 0.28);
      m.position.copy(pt).add(new THREE.Vector3(0, p.hidden ? 0.35 : 1.0, 0));
      if (!p.hidden) m.add(beam(ctx, color, 6));
      if (p.ordered) { const l = label(String(i + 1)); l.position.y = 0.7; m.add(l); }
      m.userData.i = i; return m;
    });
    this.got = 0; this.next = 0;
    if (p.hazards) this.haz = new Hazards(ctx, p.hazards, 3.2);
    this.energy = 1;
    if (p.dimension) {
      const u = ctx.world.skyUniforms; const old = u && [u.top.value.clone(), u.mid.value.clone(), u.low.value.clone()];
      if (u) { u.top.value.set('#0f3b3a'); u.mid.value.set('#d26bff'); u.low.value.set('#081a2a'); }
      const exp = ctx.app.renderer.renderer.toneMappingExposure; ctx.app.renderer.renderer.toneMappingExposure = exp * 1.15;
      ctx.onDispose(() => { if (u) { u.top.value.copy(old[0]); u.mid.value.copy(old[1]); u.low.value.copy(old[2]); } ctx.app.renderer.renderer.toneMappingExposure = exp; });
    }
  }
  update(dt, input) {
    const { ctx, p } = this, t = performance.now() / 1000;
    for (const m of this.tokens) { if (!m.visible) continue; m.rotation.y += dt * 1.6; m.position.y += Math.sin(t * 2 + m.userData.i) * 0.002; }
    if (!this.exitPortal) {
      for (const m of this.tokens) {
        if (!m.visible) continue;
        const ok = !p.ordered || m.userData.i === this.next;
        if (p.ordered) m.material.emissiveIntensity = m.userData.i === this.next ? 3 : 0.5;
        if (ok && ctx.near(m.position, 1.35)) {
          m.visible = false; this.got++; this.next++; ctx.addScore(100); ctx.sfx('collect');
          if (this.got >= this.tokens.length) {
            if (p.exit) { this.exitPortal = portal(ctx); this.exitPortal.position.copy(ctx.stage.origin); ctx.toast('Semua terkumpul. Portal keluar terbuka di titik awal.'); }
            else return ctx.win();
          }
        }
      }
      if (p.hidden) { const rem = this.tokens.filter((m) => m.visible); if (rem.length) { const near = rem.reduce((a, b) => (a.position.distanceTo(ctx.playerCenter()) < b.position.distanceTo(ctx.playerCenter()) ? a : b)); hotCold(ctx, near.position, ctx.world.radius); } }
    } else {
      this.exitPortal.children[0].rotation.z += dt;
      if (ctx.near(this.exitPortal.position.clone().add(new THREE.Vector3(0, 1.3, 0)), 1.6)) return ctx.win();
    }
    ctx.setProgress(`${p.ordered ? 'Rune' : 'Kristal'} ${this.got}/${this.tokens.length}${this.exitPortal ? ' · menuju portal' : ''}`);
    if (this.haz) {
      if (p.slowmo) {
        const holding = input.down('KeyQ') && this.energy > 0;
        this.energy = clamp(this.energy + (holding ? -0.35 : 0.12) * dt, 0, 1);
        this.haz.scale = holding ? 0.25 : 1;
        if (!p.hidden) ctx.setMeter(this.energy, holding ? 'Waktu melambat' : 'Energi waktu');
      }
      this.haz.update(dt);
    }
  }
  autoplay(tick) {
    this.ctx.godMode = true;
    for (const m of this.tokens.slice().sort((a, b) => a.userData.i - b.userData.i)) { this.ctx.teleport(m.position.clone().add(new THREE.Vector3(0, -0.9, 0))); tick(1); }
    if (this.exitPortal) { this.ctx.teleport(this.exitPortal.position.clone().add(new THREE.Vector3(0, 0.4, 0))); tick(1); }
  }
}

// ---------- 2. FIND (point at objects matching clues) ----------
class Find extends Mech {
  static objective(p) { return `Temukan dan tunjuk ${p.count} objek sesuai petunjuk.`; }
  static rules(p) { return [`Waktu ${p.time} detik.`, 'Jawaban benar bernilai 150 poin.', `Salah tunjuk memotong ${p.penalty || 10} detik.`, 'Tekan H untuk petunjuk arah (mengurangi 50 poin).']; }
  static get controls() { return 'aim'; }
  setup() {
    const { ctx, p } = this;
    let pool;
    if (p.filter === 'character' || p.filter === 'animal') {
      const actors = ctx.app.actors.ensure(p.filter, p.count, this.rng);
      pool = actors.map((a) => a.meta);
      this.actorNodes = new Map(actors.map((a) => [a.meta.name, a.node]));
    } else pool = ctx.objects(p.filter);
    if (!pool.length) pool = ctx.objects('all');
    this.clues = [];
    const used = new Set();
    const kinds = p.clue === 'mixed' ? ['name', 'material', 'category', 'size'] : [p.clue];
    for (const m of this.rng.shuffle(pool)) {
      if (this.clues.length >= p.count) break;
      const kind = this.rng.pick(kinds);
      const c = this.makeClue(kind, m, pool);
      if (!c || used.has(c.key)) continue;
      used.add(c.key); this.clues.push(c);
    }
    if (!this.clues.length && pool.length) this.clues.push(this.makeClue('name', pool[0], pool));
    this.i = 0; this.pool = pool; this.clueT = 0;
  }
  makeClue(kind, m, pool) {
    const nameOf = (x) => x.label || x.name;
    if (kind === 'material' && m.materials?.[0]) { const mat = m.materials[0]; return { key: 'mat:' + mat, text: `Objek yang memakai material “${mat}”`, test: (x) => x.materials?.includes(mat), target: m }; }
    if (kind === 'category' && m.role && m.roleLabel) { const role = m.role; return { key: 'role:' + role, text: `Sebuah objek kategori ${m.roleLabel.toLowerCase()}`, test: (x) => x.role === role, target: m }; }
    if (kind === 'size') { const h = m.dims[1]; return { key: 'size:' + m.name, text: `Objek setinggi kira-kira ${fmtNum(h, 1)} m${m.collection ? ` di koleksi “${m.collection}”` : ''}`, test: (x) => x === m || (Math.abs(x.dims[1] - h) < Math.max(0.15, h * 0.08) && x.collection === m.collection), target: m }; }
    return { key: 'name:' + m.name, text: `Temukan “${nameOf(m)}”`, test: (x) => x === m || x.name === m.name, target: m };
  }
  get current() { return this.clues[this.i]; }
  update(dt, input) {
    const { ctx } = this;
    const c = this.current; if (!c) return ctx.win();
    this.clueT += dt;
    ctx.setProgress(`Petunjuk ${this.i + 1}/${this.clues.length}: ${c.text}`);
    if (input.hit('KeyH')) { ctx.addScore(-50); this.hintOn = true; }
    if (this.hintOn) ctx.setHint('Petunjuk: ' + relDir(ctx, this.posOf(c.target)));
  }
  posOf(m) { const n = this.actorNodes?.get(m.name); return n ? n.getWorldPosition(new THREE.Vector3()) : this.ctx.world.worldPos(m); }
  onPick(hit) {
    const { ctx, p } = this;
    const c = this.current; if (!c || !hit) return;
    let meta = hit.actor?.meta || ctx.world.metaFor(hit.object)?.meta;
    if (!meta) { let o = hit.object; while (o && !meta) { for (const [k, n] of this.actorNodes || []) if (n === o) meta = this.pool.find((x) => x.name === k); o = o.parent; } }
    if (meta && c.test(meta)) {
      ctx.addScore(150); ctx.sfx('good'); ctx.toast(`Benar: ${meta.label || meta.name}`);
      this.i++; this.hintOn = false; ctx.setHint('');
      if (this.i >= this.clues.length) ctx.win();
    } else {
      ctx.sfx('bad'); ctx.stage.time -= (p.penalty || 10); ctx.toast(meta ? `Bukan itu (${meta.label || meta.name}). −${p.penalty || 10} detik.` : `Tidak ada objek di situ. −${p.penalty || 10} detik.`);
    }
  }
  autoplay(tick) {
    while (this.current && this.ctx.stage.status === 'playing') {
      const t = this.current.target;
      const node = this.actorNodes?.get(t.name) || this.ctx.world.nodeFor(t);
      let mesh = null; node.traverse((o) => { if (!mesh && o.isMesh) mesh = o; });
      this.onPick({ object: mesh || node, actor: this.actorNodes?.has(t.name) ? { meta: t } : null }); tick(1);
    }
  }
}

// ---------- 3. RACE (ordered gates; landmarks / actors / rival) ----------
class Race extends Mech {
  static objective(p) { return p.talk ? `Bicara dengan ${p.count} karakter.` : p.rival ? `Lewati ${p.count} gerbang sebelum rivalmu.` : `Lewati ${p.count} gerbang secara berurutan.`; }
  static rules(p) {
    const r = [`Waktu ${p.time} detik.`, 'Gerbang aktif bersinar terang; gerbang berikutnya tampak redup.', 'Tiap gerbang bernilai 100 poin.'];
    if (p.timeBonus) r.push(`Setiap gerbang menambah ${p.timeBonus} detik.`);
    if (p.rival) r.push('Jika rival menyelesaikan semua gerbang lebih dulu, kamu kalah.');
    if (p.hazards) r.push(`${p.hazards} pemburu mengejar. Tiga kali terkena berarti kalah.`);
    if (p.talk) r.push('Mendekat lalu tekan E untuk berbicara.');
    return r;
  }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    this.actors = null;
    let pts;
    if (p.anchor === 'character' || p.anchor === 'animal') { this.actors = ctx.app.actors.ensure(p.anchor, p.count, this.rng); pts = this.actors.map((a) => a.worldPosition()); }
    else if (p.anchor === 'landmark') {
      const big = ctx.objects('large').slice(0, p.count);
      pts = big.map((m) => { const c = ctx.world.worldPos(m); const hit = ctx.world.sample(this.rng, { near: c, radius: Math.max(2, m.maxDim * 0.7) }); hit.meta = m; return hit; });
      while (pts.length < p.count) pts.push(ctx.world.sample(this.rng));
    } else pts = ctx.points(p.count, { sameLevel: ctx.player.pos.y });
    // nearest-neighbour ordering from the player
    const order = []; let cur = ctx.player.pos.clone(); const left = pts.slice();
    while (left.length) { let bi = 0; left.forEach((q, i) => { if (q.distanceTo(cur) < left[bi].distanceTo(cur)) bi = i; }); cur = left[bi]; order.push(left.splice(bi, 1)[0]); }
    this.gates = order.map((pt, i) => {
      const g = new THREE.Group(); const r = ring(ctx, i === 0 ? GOLD : IRIS); r.position.y = 1.4; g.add(r);
      g.add(beam(ctx, i === 0 ? GOLD : IRIS, 8)); g.position.copy(pt); ctx.group.add(g);
      if (pt.meta) { const l = label(String(i + 1)); l.position.y = 3; g.add(l); }
      g.userData = { i, meta: pt.meta, actor: this.actors ? this.actors[this.actors.findIndex((a) => a.worldPosition().distanceTo(pt) < 0.01)] : null };
      return g;
    });
    this.idx = 0;
    if (p.hazards) { ctx.lives = ctx.maxLives = 3; this.haz = new Hazards(ctx, p.hazards, 3.0); }
    if (p.rival) {
      this.rival = ctx.app.actors.ensure('character', 1, this.rng)[0];
      const start = ctx.player.pos.clone().add(new THREE.Vector3(1.5, 0, 0));
      const saved = this.rival.worldPosition();
      this.rival.setWorldPosition(start); this.rivalIdx = 0;
      this.rival.override = (dt, a) => {
        const g = this.gates[this.rivalIdx]; if (!g) return false;
        const target = g.position;
        const pos = a.worldPosition(); const d = target.clone().sub(pos); d.y = 0;
        const sp = 3.3 * (ctx.session.difficulty || 1);
        if (d.length() < 0.6) { this.rivalIdx++; if (this.rivalIdx >= this.gates.length && !ctx.test) ctx.lose('Rival tiba lebih dulu'); return false; }
        d.normalize(); const next = pos.addScaledVector(d, Math.min(sp * dt, d.length() + 1));
        const h = ctx.world.castDown(next.x, next.z, next.y + 3, 8); if (h) next.y = h.point.y;
        a.setWorldPosition(next); a.faceWorld(d); return true;
      };
      ctx.onDispose(() => { this.rival.override = null; if (!this.rival.procedural) this.rival.setWorldPosition(saved); });
    }
  }
  update(dt, input) {
    const { ctx, p } = this;
    const g = this.gates[this.idx];
    this.gates.forEach((q, i) => { q.visible = i >= this.idx && i <= this.idx + 1; const r = q.children[0]; r.material.emissiveIntensity = i === this.idx ? 2.4 : 0.6; r.lookAt(ctx.app.camera.position.x, q.position.y + 1.4, ctx.app.camera.position.z); r.rotation.z += dt; });
    if (g.userData.actor) g.position.copy(g.userData.actor.worldPosition());
    const center = g.position.clone().add(new THREE.Vector3(0, 1.0, 0));
    if (p.talk) {
      if (ctx.near(center, 2.6) && input.hit('KeyE')) { ctx.app.ui.bubble(g.userData.actor, g.userData.actor.talk()[0]); this.pass(); }
      else if (ctx.near(center, 2.6)) ctx.setHint('Tekan E untuk bicara');
      else ctx.setHint('');
    } else if (ctx.near(center, 1.8)) {
      this.pass();
      if (g.userData.meta && !ctx.test) ctx.toast(`Landmark: ${g.userData.meta.label || g.userData.meta.name}`);
      if (g.userData.actor && p.anchor === 'animal') ctx.app.ui.infoFor(g.userData.actor.meta);
    }
    ctx.setProgress(`Gerbang ${this.idx}/${this.gates.length}${this.rival ? ` · rival ${this.rivalIdx}/${this.gates.length}` : ''}`);
    this.haz?.update(dt);
  }
  pass() {
    const { ctx, p } = this;
    this.idx++; ctx.addScore(100); ctx.sfx('collect');
    if (p.timeBonus) ctx.addTime(p.timeBonus);
    if (this.idx >= this.gates.length) ctx.win();
  }
  autoplay(tick) {
    this.ctx.godMode = true;
    while (this.idx < this.gates.length && this.ctx.stage.status === 'playing') {
      const g = this.gates[this.idx];
      this.ctx.teleport(g.position.clone().add(new THREE.Vector3(0, 0.1, 0)));
      if (this.p.talk) { this.ctx.app.input.pressed.add('KeyE'); }
      tick(1);
    }
  }
}

// ---------- 4. FOLLOW (stay close to a moving target) ----------
class Follow extends Mech {
  static objective(p) { return `Tetap dalam radius ${p.radius} m dari target selama total ${p.hold} detik.`; }
  static rules(p) { return [`Batas waktu ${p.time} detik.`, `Jika lebih dari ${p.maxAway} m selama 6 detik berturut-turut, jejak hilang dan kamu kalah.`, 'Skor bertambah 10 per detik saat berada dekat target.']; }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    this.target = ctx.app.actors.ensure(p.target, 1, this.rng)[0];
    const saved = this.target.worldPosition();
    const homeY = saved.y;
    this.held = 0; this.away = 0; this.dest = null;
    this.marker = orb(ctx, GOLD, 0.12);
    this.target.override = (dt, a) => {
      const pos = a.worldPosition();
      if (!this.dest || pos.distanceTo(this.dest) < 0.6) this.dest = ctx.world.sample(this.rng, { near: pos, radius: 10, sameLevel: homeY });
      a.stepToward(this.dest, dt, 1.7 * (ctx.session.difficulty || 1));
      if (a.worldPosition().distanceTo(pos) < 0.001) this.dest = null;
      return true;
    };
    ctx.onDispose(() => { this.target.override = null; if (!this.target.procedural) this.target.setWorldPosition(saved); });
  }
  update(dt) {
    const { ctx, p } = this;
    const tp = this.target.worldPosition();
    this.marker.position.copy(tp).add(new THREE.Vector3(0, 2.3, 0));
    const d = ctx.playerCenter().distanceTo(tp.clone().add(new THREE.Vector3(0, 0.9, 0)));
    if (d < p.radius) { this.held += dt; this.away = 0; ctx.addScore(10 * dt); }
    else if (d > p.maxAway) { this.away += dt; if (this.away > 6) return ctx.lose('Jejak hilang'); }
    else this.away = 0;
    ctx.setMeter(this.held / p.hold, `Dekat target ${fmtNum(this.held, 0)}/${p.hold} dtk`);
    ctx.setProgress(`${this.target.name}${this.away > 0 ? ` · menjauh ${fmtNum(6 - this.away, 0)} dtk` : ''}`);
    if (this.held >= p.hold) ctx.win();
  }
  autoplay(tick) {
    let guard = 0;
    while (this.ctx.stage.status === 'playing' && guard++ < 4000) { this.ctx.teleport(this.target.worldPosition().add(new THREE.Vector3(0.6, 0, 0))); tick(1); }
  }
}

// ---------- 5. DODGE (survive) ----------
class Dodge extends Mech {
  static objective(p) { return `Bertahan hidup selama ${p.time} detik.`; }
  static rules(p) { const r = [`${p.count} pemburu ${p.mode === 'bounce' ? 'memantul di arena' : 'mengejarmu'}.`, `${p.lives} nyawa. Nyawa habis berarti kalah.`, 'Skor 10 per detik bertahan.']; if (p.energy) r.push('Energi berkurang terus. Ambil sel energi hijau; energi nol berarti kalah.'); return r; }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    ctx.lives = ctx.maxLives = p.lives || 3;
    this.haz = new Hazards(ctx, p.count, p.speed || 4, p.mode || 'chase');
    this.energy = 1; this.cells = [];
    if (p.energy) for (let i = 0; i < 3; i++) this.spawnCell();
  }
  spawnCell() { const m = orb(this.ctx, MINT, 0.25); m.position.copy(this.ctx.world.sample(this.rng, { near: this.ctx.player.pos, radius: 12, sameLevel: this.ctx.player.pos.y })).add(new THREE.Vector3(0, 0.9, 0)); this.cells.push(m); }
  onTimeout() { return 'win'; }
  update(dt) {
    const { ctx, p } = this;
    this.haz.update(dt); ctx.addScore(10 * dt);
    if (p.energy) {
      this.energy -= dt / 25;
      for (const c of this.cells) if (c.visible && ctx.near(c.position, 1.3)) { c.visible = false; this.energy = Math.min(1, this.energy + 0.35); ctx.addScore(50); ctx.sfx('collect'); this.spawnCell(); }
      ctx.setMeter(this.energy, 'Energi');
      if (this.energy <= 0) return ctx.lose('Energi habis');
    }
    ctx.setProgress(`Nyawa ${'●'.repeat(Math.max(0, ctx.lives))}${'○'.repeat(Math.max(0, ctx.maxLives - ctx.lives))}`);
  }
  autoplay(tick) {
    this.ctx.godMode = true;
    let guard = 0;
    while (this.ctx.stage.status === 'playing' && guard++ < 6000) {
      if (this.p.energy && this.energy < 0.5) { const c = this.cells.find((x) => x.visible); if (c) this.ctx.teleport(c.position.clone().add(new THREE.Vector3(0, -0.9, 0))); }
      tick(1); this.ctx.stage.time -= 0.5;
    }
  }
  testLose() { const ctx = this.ctx; ctx.godMode = false; for (let i = 0; i < 5 && ctx.stage.status === 'playing'; i++) { ctx.invuln = 0; ctx.loseLife('Uji'); } }
}

// ---------- 6. TARGETS (shooting gallery) ----------
class Targets extends Mech {
  static objective(p) { return `Kenai ${p.count} target sebelum menghilang.`; }
  static rules(p) { return [`Waktu ${p.time} detik.`, `Target hilang setelah ${p.life} detik.`, `Total ${p.misses} kali meleset atau target lolos berarti kalah.`, 'Tiap target bernilai 80 poin, ditambah bonus kecepatan.']; }
  static get controls() { return 'aim'; }
  setup() { this.hits = 0; this.miss = 0; this.active = []; this.cool = 0; }
  spawn() {
    const { ctx } = this;
    const p0 = ctx.world.sample(this.rng, { near: ctx.player.pos, radius: 14, sameLevel: ctx.player.pos.y });
    const g = new THREE.Group();
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.45, 32), glow(GOLD, 1.4));
    const inner = new THREE.Mesh(new THREE.CircleGeometry(0.2, 32), glow(RED, 2)); inner.position.z = 0.01;
    g.add(face, inner); g.position.copy(p0).add(new THREE.Vector3(0, 1.2 + this.rng() * 1.6, 0));
    g.lookAt(ctx.playerCenter()); g.userData = { t: 0, target: true };
    ctx.group.add(g); this.active.push(g);
  }
  update(dt) {
    const { ctx, p } = this;
    this.cool -= dt;
    if (this.active.length < 3 && this.cool <= 0) { this.spawn(); this.cool = 0.6; }
    for (const g of this.active.slice()) {
      g.userData.t += dt; const k = g.userData.t / p.life;
      g.scale.setScalar(k < 0.1 ? k * 10 : 1 - Math.max(0, k - 0.85) * 4);
      if (k >= 1) { this.remove(g); this.miss++; ctx.sfx('bad'); }
    }
    ctx.setProgress(`Kena ${this.hits}/${p.count} · meleset ${this.miss}/${p.misses}`);
    if (this.miss >= p.misses) ctx.lose('Terlalu banyak meleset');
  }
  remove(g) { this.active.splice(this.active.indexOf(g), 1); g.parent?.remove(g); }
  onPick(hit) {
    const { ctx, p } = this;
    let o = hit?.object; while (o && !o.userData?.target) o = o.parent;
    if (o && this.active.includes(o)) { this.hits++; ctx.addScore(80 + Math.round((1 - o.userData.t / p.life) * 40)); ctx.sfx('good'); this.remove(o); if (this.hits >= p.count) ctx.win(); }
    else { this.miss++; ctx.sfx('bad'); if (this.miss >= p.misses) ctx.lose('Terlalu banyak meleset'); }
  }
  autoplay(tick) {
    let guard = 0;
    while (this.ctx.stage.status === 'playing' && guard++ < 500) { tick(1); const g = this.active[0]; if (g) this.onPick({ object: g.children[0] }); }
  }
}

// ---------- 7. SEQUENCE (Simon) ----------
class Sequence extends Mech {
  static objective(p) { return `Ulangi urutan sampai panjangnya ${p.length}.`; }
  static rules() { return ['Perhatikan urutan yang menyala, lalu ulangi dengan mengetuk tombol.', 'Urutan bertambah satu setiap ronde. Tiap langkah benar bernilai 20 poin.', 'Tiga kesalahan berarti kalah.']; }
  static get controls() { return 'overlay'; }
  setup() {
    const { ctx, p } = this;
    ctx.lives = ctx.maxLives = 3;
    const data = ctx.app.data;
    if (p.pads === 'colors') { const cols = (data.palette || []).slice(0, 6); const def = ['#ffd27a', '#9aa7ff', '#7fe0c4', '#ff8fb1', '#c3a6ff', '#ffb37a']; this.pads = [0, 1, 2, 3, 4, 5].map((i) => ({ label: '', color: cols[i] || def[i] })); }
    else if (p.pads === 'objects') this.pads = this.rng.shuffle(ctx.objects('notable')).slice(0, 4).map((m, i) => ({ label: m.label || m.name, color: ['#ffd27a', '#9aa7ff', '#7fe0c4', '#ff8fb1'][i] }));
    else if (p.pads === 'animals') { this.actors = ctx.app.actors.ensure('animal', 4, this.rng); this.pads = this.actors.map((a, i) => ({ label: a.name, color: ['#ffd27a', '#9aa7ff', '#7fe0c4', '#ff8fb1'][i] })); }
    else { this.actor = ctx.app.actors.ensure('character', 1, this.rng)[0]; this.pads = ['jump', 'spin', 'bow', 'wave'].map((k, i) => ({ label: { jump: 'Lompat', spin: 'Putar', bow: 'Membungkuk', wave: 'Goyang' }[k], pose: k, color: ['#ffd27a', '#9aa7ff', '#7fe0c4', '#ff8fb1'][i] })); }
    while (this.pads.length < 4) this.pads.push({ label: '', color: ['#ffd27a', '#9aa7ff', '#7fe0c4', '#ff8fb1'][this.pads.length] });
    this.seq = Array.from({ length: p.length }, () => this.rng.int(this.pads.length));
    this.round = 3; this.phase = 'show'; this.showI = 0; this.showT = -0.6; this.inputI = 0;
    const o = ctx.overlay('seq');
    this.statusEl = el('p', { class: 'g-status' }, 'Perhatikan…');
    this.btns = this.pads.map((pd, i) => el('button', { class: 'pad', type: 'button', style: { '--pad': pd.color }, onclick: () => this.press(i) }, pd.label));
    o.append(this.statusEl, el('div', { class: 'pads' }, this.btns));
  }
  flash(i) {
    const b = this.btns[i]; b.classList.add('lit'); setTimeout(() => b.classList.remove('lit'), 320);
    this.ctx.sfx('pad' + (i % 6));
    if (this.pads[i].pose && this.actor) this.actor.playPose(this.pads[i].pose, 0.8);
    if (this.actors?.[i]) this.actors[i].playPose('jump', 0.6);
  }
  update(dt) {
    const { ctx } = this;
    if (this.phase === 'show') {
      this.showT += dt;
      if (this.showT >= 0.75) { this.showT = 0; if (this.showI < this.round) { this.flash(this.seq[this.showI]); this.showI++; } else { this.phase = 'input'; this.inputI = 0; this.statusEl.textContent = 'Giliranmu'; } }
    }
    ctx.setProgress(`Panjang urutan ${this.round}/${this.p.length} · nyawa ${ctx.lives}`);
  }
  press(i) {
    const { ctx } = this;
    if (this.phase !== 'input' || ctx.stage.status !== 'playing') return;
    this.flash(i);
    if (i === this.seq[this.inputI]) {
      this.inputI++; ctx.addScore(20);
      if (this.inputI >= this.round) {
        if (this.round >= this.p.length) return ctx.win();
        this.round++; this.phase = 'show'; this.showI = 0; this.showT = -0.8; this.statusEl.textContent = 'Bagus. Perhatikan lagi…';
      }
    } else {
      ctx.loseLife('Salah urutan');
      if (ctx.stage.status === 'playing') { this.phase = 'show'; this.showI = 0; this.showT = -0.8; this.statusEl.textContent = 'Salah. Urutan diulang…'; }
    }
  }
  autoplay(tick) {
    let guard = 0;
    while (this.ctx.stage.status === 'playing' && guard++ < 3000) {
      if (this.phase === 'input') this.press(this.seq[this.inputI]); else tick(1);
    }
  }
}

// ---------- 8. PAIRS (memory cards) ----------
const SHAPES = ['M50 10 L90 90 L10 90 Z', 'M10 10 H90 V90 H10 Z', 'M50 8 A42 42 0 1 1 49.9 8 Z', 'M50 5 L61 38 L95 38 L67 58 L78 92 L50 71 L22 92 L33 58 L5 38 L39 38 Z', 'M50 5 L95 50 L50 95 L5 50 Z', 'M30 10 H70 L95 50 L70 90 H30 L5 50 Z', 'M10 35 H35 V10 H65 V35 H90 V65 H65 V90 H35 V65 H10 Z', 'M50 10 C80 10 95 40 70 60 L50 90 L30 60 C5 40 20 10 50 10 Z'];
class Pairs extends Mech {
  static objective(p) { return `Temukan ${p.pairs} pasang kartu.`; }
  static rules(p) { return [`Maksimal ${p.flips} kali membalik pasangan.`, 'Pasangan cocok bernilai 120 poin.', `Waktu ${p.time} detik.`]; }
  static get controls() { return 'overlay'; }
  setup() {
    const { ctx, p } = this;
    let names = [];
    if (p.source === 'objects') names = [...new Set(ctx.objects('notable').map((m) => m.label || m.name))];
    if (p.source === 'materials') names = [...new Set((ctx.app.data.materials || []).map((m) => m.name))];
    if (p.source === 'animals') names = ctx.app.actors.ensure('animal', p.pairs, this.rng).map((a) => a.name);
    if (p.source === 'characters') names = ctx.app.actors.ensure('character', p.pairs, this.rng).map((a) => a.name);
    names = [...new Set(names)];
    if (names.length < p.pairs && p.source !== 'shapes') names = names.concat([...new Set((ctx.app.data.materials || []).map((m) => m.name))].filter((x) => !names.includes(x)));
    const faces = p.source === 'shapes' || names.length < p.pairs
      ? this.rng.shuffle(SHAPES).slice(0, p.pairs).map((d, i) => ({ svg: d, key: 's' + i })).concat(this.rng.shuffle(names).slice(0, 0))
      : this.rng.shuffle(names).slice(0, p.pairs).map((n) => ({ text: n, key: n }));
    const deck = this.rng.shuffle(faces.concat(faces).map((f, i) => ({ ...f, id: i })));
    this.deck = deck; this.open = []; this.matched = 0; this.flips = 0; this.lock = 0;
    const o = ctx.overlay('pairs');
    const cols = Math.ceil(Math.sqrt(deck.length));
    this.cards = deck.map((c, i) => el('button', { class: 'card', type: 'button', 'aria-label': 'Kartu tertutup', onclick: () => this.flip(i) },
      el('span', { class: 'back' }), el('span', { class: 'front', html: c.svg ? `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${c.svg}"/></svg>` : '' }, c.text || '')));
    o.append(el('div', { class: 'cards', style: { gridTemplateColumns: `repeat(${cols}, 1fr)` } }, this.cards));
  }
  flip(i) {
    const { ctx, p } = this;
    if (this.lock > 0 || ctx.stage.status !== 'playing') return;
    const c = this.deck[i]; if (c.done || this.open.includes(i)) return;
    this.cards[i].classList.add('up'); this.cards[i].setAttribute('aria-label', c.text || 'Bentuk'); this.open.push(i); ctx.sfx('click');
    if (this.open.length === 2) {
      this.flips++;
      const [a, b] = this.open.map((k) => this.deck[k]);
      if (a.key === b.key) { a.done = b.done = true; this.open.forEach((k) => this.cards[k].classList.add('done')); this.open = []; this.matched++; ctx.addScore(120); ctx.sfx('good'); if (this.matched >= p.pairs) return ctx.win(); }
      else { this.lock = 0.8; }
      if (this.flips >= p.flips && this.matched < p.pairs) ctx.lose('Jatah membalik habis');
    }
  }
  update(dt) {
    if (this.lock > 0) { this.lock -= dt; if (this.lock <= 0) { this.open.forEach((k) => { this.cards[k].classList.remove('up'); this.cards[k].setAttribute('aria-label', 'Kartu tertutup'); }); this.open = []; } }
    this.ctx.setProgress(`Pasangan ${this.matched}/${this.p.pairs} · balik ${this.flips}/${this.p.flips}`);
  }
  autoplay(tick) {
    const byKey = {}; this.deck.forEach((c, i) => (byKey[c.key] ||= []).push(i));
    for (const [, [a, b]] of Object.entries(byKey)) { if (this.ctx.stage.status !== 'playing') break; this.flip(a); this.flip(b); tick(1); }
  }
}

// ---------- 9. QUIZ ----------
class Quiz extends Mech {
  static objective(p) { return `Jawab benar ${p.count} pertanyaan.`; }
  static rules(p) { return [`${p.lives} nyawa; jawaban salah mengurangi satu.`, 'Semua pertanyaan dibuat dari data nyata dunia ini.', 'Jawaban benar bernilai 100 poin.', `Waktu ${p.time} detik.`]; }
  static get controls() { return 'overlay'; }
  setup() {
    const { ctx, p } = this;
    ctx.lives = ctx.maxLives = p.lives || 3;
    this.qs = makeQuestions(ctx.app, p.topic, p.count + p.lives + 2, this.rng);
    this.i = 0; this.correct = 0;
    this.o = ctx.overlay('quiz'); this.render();
  }
  render() {
    const q = this.qs[this.i]; this.o.replaceChildren();
    if (!q) return;
    this.o.append(el('p', { class: 'g-q' }, q.q), el('div', { class: 'opts' }, q.options.map((op, k) => el('button', { type: 'button', class: 'opt', onclick: () => this.answer(k) }, op))));
    if (q.note) this.o.append(el('p', { class: 'g-note' }, q.note));
  }
  answer(k) {
    const { ctx, p } = this;
    const q = this.qs[this.i]; if (!q || ctx.stage.status !== 'playing') return;
    if (k === q.answer) { this.correct++; ctx.addScore(100); ctx.sfx('good'); ctx.toast('Benar'); }
    else { ctx.toast(`Jawaban benar: ${q.options[q.answer]}`); ctx.loseLife('Salah'); }
    this.i++;
    if (this.correct >= p.count) return ctx.win();
    if (ctx.stage.status !== 'playing') return;
    if (this.i >= this.qs.length) return ctx.lose('Pertanyaan habis');
    this.render();
  }
  update() { this.ctx.setProgress(`Benar ${this.correct}/${this.p.count} · nyawa ${this.ctx.lives}`); }
  autoplay(tick) { let g = 0; while (this.ctx.stage.status === 'playing' && g++ < 100) { this.answer(this.qs[this.i].answer); tick(1); } }
}

// ---------- 10. PHOTO ----------
class Photo extends Mech {
  static objective(p) { return `Ambil ${p.count} foto bagus dari target yang diminta.`; }
  static rules(p) { return ['Target harus terlihat, cukup besar, dan tidak terhalang.', p.composition ? 'Nilai tertinggi jika target berada di titik sepertiga bingkai.' : 'Nilai tertinggi jika target tepat di tengah bingkai.', 'Foto bernilai 50 ke atas diterima.', `Waktu ${p.time} detik.`]; }
  static get controls() { return 'photo'; }
  setup() {
    const { ctx, p } = this;
    let metas;
    if (p.filter === 'animal' || p.filter === 'character') { const actors = ctx.app.actors.ensure(p.filter, p.count, this.rng); this.targets = actors.map((a) => ({ name: a.name, node: a.node })); }
    else { metas = this.rng.shuffle(ctx.objects('notable')).slice(0, p.count); this.targets = metas.map((m) => ({ name: m.label || m.name, node: ctx.world.nodeFor(m) })); }
    this.i = 0; this.done = 0;
    ctx.app.ui.showFrame(true); ctx.onDispose(() => ctx.app.ui.showFrame(false));
    ctx.app.ui.shutter(() => this.shoot());
  }
  evaluate() {
    const { ctx, p } = this;
    const t = this.targets[this.i]; if (!t) return null;
    const cam = ctx.app.camera; cam.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(t.node); const c = box.getCenter(new THREE.Vector3()); const r = box.getSize(new THREE.Vector3()).length() / 2;
    const ndc = c.clone().project(cam);
    if (ndc.z > 1 || Math.abs(ndc.x) > 1 || Math.abs(ndc.y) > 1) return { score: 0, why: 'Target di luar bingkai' };
    const dist = cam.position.distanceTo(c);
    const sizeFrac = r / (Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * dist);
    const dir = c.clone().sub(cam.position).normalize();
    const block = ctx.world.raycast(cam.position, dir, dist - r * 0.6);
    let blocked = false; if (block) { let o = block.object; blocked = true; while (o) { if (o === t.node) { blocked = false; break; } o = o.parent; } }
    if (blocked) return { score: 0, why: 'Target terhalang objek lain' };
    let off;
    if (p.composition) off = Math.min(...[[-1 / 3, -1 / 3], [1 / 3, -1 / 3], [-1 / 3, 1 / 3], [1 / 3, 1 / 3]].map(([x, y]) => Math.hypot(ndc.x - x, ndc.y - y)));
    else off = Math.hypot(ndc.x, ndc.y);
    const sizeScore = sizeFrac < 0.06 ? 0.2 : sizeFrac > 0.9 ? 0.5 : sizeFrac < 0.15 ? 0.65 : 1;
    const score = Math.round(clamp(1 - off / 0.9, 0, 1) * 60 + sizeScore * 40);
    return { score, why: sizeFrac < 0.15 ? 'Terlalu kecil, mendekatlah' : off > 0.35 ? 'Kurang pas posisinya' : 'Komposisi bagus' };
  }
  shoot() {
    const { ctx } = this;
    if (ctx.stage.status !== 'playing') return;
    ctx.sfx('shutter'); ctx.app.ui.flash();
    const r = this.evaluate(); if (!r) return;
    if (r.score >= 50) {
      if (!ctx.test) ctx.session.photos.push({ src: ctx.app.renderer.snapshot(), name: this.targets[this.i].name, score: r.score });
      ctx.addScore(r.score * 2); ctx.toast(`Foto ${r.score}/100: ${r.why}`); this.i++; this.done++;
      if (this.done >= this.targets.length) ctx.win();
    } else ctx.toast(`Foto ${r.score}/100: ${r.why}`);
  }
  update(dt, input) {
    const t = this.targets[this.i]; if (!t) return;
    if (input.hit('KeyP')) this.shoot();
    this.ctx.setProgress(`Foto ${this.done}/${this.targets.length}: ${t.name}`);
    if (input.hit('KeyH')) this.hintOn = true;
    if (this.hintOn) this.ctx.setHint(relDir(this.ctx, t.node.getWorldPosition(new THREE.Vector3())));
  }
  autoplay(tick) {
    const { ctx } = this;
    const cam = ctx.app.camera; ctx.app.player.setMode('free');
    let guard = 0;
    while (ctx.stage.status === 'playing' && guard++ < 50) {
      const t = this.targets[this.i];
      const box = new THREE.Box3().setFromObject(t.node); const c = box.getCenter(new THREE.Vector3()); const r = Math.max(0.3, box.getSize(new THREE.Vector3()).length() / 2);
      const dist = r / (Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * 0.4);
      let best = null;
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        const pos = c.clone().add(new THREE.Vector3(Math.cos(a) * dist, r * 0.3 + 0.4, Math.sin(a) * dist));
        cam.position.copy(pos); cam.lookAt(c);
        if (this.p.composition) { cam.rotateY(-cam.fov * 0.0058 * cam.aspect); cam.rotateX(cam.fov * 0.0058); }
        cam.updateMatrixWorld(); const e = this.evaluate(); if (e && (!best || e.score > best.s)) best = { s: e.score, pos: pos.clone(), q: cam.quaternion.clone() };
        if (e && e.score >= 70) break;
      }
      cam.position.copy(best.pos); cam.quaternion.copy(best.q); cam.updateMatrixWorld();
      ctx.app.player.pos.copy(best.pos);
      const before = this.done; this.shoot();
      if (this.done === before) { this.i = (this.i + 1) % this.targets.length; }
      cam.updateMatrixWorld();
    }
    ctx.app.player.setMode('first');
  }
}

// ---------- 11. PLATFORM ----------
class Platform extends Mech {
  static objective(p) { return `Panjat platform sampai suar setinggi ${p.height} m.`; }
  static rules(p) { const r = ['Jatuh dari menara mengurangi satu nyawa dan mengembalikanmu ke titik simpan terakhir.', 'Tiga nyawa. Setiap platform kelima adalah titik simpan.', `Waktu ${p.time} detik.`]; if (p.gravity) r.push('Gravitasi jauh lebih ringan dari biasa.'); if (p.gravityCycle) r.push('Gravitasi berganti ringan dan berat setiap 6 detik.'); return r; }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    ctx.lives = ctx.maxLives = 3;
    const pl = ctx.player;
    ctx.stage.returnTo = { pos: pl.pos.clone(), yaw: pl.yaw };
    const w = ctx.world;
    const base = new THREE.Vector3(w.bounds.max.x + 10, w.groundY, w.center.z);
    const hit = w.castDown(base.x, base.z, w.bounds.max.y + 5, 1e4); if (hit) base.y = hit.point.y;
    this.base = base;
    const g = p.gravity || 1;
    pl.gravity = 18 * g; pl.jumpSpeed = 5.6;
    const gEff = p.gravityCycle ? 26 / 18 : g;
    const dy = Math.min((0.75 / Math.max(0.35, gEff)) * 0.9, 1.6);
    const n = Math.ceil(p.height / dy) + 1;
    const geoms = [];
    this.plats = [];
    let a = 0, y = base.y + 0.4;
    for (let i = 0; i < n; i++) {
      a += 0.75 + this.rng() * 0.25;
      const r = 3.2;
      const pos = new THREE.Vector3(base.x + Math.cos(a) * r, y, base.z + Math.sin(a) * r);
      const ckpt = i % 5 === 0;
      const geo = new THREE.CylinderGeometry(ckpt ? 1.1 : 0.85, ckpt ? 1.1 : 0.85, 0.3, 24); geo.translate(pos.x, pos.y - 0.15, pos.z);
      geoms.push(geo); this.plats.push({ pos, ckpt });
      y += dy;
    }
    const mesh = new THREE.Mesh(mergeGeometries(geoms), new THREE.MeshStandardMaterial({ color: p.dreamy ? '#c3a6ff' : '#8f9cff', roughness: 0.35, metalness: 0.25, emissive: '#3a2f8a', emissiveIntensity: 0.35 }));
    geoms.forEach((x) => x.dispose());
    mesh.castShadow = mesh.receiveShadow = true; mesh.geometry.computeBoundsTree();
    ctx.group.add(mesh); ctx.addCollider(mesh); this.mesh = mesh;
    const top = this.plats[this.plats.length - 1].pos;
    this.beacon = new THREE.Group(); this.beacon.add(beam(ctx, GOLD, 12)); const o = orb(ctx, GOLD, 0.4); o.position.y = 1.2; this.beacon.add(o);
    this.beacon.position.copy(top); ctx.group.add(this.beacon);
    this.save = this.plats[0].pos.clone();
    ctx.teleport(this.save.clone().add(new THREE.Vector3(0, 0.05, 0)), top);
    this.cycle = 0; this.highest = 0;
  }
  update(dt) {
    const { ctx, p } = this;
    const pl = ctx.player;
    if (p.gravityCycle) { this.cycle += dt; const heavy = Math.floor(this.cycle / 6) % 2 === 1; pl.gravity = heavy ? 26 : 9; ctx.setMeter(heavy ? 1 : 0.35, heavy ? 'Gravitasi berat' : 'Gravitasi ringan'); }
    this.plats.forEach((q, i) => { if (q.ckpt && pl.onGround && pl.pos.distanceTo(q.pos) < 1.3) this.save.copy(q.pos); if (pl.onGround && pl.pos.distanceTo(q.pos) < 1.2) this.highest = Math.max(this.highest, i); });
    if (pl.onGround && pl.groundObject === this.mesh) this.started = true;
    const fell = (this.started && pl.onGround && pl.groundObject !== this.mesh) || pl.pos.y < this.base.y - 3;
    if (fell) { pl.place(this.save.clone().add(new THREE.Vector3(0, 0.05, 0))); ctx.invuln = 0; ctx.loseLife('Jatuh'); }
    ctx.setProgress(`Ketinggian ${fmtNum(Math.max(0, pl.pos.y - this.base.y), 1)} / ${p.height} m`);
    if (ctx.near(this.beacon.position.clone().add(new THREE.Vector3(0, 1, 0)), 1.6)) { ctx.addScore(this.highest * 10); ctx.win(); }
  }
  autoplay(tick) {
    for (const q of this.plats) { if (this.ctx.stage.status !== 'playing') return; this.ctx.teleport(q.pos.clone().add(new THREE.Vector3(0, 0.02, 0))); tick(2); }
    this.ctx.teleport(this.beacon.position.clone()); tick(1);
  }
}

// ---------- 12. MAZE ----------
class Maze extends Mech {
  static objective(p) { return p.levels > 1 ? `Selesaikan ${p.levels} lapis labirin.` : 'Temukan jalan keluar labirin.'; }
  static rules(p) { return ['Labirin dibangun di samping dunia. Suar emas menandai pintu keluar.', p.levels > 1 ? 'Setiap lapis lebih besar dari sebelumnya.' : 'Kamu kembali ke dunia setelah selesai.', `Waktu ${p.time} detik.`]; }
  static get controls() { return 'move'; }
  setup() { const pl = this.ctx.player; this.ctx.stage.returnTo = { pos: pl.pos.clone(), yaw: pl.yaw }; this.level = 0; this.build(this.p.size); }
  build(n) {
    const { ctx } = this;
    if (this.mesh) { for (const m of [this.mesh, this.floor]) { ctx.removeCollider(m); m.parent.remove(m); m.geometry.dispose(); } this.exit.parent.remove(this.exit); }
    const w = ctx.world, cs = 2.6, H = 2.8;
    const origin = new THREE.Vector3(w.bounds.max.x + 16 + n * cs, w.groundY, w.center.z - (n * cs) / 2);
    const visited = Array.from({ length: n }, () => Array(n).fill(false));
    const walls = { h: Array.from({ length: n + 1 }, () => Array(n).fill(true)), v: Array.from({ length: n }, () => Array(n + 1).fill(true)) };
    const stack = [[0, 0]]; visited[0][0] = true;
    while (stack.length) {
      const [r, c] = stack[stack.length - 1];
      const nb = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].filter(([a, b]) => a >= 0 && b >= 0 && a < n && b < n && !visited[a][b]);
      if (!nb.length) { stack.pop(); continue; }
      const [a, b] = this.rng.pick(nb); visited[a][b] = true;
      if (a !== r) walls.h[Math.max(a, r)][c] = false; else walls.v[r][Math.max(b, c)] = false;
      stack.push([a, b]);
    }
    walls.v[n - 1][n] = false;
    const geoms = [];
    const box = (x, z, sx, sz) => { const g = new THREE.BoxGeometry(sx, H, sz); g.translate(origin.x + x, origin.y + H / 2, origin.z + z); geoms.push(g); };
    for (let r = 0; r <= n; r++) for (let c = 0; c < n; c++) if (walls.h[r][c]) box(c * cs + cs / 2, r * cs, cs + 0.3, 0.3);
    for (let r = 0; r < n; r++) for (let c = 0; c <= n; c++) if (walls.v[r][c]) box(c * cs, r * cs + cs / 2, 0.3, cs + 0.3);
    const mesh = new THREE.Mesh(mergeGeometries(geoms), new THREE.MeshStandardMaterial({ color: '#cbb89a', roughness: 0.8 }));
    geoms.forEach((g) => g.dispose());
    mesh.castShadow = mesh.receiveShadow = true; mesh.geometry.computeBoundsTree();
    const floor = new THREE.Mesh(new THREE.BoxGeometry(n * cs + 2, 0.2, n * cs + 2), new THREE.MeshStandardMaterial({ color: '#5a5070', roughness: 0.9 }));
    floor.position.set(origin.x + (n * cs) / 2, origin.y - 0.1, origin.z + (n * cs) / 2); floor.receiveShadow = true; floor.geometry.computeBoundsTree();
    ctx.group.add(mesh, floor); ctx.addCollider(mesh); ctx.addCollider(floor);
    this.mesh = mesh; this.floor = floor;
    this.exit = new THREE.Group(); this.exit.add(beam(ctx, GOLD, 9)); this.exit.position.set(origin.x + n * cs + 0.9, origin.y, origin.z + (n - 0.5) * cs); ctx.group.add(this.exit);
    const start = new THREE.Vector3(origin.x + cs / 2, origin.y + 0.05, origin.z + cs / 2);
    ctx.teleport(start, this.exit.position);
    this.n = n;
  }
  update() {
    const { ctx, p } = this;
    ctx.setProgress(`Lapis ${this.level + 1}/${p.levels || 1} · ${this.n}×${this.n}`);
    if (ctx.near(this.exit.position.clone().add(new THREE.Vector3(0, 0.9, 0)), 1.5)) {
      this.level++; ctx.addScore(150 * this.level); ctx.sfx('good');
      if (this.level >= (p.levels || 1)) return ctx.win();
      this.build(this.n + 2); ctx.addTime(30);
    }
  }
  autoplay(tick) { let g = 0; while (this.ctx.stage.status === 'playing' && g++ < 10) { this.ctx.teleport(this.exit.position.clone()); tick(1); } }
}

// ---------- 13. LOGIC (lights out, slide, pattern, dials) ----------
class Logic extends Mech {
  static objective(p) { return { lightsout: 'Matikan semua cahaya di papan.', slide: 'Susun ubin kembali menjadi 1 sampai 8.', pattern: `Jawab benar ${p.rounds} deret.`, dials: 'Samakan semua roda dengan kode target.' }[p.kind]; }
  static rules(p) {
    return { lightsout: ['Mengetuk satu sel membalik sel itu dan empat tetangganya.', 'Setiap papan pasti punya solusi.', `Waktu ${p.time} detik.`],
      slide: ['Ketuk ubin di samping ruang kosong untuk menggesernya.', 'Teka-teki dibuat dari posisi selesai, jadi pasti bisa dipecahkan.', `Waktu ${p.time} detik.`],
      pattern: ['Pilih angka berikutnya dari deret.', 'Tiga kesalahan berarti kalah.', `Waktu ${p.time} detik.`],
      dials: ['Setiap tuas menaikkan roda pasangannya satu angka (0 sampai 5, berputar).', 'Kode pasti bisa dicapai.', `Waktu ${p.time} detik.`] }[p.kind];
  }
  static get controls() { return 'overlay'; }
  setup() {
    const { ctx, p } = this; this.o = ctx.overlay('logic ' + p.kind); this.moves = 0;
    this[p.kind + 'Setup']();
  }
  // lights out
  lightsoutSetup() {
    const n = this.p.size; this.n = n; this.board = Array(n * n).fill(0); this.sol = new Set();
    const presses = 6 + this.rng.int(n * 2);
    for (let i = 0; i < presses; i++) { const k = this.rng.int(n * n); this.toggle(k); this.sol.has(k) ? this.sol.delete(k) : this.sol.add(k); }
    if (this.board.every((v) => !v)) { this.toggle(0); this.sol.add(0); }
    this.cells = this.board.map((_, k) => el('button', { type: 'button', class: 'lo', 'aria-label': 'Sel ' + (k + 1), onclick: () => this.loPress(k) }));
    this.o.append(el('div', { class: 'lo-grid', style: { gridTemplateColumns: `repeat(${n},1fr)` } }, this.cells)); this.loPaint();
  }
  toggle(k) { const n = this.n, r = Math.floor(k / n), c = k % n; for (const [a, b] of [[r, c], [r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]]) if (a >= 0 && b >= 0 && a < n && b < n) this.board[a * n + b] ^= 1; }
  loPaint() { this.cells.forEach((b, k) => { b.classList.toggle('on', !!this.board[k]); b.setAttribute('aria-pressed', String(!!this.board[k])); }); }
  loPress(k) { if (this.ctx.stage.status !== 'playing') return; this.toggle(k); this.moves++; this.ctx.sfx('click'); this.loPaint(); if (this.board.every((v) => !v)) { this.ctx.addScore(Math.max(100, 600 - this.moves * 10)); this.ctx.win(); } }
  // slide
  slideSetup() {
    const n = 3; this.n = n; this.tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; this.path = [];
    let blank = 8, prev = -1;
    for (let i = 0; i < 60; i++) {
      const r = Math.floor(blank / n), c = blank % n;
      const nb = [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].filter(([a, b]) => a >= 0 && b >= 0 && a < n && b < n).map(([a, b]) => a * n + b).filter((k) => k !== prev);
      const k = this.rng.pick(nb); this.tiles[blank] = this.tiles[k]; this.tiles[k] = 0; this.path.push(blank); prev = blank; blank = k;
    }
    this.grid = el('div', { class: 'slide-grid' }); this.o.append(this.grid); this.slidePaint();
  }
  slidePaint() { this.grid.replaceChildren(...this.tiles.map((v, k) => el('button', { type: 'button', class: 'tile' + (v ? '' : ' blank'), 'aria-label': v ? 'Ubin ' + v : 'Kosong', onclick: () => this.slideTap(k) }, v || ''))); }
  slideTap(k) {
    if (this.ctx.stage.status !== 'playing') return;
    const b = this.tiles.indexOf(0), n = 3;
    if (Math.abs(Math.floor(b / n) - Math.floor(k / n)) + Math.abs((b % n) - (k % n)) !== 1) return;
    this.tiles[b] = this.tiles[k]; this.tiles[k] = 0; this.moves++; this.ctx.sfx('click'); this.slidePaint();
    if (this.tiles.join() === '1,2,3,4,5,6,7,8,0') { this.ctx.addScore(Math.max(100, 700 - this.moves * 5)); this.ctx.win(); }
  }
  // pattern
  patternSetup() { this.ctx.lives = this.ctx.maxLives = 3; this.round = 0; this.patternNext(); }
  patternNext() {
    const r = this.rng, kind = r.int(5); let seq;
    const a = 1 + r.int(9), d = 2 + r.int(7);
    if (kind === 0) seq = Array.from({ length: 6 }, (_, i) => a + d * i);
    else if (kind === 1) seq = Array.from({ length: 6 }, (_, i) => a * (2 + (d % 2)) ** i);
    else if (kind === 2) { seq = [a, a + 1]; while (seq.length < 6) seq.push(seq[seq.length - 1] + seq[seq.length - 2]); }
    else if (kind === 3) seq = Array.from({ length: 6 }, (_, i) => (i + a) * (i + a));
    else seq = Array.from({ length: 6 }, (_, i) => a + (i % 2 ? d * Math.ceil(i / 2) : -i / 2 + d * (i / 2)));
    const ans = seq.pop();
    const opts = new Set([ans]); while (opts.size < 4) opts.add(ans + (r.int(9) - 4) * (1 + r.int(3)) || ans + 7);
    this.cur = { seq, ans, options: r.shuffle([...opts]) };
    this.o.replaceChildren(el('p', { class: 'g-q seq-q' }, seq.join(', ') + ', ?'), el('div', { class: 'opts' }, this.cur.options.map((v) => el('button', { type: 'button', class: 'opt', onclick: () => this.patternAnswer(v) }, String(v)))));
  }
  patternAnswer(v) {
    const { ctx, p } = this; if (ctx.stage.status !== 'playing') return;
    if (v === this.cur.ans) { this.round++; ctx.addScore(100); ctx.sfx('good'); if (this.round >= p.rounds) return ctx.win(); }
    else { ctx.toast(`Jawaban: ${this.cur.ans}`); ctx.loseLife('Salah'); if (ctx.stage.status !== 'playing') return; }
    this.patternNext();
  }
  // dials
  dialsSetup() {
    const n = this.p.size; this.n = n;
    this.target = Array.from({ length: n }, () => this.rng.int(6));
    this.dials = this.target.slice(); this.sol = [];
    for (let i = 0; i < 8 + this.rng.int(6); i++) { const k = this.rng.int(n); this.lever(k, -1); this.sol.push(k); }
    if (this.dials.join() === this.target.join()) { this.lever(0, -1); this.sol.push(0); }
    this.dEls = this.dials.map(() => el('span', { class: 'dial' }));
    this.o.append(el('p', { class: 'g-q' }, 'Kode target: ', el('strong', {}, this.target.join(' '))), el('div', { class: 'dials' }, this.dEls),
      el('div', { class: 'levers' }, Array.from({ length: n }, (_, k) => el('button', { type: 'button', class: 'opt', onclick: () => this.leverPress(k) }, `Tuas ${k + 1} (roda ${k + 1} & ${((k + 1) % n) + 1})`))));
    this.dialsPaint();
  }
  lever(k, dir = 1) { for (const j of [k, (k + 1) % this.n]) this.dials[j] = (this.dials[j] + dir + 6) % 6; }
  dialsPaint() { this.dEls.forEach((e, i) => { e.textContent = this.dials[i]; e.classList.toggle('ok', this.dials[i] === this.target[i]); }); }
  leverPress(k) { if (this.ctx.stage.status !== 'playing') return; this.lever(k, 1); this.moves++; this.ctx.sfx('click'); this.dialsPaint(); if (this.dials.join() === this.target.join()) { this.ctx.addScore(Math.max(100, 600 - this.moves * 15)); this.ctx.win(); } }
  update() {
    const { p, ctx } = this;
    ctx.setProgress(p.kind === 'pattern' ? `Deret ${this.round}/${p.rounds} · nyawa ${ctx.lives}` : `Langkah ${this.moves}`);
  }
  autoplay(tick) {
    const { p } = this;
    if (p.kind === 'lightsout') for (const k of [...this.sol]) this.loPress(k);
    if (p.kind === 'slide') for (const k of this.path.slice().reverse()) this.slideTap(k);
    if (p.kind === 'pattern') while (this.ctx.stage.status === 'playing') this.patternAnswer(this.cur.ans);
    if (p.kind === 'dials') for (const k of this.sol) this.leverPress(k);
    tick(1);
  }
}

// ---------- 14. ARRANGE (zones / tower / feng shui) ----------
class Arrange extends Mech {
  static objective(p) { return { zones: `Letakkan ${p.count} benda ke zona berwarna yang sama.`, tower: `Tumpuk balok sampai menara ${p.goal} m.`, fengshui: 'Tata perabot sampai skor Form School mencapai 70.' }[p.mode]; }
  static rules(p) {
    if (p.mode === 'fengshui') return ['Tekan F untuk menilai. Penilaian memakai prinsip Form School:', 'posisi komando: menghadap pintu, tidak segaris langsung dengan pintu, punggung dekat dinding;', 'pusat ruang (Tai Qi) lapang; jalur dari pintu ke pusat tidak terhalang.', 'Ini kerangka tradisional, bukan klaim ilmiah.', `Waktu ${p.time} detik.`];
    if (p.mode === 'tower') return ['Letakkan balok di atas balok lain untuk menumpuk.', `Tujuan: puncak menara setinggi ${p.goal} m dari tanah.`, `Waktu ${p.time} detik.`];
    return ['Benda yang diletakkan di zona yang tepat terkunci dan bernilai 120 poin.', `Waktu ${p.time} detik.`];
  }
  static get controls() { return 'carry'; }
  setup() {
    const { ctx, p } = this;
    const pl = ctx.player;
    const lvl = pl.pos.y;
    const colors = [GOLD, IRIS, MINT, ROSE, '#c3a6ff', '#ffb37a'];
    this.items = []; this.zones = []; this.held = null;
    const mkItem = (i, kind) => {
      let mesh;
      if (kind === 'trees') { mesh = new THREE.Group(); const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.6, 8), new THREE.MeshStandardMaterial({ color: '#7a5a3a' })); trunk.position.y = 0.3; const top = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.1, 10), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.6 })); top.position.y = 1.1; mesh.add(trunk, top); }
      else if (p.mode === 'fengshui') {
        const def = [['Ranjang', 1.4, 0.5, 2.0], ['Meja kerja', 1.2, 0.75, 0.6], ['Sofa', 1.8, 0.8, 0.8], ['Lemari', 1.0, 1.9, 0.5], ['Kursi baca', 0.7, 0.9, 0.7]][i % 5];
        mesh = new THREE.Mesh(new THREE.BoxGeometry(def[1], def[2], def[3]), new THREE.MeshStandardMaterial({ color: colors[i % colors.length], roughness: 0.55 }));
        mesh.geometry.translate(0, def[2] / 2, 0);
        const front = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 8), glow('#ffffff', 1)); front.rotation.x = Math.PI / 2; front.position.set(0, def[2] + 0.15, def[3] / 2); mesh.add(front);
        const l = label(def[0], '#fff6df', 1.3); l.position.y = def[2] + 0.6; mesh.add(l);
        mesh.userData.size = [def[1], def[2], def[3]]; mesh.userData.name = def[0];
      } else { mesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.7), new THREE.MeshStandardMaterial({ color: p.mode === 'tower' ? '#e8dcc6' : colors[i % colors.length], roughness: 0.5 })); mesh.geometry.translate(0, 0.25, 0); }
      mesh.traverse((m) => { if (m.isMesh) m.castShadow = m.receiveShadow = true; });
      mesh.userData.item = true; mesh.userData.i = i; ctx.group.add(mesh); return mesh;
    };
    if (p.mode === 'fengshui') return this.setupRoom(mkItem);
    const pts = ctx.points(p.mode === 'tower' ? 1 : p.count, { near: pl.pos, radius: 14, sameLevel: lvl, minDist: 3.5 });
    if (p.mode !== 'tower') pts.forEach((pt, i) => { const z = zoneDisc(ctx, colors[i % colors.length], 1.1); z.position.copy(pt).add(new THREE.Vector3(0, 0.04, 0)); z.userData.i = i; this.zones.push(z); });
    else { this.towerSpot = pts[0]; const z = zoneDisc(ctx, GOLD, 1.3); z.position.copy(pts[0]).add(new THREE.Vector3(0, 0.04, 0)); this.zones.push(z); }
    for (let i = 0; i < p.count; i++) {
      const it = mkItem(i, p.props); const a = (i / p.count) * Math.PI * 2;
      const at = pl.pos.clone().add(new THREE.Vector3(Math.cos(a) * 2.6, 0, Math.sin(a) * 2.6)); const h = ctx.world.castDown(at.x, at.z, at.y + 2, 6, ctx.app.extraColliders);
      it.position.copy(h ? h.point : at); this.items.push(it);
      if (p.mode === 'tower') { it.geometry.computeBoundsTree(); ctx.addCollider(it); }
    }
  }
  setupRoom(mkItem) {
    const { ctx, p } = this;
    const w = ctx.world;
    const c = new THREE.Vector3(w.bounds.min.x - 10, w.groundY, w.center.z);
    const h = w.castDown(c.x, c.z, w.bounds.max.y + 5, 1e4); if (h) c.y = h.point.y;
    this.room = { c, hw: 3.5, hd: 3.5, door: c.clone().add(new THREE.Vector3(0, 0, 3.5)) };
    const mat = new THREE.MeshStandardMaterial({ color: '#d9cdb8', roughness: 0.8 });
    const walls = [];
    const wall = (x, z, sx, sz) => { const m = new THREE.Mesh(new THREE.BoxGeometry(sx, 1.2, sz), mat); m.position.set(c.x + x, c.y + 0.6, c.z + z); m.castShadow = m.receiveShadow = true; m.geometry.computeBoundsTree(); ctx.group.add(m); ctx.addCollider(m); walls.push(m); };
    wall(0, -3.5, 7.2, 0.2); wall(-3.5, 0, 0.2, 7.2); wall(3.5, 0, 0.2, 7.2); wall(-2.25, 3.5, 2.7, 0.2); wall(2.25, 3.5, 2.7, 0.2);
    const floor = new THREE.Mesh(new THREE.BoxGeometry(7, 0.1, 7), new THREE.MeshStandardMaterial({ color: '#6e5a48', roughness: 0.7 })); floor.position.set(c.x, c.y - 0.04, c.z); floor.receiveShadow = true; floor.geometry.computeBoundsTree(); ctx.group.add(floor); ctx.addCollider(floor);
    const doorMark = zoneDisc(ctx, MINT, 0.8); doorMark.position.copy(this.room.door).add(new THREE.Vector3(0, 0.05, 0.6));
    const center = zoneDisc(ctx, GOLD, 1.0); center.position.copy(c).add(new THREE.Vector3(0, 0.05, 0));
    const l = label('Pintu', '#c9ffef', 1.2); l.position.copy(this.room.door).add(new THREE.Vector3(0, 2.2, 0)); ctx.group.add(l);
    for (let i = 0; i < p.count; i++) { const it = mkItem(i); it.position.copy(c).add(new THREE.Vector3(-2 + (i % 3) * 2, 0, 1.6 + Math.floor(i / 3) * -1.6 + 0.2)); this.items.push(it); }
    const pl = ctx.player; ctx.stage.returnTo = { pos: pl.pos.clone(), yaw: pl.yaw };
    ctx.teleport(this.room.door.clone().add(new THREE.Vector3(0, 0, 1.6)), c);
  }
  pickUp(it) { if (it.userData.locked) return; this.held = it; this.ctx.removeCollider(it); this.ctx.sfx('click'); }
  dropAt(pos) {
    const { ctx, p } = this; const it = this.held; if (!it) return;
    const h = ctx.world.castDown(pos.x, pos.z, pos.y + 6, 12, ctx.app.extraColliders);
    it.position.set(pos.x, h ? h.point.y : pos.y, pos.z);
    this.held = null; ctx.sfx('click');
    if (p.mode === 'tower') { if (!it.geometry.boundsTree) it.geometry.computeBoundsTree(); ctx.addCollider(it); it.updateMatrixWorld(); this.checkTower(); return; }
    if (p.mode === 'zones') {
      const z = this.zones[it.userData.i];
      if (z && Math.hypot(it.position.x - z.position.x, it.position.z - z.position.z) < 1.0) { it.userData.locked = true; it.position.x = z.position.x; it.position.z = z.position.z; ctx.addScore(120); ctx.sfx('good'); if (this.items.every((x) => x.userData.locked)) ctx.win(); }
    }
  }
  towerHeight() { const base = this.towerSpot.y; let top = 0; for (const it of this.items) { if (Math.hypot(it.position.x - this.towerSpot.x, it.position.z - this.towerSpot.z) < 2.2 && it !== this.held) top = Math.max(top, it.position.y + 0.5 - base); } return top; }
  checkTower() { const h = this.towerHeight(); this.ctx.setMeter(h / this.p.goal, `Tinggi menara ${fmtNum(h, 1)} m`); if (h >= this.p.goal - 0.01) { this.ctx.addScore(h * 60); this.ctx.win(); } }
  evaluateRoom() {
    const { ctx } = this; const R = this.room; const notes = []; let score = 0;
    const door = R.door, c = R.c;
    let cmd = 0;
    const main = this.items.filter((it) => ['Ranjang', 'Meja kerja', 'Sofa'].includes(it.userData.name));
    for (const it of main) {
      const fwd = new THREE.Vector3(0, 0, 1).applyQuaternion(it.quaternion); const toDoor = door.clone().sub(it.position); toDoor.y = 0; const dist = toDoor.length(); toDoor.normalize();
      const facing = fwd.dot(toDoor) > 0.5;
      const lateral = Math.abs(it.position.x - door.x);
      const inLine = lateral < 0.9;
      const back = it.position.clone().addScaledVector(fwd, -(it.userData.size[2] / 2 + 0.05));
      const backNearWall = Math.min(Math.abs(back.x - (c.x - R.hw)), Math.abs(back.x - (c.x + R.hw)), Math.abs(back.z - (c.z - R.hd))) < 0.7;
      const pts = (facing ? 10 : 0) + (!inLine ? 6 : 0) + (backNearWall ? 6 : 0);
      cmd += pts;
      if (!facing) notes.push(`${it.userData.name} belum menghadap ke arah pintu.`);
      if (inLine) notes.push(`${it.userData.name} segaris langsung dengan pintu; geser ke samping.`);
      if (!backNearWall) notes.push(`${it.userData.name} belum bersandar ke dinding padat.`);
      void dist;
    }
    score += main.length ? (cmd / (main.length * 22)) * 55 : 55;
    const centerClear = this.items.every((it) => Math.hypot(it.position.x - c.x, it.position.z - c.z) > 1.2);
    if (centerClear) score += 25; else notes.push('Pusat ruang (Tai Qi) belum lapang.');
    const pathClear = this.items.every((it) => { const dx = Math.abs(it.position.x - c.x); return !(dx < 0.9 && it.position.z > c.z && it.position.z < door.z + 0.2); });
    if (pathClear) score += 20; else notes.push('Jalur dari pintu ke pusat ruang terhalang.');
    score = Math.round(score);
    return { score, notes };
  }
  update(dt, input) {
    const { ctx, p } = this;
    const pl = ctx.player;
    if (this.held) {
      const fwd = pl.forward(); const at = pl.pos.clone().addScaledVector(fwd, 1.8);
      this.held.position.set(at.x, pl.pos.y + 1.0, at.z);
      if (input.hit('KeyR')) this.held.rotation.y += Math.PI / 2;
      if (input.hit('KeyE')) this.dropAt(at);
    } else if (input.hit('KeyE')) {
      const hit = ctx.app.pick(); let o = hit?.object; while (o && !o.userData?.item) o = o.parent;
      if (o && this.items.includes(o) && o.position.distanceTo(pl.pos) < 5) this.pickUp(o);
      else { const near = this.items.filter((x) => !x.userData.locked).sort((a, b) => a.position.distanceTo(pl.pos) - b.position.distanceTo(pl.pos))[0]; if (near && near.position.distanceTo(pl.pos) < 2.5) this.pickUp(near); }
    }
    if (p.mode === 'fengshui' && input.hit('KeyF')) this.judge();
    if (p.mode === 'zones') ctx.setProgress(`Terpasang ${this.items.filter((x) => x.userData.locked).length}/${this.items.length}${this.held ? ' · membawa benda' : ''}`);
    if (p.mode === 'tower') { ctx.setProgress(`Balok ${this.items.length}${this.held ? ' · membawa balok' : ''}`); this.ctx.setMeter(this.towerHeight() / p.goal, `Tinggi menara ${fmtNum(this.towerHeight(), 1)} m`); }
    if (p.mode === 'fengshui') ctx.setProgress('Tekan F untuk menilai tata letak');
  }
  judge() {
    const r = this.evaluateRoom(); this.lastEval = r;
    this.ctx.app.ui.fengshuiResult(r);
    if (r.score >= 70) { this.ctx.addScore(r.score * 5); this.ctx.win(); } else this.ctx.sfx('bad');
  }
  autoplay(tick) {
    const { p, ctx } = this;
    if (p.mode === 'zones') for (const it of this.items) { this.pickUp(it); this.dropAt(this.zones[it.userData.i].position.clone()); tick(1); }
    if (p.mode === 'tower') { for (const it of this.items) { if (ctx.stage.status !== 'playing') break; this.pickUp(it); this.dropAt(this.towerSpot.clone().add(new THREE.Vector3(0, 0.1, 0))); tick(1); } }
    if (p.mode === 'fengshui') {
      const { c, hw, hd } = this.room;
      const spots = [[-hw + 1.1, -hd + 1.3], [hw - 1.1, -hd + 1.3], [-hw + 0.6, 0.6], [hw - 0.6, 0.9], [hw - 0.6, -0.6]];
      this.items.forEach((it, i) => {
        const [x, z] = spots[i % spots.length]; this.pickUp(it);
        const pos = c.clone().add(new THREE.Vector3(x, 0, z));
        this.dropAt(pos);
        const toDoor = this.room.door.clone().sub(it.position); it.rotation.y = Math.atan2(toDoor.x, toDoor.z);
        if (['Ranjang', 'Meja kerja', 'Sofa'].includes(it.userData.name)) {
          const fwd = new THREE.Vector3(Math.sin(it.rotation.y), 0, Math.cos(it.rotation.y));
          const back = it.position.clone().addScaledVector(fwd, -(it.userData.size[2] / 2));
          const wallZ = c.z - hd, wallX = Math.sign(x) * hw + c.x;
          const dz = back.z - wallZ, dx = back.x - wallX;
          if (Math.abs(dz) < Math.abs(dx)) it.position.z -= dz - 0.1; else it.position.x -= dx - 0.1 * Math.sign(dx);
        }
      });
      this.judge(); tick(1);
    }
  }
}

// ---------- 15. STUDIO (color / material / light) ----------
class Studio extends Mech {
  static objective(p) { return { color: `Cocokkan ${p.rounds} warna target.`, material: `Cocokkan ${p.rounds} material target.`, light: `Cocokkan ${p.rounds} pengaturan cahaya target.` }[p.kind]; }
  static rules(p) { return [{ color: 'Atur rona, saturasi, dan kecerahan. Cocok jika selisih warna cukup kecil.', material: 'Atur roughness dan metalness bola kiri agar sama dengan bola target di kanan.', light: p.mood ? 'Atur arah, ketinggian, dan suhu warna matahari sesuai suasana target.' : 'Atur arah dan ketinggian matahari sampai panah bayangan cocok dengan target.' }[p.kind], 'Tekan Cek setiap kali kamu yakin. Ronde cocok bernilai 150 poin.', `Waktu ${p.time} detik.`]; }
  static get controls() { return 'studio'; }
  setup() {
    const { ctx, p } = this;
    this.round = 0; this.o = ctx.overlay('studio');
    const pl = ctx.player; const f = pl.forward();
    const base = pl.pos.clone().addScaledVector(f, 2.6).add(new THREE.Vector3(0, 1.2, 0));
    const side = new THREE.Vector3().crossVectors(f, new THREE.Vector3(0, 1, 0));
    if (p.kind !== 'light') {
      this.mine = new THREE.Mesh(new THREE.SphereGeometry(0.45, 48, 32), new THREE.MeshStandardMaterial({ color: '#888', roughness: 0.5, metalness: 0 }));
      this.goal = new THREE.Mesh(new THREE.SphereGeometry(0.45, 48, 32), new THREE.MeshStandardMaterial({ color: '#888', roughness: 0.5, metalness: 0 }));
      this.mine.position.copy(base).addScaledVector(side, -0.6); this.goal.position.copy(base).addScaledVector(side, 0.6);
      ctx.group.add(this.mine, this.goal);
    } else {
      const sun = ctx.world.sun; this.sun = sun;
      const saved = { pos: sun.position.clone(), color: sun.color.clone(), int: sun.intensity };
      ctx.onDispose(() => { sun.position.copy(saved.pos); sun.color.copy(saved.color); sun.intensity = saved.int; });
      this.post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 12), new THREE.MeshStandardMaterial({ color: '#fff3dd' }));
      const g = pl.pos.clone().addScaledVector(f, 3); this.post.position.copy(g).add(new THREE.Vector3(0, 0.8, 0)); this.post.castShadow = true;
      this.arrowT = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 2.2), new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.85, depthWrite: false }));
      this.arrowT.rotation.x = -Math.PI / 2; this.arrowT.position.copy(g).add(new THREE.Vector3(0, 0.03, 0));
      ctx.group.add(this.post, this.arrowT);
    }
    this.newRound();
  }
  newRound() {
    const { ctx, p } = this; const r = this.rng;
    this.o.replaceChildren();
    const sliders = (defs) => defs.map(([key, lab, min, max, step]) => {
      const inp = el('input', { type: 'range', min, max, step, value: this.val[key], 'aria-label': lab, oninput: (e) => { this.setValue(key, +e.target.value); } });
      this.inputs[key] = inp; return el('label', { class: 'sl' }, el('span', {}, lab), inp);
    });
    this.inputs = {};
    if (p.kind === 'color') {
      const pal = ctx.app.data.palette?.length ? ctx.app.data.palette : ['#c96f4a', '#4a7fc9', '#62b38a', '#d9b44a'];
      const t = new THREE.Color(r.pick(pal)); const hsl = {}; t.getHSL(hsl);
      if (hsl.s < 0.15) { hsl.s = 0.35 + r() * 0.4; t.setHSL(hsl.h, hsl.s, clamp(hsl.l, 0.25, 0.75)); }
      this.target = { h: Math.round(hsl.h * 360), s: Math.round(hsl.s * 100), l: Math.round(clamp(hsl.l, 0.15, 0.85) * 100) };
      this.val = { h: (this.target.h + 120 + r.int(120)) % 360, s: 50, l: 50 };
      this.goal.material.color.setHSL(this.target.h / 360, this.target.s / 100, this.target.l / 100);
      this.o.append(el('div', { class: 'swatches' }, this.sw = el('span', { class: 'sw' }), el('span', { class: 'sw', style: { background: `hsl(${this.target.h} ${this.target.s}% ${this.target.l}%)` } })), ...sliders([['h', 'Rona', 0, 359, 1], ['s', 'Saturasi', 0, 100, 1], ['l', 'Kecerahan', 0, 100, 1]]));
    } else if (p.kind === 'material') {
      this.target = { r: Math.round(r() * 10) / 10, m: Math.round(r() * 10) / 10 };
      this.val = { r: 0.5, m: this.target.m > 0.5 ? 0 : 1 };
      const col = new THREE.Color(r.pick(['#c9a14a', '#b8c4d6', '#c96f4a', '#7fa8c9']));
      this.goal.material.color.copy(col); this.mine.material.color.copy(col);
      this.goal.material.roughness = this.target.r; this.goal.material.metalness = this.target.m;
      this.o.append(el('p', { class: 'g-note' }, 'Kiri: buatanmu. Kanan: target.'), ...sliders([['r', 'Roughness', 0, 1, 0.05], ['m', 'Metalness', 0, 1, 0.05]]));
    } else {
      const moods = [['Fajar sejuk', 7500], ['Siang netral', 5500], ['Senja hangat', 3200]];
      this.target = { az: r.int(360), el: 20 + r.int(50), k: p.mood ? r.pick(moods) : null };
      this.val = { az: (this.target.az + 150) % 360, el: 60, k: 5500 };
      const defs = [['az', 'Arah matahari', 0, 359, 1], ['el', 'Ketinggian', 10, 80, 1]]; if (p.mood) defs.push(['k', 'Suhu warna (K)', 2500, 9000, 100]);
      this.o.append(el('p', { class: 'g-note' }, p.mood ? `Suasana target: ${this.target.k[0]}. Panah emas menunjukkan arah bayangan target.` : 'Panah emas di tanah menunjukkan arah bayangan target.'), ...sliders(defs));
      this.arrowT.rotation.z = THREE.MathUtils.degToRad(this.target.az);
    }
    this.o.append(el('button', { type: 'button', class: 'btn-primary', onclick: () => this.check() }, 'Cek'));
    this.apply();
  }
  setValue(k, v) { this.val[k] = v; if (this.inputs[k]) this.inputs[k].value = v; this.apply(); }
  apply() {
    const { p } = this;
    if (p.kind === 'color') { this.mine.material.color.setHSL(this.val.h / 360, this.val.s / 100, this.val.l / 100); if (this.sw) this.sw.style.background = `hsl(${this.val.h} ${this.val.s}% ${this.val.l}%)`; }
    if (p.kind === 'material') { this.mine.material.roughness = this.val.r; this.mine.material.metalness = this.val.m; }
    if (p.kind === 'light') {
      const az = THREE.MathUtils.degToRad(this.val.az), elv = THREE.MathUtils.degToRad(this.val.el), R = this.ctx.world.radius * 2;
      // shadow points away from the sun: sun placed opposite the target shadow direction
      const dir = new THREE.Vector3(-Math.sin(az) * Math.cos(elv), Math.sin(elv), -Math.cos(az) * Math.cos(elv));
      this.sun.position.copy(this.post.position).addScaledVector(dir, R); this.sun.target.position.copy(this.post.position); this.sun.target.updateMatrixWorld();
      if (p.mood) this.sun.color.copy(kelvin(this.val.k));
    }
  }
  matched() {
    const { p, val, target } = this;
    if (p.kind === 'color') { const a = new THREE.Color().setHSL(val.h / 360, val.s / 100, val.l / 100), b = new THREE.Color().setHSL(target.h / 360, target.s / 100, target.l / 100); return Math.hypot(a.r - b.r, a.g - b.g, a.b - b.b) < 0.09; }
    if (p.kind === 'material') return Math.abs(val.r - target.r) <= 0.1 && Math.abs(val.m - target.m) <= 0.1;
    const dAz = Math.abs(((val.az - target.az + 540) % 360) - 180);
    return dAz <= 8 && Math.abs(val.el - target.el) <= 6 && (!p.mood || Math.abs(val.k - target.k[1]) <= 600);
  }
  check() {
    const { ctx, p } = this; if (ctx.stage.status !== 'playing') return;
    if (this.matched()) { this.round++; ctx.addScore(150); ctx.sfx('good'); if (this.round >= p.rounds) return ctx.win(); this.newRound(); }
    else { ctx.sfx('bad'); ctx.toast('Belum cocok. Perhatikan lagi targetnya.'); }
  }
  update() { this.ctx.setProgress(`Ronde ${this.round + 1}/${this.p.rounds}`); }
  autoplay(tick) {
    while (this.ctx.stage.status === 'playing') {
      const t = this.target;
      if (this.p.kind === 'color') { this.setValue('h', t.h); this.setValue('s', t.s); this.setValue('l', t.l); }
      if (this.p.kind === 'material') { this.setValue('r', t.r); this.setValue('m', t.m); }
      if (this.p.kind === 'light') { this.setValue('az', t.az); this.setValue('el', t.el); if (t.k) this.setValue('k', t.k[1]); }
      this.check(); tick(1);
    }
  }
}
function kelvin(k) { const t = k / 100; let r, g, b; if (t <= 66) { r = 255; g = 99.47 * Math.log(t) - 161.12; b = t <= 19 ? 0 : 138.52 * Math.log(t - 10) - 305.04; } else { r = 329.7 * (t - 60) ** -0.1332; g = 288.12 * (t - 60) ** -0.0755; b = 255; } return new THREE.Color(clamp(r, 0, 255) / 255, clamp(g, 0, 255) / 255, clamp(b, 0, 255) / 255); }

// ---------- 16. RESCUE ----------
class Rescue extends Mech {
  static objective(p) { return `Temukan ${p.count} penghuni yang tersesat dan antar ke zona aman.`; }
  static rules(p) { return ['Dekati yang tersesat; ia akan mengikutimu.', 'Bawa ke lingkaran hijau di titik awal.', 'Tiap penyelamatan bernilai 250 poin.', `Waktu ${p.time} detik.`]; }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    this.lost = ctx.app.actors.ensure(p.target, p.count, this.rng);
    this.zone = zoneDisc(ctx, MINT, 2); this.zone.position.copy(ctx.player.pos).add(new THREE.Vector3(0, 0.05, 0));
    const far = ctx.points(this.lost.length, { minDist: Math.min(10, ctx.world.radius * 0.6), sameLevel: ctx.player.pos.y });
    this.saved = 0;
    this.lost.forEach((a, i) => {
      const orig = a.worldPosition(); a.rescue = { state: 'lost' };
      a.setWorldPosition(far[i]);
      const mark = orb(ctx, ROSE, 0.14); a.rescue.mark = mark;
      a.override = (dt, act) => {
        mark.position.copy(act.worldPosition()).add(new THREE.Vector3(0, 2.2, 0));
        if (act.rescue.state === 'follow') {
          const pp = ctx.player.pos; const d = pp.clone().sub(act.worldPosition()); d.y = 0;
          const len = d.length(); if (len > 1.6) { const next = act.worldPosition().addScaledVector(d.clone().divideScalar(len), Math.min(len - 1.5, (7.2 + Math.max(0, len - 6) * 0.8) * dt)); const h = ctx.world.castDown(next.x, next.z, next.y + 2.5, 6); if (h) next.y = h.point.y; act.setWorldPosition(next); act.faceWorld(d); return true; }
        }
        return false;
      };
      ctx.onDispose(() => { a.override = null; if (!a.procedural) a.setWorldPosition(orig); delete a.rescue; });
    });
  }
  update() {
    const { ctx } = this;
    for (const a of this.lost) {
      const r = a.rescue; if (!r) continue;
      if (r.state === 'lost' && ctx.near(a.worldPosition().add(new THREE.Vector3(0, 0.9, 0)), 2.4)) { r.state = 'follow'; ctx.sfx('good'); ctx.app.ui.bubble(a, 'Terima kasih! Aku ikut kamu.'); }
      if (r.state === 'follow' && a.worldPosition().distanceTo(this.zone.position) < 2.2) { r.state = 'safe'; r.mark.visible = false; this.saved++; ctx.addScore(250); ctx.sfx('collect'); }
    }
    ctx.setProgress(`Selamat ${this.saved}/${this.lost.length}${this.lost.some((a) => a.rescue?.state === 'follow') ? ' · ada yang mengikutimu' : ''}`);
    const lost = this.lost.find((a) => a.rescue?.state === 'lost');
    if (lost) hotCold(ctx, lost.worldPosition(), ctx.world.radius * 1.5); else ctx.setMeter(null);
    if (this.saved >= this.lost.length) ctx.win();
  }
  autoplay(tick) {
    for (const a of this.lost) {
      this.ctx.teleport(a.worldPosition()); tick(1);
      this.ctx.teleport(this.zone.position.clone()); let g = 0; while (a.rescue?.state === 'follow' && g++ < 1500) tick(1);
    }
    tick(1);
  }
}

// ---------- 17. HIDE & SEEK ----------
class HideSeek extends Mech {
  static objective(p) { return p.target === 'beacon' ? 'Temukan suar tersembunyi.' : 'Temukan siapa yang bersembunyi.'; }
  static rules(p) { const r = ['Indikator panas-dingin menunjukkan seberapa dekat kamu.', 'Ditemukan jika jaraknya kurang dari 2 m.', `Waktu ${p.time} detik. Sisa waktu menjadi bonus.`]; if (p.dark) r.push('Dunia meredup selama permainan.'); return r; }
  static get controls() { return 'move'; }
  setup() {
    const { ctx, p } = this;
    const spot = ctx.points(1, { interior: this.rng() < 0.5, minDist: Math.min(14, ctx.world.radius * 0.7) })[0];
    if (p.target === 'beacon') { this.obj = orb(ctx, GOLD, 0.2); this.obj.position.copy(spot).add(new THREE.Vector3(0, 0.4, 0)); this.posFn = () => this.obj.position; }
    else {
      const a = ctx.app.actors.ensure(p.target, 1, this.rng)[0]; this.actor = a; const orig = a.worldPosition();
      a.setWorldPosition(spot); a.override = () => false;
      ctx.onDispose(() => { a.override = null; if (!a.procedural) a.setWorldPosition(orig); });
      this.posFn = () => a.worldPosition().add(new THREE.Vector3(0, 0.6, 0));
    }
    if (p.dark) { const r = ctx.app.renderer.renderer, e = r.toneMappingExposure; r.toneMappingExposure = e * 0.35; ctx.onDispose(() => { r.toneMappingExposure = e; }); }
  }
  update() {
    const { ctx } = this; const pos = this.posFn();
    hotCold(ctx, pos, ctx.world.radius * 1.6);
    ctx.setProgress(this.actor ? `Mencari ${this.actor.name}` : 'Mencari suar');
    if (ctx.near(pos, 2.0)) { ctx.addScore(200); if (this.actor) ctx.app.ui.bubble(this.actor, 'Ketahuan!'); ctx.win(); }
  }
  autoplay(tick) { this.ctx.teleport(this.posFn().clone().add(new THREE.Vector3(0.3, -0.6, 0))); tick(1); }
}

// ---------- 18. FEED ----------
class Feed extends Mech {
  static objective(p) { return `Antar ${p.count} makanan ke hewan yang lapar.`; }
  static rules() { return ['Ambil makanan (bola jingga) dengan menyentuhnya; kamu hanya bisa membawa satu.', 'Antar ke hewan dengan meter lapar terendah.', 'Jika meter lapar satu hewan habis, kamu kalah.']; }
  static get controls() { return 'move'; }
  setup() {
    const { ctx } = this;
    this.animals = ctx.app.actors.ensure('animal', 3, this.rng);
    this.hunger = this.animals.map((_, i) => 1 - i * 0.12);
    this.bars = this.animals.map((a) => { const s = label('', '#fff', 1.2); ctx.group.add(s); return s; });
    this.food = []; for (let i = 0; i < 2; i++) this.spawnFood();
    this.carry = null; this.fed = 0;
  }
  spawnFood() { const m = orb(this.ctx, '#ffb37a', 0.22); m.position.copy(this.ctx.world.sample(this.rng, { near: this.ctx.player.pos, radius: 10, sameLevel: this.ctx.player.pos.y })).add(new THREE.Vector3(0, 0.8, 0)); this.food.push(m); }
  update(dt) {
    const { ctx, p } = this;
    this.animals.forEach((a, i) => {
      this.hunger[i] -= dt / 45;
      const pos = a.worldPosition();
      const bar = this.bars[i]; bar.position.copy(pos).add(new THREE.Vector3(0, 1.9, 0));
      const pct = Math.round(Math.max(0, this.hunger[i]) * 100);
      if (bar.userData.pct !== pct) { bar.userData.pct = pct; const nl = label(`${pct}%`, pct < 30 ? '#ff8f8f' : '#c9ffef', 1.2); bar.material.map.dispose(); bar.material.map = nl.material.map; bar.material.needsUpdate = true; }
      if (this.carry && ctx.near(pos.clone().add(new THREE.Vector3(0, 0.6, 0)), 2.2)) { this.carry.parent?.remove(this.carry); this.carry = null; this.hunger[i] = 1; this.fed++; ctx.addScore(150); ctx.sfx('good'); a.playPose('jump', 0.6); if (this.fed >= p.count) ctx.win(); }
      if (this.hunger[i] <= 0) ctx.lose(`${a.name} terlalu lapar`);
    });
    if (!this.carry) for (const f of this.food) if (f.parent && ctx.near(f.position, 1.3)) { this.carry = f; this.food.splice(this.food.indexOf(f), 1); ctx.sfx('collect'); this.spawnFood(); break; }
    if (this.carry) this.carry.position.copy(ctx.player.pos).add(new THREE.Vector3(0, 2.1, 0));
    ctx.setProgress(`Diberi makan ${this.fed}/${p.count}${this.carry ? ' · membawa makanan' : ''}`);
  }
  autoplay(tick) {
    let g = 0;
    while (this.ctx.stage.status === 'playing' && g++ < 60) {
      if (!this.carry) { this.ctx.teleport(this.food[0].position.clone().add(new THREE.Vector3(0, -0.9, 0))); tick(1); }
      const i = this.hunger.indexOf(Math.min(...this.hunger));
      this.ctx.teleport(this.animals[i].worldPosition()); tick(1);
    }
  }
}

export const MECHS = { collect: Collect, find: Find, race: Race, follow: Follow, dodge: Dodge, targets: Targets, sequence: Sequence, pairs: Pairs, quiz: Quiz, photo: Photo, platform: Platform, maze: Maze, logic: Logic, arrange: Arrange, studio: Studio, rescue: Rescue, hideseek: HideSeek, feed: Feed };
for (const M of Object.values(MECHS)) { M.controlsKey = M.controls; }
// Expose static helpers on the class itself for the engine (objective/rules/controls).
for (const [k, M] of Object.entries(MECHS)) { M.mechName = k; }
