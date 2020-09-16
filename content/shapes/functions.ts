// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {nearlyEquals, Point, Polygon, Segment} from '@mathigon/fermat';
import {$N, animate, CanvasView, EventCallback, loadScript, SVGParentView, SVGView} from '@mathigon/boost';
import {Geopad, GeoPath, GeoPoint, Polypad, Slider, Step, Tile} from '../shared/types';
import {BinarySwipe} from '../shared/components/binary-swipe'; // import types
import '../shared/components/binary-swipe';  // import component
import {Relation} from '../shared/components/relation';
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

export async function voronoi($step: VoronoiStep) {

  await loadScript('/resources/shared/vendor/d3-delaunay.min.js');

  const colors = ['3c91e6', 'ff6b6b', 'ffe45e', '4ecdc4', '81366f', 'c93818', 'e2c312', '6bab90', 'e4533a'].map(c => '#' + c);

  const $geopad1 = $step.$('x-geopad.voronoi-1') as Geopad;
  const $canvas1 = $geopad1.$('canvas.voronoi') as CanvasView;
  const $voronoiButton = $step.$('button.show-voronoi')!;
  const bounds = [0, 0, $canvas1.canvasWidth, $canvas1.canvasHeight];

  $step.model.dynPoints = [];
  $step.model.vorOpacity = 0;
  $step.model.cells = [];

  cafeLocationPoints.forEach(locationPoint => {
    $geopad1.drawPoint(locationPoint, {classes: 'red', interactive: false});
  });

  $step.model.cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  $voronoiButton.on('click', () => {
    showVor($step);
  });

  $geopad1.$svg.on('mousemove', e => {
    $step.model.cells = $step.model.cells.map(cell => {
      const over = cell.poly.contains(new Point(e.offsetX, e.offsetY));
      return {...cell, over};
    });
  });

  $geopad1.switchTool('point');
  $geopad1.on('add:point', ({point}: {point: GeoPoint}) => {

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

    $canvas1.clear();

    const cells = $step.model.cells;
    if ($step.model.vorOpacity != 0) {
      cells.forEach((cell, i) => {
        const opacity = cell.over ? $step.model.vorOpacity / 2 : $step.model.vorOpacity / 3;
        $canvas1.draw(
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
          $canvas1.draw(edge, {stroke, strokeWidth, opacity});
        }
      });
    });
  });


  const $geopad2 = $step.$('x-geopad.voronoi-2') as Geopad;

  $step.model.cells.forEach((cell, i) => {
    let options = {};
    if (i == 12) {
      options = {class: 'triangle-cell'};
    }
    const $cell = $N('path', options, $geopad2.$paths) as SVGView;
    $cell.css({fill: colors[i % 9], stroke: 'black', 'stroke-width': '2px'});
    $cell.draw(cell.poly);
  });


  let selectedEdge = -1;
  let edgeChosen = false;
  const tri = $step.model.cells[12].poly;
  tri.edges.slice(0, 3).forEach((edge, i) => {
    const edgePath = $geopad2.drawPath(edge);
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
        const heightPath = $geopad2.drawPath(heightSegment);
        heightPath.$el.hide();
        heightPath.$el.css({color: '#000000', 'stroke-dasharray': '6'});

        $step.model.nearby = false;
        $geopad2.switchTool('line');
        let p: GeoPath;
        let cb: EventCallback;
        $geopad2.on('begin:path', ({path, _}: {path: GeoPath, _: any}) => {
          p = path;
          cb = _ => handlePathing(path, edgePath, heightPath, height, () => $step.model.nearby = true, () => $step.model.nearby = false);
          path.$parent.on('mousemove', cb);
        });
        $geopad2.on('add:path', _ => {
          $geopad2.off('mousemove', cb);
          if ($step.model.nearby) {
            $step.score('height-drawn');
            $step.addHint('correct');
            const p1 = (p.value as Segment).p1;
            const p2 = heightLine.project(p1);
            p.delete;
            const finalPath = $geopad2.drawPath(new Segment(p1, p2));
            finalPath.setLabel(height.toFixed(2).toString());
            finalPath.$el.css({color: 'red'});
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

  $geopad2.showLabels = true;

  const $geopad3 = $step.$('x-geopad.voronoi-3') as Geopad;
  $step.model.cells.forEach((cell, i) => {
    let options = {};
    if (i == 6) {
      options = {class: 'four-sided'};
    } else if (i == 3) {
      options = {class: 'five-sided'};
    } else if (i == 5) {
      options = {class: 'six-sided'};
    }
    const $cell = $N('path', options, $geopad3.$paths) as SVGView;
    $cell.css({fill: colors[i % 9], stroke: 'black', 'stroke-width': '2px'});
    $cell.draw(cell.poly);
  });
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

export function triangleTangram($step: Step) {

  const polys = [
    // Large red triangle
    [[0, 0], [8, 0], [8, -3]],
    // Orange tetronimo
    [[0, 0], [5, 0], [5, -2], [3, -2], [3, -1], [0, -1]],
    // Green tetronimo
    [[0, 0], [3, 0], [3, -1], [5, -1], [5, -2], [0, -2]],
    // Small blue triangle
    [[0, 0], [5, 0], [5, -2]]
  ].map(poly => poly.map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y))));

  const finalRel = [
    // Large red triangle
    [0, 5],
    // Orange tetronimo
    [8, 5],
    // Green tetronimo
    [8, 4],
    // Small blue triangle
    [8, 2]
  ].map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y)));
  const finalPositions = finalRel.map(p => p.shift(tangramScale(2), tangramScale(12)));

  const polyColours = ['red', 'orange', 'green', 'blue'];

  const $polypad1 = $step.$('.triangle-tangram > x-polypad') as Polypad;
  $polypad1.$svg.setAttr('viewBox', '0 0 425 450');
  $polypad1.canDelete = $polypad1.canCopy = false;
  $polypad1.setGrid('square-grid');

  const $bg = $step.$('svg.solution-outline')! as SVGParentView;
  $bg.setAttr('viewBox', '0 0 425 450');

  polys.forEach((polyVals, i) => {
    const $bgPath = $N('path', {}, $bg) as SVGView;
    const poly = (new Polygon(...polyVals)).translate(finalPositions[i]);
    $bgPath.draw(poly);
  });

  const origins =
    [[1, 4], [4, 8], [11, 4], [11, 8]]
        .map(([x, y]: number[]) =>
          new Point(tangramScale(x), tangramScale(y)));

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad1.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(origins[index]);
  });

  let done = false;
  $polypad1.on('move-selection', () => {
    const allPositioned = [...$polypad1.tiles.values()].every((tile, index) =>
      tile.posn.equals(finalPositions[index])
    );
    if (allPositioned && !done) {
      done = true;
      $bg.addClass('hidden');
      $step.addHint('correct');
      $step.score('triangle-complete');
    }
  });

  const nextRelative = [[5, 3], [8, 5], [5, 5], [0, 5]].map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y)));
  const nextPoints = nextRelative.map(p => p.shift(tangramScale(2), tangramScale(12)));

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
    tile.setPosition(origins[index]);
  });

  const $zoomPolypad1 = $step.$('.zoom-1 > x-polypad') as Polypad;
  const viewWidth = 425;
  const viewHeight = 225;
  $zoomPolypad1.$svg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);
  $zoomPolypad1.canDelete = $zoomPolypad1.canCopy = false;
  $zoomPolypad1.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $zoomPolypad1.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(finalRel[index].shift(tangramScale(1), tangramScale(2)));
  });

  const outlinePoints = [[0, 0], [13, 0], [13, -5]].map(([x, y]: number[]) => new Point(tangramScale(x), tangramScale(y)));
  const outlineStr = getTangramPolystr(outlinePoints);
  const outlineTile1 = $zoomPolypad1.newTile('polygon', outlineStr);
  outlineTile1.setPosition(new Point(tangramScale(1), tangramScale(7)));
  const $outline1 = outlineTile1.$el.$('g path.polygon-tile')!;
  $outline1.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});

  const $zoomSlider1 = $step.$('x-slider.zoom-s-1') as Slider;
  const baseWidth = viewWidth / 25;
  const baseHeight = viewHeight / 25;
  let zoomed1 = false;
  $zoomSlider1.on('move', n => {

    if (n > 950 && !zoomed1) {
      zoomed1 = true;
      $step.score('first-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $zoomPolypad1.$svg.setAttr('viewBox', `${9 * (tangramScale(1) - factor)} ${4 * (tangramScale(1) - factor)} ${baseWidth * factor} ${baseHeight * factor}`);
    [...$zoomPolypad1.tiles.values()].forEach(tile => {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    });
    $outline1.css({'stroke-width': `${scale * 4}px`});
  });

  const $triangleRefPolypad = $step.$('.triangle-ref > x-polypad') as Polypad;
  $triangleRefPolypad.$svg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);
  $triangleRefPolypad.canDelete = $triangleRefPolypad.canCopy = false;
  $triangleRefPolypad.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $triangleRefPolypad.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(finalRel[index].shift(tangramScale(1), tangramScale(2)));
    tile.$el.addClass('paradox-poly');
  });

  // [TODO]: Use comments to delineate sections

  const $zoomPolypad2 = $step.$('.zoom-2 > x-polypad') as Polypad;
  $zoomPolypad2.$svg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);
  $zoomPolypad2.canDelete = $zoomPolypad2.canCopy = false;
  $zoomPolypad2.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);
    const tile = $zoomPolypad2.newTile('polygon', polyStr);
    tile.setColour(polyColours[index]);
    tile.setPosition(nextRelative[index].shift(tangramScale(1), tangramScale(2)));
  });
  const outlineTile2 = $zoomPolypad2.newTile('polygon', outlineStr);
  outlineTile2.setPosition(new Point(tangramScale(1), tangramScale(7)));
  const $outline2 = outlineTile2.$el.$('g path.polygon-tile')!;
  $outline2.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});

  const $zoomSlider2 = $step.$('x-slider.zoom-s-2') as Slider;
  let zoomed2 = false;
  $zoomSlider2.on('move', n => {

    if (n > 950 && !zoomed2) {
      zoomed2 = true;
      $step.score('second-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $zoomPolypad2.$svg.setAttr('viewBox', `${6 * (tangramScale(1) - factor)} ${5 * (tangramScale(1) - factor)} ${baseWidth * factor} ${baseHeight * factor}`);
    [...$zoomPolypad2.tiles.values()].forEach(tile => {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    });
    $outline2.css({'stroke-width': `${scale * 4}px`});
  });

  const $comparisonPolypad = $step.$('.paradox-comparison > x-polypad') as Polypad;
  $comparisonPolypad.$svg.setAttr('viewBox', '0 0 425 475');
  $comparisonPolypad.canDelete = $comparisonPolypad.canCopy = false;
  $comparisonPolypad.setGrid('square-grid');

  polys.forEach((poly, index) => {
    const polyStr = getTangramPolystr(poly);

    const tile1 = $comparisonPolypad.newTile('polygon', polyStr);
    tile1.setColour(polyColours[index]);
    tile1.setPosition(finalRel[index].shift(tangramScale(1), tangramScale(1)));

    const tile2 = $comparisonPolypad.newTile('polygon', polyStr);
    tile2.setColour(polyColours[index]);
    tile2.setPosition(nextRelative[index].shift(tangramScale(1), tangramScale(7)));
  });
  const outlineTile3 = $comparisonPolypad.newTile('polygon', outlineStr);
  outlineTile3.setPosition(new Point(tangramScale(1), tangramScale(18)));
  const $outline3 = outlineTile3.$el.$('g path.polygon-tile')!;
  $outline3.css({stroke: 'rgb(17, 255, 0)', 'stroke-width': '4px', fill: 'none'});

}

function getTangramPolystr(polyGridPositions: Point[]) {
  return polyGridPositions.map(p => p.x + ' ' + p.y).join(',');
}
