# Circles and Pi

## Introduction

> section: introduction
> id: intro

::: column.grow

For as long as humans exist, we have looked to the sky and tried to explain life
on Earth using the motion of stars, planets and the moon.

Ancient Greek astronomers were the first to discover that all celestial objects
move on regular paths, called __orbits__. They believed that these orbits are
always circular. After all, circles are the “most perfect” of all shapes:
symmetric in every direction, and thus a fitting choice for the underlying
order of our universe.

::: column(width=320)

    x-media(src="images/geocentric.jpg" width=320 height=272)

{.caption} Earth is at the center of the _Ptolemaic universe_.

:::

---
> id: radius
> goals: compass

Every point on a [__circle__](gloss:circle) has the same distance from its
center. This means that they can be drawn using a [compass](gloss:compass):

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(Math.PI/3,a),b.rotate(-2*Math.PI/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).normal.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} There are three important measurements related to
circles that you need to know:

* {.reveal(when="compass" delay="1000")} The [{.step-target.pill.b.red}radius](target:r)
  is the distance from the center of a circle to its outer rim.
* {.reveal(when="compass" delay="4000")} The [{.step-target.pill.b.blue}diameter](target:d)
  is the distance between two opposite points on a circle. It goes through its
  center, and its length is [[twice|half|the same as]] the radius.
* {.reveal(when="blank-0")} The [{.step-target.pill.b.green}circumference](target:c) 
  (or perimeter) is the distance around a circle.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

One important property of circles is that all circles are
[similar](gloss:similar). You can prove that by showing how all circles can
be matched up using simply [translations](gloss:translation) and
[dilations](gloss:dilation):

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

You might remember that, for similar polygons, the ratio between corresponding
sides is always constant. Something similar works for circles: the ratio between
the [circumference](gloss:circle-circumference) and the
[diameter](gloss:circle-diameter) is equal for _all circles_. It is always
3.14159… – a mysterious number called [__Pi__](gloss:pi), which is often written
as the Greek letter _π_ for “p”. Pi has infinitely many decimal digits that go
on forever without any specific pattern:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Here is a wheel with diameter 1. As you “unroll” the circumference, you can see
that its length is exactly [[`pi`|`2 * pi`|3]]:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

For a circle with diameter _d_, the circumference is `C = pi * d`. Similarly,
for a circle with [radius](gloss:circle-radius) _r_, the circumference is

{.text-center} `C =` [[`2 * pi * r`|`pi * r`|`pi * r^2`]].

---
> id: nature

Circles are perfectly symmetric, and they don’t have any “weak points” like the
corners of a polygon. This is one of the reasons why they can be found
everywhere in nature:

::: column(width=130 parent="padded-thin")

    x-media(src="images/flower.jpg" width=130 height=130)

{.caption} Flowers

::: column(width=130)

    x-media(src="images/earth.jpg" width=130 height=130)

{.caption} Planets

::: column(width=130)

    x-media(src="images/tree.jpg" width=130 height=130)

{.caption} Trees

::: column(width=130)

    x-media(src="images/orange.jpg" width=130 height=130)

{.caption} Fruit

::: column(width=130)

    x-media(src="images/soap.jpg" width=130 height=130)

{.caption} Soap Bubbles

:::

{.r} And there are so many other examples: from rainbows to water ripples. Can
you think of anything else? _{button.next-step} Continue_

---
> id: max-area
> goals: area-circle

::: column.grow

It also turns out that a circle is the shape with the largest area for a given
circumference. For example, if you have a rope of length 100\ m, you can use
it to enclose the largest space if you form a circle (rather than other shapes
like a rectangle or triangle).

In nature, objects like water drops or air bubbles can _save energy_ by becoming
circular or spherical, and reducing their surface area.

::: column(width=320)

    x-select.area-tabs
      div(data-value="0") Triangle
      div(data-value="1") Square
      div(data-value="2") Pentagon
      div(data-value="3") Circle
    svg(width=320 height=200)

{.caption} _Circumference_ = __{.m-green}100__, _Area_ = __${area}__


:::

---
> id: area
> goals: slider

### The Area of a Circle

But how do we actually calculate the area of a circle? Let’s try the same
technique we used for [finding the area quadrilaterals](/course/polygons-and-polyhedra/quadrilaterals):
we cut the shape into multiple different parts, and then rearrange them into a
different shape we already know the area of (e.g. a rectangle or a triangle).

The only difference is that, because circles are curved, we have to use some
approximations:

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

Here you can see a circle divided into ${toWord(n1)} wedges. Move the slider,
to line up the wedges in one row.

{.reveal(when="slider")} If we increase the number of wedges to ${n1}{n1|6|6,30,2},
this shape starts to look more and more like a [[rectangle|circle|square]].

{.reveal(when="blank-0")} The height of the rectangle is equal to the
[[radius|circumference|diameter]] of the circle.
_{span.reveal(when="blank-1")} The width of the rectangle is equal to
[[half the circumference|the circumference|twice the radius]] of the circle._
_{span.reveal(when="blank-2")} (Notice how half of the wedges face down and
half of them face up.)_

{.reveal(when="blank-2" delay=1000)} Therefore the total area of the rectangle
is approximately `A = pi * r^2`.

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

Here you can see a circle divided into ${toWord(n)} rings. Like before, you can
move the slider to “uncurl” the rings.

{.reveal(when="slider")} If we increase the number of wedges to ${n2}{n2|4|2,12,1},
this shape starts to look more and more like a [[triangle|rectangle|trapezium]].

{.reveal(when="blank-0")} The height of the triangle is equal to the 
[[radius|diameter|circumference]] of the circle.
_{span.reveal(when="blank-1")} The base of the triangle is equal to [[the
circumference|twice the diameter]] of the circle._
_{span.reveal(when="blank-2")} Therefore the total area of the triangle is
approximately_

{.text-center.reveal(when="blank-2")} `A = 1/2 "base" * "height" = pi * r^2`.

:::

---
> id: area-2

If we could use infinitely many rings or wedges, the approximations above would
be perfect – and they both give us the same formula for the area of a circle:

{.text-center.r} `A = pi * r^2`.
_{button.next-step} Continue_

---
> id: pi-approximations

### Calculating Pi

As you saw above, `π = 3.1415926…` is not a simple integer, and its decimal
digits go on forever, without any repeating pattern. Numbers with this property
are called [__irrational numbers__](gloss:irrational-numbers), and it means that
`π` cannot be expressed as a simple fraction `a/b`.

It also means that we can never write down _all_ the digits of Pi – after all,
there are infinitely many. Ancient Greek and Chinese mathematicians calculated
the first four decimal digits of Pi by approximating circles using regular
polygons. Notice how, as you add more sides, the polygon starts to look
[[more and more|less|exactly]] like a circle:

    figure: x-media(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-media(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

In 1665, [Isaac Newton](bio:newton) managed to calculate 15 digits. Today, we
can use powerful computers to calculate the value of Pi to much higher
accuracy.

The current record is 22 trillion digits. A printed book containing all these
digits would be approximately 400\ km thick – that’s the height at which the
International Space Station orbits Earth!

Of course, you don’t need to remember that many digits of Pi. In fact, the
fraction `22/7 = 3.142…` is a great approximation.

:::

---
> id: pi-sequence

One approach for calculating Pi is using infinite sequences of numbers. Here is
one example which was discovered by [Gottfried Wilhelm Leibniz](bio:leibniz) in
1676:

    p.text-center: span.math
      mi π
      mo(value="=") =
      mfrac #[mn 4]#[mn 1]
      mo –
      mfrac #[mn 4]#[mn 3]
      mo +
      mfrac #[mn 4]#[mn 5]
      mo –
      mfrac #[mn 4]#[mn 7]
      mo +
      mfrac #[mn 4]#[mn 9]
      mo –
      mfrac
        mn 4
        mrow.md [[11]]
      mo +
      mo …

{.reveal(when="blank-0")} As we calculate more and more terms of this series,
always following the same pattern, the result will get closer and closer to Pi.

---
> id: pi-colours
> goals: hover

::: column.grow

Many mathematicians believe that Pi has an even more curious property: that it
is a __normal number__. This means that the digits from 0 to 9 appear completely
at random, as if nature had rolled a 10-sided dice infinitely many times, to
determine the value of Pi.

Here you can see the first 100 digits of Pi. Move over some of the cells, to see
how the digits are distributed.

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

If Pi is normal, it means that you can think of _any_ string of digits, and it
will appear somewhere in its digits. Here you can search the first one
million digits of Pi – do they contain your birthday?

    .box
      .box-title: h3 One Million Digits of Pi
      .box-body.pi-controls
        | Search for a string of digits:
        input(type="text" pattern="[0-9]*" maxlength=12)
        .pi-warning Not found in the first one million digits
      x-pi-scroll.box-body
        .first-row 3.

---
> id: pi-movies

We could even convert an entire book, like Harry Potter, into a very long string
of digits (a = 01, b = 02, and so on). If Pi is normal, this string will appear
somewhere in its digits – but it would take millions of years to calculate
enough digits to find it.

Pi is easy to understand, but of fundamental importance in science and
mathematics. That might be a reason why Pi has become unusually popular in our
culture (at least, compared to other topics of mathematics):

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi is the secret combination for the tablet in “Night at the Museum 2”.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (“Simpsons”) silences a room of scientists by saying that Pi equals 3.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) disables an evil computer by asking it to calculate the last digit of Pi.

:::

---
> id: pi-day

There even is a _Pi day_
every year, which either falls on 14 March, because `pi ≈ 3.14`, or on 22 July,
because `pi ≈ 22/7`.

    figure: x-media(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")



--------------------------------------------------------------------------------



## Degrees and Radians

> section: radians
> id: degrees

So far in geometry, we've always measured angles in [degrees](gloss:degrees). A
__{.m-red}full circle__ rotation is [[360]]°, a __{.m-green}half circle__ is
[[180]]°, a __{.m-yellow}quarter circle__ is [[90]]°, and so on.

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r} The number 360 is very convenient because it is divisible by so many other
numbers: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, and so on. This means that many
fractions of one circle are also whole numbers. But have you ever wondered
where the number 360 comes from?
_{button.next-step} Continue_

---
> id: babylon

::: column.grow

As it happens, 360 degrees are one of the oldest concepts in mathematics we
still use today. They were developed in ancient Babylon, more than 5000 years
ago!

At that time, one of the most important applications of mathematics was in
astronomy. The _sun_ determines the four seasons, which farmers have to know
about when growing crops. Similarly, the _moon_ determines the tides, which
was important for fishers. People also studied the stars to predict the
future, or to communicate with gods.

::: column(width=260)

    x-media(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} A Babylonian tablet for calculating `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Astronomers noticed that the constellations visible at a specific time during
the night shifted a tiny bit every day – until, after approximately 360 days,
they had rotated back to their starting point. And this might have been the
reason why they divided the circle into 360 degrees.

    .constellations
      .label.md Midnight on day ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Of course, there are actually 365 days in one year (well, 365.242199 to be
exact), but Babylonian mathematicians worked with simple sundials, and this
approximation was perfectly adequate.

It also worked well with their existing base-60 number system (since
`6 xx 60 = 360`). This system is the reason why we still have 60 seconds in a
minute and 60 minutes in an hour – even though most other units are measured
in [base 10](gloss:base-10) (e.g. 10 years in a decade, or 100 years in a century).

::: column.grow

For many of us, measuring angles in degrees is second nature: there is 360°
video, skateboarders can pull 540s, and someone changing their decision might
make a 180° turn.

But from a mathematical point of view, the choice of 360 is completely
arbitrary. If we were living on Mars, a circle might have 670°, and a year on
Jupiter even has 10,475 days.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} The 540 McFlip, a 540° rotation

:::

---
> id: radians

### Radians

Rather than dividing a circle into some number of segments (like 360 degrees),
mathematicians often prefer to measure angles using the [circumference](gloss:circle-circumference)
of a [__unit circle__](gloss:unit-circle) (a circle with radius 1).

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

A _{span.var-action}full circle_ has circumference
_{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} For a _{span.var-action}half circle rotation_, the
corresponding distance along the circumference is
_{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} For a _{span.var-action}quarter circle rotation_, the
distance along the circumference is
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} And so on: this way of measuring angles is called
[__radians__](gloss:radians) (you could remember this as “radius units”).

:::

---
> id: radians-conversion

Every angle in degrees has an equivalent size in radians. Converting between the
two is very easy – just like you can convert between other units like meters and
kilometers, or Celsius and Fahrenheit:

{.text-center} __{.m-red} 360°__ _{span.space}=_ __{.m-green} 2*π* rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_  
__{.m-red} 1°__ _{span.space}=_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_  
__{.m-green} 1 rad__ _{span.space}=_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

You can write the radians value either as a multiple of _π_, or as just a single
decimal number. Can you fill in this table of equivalent angle sizes in degrees
and radians?

| __{.m-green}degrees__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-red}radians__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Distance Travelled

You can think of radians as the “distance traveled” along the circumference of
a unit circle. This is particularly useful when working with objects that are
moving on a circular path.

::: column.grow

For example, the International Space Station orbits Earth once every 1.5\ hours.
This means its __speed of rotation__ is [[`(2 pi)/1.5`|`1.5/(2 pi)`|`1.5 * pi`]]
radians per hour.

{.reveal(when="blank-0")} In a [unit circle](gloss:unit-circle), the speed of
rotation is the same as the _actual_ speed, because the length of the
circumference is the same as one full rotation in radians (both are `2pi`).

{.reveal(when="blank-0" delay=1000)} The radius of the ISS orbit is 6800\ km,
which means that the _actual_ speed of the ISS has to be [[`(2 pi)/1.5 xx 6800`|
`(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")}= 28483 km
per hour._

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

Can you see that, in this example, radians are a much more convenient unit than
degrees? Once we now the speed of rotation, we simply have to multiply by the
radius to get the actual speed.

Here is another example: your car has wheels with radius 0.25\ m. If you’re
driving at a speed of 20\ m/s, the wheels of your car rotate at [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0.0125`]] radians per second
_{span.reveal(when="blank-0")}(or `80/(2pi) = 13` rotations per second)._

---
> id: radians-trig

### Trigonometry

For most simple geometry problems, degrees and radians are completely
interchangeable – you can either pick which one you prefer, or a question
might tell you which unit to give your answer in. However, once you study
more advanced [trigonometry](gloss:trigonometry) or [calculus](gloss:calculus),
it turns out that radians are much more convenient than degrees.

::: column.grow

Most calculators have a [special button](->.button.mode) to switch between
degrees and radians. Trigonometric functions like [__sin__](gloss:sin),
[__cos__](gloss:cos) and __tan__ take angles as input, and their inverse
functions __arcsin__, __arccos__ and __arctan__ return angles as output. The
current calculator setting determines which units are used for these angles.

Try using this calculator to calculate that

{.text-center} sin(30°) = [[0.5]] _{span.eqn-gap}_ cos(1°) = [[0.999]]<br>
sin(30 rad) = [[-0.988]] _{span.eqn-gap}_ cos(1 rad) = [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

Using radians has one particularly interesting advantage when using the [__Sine
function__](gloss:sin). If `θ` is a very small angle (less than 20° or 0.3 rad),
then `"sin"(θ) ≈ θ`. For example,

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} This is called the __small angle approximation__, and it
can greatly simplify certain equations containing trigonometric functions.
You’ll learn much more about this in the future.



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: tangets-chords-arcs
> id: circle-parts


## Tangents, Chords and Arcs

In the previous sections, you learned about a few different parts of a circle,
like the radius, diameter and circumference. However, there are 

::: column.grow

* A __secant__ is a line that intersects a circle in two points.

* A __chord__ is a line segment whose endpoints are on a circle.

* A __tangent__ is a line that intersects a circle at exactly one point.

* An __arc__ is

* A __sector__ is

* A __segment__ is

::: column(width=300)

    x-geopad(width=300 height=300): svg

:::

In this section we will have a closer look at the relationships between these
XXXX, prove theorems about their properties, and explore how they can be used
to solve problems in geometry.

---

### Tangents

__[CC] Construct a tangent line from a point outside a given circle to the circle.__

Point of Tangency: The point where a tangent line touches the circle.

The tangent line and the radius drawn to the point of tangency have a unique
relationship. Let’s investigate it here.

The tangent ray TP and tangent segment TP are also called tangents.
Tangent Circles: Two or more circles that intersect at one point.
Two circles can be tangent to each other in two different ways, either
internally tangent or externally tangent.

If the circles are not tangent, they can share a tangent line, called a common
tangent. Common tangents can be internally tangent and externally tangent too.
Notice that the common internal tangent passes through the space between the
two circles. Common external tangents stay on the top or bottom of both circles.

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

### Chords

A chord is a line segment whose endpoints are on a circle. A diameter is the
longest chord in a circle. There are several theorems that explore the
properties of chords.

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

    // Concentric Circles: Two or more circles that have the same center, but different radii.
    // Congruent Circles: Two or more circles with the same radius, but different centers.

---

### Arcs and Sectors

__[CC] Derive using similarity the fact that the length of the arc intercepted
by an angle is proportional to the radius, and define the radian measure of the
angle as the constant of proportionality; derive the formula for the area of a
sector.__

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

A sector of a circle is the area bounded by two radii and the arc between the
endpoints of the radii.

The area of a sector is a fractional part of the area of the circle, just like
arc length is a fractional portion of the circumference. The Area of a sector
is A=mABˆ360∘⋅πr2 where r is the radius and ABˆ is the arc bounding the sector.
Another way to write the sector formula is A=central angle360∘⋅πr2.

---

### Segments

The last part of a circle that we can find the area of is called a segment, not
to be confused with a line segment. A segment of a circle is the area of a
circle that is bounded by a chord and the arc with the same endpoints as the
chord. The area of a segment is Asegment=Asector−A△ABC



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: circle-theorems



## The Circle Theorems

__[CC] Identify and describe relationships among inscribed angles, radii, and
chords. Include the relationship between central, inscribed, and circumscribed
angles; inscribed angles on a diameter are right angles; the radius of a circle
is perpendicular to the tangent where the radius intersects the circle.__

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

---

### Thales' Theorem

{.todo} TODO



--------------------------------------------------------------------------------
> sectionStatus: dev
> section: cyclic-polygons



## Cyclic Polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon
inscribed in a circle.__

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

After studying 

::: column(width=220 parent="padded-thin")

    x-3d-solid(size=220 shape="cylinder")

{.todo} TODO

::: column(width=220)

    x-3d-solid(size=220 shape="cone")

{.todo} TODO

::: column(width=220)

    x-3d-solid(size=220 shape="sphere")

{.todo} TODO

:::

---

__[CC] Give an informal argument for the formulas for the volume of a cylinder
and cone. Use dissection arguments, Cavalieri’s principle, and informal limit
arguments.__

* https://en.wikipedia.org/wiki/Cavalieri%27s_principle
* https://www.bbc.com/bitesize/guides/zcsgdxs/revision/9

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

Finally, we can combine all the equations we derived in this chapter to prove
one of the most satisfying results in all of geometry. Imagine we have a
cylinder with the same height as the diameter of its base. We can now fit a
sphere and a cone perfectly in its inside:

::: column(width=240)

{.todo} image

{.text-center} This cone has radius `r` and height `2r`, so its volume is

::: column(width=240)

{.todo} image

{.text-center} This sphere has radius `r` and height `2r`, so its volume is

:::

---

If we add up the volume of both these shapes, we get XXX, which is exactly the
volume of the cylinder:

{.todo} Visual Equation

There is no easy way to see why this equation is true (for example by dividing
the solids into small slices). However, if you had three containers of exactly
this volume, you could fill them with water and observe tha



--------------------------------------------------------------------------------



## Conic Sections

> sectionId: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

The circle is one of four different shapes which can be created using “slices”
through a [cone](gloss:cone). This can be demonstrated using the light cone of
a torch:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Circle
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabola
          include svg/parabola.svg
        .hide
          p: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

If you point the torch vertically downwards, you see a [[circle|ellipse|oval]]
of light. _{span.reveal(when="blank-0")}If you tilt the cone, you get an
[__ellipse__](gloss:ellipse). If you tilt it even further, you get a
[__parabola__](gloss:parabola) or a [__hyperbola__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Collectively, these four shapes are called [__conic sections__](gloss:conic-section).
Even though they all look very different, they are closely related: in fact,
they can all be generated using the same equation!

Conic sections were first studied by the ancient Greek mathematician [Apollonius
of Perga](bio:apollonius), who also gave them their unusual names.

In later courses, you’ll learn much more about parabolas and hyperbolas. For
now, let’s have a closer look at the ellipse.

::: column(width=300)

    x-media(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellipses

An ellipse just looks almost like an “elongated circle”. In fact, you could
think about it as a circle with _two centers_ – these are called __focal
points__. Just like every point on a circle has the same distance from its
center, every point on an ellipse has the same _sum of distances_ to its two
focal points.

If you have a long string connected to two fixed points, you can draw a perfect
ellipse by tracing the maximum reach of the strings:

{.todo} Coming soon: Ellipses drawing interactive

    // ---
    // > id: ellipses-1
    // You can also move the focal points around. Notice how, if they are further
    // apart, the ellipse will be [[more|less]] elongated. If they are close together,
    // it will look almost like a [[circle|parabola|trapezium]].

---
> id: ellipses-2
> goals: v0 v1 v2 v3

There are many other physical representations of how you could draw an ellipse:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---
> id: orbits

### Planetary Orbits

::: column.grow

You might remember from the very beginning of this course, that ancient Greek
astronomers believed that the Earth is at the centre of the universe and that
the sun, moon and planets move around Earth on circular orbits.

Unfortunately, astronomical observation of the sky didn’t quite support this.
For example, the sun appeared larger during some parts of the year and smaller
during others. On a circle, every point should have [[the same|an increasing|a
decreasing]] distance from its center.

::: column(width=330)

    x-media(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Greek astronomer Hipparchus of Nicaea

:::

---
> id: epicycles
> goals: play

To fix this, astronomers added __Epicycles__ to their model of the solar system:
planets move on a large circle around Earth, while simultaneously rotating on
a smaller circle. While very complicated, this was the most widely accepted
model of our universe for more than 1000 years:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#ff941f" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#1f7aff")
        circle.earth(cx=310 cy=160 r=10 fill="#ff941f")
      x-play-btn

{.caption} This planet makes ${n}{n|6|2,12,1} rotations around the small circle
(the __epicycle__) during one rotation around the large circle (the
__deferent__).

::: column(width=320)

    x-media(src="images/epicycles.jpg" width=320 height=320)

{.caption} A 16-century drawing of epicycles in the __Geocentric model__. The
Greek word “planetes” means “wanderers”.
:::

---
> id: kepler
> goals: play

::: column.grow

Over time, people realised that Earth was actually just one of many planets
orbiting the sun (the __Heliocentric model__), but it wasn’t until 1609, that
the astronomer [Johannes Kepler](bio:kepler) discovered that planets actually
move on _elliptical orbits_.

The sun is in one of the two focal points of these ellipses. The planets speed
up as they get closer to the sun, and slow down as they move further away.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#1f7aff" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#1f7aff")
        circle(cx=220 cy=120 r=15 fill="#ff941f")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

A few decades later, [Isaac Newton](bio:newton) was able to prove Kepler’s
observations, using his newly developed laws of [__gravity__](gloss:gravity).
Newton realised that there is a force between any two masses in the universe –
similar to the attraction between two magnets. 

Gravity is what makes everything fall to the ground and gravity is also what
makes the planets move around the sun. It is only the great speed at which
planets move, that prevents them from falling directly into the sun.

::: column(width=280)

    // Source: https://www.flickr.com/photos/hikingartist/6217869031
    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Using Newton’s laws, you can derive the path that objects take when moving under
the force of gravity. It turns out that Planets move on ellipses, but other
objects like comets can travel on [parabolic](gloss:parabola) or
[hyperbolic](gloss:hyperbola) paths: they fly close to the sun before turning
around and shooting off into the universe, never to come back.

According to legend, a falling apple inspired Newton to think about gravity. He
was one of the most influential scientist of all time, and his ideas shaped our
understanding of the world for nearly 300 years – until Albert Einstein
discovered relativity in 1905.

:::
