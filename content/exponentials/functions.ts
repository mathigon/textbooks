// =============================================================================
// Exponential Functions
// (c) Mathigon
// =============================================================================


import './components/atom';
import {list} from '@mathigon/core';
import {numberFormat} from '@mathigon/fermat';
import {Point} from '@mathigon/euclid';
import {$} from '@mathigon/boost';
import {Step} from '@mathigon/studio';
import {AlgebraFlow, CoordinateSystem} from '../shared/types';


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

export function radioactiveEquation1($step: Step) {
  const $system = $step.$('x-algebra-flow') as AlgebraFlow;

  $system.onNextStep({
    1: async (equation) => {
      equation.unwrapTerm('2', 2);
      equation.addTermBefore('-', 't');
    }
  });

  $system.onBackStep({
    1: async (equation) => {
      equation.deleteTerm('-');
      equation.wrapTerms('(1/$1)', '2');
    }
  });
}

export function radioactiveChart($step: Step) {
  const $plot = $step.$('x-coordinate-system') as CoordinateSystem;

  $step.model.format = numberFormat;

  $step.model.watch((state: any) => {
    const fn = (x: number) => state.x0 * 2 ** (-x / state.hl);

    $plot.setFunctions(fn);
    $plot.drawPoints(list(0, 18000, state.hl).map(p => new Point(p, fn(p))));
  });
}


export function carbonSolver($step: Step) {
  const $system = $step.$('x-algebra-flow') as AlgebraFlow;

  $system.onNextStep({
    2: (equation) => {
      equation.wrapTerms('$1/$2', '800', '1200');
      equation.deleteTerm('×');
    },
    3: (equation) => {
      equation.replaceTerm('800/1200', '0.667');
    },
    4: (equation) => {
      equation.wrapTerms('log_($2)($1)', '0.667', '2');
      equation.unwrapTerm('(-t)/6000');
    },
    5: (equation) => {
      equation.replaceTerm('log_2(0.667)', '-0.585');
    },
    6: (equation) => {
      equation.moveTermAfter('6000', '-0.585');
      equation.addTermAfter('×', '-0.585');
      equation.unwrapTerm('-t');
    },
    7: (equation) => {
      equation.replaceTerm('0.585×6000', '3510');
    },
    8: (equation) => {
      equation.deleteTerm('-');
      equation.deleteTerm('-');
    }
  });

  $system.onBackStep({
    2: (equation) => {
      equation.moveTermToStart('1200');
      equation.addTermAfter('×', '1200');
      equation.unwrapTerm('800');
    },
    3: (equation) => {
      equation.replaceTerm('0.667', '800/1200');
    },
    4: (equation) => {
      equation.wrapTerms('$2^$1', '(-t)/6000', '2');
      equation.unwrapTerm('0.667');
      equation.deleteTerm('log');
    },
    5: (equation) => {
      equation.replaceTerm('-0.585', 'log_2(0.667)');
    },
    6: (equation) => {
      equation.wrapTerms('$1/$2', '-t', '6000');
      equation.deleteTerm('×');
    },
    7: (equation) => {
      equation.replaceTerm('3510', '0.585×6000');
    },
    8: (equation) => {
      equation.addTermBefore('-', 't');
      equation.addTermBefore('-', '3510');
    }
  });
}
