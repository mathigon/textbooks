// =============================================================================
// Fractals
// (c) Mathigon
// =============================================================================


import {Color, list, tabulate2D} from '@mathigon/core';
import {Point, Polyline, Complex, Polygon, Circle, numberFormat} from '@mathigon/fermat';
import {$N, CanvasView, SVGView} from '@mathigon/boost';

import {Geopad, Slider, Slideshow, Step} from '../shared/types';
import {BLUE} from '../shared/constants';

import './components/menger-sponge';
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

function drawSierpinski([a, b, c]: Point[], i: number): string {
  if (i <= 0) return '';

  const ab = Point.average(a, b);
  const ac = Point.average(a, c);
  const bc = Point.average(b, c);

  const t1 = drawSierpinski([a, ab, ac], i - 1);
  const t2 = drawSierpinski([b, ab, bc], i - 1);
  const t3 = drawSierpinski([c, ac, bc], i - 1);

  return `M${ab.x},${ab.y}L${ac.x},${ac.y}L${bc.x},${bc.y}Z ${t1}${t2}${t3}`
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

function drawKoch(last: Polygon, i: number): Polygon {
  if (i <= 0) return last;

  const points: Point[] = [];
  for (const e of last.edges) {
    const a = Point.interpolate(e.p1, e.p2, 1/3);
    const c = Point.interpolate(e.p1, e.p2, 2/3);
    const b = c.rotate(-Math.PI/3, a);
    points.push(e.p1, a, b, c)
  }

  return drawKoch(new Polygon(...points), i - 1);
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

export function cellular($step: Step) {
  const $grid = $step.$('.cellular-grid')!;

  const $cells = tabulate2D((i: number, j: number) => $N('rect', {
    width: 15, height: 15, x: 5 + j * 15, y: 5 + i * 15
  }, $grid), 20, 39);

  /* const $highlight = $N('path', {d: 'M0,0L55,0L55,25L40,25L40,40L15,40L15,25L0,25Z', fill: YELLOW}, $grid);

  $cells[0][19].addClass('on');

  const highlight = (x: number, y: number) => {
    $grid.append($highlight);
    $highlight.translate(x * 15, y * 15);
    $highlight.show();
    $grid.append($cells[x][y]);
    $grid.append($cells[x-1][y]);
    if (y > 0) $grid.append($cells[x-1][y-1]);
    if (y < 20) $grid.append($cells[x-1][y+1]);
  };

  for (const [y, $row] of $cells.entries()) {
    // if (!x) continue;
    for (const [x, $c] of $row.entries()) {
      hover($c, {enter: () => highlight(x, y), exit: () => $highlight.hide()});
    }
  } */
}


// -----------------------------------------------------------------------------
// Mandelbrot Set

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
}

export function mandelZoom($step: Step) {
  const $images = $step.$$('.mandel-frame img');
  const $slider = $step.$('x-slider') as Slider;
  const speed = 2 * ($images.length - 1) / $slider.steps;

  $step.model.pow = (s: number) => numberFormat(Math.round(4 ** (s/10)));

  $step.model.watch((state: any) => {
    for (const [i, $img] of $images.entries()) {
      const scale = state.scale * speed - 2 * i;
      const isVisible = scale > -3 && scale < 2;
      $img.toggle(isVisible);
      if (isVisible) $img.css('transform', `scale(${Math.pow(2, scale)})`)
    }
  });
}
