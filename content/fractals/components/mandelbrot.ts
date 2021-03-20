// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================


import {CanvasView} from '@mathigon/boost';
import {roundTo} from '@mathigon/fermat';
import {Bounds, Point} from '@mathigon/euclid';
import {BLUE} from '../../shared/constants';


export class JuliaCanvas {
  private readonly range: number[];
  private readonly worker: Worker;
  private queue?: Point = undefined;
  private isRunning = false;

  constructor(private readonly plotBounds: Bounds,
              private readonly viewportBounds: Bounds,
              private readonly $canvas: CanvasView,
              private readonly resolution = 0.1) {

    const xMax = roundTo(plotBounds.xMax, resolution);
    const yMin = roundTo(plotBounds.yMin, resolution);
    const yMax = roundTo(plotBounds.yMax, resolution);
    this.range = [0, xMax, yMax, yMin];

    this.worker = new Worker('/content/fractals/worker.js');
    this.worker.onmessage = (e: MessageEvent) => this.onCompleted(e.data);
    this.worker.onerror = (e: ErrorEvent) => console.error('[WebWorker]', e);
  }

  draw(c: Point) {
    if (this.isRunning) return this.queue = c;
    this.isRunning = true;
    this.worker.postMessage(['julia', c.x, c.y, ...this.range, this.resolution]);
  }

  private onCompleted(data: number[][]) {
    const [pB, vB] = [this.plotBounds, this.viewportBounds];
    const scale = Math.abs(vB.dx / pB.dx) * this.resolution;
    const iMax = data.length;
    const jMax = data[0].length;

    this.$canvas.clear();
    const context = this.$canvas.getContext() as CanvasRenderingContext2D;
    context.fillStyle = BLUE;
    context.beginPath();

    for (let i = 0; i < iMax; ++i) {
      const x = this.range[0] + i * this.resolution;
      const xV = vB.xMin + (x - pB.xMin) / (pB.dx) * (vB.dx);
      const xV1 = vB.xMin + (-x - pB.xMin) / (pB.dx) * (vB.dx);
      for (let j = 0; j < jMax; ++j) {
        if (data[i][j]) {
          const y = this.range[2] + j * this.resolution;
          const yV = vB.yMin + (y - pB.yMin) / (pB.dy) * (vB.dy);
          const yV1 = vB.yMin + (-y - pB.yMin) / (pB.dy) * (vB.dy);
          context.rect(xV * 2 - scale, yV * 2 - scale, scale * 2 + 0.1, scale * 2 + 0.1);
          context.rect(xV1 * 2 - scale, yV1 * 2 - scale, scale * 2 + 0.1, scale * 2 + 0.1);
        }
      }
    }

    context.fill();

    this.isRunning = false;
    if (this.queue) this.draw(this.queue);
    this.queue = undefined;
  }
}


export function converges(p: Point, c: Point, bailout = 120, limit = 2) {
  let x = p.x;
  let y = p.y;
  for (let i = 0; i < bailout; ++i) {
    const xy = x * y;
    x = x * x - y * y + c.x;
    y = 2 * xy + c.y;
    if (x * x + y * y >= limit) return false;
  }
  return true;
}
