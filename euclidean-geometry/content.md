# Euclidean Geometry

> stage: intermediate
> description: Geometry is one of the oldest parts of mathematics – and one of
>   the most useful. It has been studied for thousands of years.

---
>id: thales

## Introduction

Mathematics has been studied for many thousands of years – to predict the
seasons, calculate taxes, or estimate the size of farming land.

    .img-block
      x-media(src="images/rhind.jpg", width="660", height="110", credit="British Museum")
      p.caption The Rhind Papyrus found in Thebes (Egypt) is one of the oldest examples of mathematical work.

Ancient Greek mathematicians were the first to study mathematics just for its
own sake, without a specific application in mind. They were amazed by
mathematical patterns, and wanted to explore and explain them. One of them was
[Thales of Miletus](bio:thales) who made a surprising discovery when playing
around with geometric shapes:

::: .row.padded
::: div(style="width: 440px")

    x-geopad.sticky(style="width:440px; height: 320px;"): svg
      path(x="semicircle(b,a)" name="CC" target="circumf")
      path(x="segment(a,b)")
      path.thin.red(x="angle(a,c,b)" target="angle")
      path.red(x="triangle(a,c,b)")
      circle.move(name="a" cx=40 cy=250 r=6 label="A")
      circle.move(name="b" cx=400 cy=250 r=6 label="B")
      circle.move.red(name="c" force="circle(line(a,b).midpoint,line(a,b).length/2).project(c)" cx=110, cy=0, r=6)

:::
::: .grow
Start by picking two points anywhere in the box on the left.

Let's draw a semicircle around your points.

Pick another point that lies anywhere on the [circumference](target:circumf)
of the semicircle.

Now draw the triangle that connects the endpoints of the diameter of the
semicircle, as well as the point you picked on the circumference.

Finally, look at the [angle](target:angle) at the top of the triangle. No matter which points
you picked, it always seems to be [[90]]°. This means that the triangle is
[[right-angled|equilateral|acute]].
:::
:::

---

This is a pretty amazing result – why should circles and right-angled triangles
be related in any way? In fact, Thales was so surprised by his discovery, that –
according to legend – he sacrificed an ox to thank the gods.

However, simply _observing_ a relationship like this was not enough for Thales.
he wanted to explain _why_ it was true, and to verify that it is _always_ true
– not just in the specific examples he happened to try.

An argument that verified a statement like "" is called a __proof__. And once 

The notion of proof marked a significant change in the history of mathematics.
Rather than just XXXXXX

---

To come up with proofs, we need some XXXX terminology or __definitions__:

::: .row.padded
::: div(style="width: 240px")

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

:::
::: .grow
A __point__ is a specific location in space. Points describe a position, but
have no _size_ in itself. They are labelled using capital letters.
:::
:::

::: .row.padded
::: div(style="width: 240px")

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

:::
::: .grow
A __line__ ZZZZ. The line from point `A` to point `B` is labelled `bar("AB")`.
A line is a set of infinitely many points that extend forever in both directions.
A line, like a point, does not take up space. It has direction, location and is
always straight. Lines are one-dimensional because they only have length (no
width). A line can by named or identified using any two points on that line or
with a lower-case, italicized letter.
This line can be labeled `vec(PQ)`, `vec(QP)` or just g. You would say “line PQ,”
“line QP,” or “line g,” respectively. Notice that the line over the PQ and QP
has arrows over both the P and Q. The order of P and Q does not matter.

A __line segment__
An endpoint is a point at the end of a line segment. Line segments are labeled
by their endpoints, `bar(AB)` or `bar(BA)`. Notice that the bar over the
endpoints has NO arrows. Order does not matter.

A __ray__  is a part of a line with one endpoint that extends forever in the
direction opposite that endpoint. A ray is labeled by its endpoint and one other
point on the line. When labeling rays, always write the endpoint under the side
WITHOUT the arrow, as in `vec(CD)` or `vec(DC)`,since that letter represents the
end of the ray and the arrow indicates the direction that the ray continues.
:::
:::

::: .row.padded
::: div(style="width: 240px")

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

:::
::: .grow
A __circle__ is the collection of points that 
:::
:::

Points that lie on the same line are collinear. P,Q,R,S, and T are collinear
because they are all on line w. If a point U were located above or below line w,
it would be non-collinear.

An intersection is a point or set of points where lines, planes, segments, or
rays cross each other.

When making geometric drawings, be sure to be clear and label all points and lines.

---
> id: euclid

## Euclid's Postulates

::: .row.right
::: div(style="width: 220px")

    x-media(src="images/elements.jpg" width=220 height=330 lightbox)

:::
::: .grow
Greek mathematicians realised that to write formal proofs, you need some sort of
_starting point_: simple, intuitive XXXX that can be used to prove new ones.
These statements are called __postulates__ or __axioms__. 

[Euclid of Alexandria](bio:euclid) published the five axioms that form the
foundation of all of geometry in his book "Elements". Euclid is often called the
father of Geometry, and his works were used as mathematics textbooks for
thousands of years, until the 20th century.
:::
:::

* You can join any two points using exactly one straight line.
* You can extend any line segment to an infinite line.
* Given a point P and a distance r, you can draw a circle with centre P and radius r.
* Any two right angles are congruent.
* Given a line L and a point P not on L, there is exactly one (parallel) line which goes through P and never meets L.

Each of these axioms looks obvious and trivial, but XXXX

---

## Parallel and Perpendicular Lines

Two or more lines are parallel when they lie in the same plane and never
intersect. The symbol for parallel is `||`. To mark lines parallel, draw arrows
(>) on each parallel line. If there are more than one pair of parallel lines,
use two arrows (>>) for the second pair. The two lines below would be labeled
AB←→ || MN←→− or l || m.

For a line and a point not on the line, there is exactly one line parallel to
this line through the point. There are infinitely many lines that pass through
A, but only one is parallel to l.

The Parallel Lines Property is a transitive property that can be applied to
parallel lines. It states that if lines l || m and m || n, then l || n.

Railroad Tracks

Two lines are perpendicular if they meet at a 90°, or right, angle. For a line
and a point not on the line, there is exactly one line perpendicular to the
line that passes through the point. There are infinitely many lines that pass
through A, but only one that is perpendicular to l. Recall that complementary
angles add up to 90∘. If complementary angles are adjacent, their nonadjacent
sides are perpendicular rays. What you learn about perpendicular lines can also
be applied to this situation.

### Perpendicular Line Construction; through a Point NOT on the Line
* Draw a horizontal line and a point above that line. Label the line l and the point A.
* Take the compass and put the pointer on A. Open the compass so that it reaches beyond line l. Draw an arc that intersects the line twice.
* Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc below the line. Repeat this on the other side so that the two arc marks intersect.
* Take your straightedge and draw a line from point A to the arc intersections below the line. This line is perpendicular to l and passes through A.

### Perpendicular Line Construction; through a Point on the Line
* Draw a horizontal line and a point on that line.
Label the line l and the point A.
* Take the compass and put the pointer on A. Open the compass so that it reaches out horizontally along the line. Draw two arcs that intersect the line on either side of the point.
* Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc above or below the line. Repeat this on the other side so that the two arc marks intersect.
* Take your straightedge and draw a line from point A to the arc intersections above the line. This line is perpendicular to l and passes through A.

Theorem #1: If two lines are parallel and a third line is perpendicular to one of the parallel lines, it is also perpendicular to the other parallel line. Or, if l || m and l⊥n, then n⊥m.

Theorem #2: If two lines are perpendicular to the same line, they are parallel to each other.

Distance Between Parallel Lines 
The shortest distance between two parallel lines is the length of the perpendicular segment between them. It doesn’t matter which perpendicular line you choose, as long as the two points are on the lines. Recall that there are infinitely many perpendicular lines between two parallel lines.

Notice that all of the pink segments are the same length. So, when picking a perpendicular segment, be sure to pick one with endpoints that are integers.

---

## Midpoints and Segment Bisectors

A midpoint is a point on a line segment that divides it into two congruent
segments. If A,B, and C are collinear, and AB=BC, then B is the midpoint of
`bar(AC)`. Any line segment will have exactly one midpoint.

A line, segment, or ray that passes through a midpoint of another segment is
called a __segment bisector__. A bisector cuts a line segment into two congruent
parts. A segment bisector is called a perpendicular bisector when the bisector
intersects the segment at a right angle.

`bar(DE)` is the __perpendicular bisector__ of `bar(AC)`, so `bar(AB) ~= bar(BC)`
and `bar(AC) _|_ bar(DE)`.
For every line segment, there is one perpendicular bisector that passes through
the midpoint. There are infinitely many bisectors, but only one perpendicular
bisector for any segment.


Constructing a Perpendicular Bisector

* Draw a line that is at least 6 cm long, about halfway down your page. 
* Place the pointer of the compass at an endpoint. Open the compass to be
  greater than half of the segment. Make arc marks above and below the segment.
  Repeat on the other endpoint. Make sure the arc marks intersect. 
* Use your straight edge to draw a line connecting the arc intersections. 
* This constructed line bisects the line you drew in #1 and intersects it at
  90°. So, this construction also works to create a right angle.

---

## Angle Bisectors

When two rays have the same endpoint, an angle is created.

Here, `vec(BA)` and `vec(BC)` meet to form an angle. An angle is labeled with an
“∠” symbol in front of the three letters used to label it. This angle can be
labeled `/_ABC` or `/_CBA`. Always put the vertex (the common endpoint of the
two rays) in the middle of the three points. It doesn’t matter which side point
is written first.

An __angle bisector__ is a ray that divides an angle into two congruent angles,
each having a measure exactly half of the original angle. Every angle has
exactly one angle bisector.

`bar(BD)` is the angle bisector of `/_ABC`
∠ABDm∠ABD≅∠DBC=12m∠ABC

Constructing an Angle Bisector

* Draw an angle on your paper. Make sure one side is horizontal. 
* Place the pointer on the vertex. Draw an arc that intersects both sides. 
* Move the pointer to the arc intersection with the horizontal side. Make a
  second arc mark on the interior of the angle. Repeat on the other side. Make
  sure they intersect. 
* Connect the arc intersections from #3 with the vertex of the angle.

Angle Bisector Theorem: If a point is on the bisector of an angle, then the
point is equidistant from the sides of the angle.
In other words, if BD←→ bisects ∠ABC,BE−→−⊥ED, and BF−→−⊥DF, then ED=DF.

---

## Ruler and Compass Construction

{.todo} TODO
Impossible construction
Geometry Software
Construct regular hexagon

---

## Origami and Paper Folding

Ruler and compass are not the only tools we can use to construct geometric
shapes. Another technique uses no tools at all

The word _Origami_ comes from the Japanese






{.todo} TODO
