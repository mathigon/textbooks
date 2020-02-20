// =============================================================================
// Fractal Component
// (c) Mathigon
// =============================================================================


import {CustomElementView, CanvasView, register, thread, functionToWorker} from '@mathigon/boost';


function mandelbrot(xMin: number, xMax: number, dx: number, yMin: number,
                    yMax: number, dy: number) {

  function run(x: number, y: number) {
    let i = 0;
    let zx = 0;
    let zy = 0;

    do {
      let xt = zx * zy;
      zx = zx * zx - zy * zy + x;
      zy = 2 * xt + y;
      i++;
    } while (i < 255 && (zx * zx + zy * zy) < 4);

    return i;
  }

  const result = [];

  for (let x = xMin; x < xMax; x += dx) {
    let row = [];
    for (let y = yMin; y < yMax; y += dy) row.push(run(x, y));
    result.push(row);
  }

  return result;
}

const mandelbrotWorker = functionToWorker(mandelbrot);

async function draw(context: CanvasRenderingContext2D, xMin: number,
                    xMax: number, yMin: number, yMax: number, r: number) {
  const dx = (xMax - xMin) / r;
  const dy = (yMax - yMin) / r;

  const result = await thread<number[][]>(mandelbrotWorker,
      [xMin, xMax, dx, yMin, yMax, dy]);

  for (let x = 0; x < r; ++x) {
    for (let y = 0; y < r; ++y) {
      let color = result[x][y].toString(16);
      context.beginPath();
      context.rect(x, y, 1, 1);
      context.fillStyle = '#' + color + color + color;
      context.fill();
    }
  }
}


const template = '<canvas width="800" height="800" style="width: 400px; margin: 1.5rem auto"></canvas>';

@register('x-mandelbrot', {template})
export class Mandelbrot extends CustomElementView {
  ready() {
    const $canvas = this.$('canvas') as CanvasView;
    draw($canvas.ctx, -2, 1, -1.5, 1.5, 800);
  }
}
