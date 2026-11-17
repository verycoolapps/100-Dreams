import { mulberry32, store } from '../util.js';

const LEVELS = [['Normal', 1], ['Sulit', 1.25], ['Sangat sulit', 1.45]];

export class Randomizer {
  constructor(app) { this.app = app; this.state = store.get('rand', { streak: 0, best: 0 }); this.infiniteMode = false; this.infiniteCount = 0; }
  level() { return LEVELS[Math.min(LEVELS.length - 1, Math.floor(this.state.streak / 3))]; }
  levelLabel() { const [l] = this.level(); return `${l} (beruntun ${this.state.streak})`; }
  pick({ category = 'all', seed } = {}) {
    const g = this.app.games;
    const s = seed ?? ((Math.random() * 2 ** 31) >>> 0);
    const rng = mulberry32(s);
    const pool = g.base.filter((x) => category === 'all' || x.cat === category);
    return { def: rng.pick(pool.length ? pool : g.base), seed: s };
  }
  surprise(opts = {}) {
    const { def, seed } = this.pick(opts);
    const [label, diff] = this.level();
    this.app.ui.toast(`Tantangan: ${def.title} · ${label} · seed ${seed}`);
    return this.app.games.start(def.id, { seed, difficulty: diff, source: 'randomizer' });
  }
  infinite() { this.infiniteMode = true; this.infiniteCount = 0; this.surprise(); }
  recordResult(s) {
    if (s.status === 'won') { this.state.streak += 1; this.state.best = Math.max(this.state.best, this.state.streak); } else this.state.streak = 0;
    store.set('rand', this.state);
    if (this.infiniteMode) {
      if (s.status === 'won') { this.infiniteCount += 1; this.app.ui.toast(`Tantangan tanpa akhir: ${this.infiniteCount} selesai. Berikutnya dalam 3 detik.`); setTimeout(() => { if (this.infiniteMode) { this.app.games.stop(true); this.surprise(); } }, 3000); }
      else { this.app.ui.toast(`Tantangan tanpa akhir berakhir setelah ${this.infiniteCount} kemenangan.`); this.infiniteMode = false; }
    }
  }
  history() { return this.app.games.stats.history.filter((h) => h.source === 'randomizer'); }
}
