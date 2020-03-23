// =============================================================================
// Chaos Game Class
// (c) Mathigon
// =============================================================================


import {CanvasView} from '@mathigon/boost';
import {Circle, Point, Random} from '@mathigon/fermat';
import {GeoPoint} from '../../shared/types';


export class ChaosGame {
  private queue = 0;
  private running = false;
  lastPoint: Point;

  constructor(readonly points: GeoPoint[], readonly $canvas: CanvasView,
              private readonly ratio = 0.5) {
    this.lastPoint = points[0].value!;
  }

  private step() {
    if (!this.queue || !this.running) return this.running = false;
    const steps = Math.ceil(this.queue/ 100);

    for (let i = 0; i < steps; ++i) {
      this.queue -= 1;
      const vertex = this.points[Random.integer(this.points.length)];
      this.lastPoint = Point.interpolate(this.lastPoint, vertex.value!, this.ratio);
      this.$canvas.draw(new Circle(this.lastPoint.scale(2), 2), {fill: 'red'});
    }

    requestAnimationFrame(() => this.step());
  }

  run(n: number) {
    this.queue += n;
    if (!this.running) {
      this.running = true;
      this.step();
    }
  }

  reset() {
    this.$canvas.clear();
    this.queue = 0;
    this.running = false;
  }
}
