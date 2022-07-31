import {Color, EventTarget, Obj} from '@mathigon/core';
import {Angle, Arc, Bounds, Circle, GeoElement, GeoShape, intersections, Line, Point, Polygon, Polyline, Ray, Rectangle, Sector, Segment, SimplePoint, TransformMatrix, Triangle} from '@mathigon/euclid';
import {AnimationResponse, CustomElementView, ElementView, InputView, Observable, SVGParentView, SVGView} from '@mathigon/boost';
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
  handleKey(e: {
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
  cancelled?: boolean;
};
interface Callbacks {
  hover?: (e: TapEvent) => void;
  down?: (e: TapEvent) => void;
  start?: (e: TapEvent) => void;
  move?: (e: MoveEvent) => void;
  end?: (e: MoveEvent) => void;
  click?: (e: TapEvent) => void;
  checkIfActive?: () => boolean;
  blurInput?: boolean;
  cursor?: boolean;
}
export class EventManager {
  private readonly $canvas;
  private readonly defaultCallbacks;
  private readonly callbacks;
  isMoving: boolean;
  shiftKey: boolean;
  altKey: boolean;
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
export declare type GridOptions = 'none' | 'square2-grid' | 'square-dots' | 'square-grid' | 'tri-dots' | 'tri-grid' | 'tri2-dots' | 'tri2-grid';
export declare type LabelType = 'fraction' | 'percentage' | 'decimal';
export interface TileData {
  id: string;
  name: TileName;
  options: string;
  x: number;
  y: number;
  rot: number;
  size?: number;
  flipped?: boolean;
  locked?: boolean;
  fixed?: boolean;
  hidden?: boolean;
  order?: 'front' | 'back';
  colour: string;
  links?: string;
}
export interface StrokeData {
  id: string;
  brush: string;
  colour: string;
  points: string;
}
export interface PolypadData {
  key?: string;
  thumbnail?: string;
  sharing?: string;
  title?: string;
  canEdit?: boolean;
  assignment?: {
    key: string;
    thumbnail: string;
    classes: string[];
  };
  grid?: GridOptions;
  noLabels?: boolean;
  altColors?: boolean;
  mergeTiles?: boolean;
  labelType?: LabelType;
  tiles?: TileData[];
  strokes?: StrokeData[];
}
export interface ChangeRecord {
  added?: (TileData | StrokeData)[];
  changed?: TileData[][];
  deleted?: (TileData | StrokeData)[];
}
declare type ImageUploadCallback = (file: File, image: ImageTile) => Promise<void>;
export interface PolypadOptions {
  title?: string;
  altColors?: boolean;
  noLabels?: boolean;
  mergeTiles?: boolean;
  labelType: LabelType;
  advancedOptions?: boolean;
  canEditQuestions?: boolean;
  canDelete?: boolean;
  canCopy?: boolean;
  canRotate?: boolean;
  canUndo?: boolean;
  canRedo?: boolean;
  changeCount: number;
  focussed?: Tile;
  grid: GridOptions;
}
export declare type ChangeEvent = {
  action: 'undo' | 'redo' | 'change';
  data?: Record<'added' | 'changed' | 'deleted', (Tile | Stroke)[]>;
};
export declare class Polypad extends CustomElementView {
  tiles: Map<string, Tile>;
  strokes: Map<string, Stroke>;
  events: EventManager;
  selection: Selection;
  $svg: SVGParentView;
  $tiles: ElementView[];
  $selection: SVGView;
  $strokes: ElementView;
  $grid: SVGView;
  $html: ElementView;
  $panels: ElementView;
  $geoShadows: ElementView;
  $geoPaths: ElementView;
  $geoPoints: ElementView;
  $pendingPoint: SVGView;
  penColour: string;
  initial: PolypadData;
  intersections: Set<Intersection>;
  margins: number[];
  tools: {
    move: MoveTool;
    pen: PenTool;
    geo: GeoTool;
    geoPending: GeoPendingTool;
    eraser: EraserTool;
    text: TextTool;
    pan: PanTool;
    cutPolygon: CutPolygonTool;
  };
  activeTool: Tool;
  origin: Point;
  zoom: number;
  canvasBounds: Bounds;
  newTileShift: number;
  options: import('@mathigon/boost').Observable<PolypadOptions>;
  private focussed?;
  private canPinchPan;
  private isTeacher;
  private imageUploadCallback?;
  private setup;
  private undoStack;
  private redoStack;
  ready(): void;
  private focusTile;
  private snapPoints;
  private gridPoints;
  private snapLines;
  snap(points: Iterable<Point>, excludeActive?: boolean, excludeGrid?: boolean, excludeLocked?: boolean, type?: string): {
    shift: Point;
    target: SnapTarget;
  };
  getTileAt(p: Point, tileTypes: TileName[]): any;
  enablePinchPan(): void;
  enableImageDrop(callback?: ImageUploadCallback, $btn?: InputView): void;
  bindSettingsPanel<T>(tile: Tile, html: string, initial: T): import('@mathigon/boost').Observable<T>;
  enableHotkeys(): void;
  newImage(file: File, posn: Point, callback?: ImageUploadCallback): Promise<ImageTile>;
  newTile<T extends TileName>(type: T, options: string, id?: string): TileType<T>;
  setViewport(origin: Point, zoom?: number, zoomCenter?: Point): void;
  resetViewport(): void;
  bindSource($el: ElementView, type: TileName, options: string, $overlay?: ElementView, colour?: string): void;
  get center(): Point;
  setActiveTool(tool: ToolType, options?: string): void;
  clear(resetViewport?: boolean): void;
  thumbnail(width: number, height: number): Promise<string>;
  downloadImage(fileName?: string): void;
  unlockAll(): void;
  check(validate: (tiles: Tile[]) => boolean | undefined): Promise<void>;
  change(changeData: {
    added?: (Tile | Stroke)[];
    changed?: Tile[];
    deleted?: (Tile | Stroke)[];
  }): void;
  canDelete?: boolean;
  canCopy?: boolean;
  setGrid: (type: string) => void;
  undo(): void;
  redo(): void;
  private applyChange;
  serialize(maxTiles?: number, maxStrokes?: number, maxStrokeLength?: number): PolypadData;
  private unSerialize;
  load(data: PolypadData): void;
}
type SnapTarget = {tile?: Tile, stroke?: Stroke, intersection?: Intersection};
export declare class Selection {
  private readonly $parent;
  private rect;
  private angle;
  private center;
  private startAngle;
  private startSnapPoints;
  private hasChanged;
  private showTools;
  private readonly $tools;
  private readonly $shadow;
  private readonly $rect;
  private readonly $rotateBar;
  private readonly $rotateCircle;
  isMoving: boolean;
  tiles: Set<Tile>;
  implicitChanges: Set<Tile>;
  constructor($parent: Polypad);
  get size(): number;
  add(tile: Tile, clear?: boolean, silent?: boolean): void;
  select(tiles: Tile[] | Set<Tile>, silent?: boolean): void;
  remove(tile: Tile, silent?: boolean): void;
  clear(): void;
  getTileProperty<T>(fn: (t: Tile) => T): T | undefined;
  update(stopIfNoChanges?: boolean): void;
  positionTools(): void;
  moveStart(): void;
  move({posn, startPosn}: MoveEvent): void;
  moveEnd(adding?: boolean): void;
  rotateStart(): void;
  rotate(angle: number): void;
  rotateEnd(): void;
  copy(silent?: boolean, shift?: number): void;
  delete(): void;
  action(type: string, name: string): void;
  setOrder(order?: 'front' | 'back'): void;
  lock(): void;
  setFixed(fixed?: boolean): void;
  hide(): void;
}
export declare class Stroke {
  private $parent;
  readonly brush: string;
  private $el;
  private path;
  id: string;
  color: string;
  segments: Segment[];
  snapPoints?: Point[];
  snapLines?: Line[];
  constructor($parent: Polypad, points: Point[], colour: string, brush: string, id?: string);
  setColor(c: string): void;
  addPoint(posn: Point): void;
  setLine(line: Segment): void;
  makeSnapPoints(): void;
  simplify(): void;
  private draw;
  hitTest(posn: Point, maxDistance: number): boolean;
  delete(): void;
  serialize(maxLength?: number): StrokeData;
  get lastSavedData(): StrokeData;
  static unSerialize(data: StrokeData, $parent: Polypad): Stroke;
}
declare type ToolType = 'move' | 'pen' | 'eraser' | 'text' | 'pan' | 'geo' | 'geoPending' | 'cutPolygon';
declare type GeoOptions$1 = 'line' | 'circle' | 'rect';
declare type PenOptions = 'pen' | 'ruler' | 'marker' | 'highlighter';
declare type TextOptions = 'text' | 'equation';
export declare abstract class Tool$1 {
  readonly $parent: Polypad;
  private hoveringTile?;
  abstract name: ToolType;
  options?: string;
  constructor($parent: Polypad);
  protected getTileAt(e: TapEvent, excludeActive?: boolean): Tile;
  protected hoverGeoTile(tile?: GeoTile): void;
  down(_e: TapEvent): void;
  start(_e: TapEvent): void;
  move(_e: MoveEvent): void;
  end(_e: MoveEvent): void;
  click(_e: TapEvent): void;
  hover(_e: TapEvent): void;
  cancel(): void;
}
export declare class MoveTool$1 extends Tool$1 {
  private activeTile?;
  private previousSelection?;
  private clickTimeout;
  name: 'move';
  down(e: TapEvent): void;
  start(): void;
  move(e: MoveEvent): void;
  end(): void;
  click(e: TapEvent): void;
  hover(e: TapEvent): void;
}
export declare class EraserTool extends Tool$1 {
  private erased;
  name: 'eraser';
  down({posn}: TapEvent): void;
  move({posn, lastPosn}: MoveEvent): void;
  shouldErase(posn: Point, shape: GeoElement, type: string): boolean;
  erase(posn: Point): void;
  end(): void;
  click(): void;
}
export declare class TextTool extends Tool$1 {
  name: 'text';
  options: TextOptions;
  down({posn}: TapEvent): void;
}
export declare class PanTool extends Tool$1 {
  private previousTool?;
  private initialOrigin?;
  private startPosn?;
  name: 'pan';
  enable(): void;
  down(e: TapEvent): void;
  move(e: MoveEvent): void;
  end(): void;
  click(): void;
}
export declare class PenTool extends Tool$1 {
  private stroke?;
  protected utensil?: GeoShape;
  protected startPoint?: Point;
  name: ToolType;
  options: PenOptions;
  protected getUtensil(p: Point): GeoShape;
  protected getPoint(p: Point): Point;
  down({posn}: TapEvent): void;
  move({posn}: MoveEvent): void;
  click(): void;
  end(_e: MoveEvent): void;
}
export declare class GeoTool extends Tool$1 {
  protected startPoint?: GeoTile;
  protected path?: GeoTile;
  private endSnap?;
  protected createdNewStart?: boolean;
  name: ToolType;
  options: GeoOptions$1;
  private expr;
  protected snapPoint(point: Point): {
    point: Point;
    tile: GeoTile;
    expr: string;
  };
  protected getOrMakePointTile(snap: {
    tile?: GeoTile;
    point: Point;
    expr: string;
  }): GeoTile;
  protected drawPendingPoint(snap: {
    tile?: GeoTile;
    point: Point;
    expr: string;
  }): void;
  down({posn}: TapEvent): void;
  start(): void;
  move({posn}: MoveEvent): void;
  end(): void;
  click(): void;
  hover(e: TapEvent): void;
  cancel(): void;
}
export declare class GeoPendingTool extends GeoTool {
  name: 'geoPending';
  startId: string;
  expression: string;
  enable(expr: string): void;
  makePath(): GeoTile;
  down(e: TapEvent): void;
  hover({posn}: TapEvent | {
    posn: Point;
  }): void;
  cancel(): void;
}
export declare class CutPolygonTool extends PenTool {
  private tiles?;
  private $stroke?;
  private lastPoint?;
  name: 'cutPolygon';
  options: 'ruler';
  enable(): void;
  down(): void;
  start({posn}: TapEvent): void;
  move({posn}: MoveEvent): void;
  end(e: MoveEvent): void;
  click(): void;
  cancel(): void;
}
export declare class AlgebraTile extends PolygonTile {
  readonly type = 'algebra-tile';
  protected $text: SVGView;
  constructor(type: string, $parent: Polypad, id?: string);
  setColour(color?: string): void;
  protected customTransform(): void;
  setCollision(tile?: Tile): void;
  move(shift?: Point): void;
  static makeThumbnail(type: string, $el: SVGView): void;
  negate(): void;
  static action(name: string, tiles: (AlgebraTile | DotTile | NumberCard)[]): void;
}
export declare class Balance extends Tile {
  readonly type = 'balance';
  canRotate: boolean;
  canDragToSelect: boolean;
  private readonly $base;
  private readonly $left;
  private readonly $right;
  private readonly $beam;
  private level;
  private left;
  private right;
  private isAnimating;
  private readonly onMoveStart;
  private readonly onMoveEnd;
  private readonly onChange;
  constructor(options: string, $parent: Polypad, id?: string);
  delete(): void;
  private checkTileOverlaps;
  private draw;
  private rebalance;
  customTransform(): void;
  getSnapPoints(): any[];
  getSnapLines(): Segment[];
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
  static action(name: string, tiles: Balance[]): Promise<void>;
}
export declare class Grid extends Tile {
  readonly type = 'grid';
  private dimensions;
  private readonly $handles;
  private readonly $axes;
  private readonly $fill;
  showSelectionOutline: boolean;
  canDragToSelect: boolean;
  path: Polygon;
  constructor(options: string, $parent: Polypad, id?: string);
  setDimensions(width: number, height: number): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class AlgebraToken extends PolygonTile {
  readonly type = 'token';
  constructor(name: string, $parent: Polypad, id?: string);
  static makeThumbnail(name: string, $el: ElementView): void;
}
export declare class EquationTile extends Tile {
  readonly type = 'equation';
  path: Rectangle;
  focussed: boolean;
  size: number;
  private readonly $box;
  private readonly $equation;
  private readonly $textarea;
  private equation;
  private cursor;
  readonly linkTypes: TileName[];
  private creating;
  constructor(options: string, $parent: Polypad, id?: string);
  setSize(size: number): void;
  private get scale();
  select(): void;
  doubleClick(e: TapEvent): void;
  protected customTransform(): void;
  setColour(colour: string): void;
  delete(): void;
  getSnapPoints(): any[];
  focus(creating?: boolean, e?: TapEvent): void;
  blur(): void;
  private redraw;
  private moveCursor;
  private handleKey;
  format(name: string): void;
}
export declare class FractionBar extends Tile {
  readonly type = 'fraction-bar';
  path: Rectangle;
  count: number;
  denominator: number;
  dark: number;
  value: number;
  private tileWidth;
  private readonly $fraction;
  private readonly $handle;
  private readonly $dark;
  private $parts;
  constructor(options: string, $parent: Polypad, id?: string);
  setCount(count: number, dark?: number): void;
  select(): void;
  deselect(): void;
  setColour(color: string): void;
  private draw;
  protected customTransform(): void;
  static makeThumbnail(options: string, $el: ElementView, $parent: Polypad): void;
  changeDenominator(dir: 1 | -1): void;
  getSnapPoints(): any[];
  split(): FractionBar[];
  static action(name: string, tiles: FractionBar[]): void;
}
export declare class FractionCircle extends Tile {
  readonly type = 'fraction-circle';
  protected $path: SVGView;
  private $label?;
  rotateAroundOrigin: boolean;
  denominator: number;
  path: Circle | Sector;
  constructor(fraction: string, $parent: Polypad, id?: string);
  private draw;
  protected customTransform(): void;
  select(): void;
  deselect(): void;
  setColour(color: string): void;
  static makeThumbnail(fraction: string, $el: ElementView, $parent: Polypad): void;
}
export declare class GeoTile extends Tile {
  readonly $parent: Polypad;
  readonly type = 'geo';
  readonly key: string;
  readonly $el: SVGView;
  hideSelectionOutline: boolean;
  geoType?: string;
  computed?: boolean;
  private $shadow;
  private isProjection;
  private parentKeys;
  private expr;
  private deleted;
  private onDraw;
  constructor(options: string, $parent: Polypad, id?: string);
  setExpr(expr: string, simple?: boolean): void;
  draw(): void;
  private setParentKeys;
  get parents(): GeoTile[];
  get children(): GeoTile[];
  get ariaDescription(): string;
  setOrder(): void;
  select(): void;
  deselect(): void;
  hover(t?: boolean): void;
  transform(): void;
  setTransform(): void;
  setColour(colour: string): void;
  copy(copyCache?: Record<string, GeoTile>): GeoTile;
  delete(): void;
  private moveStartValue?;
  private snapTarget?;
  setPending(t?: boolean): void;
  moveStart(): void;
  move(shift: Point, snap?: SnapTarget): void;
  moveEnd(): void;
  applyChange(data: TileData): void;
  static get tiles(): IterableIterator<GeoTile>;
  static computeIntersections($polypad: Polypad): void;
  static getInferredShape(selectedTiles: Tile[]): {
    type: string;
    expr: string;
    value: GeoElement;
  };
  static construct(expr: string, source: string | undefined, $polypad: Polypad): void;
  static redrawLines(canvasRect: Rectangle): void;
  static clearModel(): void;
}
export declare class CustomPolygonTile extends PolygonTile {
  readonly type = 'custom-polygon';
  protected $handles: SVGView[];
  showSelectionOutline: boolean;
  constructor(options: string, $parent: Polypad, id?: string);
  private makeVertex;
  private deleteVertex;
  private moveVertex;
  private updatePath;
  flip(center?: Point): void;
  lock(): PolygonTile;
  static makeThumbnail(width: string, $el: ElementView): void;
  static action(name: string, tiles: CustomPolygonTile[]): void;
}
export declare class EggTangram extends PolygonTile {
  readonly type = 'egg';
  readonly snapAngles: number[];
  constructor(number: string, $parent: Polypad, id?: string);
  flip(center?: Point): void;
  static makeThumbnail(number: string, $path: SVGView): void;
}
export declare class FractalTile extends PolygonTile {
  readonly type = 'fractal';
  constructor(size: string, $parent: Polypad, id?: string);
  static makeThumbnail(size: string, $el: ElementView): void;
}
export declare class GardenTile extends PolygonTile {
  readonly type = 'garden';
  constructor(number: string, $parent: Polypad, id?: string);
  static makeThumbnail(number: string, $el: ElementView): void;
}
export declare class KolamTile extends PolygonTile {
  readonly type = 'kolam';
  constructor(number: string, $parent: Polypad, id?: string);
  static makeThumbnail(number: string, $el: ElementView): void;
}
export declare class Penrose extends PolygonTile {
  readonly type = 'penrose';
  constructor(number: string, $parent: Polypad, id?: string);
  static makeThumbnail(number: string, $el: ElementView, $parent: Polypad, colour?: string): void;
}
export declare class PentagonTile extends PolygonTile {
  readonly type = 'pentagon';
  constructor(type: string, $parent: Polypad, id?: string);
  static makeThumbnail(type: string, $el: ElementView): void;
}
export declare class Pentomino extends PolygonTile {
  readonly type = 'pentomino';
  constructor(number: string, $parent: Polypad, id?: string);
  static makeThumbnail(number: string, $path: SVGView): void;
}
export declare class PolygonTile extends Tile {
  readonly type: TileName;
  path: Polygon;
  protected symmetric?: boolean;
  protected $path: SVGView;
  constructor(shape: string, $parent: Polypad, id?: string);
  static makeThumbnail(shape: string, $el: ElementView, $parent: Polypad, colour?: string): void;
  setColour(colour: string): void;
  flip(center?: Point): void;
  static action(name: string, tiles: Tile[], center: Point): void;
}
export declare class PolyhedronTile extends Tile {
  readonly type: TileName;
  path: Polygon;
  canRotate: boolean;
  private angle;
  private rotation;
  private foldTree;
  private net;
  private serialized;
  private solid;
  private $moveBar;
  private $moveHandle;
  constructor(options: string, $parent: Polypad, id?: string);
  private updateOutline;
  private setRotation;
  private updateOptions;
  private animateHinges;
  private hinge;
  private startRotation?;
  private startAngle?;
  hingeStart(): void;
  hingeMove(angle: number): void;
  hingeEnd(): void;
  setColour(color: string): void;
  static fold(tiles: Tile[]): PolyhedronTile;
  unfold(): Promise<PolygonTile[]>;
  static action(name: string, tiles: PolyhedronTile[]): Promise<void>;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class Tangram extends PolygonTile {
  readonly type = 'tangram';
  readonly snapAngles: number[];
  constructor(number: string, $parent: Polypad, id?: string);
  static makeThumbnail(number: string, $path: SVGView, $parent: Polypad, colour?: string): void;
  getSnapLines(): any[];
}
export declare class TantrixTile extends PolygonTile {
  readonly type = 'tantrix';
  constructor(number: string, $parent: Polypad, id?: string);
  setColour(): void;
  static makeThumbnail(number: string, $el: ElementView): void;
}
export declare class ImageTile extends Tile {
  readonly type = 'image';
  path: Rectangle;
  private readonly $image;
  private readonly $handle;
  private aspectRatio;
  constructor(href: string, $parent: Polypad, id?: string);
  setHref(href: string): void;
  setSize(size: number): void;
}
declare const TileConstructors: {
  'number-bar': typeof NumberBar;
  'number-tile': typeof NumberTile;
  polygon: typeof PolygonTile;
  pentomino: typeof Pentomino;
  tangram: typeof Tangram;
  'fraction-bar': typeof FractionBar;
  'fraction-circle': typeof FractionCircle;
  text: typeof TextTile;
  'algebra-tile': typeof AlgebraTile;
  grid: typeof Grid;
  'custom-polygon': typeof CustomPolygonTile;
  image: typeof ImageTile;
  dice: typeof Dice;
  'polyhedral-dice': typeof PolyhedralDice;
  coin: typeof Coin;
  'number-line': typeof NumberLine;
  penrose: typeof Penrose;
  kolam: typeof KolamTile;
  'prime-disk': typeof PrimeDisk;
  balance: typeof Balance;
  'decimal-grid': typeof DecimalGrid;
  spinner: typeof Spinner;
  'custom-spinner': typeof CustomSpinner;
  token: typeof AlgebraToken;
  egg: typeof EggTangram;
  geo: typeof GeoTile;
  fractal: typeof FractalTile;
  ruler: typeof Ruler;
  protractor: typeof Protractor;
  compass: typeof Compass;
  'dot-machine': typeof DotMachine;
  dot: typeof DotTile;
  garden: typeof GardenTile;
  tantrix: typeof TantrixTile;
  axes: typeof CoordinateAxes;
  'question-blank': typeof BlankQuestionTile;
  equation: typeof EquationTile;
  'number-card': typeof NumberCard;
  card: typeof PlayingCard;
  abacus: typeof Abacus;
  bucket: typeof ZeroBucket;
  table: typeof TableTile;
  pentagon: typeof PentagonTile;
  domino: typeof DominoTile;
  'number-grid': typeof NumberGridTile;
  'number-frame': typeof NumberFrameTile;
  'number-dot': typeof NumberDot;
  polyhedron: typeof PolyhedronTile;
  chart: typeof ChartTile;
  'pie-chart': typeof PieChartTile;
};
export declare type TileName = keyof (typeof TileConstructors);
export declare type TileType<T extends TileName> = InstanceType<typeof TileConstructors[T]>;
export declare class Abacus extends Tile {
  readonly type = 'abacus';
  private readonly positions;
  private readonly $beads;
  private readonly $gradients;
  private readonly count;
  constructor(options: string, $parent: Polypad, id?: string);
  setupBead($bead: SVGView, i: number): void;
  setColour(colour: string): void;
  getSnapPoints(): Point[];
  static makeThumbnail(x: string, $el: ElementView): void;
}
export declare class ZeroBucket extends Tile {
  readonly type = 'bucket';
  canRotate: boolean;
  canDragToSelect: boolean;
  isAnimating: boolean;
  transformed: Polygon;
  $text: ElementView;
  tiles: (AlgebraTile | undefined)[];
  private readonly onMoveEnd;
  constructor(options: string, $parent: Polypad);
  delete(): void;
  getSnapPoints(): any[];
  private recompute;
  fill(): any[];
  static makeThumbnail(options: string, $el: ElementView): void;
  static action(name: string, tiles: ZeroBucket[]): Promise<void>;
}
export declare class DecimalGrid extends Tile {
  readonly type = 'decimal-grid';
  path: Rectangle;
  width: number;
  height: number;
  size: number;
  private readonly $tiles;
  private readonly $handles;
  constructor(options: string, $parent: Polypad, id?: string);
  setDimensions(width: number, height: number, size: number): void;
  private drawRect;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class DotMachine extends Tile {
  readonly type = 'dot-machine';
  readonly model: Observable;
  canRotate: boolean;
  canDragToSelect: boolean;
  cells: DotMachineCell[];
  path: Rectangle;
  isAnimating: boolean;
  private readonly onMove;
  private readonly onMoveEnd;
  private readonly onChange;
  constructor(options: string, $parent: Polypad, id?: string);
  delete(): void;
  select(): void;
  deselect(): void;
  private draw;
  getSnapPoints(): any[];
  setColour(colour: string): void;
  moveEnd(): void;
  private rearrangeDots;
  static makeThumbnail(options: string, $el: ElementView): void;
  static action(name: string, tiles: DotMachine[]): Promise<void>;
}
export declare class DotMachineCell {
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
  rearrange(): Promise<void>;
  private animatePoints;
  getDotsToExplode(): DotTile[];
  explode(): Promise<void>;
  annihilate(): Promise<void>;
}
export declare class DotTile extends Tile {
  readonly type = 'dot';
  protected $path: SVGView;
  deleted: boolean;
  cell?: DotMachineCell;
  path: Circle;
  constructor(type: string, $parent: Polypad, id?: string);
  setColour(colour: string): void;
  getSnapPoints(): any[];
  private getCell;
  moveEnd(): DotMachineCell;
  static makeThumbnail(type: string, $el: ElementView): void;
  negate(): void;
  popOut(): Promise<void>;
}
export declare class NumberBar extends PolygonTile {
  readonly type = 'number-bar';
  protected $text: SVGView;
  constructor(width: string, $parent: Polypad, id?: string);
  protected customTransform(): void;
  static makeThumbnail(width: string, $el: ElementView, $parent: Polypad): void;
}
export declare class NumberCard extends Tile {
  readonly type = 'number-card';
  readonly $label: SVGView;
  readonly $path: SVGView;
  value: number;
  constructor(number: string, $parent: Polypad, id?: string);
  setValue(n: number): void;
  setColour(colour?: string): void;
  highlight(show?: boolean): void;
  move(shift?: Point): void;
  collide(tile: Tile): void;
  negate(): void;
  static makeThumbnail(n: string, $el: ElementView): void;
}
export declare class NumberDot extends Tile {
  readonly type = 'number-dot';
  readonly $outline: SVGView;
  readonly $body: ElementView;
  path: Circle;
  radius: number;
  count: number;
  factors: number[];
  constructor(options: string, $parent: Polypad);
  setValue(n: number): void;
  add(n: number): void;
  private buildTile;
  private setupListeners;
  private findCollision;
  highlight(show?: boolean): void;
  move(shift?: Point): void;
  collide(tile: Tile): void;
  reorder(): void;
  shrink(): void;
  grow(): void;
  static action(name: string, tiles: NumberDot[]): Promise<void>;
  static makeThumbnail(number: string, $el: ElementView): void;
}
export declare class NumberFrameTile extends PolygonTile {
  readonly type = 'number-frame';
  constructor(options: string, $parent: Polypad, id?: string);
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class NumberGridTile extends Tile {
  readonly type = 'number-grid';
  private readonly $cells;
  private readonly cells;
  private readonly $handles;
  private gridType;
  private rows;
  private cols;
  private isFocussed;
  private selected;
  private colors;
  private colorsStr;
  $outline: SVGView;
  path: Rectangle;
  canRotate: boolean;
  constructor(options: string, $parent: Polypad, id?: string);
  private resize;
  private makeCell;
  private updateCells;
  private updateColors;
  setColour(color: string, source?: 'theme' | 'picker'): void;
  doubleClick(e: TapEvent): void;
  private selectCell;
  private addToSelection;
  private removeFromSelection;
  private getCellValue;
  blur(): void;
  flip(): void;
  selectMultiples(): void;
  static action(name: string, tiles: NumberGridTile[]): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class NumberTile extends Tile {
  readonly type = 'number-tile';
  path: Polygon;
  readonly count: number;
  private width;
  private readonly $tiles;
  private readonly $handle?;
  constructor(options: string, $parent: Polypad, id?: string);
  setWidth(width: number, silent?: boolean): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
  getSnapPoints(): Point[];
  split(): NumberTile[];
  static action(name: string, tiles: NumberTile[]): void;
}
export declare class PrimeDisk extends Tile {
  readonly type = 'prime-disk';
  readonly $label: SVGView;
  private readonly $segmentWrap;
  private readonly $segments;
  private factors;
  constructor(number: string, $parent: Polypad, id?: string);
  setValue(n: number): void;
  multiply(n: number): void;
  getSegment(i: number): SVGView;
  setColour(colour: string): void;
  highlight(show?: boolean): void;
  move(shift?: Point): void;
  collide(tile: Tile): void;
  static makeThumbnail(number: string, $el: ElementView): void;
}
export declare class PlayingCard extends Tile {
  readonly type = 'card';
  readonly $path: SVGView;
  readonly $body: SVGView;
  private readonly $stack;
  private readonly $label;
  private readonly $labelRect;
  private readonly $labelText;
  private top?;
  path: Rectangle;
  count: number;
  constructor(options: string, $parent: Polypad, id?: string);
  setOptions(options: string): void;
  setColour(colour?: string): void;
  addCards(options: string): void;
  highlight(show?: boolean): void;
  move(shift?: Point): void;
  collide(tile: Tile): void;
  doubleClick(): void;
  flip(): void;
  draw(): PlayingCard;
  shuffle(): void;
  static action(name: string, tiles: PlayingCard[]): Promise<void>;
  static makeThumbnail(n: string, $el: ElementView): void;
}
export declare class Coin extends Tile {
  readonly type = 'coin';
  private coin;
  value: number;
  private isAnimating;
  constructor(side: string, $parent: Polypad, id?: string);
  setValue(n: number): void;
  setColour(c: string): void;
  roll(duration?: number): Promise<void>;
  doubleClick(): void;
  static makeThumbnail(shape: string, $el: ElementView): void;
}
export declare class CustomSpinner extends Spinner {
  readonly type = 'custom-spinner';
  protected $handles: SVGView[];
  constructor(options: string, $parent: Polypad, id?: string);
  protected setupHandles(): void;
  drawSectors(): void;
  private makeVertex;
  private deleteVertex;
  private moveVertex;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class Dice extends Tile {
  readonly type = 'dice';
  private die;
  value: number;
  private isAnimating;
  private faces;
  constructor(options: string, $parent: Polypad, id?: string);
  setColour(c: string): void;
  setValue(n: number): void;
  roll(duration?: number): Promise<void>;
  static makeThumbnail(shape: string, $el: ElementView): void;
  doubleClick(): void;
  static action(name: string, tiles: (Dice | Coin | Spinner | PolyhedralDice)[]): Promise<void>;
}
export declare class DominoTile extends Tile {
  readonly type = 'domino';
  private $mainShape;
  path: Rectangle;
  constructor(options: string, $parent: Polypad, id?: string);
  getSnapPoints(): Point[];
  setColour(c: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class PolyhedralDice extends Tile {
  readonly type = 'polyhedral-dice';
  value: number;
  private faceCount;
  private faces;
  private die;
  private rotationOptions;
  private definition;
  private isAnimating;
  constructor(options: string, $parent: Polypad, id?: string);
  setColour(c: string): void;
  setValue(n: number): void;
  roll(duration?: number): Promise<void>;
  doubleClick(): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class Spinner extends Tile {
  readonly type: TileName;
  protected angle: number;
  protected sectors: number | string;
  private isAnimating;
  protected $sectors: ElementView;
  private $handle;
  private $arrow;
  constructor(options: string, $parent: Polypad, id?: string);
  protected setupHandles(): void;
  drawSectors(sectors: number): void;
  setColour(colour: string): void;
  setValue(angle: number): void;
  roll(duration?: number): Promise<void>;
  doubleClick(): void;
  static makeThumbnail(shape: string, $el: ElementView): void;
}
export declare class ChartTile extends ChartBaseTile {
  type: 'chart';
  path: Rectangle;
  colour: string;
  private tables;
  private categories;
  private series;
  private readonly $background;
  private readonly $axes;
  private readonly $labels;
  private readonly $handle;
  private readonly $foreground;
  private $focussedLine?;
  private $focussedOutline?;
  private bounds;
  private readonly $rects;
  private readonly $areas;
  private readonly $lines;
  private readonly $points;
  constructor(options: string, $parent: Polypad, id?: string);
  private reconcileSeries;
  link(link: Link): void;
  unlink(link: Link): void;
  protected updateOutline(width?: number, height?: number): void;
  private getX;
  private getY;
  protected drawChart(type?: ChartType, layout?: ChartLayout): void;
  private drawAxes;
  private drawColumnChart;
  private drawRowChart;
  private drawRect;
  private drawLines;
  private drawPoints;
  private drawAreas;
  setColour(color: string, source?: 'theme' | 'picker'): void;
  protected colorSeries(color: string, index: number): void;
  protected focusSeries(index: number): void;
  blur(): void;
  static action(name: string, tiles: ChartTile[]): Promise<void>;
}
export declare class PieChartTile extends ChartBaseTile {
  type: 'pie-chart';
  path: Circle;
  private currentLink?;
  private series;
  private $sectors;
  private $handle;
  private $donutHole?;
  private $focussedOutline;
  constructor(options: string, $parent: Polypad, id?: string);
  link(link: Link): void;
  unlink(link: Link): void;
  protected updateOutline(radius?: number): void;
  protected drawChart(type?: ChartType, radius?: number): void;
  protected colorSeries(color: string, index: number): void;
  protected focusSeries(index: number): void;
  blur(): void;
  static action(name: string, tiles: PieChartTile[]): Promise<void>;
}
export declare type ChartType = 'line' | 'area' | 'column' | 'row' | 'pie' | 'donut';
export declare type ChartLayout = 'grouped' | 'stacked' | 'percentage';
export interface ChartOptions {
  type?: ChartType;
  layout?: ChartLayout;
  width?: number;
  height?: number;
  colours?: string[];
}
export declare abstract class ChartBaseTile extends Tile {
  protected $series: SVGView;
  protected focussedSeries: number;
  readonly chartOptions: Observable<ChartOptions>;
  private chartColors;
  protected default: boolean;
  constructor(options: string, $parent: Polypad, id?: string);
  setColour(color: string, source?: 'theme' | 'picker'): void;
  protected getSeriesColor(index: number): string;
  protected abstract colorSeries(color: string, index: number): void;
  protected abstract focusSeries(index: number): void;
  doubleClick(e: TapEvent): void;
  protected focusOnSeries(e: TapEvent): void;
  blur(): void;
}
export declare class TextTile extends Tile {
  readonly type = 'text';
  path: Rectangle;
  size: number;
  private readonly $foreignObject;
  private readonly $text;
  private readonly $box;
  private focussed;
  private creating;
  constructor(text: string, $parent: Polypad, id?: string);
  setSize(size: number): void;
  setColour(colour: string): void;
  getSnapPoints(): any[];
  private updateOutline;
  selectAll(): void;
  static action(name: string, tiles: TextTile[]): Promise<void>;
  format(command: string): void;
  get selection(): Selection;
  private formatFont;
  private formatRange;
  private removeEmptyTextNodes;
  private wrapChildrenInSpans;
  private updateRangeChildren;
  private allChildrenHaveStyle;
  private unsetChildrenStyles;
  private setChildrenStyles;
  private clearChildrenStyles;
  private cleanupElements;
  doubleClick(): void;
  focus(creating?: boolean): void;
  blur(): void;
}
export declare class Link {
  readonly source: Tile;
  target?: Tile;
  $line: SVGView;
  $handle: SVGView;
  constructor(source: Tile, target?: Tile);
  redraw(posn?: Point): void;
  change(): void;
  delete(): void;
  link(target?: Tile, posn?: Point, highlight?: boolean): void;
  static serialize(tile: Tile): string;
  static restore(tile: Tile, data?: string): void;
}
export declare abstract class Tile {
  readonly $parent: Polypad;
  abstract readonly type: TileName;
  readonly $el: SVGView;
  readonly id: string;
  $outline?: SVGView;
  options: string;
  colour: string;
  posn: Point;
  rot: number;
  flipped?: boolean;
  order?: 'front' | 'back';
  size?: number;
  locked?: boolean;
  fixed?: boolean;
  hidden?: boolean;
  value?: number;
  pending?: boolean;
  isActive?: boolean;
  links?: Set<Link>;
  linkSources?: Set<Link>;
  readonly linkTypes?: TileName[];
  path?: GeoElement;
  transformed?: GeoElement;
  snapPoints: Point[];
  snapLines: GeoShape[];
  snapAngles: number[];
  outlinePoints: Point[];
  private startPosn?;
  private watchCallbacks?;
  protected collision?: Tile;
  lastSavedData: TileData;
  rotateAroundOrigin?: boolean;
  showSelectionOutline?: boolean;
  hideSelectionOutline?: boolean;
  canDragToSelect: boolean;
  canRotate: boolean;
  canMove: boolean;
  constructor($parent: Polypad, id?: string, $el?: SVGView);
  protected makeHandle(type: 'v' | 'h' | 'c', move: (p: Point, q: Point) => void, click?: () => void): SVGView;
  is<T extends TileName>(type: T): this is TileType<T>;
  protected makeLink(): void;
  link(link: Link): void;
  unlink(link: Link): void;
  setColour(colour: string, _source?: 'theme' | 'picker'): void;
  setSize(size: number): void;
  setOrder(order?: 'front' | 'back'): void;
  lock(locked?: boolean): void;
  hide(hidden?: boolean): void;
  flip(_center?: Point): void;
  click(_e: TapEvent): void;
  doubleClick(_e: TapEvent): void;
  format(_command: string): void;
  blur(): void;
  get $container(): ElementView;
  select(): void;
  deselect(): void;
  protected watch(callback: (fn: PolypadOptions) => void): void;
  moveStart(): void;
  move(shift?: Point, _snap?: SnapTarget): void;
  moveEnd(): void;
  highlight(_show?: boolean): void;
  protected findNearby<T extends TileName>(type: T, maxDistance: number, posn?: Point): TileType<T> | undefined;
  protected setCollision(tile?: Tile): void;
  protected collide(_tile: Tile): void;
  transform(silent?: boolean): void;
  protected customTransform(_posn: Point, _rot: number): void;
  setTransform(posn: Point, rot?: number): void;
  animateTo(to: Point, from?: Point, duration?: number): Promise<void>;
  static makeThumbnail(_options: string, _element: ElementView, _$parent: Polypad, _colour?: string): void;
  getSnapPoints(): Point[];
  getSnapLines(): GeoShape[];
  delete(): void;
  copy(_copyCache?: Record<string, GeoTile>, shift?: number): any;
  relativePosn(p: Point): Point;
  get center(): Point;
  get ariaDescription(): string;
  static action(_name: string, _selectedTiles: Tile[], _selectionCenter: Point): void;
  applyChange(data: TileData): void;
  serialize(): TileData;
  static unSerialize(data: TileData, $parent: Polypad, resetID?: boolean): Tile;
}
export declare class CoordinateAxes extends Tile {
  readonly type = 'axes';
  canRotate: boolean;
  canDragToSelect: boolean;
  path: Rectangle;
  functions: Map<EquationTile, SVGView>;
  private readonly model;
  private readonly $fill;
  private readonly $axes;
  private readonly $grid;
  private readonly $content;
  private readonly $labels;
  private readonly $handles;
  constructor(options: string, $parent: Polypad, id?: string);
  highlight(show?: boolean): void;
  private setSizes;
  private step;
  link(link: Link): void;
  unlink(link: Link): void;
  draw(expr: string, $path: SVGView): Promise<void>;
  getSnapPoints(): any[];
  getSnapLines(): Segment[];
  setColour(color: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class NumberLine extends Tile {
  readonly type = 'number-line';
  private line;
  private linePoints;
  path: Rectangle;
  private readonly $labels;
  private readonly $lines;
  private readonly $fill;
  private readonly $start;
  private readonly $end;
  constructor(options: string, $parent: Polypad, id?: string);
  private setDimensions;
  getSnapPoints(): Point[];
  getSnapLines(): Segment[];
  protected customTransform(): void;
  setColour(color: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare class BlankQuestionTile extends Tile {
  readonly type = 'question-blank';
  path: Rectangle;
  size: number;
  canRotate: boolean;
  private solution;
  private submitted;
  private attempts;
  private correct;
  private readonly $text;
  private readonly $box;
  private readonly $handle?;
  private readonly $input;
  private readonly mark;
  private focussed;
  constructor(options: string, $parent: Polypad, id?: string);
  setSize(size: number): void;
  delete(): void;
  get text(): string;
  click(): void;
  blur(): void;
  isCorrect(): boolean;
  checkAnswer(animated?: boolean): void;
  static gradeWorksheet($polypad: Polypad): void;
  static makeThumbnail(shape: string, $el: ElementView): void;
}
export declare class TableTile extends Tile {
  readonly type = 'table';
  path: Rectangle;
  size: number;
  private readonly $foreignObject;
  private readonly $table;
  private readonly $handles;
  private readonly $cells;
  private readonly $hidden;
  private $selectionOutline;
  private focussed;
  private timeout;
  private initialOptions?;
  private rows;
  private cols;
  private data;
  private columnWidths;
  private selection;
  visibleData: string[][];
  readonly linkTypes: TileName[];
  constructor(options: string, $parent: Polypad, id?: string);
  select(): void;
  setColour(colour: string): void;
  private updateOutline;
  private initializeData;
  private updateCols;
  private updateRows;
  private resizeColumns;
  private makeCell;
  private cellPosn;
  private buildTable;
  private paste;
  private moveLeft;
  private moveRight;
  private moveUp;
  private moveDown;
  click(e: TapEvent): void;
  focus(): void;
  private findCellAt;
  private focusCell;
  blur(): void;
  private updateData;
  private findSelection;
  private updateSelection;
  private drawSelection;
  private getSelectionContents;
  private removeSelectionContents;
  static makeThumbnail(options: string, $el: ElementView): void;
}
export declare abstract class Utensil extends Tile {
  protected readonly $handles: SVGView[];
  protected width: number;
  private absoluteEnd;
  transformed?: GeoShape;
  canRotate: boolean;
  canDragToSelect: boolean;
  constructor(width: string, $parent: Polypad, id?: string);
  flip(): void;
  moveEnd(): void;
  protected update(): void;
  protected abstract setup(): void;
}
export declare class Ruler extends Utensil {
  readonly type = 'ruler';
  private $glass;
  private $ticks;
  private $labels;
  path: Segment;
  protected setup(): void;
  protected update(): void;
  getSnapPoints(): Point[];
  getSnapLines(): Segment[];
  static action(name: string, tiles: Utensil[]): void;
}
export declare class Protractor extends Utensil {
  readonly type = 'protractor';
  private $glass;
  private $ticks;
  private $labels;
  path: Arc;
  protected setup(): void;
  protected update(): void;
  getSnapPoints(): Point[];
  getSnapLines(): any[];
}
export declare class Compass extends Utensil {
  readonly type = 'compass';
  path: Circle;
  protected setup(): void;
  protected update(): void;
  getSnapPoints(): any[];
  getSnapLines(): any[];
}
export declare type RenderOptions3D = {
  fov: number | false;
  hideBackface?: boolean;
};
export declare abstract class Object3D {
  transform: Transform3D;
  visible: boolean;
  parent?: Group3D;
  $el: SVGView;
  abstract render(options?: RenderOptions3D): void;
  abstract get zIndex(): number;
  getTransformed(p: Point3D): Point3D;
  get normal(): Point3D;
  project(v: Point3D, options?: RenderOptions3D): Point;
  getProjectedVertices(options?: RenderOptions3D): Iterable<Point>;
  abstract getFaces(): Iterable<Path3D>;
  abstract getVertices(): Iterable<Point3D>;
}
export declare class Group3D extends Object3D {
  children: Object3D[];
  sorting: boolean;
  constructor(children: Object3D[], options?: Record<string, any>, $parent?: SVGView);
  addChild(child: Object3D): Object3D;
  removeChild(child: Object3D): void;
  render(options?: RenderOptions3D): void;
  getFaces(): Generator<any, void, unknown>;
  getVertices(): Generator<any, void, unknown>;
  get zIndex(): number;
}
export declare class Path3D extends Object3D {
  shape: GeoShape | string;
  color?: string;
  readonly centroid: Point3D;
  private commands;
  constructor(shape: GeoShape | string, options?: Record<string, any>, color?: string);
  render(options?: RenderOptions3D): void;
  get zIndex(): number;
  getFaces(): Generator<this, void, unknown>;
  getVertices(): Generator<Point3D, void, unknown>;
}
export declare type SimplePoint3D = {
  x: number;
  y: number;
  z: number;
};
export declare type Rotation = [number, number, number];
export declare class Point3D implements SimplePoint3D {
  x: number;
  y: number;
  z: number;
  constructor(x?: number, y?: number, z?: number);
  transform(transform: Transform3D | number[][]): Point3D;
  equals(p: Point3D): boolean;
  fixFloat(): Point3D;
  add(p: Point3D): this;
  multiply(p: Point3D): this;
  lerp(pos: Point3D, t: number): Point3D;
  scale(scalar: number): Point3D;
  get magnitude(): number;
  get normalize(): Point3D;
  get asArray(): number[];
  get inverse(): Point3D;
  get xy(): Point;
  [Symbol.iterator](): IterableIterator<number>;
  static get zero(): Point3D;
  static get oneZ(): Point3D;
  static get one(): Point3D;
  static all(value: number): Point3D;
  static from2D(p: SimplePoint): Point3D;
  static average(points: Point3D[]): Point3D;
  static dot(a: SimplePoint3D, b: SimplePoint3D): number;
  static cross(a: SimplePoint3D, b: SimplePoint3D): Point3D;
}
export declare const Matrix3D: {
  translate({x, y, z}: SimplePoint3D): number[][];
  rotateX(angle: number): number[][];
  rotateY(angle: number): number[][];
  rotateZ(angle: number): number[][];
  rotateAxis({x, y, z}: SimplePoint3D, angle: number): number[][];
  fromEulerAngles(x: number, y: number, z: number): number[][];
  scale({x, y, z}: SimplePoint3D): number[][];
  scaleAll(by: number): number[][];
  perspective(fov: number, aspectRatio: number, near: number, far: number): number[][];
  transformPoint(matrix: number[][], point: Point3D | Point): Point3D;
};
export declare class Transform3D {
  matrix: number[][];
  clear(): this;
  translate(x?: number, y?: number, z?: number): this;
  rotate(x?: number, y?: number, z?: number): this;
  scale(p: SimplePoint3D): this;
  dragToRotate(from: Point, to: Point, r?: number): this;
  isRotationMatrix(): boolean;
  toEulerAngles(): Rotation;
}
export interface NetFace {
  shape: Polygon;
  color?: string;
  children?: NetFace[];
  dihedral?: number;
  parentEdge?: number;
  myEdge?: number;
  rot?: number;
}
export declare class Accordion extends CustomElementView {
  private active;
  storage: string;
  ready(): void;
}
export declare class ColorPicker extends CustomElementView {
  private $activeSwatch?;
  private sliders;
  private swatches;
  private $inputs;
  color: Color;
  lastCommittedColor?: Color;
  ready(): void;
  private commit;
  private get inputColor();
  setColor(c: string | Color, fromSlider?: boolean, noTrigger?: boolean): void;
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
