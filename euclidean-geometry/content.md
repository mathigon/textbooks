# Euclidean Geometry

> stage: intermediate
> description: Geometry is one of the oldest parts of mathematics – and one of
>   the most useful.

---
> id: thales
> goals: p1 p2 p3

## Introduction

::: column.grow
Mathematics has been studied for many thousands of years – to predict the
seasons, calculate taxes, or estimate the size of farming land.

It wasn't until around 500 BC that mathematicians in ancient Greece started to
study mathematics just “for fun”, without a specific application in mind. They
were amazed by mathematical patterns, and wanted to explore and explain them.
::: column(width=300)

    x-media.shift-1(src="images/tablet.jpg" width=300 height=210)

{.caption} A Babylonian clay tablet, dated 1800 BC, that contains geometric
calculations.
:::

One of these mathematicians was [Thales of Miletus](bio:thales), who made a
surprising discovery when playing around with geometric shapes:

::: column(width=420)

    x-geopad.sticky(width=42 height=320): svg

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
[[90]]°. _{span.reveal(when="blank-0")} This means that the triangle is
[[right-angled|equilateral|acute]]._
:::

---

For Thales, this was a pretty spectacular result. Why should _semicircles_ and
_right-angled triangles_, two completely different shapes, be linked in this
fundamental way? In fact, he was so awed by his discovery that, according to
legend, he sacrificed an entire ox to thank the gods.

    figure
      x-media(src="images/temple.svg" width=400 height=170 credit="© Depositphotos")

However, simply _observing_ a relationship like this was not enough for Thales.
he wanted to explain _why_ it is true, and to verify that it is _always_ true
– not just in the specific examples he happened to try.

An argument that logically explains, beyond and doubt, why something must be
true, is called a __proof__. During the following chapters we will build up a
number of geometric techniques, that will allow us to prove _Thales' theorem_.

---
> class: no-border

    figure: img(src="images/divider-1.svg" width=760 height=42)

## Definitions

Before we can write any proofs, we need some common terminology that will make
it easier to talk about geometric objects. These are not particularly exciting,
but you should already know most of them:

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg
      circle.move(cx=100 cy=30 r=8 target="move")
      circle.move(cx=150 cy=100 r=8 target="move")
      circle.move(cx=40 cy=75 r=8 target="move")
      circle(cx=200 cy=50 r=4 target="no-move")
      circle(cx=70 cy=120 r=4 target="no-move")

::: column.grow
A __point__ is a specific location in space. Points describe a position, but
have no _size_ in itself. They are labelled using capital letters.

In Mathigon, [large, solid dots](target:move) indicate interactive points you
can move around, while [smaller, outlined dots](target:no-move) indicate fixed
points which you can't move.
:::

---

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg

::: column.grow
A __line__ is a set of infinitely many points that extend forever in both
directions. Like a point, lines don't take up any space – they have no _width_.
They have a location and a direction, and they are always straight.

Lines are labeled using lower-case letters. We can also refer to them using two
points that lie on the line, for example
<span class="math"><mover><mi>PQ</mi><mo value="↔">↔</mo></mover></span> or
<span class="math"><mover><mi>QP</mi><mo value="↔">↔</mo></mover></span>. The
order of the points does not matter.
:::

---

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg

::: column.grow
A __line segment__ is the part of a line between two points, without extending
to infinity. For example, the sides of a triangle are all line segments.

We can label them just like lines, but without arrows on the bar above:
`bar(AB)` or `bar(BA)`. Like, before the order of the points does not matter.
:::

---

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg

::: column.grow
A __ray__  is something in between a _line_ and a _line segment_: it only
extends to infinity on one side. You can think of it like _sunrays_: they start
at a point (the sun) and then keep going forever.

When labelling rays, the arrow shows the direction where it extends to infinity,
for example `vec(AB)`. Here, the order of points _does_ matter.
:::

---

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg

::: column.grow
A __circle__ is the collection of points that all have the same distance from a
point in the center. This distance is called the __radius__.
:::


### Congruence

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg

::: column.grow
The two shapes on the right basically look equal. They have the same size and
shape, and we could [turn and slide](target:move) one of them to exactly match
up with the other. In geometry, we say that the two shapes are
[__congruent__](gloss:congruent).

The symbol for congruence is `≅`, so we would say that `A ≅ B`.
:::

Here are a few different geometric objects. Connect the ones that are congruent,
but note that more than two shapes can be congruent to each other:

{.todo} interactive

---

Two line segments are congruent if they [[have the same length|intersect]]. Two
angles are congruent if they [[have the same size|meet at a point]], in degrees.

Note the that _“congruent”_ does not mean _“equal”_. For example, congruent
lines and angles don’t have to point in the same direction. Still, congruence
has many of the same properties of equality:

* Congruence is __symmetric__: if `X ≅ Y` then also `Y ≅ X`.
* Congruence is __reflexive__: any shape is congruent to itself. For example, `A ≅ A`.
* Congruence is __transitive__: if `X ≅ Y` and `Y ≅ Z` then also `X ≅ Z`.

---

### Parallel and Perpendicular

::: column(width=240)

    x-geopad.sticky(width=240 height=200): svg

::: column.grow
Two straight lines that never intersect are called [__parallel__](gloss:parallel).
They point into the same direction, and the distance between them will always
be the same. You can think of parallel lines as _railroad tracks_.

In diagrams, we denote parallel lines by adding one or more
[small arrows](target:line). In this example we would write `a ∥ b` and `c ∥ d`.
The `∥` symbol simply means _“is parallel to”_.

Note that more than two lines can be parallel to each other!
:::

---

::: column(width=240)

    x-geopad.sticky(width=240 height=160): svg

::: column.grow
The opposite of _parallel_ is two lines meeting at a 90° angle (right angle).
These lines are called __perpendicular__.

Note that when marking right angles in a diagram, we use [small squares](target:angle)
rather than curves. In this example, we would write `a _|_ b`. The `_|_` symbol
simply means _“is perpendicular to”_.
:::

---
> id: euclid
> class: no-border

    figure: img(src="images/divider-1.svg" width=760 height=42)

## Euclid’s Postulates

::: column.grow
Greek mathematicians realised that to write formal proofs, you need some sort of
_starting point_: simple, intuitive statements, that everyone agrees are true.
These are called __axioms__ (or _postulates_), and can then be used to prove
more complex results using the rules of logic.

The Greek mathematician [Euclid of Alexandria](bio:euclid), who is often called
the _father of geometry_, published the five axioms of geometry:
::: column(width=220)

    img.shift-2(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclid of Alexandria
:::

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path.red(x="segment(a,b)" target="1_line")
      circle.move(name="a" cx=30 cy=130 r=8 target="1_point")
      circle.move(name="b" cx=190 cy=30 r=8 target="1_point")

{.text-center }__First Axiom__  
You can join any [two points](target:1_point) using exactly one straight
[line segment](target:1_line).

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path.red(x="line(c,d)" target="2_line")
      path(x="segment(c,d)" target="2_line 2_segment")
      circle.move(name="c" cx=60 cy=100 r=8)
      circle.move(name="d" cx=180 cy=60 r=8)

{.text-center }__Second Axiom__  
You can extend any [line segment](target:2_segment) to an
[infinite line](target:2_line).

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path(x="segment(e,f)" target="3_radius")
      path.red(x="circle(e,distance(e,f))" target="3_circle")
      circle.move(name="e" cx=120 cy=80 r=8 target="3_center")
      circle.move(name="f" cx=170 cy=130 r=8)

{.text-center }__Third Axiom__  
Given a [point _P_](target:3_center) and a [distance _r_](target:3_radius), you
can draw a [circle](target:3_circle) with centre _P_ and radius _r_.

::: column(width=220)

    x-geopad(width=220 height=160): svg

{.text-center }__Fourth Axiom__  
Any two right angles are congruent.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path.red(x="line(g,h).parallel(i)" target="5_parallel")
      path(x="line(g,h)" target="5_line")
      circle.move(name="g" cx=20 cy=80 r=8)
      circle.move(name="h" cx=120 cy=140 r=8)
      circle.move(name="i" cx=180 cy=60 r=8 target="5_point")

{.text-center }__Fifth Axiom__  
Given a [line _L_](target:5_line) and a [point _P_](target:5_point) not on _L_,
there is exactly [one line](target:5_parallel) which goes through _P_ and never
meets _L_.
:::

---

::: column.grow
Each of these axioms looks pretty obvious and self-evident, but together they
form the foundation of geometry, and can be used to derive almost everything
else. According to none less than [Isaak Newton](bio:newton), _“it’s the glory
of geometry that from so few principles it can accomplish so much”_.

Euclid published the five axioms in a book _“Elements”_. It is the earliest
example in history of a systematic approach to mathematics, and was used as the
standard mathematics textbook for thousands of years, until the 20th century.

::: column(width=220)
    x-media(src="images/elements.jpg" width=220 height=330 lightbox)
:::

One of the people who studied Euclid’s work was the American President [Thomas
Jefferson](bio:jefferson). When writing the Declaration of Independence in 1776,
he wanted to follow a similar approach. He begins by stating a few, simple
“axioms” and then “proves” more complex results:

    .parchment “We hold these truths to be self-evident: that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.”

{.text-center.follows} `=>`

    .parchment We, therefore … declare, that these United Colonies are, and of right ought to be, free and independent states.”

This is just one example where Euclid’s ideas in mathematics have inspired
completely different subjects.

---
> class: no-border

    figure: img(src="images/divider-1.svg" width=760 height=42)

## Geometric Construction

Let’s get back to geometry … to apply Euclid’s five axioms on paper, you need
just two tools:

::: column.grow
{.todo} image

A __straight-edge__ is like a ruler but without any markings. You can use it to
connect two points (Axiom 1), or to extend a line segment (Axiom 2).
::: column.grow
{.todo} image

A __compass__ allows you to draw circles of a given size around points
(Axiom 4).
:::

In classical geometric construction, our goal is to construct various shapes
using nothing but compass and straight-edge. No rulers and protractors are
allowed to measure distances or angles.

{.todo} drawing in sand with no tools

Just like Euclid’s axioms, these tools might initially seem very primitive and
useless – but actually allow you to construct a great number of geometric
shapes. Here is an example:

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
Take the compass and put the pointer on A. Open the compass so that it reaches out horizontally along the line. Draw two arcs that intersect the line on either side of the point.
Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc above or below the line. Repeat this on the other side so that the two arc marks intersect.
Take your straightedge and draw a line from point A to the arc intersections above the line. This line is perpendicular to l and passes through A.

{.todo} Theorem #1: If two lines are parallel and a third line is perpendicular to one of the parallel lines, it is also perpendicular to the other parallel line. Or, if l || m and l⊥n, then n⊥m.

{.todo} Theorem #2: If two lines are perpendicular to the same line, they are parallel to each other.

{.todo} Distance Between Parallel Lines 
The shortest distance between two parallel lines is the length of the perpendicular segment between them. It doesn’t matter which perpendicular line you choose, as long as the two points are on the lines. Recall that there are infinitely many perpendicular lines between two parallel lines.

{.todo} Notice that all of the pink segments are the same length. So, when picking a perpendicular segment, be sure to pick one with endpoints that are integers.

---

### Impossible Constructions

In the following chapters we will see even more shapes that can be constructed
using like this. However, there is a limit to Euclidean geometry: some
constructions are simply impossible using just Euclid's Axioms.

::: column.grow
According to legend, the city of Delos was once faced with a terrible plague.
The oracle in Delphi told them that this was a punishment from the gods, and the
plague would fo away if they build a new altar for their temple that was
_exactly twice_ the volume of their existing altar.

{.todo} graphic
::: column(width=300)

    x-media(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)
    
{.caption} A reconstruction of a temple in Delphi
:::

While it sounds simple enough, _doubling the cube_ is one of the geometric
constructions that is impossible in Euclidean geometry. For the citizens of
Delos this meant that all hope was lost…

There are two other famously impossible construction problems. Mathematicians
spent great amounts of time trying to solve them – of course without any
success:

::: column(width=220)
{.todo} GRAPHIC

{.text-center} __Trisecting the angle__  
We already know how to bisect angles. However it is impossible to similarly
split an angle into _three_ equal parts.

::: column(width=220)
{.todo} GRAPHIC

{.text-center} __Doubling the cube__  
Given the edge of a cube, it is impossible to construct the edge of a cube that
is exactly twice the volume.

::: column(width=220)
{.todo} GRAPHIC

{.text-center} __Squaring the circle__  
Given a circle, it is impossible to construct a square that has exactly the same
area.
:::

Note that these problems can all be solved quite easily with algebra, and using
marked rules and protractors, but they are impossible if you are only allowed to
use straight-edge and compass.

---
> class: fill dark

## Origami and Paper Folding

Ruler and compass are not the only tools we can use to construct geometric
shapes. Another technique uses no tools at all: __Origami__.

The word _Origami_ (折り紙) comes from the Japanese _oru_ (to fold) and _kami_
(paper). The goal is to create objects out of one or more sheets of paper,
without any additional tools like glue or scissors. You can still create
incredibly beautiful and impressive designs – all of these figures were built
using nothing but rectangular sheets of paper:

::: column(width=186)
    x-media(src="images/origami/origami-1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)
:::

---
> class: fill dark

Building shapes like this can take a lot of time, and it is important to be
extremely accurate. But with a bit of practice, you can do it yourself!

{.todo} ORIGAMI INSTRUCTIONS

We have [models and instructions](/origami) for many other Origami models, if
you want to try more.

    figure: x-media(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

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
intersect, this creates the [[angle bisector|perpendicular bisector|midpoint]]
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

    figure: x-media(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> class: fill dark

Origami is an ancient art, and for the longest time it was mostly a recreational
pursuit, without real life applications. However, it turns out, that techniques
developed for Origami can be incredibly useful in technology and engineering:

::: column(width=300)
{.todo} image
::: column.grow
### Origami in Space

One of the most spectacular Origami folds is the __Miura Map Fold__, which
allows a large ‘map’ to be opened and closed in one single motion.

It was invented by _Korio Miura_, to simplify the folding and unfolding of the
solar panels of satellites. With fewer motors and mechanical components, it
can makes satellites smaller, lighter, and cheaper.

The same is true for the mirrors of telescopes deployed in space. Large mirrors
give better images, but are much harder to fit into a rocket. Instead, they can
unfold once in space.
:::

::: column(width=300)
    x-media(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")
::: column.grow
### Foldable Bridges

The British and American military used Origami to develop foldable, mobile
bridges. These were important for quickly crossing rivers or anti tank ditches,
and could be deployed much faster than previous design.

They can also be used for disaster relief, to quickly give emergency vehicles
access after earthquakes or tsunamis. This image is of a prototype designed at
Hiroshima University in Japan.
:::

::: column(width=300)
    x-media(src="images/stadium.mp4" width=300 height=225 credit="© Mercedes Benz Stadium")
::: column.grow
### Stadium Roofs

Bridges are difficult to construct because they have to span large distances
without intermediate support. This also is the case for the roofs of stadium,
which have to cover a large area without being supported by pillars.

The roof of the new Falcons Stadium in Atlanta consists of eight enormous
modules that can twist to open or close.
:::

::: column(width=300)
    x-media(src="images/stents.mp4" width=300 height=225 credit="© Virtual Point")
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
earthquake, to unfolding airbags in cars, self-assembling robots, and more
efficient packaging.

---

## Applications of Geometry

Geometry is around us, wherever we look. In nature, architecture, technology and
design. We need geometry for measuring distances, as well as constructing
skyscrapers or sending satellites into space.

::: column(width=200)
    x-media(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} Geometry allowed the ancient Egyptians to construct gigantic,
perfectly regular pyramids, that align to patterns in the stars.
::: column(width=200)
    x-media(src="images/sextant.jpg" credit="© Depositphotos / scorpp" width=200 height=200)

{.caption} Sailors use sextants to determine their location while at sea, using 
angles formed by the sun or stars.
::: column(width=200)
    x-media(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} Geometry is needed to create realistic video game or movie graphics.
::: column(width=200)
    x-media(src="images/plane.jpg" credit="© Depositphotos / nmcandre" width=200 height=200)

{.caption} Geometry can help design and test new airplane models, making them
safer and more efficient.
::: column(width=200)
    x-media(src="images/cctv.jpg" lightbox credit="© Depositphotos / junrong" width=200 height=200)

{.caption} Geometry was key when designing the Chinese TV building in Beijing –
and to make sure it won't fall over.
::: column(width=200)
    x-media(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} Geometry allows us to predict the position of stars, planets and
satellites orbiting Earth.
:::

In the next chapters, we will learn about tools and techniques in geometry, that
were discovered by mathematicians over the course of many centuries. And, of
course, we will see how these techniques can be used to solve important
problems in the real world.
