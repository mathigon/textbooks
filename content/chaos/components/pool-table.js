// =============================================================================
// Pool Table Component
// (c) Mathigon
// =============================================================================


import {square, last} from '@mathigon/core';
import {Point, Line, Angle, quadratic} from '@mathigon/fermat';
import {CustomElement, registerElement, $N, Draggable} from '@mathigon/boost';


class Ellipse {

  constructor(c, rx, ry) {
    this.c = c;
    this.rx = this.a = rx;
    this.ry = this.b = ry;
    // TODO Make this work for vertical ellipses.
    // q is the distance from the focus to the origin.
    this.q = Math.sqrt(square(this.rx) - square(this.ry));
  }

  get f1() { return this.c.shift(-this.q, 0); }
  get f2() { return this.c.shift(this.q, 0); }

  normalAt(p) {
    const a = new Angle(this.f1, p, this.f2);
    return a.bisector;
  }

  intersect(line) {
    const dx = line.p1.x - line.p2.x;
    const dy = line.p1.y - line.p2.y;

    const px = this.c.x - line.p1.x;
    const py = this.c.y - line.p1.y;

    const A = square(dx / this.a) + square(dy / this.b);
    const B = 2 * px * dx / square(this.a) + 2 * py * dy / square(this.b);
    const C = square(px / this.a) + square(py / this.b) - 1;

    const points = quadratic(A, B, C);
    return points.map(t => line.at(t));
  }

}

// -----------------------------------------------------------------------------

export class PoolTable extends CustomElement {

  ready() {
    const $svg = this.$('svg');

    $N('ellipse', {cx: 380, cy: 220, rx: 366, ry: 206, class: 'pool-table'}, $svg);
    this.$path = $N('path', {fill: 'transparent', stroke: 'white'}, $svg);

    const $start = $N('circle', {r: 20, fill: '#ff941f'}, $svg);
    const drag = new Draggable($start, $svg, {useTransform: true, responsive: true});

    this.$end = $N('circle', {r: 20, fill: '#1f7aff'}, $svg);

    drag.on('move', (p) => this.drawPath(p));
    drag.setPosition(380, 220);
  }

  drawPath(start) {
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

registerElement('x-pool-table', PoolTable);
