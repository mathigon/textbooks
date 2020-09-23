// =============================================================================
// Matrices
// (c) Mathigon
// =============================================================================

/// <reference types="THREE"/>

import {Geopad, Step} from '../shared/types';
import {ElementView, ScreenEvent} from '@mathigon/boost';
import {Angle, Matrix, Point} from '@mathigon/fermat';
import {Solid} from '../shared/components/solid';

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
      MAX_RADIUS * Math.cos(angle + Math.PI/2),
      MAX_RADIUS * Math.sin(angle + Math.PI/2)
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

    const _scale = {x: cascade.x * state.a, y: cascade.y * 1};
    $polygons[1].setTransform(cascade, 0, state.a);
  });
}

/**
 *
 * @param A 2x2 matrix
 * @param v 2x1 vector
 */
function applyTransform(A: number[][], v: number[]): number[] {

  return [
    A[0][0]*v[0] + A[0][1]*v[1],
    A[1][0]*v[0] + A[1][1]*v[1]
  ];
}

export function basicTransformations($step: Step) {

  const SHAPE = [[30, 10], [10, 70], [60, 70], [50, 10]];
  // Shear
  $step.model.polygonShear = (xshear: number, yshear: number) => {
    // here's where we have to do that p5js strategy where we push and pop translates to display it
    // (1) center polygon along the origin (0,0)
    // (2) apply transformation shown in matrix
    // (3) move it to center (110, 110)
    // let's try some d3 style formatting
    const pointString = SHAPE.map(p => [p[0]-40, p[1]-40])         // (1) center shape along origin (0,0)
        .map(p => applyTransform([
          [1, - xshear],  // why is this negative?
          [-yshear, 1]   // is this the right direction?
        ], p)) // (2) apply transformation from matrix
        .map(p => [p[0]+110, [p[1]+110]])     // (3) move to center of SVG
        .map(point => point.join(','))        // commas between xy coords
        .join(' ');                            // spaces between coord pairs

    const poly = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;

    return poly;
  };

  $step.model.polygonScale = (xscale: number, yscale: number) => {
    // here's where we have to do that p5js strategy where we push and pop translates to display it
    // (1) center polygon along the origin (0,0)
    // (2) apply transformation shown in matrix
    // (3) move it to center (110, 110)
    // let's try some d3 style formatting
    const pointString = SHAPE.map(p => [p[0]-40, p[1]-40])         // (1) center shape along origin (0,0)
        .map(p => applyTransform([            // (2) apply transformation from matrix
          [xscale, 0],
          [0, yscale]
        ], p))
        .map(p => [p[0]+110, [p[1]+110]])     // (3) move to center of SVG
        .map(point => point.join(','))        // commas between xy coords
        .join(' ');                            // spaces between coord pairs

    const poly = `<polygon points="${pointString}" fill="#ff941f" opacity="0.5" />`;

    return poly;
  };
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

/**
 * Parse a string into array of two numbers.
 *
 * @param str Should match [number, number]
 */
function parseNumberArray(str: string): number[]|undefined {
  const regex = /\[(-?\d+(?:\.?\d+)?),(-?\d+(?:\.?\d+)?)\]/; // could simplify by not allowing float
  console.log(`parsing string: ${str}`);
  const result = regex.exec(str)!;
  console.log(result);
  return result.slice(1, 3).map(n => Number.parseFloat(n)); // pick 1 and 2
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

export function transformsCalculator($step: Step) {
  const $cubes = $step.$$('.cube') as ElementView[]; // they're squares, actually

  // g[0] x g[1] = g[2]
  const $geopads = $step.$('.display')?.$$('x-geopad') as Geopad[];

  // buttons
  const $calc = $step.$('.calc') as ElementView;
  const $clear = $step.$('.clear') as ElementView;

  let a: number[][] | undefined = undefined;
  let b: number[][] | undefined = undefined;
  let c: number[][] | undefined = undefined;
  const I = Matrix.identity(2);

  /**
   * Currently only used to draw Identity Matrix, but worth keeping.
   *
   * @param geo Geopad to draw on.
   * @param matrix transformation to draw.
   * @param name name of matrix (gets mapped to i${name} and j${name})
   */
  function drawUnitVectorsToGeo(geo: Geopad, matrix: number[][], name: string) {
    geo.drawPoint('point(0,0)',
        {name: 'origin', interactive: false, classes: 'hidden'});
    geo.drawPoint(`point(${matrix[0][0]},${matrix[0][1]})`,
        {name: `i${name}`, interactive: false, classes: 'hidden'});
    geo.drawPoint(`point(${matrix[1][0]},${matrix[1][1]})`,
        {name: `j${name}`, interactive: false, classes: 'hidden'});
    geo.drawPath(`segment(origin,i${name})`, {classes: 'red'});
    geo.drawPath(`segment(origin,j${name})`, {classes: 'green'});
  }

  const WAIT = 200;
  const ANIMATE = 500;

  for (const [_i, $c] of $cubes.entries()) {
    $c.on('click', () => {

      if (a === undefined) {
        a = [];
        a.push(parseNumberArray($c.attr('i'))!);
        a.push(parseNumberArray($c.attr('j'))!);
        drawUnitVectorsToGeo($geopads[0], I, 'a'); // initialize as Identity
        // then animate to transformation
        setTimeout(() => animateTransformationOnGeo($geopads[0], 'ia', 'ja', a!, ANIMATE), WAIT);

      } else if (b === undefined) {
        b = [];
        b.push(parseNumberArray($c.attr('i'))!);
        b.push(parseNumberArray($c.attr('j'))!);
        drawUnitVectorsToGeo($geopads[1], I, 'b'); // initialize as Identity
        // then animate to transformation
        setTimeout(() => animateTransformationOnGeo($geopads[1], 'ib', 'jb', b!, ANIMATE), WAIT);
      }
    });
  }

  $clear.on('click', () => {
    a = undefined;
    b = undefined;
    $geopads[0].$svg.$('.paths')!.removeChildren();
    $geopads[0].$svg.$('.points')!.removeChildren();
    $geopads[1].$svg.$('.paths')!.removeChildren();
    $geopads[1].$svg.$('.points')!.removeChildren();
    $geopads[2].$svg.$('.paths')!.removeChildren();
    $geopads[2].$svg.$('.points')!.removeChildren();
  });

  $calc.on('click', () => {

    if (a !== undefined && b !== undefined) {
      drawUnitVectorsToGeo($geopads[2], I, 'c');

      c = Matrix.product(a, b);

      // show it animating from I to A to C.
      setTimeout(() => {
        animateTransformationOnGeo($geopads[2], 'ic', 'jc', a!, ANIMATE);
        setTimeout(() => animateTransformationOnGeo($geopads[2], 'ic', 'jc', c!, ANIMATE), ANIMATE);
      }, WAIT);
    }
  });
}

/**
 * Show determinant as area.
 */
export function determinants($step:Step) {
  $step.model.watch((state: any) => {
    const i = state.ipoint;
    const j = state.jpoint;
    $step.model.determinant = i.x * j.y - i.y * j.x;
  });

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

import * as u from './utils3d';

export function threeDimensions($step: Step) {
  const $solids = $step.$$('x-solid') as Solid[];

  const basic3d = $solids[0];
  basic3d.addMesh((scene) => {
    // $solids[1].addWireframe(new THREE.Line)

    // DRAW PLANES
    const PLANE_SIZE = 4;
    const zPlaneMaterial = Solid.translucentMaterial(0xcd0e66, 0.3);
    const zPlane = new THREE.Mesh(new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE, 10, 10), zPlaneMaterial);
    zPlane.rotateX(Math.PI/2);
    basic3d.addArrow([0, 0, 0], [0, 0, 1], 0xcd0e66);

    const yPlaneMaterial = Solid.translucentMaterial(0x0f82f2, 0.3);
    const yPlane = new THREE.Mesh(new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE, 10, 10), yPlaneMaterial);
    yPlane.rotateY(Math.PI/2);
    basic3d.addArrow([0, 0, 0], [0, 1, 0], 0x0f82f2);

    const xPlaneMaterial = Solid.translucentMaterial(0x22ab24, 0.3);
    const xPlane = new THREE.Mesh(new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE, 10, 10), xPlaneMaterial);
    xPlane.rotateZ(Math.PI/2);
    basic3d.addArrow([0, 0, 0], [1, 0, 0], 0x22ab24);

    const vectorArrow = basic3d.addArrow([0, 0, 0], [$step.model.x, $step.model.y, $step.model.z], 0x000000);

    $step.model.watch((state: any) => {
      // A-HA! This doesn't work, and there's even a TODO to go with it
      // "TODO Support changing the height of the arrow."
      vectorArrow.updateEnds!([0, 0, 0], [state.x, state.y, state.z]);
      scene.draw();
    });

    return [xPlane, yPlane, zPlane];
  });

  /**
   * Add intersection lines to a solid.
   * TODO: should use a new function in Fermat.js to calculate intersection lines.
   *
   * @param solid
   */
  function addIntersectionLinesToSolid(solid: Solid) {

    // intersection b/t Yellow and Cyan planes
    // x + y + z = 1
    // y = 1
    solid.addLine([0, 1, 0], [-1, 1, 1], 0x00ff00);

    // intersection b/t Magenta and Cyan planes
    // z = 1, y = 1
    solid.addLine([2, 1, 1], [-1, 1, 1], 0x0000ff);

    // intersection b/t magenta and yellow planes
    // x + y + z = 1
    // z = 1
    solid.addLine([0, 0, 1], [-1, 1, 1], 0xff0000);
  }

  const soq = $solids[1];
  soq.addMesh((scene) => {

    u.addUnitVectorsToSolid(soq);

    // Plane for 1*x + 1*y + 1*z = 1
    const planeYellow = u.planeFromNormal(
        new THREE.Vector3(1, 1, 1),
        new THREE.Vector3(1, 0, 0),
        0xffff00
    );
    soq.object.add(planeYellow);

    // Plane for 0*x + 1*y + 0*z = 1
    // a.k.a. y=1
    const planeCyan = u.planeFromNormal(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 1, 0),
        0x00ffff
    );
    soq.object.add(planeCyan);

    // Plane for 0*x + 0*y + 1*z = 1
    // a.k.a. z=1
    const planeMagenta: THREE.Mesh = u.planeFromNormal(
        new THREE.Vector3(0, 0, 1),
        new THREE.Vector3(0, 0, 1),
        0xff00ff
    );
    soq.object.add(planeMagenta);

    addIntersectionLinesToSolid(soq);

    // TODO: try this method
    /* const px: THREE.Mesh = u.planeFromCoplanarPoints(
        new Vector3(1, 0, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 0, 1),
        0xff00ff
    );
    soq.object.add(px); */

    $step.model.watch((state: any) => {

      // this moves the plane at z=1 to z=zi
      const newPlane = u.planeFromNormal(
          new THREE.Vector3(0, 0, state.zi),
          new THREE.Vector3(0, 0, state.zi),
          0xff0ff
      );
      planeMagenta.geometry.dispose();
      planeMagenta.geometry = newPlane.geometry;
      scene.draw();

      // not quite right...
      /* const plane2 = u.planeFromNormal(
          new THREE.Vector3(state.xi, state.yi, state.zi),
          new THREE.Vector3(state.xi, state.yi, state.zi),
          0xffff00
      );
      planeCyan.geometry.dispose();
      planeCyan.geometry = plane2.geometry; */
    });
  });
}
