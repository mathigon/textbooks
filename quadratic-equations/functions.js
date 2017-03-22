// =============================================================================
// Mathigon | Quadratic Equations Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $C, $N } from 'elements';
import Expression from 'expression';
import xEquation from 'equation';
import xEquationSystem from 'equation-system';
import xCoordinateSystem from 'coordinate-system';


// -----------------------------------------------------------------------------
// Biographies

export const bio = { };


// -----------------------------------------------------------------------------
// Glossary

export const gloss = { };


// -----------------------------------------------------------------------------
// Hints

export const hints = { };


// -----------------------------------------------------------------------------
// Functions

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
