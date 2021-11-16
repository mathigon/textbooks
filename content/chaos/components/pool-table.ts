// =============================================================================
// Pool Table Component
// (c) Mathigon
// =============================================================================


import {last} from '@mathigon/core';
import {Ellipse, Line, Point} from '@mathigon/euclid';
import {$N, CustomElementView, Draggable, register, SVGParentView, SVGView} from '@mathigon/boost';


@register('x-pool-table')
export class PoolTable extends CustomElementView {
  private $path!: SVGView;
  private $end!: SVGView;

  ready() {
    const $svg = this.$('svg') as SVGParentView;

    $N('ellipse', {cx: 380, cy: 220, rx: 366, ry: 206, class: 'pool-table'}, $svg);
    this.$path = $N('path', {fill: 'transparent', stroke: 'white'}, $svg) as SVGView;

    const $start = $N('circle', {r: 20, fill: '#fd8c00'}, $svg);
    const drag = new Draggable($start, {$parent: $svg, useTransform: true});

    this.$end = $N('circle', {r: 20, fill: '#0f82f2'}, $svg) as SVGView;

    drag.on('move', (p) => this.drawPath(p.posn));
    drag.setPosition(380, 220);
  }

  drawPath(start: Point) {
    const ellipse = new Ellipse(new Point(380, 220), 360, 200);

    const points = [start];
    let line = new Line(start, start.shift(1, -1));

    for (let i = 0; i < 100; ++i) {
      const p = ellipse.intersect(line)[0];
      points.push(p);
      const q = line.p1.reflect(ellipse.normalAt(p));
      line = new Line(p, q);
    }

    this.$path.points = points;
    this.$end.setCenter(last(points));
  }
}
