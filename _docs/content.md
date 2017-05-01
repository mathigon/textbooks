# Mathigon Textbook Content

Mathigon's courses are written in a special version of [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), that makes it easy to insert certain interactive components as well as arbitrary HTML. The files should always be called `content.md`, in the folder corresponding to the course.

Note that some older courses are still written directly in [Jade/Pug](https://pugjs.org/api/getting-started.html), an HTML preprocessor.


## Titles
Like in plain Markdown, titles are prefixed by one or more `#`s, depending on their level. Every chapter should be divided into 5-10 different h2-level topics.
```
## Solving Quadratic Equations
```
```html
<h2>Solving Quadratic Equations</h2>
```


## Strong, Italic
Important keywords should be bold, and emphasised words should be italic. These can be styled just like in plain Markdown.
```
Here is a __keyword__ and an _emphasis_.
```
```html
<p>Here is a <strong>keyword</strong>strong> and an <em>emphasis</em>.</p>
```


## Lists
Ordered and unordered lists can be added just like in plain Markdown.
```
* Item 1
* Item 2
```
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```


## Maths equations
Content between backticks is parsed as LaTeX and converted to MathML.
```
The probability of rolling a 6 is `\frac{1}{6}`.
```
```html
<p>The probability of rolling a 6 is <mfrac><mn>1</mn><mn>6</mn></mfrac>.</p>
```


## Blanks and Inputs
_Blanks_ that need to be filled in by students can be created using angled brackets. These can either be a single number (input field) or multiple words separated by `|` (multiple choice popups). The first choice is always the correct one, but they are shuffled when displayed.
```
There are numbers like <10.5> and <many|few|no> choices.
```
```html
<p>There are numbers like <x-blank input="10.5"></x-blank> and <x-blank choices="many|few|no"></x-blank> choices.</p>
```


## Variable Sliders
The content should be as dynamic and interactive as possible, and this can be achieved using variables that can be manipulated by the student. There is a separate syntax for initialising variables (slides that can be modified) and expressions that depend on these variables.
```
The square of ${a}{a|1|-4,4,1} is ${a*a}.
```
```html
<p>The square of <x-var bind="a|1|-4,4,0.1">a</x-var> is <span class="var">a*a</span></p>
```
This example would produce a slider for a variable `a` that is initially 1 and can be changed from -4 to 4 in steps of 1. Note that variables are always scoped within the current section.


## Links, Biographies, Glossary, Targets
There are a few other times of interactive content: links to external websites, biographies and glossary words that open a popup, as well as targets that, when hovered, point to specific other elements on the page (using CSS selectors).
```
We can have [links](http://mathigon.org) or [biographies](.bio(gauss)) or [glossary words](.gloss(prime)) or [targets](=>#s1.bio)
```


## IDs, Classes and Attribute
You can add classes, IDs or attributes to any of the above elements, by adding `{}` at the beginning.
``` 
{.class1.class2(attr="value")} Some _{#id1}text_.
```
```html
<p class="class1 class2" attr="value">Some <em id="id1">text</em></p>
```

Similarly, `{}`s on a single line at the beginning of a block separated by empty lines will apply to the entire block.
```
{.list}
* Item 1
* Item 2
```
```html
<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```


## Arbitrary Tags
__TODO__


## Subsections
__TODO__


## Tables and Equation Systems
__TODO__


## Arbitrary HTML
If the built-in components are not enough, you can easily embed arbitrary HTML by indenting blocks with 2 spaces. You can use either plain HTML, or Pug markup (recommended).


## Sections
Chapters are divided into many _sections_ that are revealed step-by-step. In Markdown, these sections are divided by `---`. Like before, you can add arbitrary classes or ids to these sections, which is necessary if sections require custom functions in `functions.js`.
```
-- -
Hello
---{#s1}
World!
```
```html
<section>Hello</section>
<section id="s1">World!</section>
```
Note that content above the first section separator is ignored when converting in HTML. It can be used for title, copyright, notes or TODOs.
