// =============================================================================
// Exponential Functions
// (c) Mathigon
// =============================================================================


import './components/atom';
import {list, wait} from '@mathigon/core';
import {Point} from '@mathigon/fermat';
import {$} from '@mathigon/boost';
import {AlgebraFlow} from '../../../mathigon.org/src/course/components/algebra/algebra-flow';
import {CoordinateSystem, Step} from '../shared/types';


export function radioactive1($step: Step) {
  const $box = $('.decay-box')!;

  const $atoms = $box.$$('x-atom');
  const $labels = $box.$$('.label');
  const $ops = $box.$$('.operator');

  $atoms[0].one('click', () => {
    for (const $c of [$atoms[1], $labels[1]]) $c.enter('slide-right', 600, 200);
    for (const $c of [$atoms[2], $labels[2]]) $c.enter('slide-right', 600, 300);
    for (const $c of [$atoms[3], $labels[3]]) $c.enter('slide-right', 600, 400);

    for (const $c of $ops) $c.enter('fade', 400, 500);

    setTimeout(() => $step.score('decay'), 1000);
  });
}

export function radioactiveTable1($step: Step) {
  $step.onScore('blank-0', () => $step.$('.c1')!.addClass('on'));
  $step.onScore('blank-1', () => $step.$('.c2')!.addClass('on'));
  $step.onScore('blank-2', () => $step.$('.c3')!.addClass('on'));
  $step.onScore('blank-3', () => $step.$('.c4')!.addClass('on'));
}

export function radioactiveChart($step: Step) {
  const $plot = $step.$('x-coordinate-system') as CoordinateSystem;

  $step.model.watch((m) => {
    const fn = (x: number) => m.x0 * 2 ** (-x / m.hl);

    $plot.setFunctions(fn);
    $plot.drawPoints(list(0, 18000, m.hl).map(p => new Point(p, fn(p))));
  });
}


export function carbonSolver($step: Step) {
  const $equation = $step.$('x-algebra-flow') as AlgebraFlow;

  $equation.on('next', async ({step, equation, system}) => {
    switch(step) {
      case 2:
        await system.newRow();
        await wait(400);
        equation.wrapTerms('$1/$2', '10', '20');
        equation.deleteTerm('×');
        await equation.animate();
        return;
      case 3:
        equation.replaceTerm('10/20', '0.5');
        await equation.animate();
        return;
      case 4:
        await system.newRow();
        await wait(400);
        equation.wrapTerms('log_($2)($1)', '0.5', '2');
        equation.unwrapTerm('-t/400');
        await equation.animate();
        return;
      case 5:
        await system.newRow();
        await wait(400);
        equation.replaceTerm('log_2(0.5)', '-1');
        await equation.animate();
        return;
      case 6:
        await system.newRow();
        await wait(400);
        equation.moveTermAfter('400', '-1');
        equation.addTermAfter('×', '-1');
        equation.unwrapTerm('-t');
        await equation.animate();
        return;
      case 7:
        equation.deleteTerm('1×');
        await equation.animate();
        return;
      case 8:
        equation.deleteTerm('-');
        equation.deleteTerm('-');
        await equation.animate();
    }
  });
}
