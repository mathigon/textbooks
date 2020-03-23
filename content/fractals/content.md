# Fractals

## Introduction

> section: introduction
> id: intro

When looking around nature, you might have noticed intricate plants like
these:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} This __Fern__ consists of many small leaves that branch off a larger
one.

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

Another famous fractal is the [__Sierpinski triangle__](gloss:sierpinski-triangle).
In this case, we start with a large, equilateral triangle, and then repeatedly
cut smaller triangles out of the remaining parts.

{.reveal(when="slider=0")} Notice how the final shape is made up of [three
identical copies of itself](target:x), and each of these is made up of even
smaller copies of the entire triangle! You could keep zooming into the triangle
forever, and the patterns and shapes will always continue repeating.

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 var="steps")

:::

---
> id: real

The plants at the beginning of this chapter _look_ just like fractals, but it is
clearly impossible to create _true_ fractals in real-life. If we keep repeating
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
left: that’s why the Sierpinski triangle is something in-between a 2-dimensional
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
some plants at the beginning of this chapter. Other great examples are
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

Like the Sierpinski triangle, let’s start with a single, equilateral triangle.
However, rather than _removing_ smaller triangles at every step, we _add_
smaller triangles along the edge. The side-length of every triangle is
[[`1/3`|`1/4`|`1/2`]] of the triangles in the previous step.

{.reveal(when="blank-0")} The resulting shape is called the [__Koch
snowflake__](gloss:koch-snowflake), named after the Swedish mathematician [Helge
von Koch](bio:koch). Notice, once again, that [small sections](target:t2) of the
edge of the snowflake look exactly the same as [larger sections](target:t1).

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 var="steps")

:::

---
> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

When we scale one edge segment of the Koch Snowflake by a factor of 3, its
length [[quadruples|triples|doubles]]. 

{.reveal(when="blank-0")} Using the same relationship between dimensions and
scale factors as above, we get the equation [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]].
_{span.reveal(when="blank-1")} This means that the dimension of the Koch
Snowflake is `§d = log_3(4) ≈ 1.262`._

:::

---
> id: koch-size

::: tab

#### Area _{span.check(when="blank-6")}_

Creating the Koch snowflakes is almost like a [recursive
sequence](gloss:sequence-recursive): we know the starting shape (a triangle),
and we know how to get from one term to the next (by adding more triangles on
every edge):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] new triangles

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] new triangles

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] new triangles

:::

{.reveal(when="blank-0 blank-1 blank-2")}
After the first iteration, the number of new triangles added increases by a
factor of [[4]] at every step. At the same time, the size of these new triangles
decreases by a factor of [[9]] at every step.

{.reveal(when="blank-3 blank-4")}
Let’s say that the [first triangle](->#koch-0) has an area of 1. Then the total
area of the [next three triangles](->#koch-1) is `3 × 1/9 = 1/3`. The following
steps all form a [[geometric series|arithmetic series|quadratic series]],
_{span.reveal(when="blank-5")} with common ratio [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")}
Using the formula for the sum of infinite [geometric series](gloss:geometric-series),
we can calculate that the total area of the Koch snowflake is

{.text-center.reveal(when="blank-6")}
`A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Perimeter _{span.check(when="blank-9")}_

::: column.grow

We can also try to calculate the perimeter of the Koch snowflake. As we have
already seen before, the length of the perimeter changes by a factor of
[[`4/3`|`3/4`|`1/4`]] at every step.

{.reveal(when="blank-8")}
This means that, once again, we have a geometric series – but in this case, it
[[doesn’t converge|converges to 0|doesn’t have a first term]].
_{span.reveal(when="blank-9")} This means that the perimeter of the Koch
snowflake is actually **infinitely long**!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _If this seems counterintuitive, just remember that
we multiply the perimeter by `4/3` at every step, and we do this infinitely
many times._

:::

---
> id: frozen

::: column.grow

It is almost unthinkable that you can have a shape with a _finite_ area at also
an _infinite_ circumference – but this is just one of the many unexpected
properties of fractals.

Can you come up with any other ways to create your own fractals?
[Continue](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} “My soul is spiralling on frozen fractals all around…”

:::

---
> id: menger-sponge

### Menger Sponge

Fractals don’t have to be “flat”, like many of the examples above. One of the
most famous fractals that look 3-dimensional is the __Menger sponge__, named
after the mathematician [Karl Menger](bio:menger) who first described it in 1926.

::: column.grow

We start with a solid cube, and repeatedly drill smaller and smaller holes into
its sides. Every new iteration of holes has [[`1/3`|`1/2`|`1/4`]] the width of
the previous iteration of holes.

{.reveal(when="blank-0")} We can try to calculate the dimension of the Menger
sponge just like we did for the Koch snowflake above. The cube on the right
consists of [[20]] copies of itself, all of which are 3 times smaller.

{.reveal(when="blank-1")} If _d_ is the dimension of the Menger sponge, we get
`§3^d = 20`, or `§d = log_3(20) ≈ 2.727`. If you imagine cutting out more and
more holes, infinitely many times, there would be no actual volume left – which
is why the cube is “not quite” 3-dimensional.
[Continue](btn:next)

::: column(width=320)

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 var="steps")

:::

---
> id: coastlines

### Fractal Coastlines

One of the key characteristics of all the fractals we’ve seen so far is that
you can “zoom in” forever, and always find new patterns. Around 1920, the
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

One way we could measure the length of Britain’s coastline, for example, is to
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
stumbled upon Richardson’s work in a discarded library book, while working at
IBM. He recognised its significance, and also how it relates to more recent
research on fractals and dimensions.

The coastline of Britain certainly “looks” fractal, but it is not
_self-similar_, like all the other fractals we’ve seen before.

::: column(width=340)

    include svgs/cells.svg

::: column.grow

In order to find its “size” of the coastline, we can draw it on a grid and count
the number of cells that intersect with it.
[Continue](btn:next)

{.reveal(when="next-0")} Then, we scale the coastline by a factor of 2, and
repeat the process of counting the cells. In this case, the size of the
coastline has increased by a factor of `§197/88`.

{.reveal(when="next-0")} Using the same idea as before, this means that the
dimension of Britain’s Coastline is

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---
> id: coastline-dimension-1

If we keep repeating this with larger and larger grids, we’d find that the
dimension of the coastline of Britain tends towards 1.21.

Mandelbrot realised that this fractal dimension is also a measure of the
__roughness__ of a shape – a new concept that he found has important
applications in many areas of mathematics and science.

---
> id: nature

### More Fractals in Nature and Technology

While true fractals can never appear in nature, there are many objects that
look _almost_ like fractals. We’ve already seen plants, snowflakes and
coastlines, and here are some more examples:

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

All these objects might appear completely random, but, just like fractals, there
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

We can also use fractals to create realistic “copies” of nature, for example, as
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

::: column.grow

One of the fractals we saw in the previous chapter was the [__Sierpinski
triangle__](gloss:sierpinski-triangle), which is named after the Polish
mathematician [Wacław Sierpiński](bio:sierpinski). It can be created by starting
with one large, equilateral triangle, and then repeatedly cutting smaller
triangles out of its center.

{.r.reveal(when="slider-0")} Wacław Sierpiński was the first mathematicians to
think about the properties of this triangle, but it has appeared many centuries
earlier in artwork, patterns and mosaics.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 var="steps")

:::

---
> id: sierpinski-history

Here are some examples of floor tilings at the Santa Maria in Cosmedin basilica
in Rome:

::: column(width=140 parent="padded-thin")

    // https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Cosmedin_(Roma).jpg
    x-media(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-media(src="images/floor-2.jpg" width=140 height=140)

::: column(width=140)

    x-media(src="images/floor-3.jpg" width=140 height=140)

:::

As it turns out, the Sierpinski triangle also appears in many other areas of
mathematics, and there are many different ways to generate it. In this chapter,
we will explore some of them!
[Continue](btn:next)


---
> id: pascal
> goals: select

### Pascal’s Triangle

You might even remember the Sierpinski triangle from our chapter on [__Pascal’s
triangle__](gloss:pascals-triangle). This is a number pyramid in which every
number is the sum of the two numbers above. Tap on all the _even_ numbers in the
triangle below, to highlight them – and see if you notice a pattern:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---
> id: pascal-1

Pascal’s triangle can be continued downwards forever, and the Sierpinski pattern
will continue with bigger and bigger triangles. You can already see the
beginning of an even larger triangle, starting in row 16.

Of course, we can also try colouring all cells divisible by numbers _other than
2_. What do you think will happen in those cases?
[Continue](btn:next)

---
> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=800 height=700 style="width: 400px; height: 350px")
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Here you can see a tiny version of the first 128 rows of Pascal’s triangle.
We have highlighted all cells that are divisible by ${n}{n|2|2,40,1} – what
patterns can you find?

{.reveal(when="var-0")} For every number, we get intricate triangular patterns
similar to the Sierpinski triangle. However, the most 
, but some are more regular than others.
Particularly interesting are the patterns for [prime numbers](gloss:prime) or
the powers of prime numbers (like 27 or 32).

    x-gesture(target="#pascal-large x-var" slide="100,0")

---
> id: chaos-game
> goals: point simulation

### The Chaos Game

::: column.grow

Here you can see the three vertices of an equilateral triangle. Tap anywhere
in the grey area to create a fourth point.

{.r.reveal(when="point")} Now lets play a game: we pick one of the vertices of
the triangle at random, draw a line between our point and the vertex, and then
highlight the midpoint of that segment.
[Continue](btn:next)

{.r.reveal(when="next-0")} And then we repeat the process: once again we pick
a random vertex, draw the line from our new point, and then highlight then find
the midpoint.
[Continue](btn:next)

{.reveal(when="next-1")} So far, nothing surprising has happened – but watch
as we repeat the same process many more times:

{.text-center.reveal(when="next-1")}
_{button.btn.var(@click="game.run(100)")} 100 steps_
_{button.btn.var(@click="game.run(1000)")} 1000 steps_

::: column(width=360)

    x-geopad.sticky(width=360)
      canvas(width=720 height=720)
      svg
      x-icon-btn.var(icon="restore" @click="game.reset()")

:::

---
> id: chaos-game-1

If you repeat 

This process is called the __Chaos Game__, and there are many other versions of
it. For example, we could start with a square or a pentagon, rather than a
triangle. What do you expect to happen?

::: figure

    x-geopad(width=520 height=400)
      canvas(width=1040 height=800)
      svg
      x-icon-btn.var(icon="restore" @click="game.reset()")
      button.btn.var(@click="game.run(1000)" style="position: absolute; top: 8px; left: 8px;") 1000 Steps

{.caption} Tap anywhere to create a new point, and drag points to the edge to
remove them.

:::

---
> id: cellular
> goals: sierpinski

### Cellular Automata

A __cellular automaton__ is a grid consisting of many connected cells. Every
cell can be in different “states” (e.g. different colours), and the state of
every cell is determined by its surrounding cells.

In our example, every cell can be either black or white. We start with one row
that contains just a single black square. In every following row, the colour of
each cell is determined by the three cells immediately above. Tap the eight
possible XXXX below to flip their colour. Can you find a set of rules that
creates a pattern similar to the Sierpinski triangle?

    figure
      .cellular-rules.var
        for r in ['000', '001', '010', '100', '011', '101', '110', '111']
          svg.cellular-rule(width=44 height=32 data-rule=r tabindex=0)
      svg.cellular-grid(width=620 height=320)

---
> id: rule-30

There are two options for each of the eight XX, which means there are `2^8 = 256`
possible rules in total. 

{.fixme} Rule 30

::: column.grow

{.fixme} Many plants and animals also grow by following simple rules like this – and
that can cause the appearance of similar patterns in nature. Here you can see
a seashell that shows 

::: column(width=320)

    x-media(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus textile, a venomous sea snail

:::

---
> id: carpet

### Sierpinski Carpets and Tetrahedra


::: column(width=320)


::: column(width=320)

    x-sierpinski-tetrahedra.var(size=320 steps=4 shadows)

:::

{.fixme} COMING SOON


--------------------------------------------------------------------------------


## The Mandelbrot Set

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

All the fractals we saw in the previous chapters were created using a process
of __iteration__: you start with a specific pattern, and then you repeat it
over and over again.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

This is similar to another concept in mathematics that you saw before: with
[recursive sequences](gloss:sequence-recursive), you start with a specific
number, and then you apply the same recursive formula, again and again, to get
the next number in the sequence.

Let’s take the recursive formula `§x_n = x_(n-1)^2` as an example, and plot its
terms on a number line. You can change the value of `pill(x_0,"yellow","x0")`:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---
> id: iteration-1

Notice how the resulting sequence can behave very differently, depending on the
starting value `§x_0`:

::: column.sequence-cell(width=180 parent="padded-thin")

If `§x_0 > 1`, the sequence [[diverges|converges]]:
_{span.reveal(when="blank-0")}it just keeps growing, up to infinity._

::: column.sequence-cell(width=180)

If `§x_0` is between –1 and 1, the sequence [[converges|diverges]].

::: column.sequence-cell(width=180)

If `§x_0 < -1`, the sequence [[diverges|converges]].

:::

---
> id: iteration-2

So far, we’ve not learned anything new. However, about one century ago,
mathematicians started to explore what happens to these sequences if you use
[__complex numbers__](gloss:complex-numbers), rather than just the real number
line. Their discoveries were some of the most surprising and beautiful results
in all of mathematics.


---
> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets

Let’s use the same sequence as before, `§x_n = x_(n-1)^2`, but on the complex
plane. You can move the position of `pill(x_0,"yellow","x0")`, to see what
happens to the following terms. If the sequence looks like it will converge,
let’s colour the corresponding point on the plane in _{span.pill.blue}blue_:

    x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="a0" x="point(0,0)")
        circle.yellow.transparent(name="a1" x="iterate(a0)")
        circle.yellow.transparent(name="a2" x="iterate(a1)")
        path.yellow(x="spiral(a0)")
      .geo-legend

---
> id: julia-1

As you can see, the sequence converges as long as `pill(x_0,"yellow")`
lies [[inside the unit circle|outside the unit square|above the x-axis]]
_{span.reveal(when="blank-0")}(the circle with radius 1, centred at the origin)._

---
> id: julia-2

Now let’s make things a bit more difficult. Rather than just squaring the
previous number, we also add a constant _{.pill.red}c_ every time (which can be
any complex number). In other words, `§x_n = x_(n-1)^2 + c`. Do you think we’ll
still get a circle of convergence? What other shapes do you think we might see?
[Continue](btn:next)

---
> id: julia-3

In this diagram, you can not just move the position of `pill(x_0,"yellow")`, but
also the value of `pill(c,"red","c")`:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="a0" x="point(0.5,-0.2)")
        path.yellow(x="spiral(a0,c)")
        circle.move.red(name="c" x="point(0,0)")

{div(slot="legend")} We already know what happens if
[`c = 0`](action:animate(0,0)) – that’s the same as the example above.
The sequence convergence as long as `x_0` lies within the unit circle.

{div(slot="legend")} As soon as we change the value of _c_, something wonderful
happens. The circle transforms into a highly complex, fractal shape, for
example when [`c = –0.6 – 0.2i`](action:animate(-0.6,-0.2)).

{div(slot="legend")} When [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), the
shape divides into infinity many tiny elements arranged in spirals.

{div(slot="legend")} What else can you find? have a look at the patterns when
[`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) or when
[`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). There are also some values of
_c_ where _every_ sequence diverges, so the entire complex plain remains white.

:::

---
> id: julia-4

The different shapes that are formed by colouring in the numbers are called
[__Julia Sets__](gloss:julia-set). They were discovered independently by two
French mathematicians, [Gaston Julia](bio:julia) and [Pierre Fatou](bio:fatou),
around 1918.

At that time, there were no computers to help visualise what Julia sets actually
looked like. Mathematicians like Julia and Fatou were able to reason about them
mathematically, but they only ever saw rough, hand-drawn sketches of what they
might look like.

We don’t have this problem today – the images below are all of different Julia
sets. The different colours indicate _how quickly_ the sequence at that point
diverges:

::: column(width=220)

    x-media(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-media(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-media(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[Continue](btn:next)

---
> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### The Mandelbrot Set

When creating the different Julia sets, you might have noticed that there were
some values of _c_ for which no sequences converge, and the entire complex plane
remains white. A few decades after Julia and Fatou, a new generation of
mathematicians tried to map these areas.

In the previous example, we chose a fixed value for _{.pill.red}c_, and then
changed the position of _{.pill.yellow}x0_ to colour the plane. Now let’s fix
the value of _{.pill.yellow}x0 = 0_, and instead change the value of _{.pill.red}c_.

Once more, paint over the complex plane to reveal the area in which sequences
converge. What shape do you expect to appear?

::: column(width=460)

    x-geopad.no-background(width=460 height=460 x-axis="-1.6,0.6,1" y-axis="-1.1,1.1,1" axes grid padding=10 label-suffix=",i")
      img(src="images/mandelbrot.png" width=460 height=460 style="position: absolute;")
      canvas(width=920 height=920 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        path.yellow(x="spiral(point(0,0),c)")
        circle.yellow.hidden(x="x1" target="x1")
        circle.yellow.hidden(x="x2" target="x2")

::: column.grow(width=232)

[{span.pill.red.step-target(target="")}_c_ = ${complex(c)}](target:c)

[{.pill.yellow}`x_0`](target:x0) = 0  
[{.pill.yellow}`x_1`](target:x1) `§= x_0^2 + c =` ${complex(x1)}  
[{.pill.yellow}`x_2`](target:x2) `§= x_1^2 + c =` ${complex(x2)}  
[{.pill.yellow}`x_3`](target:x3) `§= x_2^2 + c =` ${complex(x3)}  
[{.pill.yellow}`x_4`](target:x4) `§= x_3^2 + c =` ${complex(x4)}  
[{.pill.yellow}`x_5`](target:x5) `§= x_4^2 + c =` ${complex(x5)}  
_{span.vdots}…_

Converges!

:::

---
> id: mandel-history

This fractal is called the [__Mandelbrot Set__](gloss:mandelbrot-set), and when
rotated by 90°, it looks almost like a person, with head, body and two arms. It
was defined and drawn for the first time in 1978, in a research paper by the
mathematicians Robert Brooks and Peter Matelski:

    figure: x-media(src="images/mandelbrot.jpg" width=360 height=290)

A few years later, [Benoit Mandelbrot](bio:mandelbrot) used the powerful
computers at IBM to create a much more detailed visualisation of the fractal,
which was later named after him. The first printouts looked different from what
he expected – until he realised that the technicians working at the printers were
cleaning up the “fuzziness” around its edge, assuming that it was caused by dust
particles or printer errors, and not a defining characteristic of fractals.
[Continue](btn:next)

---
> id: mandel-zoom

Like all fractals, we can “zoom into” the Mandelbrot set forever, finding new
patterns at every scale. Here you can zoom into a part of the Mandelbrot set
that is called the __Seahorse valley__. Black points are _inside_ the Mandelbrot
set, where the sequence _converges_. Coloured points are _outside_ the
Mandelbrot set, where the sequence _diverges_. The different colours indicate
_how quickly_ these sequences diverge:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 var="scale")

---
> id: mandel-zoom-1

This slider consists of 27 individual images, up to a zoom level of over 14
quadrillion, or `2^54`. Altogether, they took almost 45 minutes to render on
a modern laptop. The Mandelbrot set can be created with just a single, simple
equation, `§x_n = x_(n-1)^2 + c`, yet it is infinitely complex and stunningly
beautiful.

    // TODO: Relationship between Julia and Mandelbrot sets
    // TODO: Number of fixed points in the different bulbs of the Mandelbrot set

---
> id: mandel-outro

::: column.grow

Bernoit Mandelbrot dedicated most of his life to the study of fractals, as well
as the mathematics of _roughness_ and _self-similarity_. His work had
applications in  physics, meteorology, neurology, economics, geology,
engineering, computer science, and many other fields.

In 1985, the Mandelbrot set appeared on the cover of the _Scientific American_
magazine, and since then it has become one of the most recognisable mathematical
shapes in the world. You can find it on T-shirts, in music videos, and as screen
savers, and it’s been referenced in popular books and movies.

::: column(width=220)

    x-media(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::


--------------------------------------------------------------------------------


## Space Filling Curves

> section: space-filling
> sectionStatus: dev

{.todo} Coming Soon!
