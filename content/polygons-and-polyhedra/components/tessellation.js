// =============================================================================
// Wallpaper Component
// (c) Mathigon
// =============================================================================


// TODO Fix collision detection with rotations
// TODO Nicer rotate circles (show on hover)
// TODO Don't allow overlapping shapes
// TODO Save progress to db
// TODO Export to png

import { Point, Polygon, roundTo } from '@mathigon/fermat';
import { CustomElement, registerElement, $N, slide } from '@mathigon/boost';

// -----------------------------------------------------------------------------

const SHAPES = {
  3: {points: '0,-34.6 30,17.3 -30,17.3', colour: '#ff941f'},
  4: {points: '-30,-30 30,-30 30,30 -30,30', colour: '#1f7aff'},
  5: {points: '0,-51.1 -48.5,-15.8 -30,41.2 30,41.2 48.5,-15.8 0,-51.1', colour: '#31b304'},
  6: {points: '0,-60 52,-30 52,30 0,60 -52,30 -52,-30', colour: '#b30469'},
  8: {points: '30,-72.5 -30,-72.5 -72.5,-30 -72.5,30 -30,72.5 30,72.5 72.5,30 72.5,-30 30,-72.5', colour: '#693fb4'}
};

const INITIAL = [{x: 130, y: 140, p: 6}, {x: 213, y: 92, p: 3},
  {x: 213, y: 140, p: 4}, {x: 287, y: 140, angle: 18, p: 5}];

// -----------------------------------------------------------------------------

function getAngle(p1, p2) {
  return roundTo(Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180 / Math.PI + 90, 6);
}

function polygonFromPoints(p) {
  const points = p.split(' ').map(x => new Point(...x.split(',').map(t => +t)));
  return new Polygon(...points);
}

class Shape {

  constructor(shape, initial, $parent) {
    this.$parent = $parent;
    $parent.shapes.push(this);

    this.$el = $N('g', {class: 'shape'}, $parent.$svg);
    this.$shape = $N('polygon', {points: shape.points, fill: shape.colour}, this.$el);
    const $rotate = $N('circle', {r: 8, cy: -30}, this.$el);

    this.polygon = polygonFromPoints(shape.points);
    this.setPosition(new Point(initial.x, initial.y), initial.angle || 0);

    let offset = null;
    slide(this.$shape, {
      start: p => {
        $parent.$svg.append(this.$el);  // Move element to the front.
        offset = p.subtract(this.posn);  // If you're not clicking in the center.
      },
      move: p => { this.setPosition(p.subtract(offset), this.angle); }
    });

    slide($rotate, {
      move: p => { this.setPosition(this.posn, getAngle(p, this.posn)); }
    });
  }

  setPosition(p, a) {
    const polygon = this.polygon.rotate(a * Math.PI/180).shift(p.x, p.y);

    this.$shape.setClass('overlap', this.hasIntersects(polygon));

    this.transformed = polygon;
    this.posn = p;
    this.angle = a;
    this.$el.transform = `translate(${p.x}px, ${p.y}px) rotate(${a}deg)`;
  }

  hasIntersects(polygon) {
    for (let p of this.$parent.shapes) {
      if (p !== this) {
        if (Polygon.collision(p.transformed, polygon)) return true;
      }
    }
  }
}

// -----------------------------------------------------------------------------

export class Tessellation extends CustomElement {
  ready() {
    this.$svg = this.$('svg');
    this.shapes = [];

    for (let c of INITIAL) new Shape(SHAPES[c.p], c, this);

    for (let $a of this.$$('.add')) {
      const s = +$a.data.shape;
      const shape = SHAPES[s];

      $a.css('background', shape.colour);
      const transform = `transform: translate(25px, 25px) scale(${1/(1+.4*s)})`;
      $N('polygon', {points: shape.points, style: transform}, $a.$('svg'));

      let instance = null;
      let offset = null;

      slide($a, {
        start: (p) => {
          offset = new Point(this.bounds.left, this.bounds.top);
          instance = new Shape(shape, p.subtract(offset), this);
          this.trigger('add-shape');
        },
        move: p => instance.setPosition(p.subtract(offset), 0),
        end: (a, b) => {
          if (Point.distance(a, b) < 10)
            instance.setPosition(new Point(this.width/2, this.height/2), 0);
        }
      });
    }

    this.$('.clear').on('click', () => {
      this.$svg.removeChildren();
      this.shapes = [];
    })
  }
}

registerElement('x-tessellation', Tessellation, {templateId: '#tessellation'});
