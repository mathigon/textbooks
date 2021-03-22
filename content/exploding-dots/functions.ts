// =============================================================================
// Exploding Dots
// (c) Mathigon
// =============================================================================


import {Color, wait} from '@mathigon/core';
import {numberFormat, Random} from '@mathigon/fermat';
import {Point, Rectangle} from '@mathigon/euclid';
import {$N, Observable} from '@mathigon/boost';
import {Slideshow, Step} from '@mathigon/studio';
import {DotMachine} from './components/dot-machine';

import './components/dot-machine';


export function race($step: Step) {
  const posn = [0, 54, 76, 85, 88, 90];
  const $img = $step.$$('img');
  const $g = $step.$$('g');
  let hasShownGesture = false;

  const $slideshow = $step.$('x-slideshow') as Slideshow;
  $slideshow.on('next back', (x: number) => {
    $img[0].css('left', posn[x] + '%');
    $img[1].css('left', posn[x + 1] + '%');

    if (!hasShownGesture && !$step.scores.has('blank-0')) {
      setTimeout(() => {
        $N('x-gesture', {target: 'x-blank-mc', start: true}, $step);
      }, 1000);
      hasShownGesture = true;
    }
  });

  $step.onScore('blank-0', () => $g[0].enter('fade'));
  $step.onScore('blank-1', () => $g[1].enter('fade'));
  $step.onScore('slide-2', () => $g[2].enter('fade'));
  $step.onScore('slide-3', () => $g[3].enter('fade'));
}

export function choice($step: Step) {
  const $buttons = $step.$$('.btn');
  for (const $b of $buttons) {
    $b.on('click', () => {
      $step.score('choice');
      $step.$('.btn-row')!.addClass('done');
      $b.addClass('selected');
    });
  }
}

export function numberline($step: Step) {
  const $limit = $step.$('span.hidden')!;

  $step.model.nines = (n: number) => '0.' + '9'.repeat(n);
  $step.model.watch((state: any) => {
    if (state.n === 2) $step.score('n2');
    if (state.n === 3) $step.score('n3');
    if (state.n === 4) $step.score('n4');
    $limit.setClass('hidden', state.n <= 4);
  });
}

export function convergence($step: Step) {
  const log2 = Math.log10(2);
  $step.model.assign({
    pow: (n: number) => numberFormat(Math.pow(2, n)),
    nines: (n: number) => '0.' + '9'.repeat(Math.ceil(n * log2))
  });
}

export function dots($step: Step) {
  const $machine = $step.$('x-dot-machine') as DotMachine;
  const $btn = $step.$('.btn')!;

  let dStep = 0;
  let xStep = 0;

  $machine.on('add', ({i, cell, point}) => {
    if (i !== xStep + 1) {
      return $step.addHint('incorrectCell', {class: 'incorrect'});
    }

    cell.addDotAntidot(point);
    dStep = xStep + 1;
    $step.score('d' + dStep);
  });

  $btn.on('click', async function() {
    if (dStep <= xStep) {
      return $step.addHint('addPairFirst', {class: 'incorrect'});
    }

    await $machine.cells[dStep].explode();
    await wait(400);
    await $machine.cells[dStep - 1].annihilate();
    xStep = dStep;
    $step.score('x' + xStep);
  });
}

// -----------------------------------------------------------------------------

export function dots1($step: Step) {
  const $machine = $step.$('x-dot-machine') as DotMachine;
  let added = false;

  $machine.on('add', ({i, cell, point}) => {
    if (added) return;
    if (i !== 4) return $step.addHint('incorrectCell', {class: 'incorrect'});
    added = true;

    cell.addDot(point, {audio: true});
    wait(1000).then(() => cell.explode(true))
        .then(() => $step.score('dot'));
  });
}

function svgs($step: Step) {
  let t = 1200;
  for (const $g of $step.$$('svg g')) {
    $g.hide();
    $g.enter('fade', 400, t);
    t += 800;
  }
}

export const warp1 = svgs;
export const warp2 = svgs;

export function dots2($step: Step) {
  const $machine = $step.$('x-dot-machine') as DotMachine;
  let added = 0;

  $machine.on('add', ({i, cell, point}) => {
    if (added >= 2) return;
    if (i !== 4) return $step.addHint('incorrectCell', {class: 'incorrect'});
    added += 1;

    cell.addDot(point, {audio: true});

    if (added === 2) {
      wait(1000).then(() => cell.explode(true))
          .then(() => $step.score('dots'));
    }
  });
}

function addDots($machine: DotMachine, className: string) {
  for (let i = 0; i <= 4; ++i) {
    for (let x = 0; x < 6; ++x) {
      const $dot = $machine.cells[i].addDot();
      $dot.addClass(className);
    }
  }

  const $dot = $machine.cells[4].addDot(undefined, {audio: true});
  $dot.addClass(className);
}

export function dots3($step: Step) {
  const $machine = $step.$('x-dot-machine') as DotMachine;
  const $button = $step.$('.btn')!;

  $button.one('click', () => {
    addDots($machine, 'dark');
    setTimeout(() => addDots($machine, 'light'), 1000);

    setTimeout(() => $machine.explode().then(() => $step.score('dots')), 2000);
  });
}

// -----------------------------------------------------------------------------

function factors(n: number) {
  const start = Math.floor(Math.sqrt(n));
  for (let x = start; x >= 1; --x) {
    if (n % x === 0) {
      return [x, n / x];
    }
  }
  return [1, n];
}

export function square($step: Step) {
  const $svg = $step.$('svg.square')!;
  const width = 320;

  $step.model.watch((state: Observable) => {
    $svg.removeChildren();
    const f = factors(state.x);
    const colours = Random.shuffle(Color.rainbow(2 * state.x));
    let c = 0;

    for (let i = 0; i < f[0]; ++i) {
      for (let j = 0; j < f[1]; ++j) {
        const origin = new Point(i * width / f[0], j * width / f[1]);
        const r = new Rectangle(origin, width / f[0],
            width / f[1]).polygon.points;

        const odd = (i + j) % 2;

        $N('polygon', {points: `${r[0].x} ${r[0].y},${r[1].x} ${r[1].y},${r[odd ? 2 : 3].x} ${r[odd ? 2 : 3].y}`, fill: colours[c]}, $svg);
        $N('polygon', {points: `${r[odd ? 0 : 1].x} ${r[odd ? 0 : 1].y},${r[2].x} ${r[2].y},${r[3].x} ${r[3].y}`, fill: colours[c + 1]}, $svg);
        c += 2;
      }
    }
  });
}
