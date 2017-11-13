# Triangles and Trigonometry

> stage: intermediate
> description: xxxxx

---

## Introduction

By the early 19th century, explorers had discovered most of the Earth, and
filled in the remaining blank areas of the map: from the arctic to 

– but how do you even measure the height of a mountain?

    x-geopad(style="width:300px; height: 300px;"): svg

Today, we can use satellites to measure the height of mountains to within a few
centimeters. Unfortunately satellites were not available to XXX in 1850.

Climbers can use Altimeters to determine their altitude – these use the
difference in atmospheric pressure at different heights. However this would
have required XXX to actually climb to the top of Mount Everest. This was not

Finally, you might try to do something similar to how Erathostenes measured
the diameter of Earth, using shadows and angles. Unfortunately, the base of the
mountain is under kilometers of rock, and not very accessible.

But there are other geometric ticks that XXX used to calculate the height of
Mount Everest, accurately to within a few meters of today's official height.
And by the end of this chapter, you will be able to do the same!

---

## Properties of Triangles

A triangle is any closed figure made by three line segments intersecting at
their endpoints. Every triangle has three vertices (the points where the
segments meet), three sides (the segments), and three interior angles (formed
at each vertex). All of the following shapes are triangles.

You already know that the sum of the interior angles in a triangle is always
180°. We can classify triangles by the size of their angles:

::: .row
  ::: .grow
    Right Triangle: When a triangle has one right angle.
  ::: .grow
    Obtuse Triangle: When a triangle has one obtuse angle.
  ::: .grow
    Acute Triangle: When all three angles in the triangle are acute.

We usually label the vertices of a triangle with capital letters _A_, _B_ and
_C_ and the sides with lowercase lettera _a_, _b_ and _c_. The side that lies
_opposite_ vertex _A_ is labeled _a_, and similarly for the others. The entire
triangle can be labeled `△ABC` (or, for example, `△BAC` – the order of vertices
does not matter).

---
> id: medians

### Medians

::: .row
  ::: .grow(style="width: 300px")

        x-geopad(style="width:300px; height: 300px;"): svg
          path.thin.red(x="line(a,b).perpendicularBisector")
          path.thin.blue(x="line(a,c).perpendicularBisector")
          path.thin.green(x="line(b,c).perpendicularBisector")

          path(x="triangle(a,b,c)")
          path.yellow(x="triangle(a,b,c).circumcircle")
          circle.yellow(x="triangle(a,b,c).circumcircle.c", r=6)

          circle.red(x="line(a,b).midpoint", r=6)
          circle.blue(x="line(a,c).midpoint", r=6)
          circle.green(x="line(b,c).midpoint", r=6)

          circle.move(var="a" cx=150, cy=50, r=6 label="A")
          circle.move(var="b" cx=50, cy=250, r=6 label="B")
          circle.move(var="c" cx=250, cy=250, r=6 label="C")
        
  ::: .grow(style="width: 300px")
  
        x-geopad(style="width:300px; height: 300px;"): svg
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
          circle.yellow(x="triangle(a,b,c).incircle.c", r=6)

          circle.move(var="a" cx=150, cy=50, r=6 label="A")
          circle.move(var="b" cx=50, cy=250, r=6 label="B")
          circle.move(var="c" cx=250, cy=250, r=6 label="C")


A median is the line segment that joins a vertex and the midpoint of the
opposite side (of a triangle). The three medians of a triangle intersect at one
point, just like the perpendicular bisectors and angle bisectors. This point is
called the centroid, and is the point of concurrency for the medians of a
triangle. Unlike the circumcenter and incenter, the centroid does not have
anything to do with circles. It has a different property.

Concurrency of Medians Theorem: The medians of a triangle intersect in a point
that is two-thirds of the distance from the vertices to the midpoint of the
opposite side. The centroid is also the “balancing point” of a triangle.

In addition to these ratios, G is also the balance point of △ACE. This means
that the triangle will balance when placed on a pencil at this point.

### Altitudes

An altitude is a line segment in a triangle from a vertex and perpendicular to
the opposite side, it is also known as the height of a triangle. All of the red
lines are examples of altitudes:

As you can see, an altitude can be a side of a triangle or outside of the
triangle. When a triangle is a right triangle, the altitude, or height, is the
leg. To construct an altitude, construct a perpendicular line through a point
not on the given line. Think of the vertex as the point and the given line as
the opposite side.

As was true with perpendicular bisectors, angle bisectors, and medians, the
altitudes of a triangle are also concurrent. Unlike the other three, the point
does not have any special properties.

Orthocenter: The point of concurrency for the altitudes of triangle.

Here is what the orthocenter looks like for the three triangles. It has three
different locations, much like the perpendicular bisectors.

Acute Triangle		
The orthocenter is inside the triangle.

Right Triangle
The legs of the triangle are two of the altitudes.
The orthocenter is the vertex of the right angle.

Obtuse Triangle
The orthocenter is outside the triangle.

---

## Incircle and Circumcircle

### Perpendicular Bisectors

Recall that a perpendicular bisector intersects a line segment at its midpoint
and is perpendicular. Let’s analyze this figure.

CD←→ is the perpendicular bisector of AB. If we were to draw in AC and CB, we
would find that they are equal. Therefore, any point on the perpendicular
bisector of a segment is the same distance from each endpoint.

Perpendicular Bisector Theorem: If a point is on the perpendicular bisector of a
segment, then it is equidistant from the endpoints of the segment.

The three perpendicular bisectors all intersect at the same point, called the
circumcenter.

Circumcenter: The point of concurrency for the perpendicular bisectors of the
sides of a triangle.

The circumcenter is the center of a circle that passes through all the vertices
of the triangle. We say that this circle circumscribes the triangle. This means
that the circumcenter is equidistant to the vertices.

Concurrency of Perpendicular Bisectors Theorem: The perpendicular bisectors of
the sides of a triangle intersect in a point that is equidistant from the
vertices.


### Angle Bisectors

Incenter: The point of concurrency for the angle bisectors of a triangle.

1. Draw a scalene triangle. Construct the angle bisector of each angle.
2. Erase the arc marks and the angle bisectors after the incenter. Draw or
   construct the perpendicular lines to each side, through the incenter.
3. Erase the arc marks from #2 and the perpendicular lines beyond the sides of
   the triangle. Place the pointer of the compass on the incenter. Open the 
   ompass to intersect one of the three perpendicular lines drawn in #2. Draw a
   circle.

Notice that the circle touches all three sides of the triangle. We say that this
circle is inscribed in the triangle because it touches all three sides. The
incenter is on all three angle bisectors, so the incenter is equidistant from
all three sides of the triangle.

Concurrency of Angle Bisectors Theorem: The angle bisectors of a triangle
intersect in a point that is equidistant from the three sides of the triangle.

If AG, BG, and GC are the angle bisectors of the angles in the triangle, then
EG=GF=GD. In other words, EG, FG, and DG are the radii of the inscribed circle.

---

## Constructing Triangles

### SSS

Consider the question: If I have three lengths, 3 in, 4 in, and 5 in, can I
construct more than one triangle with these measurements? In other words, can I
construct two different triangles with these same three lengths?

Investigation: Constructing a Triangle Given Three Sides

1. Draw the longest side (5 in) horizontally, halfway down the page. The
   drawings in this investigation are to scale. 
2. Take the compass and, using the ruler, widen the compass to measure 4 in, the
   next side. 
3. Using the measurement from Step 2, place the pointer of the compass on the
   left endpoint of the side drawn in Step 1. Draw an arc mark above the line
   segment. 
4. Repeat Step 2 with the last measurement, 3 in. Then, place the pointer of the
   compass on the right endpoint of the side drawn in Step 1. Draw an arc mark
   above the line segment. Make sure it intersects the arc mark drawn in Step 3. 
5. Draw lines from each endpoint to the arc intersections. These lines will be
   the other two sides of the triangle. 

Can you draw another triangle, with these measurements that looks different?
The answer is NO. Only one triangle can be created from any given three lengths.

Side-Side-Side (SSS) Triangle Congruence Postulate: If three sides in one
triangle are congruent to three sides in another triangle, then the triangles
are congruent.

Now, we only need to show that all three sides in a triangle are congruent to
the three sides in another triangle. This is a postulate so we accept it as true
without proof. Think of the SSS Postulate as a shortcut. You no longer have to
show 3 sets of angles are congruent and 3 sets of sides are congruent in order
to say that the two triangles are congruent.

### SAS

An included angle is when an angle is between two given sides of a triangle (or
polygon). In the picture below, the markings indicate that AB and BC are the
given sides, so ∠B would be the included angle.

Consider the question: If I have two sides of length 2 in and 5 in and the
angle between them is 45∘, can I construct only one triangle?

Investigation: Constructing a Triangle Given Two Sides and Included Angle
1. Draw the longest side (5 in) horizontally, halfway down the page. The
   drawings in this investigation are to scale. 
2. At the left endpoint of your line segment, use the protractor to measure a
   45∘ angle. Mark this measurement. 
3. Connect your mark from Step 2 with the left endpoint. Make your line 2 in
   long, the length of the second side. 
4. Connect the two endpoints by drawing the third side. 

Can you draw another triangle, with these measurements that looks different?
The answer is NO. Only one triangle can be created from any given two lengths
and the INCLUDED angle.

Side-Angle-Side (SAS) Triangle Congruence Postulate: If two sides and the
included angle in one triangle are congruent to two sides and the included
angle in another triangle, then the two triangles are congruent.

The markings in the picture are enough to say that △ABC≅△XYZ.

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

---

## Triangle Inequality

Can any three lengths make a triangle? The answer is no. There are limits on
what the lengths can be. For example, the lengths 1, 2, 3 cannot make a triangle
because 1+2=3, so they would all lie on the same line. The lengths 4, 5, 10 also
cannot make a triangle because 4+5=9.

The arc marks show that the two sides would never meet to form a triangle. The
Triangle Inequality Theorem states that the sum of the lengths of any two sides
of a triangle must be greater than the length of the third.

Determining if Three Lengths make a Triangle 
Do the lengths 4, 11, 8 make a triangle?
To solve this problem, check to make sure that the smaller two numbers add up to
be greater than the biggest number. 4+8=12 and 12>11 so yes these lengths make a
triangle

Solving for an Unknown Length 
Find the length of the third side of a triangle if the other two sides are 10 and 6.

The Triangle Inequality Theorem can also help you find the range of the third
side. The two given sides are 6 and 10, so the third side, s, can either be the
shortest side or the longest side. For example s could be 5 because 6+5>10. It
could also be 15 because 6+10>15. Therefore, the range of values for s is 4<s<16.

Notice the range is no less than 4, and not equal to 4. The third side could be
4.1 because 4.1+6>10. For the same reason, s cannot be greater than 16, but it
could 15.9, 10+6>15.9.

Making Conclusions about the Length of Legs 

The base of an isosceles triangle has length 24. What can you say about the
length of each leg?

To solve this problem, remember that an isosceles triangle has two congruent
sides (the legs). We have to make sure that the sum of the lengths of the legs
is greater than 24. In other words, if x is the length of a leg:

x+x2xx>24>24>12

Each leg must have a length greater than 12.


### Comparing Angles and Sides in Triangles

Theorem: If one side of a triangle is longer than another side, then the angle
opposite the longer side will be larger than the angle opposite the shorter side.

The SAS Inequality Theorem (Hinge Theorem): If two sides of a triangle are
congruent to two sides of another triangle, but the included angle of one
triangle has greater measure than the included angle of the other triangle,
then the third side of the first triangle is longer than the third side of the
second triangle.

SSS Inequality Theorem (also called the Converse of the Hinge Theorem): If two
sides of a triangle are congruent to two sides of another triangle, but the
third side of the first triangle is longer than the third side of the second
triangle, then the included angle of the first triangle is greater in measure
than the included angle of the second triangle.

    // ## Midsegment Theorem

    // A midsegment is a line segment that connects two midpoints of adjacent sides of
    // a triangle. For every triangle there are three midsegments. The Midsegment
    // Theorem states that the midsegment of a triangle is half the length of the side
    // it is parallel to.

    // Let’s draw two different triangles, one for the congruent sides, and one for
    // the parallel lines.

    // Because the midsegments are half the length of the sides they are parallel to,
    // they are congruent to half of each of those sides (as marked). Also, this means
    // that all four of the triangles in △ABC, created by the midsegments are congruent
    // by SSS.

    // As for the parallel midsegments and sides, several congruent angles are formed.
    // In the picture to the right, the pink and teal angles are congruent because they
    // are corresponding or alternate interior angles. Then, the purple angles are
    // congruent by the 3rd Angle Theorem.

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

---

## Pythagoras' Theorem 

The sides of a right triangle are called legs (the sides of the right angle) and
the side opposite the right angle is the hypotenuse. For the Pythagorean Theorem,
the legs are “a” and “b” and the hypotenuse is “c”.

Pythagorean Theorem: Given a right triangle with legs of lengths a and b and a
hypotenuse of length c, then a2+b2=c2.

Pythagorean Theorem Converse: If the square of the longest side of a triangle is
equal to the sum of the squares of the other two sides, then the triangle is a
right triangle.

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
