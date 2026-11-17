# 100 DREAMS — The Infinite Blender-to-HTML Universe Engine
# One click: Blender project in, complete interactive HTML world out.
bl_info = {
    "name": "100 DREAMS",
    "author": "100 DREAMS",
    "version": (1, 0, 0),
    "blender": (4, 2, 0),
    "location": "3D Viewport > Sidebar (N) > 100 DREAMS",
    "description": "Turn any Blender scene into an explorable, cinematic HTML world with 100 playable games",
    "category": "Import-Export",
}

import os
import subprocess
import sys
import traceback
import webbrowser

import bpy
from bpy.props import BoolProperty, EnumProperty, FloatProperty, IntProperty, PointerProperty, StringProperty

from .core import analyzer, pipeline, server

PRESET_ITEMS = [("cinematic", "Cinematic Maximum", ""), ("ultra", "Ultra", ""), ("high", "High", ""), ("balanced", "Balanced", ""), ("performance", "Performance", "")]
MODE_LABEL = {"AUTO": "otomatis", "SINGLE": "satu file HTML", "PACKAGE": "paket multi-file"}
_state = {"gen": None, "timer": None, "overview": None, "result": None}


def _redraw():
    for w in bpy.context.window_manager.windows:
        for a in w.screen.areas:
            if a.type == "VIEW_3D":
                a.tag_redraw()


class DreamsObject(bpy.types.PropertyGroup):
    role: EnumProperty(name="Kategori", items=analyzer.ROLE_ITEMS, default="AUTO")
    label: StringProperty(name="Nama tampilan")
    description: StringProperty(name="Deskripsi")
    dialogue: StringProperty(name="Dialog", description="Kalimat dipisah tanda |")
    scientific: StringProperty(name="Nama ilmiah", description="Isi hanya bila terverifikasi")
    habitat: StringProperty(name="Habitat")
    diet: StringProperty(name="Makanan")
    behavior: EnumProperty(name="Perilaku", items=[("AUTO", "Otomatis", ""), ("IDLE", "Diam", ""), ("ROAM", "Berkeliaran", "")], default="AUTO")
    collide: BoolProperty(name="Bisa ditabrak", default=True)


class DreamsScene(bpy.types.PropertyGroup):
    project_name: StringProperty(name="Nama dunia", description="Kosongkan untuk memakai nama scene")
    output_dir: StringProperty(name="Folder output", subtype="DIR_PATH", default="//100-DREAMS-WORLD")
    output_mode: EnumProperty(name="Bentuk hasil", items=[("AUTO", "Otomatis", "Satu file bila ≤48 MB, selain itu paket"), ("SINGLE", "Satu file HTML", ""), ("PACKAGE", "Paket multi-file", "")], default="AUTO")
    preset: EnumProperty(name="Preset grafis awal", items=PRESET_ITEMS, default="cinematic")
    webp: BoolProperty(name="Kompres tekstur ke WebP", default=False, description="File lebih kecil; kualitas 90")
    include_hdri: BoolProperty(name="Bawa HDRI dunia", default=True)
    north_known: BoolProperty(name="Arah utara diketahui", default=False, description="Aktifkan Compass School Feng Shui")
    north_angle: FloatProperty(name="Utara (°)", description="Arah utara sejati, searah jarum jam dari sumbu +Y Blender", min=0, max=360, default=0)
    open_when_done: BoolProperty(name="Buka otomatis saat selesai", default=True)
    show_advanced: BoolProperty(default=False)
    running: BoolProperty(default=False)
    stage: StringProperty(default="")
    detail: StringProperty(default="")
    progress: FloatProperty(default=0, min=0, max=1)
    last_index: StringProperty(default="")
    last_dir: StringProperty(default="")
    last_mode: StringProperty(default="")
    last_summary: StringProperty(default="")
    last_ok: BoolProperty(default=False)
    last_error: StringProperty(default="")


def settings_of(s):
    return {"project_name": s.project_name.strip(), "output_dir": s.output_dir, "output_mode": s.output_mode, "preset": s.preset,
            "webp": s.webp, "include_hdri": s.include_hdri, "north_known": s.north_known, "north_angle": s.north_angle}


class DREAMS_OT_generate(bpy.types.Operator):
    bl_idname = "dreams.generate"
    bl_label = "GENERATE MY WORLD"
    bl_description = "Analisis, konversi, dan bangun website HTML dunia ini secara otomatis"

    def invoke(self, context, event):
        return self.execute(context)

    def execute(self, context):
        s = context.scene.dreams
        if s.running:
            return {"CANCELLED"}
        if context.mode != "OBJECT":
            bpy.ops.object.mode_set(mode="OBJECT")
        s.running, s.last_error, s.last_index, s.progress = True, "", "", 0
        try:
            _state["gen"] = pipeline.run(context, settings_of(s))
        except pipeline.PipelineError as e:
            s.running, s.last_error = False, str(e)
            self.report({"ERROR"}, str(e))
            return {"CANCELLED"}
        if bpy.app.background:
            res = pipeline.run_blocking(context, settings_of(s))
            self._finish(context, res)
            return {"FINISHED"}
        wm = context.window_manager
        _state["timer"] = wm.event_timer_add(0.05, window=context.window)
        wm.modal_handler_add(self)
        return {"RUNNING_MODAL"}

    def modal(self, context, event):
        s = context.scene.dreams
        if event.type == "ESC":
            return self._stop(context, "Dibatalkan.")
        if event.type != "TIMER":
            return {"PASS_THROUGH"}
        try:
            i, label, detail = next(_state["gen"])
            s.stage, s.detail, s.progress = label, str(detail), (i + 1) / len(pipeline.STAGES)
            _redraw()
            return {"RUNNING_MODAL"}
        except StopIteration as stop:
            self._finish(context, stop.value)
            return {"FINISHED"}
        except Exception as e:
            traceback.print_exc()
            return self._stop(context, str(e))

    def _finish(self, context, res):
        s = context.scene.dreams
        self._clear(context)
        s.running, s.progress, s.stage = False, 1, "YOUR WORLD IS READY."
        s.last_index, s.last_dir, s.last_mode, s.last_ok = res["index"], res["out_dir"], res["mode"], res["ok"]
        sm = res["summary"]
        s.last_summary = f"{sm['ok']} berhasil, {sm['limited']} terbatas, {sm['attention']} perlu dicek, {sm['fail']} gagal · {res['seconds']} dtk"
        _state["result"] = res
        self.report({"INFO"} if res["ok"] else {"WARNING"}, f"100 DREAMS: {s.last_summary}")
        if s.open_when_done and not bpy.app.background:
            bpy.ops.dreams.open_world()
        _redraw()

    def _stop(self, context, msg):
        s = context.scene.dreams
        self._clear(context)
        try:
            _state["gen"].close()
        except Exception:
            pass
        s.running, s.last_error, s.stage = False, msg, ""
        self.report({"ERROR"}, f"100 DREAMS: {msg}")
        _redraw()
        return {"CANCELLED"}

    def _clear(self, context):
        if _state["timer"]:
            context.window_manager.event_timer_remove(_state["timer"])
            _state["timer"] = None


class DREAMS_OT_open_world(bpy.types.Operator):
    bl_idname = "dreams.open_world"
    bl_label = "OPEN HTML WORLD"
    bl_description = "Buka website hasil di browser"

    @classmethod
    def poll(cls, context):
        return os.path.isfile(context.scene.dreams.last_index)

    def execute(self, context):
        s = context.scene.dreams
        if s.last_mode == "package":
            url = server.serve(s.last_dir) + "index.html"
        else:
            url = "file:///" + s.last_index.replace(os.sep, "/").lstrip("/")
        webbrowser.open(url)
        return {"FINISHED"}


class DREAMS_OT_open_folder(bpy.types.Operator):
    bl_idname = "dreams.open_folder"
    bl_label = "OPEN OUTPUT FOLDER"

    @classmethod
    def poll(cls, context):
        return os.path.isdir(context.scene.dreams.last_dir)

    def execute(self, context):
        p = context.scene.dreams.last_dir
        if sys.platform.startswith("win"):
            os.startfile(p)
        elif sys.platform == "darwin":
            subprocess.Popen(["open", p])
        else:
            subprocess.Popen(["xdg-open", p])
        return {"FINISHED"}


class DREAMS_OT_open_report(bpy.types.Operator):
    bl_idname = "dreams.open_report"
    bl_label = "Lihat laporan uji"

    @classmethod
    def poll(cls, context):
        return os.path.isfile(os.path.join(context.scene.dreams.last_dir, "report.html"))

    def execute(self, context):
        webbrowser.open("file:///" + os.path.join(context.scene.dreams.last_dir, "report.html").replace(os.sep, "/").lstrip("/"))
        return {"FINISHED"}


class DREAMS_OT_refresh(bpy.types.Operator):
    bl_idname = "dreams.refresh"
    bl_label = "Pindai ulang"
    bl_description = "Perbarui ringkasan scene"

    def execute(self, context):
        _state["overview"] = None
        _redraw()
        return {"FINISHED"}


def overview(context):
    key = (len(context.scene.objects), context.scene.name)
    ov = _state["overview"]
    if ov is None or ov[0] != key:
        counts, roles = analyzer.quick_overview(context)
        _state["overview"] = (key, counts, roles)
    return _state["overview"][1:]


def overview_tris(context):
    key = ("tris", len(context.scene.objects))
    if _state.get("tris_key") != key:
        _state["tris_key"] = key
        _state["tris"] = sum(len(o.data.polygons) for o in context.scene.objects if o.type == "MESH" and o.data) if len(context.scene.objects) < 5000 else 0
    return _state["tris"]


class DREAMS_PT_main(bpy.types.Panel):
    bl_label = "100 DREAMS"
    bl_idname = "DREAMS_PT_main"
    bl_space_type = "VIEW_3D"
    bl_region_type = "UI"
    bl_category = "100 DREAMS"

    def draw(self, context):
        s = context.scene.dreams
        L = self.layout
        L.prop(s, "project_name", text="Dunia")
        counts, roles = overview(context)
        box = L.box()
        row = box.row(); row.label(text="Ringkasan scene", icon="SCENE_DATA"); row.operator("dreams.refresh", text="", icon="FILE_REFRESH", emboss=False)
        col = box.column(align=True)
        col.label(text=f"{counts['MESH']} mesh · {counts['LIGHT']} lampu · {counts['CAMERA']} kamera · {counts['ARMATURE']} rig")
        main = [(k, roles[k]) for k in ("character", "animal", "furniture", "door", "plant", "building") if roles.get(k)]
        col.label(text=" · ".join(f"{v} {analyzer.ROLE_LABELS[k].lower()}" for k, v in main) or "Kategori dikenali saat generate")
        tris = overview_tris(context)
        level = analyzer.estimate_complexity({"triangles": tris * 2, "objects": counts["MESH"], "images_mb": 0})
        col.label(text=f"Kompleksitas: {level['level']}", icon="MEMORY")
        out = L.box().column(align=True)
        out.label(text="Hasil", icon="WORLD")
        out.label(text=f"{s.output_dir} · {MODE_LABEL[s.output_mode]}")
        L.separator()
        if s.running:
            if hasattr(L, "progress"):
                L.progress(factor=s.progress, type="BAR", text=s.stage)
            else:
                L.label(text=f"{int(s.progress * 100)}% · {s.stage}")
            L.label(text=s.detail[:60])
            L.label(text="Esc untuk membatalkan", icon="INFO")
        else:
            r = L.row(); r.scale_y = 2.4
            r.operator("dreams.generate", icon="PLAY")
        if s.last_error:
            b = L.box(); b.alert = True
            for line in [s.last_error[i:i + 48] for i in range(0, min(len(s.last_error), 240), 48)]:
                b.label(text=line)
        if s.last_index and not s.running:
            b = L.box()
            b.label(text="YOUR WORLD IS READY." if s.last_ok else "Dunia jadi, tapi ada pemeriksaan gagal.", icon="CHECKMARK" if s.last_ok else "ERROR")
            b.label(text=s.last_summary)
            c = b.column(align=True); c.scale_y = 1.3
            c.operator("dreams.open_world", icon="URL")
            c.operator("dreams.open_folder", icon="FILE_FOLDER")
            c.operator("dreams.generate", text="REGENERATE WORLD", icon="FILE_REFRESH")
            b.operator("dreams.open_report", icon="TEXT")


class DREAMS_PT_advanced(bpy.types.Panel):
    bl_label = "Lanjutan (opsional)"
    bl_parent_id = "DREAMS_PT_main"
    bl_space_type = "VIEW_3D"
    bl_region_type = "UI"
    bl_category = "100 DREAMS"
    bl_options = {"DEFAULT_CLOSED"}

    def draw(self, context):
        s = context.scene.dreams
        L = self.layout; L.use_property_split = True
        L.prop(s, "output_dir"); L.prop(s, "output_mode"); L.prop(s, "preset"); L.prop(s, "webp"); L.prop(s, "include_hdri"); L.prop(s, "open_when_done")
        L.separator(); L.label(text="Feng Shui")
        L.prop(s, "north_known")
        r = L.row(); r.enabled = s.north_known; r.prop(s, "north_angle")


class DREAMS_PT_object(bpy.types.Panel):
    bl_label = "Object Override"
    bl_parent_id = "DREAMS_PT_main"
    bl_space_type = "VIEW_3D"
    bl_region_type = "UI"
    bl_category = "100 DREAMS"
    bl_options = {"DEFAULT_CLOSED"}

    @classmethod
    def poll(cls, context):
        return context.active_object is not None

    def draw(self, context):
        o = context.active_object
        d = o.dreams
        L = self.layout; L.use_property_split = True
        auto = analyzer.keyword_role(o.name)
        L.label(text=f"{o.name} · dikenali sebagai {analyzer.ROLE_LABELS.get(auto, 'otomatis saat generate') if auto else 'otomatis saat generate'}")
        L.prop(d, "role"); L.prop(d, "label"); L.prop(d, "description"); L.prop(d, "collide")
        if d.role in ("CHARACTER", "ANIMAL") or auto in ("character", "animal"):
            L.prop(d, "behavior"); L.prop(d, "dialogue")
        if d.role == "ANIMAL" or auto == "animal":
            L.prop(d, "scientific"); L.prop(d, "habitat"); L.prop(d, "diet")


classes = (DreamsObject, DreamsScene, DREAMS_OT_generate, DREAMS_OT_open_world, DREAMS_OT_open_folder, DREAMS_OT_open_report,
           DREAMS_OT_refresh, DREAMS_PT_main, DREAMS_PT_advanced, DREAMS_PT_object)


def register():
    for c in classes:
        bpy.utils.register_class(c)
    bpy.types.Object.dreams = PointerProperty(type=DreamsObject)
    bpy.types.Scene.dreams = PointerProperty(type=DreamsScene)


def unregister():
    server.stop_all()
    del bpy.types.Scene.dreams
    del bpy.types.Object.dreams
    for c in reversed(classes):
        bpy.utils.unregister_class(c)


def generate_cli(output_dir=None):
    """Headless: blender -b scene.blend --python-expr "import hundred_dreams as d; d.generate_cli('/out')" """
    s = bpy.context.scene.dreams
    if output_dir:
        s.output_dir = output_dir
    s.open_when_done = False
    res = pipeline.run_blocking(bpy.context, settings_of(s))
    print("100 DREAMS:", res["index"], res["summary"])
    return res
