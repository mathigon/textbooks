// =============================================================================
// Area and Shapes
// (c) Mathigon
// =============================================================================


import {repeat, tabulate, tabulate2D} from '@mathigon/core';
import {clamp, nearlyEquals, subsets} from '@mathigon/fermat';
import {$N, animate, CanvasView, ElementView, EventCallback, loadScript, Observable, observe, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {Arc, Circle, intersections, Line, Point, Polygon, Polyline, Rectangle, Segment} from '@mathigon/euclid';
import {Slider, Step} from '@mathigon/studio';

import {Geopad, GeoPath, GeoPoint, Path, Polypad, Tile} from '../shared/types';
import {BinarySwipe} from '../shared/components/binary-swipe/binary-swipe'; // import types
import {VoronoiModel} from './components/voronoi';
import {fillSquares, filterMap, geopadReset, getLineupShift, getTangramPolystr, getX, getY, Guide, handlePathing, HelperPoly, initLineup, initPizza, length, LineupSlices, makeParallelogram, nearest, nearestSimple, polypadPrep, RenderedGeopadPoly, ResizeableSquare, ring, RopePoly, separateSlices, setupBaseHeight, setupDraggableRectangles, setupRope, SideData, Slice, slicesHighlight, tangramComplete, tangramScale, toParallelogram, toRect, touches} from './components/util';

import '../shared/components/binary-swipe/binary-swipe';  // import component
import '../shared/components/relation/relation';
import {GREY, ORANGE, TEAL} from '../shared/constants';

// SECTION 1: Introduction

interface Step1<T> extends Step {
  model: Observable<T>;
}

const courseModel = observe({
  firstArea: {
    ropeUsed: 0,
    cobblestones: 0,
    points: [] as Point[]
  }
});

export function performance1($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('move');
  const scale = (600 / 30) * 4; // Pixels per meter
  const blockSize = (1 / 4) * scale;
  const blocks: {poly: Rectangle, path: GeoPath}[] = [];
  tabulate2D((column, row) => {
    const block = new Rectangle(
        new Point(column * blockSize, row * blockSize),
        blockSize,
        blockSize
    );
    const path = $geopad.drawPath(block);
    path.$el.addClass('performance-unit');
    blocks.push({poly: block, path});
  }, 30, 20);
  setupRope('performance-1', 20 * scale, $geopad, $step, (line: Polyline, reset: VoidFunction) => {
    const areaBlocks = blocks.filter(block => block.poly.points.every(point => line.contains(point)));
    for (const block of areaBlocks) block.path.$el.addClass('performance-unit-selected');
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

export function performance2($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const initRope = new RopePoly(...courseModel.firstArea!.points!);
  const ropePath = $geopad.drawPath(initRope.poly);
  const handle = $geopad.drawPoint(new Point(-10, -10), {interactive: true});
  $geopad.switchTool('move');
  let moving = false;
  let nearest: {point: Point, index: number};
  $geopad.on('pointermove', b => {
    const m = new Point(b.offsetX, b.offsetY);
    if (!moving) {
      nearest = initRope.getNearest(m);
      handle.redraw(nearest.point);
    } else {
      handle.redraw(m);
      initRope.movePoint(nearest.index, m);
      ropePath.redraw(initRope.poly);
    }
  });
  $geopad.on('pointerdown', () => moving = true);
  $geopad.on('pointerup', () => moving = false);
}

const fieldLength = 110;
const scale = 1 / 5;
const imageWidth = 525;
const tileSize = imageWidth / (fieldLength * scale);

export function grassPlacement($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, 600, 350, false);
  const options = {
    count: 2,
    dimensions: new Point(tileSize, tileSize),
    initLocations: [new Point(10, 50), new Point(40, 50)]
  };
  setupDraggableRectangles($polypad, options);
}

export function stripPlacement($step: Step) {
  const $polypad = $step.$('.strip-placement > x-polypad') as Polypad;
  polypadPrep($polypad, 600, 350, false);
  const options = {
    count: 2,
    dimensions: new Point(tileSize, tileSize / 4),
    initLocations: [new Point(10, 50), new Point(40, 50)]
  };
  setupDraggableRectangles($polypad, options);
}

export function centimeters($step: Step) {
  const dropAreaPxWidth = 400;
  const centimeterSize = dropAreaPxWidth / 5;
  const dropAreaDimensions = (new Point(5, 3)).scale(centimeterSize);
  fillSquares($step, centimeterSize, dropAreaDimensions, '5 centimeters', '3 centimeters', false, () => $step.addHint('correct'));
}

export function halfMeters($step: Step) {
  const dropAreaPxWidth = 300;
  const meterSize = dropAreaPxWidth / 3;
  const dropAreaDimensions = (new Point(3, 3)).scale(meterSize);
  fillSquares($step, dropAreaDimensions.x / 2, dropAreaDimensions, '1 meter', '1 meter', true, () => $step.addHint('correct'));
}

// SECTION 2: Parallelograms

export function boatBuilding($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const baseWidth = 300;
  const height = 120;
  const skew = 50;
  const corner1 = new Point(100, 100);
  const pieces: RenderedGeopadPoly[] = [];
  const middle = new RenderedGeopadPoly(
      (new Rectangle(corner1.shift(skew, 0), baseWidth, height)).polygon,
      $geopad
  );
  pieces.push(middle);
  let finishedRect: HelperPoly | undefined = undefined;
  const options = {
    draggable: true,
    snap: true,
    onEnd: () => {
      const [m, l, r] = pieces;
      const contactEdgesA =
            filterMap(
                l.poly.edges,
                edge1 => {
                  const a = m.poly.edges.find(
                      edge2 => edge2.equals(edge1)
                  );
                  const b = r.poly.edges.find(
                      edge2 => edge2.equals(edge1)
                  );
                  return a != undefined ? a : b;
                }
            );
      const contactEdgesB = filterMap(
          r.poly.edges,
          edge1 => {
            const a = m.poly.edges.find(
                edge2 => edge2.equals(edge1)
            );
            const b = l.poly.edges.find(
                edge2 => edge2.equals(edge1)
            );
            return a != undefined ? a : b;
          }
      );
      if (contactEdgesA.length > 0 && contactEdgesB.length > 0) {
        finishedRect = toRect([
          ...l.poly.points,
          ...m.poly.points,
          ...r.poly.points
        ]);
        if (finishedRect != undefined) {
          for (const piece of pieces) piece.erase();
          $geopad.drawPath(finishedRect);
          $step.addHint('correct');
          $step.score('arranged');
        }
      }
    }
  };
  const left = new RenderedGeopadPoly(
      [
        corner1,
        corner1.shift(skew, 0),
        corner1.shift(skew, height)
      ],
      $geopad,
      options
  );
  pieces.push(left);
  const right = new RenderedGeopadPoly(
      [
        corner1.shift(baseWidth + skew, 0),
        corner1.shift(baseWidth + skew, height),
        corner1.shift(baseWidth + (skew * 2), height)
      ],
      $geopad,
      options
  );
  pieces.push(right);
  // [TODO] handle this via constructor option rather than external function
  for (const [index, geoPoly] of pieces.entries()) {
    geoPoly.addSnapFriend(pieces[(index + 1) % 3]);
    geoPoly.addSnapFriend(pieces[(index + 2) % 3]);
  }
  $geopad.switchTool('move');
  $step.onScore('arranged', () => {
    const rect = finishedRect!;
    const [a, b, _c, d] = rect.sortedPoints;
    const lineDist = 15;
    const side = (new Segment(a, b)).shift(-lineDist, 0);
    const bottom = (new Segment(b, d)).shift(0, lineDist);
    const $side = $geopad.drawPath(side);
    $side.setLabel('28.4 meters');
    const $bottom = $geopad.drawPath(bottom);
    $bottom.setLabel('132 meters');
  });
}

export function glassArea($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  const measureTile = $polypad.newTile('tangram', '2') as Tile;
  const points = (measureTile.path as Polygon).points;
  const squareSize = Point.distance(points[0], points[1]);
  measureTile.delete();
  const startCorner = new Point(squareSize, squareSize);
  $polypad.$svg.setAttr('viewBox', '0 0 600 400');
  $polypad.canDelete = $polypad.canCopy = false;
  const tiles: Tile[] = [];
  tabulate(index => {
    const t = $polypad.newTile('tangram', '2');
    const xOffset = squareSize * (index % 4);
    const yOffset = squareSize * Math.floor(index / 4);
    t.setTransform(startCorner.shift(xOffset, yOffset), 45);
    tiles.push(t);
  }, 12);
  // top left: 0, bottom right: 2
  let figure = 2;
  const $submitShape = $step.$('button.btn.submit-shape') as ElementView;
  $submitShape.on('click', () => {
    const tileTouches =
      touches(
          subsets(tiles.map(tile => tile.transformed as Polygon), 2) as [Polygon, Polygon][],
          squareSize
      );
    const tilesPerimeters = tiles.length * 4;
    // [TODO]?: Check whether all tiles are touching
    $step.score(`figure-${figure}`);
    const perimeter = tileTouches.reduce((runningPerimeter, overlap) => runningPerimeter - (overlap * 2), tilesPerimeters);
    $step.$(`table td.perimeter${figure}`)!.append(new Text(perimeter.toString()));
    if (figure == 3) $submitShape.setAttr('disabled', true);
    figure++;
  });
}

const doughBaseWidth = 300;
const doughHeight = 180;
const doughParalellogram = makeParallelogram(doughBaseWidth, doughHeight, 75);

export function dough($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('move');
  const areaSize = 150;
  const _cuttersArea =
    new RenderedGeopadPoly(
        (new Rectangle(new Point(15, 15), areaSize, areaSize)).points,
        $geopad, {color: 'red'}
    );
  const shiftBy = new Point(200, 200);
  const dough =
    new RenderedGeopadPoly(
        doughParalellogram.translate(shiftBy),
        $geopad,
        {color: 'blue'}
    );
  const cutters: RenderedGeopadPoly[] = [];
  tabulate(index => {
    const cutterSize = 30;
    const padding = (areaSize - (cutterSize * 2)) / 3;
    const spacing = cutterSize + padding;
    const column = index % 2;
    const row = Math.floor(index / 2);
    const cutterX = 15 + padding + (column * spacing);
    const cutterY = 15 + padding + (row * spacing);
    const poly = new Rectangle(new Point(cutterX, cutterY), cutterSize, cutterSize);
    const cutter =
      new RenderedGeopadPoly(
          poly.points,
          $geopad,
          {
            draggable: true,
            onEnd: _arg => {
              if (dough.poly.containsPoly(cutter.poly)) {
                $step.addHint('correct');
                if (
                  cutters.every(c => dough.poly.containsPoly(c.poly)) &&
                  intersections(...cutters.map(c => c.poly)).length == 0
                ) {
                  $step.score('cutters-placed');
                }
              } else $step.addHint('incorrect');
            }
          }
      );
    cutters.push(cutter);
  }, 4);
}

export function dough2($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('line');
  const para = // Parallelogram to be 'cut' by user
    new RenderedGeopadPoly(
        doughParalellogram.moveTo(new Point(300, 200)),
        $geopad
    );
  let cutLine: GeoPath | undefined; // The 'cut' to be drawn; a straight line
  let cutStart: GeoPoint | undefined; // The starting location for the cut line
  let cutting = false; // Whether the cut line is currently being drawn
  $geopad.on('begin:path', ({path, start}: {path: GeoPath, start: GeoPoint}) => {
    cutting = true;
    cutLine = path;
    cutStart = start;
  });
  slide($geopad, {
    $box: $geopad.$svg,
    move: p => {
      if (cutting) {
        const startPoint = cutStart!.value!;
        cutLine?.components[0].setValue(startPoint);
        cutLine?.components[1].setValue(new Point(startPoint.x, p.y));
      }
    }
  });
  $geopad.on('add:path', () => {
    cutting = false;
    const seg = cutLine!.value as Line;
    const cut = new Line(seg.p1, new Point(seg.p1.x, seg.p2.y));
    cutLine?.delete();
    if (cutLine != undefined) for (const c of cutLine.components) c.delete();
    para.erase();
    const cutPolys = para.cut(cut, {draggable: true, snap: true, onEnd: _arg => {
      const [a, b] = cutPolys!;
      const [contactEdge, ..._rest] =
        filterMap(
            a.poly.edges,
            edge => b.poly.edges.find(e => e.equals(edge))
        );
      if (contactEdge != undefined) {
        const notContactPoint =
          (point: Point) =>
            !point.equals(contactEdge.p1) &&
            !point.equals(contactEdge.p2);
        const aPoints = a.poly.points.filter(notContactPoint);
        const bPoints = b.poly.points.filter(notContactPoint);
        const r = toRect([...aPoints, ...bPoints]);
        if (r != undefined) {
          a.erase();
          b.erase();
          $step.score('dough-arranged');
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          fillSquares(
              $step,
              doughBaseWidth / 5,
              new Point(doughBaseWidth, doughHeight),
              '',
              '',
              true,
              () => {
                $step.addHint('correct');
                $step.score('area-filled');
              }
          );
        }
      }
    }});
    if (cutPolys != undefined) {
      const [cutA, cutB] = cutPolys;
      cutA.addSnapFriend(cutB);
      cutB.addSnapFriend(cutA);
      $geopad.switchTool('move');
    }
  });
}

export function identifyParallelograms($step: Step) {
  const $svg = $step.$('svg') as SVGParentView;
  for (const [i, $path] of $svg.$$('path').entries()) {
    if ($path.hasClass('parallelogram')) {
      $path.one('click', () => {
        $path.addClass('correct');
        $step.addHint('correct');
        $step.score('selected-' + i);
      });
    } else {
      $path.one('click', () => {
        $path.addClass('incorrect');
        $step.addHint('incorrect');
      });
    }
  }
}

export function apartments($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  $geopad.switchTool('move');
  const baseWidth = 300;
  const height = 120;
  const skew = 50;
  const corner1 = new Point(100, 100);
  $step.$('button.show-parallelogram')?.on('click', () => {
    const _para = new RenderedGeopadPoly(
        [
          corner1,
          corner1.shift(baseWidth, 0),
          corner1.shift(baseWidth + skew, height),
          corner1.shift(skew, height)
        ],
        $geopad
    );
    $geopad.switchTool('line');
    // [TODO]: come back to this later; there's some kind of
    // snapping-related bug with geopad here
    /*
    let cutLine: GeoPath | undefined;
    let cutStart: GeoPoint | undefined;
    let cutting = false;
    $geopad.on('begin:path', ({path, start}: {path: GeoPath, start: GeoPoint}) => {
      cutting = true;
      cutLine = path;
      cutStart = start;
    });
    slide($geopad, {
      $box: $geopad.$svg,
      move: p => {
        console.log('mouse: ', p);
        if (cutting) {
          const startPoint = cutStart!.value!;
          // [TODO]: use cutLine.setComponents
          const partialPoint = new Point(startPoint.x, p.y);
          console.log('start point: ', startPoint);
          console.log('partial point: ', partialPoint);
          cutLine!.redraw(new Segment(startPoint, partialPoint));
        }
      }
    });
    $geopad.on('add:path', () => {
      cutting = false;
      const seg = cutLine!.value as Line;
      const cut = new Line(seg.p1, new Point(seg.p1.x, seg.p2.y));
      if (cut.length == height) $step.addHint('correct');
    });
    */
  });
}

// SECTION 3: Triangles

export function worldTradeCenter($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, 600, 400, false);
  const width = 40;
  const height = 175;
  const tri =
    new Polygon(
        new Point(0, 0),
        new Point(width, 0),
        new Point(width / 2, height)
    );
  const $tri1 = $polypad.newTile('polygon', getTangramPolystr(tri.points)) as Tile;
  $tri1.setTransform(new Point(400, 250), 180);
  $tri1.setColour('lightskyblue');
  const $tri2 = $polypad.newTile('polygon', getTangramPolystr(tri.points)) as Tile;
  $tri2.setTransform(new Point(400, 250), 180);
  $tri2.setColour('lightskyblue');
  const checkDone = () => {
    const xdiff = Math.abs($tri1.posn.x - $tri2.posn.x);
    const ydiff = Math.abs($tri1.posn.y - $tri2.posn.y);
    const rotDiff = Math.abs($tri1.rot - $tri2.rot);
    const done =
      xdiff === 60 &&
      ydiff === height &&
      rotDiff % 180 === 0;
    if (done) {
      $step.addHint('correct');
      $step.score('arranged');
      const $height = $N('path', {}, $polypad.$svg) as SVGView;
      $height.addClass('height');
      const baseX = ($tri1.path as Polygon).centroid.x;
      $height.draw(
          new Segment(
              new Point(baseX, $tri1.posn.y),
              new Point(baseX, $tri2.posn.y)
          )
      );
    }
  };
  $tri1.$el.on('pointerup', checkDone);
  $tri2.$el.on('pointerup', checkDone);
}

export function congruentTriangles($step: Step) {
  type Coord = [number, number];
  type Tri = [Coord, Coord, Coord]
  const coords: [Tri, Tri, Tri, Tri, Tri, Tri] = [
    [
      [0, 69.2], [0, 0], [218.5, 69.2]
    ],
    [
      [0, 162], [59.5, 0], [89.3, 162]
    ],
    [
      [0, 89.9], [0, 0], [162.1, 89.9]
    ],
    [
      [0, 109.4], [41, 0], [111.2, 109.4]
    ],
    [
      [0, 22.1], [58.7, 0], [143.7, 22.1]
    ],
    [
      [0, 33.4], [81, 0], [140.8, 33.4]
    ]
  ];
  const shifts: Coord[] = [
    [10, 10],
    [300, 10],
    [450, 20],
    [10, 200],
    [260, 350],
    [400, 315]
  ];
  const rots = [0, 40, 60, 0, 160, 195];
  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, 600, 400, false);
  const $tris =
    coords
        .map(triCoords => triCoords.map(([x, y]) => new Point(x, y)))
        .map((triPoints, index) => {
          const $tile = $polypad.newTile('polygon', getTangramPolystr(triPoints)) as Tile;
          const [x, y] = shifts[index];
          $tile.setTransform(new Point(x, y), rots[index]);
          $tile.setColour(TEAL);
          return $tile;
        });
  const $pairs: [Tile, Tile][] = [];
  const checkDone = () => {
    const allTouching = $pairs.every(([$a, $b]) => {
      const over = $a.posn.equals($b.posn) && $a.rot == $b.rot;
      if (over) return false;
      return ($a.path as Polygon).edges.some(
          aEdge => ($b.path as Polygon).edges.some(
              bEdge => aEdge.equals(bEdge)
          )
      );
    });
    if (allTouching) {
      $step.score('arranged');
      $step.addHint('correct');
    }
  };
  $step.$('button.copies')?.one('click', () => {
    for (const $tri of $tris) {
      const $copy = $tri.copy() as Tile;
      $copy.setColour(ORANGE);
      $pairs.push([$tri, $copy]);
    }
    for (const [$a, $b] of $pairs) {
      $a.$el.on('pointerup', checkDone);
      $b.$el.on('pointerup', checkDone);
    }
  });
}

export function area3($step: Step) {
  const $container = $step.$('.area')!;
  const $polypad = $container.$('x-polypad') as Polypad;
  const $geopad = $container.$('x-geopad') as Geopad;
  $geopad.addClass('init');
  const width = 300;
  const height = 175;
  const triTemplate = new Polygon(new Point(0, 0), new Point(width / 2, height), new Point(width, 0));
  const $tri1 = $polypad.newTile('polygon', getTangramPolystr(triTemplate.points)) as Tile;
  $tri1.setTransform(new Point(300, 100), 35);
  $tri1.setColour('navy');
  const $tri2 = $polypad.newTile('polygon', getTangramPolystr(triTemplate.points)) as Tile;
  $tri2.setTransform(new Point(300, 100), 35);
  $tri2.setColour('orange');
  const checkDone = () => {
    const para = toParallelogram($tri1.path as Polygon, $tri2.path as Polygon);
    if (para != undefined) {
      $step.addHint('correct');
      $step.score('arranged');
      $polypad._el.remove();
      $geopad.addClass('vis');
      $geopad.switchTool('move');
      const options = {
        onSideSelected: () => $step.score('side-selected'),
        onComplete: () => {
          $step.addHint('correct');
          $step.score('complete');
        },
        onIncorrect: () => $step.addHint('incorrect')
      };
      setupBaseHeight(para, $geopad, options);
    }
  };
  $tri1.$el.on('pointerup', checkDone);
  $tri2.$el.on('pointerup', checkDone);
}

export function triangleBases($step: Step) {
  const basePoints = [
    new Point(237.1, 103.3),
    new Point(296, 34.1),
    new Point(527.7, 103.3)
  ];
  const [pointA, pointB, pointC] = basePoints;
  const original = new Polygon(...basePoints);
  const partnerA = new Polygon(pointB, new Point(586.6, 34.1), pointC);
  const partnerB = new Polygon(pointA, pointC, new Point(468.8, 172.5));
  const partnerC = new Polygon(new Point(5.5, 34.1), pointA, pointB);
  const [$geopadA, $geopadB, $geopadC] = $step.$$('x-geopad') as Geopad[];
  const onIncorrect = () => $step.addHint('incorrect');
  const [optionsA, optionsB, optionsC] = [
    {
      onIncorrect,
      onComplete: () => $step.score('a-done'),
      partner: {
        poly: partnerA,
        baseIndex: 2
      }
    },
    {
      onIncorrect,
      onComplete: () => $step.score('b-done'),
      partner: {
        poly: partnerB,
        baseIndex: 0
      }
    },
    {
      onIncorrect,
      onComplete: () => $step.score('c-done'),
      partner: {
        poly: partnerC,
        baseIndex: 1
      }
    }
  ];
  setupBaseHeight(original, $geopadA, optionsA);
  setupBaseHeight(original, $geopadB, optionsB);
  setupBaseHeight(original, $geopadC, optionsC);
}

export function triangleSelection($step: Step) {
  const $svg = $step.$('svg') as SVGParentView;
  const $pairs = tabulate(index => {
    const ind = index + 1;
    return [
      $svg.$(`#original${ind}`) as SVGView,
      $svg.$(`#partner${ind}`) as SVGView
    ];
  }, 3);
  let clicks = 0;
  for (const [$a, $b] of $pairs) {
    $a.on('click', () => {
      if (!$a.hasAttr('clicked')) {
        $step.addHint('correct');
        $a.setAttr('clicked', true);
        $b.addClass('vis');
        clicks++;
        if (clicks == 3) $step.score('clicks');
      }
    });
  }
}

// SECTION 4: Polygons

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

export async function voronoi1($step: Step1<VoronoiModel>) {

  await loadScript('/content/shared/vendor/d3-delaunay.min.js');

  const $geopad = $step.$('x-geopad') as Geopad;
  const $canvas = $geopad.$('canvas') as CanvasView;
  const $voronoiButton = $step.$('button.show-voronoi')!;
  const bounds = [0, 0, $canvas.canvasWidth, $canvas.canvasHeight];

  $step.model.dynPoints = [];
  $step.model.vorOpacity = 0;
  $step.model.cells = [];

  for (const locationPoint of cafeLocationPoints) {
    $geopad.drawPoint(locationPoint, {classes: 'red', interactive: false});
  }

  $step.model.cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  $voronoiButton.on('click', () => {
    showVor($step);
  });

  $geopad.$svg.on('pointermove', e => {
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
      for (const [index, cell] of cells.entries()) {
        const opacity = cell.over ? $step.model.vorOpacity / 2 : $step.model.vorOpacity / 3;
        $canvas.draw(
            cell.poly,
            {
              fill: voronoiColours[index % 9],
              stroke: GREY,
              strokeWidth: 2,
              opacity
            }
        );
      }
    }

    for (const {gPoint, dlOpacity} of dynPoints) {

      const edges: Segment[] = [];

      let shortest = {len: Number.POSITIVE_INFINITY, ind: 0};

      for (const [index, locationPoint] of cafeLocationPoints.entries()) {
        const newEdge = new Segment(locationPoint, gPoint.value!);
        if (newEdge.length < shortest.len) {
          shortest = {len: newEdge.length, ind: index};
        }
        edges.push(newEdge);
      }

      for (const [index, edge] of edges.entries()) {
        const stroke = index == shortest.ind ? 'red' : GREY;
        const strokeWidth = index == shortest.ind ? 2 : 1;
        const opacity = index == shortest.ind ? 1 : dlOpacity;
        if (opacity != 0) {
          $canvas.draw(edge, {stroke, strokeWidth, opacity});
        }
      }
    }
  });
}

async function handleAnim(index: number, $step: Step1<VoronoiModel>) {
  window.setTimeout((_: any) => {
    const _anim = animate((progress, _) => {
      const dlOpacity = 1 - progress;
      const dp = $step.model.dynPoints;
      dp[index] = {...dp[index], dlOpacity};
      $step.model.dynPoints = dp.slice();
    }, 500);
  }, 1000);
}

async function showVor($step: Step1<VoronoiModel>) {
  const anim = animate((progress, _) => {
    $step.model.vorOpacity = progress;
  }, 2000);
  anim.promise.then(_ => $step.score('voronoi-diagram'));
}

export async function voronoi2($step: Step1<VoronoiModel>) {

  await loadScript('/content/shared/vendor/d3-delaunay.min.js');

  const $geopad = $step.$('x-geopad') as Geopad;

  const bounds = [0, 0, $geopad.innerWidth, $geopad.innerHeight];
  const cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  for (const [index, cell] of cells.entries()) {
    let options = {};
    if (index == 12) {
      options = {class: 'triangle-cell'};
    }
    const $cell = $N('path', options, $geopad.$paths) as SVGView;
    $cell.addClass(`voronoi-${(index % 9) + 1}`);
    $cell.draw(cell.poly);
  }


  let selectedEdge = -1;
  let edgeChosen = false;
  const tri = cells[12].poly;
  for (const [index, edge] of tri.edges.slice(0, 3).entries()) {
    const edgePath = $geopad.drawPath(edge);
    edgePath.$el.addClass('edge');
    // [TODO]: Replace with stylesheet-based css?
    edgePath.$el.on('pointerenter', () => {
      if (selectedEdge != index) {
        edgePath.$el.addClass('edge-hover');
      }
    });
    edgePath.$el.on('pointerleave', () => {
      if (selectedEdge != index) {
        edgePath.$el.removeClass('edge-hover');
      }
    });
    edgePath.$el.on('click', () => {
      if (!edgeChosen) {
        edgeChosen = true;
        edgePath.$el.addClass('selected-edge');
        selectedEdge = index;
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
        heightPath.$el.addClass('height');

        $step.model.nearby = false;
        $geopad.switchTool('line');
        let p: GeoPath;
        let cb: EventCallback;
        $geopad.on('begin:path', ({path, _}: {path: GeoPath, _: any}) => {
          p = path;
          cb = _ => handlePathing(path, edgePath, heightPath, height, () => $step.model.nearby = true, () => $step.model.nearby = false);
          path.$parent.on('pointermove', cb);
        });
        $geopad.on('add:path', _ => {
          $geopad.off('pointermove', cb);
          if ($step.model.nearby) {
            $step.score('height-drawn');
            $step.addHint('correct');
            const p1 = (p.value as Segment).p1;
            const p2 = heightLine.project(p1);
            p.components[0].setValue(p1);
            p.components[1].setValue(p2);
            p.setLabel(height.toFixed(2).toString());
          } else {
            for (const c of p.components) c.delete();
            p.delete();
            heightPath.$el.hide();
            $step.addHint('incorrect');
          }
        });
      }
    });
  }

  $geopad.showLabels = true;
}

export async function voronoi3($step: Step1<VoronoiModel>) {

  const $geopad = $step.$('x-geopad') as Geopad;

  const bounds = [0, 0, $geopad.innerWidth, $geopad.innerHeight];
  const cells = getVoronoiPolys(bounds).map(poly => {
    return {poly, over: false};
  });

  for (const [index, cell] of cells.entries()) {
    let options = {};
    if (index == 6) {
      options = {class: 'four-sided'};
    } else if (index == 3) {
      options = {class: 'five-sided'};
    } else if (index == 5) {
      options = {class: 'six-sided'};
    }
    const $cell = $N('path', options, $geopad.$paths) as SVGView;
    $cell.addClass(`voronoi-${(index % 9) + 1}`);
    $cell.draw(cell.poly);
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

export function sortPolygons($step: Step) {

  const $sort = $step.$('x-binary-swipe') as BinarySwipe;

  $sort.on('correct', comment => $step.addHint(comment, {class: 'correct'}));
  $sort.on('incorrect', ({hint}) => $step.addHint(hint, {class: 'incorrect'}));
  $sort.on('complete', () => {
    $step.score('cards-sorted');
  });
}

export async function populations($step: Step) {

  await loadScript('/content/shared/vendor/d3-delaunay.min.js');

  const $geopad = $step.$('x-geopad.voronoi-1') as Geopad;

  const cells = getVoronoiPolys([0, 0, 600, 400]).map((poly, i) => {
    return {poly, color: (i % 9) + 1};
  });
  const pentagon = cells[8];
  cells[8] = cells.pop()!;
  cells.push(pentagon);
  for (const [index, cell] of cells.entries()) {
    let options = {};
    if (index == cells.length - 1) {
      options = {class: 'population-pentagon'};
    }
    const $cell = $N('path', options, $geopad.$paths) as SVGView;
    $cell.addClass(`voronoi-${cell.color}`);
    $cell.draw(cell.poly);
  }
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

  for (const [index, $geopad] of $geopads.entries()) {

    const p: {[key: string]: boolean} = {};

    for (const point of $geopad.points) {
      p[point.name] = false;
      let initPosition: Point | undefined;
      point.$el.on('pointerdown', () => {
        initPosition = point.value as Point;
      });
      point.$el.on('pointerup', () => {
        if (initPosition != undefined && !initPosition.equals(point.value as Point)) {
          pointsMoved[index][point.name] = true;
          if (pointsMoved.every(atLeastTwoMoved) && !doneMoving) {
            doneMoving = true;
            $step.score('verts-moved');
          }
        }
      });
    }

    pointsMoved.push(p);
  }
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
    tile.setTransform(new Point(tangramScale(t[0], baseOffset), tangramScale(t[1], baseOffset)), t[2]);
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

  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, viewWidth, viewHeight, true);

  const $bg = $step.$('svg.solution-outline')! as SVGParentView;
  $bg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);

  for (const [index, polyVals] of paradoxData.polys.entries()) {
    const $bgPath = $N('path', {}, $bg) as SVGView;
    const poly = (new Polygon(...polyVals)).translate(finalPositions[index]);
    $bgPath.draw(poly);
  }

  for (const [index, poly] of paradoxData.polys.entries()) {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    if (index == 0) {
      tile.$el.addClass('red-tri');
    }
    tile.setColour(paradoxData.polyColours[index]);
    tile.setTransform(paradoxData.polyOrigins[index]);
  }

  let done = false;
  $polypad.on('move-selection', () => {
    const allPositioned = Array.from($polypad.tiles.values()).every((tile, index) =>
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
  const tiles = Array.from($polypad.tiles.values());
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

export function currysParadox2($step: Step) {

  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, 425, 225, true);

  for (const [index, poly] of paradoxData.polys.entries()) {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setTransform(paradoxData.polyOrigins[index]);
  }
}

export function currysParadox3($step: Step) {

  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, paradoxData.viewWidth, paradoxData.viewHeight, true);

  for (const [index, poly] of paradoxData.polys.entries()) {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setTransform(paradoxData.finalRel[index].shift(tangramScale(1), tangramScale(2)));
  }
  const outlineTile = $polypad.newTile('polygon', paradoxData.outlineStr);
  outlineTile.setTransform(new Point(tangramScale(1), tangramScale(7)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.addClass('curry-outline');

  const $zoomSlider = $step.$('x-slider') as Slider;
  let zoomed1 = false;
  $zoomSlider.on('move', n => {

    if (n > 950 && !zoomed1) {
      zoomed1 = true;
      $step.score('first-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $polypad.$svg.setAttr('viewBox', `${9 * (tangramScale(1) - factor)} ${4 * (tangramScale(1) - factor)} ${paradoxData.baseWidth * factor} ${paradoxData.baseHeight * factor}`);
    for (const tile of $polypad.tiles.values()) {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    }
    $outline.css({'stroke-width': `${scale * 4}px`});
  });
}

export function currysParadox4($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, paradoxData.viewWidth, paradoxData.viewHeight, true);

  for (const [index, poly] of paradoxData.polys.entries()) {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setTransform(paradoxData.finalRel[index].shift(tangramScale(1), tangramScale(2)));
    tile.$el.addClass('paradox-poly');
  }
}

export function currysParadox5($step: Step) {

  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, paradoxData.viewWidth, paradoxData.viewHeight, true);

  // TODO Cleanup duplicate code!
  for (const [index, poly] of paradoxData.polys.entries()) {
    const polyStr = getTangramPolystr(poly);
    const tile = $polypad.newTile('polygon', polyStr);
    tile.setColour(paradoxData.polyColours[index]);
    tile.setTransform(paradoxData.nextRelative[index].shift(tangramScale(1), tangramScale(2)));
  }
  const outlineTile = $polypad.newTile('polygon', paradoxData.outlineStr);
  outlineTile.setTransform(new Point(tangramScale(1), tangramScale(7)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.addClass('curry-outline');

  const $zoomSlider = $step.$('x-slider') as Slider;
  let zoomed2 = false;
  $zoomSlider.on('move', n => {

    if (n > 950 && !zoomed2) {
      zoomed2 = true;
      $step.score('second-zoom');
    }

    const scale = 1 - (n / 1100);
    const factor = tangramScale(scale);
    $polypad.$svg.setAttr('viewBox', `${6 * (tangramScale(1) - factor)} ${5 * (tangramScale(1) - factor)} ${paradoxData.baseWidth * factor} ${paradoxData.baseHeight * factor}`);
    for (const tile of $polypad.tiles.values()) {
      tile.$el.$('g path.polygon-tile')?.css({'stroke-width': `${scale}px`});
    }
    $outline.css({'stroke-width': `${scale * 4}px`});
  });
}

export function currysParadox6($step: Step) {
  const $polypad = $step.$('x-polypad') as Polypad;
  polypadPrep($polypad, 425, 475, true);

  for (const [index, poly] of paradoxData.polys.entries()) {
    const polyStr = getTangramPolystr(poly);

    const tile1 = $polypad.newTile('polygon', polyStr);
    tile1.setColour(paradoxData.polyColours[index]);
    tile1.setTransform(paradoxData.finalRel[index].shift(tangramScale(1), tangramScale(1)));

    const tile2 = $polypad.newTile('polygon', polyStr);
    tile2.setColour(paradoxData.polyColours[index]);
    tile2.setTransform(paradoxData.nextRelative[index].shift(tangramScale(1), tangramScale(7)));
  }
  const outlineTile = $polypad.newTile('polygon', paradoxData.outlineStr);
  outlineTile.setTransform(new Point(tangramScale(1), tangramScale(18)));
  const $outline = outlineTile.$el.$('g path.polygon-tile')!;
  $outline.addClass('curry-outline');
}

// SECTION 5: circles

export function wheels($step: Step) {
  const $svg = $step.$('svg') as SVGParentView;

  const $reset = $step.$('button.reset');

  type Wheel = {
    $el: SVGView,
    $wheel: SVGView,
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

    const $el = $svg.$('circle.' + a) as SVGView;
    const $wheel = $svg.$('path.' + a) as SVGView;

    const radius = b / 2;

    const startTopLeft = new Point($el.bounds.left - $svg.bounds.left, $el.bounds.top - $svg.bounds.top);
    const startBottom = startTopLeft.shift(radius, radius * 2);

    const $distLine = $N('path', {}, $svg) as SVGView;
    $distLine.addClass('distline');

    const $outline = $N('path', {}, $svg) as SVGView;
    $outline.addClass('wheel-outline');
    const initOutline = new Circle(startBottom.shift(0, -radius), radius);
    $outline.draw(initOutline);

    return {
      $el,
      $wheel,
      radius,
      startBottom,
      initOutline,
      $outline,
      distance: 0,
      $distLine
    };
  });

  for (const wheel of $step.model['wheels'] as Wheel[]) {
    wheel.$el.addClass('transparent-draggable');
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
        wheel.$wheel.setTransform(translate, rotate);

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

  }

  $reset?.on('click', () => {
    for (const wheel of $step.model['wheels'] as Wheel[]) {
      wheel.distance = 0;
      wheel.$el.setTransform(undefined, undefined);
      wheel.$wheel.setTransform(undefined, undefined);
      wheel.$outline.draw(wheel.initOutline);
      wheel.$distLine.draw(new Segment(wheel.startBottom, wheel.startBottom));
    }
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
  $shapeDisp.addClass('shape-display');
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

export function radiiDiameters($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const circle = new Circle(new Point(200, 200), 180);
  $geopad.drawPoint(circle.c, {interactive: false});
  $geopad.drawPath(circle, {interactive: true});
  $geopad.switchTool('line');
  let $diameterTarget: GeoPoint | undefined = undefined;
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
      for (const c of path.components) c.delete();
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
  for (const c of colours) drawn[c] = false;

  const circle = new Circle(new Point(200, 200), 160);
  $geopad.drawPath(circle);

  const lineY = circle.c.y + circle.r + 12.5;
  const lineStart = new Point(circle.c.x - circle.r, lineY);
  const lineEnd = new Point(circle.c.x + circle.r, lineY);
  const diameterLine = new Segment(lineStart, lineEnd);
  $geopad.drawPath(diameterLine);

  $step.model['progress'] = new Segment(lineStart.shift(0, 7.5), lineStart.shift(0, 7.5));
  const progress = $geopad.drawPath('progress');
  progress.$el.addClass('diameter-progress');

  let pending: string | undefined;

  $reset?.on('click', () => {
    colours = ['red', 'blue', 'green'];
    for (const c of colours) {
      drawn[c] = false;
      $step.model[c] = new Polyline();
      $step.model['progress'] = new Segment(lineStart.shift(0, 7.5), lineStart.shift(0, 7.5));
      progress.$el.removeClass(c);
    }
    pending = undefined;
  });

  slide($geopad.$svg, {
    start: (p: Point) => {
      pending = colours.shift();
      if (!pending) return;
      $step.model[pending] = new Polyline(p);
      // [TODO]: Add some documentation about this approach (auto-listening to model property)
      $geopad.drawPath(pending, {classes: pending});
      progress.$el.addClass(pending);
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

  let romeCircle: undefined | Circle = undefined;

  let $romeDiameterTarget: GeoPoint | undefined = undefined;
  $geopadRome.on('begin:path', ({start}: {path: Path, start: GeoPoint}) => {
    if (romeCircle != undefined) {
      const startPos = start.value!;
      if (nearlyEquals(startPos.subtract(romeCircle.c).length, romeCircle.r)) {
        const diamTarget = startPos.rotate(Math.PI, romeCircle.c);
        $romeDiameterTarget = $geopadRome.drawPoint(diamTarget, {interactive: false});
      }
    }
  });

  $geopadRome.on('add:path', ({path}: {path: GeoPath}) => {

    if (romeCircle == undefined) {
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
        for (const c of path.components) c.delete();
        $romeDiameterTarget!.delete();
      }
    }
  });

  $romeReset?.on('click', () => {
    geopadReset($geopadRome);
    romeCircle = undefined;
  });

  const $geopadMoscow = $step.$('.moscow x-geopad') as Geopad;
  $geopadMoscow.switchTool('circle');

  const $moscowReset = $step.$('.moscow button.reset');

  let moscowCircle: undefined | Circle = undefined;

  $geopadMoscow.on('add:path', ({path}: {path: GeoPath}) => {

    if (moscowCircle == undefined) {
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
        for (const c of path.components) c.delete();
      }
    }
  });

  $moscowReset?.on('click', () => {
    geopadReset($geopadMoscow);
    moscowCircle = undefined;
  });

  const $geopadLondon = $step.$('.london x-geopad') as Geopad;
  $geopadLondon.switchTool('circle');

  const $londonReset = $step.$('.london button.reset');

  let londonCircle: undefined | Circle = undefined;

  $geopadLondon.on('add:path', ({path}: {path: GeoPath}) => {
    if (londonCircle == undefined) {
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
    londonCircle = undefined;
  });
}

// SECTION 6: Area of Circles

type GuideNode = {node: Point, guide: Guide};

export function slicing1($step: Step) {
  const $geopad = $step.$('x-geopad') as Geopad;

  /** Center of the large pizza */
  const largeCenter = new Point(200, 200);
  /** Center of the first (leftmost) medium pizza */
  const mediumCenter = new Point(550, 200);

  const cutsCount = 4;

  const largeGuides: Guide[] = tabulate(index => {
    const baseSegment = (new Segment(largeCenter.shift(0, -175), largeCenter.shift(0, 175)));
    const rotateBy = (Math.PI / cutsCount) * index;
    const segment = baseSegment.rotate(rotateBy, largeCenter);
    const path =
      $geopad.drawPath(
          (new Segment(baseSegment.p1.shift(0, -10), baseSegment.p2.shift(0, 10))).rotate(rotateBy, largeCenter),
          {classes: 'slice-guide'}
      );
    return {path, segment, index};
  }, cutsCount);
  const $largeSlices = $geopad.$svg.$$('.large-slice') as SVGView[];
  $step.model.largeCuts = repeat({}, cutsCount);

  const mediumGuides: Guide[] = tabulate(index => {
    const baseSegment = (new Segment(mediumCenter.shift(0, -125), mediumCenter.shift(0, 125)));
    const rotateBy = (Math.PI / cutsCount) * index;
    const segment = baseSegment.rotate(rotateBy, mediumCenter);
    const path =
      $geopad.drawPath(
          (new Segment(baseSegment.p1.shift(0, -10), baseSegment.p2.shift(0, 10))).rotate(rotateBy, mediumCenter),
          {classes: 'slice-guide'}
      );
    return {path, segment, index};
  }, cutsCount);
  const $mediumSlices = $geopad.$svg.$$('.medium-slice') as SVGView[];
  $step.model.largeCuts = repeat({}, cutsCount);
  $step.model.mediumCuts = repeat({}, cutsCount);

  const collectNodes =
    (prevNodes: GuideNode[], guide: Guide) =>
      prevNodes.concat({node: guide.segment.p1, guide}, {node: guide.segment.p2, guide});
  const guideNodes = largeGuides.reduce(
      collectNodes,
      mediumGuides.reduce(collectNodes, [])
  );

  let startNode: undefined | GuideNode;
  let endNode: undefined | Point;
  let currentGuide: undefined | Guide;
  let $cutInProgress: undefined | SVGView;
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
        if ($step.model.largeCuts.every((cut: {path: GeoPath | undefined, segment: Segment | undefined}) => !cut.segment?.equals(cutFinal))) {
          largeGuides[currentGuide!.index].path.delete();
          const nextIndex = (currentGuide!.index + 1) % largeGuides.length;
          const prevIndex = (currentGuide!.index + (largeGuides.length - 1)) % largeGuides.length;
          if ($step.model.largeCuts[nextIndex].segment != undefined) {
            $step.model.largeCuts[nextIndex].path?.delete(0);
            const index1 = currentGuide!.index;
            const index2 = index1 + cutsCount;
            separateSlices(index1, index2, $largeSlices, largeCenter, 25);
          }
          if ($step.model.largeCuts[prevIndex].segment != undefined) {
            $step.model.largeCuts[prevIndex].path?.delete(0);
            const index1 = (currentGuide!.index + 7) % 8;
            const index2 = (index1 + cutsCount) % 8;
            separateSlices(index1, index2, $largeSlices, largeCenter, 25);
          }
          if ($step.model.largeCuts[nextIndex].segment == undefined && $step.model.largeCuts[prevIndex].segment == undefined) {
            const path = $geopad.drawPath(cutFinal, {animated: 400, classes: 'pizza-outline'});
            $step.model.largeCuts[currentGuide!.index] = {path, segment: cutFinal};
          } else {
            $step.model.largeCuts[currentGuide!.index] = {path: undefined, segment: cutFinal};
          }
        }
      } else {
        if ($step.model.mediumCuts.every((cut: {path: GeoPath | undefined, segment: Segment | undefined}) => !cut.segment?.equals(cutFinal))) {
          mediumGuides[currentGuide!.index].path.delete();
          const nextIndex = (currentGuide!.index + 1) % mediumGuides.length;
          const prevIndex = (currentGuide!.index + (mediumGuides.length - 1)) % mediumGuides.length;
          if ($step.model.mediumCuts[nextIndex].segment != undefined) {
            $step.model.mediumCuts[nextIndex].path?.delete(0);
            const index1 = currentGuide!.index;
            const index2 = index1 + cutsCount;
            separateSlices(index1, index2, $mediumSlices, mediumCenter, 15);
          }
          if ($step.model.mediumCuts[prevIndex].segment != undefined) {
            $step.model.mediumCuts[prevIndex].path?.delete(0);
            const index1 = (currentGuide!.index + 7) % 8;
            const index2 = (index1 + cutsCount) % 8;
            separateSlices(index1, index2, $mediumSlices, mediumCenter, 15);
          }
          if ($step.model.mediumCuts[nextIndex].segment == undefined && $step.model.mediumCuts[prevIndex].segment == undefined) {
            const path = $geopad.drawPath(cutFinal, {animated: 400, classes: 'pizza-outline'});
            $step.model.mediumCuts[currentGuide!.index] = {path, segment: cutFinal};
          } else {
            $step.model.mediumCuts[currentGuide!.index] = {path: undefined, segment: cutFinal};
          }
        }
      }
      startNode = endNode = currentGuide = $cutInProgress = undefined;
      if ($step.model.largeCuts.every((cut: {segment: Segment | undefined}) => cut.segment != undefined)) {
        if (!$step.scores.has('large-slices')) {
          $step.score('large-slices');
          if ($step.scores.has('medium-slices')) $step.addHint('correct');
        }
      }
      if ($step.model.mediumCuts.every((cut: {segment: Segment | undefined}) => cut.segment != undefined)) {
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
    for (const [index, $slice] of $largeSlices.entries()) {
      if (index != 7) $slice.addClass('background-slice');
    }

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
    for (const [index, $slice] of $mediumSlices.entries()) {
      if (index != 7) $slice.addClass('background-slice');
    }
  });

}

export function slicing2($step: Step) {
  const $svg = $step.$('svg') as SVGParentView;
  const center = new Point(100, 100);
  const topLeft = new Point(25, 25);
  const topRight = new Point(175, 25);
  const bottomRight = new Point(175, 175);
  const bottomLeft = new Point(25, 175);
  type Guide = {$el: SVGView, segment: Segment};
  const guides: Guide[] = tabulate(index => {
    const $el = $N('path', {}, $svg) as SVGView;
    $el.addClass('slice-guide-2');
    const baseSegment = (new Segment(center.shift(0, -75), center));
    const rotateBy = (Math.PI / 2) * index;
    const segment = baseSegment.rotate(rotateBy, center);
    $el.draw((new Segment(baseSegment.p1.shift(0, -10), baseSegment.p2)).rotate(rotateBy, center));
    return {$el, segment};
  }, 2);
  const radius = new Segment(new Point(25, 100), center);
  const $radius = $N('path', {}, $svg) as SVGView;
  $radius.addClass('slice-radius');
  $radius.draw(radius);
  let startNode: undefined | Point;
  let endNode: undefined | Point;
  let currentGuide: undefined | Guide;
  let cutInProgress: undefined | Segment;
  let $cutInProgress: undefined | SVGView;
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
      if (currentGuide == undefined) {
        endNode = nearestSimple(current, guideNodes);
        currentGuide = guides.find(g => (g.segment.p1.equals(endNode!) || g.segment.p2.equals(endNode!)))!;
      }
      $cutInProgress?.addClass('slicing-progress');
      const projected = currentGuide.segment.project(current);
      const endsX = [startNode!.x, endNode!.x].sort((a, b) => a - b);
      const endsY = [startNode!.y, endNode!.y].sort((a, b) => a - b);
      const cutProgress = new Point(clamp(projected.x, endsX[0], endsX[1]), clamp(projected.y, endsY[0], endsY[1]));
      cutInProgress = new Segment(startNode!, cutProgress);
      $cutInProgress?.draw(cutInProgress);
    },
    end: () => {
      $cutInProgress!.remove();
      const cutFinal = new Segment(cutInProgress!.p1, endNode!);
      if (cuts.every(cut => !cut.equals(cutFinal))) cuts.push(cutFinal);
      const $cut = $N('path', {}, $svg) as SVGView;
      $cut.addClass('slice-radius');
      $cut.draw(cutFinal);
      $cuts.push($cut);
      startNode = endNode = currentGuide = cutInProgress = $cutInProgress = undefined;
      if (cuts.length == 2) {
        $step.score('sliced');
        const sideA = new Segment(center.shift(0, -75), topRight);
        const $sideA = $N('path', {}, $svg) as SVGView;
        $sideA.addClass('slice-radius');
        $sideA.draw(sideA);
        const sideB = new Segment(center.shift(75, 0), topRight);
        const $sideB = $N('path', {}, $svg) as SVGView;
        $sideB.addClass('slice-radius');
        $sideB.draw(sideB);
        for (const guide of guides) guide.$el.remove();
        $radius.remove();
      }
    }
  });
  $step.onScore('blank-1', () => {
    for (const segment of
      [
        new Segment(topLeft, center.shift(0, -75)),
        new Segment(topLeft, center.shift(-75, 0)),
        new Segment(bottomRight, center.shift(0, 75)),
        new Segment(bottomRight, center.shift(75, 0)),
        new Segment(center, center.shift(0, 75)),
        new Segment(bottomLeft, center.shift(-75, 0)),
        new Segment(bottomLeft, center.shift(0, 75)),
        new Segment(center, center.shift(-75, 0))
      ]) {
      const $e = $N('path', {}, $svg) as SVGView;
      $e.addClass('slice-radius');
      $e.draw(segment);
    }
  });
}

type ArrangementModel = {
  /** Value currently selected via the slider, signifying the number of slices the pizza/lineup should have */
  n1: number;
};
export async function slicesArrangement($step: Step1<ArrangementModel>) {

  type SidesValues = {
    hovering?: SideData,
    baseSelected?: SideData,
    heightSelected?: SideData
  };
  const sidesValues: Observable<SidesValues> = observe({});
  const highlightData: SideData[] = [];

  let arranged = false;

  const $geopad = $step.$('x-geopad') as Geopad;
  const radius = 175;
  const center = new Point(315, radius + 25);
  const sliceZone = new Rectangle(new Point(5, 400), 630, radius + 28);
  const $sliceZone = $N('path', {}, $geopad.$paths) as SVGView;
  $sliceZone.addClass('fill red');
  $sliceZone.draw(sliceZone);
  const initSlices = initPizza(8, center, radius, $geopad);
  /** The slices that form the original pizza shape */
  let pizzaSlices = initSlices;
  /** The slices that have been arranged into a parallelogram-esque 'lineup' */
  $geopad.switchTool('move');
  let currentSlice: Slice | undefined;
  let placedCount = 0;
  let startDelta = new Point(0, 0);
  let startLocation = new Point(0, 0);
  let startAngle = 0;

  slide($geopad, { // Coordinate slice drag-drop portion of interactive
    $box: $geopad.$svg,
    start: posn => {
      currentSlice = initSlices.allSlices.find(slice => slice.bounds.contains(posn));
      startLocation = currentSlice!.pivot;
      startAngle = currentSlice!.angle;
      startDelta = startLocation.subtract(posn);
    },
    move: (current, _start, _last) => {
      if (currentSlice && !arranged) {
        currentSlice.moveTo(current.add(startDelta));
      }
    },
    end: (last, _start) => {
      if (!arranged) {
        if (sliceZone.contains(last) && currentSlice) {
          const flip = placedCount > 3;
          const halfWidth = currentSlice.width / 2;
          const targetBase = center.shift((-620 / 2) + halfWidth, (1.5 * radius) + 35);
          const target = targetBase.shift(...getLineupShift(flip, placedCount, 4, currentSlice.width, halfWidth));
          currentSlice.moveTo(target, 500);
          currentSlice.rotateTo(flip ? Math.PI : 0, {duration: 500});
          placedCount++;
          if (placedCount == 8) {
            setTimeout(() => {
              $step.score('arranged');
              arranged = true;
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

  await $step.onScore('arranged');

  let lineupSlices: LineupSlices | undefined;
  const resetSlices = (count: number) => {
    for (const slice of pizzaSlices.allSlices) slice.remove();
    if (lineupSlices != undefined) for (const slice of lineupSlices.allSlices) slice.remove();
    pizzaSlices = initPizza(count, center, radius, $geopad);
    lineupSlices = initLineup(count, center.shift(0, (1.5 * radius) + 35), radius, $geopad);
    slicesHighlight(pizzaSlices, highlightData);
    slicesHighlight(lineupSlices, highlightData);
  };
  resetSlices(8);

  $step.model.watch(state => { // Re-init slices when slice count changes
    const sliceCount = state.n1;
    resetSlices(sliceCount);
  });

  await Promise.all([$step.onScore('blank-1'), $step.onScore('blank-2')]);

  sidesValues.watch(values => { // Coordinate value of highlightData
    const hovering = values.hovering;
    const baseSelected = values.baseSelected;
    const heightSelected = values.heightSelected;

    const hlParams: SideData[] = [];

    if (baseSelected != undefined) {
      hlParams.push(baseSelected);
      if (heightSelected != undefined) hlParams.push(heightSelected);
      else if (hovering != undefined) hlParams.push(hovering);
    } else if (hovering != undefined) hlParams.push(hovering);

    // highlightData.assign(hlParams);
  });

  // highlightData.watch(highlightDataUpdated => { // Re-highlight when highlight data changes
  //   slicesHighlight(lineupSlices!, highlightDataUpdated);
  //   slicesHighlight(pizzaSlices, highlightDataUpdated);
  // });

  $geopad.on('pointermove', b => { // Report 'hover' status

    const distances: {distance: number, side: SideData}[] = [];
    const pointerLoc = new Point(b.offsetX, b.offsetY);

    for (const slice of lineupSlices!.groupA) {
      const arcDistance = slice.distanceToArc(pointerLoc);
      distances.push({distance: arcDistance, side: {kind: 'arc', groupID: 'a'}});
      const edgeJDistance = slice.distanceToEdgeJ(pointerLoc);
      distances.push({distance: edgeJDistance, side: {kind: 'edge', which: 'j', sliceIndex: slice.index}});
      const edgeKDistance = slice.distanceToEdgeJ(pointerLoc);
      distances.push({distance: edgeKDistance, side: {kind: 'edge', which: 'k', sliceIndex: slice.index}});
    }
    for (const slice of lineupSlices!.groupB) {
      const arcDistance = slice.distanceToArc(pointerLoc);
      distances.push({distance: arcDistance, side: {kind: 'arc', groupID: 'b'}});
      const edgeJDistance = slice.distanceToEdgeK(pointerLoc);
      distances.push({distance: edgeJDistance, side: {kind: 'edge', which: 'j', sliceIndex: slice.index}});
      const edgeKDistance = slice.distanceToEdgeK(pointerLoc);
      distances.push({distance: edgeKDistance, side: {kind: 'edge', which: 'k', sliceIndex: slice.index}});
    }

    const shortest = distances.sort((a, b) => a.distance - b.distance)[0];

    if (shortest.distance <= 10) {
      sidesValues.hovering = shortest.side;
    } else {
      sidesValues.hovering = undefined;
    }

  });

  const baseSelection = () => {
    if (sidesValues.hovering != undefined) {
      sidesValues.baseSelected = sidesValues.hovering;
      $step.score('base-selected');
      $step.addHint('correct');
    } else {
      $step.addHint('incorrect');
    }
  };

  $geopad.on('click', baseSelection);

  await $step.onScore('base-selected');

  $geopad.off('click', baseSelection);

  $geopad.on('click', () => {
    if (
      sidesValues.hovering != undefined &&
      sidesValues.hovering.kind != sidesValues.baseSelected!.kind &&
      (
        (sidesValues.hovering.kind == 'arc' && sidesValues.baseSelected!.kind != 'arc') ||
        (sidesValues.hovering.kind != 'arc' && sidesValues.baseSelected!.kind == 'arc')
      )
    ) {
      sidesValues.heightSelected = sidesValues.hovering;
      $step.score('height-selected');
      $step.addHint('correct');
    } else {
      $step.addHint('incorrect');
    }
  });

}

export function pizzaRings($step: Step) {
  const $svg = $step.$('.circle-area')!;
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
