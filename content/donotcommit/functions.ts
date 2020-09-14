import {Obj} from '@mathigon/core';
import {isBetween, Point} from '@mathigon/fermat';
import {$N, animate, AnimationResponse, CanvasView, ElementView, SVGView} from '@mathigon/boost';

import {Geopad, PlayBtn, PlayToggle, Slider, Step} from '../shared/types';
import {Simulation} from './components/simulation';
import {polygonArea} from 'd3';
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

/**
 * This is a way to visualize binary values with horizontal bars.
 */
export function trash($step: Step) {

  const PADDING = 2; const WIDTH = 12; const RX = 4;

  function drawSizedBar(size: number, indexStart: number) {
    let color;
    // this is bad
    switch (size) {
      case 1:
        color = 'rgb(253,140,1)';
        break;
      case 2:
        color = 'rgb(15,130,242)';
        break;
      case 4:
        color = 'rgb(34,171,36)';
        break;
      case 8:
        color = 'rgb(205,14,102)';
        break;
      case 16:
        color = 'rgb(109,59,191)';
        break;
      case 32:
        color = 'rgb(0,158,166)';
        break;
    }
    return `<rect x="${PADDING + indexStart*(WIDTH+PADDING)}" y="0" ` +
    `width="${(WIDTH+PADDING)*size - PADDING}" height="${WIDTH}" rx="${RX}" ` +
    `style="fill:${color}" />`;
  }

  $step.model.xTable = (a: number) => {

    let svg = `<svg width="${(WIDTH+PADDING)*32 + PADDING}" height="100">`;

    const ns = [32, 16, 8, 4, 2, 1];
    let index = 0;
    ns.forEach(n => {
      if (n & a) {
        svg += drawSizedBar(n, index);
        index += n;
      }
    });
    svg += `</svg>`;

    return svg;
  };

  console.log($step.model.a);
}

function play($step: Step, $el: ElementView, duration: number, score: string,
    callback: () => void) {
  const $play = $el.$('x-play-btn') as PlayBtn;
  $play.on('play', () => {
    callback();
    setTimeout(() => $step.score(score), duration);
    setTimeout(() => $play.reset(), duration + 2000);
  });
}

export function trans($step: Step) {
  const $animations = $step.$$('.animation');
  const $images = $step.$$('.image');

  console.log($images);

  play($step, $animations[0], 1000, 't1', () => {
    $images[0].animate(
        {transform: ['none', 'translate(95px,45px) rotate(18deg) scale(1.2)']},
        1000
    );
  });

  play($step, $animations[1], 1000, 't2', () => {
    $images[1].animate({
      transform: ['none', 'translate(80px,100px) scale(0.9,1.3) rotate(-30deg)']
    }, 1000);
  });

  // not a linear transformation because it changes the shape
  play($step, $animations[2], 1000, 't3', () => {
    $images[2].animate({
      transform: ['translate(-20px,40px) rotate(-30deg)',
        'rotate(30deg) translate(135px,0) scale(0.8)'], rx: ['50px', 0],
      ry: ['50px', 0]
    }, 1000);
  });
}

export function rigid1($step: Step) {
  const $animations = $step.$$('.animation');
  const $images = $step.$$('.image');
  const $lines = $step.$$('line');
  const $arrow = $step.$('.arrow-head')!;

  // Blue Spade
  // Translate up and right
  console.log($animations);
  play($step, $animations[0], 1000, 'r1', () => {
    $arrow.hide();
    $images[0].animate({transform: ['none', 'translate(90px,-40px)']},
        1000, 0, 'linear');
    $lines[0].enter('draw', 1000); // these will be useful for linear transformations.
    $arrow.enter('fade', 400, 900); // what is the aroow??? it will also be useful
  });

  // Teal Chevron
  // reflect over a line
  play($step, $animations[1], 2000, 'r2', () => {
    $images[1].css('transform', 'none');
    $lines[1].enter('draw', 1000);
    $images[1].animate(
        {transform: 'rotate(54deg) translate(230px,-118px) scaleX(-1)'},
        1000
    );
  });

  // Green Pentagon
  // Rotate around point (origin?)
  // <g class="image" style="transform-origin: 56px 136px">
  play($step, $animations[2], 2000, 't3', () => {
    $images[2].css('transform', 'none');
    for (let i = 2; i < 7; ++i) $lines[i].enter('draw', 500);
    $images[2].animate({transform: 'rotate(84deg)'}, 1000, 1000);
  });
}


/**
 * Okay looks like I have a general idea of how this should work, but I need to work out some details.
 * How???
 * @param $step
 */
export function translations($step: Step) {

  const $polygons = $step.$('svg')?.$$('polygon') as ElementView[];
  const origin = {x: -40, y: -30}; // center polygon on "origin" (top left)
  const center = {x: 110, y: 110};
  const cascade = {x: origin.x + center.x, y: origin.y + center.y};

  $polygons[0].setTransform(cascade);
  $polygons[1].setTransform(cascade);

  $step.model.watch((state: any) => {
    console.log(state.a);

    const scale = {x: cascade.x * state.a, y: cascade.y * 1};
    $polygons[1].setTransform(cascade, 0, state.a);
  });
}

/**
 * Rotate (how??)
 * @param $step
 */
export function rotations($step: Step) {

  const $polygons = $step.$('svg')?.$$('polygon') as ElementView[];
  const center = {x: 50, y: 50};
  console.log($polygons[1]);

  $step.model.watch((state: any) => {
    console.log(state.angle);
    // yeah, so this isn't doing what I want!
    $polygons[1].setTransform(center, Math.PI * state.angle / 360);
  });
}

/**
 * Very cool.
 * NEXT: center on theorigin and make it reflect about
 * NEXT: make the origin thicker
 *
 * @param $step
 */
export function scale($step: Step) {

  console.log('inside of scale');
  console.log('here is the model');
  console.log($step.model);

  $step.model.polygonScale = (xscale: number, yscale: number) => {
    console.log(xscale, yscale);

    const points = [[30, 10], [10, 70], [70, 70], [50, 10]];
    const transformedPoints = points.map(p => [p[0]*xscale, p[1]*yscale]);
    const pointString = transformedPoints.map(point => + point[0] + ',' + point[1]).join(' ');
    const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;

    return poly0;
  };
}

/**
 * Also very cool.
 *
 * @param $step
 */
export function skew($step: Step) {

  $step.model.polygonSkew = (xskew: number, yskew: number) => {
    console.log(xskew, yskew);

    const points = [[30, 10], [10, 70], [70, 70], [50, 10]];
    const transformedPoints = points.map(p => [p[0]*1 + p[1]*xskew, p[1]*1 + p[0]*yskew]);
    const pointString = transformedPoints.map(point => + point[0] + ',' + point[1]).join(' ');
    const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;


    return poly0;
  };

  console.log('inside of skew');
  console.log('here is the model');
  console.log($step.model);
}

// NEXT: figure out why the heck this ain't workin'
export function rotate($step: Step) {

  $step.model.polygonRotate = (angle: number) => {
    console.log('rotate', angle);

    const rads = Math.PI * angle / 360;
    const cos = Math.cos(rads);
    const sin = Math.sin(rads);

    const points = [[30, 10], [10, 70], [70, 70], [50, 10]];
    const transformedPoints = points.map(p =>
      [cos * p[0] - sin * p[1],
        sin * p[0] + cos * p[1]]
    );
    const pointString = transformedPoints.map(point => + point[0] + ',' + point[1]).join(' ');
    const poly0 = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;

    return poly0;
  };

  console.log('inside of rotate');
  console.log('here is the model');
  console.log($step.model);

}
