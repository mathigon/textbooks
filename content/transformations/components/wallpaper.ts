// =============================================================================
// Wallpaper Component
// (c) Mathigon
// =============================================================================


import {flatten, Obj, tabulate2D} from '@mathigon/core';
import {Line, Point} from '@mathigon/euclid';
import {CanvasView, CustomElementView, register, slide} from '@mathigon/boost';
import {Select} from '@mathigon/studio';
import template from './wallpaper.pug';


// -------------------------------------------------------------------------
// Symmetry Functions

const width = 1920;
const height = 1280;

const pointX1M = new Point(240, 320);
const pointX1Y1 = new Point(480, 320);
const lineX1 = new Line(new Point(0, 320), new Point(480, 320));
const lineY1 = new Line(new Point(480, 0), new Point(480, 320));
const lineY2 = new Line(new Point(640, 0), new Point(640, 320));

const pointS = new Point(360, 360);
const lineS = new Line(new Point(0, 0), new Point(360, 360));
const lineSI = new Line(new Point(0, 720), new Point(720, 0));

function grid(points: Point[], x: number, y: number) {
  return flatten<Point>(tabulate2D((i, j) =>
    points.map((p: Point) => p.shift(i * x, j * y)), width / x, height / y));
}

function applyTransforms(point: Point, [x, y]: [number, number],
    transforms: ((p: Point) => Point)[]) {
  let points = [point.mod(x, y)];

  for (const t of transforms) {
    for (const p of points.map(p => t(p))) {
      if (!points.some(q => q.equals(p))) points.push(p);
    }
  }

  points = points.filter(p => (p.x >= 0 && p.x < x && p.y >= 0 && p.y < y));
  return grid(points, x, y);
}

function lineX(y: number) {
  return new Line(new Point(0, y), new Point(1, y));
}

function lineY(x: number) {
  return new Line(new Point(x, 0), new Point(x, 1));
}

function line(a1: number, a2: number, b1: number, b2: number) {
  return new Line(new Point(a1, a2), new Point(b1, b2));
}

export const TRANSFORMATIONS: Obj<(p: Point) => Point[]> = {
  P1: p => {
    const p1 = p.mod(480, 320);
    return grid([p1], 480, 320);
  },

  P2: p => {
    const p1 = p.mod(480, 640);
    const p2 = p1.rotate(Math.PI, pointX1M);
    return grid([p1, p2], 480, 640);
  },

  P3: p => {
    const h = 640;
    const w = h / Math.sqrt(3) / 2;
    return applyTransforms(p, [6 * w, h], [
      p => p.rotate(2 * Math.PI / 3, new Point(w, 0)),
      p => p.rotate(-2 * Math.PI / 3, new Point(w, h)),
      p => p.rotate(-2 * Math.PI / 3, new Point(5 * w, 0)),
      p => p.rotate(2 * Math.PI / 3, new Point(5 * w, h)),
      p => p.rotate(2 * Math.PI / 3, new Point(2 * w, h / 2)),
      p => p.rotate(-2 * Math.PI / 3, new Point(2 * w, h / 2)),
      p => p.rotate(2 * Math.PI / 3, new Point(4 * w, h / 2)),
      p => p.rotate(-2 * Math.PI / 3, new Point(4 * w, h / 2))
    ]);
  },

  P4: p => {
    const p1 = p.mod(720, 720);
    const p2 = p1.rotate(Math.PI / 2, pointS);
    const p3 = p2.rotate(Math.PI / 2, pointS);
    const p4 = p3.rotate(Math.PI / 2, pointS);
    return grid([p1, p2, p3, p4], 720, 720);
  },

  P6: p => {
    const h = 640;
    const w = h * 2 / Math.sqrt(3);
    return applyTransforms(p, [w, 2 * h], [
      p => p.rotate(Math.PI, new Point(w / 2, h)),
      p => p.rotate(Math.PI, new Point(w / 4, h / 2)),
      p => p.rotate(Math.PI, new Point(w / 4 * 3, h / 2)),
      p => p.rotate(2 * Math.PI / 3, new Point(0, h / 3 * 2)),
      p => p.rotate(-2 * Math.PI / 3, new Point(w, h / 3 * 2)),
      p => p.rotate(2 * Math.PI / 3, new Point(w / 2, h / 3)),
      p => p.rotate(-2 * Math.PI / 3, new Point(w / 2, h / 3)),
      p => p.rotate(Math.PI, new Point(w / 2, h))
    ]);
  },

  PM: p => {
    const p1 = p.mod(960, 320);
    const p2 = p1.reflect(lineY1);
    return grid([p1, p2], 960, 320);
  },

  PMM: p => {
    const p1 = p.mod(960, 640);
    const p2 = p1.reflect(lineY1);
    const p34 = [p1, p2].map(p => p.reflect(lineX1));
    return grid([p1, p2, ...p34], 960, 640);
  },

  P4M: p => {
    const p1 = p.mod(720, 720);
    const p2 = p1.rotate(Math.PI / 2, pointS);
    const p3 = p2.rotate(Math.PI / 2, pointS);
    const p4 = p3.rotate(Math.PI / 2, pointS);
    const p5678 = [p1, p2, p3, p4].map(p => p.reflect(lineS));
    return grid([p1, p2, p3, p4, ...p5678], 720, 720);
  },

  P6M: p => {
    const h = 640;
    const w = h / Math.sqrt(3);  // =370
    return applyTransforms(p, [w * 6, h * 2], [
      p => p.reflect(lineY(w * 3)),
      p => p.reflect(lineX(h)),

      p => p.reflect(line(0, 0, w, h)),
      p => p.reflect(line(w * 2, 0, w * 3, h)),
      p => p.reflect(line(0, 0, w * 3, h)),
      p => p.reflect(line(w, h, w * 2, 0)),

      p => p.reflect(lineY(w * 3)),
      p => p.reflect(lineX(h))
    ]);
  },

  P3M1: p => {
    const w = 480;
    const h = w * Math.sqrt(3) / 2;
    return applyTransforms(p, [w * 3, h * 2], [
      p => p.reflect(lineX(h)),
      p => p.rotate(Math.PI * 2 / 3, new Point(1.5 * w, h)),
      p => p.rotate(-Math.PI * 2 / 3, new Point(1.5 * w, h)),
      p => p.reflect(line(0, 0, w, 2 * h)),
      p => p.reflect(line(w, 0, 2 * w, 2 * h)),
      p => p.reflect(line(2 * w, 0, 3 * w, 2 * h)),
      p => p.reflect(line(w, 0, 0, 2 * h)),
      p => p.reflect(line(2 * w, 0, w, 2 * h)),
      p => p.reflect(line(3 * w, 0, 2 * w, 2 * h))
    ]);
  },

  P31M: p => {
    return applyTransforms(p, [740, 2 * 640], [
      p => p.reflect(lineX(640)),
      p => p.rotate(2 * Math.PI / 3, new Point(0, 640 / 3 * 2)),
      p => p.rotate(-2 * Math.PI / 3, new Point(740, 640 / 3 * 2)),
      p => p.rotate(2 * Math.PI / 3, new Point(740 / 2, 640 / 3)),
      p => p.rotate(-2 * Math.PI / 3, new Point(740 / 2, 640 / 3)),
      p => p.reflect(line(0, 0, 740 / 2, 640)),
      p => p.reflect(line(740, 0, 740 / 2, 640)),

      p => p.reflect(lineX(640))
    ]);
  },

  P4G: p => {
    const p1 = p.mod(720, 720);
    const p2 = p1.reflect(lineS);
    const p3 = p1.rotate(-Math.PI / 2, new Point(0, 360));
    const p4 = p2.rotate(Math.PI / 2, new Point(360, 0));
    const p5678 = [p1, p2, p3, p4].map(p => p.reflect(lineSI));
    return grid([p1, p2, p3, p4, ...p5678], 720, 720);
  },

  CMM: p => {
    const p1 = p.mod(1280, 640);
    const p2 = p1.rotate(Math.PI,
        new Point(p1.x < 640 ? 320 : 960, p1.y < 320 ? 160 : 480));
    const p34 = [p1, p2].map(p => p.reflect(lineY2));
    const p5678 = [p1, p2, ...p34].map(p => p.reflect(lineX1));
    return grid([p1, p2, ...p34, ...p5678], 1280, 640);
  },

  PMG: p => {
    const p1 = p.mod(960, 640);
    const p2 = p1.rotate(Math.PI, new Point(480, p1.y < 320 ? 160 : 480));
    const p34 = [p1, p2].map(p => p.reflect(lineX1));
    return grid([p1, p2, ...p34], 960, 640);
  },

  PG: p => {
    const p1 = p.mod(960, 320);
    const p2 = new Point(p1.x > 480 ? p1.x - 480 : p1.x + 480, 320 - p1.y);
    return grid([p1, p2], 960, 320);
  },

  CM: p => {
    const p1 = p.mod(960, 640);
    const p2 = new Point(p1.x > 480 ? p1.x - 480 : p1.x + 480,
        p1.y > 320 ? 960 - p1.y : 320 - p1.y);
    const p34 = [p1, p2].map(p => p.reflect(lineX1));
    return grid([p1, p2, ...p34], 960, 640);
  },

  PGG: p => {
    const p1 = p.mod(960, 640);
    const p2 = new Point(p1.x > 480 ? p1.x - 480 : p1.x + 480,
        p1.y > 320 ? 960 - p1.y : 320 - p1.y);
    const p34 = [p1, p2].map(p => p.rotate(Math.PI, pointX1Y1));
    return grid([p1, p2, ...p34], 960, 640);
  }
};

// -------------------------------------------------------------------------
// Component

function drawPoint(ctx: CanvasRenderingContext2D, group: string, point: Point) {
  for (const p of TRANSFORMATIONS[group](point)) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 6, 0, 2 * Math.PI);
    ctx.fill();
  }
}

@register('x-wallpaper', {template})
export class Wallpaper extends CustomElementView {

  ready() {
    const $canvas = this.$('canvas') as CanvasView;
    const context = $canvas.ctx;

    const $groups = this.$('x-select.tabs') as Select;
    let activeGroup = $groups.$active.data.value!;
    $groups.on('change', $active => {
      context.clearRect(0, 0, 1e10, 1e10);
      activeGroup = $active.data.value;
      this.trigger('switch', activeGroup);
    });

    const $colours = this.$('x-select.colours') as Select;
    context.fillStyle = $colours.$active.css('background-color')!;
    $colours.on('change', $active => {
      context.fillStyle = $active.css('background-color');
    });

    this.$('.clear')!.on('click', () => context.clearRect(0, 0, 1e10, 1e10));
    this.$('.save')!.on('click', () => $canvas.downloadImage('wallpaper.png'));

    slide($canvas, {
      down: p => drawPoint(context, activeGroup, p),
      move(p, _, last) {
        const l = new Line(last, p);
        const n = Math.ceil(l.length / 4);
        for (let i = 0; i < n; ++i) drawPoint(context, activeGroup, l.at(i / n));
      },
      end: () => this.trigger('draw'),
      justInside: true
    });
  }
}
