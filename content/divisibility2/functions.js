// =============================================================================
// Divisibility and Primes
// (c) Mathigon
// =============================================================================
import { observe, thread } from '@mathigon/boost';
import { numberFormat, Random } from '@mathigon/fermat';
import './components/factor-circles';
import './components/factor-rect';
import './components/image-sequence';
import './components/number-grid';
import './components/prime-disk';
import './components/prime-picker';
const COLOURS = ['yellow', 'purple', 'red', 'blue', 'green'];
// -----------------------------------------------------------------------------
// Factors and Multiples
export function grid($step) {
    const $grid = $step.$('x-number-grid');
    $grid.onClick((n) => {
        $grid.clear();
        const c = COLOURS[n % COLOURS.length];
        $grid.highlight((j) => j === n ? c + ' active' : (j % n) ? '' : c, 200);
    });
}
export function divisibilityGame($step) {
    const $gameplay = $step.$('x-gameplay');
    $gameplay.setFirstSlide($el => $el.bindModel(observe({ x: '?', y: '?' })));
    $gameplay.slideGenerator = ($el, success, error) => {
        const answer = Random.smart(3, 'divisibility-game');
        const n1 = Random.smart(9, 'divisibility-game-number') + 2;
        const n2 = Random.smart(9, 'divisibility-game-number') + 2;
        let x;
        let y;
        switch (answer) {
            case 0:
                x = n1;
                y = n1 * n2;
                break; // factor
            case 1:
                x = n1 * n2;
                y = n1;
                break; // multiple
            case 2:
                x = n1;
                y = (n1 * n2) + [1, -1][Random.integer(1)]; // neither
                if (Random.integer(1))
                    [x, y] = [y, x];
        }
        $el.bindModel(observe({ x, y }));
        const $buttons = $el.$$('.factor-bubble');
        $buttons[0].on('click', answer === 0 ? success : error);
        $buttons[1].on('click', answer === 1 ? success : error);
        $buttons[2].on('click', answer > 1 ? success : error);
        $el.on('success', () => {
            for (const [i, $b] of $buttons.entries()) {
                if (answer === i) {
                    $b.addClass('success');
                    $b.css('transform', 'none');
                }
                else {
                    $b.children[0].exit('pop');
                }
            }
        });
        $el.on('error', () => {
            for (const [i, $b] of $buttons.entries()) {
                $b.addClass(answer === i ? 'success' : 'error');
            }
        });
    };
}
// -----------------------------------------------------------------------------
// Divisibility Rules
export function divisibilityGrid($step) {
    const $grid = $step.$('x-number-grid');
    $step.model.watch((state) => {
        const n = state.n;
        const c = COLOURS[n % COLOURS.length];
        $grid.clear();
        $grid.highlight((j) => (j % n) ? '' : c);
    });
}
export function div2($step) {
    $step.groupBlanks(1, 2, 3, 4, 5);
    const $grid = $step.$('x-number-grid');
    for (const [i, t] of [0, 2, 4, 6, 8].entries()) {
        $step.onScore(`blank-${i + 1}`, () => $grid.highlight((i) => (i % 10 === t) ? 'red' : '', 100));
    }
}
export function div5($step) {
    const $grid = $step.$('x-number-grid');
    $step.onScore('blank-0', () => $grid.highlight((i) => i % 5 ? '' : 'green', 100));
}
// -----------------------------------------------------------------------------
// Prime Numbers
export function primeGenerator($section) {
    $section.$('.btn').on('click', () => {
        const d = +$section.model.d;
        if (!d)
            return $section.model.result = '';
        $section.model.result = '<span class="loading"></span>';
        $section.score('calculator');
        thread('/resources/divisibility2/worker.js', ['getPrime', d], 10000)
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
