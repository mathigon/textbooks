// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {Arc, Circle, clamp, Line, nearlyEquals, Point, Polygon, Polyline, Rectangle, Segment} from '@mathigon/fermat';
import {$N, animate, CanvasView, EventCallback, loadScript, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Geopad, GeoPath, GeoPoint, Path, Polypad, Slider, Step, Tile} from '../shared/types';
import {BinarySwipe} from '../shared/components/binary-swipe'; // import types
import '../shared/components/binary-swipe';  // import component
import '../shared/components/relation';
import {VoronoiStep} from './types';

declare const d3: any;

const cafeLocationPoints = [
  new Point(34, 200),
  new Point(90, 171),
  new Point(99, 384),
  new Point(285, 180),
  new Point(295, 346),
  new Point(316, 209),
  new Point(343, 276),
  new Point(345, 46),
  new Point(368, 146),
  new Point(373, 252),
  new Point(388, 333),
  new Point(396, 170),
  new Point(415, 232),
  new Point(430, 103),
  new Point(449, 245),
  new Point(477, 30)
];

const voronoiColours = ['3c91e6', 'ff6b6b', 'ffe45e', '4ecdc4', '81366f', 'c93818', 'e2c312', '6bab90', 'e4533a'].map(c => '#' + c);

export async function voronoi1($step: VoronoiStep) {

  await loadScript('/resources/shared/vendor/d3-delaunay.min.js');

  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $voronoiButton = $step.$('button.show-voronoi')!;
  const bounds = [0, 0, $canvas.canvasWidth, $canvas.canvasHeight];

  $step.model.dynPoints = [];
  $step.model.vorOpacity = 0;
  $step.model.cells = [];

  cafeLocationPoints.forEach(locationPoint => {
    $geopad.drawPoint(locationPoint, {classes: 'red', interactive: false});
  });

  $step.model.cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  $voronoiButton.on('click', () => {
    showVor($step);
  });

  $geopad.$svg.on('mousemove', e => {
    $step.model.cells = $step.model.cells.map(cell => {
      const over = cell.poly.contains(new Point(e.offsetX, e.offsetY));
      return {...cell, over};
    });
  });

  $geopad.switchTool('point');
  $geopad.on('add:point', ({point}: {point: GeoPoint}) => {

    $step.model.dynPoints.push({gPoint: point, dlOpacity: 1});
    $step.model.dynPoints = $step.model.dynPoints.slice();

    handleAnim($step.model.dynPoints.length - 1, $step);

  });

  $step.model.watch(() => {

    const dynPoints = $step.model.dynPoints;

    if (dynPoints.length == 1 && !$step.model.promptMorePoints) {
      $step.score('one-point');
      $step.model.promptMorePoints = true;
    }

    if (dynPoints.length == 5 && !$step.model.showButton) {
      $step.score('five-points');
      $step.model.showButton = true;
    }

    if (dynPoints.length == 8 && !$step.model.eightPoints) {
      $step.score('eight-points');
      $step.model.eightPoints = true;
    }

    $canvas.clear();

    const cells = $step.model.cells;
    if ($step.model.vorOpacity != 0) {
      cells.forEach((cell, i) => {
        const opacity = cell.over ? $step.model.vorOpacity / 2 : $step.model.vorOpacity / 3;
        $canvas.draw(
            cell.poly,
            {
              fill: voronoiColours[i % 9],
              stroke: 'black',
              strokeWidth: 2,
              opacity
            }
        );
      });
    }

    dynPoints.forEach(({gPoint, dlOpacity}) => {

      const edges: Segment[] = [];

      let shortest = {len: Number.POSITIVE_INFINITY, ind: 0};

      cafeLocationPoints.forEach((locationPoint, i) => {
        const newEdge = new Segment(locationPoint, gPoint.value!);
        if (newEdge.length < shortest.len) {
          shortest = {len: newEdge.length, ind: i};
        }
        edges.push(newEdge);
      });

      edges.forEach((edge, i) => {
        const stroke = i == shortest.ind ? 'red' : 'black';
        const strokeWidth = i == shortest.ind ? 2 : 1;
        const opacity = i == shortest.ind ? 1 : dlOpacity;
        if (opacity != 0) {
          $canvas.draw(edge, {stroke, strokeWidth, opacity});
        }
      });
    });
  });
}

async function handleAnim(index: number, $step: VoronoiStep) {
  window.setTimeout((_: any) => {
    const _anim = animate((progress, _) => {
      const dlOpacity = 1 - progress;
      const dp = $step.model.dynPoints;
      dp[index] = {...dp[index], dlOpacity};
      $step.model.dynPoints = dp.slice();
    }, 500);
  }, 1000);
}

async function showVor($step: VoronoiStep) {
  const anim = animate((progress, _) => {
    $step.model.vorOpacity = progress;
  }, 2000);
  anim.promise.then(_ => $step.score('voronoi-diagram'));
}

export async function voronoi2($step: VoronoiStep) {

  await loadScript('/resources/shared/vendor/d3-delaunay.min.js');

  const $geopad = $step.$('x-geopad') as Geopad;

  const bounds = [0, 0, $geopad.innerWidth, $geopad.innerHeight];
  const cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  cells.forEach((cell, i) => {
    let options = {};
    if (i == 12) {
      options = {class: 'triangle-cell'};
    }
    const $cell = $N('path', options, $geopad.$paths) as SVGView;
    $cell.css({fill: voronoiColours[i % 9], stroke: 'black', 'stroke-width': '2px'});
    $cell.draw(cell.poly);
  });


  let selectedEdge = -1;
  let edgeChosen = false;
  const tri = cells[12].poly;
  tri.edges.slice(0, 3).forEach((edge, i) => {
    const edgePath = $geopad.drawPath(edge);
    edgePath.$el.css({'stroke-width': '4px', color: '#000000'});
    // [TODO]: Replace with stylesheet-based css?
    edgePath.$el.on('mouseenter', () => {
      if (selectedEdge != i) {
        edgePath.$el.css({color: '#ffffff'});
      }
    });
    edgePath.$el.on('mouseleave', () => {
      if (selectedEdge != i) {
        edgePath.$el.css({color: '#000000'});
      }
    });
    edgePath.$el.on('click', () => {
      if (!edgeChosen) {
        edgeChosen = true;
        edgePath.$el.css({color: '#ff0000'});
        selectedEdge = i;
        edgePath.setLabel(edge.length.toFixed(2).toString());
        $step.score('side-selected');

        const pointsEq = (a: Point, b: Point) => {
          const precision = 0.001;
          return nearlyEquals(a.x, b.x, precision) && nearlyEquals(a.y, b.y, precision);
        };
        const heightPoint = tri.points.filter(point => !pointsEq(point, edge.p1) && !pointsEq(point, edge.p2)).pop()!;
        const height = (new Segment(heightPoint, edge.project(heightPoint))).length;
        const heightLine = edge.parallel(heightPoint);
        const heightSegment = new Segment(heightLine.project(edge.p1), heightLine.project(edge.p2));
        const heightPath = $geopad.drawPath(heightSegment);
        heightPath.$el.hide();
        heightPath.$el.css({color: '#000000', 'stroke-dasharray': '6'});

        $step.model.nearby = false;
        $geopad.switchTool('line');
        let p: GeoPath;
        let cb: EventCallback;
        $geopad.on('begin:path', ({path, _}: {path: GeoPath, _: any}) => {
          p = path;
          cb = _ => handlePathing(path, edgePath, heightPath, height, () => $step.model.nearby = true, () => $step.model.nearby = false);
          path.$parent.on('mousemove', cb);
        });
        $geopad.on('add:path', _ => {
          $geopad.off('mousemove', cb);
          if ($step.model.nearby) {
            $step.score('height-drawn');
            $step.addHint('correct');
            const p1 = (p.value as Segment).p1;
            const p2 = heightLine.project(p1);
            p.components[0].setValue(p1);
            p.components[1].setValue(p2);
            p.setLabel(height.toFixed(2).toString());
          } else {
            p.components.forEach(c => c.delete());
            p.delete();
            heightPath.$el.hide();
            $step.addHint('incorrect');
          }
        });
      }
    });
  });

  $geopad.showLabels = true;
}

function handlePathing(path: GeoPath, base: GeoPath, heightPath: GeoPath, height: number, whenClose: VoidFunction, whenFar: VoidFunction) {
  const pathSegment = path.value as Segment;
  const angleRange = 1 * (Math.PI / 180);
  const correctAngle = (base.value as Segment).perpendicular(pathSegment.p1).angle % Math.PI;
  const pathAngle = pathSegment.angle % Math.PI;
  const perpendicular = pathAngle > correctAngle - angleRange && pathAngle < correctAngle + angleRange;
  if (perpendicular) {
    path.$el.css({color: 'red'});
  } else {
    path.$el.css({color: 'blue'});
  }

  const heightRange = 10;
  const atHeight = pathSegment.length > height - heightRange && pathSegment.length < height + heightRange;
  if (atHeight) {
    heightPath.$el.show();
  } else {
    heightPath.$el.hide();
  }

  if (perpendicular && atHeight) {
    whenClose();
  } else {
    whenFar();
  }
}

export async function voronoi3($step: VoronoiStep) {

  const $geopad = $step.$('x-geopad') as Geopad;

  const bounds = [0, 0, $geopad.innerWidth, $geopad.innerHeight];
  const cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  cells.forEach((cell, i) => {
    let options = {};
    if (i == 6) {
      options = {class: 'four-sided'};
    } else if (i == 3) {
      options = {class: 'five-sided'};
    } else if (i == 5) {
      options = {class: 'six-sided'};
    }
    const $cell = $N('path', options, $geopad.$paths) as SVGView;
    $cell.css({fill: voronoiColours[i % 9], stroke: 'black', 'stroke-width': '2px'});
    $cell.draw(cell.poly);
  });
}

function getVoronoiPolys(bounds: number[]) {
  const dt = d3.Delaunay.from(cafeLocationPoints, getX, getY);
  const vor = dt.voronoi(bounds);

  const cellsRaw: number[][][] = Array.from(vor.cellPolygons());

  return cellsRaw.map(cellRaw => {
    const cellPoints = cellRaw.map(pointRaw => {
      return new Point(...pointRaw);
    });
    return new Polygon(...cellPoints);
  });
}

function getX(p: Point) {
  return p.x;
}

function getY(p: Point) {
  return p.y;
}

export function sortPolygons($step: Step) {

  const $sort = $step.$('x-binary-swipe') as BinarySwipe;

  $sort.on('correct', comment => $step.addHint(comment, {class: 'correct'}));
  $sort.on('incorrect', ({hint}) => $step.addHint(hint, {class: 'incorrect'}));
  $sort.on('complete', () => {
    $step.score('cards-sorted');
  });
}

export async function populations($step: Step) {

  await loadScript('/resources/shared/vendor/d3-delaunay.min.js');

  const $geopad = $step.$('x-geopad.voronoi-1') as Geopad;

  const cells = getVoronoiPolys([0, 0, 600, 400]).map((poly, i) => {
    return {poly, color: voronoiColours[i % 9]};
  });
  const pentagon = cells[8];
  cells[8] = cells.pop()!;
  cells.push(pentagon);
  cells.forEach((cell, i) => {
    let options = {};
    let css: Record<string, any> = {fill: cell.color, stroke: 'black', 'stroke-width': '2px'};
    if (i == cells.length - 1) {
      options = {class: 'population-pentagon'};
      css = {fill: cell.color, stroke: 'white', 'stroke-width': '3px'};
    }
    const $cell = $N('path', options, $geopad.$paths) as SVGView;
    $cell.css(css);
    $cell.draw(cell.poly);
  });
}

export function polygonNames($step: Step) {
  const $rel = $step.$('x-relation')!;
  $rel.on('correct', comment => $step.addHint(comment, {class: 'correct'}));
  $rel.on('incorrect', () => $step.addHint('incorrect'));
  $rel.on('complete', () => $step.score('names-matched'));
}

export function flags($step: Step) {
  const $rel = $step.$('x-relation')!;

  $rel.on('correct', comment => $step.addHint(comment, {class: 'correct'}));
  $rel.on('incorrect', () => $step.addHint('incorrect'));
  $rel.on('complete', () => $step.score('flags-matched'));
}

export function polyVerts($step: Step) {
  const $geopads = $step.$$('x-geopad') as Geopad[];

  const pointsMoved: {[key: string]: boolean}[] = [];

  const atLeastTwoMoved = (points: {[key: string]: boolean}) => {
    return Object.values(points).filter((pv: boolean) => pv == true).length > 1;
  };

  let doneMoving = false;

  $geopads.forEach(($geopad, i) => {

    const p: {[key: string]: boolean} = {};

    $geopad.points.forEach(point => {
      p[point.name] = false;
      point.$el.on('mousemove', (e: MouseEvent) => {

        // When mousemove has been fired AND e.buttons == 1 (left mouse button is down), this means we are dragging
        if (e.buttons == 1) {
          pointsMoved[i][point.name] = true;
          if (pointsMoved.every(atLeastTwoMoved) && !doneMoving) {
            doneMoving = true;
            $step.score('verts-moved');
          }
        }
      });
    });

    pointsMoved.push(p);
  });
}

export function simpleTangram($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  $polypad.$svg.setAttr('viewBox', '0 0 425 425');
  $polypad.canDelete = $polypad.canCopy = false;

  /*
    Tile indices key:
    0: Large pink triangle
    1: Large blue triangle
    2: Green square
    3: Orange parallelogram
    4: Small red triangle
    5: Small seafoam triangle
    6: Medium purple triangle
  */

  const tiles = [[5, 1, -90], [5, 9, 0], [8, 3, 0], [-1, 6, 0], [-1, -2, -90],
    [-1, 2, 0], [9, -2, 90]];  // initial [x, y, rot]

  const baseOffset = 110;

  for (const [i, t] of tiles.entries()) {
    const tile = $polypad.newTile('tangram', `${i}`);
    tile.setPosition(new Point(tangramScale(t[0], baseOffset), tangramScale(t[1], baseOffset)));
    tile.setRotation(t[2]);
  }

  let completed = false;
  $polypad.on('move-selection rotate-selection', () => {
    if (tangramComplete($polypad.tiles, baseOffset) && !completed) {
      $step.score('tangram-complete');
      $step.addHint('correct');
      // Without this the hint will fire a bunch of times
      completed = true;
    }
  });
}

function tangramComplete(tiles: Set<Tile>, baseOffset: number) {

  const correctStates =
    [[2, 4, 270], [4, 2, 0], [6, 4, 0], [3, 7, 0], [7, 2, 270], [4, 5, 0], [6, 6, 90]]
        .map(triple =>
          [tangramScale(triple[0], baseOffset), tangramScale(triple[1], baseOffset), triple[2]]);

  // Ensure that rotation values are within the 0-360 range for comparison purposes
  const currentStates = [...tiles].map(tile => {
    let rot = 0;
    if (tile.rot > 0) {
      rot = tile.rot % 360;
    } else if (tile.rot < 0) {
      const tempRot = tile.rot % -360;
      const diffRot = 360 + tempRot;
      rot = diffRot % 360;
    }
    return [tile.posn.x, tile.posn.y, rot];
  });

  // Set up helper for checking whether each shape is within +/- 15 px of its 'correct' position
  const ranges = correctStates.map(state =>
    [[state[0] - 15, state[0] + 15], [state[1] - 15, state[1] + 15]]
  );

  let closeEnough = true;

  currentStates.forEach((state, i) => {
    if (
      state[0] < ranges[i][0][0] ||
      state[0] > ranges[i][0][1] ||
      state[1] < ranges[i][1][0] ||
      state[1] > ranges[i][1][1] ||
      state[2] != correctStates[i][2]
    ) {
      closeEnough = false;
    }
  });

  return closeEnough;

}

function tangramScale(val: number, shift = 0) {
  return shift + val * 25;
}

const paradoxData = {
  polys: [
  // Large red triangle
    [[0, 0], [8, 0], [8, -3]],
    // Orange tetronimo
    [[0, 0], [5, 0], [5, -2], [3, -2], [3, -1], [0, -1]],
    // Green tetronimo
    [[0, 0], [3, 0], [3, -1], [5, -1], [5, -2], [0, -2]],
    // Small blue triangle
    [[0, 0], [5, 0], [5, -2]]
  ].map(poly => poly.map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y)))),
  polyColours: ['red', 'orange', 'green', 'blue'],
  finalRel: [
  // Large red triangle
    [0, 5],
    // Orange tetronimo
    [8, 5],
    // Green tetronimo
    [8, 4],
    // Small blue triangle
    [8, 2]
  ].map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y))),
  polyOrigins:
    [[1, 4], [4, 8], [11, 4], [11, 8]]
        .map(([x, y]: number[]) =>
          new Point(tangramScale(x), tangramScale(y))),
  nextRelative: [[5, 3], [8, 5], [5, 5], [0, 5]].map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y))),
  outlineStr:
    getTangramPolystr(
        [[0, 0], [13, 0], [13, -5]].map(
            ([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y))
        )
    ),
  viewWidth: 425,
  viewHeight: 225,
  get baseWidth() {
    return this.viewWidth / 25;
  },
  get baseHeight() {
    return this.viewHeight / 25;
  }
};

export function currysParadox1($step: Step) {
  const finalPositions = paradoxData.finalRel.map(p => p.shift(tangramScale(2), tangramScale(12)));

  const viewWidth = 425;
  const viewHeight = 450;

  const $polypad = $step.$('.triangle-tangram > x-polypad') as Polypad;
  polypadPrep($polypad, viewWidth, viewHeight);

  const $bg = $step.$('svg.solution-outline')! as SVGParentView;
  $bg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);

  paradoxData.polys.forEach((polyVals, i) => {
    const $bgPath = $N('path', {}, $bg) as SVGView;
    const poly = (new Polygon(...polyVals)).translate(finalPositions[i]);
    $bgPath.draw(poly);
  });

  paradoxData.polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    if (index == 0) {
      tile.$el.addClass('red-tri');
    }
    tile.setColour(paradoxData.polyColours[index]);
    tile.setPosition(paradoxData.polyOrigins[index]);
  });

  let done = false;
  $polypad.on('move-selection', () => {
    const allPositioned = [...$polypad.tiles.values()].every((tile, index) =>
      tile.posn.equals(finalPositions[index])
    );
    if (allPositioned && !done) {
      done = true;
      $bg.addClass('hidden');
      $step.addHint('correct');
      $step.score('triangle-complete');
    }
  });

  const nextPoints = paradoxData.nextRelative.map(p => p.shift(tangramScale(2), tangramScale(12)));

  const $rearrangeSlider = $step.$('x-slider.rearrange-triangle') as Slider;
  const tiles = [...$polypad.tiles];
  const $tiles = tiles.map(t => t.$el);
  let rearranged = false;
  let slid = 0;
  $rearrangeSlider.on('move', n => {
    const progress = n / 1000;

    $tiles[0].setTransform(Point.interpolate(tiles[0].posn, nextPoints[0], progress));
    $tiles[1].setTransform(Point.interpolate(tiles[1].posn, nextPoints[1], progress));
    $tiles[2].setTransform(Point.interpolate(tiles[2].posn, nextPoints[2], progress));
    $tiles[3].setTransform(Point.interpolate(tiles[3].posn, nextPoints[3], progress));

    if (progress == 1 && !rearranged) {
      rearranged = true;
      $step.score('triangle-rearranged');
    }

    if (rearranged) {
      slid = slid + 1;
    }

    if (slid > 60) {
      $step.score('triangle-slid');
    }
  });
}

function polypadPrep($polypad: Polypad, viewWidth: number, viewHeight: number) {
  $polypad.$svg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);
  $polypad.canDelete = $polypad.canCopy = false;
  $polypad.setGrid('square-grid');
}

function getTangramPolystr(polyGridPositions: Point[]) {
  return polyGridPositions.map(p => p.x + ' ' + p.y).join(',');
}

export function currysParadox2($step: Step) {

  const $polypad = $step.$('.tangram-polys > x-polypad') as Polypad;
  polypadPrep($polypad, 425, 225);

  paradoxData.polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setPosition(paradoxData.polyOrigins[index]);
  });
}

export function currysParadox3($step: Step) {

  const $polypad = $step.$('.zoom-1 > x-polypad') as Polypad;
  polypadPrep($polypad, paradoxData.viewWidth, paradoxData.viewHeight);

  paradoxData.polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setPosition(paradoxData.finalRel[index].shift(tangramScale(1), tangramScale(2)));
  });
  const outlineTile = $polypad.newTile('polygon', paradoxData.outlineStr);
  outlineTile.setPosition(new Point(tangramScale(1), tangramScale(7)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});

  const $zoomSlider = $step.$('x-slider.zoom-s-1') as Slider;
  let zoomed1 = false;
  $zoomSlider.on('move', n => {

    if (n > 950 && !zoomed1) {
      zoomed1 = true;
      $step.score('first-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $polypad.$svg.setAttr('viewBox', `${9 * (tangramScale(1) - factor)} ${4 * (tangramScale(1) - factor)} ${paradoxData.baseWidth * factor} ${paradoxData.baseHeight * factor}`);
    [...$polypad.tiles.values()].forEach(tile => {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    });
    $outline.css({'stroke-width': `${scale * 4}px`});
  });
}

export function currysParadox4($step: Step) {
  const $polypad = $step.$('.triangle-ref > x-polypad') as Polypad;
  polypadPrep($polypad, paradoxData.viewWidth, paradoxData.viewHeight);

  paradoxData.polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setPosition(paradoxData.finalRel[index].shift(tangramScale(1), tangramScale(2)));
    tile.$el.addClass('paradox-poly');
  });
}

export function currysParadox5($step: Step) {

  const $polypad = $step.$('.zoom-2 > x-polypad') as Polypad;
  polypadPrep($polypad, paradoxData.viewWidth, paradoxData.viewHeight);

  paradoxData.polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setPosition(paradoxData.nextRelative[index].shift(tangramScale(1), tangramScale(2)));
  });
  const outlineTile = $polypad.newTile('polygon', paradoxData.outlineStr);
  outlineTile.setPosition(new Point(tangramScale(1), tangramScale(7)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});

  const $zoomSlider = $step.$('x-slider.zoom-s-2') as Slider;
  let zoomed2 = false;
  $zoomSlider.on('move', n => {

    if (n > 950 && !zoomed2) {
      zoomed2 = true;
      $step.score('second-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $polypad.$svg.setAttr('viewBox', `${6 * (tangramScale(1) - factor)} ${5 * (tangramScale(1) - factor)} ${paradoxData.baseWidth * factor} ${paradoxData.baseHeight * factor}`);
    [...$polypad.tiles.values()].forEach(tile => {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    });
    $outline.css({'stroke-width': `${scale * 4}px`});
  });
}

export function currysParadox6($step: Step) {
  const $polypad = $step.$('.paradox-comparison > x-polypad') as Polypad;
  polypadPrep($polypad, 425, 475);

  paradoxData.polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);

    const tile1 = $polypad.newTile('polygon', polyStr);
    tile1.setColour(paradoxData.polyColours[index]);
    tile1.setPosition(paradoxData.finalRel[index].shift(tangramScale(1), tangramScale(1)));

    const tile2 = $polypad.newTile('polygon', polyStr);
    tile2.setColour(paradoxData.polyColours[index]);
    tile2.setPosition(paradoxData.nextRelative[index].shift(tangramScale(1), tangramScale(7)));
  });
  const outlineTile = $polypad.newTile('polygon', paradoxData.outlineStr);
  outlineTile.setPosition(new Point(tangramScale(1), tangramScale(18)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});
}

export function wheels($step: Step) {
  const $svg = $step.$('svg') as SVGParentView;

  const wheels = [
    {a: 'wheel-1', b: 50},
    {a: 'wheel-2', b: 75},
    {a: 'wheel-3', b: 100},
    {a: 'wheel-4', b: 125}
  ].map(({a, b}) => {
    return {$el: $svg.$('.' + a) as SVGView, radius: b / 2};
  });

  wheels.forEach(wheel => {
    const startTopLeft = new Point(wheel.$el.bounds.left - $svg.bounds.left, wheel.$el.bounds.top - $svg.bounds.top);
    const startBottom = startTopLeft.shift(wheel.radius, (wheel.radius * 2));

    const outlineColor = 'red';
    const outlineWidth = '3px';

    const $distLine = $N('path', {}, $svg) as SVGView;
    $distLine.css({stroke: outlineColor, 'stroke-width': outlineWidth});

    const $outline = $N('path', {}, $svg) as SVGView;
    $outline.css({stroke: outlineColor, 'stroke-width': outlineWidth, fill: 'none'});

    const outlineInitCenter = startBottom.shift(0, -wheel.radius);
    const initOutline = new Circle(outlineInitCenter, wheel.radius);

    $outline.draw(initOutline);
    slide(wheel.$el, {
      move: (posn, start, _) => {
        const translate = new Point(clamp(posn.subtract(start).x, 0, 2 * Math.PI * wheel.radius), 0);
        const rotate = translate.x / wheel.radius;

        wheel.$el.setTransform(translate, rotate);

        const distance = translate.x + startBottom.x;
        $distLine.draw(new Segment(startBottom, new Point(distance, startBottom.y)));

        if (translate.x > 0) {
          const outlineCenter = outlineInitCenter.translate(translate);
          const outlineStart = outlineCenter.shift(0, wheel.radius);
          const outline = new Arc(outlineCenter, outlineStart, -rotate);
          $outline.draw(outline.rotate(rotate, outlineCenter));
        } else {
          $outline.draw(initOutline);
        }
      }
    });

  });
}

export function encasementEstimation($step: Step) {
  const $svg = $step.$('figure .tire-circumference')!.$('svg') as SVGParentView;
  const $shapeName = $step.$('span.shape-name')!;
  const targetBounds = new Rectangle(new Point(185, 33), 230, 230); // Approx size + loc of tire
  let center = new Point(0, 0);
  let apothem = 0;
  const onComplete = (c: Point, a: number) => {
    $step.score('tire-encapsulated');
    $step.addHint('correct');
    center = c;
    apothem = a;
  };
  const strokeWidth = 3;
  const box = new ResizeableSquare($svg, 100, new Point(15, 15), strokeWidth, targetBounds, onComplete);

  const $shapeDisp = $N('path', {}, $svg) as SVGView;
  $shapeDisp.css({fill: 'none', stroke: 'lime', 'stroke-width': `${strokeWidth}px`});
  const $slider = $step.$('x-slider') as Slider;
  $slider.on('move', n => {
    box.hide();
    const sides = n + 4;
    const radius = apothem / Math.cos(Math.PI / sides);
    $shapeDisp.draw(Polygon.regular(sides, radius).translate(center));
    switch (sides) {
      case 4:
        $shapeName.text = 'square';
        break;
      case 5:
        $shapeName.text = 'pentagon';
        break;
      case 6:
        $shapeName.text = 'hexagon';
        break;
      case 7:
        $shapeName.text = 'heptagon';
        break;
      case 8:
        $shapeName.text = 'octagon';
        $step.score('eight-sides');
        break;
    }
  });
}

class ResizeableSquare {
  private $edges: SVGView[] = [];
  private $box: SVGView;
  private poly: Polygon;
  private corners: {rect: Rectangle, $el: SVGView}[] = [];
  private grabDelta: Point;
  private topLeft: Point;
  private isComplete: boolean;

  constructor(
    private $svg: SVGParentView,
    initSize: number,
    initPos: Point,
    strokeWidth: number,
    private targetBounds: Rectangle,
    private onComplete: (center: Point, apothem: number) => void
  ) {

    this.isComplete = false;

    this.poly = new Rectangle(initPos, initSize, initSize).polygon;

    this.edges.forEach(edge => {
      const $el = $N('path', {}, $svg) as SVGView;
      $el.css({'stroke-width': `${strokeWidth}px`, stroke: 'black'});
      $el.draw(edge);
      this.$edges.push($el);
    });

    this.$box = $N('path', {}, $svg) as SVGView;
    this.$box.css({fill: 'rgba(0, 0, 0, 0)'});
    this.$box.draw(this.poly);

    this.grabDelta = new Point(0, 0);
    this.topLeft = new Point(0, 0);

    const cornerSize = 10;
    this.poly.points.forEach((point, index) => {

      const pos = point.shift(-cornerSize / 2, -cornerSize / 2);

      const cornerRect = new Rectangle(pos, cornerSize, cornerSize);
      const $corner = $N('path', {}, $svg) as SVGView;
      $corner.css({fill: 'rgba(0, 0, 0, 0)'});

      let dir = '';
      if (index % 2 == 0) {
        $corner.addClass('nwse-corner');
        dir = 'nwse';
      } else {
        $corner.addClass('nesw-corner');
        dir = 'nesw';
      }

      this.corners.push({rect: cornerRect, $el: $corner});
      $corner.draw(cornerRect);

      slide($corner, {
        move: (posn: Point, _start, last: Point) => {

          const delta = posn.subtract(last);
          this.corners[index].rect = this.corners[index].rect.translate(delta);
          $corner.draw(this.corners[index].rect);

          let scaleLine = new Line(this.poly.points[index], this.poly.points[index].translate(new Point(10, 0)));

          if (dir == 'nwse') {
            scaleLine = scaleLine.rotate(Math.PI / 4, this.poly.points[index]);
          } else if (dir == 'nesw') {
            scaleLine = scaleLine.rotate(-Math.PI / 4, this.poly.points[index]);
          }

          const scalePoint = scaleLine.project(this.corners[index].rect.p);
          const pointDelta = scalePoint.subtract(this.poly.points[index]);

          const aIndex = (index + 3) % 4;
          const bIndex = (index + 1) % 4;
          let aNext = this.poly.points[aIndex];
          let bNext = this.poly.points[bIndex];

          this.poly.points[index] = this.poly.points[index].translate(pointDelta);

          switch (index) {
            case 0: // a is below, b is to the right
            case 2: // a is above, b is to the left
              aNext = new Point(this.poly.points[index].x, aNext.y);
              bNext = new Point(bNext.x, this.poly.points[index].y);
              break;
            case 1: // a is to the left, b is below
            case 3: // a is to the right, b is above
              aNext = new Point(aNext.x, this.poly.points[index].y);
              bNext = new Point(this.poly.points[index].x, bNext.y);
              break;
          }

          this.poly.points[aIndex] = aNext;
          this.poly.points[bIndex] = bNext;
          this.$box.draw(this.poly);

          const edges = this.edges;
          this.$edges.forEach(($edge, index) => $edge.draw(edges[index]));

          this.handleBounds();

        },
        end: () => {

          this.poly.points.forEach((_, index2) => {
            const cornerRect =
              this.corners[index2].rect
                  .translate(
                      this.poly.points[index2].subtract(this.corners[index2].rect.p)
                  )
                  .shift(-cornerSize / 2, -cornerSize / 2);
            this.corners[index2].rect = cornerRect;
            this.corners[index2].$el.draw(cornerRect);
          });

          if (this.isComplete) {
            this.onComplete(this.center, this.apothem);
          }

        }
      });
    });

    slide(this.$box, {
      start: (posn: Point) => {
        this.topLeft = new Point(this.$box.bounds.left - this.$svg.bounds.left, this.$box.bounds.top - this.$svg.bounds.top);
        this.grabDelta = posn.subtract(this.topLeft);
      },
      move: (posn: Point, _start, last: Point) => {
        const newPos = posn.subtract(this.topLeft).subtract(this.grabDelta);

        this.$box.translate(newPos.x, newPos.y);
        this.$edges.forEach($edge => $edge.translate(newPos.x, newPos.y));

        this.poly = this.poly.translate(posn.subtract(last));

        this.handleBounds();
      },
      end: (last: Point, start: Point) => {
        this.$box.setTransform(new Point(0, 0));
        this.$box.draw(this.poly);

        const edges = this.edges;
        this.$edges.forEach(($edge, index) => {
          $edge.setTransform(new Point(0, 0));
          $edge.draw(edges[index]);
        });

        this.poly.points.forEach((_point, index) => {
          this.corners[index].rect = this.corners[index].rect.translate(last.subtract(start));
          this.corners[index].$el.draw(this.corners[index].rect);
        });

        if (this.isComplete) {
          this.onComplete(this.center, this.apothem);
        }
      }
    });
  }

  handleBounds() {
    let complete = true;
    const closeness = 2;
    this.edges.forEach((edge, index) => {
      switch (index) {
        case 0: // top
          if (nearlyEquals(edge.p1.y, this.targetBounds.points[0].y, closeness)) {
            this.$edges[0].css({stroke: 'lime'});
          } else {
            this.$edges[0].css({stroke: 'black'});
            complete = false;
          }
          break;
        case 1: // right
          if (nearlyEquals(edge.p1.x, this.targetBounds.points[1].x, closeness)) {
            this.$edges[1].css({stroke: 'lime'});
          } else {
            this.$edges[1].css({stroke: 'black'});
            complete = false;
          }
          break;
        case 2: // bottom
          if (nearlyEquals(edge.p1.y, this.targetBounds.points[2].y, closeness)) {
            this.$edges[2].css({stroke: 'lime'});
          } else {
            this.$edges[2].css({stroke: 'black'});
            complete = false;
          }
          break;
        case 3: // left
          if (nearlyEquals(edge.p1.x, this.targetBounds.points[3].x, closeness)) {
            this.$edges[3].css({stroke: 'lime'});
          } else {
            this.$edges[3].css({stroke: 'black'});
            complete = false;
          }
          break;
      }
    });
    this.isComplete = complete;
  }

  get edges() {
    return this.poly.points.map((point, index) => new Segment(point, this.poly.points[(index + 1) % 4]));
  }

  get apothem() {
    return this.poly.edges[0].length / 2;
  }

  get center() {
    return (new Line(this.poly.points[0], this.poly.points[2])).midpoint;
  }

  hide() {
    this.$box.remove();
    this.$edges.forEach($edge => $edge.remove());
  }

}

export function radiiDiameters($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const circle = new Circle(new Point(200, 200), 180);
  $geopad.drawPoint(circle.c, {interactive: false});
  $geopad.drawPath(circle, {interactive: true});
  $geopad.switchTool('line');
  let $diameterTarget: GeoPoint | null = null;
  let radii = 0;
  let diameters = 0;
  $geopad.on('begin:path', ({start}: {path: Path, start: GeoPoint}) => {
    const startPos = start.value!;
    if (nearlyEquals(startPos.subtract(circle.c).length, circle.r)) {
      const diamTarget = startPos.rotate(Math.PI, circle.c);
      $diameterTarget = $geopad.drawPoint(diamTarget, {interactive: false});
    }
  });
  $geopad.on('add:path', ({path}: {path: GeoPath}) => {
    const cand = path.value as Line;
    const d1 = cand.p1.subtract(circle.c).length;
    const d2 = cand.p2.subtract(circle.c).length;
    if (nearlyEquals(d1, circle.r) && nearlyEquals(d2, circle.r) && nearlyEquals(cand.length, circle.r * 2)) {
      // drew a diameter
      diameters++;
      $step.addHint('correct');
    } else if ((nearlyEquals(d1, circle.r) && nearlyEquals(d2, 0)) || (nearlyEquals(d2, circle.r) && nearlyEquals(d1, 0))) {
      // drew a radius
      radii++;
      $step.addHint('correct');
      $diameterTarget!.delete();
    } else {
      $step.addHint('incorrect');
      path.delete();
      if (nearlyEquals(d1, 0) || nearlyEquals(d2, 0)) {
        $geopad.drawPoint(circle.c, {interactive: false});
      }
      path.components.forEach(c => c.delete());
      $diameterTarget!.delete();
    }
    if (diameters > 2 && radii > 2) {
      $step.score('radii-diameters-drawn');
    }
  });
}

export function diameterCircumference($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const colours = ['red', 'blue', 'green'];
  const drawn: { [x: string]: boolean; } = {};
  colours.forEach(c => drawn[c] = false);

  const circle = new Circle(new Point(200, 200), 160);
  $geopad.drawPath(circle);

  const lineY = circle.c.y + circle.r + 12.5;
  const lineStart = new Point(circle.c.x - circle.r, lineY);
  const lineEnd = new Point(circle.c.x + circle.r, lineY);
  const diameterLine = new Segment(lineStart, lineEnd);
  $geopad.drawPath(diameterLine);

  $step.model['progress'] = new Segment(lineStart.shift(0, 7.5), lineStart.shift(0, 7.5));
  const progress = $geopad.drawPath('progress');
  progress.$el.css({stroke: 'none'});

  let pending: string | undefined;

  slide($geopad.$svg, {
    start: (p: Point) => {
      pending = colours.shift();
      if (!pending) return;
      $step.model[pending] = new Polyline(p);
      // [TODO]: Add some documentation about this approach (auto-listening to model property)
      $geopad.drawPath(pending, {classes: pending});
      progress.$el.css({stroke: pending});
    },
    move: (p: Point) => {
      if (!pending) return;
      const len = length($step.model[pending]);
      if (len <= circle.r * 2) {
        if (Math.abs(Point.distance(p, circle.c) - circle.r) > 20) {
          $step.addHint('Make sure you are drawing over the circle', {class: 'incorrect'});
        }
        $step.model[pending] = new Polyline(...$step.model[pending].points, p);
        $step.model['progress'] = new Segment(lineStart.shift(0, 7.5), lineStart.shift(len, 7.5));
      } else {
        $step.model['progress'] = new Segment(lineStart.shift(0, 7.5), lineEnd.shift(0, 7.5));
        drawn[pending] = true;
        pending = undefined;
      }
    },
    end: () => {
      if (Object.values(drawn).every(v => v == true)) {
        $step.score('diameters-wrapped');
        $step.addHint('correct');
      }
    }
  });
}

function length(pl: Polyline) {
  return pl.edges.reduce((totalLength, edge) => {
    return totalLength + edge.length;
  }, 0);
}

export function findingPi($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const $circumference = $step.$('td.circumference')!;
  const $diameter = $step.$('td.diameter')!;
  $geopad.switchTool('line');
  $geopad.on('add:path', ({path}: {path: GeoPath}) => {
    const line = path.value as Line;
    const len = line.length;
    const lenStr = len.toFixed(2);
    path.setLabel(lenStr);
    const circle = new Circle(line.midpoint, len / 2);
    $geopad.drawPath(circle);
    $diameter.text = lenStr;
    $circumference.text = circle.circumference.toFixed(2);
    $step.score('line-drawn');
  });
}

export function circularHighways($step: Step) {
  const $geopadRome = $step.$('x-geopad.rome') as Geopad;

  let romeDrawn = false;
  let romeSketch: GeoPath | null = null;
  let romeCircle = new Circle(new Point(0, 0), 0);

  slide($geopadRome.$svg, {
    start: point => {
      if (!romeDrawn) {
        $step.model['romeSketch'] = new Polyline(point);
        romeSketch = $geopadRome.drawPath('romeSketch');
      }
    },
    move: position => {
      if (!romeDrawn) {
        $step.model['romeSketch'] = new Polyline(...$step.model['romeSketch'].points, position);
      }
    },
    end: () => {
      if (!romeDrawn) {
        romeCircle = new Circle($step.model['romeSketch'].centroid, $step.model['romeSketch'].circumference / (2 * Math.PI));
        $geopadRome.drawPath(romeCircle, {interactive: true});
        $step.score('rome-circle');
        romeSketch?.delete();
        $geopadRome.switchTool('line');
        romeDrawn = true;
      }
    }
  });

  let $romeDiameterTarget: GeoPoint | null = null;
  $geopadRome.on('begin:path', ({start}: {path: Path, start: GeoPoint}) => {
    const startPos = start.value!;
    if (nearlyEquals(startPos.subtract(romeCircle.c).length, romeCircle.r)) {
      const diamTarget = startPos.rotate(Math.PI, romeCircle.c);
      $romeDiameterTarget = $geopadRome.drawPoint(diamTarget, {interactive: false});
    }
  });

  $geopadRome.on('add:path', ({path}: {path: GeoPath}) => {
    const cand = path.value as Line;
    const d1 = cand.p1.subtract(romeCircle.c).length;
    const d2 = cand.p2.subtract(romeCircle.c).length;
    if (nearlyEquals(d1, romeCircle.r) && nearlyEquals(d2, romeCircle.r) && nearlyEquals(cand.length, romeCircle.r * 2)) {
      // drew a diameter
      path.setLabel(`${(path.value as Line).length} km`);
      $step.addHint('correct');
      $step.score('rome-diameter');
    } else {
      $step.addHint('incorrect');
      path.delete();
      path.components.forEach(c => c.delete());
      $romeDiameterTarget!.delete();
    }
  });

  const $geopadMoscow = $step.$('x-geopad.moscow') as Geopad;

  let moscowDrawn = false;
  let moscowSketch: GeoPath | null = null;
  let moscowCircle = new Circle(new Point(0, 0), 0);

  slide($geopadMoscow.$svg, {
    start: point => {
      if (!moscowDrawn) {
        $step.model['moscowSketch'] = new Polyline(point);
        moscowSketch = $geopadMoscow.drawPath('moscowSketch');
      }
    },
    move: position => {
      if (!moscowDrawn) {
        $step.model['moscowSketch'] = new Polyline(...$step.model['moscowSketch'].points, position);
      }
    },
    end: () => {
      if (!moscowDrawn) {
        moscowCircle = new Circle($step.model['moscowSketch'].centroid, $step.model['moscowSketch'].circumference / (2 * Math.PI));
        $geopadMoscow.drawPath(moscowCircle, {interactive: true});
        $step.score('moscow-circle');
        $geopadMoscow.drawPoint(moscowCircle.c, {interactive: false});
        moscowSketch?.delete();
        $geopadMoscow.switchTool('line');
        moscowDrawn = true;
      }
    }
  });

  let $moscowDiameterTarget: GeoPoint | null = null;
  $geopadMoscow.on('begin:path', ({start}: {path: Path, start: GeoPoint}) => {
    const startPos = start.value!;
    if (nearlyEquals(startPos.subtract(moscowCircle.c).length, moscowCircle.r)) {
      const diamTarget = startPos.rotate(Math.PI, moscowCircle.c);
      $moscowDiameterTarget = $geopadMoscow.drawPoint(diamTarget, {interactive: false});
    }
  });

  $geopadMoscow.on('add:path', ({path}: {path: GeoPath}) => {
    const cand = path.value as Line;
    const drewRadius =
      nearlyEquals(cand.length, moscowCircle.r) &&
      (cand.p1.equals(moscowCircle.c) || cand.p2.equals(moscowCircle.c));
    if (drewRadius) {
      // drew a radius
      path.setLabel(`${(path.value as Line).length} km`);
      $step.addHint('correct');
      $step.score('moscow-radius');
    } else {
      $step.addHint('incorrect');
      path.delete();
      path.components.forEach(c => c.delete());
      $moscowDiameterTarget!.delete();
    }
  });

  const $geopadLondon = $step.$('x-geopad.london') as Geopad;

  let londonDrawn = false;
  let londonSketch: GeoPath | null = null;
  let londonCircle = new Circle(new Point(0, 0), 0);

  slide($geopadLondon.$svg, {
    start: point => {
      if (!londonDrawn) {
        $step.model['londonSketch'] = new Polyline(point);
        londonSketch = $geopadLondon.drawPath('londonSketch');
      }
    },
    move: position => {
      if (!londonDrawn) {
        $step.model['londonSketch'] = new Polyline(...$step.model['londonSketch'].points, position);
      }
    },
    end: () => {
      if (!londonDrawn) {
        londonCircle = new Circle($step.model['londonSketch'].centroid, $step.model['londonSketch'].circumference / (2 * Math.PI));
        $geopadLondon.drawPath(londonCircle, {interactive: true});
        $step.score('london-circle');
        londonSketch?.delete();
        $geopadLondon.switchTool('line');
        londonDrawn = true;
      }
    }
  });

  $step.onScore('blank-3 blank-4', () => {
    const diameter = $geopadLondon.drawPath(new Segment(
        new Point(londonCircle.c.x, londonCircle.c.y - londonCircle.r),
        new Point(londonCircle.c.x, londonCircle.c.y + londonCircle.r)
    ));
    diameter.setLabel('54 km');
  });
}
