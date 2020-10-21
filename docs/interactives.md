# Interactive Elements

Many interactive elements share common functionality such as animating a DOM element or listening to
a slide gesture. For consistency, browser-compatibility and accessibility, we should use the
shared utility methods in the [__@mathigon/boost__](https://github.com/mathigon/boost.js) library.
Refer to its documentation for more information about:

* [Element selection](https://github.com/mathigon/boost.js/blob/master/docs/elements.md)
* [SVG and Canvas drawing](https://github.com/mathigon/boost.js/blob/master/docs/elements.md#svg-and-canvas-drawing)
* [Animations](https://github.com/mathigon/boost.js/blob/master/docs/animations.md)
* [Event hand gesture handling](https://github.com/mathigon/boost.js/blob/master/docs/events.md)
* [Custom Web Components](https://github.com/mathigon/boost.js/blob/master/docs/webcomponents.md)

## Linking Markdown and TypeScript

Every course is divided into multiple steps, separated by `---`s. Every step has a unique ID which
is provided in the `>` block at the beginning of a step, in the `content.md` file:

```
---
> id: my-step-1

{.my-class} Here is a paragraph

---
```

_Note: Specifying an ID for every step is optional, but recommended since the IDs are used to
identify student progress in our database. Missing step IDs could lead to discrepancies if we
insert new steps into an existing course._

The step IDs correspond to the names of functions exported in the `functions.ts` file for the
same course. The function is executed whenever the step is revealed for the first time, and takes
a `$step` argument, which is a reference to the custom HTML `<x-step>` element that wraps around
the step. Check [types.d.ts](content/shared/types.d.ts) for the available properties and methods.

```
export function myStep1($step: Step) {
  const $paragraph = $step.$('.my-class');
}
```

_Note: Step IDs are in `kebab-case` while function names are in `camelCase`._

## Goals and progress

TODO...

## Models and templates

Every step contains an observable object, which can be used to create reactive 

```ts
export function myStep1($step: Step) {
  $step.model.a = 10
  $step.model.b = 11
}
```

Any variables you assign to `$step.model` can then be accessed in Markdown. If the model changes,
the template will update automatically.

```
Here is ${a} and ${b}.
```

Many built-in interactive elements automatically integrate with the model:

```md
Here is a variable slider ${a}{a|5|0,10,1} and some variable values: a = ${a}, b = ${b}. Here
is a point: (${p.x},${p.y}).

Here is [a button](action:increment(1)) that triggers a function whenever you click it.

    // A large horizontal slider that binds to model.b
    x-slider(steps=100 :bind="b")

    // An interactive geopad component
    x-geopad(width=200 height=200): svg
      // This is a movable point that binds a Point instance to model.p
      circle.move(name="p" cx=10 cy=10)
```

```ts
export function myStep1($step: Step) {
  $step.model.click = (n: number) => $step.model.b += 1;

  console.log($step.model.p);  // Get the current value of model.p.

  $step.model.watch(() => {
    // This callback is triggered whenever model.p changes.
    console.log('point', $step.model.p);
  });
}
```

_Note: The `model.watch` function is very efficient: when executed for the first time, it tracks
which model properties are accessed within its body. Then it will keep executing the callback any
time these properties change, but not when other properties of `model` change._

## GeoPads

__GeoPad__ is a reusable component for displaying interactive, two-dimensional geometry diagrams
and coordinate systems. It is highly customisable and integrates well with Mathigon's TypeScript
libraries.

You can add a simple GeoPad instance in Markdown using this syntax:

```html
x-geopad(width=600 height=200): svg
  circle.move.red(x="point(10,10)" name="a")
  circle.blue(x="point(20,20)" name="b")
  path.green(x="line(a,b)")
```

Every GeoPad needs to have an `<svg>` element as its child. The SVG can contain a number of
different elements: points are `<circle>`s and lines, circles, polygons or other paths are
`<path>`s. Every element should have an `x=` attribute that specifies its value. Elements can
optionally have a `name=` attribute with a (unique) ID.

Once you have given elements a name, you can reference them as parameters when creating new
elements, like in the `line(a,b)` example above, which creates a line from point `a` to point `b`.

Elements with a name are also added to the `model` of the step they appear in. This means that you
can dynamically change their value in TypeScript, or listen to events when their value changes:

```ts
export function myStep($step: Step) {
  // Log the current value of point a.
  console.log($step.model.a);

  // Trigger a callback whenever point a changes.
  $step.model.watch(() => console.log($step.model.a));
}
```

### Creating new elements

It is often easiest to specify all children of a GeoPad component in HTML. If you want to
dynamically add elements later, you can use the `.drawPoint()` and `.drawPath()` methods. Here
are some examples:

```ts
$geopad.drawPoint(`point(10,10)`, {classes: 'red', name: 'p1'});
$geopad.drawPoint(new Point(10, 10), {classes: 'blue', name: 'p2'});
$geopad.drawPoint(({p1, p2}) => p1.rotate(Math.PI, p2), {classes: 'green', name: 'p3'});
$geopad.drawPath(`polygon(p1,p2, p3)`, {animated: 1000});
```

The first parameter can be an expression string, a geo element instance, or a function that
evaluates to a geo element. Supported options in the second argument are:

* `classes?: string` – multiple space-separated classes to add to the DOM element
* `animated?: boolean` – whether to animate the drawing of this element
* `name?: string` – which name to give this element, so that its value can be referenced elsewhere
* `target?: string` – the target attribute for this element, which can be used to highlight it
  when hovering over certain expressions in the same steps
* `interactive?: boolean` – only for points: whether this element is interactive or fixed

### Model functions

When specifying the value of an element using the `x=` attribute in HTML, or using a string as the
first argument of the `drawPoint/drawPath` functions, you and enter an arbitrary JavaScript
expression. The following special variables and are automatically added to `$step.model`:

| Expression              | Return value            |
| ----------------------- | ----------------------- |
| `pi`                    | `Math.PI`
| `point(a,b)`            | `new Point(a, b)`
| `angle(a,b,c)`          | `new Angle(a, b, c)`
| `line(a,b)`             | `new Line(a, b)`
| `ray(a,b)`              | `new Ray(a, b)`
| `segment(a,b)`          | `new Segment(a, b)`
| `circle(a,b)`           | `new Circle(a, b)`
| `arc(a,b,c)`            | `new Arc(a, b, c)`
| `sector(a,b,c)`         | `new Sector(a, b, c)`
| `polygon(...points)`    | `new Polygon(...Points)`
| `polyline(...points)`   | `new Polyline(...Points)`
| `triangle(a,b,c)`       | `new Triangle(a, b, c)`
| `rectangle(a,w,h)`      | `new Rectangle(a, w, h)`
| `distance(a,b)`         | `Point.distance(a, b)`
| `round(a)`              | `Fermat.round(a)`
| `sqrt(a,b)`             | `Math.sqrt(a, b)`
| `floor(a,b)`            | `Math.floor(a, b)`
| `ceil(a,b)`             | `Math.ceil(a, b)`
| `intersections(...els)` | `Fermat.intersections(...els)`

All of these functions are _safe_, for example, if you call `line(a,b)` and either `a` or `b` is
`undefined`, it will also return `undefined` (rather than throw an Error, or return an invalid
`Line` instance). This is particularly important when dealing with interactive elements: if the
user moves points in a way that removes certain elements (e.g. the intersection of two lines),
all the children of those elements will simply disappear.

If you want to use other functions in your expressions, you can simply add them to `$step.model`.

## Coordinate systems

TODO…
