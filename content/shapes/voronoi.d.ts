import { Point, Polygon, Segment } from "@mathigon/fermat";
import { Step, GeoPoint } from "../shared/types";
import { Observable } from "@mathigon/boost";

declare class VoronoiStep extends Step {
  model: Observable<VoronoiModel>;
}

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
  h: Point
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
