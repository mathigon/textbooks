// =============================================================================
// Complex Numbers
// (c) Mathigon
// =============================================================================


import {Complex} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {Step} from '@mathigon/studio';


// -----------------------------------------------------------------------------
// Utilities

function complexProduct(a: Point, b: Point) {
  const p = Complex.product(new Complex(a.x, a.y), new Complex(b.x, b.y));
  return new Point(p.re, p.im);
}

function complexPower(p: Point, x: number) {
  const c = new Complex(p.x, p.y);
  const mod = Math.pow(c.modulus, x);
  const arg = c.argument * x;
  return new Point(mod * Math.cos(arg), mod * Math.sin(arg));
}

function complexRoot(p: Point, n: number, i: number) {
  const c = new Complex(p.x, p.y);
  const root = c.root(n, i);
  return new Point(root.re, root.im);
}


// -----------------------------------------------------------------------------
// Introduction

// TODO


// -----------------------------------------------------------------------------
// Complex Arithmetic

export function multiplication($step: Step) {
  $step.model.complexProduct = complexProduct;
}


// -----------------------------------------------------------------------------
// Euler's Formula

export function eulerApprox($step: Step) {
  $step.model.complexPower = complexPower;
}


// -----------------------------------------------------------------------------
// De Moivre’s Theorem and Roots of Unity

export function roots($step: Step) {
  $step.model.complexRoot = complexRoot;
}
