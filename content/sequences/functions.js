// =============================================================================
// Sequences
// (c) Mathigon
// =============================================================================


import { flatten, delay, list, last, cache, tabulate, square, sortByFn, total } from '@mathigon/core'
import { isPrime, numberFormat, Point, round } from '@mathigon/fermat'
import { $N } from '@mathigon/boost'

import { trianglePoints, polygonPoints } from './components/polygons'
import './components/tetrahedron'


// -----------------------------------------------------------------------------
// Introduction

function showArrows($arrows) {
  $arrows.forEach(($a, i) => $a.enter('pop', 400, i*200));
}

export function simplePatterns($step) {
  const $arrows = $step.$$('.with-arrows').map($x => $x.$$('.arrow[hidden]'));

  $step.onScore('blank-0 blank-1', () => showArrows($arrows[0]));
  $step.onScore('blank-2 blank-3', () => showArrows($arrows[1]));
  $step.onScore('blank-4 blank-5', () => showArrows($arrows[2]));
  $step.onScore('blank-6 blank-7', () => showArrows($arrows[3]));
}

function fadeInElements($step, tagName) {
  let t = 500;

  for (let $svg of $step.$$('svg')) {
    t += 500;
    $svg.prev.data.display = 'visibility';
    $svg.prev.hide();
    $svg.prev.enter('pop', 400, t);

    for (let $c of $svg.$$(tagName).reverse()) {
      $c.hide();
      $c.enter('pop', 400, t);
      t += 100;
    }
  }
}

export function triangles($step) {
  fadeInElements($step, 'circle');
}

export function squares($step) {
  fadeInElements($step, 'rect');
}


// -----------------------------------------------------------------------------
// Arithmetic and Geometric Sequences

const BOUNCE_RATE = 0.8;
function bounce(x) {
  const y = [];

  let y0 = 10;
  let x0 = 0;

  while (x0 < 25) {
    y.push(y0 - square(x*4 - x0));
    x0 = 0.1 + x0 + Math.sqrt(y0) + Math.sqrt(BOUNCE_RATE * y0);
    y0 = BOUNCE_RATE * y0;
  }

  return 0.7 + 0.93 * Math.max(0, ...y);
}

function setPosition ($el, p, width, height, r) {
  $el.css({left: p.x / width * 100 + '%', top: p.y / height * 100 + '%',
    transform: `rotate(${r}deg)`});
}

export function ball($step) {
  const $chart = $step.$('x-coordinate-system');
  const $slider = $step.$('x-slider');
  const $balls = $step.$$('.tennis-ball');

  $chart.setFunctions(bounce);
  $chart.$xAxis.setAttr('x1', '2');
  const $fn = $chart.$plot.$('path');

  function tick(n) {
    const x = 6.65 * n / $slider.steps;
    const p = $chart.mathToPlotCoords(new Point(x, bounce(x)));

    const right = ($chart.plotBounds.xMax - p.x) / $chart.plotBounds.dx * 100;
    $fn.css('clip-path', `inset(-2px ${right}% -2px -2px)`);

    setPosition($balls[0], p, 640, 320, x * 90);
    setPosition($balls[1], new Point(40, p.y), 640, 320, x * 90);
  }

  $slider.on('move', tick);
  tick(0);
}

export function ball1($step) {
  const $reveals = $step.$$('.reveal');
  for (let $r of $reveals) $r.hide();

  $step.onScore('blank-0 blank-1', () => {
    $reveals.forEach(($r, i) => $r.enter('fade', 400, 100 + i * 100));
    delay(() => $step.score('reveals'), 900);
  });
}

function arithmetic(a, d, n) {
  return tabulate((i) => a + i * d, n);
}

function geometric(a, r, n) {
  return tabulate((i) => a * Math.pow(r, i), n);
}

export function arithmeticGeometricSelect($step) {
  const $cols = $step.$('.row').children.map($c => $c.$('p'));

  $step.onScore('blank-0', () => $cols[0].addClass('s-green'));
  $step.onScore('blank-2', () => $cols[2].addClass('s-red'));
  $step.onScore('blank-4', () => $cols[4].addClass('s-red'));
  $step.onScore('blank-7', () => $cols[8].addClass('s-green'));
}

export function arithmeticGeometricGraph($step) {
  const $plots = $step.$$('x-coordinate-system');

  $step.model.set('arithmetic', (a, d, i) => numberFormat(a + i * d, 4));
  $step.model.set('geometric', (a, r, i) => numberFormat(a * Math.pow(r, i), 4));

  $step.model.watch((m) => {
    const p1 = arithmetic(m.a, m.d, 10).map((p, i) => new Point(1 + i, p));
    const p2 = geometric(m.b, m.r, 10).map((p, i) => new Point(1 + i, p));
    $plots[0].setSeries(p1);
    $plots[1].setSeries(p2);
    $plots[0].drawPoints(p1);
    $plots[1].drawPoints(p2);
  });

  const $actions = $step.$$('.var-action');
  $actions[0].on('click', () => $step.model.assign({b: 2, r: 2}));
  $actions[1].on('click', () => $step.model.assign({b: 10, r: 0.6}));
  $actions[2].on('click', () => $step.model.assign({b: 3, r: -1.4}));
}

export function payItForward($step) {
  $step.$('x-video').on('end', () => $step.score('video'));
}

export function payItForward2($step) {
  const $equation = $step.$('x-equation');
  $equation.validate = (expr, Expression) => {
    const close = Expression.parse('3^n');
    if (Expression.numEquals(expr, close)) return {error: 'pay-it-forward-close'};
  };
}


// -----------------------------------------------------------------------------
// Figurate Numbers

export function triangleNumbers($step) {
  for (let $c of $step.$$('svg circle')) $c.hide();
  setTimeout(() => fadeInElements($step, 'circle'), 200);
}

/* export function triangleProof($step) {
  const $g = $step.$('svg g');

  $step.model.watch((m) => {
    $g.removeChildren();
    const points = trianglePoints(m.x - 1);
    const scale = 200/m.x;
    const r = 30 / Math.sqrt(m.x);
    for (let p of points) {
      $N('circle', {cx: 150 + scale * p.x, cy: 150 + scale * p.y, r}, $g);
    }
  });
} */

function triangleNumber(n) {
  return n * (n + 1) / 2;
}

// Split any integer into a sum of 3 triangle numbers.
const triangularSum = cache(function(x) {
  const results = [];

  let n0 = Math.floor((Math.sqrt(8 * x + 1) - 1) / 2);
  while (n0 > 0) {
    let r1 = x - triangleNumber(n0);
    if (!r1) return [n0, 0, 0];
    let n1 = Math.min(n0, Math.floor((Math.sqrt(8 * r1 + 1) - 1) / 2));
    while (n1 > 0) {
      let r2 = r1 - triangleNumber(n1);
      if (!r2) results.push([n0, n1, 0]);
      let n2 = Math.min(n1, Math.floor((Math.sqrt(8 * r2 + 1) - 1) / 2));
      if (r2 === triangleNumber(n2)) results.push([n0, n1, n2]);
      n1 -= 1;
    }
    n0 -= 1;
  }

  sortByFn(results, r => total(r.map(x => square(x))));
  return last(results);
});

export function triangleSums($step) {
  const $svgs = $step.$$('svg.t-sum');
  const $sums = $step.$$('strong.t-sum');

  $step.model.watch((model) => {
    const t = triangularSum(model.n);
    const tx = t.map(x => triangleNumber(x));

    for (let i of [0, 1, 2]) {
      $sums[i].text = tx[i];
      $svgs[i+1].removeChildren();
      const s = t[i] <= 9 ? 1 : (1.9 - t[i] / 10);
      for (let p of trianglePoints(t[i] - 1)) {
        $N('circle', {cx: 70 + 15 * s * p.x, cy: 80 + 15 * s * p.y, r: 6 * s},
            $svgs[i+1]);
      }
    }

    $svgs[0].removeChildren();
    for (let i = 0; i < model.n; ++i) {
      $N('circle', {
        class: (i < tx[0]) ? 'red' : (i < tx[0] + tx[1]) ? 'blue' : 'green',
        cx: 7 + 14 * (i % 10),
        cy: 7 + 14 * Math.floor(i / 10),
        r: 6
      }, $svgs[0]);
    }
  });
}

export function squareNumbers1($step) {
  const $groups = $step.$$('svg g');
  const $slider = $step.$('x-slider');

  $slider.on('move', (x) => {
    for (let i = 0; i < 7; ++i) {
      $groups[i].css('display', (i <= x) ? 'block' : 'none');
    }
  });
  $slider.set(6);
}

export function polygonNumbers($step) {
  const POLYGONS = ['triangle', 'square', 'pentagonal', 'hexagonal',
      'heptagonal', 'octagonal', 'nonagonal', 'decagonal'];
  const COLOURS = ['#ff941f', '#ec7031', '#d94c44', '#c62857', '#b30469',
    '#8e228f', '#693fb4', '#445dda', '#1f7aff', '#2488c0', '#289782', '#2da543'];

  const $svg = $step.$('svg');
  const $slider = $step.$('x-slider');
  const $mn = $step.$$('mn');
  $step.model.assign({polygonName: (x) => POLYGONS[x - 3]});

  function update(k, x) {
    $svg.removeChildren();
    const points = polygonPoints(k, x);
    const scale = Math.max(...points.map(p => p.y)) / 2;
    $mn[0].text = x;
    $mn[1].text = points.length;

    for (let p of points) {
      $N('circle', {
        cx: 150 + (60 + 5 * x) * (scale ? p.x / scale : 0),
        cy: 130 + (60 + 5 * x) * (scale ? (p.y / scale - 1) : 0),
        r: Math.min(70, 1 + (250 / k / x)),
        fill: COLOURS[p.m]
      }, $svg);
    }
  }

  $step.model.watch((m) => update(m.k, $slider.current + 1));
  $slider.on('move', (x) => update($step.model.k, x + 1));
  $slider.set(3);
}


// -----------------------------------------------------------------------------
// Special Sequences

function eratosthenes($step, $numbers, $gesture, primes, classes) {
  const p = primes.pop();
  const c = classes.pop();

  $numbers[p - 1].addClass(c);
  $gesture.$target = $numbers[p - 1];
  $gesture.start();

  $numbers[p - 1].one('click', () => {
    $gesture.stop();
    let time = 0;

    for (let i = 2; i <= 100 / p; ++i) {
      const t = 300 + 400 / i;  // Slowly speed up the animation over time.
      delay(() => $numbers[i * p - 1].addClass(c + ' deleted'), time += t);
    }

    delay(() => {
      $step.score('p' + p);
      if (primes.length) eratosthenes($step, $numbers, $gesture, primes, classes)
    }, time + 1000);
  });
}

export function primes2($step) {
  const $numbers = $step.$$('.eratosthenes *');
  const $gesture = $step.$('x-gesture');
  eratosthenes($step, $numbers, $gesture, [7, 5, 3, 2],
      ['l-yellow', 'l-green', 'l-blue', 'l-red']);

  const $plot = $step.$('x-coordinate-system');
  const primes = [new Point(2, 1)];
  let n = 1;
  for (let i=3; i < 247; ++i) {
    primes.push(new Point(i, n));
    if (isPrime(i)) {
      n += 1;
      primes.push(new Point(i, n));
    }
  }
  $plot.setSeries(primes);
}

function hailstones(n) {
  const list = [n];
  let last = n;

  while(true) {
    if (last % 2) {
      last = 3 * last + 1;
    } else {
      last /= 2;
    }
    if (last === 4) return list;
    list.push(last);
  }
}

export function hailstone1($step) {
  $step.model.set('hailstones', (n) => hailstones(n)
      .map(i => `<span class="n">${i}</span>`).join(', '));
}

export function hailstone2($step) {
  const cached = cache(hailstones);
  const $plot = $step.$('x-coordinate-system');

  $step.model.watch((m) => $plot.setPoints([...cached(m.n), 4, 2, 1]));

  const $actions = $step.$$('.var-action');
  $actions[0].on('click', () => $step.model.set('n', 31));
  $actions[1].on('click', () => $step.model.set('n', 47));
}

export function quiz($step) {
  const goals = list(14).map(x => 'blank-' + x).join(' ');
  $step.onScore(goals, () => {
    if ($step.$course && !$step.$course.isReady) return;
    $step.tools.confetti();
  });
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
      $rabbits[i - 1].enter('descend', 400, 600 + (i - cum[x]) * 60)
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

export function bees($step) {
  const $img = $step.$$('img');
  $step.$('x-select').on('change', ($el) => {
    if ($el.data.value === 'female') {
      $img[0].exit('fade', 200).then(() => $img[1].enter('fade', 200));
    } else {
      $img[1].exit('fade', 200).then(() => $img[0].enter('fade', 200));
    }
  });
}

export function goldenSpiral($step) {
  const $svg = $step.$('svg');
  const $squares = $svg.$$('rect').slice(2);
  const $lines = $svg.$$('path');

  const transforms = ['scale(4) translate(-23%,-23%)',
    'scale(3.5) translate(-23%,-18%)', 'scale(3) translate(-18%,-18%)',
    'scale(1.5) translate(-18%,-23%)', 'none', 'none'];
  $svg.transform = transforms[0];

  for (let $e of [...$squares, ...$lines]) $e.hide();

  $step.$slides.on('next', (x) => {
    $svg.transform = transforms[x];
    if (x <= 3) {
      $squares[x - 1].enter('fade');
    } else if (x === 4) {
      $squares[3].enter('fade');
      $squares[4].enter('fade', 400, 400);
      $squares[5].enter('fade', 400, 800);
    } else if (x === 5) {
      for (let $l of $lines) $l.enter('draw', 2000);
    }
  });

  $step.$slides.on('back', (x) => {
    $svg.transform = transforms[x];
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

export function goldenRatio1($step) {
  $step.$$('.golden-art').forEach(($img, i) => {
    $img.on('click', () => {
      $img.toggleClass('active');
      $step.score('img-' + i);
    });
  });
}

export function sunflowerGrowing($step) {
  const $petals = $step.$$('svg path');
  const $bulb = $step.$('svg circle');
  const $slider = $step.$('x-slider');
  const count = $petals.length;  // Should be the same as $slider.steps - 1;

  function move(x) {
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

    $bulb.transform = `scale(${1 + 69 * Math.sqrt(x/count)})`
  }

  $slider.on('move', move);
  move(0);
}

export function sunflowerSpiral($step) {
  const COUNT = 500;

  const $slider = $step.$('x-slider');
  const $slideshow = $step.$('x-slideshow');
  const $svg = $step.$('svg');
  const $value = $step.$('.value');
  const $circles = list(COUNT).map(() => $N('circle', {r: 3}, $svg));

  $slider.on('move', (x) => {
    for (let i = 0; i < COUNT; ++i) {
      let t = i * Math.PI * 2 * x / $slider.steps;
      let r = Math.sqrt(i) / Math.sqrt(COUNT) * 196;
      $circles[i].setCenter({
        x: 200 + r * Math.cos(t),
        y: 200 + r * Math.sin(t)
      });
    }
    $value.text = `${round(x/1000*360, 1)}° (${x/1000} rotations)`;
  });

  $slideshow.on('next back', (x) => {
    if (x === 0) $slider.moveTo(0);
    if (x === 1) $slider.moveTo($slider.steps / 2);
    if (x === 2) $slider.moveTo($slider.steps * 0.4);
    if (x === 4) $slider.moveTo($slider.steps / Math.PI);
    if (x === 5) $slider.moveTo($slider.steps * 0.6180339);
  });

  for (let $a of $step.$$('.fib-action')) {
    const x = $slider.steps * $a.data.value;
    $a.on('click', () => $slider.moveTo(x));
  }

  $slider.set(0.411 * $slider.steps);
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
