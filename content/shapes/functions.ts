// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {Polygon, Point, Segment} from '@mathigon/fermat';
import {CanvasView, loadScript, animate} from '@mathigon/boost';
import {Step, Geopad, GeoPoint} from '../shared/types';

declare const d3: any;

export async function voronoi($step: Step) {

  await loadScript('/resources/shared/vendor/d3-delaunay.min.js');

  const $canvas = $step.$('canvas.voronoi') as CanvasView;
  const $geopad = $step.$('x-geopad') as Geopad;
  const $voronoiButton = $step.$('button.show-voronoi')!;
  const bounds = [0, 0, $canvas.canvasWidth, $canvas.canvasHeight];

  $step.model.dynPoints = [];
  $step.model.distLines = [];
  $step.model.vorOpacity = 0;

  const cafePoints: Point[] = [
    $step.model.a, $step.model.b, $step.model.c, $step.model.d, 
    $step.model.e, $step.model.f, $step.model.g, $step.model.h
  ];

  const dt = d3.Delaunay.from(cafePoints, getX, getY);
  const vor = dt.voronoi(bounds);

  const cellsRaw: number[][][] = Array.from(vor.cellPolygons());

  const cellPolys =
    cellsRaw.map(cellRaw => {
      const cellPoints = cellRaw.map(pointRaw => {
        return new Point(...pointRaw);
      });
      return new Polygon(...cellPoints);
    });
  
  $voronoiButton.on('click', _ => {
    showVor($step);
  });

  $geopad.switchTool('point');
  $geopad.on('add:point', ({point}: {point: GeoPoint}) => {

    point.lock();

    const p = point.value!;
    const edges: Segment[] = [];

    let shortest = {len: Number.POSITIVE_INFINITY, ind: 0};
    cafePoints.forEach((cafePoint, i) => {
      const newEdge = new Segment(cafePoint, p);
      if (newEdge.length < shortest.len) {
        shortest.len = newEdge.length;
        shortest.ind = i;
      }
      edges.push(newEdge);
    });

    const preLen = $step.model.distLines.length;

    edges.forEach((edge, i) => {
      const stroke = i == shortest.ind ? 'red' : 'black';
      $step.model.distLines.push({edge, stroke, opacity: 1});
      $step.model.distLines = $step.model.distLines.slice();
      if (i != shortest.ind) {
        handleAnim(i + preLen, $step);
      }
    });

    $step.model.dynPoints.push(p);
    $step.model.dynPoints = $step.model.dynPoints.slice();

  });

  $step.model.watch(() => {

    if ($step.model.dynPoints.length == 1 && !$step.model.promptMorePoints) {
      $step.score('one-point');
      $step.model.promptMorePoints == true;
    }

    if ($step.model.dynPoints.length == 5 && !$step.model.showButton) {
      $step.score('five-points');
      // TODO show button
      $step.model.showButton = true;
    }

    if ($step.model.dynPoints.length == 8 && !$step.model.eightPoints) {
      $step.score('eight-points');
      $step.model.eightPoints = true;
    }

    $canvas.clear();

    if ($step.model.vorOpacity != 0) {
      cellPolys.forEach(cellPoly => {
        $canvas.draw(cellPoly, {stroke: 'black', strokeWidth: 2, opacity: $step.model.vorOpacity});
      });
    }

    $step.model.distLines.forEach(({edge, stroke, opacity}: {edge: Segment, stroke: string, opacity: number}) => {
      if (opacity != 0) {
        $canvas.draw(edge, {strokeWidth: 2, stroke, opacity});
      }
    });
  });

}

async function handleAnim(index: number, $step: Step) {
  window.setTimeout((_: any) => {
    const anim = animate((progress, _) => {
      let edges: {edge: Segment, stroke: string, opacity: number}[] = $step.model.distLines;
      const opacity = 1 - progress;
      let e = edges[index];
      e.opacity = opacity;
      edges[index] = e;
      $step.model.distLines = edges.slice();
    }, 500);
  }, 1000);
}

async function showVor($step: Step) {
  const anim = animate((progress, _) => {
    $step.model.vorOpacity = progress;
  }, 2000);
  anim.promise.then(_ => $step.score('voronoi-diagram'));
}

function getX(p: Point) {
  return p.x;
}

function getY(p: Point) {
  return p.y;
}
