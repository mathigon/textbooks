// =============================================================================
// Physics Simulation Component
// (c) Mathigon
// =============================================================================


import {Point, Segment} from '@mathigon/fermat';
import {animate} from '@mathigon/boost';



class Trail {

  constructor(name, color, width = 4, maxLength = 400) {
    this.name = name;
    this.color = color;
    this.width = width;
    this.maxLength = maxLength;

    this.tail = new Float32Array(maxLength * 2);
    this.clear();
  }


  push(p) {
    this.tail[this.index * 2] = p.x;
    this.tail[this.index * 2 + 1] = p.y;
    this.index = (this.index + 1) % this.maxLength;
    if (this.length < this.maxLength) this.length += 1;
  }

  get points() {
    const points = [];
    for (let i = this.index; i > this.index - this.length; i--) {
      let x = (i + this.maxLength) % this.maxLength;
      points.push([this.tail[x * 2], this.tail[x * 2 + 1]]);
    }
    return points;
  }

  draw($canvas, res = 2) {
    const tail = this.points.map(t => new Point(t[0] * res, t[1] * res));
    for (let i = 1; i < tail.length - 2; ++i) {
      const line = new Segment(tail[i], tail[i + 1]);
      const opacity = 0.5 * (1 - i / tail.length);
      $canvas.draw(line, {stroke: this.color, strokeWidth: this.width, opacity});
    }
  }

  clear() {
    this.length = 0;
    this.index = 0;
  }
}

// -----------------------------------------------------------------------------

export class Simulation {

  constructor($geopad, $canvas, state, trails) {
    this.$geopad = $geopad;
    this.$canvas = $canvas;
    this.state = state;
    this.model = $geopad.model;

    this.animation = null;

    this.trails = trails.map(t => new Trail(t[0], t[1]));

    this.points = Object.keys(state);
    for (let p of this.points) this.model.set(p, state[p]);
  }

  play(callback, speed = 1, steps = 3) {
    this.$geopad.lock();
    for (let t of this.trails) t.clear();

    // Copy the updated state from the model.
    for (let p of this.points) this.state[p] = this.model[p];

    this.animation = animate(() => {
      // Prevent drawing immediately after the animation has been stopped.
      if (!this.animation) return;

      for (let i = 0; i < steps; ++i) callback(speed / steps);

      for (let t of this.trails) t.push(this.state[t.name]);
      for (let p of this.points) this.model[p] = this.state[p];

      this.$canvas.clear();
      for (let t of this.trails) t.draw(this.$canvas);
      // TODO Draw the trail position at most 10 times per second.
    });
  }

  pause() {
    if (!this.animation) return;
    this.animation.cancel();
    this.animation = null;
    this.$geopad.unlock();
  }

  addTrails(...trails) {
    for (let t of trails) this.trails.push(new Trail(t[0], t[1]));
  }
}
