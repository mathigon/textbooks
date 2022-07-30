// =============================================================================
// Divisibility and Primes
// (c) Mathigon
// =============================================================================


import {$N, animate, ElementView, InputView, observe, SVGView, thread} from '@mathigon/boost';
import {isPrime, lcm, numberFormat, Random} from '@mathigon/fermat';
import {delay, isOneOf, list, sortBy, total} from '@mathigon/core';
import {Slideshow, Step} from '@mathigon/studio';
import {Gameplay} from '../shared/components/gameplay/gameplay';
import '../shared/components/gameplay/gameplay';
import '../shared/components/solved/solved';


// -----------------------------------------------------------------------------
// Shared Utilities and Classes

function numberGrid($grid: ElementView, time: number, className: string,
    filter: (i: number) => boolean) {
  for (const $i of $grid.children) {
    if (!filter(+$i.text)) continue;
    delay(() => $i.addClass(className), time);
    time += 150;
  }
}

function getText($step: Step, id: string) {
  return (($step as any)?.$course?.$tutor?.hints[id] as string) || id;
}


// -----------------------------------------------------------------------------
// Section Functions

export function divisibilityGame($step: Step) {
  const $gameplay = $step.$('x-gameplay') as Gameplay;

  $gameplay.setSlideGenerator(($el, success, error) => {
    const answer = Random.smart(3, 'factor-quiz');
    const n1 = Random.smart(9, 'factor-quiz-number') + 2;
    const n2 = Random.smart(9, 'factor-quiz-number') + 2;

    const val = [n1, n1];
    if (answer === 0) {  // factor
      val[1] = n1 * n2;
    } else if (answer === 1) { // multiple
      val[0] = n1 * n2;
    } else {  // neither
      val[1] = (n1 * n2) + Random.find([1, -1]);
      if (Random.bernoulli()) val.reverse();
    }
    $el.bindModel(observe({x: val[0], y: val[1]}));

    const $buttons = $el.$$('.factor-bubble .btn');
    $buttons[0].on('click', () => grade(answer === 0));
    $buttons[1].on('click', () => grade(answer === 1));
    $buttons[2].on('click', () => grade(answer > 1));

    const grade = (correct: boolean) => {
      for (const [i, $b] of $buttons.entries()) {
        if (correct && answer === i) {
          $b.removeClass('btn-blue');
          $b.addClass('btn-green');
          $b.parent!.css('transform', 'none');
        } else if (correct) {
          $b.exit('pop');
        } else {
          $b.removeClass('btn-blue');
          $b.addClass(answer === i ? 'btn-green' : 'btn-red');
        }
      }
      correct ? success() : error();
    };
  });
}

export function divisibility2($section: Step) {
  numberGrid($section.$('.number-grid')!, 1000, 'blue', i => (i % 2 === 0));
}

export function divisibility5($section: Step) {
  numberGrid($section.$('.number-grid')!, 1000, 'green', i => (i % 5 === 0));
}

export function divisibility3a($section: Step) {
  $section.model.assign({
    digitSum: (n: number) => total(n.toString().split('').map(x => +x)),
    digitSumString: (n: number) => n.toString().split('').join(' + ')
  });
}

export function divisibility3b($section: Step) {
  numberGrid($section.$('.number-grid')!, 1000, 'red', i => (i % 3 === 0));

  setTimeout(() => {
    $section.$$('.number-badge').forEach(($b, i) => {
      setTimeout(() => $b.enter('pop'), 80 * i);
    });
  }, 2000);
}

export function divisibility9($section: Step) {
  setTimeout(() => {
    $section.$$('.number-badge').forEach(($b, i) => {
      setTimeout(() => $b.enter('pop'), 80 * i);
    });
  }, 1000);
}

export function divisibility6($section: Step) {
  const $buttons = $section.$$('.btn');
  const $grid = $section.$('.number-grid')!;

  $section.on('score-btn2', () => {
    $buttons[0].exit('pop');
    numberGrid($grid, 200, 'yellow', i => (i % 2 === 0));
  });

  $section.on('score-btn3', () => {
    $buttons[1].exit('pop');
    numberGrid($grid, 200, 'blue', i => (i % 3 === 0));
  });

  $section.on('score-blank-0', () => {
    numberGrid($grid, 200, 'green', i => (i % 6 === 0));
    delay(() => {
      $grid.children.forEach($el => $el.removeClass('yellow blue'));
    }, 1200);
  });

  $buttons[0].on('click', () => $section.score('btn2'));
  $buttons[1].on('click', () => $section.score('btn3'));
}

export function factors2($section: Step) {
  const $pairs = $section.$$('.divisor-pair').reverse();
  const $numbers = $section.$$('.divisor-number');
  const $slides = $section.$('x-slideshow') as Slideshow;

  $pairs.slice(1).forEach($p => $p.hide());
  $numbers.forEach(($n, i) => {
    if (i > 0 && i < 7) $n.hide();
  });

  $slides.on('next', async (x) => {
    if (x === 1) {
      $numbers[1].enter();
      $numbers[6].enter();
      $pairs[1].enter();
    } else if (x === 2) {
      $numbers[2].enter();
      $numbers[5].enter();
      $pairs[2].enter();
    } else if (x === 3) {
      $numbers[3].html = '4';
      $numbers[3].enter();
    } else if (x === 4) {
      await $numbers[3].exit().promise;
      $numbers[3].html = '5';
      $numbers[3].enter();
    } else if (x === 5) {
      await $numbers[3].exit().promise;
      $numbers[3].html = '6,';
      $numbers[3].enter();
      $numbers[4].enter();
      $pairs[3].enter();
    }
  });

  $slides.on('back', async (x) => {
    if (x === 0) {
      $numbers[1].exit();
      $numbers[6].exit();
      $pairs[1].exit();
    } else if (x === 1) {
      $numbers[2].exit();
      $numbers[5].exit();
      $pairs[2].exit();
    } else if (x === 2) {
      $numbers[3].exit();
    } else if (x === 3) {
      await $numbers[3].exit().promise;
      $numbers[3].html = '4';
      $numbers[3].enter();
    } else if (x === 4) {
      $numbers[4].exit();
      $pairs[3].exit();
      await $numbers[3].exit().promise;
      $numbers[3].html = '5';
      $numbers[3].enter();
    }
  });
}

export function eratosthenes($section: Step) {
  const $grid = $section.$('.number-grid')!;
  const $slides = $section.$('x-slideshow') as Slideshow;

  function colour(n: number, c: string) {
    numberGrid($grid, 500, c, i => (i % n === 0));
    numberGrid($grid, 500, 'off', i => (i > n && i % n === 0));
  }

  $slides.on('next', (x) => {
    switch (x) {
      case 1:
        $section.$('.number-cell')!.addClass('off');
        break;
      case 2:
        colour(2, 'red');
        break;
      case 3:
        colour(3, 'blue');
        break;
      case 4:
        colour(5, 'green');
        break;
      case 5:
        if ($section.scores.has('blank-0')) {
          colour(7, 'yellow');
          break;
        } else {
          $section.onScore('blank-0', () => colour(7, 'yellow'));
        }
    }
  });
}

export function primeTest($section: Step) {
  const $input = $section.$('input') as InputView;
  $input.onKey('Enter', () => $input.blur());

  $input.on('blur', () => {
    const v = +$input.value;
    if (!v) return $section.model.result = '';

    if (v > Number.MAX_SAFE_INTEGER) {
      $section.model.result = getText($section, 'too-large');
      return;
    }
    $section.model.result = '<span class="loading"></span>';
    $section.score('calculator');

    thread('/content/divisibility/worker.js', ['isPrime', v])
        .then(result => $section.model.result =
            getText($section, result ? 'is-prime' : 'not-prime'))
        .catch(() => $section.model.result =
            getText($section, 'no-solution'));
  });
}

export function primeGenerator($section: Step) {
  $section.$('.btn')!.on('click', () => {
    const d = +$section.model.d;
    if (!d) return $section.model.result = '';

    $section.model.result = '<span class="loading"></span>';
    $section.score('calculator');

    thread('/content/divisibility/worker.js', ['getPrime', d], 10000)
        .then((result) => $section.model.result = numberFormat(result))
        .catch(() => $section.model.result = `Couldn‘t find a prime :(`);
  });
}

export function ulam($section: Step) {
  const $cells = $section.$$('.number-cell');
  sortBy($cells, ($c) => +$c.text);

  $cells.forEach($c => $c.hide());
  $cells.forEach($c => setTimeout(() => $c.enter('pop'), (+$c.text) * 80));

  setTimeout(() => {
    let delay = 1;
    $cells.forEach($c => {
      if (!isPrime(+$c.text)) return;
      setTimeout(() => $c.addClass('red'), delay * 80);
      delay += 1;
    });
  }, 3000);
}

export function race($section: Step) {
  const $button = $section.$('.lap-button')!;
  const $buttonText = $button.$('text')!;
  const $runners = $section.$$('circle') as SVGView[];
  const $paths = $section.$$('.runner-path') as SVGView[];
  const $lapTimes = $section.$$('.lap-times').map($l => $l.children);

  const speed = [4, 6];
  const duration = 12;
  let running = false;

  $button.on('click', () => {
    if (running) return;
    running = true;
    $section.score('race');

    $lapTimes.forEach($g => $g.forEach($l => $l.exit('pop', 200)));

    animate((p) => {
      for (const i of [0, 1]) {
        const offset = ((p * duration) % speed[i]) / speed[i];
        const point = $paths[i].getPointAt(offset);
        $runners[i].setCenter(point);
        $runners[i].setAttr('r', 12 * (1 + point.y / 234));
      }
      $buttonText.text = Math.floor(p * duration * 10) + ' s';
    }, duration * 1000).promise.then(() => {
      setTimeout(() => {
        running = false;
        $buttonText.text = 'START';
      }, 1000);
    });

    for (const i of [0, 1]) {
      for (let x = 0; x < duration / speed[i]; ++x) {
        setTimeout(() => {
          $lapTimes[i][x].enter('pop', 200);
        }, speed[i] * (x + 1) * 1000);
      }
    }
  });
}

export function gcd($section: Step) {
  const $tiles = $section.$('.tiles')!;
  const $result = $section.$('.result')!;

  $section.model.watch((state: any) => {
    const hint = isOneOf(state.x, 1, 2, 3, 6) ? 'gcd-yes' : 'gcd-no';
    $result.html = getText($section, hint);
    $tiles.removeChildren();

    for (let x = 0; x < 30; x += state.x) {
      for (let y = 0; y < 18; y += state.x) {
        $N('rect', {
          x: 40 + 10 * x,
          y: 40 + 10 * y,
          width: 10 * state.x,
          height: 10 * state.x,
          stroke: '#736357',
          'stroke-width': 2,
          fill: 'url(#tile)'
        }, $tiles);
      }
    }
  });
}

export function cicadas($section: Step) {
  $section.model.isPrime = isPrime;
  $section.model.lcm = lcm;

  const $highlight = $section.$('rect')!;
  const $rects = $section.$$('rect').slice(1);
  $rects.forEach($r => $r.hide());

  $section.model.watch((state: any) => {
    $rects[state.n - 4].show();
    $highlight.setAttr('x', (state.n - 4) * 26);

    if (state.n === 4) $section.score('bound-low');
    if (state.n === 20) $section.score('bound-high');
  });

  $section.onScore('bound-low bound-high', () => {
    $rects.forEach($r => $r.show());
  });
}

export function goldbach1($section: Step) {
  const $input = $section.$('input') as InputView;
  $input.onKey('Enter', () => $input.blur());

  $input.on('blur', () => {
    const v = +$input.value;
    if (!v) return $section.model.result = '';

    if (v % 2) return $section.model.result = getText($section, 'not-even');

    if (v > Number.MAX_SAFE_INTEGER) {
      return $section.model.result = getText($section, 'too-large');
    }

    $section.model.result = '<span class="loading"></span>';
    $section.score('calculator');

    thread('/content/divisibility/worker.js', ['goldbach', v], 10000)
        .then(result => $section.model.result =
            `${v} = ${result![0]} + ${result![1]}`)
        .catch(() => $section.model.result =
            getText($section, 'no-solution'));
  });
}

export function riemann($section: Step) {
  const dx = 23.5;
  const dy = 27;
  const y0 = 280;

  let y = y0;
  const points = [{x: 0, y}];
  for (let i = 1; i <= 1000; ++i) {
    if (isPrime(i)) {
      points.push({x: (i - 1) * dx, y});
      y -= dy;
      points.push({x: (i - 1) * dx, y});
    }
  }

  const $pi = $section.$('.pi') as SVGView;
  $pi.points = points;

  const $smallPrimes = $section.$('.small-primes');
  [3, 5, 7, 11, 13, 17, 19, 23, 29].forEach((p, i) => {
    $N('line', {
      x1: (p - 1) * dx, y1: y0, x2: (p - 1) * dx,
      y2: y0 - dy * (i + 1)
    }, $smallPrimes);
  });

  const $numbers = $section.$('.numbers');
  for (let i = 2; i < 30; ++i) {
    $N('text', {
      html: i, x: (i - 1) * dx, y: y0 + 18, class: isPrime(i) ? 'prime' : ''
    }, $numbers);
  }

  const $log = $section.$('.log') as SVGView;
  $log.points =
      list(3, 1000).map(i => ({x: (i - 1) * dx, y: y0 - dy * i / Math.log(i)}));

  const $svg = $section.$('svg')!;
  const $zoom = $section.$('.zoom-icon')!;

  $zoom.on('click', () => {
    $section.score('zoom');
    $svg.toggleClass('zoom');
  });
}
