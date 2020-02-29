// =============================================================================
// Complex Numbers
// (c) Mathigon
// =============================================================================


import {Complex, Point} from '@mathigon/fermat';
import {Step} from '../shared/types';


export function demo($step: Step) {
  $step.model.complexRoot = (p: Point, n: number, i: number) => {
    const c = new Complex(p.x, p.y);
    const root = c.root(n, i);
    return new Point(root.re, root.im);
  };
}
