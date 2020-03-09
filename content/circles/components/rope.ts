import { Point, clamp } from "@mathigon/fermat";

// Cosntants used in pullSegment:
const snapToStraightAt = 1.00,
  startInterpolatingAt = 1.03,
  interpolationRange = startInterpolatingAt - snapToStraightAt;
  
export default class RopeSegment {
  public segmentLength!: number;
  public segmentFraction!: number;

  public points: Point[] = [];

  private constructor(
    public start: Point,
    public end: Point,
    public length: number,
    public segmentCount = Math.round(length)
  ) {
    this.segmentLength = this.length / this.segmentCount;
    this.segmentFraction = 1 / this.segmentCount;
  }

  static fromArray(points: Point[]) {
    const rope = new RopeSegment(points[0], points[points.length - 1], points.length);
    rope.points = [ ...points ];
    return rope;
  }

  straighten(start: Point = this.start, end: Point = this.end): RopeSegment {
    this.points = this.asStraightLine(start, end);
    return this;
  }

  // Tightens the string, but not completely.
  pull(newStart: Point = this.start, newEnd: Point = this.end): RopeSegment {
    this.start = newStart;
    this.end = newEnd;
    // Work out how close we are to a straight line
    const requiredDistance = Point.distance(newStart, newEnd),
      distanceRatio = this.length / requiredDistance;

    // Fudge it to a straight line if it's close
    if (distanceRatio < snapToStraightAt) {
      this.straighten();
      return this;
    }

    // Otherwise run a simple physics simulation to find a similar curve of the correct length
    // and copy it into the points array.
    this.drag();

    // If it's close to the straightness where we'd fudge it into a straight line,
    // interpolate with the straight line version to smooth any discontinuities between the algorithms
    if (distanceRatio < startInterpolatingAt) {
      const straight = this.asStraightLine();
      const p = clamp((startInterpolatingAt - distanceRatio) / interpolationRange, 0, 1);
      for (let i = 0; i < this.points.length; ++i)
        this.points[i] = Point.interpolate(this.points[i], straight[i], p);
    }

    // Make sure the end points are correct, and return.
    this.points[0] = this.start;
    this.points[this.points.length - 1] = this.end;
    return this;
  }

  smooth(): RopeSegment {
    const newPoints = [this.start];
    for (let i = 1; i < this.points.length - 1; ++i) {
      const point = this.points[i],
        next = this.points[i + 1],
        previous = this.points[i - 1];
      newPoints.push(point.scale(2).add(next.add(previous)).scale(0.25));
    }
    newPoints.push(this.end);
    this.points = newPoints;
    return this;
  }

  private asStraightLine(start: Point = this.start, end: Point = this.end): Point[] {
    const points: Point[] = [];
    let p = 0;
    for (let i = 0; i < this.segmentCount; ++i) {
      points.push(Point.interpolate(start, end, p));
      p += this.segmentFraction;
    }
    return points;
  }

  // Stretches the rope between two points — a simpler version of pullSegment used as a utility.
  private drag() {
    for (let iterations = 10; iterations > 0; --iterations) {
      this.dragForwards();
      if (closeEnough(this.points[this.points.length - 1], this.end))
        break;
        this.dragBackwards();
      if (closeEnough(this.points[0], this.start))
        break;
    }
  }

  // These function pulls a chain towards a new target,
  // with no regard for where the other end ends up.
  dragForwards(newStart: Point = this.start) {
    const newPoints = [newStart];
    for (let i = 1; i < this.points.length; ++i)
      newPoints.push(this.dragPoint(this.points[i], newPoints[i - 1]));
    this.points = newPoints;
  }
  dragBackwards(newEnd: Point = this.end) {
    const newPoints = [newEnd];
    for (let i = this.points.length - 2; i >= 0; --i)
      newPoints.unshift(this.dragPoint(this.points[i], newPoints[0]));
    this.points = newPoints;
  }

  // Drags a single point towards a target on a rigid rod of given length
  private dragPoint(current: Point, target: Point): Point {
    const difference = current.subtract(target);
    // Just to stop divisions by zero:
    if (difference.length < 0.0001)
      return target.add({ x: 0.1, y: 0.1 });
    return target.add(difference.scale(this.segmentLength / difference.length));
  }

}

function closeEnough(a: Point, b: Point): boolean {
  return Point.manhattan(a, b) < 0.5;
}
