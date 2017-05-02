// =============================================================================
// Mathigon | Quadratic Equations
// (c) 2017 Mathigon
// =============================================================================


import { $, $$, $C, $N } from 'elements';
import Expression from 'expression';
import { nearlyEquals } from 'arithmetic';
import xEquation from 'equation';
import xEquationSystem from 'equation-system';
import xCoordinateSystem from 'coordinate-system';
import xCoordinateSketch from 'coordinate-sketch';


// -----------------------------------------------------------------------------
// Shared Utilities

function q(x, a, b, c) {
  return a*x*x + b*x + c;
}

function zeros(a,b,c) {
  let disc = b * b - 4 * a * c;
  if (disc < 0) return '';

  if (nearlyEquals(disc, 0, 0.1)) {
    let x = -b/(2*a);
    return `${x},${q(x,a,b,c)}`
  }

  let x1 = (-b + Math.sqrt(disc))/(2*a);
  let x2 = (-b - Math.sqrt(disc))/(2*a);
  return `${x1},${q(x1,a,b,c)}|${x2},${q(x2,a,b,c)}`
}

let PROPERTIES = {
  quadratic: [{
    name: 'Direction',
    fn(params) { return params[2]; },
    error(val, exp) { return `The parabola should point ${exp > 0 ? 'up' : 'down'}.`; },
    hint(val, exp) { return todo; }
  }, {
    name: 'Turning point X',
    fn(params) { return params[0] - square(params[1]/2/params[2]); },
    error(val, exp) { return `The turning point should be ${exp > 0 ? 'right of' : exp == 0 ? 'on' : 'left of'} the y-axis.`; },
    hint(val, exp) { return todo; }
  }, {
    name: 'Turning point Y',
    fn(params) { return todo; },
    error(val, exp) { return `The turning point should be ${exp > 0 ? 'above' : exp == 0 ? 'on' : 'below'} the x-axis.`; },
    hint(val, exp) { return todo; }
  }, {
    name: 'Y axis intercept',
    fn(params) { return todo; },
    error(val, exp) { return `The function should intersect the y-axis ${exp > 0 ? 'above' : exp == 0 ? 'on' : 'below'} the x-axis.`; },
    hint(val, exp) { return todo; }
  }]
};

function compare(params, paramsExp, type) {
  let properties = PROPERTIES[type];

  for (let p of properties) {
    let val = p.fn(params);
    let exp = p.pn(paramsExp);
    if (!sameSign(val, exp)) {
      return {error: p.error(val, exp), hint: p.hint(val, exp)}
    }
  }

  return {error: null};
}


// -----------------------------------------------------------------------------
// Section Functions

export function s1(section) {
  let correct = new Expression('-30 price^2 + 6800 price - 302000');

  let substitutions = {
    revenue: '5000 price - 30 price^2',
    cost: '302000 - 1800 price',
    demand: '5000 - 30 price'
  };

  section.$el.$('x-equation').props.validate = function(expr) {
    if (expr.same(correct)) return {final: true};

    let substituted = expr.substitute(substitutions);
    if (!substituted.numEquals(correct)) return {error: true};
  };
}

export function s3(section) {
  section.model.set('zeros', zeros);

  let $actions = section.$el.$$('.action');
  $actions[0].on('click', function() { section.model.set('a', 1); section.model.set('b', -2); section.model.set('c', 2) });
  $actions[1].on('click', function() { section.model.set('a', 1); section.model.set('b', 2); section.model.set('c', 1) });
  $actions[2].on('click', function() { section.model.set('a', 1); section.model.set('b', -4); section.model.set('c', 2) });
}
