// =============================================================================
// Exponential Functions
// (c) Mathigon
// =============================================================================


import './components/atom';
import {list, wait} from '@mathigon/core';
import {numberFormat, Point} from '@mathigon/fermat';
import {EquationFlow} from '../../../mathigon.org/src/course/components/equation-flow/equation-flow';
import {CoordinateSystem, Step} from '../shared/types';


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


export function carbonSolve($step: Step) {

  const $equation = $step.$('x-equation-flow') as EquationFlow;

  $equation.on('step-1', async ({equation, system}) => {
    await system.newRow();
    await wait(400);
    equation.wrapTerms('$1/$2', '10', '20');
    equation.deleteTerm('×');
    await equation.animate();
  });

  $equation.on('step-2', async ({equation}) => {
    equation.replaceTerm('10/20', '0.5');
    await equation.animate();
  });

  $equation.on('step-3', async ({equation, system}) => {
    await system.newRow();
    await wait(400);
    equation.wrapTerms('log_($2)($1)', '0.5', '2');
    equation.unwrapTerm('-t/400');
    await equation.animate();
  });

  $equation.on('step-4', async ({equation, system}) => {
    await system.newRow();
    await wait(400);
    equation.replaceTerm('log_2(0.5)', '-1');
    await equation.animate();
  });

  $equation.on('step-5', async ({system, equation}) => {
    await system.newRow();
    await wait(400);
    equation.moveTermAfter('400', '-1');
    equation.addTermAfter('×', '-1');
    equation.unwrapTerm('-t');
    await equation.animate();
  });

  $equation.on('step-6', async ({equation}) => {
    equation.deleteTerm('1×');
    await equation.animate();
  });

  $equation.on('step-7', async ({equation}) => {
    equation.deleteTerm('-');
    equation.deleteTerm('-');
    await equation.animate();
  });

}
