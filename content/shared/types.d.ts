import {Obj, EventTarget} from '@mathigon/core';
import {Point, Angle, Arc, Circle, Line, TransformMatrix, Polygon, Rectangle} from '@mathigon/fermat';
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
  solve(): void;
}

export class BlankInput extends CustomElementView {
  private $input;
  private $target;
  private solution;
  private solutionNum;
  private range;
  private input;
  private attempts;
  done: boolean;
  ready(): void;
  isCorrect: boolean;
  moveCursor(): void;
  solve(): void;
  focus(): void;
  blur(): void;
}

export type EquationValidationResponse = {isCorrect?: boolean, error?: string}|null;

export class Equation extends CustomElementView {
  $math: ElementView;
  private $textarea;
  private $cursor;
  private $error;
  private $step?;
  private numeric;
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
  onKey(e: {code?: number, key: string}): void;
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
  validate?: (expr: ExprElement) => EquationValidationResponse;
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
  model: import('@mathigon/boost').Observable;
  tools: {confetti: (duration?: number, maxParticles?: number) => void};
  initialData?: any;
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
  isReady: boolean;
  score(goal: string, goNext?: boolean): void;
  storeData(key: string, value: any): void;
  onScore(goalList: string, callback: () => void): void;
  addHint(text: string, options?: HintOptions): {text: string};
  getText(id: string): string;
  getHelp(): void;
  delayedHint(callback: () => void, t?: number): void;
}

export class CoordinateSystem extends CustomElementView {
  private $grid;
  private $xAxis;
  private $yAxis;
  private $plot;
  private $labels;
  private mathBounds;
  private plotBounds;
  private plotOrigin;
  private xAxisOptions;
  private yAxisOptions;
  private xSuffix;
  private ySuffix;
  private animated;
  private noLabels;
  private xLabel;
  private yLabel;
  private crosshairGrid;
  private getCrosshairPosn;
  $overlay: SVGView;
  ready(): void;
  setupCrosshairs($svg: SVGParentView, width: number): void;
  mathToPlotCoords(p: Point): Point;
  plotToMathCoords(p: Point): Point;
  setPoints(points: number[], initial?: number): void;
  setSeries(...series: Point[][]): void;
  setFunctions(...fns: ((x: number) => number)[]): void;
  drawAxes(xStep: number, yStep: number): void;
  drawLinePlot(points: Point[]): void;
  drawPoints(points: Point[]): void;
}

export class Ticker {
  private callbacks;
  add(fn: (p: number) => void): void;
  start(time?: number): Promise<void>;
}

export abstract class DisplayNode {
  readonly type: string;
  $element?: SVGView|undefined;
  parent: DisplayNode|null;
  children: DisplayNode[];
  status: string;
  value: string;
  width: number;
  height: number;
  baseline: number;
  transform: {x: number; y: number; scale: number;};
  private currentDimensions;
  private currentWorldTransform;
  constructor(type: string, children: DisplayNode[], equation: DisplayEquation, $element?: SVGView|undefined);
  expr: string;
  log: string;
  static create(el: Element, equation: DisplayEquation): DisplayNode;
  marginLeft: number;
  marginRight: number;
  setTransform(x?: number, y?: number, scale?: number): void;
  worldTransform: {x: number; y: number; scale: number;};
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
  drawElement(p: number, width: number, height: number, baseline: number, scale: number): void;
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
  root: DisplayNodeRow;
  isReady: boolean;
  deletedNodes: Set<DisplayNode>;
  constructor(expr: string, $row: SVGView, dx?: number);
  parse(expr: string): DisplayNode[];
  find(search: string): DisplayNode[];
  animate(): Promise<void>;
  addTermAfter(expr: string, search?: string): void;
  addTermBefore(expr: string, search?: string): DisplayNode[];
  deleteTerm(expr: string): void;
  replaceTerm(search: string, expr: string): void;
  moveTermAfter(expr: string, search?: string): DisplayNode[];
  moveTermBefore(expr: string, search?: string): DisplayNode[];
  wrapTerms(expr: string, ...searchTerms: string[]): void;
  unwrapTerm(search: string, levels?: number): void;
  leftSide: DisplayNode[];
  rightSide: DisplayNode[];
}

export class EquationFlow extends CustomElementView {
  $svg: SVGParentView;
  $lastRow: SVGView;
  isReady: boolean;
  equation: DisplayEquation;
  topOffset: number;
  currentHeight: number;
  ready(): void;
  newRow(): Promise<void>;
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

export class Select extends CustomElementView {
  $active: ElementView;
  ready(): void;
  makeActive($tool: ElementView): void;
}

export abstract class GeoElement<T extends Shape|Point> {
  readonly $geopad: Geopad;
  private $label?;
  private labelStr?;
  private labelPosition?;
  $el: SVGView;
  name: string;
  val?: T;
  removed: boolean;
  x: GeoFunction<T>;
  constructor($geopad: Geopad, x: GeoFunction<T>, $el?: SVGView, name?: string);
  setLabel(str: string, color?: string, position?: string): void;
  updateLabel(state: GeoState, obj: T): void;
  remove(t?: number): void;
  abstract update(v: T): void;
  abstract makeEl(): SVGView;
  abstract exit(t: number): AnimationResponse;
}

export class GeoPath extends GeoElement<Shape> {
  points: GeoPoint[];
  update(val: Shape): void;
  makeEl(): SVGView;
  exit(t?: number): AnimationResponse;
}

export class GeoPoint extends GeoElement<Point> {
  private $halo?;
  makeEl(): SVGView;
  exit(t: number): AnimationResponse;
  update(val: Point): void;
  addHalo(): void;
  removeHalo(): Promise<void>;
}

export class GeoMovablePoint extends GeoPoint {
  private $pulse?;
  private projection?;
  locked: boolean;
  constructor($geopad: Geopad, initial: Point, $el?: SVGView, name?: string, project?: Projection);
  project(fn: Projection): void;
  pulsate(): void;
  lock(): void;
  makeEl(): SVGView;
}

export type Shape = Angle|Line|Circle|Arc|Polygon|Rectangle;
export type GeoState = any;
export type GeoFunction<T = Shape|Point> = (vars: GeoState) => T|undefined;
export type Projection = (vars: GeoState) => Line|Circle|Arc|Polygon|Rectangle;
export type GeoExpression<T = Shape|Point> = string|GeoFunction<T>;

export interface GeoOptions {
  classes?: string;
  animated?: number;
  target?: string;
  name?: string;
}

export type IntersectionPoint = {
  val: Point;
  x: () => Point;
};

export interface WaitForPathsOptions {
  onCorrect?: (path: GeoPath, index: number) => void;
  onIncorrect?: (path: GeoPath) => void;
  onHint?: (path: GeoPath, index: number) => void;
  onComplete?: (toManyErrors: boolean) => void;
  maxErrors?: number;
}

export class Geopad extends CustomElementView {
  private $svg;
  $paths: ElementView;
  $pulses: ElementView;
  $points: ElementView;
  $labels: ElementView;
  private $tools;
  model: Observable;
  elements: Map<string, GeoElement<Point|Line|Angle|Arc|Circle|Polygon|Rectangle>>;
  box: Rectangle;
  private grid;
  gridTransform: TransformMatrix;
  private gridTransformInverse;
  private findIntersections;
  noPoints: boolean;
  private cachedIntersections?;
  private $gesture?;
  private $compass?;
  private $ruler?;
  ready(): void;
  lock(): void;
  unlock(): void;
  points: GeoPoint[];
  paths: GeoPath[];
  intersections: IntersectionPoint[];
  vertexAt(posn: Point): GeoPoint|undefined;
  setActiveTool(tool: string): void;
  drawPath(x: GeoExpression<Shape>, {classes, animated, target, name}?: GeoOptions): GeoPath;
  drawPoint(x: GeoExpression<Point>, {classes, animated, target, name}?: GeoOptions): GeoPoint;
  drawMovablePoint(initial: Point, {classes, animated, target, name}?: GeoOptions): GeoMovablePoint;
  animatePoint(name: string, target: Point, duration?: number): void;
  animateConstruction(name: string, duration?: number): Promise<void>;
  showGesture(from: string, to?: string): void;
  waitForPath(validate: (p: GeoPath) => boolean): Promise<GeoPath>;
  waitForPaths(paths: (string|Shape)[], {onCorrect, onIncorrect, onHint, onComplete, maxErrors}?: WaitForPathsOptions): void;
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
  private steps;
  private speed;
  private current;
  private playing;
  private drag;
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
