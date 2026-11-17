import { el, fmtNum } from './util.js';

// Room-based navigation UI: quick access to rooms organized by floor
export class RoomNavigator {
  constructor(ui, roomDetector, mapView) {
    this.ui = ui;
    this.detector = roomDetector;
    this.mapView = mapView;
    this.app = ui.app;
    this.selectedRoom = null;
  }

  openRoomPicker() {
    const rooms = this.detector.detect();
    if (!rooms.length) {
      this.ui.toast('Tidak ada ruangan terdeteksi di dunia ini.');
      return;
    }

    // Group rooms by level
    const byLevel = new Map();
    for (const room of rooms) {
      if (!byLevel.has(room.levelIndex)) byLevel.set(room.levelIndex, []);
      byLevel.get(room.levelIndex).push(room);
    }

    const playerPos = this.app.player.pos;
    let searchQuery = '';

    const list = el('ul', { class: 'room-list' });
    const search = el('input', {
      type: 'search',
      class: 'search',
      placeholder: 'Cari ruangan…',
      'aria-label': 'Cari ruangan',
      oninput: (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderRooms();
      },
    });

    const renderRooms = () => {
      const filtered = searchQuery
        ? rooms.filter(r => this.detector.getRoomName(r, rooms.indexOf(r)).toLowerCase().includes(searchQuery))
        : rooms;

      const items = [];
      const sortedLevels = Array.from(byLevel.keys()).sort((a, b) => a - b);

      for (const levelIdx of sortedLevels) {
        const levelRooms = (byLevel.get(levelIdx) || []).filter(r =>
          !searchQuery || this.detector.getRoomName(r, rooms.indexOf(r)).toLowerCase().includes(searchQuery)
        );

        if (levelRooms.length === 0) continue;

        const levelLabel = this.mapView.levelLabel(levelIdx);
        items.push(el('li', { class: 'room-level-header' },
          el('strong', {}, levelLabel),
          el('span', { class: 'muted small' }, `${levelRooms.length} ruangan`)));

        for (const room of levelRooms) {
          const distance = this.detector.getDistanceFrom(playerPos, room);
          const roomName = this.detector.getRoomName(room, rooms.indexOf(room));
          const objects = this.detector.getObjectsIn(room);

          items.push(el('li', { class: 'room-card' },
            el('button', {
              type: 'button',
              class: 'room-btn',
              onclick: () => this.jumpToRoom(room),
            },
              el('div', { class: 'rc-head' },
                el('span', { class: 'rc-name' }, roomName),
                el('span', { class: 'rc-dist' }, `${fmtNum(distance, 1)} m`)),
              el('div', { class: 'rc-objects muted small' },
                objects.length ? `${objects.join(', ')}` : 'Kosong'))));
        }
      }

      list.replaceChildren(...items);
    };

    const footer = el('p', { class: 'muted small' },
      `${rooms.length} ruangan terdeteksi di dunia ini. Klik untuk berpindah. Gunakan pencarian untuk menemukan dengan cepat.`);

    renderRooms();
    this.ui.openPanel('Ruangan & Lokasi', [search, list, footer], false);
  }

  jumpToRoom(room) {
    const teleportPoint = this.detector.getTeleportPoint(room, this.app.world);

    // Switch to first-person if in orbit/cinematic
    if (['orbit', 'cinematic'].includes(this.app.player.mode)) {
      this.ui.setMode('first', true);
    }

    this.app.player.place(teleportPoint);
    this.ui.closePanel();

    const roomName = this.detector.getRoomName(room, this.detector.rooms.indexOf(room));
    this.ui.toast(`Berpindah ke ${roomName}`);
  }

  // Overlay room outlines and labels on the map canvas
  drawRoomsOnMap(canvas, level, mapView) {
    if (!level) return; // Skip for "all floors" view

    const ctx = canvas.getContext('2d');
    const v = mapView.viewFor(canvas.width);
    const rooms = this.detector.rooms.filter(r => r.levelIndex === level.index);

    if (!rooms.length) return;

    // Draw room boundaries and labels
    for (const room of rooms) {
      const bounds = room.bounds;
      const [minX, minZ] = v.toPx(bounds.min.x, bounds.min.z);
      const [maxX, maxZ] = v.toPx(bounds.max.x, bounds.max.z);
      const w = maxX - minX;
      const h = maxZ - minZ;

      // Room outline
      ctx.strokeStyle = 'rgba(255, 200, 100, 0.6)';
      ctx.lineWidth = 2;
      ctx.strokeRect(minX, minZ, w, h);

      // Room label (if large enough)
      if (w > 30 && h > 20) {
        const roomName = this.detector.getRoomName(room, this.detector.rooms.indexOf(room));
        const centerX = minX + w / 2;
        const centerY = minZ + h / 2;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.font = 'bold 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Background box
        const textWidth = ctx.measureText(roomName).width;
        ctx.fillRect(centerX - textWidth / 2 - 3, centerY - 7, textWidth + 6, 14);

        // Text
        ctx.fillStyle = '#fff';
        ctx.fillText(roomName, centerX, centerY);
      }
    }
  }

  // Add room-related controls to the map panel
  enhanceMapPanel(panel) {
    const btn = el('button', {
      type: 'button',
      class: 'btn small',
      onclick: () => this.openRoomPicker(),
    }, '🚪 Ruangan & Lokasi');

    panel.querySelector('.panel-body')?.insertAdjacentElement('beforeend', btn);
  }
}
