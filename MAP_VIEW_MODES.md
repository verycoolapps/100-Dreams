# Enhanced Map View Modes for 100 Dreams

**Problem:** Top-down map view susah visualisasi ruangan & lantai yang berlapis

**Solution:** 3 view modes yang bisa dipilih user:

---

## 🎯 **3 View Modes**

### 1️⃣ **📐 Tampak Atas (Top-Down)** — Default
```
┌─────────────────────┐
│ ░░░░░░░░░░░░░░░░░  │  Original 2D top-down
│ ░░░░░░░░░░░░░░░░░  │  Simple, familiar
│ ░░░░░░░░░░░░░░░░░  │  Best for maze-like layouts
│ ░░░░░░░░░░░░░░░░░  │
└─────────────────────┘
```

**Pros:**
- Familiar view
- Shows total layout
- Best for mazes

**Cons:**
- Hard to see depth
- Floors layered confusing
- Objects overlap

---

### 2️⃣ **🎯 Isometrik (Isometric)**
```
        ┌───────┐       3D perspective view
       /│       │/      Shows depth & layering
      / │ KAMAR │ /     Easier to understand
     ┌──┤  TIDUR├──┐    spatial relationships
     │ /│       │\  │
     │/ └───────┘ \ │
     └─────────────┘
```

**Features:**
- 3D-like perspective
- Shows room depth
- Clearer layering
- More intuitive

**How it works:**
```
Isometric projection:
  x-axis = right-down
  z-axis = left-down
  y-axis = straight up

Rooms appear as 3D blocks
Players see spatial relationship
Easier to navigate complex buildings
```

**Pros:**
- More intuitive
- Shows height/depth
- Clearer room boundaries
- Professional look

**Cons:**
- Slightly less familiar
- Scale can be confusing
- Performance: same (canvas rendering)

---

### 3️⃣ **🏗️ Denah (Floor Plan)**
```
┌─────────────────────────┐
│ ┌──────────┬──────────┐ │  Architectural schematic
│ │ KAMAR    │ KAMAR    │ │  Clean, readable
│ │ TIDUR    │ TIDUR    │ │  Shows walls & doors
│ ├──────────┼──────────┤ │  Professional
│ │  DAPUR   │ KAMAR    │ │
│ │          │ MANDI    │ │
│ └──────────┴──────────┘ │
└─────────────────────────┘

Legend:  🔲 Walls  🔴 Doors  🟧 Stairs
```

**Features:**
- Schematic view
- Bold walls
- Door markers
- Stair locations
- Room labels prominent
- Grid background

**How it works:**
```
1. Light background (not dark)
2. Bold black walls
3. Colored rooms (light fill)
4. Red dots = doors
5. Orange squares = stairs
6. Labels centered in rooms
```

**Pros:**
- Super clear
- Architectural style
- Shows structural elements
- Best for complex buildings
- Easy to understand

**Cons:**
- Different aesthetic
- Needs readable font sizes
- Less "game-like"

---

## 🎨 **Visual Comparison**

```
SAME APARTMENT - 3 VIEWS:

TOP-DOWN:
┌─────────────────────┐
│░░░░░░░░░░░░░░░░░░░│
│░░░░░░░░░░░░░░░░░░░│  Blank colored boxes
│░░░░░░░░░░░░░░░░░░░│  Hard to understand
│░░░░░░░░░░░░░░░░░░░│
└─────────────────────┘

ISOMETRIC:
       ┌─────┐
      / KAMAR│
     ┌──────┐│  Can see depth
     │DAPUR ││  Rooms distinct
     │   ┌──┘│  More realistic
     └───┤...│
         └────┘

FLOOR PLAN:
┌────────┬────────┐
│KAMAR   │KAMAR   │  Clear walls
├────────┼────────┤  Professional
│DAPUR   │KAMAR   │  Readable
│        │MANDI   │  Easy to navigate
└────────┴────────┘
```

---

## 🔄 **User Flow**

```
Open Map (M key)
    ↓
See 3 view mode buttons at top:
  [📐 Tampak Atas] [🎯 Isometrik] [🏗️ Denah]
    ↓
Click desired mode
    ↓
Map re-renders in that view
    ↓
Can switch anytime without closing panel
    ↓
Selection saved in localStorage
```

---

## 🛠️ **Implementation**

### New Files
```
web_src/
├── map-enhanced.js     [300 lines] — View mode engine
└── map-enhanced.css    [100 lines] — Styling
```

### Integration Points (in map.js)

```javascript
// 1. Import
import { EnhancedMapView } from './map-enhanced.js';

// 2. Initialize in MapView constructor
this.enhanced = new EnhancedMapView(this, ui);

// 3. In openFull(), add view mode selector
const viewModes = this.enhanced.buildViewModeSelector();
ui.openPanel('Peta dunia', [viewModes, canvas, ...rest]);

// 4. In renderInto(), dispatch to correct renderer
renderInto(canvas, level = null) {
  return this.enhanced.render(canvas, level);
}
```

---

## 📊 **Room Detection on Each View**

### Top-Down
```
Room outlines visible
Room labels if space allows
Colored by type
Player arrow shows position
```

### Isometric
```
Rooms as 3D blocks
Slight depth effect
Room labels above
Different color scheme
More visual impact
```

### Floor Plan
```
Walls bold black (3px)
Doors marked as red circles
Stairs marked as orange squares
Room names centered
Object count shown
Grid background subtle
```

---

## ⚙️ **Configuration**

### Save view preference
```javascript
// In setViewMode():
store.set('mapViewMode', mode);

// On open:
this.viewMode = store.get('mapViewMode', 'topdown');
```

### Customize room colors
```javascript
getRoomColor(type) {
  const colors = {
    bedroom: '#ff99cc',
    kitchen: '#ffcc99',
    // ... customize as needed
  };
  return colors[type] || colors.generic;
}
```

### Adjust isometric angle
```javascript
// In renderIsometric():
const angle = Math.PI / 6;  // 30 degrees (can adjust)
```

---

## 📱 **Mobile Considerations**

```
On phone:
  View mode icons only (no labels)
  📐 🎯 🏗️
  
On tablet/desktop:
  📐 Tampak Atas
  🎯 Isometrik
  🏗️ Denah
  
Touch targets all ≥44px
One-handed thumb reach
```

---

## ♿ **Accessibility**

✅ Keyboard: Tab between view modes  
✅ Screen reader: "View mode selector" with radio group  
✅ Color: Icons + labels (not color-only)  
✅ Contrast: High (view mode buttons)  
✅ Size: Readable font on all views  

---

## 🎯 **Which Mode for Which Use Case?**

| Use Case | Best Mode |
|----------|-----------|
| Simple home | Top-Down or Floor Plan |
| Complex building | Floor Plan |
| Maze-like dungeon | Isometric |
| Understanding layout | Floor Plan |
| Navigating fast | Isometric |
| RPG/game feel | Top-Down + Isometric |
| Architectural tour | Floor Plan |
| Multi-floor building | Show with Floor Plan |

---

## 📈 **Performance**

| View | Performance | Notes |
|------|-------------|-------|
| Top-Down | ⚡⚡⚡ Fastest | Original implementation |
| Isometric | ⚡⚡ Fast | Math-heavy but cached |
| Floor Plan | ⚡⚡ Fast | Grid + walls rendering |

**Result:** All 3 modes have minimal FPS impact (all canvas 2D)

---

## 🚀 **Example: Switching Modes**

```
User clicks "🎯 Isometrik"
  ↓
enhanced.setViewMode('isometric')
  ↓
Triggers map re-render
  ↓
renderIsometric() called
  ↓
Applies isometric projection math
  ↓
Canvas updated with new view
  ↓
User can see rooms in 3D-like perspective
  ↓
Much easier to understand layout!
```

---

## 🔄 **User Preference Persistence**

```javascript
// Save when user switches
store.set('mapViewMode', 'isometric');

// Load on next session
onMapOpen() {
  this.viewMode = store.get('mapViewMode', 'topdown');
  // User's preference is remembered!
}
```

---

## 🎨 **Floor Plan Color Reference**

```
🟨 Walls: Dark (black)
🟨 Rooms: Light fill with colored outline
🔴 Doors: Red circles on walls
🟧 Stairs: Orange squares
⬜ Floor: Light background
🔷 Player: Blue circle

Room colors by type:
  🛏️  Bedroom: Pink (#ff99cc)
  🍳 Kitchen: Orange (#ffcc99)
  🛁 Bathroom: Blue (#99ccff)
  🛋️  Livingroom: Green (#ccff99)
  🏢 Office: Purple (#cc99ff)
  📍 Generic: Gray (#d9d9d9)
```

---

## 🧪 **Testing Checklist**

- [ ] All 3 view modes render
- [ ] Switching modes works instantly
- [ ] Room labels show correctly
- [ ] Mobile is responsive
- [ ] Player position accurate
- [ ] Multi-floor displays correctly
- [ ] Performance unchanged
- [ ] User preference saved/loaded

---

## 🎓 **Example: Custom Floor Plan Theme**

```javascript
// Make it more colorful
getRoomColor(type) {
  const colors = {
    bedroom: '#ff6b9d',      // Brighter pink
    kitchen: '#ffa502',       // Vibrant orange
    bathroom: '#00b4d8',      // Bright blue
    livingroom: '#06ffa5',    // Neon green
    office: '#c77dff',        // Bright purple
  };
}

// Make grid more visible
ctx.strokeStyle = 'rgba(200, 200, 200, 0.4)'; // Darker grid
```

---

## 🚨 **Fallbacks**

| Scenario | Behavior |
|----------|----------|
| No rooms detected | Show empty canvas (same as before) |
| Level has no objects | Show blank view |
| Small room | Label doesn't show (too small) |
| Performance issue | Fall back to top-down |

---

## 🎉 **Summary**

User sekarang bisa:

✅ **📐 Top-Down** — Familiar, shows total layout  
✅ **🎯 Isometric** — 3D perspective, easier spatial understanding  
✅ **🏗️ Floor Plan** — Architectural, clearest for complex buildings  

**Result:** Players dapat pilih cara visualisasi yang paling nyaman untuk MEREKA!

Bukan lagi "peta susah dipahami" tapi **"pilih tampilan yang paling pas!"** 🎯

---

### Integration Time: 20-30 minutes  
### New code: ~400 lines  
### Impact: Major UX improvement! 🚀
