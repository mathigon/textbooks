// =============================================================================
// Fractals
// (c) Mathigon
// =============================================================================


import {Color, delay, list, Obj, repeat, wait} from '@mathigon/core';
import {Complex, isBetween, nearlyEquals, numberFormat} from '@mathigon/fermat';
import {Circle, Point, Polygon, Polyline} from '@mathigon/euclid';
import {$html, $N, CanvasView, SVGView} from '@mathigon/boost';
import {Select, Slider, Slideshow, Step} from '@mathigon/studio';

import {Geopad, GeoPoint} from '../shared/types';
import {BLUE} from '../shared/constants';

import {CellularAutomaton} from './components/automata';
import {ChaosGame} from './components/chaos-game';
import {COASTLINE} from './components/coastline';
import {drawKoch, drawSierpinski} from './components/fractals';
import {converges, JuliaCanvas} from './components/mandelbrot';

import './components/menger-sponge';
import './components/sierpinski-tetrahedra';
import './components/automata';


// -----------------------------------------------------------------------------
// Introduction

const colours = Color.gradient(['#22ab24', '#0f82f2'], 9).map(c => c.toString());

/** Returns the image of x, if a-b is mapped onto b-c. */
function transform(a: Point, b: Point, c: Point, x: Point) {
  const angle = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(b.y - a.y, b.x - a.x);
  const scale = Point.distance(c, b) / Point.distance(b, a);

  const x1 = x.subtract(b).scale(scale).rotate(angle);
  return c.add(x1);
}

function drawIteration($canvas: CanvasView, a: Point, b: Point, c1: Point, c2: Point, max: number, i = 0) {
  const d1 = transform(a, b, c1, c1);
  const d2 = transform(a, b, c1, c2);
  const d3 = transform(a, b, c2, c1);
  const d4 = transform(a, b, c2, c2);

  const strokeWidth = 6 - i / 2;
  const stroke = colours[max - i];

  $canvas.draw(new Polyline(d1, c1, d2), {strokeWidth, lineCap: 'round', lineJoin: 'round', stroke});
  $canvas.draw(new Polyline(d3, c2, d4), {strokeWidth, lineCap: 'round', lineJoin: 'round', stroke});

  if (i < max) {
    drawIteration($canvas, b, c1, d1, d2, max, i + 1);
    drawIteration($canvas, b, c2, d3, d4, max, i + 1);
  }
}

export function fern($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $slider = $step.$('x-slider') as Slider;

  $step.model.watch(({steps, a, b, c1, c2}: any) => {
    $canvas.clear();
    drawIteration($canvas, a.scale(2), b.scale(2), c1.scale(2), c2.scale(2), steps);
  });

  $step.model.set = (a: number, b: number, c: number, d: number) => {
    $geopad.animatePoint('c1', new Point(a, b), 500);
    $geopad.animatePoint('c2', new Point(c, d), 500);
    $slider.moveTo(8, 500);
  };
}

export function triangle($step: Step) {
  $step.model.sierpinski = drawSierpinski;
  $step.model.triangle = Polygon.regular(3, 170).shift(150, 175);
  const [a, b, c] = $step.model.triangle.points;

  $step.model.t1 = new Polygon(a, Point.average(a, b), Point.average(a, c));
  $step.model.t2 = new Polygon(b, Point.average(b, a), Point.average(b, c));
  $step.model.t3 = new Polygon(c, Point.average(c, a), Point.average(c, b));

  const $slider = $step.$('x-slider') as Slider;
  $step.on('target-focus', () => $slider.moveTo(8));
}

export function koch($step: Step) {
  const triangle = Polygon.regular(3, 150).shift(150, 150);
  $step.model.koch = drawKoch.bind(undefined, triangle);

  const $slider = $step.$('x-slider') as Slider;
  $step.on('target-focus', () => $slider.moveTo(5));
}

export function coastlines1($step: Step) {
  const $svg = $step.$('.coastline svg')!;
  const $lines = $N('g', {}, $svg);

  const points = COASTLINE;
  const startPoint = COASTLINE.shift()!;

  $step.model.rulers = [100, 90, 80, 70, 60, 50, 40, 30, 20];
  const scale = 0.8;

  function makeRuler(p: Point, q: Point) {
    const $outline = $N('line', {class: 'border'}, $lines) as SVGView;
    const $line = $N('line', {}, $lines) as SVGView;
    $outline.setLine(p, q);
    $line.setLine(p, q);
  }

  $step.model.watch((s: any) => {
    const rulerLength = $step.model.rulers[s.index] * scale;

    $lines.removeChildren();
    let point = startPoint;
    let count = 0;

    for (const p of points) {
      if (Point.distance(point, p) >= rulerLength) {
        makeRuler(point, p);
        count += 1;
        point = p;
      }
    }

    if (Point.distance(point, startPoint) >= rulerLength / 2) {
      makeRuler(point, startPoint);
      count += 1;
    }

    $step.model.count = count;
  });
}

export async function coastlineGrid($step: Step) {
  const $svg = $step.$('svg')!;
  const $grid = $svg.$$('.grid');
  const $cells = $svg.$$('.cells');
  const $coast = $svg.$$('.coast');

  const coastTransform = new Point(-186, -85);

  $step.model.watch(({i}: any) => {
    $grid[1].css('opacity', i < 8 ? 0 : 0.2);
    $cells[1].css('opacity', i < 9.9 ? 0 : 0.7);

    $coast[1].setTransform(coastTransform.scale(1 - i / 10), 0, (1 + i / 10) / 2);
    $coast[1].css('opacity', Math.min(i, 1));
  });
}


// -----------------------------------------------------------------------------
// Sierpinski Triangle

export const sierpinski = triangle;

export function pascal($step: Step) {
  const $grid = $step.$('.pascal-grid')!;
  const $cells = $grid.$$('.c');
  let count = 0;
  let done = false;

  function revealAll() {
    $step.score('select');
    $grid.addClass('done');
    done = true;
    const $red = $cells.filter($c => !(+$c.text % 2) && !$c.hasClass('red'));
    for (const [i, $c] of $red.entries()) {
      delay(() => $c.addClass('red'), Math.sqrt(i) * 160);
    }
  }

  if ($step.scores.has('select')) revealAll();

  for (const $c of $cells) {
    $c.one('click', () => {
      if (done || +$c.text % 2) return;
      count += 1;
      $c.addClass('red');
      if (count >= 8) revealAll();
    });
  }
}

export function pascalLarge($step: Step) {
  const $canvas = $step.$('canvas.pascal') as CanvasView;
  const triangle = Polygon.regular(3, 546).shift(480, 560);
  const edge = triangle.edges[1];
  const rows = 128;

  $step.model.gradient = Color.rainbow(39);

  // We can't just use binomial(), because it caouses number overflow in JS.
  const cells: number[][] = [];
  for (let i = 0; i < rows; ++i) {
    cells.push(repeat(0, i + 1));
  }

  $step.model.watch((s: any) => {
    const color = $step.model.gradient[s.n - 2].toString();
    $canvas.clear();

    for (let n = 0; n < rows; ++n) {
      for (let k = 0; k <= n; ++k) {
        const p = edge.at(1 - n / rows).shift(k / rows * edge.length, 0);

        if (k === 0) {
          cells[n][k] = 1;
        } else if (2 * k > n) {
          cells[n][k] = cells[n][n - k];
        } else {
          cells[n][k] = (cells[n - 1][k] + cells[n - 1][k - 1]) % s.n;
        }

        const fill = (s.n <= 1 || cells[n][k]) ? '#ddd' : color;
        $canvas.draw(new Circle(p, 3.2), {fill});
      }
    }
  });
}

export async function chaosGame($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  const points = Array.from($geopad.points);
  $step.model.tri = Polygon.regular(3, 180).shift(180, 225).points;

  const game = new ChaosGame($canvas, points);
  game.setup();

  let startPoint: GeoPoint;

  if ($step.scores.has('point')) {
    startPoint = $geopad.drawPoint('point(150, 200)', {classes: 'blue'});
  } else {
    $geopad.switchTool('point');
    startPoint = await $geopad.waitForPoint();
    $geopad.switchTool('move');
    startPoint.$el.addClass('blue');
    $step.score('point');
  }

  await $step.onScore('point');
  await wait(2000);
  const m1 = $geopad.drawPath(`segment(${startPoint.name},x0)`,
      {name: 'm1', animated: 1000, classes: 'thin'});
  await wait(1000);
  const p1 = $geopad.drawPoint(`m1.midpoint`,
      {classes: 'red chaos-point', interactive: false, name: 'p1', target: 'p1'});

  await $step.onScore('next-0');
  await wait(2000);
  m1.$el.exit('fade');
  const m2 = $geopad.drawPath(`segment(p1,x1)`,
      {name: 'm2', animated: 1000, classes: 'thin'});
  await wait(1000);
  const p2 = $geopad.drawPoint(`m2.midpoint`,
      {classes: 'green chaos-point', interactive: false, target: 'p2'});

  await $step.onScore('next-1');
  for (const p of [p1, p2]) {
    p.$el.css('opacity', '');
    p.$el.addClass('transparent');
  }
  for (const p of [m2, startPoint]) p.$el.exit();
  startPoint.lock();

  game.lastPoint = startPoint.value!;
  game.drawPointTo(0, 6);
  game.drawPointTo(1, 6);

  $step.model.play = () => {
    game.play(1000);
    $step.score('play');
  };
}

export function fractalBuilder($step: Step) {
  const VERTICES = ['x0', 'x1', 'x2', 'x3', 'x4'];
  const RATIOS = [0.5, 2 / 3, 1 / 1.6180339887];
  const INITIAL: Obj<Point[]> = {
    3: Polygon.regular(3, 235).shift(380, 280).points,
    4: Polygon.regular(4, 240).shift(380, 220).points,
    5: Polygon.regular(5, 200).shift(380, 240).points
  };

  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $select = $step.$('x-select') as Select;

  const game = new ChaosGame($canvas, []);
  const points = VERTICES.map(i => $geopad.shapes.get(i)) as GeoPoint[];

  $select.on('change', () => $step.score('shape'));
  $geopad.on('move', () => game.pause());

  $step.model.watch((s: any) => {
    for (const [i, v] of VERTICES.entries()) $step.model[v] = INITIAL[s.shape][i];
    game.pause();
    game.points = points.slice(0, +s.shape);
  });

  $step.model.watch((s: any) => {
    game.ratio = RATIOS[+s.ratio];
    game.rule = s.rule;
    game.pause();
  });

  $step.model.assign({
    game,
    download: () => $canvas.downloadImage('fractal.png'),
    score: (s: string) => $step.score(s),
    play: (n: number) => {
      $step.score('play');
      game.play(n);
    },
    carpet: () => {
      $step.model.assign({shape: '4', ratio: '1', rule: 'midpoints'});
      game.reset();
      game.play(10000);
    },
    snowflake: () => {
      $step.model.assign({shape: '5', ratio: '2', rule: 'none'});
      game.reset();
      game.play(10000);
    }
  });
}

export function cellular($step: Step) {
  const correct = ['01110000', '0101_0__', '01110101', '01111110'];
  const match = (a: string, b: string) =>
    a.split('').every((c, i) => c === b[i] || c === '_');

  const automaton = $step.$('x-automaton') as CellularAutomaton;

  automaton.on('rule-change', (rules: string) => {
    if (correct.some(c => match(c, rules))) $step.score('sierpinski');
  });

  $step.model.setRule = (str: string) => automaton.setRule(str);
}


// -----------------------------------------------------------------------------
// Mandelbrot Set

export function iteration($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  $step.model.watch((s: any) => {
    if (s.x0.x < -1) $step.score('move-1');
    if (s.x0.x > 1) $step.score('move-2');
  });

  $step.model.drawArc = (x0: Point) => {
    let p = $geopad.toViewportCoords(x0);
    let x = x0.x;
    let path = `M${p.x} ${p.y}`;

    while (x < 0 || (!nearlyEquals(x, 1) && isBetween(x, 0.03, 4.5))) {
      const x1 = x * x;
      const p1 = $geopad.toViewportCoords(new Point(x1, 0));
      const d = Math.min(Point.distance(p, p1), 100);
      path += `C${p.x} ${p.y - d},${p1.x} ${p1.y - d},${p1.x} ${p1.y}`;
      [x, p] = [x1, p1];
    }
    return path;
  };
}

function iterate(p: Point, c?: Point) {
  return new Point(p.x * p.x - p.y * p.y + (c ? c.x : 0),
      2 * p.x * p.y + (c ? c.y : 0));
}

function spiral(p: Point, c?: Point) {
  const points = [p];
  for (let i = 0; i < 20; ++i) {
    if (Math.abs(p.x) > 3 && Math.abs(p.y) > 2) break;
    p = iterate(p, c);
    points.push(p);
  }
  return new Polyline(...points);
}

function complex(p: Point) {
  return new Complex(p.x, p.y).toString();
}

export function julia($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvases = $geopad.$$('canvas') as CanvasView[];

  $step.model.assign({iterate, spiral, complex});
  $step.model.setComputed('converges', (state: any) => state.x0.length <= 1);

  const origin = $geopad.toViewportCoords(new Point(0, 0)).scale(2);
  $canvases[0].draw(new Circle(origin, $geopad.plotScale * 2), {fill: BLUE});

  $canvases[1].fill($html.hasClass('dark-mode') ? '#22212e' : '#fff');
  $step.model.watch((s: any) => {
    const c = $geopad.toViewportCoords(s.x0).scale(2);
    $canvases[1].clearCircle(c, 25);
  });

  $step.model.watch((s: any) => {
    if (Point.distance(s.x0, new Point(0, 1)) < 0.3) $step.score('wipe-a');
    if (Point.distance(s.x0, new Point(0, -1)) < 0.3) $step.score('wipe-b');
    if (Point.distance(s.x0, new Point(1, 0)) < 0.3) $step.score('wipe-c');
    if (Point.distance(s.x0, new Point(-1, 0)) < 0.3) $step.score('wipe-d');
  });
}

export function julia2($step: Step) {
  const $slideshow = $step.$('x-slideshow') as Slideshow;
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $step.model.assign({iterate, spiral, complex});
  $step.model.setComputed('converges', (s: any) => converges(s.x0, s.c));

  $step.model.animate = (x: number, y: number) => {
    $geopad.animatePoint('c', new Point(x, y), 1600);
  };

  $slideshow.on('next back', (n: number) => {
    if (n === 0) $step.model.animate(0, 0);
    if (n === 1) $step.model.animate(-0.6, -0.2);
    if (n === 2) $step.model.animate(-0.54, 0.5);
    if (n === 3) {
      $step.model.animate(-0.08, 0.72);
      $geopad.animatePoint('x0', new Point(0.12, -0.07), 1600);
    }
  });

  const [pB, vB] = [$geopad.plotBounds, $geopad.viewportBounds];
  const resolution = pB.dx / vB.dx; // / 2;
  const juliaCanvas = new JuliaCanvas(pB, vB, $canvas, resolution);

  $step.model.watch(async (m: any) => juliaCanvas.draw(m.c));
}

export function mandelPaint($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $step.model.assign({iterate, spiral, complex});
  $step.model.setComputed('converges', (s: any) => converges(s.x0, s.c));

  $canvas.fill($html.hasClass('dark-mode') ? '#22212e' : '#fff');
  $step.model.watch((s: any) => {
    const c = $geopad.toViewportCoords(s.c).scale(2);
    $canvas.clearCircle(c, 25);
  });

  $step.model.watch((s: any) => {
    if (Point.distance(s.c, new Point(0, 0.6)) < 0.2) $step.score('wipe-a');
    if (Point.distance(s.c, new Point(0, -0.6)) < 0.2) $step.score('wipe-b');
    if (Point.distance(s.c, new Point(-1, 0)) < 0.3) $step.score('wipe-c');
  });
}

export function mandelZoom($step: Step) {
  const $images = $step.$$('.mandel-frame img');
  const $slider = $step.$('x-slider') as Slider;
  const speed = 2 * ($images.length - 1) / $slider.steps;

  $step.model.pow = (s: number) => numberFormat(Math.round(4 ** s));

  $step.model.watch((state: any) => {
    for (const [i, $img] of $images.entries()) {
      const scale = state.scale * speed - 2 * i;
      const isVisible = scale > -3 && scale < 2;
      $img.toggle(isVisible);
      if (isVisible) $img.css('transform', `scale(${Math.pow(2, scale)})`);
    }
  });
}

export function mandelOrbits($step: Step) {
  $step.model.spiral = spiral;

  const points = list(0, 1, 0.02).map(i => {
    const t = 2 * Math.PI * i;
    const x = 2 * Math.cos(t) - Math.cos(2 * t);
    const y = 2 * Math.sin(t) - Math.sin(2 * t);
    return new Point(x / 4, y / 4);
  });
  $step.model.cardioid = new Polygon(...points);
}
