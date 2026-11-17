# Room Navigation System: Visual Demo & Examples

## Before vs After

### BEFORE (Current State)
```
User: "Mana kamar tidur?"
↓
User clicks "Peta" (M key)
↓
Lihat canvas 2D blank dengan kotak-kotak warna
↓
Tidak tahu ruangan mana apa
↓
Click-click sembarangan di map
↓
Akhirnya di tempat random
```

### AFTER (Smart Room Navigation)
```
User: "Mana kamar tidur?"
↓
User clicks "🚪 Ruangan" button in dock (atau M)
↓
Panel opens dengan list organized:
   LANTAI 1 (3 ruangan)
   • 🛏️ Kamar Tidur ★ 12m away
   • 🍳 Dapur 8m away
   • 🛁 Kamar Mandi 5m away
   
   LANTAI 2 (2 ruangan)
   • 🏢 Kantor 15m away
   • 🚪 Koridor 20m away
↓
Click "🛏️ Kamar Tidur"
↓
✨ Teleported directly into room
↓ Toast: "Berpindah ke 🛏️ Kamar Tidur"
```

---

## UI Layout: Room Picker Panel

```
╔════════════════════════════════════════╗
║ 🚪 Ruangan & Lokasi              [×]  ║
╠════════════════════════════════════════╣
║ 🔍 [Cari ruangan…__________]           ║
║                                        ║
║ LANTAI 1 (3 ruangan)                   ║
║ ┌──────────────────────────────────┐  ║
║ │ 🛏️ Kamar Tidur          [12.3 m] │  ║
║ │ Bed, Nightstand, Lamp            │  ║
║ └──────────────────────────────────┘  ║
║ ┌──────────────────────────────────┐  ║
║ │ 🍳 Dapur                  [7.8 m] │  ║
║ │ Stove, Sink, Cabinet             │  ║
║ └──────────────────────────────────┘  ║
║ ┌──────────────────────────────────┐  ║
║ │ 🛁 Kamar Mandi             [5.4 m] │  ║
║ │ Toilet, Sink, Tub                │  ║
║ └──────────────────────────────────┘  ║
║                                        ║
║ LANTAI 2 (2 ruangan)                   ║
║ ┌──────────────────────────────────┐  ║
║ │ 🏢 Kantor                 [15.2 m] │  ║
║ │ Desk, Chair, Computer            │  ║
║ └──────────────────────────────────┘  ║
║ ┌──────────────────────────────────┐  ║
║ │ 📍 Ruangan 2              [20.1 m] │  ║
║ │ Shelving, Cabinet                │  ║
║ └──────────────────────────────────┘  ║
║                                        ║
║ 5 ruangan terdeteksi di dunia ini…    ║
╚════════════════════════════════════════╝
```

---

## Map View with Room Outlines

```
BEFORE:
┌─────────────────────┐
│ ░░░░░░░░░░░░░░░░░  │  ← Can't see which is which!
│ ░░░░░░░░░░░░░░░░░  │
│ ░░░░░░░░░░░░░░░░░  │  Legend: 🟫furniture 🟪wall
│ ░░░░░░░░░░░░░░░░░  │          🟥door ⬜floor
│ ░░░░░░░░░░░░░░░░░  │
└─────────────────────┘

AFTER:
┌─────────────────────────────┐
│ ┌─────────────┬──────────┐  │
│ │🛏️ Kamar    │🍳 Dapur   │  │  ← Room labels visible!
│ │ Tidur       │          │  │
│ ├─────────────┼──────────┤  │
│ │ 🛁 Kamar    │ 📍Ruangan│  │  Room outlines help
│ │ Mandi       │ 2        │  │  visualize layout
│ ├─────────────┴──────────┤  │
│ │ 🏢 Kantor (LANTAI 2)   │  │
│ │      (lighter/faded)    │  │
│ └────────────────────────┘  │
└─────────────────────────────┘

Legend: 🟫furniture 🟪wall 🟥door ⬜floor
```

---

## Interaction Flow Diagram

```
                    ┌─────────────────┐
                    │  Dock Button    │
                    │ 🚪 Ruangan      │
                    └────────┬────────┘
                             │ click
                             ▼
                    ┌─────────────────┐
                    │ Room Picker     │
                    │ Panel Opens     │
                    └────────┬────────┘
                             │
                 ┌───────────┼───────────┐
                 │                       │
                 ▼ search filter        ▼ click room
            ┌──────────┐         ┌──────────────┐
            │  Instant │         │ Teleport to  │
            │  Filter  │         │ room center  │
            └──────────┘         ├──────────────┤
                                 │ Raycast for  │
                                 │ walkable     │
                                 │ surface      │
                                 └──────┬───────┘
                                        │
                                        ▼
                             ┌──────────────────┐
                             │ 👤 Player moved  │
                             │ Toast confirms   │
                             │ "Berpindah ke…" │
                             └──────────────────┘
```

---

## Example: Room Detection Output

**Input world.json objects:**
```json
[
  { "name": "Bed_01", "role": "furniture", "center": [5, 1, 10] },
  { "name": "Nightstand", "role": "furniture", "center": [7, 1, 10] },
  { "name": "Lamp", "role": "furniture", "center": [7.5, 1.2, 10] },
  { "name": "Floor_BR", "role": "floor", "center": [6, 0.5, 10] },
  
  { "name": "Stove", "role": "furniture", "center": [15, 1, 10] },
  { "name": "Sink", "role": "furniture", "center": [17, 1, 10] },
  { "name": "Cabinet", "role": "furniture", "center": [16, 1, 12] },
  { "name": "Floor_K", "role": "floor", "center": [16, 0.5, 11] },
]
```

**Output rooms array:**
```javascript
[
  {
    id: "room-l0-c0",
    levelIndex: 0,
    center: { x: 6, z: 10 },
    type: "bedroom",
    label: "🛏️ Kamar Tidur",
    objects: ["Bed_01", "Nightstand", "Lamp", "Floor_BR"],
    confidence: 0.87,
    area: 4.5
  },
  {
    id: "room-l0-c1",
    levelIndex: 0,
    center: { x: 16, z: 11 },
    type: "kitchen",
    label: "🍳 Dapur",
    objects: ["Stove", "Sink", "Cabinet", "Floor_K"],
    confidence: 0.92,
    area: 3.8
  }
]
```

---

## Search Examples

**Input:** "tidur"
```
✓ 🛏️ Kamar Tidur (matched)
✗ 🍳 Dapur (filtered out)
✗ 🛁 Kamar Mandi (filtered out)
✗ 🏢 Kantor (filtered out)
```

**Input:** "lantai 2"
```
✗ 🛏️ Kamar Tidur - LANTAI 1 (filtered out)
---
✓ 🏢 Kantor - LANTAI 2 (matched)
✓ 📍 Ruangan 2 - LANTAI 2 (matched)
```

**Input:** "bed"
```
✓ 🛏️ Kamar Tidur (bedroom contains "bed") (matched)
```

---

## Distance Calculation

```
Player at: (0, 1.5, 0)

Room 1: Bedroom at (6, 1, 10)
  Distance = √((6-0)² + (10-0)²) = √136 = 11.7 m ✓

Room 2: Kitchen at (16, 1, 11)
  Distance = √((16-0)² + (11-0)²) = √377 = 19.4 m ✓

Room 3: Bathroom at (8, 1, 3)
  Distance = √((8-0)² + (3-0)²) = √73 = 8.5 m ✓ CLOSEST
```

**Display (sorted by distance):**
1. 🛁 Kamar Mandi [8.5 m]  ← nearest
2. 🛏️ Kamar Tidur [11.7 m]
3. 🍳 Dapur [19.4 m]

---

## Room Type Detection Examples

```
Objects: [Sofa, TV, Chair, Table]
  → Score: livingroom = 4.5
  → Type: livingroom
  → Label: 🛋️ Ruang Keluarga

Objects: [Stove, Sink, Cabinet, Counter]
  → Score: kitchen = 5.2
  → Type: kitchen
  → Label: 🍳 Dapur

Objects: [Bed, Closet, Nightstand]
  → Score: bedroom = 3.8
  → Type: bedroom
  → Label: 🛏️ Kamar Tidur

Objects: [Random_Box_1, Random_Box_2]
  → Score: generic = 0 (no pattern match)
  → Type: generic
  → Label: 📍 Ruangan 1 (auto-numbered)
```

---

## Performance Metrics

```
Operation                Time        Runs
─────────────────────────────────────────
Room detection (startup) ~200ms      Once
Per-frame search filter  ~1ms        On input
Room list render         ~5ms        First + search
Map room outline render  ~2ms        When viewing map
Teleport raycast        ~10ms        On jump

Total overhead: Minimal (detection cached)
```

---

## Mobile/Touch Version

```
┌────────────────────────────┐
│ [×] 🚪 Ruangan & Lokasi    │  
├────────────────────────────┤
│ 🔍 [Search__]              │
│                             │
│ LANTAI 1 (3 ruangan)        │
│ ┌──────────────────────┐   │
│ │ 🛏️ Kamar Tidur      │   │
│ │ [12.3m away]        │◄──┼─ Tap to teleport
│ │ Bed, Nightstand     │   │
│ └──────────────────────┘   │
│                             │
│ ┌──────────────────────┐   │
│ │ 🍳 Dapur   [7.8m]  │   │
│ │ Stove, Sink        │   │
│ └──────────────────────┘   │
│                             │
└────────────────────────────┘

Optimized for:
✓ Touch/tap friendly (large buttons)
✓ Scroll-friendly list
✓ One-handed operation
✓ Minimal text truncation
```

---

## Accessibility Features

```
✓ Keyboard navigation (Tab through rooms)
✓ Screen reader labels (aria-label)
✓ High contrast room outlines
✓ Color + icons (not color-only)
✓ Descriptive toast messages
✓ Keyboard shortcuts (future: G for "Go")
```

---

## Error Handling

```
Scenario 1: No rooms detected
  Toast: "Tidak ada ruangan terdeteksi di dunia ini."
  
Scenario 2: Clicked spot not walkable
  Toast: "Bukan lantai yang bisa dipijak."
  Fallback: Use room center at level Y
  
Scenario 3: Teleport target unreachable
  Fallback: Try different Y level (±3.5m)
  Fallback: Use room center at detection Y
```

---

## Configuration Examples

### Add custom room type (spaceship)

```javascript
ROOM_TYPE_PATTERNS.spaceship = {
  computer: 2,
  control: 1.5,
  'sci-fi': 1
};
```

### Change labels for different language

```javascript
// In getRoomLabel():
const labels = {
  bedroom: '🛏️ Ruang Tidur',  // Indonesian
  kitchen: '🍳 Dapur',
  bathroom: '🛁 Kamar Kecil',
  // ...
};
```

### Adjust clustering sensitivity

```javascript
// More rooms detected:
const clusters = this.clusterObjects(levelObjs, 4); // ← smaller cell

// Fewer, larger rooms:
const clusters = this.clusterObjects(levelObjs, 8); // ← larger cell
```

---

## Success Metrics

After implementing Room Navigation:

✅ **User can find any room in <3 seconds**
✅ **Room search works instantly**
✅ **Teleport success rate > 95%**
✅ **Mobile users can navigate one-handed**
✅ **Confidence score helps identify valid rooms**
✅ **Multi-floor buildings clearly organized**

---

## Demo Worlds to Test

1. **Small home** (5-10 rooms)
   - Easy detection
   - Good baseline

2. **Office building** (20+ rooms)
   - Tests clustering algorithm
   - Tests floor organization

3. **Complex mansion** (50+ rooms, 3-5 floors)
   - Stresses confidence filtering
   - Tests room labeling

4. **Minimal world** (no furniture)
   - Tests fallback behavior
   - Should show "generic" rooms

---

Generated for: 100 Dreams Smart Room Navigation  
Example complexity: Comprehensive (5+ scenarios)
