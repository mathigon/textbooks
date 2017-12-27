// =============================================================================
// Boost.js | Drawing Component
// (c) Mathigon
// =============================================================================



import { Evented, last } from '@mathigon/core';
import { Point, Line } from '@mathigon/fermat';
import { $N, svgPointerPosn, stopEvent } from '@mathigon/boost';


export class Sketch extends Evented {

  constructor($svg, options = {}) {
    super();
    $svg.addClass('drawing-pointer');

    this.$svg = $svg;
    this.options = options;
    this.drawing = false;
    this.paths = [];
    this.p = null;
    this.activePath = null;

    $svg.css('touch-action', 'none');

    if (!options.noStart) {
      $svg.on('pointerdown', e => {
        stopEvent(e);
        this.start(svgPointerPosn(e, $svg));
      });
    }

    $svg.on('pointermove', e => {
      if (!this.drawing) return;
      stopEvent(e);
      this.addPoint(svgPointerPosn(e, $svg));
    });

    $svg.on('pointerstop', () => {
      this.trigger('end');
      this.drawing = false;
    });
  }

  start(p) {
    if (this.p && Point.distance(this.p, p) < 20) {
      this.activePath.addPoint(p);

    } else {
      this.trigger('start');
      this.activePath = $N('path', {
        class: 'drawing-path',
        d: 'M ' + p.x + ',' + p.y
      }, this.options.paths || this.$svg);
      this.activePath.points = [p];
      this.paths.push(this.activePath);
    }

    this.drawing = true;
    this.p = p;
  }

  addPoint(p) {
    if (Point.distance(this.p, p) > 4) {
      this.activePath.addPoint(p);
      this.p = p;
      this.checkForIntersects();
    }
  }

  stop() {
    this.drawing = false;
    this.p = null;
  }

  clear() {
    this.paths.forEach(path => { path.remove(); });
    this.paths = [];
    this.trigger('clear');
  }

  clearPaths(paths) {
    paths.forEach(p => { p.exit('draw', 200); });
    this.paths = this.paths.filter(p => paths.indexOf(p) < 0);
  }

  checkForIntersects() {
    if (!this.options.intersect || this.paths.length <= 1) return;

    let path1 = last(this.paths);
    let points1 = path1.points;
    let line1 = new Line(points1[points1.length-2], points1[points1.length-1]);

    for (let i = 0; i < this.paths.length - 1; ++i) {
      let path2 = this.paths[i];
      let points2 = path2.points;
      for (let j = 1; j < points2.length - 2; ++j) {
        let line2 = new Line(points2[j], points2[j + 1]);
        let t = Line.intersect(line1, line2);
        if (t) {
          this.trigger('intersect', { point: t, paths: [path1, path2] });
          return;
        }
      }
    }
  }

}
