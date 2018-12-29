// =============================================================================
// Burst Component
// (c) Mathigon
// =============================================================================



import { tabulate } from '@mathigon/core';
import { $N, animate, ease } from '@mathigon/boost';


export class Burst {

  constructor($svg, items = 20) {
    this.animating = false;
    this.$ring = $N('circle', {opacity: 0.6}, $svg);
    this.$lines = tabulate(() => $N('line', {'stroke-width': 2}, $svg), items);
  }

  play(time = 1000, center = [80, 80], radius = [0, 80]) {
    if (this.animating) return;
    this.animating = true;

    const n = this.$lines.length;
    this.$ring.setCenter({x: center[0], y: center[1]});

    animate((p) => {
      const q = ease('sine-out', p);
      this.$ring.setAttr('r', radius[0] + 0.6 * q * radius[1]);
      this.$ring.setAttr('stroke-width', 0.25 * (1 - q) * radius[1]);

      const r = ease('exp-out', p);
      const r1 = radius[0] + (0.2 + 0.8 * r) * radius[1];
      const r2 = radius[0] + (0.55 + 0.45 * r) * radius[1];

      for (let i = 0; i < n; ++i) {
        const c = Math.cos(Math.PI * 2 * i / n);
        const s = Math.sin(Math.PI * 2 * i / n);
        this.$lines[i].setLine(
            {x: center[0] + c * r1, y: center[1] + s * r1},
            {x: center[0] + c * r2, y: center[1] + s * r2});
      }
    }, time).then(() => this.animating = false);
  }
}
