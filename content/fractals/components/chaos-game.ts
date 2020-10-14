// =============================================================================
// Chaos Game Class
// (c) Mathigon
// =============================================================================


import {list} from '@mathigon/core';
import {Random} from '@mathigon/fermat';
import {Circle, Point} from '@mathigon/euclid';
import {CanvasView} from '@mathigon/boost';

import {GREY} from '../../shared/constants';
import {GeoPoint} from '../../shared/types';


function random<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}


export class ChaosGame {
  private queue = 0;
  private running = false;
  private vertices: Point[] = [];
  private colours: string[] = [];
  private lastIndex = 0;
  ratio = 0.5;
  rule = 'none';
  lastPoint!: Point;

  constructor(private readonly $canvas: CanvasView, public points: GeoPoint[]) {
  }

  private step() {
    if (!this.queue || !this.running) return this.running = false;
    const steps = Math.ceil(this.queue / 100);

    for (let i = 0; i < steps; ++i) {
      this.queue -= 1;
      this.drawPointTo(this.getNextIndex());
    }

    requestAnimationFrame(() => this.step());
  }

  private getNextIndex() {
    let index = Random.integer(this.vertices.length);
    if (this.rule === 'repeat' && index === this.lastIndex) {
      index = random(list(this.vertices.length).filter(i => i !== this.lastIndex));
    } else if (this.rule === 'adjacent') {
      index = random([this.lastIndex, (this.lastIndex + 1) % this.vertices.length,
        this.lastIndex ? this.lastIndex - 1 : this.vertices.length - 1]);
    }
    return index;
  }

  drawPointTo(index: number, radius = 2) {
    this.lastIndex = index;
    this.lastPoint = Point.interpolate(this.lastPoint, this.vertices[index], this.ratio);
    this.$canvas.draw(new Circle(this.lastPoint.scale(2), radius), {fill: this.colours[index]});
  }

  setup() {
    this.vertices = this.points.map(p => p.value!);
    this.colours = this.points.map(p => p.color);

    if (this.rule === 'midpoints') {
      for (const [i, p] of this.points.entries()) {
        const next = this.points[(i + 1) % this.points.length];
        this.vertices.push(Point.average(p.value!, next.value!));
        this.colours.push(GREY);
      }
    } else if (this.rule === 'center') {
      this.vertices.push(Point.average(...this.vertices));
      this.colours.push(GREY);
    }

    this.lastPoint = this.vertices[0];
  }

  play(n: number) {
    this.queue += n;
    if (this.running) return;
    this.setup();
    this.running = true;
    this.step();
  }

  pause() {
    this.running = false;
    this.queue = 0;
  }

  reset() {
    this.pause();
    this.$canvas.clear();
  }
}
