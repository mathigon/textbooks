// =============================================================================
// Probability
// (c) Mathigon
// =============================================================================


import {flatten, list, Obj, repeat, tabulate2D} from '@mathigon/core';
import {Random} from '@mathigon/fermat';
import {$, $N, ElementView, slide} from '@mathigon/boost';
import {Step} from '../shared/types';
import '../shared/components/buckets';


// -----------------------------------------------------------------------------
// Utilities

/** Converts a 2-dimensional data array into an HTML <table> string. */
function table(data: any[][]) {
  const rows = data.map(tr => '<tr>' + tr.map(td => `<td>${td}</td>`)
      .join('') + '</tr>').join('');
  return `<table>${rows}</table>`;
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
// Conditional Probability


// export function queryClick($step: Step) {
//   $step.score("click")
// }

// need the probability as a decimal on the thing


// Applet: 12x12 square of people.assigned hats, scarves and coats, and glasses.On right, list of these; you can click them to arrange people on the left and right with and without those things on.

export function conditional($step: Step) {
  const $svg = $step.$('svg.conditional')!;

  const $label = $step.$('.slider text')!;
  const $grid = $step.$('.people');

  if (0) {
    const $testText = document.getElementById('boogle');
    console.log($testText);
    let frameCount = 0;
    function loop() {
      ++frameCount;
      $testText.setTransform({x: frameCount, y: frameCount});
      setTimeout(loop, 20);
    }
    loop();
  }

  const onlyOneColumn = $svg.attr('only-one-column') === 'true';
  const adornmentColors = ['blue', 'red', 'purple', 'green'];
  const $people = [];
  const personSpacing = 24;
  const firstColumnOfPeopleX = personSpacing;
  const lastColumnOfPeopleX = 11 * personSpacing + firstColumnOfPeopleX;
  const topColumnOfPeopleY = personSpacing * 1.5;

  // slider
  {
    const verticalPosition = topColumnOfPeopleY - personSpacing;

    const railWidth = 12 * personSpacing;
    const railHeight = 10;
    const railX = firstColumnOfPeopleX - personSpacing / 2.0;
    const $rail = $N('rect', {
      x: railX, y: verticalPosition - railHeight / 2.0, rx: 0,
      width: railWidth, height: railHeight
    }, $svg);
    $svg.append($rail);

    // wasn't getting sane values from svg!
    const handleWidth = 10.0;
    const handleHeight = railHeight * 2.5;
    const $handle = $N('rect', {
      x: railX - handleWidth / 2.0, y: verticalPosition, rx: 0,
      width: handleWidth, height: handleHeight,
      class: 'red'
    }, $svg);
    $svg.append($handle);


    let specifiedProbabilityValue = 0.0;
    const handleX = railWidth * specifiedProbabilityValue;
    $handle.setTransform({x: handleX, y: verticalPosition - handleHeight});

    // wanna hit the horizontal thing too
    slide($svg, {
      move: (p, start, last)=> {
        specifiedProbabilityValue = (p.x - railX) / railWidth;
        if (specifiedProbabilityValue < 0.0) {
          specifiedProbabilityValue = 0.0;
        }
        if (specifiedProbabilityValue > 1.0) {
          specifiedProbabilityValue = 1.0;
        }

        $label.text = specifiedProbabilityValue;
        $handle.setTransform({x: railWidth * specifiedProbabilityValue, y: verticalPosition - handleHeight});

        if (specifiedProbabilityValue > 0.9) {
          $step.score('slider-probability');
          console.log('scored...?');
        }
      }
    });
  }

  function queryBit(i, j) {
    return (i & 1 << j) >> j;
  }
  function logBits(bits) {
    console.log(queryBit(bits, 3), queryBit(bits, 2), queryBit(bits, 1), queryBit(bits, 0));
  }
  const adornmentNumeratorFunctions = [
    () => 2,
    () => 3,
    (adornmentBits) => conditionalizer(12, 4, 1, adornmentBits),
    () => 4
    // (adornmentBits) => conditionalizer(2, 3, 0, adornmentBits),
  ];
  function conditionalizer(numeratorGivenBit, numeratorGivenNotBit, bit, adornmentBits) {
    if (adornmentBits !== undefined && adornmentBits !== null) {
      return queryBit(adornmentBits, bit) ? numeratorGivenBit : numeratorGivenNotBit;
    } else {
      const otherNumerator = adornmentNumeratorFunctions[bit]();
      return (otherNumerator * numeratorGivenBit + (12 - otherNumerator) * numeratorGivenNotBit) / 12;
    }
  }

  const buttons = [];
  const buttonWidth = 20;
  const buttonHeight = 30;
  for (let j = 0; j < (onlyOneColumn ? 1 : 2); j++) {
    for (let i = 0; i < 4; i++) {
      const button = $N('rect', {
        x: -buttonWidth / 2.0, y: -buttonHeight / 2.0, rx: 0,
        width: buttonWidth, height: buttonHeight,
        class: adornmentColors[i]
      }, $svg);

      buttons.push(button);

      button.setTransform({x: lastColumnOfPeopleX + 60 + (j ? 1 : -1) * (buttonWidth / 2.0 + 2), y: 40 + i * (4 + buttonHeight)});
      $svg.append(button);
      button.i = i;
      button.j = j;
      button.clickedAtSomePoint = false;
      button.on('click', () => {
        if (button.j === 0) {
          rearrange(button.i, indexOnTop);
        } else {
          rearrange(indexOnLeft, button.i);
        }

        button.clickedAtSomePoint = true;
        let numClicked = 0;
        buttons.forEach((b)=>{
          if (b.clickedAtSomePoint) ++numClicked;
        });
        if (numClicked >= 3) {
          $step.score('press-all-buttons');
        }
      });
    }
  }

  function repositionPerson($person, gridX, gridY) {
    const absoluteX = firstColumnOfPeopleX + gridX * personSpacing;
    const absoluteY = topColumnOfPeopleY + gridY * personSpacing;
    $person.setTransform({x: absoluteX, y: absoluteY});

    $person.$adornments.forEach(($adornment, i) => {
      if ($adornment !== null) {
        $adornment.setTransform({x: absoluteX, y: absoluteY - 4 * i + 9});
      }
    });
  }

  for (let i = 0; i < 12; ++i) {
    for (let j = 0; j < 12; ++j) {
      const height = 8;
      const $person = $N('rect', {
        x: -height / 2, y: -height, rx: 0,
        width: height, height: 2 * height,
        class: 'grey', target: ['grey', 'large'].join(' ')
      }, $svg);

      $people.push($person);
      $grid.append($person);
      $person.randomNumber = Math.random();
      $person.$adornments = [null, null, null, null];
    }
  }

  let pIndex = 0;
  for (let adornmentBits = 0; adornmentBits < 16; adornmentBits++) {
    let numWithThisCombination = 144;

    for (let j = 0; j < 4; ++j) {
      if (queryBit(adornmentBits, j)) {
        numWithThisCombination *= adornmentNumeratorFunctions[j](adornmentBits);
      } else {
        numWithThisCombination *= (12 - adornmentNumeratorFunctions[j](adornmentBits));
      }
      numWithThisCombination /= 12;
    }

    {
      // let combinationProb = numWithThisCombination / 144
      // if (numWithThisCombination !== Math.round(numWithThisCombination))
      //   console.error("non integer combination: ")
      // totalProbability += combinationProb
      // logBits(adornmentBits);
      // console.log(numWithThisCombination)
    }

    const limit = pIndex + numWithThisCombination;
    for (pIndex; pIndex < limit; ++pIndex) {
      for (let j = 0; j < 4; j++) {
        if (queryBit(adornmentBits, j)) {
          const $adornment = $N('rect', {
            x: -5, y: -5, rx: 0,
            width: 10, height: 3,
            class: adornmentColors[j]
          }, $svg);
          $grid.append($adornment);
          $people[pIndex].$adornments[j] = $adornment;
        }
      }
    }
  }

  $people.sort((a, b)=>{
    return a.randomNumber - b.randomNumber;
  });
  for (let i = 0; i < 12; ++i) {
    for (let j = 0; j < 12; ++j) {
      repositionPerson($people[i * 12 + j], i, j);
    }
  }

  let indexOnLeft = -1;
  let indexOnTop = -1;
  function getQuadrant(p) {
    if (indexOnLeft === -1 || p.$adornments[indexOnLeft]) { // if there's no left/right, it goes on the "left"
      if (indexOnTop === -1 || p.$adornments[indexOnTop]) {
        return 'tl';
      } // if there's no top/bottom, it goes on the "top"
      else {
        return 'bl';
      }
    } else { // the right exists and we are there
      if (indexOnTop === -1 || p.$adornments[indexOnTop]) {
        return 'tr';
      } else {
        return 'br';
      }
    }
  }

  function rearrange(newIndexOnLeft, newIndexOnTop) {
    indexOnLeft = newIndexOnLeft;
    indexOnTop = newIndexOnTop;

    const leftWidth = newIndexOnLeft === -1 ? 12 : adornmentNumeratorFunctions[newIndexOnLeft]();
    const rightWidth = 12 - leftWidth;

    let numInTopLeft = 0;
    let numInTopRight = 0;
    $people.forEach(p => {
      const quadrant = getQuadrant(p);
      if (quadrant === 'tl') {
        ++numInTopLeft;
      }
      if (quadrant === 'tr') {
        ++numInTopRight;
      }
    });

    // console.log(newIndexOnLeft,newIndexOnTop)
    // console.log(numInTopLeft,numInTopRight)

    if ((leftWidth !== 0 && numInTopLeft % leftWidth !== 0) || (rightWidth !== 0 && numInTopRight % rightWidth !== 0)) {
      console.error('indivisible:');
      if (numInTopLeft % leftWidth !== 0) {
        console.error('    Trying to divide ', numInTopLeft, 'by', leftWidth);
      }
      if (numInTopRight % rightWidth !== 0) {
        console.error('    Trying to divide ', numInTopRight, 'by', rightWidth);
      }
    }
    const topLeftHeight = numInTopLeft / leftWidth;
    const topRightHeight = numInTopRight / rightWidth;

    let topLeftNumSoFar = 0;
    let topRightNumSoFar = 0;
    let bottomLeftNumSoFar = 0;
    let bottomRightNumSoFar = 0;

    $people.forEach((p) => {
      let quadrantNumSoFar = -1;
      let columnWidth = -1;
      let horizontalAddition = 0;
      let verticalAddition = 0;

      const quadrant = getQuadrant(p);
      if (quadrant === 'tl') {
        quadrantNumSoFar = topLeftNumSoFar;
        columnWidth = leftWidth;
        ++topLeftNumSoFar;
      } else if (quadrant === 'tr') {
        quadrantNumSoFar = topRightNumSoFar;
        horizontalAddition = leftWidth;
        columnWidth = rightWidth;
        ++topRightNumSoFar;
      } else if (quadrant === 'bl') {
        quadrantNumSoFar = bottomLeftNumSoFar;
        verticalAddition = topLeftHeight;
        columnWidth = leftWidth;
        ++bottomLeftNumSoFar;
      } else if (quadrant === 'br') {
        quadrantNumSoFar = bottomRightNumSoFar;
        horizontalAddition = leftWidth;
        verticalAddition = topRightHeight;
        columnWidth = rightWidth;
        ++bottomRightNumSoFar;
      }

      const horizontalPosition = horizontalAddition + quadrantNumSoFar % columnWidth;
      const verticalPosition = verticalAddition + (quadrantNumSoFar - quadrantNumSoFar % columnWidth) / columnWidth;
      repositionPerson(p, horizontalPosition, verticalPosition);
    });
  }
}


// -----------------------------------------------------------------------------
// Monty Hall

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
      $step.tools.confetti();
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
