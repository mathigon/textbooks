

import {Geopad, Step} from '../../shared/types';
import {Angle, Point} from '@mathigon/euclid';
import {ElementView, ScreenEvent} from '@mathigon/boost';
import {Matrix} from '@mathigon/fermat';

/**
 * Given a Geopad and PointerEvent, calculate the Angle between y-axis and mouse point
 *
 * @param $geo Geopad position
 * @param event PointerEvent (for x and y)
 */
function mouseToGeopad($geo: Geopad, event: PointerEvent): Angle {
  const p1 = $geo.toPlotCoords(
      new Point(
          event.clientX - $geo.topLeftPosition.x,
          event.clientY - $geo.topLeftPosition.y));

  return new Angle(new Point(0, 3), new Point(0, 0), p1);
}

/**
 * Animate a shot emanating from the spaceship.
 *
 * @param $geo Geopad
 * @param index which (recycled) shot is fired
 * @param angle angle at which to fire
 */
function fireShot($geo: Geopad, index: number, angle: number) {
  const shots = $geo.$$('.shot');
  shots[index].show(); // this doesn't really do anything...

  const SHOT_TIME = 750;
  const MAX_RADIUS = 30; // approximated from sqrt(2*20^2)

  const aimAt = new Point(
      MAX_RADIUS * Math.cos(angle + Math.PI / 2),
      MAX_RADIUS * Math.sin(angle + Math.PI / 2)
  );

  const origin = new Point(0, 0);

  $geo.animatePoint(`s${index}`, aimAt, SHOT_TIME);
  setTimeout(() => {
    $geo.animatePoint(`s${index}`, origin, 1);
    shots[index].hide();
  }, SHOT_TIME);
}

export function intro($step: Step) {
  const $geo = $step.$('x-geopad') as Geopad;
  const shots = $geo.$$('.shot') as ElementView[];
  shots.forEach(s => s.hide()); // doesn't matter since they blend in.

  let shotIndex = 0;
  $step.model.th = 0; // initialize here

  $geo.on('click', () => {
    $step.score('projectile');

    fireShot($geo, shotIndex, $step.model.th);
    shotIndex = (shotIndex + 1) % shots.length;
  });

  $geo.on('pointermove', (e: ScreenEvent) => {

    if (e instanceof PointerEvent && e.pointerType === 'mouse') {
      const ev = e as PointerEvent;
      const angle: Angle = mouseToGeopad($geo, ev);

      $step.model.th = angle.rad;
    }
  });
}


/**
 * This applies a transformation to a shape
 * while scaling it from [0, 80] to [0, 110]
 *
 * @param shape
 */
function generateTransformFunction(shape: number[][]) {

  // b and c must be negative to account for... what exactly??
  return function(a: number, b: number, c: number, d: number) {
    const pointString = shape
        .map(p => [p[0] - 40, p[1] - 40]) // normalize from [0, 80] to [-1, 1]
        .map(p => [[p[0]], [p[1]]]) // map to a matrix
        .map(p => Matrix.product([
          [a, -b],
          [-c, d]
        ], p))
        .map(p => [p[0][0], p[1][0]]) // map back to vector
        .map(p => [p[0] + 110, p[1] + 110]) // scale from [-1, 1] to [0, 220]
        .map(point => point.join(','))
        .join(' ');

    return `<polygon points="${pointString}" opacity="0.5" />`;
  };
}

export function basicTransformations($step: Step) {

  // FIXME: different shape
  const SHAPE = [[30, 10], [10, 70], [60, 70], [50, 10]];
  $step.model.polygonTransform = generateTransformFunction(SHAPE);
}

export function mathigonMatrix($step: Step) {
  // These are on a scale of ... 0 to 80, then 0 to 220 (why???)
  const SHAPES: { [id: string] : number[][]; } = {
    red: [[10, 10], [40, 40], [10, 70]],
    yellow: [[40, 40], [10, 70], [40, 70]],
    blue: [[40, 40], [40, 70], [70, 70], [70, 40]],
    green: [[40, 40], [70, 40], [70, 10]]
  };

  $step.model.polygonTransform = (a: number, b: number, c: number, d: number, color: string) => {
    return generateTransformFunction(SHAPES[color])(a, b, c, d);
  };
}

/**
 * Animates a Linear Transformation on a GeoPad
 *
 * @param geo Geopad
 * @param iv name of i-unit-vector
 * @param jv name of j-unit-vector
 * @param m transformation matrix. m[0] is new i-vector and m[1] is new j-vector
 */
function animateTransformationOnGeo(geo: Geopad, iv: string, jv:string, m: number[][], time: number) {
  geo.animatePoint(iv, new Point(m[0][0], m[0][1]), time);
  geo.animatePoint(jv, new Point(m[1][0], m[1][1]), time);
}

export function playWithMe($step: Step) {

  console.log($step.model);

  const $geopad = $step.$('x-geopad') as Geopad;

  // buttons
  const buttons = $step.$$('.button');

  // paths
  const _fabric = $step.$$('.fabric');

  const ANIMATE = 1000;

  // identity
  buttons[0].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[1, 0], [0, 1]], ANIMATE);
  });

  // shear
  buttons[1].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[1, 0], [1, 1]], ANIMATE);
  });

  // scale
  buttons[2].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[2, 0], [0, 2]], ANIMATE);
  });

  // rotate 90
  buttons[3].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[0, 1], [-1, 0]], ANIMATE);
  });

  // determinant = 0
  buttons[4].on('click', () => {
    animateTransformationOnGeo($geopad, 'ipoint', 'jpoint', [[1, 1], [-1, -1]], ANIMATE);
  });
}
