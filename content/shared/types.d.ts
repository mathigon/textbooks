import {Obj, EventTarget} from '@mathigon/core';
import {Point, Angle, Arc, Circle, Line, TransformMatrix, Polygon, Rectangle, Bounds, Segment, Ray, Sector, Polyline, Triangle, intersections} from '@mathigon/fermat';
import {CustomElementView, ElementView, SVGView, Observable, AnimationResponse, SVGParentView} from '@mathigon/boost';
import {ExprElement} from '@mathigon/hilbert';


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

export class Blank extends CustomElementView {
  private $target;
  private solution;
  done: boolean;
  ready(): void;
  solve(restore?: boolean): void;
}

export class BlankInput extends CustomElementView {
  private $input;
  private $target;
  private solution;
  private solutionNum;
  private range;
  private input;
  private attempts;
  private placeholder;
  done: boolean;
  ready(): void;
  get isCorrect(): boolean;
  moveCursor(): void;
  solve(restore?: boolean): void;
  focus(): void;
  blur(): void;
}

export type EquationValidationResponse = {isCorrect?: boolean; error?: string}|undefined;

export class Equation extends CustomElementView {
  $math: ElementView;
  private $textarea;
  private $cursor;
  private $error;
  private $step?;
  private numeric?;
  private vars;
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
  validate?: ((expr: ExprElement) => EquationValidationResponse);
  ready(): void;
  focus(): void;
  onPointerdown(e: PointerEvent): void;
  onKey(e: {code?: number; key: string}): void;
  onBlur(): void;
  check(): string|void;
  complete(expr: ExprElement): void;
  solve(): void;
}

export class EquationSystem extends CustomElementView {
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
  setupEquation($equation: Equation): void;
  onSolveRow(expr: ExprElement): void;
  solve(): void;
}

export class Picker extends CustomElementView {
  private $items;
  private itemsClicked;
  private correctCount;
  private solvedCount;
  private isSolved;
  ready(): void;
  restore(scores: string[]): void;
  checkSolved(): void;
}

export class Sortable extends CustomElementView {
  private items;
  ready(): void;
  solve(): void;
}

export interface HintOptions {
  class?: string;
  visible?: boolean;
  store?: boolean;
  force?: boolean;
  variables?: Obj<string>;
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

export class Step extends CustomElementView {
  private $course?;
  model: Observable;
  tools: {confetti: (duration?: number, maxParticles?: number) => void};
  initialData?: {scores: string[]; data: Obj<any>};
  isShown: boolean;
  isCompleted: boolean;
  goals: string[];
  scores: Set<string>;
  $blanks: (Blank|BlankInput)[];
  $equations: (Equation|EquationSystem)[];
  $reveals: ElementView[];
  $nextBtn: ElementView[];
  $picker?: Picker;
  $sortables: Sortable[];
  ready(): void;
  show(): void;
  complete(): void;
  restore(userData: any): void;
  get isReady(): boolean;
  get isPageLoaded(): boolean;
  score(goal: string, goNext?: boolean): void;
  storeData(key: string, value: any): void;
  onScore(goalList: string, callback?: () => void): Promise<void>;
  addHint(text: string, options?: HintOptions): {text: string};
  getText(id: string): string;
  getHelp(): void;
  delayedHint(callback: () => void, t?: number): void;
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
  width: number;
  height: number;
  baseline: number;
  transform: {x: number; y: number; scale: number};
  private currentDimensions;
  private currentWorldTransform;
  constructor(type: string, children: DisplayNode[], equation: DisplayEquation, $element?: SVGView|undefined);
  expr: string;
  log: string;
  color: string;
  static create(el: Element, equation: DisplayEquation): DisplayNode;
  marginLeft: number;
  marginRight: number;
  setTransform(x?: number, y?: number, scale?: number): void;
  worldTransform: {x: number; y: number; scale: number};
  next: DisplayNode|undefined;
  prev: DisplayNode|undefined;
  addChildren(children: DisplayNode[], index?: number): void;
  insertAfter(newNodes: DisplayNode[]): void;
  insertBefore(newNodes: DisplayNode[]): void;
  detach(): void;
  deleteFromDom(): void;
  hasParent(type: string): boolean;
  measure(): void;
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
  expr: string;
  measure(): void;
}

export class DisplayEquation extends EventTarget {
  readonly $row: SVGView;
  readonly fontSize: number;
  readonly isDisplay: boolean;
  root: DisplayNodeRow;
  isReady: boolean;
  readonly deletedNodes: Set<DisplayNode>;
  private desc;
  constructor($row: SVGView, dx?: number, align?: string, fontSize?: number, isDisplay?: boolean);
  setValue(expr: string|Element[]): void;
  private updateDescription;
  resize(): void;
  private parse;
  private find;
  animate(): Promise<void>;
  addTermAfter(expr: string, search?: string): void;
  addTermBefore(expr: string, search?: string): void;
  deleteTerm(expr: string): void;
  replaceTerm(search: string, expr: string): void;
  moveTermAfter(expr: string, search?: string): void;
  moveTermBefore(expr: string, search?: string): void;
  moveTermToStart(expr: string): void;
  wrapTerms(expr: string, ...searchTerms: string[]): void;
  unwrapTerm(search: string, levels?: number): void;
  leftSide: DisplayNode[];
  rightSide: DisplayNode[];
}

export class AlgebraFlow extends CustomElementView {
  private $svg;
  private $lastRow;
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
  newRow(): Promise<void>;
  hideLastRow(): Promise<void>;
  onNextStep(obj: Obj<((equation: DisplayEquation) => void)>): void;
  onBackStep(obj: Obj<((equation: DisplayEquation) => void)>): void;
  goNext(): Promise<void>;
  goBack(): Promise<void>;
  private go;
}

type Callback = (e: any) => void;

export class Gameplay extends CustomElementView {
  private $progress;
  private $dots;
  private slideTemplate;
  private time;
  private currentAnimation;
  private history;
  private goal;
  private $currentSlide;
  playing: boolean;
  completed: boolean;
  slideGenerator: (el: ElementView, success: Callback, error: Callback) => void;
  ready(): void;
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

export class Slider extends CustomElementView {
  private speed;
  private playing;
  private drag;
  steps: number;
  current: number;
  ready(): void;
  play(): void;
  set(x: number): void;
  moveTo(x: number, t?: number): Promise<void>;
}

export class Slideshow extends CustomElementView {
  private $legend;
  private $steps;
  private $dots;
  private $back;
  private $next;
  private length;
  private current;
  private locked;
  ready(): void;
  go(x: number): void;
  goNext(): void;
  goBack(): void;
}

export class Solved extends CustomElementView {
  private visible;
  private $svg;
  private $text;
  private $step;
  ready(): void;
  enter(): AnimationResponse;
  exit(): AnimationResponse;
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
  ready(): void;
  makeActive($tool: ElementView): void;
}

export const DEFAULT_GEO_MODEL: {
  pi: number;
  point: (x: number, y: number) => Point;
  angle: (a: Point, b: Point, c: Point) => Angle;
  line: (p1: Point, p2: Point) => Line;
  ray: (p1: Point, p2: Point) => Ray;
  segment: (p1: Point, p2: Point) => Segment;
  circle: (c: Point, r: number) => Circle;
  arc: (a: Point, b: Point, c: number) => Arc;
  sector: (a: Point, b: Point, c: number) => Sector;
  polygon: (...points: Point[]) => Polygon;
  polyline: (...points: Point[]) => Polyline;
  triangle: (a: Point, b: Point, c: Point) => Triangle;
  rectangle: (p: Point, w: number, h: number) => Rectangle;
  distance: typeof Point.distance;
  round: (x: number, p?: number) => number;
  sqrt: (x: number) => number;
  intersections: typeof intersections;
};

export abstract class CoordinatePlane extends CustomElementView {
  private $grid?;
  private $axes?;
  private $labels?;
  $xAxis?: SVGView;
  $yAxis?: SVGView;
  protected labelSuffix: string[];
  protected axisNames: string[];
  protected gridSize: number[];
  showGrid: boolean;
  showAxes: boolean;
  showLabels: boolean;
  plotBounds: Bounds;
  viewportBounds: Bounds;
  plotOrigin: Point;
  plotToViewportMatrix: TransformMatrix;
  plotScale: number;
  setupCoordinates($svg: SVGParentView, options: {showGrid?: boolean|undefined; showAxes?: boolean|undefined; padding?: string|undefined}): void;
  protected updatePlotBounds(autoBounds?: Bounds): void;
  protected drawAxes(): void;
  toPlotCoords(p: Point): Point;
  toViewportCoords(p: Point): Point;
}

export class Geopad extends CoordinatePlane {
  shapes: Map<string, GeoShape<Point|Line|Rectangle|Angle|Arc|Circle|Polygon>>;
  points: Set<GeoPoint>;
  paths: Set<GeoPath<Path>>;
  snapToGrid: number;
  canSelect: boolean;
  canIntersect: boolean;
  locked: boolean;
  hidePoints: boolean;
  selection?: GeoShape;
  hovering?: GeoShape;
  private cursor;
  $svg: SVGParentView;
  $paths: ElementView;
  $pulses: ElementView;
  $points: ElementView;
  $objLabels: ElementView;
  $pendingPoint: SVGView;
  private $compass?;
  private $ruler?;
  private $gesture?;
  model: Observable<typeof DEFAULT_GEO_MODEL&Obj<any>>;
  private events;
  $tools: Select;
  boundsRect: Rectangle;
  ready(): void;
  switchTool(name: ToolName): void;
  setCursor(name?: CursorName): void;
  select(obj?: GeoShape<any>): void;
  deselect(): void;
  delete(): void;
  getPointAt(posn: Point, d?: number): GeoPoint|undefined;
  getPathAt(posn: Point, d?: number): GeoPath<Path>|undefined;
  getIntersectionAt(posn: Point, d?: number): Intersection|undefined;
  drawPath(x: string|GeoValue<Path>, options?: GeoOptions): GeoPath<Path>;
  drawPoint(x: string|GeoValue<Point>, options?: GeoOptions): GeoPoint;
  animatePoint(name: string, target: Point, duration?: number): void;
  animateConstruction(name: string, duration?: number): Promise<void>;
  showGesture(from: string, to?: string): void;
  waitForPoint(): Promise<GeoPoint>
  waitForPath<T extends Path = Path>(validate: PathDefinition, options?: WaitForPathsOptions): Promise<GeoPath<T>>;
  waitForPaths<T extends Path = Path>(paths: PathDefinition[], options?: WaitForPathsOptions): Promise<GeoPath<T>[]>;
}

export abstract class GeoShape<T extends Point|Path = Point|Path> extends EventTarget {
  readonly $parent: Geopad;
  $el: SVGView;
  name: string;
  color: string;
  label: string;
  isPending: boolean;
  isLocked: boolean;
  components: GeoPoint[];
  protected $label?: ElementView;
  protected constructor($parent: Geopad, initial: GeoValue<T>, $el: SVGView, id?: string);
  get value(): T|undefined;
  get type(): string|undefined;
  get locked(): boolean;
  get isHidden(): boolean;
  setValue(p: GeoValue<T>): void;
  setLabel(str: string, color?: string, position?: string): void;
  select(): void;
  deselect(): void;
  hover(silent?: boolean): void;
  unhover(silent?: boolean): void;
  abstract redraw(p: Point|Path): void;
  abstract delete(duration?: number): void;
  abstract distance(p: Point): number;
}

export class GeoPoint extends GeoShape<Point> {
  private $halo?;
  components: GeoPoint[];
  private projectionId;
  private projection?;
  private projectionOffset;
  constructor($parent: Geopad, initial: GeoValue<Point>, id?: string, $el?: SVGView, isLocked?: boolean);
  setValue(p: GeoValue<Point>): void;
  redraw(p: Point): void;
  delete(duration?: number): void;
  distance(p: Point): number;
  lock(locked?: boolean): void;
  project(p: string|GeoShape<Path>|undefined): void;
  makeIntersection({path1, path2, index}: Intersection): void;
  addHalo(): void;
  removeHalo(): Promise<void>;
  pulsate(): void;
}

export class GeoPath<T extends Path = Path> extends GeoShape<T> {
  constructor($parent: Geopad, initial: GeoValue<T>, id?: string, $el?: SVGView);
  redraw(p: Path): void;
  distance(posn: Point): number;
  delete(duration?: number): void;
  setComponents(components: GeoPoint[], expr: (...points: Point[]) => T|undefined): void;
  updateEndPoint(newEndPoint: GeoPoint): void;
}

export type Path = Angle|Line|Circle|Arc|Polygon|Rectangle;

export type ToolName = 'move'|'point'|'line'|'circle'|'rectangle'|'perpBisector'|'angleBisector';

export type CursorName = 'default'|'crosshair'|'grab';

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

export class Tabbox extends CustomElementView {
  private $body;
  private $titles;
  private $tabs;
  private active;
  ready(): void;
  makeActive(i: number): void;
}

export class Course extends CustomElementView {
  user: any;
  model: Observable;
  isCompleted: boolean;
  isReady: boolean;
  glossary: Obj<any>;
  userData: any;
  $activeStep?: Step;
  $tutor: Tutor;
  private $steps;
  private $footer;
  private $skipStep;
  private $progress;
  private $stepsWrap;
  created(): void;
  ready(): void;
  nextStep(): void;
  goToStep($step: Step, animated?: boolean): void;
  complete(animated?: boolean): void;
  findStep(id: string): Step|undefined;
  saveProgress(data: Obj<any>): void;
  log(category: string, action: string, value?: string): void;
}

export abstract class Tile {
    readonly $parent: Polypad;
    readonly type: string;
    readonly usePosnAsRotationCenter: boolean;
    options?: string;
    $el: SVGView;
    isActive: boolean;
    colour: string;
    posn: Point;
    rot: number;
    protected path: Polygon | Rectangle;
    protected $body: SVGView;
    protected anchor: Point;
    protected vertices: never[];
    protected radius: number;
    constructor($parent: Polypad);
    setPosition(posn: Point, snap?: boolean): Point;
    setRotation(rot: number): void;
    setColour(colour: string): void;
    transform(): void;
    static makeThumbnail(options: string, element: ElementView): void;
    get outline(): Polygon;
    get points(): Point[];
    delete(): void;
    copy(dx?: number, dy?: number): any;
    static action(name: string, selectedTiles: Tile[]): void;
}
export class Polypad extends CustomElementView {
    tiles: Set<Tile>;
    $svg: SVGParentView;
    $tiles: ElementView;
    $activeTiles: ElementView;
    $selection: SVGView;
    $strokes: ElementView;
    $grid: ElementView;
    ready(): void;
    selectRect(start: Point, end: Point): void;
    snap(...points: Point[]): Point | undefined;
    bindSource($el: ElementView, type: string, options: string, $overlay?: ElementView): void;
    setColour(c?: string): void;
    clear(): void;
}
