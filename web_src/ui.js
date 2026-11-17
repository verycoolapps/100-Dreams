import * as THREE from 'three';
import { el, fmtTime, fmtNum, store, todaySeed, isTouch } from './util.js';
import { PRESETS, PRESET_ORDER } from './engine/render.js';
import { DIFFICULTY } from './games/engine.js';

const I = {
  explore: 'M12 3l7 4v10l-7 4-7-4V7z M12 3v18 M5 7l7 4 7-4',
  map: 'M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z M9 3v15 M15 6v15',
  object: 'M4 7l8-4 8 4-8 4z M4 7v10l8 4 8-4V7 M12 11v10',
  people: 'M9 11a4 4 0 100-8 4 4 0 000 8z M2 21c0-4 3-7 7-7s7 3 7 7 M17 3.5a4 4 0 010 7.5 M22 21c0-3-1.6-5.4-4-6.5',
  games: 'M6 9h4 M8 7v4 M15 8h.01 M18 11h.01 M7 4h10a5 5 0 015 5v3a5 5 0 01-5 5l-2.5-2h-5L7 17a5 5 0 01-5-5V9a5 5 0 015-5z',
  dice: 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z M8 8h.01 M16 8h.01 M12 12h.01 M8 16h.01 M16 16h.01',
  bagua: 'M12 2l7 3 3 7-3 7-7 3-7-3-3-7 3-7z M12 8a4 4 0 100 8 4 4 0 000-8z',
  gear: 'M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z',
  help: 'M12 22a10 10 0 100-20 10 10 0 000 20z M9.1 9a3 3 0 015.8 1c0 2-3 3-3 3 M12 17h.01',
  full: 'M8 3H5a2 2 0 00-2 2v3 M21 8V5a2 2 0 00-2-2h-3 M3 16v3a2 2 0 002 2h3 M16 21h3a2 2 0 002-2v-3',
  close: 'M18 6L6 18 M6 6l12 12',
  pause: 'M8 5v14 M16 5v14',
};
const icon = (k) => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = I[k].split(' M').map((d, i) => `<path d="${i ? 'M' + d : d}"/>`).join(''); return s; };

export class UI {
  constructor(app) {
    this.app = app;
    this.root = document.getElementById('ui');
    this.bubbles = [];
    this.toasts = el('div', { class: 'toasts', role: 'status', 'aria-live': 'polite' });
    this.root.append(this.toasts);
  }

  // ---------------- loading ----------------
  loader(name) {
    this.load = el('div', { class: 'loader' },
      el('div', { class: 'loader-inner' },
        el('p', { class: 'kicker' }, '100 DREAMS'),
        el('h1', { class: 'world-title' }, name),
        el('div', { class: 'bar', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100 }, this.barFill = el('span')),
        this.loadText = el('p', { class: 'load-text' }, 'Menyiapkan…')));
    this.root.append(this.load);
  }
  progress(v, text) { this.barFill.style.width = `${Math.round(v * 100)}%`; this.load.querySelector('.bar').setAttribute('aria-valuenow', Math.round(v * 100)); if (text) this.loadText.textContent = text; }
  loadError(err, retry) {
    this.load.querySelector('.loader-inner').append(el('div', { class: 'load-error' },
      el('p', {}, `Dunia gagal dimuat: ${err.message || err}`),
      el('p', { class: 'muted' }, location.protocol === 'file:' && this.app.data.glbUrl ? 'Paket multi-file perlu dibuka lewat server lokal. Jalankan “Start World” di folder hasil, atau tombol OPEN HTML WORLD di Blender.' : 'Coba muat ulang. Jika terus gagal, pilih mode Performance.'),
      el('div', { class: 'row' }, el('button', { class: 'btn-primary', type: 'button', onclick: () => location.reload() }, 'Muat ulang'),
        el('button', { class: 'btn', type: 'button', onclick: () => { store.set('preset', 'performance'); location.reload(); } }, 'Muat ulang dalam mode Performance'))));
    void retry;
  }

  entry(data, onEnter) {
    const d = data, s = d.stats || {};
    const chars = (d.objects || []).filter((o) => o.role === 'character').length, animals = (d.objects || []).filter((o) => o.role === 'animal').length;
    const inner = this.load.querySelector('.loader-inner');
    inner.querySelector('.bar').remove(); this.loadText.remove();
    inner.append(
      el('p', { class: 'entry-meta' }, `${s.objects ?? d.objects.length} objek, ${chars} karakter, ${animals} hewan, 100 game`),
      el('div', { class: 'row entry-actions' },
        el('button', { class: 'btn-primary big', type: 'button', onclick: () => onEnter('first') }, 'Masuk ke dunia'),
        el('button', { class: 'btn', type: 'button', onclick: () => onEnter('orbit') }, 'Lihat dari luar')),
      el('p', { class: 'muted small' }, `Grafis: ${PRESETS[this.app.renderer.presetName].label}${this.app.renderer.auto ? ' (otomatis menyesuaikan perangkat)' : ''}`));
    inner.querySelector('.btn-primary').focus();
  }
  hideLoader() { this.load.classList.add('gone'); setTimeout(() => this.load.remove(), 900); }

  // ---------------- shell ----------------
  build() {
    const app = this.app;
    this.crosshair = el('div', { class: 'crosshair', 'aria-hidden': 'true' });
    this.prompt = el('div', { class: 'prompt', 'aria-live': 'polite' });
    this.info = el('aside', { class: 'info', 'aria-live': 'polite' });
    this.panel = el('section', { class: 'panel', role: 'dialog', 'aria-modal': 'false', 'aria-labelledby': 'panel-title' });
    this.hudEl = el('div', { class: 'hud' });
    this.gameLayer = el('div', { class: 'game-layer' });
    this.modal = el('div', { class: 'modal-wrap' });
    this.frame = el('div', { class: 'photo-frame', 'aria-hidden': 'true' }, el('span'), el('span'), el('span'), el('span'));
    this.flashEl = el('div', { class: 'flash', 'aria-hidden': 'true' });
    const modes = [['first', 'Orang pertama'], ['third', 'Orang ketiga'], ['free', 'Kamera bebas'], ['orbit', 'Orbit'], ['cinematic', 'Sinematik']];
    this.modeSel = el('div', { class: 'modes', role: 'radiogroup', 'aria-label': 'Mode kamera' }, modes.map(([k, l]) => el('button', { type: 'button', role: 'radio', 'data-mode': k, onclick: () => this.setMode(k) }, l)));
    this.title = el('header', { class: 'topbar' }, el('h2', { class: 'brand' }, app.data.name), this.modeSel);
    const dockBtn = (k, label, fn, cls = '') => el('button', { type: 'button', class: 'dock-btn ' + cls, onclick: fn, 'aria-label': label }, icon(k), el('span', {}, label));
    this.dock = el('nav', { class: 'dock', 'aria-label': 'Navigasi utama' },
      dockBtn('map', 'Peta', () => this.openMap()),
      dockBtn('object', 'Objek', () => this.openObjects()),
      dockBtn('people', 'Penghuni', () => this.openPeople()),
      dockBtn('games', 'Game', () => this.openLibrary()),
      dockBtn('dice', 'Kejutkan aku', () => this.openRandomizer(), 'accent'),
      dockBtn('bagua', 'Feng Shui', () => this.openFengShui()),
      dockBtn('gear', 'Pengaturan', () => this.openSettings()),
      dockBtn('help', 'Bantuan', () => this.openHelp()),
      dockBtn('full', 'Layar penuh', () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.())));
    this.root.append(this.title, this.crosshair, this.prompt, this.info, this.frame, this.flashEl, this.hudEl, this.gameLayer, this.dock, this.panel, this.modal);
    if (isTouch()) { this.touch = app.input.buildTouch(this.root); this.root.classList.add('is-touch'); }
    addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.panel.classList.contains('open') && !app.games.active) this.closePanel();
      if (e.code === 'KeyM' && !e.target.closest('input')) this.openMap();
      if (e.code === 'KeyG' && !e.target.closest('input')) this.openLibrary();
    });
    this.setMode(app.player.mode, true);
  }

  setMode(m, silent) {
    this.app.player.setMode(m);
    this.modeSel.querySelectorAll('button').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.mode === m)));
    this.root.dataset.mode = m;
    if (!silent) this.toast({ first: 'Klik dunia untuk mengunci mouse. Esc untuk melepas.', third: 'Kamera di belakang avatarmu.', free: 'Terbang bebas: Spasi naik, Q turun, tembus dinding.', orbit: 'Seret untuk memutar, gulir untuk zoom.', cinematic: 'Kamera melintas otomatis dengan kedalaman bidang.' }[m]);
  }

  toast(text) {
    if (!text) return;
    const t = el('div', { class: 'toast' }, text); this.toasts.append(t);
    setTimeout(() => t.classList.add('out'), 2600); setTimeout(() => t.remove(), 3200);
    while (this.toasts.children.length > 3) this.toasts.firstChild.remove();
  }

  setPrompt(t) { this.prompt.textContent = t || ''; this.prompt.classList.toggle('show', !!t); }

  // ---------------- object info ----------------
  infoFor(meta, node) {
    if (!meta) { this.info.classList.remove('open'); this.info.replaceChildren(); return; }
    const d = meta.dims || [0, 0, 0];
    const rows = [
      ['Kategori', meta.roleLabel || meta.role], ['Dimensi', `${fmtNum(d[0])} × ${fmtNum(d[1])} × ${fmtNum(d[2])} m`],
      meta.materials?.length && ['Material', meta.materials.join(', ')], meta.colors?.length && ['Warna', el('span', { class: 'chips' }, meta.colors.map((c) => el('i', { class: 'swatch', style: { background: c }, title: c })))],
      meta.collection && ['Koleksi', meta.collection], meta.parent && ['Induk', meta.parent],
      meta.scientific && ['Nama ilmiah', meta.scientific], meta.habitat && ['Habitat', meta.habitat], meta.diet && ['Makanan', meta.diet],
      meta.related?.length && ['Di dekatnya', meta.related.join(', ')],
    ].filter(Boolean);
    const desc = meta.description ? el('p', {}, meta.description) : meta.descriptionDraft ? el('p', { class: 'draft' }, el('span', { class: 'tag' }, 'Draf otomatis, belum diverifikasi'), ' ', meta.descriptionDraft) : null;
    this.info.replaceChildren(
      el('button', { class: 'x', type: 'button', 'aria-label': 'Tutup info', onclick: () => this.infoFor(null) }, icon('close')),
      el('h3', {}, meta.label || meta.name), desc,
      el('dl', {}, rows.flatMap(([k, v]) => [el('dt', {}, k), el('dd', {}, v)])),
      meta.roleSource === 'auto' ? el('p', { class: 'muted small' }, 'Kategori dikenali otomatis. Koreksi lewat panel Object Override di Blender.') : null,
      node ? el('button', { class: 'btn small', type: 'button', onclick: () => this.app.inspect(node) }, 'Periksa dari dekat') : null);
    this.info.classList.add('open');
  }

  bubble(actor, text) {
    if (!actor || !text) return;
    const b = el('div', { class: 'bubble' }, el('strong', {}, actor.name), el('span', {}, text));
    this.root.append(b);
    const item = { actor, el: b, until: performance.now() + 4500 };
    this.bubbles.push(item);
  }
  dialogue(actor) {
    const lines = actor.talk(); let i = 0;
    const box = el('div', { class: 'dialogue', role: 'dialog', 'aria-label': `Percakapan dengan ${actor.name}` });
    const render = () => { box.replaceChildren(el('strong', {}, actor.name), el('p', {}, lines[i]), el('button', { class: 'btn small', type: 'button', onclick: () => { i++; if (i >= lines.length) { box.remove(); this.dialogBox = null; } else render(); } }, i < lines.length - 1 ? 'Lanjut' : 'Selesai')); box.querySelector('button').focus(); };
    this.dialogBox?.remove(); this.dialogBox = box; this.root.append(box); render();
    if (actor.kind === 'animal') this.infoFor(actor.meta);
  }

  syncLayers() {
    this.root.classList.toggle('modal-open', this.modal.childElementCount > 0);
    this.root.classList.toggle('overlay-open', this.gameLayer.childElementCount > 0);
  }

  updateBubbles() {
    this.syncLayers();
    const now = performance.now(), cam = this.app.camera;
    this.bubbles = this.bubbles.filter((b) => {
      if (now > b.until) { b.el.remove(); return false; }
      const p = b.actor.worldPosition().add(new THREE.Vector3(0, 2.1, 0)).project(cam);
      const vis = p.z < 1 && Math.abs(p.x) < 1.1 && Math.abs(p.y) < 1.1;
      b.el.style.opacity = vis ? 1 : 0;
      b.el.style.transform = `translate(${(p.x * 0.5 + 0.5) * innerWidth}px, ${(-p.y * 0.5 + 0.5) * innerHeight}px) translate(-50%, -100%)`;
      return true;
    });
  }

  // ---------------- panel host ----------------
  openPanel(title, body, wide = false) {
    this.app.releasePointer();
    this.panel.replaceChildren(el('div', { class: 'panel-head' }, el('h2', { id: 'panel-title' }, title), el('button', { class: 'x', type: 'button', 'aria-label': 'Tutup panel', onclick: () => this.closePanel() }, icon('close'))), el('div', { class: 'panel-body' }, body));
    this.panel.classList.toggle('wide', wide); this.panel.classList.add('open'); this.root.classList.add('panel-open');
    this.panel.querySelector('.x').focus();
  }
  closePanel() { this.panel.classList.remove('open'); this.root.classList.remove('panel-open'); this.mapLoop = false; }

  // ---------------- map ----------------
  openMap() {
    const w = this.app.world, d = this.app.data;
    const canvas = el('canvas', { class: 'map', width: 720, height: 720, 'aria-label': 'Peta dunia dari atas. Klik untuk berpindah.' });
    const pad = Math.max(w.size.x, w.size.z) * 0.08 + 2;
    const minX = w.bounds.min.x - pad, minZ = w.bounds.min.z - pad, span = Math.max(w.size.x, w.size.z) + pad * 2;
    const toPx = (x, z) => [((x - minX) / span) * 720, ((z - minZ) / span) * 720];
    const colors = { wall: '#b9b2d6', floor: '#4a456e', building: '#c9c1ea', furniture: '#f2c46d', character: '#ff8fb1', animal: '#7fe0c4', plant: '#8fd48a', door: '#ffffff', water: '#6fa8ff', vehicle: '#ffb37a' };
    const draw = () => {
      if (!this.mapLoop) return;
      const g = canvas.getContext('2d'); g.fillStyle = '#15183a'; g.fillRect(0, 0, 720, 720);
      const objs = (d.objects || []).slice().sort((a, b) => (a.center[1] - a.dims[1] / 2) - (b.center[1] - b.dims[1] / 2));
      for (const o of objs) {
        if (['light', 'camera'].includes(o.role)) continue;
        const [x, y] = toPx(o.center[0] - o.dims[0] / 2, o.center[2] - o.dims[2] / 2);
        const sw = (o.dims[0] / span) * 720, sh = (o.dims[2] / span) * 720;
        g.fillStyle = colors[o.role] || '#8a86b0'; g.globalAlpha = o.role === 'floor' || o.role === 'terrain' ? 0.35 : 0.8;
        g.fillRect(x, y, Math.max(2, sw), Math.max(2, sh));
      }
      g.globalAlpha = 1;
      for (const a of this.app.actors.of('any')) { const p = a.worldPosition(); const [x, y] = toPx(p.x, p.z); g.fillStyle = a.kind === 'animal' ? '#7fe0c4' : '#ff8fb1'; g.beginPath(); g.arc(x, y, 6, 0, 7); g.fill(); }
      const p = this.app.player.pos; const [px, py] = toPx(p.x, p.z);
      g.save(); g.translate(px, py); g.rotate(-this.app.player.yaw); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(0, -13); g.lineTo(8, 9); g.lineTo(0, 4); g.lineTo(-8, 9); g.fill(); g.restore();
      requestAnimationFrame(draw);
    };
    canvas.addEventListener('click', (e) => {
      const r = canvas.getBoundingClientRect(); const x = minX + ((e.clientX - r.left) / r.width) * span, z = minZ + ((e.clientY - r.top) / r.height) * span;
      const hit = w.castDown(x, z, w.bounds.max.y + 2, 1e4);
      if (hit) { if (['orbit', 'cinematic'].includes(this.app.player.mode)) this.setMode('first', true); this.app.player.place(hit.point); this.toast('Berpindah ke titik di peta.'); }
    });
    const legend = el('div', { class: 'legend' }, Object.entries({ furniture: 'Perabot', character: 'Karakter', animal: 'Hewan', plant: 'Tanaman', door: 'Pintu', wall: 'Dinding' }).map(([k, v]) => el('span', {}, el('i', { style: { background: colors[k] } }), v)));
    this.openPanel('Peta dunia', [canvas, legend, el('p', { class: 'muted small' }, 'Klik peta untuk berpindah ke titik itu. Tombol pintas: M.')]);
    this.mapLoop = true; draw();
  }

  // ---------------- directories ----------------
  openObjects() {
    const d = this.app.data;
    const list = el('ul', { class: 'list' });
    const render = (q = '') => {
      const items = (d.objects || []).filter((o) => !['light', 'camera'].includes(o.role) && (o.label || o.name).toLowerCase().includes(q.toLowerCase())).slice(0, 300);
      list.replaceChildren(...items.map((o) => el('li', {}, el('button', { type: 'button', onclick: () => { const n = this.app.world.nodeFor(o); this.infoFor(o, n); if (n) this.app.inspect(n); } }, el('span', { class: 'li-title' }, o.label || o.name), el('span', { class: 'li-sub' }, `${o.roleLabel || o.role} · ${fmtNum(o.dims[1], 1)} m`)))));
    };
    render();
    this.openPanel('Objek di dunia ini', [el('input', { type: 'search', class: 'search', placeholder: 'Cari objek', 'aria-label': 'Cari objek', oninput: (e) => render(e.target.value) }), list]);
  }

  openPeople() {
    const actors = this.app.actors.list;
    const sec = (kind, title) => {
      const a = actors.filter((x) => x.kind === kind);
      return [el('h3', {}, title), a.length ? el('ul', { class: 'list' }, a.map((x) => el('li', {}, el('button', { type: 'button', onclick: () => { this.app.goTo(x.worldPosition()); this.infoFor(x.meta); this.closePanel(); } }, el('span', { class: 'li-title' }, x.name), el('span', { class: 'li-sub' }, x.meta.description || x.meta.descriptionDraft || (kind === 'animal' ? 'Hewan' : 'Karakter')))))) : el('p', { class: 'muted' }, `Project ini belum punya ${kind === 'animal' ? 'hewan' : 'karakter'}. Game yang membutuhkannya memakai aktor prosedural berlabel.`)];
    };
    this.openPanel('Penghuni dunia', [...sec('character', 'Karakter'), ...sec('animal', 'Hewan')]);
  }

  // ---------------- games ----------------
  openLibrary(cat = 'all') {
    const g = this.app.games, cats = g.catalog.categories;
    const grid = el('div', { class: 'lib' });
    let q = '';
    const render = () => {
      const items = g.catalog.games.filter((x) => (cat === 'all' || x.cat === cat) && x.title.toLowerCase().includes(q.toLowerCase()));
      grid.replaceChildren(...items.map((x) => el('button', { type: 'button', class: 'game-card', 'data-cat': x.cat, onclick: () => this.gameDetail(x) },
        el('span', { class: 'gnum' }, String(x.no)), el('span', { class: 'gtitle' }, x.title), el('span', { class: 'gpitch' }, x.pitch),
        g.stats.best[x.id] ? el('span', { class: 'gbest' }, `Rekor ${g.stats.best[x.id]}`) : null)));
    };
    const chips = el('div', { class: 'chips-row', role: 'tablist' }, [['all', 'Semua']].concat(Object.entries(cats)).map(([k, v]) => el('button', { type: 'button', role: 'tab', class: 'chip', 'aria-selected': String(k === cat), onclick: (e) => { cat = k; chips.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-selected', 'false')); e.currentTarget.setAttribute('aria-selected', 'true'); render(); } }, v)));
    render();
    this.openPanel('100 game', [el('input', { type: 'search', class: 'search', placeholder: 'Cari game', 'aria-label': 'Cari game', oninput: (e) => { q = e.target.value; render(); } }), chips, grid, el('p', { class: 'muted small' }, `${g.stats.wins} kemenangan dari ${g.stats.plays} permainan. Tombol pintas: G.`)], true);
  }

  gameDetail(def) {
    const g = this.app.games;
    const st = g.buildStages(def, () => 0.5);
    const first = st[0];
    const stageList = def.mech === 'gauntlet' && def.p.stages ? el('p', {}, 'Babak: ' + def.p.stages.map((id) => g.byId.get(id).title).join(', ')) : def.mech === 'gauntlet' ? el('p', {}, `Babak dipilih acak (${def.p.random})${def.p.daily ? ' dengan seed hari ini' : ''}.`) : null;
    let diff = 'normal';
    const diffSel = el('div', { class: 'seg', role: 'radiogroup', 'aria-label': 'Tingkat kesulitan' }, Object.entries({ easy: 'Mudah', normal: 'Normal', hard: 'Sulit' }).map(([k, v]) => el('button', { type: 'button', role: 'radio', 'aria-checked': String(k === diff), onclick: (e) => { diff = k; diffSel.querySelectorAll('button').forEach((b) => b.setAttribute('aria-checked', 'false')); e.currentTarget.setAttribute('aria-checked', 'true'); } }, v)));
    this.openPanel(`${def.no}. ${def.title}`, [
      el('p', { class: 'lead' }, def.pitch),
      def.mech === 'hotseat' ? el('p', {}, 'Mode lokal: dua pemain bergantian di perangkat yang sama. Tidak ada multiplayer online.') : null,
      stageList,
      def.mech !== 'gauntlet' ? [el('h3', {}, 'Tujuan'), el('p', {}, g.objectiveFor(first.mech, first.p)), el('h3', {}, 'Aturan'), el('ul', { class: 'bul' }, g.rulesFor(first.mech, first.p).map((r) => el('li', {}, r))), el('h3', {}, 'Kontrol'), el('p', {}, g.controlsFor(first.mech))] : null,
      el('h3', {}, 'Kesulitan'), diffSel,
      el('div', { class: 'row' }, el('button', { class: 'btn-primary', type: 'button', onclick: () => { this.closePanel(); g.start(def.id, { difficulty: DIFFICULTY[diff] }); } }, 'Main'), el('button', { class: 'btn', type: 'button', onclick: () => this.openLibrary(def.cat) }, 'Kembali ke daftar')),
    ]);
  }

  openRandomizer() {
    const g = this.app.games, rz = this.app.randomizer;
    let cat = 'all';
    const catSel = el('select', { 'aria-label': 'Kategori', onchange: (e) => { cat = e.target.value; } }, el('option', { value: 'all' }, 'Semua kategori'), Object.entries(g.catalog.categories).map(([k, v]) => el('option', { value: k }, v)));
    const seedIn = el('input', { type: 'number', inputmode: 'numeric', placeholder: 'Seed (opsional)', 'aria-label': 'Seed tantangan' });
    const hist = rz.history().slice(0, 8);
    this.openPanel('Dream Randomizer', [
      el('p', { class: 'lead' }, 'Tekan sekali, tantangan langsung dimulai. Kesulitan naik setiap tiga kemenangan beruntun dari Randomizer.'),
      el('button', { class: 'btn-primary big surprise', type: 'button', onclick: () => { this.closePanel(); rz.surprise({ category: cat, seed: seedIn.value ? +seedIn.value : undefined }); } }, 'Kejutkan aku'),
      el('div', { class: 'row' }, catSel, seedIn),
      el('p', { class: 'muted small' }, `Tingkat saat ini: ${rz.levelLabel()}. Seed yang sama menghasilkan tantangan yang sama.`),
      el('div', { class: 'row' }, el('button', { class: 'btn', type: 'button', onclick: () => { this.closePanel(); g.start('daily-challenge', { seed: todaySeed(), source: 'randomizer' }); } }, 'Tantangan harian'), el('button', { class: 'btn', type: 'button', onclick: () => { this.closePanel(); rz.infinite(); } }, 'Tantangan tanpa akhir')),
      el('h3', {}, 'Riwayat'), hist.length ? el('ul', { class: 'list' }, hist.map((h) => el('li', {}, el('button', { type: 'button', onclick: () => { this.closePanel(); g.start(h.id, { seed: h.seed, source: 'randomizer' }); } }, el('span', { class: 'li-title' }, h.title), el('span', { class: 'li-sub' }, `${h.status === 'won' ? 'Menang' : 'Kalah'} · ${h.score} poin · seed ${h.seed} · main ulang`))))) : el('p', { class: 'muted' }, 'Belum ada riwayat.'),
      el('h3', {}, 'Pencapaian'), el('p', {}, g.stats.achievements.length ? `${g.stats.achievements.length} terbuka` : 'Belum ada. Menangkan game pertamamu.'),
    ]);
  }

  gameStarted(s) { this.app.releasePointer(); this.closePanel(); this.root.classList.add('in-game'); this.hudEl.classList.remove('on'); this.hudEl.replaceChildren(); this.hudBuilt = false; void s; }
  gameEnded() { this.root.classList.remove('in-game'); this.hudEl.classList.remove('on'); this.hudEl.replaceChildren(); this.modal.replaceChildren(); this.clearGameOverlay(); this.showFrame(false); }

  stageIntro(s, info, go) {
    this.modal.replaceChildren(el('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'm-title' },
      info.stageInfo ? el('p', { class: 'kicker' }, info.stageInfo) : null,
      el('h2', { id: 'm-title' }, info.title), el('p', { class: 'lead' }, info.objective),
      el('h3', {}, 'Aturan'), el('ul', { class: 'bul' }, info.rules.map((r) => el('li', {}, r))),
      el('h3', {}, 'Kontrol'), el('p', {}, info.controls),
      el('p', { class: 'muted small' }, `Seed ${s.seed}`),
      el('div', { class: 'row' }, el('button', { class: 'btn-primary', type: 'button', onclick: () => { this.modal.replaceChildren(); go(); this.app.lockPointer(); } }, 'Mulai'), el('button', { class: 'btn', type: 'button', onclick: () => this.app.games.stop() }, 'Batal'))));
    this.modal.querySelector('.btn-primary').focus();
  }

  hud(s) {
    const st = s.stage, ctx = st.ctx;
    if (!this.hudBuilt) {
      this.h = { title: el('strong'), time: el('span', { class: 'h-time' }), score: el('span', { class: 'h-score' }), prog: el('p', { class: 'h-prog' }), meter: el('div', { class: 'meter' }, el('span')), meterL: el('span', { class: 'meter-l' }), hint: el('p', { class: 'h-hint' }) };
      this.hudEl.replaceChildren(el('div', { class: 'hud-top' }, this.h.title, this.h.time, this.h.score, el('button', { class: 'x', type: 'button', 'aria-label': 'Jeda', onclick: () => this.app.games.togglePause() }, icon('pause'))), this.h.prog, el('div', { class: 'meter-row' }, this.h.meter, this.h.meterL), this.h.hint);
      this.hudBuilt = true;
      this.hudEl.classList.add('on');
    }
    this.h.title.textContent = s.stages.length > 1 ? `${s.def.title} · ${s.idx + 1}/${s.stages.length}` : s.def.title;
    this.h.time.textContent = fmtTime(st.time); this.h.time.classList.toggle('low', st.time < 15);
    this.h.score.textContent = `${s.total + st.score} poin`;
    this.h.prog.textContent = ctx.progress;
    const mv = ctx.meterValue; this.h.meter.parentElement.style.display = mv == null ? 'none' : '';
    if (mv != null) { this.h.meter.firstChild.style.width = `${Math.round(Math.max(0, Math.min(1, mv)) * 100)}%`; this.h.meterL.textContent = ctx.meterLabel; }
    this.h.hint.textContent = ctx.hint;
  }

  paused(on) {
    if (!on) { this.modal.replaceChildren(); this.app.lockPointer(); return; }
    this.app.releasePointer();
    this.modal.replaceChildren(el('div', { class: 'modal small', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Jeda' }, el('h2', {}, 'Dijeda'),
      el('div', { class: 'col' }, el('button', { class: 'btn-primary', type: 'button', onclick: () => this.app.games.resume() }, 'Lanjutkan'), el('button', { class: 'btn', type: 'button', onclick: () => this.app.games.restart() }, 'Ulangi dari awal'), el('button', { class: 'btn', type: 'button', onclick: () => this.app.games.stop() }, 'Keluar dari game'))));
    this.modal.querySelector('.btn-primary').focus();
  }

  interstitial(s, won, reason, next) {
    this.app.releasePointer();
    const hs = s.def.mech === 'hotseat';
    this.modal.replaceChildren(el('div', { class: 'modal small', role: 'dialog', 'aria-modal': 'true' },
      el('h2', {}, hs ? `Pemain ${s.idx} selesai` : 'Babak selesai'),
      el('p', {}, hs ? `${won ? 'Berhasil' : 'Gagal: ' + reason}. Skor ${s.playerScores[s.playerScores.length - 1].score}.` : `Total sementara ${s.total} poin.`),
      el('p', {}, hs ? `Serahkan perangkat ke pemain ${s.idx + 1}.` : `Berikutnya: ${s.stages[s.idx].title}`),
      el('button', { class: 'btn-primary', type: 'button', onclick: () => { this.modal.replaceChildren(); next(); } }, 'Lanjut')));
    this.modal.querySelector('button').focus();
  }

  complete(s) {
    this.app.releasePointer();
    const g = this.app.games; const won = s.status === 'won';
    const hs = s.def.mech === 'hotseat';
    let headline = won ? 'Kamu berhasil' : 'Belum berhasil';
    let sub = won ? `${s.total} poin dalam ${fmtTime(s.duration)}` : (s.reason || 'Coba lagi');
    if (hs) { const best = s.playerScores.reduce((a, b) => (b.score > a.score ? b : a)); const tie = s.playerScores.filter((x) => x.score === best.score).length > 1; headline = tie ? 'Seri' : `Pemain ${best.player} menang`; sub = s.playerScores.map((x) => `Pemain ${x.player}: ${x.score}`).join(' · '); }
    this.modal.replaceChildren(el('div', { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-labelledby': 'c-title' },
      el('p', { class: 'kicker' }, s.def.title), el('h2', { id: 'c-title', class: won ? 'win' : 'lose' }, headline), el('p', { class: 'lead' }, sub),
      s.newBest ? el('p', { class: 'badge' }, 'Rekor baru') : el('p', { class: 'muted' }, `Rekor: ${g.stats.best[s.def.id] || 0}`),
      s.unlocked?.length ? el('ul', { class: 'bul' }, s.unlocked.map((a) => el('li', {}, 'Pencapaian: ' + a))) : null,
      s.photos?.length ? el('div', { class: 'gallery' }, s.photos.map((p) => el('figure', {}, el('img', { src: p.src, alt: `Foto ${p.name}` }), el('figcaption', {}, `${p.name} · ${p.score}`)))) : null,
      el('p', { class: 'muted small' }, `Seed ${s.seed}`),
      el('div', { class: 'row' }, el('button', { class: 'btn-primary', type: 'button', onclick: () => g.restart() }, 'Main lagi'), el('button', { class: 'btn', type: 'button', onclick: () => { g.stop(); this.openLibrary(s.def.cat); } }, 'Game lain'), el('button', { class: 'btn', type: 'button', onclick: () => g.stop() }, 'Kembali ke dunia'))));
    if (s.source === 'randomizer') this.app.randomizer.recordResult(s);
    this.modal.querySelector('.btn-primary').focus();
  }

  gameOverlay(cls) { const o = el('div', { class: 'g-overlay ' + cls }); this.gameLayer.append(o); this.app.releasePointer(); return o; }
  clearGameOverlay() { this.gameLayer.replaceChildren(); this.shutterBtn?.remove(); this.shutterBtn = null; }
  showFrame(on) { this.frame.classList.toggle('show', on); }
  shutter(fn) { this.shutterBtn?.remove(); this.shutterBtn = el('button', { class: 'shutter', type: 'button', 'aria-label': 'Foto', onclick: fn }, 'Foto'); this.root.append(this.shutterBtn); }
  flash() { this.flashEl.classList.remove('go'); void this.flashEl.offsetWidth; this.flashEl.classList.add('go'); }
  fengshuiResult(r) { this.toast(`Skor tata letak ${r.score}/100`); this.gameLayer.querySelector('.fs-res')?.remove(); if (r.notes.length) this.gameLayer.append(el('div', { class: 'g-overlay fs-res' }, el('p', { class: 'g-q' }, `Skor ${r.score}/100`), el('ul', { class: 'bul' }, r.notes.slice(0, 5).map((n) => el('li', {}, n))), el('button', { class: 'btn small', type: 'button', onclick: (e) => { e.currentTarget.parentElement.remove(); this.app.lockPointer(); } }, 'Tutup'))); }

  // ---------------- feng shui ----------------
  openFengShui() {
    const fs = this.app.data.fengshui || {};
    const ov = this.app.world.bagua;
    const els = fs.elements || {};
    const order = [['Kayu', '#7fbf6a'], ['Api', '#ff7a5c'], ['Tanah', '#d9b36a'], ['Logam', '#cfd6e6'], ['Air', '#5c8dff']];
    const pr = { P1: 'Prioritas tinggi', P2: 'Penting', P3: 'Disarankan', P4: 'Penyempurnaan' };
    this.openPanel('Feng Shui', [
      el('p', { class: 'lead' }, fs.summary || 'Analisis belum tersedia.'),
      el('p', { class: 'muted small' }, 'Feng Shui disajikan sebagai kerangka tradisional dan bahan pertimbangan desain, bukan klaim ilmiah atau jaminan hasil. Temuan bertanda “Objektif” adalah faktor lingkungan yang dapat diukur.'),
      ov ? el('button', { class: 'btn', type: 'button', onclick: (e) => { this.app.world.setBaguaVisible(!ov.visible); if (ov.visible) { this.setMode('orbit', true); this.app.player.orbit.target.copy(this.app.world.focus || this.app.world.center); } e.currentTarget.textContent = ov.visible ? 'Sembunyikan peta bagua' : 'Tampilkan peta bagua di lantai'; } }, ov.visible ? 'Sembunyikan peta bagua' : 'Tampilkan peta bagua di lantai') : null,
      el('h3', {}, 'Metode'), el('p', {}, fs.method || '—'),
      el('h3', {}, 'Lima unsur dari material'),
      el('div', { class: 'elements' }, order.map(([k, c]) => el('div', { class: 'el-row' }, el('span', {}, k), el('div', { class: 'el-bar' }, el('i', { style: { width: `${Math.round((els[k] || 0) * 100)}%`, background: c } })), el('span', { class: 'num' }, `${Math.round((els[k] || 0) * 100)}%`)))),
      fs.yinyang ? [el('h3', {}, 'Yin dan Yang'), el('p', {}, `${fs.yinyang.verdict}. ${fs.yinyang.detail}`)] : null,
      el('h3', {}, 'Temuan dan saran'),
      el('ol', { class: 'findings' }, (fs.findings || []).map((f) => el('li', { 'data-p': f.priority }, el('span', { class: 'fp' }, `${f.priority} · ${pr[f.priority] || ''} · ${f.type === 'objective' ? 'Objektif' : 'Tradisi'}`), el('strong', {}, f.title), el('p', {}, f.text)))),
      el('p', { class: 'muted small' }, '100 DREAMS tidak mengubah scene Blender kamu. Semua saran bersifat opsional.'),
    ]);
  }

  // ---------------- settings, diagnostics, help ----------------
  openSettings() {
    const r = this.app.renderer, a = this.app.audio, caps = r.caps;
    const presetBtns = el('div', { class: 'seg wrap', role: 'radiogroup', 'aria-label': 'Preset grafis' }, PRESET_ORDER.map((k) => el('button', { type: 'button', role: 'radio', 'aria-checked': String(r.presetName === k), onclick: (e) => { r.apply(k, { manual: true }); store.set('preset', k); presetBtns.querySelectorAll('button').forEach((b) => b.setAttribute('aria-checked', 'false')); e.currentTarget.setAttribute('aria-checked', 'true'); autoBox.checked = false; } }, PRESETS[k].label)));
    const autoBox = el('input', { type: 'checkbox', checked: r.auto, onchange: (e) => { r.auto = e.target.checked; } });
    const slider = (k, l) => el('label', { class: 'sl' }, el('span', {}, l), el('input', { type: 'range', min: 0, max: 1, step: 0.05, value: a.vol[k], oninput: (e) => { a.start(); a.set(k, +e.target.value); } }));
    const diagOut = el('div', { class: 'diag' });
    this.openPanel('Pengaturan', [
      el('h3', {}, 'Grafis'), presetBtns,
      el('label', { class: 'check' }, autoBox, el('span', {}, 'Turunkan kualitas otomatis bila frame rate di bawah 26 FPS')),
      el('dl', { class: 'caps' }, [['GPU', caps.gpu], ['WebGL2', caps.webgl2 ? 'Ya' : 'Tidak'], ['WebGPU', caps.webgpu ? 'Terdeteksi (rendering tetap WebGL2 demi stabilitas)' : 'Tidak tersedia'], ['Tekstur maks', caps.maxTexture ? `${caps.maxTexture} px` : '—'], ['Layar', `${caps.screen} @${caps.dpr}x`], ['Memori', caps.memory ? `${caps.memory} GB` : 'Tidak terbaca']].flatMap(([k, v]) => [el('dt', {}, k), el('dd', {}, v)])),
      el('h3', {}, 'Audio'), slider('master', 'Volume utama'), slider('ambient', 'Musik suasana'), slider('sfx', 'Efek suara'),
      el('h3', {}, 'Diagnostik'), el('p', { class: 'muted small' }, 'Menjalankan pengujian otomatis pada ke-100 game: mulai, jeda, jalur menang, jalur kalah, ulang, dan pembersihan memori.'),
      el('button', { class: 'btn', type: 'button', onclick: () => this.runDiagnostics(diagOut) }, 'Jalankan uji 100 game'), diagOut,
    ]);
  }

  runDiagnostics(out) {
    out.replaceChildren(el('p', {}, 'Menguji…'));
    const pos = this.app.player.pos.clone(), mode = this.app.player.mode;
    setTimeout(() => {
      const t0 = performance.now();
      const res = this.app.games.selftestAll();
      const ok = res.filter((x) => x.ok).length;
      this.app.player.setMode(mode); this.app.player.place(pos);
      out.replaceChildren(el('p', { class: ok === 100 ? 'win' : 'lose' }, `${ok}/100 game lulus semua pemeriksaan (${fmtNum((performance.now() - t0) / 1000, 1)} detik).`),
        el('ul', { class: 'diag-list' }, res.filter((x) => !x.ok).map((x) => el('li', {}, `${x.id}: ${x.error}`))));
    }, 50);
  }

  openHelp() {
    this.openPanel('Bantuan dan kontrol', [
      el('dl', { class: 'keys' }, [['W A S D', 'Bergerak'], ['Mouse / geser layar', 'Melihat sekeliling (klik dunia untuk mengunci mouse)'], ['Shift', 'Lari'], ['Spasi', 'Lompat (naik di kamera bebas)'], ['E', 'Interaksi: pintu, bicara, periksa objek'], ['Klik', 'Pilih objek dan lihat informasinya'], ['M', 'Peta'], ['G', 'Perpustakaan game'], ['Esc', 'Lepas mouse atau jeda game']].flatMap(([k, v]) => [el('dt', {}, el('kbd', {}, k)), el('dd', {}, v)])),
      el('p', {}, 'Di ponsel: joystick kiri untuk bergerak, geser sisi kanan untuk melihat, tombol Lompat, Aksi, dan Lari di kanan bawah.'),
      el('h3', {}, 'Tentang dunia ini'),
      el('p', {}, `Dibangun otomatis oleh 100 DREAMS dari scene “${this.app.data.scene}” (Blender ${this.app.data.blender}) pada ${new Date(this.app.data.exportedAt).toLocaleString('id-ID')}.`),
      this.app.data.fidelity?.length ? [el('h3', {}, 'Catatan kesetiaan visual'), el('ul', { class: 'bul' }, this.app.data.fidelity.slice(0, 12).map((f) => el('li', {}, f)))] : null,
    ]);
  }
}
