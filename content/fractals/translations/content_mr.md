# Fractals

## Introduction

> section: introduction
> id: intro


निसर्गाच्या सभोवताल पाहताना आपल्यासारख्या गुंतागुंतीच्या या वनस्पती लक्षात आल्या असतील:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} 
या __Fern__ मध्ये बर्‍याच लहान पाने असतात जी मोठ्या फांद्या असतात.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} या __रोमेनेस्को ब्रोकोली__ मध्ये लहान [[शंकू | चौकोनी | गोला]] असतात जे
मोठ्या एकाभोवती[[शंकू | चौकोनी | गोला]]भोवती फिरत आहे.


:::

{.reveal(when="blank-0")} 
सुरुवातीला हे अत्यंत जटिल आकारांसारखे दिसतात - परंतु जेव्हा आपण जवळ पाहता तेव्हा आपल्या लक्षात येईल की ते दोघे तुलनेने अनुसरण करतात साधा नमुना: 
सर्व [वैयक्तिक भाग](target:fractal) 
वनस्पती दिसत संपूर्ण वनस्पती सारखेच, फक्त लहान. त्याच पद्धतीची पुनरावृत्ती केली जाते पुन्हा पुन्हा लहान प्रमाणात
[Continue](btn:next)

---
> id: fern


गणितामध्ये आम्ही या मालमत्तेस __ स्वतः-समानता__ म्हणतो आणि त्यास आकार देतो ते म्हणतात [__fractals__](gloss:fractal). ते काही सर्वात आहेत सर्व गणितातील सुंदर आणि विचित्र वस्तू.

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
    x-slider#fern-slider(steps=8 :bind="steps")

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

### Fractal Dimensions

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

First, let’s think about the dimension of fractals. A line has dimension [[1]].
_{span.reveal(when="blank-0")} When scaling it by a factor of 2, its length
increases by a factor of `2^1 = 2`. Obviously!_

:::

---

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

A square has dimension [[2]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its area increases by a factor of `2^2 =` [[4]]._

:::

---

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

A cube has dimension [[3]]. _{span.reveal(when="blank-0")} When scaling it by
a factor of 2, its volume increases by a factor of `2^3 =` [[8]]._
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
triangle. Using the same pattern as above, we get `2^d = 3`. In other words,
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
factor of [[4]] at every step. At the same time, the area of these new triangles
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
we multiply the perimeter by `§4/3` at every step, and we do this infinitely
many times._

:::

---
> id: frozen

::: column.grow

It is almost unthinkable that you can have a shape with a _finite_ area and also
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

{.reveal(when="blank-1")} If you imagine cutting out more and more holes,
infinitely many times, there would be no actual volume left. That’s why the cube
is “not quite” 3-dimensional!
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

{.r.reveal(when="slider-0")} Initially, there are __{.pill.yellow}88__
intersecting cells. If we scale the coastline by a factor of 2, there are
__{.pill.yellow}197__ intersecting cells – more than twice as many!
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

    // TODO https://en.wikipedia.org/wiki/Fractal_antenna
    // TODO Fractals in African Art

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
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## The Mandelbrot Set

> section: mandelbrot
> sectionStatus: dev

{.todo} Coming Soon!


--------------------------------------------------------------------------------


## Space Filling Curves

> section: space-filling
> sectionStatus: dev

{.todo} Coming Soon!

