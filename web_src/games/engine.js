import * as THREE from 'three';
import { mulberry32, store, todaySeed } from '../util.js';
import { MECHS, CONTROLS } from './mechanics.js';

const COMPOSITE = new Set(['gauntlet', 'hotseat']);
export const DIFFICULTY = { easy: 0.8, normal: 1, hard: 1.25 };

export function applyDifficulty(p, d) {
  const q = JSON.parse(JSON.stringify(p));
  if (q.time) q.time = Math.round(q.time / d);
  if (d > 1) { for (const k of ['count', 'length', 'pairs']) if (q[k]) q[k] = q[k] + 1; if (q.speed) q.speed *= 1.15; }
  if (d < 1) { for (const k of ['count', 'length', 'pairs']) if (q[k] && q[k] > 3) q[k] = q[k] - 1; if (q.speed) q.speed *= 0.85; }
  return q;
}

export class GameContext {
  constructor(engine, session, p, stageDef) {
    this.engine = engine; this.app = engine.app; this.session = session; this.p = p; this.stageDef = stageDef;
    this.rng = session.rng; this.test = session.test; this._stage = session.stage;
    this.group = new THREE.Group(); this.group.name = '__dreams_game';
    this.app.world.dynamic.add(this.group);
    this.colliders = [];
    this.disposers = [];
    this.lives = p.lives || 0;
    this.maxLives = this.lives;
    this.invuln = 0;
    this.godMode = false;
    this.overlayEl = null;
    this.progress = '';
    this.meterValue = null; this.meterLabel = '';
    this.hint = '';
  }
  get player() { return this.app.player; }
  get world() { return this.app.world; }
  get stage() { return this._stage; }
  addScore(n) { this.stage.score = Math.max(0, this.stage.score + Math.round(n)); }
  addTime(s) { this.stage.time += s; this.app.ui.toast(`+${s} detik`); }
  win() { this.engine.winStage(); }
  lose(reason) { this.engine.loseStage(reason); }
  setProgress(t) { this.progress = t; }
  setMeter(v, label) { this.meterValue = v; this.meterLabel = label || ''; }
  setHint(t) { this.hint = t; }
  sfx(n) { this.app.audio.sfx(n); }
  toast(t) { this.app.ui.toast(t); }
  onDispose(fn) { this.disposers.push(fn); }
  addCollider(mesh) { this.colliders.push(mesh); this.app.extraColliders.push(mesh); }
  removeCollider(mesh) { let i = this.colliders.indexOf(mesh); if (i >= 0) this.colliders.splice(i, 1); i = this.app.extraColliders.indexOf(mesh); if (i >= 0) this.app.extraColliders.splice(i, 1); }
  loseLife(reason = 'Terkena') {
    if (this.godMode || this.invuln > 0) return;
    this.lives -= 1; this.invuln = 1.5; this.sfx('bad');
    this.toast(`${reason}. Nyawa tersisa ${Math.max(0, this.lives)}.`);
    if (this.lives <= 0) this.lose('Nyawa habis');
  }
  playerCenter() { return this.app.player.pos.clone().add(new THREE.Vector3(0, 0.9, 0)); }
  near(pos, r) { return this.playerCenter().distanceTo(pos) < r; }
  teleport(pos, look) { this.app.player.place(pos.clone()); if (look) this.app.player.lookAt(look); }
  overlay(cls = '') {
    if (!this.overlayEl) { this.overlayEl = this.app.ui.gameOverlay(cls); }
    return this.overlayEl;
  }
  pickable() { return this.app.ui; }
  // Spread n standable points apart from each other.
  points(n, opts = {}) {
    const out = [];
    const minD = opts.minDist ?? Math.max(2.5, Math.min(12, this.world.radius / Math.sqrt(n + 1)));
    for (let i = 0; i < n; i++) {
      let best = null;
      for (let k = 0; k < 12; k++) {
        const p = this.world.sample(this.rng, opts);
        const d = Math.min(Infinity, ...out.map((q) => q.distanceTo(p)), this.player.pos.distanceTo(p) * 1.5);
        if (d >= minD) { best = p; break; }
        if (!best || d > best.d) { best = p; best.d = d; }
      }
      out.push(best.clone());
    }
    return out;
  }
  objects(filter = 'all') {
    const w = this.world;
    const all = [...w.meta.values()].filter((m) => w.nodeFor(m) && !['light', 'camera', 'terrain'].includes(m.role) && m.maxDim > 0.05);
    const notStruct = all.filter((m) => !['wall', 'floor', 'roof', 'building', 'terrain'].includes(m.role));
    const vol = (m) => m.dims[0] * m.dims[1] * m.dims[2];
    switch (filter) {
      case 'character': return all.filter((m) => m.role === 'character');
      case 'animal': return all.filter((m) => m.role === 'animal');
      case 'small': { const s = notStruct.filter((m) => m.maxDim < 1.4); return s.length >= 3 ? s : notStruct; }
      case 'large': return all.slice().sort((a, b) => vol(b) - vol(a)).slice(0, Math.max(6, Math.ceil(all.length * 0.25)));
      case 'notable': return notStruct.length >= 3 ? notStruct : all;
      default: return all;
    }
  }
}

export class GameEngine {
  constructor(app, catalog) {
    this.app = app; this.catalog = catalog;
    this.byId = new Map(catalog.games.map((g) => [g.id, g]));
    this.base = catalog.games.filter((g) => !COMPOSITE.has(g.mech));
    this.active = null;
    this.stats = store.get('stats', { plays: 0, wins: 0, best: {}, history: [], achievements: [], catsWon: [] });
  }

  rulesFor(mech, p) { return (MECHS[mech].rules?.(p)) || []; }
  objectiveFor(mech, p) { return MECHS[mech].objective?.(p) || ''; }
  controlsFor(mech) { return CONTROLS[MECHS[mech].controls || 'move']; }

  buildStages(def, rng) {
    const p = def.p;
    if (def.mech === 'gauntlet') {
      let ids;
      if (p.stages) ids = p.stages.slice();
      else if (p.categories) ids = p.categories.map((c) => rng.pick(this.base.filter((g) => g.cat === c)).id);
      else if (p.distinct) { const cats = rng.shuffle([...new Set(this.base.map((g) => g.cat))]).slice(0, p.random); ids = cats.map((c) => rng.pick(this.base.filter((g) => g.cat === c)).id); }
      else ids = rng.shuffle(this.base).slice(0, p.random).map((g) => g.id);
      return ids.map((id) => { const g = this.byId.get(id); return { mech: g.mech, p: g.p, title: g.title, id }; });
    }
    if (def.mech === 'hotseat') return Array.from({ length: p.players }, (_, i) => ({ mech: p.inner.mech, p: p.inner.p, title: `Giliran pemain ${i + 1}`, player: i }));
    return [{ mech: def.mech, p: def.p, title: def.title, id: def.id }];
  }

  start(id, opts = {}) {
    const def = this.byId.get(id);
    if (!def) throw new Error('Game tidak ditemukan: ' + id);
    this.stop(true);
    const seed = opts.seed ?? (def.p.daily ? todaySeed() : (Math.random() * 2 ** 31) >>> 0);
    const rng = mulberry32(seed);
    const difficulty = opts.difficulty ?? 1;
    this.active = { def, seed, rng, stages: this.buildStages(def, rng), idx: 0, total: 0, playerScores: [], status: 'playing', test: !!opts.test, difficulty, photos: [], startedAt: performance.now(), source: opts.source || 'library' };
    this.app.actors.removeProcedural();
    this.app.ui.gameStarted(this.active);
    this.beginStage();
    return this.active;
  }

  beginStage() {
    const s = this.active;
    const st = s.stages[s.idx];
    const p = applyDifficulty(st.p, s.difficulty);
    const Mech = MECHS[st.mech];
    s.stage = { st, p, time: p.time || 180, limit: p.time || 180, score: 0, status: 'ready', ctx: null, mech: null };
    const ctx = new GameContext(this, s, p, st);
    s.stage.ctx = ctx;
    s.stage.origin = this.app.player.pos.clone();
    s.stage.originYaw = this.app.player.yaw;
    const mech = new Mech(ctx);
    s.stage.mech = mech;
    mech.setup();
    if (s.test) { s.stage.status = 'playing'; return; }
    this.app.ui.stageIntro(s, {
      title: s.stages.length > 1 ? `${s.def.title}: ${st.title}` : s.def.title,
      objective: this.objectiveFor(st.mech, p), rules: this.rulesFor(st.mech, p), controls: this.controlsFor(st.mech),
      stageInfo: s.stages.length > 1 ? `Babak ${s.idx + 1} dari ${s.stages.length}` : '',
    }, () => this.go());
  }

  pick(hit) { const st = this.active?.stage; if (st?.status === 'playing' && st.mech.onPick) { st.mech.onPick(hit); return true; } return false; }
  wantsPick() { const st = this.active?.stage; return !!(st?.status === 'playing' && st.mech.onPick); }

  go() { if (this.active?.stage?.status === 'ready') { this.active.stage.status = 'playing'; this.app.audio.sfx('click'); } }

  pause() { const st = this.active?.stage; if (st?.status === 'playing') { st.status = 'paused'; this.app.ui.paused(true); } }
  resume() { const st = this.active?.stage; if (st?.status === 'paused') { st.status = 'playing'; this.app.ui.paused(false); } }
  togglePause() { const st = this.active?.stage; if (!st) return; st.status === 'paused' ? this.resume() : this.pause(); }

  update(dt, input) {
    const s = this.active; if (!s || !s.stage) return;
    const st = s.stage;
    if (st.status !== 'playing') return;
    if (input.hit('Escape')) { this.pause(); return; }
    st.time -= dt;
    st.ctx.invuln = Math.max(0, st.ctx.invuln - dt);
    if (st.time <= 0) {
      st.time = 0;
      const r = st.mech.onTimeout ? st.mech.onTimeout() : 'lose';
      if (r === 'win') this.winStage(); else this.loseStage('Waktu habis');
      return;
    }
    try { st.mech.update(dt, input); } catch (e) { console.error(e); this.loseStage('Galat: ' + e.message); }
    if (!s.test) this.app.ui.hud(s);
  }

  cleanupStage() {
    const st = this.active?.stage; if (!st || st.cleaned) return;
    st.cleaned = true;
    const ctx = st.ctx;
    try { st.mech.dispose?.(); } catch (e) { console.error(e); }
    for (const fn of ctx.disposers.reverse()) { try { fn(); } catch (e) { console.error(e); } }
    for (const c of ctx.colliders) { const i = this.app.extraColliders.indexOf(c); if (i >= 0) this.app.extraColliders.splice(i, 1); }
    ctx.group.parent?.remove(ctx.group);
    ctx.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => { m.map?.dispose(); m.dispose(); }); });
    ctx.overlayEl?.remove();
    this.app.ui.clearGameOverlay();
    this.app.renderer.setHighlight([]);
    const p = this.app.player;
    p.gravity = 18; p.speedScale = 1; p.frozen = false; p.jumpSpeed = 5.6;
    if (st.returnTo) p.place(st.returnTo.pos, st.returnTo.yaw);
  }

  winStage() {
    const s = this.active; const st = s?.stage; if (!st || st.status === 'won' || st.status === 'lost') return;
    st.status = 'won';
    const bonus = Math.round(Math.max(0, st.time)) * 2;
    st.score += bonus + 100;
    st.bonus = bonus;
    this.cleanupStage();
    this.app.audio.sfx(s.stages.length > 1 && s.idx < s.stages.length - 1 ? 'good' : 'win');
    this.afterStage(true);
  }

  loseStage(reason) {
    const s = this.active; const st = s?.stage; if (!st || st.status === 'won' || st.status === 'lost') return;
    st.status = 'lost'; st.reason = reason;
    this.cleanupStage();
    this.app.audio.sfx('lose');
    this.afterStage(false, reason);
  }

  afterStage(won, reason) {
    const s = this.active;
    const hotseat = s.def.mech === 'hotseat';
    s.total += won || hotseat ? s.stage.score : 0;
    if (hotseat) s.playerScores.push({ player: s.idx + 1, score: s.stage.score, won });
    const more = s.idx < s.stages.length - 1;
    if ((won || hotseat) && more) {
      s.idx += 1;
      if (s.test) { this.beginStage(); return; }
      this.app.ui.interstitial(s, won, reason, () => this.beginStage());
      return;
    }
    s.status = won || hotseat ? 'won' : 'lost';
    s.reason = reason;
    s.duration = (performance.now() - s.startedAt) / 1000;
    if (!s.test) this.record(s);
    if (!s.test) this.app.ui.complete(s);
  }

  record(s) {
    const st = this.stats;
    st.plays += 1;
    const id = s.def.id;
    const prev = st.best[id] || 0;
    s.newBest = s.status === 'won' && s.total > prev;
    if (s.newBest) st.best[id] = s.total;
    if (s.status === 'won') { st.wins += 1; if (!st.catsWon.includes(s.def.cat)) st.catsWon.push(s.def.cat); }
    st.history.unshift({ id, title: s.def.title, status: s.status, score: s.total, seed: s.seed, at: Date.now(), source: s.source });
    st.history = st.history.slice(0, 40);
    const unlock = [];
    const ach = (key, cond, label) => { if (cond && !st.achievements.includes(key)) { st.achievements.push(key); unlock.push(label); } };
    ach('first-win', st.wins >= 1, 'Mimpi pertama: menang sekali');
    ach('ten-wins', st.wins >= 10, 'Pemimpi tangguh: 10 kemenangan');
    ach('all-cats', st.catsWon.length >= 10, 'Penjelajah sepuluh dunia: menang di semua kategori');
    ach('flawless', s.status === 'won' && s.stage?.ctx?.maxLives > 0 && s.stage.ctx.lives === s.stage.ctx.maxLives, 'Tanpa luka: menang tanpa kehilangan nyawa');
    ach('fifty-plays', st.plays >= 50, 'Lima puluh mimpi dimainkan');
    ach('dreams-100', Object.keys(st.best).length >= 100, 'Seratus mimpi: semua game pernah dimenangkan');
    s.unlocked = unlock;
    store.set('stats', st);
  }

  restart() { const s = this.active; if (!s) return; const { def, seed, difficulty, source, test } = s; this.start(def.id, { seed, difficulty, source, test }); }

  stop(silent = false) {
    if (!this.active) return;
    if (this.active.stage && !['won', 'lost'].includes(this.active.stage.status)) this.cleanupStage();
    this.active = null;
    this.app.actors.removeProcedural();
    if (!silent) this.app.ui.gameEnded();
  }

  // ---------- Automated self-test: exercises the real game logic paths ----------
  selftest(id) {
    const app = this.app;
    const dt = 1 / 30;
    const tick = (n = 1) => { for (let i = 0; i < n; i++) app.step(dt, true); };
    const r = { id, ok: false, checks: [] };
    const check = (name, cond) => { r.checks.push([name, !!cond]); if (!cond) throw new Error(name); };
    const baseline = () => ({ dyn: app.world.dynamic.children.length, col: app.extraColliders.length, scene: app.scene.children.length });
    const spawn = app.spawn.clone();
    app.player.place(spawn);
    const before = baseline();
    try {
      const s = this.start(id, { test: true, seed: 12345 });
      check('mulai: status bermain', s.stage.status === 'playing');
      tick(5);
      check('berjalan tanpa galat', ['playing', 'won'].includes(s.stage.status) || s.idx > 0);
      const t0 = s.stage.time; this.pause(); tick(10);
      check('jeda menghentikan waktu', s.stage.status === 'paused' && s.stage.time === t0);
      this.resume(); check('lanjut', s.stage.status === 'playing');
      let guard = 0;
      while (s.status === 'playing' && guard++ < s.stages.length + 2) {
        const stage = s.stage;
        stage.mech.autoplay(tick);
        tick(2);
        if (s.status === 'playing' && s.stage === stage && stage.status === 'playing') throw new Error(`babak ${s.idx + 1} tidak selesai lewat jalur menang`);
      }
      check('kondisi menang tercapai', s.status === 'won');
      check('skor tercatat', s.total > 0);
      this.restart();
      const s2 = this.active;
      check('ulang: bermain lagi', s2.stage.status === 'playing' && s2.idx === 0);
      const st2 = s2.stage;
      if (st2.mech.testLose) st2.mech.testLose();
      else { st2.time = 0.0001; tick(2); }
      if (s2.def.mech === 'hotseat') check('kalah giliran: lanjut ke pemain berikutnya', s2.idx === 1 || s2.status !== 'playing');
      else check('kondisi kalah tercapai', s2.status === 'lost');
      this.stop(true);
      tick(1);
      const after = baseline();
      check('pembersihan tanpa sisa objek', after.dyn === before.dyn && after.col === before.col && after.scene === before.scene);
      r.ok = true;
    } catch (e) {
      r.error = e.message + (e.stack ? ' @ ' + e.stack.split('\n')[0] : '');
      try { this.stop(true); } catch { /* ignore */ }
    }
    app.player.place(spawn);
    return r;
  }

  selftestAll(onEach) {
    const results = [];
    for (const g of this.catalog.games) { const res = this.selftest(g.id); results.push(res); onEach?.(res, results.length); }
    return results;
  }
}
