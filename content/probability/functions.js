// =============================================================================
// Probability
// (c) Mathigon
// =============================================================================


import { list, tabulate, flatten, last, total, square, clamp } from '@mathigon/core';
import { roundTo, random } from '@mathigon/fermat';
import { $, $N, table } from '@mathigon/boost';
import { rotateDisk } from '../shared/components/disk';


export function roulette($step) {
  const $wheels = $step.$$('.wheel');
  const $ball = $step.$('.ball');
  const $target = $step.$('circle');
  let ballSpeed, ballAngle, ballOffset;

  rotateDisk($target, {
    $disk: $wheels[0],
    start() {
      $ball.hide();
      $step.score('rotate');
    },
    momentumStart(speed) {
      $ball.show();
      ballSpeed = -0.8 * speed;
      ballAngle = 0;
      ballOffset = null;
    },
    draw(angle, isMomentum, dt) {
      for (let $w of $wheels) $w.transform = `rotate(${angle}rad)`;
      if (!isMomentum) return;

      ballSpeed *= 0.985;
      if (Math.abs(ballSpeed) > 0.00032) {
        ballAngle = (ballAngle + dt * ballSpeed) % (2 * Math.PI);
      } else {
        if (!ballOffset) ballOffset = roundTo(ballAngle - angle, 2 * Math.PI/ 37);
        ballAngle = angle + ballOffset;
      }

      const ballRadius = Math.min(116 + 87500 * Math.abs(ballSpeed), 165);
      const x = ballRadius * Math.sin(ballAngle);
      const y = -ballRadius * Math.cos(ballAngle);
      $ball.transform = `translate(${x}px, ${y}px)`;
    }
  });
}

// -----------------------------------------------------------------------------

export function randomSequence($section) {

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

      result = Math.min(result, random.chiCDF(chi, deg));
    }

    return clamp(result, 0, 1);
  }

  let $score = $section.$('.score');
  $section.$('input').change(str => {
    if (str.length > 7) $section.score('random');
    $score.text = Math.round(compute(str.toUpperCase()) * 100);
  });
}

// -----------------------------------------------------------------------------

export function diceSimulation($section) {

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

  $section.model.set('probTable', function(d) {
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
    let d = $section.model.d;
    let x = random.weighted(probabilities[d]);

    scores[x] += 1;
    let maxScore = Math.max(...scores);

    for(let i = d; i <= 6 * d; ++i) {
      $('#dc1'+i).text = scores[i];
      $('#dc2'+i).css('height', (scores[i]/maxScore*95)+'%');
    }
  }

  let buttons = $section.$$('.btn');
  buttons[0].on('click', rollDice);
  buttons[1].on('click', () => { for (let i = 0; i < 100; ++i) setTimeout(rollDice, 100 * i); });
  buttons[2].on('click', () => {
    $section.score('roll');
    for (let i = 0; i < 1000; ++i) setTimeout(rollDice, 10 * i);
  });
}

// -----------------------------------------------------------------------------

class OneTimeButton {

  constructor($els, callback) {
    if (!Array.isArray($els)) $els = [$els];
    this.$els = $els;

    $els.forEach(($el, i) => {
      $el.on('click', () => {
        callback(i);
        for (let $el of $els) $el.setAttr('disabled', true);
      });
    });
  }

  reset() {
    for (let $el of this.$els) $el.removeAttr('disabled');
  }
}

export function montyHall($step) {
  let attempt = 0;
  let decided = false;  // Has the student confirmed their choice?

  let selected = null;  // The door selected by the student
  let opened = null;  // The door opened by the host
  let car = null;  // The door that has the car

  const $monty = $step.$('.monty-hall');
  const $doors = $monty.$$('.door-box');
  const $reveals = $step.$$('.monty-reveal');
  const $options = $step.$$('.monty-option');

  $doors.forEach(($d, i) => {
    $d.$('.door').on('click', () => {
      if (i === selected || decided) return;
      if (selected !== null) $doors[selected].removeClass('selected');

      selected = i;
      $d.addClass('selected');
      $reveals[0].addClass('visible');
      $reveals[1].addClass('visible');
    });
  });

  const sureBtn = new OneTimeButton($step.$('.sure'), () => {
    if (!attempt) {
      // The first time, we cheat and force the "more likely" event
      [car, opened] = random.shuffle([0, 1, 2].filter(i => i !== selected));
    } else {
      car = random.integer(3);
      opened = random.shuffle([0, 1, 2].filter(i => i !== car && i !== selected))[0];
    }

    decided = true;
    $monty.removeClass('selectable');
    $doors[car].addClass('car');

    setTimeout(() => {
      $doors[opened].addClass('open');
      $reveals[2].addClass('visible');
      $reveals[3].addClass('visible');
    }, 1000);
  });

  const swapBtn = new OneTimeButton($step.$$('.swap'), (i) => {
    if (i === 1) {
      $doors[selected].removeClass('selected');
      selected = [0, 1, 2].filter(i => i !== selected && i !== opened)[0];
      $doors[selected].addClass('selected');
    }

    $options[0].setClass('hidden', selected !== car);
    $options[1].setClass('hidden', selected === car);

    setTimeout(() => {
      $reveals[4].addClass('visible');
      $reveals[5].addClass('visible');
    }, 1000);
  });

  let revealBtn = new OneTimeButton($step.$('.show'), () => {
    $doors.forEach($d => $d.addClass('open'));

    if (selected === car) {
      $step.tools.confetti();
      $step.addHint('correct');
    }

    setTimeout(() => {
      $step.score('game');
      $reveals[6].addClass('visible');
      $reveals[7].addClass('visible');
    }, 1000);
  });

  $step.$('.reset').on('click', () => {
    for (let b of [sureBtn, swapBtn, revealBtn]) b.reset();
    for (let $r of $reveals) $r.removeClass('visible');
    for (let $d of $doors) $d.removeClass('car selected open');
    selected = opened = car = null;
    decided = false;
    $monty.addClass('selectable');
    attempt += 1;
  });
}

// -----------------------------------------------------------------------------

export function radioactive($section) {
  let $box = $section.$('.radioactive');

  let $atoms = tabulate((x, y) => $N('circle', { cx: x * 20 + 10, cy: y * 20 + 10, r: 6 }, $box), 15, 10);
  $atoms = random.shuffle(flatten($atoms));

  function decay() {
    $section.score('decay');
    let $atom = $atoms.pop();
    $atom.addClass('off');
    if ($atoms.length) setTimeout(decay, random.exponential($atoms.length / 20000));
  }

  $section.$('.btn').one('click', decay);
}
