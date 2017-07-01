// =============================================================================
// Divisibility and Primes
// (c) Mathigon
// =============================================================================



import { $N, animate, thread } from '@mathigon/boost';
import { isPrime, lcm, goldbach, generatePrime, numberFormat, random } from '@mathigon/fermat';
import { total, sortByFn, list, isOneOf, delay } from '@mathigon/core';


// -----------------------------------------------------------------------------
// Shared Utilities and Classes

function numberGrid($grid, time, className, filter) {
  $grid.children.forEach(function($i) {
    if (!filter(+$i.text)) return;
    delay(function() { $i.addClass(className); }, time);
    time += 80;
  });
}

function digitSum(n) {
  return total(n.toString().split('').map(x => +x));
}

function digitSumString(n) {
  return n.toString().split('').join(' + ');
}


// -----------------------------------------------------------------------------
// Section Functions

export function divisibilitygame(section) {
  section.gameplay._el.setFirstSlide(function($el) {
    $el.model({ x: '?', y: '?' });
  });

  section.gameplay._el.slideGenerator = function($el, success, error) {
    let answer = random.smart(3, 'divisibility-game');
    let n1 = random.smart(9, 'divisibility-game-number') + 2;
    let n2 = random.smart(9, 'divisibility-game-number') + 2;

    let x, y;
    switch(answer) {
      case 0: x = n1; y = n1 * n2; break;  // factor
      case 1: x = n1 * n2; y = n1; break;  // multiple
      case 2:
        x = n1; y = (n1 * n2) + [1, -1][random.integer(1)];  // neither
        if (random.integer(1)) [x, y] = [y, x];
    }

    $el.model({ x, y });

    let $buttons = $el.findAll('.factor-bubble');
    $buttons[0].on('click', answer === 0 ? success : error);
    $buttons[1].on('click', answer === 1 ? success : error);
    $buttons[2].on('click', answer > 1 ? success : error);

    $el.on('success', function() {
      $buttons.forEach(function($b, i) {
        if (answer === i) {
          $b.addClass('success'); $b.css('transform', 'none');
        } else {
          $b.children[0].exit('pop');
        }
      });
    });

    $el.on('error', function() {
      $buttons.forEach(function($b, i) {
        $b.addClass(answer === i ? 'success' : 'error');
      });
    });

  };
}

export function divisibility2(section) {
  section.on('load', function() {
    numberGrid(section.$el.find('.number-grid'), 1000, 'blue', i => (i % 2 === 0));
  });
}

export function divisibility5(section) {
  section.on('load', function() {
    numberGrid(section.$el.find('.number-grid'), 1000, 'green', i => (i % 5 === 0));
  });
}

export function divisibility31(section) {
  section.on('load', function() {
    section.model.load({ digitSum, digitSumString });
  });
}

export function divisibility32(section) {
  section.on('load', function() {
    numberGrid(section.$el.find('.number-grid'), 1000, 'red', i => (i % 3 === 0));

    setTimeout(function() {
      section.$el.findAll('.number-badge').forEach(function($b, i) {
        setTimeout(function() { $b.enter('pop'); }, 80*i);
      });
    }, 2000);
  });
}

export function divisibility9(section) {
  section.on('load', function() {
    setTimeout(function() {
      section.$el.findAll('.number-badge').forEach(function($b, i) {
        setTimeout(function() { $b.enter('pop'); }, 80*i);
      });
    }, 1000);
  });
}

export function divisibility6(section) {
  let $buttons = section.$el.findAll('.btn');
  let $grid = section.$el.find('.number-grid');

  $buttons.forEach(function($b) { $b.noDisplayChange = true; });
  section.goals.push('btn2', 'btn3');

  section.on('score-btn2', function() {
    $buttons[0].exit('pop');
    numberGrid($grid, 200, 'yellow', i => (i % 2 === 0));
  });

  section.on('score-btn3', function() {
    $buttons[1].exit('pop');
    numberGrid($grid, 200, 'blue', i => (i % 3 === 0));
  });

  section.on('score-blank-0', function() {
    numberGrid($grid, 200, 'green', i => (i % 6 === 0));
    delay(function() { $grid.children.forEach($el => { $el.removeClass('yellow blue'); }); }, 1200);
  });

  $buttons[0].on('click', function() { section.score('btn2'); });
  $buttons[1].on('click', function() { section.score('btn3'); });
}

export function factors2(section) {
  let $pairs = section.$el.findAll('.divisor-pair').reverse();
  let $numbers = section.$el.findAll('.divisor-number');

  $numbers.forEach($p => { $p.noDisplayChange = true; });

  $pairs.slice(1).forEach($p => { $p.hide(); });
  $numbers.forEach(($n, i) => { if (i > 0 && i < 7) $n.hide(); });

  section.slides.on('next', function(x) {
    switch(x) {
      case 1: $numbers[1].enter(); $numbers[6].enter(); $pairs[1].enter(); break;
      case 2: $numbers[2].enter(); $numbers[5].enter(); $pairs[2].enter(); break;
      case 3: $numbers[3].html = 4; $numbers[3].enter(); break;
      case 4: $numbers[3].exit().then(() => { $numbers[3].html = 5; $numbers[3].enter(); }); break;
      case 5: $numbers[3].exit().then(() => {
        $numbers[3].html = '6,'; $numbers[3].enter(); $numbers[4].enter(); $pairs[3].enter();
      });
    }
  });

  section.slides.on('back', function(x) {
    switch(x) {
      case 0: $numbers[1].exit(); $numbers[6].exit(); $pairs[1].exit(); break;
      case 1: $numbers[2].exit(); $numbers[5].exit(); $pairs[2].exit(); break;
      case 2: $numbers[3].exit(); break;
      case 3: $numbers[3].exit().then(() => { $numbers[3].html = 4; $numbers[3].enter(); }); break;
      case 4: $numbers[4].exit(); $pairs[3].exit(); $numbers[3].exit().then(() => {
        $numbers[3].html = 5; $numbers[3].enter();
      });
    }
  });
}

export function eratosthenes(section) {
  let $grid = section.$el.find('.number-grid');

  function colour(n, c) {
    numberGrid($grid, 1000, c, i => (i % n === 0));
    numberGrid($grid, 1000, 'off',  i => (i > n && i % n === 0));
  }

  section.slides.on('next', function(x) {
    switch(x) {
      case 1: section.$el.find('.number-cell').addClass('off'); break;
      case 2: colour(2, 'red'); break;
      case 3: colour(3, 'blue'); break;
      case 4: colour(5, 'green'); break;
      case 5:
        if (section.scores.has()) {
          colour(7, 'yellow'); break;
        } else {
          section.on('score-blank-0', function() { colour(7, 'yellow'); });
        }
    }
  });
}

export function primeTest(section) {
  let $input = section.$el.find('input');

  $input.on('blur', function() {
    let v = +$input.value;
    if (!v) { section.model.set('result', ''); }
    if (v > Number.MAX_SAFE_INTEGER) { section.model.set('result', 'That number is too large :('); return; }
    section.model.set('result', '<span class="loading"></span>');

    thread(isPrime, v).then(function({ data }) {
      section.model.set('result', data ? 'is prime' : 'is not prime');
    }).catch(function() {
      section.model.set('result', `Couldn‘t find a solution :(`);
    });
  });
}

export function primeGenerator(section) {
  section.$el.find('button').on('click', function() {
    let d = +section.model.d;
    section.model.set('result', '<span class="loading"></span>');

    thread(generatePrime, d, 10000).then(function({ data, time }) {
      section.model.set('result', numberFormat(data));
      section.model.set('time', Math.round(time));
    }).catch(function() {
      section.model.set('result', `Couldn‘t find a prime :(`);
    });
  });
}

export function ulam(section) {
  let $cells = section.$el.findAll('.number-cell');
  sortByFn($cells, function($c) { return +$c.text; });

  $cells.forEach($c => { $c.css('visibility', 'hidden'); });

  section.on('load', function() {
    $cells.forEach(($c, i) => {
      setTimeout(function() { $c.enter('pop'); }, i * 80);
    });
  });

  section.subsections[0].on('show', function() {
    let delay = 1;
    $cells.forEach($c => {
      if (!isPrime(+$c.text)) return;
      setTimeout(function() { $c.addClass('red'); }, delay * 80);
      delay += 1;
    });
  });
}

export function race(section) {
  let $button = section.$el.find('.lap-button');
  let $buttonText = $button.find('text');
  let $runners = section.$el.findAll('circle');
  let $paths = section.$el.findAll('.runner-path');
  let $lapTimes = section.$el.findAll('.lap-times').map($l => $l.children);

  let pathLengths = $paths.map($p => $p.strokeLength);
  let speed = [4, 6];
  let duration = 12;
  let running = false;

  function run() {
    if (running) return;
    running = true;
    $lapTimes.forEach($g => { $g.forEach($l => { $l.exit('pop', 200); }); });

    animate(function(p) {
      for (let i of [0, 1]) {
        let offset = ((p * duration) % speed[i]) / speed[i];
        let point = $paths[i].getLengthAt(pathLengths[i] * offset);
        $runners[i].attr('cx', point.x);
        $runners[i].attr('cy', point.y);
        $runners[i].attr('r', 12 * (1 + point.y/234));
      }
      $buttonText.text = Math.floor(p * duration * 10) + ' s';
    }, duration * 1000).then(function() {
      setTimeout(function() { running = false; $buttonText.text = 'START'; }, 1000);
    });

    for (let i of [0, 1]) {
      for (let x = 0; x < duration/speed[i]; ++x) {
        setTimeout(function() {
          $lapTimes[i][x].enter('pop', 200);
        }, speed[i] * (x+1) * 1000);
      }
    }
  }

  $button.on('click', run);
}

export function gcd(section) {
  let $tiles = section.$el.find('.tiles');

  section.model.change(function() {
    let n = section.model.x;
    section.model.set('result', isOneOf(n, 1, 2, 3, 6) ? 'It works!' : 'That doesn‘t seem to fit…');

    $tiles.clear();

    for (let x=0; x<30; x+=n) {
      for (let y=0; y<18; y+=n) {
        $N('rect', { x: 40 + 10 * x, y: 40 + 10 * y, width: 10 * n, height: 10 * n,
          stroke: '#736357', 'stroke-width': 2, fill: 'url(#tile)'}, $tiles);
      }
    }
  });
}

export function cicadas(section) {
  section.addGoals('bound-low', 'bound-high');

  section.model.set('isPrime', isPrime);
  section.model.set('lcm', lcm);

  let $highlight = section.$el.find('rect');
  let $rects = section.$el.findAll('rect').slice(1);
  $rects.forEach($r => { $r.hide(); });

  section.model.change(function() {
    let n = section.model.n;
    $rects[n-4].show();
    $highlight.attr('x', (n-4) * 26);

    if (n === 4) section.score('bound-low');
    if (n === 20) section.score('bound-high');
  });

  section.onScore('bound-low bound-high', function() {
    $rects.forEach($r => { $r.show(); });
  });
}

export function goldbach1(section) {
  let $input = section.$el.find('input');

  $input.on('blur', function() {
    let v = +$input.value;
    if (!v) { section.model.set('result', ''); return; }
    if (v % 2) { section.model.set('result', 'Pick an even number.'); return; }
    if (v > Number.MAX_SAFE_INTEGER) { section.model.set('result', 'That number is too large :('); return; }
    section.model.set('result', '<span class="loading"></span>');

    // hard: 12345678902468024
    thread(goldbach, v, 10000).then(function({ data }) {
      section.model.set('result', `${v} = ${data[0]} + ${data[1]}`);
    }).catch(function() {
      section.model.set('result', `Couldn‘t find a solution :(`);
    });
  });
}

export function riemann(section) {
  let dx = 23.5;
  let dy = 27;
  let y0 = 280;

  let y = y0;
  let points = [{ x: 0, y }];
  for (let i = 1; i <= 1000; ++i) {
    if (isPrime(i)) {
      points.push({ x: (i-1) * dx, y });
      y -= dy;
      points.push({ x: (i-1) * dx, y });
    }
  }
  section.$el.find('.pi').points = points;

  let $smallPrimes = section.$el.find('.small-primes');
  [3, 5, 7, 11, 13, 17, 19, 23, 29].forEach(function(p, i) {
    $N('line', { x1: (p-1) * dx, y1: y0, x2: (p-1) * dx,
      y2: y0 - dy * (i+1) }, $smallPrimes);
  });

  let $numbers = section.$el.find('.numbers');
  for (let i = 2; i < 30; ++i) {
    $N('text', { html: i, x: (i-1)*dx, y: y0+18, 'class': isPrime(i) ? 'prime' : '' }, $numbers);
  }

  points = list(3, 1000).map(i => ({ x: (i-1) * dx, y: y0 - dy * i / Math.log(i) }));
  section.$el.find('.log').points = points;

  let $svg = section.$el.find('svg');
  let $zoom = section.$el.find('.zoom-icon');
  $zoom.on('click', function() { section.score('zoom'); $svg.toggleClass('zoom'); });
}
