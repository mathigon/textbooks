import {$N, ElementView, observe, SVGParentView, SVGView} from '@mathigon/boost';
import {Point, Rectangle} from '@mathigon/euclid';
import {Draggable, Step} from '@mathigon/studio';

const DOTS = [
  [],  // 0
  [[0, 0]],  // 1
  [[-0.9, -0.9], [0.9, 0.9]],  // 2
  [[-1, -1], [0, 0], [1, 1]],  // 3
  [[-0.9, -0.9], [0.9, -0.9], [0.9, 0.9], [-0.9, 0.9]],  // 4
  [[-1, -1], [1, -1], [1, 1], [-1, 1], [0, 0]],  // 5
  [[-0.9, -1.1], [-0.9, 0], [-0.9, 1.1], [0.9, -1.1], [0.9, 0], [0.9, 1.1]]  // 6
];

function makeFaceContents(i: number): [SVGView, SVGView[]] {
  const size = 100;
  const $rect = $N('rect', {width: `${size}%`, height: `${size}%`, fill: 'white'}) as SVGView;
  const halfSize = size / 2;
  const margin = 0.25;
  const marginSize = size * margin;
  const scale = (size - (marginSize * 2)) / size;
  const $dots = DOTS[i].map(p => {
    const x = (p[0] * halfSize) + halfSize;
    const y = (p[1] * halfSize) + halfSize;
    return $N(
        'circle',
        {
          cx: `${(x * scale) + marginSize}%`,
          cy: `${(y * scale) + marginSize}%`,
          r: `${size / 9}%`,
          fill: 'black'
        }
    ) as SVGView;
  });
  return [$rect, $dots];
}

function makeFaceSVG(i: number) {
  const $contents = makeFaceContents(i);
  const $dieSVG = $N('svg', {viewbox: '0 0 100 100'}) as SVGParentView;
  $dieSVG.append($contents[0]);
  for (const $dot of $contents[1]) $dieSVG.append($dot);
  return $dieSVG;
}

export type NetPosition = {pos: [number, number], opposite: number};

function placementsHave(p: Record<number, number>, v: number) {
  for (const k in p) {
    if (p[k] == v) return true;
  }
  return false;
}

export function setupDieFacesPlacement($step: Step, netPositions: NetPosition[]) {
  const placedCount = observe({c: 0});

  placedCount.watch(val => {
    if (val.c == 6) $step.score('faces-placed');
  });

  const facesPlaced: Record<number, number> = {};
  const sideSize = 100;
  const $svg = $step.$('svg') as SVGParentView;
  const $rootGroup = $N('g', {}, $svg) as SVGView;
  const $targets = netPositions.map((netPosition, index) => {
    const [x, y] = netPosition.pos;
    const $sideGroup = $N('g', {}, $rootGroup) as SVGView;
    const shape = new Rectangle(new Point(0, 0), sideSize, sideSize);
    const $target = $N('path', {}, $sideGroup) as SVGView;
    $target.draw(shape);
    $target.addClass('target');
    $target.setAttr('side-index', index);
    $sideGroup.setAttr('transform', `translate(${x * sideSize} ${y * sideSize})`);
    return $target;
  });
  $rootGroup.setAttr('transform', 'scale(0.8)');
  const $facesArea = $step.$('div.die-faces')!;
  const $faces = $facesArea.$$('div.face') as ElementView[];
  for (const [index, $face] of $faces.entries()) {
    const $die = makeFaceSVG(index + 1);
    $face.append($die);
  }
  const faces = $faces.map($face => new Draggable($face, {$targets, useTransform: true, resetOnMiss: true, withinBounds: false}));
  for (const [index, face] of faces.entries()) {
    face.on('enter-target', ({$target}: {$target: ElementView}) => {
      $target.addClass('over');
    });
    face.on('exit-target', ({$target}: {$target: ElementView}) => {
      $target.removeClass('over');
    });
    const $f = face.$el.$('svg')!.copy(true);
    $f.setAttr('width', sideSize);
    $f.setAttr('height', sideSize);
    face.on('end', ({$target}: {$target?: ElementView}) => {
      if ($target == undefined) return;
      $target.removeClass('over');
      const faceValue = index + 1;
      const targetIndex = parseInt($target.attr('side-index'));
      const oppositeIndex = netPositions[targetIndex].opposite;
      if (
        (
          facesPlaced[oppositeIndex] == undefined &&
          !placementsHave(facesPlaced, 7 - faceValue)
        ) ||
        facesPlaced[oppositeIndex] + faceValue == 7
      ) {
        $target.addClass('placed');
        $target.parent?.prepend($f);
        facesPlaced[targetIndex] = faceValue;
        placedCount.c++;
        face.$el.remove();
        $step.addHint('correct');
        for (const f of faces) {
          f.removeTarget($target);
        }
      } else {
        $step.addHint('incorrect');
        face.resetPosition();
      }
    });
  }
}
