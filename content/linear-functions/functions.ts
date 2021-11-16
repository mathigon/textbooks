// =============================================================================
// Functions
// (c) Mathigon
// =============================================================================


import {clamp, roundTo} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {$N, Draggable, svgPointerPosn, SVGView} from '@mathigon/boost';
import {Step} from '@mathigon/studio';
import {CoordinateSystem} from '../shared/types';


export function slope($step: Step) {
  const $chart = $step.$('x-coordinate-system') as CoordinateSystem;
  $chart.setFunctions(x => 1.5 * x);
  $step.model.p = {x: 1, y: 2};

  const $point = $N('div', {class: 'chart-point'}, $chart);
  const $triangle = $N('path', {class: 'triangle'}, $chart.$overlay) as SVGView;
  const $lineX = $N('line', {class: 'line-x', target: 'dx'}, $chart.$overlay) as SVGView;
  const $lineY = $N('line', {class: 'line-y', target: 'dy'}, $chart.$overlay) as SVGView;

  const $labelX = $N('div', {class: 'chart-label blue', target: 'dx'}, $chart);
  const $labelY = $N('div', {class: 'chart-label green', target: 'dy'}, $chart);

  const $svg = $chart.$overlay.$ownerSVG;

  function pfn(p: Point) {
    const q = $chart.toPlotCoords(p);
    const x = clamp(roundTo(q.x, 0.5), -4, 4);
    return $chart.toViewportCoords(new Point(x, 1.5 * x));
  }

  const drag = new Draggable($point, {$parent: $chart, round: pfn});
  let hasSelected = false;

  $chart.on('mousemove', (e) => {
    if (hasSelected) return;

    const p = $chart.toPlotCoords(svgPointerPosn(e, $svg));
    if (Math.abs(p.y - 1.5 * p.x) > 1) {
      $point.removeClass('visible');
    } else {
      $point.addClass('visible');
      const point = $chart.toViewportCoords(new Point(p.x, 1.5 * p.x));
      drag.setPosition(point.x, point.y);
    }
  });

  $chart.on('click', (e) => {
    if (hasSelected) return;

    const p = $chart.toPlotCoords(svgPointerPosn(e, $svg));
    if (Math.abs(p.y - 1.5 * p.x) > 1) return;

    $point.addClass('fixed');
    hasSelected = true;
    $step.score('make-point');
  });

  const origin = $chart.toViewportCoords(new Point(0, 0));
  drag.on('move', ({posn}) => {
    $step.model.p = $chart.toPlotCoords(posn);

    const corner = {x: posn.x, y: origin.y};
    $lineX.setLine(corner, origin);
    $lineY.setLine(posn, corner);
    $triangle.points = [origin, corner, posn];

    $labelX.css('left', origin.x + (posn.x - origin.x) / 2 + 'px');
    $labelX.css('top', origin.y + 'px');
    $labelX.text = $step.model.p.x;

    $labelY.css('left', posn.x + 'px');
    $labelY.css('top', origin.y + (posn.y - origin.y) / 2 + 'px');
    $labelY.text = $step.model.p.y;
  });

  $step.onScore('make-point', () => {
    $lineY.enter('draw', 400, 200);
    $labelX.enter('fade', 400, 250);
    $lineX.enter('draw', 400, 600);
    $labelY.enter('fade', 400, 650);
    $triangle.enter('fade', 400, 1000);
  });

  $step.onScore('blank-0', () => {
    drag.on('end', () => $step.score('slide-point'));
  });
}

export function questions1($step: Step) {
  const $charts = $step.$$('x-coordinate-system') as CoordinateSystem[];

  $charts[0].setFunctions(x => 0.5 * x);
  $charts[0].drawPoints([new Point(2, 1)]);

  $charts[1].setFunctions(x => 3 * x);
  $charts[1].drawPoints([new Point(1, 3)]);

  $charts[2].setFunctions(x => -x);
  $charts[2].drawPoints([new Point(-2, 2)]);
}

export function intercept($step: Step) {
  const $chart = $step.$('x-coordinate-system') as CoordinateSystem;
  $chart.setFunctions(x => 2 / 3 * x);

  const arrows = [-6, -3, 0, 3, 6];
  const $lines = arrows.map(
      () => $N('line', {class: 'arrow'}, $chart.$overlay) as SVGView);
  const points = arrows.map(
      x => $chart.toViewportCoords(new Point(x, 2 / 3 * x)));

  $step.model.sign = (a: number) => a < 0 ? '–' : '+';
  $step.model.abs = Math.abs;

  $step.model.watch((state: any) => {
    $chart.setFunctions(x => 2 / 3 * x + state.a);
    $lines.forEach(($l, i) => {
      if (state.a) {
        $l.show();
      } else {
        return $l.hide();
      }
      const end = $chart.toViewportCoords(
          new Point(arrows[i], 2 / 3 * arrows[i] + state.a));
      $l.setLine(points[i], end.shift(0, state.a < 0 ? -8 : 8));
    });
  });
}

export function equation1($step: Step) {
  const $chart = $step.$('x-coordinate-system') as CoordinateSystem;
  $chart.setFunctions(x => 3 / 4 * x + 2);

  const $point1 = $N('div', {class: 'chart-point fixed', hidden: true}, $chart);
  const $point2 = $N('div', {class: 'chart-point fixed', hidden: true}, $chart);

  const $triangle = $N('path', {class: 'triangle'}, $chart.$overlay) as SVGView;
  const $lineX = $N('line', {class: 'line-x'}, $chart.$overlay) as SVGView;
  const $lineY = $N('line', {class: 'line-y'}, $chart.$overlay) as SVGView;

  function pfn(p: Point) {
    const q = $chart.toPlotCoords(p);
    const x = clamp(roundTo(q.x, 0.5), -4, 4);
    return $chart.toViewportCoords(new Point(x, 3 / 4 * x + 2));
  }

  const drag1 = new Draggable($point1, {$parent: $chart, round: pfn});
  const drag2 = new Draggable($point2, {$parent: $chart, round: pfn});

  drag1.on('move', ({posn}) => {
    const corner = {x: drag2.position.x, y: posn.y};
    $lineX.setLine(posn, corner);
    $lineY.setLine(corner, drag2.position);
    $triangle.points = [drag2.position, corner, posn];
  });

  drag2.on('move', ({posn}) => {
    const corner = {x: posn.x, y: drag1.position.y};
    $lineX.setLine(corner, drag1.position);
    $lineY.setLine(posn, corner);
    $triangle.points = [drag1.position, corner, posn];
  });

  drag1.setPosition(180, 145);
  drag2.setPosition(320, 40);

  $step.onScore('blank-0', () => {
    $point1.enter('pop', 400, 200);
    $point2.enter('pop', 400, 400);
    $lineY.enter('draw', 400, 600);
    $lineX.enter('draw', 400, 1000);
    $triangle.enter('fade', 400, 1400);
  });
}

export function questions2($step: Step) {
  const $charts = $step.$$('x-coordinate-system') as CoordinateSystem[];

  $charts[0].setFunctions(x => 1.5 * x - 2);
  $charts[0].drawPoints([new Point(2, 1), new Point(0, -2)]);

  $charts[1].setFunctions(x => 2 * x + 1);
  $charts[1].drawPoints([new Point(1, 3), new Point(0, 1)]);

  $charts[2].setFunctions(x => -0.5 * x + 3);
  $charts[2].drawPoints([new Point(-2, 4), new Point(0, 3)]);
}
