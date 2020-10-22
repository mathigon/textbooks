// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {clamp, nearlyEquals} from '@mathigon/fermat';
import {$N, animate, AnimationResponse, CanvasView, ElementView, EventCallback, loadScript, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Arc, Circle, Line, Point, Polygon, Polyline, Rectangle, Segment} from '@mathigon/euclid';

import {Geopad, GeoPath, GeoPoint, Path, Polypad, Slider, Step, Tile} from '../shared/types';
import {BinarySwipe} from '../shared/components/binary-swipe'; // import types
import {VoronoiStep} from './components/voronoi';

import '../shared/components/binary-swipe';  // import component
import '../shared/components/relation';

type ShapesModel = {
  firstArea?: {
    ropeUsed?: number
    cobblestones?: number
    points?: Point[]
  }
}

export function performance1($step: Step) {
  const courseModel = getCourseModel($step);
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('move');
  const scale = (600 / 30) * 4; // Pixels per meter
  const blockSize = (1 / 4) * scale;
  const blocks: {poly: Rectangle, path: GeoPath}[] = [];
  [...Array(30).keys()].forEach(column =>
    [...Array(20).keys()].forEach(row => {
      const block = new Rectangle(
          new Point(column * blockSize, row * blockSize),
          blockSize,
          blockSize
      );
      const path = $geopad.drawPath(block);
      path.$el.css({'stroke-width': 2});
      blocks.push({poly: block, path});
    })
  );
  setupRope('performance-1', 20 * scale, $geopad, $step, (line: Polyline, reset: VoidFunction) => {
    const areaBlocks = blocks.filter(block => block.poly.points.every(point => line.contains(point)));
    areaBlocks.forEach(block => block.path.$el.css({fill: 'lime'}));
    if (areaBlocks.length >= 200) {
      courseModel.firstArea = {
        ropeUsed: length(line) / scale,
        cobblestones: areaBlocks.length,
        points: line.points
      };
      $step.model.firstArea = courseModel.firstArea;
      $step.score('rope-drawn');
      $step.addHint('correct');
    } else reset();
  });
}

function getCourseModel($step: Step) {
  return $step.getParentModel().$course.model as ShapesModel;
}

function setupRope(id: string, maxLength: number, $geopad: Geopad, $step: Step, onComplete: (final: Polyline, reset: VoidFunction) => void) {
  let reset = false;
  let rope: GeoPath;
  let ropeLine: Polyline;
  slide($geopad, {
    $box: $geopad.$svg,
    start: (p: Point) => {
      ropeLine = new Polyline(p);
      rope = $geopad.drawPath(ropeLine);
      rope.$el.css({stroke: 'red'});
    },
    move: (p: Point) => {
      if (!reset) {
        ropeLine = new Polyline(...ropeLine.points, p);
        if (length(ropeLine) > maxLength) {
          $step.addHint('incorrect');
          ropeLine = new Polyline();
          reset = true;
        }
        rope.redraw(ropeLine);
      }
    },
    end: () => {
      if (!reset) {
        onComplete(ropeLine, () => {
          ropeLine = new Polyline();
          rope.redraw(ropeLine);
          $step.addHint('incorrect');
        });
      } else reset = false;
    }
  });
}


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
  const angleRange = Math.PI / 180;
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
    return Object.values(points).filter(pv => pv).length > 1;
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

  // TODO Cleanup duplicate code!
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

  const outlineColor = 'red';
  const outlineWidth = '3px';

  const $reset = $step.$('button.reset');

  type Wheel = {
    $el: SVGView,
    radius: number,
    startBottom: Point,
    initOutline: Circle,
    $outline: SVGView,
    distance: number,
    $distLine: SVGView
  };

  $step.model['wheels'] = [
    {a: 'wheel-1', b: 50},
    {a: 'wheel-2', b: 75},
    {a: 'wheel-3', b: 100},
    {a: 'wheel-4', b: 125}
  ].map(({a, b}) => {

    const $el = $svg.$('.' + a) as SVGView;

    const radius = b / 2;

    const startTopLeft = new Point($el.bounds.left - $svg.bounds.left, $el.bounds.top - $svg.bounds.top);
    const startBottom = startTopLeft.shift(radius, radius * 2);

    const $distLine = $N('path', {}, $svg) as SVGView;
    $distLine.css({stroke: outlineColor, 'stroke-width': outlineWidth});

    const $outline = $N('path', {}, $svg) as SVGView;
    $outline.css({stroke: outlineColor, 'stroke-width': outlineWidth, fill: 'none'});
    const initOutline = new Circle(startBottom.shift(0, -radius), radius);
    $outline.draw(initOutline);

    return {
      $el,
      radius,
      startBottom,
      initOutline,
      $outline,
      distance: 0,
      $distLine
    };
  });

  $step.model['wheels'].forEach((wheel: Wheel) => {
    let initDistance = 0;
    slide(wheel.$el, {
      start: () => {
        initDistance = wheel.distance;
      },
      move: (posn, start, _) => {
        wheel.distance =
          clamp(
              posn.subtract(start).x + initDistance,
              0,
              2 * Math.PI * wheel.radius
          );
        const translate = new Point(wheel.distance, 0);
        const rotate = wheel.distance / wheel.radius;

        wheel.$el.setTransform(translate, rotate);

        const distanceLine = wheel.distance + wheel.startBottom.x;
        wheel.$distLine.draw(new Segment(wheel.startBottom, new Point(distanceLine, wheel.startBottom.y)));

        if (translate.x > 0) {
          const outlineCenter = wheel.initOutline.c.translate(translate);
          const outlineStart = outlineCenter.shift(0, wheel.radius);
          const outline = new Arc(outlineCenter, outlineStart, -rotate);
          wheel.$outline.draw(outline.rotate(rotate, outlineCenter));
        } else {
          wheel.$outline.draw(wheel.initOutline);
        }
      }
    });

  });

  $reset?.on('click', () => {
    $step.model['wheels'].forEach((wheel: Wheel) => {
      wheel.distance = 0;
      wheel.$el.setTransform(undefined, undefined);
      wheel.$outline.draw(wheel.initOutline);
      wheel.$distLine.draw(new Segment(wheel.startBottom, wheel.startBottom));
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

  const $reset = $step.$('button.reset');

  let colours = ['red', 'blue', 'green'];
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

  $reset?.on('click', () => {
    colours = ['red', 'blue', 'green'];
    colours.forEach(c => {
      drawn[c] = false;
      $step.model[c] = new Polyline();
      $step.model['progress'] = new Segment(lineStart.shift(0, 7.5), lineStart.shift(0, 7.5));
      progress.$el.css({stroke: 'none'});
    });
    pending = undefined;
  });

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
  const $geopadRome = $step.$('.rome x-geopad') as Geopad;
  $geopadRome.switchTool('circle');

  const $romeReset = $step.$('.rome button.reset');

  let romeCircle: null | Circle = null;

  let $romeDiameterTarget: GeoPoint | null = null;
  $geopadRome.on('begin:path', ({start}: {path: Path, start: GeoPoint}) => {
    if (romeCircle != null) {
      const startPos = start.value!;
      if (nearlyEquals(startPos.subtract(romeCircle.c).length, romeCircle.r)) {
        const diamTarget = startPos.rotate(Math.PI, romeCircle.c);
        $romeDiameterTarget = $geopadRome.drawPoint(diamTarget, {interactive: false});
      }
    }
  });

  $geopadRome.on('add:path', ({path}: {path: GeoPath}) => {

    if (romeCircle == null) {
      $step.score('rome-circle');
      romeCircle = path.value as Circle;
      $geopadRome.drawPath(romeCircle);
      $geopadRome.switchTool('line');
    } else {
      const cand = path.value as Line;
      const d1 = cand.p1.subtract(romeCircle.c).length;
      const d2 = cand.p2.subtract(romeCircle.c).length;
      if (nearlyEquals(d1, romeCircle.r) && nearlyEquals(d2, romeCircle.r) && nearlyEquals(cand.length, romeCircle.r * 2)) {
        // drew a diameter
        path.setLabel((path.value as Line).length.toFixed(2) + ' km');
        $step.addHint('correct');
        $step.score('rome-diameter');
      } else {
        $step.addHint('incorrect');
        path.delete();
        path.components.forEach(c => c.delete());
        $romeDiameterTarget!.delete();
      }
    }
  });

  $romeReset?.on('click', () => {
    geopadReset($geopadRome);
    romeCircle = null;
  });

  const $geopadMoscow = $step.$('.moscow x-geopad') as Geopad;
  $geopadMoscow.switchTool('circle');

  const $moscowReset = $step.$('.moscow button.reset');

  let moscowCircle: null | Circle = null;

  $geopadMoscow.on('add:path', ({path}: {path: GeoPath}) => {

    if (moscowCircle == null) {
      $step.score('moscow-circle');
      moscowCircle = path.value as Circle;
      $geopadMoscow.drawPath(moscowCircle);
      $geopadMoscow.switchTool('line');
    } else {
      const cand = path.value as Line;
      const drewRadius =
        nearlyEquals(cand.length, moscowCircle.r) &&
        (cand.p1.equals(moscowCircle.c) || cand.p2.equals(moscowCircle.c));
      if (drewRadius) {
        path.setLabel((path.value as Line).length.toFixed(2) + ' km');
        $step.addHint('correct');
        $step.score('moscow-radius');
      } else {
        $step.addHint('incorrect');
        path.delete();
        path.components.forEach(c => c.delete());
      }
    }
  });

  $moscowReset?.on('click', () => {
    geopadReset($geopadMoscow);
    moscowCircle = null;
  });

  const $geopadLondon = $step.$('.london x-geopad') as Geopad;
  $geopadLondon.switchTool('circle');

  const $londonReset = $step.$('.london button.reset');

  let londonCircle: null | Circle = null;

  $geopadLondon.on('add:path', ({path}: {path: GeoPath}) => {
    if (londonCircle == null) {
      $step.score('london-circle');
      londonCircle = path.value as Circle;
      $geopadLondon.drawPath(londonCircle);
    }
  });

  $step.onScore('blank-3 blank-4', () => {
    const diameter = $geopadLondon.drawPath(new Segment(
        new Point(londonCircle!.c.x, londonCircle!.c.y - londonCircle!.r),
        new Point(londonCircle!.c.x, londonCircle!.c.y + londonCircle!.r)
    ));
    diameter.setLabel('54 km');
    $londonReset?.setAttr('disabled', true);
  });

  $londonReset?.on('click', () => {
    geopadReset($geopadLondon);
    londonCircle = null;
  });
}

function geopadReset($pad: Geopad) {
  $pad.paths.forEach(path => path.delete());
  $pad.points.forEach(point => point.delete());
  $pad.switchTool('circle');
}

type Guide = {path: GeoPath, segment: Segment, index: number};
type GuideNode = {node: Point, guide: Guide};

export function slicing1($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const largeCenter = new Point(200, 200);
  const mediumCenter = new Point(550, 200);

  const largeGuides: Guide[] = [...Array(4).keys()].map(index => {
    const baseSegment = (new Segment(largeCenter.shift(0, -175), largeCenter.shift(0, 175)));
    const rotateBy = (Math.PI / 4) * index;
    const segment = baseSegment.rotate(rotateBy, largeCenter);
    const path = $geopad.drawPath((new Segment(baseSegment.p1.shift(0, -10), baseSegment.p2.shift(0, 10))).rotate(rotateBy, largeCenter));
    path.$el.css({stroke: 'black', 'stroke-width': '4px', 'stroke-dasharray': '10', 'stroke-linecap': 'unset'});
    return {path, segment, index};
  });
  const $largeSlices = $geopad.$svg.$$('.large-slice').map(e => e as SVGView);
  $step.model.largeCuts = [...Array(4).keys()].map(() => {
    return {path: null, segment: null};
  });

  const mediumGuides: Guide[] = [...Array(4).keys()].map(index => {
    const baseSegment = (new Segment(mediumCenter.shift(0, -125), mediumCenter.shift(0, 125)));
    const rotateBy = (Math.PI / 4) * index;
    const segment = baseSegment.rotate(rotateBy, mediumCenter);
    const path = $geopad.drawPath((new Segment(baseSegment.p1.shift(0, -10), baseSegment.p2.shift(0, 10))).rotate(rotateBy, mediumCenter), {classes: 'slice-guide'});
    return {path, segment, index};
  });
  const $mediumSlices = $geopad.$svg.$$('.medium-slice').map(e => e as SVGView);
  $step.model.largeCuts = [...Array(4).keys()].map(() => {
    return {path: null, segment: null};
  });
  $step.model.mediumCuts = [...Array(4).keys()].map(() => {
    return {path: null, segment: null};
  });

  const collectNodes =
    (prevNodes: GuideNode[], guide: Guide) =>
      prevNodes.concat({node: guide.segment.p1, guide}, {node: guide.segment.p2, guide});
  const guideNodes = largeGuides.reduce(
      collectNodes,
      mediumGuides.reduce(collectNodes, [])
  );

  let startNode: null | GuideNode = null;
  let endNode: null | Point = null;
  let currentGuide: null | Guide = null;
  let $cutInProgress: null | SVGView = null;
  slide($geopad, {
    $box: $geopad.$svg,
    start: pos => {
      startNode = nearest(pos, guideNodes);
      currentGuide = startNode.guide;
      endNode = startNode.node.equals(currentGuide.segment.p1) ? currentGuide.segment.p2 : currentGuide.segment.p1;
      $cutInProgress = $N('path', {}, $geopad.$svg) as SVGView;
      $cutInProgress.addClass('pizza-outline');
    },
    move: (current, _start, _last) => {
      const projected = currentGuide!.segment.project(current);
      const endsX = [startNode!.node.x, endNode!.x].sort((a, b) => a - b);
      const endsY = [startNode!.node.y, endNode!.y].sort((a, b) => a - b);
      const cutProgress = new Point(clamp(projected.x, endsX[0], endsX[1]), clamp(projected.y, endsY[0], endsY[1]));
      $cutInProgress!.draw(new Segment(startNode!.node, cutProgress));
    },
    end: () => {
      $cutInProgress!.remove();
      const cutFinal = new Segment(startNode!.node, endNode!);
      if (largeGuides.includes(currentGuide!)) {
        if ($step.model.largeCuts.every((cut: {path: GeoPath | null, segment: Segment | null}) => !cut.segment?.equals(cutFinal))) {
          largeGuides[currentGuide!.index].path.delete();
          const nextIndex = (currentGuide!.index + 1) % largeGuides.length;
          const prevIndex = (currentGuide!.index + (largeGuides.length - 1)) % largeGuides.length;
          if ($step.model.largeCuts[nextIndex].segment != null) {
            $step.model.largeCuts[nextIndex].path?.delete(0);
            const index1 = currentGuide!.index;
            const index2 = index1 + 4;
            separateSlices(index1, index2, $largeSlices, largeCenter, 25);
          }
          if ($step.model.largeCuts[prevIndex].segment != null) {
            $step.model.largeCuts[prevIndex].path?.delete(0);
            const index1 = (currentGuide!.index + 7) % 8;
            const index2 = (index1 + 4) % 8;
            separateSlices(index1, index2, $largeSlices, largeCenter, 25);
          }
          if ($step.model.largeCuts[nextIndex].segment == null && $step.model.largeCuts[prevIndex].segment == null) {
            const path = $geopad.drawPath(cutFinal, {animated: 400, classes: 'pizza-outline'});
            $step.model.largeCuts[currentGuide!.index] = {path, segment: cutFinal};
          } else {
            $step.model.largeCuts[currentGuide!.index] = {path: null, segment: cutFinal};
          }
        }
      } else {
        if ($step.model.mediumCuts.every((cut: {path: GeoPath | null, segment: Segment | null}) => !cut.segment?.equals(cutFinal))) {
          mediumGuides[currentGuide!.index].path.delete();
          const nextIndex = (currentGuide!.index + 1) % mediumGuides.length;
          const prevIndex = (currentGuide!.index + (mediumGuides.length - 1)) % mediumGuides.length;
          if ($step.model.mediumCuts[nextIndex].segment != null) {
            $step.model.mediumCuts[nextIndex].path?.delete(0);
            const index1 = currentGuide!.index;
            const index2 = index1 + 4;
            separateSlices(index1, index2, $mediumSlices, mediumCenter, 15);
          }
          if ($step.model.mediumCuts[prevIndex].segment != null) {
            $step.model.mediumCuts[prevIndex].path?.delete(0);
            const index1 = (currentGuide!.index + 7) % 8;
            const index2 = (index1 + 4) % 8;
            separateSlices(index1, index2, $mediumSlices, mediumCenter, 15);
          }
          if ($step.model.mediumCuts[nextIndex].segment == null && $step.model.mediumCuts[prevIndex].segment == null) {
            const path = $geopad.drawPath(cutFinal, {animated: 400, classes: 'pizza-outline'});
            $step.model.mediumCuts[currentGuide!.index] = {path, segment: cutFinal};
          } else {
            $step.model.mediumCuts[currentGuide!.index] = {path: null, segment: cutFinal};
          }
        }
      }
      startNode = endNode = currentGuide = $cutInProgress = null;
      if ($step.model.largeCuts.every((cut: {segment: Segment | null}) => cut.segment != null)) {
        if (!$step.scores.has('large-slices')) {
          $step.score('large-slices');
          if ($step.scores.has('medium-slices')) $step.addHint('correct');
        }
      }
      if ($step.model.mediumCuts.every((cut: {segment: Segment | null}) => cut.segment != null)) {
        if (!$step.scores.has('medium-slices')) {
          $step.score('medium-slices');
          if ($step.scores.has('large-slices')) $step.addHint('correct');
        }
      }
    }
  });

  $step.onScore('blank-0', () => {

    const largeSlicePoints =
      [largeCenter, largeGuides[0].segment.p1, largeGuides[3].segment.p2]
          .map(p =>
            p.translate(
                largeCenter.subtract(
                    largeCenter
                        .shift(0, 25)
                        .rotate(-Math.PI / 8, largeCenter)
                )
            ));
    const largeOutline = new Polygon(...largeSlicePoints);
    const largeBase = new Segment(largeSlicePoints[1], largeSlicePoints[2]);
    const largeHeight = new Segment(largeSlicePoints[0], largeBase.midpoint);
    $geopad.drawPath(largeOutline, {classes: 'slice-outline'});
    $geopad.drawPath(largeBase, {classes: 'slice-dimension'}).setLabel('16.8 cm');
    $geopad.drawPath(largeHeight, {classes: 'slice-dimension'}).setLabel('20.3 cm');
    $largeSlices.forEach(($slice, index) => {
      if (index != 7) $slice.css({opacity: 0.5});
    });

    const mediumSlicePoints =
      [mediumCenter, mediumGuides[0].segment.p1, mediumGuides[3].segment.p2]
          .map(p =>
            p.translate(
                mediumCenter.subtract(
                    mediumCenter
                        .shift(0, 15)
                        .rotate(-Math.PI / 8, mediumCenter)
                )
            ));
    const mediumOutline = new Polygon(...mediumSlicePoints);
    const mediumBase = new Segment(mediumSlicePoints[1], mediumSlicePoints[2]);
    const mediumHeight = new Segment(mediumSlicePoints[0], mediumBase.midpoint);
    $geopad.drawPath(mediumOutline, {classes: 'slice-outline'});
    $geopad.drawPath(mediumBase, {classes: 'slice-dimension'}).setLabel('12.2 cm');
    $geopad.drawPath(mediumHeight, {classes: 'slice-dimension'}).setLabel('14.8 cm');
    $mediumSlices.forEach(($slice, index) => {
      if (index != 7) $slice.css({opacity: 0.5});
    });
  });

}

function separateSlices(index1: number, index2: number, $slices: SVGView[], center: Point, slideDistance: number) {
  const rotateFactor = Math.PI / 4;
  const rotate1 = (rotateFactor * index1) + (Math.PI / 8);
  const rotate2 = (rotateFactor * index2) + (Math.PI / 8);
  const trans1 = center.shift(0, -slideDistance).rotate(rotate1, center).subtract(center);
  const trans2 = center.shift(0, -slideDistance).rotate(rotate2, center).subtract(center);
  $slices[index1].setTransform(trans1);
  $slices[index2].setTransform(trans2);
}

function nearest(to: Point, of: {node: Point, guide: Guide}[]) {
  return of.map(point => {
    return {distance: Point.distance(point.node, to), point};
  }).sort((a, b) => a.distance - b.distance)[0].point;
}

function nearestSimple(to: Point, of: Point[]) {
  return of.map(point => {
    return {distance: Point.distance(point, to), point};
  }).sort((a, b) => a.distance - b.distance)[0].point;
}

export function slicing2($step: Step) {
  const $svg = $step.$('svg') as SVGParentView;
  const center = new Point(100, 100);
  const topLeft = new Point(25, 25);
  const topRight = new Point(175, 25);
  const bottomRight = new Point(175, 175);
  const bottomLeft = new Point(25, 175);
  type Guide = {$el: SVGView, segment: Segment};
  const guides: Guide[] = [...Array(2).keys()].map(i => {
    const $el = $N('path', {}, $svg) as SVGView;
    $el.css({stroke: 'black', 'stroke-width': '1px', 'stroke-dasharray': '3'});
    const baseSegment = (new Segment(center.shift(0, -75), center));
    const rotateBy = (Math.PI / 2) * i;
    const segment = baseSegment.rotate(rotateBy, center);
    $el.draw((new Segment(baseSegment.p1.shift(0, -10), baseSegment.p2)).rotate(rotateBy, center));
    return {$el, segment};
  });
  const radius = new Segment(new Point(25, 100), center);
  const $radius = $N('path', {}, $svg) as SVGView;
  $radius.css({stroke: 'black', 'stroke-width': '1px'});
  $radius.draw(radius);
  let startNode: null | Point = null;
  let endNode: null | Point = null;
  let currentGuide: null | Guide = null;
  let cutInProgress: null | Segment = null;
  let $cutInProgress: null | SVGView = null;
  const cuts: Segment[] = [];
  const $cuts: SVGView[] = [];
  const guideNodes = guides.map(guide => guide.segment.p1);
  const nodes = guideNodes.concat(center);
  slide($svg, {
    start: pos => {
      startNode = nearestSimple(pos, nodes);
      if (!startNode.equals(center)) {
        currentGuide = guides.find(g => (g.segment.p1.equals(startNode!) || g.segment.p2.equals(startNode!)))!;
        endNode = center;
      }
      $cutInProgress = $N('path', {}, $svg) as SVGView;
    },
    move: (current, _start, _last) => {
      if (currentGuide == null) {
        endNode = nearestSimple(current, guideNodes);
        currentGuide = guides.find(g => (g.segment.p1.equals(endNode!) || g.segment.p2.equals(endNode!)))!;
      }
      $cutInProgress!.css({stroke: 'cyan', 'stroke-width': '1px'});
      const projected = currentGuide.segment.project(current);
      const endsX = [startNode!.x, endNode!.x].sort((a, b) => a - b);
      const endsY = [startNode!.y, endNode!.y].sort((a, b) => a - b);
      const cutProgress = new Point(clamp(projected.x, endsX[0], endsX[1]), clamp(projected.y, endsY[0], endsY[1]));
      cutInProgress = new Segment(startNode!, cutProgress);
      $cutInProgress!.draw(cutInProgress);
    },
    end: () => {
      $cutInProgress!.remove();
      const cutFinal = new Segment(cutInProgress!.p1, endNode!);
      if (cuts.every(cut => !cut.equals(cutFinal))) cuts.push(cutFinal);
      const $cut = $N('path', {}, $svg) as SVGView;
      $cut.css({stroke: 'black', 'stroke-width': '1px'});
      $cut.draw(cutFinal);
      $cuts.push($cut);
      startNode = endNode = currentGuide = cutInProgress = $cutInProgress = null;
      if (cuts.length == 2) {
        $step.score('sliced');
        const sideA = new Segment(center.shift(0, -75), topRight);
        const $sideA = $N('path', {}, $svg) as SVGView;
        const css = {stroke: 'black', 'stroke-width': '1px'};
        $sideA.css(css);
        $sideA.draw(sideA);
        const sideB = new Segment(center.shift(75, 0), topRight);
        const $sideB = $N('path', {}, $svg) as SVGView;
        $sideB.css(css);
        $sideB.draw(sideB);
        guides.forEach(guide => guide.$el.remove());
        $radius.remove();
      }
    }
  });
  $step.onScore('blank-1', () => {
    [
      new Segment(topLeft, center.shift(0, -75)),
      new Segment(topLeft, center.shift(-75, 0)),
      new Segment(bottomRight, center.shift(0, 75)),
      new Segment(bottomRight, center.shift(75, 0)),
      new Segment(center, center.shift(0, 75)),
      new Segment(bottomLeft, center.shift(-75, 0)),
      new Segment(bottomLeft, center.shift(0, 75)),
      new Segment(center, center.shift(-75, 0))
    ].forEach(segment => {
      const $e = $N('path', {}, $svg) as SVGView;
      $e.css({stroke: 'black', 'stroke-width': '1px'});
      $e.draw(segment);
    });
  });
}

export function slicesArrangement($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const radius = 175;
  const center = new Point(315, radius + 25);
  const sliceZone = new Rectangle(new Point(5, 400), 620, radius + 20);
  const $sliceZone = $N('path', {}, $geopad.$paths) as SVGView;
  $sliceZone.css({fill: 'brown'});
  $sliceZone.draw(sliceZone);
  const slices = initPizza(8, center, radius, {aColor: 'black', bColor: 'black'}, $geopad);
  $geopad.switchTool('move');
  let currentSlice: Slice | undefined;
  let placedCount = 0;
  // let startDelta: Point;
  let startDelta = new Point(0, 0);
  let startLocation = new Point(0, 0);
  let startAngle = 0;
  slide($geopad, {
    $box: $geopad.$svg,
    start: posn => {
      currentSlice = slices.all.find(slice => slice.bounds.contains(posn));
      startLocation = currentSlice!.pivot;
      startAngle = currentSlice!.angle;
      startDelta = startLocation.subtract(posn);
    },
    move: (current, _start, _last) => {
      if (currentSlice && !$step.scores.has('arranged')) {
        currentSlice.moveTo(current.add(startDelta));
      }
    },
    end: (last, _start) => {
      if (!$step.scores.has('arranged')) {
        if (sliceZone.contains(last) && currentSlice) {
          const flip = placedCount > 3;
          const halfWidth = currentSlice.width / 2;
          const targetBase = center.shift((-620 / 2) + halfWidth, (1.5 * radius) + 35);
          const target =
            flip ?
              targetBase.shift(((placedCount - 4) * currentSlice.width) + halfWidth, 0) :
              targetBase.shift(placedCount * currentSlice.width, 0);
          currentSlice.moveTo(target, 500);
          currentSlice.rotateTo(flip ? Math.PI : 0, {duration: 500});
          placedCount++;
          if (placedCount == 8) {
            setTimeout(() => {
              $step.model.lSlices = slices;
              $step.model.pSlices = initPizza(8, center, radius, {aColor: 'black', bColor: 'black'}, $geopad);
              $step.model.arranged = true;
              $step.score('arranged');
              $step.addHint('correct');
            }, 500);
          }
        } else {
          currentSlice?.moveTo(startLocation, 500);
          currentSlice?.rotateTo(startAngle, {duration: 500});
        }
      }
    }
  });
  // [TODO]: refactor this to use reactive $step.model.watch drawing approach
  let aColor = 'black';
  let bColor = 'black';
  $step.model.watch((state: any) => {
    const sliceCount = state.n1;
    if (state.arranged) {
      state.pSlices.all.forEach((slice: Slice) => slice.remove());
      state.lSlices.all.forEach((slice: Slice) => slice.remove());
      state.pSlices = initPizza(sliceCount, center, radius, {aColor, bColor}, $geopad);
      state.lSlices = initLineup(sliceCount, center.shift(0, (1.5 * radius) + 35), radius, {aColor, bColor}, $geopad);
    }
  });
  let hovering: null | {s: Slice[], g: string} = null;
  let selected = false;
  $geopad.on('mousemove', b => {
    if ($step.model.arranged && !selected) {
      const distances: {d: number, group: string}[] = [];
      $step.model.lSlices.groupA.forEach((slice: Slice) => {
        const d = slice.distanceToArc(new Point(b.offsetX, b.offsetY));
        distances.push({d, group: 'a'});
      });
      $step.model.lSlices.groupB.forEach((slice: Slice) => {
        const d = slice.distanceToArc(new Point(b.offsetX, b.offsetY));
        distances.push({d, group: 'b'});
      });
      const shortest = distances.sort((a, b) => a.d - b.d)[0];
      if (shortest.d <= 10) {
        const pGroup: Slice[] = shortest.group === 'a' ? $step.model.pSlices.groupA : $step.model.pSlices.groupB;
        const pOther: Slice[] = shortest.group === 'b' ? $step.model.pSlices.groupA : $step.model.pSlices.groupB;
        const lGroup: Slice[] = shortest.group === 'a' ? $step.model.lSlices.groupA : $step.model.lSlices.groupB;
        const lOther: Slice[] = shortest.group === 'b' ? $step.model.lSlices.groupA : $step.model.lSlices.groupB;
        aColor = shortest.group === 'a' ? 'aqua' : 'black';
        bColor = shortest.group === 'b' ? 'aqua' : 'black';
        hovering = {
          s: pGroup.concat(lGroup),
          g: shortest.group
        };
        hovering.s.forEach(slice => slice.setArcColor('aqua'));
        pOther.concat(lOther).forEach(slice => slice.setArcColor('black'));
      } else {
        hovering = null;
        aColor = bColor = 'black';
        $step.model.pSlices.all.forEach((slice: Slice) => slice.setArcColor('black'));
        $step.model.lSlices.all.forEach((slice: Slice) => slice.setArcColor('black'));
      }
    }
  });
  $geopad.on('click', () => {
    if (hovering != null) {
      hovering.s.forEach(slice => slice.setArcColor('lime'));
      aColor = hovering.g === 'a' ? 'lime' : 'black';
      bColor = hovering.g === 'b' ? 'lime' : 'black';
      selected = true;
    }
  });
}

function shortAngle(angle: number): number {
  if (angle > Math.PI * 2) {
    return shortAngle(angle - (2 * Math.PI));
  } else if (angle < -(Math.PI * 2)) {
    return shortAngle(angle + (2 * Math.PI));
  } else {
    return angle;
  }
}

function equivAngle(angle: number): number {
  if (angle > Math.PI) {
    return -((2 * Math.PI) - angle);
  } else if (angle < -Math.PI) {
    return (2 * Math.PI) + angle;
  } {
    return angle;
  }
}

function initPizza(slices: number, center: Point, radius: number, colors: {aColor: string, bColor: string}, $geopad: Geopad) {
  const halfCount = Math.ceil(slices / 2);
  const arcAngle = (2 * Math.PI) / slices;
  const initAngle = arcAngle / 2;
  const all: Slice[] = [];
  const groupA: Slice[] = [];
  const groupB: Slice[] = [];
  [...Array(slices).keys()].forEach(index => {
    const slice = new Slice(true, $geopad, radius, arcAngle, center, initAngle + (index * arcAngle));
    if (index < halfCount) {
      slice.setArcColor(colors.aColor);
      groupA.push(slice);
    } else {
      slice.setArcColor(colors.bColor);
      groupB.push(slice);
    }
    all.push(slice);
  });
  return {all, groupA, groupB};
}

function initLineup(slices: number, center: Point, radius: number, colors: {aColor: string, bColor: string}, $geopad: Geopad) {
  const halfCount = Math.ceil(slices / 2);
  const arcAngle = (2 * Math.PI) / slices;
  const all: Slice[] = [];
  const groupA: Slice[] = [];
  const groupB: Slice[] = [];
  [...Array(slices).keys()].forEach(index => {
    const flip = index > halfCount - 1;
    const slice = new Slice(false, $geopad, radius, arcAngle, center);
    const halfWidth = slice.width / 2;
    const targetBase = center.shift((-620 / 2) + halfWidth, 0);
    const target =
      flip ?
        targetBase.shift(((index - halfCount) * slice.width) + halfWidth, 0) :
        targetBase.shift(index * slice.width, 0);
    slice.moveTo(target);
    slice.rotateTo(flip ? Math.PI : 0);
    if (!flip) {
      slice.setArcColor(colors.aColor);
      groupA.push(slice);
    } else {
      slice.setArcColor(colors.bColor);
      groupB.push(slice);
    }
    all.push(slice);
    slice.draw();
  });
  return {all, groupA, groupB};
}

class Slice {

  private sides: {
    path: GeoPath | null,
    poly: Polyline
  }
  private arc: {
    path: GeoPath | null,
    poly: Arc
  }
  private _bounds: Polygon
  readonly width: number;
  private _tip: Point
  private _pivot: Point
  private _angle: number
  private transAnim: AnimationResponse | null
  private rotAnim: AnimationResponse | null
  private rotTarget: number | null;
  private transTarget: Point | null;
  private firstDraw = true;

  constructor(private selfDraw: boolean, private $geopad: Geopad, radius: number, arcAngle: number, circleCenter: Point, initAngle?: number) {
    this._angle = initAngle ?? 0;
    this._tip = circleCenter;
    const pointA = circleCenter.shift(0, -radius);
    const pointB = pointA.rotate(arcAngle, circleCenter);
    this.width = Point.distance(pointA, pointB);
    const sliceArc = (new Arc(circleCenter, pointA, arcAngle)).rotate(-(arcAngle / 2), circleCenter).rotate(this.angle, circleCenter);
    const sliceSides = (new Polyline(pointA, circleCenter, pointB)).rotate(-(arcAngle / 2), circleCenter).rotate(this.angle, circleCenter);
    this.sides = {
      path: $geopad.drawPath(sliceSides, {classes: 'slice-outline'}),
      poly: sliceSides
    };
    this.arc = {
      path: $geopad.drawPath(sliceArc, {classes: 'slice-outline'}),
      poly: sliceArc
    };
    this._bounds = new Polygon(...sliceSides.points);
    this._pivot = (new Segment((new Segment(pointA, pointB)).midpoint, circleCenter)).midpoint.rotate(-(arcAngle / 2), circleCenter).rotate(this.angle, circleCenter);
    this.transAnim = null;
    this.rotAnim = null;
    this.rotTarget = null;
    this.transTarget = null;
    if (this.selfDraw) this.draw();
  }

  get bounds() {
    return this._bounds;
  }

  get tip() {
    return this._tip;
  }

  get pivot() {
    return this._pivot;
  }

  get angle() {
    return this._angle;
  }

  moveBy(by: Point, duration?: number) {
    if (duration) {
      this.transAnim?.cancel();
      const startLoc = this.pivot;
      this.transAnim = animate((p, _d, _c) => {
        const newLoc = startLoc.shift(by.x * p, by.y * p);
        this.moveTo(newLoc);
      }, duration);
      this.transAnim.promise.then(() => {
        this.transTarget = null;
        this.transAnim = null;
      });
    } else {
      this.arc = {
        ...this.arc,
        poly: this.arc.poly.translate(by)
      };
      this.sides = {
        ...this.sides,
        poly: this.sides.poly.translate(by)
      };
      this._bounds = this.bounds.translate(by);
      this._tip = this.tip.translate(by);
      this._pivot = this.pivot.translate(by);
      if (this.selfDraw) this.draw();
    }
  }

  moveTo(loc: Point, duration?: number) {
    const trans = loc.subtract(this.pivot);
    if (this.transAnim != null) {
      if (this.transTarget == null || !loc.equals(this.transTarget)) {
        this.transTarget = loc;
        this.moveBy(trans, duration);
      }
    } else {
      this.transTarget = loc;
      this.moveBy(trans, duration);
    }
  }

  tipMoveTo(loc: Point) {
    const trans = loc.subtract(this.tip);
    this.moveBy(trans);
  }

  rotateBy(amount: number, options?: {duration?: number, around?: Point}) {
    if (options?.duration) {
      this.rotAnim?.cancel();
      const startAngle = this.angle;
      this.rotAnim = animate((p, _d, _c) => {
        const newAngle = (amount * p) + startAngle;
        this.rotateTo(newAngle, {around: options?.around});
      }, options.duration);
      this.rotAnim.promise.then(() => {
        this.rotTarget = null;
        this.rotAnim = null;
      });
    } else {
      this._angle = this.angle + amount;
      const c = options?.around ?? this.pivot;
      this.arc = {
        ...this.arc,
        poly: this.arc.poly.rotate(amount, c)
      };
      this.sides = {
        ...this.sides,
        poly: this.sides.poly.rotate(amount, c)
      };
      this._bounds = this.bounds.rotate(amount, c);
      this._tip = this.tip.rotate(amount, c);
      this._pivot = this.pivot.rotate(amount, c);
      if (this.selfDraw) this.draw();
    }
  }

  rotateTo(angle: number, options?: {duration?: number, around?: Point}) {
    const diff = equivAngle(shortAngle(angle - this.angle));
    if (this.rotAnim != null) {
      if (this.rotTarget != angle) {
        this.rotTarget = angle;
        this.rotateBy(diff, options);
      }
    } else {
      this.rotTarget = angle;
      this.rotateBy(diff, options);
    }
  }

  setArcColor(name: string) {
    this.arc.path?.$el.css({stroke: name});
  }

  distanceToArc(from: Point) {
    return Point.distance(from, this.arc.poly.project(from));
  }

  draw() {
    if (this.arc.path == null) {
      this.firstDraw = false;
      this.arc.path = this.$geopad.drawPath(this.arc.poly, {animated: 0});
      this.sides.path = this.$geopad.drawPath(this.sides.poly, {animated: 0});
    } else {
      this.arc.path.redraw(this.arc.poly);
      this.sides.path!.redraw(this.sides.poly);
    }
  }

  remove() {
    this.arc.path?.delete(0);
    this.sides.path?.delete(0);
  }

}

export function pizzaRings($step: Step) {
  const $svg = $step.$('.circle-area')!;
  console.log($svg);
  const $slider = $step.$('x-slider') as Slider;
  const $circle = $N('g', {class: 'circle'}, $svg);
  const triangle = $N('g', {class: 'circle'}, $svg);

  const r = 60;

  function drawRings(element: ElementView, p: number) {
    const $rings = element.children;

    const rmin = Math.pow(20 + p * 100, 1 + p) - 20;
    const dr = r / $step.model.n2;

    const cx = 170 + p * (10 - 165);
    const cy = 65 + p * (150 - 65) - rmin;

    for (let i = 0; i < $step.model.n2; ++i) {
      const angle = Math.PI - 1.999 * Math.PI * ((i + 0.5) * dr) /
                    (rmin + (i + 0.5) * dr);
      const d = ring(cx, cy, rmin + i * dr, rmin + (i + 1) * dr, Math.PI,
          angle);
      $rings[i].setAttr('d', d);
    }

    triangle.css('transform', `scale(${1 - 0.1 * p})`);
    if (p > 0.95) $step.score('slider');
  }

  $step.model.watch((state: any) => {
    // TODO Reuse elements for better performance.
    triangle.removeChildren();
    $circle.removeChildren();

    for (let i = 0; i < state.n2; ++i) {
      $N('path', {}, triangle);
      $N('path', {}, $circle);
    }

    drawRings($circle, 0);
    drawRings(triangle, $slider.current / $slider.steps);
  });

  $slider.on('move', (x) => drawRings(triangle, x / $slider.steps));
}

function ring(cx: number, cy: number, r1: number, r2: number, fromAngle: number, toAngle: number) {
  if (fromAngle > toAngle) [fromAngle, toAngle] = [toAngle, fromAngle];
  fromAngle -= Math.PI / 2;
  toAngle -= Math.PI / 2;

  const A = Point.fromPolar(toAngle);
  const B = Point.fromPolar(fromAngle);
  const flag = (toAngle - fromAngle <= Math.PI) ? 0 : 1;

  return `M ${A.x * r1 + cx} ${A.y * r1 + cy}` +
         `A ${r1} ${r1} 0 ${flag} 0 ${B.x * r1 + cx} ${B.y * r1 + cy}` +
         `L ${B.x * r2 + cx} ${B.y * r2 + cy}` +
         `A ${r2} ${r2} 0 ${flag} 1 ${A.x * r2 + cx} ${A.y * r2 + cy} Z`;
}
