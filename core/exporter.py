# 100 DREAMS — Automatic web conversion (glTF 2.0 / GLB). Never modifies the scene.
import os
import shutil

import bpy


def _supported(kwargs):
    props = {p.identifier for p in bpy.ops.export_scene.gltf.get_rna_type().properties}
    return {k: v for k, v in kwargs.items() if k in props}


def export_glb(path, settings):
    kwargs = dict(
        filepath=path, export_format="GLB", use_visible=True, use_selection=False, export_apply=True,
        export_extras=True, export_cameras=True, export_lights=True, export_animations=True, export_yup=True,
        export_materials="EXPORT", export_image_format="WEBP" if settings.get("webp") else "AUTO",
        export_image_quality=90, export_gn_mesh=True, export_draco_mesh_compression_enable=False,
        export_import_convert_lighting_mode="COMPAT",
    )
    result = bpy.ops.export_scene.gltf(**_supported(kwargs))
    if "FINISHED" not in result or not os.path.exists(path):
        raise RuntimeError("Ekspor glTF gagal. Periksa Info log Blender.")
    return os.path.getsize(path)


def export_environment(env, dest_dir):
    """Copy the world HDRI (.hdr/.exr) if the scene uses one. Returns (filename, size) or None."""
    if not env.get("hdri"):
        return None
    ext = env["hdri"]
    out = os.path.join(dest_dir, f"environment.{ext}")
    img = bpy.data.images.get(env.get("hdriImage", ""))
    try:
        if img is not None and img.packed_file is not None:
            with open(out, "wb") as f:
                f.write(img.packed_file.data)
        elif env.get("hdriPath") and os.path.isfile(env["hdriPath"]):
            shutil.copyfile(env["hdriPath"], out)
        else:
            return None
    except OSError:
        return None
    return os.path.basename(out), os.path.getsize(out)


def fidelity_notes(data, objs):
    notes = []
    for m in data["materials"]:
        if m["unsupported"]:
            notes.append(f"Material “{m['name']}” memakai node {', '.join(m['unsupported'][:4])} yang tidak punya padanan langsung di glTF; tampilannya bisa berbeda. Bake ke tekstur bila perlu kesetiaan penuh.")
    for o in objs:
        if o.type == "MESH" and any(ps.settings.type == "HAIR" for ps in getattr(o, "particle_systems", [])):
            notes.append(f"Rambut partikel pada “{o.name}” tidak ikut diekspor ke web.")
        if o.type in {"VOLUME", "POINTCLOUD"}:
            notes.append(f"Objek {o.type.lower()} “{o.name}” tidak didukung glTF dan dilewati.")
        if o.type == "CURVES":
            notes.append(f"Rambut kurva “{o.name}” tidak didukung glTF dan dilewati.")
        if o.type == "LIGHT" and o.data.type == "AREA":
            notes.append(f"Lampu area “{o.name}” tidak ada di glTF; di web cahayanya mungkin hilang atau berubah.")
    w = bpy.context.scene.world
    if w and w.use_nodes and w.node_tree and not data["environment"].get("hdri"):
        if any(n.type == "TEX_SKY" for n in w.node_tree.nodes):
            notes.append("Langit prosedural (Sky Texture) diganti langit gradasi berbasis warna dunia.")
    eng = bpy.context.scene.render.engine
    if eng == "CYCLES":
        notes.append("Render Cycles (path tracing) tidak dapat ditiru real-time; web memakai PBR, IBL, bayangan, AO, dan bloom sebagai pendekatan.")
    return notes[:40]
