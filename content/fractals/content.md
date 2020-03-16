# Fractals

## Introduction

> section: introduction
> id: intro

When looking around nature, you might have noticed intricate plants like
these two examples:

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

{.fixme.reveal(when="blank-0")} Initially, these look highly complex shapes – but
when you look closer, you can see that they both follow a simple pattern:
Notice how the [individual parts](target:fractal) of both plants look exactly
the same as the entire plant, just smaller. The same pattern is repeated over
and over again, at smaller scales.

---
> id: self-similar

{.fixme} In mathematics, we call this _self-similarity_. The shapes that have this
property are called __Fractals__, and they are some of the most beautiful and
most bizarre objects in all of mathematics.

---
> id: fern

{.fixme} To create a fractal, you can start with a simple pattern and repeat it at
smaller scales, again and again, forever. 

::: column.grow

{.fixme} We can try to create our own fractals using geometry.

{.fixme} Depending on how you position the points, you can make completely different
kinds of shapes – looking like a tree, or like a fern.

::: column(width=320)

    x-geopad(width=320 height=320)
      canvas(width=640 height=640)
      svg
        circle(x="point(160,300)" name="a" hidden)
        circle(x="point(160,220)" name="b" hidden)
        circle.move.blue(name="c1" cx=150 cy=160)
        circle.move.blue(name="c2" cx=200 cy=200)
        path.thick.red(x="segment(a,b)")
        path.thick.blue.rounded(x="polyline(c1,b,c2)")
    x-slider(steps=8 var="steps")

:::

---
> id: triangle

::: column.grow(parent="right")

Another famous fractal is the __Sierpinski Triangle__. In this case, you start
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

{.fixme} The plants at the begining of this chapter _look_ like fractals, but it is
clearly impossible to create _true_ fractals in real life: if we keep repeating
the same pattern over and over again, smaller and smaller, we would eventually
get to cells, molecules or atoms which can no longer be divided.

{.fixme} At the beginning of this chapter, we saw two examples of plants that look almost
like fractals – ferns and broccoli. Of course, true fractals can never appear
in nature: if you zoom in further and further, you would eventually arrive at
molecules and atoms, which are no longer divisible.

However, using mathematics, we can think about the properties that real fractals
“would” have – and these are very surprising…

---

### Fractal Dimensions

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

First, let’s think about the dimension of Fractals. A line has dimension [[1]].
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

:::

---

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Now let's have a look at the Sierpinski triangle. If we scale it by a factor of
2, you can see that it's "area" increases by a factor of [[3]].

{.reveal(when="blank-0")} Let's say that _d_ is the dimension of the triangle.
Using the same pattern as above, we get `§2^d = 3`. In other words, _d_ =
[[`log_2(3)`|`log_3(2)`]] _≈ 1.585…_

:::

---

So … how can something have a dimension that is not an integer? It seems
impossible, but this is just one of the weird properties of fractals. In fact,
this is what gives fractals their name: they have a __fractional dimension__.

With every iteration, we remove some of the area of the Sierpinski triangle.
If we could do this infinitely many times, there would actually be no area
left: that's why the Sierpinski triangle is something in-between a 2-dimesional
area, and a 1-dimensional line.

---

### The History of Fractals

{.fixme} TODO

{.fixme} Fractals are very popular in mathematical visualisation, because they look very
beautiful even though they can be created using simple patterns like the ones
above.

---
> id: snowflake

### The Koch Snowflake

::: column.grow

We've already seen some plants that look like fractals, but there are many
other shapes in nature that also do. One great examples are snowflakes and
ice crystals.

{.fixme} images

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 credit="© Disney")

:::

---
> id: koch

::: column.grow

{.fixme} To create the __von Koch Snowflake__ you also start with a triangle
and repeatedly add a smaller triangle to every segment of its edge. After a
while, the edge looks exactly the same at small and large scales.

::: column(width=300)

    svg(width=300 height=300)
      path.var.blue(:draw="koch(steps)")
    x-slider(steps=5 var="steps")

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
> id: menger-sponge

### Menger Sponge

Fractals don't have to be "flat" – there many Fractals that look 3-dimensional.
One of the most famous examples is the __Menger sponge__, which is named after
the mathematician Karl Menger who first described it in 1926.

::: column.grow

{.fixme} description

::: column(width=320)

    x-menger-sponge(size=320 steps=3)

{.caption} This rendering consists of 8000 individual cubes.

:::

---
> id: coastlines

### Fractals in Nature and Technology

While true fractals can never appear in nature, there are many examples that
look _almost_ like fractals. We've already seen some plants and snowflake,
but are much larger-scale example are costlines.

::: column.grow

{.fixme} coastlines text

::: column(width=280)

{.fixme} coastlines interactive

:::

---
> id: nature

And here are many more examples of fractals in nature:

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

---

{.fixme} These shapes appear to be completely random, but – as with fractals – there is
an underlying pattern that determines how the shapes are formed and what they
will look like. Mathematics can help us understand the shapes better, and thus
has applications in medicine, biology, geology and meteorology.

::: column(width=300)

    // https://commons.wikimedia.org/wiki/File:BlueRidgePastures.jpg
    x-media(src="images/xxx.jpg" width=300 height=225 lightbox credit="Gary R. Huber, 3D Nature, CC BY-SA")

::: column.grow

{.fixme} Generate realistic computer-generated
graphics for movies or video games.

{.fixme}  Similar processes can be applied to all kinds of computer generated
graphics. The water, mountains and clouds in this image are generated entirely
by a computer using fractals. These methods can be used, for example, when
creating textures for computer games.

:::

{.fixme} The process can also be reversed and used for __image compression__. Usually,
pictures on a computer are saved by remembering the colour of every individual
pixel in the image. For large images this can take up a lot of disk space and we
want to reduce its size: we want to _compress_ it.

{.fixme} However some parts of the picture may look similar to fractals. Instead of
saving the pixels individually, a computer could try to find certain patterns
in the picture and only save these patterns – this could save a lot of space.
Methods of fractal image compression were developed by Michael Barnsley and
Alan Sloan in the 1980s.


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
recursive sequences. Again you start with a number, and then you apply the same
recursive formula again and again, to get the next number in the sequence.

One century ago, mathematicians were exploring what happens to specific
recursive sequences if you use complex numbers, and their discoveries were some
of the most surprising and beautiful results in all of mathematics…

---

real line

---

complex plane

---

### Julia Sets

Now let's make things a bit more complex. Rather than just squaring the previous
number, we also add a constant _c_.

If `c = 0`, we get the same as before, and the set of numbers that converge
is a circle.

---

The different shapes that are formed by colouring in the numbers
are called Julia Sets. 

---

### The Mandelbrot Set

To create a Julia set, we picked a fixed value for _c_, and then changed the
starting point of the sequence to see which ones converge and which ones don't.

In XXXX, the French mathematician [Benoit Mandelbrot](bio:mandelbrot) decided to
reverse this process: fix the starting point to always be 0, and instead change
the value of _c_ to

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
> id: mandel-zoom

Black points in the image below are part of the Mandelbrot set. Coloured areas
are not in the Mandelbrot set, and the colour indicates the speed with which the
respective sequence of complex numbers diverges (tends to infinity).

    .mandel-frame
      - i = 1;
      while i <= 19
        img(src="images/mandel/mandel-" + i + ".jpg" width=800 height=450)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=100 speed=0.5 var="scale")

---

Number of fixed points in every bulb

---

relationship between julia and mandelbrot
