// 3D Building Explorer - Completely new paradigm for multi-floor navigation
// Shows building as vertical cutaway with layers you can click

import * as THREE from 'three';
import { el, fmtNum } from './util.js';

const bandY = (y) => Math.round(y / 3.2);

export class Map3DExplorer {
  constructor(ui, roomDetector) {
    this.ui = ui;
    this.detector = roomDetector;
    this.app = ui.app;
    this.selectedLevel = null;
    this.selectedRoom = null;
  }

  // ========== BUILDING PROFILE VIEW ==========
  // Shows building as vertical cross-section with floors stacked
  renderBuildingProfile(container) {
    const levels = this.detector.levels;
    const rooms = this.detector.rooms;

    if (!levels || !rooms.length) {
      return el('div', { class: 'building-profile empty' },
        el('p', { class: 'muted' }, 'Tidak ada ruangan terdeteksi'));
    }

    const profileEl = el('div', { class: 'building-profile' });

    // Calculate building dimensions
    const minY = Math.min(...levels.map(l => l.y));
    const maxY = Math.max(...levels.map(l => l.y));
    const totalHeight = maxY - minY + 10;
    const floorHeight = 100; // pixels per floor

    // Build the profile visualization
    const levels_sorted = [...levels].sort((a, b) => b.y - a.y); // Top to bottom

    for (const level of levels_sorted) {
      const levelRooms = rooms.filter(r => r.levelIndex === level.index);
      const floorLabel = this.ui.mapView?.levelLabel(level.index) || `Level ${level.index}`;
      const roomCount = levelRooms.length;

      const floorEl = el('div', { class: 'floor-block', 'data-level': level.index },
        el('div', { class: 'floor-header' },
          el('strong', {}, floorLabel),
          el('span', { class: 'room-count' }, `${roomCount} ruangan`)),

        el('div', { class: 'rooms-in-floor' },
          levelRooms.map(room => {
            const roomName = this.detector.getRoomName(room, rooms.indexOf(room));
            const objects = this.detector.getObjectsIn(room);
            const distance = this.detector.getDistanceFrom(this.app.player.pos, room);

            return el('div', { class: 'room-mini-card' },
              el('button', {
                type: 'button',
                class: 'room-mini-btn',
                onclick: () => this.selectAndTeleport(room),
                title: roomName,
              },
                el('div', { class: 'mini-name' }, roomName),
                el('div', { class: 'mini-info' },
                  el('span', { class: 'distance' }, `${fmtNum(distance, 1)}m`),
                  objects.length && el('span', { class: 'objects' }, objects.slice(0, 2).join(', ')))));
          })));

      profileEl.append(floorEl);
    }

    return profileEl;
  }

  // ========== VERTICAL FLOOR SELECTOR ==========
  // Shows building as vertical stack with clickable floors
  buildFloorStack() {
    const levels = this.detector.levels;
    if (!levels || levels.length <= 1) return null;

    const stack = el('div', { class: 'floor-stack', role: 'tablist', 'aria-label': 'Pilih lantai' });

    // Sort levels top to bottom
    const levels_sorted = [...levels].sort((a, b) => b.y - a.y);

    for (const level of levels_sorted) {
      const roomCount = this.detector.rooms.filter(r => r.levelIndex === level.index).length;
      const floorLabel = this.ui.mapView?.levelLabel(level.index) || `L${level.index}`;

      const btn = el('button', {
        type: 'button',
        role: 'tab',
        'data-level': level.index,
        class: 'floor-stack-btn',
        'aria-selected': String(this.selectedLevel === level.index),
        onclick: () => this.selectFloor(level.index),
        title: `${floorLabel} (${roomCount} ruangan)`,
      },
        el('span', { class: 'floor-label' }, floorLabel),
        el('span', { class: 'floor-height' }, `${Math.round(level.y)}m`),
        el('span', { class: 'room-badges' },
          ...Array(Math.min(roomCount, 5)).fill(0).map(() =>
            el('i', { class: 'badge' }))));

      stack.append(btn);
    }

    return stack;
  }

  // ========== ISOMETRIC FLOOR VIEWER ==========
  // Shows selected floor in isometric view with clickable rooms
  renderFloorIsometric(canvas, level) {
    if (!level) return;

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, w, h);

    const rooms = this.detector.rooms.filter(r => r.levelIndex === level.index);
    if (!rooms.length) {
      ctx.fillStyle = '#666';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Tidak ada ruangan di lantai ini', w / 2, h / 2);
      return;
    }

    // Isometric setup
    const scale = 2.5;
    const angle = Math.PI / 6;
    const centerX = w / 2;
    const centerY = h / 2;

    const toIso = (x, z) => {
      const ix = (x - z) * Math.cos(angle) * scale;
      const iy = (x + z) * Math.sin(angle) * scale;
      return [centerX + ix, centerY + iy];
    };

    // Draw rooms as clickable blocks
    for (const room of rooms) {
      const bounds = room.bounds;
      const corners = [
        [bounds.min.x, bounds.min.z],
        [bounds.max.x, bounds.min.z],
        [bounds.max.x, bounds.max.z],
        [bounds.min.x, bounds.max.z],
      ];

      const isoCorners = corners.map(([x, z]) => toIso(x, z));

      // Room fill
      const color = this.getRoomColor(room.type);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.moveTo(...isoCorners[0]);
      for (let i = 1; i < isoCorners.length; i++) {
        ctx.lineTo(...isoCorners[i]);
      }
      ctx.closePath();
      ctx.fill();

      // Border
      ctx.strokeStyle = this.shadeColor(color, 0.5);
      ctx.lineWidth = 2;
      ctx.globalAlpha = 1;
      ctx.stroke();

      // Label
      const centerIso = toIso(room.center.x, room.center.z);
      this.drawRoomLabel(ctx, centerIso[0], centerIso[1], room);

      // Store room data for click detection
      room._isoCorners = isoCorners;
    }

    // Player position
    const p = this.app.player.pos;
    const [px, py] = toIso(p.x, p.z);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(px, py, 8, 0, 7);
    ctx.fill();
  }

  // ========== ROOM MINIMAP GRID ==========
  // Shows all rooms in grid for quick scanning
  buildRoomGrid(levelIndex) {
    const rooms = this.detector.rooms.filter(r => r.levelIndex === levelIndex);
    if (!rooms.length) {
      return el('div', { class: 'room-grid empty' },
        el('p', { class: 'muted' }, 'Tidak ada ruangan di lantai ini'));
    }

    const grid = el('div', { class: 'room-grid' });

    for (const room of rooms) {
      const roomName = this.detector.getRoomName(room, this.detector.rooms.indexOf(room));
      const distance = this.detector.getDistanceFrom(this.app.player.pos, room);
      const objects = this.detector.getObjectsIn(room);
      const color = this.getRoomColor(room.type);

      const card = el('div', { class: 'grid-card' },
        el('button', {
          type: 'button',
          class: 'grid-btn',
          onclick: () => this.selectAndTeleport(room),
          style: { borderLeftColor: color },
        },
          el('div', { class: 'grid-name' }, roomName),
          el('div', { class: 'grid-distance' }, `${fmtNum(distance, 1)}m away`),
          el('div', { class: 'grid-objects' }, objects.join(' · '))));

      grid.append(card);
    }

    return grid;
  }

  // ========== HELPER: Select and teleport ==========
  selectAndTeleport(room) {
    this.selectedRoom = room;
    const teleportPoint = this.detector.getTeleportPoint(room, this.app.world);

    if (['orbit', 'cinematic'].includes(this.app.player.mode)) {
      this.ui.setMode('first', true);
    }

    this.app.player.place(teleportPoint);
    const roomName = this.detector.getRoomName(room, this.detector.rooms.indexOf(room));
    this.ui.toast(`Berpindah ke ${roomName}`);
  }

  selectFloor(levelIndex) {
    this.selectedLevel = levelIndex;
    // Trigger re-render if map panel is open
    if (this.ui.panelOpen) {
      this.openBuildingExplorer();
    }
  }

  // ========== OPEN BUILDING EXPLORER ==========
  openBuildingExplorer() {
    const levels = this.detector.levels || [];
    const isMultiFloor = levels.length > 1;

    if (!isMultiFloor) {
      // Single floor - just show room grid
      const selectedLevel = levels[0]?.index ?? 0;
      const grid = this.buildRoomGrid(selectedLevel);
      this.ui.openPanel('Ruangan di Lantai Ini', [grid]);
      return;
    }

    // Multi-floor building explorer
    const floorStack = this.buildFloorStack();
    const selectedLevelIndex = this.selectedLevel ?? levels[0].index;
    const selectedLevel = levels.find(l => l.index === selectedLevelIndex);

    // Canvas for isometric view
    const canvas = el('canvas', {
      class: 'floor-isometric',
      width: 400,
      height: 300,
    });

    // Grid for room selection
    const grid = this.buildRoomGrid(selectedLevelIndex);

    // Floor info
    const floorLabel = this.ui.mapView?.levelLabel(selectedLevelIndex) || `Lantai ${selectedLevelIndex}`;
    const roomCount = this.detector.rooms.filter(r => r.levelIndex === selectedLevelIndex).length;

    // Render isometric
    this.renderFloorIsometric(canvas, selectedLevel);

    // Build UI
    const content = [
      el('div', { class: 'building-explorer' },
        isMultiFloor ? floorStack : null,
        el('div', { class: 'floor-content' },
          el('h3', {}, `${floorLabel} (${roomCount} ruangan)`),
          el('div', { class: 'floor-view-tabs', role: 'tablist' },
            el('button', {
              type: 'button',
              role: 'tab',
              class: 'tab-btn active',
              onclick: (e) => this.switchFloorView(e, 'grid'),
            }, '📋 Daftar'),
            el('button', {
              type: 'button',
              role: 'tab',
              class: 'tab-btn',
              onclick: (e) => this.switchFloorView(e, 'iso'),
            }, '🎯 Isometrik')),
          el('div', { class: 'floor-view-grid', style: { display: 'block' } }, grid),
          el('div', { class: 'floor-view-iso', style: { display: 'none' } }, canvas))));

    this.ui.openPanel('🏢 Penjelajah Bangunan', content, true);
  }

  switchFloorView(e, mode) {
    const container = e.currentTarget.parentElement.parentElement;
    const gridView = container.querySelector('.floor-view-grid');
    const isoView = container.querySelector('.floor-view-iso');
    const tabs = container.parentElement.querySelectorAll('.tab-btn');

    if (mode === 'grid') {
      gridView.style.display = 'block';
      isoView.style.display = 'none';
    } else {
      gridView.style.display = 'none';
      isoView.style.display = 'block';
    }

    tabs.forEach(t => t.classList.toggle('active', t === e.currentTarget));
  }

  // ========== HELPERS ==========
  getRoomColor(type) {
    const colors = {
      bedroom: '#ff99cc',
      kitchen: '#ffcc99',
      bathroom: '#99ccff',
      livingroom: '#ccff99',
      office: '#cc99ff',
      generic: '#d9d9d9',
    };
    return colors[type] || colors.generic;
  }

  shadeColor(color, factor = 0.5) {
    const hex = color.replace('#', '');
    const r = Math.round(parseInt(hex.substr(0, 2), 16) * factor);
    const g = Math.round(parseInt(hex.substr(2, 2), 16) * factor);
    const b = Math.round(parseInt(hex.substr(4, 2), 16) * factor);
    return `rgb(${r},${g},${b})`;
  }

  drawRoomLabel(ctx, x, y, room) {
    const name = this.detector.getRoomName(room, 0);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const textWidth = ctx.measureText(name).width;
    ctx.fillRect(x - textWidth / 2 - 4, y - 7, textWidth + 8, 14);

    ctx.fillStyle = '#fff';
    ctx.fillText(name, x, y);
  }
}
