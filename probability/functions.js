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

export const bio = {
    pascal: {
        name: "Blaise Pascal",
        birth: "1623",
        death: "1662",
        img: "/resources/bio/pascal.jpg",
        bio: "<p>Blaise Pascal was a French mathematician, physicist and philosopher. He invented some of the first mechanical calculators, as well as working on projective geometry, probability and the physics of the vacuum.</p><p>Most famously, Pascal is remembered for naming <em>Pascal’s Triangle</em>, an infinite triangle of numbers with some amazing properties.</em></p>"
    },
    fermat: {
        name: "Pierre de Fermat",
        birth: "1607",
        death: "1665",
        img: "/resources/bio/fermat.jpg",
        bio: "<p>Pierre de Fermat was a French mathematician and Lawyer. He was one of the early pioneers of calculus, as well as working on number theory, probability, geometry and optics.</p><p>In 1637, he wrote a short note in the margin of one od his textbooks, claiming that the equation <em>a<sup>n</sup></em> + <em>b<sup>n</sup></em> = <em>c<sup>n</sup></em> has no integer solutions for <em>n</em> > 2, and that he had a “marvelous proof, which this margin is too narrow to contain”. This became known as <em>Fermat's Last Theorem</em>, and became one of the most famous unsolved problems in mathematics – until it was finally proven in 1994.</p>"
    },
    pearson: {
        name: "Karl Pearson",
        birth: "1857",
        death: "1936",
        img: "/resources/bio/pearson.jpg",
        bio: "<p>Karl Pearson was an English mathematician and statistician. He worked on biometrics, meteorology, and eugenics, among many other topics, and founded the world’s first university statistics department, at University College London.</p>"
    },
    thorp: {
        name: "Edward Thorp",
        birth: "1932",
        img: "/resources/bio/thorp.jpg",
        bio: "<p>Edward Thorp is an American hedge fund manager and blackjack player, known for inventing <em>card counting</em> and for building the first <em>wearable computer</em> to beat casinos at Roulette. He worked at MIT, is a professor of mathematics, and pioneered modern applications of probability theory.</p>"
    },
    shannon: {
        name: "Claude Shannon",
        birth: "1898",
        death: "1972",
        img: "/resources/bio/shannon.jpg",
        bio: "<p>Claude Shannon was an American mathematician and electrical engineer, remembered as the “father of information theory”. He worked on cryptography, including codebreaking for national defense during World War II, but he was also interested in juggling, unicycling and chess. In his spare times, he built machines that could juggle or solve the Rubik’s Cube puzzle.</p>"
    },
    venn: {
        name: "John Venn",
        birth: "1834",
        death: "1923",
        img: "/resources/bio/venn.jpg",
        bio: "<p>John Venn was an English mathematician and philosopher who introduced the <em>Venn diagram</em> used in set theory and probability. He taught at Cambridge University and was a Fellow of the Royal Society in London.</p>"
    },
    planck: {
        name: "Max Plank",
        birth: "1858",
        death: "1947",
        img: "/resources/bio/planck.jpg",
        bio: "<p>Max Plank was a German physicist and one of the original developers of Quantum Mechanics – for which received the Nobel Prize in 1918.</p>"
    },
    dirac: {
        name: "Paul Dirac",
        birth: "1898",
        death: "1972",
        img: "/resources/bio/dirac.jpg",
        bio: "<p>Paul Dirac was an English theoretical physicist, who shared the 1933 Nobel Prize with Erwin Schrödinger. Dirac was one of the pioneers of Quantum Mechanics, formulated the famous <em>Dirac equation</em> and first predicted the existence of antimatter.</p><p>He taught at Cambridge University, before moving to America. Dirac was famously shy and, according to Einstein, <em>“balancing on the dizzying path between genius and madness”</em>.</p>"
    }
};


// -----------------------------------------------------------------------------
// Glossary

export const gloss = {
    probability: {
        title: "Probability",
        text: "<p>A number between 0 and 1 that quantifies the likelihood of a certain event.</p>"
    },
    blackjack: {
        title: "Blackjack",
        text: "<p>A card game in which you add up the value of multiple cards to get as close to 21 – but not above.</p>"
    },
    roulette: {
        title: "Roulette",
        text: "<p>A casino game in which you bet on where a spinning ball is going to land. It contains 36 numbers as well as one or two 0s.</p>"
    },
    information: {
        title: "Information Theory",
        text: "<p>The study of quantification, storage and communication of data and information. It is used in logic, cryptography and computer science.</p>"
    },
    probTree: {
        title: "Probability Tree",
        text: "<p>A tree diagram representing the combined probability of multiple sequential events.</p>"
    },
    venn: {
        title: "Venn Diagram",
        text: "<p>A diagram that visualises multiple overlapping events, and their probabilities.</p>"
    },
    quantum: {
        title: "Quantum Mechanics",
        text: "<p>A branch of Physics that explains the stage behaviour of fundamental particles.</p>"
    },
    radioactive: {
        title: "Radioactive Decay",
        text: "<p>A physical process by which unstable atoms break apart and release energy.</p>"
    }
};


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

fns.roulette = function(section, chapter) {
    section.one('enter', function() {
        chapter.addHint('The <x-target to=".roulette-wheel">Roulette wheel</x-target> is interactive – simply drag it to start.');
    });

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

        for (let i = 2; i <= max; ++i) {
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

fns.probLine = function(section) {
    let items = section.$el.findAll('.p-line img');

    section.onScore('blank-0', function() { items[0].enter('pop'); });
    section.onScore('blank-1', function() { items[6].enter('pop'); });
    section.onScore('blank-2', function() { items[3].enter('pop'); });
    section.onScore('blank-3', function() { items[1].enter('pop'); items[2].enter('pop', 500, 300); });
    section.onScore('blank-4', function() { items[4].enter('pop'); items[5].enter('pop', 500, 300); });
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

    constructor($els, callback) {
        if (!Array.isArray($els)) $els = [$els];
        this.$els = $els;

        $els.forEach(($el, i) => {
            $el.on('click', () => {
                callback(i);
                for (let $el of $els) $el.attr('disabled', true);
            });
        });
    }

    reset() {
        for (let $el of this.$els) $el.attr('disabled', null);
    }
}

fns.montyhall = function(section) {
    let selected = null;
    let decided = false;
    let opened = null;
    let car = null;
    let attempt = 0;

    let $monty = section.$el.find('.monty-hall');
    let $doors = $monty.findAll('.door-box');

    $doors.forEach(function($d, i) {
        $d.find('.door').on('click', function() {
            if (i === selected || decided) return;
            if (selected !== null) $doors[selected].removeClass('selected');

            selected = i;
            $d.addClass('selected');
            section.score('door-select');
            section.subsections[0].$el.addClass('on');
        });
    });

    let $sure = section.$el.find('.sure');
    let sureBtn = new OneTimeButton($sure, function() {
        [car, opened] = shuffle([0, 1, 2].filter(i => i != selected));
        $doors[car].addClass('car');
        decided = true;
        $monty.removeClass('selectable');
        setTimeout(function() {
            $doors[opened].addClass('open');
            section.score('door-sure');
            section.subsections[1].$el.addClass('on');
        }, 1000);
    });

    let $swap = section.$el.findAll('.swap');
    let swapBtn = new OneTimeButton($swap, function(i) {
        if (i == 1) {
            $doors[selected].removeClass('selected');
            selected = car;
            $doors[selected].addClass('selected');
            section.$el.find('.monty-choice-right').show();
            section.$el.find('.monty-choice-wrong').hide();
        }
        setTimeout(function() {
            section.score('door-swap');
            section.subsections[2].$el.addClass('on');
        }, 1000);
    });

    let $reveal = section.$el.find('.reveal');
    let revealBtn = new OneTimeButton($reveal, function() {
        $doors.forEach($d => { $d.addClass('open'); });
        setTimeout(function() {
            section.score('door-revealed');
            section.subsections[3].$el.addClass('on');
        }, 1000);
    });

    section.$el.find('.reset').on('click', function() {
        for (let b of [sureBtn, swapBtn, revealBtn]) b.reset();
        for (let s of section.subsections) s.$el.removeClass('on');
        for (let $d of $doors) $d.removeClass('car selected open');
        section.$el.find('.monty-choice-right').hide();
        section.$el.find('.monty-choice-wrong').show();
        selected = opened = car = null;
        decided = false;
        $monty.addClass('selectable');
        attempt += 1;
    });

    setTimeout(function() {
        if (section.completed) {
            for (let s of section.subsections) s.$el.removeClass('on');
        }
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
