// =============================================================================
// Quadratic Equations
// (c) Mathigon
// =============================================================================


import { square } from '@mathigon/core';
import { Expression, nearlyEquals, sign, Point } from '@mathigon/fermat';

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

export function demand($step) {
  const $charts = $step.$$('x-coordinate-system');

  $charts[0].setFunctions(x => 0.6 * x + 2);
  $charts[1].setFunctions(x => 8 - 0.6 * x);
  $charts[2].setFunctions(x => 2.5 * Math.sqrt(x));
}

export function introChart($step) {
  const $chart = $step.$('x-coordinate-system');
  const f = (x => -30*x*x + 6800*x - 302000);

  $chart.setFunctions(f);
  $chart.drawPoints([20, 40, 60, 80, 100, 120, 140, 160].map(p => new Point(p, f(p))));
}

export function introTable($step) {
  $step.addHint('calculator');
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



/* export function s1($step) {
  let correct = new Expression('-30 price^2 + 6800 price - 302000');

  let substitutions = {
    revenue: '5000 price - 30 price^2',
    cost: '302000 - 1800 price',
    demand: '5000 - 30 price'
  };

  $step.$('x-equation').props.validate = function(expr) {
    if (expr.same(correct)) return {final: true};

    let substituted = expr.substitute(substitutions);
    if (!substituted.numEquals(correct)) return {error: true};
  };
}

export function s3($step) {
  $step.model.set('zeros', zeros);

  let $actions = $step.$$('.action');
  $actions[0].on('click', function() { $step.model.set('a', 1); $step.model.set('b', -2); $step.model.set('c', 2) });
  $actions[1].on('click', function() { $step.model.set('a', 1); $step.model.set('b', 2); $step.model.set('c', 1) });
  $actions[2].on('click', function() { $step.model.set('a', 1); $step.model.set('b', -4); $step.model.set('c', 2) });
} */
