# 100 Dreams: Room Navigation Integration Guide

This document explains how to integrate the new Smart Room Navigation system into 100 Dreams.

## Files Added

1. **`web_src/rooms.js`** — Room detection engine
   - `RoomDetector` class: auto-detects rooms via spatial clustering
   - Room type inference from objects
   - Teleport point calculation

2. **`web_src/ui-rooms.js`** — Room navigation UI
   - `RoomNavigator` class: builds room picker interface
   - Room search/filter
   - Floor-organized display

3. **`web_src/ui-rooms.css`** — Styles for room UI

4. **This file** — Integration guide

---

## Integration Steps

### Step 1: Import the new modules in `web_src/main.js`

```javascript
import { RoomDetector } from './rooms.js';
import { RoomNavigator } from './ui-rooms.js';
```

### Step 2: Initialize in `UI.build()` (web_src/ui.js, line ~92)

After creating `this.mapView`:

```javascript
// In UI.build(), after the line:
// this.mapView = new MapView(this);

// Add:
this.roomDetector = new RoomDetector(app.data);
this.roomNavigator = new RoomNavigator(this, this.roomDetector, this.mapView);
```

### Step 3: Set levels when they're discovered (web_src/ui.js)

In the UI class, add a method to pass levels to room detector:

```javascript
// In UI class
onLevelsDiscovered(levels) {
  this.roomDetector.setLevels(levels);
}
```

Then call it from `MapView.start()` once levels are discovered:

**In `web_src/map.js`, line ~224:**

```javascript
setTimeout(() => {
  try {
    this.levels = this.discoverBands();
    // Add this line:
    this.ui.onLevelsDiscovered(this.levels);
  } catch (e) {
    console.warn('Deteksi lantai gagal', e);
    this.levels = [];
  }
}, 800);
```

### Step 4: Add room picker button to the dock (web_src/ui.js, line ~107-116)

In the `build()` method, add a new dock button:

```javascript
const dockBtn = (k, label, fn, cls = '') => el('button', { ... });
this.dock = el('nav', { class: 'dock', 'aria-label': 'Navigasi utama' },
  dockBtn('map', 'Peta', () => this.openMap()),
  dockBtn('object', 'Objek', () => this.openObjects()),
  dockBtn('people', 'Penghuni', () => this.openPeople()),
  // ADD THIS LINE:
  dockBtn('door', 'Ruangan', () => this.openRoomPicker()),
  dockBtn('games', 'Game', () => this.openLibrary()),
  // ... rest of dock buttons
);
```

### Step 5: Add openRoomPicker() method to UI class

In `web_src/ui.js`, add this method to the UI class:

```javascript
openRoomPicker() {
  this.roomNavigator.openRoomPicker();
}
```

### Step 6: Add door icon to icons object (web_src/ui.js, line ~8-20)

In the `I` object (icons), add:

```javascript
const I = {
  explore: '...',
  map: '...',
  object: '...',
  people: '...',
  games: '...',
  dice: '...',
  // ADD THIS:
  door: 'M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z M8 6h8 M8 10h8 M8 14h4',
  // ... rest of icons
};
```

### Step 7: Include room UI CSS

The CSS is in `web_src/ui-rooms.css`. It should be bundled with the main styles when building.

If using esbuild, add to `web_src/BUILD.md` and import in the main CSS/JS bundle.

### Step 8: Update map rendering to show room outlines

In `web_src/map.js`, modify the `renderInto()` method to include room visualization:

**Around line ~186:**

```javascript
renderInto(canvas, level = null) {
  const g = canvas.getContext('2d');
  const size = canvas.width;
  const v = this.viewFor(size);

  g.drawImage(this.staticLayer(level, size), 0, 0);

  // ... explored cells code ...

  // ADD THIS: Draw room outlines
  if (this.ui.roomNavigator && level) {
    this.ui.roomNavigator.drawRoomsOnMap(canvas, level, this);
  }

  // ... actors and player code ...
}
```

---

## Usage Flow

1. **User clicks "🚪 Ruangan" button** in dock
2. **Room picker panel opens** with:
   - Search box
   - Rooms organized by floor
   - Distance indicators
   - Object hints
3. **User searches or clicks a room**
4. **Player teleports to that room**
5. **Toast confirms**: "Berpindah ke [Room Name]"

---

## Room Detection Algorithm

The detector automatically:

1. **Groups objects by spatial proximity** (6m cells)
2. **Identifies clusters** as potential rooms
3. **Infers room type** from object patterns:
   - Bed → Bedroom
   - Stove + Sink → Kitchen
   - Toilet + Tub → Bathroom
   - Sofa + TV → Living Room
   - Etc.
4. **Filters noise** (single objects, tiny areas)
5. **Organizes by level** and position

---

## Customization

### Change room type patterns

Edit `ROOM_TYPE_PATTERNS` in `web_src/rooms.js`:

```javascript
const ROOM_TYPE_PATTERNS = {
  bedroom: { bed: 2, closet: 1, nightstand: 0.5 },
  // Add more patterns...
};
```

### Change room labels

Edit `getRoomLabel()` in `web_src/rooms.js`:

```javascript
getRoomLabel(type) {
  const labels = {
    bedroom: '🛏️ Kamar Tidur',
    // Customize labels...
  };
}
```

### Change clustering sensitivity

In `clusterObjects()` method, adjust `cellSize`:
- Smaller = more rooms detected
- Larger = fewer, bigger rooms

### Change confidence threshold

In `detect()` method, adjust:
```javascript
if (room.confidence > 0.25 && room.area > 2) {
  // 0.25 = 25% confidence threshold
  // 2 = 2 m² minimum area
}
```

---

## Performance Notes

- Room detection runs **once at startup** (expensive raycasting only on level discovery)
- Room list is **cached** after first detection
- Map rendering is **additive** (room outlines drawn on existing map)
- Search is **client-side** (instant, no network calls)

---

## Testing Checklist

- [ ] Room detection finds rooms in test world
- [ ] Different room types are correctly identified
- [ ] Search filters work
- [ ] Teleport to room works (player placed on walkable surface)
- [ ] Room outlines visible on map
- [ ] Multi-floor worlds show correct floor grouping
- [ ] Mobile/touch interface works
- [ ] Indonesian labels display correctly

---

## Fallback Behavior

If room detection fails:
- **Rooms not detected?** → Toast: "Tidak ada ruangan terdeteksi di dunia ini."
- **Teleport location invalid?** → Fallback to room center at level height
- **Level discovery failed?** → Room navigator still works, all rooms on one level

---

## Future Enhancements

1. **Room bookmarks** — Save favorite rooms
2. **Room photos** — Capture visual previews
3. **Route visualization** — Show path from current to target
4. **Voice commands** — "Go to kitchen"
5. **Room descriptions** — User-customizable labels
6. **Multi-player room tracking** — See which rooms other players are in

---

## Troubleshooting

**Rooms not appearing?**
- Check console for errors in room detection
- Verify world has objects with roles
- Try lowering `confidence` threshold

**Wrong room type?**
- Add patterns for that room type
- Check object naming (must match pattern keywords)
- Try increasing pattern weights

**Teleport not working?**
- Verify room has valid floor surface
- Check world has collision geometry
- Try a different room

---

## Code Statistics

- `rooms.js`: ~300 lines (room detection engine)
- `ui-rooms.js`: ~180 lines (UI components)
- `ui-rooms.css`: ~120 lines (styles)
- Integration: ~15 lines of changes to existing files

**Total new code: ~600 lines**

---

Generated for: 100 Dreams  
Integration complexity: **Medium** (straightforward, 5-8 touch points)  
Est. integration time: **30-45 minutes**
