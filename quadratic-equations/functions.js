// =============================================================================
// Mathigon | Quadratic Equations Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $C, $N } from 'elements';
import xEquation from 'components/equation';
import xEquationSystem from 'components/equation-system';
import xCoordinateSystem from 'components/coordinate-system';


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

  section.model.set('qvalidate', function() {
    console.log(validate);
  });


};


export const sections = fns;
