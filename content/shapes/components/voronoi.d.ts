// =============================================================================
// Voronoi Declarations
// (c) Mathigon
// =============================================================================


import {Point, Polygon, Segment} from '@mathigon/euclid';
import {GeoPoint} from '../../shared/types';

interface VoronoiModel {
  dynPoints: {gPoint: GeoPoint, dlOpacity: number}[],
  cells: VoronoiCell[],
  vorOpacity: number,
  // TODO: replace use of these with score checks
  promptMorePoints: boolean,
  showButton: boolean,
  eightPoints: boolean,
  a: Point,
  b: Point,
  c: Point,
  d: Point,
  e: Point,
  f: Point,
  g: Point,
  h: Point,
  nearby: boolean
}

interface VoronoiCell {
  poly: Polygon,
  over: boolean
}

interface DistanceLine {
  edge: Segment,
  stroke: string,
  strokeWidth: number,
  opacity: number
}
