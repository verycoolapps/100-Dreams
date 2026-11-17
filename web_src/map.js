import { el, store } from './util.js';

// Nav aid: always-on minimap (bottom-right) + full map panel (M) with floor levels.
// Floors are discovered by probing walkable surfaces across the world and merging
// Y bands; the current level follows the player's feet. Users can tap floor chips
// to preview another level and click the map to teleport there.

const ROLE_COLOR = {
  wall: '#b9b2d6', floor: '#4a456e', terrain: '#3c3860', building: '#c9c1ea', furniture: '#f2c46d',
  character: '#ff8fb1', animal: '#7fe0c4', plant: '#8fd48a', door: '#ffffff', water: '#6fa8ff',
  vehicle: '#ffb37a', stairs: '#e8a15c', window: '#9fe6ff', roof: 'rgba(0,0,0,0)',
};
const POI_ROLE = new Set(['building', 'door', 'stairs', 'vehicle']);
const bandY = (y) => Math.round(y / 3.2);

export class MapView {
  constructor(ui) {
    this.ui = ui; this.app = ui.app;
    this.visible = store.get('mapVisible', true);
    this.viewed = null;          // floor index override for the full map; null = follow player
    this.levels = null;          // discovered lazily on first open
    this.explored = { grid: new Map() }; // band -> Set of "cx,cz" visited cells
    this.dirty = true;

    this.mini = el('div', { class: 'minimap', role: 'img', 'aria-label': 'Peta mini. Tekan M untuk peta penuh.' });
    this.miniCanvas = el('canvas', { width: 172, height: 172 });
    this.miniFloor = el('div', { class: 'mm-floor' });
    const btns = el('div', { class: 'mm-btns' });
    this.miniBtn = el('button', { type: 'button', class: 'mm-open', 'aria-label': 'Buka peta penuh', onclick: () => this.ui.openMap() }, 'Peta');
    this.miniHide = el('button', { type: 'button', class: 'mm-hide', 'aria-label': 'Sembunyikan peta mini', onclick: () => this.toggle() }, '×');
    btns.append(this.miniBtn, this.miniHide);
    this.mini.append(this.miniCanvas, this.miniFloor, btns);
    ui.root.append(this.mini);
    ui.root.classList.toggle('map-hidden', !this.visible);
    if (!this.visible) {
      this.fab = el('button', { type: 'button', class: 'mm-fab', 'aria-label': 'Tampilkan peta mini', onclick: () => this.toggle() }, 'Peta');
      ui.root.append(this.fab);
    }
  }


  toggle() {
    this.visible = !this.visible;
    store.set('mapVisible', this.visible);
    this.ui.root.classList.toggle('map-hidden', !this.visible);
    if (!this.visible) {
      // leave a tiny restore pill so the minimap can come back without opening panels
      this.fab?.remove();
      this.fab = el('button', { type: 'button', class: 'mm-fab', 'aria-label': 'Tampilkan peta mini', onclick: () => this.toggle() }, 'Peta');
      this.ui.root.append(this.fab);
    } else { this.fab?.remove(); this.fab = null; }
    this.dirty = true;
  }

  // ---------- floor discovery ----------
  // Probe a coarse XZ grid, keep upward-facing hits, cluster their Y into levels.
  discoverBands() {
    const w = this.app.world, d = this.app.data;
    const ys = [];
    const add = (y) => { if (Number.isFinite(y)) ys.push(y); };
    // object footprints give level hints even where the probe grid is sparse
    for (const o of d.objects || []) {
      if (['light', 'camera', 'roof', 'water', 'plant', 'character', 'animal'].includes(o.role)) continue;
      add(o.center[1] - o.dims[1] / 2);
    }
    const top = w.bounds.max.y + 2;
    const step = Math.max(3, Math.max(w.size.x, w.size.z) / 28);
    for (let x = w.bounds.min.x; x <= w.bounds.max.x; x += step) {
      for (let z = w.bounds.min.z; z <= w.bounds.max.z; z += step) {
        const h = w.castDown(x, z, top, top - w.floorY + 80);
        if (h && h.face) {
          const n = h.face.normal.clone().transformDirection(h.object.matrixWorld);
          if (n.y > 0.5) add(h.point.y);
        }
      }
    }
    if (!ys.length) return [{ index: 0, y: w.floorY, bands: new Set([bandY(w.floorY)]) }];
    ys.sort((a, b) => a - b);
    // cluster sorted heights into levels (gap > 2.2 m starts a new level)
    const clusters = [];
    for (const y of ys) {
      const last = clusters[clusters.length - 1];
      if (last && y - last.maxY < 2.2) { last.ys.push(y); last.maxY = y; }
      else clusters.push({ ys: [y], maxY: y });
    }
    const levels = clusters.map((c, i) => {
      const mean = c.ys.reduce((a, b) => a + b, 0) / c.ys.length;
      const bands = new Set();
      for (const y of c.ys) for (const b of [bandY(y) - 1, bandY(y), bandY(y) + 1]) bands.add(b);
      return { index: i, y: mean, bands, samples: c.ys.length };
    });
    // drop tiny clusters (props/rooftop clutter) unless they'd leave nothing
    const total = levels.reduce((a, l) => a + l.samples, 0);
    const kept = levels.filter((l) => l.samples > total * 0.01);
    const out = kept.length ? kept : levels;
    out.forEach((l, i) => { l.index = i; });
    return out;
  }

  ensureLevels() { if (!this.levels) { this.levels = this.discoverBands(); } return this.levels; }

  levelIndex(y) {
    const lv = this.ensureLevels();
    let best = 0, bd = Infinity;
    lv.forEach((l, i) => { const d = Math.abs(l.y - y); if (d < bd) { bd = d; best = i; } });
    return best;
  }

  levelLabel(i) {
    const lv = this.levels;
    if (!lv || lv.length <= 1) return lv?.length === 1 ? `Tinggi ${Math.round(lv[0].y)} m` : '';
    // rank labels: lowest level is basement/ground, then Lantai 1..n
    const n = lv.length;
    if (i === 0) return n > 2 ? `Basement ${'B'.repeat(n - 1)}` : 'Lantai dasar';
    if (i === n - 1 && n > 2) return 'Atap';
    return `Lantai ${i}`;
  }

  // ---------- explored area ----------
  notePosition(p) {
    const band = bandY(p.y);
    const cell = 6;
    const key = `${Math.floor(p.x / cell)},${Math.floor(p.z / cell)}`;
    let s = this.explored.grid.get(band); if (!s) { s = new Set(); this.explored.grid.set(band, s); }
    if (!s.has(key)) { s.add(key); this.dirty = true; }
  }

  // ---------- rendering ----------
  viewFor(size) {
    const w = this.app.world;
    const pad = Math.max(w.size.x, w.size.z) * 0.06 + 2;
    const minX = w.bounds.min.x - pad, minZ = w.bounds.min.z - pad;
    const span = Math.max(w.size.x, w.size.z) + pad * 2;
    const scale = size / span;
    return {
      scale, span,
      toPx: (x, z) => [(x - minX) * scale, (z - minZ) * scale],
      toWorld: (px, py) => [minX + px / scale, minZ + py / scale],
    };
  }

  // Static half of the map (background + world objects + POI), cached per
  // (level, canvas size) so the per-frame redraw only composites actors/player.
  staticLayer(level, size) {
    const key = `${level ? level.index : 'all'}:${size}`;
    let c = this._static?.get(key);
    if (c) return c;
    if (!this._static) this._static = new Map();
    c = document.createElement('canvas'); c.width = c.height = size;
    const g = c.getContext('2d');
    const v = this.viewFor(size);
    const d = this.app.data;
    g.fillStyle = '#15183a'; g.fillRect(0, 0, size, size);
    const objs = (d.objects || []).slice().sort((a, b) => (a.center[1] - a.dims[1] / 2) - (b.center[1] - b.dims[1] / 2));
    for (const o of objs) {
      if (['light', 'camera', 'roof'].includes(o.role)) continue;
      const baseY = o.center[1] - o.dims[1] / 2;
      if (level && !level.bands.has(bandY(baseY)) && !['terrain', 'floor'].includes(o.role)) continue;
      const [x, y] = v.toPx(o.center[0] - o.dims[0] / 2, o.center[2] - o.dims[2] / 2);
      const sw = Math.max(2, (o.dims[0] / v.span) * size), sh = Math.max(2, (o.dims[2] / v.span) * size);
      g.fillStyle = ROLE_COLOR[o.role] || '#8a86b0';
      g.globalAlpha = o.role === 'floor' || o.role === 'terrain' ? 0.35 : 0.8;
      g.fillRect(x, y, sw, sh);
    }
    g.globalAlpha = 1;
    if (level) {
      const dot = (x, z, col, r) => { const [px, py] = v.toPx(x, z); g.fillStyle = col; g.beginPath(); g.arc(px, py, r, 0, 7); g.fill(); };
      if (this.app.spawn) dot(this.app.spawn.x, this.app.spawn.z, '#7CFC9A', Math.max(4, size * 0.01));
      for (const o of objs) {
        if (!POI_ROLE.has(o.role)) continue;
        const baseY = o.center[1] - o.dims[1] / 2;
        if (!level.bands.has(bandY(baseY))) continue;
        dot(o.center[0], o.center[2], ROLE_COLOR[o.role] || '#fff', Math.max(2.5, size * 0.005));
      }
    }
    this._static.set(key, c);
    return c;
  }

  // Draw world objects + actors + player for one level onto a square canvas.
  renderInto(canvas, level = null) {
    const g = canvas.getContext('2d');
    const size = canvas.width;
    const v = this.viewFor(size);

    g.drawImage(this.staticLayer(level, size), 0, 0);

    // explored cells on this level's bands (cheap, changes as you walk)
    if (level) {
      g.fillStyle = 'rgba(130,140,230,0.12)';
      const cell = 6;
      for (const b of level.bands) for (const key of this.explored.grid.get(b) || []) {
        const [cx, cz] = key.split(',').map(Number);
        const [x, y] = v.toPx(cx * cell, cz * cell);
        g.fillRect(x, y, cell * v.scale + 0.5, cell * v.scale + 0.5);
      }
    }

    // actors on this level
    for (const a of this.app.actors?.of('any') || []) {
      const p = a.worldPosition();
      if (level && !level.bands.has(bandY(p.y))) continue;
      const [x, y] = v.toPx(p.x, p.z);
      g.fillStyle = a.kind === 'animal' ? '#7fe0c4' : '#ff8fb1';
      g.beginPath(); g.arc(x, y, Math.max(3, size * 0.008), 0, 7); g.fill();
    }

    // player arrow
    const p = this.app.player.pos;
    const [px, py] = v.toPx(p.x, p.z);
    g.save(); g.translate(px, py); g.rotate(-this.app.player.yaw);
    g.fillStyle = '#fff'; g.strokeStyle = '#23204a'; g.lineWidth = 2;
    g.beginPath(); g.moveTo(0, -size * 0.045); g.lineTo(size * 0.028, size * 0.02); g.lineTo(0, size * 0.008); g.lineTo(-size * 0.028, size * 0.02); g.closePath();
    g.fill(); g.stroke(); g.restore();

    canvas._view = v;
    return v;
  }

  // ---------- minimap loop ----------
  start() {
    if (this._raf) return;
    // Floor discovery raycasts the whole world; defer it so first paint isn't blocked.
    setTimeout(() => { try { this.levels = this.discoverBands(); } catch (e) { console.warn('Deteksi lantai gagal', e); this.levels = []; } }, 800);
    const loop = () => {
      this._raf = requestAnimationFrame(loop);
      if (!this.visible) { this.mini.style.opacity = 0; this.mini.style.pointerEvents = 'none'; return; }
      this.mini.style.opacity = 1; this.mini.style.pointerEvents = '';
      const p = this.app.player.pos;
      this.notePosition(p);
      const multi = (this.levels?.length || 0) > 1;
      const li = multi ? this.levelIndex(p.y) : 0;
      const lvl = multi ? this.levels[li] : null;
      this.miniFloor.textContent = multi ? `${this.levelLabel(li)} · ${p.y.toFixed(1)} m` : `${p.y.toFixed(1)} m`;
      this.miniFloor.classList.toggle('multi', multi);
      this.renderInto(this.miniCanvas, lvl);
    };
    loop();
  }

  // ---------- full map ----------
  openFull() {
    const ui = this.ui;
    const lv = this.ensureLevels();
    const multi = lv.length > 1;
    if (this.viewed == null || this.viewed >= lv.length) this.viewed = this.levelIndex(this.app.player.pos.y);
    let sel = this.viewed;

    const canvas = el('canvas', { class: 'map full', width: 720, height: 720, 'aria-label': 'Peta dunia. Pilih lantai lalu klik untuk berpindah.' });
    const floorBar = el('div', { class: 'floorbar', role: 'tablist', 'aria-label': 'Pilih lantai' });
    const hint = el('p', { class: 'muted small' }, multi
      ? 'Pilih lantai di atas untuk melihat denahnya, lalu klik peta untuk teleport ke lantai itu.'
      : 'Dunia ini punya satu level. Klik peta untuk berpindah ke titik itu.');

    const redraw = () => {
      const level = multi ? lv[sel] : null;
      const v = this.renderInto(canvas, level);
      canvas._level = level;
      floorBar.querySelectorAll('.floorbtn').forEach((b) => b.setAttribute('aria-selected', String(+b.dataset.i === sel)));
      void v;
    };

    if (multi) {
      lv.forEach((l, i) => {
        floorBar.append(el('button', { type: 'button', class: 'floorbtn', role: 'tab', 'data-i': i, onclick: () => { sel = i; this.viewed = i; redraw(); } },
          el('strong', {}, this.levelLabel(i)), el('span', {}, `±${Math.round(l.y)} m`)));
      });
      floorBar.append(el('button', { type: 'button', class: 'floorbtn follow', 'data-i': -1, onclick: () => { this.viewed = null; sel = this.levelIndex(this.app.player.pos.y); redraw(); } },
        el('strong', {}, 'Ikuti aku'), el('span', {}, '')));
    }

    canvas.addEventListener('click', (e) => {
      const r = canvas.getBoundingClientRect();
      const v = canvas._view, level = canvas._level;
      const [wx, wz] = v.toWorld(((e.clientX - r.left) / r.width) * 720, ((e.clientY - r.top) / r.height) * 720);
      const w = this.app.world;
      // Cast down from above the selected level so we land on that floor, not a roof.
      const fromY = level ? Math.max(w.bounds.max.y + 2, level.y + 30) : w.bounds.max.y + 2;
      const hit = w.castDown(wx, wz, fromY, fromY - w.floorY + 80);
      if (!hit || !hit.face) { ui.toast('Tidak ada permukaan di titik itu.'); return; }
      const n = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
      if (n.y <= 0.5) { ui.toast('Bukan lantai yang bisa dipijak.'); return; }
      let point = hit.point.clone();
      // If a specific level is selected, make sure we land on it (not a floor above).
      if (level && Math.abs(point.y - level.y) > 3.5) {
        // probe just above the level for a walkable surface there
        const h2 = w.castDown(wx, wz, level.y + 8, 20);
        if (h2 && h2.face) {
          const n2 = h2.face.normal.clone().transformDirection(h2.object.matrixWorld);
          if (n2.y > 0.5) point = h2.point.clone();
        }
      }
      if (['orbit', 'cinematic'].includes(this.app.player.mode)) ui.setMode('first', true);
      this.app.player.place(point);
      this.viewed = null;
      ui.toast('Berpindah ke titik di peta.');
    });

    const legend = el('div', { class: 'legend' }, Object.entries({ furniture: 'Perabot', character: 'Karakter', animal: 'Hewan', plant: 'Tanaman', door: 'Pintu', wall: 'Dinding', stairs: 'Tangga' }).map(([k, v2]) => el('span', {}, el('i', { style: { background: ROLE_COLOR[k] } }), v2)));
    ui.openPanel('Peta dunia', [floorBar, canvas, legend, hint, el('p', { class: 'muted small' }, 'Klik peta untuk berpindah. Panah putih = kamu. Kotak biru redup = area yang sudah dijelajahi. Tombol pintas: M.'),
      (this.app.data.renders || []).length ? el('button', { class: 'btn small', type: 'button', onclick: () => ui.openRenders() }, 'Lihat render Blender') : null], true);
    redraw();
  }
}

