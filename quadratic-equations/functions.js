// =============================================================================
// Mathigon | Quadratic Equations Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $C, $N } from 'elements';
import Expression from 'expression';
import xEquation from 'equation';
import xEquationSystem from 'equation-system';
import xCoordinateSystem from 'coordinate-system';
import xCoordinateSketch from 'coordinate-sketch';


// -----------------------------------------------------------------------------
// Biographies

export const bio = { };


// -----------------------------------------------------------------------------
// Glossary

export const gloss = {

  term: {},
  variable: {},
  coefficient: {},
  degree: {},
  quadratic: {}


};


// -----------------------------------------------------------------------------
// Hints

export const hints = { };


// -----------------------------------------------------------------------------
// Functions

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
// Sections

const fns = {};

fns.s1 = function(section, chapter) {

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

};


export const sections = fns;
