# Polygons and Polyhedra

> stage: intermediate
> description: 

---

## Polygons

A [polygon](gloss:polygon) is a closed, flat shape that has only straight sides.
Polygons can have any number of sides and angles, but the sides cannot be
curved. Which of the shapes below are polygons?

    x-picker
      .item: svg(width=100 height=100)
      .item(data-error="not-a-polygon-1"): svg(width=100 height=100)
      .item(data-error="not-a-polygon-2"): svg(width=100 height=100)
      .item: svg(width=100 height=100)
      .item(data-error="not-a-polygon-3"): svg(width=100 height=100)
      .item: svg(width=100 height=100)

---

We give different names to polygons, depending on the number of sides:

::: column(width=100)
{.todo} image

{.caption} 3 vertices  
Triangle
::: column(width=100)
{.todo} image

{.caption} 4 vertices  
Quadrilateral
::: column(width=100)
{.todo} image

{.caption} 5 vertices  
Pentagon
::: column(width=100)
{.todo} image

{.caption} 6 vertices  
Hexagon
::: column(width=100)
{.todo} image

{.caption} 7 vertices  
Heptagon
::: column(width=100)
{.todo} image

{.caption} 8 vertices  
Octagon
:::

---
> id: angles

### Angles in Polygons

Every polygon with _n_ sides also has _n_ [internal angles](gloss:internal-angle).
We already know that the sum of ine internal angles in a triangle is always
[[180]]° but what about other polygons?

::: column.grow(width=300)

    x-geopad(style="width:300px; height: 300px;"): svg
      path.red(x="angle(d,a,b)")
      path.blue(x="angle(a,b,c)")
      path.green(x="angle(b,c,d)")
      path.yellow(x="angle(c,d,a)")
      path(x="segment(a,b)")
      path(x="segment(b,c)")
      path(x="segment(c,d)")
      path(x="segment(d,a)")
      circle.move(name="a" cx=50 cy=50 r=6 )
      circle.move(name="b" cx=250 cy=50 r=6)
      circle.move(name="c" cx=250 cy=250 r=6)
      circle.move(name="d" cx=50 cy=250 r=6)

{.text-center.var} __{.red}${round(angle(d,a,b).deg)}__ +
__{.blue}${round(angle(a,b,c).deg)}__+ __{.green}${round(angle(b,c,d).deg)}__ +
__{.yellow}${round(angle(c,d,a).deg)}__ = 360°

::: column.grow

    x-geopad(style="width:300px; height: 300px;"): svg
      path.red(x="angle(i,e,f)")
      path.blue(x="angle(e,f,g)")
      path.green(x="angle(f,g,h)")
      path.yellow(x="angle(g,h,i)")
      path.yellow(x="angle(h,i,e)")
      path(x="segment(e,f)")
      path(x="segment(f,g)")
      path(x="segment(g,h)")
      path(x="segment(h,i)")
      path(x="segment(i,e)")
      circle.move(name="e" cx=50 cy=50 r=6)
      circle.move(name="f" cx=250 cy=50 r=6)
      circle.move(name="g" cx=250 cy=250 r=6)
      circle.move(name="h" cx=50 cy=250 r=6)
      circle.move(name="i" cx=50 cy=150 r=6)
      
{.todo.text-center} a + b + c + d + e = 540°
:::

---

It looks like the sum of internal angles in a quadrilateral is always [[360]]°
_{span.subsection(needs="blank-0")}– exactly twice the sum of angles in a
triangle. This is no coincidence: every quadrilateral can be split into
[[two|three|four]] triangles._

::: column.subsection(needs="blank-1" width=120)
    include svg/square.svg
::: column.subsection(needs="blank-2" width=120)
    include svg/pentagon.svg
::: column.subsection(needs="blank-3" width=120)
    include svg/hexagon.svg
::: column.subsection(needs="blank-3" width=120)
    include svg/heptagon.svg
:::

{.subsection(needs="blank-1")} The same also works for larger polygons. We
can split a pentagon into [[3]] triangles, so its internal angle sum is
3 × 180° = [[540]]°. And we can split a hexagon into [[4]] triangles, so its
internal angle sum is 4 × 180° = [[720]]°.

---

A polygon with ${x}{x|8|8,12,1'} sides will have an internal angle sum of
180° × ${x-2} = ${(x-2)*180}. More generally, a polygon with _n_ sides can be
split into [[n – 2|n – 1|n]] triangles. Therefore the sum of internal angles is
`(n - 2) × 180°`.

---

### Regular Polygons

We say that a polygon is [__regular__](gloss:regular-polygon) if all of its
sides have the same length, and all of the angles have the same size.

{.todo} select regular polygons interactive

{.todo} Therefore we can calculate the size of a single internal angle in a
regular polygon:

{.text-center} angle = <mfrac><mrow>[[sum of all angles|number of angles]]</mrow><mrow>[[number of angles|sum of all angles]]</mrow></mfrac> = `(180° × (x-2))/x = 180° - (360°)/x`.

In particular, the sum of a regular polygon with ${x}{x|6|3,12,1} sides is
180° – <mfrac class="inline"><mrow>360°</mrow><mrow>${x}</mrow></mfrac> =
${Math.round(180-360/x)}°.

{.todo} Perimeter of a Regular Polygon: If the length of a side is s and there are n
sides in a regular polygon, then the perimeter is P=ns.

{.todo} Area of regular polygons

{.todo} all regular polygons with the same number of sides are similar.

---

### Convex and Concave Polygons

{.todo} Polygons can be either convex or concave. Think of the term concave as referring
to a cave, or “caving in”. A concave polygon has a section that “points inward”
toward the middle of the shape. All stars are concave polygons. A convex polygon
does not share this property.

{.todo} To see if a polygon is concave, look at the polygons and see if any angle
“caves in” to the interior of the polygon. The first polygon does not do this,
so it is convex. The other two do, so they are concave. You could add here that
concave polygons have at least one diagonal outside the figure.

---

## Classifying Quadrilaterals

In the previous chapter we investigated many different properties of triangles.
Now lets have a look at quadrilaterals.

A _regular quadrilateral_ is called a [[square]]. All of its sides have the same
length, and all of its angles are equal.

::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      path.fill.blue(x="polygon(a,b,a.rotate(Math.PI/2,b),b.rotate(-Math.PI/2,a))")
      
      path.white(x="angle(a,b,a.rotate(Math.PI/2, b))" target="s_angle")
      
      path.red(x="segment(a,b,'bar')" target="s_side")
      path.red(x="segment(b,a.rotate(Math.PI/2,b),'bar')" target="s_side")
      path.red(x="segment(a.rotate(Math.PI/2,b),b.rotate(-Math.PI/2,a),'bar')" target="s_side")
      path.red(x="segment(b.rotate(-Math.PI/2,a),a,'bar')" target="s_side")
      
      circle.move(name="a" cx=60 cy=15 r=6)
      circle.move(name="b" cx=60 cy=105 r=6)
      circle(x="a.rotate(Math.PI/2, b)" cy=100 r=4)
      circle(x="b.rotate(-Math.PI/2, a)" r=4)

{.caption} A __square__ is a quadrilateral with [four equal sides](target:s_side) and [four equal angles](target:s_angle).
:::

For slightly "less regular" quadrilaterals, we have two options. If we keep
the angles equal, and change the length of the sides we get a __rectangle__.
If we keep all of the sides equal and change the size of the angles, we get a
__rhombus__.

::: column.quadrilateral

    include svg/quadrilaterals/rectangle.svg

{.caption} A __Rectangle__ is a quadrilateral with four equal angles.
::: column.quadrilateral

    include svg/quadrilaterals/rhombus.svg

{.caption} A __Rhombus__ is a quadrilateral with four equal sides.
:::

There are a few other quadrilaters, that are even less regular but still have
certain important properties:

::: column.quadrilateral

    x-geopad(style="width:210px; height: 120px;"): svg
      path.fill.blue(x="polygon(a,b,b.add(c).subtract(a),c)")
      path.red(x="segment(a,b,'arrow')" target="p_line")
      path.red(x="segment(c,b.add(c).subtract(a),'arrow')" target="p_line")
      path.yellow(x="segment(a,c,'arrow2')" target="p_line")
      path.yellow(x="segment(b,b.add(c).subtract(a),'arrow2')" target="p_line")
      circle.move(name="a" cx=20 cy=20 r=6)
      circle.move(name="b" cx=160 cy=20 r=6)
      circle.move(name="c" cx=50 cy=100 r=6)
      circle(x="b.add(c).subtract(a)" r=4)

{.caption} If _both_ pairs of opposite sides are parallel, we have a __Parallelogram__.
::: column.quadrilateral

    include svg/quadrilaterals/kite.svg

{.caption} If, instead, two pairs of _adjacent_ sides have the same length, we have a __Kite__.
::: column.quadrilateral

    include svg/quadrilaterals/trapezium.svg

{.caption} If a pair of opposite sides are parallel, we have a __Trapezium__.
:::

Quadrilaterals can fall into multiple of these categories. We can visualise the
hierarchy of different types of quadrilaterals as a Venn diagram:

    figure: include svg/venn.svg

{.todo} Every rectangle is also a [[parallelogram|rhombus|square]]. 
{.todo} A rhombus is [[sometimes|always|never]] a square.

To avoid any ambiguity, we usually just specify the most specific type of
quadrilateral.

---

## Parallelograms

Recall that a __parallelogram__ is a quadrilateral that has
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

Now let's find the midpoint of each of the four sides of the quadrilateral. If
we connect the four midpoints, we get [[another quadrilateral|a triangle|a rectangle]].

However it looks like the new shape is not just _any_ quadrilateral, it is
always a [[parallelogram|trapezium|rectangle]]! Try to move the vertices of the
original quadrilateral to check.

{.todo} TODO Explanation
:::

---

## Trapezium

::: column(width=260)

    include svg/quadrilaterals/area-trapezium.svg

::: column.grow
Notice how the gaps on the left and right are each exactly as big as the overlap
on that side. The width of the __{m.red}red rectangle__ is the average of the
widths of the top side and the bottom side of the __{.m-blue}blue trapezium__.
Therefore the area of a trapezium is

{.text-center} #[mfrac #[mrow #[strong.i.m-green top] + #[strong.i.m-green bottom]]#[mrow 2]] × #[strong.i.m-yellow height].
:::

A trapezoid is a quadrilateral with exactly one pair of parallel sides.

An isosceles trapezoid is a trapezoid where the non-parallel sides are
congruent. The third trapezoid above is an example of an isosceles trapezoid.
Think of it as an isosceles triangle with the top cut off. Isosceles trapezoids
also have parts that are labeled much like an isosceles triangle. Both parallel
sides are called bases.

Recall that in an isosceles triangle, the two base angles are congruent. This
property holds true for isosceles trapezoids.

Theorem: The base angles of an isosceles trapezoid are congruent.

The converse is also true: If a trapezoid has congruent base angles, then it is
an isosceles trapezoid. Next, we will investigate the diagonals of an isosceles
trapezoid. Recall, that the diagonals of a rectangle are congruent AND they
bisect each other. The diagonals of an isosceles trapezoid are also congruent,
but they do NOT bisect each other.

Isosceles Trapezoid Diagonals Theorem: The diagonals of an isosceles trapezoid
are congruent.

The midsegment (of a trapezoid) is a line segment that connects the midpoints
of the non-parallel sides. There is only one midsegment in a trapezoid. It will
be parallel to the bases because it is located halfway between them. Similar to
the midsegment in a triangle, where it is half the length of the side it is
parallel to, the midsegment of a trapezoid also has a link to the bases.

Midsegment Theorem: The length of the midsegment of a trapezoid is the average
of the lengths of the bases, or EF=AB+CD2.

### Area and perimeter
Recall that a trapezoid is a quadrilateral with one pair of parallel sides.
The lengths of the parallel sides are the bases. The perpendicular distance
between the parallel sides is the height, or altitude, of the trapezoid.

To find the area of the trapezoid, let’s turn it into a parallelogram. To do
this, make a copy of the trapezoid and then rotate the copy 180∘. Now, this is
a parallelogram with height h and base b1+b2. Let’s find the area of this shape.

A=h(b1+b2)
Because the area of this parallelogram is made up of two congruent trapezoids,
the area of one trapezoid would be A=12h(b1+b2). The formula for the area of a
trapezoid could also be written as the average of the bases time the height.

---

## Rhombus and Kites

::: column(width=260)

    include svg/quadrilaterals/area-kite.svg

::: column.grow
Each the four smaller rectangles are exactly half blue. Therefore the area of
the __{.m-blue}blue kite__ is half the area of the __{.m-red}red rectangle__. In
other words, the area of a kite or rhombus is always

{.text-center} `1/2` __{.i.m-green}width__ × __{.i.m-yellow}height__.
:::

A kite is a quadrilateral with two sets of distinct, adjacent congruent sides.

From the definition, a kite is the only quadrilateral that we have discussed
that could be concave, as with the case of the last kite. If a kite is concave,
it is called a dart. The angles between the congruent sides are called vertex
angles. The other angles are called non-vertex angles. If we draw the diagonal
through the vertex angles, we would have two congruent triangles.

Theorem: The non-vertex angles of a kite are congruent.

IMPORTANT
Theorem: The diagonal through the vertex angles is the angle bisector for both angles.
The proof of this theorem is very similar to the proof above for the first
theorem. If we draw in the other diagonal in KITE we find that the two diagonals
are perpendicular.

Kite Diagonals Theorem: The diagonals of a kite are perpendicular.
To prove that the diagonals are perpendicular, look at △KET and △KIT. Both of
these triangles are isosceles triangles, which means EI is the perpendicular
bisector of KT (the Isosceles Triangle Theorem). Use this information to help
you prove the diagonals are perpendicular in the practice questions.

### Area and Perimeter
Recall that a rhombus is an equilateral quadrilateral and a kite has adjacent
congruent sides. Both of these quadrilaterals have perpendicular diagonals,
which is how we are going to find their areas.

Notice that the diagonals divide each quadrilateral into 4 triangles. In the
rhombus, all 4 triangles are congruent and in the kite there are two sets of
congruent triangles. If we move the two triangles on the bottom of each
quadrilateral so that they match up with the triangles above the horizontal
diagonal, we would have two rectangles.

So, the height of these rectangles is half of one of the diagonals and the
base is the length of the other diagonal.

The area of a rhombus or a kite is A=12d1d2 if the diagonals of the rhombus or
kite are d1 and d2. You could also say that the area of a kite and rhombus are
half the product of the diagonals.

---

## Cyclic quadrilaterals

{.todo} TODO

---

## Hexagons

Construct regular hexagon

---

## Tessellations

Polygons appear everywhere in nature. They are especially useful if you want to
tile a large area, because you can fit polygons together without any gaps or
overlaps – these patterns are called __tessellations__.

    .row
      div(style="width: 200px")
        x-media(lightbox, credit="© Depositphotos / Irochka", src="images/tessellations/honeycomb.jpg", width="200", height="200")
        p.caption Hexagonal honeycomb
      div(style="width: 200px")
        x-media(lightbox, credit="© Depositphotos / Tiukay", src="images/tessellations/snake.jpg", width="200", height="200")
        p.caption Sinaloan milk snake skin
      div(style="width: 200px")
        x-media(lightbox, credit="© Depositphotos / SuradechK", src="images/tessellations/leaf.jpg", width="200", height="200")
        p.caption Cellular structure of leafs
      div(style="width: 200px")
        x-media(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width="200", height="200")
        p.caption Basalt columns at Giant's Causeway in Northern Ireland
      div(style="width: 200px")
        x-media(lightbox, credit="© Depositphotos / Kostia777", src="images/tessellations/pineapple.jpg", width="200", height="200")
        p.caption Pineapple skin
      div(style="width: 200px")
        x-media(lightbox, credit="© Depositphotos / cbenjasuwan", src="images/tessellations/tortoise.jpg", width="200", height="200")
        p.caption Shell of a tortoise

And, of course, humans have copied many of these natural patterns in architecture and technology:

{.todo} Tilings have adorned buildings from ancient Rome to the Islamic world, from
Victorian England to colonial Mexico. In general, the word tiling refers to any
pattern that covers a flat surface, like a painting on a canvas, using non-
overlapping repetitions of one or more shapes, so that the design does not leave
any empty spaces. Contemporary tilings can be found in African-American quilts,
Indonesian batiks, molas from the San Blas de Cuna Islands, and Aboriginal paintings.

    .row
      div(style="width: 200px")
        x-media(lightbox, credit="© Depositphotos / kelifamily", src="images/tessellations/pavement.jpg", width="200", height="200")
        p.caption Rectangular pavement pattern
      div(style="width: 200px")
        x-media(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")
        p.caption Greenhouse at the Eden project
      div(style="width: 200px")
        x-media(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")
        p.caption Mosaic at Alhambra
      div(style="width: 200px")
        x-media(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")
        p.caption Great Court Roof at the British Museum in London
      div(style="width: 200px")
        x-media(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")
        p.caption Cellular tessellation pavilion in Sydney
      div(style="width: 200px")
        x-media(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")
        p.caption Study of Regular Division of the Plane with Reptiles, M. C. Escher

    // TODO Carbon Nanotube
    // application: https://en.wikipedia.org/wiki/Carbon_nanotube
    // https://en.wikipedia.org/wiki/File:Types_of_Carbon_Nanotubes.png
    // https://commons.wikimedia.org/wiki/File:FlyingThroughNanotube.png

---
> id: drawing

Here you can create your own tessellations with regular polygons. See if there
are any shapes that tessellate well or not at all, and try to create interesting
patterns.

    include ./components/tessellation
    x-tessellation

---
> id: possible

When creating tessellations with regular polygons, you'll have noticed that some
kinds of polygons tessellate easily, while others don’t tessellate at all.

    .row
      div(style="width: 160px")
        include svg/triangles.svg
        p.caption Triangles [[tessellate|don’t tessellate]] because 6 × 60° = 360°.
      div(style="width: 160px")
        include svg/squares.svg
        p.caption Squares [[tessellate|don’t tessellate]] because 4 × 90° = 360°.
      div(style="width: 160px")
        include svg/pentagons.svg
        p.caption Pentagons [[don’t tessellate|tessellate]] because multiples of 108° don't add up to 360°.
      div(style="width: 160px")
        include svg/hexagons.svg
        p.caption Hexagons [[tessellate|don’t tessellate]] because 3 × 120° = 360°.

This has to do with the size of their internal angles, which we leaned to
calculate before. If you can make multiples of their internal angle add up to
[[360]]°, the shape will tessellate. Otherwise there will either be a gap or an
overlap.

With any polygon with more than 7 sides, it's not possible. Therefore triangle,
squares and hexagons are the only regular hexagons that tessellate.

---

You can also make tessellations out of multiple different kinds of regular polygons, provided their combined internal angles make 360°:

    x-gallery(slide-width="520")
      div
        include svg/tessellations/tessellation_1.svg
        p.caption equilateral triangles and squares
      div
        include svg/tessellations/tessellation_3.svg
        p.caption equilateral triangles and squares
      div
        include svg/tessellations/tessellation_4.svg
        p.caption equilateral triangles and regular hexagons
      div
        include svg/tessellations/tessellation_5.svg
        p.caption equilateral triangles and regular hexagons
      div
        include svg/tessellations/tessellation_2.svg
        p.caption equilateral triangles, squares and regular hexagons
      div
        include svg/tessellations/tessellation_6.svg
        p.caption squares and octagons (8-gons)
      div
        include svg/tessellations/tessellation_7.svg
        p.caption equilateral triangles and dodecagons (12-gons)
      div
        include svg/tessellations/tessellation_8.svg
        p.caption equilateral triangles, squares and dodecagons

Notice, however, that none of these tessellations contain a regular
[[pentagon|hexagon|octagon]]…

---

But what about pentagons? We already saw that _regular_ pentagons don't tessalate,
but what about non-regular ones?

![](https://plus.maths.org/issue52/features/alvarez/penta_tilings.jpg)
![](https://plus.maths.org/issue52/features/alvarez/penta_tiles.jpg)

What if we just want to tile with copies of one convex pentagon, which means a five sided shape with all its inner angles less that 180°? If we do, a very different and interesting story will unfold, because there are quite a few convex pentagons that will tile a plane. For instance, how would you like to have one of these patterns on your bathroom floor?

As you can see, each of them consists of copies of just one convex pentagon. Observe that the third tiling is not vertex to vertex, which is fine. For each of these tilings, we highlight in figure 9 the shape of the convex pentagon tiler and the conditions on its sides and angles.

How many kinds of convex pentagons can tile the plane? We know of 14 different kinds of pentagons, but no one has been able to find more, or prove that there are no others – yet.  In other words, the problem of tiling with copies of one convex pentagon remains open.

---

And of course we can make tessellations out of non-regular polygons as well:

Tessellating Quadrilaterals 
Tessellate the quadrilateral below.

To tessellate any image you will need to reflect and rotate the image so that
the sides all fit together. First, start by matching up each side with itself
around the quadrilateral.

This is the final tessellation. You can continue to tessellate this shape
forever. Now, continue to fill in around the figures with either the original
or the rotation.

Determining if an Object Tessellates 
Does a regular pentagon tessellate?
First, recall that there are (5−2)180∘=540∘ in a pentagon and each angle is
540∘÷5=108∘. From this, we know that a regular pentagon will not tessellate by
itself because 108∘×3=324∘ and 108∘×4=432∘.

Applying Knowledge about Tessellations
How many squares will fit around one point?
First, recall how many degrees are in a circle, and then figure out how many
degrees are in each angle of a square. There are 360∘ in a circle and 90∘ in
each interior angle of a square, so 36090=4 squares will fit around one point.

    .row
      div(style="width: 320px")
        p.todo Interactive diagram coming soon…
      .grow: p Triangles always tessellate. Their internal angle sum is [[180]]°, so if we use every angle twice at a vertex, we get 360°.
      div(style="width: 320px")
        p.todo Interactive diagram coming soon…
      .grow: p Quadrilaterals always tessellate. Their internal angle sum is [[360]]°, so if we use every angle at a vertex, we get 360°.
      div(style="width: 320px")
        p.todo Diagram coming soon…
      .grow: p Pentagons sometimes tessellate, but only if they have particular shapes.

---

{.todo} Tiling was a favorite means of expression for the Dutch artist M. C. Escher (1898-1972), who repeatedly expressed his love for this art form, acknowledging at the same time the influence on his work of the mosaics he admired and sketched from Moorish buildings in Southern Spain. In spite of this influence, Escher's art went far beyond anything seen before. He produced enigmatic tilings, with strange creatures and mutating landscapes that suggest a craft free from any worldly limitation. This perception however, owned to Escher's mastery, is far from true. Tiling is a very precise art, where not much can be left to chance. Even the simplest tilings fall to the spell of mathematical principles. We can push and turn and wriggle, but if the maths is not right, it isn't going to tile.


Many artists came up with much more complicated tessellations, most famously
[M. C. Escher](bio:escher). Here are a few examples:

    figure
      .row
        .grow.shrink(style="width: 226px; flex-grow: 2.17; flex-shrink: 2.17"): x-media(credit="© M. C. Escher", src="images/escher/mirror.jpg", width="509", height="315")
        .grow.shrink(style="width: 104px"): x-media(credit="© M. C. Escher", src="images/escher/knights.jpg", width="234", height="315")
      .row
        .grow(style="width: 161px; flex-grow: 1.15; flex-shrink: 1.15"): x-media(credit="© M. C. Escher", src="images/escher/reptiles.jpg", width="397", height="346")
        .grow(style="width: 140px"): x-media(credit="© M. C. Escher", src="/resources/polygons-and-polyhedra/images/escher/sky_water.jpg", width="346", height="346")
      p.caption(style="max-width: 500px; margin: 0 auto;") #[em Magic Mirror] (top left), #[em Regular Division of the Plane III] (top right), #[em Reptiles] (bottom left) and #[em Sky and Water I] (bottom right) were all created by M. C. Escher.

---

All the tessellations we saw so far have one thing in common: they are
_periodic_. This means that they consist of a regular pattern that is repeated
again and again. They can continue forever in all directions and they will look
the same everywhere.

In the 1970s, the English mathematician [Sir Roger Penrose](bio:penrose)
discovered _non-periodic_ tessellations – they still continue infinitely in all
directions, but it will _never_ look exactly the same. These are called
__Penrose tilings__, and you only need a few different kinds of polygons to
create one:

The British mathematician and cosmologist Roger Penrose, for example, has designed non-repeating tilings that now seem to agree with the internal structure of real materials, such as some combinations using aluminum. In a lighter note, Penrose's designs have also caught the attention of a toilet paper manufacturer, because paper embossed with a non-repeating pattern can be rolled without leaving bulging spots. But Penrose had copyrighted the pattern and the manufacturer got a legal spank.

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Move the slider to reveal the underlying structure of this tessellation. Notice how you have the same patterns at various scales: the small yellow pentagons, blue stars, orange rhombi and green ‘ships’ appear in their original size, in a #[strong.blue slightly larger size] and an #[strong.red even larger size]. This #[em self-similarity] can be used to prove that this Penrose tiling is non-periodic.

---

## Polyhedra

A polyhedron is a 3-dimensional figure that is formed by polygons that enclose
a region in space. Each polygon in a polyhedron is called a face. The line
segment where two faces intersect is called an edge and the point of
intersection of two edges is a vertex. There are no gaps between the edges or
vertices in a polyhedron. Examples of polyhedrons include a cube, prism, or
pyramid. Non-polyhedrons are cones, spheres, and cylinders because they have
sides that are not polygons.

A polyhedron consists of just one piece. It cannot, for example, be made up of two (or more) basically separate parts joined by only an edge or a vertex. This means that neither of the following objects is a true polyhedron.

A prism is a polyhedron with two congruent bases, in parallel planes, and the
lateral sides are rectangles. Prisms are explored in further detail in another
Concept.

A pyramid is a polyhedron with one base and all the lateral sides meet at a
common vertex. The lateral sides are triangles. Pyramids are explored in further
detail in another Concept.

All prisms and pyramids are named by their bases. So, the first prism would be
a triangular prism and the second would be an octagonal prism. The first pyramid
would be a hexagonal pyramid and the second would be a square pyramid. The
lateral faces of a pyramid are always triangles.

Euler’s Theorem states that the number of faces, vertices V, and edges E of a
polyhedron can be related such that F + V = E + 2.

A regular polyhedron is a polyhedron where all the faces are congruent regular
polygons. There are five regular polyhedra called the Platonic solids, after the
Greek philosopher Plato. These five solids are significant because they are the
only five regular polyhedra. There are only five because the sum of the measures
of the angles that meet at each vertex must be less than 360°. Therefore the
only combinations are 3, 4 or 5 triangles at each vertex, 3 squares at each
vertex or 3 pentagons. Each of these polyhedra have a name based on the number
of sides, except the cube.

* Regular Tetrahedron: A 4-faced polyhedron where all the faces are equilateral triangles.
* Cube: A 6-faced polyhedron where all the faces are squares.
* Regular Octahedron: An 8-faced polyhedron where all the faces are equilateral triangles.
* Regular Dodecahedron: A 12-faced polyhedron where all the faces are regular pentagons.
* Regular Icosahedron: A 20-faced polyhedron where all the faces are equilateral triangles.


## Euler's Formula

Before we examine what Euler's formula tells us, let's look at polyhedra in a bit more detail. A polyhedron is a solid object whose surface is made up of a number of flat faces which themselves are bordered by straight lines. Each face is in fact a polygon

Up to now we have looked at what you can do with polygons in a flat,
two-dimensional world. We can also connect polygons to form three-dimensional
solids – these are called __Polyhedra__.

The sides of a polyhedron are called __faces__, the lines where faces meet are
called __edges__, and the corners where edges meet are called __vertices__.

{.todo} Diagrams and Euler’s Formula coming soon…

There are countless more polyhedra: some looking like stars, some consisting of
non-regular polygons, and some having holes inside.

Notice that the number of faces plus the number of vertices always seems to be 2
more that the number of edges. In other words, F + V = E + 2. This formula was
discovered by Leonhard Euler (1707 – 1783). We have just shown that it works for
all Platonic solids, but in fact it is true for any polyhedron. There is a very
similar formula for the number of faces, edges and vertices of planar graphs.

Euler's formula is true for the cube and the icosahedron. It turns out, rather beautifully, that it is true for pretty much every polyhedron. The only polyhedra for which it doesn't work are those that have holes running through them like the one shown in the figure below.

These polyhedra are called non-simple, in contrast to the ones that don't have holes, which are called simple. Non-simple polyhedra might not be the first to spring to mind, but there are many of them out there, and we can't get away from the fact that Euler's Formula doesn't work for any of them. However, even this awkward fact has become part of a whole new theory about space and shape.


PROOF

Playing around with various simple polyhedra will show you that Euler's formula always holds true. But if you're a mathematician, this isn't enough. You'll want a proof, a water-tight logical argument that shows you that it really works for all polyhedra, including the ones you'll never have the time to check.

Adrien-Marie Legendre, (1752 - 1833) 
Adrien-Marie Legendre, (1752 - 1833)
Despite the formula's name, it wasn't in fact Euler who came up with the first complete proof. Its history is complex, spanning 200 years and involving some of the greatest names in maths, including René Descartes (1596 - 1650), Euler himself, Adrien-Marie Legendre (1752 - 1833) and Augustin-Louis Cauchy (1789 - 1857).

Augustin-Louis Cauchy (1789 - 1857)
Augustin-Louis Cauchy, (1789 - 1857)
It's interesting to note that all these mathematicians used very different approaches to prove the formula, each striking in its ingenuity and insight. It's Cauchy's proof, though, that I'd like to give you a flavour of here. His method consists of several stages and steps. The first stage involves constructing what is called a network.



I will finish by mentioning some consequences of Euler's formula beyond the world of polyhedra. I'll start with something very small: computer chips. Computer chips are integrated circuits, made up of millions of minute components linked by millions of conducting tracks. These are reminiscent of our networks above, except that usually it is not possible to lay them out in a plane without some of the conducting tracks — the edges — crossing. Crossings are a bad thing in circuit design, so their number should be kept down, but figuring out a suitable arrangement is no easy task. Euler's polyhedron formula, with its information on networks, is an essential ingredient in finding solutions.

Now let's move to the very large: our universe. To this day cosmologists have not agreed on its exact shape. Pivotal to their consideration is topology, the mathematical study of shape and space. In the 19th century mathematicians discovered that all surfaces in three-dimensional space are essentially characterised by the number of holes they have: our simple polyhedra have no holes, a doughnut has one hole, etc. Euler's formula does not work for polyhedra with holes, but mathematicians discovered an exciting generalisation. For any polyhedron, V - E +  F is exactly 2 minus 2 times the number of holes! It turns out that this number, called the Euler characteristic, is crucial to the study of all three-dimensional surfaces, not just polyhedra. Euler's formula can be viewed as the catalyst for a whole new way of thinking about shape and space.



---

## Platonic Solids

Just like we defined _regular polygons_ as particularly symmetric polygons, we
can create particularly “regular” polyhedra – for example, only using just a
single kind of regular polygon:

To create a 3-dimensional object, we need at least [[3]] faces to meet at every
vertex. Let’s start with equilateral triangles:

    table.plato.subsection(needs="blank-0")
      tr
        td(style="width: 80px"): include svg/platonic/triangle-1.svg
        td(style="width: 80px"): x-media(width="80", height="80", src="/resources/polygons-and-polyhedra/images/polyhedra/tetrahedron.gif")
        td: p We can create a polyhedron where three equilateral triangles meet at every vertex. The result is called a #[strong Tetrahedron].
      tr
        td: include svg/platonic/triangle-2.svg
        td: x-media(width="80", height="80", src="/resources/polygons-and-polyhedra/images/polyhedra/octahedron.gif")
        td: p If four triangles meet at every vertex, we get a different polyhedron called #[strong Octahedron].
      tr
        td: include svg/platonic/triangle-3.svg
        td: x-media(width="80", height="80", src="/resources/polygons-and-polyhedra/images/polyhedra/icosahedron.gif")
        td: p If five triangles meet at every vertex, we get another polyhedron called #[strong Icosahedron].
      tr(style="background: #eee")
        td: include svg/platonic/triangle-4.svg
        td
        td: p If six triangles meet at every vertex we don’t get a polyhedron: just a flat [[tessellation|angle|quadrilateral]].
      tr(style="background: #eee")
        td(colspan=3): p We always need a [[gap|overlap]] to create a 3-dimensional shape. Therefore seven or more triangles at every vertex also can’t produce new polyhedra.

---

We can do the same with squares:

    table.plato
      tr
        td(style="width: 80px"): include svg/platonic/square-1.svg
        td(style="width: 80px"): x-media(width="80", height="80", src="/resources/polygons-and-polyhedra/images/polyhedra/cube.gif")
        td: p If three squares meet at every vertex, we get a #[strong cube], sometimes also called #[em Hexahedron].
      tr(style="background: #eee")
        td: include svg/platonic/square-2.svg
        td
        td: p If four squares meet at every vertex, we get another tessellation. Like above, five or more squares also won’t work.

---

Next, let’s try pentagons:

    table.plato
      tr
        td(style="width: 80px"): include svg/platonic/pentagon-1.svg
        td(style="width: 80px"): x-media(width="80", height="80", src="/resources/polygons-and-polyhedra/images/polyhedra/dodecahedron.gif")
        td: p If three pentagons meet at every vertex, we get a polyhedron called #[strong Dodecahedron].
      tr(style="background: #eee")
        td(style="width: 80px"): include svg/platonic/pentagon-2.svg
        td
        td: p Like above, four or more pentagons [[don’t work|are possible]] because there is no gap we can fold.

---

And similarly for hexagons:

    table.plato
      tr
        td(style="width: 80px"): include svg/platonic/hexagon.svg
        td: p If three hexagons meet at every vertex we get a flat tessellation but no polyhedron. And again, four or more hexagons also don’t work.

---

The same also happens for all regular polygons with more than six sides. They
don’t tessellate, and we certainly don’t get any 3-dimensional polygons.

Thus, there are[[5]] different polyhedra consisting of just one kind of
[[regular polygon|triangle|polygon]]. These are called __Platonic Solids__,
named after the Greek philosopher [Plato](bio:plato) who discovered them. Their
individual names are derived from the Greek name for their number of faces:
“tetra”, for example, means “four”.

---

Plato believed that all matter in the Universe consists of four elements: air,
earth, water and fire, and that these correspond to different Platonic solids.
The fifth, he thought, was the shape of the entire Universe. Today we know that
there are more than 100 elements which consist of spherical atoms, not polyhedra.

Try to fill in the following table with properties about the platonic solids:


| Tetrahedron  | Cube  | Octahedron  | Dodecahedron | Icosahedron |
| ------------- | ----- | ------- | --- | --- |
| x-media(width=100, height=100, src="images/polyhedra/tetrahedron.gif") | x-media(width=100, height=100, src="images/polyhedra/cube.gif") | x-media(width=100, height=100, src="images/polyhedra/octahedron.gif") | x-media(width=100, height=100, src="images/polyhedra/dodecahedron.gif") | x-media(width=100, height=100, src="images/polyhedra/icosahedron.gif") |
| Fire | Earth | Air | The Universe | Water |
| [[4]] Faces<br>[[4]] Vertices<br>[[6]] Edges | [[6]] Faces<br>[[8]] Vertices<br>[[12]] Edges | [[8]] Faces<br>[[6]] Vertices<br>12 Edges | [[12]] Faces<br>20 Vertices<br>30 Edges| [[20]] Faces<br>12 Vertices<br>30 Edges |

---

Notice how the number of faces and vertices are [[swapped around|the same]] for
cube an octahedron, and dodecahedron and icosahedron, while the number of edges
[[stays the same|are different]]. These pairs of Platonic solids are called
__dual solids__.

We can even turn one into each other, by “replacing” every face with a vertex,
and vice versa:

    .row
      .grow: x-img-sequence(src="images/dual1/d#.png", pages="24", width="300", height="300")
      .grow: x-img-sequence(src="images/dual2/d#.png", pages="24", width="300", height="300")

The tetrahedron is dual with itself. If we were to do the same kind of
intersection, we would simply get two tetrahedra.

---

## More on Polyhedra

__Archimedean solids__ are slightly less regular. They are like Platonic solids,
but they can consist of more than one type of regular polygon. They are named
after another ancient Greek mathematician: [Archimedes of Syracuse](bio:archimedes).
In total there are 13 Archimedean solids, plus two mirror images.

    // TODO Prisms and antiprisms, whose symmetry groups are the dihedral groups, are generally not considered to be Archimedean solids, despite meeting the above definition. With this restriction, there are only finitely many Archimedean solids. All but the elongated square gyrobicupola can be made via Wythoff constructions from the Platonic solids with tetrahedral, octahedral and icosahedral symmetry.

    .row
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-tetrahedron.gif")
        p.caption Truncated Tetrahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/cuboctahedron.gif")
        p.caption Cuboctahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-cube.gif")
        p.caption Truncated Cube
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-octahedron.gif")
        p.caption Truncated Octahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/rhombicuboctahedron.gif")
        p.caption Rhombicuboctahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-cuboctahedron.gif")
        p.caption Truncated Cuboctahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/snub-cube.gif")
        p.caption Sub Cube
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/icosidodecahedron.gif")
        p.caption Icosidodecahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-dodecahedron.gif")
        p.caption Truncated Dodecahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-icosahedron.gif")
        p.caption Truncated Icosahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/rhombicosidodecahedron.gif")
        p.caption Rhombicosidodecahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/truncated-icosidodecahedron.gif")
        p.caption Truncated Icosidodecahedron
      div(style="width: 160px")
        x-media(width="200", height="200", src="/resources/polygons-and-polyhedra/images/polyhedra/snub-dodecahedron.gif")
        p.caption Snub Dodecahedron

---

Plato was wrong in believing that matter consists of Platonic solids. But
regular polyhedra have many special properties that make them appear everywhere
in nature – and we can copy these properties in science and engineering.

### Viruses and Bacteria

::: column(width=180)

    x-media(lightbox, width="180", height="180", src="/resources/polygons-and-polyhedra/images/radiolaria.jpg")
    p.caption Radiolaria skeleton
    
::: column(width=180)

    x-media(lightbox, width="180", height="180", src="/resources/polygons-and-polyhedra/images/virus.jpg")
    p.caption Icosahedral virus

::: column.grow
Many viruses, bacteria and other tiny organisms are shaped like icosahedra.
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
C~~60~~ which consists of 60 carbon atoms arranged in the shape of a [truncated
icosahedron](gloss:trucated-icosahedron). It was discovered in 1985 when
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
tetrahedra, cubes, octahedra and many other polyhedra. When they crack or
shatter, you can see these patterns on a much larger scale.
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

The truncated icosahedron is probably the most famous polyhedron in the world:
it is the shape of the football.
:::

---

## Cross-Sections and Nets of 3D Solids

What if you wanted to expand your thinking of geometric shapes beyond the flat
two-dimensional ones to three dimensional (3D) ones?

Try this experiment to gee how nets relate to 3D figures: Sketch or print the
equilateral triangle in the image below onto a piece of paper and cut it out.
Fold on the dotted lines. What shape do these four attached equilateral
triangles make? If you place two of these equilateral triangles next to each
other, as in the second image, and fold them on the dotted lines, what 3D figure
would you make? 

While our world is three dimensional, we are used to modeling and thinking about
three dimensional objects on paper (in two dimensions). There are a few common
ways to help think about three dimensions in two dimensions. One way to “view”
a three-dimensional figure in a two-dimensional plane, like this text, is to use
cross-sections. A cross-section is the intersection of a plane with a solid.
Another way to represent a three-dimensional figure in a two dimensional plane
is to use a net. A net is an unfolded, flat representation of the sides of a
three-dimensional shape.

### Identifying Figures Created by Nets
What kind of figure does this net create?

### Drawing Nets
Draw a net of the right triangular prism below.

### Describing Cross-Sections 
Describe the cross section formed by the intersection of the plane and the solid.
