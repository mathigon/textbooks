// =============================================================================
// 3D Solids
// (c) Mathigon
// =============================================================================


import {Slider, Step} from '../shared/types';
import {VoxelPainter} from './components/voxel-painter';
import {Net} from './components/net';

import './components/voxel-painter';
import './components/net';
import '../shared/components/solid';
import '../polyhedra/components/polyhedron';
import {BLUE, GREEN, GREY, LIME, RED, YELLOW} from '../shared/constants';

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

export function net1($step: Step) {
  const $net = $step.$('x-net') as Net;
  const $slider = $step.$('x-slider') as Slider;
  $net.addCuboidNet(1, 1, 1);
  /*
  $net.onAttr('p', v => {
    console.log('sliding');
    console.log(v);
  });
  */
  $slider.on('move', n => {
    const progress = n / 1000;
    $net.fold(progress);
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
