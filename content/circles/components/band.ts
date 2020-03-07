import { Point, Polygon, SimplePoint, clamp } from "@mathigon/fermat";
import { SVGBaseView } from "@mathigon/boost";

interface NearestPoint {
  point: Point;
  index: number;
  distance: number;
}

interface Snag {
  index: number;
  point: Point;
}

const preferredBandLength = 300,
  bandStretch = 1.2;

// Cosntants used in pullSegment:
const snapToStraightAt = 1.00,
  startInterpolatingAt = 1.04,
  interpolationRange = startInterpolatingAt - snapToStraightAt;

export default class Band {
  public totalDistance!: number;
  public length!: number;
  public segmentLength!: number;
  public segmentCount!: number;
  public segmentFraction!: number;

  public $path?: SVGBaseView<SVGPathElement>;
  private pins!: Point[];
  private centre!: Point;
  private polygon!: Polygon;
  get points(): Point[] { return this.polygon.points; }
  set points(value: Point[]) { this.polygon = new Polygon(...value); }

  constructor() {}

  initialise(pins: Point[]) {
    this.pins = [ ...pins ];
    this.centre = Point.interpolate(pins[0], pins[1], 0.5);
    const pinDifference = pins[1].subtract(pins[0]),
      pinSeparation = pinDifference.length;

    // Ideally the band length would be constant
    // so that users can properly explore the effect of pin separation,
    // but it does get longer if the pins are really far apart,
    // just so it will always stretch around them.
    this.totalDistance = pinSeparation > (preferredBandLength / bandStretch)
      ? pinSeparation * bandStretch
      : preferredBandLength;
    this.length = this.totalDistance + pinSeparation;
    this.segmentCount = Math.round(this.length);
    this.segmentLength = this.length / this.segmentCount;
    this.segmentFraction = 1 / this.segmentCount;

    // The band starts out as a (smaller) ellipse around the centre.
    // Generate a circle, squash it arbitrarily,
    // then scale it so the distance is right.
    this.polygon = Polygon
      .regular(this.segmentCount, pinSeparation)
      .scale(pinSeparation / this.totalDistance, 0.1);
    this.polygon = this.polygon
      .scale(this.length / this.polygon.circumference)
      .rotate(pinDifference.angle())
      .translate(this.centre);
    
    this.updateGraphic();
  }

  closestAllowedPoint(p: Point) {
    // If the user has moved the pen outside the ellipse,
    // find a nearby point on the perimeter
    // (or rather, within one pixel of the perimeter).
    let distance = this.totalDistanceToPins(p);
    if (distance > this.totalDistance) {
      let iterations = 10;
      while (Math.abs(distance - this.totalDistance) > 1) {
        p = Point.interpolate(this.centre, p, this.totalDistance / distance);
        distance = this.totalDistanceToPins(p);
        if (--iterations === 0) break;
      }
    }
    return p;
  }

  pullTo(p: Point) {
    const distance = this.totalDistanceToPins(p);
  
    // If the pen is on (or very near) the perimeter,
    // don't bother with any physics simulation for the band.
    // Just draw it as a triangle.
    if (this.totalDistance - distance < 2) {
      this.polygon = new Polygon(p, ...this.pins);
      this.updateGraphic();
      return;
    }
    
    // If the pen is inside the band, no dragging happens.
    if (this.polygon.contains(p))
      return;

    // Otherwise, we need to do "physics".
    // Make sure we have enough points to simulate.
    if (this.points.length < this.segmentCount) {
      const interpolatedBand: Point[] = [];
      for (let i = 0; i <= 1; i += this.segmentFraction)
        interpolatedBand.push(this.polygon.at(i));
      this.points = interpolatedBand;
    }

    // The naive thing to do is simply drag the whole band towards the pen.
    // We start with that, and fix any problems later.
    this.dragTo(p);

    // If we moved either of the are outside the band,
    // we need to pull them back in.
    // This might need iterating a couple of times but we limit it
    // for performance and safety.
    for (let iterations = 3; iterations; --iterations) {
      // First, work out which pins are affected and whether we care.
      const snags: Snag[] = [{ index: 0, point: p }];
      let totalBadness = 0;
      for (const pin of this.pins)
        if (!this.polygon.contains(pin)) {
          const nearest = this.nearestPoint(pin);
          totalBadness += nearest.distance;
          snags.push({
            index: nearest.index,
            point: pin
          });
        }
      // If both pins are within (or very nearly within) the band,
      // we don't need to change anything, so draw the band and exit.
      if (totalBadness < 2) {
        this.updateGraphic();
        return;
      }
      snags.sort((a, b) => a.index - b.index);
      
      // Next, we calculate whether, and if so how, the string needs to slide past the pins.
      // (We assume the pen is high-friction and is doing the dragging.
      // That's not a good physical assumption, but it doesn't show.)
      const beforeSnag = snags[snags.length - 1],
        penSnag = snags[0],
        afterSnag = snags[1];
      let afterDraggedBefore = false,
        penDraggedBefore = false,
        beforeDraggedAfter = false;
      const penDraggedAfter = this.dragRoundSnagForwards(penSnag, afterSnag);
      if (penDraggedAfter && snags.length === 3)
        afterDraggedBefore = this.dragRoundSnagForwards(afterSnag, beforeSnag);
      if (!afterDraggedBefore) {
        penDraggedBefore = this.dragRoundSnagBackwards(penSnag, beforeSnag);
        if (penDraggedBefore && !penDraggedAfter && snags.length === 3)
          beforeDraggedAfter = this.dragRoundSnagBackwards(beforeSnag, afterSnag);
      }

      // Lastly, now we know how much string there is where,
      // we move the individual elements to get the total distance (about) right.
      const points = [ ...this.points ];
      if (penDraggedAfter)
        this.straightenSegment(points, penSnag, afterSnag);
      else
        this.pullSegment(points, penSnag, afterSnag);
      if (penDraggedBefore)
        this.straightenSegment(points, beforeSnag, penSnag);
      else
        this.pullSegment(points, beforeSnag, penSnag);
      if (snags.length > 2) {
        if (beforeDraggedAfter || afterDraggedBefore)
          this.straightenSegment(points, afterSnag, beforeSnag);
        else
          this.pullSegment(points, afterSnag, beforeSnag);
      }
      this.points = points;

      // The loop now restarts —
      // hopefully we've got both pins inside the band this time.
    }
  }

  dragTo(p: Point) {
    const nearestPointToPen = this.nearestPoint(p);
    let points = pivotArray(this.points, nearestPointToPen.index!);
    points = this.dragSegmentForwards(points, p);
    this.points = this.dragSegmentBackwards(points, p);
    this.smooth();
  }

  nearestPoint(p: Point): NearestPoint {
    let nearestPoint = null,
      nearestIndex: number | any = null,
      shortestDistance = Infinity;
    for (let i = 0; i < this.points.length; ++i) {
      const candidate = this.points[i],
        distance = Point.distance(candidate, p);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestPoint = candidate;
        nearestIndex = i;
      }
    }
    return {
      point: nearestPoint!,
      index: nearestIndex!,
      distance: shortestDistance
    };
  }

  smooth() {
    const newPoints = [],
      n = this.polygon.points.length;
    for (let i = 0; i < n; ++i) {
      const point = this.polygon.points[i],
        next = this.polygon.points[(i + n - 1) % n],
        previous = this.polygon.points[(i + 1) % n];
      newPoints[i] = point.scale(2).add(next.add(previous)).scale(0.25);
    }
    this.points = newPoints;
  }

  // Replaces the points in a section of the band with a straight line.
  // Used when the string is taut.
  straightenSegment(points: Point[], start: Snag, end: Snag) {
    if (end.index > this.segmentCount) throw new Error();
    let p = 0;
    const requiredSegments = (end.index - start.index + this.segmentCount) % this.segmentCount,
      segmentFraction = 1 / requiredSegments;
    for (let i = start.index; i !== end.index; i = (i + 1) % this.segmentCount) {
      points[i] = Point.interpolate(start.point, end.point, p);
      p += segmentFraction;
    }
  }

  // Tightens a section of the string, but not completely.
  pullSegment(points: Point[], start: Snag, end: Snag) {
    // Pull out the section of the curve we care about.
    const segment = pivotArray(points, start.index, end.index);

    // Work out how close we are to a straight line
    let totalDistance = 0;
    for (let i = 1; i < segment.length; ++i)
      totalDistance += Point.distance(segment[i - 1], segment[i]);
    const requiredDistance = Point.distance(start.point, end.point),
      distanceRatio = totalDistance / requiredDistance;

    // Fudge it to a straight line if it's close
    if (distanceRatio < snapToStraightAt) {
      this.straightenSegment(points, start, end);
      return;
    }

    // Otherwise run a simple physics simulation to find a similar curve of the correct length
    // and copy it into the points array.
    const draggedSegment = this.dragSegment(segment, start.point, end.point);
    for (let i = 0; i < segment.length; ++i) {
      points[(start.index + i) % points.length] = draggedSegment[i];
    }

    // If it's close to the straightness where we'd fudge it into a straight line,
    // interpolate with the straight line version to smooth any discontinuities between the algorithms
    if (distanceRatio < startInterpolatingAt) {
      const straight = [ ...points ];
      this.straightenSegment(straight, start, end);
      const p = clamp((startInterpolatingAt - distanceRatio) / interpolationRange, 0, 1);
      for (let i = 0; i < points.length; ++i)
        points[i] = Point.interpolate(points[i], straight[i], p);
    }

    // Make sure the end points are correct, and return.
    points[start.index] = start.point;
    points[end.index] = end.point;
  }

  // Stretches a segment between two points — a simpler version of pullSegment used as a utility.
  dragSegment(points: Point[], newStart: Point, newEnd: Point): Point[] {
    for (let iterations = 10; iterations > 0; --iterations) {
      points = this.dragSegmentForwards(points, newStart);
      if (closeEnough(points[points.length - 1], newEnd))
        break;
      points = this.dragSegmentBackwards(points, newEnd);
      if (closeEnough(points[0], newStart))
        break;
    }
    return points;
  }

  updateGraphic() {
    if (this.polygon.points.length > 10)
      this.smooth();
    if (this.$path)
      this.$path.points = [ ...this.polygon.points, this.polygon.points[0] ];
  }

  totalDistanceToPins(p: SimplePoint) {
    return this.pins.reduce((distance, pin) =>
      distance + pin.subtract(p).length,
      0);
  }

  // These function pulls a chain towards a new target,
  // with no regard for where the other end ends up.
  dragSegmentForwards(points: Point[], target: Point): Point[] {
    const newPoints = [target];
    for (let i = 1; i < points.length; ++i)
      newPoints.push(this.dragPoint(points[i], newPoints[i - 1]));
    return newPoints;
  }
  dragSegmentBackwards(points: Point[], target: Point): Point[] {
    const newPoints = [target];
    for (let i = points.length - 2; i >= 0; --i)
      newPoints.unshift(this.dragPoint(points[i], newPoints[0]));
    return newPoints;
  }

  // Drags a single point towards a target on a rigid rod of given length
  dragPoint(current: Point, target: Point): Point {
    const difference = current.subtract(target);
    // Just to stop divisions by zero:
    if (difference.length < 0.0001)
      return target.add({ x: 0.1, y: 0.1 });
    return target.add(difference.scale(this.segmentLength / difference.length));
  }

  // These two functions:
  //   • Modify `snag` in place, if that's required to make sure
  //     there are enough points between it and `target` to cover
  //     the distance needed.
  //   • Return `true` if `snag` was modified, and `false` if not.
  // Both assume we have a fully flexible band, not just a triangle.
  dragRoundSnagForwards(target: Snag, snag: Snag): boolean {
    const requiredSegments = Point.distance(target.point, snag.point) / this.segmentLength,
      availableSegments = (snag.index - target.index + this.segmentCount) % this.segmentCount;
    if (availableSegments < requiredSegments) {
      snag.index = Math.round(target.index + requiredSegments) % this.segmentCount;
      return true;
    }
    return false;
  }
  dragRoundSnagBackwards(target: Snag, snag: Snag) {
    const requiredSegments = Point.distance(target.point, snag.point) / this.segmentLength,
      availableSegments = (target.index - snag.index + this.segmentCount) % this.segmentCount;
    if (availableSegments < requiredSegments) {
      snag.index = Math.round(target.index + this.segmentCount - requiredSegments) % this.segmentCount;
      return true;
    }
    return false;
  }
}

// Takes an array which is assumed to be a loop and gives you a slice that wraps round.
function pivotArray<T>(array: T[], start: number, end = start): T[] {
  return (end > start)
    ? array.slice(start, end)
    : [ ...array.slice(start), ...array.slice(0, end) ];
}

function closeEnough(a: Point, b: Point): boolean {
  return Point.manhattan(a, b) < 0.5;
}
