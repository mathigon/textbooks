# Transformations and Symmetry

> stage: intermediate
> description: Symmetry can be seen everywhere in nature – but it even underlies
>   completely invisible laws of nature. The mathematical properties of symmetry
>   explain why that is the case.
> warning: true

---
> id: intro

## Introduction

Many geometric concepts, like lines and points, were "invented" by
mathematicians. Symmetry, on the other hand, is everywhere around us. Almost all
plants, animals, and even we humans are symmetric.

::: column(width=200)
    x-media(src="images/butterfly.jpg" credit="© Depositphotos / okiepony" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/lion.jpg" credit="© Depositphotos / DeborahKolb" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/starfish.jpg" credit="© Depositphotos / EcoPic" width=200 height=200 lightbox)
:::

Over time, we've imitated nature's symmetry in art, architecture, technology
and design. Symmetric shapes and patterns just seems to look _more beautiful_
than non-symmetric ones.

::: column(width=200)
    x-media(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/window.jpg" width=200 height=200 lightbox)
:::

But symmetry is much more important that simply _looking beautiful_. It lies at
the very foundations of our universe, and can even explain the most fundamental
laws of physics.

Symmetry is a very intuitive concept, but describing it mathematically is more
difficult than you might think. To start with, we have to learn about
_transformations_.

---
> id: transformations
> goals: t1 t2 t3

## Transformations

A [__transformation__](gloss:transformation) is a specific set of rules that
convert one geometric figure into another one. Here are a few examples:

::: column.r(width=200)
    .animation
      include svg/transform-1.svg
      .play-btn
::: column.r(width=200)
    .animation
      include svg/transform-2.svg
      .play-btn
::: column.r(width=200)
    .animation
      include svg/transform-3.svg
      .play-btn
:::

{.reveal(when="t1 t2 t3")} The result of a transformation is called the
__image__. The image of a figure `A` is usually denoted by `A'` (pronounced as
“A prime”).

---
> id: rigid

Initially, we will just think about transformations that don’t change the
original figure’s size and shape. Imagine that it is made out of a solid
material like wood or metal: we can move, turn and flip it, but we can’t stretch
or otherwise deform it. These transformations are called
[__rigid transformations__](gloss:rigid-transformation).

Which of these transformations are rigid?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

For rigid transformations, the image is always
[[congruent to|the same as|opposite to]] the original. There are three different
types of rigid transformations:

::: column.grow.r(width=200)
    .animation
      include svg/rigid-1.svg
      .play-btn

{.text-center} A transformation that _moves_ a shape around is called a
[__translation__](gloss:translation).

::: column.grow.r(width=200)
    .animation
      include svg/rigid-2.svg
      .play-btn

{.text-center} A transformation that _flips_ a shape over is called a
[__reflection__](gloss:reflection).

::: column.grow.r(width=200)
    .animation
      include svg/rigid-3.svg
      .play-btn

{.text-center} A transformation that _spins_ a shape is called a
[__rotation__](gloss:rotation).
:::

---
> id: rigid-2

We can also combine multiple types of transformation to create more complex
ones – for example, first a translation and then a rotation.

But first, let's have a look at each of these transformations in more detail.

---
> id: translations

### Translations

A [__translation__](gloss:translation) is a transformation that moves every
point of a figure by the same distance in the same direction.

In the coordinate plane, we can specify a translation by how far the shape is
moved along the _x_-axis and the _y_-axis. For example, a transformation by
(3, 5) moves a shape by 3 along the _x_-axis and by 5 along the _y_-axis.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20): svg
      path.fill(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" style="fill: #d94c44; opacity: 0.6" label-colour="white")
      path.fill(x="s1.shift(5,-1)" style="fill: #d94c44" label="A'" label-colour="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Translated by ([[5]], [[1]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20): svg
      path.fill.red(x="circle(point(7,4),1.5)" name="s2" label="B" style="opacity: 0.6" label-colour="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-colour="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Translated by ([[-4]], [[2]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20): svg
      path.fill(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C" style="fill: #822b9b; opacity: 0.6" label-colour="white")
      path.fill(x="s3.shift(4,2)" style="fill: #822b9b" label="C'" label-colour="white")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Translated by ([[4]], [[-2]])
:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Now it’s your turn – translate the following shapes as shown:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e4e4e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e4e4e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Translate by (3, 1) _{span.check(when="drag-0")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e4e4e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e4e4e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Translate by (–4 –2) _{span.check(when="drag-1")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e4e4e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e4e4e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Translate by (5, –1) _{span.check(when="drag-2")}_
:::

---
> id: reflections

### Reflections

A [__reflection__](gloss:reflection) is a transformation that “flips” a shape
over a line, turning it into its mirror image. The line is called the __line of
reflection__.

Draw the line of reflection in each of these examples:

::: column(width=220)
{.todo} EXAMPLE - mountain/lake
::: column(width=220)
{.todo} EXAMPLE - straight line
::: column(width=220)
{.todo} EXAMPLE - diagonal line
:::

---
> id: reflections-1

Now it’s your turn – draw the reflection of each of these shapes:

::: column(width=220)
{.todo} EXAMPLE
::: column(width=220)
{.todo} EXAMPLE
::: column(width=220)
{.todo} EXAMPLE
:::

---
> id: reflections-2

Notice that if a point lies on the line of reflection, its image is
[[the same as|congruent to|smaller than]] the original point.

---
> id: reflections-3

In all of the examples above, the line of reflection was horizontal or vertical,
which made it easy to draw the reflections. If that is not the case, the
construction becomes more complicated:

::: column(width=300)
{.todo} INTERACTIVE ANIMATION
::: column.grow
We have to reflect every point individually, and then connect them again with
lines. To start with, lets draw a line perpendicular to the line of reflection,
that goes through the first point.

The image of the point will lie on this perpendicular as well. It will have the
same distance from the line of reflection as the original point, but on the
opposite side. We can use a compass (or a ruler) to find it.

Now let’s do the same for all the other points.

The rest should be easy: you just need to connect the points in the image, so
that they match the original shape.
:::

---
> id: rotations

### Rotations

A [__rotation__](gloss:rotation) is a transformation that “turns” a shape by a
certain angle around a fixed point. That point is called the __center of
rotation__. Rotations can be clockwise or counterclockwise.

Use the protractor tool to find the angle of these rotations:

::: column(width=220)
{.todo} EXAMPLE
::: column(width=220)
{.todo} EXAMPLE
::: column(width=220)
{.todo} EXAMPLE
:::

---
> id: rotations-1

Drawing a rotation is a bit more difficult. Like for reflections, we first have
to rotate every point in a shape individually, and then connect the lines in the
image.

::: column(width=300)
{.todo} INTERACTIVE ANIMATION
::: column.grow
We want to rotate this shape by 60° anti-clockwise around the center of
rotation C.

Let's start with point A. First, we line up a protractor along the center of
rotation and A.

We have to mark the angle at 60°, and draw a line towards C.

The image of A must lie on this line, and have the same distance from the
center of rotation as A. We can use a compass (or a ruler) to find it.

For simplicity, we can remove the previous line and point. Let's do the same
for all the other points.

The rest should be easy: like before, you just need to connect the points in the
image, to match the original shape.
:::

---
> id: composition

### Composition of Transformations

Of course, we can combine multiple translations, reflections and rotations to
create more complex transformations.

{.todo} EXAMPLE

However, as it turns out, it doesn’t matter how many different transformations
you combine: you can always find another transformation that does the same in
one go!

{.todo} EXAMPLE

Combining two reflections is particularly interesting. There are two different
cases we need to consider:

::: column.grow
If the two lines of reflection are parallel, the result is a single translation.
The direction of the translation is perpendicular to the lines of reflection,
and the distance is twice the distance between the lines of reflection.

{.todo} ANIMATION
::: column.grow
If the two lines of reflection intersect, the result is a single rotation. The
center of rotation is the intersection between the lines of reflection, and the
angle is twice the angle between the lines of reflection.

{.todo} ANIMATION
:::

---
> id: composition-1

Transformations are an important concept in many parts of mathematics, not just
geometry. For example, you can transform [_functions_](gloss:function) by
shifting or rotating their [graphs](gloss:function-graph). Other transformations
don't even have a visual representation at all. You'll learn more about these
transformations in future chapters, but for now let's move on to symmetry.

---
> id: symmetry
> goals: play-0 play-1

## Symmetry

Symmetry is everywhere around us, and an intuitive concept: different parts of
an object look _the same_ in some way. But using transformations, we can give a
much more precise, mathematical representation of what symmetry _really_ means:

{.definition} An object is _symmetric_ if it looks the same, even after applying
a certain transformation.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      .play-btn

{.text-center} We can reflect this butterfly, and it looks the same afterwards.
We say that it has __reflectional symmetry__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      .play-btn

{.text-center} We can rotate this flower, and it looks the same afterwards. We
say that it has __rotational symmetry__.
:::

---

### Reflectional Symmetry

A shape has __reflectional symmetry__ if it looks the same after being
reflected. The line of reflection is called the __axis of symmetry__, and it
splits the shape into two [[congruent|equal|similar]] halves. Some figures can
also have more than one axis of symmetry. 

---

Draw the axes of symmetry in all of these shapes:

::: column(width=220)
{.todo} example
::: column(width=220)
{.todo} example
::: column(width=220)
{.todo} example
:::

---
> id: alphabet

Many letters in the alphabet have reflectional symmetry. Select all the ones
that do:

    x-picker.letters
      - let c = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81']
      for l, i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        if 'FGJKLNPQRSZ'.indexOf(l) < 0
          .item(style=`color: ${c[i%12]}`)= l
        else
          .item(data-error="letter-not-symmetric" style=`color: ${c[i%12]}`)= l

---

Here are some more shapes. Complete them so that they have reflectional
symmetry:

::: column(width=220)
{.todo} example
::: column(width=220)
{.todo} example
::: column(width=220)
{.todo} example
:::

---

Shapes, letters and images can have reflectional symmetry, but so can entire
numbers, words and sentences!

For example "25352" and "ANNA" both read the same from back to front. Numbers
or words like this are called __Palindromes__.

{.todo} Can you think of any other palindromes?

---

If we ignore spaces and punctuation, these letters also have reflectional
symmetry. Can you come up with your own?

{.text-center} Never odd or even.  
A nut for a jar of tuna.
Yo, banana boy!

---

But Palindromes are not just fun, they actually have practical importance. A few
years ago, scientists discovered that parts of our [DNA](gloss:dna) are
palindromic. This makes that more resilient to mutations or damage – because
there is a second backup copy of every piece.

---
> id: rotational-symmetry

### Rotational Symmetry

::: column.grow
A shape has __reflectional symmetry__ if it looks the same after being rotated
(by less than 360°). The center of rotation is usually just the middle of the
shape.

The __order of symmetry__ is the number of distinct orientations in which the
shape looks the same. You can also think about it as the _number of times we
can rotate the shape_, before we get back to the start. For example, this
snowflake has order [[6]].

The angle of each rotation is `"360°"/"order"`. In the snowflake, this is
`"360°"/6` = [[60]]°.
::: column(width=240)

    include svg/snowflake.svg

:::

---

Find the order and the angle of rotation, for each of these shapes:

::: column(width=220)
    img(src="images/clover.jpg" width=200 height=200)

{.caption} Order [[4]], angle [[90]]°
::: column(width=220)
    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Order [[2]], angle [[180]]°
::: column(width=220)
    img(src="images/flower.jpg" width=200 height=200)

{.caption} Order [[8]], angle [[45]]°
:::

---

Now complete these shapes, so that they have rotational symmetry:

::: column(width=220)
{.todo} EXERCISE
::: column(width=220)
{.todo} EXERCISE
::: column(width=220)
{.todo} EXERCISE
:::

---
> id: groups

## Symmetry Groups

    // HINT: To recognise different configurations, we need to highlight the
    // four corners in different colours.

Some shapes have more than one symmetry – let's have a look at the
[square](gloss:square) as a simple example.

::: column(width=400 parent="padded-thin")

    .cubes
      img.cube.reveal(src="images/cube-0.svg" width=80 height=80 when="blank-1 blank-2 blank-3" delay=1000 animation="pop")
      img.cube.reveal(src="images/cube-1.svg" width=80 height=80 when="blank-1" animation="pop")
      img.cube.reveal(src="images/cube-2.svg" width=80 height=80 when="blank-2" animation="pop")
      img.cube.reveal(src="images/cube-3.svg" width=80 height=80 when="blank-3" animation="pop")
      img.cube.reveal(src="images/cube-4.svg" width=80 height=80 when="blank-0" animation="pop")
      img.cube.reveal(src="images/cube-5.svg" width=80 height=80 when="blank-0" delay=200 animation="pop")
      img.cube.reveal(src="images/cube-6.svg" width=80 height=80 when="blank-0" delay=400 animation="pop")
      img.cube.reveal(src="images/cube-7.svg" width=80 height=80 when="blank-0" delay=600 animation="pop")

::: column.grow(width=200)
You have already shown above that a square has [[4]] axes of reflection.

{.reveal(when="blank-0")} It also has rotational symmetry by [[90]]°,
[[180]]° and [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} And finally, we can think
about "doing nothing" as another special kind of symmetry – because the result
is (obviously) the same as before. This is sometimes called the __identity__.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} In total, we have found [[8]]
different "symmetries of the square".
:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Now we can actually start doing some arithmetic with these symmetries. For
example, we can _add_ two symmetries to get new ones:

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> goals: calculate

Whenever you add two symmetries of a square, you get a new one. Here is a
"symmetry calculator" where you can try it yourself:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Spend some time playing around with the symmetry calculator, and try to find any
patterns. Can you complete these observations?

* Adding two rotations will always give [[a rotation|a reflection]] (or the identity).
* Adding two reflections will always give [[a rotation|a reflection]] (or the identity).
* Adding the same two symmetries in the opposite order
  [[sometimes gives a different|always gives a different|always gives the same]] result.
* Adding the identity [[doesn't do anything|returns a reflection|returns the opposite]].

---
> id: group-axioms

You might have realised already that adding symmetries is actually very similar
to adding integers:

    ol.proof
      
      li.r
        | Adding two #[strong.orange symmetries]/#[strong.green integers] always gives another #[strong.orange symmetry]/#[strong.green integer]:
        .text-center.axiom 
          img.cube(src="images/cube-2.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-6.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-4.svg" width=32 height=32)
        .text-center.axiom 
          mn 12
          mo +
          mn 7
          mo =
          mn 19
        .next-step Next
      
      li.r.reveal(when="next-0")
        | Adding #[strong.orange symmetries]/#[strong.green integers] is #[x-gloss(xid="associative") associative]:
        .text-center.axiom 
          mfenced
            img.cube(src="images/cube-1.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-4.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          mfenced
            img.cube(src="images/cube-4.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-3.svg" width=32 height=32)
        .text-center.axiom
          mfenced #[mn 4]#[mo +]#[mn 2]
          mo +
          mn 5
          mo =
          mn 4
          mo +
          mfenced #[mn 2]#[mo +]#[mn 5]
        .next-step Next
      
      li.r.reveal(when="next-1")
        | Every #[strong.orange symmetry]/#[strong.green integer] has an #[strong inverse], another #[strong.orange symmetry]/#[strong.green integer] which, when added, gives the identity:
        .text-center.axiom 
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-0.svg" width=32 height=32)
        .text-center.axiom 
          mn 4
          mo +
          mn –4
          mo(value="=") =
          mn 0
        .next-step Next

---

In mathematics, any collection that has these properties is called a __group__.
Some groups (like the __{.orange}symmetries__ of a square) only have a finite
number of elements. Others (like the __{.green}integer__) are infinite.

Before, we started with the symmetries of the square. In fact, every geometric
shape has its own __symmetry group__. They all different elements, but they
always satisfy the three rules above.

Groups appear everywhere in mathematics. The elements can be numbers or
symmetries, but also polynomials, permutations, matrices, functions … _anything_
that obeys the three rules. The key idea of _group theory_ is that we are not
interested in the individual elements, just in _how they interact with each
other_.

::: column.grow
For example, chemists can use properties of the symmetry group of different
molecules to predict some of their chemical properties. Groups can be used to
analyse musical harmonies, fundamental particles in nature, the winning moves in
board games, the behaviour of viruses in medicine, and much more…
::: column(width=300)
{.todo} IMAGE
:::

---
> id: wallpaper-groups

## Wallpaper Groups

We have now seen two different kinds of symmetry, that correspond to two
different transformations: rotations and reflections. But there is also a
symmetry for the third kind of transformation: [[translations|spins|flips]].

__Translational symmetry__ does not work for isolated objects like flowers or
butterflies, but it does for regular patterns that extend into every direction:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      .play-btn

{.caption} Hexagonal honyecomb
::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      .play-btn

{.caption} Ceramic wall tiling
:::

---
> id: footsteps
> goals: slider

In addition to reflectional, rotational and translational symmetry, there even
is a fourth kind: __glide reflections__. This is a combination of a reflection
and a translation in the same direction as the axis of reflection.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---

A patterns can have more than one type of symmetry. And just like we did squares,
we can find the [symmetry group](gloss:symmetry-group), which contains all its
different symmetries.

These groups don't tell you much about exactly how the pattern _looks_ like
(e.g. its colours and shapes), just how it is _repeated_. Multiple different
patterns can have the same symmetry group – as long are arranged and repeated
in the same way.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} These two patterns have the same symmetries, even though they look
very different. But symmetries are not about colours, or superficial shapes.
::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} These two patterns also have the same symmetries – even though they
look more similar to the corresponding patterns on the left, than to each other.
:::

---

It turns out that, while there are infinitely many possible patterns, they all
have one of just 17 different symmetry groups. These are called the __Wallpaper
Groups__.

Every wallpaper group is defined by a combination of translations, rotations,
reflections and glide reflections. Try to find the points of rotation and axes
of reflection in the 17 examples below:

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Type P1</strong><br>Just translations
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Type P2</strong><br>Rotations of order 2
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Type P3</strong><br>Four rotations of order 2 (180°)
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Type P4</strong><br>Rotations of order 3 (120°)
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Type P6</strong><br>Rotations of order 6 (60°), order 3, and order 2
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Type PM</strong><br>Parallel axes of reflection
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Type PMM</strong><br>Perpendicular reflections and rotations of order 2
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Type P4M</strong><br>Rotations of order 2 and order 4 (90°), reflections, and glide reflections
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Type P6M</strong><br>Rotations of order 2 and order 6, reflections, and glide reflections
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Type P3M1</strong><br>Rotations of order 3, reflections in three directions, and glide reflections
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Type P31M</strong><br>Rotations of order 3, reflections in three directions, and glide reflections
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Type P4G</strong><br>Rotations of order 2 and order 4, perpendicular reflections, and reflections 
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Type CMM</strong><br>Perpendicular reflections and rotations of order 2
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Type PMG</strong><br>Reflections, glide reflections, and rotations of order 2
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Type PG</strong><br>Just parallel glide reflections
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Type CM</strong><br>Reflections and glide reflections
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Type PGG</strong><br>Perpendicular glide reflections, and rotations of order 2

Unfortunately there is no simple reason why the number is _seventeen_, and
proving it requires much more advanced mathematics.

---
> id: drawing
> goals: draw-1 draw-2 switch

Instead, you can try drawing your own repeated patterns for each of the 17
wallpaper groups:

    include ./components/wallpaper
    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Examples of other students’ tessellations
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---

::: column.grow
The Wallpaper groups were all about flat, two-dimensional patterns. We can do
something similar for three-dimensional patterns: these are called
crystallographic groups, and there are 219 of them!

In addition to translation, reflection, rotation, and glide reflection, these
groups include symmetries like __glide planes__ and __screw axes__ (think about
the motion when unscrewing a bottle).
::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} Boron-nitride has its molecules arranged in this crystal lattice,
which has a 3-dimensional symmetry group.
:::

---
> id: planets
> class: fill dark stars

## Symmetry in Physics

All of the symmetries we looked at so far were _visual_ in some sense – shapes,
images or patterns we can see. In fact, symmetry can be a much wider concept:
_immunity to change_.

For example, if you like apple juice just as much as you like orange juice, then
your preference is "symmetric" under the transformation that swaps apples and
oranges.

In 1915, the German mathematician [Emmy Noether](bio:noether) observed that
something similar is true for the [laws of nature](gloss:laws-of-nature).

::: column.grow
For example, our experience tells us that the laws of motion are the same
everywhere in the universe. It doesn't matter if you conduct a physics
experiment in London, or in New York, or on Mars – the laws of motion should
always be the same. In a way, they have [[translational symmetry|reflectional symmetry]].

{.reveal(when="blank-0")} Similarly, it shouldn't matter if we conduct an
experiment while facing North, or South, or East or West: the laws of nature
have [[rotational symmetry|glide reflection symmetry]].

{.reveal(when="blank-1")} And finally, it shouldn't matter if we conduct an
experiment today, or tomorrow, or in a year. The laws of nature are
"time-symmetric".
::: column(width=300)

    include svg/planets.svg

:::

---
> class: fill dark stars

These symmetries might initially seem quite meaningless, but they can actually
tell us a lot about our universe. Emmy Noether managed to prove that every
symmetry corresponds to a certain physical quantity that is _conserved_.

For example, time-symmetry implies that _Energy_ must be conserved in our
Universe: you can convert energy from one type to another (e.g. light, or heat
or electricity), but you can never create or destroy energy. The total amount
of energy in the Universe will always stay constant.

    figure
      x-media(src="images/cern.jpg" width=760 height=400 credit="© CERN")
      p.caption CERN is the world's largest particle accellerator. Scientists smash together fundamental particles at enourmous speeds, to learn more about their properties. Can you see the person at the bottom, for size comparison?

::: column(width=220)

    x-media(src="images/higgs.png" width=220 height=150)
    p.caption The paths taken by particle fragments after a collision.

::: column.grow
It turns ou that, just by knowing about symmetry, physicists can derive most
laws of nature that govern out universe – without ever having to do an
experiment or observation.

Symmetry can even predict the existence of fundamental particles. One example is
the famous __Higgs Boson__: it was predicted in the 1960s by theoretical
physicists, but not observed in the real world until 2012.
:::

---

## Similarity

So far, all we have just looked at [[rigid|congruent|visual]] transformations.
Now, let’s think about one that is not: a [__dilation__](gloss:dilation) changes
a shape’s size by making it larger or smaller.

::: column.grow
All dilations have a __center__ and a __scale factor__. The center is the point
of reference for the dilation and scale factor tells us how much the figure
stretches or shrinks.

If the scale factor is between 0 and 1, the image is [[smaller|larger]] than the
original. If the scale factor is larger than 1, the image is [[larger|smaller]]
than the original.
::: column(width=300)
{.todo} move the center, slider for scale factor
:::

Here is how we can construct the dilation of a geometric shape:

::: column(width=300)
{.todo} ANIMATION
::: column.grow
First we draw rays from the center of dilation to every point in the shape.

Now let's measure the distance of all these points from the center of dilation.
Then we can multiply the distance by the scale factor, and the measure the
image of the point along the same ray.

All that's left is to connect the transformed points in the image … all done!
:::

---

::: column.grow
For rigid transformations, the image is always [[congruent|larger|smaller]] to
the original – but this is [[no longer|still]] true for dilations. Instead, we
say that two shapes are [__similar__](gloss:similar). They have the same overall
shape, but not necessarily the same size.

The symbol for similarity is `∼` (similar to the symbol for congruence, which
was `≅`). In this example, we would write `A ∼ A'`.

::: column(width=240)
{.todo} IMAGE
:::

---

### Perspective Drawings

You might have noticed that these dilations with the connecting rays almost look
like __perspective drawings__. The center of dilation is called the __vanishing
point__, because it looks like this is where everything is "vanishing in the
distance".

Find the vanishing point in the figure below:

{.todo} image

Now can you draw another house that matches the existing ones?

---

### Similar Polygons

Similarity can tell us a lot about shapes. For example, [circles](gloss:circle),
[squares](gloss:square) and [equilateral triangles](gloss:equilateral-triangle)
are [[always|sometimes|never]] similar. They might have different sizes, but
always the same general shape.

::: column.grow
The two quadrilaterals on the right are similar. Our first important observation
is that in similar polygons, all the matching pairs of angles are
[congruent](gloss:congruent-angles). This means that

{.text-center} [_{.m-red}`∡ABC`_ `≅` _{.m-red}`∡A'B'C'`_](target:a)_{.space}_
[_{.m-blue}`∡BCD`_ `≅` _{.m-blue}`∡B'C'D'`_](target:b)  
[_{.m-green}`∡CDE`_ `≅` _{.m-green}`∡C'D'E'`_](target:c)_{.space}_
[_{.m-yellow}`∡DEA`_ `≅` _{.m-yellow}`∡D'E'A'`_](target:d)

The second important fact is that in similar polygons, all sides are scaled
__proportionally__ by the scale factor of the corresponding dilation. If the
scale factor is ${k}{k|1.5|0.5,2,0.1}, then

{.text-center} `|AB| ×` ${k} `= |A'B'|`_{.space}_`|BC| ×` ${k} `= |B'C'|`  
`|CD| ×` ${k} `= |C'D'|`_{.space}_`|DE| ×` ${k} `= |D'E'|`

We can instead rearrange these equations and eliminate the scale factor
entirely:

{.text-center} `|AB|/|A'B'| = |BC|/|B'C'| = |AB|/|A'B'| = |AB|/|A'B'|`

    // This proportional relationship is true not just for the sides of the
    // polygon, but also for properties like diagonals.

We can use this to solve real life problems that involve similar polygons – for
example finding the length of missing sides, if we know some of the other sides.
In the following section you will see a few examples.
::: column(width=240)

    x-geopad.sticky(width=240 height=360): svg
      - var x = ['a', 'b', 'c', 'd']
      - var initial = {a:[50,70], b:[160,50], c:[200,110], d:[150,160]}
      - var next = {a:'b', b:'c', c:'d', d:'a'}
      - var prev = {a:'d', b:'a', c:'b', d:'c'}
      - var classes = {a:'red', b:'blue', c:'green', d:'yellow'}
      each l in x
        circle(name=l x=`point(${initial[l][0]},${initial[l][1]})` r=4 target=l)
        path(x=`angle(${prev[l]},${l},${next[l]})` target=l class=classes[l])
        path(x=`segment(${l},${next[l]})` target=`${l} ${next[l]}`)
        circle(name=l+'1' r=4 x=`${l}.subtract({x:120,y:90}).scale(k).rotate(3).add({x:120,y:270})` target=l)
        path(x=`angle(${prev[l]}1,${l}1,${next[l]}1)` target=l class=classes[l])
        path(x=`segment(${l}1,${next[l]}1)` target=`${l} ${next[l]}`)
:::

---

### Similar Triangles

The concept of similarity is particularly powerful with triangles. We already
know that the corresponding internal angles in similar polygons are equal.

For triangles, the opposite is also true: this means that if you have two
triangles with the same three angle sizes, then the triangles must be similar.

And it gets even better! We know that the internal angles in a triangle always
add up to [[180]]°. This means that if we know two angles in a triangle, we can
always work out the third one.

For similarity, this means that we also just need to check _two angles_ to
determine if triangles are similar. If two triangles have two angles of the same
size, then the third angle must also be the same in both.

This result is sometimes called the [__AA Similarity Condition__](gloss:triangle-aa)
for triangles. (The two _As_ stand for the two _angles_ we compare.)

::: .theorem
If two angles in one triangle are congruent to two angles in another triangle,
the two triangles are similar.
:::

---

Let's have a look at a few examples where this is useful:

::: column(width=320)
{.todo} IMAGE

::: column.grow
Here you can see the image of a large lighthouse. Together with a friend, you
want to measure the height of the lighthouse, but unfortunately we cannot climb
to the top.

It turns out that, very well hidden, the diagram contains two similar triangles:
one is formed by the lighthouse and its shadow, and one is formed by your friend
and her shadow.

Both triangles have one right angle at the bottom. The sun rays are parallel,
which means that the other two angles at the bottom are
[[corresponding|supplementary|opposite]] angles, and also equal. By the AA
condition for triangles, these two must be similar.

We can easily measure the length of the shadows, and we also know the height of
your friend. Now we can use the proportionality of sides in similar triangles
to find the height of the lighthouse:

{.todo} equation

Therefore the lighthouse is [[1.5]]m tall.
:::

---

::: column(width=320)
{.todo} IMAGE
::: column.grow
We can use the same technique to measure distances on the ground. Here we want
to find the width of a large river. There is a big tree on one side of the
river, and I've got a stick that is one meter long.

Try drawing another two similar triangles in this diagram.

You can mark the point along the side of the river, that lies directly on the
line of sight from the end of the stick to the tree. Then we can measure the
distances to the stick, and to the point directly opposite the tree.

Once again, these two triangles are similar because of the AA condition. They
both have a right angle, and on pair of opposite angles.

According to the proportionality rule, this means that

{.todo} equation

Therefore the width of the river is [[45]] meters.
:::

---

Triangles are not just useful for measuring distances. In the next chapter we
will learn a lot more about triangles and their properties.


    // ### Similarity on Rays
    //
    // Theorem: If a ray bisects an angle of a triangle, then it divides the
    // opposite side into segments that are proportional to the lengths of the
    // other two sides.
    // 
    // We can extend this theorem to a situation outside of triangles where we
    // have multiple parallel lines cut by transverals.
    // 
    // Theorem: If three or more parallel lines are cut by two transversals, then they
    // divide the transversals proportionally.
    // 
    // Think about a midsegment of a triangle. A midsegment is parallel to one side of
    // a triangle and divides the other two sides into congruent halves. The midsegment
    // divides those two sides proportionally.
    // 
    // Triangle Proportionality Theorem: If a line parallel to one side of a triangle
    // intersects the other two sides, then it divides those sides proportionally.
    // 
    // Triangle Proportionality Theorem Converse: If a line divides two sides of a
    // triangle proportionally, then it is parallel to the third side.


    // ### Self Similarity
    // 
    // There are some curious mathematical shapes that are similar to a smaller part
    // _of themselves_. An example is the __Sierpinksi Triangle__: the entire triangle
    // is similar to any one of the smaller triangles it consists on. You could zoom
    // in and infinitely many smaller and smaller triangles.
    // 
    // Shapes with this property are called __Fractals__. They have some surprising
    // and truly XXX properties, which you will learn about more in the future.
