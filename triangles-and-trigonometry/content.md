# Triangles and Trigonometry

> stage: intermediate
> description: descriptions
> warning: true
> next: polygons-and-polyhedra

    // http://www.livemint.com/Leisure/9tK3aB8EJvHxsWmqc8UxuI/The-men-who-measured-Earths-curves.html

---

## Introduction

::: column.grow
By the early 19th century, explorers had discovered most of the Earth. Trade and
transportation was booming between distant countries and colonies, and this
created a need for _accurate maps_ of the entire planet.

Today we have satellites that can take photos from above – but 200 years ago,
creating maps was a difficult and time consuming task. It was done by
mathematicians like [Radhanath Sikdar](bio:sikdar), who worked on the _Great
Trigonometrical Survey_: a century-long project to measure all of India,
including the Himalayan mountain range.

::: column(width=240)

    x-media.shift-1(src="images/theodolite.jpg" width=240 height=340 credit="Science&Society Picture Library")

{.caption} A _theodolite_, a surveying instrument used in India
:::

Of particular interest was the quest to find the highest mountain on Earth.
There were a few different candidates, but from hundreds of kilometers away, it
was difficult to tell which one was the highest.

But how to you measure the height of a mountain?

::: .sticky-wrap

    figure.sticky.mountain: include svg/mountain.svg

Today we can use satellites and GPS to measure the height of mountains to
within a few centimeters – but these did not exist when Radhanath was surveying
India.

Climbers use _altimeters_ to determine their altitude. These devices use the
difference in air pressure at different heights. However this would have
required someone to actually climb to the top of every mountain – an extremely
difficult feat that was not achieved until a century later.

You could also try using similar triangles, like we did in the
[previous chapter](/course/transformations-and-symmetry#similar-triangles).
This method requires knowing the distance to the [base of the mountain](target:base):
the point at sea level that directly below its summit. We can do this for trees
or lighthouses, but for mountains this point is hidden underneath hundreds
of meters of rock.
:::

But there are more advanced geometric techniques, which Radhanath used to
discover the highest mountain on Earth – it is now called _Mount Everest_. His
measurement is only a few meters off today's official height of 8848 meters.

In this chapter you will learn about many different features and properties of
triangles. These will allow you to accurately measure the height of mountains,
but they are also of fundamental importance in many other areas of mathematics
and science.

---

## Properties of Triangles

Let's start simple: a triangle is a closed shape that has three sides (which
are line segments) and three vertices (the points where the sides meet). It also
has three internal angles, and we already know that the sum of them is always
[[180]]°.

We can classify triangles by the size of their angles:

::: column(width=220)
{.todo} image

{.caption} A __right-angled triangle__  
has one right angle.
::: column(width=220)
{.todo} image

{.caption} An __obtuse triangle__  
has one obtuse angle.
::: column(width=220)
{.todo} image

{.caption} An __acute triangle__  
has three acute angles.
:::

---

::: column.grow
For convenience, we usually label triangles in the same way. The vertices are
labelled with capital letters [_A_, _B_ and _C_](target:vertex), the sides are
labelled with lowercase letters [_a_, _b_ and _c_](target:side), and the angles
are labelled with Greek letters [α, β and γ](target:angle) ("alpha",
"beta" and "gamma").
 
The [side that lies _opposite_ vertex _A_](target:X) is labeled _a_, and the
[angle that lies right next to _A_](target:Y) is labelled α. The same pattern
works for _B_ and _C_.
::: column(width=220)

    x-geopad.sticky(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=20 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=20 cy=180 label="B" target="vertex")
      circle.move.green(name="c" cx=200 cy=160 label="C" target="vertex")
      path.red(x="angle(c,a,b)" label="α" target="angle Y")
      path.blue(x="angle(a,b,c)" label="β" target="angle")
      path.green(x="angle(b,c,a)" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---

### Medians 

::: column(width=300)

    x-geopad.sticky.middle(tools="move|point|line"): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint")
      
      path.red(x="segment(a,bc)")
      path.blue(x="segment(b,ac)")
      path.green(x="segment(c,ab)")
      
      circle.yellow(x="triangle(a,b,c).centroid")

::: column.grow
Here you can see a triangle as well as the midpoints of its three sides.

A __median__ of a triangle is a line segment that joins a vertex and the
midpoint of the opposite side. Draw the three medians of this triangle. What
happens as you move the vertices of the triangle?

It seems like the medians always [[intersect in one point|have the same length|divide each other in the middle]].
_{span.reveal(when="blank-0")}This point is called the __centroid__._

Medians always divide each other in the [ratio 2:1](target:ratio). For each of
the three medians, the distance from the vertex to the centroid is always twice
as long as the distance from the centroid to the midpoint.
:::

---

The centroid is also the “balancing point” of a triangle. If you cut a triangle
out of cardboard, you can balance it on a pencil if you place it exactly over
the centroid. Or you could hang it perfectly level from a piece of string, if
you attach it to the centroid:
 
::: column(width=260)
{.todo} image
::: column(width=260)
{.todo} image
:::

::: column.grow
This works because the weight of the triangle is evenly distributed around the
centroid. In physics, this point is often called the _center of mass_.

Any straight line that goes through the centroid divides the triangle into two
parts that have exactly the same area.
::: column(width=220)
{.todo} interactive
:::

---

### Perpendicular Bisectors and Circumcircle

::: column(width=300)

    x-geopad.sticky.middle(tools="move|point|line|perpBisector"): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
    
      path.thin.red(x="line(a,b).perpendicularBisector")
      path.thin.blue(x="line(a,c).perpendicularBisector")
      path.thin.green(x="line(b,c).perpendicularBisector")

      path(x="triangle(a,b,c)")
      path.yellow(x="triangle(a,b,c).circumcircle")
      circle.yellow(x="triangle(a,b,c).circumcircle.c", r=4)

      circle.red(x="line(a,b).midpoint")
      circle.blue(x="line(a,c).midpoint")
      circle.green(x="line(b,c).midpoint")


::: column.grow
You already know that the perpendicular bisector of a line is the perpendicular
line that goes through its [[midpoint|endpoints]]. Draw the perpendicular
bisector of all three sides of a triangle.

{.reveal(when="draw")} Like before, the three perpendicular bisectors meet in a
single point. And again, this point has a special property.

Any point on a perpendicular bisector has the same distance from the endpoints
of the lines it bisects. For example, any point on the [blue bisector](target:bisector-a)
has the same distance from A and B and any point on the [red bisector](target:bisector-b)
has the same distance from B and C.

The intersection point lies on all three perpendicular bisectors, so it must
have the same distance from all vertices of the triangle.

This means we can draw a circle around it that touches all the vertices. This
circle is called the __circumcircle__ of the triangle, and the center is called
the __circumcenter__.
:::

---

This also means that if we are given _any_ three points, we can always find a
circle that goes through all three of them. (Unless the points are collinear,
in which case they all lie on a straight line.)

---

### Angle Bisectors and Incircle

You're probably getting the hang of this now: we pick a certain construction, do
it three times for all sides/angles of the triangles, and then we work out
what's special about their intersection.

::: column(width=300)
  
    x-geopad.sticky.middle(tools="move|point|line|angleBisector"): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
    
      path.thin.red(x="angle(a,b,c)")
      path.thin.blue(x="angle(b,c,a)")
      path.thin.green(x="angle(c,a,b)")

      path.thin.blue(x="angle(a,b,c).bisector")
      path.thin.green(x="angle(b,c,a).bisector")
      path.thin.red(x="angle(c,a,b).bisector")

      path(x="segment(a,b)" label="a")
      path(x="segment(a,c)" label="b")
      path(x="segment(b,c)" label="c")

      path.yellow(x="triangle(a,b,c).incircle")
      circle.yellow(x="triangle(a,b,c).incircle.c")


::: column.grow
You already know that the angle bisector divides an angle exactly in the middle.
Draw the angle bisector of the three angles in this triangle.

{.reveal(when="draw")} And – once again – all three lines intersect in one
point. You probably expected something like this, but it is important to notice
that there is no obvious reason why this should happen!

Points that lie on an angle bisector have the same distance from the two lines
that form the angle. For example any point on the blue bisector has the same
distance from side _a_ and side _b_. The same is true for the other bisectors.

The intersection point lies on all three bisectors. Therefore it must have the
same distance from all three sides of the triangle.

This means we can draw a circle around it that just touches all three sides.
This circle is called the __incircle__ of the triangle, and the center is called
the __incenter__.
:::

---

### Area and Altitudes

Finding the area of a rectangle is easy: you simply multiply width by height.
Finding the area of a triangle is a bit less obvious…

::: column.grow
Let's start by simply "trapping" a triangle inside a rectangle. The width of
the rectangle is the length of the bottom side (which is called the _base_).

The height of the triangle is the perpendicular distance from the base to the
opposite vertex.

The height divides the triangle into two smaller parts. Notice how each of the
smaller triangles exactly fills the remaining gaps in the rectangle. This means
that the rectangle is twice as large as the triangle.

We can easily work out the area of the rectangle, so the area of the triangle
must be half that:

{.text-center} `A = 1/2 xx "base" xx "height"`
::: column(width=260)
{.todo} image
:::

The lines that go through a vertex of a triangle and are perpendicular to the
opposite side are called the __altitudes__ the triangle.

Every triangle has three altitudes, depending on which of the three sides you
pick as base. You can use any altitude to calculate the area of a triangle, and
they all give the same result.

::: column(width=300)

    x-geopad.sticky.middle(tools="move|point|line"): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
      
      path(x="triangle(a,b,c)")
      path.red(x="line(a,b).perpendicular(c)")
      path.blue(x="line(a,c).perpendicular(b)")
      path.green(x="line(b,c).perpendicular(a)")
      circle.yellow(x="triangle(a,b,c).orthocenter")

::: column.grow
Like the medians, perpendicular bisectors and angle bisectors, the three
altitudes of a triangle intersect in a single point. This is called the
__orthocenter__ of the triangle.

In acute triangles, the orthocenter [[lies inside|lies outside|is a vertex of]]
the triangle.

In right-angled triangles, the orthocenter [[is a vertex of|lies inside|lies outside]]
the triangle. Two of the altitudes are actually just sides of the triangle.

In obtuse triangles, the orthocenter [[lies outside|lies inside|is a vertex of]]
the triangle.
:::

---

### Triangle Midsegments

::: column(width=300)

    x-geopad.sticky.middle(tools="move|point|line"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path.red(x="triangle(p,q,r)")

::: column.grow
A __midsegment__ is a line segment that connects two midpoints of a triangle.
Draw the three midsegments of this triangle.

As you can see, the midsegments split the triangle into [[4]] smaller ones. It
turns out that all of them are congruent – even the upside down one. They are
also all similar to the original, large triangle (with a scale factor of 2).

This allows us to deduce some important facts about the midsegments of
triangles, which can be summarised un the __Midsegment Theorem__:

::: .theorem
__Midsegment Theorem__  
A midsegment of a triangle is parallel to its opposite side, and exactly half
the length of that side.
:::
:::

---
> id: triangleInequality

## The Triangle Inequality

If I give you any three numbers, can you make a triangle that has those side
lengths? Why not give it a try:

    .inequality.row
      div(style="width:160px")
        .item #[.number 5,]#[.number 6,]#[.number 7] #[span.check]
        .item #[.number 3,]#[.number 9,]#[.number 9] #[span.check]
        .item #[.number 2,]#[.number 4,]#[.number 8]
        .item #[.number 4,]#[.number 6,]#[.number 7] #[span.check]
        .item #[.number 1,]#[.number 2,]#[.number 6]
      .grow
        x-geopad(height=360): svg
          circle.move(name="a" cx=75 cy=75)
          circle.move(name="b" cx=50 cy=250)
          circle.move(name="c" cx=250 cy=200)
          path.red(x="segment(a,b)" label="${round(distance(a,b)/50)}")
          path.blue(x="segment(b,c)" label="${round(distance(b,c)/50)}")
          path.yellow(x="segment(a,c)" label="${round(distance(a,c)/50)}")

---

It seems like there are a few cases where three numbers simply _cannot_ make a
triangle. This particularly happens when one side is much longer than the
other two.

::: column.grow
Think about the three sides of a triangle as metal rods, connected with hinges.
Let's place the longest rod in the middle and the shorter ones on either side.

Now it is easy to see that it is impossible to link up the ends of the shorter
rods, if their combined length is less than the length of the larger rod.
::: column(width=300)
{.todo} image
:::

Let's rewrite this observation in mathematical terms:

::: .theorem
__The Triangle Inequality__  
The sum of the lengths of any two sides of a triangle must be greater than the
length of the third.
:::

In other words, if a triangle has sides _a_, _b_ and _c_, then we know that
`a+b>c`, `a+c>b` and `b+c>a`.

---

The triangle inequality allows us to quickly check if three numbers can make a
triangle. Which of these ones do?

    x-picker
      .item.text-center 4, 6, 9
      .item.text-center(error="This can't be a triangle, because 1 + 2 is not bigger than 3.") 1, 2, 3
      .item.text-center 3, 7, 8
      .item.text-center 2, 3, 4
      .item.text-center 2, 4, 7
      .item.text-center 1, 5, 8

---

The triangle inequality also allows us to estimate the length of the third side
of a triangle, if we know the length of the other two.

Imagine that a triangle has two sides of length 4 and 6. Let's call _c_ the
length of the third side. Then we know that

{.text-center} `4+6>c`, `4+c>6` and `6+c>4`

We can rearrange these inequalities to give [[2]] `<c<` [[10]]. The length of
side _c_ has to be between 2 and 10.

---

::: column.grow
We can think of this again using physical objects: two sides of the triangle are
metal rods of length 4 and 6, and the third side is a rubber band that can
expand or contract.

Now you can see that the rubber band will always be [longer than](target:small)
`6-4=2` and [shorter than](target:big) `6+4=10`.
::: column(width=300)

    x-geopad(width=300 height=200): svg
      radialGradient#wood
        stop(offset="0%" stop-color="#925313")
        stop(offset="100%" stop-color="#5D3D1D")
      circle.move(name="a" cx=150 cy=150)
      circle.move(name="b" cx=70 cy=150 project="circle(a,80)")
      circle.move(name="c" cx=250 cy=50 project="circle(a,120)")
      path(x="segment(a,b)" style="stroke: url(#wood); stroke-width: 5px" label="4")
      path(x="segment(a,c)" style="stroke: url(#wood); stroke-width: 5px" label="6")
      path.rubber(x="segment(b,c)" style="stroke: #00cca6; stroke-width: ${200/distance(b,c)}px" label="${round(distance(b,c)/20)}")

:::

Note that these are _strict_ inequalities. If the third side is _exactly_ 2 or
10, we get a straight line and not a triangle. However 2.1 or 9.9 would be
enough to form a triangle.

---

## Triangles Congruence

Now that we can check if three sides can form a triangle, let's think about how
we would actually _construct_ a triangle with these sides.

::: column(width=300)
{.todo} image
::: column.grow
{.task} Draw the triangle with sides 4cm, 5cm and 6cm.

First, let's use a ruler to draw one of the sides (usually the longest one). Now
we already have [[two|one|three]] of the vertices of the triangle – the
challenge is to find the third one.

Let's use the ruler to widen our compass to exactly 4cm, and draw a circle
around one of the vertices. Then, let's widen the compass to 5cm, and draw a
circle around the other vertex.

The third vertex of the triangle is the [[intersection|center|overlap]] of the
two circles. Now we can simply connect them to form a triangle.

The circles actually intersect [[twice]]: once at the top and once at the
bottom. We can pick either of these intersections, and the resulting two
triangles are congruent.
:::

Can you see how this example relates to the triangle inequality? If the first
side is longer than the sum of the others, the two circles would never intersect.

---

### Congruence Conditions

But is it possible to construct _a different_ triangle with the same three
sides?

We already saw two triangles above, but they where both congruent. In fact, any
two triangles that have the same three side lengths are congruent. This is
called the [__SSS Congruence Condition__](gloss:triangle-sss) for triangles
("Side-Side-Side").

We now have two conditions for triangles: "AA" means that two triangles are
[[similar|congruent|transformations]], and "SSS" means that two triangles are
[[congruent|similar|equal]]. There are a few more congruence conditions:

::: .theorem
Two triangles are congruent if any of the following conditions are met:

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

You can think of these conditions as "shortcuts": to check if two triangles are
congruent, you just need to check one of the conditions above.

Once you know that two triangles are congruent, you know that _all_ of their
corresponding sides and angles are congruent. This is often called __CPCTC__, or
"Corresponding Parts of Congruent Triangles are Congruent".

It is interesting to note that all conditions consists of [[3]] different values
(either sides or angles)!

---

### Constructing Triangles

At the beginning of this section, we saw how to construct a triangle if we know
its three sides. Similarly, there are ways to construct triangles for each of
the congruence conditions above.

::: tab
#### SAS

::: column(width=300)
{.todo} image
::: column.grow
{.task} Draw the triangle that has sides of 5cm and 3cm, and an included
angle of 40°.

Like before, we start by drawing one of the sides of the triangle.

Next, use a protractor to measure a 40° angle around one of the two vertices.
Let's mark this angle with a point.

We can connect the vertex to our measurement, to form the second side of the
triangle.

We know that this side has to be 3cm long, so let's measure that distance with a
ruler and then mark the third vertex of the triangle.

Finally, we can connect the last two vertices, to complete the triangle.
:::

Of course, we could have drawn the 3cm side first, or picked the other vertex
to draw the 40° angle around. However in all those cases, the resulting
triangles would have been congruent to this one.

::: tab
#### ASA

::: column(width=300)
{.todo} image
::: column.grow
{.task} Draw the triangle that has angles of 70° and 50°, and an included
side of length 5cm.

Let's start by drawing the first side, using a ruler to measure 5cm.

Now let's use a protractor to measure an angle of 70° around one of the
endpoints of the side, and and angle of 50° around the other endpoint. (Which
way round does not matter – the resulting triangles will be congruent.)

Connecting the angle marks to the endpoints completes the triangle.
:::

::: tab
#### AAS

::: column(width=300)
{.todo} image
::: column.grow
{.task} Draw the triangle that has angles of 40° and 50°, and an included
side of length 5cm.

Again, we'll start by constructing the first side of the triangle, which is 5cm
long.

And again, we'll use a protractor to measure an angle of 40° around one of the
endpoints, and draw the second side of the triangle. However, we don't yet know
where this side will end.

Instead, let's pick any point around this line, pretend it's the third vertex of
the triangle and measure an angle of 50°.

As you can see, this doesn't quite work: the third side does not yet link up
with the vertex A. To fix this, we simply have to shift it: we draw a parallel
line that goes through A. (You already learned how to construct parallel lines
in a previous chapter.)

Now the two angles at the top are alternate angles, so they must be congruent
and both 50°. We can erase the incorrect, first line to get our completed AAS
triangle.
:::

::: tab
#### SSA
The SSA construction is slightly different. You might have noticed that "SSA"
was not in the list of congruence conditions above, so comparing SSA is two
triangles is not enough to confirm they are congruent. This will show you why:

::: column(width=300)
{.todo} image
::: column.grow
{.task} Draw the triangle that has sides of 4cm and 5cm, and a non-included
angle of 50°.

Like always, let's start by drawing the first side of the triangle which is 5cm
long.

Next, let's measure an angle of 50° around one of the endpoints and draw the
second side of the triangle. However, we don't yet know where this side will
end.

The third side has o be 4cm long. Using a protractor we can draw a circle of
radius 4cm around the other endpoint of the original side.

The final vertex of the triangle is formed by the intersection of the circle and
the second line. However, in this case, there are [[2]] intersections!

These two triangles are clearly not congruent. This means that there are two
different triangles that have sides of 4cm and 5cm, as well as a non-included
angle of 50°. SSA is not enough to confirm two triangles are congruent.
:::
:::

---
> class: no-border

## Pythagoras’ Theorem 

We have now reached an important point in geometry – being able to state and
understand one of the most famous theorems in all of mathematics: __Pythagoras’
Theorem__. It is named after the ancient Greek mathematician [Pythagoras of
Samos](bio:pythagoras).

::: .theorem
::: column.grow
__Pythagoras’ Theorem__  
In a right angles triangle, the square of the hypotenuse (the longest side) is
equal to the sum of the squares of the other two sides. In other words,
 
{.text-center} `a^2 + b^2 = c^2`
::: column(width=220)
{.todo} image
:::
:::

The converse is also true: if the three sides in a triangle satisfy
`a^2 + b^2 = c^2`, then it must be right-angled.

---

{.todo} TODO One application

---
> id: pythagorasProof

### Proving Pythagoras’ Theorem

Pythagoras’ theorem was known to ancient Egyptians, Babylonians, Mesopotamians,
Indians and Chinese – but Pythagoras may have been the first to find a formal
proof.

There are actually many different ways to prove Pythagoras' theorem. Here you
can see a few of them:

::: tab.proof-1

#### Rearrangement _{span.check(when="blank-0")}_

::: column.grow

Have a look at the figure on the right. The square has side length _a_ + _b_,
and contains four right-angled triangles, as well as a smaller square of
size [[c|a – b|a + b]].

Now let's rearrange the triangles in the square. The result still contains the
four right-angles triangles, as well as two squares of size _a_ and _b_.

Comparing the size of the squares _before_ and _after_ the rearrangement, we
see that

{.text-center} `a^2 + b^2 = c^2`.

This is the original proof that Pythagoras came up with.

::: column(width=240)

    x-geopad(width=240): svg
    
      circle(name="a" x="point(20,20)")
      circle(name="b" x="point(220,20)")
      circle(name="c" x="point(220,220)")
      circle(name="d" x="point(20,220)")
      
      circle.move(name="e" cx=100 cy=20 project="segment(a,b)")
      circle(name="f" x="b.add(e.subtract(a).flip)")
      circle(name="g" x="c.subtract(e.subtract(a))")
      circle(name="h" x="d.subtract(e.subtract(a).flip)")

      path.red.fill(x="polygon(a,b,c,d)")
      path.blue.fill(x="polygon(a,e,h)")
      path.blue.fill(x="polygon(b,f,e).shift(0,x*distance(h,a))")
      path.blue.fill(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))")
      path.blue.fill(x="polygon(d,h,g).shift(x*distance(e,a),0)")
      path(x="polygon(a,b,c,d)")

    x-slider(steps=100)

:::
::: tab.proof-2

#### Similar Triangles

::: column.grow

Let's draw the altitude of this right-angled triangle. It splits the original
triangle into two smaller triangles.

Now comes the key observation: both smaller triangles are [similar](gloss:triangle-aa)
to each other, and to the original triangle. It's not very obvious like this,
but it becomes clearer when we separate and rotate the smaller triangles.

To confirm that the triangles are similar, we simply need to check that they all
have [[two equal angles|three equal angles|the same three sides]].

* Clearly all triangles have one [[right angle|obtuse angle|]].
* Two of the triangles share the same corner, so those two angles must also be
  equal.
* And finally, XXX

Therefore the three triangles are similar. 

::: column(width=240)

{.todo} graphic

:::
::: tab.proof-3

#### Proof 3

::: column.grow

Like Proof 1, this proof involves rearranging geometric shapes.

::: column(width=240)

{.todo} graphic

:::
:::

Much about Pythagoras’ life is unknown, and no original copies of his work have
survived. He founded a religious cult, the Pythagoreans, that practiced a kind
of  "number worship". They believed that all numbers have their own character,
and followed a variety of other bizarre customs.

::: column.grow
The Pythagoreans are credited with many mathematical discoveries, including
finding the first irrational number, `sqrt(2)`. Irrational numbers cannot be
expressed as a simple fraction, a concept the Pythagoreans found deeply
troubling and even tried to cover up.
::: column(width=400)
    x-media(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} "Pythagoreans celebrate sunrise" by Fyodor Bronnikov
:::

---

### Calculating Distances

{.todo} The most important application of Pythagoras' Theorem is for calculating
distances. 

{.todo} TODO

---

{.todo} Another application of the Pythagorean Theorem is the Distance Formula.

{.todo} First, draw the vertical and horizontal lengths to make a right triangle. Then,
use the differences to find these distances.
Now that we have a right triangle, we can use the Pythagorean Theorem to find d.

{.todo} Distance Formula: The distance A(x1,y1) and B(x2,y2) is `d=sqrt((x1−x2)2+(y1−y2)2)`.

---

### Pythagorean Triples

There are infinitely many right angled triangles, that all satisfy Pythagoras'
Theorem. What's much more interesting is triangles where _a_, _b_ and _c_ all
happen to be _whole numbers_. Three numbers like that are called __Pythagorean
Triples__.

{.todo} One of the most famous examples is 3, 4 and 5 – because `3^2 + 4^2 = 5^2`. The
ancient Egyptians didn't know about Pythagoras' Theorem but they did know that
a triangle with sides 3, 4 and 5 makes right angles. They used this fact to
cut perfect angles for blocks that formed the pyramids.

{.todo} If we multiply every number by a factor of 2 we get another Pythagorean triple, (6, 8, 10). Other triples include (5, 12, 13) or (8, 15, 17).

{.todo} Move the two sliders below. Can you find any more Pythagorean triples?

{.todo} interactive

---

{.todo} Euclid found a simple formula for generating new Pythagorean triples: take any two integers m = 2 and n = 1 and calculate twice their product, the difference of their squares, and the sum of their squares:

{.todo} a = 2 × 2 × 1 = 4	b = 22 – 12 = 3	c = 22 + 12 = 5
You can check that, in all these cases, we have a2 + b2 = c2.

----

## Isosceles and Equilateral Triangles

### Isosceles Triangles

We say that a triangle is __isosceles__ if it has two congruent sides. These
congruent sides are called the __legs__ of the triangle, while the third side
is called the __base__.

{.todo} The angles between the base and the congruent sides are
called base angles. The angle made by the two legs of the isosceles triangle is
called the vertex angle.

{.todo} Base Angles Theorem: The base angles of an isosceles triangle are congruent.
To prove the Base Angles Theorem, we will construct the angle bisector through
the vertex angle of an isosceles triangle.

{.todo} Isosceles Triangle Theorem: The angle bisector of the vertex angle in an
isosceles triangle is also the perpendicular bisector to the base.

{.todo} The converses of the Base Angles Theorem and the Isosceles Triangle Theorem are
both true. If two angles in a triangle are congruent, then
the opposite sides are also congruent. And if the perpendicular bisector of the base of
an isosceles triangle is also the angle bisector of the vertex angle.

{.todo} In other words, if △ABC is isosceles, AD⊥CB and CD≅DB, then ∠CAD≅∠BAD.

{.todo} Find the Height of an Isosceles Triangle
One way to use The Pythagorean Theorem is to identify the heights in isosceles
triangles so you can calculate the area.

---

### Equilateral Triangles

We say that a triangle is __equilateral__ if all of its sides  have the same
length. You've [already seen](/course/euclidean-geometry) how to construct an
equilateral triangle using straight edge and compass.

Any equilateral triangle is always also isosceles. From the base angle theorem
we know that angles opposite congruent sides in a triangle are also congruent.
In an equilateral triangle, all of the sides are congruent, so all of the angles
must also be congruent.

Since we know that the sum of all three angles is 180°, every individual angle
in an equilateral triangle must be [[60]]°.

{.todo} Area of an equilateral triangle

----

## Trigonometry

So far we have seen relationships between the angles of triangles (e.g.
they always sum up to 180°) and relationships between the sides of triangles
(e.g. Pythagoras). But there is nothing that _combines_ the size angles and
sides.

For example, if I know the three sides of a triangle, how do I find the size of
its angles – without drawing the triangle and measuring them using a protractor?
This is where Trigonometry comes in!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---

::: column.grow
Imagine we have a right-angled triangle, and we also know one of the two other
angles, _α_. We already know that the longest side is called the hypotenuse. The
other two are usually called the Adjacent (which is next to angle _α_) and the
Opposite (which is opposite angle _α_).
::: column(width=240)
{.todo} image
:::

There are lots of triangles that have angles α and 90°, but from the
[AA condition](gloss:triangle-aa) we know that they are all
[[similar|congruent]]:

{.todo} image of lots of similar triangles

---

Since all of these triangles are similar, we know that their sides are
proportional. In particular, the following ratios are the same for all of them:

{.text-center} `"Opposite"/"Hypotenuse"`, `"Adjacent"/"Hypotenuse"`, 
`"Opposite"/"Adjacent"`

So let's summarise: we pick a certain value for _α_, and we get lots of similar,
right-angled triangles. All of these triangles have the same ratios of sides.
Since _α_ was the only variable, there must be some relationship between _α_ and
those ratios.

These relationships are the __Trigonometric functions__ – and there are three of
them:

::: .theorem
The three Trigonometric functions are relationships between the angles and the
ratios of sides in a right-angles triangle. They each have a name, as well as
a 3-letter abbreviation:

::: column.grow
* Sine: `sin(α) = "Opposite"/"Hypotenuse"`
* Cosine: `sin(α) = "Adjacent"/"Hypotenuse"`
* Tangent: `sin(α) = "Opposite"/"Adjacent"`
::: column(width=240)
{.todo} image
:::
:::

{.todo} abbreviations: sin x, cos y

{.todo} Usually you won't be asked to calculate trigonometric functions yourself
– just use the sin, cos and tan keys on a calculator.

{.todo} Let's have a look at a few examples:

{.todo} examples

{.todo} radians not degrees, swapping the angles

{.todo} Use the Pythagorean Theorem to find the missing side (if there is one).
The tangent ratio can be bigger than 1 (the other two cannot).
If there is a radical in the denominator, rationalize the denominator.

---

### Inverse Trignometric Functions 

{.todo} The word inverse is probably familiar to you. In mathematics, once you learn how
to do an operation, you also learn how to “undo” it. For example, you may
remember that addition and subtraction are considered inverse operations.
Multiplication and division are also inverse operations. In algebra you used
inverse operations to solve equations and inequalities. When we apply the word
inverse to the trigonometric ratios, we can find the acute angle measures within
a right triangle. Normally, if you are given an angle and a side of a right
triangle, you can find the other two sides, using sine, cosine or tangent. With
the inverse trig ratios, you can find the angle measure, given two sides.

{.todo} Inverse Tangent: tan−1 or arctan. The “-1” indicates inverse.
Inverse Sine: sin−1 or arcsin.
Inverse Cosine: cos−1 or arccos.

{.todo} On most scientific and graphing calculators, the buttons look like
[SIN−1],[COS−1], and [TAN−1]. Typically, you might have to hit a shift
button to access these functions.

---

### Sine and Cosine Rules

So far, all you've learned about Trigonometry only works in right-angled
triangles. But most triangles are not right-angled, and there are two important
results that work for all triangles

::: column.grow
::: .theorem
__Sine Rule__  
In a triangle with sides _a_, _b_ and _c_, and angles _A_, _B_ and _C_,

{.text-center} `(sin a)/a = (sin b)/b = (sin c)/c`
:::

{.todo} Use Law of Sines when given:
An angle and its opposite side.
Any two angles and one side.

::: column.grow
::: .theorem
__Cosine Rule__  
In a triangle with sides _a_, _b_ and _c_, and angles _A_, _B_ and _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`  
`c^2 = a^2 + b^2 - 2ab cos(C)`  
`c^2 = a^2 + b^2 - 2ab cos(C)`
:::

{.todo} Even though there are three formulas, they are all very similar. First, notice
that whatever angle is in the cosine, the opposite side is on the other side of
the equal sign.

{.todo} Use Law of Cosines when given:
Two sides and the included angle.
All three sides.
:::

{.todo} applications

{.todo} future stuff about trigonometry

---

### The Great Trigonometric Survey

Do you still remember the quest to find the highest mountain on Earth from the
beginning of the chapter? With Trigonometry, we finally have the tools to do it!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad(width=760 height=250 style="background: white"): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points t1 t2")
        circle(name="b" x="point(185, 230)" target="points compl t1")
        circle(name="x" x="point(573, 7)" target="t1 t2")
        circle(name="y" x="point(573, 230)" target="t2")
        path.red(x="angle(b,a,x)" target="t1 t2")
        path.blue(x="angle(y,b,x)" target="compl")
        path.blue(x="angle(a,x,b)" target="t1")
        path(x="angle(a,b,x)" target="compl t1")
        path(x="angle(b,y,x)")
        path.yellow(x="segment(a,b)" target="compl t1 t2" label="20km")
        path.yellow(x="segment(b,x)" target="compl t1")
        path.yellow(x="segment(a,x)" target="t1 t2" label="d")
        path.yellow(x="segment(b,y)" target="compl t2")
        path.yellow(x="segment(x,y)" label="h" target="t2")

The surveyors in India measured the angle of a mountain from [two different
positions](target:points) – and then they measured the distance between those
positions.

Angle A is a [complementary angle](target:compl), so it must be [[123]]°. Now
we can use the sum of the [internal angles of a triangle](target:t1) to
work out that angle B is is [[12]]°.

Now we know all three angles, as well as one of the sides in the [left
triangle](target:t1). This is enough to use the [[sine rule|cosine rule]]
to find the distance _d_:

{.text-center} `(sin(123))/d = (sin(12))/12`  
`=> d = ` [[21754]]

There is one final step: let's have a look at the [big, right-angled
triangle](target:t2). We already know the length of the hypotenuse, but what we
really need is the [[opposite|adjacent]] side. We can find it using the
definition of _sin_:

{.text-center} `sin(24) = "height"/21754`  
`=> "height" = ` [[8848]]

And that is Mount Everest – the highest mountain on Earth.
:::

This explanation greatly simplifies the extraordinary work done by the
mathematicians and geographers working on the Great Trigonometrical Survey. They
started from sea level at the beach, measured thousands of kilometers of
distance, built surveying towers across the entire country and even accounted
for the curvature of Earth.

    figure: x-media(src="images/himalaya.jpg" width=760 height=320 credit="© Depositphotos, gagarych")

---
> class: no-border

## Applications

But triangles and trigonometry are not just useful for measuring the height of
mountains, and the tools and concepts you have learned are incredibly important
in countless areas of mathematics, science and engineering.

Triangles are special because they are particularly _strong_. They are the only
polygon that, when made out of wooden beams and hinges, will be completely
_rigid_ – unlike rectangles, for example, which you can easily push over.

::: column(width=240)
{.todo} images
::: column(width=240)
{.todo} images
:::

---

This property makes triangles particularly useful in construction, where they
can carry heavy weights.

::: column(width=200)
    x-media(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} A "Truss bridge" is supported by triangular bars
::: column(width=200)
    x-media(src="images/pylon.jpg" credit="© Depositphotos, leungchopan" width=200 height=200 lightbox)

{.caption} Triangles in high-voltage electricity Pylons
::: column(width=200)
    x-media(src="images/bike.jpg" credit="© Depositphotos, blasbike" width=200 height=200 lightbox)

{.caption} Even bikes use triangles for stability.
:::

---

Triangles are also the simplest polygon, with the fewest sides. This makes them
particularly well suited to approximating complex curved surfaces. This is done
in physical building…

::: column(width=200)
    x-media(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} "The Gherkin", a skyscraper in London
::: column(width=200)
    x-media(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Bank of China Tower in Hong Kong
::: column(width=200)
    x-media(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Courtyard of the British Museum in London
:::

::: column.grow
…but also in virtual worlds. In computer generated graphics (e.g. for movies or
video games), all surfaces are approximated using a "mesh" of tiny triangles.
Artists and software engineers need to know about geometry and trigonometry in
order to be able to move and transform these triangles realistically, and to
calculate their colour and texture.
::: column(width=220)
    x-media(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-media(src="images/tiger.mp4" width=480 height=270 credit="© UCTV, The STEAM Channel")
    //- src: https://www.youtube.com/watch?v=Y9PYzdFsVio

---

Many results from this chapter will be useful when studying bigger polygons like
quadrilaterals or pentagons – which we will do in the next chapter.


    // ### Euler Line
    // 
    // Let's put all of this together… construct the centroid, the circumcenter and the
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
