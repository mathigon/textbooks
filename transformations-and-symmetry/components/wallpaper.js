// =============================================================================
// Wallpaper Component
// (c) Mathigon
// =============================================================================



import { tabulate, flatten } from '@mathigon/core';
import { CustomElement, registerElement, canvasPointerPosition } from '@mathigon/boost';


// -------------------------------------------------------------------------
// Canvas Drawing Functions

const TRANSFORMATIONS = {
  p1: flatten(tabulate((x, y) => (p => p.shift((x-3)*480, (y-3)*320)), 7, 7))
};

function drawPoint(_ctx, _group, _colour, _point) {
  // TODO
}

function drawLine(ctx, group, colour, from, to) {
  ctx.lineWidth = 16;
  ctx.strokeStyle = colour;
  ctx.lineCap = 'round';

  ctx.beginPath();
  for (let t of TRANSFORMATIONS['p1']) {
    ctx.moveTo(t(from).x, t(from).y);
    ctx.lineTo(t(to).x, t(to).y);
  }
  ctx.stroke();
}


// -------------------------------------------------------------------------
// Component

export class Wallpaper extends CustomElement {

  ready() {
    const $canvas = this.$('canvas');
    const context = $canvas.getContext();

    const $groups = this.$('.groups');
    let activeGroup = $groups.$active.data.value;
    $groups.on('change', $active => {
      context.clearRect(0, 0, 1e10, 1e10);
      activeGroup = $active.data.value;
    });

    const $colours = this.$('.colours');
    let activeColour = $colours.$active.css('background-color');
    $colours.on('change', $active => {
      activeColour = $active.css('background-color');
    });

    this.$('.clear').on('click', () => context.clearRect(0, 0, 1e10, 1e10));
    this.$('.save').on('click', e => e.target.href = $canvas.pngImage);

    let lastpoint = null;
    $canvas.on('pointerdown', e => {
      lastpoint = canvasPointerPosition(e, $canvas);
      drawPoint(context, activeGroup, activeColour, lastpoint);
    });

    $canvas.on('pointermove', e => {
      if (!lastpoint) return;
      const point = canvasPointerPosition(e, $canvas);
      drawLine(context, activeGroup, activeColour, lastpoint, point);
      lastpoint = point;
    });

    $canvas.on('pointerup pointercancel', () => {
      lastpoint = null;
    });
  }
}

registerElement('x-wallpaper', Wallpaper, {templateId: '#wallpaper'});
