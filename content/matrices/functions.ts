// =============================================================================
// Matrices
// (c) Mathigon
// =============================================================================


/// <reference types="THREE"/>
import {wait} from '@mathigon/core';
import {Matrix} from '@mathigon/fermat';
import {Angle, ORIGIN, Point} from '@mathigon/euclid';
import {ElementView, ScreenEvent, svgPointerPosn} from '@mathigon/boost';
import {Geopad, Step} from '../shared/types';

import './components/gaussian';
import {Gaussian} from './components/gaussian';


export function map($step: Step) {
  console.log('map');
  const $map = $step.$('#map-with-dots');
  const $netherlands = $step.$('#netherlands');
  // const $linesKeep = $step.$('#lines-keep');
  const $linesHide = $step.$('#lines-hide');
  const $mapHide = $step.$('#points-map-hide');
  // const $mapShow = $step.$('#points-map-show');

  console.log($map);
  setTimeout(() => {
    $netherlands?.exit('fade');
  }, 2000);

  setTimeout(() => {
    $linesHide?.exit('fade');
    $mapHide?.exit('fade');
  }, 3000);

  setTimeout(() => {
    $map?.css('transform', 'scale(2) translate(-50%,0)');
  }, 6000);
}

export function rocket($step: Step) {
  const $geo = $step.$('x-geopad') as Geopad;
  $step.model.th = 0;

  $geo.on('click', async () => {
    const $p = $geo.drawPoint(ORIGIN, {classes: 'green shot'});
    const angle = $step.model.th + Math.PI / 2;
    const target = new Point(30 * Math.cos(angle), 30 * Math.sin(angle));
    $geo.animatePoint($p.name, target, 750);
    await wait(750);
    $p.delete();
    $step.score('projectile');
  });

  $geo.on('pointermove', (e: ScreenEvent) => {
    const p = $geo.toPlotCoords(svgPointerPosn(e, $geo.$svg));
    $step.model.th = new Angle(new Point(0, 3), ORIGIN, p).rad;
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

export function playWithMe($step: Step) {
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
  const result = regex.exec(str)!;
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

export function introInverses($step:Step) {
  // TODO: complete
  const $geopads = $step.$('.inverse-row')?.$$('x-geopad') as Geopad[];

  const I = Matrix.identity(2);

  const names = ['rotate', 'scale', 'reflect'];
  names.forEach((name, i) => {
    drawUnitVectorsToGeo($geopads[i], I, name);
  });

  const $transforms = $step.$('.inverse-row')?.$$('.transform') as ElementView[];
  const matrices = [
    [[0, -1], [1, 0]],
    [[2, 0], [0, 2]],
    [[-1, 0], [0, 1]]
  ];

  // it just goes back to normal so we don't need these
  /* const inverses = [
    [[0.5, 0], [0, 0.5]],
    [[0.5, 0], [0, 0.5]],
    [[0.5, 0], [0, 0.5]]
  ]; */
  const $reverses = $step.$('.inverse-row')?.$$('.reverse') as ElementView[];

  $transforms.forEach((t, i) => {
    t.on('click', () => {
      animateTransformationOnGeo($geopads[i],
          `i${names[i]}`, `j${names[i]}`, matrices[i], 300);
    });
    // $reverses[i].disable()
  });

  $reverses.forEach((t, i) => {
    t.on('click', () => {
      animateTransformationOnGeo($geopads[i],
          `i${names[i]}`, `j${names[i]}`, I, 300);
    });
    // $transforms[i].disable()
  });
}

export function calculateInverse($step: Step) {
  const $geopad = $step.$('.inverse-row')?.$('x-geopad') as Geopad;

  const I = Matrix.identity(2);

  drawUnitVectorsToGeo($geopad, I, 'shear');

  const $transform = $step.$('.inverse-row')?.$('.transform') as ElementView;
  const matrix = [
    [[1, 0], [1, 1]]
  ];

  // it just goes back to normal so we don't need these
  /* const inverses = [
    [[0.5, 0], [0, 0.5]],
    [[0.5, 0], [0, 0.5]],
    [[0.5, 0], [0, 0.5]]
  ]; */
  const $reverse = $step.$('.inverse-row')?.$('.reverse') as ElementView;

  $transform.on('click', () => {
    animateTransformationOnGeo($geopad,
        `ishear`, `jshear`, matrix[0], 300);
  });

  $reverse.on('click', () => {
    animateTransformationOnGeo($geopad,
        `ishear`, `jshear`, I, 300);
  });
  // $transforms[i].disable()
}

export function rotationInverse(_$step: Step) {
  // TODO: put an x-matrix-solver here
}

class LinearCombinationStep {

  constructor(
    public multiply: number[],
    public into: number,
    public description: string) {
    //
  }
}

export function babylon($step: Step) {
  const $gaussian = $step.$('x-gaussian') as Gaussian;

  const linearCombinationSteps = [
    new LinearCombinationStep([-2 / 3, 1], 2, 'do a thing'),
    new LinearCombinationStep([0, -6 / 7], 2, 'simplify to solve R2'),
    new LinearCombinationStep([1, -1], 1, 'back substitute')
  ];

  // -- how to figure out this part? Step-by-step...
  const _functionSteps = linearCombinationSteps.map(lc => {

    const multiplySteps = lc.multiply.map((multiplier, i) => {
      return [
        () => $gaussian.createBlankRightMatrix(),
        () => $gaussian.multiplyRow(multiplier, i - 1),
        () => $gaussian.hideArrows(),
        () => $gaussian.copyRow(0), // another loop
        () => $gaussian.drawArrow(i - 1),
        () => $gaussian.copyRow(1), // should be i - 1
        () => $gaussian.hideArrows(),
        () => $gaussian.moveRightMatrixToLeft()
      ];
    });

    return multiplySteps;
  });
  /// MAP AND APPEND OR SOMETHING
  // $gaussian.setNextSteps(functionSteps); // why??? type not work???
}

// ==========================
// ===  GAUSSIAN SOLVER  ====
// ==========================
export function gaussianSolve(_$step: Step) {
  const $gauss = _$step.$('x-gaussian') as Gaussian;

  $gauss.setNextSteps(
      [
        // -- Step 1: set to 1.
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.multiplyRow(0, -1),
        // () => $gauss.drawArrow(0),
        () => $gauss.hideArrows(),
        () => $gauss.copyRow(0),
        () => $gauss.drawArrow(1),
        // () => $gauss.multiplyRow(1, 3),
        () => $gauss.copyRow(1),
        () => $gauss.hideArrows(),
        () => $gauss.moveRightMatrixToLeft(),

        // --  Step 2: multiply by 1/2
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.multiplyRow(1, 1 / 2),
        () => $gauss.drawArrow(1),
        () => $gauss.copyRow(1),
        () => $gauss.hideArrows(),
        () => $gauss.drawArrow(0),
        () => $gauss.copyRow(0),
        () => $gauss.hideArrows(),
        () => $gauss.moveRightMatrixToLeft(),

        // --  Step 3: Add rows 1 and 2 into row 2
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.drawArrow(0),
        () => $gauss.copyRow(0),
        () => $gauss.hideArrows(),
        () => $gauss.comboRow(0, 1, 1, 1, 1),
        () => $gauss.copyRow(1),
        () => $gauss.moveRightMatrixToLeft(),

        // -- Step 4: Put 1 in the diagonal.
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.drawArrow(0),
        () => $gauss.copyRow(0),
        () => $gauss.hideArrows(),
        () => $gauss.multiplyRow(1, -2),
        () => $gauss.drawArrow(1),
        () => $gauss.copyRow(1),
        () => $gauss.hideArrows(),
        () => $gauss.moveRightMatrixToLeft(),

        // -- Step 5: Add Rows 1 and 2.
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.comboRow(0, 1, 0, 1, 1),
        () => $gauss.copyRow(0),
        () => $gauss.drawArrow(1),
        () => $gauss.copyRow(1),
        () => $gauss.hideArrows(),
        () => $gauss.moveRightMatrixToLeft()
      ]
  );

  const back = $gauss.$('.btn.back');
  const next = $gauss.$('.btn.next');

  back?.on('click', () => {
    $gauss.backStep();
  });

  next?.on('click', () => {
    $gauss.nextStep();
  });
}

// ==========================
// ===  GAUSSIAN SOLVER  ====
// ==========================
export function gaussianSolve2($step: Step) {
  const $gauss = $step.$('x-gaussian') as Gaussian;

  $gauss.setNextSteps(
      [
        // -- Step 1: set to 1.
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.multiplyRow(0, 1 / 168),
        // () => $gauss.drawArrow(0),
        () => $gauss.hideArrows(),
        () => $gauss.copyRow(0),

        () => $gauss.drawArrow(1),
        () => $gauss.copyRow(1),
        () => $gauss.hideArrows(),

        () => $gauss.drawArrow(2),
        () => $gauss.copyRow(2),
        () => $gauss.hideArrows(),

        () => $gauss.moveRightMatrixToLeft(),

        // -- Step 2: multiply by 1/168
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.multiplyRow(1, 1 / 168),
        () => $gauss.drawArrow(1),
        () => $gauss.copyRow(1),
        () => $gauss.hideArrows(),

        () => $gauss.drawArrow(0),
        () => $gauss.copyRow(0),
        () => $gauss.hideArrows(),
        () => $gauss.drawArrow(2),
        () => $gauss.copyRow(2),
        () => $gauss.hideArrows(),


        () => $gauss.moveRightMatrixToLeft(),

        // -- Step 3: Add rows 1 and 2 into row 2
        () => $gauss.createBlankRightMatrix(),
        () => $gauss.drawArrow(0),
        () => $gauss.copyRow(0),
        () => $gauss.hideArrows(),

        () => $gauss.comboRow(0, 1, 1, 1, -1),
        () => $gauss.copyRow(1),

        () => $gauss.drawArrow(2),
        () => $gauss.copyRow(2),
        () => $gauss.hideArrows(),

        () => $gauss.moveRightMatrixToLeft()
      ]
  );
  const back = $gauss.$('.btn.back');
  const next = $gauss.$('.btn.next');

  back?.on('click', () => {
    $gauss.backStep();
  });

  next?.on('click', () => {
    $gauss.nextStep();
  });
}
