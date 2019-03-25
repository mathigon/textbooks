// =============================================================================
// Water Ripples Component
// (c) Mathigon
// =============================================================================


import {tabulate, clamp} from '@mathigon/core';
import {isBetween} from '@mathigon/fermat';
import {CustomElement, registerElement, $N, slide, animate} from '@mathigon/boost';


const THRESHOLD = 0.05;
let TIMEOUT = null;


export class WaterCanvas extends CustomElement {

  ready() {
    this.sx = +this.attr('width');
    this.sy = +this.attr('height') || this.sx;

    const r = +this.attr('resolution') || 2;
    this.rx = this.sx * r;
    this.ry = this.sy * r;

    this.$canvas = $N('canvas', {width: this.rx, height: this.ry}, this);
    this.$canvas.css({width: this.sx + 'px', height: this.sy + 'px'});

    this.imagePixels = null;
    this.loadBackground(this.attr('src'));

    this.depthMap1 = tabulate(0, this.sx, this.sy);
    this.depthMap2 = tabulate(0, this.sx, this.sy);

    this.damping = +this.attr('damping') || 0.994;
    this.clipping = +this.attr('clipping') || 5;
    this.refraction = +this.attr('refraction') || 8;  // Number of pixels used by refraction.
    this.reflection	= +this.attr('reflection') || 1;  // Amount of color highlighting.

    this.isAnimating = false;

    // The touch pattern is a 2D array containing numbers between -1 and 1.
    this.touchSize = 10;
    this.touchPattern = this.createDropPattern(this.touchSize * 2);

    slide(this.$canvas, {
      start: (p) => this.touchWater(p.scale(1/r), 0.5),
      move: (p) => this.touchWater(p.scale(1/r), 0.1)
    });
  }

  startAnimation() {
    // After 10s, greatly increase the damping to stop ripples.
    clearTimeout(TIMEOUT);
    TIMEOUT = setTimeout(() => this.damping = 0.95, 10000);
    this.damping = 0.994;

    if (this.isAnimating) return;
    this.isAnimating = true;

    animate((t, dt, cancel) => {
      const noChange = this.updateWater();
      this.updateCanvas();

      if (noChange) {
        cancel();
        this.isAnimating = false;
      }
    });
  }


  // ---------------------------------------------------------------------------
  // Canvas Utilities

  loadBackground(src) {
    const $canvas = $N('canvas', {width: this.rx, height: this.ry});
    const image = new Image();

    image.onload = () => {
      $canvas.ctx.drawImage(image, 0, 0, this.rx, this.ry);
      const pixels = $canvas.ctx.getImageData(0, 0, this.rx, this.ry);
      this.imagePixels = pixels.data;
      this.$canvas.ctx.putImageData(pixels, 0, 0);
    };
    image.src = src;
  }

  updateCanvas() {
    if (!this.imagePixels) return;

    const imgDataOut = this.$canvas.ctx.getImageData(0, 0, this.rx, this.ry);
    const pixelsOut = imgDataOut.data;

    for (let i = 0; i < pixelsOut.length; i += 4) {
      const x = (i / 4) % this.rx;
      const y = (i / 4 - x) / this.rx;

      const strength = this.depthMap1[Math.floor(x/2)][Math.floor(y/2)];
      const refraction = Math.round(strength * this.refraction);
      const reflection = 1 + strength * this.reflection;

      const x1 = clamp(x + refraction, 0, this.rx - 1);
      const y1 = clamp(y + refraction, 0, this.ry - 1);
      const i1 = ((y1 * this.rx) + x1) * 4;

      pixelsOut[i] = this.imagePixels[i1] * reflection;
      pixelsOut[i + 1] = this.imagePixels[i1 + 1] * reflection;
      pixelsOut[i + 2] = this.imagePixels[i1 + 2] * reflection;
    }

    this.$canvas.ctx.putImageData(imgDataOut, 0, 0);
  }

  createDropPattern(size) {
    const $canvas = $N('canvas', {width: size, height: size});

    const grad = $canvas.ctx.createRadialGradient(size/2, size/2, 0, size/2, size/2, size/2);
    grad.addColorStop(0, '#fff');
    grad.addColorStop(1, '#000');

    $canvas.ctx.fillStyle = grad;
    $canvas.ctx.fillRect(0, 0, size, size);
    const pixels = $canvas.ctx.getImageData(0, 0, size, size).data;

    // Only use the red component when extracting pixel values.
    return tabulate((x, y) => pixels[(x * size + y) * 4] / 255, size, size);
  }


  // ---------------------------------------------------------------------------
  // Water Utilities

  touchWater(p, pressure) {
    const x = Math.round(p.x);
    const y = Math.round(p.y);

    for (let i = 0; i < 2 * this.touchSize; ++i) {
      for (let j = 0; j < 2 * this.touchSize; ++j) {
        const cx = x - this.touchSize + i;
        const cy = y - this.touchSize + j;
        if (isBetween(cx, -1, this.sx) && isBetween(cy, -1, this.sy)) {
          this.depthMap1[cx][cy] -= this.touchPattern[i][j] * pressure;
        }
      }
    }

    this.startAnimation();
  }

  updateWater() {
    let noChange = true;

    for (let x = 0; x < this.sx; x++) {
      for (let y = 0; y < this.sy; y++) {

        const left = (x === 0) ? 0 : this.depthMap1[x - 1][y];
        const right = (x === this.sx - 1) ? 0 : this.depthMap1[x + 1][y];
        const top = (y === 0) ? 0 : this.depthMap1[x][y - 1];
        const bottom = (y === this.sy - 1) ? 0 : this.depthMap1[x][y + 1];

        let val = left + right + bottom + top;
        val = (val / 2 - this.depthMap2[x][y]) * this.damping;  // Damping
        val = clamp(val, -this.clipping, this.clipping);  // Clipping

        this.depthMap2[x][y] = val;
        if (Math.abs(val) > THRESHOLD) noChange = false;
      }
    }

    // Swap buffer references
    [this.depthMap1, this.depthMap2] 	= [this.depthMap2, this.depthMap1];

    return noChange;
  }

}

registerElement('x-water-canvas', WaterCanvas);
