// =============================================================================
// Mathigon | Probability Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $C, $N, table } from 'elements';
import { list, tabulate, flatten } from 'arrays';
import { weighted, shuffle, exponential } from 'probability';


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

fns.diceSimulation = function(section) {

    let scores = [];

    // N[Normalize[ With[{n = 6}, CoefficientList[Expand[(x + x^2 + x^3 + x^4 + x^5 + x^6)^n], x]], Total], 2]
    const probabilities = {
        1:  [0, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17],
        2:  [0, 0, 0.028, 0.056, 0.083, 0.11, 0.14, 0.17, 0.14, 0.11, 0.083, 0.056, 0.028],
        3:  [0, 0, 0, 0.0046, 0.014, 0.028, 0.046, 0.069, 0.097, 0.12, 0.13, 0.13, 0.12, 0.097, 0.069, 0.046, 0.028, 0.014, 0.0046],
        4:  [0, 0, 0, 0, 0.00077, 0.0031, 0.0077, 0.015, 0.027, 0.043, 0.062, 0.080, 0.096, 0.11, 0.11, 0.11, 0.096, 0.080, 0.062, 0.043, 0.027, 0.015, 0.0077, 0.0031, 0.00077],
        5:  [0, 0, 0, 0, 0, 0.00013, 0.00064, 0.0019, 0.0045, 0.0090, 0.016, 0.026, 0.039, 0.054, 0.069, 0.084, 0.095, 0.10, 0.10, 0.095, 0.084, 0.069, 0.054, 0.039, 0.026, 0.016, 0.0090, 0.0045, 0.0019, 0.00064, 0.00013],
        6:  [0, 0, 0, 0, 0, 0, 0.000021, 0.00013, 0.00045, 0.0012, 0.0027, 0.0054, 0.0098, 0.016, 0.025, 0.036, 0.048, 0.061, 0.074, 0.084, 0.090, 0.093, 0.090, 0.084, 0.074, 0.061, 0.048, 0.036, 0.025, 0.016, 0.0098, 0.0054, 0.0027, 0.0012, 0.00045, 0.00013, 0.000021]
    };

    section.model.set('probTable', function(d) {
        let pmax  = probabilities[d][Math.round(7 * d/2)];
        let keys = list(d, d * 6);

        let row1 = keys.map(i => `<span class="dice">${i}</span>`);
        let row2 = keys.map(i => probabilities[d][i]);
        let row3 = keys.map(i => `<span class="m-blue" id="dc1${i}">0</span>`);
        let row4 = keys.map(i => `<div class="pBox"><div class="diceCount" id="dc2${i}"></div><div class="diceProb" style="bottom: ${probabilities[d][i]/pmax*95}%"></div></div>`);

        scores = tabulate(0, 60);
        return table([row1, row2, row3, row4]);
    });

    function rollDice() {
        let d = section.model.d;
        let x = weighted(probabilities[d]);

        scores[x] += 1;
        let maxScore = Math.max(...scores);

        for(let i = d; i <= 6 * d; ++i) {
            $('#dc1'+i).text = scores[i];
            $('#dc2'+i).css('height', (scores[i]/maxScore*95)+'%');
        }
    }

    let buttons = section.$el.findAll('.btn');
    buttons[0].on('click', function() { rollDice(); });
    buttons[1].on('click', function() { for (let i = 0; i < 100; ++i) setTimeout(rollDice, 100 * i); });
    buttons[2].on('click', function() { for (let i = 0; i < 1000; ++i) setTimeout(rollDice, 10 * i); });

};

fns.radioactive = function(section) {
    let $box = section.$el.find('.radioactive');

    let $atoms = tabulate((x, y) => $N('circle', { cx: x * 20 + 10, cy: y * 20 + 10, r: 6 }, $box), 15, 10);
    $atoms = shuffle(flatten($atoms));

    function decay() {
        let $atom = $atoms.pop();
        $atom.addClass('off');
        if ($atoms.length) setTimeout(decay, exponential($atoms.length / 20000));
    }

    section.$el.find('.btn').one('click', decay);
};

export const sections = fns;
