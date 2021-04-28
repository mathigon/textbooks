// =============================================================================
// 3D Solids
// (c) Mathigon
// =============================================================================


import {list} from '@mathigon/core';
import {Point} from '@mathigon/euclid';
import {Slider, Step} from '@mathigon/studio';

import {PenTool, Polypad} from '../shared/types';
import {VoxelPainter} from './components/voxel-painter';
import {Net} from './components/net';
import {Polyhedron} from '../polyhedra/components/polyhedron';
import {BLUE, GREEN, ORANGE, PURPLE, RED, YELLOW} from '../shared/constants';
import {Solid, Vector} from '../shared/components/webgl/solid';
import {BinarySwipe} from '../shared/components/binary-swipe/binary-swipe';
import {layers, templeParts} from './data/voxel-data';
import {pyramid1, triangularPrism, truncatedIcosahedron} from './data/net-data';
import {NetPosition, setupDieFacesPlacement} from './components/util';

import './components/voxel-painter';
import './components/net';
import '../shared/components/webgl/solid';
import '../shared/components/binary-swipe/binary-swipe';
import '../polyhedra/components/polyhedron';

export function polyParts($step: Step) {
  // TODO Update .addPoint/Line/Label to accept THREE Vector3s, to avoid all these .toArray() functions.
  // TODO Update .addPoint/Line/Label to accept string hex colours, to avoid hard-coded colours.
  // TODO Hide Labels when  the item is "behind" the solid.

  const $p = $step.$('x-polyhedron') as Polyhedron;
  $p.addMesh(() => {
    const vertices = [0, 1, 2].map(i => $p.getVertexCoords(i));

    $p.addLabel('Vertex', vertices[2].toArray() as Vector, 0x0f82f2, '5px');
    $p.addPoint(vertices[2].toArray() as Vector, 0x0f82f2);

    $p.addLine(vertices[0].toArray() as Vector, vertices[2].toArray() as Vector, 0xcd0e66);
    $p.addLabel('Edge', vertices[0].lerp(vertices[2], 0.5).toArray() as Vector, 0xcd0e66, '5px');

    // TODO The entire Icosahedron should be light gray, except for one labelled face.
    // const faceGeo = new THREE.Geometry();
    // faceGeo.vertices = vertices;
    // faceGeo.faces.push(new THREE.Face3(0, 1, 2));
    // $p.addSolid(faceGeo, 0x22ab24, 5, true);
    $p.addLabel('Face', vertices[1].lerp(vertices[2], 0.5).toArray() as Vector, 0x22ab24, '5px');
  });
}

export function polyIdent($step: Step) {
  const $cylinder = $step.$('x-solid.cylinder') as Solid;
  const $sphere = $step.$('x-solid.sphere') as Solid;
  const $cone = $step.$('x-solid.cone') as Solid;

  $cylinder.addMesh(() => {
    const geo = new THREE.CylinderGeometry(1.2, 1.2, 2.6, 32, 1);
    $cylinder.addSolid(geo, 0xfd8c00, {maxAngle: 20});
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
    const vertices = [0, 1, 2, 3].map(i => $p.getVertexCoords(i));

    $p.addLabel('Vertex', vertices[2].toArray() as Vector, 0x0f82f2, '5px');
    $p.addPoint(vertices[2].toArray() as Vector, 0x0f82f2);

    $p.addLine(vertices[0].toArray() as Vector, vertices[2].toArray() as Vector, 0xcd0e66);
    $p.addLabel('Edge', vertices[0].lerp(vertices[2], 0.5).toArray() as Vector, 0xcd0e66, '5px');

    $p.addLabel('Face', vertices[0].lerp(vertices[3], 0.5).toArray() as Vector, 0x22ab24, '5px');
  });
}

export async function templeFilling($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  // await $voxelPainter.ready();

  handleLayers($voxelPainter, 0);
}

function handleLayers($vp: VoxelPainter, currentLayer: number) {
  if (currentLayer > 0) {
    $vp.addVoxels(layers[currentLayer].locs, layers[currentLayer].color);
  } else {
    $vp.clearVoxels();
  }
  setTimeout(() => handleLayers($vp, (currentLayer + 1) % layers.length), 1000);
}

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
  $voxelPainter.on('volume-target-met', positions => {
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
  $v.on('snap', ([color, _angles]) => {
    if (color == 'none') $step.addHint('incorrect');
    else $step.score(color);
  });
  $step.onScore('front', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(50, 50));
    $t.setColour(RED);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('right', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(150, 50));
    $t.setColour(PURPLE);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('back', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(250, 50));
    $t.setColour(BLUE);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('left', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:6');
    $t.setTransform(new Point(350, 50));
    $t.setColour(ORANGE);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('top', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:4');
    $t.setTransform(new Point(450, 62.5));
    $t.setColour(GREEN);
    $t.locked = true;
    $step.addHint('correct');
  });
  $step.onScore('bottom', () => {
    const $t = $faceDisplay.newTile('number-tile', '2:4');
    $t.setTransform(new Point(550, 62.5));
    $t.setColour(YELLOW);
    $t.locked = true;
    $step.addHint('correct');
  });
}

export function voxelSurface($step: Step) {
  const $voxelPainter = $step.$('x-voxel-painter') as VoxelPainter;
  $voxelPainter.on('both-targets-met', positions => {
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
  ($p.tools.pen as PenTool).brush = 'straight';
}

export function net1($step: Step) {
  const $net1 = $step.$('.s1 x-net') as Net;
  const $slider = $step.$('x-slider') as Slider;
  $net1.addCuboidNet(1, 1, 1);
  const $net2 = $step.$('.s2 x-net') as Net;
  $net2.addNet(pyramid1.faces, pyramid1.hinges);
  const $net3 = $step.$('.s3 x-net') as Net;
  $net3.addNet(triangularPrism.faces, triangularPrism.hinges, 0.4);
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
  ($p.tools.pen as PenTool).brush = 'straight';
}

export function dieFaces1($step: Step) {
  const netPositions: NetPosition[] = [
    {pos: [0, 0], opposite: 5},
    {pos: [0, 1], opposite: 3},
    {pos: [1, 1], opposite: 4},
    {pos: [2, 1], opposite: 1},
    {pos: [3, 1], opposite: 2},
    {pos: [1, 2], opposite: 0}
  ];
  setupDieFacesPlacement($step, netPositions);
}

export function dieFaces2($step: Step) {
  const netPositions: NetPosition[] = [
    {pos: [1, 0], opposite: 5},
    {pos: [0, 1], opposite: 3},
    {pos: [1, 1], opposite: 4},
    {pos: [2, 1], opposite: 1},
    {pos: [3, 1], opposite: 2},
    {pos: [2, 2], opposite: 0}
  ];
  setupDieFacesPlacement($step, netPositions);
}

export function soccerNet($step: Step) {
  const $n = $step.$('x-net') as Net;
  const $slider = $step.$('x-slider') as Slider;
  $n.addNet(truncatedIcosahedron.faces, truncatedIcosahedron.hinges, 0.25);
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

export function netsProperties($step: Step) {
  const $swipe = $step.$('x-binary-swipe') as BinarySwipe;
  $swipe.on('complete', () => $step.score('all-swiped'));
}

export async function voxelBuilderQuestion($step: Step) {
  const $voxel = $step.$('x-voxel-painter') as VoxelPainter;
  const $button = $voxel.$('.icon-btn')!;

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
