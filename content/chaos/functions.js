// =============================================================================
// Chaos Theory
// (c) Mathigon
// =============================================================================


import {square} from '@mathigon/core';
import {Point, isBetween} from '@mathigon/fermat';
import {$N, animate} from '@mathigon/boost';

import {Pendulum, DoublePendulum} from './components/pendulum'
import './components/pool-table'
import './components/water-ripples'


// -----------------------------------------------------------------------------
// Introduction

export function pendulum($step) {
  const $geopad = $step.$('x-geopad');
  const $canvas = $geopad.$('canvas');
  const $toggle = $step.$('x-play-toggle');
  let animation = null;

  const p1 = new Pendulum($step.model, $step.model.c, 'p', 120, [2.4, 0]);

  $toggle.on('play', () => {
    $geopad.lock();
    p1.reset();
    setTimeout(() => $step.score('play'), 8000);

    animation = animate(() => {
      p1.step(0.1125);
      $canvas.clear();
      p1.drawTail($canvas, '#b30469', 2);
    });
  });

  $toggle.on('pause', () => {
    $geopad.unlock();
    $step.score('play');
    if (animation) animation.cancel();
  });
}

export function doublePendulum($step) {
  const $geopad = $step.$('x-geopad');
  const $canvas = $geopad.$('canvas');
  const $toggle = $step.$('x-play-toggle');
  const $pendulums = $geopad.$$('.paths path');

  const model = $step.model;
  const length = [80, 60];
  const state = [2, 2.6, 0, 0];

  const p1 = new DoublePendulum(model, model.c, ['a1', 'a2'], length, state);
  const p2 = new DoublePendulum(model, model.c, ['b1', 'b2'], length, state);
  const p3 = new DoublePendulum(model, model.c, ['c1', 'c2'], length, state);
  const p4 = new DoublePendulum(model, model.c, ['d1', 'd2'], length, state);

  let animation = null;
  let showAll = false;

  $step.onScore('blank-1', () => {
    $toggle.pause();

    model.a1 = model.b1 = model.c1 = model.d1;
    model.a2 = model.b2 = model.c2 = model.d2;

    for (let $p of $pendulums) $p.show();
    setTimeout(() => showAll = true, 10);  // Prevent last draw in animation.
  });

  $toggle.on('play', () => {
    $geopad.lock();
    setTimeout(() => $step.score('play1'), 12000);
    if (showAll) setTimeout(() => $step.score('play2'), 8000);

    model.a1 = model.b1 = model.c1 = model.d1;
    model.a2 = model.b2 = model.c2 = model.d2;
    for (let p of [p1, p2, p3, p4]) p.reset();

    // Add a small perturbation to the initial angle.
    p2.state[1] += 0.0001;
    p3.state[1] += 0.0002;
    p4.state[1] += 0.0003;

    animation = animate(() => {
      for (let p of [p1, p2, p3, p4]) p.step(0.1125);
      $canvas.clear();
      if (showAll) p1.drawTail($canvas, '#ff941f', 2);
      if (showAll) p2.drawTail($canvas, '#31b304', 2);
      if (showAll) p3.drawTail($canvas, '#1f7aff', 2);
      p4.drawTail($canvas, '#b30469', 2);
    });
  });

  $toggle.on('pause', () => {
    $geopad.unlock();
    $step.score('play1');
    if (showAll) $step.score('play2');
    if (animation) animation.cancel();
  });
}

export function butterfly1($step) {
  const $canvas = $step.$('x-water-canvas');
  const $butterfly = $step.$('.butterfly');
  const $tornado = $step.$('.tornado');

  $butterfly.on('pointerdown', () => {
    $butterfly.addClass('flap');
    $canvas.touchWater(new Point(200, 250), 2);
    setTimeout(() => $butterfly.removeClass('flap'), 200);
    setTimeout(() => $tornado.addClass('active'), 6000);
    setTimeout(() => $tornado.removeClass('active'), 10000);
    setTimeout(() => $step.score('flap'), 7000);
  });
}

function videoPlay($step) {
  $step.$('x-video').on('play', () => $step.score('video'));
}

function videoEnd($step) {
  $step.$('x-video').on('end', () => $step.score('video'));
}

export const butterfly2 = videoPlay;
export const dominoes = videoEnd;
export const applications = videoEnd;
export const popCulture = videoPlay;


// -----------------------------------------------------------------------------
// Mathematical Billiard

const RADIUS = 10;

class Ball {
 constructor(x, y, fill) {
   this.p = new Point(x, y);
   this.v = new Point(0, 0);
   this.$el = $N('circle', {r: RADIUS, cx: x, cy: y, fill});
 }
}


const collision = new Audio('/resources/chaos/images/ball.mp3');
function playCollision() {
  collision.currentTime = 0;
  // collision.play();
}

export function pool($step) {
  const $svg = $step.$('svg');
  const $path = $N('path', {fill: 'transparent', stroke: 'white', d: 'M60,220'}, $svg);

  const bounds = [20 + RADIUS, 20 + RADIUS, 740 - RADIUS, 420 - RADIUS];

  const cue = new Ball(60, 220, 'white');
  const balls = [cue];

  for (let i = 0; i < 7; ++i) {
    for (let j = 0; j < 7; ++j) {
      balls.push(new Ball(690 - i * 50, 70 + j * 50, 'red'));
    }
  }

  for (let b of balls) $svg.append(b.$el);

  cue.v = new Point(5, -0.25);

  animate(() => {
    for (let i = 0; i < balls.length; ++i) {
      const b = balls[i];
      if (!isBetween(b.p.x, bounds[0], bounds[2])) {
        b.v.x *= -1;
        playCollision();
      }

      if (!isBetween(b.p.y, bounds[1], bounds[3])) {
        b.v.y *= -1;
        playCollision();
      }

      for (let j = i + 1; j < balls.length; ++j) {
        const b1 = balls[j];
        if (Point.distance(b.p, b1.p) < 2 * RADIUS) {
          // https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional_collision_with_two_moving_objects
          const d = b.p.subtract(b1.p);
          const dv = Point.dot(b.v.subtract(b1.v), d) / square(d.length);
          b.v = b.v.subtract(d.scale(dv));
          b1.v = b1.v.add(d.scale(dv));
          playCollision();
        }
      }
    }

    for (let b of balls) {
      b.p = b.p.add(b.v);
      b.$el.setCenter(b.p);
    }

    $path.addPoint(cue.p);
  });
}
