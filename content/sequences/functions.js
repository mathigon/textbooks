// =============================================================================
// Sequences
// (c) Mathigon
// =============================================================================


import { flatten, delay, list, last, cache, tabulate } from '@mathigon/core'
import { isPrime } from '@mathigon/fermat'
import { $N } from '@mathigon/boost'

import './components/tetrahedron'


// -----------------------------------------------------------------------------
// Introduction

function fadeInElements($step, tagName) {
  let t = 500;

  for (let $svg of $step.$$('svg')) {
    t += 500;
    $svg.prev.data.display = 'visibility';
    $svg.prev.hide();
    delay(() => $svg.prev.enter('pop'), t);

    for (let $c of $svg.$$(tagName).reverse()) {
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
// Fibonacci Numbers

export function rabbits($step) {
  const $dividers = $step.$$('line');
  const $paths = $step.$$('path');
  const $arrows = $step.$$('polygon');
  const $rabbits = $step.$$('.rabbit').slice(1);
  const $numbers = $step.$$('.n').slice(1);
  const $stage = $step.$('.rabbits');

  for (let $e of [...$dividers, ...$paths, ...$arrows, ...$numbers, ...$rabbits])
    $e.hide();

  const cum = [0, 1, 2, 4, 7, 12, 20];
  const padding = [10, 20, 30, 40, 50, 60];

  $step.$slides.on('next', (x) => {
    $stage.css('padding-bottom', padding[x] + '%');
    $dividers[x - 1].enter('draw', 800);
    $numbers[x - 1].enter('pop', 400, 800);
    for (let i = cum[x]; i < cum[x + 1]; ++i) {
      $rabbits[i - 1].enter('descend', 400, 600 + (i - cum[x]) * 50)
    }
    for (let i = cum[x - 2] || 0; i < cum[x - 1]; ++i) {
      $paths[i].enter('draw', 400, 400);
      $arrows[i].enter('fade', 200, 800);
    }
  });

  $step.$slides.on('back', (x) => {
    $stage.css('padding-bottom', padding[x] + '%');
    $dividers[x].exit('draw');
    $numbers[x].exit('pop');
    for (let i = cum[x + 1] || 0; i < cum[x + 2]; ++i) {
      $rabbits[i - 1].exit('ascend')
    }
    for (let i = cum[x - 1]; i < cum[x]; ++i) {
      $paths[i].exit('draw');
      $arrows[i].exit('fade', 200);
    }
  });
}

export function spirals($step) {
  for (let $s of $step.$$('x-select')) {
    const $cw = $s.next.$('.clockwise');
    const $ccw = $s.next.$('.anticlockwise');
    $s.on('change',($el) => {
      $cw.setClass('active', $el.data.value === 'cw');
      $ccw.setClass('active', $el.data.value === 'ccw');
    });
  }
}

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
// Pascal's Triangle

export function pascalIntro($step) {
  const $rows = $step.$$('.r').map($r => $r.$$('.c'));

  for (let i = 1; i < $rows.length; ++i) {
    for (let j = 1; j < $rows[i].length - 1; ++j) {
      $rows[i][j].on('hover', {
        enter() {
          $rows[i][j].addClass('red');
          $rows[i-1][j-1].addClass('yellow');
          $rows[i-1][j].addClass('yellow plus');
        },
        exit() {
          $rows[i][j].removeClass('red');
          $rows[i-1][j-1].removeClass('yellow');
          $rows[i-1][j].removeClass('yellow plus');
        }
      });

    }
  }
}

const colours = ['yellow', 'orange', 'red', 'purple', 'blue', 'teal', 'green', 'lime'];

const colourFunctions = [
  (i, j) => { if (j === 0 || j === i) return 'yellow'; },  // ones
  (i, j) => { if (j === 1 || j === i - 1) return 'orange'; },  // integers
  (i, j) => { if (j === 2 || j === i - 2) return 'red'; },  // triangle
  (i, j) => { if (j === 3 || j === i - 3) return 'purple'; },  // tetrahedral
  (i, j) => { if (j) return (j > i) ? 'visible plus blue' : 'plus'; },  // powers
  (i, j) => { if (isPrime(i)) {
    if (j === 1 || j === i - 1) return 'blue';
    if (j > 1 && j < i-1) return 'teal';
  }},  // primes
  (i, j) => {
    return colours[i % 8] + ((j > i/2) ? ' plus visible' : ' light');
  } // fibonacci
];

let colourIndex = 0;

function colourPascal($rows, $cells, fn, index) {
  for (let $c of $cells) $c.setAttr('class', 'c');
  let t = 0;

  for (let i = 0; i < $rows.length; ++i) {
    for (let j = 0; j < $rows[i].length; ++j) {
      let className = fn(i, j, +$rows[i][j].text);
      if (className) delay(() => {
        if (index === colourIndex) $rows[i][j].addClass(className);
      }, t += 6000/(i*i+100));
    }
  }
}

const fibonacci = cache((x) => {
  return (x < 3) ? 1 : fibonacci(x - 1) + fibonacci(x - 2);
});

export function pascalSequences($step) {
  const $rows = $step.$$('.r').map($r => $r.$$('.c'));
  const $cells = flatten($rows);
  const $tabbox = $step.$('x-tabbox');
  const $body = $tabbox.$('.body');
  const $sums = $rows.map($row => last($row));

  // Fibonacci numbers are coloured by diagonal
  const $fibonacci = tabulate(() => [], 16 * 2 + 1);  // 16 -> number of rows
  $rows.forEach(($cells, i) => $cells.forEach(($c, j) => {
    if (i + i - j >= 0) $fibonacci[i + i - j].push($c);
  }));

  function onChange(i) {
    colourIndex += 1;
    $body.setAttr('class', 'body s-' + colours[i]);

    if (i === 4) $sums.forEach(($s, t) => { $s.text = Math.pow(2, t); });
    if (i === 6) $sums.forEach(($s, t) => { $s.text = fibonacci(t); });

    const $r = (i === 6) ? $fibonacci : $rows;
    colourPascal($r, $cells, colourFunctions[i], colourIndex);
  }

  $tabbox.on('change', onChange);
  onChange(0);

  for (let i=0; i<6; ++i) {
    $step.$blanks[i].on('valid', () => {
      delay(() => $tabbox.makeActive(i + 1), 800);
    });
  }
}

export function modular($step) {
  const $cells = $step.$$('.c');
  let count = 0;

  for (let $c of $cells) {
    const d = (+$c.text);
    let done = false;
    $c.on('click', () => {
      if (d % 2) return $step.addHint('not-even');
      if (done) return;
      done = true;
      $c.addClass('red');
      count += 1;
      if (count === 9) {
        $step.score('select');
        $step.addHint('correct');
      }
    });
  }
}

export function modular1($step) {
  const $rows = $step.$$('.r').map($r => $r.$$('.c'));
  const $cells = flatten($rows);

  for (const $btn of $step.$$('.pascal-buttons .btn')) {
    const x = +$btn.data.value;
    const colour = ['red', 'blue', 'green', 'yellow'][x - 2];
    const fn = (i, j, n) => { if (n % x === 0) return colour; };
    $btn.on('click', () => {
      colourIndex += 1;
      colourPascal($rows, $cells, fn, colourIndex);
      $step.score('c' + x);
    });
  }
}
