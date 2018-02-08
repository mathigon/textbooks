# Transformations and Symmetry

> stage: intermediate
> description: Symmetry can be seen everywhere in nature – but it even underlies
>   completely invisible laws of nature. The mathematical properties of symmetry
>   explain why that is the case.
> warning: true

---

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

## Transformations

A [__transformation__](gloss:transformation) is a specific set of rules that
convert one geometric figure into another one. Here are a few examples:

::: column(width=220)
{.todo} ANIMATION
::: column(width=220)
{.todo} ANIMATION
::: column(width=220)
{.todo} ANIMATION
:::

The result of a transformation is called the __image__. The image of a figure
`A` is usually denoted by `A'` (pronounced as “A prime”).

Initially, we will just think about transformations that don’t change the
original figure’s size and shape. Imagine that it is made out of a solid
material like wood or metal: we can move, turn and flip it, but we can’t stretch
or otherwise deform it. These transformations are called
[__rigid transformations__](gloss:rigid-transformation).

Select all of these transformations which are rigid:

{.todo} SELECT EXERCISE

---

For rigid transformations, the image is always
[[congruent to|the same as|opposite to]] the original. There are three different
types of rigid transformations:

::: column.grow(width=220)
{.todo} ANIMATION

{.text-center} A transformation that _moves_ a shape around is called a
[__translation__](gloss:translation).

::: column.grow(width=220)
{.todo} ANIMATION

{.text-center} A transformation that _flips_ a shape over is called a
[__reflection__](gloss:reflection).

::: column.grow(width=220)
{.todo} ANIMATION

{.text-center} A transformation that _spins_ a shape is called a
[__rotation__](gloss:rotation).
:::

We can also combine multiple types of transformation to create more complex
ones – for example, first a translation and then a rotation.

But first, let's have a look at each of these transformations in more detail.

---

### Translations

A [__translation__](gloss:translation) is a transformation that moves every
point of a figure by the same distance in the same direction.

In the coordinate plane, we can specify a translation by how far the shape is
moved along the _x_-axis and the _y_-axis. For example, a transformation by
(3, 5) moves a shape by 3 along the _x_-axis and by 5 along the _y_-axis.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20): svg

{.caption} Translated by ([[2]], [[3]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20): svg

{.caption} Translated by ([[4]], [[-1]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20): svg

{.caption} Translated by ([[-2]], [[3]])
:::

---

Now it’s your turn – translate the following shapes as shown:

::: column(width=220)
{.todo} EXERCISE

{.caption} Translated by (3, 1)
::: column(width=220)
{.todo} EXERCISE

{.caption} Translated by (-2 -4)
::: column(width=220)
{.todo} EXERCISE

{.caption} Translated by (-1, 5)
:::

---

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

Now it’s your turn – draw the reflection of each of these shapes:

::: column(width=220)
{.todo} EXAMPLE
::: column(width=220)
{.todo} EXAMPLE
::: column(width=220)
{.todo} EXAMPLE
:::

---

Notice that if a point lies on the line of reflection, its image is
[[the same as|congruent to|smaller than]] the original point.

---

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

Transformations are an important concept in many parts of mathematics, not just
geometry. For example, you can transform [_functions_](gloss:function) by
shifting or rotating their [graphs](gloss:function-graph). Other transformations
don't even have a visual representation at all. You'll learn more about these
transformations in future chapters, but for now let's move on to symmetry.

---

## Symmetry

Symmetry is everywhere around us, and an intuitive concept: different parts of
an object look _the same_ in some way. But using transformations, we can give a
much more precise, mathematical representation of what symmetry _really_ means:

{.definition} An object is _symmetric_ if it looks the same, even after applying
a certain transformation.

::: column.grow

    p.todo animation

{.text-center} We can reflect this butterfly, and it looks the same afterwards.
We say that it has __reflectional symmetry__.

::: column.grow

    p.todo animation

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

Many letters in the alphabet have reflectional symmetry. Select all the ones
that do:

    x-select
      for l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split()
        .letter= l

{.todo} SELECT INTERACTIVE

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
{.todo} graphic
:::

---

Find the order and the angle of rotation, for each of these shapes:

::: column(width=220)
{.todo} flower
::: column(width=220)
{.todo} snowflake
::: column(width=220)
{.todo} kleeblatt
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

## Symmetry Groups

    // HINT: To recognise different configurations, we need to highlight the
    // four corners in different colours.

Some shapes have more than one symmetry – let's have a look at the
[square](gloss:square) as a simple example.

::: column(width=400)
{.todo} images

::: column.grow(width=200)
You have already shown above that a square has [[4]] axes of reflection.

{.subsection(needs="blank-0")} It also has rotational symmetry by [[90]]°,
[[180]]° and [[270°]].

{.subsection(needs="blank-1 blank-2 blank-3")} And finally, we can think
about "doing nothing" as another special kind of symmetry – because the result
is (obviously) the same as before. This is sometimes called the _identity_.

In total, we have found [[8]] different "symmetries of the square".
:::

---

Now that we've found all symmetries of the square, we can start doing some more
interesting mathematics with them. For example, we can _add_ different
symmetries to get new ones:

{.todo} animated example

---

Whenever you add two symmetries of a square, you get a new one. Here is a
"symmetry calculator" where you can try it yourself:

{.todo} symmetry calculator

---

You might have noticed that adding symmetries is very similar to adding
integers:

{.text-center} (1) Adding two __{.orange}symmetries__/__{.cyan}numbers__ always
gives another __{.orange}symmetry__/__{.cyan}number__.

::: column.grow
{.todo} animation
::: column.grow
{.numbers} `12 + 7 = 19`
:::

{.text-center} (2) Adding __{.orange}symmetries__/__{.cyan}numbers__ is
[_associative_](gloss:associative).

::: column.grow
{.todo} animation
::: column.grow
{.numbers} `(4 + 2) + 5 = 4 + (2 + 5)`
:::

{.text-center} (3) Every __{.orange}symmetry__/__{.cyan}number__ has an
_inverse_:  
another __{.orange}symmetry__/__{.cyan}number__ which, when added, gives the
identity.

::: column.grow
{.todo} animation
::: column.grow
{.numbers} `4 + (-4) = 0`
:::

---

In mathematics, any collection that has these properties is called a __group__.
Some groups (like the symmetries of a square) only have a finite number of
elements. Others (like the integers) are infinite.

Above we started with the symmetries of the square. Every geometric shape has
its own _symmetry group_ with different elements – but they all satisfy the
same three rules.

Groups seem to appear everywhere in mathematics and in nature. The elements can
be numbers or symmetries, but also polynomials, permutations, matrices,
functions … _anything_ that obeys the rules above.

---

The key idea of _group theory_ is that we are not interested in the individual
elements, just in _how they interact with each other_.

::: column.grow
For example, chemists can use properties of the symmetry group of different
molecules to predict some of their chemical properties. Groups can be used to
analyse musical harmonies, fundamental particles in nature, the winning moves in
board games, the behaviour of viruses in medicine, and much more…
::: column(width=300)
{.todo} IMAGE
:::

---

## Wallpaper Groups

We have now seen two different kinds of symmetry, that correspond to two
different transformations: rotations and reflections. But there is also a
symmetry for the third kind of transformation: [[translations|spins|flips]].

__Translational symmetry__ does not work for isolated objects like flowers or
butterflies, but for patterns that extend into every direction:

::: column.grow
{.todo} honeycomb
::: column.grow
{.todo} wallpaper
:::

---

And there even is a fourth kind of symmetry, __glide reflections__, which is a
combination of a translation and a reflection. _The translation is in a direction
parallel to the line of reflection._

::: column.grow
{.todo} footsteps
![](https://plus.maths.org/issue38/features/livio/figure5.jpg)
::: column.grow
{.todo} wallpaper
:::

---

Just like we did for the square above, we can find the [symmetry group](gloss:symmetry-group)
of a certain pattern, that contains all of its symmetries.

These groups don't tell you anything about what exactly the pattern _looks_ like
(e.g. its colours and shapes), just how it is _repeated_. Therefore multiple
different patterns can have the same symmetry group:

::: column.grow
{.todo} two shapes with the same group
::: column.grow
{.todo} two shapes with the same group
:::

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

Instead, you can try drawing your own repeated patterns for each of the 17
wallpaper groups:

    include ./components/wallpaper
    x-wallpaper

{.todo} drawings by other students

---

::: column.grow
The Wallpaper groups were all about flat, two-dimensional patterns. We can do
something similar for three-dimensional patterns: these are called
crystallographic groups, and there are 219 of them. In addition to translation,
reflection, rotation, and glide reflection, they include symmetries like glide
planes and screw axes (think about the motion when unscrewing a bottle).
::: column(width=300)
{.todo} crystal image
:::

---
> class: fill dark stars

## Symmetry in Physics

All of the symmetries we looked at so far were _visual_ in some sense: shapes,
images or patterns we can see. In fact, symmetry can be a much wider concept –
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
::: column(width=300)
{.todo} IMAGE
:::

---
> class: fill dark stars

::: column.grow
Similarly, it shouldn't matter if we conduct an experiment while facing North,
or South, or East or West: the laws of nature have [[rotational symmetry|glide reflection symmetry]].

And finally, it shouldn't matter if we conduct an experiment today, or tomorrow,
or in a year. The laws of nature are "time-symmetric".
::: column(width=300)
{.todo} IMAGE
:::

---
> class: fill dark stars

These symmetries might all seem meaningless and obvious, but they can actually
tell us a lot about how the corresponding laws of nature must look like. Emmy
Noether managed to prove that every symmetry corresponds to a certain physical
quantity that is _conserved_. One example is Energy: the universe will always
contain the same amount of energy. You cannot create or destroy energy, just
convert it between different types (like heat or light).

{.todo} conservation of energy image

Just knowing about symmetry allows physicists to derive most of the laws of
nature that govern the entire universe – without ever actually having to do an
experiment.

{.todo} large hardon collider image

Symmetry can even predict the existence of fundamental particles. One example is
the famous Higgs Boson. It was predicted in the 1960s by theoretical physicists,
but not discovered experimentally until 2012.

---

## Similarity

So far, all we have only looked at [[rigid|congruent|visual]] transformations.
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
