// =============================================================================
// Ellipse Drawing Component
// (c) Mathigon
// =============================================================================


import {tabulate} from '@mathigon/core';
import {clamp, nearlyEquals, SimplePoint, Point, Polygon} from '@mathigon/fermat';
import {CustomElementView, register, $N, slide, SVGBaseView, SVGParentView} from '@mathigon/boost';
import { smallAngle } from '../functions';
import { Points } from 'three';
import { polygonHull } from 'd3';

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

    const $svg = $N('svg', { width: width, height: height }, this) as SVGParentView;
    const $band = $N('path', { class: 'band' }, $svg) as SVGBaseView<SVGPathElement>;
    updateBandGraphic();
    for (const pin of this.pins)
      $N('circle', { class: 'pin', cx: pin.x, cy: pin.y, r: 5 }, $svg);
    const $pen = $N('circle', { 
      class: 'pen',
      cx: width / 2,
      cy: height / 2,
      r: 3
    }, $svg) as SVGBaseView<SVGCircleElement>;

    slide($svg, {
      move: (p) => {
        // console.log('FRAME START');
        let distance = this.totalDistanceToPins(p);

        // If the user has moved the pen outside the ellipse,
        // find a nearby point on the perimeter
        // (or rather, within one pixel of the perimeter).
        if (distance > totalDistance)
          while (Math.abs(distance - totalDistance) > 1) {
            p = Point.interpolate(this.centre, p, totalDistance / distance);
            distance = this.totalDistanceToPins(p);
          }

        $pen.setCenter(p);

        // If the pen is on (or very near) the perimeter,
        // don't bother with any physice simulation for the band.
        // Just force it to be where we know it should be.
        if (totalDistance - distance < 2) {
          band = new Polygon(p, ...this.pins);
          updateBandGraphic();
          return;
        }
        
        // If the pen is inside the current band polygon,
        // we still don't need to do anything.
        if (band.contains(p))
          return;

        // Since the pen is within the band, we need to do "physics".
        // Make sure we have enough points to simulate.
        if (band.points.length < bandPoints) {
          const interpolatedBand: Point[] = [];
          for (let i = 0; i <= 1; i += bandSegmentFraction)
            interpolatedBand.push(band.at(i));
          band = new Polygon(...interpolatedBand);
        }

        // The naive thing to do is simply drag the whole band towards the pen,
        // so let's start with that.
        band = dragBand(band, p);

        let iterations = 0;
        while (++iterations < 3) {
          // If that moved either of the pins are outside the band,
          // we need to pull them back in.
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
          if (totalBadness < 2) {
            updateBandGraphic();
            return;
          }
          snags.sort((a, b) => a.index - b.index);
          
          // First, check the bit of string *after* the pen
          // to see if it's long enough to get to the snag point.
          const beforeSnag = snags[snags.length - 1],
            penSnag = snags[0],
            afterSnag = snags[1];
          let afterDraggedBefore = false,
            penDraggedBefore = false,
            beforeDraggedAfter = false;
          const penDraggedAfter = dragBandRoundSnagForwards(band.points, penSnag, afterSnag);
          if (penDraggedAfter && snags.length === 3)
            afterDraggedBefore = dragBandRoundSnagForwards(band.points, afterSnag, beforeSnag);
          // Now the same thing with the bit of string *before* the pen.
          if (!afterDraggedBefore) {
            penDraggedBefore = dragBandRoundSnagBackwards(band.points, penSnag, beforeSnag);
            if (penDraggedBefore && !penDraggedAfter && snags.length === 3)
              beforeDraggedAfter = dragBandRoundSnagBackwards(band.points, beforeSnag, afterSnag);
          }

          // console.log({
          //   snags,
          //   penDraggedAfter, penDraggedBefore,
          //   afterDraggedBefore, beforeDraggedAfter
          // });

          // Now the snags are all in the right places,
          // we just need to straighten out the segments.
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
          // for (const snag of snags)
          //   band.points[snag.index] = snag.point;
          
          // console.log(band.points.map(p => `${p.x},     ${p.y}`).join('\n'))
        }
      }
    });

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

    function straightenSegment(band: Point[], start: Snag, end: Snag) {
      for (const point of band)
        if (isNaN(point.x))
          console.error('inputnan', band, start, end)
      let p = 0;
      const ib = [...band];
      const requiredSegments = (end.index - start.index + band.length) % band.length,
        segmentFraction = 1 / requiredSegments;
      for (let i = start.index; i !== end.index; i = (i + 1) % band.length) {
        band[i] = Point.interpolate(start.point, end.point, p);
        p += segmentFraction;
      }
      for (const point of band)
        if (isNaN(point.x))
          console.error('nan found', ib, start, end)
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
    // TODO: test this?
    function pivotArray<T>(array: T[], start: number, end = start): T[] {
      if (end > start)
        return array.slice(start, end);
      else
        return [
          ...array.slice(start),
          ...array.slice(0, end)
        ];
    }


    function dragBand(band: Polygon, p: Point): Polygon {
      const nearestPointToPen = nearestPointOfBand(band.points, p);
      let points = pivotArray(band.points, nearestPointToPen.index!);

      let iterations = 10;
      while (true) {
        points = dragSegmentForwards(points, p);
        points = dragSegmentBackwards(points, p);
        if (!closeEnough(points[0], p) && --iterations)
          continue;
        // const newBand = new Polygon(...points);
        // console.log(bandLength, newBand.circumference);
        // if (Math.abs(bandLength - newBand.circumference) < 5) {
          const smooth = smoothBand(points);
          smooth[0] = p;
          return new Polygon(...smooth);
        // }
      }
    }

    function smoothBand(points: Point[]): Point[] {
      const newPoints = [],
        n = points.length;
      for (let i = 0; i < n; ++i) {
        const b = points[i],
          a = points[(i + n - 1) % n],
          c = points[(i + 1) % n];
        newPoints[i] = b.scale(2).add(a.add(c)).scale(0.25);
      }
      return newPoints;
    }

    const snapToStraightAt = 1.00,
      startInterpolatingAt = 1.05,
      interpolationRange = startInterpolatingAt - snapToStraightAt;

    function pullSegment(points: Point[], start: Snag, end: Snag) {
      
      for (const point of points)
        if (isNaN(point.x))
          console.error('inputpullnan', points, start, end)
      // straightenSegment(points, start, end);
      // return;
      const ip = [...points];

      // console.log('pulling')
      const pointCount = ((end.index - start.index + points.length) % points.length) || points.length;
      const segment = pivotArray(points, start.index, end.index);
      if (segment.length !== pointCount) {
        console.error(start, end, points.length);
        throw new Error(`seglen = ${segment.length} but pointcount = ${pointCount}`);
      }

      // Fudge it to a straight line if it's close
      // const totalDistance = pointCount * bandSegmentLength;
      let totalDistance = 0;
      for (let i = 1; i < pointCount; ++i)
        totalDistance += Point.distance(segment[i - 1], segment[i]);
      const requiredDistance = Point.distance(start.point, end.point),
        distanceRatio = totalDistance / requiredDistance;
      if (distanceRatio < snapToStraightAt) {
        // console.log('fudging pull', totalDistance, requiredDistance)
        straightenSegment(points, start, end);
        return;
      }

      const draggedSegment = dragSegment(segment, start.point, end.point);
      for (let i = 0; i < pointCount; ++i) {
        points[(start.index + i) % points.length] = draggedSegment[i];
      }

      if (distanceRatio < startInterpolatingAt) {
        // interpolate with a straight line to smooth the discontinuities between the algorithms
        const straight = [ ...points ];
        straightenSegment(straight, start, end);
        const p = clamp((startInterpolatingAt - distanceRatio) / interpolationRange, 0, 1);
        // console.log(distanceRatio,
        //   startInterpolatingAt - distanceRatio,
        //   (startInterpolatingAt - distanceRatio) / interpolationRange,
        //   p);
        for (let i = 0; i < points.length; ++i)
          points[i] = Point.interpolate(points[i], straight[i], p);
      }

      points[start.index] = start.point;
      points[end.index] = end.point;
      for (const point of points)
        if (isNaN(point.x))
          console.error('pullnan', ip, start, end)
      return;

      // const pointCount = (end.index - start.index + points.length) % points.length;
      const forwards: Point[] = [];
      const backwards: Point[] = [];
      for (let iterations = 0; iterations < 10; ++iterations) {
        let lastForwardIndex = start.index,
          lastBackwardIndex = end.index;
        points[start.index] = start.point;
        points[end.index] = end.point;
        for (let i = 1; i < pointCount; ++i) {
          const forwardIndex = (lastForwardIndex + 1) % points.length,
            backwardIndex = (lastBackwardIndex || points.length) - 1;
          forwards[forwardIndex] = dragPoint(points[forwardIndex], points[lastForwardIndex]);
          backwards[backwardIndex] = dragPoint(points[backwardIndex], points[lastBackwardIndex]);
          lastForwardIndex = forwardIndex;
          lastBackwardIndex = backwardIndex;
        }
        // Lastly, interpolate between the forward and backward runs
        if (iterations === 2) {
          for (let i = 1; i < pointCount; ++i) {
            const j = (lastForwardIndex + 1) % points.length;
            if (forwards[j] && backwards[j]) {
              points[j] = (iterations & 1) ? backwards[j] : forwards[j];
            }
            return;
          }
        }
        for (let i = 1; i < pointCount; ++i) {
          const j = (lastForwardIndex + 1) % points.length;
          if (forwards[j] && backwards[j]) {
            points[j] = Point.interpolate(backwards[j], forwards[j], i / pointCount);
          }
        }
      }


    }

    // Stretches a segment between two points.
    function dragSegment(points: Point[], newStart: Point, newEnd: Point): Point[] {
      let iterations = 10;
      // console.log('b', points.length);
      while (true) {
        if (!--iterations) break;
        points = dragSegmentForwards(points, newStart);
        // console.log('start err', Point.distance(points[points.length - 1], newEnd));
        if (closeEnough(points[points.length - 1], newEnd))
          break;
        points = dragSegmentBackwards(points, newEnd);
        // console.log('end err', Point.distance(points[0], newStart));
        if (closeEnough(points[0], newStart))
          break;
      }
      // smoothBand(points);
      // console.log('a', points.length);
      // let d = 0;
      // for (let i = 1; i < points.length; ++i)
      //   d += Point.distance(points[i - 1], points[i]);
      // const l = points.length * bandSegmentLength;
      // console.log('len by number of points:', l);
      // console.log('len by geometry:', d);
      // console.log('error:', d - l);
      return points;
    }

    function closeEnough(a: Point, b: Point): boolean {
      return Point.manhattan(a, b) < 0.5;
    }

    // Pulls a chain towards a new target
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

    function updateBandGraphic() {
      // console.log(band.circumference, bandLength, band);
      const pe = ((band.circumference - bandLength) / bandLength * 100);
      if (pe > 5)
        console.error(pe.toFixed(2) + '%');
      else if (pe > 2)
        console.warn(pe.toFixed(2) + '%');
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
