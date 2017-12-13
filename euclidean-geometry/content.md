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
      x-media(src="images/rhind.jpg", width="660", height="110", credit="© British Museum")
      p.caption The Rhind Papyrus found in Thebes (Egypt) is one of the oldest examples of mathematical work.

Ancient Greek mathematicians were the first to study mathematics just for its
own sake, without a specific application in mind. They were amazed by
mathematical patterns, and wanted to explore and explain them. One of them was
[Thales of Miletus](bio:thales) who made a surprising discovery when playing
around with geometric shapes:

::: column(width=440)

    x-geopad.sticky(style="width:440px; height: 320px;" tools="point|move"): svg

::: column.grow
Start by picking two points anywhere in the box on the left.

{.subsection(needs="p1 p2")} Let's draw a semicircle around your points.

{.subsection(needs="p1 p2")} Pick another point that lies anywhere on the
[circumference](target:circumf) of the semicircle.

{.subsection(needs="p3")} Now let's draw the triangle that connects the
endpoints of the diameter of the semicircle, as well as the point you picked on
the circumference.

{.subsection(needs="p3")} Finally, look at the [angle](target:angle) at the
top of the triangle. No matter which points you picked, it always seems to be
[[90]]°. _{span.subsection(needs="blank-0")} This means that the triangle
is [[right-angled|equilateral|acute]]._
:::

---

For Thales, this was a pretty spectacular result – why should circles and
right-angled triangles, two completely different shapes, be linked in this
fundamental way? In fact, he was so awed by his discovery that – according to
legend – he sacrificed an ox to thank the gods.

    .img-block
      x-media(src="images/temple.svg" width=400 height=170 credit="© Depositphotos")

However, simply _observing_ a relationship like this was not enough for Thales.
he wanted to explain _why_ it was true, and to verify that it is _always_ true
– not just in the specific examples he happened to try.

An argument that verified a statement like "" is called a __proof__. And once 

The notion of proof marked a significant change in the history of mathematics.
Rather than just XXXXXX

    .img-block: img(src="images/divider-1.svg" width=760 height=42)

---

To come up with proofs, we need some XXXX terminology or __definitions__:

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

::: column.grow
A __point__ is a specific location in space. Points describe a position, but
have no _size_ in itself. They are labelled using capital letters.
:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

::: column.grow
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

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

::: column.grow
A __circle__ is the collection of points that 
:::

Points that lie on the same line are collinear. P,Q,R,S, and T are collinear
because they are all on line w. If a point U were located above or below line w,
it would be non-collinear.

An intersection is a point or set of points where lines, planes, segments, or
rays cross each other.

When making geometric drawings, be sure to be clear and label all points and lines.

---

## Congruence

Before we begin, we must introduce the concept of congruency. Angles are congruent if their measures, in degrees, are equal. Note: "congruent" does not mean "equal." While they seem quite similar, congruent angles do not have to point in the same direction. The only way to get equal angles is by piling two angles of equal measure on top of each other.


::: column.grow
The two shapes on the right basically look equal. They have the same size and
shape, and we could [turn and slide](action:move) one of them to exactly match
up with the other. In geometry, we say that the two shapes are
[__congruent__](gloss:congruent).
::: column(width=440)
{.todo} animated graphic
:::

Here are a few more geometric objects: match up the ones that are congruent.
(Note that sometimes more than two shapes can be congruent to each other.)

{.todo} interactive

There is also a special symbol for congruence: 

Congruence of geometric shapes behaves very similar to _equality_ of numbers
or expressions in algebra. For example:

* It is _symmetric_. If `X ~= Y` then `Y ~= X`, whatever `X` and `Y` might be.
* It is _reflexive_: any shape is congruent to itself. For example, `A ~= A`.
* It is _transitive_. If `X ~= Y` and `Y ~= Z` then also `X ~= Z`.



    // In order to say that `△ABD ~= △ABC`, you must determine that the three
    // corresponding angles and sides are congruent. Which pair of sides is congruent
    // by the Reflexive Property?

    // The side `bar(AB)` is shared by both triangles. So, in a geometric proof,
    // `bar(AB) ~= bar(AB)` by the Reflexive Property of Congruence.

    // If all three pairs of angles for two given triangles are congruent does that
    // mean that the triangles are congruent?

    // Without knowing anything about the lengths of the sides you cannot tell whether
    // or not two triangles are congruent. The two triangles described above might be
    // congruent, but we would need more information to know for sure.

    // Third Angle Theorem: If two angles in one triangle are congruent to two angles
    // in another triangle, then the third pair of angles must also congruent.

    // In other words, for triangles △ABC and △DEF, if ∠A≅∠D and ∠B≅∠E, then ∠C≅∠F.

    // Notice that this theorem does not state that the triangles are congruent. That
    // is because if two sets of angles are congruent, the sides could be different
    // lengths. See the picture below.

    // The Third Angle Theorem states that if two angles in one triangle are congruent
    // to two angles in another triangle, then the third pair of angles must also
    // congruent. What additional information would you need to know in order to be
    // able to determine that the triangles are congruent?

    // In order for the triangles to be congruent, you need some information about the
    // sides. If you know two pairs of angles are congruent and at least one pair of
    // corresponding sides are congruent, then the triangles will be congruent.

    // Notice that when two triangles are congruent their three pairs of corresponding
    // angles and their three pairs of corresponding sides are congruent.

    // When referring to corresponding congruent parts of congruent triangles, you can
    // use the phrase Corresponding Parts of Congruent Triangles are Congruent, or its
    // abbreviation CPCTC.

---
> id: euclid

## Euclid's Postulates

::: column.grow
Greek mathematicians realised that to write formal proofs, you need some sort of
_starting point_: simple, intuitive XXXX that can be used to prove new ones.
These statements are called __postulates__ or __axioms__. 

[Euclid of Alexandria](bio:euclid) published the five axioms that form the
foundation of all of geometry in his book "Elements". Euclid is often called the
father of Geometry, and his works were used as mathematics textbooks for
thousands of years, until the 20th century.
::: column(width=220)

    x-media(src="images/elements.jpg" width=220 height=330 lightbox)

:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path.red(x="segment(a,b)" target="1_line")
      circle.move(name="a" cx=30 cy=130 r=6 target="1_point")
      circle.move(name="b" cx=210 cy=30 r=6 target="1_point")

::: column.grow
### First Axiom
You can join any [two points](target:1_point) using exactly one straight
[line segment](target:1_line).
:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path.red(x="line(a,b)" target="2_line")
      path(x="segment(a,b)" target="2_line 2_segment")
      circle.move(name="a" cx=60 cy=100 r=6)
      circle.move(name="b" cx=180 cy=60 r=6)

::: column.grow
### Second Axiom
You can extend any [line segment](target:2_segment) to an
[infinite line](target:2_line).
:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path(x="segment(a,b)" target="3_radius")
      path.red(x="circle(a,distance(a,b))" target="3_circle")
      circle.move(name="a" cx=120 cy=80 r=6 target="3_center")
      circle.move(name="b" cx=170 cy=130 r=6)

::: column.grow
### Third Axiom
Given a [point _P_](target:3_center) and a [distance _r_](target:3_radius), you
can draw a [circle](target:3_circle) with centre _P_ and radius _r_.
:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

::: column.grow
### Fourth Axiom
Any two right angles are congruent.
:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path.red(x="line(a,b).parallel(c)" target="5_parallel")
      path(x="line(a,b)" target="5_line")
      circle.move(name="a" cx=20 cy=80 r=6)
      circle.move(name="b" cx=120 cy=140 r=6)
      circle.move(name="c" cx=180 cy=60 r=6 target="5_point")

::: column.grow
### Fifth Axiom
Given a [line _L_](target:5_line) and a [point _P_](target:5_point) not on _L_,
there is exactly [one line](target:5_parallel) which goes through _P_ and never
meets _L_.
:::

Each of these axioms looks obvious and trivial, but XXXX

::: note
The fifth axiom, also called the Parallel Postulate, is a slightly different
but equivalent version of the original postulate that appears in Euclids books.
:::

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
