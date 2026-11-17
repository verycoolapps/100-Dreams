# 100 DREAMS — Feng Shui Intelligence (analysis only; never modifies the scene)
# Form School for layout, Compass School (Later Heaven bagua) when true north is known,
# otherwise the Western BTB bagua aligned to the main door, always labelled as such.
import math

from mathutils import Vector

COMPASS = {  # direction -> (trigram, life area, element, colour)
    "N": ("Kan", "Karier", "Air", "#2f5fbf"), "NE": ("Gen", "Pengetahuan", "Tanah", "#b08a4a"),
    "E": ("Zhen", "Keluarga", "Kayu", "#4f9a5a"), "SE": ("Xun", "Kekayaan", "Kayu", "#3f8f6a"),
    "S": ("Li", "Ketenaran", "Api", "#d0583a"), "SW": ("Kun", "Hubungan", "Tanah", "#c99a5a"),
    "W": ("Dui", "Kreativitas", "Logam", "#c8ccd8"), "NW": ("Qian", "Penolong", "Logam", "#9aa2b8"),
}
DIR_ID = {"N": "Utara", "NE": "Timur laut", "E": "Timur", "SE": "Tenggara", "S": "Selatan", "SW": "Barat daya", "W": "Barat", "NW": "Barat laut"}
BTB = {  # (row from door 0..2, col left..right 0..2) -> (area, element, colour)
    (0, 0): ("Pengetahuan", "Tanah", "#b08a4a"), (0, 1): ("Karier", "Air", "#2f5fbf"), (0, 2): ("Penolong", "Logam", "#9aa2b8"),
    (1, 0): ("Keluarga", "Kayu", "#4f9a5a"), (1, 1): ("Tai Qi", "Tanah", "#f2c46d"), (1, 2): ("Kreativitas", "Logam", "#c8ccd8"),
    (2, 0): ("Kekayaan", "Kayu", "#7a4fbf"), (2, 1): ("Ketenaran", "Api", "#d0583a"), (2, 2): ("Hubungan", "Tanah", "#d98aa0"),
}
CONTROLS = {"Kayu": "Tanah", "Tanah": "Air", "Air": "Api", "Api": "Logam", "Logam": "Kayu"}  # X controls Y
SUPPORT = {"Air": "Kayu", "Kayu": "Api", "Api": "Tanah", "Tanah": "Logam", "Logam": "Air"}   # X produces Y
ELEMENT_HINT = {"Kayu": "tanaman hidup atau material kayu", "Api": "aksen merah atau jingga dan cahaya hangat", "Tanah": "keramik, batu, atau warna tanah",
                "Logam": "aksen logam atau warna putih dan abu-abu", "Air": "elemen air, kaca, atau warna biru tua"}
STRUCT = {"wall", "floor", "roof", "terrain", "building", "door", "window", "stairs"}


def _dir_from_bearing(b):
    names = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
    return names[int(((b % 360) + 22.5) // 45) % 8]


def analyze(data, scene, depsgraph, north_known=False, north_angle=0.0):
    objs = [o for o in data["objects"] if o["role"] not in ("light", "camera")]
    findings = []
    add = lambda p, t, title, text: findings.append({"priority": p, "type": t, "title": title, "text": text})

    plan = [o for o in objs if o["role"] in ("wall", "floor", "building", "furniture", "door", "window", "stairs", "roof")] or objs
    if not plan:
        return {"summary": "Scene kosong, belum ada yang bisa dianalisis.", "findings": [], "method": "—"}
    xs = [o["_bmin"][0] for o in plan] + [o["_bmax"][0] for o in plan]
    ys = [o["_bmin"][1] for o in plan] + [o["_bmax"][1] for o in plan]
    bmin, bmax = Vector((min(xs), min(ys))), Vector((max(xs), max(ys)))
    size = bmax - bmin
    center = (bmin + bmax) / 2
    area = max(0.01, size.x * size.y)

    doors = [o for o in objs if o["role"] == "door"]
    main_door = None
    if doors:
        named = [d for d in doors if any(k in d["name"].lower() for k in ("main", "front", "utama", "depan", "entrance", "masuk"))]
        def edge_dist(d):
            c = Vector(((d["_bmin"][0] + d["_bmax"][0]) / 2, (d["_bmin"][1] + d["_bmax"][1]) / 2))
            return min(c.x - bmin.x, bmax.x - c.x, c.y - bmin.y, bmax.y - c.y)
        main_door = (named or sorted(doors, key=edge_dist))[0]

    # ---- bagua grid (3×3 over the floor plan) ----
    cells = []
    cw, ch = size.x / 3, size.y / 3
    if north_known:
        method = f"Form School untuk tata ruang, ditambah Compass School (bagua Later Heaven) dengan utara sejati {north_angle:.0f}° searah jarum jam dari sumbu +Y Blender."
        school = "compass"
    elif main_door:
        method = f"Form School untuk tata ruang, ditambah bagua BTB (Barat) yang disejajarkan dengan pintu utama “{main_door['label']}”, karena arah utara belum diatur. BTB berbeda dari Compass School."
        school = "btb"
    else:
        method = "Form School, ditambah bagua BTB dengan asumsi pintu depan di sisi −Y Blender (pintu tidak terdeteksi, arah utara belum diatur)."
        school = "btb-assumed"
    if school != "compass":
        if main_door:
            dc = Vector(((main_door["_bmin"][0] + main_door["_bmax"][0]) / 2, (main_door["_bmin"][1] + main_door["_bmax"][1]) / 2))
            d = {"-y": dc.y - bmin.y, "+y": bmax.y - dc.y, "-x": dc.x - bmin.x, "+x": bmax.x - dc.x}
            side = min(d, key=d.get)
        else:
            side = "-y"
        fwd = {"-y": Vector((0, 1)), "+y": Vector((0, -1)), "-x": Vector((1, 0)), "+x": Vector((-1, 0))}[side]
        right = Vector((fwd.y, -fwd.x))
    by_cell = {}
    for r in range(3):
        for c in range(3):
            cx, cy = bmin.x + cw * (c + 0.5), bmin.y + ch * (2 - r + 0.5)  # r=0 is the +Y (far) row in Blender
            off = Vector((cx, cy)) - center
            if r == 1 and c == 1:
                label, sub, color, element, key = "Tai Qi", "Pusat · Tanah", "#f2c46d", "Tanah", "C"
            elif school == "compass":
                bearing = math.degrees(math.atan2(off.x, off.y)) - north_angle
                key = _dir_from_bearing(bearing)
                tri, area_name, element, color = COMPASS[key]
                label, sub = area_name, f"{DIR_ID[key]} · {tri} · {element}"
            else:
                along, lat = off.dot(fwd), off.dot(right)
                half_a = (size.y if abs(fwd.y) > 0 else size.x) / 2
                half_l = (size.x if abs(fwd.y) > 0 else size.y) / 2
                an, ln = along / max(half_a, 1e-6), lat / max(half_l, 1e-6)
                row = 0 if an < -1 / 3 else (2 if an > 1 / 3 else 1)
                col = 0 if ln < -1 / 3 else (2 if ln > 1 / 3 else 1)
                label, element, color = BTB[(row, col)]
                key = f"{row}{col}"
                sub = f"{['Dekat pintu', 'Tengah', 'Jauh dari pintu'][row]} · {element}"
            # three.js coords: x = blender x, z = -blender y; grid rows in three go from min z (= max blender y)
            cells.append({"row": r, "col": c, "label": label, "sub": sub, "color": color, "element": element, "key": key})
            by_cell[(r, c)] = {"label": label, "element": element, "objects": []}

    def cell_of(o):
        cx = (o["_bmin"][0] + o["_bmax"][0]) / 2
        cy = (o["_bmin"][1] + o["_bmax"][1]) / 2
        c = min(2, max(0, int((cx - bmin.x) / max(cw, 1e-6))))
        r = 2 - min(2, max(0, int((cy - bmin.y) / max(ch, 1e-6))))
        return r, c

    mats = {m["name"]: m for m in data["materials"]}
    furn = [o for o in objs if o["role"] not in STRUCT]
    for o in furn:
        by_cell[cell_of(o)]["objects"].append(o)

    # ---- five elements from materials (weighted by visible footprint) ----
    weights = {"Kayu": 0.0, "Api": 0.0, "Tanah": 0.0, "Logam": 0.0, "Air": 0.0}
    def inside(o):
        cx, cy = (o["_bmin"][0] + o["_bmax"][0]) / 2, (o["_bmin"][1] + o["_bmax"][1]) / 2
        return bmin.x - 0.5 <= cx <= bmax.x + 0.5 and bmin.y - 0.5 <= cy <= bmax.y + 0.5 and o["role"] not in ("terrain",)
    for o in [x for x in objs if inside(x)]:
        w = max(0.02, o["dims"][0] * o["dims"][2] + o["dims"][1] * max(o["dims"][0], o["dims"][2]) * 0.5)
        ms = [mats[m] for m in o["materials"] if m in mats]
        for m in ms:
            weights[m["element"]] += w / len(ms)
    tot = sum(weights.values()) or 1
    elements = {k: round(v / tot, 3) for k, v in weights.items()}
    dominant = max(elements, key=elements.get) if tot > 0 else None
    if sum(weights.values()) == 0:
        dominant = None
        add("P4", "tradition", "Unsur belum terbaca", "Objek belum memakai material, jadi pembacaan lima unsur tidak dapat dilakukan.")
    else:
        for el, v in elements.items():
            if v < 0.04:
                add("P4", "tradition", f"Unsur {el} hampir tidak ada", f"Secara tradisi, keseimbangan lima unsur dianggap mendukung. Bisa ditambahkan {ELEMENT_HINT[el]}.")
        if elements[dominant] > 0.6:
            add("P3", "tradition", f"Unsur {dominant} sangat dominan ({round(elements[dominant] * 100)}%)", f"Unsur {SUPPORT[dominant]} secara tradisi dipakai untuk menyalurkan unsur {dominant} yang berlebih, misalnya {ELEMENT_HINT[SUPPORT[dominant]]}.")

    # ---- sector element conflicts (tradition) ----
    for (r, c), cell in by_cell.items():
        if not cell["objects"] or (r, c) == (1, 1):
            continue
        w2 = {}
        for o in cell["objects"]:
            for m in o["materials"]:
                if m in mats:
                    w2[mats[m]["element"]] = w2.get(mats[m]["element"], 0) + o["dims"][0] * o["dims"][2]
        if not w2:
            continue
        de = max(w2, key=w2.get)
        if CONTROLS.get(de) == cell["element"]:
            add("P3", "tradition", f"Sektor {cell['label']}: unsur {de} menekan unsur {cell['element']}",
                f"Benda dominan di sektor ini ({', '.join(o['label'] for o in cell['objects'][:3])}) berunsur {de}. Dalam siklus pengendalian, {de} menekan {cell['element']}. Secara tradisi, aksen berupa {ELEMENT_HINT[cell['element']]} dipakai untuk memperkuat sektor ini.")

    # ---- Tai Qi centre ----
    centre_objs = by_cell[(1, 1)]["objects"]
    big = [o for o in centre_objs if o["dims"][0] * o["dims"][2] > 1.2]
    taiqi = {"clear": not big and len(centre_objs) < 3, "count": len(centre_objs)}
    if taiqi["clear"]:
        add("P4", "tradition", "Pusat ruang (Tai Qi) lapang", "Pusat yang lapang secara tradisi dianggap baik untuk sirkulasi energi. Pertahankan.")
    else:
        add("P2", "tradition", "Pusat ruang (Tai Qi) terisi", f"Terdapat {', '.join(o['label'] for o in (big or centre_objs)[:4])} di pusat denah. Tradisi menyarankan pusat yang lapang dan terang.")

    # ---- main door, circulation, alignment ----
    door_info = None
    if main_door:
        r, c = cell_of(main_door)
        door_info = {"name": main_door["label"], "sector": by_cell[(r, c)]["label"]}
        dc = Vector(((main_door["_bmin"][0] + main_door["_bmax"][0]) / 2, (main_door["_bmin"][1] + main_door["_bmax"][1]) / 2))
        blockers = []
        for o in furn:
            if o["role"] in ("plant",) and o["dims"][1] < 0.6:
                continue
            for t in [i / 12 for i in range(1, 12)]:
                p = dc.lerp(center, t)
                if o["_bmin"][0] - 0.2 <= p.x <= o["_bmax"][0] + 0.2 and o["_bmin"][1] - 0.2 <= p.y <= o["_bmax"][1] + 0.2:
                    blockers.append(o["label"])
                    break
        if blockers:
            add("P2", "objective", "Jalur dari pintu utama ke pusat terhalang", f"{', '.join(sorted(set(blockers))[:4])} berada di jalur langsung dari pintu ke pusat ruang. Sirkulasi yang lega memudahkan orang bergerak; dalam tradisi, ini juga jalur masuknya Qi.")
        else:
            add("P4", "objective", "Jalur masuk lega", f"Jalur dari {main_door['label']} ke pusat ruang tidak terhalang perabot.")
        others = [d for d in doors if d is not main_door]
        for d in others:
            oc = Vector(((d["_bmin"][0] + d["_bmax"][0]) / 2, (d["_bmin"][1] + d["_bmax"][1]) / 2))
            v = oc - dc
            if v.length > 2 and (abs(v.x) < 0.5 or abs(v.y) < 0.5) and v.length > 0.7 * max(size.x, size.y):
                add("P3", "tradition", f"Pintu {main_door['label']} segaris dengan {d['label']}", "Dua pintu yang berhadapan lurus secara tradisi dianggap membuat energi “lewat” terlalu cepat. Penyekat rendah, tanaman, atau karpet dapat memperlambat alurnya.")
                break
        for s in [o for o in objs if o["role"] == "stairs"]:
            sc = Vector(((s["_bmin"][0] + s["_bmax"][0]) / 2, (s["_bmin"][1] + s["_bmax"][1]) / 2))
            if (sc - dc).length < 3.0:
                add("P3", "tradition", "Tangga dekat pintu utama", f"{s['label']} berada kurang dari 3 m dari pintu utama. Tradisi menganggap energi masuk langsung “turun” lewat tangga; batas visual seperti karpet atau tanaman sering dipakai.")
                break
        # command position: line of sight from bed/desk/sofa to the door, and direct door alignment
        for o in furn:
            if not any(k in o["name"].lower() for k in ("bed", "desk", "sofa", "couch", "kasur", "ranjang", "meja kerja", "office", "armchair")):
                continue
            oc = Vector(((o["_bmin"][0] + o["_bmax"][0]) / 2, (o["_bmin"][1] + o["_bmax"][1]) / 2))
            v = oc - dc
            aligned = (abs(v.x) < 0.6 or abs(v.y) < 0.6) and v.length < 5
            seen = True
            if scene is not None and depsgraph is not None:
                origin = Vector((oc.x, oc.y, o["_bmax"][2] + 0.3))
                target = Vector((dc.x, dc.y, main_door["_bmin"][2] + 1.2))
                dirv = target - origin
                hit, loc, *_ = scene.ray_cast(depsgraph, origin, dirv.normalized(), distance=max(0.01, dirv.length - 0.4))
                seen = not hit
            if aligned:
                add("P2", "tradition", f"{o['label']} segaris langsung dengan pintu", "Posisi komando menyarankan perabot utama menghadap pintu dari arah diagonal, bukan tepat segaris dengannya.")
            elif not seen:
                add("P3", "tradition", f"{o['label']} tidak melihat pintu utama", "Dari posisi ini pintu utama tertutup objek lain. Prinsip posisi komando menyarankan pintu terlihat dari perabot utama.")
    else:
        add("P2", "objective", "Pintu utama tidak terdeteksi", "Beri nama objek pintu dengan kata “door” atau “pintu”, atau setel kategorinya di panel Object Override, agar analisis pintu dan bagua BTB akurat.")

    # ---- light, windows, yin-yang ----
    windows = [o for o in objs if o["role"] == "window"]
    lights = data.get("lights", [])
    energy = sum(l["energy"] for l in lights if l["type"] != "SUN")
    suns = [l for l in lights if l["type"] == "SUN"]
    lum_w = [(mats[m]["luminance"], o["dims"][0] * o["dims"][2] + 0.01) for o in objs for m in o["materials"] if m in mats]
    lum = sum(a * b for a, b in lum_w) / max(1e-6, sum(b for _, b in lum_w)) if lum_w else 0.5
    light_density = energy / area
    yang_score = lum + (0.25 if suns else 0) + min(0.3, light_density / 100) + min(0.15, len(windows) * 0.03)
    verdict = "Condong Yang (terang)" if yang_score > 0.85 else ("Condong Yin (redup)" if yang_score < 0.5 else "Seimbang")
    yinyang = {"verdict": verdict, "detail": f"Kecerahan rata-rata material {round(lum * 100)}%, {len(lights)} lampu ({'ada' if suns else 'tanpa'} matahari), {len(windows)} jendela, kepadatan cahaya {light_density:.0f} W/m²."}
    if not windows and not suns:
        add("P2", "objective", "Tidak ada jendela maupun cahaya matahari", "Cahaya alami dan ventilasi adalah faktor kenyamanan yang terukur. Jika ini bangunan sungguhan, tambahkan bukaan; di dunia virtual, lampu matahari memberi bayangan yang lebih hidup.")
    elif len(windows) < max(1, area / 40) and area > 30:
        add("P3", "objective", "Bukaan jendela terbatas", f"{len(windows)} jendela untuk tapak sekitar {area:.0f} m². Pencahayaan alami dan sirkulasi udara mungkin kurang merata.")
    if verdict.startswith("Condong Yin"):
        add("P3", "tradition", "Ruang cenderung Yin", "Ruang terasa redup. Tradisi menyeimbangkan dengan cahaya lebih hangat atau warna terang.")
    elif verdict.startswith("Condong Yang") and yang_score > 1.1:
        add("P4", "tradition", "Ruang sangat Yang", "Ruang sangat terang. Area istirahat bisa diberi material lembut atau warna lebih teduh.")

    # ---- clutter / density ----
    density = len(furn) / area
    if density > 0.5 and area > 6:
        add("P3", "objective", "Kepadatan objek tinggi", f"Sekitar {density:.1f} objek per m². Area lapang memudahkan pergerakan; dalam tradisi, kerapian dianggap melancarkan Qi.")

    if not north_known:
        add("P4", "tradition", "Arah utara belum diatur", "Compass School tidak dihitung karena arah utara sejati tidak diketahui. Atur di panel 100 DREAMS > Lanjutan bila arah bangunan nyata diketahui. 100 DREAMS tidak menebak arah mata angin.")

    order = {"P1": 0, "P2": 1, "P3": 2, "P4": 3}
    findings.sort(key=lambda f: order[f["priority"]])
    p2 = sum(1 for f in findings if f["priority"] in ("P1", "P2"))
    summary = (f"Tapak sekitar {size.x:.1f} × {size.y:.1f} m. Unsur dominan {dominant or 'belum terbaca'}, {verdict.lower()}. "
               f"{p2} temuan penting dan {len(findings) - p2} saran tambahan.")

    tmin, tmax = [bmin.x, -bmax.y], [bmax.x, -bmin.y]
    return {
        "summary": summary, "method": method, "school": school, "north": {"known": bool(north_known), "angle": north_angle},
        "grid": {"min": tmin, "max": tmax, "cells": cells}, "elements": elements, "dominant": dominant, "yinyang": yinyang,
        "taiqi": taiqi, "door": door_info, "findings": findings,
        "sectors": [{"label": v["label"], "objects": [o["label"] for o in v["objects"]][:8]} for v in by_cell.values()],
    }
