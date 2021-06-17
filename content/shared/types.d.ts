import {EventTarget, Obj} from '@mathigon/core';
import {Angle, Arc, Bounds, Circle, GeoElement, GeoShape, intersections, Line, Point, Polygon, Polyline, Ray, Rectangle, Sector, Segment, TransformMatrix, Triangle} from '@mathigon/euclid';
import {AnimationResponse, CustomElementView, ElementView, Observable, SVGParentView, SVGView} from '@mathigon/boost';
import {ExprElement} from '@mathigon/hilbert';
import {Select, Step, StepComponent, UserData} from '@mathigon/studio';

type Callback = (p: number) => void;
export class Ticker {
  private callbacks;
  add(fn: Callback): void;
  start(time?: number): Promise<void>;
}
export type Transform = {
  x: number;
  y: number;
  scale: number;
};
export abstract class DisplayNode {
  readonly type: string;
  readonly equation: DisplayEquation;
  $element?: SVGView|undefined;
  parent?: DisplayNode;
  children: DisplayNode[];
  status: string;
  value: string;
  customColor: string;
  roundedMotion: boolean;
  width: number;
  height: number;
  baseline: number;
  transform: {x: number; y: number; scale: number};
  private currentDimensions;
  private currentWorldTransform;
  constructor(type: string, children: DisplayNode[], equation: DisplayEquation, $element?: SVGView|undefined);
  get expr(): string;
  get log(): string;
  get color(): string;
  static create(el: Element, equation: DisplayEquation): DisplayNode;
  get marginLeft(): number;
  get marginRight(): number;
  setTransform(x?: number, y?: number, scale?: number): void;
  get worldTransform(): {x: number; y: number; scale: number};
  get next(): DisplayNode|undefined;
  get prev(): DisplayNode|undefined;
  addChildren(children: DisplayNode[], index?: number): void;
  insertAfter(newNodes: DisplayNode[]): void;
  insertBefore(newNodes: DisplayNode[]): void;
  detach(): void;
  deleteFromDom(): void;
  hasParent(type: string): boolean;
  measure(): void;
  clean(): void;
  setStatus(status: string): void;
  render(ticker?: Ticker): void;
  protected positionElement(t: {x: number; y: number; scale: number}): void;
  protected drawElement(p: number, width: number, height: number, baseline: number, scale: number): void;
}
export class DisplayNodeRow extends DisplayNode {
  readonly align?: string|undefined;
  readonly dx: number;
  constructor(children: DisplayNode[], equation: DisplayEquation, align?: string|undefined, dx?: number);
  addChildren(children: DisplayNode[], index?: number): void;
  get expr(): string;
  measure(): void;
}
export class DisplayEquation extends EventTarget {
  readonly $row: SVGView;
  readonly $overlay?: ElementView|undefined;
  readonly fontSize: number;
  readonly isDisplay: boolean;
  root: DisplayNodeRow;
  isReady: boolean;
  readonly deletedNodes: Set<DisplayNode>;
  private desc;
  constructor($row: SVGView, $overlay?: ElementView|undefined, dx?: number, align?: string, fontSize?: number, isDisplay?: boolean);
  setValue(expr: string|Element[]): void;
  private updateDescription;
  resize(): void;
  private parse;
  private find;
  animate(t?: number): Promise<void>;
  addTermAfter(expr: string, search?: string): void;
  addTermBefore(expr: string, search?: string): void;
  deleteTerm(expr: string): void;
  replaceTerm(search: string, expr: string): void;
  moveTermAfter(expr: string, search?: string): void;
  moveTermBefore(expr: string, search?: string): void;
  moveTermToStart(expr: string): void;
  wrapTerms(expr: string, ...searchTerms: string[]): void;
  unwrapTerm(search: string, levels?: number): void;
  get leftSide(): DisplayNode[];
  get rightSide(): DisplayNode[];
}
type StepMap = Obj<((equation: DisplayEquation) => void)>;
export class AlgebraFlow extends CustomElementView implements StepComponent {
  private $svg;
  private $overlay;
  private $lastRow;
  private rows;
  private isReady;
  private equation;
  private topOffset;
  private currentHeight;
  private currentStep;
  private $legend;
  private $steps;
  private $back;
  private $next;
  private nextEvents;
  private backEvents;
  ready(): void;
  setup($step: Step): void;
  newRow(): Promise<void>;
  hideLastRow(): Promise<void>;
  onNextStep(obj: StepMap): void;
  onBackStep(obj: StepMap): void;
  goNext(): Promise<void>;
  goBack(): Promise<void>;
  private go;
}
export type EquationValidationResponse = {
  isCorrect?: boolean;
  error?: string;
}|undefined;
export class Equation extends CustomElementView implements StepComponent {
  $math: ElementView;
  private $textarea;
  private $cursor;
  private $error;
  private $step?;
  private numeric?;
  private isDone;
  private shortVar;
  private value?;
  private error?;
  private lastAttempt;
  private errorCount;
  private autocomplete?;
  private substitutions?;
  solution: ExprElement;
  hints: string[];
  fns: string[];
  vars: string[];
  validate?: ((expr: ExprElement) => EquationValidationResponse);
  ready(): void;
  setup($step: Step, goal: string, userData?: UserData): void;
  focus(): void;
  onPointerdown(e?: PointerEvent): void;
  onKey(e: {
      code?: number;
      key: string;
  }): void;
  onBlur(): void;
  check(): string|void;
  complete(expr: ExprElement): void;
  solve(): void;
}
export class EquationSystem extends CustomElementView implements StepComponent {
  private $table;
  private $equation;
  private lastRowContent;
  private rowCount;
  private previousAnswers;
  private isSolved;
  private maxRows;
  private steps;
  private hints;
  validate?: (expr: ExprElement, isRepeated: boolean) => EquationValidationResponse;
  isFinal?: (expr: ExprElement) => boolean;
  created(): void;
  ready(): void;
  setup($step: Step, goal: string, userData?: UserData): void;
  setupEquation($equation: Equation): void;
  onSolveRow(expr: ExprElement): void;
  solve(): void;
}
type SlideGenerator = (el: ElementView, success: () => void, error: () => void) => void;
export type TapEvent = {
  posn: Point;
  event: PointerEvent;
};
export type MoveEvent = {
  posn: Point;
  startPosn: Point;
  lastPosn: Point;
  event: PointerEvent;
};
interface Callbacks {
  hover?: (e: TapEvent) => void;
  down?: (e: TapEvent) => void;
  start?: (e: TapEvent) => void;
  move?: (e: MoveEvent) => void;
  end?: (e: MoveEvent) => void;
  click?: (e: TapEvent) => void;
  checkIfActive?: () => boolean;
  cursor?: boolean;
}
export class EventManager {
  private readonly $canvas;
  private readonly defaultCallbacks;
  private readonly callbacks;
  isMoving: boolean;
  shiftKey: boolean;
  cancelled: boolean;
  constructor($canvas: SVGParentView, defaultCallbacks: Callbacks);
  listen($el: ElementView, callbacks: Callbacks): void;
  startEvent(e: PointerEvent): void;
  private getCallbacks;
  cancel(): void;
}
export type PathDefinition = string|Path|((p: Path) => boolean);
export interface WaitForPathsOptions {
  onBegin?: (path: GeoPath) => void;
  onCorrect?: (path: GeoPath, index: number) => void;
  onIncorrect?: (path: GeoPath) => void;
  onHint?: (path: GeoPath, index: number) => void;
  onComplete?: (toManyErrors: boolean) => void;
  maxErrors?: number;
}
export abstract class Tool {
  protected readonly $parent: Geopad;
  protected snapPoint?: GeoPoint;
  protected snapIntersect?: Intersection;
  protected snapPath?: GeoPath;
  constructor($parent: Geopad);
  enable(): void;
  down(_posn: Point): void;
  start(_posn: Point): void;
  move(_posn: Point, _lastPosn: Point): void;
  end(_posn: Point): void;
  hover(_posn: Point): void;
  click(_posn: Point): void;
  cancel(): void;
  protected snapToGrid(posn: Point): Point;
  protected snapToPoint(point: GeoPoint, posn: Point): void;
  protected getOrMakePointAt(posn: Point): GeoPoint;
  protected showPendingPointAt(posn: Point): void;
}
export class MoveTool extends Tool {
  protected obj?: GeoPath|GeoPoint|GeoPolygon;
  private isMoving;
  enable(): void;
  down(posn: Point): void;
  start(): void;
  move(posn: Point, lastPosn: Point): void;
  end(): void;
  hover(posn: Point): void;
}
export class PointTool extends MoveTool {
  down(posn: Point): void;
  hover(posn: Point): void;
}
export abstract class DrawTool<T extends Path> extends Tool {
  private startPoint?;
  private endPoint?;
  private path?;
  enable(): void;
  down(posn: Point): void;
  start(posn: Point): void;
  move(posn: Point): void;
  end(): void;
  hover(posn: Point): void;
  cancel(): void;
  abstract expr(start: Point, end: Point): T;
}
export class LineTool extends DrawTool<Line> {
  expr(start: Point, end: Point): Segment;
}
export class CircleTool extends DrawTool<Circle> {
  expr(start: Point, end: Point): Circle;
}
export class RectangleTool extends DrawTool<Rectangle> {
  expr(start: Point, end: Point): Rectangle;
}
export class PerpBisectorTool extends DrawTool<Line> {
  expr(start: Point, end: Point): Line;
}
export class AngleBisectorTool extends Tool {
  protected firstPoint?: GeoPoint;
  protected secondPoint?: GeoPoint;
  protected thirdPoint?: GeoPoint;
  protected path?: GeoPath;
  enable(): void;
  down(posn: Point): void;
  hover(posn: Point): void;
  cancel(): void;
}
export class Geopad extends CoordinatePlane {
  shapes: Map<string, GeoShape$>;
  points: Set<GeoPoint>;
  paths: Set<GeoPath<Path>>;
  polygons: Set<GeoPolygon>;
  intersections: Set<Intersection>;
  snapToGrid: number;
  locked: boolean;
  hidePoints: boolean;
  canSelect: boolean;
  canIntersect: boolean;
  canProject: boolean;
  inferPolygons: boolean;
  labelPositioning: boolean;
  selection?: GeoShape$;
  hovering?: GeoShape$;
  private cursor;
  queueLabelPositioning: () => void;
  $polygons: ElementView;
  $paths: ElementView;
  $pulses: ElementView;
  $points: ElementView;
  $objLabels: ElementView;
  $pendingPoint: SVGView;
  private $compass?;
  private $ruler?;
  private $gesture?;
  model: Observable<typeof DEFAULT_GEO_MODEL & Obj<any>>;
  $tools: Select;
  viewportRect: Rectangle;
  toolOverride?: Tool;
  ready(): void;
  switchTool(name: ToolName): void;
  setCursor(name?: CursorName): void;
  select(obj?: GeoShape$<any>): void;
  deselect(): void;
  delete(): void;
  redraw(): void;
  getPointAt(posn: Point, min?: number): GeoPoint|undefined;
  getPathAt(posn: Point, min?: number): GeoPath<Path>|undefined;
  getIntersectionAt(posn: Point, min?: number): Intersection|undefined;
  getPolygonAt(posn: Point): GeoPolygon|undefined;
  updateIntersections(): void;
  updateInferredPolygons(newPath: GeoPath): void;
  drawPath(x: string|GeoValue<Path>, options?: GeoOptions): GeoPath<Path>;
  drawPoint(x: string|GeoValue<Point>, options?: GeoOptions): GeoPoint;
  animatePoint(name: string, target: Point, duration?: number): AnimationResponse;
  animateConstruction(name: string, duration?: number): Promise<void>;
  showGesture(from: string, to?: string): void;
  waitForPoint(): Promise<GeoPoint>;
  waitForPath<T extends Path = Path>(validate: PathDefinition, options?: WaitForPathsOptions): Promise<GeoPath<T>>;
  waitForPaths<T extends Path = Path>(paths: PathDefinition[], options?: WaitForPathsOptions): Promise<GeoPath<T>[]>;
}
export abstract class GeoShape$<T extends Point|Path = Point|Path> {
  readonly $parent: Geopad;
  $el: SVGView;
  name: string;
  color: string;
  label: string;
  isPending: boolean;
  isLocked: boolean;
  components: GeoPoint[];
  dependencies: GeoShape$[];
  protected $label?: ElementView;
  private fixedLabel;
  protected constructor($parent: Geopad, initial: GeoValue<T>, $el: SVGView, name?: string);
  get value(): T|undefined;
  get type(): string|undefined;
  get locked(): boolean;
  get isHidden(): boolean;
  setValue(p: GeoValue<T>): void;
  setLabel(str: string, color?: string, position?: string): void;
  setColor(color: string): void;
  updateLabelPosition(): void;
  select(): void;
  deselect(): void;
  hover(silent?: boolean): void;
  unhover(silent?: boolean): void;
  delete(duration?: number): Promise<void>;
  abstract redraw(p: Point|Path): void;
  protected abstract removeElement(duration?: number): Promise<void>;
  abstract distance(p: Point): number;
}
export class GeoPoint extends GeoShape$<Point> {
  private $halo?;
  private $pulse?;
  private projectionId;
  private projection?;
  private projectionOffset;
  constructor($parent: Geopad, initial: GeoValue<Point>, name?: string, $el?: SVGView, isLocked?: boolean);
  setValue(p: GeoValue<Point>): void;
  redraw(p: Point): void;
  protected removeElement(duration: number): Promise<void>;
  distance(p: Point): number;
  lock(locked?: boolean): void;
  project(p: string|GeoShape$<Path>|undefined): void;
  makeIntersection({path1, path2, index}: Intersection): void;
  addHalo(): void;
  removeHalo(): Promise<void>;
  pulsate(): void;
}
export class GeoPath<T extends Path = Path> extends GeoShape$<T> {
  constructor($parent: Geopad, initial: GeoValue<T>, name?: string, $el?: SVGView);
  get locked(): boolean;
  redraw(p: Path): void;
  distance(posn: Point): number;
  protected removeElement(duration: number): Promise<void>;
  setComponents(components: GeoPoint[], expr: (...points: Point[]) => T|undefined): void;
}
export class GeoPolygon extends GeoShape$<Polygon> {
  constructor($parent: Geopad, initial: GeoValue<Polygon>, vertices: GeoPoint[], sides: GeoPath[]);
  get locked(): boolean;
  redraw(p: Path): void;
  protected removeElement(duration: number): Promise<void>;
  distance(): number;
}
export type Path = Angle|Line|Circle|Arc|Polygon|Rectangle|Sector;
export type ToolName = 'move'|'point'|'line'|'circle'|'rectangle'|'perpBisector'|'angleBisector';
export type CursorName = 'default'|'crosshair'|'grab'|'pointer';
export interface Intersection {
  path1: GeoPath;
  path2: GeoPath;
  posn: Point;
  index: number;
}
export interface GeoOptions {
  classes?: string;
  animated?: number;
  target?: string;
  name?: string;
  interactive?: boolean;
}
export type GeoExpr<T> = ((s: Obj<any>) => T|undefined);
export type GeoValue<T> = T|GeoExpr<T>|undefined;
export const DEFAULT_GEO_MODEL: {
  hasGeoModel: boolean;
  pi: number;
  point: (x: number, y: number) => Point|undefined;
  angle: (a?: Point|undefined, b?: Point|undefined, c?: Point|undefined) => Angle|undefined;
  line: (p1?: Point|undefined, p2?: Point|undefined) => Line|undefined;
  ray: (p1?: Point|undefined, p2?: Point|undefined) => Ray|undefined;
  segment: (p1?: Point|undefined, p2?: Point|undefined) => Segment|undefined;
  circle: (c: Point, r: number) => Circle|undefined;
  arc: (a: Point, b: Point, c: number) => Arc|undefined;
  sector: (a: Point, b: Point, c: number) => Sector|undefined;
  polygon: (...points: Point[]) => Polygon|undefined;
  polyline: (...points: Point[]) => Polyline|undefined;
  triangle: (a: Point, b: Point, c: Point) => Triangle|undefined;
  rectangle: (p: Point, w: number, h: number) => Rectangle|undefined;
  distance: typeof Point.distance;
  round: (x: number, p?: number) => number;
  sqrt: (x: number) => number;
  floor: (x: number) => number;
  ceil: (x: number) => number;
  intersections: typeof intersections;
};
type PendingPolygon = {
  points: GeoPoint[];
  paths: GeoPath[];
};
export interface CoordinateOptions {
  showGrid?: boolean;
  showAxes?: boolean;
  proportional?: boolean;
  padding?: string;
}
export abstract class CoordinatePlane extends CustomElementView {
  $svg: SVGParentView;
  private $grid?;
  private $axes?;
  private $labels?;
  $xAxis?: SVGView;
  $yAxis?: SVGView;
  protected labelSuffix: string[];
  protected axisNames?: string[];
  protected gridSize: number[];
  private proportional;
  private padding;
  showGrid: boolean;
  showXAxis: boolean;
  showYAxis: boolean;
  showLabels: boolean;
  plotBounds: Bounds;
  viewportBounds: Bounds;
  plotOrigin: Point;
  plotToViewportMatrix: TransformMatrix;
  plotScale: number;
  setupCoordinates($svg: SVGParentView, options?: CoordinateOptions): void;
  protected resize(): void;
  protected updatePlotBounds(autoBounds?: Bounds): void;
  protected drawAxes(): void;
  private makeLabel;
  private positionElements;
  toPlotCoords(p: Point): Point;
  toViewportCoords(p: Point): Point;
}
export class CoordinateSketch extends CoordinatePlane {
  private steps;
  private $path;
  private points;
  ready(): void;
  private interpolate;
  private redraw;
  private snap;
  clear(): void;
}
export class CoordinateSystem extends CoordinatePlane {
  $plot: ElementView;
  $overlay: SVGView;
  private isAnimated;
  private crosshairGrid;
  private getCrosshairPosn;
  ready(): void;
  setPoints(points: number[], initial?: number): void;
  setSeries(...series: Point[][]): void;
  setFunctions(...fns: ((x: number) => number)[]): void;
  drawLinePlot(points: Point[]): void;
  drawPoints(points: Point[]): void;
  setupCrosshairs($svg: SVGParentView): void;
}
export class IconBtn extends CustomElementView {
  ready(): void;
}
export class Parallax extends CustomElementView {
  ready(): void;
}
export abstract class Tile {
  readonly $parent: Polypad;
  readonly type: string;
  options: string;
  colour: string;
  posn: Point;
  rot: number;
  flipped: boolean;
  size?: number;
  locked: boolean;
  value?: number;
  pending?: boolean;
  $el: SVGView;
  $body: SVGView;
  path?: GeoElement;
  transformed?: GeoElement;
  snapPoints: Point[];
  snapLines: GeoShape[];
  snapAngles: number[];
  outlinePoints: Point[];
  rotateAroundOrigin: boolean;
  showSelectionOutline: boolean;
  hideSelectionOutline: boolean;
  canDragToSelect: boolean;
  canRotate: boolean;
  isActive: boolean;
  _startPosn: Point;
  constructor($parent: Polypad, $el?: SVGView);
  protected makeHandle(type: 'v'|'h'|'c', move: (p: Point, q: Point) => void, click?: () => void): SVGView;
  setColour(colour: string): void;
  setSize(size: number): void;
  flip(_center?: Point): void;
  click(): void;
  select(): void;
  deselect(): void;
  moveStart(): void;
  move(shift?: Point, _snap?: SnapTarget): void;
  moveEnd(): void;
  transform(silent?: boolean): void;
  protected customTransform(_posn: Point, _rot: number): void;
  setTransform(posn: Point, rot?: number): void;
  static makeThumbnail(_options: string, _element: ElementView, _$parent: Polypad, _colour?: string): void;
  getSnapPoints(): Point[];
  getSnapLines(): GeoShape[];
  delete(): void;
  copy(_copyCache?: Record<string, GeoTile>): any;
  protected relativePosn(p: Point): Point;
  static action(_name: string, _selectedTiles: Set<Tile>, _selectionCenter: Point, _parent: Polypad): void;
  toJSON(): {
      name: string;
      options: string;
      x: number;
      y: number;
      rot: number;
      size: number|undefined;
      flipped: boolean;
      locked: boolean;
      colour: string;
  };
}
export class Stroke {
  private $parent;
  readonly colour: string;
  readonly brush: string;
  private $el;
  private segments;
  private path;
  snapPoints?: Point[];
  snapLines?: Line[];
  constructor($parent: Polypad, points: Point[], colour: string, brush: string);
  addPoint(posn: Point): void;
  setLine(line: Segment): void;
  makeSnapPoints(): void;
  simplify(): void;
  private draw;
  hitTest(posn: Point, maxDistance: number): boolean;
  delete(): void;
  serialize(): {
      points: string;
      colour: string;
      brush: string;
  };
  static unSerialize(data: {
      points: string;
      colour?: string;
      brush?: string;
  }, $parent: Polypad): Stroke;
}
export type Intersection$ = {
  value: Point;
  expr: string;
};
export type SnapTarget = {
  tile?: Tile;
  stroke?: Stroke;
  intersection?: Intersection$;
};
export class GeoTile extends Tile {
  readonly $parent: Polypad;
  readonly type: string;
  readonly id: string;
  readonly $el: SVGView;
  hideSelectionOutline: boolean;
  geoType?: string;
  private $shadow;
  private isProjection;
  private parentIDs;
  private expr;
  private onDraw;
  constructor(options: string, $parent: Polypad);
  setExpr(expr: string, simple?: boolean): void;
  draw(): void;
  private setParentIDs;
  get parents(): GeoTile[];
  get children(): GeoTile[];
  select(): void;
  deselect(): void;
  hover(t?: boolean): void;
  transform(): void;
  setTransform(): void;
  setColour(colour: string): void;
  copy(copyCache?: Record<string, GeoTile>): GeoTile|undefined;
  delete(): void;
  private moveStartValue?;
  private snapTarget?;
  setPending(t?: boolean): void;
  moveStart(): void;
  move(shift: Point, snap?: SnapTarget): void;
  moveEnd(): void;
  static computeIntersections($polypad: Polypad): void;
}
export class PolygonTile extends Tile {
  readonly type: string;
  path: Polygon;
  protected symmetric?: boolean;
  protected $path: SVGView;
  protected $outline: SVGView;
  constructor(shape: string, $parent: Polypad);
  static makeThumbnail(shape: string, $el: ElementView, $parent: Polypad, colour?: string): void;
  setColour(colour: string): void;
  flip(center?: Point): void;
  static action(name: string, tiles: Set<PolygonTile>, center: Point): void;
}
export class CustomPolygonTile extends PolygonTile {
  readonly type = 'custom-polygon';
  protected $handles: SVGView[];
  showSelectionOutline: boolean;
  constructor(options: string, $parent: Polypad);
  private makeVertex;
  private deleteVertex;
  private moveVertex;
  private updatePath;
  flip(center?: Point): void;
  lock(): void;
  static makeThumbnail(width: string, $el: ElementView): void;
  static action(name: string, tiles: Set<CustomPolygonTile>): void;
}
export class Pentomino extends PolygonTile {
  readonly type = 'pentomino';
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $path: SVGView): void;
}
export class Tangram extends PolygonTile {
  readonly type = 'tangram';
  readonly snapAngles: number[];
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $path: SVGView, $parent: Polypad, colour?: string): void;
  getSnapLines(): Segment[];
}
export class Penrose extends PolygonTile {
  readonly type = 'penrose';
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $el: ElementView, $parent: Polypad, colour?: string): void;
}
export class KolamTile extends PolygonTile {
  readonly type = 'kolam';
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $el: ElementView): void;
}
export class EggTangram extends PolygonTile {
  readonly type = 'egg';
  readonly snapAngles: number[];
  constructor(number: string, $parent: Polypad);
  flip(center?: Point): void;
  static makeThumbnail(number: string, $path: SVGView): void;
}
export class FractalTile extends PolygonTile {
  readonly type = 'fractal';
  constructor(size: string, $parent: Polypad);
  static makeThumbnail(size: string, $el: ElementView): void;
}
export abstract class Utensil extends Tile {
  protected readonly $handles: SVGView[];
  protected width: number;
  private absoluteEnd;
  transformed?: GeoShape;
  canRotate: boolean;
  canDragToSelect: boolean;
  constructor(width: string, $parent: Polypad);
  moveEnd(): void;
  protected update(): void;
  protected abstract setup(): void;
}
export class Ruler extends Utensil {
  type: string;
  private $glass;
  private $ticks;
  private $labels;
  path: Segment;
  protected setup(): void;
  protected update(): void;
  getSnapPoints(): Point[];
  getSnapLines(): Segment[];
}
export class Protractor extends Utensil {
  type: string;
  private $glass;
  private $ticks;
  private $labels;
  path: Arc;
  protected setup(): void;
  protected update(): void;
  getSnapPoints(): Point[];
  getSnapLines(): never[];
}
export class Compass extends Utensil {
  type: string;
  path: Circle;
  protected setup(): void;
  protected update(): void;
  getSnapPoints(): never[];
  getSnapLines(): never[];
}
export class NumberTile extends Tile {
  readonly type = 'number-tile';
  path: Polygon;
  readonly count: number;
  private width;
  private readonly $tiles;
  private readonly $outline;
  private readonly $handle?;
  constructor(options: string, $parent: Polypad);
  setWidth(width: number, silent?: boolean): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
  getSnapPoints(): Point[];
  split(): void;
  static action(name: string, tiles: Set<NumberTile>): void;
}
export class NumberBar extends PolygonTile {
  readonly type: string;
  protected $text: SVGView;
  constructor(width: string, $parent: Polypad);
  protected customTransform(): void;
  static makeThumbnail(width: string, $el: ElementView, $parent: Polypad): void;
}
export class NumberLine extends Tile {
  readonly type = 'number-line';
  private line;
  private linePoints;
  path: Rectangle;
  private readonly $labels;
  private readonly $lines;
  private readonly $fill;
  private readonly $start;
  private readonly $end;
  constructor(options: string, $parent: Polypad);
  private setDimensions;
  getSnapPoints(): Point[];
  getSnapLines(): Segment[];
  protected customTransform(): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export class PrimeDisk extends Tile {
  readonly type = 'prime-disk';
  readonly $label: SVGView;
  readonly $outline: SVGView;
  private readonly $segmentWrap;
  private readonly $segments;
  private collision?;
  private factors;
  constructor(number: string, $parent: Polypad);
  setValue(n: number): void;
  multiply(n: number): void;
  getSegment(i: number): SVGView;
  setColour(colour: string): void;
  private findNearbyTile;
  private setCollision;
  move(shift?: Point): void;
  moveEnd(): void;
  static makeThumbnail(number: string, $el: ElementView): void;
}
export class DecimalGrid extends Tile {
  readonly type = 'decimal-grid';
  path: Rectangle;
  width: number;
  height: number;
  size: number;
  private readonly $tiles;
  private readonly $outline;
  private readonly $handles;
  constructor(options: string, $parent: Polypad);
  setDimensions(width: number, height: number, size: number): void;
  private drawRect;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export class DotTile extends Tile {
  readonly type = 'dot';
  protected $path: SVGView;
  protected $outline: SVGView;
  deleted: boolean;
  cell?: DotMachineCell;
  path: Circle;
  constructor(type: string, $parent: Polypad);
  setColour(colour: string): void;
  getSnapPoints(): never[];
  private getCell;
  moveEnd(): DotMachineCell|undefined;
  static makeThumbnail(type: string, $el: ElementView): void;
  negate(): void;
  popOut(): Promise<void>;
  static action(name: string, tiles: Set<DotTile>): void;
}
type Model = {
  base: number;
  boxes: number;
};
export class DotMachine extends Tile {
  readonly type = 'dot-machine';
  readonly model: Observable<Model>;
  canRotate: boolean;
  canDragToSelect: boolean;
  cells: DotMachineCell[];
  $outline: SVGView;
  path: Rectangle;
  isAnimating: boolean;
  private readonly onMove;
  private readonly onMoveEnd;
  private readonly onChange;
  constructor(options: string, $parent: Polypad);
  delete(): void;
  select(): void;
  deselect(): void;
  private draw;
  getSnapPoints(): never[];
  setColour(colour: string): void;
  moveEnd(): void;
  private rearrangeDots;
  static makeThumbnail(options: string, $el: ElementView): void;
  static action(name: string, tiles: Set<DotMachine>): Promise<void>;
}
export class DotMachineCell {
  readonly machine: DotMachine;
  readonly index: number;
  dots: DotTile[];
  antiDots: DotTile[];
  readonly bounds: Rectangle;
  private $el;
  private $label;
  private $value;
  constructor(machine: DotMachine, index?: number);
  setBase(base: number): void;
  delete(): void;
  setColour(c: string): void;
  hover(show?: boolean): void;
  contains(p: Point): boolean;
  clear(): void;
  addDot(dot: DotTile): void;
  rearrange(): Promise<void>|undefined;
  private animatePoints;
  getDotsToExplode(): DotTile[]|undefined;
  explode(): Promise<void>;
  annihilate(): Promise<void>;
}
export class FractionBar extends Tile {
  readonly type = 'fraction-bar';
  path: Rectangle;
  private count;
  private readonly denominator;
  private readonly tileWidth;
  private $tiles;
  private $outline;
  private readonly $handle;
  constructor(options: string, $parent: Polypad);
  setCount(count: number): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
  getSnapPoints(): Point[];
  split(): void;
  static action(name: string, tiles: Set<FractionBar>): void;
}
export class FractionCircle extends Tile {
  readonly type = 'fraction-circle';
  readonly $label?: SVGView;
  protected $path: SVGView;
  protected $outline: SVGView;
  rotateAroundOrigin: boolean;
  path: Circle|Sector;
  constructor(fraction: string, $parent: Polypad);
  setColour(colour: string): void;
  static makeThumbnail(fraction: string, $el: ElementView): void;
}
export class AlgebraTile extends PolygonTile {
  readonly type = 'algebra-tile';
  protected $text: SVGView;
  private collision?;
  constructor(type: string, $parent: Polypad);
  setColour(colour?: string): void;
  protected customTransform(): void;
  private setCollision;
  move(shift?: Point): void;
  static makeThumbnail(type: string, $el: ElementView): void;
  negate(): void;
  static action(name: string, tiles: Set<AlgebraTile>): void;
}
export class Grid extends Tile {
  readonly type = 'grid';
  private dimensions;
  private readonly $handles;
  private readonly $axes;
  private readonly $fill;
  showSelectionOutline: boolean;
  path: Polygon;
  constructor(options: string, $parent: Polypad);
  setDimensions(width: number, height: number): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export class Alert extends CustomElementView {
  ready(): void;
  open(duration?: number): Promise<void>;
  close(): Promise<void>;
}
export class Balance extends Tile {
  readonly type = 'balance';
  canRotate: boolean;
  private readonly $base;
  private readonly $left;
  private readonly $right;
  private readonly $beam;
  private level;
  private left;
  private right;
  private isAnimating;
  private deleted;
  private readonly onMoveStart;
  private readonly onMoveEnd;
  private readonly onChange;
  constructor(options: string, $parent: Polypad);
  delete(): void;
  private checkTileOverlaps;
  private draw;
  private rebalance;
  customTransform(): void;
  getSnapPoints(): never[];
  getSnapLines(): Segment[];
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
  static action(name: string, tiles: Set<Balance>): Promise<void>;
}
export class AlgebraToken extends PolygonTile {
  readonly type = 'token';
  constructor(name: string, $parent: Polypad);
  static makeThumbnail(name: string, $el: ElementView): void;
}
type SimplePoint3D = {
  x: number;
  y: number;
  z: number;
};
export class Transform3D {
  translation: Point3D;
  rotation: Point3D;
  scale: Point3D;
}
export class Point3D implements SimplePoint3D {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number);
  rotate(r: SimplePoint3D): void;
  private rotateProperty;
  equals(p: SimplePoint3D): boolean;
  add(p: SimplePoint3D): this;
  multiply(p: SimplePoint3D): this;
  transform(t: Transform3D): this;
  lerp(pos: SimplePoint3D, t: number): Point3D;
}
export abstract class Object3D {
  transform: Transform3D;
  visible: boolean;
  parent?: Group3D;
  $el: SVGView;
  abstract render(): void;
  abstract get zIndex(): number;
}
export class Group3D extends Object3D {
  children: Object3D[];
  sorting: boolean;
  constructor(children: Object3D[], options?: Record<string, any>, $parent?: SVGView);
  addChild(child: Object3D): void;
  removeChild(child: Object3D): void;
  render(): void;
  get zIndex(): number;
}
export class Path3D extends Object3D {
  path: string;
  backface: boolean;
  perspective: number;
  color?: string;
  private commands;
  constructor(path: string, options?: Record<string, any>);
  private getTransformed;
  private project;
  render(): void;
  get zIndex(): number;
}
export class Shape3D extends Path3D {
  constructor(shape: GeoShape, options?: Record<string, any>);
}
export class Box3D extends Group3D {
  constructor(x?: number, y?: number, z?: number);
}
export class Cylinder3D extends Group3D {
  constructor(r?: number, h?: number, segments?: number, options?: any);
}
export class Coin extends Tile {
  readonly type: string;
  private $outline;
  private coin;
  value: number;
  private isAnimating;
  constructor(side: string, $parent: Polypad);
  setValue(n: number): void;
  setColour(c: string): void;
  roll(duration?: number): Promise<void>;
  static makeThumbnail(shape: string, $el: ElementView): void;
}
export class Dice extends Tile {
  readonly type: string;
  private $outline;
  private die;
  value: number;
  private isAnimating;
  private faces;
  constructor(options: string, $parent: Polypad);
  setColour(c: string): void;
  setValue(n: number): void;
  roll(duration?: number): Promise<void>;
  static makeThumbnail(shape: string, $el: ElementView): void;
  static action(name: string, tiles: Set<Dice|Coin>, center: Point, $parent: Polypad): Promise<void>;
}
export class Spinner extends Tile {
  readonly type: string;
  protected angle: number;
  protected sectors: number;
  private isAnimating;
  protected $sectors: ElementView;
  protected $outline: SVGView;
  private $handle;
  private $arrow;
  constructor(options: string, $parent: Polypad);
  protected setupHandles(): void;
  drawSectors(sectors: number): void;
  setColour(colour: string): void;
  setValue(angle: number): void;
  roll(duration?: number): Promise<void>;
  static makeThumbnail(shape: string, $el: ElementView): void;
}
export class CustomSpinner extends Spinner {
  readonly type: string;
  protected $handles: SVGView[];
  constructor(options: string, $parent: Polypad);
  protected setupHandles(): void;
  drawSectors(): void;
  private makeVertex;
  private deleteVertex;
  private moveVertex;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export class ImageTile extends Tile {
  readonly type: string;
  path: Rectangle;
  private readonly $image;
  private readonly $outline;
  private readonly $handle;
  private aspectRatio;
  constructor(href: string, $parent: Polypad);
  setSize(size: number): void;
}
export class TextTile extends Tile {
  readonly type: string;
  path: Rectangle;
  size: number;
  private readonly $text;
  private readonly $box;
  protected $outline: SVGView;
  private focussed;
  private timeout;
  constructor(text: string, $parent: Polypad);
  setSize(size: number): void;
  get fontSize(): number;
  static action(name: string, tiles: Set<TextTile>, center: Point, $parent: Polypad): Promise<void>;
  getSnapPoints(): never[];
  click(): void;
  updateOutline(): void;
  updateText(text: string): void;
  setColour(colour: string): void;
  focus(): void;
  blur(): void;
}
interface TileConstructor {
  new (options: string, $parent: Polypad): Tile;
  makeThumbnail: (options: string, $el: any, $parent: Polypad, colour?: string) => void;
  action: (name: string, tiles: Set<any>, center: Point, $parent: Polypad) => void;
}
export class Selection {
  private readonly $parent;
  private rect;
  private angle;
  private center;
  private startAngle;
  private startSnapPoints;
  private hasChanged;
  private $tools;
  private $rect;
  private $rotateBar;
  private $rotateCircle;
  tiles: Set<Tile>;
  constructor($parent: Polypad);
  get size(): number;
  add(tile: Tile, clear?: boolean, silent?: boolean): void;
  select(tiles: Tile[]|Set<Tile>, silent?: boolean): void;
  remove(tile: Tile, silent?: boolean): void;
  copy(): void;
  delete(): void;
  clear(): void;
  getTileProperty<T>(fn: (t: Tile) => T): T|undefined;
  update(stopIfNoChanges?: boolean): void;
  positionTools(): void;
  moveStart(): void;
  move({posn, startPosn}: MoveEvent): void;
  moveEnd(): void;
  rotateStart(): void;
  rotate(angle: number): void;
  rotateEnd(): void;
  action(type: string, name: string): void;
}
type ToolType = 'move'|'pen'|'eraser'|'text'|'geo';
type GeoToolType = 'line'|'circle'|'rect';
type PenBrushType = 'pen'|'straight'|'marker'|'highlighter';
export abstract class Tool$ {
  readonly $parent: Polypad;
  private hoveringTile?;
  constructor($parent: Polypad);
  protected getGeoTileAt(posn: Point, excludeActive?: boolean): GeoTile|undefined;
  protected getTileAt(e: TapEvent, excludeActive?: boolean): Tile|undefined;
  protected hoverGeoTile(tile?: GeoTile): void;
  down(_e: TapEvent): void;
  start(_e: TapEvent): void;
  move(_e: MoveEvent): void;
  end(_e: TapEvent): void;
  click(_e: TapEvent): void;
  hover(_e: TapEvent): void;
  cancel(): void;
}
export class MoveTool$ extends Tool$ {
  private activeTile?;
  down(e: TapEvent): void;
  start(): void;
  move(e: MoveEvent): void;
  end(): void;
  click(): void;
  hover(e: TapEvent): void;
}
export class EraserTool extends Tool$ {
  private erased;
  down({posn}: TapEvent): void;
  move({posn, lastPosn}: MoveEvent): void;
  shouldErase(posn: Point, shape: GeoElement, type: string): boolean;
  erase(posn: Point): void;
  end(): void;
}
export class TextTool extends Tool$ {
  down({posn}: TapEvent): void;
}
export class PenTool extends Tool$ {
  private stroke?;
  private utensil?;
  private startPoint?;
  brush: PenBrushType;
  private getUtensil;
  private getPoint;
  down({posn}: TapEvent): void;
  move({posn}: MoveEvent): void;
  end(): void;
}
export class GeoTool extends Tool$ {
  private startPoint?;
  private path?;
  private endSnap?;
  private createdNewStart?;
  type: GeoToolType;
  private expr;
  private snapPoint;
  private getOrMakePointTile;
  private drawPendingPoint;
  down({posn}: TapEvent): void;
  start(): void;
  move({posn}: MoveEvent): void;
  end(): void;
  click(): void;
  hover(e: TapEvent): void;
  cancel(): void;
}
type ImageUploadCallback = (file: File, image: ImageTile) => void;
type TileName =
  'number-bar' |
  'number-tile' |
  'polygon' |
  'pentomino' |
  'tangram' |
  'fraction-bar' |
  'fraction-circle' |
  'text' |
  'algebra-tile' |
  'grid' |
  'custom-polygon' |
  'image' |
  'dice' |
  'coin' |
  'number-line' |
  'penrose' |
  'kolam' |
  'prime-disk' |
  'balance' |
  'decimal-grid' |
  'spinner' |
  'custom-spinner' |
  'token' |
  'egg' |
  'geo' |
  'fractal' |
  'ruler' |
  'protractor' |
  'compass' |
  'dot-machine' |
  'dot' |
  'garden' |
  'tantrix' |
  'axes' |
  'question-blank' |
  'equation' |
  'number-card';
export class Polypad extends CustomElementView {
  tiles: Map<string, Tile>;
  strokes: Map<string, Tile>;
  events: EventManager;
  selection: Selection;
  $svg: SVGParentView;
  $tiles: ElementView;
  $activeTiles: ElementView;
  $selection: SVGView;
  $strokes: ElementView;
  $grid: ElementView;
  $textEdit: ElementView;
  $panels: ElementView;
  $geoShadows: ElementView;
  $geoPaths: ElementView;
  $geoPoints: ElementView;
  $pendingPoint: SVGView;
  penColour: string;
  gridPoints?: Point[];
  initial: any;
  intersections: Set<Intersection>;
  tools: Record<ToolType, Tool$>;
  activeTool: Tool$;
  canDelete: boolean;
  canCopy: boolean;
  canRotate: boolean;
  canUndo: boolean;
  grid: string;
  origin: Point;
  zoom: number;
  canvasBounds: Bounds;
  newTileShift: number;
  options: Observable<{
      noLabels: boolean;
      altColours: boolean;
      title: string;
      background: string;
  }>;
  private canPinchPan;
  private setup;
  private undoStack;
  private redoStack;
  private $gridMinor?;
  private $gridMajor?;
  private $gridDots?;
  ready(): void;
  private snapPoints;
  private gridPointsList;
  private snapLines;
  snap(points: Iterable<Point>, excludeActive?: boolean): {
      shift: Point;
      target: SnapTarget|undefined;
  }|undefined;
  enablePinchPan(): void;
  enableImageDrop(callback?: (file: File, image: ImageTile) => void, $btn?: ElementView): void;
  bindSettingsPanel<T>(tile: Tile, html: string, initial: T): Observable<T>;
  newImage(file: File, posn: Point, callback?: ImageUploadCallback): Promise<void>;
  newTile(type: TileName, options: string): Tile;
  setViewport(origin: Point, zoom?: number, zoomCenter?: Point): void;
  bindSource($el: ElementView, type: string, options: string, $overlay?: ElementView, colour?: string): void;
  setColour(c?: string): void;
  setGrid(options: string): undefined;
  setActiveTool(tool: ToolType): void;
  clear(resetViewport?: boolean): void;
  change(): void;
  undo(): void;
  redo(): void;
  serialize(): any;
  unSerialize(data: any, resetViewport?: boolean): void;
}
export class Factris extends CustomElementView {
  private $svg;
  private $tiles;
  private $shadow;
  private $scores;
  private interval;
  private tiles;
  private activeTiles;
  private activeSize;
  private activeFactors;
  private isDown;
  private keyLock;
  private requestQueue;
  private highscore;
  ready(): void;
  setupSVG(): void;
  drawShadow(): void;
  newRect(): void;
  reset(): void;
  toggle(): void;
  pause(): void;
  play(): void;
  getNewTileSize(): any;
  tick(): void;
  getFullRows(): any[][];
  removeRows(rows: any[][]): boolean;
  gameOver(): void;
  discharge(): void;
  keyPress(key: string, repeat?: boolean): void;
  showHighscore(): void;
  updateHighscore(): Promise<void>;
}
