// =============================================================================
// Physics Simulation Component
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';
import {Point, Segment} from '@mathigon/euclid';
import {animate, AnimationResponse, CanvasView, Observable} from '@mathigon/boost';
import {Geopad} from '../../shared/types';


export class Trail {
  private tail: Float32Array;
  private length = 0;
  private index = 0;

  constructor(readonly name: string, private color: string, private width = 4,
              private maxLength = 400) {
    this.tail = new Float32Array(maxLength * 2);
  }

  push(p: Point) {
    this.tail[this.index * 2] = p.x;
    this.tail[this.index * 2 + 1] = p.y;
    this.index = (this.index + 1) % this.maxLength;
    if (this.length < this.maxLength) this.length += 1;
  }

  get points() {
    const points = [];
    for (let i = this.index; i > this.index - this.length; i--) {
      const x = (i + this.maxLength) % this.maxLength;
      points.push([this.tail[x * 2], this.tail[x * 2 + 1]]);
    }
    return points;
  }

  draw($canvas: CanvasView, res = 2) {
    const tail = this.points.map(t => new Point(t[0] * res, t[1] * res));
    for (let i = 1; i < tail.length - 2; ++i) {
      const line = new Segment(tail[i], tail[i + 1]);
      const opacity = 0.5 * (1 - i / tail.length);
      $canvas.draw(line,
          {stroke: this.color, strokeWidth: this.width, opacity});
    }
  }

  clear() {
    this.length = 0;
    this.index = 0;
  }
}

// -----------------------------------------------------------------------------

type TrailList = [string, string][];
type State = Obj<Point>;

export class Simulation {
  private trails: Trail[] = [];
  private animation?: AnimationResponse;
  private points: string[];
  private model: Observable;

  constructor(private $geopad: Geopad, private $canvas: CanvasView,
              private state: State, trails: TrailList) {
    this.model = $geopad.model;
    this.addTrails(...trails);
    this.points = Object.keys(state);
    for (const p of this.points) this.model[p] = state[p];
  }

  play(callback: (p: number) => void, speed = 1, steps = 3) {
    this.$geopad.locked = true;
    for (const t of this.trails) t.clear();

    // Copy the updated state from the model.
    for (const p of this.points) this.state[p] = this.model[p];

    this.animation = animate(() => {
      // Prevent drawing immediately after the animation has been stopped.
      if (!this.animation) return;

      for (let i = 0; i < steps; ++i) callback(speed / steps);

      for (const t of this.trails) t.push(this.state[t.name]);
      for (const p of this.points) this.model[p] = this.state[p];

      this.$canvas.clear();
      for (const t of this.trails) t.draw(this.$canvas);
      // TODO Draw the trail position at most 10 times per second.
    });
  }

  pause() {
    if (!this.animation) return;
    this.animation.cancel();
    this.animation = undefined;
    this.$geopad.locked = false;
  }

  addTrails(...trails: TrailList) {
    for (const t of trails) this.trails.push(new Trail(t[0], t[1]));
  }
}
