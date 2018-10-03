// =============================================================================
// Exploding Dots
// (c) Mathigon
// =============================================================================


import { repeat } from '@mathigon/core';
import { Rectangle, Point, random, numberFormat } from '@mathigon/fermat';
import { $N, Colour } from '@mathigon/boost';
import './components/dot-machine';


export function race($step) {
  const posn = [0, 54, 76, 85, 88, 90];
  const $img = $step.$$('img');
  const $g = $step.$$('g');
  let hasShownGesture = false;

  $step.$slides.on('next back', (x) => {
    $img[0].css('left', posn[x] + '%');
    $img[1].css('left', posn[x+1] + '%');

    if (!hasShownGesture && !$step.scores.has('blank-0')) {
      setTimeout(() => {
        $N('x-gesture', {target: 'x-blank-input', start: true}, $step);
      }, 1000);
      hasShownGesture = true;
    }
  });

  $step.onScore('blank-0', () => $g[0].enter('fade'));
  $step.onScore('blank-1', () => $g[1].enter('fade'));
  $step.onScore('slide-2', () => $g[2].enter('fade'));
  $step.onScore('slide-3', () => $g[3].enter('fade'));
}

export function choice($step) {
  const $buttons = $step.$$('button');
  for (let $b of $buttons) {
    $b.on('click', () => {
      $step.score('choice');
      $step.$('.btn-row').addClass('done');
      $b.addClass('selected');
    });
  }
}

export function numberline($step) {
  const $limit = $step.$('span.hidden');

  console.log(repeat);

  $step.model.set('nines', n => '0.' + repeat('9', n));
  $step.model.watch(state => {
    if (state.n === 2) $step.score('n2');
    if (state.n === 3) $step.score('n3');
    if (state.n === 4) $step.score('n4');
    $limit.setClass('hidden', state.n <= 4);
  });
}

export function convergence($step) {
  const log2 = Math.log10(2);
  $step.model.assign({
    pow: n => numberFormat(Math.pow(2, n)),
    nines: n => '0.' + repeat('9', Math.ceil(n * log2))
  });
}

export function dots($step) {
  const $machine = $step.$('x-dot-machine');
  const $btn = $step.$('button');

  let dStep = 0;
  $machine.on('add', ({i, stop}) => {
    if (i !== xStep + 1) {
      stop();
      $step.addHint('This is not the correct cell…', {className: 'incorrect'});
      return;
    }

    dStep = xStep + 1;
    $step.score('d' + dStep);
  });

  let xStep = 0;
  $btn.on('click', async function() {
    if (dStep <= xStep) {
      $step.addHint('Remember to add the dot/anti-dot pairs before exploding.',
          {className: 'incorrect'});
      return;
    }

    await $machine.cells[dStep].explode(10);
    await $machine.cells[dStep - 1].annihilate();
    xStep = dStep;
    $step.score('x' + xStep);
  });
}

// -----------------------------------------------------------------------------

function factors(n) {
  const start = Math.floor(Math.sqrt(n));
  for (let x = start; x >= 1; --x) {
    if (n % x === 0) {
      return [x, n/x];
    }
  }
}

export function square($step) {
  const $svg = $step.$('svg.square');
  const width = 320;

  $step.model.watch((state) => {
    $svg.removeChildren();
     const f = factors(state.x);
     const colours = random.shuffle(Colour.rainbow(2*state.x));
     let c = 0;

     for (let i=0; i<f[0]; ++i) {
       for (let j=0; j<f[1]; ++j) {
         const origin = new Point(i * width / f[0], j * width / f[1]);
         const r = new Rectangle(origin, width / f[0], width / f[1]).polygon.points;

         let odd = (i + j) % 2;

         $N('polygon', {points: `${r[0].x} ${r[0].y},${r[1].x} ${r[1].y},${r[odd ? 2 : 3].x} ${r[odd ? 2 : 3].y}`, fill: colours[c]}, $svg);
         $N('polygon', {points: `${r[odd ? 0 : 1].x} ${r[odd ? 0 : 1].y},${r[2].x} ${r[2].y},${r[3].x} ${r[3].y}`, fill: colours[c + 1]}, $svg);
         c += 2;
       }
     }
  });
}
