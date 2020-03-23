// =============================================================================
// Fractals
// (c) Mathigon
// =============================================================================


import {Color, delay, isOneOf, list, repeat, tabulate2D} from '@mathigon/core';
import {Point, Polyline, Complex, Polygon, Circle, numberFormat, isBetween, nearlyEquals, Random} from '@mathigon/fermat';
import {$N, CanvasView, ElementView, pointerOver, SVGParentView, SVGView} from '@mathigon/boost';

import {Geopad, GeoPoint, Slider, Slideshow, Step} from '../shared/types';
import {BLUE} from '../shared/constants';

import './components/menger-sponge';
import './components/sierpinski-tetrahedra';
import {ChaosGame} from './components/chaos-game';
import {drawKoch, drawSierpinski} from './components/fractals';
import {JuliaCanvas} from './components/mandelbrot';


// -----------------------------------------------------------------------------
// Introduction

const colours = Color.gradient('#22ab24', '#0f82f2', 9).map(c => c.toString());

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

  const strokeWidth = 6 - i/2;
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
    $slider.moveTo(8, 500)
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

  const $coast = $svg.$('path') as SVGView;
  const length = $coast.strokeLength;

  const startPoint = $coast.getPointAtLength(0);
  const points = list(5, length, 5).map(i => $coast.getPointAtLength(i));

  $step.model.rulers = [100, 80, 60, 40, 20];
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
  })

}


// -----------------------------------------------------------------------------
// Sierpinski Triangle

export const sierpinski = triangle;

export function pascal($step: Step) {
  const $cells = $step.$$('.pascal-grid .c');
  let count = 0;
  let done = false;

  function revealAll() {
    $step.score('select');
    done = true;
    const $red = $cells.filter($c => !(+$c.text % 2) && !$c.hasClass('red'));
    for (const [i, $c] of $red.entries()) {
      delay(() => $c.addClass('red'), Math.sqrt(i) * 160);
    }
  }

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
  const triangle = Polygon.regular(3, 455).shift(400, 466);
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
        const p = edge.at(1 - n/rows).shift(k/rows * edge.length, 0);

        if (k === 0) {
          cells[n][k] = 1;
        } else if (2 * k > n) {
          cells[n][k] = cells[n][n-k];
        } else {
          cells[n][k] = (cells[n - 1][k] + cells[n - 1][k - 1]) % s.n;
        }

        const fill = (s.n <= 1 || cells[n][k]) ? '#ddd' : color;
        $canvas.draw(new Circle(p, 2.7), {fill});
      }
    }
  });
}


export function chaosGame($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  const triangle = Polygon.regular(3, 180).shift(180, 225).points
      .map(p => $geopad.drawPoint(p, {interactive: false, classes: 'red'}));

  $step.model.game = new ChaosGame(triangle, $geopad.$('canvas') as CanvasView);

  let point0: GeoPoint;

  $geopad.switchTool('point');
  $geopad.waitForPoint().then(p => {
    point0 = p;
    $step.score('point');
  });

  $step.onScore('point', () => {
    if (!point0) point0 = $geopad.drawPoint(new Point(300, 200), {});
    $step.model.game.lastPoint = point0.value;
    point0.$el.addClass('blue');
    $geopad.switchTool('move');
  });

}

export function chaosGame1($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  const initial = Polygon.regular(5, 200).shift(260, 200).points.map(p =>
      $geopad.drawPoint(p, {classes: 'red'}));

  $step.model.game = new ChaosGame(initial, $geopad.$('canvas') as CanvasView, 1/1.6180339887);
}





function rect(x: number, y: number, $parent: ElementView, classes = '') {
  return $N('rect', {width: 12, height: 12, x: 4 + x * 12, y: 4 + y * 12, class: classes}, $parent)
}


const rules = ['000', '001', '010', '100', '011', '101', '110', '111'];

export function cellular($step: Step) {
  const $grid = $step.$('.cellular-grid') as SVGParentView;

  const rows = 26;
  const cols = rows * 2 - 1;

  for (const $r of $step.$$('.cellular-rule')) {
    const rule = $r.data.rule!;
    $step.model[rule] = false;
    for (const k of [0, 1, 2]) rect(k, 0, $r, rule[k] === '1' ? 'fill' : '');
    const $value =  rect(1, 1, $r, 'red');
    $step.model.watch(() => $value.setClass('fill', $step.model[rule]));
    $r.on('click', () => $step.model[rule] = !$step.model[rule]);
  }

  const $cells = tabulate2D((i, j) => rect(j, i, $grid), rows, cols);
  const cells = tabulate2D(() => false, rows, cols);

  const type = (i: number, j: number) =>
      (j < 0 || j >= cols) ? '0' : cells[i][j] ? '1' : '0';

  $step.model.watch((s: any) => {
    const choice = rules.map(r => s[r] ? '1' : '0').join('');
    if (isOneOf(choice, '01011000', '01110000')) $step.score('sierpinski');

    for (let i = 1; i < rows; ++i) {
      for (let j = 0; j < cols; ++j) {
        const rule = type(i - 1, j - 1) + type(i - 1, j) + type(i - 1, j + 1);
        cells[i][j] = $step.model[rule];
        $cells[i][j].setClass('fill', cells[i][j]);
      }
    }
  });

  cells[0][rows - 1] = true;
  $cells[0][rows - 1].addClass('fill');
  $step.model['001'] = $step.model['010'] = $step.model['011'] = true;

  const $highlight = $N('path', {d: 'M-15,-15l0,18l12,0l0,12l18,0l0,-12l12,0l0,-18Z',
    class: 'highlight'}, $grid);
  let highlightPosition = new Point(0, 0);

  pointerOver($grid, {
    enter: () => $highlight.show(),
    move: (p: Point) => {
      p = p.shift(-4, -4).scale(1/12).floor();
      // if (p.equals(highlightPosition)) return;  // Point hasn't changed.
      highlightPosition = p;
      $highlight.toggle(p.x > 0 && p.y > 0 && p.x < cols - 1 && p.y < rows);
      $highlight.setTransform(p.scale(12).shift(4, 4));
    },
    exit: () => $highlight.hide()
  });
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

    while(x < 0 || (!nearlyEquals(x, 1) && isBetween(x, 0.03, 4.5))) {
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

export function julia($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvases = $geopad.$$('canvas') as CanvasView[];

  $step.model.iterate = iterate;
  $step.model.spiral = spiral;

  $step.model.complex = (p: Point) => new Complex(p.x, p.y).toString();

  const origin = $geopad.toViewportCoords(new Point(0, 0)).scale(2);
  $canvases[0].draw(new Circle(origin, $geopad.plotScale * 2), {fill: BLUE});

  $canvases[1].fill('#fff');
  $step.model.watch((s: any) => {
    const c = $geopad.toViewportCoords(s.a0).scale(2);
    $canvases[1].clearCircle(c, 25);
  });

  $step.model.watch((s: any) => {
    if (Point.distance(s.a0, new Point(0, 1)) <  0.3) $step.score('wipe-a');
    if (Point.distance(s.a0, new Point(0, -1)) <  0.3) $step.score('wipe-b');
    if (Point.distance(s.a0, new Point(1, 0)) <  0.3) $step.score('wipe-c');
    if (Point.distance(s.a0, new Point(-1, 0)) <  0.3) $step.score('wipe-d');
  });
}

export function julia3($step: Step) {
  const $slideshow = $step.$('x-slideshow') as Slideshow;
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $step.model.spiral = spiral;

  $step.model.animate = (x: number, y: number) => {
    $geopad.animatePoint('c', new Point(x, y), 2000);
  };

  $slideshow.on('next back', (n: number) => {
    if (n === 1) $step.model.animate(-0.6, -0.2);
    if (n === 2) $step.model.animate(-0.54, 0.5);
  });

  const [pB, vB] = [$geopad.plotBounds, $geopad.viewportBounds];
  const resolution = pB.dx / vB.dx; // / 2;
  const juliaCanvas = new JuliaCanvas(pB, vB, $canvas, resolution);

  $step.model.watch(async (m: any) => juliaCanvas.draw(m.c));
}

export function mandelPaint($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $canvas.fill('#fff');
  $step.model.watch((s: any) => {
    const c = $geopad.toViewportCoords(s.c).scale(2);
    $canvas.clearCircle(c, 25);
  });

  $step.model.complex = (p: Point) => new Complex(p.x, p.y).toString(2);
  $step.model.spiral = spiral;

  const origin = new Point(0, 0);
  $step.model.setComputed('x1', ({c}: any) => iterate(origin, c));
  $step.model.setComputed('x2', ({x1, c}: any) => iterate(x1, c));
  $step.model.setComputed('x3', ({x2, c}: any) => iterate(x2, c));
  $step.model.setComputed('x4', ({x3, c}: any) => iterate(x3, c));
  $step.model.setComputed('x5', ({x4, c}: any) => iterate(x4, c));

  $step.model.watch((s: any) => {
    if (Point.distance(s.c, new Point(0, 0.6)) <  0.2) $step.score('wipe-a');
    if (Point.distance(s.c, new Point(0, -0.6)) <  0.2) $step.score('wipe-b');
    if (Point.distance(s.c, new Point(-1, 0)) <  0.3) $step.score('wipe-c');
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
      if (isVisible) $img.css('transform', `scale(${Math.pow(2, scale)})`)
    }
  });
}
