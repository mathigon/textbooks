# Euclidean Geometry

> stage: intermediate
> description: xxxxx

---

## Introduction

Mathematics has been studied for many thousands of years – to predict the
seasons, calculate taxes, or estimate the size of farming land. But ancient
Greek mathematicians were the first to study mathematics just for its own sake,
without a specific application. They were amazed by mathematical patterns, and
wanted to explore and explain them.

Thales of Miletus was one of these mathematicians. He noticed that if you draw
a semicircle, and pick any point on the [circumference](gloss:circumference),
the triangle formed of the three points is always
[right-angled](gloss:right-angled-triangle). You can move the different point
around and check that it always works:

{.todo} Interactive diagram

A pretty amazing result – why should circles and right-angled triangles be
related in any way? In fact, Thales was so amazed that he offered an ox as
sacrifice, to thank the Gods for his discovery.

However, simply _observing_ a relationship like this was not enough. Greek
scientists and mathematicians realised 

Find a logical argument that explains why this is _always_ true, not just
in the cases we've checked. (An argument like this is called a __proof__.)

They also realised that to come up with a proof, you need some sort of starting
point: simple, intuitive statements that can be used to prove all others.
(These statements are called __axioms__.)

Euclid of Alexandria published five axioms:

* You can join any two points using exactly one straight line.
* You can extend any line segment to an infinite line.
* Given a point P and a distance r, you can draw a circle with centre P and radius r.
* Any two right angles are congruent.
* Given a line L and a point P not on L, there is exactly one (parallel) line which goes through P and never meets L.

Each of these axioms looks obvious and trivial, but they form the foundation of
all of Geometry!

---

## Geometric Definitions

We need a few simple definitions to make it easier to talk about geometric
concepts and relationships.

::: .row
  ::: .grow
    A __point__ is a specific location in space. Points describe a position, but
    have no _size_ in itself. They are labelled using capital letters.

  ::: .grow
    A __line__ ZZZZ. The line from point `A` to point `B` is labelled `bar("AB")`.

  ::: .grow
    A __line segment__ 



A line is a set of infinitely many points that extend forever in both directions.
A line, like a point, does not take up space. It has direction, location and is
always straight. Lines are one-dimensional because they only have length (no
width). A line can by named or identified using any two points on that line or
with a lower-case, italicized letter.

This line can be labeled `vec(PQ)`, `vec(QP)` or just g. You would say “line PQ,”
“line QP,” or “line g,” respectively. Notice that the line over the PQ and QP
has arrows over both the P and Q. The order of P and Q does not matter.

We can use point, line, and plane to define new terms. Space is the set of all
points extending in three dimensions. Think back to the plane. It extended along
two different lines: up and down, and side to side. If we add a third direction,
we have something that looks like three-dimensional space, or the real-world.

Points that lie on the same line are collinear. P,Q,R,S, and T are collinear
because they are all on line w. If a point U were located above or below line w,
it would be non-collinear.

An endpoint is a point at the end of a line segment. Line segments are labeled
by their endpoints, `bar(AB)` or `bar(BA)`. Notice that the bar over the
endpoints has NO arrows. Order does not matter.

A ray is a part of a line with one endpoint that extends forever in the
direction opposite that endpoint. A ray is labeled by its endpoint and one other
point on the line. When labeling rays, always write the endpoint under the side
WITHOUT the arrow, as in `vec(CD)` or `vec(DC)`,since that letter represents the
end of the ray and the arrow indicates the direction that the ray continues.

An intersection is a point or set of points where lines, planes, segments, or
rays cross each other.

---

## Postulates

With these new definitions, we can make statements and generalizations about
these geometric figures. This section introduces a few basic postulates.
Throughout this course we will be introducing Postulates and Theorems so it is
important that you understand what they are and how they differ.

Postulates are basic rules of geometry. We can assume that all postulates are
true, much like a definition. Theorems are statements that can be proven true
using postulates, definitions, and other theorems that have already been proven.

The only difference between a theorem and postulate is that a postulate is
assumed true because it cannot be shown to be false, whereas a theorem must be
proven true. Proving theorems is the topic of another Concept.

* Postulate #1: Given any two distinct points, there is exactly one (straight)
  line containing those two points.
* Postulate #4: If two distinct lines intersect, the intersection will be one point.

When making geometric drawings, be sure to be clear and label all points and lines.

---

## Conjectures and Counterexamples

A conjecture is an “educated guess” that is based on examples in a pattern.
Numerous examples may make you believe a conjecture. However, no number of
examples can actually prove a conjecture. It is always possible that the next
example would show that the conjecture is false. A counterexample is an example
that disproves a conjecture.

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

## Parallel and Perpendicular

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

## Ruler and compass construction

{.todo} TODO

---

## Geometry software

{.todo} TODO

---

## Origami and paper folding

{.todo} TODO
