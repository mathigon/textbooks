// =============================================================================
// Wallpaper Component
// (c) Mathigon
// =============================================================================



import { tabulate, flatten } from '@mathigon/core';
import { customElement, slide } from '@mathigon/boost';


const WIDTH = 960 * 2;
const HEIGHT = 640 * 2;

const TRANSFORMATIONS = {
  p1: flatten(tabulate((x, y) => (p => p.shift((x-3)*480, (y-3)*320)), 7, 7))
};

function drawStroke(ctx, stroke, colour) {
  ctx.lineWidth = 16;
  ctx.strokeStyle = colour;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(stroke[0].x, stroke[0].y);
  for (let i=1; i < stroke.length; ++i) {
    ctx.lineTo(stroke[i].x, stroke[i].y);
  }
  ctx.stroke();
}

function redraw(context, strokes, transformations) {
  for (let s of strokes) {
    for (let t of transformations) {
      drawStroke(context, s.points.map(t), s.colour);
    }
  }
}


export const Wallpaper = customElement('x-wallpaper', {

  created: function($el) {
    const $canvas = $el.$('canvas');
    $canvas.attr('width', WIDTH);
    $canvas.attr('height', HEIGHT);

    const context = $canvas.getContext();

    let activeGroup = 'p1';
    let activeColour = $el.$('.colour.active').css('background-color');

    let strokes = [];
    let activeStroke = null;

    slide($canvas, {
      start() {
        activeStroke = [];
        strokes.push({ points: activeStroke, colour: activeColour });
      },
      move(posn) {
        activeStroke.push(posn);
        // TODO Don't redraw all previous strokes, only the current one
        redraw(context, strokes, TRANSFORMATIONS[activeGroup]);
      },
      end() {
        if (!activeStroke.length) strokes.pop();
      }
    });

    for (let $c of $el.$$('.colour')) {
      $c.on('click', () => {
        $el.$('.colour.active').removeClass('active');
        $c.addClass('active');
        activeColour = $el.$('.colour.active').css('background-color');
      });
    }

    $el.$('.clear').on('click', () => {
      strokes = [];
      context.clearRect(0, 0, 1e10, 1e10);
    });

    $el.$('.save').on('click', (e) => {
      e.target.href = $canvas._el.toDataURL('image/png');
    });


  },

  templateId: '#wallpaper'
});
