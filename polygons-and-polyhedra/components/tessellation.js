// =============================================================================
// Wallpaper Component
// (c) Mathigon
// =============================================================================


// TODO add new polygons
// TODO rotate, delete
// TODO snap to corners
// TODO export to png
// TODO clear canvas
// TODO save progress to db

import { CustomElement, registerElement, $N, Draggable } from '@mathigon/boost';

const SHAPES = {
  3: '0,-34.6 30,17.3 -30,17.3',
  4: '-30,-30 30,-30 30,30 -30,30',
  5: '-30,-30 30,-30 30,30 -30,30',
  6: '0,-60 52,-30 52,30 0,60 -52,30 -52,-30'
};

const INITIAL = [{ x: 150, y: 110, p: 3 }, { x: 360, y: 240, p: 4 },
  { x: 520, y: 170, p: 5 }, { x: 420, y: 400, p: 4 }, { x: 120, y: 340, p: 6 },
  { x: 330, y: 60, p: 6 }];

function makeShape(coords, shape, $svg) {
  let angle = 0;

  let $g = $N('g', {}, $svg);
  let $shape = $N('polygon', { 'points': SHAPES[shape], 'class': 'shape' }, $g);
  $shape.css('fill', ['#1f7aff', '#31b304', '#ff941f', '#b30469'][shape - 3]);

  let drag = new Draggable($g, $svg, 'xy', 0, true);
  drag.position = coords;

  $shape.on('click', function() { angle += 30; $shape.transform = `rotate(${angle}deg)`; });
}


export class Tessellation extends CustomElement {
  ready() {
    let $svg = this.$('svg');
    for (let c of INITIAL) makeShape(c, c.p, $svg);
  }
}

registerElement('x-tessellation', Tessellation, {templateId: '#tessellation'});
