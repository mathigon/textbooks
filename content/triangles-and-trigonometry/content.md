# Triangles and Trigonometry

## Introduction

> id: intro

::: column.grow
By the early 19th century, explorers had discovered most of the world. Trade and
transportation was booming between distant countries, and this created a need
for _accurate maps_ of the entire planet.

Today we have satellites that can take photos from above – but 200 years ago,
creating maps was a difficult and time consuming task. It was done by
mathematicians like [Radhanath Sikdar](bio:sikdar), who worked on the _Great
Trigonometrical Survey_: a century-long project to measure all of India,
including the Himalayan mountain range.

::: column(width=240)

    x-media.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} The _theodolite_, a surveying instrument
:::

Of particular interest was the quest to find the highest mountain on Earth.
There were a few different candidates, but from hundreds of kilometers away, it
was difficult to tell which one was the highest.

So how to you measure the height of a mountain?

    figure.mountain: include svg/mountain.svg

{.r} Today we can use satellites to measure the height of mountains to within a
few centimeters – but these did not exist when Radhanath was surveying India.
_{button.next-step} Continue_

{.r.reveal(when="next-0")} Climbers use _altimeters_ to determine their altitude.
These devices use the difference in air pressure at different heights. However
this would have required someone to actually climb to the [top of every
mountain](-> .mountain-top) – an extremely difficult feat that was not achieved
until a century later.
_{button.next-step} Continue_

{.r.reveal(when="next-1")} You could also try using similar triangles, like we
did in the [previous course](/course/transformations-and-symmetry/similarity).
This method requires knowing the [distance](-> .mountain-distance) to the [base
of the mountain](-> .mountain-base): the point at sea level that directly below
its summit. We can do this for trees or tall buildings, but for mountains this
point is hidden underneath hundreds of meters of rock.
_{button.next-step} Continue_

---
> id: intro-2

::: column(width=320)

    x-media(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary and Tenzing Norgay were the first to reach the top of
Mount Everest, in 1953.

::: column.grow
But there are more advanced geometric techniques, which [Radhanath](bio:sikdar)
used to discover the highest mountain on Earth: it is now called _Mount Everest_.
His measurement is only a few meters off today’s official height of 8848 meters.

In this course you will learn about many different features and properties of
triangles. These will allow you to measure the height of mountains, but they are
also of fundamental importance in many other areas of mathematics, science and
engineering.
:::

---
> id: angle-sum

## Properties of Triangles

Let’s start simple: a triangle is a closed shape that has three sides (which
are [line segments](gloss:line-segment)) and three vertices (the
[points](gloss:point) where the sides meet). It also has three [internal
angles](gloss:internal-angle), and we already know that the sum of them is
always [[180]]°.

---
> id: classification

We can classify triangles by the size of their angles:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} A __right-angled triangle__  
has one [right angle](gloss:right-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(a2,b2,c2)")
      path(x="polygon(a2,b2,c2)")

{.caption} An __obtuse triangle__  
has one [obtuse angle](gloss:obtuse-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} An __acute triangle__  
has [[three]] [acute angles](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
For convenience, we always label triangles in the same way. The vertices are
labelled with capital letters [_A_, _B_ and _C_](target:vertex), the sides are
labelled with lowercase letters [_a_, _b_ and _c_](target:side), and the angles
are labelled with Greek letters [α, β and γ](target:angle) (“alpha”, “beta” and
“gamma”).
 
The [side that lies _opposite_ vertex _A_](target:X) is labeled _a_, and the
[angle that lies right next to _A_](target:Y) is labelled α. The same pattern
works for _B_/_b_/β and for _C_/_c_/γ.
::: column(width=220)

    x-geopad.label-halo(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b)" label="α" target="angle Y")
      path.blue(x="angle(a,b,c)" label="β" target="angle")
      path.green(x="angle(b,c,a)" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Medians 

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")
      
      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")
      
      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")
      
      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")
      

::: column.grow
Here you can see a triangle as well as the [midpoints](gloss:midpoint) of its
three sides.

A [__median__](gloss:median) of a triangle is a line segment that joins a vertex
and the midpoint of the opposite side. Draw the three medians of this triangle.
_{span.reveal(when="s0 s1 s2")}What happens as you move the vertices of the
triangle?_

{.reveal(when="move")} It seems like the medians always [[intersect in one
point|have the same length|divide each other in the middle]].
_{span.reveal(when="blank-0")}This point is called the
[__centroid__](gloss:centroid)._

{.reveal(when="blank-0")} Medians always divide each other in the
[ratio 2:1](target:ratio). For each of the three medians, the distance from the
vertex to the centroid is always [[twice|three times|exactly]] as long as the
distance from the centroid to the midpoint.
:::

---
> id: center-of-mass
> goals: move

The centroid is also the “balancing point” of a triangle. Draw a triangle on
some cardboard, cut it out, and find the three medians. If you were accurate,
you can now balance the triangle on the trip of a pencil, or hang it perfectly
level from a piece of string that’s attached to its centroid:

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

::: column.grow
This works because the weight of the triangle is evenly distributed around the
centroid. In physics, this point is often called the __center of mass__.

Any straight line that goes through the centroid divides the triangle into two
parts that have exactly the same area. Move the [blue point](target:move) in the
figure on the right. The red and green areas will always have the same area.
::: column(width=220)

    x-geopad(width=220): svg
      circle.move(name="a" cx=70 cy=50)
      circle.move(name="b" cx=60 cy=160)
      circle.move(name="c" cx=180 cy=130)
      circle.yellow(x="triangle(a,b,c).centroid" name="d")
      circle.move.blue.pulsate(name="p" cx=50 cy=50 project="circle(point(110,110),100)" target="move")
      circle(hidden name="q" x="p.rotate(pi,d)")

      path.dark(x="triangle(a,b,c)" name="t")
      path.fill.green.light(x="t.intersect(polygon(p,q,p.rotate(pi/2,q),q.rotate(-pi/2,p)))")
      path.fill.red.light(x="t.intersect(polygon(p,q,p.rotate(-pi/2,q),q.rotate(pi/2,p)))")
      path.blue(x="line(p,d)")

:::

---
> id: circumcircle
> goals: s0 s1 s2

### Perpendicular Bisectors and Circumcircle

::: column(width=300)

    x-geopad.sticky.label-halo(tools="move|perpBisector"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow
Recall that the [perpendicular bisector](gloss:perpendicular-bisector) of a line
is the perpendicular line that goes through its [[midpoint|endpoints]].

{.reveal(when="blank-0")}Draw the perpendicular bisector of all three sides of
this triangle. _{.lgrey} To draw the perpendicular bisector of a side of the
triangle, simply click and drag from one of its endpoints to the other._

{.reveal(when="s0 s1 s2")} Like before, the three perpendicular bisectors meet in a
single point. And again, this point has a special property.

{.reveal(when="s0 s1 s2")} Any point on a perpendicular bisector has the same
distance from the two endpoints of the lines it bisects. For example, any point
on the [blue bisector](target:b-blue) has the same distance from points _A_ and
_C_ and any point on the [red bisector](target:b-red) has the same distance from
points [[A and B|A and C|B and C]].

{.reveal(when="blank-1")} The [intersection point](target:center) lies on all
three perpendicular bisectors, so it must have the same distance from all three
[[vertices|sides]] of the triangle.

{.reveal(when="blank-2")} This means we can draw a circle around it that
perfectly touches all the vertices. This circle is called the
[__circumcircle__](gloss:circumcircle) of the triangle, and the center is called
the __circumcenter__.
:::

---
> id: circumcircle-1

In fact, this means that if you are given any three points, you can use the
circumcenter to find a circle that goes through all three of them. (Unless the
points are [[collinear|parallel]], in which case they all lie on a straight line.)

---
> id: incircle
> goals: s0 s1 s2

### Angle Bisectors and Incircle

You’re probably getting the hang of this now: we pick a certain construction, do
it three times for all sides/angles of the triangles, and then we work out
what’s special about their intersection.

::: column(width=300)

    x-geopad.sticky.label-halo(tools="move|angleBisector"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.thin.red(x="angle(c,a,b)" name="xa")
      path.thin.blue(x="angle(a,b,c)" name="xb")
      path.thin.green(x="angle(b,c,a)" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow
Recall that the [angle bisector](gloss:angle-bisector) divides an angle exactly
in the middle. Draw the angle bisector of the three angles in this triangle.
_{.lgrey} To draw an angle bisector, you have to click on three points that form
the angle you want to bisect._

{.r.reveal(when="s0 s1 s2")} Once again, all three lines intersect at one point.
You probably expected something like this, but it is important to notice that
there is no obvious reason why this should happen – triangles are just very
special shapes!
_{button.next-step} Continue_

{.reveal(when="next-0")} Points that lie on an angle bisector have the same
distance from the two lines that form the angle. For example any point on the
[blue bisector](target:b-blue) has the same distance from side _a_ and side _c_,
and any point on the [red bisector](target:b-red) has the same distance from
sides [[a and b|a and c|b and c]].

{.reveal(when="blank-0")} The [intersection point](target:center) lies on all
three bisectors. Therefore it must have the same distance from all three
[[sides|vertices]] of the triangle.

{.reveal(when="blank-1")} This means we can draw a circle around it, that lies
inside the triangle and just touches its three sides. This circle is called the
__incircle__ of the triangle, and the center is called the __incenter__.
:::

---
> id: area

### Area and Altitudes

::: column.grow
{.r} Finding the area of a [rectangle](gloss:rectangle) is easy: you simply
multiply its width by its height. Finding the area of a triangle is a bit less
obvious. Let’s start by “trapping” a triangle inside a rectangle.
_{button.next-step} Continue_

{.reveal.r(when="next-0")} The width of the rectangle is the length of the
[bottom side](target:base) of the triangle (which is called the __base__). The
height of the rectangle is the [perpendicular distance](target:height) from the
base to the opposite vertex.
_{button.next-step} Continue_

{.reveal(when="next-1")} The height divides the triangle into two parts. Notice
how the [two gaps in the rectangle](target:gap) are exactly as big as the two
parts of the triangle. This means that the rectangle is
[[twice as|three times as|exactly as]] large as the triangle.

{.reveal(when="blank-0")} We can easily work out the area of the rectangle, so
the area of the triangle must be half that:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.step-target.pill.red} base](target:base)
`×` [{.step-target.pill.blue} height](target:height)
::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")
      
      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="height" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b)" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="base" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

To calculate the area of a triangle, you can pick any of the three sides as
__base__, and the find the corresponding __height__, which is the line that is
[[perpendicular|parallel]] to the base and goes through the opposite vertex.

{.reveal(when="blank-0")} In triangles, these _heights_ are often called
[__altitudes__](gloss:triangle-altitude). Every triangle has [[three]] altitudes.

---
> id: altitudes-1

::: column(width=300)

    x-geopad.label-halo(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
      
      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Like the [medians](gloss:median), [perpendicular bisectors](gloss:perpendicular-bisector)
and [angle bisectors](gloss:angle-bisector), the three altitudes of a triangle
intersect in a single point. This is called the [__orthocenter__](target:center)
of the triangle.

In [acute triangles](gloss:acute-triangle), the orthocenter
[[lies inside|lies outside|is a vertex of]] the triangle.

{.reveal(when="blank-0")} In [obtuse triangles](gloss:obtuse-triangle), the
orthocenter [[lies outside|lies inside|is a vertex of]] the triangle.

{.reveal(when="blank-1")} In [right-angled triangles](gloss:right-triangle), the
orthocenter [[is a vertex of|lies inside|lies outside]] the triangle. Two of the
altitudes are actually just sides of the triangle.
:::

---
> id: midsegments
> goals: s0 s1 s2

### Triangle Midsegments

::: column(width=300)

    x-geopad.label-halo.sticky(tools="move|line"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")
      
      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow
A [__midsegment__](gloss:triangle-midsegment) is a line segment that connects
the midpoints of two sides of a triangle. Draw the three midsegments of this
triangle.

{.reveal(when="s0 s1 s2")} As you can see, the midsegments split the triangle
into [four smaller triangles](target:triangles).

{.reveal(when="s0 s1 s2")} It turns out that all of these smaller triangles are
[[congruent|overlapping|different sizes]] – even the upside down one in the
middle. _{span.reveal(when="blank-0")} They are also all [[similar|congruent]]
to the [original triangle](target:large),_ _{span.reveal(when="blank-1")}with a
scale factor of `1/2`._

{.reveal(when="blank-1")} This allows us to deduce some important facts about
the midsegments of triangles:

::: .theorem.reveal(when="blank-1")
__Midsegment Theorem__  
A midsegment of a triangle is parallel to its opposite side, and exactly half
the length of that side.
:::
:::

---
> id: triangle-inequality
> goals: s0 s1 s3 s5

## The Triangle Inequality

Having studied many of the properties and components of triangles, let’s think
about _creating_ triangles. In particular, if I give you any three numbers, can
you make a triangle that has those side lengths?

Here are a some examples – move the vertices of the triangle until the three
sides match one of the triples on the left.

    .inequality.row
      div(style="width:150px")
        .item #[.t-num 5]#[.t-num 6]#[.t-num 7] #[span.check(when="s0")]
        .item #[.t-num 3]#[.t-num 9]#[.t-num 9] #[span.check(when="s1")]
        .item #[.t-num 2]#[.t-num 4]#[.t-num 8]
        .item #[.t-num 4]#[.t-num 6]#[.t-num 7] #[span.check(when="s3")]
        .item #[.t-num 1]#[.t-num 2]#[.t-num 6]
        .item #[.t-num 3]#[.t-num 5]#[.t-num 7] #[span.check(when="s5")]
      .grow
        x-geopad.label-halo(height=360): svg
          circle.move.pulsate(name="a" cx=175 cy=75)
          circle.move(name="b" cx=150 cy=250)
          circle.move(name="c" cx=350 cy=200)
          path.red(x="segment(a,b)" label="${roundD(a,b)}")
          path.blue(x="segment(b,c)" label="${roundD(b,c)}")
          path.yellow(x="segment(a,c)" label="${roundD(a,c)}")

{.reveal(when="s0 s1 s3 s5")} It seems like there are a few cases where three
numbers simply _cannot_ make a triangle. This particularly happens when one side
[[is much longer than|is much shorter than|is the same length as]] the other two.

---
> id: triangle-inequality-1

::: column.grow
Think about the three sides of a triangle as metal rods, connected with hinges.
Let’s place the [longest rod](target:long) in the middle and the [shorter
ones](target:short) on either side.

{.r} Now it is easy to see that it is impossible to link up the ends of the
shorter rods, if their combined length is less than the length of the larger rod.
_{button.next-step} Continue_

::: column(width=300)

    x-geopad(width=300 height=180): svg
      circle(name="a" x="point(90,90)")
      circle(name="b" x="point(210,90)")
      circle.move.pulsate(name="c" cx=150 cy=50 project="circle(a,60)")
      circle.move.pulsate(name="d" cx=150 cy=50 project="circle(b,40)")

      path.blue(x="circle(a,60)" style="stroke-dasharray: 8px 10px")
      path.blue(x="circle(b,40)" style="stroke-dasharray: 8px 10px")
      path.thick(x="segment(a,b)" target="long")
      path.thick(x="segment(a,c)" target="short")
      path.thick(x="segment(b,d)" target="short")

:::

---
> id: inequality-picker

Let’s rewrite this observation in mathematical terms:

::: .theorem
__The Triangle Inequality__  
The sum of the lengths of any two sides of a triangle must be greater than the
length of the third.
:::

In other words, if a triangle has sides _a_, _b_ and _c_, then we know that
`a+b>c` and `a+c>b` and `b+c>a`.

The triangle inequality allows us to quickly check if three numbers can make a
triangle. Which of these triples of numbers are possible?

    x-picker
      .item.text-center #[.t-num 4]#[.t-num 6]#[.t-num 9]
      .item.text-center(data-error="inequality-error-1") #[.t-num 1]#[.t-num 2]#[.t-num 3]
      .item.text-center #[.t-num 3]#[.t-num 7]#[.t-num 8]
      .item.text-center(data-error="inequality-error-2") #[.t-num 2]#[.t-num 4]#[.t-num 7]
      .item.text-center(data-error="inequality-error-3") #[.t-num 1]#[.t-num 5]#[.t-num 8]
      .item.text-center #[.t-num 2]#[.t-num 3]#[.t-num 4]

---
> id: triangle-inequality-2

The triangle inequality also allows us to estimate the length of the third side
of a triangle, if we know the length of the other two.

Imagine that a triangle has two sides of length 4 and 6. Let’s call _c_ the
length of the third side. Then we know that

{.text-center} `4+6>c`, _{span.space}_ `4+c>6` _{span.space}_ and _{span.space}_ `6+c>4`

We can rearrange these inequalities to give [[2]] `<c<` [[10]].
_{span.reveal(when="blank-0 blank-1")}The length of side *c* has to be between 2 and 10._

---
> id: triangle-inequality-3
> goals: target-0 target-1

::: column.grow
Once again, we can think about this using physical objects: two sides of the
triangle are metal rods of length 4 and 6, and the third side is a rubber band
that can expand or contract.

Now you can see that the rubber band will always be _{span.hover-target} longer than_
`6-4=2` and _{span.hover-target} shorter than_ `6+4=10`.
::: column(width=300)

    x-geopad.label-halo(width=300 height=200): svg
      circle.move(name="a" cx=150 cy=150)
      circle.move(name="b" cx=70 cy=150 project="circle(a,80)")
      circle.move(name="c" cx=250 cy=50 project="circle(a,120)")
      path(x="segment(a,b)" style="stroke-width: 5px" label="4")
      path(x="segment(a,c)" style="stroke-width: 5px" label="6")
      path.rubber(x="segment(b,c)" style="stroke: #00cca6" label="${round(distance(b,c)/20)}")

:::

Note that these are _strict_ inequalities. If the third side is _exactly_ 2 or
10, we get a straight line and not a triangle. However 2.1 or 9.9 would be
enough to form a triangle.

---
> id: sss-construction
> goals: draw-base draw-c1 draw-c2

## Triangles Congruence

Now that we can check if three sides can form a triangle, let’s think about how
we would actually _construct_ a triangle with these sides.

::: column(width=300)

    x-geopad.sticky.label-halo(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Draw a triangle that has sides of lengths 4cm, 5cm and 6cm.

{.r} In the box of the length, draw the longest side of the triangle, which is
__6cm__. _{span.reveal(when="draw-base")} Now we already have [two](target:base)
of the three vertices of the triangle – the challenge is to find the last one.
*{button.next-step} Continue*_

{.reveal(when="next-0")} Next, draw a circle of radius __4cm__ around one of the
vertices, _{span.reveal(when="draw-c1")} and a circle of radius __5cm__ around
the other one._

{.reveal(when="draw-c2")} The third vertex of the triangle is the
[[intersection|center|radius]] of the two circles. _{span.reveal(when="blank-0")}
Now we can simply connect them to form a triangle._

{.reveal(when="blank-0" delay="3000")} The circles actually intersect
[[twice|three times|infinitely many times]]: _{span.reveal(when="blank-1")}once
[at the top](target:top) and once [at the bottom](target:bottom). We can pick
either of these intersections, and the resulting two triangles are
[[congruent|equilateral|perpendicular]]._
:::

---
> id: congruence

### Congruence Conditions

But is it possible to construct _a different_ triangle with the same three
sides?

We already saw two triangles above, but they where both congruent. In fact, any
two triangles that have the same three side lengths are congruent. This is
called the [__SSS Congruence Condition__](gloss:triangle-sss) for triangles
(“Side-Side-Side”).

We now have two conditions for triangles: “AA” means that two triangles are
[[similar|congruent|transformations]], and “SSS” means that two triangles are
[[congruent|similar|equal]]. There are a few more congruence conditions:

---
> id: congruence-1

::: .theorem
Two triangles are congruent if any one of the following conditions is met:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong SSS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption All sides are congruent.
        
      div(style="width: 150px")
        .text-center: strong SAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Two sides and the #[strong included] angle are congruent.
        
      div(style="width: 150px")
        .text-center: strong ASA
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Two angles and the #[strong included] side are congruent.
        
      div(style="width: 150px")
        .text-center: strong AAS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Two angles and one of the non-included angles.
:::

---
> id: cpoct

You can think of these conditions as “shortcuts”: to check if two triangles are
congruent, you just need to check one of the conditions above.

Once you _know_ that two triangles are congruent, you know that _all_ of their
corresponding sides and angles are congruent. This is often called
[__CPOCT__](gloss:cpoct), or “Corresponding Parts of Congruent Triangles are
Congruent”.

It is interesting to note that all conditions consists of [[three]] different
values (either sides or angles)!

---
> id: contruction

### Constructing Triangles

At the beginning of this section, we saw how to construct a triangle if we know
its three sides. Similarly, there are ways to construct triangles for each of
the congruence conditions above.

::: tab
#### SAS

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has sides of 5cm and 3cm, and an included
angle of 40°.

Like before, we start by drawing one of the sides of the triangle.

Next, use a protractor to measure a 40° angle around one of the two vertices.
Let’s mark this angle with a point.

We can connect the vertex to our measurement, to form the second side of the
triangle.

We know that this side has to be 3cm long, so let’s measure that distance with a
ruler and then mark the third vertex of the triangle.

Finally, we can connect the last two vertices, to complete the triangle.
:::

Of course, we could have drawn the 3cm side first, or picked the other vertex
to draw the 40° angle around. However in all those cases, the resulting
triangles would have been congruent to this one.

::: tab
#### ASA

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has angles of 70° and 50°, and an included
side of length 5cm.

Let’s start by drawing the first side, using a ruler to measure 5cm.

Now let’s use a protractor to measure an angle of 70° around one of the
endpoints of the side, and and angle of 50° around the other endpoint. (Which
way round does not matter – the resulting triangles will be congruent.)

Connecting the angle marks to the endpoints completes the triangle.
:::

::: tab
#### AAS

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has angles of 40° and 50°, and an included
side of length 5cm.

Again, we’ll start by constructing the first side of the triangle, which is 5cm
long.

And again, we’ll use a protractor to measure an angle of 40° around one of the
endpoints, and draw the second side of the triangle. However, we don’t yet know
where this side will end.

Instead, let’s pick any point around this line, pretend it’s the third vertex of
the triangle and measure an angle of 50°.

As you can see, this doesn’t quite work: the third side does not yet link up
with the vertex A. To fix this, we simply have to shift it: we draw a parallel
line that goes through A. (You already learned how to construct parallel lines
in a [previous course](/course/euclidean-geometry/geometric-construction).)

Now the two angles at the top are alternate angles, so they must be congruent
and both 50°. We can erase the incorrect, first line to get our completed AAS
triangle.
:::

::: tab
#### SSA
The SSA construction is slightly different. You might have noticed that “SSA”
was not in the list of congruence conditions above, so comparing SSA is two
triangles is not enough to confirm they are congruent. This will show you why:

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task} Draw the triangle that has sides of 4cm and 5cm, and a non-included
angle of 50°.

Like always, let’s start by drawing the first side of the triangle which is 5cm
long.

Next, let’s measure an angle of 50° around one of the endpoints and draw the
second side of the triangle. However, we don’t yet know where this side will
end.

The third side has o be 4cm long. Using a protractor we can draw a circle of
radius 4cm around the other endpoint of the original side.

The final vertex of the triangle is formed by the intersection of the circle and
the second line. However, in this case, there are two intersections!

These two triangles are clearly not congruent. This means that there are two
different triangles that have sides of 4cm and 5cm, as well as a non-included
angle of 50°. SSA is not enough to confirm two triangles are congruent.
:::
:::

---
> id: pythagoras
> class: no-border

## Pythagoras’ Theorem 

We have now reached an important point in geometry – being able to state and
understand one of the most famous [theorems](gloss:theorem) in all of
mathematics: __Pythagoras’ Theorem__. It is named after the ancient Greek
mathematician [Pythagoras of Samos](bio:pythagoras).

::: .theorem
::: column.grow
__Pythagoras’ Theorem__  
In any right-angled triangle, the square of the length of the
[__hypotenuse__](target:hypot) (the side that lies opposite the right angle) is
equal to the sum of the squares of the other two sides. In other words,
 
{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_The converse is also true: if the three sides in a triangle satisfy
a*{sup}2* + b*{sup}2* = c*{sup}2*, then it must be [[right-angled|acute|obtuse]]._
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")
      
      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-colour="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-colour="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-colour="white")
      
      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(a,c,b)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow
Right angles are everywhere, and that’s why Pythagoras’ Theorem is so useful.

Here you can see a __{.m-red}6m__ long ladder learning on a wall. The bottom of
the ladder is __{.m-blue}1m__ away from the wall. How far does it reach up the
wall?

Notice that there is a right-angled triangle formed by the ladder, the wall and
the ground. Using Pythagoras’ theorem, we get

    //- Ideal syntax:
    //- | `green(h^2) + blue(1^2)` | `red(6^2)`          |
    //- |          `=> green(h^2)` | `= blank(35)`       |
    //- |            `=> green(h)` | `= sqrt(35) = 5.92` |
    
    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92m</mn></td>

:::

{.reveal(when="blank-0")} Whenever you’ve got a right-angled triangle and know
two of its sides, Pythagoras can help you find the third one.

---
> id: pythagoras-proof

### Proving Pythagoras’ Theorem

Pythagoras’ theorem was known to ancient Babylonians, Mesopotamians,
Indians and Chinese – but Pythagoras may have been the first to find a formal,
mathematical proof.

There are actually many different ways to prove Pythagoras’ theorem. Here you
can see three different examples that each use a different strategy:

::: tab.proof-1

#### Rearrangement _{span.check(when="blank-0 blank-1")}_

::: column.grow

Have a look at the figure on the right. The square has side length _a_ + _b_,
and contains [four right-angled triangles](target:triangle), as well as a
[smaller square](target:square) of size [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]].

{.reveal(when="blank-0")} Now let’s rearrange the triangles in the square. The
result still contains the four right-angles triangles, as well as two squares
of size [[<msup><mi>a</mi><mn>2</mn></msup> and <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]].

{.reveal(when="blank-1")} Comparing the size of the red area
_{span.hover-target}before_ and _{span.hover-target}after_ the rearrangement, we
see that

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} This is the original proof that
[Pythagoras](bio:pythagoras) came up with. _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" x="b.add(e.subtract(a).flip)")
        circle(name="g" x="c.subtract(e.subtract(a))")
        circle(name="h" x="d.subtract(e.subtract(a).flip)")

        path.dark.thin(x="segment(a,e)" label="a")
        path.dark.thin(x="segment(e,b)" label="b")
        path.dark.thin(x="segment(a,h)" label="b")
        path.dark.thin(x="segment(h,d)" label="a")
        path.dark.thin(x="segment(e,h)" label="c")
        path.dark.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.dark.square(x="polygon(a,b,c,d)")
        path.dark.tri(x="polygon(a,e,h)" target="triangle")
        path.dark.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.dark.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.dark.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.dark.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(x-style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(x-style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Algebra _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow
Here we have the same figure as before, but this time we’ll use _algebra_ rather
than _rearrangement_ to prove Pythagoras’ theorem.

The large square has side length `a + b` and area
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} It consists of [four triangles](target:triangle), each
of size [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]],
and [one square](target:square) of size [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]].

{.reveal(when="blank-3 blank-4")} If we combine all of that information, we have

    //- Ideal syntax:
    //- |         `(a+b)^2` | `= 4 xx 1/2ab + c^2` |
    //- | `a^2 + 2ab + b^2` | `= 2ab + c^2`        |
    //- |       `a^2 + b^2` | `= c^2`              |

    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td>

{.reveal(when="blank-3 blank-4")} And, once again, we get Pythagoras’ theorem.
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg        
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" x="b.add(e1.subtract(a).flip)")
      circle(name="g1" x="c.subtract(e1.subtract(a))")
      circle(name="h1" x="d.subtract(e1.subtract(a).flip)")

      path.dark.thin(x="segment(a,e1)" label="a")
      path.dark.thin(x="segment(e1,b)" label="b")
      path.dark.thin(x="segment(a,h1)" label="b")
      path.dark.thin(x="segment(h1,d)" label="a")
      path.dark.thin(x="segment(e1,h1)" label="c")
      path.dark.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.dark.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.dark.tri(x="polygon(a,e1,h1)" target="triangle")
      path.dark.tri(x="polygon(c,g1,f1)" target="triangle")
      path.dark.tri(x="polygon(d,h1,g1)" target="triangle")
      path.dark.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Similar Triangles _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow
{.r} Here you can see another right-angled triangle. If we draw one of the
altitudes, it splits the triangle into two smaller triangle.
It also divides the hypotenuse _c_ into [two smaller parts](target:hypotenuse)
which we’ll call [{.step-target.i.pill.blue}x](target:x) and
[{.step-target.i.pill.green}y](target:y).
_{span.next-step} Continue_

{.r.reveal(when="next-0")} Let’s separate out the two smaller triangles, so that
it’s clearer to see how they are related…
_{span.next-step} Continue_

{.reveal(when="next-1")} Both smaller triangles [share one angle](target:angle)
with the original triangle. They also all have [one right angle](target:right).
By the AA condition, all thee triangles must be [[similar|congruent|right-angled]].

::: column(width=260)

    x-geopad.similar-triangle.label-halo(width=260): svg
      circle(x="B1")
      circle(x="X1")
      circle(x="C1")
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1)" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1)" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(x="A2")
      circle(x="X2")
      circle(x="C2")
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2)" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2)" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" x="point(220,100)")
      circle(name="B" x="point(40,100)")
      circle(name="C" x="point(170,20)")
      circle(name="X" x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(C,X,B)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(C,A,X)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} Now we can use the equations we already know about
similar polygons:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Continue_

{.reveal(when="next-2")} But remember that _c_ = [{.step-target.i.pill.blue}x](target:x) +
[{.step-target.i.pill.green}y](target:y). Therefore

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Once more, we’ve proven Pythagoras’ theorem! _{span.qed}_
:::

---
> id: pythagoras-2

Much about Pythagoras’ life is unknown, and no original copies of his work have
survived. He founded a religious cult, the _Pythagoreans_, that practiced a kind
of  “number worship”. They believed that all numbers have their own character,
and followed a variety of other bizarre customs.

::: column.grow
The Pythagoreans are credited with many mathematical discoveries, including
finding the first [irrational number](gloss:irrational), `sqrt(2)`. Irrational
numbers cannot be expressed as a simple fraction – a concept the Pythagoreans
found deeply troubling and (unsuccessfully) tried to cover up!
::: column(width=400)
    x-media(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pythagoreans celebrate sunrise” by Fyodor Bronnikov
:::

---
> id: distance-formula

### Calculating Distances

One of the most important application of Pythagoras’ Theorem is for calculating
distances. 

::: column.grow
{.r} On the right you can see two points in a coordinate system. We could
measure their distance using a ruler, but that is not particularly accurate.
Instead, let’s try using Pythagoras.
_{span.next-step} Continue_

{.reveal(when="next-0")} We can easily count the [horizontal distance](target:dx)
along the _x_-axis, and the [vertical distance](target:dy) along the _y_-axis.
If we draw those two lines, we get a [right-angled triangle](target:triangle).

{.reveal(when="next-0")} Using Pythagoras,

    table.eqn-system.reveal(when="next-0")
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mn class="step-target pill blue var" data-to="dx">${b.x-a.x}</mn><mn>2</mn></msup><mo>+</mo><msup><mn class="step-target pill red var" data-to="dy">${a.y-b.y}</mn><mn>2</mn></msup></td>
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mn class="var">${(b.x-a.x)*(b.x-a.x) + (a.y-b.y)*(a.y-b.y)}</mn></td>
      tr
        <td><mi>d</mi></td>
        <td><mo>=</mo><msqrt><mn class="var">${(b.x-a.x)*(b.x-a.x) + (a.y-b.y)*(a.y-b.y)}</mn></msqrt><mo>=</mo><mn class="var">${round(Math.sqrt((b.x-a.x)*(b.x-a.x) + (a.y-b.y)*(a.y-b.y)),4)}</mn></td>

::: column(width=300)

    x-geopad.label-halo(width=300 height=300 grid="25"): svg
      circle.move.pulsate(name="a" cx="2" cy="6" label="(${x},${11-y})")
      circle.move.pulsate(name="b" cx="9" cy="1" label="(${x},${11-y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${a.y-b.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

This method works for _any_ two points:

::: .theorem
__The Distance Formula__  
If you are given two points with coordinates  (`x_1`,`y_1`) and (`x_2`,`y_2`),
the distance between them is

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Pythagorean Triples

As you moved the [vertices of the triangle](->#tri-move) in the previous step,
you might have noticed that in most cases, the length of the hypothenuse _d_
ended up being a [[decimal number|fraction|integer]].
_{span.reveal(when="blank-0")}However there are a few examples of right-angled
triangles where the lengths of *all three sides* happens to be *whole numbers*._

---
> id: pythagorean-triples-1

::: column.grow
One famous example is the 3-4-5 triangle. Since `3^2 + 4^2 = 5^2`, any triangle
with sides of length 3, 4 and 5 must be right-angled.

The ancient Egyptians didn’t know about Pythagoras’ theorem, but they did know
about the 3-4-5 triangle. When building the pyramids, they used knotted ropes
of lengths 3, 4 and 5 to measure perfect right angles.
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Three integers like this are called [__Pythagorean Triples__](gloss:pythagorean-triple).
(3, 4, 5) is one example of a Pythagorean triple. If we multiply every number
by 2, we get another Pythagorean triple: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

We can think of these triples as grid points in a coordinate systems. For a
valid Pythagorean triples, the distance from the origin to the grid point has to
be a whole number. Using the coordinate system below, can you find any other
Pythagorean triples?

    figure: x-geopad.r.label-halo(width=450 height=450 grid=25)
      svg
        path(x="line(o,point(0,16))")
        path(x="line(o,point(1,17))")

        circle.move.pulsate(cx=4 cy=10 name="a")
        circle(x="point(0,17)" name="o")
        path.thick(x="polygon(o,a,point(a.x,o.y))")

      .label.var(x-style="left:${12.5+12.5*a.x}px; top:440px") ${a.x}
      .label.var(x-style="left:${12.5+25*a.x}px; top:${225+12.5*a.y}px") ${17-a.y}
      .label.var(x-style="left:${12.5+12.5*a.x}px; top:${225+12.5*a.y}px") ${sqrtDistance(a)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Do you notice any pattern in the
distribution of these points? 

    // The mathematician Euclid found a clever method for generating new
    // Pythagorean triples. First, we need to pick any two integers _m_ and _n_:
    // {.text-center} _m_ = ${m}{m|2|1,20,1} _{span.space}_ _n_ = ${n}{n|2|1,20,1}
    // Now we can calculate the three numbers that make up the triple:
    // {.text-center} `2mn =` ${2×m×n}, `m^2 - n^2 =` ${m×m-n×n},  `m^2 + n^2 =` ${m×m+n×n}
    // And there you have your pythagorean triple! You can check that a2 + b2 = c2.

----
> id: isosceles

## Isosceles and Equilateral Triangles

Other then right-angled triangles, there are a few other triangles with
special properties. In this section we’ll have a look at some of them.

### Isosceles Triangles

We say that a triangle is [__isosceles__](gloss:isosceles-triangle) if it has
two congruent sides. These congruent sides are called the __legs__ of the
triangle, while the third side is called the __base__.

{.todo} COMING SOON – Base angles theorem

{.todo} COMING SOON – Find the height of an Isosceles Triangles using Pythagoras

    // {.todo} The angles between the base and the congruent sides are
    // called base angles. The angle made by the two legs of the isosceles triangle is
    // called the vertex angle.
    // 
    // {.todo} Base Angles Theorem: The base angles of an isosceles triangle are congruent.
    // To prove the Base Angles Theorem, we will construct the angle bisector through
    // the vertex angle of an isosceles triangle.
    // 
    // {.todo} Isosceles Triangle Theorem: The angle bisector of the vertex angle in an
    // isosceles triangle is also the perpendicular bisector to the base.
    // 
    // {.todo} The converses of the Base Angles Theorem and the Isosceles Triangle Theorem are
    // both true. If two angles in a triangle are congruent, then
    // the opposite sides are also congruent. And if the perpendicular bisector of the base of
    // an isosceles triangle is also the angle bisector of the vertex angle.
    // 
    // {.todo} In other words, if △ABC is isosceles, AD⊥CB and CD≅DB, then ∠CAD≅∠BAD.
    // 
    // {.todo} Find the Height of an Isosceles Triangle
    // One way to use The Pythagorean Theorem is to identify the heights in isosceles
    // triangles so you can calculate the area.

---
> id: equilateral

### Equilateral Triangles

We say that a triangle is [__equilateral__](todo:equilateral-triangle) if all of
its sides  have the same length. You’ve [already
seen](/course/euclidean-geometry/geometric-construction) how to construct an
equilateral triangle using straight-edge and compass.

    // Any equilateral triangle is always also isosceles. From the base angle theorem
    // we know that angles opposite congruent sides in a triangle are also congruent.
    // In an equilateral triangle, all of the sides are congruent, so all of the angles
    // must also be congruent.
    // 
    // Since we know that the sum of all three angles is 180°, every individual angle
    // in an equilateral triangle must be [[60]]°.

{.todo} COMING SOON – Size of angles in an equilateral triangle

{.todo} COMING SOON – Area of an equilateral triangle

----
> id: trigonometry

## Trigonometry

So far we have seen relationships between the __angles__ of triangles (e.g.
they always sum up to 180°) and relationships between the __sides__ of triangles
(e.g. Pythagoras). But there is nothing that _connects_ the size of angles and
sides.

For example, if I know the three sides of a triangle, how do I find the size of
its angles – without drawing the triangle and measuring them using a protractor?
This is where __Trigonometry__ comes in!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
Imagine we have a right-angled triangle, and we also know one of the two other
angles, __{.m-red}α__. We already know that the longest side is called the
[__{.m-yellow}hypotenuse__](target:hyp). The other two are usually called the
[__{.m-green}adjacent__](target:adj) (which is next to angle __{.m-red}α__) and
the [__{.m-blue}opposite__](target:opp) (which is opposite angle __{.m-red}α__).
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(b,c,a)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse" target="hyp")
      path.blue(x="segment(b,c)" label="Opposite" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")

:::

There are many different triangles that have angles __{.m-red}α__ and 90°, but
from the [AA condition](gloss:triangle-aa) we know that they are all
[[similar|congruent]]:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Since all of these triangles are similar, we know that their sides are
proportional. In particular, the following ratios are the same for all of these
triangles:

    p.text-center
      mfrac
        mrow: mtext.m-blue.b Opposite
        mrow: mtext.m-yellow.b Hypotenuse
      span.space
      mfrac
        mrow: mtext.m-green.b Adjacent
        mrow: mtext.m-yellow.b Hypotenuse
      span.space
      mfrac
        mrow: mtext.m-blue.b Opposite
        mrow: mtext.m-green.b Adjacent

Let’s try to summarise this: we picked a certain value for __{.m-red}α__, and
got lots of similar, right-angled triangles. All of these triangles have the
same ratios of sides. Since __{.m-red}α__ was our only variable, there must be
some relationship between __{.m-red}α__ and those ratios.

These relationships are the __Trigonometric functions__ – and there are three of
them:

::: .theorem
The three Trigonometric functions are relationships between the angles and the
ratios of sides in a right-angles triangle. They each have a name, as well as
a 3-letter abbreviation:

::: column.grow

    ul
      li
        strong Sine:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Opposite
          mrow: mtext.m-yellow.b Hypotenuse
      li
        strong Cosine:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b Adjacent
          mrow: mtext.m-yellow.b Hypotenuse
      li
        strong Tangent:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Opposite
          mrow: mtext.m-green.b Adjacent

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(b,c,a)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Opposite")
      path.green(x="segment(a,c)" label="Adjacent")

:::
:::

---
> id: trig-functions-1

{.todo} COMING SOON – Abbreviations: sin x, cos y

{.todo} COMING SOON – Using calculators

{.todo} COMING SOON – Examples

{.todo} COMING SOON – Radians vs degrees, swapping the angles

{.todo} COMING SOON – Rationalize the denominator.

---
> id: inverse-trig

### Inverse Trignometric Functions 

{.todo} COMING SOON – Inverse functions

    // The word inverse is probably familiar to you. In mathematics, once you learn how
    // to do an operation, you also learn how to “undo” it. For example, you may
    // remember that addition and subtraction are considered inverse operations.
    // Multiplication and division are also inverse operations. In algebra you used
    // inverse operations to solve equations and inequalities. When we apply the word
    // inverse to the trigonometric ratios, we can find the acute angle measures within
    // a right triangle. Normally, if you are given an angle and a side of a right
    // triangle, you can find the other two sides, using sine, cosine or tangent. With
    // the inverse trig ratios, you can find the angle measure, given two sides.

    // On most scientific and graphing calculators, the buttons look like
    // [SIN−1],[COS−1], and [TAN−1]. Typically, you might have to hit a shift
    // button to access these functions.

---
> id: sine-cosine-rule

### Sine and Cosine Rules

So far, all you’ve learned about Trigonometry only works in right-angled
triangles. But most triangles are not right-angled, and there are two important
results that work for all triangles

::: column.grow
::: .theorem
__Sine Rule__  
In a triangle with sides _a_, _b_ and _c_, and angles _A_, _B_ and _C_,

{.text-center} `(sin a)/a = (sin b)/b = (sin c)/c`
:::

{.todo} COMING SOON – Explanation

    // {.todo} Use Law of Sines when given:
    // An angle and its opposite side.
    // Any two angles and one side.

::: column.grow
::: .theorem
__Cosine Rule__  
In a triangle with sides _a_, _b_ and _c_, and angles _A_, _B_ and _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`  
`b^2 = c^2 + a^2 - 2ca cos(B)`  
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

{.todo} COMING SOON – Explanation

    // {.todo} Even though there are three formulas, they are all very similar. First, notice
    // that whatever angle is in the cosine, the opposite side is on the other side of
    // the equal sign.
    // 
    // {.todo} Use Law of Cosines when given:
    // Two sides and the included angle.
    // All three sides.
:::

---
> id: trigonometry-4

{.todo} COMING SOON – Examples and applications

    // TODO Future stuff about trigonometry

---
> id: mountains

### The Great Trigonometric Survey

Do you still remember the quest to find the highest mountain on Earth from the
[introduction](/course/triangles-and-trigonometry/introduction)? With
Trigonometry, we finally have the tools to do it!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad(width=760 height=250 style="background: white"): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points")
        circle(name="b" x="point(185, 230)" target="points")
        circle(name="x" x="point(573, 7)" target="")
        circle(name="y" x="point(573, 230)" target="")

        path.fill.red(x="angle(x,a,b)" label="23°" target="angles ang" size=60)
        path.fill.blue(x="angle(x,b,y)" label="29°" target="ang1" size=50)
        path.fill(name="angle-b" x="angle(b,x,a)" label="β" target="b angles" size=100)
        path.fill.green(name="angle-a" x="angle(a,b,x)" label="α" target="a angles" size=25)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,b)" target="base right" label="5km")
        path.yellow(x="segment(b,x)" target="")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="d")
        path.yellow(x="segment(b,y)" target="right")
        path.yellow(x="segment(x,y)" target="right" label="height")

The surveyors in India measured the angle of the top of a mountain from [two
different positions](target:points), _{span.pill.step-target.yellow(data-to="base")}5km apart_.
The results were _{span.pill.step-target.red(data-to="ang")}23°_ and
_{span.pill.step-target.blue(data-to="ang1")}29°_.

Because _{span.pill.step-target.green(data-to="a")}angle α_ is a [complementary
angle](gloss:complementary-angles), we know that it must be [[151]]°.
_{span.reveal(when="blank-0")}Now we can use the sum of the internal angles of
a triangle to work out that *{span.pill.step-target(data-to="b")}angle β* is [[6]]°._

{.reveal(when="blank-1")} Now we know [all three angles](target:angles) of the
triangle, as well as _{span.pill.step-target.yellow(data-to="base")}one of the
sides_. This is enough to use the [[sine rule|cosine rule]] to find the distance
[_d_](target:d):

    table.eqn-system
      tr.reveal(when="blank-2")
        td
          mfrac
            mrow
              mo sin
              mn.pill.step-target.green(data-to="a") 151°
            mrow.md [[d|5]]
        td
          mo =
          mfrac
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°
            mrow.md [[5|d]]
      tr.reveal(when="blank-3 blank-4")
        td: mi d
        td
          mo =
          mo sin
          mn.pill.step-target.green(data-to="a") 151°
          mo ×
          mfrac
            mrow: mn.pill.step-target.yellow(data-to="base") 5
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°

      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td
          mo =
          mn.pill.yellow.step-target(data-to="d") 23.2 km

{.reveal(when="blank-3 blank-4" delay=2000)} There is one final step: let’s have
a look at the [big, right-angled triangle](target:right). We already know the
length of the hypotenuse, but what we really need is the [[opposite|adjacent]]
side. _{span.reveal(when="blank-5")}We can find it using the definition of
*sin*:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[height|23]]
            mrow.md [[23|height]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext height
        td
          mo =
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
          mo ×
          mn.pill.step-target.yellow(data-to="d") 23

      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td
          mo =
          mn.pill.step-target.yellow(data-to="height") 8.987 km

{.reveal(when="blank-6 blank-7" delay=2000)} And that is very close to the
actual height of Mount Everest, the highest mountain on Earth: 8,848m.
:::

---
> id: mountains-1

This explanation greatly simplifies the extraordinary work done by the
mathematicians and geographers working on the Great Trigonometrical Survey. They
started from sea level at the beach, measured thousands of kilometers of
distance, built surveying towers across the entire country and even accounted
for the curvature of Earth.

    figure: x-media(src="images/himalaya.jpg" width=760 height=320)

---
> id: applications
> class: no-border

## Applications

But triangles and trigonometry are not just useful for measuring the height of
mountains, and the tools and concepts you have learned are incredibly important
in countless areas of mathematics, science and engineering.

Triangles are special because they are particularly _strong_. They are the only
polygon that, when made out of wooden beams and hinges, will be completely
_rigid_ – unlike rectangles, for example, which you can easily push over.

{.todo} COMING SOON – Animations

---
> id: applications-1

This property makes triangles particularly useful in construction, where they
can carry heavy weights.

::: column(width=200)
    x-media(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} A “Truss bridge” is supported by triangular bars
::: column(width=200)
    x-media(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Triangles in high-voltage electricity Pylons
::: column(width=200)
    x-media(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Even bikes use triangles for stability.
:::

---
> id: applications-2
> goals: video

Triangles are also the simplest polygon, with the fewest sides. This makes them
particularly well suited to approximating complex curved surfaces. This is done
in physical building…

::: column(width=200)
    x-media(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} “The Gherkin”, a skyscraper in London
::: column(width=200)
    x-media(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Bank of China Tower in Hong Kong
::: column(width=200)
    x-media(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Courtyard of the British Museum in London
:::

::: column.grow
…but also in virtual worlds. In computer generated graphics (e.g. for movies or
video games), all surfaces are approximated using a “mesh” of tiny triangles.
Artists and software engineers need to know about geometry and trigonometry in
order to be able to move and transform these triangles realistically, and to
calculate their colour and texture.
::: column(width=220)
    x-media(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="images/tiger.mp4" width=480 height=270 credit="© UCTV, The STEAM Channel")
    //- src: https://www.youtube.com/watch?v=Y9PYzdFsVio

---
> id: applications-3

Many results from this course will be useful when studying bigger polygons like
quadrilaterals or pentagons in the future.


    // ### Euler Line
    // 
    // Let’s put all of this together… construct the centroid, the circumcenter and the
    // orthocenter in this triangle.
    // 
    // Now move the vertices of the triangle and observe what happens to these three
    // points.
    // 
    // It looks like they always lie on a single line: called the __Euler line__.

    // ### Determine if a Triangle is Acute, Obtuse, or Right
    // We can extend the converse of the Pythagorean Theorem to determine if a triangle
    // has an obtuse angle or is acute. We know that if the sum of the squares of the
    // two smaller sides equals the square of the larger side, then the triangle is
    // right. We can also interpret the outcome if the sum of the squares of the
    // smaller sides does not equal the square of the third.
    // 
    // Theorem: (1) If the sum of the squares of the two shorter sides in a right
    // triangle is greater than the square of the longest side, then the triangle is
    // acute. (2) If the sum of the squares of the two shorter sides in a right
    // triangle is less than the square of the longest side, then the triangle is obtuse.
    // 
    // In other words: The sides of a triangle are a,b, and c and c>b and c>a.
    // If a2+b2>c2, then the triangle is acute.
    // If a2+b2=c2, then the triangle is right.
    // If a2+b2<c2, then the triangle is obtuse.


    // ### Comparing Angles and Sides in Triangles
    // 
    // Theorem: If one side of a triangle is longer than another side, then the angle
    // opposite the longer side will be larger than the angle opposite the shorter side.
    // 
    // The SAS Inequality Theorem (Hinge Theorem): If two sides of a triangle are
    // congruent to two sides of another triangle, but the included angle of one
    // triangle has greater measure than the included angle of the other triangle,
    // then the third side of the first triangle is longer than the third side of the
    // second triangle.
    // 
    // SSS Inequality Theorem (also called the Converse of the Hinge Theorem): If two
    // sides of a triangle are congruent to two sides of another triangle, but the
    // third side of the first triangle is longer than the third side of the second
    // triangle, then the included angle of the first triangle is greater in measure
    // than the included angle of the second triangle.


    // ## Inscribed Similar Triangles 

    // If two objects are similar, corresponding angles are congruent and their sides
    // are proportional in length. Let’s look at a right triangle, with an altitude
    // drawn from the right angle. There are three right triangles in this picture,
    // △ADB,△CDA, and △CAB. Both of the two smaller triangles are similar to the larger
    // triangle because they each share an angle with △ADB. That means all three
    // triangles are similar to each other.
    // 
    // Inscribed Triangle Theorem: If an altitude is drawn from the right angle of any
    // right triangle, then the two triangles formed are similar to the original
    // triangle and all three triangles are similar to each other.
    // 
    // You are probably familiar with the arithmetic mean, which divides the sum of n
    // numbers by n. This is commonly used to determine the average test score for a
    // group of students. The geometric mean is a different sort of average, which
    // takes the nth root of the product of n numbers. In this text, we will primarily
    // compare two numbers, so we would be taking the square root of the product of two
    // numbers. This mean is commonly used with rates of increase or decrease.
    // 
    // Geometric Mean: The geometric mean of two positive numbers a and b is the number
    // x, such that ax=xb or x2=ab and x=ab−−√.
    // 
    // Geometric Mean Theorem #1: In a right triangle, the altitude drawn from the
    // right angle to the hypotenuse divides the hypotenuse into two segments. The
    // length of the altitude is the geometric mean of these two segments. In other
    // words, BCAC=ACDC.
    // 
    // Geometric Mean Theorem #2: In a right triangle, the altitude drawn from the
    // right angle to the hypotenuse divides the hypotenuse into two segments. The
    // length of each leg of the right triangle is the geometric mean of the lengths
    // of the hypotenuse and the segment of the hypotenuse that is adjacent to the leg.
    // In other words, BCAB=ABDB and DCAD=ADDB.
    // 
    // Both of these theorems are proved using similar triangles.
