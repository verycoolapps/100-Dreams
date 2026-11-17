# 100 DREAMS — Automatic Scene Intelligence
# Reads the Blender scene without modifying it and produces the world description (world.json).
import math
import re
import time

import bpy
from mathutils import Vector, kdtree

ROLE_LABELS = {
    "character": "Karakter", "animal": "Hewan", "furniture": "Perabot", "door": "Pintu", "window": "Jendela",
    "stairs": "Tangga", "plant": "Tanaman", "water": "Air", "vehicle": "Kendaraan", "roof": "Atap",
    "wall": "Dinding", "floor": "Lantai", "terrain": "Lanskap", "building": "Bangunan", "light": "Lampu",
    "camera": "Kamera", "prop": "Properti",
}
ROLE_ITEMS = [("AUTO", "Otomatis", "Biarkan 100 DREAMS mengenali objek ini")] + [
    (k.upper(), v, f"Perlakukan objek sebagai {v.lower()}") for k, v in ROLE_LABELS.items() if k not in ("light", "camera")
]

KEYWORDS = [
    ("door", "door doors pintu gate gerbang doorway entrance"),
    ("window", "window windows jendela windowpane pane"),
    ("stairs", "stair stairs staircase stairway tangga ladder steps escalator"),
    ("animal", "animal animals creature pet hewan binatang dog dogs puppy cat cats kitten horse horses pony bird birds fish fishes cow cows "
               "sheep goat pig chicken hen rooster duck goose deer wolf fox bear lion tiger elephant rabbit bunny monkey ape snake frog "
               "butterfly owl eagle whale dolphin shark turtle tortoise penguin giraffe zebra camel buffalo bull mouse rat squirrel parrot "
               "anjing kucing kuda burung ikan sapi domba kambing babi ayam bebek angsa rusa serigala rubah beruang singa harimau gajah "
               "kelinci monyet ular katak kodok kupu elang hantu paus lumba hiu kura penyu jerapah unta kerbau banteng tikus tupai beo "
               "komodo orangutan dinosaur dino dragon naga"),
    ("character", "character characters karakter human humans person people man men woman women girl boy child kid kids npc villager "
                  "guard king queen prince princess knight soldier warrior hero heroine wizard witch mage merchant farmer chef doctor "
                  "student teacher player avatar mannequin orang manusia pria wanita anak gadis putri pangeran raja ratu prajurit "
                  "ksatria pahlawan penyihir pedagang petani guru murid penjaga"),
    ("vehicle", "car cars truck bus bike bicycle motorcycle motorbike scooter vehicle van taxi tractor boat ship yacht plane airplane "
                "aircraft helicopter train tram rocket mobil truk bis sepeda motor kendaraan kapal perahu pesawat kereta"),
    ("plant", "tree trees plant plants bush bushes shrub grass flower flowers leaf leaves palm pine oak fern hedge vine cactus bamboo "
              "pohon tanaman semak rumput bunga daun kaktus bambu beringin"),
    ("water", "water pool pond river lake sea ocean fountain waterfall air kolam sungai danau laut samudra pancuran"),
    ("furniture", "chair chairs table tables sofa couch bed beds desk lamp cabinet shelf shelves bookshelf bookcase wardrobe closet drawer "
                  "drawers dresser bench stool armchair nightstand tv television monitor rug carpet pillow cushion sink toilet bathtub "
                  "shower stove oven fridge refrigerator counter vase pot plantpot mirror curtain painting frame clock piano "
                  "kursi meja sofa kasur ranjang lampu lemari rak bangku karpet bantal wastafel kloset bak kompor kulkas cermin "
                  "tirai lukisan jam"),
    ("roof", "roof roofs atap ceiling plafon"),
    ("wall", "wall walls dinding tembok partition fence pagar"),
    ("floor", "floor floors lantai tile tiles ubin deck"),
    ("terrain", "terrain ground land landscape tanah mountain mountains gunung hill hills bukit road roads jalan street sidewalk plaza field lapangan"),
    ("building", "house home rumah building buildings gedung tower menara castle istana kastil palace apartment apartemen stadium stadion "
                 "museum school sekolah office kantor temple candi church gereja mosque masjid shop toko pillar column tiang pilar arch "
                 "bridge jembatan hall aula villa cabin pondok hut"),
]
KEYWORD_MAP = []
for role, words in KEYWORDS:
    KEYWORD_MAP.append((role, set(words.split())))

SUPPORTED_NODES = {
    "BSDF_PRINCIPLED", "OUTPUT_MATERIAL", "TEX_IMAGE", "NORMAL_MAP", "MAPPING", "TEX_COORD", "UVMAP", "SEPARATE_COLOR",
    "SEPRGB", "SEPARATE_RGB", "COMBINE_COLOR", "EMISSION", "BSDF_TRANSPARENT", "MIX_SHADER", "ATTRIBUTE", "VERTEX_COLOR",
    "GROUP", "REROUTE", "FRAME", "BSDF_DIFFUSE", "MIX", "MIX_RGB", "ADD_SHADER", "BSDF_GLOSSY", "VALUE", "RGB", "MATH",
    "INVERT", "HUE_SAT", "BRIGHTCONTRAST", "TEX_ENVIRONMENT", "BACKGROUND", "OUTPUT_WORLD", "LIGHT_PATH", "SEPARATE_XYZ",
}


def tokenize(name):
    base = re.sub(r"\.\d+$", "", name)
    base = re.sub(r"([a-z])([A-Z])", r"\1 \2", base)
    return [t for t in re.split(r"[^A-Za-z]+", base.lower()) if t]


def keyword_role(name):
    tokens = tokenize(name)
    for role, words in KEYWORD_MAP:
        for t in tokens:
            if t in words or (t.endswith("s") and t[:-1] in words):
                return role
    return None


def clean_label(name):
    base = re.sub(r"\.\d+$", "", name)
    base = re.sub(r"([a-z])([A-Z])", r"\1 \2", base).replace("_", " ").replace("-", " ").strip()
    base = re.sub(r"\s+", " ", base)
    return base[:1].upper() + base[1:] if base else name


def to_three(v):
    return [round(v[0], 4), round(v[2], 4), round(-v[1], 4)]


def linear_to_srgb(c):
    c = max(0.0, min(1.0, c))
    return c * 12.92 if c <= 0.0031308 else 1.055 * (c ** (1 / 2.4)) - 0.055


def hex_color(rgb):
    return "#%02x%02x%02x" % tuple(int(round(linear_to_srgb(x) * 255)) for x in rgb[:3])


def color_element(rgb_srgb, name):
    n = name.lower()
    for words, el in (("wood kayu timber oak walnut bamboo leaf daun grass rumput", "Kayu"), ("fire api flame lava candle", "Api"),
                      ("stone batu concrete beton brick bata clay tanah ceramic keramik marble marmer sand pasir", "Tanah"),
                      ("metal logam steel baja iron besi gold emas silver perak chrome aluminium aluminum brass copper", "Logam"),
                      ("water air glass kaca mirror cermin ice es", "Air")):
        if any(w in n for w in words.split()):
            return el
    r, g, b = rgb_srgb
    mx, mn = max(r, g, b), min(r, g, b)
    light = (mx + mn) / 2
    sat = 0 if mx == mn else (mx - mn) / (1 - abs(2 * light - 1) + 1e-6)
    if light < 0.12:
        return "Air"
    if sat < 0.15:
        return "Logam" if light > 0.55 else ("Air" if light < 0.3 else "Logam")
    h = 0.0
    if mx == r:
        h = ((g - b) / (mx - mn)) % 6
    elif mx == g:
        h = (b - r) / (mx - mn) + 2
    else:
        h = (r - g) / (mx - mn) + 4
    h *= 60
    if h < 20 or h >= 330:
        return "Api"
    if h < 55:
        return "Tanah" if light < 0.55 or sat < 0.5 else "Api"
    if h < 70:
        return "Tanah"
    if h < 170:
        return "Kayu"
    if h < 260:
        return "Air"
    return "Api"


def world_bbox(obj, depsgraph):
    """World-space bbox of an object (evaluated), or None for objects without geometry."""
    if obj.type not in {"MESH", "CURVE", "SURFACE", "FONT", "META", "CURVES", "POINTCLOUD", "VOLUME"}:
        return None
    ev = obj.evaluated_get(depsgraph)
    try:
        corners = [ev.matrix_world @ Vector(c) for c in ev.bound_box]
    except Exception:
        return None
    mn = Vector((min(c.x for c in corners), min(c.y for c in corners), min(c.z for c in corners)))
    mx = Vector((max(c.x for c in corners), max(c.y for c in corners), max(c.z for c in corners)))
    if (mx - mn).length < 1e-6:
        return None
    return mn, mx


def union(a, b):
    if a is None:
        return b
    if b is None:
        return a
    return (Vector((min(a[0].x, b[0].x), min(a[0].y, b[0].y), min(a[0].z, b[0].z))),
            Vector((max(a[1].x, b[1].x), max(a[1].y, b[1].y), max(a[1].z, b[1].z))))


def obj_settings(obj):
    s = getattr(obj, "dreams", None)
    out = {}
    if s is not None:
        if s.role != "AUTO":
            out["role"] = s.role.lower()
        for k in ("label", "description", "dialogue", "scientific", "habitat", "diet"):
            v = getattr(s, k, "")
            if v and v.strip():
                out[k] = v.strip()
        if s.behavior != "AUTO":
            out["behavior"] = s.behavior.lower()
        if not s.collide:
            out["collide"] = False
    for k in ("description", "dialogue", "scientific", "habitat", "diet", "label"):
        v = obj.get("dreams_" + k)
        if isinstance(v, str) and v.strip() and k not in out:
            out[k] = v.strip()
    return out


def material_info(mat):
    info = {"name": mat.name, "baseColor": [0.8, 0.8, 0.8], "metallic": 0.0, "roughness": 0.5, "textured": False, "unsupported": [], "alpha": 1.0}
    if mat.use_nodes and mat.node_tree:
        for n in mat.node_tree.nodes:
            if n.type not in SUPPORTED_NODES and n.bl_idname not in ("ShaderNodeOutputMaterial",):
                info["unsupported"].append(n.bl_label or n.type)
            if n.type == "TEX_IMAGE" and n.image:
                info["textured"] = True
        bsdf = next((n for n in mat.node_tree.nodes if n.type == "BSDF_PRINCIPLED"), None)
        if bsdf:
            bc = bsdf.inputs.get("Base Color")
            if bc is not None:
                info["baseColor"] = list(bc.default_value)[:3]
                if bc.is_linked:
                    info["textured"] = True
            for key, name in (("metallic", "Metallic"), ("roughness", "Roughness"), ("alpha", "Alpha")):
                inp = bsdf.inputs.get(name)
                if inp is not None and not inp.is_linked:
                    info[key] = float(inp.default_value)
        elif not info["unsupported"]:
            info["unsupported"].append("Tanpa Principled BSDF")
    else:
        info["baseColor"] = list(mat.diffuse_color)[:3]
        info["metallic"] = float(mat.metallic)
        info["roughness"] = float(mat.roughness)
    info["unsupported"] = sorted(set(info["unsupported"]))
    srgb = [linear_to_srgb(x) for x in info["baseColor"]]
    info["hex"] = hex_color(info["baseColor"])
    info["element"] = color_element(srgb, mat.name)
    info["luminance"] = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
    return info


def mesh_triangles(obj, depsgraph):
    if obj.type != "MESH":
        return 0
    try:
        import numpy as np
        me = obj.evaluated_get(depsgraph).data
        n = len(me.polygons)
        if n == 0:
            return 0
        totals = np.empty(n, dtype=np.int32)
        me.polygons.foreach_get("loop_total", totals)
        return int(totals.sum() - 2 * n)
    except Exception:
        return 0


def geometric_role(dims_b, all_max):
    x, y, z = dims_b
    foot = max(x, y)
    if z < 0.12 * max(foot, 1e-6) and foot > 2.5:
        return "terrain" if foot >= 0.6 * all_max else "floor"
    if z > 1.8 and min(x, y) < 0.45 and foot > 1.2:
        return "wall"
    if z > 3.0 and min(x, y) > 2.0:
        return "building"
    return "prop"


def analyze(context, project_name=None, quick=False):
    t0 = time.time()
    scene = context.scene
    depsgraph = context.evaluated_depsgraph_get()
    view_layer = context.view_layer
    objs = [o for o in scene.objects if o.visible_get(view_layer=view_layer)]
    boxes = {o.name: world_bbox(o, depsgraph) for o in objs}

    def subtree_box(o):
        b = boxes.get(o.name)
        for c in o.children_recursive:
            if c.name in boxes:
                b = union(b, boxes[c.name])
        return b

    all_box = None
    for b in boxes.values():
        all_box = union(all_box, b)
    all_max = max((all_box[1] - all_box[0])[:2]) if all_box else 10.0

    # classify
    roles = {}
    sources = {}
    for o in objs:
        s = obj_settings(o)
        if "role" in s:
            roles[o.name], sources[o.name] = s["role"], "manual"
            continue
        if o.type == "LIGHT":
            roles[o.name], sources[o.name] = "light", "auto"
            continue
        if o.type == "CAMERA":
            roles[o.name], sources[o.name] = "camera", "auto"
            continue
        r = keyword_role(o.name)
        if r is None and o.type == "MESH" and o.data:
            r = keyword_role(o.data.name)
        if r is None and o.type == "ARMATURE":
            child_roles = [keyword_role(c.name) for c in o.children_recursive]
            r = "animal" if "animal" in child_roles else "character"
        if r is None and o.type == "MESH":
            if o.parent and o.parent.type == "ARMATURE" or any(m.type == "ARMATURE" for m in o.modifiers):
                r = "character"
        if r is None and o.type == "EMPTY":
            continue  # plain empties are structure only
        if r is None and boxes.get(o.name):
            mn, mx = boxes[o.name]
            r = geometric_role(tuple(mx - mn), all_max)
        if r:
            roles[o.name], sources[o.name] = r, "auto"

    # actors own their subtree: skip descendants of characters/animals
    actor_roots = {n for n, r in roles.items() if r in ("character", "animal")}
    def under_actor(o):
        p = o.parent
        while p:
            if p.name in actor_roots:
                return True
            p = p.parent
        return False

    materials = {}
    entries = []
    stats = {"objects": 0, "meshes": 0, "triangles": 0, "lights": 0, "cameras": 0, "armatures": 0, "textures": 0, "images_mb": 0.0}
    for o in objs:
        if o.type == "MESH":
            stats["meshes"] += 1
            if not quick:
                stats["triangles"] += mesh_triangles(o, depsgraph)
        if o.type == "ARMATURE":
            stats["armatures"] += 1
        if o.name not in roles or under_actor(o):
            continue
        role = roles[o.name]
        if role in ("light", "camera"):
            stats["lights" if role == "light" else "cameras"] += 1
        box = subtree_box(o) if role in ("character", "animal") or o.type in ("EMPTY", "ARMATURE") else boxes.get(o.name)
        if box is None:
            p = o.matrix_world.translation
            box = (p - Vector((0.05, 0.05, 0.05)), p + Vector((0.05, 0.05, 0.05)))
        mn, mx = box
        dims_b = mx - mn
        ctr_b = (mn + mx) / 2
        mats = []
        holders = [o] + ([c for c in o.children_recursive] if role in ("character", "animal") else [])
        for h in holders:
            for slot in getattr(h, "material_slots", []):
                if slot.material and slot.material.name not in mats:
                    mats.append(slot.material.name)
                    if slot.material.name not in materials:
                        materials[slot.material.name] = material_info(slot.material)
        s = obj_settings(o)
        clips = []
        for h in holders:
            ad = h.animation_data
            if ad:
                if ad.action:
                    clips.append(ad.action.name)
                for tr in ad.nla_tracks:
                    clips += [st.action.name for st in tr.strips if st.action]
        e = {
            "name": o.name, "label": s.get("label") or clean_label(o.name), "type": o.type, "role": role,
            "roleLabel": ROLE_LABELS.get(role, role.title()), "roleSource": sources.get(o.name, "auto"),
            "collection": o.users_collection[0].name if o.users_collection and o.users_collection[0] != scene.collection else "",
            "parent": o.parent.name if o.parent else "",
            "dims": [round(dims_b.x, 3), round(dims_b.z, 3), round(dims_b.y, 3)], "center": to_three(ctr_b),
            "maxDim": round(max(dims_b), 3), "materials": mats[:6],
            "colors": [materials[m]["hex"] for m in mats[:6] if m in materials],
            "clips": sorted(set(clips)),
            "_bmin": list(mn), "_bmax": list(mx),
        }
        for k in ("description", "dialogue", "scientific", "habitat", "diet", "behavior", "collide"):
            if k in s:
                e[k] = s[k]
        if isinstance(e.get("dialogue"), str):
            e["dialogue"] = [x.strip() for x in e["dialogue"].split("|") if x.strip()]
        entries.append(e)
        stats["objects"] += 1

    # relations: nearest notable neighbours (KD-tree)
    notable = [e for e in entries if e["role"] not in ("light", "camera", "floor", "terrain", "wall", "roof")]
    if notable and not quick:
        kd = kdtree.KDTree(len(notable))
        for i, e in enumerate(notable):
            kd.insert(Vector(e["center"]), i)
        kd.balance()
        for e in notable:
            near = [notable[i]["label"] for (_, i, d) in kd.find_n(Vector(e["center"]), 4) if notable[i] is not e and d < max(6.0, e["maxDim"] * 3)]
            e["related"] = near[:3]
    for e in entries:
        if "description" not in e and e["role"] not in ("light", "camera"):
            d = e["dims"]
            txt = f"{e['label']} adalah {e['roleLabel'].lower()} berukuran sekitar {d[0]:.1f} × {d[1]:.1f} × {d[2]:.1f} m"
            if e["materials"]:
                txt += f", memakai material {', '.join(e['materials'][:3])}"
            if e["collection"]:
                txt += f", di koleksi “{e['collection']}”"
            if e.get("related"):
                txt += f". Di dekatnya ada {', '.join(e['related'][:2])}"
            e["descriptionDraft"] = txt + "."

    lights = []
    for o in objs:
        if o.type == "LIGHT":
            lights.append({"name": o.name, "type": o.data.type, "energy": round(float(getattr(o.data, "energy", 0.0)), 3),
                           "color": hex_color(list(o.data.color)), "position": to_three(o.matrix_world.translation)})
    images = set()
    for mat_name in materials:
        mat = bpy.data.materials.get(mat_name)
        if mat and mat.use_nodes and mat.node_tree:
            for n in mat.node_tree.nodes:
                if n.type == "TEX_IMAGE" and n.image:
                    images.add(n.image.name)
                    try:
                        w, h = n.image.size
                        stats["images_mb"] += w * h * 4 / 1_048_576
                    except Exception:
                        pass
    stats["textures"] = len(images)
    stats["images_mb"] = round(stats["images_mb"], 1)
    stats["materials"] = len(materials)

    # environment
    env = {"color": None, "strength": 1.0, "hdri": None, "hdriPath": None}
    w = scene.world
    if w:
        if w.use_nodes and w.node_tree:
            bg = next((n for n in w.node_tree.nodes if n.type == "BACKGROUND"), None)
            if bg:
                env["color"] = [round(x, 4) for x in list(bg.inputs["Color"].default_value)[:3]]
                env["strength"] = float(bg.inputs["Strength"].default_value)
            tex = next((n for n in w.node_tree.nodes if n.type == "TEX_ENVIRONMENT" and n.image), None)
            if tex:
                path = bpy.path.abspath(tex.image.filepath) if tex.image.filepath else ""
                ext = path.rsplit(".", 1)[-1].lower() if "." in path else ""
                if tex.image.packed_file is not None:
                    ext = (tex.image.file_format or "").lower().replace("open_exr", "exr").replace("hdr", "hdr")
                if ext in ("hdr", "exr"):
                    env["hdri"], env["hdriPath"], env["hdriImage"] = ext, path, tex.image.name
        else:
            env["color"] = [round(x, 4) for x in list(w.color)[:3]]

    # collections & animations
    collections = [c.name for c in bpy.data.collections if any(o in objs for o in c.objects)]
    animations = sorted({a for e in entries for a in e["clips"]} | {o.animation_data.action.name for o in objs if o.animation_data and o.animation_data.action})

    # palette (by usage)
    usage = {}
    for e in entries:
        for m in e["materials"]:
            usage[m] = usage.get(m, 0) + max(0.01, e["dims"][0] * e["dims"][2])
    palette = []
    for m, _ in sorted(usage.items(), key=lambda kv: -kv[1]):
        hx = materials[m]["hex"]
        if hx not in palette:
            palette.append(hx)
    complexity = estimate_complexity(stats)
    return {
        "name": project_name or scene.name, "scene": scene.name, "blender": bpy.app.version_string,
        "file": bpy.path.basename(bpy.data.filepath) or "(belum disimpan)",
        "objects": entries, "materials": list(materials.values()), "palette": palette[:10], "lights": lights,
        "cameras": [o.name for o in objs if o.type == "CAMERA"], "animations": animations, "collections": collections,
        "environment": env, "stats": stats, "complexity": complexity, "analysisSeconds": round(time.time() - t0, 3),
        "_objs": objs,
    }


def estimate_complexity(stats):
    tris, mb = stats.get("triangles", 0), stats.get("images_mb", 0)
    score = tris / 250_000 + mb / 256 + stats.get("objects", 0) / 1500
    if score < 0.5:
        return {"level": "Ringan", "note": "Lancar di hampir semua perangkat."}
    if score < 2:
        return {"level": "Sedang", "note": "Lancar di laptop modern; ponsel memakai preset lebih ringan."}
    if score < 5:
        return {"level": "Berat", "note": "Ideal untuk desktop dengan GPU khusus."}
    return {"level": "Sangat berat", "note": "Disarankan mode paket multi-file dan tekstur WebP."}


def quick_overview(context):
    """Cheap counts for the panel (no evaluation)."""
    vl = context.view_layer
    counts = {"MESH": 0, "LIGHT": 0, "CAMERA": 0, "ARMATURE": 0, "OTHER": 0}
    roles = {}
    for o in context.scene.objects:
        if not o.visible_get(view_layer=vl):
            continue
        counts[o.type if o.type in counts else "OTHER"] += 1
        r = (getattr(o, "dreams", None) and o.dreams.role != "AUTO" and o.dreams.role.lower()) or keyword_role(o.name)
        if o.type == "ARMATURE" and not r:
            r = "character"
        if r:
            roles[r] = roles.get(r, 0) + 1
    return counts, roles
