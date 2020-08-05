// =============================================================================
// Pool Table Component
// (c) Mathigon
// =============================================================================


import {last} from '@mathigon/core';
import {Angle, Line, Point, quadratic} from '@mathigon/fermat';
import {$N, CustomElementView, Draggable, register, SVGParentView, SVGView} from '@mathigon/boost';


class Ellipse {
  q: number;  // Distance from the focus to the origin.

  constructor(private c: Point, private a: number, private b: number) {
    // TODO Make this work for vertical ellipses.
    this.q = Math.sqrt(a ** 2 - b ** 2);
  }

  get f1() {
    return this.c.shift(-this.q, 0);
  }

  get f2() {
    return this.c.shift(this.q, 0);
  }

  normalAt(p: Point) {
    const a = new Angle(this.f1, p, this.f2);
    return a.bisector!;
  }

  intersect(line: Line) {
    const dx = line.p1.x - line.p2.x;
    const dy = line.p1.y - line.p2.y;

    const px = this.c.x - line.p1.x;
    const py = this.c.y - line.p1.y;

    const A = (dx / this.a) ** 2 + (dy / this.b) ** 2;
    const B = 2 * px * dx / (this.a) ** 2 + 2 * py * dy / (this.b) ** 2;
    const C = (px / this.a) ** 2 + (py / this.b) ** 2 - 1;

    const points = quadratic(A, B, C);
    return points.map(t => line.at(t));
  }
}

// -----------------------------------------------------------------------------

@register('x-pool-table')
export class PoolTable extends CustomElementView {
  private $path!: SVGView;
  private $end!: SVGView;

  ready() {
    const $svg = this.$('svg') as SVGParentView;

    $N('ellipse', {cx: 380, cy: 220, rx: 366, ry: 206, class: 'pool-table'}, $svg);
    this.$path = $N('path', {fill: 'transparent', stroke: 'white'}, $svg) as SVGView;

    const $start = $N('circle', {r: 20, fill: '#fd8c00'}, $svg);
    const drag = new Draggable($start, $svg, {useTransform: true});

    this.$end = $N('circle', {r: 20, fill: '#0f82f2'}, $svg) as SVGView;

    drag.on('move', (p) => this.drawPath(p));
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
