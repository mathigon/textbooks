# Euclidean Geometry

> stage: intermediate
> description: Geometry is one of the oldest parts of mathematics – and one of
>   the most useful.

---
> id: thales

## Introduction

Mathematics has been studied for many thousands of years – to predict the
seasons, calculate taxes, or estimate the size of farming land.

    figure
      x-media(src="images/rhind.jpg", width="660", height="110", credit="© British Museum")
      p.caption The Rhind Papyrus found in Thebes (Egypt) is one of the oldest examples of mathematical work.

Ancient Greek mathematicians were the first to study mathematics just for its
own sake, without a specific application in mind. They were amazed by
mathematical patterns, and wanted to explore and explain them. One of them was
[Thales of Miletus](bio:thales) who made a surprising discovery when playing
around with geometric shapes:

::: column(width=440)

    x-geopad.sticky(style="width:440px; height: 320px;"): svg

::: column.grow
Start by picking two points anywhere in the box on the left.

{.reveal(when="p1 p2")} Let's draw a semicircle around your points.

{.reveal(when="p1 p2")} Pick another point that lies anywhere on the
[circumference](target:circumf) of the semicircle.

{.reveal(when="p3")} Now let's draw the triangle that connects the
endpoints of the diameter of the semicircle, as well as the point you picked on
the circumference.

{.reveal(when="p3")} Finally, look at the [angle](target:angle) at the
top of the triangle. No matter which points you picked, it always seems to be
[[90]]°. _{span.reveal(when="blank-0")} This means that the triangle
is [[right-angled|equilateral|acute]]._
:::

---

For Thales, this was a pretty spectacular result – why should circles and
right-angled triangles, two completely different shapes, be linked in this
fundamental way? In fact, he was so awed by his discovery that – according to
legend – he sacrificed an ox to thank the gods.

    figure
      x-media(src="images/temple.svg" width=400 height=170 credit="© Depositphotos")

However, simply _observing_ a relationship like this was not enough for Thales.
he wanted to explain _why_ it was true, and to verify that it is _always_ true
– not just in the specific examples he happened to try.

An argument that verified a statement like "" is called a __proof__. And once 

The notion of proof marked a significant change in the history of mathematics.
Rather than just XXXXXX

    figure: img(src="images/divider-1.svg" width=760 height=42)

---

### Definitions

Before we can write any proofs, we need some common terminology, or
_definitions_, that will make it easier to talk about geometric objects. These
are not particularly exciting, but you should already know most of them:

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      circle.move(cx=100 cy=30 r=8 target="move")
      circle.move(cx=150 cy=100 r=8 target="move")
      circle(cx=200 cy=50 r=4 target="move")

::: column.grow
A __point__ is a specific location in space. Points describe a position, but
have no _size_ in itself. They are labelled using capital letters.

In Mathigon, large solid dots indicate interactive points you can move around,
while smaller, outlined dots indicate fixed points.
:::

---

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

### Congruence

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

::: column.grow
The two shapes on the right basically look equal. They have the same size and
shape, and we could [turn and slide](action:move) one of them to exactly match
up with the other. In geometry, we say that the two shapes are
[__congruent__](gloss:congruent).

The symbol for congruence is ≅, so we would say that `A ≅ B`.
:::

Here are a few more geometric objects: connect the ones that are congruent.
(Note that sometimes more than two shapes can be congruent to each other.)

{.todo} interactive

Two line segments are congruent of they have the same length. Two angles are
congruent if they have the same size, in degrees. Note the that "congruent"
does not mean "equal": congruent lines and angles don't have to point in the
same direction.

Still, _congruence_ has many of the same properties of _equality_:

* Congruence is __symmetric__: if `X ≅ Y` then also `Y ≅ X`.
* Congruence is __reflexive__: any shape is congruent to itself. For example, `A ≅ A`.
* Congruence is __transitive__: if `X ≅ Y` and `Y ≅ Z` then also `X ≅ Z`.

---
> id: euclid

## Euclid's Postulates

::: column.grow
Greek mathematicians realised that to write formal proofs, you need some sort of
_starting point_: simple, intuitive XXXX that can be used to prove new ones.
These statements are called __postulates__ or __axioms__. 

Euclid himself presumed them to be so obvious as to be self-evident

[Euclid of Alexandria](bio:euclid) published the five axioms that form the
foundation of all of geometry in his book "Elements". Euclid is often called the
_father of geometry_, and his works were used as mathematics textbooks for
thousands of years, until the 20th century.

An axiom is a logical principle which is assumed to be true rather than proven, and which can be used as a premise in a deductive argument.

::: column(width=220)

    x-media(src="images/elements.jpg" width=220 height=330 lightbox)

:::

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path.red(x="segment(a,b)" target="1_line")
      circle.move(name="a" cx=30 cy=130 r=8 target="1_point")
      circle.move(name="b" cx=210 cy=30 r=8 target="1_point")

::: column.grow
### First Axiom
You can join any [two points](target:1_point) using exactly one straight
[line segment](target:1_line).
:::

---

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path.red(x="line(a,b)" target="2_line")
      path(x="segment(a,b)" target="2_line 2_segment")
      circle.move(name="a" cx=60 cy=100 r=8)
      circle.move(name="b" cx=180 cy=60 r=8)

::: column.grow
### Second Axiom
You can extend any [line segment](target:2_segment) to an
[infinite line](target:2_line).
:::

---

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path(x="segment(a,b)" target="3_radius")
      path.red(x="circle(a,distance(a,b))" target="3_circle")
      circle.move(name="a" cx=120 cy=80 r=8 target="3_center")
      circle.move(name="b" cx=170 cy=130 r=8)

::: column.grow
### Third Axiom
Given a [point _P_](target:3_center) and a [distance _r_](target:3_radius), you
can draw a [circle](target:3_circle) with centre _P_ and radius _r_.
:::

---

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg

::: column.grow
### Fourth Axiom
Any two right angles are congruent.
:::

---

::: column(width=240)

    x-geopad.sticky(style="width:240px; height: 160px;"): svg
      path.red(x="line(a,b).parallel(c)" target="5_parallel")
      path(x="line(a,b)" target="5_line")
      circle.move(name="a" cx=20 cy=80 r=8)
      circle.move(name="b" cx=120 cy=140 r=8)
      circle.move(name="c" cx=180 cy=60 r=8 target="5_point")

::: column.grow
### Fifth Axiom
Given a [line _L_](target:5_line) and a [point _P_](target:5_point) not on _L_,
there is exactly [one line](target:5_parallel) which goes through _P_ and never
meets _L_.
:::

Each of these axioms looks obvious and trivial, but XXXX

Newton famously wrote, "it's the glory of geometry that from so few principles it can accomplish so much."

Euclid's work is the earliest example we have of a systematic approach to geometry. When you make a general statement in geometry, such as Pythagoras' theorem, you should prove this statement by deriving it from statements you're convinced are self-evident, using the rules of logic.


The idea that you build up a complex framework starting with just a few, simple,
self-evident axioms, far expanded beyond just mathematics.

In fact, the American Declaration of Independence was inspired by Euclid

And here's one more example of Euclid's influence. The American Declaration of Independence is designed to inspire faith in its certainty by using the Euclidean form. Thomas Jefferson, who knew more of the mathematics of his time than any other American president, began his argument, "We hold these truths to be self-evident: that all men are created equal." There are also other self-evident truths in the document, he uses the word "prove", and the actual declaration that founded the United States is stated explicitly as the conclusion of a logical argument, beginning with a "therefore": "We, therefore ... declare, that these United Colonies are, and of right ought to be, free and independent states".

So in philosophy, theology, science, and politics, the idealised Euclidean model of reasoning has shaped conceptions of proof, truth, and certainty.

    // If a triangle has two congruent angles, the sides subtend those angles are also congruent.
    // Let ABC be a triangle having the angle ABC equal to the angle ACB;
    // I say the side AB is also equal to the side AC. For, if AB is unequal to AC, one of them is greater. Let AB be greater; and from AB the greater, let DB be cut off equal to AC the less; let DC be joined.
    // Then, since DB is equal to AC, and BC is common, the two sides DB, BC are equal to the two sides AC, CB respectively, and the angle DBC is equal to the angle ACB.
    // Therefore, the base DC is equal to the base AB, and the triangle DBC will be equal to the triangle ACB, the less to the greater, which is absurd. Therefore AB is not unequal to AC; it is therefore equal to it."

---

## Parallel and Perpendicular Lines

{.todo} Two or more lines are parallel when they lie in the same plane and never
intersect. The symbol for parallel is `||`. To mark lines parallel, draw arrows
(>) on each parallel line. If there are more than one pair of parallel lines,
use two arrows (>>) for the second pair. The two lines below would be labeled
AB←→ || MN←→− or l || m.

{.todo} For a line and a point not on the line, there is exactly one line parallel to
this line through the point. There are infinitely many lines that pass through
A, but only one is parallel to l.

{.todo} The Parallel Lines Property is a transitive property that can be applied to
parallel lines. It states that if lines l || m and m || n, then l || n.

{.todo} Railroad Tracks

{.todo} Two lines are perpendicular if they meet at a 90°, or right, angle. For a line
and a point not on the line, there is exactly one line perpendicular to the
line that passes through the point. There are infinitely many lines that pass
through A, but only one that is perpendicular to l. Recall that complementary
angles add up to 90∘. If complementary angles are adjacent, their nonadjacent
sides are perpendicular rays. What you learn about perpendicular lines can also
be applied to this situation.

---

## Geometric Construction

In classical geometric construction, your goal is to construct various shapes
and XXXX suing nothing but a __compass__ and a __straight-edge__.
RELATION TO AXIOMS

{.todo} A compass allows you 

{.todo} A Straight-edge is like a ruler without markings

These tools seem pretty primitive and useless, but actually allow you to
construct a great number of complex geometric shapes. Here is an example:

{.todo} construct equilateral triangle

---

### Midpoints and Perpendicular Bisectors

{.todo} A midpoint is a point on a line segment that divides it into two congruent
segments. If A,B, and C are collinear, and AB=BC, then B is the midpoint of
`bar(AC)`. Any line segment will have exactly one midpoint.

{.todo} A line, segment, or ray that passes through a midpoint of another segment is
called a __segment bisector__. A bisector cuts a line segment into two congruent
parts. A segment bisector is called a perpendicular bisector when the bisector
intersects the segment at a right angle.

{.todo} `bar(DE)` is the __perpendicular bisector__ of `bar(AC)`, so `bar(AB) ~= bar(BC)`
and `bar(AC) _|_ bar(DE)`.
For every line segment, there is one perpendicular bisector that passes through
the midpoint. There are infinitely many bisectors, but only one perpendicular
bisector for any segment.

{.todo} Constructing a Perpendicular Bisector
Draw a line that is at least 6 cm long, about halfway down your page. 
Place the pointer of the compass at an endpoint. Open the compass to be
greater than half of the segment. Make arc marks above and below the segment.
Repeat on the other endpoint. Make sure the arc marks intersect. 
Use your straight edge to draw a line connecting the arc intersections. 
This constructed line bisects the line you drew in #1 and intersects it at
90°. So, this construction also works to create a right angle.

{.todo} constructing a square

---

### Angle Bisectors

{.todo} When two rays have the same endpoint, an angle is created.

{.todo} Here, `vec(BA)` and `vec(BC)` meet to form an angle. An angle is labeled with an
“∠” symbol in front of the three letters used to label it. This angle can be
labeled `/_ABC` or `/_CBA`. Always put the vertex (the common endpoint of the
two rays) in the middle of the three points. It doesn’t matter which side point
is written first.

{.todo} An __angle bisector__ is a ray that divides an angle into two congruent angles,
each having a measure exactly half of the original angle. Every angle has
exactly one angle bisector.

{.todo} `bar(BD)` is the angle bisector of `/_ABC`
∠ABDm∠ABD≅∠DBC=12m∠ABC

{.todo} Constructing an Angle Bisector

{.todo} Draw an angle on your paper. Make sure one side is horizontal. 
Place the pointer on the vertex. Draw an arc that intersects both sides. 
Move the pointer to the arc intersection with the horizontal side. Make a
second arc mark on the interior of the angle. Repeat on the other side. Make
sure they intersect. 
Connect the arc intersections from #3 with the vertex of the angle.

{.todo} Angle Bisector Theorem: If a point is on the bisector of an angle, then the
point is equidistant from the sides of the angle.
In other words, if BD←→ bisects ∠ABC,BE−→−⊥ED, and BF−→−⊥DF, then ED=DF.

---

### Perpendicular Lines

{.todo} Perpendicular Line Construction; through a Point NOT on the Line
Draw a horizontal line and a point above that line. Label the line l and the point A.
* Take the compass and put the pointer on A. Open the compass so that it reaches beyond line l. Draw an arc that intersects the line twice.
* Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc below the line. Repeat this on the other side so that the two arc marks intersect.
* Take your straightedge and draw a line from point A to the arc intersections below the line. This line is perpendicular to l and passes through A.

{.todo} Perpendicular Line Construction; through a Point on the Line
Draw a horizontal line and a point on that line.
Label the line l and the point A.
* Take the compass and put the pointer on A. Open the compass so that it reaches out horizontally along the line. Draw two arcs that intersect the line on either side of the point.
* Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc above or below the line. Repeat this on the other side so that the two arc marks intersect.
* Take your straightedge and draw a line from point A to the arc intersections above the line. This line is perpendicular to l and passes through A.

{.todo} Theorem #1: If two lines are parallel and a third line is perpendicular to one of the parallel lines, it is also perpendicular to the other parallel line. Or, if l || m and l⊥n, then n⊥m.

{.todo} Theorem #2: If two lines are perpendicular to the same line, they are parallel to each other.

{.todo} Distance Between Parallel Lines 
The shortest distance between two parallel lines is the length of the perpendicular segment between them. It doesn’t matter which perpendicular line you choose, as long as the two points are on the lines. Recall that there are infinitely many perpendicular lines between two parallel lines.

{.todo} Notice that all of the pink segments are the same length. So, when picking a perpendicular segment, be sure to pick one with endpoints that are integers.

---

### Impossible Constructions

In the following chapters we will see even more shapes that can be constructed
using like this. However, it turns out that there is a limit to Euclidean
geometry: some constructions that are impossible using just Euclid's Axioms.

According to legend, the city of Delos was once faced with a terrible plague.
The oracle in Delphi told them that this was a punishment from the gods, and the
plague would fo away if they build a new altar for their temple that was
_exactly twice_ the volume of their existing altar.

Unfortunately, _doubling the cube_ is one of these constructions that are impossible
in Euclidean geometry. Of course, we can use calculators to find the width of
the new compass, but it is impossible using just straight edge and compass which
were available to the ancient Greeks.

There are three other impossible constructions

{.todo} TODO

---
> class: fill dark

## Origami and Paper Folding

Ruler and compass are not the only tools we can use to construct geometric
shapes. Another technique uses no tools at all: __Origami__.

The word _Origami_ (折り紙) comes from the Japanese words _oru_ (which means to
fold) and _kami_ (which means paper). The goal is to create objects out of one
or more sheets of paper, without any additional tools like glue or scissors. 

But you can still create incredibly beautiful and impressive designs – all of
these figures were built using nothing but rectangular sheets of paper:

::: column(width=186)
    x-media(src="images/origami/origami1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)
:::

---
> class: fill dark

Building shapes like this can take a lot of time, and it is important to be
extremely accurate. But with a bit of practice, you can do it yourself!

{.todo} ORIGAMI INSTRUCTIONS

We have many more [Origami models and instructions](/origami) on Mathigon, if
you want to try more.

---
> class: fill dark

Just like drawing with ruler and compass, we have a few different axioms of
different _folds_ that are possible with origami. They were discovered in 1992,
by the Italian-Japanese mathematician Humiaki Huzita.

::: column(width=220)
{.todo} IMAGE

{.text-center} You can fold a line connecting any two points.

::: column(width=220)
{.todo} IMAGE

{.text-center} You can fold any point _P_ onto any other point _Q_. This creates
the [[perpendicular bisector|angle bisector|midpoint]] of the line `vec(PQ)`.

::: column(width=220)
{.todo} IMAGE

{.text-center} We can fold any two lines onto each other. If the lines
intersect, this creates [[the angle bisector|perpendicular bisector|midpoint]]
of the angle between the two lines.

::: column(width=220)
{.todo} IMAGE

{.text-center} Given a point _P_ and a line _L_, we can make a fold
perpendicular to _L_ passing through _P_.

::: column(width=220)
{.todo} IMAGE

{.text-center} Given two points _P_ and _Q_ and a line _L_, we can make a fold 
that passes through _P_ and places _Q_ onto _L_.

::: column(width=220)
{.todo} IMAGE

{.text-center} Given any two points _P_ and _Q_ and any two lines _K_ and _L_,
we can make a fold that places point _P_ onto line _K_ and at the same time
places point _Q_ onto line _L_.

::: column(width=220)
{.todo} IMAGE

{.text-center} Given a point _P_ and two lines _K_ and _L_, we can fold a line
perpendicular to _K_ that places _P_ onto _L_.
:::

It turns out that these axioms are even more powerful than the Euclidean ones.
It is possible to trisect angles and double cubes using just paper folding!
Of course, it is impossible to fold any _curved_ lines, and you still can't
square the circle with origami.

---
> class: fill dark

Origami is an ancient art – and for the longest time, it was mostly a
recreational pursuit, without useful applications. But it turns out that
techniques developed for Origami can be incredibly useful in technology and
engineering:

::: column(width=300)
{.todo} image
::: column.grow
### Origami in Space

One of the most spectacular Origami folds is the __Miura Map Fold__, which
allows a large ‘map’ to be opened and closed in one single motion.

It was invented by _Korio Miura_, to simplify the folding and unfolding of the
solar panels of satellites. With fewer motors and mechanical components, it
can makes satellites smaller, lighter, and cheaper.
:::

::: column(width=300)
{.todo} image
::: column.grow
### Foldable Bridges

The British and American military used Origami to develop foldable, mobile
bridges. These were important for quickly crossing rivers or anti tank ditches,
and could be deployed much faster than previous design.

They can also be used for disaster relief, to quickly give emergency vehicles
access after earthquakes or tsunamis.
:::

::: column(width=300)
{.todo} image
::: column.grow
### Stadium Roofs

Bridges are difficult to construct because they have to span large distances
without intermediate support. This also is the case for the roofs of stadium,
which have to cover a large area without being supported by pillars.

The roof of the new Falcons Stadium in Atlanta consists of eight enormous
modules that can twist to open or close.
:::

::: column(width=300)
{.todo} image
::: column.grow
### Origami in Medicine

Let's move from the very large to the very small: In 2003, researchers developed
_Origami Stents_, tiny tubes that can be inserted into blood vessels. They are
initially folded up, but can expand inside patients' blood in oder to enlarge
clogged arteries or veins.
:::

    // Before an airbag inflates during a crash, it is folded tightly into a
    // compartment within the steering wheel or dashboard. Engineers designing
    // airbags start by modelling the inflation process on computers. In order
    // to do this, they need an algorithm by which to "fold" the fully inflated
    // airbag. This can be modelled using Origami

And there are even more applications that are still being researched: from
houses that – like Origami – will compress rather than crumble during an
earthquake, to telescope mirrors that can unfold in space, self-assembling
robots, and more efficient packaging.

---

## Applications of Geometry

It is obvious that geometry is an extremely useful area of mathematics: measuring,
architecture, navigation
