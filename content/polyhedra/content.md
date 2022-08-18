# Polygons and Polyhedra

## Polygons

> section: polygons
> id: polygons
> description: Geometric shapes are everywhere around us. In this course you will learn about angels, polygons, tessellations, polyhedra and nets.
> color: "#4757D3"
> level: Intermediate
> next: circles

A [__polygon__](gloss:polygon) is a closed, flat shape that has only straight
sides. Polygons can have any number of sides and angles, but the sides cannot be
curved. Which of the shapes below are polygons?

    x-picker
      .item#item1: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg

    x-gesture(target="#item1")

---
> id: polygons-1

We give different names to polygons, depending on how many sides they have:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Triangle]#[br]3 sides
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Quadrilateral]#[br]4 sides
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Pentagon]#[br]5 sides
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Hexagon]#[br]6 sides
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Heptagon]#[br]7 sides
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Octagon]#[br]8 sides

---
> id: angles-0

### Angles in Polygons

Every polygon with _n_ sides also has _n_ [internal angles](gloss:internal-angle).
We already know that the sum of the internal angles in a triangle is always
[[180]]° but what about other polygons?

---
> id: angles
> goals: angle-0 angle-1

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" label="${a1[0]}°")
      path.fill.blue(x="angle(c,b,a)" label="${a1[1]}°")
      path.fill.green(x="angle(d,c,b)" label="${a1[2]}°")
      path.fill.yellow(x="angle(a,d,c)" label="${360-a1[0]-a1[1]-a1[2]}°")
      path(name="p1" x="polygon(a,b,c,d)")

{.text-center.var} _{span.circled.red}${a1[0]}°_ +
_{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ +
_{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ &nbsp;=&nbsp; _{x-anibutton(text="???")}_

    x-gesture(target="x-anibutton")

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" label="${a2[0]}°")
      path.fill.blue(x="angle(g,f,e)" label="${a2[1]}°")
      path.fill.green(x="angle(h,g,f)" label="${a2[2]}°")
      path.fill.yellow(x="angle(i,h,g)" label="${a2[3]}°")
      path.fill.purple(x="angle(e,i,h)" label="${540-a2[0]-a2[1]-a2[2]-a2[3]}°")
      path(name="p2" x="polygon(e,f,g,h,i)")

{.text-center.var} _{span.circled.red}${a2[0]}°_ +
_{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ +
_{span.circled.yellow}${a2[3]}°_ +
_{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ &nbsp;=&nbsp; _{x-anibutton(text="???")}_
:::

---
> id: angles-1

It looks like the sum of internal angles in a quadrilateral is always [[360]]°
– exactly [[twice|three times|half]] the sum of angles in a triangle.
_{span.reveal(when="blank-0 blank-1")} This is no coincidence: every quadrilateral
can be split into two triangles._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} The same also works for larger polygons.
We can split a pentagon into [[3]] triangles, so its internal angle sum is
`3 × 180° =` [[540]]°. _{span.reveal(when="blank-2 blank-3")} And we can split
a hexagon into [[4]] triangles, so its internal angle sum is `4 × 180° =` [[720]]°._

---
> id: internal-angle-sum

A polygon with ${x}{x|7|3,15,1} sides will have an internal angle sum of
180° × ${x-2} = ${(x-2)*180}°. More generally, a polygon with _n_ sides can be
split into [[n – 2|n – 1|n]] triangles. Therefore,

{.text-center.reveal(when="blank-0")} Sum of internal angles in an _n_-gon
`= (n - 2) × 180°`.

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Convex and Concave Polygons

::: column.grow
We say that a polygon is [__concave__](gloss:concave) if it has a section that
“points inwards”. You can imagine that this part has [“caved in”](target:cave).
Polygons that are _not_ concave are called [__convex__](gloss:convex).

There are two ways you can easily identify concave polygons: they have [at least
one internal angle](target:angle) that is bigger than 180°. They also have [at
least one diagonal](target:diagonal) that lies _outside_ the polygon.

In convex polygons, on the other hand, all internal angles are less than
[[180]]°, and all diagonals lie [[inside|outside]] the polygon.
::: column(width=240)

    x-geopad(width=240): svg
      circle(hidden name="a" x="point(40,70)")
      circle(hidden name="b" x="point(60,170)")
      circle(hidden name="c" x="point(160,200)")
      circle(hidden name="d" x="point(150,130)")
      circle(hidden name="e" x="point(190,40)")
      path.fill.blue(x="polygon(a,b,c,d,e)" target="cave diagonal angle")
      path.transparent.red.fill(x="polygon(c,d,e)" target="cave")
      path.red.fill.transparent(x="angle(c,d,e)" target="angle")
      path.transparent(x="segment(a,c)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(a,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,e)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent.red(x="segment(c,e)" target="diagonal")
:::

---
> id: concave-1

Which of these polygons are concave?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Regular Polygons

We say that a polygon is [__regular__](gloss:regular-polygon) if all of its
sides have the same length, and all of the angles have the same size. Which of
these shapes are regular polygons?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Regular polygons can come in many different sizes – but all regular polygons
with the same number of sides [[are similar|are congruent|have the same area]]!

---
> id: regular-2

We already know the sum of all [internal angles](gloss:internal-angle) in
polygons. For regular polygons all these angles have [[the same size|are alternate angles]],
so we can work out the size of a single internal angle:

{.text-center.reveal(when="blank-0")} `"angle" = blank("sum of all angles","number of angles")/
blank("number of angles","sum of all angles")`
_{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x`._

{.reveal(when="blank-1 blank-2" delay=1000)} If `n=3` we get the size of the
internal angles of an equilateral triangle – we already know that it must be
[[60]]°. _{span.reveal(when="blank-3")} In a regular polygon with ${x}{x|6|3,12,1}
sides, every internal angle is 180° – `"360°"/var("x")` = ${round(180-360/x)}°._

---
> id: regular-area

### The Area of Regular Polygons

::: column(width=320)

    x-geopad.sticky(width=320 height=320): svg
      circle.reveal(name="m" x="point(160, 160)" when="blank-0" animation="pop")
      path(name="p" x="regular(m, 140, n)")
      circle(name="p0" x="p.points[0]")
      circle(name="p1" x="p.points[1]")
      circle(name="k" x="segment(p1,p0).midpoint" hidden)

      path.blue.fill.light.transparent(x="polygon(p0,m,p1)" target="isosceles-triangle")
      path.blue.fill.light.transparent(x="polygon(p0,m,k)" target="right-triangle")
      path.blue.fill.transparent(x="angle(m,k,p0)" size=15 target="right-triangle")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(k,p0,m)" size=25 target="base-angle right-triangle alpha isosceles-triangle" label="α")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(m,p1,k)" size=25 target="base-angle isosceles-triangle")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.thin.reveal(when="blank-0" delay=i*150 x=`segment(p.points[${i}%n],m)` animation="draw")

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="apothem" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow
Here you can see a [regular polygon](gloss:regular-polygon) with ${n}{n|5|4,12,1}
sides. Every side has length [{.green} 1m](target:base). Let’s
try to calculate its area!

First, we can split the polygon into ${toWord(n)} congruent,
[[isosceles|equilateral|right-angled]] triangles.

{.reveal(when="blank-0")} We already know the [[base|height|area]] of these
triangles, but we also need the [[height|legs|medians]] to be able to calculate
its area. _{span.reveal(when="blank-2")} In regular polygons, this height
is sometimes called the [{.yellow}apothem](target:apothem)._

{.reveal(when="blank-1 blank-2" delay=1000)} Notice that there is a [{.blue} right angled
triangle](target:right-triangle) formed by the apothem and half the base of the
isosceles triangle. This means that we can use trigonometry!

{.reveal(when="blank-1 blank-2" delay=2000)} The [{.blue} base angles](target:base-angle)
of the isosceles triangle (let’s call them α) are [[half the|the same|twice the]]
size of the [{.red} internal angles](target:int-angle) of the polygon:

{.text-center.reveal(when="blank-3")} `pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} To find the apothem, we can use the definition of
the [[tangent|sine|cosine]] function:

{.text-center.reveal(when="blank-4")} `tan pill(α, "blue", "alpha") =
pill("opposite", "yellow", "apothem") / pill("adjacent", "green", "half-base") =
blank("apothem", "s", "s/2") / blank("s/2", "s", "apothem")`

{.text-center.reveal(when="blank-5 blank-6")} `⇒ pill("apothem", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Now, the area of the
[{.blue}isosceles triangle](target:isosceles-triangle) is

{.text-center.reveal(when="blank-5 blank-6" delay=2000)} `1/2 "base" × "height"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} The polygon consists of ${toWord(n)}
of these isosceles triangles, all of which have the same area. Therefore, the
total area of the polygon is

{.text-center.reveal(when="blank-5 blank-6" delay=4000)} `A = var("n") ×
var("round(tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`
:::

---

## Quadrilaterals

> section: quadrilaterals
> id: quadrilaterals

In the [previous course](/course/triangles) we investigated many different
properties of triangles. Now let’s have a look at quadrilaterals.

A _regular quadrilateral_ is called a [[square|rectangle|equilateral quadrilateral]].
All of its sides have the same length, and all of its angles are equal.

::: column.quadrilateral.reveal(when="blank-0")

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

{.caption} A __square__ is a quadrilateral with [{.red} four equal sides](target:side)
and [{.blue} four equal angles](target:angle).
:::

---
> id: quadrilaterals-1

For slightly “less regular” quadrilaterals, we have two options. If we just want
the _angles_ to be equal, we get a [__rectangle__](gloss:rectangle). If we just
want the _sides_ to be equal, we get a [__rhombus__](gloss:rhombus).

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} A __Rectangle__ is a quadrilateral with [{.blue} four equal angles](target:angle).
::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

{.caption} A __Rhombus__ is a quadrilateral with [{.red} four equal sides](target:side).
:::

---
> id: quadrilaterals-2

There are a few other quadrilaterals, that are even less regular but still have
certain important properties:

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.yellow.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b)" mark="arrow")
      path.red(x="segment(c,d)" mark="arrow")
      path.blue(x="segment(a,c)" mark="arrow2")
      path.blue(x="segment(b,d)" mark="arrow2")

{.caption} If both pairs of _opposite_ sides are [parallel](gloss:parallel), we
get a __Parallelogram__.
::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,)" mark="bar")
      path.blue(x="segment(f,g)" mark="bar2")
      path.blue(x="segment(g,h)" mark="bar2")
      path.red(x="segment(h,e,)" mark="bar")

{.caption} If two pairs of _adjacent_ sides have the same length, we get a __Kite__.
::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.yellow.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k)" mark="arrow")
      path(x="segment(k,l)")
      path.red(x="segment(i,l)" mark="arrow")

{.caption} If at least one pair of opposite sides is parallel, we get a
__Trapezium__.
:::

---
> id: quadrilaterals-venn

Quadrilaterals can fall into multiple of these categories. We can visualise the
hierarchy of different types of quadrilaterals as a [Venn
diagram](gloss:venn-diagram):

    figure: include svg/venn.svg

For example, every rectangle is also a [[parallelogram|rhombus|square]], and
every [[rhombus|trapezium|parallelogram]] is also a kite. A rhombus is
[[sometimes|always|never]] a square and a rectangle is [[always|sometimes|never]]
a trapezium.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} To avoid any ambiguity, we
usually use just the most specific type.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow
Now pick four points, anywhere in the grey box on the left.
_{span.reveal(when="points")} We can connect all of them to form a quadrilateral._

{.reveal(when="points" delay=1000)} Let’s find the midpoint of each of the four
sides. If we connect the midpoints, we get [[another quadrilateral|a triangle|a rectangle]].

{.reveal(when="blank-0")} Try moving the vertices of the outer quadrilateral and
observe what happens to the smaller one. It looks like it is not just _any_
quadrilateral, but always a [[parallelogram|trapezium|rectangle]]!

{.reveal(when="blank-1")} But why is that the case? Why should the result
for _any_ quadrilateral always end up being a parallelogram? To help us explain,
we need to draw one of the [diagonals](gloss:polygon-diagonal) of the original
quadrilateral.

{.reveal(when="diagonal")} The diagonal splits the quadrilateral into [two
triangles](target:triangle). And now you can see that [two of the sides](target:midsegment)
of the inner quadrilateral are actually [[midsegments|medians|perpendicular bisectors]]
of these triangles.

{.reveal(when="blank-2")} In the [previous course](/course/triangles/properties)
we showed that [midsegments](gloss:triangle-midsegment) of a triangle are always
parallel to its base. In this case, it means that [both these sides](target:parallel)
are parallel to the diagonal – therefore they must also be [[parallel to each
other|the same length|perpendicular to each other]].

{.reveal(when="blank-3" delay=2000)} We can do exactly the same with the [second
diagonal](target:other) of the quadrilateral, to show that both pairs of
opposite sides are parallel. And this is all we need to prove that the inner
quadrilateral is a [parallelogram](gloss:parallelogram). _{span.qed}_
:::

---
> id: parallelograms

### Parallelograms

It turns out that parallelograms have many other interesting properties, other
than opposite sides being parallel. Which of the following six statements are
true?

::: column.grow

    x-picker.list
      .item.md The opposite sides are [congruent](gloss:congruent).
      .item(data-error="parall-error-1") The internal angles are always less than 90°.
      .item.md(data-error="parall-error-2") The diagonals [bisect](gloss:angle-bisector) the internal angles.
      .item The opposite angles are congruent.
      .item(data-error="parall-error-3") Both diagonals are congruent.
      .item(data-error="parall-error-4") Adjacent sides have the same length
      .item The two diagonals bisect each other in the middle.

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=20 cy=190)
      circle.move(name="c" cx=220 cy=190)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.red(x="segment(a,b)")
      path.red(x="segment(c,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(a,d)")
      path.thin.light(x="segment(a,c)")
      path.thin.light(x="segment(b,d)")

      path.thin.light(x="angle(a,b,c).sup")
      path.thin.light(x="angle(b,c,d).sup")
      path.thin.light(x="angle(c,d,a).sup")
      path.thin.light(x="angle(d,a,b).sup")

:::

---
> id: parallelograms-proof

Of course, simply “observing” these properties is not enough. To be sure that
they are _always_ true, we need to _prove_ them:

::: tab
#### Opposite Sides and Angles _{span.check(when="diagonal blank-0 blank-1")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a" cx=80 cy=80)
      circle.move(name="b" cx=20 cy=220)
      circle.move(name="c" cx=220 cy=220)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.reveal.fill.red(when="diagonal" x="angle(a,o?c:b,d).sup" target="red-angle")
      path.reveal.fill.red(when="diagonal" x="angle(c,o?a:d,b).sup" target="red-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(d,o?a:b,c).sup" target="blue-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(b,o?c:d,a).sup" target="blue-angle")

      path.fill.yellow.transparent(x="polygon(a,b,o?c:d)" target="triangles")
      path.fill.green.transparent(x="polygon(o?a:b,c,d)" target="triangles")
      path(x="polygon(a,b,c,d)")

      path.green.transparent(x="segment(a,b)" target="sides")
      path.green.transparent(x="segment(c,d)" target="sides")
      path.yellow.transparent(x="segment(b,c)" target="sides")
      path.yellow.transparent(x="segment(a,d)" target="sides")
      path.fill.green.transparent(x="angle(a,b,c).sup" target="angles")
      path.fill.green.transparent(x="angle(c,d,a).sup" target="angles")
      path.fill.yellow.transparent(x="angle(b,c,d).sup" target="angles")
      path.fill.yellow.transparent(x="angle(d,a,b).sup" target="angles")

::: column.grow
{.task} Let’s try to prove that the opposite sides and angles in a parallelogram
are always congruent.

Start by drawing one of the diagonals of the parallelogram.

{.reveal(when="diagonal")} The diagonal creates four new angles with the sides
of the of the parallelogram. The two [{.red} red angles](target:red-angle) and the two
[{.blue} blue angles](target:blue-angle) are [alternate angles](gloss:alternate-angles),
so they must each be [[congruent|adjacent|supplementary]].

{.reveal(when="blank-0")} Now if we look at the [two triangles](target:triangles)
created by the diagonal, we see that they have two congruent angles,
and [one congruent side](target:diagonal). By the [[ASA|AAS|AA]] congruence
condition, both triangles must be congruent.

{.reveal(when="blank-1")} This means that the other corresponding parts of the
triangles must also be congruent: in particular, both [pairs of opposite
sides](target:sides) are congruent, and both [pairs of opposite
angles](target:angles) are congruent. _{span.qed}_
:::

{.reveal(when="blank-1")} It turns out that the converse is also true: if both
pairs of opposite sides (or angles) in a quadrilateral are congruent, then the
quadrilateral has to be a parallelogram.

    //- Adjacent angles are supplementary.

::: tab
#### Diagonals _{span.check(when="diagonal blank-2 blank-3")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a1" cx=80 cy=80 label="A")
      circle.move(name="b1" cx=20 cy=220 label="B")
      circle.move(name="c1" cx=220 cy=220 label="C")
      circle(name="d1" x="b1.rotate(pi,line(a1,c1).midpoint)" label="D")
      circle(name="m1" x="polygon(a1,b1,c1,d1).centroid" label="M")

      path.fill.yellow.light(x="polygon(b1,m1,c1)" target="triangles1")
      path.fill.yellow.light(x="polygon(a1,m1,d1)" target="triangles1")

      path.fill.red(x="angle(c1,a1,d1).sup" target="anglesR")
      path.fill.red(x="angle(b1,c1,a1).sup" target="anglesR")
      path.fill.blue(x="angle(a1,d1,b1).sup" target="anglesB")
      path.fill.blue(x="angle(d1,b1,c1).sup" target="anglesB")

      path(x="polygon(a1,b1,c1,d1)")
      path(x="segment(a1,c1)")
      path(x="segment(b1,d1)")
      path.green(x="segment(a1,d1)" target="side1")
      path.green(x="segment(b1,c1)" target="side1")

      path.yellow.tick.transparent(x="segment(a1,m1)" target="AM")
      path.yellow.tick.transparent(x="segment(b1,m1)" target="BM")
      path.yellow.tick.transparent(x="segment(c1,m1)" target="CM")
      path.yellow.tick.transparent(x="segment(d1,m1)" target="DM")

::: column.grow
{.task} Now prove that the two diagonals in a parallelogram bisect each other.

Let’s think about the two yellow triangles generated by the diagonals:

* We have just proved that the [{.green} two green sides](target:side1) are congruent, because they
  are opposite sides of a parallelogram.
* The [{.red} two red angles](target:anglesR) and [{.blue} two blue angles](target:anglesB) are
  congruent, because they are [[alternate angles|opposite angles|right angles]].

{.reveal(when="blank-2")} By the [[ASA|SSS|AAS]] condition, both of the yellow
triangles must therefore also be congruent.

{.reveal(when="blank-3")} Now we can use the fact the corresponding parts of congruent triangles are
also congruent, to conclude that [{.yellow} `bar(AM)`](target:AM) = [{.yellow} `bar(CM)`](target:CM)
and [{.yellow} `bar(BM)`](target:BM) = [{.yellow} `bar(DM)`](target:DM). In other words, the two
diagonals intersect at their midpoints. _{span.qed}_
:::

{.reveal(when="blank-3")} Like before, the opposite is also true: if the two
diagonals of a quadrilateral bisect each other, then the quadrilateral is a
parallelogram.
:::

---
> id: kites

### Kites

::: column.grow
We showed above that the two pairs of [[opposite|adjacent]] sides of a
parallelogram are congruent. In a kite, two pairs of _adjacent_ sides are
congruent.

The name _Kite_ clearly comes from its shape: it looks like the kites you can
fly in the sky. However, of all the special quadrilaterals we have seen so far,
the Kite is the only one that can also be [concave](gloss:concave): if it is
shaped like a dart or arrow:
::: column(width=320)

    x-img(src="images/kites.jpg")

:::

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a" x="point(20,90)")
      circle(name="b" x="point(90,20)")
      circle.move(name="c" cx=200 cy=90 project="segment(point(100,90),point(220,90))")
      circle(name="d" x="point(90,160)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.red(x="segment(a,b)")
      path.red(x="segment(a,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(d,c)")

{.caption} A convex kite
::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a1" x="point(20,90)")
      circle(name="b1" x="point(220,20)")
      circle.move(name="c1" cx=150 cy=90 project="segment(point(70,90),point(210,90))")
      circle(name="d1" x="point(220,160)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,d1)")
      path.blue(x="segment(b1,c1)")
      path.blue(x="segment(d1,c1)")

{.caption} A concave kite that looks like an arrow
:::

---
> id: kites-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=30 cy=150)
      circle.move(name="b" cx=110 cy=250)
      circle.move(name="c" cx=270 cy=150)
      circle(name="d" x="b.reflect(line(a,c))")
      circle.transparent(name="m" x="line(a,c).project(b)")

      path.fill.light.blue.reveal(when="next-0" x="angle(b,a,d).sup" target="angles vAngle sas")
      path.fill.light.green.reveal(when="next-0" x="angle(b,c,d).sup" target="angles vAngle")
      path.fill.light.red.reveal(when="next-0" x="angle(a,d,c).sup" target="angles")
      path.fill.light.red.reveal(when="next-0" x="angle(a,b,c).sup" target="angles")
      path.fill.light.yellow.reveal(when="next-3" x="angle(a,m,d).sup" target="alpha" label="α")
      path.fill.light.yellow.reveal(when="next-3" x="angle(b,m,a).sup" target="beta" label="β")

      path.fill.red.transparent(x="polygon(a,b,c)" target="triangle1")
      path.fill.yellow.transparent(x="polygon(a,c,d)" target="triangle1")
      path.fill.red.transparent(x="polygon(a,m,d)" target="triangle2")
      path.fill.yellow.transparent(x="polygon(a,m,b)" target="triangle2")

      path.green(x="segment(a,b)" target="sss sas")
      path.green(x="segment(a,d)" target="sss sas")
      path.blue(x="segment(d,c)" target="sss")
      path.blue(x="segment(b,c)" target="sss")

      path.red.light.thin.reveal(when="blank-1" x="line(a,c)" target="symmetry" animation="draw")
      path.red.reveal(when="blank-1" x="segment(a,c)" target="symmetry sss d1" animation="draw")
      path.red.transparent(x="segment(a,m)" target="sas" animation="draw")
      path.red.reveal(when="next-2" x="segment(b,d)" animation="draw")

::: column.grow
You might have noticed that all kites are [[symmetric|similar]].
_{span.reveal(when="blank-0")} The [axis of symmetry](gloss:axis-of-symmetry) is
[[one of the diagonals|one of the sides|a midsegment]]._

{.reveal.r(when="blank-1")} The diagonal splits the kite into [two congruent
triangles](target:triangle1). We know that they are congruent from the
[SSS](gloss:triangle-sss) condition: both triangles have [three congruent
sides](target:sss) (red, green and blue).
[Continue](btn:next)

{.reveal.r(when="next-0")} Using [CPOCT](gloss:cpoct), we therefore know that the
[corresponding angles](target:angles) must also be congruent.
[Continue](btn:next)

{.reveal.r(when="next-1")} This means, for example, that the [{.red} diagonal](target:d1)
is a [[bisector|perpendicular|median]] of the [two angles](target:vAngle) at its
ends.
[Continue](btn:next)

{.reveal.r(when="next-2")} We can go even further: if we draw the other diagonal,
we get [two more, smaller triangles](target:triangle2). These must also be
congruent, because of the [SAS](gloss:triangle-sss) condition: they have the
same [two sides and included angle](target:sas).
[Continue](btn:next)

{.reveal(when="next-3")} This means that [{.yellow} angle α](target:alpha) must
also be the same as [{.yellow} angle β](target:beta). Since they are adjacent,
[supplementary angles](gloss:supplementary-angles) both α and β must be [[90]]°.

{.reveal(when="blank-3")} In other words, the diagonals of a kite are always
[[perpendicular|parallel]].
:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Area of Quadrilaterals

When calculating the area of triangles in the previous course, we used the
trick of converting it into a [[rectangle|square|pentagon]]. It turns out that
we can also do that for some quadrilaterals:

::: tab
#### Parallelogram _{span.check(when="draw-1 blank-1")}_

::: column(width=300)

    x-geopad(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a1" x="point(4,3)")
      circle.transparent(name="b1" x="point(12,3)")
      circle.transparent(name="c1" x="point(10,9)")
      circle.transparent(name="d1" x="point(2,9)")
      path.fill.blue.light(x="polygon(a1,b1,c1,d1)")
      path.fill.red.transparent(x="polygon(point(2,3),a1,d1)" target="triangle-1")
      path.fill.green.transparent(x="polygon(point(10,3),b1,c1)" target="triangle-2")
      path.blue(x="polygon(a1,b1,c1,d1)")

::: column.grow
On the left, try to draw a rectangle that has the same area as the
parallelogram.

{.reveal(when="draw-1")} Can you see that the [{.red} missing triangle](target:triangle-1)
on the left is [[exactly the same as|smaller than|bigger than]] the [{.green} overlapping
triangle](target:triangle-2) on the right?
_{span.reveal(when="blank-1")}Therefore the area of a parallelogram is_

{.text-center.reveal(when="blank-1")} Area = __{.i.m-green}base__ × __{.i.m-yellow}height__

{.reveal(when="blank-1" delay=1000)} _Be careful when measuring the height of a
parallelogram: it is usually not the same as one of the two sides._
:::

::: tab
#### Trapezium _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Recall that trapeziums are quadrilaterals with one pair of [{.blue} parallel sides](target:bases).
These parallel sides are called the __bases__ of the trapezium.

::: column(width=300)

    x-geopad.sticky(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a2" x="point(4,3)")
      circle.transparent(name="b2" x="point(9,3)")
      circle.transparent(name="c2" x="point(13,9)")
      circle.transparent(name="d2" x="point(2,9)")
      path.fill.blue.light(x="polygon(a2,b2,c2,d2)")
      path.fill.red.transparent(x="polygon(a2,point(3,3),point(3,9),d2)" target="triangles-3")
      path.fill.yellow.transparent(x="polygon(b2,point(11,3),point(11,9),c2)" target="triangles-3")
      path.blue(x="polygon(a2,b2,c2,d2)")
      path.blue(x="segment(a2,b2)" target="bases base-1")
      path.blue(x="segment(d2,c2)" target="bases base-2")
      path.green.transparent(x="segment(point(2,3),d2)" target="t-height")
      path.yellow.transparent(x="segment(point(3,6),point(11,6))" target="t-width")
      circle.reveal(when="blank-3" x="line(a2,d2).midpoint" target="t-width" animation="pop")
      circle.reveal(when="blank-3" x="line(b2,c2).midpoint" target="t-width" animation="pop")

::: column.grow
Like before, try to draw a rectangle that has the same area as this trapezium.
_{span.reveal(when="draw-2")} Can you see how the [missing and added
triangles](target:triangles-3) on the left and the right cancel out?_

{.reveal(when="draw-2" delay=2000)} The [{.green} height](target:t-height)
of this rectangle is the [[distance between|average of|length of]] the [{.blue} parallel
sides](target:bases) of the trapezium.

{.reveal.r(when="blank-2")} The [{.yellow} width](target:t-width)
of the rectangle is the distance between the [[midpoints|endpoints]] of the two
non-parallel sides of the trapezium. _{span.reveal(when="blank-3")} This is
called the __midsegment__ of the trapezium._
_{button.next-step.reveal(when="blank-3")} Continue_

{.reveal(when="next-0")} Like with [triangles](gloss:triangle-midsegment), the
midsegment of a trapezium is [[parallel to|perpendicular to|the same length as]]
its two bases. The length of the midsegment is the average of the lengths of the
bases: `(a+c)/2`.

{.reveal(when="blank-4")} If we combine all of this, we get an equation for the area of a trapezium
with parallel sides [{.blue} _a_](target:base-2) and [{.blue} _c_](target:base-1), and height
[{.green} _h_](target:t-height):

{.text-center.reveal(when="blank-4")} `A = h xx ((a+c) / 2)`
:::

::: tab
#### Kite _{span.check(when="blank-5")}_

::: column(width=300)

    x-geopad(width=300 height=220 grid=20 no-points): svg
      circle.transparent(name="a3" x="point(1,5)")
      circle.transparent(name="b3" x="point(5,1)")
      circle.transparent(name="c3" x="point(13,5)")
      circle.transparent(name="d3" x="point(5,9)")

      path.fill.blue.light(x="polygon(a3,b3,c3,d3)")
      path.green(x="segment(a3,c3)" label="d1" target="diag3 d31")
      path.yellow(x="segment(b3,d3)" label="d2" target="diag3 d32")
      path(x="polygon(point(1,1),point(13,1),point(13,9),point(1,9))" target="rect4")
      path.blue(x="polygon(a3,b3,c3,d3)")

      path.fill.red.transparent(x="polygon(a3,b3,point(5,5))" target="inside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(5,5))" target="inside")
      path.fill.green.transparent(x="polygon(c3,d3,point(5,5))" target="inside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(5,5))" target="inside")

      path.fill.red.transparent(x="polygon(a3,b3,point(1,1))" target="outside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(13,1))" target="outside")
      path.fill.green.transparent(x="polygon(c3,d3,point(13,9))" target="outside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(1,9))" target="outside")

::: column.grow
In this kite, the [two diagonals](target:diag3) form the width and the height of
a large [rectangle](target:rect4) that surrounds the kite.

The area of this rectangle is [[twice|the same as|three times]] the area of the
kite. _{span.reveal(when="blank-5")} Can you see how each of the [four
triangles](target:inside) that make up the kite are the same as the
[four gaps](target:outside) outside it?_

{.reveal(when="blank-5")} This means that the area of a kite with diagonals
[{.green}`d_1`](target:d31) and [{.yellow}`d_2`](target:d32) is

{.text-center.reveal(when="blank-5")} `"Area" = 1/2 pill(d_1,"green","d31") × pill(d_2,"yellow","d32")`.
:::

::: tab
#### Rhombus _{span.check(when="blank-6 blank-7")}_

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a4" cx=40 cy=120)
      circle.move(name="b4" cx=150 cy=50)
      circle.move(name="d4" cx=150 cy=190 project="circle(a4,distance(a4,b4))")
      circle(name="c4" x="d4.add(b4).subtract(a4)")

      path.fill.blue.light(x="polygon(a4,b4,c4,d4)")

      path.thin(x="line(c4,d4)")
      circle(name="q4" x="line(c4,d4).project(a4)")
      path.thin(x="angle(a4,q4,d4).sup" size=15)
      path.red(x="segment(q4,a4)" label="height" target="height")

      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow
A [Rhombus](gloss:rhombus) is a quadrilateral that has four congruent sides. You
might remember that every rhombus is a [[parallelogram|rectangle|square]] – and
also a [[kite|hexagon|concave polygon]].

{.reveal(when="blank-6 blank-7")} This means that to find the area of a rhombus,
we can use either the equation for the area of a parallelogram, or that for the
area of a kite:

{.text-center.reveal(when="blank-6 blank-7")} _Area_ =
[{.i.blue}base](target:base) × [{.i.red}height](target:height) = `1/2`
[{.i.green}d1](target:d41) × [{.i.yellow}d2](target:d42).

{.reveal(when="blank-6 blank-7" delay=1000)} _In different contexts, you might
be given different parts of a Rhombus (sides, height, diagonals), and you should
pick whichever equation is more convenient._
:::

:::

    //- ### Cyclic quadrilaterals

    //- ### Isosceles Trapeziums
    //-
    //- An isosceles trapezoid is a trapezoid where the non-parallel sides are
    //- congruent. The third trapezoid above is an example of an isosceles
    //- trapezoid. Think of it as an isosceles triangle with the top cut off.
    //- Isosceles trapezoids also have parts that are labeled much like an
    //- isosceles triangle. Both parallel sides are called bases.
    //-
    //- In an isosceles triangle, the two base angles are congruent. This
    //- property holds true for isosceles trapezoids.
    //-
    //- The converse is also true: If a trapezoid has congruent base angles,
    //- then it is an isosceles trapezoid.
    //-
    //- That the diagonals of a rectangle are congruent AND they isect each
    //- other. The diagonals of an isosceles trapezoid are also congruent, but
    //- they do NOT bisect each other.

---

## Tessellations

> section: tessellations
> id: tessellations

[Polygons](gloss:polygon) appear everywhere in nature. They are especially
useful if you want to tile a large area, because you can fit polygons together
without any gaps or overlaps. Patterns like that are called
[__tessellations__](gloss:tessellation).

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Hexagonal|Triangular|Quadratic]] honeycomb
::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Sinaloan Milk Snake skin
::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Cellular structure of leafs
::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Basalt columns at Giant’s Causeway in Northern Ireland
::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Pineapple skin
::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Shell of a tortoise
:::

---
> id: tessellations-1

Humans have copied many of these natural patterns in art, architecture and
technology – from ancient Rome to the present. Here are a few examples:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Rectangular|Quadratic|Hexagonal]] pavement pattern
::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Greenhouse at the Eden Project in England
::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaic at Alhambra
::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Triangular|Hexagonal|Rectangular]] roof at the British Museum in London
::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Cellular tessellation pavilion in Sydney
::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Study of Regular Division of the Plane with Reptiles_, M. C. Escher
:::

    // TODO Carbon Nanotube
    // application: https://en.wikipedia.org/wiki/Carbon_nanotube
    // https://en.wikipedia.org/wiki/File:Types_of_Carbon_Nanotubes.png
    // https://commons.wikimedia.org/wiki/File:FlyingThroughNanotube.png

---
> id: tessellation-drawing
> goals: shapes0 shapes1

Here you can create your own tessellations using regular polygons. Simply drag
new shapes from the sidebar onto the canvas. Which shapes tessellate well? Are
there any shapes that don’t tessellate at all? Try to create interesting
patterns!

    figure: .tessellation.polypad
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(tile="polygon" props=({shape: s}))
      .btn-row: button.icon-btn(title="Download image"): x-icon(name="download")
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 Examples of other students’ tessellations
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### Tessellations from regular polygons

You might have noticed that some [regular polygons](gloss:regular-polygon) (like
[[squares|pentagons]]) tessellate very easily, while others (like
[[pentagons|triangles|hexagons]]) don’t seem to tessellate at all.

---
> id: tessellation-regular-1

This has to do with the size of their [internal angles](gloss:internal-angle),
which we learned to calculate before. At every [vertex](gloss:polygon-vertex) in
the tessellation, the internal angles of multiple different polygons meet. We
need all of these angles to add up to [[360]]°, otherwise there will either be
a gap or an overlap.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")
    include svg/tessellations/triangles.svg

{.caption} Triangles [[tessellate|don’t tessellate]] _{span.reveal(when="blank-0")} because 6 × 60° = 360°._
::: column(width=160)
    include svg/tessellations/squares.svg

{.caption} Squares [[tessellate|don’t tessellate]] _{span.reveal(when="blank-1")} because 4 × 90° = 360°._
::: column(width=160)
    include svg/tessellations/pentagons.svg

{.caption} Pentagons [[don’t tessellate|tessellate]] _{span.reveal(when="blank-2")} because multiples of 108°
don’t add up to 360°._

    //- {.caption}3 × 108° = 324° is too small, but 4 × 108° = 432° is too big.
::: column(width=160)
    include svg/tessellations/hexagons.svg

{.caption} Hexagons [[tessellate|don’t tessellate]] _{span.reveal(when="blank-3")} because 3 × 120° = 360°._
:::

---
> id: tessellation-regular-3

You can similarly check that, just like pentagons, any regular polygon with 7 or
more sides doesn’t tessellate. This means that the only regular polygons that
tessellate are triangles, squares and hexagons!

Of course you could combine different kinds of regular polygons in a
tessellation, provided that their internal angles can add up to 360°:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Squares and triangles#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Hexagons and triangles#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Hexagons, squares and triangles#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Octagons and squares#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Dodecagons (12-gons) and triangles#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Dodecagons, hexagons and squares#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Tessellations from irregular polygons

We can also try making tessellations out of [irregular polygons](gloss:irregular-polygon)
– as long as we are careful when rotating and arranging them.

::: column(width=360)

    x-geopad(width=360 height300): svg
      circle.move(name="a" cx=220 cy=90 target="vertex")
      circle.move(name="b" cx=145 cy=180 target="vertex")
      circle.move.pulsate(name="c" cx=225 cy=200 target="vertex")

      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(pi,line(b,c).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow
It turns out that you can tessellate not just equilateral triangles, but _any
triangle_! Try moving the [vertices](target:vertex) in this diagram.

The sum of the internal angles in a triangle is [[180]]°. If we use each angle
[[twice|once|three times]] at every vertex in the tessellation, we get 360°:

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" cx=100 cy=80)
      circle(name="p" cx=100 cy=150)
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(pi,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(pi,m)")
      circle(name="t" x="q.rotate(pi,m)")
      circle(name="u" x="q.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,q).sup" size=20)
      path.fill.blue(x="angle(q,m,r).sup" size=20)
      path.fill.green(x="angle(r,m,s).sup" size=20)
      path.fill.red(x="angle(s,m,t).sup" size=20)
      path.fill.blue(x="angle(t,m,u).sup" size=20)
      path.fill.green(x="angle(u,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,q,r).sup" size=20)
      path.fill.red.light(x="angle(r,s,m).sup" size=20)
      path.fill.red.light(x="angle(m,t,u).sup" size=20)
      path.fill.red.light(x="angle(u,p,m).sup" size=20)
      path.fill.blue.light(x="angle(p,q,m).sup" size=20)
      path.fill.blue.light(x="angle(m,r,s).sup" size=20)
      path.fill.blue.light(x="angle(s,t,m).sup" size=20)
      path.fill.blue.light(x="angle(m,u,p).sup" size=20)
      path.fill.green.light(x="angle(m,p,q).sup" size=20)
      path.fill.green.light(x="angle(q,r,m).sup" size=20)
      path.fill.green.light(x="angle(m,s,t).sup" size=20)
      path.fill.green.light(x="angle(t,u,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")
:::

---
> id: tessellation-quadrilaterals

::: column(width=360)

    x-geopad(width=360 height=300): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move.pulsate(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)

      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(pi,line(c,d).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)


::: column.grow
More surprisingly, _any quadrilateral_ also tessellates! Their internal angle
sum is [[360]]°, so if we use each angle [[once|twice|three times]] at every
vertex in the tessellation, we we get 360°.

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(pi,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(pi,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(pi,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(pi,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,r).sup" size=20)
      path.fill.blue(x="angle(r,m,t).sup" size=20)
      path.fill.green(x="angle(t,m,v).sup" size=20)
      path.fill.yellow(x="angle(v,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,r,s).sup" size=20)
      path.fill.red.light(x="angle(t,u,v).sup" size=20)
      path.fill.red.light(x="angle(w,p,m).sup" size=20)
      path.fill.blue.light(x="angle(q,r,m).sup" size=20)
      path.fill.blue.light(x="angle(m,t,u).sup" size=20)
      path.fill.blue.light(x="angle(v,w,p).sup" size=20)
      path.fill.green.light(x="angle(p,q,r).sup" size=20)
      path.fill.green.light(x="angle(s,t,m).sup" size=20)
      path.fill.green.light(x="angle(m,v,w).sup" size=20)
      path.fill.yellow.light(x="angle(m,p,q).sup" size=20)
      path.fill.yellow.light(x="angle(r,s,t).sup" size=20)
      path.fill.yellow.light(x="angle(u,v,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")
:::

---
> id: tessellation-pentagons

Pentagons are a bit trickier. We already saw that _regular_ pentagons [[don’t
tessellate|tessellate]], but what about non-regular ones?

---
> id: tessellation-pentagons-1

Here are three different examples of tessellations with pentagons. They are not
_regular_, but they are perfectly valid 5-sided polygons:

::: column(width=220)
    include svg/tessellations/pentagons-1.svg
::: column(width=220)
    include svg/tessellations/pentagons-2.svg
::: column(width=220)
    include svg/tessellations/pentagons-3.svg
:::

Over time, mathematicians have only found 15 different kinds of tessellations with (convex)
pentagons – the most recent of which was discovered in 2015.

---
> id: pentagons
> goals: shapes

Two years later, in 2017, _Michaël Rao_ published a proof that there are no other possibilities,
except the 15 that had already been found. Can you make a tessellation using all of them?

    figure
      .tessellation.polypad
        x-polypad
        .menu
          for i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            .add(tile="polygon" props=({shape: `pentagon-${i}`}))
        .btn-row
          button.icon-btn(title="Flip selection"): x-icon(name="flip")
          button.icon-btn(title="Download image"): x-icon(name="download")
        svg.overlay: g.tiles.active
      .caption Shapes provided by the Math Happens Foundation

---
> id: escher

### Tessellations in Art

Many artists, architects and designers use tessellations in their work. One of the most famous
examples is the Dutch artist [M. C. Escher](bio:escher). His works contain strange, mutating
creatures, patterns and landscapes:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Sky and Water I” (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lizard” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lizard, Fish, Bat” (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Butterfly” (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Two Fish” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Shells and Starfish” (1941)

These artworks often look fun and effortless, but the underlying mathematical
principles are the same as before: angles, rotations, translations and polygons.
If the maths isn’t right, the tessellation is not going to work!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings

All the tessellations we saw so far have one thing in common: they are
__periodic__. That means they consist of a regular pattern that is repeated
again and again. They can continue forever in all directions and they will look
the same everywhere.

In the 1970s, the British mathematician and physicist [Roger Penrose](bio:penrose)
discovered _non-periodic_ tessellations – they still continue infinitely in all
directions, but _never_ look exactly the same. These are called __Penrose
tilings__, and you only need a few different kinds of polygons to
create one:

::: figure

    include svg/penrose.svg
    x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

{.caption} Move the slider to reveal the underlying structure of this tessellation. Notice how the
same patterns appear at various scales: the yellow pentagons, blue stars, purple rhombi and green
‘ships’ appear in their original size, in a __{.blue} slightly larger size__ and an __{.red} even
larger size__. This _self-similarity_ can be used to prove that a Penrose tiling is always
non-periodic.

:::

---
> id: penrose-1

Penrose was exploring tessellations purely for fun, but it turns out that the
internal structure of some real materials (like aluminium) follow a similar
pattern. The pattern was even used on toilet paper, because the manufacturers
noticed that a non-periodic pattern can be rolled up without any bulges.

---

## Polyhedra

> section: polyhedra
> id: polyhedra

Up to now we have just looked at what we can do with polygons in a flat,
two-dimensional world. A [__polyhedron__](gloss:polyhedron) is a three-dimensional
object that is made up of polygons. Here are some examples:

::: column.padded-thin(width=220)
    x-polyhedron#poly1(size=220 shape="PentagonalPrism")
::: column(width=220)
    x-polyhedron(size=220 shape="Hebesphenorotunda")
::: column(width=220)
    x-polyhedron(size=220 shape="StellatedDodecahedron")
:::

Polyhedra cannot contain curved surfaces – spheres and cylinders, for example,
are not polyhedra.

The polygons that make up a polyhedron are called its [__faces__](gloss:polyhedron-face).
The lines where two faces are connected are called [__edges__](gloss:polyhedron-edge),
and the corners where the edges meet are called [__vertices__](gloss:polyhedron-vertex).

---
> id: euler

Polyhedra come in many different shapes and sizes – from simple cubes or
pyramids with just a few faces, to complex objects like the star above, which
has 60 triangular faces. It turns out, however, that _all_ polyhedra have one
important property in common:

::: .theorem
__Euler’s Polyhedron Formula__<br>
In every polyhedron, the number of faces (_F_) plus the number of vertices (_V_)
is two more than the number of edges (_E_). In other words,

{.text-center} `F + V = E + 2`
:::

For example, if a polyhedron has 12 faces and 18 vertices, we know that it must
have [[28]] edges.

---
> id: euler-1

This equation was discovered by the famous Swiss mathematician [Leonard
Euler](bio:euler). It is true for any polyhedron, as long as it doesn’t contain
any holes.

If you try different polyhedra, like the ones above, you’ll find that Euler’s
formula always works. In [a later course](/course/graph-theory/planar-graphs)
you’ll learn how to actually prove it mathematically.

---

## Nets and Cross Sections

> section: nets-cross-sections
> sectionStatus: dev

Here is a demo for intersections of a polyhedron and a plane:

    figure.var
      x-select.tabs(:bind="poly")
        div(value="tetrahedron") Tetrahedron
        div(value="cube") Cube
        div(value="octahedron") Octahedron
        div(value="dodecahedron") Dodecahedron
        div(value="icosahedron") Icosahedron
      x-polyhedron-slice(:shape="poly" :opacity="opacity")

---

Our entire world is three-dimensional – but it is often much easier to draw or
visualise flat, two-dimensional objects. And there are a few different ways to
view three-dimensional polyhedra in a two-dimensional way.

    //- x-folding(shape="Tetrahedron" size=400)
    //- x-folding(shape="Cube" size=400)
    //- x-folding(shape="Octahedron" size=400)
    //- x-folding(shape="Dodecahedron" size=400)
    //- x-folding(shape="Icosahedron" size=400)

Which of these nets makes a cube
Match the net to the object
https://github.com/polymake/matchthenet
Drawing Nets

Describe the cross section formed by the intersection of the plane and the solid.

A cross-section is the intersection of a plane with a solid.
Another way to represent a three-dimensional figure in a two dimensional plane
is to use a net. A net is an unfolded, flat representation of the sides of a
three-dimensional shape.

rotate a cube to make a hexagonal cross-section

    // ---

    // ## Scaling Shapes and Solids

    // > section: scaling
    // > sectionStatus: dev

    // TODO

---

## Platonic Solids

> section: platonic
> id: platonic

At the beginning of this course we defined [regular polygons](gloss:regular-polygon)
as particularly “symmetric” polygons, where all sides and angles are the same.
We can do something similar for polyhedra.

In a _regular polyhedron_ all [faces](gloss:polyhedron-face) are all the same
kind of regular polygon, and the same number of faces meet at every
[vertex](gloss:polyhedron-vertex). Polyhedra with these two properties are
called [__Platonic solids__](gloss:platonic-solid), named after the Greek
philosopher [Plato](bio:plato).

    //- The pyramid on the right of not a Platonic solid. It consists of two
    //- different kinds of polygons (squares and triangles), and it has [[4]]
    //- faces meeting at the top vertex, but only [[3]] at the bottom vertices.

So what do the Platonic solids look like – and how many of them are there? To
make a three-dimensional shape, we need at least [[3]] faces to meet at every
vertex. Let’s start systematically with the smallest regular polygon:
equilateral triangles:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow
If we create a polyhedron where three [equilateral triangles](gloss:equilateral-triangle)
meet at every vertex, we get the shape on the left. It is called a
__Tetrahedron__ and has [[4]] faces. _{.reveal(when="blank-0")}(“Tetra” means
“four” in Greek)._
:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow
If four equilateral triangles meet at every vertex, we get a different Platonic
solid. It is called the __Octahedron__ and has [[8]] faces.
_{.reveal(when="blank-0")}(“Octa” means “eight” in Greek. Just like “Octagon”
means 8-sided shape, “Octahedron” means 8-faced solid.)_
:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow
If [[five]] triangles meet at every vertex, we get the __Icosahedron__. It has
[[20]] faces. _{.reveal(when="blank-1")}(“Icosa” means “twenty” in Greek.)_
:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow
If [[six]] triangles meet at every vertex, something different happens: we
simply get [[a tessellation|a quadrilateral|another Icosahedron]],
_{span.reveal(when="blank-1")}instead of a three-dimensional polyhedron._
:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow
And seven or more triangles at every vertex also don’t produce new polyhedra:
there is not enough space around a vertex, to fit that many triangles.
:::

This means we’ve found [[three]] Platonic solids consisting of triangles. Let’s
move on to the next regular polygon: squares.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow
If [[three]] squares meet at every vertex, we get the __cube__. Just like dice,
it has [[6]] faces. _{span.reveal(when="blank-1")}The cube is sometimes also
called *Hexahedron*, after the Greek word “hexa" for “six”._
:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow
If [[four]] squares meet at every vertex, we get [[another tessellation|a tetrahedron|another cube]].
_{span.reveal(when="blank-1")}And like before, five or more squares also won’t work._
:::

---
> id: platonic-dodecahedron

Next, let’s try regular pentagons:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow
If [[three]] pentagons meet at every vertex, we get the __Dodecahedron__. It has
[[12]] faces. _{.reveal(when="blank-1")} (“Dodeca” means “twelve” in Greek.)_
:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow
Like before, four or more pentagons [[don’t work|are possible]] because there is
not enough space.
:::

---
> id: platonic-hexagons

The next regular polygon to try are hexagons:

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow
If three hexagons meet at every vertex, we immediately get a [[tessellation|polyhedron|hexahedron]].
_{span.reveal(when="blank-0")} Since there is no space for more than three, it
seems like there are no Platonic solids consisting of hexagons._
:::

---
> id: platonic-final

The same also happens for all regular polygons with more than six sides. They
don’t tessellate, and we certainly don’t get any three-dimensional polygons.

This means that there are just [[five]] Platonic solids! Let’s have a look at
all of them together:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")
__Tetrahedron__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual}[[4]] Faces_<br>
_{span.dual}[[4]] Vertices_<br>
_{span.dual}[[6]] Edges_

::: column.grow.text-center(width=120)
__Cube__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")}[[6]] Faces_<br>
_{span.dual(target="dual1")}[[8]] Vertices_<br>
_{span.dual}[[12]] Edges_

::: column.grow.text-center(width=120)
__Octahedron__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")}[[8]] Faces_<br>
_{span.dual(target="dual1")}[[6]] Vertices_<br>
_{span.dual}[[12]] Edges_

::: column.grow.text-center(width=120)
__Dodecahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")}[[12]] Faces_<br>
_{span.dual(target="dual2")}20 Vertices_<br>
_{span.dual}30 Edges_

::: column.grow.text-center(width=120)
__Icosahedron__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")}[[20]] Faces_<br>
_{span.dual(target="dual2")}12 Vertices_<br>
_{span.dual}30 Edges_
:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Notice how
the number of faces and vertices are [[swapped around|the same]] for [cube and
octahedron](target:dual1), as well as [dodecahedron and icosahedron](target:dual2),
while the number of edges [[stays the same|are different]]. These pairs of
Platonic solids are called [__dual solids__](gloss:polyhedron-dual).

---
> id: platonic-dual

We can turn a polyhedron into its dual, by “replacing” every face with a vertex,
and every vertex with a face. These animations show how:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

The tetrahedron is dual with itself. Since it has the same number of faces and
vertices, swapping them wouldn’t change anything.

---
> id: platonic-elements

[Plato](bio:plato) believed that all matter in the Universe consists of four
elements: Air, Earth, Water and Fire. He thought that every element correspond
to one of the Platonic solids, while the fifth one would represent the universe
as a whole. Today we know that there are more than 100 different elements which
consist of spherical atoms, not polyhedra.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book “Harmonices Mundi” (1619)

---

### Archimedean Solids

> id: archimedean

Platonic solids are particularly important polyhedra, but there are countless
others.

[__Archimedean solids__](gloss:archimedean-solid), for example, still have to be
made up of [regular polygons](gloss:regular-polygon), but you can use multiple
different types. They are named after another Greek mathematician, [Archimedes
of Syracuse](bio:archimedes), and there are 13 of them:

::: column(width=170 parent="padded-thin")
    x-polyhedron(size=170 shape="TruncatedTetrahedron")

{.caption} __Truncated Tetrahedron__<br>
8 faces, 12 vertices, 18 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Cuboctahedron__<br>
14 faces, 12 vertices, 24 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Truncated Cube__<br>
14 faces, 24 vertices, 36 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Truncated Octahedron__<br>
14 faces, 24 vertices, 36 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__<br>
26 faces, 24 vertices, 48 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Truncated Cuboctahedron__<br>
26 faces, 48 vertices, 72 edges
::: column(width=170)
    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Snub Cube__<br>
38 faces, 24 vertices, 60 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__<br>
32 faces, 30 vertices, 60 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedDodecahedron")

{.caption} __Truncated Dodecahedron__<br>
32 faces, 60 vertices, 90 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Truncated Icosahedron__<br>
32 faces, 60 vertices, 90 edges
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__<br>
62 faces, 60 vertices, 120 edges
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Truncated Icosidodecahedron__<br>
62 faces, 120 vertices, 180 edges
::: column(width=170)
    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __Snub Dodecahedron__<br>
92 faces, 60 vertices, 150 edges
:::

    // Prisms and antiprisms, whose symmetry groups are the dihedral groups, are
    // generally not considered to be Archimedean solids, despite meeting the
    // above definition.

---
> id: polyhedra-applications

### Applications

Plato was wrong in believing that all elements consists of Platonic solids. But
regular polyhedra have many special properties that make them appear elsewhere
in nature – and we can copy these properties in science and engineering.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Radiolaria skeleton

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow
Many __viruses__, __bacteria__ and other small __organisms__ are shaped like
[icosahedra](gloss:icosahedron). Viruses, for example, must enclose their
genetic material inside a shell of many identical protein units. The icosahedron
is the most efficient way to do this, because it consists of a few regular
elements but is almost shaped like a sphere.
:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule

::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere

::: column.grow
Many __molecules__ are shaped like regular polyhedra. The most famous example is
`C_60` which consists of 60 carbon atoms arranged in the shape of a [Truncated
Icosahedron](gloss:truncated-icosahedron).

It was discovered in 1985 when scientists researched interstellar dust. They
named it “Buckyball” (or Buckminsterfullerene) after the architect [Buckminster
Fuller](bio:fuller), famous for constructing similar-looking buildings.
:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorite octahedron

::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyrite cube

::: column.grow
Most __crystals__ have their atoms arranged in a regular grid consisting of
[tetrahedra](gloss:tetrahedron), [cubes](gloss:cube) or [octahedra](gloss:octahedron).
When they crack or shatter, you can see these shapes on a larger scale.
:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal space frames

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow
Tetrahedra and octahedra are incredibly rigid and stable, which makes them very
useful in __construction__. _Space frames_ are polygonal structures that can
support large roofs and heavy bridges.
:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Football

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow
Platonic solids are also used to create __dice__. because of their symmetry,
every side has the [probability](gloss:probability) of landing facing up – so
the dice are fair.

The [Truncated Icosahedron](gloss:truncated-icosahedron) is probably the most
famous polyhedron in the world: it is the shape of the football.
:::
