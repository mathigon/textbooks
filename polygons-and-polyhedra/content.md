# Polygons and Polyhedra

> stage: intermediate
> description: Geometric shapes are everywhere around us. In this chapter you will learn about angels, polygons, tessellations, polyhedra and nets.
> script: https://cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js

---

## Polygons

A [polygon](gloss:polygon) is a closed, flat shape that has only straight sides.
Polygons can have any number of sides and angles, but the sides cannot be
curved. Which of the shapes below are polygons?

    x-picker
      .item: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg

---

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
> id: angles

### Angles in Polygons

Every polygon with _n_ sides also has _n_ [internal angles](gloss:internal-angle).
We already know that the sum of the internal angles in a triangle is always
[[180]]° but what about other polygons?

::: column.grow(width=300)

    x-geopad(style="width:300px; height: 300px;"): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" sweep label="${round(angle(b,a,d).deg)}°")
      path.fill.blue(x="angle(c,b,a)" sweep label="${round(angle(c,b,a).deg)}°")
      path.fill.green(x="angle(d,c,b)" sweep label="${round(angle(d,c,b).deg)}°")
      path.fill.yellow(x="angle(a,d,c)" sweep label="${round(angle(a,d,c).deg)}°")
      path(x="segment(a,b)")
      path(x="segment(b,c)")
      path(x="segment(c,d)")
      path(x="segment(d,a)")

{.text-center.var} _{span.circled.red}${round(angle(b,a,d).deg)}°_ +
_{span.circled.blue}${round(angle(c,b,a).deg)}°_+
_{span.circled.green}${round(angle(d,c,b).deg)}°_ +
_{span.circled.yellow}${round(angle(a,d,c).deg)}°_ = _{span.circled}360°_

::: column.grow

    x-geopad(style="width:300px; height: 300px;"): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" sweep)
      path.fill.blue(x="angle(g,f,e)" sweep)
      path.fill.green(x="angle(h,g,f)" sweep)
      path.fill.yellow(x="angle(i,h,g)" sweep)
      path.fill(x="angle(e,i,h)" sweep)
      path(x="segment(e,f)")
      path(x="segment(f,g)")
      path(x="segment(g,h)")
      path(x="segment(h,i)")
      path(x="segment(i,e)")

{.text-center.var} _{span.circled.red}${round(angle(i,e,f).deg)}°_ +
_{span.circled.blue}${round(angle(e,f,g).deg)}°_+
_{span.circled.green}${round(angle(f,g,h).deg)}°_ +
_{span.circled.yellow}${round(angle(g,h,i).deg)}°_ +
_{span.circled}${round(angle(h,i,e).deg)}°_ = _{span.circled}360°_      
:::

---

It looks like the sum of internal angles in a quadrilateral is always [[360]]°
– exactly [[twice|three times|half]] the sum of angles in a triangle.
_{span.subsection(needs="blank-0")} This is no coincidence: every quadrilateral
can be split into two triangles._

    .row.padded-thin
      div(style="width: 140px"): include svg/polygons/triangles-1.svg
      div(style="width: 140px"): include svg/polygons/triangles-2.svg
      div(style="width: 140px"): include svg/polygons/triangles-3.svg
      div(style="width: 140px"): include svg/polygons/triangles-4.svg

{.subsection(needs="blank-1")} The same also works for larger polygons. We
can split a pentagon into [[3]] triangles, so its internal angle sum is
`3 × 180° =` [[540]]°. And we can split a hexagon into [[4]] triangles, so its
internal angle sum is `4 × 180° =` [[720]]°.

---

A polygon with ${x}{x|8|8,12,1'} sides will have an internal angle sum of
180° × ${x-2} = ${(x-2)*180}. More generally, a polygon with _n_ sides can be
split into [[n – 2|n – 1|n]] triangles. Therefore,
 
{.text-center} `"Sum of internal angles in an n-gon" = (n - 2) × 180°`.

---

### Convex and Concave Polygons

::: column.grow
We say that a polygon is __concave__ if it has a section that “points inwards”.
You can imagine that is part has "caved in". Polygons that are _not_ concave
are called __convex__.

There are two ways you can easily identify concave polygons: they have at least
one [internal angle that is bigger than 180°](target:angle). They also have at
least one [diagonal that lies _outside_ the polygon](target:diagonal). In convex
polygons, all internal angles are less than 180°, and all diagonals lie inside
the polygon.
::: column(width=200)
{.todo}
:::

Which of these polygons are concave?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---

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

Regular polygons can come in many different sizes – but all regular polygons
with the same number of sides [[are similar|are congruent|have the same area]]!

---

We already know the sum of all internal angles in polygons. For regular
polygons all these angles have [[the same size|are alternate angles]], so we
can work out the size of a single internal angle:

{.text-center} angle = <mfrac><mrow>[[sum of all angles|number of angles]]</mrow><mrow>[[number of angles|sum of all angles]]</mrow></mfrac> = `(180° × (x-2))/x = 180° - (360°)/x`.

For `n=3` we get the same angle size we already know for equilateral triangles:
[[60]]°. In a regular polygon with ${x}{x|6|3,12,1} sides, every internal angle
is 180° – <mfrac class="inline"><mrow>360°</mrow><mrow>${x}</mrow></mfrac> =
${Math.round(180-360/x)}°.

---

::: column(width=300)

    x-geopad.sticky(style="width: 300px; height: 480px; top: calc(50vh - 240px)"): svg

::: column.grow
Here you can see a regular polygon with ${n}{n|5|4,12,1} sides. Every side has
length ${s}{s|3|1,5,0.5}cm. Let’s try to calculate its area!

First, we can split the polygon into ${n} [[isosceles|equilateral|right-amgled]]
triangles that are all congruent.

We already know the [[base|height|area]] of these triangles, but we also need
the [height](target:apothem) to be able to calculate its area. In regular
polygons, the height is sometimes called the __apothem__.

Here, trigonometry can help! The internal angle of this polygon
is <span class="math"><mn>180°</mn><mo>−</mo><mfrac><mn>360°</mn><mn>${n}</mn></mfrac><mo>=</mo><mn>${round(180-360/n, 2)}°</mn></span>.
The [base angle](target:base-angle) of the isosceles triangle is [[half|twice]]
as big: ${90-180/n}°.

Notice that there is a [right angled triangle](target:right-triangle) formed by
the apothem and half the base of the isosceles triangle. Now we can use the
definition of tangents:

{.text-center} `tan(α) = "opposite"/"adjacent"`  
`tan(α) = "apothem"/(s//2)`  
`=> "apothem" = 1/2 s xx tan(α)`

The are of the isosceles triangle is

{.text-center} `1/2` base × height = `1/2` × ${s} ×
${round(Math.tan(Math.PI/2-Math.PI/n)×s/2,2)} =
${round(Math.tan(Math.PI/2-Math.PI/n)×s×s/4,2)}cm.

But the polygon consists of ${n} of these isosceles triangles, which all have
the same area. Therefore, the total area is

{.text-center} _A_ = _n_ × ${round(Math.tan(Math.PI/2-Math.PI/n)×s×s/4,2)} =
${round(n×Math.tan(Math.PI/2-Math.PI/n)×s×s/4,2)}cm<sup>3</sup>
:::

---

## Classifying Quadrilaterals

In the previous chapter we investigated many different properties of triangles.
Now lets have a look at quadrilaterals.

A _regular quadrilateral_ is called a [[square|reactangle|equilateral quadrilateral]].
All of its sides have the same length, and all of its angles are equal.

::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(Math.PI/2,b)")
      circle(name="d" x="b.rotate(-Math.PI/2,a)")
      path.fill.blue.light(x="polygon(a,b,c,d)")
      path.yellow(x="angle(a,b,c)" target="angle")
      path.yellow(x="angle(b,c,d)" target="angle")
      path.yellow(x="angle(c,d,a)" target="angle")
      path.yellow(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b,'bar')" target="side")
      path.red(x="segment(b,c,'bar')" target="side")
      path.red(x="segment(c,d,'bar')" target="side")
      path.red(x="segment(d,a,'bar')" target="side")

{.caption} A __square__ is a quadrilateral with [four equal sides](target:side)
and [four equal angles](target:angle).
:::

---

For slightly "less regular" quadrilaterals, we have two options. If we remove
the condition for sides to be equal, we get a __rectangle__. If we remove the
condition for angles to be equal, we get a __rhombus__.

::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.blue.light(x="polygon(a,b,c,d)")
      path.yellow(x="angle(a,b,c)" target="angle")
      path.yellow(x="angle(b,c,d)" target="angle")
      path.yellow(x="angle(c,d,a)" target="angle")
      path.yellow(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} A __Rectangle__ is a quadrilateral with [four equal angles](target:angle).
::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.blue.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,'bar')" target="side")
      path.red(x="segment(f,g,'bar')" target="side")
      path.red(x="segment(g,h,'bar')" target="side")
      path.red(x="segment(h,e,'bar')" target="side")

{.caption} A __Rhombus__ is a quadrilateral with [four equal sides](target:side).
:::

---

There are a few other quadrilaters, that are even less regular but still have
certain important properties:

::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.blue.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b,'arrow')")
      path.red(x="segment(c,d,'arrow')")
      path.yellow(x="segment(a,c,'arrow2')")
      path.yellow(x="segment(b,d,'arrow2')")

{.caption} If both pairs of _opposite_ sides are parallel, we have a __Parallelogram__.
::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.blue.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,'bar')")
      path.yellow(x="segment(f,g,'bar2')")
      path.yellow(x="segment(g,h,'bar2')")
      path.red(x="segment(h,e,'bar')")

{.caption} If two pairs of _adjacent_ sides have the same length, we have a __Kite__.
::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.blue.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k,'arrow')")
      path(x="segment(k,l)")
      path.red(x="segment(i,l,'arrow')")

{.caption} If just one pair of opposite sides is parallel, we have a __Trapezium__.
:::

---

Quadrilaterals can fall into multiple of these categories. We can visualise the
hierarchy of different types of quadrilaterals as a Venn diagram:

    figure: include svg/venn.svg

For example, every rectangle is also a [[parallelogram|rhombus|square]], and
every [[rhombus|trapezium|parallelogram]] is also a kite. A rhombus is
[[sometimes|always|never]] a square and a rectangle is [[always|sometimes|never]]
a trapezium.

To avoid any ambiguity, we usually use just the most specific type.

---

## Parallelograms

{.todo} Recall that a __parallelogram__ is a quadrilateral that has
[[two pairs of parallel sides|four congruent angles]].

{.todo} area of parallelograms

::: column(width=320)

    include svg/quadrilaterals/area-parallelogram.svg

::: column.grow
{.todo} Notice how the overlap on the left is exactly the same as the gap on the
right. Therefore the area of the [blue parallelogram](target:parallelogram) is
[[the same as|smaller than|larger than]] the area of the [red rectangle](target:rectangle).
This means that the area of any parallelogram is simply

{.text-center} __{.i.m-green}base__ × __{.i.m-yellow}height__.

_But be careful! The height of a parallelogram is necessarily perpendicular to
the base. This means that the height is not the same as the sides._
:::

---

{.todo} Opposite Sides Theorem: If a quadrilateral is a parallelogram, then the opposite
sides are congruent.

{.todo} Opposite Angles Theorem: If a quadrilateral is a parallelogram, then the
opposite angles are congruent.

{.todo} Consecutive Angles Theorem: If a quadrilateral is a parallelogram, then the
consecutive angles are supplementary.

{.todo} Parallelogram Diagonals Theorem: If a quadrilateral is a parallelogram, then
the diagonals bisect each other.

{.todo} Opposite Sides Theorem Converse: If the opposite sides of a quadrilateral are
congruent, then the figure is a parallelogram.

{.todo} Opposite Angles Theorem Converse: If the opposite angles of a quadrilateral are
congruent, then the figure is a parallelogram.

{.todo} Parallelogram Diagonals Theorem Converse: If the diagonals of a quadrilateral
bisect each other, then the figure is a parallelogram.

{.todo} Theorem: If a quadrilateral has one set of parallel lines that are also
congruent, then it is a parallelogram.

{.todo} Rectangles, rhombuses (the plural is also rhombi) and squares are all more
specific versions of parallelograms.

{.todo} Rectangle Theorem: A quadrilateral is a rectangle if and only if it has four
right (congruent) angles.

{.todo} Rhombus Theorem: A quadrilateral is a rhombus if and only if it has four
congruent sides. 

{.todo} Square Theorem: A quadrilateral is a square if and only if it has four right
angles and four congruent sides.

{.todo} From the Square Theorem, we can also conclude that a square is a rectangle
and a rhombus.

{.todo} Recall that diagonals in a parallelogram bisect each other. Therefore, the
diagonals of a rectangle, square and rhombus also bisect each other. The
diagonals of these parallelograms also have additional properties.

{.todo} Rectangle Theorem: A quadrilateral is a rectangle if and only if it has four
right (congruent) angles.

{.todo} Rhombus Theorem: A quadrilateral is a rhombus if and only if it has four
congruent sides. 

{.todo} Square Theorem: A quadrilateral is a square if and only if it has four right
angles and four congruent sides. From the Square Theorem, we can also conclude
that a square is a rectangle and a rhombus.

{.todo} Recall that diagonals in a parallelogram bisect each other. Therefore, the
diagonals of a rectangle, square and rhombus also bisect each other. The
diagonals of these parallelograms also have additional properties.

{.todo} A parallelogram is a rectangle if and only if the diagonals are congruent.

{.todo} Theorem: A parallelogram is a rhombus if and only if the diagonals are perpendicular.

{.todo} Theorem: A parallelogram is a rhombus if and only if the diagonals bisect each angle.

---

::: column(width=400)

    x-geopad(style="height: 300px"): svg
      path(x="polygon(a,b,c,d)")
      path.red(x="polygon(line(a,b).midpoint,line(b,c).midpoint,line(c,d).midpoint,line(d,a).midpoint)")
      circle.move(name="a" cx=120 cy=40 r=6)
      circle.move(name="b" cx=320 cy=140 r=6)
      circle.move(name="c" cx=380 cy=270 r=6)
      circle.move(name="d" cx=60 cy=250 r=6)
      circle.red(x="line(a,b).midpoint" r=4)
      circle.red(x="line(a,b).midpoint" r=4)
      circle.red(x="line(a,b).midpoint" r=4)
      circle.red(x="line(a,b).midpoint" r=4)

::: column.grow
{.todo} Let's start by drawing any quadrilateral.

{.todo} Now let's find the midpoint of each of the four sides of the quadrilateral. If
we connect the four midpoints, we get [[another quadrilateral|a triangle|a rectangle]].

{.todo} However it looks like the new shape is not just _any_ quadrilateral, it is
always a [[parallelogram|trapezium|rectangle]]! Try to move the vertices of the
original quadrilateral to check.

{.todo} TODO Explanation
:::

---

## Trapezium

::: column(width=260)

    include svg/quadrilaterals/area-trapezium.svg

::: column.grow
{.todo} Notice how the gaps on the left and right are each exactly as big as the overlap
on that side. The width of the __{m.red}red rectangle__ is the average of the
widths of the top side and the bottom side of the __{.m-blue}blue trapezium__.
Therefore the area of a trapezium is

{.text-center} #[mfrac #[mrow #[strong.i.m-green top] + #[strong.i.m-green bottom]]#[mrow 2]] × #[strong.i.m-yellow height].
:::

{.todo} A trapezoid is a quadrilateral with exactly one pair of parallel sides.

{.todo} An isosceles trapezoid is a trapezoid where the non-parallel sides are
congruent. The third trapezoid above is an example of an isosceles trapezoid.
Think of it as an isosceles triangle with the top cut off. Isosceles trapezoids
also have parts that are labeled much like an isosceles triangle. Both parallel
sides are called bases.

{.todo} Recall that in an isosceles triangle, the two base angles are congruent. This
property holds true for isosceles trapezoids.

{.todo} Theorem: The base angles of an isosceles trapezoid are congruent.

{.todo} The converse is also true: If a trapezoid has congruent base angles, then it is
an isosceles trapezoid. Next, we will investigate the diagonals of an isosceles
trapezoid. Recall, that the diagonals of a rectangle are congruent AND they
bisect each other. The diagonals of an isosceles trapezoid are also congruent,
but they do NOT bisect each other.

{.todo} Isosceles Trapezoid Diagonals Theorem: The diagonals of an isosceles trapezoid
are congruent.

{.todo} The midsegment (of a trapezoid) is a line segment that connects the midpoints
of the non-parallel sides. There is only one midsegment in a trapezoid. It will
be parallel to the bases because it is located halfway between them. Similar to
the midsegment in a triangle, where it is half the length of the side it is
parallel to, the midsegment of a trapezoid also has a link to the bases.

{.todo} Midsegment Theorem: The length of the midsegment of a trapezoid is the average
of the lengths of the bases, or EF=AB+CD2.

### Area and perimeter

{.todo} Recall that a trapezoid is a quadrilateral with one pair of parallel sides.
The lengths of the parallel sides are the bases. The perpendicular distance
between the parallel sides is the height, or altitude, of the trapezoid.

{.todo} To find the area of the trapezoid, let’s turn it into a parallelogram. To do
this, make a copy of the trapezoid and then rotate the copy 180∘. Now, this is
a parallelogram with height h and base b1+b2. Let’s find the area of this shape.

{.todo} A=h(b1+b2)
Because the area of this parallelogram is made up of two congruent trapezoids,
the area of one trapezoid would be A=12h(b1+b2). The formula for the area of a
trapezoid could also be written as the average of the bases time the height.

---

## Rhombus and Kites

::: column(width=260)

    include svg/quadrilaterals/area-kite.svg

::: column.grow
{.todo} Each the four smaller rectangles are exactly half blue. Therefore the area of
the __{.m-blue}blue kite__ is half the area of the __{.m-red}red rectangle__. In
other words, the area of a kite or rhombus is always

{.text-center} `1/2` __{.i.m-green}width__ × __{.i.m-yellow}height__.
:::

{.todo} A kite is a quadrilateral with two sets of distinct, adjacent congruent sides.

{.todo} From the definition, a kite is the only quadrilateral that we have discussed
that could be concave, as with the case of the last kite. If a kite is concave,
it is called a dart. The angles between the congruent sides are called vertex
angles. The other angles are called non-vertex angles. If we draw the diagonal
through the vertex angles, we would have two congruent triangles.

{.todo} Theorem: The non-vertex angles of a kite are congruent.

{.todo} Theorem: The diagonal through the vertex angles is the angle bisector for both angles.
The proof of this theorem is very similar to the proof above for the first
theorem. If we draw in the other diagonal in KITE we find that the two diagonals
are perpendicular.

{.todo} Kite Diagonals Theorem: The diagonals of a kite are perpendicular.
To prove that the diagonals are perpendicular, look at △KET and △KIT. Both of
these triangles are isosceles triangles, which means EI is the perpendicular
bisector of KT (the Isosceles Triangle Theorem). Use this information to help
you prove the diagonals are perpendicular in the practice questions.

### Area and Perimeter

{.todo} Recall that a rhombus is an equilateral quadrilateral and a kite has adjacent
congruent sides. Both of these quadrilaterals have perpendicular diagonals,
which is how we are going to find their areas.

{.todo} Notice that the diagonals divide each quadrilateral into 4 triangles. In the
rhombus, all 4 triangles are congruent and in the kite there are two sets of
congruent triangles. If we move the two triangles on the bottom of each
quadrilateral so that they match up with the triangles above the horizontal
diagonal, we would have two rectangles.

{.todo} So, the height of these rectangles is half of one of the diagonals and the
base is the length of the other diagonal.

{.todo} The area of a rhombus or a kite is A=12d1d2 if the diagonals of the rhombus or
kite are d1 and d2. You could also say that the area of a kite and rhombus are
half the product of the diagonals.

    // ## Cyclic quadrilaterals
    // {.todo} TODO

    // ## Hexagons
    // Construct regular hexagon

---

## Tessellations

Polygons appear everywhere in nature. They are especially useful if you want to
tile a large area, because you can fit polygons together without any gaps or
overlaps. Patterns like that are called __tessellations__.

::: column(width=200)
    x-media(lightbox, credit="© Depositphotos / Irochka", src="images/tessellations/honeycomb.jpg", width=200 height=200)
        
{.caption} [[Hexagonal|Triangular|Quadratic]] honeycomb
::: column(width=200)
    x-media(lightbox, credit="© Depositphotos / Tiukay", src="images/tessellations/snake.jpg", width=200 height=200)
        
{.caption} Sinaloan Milk Snake skin
::: column(width=200)
    x-media(lightbox, credit="© Depositphotos / SuradechK", src="images/tessellations/leaf.jpg", width=200 height=200)
        
{.caption} Cellular structure of leafs
::: column(width=200)
    x-media(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)
        
{.caption} Basalt columns at Giant's Causeway in Northern Ireland
::: column(width=200)
    x-media(lightbox, credit="© Depositphotos / Kostia777", src="images/tessellations/pineapple.jpg", width=200 height=200)
        
{.caption} Pineapple skin
::: column(width=200)
    x-media(lightbox, credit="© Depositphotos / cbenjasuwan", src="images/tessellations/tortoise.jpg", width=200 height=200)
        
{.caption} Shell of a tortoise
:::

---

Humans have copied many of these natural patterns in art, architecture and
technology – from ancient Rome to the present. Here are a few examples:

::: column(width=200)
    x-media(lightbox, credit="© Depositphotos / kelifamily", src="images/tessellations/pavement.jpg", width="200", height="200")
{.caption} [[Rectangular|Quadratic|Hexagonal]] pavement pattern
::: column(width=200)
    x-media(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")
{.caption} Greenhouse at the Eden Project in England
::: column(width=200)
    x-media(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")
{.caption} Mosaic at Alhambra
::: column(width=200)
    x-media(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")
{.caption} [[Triangular|Hexagonal|Rectangular]] roof at the British Museum in London
::: column(width=200)
    x-media(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")
{.caption} Cellular tessellation pavilion in Sydney
::: column(width=200)
    x-media(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")
{.caption} _Study of Regular Division of the Plane with Reptiles_, M. C. Escher
:::

    // TODO Carbon Nanotube
    // application: https://en.wikipedia.org/wiki/Carbon_nanotube
    // https://en.wikipedia.org/wiki/File:Types_of_Carbon_Nanotubes.png
    // https://commons.wikimedia.org/wiki/File:FlyingThroughNanotube.png

---
> id: drawing

Here you can create your own tessellations using regular polygons. Simply drag
new shapes from the sidebar onto the canvas.

Which shapes tessellate well? Are there any shapes that don't tessellate at all?
Try to create interesting patterns!

    include ./components/tessellation
    x-tessellation

{.todo} work from other students

---
> id: possible

### Tessellations from regular polygons

You might have noticed that some regular polygons (like [[squares|pentagons]])
tessellate very easily, while others (like [[pentagons|triangles|hexagons]])
don't seem to tessellate at all.

---

This has to do with the size of their internal angles, which we learned to
calculate before. At every vertex in the tessellation, the internal angles of
multiple different polygons meet. We need all of these angles to add up to
[[360]]°, otherwise there will either be a gap or an overlap.

::: column(width=160 parent="padded-thin")
    include svg/tessellations/triangles.svg

{.caption} Triangles [[tessellate|don’t tessellate]] because 6 × 60° = 360°.
::: column(width=160)
    include svg/tessellations/squares.svg

{.caption} Squares [[tessellate|don’t tessellate]] because 4 × 90° = 360°.
::: column(width=160)
    include svg/tessellations/pentagons.svg

{.caption} Pentagons [[don’t tessellate|tessellate]] because multiples of 108°
don't add up to 360°.

    //- {.caption}3 × 108° = 324° is too small, but 4 × 108° = 432° is too big.
::: column(width=160)
    include svg/tessellations/hexagons.svg

{.caption} Hexagons [[tessellate|don’t tessellate]] because 3 × 120° = 360°.
:::

---

You can check that, like pentagons, any regular polygon with 7 or more sides
won't tessellate. This means that the only regular polygons that tessellate are
triangles, squares and hexagons!

---

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

### Tessellations from irregular polygons

We can also try making tessellations out of irregular polygons – as long as we
are careful when rotating and arranging them.

::: column(width=360)

    x-geopad(style="width: 360px; height: 300px"): svg
      circle.move(name="a" cx=220 cy=90)
      circle.move(name="b" cx=145 cy=180)
      circle.move(name="c" cx=225 cy=200)

      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(Math.PI,line(b,c).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow
It turns out that you can tessellate not just equilateral triangles, but _any
triangle_! Try moving the vertices in this diagram.
 
The sum of the internal angles in a triangle is [[180]]°. If we use each angle
[[twice|once|three times]] at every vertex in the tessellation, we get 360°:

    x-geopad(style="width: 200px; height: 160px"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(Math.PI,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(Math.PI,m)")
      circle(name="t" x="q.rotate(Math.PI,m)")
      circle(name="u" x="q.rotate(Math.PI,line(m,p).midpoint)")

      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")

      path.fill.red(x="angle(p,m,q)" size=20)
      path.fill.blue(x="angle(q,m,r)" size=20)
      path.fill.green(x="angle(r,m,s)" size=20)
      path.fill.red(x="angle(s,m,t)" size=20)
      path.fill.blue(x="angle(t,m,u)" size=20)
      path.fill.green(x="angle(u,m,p)" size=20)

      path.fill.red.light(x="angle(m,q,r)" size=20)
      path.fill.red.light(x="angle(r,s,m)" size=20)
      path.fill.red.light(x="angle(m,t,u)" size=20)
      path.fill.red.light(x="angle(u,p,m)" size=20)
      path.fill.blue.light(x="angle(p,q,m)" size=20)
      path.fill.blue.light(x="angle(m,r,s)" size=20)
      path.fill.blue.light(x="angle(s,t,m)" size=20)
      path.fill.blue.light(x="angle(m,u,p)" size=20)
      path.fill.green.light(x="angle(m,p,q)" size=20)
      path.fill.green.light(x="angle(q,r,m)" size=20)
      path.fill.green.light(x="angle(m,s,t)" size=20)
      path.fill.green.light(x="angle(t,u,m)" size=20)

:::

---

::: column(width=360)

    x-geopad(style="width: 360px; height: 300px"): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)

      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(Math.PI,line(c,d).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)


::: column.grow    
More surprisingly, _any quadrilaterals_ also tessellate! Their internal angle sum
is [[360]]°, so if we use each angle [[once|twice|three times]] at every vertex
in the tessellation, we we get 360°.

    x-geopad(style="width: 200px; height: 160px"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(Math.PI,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(Math.PI,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(Math.PI,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(Math.PI,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(Math.PI,line(m,p).midpoint)")

      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")

      path.fill.red(x="angle(p,m,r)" size=20)
      path.fill.blue(x="angle(r,m,t)" size=20)
      path.fill.green(x="angle(t,m,v)" size=20)
      path.fill.yellow(x="angle(v,m,p)" size=20)

      path.fill.red.light(x="angle(m,r,s)" size=20)
      path.fill.red.light(x="angle(t,u,v)" size=20)
      path.fill.red.light(x="angle(w,p,m)" size=20)
      path.fill.blue.light(x="angle(q,r,m)" size=20)
      path.fill.blue.light(x="angle(m,t,u)" size=20)
      path.fill.blue.light(x="angle(v,w,p)" size=20)
      path.fill.green.light(x="angle(p,q,r)" size=20)
      path.fill.green.light(x="angle(s,t,m)" size=20)
      path.fill.green.light(x="angle(m,v,w)" size=20)
      path.fill.yellow.light(x="angle(m,p,q)" size=20)
      path.fill.yellow.light(x="angle(r,s,t)" size=20)
      path.fill.yellow.light(x="angle(u,v,m)" size=20)

:::

---

Pentagons are a bit trickier. We already saw that _regular_ pentagons don't
tessellate, but what about non-regular ones?

::: column(width=220)
    include svg/tessellations/pentagons-1.svg
::: column(width=220)
    include svg/tessellations/pentagons-2.svg
::: column(width=220)
    include svg/tessellations/pentagons-3.svg
:::

Here are three different examples of tessellations with pentagons. They are not
_regular_, but they are perfectly valid 5-sided polygons.

So far, 14 different kinds of tessellations with (convex) pentagons have been
found. But no one knows if there are others, or if those 14 are all of them. In
other words, the problem of finding tessellations of pentagons is still open…

---
> id: escher

### Tessellations in Art

Tessellations we both a tool and inspiration for many artists, architects and 
designer – most famously the Dutch artist [M. C. Escher](bio:escher). Escher's
work contains strange, mutating creatures, patterns and landscapes:

    .row
      div(style="width: 220px")
        x-media(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption “Sky and Water I” (1938)
      div(style="width: 220px")
        x-media(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption “Lizard” (1942)
      div(style="width: 220px")
        x-media(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption “Lizard, Fish, Bat” (1952)
      div(style="width: 220px")
        x-media(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption “Butterfly” (1948)
      div(style="width: 220px")
        x-media(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Two Fish” (1942)
      div(style="width: 220px")
        x-media(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption “Shells and Starfish” (1941)

These artworks often look fun and effortless, but the underlying mathematical
principles are the same as before: angles, rotations, translations and polygons.
If the maths isn't right, the tessellation is not going to work!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphosis II” by M. C. Escher (1940)

---
> id: penrose

### Penrose Tilings

All the tessellations we saw so far have one thing in common: they are
__periodic__. That means they consist of a regular pattern that is repeated
again and again. They can continue forever in all directions and they will look
the same everywhere.

In the 1970s, the British mathematician and physicist [Sir Roger Penrose](bio:penrose)
discovered _non-periodic_ tessellations – they still continue infinitely in all
directions, but _never_ look exactly the same. These are called __Penrose
tilings__, and you only need a few different kinds of polygons to
create one:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

Penrose was exploring tessellations purely for fun, but it turns out that the
internal structure of some real materials (like aluminium) follow a similar
pattern. The pattern was even used on toilet paper, because the manufacturers
noticed that a non-periodic pattern can be rolled up without any bulges.

---

## Polyhedra

Up to now we have just looked at what we can do with polygons in a flat,
two-dimensional world. A __polyhedron__ is a 3-dimensional object that is made
up of polygons. Here are few examples:

::: column.padded-thin(width=220)
    x-polyhedron(size=220 shape="PentagonalPrism")
::: column(width=220)
    x-polyhedron(size=220 shape="PentagonalRotunda")
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedOctahedron")
:::

Polyhedra cannot contain curved surfaces – spheres or cylinders, for example,
are not polyhedra.

The polygons that make up a polyhedron are called its __faces__. The lines
where two faces are connected are called __edges__, and the corners where the
edges meet are called __vertices__.

{.todo} There are countless more polyhedra: some looking like stars, some
consisting of non-regular polygons, and some having holes inside.

---

### Nets

{.todo} What if you wanted to expand your thinking of geometric shapes beyond the flat
two-dimensional ones to three dimensional (3D) ones?

{.todo} Try this experiment to gee how nets relate to 3D figures: Sketch or print the
equilateral triangle in the image below onto a piece of paper and cut it out.
Fold on the dotted lines. What shape do these four attached equilateral
triangles make? If you place two of these equilateral triangles next to each
other, as in the second image, and fold them on the dotted lines, what 3D figure
would you make? 

{.todo} While our world is three dimensional, we are used to modeling and thinking about
three dimensional objects on paper (in two dimensions). There are a few common
ways to help think about three dimensions in two dimensions. One way to “view”
a three-dimensional figure in a two-dimensional plane, like this text, is to use
cross-sections. A cross-section is the intersection of a plane with a solid.
Another way to represent a three-dimensional figure in a two dimensional plane
is to use a net. A net is an unfolded, flat representation of the sides of a
three-dimensional shape.

{.todo} Identifying Figures Created by Nets

{.todo} Drawing Nets

### Cross-Sections 
{.todo} Describe the cross section formed by the intersection of the plane and the solid.

---

## Euler's Formula

{.todo} Euler’s Theorem states that the number of faces, vertices V, and edges
E of a polyhedron can be related such that F + V = E + 2.

{.todo} Notice that the number of faces plus the number of vertices always seems
to be 2 more that the number of edges. In other words, F + V = E + 2. This
formula was discovered by Leonhard Euler (1707 – 1783). We have just shown that
it works for all Platonic solids, but in fact it is true for any polyhedron.
There is a very similar formula for the number of faces, edges and vertices of
planar graphs.

{.todo} Euler's formula is true for the cube and the icosahedron. It turns out,
rather beautifully, that it is true for pretty much every polyhedron. The only
polyhedra for which it doesn't work are those that have holes running through
them like the one shown in the figure below.

{.todo} These polyhedra are called non-simple, in contrast to the ones that
don't have holes, which are called simple. Non-simple polyhedra might not be the
first to spring to mind, but there are many of them out there, and we can't get
away from the fact that Euler's Formula doesn't work for any of them. However,
even this awkward fact has become part of a whole new theory about space and shape.

{.todo} Playing around with various simple polyhedra will show you that Euler's
formula always holds true. But if you're a mathematician, this isn't enough.
You'll want a proof, a water-tight logical argument that shows you that it
really works for all polyhedra, including the ones you'll never have the time to
check.

{.todo} Computer chips are integrated circuits, made up of millions of minute
components linked by millions of conducting tracks. These are reminiscent of our
networks above, except that usually it is not possible to lay them out in a
plane without some of the conducting tracks — the edges — crossing. Crossings
are a bad thing in circuit design, so their number should be kept down, but
figuring out a suitable arrangement is no easy task. Euler's polyhedron formula,
with its information on networks, is an essential ingredient in finding solutions.

{.todo} Now let's move to the very large: our universe. To this day cosmologists
have not agreed on its exact shape. Pivotal to their consideration is topology,
the mathematical study of shape and space. In the 19th century mathematicians
discovered that all surfaces in three-dimensional space are essentially
characterised by the number of holes they have: our simple polyhedra have no
holes, a doughnut has one hole, etc. Euler's formula does not work for polyhedra
with holes, but mathematicians discovered an exciting generalisation. For any
polyhedron, V - E +  F is exactly 2 minus 2 times the number of holes! It turns
out that this number, called the Euler characteristic, is crucial to the study
of all three-dimensional surfaces, not just polyhedra. Euler's formula can be
viewed as the catalyst for a whole new way of thinking about shape and space.

---

## Platonic Solids

Remember when we defined _regular polygons_ as particularly "symmetric"
polygons, where all sides and angles are them same? We can do something similar
for polyhedra:

In a _regular polyhedron_ all faces are all the same kind of regular polygon,
and the same number of faces meet at every vertex. Polyhedra with these two
properties are called __Platonic solids__, named after the Greek philosopher
[Plato](bio:plato).

    //- The pyramid on the right of not a Platonic solid. It consists of two
    //- different kinds of polygons (squares and triangles), and it has [[4]]
    //- faces meeting at the top vertex, but only [[3]] at the bottom vertices.

---

So what do the Platonic solids look like – and how many of them are there? To
make a 3-dimensional shape, we need at least [[3]] faces to meet at every
vertex. Let's start systematically with the smallest regular polygon:
equilateral triangles:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow
If we create a polyhedron where three equilateral triangles meet at every
vertex, we get the shape on the left. It is called a __Tetrahedron__ and has
[[four]] faces. ("Tetra" means "four" in Greek).
:::

---

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow
If four equilateral triangles meet at every vertex, we get a different Platonic
solid. It is called the __Octahedron__ and has [[eight]] faces. ("Octa" means
"eight" in Greek. Just like "Octagon" means 8-sided shape, "Octahedron" means
8-faced solid.)
:::

---

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow
If [[five]] triangles meet at every vertex, we get the __Icosahedron__. It has
[[twenty]] faces. ("Icosa" means "twenty" in Greek.)
:::

---

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow
If [[six]] triangles meet at every vertex, something different happens: we
simply get [[a tessellation|a quadrilateral|another Icosahedron]], instead of
a 3-dimensional polyhedron.
:::

---

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow
And seven or more triangles at every vertex also don’t produce new polyhedra:
there is not enough space around a vertex, for that many triangles.
:::

---

This means we've found three Platonic solids consisting of triangles. Let's
move on to the next regular polygon: squares.

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow
If [[three]] squares meet at every vertex, we get the __cube__. Just like dice,
it has [[6]] faces. The cube is sometimes also called _Hexahedron_, after the
Greek word "hexa" for "six".
:::

---

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/squares.svg" width=200 height=120)

::: column.grow
If [[four]] squares meet at every vertex, we get another tessellation. And like
before, five or more squares also won’t work.
:::

---

Next, let’s try regular pentagons:

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow
If [[three]] pentagons meet at every vertex, we get the __Dodecahedron__. It has
[[12]] faces. ("Dodeca" means "twelve" in Greek.)
:::

---

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow
Like before, four or more pentagons [[don’t work|are possible]] because there is
not enough space.
:::

---

The next regular polygon to try are hexagons:

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow
If three hexagons meet at every vertex, we immediately get a tessellation.
Since there is no space for more than three, it seems like there are no Platonic
solids consisting of hexagons.
:::

---

The same also happens for all regular polygons with more than six sides. They
don’t tessellate, and we certainly don’t get any 3-dimensional polygons.

This means that there are just [[five]] Platonic solids! Let's have a look at
all of them together:

{.todo} hint -> use euler's formula

::: column.grow.text-center(width=120 parent="plato padded-thin")
__Tetrahedron__

    x-polyhedron(size=120 shape="Tetrahedron")

[[4]] Faces  
[[4]] Vertices  
[[6]] Edges

::: column.grow.text-center(width=120)
__Cube__

    x-polyhedron(size=120 shape="Cube")

[[6]] Faces  
[[8]] Vertices  
[[12]] Edges

::: column.grow.text-center(width=120)
__Octahedron__

    x-polyhedron(size=120 shape="Octahedron")

[[8]] Faces  
[[6]] Vertices  
[[12]] Edges

::: column.grow.text-center(width=120)
__Dodecahedron__

    x-polyhedron(size=120 shape="Dodecahedron")

[[12]] Faces  
20 Vertices  
30 Edges

::: column.grow.text-center(width=120)
__Icosahedron__

    x-polyhedron(size=120 shape="Icosahedron")

[[20]] Faces  
12 Vertices  
30 Edges
:::

---

Notice how the number of faces and vertices are [[swapped around|the same]] for
[cube an octahedron](target:a), as well as [dodecahedron and icosahedron](target:b),
while the number of edges [[stays the same|are different]]. These pairs of
Platonic solids are called __dual solids__.

We can turn a polyhedron into its dual, by “replacing” every face with a vertex,
and every vertex with a face. These animations show how:

    .row
      .grow: x-img-sequence(src="images/dual1/d#.png", pages="24", width="300", height="300")
      .grow: x-img-sequence(src="images/dual2/d#.png", pages="24", width="300", height="300")

The tetrahedron is dual with itself. Since it has the same number of faces and
vertices, swapping them wouldn't change anything.

---

Plato believed that all matter in the Universe consists of four elements: Air,
Earth, Water and Fire. He thought that they each correspond to one of the
Platonic solids. The fifth one would represent the universe as a whole. Today we
know that there are more than 100 different elements which consist of spherical
atoms, not polyhedra.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Images from Johannes Kepler’s book "Harmonices Mundi" (1619)

---

## More on Polyhedra

Platonic solids are the most regular polyhedra – but there are countless others.

__Archimedean solids__, for example, still have to be made up of regular
polygons, but you can use multiple different ones. They are named after another
Greek mathematician, [Archimedes of Syracuse](bio:archimedes), and there are
13 of them:

::: column(width=220 parent="padded-thin")
    x-polyhedron(size=220 shape="TruncatedTetrahedron")
    
{.caption} __Truncated Tetrahedron__  
8 faces, 12 vertices, 18 edges
::: column(width=220)
    x-polyhedron(size=220 shape="Cuboctahedron")

{.caption} __Cuboctahedron__  
14 faces, 12 vertices, 24 edges
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedCube")

{.caption} __Truncated Cube__  
14 faces, 24 vertices, 36 edges
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedOctahedron")

{.caption} __Truncated Octahedron__  
14 faces, 24 vertices, 36 edges
::: column(width=220)
    x-polyhedron(size=220 shape="Rhombicuboctahedron")

{.caption} __Rhombicuboctahedron__  
26 faces, 24 vertices, 48 edges
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedCuboctahedron")

{.caption} __Truncated Cuboctahedron__  
26 faces, 48 vertices, 72 edges
::: column(width=220)
    x-polyhedron(size=220 shape="SnubCube")

{.caption} __Snub Cube__  
38 faces, 24 vertices, 60 edges
::: column(width=220)
    x-polyhedron(size=220 shape="Icosidodecahedron")

{.caption} __Icosidodecahedron__  
32 faces, 30 vertices, 60 edges
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedDodecahedron")

{.caption} __Truncated Dodecahedron__  
32 faces, 60 vertices, 90 edges
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedIcosahedron")

{.caption} __Truncated Icosahedron__  
32 faces, 60 vertices, 90 edges
::: column(width=220)
    x-polyhedron(size=220 shape="Rhombicosidodecahedron")

{.caption} __Rhombicosidodecahedron__  
62 faces, 60 vertices, 120 edges
::: column(width=220)
    x-polyhedron(size=220 shape="TruncatedIcosidodecahedron")

{.caption} __Truncated Icosidodecahedron__  
62 faces, 120 vertices, 180 edges
::: column(width=220)
    x-polyhedron(size=220 shape="SnubDodecahedron")

{.caption} __Snub Dodecahedron__  
92 faces, 60 vertices, 150 edges
:::

    // Prisms and antiprisms, whose symmetry groups are the dihedral groups, are
    // generally not considered to be Archimedean solids, despite meeting the
    // above definition.

---

Plato was wrong in believing that all elements consists of Platonic solids. But
regular polyhedra have many special properties that make them appear elsewhere
in nature – and we can copy these properties in science and engineering.

### Viruses and Bacteria

::: column(width=180)

    x-media(lightbox, width="180", height="180", src="/resources/polygons-and-polyhedra/images/radiolaria.jpg")
    p.caption Radiolaria skeleton
    
::: column(width=180)

    x-media(lightbox, width="180", height="180", src="/resources/polygons-and-polyhedra/images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow
Many viruses, bacteria and other tiny organisms are shaped like Icosahedra.
Viruses, for example, must enclose their genetic material inside a shell of many
identical protein units. The icosahedron is the most efficient way to do this –
because it consists of a few regular elements but is almost shaped like a sphere.
:::

---

### Molecules

::: column(width=180)

    x-media(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Buckyball molecule
      
::: column(width=180)

    x-media(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Montreal Biosphere
      
::: column.grow
Many molecules are shaped like regular polyhedra. The most famous example is
C~~60~~ which consists of 60 carbon atoms arranged in the shape of a [Truncated
Icosahedron](gloss:trucated-icosahedron). It was discovered in 1985 when
scientists researched interstellar dust. They named it “Buckyball” (or
Buckminsterfullerene) after the architect Buckminster Fuller, famous for
constructing similar-looking geodesic domes.
:::

---

### Crystals

::: column(width=180)

    x-media(lightbox, credit="Chris Gladis, via Wikipedia", width="180", height="180", src="/resources/polygons-and-polyhedra/images/crystal.jpg")
    p.caption Fluorite octahedron
      
::: column(width=180)

    x-media(lightbox, credit="Archaeodontosaurus, via Wikipedia", width="180", height="180", src="/resources/polygons-and-polyhedra/images/rock.jpg")
    p.caption Pyrite cube
      
::: column.grow
Most crystals have their atoms arranged in a regular grids consisting of
Tetrahedra, Cubes or Octahedra. When they crack or shatter, you can see these
patterns on a much larger scale.
:::

---

### Construction

::: column(width=180)

    x-media(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Octagonal Space Frames

::: column(width=180)

    x-media(lightbox, credit="© Depositphotos, anyaberkut", width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre museum in Paris

::: column.grow
Tetrahedra and Octahedra are incredibly rigid and stable, which makes them very
useful in construction. _Space frames_ are polygonal structures that can support
large roofs and heavy bridges.
:::

---

### Games

::: column(width=180)

    x-media(lightbox, credit="© Depositphotos / ssuaphoto", width="180", height="180", src="images/football.jpg")
    p.caption Football
    
::: column(width=180)

    x-media(lightbox, credit="© Depositphotos / blackregis2", width="180", height="180", src="images/dice.jpg")
    p.caption Polygonal role-playing dice

::: column.grow
Because of their symmetry, Platonic solids are often used to create dice. Every
side has the probability of landing facing up, so the dice are always fair.

The Truncated Icosahedron is probably the most famous polyhedron in the world:
it is the shape of the football.
:::
