import {Obj, EventTarget} from '@mathigon/core';
import {Point, Angle, Arc, Circle, Line, TransformMatrix, Polygon, Rectangle, Bounds, Segment, Ray, Sector, Polyline, Triangle, intersections} from '@mathigon/euclid';
import {CustomElementView, ElementView, SVGView, Observable, AnimationResponse, SVGParentView} from '@mathigon/boost';
import {ExprElement} from '@mathigon/hilbert';

export class Modal extends CustomElementView {
  private isOpen;
  private $iframe?;
  canClose: boolean;
  ready(): void;
  open(noAnimation?: boolean): void;
  close(keepBg?: boolean, noEvent?: boolean): void;
}

export class Gesture extends CustomElementView {
  private slide;
  private shift;
  private doAnimation;
  private $end;
  private $target;
  from?: Point;
  created(): void;
  ready(): void;
  setTarget($target: string|ElementView, slide?: Point, shift?: Point): void;
  start(slide?: Point): void;
  startSlide($from: ElementView, $to: ElementView): void;
  stop(): void;
  private runSlideAnimation;
  private runClickAnimation;
}

export class Blank extends CustomElementView implements StepComponent {
  private $target;
  private $popup;
  private solution;
  done: boolean;
  solvedBlank?: undefined;
  ready(): void;
  setup($step: Step, goal: string, userData?: UserData): void;
  solve(restore?: boolean): void;
}

export class BlankInput extends CustomElementView implements StepComponent {
  private $input;
  private $target;
  private solution;
  private solutionNum;
  private solutionDisplay;
  private range;
  private input;
  private hint;
  private attempts;
  private placeholder;
  done: boolean;
  linkedBlanks?: BlankInput[];
  solvedBlank?: BlankInput;
  goal: string;
  ready(): void;
  setup($step: Step, goal: string, userData?: UserData): void;
  get isCorrect(): boolean;
  checkAnswer(input: string): boolean;
  moveCursor(): void;
  solve(restore?: boolean): void;
  focus(): void;
  blur(): void;
}

export type EquationValidationResponse = {isCorrect?: boolean; error?: string}|undefined;

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
  onKey(e: {code?: number; key: string}): void;
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

export class Picker extends CustomElementView implements StepComponent {
  private correctCount;
  private solvedCount;
  private isSolved;
  setup($step: Step, id: string, userData?: UserData): void;
  checkSolved(): void;
}

export class Sortable extends CustomElementView implements StepComponent {
  private items;
  ready(): void;
  setup($step: Step, goal: string, userData?: UserData): void;
  solve(): void;
}

export interface HintOptions {
  class?: string;
  visible?: boolean;
  store?: boolean;
  force?: boolean;
  variables?: Obj<any>;
  timeout?: number;
  toast?: boolean;
}

export class Tutor extends CustomElementView {
  private $course;
  private $toasts;
  private $chat;
  private $chatBody;
  private $query;
  private recentMessages;
  private isOpen;
  private queuePromise;
  hints: Obj<string|string[]>;
  correct: () => string;
  incorrect: () => string;
  ready(): void;
  open(): void;
  close(): void;
  queue(content: string, kind?: string, options?: HintOptions): void;
  display(content: string, kind?: string, options?: HintOptions): void;
  showHint(msg: string, options?: HintOptions): {text: string};
  askQuestion(query: string): void;
  meanEasterEgg(): void;
}

export type UserData = {
  scores?: string[];
  data?: Record<string, any>;
};

export interface StepComponent {
  setup: ($step: Step, goal: string, initialData?: UserData) => void;
}

export class Step extends CustomElementView {
  private $course?;
  private $components;
  private $reveals;
  private $nextBtn;
  private userData;
  private narration;
  model: Observable;
  tools: {confetti: (duration?: number, maxParticles?: number) => void};
  isShown: boolean;
  isCompleted: boolean;
  goals: string[];
  scores: Set<string>;
  $blanks: (Blank|BlankInput)[];
  ready(): void;
  show(): void;
  complete(): void;
  get isReady(): boolean;
  get isPageLoaded(): boolean;
  score(goal: string, goNext?: boolean): void;
  storeData(key: string, value: any): void;
  onScore(goalList: string, callback?: () => void): Promise<void>;
  addHint(text: string, options?: HintOptions): {text: string};
  getText(id: string): string;
  getHelp(): void;
  delayedHint(callback: () => void, t?: number): void;
  get nextStep(): Step|undefined;
  groupBlanks(...indices: number[]): void;
}

export class Ticker {
  private callbacks;
  add(fn: (p: number) => void): void;
  start(time?: number): Promise<void>;
}

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
  onNextStep(obj: Obj<((equation: DisplayEquation) => void)>): void;
  onBackStep(obj: Obj<((equation: DisplayEquation) => void)>): void;
  goNext(): Promise<void>;
  goBack(): Promise<void>;
  private go;
}

export class FreeText extends CustomElementView implements StepComponent {
  setup($step: Step, id: string, userData?: UserData): void;
}

export class Gallery extends CustomElementView {
  ready(): void;
}

export class Gameplay extends CustomElementView implements StepComponent {
  private $progress;
  private $dots;
  private slideTemplate;
  private time;
  private currentAnimation?;
  private history;
  private goal;
  private $currentSlide?;
  playing: boolean;
  completed: boolean;
  slideGenerator: (el: ElementView, success: (e: any) => void, error: (e: any) => void) => void;
  ready(): void;
  setup($step: Step): void;
  private score;
  private makeSlide;
  setFirstSlide(fn: (slide: ElementView) => void): void;
  play(): void;
  pause(): void;
}

export class Gloss extends CustomElementView {
  private $target;
  private $popup;
  protected xid: string;
  ready(): void;
  show(): void;
  hide(): void;
  body(): any;
}

export class Bio extends Gloss {
  body(): string|void;
}

export class ImageView extends CustomElementView {
  ready(): void;
}

export class PlayBtn extends CustomElementView {
  private visible;
  ready(): void;
  play(): void;
  reset(): void;
}

export class PlayToggle extends CustomElementView {
  private playing;
  private $icon;
  ready(): void;
  toggle(): void;
  play(): void;
  pause(): void;
}

export class ScaleBox extends CustomElementView {
  ready(): void;
}

export class Slider extends CustomElementView implements StepComponent {
  private speed;
  private drag;
  private animation;
  steps: number;
  current: number;
  ready(): void;
  setup($step: Step, goal: string): void;
  set(x: number): void;
  play(): Promise<void>;
  moveTo(x: number, duration?: number): Promise<void>;
  protected bindVariable(model: Observable, name: string): void;
}

export class Slideshow extends CustomElementView implements StepComponent {
  private $legend;
  private $steps;
  private $dots;
  private $back;
  private $next;
  private length;
  private current;
  private locked;
  ready(): void;
  setup($step: Step, _id: string, userData?: UserData): void;
  go(x: number): void;
  goNext(): void;
  goBack(): void;
}

export class Solved extends CustomElementView {
  private visible;
  private $svg;
  private $text;
  ready(): void;
  enter(): AnimationResponse;
  exit(): AnimationResponse;
}

export class Target extends CustomElementView {
  ready(): void;
}

export class Variable extends CustomElementView implements StepComponent {
  private min;
  private max;
  private step;
  private valueChange;
  private $progress;
  value: number;
  name: string;
  ready(): void;
  setup($step: Step, goal: string): void;
  setValue(v: number): void;
}

export class Video extends CustomElementView {
  private video;
  ready(): void;
  setTime(t: number): void;
  play(): void;
  pause(): void;
}

export class Select extends CustomElementView {
  $active: ElementView;
  $options: Obj<ElementView>;
  ready(): void;
  makeActive($el: ElementView): void;
  protected bindVariable(model: Observable, name: string): void;
}

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

export class Geopad extends CoordinatePlane {
  shapes: Map<string, GeoShape<Line|Point|Circle|Arc|Polygon|Rectangle|Sector|Angle>>;
  points: Set<GeoPoint>;
  paths: Set<GeoPath>;
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
  selection?: GeoShape;
  hovering?: GeoShape;
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
  boundsRect: Rectangle;
  private toolOverride;
  ready(): void;
  switchTool(name: ToolName): void;
  setCursor(name?: CursorName): void;
  select(obj?: GeoShape<any>): void;
  deselect(): void;
  delete(): void;
  redraw(): void;
  getPointAt(posn: Point, min?: number): GeoPoint|undefined;
  getPathAt(posn: Point, min?: number): GeoPath|undefined;
  getIntersectionAt(posn: Point, min?: number): Intersection|undefined;
  getPolygonAt(posn: Point): GeoPolygon|undefined;
  updateIntersections(): void;
  updateInferredPolygons(newPath: GeoPath): void;
  drawPath(x: string|GeoValue<Path>, options?: GeoOptions): GeoPath;
  drawPoint(x: string|GeoValue<Point>, options?: GeoOptions): GeoPoint;
  animatePoint(name: string, target: Point, duration?: number): void;
  animateConstruction(name: string, duration?: number): Promise<void>;
  showGesture(from: string, to?: string): void;
  waitForPoint(): Promise<GeoPoint>;
  waitForPath<T extends Path = Path>(validate: PathDefinition, options?: WaitForPathsOptions): Promise<GeoPath<T>>;
  waitForPaths<T extends Path = Path>(paths: PathDefinition[], options?: WaitForPathsOptions): Promise<GeoPath<T>[]>;
}

export abstract class GeoShape<T extends Point|Path = Point|Path> {
  readonly $parent: Geopad;
  $el: SVGView;
  name: string;
  color: string;
  label: string;
  isPending: boolean;
  isLocked: boolean;
  components: GeoPoint[];
  dependencies: GeoShape[];
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

export class GeoPoint extends GeoShape<Point> {
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
  project(p: string|GeoShape<Path>|undefined): void;
  makeIntersection({ path1, path2, index }: Intersection): void;
  addHalo(): void;
  removeHalo(): Promise<void>;
  pulsate(): void;
}

export class GeoPath<T extends Path = Path> extends GeoShape<T> {
  constructor($parent: Geopad, initial: GeoValue<T>, name?: string, $el?: SVGView);
  get locked(): boolean;
  redraw(p: Path): void;
  distance(posn: Point): number;
  protected removeElement(duration: number): Promise<void>;
  setComponents(components: GeoPoint[], expr: (...points: Point[]) => T|undefined): void;
}

export class GeoPolygon extends GeoShape<Polygon> {
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

export type PathDefinition = string|Path|((p: Path) => boolean);

export interface WaitForPathsOptions {
  onBegin?: (path: GeoPath) => void;
  onCorrect?: (path: GeoPath, index: number) => void;
  onIncorrect?: (path: GeoPath) => void;
  onHint?: (path: GeoPath, index: number) => void;
  onComplete?: (toManyErrors: boolean) => void;
  maxErrors?: number;
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

export class Popup extends CustomElementView {
  private isOpen;
  private animation;
  private $bubble;
  ready(): void;
  toggle(): void;
  open(): void;
  close(): void;
}

export class Stroke {
  private $el;
  private $parent;
  private segments;
  private path;
  colour: string;
  constructor($parent: Polypad, points: Point[], colour?: string);
  addPoint(posn: Point): void;
  hitTest(posn: Point, maxDistance: number): boolean;
  delete(): void;
  serialize(): {points: string; colour: string};
  static unSerialize(data: {points: string; colour: string}, $parent: Polypad): void;
}

export abstract class Tile {
  readonly $parent: Polypad;
  readonly type: string;
  showSelectionOutline: boolean;
  angles: number[];
  options: string;
  $el: SVGView;
  isActive: boolean;
  colour: string;
  posn: Point;
  rot: number;
  flipped: boolean;
  protected path: Polygon|Rectangle;
  protected $body: SVGView;
  protected anchor: Point;
  protected vertices: never[];
  protected radius: number;
  constructor($parent: Polypad);
  setPosition(posn: Point, snap?: boolean): Point;
  setRotation(rot: number): void;
  setColour(colour: string): void;
  flip(_center?: Point): void;
  click(): void;
  transform(): void;
  static makeThumbnail(_options: string, _element: ElementView, _colour?: string): void;
  get outline(): Polygon;
  get points(): Point[];
  get snapPoints(): Point[];
  delete(): void;
  copy(dx?: number, dy?: number): any;
  relativePosn(p: Point): Point;
  static action(_name: string, _selectedTiles: Set<Tile>, _selectionCenter: Point): void;
  toJSON(): {name: string; options: string; x: number; y: number; rot: number; flipped: boolean; colour: string};
}

export class NumberTile extends Tile {
  readonly type = "number-tile";
  private readonly count;
  private width;
  private readonly $tiles;
  private readonly $outline;
  private readonly $handle?;
  constructor(options: string, $parent: Polypad);
  setWidth(width: number): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
  get points(): Point[];
  split(): void;
  static action(name: string, tiles: Set<NumberTile>): void;
}

export class FractionBar extends Tile {
  readonly type = "fraction-bar";
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
  get points(): Point[];
  split(): void;
  static action(name: string, tiles: Set<FractionBar>): void;
}

export class PolygonTile extends Tile {
  readonly type: string;
  protected $path: SVGView;
  protected $outline: SVGView;
  protected symmetric: boolean;
  constructor(shape: string, $parent: Polypad);
  static makeThumbnail(shape: string, $el: ElementView, colour?: string): void;
  setColour(colour: string): void;
  flip(center?: Point): void;
  static action(name: string, tiles: Set<PolygonTile>, center: Point): void;
}

export class FractionCircle extends PolygonTile {
  readonly type = "fraction-circle";
  readonly sector: Sector|Circle;
  readonly $label?: SVGView;
  constructor(fraction: string, $parent: Polypad);
  get snapPoints(): Point[];
  static makeThumbnail(fraction: string, $el: ElementView): void;
}

export class TextTile extends Tile {
  readonly type: string;
  private readonly $text;
  private readonly $box;
  protected $outline: SVGView;
  private focussed;
  private timeout;
  constructor(text: string, $parent: Polypad);
  click(): void;
  updateText(text: string): void;
  setColour(colour: string): void;
  focus(): void;
  blur(): void;
}

export class NumberBar extends PolygonTile {
  readonly type: string;
  protected $text?: SVGView;
  constructor(width: string, $parent: Polypad);
  setRotation(rot: number): void;
  static makeThumbnail(width: string, $el: ElementView): void;
}

export class Pentomino extends PolygonTile {
  readonly type = "pentomino";
  protected symmetric: boolean;
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $path: SVGView): void;
}

export class Tangram extends PolygonTile {
  readonly type = "tangram";
  readonly angles: number[];
  protected symmetric: boolean;
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $path: SVGView, colour?: string): void;
}

export class AlgebraTile extends NumberBar {
  readonly type = "algebra-tile";
  protected isNull: boolean;
  constructor(type: string, $parent: Polypad);
  setColour(colour?: string): void;
  static makeThumbnail(type: string, $el: ElementView): void;
  static checkOverlaps(allTiles: Set<AlgebraTile>): void;
  negate(): void;
  static action(name: string, tiles: Set<AlgebraTile>): void;
}

export class Grid extends Tile {
  readonly type = "grid";
  private size;
  private readonly $handles;
  private readonly $axes;
  private readonly $fill;
  showSelectionOutline: boolean;
  constructor(options: string, $parent: Polypad);
  setSize(width: number, height: number): void;
  setColour(colour: string): void;
  static makeThumbnail(options: string, $el: ElementView): void;
}

export class Penrose extends PolygonTile {
  readonly type = "penrose";
  protected symmetric: boolean;
  constructor(number: string, $parent: Polypad);
  static makeThumbnail(number: string, $el: ElementView, colour?: string): void;
}

export class Selection {
  private readonly $parent;
  private rect;
  private angle;
  private center;
  private startAngle;
  private $tools;
  private $rect;
  private $rotateBar;
  private $rotateCircle;
  tiles: Set<Tile>;
  constructor($parent: Polypad);
  get size(): number;
  add(tile: Tile, clear?: boolean): void;
  remove(tile: Tile): void;
  copy(): void;
  delete(): void;
  clear(): void;
  private getTileProperty;
  private update;
  private positionTools;
  private moveStart;
  private move;
  private rotateStart;
  private rotate;
  matchesType(type: string): boolean;
  action(type: string, name: string): void;
}

export class Protractor {
  private readonly $el;
  private readonly $parent;
  private center;
  private startAngle;
  private angle;
  private radius;
  private $bars;
  private $startLine;
  private $endLine;
  private $arc;
  private $center;
  private $start;
  private $end;
  private $label;
  show: boolean;
  constructor($el: SVGView, $parent: Polypad);
  draw(): void;
  toggle(): void;
}

export class Polypad extends CustomElementView {
  tiles: Set<Tile>;
  strokes: Set<Stroke>;
  private events;
  selection: Selection;
  protractor: Protractor;
  $svg: SVGParentView;
  $tiles: ElementView;
  $activeTiles: ElementView;
  $selection: SVGView;
  $strokes: ElementView;
  $grid: ElementView;
  $textEdit: ElementView;
  penColour: string;
  gridPoints?: Point[];
  private tools;
  private activeTool;
  canDelete: boolean;
  canCopy: boolean;
  canRotate: boolean;
  canUndo: boolean;
  grid: string;
  private setup;
  private undoStack;
  private redoStack;
  initial: any;
  ready(): void;
  newTile(type: string, options: string): any;
  selectRect(start: Point, end: Point): void;
  get tileVertices(): Point[];
  snap(...points: Point[]): Point|undefined;
  bindSource($el: ElementView, type: string, options: string, $overlay?: ElementView, colour?: string): void;
  setColour(c?: string): void;
  setGrid(options: string): undefined;
  setActiveTool(tool: 'move'|'pen'|'eraser'|'text'): void;
  toggleProtractor(): void;
  clear(): void;
  change(): void;
  undo(): void;
  redo(): void;
  serialize(): any;
  unSerialize(data: any): void;
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
  getFullRows(): Tile[][];
  removeRows(rows: Tile[][]): boolean;
  gameOver(): void;
  discharge(): void;
  keyPress(key: string, repeat?: boolean): void;
  showHighscore(): void;
  updateHighscore(): Promise<void>;
}

export class Alert extends CustomElementView {
  ready(): void;
  open(duration?: number): Promise<void>;
  close(): Promise<void>;
}

export function showAlert(key: string, duration?: number): Promise<void>|undefined;

export class Math extends CustomElementView {
  ready(): void;
}

export class Tabbox extends CustomElementView {
  private $body;
  private $titles;
  private $tabs;
  private active;
  ready(): void;
  makeActive(i: number): void;
}
