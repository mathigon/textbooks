// =============================================================================
// Chaos Theory
// (c) Mathigon
// =============================================================================


import {Obj} from '@mathigon/core';
import {isBetween} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {$N, animate, AnimationResponse, AudioPlayer, CanvasView, SVGView} from '@mathigon/boost';
import {PlayToggle, Step} from '@mathigon/studio';

import {Geopad} from '../shared/types';
import {Simulation} from './components/simulation';
import {DoublePendulum} from './components/double-pendulum';
import {WaterCanvas} from './components/water-ripples';

import './components/pool-table';
import './components/water-ripples';


// -----------------------------------------------------------------------------
// Introduction

export function pendulum($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $play = $step.$('x-play-toggle') as PlayToggle;

  const center = new Point(160, 160);
  let l = 120;
  let a = 2.4;
  let da = 0;

  const state = {p: center.shift(Math.sin(a) * l, Math.cos(a) * l)};
  const trails = [['p', '#cd0e66']] as [string, string][];
  const sim = new Simulation($geopad, $canvas, state, trails);

  function step(dt: number) {
    da -= 5 * Math.sin(a) / l * dt;
    a = a + da * dt;
    state.p = center.shift(Math.sin(a) * l, Math.cos(a) * l);
  }

  $play.on('play', () => {
    l = Point.distance($step.model.p, center);
    a = Math.PI / 2 - $step.model.p.angle(center);
    da = 0;

    sim.play(step, 0.1125, 3);
    setTimeout(() => $step.score('play'), 8000);
  });

  $play.on('pause', () => {
    sim.pause();
    $step.score('play');
  });
}

export function doublePendulum($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $play = $step.$('x-play-toggle') as PlayToggle;

  const model = $step.model;
  const center = new Point(160, 160);
  const state = {};
  let showAll = false;

  const pendulums = [new DoublePendulum(state, ['a1', 'a2'], center),
    new DoublePendulum(state, ['b1', 'b2'], center),
    new DoublePendulum(state, ['c1', 'c2'], center),
    new DoublePendulum(state, ['d1', 'd2'], center)];

  const trails = [['d2', '#cd0e66']] as [string, string][];
  const sim = new Simulation($geopad, $canvas, state, trails);

  function showPendulums() {
    if (showAll) return;
    showAll = true;
    $play.pause();

    model.a1 = model.b1 = model.c1 = model.d1;
    model.a2 = model.b2 = model.c2 = model.d2;

    sim.addTrails(['a2', '#fd8c00'], ['b2', '#22ab24'], ['c2', '#0f82f2']);
    for (const $p of $geopad.$$('path.thick')) $p.show();
  }

  $step.onScore('blank-0', showPendulums);
  $step.on('complete', showPendulums);

  $play.on('play', () => {
    setTimeout(() => $step.score('play1'), 12000);
    if (showAll) setTimeout(() => $step.score('play2'), 8000);

    for (const p of pendulums) p.set(model.d1, model.d2);

    // Add a small perturbation to the initial angle.
    pendulums[1].angles[1] += 0.0001;
    pendulums[2].angles[1] += 0.0002;
    pendulums[3].angles[1] += 0.0003;

    sim.play((dt) => {
      for (const p of pendulums) p.step(dt);
    }, 0.1125, 3);
  });

  $play.on('pause', () => {
    $step.score('play1');
    if (showAll) $step.score('play2');
    sim.pause();
  });
}

export function butterfly1($step: Step) {
  const $canvas = $step.$('x-water-canvas') as WaterCanvas;
  const $butterfly = $step.$('.butterfly')!;
  const $tornado = $step.$('.tornado')!;

  $butterfly.on('pointerdown', () => {
    $butterfly.addClass('flap');
    $canvas.touchWater(new Point(200, 250), 2);
    setTimeout(() => $butterfly.removeClass('flap'), 200);
    setTimeout(() => $tornado.addClass('active'), 6000);
    setTimeout(() => $tornado.removeClass('active'), 10000);
    setTimeout(() => $step.score('flap'), 7000);
  });
}

function videoPlay($step: Step) {
  $step.$('x-video')!.on('play', () => $step.score('video'));
}

function videoEnd($step: Step) {
  $step.$('x-video')!.on('end', () => $step.score('video'));
}

export const butterfly2 = videoPlay;
export const dominoes = videoEnd;
export const applications = videoPlay;
export const popCulture = videoPlay;


// -----------------------------------------------------------------------------
// Mathematical Billiard

const RADIUS = 10;

class Ball {
  p: Point;
  v: Point;
  $el: SVGView;

  constructor(x: number, y: number, fill: string) {
    this.p = new Point(x, y);
    this.v = new Point(0, 0);
    this.$el = $N('circle', {r: RADIUS, cx: x, cy: y, fill}) as SVGView;
  }
}

const collision = new AudioPlayer('/content/chaos/images/ball.mp3');

function playCollision() {
  collision.play();
}

export function pool($step: Step) {
  const $svg = $step.$('svg')!;
  const $toggle = $step.$('x-play-toggle') as PlayToggle;
  const $path = $N('path', {fill: 'transparent', stroke: 'white', d: 'M60,220'},
      $svg) as SVGView;

  const bounds = [20 + RADIUS, 20 + RADIUS, 740 - RADIUS, 420 - RADIUS];

  const cue = new Ball(60, 220, 'white');
  const balls = [cue];

  for (let i = 0; i < 7; ++i) {
    for (let j = 0; j < 7; ++j) {
      balls.push(new Ball(690 - i * 50, 70 + j * 50, '#fd8c00'));
    }
  }

  for (const b of balls) $svg.append(b.$el);

  cue.v = new Point(5, -0.25);

  function step() {
    for (let i = 0; i < balls.length; ++i) {
      const b = balls[i];
      if (!isBetween(b.p.x, bounds[0], bounds[2])) {
        b.v = b.v.scale(-1, 1);
        playCollision();
      }

      if (!isBetween(b.p.y, bounds[1], bounds[3])) {
        b.v = b.v.scale(1, -1);
        playCollision();
      }

      for (let j = i + 1; j < balls.length; ++j) {
        const b1 = balls[j];
        if (Point.distance(b.p, b1.p) < 2 * RADIUS) {
          // https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional_collision_with_two_moving_objects
          const d = b.p.subtract(b1.p);
          const dv = Point.dot(b.v.subtract(b1.v), d) / d.length ** 2;
          b.v = b.v.subtract(d.scale(dv));
          b1.v = b1.v.add(d.scale(dv));
          playCollision();
        }
      }
    }

    for (const b of balls) {
      b.p = b.p.add(b.v);
      b.$el.setCenter(b.p);
    }

    $path.addPoint(cue.p);
  }

  let animation: AnimationResponse;
  $toggle.on('play', () => animation = animate(step));
  $toggle.on('pause', () => animation.cancel());
}


// -----------------------------------------------------------------------------
// Three Body Problem

export function threeBodies($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $play = $step.$('x-play-toggle') as PlayToggle;
  const $restore = $step.$('.restore')!;

  const initial: Obj<Point> = {
    a: Point.fromPolar(0, 120).shift(240, 240),
    b: Point.fromPolar(2 / 3 * Math.PI, 120).shift(240, 240),
    c: Point.fromPolar(4 / 3 * Math.PI, 120).shift(240, 240),
    va: Point.fromPolar(Math.PI / 2, 66),
    vb: Point.fromPolar(2 * Math.PI / 3 + Math.PI / 2, 66),
    vc: Point.fromPolar(4 * Math.PI / 3 + Math.PI / 2, 66)
  };

  const state: Obj<Point> = Object.assign({}, initial);
  const trails = [['a', '#cd0e66'], ['b', '#0f82f2'],
    ['c', '#22ab24']] as [string, string][];

  function acceleration(i: string) {
    let gravity = new Point(0, 0);
    for (const j of ['a', 'b', 'c']) {
      if (i === j) continue;
      const dx = state[j].subtract(state[i]);
      gravity = gravity.translate(dx.scale(1600000 / dx.length ** 3));
    }
    return gravity;
  }

  function step(dt: number) {
    const acc: Obj<Point> = {};
    for (const p of ['a', 'b', 'c']) acc[p] = acceleration(p);

    for (const i of ['a', 'b', 'c']) {
      state[i] = state[i].translate(state['v' + i].scale(dt));
      state['v' + i] = state['v' + i].translate(acc[i].scale(dt));
    }
  }

  const sim = new Simulation($geopad, $canvas, state, trails);
  $play.on('play', () => sim.play(step, 0.05, 250));
  $play.on('pause', () => sim.pause());

  $restore.on('click', () => {
    $play.pause();
    Object.assign(state, initial);
    Object.assign($step.model, initial);
    $canvas.clear();
  });
}
