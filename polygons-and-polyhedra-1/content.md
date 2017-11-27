# Polygons and Polyhedra

> stage: intermediate
> description: 

---

https://plus.maths.org/content/secrets-bathroom-floor
https://plus.maths.org/content/eulers-polyhedron-formula

Classification and properties of quadrilaterals
Constructing regular polygons
PolyhedraEuler’s Formula
Platonic and Archimedean solids

## Classifying Polygons

A polygon is any closed planar figure that is made entirely of line segments
that intersect at their endpoints. Polygons can have any number of sides and
angles, but the sides can never be curved. The segments are called the sides of
the polygons, and the points where the segments intersect are called vertices.
The easiest way to identify a polygon is to look for a closed figure with no
curved sides.

Polygons can be either convex or concave. Think of the term concave as referring
to a cave, or “caving in”. A concave polygon has a section that “points inward”
toward the middle of the shape. All stars are concave polygons.

A convex polygon does not share this property.

Diagonals are line segments that connect the vertices of a convex polygon that are not sides.

The red lines are all diagonals. This pentagon has 5 diagonals.

Whether a polygon is convex or concave, it can always be named by the number of
sides. See the chart below.

| Name          |  Vertices | Diagonals |
| ------------- | --------- | --------- |
| Triangle      | 3         | 0         |
| Quadrilateral | 4         | 2         |
| Pentagon      | 5         | 5         |
| Hexagon       | 6         | 9         |
| Heptagon      | 7         | 14        |
| Octagon       | 8         | ?         |
| Nonagon       | 9         | ?         |
| Decagon       | 10        | ?         |

### Recognizing Polygons 
The easiest way to identify the polygon is to identify which shapes are not
polygons. B and C each have at least one curved side, so they cannot be
polygons. D has all straight sides, but one of the vertices is not at the
endpoint of the adjacent side, so it is not a polygon either. C is a
three-dimensional shape, so it does not lie within one plane, so it is not a
polygon.


### Determining Convexity/Concavity
To see if a polygon is concave, look at the polygons and see if any angle
“caves in” to the interior of the polygon. The first polygon does not do this,
so it is convex. The other two do, so they are concave. You could add here that
concave polygons have at least one diagonal outside the figure.


## Internal Angles

Recall that interior angles are the angles inside a closed figure with straight
sides. As you can see in the images below, a polygon has the same number of
interior angles as it does sides.

A diagonal connects two non-adjacent vertices of a convex polygon. Also, recall
that the sum of the angles in a triangle is 180∘. What about other polygons?

Investigation: Polygon Sum Formula

| Polygon       | #Sides | Number of △s | Total         |
| ------------- | ------ | ------------ | ------------- |
| Quadrilateral | 4      | 2            | 2×180° = 360° |
| Pentagon      | 5      | 3            | 3×180° = 540° |
| Hexagon       | 6      | 4            | 4×180° = 720° |

Notice that the total number of degrees goes up by 180∘. So, if the number sides
is n, then the number of triangles from one vertex is n−2. Therefore, the
formula would be (n−2)×180∘.

Polygon Sum Formula: For any n−gon, the sum of the interior angles is (n−2)×180°.

A regular polygon is a polygon where all sides are congruent and all interior
angles are congruent.

Regular Polygon Formula: For any equiangular n−gon, the measure of each angle is
(n−2)×180° / n.


## Area of regular polygons

A regular polygon is a polygon with congruent sides and angles. Recall that the
perimeter of a square is 4 times the length of a side because each side is
congruent. We can extend this concept to any regular polygon.

Perimeter of a Regular Polygon: If the length of a side is s and there are n
sides in a regular polygon, then the perimeter is P=ns.

In order to find the area of a regular polygon, we need to define some new
terminology. First, all regular polygons can be inscribed in a circle. So,
regular polygons have a center and radius, which are the center and radius of
the circumscribed circle. Also like a circle, a regular polygon will have a
central angle formed. In a regular polygon, however, the central angle is the
angle formed by two radii drawn to consecutive vertices of the polygon. In the
picture below, the central angle is ∠BAD. Also, notice that △BAD is an isosceles
triangle. Every regular polygon with n sides is formed by n isosceles triangles.
The height of these isosceles triangles is called the apothem.

The area of each triangle is A△=12bh=12sa, where s is the length of a side and
a is the apothem. If there are n sides in the regular polygon, then it is made
up of n congruent triangles.

Area of a Regular Polygon: If there are n sides with length s in a regular
polygon and a is the apothem, then A=12asn or A=12aP, where P is the perimeter.

What is the perimeter of a regular octagon with 4 inch sides?
If each side is 4 inches and there are 8 sides, that means the perimeter is
8(4 in) = 32 inches.


The perimeter of a regular heptagon is 35 cm. What is the length of each side?
If P=ns, then 35 cm=7s. Therefore, s=5 cm.


## Parallelograms

A parallelogram is a quadrilateral with two pairs of parallel sides.

Notice that each pair of sides is marked parallel. As is the case with the
rectangle and square, recall that two lines are parallel when they are
perpendicular to the same line. Once we know that a quadrilateral is a
parallelogram, we can discover some additional properties.

Opposite Sides Theorem: If a quadrilateral is a parallelogram, then the opposite
sides are congruent.

Opposite Angles Theorem: If a quadrilateral is a parallelogram, then the
opposite angles are congruent.

Consecutive Angles Theorem: If a quadrilateral is a parallelogram, then the
consecutive angles are supplementary.

Parallelogram Diagonals Theorem: If a quadrilateral is a parallelogram, then
the diagonals bisect each other.

Recall that a parallelogram is a quadrilateral with two pairs of parallel sides.
Even if a quadrilateral is not marked with having two pairs of sides, it still
might be a parallelogram. The following is a list of theorems that will help
you decide if a quadrilateral is a parallelogram or not.

Opposite Sides Theorem Converse: If the opposite sides of a quadrilateral are
congruent, then the figure is a parallelogram.

Opposite Angles Theorem Converse: If the opposite angles of a quadrilateral are
congruent, then the figure is a parallelogram.

Parallelogram Diagonals Theorem Converse: If the diagonals of a quadrilateral
bisect each other, then the figure is a parallelogram.

Theorem: If a quadrilateral has one set of parallel lines that are also
congruent, then it is a parallelogram.

Rectangles, rhombuses (the plural is also rhombi) and squares are all more
specific versions of parallelograms.

Rectangle Theorem: A quadrilateral is a rectangle if and only if it has four
right (congruent) angles.

Rhombus Theorem: A quadrilateral is a rhombus if and only if it has four
congruent sides. 

Square Theorem: A quadrilateral is a square if and only if it has four right
angles and four congruent sides.

From the Square Theorem, we can also conclude that a square is a rectangle
and a rhombus.

Recall that diagonals in a parallelogram bisect each other. Therefore, the
diagonals of a rectangle, square and rhombus also bisect each other. The
diagonals of these parallelograms also have additional properties.

### Area
Recall that a parallelogram is a quadrilateral whose opposite sides are parallel.

To find the area of a parallelogram, make it into a rectangle.

From this, we see that the area of a parallelogram is the same as the area of a
rectangle. The area of a parallelogram is A=bh. Be careful! The height of a
parallelogram is always perpendicular to the base. This means that the sides are
not the height.

### Classification
Rectangles, rhombuses (the plural is also rhombi) and squares are all more
specific versions of parallelograms.
Rectangle Theorem: A quadrilateral is a rectangle if and only if it has four
right (congruent) angles.

Rhombus Theorem: A quadrilateral is a rhombus if and only if it has four
congruent sides. 

Square Theorem: A quadrilateral is a square if and only if it has four right
angles and four congruent sides. From the Square Theorem, we can also conclude
that a square is a rectangle and a rhombus.

Recall that diagonals in a parallelogram bisect each other. Therefore, the
diagonals of a rectangle, square and rhombus also bisect each other. The
diagonals of these parallelograms also have additional properties.


Investigation: Drawing a Rectangle
Draw two lines on either side of your ruler, to ensure they are parallel.
Make these lines 3 inches long. 
Remove the ruler and mark two 90∘ angles, 2.5 inches apart on the bottom line
drawn in Step 1. Then, draw the angles to intersect the top line. This will
ensure that all four angles are 90∘. Depending on your ruler, the sides should
be 2.5 inches and 1 inch. 
Draw in the diagonals and measure them. What do you discover? 
Theorem: A parallelogram is a rectangle if and only if the diagonals are congruent.

Theorem: A parallelogram is a rhombus if and only if the diagonals are perpendicular.

Theorem: A parallelogram is a rhombus if and only if the diagonals bisect each angle.
We know that a square is a rhombus and a rectangle. So, the diagonals of a square
have the properties of a rhombus and a rectangle.

Understanding the Definition of a Rhombus 
Is a rhombus SOMETIMES, ALWAYS, or NEVER a square? Explain your reasoning.



## Trapezium

A trapezoid is a quadrilateral with exactly one pair of parallel sides.

An isosceles trapezoid is a trapezoid where the non-parallel sides are
congruent. The third trapezoid above is an example of an isosceles trapezoid.
Think of it as an isosceles triangle with the top cut off. Isosceles trapezoids
also have parts that are labeled much like an isosceles triangle. Both parallel
sides are called bases.

Recall that in an isosceles triangle, the two base angles are congruent. This
property holds true for isosceles trapezoids.

Theorem: The base angles of an isosceles trapezoid are congruent.

The converse is also true: If a trapezoid has congruent base angles, then it is
an isosceles trapezoid. Next, we will investigate the diagonals of an isosceles
trapezoid. Recall, that the diagonals of a rectangle are congruent AND they
bisect each other. The diagonals of an isosceles trapezoid are also congruent,
but they do NOT bisect each other.

Isosceles Trapezoid Diagonals Theorem: The diagonals of an isosceles trapezoid
are congruent.

The midsegment (of a trapezoid) is a line segment that connects the midpoints
of the non-parallel sides. There is only one midsegment in a trapezoid. It will
be parallel to the bases because it is located halfway between them. Similar to
the midsegment in a triangle, where it is half the length of the side it is
parallel to, the midsegment of a trapezoid also has a link to the bases.

Midsegment Theorem: The length of the midsegment of a trapezoid is the average
of the lengths of the bases, or EF=AB+CD2.

### Area and perimeter
Recall that a trapezoid is a quadrilateral with one pair of parallel sides.
The lengths of the parallel sides are the bases. The perpendicular distance
between the parallel sides is the height, or altitude, of the trapezoid.

To find the area of the trapezoid, let’s turn it into a parallelogram. To do
this, make a copy of the trapezoid and then rotate the copy 180∘. Now, this is
a parallelogram with height h and base b1+b2. Let’s find the area of this shape.

A=h(b1+b2)
Because the area of this parallelogram is made up of two congruent trapezoids,
the area of one trapezoid would be A=12h(b1+b2). The formula for the area of a
trapezoid could also be written as the average of the bases time the height.


## Rhombus and Kites

A kite is a quadrilateral with two sets of distinct, adjacent congruent sides.

From the definition, a kite is the only quadrilateral that we have discussed
that could be concave, as with the case of the last kite. If a kite is concave,
it is called a dart. The angles between the congruent sides are called vertex
angles. The other angles are called non-vertex angles. If we draw the diagonal
through the vertex angles, we would have two congruent triangles.

Theorem: The non-vertex angles of a kite are congruent.
Proof

Theorem: The diagonal through the vertex angles is the angle bisector for both angles.
The proof of this theorem is very similar to the proof above for the first
theorem. If we draw in the other diagonal in KITE we find that the two diagonals
are perpendicular.

Kite Diagonals Theorem: The diagonals of a kite are perpendicular.
To prove that the diagonals are perpendicular, look at △KET and △KIT. Both of
these triangles are isosceles triangles, which means EI is the perpendicular
bisector of KT (the Isosceles Triangle Theorem). Use this information to help
you prove the diagonals are perpendicular in the practice questions.

### Area and Perimeter
Recall that a rhombus is an equilateral quadrilateral and a kite has adjacent
congruent sides. Both of these quadrilaterals have perpendicular diagonals,
which is how we are going to find their areas.

Notice that the diagonals divide each quadrilateral into 4 triangles. In the
rhombus, all 4 triangles are congruent and in the kite there are two sets of
congruent triangles. If we move the two triangles on the bottom of each
quadrilateral so that they match up with the triangles above the horizontal
diagonal, we would have two rectangles.

So, the height of these rectangles is half of one of the diagonals and the
base is the length of the other diagonal.

The area of a rhombus or a kite is A=12d1d2 if the diagonals of the rhombus or
kite are d1 and d2. You could also say that the area of a kite and rhombus are
half the product of the diagonals.


## Quadrialteral Classification

When working in the coordinate plane, you will sometimes want to know what type
of shape a given shape is. You should easily be able to tell that it is a
quadrilateral if it has four sides. But how can you classify it beyond that?

First you should graph the shape if it has not already been graphed. Look at it
and see if it looks like any special quadrilateral. Do the sides appear to be
congruent? Do they meet at right angles? This will give you a place to start.

Once you have a guess for what type of quadrilateral it is, your job is to prove
your guess. To prove that a quadrilateral is a parallelogram, rectangle,
rhombus, square, kite or trapezoid, you must show that it meets the definition
of that shape OR that it has properties that only that shape has.

If it turns out that your guess was wrong because the shape does not fulfill
the necessary properties, you can guess again. If it appears to be no type of
special quadrilateral then it is simply a quadrilateral.

The examples below will help you to see what this process might look like.



## Polyhedron

A polyhedron is a 3-dimensional figure that is formed by polygons that enclose
a region in space. Each polygon in a polyhedron is called a face. The line
segment where two faces intersect is called an edge and the point of
intersection of two edges is a vertex. There are no gaps between the edges or
vertices in a polyhedron. Examples of polyhedrons include a cube, prism, or
pyramid. Non-polyhedrons are cones, spheres, and cylinders because they have
sides that are not polygons.

A prism is a polyhedron with two congruent bases, in parallel planes, and the
lateral sides are rectangles. Prisms are explored in further detail in another
Concept.

A pyramid is a polyhedron with one base and all the lateral sides meet at a
common vertex. The lateral sides are triangles. Pyramids are explored in further
detail in another Concept.

All prisms and pyramids are named by their bases. So, the first prism would be
a triangular prism and the second would be an octagonal prism. The first pyramid
would be a hexagonal pyramid and the second would be a square pyramid. The
lateral faces of a pyramid are always triangles.

Euler’s Theorem states that the number of faces, vertices V, and edges E of a
polyhedron can be related such that F + V = E + 2.

A regular polyhedron is a polyhedron where all the faces are congruent regular
polygons. There are five regular polyhedra called the Platonic solids, after the
Greek philosopher Plato. These five solids are significant because they are the
only five regular polyhedra. There are only five because the sum of the measures
of the angles that meet at each vertex must be less than 360°. Therefore the
only combinations are 3, 4 or 5 triangles at each vertex, 3 squares at each
vertex or 3 pentagons. Each of these polyhedra have a name based on the number
of sides, except the cube.

* Regular Tetrahedron: A 4-faced polyhedron where all the faces are equilateral triangles.
* Cube: A 6-faced polyhedron where all the faces are squares.
* Regular Octahedron: An 8-faced polyhedron where all the faces are equilateral triangles.
* Regular Dodecahedron: A 12-faced polyhedron where all the faces are regular pentagons.
* Regular Icosahedron: A 20-faced polyhedron where all the faces are equilateral triangles.


## Cross-Sections and Nets

What if you wanted to expand your thinking of geometric shapes beyond the flat
two-dimensional ones to three dimensional (3D) ones?

Try this experiment to gee how nets relate to 3D figures: Sketch or print the
equilateral triangle in the image below onto a piece of paper and cut it out.
Fold on the dotted lines. What shape do these four attached equilateral
triangles make? If you place two of these equilateral triangles next to each
other, as in the second image, and fold them on the dotted lines, what 3D figure
would you make? 

While our world is three dimensional, we are used to modeling and thinking about
three dimensional objects on paper (in two dimensions). There are a few common
ways to help think about three dimensions in two dimensions. One way to “view”
a three-dimensional figure in a two-dimensional plane, like this text, is to use
cross-sections. A cross-section is the intersection of a plane with a solid.
Another way to represent a three-dimensional figure in a two dimensional plane
is to use a net. A net is an unfolded, flat representation of the sides of a
three-dimensional shape.

### Identifying Figures Created by Nets
What kind of figure does this net create?

### Drawing Nets
Draw a net of the right triangular prism below.

### Describing Cross-Sections 
Describe the cross section formed by the intersection of the plane and the solid.


## Tessellations

Tessellating Quadrilaterals 
Tessellate the quadrilateral below.

To tessellate any image you will need to reflect and rotate the image so that
the sides all fit together. First, start by matching up each side with itself
around the quadrilateral.

This is the final tessellation. You can continue to tessellate this shape
forever. Now, continue to fill in around the figures with either the original
or the rotation.

Determining if an Object Tessellates 
Does a regular pentagon tessellate?
First, recall that there are (5−2)180∘=540∘ in a pentagon and each angle is
540∘÷5=108∘. From this, we know that a regular pentagon will not tessellate by
itself because 108∘×3=324∘ and 108∘×4=432∘.

Applying Knowledge about Tessellations
How many squares will fit around one point?
First, recall how many degrees are in a circle, and then figure out how many
degrees are in each angle of a square. There are 360∘ in a circle and 90∘ in
each interior angle of a square, so 36090=4 squares will fit around one point.


