# 100 DREAMS — the one-click automatic pipeline. Every stage runs internally; the user only presses one button.
import json
import os
import shutil
import tempfile
import time

import bpy

from . import analyzer, builder, exporter, fengshui, validator

STAGES = ["Analyzing World", "Preparing Assets", "Building Materials", "Processing Animations", "Constructing World Engine",
          "Creating 100 Games", "Building HTML", "Validating Experience", "Finalizing Website"]


class PipelineError(Exception):
    pass


def resolve_output(settings):
    raw = settings.get("output_dir") or "//100-DREAMS-WORLD"
    if raw.startswith("//") and not bpy.data.filepath:
        base = os.path.join(os.path.expanduser("~"), "100-DREAMS-WORLD")
        raw = os.path.join(base, bpy.path.clean_name(bpy.context.scene.name))
    path = os.path.normpath(os.path.abspath(bpy.path.abspath(raw)))
    home = os.path.normpath(os.path.expanduser("~"))
    blend_dir = os.path.normpath(os.path.dirname(bpy.data.filepath)) if bpy.data.filepath else None
    forbidden = {os.path.abspath(os.sep), home, blend_dir}
    if path in forbidden or len(path) < 4:
        raise PipelineError(f"Folder output tidak aman: {path}. Pilih sub-folder khusus.")
    if os.path.isdir(path) and os.listdir(path) and not os.path.exists(os.path.join(path, builder.MARKER)):
        raise PipelineError(f"Folder {path} sudah berisi file lain. Pilih folder kosong agar tidak ada file yang tertimpa.")
    return path


def run(context, settings):
    """Generator: yields (stage_index, stage_label, detail). Returns result dict via StopIteration.value."""
    t0 = time.time()
    out_dir = resolve_output(settings)
    work = tempfile.mkdtemp(prefix="100dreams_")
    try:
        yield 0, STAGES[0], "Memindai scene"
        data = analyzer.analyze(context, settings.get("project_name") or None)
        objs = data.pop("_objs")
        if not data["objects"]:
            raise PipelineError("Scene tidak berisi objek yang terlihat. Tampilkan objek atau tambahkan model lebih dulu.")

        yield 1, STAGES[1], f"{data['stats']['objects']} objek, {data['stats']['triangles']:,} segitiga"
        notes = exporter.fidelity_notes(data, objs)

        yield 2, STAGES[2], f"{len(data['materials'])} material"
        dg = context.evaluated_depsgraph_get()
        data["fengshui"] = fengshui.analyze(data, context.scene, dg, settings.get("north_known", False), settings.get("north_angle", 0.0))

        yield 3, STAGES[3], f"{len(data['animations'])} animasi"
        glb = os.path.join(work, "world.glb")

        yield 4, STAGES[4], "Mengekspor GLB"
        glb_size = exporter.export_glb(glb, settings)
        env = exporter.export_environment(data["environment"], work) if settings.get("include_hdri", True) else None
        env_path = os.path.join(work, env[0]) if env else None
        if not env:
            data["environment"]["hdri"] = None

        yield 5, STAGES[5], "Mendaftarkan 100 game"
        games_path = os.path.join(builder.WEB, "games.json")
        with open(games_path, encoding="utf-8") as f:
            if len(json.load(f)["games"]) != 100:
                raise PipelineError("Katalog game rusak: jumlahnya bukan 100.")
        data["fidelity"] = notes

        yield 6, STAGES[6], "Merakit HTML"
        mode = builder.choose_mode(settings.get("output_mode", "AUTO"), glb_size, env[1] if env else 0)
        stage = os.path.join(work, "site")
        os.makedirs(stage)
        index = builder.build(stage, data, glb, env_path, mode, settings.get("preset", "cinematic"))

        yield 7, STAGES[7], "Memeriksa hasil"
        result = validator.validate(stage, data, glb, mode, games_path, notes)
        validator.write_report(stage, data, result)

        yield 8, STAGES[8], out_dir
        if os.path.isdir(out_dir):
            shutil.rmtree(out_dir)
        os.makedirs(os.path.dirname(out_dir), exist_ok=True)
        shutil.move(stage, out_dir)
        return {"ok": result["ok"], "out_dir": out_dir, "index": os.path.join(out_dir, "index.html"), "mode": mode,
                "report": os.path.join(out_dir, "report.html"), "summary": result["summary"], "seconds": round(time.time() - t0, 1),
                "checks": result["checks"]}
    finally:
        shutil.rmtree(work, ignore_errors=True)


def run_blocking(context, settings, log=print):
    gen = run(context, settings)
    try:
        while True:
            i, label, detail = next(gen)
            log(f"[{i + 1}/{len(STAGES)}] {label} — {detail}")
    except StopIteration as stop:
        return stop.value
