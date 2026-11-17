# 100 Dreams

> *One click turns a Blender scene into an explorable, interactive HTML world — with 100 playable games.*

**100 Dreams** is a procedural world-generation pipeline by **VeryCoolApps (PT. Agra Karya Digital)**. It reads any Blender scene, understands what every object *is*, applies Feng Shui analysis, converts the world to the web, and drops you into a cinematic, explorable dreamscape complete with an always-on game catalog.

No export wizard. No asset re-baking. No hand-wiring. You press one button; the pipeline does the rest.

---

## What it does

- **Scene intelligence** — automatically classifies every object (characters, animals, doors, water, furniture, architecture…), reads materials, animations, cameras, lights, and the world environment *without modifying your scene*.
- **Feng Shui analysis** — Form School layout review plus Compass School (Later Heaven bagua) when you tell it true north; falls back to the Western BTB bagua aligned to the main door, always honestly labelled.
- **Automatic web conversion** — exports the scene to glTF 2.0 / GLB (with optional WebP textures and packed HDRI environments) and wraps it in a self-contained HTML experience.
- **100 playable games** — every generated world carries a full game catalog spanning exploration, puzzle, character, animal, action, creative, education, adventure, social, and special categories — collectible hunts, hide-and-seek, quizzes built from your world's real data, photography challenges, physics platforming, logic boards, and more.
- **Cinematic runtime** — a bundled Three.js web runtime with sky shaders, HDRI lighting, animated actors, synthesized audio, and physics via three-mesh-bvh. Runs entirely offline.
- **Honest validation** — a built-in QA stage inspects the GLB, catalog coverage, and runtime constraints; a check that did not run is never reported "ok".
- **Choose your output** — single self-contained HTML file (≤48 MB) or a multi-file package served on `127.0.0.1` for instant preview.

## Tech stack

| Layer | Technology |
|---|---|
| Blender add-on | Blender 4.2+ (tested on 5.0.1), Python, `bpy` |
| Generation pipeline | Python — `core/` modules, no external deps beyond Blender |
| Scene export | glTF 2.0 / GLB via Blender's native exporter |
| Web runtime | Three.js r160 + three-mesh-bvh 0.7.3, vanilla JS, bundled with esbuild |
| Distribution | Single-file HTML or static multi-file package |

## Repository structure

```
hundred_dreams/
├── __init__.py              # Blender add-on entry point + UI panel
├── blender_manifest.toml    # Blender extension manifest
├── core/                    # Python generation pipeline
│   ├── analyzer.py          # Scene intelligence → world.json
│   ├── fengshui.py          # Form / Compass School analysis
│   ├── exporter.py          # GLB + HDRI export
│   ├── builder.py           # HTML/package assembly
│   ├── validator.py         # Automated QA checks
│   ├── pipeline.py          # One-click stage orchestrator
│   └── server.py            # 127.0.0.1 static preview server
├── web/                     # Built runtime (do not edit by hand)
│   ├── runtime.bundle.js    # esbuild bundle: Three.js + game engine
│   ├── games.json           # The 100-game catalog
│   ├── template.html        # HTML shell
│   └── style.css
└── web_src/                 # Web runtime source (ES modules)
    ├── main.js              # App bootstrap
    ├── engine/              # render, world, player, actors, audio
    ├── games/               # engine, 18 mechanics, quiz, randomizer
    ├── ui.js · util.js
    └── BUILD.md             # How to rebuild the bundle
```

## Quickstart

1. **As a Blender add-on** — install the package into Blender (Edit → Preferences → Add-ons → Install from Disk), open any scene, then in the 3D Viewport press **N** → **100 DREAMS** → **GENERATE MY WORLD**.
2. **Headless / CLI** — generate without the UI:

   ```bash
   blender -b scene.blend --python-expr "import hundred_dreams as d; d.register(); d.generate_cli('/path/out')"
   ```

3. **Python package** — install editable and run the server to preview generated worlds:

   ```bash
   pip install -e .
   python -m core.server
   ```

   Multi-file packages are served automatically on `127.0.0.1`; single-file worlds can be opened directly in any browser.

## Controls

**WASD movement — keyboard only.** Walk with `W A S D`, look around with the mouse, interact with objects and UI prompts as they appear. No gamepad required.

## Requirements

- Blender 4.2 or newer (developed on Blender 5.0.1)
- A modern browser with WebGL2 (Chrome, Edge, Firefox, Safari)
- Python 3.10+ for the pipeline modules

## License

**Proprietary — All Rights Reserved.**

© 2026 **VeryCoolApps (PT. Agra Karya Digital)**. All rights reserved.

This software and its outputs may not be copied, modified, distributed, sublicensed, or used for competitive purposes without prior written consent. See [LICENSE](LICENSE) for the full terms.

---

*100 Dreams — where every Blender scene becomes a world worth dreaming in.*
*© 2026 VeryCoolApps (PT. Agra Karya Digital). All Rights Reserved.*
