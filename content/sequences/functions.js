// =============================================================================
// Sequences
// (c) Mathigon
// =============================================================================


import { flatten, delay, list, throttle } from '@mathigon/core'
import { isPrime } from '@mathigon/fermat'
import { $N } from '@mathigon/boost'

import './components/tetrahedron'


// -----------------------------------------------------------------------------

function fadeInElements($step, className) {
  let t = 500;

  for (let $svg of $step.$$('svg')) {
    t += 500;
    $svg.prev.hide();
    delay(() => $svg.prev.enter('pop'), t);

    for (let $c of $svg.$$(className)) {
      $c.hide();
      delay(() => $c.enter('pop'), t);
      t += 100;
    }
  }

}

export function triangleNumbers($step) {
  fadeInElements($step, 'circle');
}

export function squareNumbers($step) {
  fadeInElements($step, 'rect');
}

// -----------------------------------------------------------------------------

export function goldenSpiral($step) {
  const $squares = $step.$$('svg rect').slice(2);
  const $lines = $step.$$('svg path');

  for (let $e of [...$squares, ...$lines]) $e.hide();

  $step.$slides.on('next', (x) => {
    if (x <= 3) {
      $squares[x - 1].enter('fade');
    } else if (x === 4) {
      $squares[3].enter('fade');
      $squares[4].enter('fade', 400, 1000);
      $squares[5].enter('fade', 400, 2000);
    } else if (x === 5) {
      for (let $l of $lines) $l.enter('draw', 2000);
    }
  });

  $step.$slides.on('back', (x) => {
    if (x <= 2) {
      $squares[x].exit('fade');
    } else if (x === 3) {
      $squares[3].exit('fade');
      $squares[4].exit('fade');
      $squares[5].exit('fade');
    } else if (x === 4) {
      for (let $l of $lines) $l.exit('draw', 1000);
    }
  });
}

export function sunflowerGrowing($step) {
  const $petals = $step.$$('svg path');
  const $bulb = $step.$('svg circle');
  const $slider = $step.$('x-slider');
  const count = $petals.length;  // Should be the same as $slider.steps - 1;

  $slider.on('move', (x) => {
    for (let i = 0; i <= x; ++i) {
      let t = 3.883222 * i;
      let r = Math.sqrt((x - i)/count);
      let cx = r * 70 * Math.cos(t);
      let cy = r * 70 * Math.sin(t);
      $petals[i].transform = `translate(${cx}px,${cy}px) scale(${1.5 + r}) rotate(${t}rad)`;
    }

    for (let i = x + 1; i < count; ++i) {
      let t = 3.883222 * i;
      $petals[i].transform = `scale(0.05) rotate(${t}rad)`;
    }

    $bulb.transform = `scale(${0.2 + 0.8 * x/count})`
  });

  $slider.set(0);  // TODO <- fix
}

export function sunflowerSpiral($step) {
  const count = 500;

  const $slider = $step.$('x-slider');
  const $svg = $step.$('.fib-spiral');
  const $circles = list(count).map(() => $N('circle', {r: 3}, $svg));

  $slider.on('move', (x) => {
    for (let i = 0; i < count; ++i) {
      let t = i * Math.PI * 2 * x / $slider.steps;
      let r = Math.sqrt(i) / Math.sqrt(count) * 200;
      $circles[i].setCenter({
        x: 200 + r * Math.cos(t),
        y: 200 + r * Math.sin(t)
      });
    }
  });

  $slider.set(0.6180339 * $slider.steps);
}

// -----------------------------------------------------------------------------

function colourPascal($rows, $cells, fn) {
  for (let $c of $cells) $c.setAttr('class', 'c');
  let t = 0;

  for (let i = 0; i < $rows.length; ++i) {
    for (let j = 0; j < $rows[i].length; ++j) {
      let className = fn(i, j, +$rows[i][j].text);
      if (className) delay(() => $rows[i][j].addClass(className), t += (60 - 2*i));
    }
  }
}

const colours = ['yellow', 'orange', 'red', 'purple', 'blue', 'teal', 'green'];

const colourFunctions = {
  ones: (i, j) => { if (j === 0 || j === i) return 'red'; },
  integers: (i, j) => { if (j === 1 || j === i - 1) return 'blue'; },
  triangle: (i, j) => { if (j === 2 || j === i - 2) return 'green'; },
  tetrahedral: (i, j) => { if (j === 3 || j === i - 3) return 'yellow'; },
  primes: (i, j) => { if (isPrime(i)) {
    if (j === 1 || j === i - 1) return 'red';
    if (j > 1 && j < i-1) return 'purple';
  }},
  fibonacci: (i, j) => colours[(i + j) % 7],
};

export function pascalIntro($step) {
  const $rows = $step.$$('.r').map($r => $r.$$('.c'));

  for (let i = 1; i < $rows.length; ++i) {
    for (let j = 1; j < $rows[i].length - 1; ++j) {
      $rows[i][j].on('hover', {
        enter() {
          $rows[i][j].addClass('red');
          $rows[i-1][j-1].addClass('yellow plus');
          $rows[i-1][j].addClass('yellow');
        },
        exit() {
          $rows[i][j].removeClass('red');
          $rows[i-1][j-1].removeClass('yellow plus');
          $rows[i-1][j].removeClass('yellow');
        }
      });

    }
  }
}

export function pascalSequences($step) {
  const $rows = $step.$$('.r').map($r => $r.$$('.c'));
  const $cells = flatten($rows);

  for (const $btn of $step.$$('.pascal-btn')) {
    const fn = colourFunctions[$btn.data.value];
    $btn.on('click', () => colourPascal($rows, $cells, fn));
  }
}

export function modular($step) {
  const $rows = $step.$$('.r').map($r => $r.$$('.c'));
  const $cells = flatten($rows);

  for (const $btn of $step.$$('.pascal-btn')) {
    const x = +$btn.data.value;
    const colour = ['blue', 'red', 'green', 'yellow'][x - 2];
    const fn = (i, j, n) => { if (n % x === 0) return colour; };
    $btn.on('click', () => colourPascal($rows, $cells, fn));
  }
}
