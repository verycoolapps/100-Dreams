// 100 DREAMS runtime — shared utilities
export function mulberry32(seed) {
  let a = seed >>> 0;
  const f = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  f.int = (n) => Math.floor(f() * n);
  f.range = (a0, b0) => a0 + f() * (b0 - a0);
  f.pick = (arr) => arr[Math.floor(f() * arr.length)];
  f.shuffle = (arr) => {
    const r = arr.slice();
    for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(f() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
    return r;
  };
  return f;
}

export function hashString(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;

export function el(tag, attrs = {}, ...children) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(n.style, v);
    else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2), v);
    else if (k === 'html') n.innerHTML = v;
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children.flat(Infinity)) {
    if (c == null || c === false) continue;
    n.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return n;
}

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export const store = {
  get(k, d) { try { const v = localStorage.getItem('100dreams:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('100dreams:' + k, JSON.stringify(v)); } catch { /* storage unavailable */ } },
};

export function fmtTime(s) {
  s = Math.max(0, Math.ceil(s));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export function fmtNum(n, d = 2) {
  return Number(n).toLocaleString('id-ID', { maximumFractionDigits: d });
}

export function todaySeed() {
  const d = new Date();
  return hashString(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
}

// Same rule as THREE.PropertyBinding.sanitizeNodeName, kept here so world.json names map to glTF nodes.
export function sanitizeName(name) {
  return String(name).replace(/\s/g, '_').replace(/[\[\]\.:\/]/g, '');
}

export const isTouch = () => matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
