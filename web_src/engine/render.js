import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export const PRESET_ORDER = ['cinematic', 'ultra', 'high', 'balanced', 'performance'];
export const PRESETS = {
  cinematic: { label: 'Cinematic Maximum', pixelRatio: 2, msaa: 4, shadow: 4096, softShadow: false, ao: true, bloom: true, dof: true, aniso: 16 },
  ultra: { label: 'Ultra', pixelRatio: 1.75, msaa: 4, shadow: 4096, softShadow: false, ao: true, bloom: true, dof: true, aniso: 8 },
  high: { label: 'High', pixelRatio: 1.5, msaa: 4, shadow: 2048, softShadow: false, ao: false, bloom: true, dof: false, aniso: 8 },
  balanced: { label: 'Balanced', pixelRatio: 1.25, msaa: 2, shadow: 1024, softShadow: false, ao: false, bloom: false, dof: false, aniso: 4 },
  performance: { label: 'Performance', pixelRatio: 1, msaa: 0, shadow: 0, softShadow: false, ao: false, bloom: false, dof: false, aniso: 1 },
};

export function detectCapabilities() {
  const caps = { webgl2: false, webgpu: 'gpu' in navigator, gpu: 'unknown', maxTexture: 0, dpr: window.devicePixelRatio || 1,
    memory: navigator.deviceMemory || null, touch: matchMedia('(pointer: coarse)').matches, software: false,
    screen: `${screen.width}×${screen.height}` };
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    if (gl) {
      caps.webgl2 = true;
      caps.maxTexture = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      caps.gpu = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
      caps.software = /swiftshader|llvmpipe|software|basic render/i.test(caps.gpu);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
  } catch { /* no webgl */ }
  return caps;
}

export function suggestPreset(caps) {
  if (caps.software) return 'performance';
  if (caps.touch) return (caps.memory && caps.memory >= 8) ? 'high' : 'balanced';
  if (caps.memory && caps.memory <= 4) return 'balanced';
  return 'cinematic';
}

export class Renderer {
  constructor(canvas, caps) {
    this.caps = caps;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', preserveDrawingBuffer: false });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    this.renderer.shadowMap.enabled = true;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.05, 5000);
    this.presetName = 'cinematic';
    this.auto = true;
    this.fpsSamples = [];
    this.lastDrop = 0;
    this.onAutoChange = null;
    this.dofActive = false;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.defaultEnv = pmrem.fromScene(new RoomEnvironment(this.renderer), 0.04).texture;
    this.pmrem = pmrem;
    this.scene.environment = this.defaultEnv;
    window.addEventListener('resize', () => this.resize());
  }

  setEnvironmentTexture(tex, showAsBackground) {
    const env = this.pmrem.fromEquirectangular(tex).texture;
    this.scene.environment = env;
    if (showAsBackground) { this.scene.background = tex; this.scene.backgroundBlurriness = 0; }
  }

  apply(name, { manual = false } = {}) {
    if (!PRESETS[name]) name = 'balanced';
    if (manual) this.auto = false;
    this.presetName = name;
    const p = PRESETS[name];
    const r = this.renderer;
    r.setPixelRatio(Math.min(p.pixelRatio, this.caps.dpr || 1));
    r.shadowMap.enabled = p.shadow > 0;
    r.shadowMap.type = p.softShadow ? THREE.VSMShadowMap : THREE.PCFSoftShadowMap;
    this.scene.traverse((o) => {
      if (o.isLight && o.shadow && o.castShadow) {
        o.shadow.mapSize.set(p.shadow || 512, p.shadow || 512);
        o.shadow.map?.dispose(); o.shadow.map = null;
        if (p.softShadow) { o.shadow.radius = 6; o.shadow.blurSamples = 12; }
      }
      if (o.isMesh && o.material) {
        for (const m of [].concat(o.material)) {
          for (const k of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap', 'aoMap']) {
            if (m[k]) { m[k].anisotropy = Math.min(p.aniso, r.capabilities.getMaxAnisotropy()); m[k].needsUpdate = true; }
          }
          m.needsUpdate = true;
        }
      }
    });
    this.buildComposer();
    this.resize();
  }

  buildComposer() {
    const p = PRESETS[this.presetName];
    const size = this.renderer.getSize(new THREE.Vector2());
    this.composer?.dispose?.();
    const rt = new THREE.WebGLRenderTarget(Math.max(1, size.x), Math.max(1, size.y), { type: THREE.HalfFloatType, samples: p.msaa });
    const c = new EffectComposer(this.renderer, rt);
    c.addPass(new RenderPass(this.scene, this.camera));
    if (p.ao) {
      const ao = new GTAOPass(this.scene, this.camera, size.x, size.y);
      ao.output = GTAOPass.OUTPUT.Default;
      ao.blendIntensity = 0.85;
      c.addPass(ao);
    }
    this.outline = new OutlinePass(new THREE.Vector2(size.x, size.y), this.scene, this.camera);
    this.outline.edgeStrength = 3.2; this.outline.edgeGlow = 0.6; this.outline.edgeThickness = 1.2;
    this.outline.visibleEdgeColor.set('#ffd98a'); this.outline.hiddenEdgeColor.set('#5a4a8a');
    c.addPass(this.outline);
    if (p.bloom) {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.22, 0.5, 1.0);
      c.addPass(this.bloom);
    } else this.bloom = null;
    if (p.dof) {
      this.bokeh = new BokehPass(this.scene, this.camera, { focus: 12, aperture: 0.00012, maxblur: 0.006 });
      this.bokeh.enabled = this.dofActive;
      c.addPass(this.bokeh);
    } else this.bokeh = null;
    c.addPass(new OutputPass());
    this.composer = c;
  }

  setDof(on, focus) {
    this.dofActive = on;
    if (this.bokeh) { this.bokeh.enabled = on; if (focus) this.bokeh.uniforms.focus.value = focus; }
  }

  setHighlight(objs) { if (this.outline) this.outline.selectedObjects = objs || []; }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
    this.composer?.setSize(w, h);
  }

  trackFps(dt, now) {
    if (!this.auto || dt <= 0) return;
    this.fpsSamples.push(1 / dt);
    if (this.fpsSamples.length < 150) return;
    const avg = this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length;
    this.fpsSamples.length = 0;
    const idx = PRESET_ORDER.indexOf(this.presetName);
    if (avg < 26 && idx < PRESET_ORDER.length - 1 && now - this.lastDrop > 5) {
      this.lastDrop = now;
      this.apply(PRESET_ORDER[idx + 1]);
      this.onAutoChange?.(this.presetName, avg);
    }
  }

  render() { this.composer.render(); }

  snapshot() { this.render(); return this.renderer.domElement.toDataURL('image/jpeg', 0.92); }
}
