# ⚡ QUICK Integration - Exact Code Changes

**TL;DR:** 3 files, 5 changes = Building Explorer active!

---

## 📄 File 1: `web_src/ui.js`

### Change 1: Add import (top of file)
```javascript
// Find existing imports, add:
import { Map3DExplorer } from './map-3d-explorer.js';
import { RoomDetector } from './rooms.js';
```

### Change 2: Initialize in build() method

**Find:**
```javascript
this.mapView = new MapView(this);
this.root.append(this.title, this.crosshair, ...);
```

**Add after `this.mapView = new MapView(this);`:**
```javascript
this.roomDetector = new RoomDetector(this.app.data);
this.explorer = new Map3DExplorer(this, this.roomDetector);
```

### Change 3: Replace openMap() method

**Find:**
```javascript
openMap() {
  this.mapView.openFull();
  this.mapOpen = true;
}
```

**Replace with:**
```javascript
openMap() {
  this.explorer.openBuildingExplorer();
  this.mapOpen = true;
}
```

---

## 📄 File 2: `web_src/map.js`

### Change 4: Pass levels to room detector

**Find in `start()` method:**
```javascript
setTimeout(() => {
  try { 
    this.levels = this.discoverBands(); 
  } catch (e) { 
    console.warn('Deteksi lantai gagal', e); 
    this.levels = []; 
  } 
}, 800);
```

**Add 2 lines after `this.levels = this.discoverBands();`:**
```javascript
setTimeout(() => {
  try {
    this.levels = this.discoverBands();
    
    // ADD THESE 2 LINES:
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

## 📄 File 3: `web_src/main.js` (or CSS bundle)

### Change 5: Import CSS

**Add near other CSS imports:**
```javascript
import './map-3d-explorer.css';
```

---

## ✅ **That's All!**

5 changes total:
1. ✅ Import Map3DExplorer
2. ✅ Import RoomDetector
3. ✅ Initialize in build()
4. ✅ Pass levels in map.js
5. ✅ Import CSS

**Result:** Press M → Building Explorer opens! 🎉

---

## 🧪 **Quick Test**

```bash
npm run build
# Open world
# Press M
# Should see Building Explorer (vertical stack)
# If still see old map → check changes were applied
```

---

## 🆘 **Still See Old Map?**

1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+Shift+R)
3. Check console (F12) for errors
4. Verify openMap() calls `this.explorer.openBuildingExplorer()`
5. Verify roomDetector is initialized

---

**DONE!** Building Explorer sekarang akan nongol! 🏢✨
