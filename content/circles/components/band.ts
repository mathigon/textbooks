import { Point, Polygon, SimplePoint, clamp } from "@mathigon/fermat";
import { SVGBaseView } from "@mathigon/boost";
import Rope from "./rope";

interface NearestPoint {
  point: Point;
  index: number;
  distance: number;
}

interface Snag {
  index: number;
  point: Point;
}

export default class Band {
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

  constructor(public totalDistance: number) {}

  initialise(pins: Point[]) {
    this.pins = [ ...pins ];
    this.centre = Point.interpolate(pins[0], pins[1], 0.5);
    const pinDifference = pins[1].subtract(pins[0]),
      pinSeparation = pinDifference.length;

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
    const distance = this.totalDistanceToPins(p);
    if (distance < this.totalDistance) {
      return p;
    }
    const a = this.totalDistance / 2,
      focusOffset = (this.pins[1].x - this.pins[0].x) / 2,
      b = Math.sqrt(a ** 2 - focusOffset ** 2),
      centre = Point.average(...this.pins),
      theta = p.subtract(centre).scale(1 / a, 1 / b).angle();
    return Point.fromPolar(theta, 1).scale(a, b).add(centre);
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
    this.points = Rope
      .fromArray(pivotArray(this.points, nearestPointToPen.index!))
      .pull(p, p)
      .smooth()
      .points;
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

  // Replaces the points in a section of the band with a straight line.
  // Used when the string is taut.
  private straightenSegment(points: Point[], start: Snag, end: Snag) {
    const segment = Rope
      .fromArray(pivotArray(points, start.index, end.index))
      .straighten(start.point, end.point)
      .points;
    wrappedSplice(points, segment, start.index);
  }

  // Tightens a section of the string, but not completely.
  private pullSegment(points: Point[], start: Snag, end: Snag) {
    const segment = Rope
      .fromArray(pivotArray(points, start.index, end.index))
      .pull(start.point, end.point)
      .points;
    wrappedSplice(points, segment, start.index);
  }

  updateGraphic() {
    if (this.$path)
      this.$path.points = [ ...this.polygon.points, this.polygon.points[0] ];
  }

  totalDistanceToPins(p: SimplePoint) {
    return Point.distance(p, this.pins[0])
      + Point.distance(p, this.pins[1]);
  }

  // These two functions:
  //   • Modify `snag` in place, if that's required to make sure
  //     there are enough points between it and `target` to cover
  //     the distance needed.
  //   • Return `true` if `snag` was modified, and `false` if not.
  // Both assume we have a fully flexible band, not just a triangle.
  private dragRoundSnagForwards(target: Snag, snag: Snag): boolean {
    const requiredSegments = Point.distance(target.point, snag.point) / this.segmentLength,
      availableSegments = (snag.index - target.index + this.segmentCount) % this.segmentCount;
    if (availableSegments < requiredSegments) {
      snag.index = Math.round(target.index + requiredSegments) % this.segmentCount;
      return true;
    }
    return false;
  }
  private dragRoundSnagBackwards(target: Snag, snag: Snag) {
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

function wrappedSplice<T>(destination: T[], source: T[], start: number) {
  for (let i = start, n = 0;
    n < source.length;
    ++n, i = ((i + 1) % destination.length)
  ) {
    destination[i] = source[n];
  }
}
