// =============================================================================
// Functions
// (c) Mathigon
// =============================================================================


import '../shared/components/relation';
import {Point, SimplePoint} from '@mathigon/euclid';
import {Geopad, GeoPoint, Step} from '../shared/types';
import { $N, animate, ease, SVGParentView } from '@mathigon/boost';
import { Burst } from '../shared/components/burst';


export function fnSketch($step: Step) {
  $step.$('.btn.clear')!.on('click', () => {
    ($step.$('x-coordinate-sketch') as any).clear();
  });
}

export function coordinatePlots($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('point');

  const targets = [new Point(-5, 3), new Point(-2, -1), new Point(4, -3)];

  $geopad.on('add:point', (e) => {
    const point = (e.point || e.path) as GeoPoint;  // Messy, sorry!
    const index = targets.findIndex(p => point.value?.equals(p));

    var burstType: string;

    if (index < 0) {
      $step.addHint('incorrect');
      point.$el.addClass('red');
      point.lock();
      burstType = 'burst incorrect';

      animate((p) => {
        const q = Math.sqrt(ease('bounce-in', 1-p));
        point.$el.css('transform', `scale(${q})`);
      }, 1000).promise.then(() => {
        point.delete();
      });
    } else {
      $step.score('p' + index);
      $step.addHint('correct');
      point.$el.addClass('green');
      point.lock();
      burstType = 'burst correct';
    }
      
    const burstElement = $N('g', {class: burstType}, $geopad.$svg);
    const burst = new Burst(burstElement as SVGParentView, 10);
    burst.play(1000, [point.$el.center.x, point.$el.center.y], [5, 25]).then(() => {
      burstElement.remove();
    })
  });

  $step.onScore('p0 p1 p2', () => {
    $geopad.switchTool('move');
  });
}

export function verticalLineTest($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $svg = $geopad.$('svg')!;
  const $labels = $geopad.$$('svg .labels text')!;

  // HACK: To get string axis labels I am simply replacing the contents of the axis label text elements.
  // TODO: Make names interactively update to reflect mappings assigned in earlier interactive

  const $xLabels = $labels.slice(0, 6);
  const $yLabels = $labels.slice(6, 11);

  const nameMappings: Record<string, string> = {
    '-1': '',
    '0': '',
    '1': 'Lynch',
    '2': 'Switch',
    '3': 'Derwent',
    '4': 'Zabini',
    '5': 'Clearwater'
  }

  const houseMappings: Record<string, string> = {
    '0': '',
    '1': 'Lionpaw',
    '2': 'Eaglewing',
    '3': 'Badgerclaw',
    '4': 'Serpentfang'
  }

  $xLabels.forEach(label => {
    label.text = nameMappings[label.text.toString()];
  });

  $yLabels.forEach(label => {
    label.text = houseMappings[label.text.toString()];
  });
}