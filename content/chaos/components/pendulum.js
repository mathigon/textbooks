// =============================================================================
// Pendulum Component
// (c) Mathigon
// =============================================================================


import {Point, Segment} from '@mathigon/fermat';

const TAIL_LENGTH = 400;


export class PendulumBase {

  constructor(model, center, points, lengths, state) {
    this.model = model;
    this.center = center;
    this.points = points;
    this.lengths = lengths;
    this.state = state;

    this.tail = new Float32Array(TAIL_LENGTH * 2);
    this.tailLength = 0;
    this.tailIndex = 0;

    for (let p of points) model.set(p, null);
    this.drawPoint();
  }

  drawPoint() { }

  pushTail(x, y) {
    this.tail[this.tailIndex * 2] = x;
    this.tail[this.tailIndex * 2 + 1] = y;
    this.tailIndex = (this.tailIndex + 1) % TAIL_LENGTH;
    if (this.tailLength < TAIL_LENGTH) this.tailLength += 1;
  }

  getTail() {
    const points = [];
    for (let i = this.tailIndex; i > this.tailIndex - this.tailLength; i--) {
      let x = (i + TAIL_LENGTH) % TAIL_LENGTH;
      points.push([this.tail[x * 2], this.tail[x * 2 + 1]]);
    }
    return points;
  }

  drawTail($canvas, color, res = 1) {
    const tail = this.getTail().map(t => new Point(t[0] * res, t[1] * res));
    for (let i = 1; i < tail.length - 2; ++i) {
      const line = new Segment(tail[i], tail[i + 1]);
      const opacity = 0.5 * (1 - i / tail.length);
      $canvas.draw(line, {stroke: color, strokeWidth: 3, opacity});
    }
  }

  step(dt) {
    // We run update multiple times, to reduce the time difference.
    for (let i=0; i<3; ++i) this.update(dt/3);
    this.drawPoint();
  }
}


// -----------------------------------------------------------------------------
// Single Pendulum

export class Pendulum extends PendulumBase {

  constructor(model, center, point, length, state = null) {
    super(model, center, [point], [length], state || [3, 0]);
  }

  update(dt) {
    let [a, da] = this.state;
    const g = 9.8 / 2;

    const d2a = -g * Math.sin(a) / this.lengths[0];

    da += d2a * dt;
    this.state = [a + da * dt, da];
  }

  drawPoint() {
    const a = this.state[0];
    const l = this.lengths[0];
    const p = this.center.shift(Math.sin(a) * l, Math.cos(a) * l);

    this.model[this.points[0]] = p;
    this.pushTail(p.x, p.y);
  }
}


// -----------------------------------------------------------------------------
// Double Pendulum

export class DoublePendulum extends PendulumBase {

  constructor(model, center, points, lengths, state = null) {
    super(model, center, points, lengths, state || [3, 3, 0, 0]);
  }

  update(dt) {
    let [a, b, da, db] = this.state;
    const [l1, l2] = this.lengths;

    const g = 9.8 / 2;
    const mu = 3;

    const cos = Math.cos(a-b);
    const sin = Math.sin(a-b);

    // Source: http://www.physicsandbox.com/projects/double-pendulum.html
    const d2a =    (g*(Math.sin(b)*cos-mu*Math.sin(a)) - (   l2*db*db + l1*da*da*cos)*sin)/(l1*(mu-cos*cos));
    const d2b = (mu*g*(Math.sin(a)*cos-   Math.sin(b)) + (mu*l1*da*da + l2*db*db*cos)*sin)/(l2*(mu-cos*cos));

    da += d2a * dt;
    db += d2b * dt;
    this.state = [a + da * dt, b + db * dt, da, db];
  }

  drawPoint() {
    const [a1, a2] = this.state;
    const [l1, l2] = this.lengths;

    const p1 = this.center.shift(Math.sin(a1) * l1, Math.cos(a1) * l1);
    const p2 = p1.shift(Math.sin(a2) * l2, Math.cos(a2) * l2);

    this.model[this.points[0]] = p1;
    this.model[this.points[1]] = p2;
    this.pushTail(p2.x, p2.y);
  }
}
