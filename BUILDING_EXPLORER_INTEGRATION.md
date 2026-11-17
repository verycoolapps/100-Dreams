# Building Explorer - Integration Guide

**Problem:** "kok belum nongol?" → Code files ada, tapi belum replace old map!

**Solution:** Follow exact code changes di bawah.

---

## 🎯 **STEP 1: Import di ui.js**

**File:** `web_src/ui.js`  
**Location:** Top dengan imports lain (line ~1-5)

```javascript
// Add this line:
import { Map3DExplorer } from './map-3d-explorer.js';
```

---

## 🎯 **STEP 2: Initialize di UI.build()**

**File:** `web_src/ui.js`  
**Location:** In `build()` method, after `this.mapView = new MapView(this);` (around line ~119)

```javascript
// Find this line:
this.mapView = new MapView(this);

// Add after it:
this.explorer = new Map3DExplorer(this, this.mapView.ui.roomDetector);
this.mapView.ui.roomDetector.setLevels([]);  // Will be set when levels discovered
```

---

## 🎯 **STEP 3: Set up room detector in mapView**

**File:** `web_src/map.js`  
**Location:** In `MapView.start()` method (around line ~224)

```javascript
// Find this:
setTimeout(() => {
  try {
    this.levels = this.discoverBands();
  } catch (e) {
    console.warn('Deteksi lantai gagal', e);
    this.levels = [];
  }
}, 800);

// Replace with:
setTimeout(() => {
  try {
    this.levels = this.discoverBands();
    
    // NEW: Initialize room detector
    if (!this.ui.roomDetector) {
      const { RoomDetector } = await import('./rooms.js');
      this.ui.roomDetector = new RoomDetector(this.app.data);
    }
    this.ui.roomDetector.setLevels(this.levels);
    
  } catch (e) {
    console.warn('Deteksi lantai gagal', e);
    this.levels = [];
  }
}, 800);
```

**Better approach (less async mess):** Initialize room detector earlier

**In `UI.build()` method (line ~119):**

```javascript
// After creating mapView:
this.mapView = new MapView(this);

// Add:
this.roomDetector = new RoomDetector(app.data);
this.explorer = new Map3DExplorer(this, this.roomDetector);
```

**Then in MapView.start() (line ~224):**

```javascript
// Just pass levels:
this.ui.roomDetector.setLevels(this.levels);
```

---

## 🎯 **STEP 4: Replace openMap() to use Building Explorer**

**File:** `web_src/ui.js`  
**Location:** Find `openMap()` method (around line ~210)

```javascript
// OLD:
openMap() {
  this.mapView.openFull();
  this.mapOpen = true;
}

// REPLACE WITH:
openMap() {
  this.explorer.openBuildingExplorer();
  this.mapOpen = true;
}
```

---

## 🎯 **STEP 5: Add "🏢 Peta Bangunan" button to dock (OPTIONAL)**

**File:** `web_src/ui.js`  
**Location:** In `build()` method, dock button setup (around line ~107-116)

```javascript
// Find dock buttons section:
const dockBtn = (k, label, fn, cls = '') => el('button', { ... });
this.dock = el('nav', { class: 'dock', 'aria-label': 'Navigasi utama' },
  dockBtn('map', 'Peta', () => this.openMap()),
  // ... other buttons

// Keep existing map button, or replace with:
dockBtn('building', '🏢 Peta Bangunan', () => this.openMap()),
```

(Optional: keep both buttons with different icons for old vs new)

---

## 🎯 **STEP 6: Import CSS**

**File:** `web_src/main.js` (or wherever CSS imports are)

```javascript
import './map-3d-explorer.css';
```

Or add to HTML template if using CSS separately.

---

## ✅ **Checklist - Are You Done?**

After all changes:

- [ ] `map-3d-explorer.js` exists in `web_src/`
- [ ] `map-3d-explorer.css` exists in `web_src/`
- [ ] Import added in `ui.js`
- [ ] `RoomDetector` initialized in `UI.build()`
- [ ] `Map3DExplorer` initialized in `UI.build()`
- [ ] Levels passed to room detector
- [ ] `openMap()` now calls `this.explorer.openBuildingExplorer()`
- [ ] CSS imported
- [ ] No console errors
- [ ] Press M → Building Explorer opens (not old map!)

---

## 🧪 **Testing**

```bash
# After making all changes:
npm run build

# Open 100-Dreams world in browser
# Press M key
# Should see: Building Explorer panel (vertical stack)
# NOT blank top-down map!

# Test:
[ ] Floor stack visible
[ ] Click floor → room list appears
[ ] Click room → teleport works
[ ] Grid tab shows all rooms
[ ] Isometric tab renders
[ ] No console errors
[ ] Mobile responsive
```

---

## 🐛 **Troubleshooting**

**Problem:** Still see old map  
**Solution:** 
- Check `openMap()` calls `this.explorer.openBuildingExplorer()`
- Check Building Explorer initialized in `UI.build()`
- Clear browser cache

**Problem:** RoomDetector undefined  
**Solution:**
- Import `RoomDetector` class: `import { RoomDetector } from './rooms.js';`
- Initialize: `this.roomDetector = new RoomDetector(app.data);`

**Problem:** Rooms not showing  
**Solution:**
- Check `this.roomDetector.detect()` has results
- Verify `setLevels()` called with actual levels
- Check world.json has objects with roles

**Problem:** Teleport not working  
**Solution:**
- Check world has collision geometry
- Verify room bounds are correct
- Try different room

---

## 📝 **Full Code Example**

Here's what your modified `ui.js` should have:

```javascript
// At top:
import { Map3DExplorer } from './map-3d-explorer.js';
import { RoomDetector } from './rooms.js';

// In build() method:
build() {
  // ... existing code ...
  
  this.mapView = new MapView(this);
  
  // NEW: Initialize room detection
  this.roomDetector = new RoomDetector(this.app.data);
  this.explorer = new Map3DExplorer(this, this.roomDetector);
  
  // ... rest of build() ...
}

// Replace openMap():
openMap() {
  this.explorer.openBuildingExplorer();
  this.mapOpen = true;
}
```

And in `map.js`, in `MapView.start()`:

```javascript
setTimeout(() => {
  try {
    this.levels = this.discoverBands();
    
    // Pass levels to room detector
    if (this.ui.roomDetector) {
      this.ui.roomDetector.setLevels(this.levels);
    }
    
  } catch (e) {
    console.warn('Deteksi lantai gagal', e);
    this.levels = [];
  }
}, 800);
```

---

## ✨ **After Integration**

When you press M:

```
OLD: Blank top-down canvas
NEW: Building Explorer panel with:
     ✓ Vertical floor stack
     ✓ Room grid for selected floor
     ✓ Isometric view tab
     ✓ Click any room to teleport
     ✓ Beautiful UI
```

---

**That's it! Now Building Explorer akan nongol!** 🎉

Kalau masih ada error, check console (F12) dan lihat error message-nya.
