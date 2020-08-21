# Markdown Syntax

Mathigon's courses are written in a custom flavour of Markdown. Most [standard syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (titles, bold, italic, links, etc.) is supported, but we have added many new elements, and updated the behaviour of some existing ones.

Here is the basic outline of a chapter:

```markdown
# Chapter Title

> id: step-1
> section: section-id

## First Section

Here is a paragraph

---
> id: step-2
> goals: my-goal

Here is another paragraph
```

Notice that every chapter is split into multiple short steps, divided by the `---` lines. Every section contains some *metadata* at the beginning, in lines starting with a `>`. The metadata is parsed as [YAML](http://yaml.org/). (Note that the `>` usually indicates block quotes in standard Markdown syntax.)

The `# H1`  heading is the title of the entire course. Every step that starts with an `# H2` heading creates a new chapter/section, and you can use the `> section:` metadata to (optionally) specify a custom ID for this chapter. This ID will appear in the URL, for example `/course/<course-id>/<section-id>`.

Every step should have a unique `id`. You can also specify an optional `title`, as well as `goals`, which is a space-separated list of events that need to be triggered before the next step is revealed.

## **Equations**

Content between backticks is parsed as [AsciiMath](http://asciimath.org/) and converted to MathML. If you want to parse it as code or LaTeX instead, you can specify the language at the beginning:

```markdown
The probability of rolling a 6 is `(1+x)/3`.
Here is some Python code: `{py} x = 0`
Here is some LaTeX code: `{latex} \frac{1}{2}` 
```

There are a few minor differences compared to the standard AsciiMath syntax. Most importantly, it is possible to have arbitrary multi-letter variables, e.g. `ab` would become `<mi>ab</mi>` not `<mi>a</mi><mi>b</mi>`. To create multiple chained single-letter variables, simply add a space in between, e.g. `a b`.

## **Blanks and Input Fields**

You can create blanks for students to fill in using double square brackets. These can contain either be a single number (for input field) or multiple words separated by `|` (for multiple choice popups).

Input fields except the solution both as digits, or as a typed number string. For multiple choice questions, the first choice is always the correct one (but the answers are shuffled when displayed to students).

```markdown
There are numbers like [[10]] or [[ten]] and [[many|few|no]] choices.
```

You can provide specific hints for these blanks, or specify ranges of possible answers:

```markdown
Accept answers between 95 and 105 (inclusive):
[[100 ± 5]]

Show a hint when students make a mistake:
[[100 (Here is a hint.)]]

Show a series of hints if students make repeated mistakes:
[[100 (Here is the first hint. | Here is the second hint.)]]

Show specific hints for common errors:
[[100 (50: Double that number. | 100: Half that number. | Here is a hint.)]]
```

## Inline Elements (biographies, glossary, targets, …)

You can add external links just like in normal markdown. In addition, you can use the `bio:` or `gloss:` prefix to add biography or glossary popups. The corresponding IDs must match one of the items in the corresponding YAML files in the [shared](https://github.com/mathigon/textbooks/tree/master/content/shared) directory.

Using `->`, you can also add *pointers* to specific elements of the page. If users hover over the link, Mathigon will highlight all elements that match the given CSS selector (and, if needed, scroll them into view.)

```markdown
We can have [links](http://mathigon.org) or [biographies](bio:gauss) or
[glossary words](gloss:prime) or [targets](->#s1.bio)
```

**TODO**: `action`, `pill` and `target` blocks…

## **Variable Sliders**

In order to make the content as dynamic and interactive as possible, you can easily add inline variables that can be manipulated by the student. There is a separate syntax for initialising variables (resulting in interactive sliders) and expressions that depend on these variables.

```markdown
> id: my-step

The square of ${a}{a|1|-4,4,1} is ${a*a}. The square root is ${sqrt(a)}.
```

This example would produce a slider for a variable `a` that is initially 1 and can be changed from -4 to 4 in steps of 1. Variables are always scoped within the current step, and they can be accessed within Typescript using the `$step.model` observable:

```ts
export function myStep($step: Step) {
  console.log($step.model.a);  // Get the current value of a.
  // $step.model.sqrt = Math.sqrt;  // Assign a new function/variable to the model.

  $step.model.watch(() => {
    // This function is called whenever a changes.
    console.log(`Now a is ${$step.model.a}`);
  });
}
```

Notice how the `sqrt` function is assigned in TypeScript, and then used in markdown.

The `model.watch` function is very efficient: it checks which properties of `model` are accessed when its callback is called for the first time. Then it will keep executing the callback any time these properties change, but not when other properties of `model` change.

## **Custom Classes, Attributes and Tags**

For customisation and styling, it is possible to add ids, classes and attributes to paragraphs or inline elements. Simply start the body of that element with the required CSS selector inside `{}`:

```
{.class1.class2(attr="value")} Some _{#id1} text_ and [{.red} link](url).
```

You can even use this method to change the tag name of an element:

```
Here is a span element: _{span.red} Text_
```

## Block Elements

Rather than using the `{...}` syntax for adding classes or elements, you can wrap elements in blocks using `:::` symbols:

```markdown
::: .theorem(style="background: red")

Here is some text.

:::
```

The syntax for specifying tag names, classes, IDs and attributes is the same as in the previous section.

Some components also also allow chaining of multiple blocks:

```markdown
::: column.grow

This column will grow to fill the available space

::: column(width=300)

This column is 300px wide.

:::
```

## Reveals

Consecutive steps are automatically hidden and revealed when students complete all the required exercises and goals. However, you can also add content *within* a step that is dynamically revealed: paragraphs, individual words, or even elements of an SVG diagram.

The syntax is the same as for custom classes and attributes: you just need the `.reveal` class and a `when=""` attribute with a space-separated list of all required goals:

```markdown
Here is a paragraph with a blank: [[10]]

{.reveal(when="blank-0")} Here is another blank: [[20]]

{.reveal(when="blank-1")} Here is another blank: [[30]]
```

Notice that blanks within a step automatically indexed, staring at 0.

It is also possible to change the animation type, duration and delay of these reveal animations:

```markdown
{.reveal(when="blank-0" animation="pop" delay=1000 duration=400)} Show me...
```

## Special characters

You can add [any of these emoji](https://gist.github.com/rxaviers/7360908) using their name:

```markdown
Hey :smile:
```

You can create non-breaking whitespace by prefixing it with a `\`:

```markdown
The answer is 12\ m. The price us US$\ 50.
```

## **Custom HTML**

Any content indented by four characters is parsed a [Pug](https://pugjs.org/) and converted to HTML:

```markdown
Here is a paragraph

    div
      img(src="images/example.jpg")
      .caption Here is some custom HTML
```

Pug content before the start for the first step can be used to define mixins than are accessible in all later Pug blogs.

All relative urls in `src` and `href` attributes are parsed relative to the root directory for this chapter.

You can use the `.md` class to parse Markdown within HTML blocks;

```markdown
This is _markdown_.

    div This is not markdown.
    div.md This _is_ markdown.
```

## Event Binding

TODO…

## Tables

TODO…

## Audio Narration

Mathigon will automatically generate audio narrations for all text. You can prevent this behaviour using the `.no-voice` class.

```markdown
Can you read this _{.no-voice} silent_ text to me.
```

You can use the `voice=` attribute to override the custom text-to-speech parser. However, this should only be used rarely – for example, Mathigon can automatically translate equations into spoken text.

```markdown
Here is an equation: _{span(voice="a squared + b squared")} `a^2 + b^2`_.
```
