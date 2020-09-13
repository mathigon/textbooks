// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {Point, Polygon, Segment} from '@mathigon/fermat';
import {$N, animate, CanvasView, loadScript, SVGParentView, SVGView} from '@mathigon/boost';
import {Geopad, GeoPoint, Polypad, Slider, Step, Tile} from '../shared/types';
import {BinarySwipe} from '../shared/components/binary-swipe'; // import types
import '../shared/components/binary-swipe';  // import component
import {Relation} from '../shared/components/relation';
import '../shared/components/relation';
import {VoronoiStep} from './types';

declare const d3: any;

const locationPoints = [
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

export async function voronoi($step: VoronoiStep) {

  await loadScript('/resources/shared/vendor/d3-delaunay.min.js');

  const colors = ['3c91e6', 'ff6b6b', 'ffe45e', '4ecdc4', '81366f', 'c93818', 'e2c312', '6bab90', 'e4533a'].map(c => '#' + c);

  const $canvas = $step.$('canvas.voronoi') as CanvasView;
  const $geopad = $step.$('x-geopad') as Geopad;
  const $voronoiButton = $step.$('button.show-voronoi')!;
  const bounds = [0, 0, $canvas.canvasWidth, $canvas.canvasHeight];

  $step.model.dynPoints = [];
  $step.model.vorOpacity = 0;
  $step.model.cells = [];

  locationPoints.forEach(locationPoint => {
    $geopad.drawPoint(locationPoint, {classes: 'red', interactive: false});
  });

  $step.model.cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  $voronoiButton.on('click', _ => {
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

  $geopad.on('move:point', ({gPoint}: {gPoint: GeoPoint}) => {

    $step.model.dynPoints =
      $step.model.dynPoints.map(dp => {
        if (gPoint.name == dp.gPoint.name) {
          return {...dp, gPoint};
        } else {
          return dp;
        }
      }).slice();

  });

  $step.model.watch(() => {

    if ($step.model.dynPoints.length == 1 && !$step.model.promptMorePoints) {
      $step.score('one-point');
      $step.model.promptMorePoints = true;
    }

    if ($step.model.dynPoints.length == 5 && !$step.model.showButton) {
      $step.score('five-points');
      $step.model.showButton = true;
    }

    if ($step.model.dynPoints.length == 8 && !$step.model.eightPoints) {
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
              fill: colors[i % 9],
              stroke: 'black',
              strokeWidth: 2,
              opacity
            }
        );
      });
    }

    $step.model.dynPoints.forEach(({gPoint, dlOpacity}) => {

      const edges: Segment[] = [];

      let shortest = {len: Number.POSITIVE_INFINITY, ind: 0};

      locationPoints.forEach((locationPoint, i) => {
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

function getVoronoiPolys(bounds: number[]) {
  const dt = d3.Delaunay.from(locationPoints, getX, getY);
  const vor = dt.voronoi(bounds);

  const cellsRaw: number[][][] = Array.from(vor.cellPolygons());

  return cellsRaw.map(cellRaw => {
    const cellPoints = cellRaw.map(pointRaw => {
      return new Point(...pointRaw);
    });
    return new Polygon(...cellPoints);
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
    tile.setPosition(new Point(baseOffset + t[0] * 25, baseOffset + t[1] * 25));
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

export function polygonNames($step: Step) {

  const $shapesNames = $step.$('x-relation.shapes-names') as Relation;
  const $flagsCountries = $step.$('x-relation.flags-countries') as Relation;

  [$shapesNames, $flagsCountries].map($m => {
    $m.on('correct', comment => $step.addHint(comment, {class: 'correct'}));
    $m.on('incorrect', () => $step.addHint('incorrect'));
  });

  $shapesNames.on('complete', () => $step.score('names-matched'));
  $flagsCountries.on('complete', () => $step.score('flags-matched'));

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
            $step.score('points-moved');
          }
        }

      });

    });

    pointsMoved.push(p);

  });

}

const polys = [
  // Large red triangle
  [[0, 0], [8, 0], [8, -3]],
  // Orange tetronimo
  [[0, 0], [5, 0], [5, -2], [3, -2], [3, -1], [0, -1]],
  // Green tetronimo
  [[0, 0], [3, 0], [3, -1], [5, -1], [5, -2], [0, -2]],
  // Small blue triangle
  [[0, 0], [5, 0], [5, -2]]
].map(poly => poly.map(p => p.map(tangramScale)));

const finalRel = [
  // Large red triangle
  [0, 5],
  // Orange tetronimo
  [8, 5],
  // Green tetronimo
  [8, 4],
  // Small blue triangle
  [8, 2]
].map(p => p.map(tangramScale));
const finalPositions = finalRel.map(([x, y]: number[]) => [x + tangramScale(2), y + tangramScale(12)]);

const polyColours = ['red', 'orange', 'green', 'blue'];

export function triangleTangram($step: Step) {
  const $polypad1 = $step.$('.triangle-tangram > x-polypad') as Polypad;
  $polypad1.$svg.setAttr('viewBox', '0 0 425 450');
  $polypad1.canDelete = $polypad1.canCopy = false;
  $polypad1.setGrid('square-grid');

  const $bg = $step.$('svg.solution-outline')! as SVGParentView;
  $bg.setAttr('viewBox', '0 0 425 450');

  polys.forEach((polyVals, i) => {
    const $bgPath = $N('path', {}, $bg) as SVGView;
    const points = polyVals.map(([x, y]: number[]) => new Point(x, y - 2));
    const [x, y] = finalPositions[i];
    const poly = (new Polygon(...points)).shift(x, y);
    $bgPath.draw(poly);
  });

  const origins =
    [[1, 4], [4, 8], [11, 4], [11, 8]]
        .map(([x, y]: number[]) =>
          [tangramScale(x), tangramScale(y)]);

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad1.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(new Point(origins[index][0], origins[index][1]));
  });

  let done = false;
  $polypad1.on('move-selection', () => {
    const allPositioned = [...$polypad1.tiles.values()].every((tile, index) =>
      tile.posn.x == finalPositions[index][0] && tile.posn.y + 2 == finalPositions[index][1]
    );
    if (allPositioned && !done) {
      done = true;
      $bg.addClass('hidden');
      $step.addHint('correct');
      $step.score('triangle-complete');
    }
  });

  const nextRelative = [[5, 3], [8, 5], [5, 5], [0, 5]].map(p => p.map(tangramScale));
  const nextPoints = nextRelative.map(([x, y]: number[]) => new Point(x + tangramScale(2), y + tangramScale(12)));

  const $rearrangeSlider = $step.$('x-slider.rearrange-triangle') as Slider;
  const tiles = [...$polypad1.tiles];
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

  const $polypad2 = $step.$('.tangram-polys > x-polypad') as Polypad;
  $polypad2.$svg.setAttr('viewBox', '0 0 425 225');
  $polypad2.canDelete = $polypad2.canCopy = false;
  $polypad2.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad2.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(new Point(origins[index][0], origins[index][1]));
  });

  const $zoomPolypad = $step.$('.zoom-1 > x-polypad') as Polypad;
  $zoomPolypad.$svg.setAttr('viewBox', '0 0 425 250'); // 17 x 10
  $zoomPolypad.canDelete = $zoomPolypad.canCopy = false;
  $zoomPolypad.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $zoomPolypad.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(new Point(finalRel[index][0] + tangramScale(1), finalRel[index][1] + tangramScale(1)));
  });

  const outlineStr = getTangramPolystr([[0, 0], [13, 0], [13, -5]].map(p => p.map(tangramScale)));
  const outlineTile = $zoomPolypad.newTile('polygon', outlineStr);
  outlineTile.setPosition(new Point(tangramScale(1), tangramScale(6)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});

  const $zoomSlider1 = $step.$('x-slider.zoom-s-1') as Slider;
  const baseWidth = 17;
  const baseHeight = 10;
  let zoomed1 = false;
  $zoomSlider1.on('move', n => {

    if (n > 950 && !zoomed1) {
      zoomed1 = true;
      $step.score('first-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $zoomPolypad.$svg.setAttr('viewBox', `${9 * (25 - factor)} ${3 * (25 - factor)} ${baseWidth * factor} ${baseHeight * factor}`);
    console.log({scale});
    [...$zoomPolypad.tiles.values()].forEach(tile => {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    });
    $outline.css({'stroke-width': `${scale * 4}px`});
  });

  const $triangleRefPolypad = $step.$('.triangle-ref > x-polypad') as Polypad;
  $triangleRefPolypad.$svg.setAttr('viewBox', '0 0 425 250'); // 17 x 10
  $triangleRefPolypad.canDelete = $triangleRefPolypad.canCopy = false;
  $triangleRefPolypad.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $triangleRefPolypad.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(new Point(finalRel[index][0] + tangramScale(1), finalRel[index][1] + tangramScale(1)));
    tile.$el.addClass('paradox-poly');
  });

}

function getTangramPolystr(polyGridPositions: number[][]) {
  return polyGridPositions.map(p => p.join(' ')).join(',');
}
