// =============================================================================
// Boost.js | Drawing Component
// (c) Mathigon
// =============================================================================


import {EventTarget, last} from '@mathigon/core';
import {isBetween} from '@mathigon/fermat';
import {intersections, Point, Segment, SimplePoint} from '@mathigon/euclid';
import {$body, $N, slide, SVGParentView, SVGView} from '@mathigon/boost';


interface SketchOptions {
  noStart?: boolean;
  intersect?: boolean;
  paths?: SVGView;
}


export class Sketch extends EventTarget {
  paths: SVGView[] = [];
  p?: SimplePoint;
  private activePath?: SVGView;
  drawing = false;

  constructor(private $svg: SVGParentView,
              private readonly options: SketchOptions = {}) {
    super();

    $svg.addClass('drawing-pointer');
    $svg.css('touch-action', 'none');

    slide($svg, {
      start: p => {
        if (!this.options.noStart) this.start(p);
      },
      move: p => {
        if (!this.drawing) return;

        const box = $svg.viewBox;
        if (!isBetween(p.x, 0, box.width) || !isBetween(p.y, 0, box.height)) {
          return this.stop();
        }

        this.addPoint(p);
      },
      end: () => this.stop()
    });

    $body.on('scroll', () => this.stop());
  }

  start(p: SimplePoint) {
    if (this.p && Point.distance(this.p, p) < 20) {
      this.activePath!.addPoint(p);

    } else {
      this.trigger('start');
      const $parent = this.options.paths || this.$svg;
      this.activePath = $N('path', {class: 'drawing-path'}, $parent) as SVGView;
      this.activePath.points = [p];
      this.paths.push(this.activePath);
    }

    this.drawing = true;
    this.p = p;
  }

  addPoint(p: SimplePoint) {
    if (Point.distance(this.p!, p) > 3) {
      this.activePath!.addPoint(p);
      this.p = p;
      this.checkForIntersects();
    }
  }

  stop() {
    if (this.drawing) this.trigger('end');
    this.drawing = false;
  }

  clear() {
    this.paths.forEach(path => path.remove());
    this.paths = [];
    this.trigger('clear');
  }

  clearPaths($paths: SVGView[]) {
    for (const $p of $paths) $p.exit('draw', 200);
    this.paths = this.paths.filter(p => !$paths.includes(p));
  }

  checkForIntersects() {
    if (!this.options.intersect || this.paths.length <= 1) return;

    const path1 = last(this.paths);
    const points1 = path1.points as Point[];
    const line1 = new Segment(points1[points1.length - 2],
        points1[points1.length - 1]);

    for (let i = 0; i < this.paths.length - 1; ++i) {
      const path2 = this.paths[i];
      const points2 = path2.points as Point[];
      for (let j = 1; j < points2.length - 2; ++j) {
        const line2 = new Segment(points2[j], points2[j + 1]);
        const t = intersections(line1, line2)[0];
        if (t) {
          this.trigger('intersect', {point: t, paths: [path1, path2]});
          return;
        }
      }
    }
  }
}
