// =============================================================================
// Quadratic Equations
// (c) Mathigon
// =============================================================================


import {list} from '@mathigon/core';
import {nearlyEquals} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {Step} from '@mathigon/studio';
import {CoordinateSystem, EquationSystem} from '../shared/types';

import './components/projectile';
import '../shared/components/webgl/conic-section';


// -----------------------------------------------------------------------------
// Shared Utilities

function q(a: number, b: number, c: number) {
  return (x: number) => (a * x * x + b * x + c);
}

function zeros(a: number, b: number, c: number) {
  const disc = b * b - 4 * a * c;
  if (disc < 0) return [];

  if (nearlyEquals(disc, 0, 0.1)) return [-b / (2 * a)];

  const x1 = (-b + Math.sqrt(disc)) / (2 * a);
  const x2 = (-b - Math.sqrt(disc)) / (2 * a);
  return [x1, x2];
}

/* let PROPERTIES = {
  quadratic: [{
    name: 'Direction',
    fn(params) { return params[2]; },
    error(val, exp) { return `The parabola should point ${exp > 0 ? 'up' : 'down'}.`; },
    hint(val, exp) { return 'todo'; }
  }, {
    name: 'Turning point X',
    fn(params) { return params[0] - square(params[1]/2/params[2]); },
    error(val, exp) { return `The turning point should be ${exp > 0 ? 'right of' : exp === 0 ? 'on' : 'left of'} the y-axis.`; },
    hint(val, exp) { return 'todo'; }
  }, {
    name: 'Turning point Y',
    fn(params) { return 'todo'; },
    error(val, exp) { return `The turning point should be ${exp > 0 ? 'above' : exp === 0 ? 'on' : 'below'} the x-axis.`; },
    hint(val, exp) { return 'todo'; }
  }, {
    name: 'Y axis intercept',
    fn(params) { return 'todo'; },
    error(val, exp) { return `The function should intersect the y-axis ${exp > 0 ? 'above' : exp === 0 ? 'on' : 'below'} the x-axis.`; },
    hint(val, exp) { return 'todo'; }
  }]
};

function compare(params, paramsExp, type) {
  let properties = PROPERTIES[type];

  for (let p of properties) {
    let val = p.fn(params);
    let exp = p.fn(paramsExp);
    if (sign(val) !== sign(exp)) {
      return {error: p.error(val, exp), hint: p.hint(val, exp)}
    }
  }

  return {error: undefined};
} */


// -----------------------------------------------------------------------------
// Introduction

export function intro4($step: Step) {
  const $system = $step.$('x-equation-system') as EquationSystem;

  $system.isFinal = (expr) => {
    const str = expr.toString();
    return (expr.variables.length === 1) && expr.functions.includes('sup') &&
           str.includes('89000') && str.includes('3250') &&
           !str.includes('(');
  };

  $system.on('solve-row', ({$math}) => {
    for (const $mi of $math.$$('mi')) {
      if ($mi.text === 'revenue') $mi.addClass('pill green');
      if ($mi.text === 'cost') $mi.addClass('pill orange');
      if ($mi.text === 'demand') $mi.addClass('pill teal');
      if ($mi.text === 'price') $mi.addClass('pill purple');
    }
  });
}

export function introTable($step: Step) {
  $step.addHint('calculator');
}

export function introChart($step: Step) {
  const $chart = $step.$('x-coordinate-system') as CoordinateSystem;
  const f = (x: number) => -15 * x * x + 3250 * x - 89000;

  $chart.setFunctions(f);
  $chart.drawPoints(list(0, 180, 20).map(p => new Point(p, f(p))));
}


// -----------------------------------------------------------------------------
// Solving Quadratic Equations

export function parabola($step: Step) {
  const $chart = $step.$('x-coordinate-system') as CoordinateSystem;

  $step.model.watch((s: any) => {
    const fn = q(s.a, s.b, s.c);
    $chart.setFunctions(fn);
    $chart.drawPoints(zeros(s.a, s.b, s.c).map(p => new Point(p, fn(p))));
  });

  $step.model.set = (a: number, b: number, c: number) => {
    $step.model.a = a;
    $step.model.b = b;
    $step.model.c = c;
  };
}

export function directrix($step: Step) {
  $step.model.qy = (p: Point, d: Point) => {
    const num = (d.x - p.x) ** 2 + d.y ** 2 - p.y ** 2;
    const den = 2 * p.y + 2 * d.y;
    return num / den;
  };
}
