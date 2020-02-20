# Fractals

## Introduction

> section: introduction
> id: intro

When looking around nature, you might have noticed plants like the two below.
Initially they seem like highly complex and intricate shapes, but when you
look closer, you might notice that they each follow a simple pattern:


::: column(width=320)

    img(src="images/fern.jpg" width=320 height=240)

{.caption} Here is a simple __Fern__. It consists of many small leafs that
branch off a larger one.

::: column(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)

{.caption} This is a __Romanesco broccoli__. It consists of smaller
[[cones|cubes|spheres]] spiralling around a larger one.

:::

---

Notice how the individual parts of both plants look exactly the same as the
full-sized plant, just smaller! The same pattern is repeated over and over
again.

Mathematicians call shapes with this property __Fractals__. They are some of the
most beautiful and most bizarre objects in all of mathematics, and they have
many interesting applications!

---

::: column.grow

We can try to create our own fractals using geometry.

Depending on how you position the points, you can make completely different
kinds of shapes – looking like a tree, or like a fern.

::: column(width=320)

    p.todo INTERACTIVE
    x-slider(steps=100)

:::

---

They look the same at various different scales – you can take a small extract of
the shape and it looks the same as the entire shape. This curious property is
called _self-similarity_.

To create a fractal, you can start with a simple pattern and repeat it at
smaller scales, again and again, forever. In real life, of course, it is
impossible to draw fractals with “infinitely small” patterns. However, we can
draw shapes which _look_ just like fractals. Using mathematics, we can think
about the properties a _real_ fractal would have – and these are very surprising.

Here you can see, step by step, how to create two famous fractals: the 
__Sierpinski Gasket__ and the __von Koch Snowflake__.

::: column(width=340)

    img(src="images/sierpinski.gif" alt="Sierpinski Gasket" width=340 height=340)

{.caption} To create the __Sierpinski Gasket__, start with a triangle and
repeatedly cut out the centre of every segment. Notice how, after a while,
every smaller triangle looks exactly the same as the whole.

::: column(width=340)

    img(src="images/snowflake.gif" alt="Koch Snowflake" width=340 height=340)

{.caption} To create the __von Koch Snowflake__ you also start with a triangle
and repeatedly add a smaller triangle to every segment of its edge. After a
while, the edge looks exactly the same at small and large scales.

:::

---

### Fractal Dimensions

The name “fractals” is derived from the fact that fractals don’t have a whole
number dimension – they have a _fractional_ dimension. Initially this may seem
impossible (What do you mean by a dimension like 2.5?), but it becomes clear
when we compare fractals with other shapes.

::: column(width=235)

    img(src="images/dimImg1.png" width=235 height=60)

::: column.grow

A line has dimension [[1]]. _{span.reveal(when="blank-0")} When scaling it by a
factor of 2, its length increases by a factor of `2^1 = 2`. Obviously!_

:::

---

::: column(width=235)

    img(src="images/dimImg2.png" width=235 height=94)

::: column.grow

A square has dimension [[2]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its area increases by a factor of `2^2 =` [[4]]._

:::

---

::: column(width=235)

    img(src="images/dimImg3.png" width=235 height=116)

::: column.grow

A square has dimension [[3]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its volume increases by a factor of `2^3 =` [[8]]._

:::

---

::: column(width=235)

    img(src="images/dimImg4.png" width=235 height=131)

::: column.grow

Now let's have a look at a fractal. When scaling a Sierpinski triangle by a
factor of 2, its area increases by a factor of [[3]]!

Looking at the blue increase factors above, we can deduce it must have a dimension between <span class="sansSerif red">1</span> and <span class="sansSerif red">2</span>. There aren&#8217;t any integers <em>in between</em> <span class="sansSerif red">1</span> and <span class="sansSerif red">2</span>, so the dimension of the Sierpinski Gasket has to be fractional. In fact, one can calculate that it is around <span class="sansSerif red">1.585</span>.

To calculate the exact dimension of fractals, we need exponents and logarithms.
Whenever we scale an object of dimension _d_ by a factor of _x_, its content
(length, area, …) changes by a factor of `x^d`. This is because the object is
scaled by _x_ in _d_ directions.

When we scale the Sierpinski Gasket by a factor of 2, its area triples.
Therefore, we get the equation `2^d = 3`. We can solve this equation to find
that the dimension of the Sierpinski Gasket is `d = log_2(3) = 1.585…`

:::

    <img src="resources/Fractals/snowflake-scale.png" width=210 height=50/>

When we scale one edge segment of the von Koch Snowflake by a factor of 3, its
length quadruples. Therefore we get the equation `3^d=4`. Like before, we can
solve this equation to find that the dimension of the von Koch Snowflake is
`d = log_3(4) = 1.262…`

Note that even though they are called _fractals_, these dimensions are not
_fractions_. They are, in fact, [irrational numbers](/world/Real_Irrational_Imaginary).

Fractals are very popular in mathematical visualisation, because they look very
beautiful even though they can be created using simple patterns like the ones
above. You can zoom into a fractal, and the patterns and shapes will continue
repeating, forever.

---
> id: applications

### Fractals in Nature and Technology

At the beginning of this chapter, we saw two examples of plants that look almost
like fractals – ferns and broccoli. Of course, true fractals can never appear
in nature: if you zoom in further and further, you would eventually arrive at
molecules and atoms, which are no longer divisible.

However, there are many more examples in nature that look _almost_ like
fractals – for example costlines.


XXXX

---

Here are some other examples of fractals in nature:

::: column(width=200)

    img(src="images/nature/blood.jpg" width=200 height=200)

{.caption} Blood Vessels

::: column(width=200)

    img(src="images/nature/snow.jpg" width=200 height=200)

{.caption} Snowflakes

::: column(width=200)

    img(src="images/nature/coast.jpg" width=200 height=200)

{.caption} Cracks in Glass or on CDs

::: column(width=200)

    img(src="images/nature/rivers.jpg" width=200 height=200)

{.caption} River Networks

::: column(width=200)

    img(src="images/nature/clouds.jpg" width=200 height=200)

{.caption} Clouds

::: column(width=200)

    img(src="images/nature/mountains.jpg" width=200 height=200)

{.caption} Mountain Ranges

:::

These shapes appear to be completely random, but – as with fractals – there is
an underlying pattern that determines how the shapes are formed and what they
will look like. Mathematics can help us understand the shapes better, and thus
has applications in medicine, biology, geology and meteorology.

::: column(width=300)

    img(src="images/rendering.jpg" width=300 height=225)

::: column.grow

At the beginning of this article we created a very realistic snowflake using a
fractal. Similar processes can be applied to all kinds of computer generated
graphics. The water, mountains and clouds in this image are generated entirely
by a computer using fractals. These methods can be used, for example, when
creating textures for computer games.

:::

The process can also be reversed and used for __image compression__. Usually,
pictures on a computer are saved by remembering the colour of every individual
pixel in the image. For large images this can take up a lot of disk space and we
want to reduce its size: we want to _compress_ it.

However some parts of the picture may look similar to fractals. Instead of
saving the pixels individually, a computer could try to find certain patterns
in the picture and only save these patterns – this could save a lot of space.
Methods of fractal image compression were developed by Michael Barnsley and
Alan Sloan in the 1980s.



--------------------------------------------------------------------------------



## The Sierpinski Gasket

> section: sierpinski
> id: sierpinski

::: column.grow

One of the fractals we looked at in the previous chapter was the __Sierpinski
triangle__. It can be created by starting with one large, equilateral
triangle, and then repeatedly cutting smaller triangles out of its center.

But, as it turns out, the Sierpinski triangle appears in many different areas
of mathematics, and there are numerous other methods to construct it. In this
chapter, we will explore some of them!

::: column(width=300)

    img(src="images/sierpinski.gif" width=300 height=300)
    x-slider(steps=100)

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

In the Chaos Game, we start with an empty triangle and select a random point in 
the middle. We then choose one of the three vertices of the triangle at random,
and mark the point at the centre of the line from the random point to the
vertex. Then we repeat the process, starting with that new point…

{.todo} Animation Coming Soon

---
> id: cellular

### Cellular Automaton

The cellular automaton is a grid consisting of black and white squares. We start
with one black square in the first row; the squares in all following rows are
coloured automatically depending on the three squares immediately above.

The eight rules at the top determine what a square (red) will look like,
depending on the three squares above. Modify the rules by clicking them, and
try to find the set of rules that produces something like the Sierpinski Gasket.

    <div id="fracAutoRules">
      <div class="fracAutoRule" id="fracRule1"></div>
      <div class="fracAutoRule" id="fracRule2"></div>
      <div class="fracAutoRule" id="fracRule3"></div>
      <div class="fracAutoRule" id="fracRule4"></div>
      <div class="fracAutoRule" id="fracRule5"></div>
      <div class="fracAutoRule" id="fracRule6"></div>
      <div class="fracAutoRule" id="fracRule7"></div>
      <div class="fracAutoRule" id="fracRule8"></div>
      <div class="clear"></div>
    </div>
    <table id="fracAutoTable"></table>

---

## The Mandelbrot Set

> section: mandelbrot
> id: mandelbrot

One of the most famous and most intriguing fractals is the __Mandelbrot Set__,
named after the French mathematician Benoit Mandelbrot (1924 – 2010). When
rotated by 90°, it looks a bit like a person, with head, body and two arms. Here
is how you can create it:

* We start with the plane of complex numbers. Every point on the plane is
  represented by a different number _c_, and we repeat the following steps for
  every single point:
* First we create an infinite [sequence](/course/sequences/introduction) of
  numbers according to the following pattern: We start with 0. Every new number
  is the previous number squared, plus _c_. In mathematical notation, we have a
  sequence `z_n`, where `z_(n+1) = z_n^2 + c`.
* If this sequence of numbers always increases and tends to infinity (it
  _diverges_), we colour the point white. However if the sequence does not
  increase beyond a certain limit (if it is _bounded_), we colour the point black.

We repeat this process for every point in the coordinate system. The collection
of all the black points is the Mandelbrot set. Move the blue pin below to
explore what happens at various points:

    <div class="box">
      <div class="llarg" id="mandelMove">
        <img src="resources/Fractals/mandelbrot.png" width="423" height="317" alt="mandelbrot set" style="width: 100%; height: auto;">
        <div id="mandelTarget"></div>
      </div>
      <div class="rsmal frame framePTextWrap" id="mandelCalculation">
        <p>For the point <em>c</em> = <strong class="red">1</strong> we create the following sequence:</p>
      
        <table border="" id="fractTargetTable">
          <tr>
            <td>0<sup>2</sup></td>
            <td>+</td>
            <td><strong class="red">1</strong></td>
            <td>=</td>
            <td><strong class="green" id="green1">1</strong></td>
          </tr>
          <tr>
            <td><strong class="green" id="green2">1</strong><sup>2</sup></td>
            <td>+</td>
            <td><strong class="red">1</strong></td>
            <td>=</td>
            <td><strong class="cyan" id="cyan1">2</strong></td>
          </tr>
          <tr>
            <td><strong class="cyan" id="cyan2">2</strong><sup>2</sup></td>
            <td>+</td>
            <td><strong class="red">1</strong></td>
            <td>=</td>
            <td><strong class="blue" id="blue1">5</strong></td>
          </tr>
          <tr>
            <td><strong class="blue" id="blue2">5</strong><sup>2</sup></td>
            <td>+</td>
            <td><strong class="red">1</strong></td>
            <td>=</td>
            <td><span id="fracTargetFinal">26</span></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&#8230;</td>
          </tr>
        </table>
      
        <p id="MandelIn">This sequence will always increase and tends to infinity, so <strong class="red">1</strong> is not part of the Mandelbrot set. The point is coloured white.</p>
        <p id="MandelNo" style="display: none;">This sequence is always bounded, so <strong class="red">1</strong> is part of the Mandelbrot set. The point is coloured black.</p>
      </div>
    </div>

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
respective sequence of complex numbers diverges (tends to infinity). ${scale}

    .mandel-frame
      - i = 1;
      while i <= 19
        img(src="images/mandel/mandel-" + i + ".jpg" width=800 height=450)
        - i += 1;
      .scale.var Scale ${pow(scale)}
    x-slider(steps=100 speed=0.5 var="scale")

---

### Julia Sets

{.todo} Under Construction
