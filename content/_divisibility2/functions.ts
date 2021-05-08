// =============================================================================
// Divisibility and Primes
// (c) Mathigon
// =============================================================================


import {observe, thread} from '@mathigon/boost';
import {numberFormat, Random} from '@mathigon/fermat';
import {Step} from '@mathigon/studio';
import {Gameplay} from '../shared/components/gameplay/gameplay';
import {NumberGrid} from './components/number-grid';

import './components/factor-circles';
import './components/factor-rect';
import './components/image-sequence';
import './components/number-grid';
import './components/prime-disk';
import './components/prime-picker';

const COLOURS = ['yellow', 'purple', 'red', 'blue', 'green'];


// -----------------------------------------------------------------------------
// Factors and Multiples

export function factris($step: Step) {
  $step.$('x-factris')!.on('score game-over', (e) => {
    $step.model.factris = e.points;
    if (e.points >= 500) $step.score('play');
  });
}


export function grid($step: Step) {
  const $grid = $step.$('x-number-grid') as NumberGrid;
  $grid.onClick((n: number) => {
    $grid.clear();
    const c = COLOURS[n % COLOURS.length];
    $grid.highlight((j) => j === n ? c + ' active' : (j % n) ? '' : c, 150);
  });
}

export function factorsQuiz($step: Step) {
  const $gameplay = $step.$('x-gameplay') as Gameplay;

  $gameplay.setSlideGenerator(($el, success, error) => {
    const answer = Random.smart(3, 'factor-quiz');
    const n1 = Random.smart(9, 'factor-quiz-number') + 2;
    const n2 = Random.smart(9, 'factor-quiz-number') + 2;

    const val = [n1, n1];
    if (answer === 0) {  // factor
      val[1] = n1 * n2;
    } else if (answer === 1) { // multiple
      val[0] = n1 * n2;
    } else {  // neither
      val[1] = (n1 * n2) + Random.find([1, -1]);
      if (Random.bernoulli()) val.reverse();
    }
    $el.bindModel(observe({x: val[0], y: val[1]}));

    const $buttons = $el.$$('.factor-bubble .btn');
    $buttons[0].on('click', () => grade(answer === 0));
    $buttons[1].on('click', () => grade(answer === 1));
    $buttons[2].on('click', () => grade(answer > 1));

    const grade = (correct: boolean) => {
      for (const [i, $b] of $buttons.entries()) {
        if (correct && answer === i) {
          $b.removeClass('btn-blue');
          $b.addClass('btn-green');
          $b.parent!.css('transform', 'none');
        } else if (correct) {
          $b.exit('pop');
        } else {
          $b.removeClass('btn-blue');
          $b.addClass(answer === i ? 'btn-green' : 'btn-red');
        }
      }
      correct ? success() : error();
    };
  });
}


// -----------------------------------------------------------------------------
// Divisibility Rules

export function divisibilityGrid($step: Step) {
  const $grid = $step.$('x-number-grid') as NumberGrid;
  $step.model.watch((state: any) => {
    const n = state.n;
    const c = COLOURS[n % COLOURS.length];
    $grid.clear();
    $grid.highlight((j) => (j % n) ? '' : c);
  });
}

export function div2($step: Step) {
  $step.groupBlanks(1, 2, 3, 4, 5);
  const $grid = $step.$('x-number-grid') as NumberGrid;
  for (const [i, t] of [0, 2, 4, 6, 8].entries()) {
    $step.onScore(`blank-${i + 1}`, () => $grid.highlight((i) => (i % 10 === t) ? 'red' : '', 100));
  }
}

export function div5($step: Step) {
  const $grid = $step.$('x-number-grid') as NumberGrid;
  $step.onScore('blank-0', () => $grid.highlight((i) => i % 5 ? '' : 'green', 100));
}


// -----------------------------------------------------------------------------
// Prime Numbers

export function primeGenerator($section: Step) {
  $section.$('.btn')!.on('click', () => {
    const d = +$section.model.d;
    if (!d) return $section.model.result = '';

    $section.model.result = '<span class="loading"></span>';
    $section.score('calculator');

    thread('/content/divisibility2/worker.js', ['getPrime', d], 10000)
        .then((result) => $section.model.result = numberFormat(result))
        .catch(() => $section.model.result = `Couldn‘t find a prime :(`);
  });
}


// -----------------------------------------------------------------------------
// Prime Factorisation

// TODO


// -----------------------------------------------------------------------------
// Greatest Common Factors

// TODO


// -----------------------------------------------------------------------------
// Lowest Common Multiples

// TODO


// -----------------------------------------------------------------------------
// Distribution of Primes

// TODO
