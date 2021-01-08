// =============================================================================
// 3D Solids
// (c) Mathigon
// =============================================================================


import {Polypad, Slider, Step} from '../shared/types';
import {VoxelPainter} from './components/voxel-painter';
import {Hinge, Net} from './components/net';
import {Polyhedron} from '../polyhedra/components/polyhedron';

import './components/voxel-painter';
import './components/net';
import '../shared/components/solid';
import '../shared/components/binary-swipe';
import '../polyhedra/components/polyhedron';
import {BLUE, GREEN, GREY, LIME, ORANGE, PURPLE, RED, YELLOW} from '../shared/constants';
import {Solid} from '../shared/components/solid';
import {list} from '@mathigon/core';
import {Angle, Point, Polygon} from '@mathigon/euclid';

export function polyParts($step: Step) {
  const $p = $step.$('x-polyhedron') as Polyhedron;
  $p.addMesh(() => {
    const vert = $p.getComponentPosn('vertex', [0, 1]);
    $p.addLabel('Vertex', vert, 0x666666, [15, 15]);
    $p.addPoint(vert);

    const edge = $p.getComponentPosn('edge', [0, 1]);
    $p.addLabel('Edge', edge, 0x666666, [5, 5]);

    const face = $p.getComponentPosn('face', [0, 3]);
    $p.addLabel('Face', face);
  });
}

export function polyIdent($step: Step) {
  const $cylinder = $step.$('x-solid.cylinder') as Solid;
  const $sphere = $step.$('x-solid.sphere') as Solid;
  const $cone = $step.$('x-solid.cone') as Solid;

  $cylinder.addMesh(() => {
    const geo = new THREE.CylinderGeometry(1.2, 1.2, 2.6, 32, 1);
    $cylinder.addSolid(geo, 0xfd8c00, 20);
  });
  $sphere.addMesh(() =>{
    const geo = new THREE.SphereGeometry(1.3, 128, 128);
    $sphere.addSolid(geo, 0xfd8c00);
  });
  $cone.addMesh(() => {
    const geo = new THREE.ConeGeometry(1.3, 2.6, 128, 1);
    $cone.addSolid(geo, 0xfd8c00);
  });
}

export function cuboidParts($step: Step) {
  const $p = $step.$('x-polyhedron') as Polyhedron;

  $p.addMesh(() => {
    const vert = $p.getComponentPosn('vertex', [0, 1]);
    $p.addLabel('Vertex', vert, 0x666666, [15, 15]);
    $p.addPoint(vert);

    const edge = $p.getComponentPosn('edge', [0, 2]);
    $p.addLabel('Edge', edge, 0x666666, [5, 5]);

    const face = $p.getComponentPosn('face', [0, 1]);
    $p.addLabel('Face', face);
  });
}

export async function templeFilling($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  // await $voxelPainter.ready();

  handleLayers($voxelPainter, 0);
}

type VoxelData = {
  locs: Array<[number, number, number]>,
  color: string
};

const layers: VoxelData[] = [
  {locs: [], color: ''},
  {
    locs: [
      [-1, -2, -2], [0, -2, -2], [1, -2, -2], [2, -2, -2],
      [-2, -2, -2], [-2, -1, -2], [-2, 0, -2], [-2, 1, -2],
      [-2, 2, -2], [-1, -1, -2], [-1, 0, -2], [-1, 1, -2],
      [-1, 2, -2], [0, -1, -2], [0, 0, -2], [0, 1, -2],
      [0, 2, -2], [1, -1, -2], [1, 0, -2], [1, 1, -2],
      [1, 2, -2], [2, -1, -2], [2, 0, -2], [2, 1, -2],
      [2, 2, -2]
    ],
    color: BLUE
  },
  {
    locs: [
      [-1, -2, -1], [0, -2, -1], [1, -2, -1], [2, -2, -1],
      [-2, -2, -1], [-2, -1, -1], [-2, 0, -1], [-2, 1, -1],
      [-2, 2, -1], [-1, -1, -1], [-1, 0, -1], [-1, 1, -1],
      [-1, 2, -1], [0, -1, -1], [0, 0, -1], [0, 1, -1],
      [0, 2, -1], [1, -1, -1], [1, 0, -1], [1, 1, -1],
      [1, 2, -1], [2, -1, -1], [2, 0, -1], [2, 1, -1],
      [2, 2, -1]
    ],
    color: GREEN
  },
  {
    locs: [
      [-1, -2, 0], [0, -2, 0], [1, -2, 0], [2, -2, 0],
      [-2, -2, 0], [-2, -1, 0], [-2, 0, 0], [-2, 1, 0],
      [-2, 2, 0], [-1, -1, 0], [-1, 0, 0], [-1, 1, 0],
      [-1, 2, 0], [0, -1, 0], [0, 0, 0], [0, 1, 0],
      [0, 2, 0], [1, -1, 0], [1, 0, 0], [1, 1, 0],
      [1, 2, 0], [2, -1, 0], [2, 0, 0], [2, 1, 0],
      [2, 2, 0]
    ],
    color: YELLOW
  },
  {
    locs: [
      [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1],
      [-2, -2, 1], [-2, -1, 1], [-2, 0, 1], [-2, 1, 1],
      [-2, 2, 1], [-1, -1, 1], [-1, 0, 1], [-1, 1, 1],
      [-1, 2, 1], [0, -1, 1], [0, 0, 1], [0, 1, 1],
      [0, 2, 1], [1, -1, 1], [1, 0, 1], [1, 1, 1],
      [1, 2, 1], [2, -1, 1], [2, 0, 1], [2, 1, 1],
      [2, 2, 1]
    ],
    color: RED
  },
  {
    locs: [
      [-1, -2, 2], [0, -2, 2], [1, -2, 2], [2, -2, 2],
      [-2, -2, 2], [-2, -1, 2], [-2, 0, 2], [-2, 1, 2],
      [-2, 2, 2], [-1, -1, 2], [-1, 0, 2], [-1, 1, 2],
      [-1, 2, 2], [0, -1, 2], [0, 0, 2], [0, 1, 2],
      [0, 2, 2], [1, -1, 2], [1, 0, 2], [1, 1, 2],
      [1, 2, 2], [2, -1, 2], [2, 0, 2], [2, 1, 2],
      [2, 2, 2]
    ],
    color: LIME
  }
];

function handleLayers($vp: VoxelPainter, currentLayer: number) {
  if (currentLayer > 0) {
    $vp.addVoxels(layers[currentLayer].locs, layers[currentLayer].color);
  } else {
    $vp.clearVoxels();
  }
  setTimeout(() => handleLayers($vp, (currentLayer + 1) % layers.length), 1000);
}

const templeParts: VoxelData[] = [
  { // Floor
    locs: [
      [-1, -2, -2], [0, -2, -2], [1, -2, -2], [2, -2, -2],
      [-2, -2, -2], [-2, -1, -2], [-2, 0, -2], [-2, 1, -2],
      [-2, 2, -2], [-1, -1, -2], [-1, 0, -2], [-1, 1, -2],
      [-1, 2, -2], [0, -1, -2], [0, 0, -2], [0, 1, -2],
      [0, 2, -2], [1, -1, -2], [1, 0, -2], [1, 1, -2],
      [1, 2, -2], [2, -1, -2], [2, 0, -2], [2, 1, -2],
      [2, 2, -2]
    ],
    color: BLUE
  },
  { // Pillars
    locs: [
      [2, -2, 0], [-2, -2, 0], [-2, 2, 0], [2, -2, -1],
      [-2, -2, -1], [-2, 2, -1], [2, -2, 1], [-2, -2, 1],
      [-2, 2, 1]
    ],
    color: GREY
  },
  { // Top
    locs: [
      [-1, -2, 2], [0, -2, 2], [1, -2, 2], [2, -2, 2],
      [-2, -2, 2], [-2, -1, 2], [-2, 0, 2], [-2, 1, 2],
      [-2, 2, 2]
    ],
    color: YELLOW
  }
];

function templeDisplay($vp: VoxelPainter) {
  for (const part of templeParts) {
    $vp.addVoxels(part.locs, part.color);
  }
}

export async function templeDisplay1($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  // await $voxelPainter.ready();
  templeDisplay($voxelPainter);
}

export async function templeDisplay2($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  // await $voxelPainter.ready();
  templeDisplay($voxelPainter);
}

export function painting1($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  $voxelPainter.onVolumeMet(positions => {
    if (isCuboid(positions)) {
      console.log('correct');
      $step.score('vol');
      $step.addHint('correct');
    } else {
      $step.addHint('incorrect');
    }
  });
}

function isCuboid(positions: [number, number, number][]) {
  // TODO: instead can just check against bounding box volume
  const sortedPositions = positions.sort((a, b) => {
    if (a[0] != b[0]) {
      return a[0] - b[0];
    } else if (a[1] != b[1]) {
      return a[1] - b[1];
    } else {
      return a[2] - b[2];
    }
  });
  const [minX, minY, minZ] = sortedPositions[0];
  const [maxX, maxY, maxZ] = sortedPositions[sortedPositions.length - 1];
  const xRange = list(minX, maxX, 1);
  const yRange = list(minY, maxY, 1);
  const zRange = list(minZ, maxZ, 1);
  const xy = cartesian2D(xRange, yRange);
  const xyz = cartesian3D(xy, zRange);
  if (xyz.length == sortedPositions.length) {
    const eq = xyz.every(([x, y, z], index) =>
      x == sortedPositions[index][0] &&
      y == sortedPositions[index][1] &&
      z == sortedPositions[index][2]
    );
    if (eq) return true;
    else return false;
  } else {
    return false;
  }
}

function cartesian2D(a: number[], b: number[]): number[][] {
  const mat = [];
  for (const aItem of a) {
    for (const bItem of b) {
      mat.push([aItem, bItem]);
    }
  }
  return mat;
}

function cartesian3D(a: number[][], b: number[]): number[][] {
  const mat = [];
  for (const aRow of a) {
    for (const bItem of b) {
      mat.push(aRow.concat(bItem));
    }
  }
  return mat;
}

export function sidesRotation($step: Step) {
  const $v = $step.$('x-voxel-painter') as VoxelPainter;
  const $faceDisplay = $step.$('x-polypad') as Polypad;
  $v.onCameraSnap(([color, _angles]) => {
    if (color == 'none') $step.addHint('incorrect');
    else $step.score(color);
  });
  $step.onScore('red', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(50, 50));
    $t.setColour(RED);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('purple', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(150, 50));
    $t.setColour(PURPLE);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('blue', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(250, 50));
    $t.setColour(BLUE);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('orange', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(350, 50));
    $t.setColour(ORANGE);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('green', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:4');
    $t.setTransform(new Point(450, 62.5));
    $t.setColour(GREEN);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('yellow', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:4');
    $t.setTransform(new Point(550, 62.5));
    $t.setColour(YELLOW);
    $t.locked = true;
    $step.addHint('correct');
  });
}

export function voxelSurface($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  $voxelPainter.onVolumeAreaMet(positions => {
    if (isContiguous(positions)) {
      console.log('correct');
      $step.score('area');
      $step.addHint('correct');
    } else {
      $step.addHint('incorrect');
    }
  });
}


function isContiguous(_positions: [number, number, number][]) {
  // TODO: Build graph and check whether it is 'connected'
  // 1. Traverse starting from arb root;
  // 2. check whether len of stack == len of positions list
  return true;
}

export function cubeTable($step: Step) {
  for (const size of [1, 2, 3, 6, 10, 20]) {
    const $vp = $step.$('x-voxel-painter.c' + size.toString()) as VoxelPainter;
    $vp.addVoxels(voxCube(size), YELLOW);
  }
}

function voxCube(size: number) {
  const locs: [number, number, number][] = [];
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        if (
          x == 0 || x == size - 1 ||
          y == 0 || y == size - 1 ||
          z == 0 || z == size - 1
        ) locs.push([x - (size / 2), y - (size / 2), z - (size / 2)]);
      }
    }
  }
  return locs;
}

export function cubeDraw($step: Step) {
  const $p = $step.$('x-polypad') as Polypad;
  $p.setActiveTool('pen');
  $p.tools.pen.brush = 'straight';
}

export function net1($step: Step) {
  const $net1 = $step.$('.s1 x-net') as Net;
  const $slider = $step.$('x-slider') as Slider;
  $net1.addCuboidNet(1, 1, 1);
  const faces2 = [
    new Polygon( // Circle
        new Point(-0.866, 0.5),
        new Point(0, -1),
        new Point(0.866, 0.5)
    ),
    new Polygon( // Circle.001
        new Point(1.7321, -1),
        new Point(0, -1),
        new Point(0.866, 0.5)
    ),
    new Polygon( // Circle.002
        new Point(0, 2.0),
        new Point(0.866, 0.5),
        new Point(-0.866, 0.5)
    ),
    new Polygon( // Circle.003
        new Point(-1.7321, -1),
        new Point(0, -1),
        new Point(-0.866, 0.5)
    )
  ];
  const dihed2 = 180 - 70.528779;
  const hinges2: Hinge[] = [
    [0, 1, dihed2],
    [0, 2, dihed2],
    [0, 3, dihed2]
  ];
  const $net2 = $step.$('.s2 x-net') as Net;
  $net2.addNet(faces2, hinges2);
  const a = 3;
  const b = 2;
  const c = Math.sqrt((b ** 2) - ((a / 2) ** 2));
  const d = a / 2;
  const e = d + b;
  const faces3 = [
    new Polygon(
        new Point(-a, -d),
        new Point(a, -d),
        new Point(a, d),
        new Point(-a, d)
    ),
    new Polygon(
        new Point(-a, -d),
        new Point(-a, -e),
        new Point(a, -e),
        new Point(a, -d)
    ),
    new Polygon(
        new Point(-a, d),
        new Point(a, d),
        new Point(a, e),
        new Point(-a, e)
    ),
    new Polygon(
        new Point(a, d),
        new Point(a, -d),
        new Point(a + c, 0)
    ),
    new Polygon(
        new Point(-a, d),
        new Point(-a, -d),
        new Point(-(a + c), 0)
    )
  ];
  const angle = Angle.fromRadians(Math.asin(c / b)).deg;
  const hinges3: Hinge[] = [
    [0, 1, 180 - angle],
    [0, 2, 180 - angle],
    [0, 3, 90],
    [0, 4, 90]
  ];
  const $net3 = $step.$('.s3 x-net') as Net;
  $net3.addNet(faces3, hinges3, 0.4);
  $slider.on('move', n => {
    const progress = n / 1000;
    $net1.fold(progress);
    $net2.fold(progress);
    $net3.fold(progress);
  });
}

export function cubeNetDraw($step: Step) {
  const $p = $step.$('x-polypad') as Polypad;
  $p.setActiveTool('pen');
  $p.tools.pen.brush = 'straight';
}

export function soccerNet($step: Step) {
  const faces = [
    new Polygon( // base
        new Point(0, -1.3951),
        new Point(1.2085, -0.6976),
        new Point(1.2085, 0.6976),
        new Point(0, 1.3951),
        new Point(-1.2085, 0.6976),
        new Point(-1.2085, -0.6976)
    ),
    new Polygon( // Curve.001
        new Point(-2.4169, 2.7902),
        new Point(-1.2085, 3.4878),
        new Point(-1.2085, 4.8829),
        new Point(-2.4169, 5.5805),
        new Point(-3.6254, 4.8829),
        new Point(-3.6254, 3.4878)
    ),
    new Polygon( // Curve.002
        new Point(0, 2.7902),
        new Point(1.2085, 3.4878),
        new Point(1.2085, 4.8829),
        new Point(0, 5.5805),
        new Point(-1.2085, 4.8829),
        new Point(-1.2085, 3.4878)
    ),
    new Polygon( // Curve.003
        new Point(1.2085, 0.6976),
        new Point(2.4169, 1.3951),
        new Point(2.4169, 2.7902),
        new Point(1.2085, 3.4878),
        new Point(0, 2.7902),
        new Point(0, 1.3951)
    ),
    new Polygon( // Curve.004
        new Point(1.2085, -3.4879),
        new Point(2.4169, -2.7903),
        new Point(2.4169, -1.3952),
        new Point(1.2085, -0.6976),
        new Point(0, -1.3952),
        new Point(0, -2.7903)
    ),
    new Polygon( // Curve.005
        new Point(3.6254, -3.4878),
        new Point(4.8338, -2.7902),
        new Point(4.8338, -1.3951),
        new Point(3.6254, -0.6976),
        new Point(2.4169, -1.3951),
        new Point(2.4169, -2.7902)
    ),
    new Polygon( // Curve.006
        new Point(4.8339, -5.5805),
        new Point(6.0423, -4.883),
        new Point(6.0423, -3.4879),
        new Point(4.8339, -2.7903),
        new Point(3.6254, -3.4879),
        new Point(3.6254, -4.883)
    ),
    new Polygon( // Curve.007
        new Point(-2.4169, -1.3951),
        new Point(-1.2084, -0.6976),
        new Point(-1.2084, 0.6976),
        new Point(-2.4169, 1.3951),
        new Point(-3.6254, 0.6976),
        new Point(-3.6254, -0.6976)
    ),
    new Polygon( // Curve.008
        new Point(-3.6254, -3.4878),
        new Point(-2.4169, -2.7903),
        new Point(-2.4169, -1.3951),
        new Point(-3.6254, -0.6976),
        new Point(-4.8338, -1.3951),
        new Point(-4.8338, -2.7903)
    ),
    new Polygon( // Curve.009
        new Point(-2.4169, -5.5805),
        new Point(-1.2085, -4.8829),
        new Point(-1.2085, -3.4878),
        new Point(-2.4169, -2.7903),
        new Point(-3.6254, -3.4878),
        new Point(-3.6254, -4.8829)
    ),
    new Polygon( // Curve.010
        new Point(3.6254, 0.6975),
        new Point(4.8339, 1.3951),
        new Point(4.8339, 2.7902),
        new Point(3.6254, 3.4878),
        new Point(2.4169, 2.7902),
        new Point(2.4169, 1.3951)
    ),
    new Polygon( // Curve.011
        new Point(1.2085, 4.8829),
        new Point(2.4169, 5.5804),
        new Point(2.4169, 6.9756),
        new Point(1.2085, 7.6731),
        new Point(0, 6.9756),
        new Point(0, 5.5804)
    ),
    new Polygon( // Curve.012
        new Point(0, 6.9756),
        new Point(1.2085, 7.6731),
        new Point(1.2085, 9.0683),
        new Point(0, 9.7658),
        new Point(-1.2085, 9.0683),
        new Point(-1.2085, 7.6731)
    ),
    new Polygon( // Curve.013
        new Point(-3.6254, 4.8829),
        new Point(-2.4169, 5.5805),
        new Point(-2.4169, 6.9756),
        new Point(-3.6254, 7.6731),
        new Point(-4.8339, 6.9756),
        new Point(-4.8339, 5.5805)
    ),
    new Polygon( // Curve.014
        new Point(-6.0423, 4.8829),
        new Point(-4.8339, 5.5804),
        new Point(-4.8339, 6.9756),
        new Point(-6.0423, 7.6731),
        new Point(-7.2508, 6.9756),
        new Point(-7.2508, 5.5804)
    ),
    new Polygon( // Curve.015
        new Point(-0.1715, 5.8164),
        new Point(-1.2085, 4.8829),
        new Point(-2.4169, 5.5805),
        new Point(-2.1268, 6.9451),
        new Point(-0.739, 7.0909)
    ),
    new Polygon( // Curve.016
        new Point(3.4539, 7.9091),
        new Point(2.4169, 6.9756),
        new Point(1.2084, 7.6731),
        new Point(1.4986, 9.0378),
        new Point(2.8863, 9.1836)
    ),
    new Polygon( // Curve.017
        new Point(3.3558, 4.1853),
        new Point(2.5356, 3.0567),
        new Point(1.2085, 3.4878),
        new Point(1.2085, 4.8829),
        new Point(2.5356, 5.314)
    ),
    new Polygon( // Curve.018
        new Point(6.9812, 2.0927),
        new Point(6.161, 0.964),
        new Point(4.8339, 1.3951),
        new Point(4.8339, 2.7902),
        new Point(6.161, 3.2213)
    ),
    new Polygon( // Curve.019
        new Point(-5.7727, 0),
        new Point(-4.9525, -1.1287),
        new Point(-3.6254, -0.6976),
        new Point(-3.6254, 0.6975),
        new Point(-4.9525, 1.1287)
    ),
    new Polygon( // Curve.020
        new Point(-5.8708, 7.9091),
        new Point(-4.8338, 6.9756),
        new Point(-3.6254, 7.6731),
        new Point(-3.9155, 9.0378),
        new Point(-5.3033, 9.1836)
    ),
    new Polygon( // Curve.021
        new Point(-0.1714, 2.5543),
        new Point(-1.2084, 3.4878),
        new Point(-2.4169, 2.7902),
        new Point(-2.1268, 1.4256),
        new Point(-0.739, 1.2798)
    ),
    new Polygon( // Curve.022
        new Point(3.454, -3.7238),
        new Point(2.417, -2.7903),
        new Point(1.2086, -3.4878),
        new Point(1.4987, -4.8524),
        new Point(2.8865, -4.9983)
    ),
    new Polygon( // Curve.023
        new Point(3.4539, 0.4616),
        new Point(2.4169, 1.3951),
        new Point(1.2085, 0.6975),
        new Point(1.4986, -0.6671),
        new Point(2.8863, -0.8129)
    ),
    new Polygon( // Curve.024
        new Point(-2.2454, -1.6311),
        new Point(-1.2084, -0.6976),
        new Point(0, -1.3951),
        new Point(-0.2901, -2.7598),
        new Point(-1.6779, -2.9056)
    ),
    new Polygon( // Curve.025
        new Point(5.0053, -5.8164),
        new Point(6.0423, -4.8829),
        new Point(7.2508, -5.5805),
        new Point(6.9607, -6.9451),
        new Point(5.5729, -7.0909)
    ),
    new Polygon( // Curve.026
        new Point(-5.8708, -3.7238),
        new Point(-4.8338, -2.7903),
        new Point(-3.6254, -3.4878),
        new Point(-3.9155, -4.8524),
        new Point(-5.3033, -4.9983)
    ),
    new Polygon( // Curve.027
        new Point(4.8339, 2.7902),
        new Point(6.0423, 3.4878),
        new Point(6.0423, 4.8829),
        new Point(4.8339, 5.5804),
        new Point(3.6254, 4.8829),
        new Point(3.6254, 3.4878)
    ),
    new Polygon( // Curve.028
        new Point(7.2508, -5.5805),
        new Point(8.4592, -4.8829),
        new Point(8.4592, -3.4878),
        new Point(7.2508, -2.7902),
        new Point(6.0423, -3.4878),
        new Point(6.0423, -4.8829)
    ),
    new Polygon( // Curve.029
        new Point(8.4592, -7.6732),
        new Point(9.6676, -6.9757),
        new Point(9.6676, -5.5805),
        new Point(8.4592, -4.883),
        new Point(7.2507, -5.5805),
        new Point(7.2507, -6.9757)
    ),
    new Polygon( // Curve.030
        new Point(7.2506, -9.7658),
        new Point(8.4591, -9.0683),
        new Point(8.4591, -7.6732),
        new Point(7.2506, -6.9756),
        new Point(6.0422, -7.6732),
        new Point(6.0422, -9.0683)
    ),
    new Polygon( // Curve.031
        new Point(3.6253, -7.6732),
        new Point(4.8338, -6.9756),
        new Point(4.8338, -5.5805),
        new Point(3.6253, -4.8829),
        new Point(2.4169, -5.5805),
        new Point(2.4169, -6.9756)
    )
  ];
  const hh = 180 - 138.189685;
  const hp = 180 - 142.62263;
  const hinges: Hinge[] = [
    [0, 3, hh], [0, 7, hh], [0, 24, hp], [0, 4, hh],
    [7, 19, hp], [7, 8, hh],
    [8, 26, hp], [8, 9, hh],
    [4, 22, hp], [4, 5, hh],
    [5, 6, hh],
    [6, 31, hh], [6, 28, hh],
    [28, 25, hp], [28, 29, hh],
    [29, 30, hh],
    [3, 23, hp], [3, 10, hh], [3, 2, hh],
    [10, 18, hp], [10, 27, hh],
    [2, 17, hp], [2, 11, hh], [2, 1, hh],
    [11, 16, hp], [11, 12, hh],
    [1, 15, hp], [1, 13, hh], [1, 21, hp],
    [13, 20, hp], [13, 14, hh]
  ];
  const $n = $step.$('x-net') as Net;
  const $slider = $step.$('x-slider') as Slider;
  $n.addNet(faces, hinges, 0.25);
  $slider.on('move', n => {
    const progress = n / 1000;
    $n.fold(progress);
  });
}

export function honeycombIntro($step: Step) {
  const $p = $step.$('x-polyhedron') as Polyhedron;
  $p.addMesh(() => {
    $p.addLabel('Hexagonal Base', [0, 0.56, 0]);
  });
}

export async function voxelBuilderQuestion($step: Step) {
  const $voxel = $step.$('x-voxel-painter') as VoxelPainter;
  const $button = $voxel.$('x-icon-btn')!;

  const $targetVolume = parseInt($button.attr('volume'));
  const $targetSurface = parseInt($button.attr('surfaceArea'));

  $button.on('click', () => {
    const surface = $voxel.getSurfaceArea();
    const volume = $voxel.getVolume();

    if (surface === $targetSurface && volume === $targetVolume) {
      $step.score('problem');
      $step.addHint('correct');
    } else if (surface === $targetSurface) {
      $step.addHint('voxel-volume', {variables: {a: '' + volume, b: '' + $targetVolume}});
    } else if (volume === $targetVolume) {
      $step.addHint('voxel-surface', {variables: {a: '' + surface, b: '' + $targetSurface}});
    } else {
      $step.addHint('voxel-error', {variables: {a: '' + $targetVolume, b: '' + $targetSurface}});
    }
  });
}
