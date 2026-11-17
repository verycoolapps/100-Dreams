import * as THREE from 'three';
import { el, fmtNum } from './util.js';

const ROOM_TYPE_PATTERNS = {
  bedroom: { bed: 2, closet: 1, nightstand: 0.5 },
  kitchen: { stove: 1, sink: 1, cabinet: 2, counter: 1.5 },
  bathroom: { toilet: 1, sink: 1, tub: 1 },
  livingroom: { sofa: 1, tv: 0.8, chair: 1, table: 1 },
  diningroom: { table: 1, chair: 2, cabinet: 1 },
  office: { desk: 1, chair: 1, shelving: 1, computer: 0.5 },
  hallway: { door: 2, wall: 3 },
  garage: { vehicle: 1, storage: 2 },
  storage: { shelving: 2, cabinet: 2, storage: 1 },
};

const ROLE_TO_ITEM = {
  bed: 'bed', furniture: 'furniture', vehicle: 'vehicle', plant: 'plant',
  character: 'character', animal: 'animal', door: 'door', stairs: 'stairs',
  wall: 'wall', water: 'water', window: 'window',
};

const bandY = (y) => Math.round(y / 3.2);

export class RoomDetector {
  constructor(worldData) {
    this.data = worldData;
    this.rooms = [];
    this.levels = [];
  }

  setLevels(levels) {
    this.levels = levels;
  }

  detect() {
    if (this.rooms.length) return this.rooms;

    const objects = (this.data.objects || []).filter(o => !['light', 'camera', 'roof', 'terrain'].includes(o.role));
    const rooms = [];

    // Group by level first
    for (const level of this.levels) {
      const levelObjs = objects.filter(o => {
        const baseY = o.center[1] - o.dims[1] / 2;
        return level.bands.has(bandY(baseY));
      });

      if (!levelObjs.length) continue;

      // Spatial clustering for this level
      const clusters = this.clusterObjects(levelObjs, 6);

      for (const cluster of clusters) {
        if (cluster.objects.length < 2) continue; // Single object = not a room

        const room = {
          id: `room-l${level.index}-c${rooms.length}`,
          levelIndex: level.index,
          levelY: level.y,
          center: cluster.centroid,
          bounds: cluster.bounds,
          objects: cluster.objects,
          type: this.inferType(cluster.objects),
          confidence: cluster.confidence,
          area: (cluster.bounds.max.x - cluster.bounds.min.x) * (cluster.bounds.max.z - cluster.bounds.min.z),
        };

        // Filter out noise (confidence too low or area too small)
        if (room.confidence > 0.25 && room.area > 2) {
          rooms.push(room);
        }
      }

      // Sort rooms by x then z for natural ordering
      rooms.sort((a, b) => {
        if (Math.abs(a.center.x - b.center.x) > 1) return a.center.x - b.center.x;
        return a.center.z - b.center.z;
      });
    }

    this.rooms = rooms;
    return rooms;
  }

  clusterObjects(objects, cellSize) {
    const grid = new Map();
    const visited = new Set();
    const clusters = [];

    // Assign objects to grid cells
    for (const obj of objects) {
      const x = Math.floor(obj.center[0] / cellSize);
      const z = Math.floor(obj.center[2] / cellSize);
      const key = `${x},${z}`;
      if (!grid.has(key)) grid.set(key, []);
      grid.get(key).push(obj);
    }

    // Flood fill to find connected components
    for (const [key, cellObjs] of grid.entries()) {
      if (visited.has(key)) continue;

      const cluster = this.floodFill(key, grid, visited);
      if (cluster.length > 0) clusters.push(this.analyzeCluster(cluster, cellSize));
    }

    return clusters;
  }

  floodFill(startKey, grid, visited) {
    const queue = [startKey];
    const cluster = [];
    visited.add(startKey);

    while (queue.length > 0) {
      const key = queue.shift();
      const [x, z] = key.split(',').map(Number);
      cluster.push(...(grid.get(key) || []));

      // Check 4-connectivity (up, down, left, right)
      for (const [dx, dz] of [[0,1], [0,-1], [1,0], [-1,0]]) {
        const nkey = `${x+dx},${z+dz}`;
        if (!visited.has(nkey) && grid.has(nkey)) {
          visited.add(nkey);
          queue.push(nkey);
        }
      }
    }

    return cluster;
  }

  analyzeCluster(objects, cellSize) {
    const xs = objects.map(o => o.center[0]);
    const zs = objects.map(o => o.center[2]);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minZ = Math.min(...zs);
    const maxZ = Math.max(...zs);

    const centroid = {
      x: (minX + maxX) / 2,
      z: (minZ + maxZ) / 2,
    };

    const bounds = {
      min: { x: minX, z: minZ },
      max: { x: maxX, z: maxZ },
    };

    // Confidence: ratio of objects in cluster vs empty cells
    const clusterCells = Math.ceil((maxX - minX) / cellSize) * Math.ceil((maxZ - minZ) / cellSize);
    const confidence = Math.min(1, objects.length / (clusterCells * 0.3));

    return { objects, centroid, bounds, confidence };
  }

  inferType(objects) {
    const scores = {};

    for (const type of Object.keys(ROOM_TYPE_PATTERNS)) {
      scores[type] = 0;
      const pattern = ROOM_TYPE_PATTERNS[type];

      for (const obj of objects) {
        const keywords = (obj.name + ' ' + (obj.label || '')).toLowerCase();
        for (const [key, weight] of Object.entries(pattern)) {
          if (keywords.includes(key)) scores[type] += weight;
        }
      }
    }

    // Also check roles
    const roleCounts = {};
    for (const obj of objects) {
      roleCounts[obj.role] = (roleCounts[obj.role] || 0) + 1;
    }

    if (roleCounts.bed && roleCounts.bed >= 1) scores.bedroom = Math.max(scores.bedroom || 0, 3);
    if (roleCounts.furniture && roleCounts.furniture >= 3) {
      if (!scores.livingroom || scores.livingroom < 2) scores.livingroom = 2;
    }
    if (roleCounts.stairs) scores.hallway = Math.max(scores.hallway || 0, 2);

    // Pick highest score
    let bestType = 'generic';
    let bestScore = 0;
    for (const [type, score] of Object.entries(scores)) {
      if (score > bestScore) {
        bestScore = score;
        bestType = type;
      }
    }

    return bestScore > 0 ? bestType : 'generic';
  }

  getRoomLabel(type) {
    const labels = {
      bedroom: '🛏️ Kamar Tidur',
      kitchen: '🍳 Dapur',
      bathroom: '🛁 Kamar Mandi',
      livingroom: '🛋️ Ruang Keluarga',
      diningroom: '🍽️ Ruang Makan',
      office: '🏢 Kantor',
      hallway: '🚪 Koridor',
      garage: '🚗 Garasi',
      storage: '📦 Penyimpanan',
      generic: '📍 Ruangan',
    };
    return labels[type] || labels.generic;
  }

  getRoomName(room, index) {
    const label = this.getRoomLabel(room.type);
    // For generic rooms, add a number
    if (room.type === 'generic') {
      return `${label.split(' ')[1] || 'Ruangan'} ${index + 1}`;
    }
    return label;
  }

  getObjectsIn(room) {
    return room.objects
      .filter(o => !['light', 'camera', 'roof'].includes(o.role))
      .map(o => o.label || o.name)
      .slice(0, 5);
  }

  getDistanceFrom(playerPos, room) {
    const dx = playerPos.x - room.center.x;
    const dz = playerPos.z - room.center.z;
    return Math.sqrt(dx * dx + dz * dz);
  }

  getTeleportPoint(room, world) {
    // Find a walkable point in the room (preferably center, with raycast validation)
    const fromY = Math.max(world.bounds.max.y + 2, room.levelY + 20);
    const hit = world.castDown(room.center.x, room.center.z, fromY, fromY - world.floorY + 80);

    if (hit && hit.face) {
      const n = hit.face.normal.clone().transformDirection(hit.object.matrixWorld);
      if (n.y > 0.5) return hit.point.clone();
    }

    // Fallback: center of room at level height
    return new THREE.Vector3(room.center.x, room.levelY + 1, room.center.z);
  }
}
