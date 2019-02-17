// =============================================================================
// Quadratic Equations
// (c) Mathigon
// =============================================================================


import { list } from '@mathigon/core';
import { nearlyEquals, Point } from '@mathigon/fermat';

import '../shared/components/conic-section';


// -----------------------------------------------------------------------------
// Shared Utilities

function q(a, b, c) {
  return (x) => (a*x*x + b*x + c);
}

function zeros(a,b,c) {
  let disc = b * b - 4 * a * c;
  if (disc < 0) return [];

  if (nearlyEquals(disc, 0, 0.1)) return [-b / (2*a)];

  let x1 = (-b + Math.sqrt(disc))/(2*a);
  let x2 = (-b - Math.sqrt(disc))/(2*a);
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

  return {error: null};
} */


// -----------------------------------------------------------------------------
// Introduction

export function intro4($step) {
  const $system = $step.$('x-equation-system');

  $system.isFinal = (expr) => {
    const str = expr.toString();
    return (expr.variables.length === 1) && expr.functions.includes('sup')
        && str.includes('89000') && str.includes('3250') && !str.includes('(');
  };

  $system.on('solve-row', ({$math}) => {
    for (let $mi of $math.$$('mi')) {
      if ($mi.text === 'revenue') $mi.addClass('pill green');
      if ($mi.text === 'cost') $mi.addClass('pill orange');
      if ($mi.text === 'demand') $mi.addClass('pill teal');
      if ($mi.text === 'price') $mi.addClass('pill purple');
    }
  });
}

export function introTable($step) {
  $step.addHint('calculator');
}

export function introChart($step) {
  const $chart = $step.$('x-coordinate-system');
  const f = (x => -15 * x * x + 3250 * x - 89000);

  $chart.setFunctions(f);
  $chart.drawPoints(list(0, 180, 20).map(p => new Point(p, f(p))));
}


// -----------------------------------------------------------------------------
// Solving Quadratic Equations

export function parabola($step) {
  const $chart = $step.$('x-coordinate-system');

  $step.model.watch((s) => {
    const fn = q(s.a, s.b, s.c);
    $chart.setFunctions(fn);
    $chart.drawPoints(zeros(s.a, s.b, s.c).map(p => new Point(p, fn(p))));
  });
}

/* export function s3($step) {
  $step.model.set('zeros', zeros);

  let $actions = $step.$$('.action');
  $actions[0].on('click', function() { $step.model.set('a', 1); $step.model.set('b', -2); $step.model.set('c', 2) });
  $actions[1].on('click', function() { $step.model.set('a', 1); $step.model.set('b', 2); $step.model.set('c', 1) });
  $actions[2].on('click', function() { $step.model.set('a', 1); $step.model.set('b', -4); $step.model.set('c', 2) });
} */
