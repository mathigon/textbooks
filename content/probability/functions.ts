// =============================================================================
// Probability
// (c) Mathigon
// =============================================================================


import {flatten, list, Obj, repeat, tabulate2D} from '@mathigon/core';
import {lerp, Random} from '@mathigon/fermat';
import {$, $N, animate, ElementView} from '@mathigon/boost';
import {confetti, Step} from '@mathigon/studio';
import '../shared/components/buckets/buckets';


// -----------------------------------------------------------------------------
// Utilities

/** Converts a 2-dimensional data array into an HTML <table> string. */
function table(data: any[][], attributes = '') {
  const rows = data.map(tr => '<tr>' + tr.map(td => `<td>${td}</td>`)
      .join('') + '</tr>').join('');
  return `<table${attributes}>${rows}</table>`;
}


// N[Normalize[With[{n = 6}, CoefficientList[Expand[(x + x^2 + x^3 + x^4 + x^5 + x^6)^n], x]], Total], 2]
const probabilities: Obj<number[]> = {
  1: [0, 0.17, 0.17, 0.17, 0.17, 0.17, 0.17],
  2: [0, 0, 0.028, 0.056, 0.083, 0.11, 0.14, 0.17, 0.14, 0.11, 0.083, 0.056,
    0.028],
  3: [0, 0, 0, 0.0046, 0.014, 0.028, 0.046, 0.069, 0.097, 0.12, 0.13, 0.13,
    0.12, 0.097, 0.069, 0.046, 0.028, 0.014, 0.0046],
  4: [0, 0, 0, 0, 0.00077, 0.0031, 0.0077, 0.015, 0.027, 0.043, 0.062, 0.080,
    0.096, 0.11, 0.11, 0.11, 0.096, 0.080, 0.062, 0.043, 0.027, 0.015, 0.0077,
    0.0031, 0.00077],
  5: [0, 0, 0, 0, 0, 0.00013, 0.00064, 0.0019, 0.0045, 0.0090, 0.016, 0.026,
    0.039, 0.054, 0.069, 0.084, 0.095, 0.10, 0.10, 0.095, 0.084, 0.069, 0.054,
    0.039, 0.026, 0.016, 0.0090, 0.0045, 0.0019, 0.00064, 0.00013],
  6: [0, 0, 0, 0, 0, 0, 0.000021, 0.00013, 0.00045, 0.0012, 0.0027, 0.0054,
    0.0098, 0.016, 0.025, 0.036, 0.048, 0.061, 0.074, 0.084, 0.090, 0.093,
    0.090, 0.084, 0.074, 0.061, 0.048, 0.036, 0.025, 0.016, 0.0098, 0.0054,
    0.0027, 0.0012, 0.00045, 0.00013, 0.000021]
};

export function diceSimulation($step: Step) {
  let scores: number[] = [];

  $step.model.probTable = (d: number) => {
    const pmax = probabilities[d][Math.round(7 * d / 2)];
    const keys = list(d, d * 6);

    const row1 = keys.map(i => `<div class="pBox">
      <div class="diceCount" id="dc2${i}"></div>
      <div class="diceProb" style="bottom: ${probabilities[d][i] / pmax * 95}%">
    </div></div>`);

    const row2 = keys.map(i => `<span class="dice">${i}</span>`);
    const row3 = keys.map(i => probabilities[d][i]);
    const row4 = keys.map(i => `<span class="m-blue" id="dc1${i}">0</span>`);

    scores = repeat(0, 60);
    return table([row1, row2, row3, row4]);
  };

  function rollDice() {
    const d = $step.model.d;
    const x = Random.weighted(probabilities[d]);

    scores[x] += 1;
    const maxScore = Math.max(...scores);

    for (let i = d; i <= 6 * d; ++i) {
      $('#dc1' + i)!.textStr = scores[i];
      $('#dc2' + i)!.css('height', (scores[i] / maxScore * 95) + '%');
    }
  }

  const buttons = $step.$$('.btn');

  buttons[0].on('click', rollDice);

  buttons[1].on('click', () => {
    for (let i = 0; i < 100; ++i) setTimeout(rollDice, 100 * i);
  });

  buttons[2].on('click', () => {
    $step.score('roll');
    for (let i = 0; i < 1000; ++i) setTimeout(rollDice, 10 * i);
  });
}

// -----------------------------------------------------------------------------

class OneTimeButton {

  constructor(private $els: ElementView[], callback: (i: number) => void) {
    for (const [i, $el] of $els.entries()) {
      $el.on('click', () => {
        callback(i);
        for (const $el of $els) $el.setAttr('disabled', true);
      });
    }
  }

  reset() {
    for (const $el of this.$els) $el.removeAttr('disabled');
  }
}

export function montyHall($step: Step) {
  let attempt = 0;
  let decided = false;  // Has the student confirmed their choice?

  let selected: number|undefined = undefined;  // The door selected by the student
  let opened: number|undefined = undefined;  // The door opened by the host
  let car: number|undefined = undefined;  // The door that has the car

  const $monty = $step.$('.monty-hall')!;
  const $doors = $monty.$$('.door-box');
  const $reveals = $step.$$('.monty-reveal');
  const $options = $step.$$('.monty-option');

  $doors.forEach(($d, i) => {
    $d.$('.door')!.on('click', () => {
      if (i === selected || decided) return;
      if (selected !== undefined) $doors[selected].removeClass('selected');

      selected = i;
      $d.addClass('selected');
      $reveals[0].addClass('visible');
      $reveals[1].addClass('visible');
    });
  });

  const sureBtn = new OneTimeButton([$step.$('.sure')!], () => {
    if (!attempt) {
      // The first time, we cheat and force the "more likely" event
      [car, opened] = Random.shuffle([0, 1, 2].filter(i => i !== selected));
    } else {
      car = Random.integer(3);
      opened = Random.shuffle([0, 1, 2].filter(i => i !== car && i !== selected))[0];
    }

    decided = true;
    $monty.removeClass('selectable');
    $doors[car].addClass('car');

    setTimeout(() => {
      $doors[opened!].addClass('open');
      $reveals[2].addClass('visible');
      $reveals[3].addClass('visible');
    }, 1000);
  });

  const swapBtn = new OneTimeButton($step.$$('.swap'), (i) => {
    if (i === 1) {
      $doors[selected!].removeClass('selected');
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

  const revealBtn = new OneTimeButton([$step.$('.show')!], () => {
    $doors.forEach($d => $d.addClass('open'));

    if (selected === car) {
      confetti();
      $step.addHint('correct');
    }

    setTimeout(() => {
      $step.score('game');
      $reveals[6].addClass('visible');
      $reveals[7].addClass('visible');
    }, 1000);
  });

  $step.$('.reset')!.on('click', () => {
    for (const b of [sureBtn, swapBtn, revealBtn]) b.reset();
    for (const $r of $reveals) $r.removeClass('visible');
    for (const $d of $doors) $d.removeClass('car selected open');
    selected = opened = car = undefined;
    decided = false;
    $monty.addClass('selectable');
    attempt += 1;
  });
}

// -----------------------------------------------------------------------------

export function radioactive($step: Step) {
  const $box = $step.$('.radioactive')!;

  const $atomMatrix = tabulate2D(
      (x, y) => $N('circle', {cx: x * 20 + 10, cy: y * 20 + 10, r: 6}, $box),
      15, 10);
  const $atoms = Random.shuffle<ElementView>(flatten($atomMatrix));

  function decay() {
    $step.score('decay');
    const $atom = $atoms.pop()!;
    $atom.addClass('off');
    if ($atoms.length) {
      setTimeout(decay, Random.exponential($atoms.length / 20000));
    }
  }

  $step.$('.btn')!.one('click', decay);
}


// -----------------------------------------------------------------------------
// Probability Trees

const pascal = [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
  [1, 5, 10, 10, 5, 1],
  [1, 6, 15, 20, 15, 6, 1],
  [1, 7, 21, 35, 35, 21, 7, 1],
  [1, 8, 28, 56, 70, 56, 28, 8, 1],
  [1, 9, 36, 84, 126, 126, 84, 39, 9, 1],
  [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1],
  [1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1]
];

export function galtonBoard($step: Step) {
  const $svg = $step.$('.galton')!;
  let rows: number[] = [];
  let rowCnt: number;
  let p: number;
  let firstPos;
  const finalToInd: number[] = [];
  let cnt: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const actualProb: number[] = [];
  let dropped = 0;

  $step.model.watch(() => {
    $svg.removeChildren();
    rowCnt = $step.model.rows;
    p = $step.model.p;
    rows = repeat(rowCnt + 1, 0);
    rows[0] = 50 + 40 * -1 + 25;
    for (let i = 0; i < rowCnt; i++) {  // rows
      for (let j = 0; j <= i; j++) {  // columns
        const cx = 200 + (j - i / 2) * 40;
        const cy = 50 + 40 * i;
        rows[i + 1] = cy + 25;
        $N('circle', {cx, cy, r: 5}, $svg);
      }
    }

    firstPos = 200 - 20 * rowCnt;
    for (let i = 0; i <= rowCnt; i++) {
      finalToInd[firstPos + i * 40] = i;
    }
    cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    actualProb.length = 0;
    for (let i = 0; i <= rowCnt + 1; i++) {
      const val = Math.pow(p, i) * Math.pow(1 - p, rowCnt + 1 - i) * pascal[rowCnt + 1][i];
      actualProb.push(val);
    }
    dropped = 0;
  });

  $step.model.ballTable = (rows: number, p: number) => {
    const row: string[] = [];
    for (let i = 0; i < rows + 1; ++i) {
      const val = 100 * pascal[rows][i] * Math.pow(p, i) * Math.pow(1 - p, rows - i);
      row.push(`<div class="pBox"><div class="ballCount" id="col${i}"></div><div class="ballProb" style="bottom: ${val}%"></div></div>`);
    }
    return table([row], ` id="ballTable" width="${(rowCnt + 1) * 40}px"`);
  };

  async function dropBall() {
    $('#ballTable')!.css('width', (rowCnt + 1) * 40);
    const $ball = $N('circle', {cx: 200, cy: 10, r: 10, class: 'ball'}, $svg);
    await animate((p: number) => {
      $ball.setAttr('cy', lerp(10, rows[0], p));
    }, 200).promise;
    let cur = 200;
    const ht = 100; // adjust to taste, height of ball bounce
    for (let i = 0; i < rowCnt; ++i) {
      const nextDir = Math.random() < p;
      await animate((p: number) => {
        const height = ht * p * (p - 1 + 40 / ht) + rows[i]; // quadratic bounce of ball
        $ball.setAttr('cy', height);
        if (nextDir) {
          $ball.setAttr('cx', lerp(cur, cur + 20, p));
        } else {
          $ball.setAttr('cx', lerp(cur, cur - 20, p));
        }
      }, 300).promise;
      if (i < rowCnt - 1) {
        nextDir ? cur += 20 : cur -= 20;
      } else {
        break;
      }
    }
    dropped++;
    cnt[finalToInd[+$ball.attr('cx')]]++;
    for (let i = 0; i < rowCnt + 1; ++i) {
      $('#col' + i)!.css('height', cnt[i] * 100 / dropped + '%');
    }
  }

  $svg.on('click', () => {
    dropBall();
  });

  const buttons = $step.$$('.btn');

  buttons[0].on('click', dropBall);

  buttons[1].on('click', () => {
    for (let i = 0; i < 10; ++i) setTimeout(dropBall, 100 * i);
  });

  buttons[2].on('click', () => {
    for (let i = 0; i < 100; ++i) setTimeout(dropBall, 100 * i);
  });
}

