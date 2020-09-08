// =============================================================================
// Probability
// (c) Mathigon
// =============================================================================


import {flatten, list, Obj, repeat, tabulate2D} from '@mathigon/core';
import {Random} from '@mathigon/fermat';
import {$, $N, ElementView} from '@mathigon/boost';
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


//Applet: 12x12 square of people.assigned hats, scarves and coats, and glasses.On right, list of these; you can click them to arrange people on the left and right with and without those things on.

export function conditional($step: Step) {
  const $svg = $step.$('svg.conditional')!;

  let onlyOneColumn = $svg.attr('nonexistant')
  console.log(onlyOneColumn)
  return
  // const onlyOneColumn = $svg.$('.onlyOneColumn');
  // console.log(onlyOneColumn)
  // console.log($svg.attributes)
  // // console.log($svg.attributes.onlyonecolumnS)
  // console.log($svg.attributes[3])
  // let onlyOneColumn = false

  function queryBit(i, j) {
    return (i & 1 << j) >> j
  }

  const adornmentColors = ['blue', 'red', 'purple', 'green']
  const $people = []

  function conditionalizer(numeratorGivenBit, numeratorGivenNotBit, bit, adornmentBits) {
    if (adornmentBits !== undefined && adornmentBits !== null)
      return queryBit(adornmentBits, bit) ? numeratorGivenBit : numeratorGivenNotBit
    else {
      let otherNumerator = adornmentNumeratorFunctions[bit]()
      return (otherNumerator * numeratorGivenBit + (12 - otherNumerator) * numeratorGivenNotBit) / 12
    }
  }
  
  const adornmentNumeratorFunctions = [
    ()=>2, 
    ()=>3, 
    (adornmentBits) => conditionalizer(12, 4, 1, adornmentBits),
    ()=>4,
    // (adornmentBits) => conditionalizer(2, 3, 0, adornmentBits), 
  ]

  let buttonWidth = 80
  let buttonHeight = 30
  for (let j = 0; j < (onlyOneColumn?1:2); j++) {
    for (let i = 0; i < 4; i++) {
      let button = $N('rect', {
        x: -buttonWidth / 2., y: -buttonHeight / 2., rx: 0,
        width: buttonWidth, height: buttonHeight,
        class: adornmentColors[i]
      }, $svg);
      button.setTransform({ x: 150 + (j?1:-1) * (buttonWidth / 2. + 30), y: 40 + i * (4 + buttonHeight) });
      $svg.append(button)
      button.i = i
      button.j = j
      button.on('click', () => { 
        if (button.j )
          rearrange(i,currentIndexToPutOnTop) 
        else
          rearrange(currentIndexToPutOnLeft, i) 
      })
    }
  }

  function reposition($person,x,y) {
    let absoluteX = 12 + x * 24
    let absoluteY = 12 + y * 24
    $person.setTransform({ x: absoluteX, y: absoluteY });

    $person.$adornments.forEach(($adornment,i) => {
      if($adornment !== null) 
        $adornment.setTransform({ x: absoluteX, y: absoluteY - 4 * i + 9 });
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
      
      $people.push($person)
      $svg.append($person)
      $person.randomNumber = Math.random()
      $person.$adornments = [null,null,null,null]
    }
  }

  function logBits(bits) {
    log( queryBit(bits, 3), queryBit(bits, 2), queryBit(bits, 1), queryBit(bits, 0) )
  }

  let pIndex = 0
  for(let adornmentBits = 0; adornmentBits < 16; adornmentBits++) {
    let numWithThisCombination = 144
    
    for(let j = 0; j < 4; ++j) {
      if (queryBit(adornmentBits,j) )
        numWithThisCombination *= adornmentNumeratorFunctions[j](adornmentBits)
      else
        numWithThisCombination *= (12 - adornmentNumeratorFunctions[j](adornmentBits) )
      numWithThisCombination /= 12
    }

    {
      // let combinationProb = numWithThisCombination / 144
      // if (numWithThisCombination !== Math.round(numWithThisCombination))
      //   console.error("non integer combination: ")
      // totalProbability += combinationProb
      // logBits(adornmentBits);
      // log(numWithThisCombination)
    }

    let limit = pIndex + numWithThisCombination
    for (pIndex; pIndex < limit; ++pIndex) {
      for(let j = 0; j < 4; j++) {
        if (queryBit(adornmentBits,j) ){
          const $adornment = $N('rect', {
            x: -5, y: -5, rx: 0,
            width: 10, height: 3,
            class: adornmentColors[j]
          }, $svg);
          $svg.append($adornment)
          $people[pIndex].$adornments[j] = $adornment
        }
      }
    }
  }

  $people.sort((a,b)=>{return a.randomNumber-b.randomNumber})
  for (let i = 0; i < 12; ++i) {
    for (let j = 0; j < 12; ++j) {
      reposition($people[i*12+j], i, j)
    }
  }

  let currentIndexToPutOnLeft = -1
  let currentIndexToPutOnTop = -1
  function rearrange(indexToPutOnLeft,indexToPutOnTop) {
    currentIndexToPutOnLeft = indexToPutOnLeft
    currentIndexToPutOnTop = indexToPutOnTop

    const leftWidth = adornmentNumeratorFunctions[indexToPutOnLeft]()
    const rightWidth = 12 - leftWidth

    if(onlyOneColumn) {

    }
    else {
      let numInTopLeft = 0
      let numInTopRight = 0
      if (indexToPutOnTop !== -1) {
        $people.forEach(p => {
          if (p.$adornments[indexToPutOnLeft] && p.$adornments[indexToPutOnTop])
            ++numInTopLeft
          if (!p.$adornments[indexToPutOnLeft] && p.$adornments[indexToPutOnTop])
            ++numInTopRight
        })
      }

      if (numInTopLeft % leftWidth !== 0 || numInTopRight % rightWidth !== 0) {
        console.error("indivisible. columns sorted by", indexToPutOnLeft, ", then sorted by ", indexToPutOnTop)
        if (numInTopLeft % leftWidth !== 0)
          log("numInTopLeft", numInTopLeft, "totalInColumn", leftWidth * 12)
        if (numInTopRight % rightWidth !== 0)
          log("numInTopRight", numInTopRight, "totalInColumn", rightWidth * 12)
      }
      const topLeftHeight = numInTopLeft / leftWidth
      const topRightHeight = numInTopRight / rightWidth

      let topLeftNumSoFar = 0
      let topRightNumSoFar = 0
      let iBottomLeftNumSoFar = 0
      let iBottomRightNumSoFar = 0

      $people.forEach( (p) => {
        let quadrantNumSoFar = -1
        let columnWidth = -1
        let horizontalAddition = 0
        let verticalAddition = 0
        if (p.$adornments[indexToPutOnLeft] && p.$adornments[indexToPutOnTop]) {
          quadrantNumSoFar = topLeftNumSoFar
          columnWidth = leftWidth
          ++topLeftNumSoFar
        }
        else if (!p.$adornments[indexToPutOnLeft] && p.$adornments[indexToPutOnTop]) {
          quadrantNumSoFar = topRightNumSoFar
          horizontalAddition = leftWidth
          columnWidth = rightWidth
          ++topRightNumSoFar
        }
        else if (p.$adornments[indexToPutOnLeft] && !p.$adornments[indexToPutOnTop]) {
          quadrantNumSoFar = iBottomLeftNumSoFar
          verticalAddition = topLeftHeight
          columnWidth = leftWidth
          ++iBottomLeftNumSoFar
        }
        else if (!p.$adornments[indexToPutOnLeft] && !p.$adornments[indexToPutOnTop]) {
          quadrantNumSoFar = iBottomRightNumSoFar
          horizontalAddition = leftWidth
          verticalAddition = topRightHeight
          columnWidth = rightWidth
          ++iBottomRightNumSoFar
        }

        const horizontalPosition = horizontalAddition + quadrantNumSoFar % columnWidth
        const verticalPosition = verticalAddition + (quadrantNumSoFar - quadrantNumSoFar % columnWidth) / columnWidth
        reposition(p, horizontalPosition, verticalPosition)
      })
    }
  }

  // let frameCount = 0
  // function loop() {
  //   ++frameCount

  //   if (frameCount % 3 === 0 && frameCount / 3 < 16) {
  //     let bits = frameCount / 3
  //     // logBits(biQ- bits % 4) / 4, bits % 4)
  //     rearrange((bits - bits % 4)/4, bits%4)
  //   }

  //   setTimeout(loop, 20);
  // }
  // loop()
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
