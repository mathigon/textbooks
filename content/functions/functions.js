// =============================================================================
// Functions
// (c) Mathigon
// =============================================================================


import './components/numberline';
import {Point, roundTo} from "@mathigon/fermat";
import {$N, Draggable} from "@mathigon/boost";

export function slope($step) {

  const $chart = $step.$('x-coordinate-system');
  $chart.setFunctions(x => 1.5 * x);

  const $svg = $chart.$('svg');
  const $point = $N('div', {class: 'chart-point'}, $chart);

  function pfn(p) {
    const q = $chart.plotToMathCoords(new Point(p.x, 0));
    return $chart.mathToPlotCoords(new Point(q.x, 1.5 * q.x));
  }

  const drag = new Draggable($point, $svg, '', 12, false, 1, pfn);
  drag.position = {x: 20, y: 10};

  drag.on('move', (p) => {

  });




}
