// Enhanced map visualization modes for 100 Dreams
// Switch between top-down, isometric, floor plan views

import * as THREE from 'three';
import { el } from './util.js';

const bandY = (y) => Math.round(y / 3.2);

export class EnhancedMapView {
  constructor(mapView, ui) {
    this.mapView = mapView;
    this.ui = ui;
    this.app = ui.app;
    this.viewMode = 'topdown'; // 'topdown', 'isometric', 'floorplan'
    this.showRoomLabels = true;
    this.showRoomOutlines = true;
  }

  // ========== ISOMETRIC VIEW ==========
  // Perspective view yang lebih visual - shows depth & layering
  renderIsometric(canvas, level) {
    if (!level) return this.renderTopdown(canvas, level);

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const data = this.app.data;
    const rooms = this.mapView.ui.roomDetector?.rooms || [];

    ctx.fillStyle = '#15183a';
    ctx.fillRect(0, 0, w, h);

    const objects = (data.objects || []).filter(o => {
      if (['light', 'camera', 'roof'].includes(o.role)) return false;
      const baseY = o.center[1] - o.dims[1] / 2;
      return level.bands.has(bandY(baseY));
    });

    // Isometric projection constants
    const scale = 1.5;
    const angle = Math.PI / 6; // 30 degrees
    const centerX = w / 2;
    const centerY = h / 2;

    const toIso = (x, z, y = 0) => {
      // Isometric transformation with slight 3D effect
      const ix = (x - z) * Math.cos(angle) * scale;
      const iy = (x + z) * Math.sin(angle) * scale - y * 0.8;
      return [centerX + ix, centerY + iy];
    };

    // Draw room blocks with 3D effect
    const rooms_on_level = rooms.filter(r => r.levelIndex === level.index);
    for (const room of rooms_on_level) {
      const bounds = room.bounds;

      // Room base (top face in isometric)
      const corners = [
        [bounds.min.x, bounds.min.z],
        [bounds.max.x, bounds.min.z],
        [bounds.max.x, bounds.max.z],
        [bounds.min.x, bounds.max.z],
      ];

      const isoCorners = corners.map(([x, z]) => toIso(x, z, 0));

      // Fill room with semi-transparent color
      const roomColor = this.getRoomColor(room.type);
      ctx.fillStyle = roomColor;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(...isoCorners[0]);
      for (let i = 1; i < isoCorners.length; i++) {
        ctx.lineTo(...isoCorners[i]);
      }
      ctx.closePath();
      ctx.fill();

      // Draw 3D sides (fake depth)
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = roomColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Label
      if (this.showRoomLabels) {
        const centerIso = toIso(room.center.x, room.center.z, 0);
        this.drawRoomLabel(ctx, centerIso[0], centerIso[1], room);
      }
    }

    ctx.globalAlpha = 1;

    // Draw player position
    const p = this.app.player.pos;
    const [px, py] = toIso(p.x, p.z, 0);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(px, py, 8, 0, 7);
    ctx.fill();
  }

  // ========== FLOOR PLAN VIEW ==========
  // Schematic architectural view - clean, readable, shows walls
  renderFloorPlan(canvas, level) {
    if (!level) return this.renderTopdown(canvas, level);

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const data = this.app.data;
    const rooms = this.mapView.ui.roomDetector?.rooms || [];

    // Schematic background (white/light)
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < w; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
    }
    for (let i = 0; i < h; i += 20) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }

    const v = this.mapView.viewFor(w);

    // Draw walls (dark lines)
    const walls = (data.objects || []).filter(o => o.role === 'wall').filter(o => {
      const baseY = o.center[1] - o.dims[1] / 2;
      return level.bands.has(bandY(baseY));
    });

    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    for (const wall of walls) {
      const [x1, y1] = v.toPx(wall.center[0] - wall.dims[0]/2, wall.center[2] - wall.dims[2]/2);
      const [x2, y2] = v.toPx(wall.center[0] + wall.dims[0]/2, wall.center[2] + wall.dims[2]/2);
      ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
    }

    // Draw rooms (colored areas)
    const rooms_on_level = rooms.filter(r => r.levelIndex === level.index);
    for (const room of rooms_on_level) {
      const bounds = room.bounds;
      const [x, y] = v.toPx(bounds.min.x, bounds.min.z);
      const [x2, y2] = v.toPx(bounds.max.x, bounds.max.z);
      const roomW = x2 - x;
      const roomH = y2 - y;

      // Room fill (light color)
      ctx.fillStyle = this.getRoomColor(room.type);
      ctx.globalAlpha = 0.3;
      ctx.fillRect(x, y, roomW, roomH);

      // Room outline
      ctx.strokeStyle = this.getRoomColor(room.type);
      ctx.lineWidth = 2;
      ctx.globalAlpha = 1;
      ctx.strokeRect(x, y, roomW, roomH);

      // Room label (prominent)
      if (this.showRoomLabels && roomW > 40 && roomH > 30) {
        this.drawRoomLabelFloorPlan(ctx, x + roomW/2, y + roomH/2, room);
      }
    }

    // Draw doors (small lines on walls)
    const doors = (data.objects || []).filter(o => o.role === 'door').filter(o => {
      const baseY = o.center[1] - o.dims[1] / 2;
      return level.bands.has(bandY(baseY));
    });

    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    for (const door of doors) {
      const [dx, dy] = v.toPx(door.center[0], door.center[2]);
      ctx.beginPath();
      ctx.arc(dx, dy, 4, 0, 7);
      ctx.stroke();
    }

    // Draw stairs
    const stairs = (data.objects || []).filter(o => o.role === 'stairs').filter(o => {
      const baseY = o.center[1] - o.dims[1] / 2;
      return level.bands.has(bandY(baseY));
    });

    ctx.fillStyle = '#ffa500';
    for (const stair of stairs) {
      const [sx, sy] = v.toPx(stair.center[0], stair.center[2]);
      ctx.fillRect(sx - 3, sy - 3, 6, 6);
    }

    // Legend
    ctx.fillStyle = '#333';
    ctx.font = '10px sans-serif';
    ctx.fillText('🟫 Walls', 10, h - 10);
    ctx.fillText('🔴 Door', 70, h - 10);
    ctx.fillText('🟧 Stairs', 130, h - 10);

    // Player
    const p = this.app.player.pos;
    const [px, py] = v.toPx(p.x, p.z);
    ctx.fillStyle = '#0066ff';
    ctx.beginPath();
    ctx.arc(px, py, 5, 0, 7);
    ctx.fill();
  }

  // ========== TOP-DOWN VIEW (ORIGINAL) ==========
  renderTopdown(canvas, level) {
    return this.mapView.renderInto(canvas, level);
  }

  // ========== HELPER: Room colors ==========
  getRoomColor(type) {
    const colors = {
      bedroom: '#ff99cc',
      kitchen: '#ffcc99',
      bathroom: '#99ccff',
      livingroom: '#ccff99',
      diningroom: '#ffff99',
      office: '#cc99ff',
      hallway: '#cccccc',
      garage: '#ffaa99',
      storage: '#99ffcc',
      generic: '#d9d9d9',
    };
    return colors[type] || colors.generic;
  }

  // ========== Draw room label (Isometric) ==========
  drawRoomLabel(ctx, x, y, room) {
    const name = this.mapView.ui.roomDetector?.getRoomName(room, 0) || 'Room';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textWidth = ctx.measureText(name).width;
    ctx.fillRect(x - textWidth/2 - 4, y - 7, textWidth + 8, 14);

    ctx.fillStyle = '#fff';
    ctx.fillText(name, x, y);
  }

  // ========== Draw room label (Floor Plan) ==========
  drawRoomLabelFloorPlan(ctx, x, y, room) {
    const name = this.mapView.ui.roomDetector?.getRoomName(room, 0) || 'Room';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, x, y - 5);

    // Object count
    ctx.font = '9px sans-serif';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillText(`${room.objects.length} items`, x, y + 7);
  }

  // ========== Main render dispatcher ==========
  render(canvas, level) {
    switch (this.viewMode) {
      case 'isometric':
        return this.renderIsometric(canvas, level);
      case 'floorplan':
        return this.renderFloorPlan(canvas, level);
      case 'topdown':
      default:
        return this.renderTopdown(canvas, level);
    }
  }

  // ========== Build view mode selector UI ==========
  buildViewModeSelector() {
    const modes = [
      ['topdown', 'Tampak atas', '📐'],
      ['isometric', 'Isometrik', '🎯'],
      ['floorplan', 'Denah', '🏗️'],
    ];

    return el('div', { class: 'view-mode-selector', role: 'radiogroup', 'aria-label': 'Mode tampilan peta' },
      modes.map(([mode, label, icon]) => el('button', {
        type: 'button',
        role: 'radio',
        'aria-checked': String(this.viewMode === mode),
        'data-mode': mode,
        class: 'view-mode-btn',
        onclick: (e) => {
          this.setViewMode(mode);
          this.updateButtons(e.currentTarget.parentElement);
        },
        title: label,
      }, icon, el('span', {}, label))));
  }

  setViewMode(mode) {
    this.viewMode = mode;
    // Trigger map re-render
    if (this.mapView.mapOpen) {
      const canvas = document.querySelector('.map.full');
      if (canvas) {
        const level = canvas._level;
        this.render(canvas, level);
      }
    }
  }

  updateButtons(container) {
    container.querySelectorAll('.view-mode-btn').forEach(btn => {
      btn.setAttribute('aria-checked', String(btn.dataset.mode === this.viewMode));
    });
  }
}
