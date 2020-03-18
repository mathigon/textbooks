# Fractals

## Introduction

> section: introduction
> id: intro

When looking around nature, you might have noticed intricate plants like
these:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} This __Fern__ consists of many small leafs that branch off a larger one.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} This __Romanesco broccoli__ consists of smaller [[cones|cubes|spheres]]
spiralling around a larger one.

:::

{.reveal(when="blank-0")} Initially, these appear like highly complex shapes –
but when you look closer, you might notice that they both follow a relatively
simple pattern: all the [individual parts](target:fractal) of the plants look
exactly the same as the entire plant, just smaller. The same pattern is repeated
over and over again, at smaller scales.
[Continue](btn:next)

---
> id: fern

In mathematics, we call this property __self-similarity__, and shapes that
have it are called [__fractals__](gloss:fractal). They are some of the most
beautiful and most bizarre objects in all of mathematics.

To create our own fractals, we have to start with a simple pattern and then
repeat it over and over again, at smaller scales.

::: column.grow

One of the simplest patterns might be a [{.pill.red} line segment](target:s1),
with [{.pill.blue} two more segments](target:s2) branching off one end. If we
repeat this pattern, both of these blue segments will also have two more
branches at their ends.

You can move the [blue dots](target:dot) to change the length and angle of all
of the branches. Then increase the number of iterations using [the
slider](->#fern-slider) below.

{.reveal(when="slider-0")} Depending on the position of the branches, you can
make completely different patterns – looking like the
[fern](action:set(130,228,197,184)) above, a [tree](action:set(160,186,200,186)),
or [nested pentagons](action:set(113,235,232,238)). What else can you find?
[Continue](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 var="steps")

:::

---
> id: triangle

::: column.grow(parent="right")

Another famous fractal is the __Sierpinski Triangle__. In this case, we start
with a large, equilateral triangle, and then repeatedly cut smaller triangles
out of the remaining parts.

{.fixme} Notice how, after a while, every smaller triangle looks exactly the
same as the whole. You can zoom into a fractal, and the patterns and shapes
will continue repeating, forever.

::: column(width=300)

    svg(width=300 height=265)
      path.var.red(:draw="triangle")
      path.var.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 var="steps")

:::

---
> id: real

The plants at the begining of this chapter _look_ just like fractals, but it is
clearly impossible to create _true_ fractals in real-life: if we keep repeating
the same pattern over and over again, smaller and smaller, we would eventually
get to cells, molecules or atoms which can no longer be divided.

However, using mathematics, we can think about the properties that real fractals
“would” have – and these are very surprising…
[Continue](btn:next)

---

### Fractal Dimensions

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

First, let’s think about the dimension of fractals. A line has dimension [[1]].
_{span.reveal(when="blank-0")} When scaling it by a factor of 2, its length
increases by a factor of `§2^1 = 2`. Obviously!_

:::

---

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

A square has dimension [[2]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its area increases by a factor of `§2^2 =` [[4]]._

:::

---

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

A square has dimension [[3]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its volume increases by a factor of `§2^3 =` [[8]]._
_{span.reveal(when="blank-1")} Notice that the larger cube in the image
consists of 8 copies of the smaller one!_

:::

---

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Now let’s have a look at the Sierpinski triangle. If we scale it by a factor of
2, you can see that it’s “area” increases by a factor of [[3]].

{.reveal(when="blank-0")} Let’s say that _d_ is the dimension of the Sierpinski
triangle. Using the same pattern as above, we get `§2^d = 3`. In other words,
_d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")}≈ 1.585…_

:::

---

But wait … how can something have a dimension that is not an integer? It seems
impossible, but this is just one of the weird properties of fractals. In fact,
this is what gives fractals their name: they have a __fractional dimension__.

With every iteration, we remove some of the area of the Sierpinski triangle.
If we could do this infinitely many times, there would actually be no area
left: that’s why the Sierpinski triangle is something in-between a 2-dimesional
area, and a 1-dimensional line.

::: .theorem
While many fractals are _self-similar_, a better definition is that __fractals__
are shapes which have a __non-integer dimension__.
:::

[Continue](btn:next)

---
> id: snowflake

### The Koch Snowflake

There are many shapes in nature that look like fractals. We’ve already seen
some plants at the beginning of this chapter. Another great examples are
snowflakes and ice crystals:

::: column(width=120 parent="padded-thin")

    x-media(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-media(src="images/snow-5.jpg" width=120 height=120)

:::

---
> id: koch

To create our own fractal snowflake, we once again have to find a simple
procedure we can apply over and over again.

::: column.grow

Like the Sierpinski triangle, let's start with a single, equilateral triangle.
However, rather than _removing_ smaller triangles at every step, we _add_
smaller triangles along the edge. The side-length of every triangle is
[[`1/3`|`1/4`|`1/2`]] of the triangles in the previous step.

The resulting shape is called the __Koch snowflake__, named after the Swedish
mathematician [Helge von Koch](bio:koch). Notice, once again, that small
sections of the edge of the snowflake look exactly the same as larger sections.

::: column(width=300)

    svg(width=300 height=300)
      path.var.blue(:draw="koch(steps)")
    x-slider(steps=5 var="steps")

:::

---
> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

{.fixme} When we scale one edge segment of the von Koch Snowflake by a factor of 3, its
length quadruples. Therefore we get the equation `3^d=4`. Like before, we can
solve this equation to find that the dimension of the von Koch Snowflake is
`d = log_3(4) = 1.262…`

:::

---
> id: koch-area

{.fixme} Area of koch snowflake: You can think about creating the Koch Snowflake
as a sequence: you start with a single triangle, and at every step you add
smaller triangles around the outside. At every step, the number of triangles
increases by 4, but their area decreases by a factor of 9. The total area is
therefore a geometric series that converges. The resulting area is 2√3/5 ≈ 0.69.
Here you can find a more detailed walkthrough of the solution:
http://ecademy.agnesscott.edu/~lriddle/ifs/ksnow/area.htm


::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} "My soul is spiralling on frozen fractals all around…"

:::

---
> id: menger-sponge

### Menger Sponge

Fractals don't have to be “flat”, like many of the examples above. One of the
most famous fractals that look 3-dimensional is the __Menger sponge__, named
after the mathematician [Karl Menger](bio:menger) who first described it in 1926.

::: column.grow

We start with a solid cube, and repeatedly drill smaller and smaller holes into
its sides. Every new iterations of hole has [[`1/3`|`1/2`|`1/4`]] the width of
the previous iteration of holes.

{.reveal(when="blank-0 slider-0")} We can try to calculate the dimension of the
Menger sponge just like we did for the Koch snowflake above. The cube on the
right consists of [[20]] copies of itself, all of which are 3 times smaller.

{.reveal(when="blank-1")} If _d_ is the dimension of the Menger sponge, we get
`§3^d = 20`, or `§d = log_3(20) ≈ 2.727`. If you imagine cutting out more and
more holes, infinitely many times, there would be no actual volume left – which
is why the cube is “not quite” 3-dimensional.

::: column(width=320)

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 var="steps")

:::

---
> id: coastlines

### Fractal Coastlines

One of the key characteristics of all the fractals we've seen so far is that
you can "zoom in" forever, and always find new patterns. Around 1920, the
British mathematician [Lewis Fry Richardson](bio:richardson) realised that the
same is true for the border or coastline of many countries.

You start with the basic shape of the country, and as you zoom in, you add
river inlets, bays and estuary, then individual cliffs, rocks, pebbles, and so
on:

::: column(width=120 parent="padded-thin")

    x-media(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-media(src="images/coast-5.jpg" width=120 height=180)

:::

[Continue](btn:next)

---
> id: coastlines-1

::: column.grow

This is a significant problem when trying to calculate the length of the border
of a country – how do you decide which nooks and crannies to include?

One way we could measure the length of Britain's coastline, for example, is to
take a long ruler, walk all the way around its beaches, and then add up all the
distances.

If the ruler is ${rulers[index]}{index|0|0,4,1}km long, we have to use it
${count} times, so we get a total coastline of ${count} × ${rulers[index]} =
${count * rulers[index]}km.

{.reveal(when="var-0")} We can just keep going, with smaller and smaller rulers,
and each time, our result for the length of the coastline would get a bit
longer. Just like the Koch Snowflake before, it seems that Britains
coastline is infinitely long!

{.reveal(when="var-0")} This is often called the __Coastline paradox__.
[Continue](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---
> id: coastline-dimension

A few decades later, the mathematician [Benoit Mandelbrot](bio:mandelbrot)
stumbled upon Richardson's work in a discarded library book, while working at
IBM. He recognised its significance, and also how it relates to more recent
research on fractals and dimensions.

The coastline of Britain certainly “looks” fractal, but it is not
_self-similar_, like all the other fractals we’ve seen before. This means we
have to find a slightly different method to calculate its area.

{.todo} Coming Soon: Calculating the Dimension of Britain's Coastline

---
> id: nature

### More Fractals in Nature and Technology

While true fractals can never appear in nature, there are many objects that
look _almost_ like fractals. We've already seen plants, snowflakes and
coastlines, and here are many more examples:

::: column(width=200)

    // https://visibleearth.nasa.gov/images/72291/the-hindu-kush
    x-media(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Mountain range in central Asia

::: column(width=200)

    // https://de.wikipedia.org/wiki/Datei:Sundarbans.jpg
    x-media(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Ganges river delta in India

::: column(width=200 parent="padded-thin")

    x-media(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Lightning bolts

::: column(width=200)

    // https://commons.wikimedia.org/wiki/File:Fundus_photograph_of_normal_right_eye.jpg
    x-media(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Blood vessels in the retina

::: column(width=200)

    // https://www.flickr.com/photos/usgeologicalsurvey/11188773133
    x-media(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon in the USA

::: column(width=200)

    x-media(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Clouds

:::

All these object might appear completely random, but, just like fractals, there
is an underlying pattern that determines how they are formed. Mathematics can
help us understand the shapes better, and fractals have applications in fields
like medicine, biology, geology and meteorology.
[Continue](btn:next)

---
> id: technology

::: column(width=300)

    // https://commons.wikimedia.org/wiki/File:Fractal_terrain_texture.jpg
    x-media(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Computer-generated fractal terrain

::: column.grow

We can also use fractals to create realistic “copies” of nature, for example as
landscapes and textures used in video games or computer-generated movies. The
water, mountains and clouds in this image are made entirely by a computer, with
the help of fractals!

And we can even reverse this process to compress digital images, to reduce their
file size. The first algorithms were developed by Michael Barnsley and Alan
Sloan in the 1980s, and new ones are still being researched today.

:::


--------------------------------------------------------------------------------


## The Sierpinski Triangle

> section: sierpinski
> id: sierpinski

::: column(width=300 parent="right")

    svg.sierpinsk(width=300 height=265)
      path.var.red(:draw="triangle")
      path.var.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 var="steps")

::: column.grow

One of the fractals we saw in the previous chapter was the __Sierpinski
triangle__. It can be created by starting with one large, equilateral
triangle, and then repeatedly cutting smaller triangles out of its center.

{.r.reveal(when="slider-0")} As it turns out, the Sierpinski triangle also
appears in many other areas of mathematics, and there are many different ways to
generate it. In this chapter, we will explore some of them!
[Continue](btn:next)

:::

---
> id: pascal

### Pascal’s Triangle

[Pascal’s Triangle](/course/sequences/pascals-triangle) is a number pyramid in
which every number is the sum of the two numbers above. Let’s see what happens
if we highlight all the even numbers…

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };

    .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i < 25
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            if b > 99999
              .c: span.small= b
            else
              .c= b
            - j += 1;
        - i += 1;

Pascal’s Triangle can be continued downwards forever. The Sierpinski
pattern will continue, producing bigger and bigger triangles.

---
> id: chaos-game

### The Chaos Game

    // Chaos game: https://www.youtube.com/watch?v=kbKtFN71Lfs

In the Chaos Game, we start with an empty triangle and select a random point in 
the middle. We then choose one of the three vertices of the triangle at random,
and mark the point at the centre of the line from the random point to the
vertex. Then we repeat the process, starting with that new point…

{.todo} Animation Coming Soon

---
> id: cellular

### Cellular Automata

A [__cellular automaton__](gloss:cellular-automata) is a grid consisting of many
connected cells. The “state” of every cell (e.g. its colour) is determined by
its surrounding cells.

In our example, every cell can be either black or white. We start with one row
that contains just a single black square. In every following row, the colour of
each cell is determined by the three cells immediately above.

There are eight different types of three adjacent cells, and in each case we can
decide how we want to colour the cell underneath. Tap the options below to
toggle their state – can you find a set of rules that create a pattern similar
to the Sierpinski triangle?

    .cellular-rules
    figure: svg.cellular-grid(width=595 height=310)

Rule 30

---

::: column.grow

Many plants and animals also grow by following simple rules like this – and
that can cause the appearance of similar patterns in nature. Here you can see
a seashell that shows 

::: column(width=320)

    x-media(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textile, a venomous sea snail

:::


--------------------------------------------------------------------------------


## The Mandelbrot Set

> section: mandelbrot
> id: iteration

    // Mandelbrot: https://www.youtube.com/watch?v=NGMRB4O922I

All the fractals we saw in the previous chapters were created using a process
of __iteration__: you start with a specific pattern, and then you repeat it
over and over again.

This is similar to another concept in mathematics that you saw before:
[recursive sequences](gloss:sequence-recursive). There, you start with a number,
and then you apply the same recursive formula again and again, to get the next
number in the sequence.

Let's take the recursive formula `§x_n = x_(n-1)^2` as an example. The resulting
sequence can be have very differently, depending on the starting value `§x_0`.

{.fixme} Numberline slider

---
> id: iteration-1

If `§x_0 > 1`, the sequence [[diverges|convrerges]]: it just keeps growing,
up to Infinity.

If `§-1 < x_0 < 1`, the squence [[converges|diverges]] to [[0]]

If `§x_0 < -1`, the sequence [[diverges|converges]] again.

---
> id: iteration-2

### Julia Sets

So far, we've not learned anything new. However, one century ago, mathematicians
started to explore what happens to these sequences if you use [__complex
numbers__](gloss:complex), rather than real numbers – and their discoveries were
some of the most surprising and beautiful results in all of mathematics…

Let's use the same sequence as before, `§x_n = x_(n-1)^2`. Move the position of
`§x_0` around the complex plane, to see what happens to the following terms. If
the sequence converges, let's colour the corresponding point on the plane blue.

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="a0" x="point(1,1)")
        path.yellow(x="spiral(a0,c)")
        circle.move.red(name="c" x="point(0,0)")

{.fixme} Complex plane

---
> id: iteration-3

In this case, the sequence converges as long as `§x_0` lies inside the [[unit
circle|xxx|xxx]] – the circle with radius 1, centered at the origin.

---
> id: julia

Now let's make things a bit more complex. Rather than just squaring the previous
number, we also add a constant _c_ every time. In other words, `§x_n = x_(n-1)^2 + c`.

Below, you can not only move the position of `pill(x_n,"yellow")`, but also the value of
`pill(c,"red")`:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="a0" x="point(0.5,-0.2)")
        path.yellow(x="spiral(a0,c)")
        circle.move.red(name="c" x="point(0,0)")

{div(slot="legend")} We already know what happens if
[`c = 0`](action:animate(0,0)) – that's the same as the example above.
The sequence convergence as long as `x_0` lies within the unit circle.

{div(slot="legend")} As soon as we change the value of _c_, something wonderful
happens. The circle transforms into a highly complex, fractal shape, for
example when [`c = –0.6 – 0.2i`](action:animate(-0.6,-0.2)).

{div(slot="legend")} When [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), the
shape divides into infinity many tiny elements arranged in spirals.

{div(slot="legend")} What else can you find? have a look at
[`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) or
[`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). There are also values of _c_,
like [`c = 0.8 + 0.2i`](action:animate(0.8,0.2)), where _every_ sequence
diverges. In this case, we don't colour anything blue.

:::

---
> id: julia-1

The different shapes that are formed by colouring in the numbers are called
[__Julia Sets__](gloss:julia-set). More about history, computers, etc.

---

### The Mandelbrot Set

To create a Julia set, we picked a fixed value for _c_, and then changed the
starting point of the sequence to see which ones converge and which ones don't.

In XXXX, the French mathematician [Benoit Mandelbrot](bio:mandelbrot) decided to
reverse this process: fix the starting point to always be 0, and instead change
the value of _c_.

---
> id: mandel-paint

Once more, paint over the complex plane to discover the shape of the XXX in
this example:

::: column(width=460)

    x-geopad.no-background(width=460 height=460 x-axis="-1.6,0.6,1" y-axis="-1.1,1.1,1" axes padding=10 snap=0.02)
      canvas(width=1080 height=960)
      svg
        circle.move(name="c" cx=0 cy=0 style="r: 15; stroke: blue; fill: white")

::: column.grow(width=200)

c = ${complex(c)}

| `x_0` | = | `0^2   + c` | = | ${complex(c)}  |
| `x_1` | = | `x_0^2 + c` | = | ${complex(x1)} |
| `x_2` | = | `x_1^2 + c` | = | ${complex(x2)} |
| `x_3` | = | `x_2^2 + c` | = | ${complex(x3)} |
| `x_4` | = | `x_3^2 + c` | = | ${complex(x4)} |
| `x_5` | = | `x_4^2 + c` | = | ${complex(x5)} |

:::

---

This shape is called the __Mandelbrot Set__, and it is probably the most
recognisable fractal in the world. When rotated by 90°, it looks almost like a
person, with head, body and two arms.

Benoit Mandelbrot was one of the first scientists to try to visualise fractals
using computers. At the time, every image took XXXX to render, and the results

A computer can do these computations very quickly for millions of numbers _c_ –
like all pixels on a screen. The code required is simple, but the resulting
fractal is unbelievable complex.

When Benoit Mandelbrot studied the fractal in the early 1920s, there weren’t any
computers to visualise it &ndash; in fact he didn’t know exactly what it looked
like. But using mathematics he was able to predict its complexity. The first
computer generated image of the Mandelbrot set was produced by an IBM
supercomputers in 1980; today everybody can do the same calculations on a normal
laptop.

---

Here are two of the first visualisations of the Mandelbrot set and a Julia set,
from a paper by Robert Brooks and Peter Matelski, published in 1980:

::: column(width=340)

    x-media(src="images/mandelbrot.jpg" width=340 height=340)

::: column(width=340)

    x-media(src="images/julia.jpg" width=340 height=340)

:::

---
> id: mandel-zoom

Black points in the image below are part of the Mandelbrot set. Coloured areas
are not in the Mandelbrot set, and the colour indicates the speed with which the
respective sequence of complex numbers diverges (tends to infinity).

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=270 speed=0.5 var="scale")

---

The Mandelbrot set can be created with just a single, simple equation – yet, it
is infinitely complex and stunningly beautiful. This combination has made it
one of the most famous and most recognisable shapes in all of mathematics.

{.todo} Coming Soon: More on the relationship between the Julia and
Mandebrot sets, and the number of fixed points in every bulb.


--------------------------------------------------------------------------------


## Space Filling Curves

> section: space-filling
> sectionStatus: dev

{.todo} Coming Soon!
