import {$N, animate, AnimationResponse, EventCallback, slide, SVGParentView, SVGView} from '@mathigon/boost';
import {tabulate} from '@mathigon/core';
import {Angle, Arc, GeoElement, GeoShape, intersections, Line, Point, Polygon, Polyline, Rectangle, Segment} from '@mathigon/euclid';
import {nearlyEquals} from '@mathigon/fermat';
import {Step} from '@mathigon/studio';

import {Geopad, GeoPath, Polypad, Tile} from '../../shared/types';


// General

export function filterMap<CT, RT>(arr: CT[], pred: (elem: CT) => RT | undefined): RT[] {
  const elems = arr.map(elem => pred(elem));
  return elems.filter(elem => elem != undefined).map(elem => elem as RT);
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

export function nearestSimple(to: Point, of: Point[]) {
  return of.map(point => {
    return {distance: Point.distance(point, to), point};
  }).sort((a, b) => a.distance - b.distance)[0].point;
}

function crossProd(o: Point, a: Point, b: Point) {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

export function getX(p: Point) {
  return p.x;
}

export function getY(p: Point) {
  return p.y;
}

export function getTangramPolystr(polyGridPositions: Point[]) {
  return polyGridPositions.map(p => p.x + ' ' + p.y).join(',');
}

function constrainDistance(point: Point, anchor: Point, distance: number) {
  return point.subtract(anchor).unitVector.scale(distance).add(anchor);
}

function parallel(a: Line, b: Line) {
  const aa = a.angle >= Math.PI ? a.angle - Math.PI : a.angle;
  const ba = b.angle >= Math.PI ? b.angle - Math.PI : b.angle;
  return aa == ba;
}

export function length(pl: Polyline) {
  return pl.edges.reduce((totalLength, edge) => {
    return totalLength + edge.length;
  }, 0);
}

function convexHull(points: Point[]) {
  // TODO Make move this to euclid.js
  if (points.length <= 3) return new Polygon(...points);
  const sorted = points.sort((a, b) => {
    return a.x != b.x ? a.x - b.x : a.y - b.y;
  });
  const lower: Point[] = [];
  for (const point of sorted) {
    while (
      lower.length >= 2 &&
      crossProd(lower[lower.length - 2], lower[lower.length - 1], point) <= 0
    ) {
      lower.pop();
    }
    lower.push(point);
  }
  const upper: Point[] = [];
  for (const point of sorted.reverse()) {
    while (
      upper.length >= 2 &&
      crossProd(upper[upper.length - 2], upper[upper.length - 1], point) <= 0
    ) {
      upper.pop();
    }
    upper.push(point);
  }
  upper.pop();
  lower.pop();
  return new Polygon(...lower, ...upper);
}

// Assumes all polys are squares of equal size
// returns an array of overlap percentages for adjacent edges
export function touches(pairs: [Polygon, Polygon][], _size: number): number[] {
  return filterMap(pairs, ([a, b]) => {
    let overlap = 0;
    if (intersections(a, b).length == 0) {
      for (const aEdge of a.edges) {
        for (const bEdge of b.edges) {
          if (parallel(aEdge, bEdge)) {
            if (aEdge.equals(bEdge)) {
              overlap = 1;
            } else {
              /* TODO Fix this! Can't compare arrays in switch...
              switch ([
                aEdge.contains(bEdge.p1),
                aEdge.contains(bEdge.p2),
                bEdge.contains(aEdge.p1),
                bEdge.contains(aEdge.p2)
              ]) {
                case ([true, false, true, false]):
                  overlap = Point.distance(bEdge.p1, aEdge.p1);
                  break;
                case ([false, true, true, false]):
                  overlap = Point.distance(bEdge.p2, aEdge.p1);
                  break;
                case ([true, false, false, true]):
                  overlap = Point.distance(bEdge.p1, aEdge.p2);
                  break;
                case ([false, true, false, true]):
                  overlap = Point.distance(bEdge.p2, aEdge.p2);
                  break;
              } */
            }
          }
        }
      }
    }
    return overlap == 0 ? undefined : overlap;
  });
}

export function toParallelogram(a: Polygon, b: Polygon) {
  const contacts = a.edges.filter(a => b.edges.some(b => b.equals(a)));
  if (contacts.length != 1) return undefined;
  return convexHull([...a.points, ...b.points]);
}

export class HelperPoly extends Polygon {
  constructor(...points: Point[]) {
    super(...points);
  }
  static fromPolygon(poly: Polygon) {
    return new HelperPoly(...poly.points);
  }
  get sortedPoints() {
    return this.points.sort((a, b) => a.x != b.x ? a.x - b.x : a.y - b.y);
  }
  get perimeter() {
    return this.edges.reduce((accumulator, edge) => accumulator + edge.length, 0);
  }
  moveTo(loc: Point) {
    return this.translate(loc.subtract(this.centroid));
  }
  containsPoly(other: Polygon) {
    const t = new Polygon(...this.points);
    return other.points.every(p => t.contains(p));
  }
}

export function makeParallelogram(baseWidth: number, height: number, offset: number) {
  const p1 = new Point(0, 0);
  const p2 = new Point(baseWidth, 0);
  const p3 = p2.shift(offset, height);
  const p4 = p1.shift(offset, height);
  const hp = new HelperPoly(p1, p2, p3, p4);
  return hp;
}

export function toRect(points: Point[]): HelperPoly | undefined {
  const hull = convexHull(points);
  const clampedPoints =
      hull.points.map(
          point => new Point(Math.round(point.x), Math.round(point.y))
      );
  const angles = clampedPoints.map(
      (point, index) =>
        new Angle(point, clampedPoints[(index + 1) % 4], clampedPoints[(index + 2) % 4])
  );
  const corners = angles.filter(angle => (angle.deg / 90) % 2 == 1);
  if (corners.length == 4) {
    return new HelperPoly(...corners.map(c => c.b));
  } else return undefined;
}


// Steps-related

export function setupRope(id: string, maxLength: number, $geopad: Geopad, $step: Step, onComplete: (final: Polyline, reset: VoidFunction) => void) {
  let reset = false;
  let rope: GeoPath;
  let ropeLine: Polyline;
  slide($geopad, {
    $box: $geopad.$svg,
    start: (p: Point) => {
      ropeLine = new Polyline(p);
      rope = $geopad.drawPath(ropeLine);
      rope.$el.addClass('rope');
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

type CircularPoint = {
  left: CircularPoint,
  right: CircularPoint,
  self: Point
}

type CircularPointUnsafe = {
  left?: CircularPointUnsafe,
  right?: CircularPointUnsafe,
  self: Point
}

/* eslint-disable no-invalid-this */
class RopePoints {
  points: CircularPoint[] = [];
  addPoint = (p: Point) => {
    let temp: CircularPointUnsafe = {
      self: p
    };
    const l = this.points.pop();
    if (l != undefined) this.points.push(l);
    const r = this.points.shift();
    if (r != undefined) this.points.unshift(r);
    temp = {
      ...temp,
      left: l ?? temp,
      right: r ?? temp
    };
    const final = temp as CircularPoint;
    if (this.points.length > 0) {
      this.points[0].left = final;
      this.points[this.points.length - 1].right = final;
    }
    this.points.push(final);
  };
  movePoint = (index: number, to: Point) => {
    const rightCap = Math.ceil(this.points.length / 2);
    const leftCap = Math.floor(this.points.length / 2);
    let rCount = 0;
    let lCount = rCount;
    let rDist = Point.distance(this.points[index].self, this.points[index].right.self);
    let lDist = Point.distance(this.points[index].self, this.points[index].left.self);
    this.points[index].self = to;
    let currentR = this.points[index];
    let currentL = currentR;
    while (rCount < rightCap) {
      currentR = currentR.right;
      rCount++;
      const nextDist = Point.distance(currentR.self, currentR.right.self);
      currentR.self = constrainDistance(currentR.self, currentR.left.self, rDist);
      rDist = nextDist;
    }
    while (lCount < leftCap) {
      currentL = currentL.left;
      lCount++;
      const nextDist = Point.distance(currentL.self, currentL.left.self);
      currentL.self = constrainDistance(currentL.self, currentL.right.self, lDist);
      lDist = nextDist;
    }
  };
}
/* eslint-enable no-invalid-this */

export class RopePoly {
  private cPoints: RopePoints;
  private _poly: Polygon;
  constructor(...points: Point[]) {
    this._poly = new Polygon(...points);
    this.cPoints = new RopePoints();
    for (const point of points) this.cPoints.addPoint(point);
  }
  getNearest(to: Point) {
    let nearest = {
      point: this.points[0],
      index: 0
    };
    for (const [index, point] of this.points.entries()) {
      const d1 = Point.distance(point, to);
      const d2 = Point.distance(nearest.point, to);
      if (d1 < d2) {
        nearest = {point, index};
      }
    }
    return nearest;
  }
  movePoint(index: number, to: Point) {
    this.cPoints.movePoint(index, to);
    this._poly = new Polygon(...this.cPoints.points.map(cp => cp.self));
  }
  get points() {
    return this.poly.points;
  }
  get poly() {
    return this._poly;
  }
}

type DraggableRectanglesOptions = {
  count: number,
  dimensions: Point,
  initLocations?: Point[]
}

export function setupDraggableRectangles($polypad: Polypad, options: DraggableRectanglesOptions) {
  // [TODO]: Make 'infinite' rectangles if count == 0
  tabulate(index => {
    const initLoc = options.initLocations != undefined ? options.initLocations[index] : new Point(0, 0);
    const r = new Rectangle(new Point(0, 0), options.dimensions.x, options.dimensions.y);
    const tile = $polypad.newTile('polygon', getTangramPolystr(r.points));
    tile.setTransform(initLoc);
  }, options.count);
}

export function fillSquares(
    $step: Step,
    squareSize: number,
    dropAreaSize: Point,
    dropAreaWidthLabel: string,
    dropAreaHeightLabel: string,
    showBeforeComplete: boolean,
    onComplete: VoidFunction
) {
  const $geopad = $step.$('x-geopad') as Geopad;
  const dropAreaPoly = setupDropArea($geopad, dropAreaSize, dropAreaWidthLabel, dropAreaHeightLabel, showBeforeComplete);
  setupSquares($geopad, squareSize, dropAreaPoly, onComplete);
}

function setupDropArea($geopad: Geopad, dimensions: Point, widthLabel: string, heightLabel: string, showBeforeComplete: boolean) {
  const leftLoc = $geopad.viewportRect.w - dimensions.x - 30;
  const topLoc = 30;
  const topLeft = new Point(leftLoc, topLoc);
  const dropArea = new Rectangle(topLeft, dimensions.x, dimensions.y);
  const bottomLeft = topLeft.shift(0, dimensions.y);
  const bottomRight = bottomLeft.shift(dimensions.x, 0);
  const topRight = bottomRight.shift(0, -dimensions.y);
  $geopad.drawPath(dropArea);
  const widthPath = $geopad.drawPath(new Segment(bottomLeft, bottomRight));
  if (showBeforeComplete) widthPath.setLabel(widthLabel);
  const heightPath = $geopad.drawPath(new Segment(bottomRight, topRight));
  if (showBeforeComplete) heightPath.setLabel(heightLabel);
  return dropArea;
}

function setupSquares($geopad: Geopad, size: number, dropAreaPoly: Rectangle, onComplete: VoidFunction) {
  const squareTemplate = new Rectangle(new Point(20, 20), size, size);
  let currentSquare = new FillSquare(squareTemplate, $geopad);
  let dropSpot = 0;
  const onEnd = (last: Point) => {
    if (dropAreaPoly.contains(last)) {
      currentSquare.moveTo(getSpotCoords(dropSpot, size, dropAreaPoly));
      currentSquare = new FillSquare(squareTemplate, $geopad);
      if (isLastSquare(dropSpot, size, dropAreaPoly)) {
        onComplete();
      } else {
        dropSpot++;
        setupGeopadDraggableFillSquare(currentSquare, $geopad, onEnd);
      }
    }
  };
  setupGeopadDraggableFillSquare(currentSquare, $geopad, onEnd);
  return;
}

function getSpotCoords(dropSpot: number, squareSize: number, dropAreaPoly: Rectangle) {
  const squaresPerRow = dropAreaPoly.w / squareSize;
  const currentColumn = dropSpot % squaresPerRow;
  const currentRow = Math.floor(dropSpot / squaresPerRow);
  return new Point(dropAreaPoly.p.x + currentColumn * squareSize, dropAreaPoly.p.y + currentRow * squareSize);
}

function isLastSquare(dropSpot: number, squareSize: number, dropAreaPoly: Rectangle) {
  const rows = dropAreaPoly.h / squareSize;
  const columns = dropAreaPoly.w / squareSize;
  const totalSpots = rows * columns;
  return dropSpot === totalSpots - 1;
}

class FillSquare {
  private rect: Rectangle;
  private path: GeoPath;
  constructor(template: Rectangle, $geopad: Geopad) {
    this.rect = template;
    this.path = $geopad.drawPath(this.rect);
    this.path.$el.addClass('fill-square');
  }
  moveBy(by: Point) {
    this.rect = this.rect.translate(by);
    this.path.redraw(this.rect);
  }
  moveTo(loc: Point) {
    this.moveBy(loc.subtract(this.rect.p));
  }
  contains(point: Point) {
    return this.rect.contains(point);
  }
  get pos() {
    return this.rect.p;
  }
}

function setupGeopadDraggableFillSquare(obj: FillSquare, $geopad: Geopad, onEnd?: (last: Point) => void) {
  let pointerOffset = new Point(0, 0);
  let dragging = false;
  slide($geopad, {
    $box: $geopad.$svg,
    start: pos => {
      if (obj.contains(pos)) {
        dragging = true;
        pointerOffset = obj.pos.subtract(pos);
      }
    },
    move: (current, _start, _last) => {
      if (dragging) {
        const newLoc = current.add(pointerOffset);
        obj.moveTo(newLoc);
      }
    },
    end: (last, _start) => {
      if (dragging) {
        if (onEnd != undefined) onEnd(last);
        dragging = false;
      }
    }
  });
}

export type GeopadPathColor =
  'red' |
  'green' |
  'blue' |
  'yellow' |
  'orange' |
  'purple' |
  'teal' |
  'lime' |
  'dark' |
  'white';

type RenderedOptions = {
  draggable?: boolean,
  snap?: boolean,
  onEnd?: (last: Point) => void,
  color?: GeopadPathColor
};

export class RenderedGeopadPoly {
  // The entire shape, used for drawing to the geopad
  private path: GeoPath;
  // Collection of invisible paths added to the geopad; one per edge of the input polygon,
  // needed for geopad point snapping to behave as expected
  private edges: GeoPath[] = [];
  // The polygon being drawn; geometry data is kept track of here for convenience
  private _poly: HelperPoly;

  // Other polygons being drawn to the geopad that we want'snap' this polygon to sanp to when close enough
  readonly snapFriends: RenderedGeopadPoly[] = [];
  constructor(
      poly: Point[] | Polygon,
      private $geopad: Geopad,
      options?: RenderedOptions
  ) {
    // Initialize _poly
    if (poly instanceof Array) this._poly = new HelperPoly(...poly);
    else this._poly = HelperPoly.fromPolygon(poly);

    // Add edge paths to geopad
    for (const edge of this.poly.edges) {
      this.edges.push($geopad.drawPath(edge, {classes: 'geopoly-helper-edge'})); // CSS class to set opacity to 0
    }

    // Add polygon path to geopad
    this.path = $geopad.drawPath(this.poly);

    // Handle options
    if (options != undefined) {
      if (options.color != undefined) {
        this.path.$el.addClass('fill ' + options.color);
      } else {
        this.path.$el.addClass('transparent-draggable');
      }
      if (options.draggable != undefined && options.draggable === true) {
        let pointerOffset = new Point(0, 0);
        let dragging = false;
        const snapThreshold = 25;
        slide($geopad, {
          $box: $geopad.$svg,
          start: pos => {
            if (this.poly.contains(pos)) {
              dragging = true;
              pointerOffset = this.poly.centroid.subtract(pos);
            }
          },
          move: (current, _start, _last) => {
            if (dragging) {
              const newLoc = current.add(pointerOffset);
              const next = this.poly.moveTo(newLoc);
              const snapDeltas = filterMap(this.snapFriends, snapFriend => {
                const deltas = snapFriend.poly.points.reduce((deltas, friendPoint) => {
                  return deltas.concat(
                      filterMap(next.points, objNextPoint => {
                        const dist = Point.distance(objNextPoint, friendPoint);
                        if (dist <= snapThreshold) return objNextPoint.subtract(friendPoint);
                        else return undefined;
                      })
                  );
                }, [] as Point[]);
                if (deltas.length > 0) {
                  return deltas[0];
                } else return undefined;
              });
              if (options?.snap === true && snapDeltas.length > 0) {
                const destination = next.centroid.subtract(snapDeltas[0]);
                this.moveTo(destination);
              } else {
                this.moveTo(newLoc);
              }
            }
          },
          end: (last, _start) => {
            if (dragging) {
              if (options?.onEnd != undefined) options.onEnd(last);
              dragging = false;
            }
          }
        });
      }
    }
  }
  addSnapFriend = (f: RenderedGeopadPoly) => {
    // eslint-disable-next-line no-invalid-this
    this.snapFriends.push(f);
  };
  get poly() {
    return this._poly;
  }
  get $el() {
    return this.path.$el;
  }
  erase() {
    this.path.delete();
    for (const c of this.path.components) c.delete();
    for (const edge of this.edges) {
      edge.delete();
      for (const c of edge.components) c.delete();
    }
  }
  translate(by: Point) {
    this._poly = this.poly.translate(by);
    this.path.redraw(this.poly);
    for (const [index, edge] of this.edges.entries()) {
      edge.redraw(this.poly.edges[index]);
    }
  }
  moveTo(loc: Point) {
    this._poly = this.poly.moveTo(loc);
    this.path.redraw(this.poly);
    for (const [index, edge] of this.edges.entries()) {
      edge.redraw(this.poly.edges[index]);
    }
  }
  cut(_along: Line, _options?: RenderedOptions): [RenderedGeopadPoly, RenderedGeopadPoly] | undefined {
    // TODO Fix this!
    return undefined;
  }
}

export function setupBaseHeight(
    initPoly: Polygon,
    $geopad: Geopad,
    options?: {
      partner?: {
        poly: Polygon,
        baseIndex: number
      }
      onSideSelected?: (side: number) => void,
      onComplete?: VoidFunction,
      onIncorrect?: VoidFunction
  }) {
  $geopad.addClass('base-height');
  let selectedEdge = -1;
  let edgeChosen = false;
  for (const [index, edge] of initPoly.edges.entries()) {
    const edgePath = $geopad.drawPath(edge);
    edgePath.$el.addClass('edge');
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
    let nearby = false;
    edgePath.$el.on('click', () => {
      if (options?.partner != undefined && options.partner.baseIndex != index) return;
      if (!edgeChosen) {
        edgeChosen = true;
        edgePath.$el.addClass('selected-edge');
        selectedEdge = index;
        edgePath.setLabel(edge.length.toFixed(2).toString());
        options?.onSideSelected?.(selectedEdge);

        const poly =
          options?.partner != undefined ?
            convexHull(options.partner.poly.points.concat(initPoly.points)) :
            initPoly;
        if (options?.partner != undefined) {
          for (const partnerEdge of options.partner.poly.edges) {
            const partnerEdgePath = $geopad.drawPath(partnerEdge);
            partnerEdgePath.$el.addClass('edge');
          }
        }

        const heightPoint =
          poly.points.filter(point =>
            !point.equals(edge.p1) && !point.equals(edge.p2)
          ).pop()!;
        const height = (new Segment(heightPoint, edge.project(heightPoint))).length;
        const heightLine = edge.parallel(heightPoint);
        const heightSegment = new Segment(heightLine.project(edge.p1), heightLine.project(edge.p2));
        const heightPath = $geopad.drawPath(heightSegment);
        heightPath.$el.hide();
        heightPath.$el.addClass('height');

        $geopad.switchTool('line');
        let p: GeoPath;
        let cb: EventCallback;
        $geopad.on('begin:path', ({path, _}: {path: GeoPath, _: any}) => {
          p = path;
          cb = _ => handlePathing(path, edgePath, heightPath, height, () => nearby = true, () => nearby = false);
          path.$parent.on('pointermove', cb);
        });
        $geopad.on('add:path', _ => {
          $geopad.off('pointermove', cb);
          if (nearby) {
            options?.onComplete?.();
            const p1 = (p.value as Segment).p1;
            const p2 = heightLine.project(p1);
            p.components[0].setValue(p1);
            p.components[1].setValue(p2);
            p.setLabel(height.toFixed(2).toString());
          } else {
            for (const c of p.components) c.delete();
            p.delete();
            heightPath.$el.hide();
            options?.onIncorrect?.();
          }
        });
      }
    });
  }
}

export function handlePathing(path: GeoPath, base: GeoPath, heightPath: GeoPath, height: number, whenClose: VoidFunction, whenFar: VoidFunction) {
  const pathSegment = path.value as Segment;
  const angleRange = Math.PI / 180;
  const correctAngle = (base.value as Segment).perpendicular(pathSegment.p1).angle % Math.PI;
  const pathAngle = pathSegment.angle % Math.PI;
  const perpendicular = pathAngle > correctAngle - angleRange && pathAngle < correctAngle + angleRange;
  path.$el.setClass('angle-perpendicular', perpendicular);
  path.$el.setClass('angle-other', !perpendicular);

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

export function tangramComplete(tiles: Map<string, Tile>, baseOffset: number) {

  const correctStates =
    [[2, 4, 270], [4, 2, 0], [6, 4, 0], [3, 7, 0], [7, 2, 270], [4, 5, 0], [6, 6, 90]]
        .map(triple =>
          [tangramScale(triple[0], baseOffset), tangramScale(triple[1], baseOffset), triple[2]]);

  // Ensure that rotation values are within the 0-360 range for comparison purposes
  const currentStates = Array.from(tiles.values()).map(tile => {
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

  for (const [index, state] of currentStates.entries()) {
    if (
      state[0] < ranges[index][0][0] ||
      state[0] > ranges[index][0][1] ||
      state[1] < ranges[index][1][0] ||
      state[1] > ranges[index][1][1] ||
      state[2] != correctStates[index][2]
    ) {
      closeEnough = false;
    }
  }

  return closeEnough;

}

export function tangramScale(val: number, shift = 0) {
  return shift + val * 25;
}

export function polypadPrep($polypad: Polypad, viewWidth: number, viewHeight: number, grid: boolean) {
  $polypad.$svg.setAttr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);
  $polypad.canDelete = $polypad.canCopy = false;
  if (grid) $polypad.setGrid('square-grid');
}

export class ResizeableSquare {
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

    for (const edge of this.edges) {
      const $el = $N('path', {}, $svg) as SVGView;
      $el.addClass('resize-edge');
      $el.draw(edge);
      this.$edges.push($el);
    }

    this.$box = $N('path', {}, $svg) as SVGView;
    this.$box.addClass('transparent-draggable');
    this.$box.draw(this.poly);

    this.grabDelta = new Point(0, 0);
    this.topLeft = new Point(0, 0);

    const cornerSize = 10;
    for (const [index, point] of this.poly.points.entries()) {

      const pos = point.shift(-cornerSize / 2, -cornerSize / 2);

      const cornerRect = new Rectangle(pos, cornerSize, cornerSize);
      const $corner = $N('path', {}, $svg) as SVGView;
      $corner.addClass('transparent-draggable');

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
          for (const [index, $edge] of this.$edges.entries()) $edge.draw(edges[index]);

          this.handleBounds();

        },
        end: () => {

          for (const index2 of this.poly.points.keys()) {
            const cornerRect =
              this.corners[index2].rect
                  .translate(
                      this.poly.points[index2].subtract(this.corners[index2].rect.p)
                  )
                  .shift(-cornerSize / 2, -cornerSize / 2);
            this.corners[index2].rect = cornerRect;
            this.corners[index2].$el.draw(cornerRect);
          }

          if (this.isComplete) {
            this.onComplete(this.center, this.apothem);
          }

        }
      });
    }

    slide(this.$box, {
      start: (posn: Point) => {
        this.topLeft = new Point(this.$box.bounds.left - this.$svg.bounds.left, this.$box.bounds.top - this.$svg.bounds.top);
        this.grabDelta = posn.subtract(this.topLeft);
      },
      move: (posn: Point, _start, last: Point) => {
        const newPos = posn.subtract(this.topLeft).subtract(this.grabDelta);

        this.$box.translate(newPos.x, newPos.y);
        for (const $edge of this.$edges) $edge.translate(newPos.x, newPos.y);

        this.poly = this.poly.translate(posn.subtract(last));

        this.handleBounds();
      },
      end: (last: Point, start: Point) => {
        this.$box.setTransform(new Point(0, 0));
        this.$box.draw(this.poly);

        const edges = this.edges;
        for (const [index, $edge] of this.$edges.entries()) {
          $edge.setTransform(new Point(0, 0));
          $edge.draw(edges[index]);
        }

        for (const index of this.poly.points.keys()) {
          this.corners[index].rect = this.corners[index].rect.translate(last.subtract(start));
          this.corners[index].$el.draw(this.corners[index].rect);
        }

        if (this.isComplete) {
          this.onComplete(this.center, this.apothem);
        }
      }
    });
  }

  handleBounds() {
    let complete = true;
    const closeness = 2;
    for (const [index, edge] of this.edges.entries()) {
      const iMod = index % 2;

      const edgeVal = iMod == 0 ? edge.p1.y : edge.p1.x;
      const boundVal =
        iMod == 0 ? this.targetBounds.points[index].y : this.targetBounds.points[index].x;

      if (nearlyEquals(edgeVal, boundVal, closeness)) {
        this.$edges[index].addClass('resize-on-target');
      } else {
        this.$edges[index].removeClass('resize-on-target');
        complete = false;
      }
    }
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
    for (const $edge of this.$edges) $edge.remove();
  }

}

export function geopadReset($pad: Geopad) {
  for (const path of $pad.paths) path.delete();
  for (const point of $pad.points) point.delete();
  $pad.switchTool('circle');
}

export function separateSlices(index1: number, index2: number, $slices: SVGView[], center: Point, slideDistance: number) {
  const rotateFactor = Math.PI / 4;
  const rotate1 = (rotateFactor * index1) + (Math.PI / 8);
  const rotate2 = (rotateFactor * index2) + (Math.PI / 8);
  const trans1 = center.shift(0, -slideDistance).rotate(rotate1, center).subtract(center);
  const trans2 = center.shift(0, -slideDistance).rotate(rotate2, center).subtract(center);
  $slices[index1].setTransform(trans1);
  $slices[index2].setTransform(trans2);
}

export type Guide = {path: GeoPath, segment: Segment, index: number};

export function nearest(to: Point, of: {node: Point, guide: Guide}[]) {
  return of.map(point => {
    return {distance: Point.distance(point.node, to), point};
  }).sort((a, b) => a.distance - b.distance)[0].point;
}


export type SideData =
{
  kind: 'arc';
  /** ID signifying a 'group' of the arrangement */
  groupID: 'a' | 'b';
}
| {
  kind: 'edge';
  which: 'j' | 'k';
  /** Helps us refer to the slice whose edge is being hovered near */
  sliceIndex: number
};

/** A collection of 'slices' that are arranged into a circular pizza */
export type PizzaSlices = {
  /** Slices from half 'A' of the pizza/circle */
  groupA: Slice[];
  /** Slices from half 'B' of the pizza/circle */
  groupB: Slice[];
  /** All slices from the pizza */
  allSlices: Slice[];
};
export function initPizza(slices: number, center: Point, radius: number, $geopad: Geopad): PizzaSlices {
  const halfCount = Math.ceil(slices / 2);
  const arcAngle = (2 * Math.PI) / slices;
  const initAngle = arcAngle / 2;
  const allSlices: Slice[] = [];
  const groupA: Slice[] = [];
  const groupB: Slice[] = [];
  tabulate(index => {
    const slice = new Slice(true, $geopad, radius, arcAngle, center, index, initAngle + (index * arcAngle));
    if (index < halfCount) {
      groupA.push(slice);
    } else {
      groupB.push(slice);
    }
    allSlices.push(slice);
  }, slices);
  return {allSlices, groupA, groupB};
}

/** A collection of 'slices' that are arranged in a parallelogram-esque shape */
export type LineupSlices = {
  /** Slices from row 'A' of the lineup */
  groupA: Slice[];
  /** Slices from row 'B' of the lineup */
  groupB: Slice[];
  /** All slices from the lineup */
  allSlices: Slice[];
};
export function initLineup(slices: number, center: Point, radius: number, $geopad: Geopad): LineupSlices {
  const halfCount = Math.ceil(slices / 2);
  const arcAngle = (2 * Math.PI) / slices;
  const allSlices: Slice[] = [];
  const groupA: Slice[] = [];
  const groupB: Slice[] = [];
  tabulate(index => {
    const flip = index > halfCount - 1;
    const slice = new Slice(false, $geopad, radius, arcAngle, center, index);
    const halfWidth = slice.width / 2;
    const targetBase = center.shift((-620 / 2) + halfWidth, 0);
    const target = targetBase.shift(...getLineupShift(flip, index, halfCount, slice.width, halfWidth));
    slice.moveTo(target);
    slice.rotateTo(flip ? Math.PI : 0);
    if (flip) {
      groupB.push(slice);
    } else {
      groupA.push(slice);
    }
    allSlices.push(slice);
    slice.draw();
  }, slices);
  return {allSlices, groupA, groupB};
}

export function getLineupShift(
    flip: boolean,
    index: number,
    halfCount: number,
    sliceWidth: number,
    halfWidth: number
) {
  const outlineWidth = 4;
  const outlineOffset = outlineWidth;
  const xOffsetPre = flip ?
    ((index - halfCount) * (sliceWidth + outlineOffset)) + halfWidth + (outlineWidth / 2) :
    index * (sliceWidth + outlineOffset);
  const xOffset = xOffsetPre + 6;
  const yOffsetPre = flip ? outlineWidth : 0;
  const yOffset = yOffsetPre + 2;
  return [xOffset, yOffset] as [number, number];
}

export function slicesHighlight(arrangement: PizzaSlices, highlights?: SideData[]) {

  for (const slice of arrangement.allSlices) {
    slice.setArcColor('dark');
    slice.setEdgeJColor('dark');
    slice.setEdgeKColor('dark');
  }

  if (highlights != undefined) {
    for (const highlight of highlights) {
      if (highlight.kind == 'arc') {
        if (highlight.groupID == 'a') for (const slice of arrangement.groupA) slice.setArcColor('teal');
        else if (highlight.groupID == 'b') for (const slice of arrangement.groupB) slice.setArcColor('teal');
      } else if (highlight.kind == 'edge') {
        if (highlight.which == 'j') arrangement.allSlices[highlight.sliceIndex].setEdgeJColor('teal');
        else arrangement.allSlices[highlight.sliceIndex].setEdgeKColor('teal');
      }
    }
  }

}

export class Slice {

  private edgeJ: {
    path?: GeoPath,
    color?: GeopadPathColor,
    poly: Segment
  };
  private edgeK: {
    path?: GeoPath,
    color?: GeopadPathColor,
    poly: Segment
  };
  private arc: {
    path?: GeoPath,
    color?: GeopadPathColor,
    poly: Arc
  };
  private _bounds: Polygon;
  readonly width: number;
  private _tip: Point;
  private _pivot: Point;
  private _angle: number;
  private transAnim?: AnimationResponse;
  private rotAnim?: AnimationResponse;
  private rotTarget?: number;
  private transTarget?: Point;
  private firstDraw = true;

  constructor(private selfDraw: boolean, private $geopad: Geopad, radius: number, arcAngle: number, circleCenter: Point, private _index: number, initAngle?: number) {
    this._angle = initAngle ?? 0;
    this._tip = circleCenter;
    const pointA = circleCenter.shift(0, -radius);
    const pointB = pointA.rotate(arcAngle, circleCenter);
    this.width = Point.distance(pointA, pointB);
    const pathRotation = <T extends GeoElement>(path: T) => path.rotate(-(arcAngle / 2), circleCenter).rotate(this.angle, circleCenter) as T;
    const sliceArc = pathRotation(new Arc(circleCenter, pointA, arcAngle)) as Arc;
    this.arc = {
      path: $geopad.drawPath(sliceArc, {classes: 'slice-outline'}),
      poly: sliceArc
    };
    this.setArcColor('dark');
    const edgeJ = pathRotation(new Segment(pointA, circleCenter));
    this.edgeJ = {
      path: $geopad.drawPath(edgeJ, {classes: 'slice-outline'}),
      poly: edgeJ
    };
    this.setEdgeJColor('dark');
    const edgeK = pathRotation(new Segment(circleCenter, pointB));
    this.edgeK = {
      path: $geopad.drawPath(edgeK, {classes: 'slice-outline'}),
      poly: edgeK
    };
    this.setEdgeKColor('dark');
    this._bounds = new Polygon(edgeJ.p1, edgeJ.p2, edgeK.p2, sliceArc.at(0.25), sliceArc.at(0.5), sliceArc.at(0.75));
    this._pivot = pathRotation((new Segment((new Segment(pointA, pointB)).midpoint, circleCenter)).midpoint);
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

  get index() {
    return this._index;
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
        this.transTarget = undefined;
        this.transAnim = undefined;
      });
    } else {
      this.arc = {
        ...this.arc,
        poly: this.arc.poly.translate(by)
      };
      const polyA = this.edgeJ.poly.translate(by);
      this.edgeJ = {
        ...this.edgeJ,
        poly: new Segment(polyA.p1, polyA.p2)
      };
      const polyB = this.edgeK.poly.translate(by);
      this.edgeK = {
        ...this.edgeK,
        poly: new Segment(polyB.p1, polyB.p2)
      };
      this._bounds = this.bounds.translate(by);
      this._tip = this.tip.translate(by);
      this._pivot = this.pivot.translate(by);
      if (this.selfDraw) this.draw();
    }
  }

  moveTo(loc: Point, duration?: number) {
    const trans = loc.subtract(this.pivot);
    if (this.transAnim != undefined) {
      if (this.transTarget == undefined || !loc.equals(this.transTarget)) {
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
        this.rotTarget = undefined;
        this.rotAnim = undefined;
      });
    } else {
      this._angle = this.angle + amount;
      const c = options?.around ?? this.pivot;
      this.arc = {
        ...this.arc,
        poly: this.arc.poly.rotate(amount, c)
      };
      this.edgeJ = {
        ...this.edgeJ,
        poly: this.edgeJ.poly.rotate(amount, c)
      };
      this.edgeK = {
        ...this.edgeK,
        poly: this.edgeK.poly.rotate(amount, c)
      };
      this._bounds = this.bounds.rotate(amount, c);
      this._tip = this.tip.rotate(amount, c);
      this._pivot = this.pivot.rotate(amount, c);
      if (this.selfDraw) this.draw();
    }
  }

  rotateTo(angle: number, options?: {duration?: number, around?: Point}) {
    const diff = equivAngle(shortAngle(angle - this.angle));
    if (this.rotAnim != undefined) {
      if (this.rotTarget != angle) {
        this.rotTarget = angle;
        this.rotateBy(diff, options);
      }
    } else {
      this.rotTarget = angle;
      this.rotateBy(diff, options);
    }
  }

  setArcColor(name: GeopadPathColor) {
    if (this.arc.color != undefined) this.arc.path?.$el.removeClass(this.arc.color);
    this.arc.color = name;
    this.arc.path?.$el.addClass(name);
  }

  setEdgeJColor(name: GeopadPathColor) {
    if (this.edgeJ.color != undefined) this.edgeJ.path?.$el.removeClass(this.edgeJ.color);
    this.edgeJ.color = name;
    this.edgeJ.path?.$el.addClass(name);
  }

  setEdgeKColor(name: GeopadPathColor) {
    if (this.edgeK.color != undefined) this.edgeK.path?.$el.removeClass(this.edgeK.color);
    this.edgeK.color = name;
    this.edgeK.path?.$el.addClass(name);
  }

  private distanceToElem(from: Point, to: GeoShape) {
    return Point.distance(from, to.project(from));
  }

  distanceToArc(from: Point) {
    return this.distanceToElem(from, this.arc.poly);
  }

  distanceToEdgeJ(from: Point) {
    return this.distanceToElem(from, this.edgeJ.poly);
  }

  distanceToEdgeK(from: Point) {
    return this.distanceToElem(from, this.edgeK.poly);
  }

  draw() {
    if (this.arc.path == undefined) {
      this.firstDraw = false;
      this.arc.path = this.$geopad.drawPath(this.arc.poly, {animated: 0});
      this.edgeJ.path = this.$geopad.drawPath(this.edgeJ.poly, {animated: 0});
      this.edgeK.path = this.$geopad.drawPath(this.edgeK.poly, {animated: 0});
    } else {
      this.arc.path.redraw(this.arc.poly);
      this.edgeJ.path!.redraw(this.edgeJ.poly);
      this.edgeK.path!.redraw(this.edgeK.poly);
    }
  }

  remove() {
    this.arc.path?.delete(0);
    this.edgeJ.path?.delete(0);
    this.edgeK.path?.delete(0);
  }

}

export function ring(cx: number, cy: number, r1: number, r2: number, fromAngle: number, toAngle: number) {
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
