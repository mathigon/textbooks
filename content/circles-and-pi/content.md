# Circles and Pi

## Introduction

> section: introduction
> id: orbits

::: column.grow

For as long as human beings exist, we have looked to the sky and tried to
explain life on Earth using the motion of stars, planets and the moon. The
Greeks were the first to discover that all celestial objects move on regular
paths, called __orbits__.

Greek astronomers like Claudius Ptolemy believed that the orbits of stars and
planets are circular. 

::: column(width=320)

    x-media(src="images/geocentric.jpg" width=320 height=272)
    p.caption

:::

In some sense, circles are the most perfect of all shapes – they are symmetric
in every direction. This is why they seem like a good choice 

---
> id: radius

Every point on a circle has the same distance from its center, which is why they
can be drawn using a compass:

::: column(width=320)

{.todo} image

::: column.grow

There are three important measurements related to circles that you need to know:

* The __{.pill.red}radius__ is the distance from the center of a circle to its
  outer rim.
* The __{.pill.blue}diameter__ if the distance between two opposite points on
  a circle. It goes through its center, and its length is [[twice]] the radius.
* The __{.pill.green}circumference__ is the distance around a circle.

:::

---

{.todo} Proof that all circles are similar

You might remember that, for similar polygons, the ratios between corresponding
sides are always equal. The same is true for circles: the ratio between the
circumference and the diameter is equal for _all circles_: approximately 3.1415.
This number is called [__Pi__](gloss:pi), and often denoted by the Greek letter
_π_ for “p”.

---

{.todo} Circumference formula, uncurl animation (circle with radius 1)

---

{.todo} images

Circles and the number Pi can be found everywhere in nature.

It turns out that a circle is also the shape with the largest area for a given
circumference. For example, if you are given a fence of length 100m, you can
enclose the largest space if you form a circle (rather than, for example, a
rectangle or triangle). Similarly, objects in nature can _save energy_ by
becoming circular or spherical.

---
> id: area
> goals: slider-1 slider-2

### Area of Circles

But how do we actually calculate the area of a circle? Let's try using a similar
technique to what we did for other polygons before: cut the shape into multiple
different parts, and then rearrange them to form a shape that we already know
the area of (e.g. a rectangle or a triangle). Unfortunately, since a circle is
curved, we have to use some approximations.

::: column(width=340)

{.text-center} Here you can see a circle that was divided into ${toWord(n1)}
wedges.

    svg.circle-area.red(width=340 height=240)
    x-slider(steps=400)

{.text-center} Move the slider to line up the wedges in a row.

{.text-center.reveal(when="slider-1")} If we increase the number of wedges to
${n1}{n1|6|5,30,1}, this shape starts to look more and more like a
[[rectangle|circle|square]].

{.text-center.reveal(when="blank-0")} The base of the rectangle is `pi*r` and
its height is _r_. Therefore the area of the rectangle is `pi r^2`.

::: column(width=360)

{.text-center} Here you can see a circle that was divided into ${toWord(n2)}
rings.

    svg.circle-area.yellow(width=360 height=240)
    x-slider(steps=400)

{.text-center} Like before, you can move the slider to “uncurl” the rings.

{.text-center.reveal(when="slider-1")} If we increase the number of wedges to
${n2}{n2|4|2,10,1}, this shape starts to look more and more like a
[[triangle|rectangle|trapezium]].

{.text-center.reveal(when="blank-1")} The base of the rectangle is `2 pi r` and
its height is _r_. Therefore the total area of the triangle is `pi r^2`.

:::

---

If we could user infinitely many wedges or rings, the approximations above would
be perfect – and they both give use the same formula for the area of a circle:

{.text-center} `A = pi r^2`.

---
> id: approximations

### Calculating Pi

As you saw above, `π = 3.1415926…` is not a simple integer, and its decimal
digits go on forever, without any repeating pattern. Numbers with this property
are called [__irrational numbers__](gloss:irrational), and it means that `π`
cannot be expressed as a simple fraction `a/b`.

It also means that we can never write down _all_ the digits of Pi – after all,
there are infinitely many. Ancient Greek and Chinese mathematicians managed to
calculate the first four decimal digits of Pi, and [Isaac Newton](bio:newton)
calculated 15 digits of Pi in 1665.

Today, we can use powerful computers to calculate the value of Pi to a much
greater accuracy. The current record is 22 trillion digits. A printed book
containing all these digits would be over 400km thick – approximately the height
of the orbit of the International Space Station.

One approach for calculating Pi is using infinite sequences of numbers. Here is
one example which was discovered by [Gottfried Wilhelm Leibniz](bio:leibnitz) in
1676:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 + …`

As we calculate more and more terms of this series (always following the same
pattern), the result will get closer and closer to Pi.

---
> id: digits

Many mathematicians believe that Pi has an even more curious property: that it
is a __normal number__. This means that the digits from 0 to 9 appear completely
at random, as if nature had rolled a 10-sided dice infinitely many times.

If this is true, it means that you can think of any string of digits, and it
will appear somewhere in the decimal expansion of Pi. Here you can search the
first 1 million digits of Pi – does it contain your birthday?

    .box
      .box-title: h3 The Digits of Pi
      .box-body.pi-box
        p.digits 3.141592653589793238462643383279502884197169399375105…

---
> id: pi-day

We could even convert an entire book, like Harry Potter, into a very long string
of digits (a = 01, b = 02, and so on). If Pi in normal, this string must also
appear somewhere in its digits – but it would take millions of years to
calculate enough digits to find it.

{.todo} Pi day images

Pi is very easy to understand, but of fundamental important in many areas in
mathematics – and that's why it has become unusually popular in our culture
(at least, compared to other areas of mathematics). There even is a _Pi day_
every year, which either falls on 14 March (because `Pi = 3.14`) or on 22 July
(because `pi = 22/7`).



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: radians



## Degrees and Radians

__[CC] Understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle.__

--------------------------------------------------------------------------------
> sectionStatus: dev
> section: tangets-chords-arcs


## Tangents, Chords and Arcs


__[CC] Construct a tangent line from a point outside a given circle to the circle.__

__[CC] Identify and describe relationships among inscribed angles, radii, and chords. \nInclude the relationship between central, inscribed, and circumscribed angles; inscribed angles on a diameter are right angles; the radius of a circle is perpendicular to the tangent where the radius intersects the circle.__

__[CC] Derive using similarity the fact that the length of the arc intercepted by an angle is proportional to the radius, and define the radian measure of the angle as the constant of proportionality; derive the formula for the area of a sector.__

* Tangent: A line that intersects a circle in exactly one point.
* Point of Tangency: The point where a tangent line touches the circle.

The tangent ray TP and tangent segment TP are also called tangents.
Tangent Circles: Two or more circles that intersect at one point.
Two circles can be tangent to each other in two different ways, either
internally tangent or externally tangent.

If the circles are not tangent, they can share a tangent line, called a common
tangent. Common tangents can be internally tangent and externally tangent too.
Notice that the common internal tangent passes through the space between the
two circles. Common external tangents stay on the top or bottom of both circles.

Concentric Circles: Two or more circles that have the same center, but different radii.
Congruent Circles: Two or more circles with the same radius, but different centers.

The tangent line and the radius drawn to the point of tangency have a unique
relationship. Let’s investigate it here.

### Tangent Line and Radius Property
1. Using your compass, draw a circle. Locate the center and draw a radius. Label
   the radius AB, with A as the center. 
2. Draw a tangent line, BC←→, where B is the point of tangency. To draw a
   tangent line, take your ruler and line it up with point B. Make sure that B
   is the only point on the circle that the line passes through. 
3. Using your protractor, find m∠ABC.

_Tangent to a Circle Theorem_: A line is tangent to a circle if and only if the
line is perpendicular to the radius drawn to the point of tangency.

To prove this theorem, the easiest way to do so is indirectly (proof by
contradiction). Also, notice that this theorem uses the words “if and only if,”
making it a biconditional statement. Therefore, the converse of this theorem is
also true. Now let’s look at two tangent segments, drawn from the same external
point. If we were to measure these two segments, we would find that they are equal.

_Two Tangents Theorem_: If two tangent segments are drawn from the same external
point, then the segments are equal.


---


A chord is a line segment whose endpoints are on a circle. A diameter is the
longest chord in a circle. There are several theorems that explore the
properties of chords.

* Chord: A line segment whose endpoints are on a circle.
* Secant: A line that intersects a circle in two points.

Chord Theorem #1: In the same circle or congruent circles, minor arcs are
congruent if and only if their corresponding chords are congruent.

Notice the “if and only if” in the middle of the theorem. This means that Chord
Theorem #1 is a biconditional statement. Taking this theorem one step further,
any time two central angles are congruent, the chords and arcs from the
endpoints of the sides of the central angles are also congruent. In both of
these pictures, BE≅CD and BEˆ≅CDˆ. In the second picture, we have △BAE≅△CAD
because the central angles are congruent and BA≅AC≅AD≅AE because they are all
radii (SAS). By CPCTC, BE≅CD.

Investigation: Perpendicular Bisector of a Chord
1. Draw a circle. Label the center A. 
2. Draw a chord in ⨀A. Label it BC.
3. Find the midpoint of BC by using a ruler. Label it D. 
4. Connect A and D to form a diameter. How does AD relate to the chord, BC? 

Chord Theorem #2: The perpendicular bisector of a chord is also a diameter.
In the picture to the left, AD⊥BC and BD≅DC. From this theorem, we also notice
that AD also bisects the corresponding arc at E, so BEˆ≅ECˆ.

Chord Theorem #3: If a diameter is perpendicular to a chord, then the diameter
bisects the chord and its corresponding arc.

Investigation: Properties of Congruent Chords
1. Draw a circle with a radius of 2 inches and two chords that are both 3
   inches. Label as in the picture to the right. This diagram is drawn to scale. 
2. From the center, draw the perpendicular segment to AB and CD.
3. Erase the arc marks and lines beyond the points of intersection, leaving FE
   and E. Find the measure of these segments. What do you notice? 

Chord Theorem #4: In the same circle or congruent circles, two chords are
congruent if and only if they are equidistant from the center.

Recall that two lines are equidistant from the same point if and only if the
shortest distance from the point to the line is congruent. The shortest distance
from any point to a line is the perpendicular line between them. In this
theorem, the fact that FE=EG means that AB and CD are equidistant to the center
and AB≅CD.

---

### Arcs

A central angle is the angle formed by two radii of the circle with its vertex
at the center of the circle. In the picture below, the central angle would be
∠BAC. Every central angle divides a circle into two arcs (an arc is a section
of the circle). In this case the arcs are BCˆ and BDCˆ. Notice the arc above the
letters. To label an arc, always use this curve above the letters. Do not
confuse BC and BC.

If D was not on the circle, we would not be able to tell the difference between
BCˆ and BDCˆ. There are 360∘ in a circle, where a semicircle is half of a
circle, or 180∘. m∠EFG=180∘, because it is a straight angle, so mEHGˆ=180∘ and
mEJGˆ=180∘.

Semicircle: An arc that measures 180∘.

Minor Arc: An arc that is less than 180∘.

Major Arc: An arc that is greater than 180∘. Always use 3 letters to label a
major arc.

Two arcs are congruent if their central angles are congruent. The measure of
the arc formed by two adjacent arcs is the sum of the measures of the two arcs
(Arc Addition Postulate). An arc can be measured in degrees or in a linear
measure (cm, ft, etc.). In this course we will use degree measure. The measure
of the minor arc is the same as the measure of the central angle that
corresponds to it. The measure of the major arc equals to 360∘ minus the
measure of the minor arc. In order to prevent confusion, major arcs are always
named with three letters; the letters that denote the endpoints of the arc and
any other point on the major arc. When referring to the measure of an arc,
always place an “m” in from of the label.

One way to measure arcs is in degrees. This is called the “arc measure” or
“degree measure.” Arcs can also be measured in length, as a portion of the
circumference. Arc length is the length of an arc or a portion of a circle’s
circumference. The arc length is directly related to the degree arc measure.

Arc Length Formula: If d is the diameter or r is the radius, the length of
ABˆ=mABˆ360∘⋅πd or mABˆ360∘⋅2πr.

---

### Sectors and Segments

A sector of a circle is the area bounded by two radii and the arc between the
endpoints of the radii.

The area of a sector is a fractional part of the area of the circle, just like
arc length is a fractional portion of the circumference. The Area of a sector
is A=mABˆ360∘⋅πr2 where r is the radius and ABˆ is the arc bounding the sector.
Another way to write the sector formula is A=central angle360∘⋅πr2.

The last part of a circle that we can find the area of is called a segment, not
to be confused with a line segment. A segment of a circle is the area of a
circle that is bounded by a chord and the arc with the same endpoints as the
chord. The area of a segment is Asegment=Asector−A△ABC



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: circle-theorems



## The Circle Theorems

An inscribed angle is an angle with its vertex is the circle and its sides
contain chords. The intercepted arc is the arc that is on the interior of the
inscribed angle and whose endpoints are on the angle. The vertex of an inscribed
angle can be anywhere on the circle as long as its sides intersect the circle to
form an intercepted arc.

__Inscribed Angle Theorem__
The measure of an inscribed angle is half the measure of its intercepted arc.
To prove the Inscribed Angle Theorem, you would need to split it up into three
cases, like the three different angles drawn from the Investigation.

__Congruent Inscribed Angle Theorem__
Inscribed angles that intercept the same arc are congruent.

__Inscribed Angle Semicircle Theorem__
An angle that intercepts a semicircle is a right angle.

In the Inscribed Angle Semicircle Theorem we could also say that the angle is
inscribed in a semicircle. Anytime a right angle is inscribed in a circle, the
endpoints of the angle are the endpoints of a diameter. Therefore, the converse
of the Inscribed Angle Semicircle Theorem is also true.

When an angle is on a circle, the vertex is on the circumference of the circle.
One type of angle on a circle is one formed by a tangent and a chord.

__Chord/Tangent Angle Theorem__
The measure of an angle formed by a chord and a tangent that intersect on the
circle is half the measure of the intercepted arc.

From the Chord/Tangent Angle Theorem, we now know that there are two types of
angles that are half the measure of the intercepted arc; an inscribed angle and
an angle formed by a chord and a tangent. Therefore, any angle with its vertex
on a circle will be half the measure of the intercepted arc.

An angle is considered inside a circle when the vertex is somewhere inside the
circle, but not on the center. All angles inside a circle are formed by two
intersecting chords.

__Intersecting Chords Angle Theorem__
The measure of the angle formed by two chords that intersect inside a circle is
the average of the measure of the intercepted arcs.

An angle is considered to be outside a circle if the vertex of the angle is
outside the circle and the sides are tangents or secants. There are three types
of angles that are outside a circle: an angle formed by two tangents, an angle
formed by a tangent and a secant, and an angle formed by two secants. Just like
an angle inside or on a circle, an angle outside a circle has a specific
formula, involving the intercepted arcs.

__Outside Angle Theorem__
The measure of an angle formed by two secants, two tangents, or a secant and a
tangent drawn from a point outside the circle is equal to half the difference
of the measures of the intercepted arcs.

When two chords intersect inside a circle, the two triangles they create are
similar, making the sides of each triangle in proportion with each other. If we
remove AD and BC the ratios between AE, EC, DE, and EB will still be the same.

__Intersecting Chords Theorem__
If two chords intersect inside a circle so that one is divided into segments of
length a and b and the other into segments of length c and d then ab=cd. In
other words, the product of the segments of one chord is equal to the product
of segments of the second chord.

In addition to forming an angle outside of a circle, the circle can divide the
secants into segments that are proportional with each other.

If we draw in the intersecting chords, we will have two similar triangles.

From the inscribed angles and the Reflexive Property (∠R≅∠R),△PRS∼△TRQ. Because
the two triangles are similar, we can set up a proportion between the
corresponding sides. Then, cross-multiply. ac+d=ca+b⇒a(a+b)=c(c+d)

__Two Secants Segments Theorem__
If two secants are drawn from a common point outside a circle and the segments
are labeled as above, then a(a+b)=c(c+d). In other words, the product of the
outer segment and the whole of one secant is equal to the product of the outer
segment and the whole of the other secant.

If a tangent and secant meet at a common point outside a circle, the segments
created have a similar relationship to that of two secant rays. Recall that the
product of the outer portion of a secant and the whole is equal to the same of
the other secant. If one of these segments is a tangent, it will still be the
product of the outer portion and the whole. However, for a tangent line, the
outer portion and the whole are equal.

__Tangent Secant Segment Theorem__
If a tangent and a secant are drawn from a common point outside the circle (and
the segments are labeled like the picture to the left), then a2=b(b+c). This
means that the product of the outside segment of the secant and the whole is
equal to the square of the tangent segment.



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: inscribed-polygons



## Inscribed Polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon inscribed in a circle.__

An inscribed polygon is a polygon where every vertex is on a circle. Note, that
not every quadrilateral or polygon can be inscribed in a circle. Inscribed
quadrilaterals are also called cyclic quadrilaterals. For these types of
quadrilaterals, they must have one special property. We will investigate it here.

This investigation shows that the opposite angles in an inscribed quadrilateral
are supplementary. By cutting the quadrilateral in half, through the diagonal,
we were able to show that the other two angles (that we did not cut through)
formed a linear pair when matched up.

Inscribed Quadrilateral Theorem: A quadrilateral is inscribed in a circle if
and only if the opposite angles are supplementary.



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: spheres-cones-cylinders



## Spheres, Cones and Cylinders

__[CC] Give an informal argument for the formulas for the volume of a cylinder and cone. Use dissection arguments, Cavalieri’s principle, and informal limit arguments.__

### Cylinders

A cylinder is a solid with congruent circular bases that are in parallel planes.
The space between the circles is enclosed. Just like a circle, the cylinder has
a radius for each of the circular bases. Also, like a prism, a cylinder can be
oblique, like the one to the right.

Surface area is the sum of the areas of the faces. Let’s find the net of a right
cylinder. One way for you to do this is to take a label off of a soup can or can
of vegetables. When you take this label off, we see that it is a rectangle where
the height is the height of the cylinder and the base is the circumference of
the base. This rectangle and the two circular bases make up the net of a
cylinder.

Surface Area of a Cylinder: If r is the radius of the base and h is the
height of the cylinder, then the surface area is `A = 2πr^2 + 2πrh`.

Volume of a Cylinder: If the height of a cylinder is h and the radius is r, then
the volume would be `V = πr^2h`.

If an oblique cylinder has the same base area and height as another cylinder,
then it will have the same volume. This is due to Cavalieri’s Principle, which
states that if two solids have the same height and the same cross-sectional
area at every level, then they will have the same volume.

---

### Spheres

A sphere is the set of all points, in three-dimensional space, which are
equidistant from a point. You can think of a sphere as a three-dimensional
circle. A sphere has a center, radius and diameter, just like a circle. The
radius has an endpoint on the sphere and the other is on the center. The
diameter must contain the center. If it does not, it is a chord. The great
circle is a plane that contains the diameter. It is the largest circle cross
section in a sphere. There are infinitely many great circles. The circumference
of a sphere is the circumference of a great circle. Every great circle divides
a sphere into two congruent hemispheres, or two half spheres. Also like a
circle, spheres can have tangent lines and secants. These are defined just like
they are in a circle.

Surface Area of a Sphere: If r is the radius, then the surface area of a sphere
is SA=4πr2.

A sphere can be thought of as a regular polyhedron with an infinite number of
congruent regular polygon faces. As n, the number of faces increases to an
infinite number, the figure approaches becoming a sphere. So a sphere can be
thought of as a polyhedron with an infinite number faces. Each of those faces is
the base of a pyramid whose vertex is located at the center of the sphere. Each
of the pyramids that make up the sphere would be congruent to the pyramid shown.
The volume of this pyramid is given by V=13Bh.

To find the volume of the sphere, you need to add up the volumes of an infinite
number of infinitely small pyramids.
V(all pyramids)=V1+V2+V3+…+Vn=13(B1h+B2h+B3h+…+Bnh)=13h(B1+B2+B3+…+Bn)
The sum of all of the bases of the pyramids is the surface area of the sphere.
Since you know that the surface area of the sphere is 4πr2, you can substitute
this quantity into the equation above.
=13h(4πr2)
In the picture above, we can see that the height of each pyramid is the radius, so h=r.
=43r(πr2)=43πr3
Volume of a Sphere: If a sphere has a radius r, then the volume of a sphere is V=43πr3.

---

### Cones

A cone is a solid with a circular base and sides taper up towards a common
vertex.

It is said that a cone is generated from rotating a right triangle around one
leg in a circle. Notice that a cone has a slant height, just like a pyramid.

We know that the base is a circle, but we need to find the formula for the
curved side that tapers up from the base. Unfolding a cone, we have the net:

From this, we can see that the lateral face’s edge is 2πr and the sector of a
circle with radius l. We can find the area of the sector by setting up a
proportion.

If the bases of a cone and a cylinder are the same, then the volume of a cone
will be one-third the volume of the cylinder. Volume of a Cone: If r is the
radius of a cone and h is the height, then the volume is V=13πr2h.



--------------------------------------------------------------------------------
> sectionId: conic-sections



## Conic Sections

The circle is one of four different shapes which can be created using “slices”
through a cone. This can be demonstrated using the light cone of a torch:

    x-conic-section



---

If you point the torch vertically downwards, you see a [[circle|ellipse|oval]]
of light. _{span.reveal(when="blank-0")}If you tilt the cone, you get an
[__ellipse__](gloss:ellipse). If you tilt it even further, you get a
[__parabola__](gloss:parabola) or a [__hyperbola__](gloss:hyperbola). These four
shapes are called [__conic sections__](gloss:conic-section)._

Even though they all look very different, the four conic sections are closely
related. In fact, they can all be generated using the same equation!

{.todo} APOLLONIUS OF PERGA (ca 225 B.C.E.) wrote a series of eight books, titled Conic
sections, in which he thoroughly investigated these curves. He was the one to
introduce the names parabola, ellipse and hyperbola. ARCHIMEDES OF SYRACUSE (ca.
287–212 B.C.E.) also wrote about these curves.

In later courses, you'll learn much more about parabolas and hyperbolas, but
let's have a closer look at ellipses.

---

### Ellipses

{.todo} The ellipse is a particularly interesting shape. We could think about it
as a circle with “two centres” – these are called the foci. If both foci are in
the same place, we get a circle. If they move further apart, the shape becomes
more and more elliptical.

{.todo} Just like the distance between points on a circle and its centre is
constant, the sum of the distances from points on an ellipse to its two foci is
constant. This means that we can easily create an ellipe using a piece of string:

{.todo} Ellipses diagrams

---

### Planetary Orbits

You might remember from the very beginning of this course, that ancient Greek
astronomers believed that the Earth is at the centre of the universe and that
the sun, moon and planets move around Earth on circular orbits.

Unfortunately, astronomical observation showed that the sun appeared larger
during some parts of the year and smaller during others. This was surprising,
since every point on a circle should have the same distance from its center.

{.todo} Therefore astronomers added Epicycles to the orbits: all objects in the
sky move on a large circle around the Earth, but at the same time they move
along a smaller circle around themselves. And, though complicated, this was the
most widely accepted model of our universe for more than 1000 years.

{.todo} In 1543, Nicolaus Copernicus published “On the Revolutions of the
Celestial Spheres”, a book in which he explained what many astronomers had
suspected for some time: that the sun is at the centre of the universe and that
the Earth moves around the sun on a circle, like all the other planets. This is
called the Heliocentric Model. At that time, the heliocentric model still had
many errors, and it still couldn’t explain why the sun sometimes appears larger
and sometimes smaller.

It wasn't until 1609 that the astronomer Johannes Kepler discovered that planets
actually move on elliptical orbits, and that the sun is in one of its two foci.
This is the first of his three Laws of Planetary Motion, which we know to be
true today.

A few decades later, Isaac Newton was able to prove Kepler's discovery, using
his newly developed laws of gravity.

{.todo} Between any two masses in the universe there is a force, similar to the attraction between two magnets. This force is called gravity. Gravity is what makes everything fall to the ground and gravity is what makes the planets move around the sun. It is only the great speed at which planets move, that prevents them from falling into the sun.

{.todo} Using Newton’s laws, one can derive an equation that describes the motion of objects moving under the force of gravity. This equation happens to be the same as the equation for conic sections (see above). Planets move on ellipses, but other objects, such as comets, can travel on parabolic or hyperbolic paths: they come close to the sun before turning around and shooting off into the universe, never to come back.

{.todo} Newton lived and worked at Trinity College Cambridge, where a falling apple is said to have inspired him to think about gravity. His description of classical mechanics, among many other discoveries, makes Newton the greatest and most influential scientist of all times. His ideas shaped our understanding of the world for nearly 300 years, until Albert Einstein discovered the laws of relativity in 1905.
