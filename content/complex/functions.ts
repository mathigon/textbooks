// =============================================================================
// Complex Numbers
// (c) Mathigon
// =============================================================================


import {Complex} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {Step} from '../shared/types';


export function eulerApprox($step: Step) {
  $step.model.complexPower = (p: Point, x: number) => {
    const c = new Complex(p.x, p.y);
    const mod = Math.pow(c.modulus, x);
    const arg = c.argument * x;
    return new Point(mod * Math.cos(arg), mod * Math.sin(arg));
  };
}

export function demo($step: Step) {
  $step.model.complexRoot = (p: Point, n: number, i: number) => {
    const c = new Complex(p.x, p.y);
    const root = c.root(n, i);
    return new Point(root.re, root.im);
  };
}
