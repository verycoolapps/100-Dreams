import { store } from '../util.js';

// Generative audio: no external files. Ambient pad + interface/game sound effects.
export class Audio {
  constructor() {
    this.ctx = null;
    this.vol = store.get('vol', { master: 0.7, ambient: 0.5, sfx: 0.8 });
    this.started = false;
  }

  start() {
    if (this.started) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
    } catch { return; }
    this.started = true;
    const c = this.ctx;
    this.master = c.createGain(); this.master.connect(c.destination);
    this.ambientGain = c.createGain(); this.ambientGain.connect(this.master);
    this.sfxGain = c.createGain(); this.sfxGain.connect(this.master);
    this.applyVolume();
    this.startAmbient();
  }

  applyVolume() {
    if (!this.ctx) return;
    this.master.gain.value = this.vol.master;
    this.ambientGain.gain.value = this.vol.ambient * 0.22;
    this.sfxGain.gain.value = this.vol.sfx * 0.5;
    store.set('vol', this.vol);
  }

  set(kind, v) { this.vol[kind] = v; this.applyVolume(); }

  startAmbient() {
    const c = this.ctx;
    const filter = c.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 900; filter.Q.value = 0.4;
    filter.connect(this.ambientGain);
    const chords = [[220, 277.18, 329.63, 415.3], [196, 246.94, 293.66, 369.99], [174.61, 220, 261.63, 329.63], [207.65, 261.63, 311.13, 392]];
    const voices = chords[0].map(() => {
      const o = c.createOscillator(); o.type = 'sine';
      const o2 = c.createOscillator(); o2.type = 'triangle'; o2.detune.value = 6;
      const g = c.createGain(); g.gain.value = 0.18;
      o.connect(g); o2.connect(g); g.connect(filter); o.start(); o2.start();
      return { o, o2, g };
    });
    const lfo = c.createOscillator(); lfo.frequency.value = 0.05; const lfoG = c.createGain(); lfoG.gain.value = 380; lfo.connect(lfoG); lfoG.connect(filter.frequency); lfo.start();
    let idx = 0;
    const next = () => {
      const ch = chords[idx++ % chords.length], t = c.currentTime;
      voices.forEach((v, i) => { v.o.frequency.setTargetAtTime(ch[i] / (i === 0 ? 2 : 1), t, 2.5); v.o2.frequency.setTargetAtTime(ch[i] / (i === 0 ? 2 : 1), t, 2.5); });
    };
    next(); this.ambientTimer = setInterval(next, 9000);
  }

  tone(freq, dur, type = 'sine', when = 0, gain = 0.6) {
    if (!this.ctx) return;
    const c = this.ctx, t = c.currentTime + when;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t + dur + 0.05);
  }

  sfx(name) {
    if (!this.ctx) return;
    const T = (f, d, ty, w, g) => this.tone(f, d, ty, w, g);
    switch (name) {
      case 'collect': T(880, 0.12, 'triangle'); T(1318.5, 0.18, 'triangle', 0.07); break;
      case 'good': T(659.25, 0.14, 'sine'); T(987.77, 0.22, 'sine', 0.09); break;
      case 'bad': T(196, 0.25, 'sawtooth', 0, 0.25); T(155.56, 0.3, 'sawtooth', 0.08, 0.2); break;
      case 'win': [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => T(f, 0.4, 'triangle', i * 0.11)); break;
      case 'lose': [392, 329.63, 261.63].forEach((f, i) => T(f, 0.45, 'sine', i * 0.16, 0.4)); break;
      case 'jump': T(440, 0.1, 'sine', 0, 0.25); break;
      case 'click': T(1200, 0.05, 'square', 0, 0.12); break;
      case 'open': T(260, 0.3, 'triangle', 0, 0.2); break;
      case 'close': T(200, 0.25, 'triangle', 0, 0.2); break;
      case 'shutter': T(2400, 0.04, 'square', 0, 0.2); T(1600, 0.06, 'square', 0.05, 0.15); break;
      case 'pad0': case 'pad1': case 'pad2': case 'pad3': case 'pad4': case 'pad5':
        T([329.63, 392, 440, 523.25, 587.33, 659.25][+name.slice(3)], 0.35, 'sine'); break;
      default: T(700, 0.08);
    }
  }
}
