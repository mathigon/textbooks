# Fractals

## Introduction

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

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

One of the simplest patterns might be a [{.red} line segment](target:s1),
with [{.blue} two more segments](target:s2) branching off one end. If we
repeat this pattern, both of these blue segments will also have two more
branches at their ends.

You can move the [{.blue} blue dots](target:dot) to change the length and angle of all
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
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---
> id: triangle

::: column.grow(parent="right")

Another famous fractal is the [__Sierpinski triangle__](gloss:sierpinski-triangle).
In this case, we start with a large, equilateral triangle, and then repeatedly
cut smaller triangles out of the remaining parts.

{.reveal(when="slider=0")} Notice how the final shape is made up of [{.red} three
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
    x-slider(steps=8 :bind="steps")

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
> id: dimension

### Fractal Dimensions

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

First, let’s think about the dimension of fractals. A line has dimension [[1]].
_{span.reveal(when="blank-0")} When scaling it by a factor of 2, its length
increases by a factor of `2^1 = 2`. Obviously!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

A square has dimension [[2]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its area increases by a factor of `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

A cube has dimension [[3]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its volume increases by a factor of `2^3 =` [[8]]._
_{span.reveal(when="blank-1")} Notice that the larger cube in the image
consists of 8 copies of the smaller one!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Now let’s have a look at the Sierpinski triangle. If we scale it by a factor of
2, you can see that it’s “area” increases by a factor of [[3]].

{.reveal(when="blank-0")} Let’s say that _d_ is the dimension of the Sierpinski
triangle. Using the same pattern as above, we get `2^d = 3`. In other words,
_d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")}≈ 1.585…_

:::

---
> id: dimension-4

But wait … how can something have a dimension that is not an integer? It seems
impossible, but this is just one of the weird properties of fractals. In fact,
this is what gives fractals their name: they have a __fractional dimension__.

With every iteration, we remove some of the area of the Sierpinski triangle.
If we could do this infinitely many times, there would actually be no area
left: that’s why the Sierpinski triangle is something in-between a two-dimensional
area, and a one-dimensional line.

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

    x-img(src="images/snow-1.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120 alt="Snowflake")

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120 alt="Snowflake")

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
von Koch](bio:koch). Notice, once again, that [{.blue} small sections](target:t2) of the
edge of the snowflake look exactly the same as [{.blue} larger sections](target:t1).

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

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

::: tab(parent="sticky")

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
factor of [[4]] at every step. At the same time, the area of these new triangles
decreases by a factor of [[9]] at every step.

{.reveal(when="blank-3 blank-4")}
Let’s say that the [{.purple} first triangle](->#koch-0) has an area of 1. Then the total
area of the [{.purple} next three triangles](->#koch-1) is `3 × 1/9 = 1/3`. The following
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
we multiply the perimeter by `§4/3` at every step, and we do this infinitely
many times._

:::

---
> id: frozen

    //- ::: column.grow

It is almost unthinkable that you can have a shape with a _finite_ area and also
an _infinite_ circumference – but this is just one of the many unexpected
properties of fractals.

Can you come up with any other ways to create your own fractals?
[Continue](btn:next)

    //- ::: column(width=352)
    //-     x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")
    //- {.caption} “My soul is spiralling on frozen fractals all around…”
    //- :::

---
> id: menger-sponge

### Menger Sponge

Fractals don’t have to be “flat”, like many of the examples above. One of the
most famous fractals that look three-dimensional is the __Menger sponge__, named
after the mathematician [Karl Menger](bio:menger) who first described it in 1926.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

We start with a solid cube, and repeatedly drill smaller and smaller holes into
its sides. Every new iteration of holes has [[`1/3`|`1/2`|`1/4`]] the width of
the previous iteration of holes.

{.reveal(when="blank-0")} A `3×3×3` cube consists of 27 smaller cubes, but here
we have removed some of these. The Menger sponge consists of [[20]] copies of
itself, which are 3 times smaller.

{.reveal(when="blank-1")} Now we can try to calculate the dimension _d_ of the
Menger sponge just like we did for the Koch snowflake above. In this case we get
`3^d = 20`, or `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1 slider-0")} If you imagine cutting out more and more holes,
infinitely many times, there would be no actual volume left. That’s why the cube
is “not quite” three-dimensional!
[Continue](btn:next)

---
> id: coastlines

### Fractal Coastlines

One of the key characteristics of all the fractals we’ve seen so far is that
you can “zoom in” forever and always find new patterns. Around 1920, the
British mathematician [Lewis Fry Richardson](bio:richardson) realised that the
same is true for the border or coastline of many countries.

You start with the basic shape of the country, and, as you zoom in, you add
river inlets, bays and estuaries, then individual cliffs, rocks, pebbles, and so
on:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180 alt="Coastline")

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180 alt="Coastline")

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180 alt="Cliffs")

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180 alt="Beach")

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180 alt="Pebbles")

:::

[Continue](btn:next)

---
> id: coastlines-1

::: column.grow

This is a significant problem when trying to calculate the length of the border
of a country – how do you decide how far to zoom in, and which nooks and
crannies to include?

One way we could measure the length of Britain’s coastline, for example, is to
take a long ruler, walk all the way around its beaches, and then add up all the
distances.

If the ruler is ${rulers[index]}{index|0|0,8,1}km long, we have to use it
${count} times, so we get a total coastline of ${count} × ${rulers[index]} =
${count * rulers[index]}km.

{.reveal(when="var-0")} We can just keep going, with smaller and smaller rulers,
and each time our result for the length of the coastline would get a bit
longer. Just like the Koch Snowflake before, it seems that Britain’s coastline
is infinitely long! This is often called the __coastline paradox__.
[Continue](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---
> id: coastline-grid

A few decades later, the mathematician [Benoit Mandelbrot](bio:mandelbrot)
stumbled upon Richardson’s work in a discarded library book, while working at
IBM. He recognised its significance, and also how it relates to more recent
research on fractals and dimensions.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

The coastline of Britain certainly “looks” fractal, but it is not
_self-similar_, like other fractals we’ve seen before. In order to find
its size, we can draw it on a grid and count the number of cells that
it intersects with.

{.r.reveal(when="slider-0")} Initially, there are [{.b}88](pill:yellow)
intersecting cells. If we scale the coastline by a factor of 2, there are
[{.b}197](pill:yellow) intersecting cells – more than twice as many!
[Continue](btn:next)

{.r.reveal(when="next-0")} The size of the coastline has increased by a factor
of `§197/88`. Like before, this means that the dimension of the coastline is

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16`

:::

---
> id: coastline-dimension-1

If we repeat this with larger grids, we’d find that the dimension of Britain’s
coastline is actually approximately 1.21. Mandelbrot realised that this fractal
dimension is also a measure of the __roughness__ of a shape – a new concept, for
which he found important applications in many other areas of mathematics and
science.

---
> id: nature

### More Fractals in Nature and Technology

While true fractals can never appear in nature, there are many objects that
look _almost_ like fractals. We’ve already seen plants, snowflakes and
coastlines, and here are some more examples:

::: column(width=200)

    // https://visibleearth.nasa.gov/images/72291/the-hindu-kush
    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC" alt="Mountain range")

{.caption} Mountain range in central Asia

::: column(width=200)

    // https://de.wikipedia.org/wiki/Datei:Sundarbans.jpg
    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA" alt="River delta")

{.caption} Ganges river delta in India

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox alt="Lightning bolts")

{.caption} Lightning bolts

::: column(width=200)

    // https://commons.wikimedia.org/wiki/File:Fundus_photograph_of_normal_right_eye.jpg
    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA" alt="Blood vessels")

{.caption} Blood vessels in the retina

::: column(width=200)

    // https://www.flickr.com/photos/usgeologicalsurvey/11188773133
    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey" alt="Grand Canyon")

{.caption} Grand Canyon in the USA

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox alt="Clouds")

{.caption} Clouds

:::

All these objects might appear completely random, but, just like fractals, there
is an underlying pattern that determines how they are formed. Mathematics can
help us understand the shapes better, and fractals have applications in fields
like medicine, biology, geology and meteorology.
[Continue](btn:next)

    // TODO https://en.wikipedia.org/wiki/Fractal_antenna
    // TODO Fractals in African Art

---
> id: technology

::: column(width=300)

    // https://commons.wikimedia.org/wiki/File:Fractal_terrain_texture.jpg
    x-img(src="images/terrain.jpg" width=360 height=270 lightbox alt="Computer-generated fractal terrain with mountains and water")

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

{.r.reveal(when="slider-0")} Wacław Sierpiński was the first mathematician to think about the
properties of this triangle, but it has appeared many centuries earlier in artwork, patterns and
mosaics.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---
> id: sierpinski-history

Here are some examples of floor tilings from different churches in Rome:

::: column(width=140 parent="padded-thin")

    // https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Cosmedin_(Roma).jpg
    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    // Permission from Elisa Conversano
    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    // https://www.cattedraledianagni.it/
    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it" alt="Mosaic Floor with Sierpinski Triangle")

::: column(width=140)

    // http://matheuro.overblog.com/2014/05/sierpinski-s-triangle-the-nave-of-the-roman-basilica-of-santa-maria-in-comesdin.html
    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire" alt="Mosaic Floor with Sierpinski Triangle")

:::

As it turns out, the Sierpinski triangle appears in a wide range of other areas
of mathematics, and there are many different ways to generate it. In this
chapter, we will explore some of them!
[Continue](btn:next)


---
> id: pascal
> goals: select

### Pascal’s Triangle

You might already remember the Sierpinski triangle from our chapter on
[__Pascal’s triangle__](gloss:pascals-triangle). This is a number pyramid in
which every number is the sum of the two numbers above. Tap on all the _even_
numbers in the triangle below, to highlight them – and see if you notice a
pattern:

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

If two adjacent cells are divisible by 2, then their sum in the cell underneath
must also be divisible by 2 – that’s why we can only get coloured triangles
(or single cells). Of course, we can also try colouring all cells divisible by
numbers _other than 2_. What do you think will happen in those cases?
[Continue](btn:next)

---
> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Here you can see a tiny version of the first 128 rows of Pascal’s triangle.
We have highlighted all cells that are divisible by ${n}{n|2|2,40,1} – what
do you notice?

{.reveal(when="var-0")} For every number, we get a different triangular pattern
similar to the Sierpinski triangle. The pattern is particularly regular if we
choose a [[prime number|triangle number|Fibonacci number]].
_{span.reveal(when="blank-0")} If the number has *many different* prime factors,
the pattern looks more random._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---
> id: chaos-game
> goals: point play

### The Chaos Game

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Here you can see the three vertices of an equilateral triangle. Tap anywhere
in the grey area to create a fourth point.

{.r.reveal(when="point")} Let’s play a simple game: we pick one of the vertices
of the triangle at random, draw a line segment between our point and the vertex,
and then find the [{.red}midpoint](target:p1) of that segment.
[Continue](btn:next)

{.r.reveal(when="next-0")} Now we repeat the process: we pick another random
vertex, draw the segment from our last point, and then find the
[{.green}midpoint](target:p2). Note that we colour these new points based
on the colour of the vertex of the triangle we picked.
[Continue](btn:next)

{.reveal(when="next-1")} So far, nothing surprising has happened – but watch
as we repeat the same process many more times:

{.text-center.reveal.var(when="next-1")}
_{button.btn.btn-red(@click="play()")} Add 1000 steps_

:::

---
> id: fractal-builder
> goals: s1 s2 shape play

This process is called the __Chaos Game__. There might be a few stray points at
the beginning, but if you repeat the same steps many times, the distribution of
dots starts to look exactly like the Sierpinski triangle!

There are many other versions of it – for example, we could start with a square
or a pentagon, we could add additional rules like not being able to select the
same vertex twice in a row, or we could pick the next point at a ratio other
than `§1/2` along the segment. In some of these cases, we’ll just get a random
distribution of dots, but in other cases, we reveal even more fractals:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Did you discover the [Sierpinski
carpet](action:carpet()) or this [pentagonal snowflake](action:snowflake())
based on the [__golden ratio__](gloss:golden-ratio)?

---
> id: cellular
> goals: sierpinski

### Cellular Automata

A __cellular automaton__ is a grid consisting of many individual cells. Every
cell can be in different “states” (e.g. different colours), and the state of
every cell is determined by its surrounding cells.

In our example, every cell can be either black or white. We start with one row
that contains just a single black square. In every following row, the colour of
each cell is determined by the three cells immediately above. Tap the eight
possible options below to flip their colour – can you find a set of rules that
creates a pattern similar to the Sierpinski triangle?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} There are two choices for each of the eight
options, which means there are `2^8 =` [[256]] possible rules in total. Some,
like [Rule 126](action:setRule('01111110')), look like the Sierpinski triangle.
Others, like [Rule 30](action:setRule('01111000')), look completely chaotic.
It was discovered by [Stephen Wolfram](bio:wolfram) in 1983, and computers can
even use them to generate random numbers!

---
> id: cellular-1

::: column.grow

Cellular automata show how highly complex patterns can be created by very simple
rules – just like fractals. Many processes in nature also follow simple rules,
yet produce incredibly complex systems.

In some cases, this can lead to the appearance of patterns that look just like
cellular automata, for example the colours on the shell of this snail.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0" alt="Shell of a sea snail")

{.caption} Conus textile, a venomous sea snail

:::

---
> id: tetrahedra

### Sierpinski Tetrahedra

There are many variants of the Sierpinski triangle, and other fractals with
similar properties and creation processes. Some look two-dimensional, like the
_Sierpinski Carpet_ you saw above. Others look three-dimensional, like these
examples:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Pyramid

:::


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
starting value `x_0`:

::: column.frame.blue.text-center(width=212 parent="padded-thin")

If `x_0 > 1`, the sequence [[diverges|converges]]:
_{span.reveal(when="blank-0")}it just keeps growing, up to infinity._

::: column.frame.blue.text-center(width=212)

If `x_0` is between –1 and 1, the sequence [[converges|diverges]].

::: column.frame.blue.text-center(width=212)

If `x_0 < -1`, the sequence [[diverges|converges]].

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
let’s colour the corresponding point on the plane in [blue](pill:blue):

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} As you can see, the sequence
converges as long as `pill(x_0,"yellow","x0")` lies [[inside the unit circle|
outside the unit square|above the *x*-axis]] _{span.reveal(when="blank-0")}(the
circle with radius 1, centred at the origin)._

---
> id: julia-1

Now let’s make things a bit more difficult. Rather than just squaring the
previous number, we also add a constant [_c_](pill:red) every time (which can be
any complex number). In other words, `§x_n = x_(n-1)^2 + c`. Do you think we’ll
still get a circle of convergence? What other shapes do you think we might see?
[Continue](btn:next)

---
> id: julia-2

In this diagram, you can move the position of `pill(x_0,"yellow","x0")` as well
as the value of `pill(c,"red","c")`:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

We already know what happens if [`c = 0`](action:animate(0,0)) – that’s the same as the example
above. The sequence convergence as long as `x_0` lies within the unit circle.

As soon as we change the value of _c_, something wonderful happens. The circle transforms into a
highly complex, fractal shape.

When [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), the shape divides into infinitely many tiny
elements arranged in spirals.

::: div
In some cases, the sequence doesn’t converge to a _single
point_ – instead it reaches a cycle of multiple points, like a triangle. These
cycles are called __orbits__.

Points that are coloured blue mean that the corresponding sequence either
converges or has an orbit (we say that it is __bounded__). Points that are left
white mean the corresponding sequence __diverges__: it is not bounded, and
eventually blows up to infinity.
:::

What else can you find? Have a look at the patterns when [`c = 0.4 + 0.21i`](action:animate(0.4,0.21))
or when [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). There are also some values of _c_ where
_every_ sequence diverges, so the entire complex plane remains white.

:::

---
> id: julia-3

The different shapes that are formed by colouring in the numbers are called
[__Julia sets__](gloss:julia-set). They were discovered independently by two
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

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox alt="Julia set")

{.caption} `c = 0.285 + 0.01"i"`

:::

[Continue](btn:next)

---
> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### The Mandelbrot Set

When creating the different Julia sets, you might have noticed that there were
some values of _c_ for which every sequence diverges, and the entire complex
plane remains white. A few decades after Julia and Fatou, a new generation of
mathematicians tried to map what these areas looked like.

In the previous example, we chose a fixed value for `pill(c,"red","c")`, and then
changed the position of `pill(x_0,"yellow","x0")` to colour the plane. Now let’s fix
the value of `pill(x_0 = 0,"yellow","x0")`, and instead change the value of
`pill(c,"red","c")`.

Once more, paint over the complex plane to reveal the area in which sequences
remain bounded. What shapes do you expect to appear?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---
> id: mandel-history

This fractal is called the [__Mandelbrot set__](gloss:mandelbrot-set), and when
rotated by 90°, it looks almost like a person, with head, body and two arms. It
was defined and drawn for the first time in 1978, in a research paper by the
mathematicians Robert Brooks and Peter Matelski:

    figure: x-img(src="images/printout.jpg" width=360 height=290 credit="© Princeton University Press" alt="Mandelbrot set drawing")

A few years later, [Benoit Mandelbrot](bio:mandelbrot) used the powerful
computers at IBM to create a much more detailed visualisation of the fractal,
which was later named after him. The first printouts looked different from what
he expected – until he realised that the technicians working at the printers
were cleaning up the “fuzziness” around its edge, assuming that it was caused by
dust particles or printer errors, and not a defining characteristic of fractals!
[Continue](btn:next)

---
> id: mandel-zoom

Like all fractals, we can “zoom into” the Mandelbrot set forever, finding new
patterns at every scale. Here you can zoom into a part of the Mandelbrot set
that is called the __Seahorse valley__. Black points are _inside_ the Mandelbrot
set, where the sequence is bounded. Coloured points are _outside_ the Mandelbrot
set, where the sequence diverges, and the different colours indicate _how
quickly_ it grows to infinity:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---
> id: mandel-zoom-1

This slider consists of 27 individual images, up to a zoom level of over 14
quadrillion, or `2^54`. Altogether, they took almost 45 minutes to render on
a modern laptop. The Mandelbrot set can be created with just a single, simple
equation, `§x_n = x_(n-1)^2 + c`, yet it is infinitely complex and stunningly
beautiful.

---
> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

As you move the value of [{.red} _c_](target:c) around the Mandelbrot set,
you might notice a curious property:

* All sequences within the [main body](target:bulb0) of the Mandelbrot set
  [[converge|diverge|reach an orbit]] _{span.reveal(when="blank-0")}to a single point._
* {.reveal(when="blank-0")} The sequences within the [large bulb](target:bulb1)
  at the top [[reach an orbit|converge|diverge]] _{span.reveal(when="blank-1")}
  consisting of [[3]] points._
* {.reveal(when="blank-2")} Sequences in [this smaller bulb](target:bulb2) have
  orbits of length [[5]].

:::

{.reveal(when="blank-3")} Every bulb has a differently-sized orbit, with smaller
bulbs having more and more points in their orbits. The size of these orbits are
closely related to the __Logistic Map__, an important concept in [Chaos
theory](/course/chaos).

    // TODO: Generic pan+zoom (see http://mandel.gart.nz)
    // TODO: Relationship between Julia and Mandelbrot sets
    // TODO: Fibonacci Numbers in the Mandelbrot sets

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
savers, and it’s been referenced in many popular books and movies.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American" alt="Scientific American Magazine Cover")

:::


--------------------------------------------------------------------------------


## Space Filling Curves

> section: space-filling
> sectionStatus: dev

{.todo} Coming Soon!
