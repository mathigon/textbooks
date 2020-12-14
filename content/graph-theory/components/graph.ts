// =============================================================================
// Mathigon.org | Graph Component
// (c) Mathigon
// =============================================================================


import {EventTarget, list, run} from '@mathigon/core';
import {clamp, nearlyEquals, Vector} from '@mathigon/fermat';
import {Point, Segment, SimplePoint} from '@mathigon/euclid';
import {$N, animate, ElementView, slide, SVGParentView, SVGView} from '@mathigon/boost';


interface GraphOptions {
  directed?: boolean;
  icon?: string;
  r?: number;  // Graph vertex radius
  arc?: boolean;
  static?: boolean;
  bound?: boolean;
  posn?: SimplePoint[];  // Initial positions of the vertices
  vertex?: string|((i: number) => string);  // vertex colouring
  edge?: string|((i: number, j: number) => string);  // vertex colouring
}

export interface Vertex {
  $el: SVGView;
  posn: SimplePoint;
  neighbours: Vertex[];
  v: SimplePoint;  // velocity
  intersect?: boolean;  // required for Planarity game
}

export interface Edge {
  $el: SVGView;
  vertices: [Vertex, Vertex];
  intersect?: boolean;  // required for Planarity game
}


export function edgeToSegment(e: Edge) {
  const p1 = new Point(e.vertices[0].posn.x, e.vertices[0].posn.y);
  const p2 = new Point(e.vertices[1].posn.x, e.vertices[1].posn.y);
  return new Segment(p1, p2);
}


export class Graph extends EventTarget {
  private $edges: ElementView;
  private $vertices: ElementView;

  private stable = false;
  private dragging?: Vertex;
  private animating = false;

  vertices: Vertex[] = [];
  edges: Edge[] = [];

  repulsion!: number;
  attraction!: number;
  gravity!: number;
  damping = 0.9;

  width: number;
  height: number;

  constructor($svg: SVGParentView, vertices: number, edges: number[][],
              readonly options: GraphOptions = {}) {
    super();

    this.$edges = $N('g', {}, $svg);
    this.$vertices = $N('g', {}, $svg);

    this.width = $svg.svgWidth;
    this.height = $svg.svgHeight;

    if (options.directed) {
      const $defs = $N('defs', {}, $svg);
      const $marker = $N('marker', {
        id: 'arrow-head',
        viewBox: '0 -5 10 10',
        refX: '14',
        refY: '0',
        markerWidth: '6',
        markerHeight: '6',
        orient: 'auto'
      }, $defs);
      $N('path', {d: 'M0,-5L10,0L0,5', class: 'arrow'}, $marker);
    }

    slide($svg, {
      start: (posn) => {
        for (const v of this.vertices) {
          if (Point.distance(posn, v.posn) < 18) {
            this.dragging = v;
            this.dragging.posn = posn;
            this.stable = false;
            this.redraw();
            break;
          }
        }
      },
      move: (posn) => {
        if (!this.dragging) return;
        this.dragging.posn = posn;
        this.redraw();
        this.stable = false;
      },
      end: () => {
        this.dragging = undefined;
      }
    });

    this.load(vertices, edges, options.posn);
  }

  load(vertices: number, edges: number[][], posn?: SimplePoint[]) {
    this.repulsion = 50 / Math.sqrt(vertices);
    this.attraction = 0.1 * Math.sqrt(vertices) / edges.length * 200 /
                      (this.width + this.height);
    this.gravity = vertices / 4;

    this.$vertices.removeChildren();
    this.$edges.removeChildren();

    this.vertices = list(vertices).map((v) => {
      const x = posn ? posn[v].x : this.width * (0.3 + 0.4 * Math.random());
      const y = posn ? posn[v].y : this.height * (0.3 + 0.4 * Math.random());

      const $el = (this.options.icon ?
                 $N('path', {class: 'node', d: this.options.icon}, this.$vertices) :
                 $N('circle', {class: 'node', r: this.options.r || 5}, this.$vertices)) as SVGView;
      if (this.options.vertex) $el.css('fill', run(this.options.vertex, v));
      return {$el: $el, posn: {x: x, y: y}, neighbours: [], v: {x: 0, y: 0}};
    });

    this.edges = edges.map(([a, b]) => {
      const v1 = this.vertices[a];
      const v2 = this.vertices[b];

      const type = (v1 === v2) || this.options.arc ? 'path' : 'line';
      const $el = $N(type, {class: 'link'}, this.$edges) as SVGView;
      if (this.options.directed) $el.setAttr('marker-end', 'url(#arrow-head)');
      if (this.options.edge) $el.css('stroke', run(this.options.edge, a, b));

      const edge = {$el: $el, vertices: [v1, v2] as [Vertex, Vertex]};

      v1.neighbours.push(v2);
      v2.neighbours.push(v1);
      return edge;
    });

    this.redraw();
  }

  redraw() {
    if (this.options.static) return this.arrange();

    if (this.animating) return;
    this.animating = true;
    this.stable = false;

    animate((p, dt, cancel) => {
      if (this.stable) {
        this.animating = false;
        cancel();
      }
      this.physics();
    });
  }

  physics() {
    const positions: SimplePoint[] = [];
    let totalMoved = 0;

    for (const [i, v] of this.vertices.entries()) {
      if (this.options.static || v === this.dragging) continue;
      const force = {x: 0, y: 0};

      for (const u of this.vertices) {
        if (u === v) continue;

        // Coulomb's Repulsion between Vertices
        let d = (v.posn.x - u.posn.x) ** 2 + (v.posn.y - u.posn.y) ** 2;
        if (nearlyEquals(d, 0, 0.001)) d = 0.001;
        const coul = this.repulsion / d;
        force.x += coul * (v.posn.x - u.posn.x);
        force.y += coul * (v.posn.y - u.posn.y);
      }

      for (const u of v.neighbours) {
        // Hook's attraction between Neighbours
        force.x += this.attraction * (u.posn.x - v.posn.x);
        force.y += this.attraction * (u.posn.y - v.posn.y);
      }

      // Additional Force towards center of svg
      force.x += this.gravity * (0.5 - v.posn.x / this.width);
      force.y += this.gravity * (0.5 - v.posn.y / this.height);

      v.v.x = (v.v.x + force.x) * this.damping;
      v.v.y = (v.v.y + force.y) * this.damping;
      totalMoved += Math.abs(v.v.x) + Math.abs(v.v.y);
      positions[i] = {x: v.posn.x + v.v.x, y: v.posn.y + v.v.y};
    }

    this.stable = (totalMoved < 0.5 && !this.dragging);
    this.arrange(positions);
  }

  arrange(positions: SimplePoint[] = []) {
    let center: Point|undefined = undefined;

    for (const [i, v] of this.vertices.entries()) {
      v.posn = positions[i] || v.posn;

      if (this.options.bound) {
        const distance = this.options.r || 5;
        v.posn.x = clamp(v.posn.x, distance, this.width - distance);
        v.posn.y = clamp(v.posn.y, distance, this.height - distance);
      }

      if (this.options.icon) {
        v.$el.translate(v.posn.x, v.posn.y);
      } else {
        v.$el.setCenter(v.posn);
      }
    }

    for (const e of this.edges) {
      if (e.vertices[0] === e.vertices[1]) {
        // Connected to self
        if (!center) center = Point.average(...this.vertices.map(v => v.posn));

        const v = new Vector(e.vertices[0].posn.x - center.x, e.vertices[0].posn.y - center.y).unitVector;
        const v0 = new Vector(v[0] + v[1], v[1] - v[0]).scale(40);
        const v1 = new Vector(v[0] - v[1], v[1] + v[0]).scale(40);

        e.$el.setAttr('d', `M${e.vertices[0].posn.x},${e.vertices[0].posn.y}c${v0[0]},${v0[1]},${v1[0]},${v1[1]},0,0`);

      } else if (this.options.arc) {
        // Arcs
        const dx = e.vertices[1].posn.x - e.vertices[0].posn.x;
        const dy = e.vertices[1].posn.y - e.vertices[0].posn.y;
        const dr = Math.sqrt(dx * dx + dy * dy);
        e.$el.setAttr('d', `M${e.vertices[0].posn.x},${e.vertices[0].posn.y}A${dr},${dr},0,0,1,${e.vertices[1].posn.x},${e.vertices[1].posn.y}`);

      } else {
        e.$el.setLine(e.vertices[0].posn, e.vertices[1].posn);
      }
    }

    this.trigger('update');
  }
}
