# Triangles and Trigonometry

> stage: intermediate
> description: xxxxx

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

But there are more advanced geometric techniques, which you will learn about in
this chapter. Radhanath used these to discover the highest mountain on Earth,
which is now called _Mount Everest_. His measurement is only a few meters off
today's official height: 8848 meters.

---

## Properties of Triangles

A triangle is a closed shape that has three sides (which are line segments) and
three vertices (the points where the sides meet). It also has three internal
angles, and we already know that the sum of them is always [[180]]°.

We can classify triangles by the size of their angles:

::: column(width=220)
{.todo} image

{.caption} A __right-angled triangle__ has one right angle.
::: column(width=220)
{.todo} image

{.caption} An __obtuse triangle__ has one obtuse angle.
::: column(width=220)
{.todo} image

{.caption} An __acute triangle__ has three acute angles.
:::

---

::: column.grow
We usually label the vertices of a triangle with capital letters _A_, _B_ and
_C_ and the sides with lowercase lettera _a_, _b_ and _c_. The side that lies
_opposite_ vertex _A_ is labeled _a_, and similarly for the others. The entire
triangle can be labeled `△ABC` (or, for example, `△BAC` – the order of vertices
does not matter).
::: column(width=220)
{.todo} GRAPHIC
:::

---

### Medians 

::: column(width=300)

    x-geopad.sticky(style="width:300px; height: 300px;" tools="move|point|line"): svg
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
      
      //- circle.yellow(x="triangle(a,b,c).centroid")

::: column.grow
Here you can see a triangle as well as the midpoints of its three sides.

A __median__ of a triangle is a line segment that joins a vertex and the
midpoint of the opposite side. Draw the three medians of this triangle and try
moving the vertices of the triangle.

It looks like the medians always [[intersect in one point|have the same length|divide each other in the middle]].
_{span.reveal(when="blank-0")}This point is called the __centroid__._

Medians have two important properties: they each split the triangle into
[two halves with equal area](target:areas). They also divide each other in the
[ratio 2:1](target:ratio).
:::

---

The centroid is the “balancing point” of a triangle. If you cut a triangle out
of cardboard, you can perfectly balance it on a pencil on the centroid.
Similarly, you can also hang it 

{.todo} more about center of mass

---

### Perpendicular Bisectors and Circumcircle

::: column(width=300)

    x-geopad.sticky(style="width:300px; height: 300px;" tools="move|point|line|perpBisector"): svg
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

{.todo} Find the circle that goes through any three points

---

### Angle Bisectors and Incircle

You're probably getting the hang of this now: we pick a certain construction, do
it three times for all sides/angles of the triangles, and then we work out
what's special about their intersection.

::: column(width=300)
  
    x-geopad.sticky(style="width:300px; height: 300px;" tools="move|point|line|angleBisector"): svg
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

### Altitudes

{.todo} what are altitudes

{.todo} As you can see, an altitude can be a side of a triangle or outside of
the triangle. When a triangle is a right triangle, the altitude, or height, is
the leg. To construct an altitude, construct a perpendicular line through a
point not on the given line. Think of the vertex as the point and the given line
as the opposite side.

::: column(width=300)
  
    x-geopad.sticky(style="width:300px; height: 300px;" tools="move|point|line"): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")

::: column.grow
{.todo} Draw the three altitudes of this triangle. Again – surprise! – the three altitudes intersect in a single point. This is
called the __orthocenter__ of the triangle.

{.todo} Acute Triangle: The orthocenter is inside the triangle.

{.todo} Right Triangle: The legs of the triangle are two of the altitudes. The
orthocenter is the vertex of the right angle.

{.todo} Obtuse Triangle: The orthocenter is outside the triangle.
:::

---

### Triangle Midsegments

{.todo} midsegments are parallel

{.todo} A midsegment is a line segment that connects two midpoints of adjacent sides of
a triangle. For every triangle there are three midsegments. The Midsegment
Theorem states that the midsegment of a triangle is half the length of the side
it is parallel to.

{.todo} Let’s draw two different triangles, one for the congruent sides, and one for
the parallel lines.

{.todo} Because the midsegments are half the length of the sides they are parallel to,
they are congruent to half of each of those sides (as marked). Also, this means
that all four of the triangles in △ABC, created by the midsegments are congruent
by SSS.

{.todo} As for the parallel midsegments and sides, several congruent angles are formed.
In the picture to the right, the pink and teal angles are congruent because they
are corresponding or alternate interior angles. Then, the purple angles are
congruent by the 3rd Angle Theorem.

    // ### Euler Line
    // 
    // ::: column(width=300)
    //   
    //     x-geopad.sticky(style="width:300px; height: 300px;" tools="move|point|line|angleBisector"): svg
    //       circle.move(name="a" cx=75 cy=75 label="A")
    //       circle.move(name="b" cx=50 cy=250 label="B")
    //       circle.move(name="c" cx=250 cy=200 label="C")
    //       path(x="triangle(a,b,c)")
    // 
    // ::: column.grow
    // Let's put all of this together… construct the centroid, the circumcenter and the
    // orthocenter in this triangle.
    // 
    // Now move the vertices of the triangle and observe what happens to these three
    // points.
    // 
    // It looks like they always lie on a single line: called the __Euler line__.
    // :::

---

## Triangle Inequality

If I give you any three numbers, can you make a triangle that has those side
lengths? Why not give it a try:

    .inequality.row
      div(style="width:120px")
      .grow
        x-geopad(style="height: 360px"): svg
          circle.move(name="a" cx=75 cy=75)
          circle.move(name="b" cx=50 cy=250)
          circle.move(name="c" cx=250 cy=200)
          path(x="segment(a,b)" label="${round(distance(a,b))}")
          path(x="segment(b,c)" label="${round(distance(b,c))}")
          path(x="segment(a,c)" label="${round(distance(a,c))}")

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

If a triangle has sides _a_, _b_ and _c_, then `a+b>c`, `a+c>b` and `b+c>a`.

---

The triangle inequality allows us to quickly check if three numbers make a
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

We can rearrange these inequality to give [[2]] `<c<` [[10]] – the length of _c_
has to be between 2 and 10.

---

::: column.grow
We can think of this again using physical objects: two sides of the triangle are
metal rods of length 4 and 6, and the third side is a rubber band that can
expand or contract.

Now you can see that to form a triangle, the length of the rubber band has to be
[greater than](target:small) `6-4=2` and [smaller than](target:big) `6+4=10`.
::: column(width=300)

    x-geopad(style="width: 300px; height: 200px"): svg
    
      linearGradient#metal(x1="50%" y1="0%" x2="50%" y2="100%")
        stop(offset="0%" stop-color="#808080")
        stop(offset="100%" stop-color="#e0e0e0")
    
      circle.move(name="a" cx=150 cy=150)
      circle.move(name="b" cx=70 cy=150 force="circle(a,80).project(b)")
      circle.move(name="c" cx=250 cy=50 force="circle(a,120).project(c)")
      path.metal(x="segment(a,b)" style="stroke: url(#metal)" label="4")
      path.metal(x="segment(a,c)" style="stroke: url(#metal)" label="6")
      path.rubber(x="segment(b,c)" style="stroke: #00cca6; stroke-width: ${50/Math.sqrt(distance(b,c))}px" label="${round(distance(b,c)/20)}")

:::

---

Note that these are _strict_ inequalities. If the third side is _exactly_ 2 or
10, we get a straight line and not a triangle. However 2.1 or 9.9 would be
enough to form one.

---

## Triangles Congruence

Now that we can check if three sides can form a triangle, let's think about how
we would actually _construct_ a triangle with these sides.


### SSS

::: column(width=300)
{.todo} image
::: column.grow
Here, we want to draw a triangle that has sides of 4cm, 5cm and 6cm.

First, let's draw one of the sides using a ruler (usually the longest one). Now
we already have [[two|one|three]] of the vertices of the triangle – the
challenge is to find the third one.

Let's use the ruler to widen our compass to exactly 4cm, and draw a circle
around one of the vertices. Then, let's widen the compass to 5cm, and draw a
circle around the other vertex.

The third vertex of the triangle is the [[intersection of the two circles]].
Now we can simply connect them to form a triangle.

The circles actually intersect [[twice]]: once at the top and once at the
bottom. We can pick either of these intersections, and the resulting two
triangles are congruent.

Can you see how this example relates to the triangle inequality? If the first
side is longer than the sum of the others, the two circles would never intersect.
:::

---

Now think about this: is it possible to construct _any other_ triangle with the
same three sides? We already saw two triangles above, but they where both
[[congruent|different|similar]].

In fact, any two triangles that have the same three side lengths are congruent.
This is called the [__SSS Congruence Condition__](gloss:triangle-sss) for
triangles ("Side-Side-Side").

This means that the length of its three sides is enough to uniquely identify a
triangle. And if you have two triangles with the same sides, you know that they
must be congruent.

---

### Triangle Conditions

We have now seen two conditions for triangles: "AA" means that two triangles are
[[similar|congruent|transformations]], and "SSS" means that two triangles are
[[congruent|similar|equal]]. There are a few other conditions for triangle
congruence, which we'll study next.


::: column(width=120)
#### SSS

::: column(width=120)
#### SAS


::: column(width=120)
#### ASS

::: column(width=120)
#### ASA


::: column(width=120)
#### AAS



:::



---

### SAS

::: column(width=300)
{.todo} image
::: column.grow
Let's try to draw a triangle that has sides of 5cm and 3cm, and an angle of 40°
in between them.

Like before, we start by drawing one of the sides of the triangle.

Next, use a protractor to measure a 40° angle around one of the two vertices.
Let's mark this angle with a point.

We can connect the vertex to our measurement, to form the second side of the
triangle.

We know that this side has to be 3cm long, so let's measure that distance with a
ruler and then mark the third vertex of the triangle.

Finally, we can connect the last two vertices, to complete the triangle.
:::

---

Of course, we could have drawn the 3cm side first, or picked the other vertex
to draw the 40° angle around. However in all those cases, the resulting
triangles would have been congruent to this one.

Any two triangles that have the same two sides and the same angle between them
(called the _included angle_) are congruent. This is called the
[__SAS Congruence Condition__](gloss:triangle-sss) for triangles
("Side-Angle-Side").

---

### ASA and AAS

Consider the question: If I have two angles that are 45∘ and 60∘ and the side
between them is 5 in, can I construct only one triangle? We will investigate it
here.

Investigation: Constructing a Triangle Given Two Angles and Included Side
1. Draw the side (5 in) horizontally, halfway down the page. The drawings in
   this investigation are to scale. 
2. At the left endpoint of your line segment, use the protractor to measure the
   45∘ angle. Mark this measurement and draw a ray from the left endpoint
   through the 45∘ mark. 
3. At the right endpoint of your line segment, use the protractor to measure
   the 60∘ angle. Mark this measurement and draw a ray from the left endpoint
   through the 60∘ mark. Extend this ray so that it crosses through the ray from Step 2. 
4. Erase the extra parts of the rays from Steps 2 and 3 to leave only the triangle.

Can you draw another triangle, with these measurements that looks different? The
answer is NO. Only one triangle can be created from any given two angle measures
and the INCLUDED side.

Angle-Side-Angle (ASA) Triangle Congruence Postulate: If two angles and the
included side in one triangle are congruent to two angles and the included side
in another triangle, then the two triangles are congruent.

The markings in the picture are enough to say △ABC≅△XYZ.

A variation on ASA is AAS, which is Angle-Angle-Side. Recall that for ASA you
need two angles and the side between them. But, if you know two pairs of angles
are congruent, then the third pair will also be congruent by the Third Angle
Theorem. Therefore, you can prove a triangle is congruent whenever you have any
two angles and a side.

Be careful to note the placement of the side for ASA and AAS. As shown in the
pictures above, the side is between the two angles for ASA and it is not for AAS.

Angle-Angle-Side (AAS or SAA) Triangle Congruence Theorem: If two angles and a
non-included side in one triangle are congruent to two corresponding angles and
a non-included side in another triangle, then the triangles are congruent.


    // When referring to corresponding congruent parts of congruent triangles, you can
    // use the phrase Corresponding Parts of Congruent Triangles are Congruent, or its
    // abbreviation CPCTC.

---

## Pythagoras' Theorem 

We have now reached an important point in geometry – being able to state and
understand one of the most famous theorems in all of mathematics: __Pythagoras'
Theorem__. It is named after

::: theorem
In a right angles triangle with hypotenuse _c_ and legs _a_ and _b_, the lengths
of the three sides satisfy:

{.text-center} `a^2 + b^2 = c^2`
:::

The converse is also true: if the three sides in a triangle satisfy
`a^2 + b^2 = c^2`, then it must be right-angled.

{.todo} different proofs



PROOF


### Pythagorean Triples

A Pythagorean Triple is a set of three whole numbers that makes the Pythagorean 
Theorem true. The most frequently used Pythagorean triple is 3, 4, 5, as in
Investigation 8-1. Any multiple of a Pythagorean triple is also considered a
triple because it would still be three whole numbers. Therefore, 6, 8, 10 and
9, 12, 15 are also sides of a right triangle. Other Pythagorean triples are:
3,4,55,12,137,24,258,15,17
There are infinitely many Pythagorean triples. To see if a set of numbers makes
a triple, plug them into the Pythagorean Theorem.


### Applications

### Find the Height of an Isosceles Triangle

One way to use The Pythagorean Theorem is to identify the heights in isosceles
triangles so you can calculate the area. The area of a triangle is 12 bh, where
b is the base and h is the height (or altitude).

If you are given the base and the sides of an isosceles triangle, you can use
the Pythagorean Theorem to calculate the height.

### Prove the Distance Formula

Another application of the Pythagorean Theorem is the Distance Formula.

First, draw the vertical and horizontal lengths to make a right triangle. Then,
use the differences to find these distances.
Now that we have a right triangle, we can use the Pythagorean Theorem to find d.

Distance Formula: The distance A(x1,y1) and B(x2,y2) is `d=sqrt((x1−x2)2+(y1−y2)2)`.


### Determine if a Triangle is Acute, Obtuse, or Right
We can extend the converse of the Pythagorean Theorem to determine if a triangle
has an obtuse angle or is acute. We know that if the sum of the squares of the
two smaller sides equals the square of the larger side, then the triangle is
right. We can also interpret the outcome if the sum of the squares of the
smaller sides does not equal the square of the third.

Theorem: (1) If the sum of the squares of the two shorter sides in a right
triangle is greater than the square of the longest side, then the triangle is
acute. (2) If the sum of the squares of the two shorter sides in a right
triangle is less than the square of the longest side, then the triangle is obtuse.

In other words: The sides of a triangle are a,b, and c and c>b and c>a.
If a2+b2>c2, then the triangle is acute.
If a2+b2=c2, then the triangle is right.
If a2+b2<c2, then the triangle is obtuse.

----

## Isosceles and Equilateral Triangles

An isosceles triangle is a triangle that has at least two congruent sides. The
congruent sides of the isosceles triangle are called the legs. The other side
is called the base and the angles between the base and the congruent sides are
called base angles. The angle made by the two legs of the isosceles triangle is
called the vertex angle.

Investigation: Isosceles Triangle Construction
1. Using your compass and ruler, draw an isosceles triangle with sides of 3 in,
   5 in and 5 in. Draw the 3 in side (the base) horizontally 6 inches from the
   top of the page. 
2. Now that you have an isosceles triangle, use your protractor to measure the
   base angles and the vertex angle. 

We can generalize this investigation into the Base Angles Theorem.
Base Angles Theorem: The base angles of an isosceles triangle are congruent.
To prove the Base Angles Theorem, we will construct the angle bisector through
the vertex angle of an isosceles triangle.

Isosceles Triangle Theorem: The angle bisector of the vertex angle in an
isosceles triangle is also the perpendicular bisector to the base.

The converses of the Base Angles Theorem and the Isosceles Triangle Theorem are
both true.

Base Angles Theorem Converse: If two angles in a triangle are congruent, then
the opposite sides are also congruent.

So, for a triangle △ABC, if ∠A≅∠B, then CB≅CA. ∠C would be the vertex angle.

Isosceles Triangle Theorem Converse: The perpendicular bisector of the base of
an isosceles triangle is also the angle bisector of the vertex angle.

In other words, if △ABC is isosceles, AD⊥CB and CD≅DB, then ∠CAD≅∠BAD.


By definition, all sides in an equilateral triangle have exactly the same length.

Investigation: Constructing an Equilateral Triangle
1. Because all the sides of an equilateral triangle are equal, pick a length to
   be all the sides of the triangle. Measure this length and draw it
   horizontally on your paper.
2. Put the pointer of your compass on the left endpoint of the line you drew in
   Step 1. Open the compass to be the same width as this line. Make an arc above
   the line.
3. Repeat Step 2 on the right endpoint.
4. Connect each endpoint with the arc intersections to make the equilateral
   triangle.

Use the protractor to measure each angle of your constructed equilateral
triangle. What do you notice?

From the Base Angles Theorem, the angles opposite congruent sides in an
isosceles triangle are congruent. So, if all three sides of the triangle are
congruent, then all of the angles are congruent or  each.

Equilateral Triangles Theorem: All equilateral triangles are also equiangular.
Also, all equiangular triangles are also equilateral.


### 30-60-90 triangle

The top angles are each 30∘ and the shorter leg is 1 in because the altitude of
an equilateral triangle is also the angle and perpendicular bisector.

30-60-90 Corollary: If a triangle is a 30-60-90 triangle, then its sides are in
the extended ratio x:x3√:2x.

Theorem #1: Each angle in an equiangular triangle measures 60°.

Theorem #2: The acute angles in a right triangle are always complementary.

----

## Trigonometry

The word trigonometry comes from two words meaning triangle and measure. In this
lesson we will define three trigonometric (or trig) functions.

Trigonometry: The study of the relationships between the sides and angles of
right triangles.

In trigonometry, sides are named in reference to a particular angle. The
hypotenuse of a triangle is always the same, but the terms adjacent and opposite
depend on which angle you are referencing. A side adjacent to an angle is the 
eg of the triangle that helps form the angle. A side opposite to an angle is
the leg of the triangle that does not help form the angle. We never reference
the right angle when referring to trig ratios.

The three basic trig ratios are called, sine, cosine and tangent. At this point,
we will only take the sine, cosine and tangent of acute angles. However, you
will learn that you can use these ratios with obtuse angles as well.

Sine Ratio: For an acute angle x in a right triangle, the sinx is equal to the
ratio of the side opposite the angle over the hypotenuse of the triangle. Using
the triangle above, sinA=ac and sinB=bc.

Cosine Ratio: For an acute angle x in a right triangle, the cosx is equal to the
ratio of the side adjacent to the angle over the hypotenuse of the triangle.
Using the triangle above, cosA=bc and cosB=ac.

Tangent Ratio: For an acute angle x, in a right triangle, the tanx is equal to
the ratio of the side opposite to the angle over the side adjacent to x. Using
the triangle above, tanA=ab and tanB=ba.

There are a few important things to note about the way we write these ratios.
First, keep in mind that the abbreviations sin x, cos x, and tan x are all
functions. Second, be careful when using the abbreviations that you still 
ronounce the full name of each function. When we write sinx it is still
pronounced sine, with a long “i”. When we write cosx, we still say co-sine. And
when we write tanx, we still say tangent. An easy way to remember ratios is to
use the mnemonic SOH-CAH-TOA.

A few important points:
* Always reduce ratios when you can.
* Use the Pythagorean Theorem to find the missing side (if there is one).
* The tangent ratio can be bigger than 1 (the other two cannot).
* If two right triangles are similar, then their sine, cosine, and tangent
  ratios will be the same (because they will reduce to the same ratio).
* If there is a radical in the denominator, rationalize the denominator.
* The sine, cosine and tangent for an angle are fixed.
 
The trigonometric ratios are not dependent on the exact side lengths, but the
angles. There is one fixed value for every angle, from 0∘ to 90∘. Your
scientific (or graphing) calculator knows the values of the sine, cosine and
tangent of all of these angles. Depending on your calculator, you should have
[SIN], [COS], and [TAN] buttons. Use these to find the sine, cosine, and
tangent of any acute angle. One application of the trigonometric ratios is to
use them to find the missing sides of a right triangle. All you need is one
angle, other than the right angle, and one side.


### Inverse Trignometric Functions 

The word inverse is probably familiar to you. In mathematics, once you learn how
to do an operation, you also learn how to “undo” it. For example, you may
remember that addition and subtraction are considered inverse operations.
Multiplication and division are also inverse operations. In algebra you used
inverse operations to solve equations and inequalities. When we apply the word
inverse to the trigonometric ratios, we can find the acute angle measures within
a right triangle. Normally, if you are given an angle and a side of a right
triangle, you can find the other two sides, using sine, cosine or tangent. With
the inverse trig ratios, you can find the angle measure, given two sides.

Inverse Tangent: If you know the opposite side and adjacent side of an angle in
a right triangle, you can use inverse tangent to find the measure of the angle.
Inverse tangent is also called arctangent and is labeled tan−1 or arctan. The
“-1” indicates inverse.

Inverse Sine: If you know the opposite side of an angle and the hypotenuse in a
right triangle, you can use inverse sine to find the measure of the angle.
Inverse sine is also called arcsine and is labeled sin−1 or arcsin.

Inverse Cosine: If you know the adjacent side of an angle and the hypotenuse in
a right triangle, you can use inverse cosine to find the measure of the angle.
Inverse cosine is also called arccosine and is labeled cos−1 or arccos.

In order to actually find the measure of the angles, you will need you use your
calculator. On most scientific and graphing calculators, the buttons look like
[SIN−1],[COS−1], and [TAN−1]. Typically, you might have to hit a shift or 2nd
button to access these functions.

Now that we know how to use inverse trigonometric ratios to find the measure of
the acute angles in a right triangle, we can solve right triangles. To solve a
right triangle, you would need to find all sides and angles in a right triangle,
using any method. When solving a right triangle, you could use sine, cosine or
tangent, inverse sine, inverse cosine, or inverse tangent, or the Pythagorean
Theorem. Remember when solving right triangles to only use the values that you
are given.

---

## Sine and Cosine Laws

Law of Sines: If △ABC has sides of length, a,b, and c, then sinAa=sinBb=sinCc.
Looking at a triangle, the lengths a,b, and c are opposite the angles of the same letter.

Use Law of Sines when given:
* An angle and its opposite side.
* Any two angles and one side.

Law of Cosines: If △ABC has sides of length a,b, and c, then:
a2b2c2=b2+c2−2bccosA=a2+c2−2ac cosB=a2+b2−2ab cosC

Even though there are three formulas, they are all very similar. First, notice
that whatever angle is in the cosine, the opposite side is on the other side of
the equal sign.

Use Law of Cosines when given:
* Two sides and the included angle.
* All three sides.

---

## The Great Trigonometric Survey




{.todo} Triangles are rigid, mesh grid in 3d graphics


BELOW
This explanation greatly simplifies the extraordinary work done by the
geographers working on the Great Trigonometrical Survey. 



---

## Applications

But triangles aren't just mathematically significant, they are also fundamental to the way we build in our environments, both physical and virtual. Triangles are special because they are exceptionally strong. Out of all the two-dimensional shapes we can make out of straight struts of metal, only a triangle is rigid. All other shapes can be deformed with a simple push if the shape is hinged at the corners (eg. a rectangle could be pushed over into a parallelogram). But not the trusty triangle, which explains its ubiquitous use in construction from pylons to bracing.

Triangles are also special because they are the simplest polygon — it is a common approach to a tricky geometrical problem, such as analysing a complex surface, to instead approximate it by a mesh of triangles. This approach is also used in the real world to achieve some of the exotic shapes we now see in modern architecture, such as the curved shape of 30 St Mary's Axe, aka the Gherkin, or the canopy over the courtyard in the British Museum.

This method of triangulation also is vital in building our virtual world. The fluid forms of the CGI characters we see in film and on TV are actually an incredibly fine mesh of triangles, in order that they can be stored and manipulated digitally.

![](https://plus.maths.org/issue50/features/dench/zoom.jpg)






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
