import { fmtNum } from '../util.js';

// Every question is derived from world.json (the analysed Blender scene). Nothing is invented.
const nm = (m) => m.label || m.name;

function choices(rng, correct, wrongs) {
  const opts = [correct, ...rng.shuffle([...new Set(wrongs.filter((w) => w !== correct))]).slice(0, 3)];
  if (opts.length < 2) return null;
  const sh = rng.shuffle(opts);
  return { options: sh, answer: sh.indexOf(correct) };
}
function numChoices(rng, n, unit = '') {
  const set = new Set([n]);
  const deltas = n < 6 ? [1, 2, 3, -1, -2, 4] : [Math.ceil(n * 0.25), Math.ceil(n * 0.5), -Math.ceil(n * 0.3), Math.ceil(n * 0.8)];
  for (const d of rng.shuffle(deltas)) { if (set.size >= 4) break; if (n + d >= 0) set.add(n + d); }
  let k = n + 5; while (set.size < 4) set.add(k++);
  const opts = rng.shuffle([...set]).map((v) => `${v}${unit}`);
  return { options: opts, answer: opts.indexOf(`${n}${unit}`) };
}

export function makeQuestions(app, topic, count, rng) {
  const d = app.data;
  const objs = (d.objects || []).filter((o) => !['light', 'camera'].includes(o.role) && o.maxDim > 0.02);
  const named = objs.filter((o) => !/^(cube|plane|sphere|cylinder|object|mesh)(\.\d+)?$/i.test(o.name));
  const pool = named.length >= 4 ? named : objs;
  const byRole = (r) => objs.filter((o) => o.role === r);
  const fs = d.fengshui || {};
  const center = app.world.center;
  const dist = (o, p) => Math.hypot(o.center[0] - p.x, o.center[2] - p.z);
  const G = {
    size() { const s = rng.shuffle(pool).slice(0, 4); if (s.length < 3) return null; const best = s.reduce((a, b) => (a.dims[1] > b.dims[1] ? a : b)); if (s.filter((o) => Math.abs(o.dims[1] - best.dims[1]) < 0.05).length > 1) return null; const c = choices(rng, nm(best), s.map(nm)); return c && { key: 'size' + best.name, q: 'Objek mana yang paling tinggi?', ...c }; },
    wide() { const s = rng.shuffle(pool).slice(0, 4); if (s.length < 3) return null; const w = (o) => Math.max(o.dims[0], o.dims[2]); const best = s.reduce((a, b) => (w(a) > w(b) ? a : b)); if (s.filter((o) => Math.abs(w(o) - w(best)) < 0.05).length > 1) return null; const c = choices(rng, nm(best), s.map(nm)); return c && { key: 'wide' + best.name, q: 'Objek mana yang paling lebar?', ...c }; },
    height() { const o = rng.pick(pool); if (!o) return null; const h = o.dims[1]; const fmt = (v) => `${fmtNum(v, v < 1 ? 2 : 1)} m`; const wr = [h * 0.4, h * 2.2, h * 3.5, h * 0.15].map(fmt); const c = choices(rng, fmt(h), wr); return c && { key: 'h' + o.name, q: `Berapa kira-kira tinggi “${nm(o)}”?`, ...c }; },
    material() { const o = rng.pick(pool.filter((x) => x.materials?.length)); if (!o) return null; const all = [...new Set((d.materials || []).map((m) => m.name))].filter((m) => !o.materials.includes(m)); if (all.length < 1) return null; const c = choices(rng, o.materials[0], all); return c && { key: 'm' + o.name, q: `Material apa yang dipakai “${nm(o)}”?`, ...c }; },
    category() { const o = rng.pick(pool.filter((x) => x.roleLabel)); if (!o) return null; const labels = [...new Set(objs.map((x) => x.roleLabel).filter(Boolean)), 'Kendaraan', 'Tanaman', 'Perabot', 'Bangunan', 'Hewan']; const c = choices(rng, o.roleLabel, labels); return c && { key: 'c' + o.name, q: `“${nm(o)}” termasuk kategori apa?`, ...c, note: o.roleSource === 'auto' ? 'Kategori ditentukan otomatis oleh 100 DREAMS dari nama dan bentuk objek.' : null }; },
    collection() { const o = rng.pick(pool.filter((x) => x.collection)); const cols = [...new Set(objs.map((x) => x.collection).filter(Boolean))]; if (!o || cols.length < 2) return null; const c = choices(rng, o.collection, cols); return c && { key: 'col' + o.name, q: `“${nm(o)}” berada di koleksi Blender apa?`, ...c }; },
    count() { const roles = [...new Set(objs.map((o) => o.role))].filter((r) => r && !['other'].includes(r)); const r = rng.pick(roles); if (!r) return null; const n = byRole(r).length; const lab = byRole(r)[0].roleLabel.toLowerCase(); return { key: 'cnt' + r, q: `Ada berapa objek kategori ${lab} di dunia ini?`, ...numChoices(rng, n) }; },
    nearCenter() { const s = rng.shuffle(pool).slice(0, 4); if (s.length < 3) return null; const best = s.reduce((a, b) => (dist(a, center) < dist(b, center) ? a : b)); const c = choices(rng, nm(best), s.map(nm)); return c && { key: 'nc' + best.name, q: 'Objek mana yang paling dekat dengan pusat dunia?', ...c }; },
    highest() { const s = rng.shuffle(pool).slice(0, 4); if (s.length < 3) return null; const top = (o) => o.center[1] + o.dims[1] / 2; const best = s.reduce((a, b) => (top(a) > top(b) ? a : b)); const c = choices(rng, nm(best), s.map(nm)); return c && { key: 'hi' + best.name, q: 'Puncak objek mana yang posisinya paling tinggi?', ...c }; },
    pairDist() { const s = rng.shuffle(pool).slice(0, 2); if (s.length < 2) return null; const dd = Math.hypot(s[0].center[0] - s[1].center[0], s[0].center[2] - s[1].center[2]); const fmt = (v) => `${fmtNum(v, 1)} m`; const c = choices(rng, fmt(dd), [dd * 0.3, dd * 2.4, dd * 4 + 2, dd * 0.6 + 5].map(fmt)); return c && { key: 'pd' + s[0].name + s[1].name, q: `Berapa jarak mendatar antara “${nm(s[0])}” dan “${nm(s[1])}”?`, ...c }; },
    animalCount() { return { key: 'ac', q: 'Ada berapa hewan di dunia ini (dari project Blender)?', ...numChoices(rng, byRole('animal').length) }; },
    animalBig() { const a = byRole('animal'); if (a.length < 2) return null; const v = (o) => o.dims[0] * o.dims[1] * o.dims[2]; const best = a.reduce((x, y) => (v(x) > v(y) ? x : y)); const c = choices(rng, nm(best), a.map(nm)); return c && { key: 'ab', q: 'Hewan mana yang ukurannya paling besar?', ...c }; },
    animalNear() { const a = rng.pick(byRole('animal')); const o = rng.pick(pool.filter((x) => x.role !== 'animal')); if (!a || !o) return null; const others = byRole('animal'); if (others.length < 2) return null; const best = others.reduce((x, y) => (dist(x, { x: o.center[0], z: o.center[2] }) < dist(y, { x: o.center[0], z: o.center[2] }) ? x : y)); void a; const c = choices(rng, nm(best), others.map(nm)); return c && { key: 'an' + o.name, q: `Hewan mana yang paling dekat dengan “${nm(o)}”?`, ...c }; },
    animalFact() { const a = rng.pick(byRole('animal').filter((x) => x.habitat || x.diet || x.scientific)); if (!a) return null; if (a.scientific) { const wr = byRole('animal').map((x) => x.scientific).filter(Boolean); const c = choices(rng, a.scientific, wr.concat(['Felis catus', 'Canis lupus familiaris', 'Equus caballus', 'Bos taurus'])); return c && { key: 'sci' + a.name, q: `Nama ilmiah “${nm(a)}” (sesuai data project)?`, ...c }; } if (a.habitat) { const c = choices(rng, a.habitat, ['Hutan', 'Padang rumput', 'Gurun', 'Laut', 'Rawa', 'Pegunungan']); return c && { key: 'hab' + a.name, q: `Habitat “${nm(a)}” menurut data project?`, ...c }; } return null; },
    charCount() { return { key: 'cc', q: 'Ada berapa karakter di dunia ini (dari project Blender)?', ...numChoices(rng, byRole('character').length) }; },
    charNear() { const ch = byRole('character'); const o = rng.pick(pool.filter((x) => x.role !== 'character')); if (ch.length < 2 || !o) return null; const best = ch.reduce((x, y) => (dist(x, { x: o.center[0], z: o.center[2] }) < dist(y, { x: o.center[0], z: o.center[2] }) ? x : y)); const c = choices(rng, nm(best), ch.map(nm)); return c && { key: 'chn' + o.name, q: `Siapa yang berada paling dekat dengan “${nm(o)}”?`, ...c }; },
    charCollection() { const ch = rng.pick(byRole('character').filter((x) => x.collection)); const cols = [...new Set(objs.map((x) => x.collection).filter(Boolean))]; if (!ch || cols.length < 2) return null; const c = choices(rng, ch.collection, cols); return c && { key: 'chc' + ch.name, q: `Di koleksi apa karakter “${nm(ch)}” berada?`, ...c }; },
    doors() { return { key: 'door', q: 'Berapa jumlah pintu yang terdeteksi di dunia ini?', ...numChoices(rng, byRole('door').length) }; },
    windows() { return { key: 'win', q: 'Berapa jumlah jendela yang terdeteksi?', ...numChoices(rng, byRole('window').length) }; },
    walls() { return { key: 'wall', q: 'Berapa banyak objek dinding yang terdeteksi?', ...numChoices(rng, byRole('wall').length) }; },
    footprint() { const s = app.world.size; const a = Math.round(s.x * s.z); const fmt = (v) => `${v} m²`; const c = choices(rng, fmt(a), [Math.round(a * 0.4), Math.round(a * 2.1) + 3, Math.round(a * 3.4) + 7, Math.round(a * 0.7) + 1].map(fmt)); return c && { key: 'fp', q: 'Berapa luas kotak tapak (lebar × panjang) seluruh dunia ini?', ...c }; },
    plants() { return { key: 'pl', q: 'Ada berapa objek tanaman di dunia ini?', ...numChoices(rng, byRole('plant').length) }; },
    water() { const n = byRole('water').length; const c = choices(rng, n > 0 ? 'Ada' : 'Tidak ada', ['Ada', 'Tidak ada']); return { key: 'wa', q: 'Apakah ada objek air di dunia ini?', ...c }; },
    lights() { return { key: 'li', q: 'Berapa jumlah lampu dalam project Blender ini?', ...numChoices(rng, (d.lights || []).length) }; },
    lightType() { const L = d.lights || []; if (!L.length) return null; const strongest = L.reduce((a, b) => (a.energy > b.energy ? a : b)); const map = { SUN: 'Matahari', POINT: 'Titik', SPOT: 'Sorot', AREA: 'Area' }; const c = choices(rng, map[strongest.type] || strongest.type, Object.values(map)); return c && { key: 'lt', q: `Lampu “${strongest.name}” (yang terkuat) bertipe apa?`, ...c }; },
    blender() { if (!d.blender) return null; const c = choices(rng, d.blender, ['3.6.0', '4.1.0', '4.2.3', '5.0.1', '2.93.0', '4.5.0']); return c && { key: 'bv', q: 'Dunia ini dibuat dengan Blender versi berapa?', ...c }; },
    sceneName() { if (!d.scene) return null; const c = choices(rng, d.scene, ['Scene', 'World', 'Main', 'Level 1', 'Collection']); return c && { key: 'sn', q: 'Apa nama scene Blender asal dunia ini?', ...c }; },
    matCount() { return { key: 'mc', q: 'Berapa jumlah material yang dipakai di dunia ini?', ...numChoices(rng, (d.materials || []).length) }; },
    animCount() { return { key: 'anc', q: 'Berapa jumlah animasi yang dibawa dari Blender?', ...numChoices(rng, (d.animations || []).length) }; },
    colCount() { return { key: 'clc', q: 'Berapa jumlah koleksi Blender dalam dunia ini?', ...numChoices(rng, (d.collections || []).length) }; },
    fsElement() { if (!fs.dominant) return null; const c = choices(rng, fs.dominant, ['Kayu', 'Api', 'Tanah', 'Logam', 'Air']); return c && { key: 'fse', q: 'Menurut analisis material, unsur (Wu Xing) apa yang paling dominan?', ...c, note: 'Pemetaan warna dan material ke lima unsur adalah kerangka tradisional, bukan pengukuran ilmiah.' }; },
    fsTaiqi() { if (!fs.taiqi) return null; const c = choices(rng, fs.taiqi.clear ? 'Lapang' : 'Terisi objek', ['Lapang', 'Terisi objek']); return { key: 'fst', q: 'Bagaimana kondisi pusat ruang (Tai Qi) menurut analisis?', ...c }; },
    fsDoor() { if (!fs.door?.sector) return null; const secs = (fs.grid?.cells || []).map((c) => c.label); const c = choices(rng, fs.door.sector, secs); return c && { key: 'fsd', q: `Pintu utama “${fs.door.name}” berada di sektor bagua mana?`, ...c }; },
    fsYin() { if (!fs.yinyang) return null; const c = choices(rng, fs.yinyang.verdict, ['Condong Yang (terang)', 'Condong Yin (redup)', 'Seimbang']); return c && { key: 'fsy', q: 'Keseimbangan Yin–Yang ruang ini cenderung…', ...c }; },
  };
  const T = {
    size: ['size', 'wide', 'height'], material: ['material', 'material', 'matCount'], category: ['category', 'count'], collection: ['collection', 'colCount'],
    geometry: ['height', 'wide', 'size', 'pairDist', 'footprint'], spatial: ['nearCenter', 'highest', 'pairDist', 'size'],
    animal: ['animalCount', 'animalBig', 'animalNear', 'animalFact'], character: ['charCount', 'charNear', 'charCollection', 'nearCenter'],
    architecture: ['doors', 'windows', 'walls', 'footprint', 'highest'], nature: ['plants', 'water', 'animalCount', 'count'],
    environment: ['lights', 'lightType', 'water', 'plants'], project: ['blender', 'sceneName', 'matCount', 'animCount', 'colCount'],
    fengshui: ['fsElement', 'fsTaiqi', 'fsDoor', 'fsYin', 'doors', 'windows'],
  };
  T.mixed = [...new Set(Object.values(T).flat())];
  const gens = T[topic] || T.mixed;
  const fallback = T.mixed;
  const out = [], seen = new Set();
  for (let tries = 0; out.length < count && tries < count * 40; tries++) {
    const list = tries < count * 25 ? gens : fallback;
    const g = G[rng.pick(list)];
    const q = g && g();
    if (!q || q.answer < 0 || seen.has(q.key)) continue;
    seen.add(q.key); out.push(q);
  }
  // numeric questions can always be produced, so the quiz never runs dry
  let k = 0; while (out.length < count) { const n = (d.stats?.objects || objs.length) + k++; out.push({ key: 'obj' + k, q: 'Berapa total objek yang dianalisis dari project Blender ini?', ...numChoices(rng, d.stats?.objects || objs.length) }); void n; }
  return out;
}
