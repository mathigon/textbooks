// =============================================================================
// Fractals
// (c) Mathigon
// =============================================================================


import {Color, tabulate2D} from '@mathigon/core';
import {Point, Polyline, Complex, Polygon} from '@mathigon/fermat';
import {$N, CanvasView} from '@mathigon/boost';

import {Geopad, Slider, Step} from '../shared/types';
import {YELLOW} from '../shared/constants';

import './components/menger-sponge';
import {JuliaCanvas} from './components/mandelbrot';


// -----------------------------------------------------------------------------
// Introduction

const colours = Color.gradient('#22ab24', '#0f82f2', 10).map(c => c.toString());

/** Returns the image of x, if a-b is mapped onto b-c. */
function transform(a: Point, b: Point, c: Point, x: Point) {
  const angle = Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(b.y - a.y, b.x - a.x);
  const scale = Point.distance(c, b) / Point.distance(b, a);

  const x1 = x.subtract(b).scale(scale).rotate(angle);
  return c.add(x1);
}

function drawIteration($canvas: CanvasView, a: Point, b: Point, c1: Point, c2: Point, i: number) {
  const d1 = transform(a, b, c1, c1);
  const d2 = transform(a, b, c1, c2);
  const d3 = transform(a, b, c2, c1);
  const d4 = transform(a, b, c2, c2);

  $canvas.draw(new Polyline(d1, c1, d2), {strokeWidth: 3, lineCap: 'round', lineJoin: 'round', stroke: colours[i]});
  $canvas.draw(new Polyline(d3, c2, d4), {strokeWidth: 3, lineCap: 'round', lineJoin: 'round', stroke: colours[i]});

  if (i > 0) {
    drawIteration($canvas, b, c1, d1, d2, i - 1);
    drawIteration($canvas, b, c2, d3, d4, i - 1);
  }
}

export function fern($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;

  $step.model.watch(({steps, a, b, c1, c2}: any) => {
    $canvas.clear();
    drawIteration($canvas, a.scale(2), b.scale(2), c1.scale(2), c2.scale(2), steps);
  });
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
  $step.model.triangle = Polygon.regular(3, 170).shift(150, 175);
  $step.model.sierpinski = drawSierpinski;
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
}


// -----------------------------------------------------------------------------
// Sierpinski Triangle

export const sierpinski = triangle;

export function cellular($step: Step) {
  const $grid = $step.$('.cellular-grid')!;

  const $cells = tabulate2D((i: number, j: number) => $N('rect', {
    width: 15, height: 15, x: 5 + j * 15, y: 5 + i * 15
  }, $grid), 20, 39);

  const $highlight = $N('path', {d: 'M0,0L55,0L55,25L40,25L40,40L15,40L15,25L0,25Z', fill: YELLOW}, $grid);

  $cells[0][19].addClass('on');

  /* const highlight = (x: number, y: number) => {
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

export function julia($step: Step) {
  $step.model.spiral = (p: Point, c: Point) => {
    const points = [p];
    let x = p.x;
    let y = p.y;
    let i = 0;

    while (i < 20 && Math.abs(x) < 3 && Math.abs(y) < 2) {
      [x, y] = [x * x - y * y + c.x, 2 * x * y + c.y];
      points.push(new Point(x, y));
      i += 1;
    }

    return new Polyline(...points);
  };

  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const [pB, vB] = [$geopad.plotBounds, $geopad.viewportBounds];
  const resolution = pB.dx / vB.dx; // / 2;
  const juliaCanvas = new JuliaCanvas(pB, vB, $canvas, resolution);

  $step.model.watch(async (m: any) => juliaCanvas.draw(m.c));
}


export function mandelPaint($step: Step) {
  $step.model.complex = (p: Point) => new Complex(p.x, p.y).toString(2);

  const square = (p: Point) => new Point(p.x * p.x - p.y * p.y, 2 * p.x * p.y);

  $step.model.setComputed('x1', ({c}: any) => square(c).add(c));
  $step.model.setComputed('x2', ({x1, c}: any) => square(x1).add(c));
  $step.model.setComputed('x3', ({x2, c}: any) => square(x2).add(c));
  $step.model.setComputed('x4', ({x3, c}: any) => square(x3).add(c));
  $step.model.setComputed('x5', ({x4, c}: any) => square(x4).add(c));
}

export function mandelZoom($step: Step) {
  const $images = $step.$$('.mandel-frame img');
  const $slider = $step.$('x-slider') as Slider;
  const speed = 2 * ($images.length - 1) / $slider.steps;

  $step.model.pow = (s: number) => Math.round(2 ** (s/100 * 19));

  $step.model.watch((state: any) => {
    for (const [i, $img] of $images.entries()) {
      const scale = state.scale * speed - 2 * i;
      const isVisible = scale > -3 && scale < 2;
      $img.toggle(isVisible);
      if (isVisible) $img.css('transform', `scale(${Math.pow(2, scale)})`)
    }
  });
}
