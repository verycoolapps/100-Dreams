# 100 DREAMS — render stills of the current Blender scene for the web package.
# The web runtime cannot run Eevee/Cycles, so we bake 1-2 stills here and the UI
# shows them as "hasil render Blender" previews. Never mutates the user's scene:
# render settings and any temporary camera are restored/removed afterwards.
import os
import tempfile

import bpy
from mathutils import Vector

Eevee_ENGINES = ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE")  # 4.x name first, 3.x fallback
WORKBENCH = "BLENDER_WORKBENCH"


def _engine_ok(name):
    try:
        bpy.context.scene.render.engine = name
        return True
    except Exception:
        return False


def _pick_engine(preferred):
    """Return an engine identifier that this Blender accepts, or None."""
    order = []
    if preferred == "cycles":
        order = ["CYCLES"] + list(Eevee_ENGINES) + [WORKBENCH]
    elif preferred == "off":
        return None
    else:  # eevee (default)
        order = list(Eevee_ENGINES) + [WORKBENCH, "CYCLES"]
    for name in order:
        if _engine_ok(name):
            return name
    return None


def _scene_bounds():
    """World-space bbox of all visible mesh/curve objects (evaluated)."""
    dg = bpy.context.evaluated_depsgraph_get()
    mn = Vector((1e18, 1e18, 1e18)); mx = Vector((-1e18, -1e18, -1e18))
    found = False
    for obj in bpy.context.scene.objects:
        if obj.type not in {"MESH", "CURVE", "SURFACE", "FONT", "META"} or obj.hide_render or obj.hide_viewport:
            continue
        ev = obj.evaluated_get(dg)
        try:
            for corner in ev.bound_box:
                w = ev.matrix_world @ Vector(corner)
                mn = Vector(map(min, mn, w)); mx = Vector(map(max, mx, w))
                found = True
        except Exception:
            continue
    if not found:
        return Vector((-5, -5, 0)), Vector((5, 5, 3))
    return mn, mx


def _camera_for(scene, kind, mn, mx):
    """Return (camera, temporary) — the scene's own camera for 'hero', or a framed temp camera."""
    if kind == "hero":
        cam = next((o for o in scene.objects if o.type == "CAMERA" and not o.hide_render), None)
        if cam is not None:
            return cam, False
    # frame the bounds: hero = 3/4 view, top = straight-down ortho
    center = (mn + mx) / 2
    size = mx - mn
    radius = max(size.length / 2, 1.0)
    cam_data = bpy.data.cameras.new("__dreams_render_cam")
    cam = bpy.data.objects.new("__dreams_render_cam", cam_data)
    scene.collection.objects.link(cam)
    if kind == "top":
        cam_data.type = "ORTHO"
        cam_data.ortho_scale = max(size.x, size.y) * 1.15
        cam.location = Vector((center.x, center.y, mx.z + max(size.z, radius) + 5))
        cam.rotation_euler = (0, 0, 0)  # looking straight down -Z in Blender
    else:
        cam_data.type = "PERSP"
        cam_data.lens = 52
        direction = Vector((1.0, -1.15, 0.72)).normalized()
        cam.location = center + direction * radius * 2.6
        look = center - cam.location
        cam.rotation_euler = look.to_track_quat("-Z", "Y").to_euler()
    return cam, True


def _render_one(scene, kind, path, engine, res_x, res_y, samples):
    mn, mx = _scene_bounds()
    cam, temp = _camera_for(scene, kind, mn, mx)
    r = scene.render
    old = {k: getattr(r, k) for k in ("engine", "resolution_x", "resolution_y", "resolution_percentage",
                                     "filepath", "image_settings") if hasattr(r, k)}
    old_cam = scene.camera
    try:
        scene.render.engine = engine
        r.resolution_x = res_x; r.resolution_y = res_y; r.resolution_percentage = 100
        r.filepath = path
        try:
            r.image_settings.file_format = "PNG"
            r.image_settings.color_mode = "RGBA"
        except Exception:
            pass
        if engine == "CYCLES":
            scene.cycles.samples = samples
            scene.cycles.use_denoising = True
            try:
                scene.cycles.device = "CPU"
            except Exception:
                pass
        scene.camera = cam
        bpy.ops.render.render(write_still=True)
        return os.path.exists(path) and os.path.getsize(path) > 0
    finally:
        scene.camera = old_cam
        for k, v in old.items():
            try:
                if k == "image_settings":
                    continue
                setattr(r, k, v)
            except Exception:
                pass
        if temp:
            bpy.data.objects.remove(cam, do_unlink=True)
            bpy.data.cameras.remove(cam.data)


def render_stills(work_dir, settings):
    """Render preview stills into work_dir/renders/. Returns list of {kind,label,file} or []."""
    quality = settings.get("render_quality", "eevee")
    if quality == "off":
        return []
    scene = bpy.context.scene
    engine = _pick_engine(quality)
    if not engine:
        return []
    out = os.path.join(work_dir, "renders")
    os.makedirs(out, exist_ok=True)
    # match the scene's aspect ratio, capped for reasonable file size
    rx = int(getattr(scene.render, "resolution_x", 1600) or 1600)
    ry = int(getattr(scene.render, "resolution_y", 900) or 900)
    if rx <= 0 or ry <= 0:
        rx, ry = 1600, 900
    scale = min(1.0, 1600 / rx)
    res_x, res_y = max(640, int(rx * scale)), max(360, int(ry * scale))
    samples = 48 if engine == "CYCLES" else 0
    shots = [("hero", "Render Blender"), ("top", "Peta atas (ortho)")]
    results = []
    for kind, label in shots:
        path = os.path.join(out, f"{kind}.png")
        try:
            ok = _render_one(scene, kind, path, engine, res_x, res_y, samples)
        except Exception as e:
            print(f"[100 DREAMS] render {kind} gagal: {e}")
            ok = False
        if ok:
            results.append({"kind": kind, "label": f"{label} · {engine}", "file": f"renders/{kind}.png"})
    return results
