// =============================================================================
// 3D Solids
// (c) Mathigon
// =============================================================================


import {Step} from '../shared/types';
import './components/voxel-painter';
import {VoxelPainter} from './components/voxel-painter';


export async function voxelBuilder($step: Step) {
  const $voxel = $step.$('x-voxel-painter') as VoxelPainter;
  const $button = $voxel.$('x-icon-btn')!;

  const targetVolume = 3;
  const targetSurface = 10;

  $button.on('click', () => {
    const surface = $voxel.getSurfaceArea();
    const volume = $voxel.getVolume();

    if (surface === targetSurface && volume === targetVolume) {
      $step.score('problem');
      $step.addHint('correct');
    } else if (surface === targetSurface) {
      $step.addHint('voxel-volume', {variables: {a: '' + volume, b: '' + targetVolume}});
    } else if (volume === targetVolume) {
      $step.addHint('voxel-surface', {variables: {a: '' + surface, b: '' + targetSurface}});
    } else {
      $step.addHint('voxel-error', {variables: {a: '' + targetVolume, b: '' + targetSurface}});
    }
  });
}
