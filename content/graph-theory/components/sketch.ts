// =============================================================================
// Boost.js | Drawing Component
// (c) Mathigon
// =============================================================================


import {EventTarget, last} from '@mathigon/core';
import {Point, Segment, isBetween} from '@mathigon/fermat';
import {$N, slide, SVGParentView, SVGView} from '@mathigon/boost';


interface SketchOptions {
  noStart?: boolean;
  intersect?: boolean;
  paths?: SVGView;
}


export class Sketch extends EventTarget {
  private drawing = false;
  private paths: SVGView[] = [];
  private p?: Point;
  private activePath?: SVGView;

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
        if (!isBetween(p.x, 0, box.width) || !isBetween(p.y, 0, box.height))
          return this.stop();

        this.addPoint(p);
      },
      end: () => this.stop()
    });
  }

  start(p: Point) {
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

  addPoint(p: Point) {
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
    this.paths.forEach(path => { path.remove(); });
    this.paths = [];
    this.trigger('clear');
  }

  clearPaths($paths: SVGView[]) {
    for (const $p of $paths) $p.exit('draw', 200);
    this.paths = this.paths.filter(p => !$paths.includes(p));
  }

  checkForIntersects() {
    if (!this.options.intersect || this.paths.length <= 1) return;

    let path1 = last(this.paths);
    let points1 = path1.points as Point[];
    let line1 = new Segment(points1[points1.length - 2],
        points1[points1.length - 1]);

    for (let i = 0; i < this.paths.length - 1; ++i) {
      let path2 = this.paths[i];
      let points2 = path2.points as Point[];
      for (let j = 1; j < points2.length - 2; ++j) {
        let line2 = new Segment(points2[j], points2[j + 1]);
        let t = Segment.intersect(line1, line2);
        if (t) {
          this.trigger('intersect', {point: t, paths: [path1, path2]});
          return;
        }
      }
    }
  }
}
