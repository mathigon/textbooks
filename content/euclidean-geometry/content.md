# Euclidean Geometry

## Introduction

> id: thales
> goals: p1 p2 p3 move

::: column.grow
Mathematics has been studied for thousands of years – to predict the seasons,
calculate taxes, or estimate the size of farming land.

Mathematicians in ancient Greece, around 500 BC, were amazed by mathematical
patterns, and wanted to explore and explain them. For the first time, they began
to study mathematics just “for fun”, without a specific application in mind. 
::: column(width=300)

    x-media(src="images/tablet.jpg" width=300 height=210)

{.caption} A Babylonian clay tablet, dated 1800 BC, that contains geometric
calculations.
:::

One of these mathematicians was [Thales of Miletus](bio:thales), who made a
surprising discovery when playing around with geometric shapes:

::: column(width=420)

    x-geopad.sticky(width=420 height=320): svg

::: column.grow
Start by picking two points anywhere in the box on the left.
_{span.reveal(when="p1 p2")} Let’s draw a semicircle around these points._

{.reveal(when="p1 p2")} Now pick a third point that lies somewhere on the
[circumference](target:circumf) of the semicircle.

{.reveal(when="p3")} Let’s draw the [triangle](target:triangle) formed by the
two corners of the semicircle, as well as the point you picked on the
circumference.

{.reveal(when="p3" delay=1000)} Try moving the position of the three points and
observe what happens to the [angle](target:angle) at the top of the triangle.
_{span.reveal(when="move")} It seems like it is always [[90]]°!_
_{span.reveal(when="blank-0")} This means that the triangle is
[[right-angled|equilateral|acute]]._
:::

---
> id: thales-1

For Thales, this was a pretty spectacular result. Why should _semicircles_ and
_right-angled triangles_, two completely different shapes, be linked in this
fundamental way? He was so awed by his discovery that, according to legend, he
sacrificed an entire ox to thank the gods.

    figure
      x-media(src="images/temple.svg" width=400 height=170)

However, simply _observing_ a relationship like this was not enough for Thales.
He wanted to understand _why_ it is true, and verify that it is _always_ true
– not just in the few examples he tried.

An argument that logically explains, beyond and doubt, why something must be
true, is called a __proof__. In the following courses you will learn a number of
geometric techniques, that will eventually allow us to prove _Thales’ theorem_.

---
> id: points
> sectionId: definitions

## Geometric Definitions

Before we can write any proofs, we need some common terminology that will make
it easier to talk about geometric objects. These are not particularly exciting,
but you should already know most of them:

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move.pulsate(cx=100 cy=30 target="move" label="P")
      circle.move.pulsate(cx=150 cy=100 target="move" label="Q")
      circle.move.pulsate(cx=40 cy=75 target="move")
      circle(x="point(200,50)" target="no-move")
      circle(x="point(70,120)" target="no-move" label="R")

::: column.grow
A [__point__](gloss:point) is a specific location in space. Points describe a
position, but have no _size_ or _shape_ themselves. They are labelled using
capital letters.

{.r} In Mathigon, [large, solid dots](target:move) indicate interactive points
you can move around, while [smaller, outlined dots](target:no-move) indicate
fixed points which you can’t move.
_{button.next-step} Continue_
:::

---
> id: lines

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.green(x="line(point(60,100),point(90,40))" label="a")
      path.red(x="line(point(50,120),point(150,150))" label="b")
      circle.move(name="P" cx=170 cy=55 label="P")
      circle.move(name="Q" cx=200 cy=130 label="Q")
      path.yellow(x="line(P,Q)")

::: column.grow
A [__line__](gloss:line) is a set of infinitely many points that extend forever
in both directions. Lines are always straight and, just like points, they don’t
take up any space – they have no _width_.

{.r} Lines are labeled using lower-case letters. We can also refer to them using
two points that lie on the line, for example
<span class="math"><mover><mi>PQ</mi><mo value="↔">↔</mo></mover></span> or
<span class="math"><mover><mi>QP</mi><mo value="↔">↔</mo></mover></span>. The
order of the points does not matter.
_{button.next-step} Continue_
:::

---
> id: segments

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=50 label="A")
      circle.move(name="b" cx=90 cy=120 label="B")
      path.red(x="segment(a,b)")
      circle.move(name="c" cx=120 cy=40 label="C")
      circle.move(name="d" cx=210 cy=110 label="D")
      path.blue(x="segment(c,d)")

::: column.grow
{.r} A [__line segment__](gloss:line-segment) is the part of a line between two
points, without extending to infinity. We can label them just like lines, but
without arrows on the bar above: `bar(AB)` or `bar(BA)`. Like, before the order
of the points does not matter.
_{button.next-step} Continue_
:::

---
> id: rays

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="c" cx=40 cy=120)
      circle.move(name="d" cx=60 cy=40)
      path.green(x="ray(c,d)")
      circle.move(name="a" cx=90 cy=90 label="A")
      circle.move(name="b" cx=190 cy=130 label="B")
      path.yellow(x="ray(a,b)")

::: column.grow
A [__ray__](gloss:ray) is something in between a _line_ and a _line segment_:
it only extends to infinity on one side. You can think of it like _sunrays_:
they start at a point (the sun) and then keep going forever.

{.r} When labelling rays, the arrow shows the direction where it extends to
infinity, for example `vec(AB)`. This time, the order of the points _does_ matter.
_{button.next-step} Continue_
:::

---
> id: circles

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=60)
      path(x="segment(a,a.add(point(1,1).normal.scale(40)))" target="radius")
      path.red(x="circle(a,40)")

      circle.move(name="b" cx=170 cy=90)
      path(x="segment(b,b.shift(60,0))" target="radius")
      path.blue(x="circle(b,60)")

::: column.grow
{.r} A [__circle__](gloss:circle) is the collection of points that all have the
same [distance](target:radius) from a point in the center. This distance is
called the [__radius__](gloss:radius).
_{button.next-step} Continue_
:::

---
> id: congruence
> goals: pair-a-a pair-b-b pair-c-c pair-d-d pair-e1-e2 pair-e1-e3 pair-e2-e3 pair-f-f

### Congruence

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.fill.green(name="x" x="polygon(point(30,30),point(80,20),point(100,80),point(70,110),point(30,90))" label="A" label-colour="white" target="move")
      path.fill.green.light(x="x.rotate(1).shift(190,10)" target="move")
      path.fill.green#congruent-path(x="x.rotate(1).shift(190,10)" target="move" label="B" label-colour="white")

::: column.grow
The two shapes on the right basically look identical. They have the same size
and shape, and we could [turn and slide](target:move) one of them to exactly
match up with the other. In geometry, we say that the two shapes are
[__congruent__](gloss:congruent).

The symbol for congruence is `≅`, so we would say that `A ≅ B`.
:::

Here are a few different geometric objects. Connect all the ones that are
congruent:

    svg.congruence(width=760 height=320 viewBox="0 0 760 320")
      g.lines
      g.obj(data-q="a" cx="145.2" cy="166.1")
    	polygon(points="119.6,146.6 131.7,186.9 170.9,175.1 139.7,159.5 154.4,145.2")
      g.obj(data-q="a" cx="376.4" cy="73.5")
    	polygon(points="388.1,44.7 353.1,68.2 376,102.2 381.7,67.8 399.7,77.6")
      g.obj(data-q="b" cx="93" cy="258")
    	rect(x="80" y="245" transform="matrix(0.5953 0.8035 -0.8035 0.5953 244.9541 29.6955)" width=26 height=26)
      g.obj(data-q="b" cx="264" cy="200")
        rect(x="251" y="187" transform="matrix(0.1863 0.9825 -0.9825 0.1863 411.3196 -96.636)" width=26 height=26)
      g.obj(data-q="c" cx="77" cy="59.5")
    	rect(x="54" y="36.5" transform="matrix(0.9159 0.4013 -0.4013 0.9159 30.3505 -25.8995)" width=46 height=46)
      g.obj(data-q="c" cx="238" cy="78")
        rect(x="215" y="55" transform="matrix(0.828 -0.5607 0.5607 0.828 -2.8011 146.8683)" width=46 height=46)
      g.obj(data-q="d" cx="510" cy="55")
    	polyline(points="539.9,68.9 489.7,78.3 506.7,27.5")
        path(d="M523.5,72c-2.4-12.7-11.4-22.4-22.9-26.3")
      g.obj(data-q="d" cx="501" cy="258")
    	polyline(points="497.8,287.8 475.2,242.1 528.7,244.7")
        path(d="M490.4,272.9c11.6-5.7,18.5-17.1,19.1-29.1")
      g.obj(data-q="e1" cx="417" cy="166.8")
        ellipse(transform="matrix(0.9464 -0.3229 0.3229 0.9464 -31.5073 143.6043)" cx="417" cy="166.8" rx="30.7" ry="17.1")
      g.obj(data-q="e2" cx="585" cy="138.2")
        ellipse(transform="matrix(0.4618 -0.887 0.887 0.4618 192.197 593.2707)" cx="585" cy="138.2" rx="17.1" ry="30.7")
      g.obj(data-q="e3" cx="618" cy="250.2")
        ellipse(transform="matrix(0.9089 -0.4171 0.4171 0.9089 -48.0564 280.5469)" cx="618" cy="250.2" rx="17.1" ry="30.7")
      g.obj(data-q="f" cx="670.8" cy="72.5")
        line(x1="649.4" y1="65.5" x2="692.1" y2="79.5")
        path(d="M647.6,72c-3.6-1.2-5.5-5-4.3-8.5s5-5.5,8.5-4.3c3.6,1.2,5.5,5,4.3,8.5C655,71.3,651.1,73.2,647.6,72z")
        path(d="M689.7,85.8c3.6,1.2,7.4-0.8,8.5-4.3s-0.8-7.4-4.3-8.5c-3.6-1.2-7.4,0.8-8.5,4.3C684.2,80.8,686.2,84.7,689.7,85.8z")
      g.obj(data-q="f" cx="705.1" cy="190.6")
        line(x1="693.9" y1="210.1" x2="716.4" y2="171.1")
        path(d="M699.9,213.2c-1.9,3.2-6,4.3-9.2,2.5c-3.2-1.9-4.3-6-2.5-9.2c1.9-3.2,6-4.3,9.2-2.5C700.7,205.8,701.8,209.9,699.9,213.2z")
        path(d="M722.1,174.8c1.9-3.2,0.8-7.4-2.5-9.2c-3.2-1.9-7.4-0.8-9.2,2.5c-1.9,3.2-0.8,7.4,2.5,9.2C716.1,179.1,720.2,178,722.1,174.8z")
      g.obj(data-q="g" cx="357" cy="265")
    	polyline(points="372.2,298.7 336,271.4 354.3,230.3")
    	path(d="M362.1,291.2c4.3-5.6,6.9-12.6,6.9-20.2c0-13.4-8-25-19.5-30.1")

---
> id: congruence-1

Two line segments are congruent if they [[have the same length|intersect]]. Two
angles are congruent if they [[have the same size|meet at a point]] (in degrees).

Note the that _“congruent”_ does not mean _“equal”_. For example, congruent
lines and angles don’t have to point in the same direction. Still, _congruence_
has many of the same properties of _equality_:

* Congruence is __symmetric__: if `X ≅ Y` then also `Y ≅ X`.
* Congruence is __reflexive__: any shape is congruent to itself. For example, `A ≅ A`.
* Congruence is __transitive__: if `X ≅ Y` and `Y ≅ Z` then also `X ≅ Z`.

---
> id: parallel

### Parallel and Perpendicular

::: column(width=240)

    x-geopad(width=240 height=200): svg
      path.red(x="line(point(30,100),point(70,20))" name="l1" mark="arrow" label="a")
      path.red(x="l1.shift(40,10)" mark="arrow" label="b")
      path.red(x="l1.shift(100,30)" mark="arrow" label="c")
      path.yellow(x="line(point(30,120),point(160,140))" name="l2" mark="arrow2" label="d")
      path.yellow(x="l2.shift(-30,40)" mark="arrow2" label="e")

::: column.grow
Two straight lines that never intersect are called [__parallel__](gloss:parallel).
They point into the same direction, and the distance between them is always
[[the same|increasing|decreasing]].

{.reveal(when="blank-0")} A good example of parallel lines in real life are
_railroad tracks_. But note that more than two lines can be parallel to each
other!

{.reveal(when="blank-0")} In diagrams, we denote parallel lines by adding one or
more small arrows. In this example, __{.m-red}`a ∥ b ∥ c`__ and
__{.m-yellow}`d ∥ e`__. The `∥` symbol simply means _“is parallel to”_.
:::

---
> id: perpendicular

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path(x="angle(point(100,110),point(50,100),point(60,50))")
      path.blue(x="line(point(50,100),point(100,110))" label="a")
      path.green(x="line(point(50,100),point(70,0))" label="b")

::: column.grow
The opposite of _parallel_ is two lines meeting at a 90° angle (right angle).
These lines are called [__perpendicular__](gloss:perpendicular).

{.r} In this example, we would write  _{.b.m-blue}a_ `_|_` _{.b.m-green}b_. The
`_|_` symbol simply means _“is perpendicular to”_.
_{button.next-step} Continue_

:::

---
> id: euclid

## Euclid’s Axioms

::: column.grow
Greek mathematicians realised that to write formal proofs, you need some sort of
_starting point_: simple, intuitive statements, that everyone agrees are true.
These are called [__axioms__](gloss:axiom) (or _postulates_).

A key part of mathematics is combining different axioms to prove more complex
results, using the rules of logic.

The Greek mathematician [Euclid of Alexandria](bio:euclid), who is often called
the _father of geometry_, published the five axioms of geometry:
::: column(width=220)

    img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euclid of Alexandria
:::

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path.red(x="segment(a,b)" target="1_line")
      circle.move(name="a" cx=30 cy=130 target="1_point")
      circle.move(name="b" cx=190 cy=30 target="1_point")

{.text-center }__First Axiom__  
You can join any [two points](target:1_point) using exactly one straight
[line segment](target:1_line).

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path.red(x="line(c,d)")
      path(x="segment(c,d)" target="2_segment")
      circle.move(name="c" cx=60 cy=100 target="2_segment")
      circle.move(name="d" cx=180 cy=60 target="2_segment")

{.text-center }__Second Axiom__  
You can extend any [line segment](target:2_segment) to an<br>
infinite line.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path(x="segment(e,f)" label="r" target="3_radius")
      path.red(x="circle(e,distance(e,f))" target="3_circle")
      circle.move(name="e" cx=120 cy=80 target="3_center" label="P")
      circle.move(name="f" cx=170 cy=130)

{.text-center }__Third Axiom__  
Given a [point _P_](target:3_center) and a [distance _r_](target:3_radius), you
can draw a [circle](target:3_circle) with centre _P_ and radius _r_.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="x" cx=50 cy=100)
      circle(hidden name="xa" x="x.translate(point(110,80).subtract(x).rotate(pi/4).normal.scale(50))")
      circle(hidden name="xb" x="x.translate(point(110,80).subtract(x).rotate(-pi/4).normal.scale(50))")
      path.fill.red(x="angle(xa,x,xb)")
      path.dark(x="segment(x,xa)")
      path.dark(x="segment(x,xb)")

      circle.move(name="y" cx=190 cy=60)
      circle(hidden name="ya" x="y.translate(point(110,80).subtract(y).rotate(pi/4).normal.scale(50))")
      circle(hidden name="yb" x="y.translate(point(110,80).subtract(y).rotate(-pi/4).normal.scale(50))")
      path.fill.red(x="angle(ya,y,yb)")
      path.dark(x="segment(y,ya)")
      path.dark(x="segment(y,yb)")

{.text-center }__Fourth Axiom__  
Any two right angles are congruent.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="g" cx=170 cy=60 target="5_point" label="P")
      path.red(x="line5.parallel(g)" target="5_parallel")
      path(name="line5" x="line(point(40,80),point(120,140))" target="5_line" label="L")

{.text-center }__Fifth Axiom__  
Given a [line _L_](target:5_line) and a [point _P_](target:5_point) not on _L_,
there is exactly [one line](target:5_parallel) through _P_ that is
[parallel](gloss:parallel) to _L_.
:::

---
> id: jefferson

::: column.grow
Each of these axioms looks pretty obvious and self-evident, but together they
form the foundation of geometry, and can be used to deduce almost everything
else. According to none less than [Isaac Newton](bio:newton), _“it’s the glory
of geometry that from so few principles it can accomplish so much”_.

Euclid published the five axioms in a book _“Elements”_. It is the first example
in history of a systematic approach to mathematics, and was used as mathematics
textbook for thousands of years.

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
> id: measuring

## Geometric Construction

You might have noticed that Euclid’s five axioms don’t contain anything about
_measuring_ distances or angles. Up to now, this has been a key part of
geometry, for example to calculate areas and volumes.

::: column.grow
However, at the times of Thales or Euclid, there wasn’t a universal framework of
units like we have today. Distances were often measured using body parts, for
example finger widths, or arm lengths. These are not very accurate and they vary
for different people.

To measure longer distances, architects or surveyors used _knotted cords_: long
pieces of string that contained many knots at equal intervals. But these were
also not perfectly accurate, and different string had the knots placed at
slightly different distances.

    figure: x-media(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-media(src="images/units.png" width=200 height=336)

:::

Greek mathematicians didn’t want to deal with these approximations. They were
much more interested in the underlying laws of geometry, than in their practical
applications.

That’s why they came up with a much more idealised version of our universe: one
in which points can have no size and lines can have no width. Of course, it is
[[impossible|very difficult]] to draw these on paper. Visible points will always
take up some space, and lines will always have some width. This is why our
drawings are always just “approximations”.

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

Euclid’ axioms basically tell us _what’s possible_ in his version of geometry.
It turns out that we just need two very simple tools to be able to sketch this
on paper:

::: column(width=320)

    x-geopad(width=300 height=240 style="position: relative;")
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" style="display: none")
      .play-btn

{.text-center} A __straight-edge__ is like a ruler but without any markings. You
can use it to connect two points (as in Axiom 1), or to extend a line segment
(as in Axiom 2).

::: column.reveal(width=300 when="play-l1")

    x-geopad(width=300 height=240 style="position: relative;")
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" style="display: none")
      .play-btn

{.text-center} A __compass__ allows you to draw a circle of a given size around
a point (as in Axiom 3).
:::

---
> id: construction

Axioms 4 and 5 are about comparing properties of shapes, rather than drawing
anything. Therefore they don’t need specific tools.

::: column.grow
You can imagine that Greek mathematicians were thinking about Geometry on the
beach, and drawing different shapes in the sand: using long planks as
straight-edge and pieces of string as compass.

Even though these tools look very primitive, you can draw a great number of
shapes with them. This became almost like a puzzle game for mathematicians:
tying to find ways to “construct” different geometric shapes using just a
straight-edge and compass.

::: column(width=340)

    x-media(src="images/archimedes.jpg" width=340 height=265)

{.caption} The Greek Mathematician [Archimedes](bio:archimedes) was studying
Geometry when he was killed by Roman invaders. His last words were “do not
disturb my circles”.
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersect=true): svg

::: column.grow
{.task} Draw an [equilateral triangle](gloss:equilateral-triangle) using just a
straight-edge and compass.

To begin, draw a line segment anywhere in a box on the right. With the
<x-target no-margins to="#equilateral .tool:nth-child(3)">line tool</x-target>
selected, simply drag from start to end. This segment will be one of the sides
of the triangle.

{.reveal(when="segment0")} Next, draw two circles that have one of the endpoints
of the line segments as center, and go through the other endpoint. With
the <x-target no-margins to="#equilateral .tool:nth-child(5)">circle tool</x-target> selected,
simply drag from one endpoint to the other.

{.reveal(when="circle1 circle2")} We already have two vertices of the triangle,
and the third one is the intersection of the two circles. Use the line tool
again to draw the two missing sides and complete the triangle.

{.reveal(when="segment1 segment2")} Now [these two sides](target:a) and
[these two sides](target:b) are each [[radii|diameters|circumferences]] of the
same circle, _{span.reveal(when="blank-0")} so they must have the same length.
In other words, all three sides of the triangle are congruent – and therefore it
is indeed an equilateral triangle._
:::

---
> id: perp-bisector

### Midpoints and Perpendicular Bisectors

{.todo} COMING SOON – Constructing Midpoints and Perpendicular Bisectors

    // A midpoint is a point on a line segment that divides it into two congruent
    // segments. If A,B, and C are collinear, and AB=BC, then B is the midpoint of
    // `bar(AC)`.
    // 
    // A line, segment, or ray that passes through a midpoint of another segment 
    // at a right angle is called a __perpendicular bisector__. `bar(DE)` is the
    // perpendicular bisector of `bar(AC)`, so `bar(AB) ~= bar(BC)` and `bar(AC) _|_ bar(DE)`.

---
> id: angle-bisector

### Angle Bisectors

{.todo} COMING SOON – Constructing Angle Bisectors

    // When two rays have the same endpoint, an angle is created.
    // 
    // Here, `vec(BA)` and `vec(BC)` meet to form an angle. An angle is labeled with an
    // “∠” symbol in front of the three letters used to label it. This angle can be
    // labeled `/_ABC` or `/_CBA`. Always put the vertex (the common endpoint of the
    // two rays) in the middle of the three points. It doesn’t matter which side point
    // is written first.
    // 
    // An __angle bisector__ is a ray that divides an angle into two congruent angles,
    // each having a measure exactly half of the original angle. Every angle has
    // exactly one angle bisector.
    // 
    // Angle Bisector Theorem: If a point is on the bisector of an angle, then the
    // point is equidistant from the sides of the angle.
    // In other words, if BD←→ bisects ∠ABC,BE−→−⊥ED, and BF−→−⊥DF, then ED=DF.

---
> id: parallel-perp

### Parallel and Perpendicular Lines

{.todo} COMING SOON – Constructing Parallel and Perpendicular Lines

{.todo} COMING SOON – Constructing a Square

    // Perpendicular Line Construction; through a Point NOT on the Line
    // Draw a horizontal line and a point above that line. Label the line l and the point A.
    // 
    // * Take the compass and put the pointer on A. Open the compass so that it reaches beyond line l. Draw an arc that intersects the line twice.
    // * Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc below the line. Repeat this on the other side so that the two arc marks intersect.
    // * Take your straightedge and draw a line from point A to the arc intersections below the line. This line is perpendicular to l and passes through A.
    // 
    // Theorem #1: If two lines are parallel and a third line is perpendicular to one of the parallel lines, it is also perpendicular to the other parallel line. Or, if l || m and l⊥n, then n⊥m.
    // 
    // Theorem #2: If two lines are perpendicular to the same line, they are parallel to each other.
    // 
    // Distance Between Parallel Lines 
    // The shortest distance between two parallel lines is the length of the perpendicular segment between them. It doesn’t matter which perpendicular line you choose, as long as the two points are on the lines. Recall that there are infinitely many perpendicular lines between two parallel lines.

---
> id: impossible

### Impossible Constructions

In the following courses, we will see even more shapes that can be constructed
like this. However, there is a limit to Euclidean geometry: some constructions
are simply impossible using just straight-edge and compass.

::: column.grow
According to legend, the city of Delos in ancient Greece was once faced with a
terrible plague. The oracle in Delphi told them that this was a punishment from
the gods, and the plague would go away if they built a new altar for their
temple that was _exactly twice_ the volume of the existing one.

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-media(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)
    
{.caption} A reconstruction of a temple in Delphi
:::

Note that _doubling the volume_ is not the same as _doubling the side of the
cube_. In fact, if the [[3-dimensional|2-dimensional|1-dimensional]] volume
increases by a factor of 2, the [[1-dimensional|3-dimensional|2-dimensional]]
side of the cube will increase by a factor of `root(3)(2)`.

---
> id: impossible-1

This still sounds pretty simple, but doubling the cube is actually impossible
in [Euclidean geometry](gloss:euclidean-geometry)! For the citizens of Delos
this unfortunately meant that all hope was lost. There are two other
constructions that are famously impossible. Mathematicians spent great amounts
of time trying to find a solution – but without success:

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} Trisecting the angle__  
We already know how to bisect angles. However it is impossible to similarly
split an angle into _three_ equal parts.

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} Doubling the cube__  
Given the edge of a cube, it is impossible to construct the edge of another cube
that has exactly twice the volume.

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} Squaring the circle__  
Given a circle, it is impossible to construct a square that has exactly the same
area.
:::

Note that these problems can all be solved quite easily with algebra, or using
marked rulers and protractors. But they are impossible if you are just allowed to
use straight-edge and compass.

---
> id: origami
> sectionBackground: dark

## Origami and Paper Folding

Using straight-edge and compass is not the only way to construct geometric
shapes. Another technique uses no tools at all: __Origami__.

The word _Origami_ (折り紙) comes from the Japanese _oru_ (to fold) and _kami_
(paper). The goal is to make objects out of one or more sheets of paper,
without any additional tools like glue or scissors. You can create incredibly
beautiful and impressive designs – all of these figures were built using nothing
but rectangular sheets of paper:

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
> id: crane
> goals: video

Building shapes like this can take a lot of time, and it is important to be
extremely accurate. But with a bit of practice, you can do it yourself!

::: column(width=360)

    x-video(src="https://storage.googleapis.com/mathigon-videos/crane.mp4" poster="images/crane.jpg" width=400 height=400 controls)

::: column.grow
{.step.active(data-t=0)} You just need a quadratic sheet of paper. To start,
fold the sheet along its two diagonals.

{.step(data-t=16)} Next, fold it along its horizontal and vertical centers – but
in the opposite direction.

{.step(data-t=38)} Now take two opposite corners of the sheet and bring them
together as shown. This forms a smaller square which is open at the bottom.

{.step(data-t=51)} Fold the left and right corners of the square towards its
center line. Then turn it over and repeat the same.

{.step(data-t=83)} Now fold the top triangle down, along the horizontal line,
and then open up the folds from the last two steps.

{.step(data-t=99)} This one is difficult: take the bottom corner of the paper
and fold it all the way up, along the horizontal line you just created. Some of
the folds you made before will be inverted. Then turn over and repeat.

{.step(data-t=135)} Make sure the two “legs” are pointing down. Then take the
left and right corner and fold them towards the center line. Turn over and
repeat.

{.step(data-t=172)} You’re almost done! Slightly open the right side, and fold
the head up towards the top. You will have to turn it inside out. Then repeat
the same with the tail on the left.

{.step(data-t=203)} Reverse the fold as shown to create a beak. You can decide
how long you want it to be by picking the location of the fold.

{.step(data-t=215)} Finally, fold down the two wings, and pull them apart.
:::

---
> id: origami-axioms

This _crane_ is one of the oldest and most famous Origami models. We have many
more [instructions](/origami) for Origami models, if you want to try!

    figure: x-media(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

Just like drawing with straight-edge and compass, there are a few axioms of
different _folds_ that are possible with origami. They were first listed in
1992, by the Italian-Japanese mathematician Humiaki Huzita.

::: column(width=220)

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center} You can fold a line connecting any two points.
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} You can fold any point _P_ onto any other point _Q_. This creates
the [[perpendicular bisector|angle bisector|midpoint]] of the line `bar(PQ)`.
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} We can fold any two lines onto each other. If the lines
intersect, this creates the [[angle bisector|perpendicular bisector|midpoint]]
of the angle between the two lines.
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} Given a point _P_ and a line _L_, we can make a fold
perpendicular to _L_ passing through _P_.
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} Given two points _P_ and _Q_ and a line _L_, we can make a fold 
that passes through _P_ and places _Q_ onto _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} Given any two points _P_ and _Q_ and any two lines _K_ and _L_,
we can make a fold that places point _P_ onto line _K_ and at the same time
places point _Q_ onto line _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} Given a point _P_ and two lines _K_ and _L_, we can fold a line
perpendicular to _K_ that places _P_ onto _L_.
:::

---
> id: origami-axioms-1

It turns out that these axioms are even more powerful than the Euclidean ones.
It is possible to trisect angles and double cubes using just paper folding!
Of course, it is impossible to fold any _curved_ lines, and you still can’t
square the circle with origami.

    figure: x-media(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

Origami is an ancient art, and for the longest time it was mostly a recreational
pursuit, without real life applications. However, it turns out that techniques
developed for Origami can be incredibly useful in technology and engineering:

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow
### Origami in Space

Satellites need large solar panels to generate power. Unfortunately, the rockets
that carry satellites into space only have very limited space for cargo, and
any additional weight costs a lot of fuel.

Origami techniques allow solar panels to “unfold” when they reach space. Some
particularly clever folds are incredibly compact and require very few motors
and other mechanical components.

    // One of these is the __Miura Map Fold__, which was invented by _Korio Miura_.
    // The same is also true for the mirrors of telescopes in space. Larger mirrors
    // can take better images. Engineers can use Origami to build large mirrors that
    // can be folded up very efficiently when loaded onto rockets.
:::

---
> id: origami-applications-1

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

---
> id: origami-applications-2
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/stadium.mp4" poster="images/stadium.jpg" width=300 height=225 credit="© Mercedes Benz Stadium")

::: column.grow
### Stadium Roofs

Bridges are difficult to construct because they have to span large distances
without intermediate support. This also is the case for the roofs of sports
stadiums, which have to cover a large area without being supported by pillars.

The roof of the new Falcons Stadium in Atlanta consists of eight enormous
modules that can twist to open or close.
:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow
### Origami in Medicine

Let’s move from the very large to the very small: In 2003, researchers developed
_Origami Stents_, tiny tubes that can be inserted into blood vessels. They are
initially folded up, but can expand inside patients’ blood in oder to enlarge
clogged arteries or veins.
:::

    // Before an airbag inflates during a crash, it is folded tightly into a
    // compartment within the steering wheel or dashboard. Engineers designing
    // airbags start by modelling the inflation process on computers. In order
    // to do this, they need an algorithm by which to "fold" the fully inflated
    // airbag. This can be modelled using Origami

And there are even more applications that are still being researched: from
houses that, like Origami, will compress rather than crumble during an
earthquake, to unfolding airbags in cars, self-assembling robots, and more
efficient packaging.

---
> id: applications

## Applications of Geometry

Geometry is everywhere around us – in nature, architecture, technology and
design. We need geometry for measuring distances, as well as constructing
skyscrapers or sending satellites into space.

::: column(width=200)

    x-media(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} Geometry allowed the ancient Egyptians to construct gigantic,
perfectly regular pyramids, that align to patterns in the stars.
::: column(width=200)

    x-media(src="images/sextant.jpg" width=200 height=200)

{.caption} Sailors use sextants to determine their location while at sea, using 
angles formed by the sun or stars.
::: column(width=200)

    x-media(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} Geometry is needed to create realistic video game or movie graphics.
::: column(width=200)

    x-media(src="images/plane.jpg" width=200 height=200)

{.caption} Geometry can help design and test new airplane models, making them
safer and more efficient.
::: column(width=200)

    x-media(src="images/cctv.jpg" lightbox width=200 height=200)

{.caption} Geometry was key when designing this skyscraper in Beijing – and to
make sure it won’t fall over.
::: column(width=200)

    x-media(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} Geometry allows us to predict the position of stars, planets and
satellites orbiting Earth.
:::

In the following courses, we will learn about tools and techniques in geometry
that were discovered by mathematicians over the course of many centuries. We
will also see how these techniques can be used to solve important problems in
the real world.
