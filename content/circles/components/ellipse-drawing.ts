// =============================================================================
// Ellipse Drawing Component
// (c) Mathigon
// =============================================================================


import {clamp, SimplePoint, Point, Polygon} from '@mathigon/fermat';
import {CustomElementView, register, $N, slide, SVGBaseView, SVGParentView} from '@mathigon/boost';


interface NearestPoint {
  point: Point;
  index: number;
  distance: number;
}

interface Snag {
  index: number;
  point: Point;
}


const width = 500,
  height = 400,
  bandPoints = 500,
  bandSegmentFraction = 1 / bandPoints;


@register('x-ellipse-drawing')
export class EllipseDrawing extends CustomElementView {

  private pins = [
    new Point(width * 0.3, height / 2),
    new Point(width * 0.7, height / 2),
  ];
  private centre = new Point(width / 2, height / 2);


  ready() {
    // totalDistance doesn't include the gap between the pins;
    // bandLength does.
    const totalDistance = width * 0.8,
      bandLength = totalDistance + this.pins[0].subtract(this.pins[1]).length,
      bandSegmentLength = bandLength * bandSegmentFraction;

    // The band starts out as a (smaller) ellipse around the centre.
    // Generate a circle, squash it arbitrarily,
    // then scale it so the distance is right.
    const initialBandRadius = totalDistance / (Math.PI * 2);
    let band: Polygon = Polygon.regular(bandPoints, initialBandRadius)
      .scale(1.2, 0.5);
    band = band.scale(bandLength / band.circumference)
      .translate(this.centre);

    // Generate the SVG elements (except $trail, which generates on-click):
    const $svg = $N('svg', { width: width, height: height }, this) as SVGParentView;
    let $trail: SVGBaseView<SVGPathElement>;
    for (const pin of this.pins) {
      const shadow = pin.add({ x: 10, y: 10 });
      $N('circle', { class: 'shadow', cx: shadow.x, cy: shadow.y, r: 5 }, $svg);
      const $stick = $N('path', { class: 'shadow' }, $svg) as SVGBaseView<SVGPathElement>;
      $stick.points = [ pin, shadow ];
    }
    const $band = $N('path', { class: 'band' }, $svg) as SVGBaseView<SVGPathElement>;
    updateBandGraphic();
    for (const pin of this.pins)
      $N('circle', { class: 'pin', cx: pin.x, cy: pin.y, r: 5 }, $svg);
    const $pen = $N('circle', { 
      class: 'pen',
      // Hide pen initially by positioning it offscreen
      cx: -1000,
      cy: -1000,
      r: 3
    }, $svg) as SVGBaseView<SVGCircleElement>;

    slide($svg, {
      start: () => {
        // Create a new trail every time a drag starts...
        $trail = $N('path', { class: 'trail' }) as SVGBaseView<SVGPathElement>;
        $svg._el.insertBefore($trail._el, $band._el);
      },

      end: () => {
        // Hide the pen when the drag ends
        $pen.setCenter({
          x: -1000,
          y: -1000
        });
      },

      move: (p) => {
        // If the user has moved the pen outside the ellipse,
        // find a nearby point on the perimeter
        // (or rather, within one pixel of the perimeter).
        let distance = this.totalDistanceToPins(p);
        if (distance > totalDistance)
          while (Math.abs(distance - totalDistance) > 1) {
            p = Point.interpolate(this.centre, p, totalDistance / distance);
            distance = this.totalDistanceToPins(p);
          }

        // Draw the pen and its trail.
        $pen.setCenter(p);
        if ($trail)
          $trail.points = [ ...$trail.points, p ];

        // If the pen is on (or very near) the perimeter,
        // don't bother with any physics simulation for the band.
        // Just draw it as a triangle.
        if (totalDistance - distance < 2) {
          band = new Polygon(p, ...this.pins);
          updateBandGraphic();
          return;
        }
        
        // If the pen is inside the band, no dragging happens.
        if (band.contains(p))
          return;

        // Otherwise, we need to do "physics".
        // Make sure we have enough points to simulate.
        if (band.points.length < bandPoints) {
          const interpolatedBand: Point[] = [];
          for (let i = 0; i <= 1; i += bandSegmentFraction)
            interpolatedBand.push(band.at(i));
          band = new Polygon(...interpolatedBand);
        }

        // The naive thing to do is simply drag the whole band towards the pen.
        // We start with that, and fix any problems later.
        band = dragBand(band, p);

        // If we moved either of the are outside the band,
        // we need to pull them back in.
        // This might need iterating a couple of times but we limit it
        // for performance and safety.
        let iterations = 0;
        while (++iterations < 3) {
          // First, work out which pins are affected and whether we care.
          const snags: Snag[] = [{ index: 0, point: p }];
          let totalBadness = 0;
          for (const pin of this.pins)
            if (!band.contains(pin)) {
              const nearest = nearestPointOfBand(band.points, pin);
              totalBadness += nearest.distance;
              snags.push({
                index: nearest.index,
                point: pin
              });
            }
          // If both pins are within (or very nearly within) the band,
          // we don't need to change anything, so draw the band and exit.
          if (totalBadness < 2) {
            updateBandGraphic();
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
          const penDraggedAfter = dragBandRoundSnagForwards(band.points, penSnag, afterSnag);
          if (penDraggedAfter && snags.length === 3)
            afterDraggedBefore = dragBandRoundSnagForwards(band.points, afterSnag, beforeSnag);
          if (!afterDraggedBefore) {
            penDraggedBefore = dragBandRoundSnagBackwards(band.points, penSnag, beforeSnag);
            if (penDraggedBefore && !penDraggedAfter && snags.length === 3)
              beforeDraggedAfter = dragBandRoundSnagBackwards(band.points, beforeSnag, afterSnag);
          }

          // Lastly, now we know how much string there is where,
          // we move the individual elements to get the total distance (about) right.
          if (penDraggedAfter)
            straightenSegment(band.points, penSnag, afterSnag);
          else
            pullSegment(band.points, penSnag, afterSnag);
          if (penDraggedBefore)
            straightenSegment(band.points, beforeSnag, penSnag);
          else
            pullSegment(band.points, beforeSnag, penSnag);
          if (snags.length > 2) {
            if (beforeDraggedAfter || afterDraggedBefore)
              straightenSegment(band.points, afterSnag, beforeSnag);
            else
              pullSegment(band.points, afterSnag, beforeSnag);
          }

          // The loop now restarts —
          // hopefully we've got both pins inside the band this time.
        }
      }
    });

    // These two functions:
    //   • Modify `snag` in place, if that's required to make sure
    //     there are enough points between it and `target` to cover
    //     the distance needed.
    //   • Return `true` if `snag` was modified, and `false` if not.
    function dragBandRoundSnagForwards(band: Point[], target: Snag, snag: Snag): boolean {
      const requiredSegments = Point.distance(target.point, snag.point) / bandSegmentLength,
        availableSegments = (snag.index - target.index + band.length) % band.length;
      if (availableSegments < requiredSegments) {
        snag.index = Math.round(target.index + requiredSegments) % band.length;
        return true;
      }
      return false;
    }
    function dragBandRoundSnagBackwards(band: Point[], target: Snag, snag: Snag) {
      const requiredSegments = Point.distance(target.point, snag.point) / bandSegmentLength,
        availableSegments = (target.index - snag.index + band.length) % band.length;
      if (availableSegments < requiredSegments) {
        snag.index = Math.round(target.index + band.length - requiredSegments) % band.length;
        return true;
      }
      return false;
    }

    // Replaces the points in a section of the band with a straight line.
    // Used when the string is taut.
    function straightenSegment(band: Point[], start: Snag, end: Snag) {
      let p = 0;
      const requiredSegments = (end.index - start.index + band.length) % band.length,
        segmentFraction = 1 / requiredSegments;
      for (let i = start.index; i !== end.index; i = (i + 1) % band.length) {
        band[i] = Point.interpolate(start.point, end.point, p);
        p += segmentFraction;
      }
    }

    function nearestPointOfBand(band: Point[], p: Point): NearestPoint {
      let nearestPoint = null,
        nearestIndex: number | any = null,
        shortestDistance = Infinity;
      for (let i = 0; i < band.length; ++i) {
        const candidate = band[i],
          distance = Point.manhattan(candidate, p);
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

    // Takes an array which is assumed to be a loop and gives you a slice that wraps round.
    function pivotArray<T>(array: T[], start: number, end = start): T[] {
      return (end > start)
        ? array.slice(start, end)
        : [ ...array.slice(start), ...array.slice(0, end) ];
    }

    // Drags the entire band to include point `p`
    function dragBand(band: Polygon, p: Point): Polygon {
      const nearestPointToPen = nearestPointOfBand(band.points, p);
      let points = pivotArray(band.points, nearestPointToPen.index!);
      while (true) {
        points = dragSegmentForwards(points, p);
        points = dragSegmentBackwards(points, p);
        const smooth = smoothBand(points);
        smooth[0] = p;
        return new Polygon(...smooth);
      }
    }

    // Sometimes the drag algorithm makes jagged edges when the chain is pushed rather than pulled.
    // This function "blurs" the positions, masking that effect.
    // It affects the length, but not so you'd notice.
    function smoothBand(points: Point[]): Point[] {
      const newPoints = [],
        n = points.length;
      for (let i = 0; i < n; ++i) {
        const point = points[i],
          next = points[(i + n - 1) % n],
          previous = points[(i + 1) % n];
        newPoints[i] = point.scale(2).add(next.add(previous)).scale(0.25);
      }
      return newPoints;
    }

    // Cosntants used in pullSegment:
    const snapToStraightAt = 1.00,
      startInterpolatingAt = 1.05,
      interpolationRange = startInterpolatingAt - snapToStraightAt;

    // Tightens a section of the string, but not completely.
    function pullSegment(points: Point[], start: Snag, end: Snag) {

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
        straightenSegment(points, start, end);
        return;
      }

      // Otherwise run a simple physics simulation to find a similar curve of the correct length
      // and copy it into the points array.
      const draggedSegment = dragSegment(segment, start.point, end.point);
      for (let i = 0; i < segment.length; ++i) {
        points[(start.index + i) % points.length] = draggedSegment[i];
      }

      // If it's close to the straightness where we'd fudge it into a straight line,
      // interpolate with the straight line version to smooth any discontinuities between the algorithms
      if (distanceRatio < startInterpolatingAt) {
        const straight = [ ...points ];
        straightenSegment(straight, start, end);
        const p = clamp((startInterpolatingAt - distanceRatio) / interpolationRange, 0, 1);
        for (let i = 0; i < points.length; ++i)
          points[i] = Point.interpolate(points[i], straight[i], p);
      }

      // Make sure the end points are correct, and return.
      points[start.index] = start.point;
      points[end.index] = end.point;
      return;
    }

    // Stretches a segment between two points — a simpler version of pullSegment used as a utility.
    function dragSegment(points: Point[], newStart: Point, newEnd: Point): Point[] {
      let iterations = 10;
      while (true) {
        if (!--iterations) break;
        points = dragSegmentForwards(points, newStart);
        if (closeEnough(points[points.length - 1], newEnd))
          break;
        points = dragSegmentBackwards(points, newEnd);
        if (closeEnough(points[0], newStart))
          break;
      }
      return points;
    }

    function closeEnough(a: Point, b: Point): boolean {
      return Point.manhattan(a, b) < 0.5;
    }

    // These function pulls a chain towards a new target,
    // with no regard for where the other end ends up.
    function dragSegmentForwards(points: Point[], target: Point): Point[] {
      const newPoints = [target];
      for (let i = 1; i < points.length; ++i)
        newPoints.push(//Point.interpolate(
          dragPoint(points[i], newPoints[i - 1]));
          //points[i],
          //i / points.length));
      return newPoints;
    }
    function dragSegmentBackwards(points: Point[], target: Point): Point[] {
      const newPoints = [target];
      for (let i = points.length - 2; i >= 0; --i)
        newPoints.unshift(//Point.interpolate(
          //points[i],
          dragPoint(points[i], newPoints[0]));
          //i / points.length));
      return newPoints;
    }

    // Drags a single point towards a target on a rigid rod of given length
    function dragPoint(current: Point, target: Point): Point {
      const difference = current.subtract(target);
      // Just to stop divisions by zero:
      if (difference.length < 0.0001)
        return target.add({ x: 0.1, y: 0.1 });
      return target.add(difference.scale(bandSegmentLength / difference.length));
    }

    // Draws the band to the screen.
    function updateBandGraphic() {
      const points = band.points.length > 10 ? smoothBand(band.points) : band.points;
      $band.points = [ ...points, points[0] ];
    }
  }

  totalDistanceToPins(p: SimplePoint) {
    return this.pins.reduce((distance, pin) =>
      distance + pin.subtract(p).length,
      0);
  }
}
