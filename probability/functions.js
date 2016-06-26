// =============================================================================
// Mathigon | Probability Functions
// (c) 2016 Mathigon
// =============================================================================


import { $, $$, $C, $N, table } from 'elements';
import { slide } from 'events';
import { roundTo } from 'arithmetic';
import { square, clamp } from 'utilities';
import { list, tabulate, flatten, last, total } from 'arrays';
import { weighted, shuffle, exponential, chiCDF } from 'probability';


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

// -----------------------------------------------------------------------------

function animate(callback, precision = 0.0001) {
    let startTime = Date.now();
    let lastTime = 0;
    let running = true;

    function tick() {
        let time = Date.now() - startTime;
        let value = callback(time, time - lastTime);
        lastTime = time;
        if (running && (time < 10 || Math.abs(value) > precision)) window.requestAnimationFrame(tick);
    }

    tick();
    return { cancel: function() { running = false; } };
}

fns.roulette = function(section) {
    let $wheels = section.$el.findAll('.wheel');
    let $ball = section.$el.find('.ball');
    let $target = section.$el.find('circle');

    let center, history, animation;
    let tapAngle = 0;
    let wheelAngle = 0;

    function draw(wheelAngle, ballAngle = null, ballRadius = null) {
        for (let $w of $wheels) $w.transform = `rotate(${wheelAngle}rad)`;
        if (ballAngle != null) {
            let x = ballRadius * Math.sin(ballAngle);
            let y = -ballRadius * Math.cos(ballAngle);
            $ball.transform = `translate(${x}px, ${y}px)`;
        }
    }

    function spin(wheelSpeed) {
        $ball.show();
        let ballSpeed = -0.8 * wheelSpeed;
        let ballOffset;
        let ballAngle = 0;

        animation = animate(function (t, dt) {
            wheelSpeed *= 0.995;
            wheelAngle = (wheelAngle + dt * wheelSpeed) % (2 * Math.PI);

            ballSpeed *= 0.985;
            if (Math.abs(ballSpeed) > 0.00032) {
                ballAngle = (ballAngle + dt * ballSpeed) % (2 * Math.PI);
            } else {
                if (!ballOffset) ballOffset = roundTo(ballAngle - wheelAngle, 2 * Math.PI/ 37);
                ballAngle = wheelAngle + ballOffset;
            }

            let ballRadius = Math.min(116 + 87500 * Math.abs(ballSpeed), 165);
            draw(wheelAngle, ballAngle, ballRadius);
            return wheelSpeed;
        });
    }

    slide($target, {
        start: function(posn) {
            if (animation) animation.cancel();
            center = $wheels[0].clientCenter;
            tapAngle = Math.atan2(posn.y - center.y, posn.x - center.x);
            history = [[tapAngle, Date.now()]];
            $ball.hide();
        },
        move: function (posn) {
            let dragAngle = Math.atan2(posn.y - center.y, posn.x - center.x);
            let angle = wheelAngle + dragAngle - tapAngle;
            draw(angle);
            history.push([angle, Date.now()]);
            if (history.length > 5) history.shift();
        },
        end: function (posn) {
            let dragAngle = Math.atan2(posn.y - center.y, posn.x - center.x);
            wheelAngle += (dragAngle - tapAngle);
            if (history.length >= 5) {
                spin((history[2][0] - history[0][0]) / (history[2][1] - history[0][1]));
            }
        }
    });
};

// -----------------------------------------------------------------------------

fns.randomSequence = function(section) {

    function generatePossibilities(len) {
        if (len <= 1) return [['R', 'B']];
        let prev = generatePossibilities(len - 1);
        prev.push(last(prev).map(x => x + 'R').concat(last(prev).map(x => x + 'B')));
        return prev;
    }

    function findCount(str, substr) {
        let count = 0;
        for (let i=0; i<=str.length - substr.length; ++i) {
            count += str.slice(i).startsWith(substr);
        }
        return count;
    }

    function compute(str) {
        let max = clamp(Math.floor(str.length / 2), 1, 8);
        let poss = generatePossibilities(max);
        let result = 1;

        for (var i = 2; i <= max; ++i) {
            let values = poss[i - 1];
            let count = values.length;

            let observed = values.map(v => findCount(str, v));
            let sum = total(observed);

            let chi = total(observed.map(o => square(o - sum / count) / sum * count));
            let deg = count - 1;

            result = Math.min(result, chiCDF(chi, deg));
        }

        return clamp(result, 0, 1);
    }

    let $score = section.$el.find('.score');
    section.$el.find('input').change(function(str) {
        $score.text = Math.round(compute(str.toUpperCase()) * 100);
    });
};

// -----------------------------------------------------------------------------

fns.diceSimulation = function(section) {

    let scores = [];

    // N[Normalize[With[{n = 6}, CoefficientList[Expand[(x + x^2 + x^3 + x^4 + x^5 + x^6)^n], x]], Total], 2]
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

        let row1 = keys.map(i => `<div class="pBox"><div class="diceCount" id="dc2${i}"></div><div class="diceProb" style="bottom: ${probabilities[d][i]/pmax*95}%"></div></div>`);
        let row2 = keys.map(i => `<span class="dice">${i}</span>`);
        let row3 = keys.map(i => probabilities[d][i]);
        let row4 = keys.map(i => `<span class="m-blue" id="dc1${i}">0</span>`);

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

// -----------------------------------------------------------------------------

class OneTimeButton {

    constructor($els, fns) {
        if (!Array.isArray($els)) $els = [$els];
        this.$els = $els;
        this.clicked = false;

        $els.forEach(($el, i) => {
            let callback = Array.isArray(fns) ? fns[i] : fns;
            $el.on('click', () => {
                if (this.clicked) return;
                this.clicked = true;
                callback();
                for (let $el of $els) $el.attr('disabled', true);
            });
        });
    }

    reset() {
        this.clicked = true;
        for (let $el of this.$els) $el.removeAttr('disabled');
    }
}

fns.montyhall = function(section) {
    let selected = null;
    let opened = null;
    let car = null;

    let $doors = section.$el.findAll('.door');
    $doors.forEach(function($d, i) {
        $d.on('click', function() {
            if (i == selected || sureBtn.clicked) return;
            if (selected != null) $doors[selected].removeClass('selected');

            $d.addClass('selected');
            selected = i;
            section.score('door-select');
        });
    });

    let $sure = section.$el.find('.sure');
    let sureBtn = new OneTimeButton($sure, function() {
        [car, opened] = shuffle([0, 1, 2].filter(i => i != selected));
        setTimeout(function() {
            $doors[opened].addClass('open');
            section.score('door-sure');
        }, 1000);
    });

    let $swap = section.$el.findAll('.swap');
    let swapBtn = new OneTimeButton($swap, [function() {
        $doors[car].addClass('car');
        section.score('door-swap');
    }, function() {
        $doors[selected].removeClass('selected');
        [car, selected] = [selected, car];
        $doors[selected].addClass('selected');
        $doors[car].addClass('car');
        section.score('door-swap');
    }]);

    let $reveal = section.$el.find('.reveal');
    let revealBtn = new OneTimeButton($reveal, function() {
        $doors[selected].addClass('open');
        $doors[car].addClass('open');
        section.score('door-revealed');
    });

    section.$el.find('.reset').on('click', function() {
        for (let btn of [sureBtn, swapBtn, revealBtn]) btn.reset();
        selected = opened = car = null;
        for (let $d of $doors) $d.removeClass('car selected open');
    });
};

// -----------------------------------------------------------------------------

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
