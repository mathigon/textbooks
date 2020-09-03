# Interactive Elements

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

## Geopads and coordinate systems

__Geopad__ is a reusable component for displaying interactive, two-dimensional geometry diagrams
and coordinate systems. It is highly customisable and integrates well with Mathigon's TypeScript
libraries.

You can add a simple Geopad instance in Markdown using this syntax:

```html
x-geopad(width=600 height=200): svg
  circle.move.red(x="point(10,10)" name="a")
  circle.blue(x="point(20,20)" name="b")
  path.green(x="line(a,b)")
```

Every Geopad needs to have an `<svg>` element as its child. The SVG can contain a number of
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

__TODO__: More Geopad details…
