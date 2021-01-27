# 3D Solids

## Introduction

> section: introduction
> sectionStatus: dev

    // General observations:- I find the mix of historical storylines and interactives captivating.- Consider adding a few more 'check for understanding' kinds of questions to break up text and transition from one section/sub-section to another.- Spatial reasoning can take a lot of work for some students to pick up. consider adding tutor prompts that are unique to the topic your discussing.- Think about standardizing how you want to write 2D and 3D +philipp@mathigon.org would be a big help here.- The transitions and storyline references dwindle toward the end of the chapter. I'm excited to see this one in action!

    // Glossary entry - Dimension: Dimensions in mathematics are the measure of the size or distance of an object.

So far, we’ve only looked at the geometry of flat, 2-dimensional objects like circles or rectangles – but we live in a three-dimensional world. Every object we see or touch has three __dimensions__.

::: column.fit

    figure: x-img(src="images/ch1_2.gif" width="300" height="300")

::: column.grow

A point has zero dimensions. A point just specifies a location but it has no size.

A line has one dimension, we can measure its length (l), but it has no width or thickness.

A square has two dimensions, we can measure its length (l) and, perpendicular to that, its width (w).

A cube has three dimensions, we can measure its length (l); width (w); and perpendicular to both of those dimensions, we have its height (h).

:::

---

Plane Geometry deals with points, lines, and two-dimensional (2D) shapes like polygons and circles which do not have any thickness. __Polygons__ are plane figures that have only length and width.

Solid Geometry is the study of three-dimensional (3D) shapes that have depth or thickness as well as length and width. Even a paper has a thickness and is a 3D shape, but since its thickness is so small, we often neglect it.

    // Page 2

::: column.fit

    figure: x-img(src="images/ch1_42.jpg" width="200" height="133")

::: column.grow

As soon as humankind began constructing complex buildings, we needed solid geometry. In some Babylonian and Egyptian texts, you can see that they are concerned about the problems related to the sizes of the pyramids and other structures they have made.

Since then, architects have been using 3D geometry to define the spatial form of a building.  Nowadays, the design of buildings is continually advancing by combining different 3D shapes and their properties.

:::

::: column(width=300)

    // https://commons.wikimedia.org/wiki/File:Barcelona_Cube-Ball-Pyramid_roof.jpg
    figure: x-img(src="images/ch1_26.png" width="300" height="225")

{.caption} Barcelona Cube-Ball-Pyramid roof

::: column(width=300)

    // https://www.frazierdeeter.com/nationally-ranked-u-s-accounting-and-advisory-firm-expands-to-u-k/london-skyline/
    figure: x-img(src="images/ch1_18.png" width="300" height="188.5")

{.caption} London Skyline

:::

---
> id: examples

Just like we’ve classified flat geometric shapes into a few categories like polygons or quadrilaterals, we can classify 3D Solids into a few different types:

__A polyhedron is a three-dimensional geometric solid with flat sides. The plural of polyhedron is “polyhedra”.__
The word polyhedron comes from the Classical Greek as poly (many) + hedron (base, face)

    // [TODO] INTERACTIVE: 3d solids examples
    figure
      // x-solid(size=300)
      x-polyhedron(size=300 shape="Icosahedron")

---

Polyhedra have many different shapes and sizes like polygons.
They can be as simple as a cube or a pyramid, or as complex as a star polyhedron with lots of sides. 

    // Page 3

    // [DISCUSS] INTERACTIVE: Polyhedra parts

    // An interactive zoom-in tool to show the parts of the polyhedra with the definitions

::: column.fit

    figure: x-img(src="images/ch1_39.png" width="380" height="200")

::: column.fit

    figure: x-img(src="images/ch1_49.png" width="228" height="200")

:::

    // Glossary links

FACE:  The polygons that make up its surface of the polyhedron.
EDGE: The line segments where two of its faces are connected.
VERTEX: The “corners” of a polyhedron are called its vertices.

---

Which of these solids are polyhedra?

{.todo} INTERACTIVE: Polyhedra identification (3D)

There are also some 3D solids like cylinders and cones that contain curved surfaces, they are called non-polyhedra.

{.todo} INTERACTIVE: non-polyhedra examples

---

Even though we live in a 3D world, grasping 3D shapes and their properties may be a challenge.

    // Page 4

::: column(width=200)

{.todo} EMBED: Flatland trailer

    // http://www.flatlandthemovie.com/index.html

::: column.grow

The Flatland is an animated film based on Edwin Abbott’s book Flatland: A Romance of Many Dimensions. The movie revolves around the inability of 2D shapes to grasp the third dimension. Characters are circles, triangles, and squares living in a 2D world. Their reality is shattered when a sphere from the 3D World comes to visit.

:::

---

Without realising, you will have seen many different types of polyhedra before:

::: column.grow

{.todo} IMAGE: Dice

::: column.grow

    figure: x-img(src="images/ch1_38.png" width="200" height="200")

A football consists of [[pentagons]] and [[hexagons]]. Mathematicians call this shape a truncated icosahedron.

:::

---

There are some things impossible in the 2D world that become possible in the 3D.

    // Page 5

Try this puzzle now.

Can you create 4 congruent triangles by using 6 toothpicks without bending or cutting them?

    // TODO (LATER): INTERACTIVE: Toothpicks puzzle

    figure: x-img(src="images/ch1_toothpicks.png" width="434" height="262")

The trick is again thinking in 3D instead of 2D.

    // Page 6

---

### Cubes

One of the most common types of 3D solids is a cube.

::: column.fit

    figure: x-img(src="images/ch1_47.png" width="106" height="80")

::: column.fit

    figure: x-img(src="images/ch1_27.png" width="80" height="80")

::: column.fit

    figure: x-img(src="images/ch1_5.png" width="80" height="80")

::: column.fit

    figure: x-img(src="images/ch1_7.png" width="142" height="80")

::: column.fit

    figure: x-img(src="images/ch1_9.png" width="142" height="80")

:::

A cube is a 3d shape that has 6 faces all of which are [[squares]].

::: column.fit

    figure: x-img(src="images/ch1_3.png" width="200" height="207")

::: column.grow

For instance, The Rubik's Cube is a classic toy invented in 1974 by Hungarian architecture and design professor Erno Rubik.  Each of the faces of a Rubik’s cube contains 9 colored squares. 

Although one of the smaller cubes (the central one) is not exposed, if we count carefully, we see that the Rubik’s cube is made up of [[27]] smaller rotatable cubes arranged in a 3x3x3 grid. 

:::

---

A cube has all its sides of the same length. If the length of all its sides is 1 unit, then it is called a unit cube. Unit cubes can be stacked together to create different 3D solids.

The 3D solids below consist of unit cubes. Can we find out the number of cubes used in each one including the hidden cubes?

Rotate the solids below to find the number of cubes that used to build them.

    // https://www.nctm.org/Classroom-Resources/Illuminations/Interactives/Isometric-Drawing-Tool/

::: column(width=300)

    figure
      x-voxel-painter(width=300 height=300 shape="0.0,1.0,-1.5,0.0,2.0,-1.5,0.0,3.0,-1.5,1.0,0.0,-1.5,2.0,0.0,-1.5,3.0,0.0,-1.5,0.0,0.0,-0.5,0.0,1.0,-0.5,0.0,2.0,-0.5,1.0,0.0,-0.5,2.0,0.0,-0.5,0.0,0.0,0.5,0.0,1.0,0.5,1.0,0.0,0.5,0.0,0.0,1.5,0.0,0.0,-1.5" playingFieldSize="7" color="rgb(237, 140, 200)" rotateOnly hideGrid explodeOnGrab)

[[16]] cubes

::: column(width=300)

    figure
      x-voxel-painter(width=300 height=300 shape="0.0,0.0,-1.0,0.0,0.0,1.0,0.0,1.0,-1.0,1.0,0.0,-1.0,1.0,1.0,-1.0,-1.0,0.0,-1.0,0.0,-1.0,-1.0,-1.0,-1.0,-1.0,1.0,-1.0,-1.0,-1.0,1.0,-1.0,0.0,1.0,0.0,1.0,0.0,0.0,1.0,1.0,0.0,-1.0,0.0,0.0,0.0,0.0,0.0,0.0,-1.0,0.0,-1.0,-1.0,0.0,1.0,-1.0,0.0,-1.0,1.0,0.0,0.0,2.0,-1.0,1.0,2.0,-1.0,-1.0,2.0,-1.0,0.0,-2.0,-1.0,1.0,-2.0,-1.0,-1.0,-2.0,-1.0,-2.0,0.0,-1.0,-2.0,-1.0,-1.0,-2.0,1.0,-1.0,-2.0,2.0,-1.0,-2.0,-2.0,-1.0,2.0,0.0,-1.0,2.0,-1.0,-1.0,2.0,1.0,-1.0,2.0,2.0,-1.0,2.0,-2.0,-1.0" playingFieldSize="8" color="blue" rotateOnly hideGrid explodeOnGrab)

[[35]] cubes

:::

    // Page 7

---

### Cuboids

::: column.grow

As with a square being rectangle, a cube is a cuboid.

A __cuboid__ is a box-shaped, where all six sides are rectangles. For example, pizza, cereal or shoe boxes are all cuboids.

Cuboids are some of the most common polyhedra we use every day.

::: column.fit

    figure: x-img(src="images/ch1_10.jpg" width="200" height="156")

:::

---

{.todo} 3D; no pointing lines; hover for parts

Basically, a cuboid is a polyhedron with six rectangular faces. The opposite faces of cuboids are identical and parallel to each other.  Cuboids have  [[12]] edges, [[8]] vertices.

::: column(width=200)

    figure: x-img(src="images/ch1_8.png" width="200" height="200")

::: column.grow

An average pizza box has dimensions as 33 cm x 33 cm x 4 cm. It means it has 33 cm in length, 33 cm in width, and 4 cm in height or depth.
Sometimes a cuboid has two square faces and four rectangular faces like most of the pizza boxes.

:::

---

    // Page 8

An average cereal box has dimensions of 30 cm x 20 cm x 8 cm.

::: column.fit

    figure: x-img(src="images/ch1_46.png" width="301" height="189")

::: column.grow

A Marketing agency built a 6 meters tall tipped-over cereal box outside the Vancouver Art Gallery in 2012.
Can you guess the dimensions of this cereal box?
Length: [[4 m]]   Width: [[1.6 m]]  Height: 6 m
A cereal box is a cuboid with six [[rectangular]] faces.

:::

---

    figure: x-img(src="images/ch1_48.png" width="600" height="257")

When you try to send boxes from one place to another via delivery services, the company asks you the dimensions of your package in the form of  “l x w x h” to calculate the size and weight of the box to determine the shipping rate. 

Try identifying the dimensions of the cuboids in the form of  “l x w x h”:

::: column(width=150)

    figure
      x-voxel-painter(width=150 height=200 shape="-0.5,0.0,-2.5,-0.5,1.0,-2.5,-0.5,-1.0,-2.5,0.5,-0.0,-2.5,0.5,-1.0,-2.5,0.5,1.0,-2.5,-0.5,0.0,-1.5,-0.5,1.0,-1.5,-0.5,-1.0,-1.5,0.5,-0.0,-1.5,0.5,-1.0,-1.5,-0.5,1.0,-3.5,0.5,1.0,-1.5,-0.5,-1.0,-3.5,-0.5,0.0,-3.5,0.5,-0.0,-3.5,0.5,-1.0,-3.5,0.5,1.0,-3.5,-0.5,0.0,-0.5,-0.5,1.0,-0.5,-0.5,-1.0,-0.5,0.5,-0.0,-0.5,0.5,-1.0,-0.5,0.5,1.0,-0.5,-0.5,0.0,0.5,-0.5,1.0,0.5,-0.5,-1.0,0.5,0.5,-0.0,0.5,0.5,-1.0,0.5,0.5,1.0,0.5,-0.5,0.0,1.5,-0.5,1.0,1.5,-0.5,-1.0,1.5,0.5,-0.0,1.5,0.5,-1.0,1.5,0.5,1.0,1.5,-0.5,0.0,2.5,-0.5,1.0,2.5,-0.5,-1.0,2.5,0.5,-0.0,2.5,0.5,-1.0,2.5,0.5,1.0,2.5,-0.5,0.0,3.5,-0.5,1.0,3.5,-0.5,-1.0,3.5,0.5,-0.0,3.5,0.5,-1.0,3.5,0.5,1.0,3.5" playingFieldSize="8" color="rgb(19,122,200)" rotateOnly hideGrid)

[[3]]x[[2]]x[[8]]

::: column(width=150)
    
    figure
      x-voxel-painter(width=150 height=200 shape="-0.0,-2.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,-0.0,0.0,0.0,0.0,2.0,0.0" playingFieldSize="5" color="rgb(32,188,252)" rotateOnly hideGrid)

[[5]]x[[1]]x[[1]]

::: column(width=150)

    figure
      x-voxel-painter(width=150 height=200 shape="1.0,-1.0,-0.5,1.0,-2.0,-0.5,1.0,1.0,-0.5,1.0,0.0,-0.5,1.0,2.0,-0.5,2.0,-1.0,-0.5,2.0,-2.0,-0.5,2.0,1.0,-0.5,2.0,0.0,-0.5,2.0,2.0,-0.5,-2.0,-1.0,-0.5,-2.0,-2.0,-0.5,-2.0,1.0,-0.5,-0.0,-2.0,-0.5,0.0,-1.0,-0.5,0.0,1.0,-0.5,-0.0,0.0,-0.5,0.0,2.0,-0.5,-2.0,0.0,-0.5,-2.0,2.0,-0.5,-1.0,-1.0,-0.5,-1.0,-2.0,-0.5,-1.0,1.0,-0.5,-1.0,0.0,-0.5,-1.0,2.0,-0.5,-2.0,-1.0,0.5,-2.0,-2.0,0.5,-2.0,1.0,0.5,-2.0,0.0,0.5,-2.0,2.0,0.5,-1.0,-1.0,0.5,-1.0,-2.0,0.5,-1.0,1.0,0.5,-1.0,0.0,0.5,-1.0,2.0,0.5,0.0,-1.0,-2.5,-0.0,-2.0,-2.5,0.0,1.0,-2.5,-0.0,0.0,-2.5,0.0,2.0,-2.5,1.0,-1.0,-2.5,1.0,-2.0,-2.5,1.0,1.0,-2.5,1.0,0.0,-2.5,1.0,2.0,-2.5,2.0,-1.0,-2.5,2.0,-2.0,-2.5,2.0,1.0,-2.5,2.0,0.0,-2.5,2.0,2.0,-2.5,-2.0,-1.0,-2.5,-2.0,-2.0,-2.5,-2.0,1.0,-2.5,-2.0,0.0,-2.5,-2.0,2.0,-2.5,-1.0,-1.0,-2.5,-1.0,-2.0,-2.5,-1.0,1.0,-2.5,-1.0,0.0,-2.5,-1.0,2.0,-2.5,-2.0,-1.0,-1.5,-2.0,-2.0,-1.5,-2.0,1.0,-1.5,-2.0,0.0,-1.5,-2.0,2.0,-1.5,-1.0,-1.0,-1.5,-1.0,-2.0,-1.5,-1.0,1.0,-1.5,-1.0,0.0,-1.5,-1.0,2.0,-1.5,0.0,-1.0,1.5,-0.0,-2.0,1.5,0.0,1.0,1.5,-0.0,0.0,1.5,0.0,2.0,1.5,1.0,-1.0,1.5,1.0,-2.0,1.5,1.0,1.0,1.5,1.0,0.0,1.5,1.0,2.0,1.5,2.0,-1.0,1.5,2.0,-2.0,1.5,2.0,1.0,1.5,2.0,0.0,1.5,2.0,2.0,1.5,-2.0,-1.0,1.5,-2.0,-2.0,1.5,-2.0,1.0,1.5,-2.0,0.0,1.5,-2.0,2.0,1.5,-1.0,-1.0,1.5,-1.0,-2.0,1.5,-1.0,1.0,1.5,-1.0,0.0,1.5,-1.0,2.0,1.5,-2.0,-1.0,2.5,-2.0,-2.0,2.5,-2.0,1.0,2.5,-2.0,0.0,2.5,-2.0,2.0,2.5,-1.0,-1.0,2.5,-1.0,-2.0,2.5,-1.0,1.0,2.5,-1.0,0.0,2.5,-1.0,2.0,2.5,0.0,-1.0,0.5,-0.0,-2.0,0.5,0.0,1.0,0.5,-0.0,0.0,0.5,0.0,2.0,0.5,1.0,-1.0,0.5,1.0,-2.0,0.5,1.0,1.0,0.5,1.0,0.0,0.5,1.0,2.0,0.5,2.0,-1.0,0.5,2.0,-2.0,0.5,2.0,1.0,0.5,2.0,0.0,0.5,2.0,2.0,0.5,0.0,-1.0,-1.5,-0.0,-2.0,-1.5,0.0,1.0,-1.5,-0.0,0.0,-1.5,0.0,2.0,-1.5,1.0,-1.0,-1.5,1.0,-2.0,-1.5,1.0,1.0,-1.5,1.0,0.0,-1.5,1.0,2.0,-1.5,2.0,-1.0,-1.5,2.0,-2.0,-1.5,2.0,1.0,-1.5,2.0,0.0,-1.5,2.0,2.0,-1.5,0.0,-1.0,2.5,-0.0,-2.0,2.5,0.0,1.0,2.5,-0.0,0.0,2.5,0.0,2.0,2.5,1.0,-1.0,2.5,1.0,-2.0,2.5,1.0,1.0,2.5,1.0,0.0,2.5,1.0,2.0,2.5,2.0,-1.0,2.5,2.0,-2.0,2.5,2.0,1.0,2.5,2.0,0.0,2.5,2.0,2.0,2.5" playingFieldSize="7" color="rgb(205,110,252)" rotateOnly hideGrid)

[[5]]x[[5]]x[[6]]

::: column(width=150)

    figure
      x-voxel-painter(width=150 height=200 shape="0.0,-2.0,0.0,-1.0,-2.0,0.0,1.0,-2.0,0.0,0.0,-3.0,0.0,-1.0,-3.0,0.0,1.0,-3.0,0.0,-0.0,1.0,0.0,-1.0,1.0,0.0,1.0,1.0,0.0,0.0,0.0,0.0,-1.0,0.0,0.0,1.0,0.0,0.0,0.0,-1.0,0.0,-1.0,-1.0,0.0,1.0,-1.0,0.0,-0.0,3.0,0.0,-1.0,3.0,0.0,1.0,3.0,0.0,-0.0,2.0,0.0,-1.0,2.0,0.0,1.0,2.0,0.0" playingFieldSize="7" color="rgb(256,157,237)" rotateOnly hideGrid)

[[7]]x[[3]]x[[1]]

:::

---

    // Page 9

### Volume

::: column.fit

    figure: x-img(src="images/ch1_36.png" width="200" height="138")

::: column.grow

According to a legend, there was a devastating plague in Greece in 430BC. The Delians (citizens of a Greek Island, Delos) went to the temple of Apollo who told them that the plague will stop when they ___double the volume of his altar.___

:::

We can find the volume of more complex shapes by determining how many cubes of volume 1 it contains. 

The Apollo’s altar was a cubical temple with dimensions of five meters as its length, width, and height.

The Delians doubled the sides of the altar, but the plague did not stop. What went wrong?

One way to find the volume of a cuboid is to fill the cuboid with unit cubes.

Volume is the number of cubic units that fill a 3D region, without any gaps or overlaps.

---

> id: temple-display-1

Let’s look at Apollo’s altar. If the edge length of the original altar was 5 units, then its base is a 5x5 square that has [[25]] unit cubes.

::: column.fit

    figure
      x-voxel-painter(width=200 height=200 shape="" playingFieldSize="5" rotateOnly hideGrid)

::: column.grow

We continue to fill the altar by adding more cubes. 
The first layer is a 5 x 5 square made up from [[25]] cubes.

:::

---

> id: temple-filling

    // Page 10

    figure
      x-voxel-painter(width=300 height=300 shape="" playingFieldSize="5" rotateOnly hideGrid)

There will be [[5]] layers of 25 cubes.
There must be `5 x 25 = input(125)` cubes to fill the entire altar.

---

__It means the original cubic altar has a volume of 125 cubic units.__

The Delians did not follow the instructions carefully. They [[doubled each side]] of the altar.
Let’s see what happened when they doubled the sides. 

::: column.fit

    figure
      x-voxel-painter(width=300 height=300 color="blue" shape="4.5,-2.5,4.6,4.5,-3.5,4.6,4.5,-4.5,4.6,4.5,2.5,4.6,4.5,1.5,4.6,4.5,0.5,4.6,4.5,-0.5,4.6,4.5,4.5,4.6,4.5,3.5,4.6,1.5,-4.5,4.6,2.5,-4.5,4.6,3.5,-4.5,4.6,-4.5,1.5,4.6,-2.5,-4.5,4.6,-1.5,-4.5,4.6,-0.5,-4.5,4.6,0.5,-4.5,4.6,-4.5,-4.5,4.6,-3.5,-4.5,4.6,-4.5,2.5,4.6,-4.5,3.5,4.6,-4.5,4.5,4.6,-4.5,-2.5,4.6,-4.5,-1.5,4.6,-4.5,-0.5,4.6,-4.5,0.5,4.6,4.5,-1.5,0.5,-4.5,-3.5,4.6,-1.5,4.5,4.6,-2.5,4.5,4.6,-3.5,4.5,4.6,2.5,4.5,4.6,1.5,4.5,4.6,0.5,4.5,4.6,-0.5,4.5,4.6,4.5,-2.5,0.5,3.5,4.5,4.6,4.5,-3.5,0.5,4.5,-4.5,0.5,4.5,2.5,0.5,4.5,1.5,0.5,4.5,0.5,0.5,4.5,-0.5,0.5,4.5,4.5,0.5,4.5,3.5,0.5,1.5,-4.5,0.5,2.5,-4.5,0.5,3.5,-4.5,0.5,-2.5,-4.5,0.5,-1.5,-4.5,0.5,-0.5,-4.5,0.5,0.5,-4.5,0.5,-4.5,-4.5,0.5,-3.5,-4.5,0.5,-4.5,1.5,0.5,-4.5,2.5,0.5,-4.5,3.5,0.5,-4.5,4.5,0.5,-4.5,-2.5,0.5,-4.5,-1.5,0.5,-4.5,-0.5,0.5,-4.5,0.5,0.5,-4.5,-3.5,0.5,-1.5,4.5,0.5,-2.5,4.5,0.5,-3.5,4.5,0.5,2.5,4.5,0.5,1.5,4.5,0.5,0.5,4.5,0.5,-0.5,4.5,0.5,3.5,4.5,0.5,3.5,-1.5,4.6,3.5,-2.5,4.6,3.5,-3.5,4.6,3.5,2.5,4.6,3.5,1.5,4.6,3.5,0.5,4.6,3.5,-0.5,4.6,3.5,3.5,4.6,2.5,-1.5,4.6,2.5,-2.5,4.6,2.5,-3.5,4.6,2.5,2.5,4.6,2.5,1.5,4.6,2.5,0.5,4.6,2.5,-0.5,4.6,2.5,3.5,4.6,1.5,-1.5,4.6,1.5,-2.5,4.6,1.5,-3.5,4.6,1.5,2.5,4.6,1.5,1.5,4.6,1.5,0.5,4.6,1.5,-0.5,4.6,1.5,3.5,4.6,0.5,-1.5,4.6,0.5,-2.5,4.6,0.5,-3.5,4.6,0.5,2.5,4.6,0.5,1.5,4.6,0.5,0.5,4.6,0.5,-0.5,4.6,0.5,3.5,4.6,-0.5,-1.5,4.6,-0.5,-2.5,4.6,-0.5,-3.5,4.6,-0.5,2.5,4.6,-0.5,1.5,4.6,-0.5,0.5,4.6,-0.5,-0.5,4.6,-0.5,3.5,4.6,-1.5,-1.5,4.6,-1.5,-2.5,4.6,-1.5,-3.5,4.6,-1.5,2.5,4.6,-1.5,1.5,4.6,-1.5,0.5,4.6,-1.5,-0.5,4.6,-1.5,3.5,4.6,-2.5,-1.5,4.6,-2.5,-2.5,4.6,-2.5,-3.5,4.6,-2.5,2.5,4.6,-2.5,1.5,4.6,-2.5,0.5,4.6,-2.5,-0.5,4.6,-2.5,3.5,4.6,-3.5,-1.5,4.6,-3.5,-2.5,4.6,-3.5,-3.5,4.6,-3.5,2.5,4.6,-3.5,1.5,4.6,-3.5,0.5,4.6,-3.5,-0.5,4.6,-3.5,3.5,4.6,4.5,-1.5,-4.5,4.5,-2.5,-4.5,4.5,-3.5,-4.5,4.5,-4.5,-4.5,4.5,2.5,-4.5,4.5,1.5,-4.5,4.5,0.5,-4.5,4.5,-0.5,-4.5,4.5,4.5,-4.5,4.5,3.5,-4.5,1.5,-4.5,-4.5,2.5,-4.5,-4.5,3.5,-4.5,-4.5,-2.5,-4.5,-4.5,-1.5,-4.5,-4.5,-0.5,-4.5,-4.5,0.5,-4.5,-4.5,-4.5,-4.5,-4.5,-3.5,-4.5,-4.5,-4.5,1.5,-4.5,-4.5,2.5,-4.5,-4.5,3.5,-4.5,-4.5,4.5,-4.5,-4.5,-2.5,-4.5,-4.5,-1.5,-4.5,-4.5,-0.5,-4.5,-4.5,0.5,-4.5,-4.5,-3.5,-4.5,-1.5,4.5,-4.5,-2.5,4.5,-4.5,-3.5,4.5,-4.5,2.5,4.5,-4.5,1.5,4.5,-4.5,0.5,4.5,-4.5,-0.5,4.5,-4.5,3.5,4.5,-4.5,3.5,-1.5,-4.5,3.5,-2.5,-4.5,3.5,-3.5,-4.5,3.5,2.5,-4.5,3.5,1.5,-4.5,3.5,0.5,-4.5,3.5,-0.5,-4.5,3.5,3.5,-4.5,2.5,-1.5,-4.5,2.5,-2.5,-4.5,2.5,-3.5,-4.5,2.5,2.5,-4.5,2.5,1.5,-4.5,2.5,0.5,-4.5,2.5,-0.5,-4.5,2.5,3.5,-4.5,1.5,-1.5,-4.5,1.5,-2.5,-4.5,1.5,-3.5,-4.5,1.5,2.5,-4.5,1.5,1.5,-4.5,1.5,0.5,-4.5,1.5,-0.5,-4.5,1.5,3.5,-4.5,0.5,-1.5,-4.5,0.5,-2.5,-4.5,0.5,-3.5,-4.5,0.5,2.5,-4.5,0.5,1.5,-4.5,0.5,0.5,-4.5,0.5,-0.5,-4.5,0.5,3.5,-4.5,-0.5,-1.5,-4.5,-0.5,-2.5,-4.5,-0.5,-3.5,-4.5,-0.5,2.5,-4.5,-0.5,1.5,-4.5,-0.5,0.5,-4.5,-0.5,-0.5,-4.5,-0.5,3.5,-4.5,-1.5,-1.5,-4.5,-1.5,-2.5,-4.5,-1.5,-3.5,-4.5,-1.5,2.5,-4.5,-1.5,1.5,-4.5,-1.5,0.5,-4.5,-1.5,-0.5,-4.5,-1.5,3.5,-4.5,-2.5,-1.5,-4.5,-2.5,-2.5,-4.5,-2.5,-3.5,-4.5,-2.5,2.5,-4.5,-2.5,1.5,-4.5,-2.5,0.5,-4.5,-2.5,-0.5,-4.5,-2.5,3.5,-4.5,-3.5,-1.5,-4.5,-3.5,-2.5,-4.5,-3.5,-3.5,-4.5,-3.5,2.5,-4.5,-3.5,1.5,-4.5,-3.5,0.5,-4.5,-3.5,-0.5,-4.5,-3.5,3.5,-4.5,4.5,-1.5,1.5,4.5,-2.5,1.5,4.5,-3.5,1.5,4.5,-4.5,1.5,4.5,2.5,1.5,4.5,1.5,1.5,4.5,0.5,1.5,4.5,-0.5,1.5,4.5,4.5,1.5,4.5,3.5,1.5,1.5,-4.5,1.5,2.5,-4.5,1.5,3.5,-4.5,1.5,-2.5,-4.5,1.5,-1.5,-4.5,1.5,-0.5,-4.5,1.5,0.5,-4.5,1.5,-4.5,-4.5,1.5,-3.5,-4.5,1.5,-4.5,1.5,1.5,-4.5,2.5,1.5,-4.5,3.5,1.5,-4.5,4.5,1.5,-4.5,-2.5,1.5,-4.5,-1.5,1.5,-4.5,-0.5,1.5,-4.5,0.5,1.5,-4.5,-3.5,1.5,-1.5,4.5,1.5,-2.5,4.5,1.5,-3.5,4.5,1.5,2.5,4.5,1.5,1.5,4.5,1.5,0.5,4.5,1.5,-0.5,4.5,1.5,3.5,4.5,1.5,4.5,-1.5,2.5,4.5,-2.5,2.5,4.5,-3.5,2.5,4.5,-4.5,2.5,4.5,2.5,2.5,4.5,1.5,2.5,4.5,0.5,2.5,4.5,-0.5,2.5,4.5,4.5,2.5,4.5,3.5,2.5,1.5,-4.5,2.5,2.5,-4.5,2.5,3.5,-4.5,2.5,-2.5,-4.5,2.5,-1.5,-4.5,2.5,-0.5,-4.5,2.5,0.5,-4.5,2.5,-4.5,-4.5,2.5,-3.5,-4.5,2.5,-4.5,1.5,2.5,-4.5,2.5,2.5,-4.5,3.5,2.5,-4.5,4.5,2.5,-4.5,-2.5,2.5,-4.5,-1.5,2.5,-4.5,-0.5,2.5,-4.5,0.5,2.5,-4.5,-3.5,2.5,-1.5,4.5,2.5,-2.5,4.5,2.5,-3.5,4.5,2.5,2.5,4.5,2.5,1.5,4.5,2.5,0.5,4.5,2.5,-0.5,4.5,2.5,3.5,4.5,2.5,4.5,-1.5,3.5,4.5,-2.5,3.5,4.5,-3.5,3.5,4.5,-4.5,3.5,4.5,2.5,3.5,4.5,1.5,3.5,4.5,0.5,3.5,4.5,-0.5,3.5,4.5,4.5,3.5,4.5,3.5,3.5,1.5,-4.5,3.5,2.5,-4.5,3.5,3.5,-4.5,3.5,-2.5,-4.5,3.5,-1.5,-4.5,3.5,-0.5,-4.5,3.5,0.5,-4.5,3.5,-4.5,-4.5,3.5,-3.5,-4.5,3.5,-4.5,1.5,3.5,-4.5,2.5,3.5,-4.5,3.5,3.5,-4.5,4.5,3.5,-4.5,-2.5,3.5,-4.5,-1.5,3.5,-4.5,-0.5,3.5,-4.5,0.5,3.5,-4.5,-3.5,3.5,-1.5,4.5,3.5,-2.5,4.5,3.5,-3.5,4.5,3.5,2.5,4.5,3.5,1.5,4.5,3.5,0.5,4.5,3.5,-0.5,4.5,3.5,3.5,4.5,3.5,4.5,-1.5,-3.5,4.5,-2.5,-3.5,4.5,-3.5,-3.5,4.5,-4.5,-3.5,4.5,2.5,-3.5,4.5,1.5,-3.5,4.5,0.5,-3.5,4.5,-0.5,-3.5,4.5,4.5,-3.5,4.5,3.5,-3.5,1.5,-4.5,-3.5,2.5,-4.5,-3.5,3.5,-4.5,-3.5,-2.5,-4.5,-3.5,-1.5,-4.5,-3.5,-0.5,-4.5,-3.5,0.5,-4.5,-3.5,-4.5,-4.5,-3.5,-3.5,-4.5,-3.5,-4.5,1.5,-3.5,-4.5,2.5,-3.5,-4.5,3.5,-3.5,-4.5,4.5,-3.5,-4.5,-2.5,-3.5,-4.5,-1.5,-3.5,-4.5,-0.5,-3.5,-4.5,0.5,-3.5,-4.5,-3.5,-3.5,-1.5,4.5,-3.5,-2.5,4.5,-3.5,-3.5,4.5,-3.5,2.5,4.5,-3.5,1.5,4.5,-3.5,0.5,4.5,-3.5,-0.5,4.5,-3.5,3.5,4.5,-3.5,4.5,-1.5,-2.5,4.5,-2.5,-2.5,4.5,-3.5,-2.5,4.5,-4.5,-2.5,4.5,2.5,-2.5,4.5,1.5,-2.5,4.5,0.5,-2.5,4.5,-0.5,-2.5,4.5,4.5,-2.5,4.5,3.5,-2.5,1.5,-4.5,-2.5,2.5,-4.5,-2.5,3.5,-4.5,-2.5,-2.5,-4.5,-2.5,-1.5,-4.5,-2.5,-0.5,-4.5,-2.5,0.5,-4.5,-2.5,-4.5,-4.5,-2.5,-3.5,-4.5,-2.5,-4.5,1.5,-2.5,-4.5,2.5,-2.5,-4.5,3.5,-2.5,-4.5,4.5,-2.5,-4.5,-2.5,-2.5,-4.5,-1.5,-2.5,-4.5,-0.5,-2.5,-4.5,0.5,-2.5,-4.5,-3.5,-2.5,-1.5,4.5,-2.5,-2.5,4.5,-2.5,-3.5,4.5,-2.5,2.5,4.5,-2.5,1.5,4.5,-2.5,0.5,4.5,-2.5,-0.5,4.5,-2.5,3.5,4.5,-2.5,4.5,-1.5,-1.5,4.5,-2.5,-1.5,4.5,-3.5,-1.5,4.5,-4.5,-1.5,4.5,2.5,-1.5,4.5,1.5,-1.5,4.5,0.5,-1.5,4.5,-0.5,-1.5,4.5,4.5,-1.5,4.5,3.5,-1.5,1.5,-4.5,-1.5,2.5,-4.5,-1.5,3.5,-4.5,-1.5,-2.5,-4.5,-1.5,-1.5,-4.5,-1.5,-0.5,-4.5,-1.5,0.5,-4.5,-1.5,-4.5,-4.5,-1.5,-3.5,-4.5,-1.5,-4.5,1.5,-1.5,-4.5,2.5,-1.5,-4.5,3.5,-1.5,-4.5,4.5,-1.5,-4.5,-2.5,-1.5,-4.5,-1.5,-1.5,-4.5,-0.5,-1.5,-4.5,0.5,-1.5,-4.5,-3.5,-1.5,-1.5,4.5,-1.5,-2.5,4.5,-1.5,-3.5,4.5,-1.5,2.5,4.5,-1.5,1.5,4.5,-1.5,0.5,4.5,-1.5,-0.5,4.5,-1.5,3.5,4.5,-1.5,4.5,-1.5,-0.5,4.5,-2.5,-0.5,4.5,-3.5,-0.5,4.5,-4.5,-0.5,4.5,2.5,-0.5,4.5,1.5,-0.5,4.5,0.5,-0.5,4.5,-0.5,-0.5,4.5,4.5,-0.5,4.5,3.5,-0.5,1.5,-4.5,-0.5,2.5,-4.5,-0.5,3.5,-4.5,-0.5,-2.5,-4.5,-0.5,-1.5,-4.5,-0.5,-0.5,-4.5,-0.5,0.5,-4.5,-0.5,-4.5,-4.5,-0.5,-3.5,-4.5,-0.5,-4.5,1.5,-0.5,-4.5,2.5,-0.5,-4.5,3.5,-0.5,-4.5,4.5,-0.5,-4.5,-2.5,-0.5,-4.5,-1.5,-0.5,-4.5,-0.5,-0.5,-4.5,0.5,-0.5,-4.5,-3.5,-0.5,-1.5,4.5,-0.5,-2.5,4.5,-0.5,-3.5,4.5,-0.5,2.5,4.5,-0.5,1.5,4.5,-0.5,0.5,4.5,-0.5,-0.5,4.5,-0.5,3.5,4.5,-0.5,4.5,-1.5,4.6" playingFieldSize="10" rotateOnly hideGrid)

::: column.grow

When we double the sides of the cıube as the Delians have done with the incorrect altar, there will be [[100]] cubes and [[10]] layers. Therefore, the second altar they built had a volume of [[1000]] cubic units.

Doubling the dimensions of a three-dimensional figure will increase its volume by a factor of [[8]]. 

The Delians did not double the altar - they made it 8 times bigger.

:::

They should have doubled the volume instead of the side lengths.

::: column.fit

    figure: x-img(src="images/ch1_43.png" width="200" height="133")

::: column.grow

To find the volume of the cube, the number of cubes in the first layer is multiplied by the height. This first layer is called the base and usually refers to the top and bottom faces of the cube.

:::

---

> id: temple-display-2

    // Page 11

::: column.fit

    figure
      x-voxel-painter(width=200 height=200 shape="" playingFieldSize="5" rotateOnly hideGrid)

::: column.grow

Recall the original altar. We counted [[25]] cubes in each layer. Alternatively, we could have calculated the [[ area | length | diagonal]] of the base. 
The number of layers we added constitutes the [[height]] of the altar. 

We calculated the volume of the cubic altar by multiplying [[Base Area]] and [[height]].

:::

---

Base Area => `ABase = input(5) x input(5) =25 m^2` and height is 5 meters

`Volume = A_Base x h`

`Volume = 25 x 5 = input(125) m^3`

In other words, the volume of a cube is the product of its length, [[width]], and [[height]].

`Volume = length x width x height`

::: column.grow

A cube has the same value as its length, width, and height. 
The volume of a cube with a side length of “a” units is 
`V = a • a • a = blank(x, "a3", "3a", "3 + a")`

Multiplying three edge lengths allows us to determine the volume of cube efficiently.

::: column.fit

    figure: x-img(src="images/ch1_29.png" width="92" height="87")

    // TODO INTERACTIVE: cube

:::

A cube with an edge length of 3 centimeters has a volume of [[27]] cubic centimeters, which we can write as 27 cm3.

A cube with an edge length of 4 inches has a volume of [[64]] cubic inches, which we can write as 64 [[in3]].

Volume is always measured in cubic units, such as cubic inches (in3), cubic feet [[ft3]], cubic centimeters (cm3), or cubic meters [[m3]].

Greek temples have a very predictable layout. At the center, there is a section called Cella that holds a statue of the God to which the temple is dedicated. The cella is surrounded by a long string of columns.  They are not always in cubic forms but mostly in cuboids.

    // Page 12

Helping to prevent any future conflicts, we can find a general method to find the volume of all cuboids?

    figure: x-img(src="images/ch1_45.png" width="600" height="400")

{.caption} The Model of Aphrodite Temple in Greece

::: column.fit

    figure: x-img(src="images/ch1_blueprint.png" width="200" height="132")

::: column.grow

The first layer of the cuboid has [[24]] cubes. It means the base area is 24 square units.

[[Height]] tells us the number of layers it takes to stack up to the cuboid.

The total number of cubes to be used to create this cuboid is [[24 x 5 = 120]].

:::

The volume is 120 cubic units.

We again calculated the volume by multiplying [[Base Area]] and  [[Height]].

`Volume = Base Area x height`
`V = A_Base x h`

In other words, the formula for the volume of all cuboids is the [[product]] of its three dimensions.

`Volume = length x width x height`
`V = l x w x h`

Now it’s your turn – find the volumes of the following cuboids.

    // Page 13

::: column(width=200)

    figure
      x-voxel-painter(width=200 height=200 shape="0.5,-0.5,0.5,-0.5,-0.5,0.5,1.5,-0.5,0.5,0.5,-1.5,0.5,-0.5,-1.5,0.5,1.5,-1.5,0.5,-1.5,1.5,0.5,-1.5,0.5,0.5,-1.5,-0.5,0.5,-1.5,-1.5,0.5,0.5,1.5,-0.5,-0.5,1.5,-0.5,1.5,1.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,1.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,1.5,-0.5,-0.5,0.5,-1.5,-0.5,-0.5,-1.5,-0.5,1.5,-1.5,-0.5,-1.5,1.5,-0.5,-1.5,0.5,-0.5,-1.5,-0.5,-0.5,-1.5,-1.5,-0.5,0.5,1.5,-1.5,-0.5,1.5,-1.5,1.5,1.5,-1.5,0.5,0.5,-1.5,-0.5,0.5,-1.5,1.5,0.5,-1.5,0.5,-0.5,-1.5,-0.5,-0.5,-1.5,1.5,-0.5,-1.5,0.5,-1.5,-1.5,-0.5,-1.5,-1.5,1.5,-1.5,-1.5,-1.5,1.5,-1.5,-1.5,0.5,-1.5,0.5,1.5,0.5,-0.5,1.5,0.5,-1.5,-0.5,-1.5,1.5,1.5,0.5,-1.5,-1.5,-1.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,1.5,1.5,1.5,0.5,0.5,-0.5,1.5,1.5,1.5,1.5,1.5,0.5,0.5,1.5,-0.5,0.5,1.5,1.5,0.5,1.5,0.5,-0.5,1.5,-0.5,-0.5,1.5,1.5,-0.5,1.5,0.5,-1.5,1.5,-0.5,-1.5,1.5,1.5,-1.5,1.5,-1.5,1.5,1.5,-1.5,0.5,1.5,-1.5,-0.5,1.5,-1.5,-1.5,1.5" playingFieldSize="4" color="rgb(250,225,90)" rotateOnly hideGrid)

Volume= [[4]] x [[4]] x [[4]] = [[64]]

::: column(width=200)

    figure
      x-voxel-painter(width=200 height=200 shape="1.0,0.5,2.0,0.0,0.5,2.0,1.0,-0.5,2.0,0.0,-0.5,2.0,-1.0,0.5,2.0,-1.0,-0.5,2.0,-1.0,0.5,0.0,-1.0,-0.5,0.0,1.0,0.5,-1.0,0.0,0.5,-1.0,1.0,-0.5,-1.0,0.0,-0.5,-1.0,-1.0,0.5,-1.0,-1.0,-0.5,-1.0,1.0,0.5,-2.0,0.0,0.5,-2.0,1.0,-0.5,-2.0,0.0,-0.5,-2.0,-1.0,0.5,-2.0,-1.0,-0.5,-2.0,1.0,0.5,0.0,0.0,0.5,0.0,1.0,-0.5,0.0,0.0,-0.5,0.0,1.0,0.5,1.0,0.0,0.5,1.0,1.0,-0.5,1.0,0.0,-0.5,1.0,-1.0,0.5,1.0,-1.0,-0.5,1.0" playingFieldSize="5" color="rgb(120,237,230)" rotateOnly hideGrid)

Volume= [[2]] x [[3]] x [[5]] = [[30]]

::: column(width=200)

    figure
      x-voxel-painter(width=200 height=200 shape="1.0,2.5,0.0,0.0,2.5,0.0,1.0,1.5,0.0,0.0,1.5,0.0,-1.0,2.5,0.0,-1.0,1.5,0.0,1.0,-1.5,0.0,0.0,-1.5,0.0,1.0,-2.5,0.0,0.0,-2.5,0.0,-1.0,-1.5,0.0,-1.0,-2.5,0.0,1.0,4.5,0.0,0.0,4.5,0.0,1.0,3.5,0.0,0.0,3.5,0.0,-1.0,4.5,0.0,-1.0,3.5,0.0,1.0,-3.5,0.0,0.0,-3.5,0.0,1.0,-4.5,0.0,0.0,-4.5,0.0,-1.0,-3.5,0.0,-1.0,-4.5,0.0,1.0,0.5,0.0,0.0,0.5,0.0,1.0,-0.5,0.0,0.0,-0.5,0.0,-1.0,0.5,0.0,-1.0,-0.5,0.0" playingFieldSize="10" color="rgb(139,160,58)" rotateOnly hideGrid)

Volume= [[1]] x [[3]] x [[10]] = [[30]]

:::

Some cuboids may have the same volume although they have different shapes.

::: column

{.todo} INTERACTIVE: Shape-making

::: column

Use the unit cubes to create a cuboid so that the volume is 24 cubic units.

It is [[ not possible | possible]] to create a cube by using 24 unit cubes since 24 is not a perfect cube number.

How many different cuboids can you create by using 24 cubes?

[[Text Box]]

:::

By finding the missing dimensions of the different cuboids with a volume of 24 cubic units, we can observe how the base area and the height change when we have a certain amount of cubes to create the volume.

{.todo} Table

    // Page 14

::: column.fit

    figure: x-img(src="images/ch1_12.png" width="200" height="140")

::: column.grow

If the base area of a cuboid smaller than the other, then its height has to be [[bigger | smaller | equal to]] to have the same volume.

If two cuboids have the same height, then the one with the greater base area has a [[greater|lesser]] volume.

:::

We now know about how to find the volume of the cuboids, can we find another measure about them as well?

---


----------------------------------------------------------------------------------------------------


## Nets and Surface Area

> section: surface-area
> sectionStatus: dev

### Meaning

::: column.fit

    // https://imgur.com/iJVU7
    x-img(width=300 height=179 src="images/ch2_sticky_notes_car.svg")

::: column.grow

_As a prank, you may want to cover your friend’s car with lots of sticky notes. But how many will you need?_

:::

---

Let’s create a model of the car to estimate the number of sticky notes we will need.

We can use the unit cubes to create the model of the car:

::: column.fit

    figure
      x-voxel-painter(width=300 height=300 shape="0.5,-0.5,0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-1.5,-0.5,-0.5,-0.5,-0.5,-0.5,-1.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,1.5,-0.5,0.5,0.5,-0.5,-0.5,1.5,-0.5,-0.5,0.5,-0.5" playingFieldSize="2" orthographic color-sides rotateOnly hideGrid)

::: column.grow

You can rotate the model to find how many square units it takes to cover all the faces of this three-dimensional (3D) model excluding the bottom.

The sum of the faces of the front and back = [[8]] squares.

Top of the model: [[8]] squares.

Total of the left and right sides: [[12]] squares.

The total area is [[28]] __square units__, excluding the bottom.

:::

---

{.todo} DISCUSS: Do we need this blank? Perhaps we should do something else with it.

This means the surface area of the actual car is approximately 28 __square__ [[meters | centimeters | inches | feet]].

---

{.todo} DISCUSS: use equation editor instead?

If each sticky note is `0.006 m^2`, then 
we will need to have `input(28)/input(0.006)=4467` sticky notes to cover the car!

---

Here, we have calculated the __surface area__ of the car model to find the total number of sticky notes needed.

    // page 2

__The surface area of a 3D solid is the number of square units that cover all the faces of the polyhedron, without any gaps or overlaps.__

::: column.grow

Here is a rectangular prism built up of [[12]] cubes.

It has [[6]] faces, but we only see three of them in the sketch.

::: column.fit

    figure
      x-voxel-painter(width=300 height=300 shape="0.5,-0.5,-0.0,0.5,-0.5,-1.0,-0.5,-0.5,-0.0,0.5,-0.5,1.0,-0.5,-0.5,-1.0,-0.5,-0.5,1.0,0.5,0.5,-0.0,-0.5,0.5,-0.0,0.5,0.5,1.0,-0.5,0.5,1.0,0.5,0.5,-1.0,-0.5,0.5,-1.0" playingFieldSize="3" color-sides rotateOnly hideGrid)

:::

---

Rotate the shape to look at all of its faces.

{.todo} INTERACTIVE: Faces area display

---

Surface Area = [[32]] __square units__.
The units used to measure the surface area are square meter (`"m"^2`), square centimeter (`"cm"^2`), square inches (`"in"^2`), square feet (`"ft"^2`), and so forth.

---

### Surface Area vs Volume

Surface area and [volume](gloss:volume) are different attributes of 3D figures.  The key difference between them is that the [[surface area | volume]] is a 2D measurement and the [[volume | surface area]] is a 3D measurement of a solid.

---

You may build different solids by using the same number of cubes.

::: column.fit

{.todo} INTERACTIVE: voxel painting

::: column.grow

Use 6 cubes to create a solid with the greatest possible surface area.

A cuboid with the surface area of [[26]] unit squares is the maximum surface area we can create by using the six cubes.

Now, create a solid with the smallest possible surface area.

:::

---

The minimum surface area is [[22]] unit squares.

---

    // page 3

Both of the solids you have created have a volume of [[6]] cubic units but have different surface areas. Notice the cubes that form solids with the more surface area are more [[spread out | compact]]. More of their faces are exposed.

---

In nature, having a large or small surface area with respect to the volume determines the vital characteristics of living things. 

The relation between the surface area and the volume of an object is so important that it affects where an animal can live when a cell has to divide, or the size of the wings of an airbus plane.

For instance, do you know why elephants have giant ears?

    // https://depositphotos.com/11745121/stock-photo-elephant-isolated-on-white.html
    figure: x-img(width=600 height=400 src="https://static9.depositphotos.com/1007373/1174/i/950/depositphotos_11745121-stock-photo-elephant-isolated-on-white.jpg")

African elephants are the largest land animals on Earth. They can be identified by their larger ears with respect to other elephant species. They grow up to 4 meters and weigh 6 tones on average.  

Elephants and all animals generate heat internally in proportion to their volume. Larger animals produce more heat with respect to small ones like mice.

Most of the reactions like heat transfer occur at the surface of the objects and living things. It means if a large animal lives in a hot environment, then it needs to lose heat by [[maximizing | minimizing]] its surface area.

---

::: column(width=200)

    figure
      x-voxel-painter(width=200 height=200 shape="0.5,-1.5,-0.5,0.5,-1.5,-1.5,-0.5,-1.5,-0.5,0.5,-1.5,0.5,-0.5,-1.5,-1.5,-0.5,-1.5,0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,-1.5,-0.5,0.5,-1.5,0.5,1.5,-1.5,-0.5,1.5,-1.5,0.5,0.5,-0.5,0.5,-0.5,-1.5,-0.5,0.5,-0.5,-0.5,-0.5,-1.5,0.5,1.5,-0.5,-0.5,1.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,1.5,0.5,-0.5,1.5,0.5,0.5,-1.5,1.5,-0.5,-1.5,1.5,0.5,-0.5,1.5,-0.5,-0.5,1.5,0.5,0.5,1.5,-0.5,0.5,1.5,0.5,1.5,1.5,-0.5,1.5,1.5" playingFieldSize="4" color="rgb(129,129,129)" rotateOnly hideGrid)

::: column.fit

    figure: x-img(src="images/ch2_42.png" width="204" height="200")

::: column.grow

You may think of elephants as a 4 x 4 x 2 cuboid which has a surface area of [[64]] square units and a volume of [[32]] cubic units.  They need to increase their surface area to lose the heat produced by their large volume faster.

:::

---

    // page 4

::: column.grow

The ear of the African elephant is on average 180 cm by 110 cm.  Both ears add a total of [[8]] `"m"^2` surface area to the elephant. The ears increase the elephant’s surface area, while barely increasing the volume to make the heat loss faster.

::: column.fit

    // https://www.robertharding.com/preview/832-379041/african-elephant-loxodonta-africana-portrait-extended-ears-aggressive/
    x-img(width=200 height=134 src="https://www.robertharding.com/watermark.php?type=preview&im=RF/RH_RF/HORIZONTAL/832-379041")

:::

---

Alternatively, if you were living in the Antarctic you would want a small surface area to volume ratio. This would reduce heat loss and conserve it in the body. That’s why polar versions of animals are usually [[bigger | smaller]] with respect to the other species in the same family.

---

    // https://www.deviantart.com/bigfancat/art/The-bears-size-fancat-766492662
    figure: x-img(width=760 height=358 src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2344a679-4e4d-4a4c-86e1-d5c45b2f06cf/dcocliu-eb3044fa-3a87-43e4-8c3a-de95a11fdb0f.jpg/v1/fill/w_1024,h_482,q_75,strp/the_bears_size__fancat__by_bigfancat_dcocliu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00ODIiLCJwYXRoIjoiXC9mXC8yMzQ0YTY3OS00ZTRkLTRhNGMtODZlMS1kNWM0NWIyZjA2Y2ZcL2Rjb2NsaXUtZWIzMDQ0ZmEtM2E4Ny00M2U0LThjM2EtZGU5NWExMWZkYjBmLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.V_Q04x86SQC81P2wJ0lKXKN3EP_NXKhmeYV71ayTVgU")

The relationship between the volume and the surface area as a shape's dimensions changes is a mathematical principle called the [square-cube law](gloss:square-cube-law). __(SA:V).__

Animals can be thought of as simple cubes:

{.todo} INTERACTIVE: Cube surface areas and volumes

    // page 5

As you continue to increase the edge size of the cube, [[Volume |Surface Area]] will grow
faster.

---

    figure: x-img(width=600 height=475 src="images/volume-area.png")

[Galileo](bio:galileo) might have been the first to formally recognize this when he stated in his 1638 book, Two New Science. In addition to biology, it has many applications in different scientific fields like mechanics, ecology, engineering.

### Surface Area vs Volume

    // page 6

Let’s drag the examples of quantities related to volume and surface area to complete the diagram:

{.todo} INTERACTIVE: Use Tinder-drag component

---

### Nets

Artists and mathematicians like [Leonardo Da Vinci](bio:leonardo) devoted much effort to represent 3D objects on 2D paper. Da Vinci’s greatest accomplishment in this area is the illustrations for [Luca Pacioli](bio:pacioli)'s 1509 book _The Divine Proportion_. Da Vinci drew roughly 60 different illustrations of polyhedra in the book.

    // page 7

    // https://www.georgehart.com/virtual-polyhedra/leonardo.html

::: column.fit

    x-img(width=150 height=207 src="https://www.georgehart.com/virtual-polyhedra/figs/leonardo-72-solid.jpg")

::: column.fit

    x-img(width=150 height=219 src="https://www.georgehart.com/virtual-polyhedra/figs/leonardo-72-vacuum.jpg")

::: column.fit

    x-img(width=150 height=184 src="https://www.georgehart.com/virtual-polyhedra/figs/leonardo-dodec-solid.jpg")

::: column.fit

    x-img(width=150 height=199 src="https://www.georgehart.com/virtual-polyhedra/figs/leonardo-dodec.jpg")

:::

Since we don't all have Da Vinci's artistic skills, we can use grid paper to help us draw polyhedra. Let’s start by drawing a __cube__ on the dotted grid.

{.todo} INTERACTIVE: Cube drawing

---

> id: net-1

When the solids get complicated, drawing them on a 2D paper gets harder too. But there is another way to represent the 3D solids on a 2D plane.

    // page 8

We can use the [nets](gloss:net) of the solids which are composed of polygons that form the faces of a polyhedron.

{.todo} INTERACTIVE: 3D Solids with a slider to open and close the net. (Maybe Da Vinci’s examples’ nets can be included)

    figure
      x-net(size=300 :p="progress")
      x-slider(:bind="progress" steps=1000 speed=1)

---

__They are the 2D coats that cover up the entire surface of 3D solids.__

For instance, the net of a cube consists of [[6]] squares. With the correct arrangement of the squares, they can fold up a cube.

---

Let’s try to draw the __net__ of a cube:

::: column(width=300)

{.todo} INTERACTIVE: Cube net drawing

::: column.grow

There are many different ways to arrange six squares to fold up as a cube.

Let’s have a look at which one of the below can be folded to a cube.

::: column.fit

    x-img(width=100 height=87 src="images/cubenet.png")

:::

---

{.todo} Net animations

    // COMMENT: After each animation

    // page 9

    // COMMENT: After A: 

The row of squares in Shape A can be folded into a ring and then the nearest square to the ring will close off a face, but the other square will have to overlap an existing face.

    // COMMENT: After B: 

The row of squares in Shape B can be folded into a ring, and the other two squares can close off the other two faces. You can visualize those two faces as the bases of the cube.

    // COMMENT: After C: 

When you fold the row of squares in Shape C into a ring, the fifth square will overlap the first one.

    // COMMENT: After D: 

The row of squares in Shape D can be folded into a ring, and the other two squares can close off the other two faces. You can visualize those two faces as the bases of the cube.

    // COMMENT: After zooming on B and D:

One of the most common cubes we come across every day are dice.

---

Let’s try to build our own fair die by inserting the faces correctly.

Opposite faces of a fair die always add up to 7.

{.todo} INTERACTIVE: Die faces nets matching

---

Now that we can identify opposite faces of a die using nets, let's try another puzzle:

::: column.fit

{.todo} INTERACTIVE: Face colors

::: column.grow

Each face of a cube is painted with a different color. 

Here are the different views of this painted die.

:::

---

The opposite face of the yellow is painted [[blue|purple|pink|green|red]].

---

The opposite face of the green is painted [[pink|blue|purple|green|red]].

---

The opposite face of the red is painted [[purple|blue|pink|green|red]].

    // page 10

_{button.btn.continue}Continue_

---

    // COMMENT: I have a matching game at the prisms and pyramids section that I can drag here? There I also used to game to review types of prims and pyramids too

    // COMMENT: Instead can we have an applet here that has regular triangle, pentagon, hexagon square  to let them create their nets with the help of number slider  - than we can open / close them to see their solids - in this way  we may have some questioning like the min number of faces for a polyhedron

{.todo} INTERACTIVE: Net construction

---

### Using nets to calculate the surface area

A __net__ allows us to see all the faces of a 3D solid at once. We can use the nets to find the surface areas of the cuboids instead of counting the numbers of squares in each face one by one.

    // page 11

Let’s find the surface area of this cuboid by using its net

::: column.fit

{.todo} INTERACTIVE: solid with a slider (solid <-> net)

::: column.grow

The net of the cuboid box shows three pairs of rectangles:

4 cm by 2 cm,

[[3]] cm by [[2]] cm, and

[[4]] cm by [[3]] cm.

:::

::: column.fit

    figure: x-img(src="images/ch2_16.png" width="300" height="154")

::: column.grow

With this information, we can now calculate the amount of cardboard needed to make the box; `(4 * 2) + (4 * 2) + (3 * 2) + (4 * 3) + (4 * 3) = input(52)  "square centimeters"`

The surface area of the cuboid is 52 [[`"cm"^2`|cm]].

:::

---

Use the slider to open the cuboid to its net. Then drag the side length measures to corresponding sides to find the surface area.

    // COMMENT: For now just include labels

{.todo} INTERACTIVE: solid <-> net

---

The pink rectangles have a total area of [[64]] `"m"^2`

---

The yellow rectangles have a total area of [[48]] `"m"^2`

---

The orange rectangles have a total area of [[24]] `"m"^2`

---

So the cuboid has a total area of [[136]] `"m"^2`.

---

Can we come up with shortcuts to find the surface area of the cuboids?

Let’s have a look at the cuboids here:

    // page 12

Use the sliders to open the nets of the cuboids.

{.todo} INTERACTIVE: solid <-> net

Drag the area calculations on the corresponding regions.

---

::: column.grow

`"Surface Area of the Cuboid" = ` _{x-equation(solution="2ab" keys="" short-var)}_ ` + ` _{x-equation(solution="2bc" keys="" short-var)}_ ` + ` _{x-equation(solution="2ac" keys="" short-var)}_

::: column(width=250)

`"Surface Area of the Cube" = ` _{x-equation(solution="6 a^2" keys="sup" short-var)}_

:::

---

Since nets are composed of plane figures that form the faces of a 3D Solid, we can always use them to calculate the surface area of even more complex solids.

::: column.fit

{.todo} Embed: https://www.geogebra.org/m/bXhjS2KJ

::: column.grow

Have a look at the soccer ball here, use the slider to open to its net. There are [[12]] pentagons and [[20]] hexagons. If the area of each pentagon is 30 `"cm"^2` and the area of each hexagon is 45 `"cm"^2`, then the surface area of the ball is [[1260]] `"cm"^2`.

:::

---

    // page 13

In the next chapter, we are going to look at the nets, surface area, and volume of different types of polyhedra.

---

## Prisms and Pyramids

> section: prism-pyramid
> sectionStatus: dev

::: column.fit

    figure: x-img(src="images/ch3_35.png" width="300" height="176")

::: column.grow

The amazing structure of the honey bee cells has attracted the attention of humans for centuries. 

Bees collect nectar and pollen from flowers to make honey for their colony.  Honey provides bees the energy they need to survive and reproduce, as well as to build their homes.

:::

::: column.fit

    figure: x-img(src="images/ch3_hex_prism.svg" width="218" height="205")

::: column.grow

These homes are called **honeycombs.** All the bees on earth are using the same shape to create their honeycombs.

_But why do bees_ create honeycombs in the shape they do?

:::

---

Honeycomb cells are actually a special kind of polyhedra called [prisms](gloss:prism).

_{span.comments(text="I wonder if there's an interactive that could go here first before diving in the vocab and various examples of prisms? Perhaps students can try to multiple copies of various prisms - some that can be aligned without any gaps and some that do create gaps? Then, for the ones that don't create gaps, they could think about which ones would build the best structure for bees? This might provide a better entry point before jumping into the vocab. | This could set up the 'maximum storage' section on the next page nicely. | In fact, that hexagonal prism can pill the words 'congruent', 'parallel' and 'bases'  to introduce the prism concept. On the other hand, I wanted to talk about 'which prisms can tile' concept later* | Have you gotten the direction or conversation you need to make a decision here? | The interactive with** can do this I guess - I also try to create an applet that can be used in the cylinders chapters as well")}A prism_ is a type of polyhedron with _**two**_ [congruent](pill:orange) _**polygonal faces**_ that are [parallel](pill:orange) to each other.

Those identical faces are called _{span.comments(text="(gloss:base)I you provided a glossary definition draft in a previous chapter. If so, no need to rewrite it there.")}**[bases](pill:orange)**_. They are often used to indicate the _top_ and _bottom_ of the prism. Actually, prisms are named according to the shape of their bases. That’s why honeycomb shapes are called [[hexagonal | rectangular |triangular]] prisms.

    // COMMENT: We should add a paragraph (and interactive diagram) that shows that all cross sections parallel to the bases are congruent.

---

::: column.fit

    figure: x-img(src="images/ch3_32.png" width="200" height="147")

::: column.grow

Imagine slicing a prism into lots of thin layers parallel to its base.

All cross sections will be exactly the same shape and size. The cross sections  will be **congruent.**

Think of a loaf of sliced bread, each bread slice has the same shape and size. The shape of the bread is a prism.

:::

There are all kinds of prisms like triangular prisms, rectangular prisms, pentagonal prisms, and so on. The **cuboids** we’ve seen in the previous chapter are also prisms: [[rectangular|triangular|pentagonal|hexagonal]] **prisms.**

---

    figure: x-img(src="images/ch3_62.png" width="600" height="257")

    // COMMENT: 3D Solids

    // COMMENT: (Cuboids)

Honeycomb cells are always horizontally aligned. They share walls with the neighbor cell to decrease the amount of wax used to build each cell.

::: column.grow

Those shared walls are the _{span.comments(text="(gloss:lateral-face)needs definition | Bumping this. | Lateral faces of a three-dimensional figure are the quadrilateral faces ( mostly rectangular) apart from the bases of the solid.")}**[lateral faces](pill:green)**_ of the hexagonal prisms. The lateral faces are [[rectangles|triangles|squares|pentagons|hexagons]].

::: column.fit

    figure: x-img(src="images/ch3_58.png" width="100" height="59")

:::

---

::: column.grow

In all kinds of prisms, the bases are connected by a set of rectangles _(or sometimes parallelograms)_ regardless of the type of the base.

The [net](gloss:net) of the hexagonal prism can provide a better view of all the faces. There are totally [[8]] _{span.comments(text="Interactive Solid with a slider - color-coded faces, vertices, edges")}**[faces](pill:blue)**_, [[2]] of them are the hexagonal bases and the remaining [[6]] of them are the rectangular lateral faces.

::: column.fit

    figure: x-img(src="images/ch3_21.png" width="200" height="165")

:::

---

A hexagonal prism has  [[12]] _{span.comments(text="(gloss:vertex)I you provided a glossary definition draft in a previous chapter. If so, no need to rewrite it there.")}**[vertices](pill:blue)**_ and [[18]] _{span.comments(text="(gloss:polyhedron-edge)")}**[edges](pill:green)**_ 

---

**Why do bees choose hexagonal prisms over the other prisms?**

    // COMMENT: An Interactive where the students can tile different prisms  to see which ones can tile

    figure: x-img(src="images/ch3_50.png" width="600" height="482")

_{span.comments(text="students can choose a prism and try to tile - triangular prisms give a check mark, pentagonal give a cross and so on...")}_

Hexagonal prisms can be aligned next to each other without any gaps or overlaps but also so can [cuboids](pill:blue) and [triangular prisms](pill:blue).

    figure: x-img(src="images/ch3_67.svg" width="444" height="159")

_{span.comments(text="This can be the next step of the previous animation")}_

Bees also need to have **maximum storage** for the honey without wasting more wax than necessary. This means that they need to use as little wax as possible to create their comb which can store as much honey as possible.

Recall the method we use to calculate the volume of the cuboids.

    // TODO?: Use math rendering

**Volume** = [[Base Area | Base Perimeter]] x [[height|width]]

---

Can we use the same formula for all prisms?

    figure: x-img(src="images/ch3_9.png" width="600" height="318")

::: column.grow

The reason that the volume of a cuboid is calculated as _{span.comments(text="pill to the sliced cuboid")}**`base area xx height`**_ is that; the cuboids are formed by repeated layers of the same size base. 

Let’s look at these prisms to see if they are all made up of the multiple layers of the same polygon that they have as a base.

::: column.fit

    figure: x-img(src="images/ch3_11.png" width="200" height="217")

:::

    // COMMENT: First scene: different prisms are given (non-sliced view) and not always in the upright position. Students can rotate the prisms to find and select the base area.

    // COMMENT: Second scene: After each selection, prisms can be sliced parallel to their bases to show they are made up of congruent polygons

Rotate the prisms to select their bases. 

    // COMMENT: For the triangular prism:

Let's look at the different slices of the prism.

All the triangular layers are the [[same|different]] size of the base.

---

    // COMMENT: For the hexagonal prism: Let's look at the different slices of the prism.

All the hexagonal layers are the [[same|different]] size of the base.

---

Since all prisms are made up from the multiple layers of their base, we [[can|cannot]] use the same formula

---

    // TODO?: Make purple

`"Volume"_"Prisms"` = [[Base Area|Base Perimeter]] x [[height|width]]

---

Now, use the slider to try the different polygons as the base of the prism that could be used as a honeycomb. Average cell width and length for a honeycomb is approximately 4mm and the depth is 10 mm.

::: tab

#### Triangular Prism

::: column.fit

    figure: x-img(src="images/ch3_16.png" width="200" height="162")

::: column.grow

Since the base of the prism an equilateral triangle, _{span.comments(text="pill to yellow area")}[Base Area](pill:blue)_ can be found by the `1/2 ("base" xx "height")`

`"A"_"Base" = (4 * 3.5) / 2 = 7 "mm"^2`

`"V"_"Prism" = "A"_"Base" xx "Height of the Prism"`

`"V"_"Prism" = ` _{span.comments(text="We can create equation fields for all the calculations")}_ `7 xx 10 = 70 "mm"^3`

:::
::: tab

#### Square Prism

::: column.fit

    figure: x-img(src="images/ch3_42.png" width="200" height="157")

::: column.grow

Since the base of the prism a square, _{span.comments(text="pill to yellow area")}[Base Area](pill:blue)_ can be found by squaring the side length 

`"A"_"Base" = 4 xx 4 = 16 "mm"^2`

`"V"_"Prism" = "A"_"Base" xx "Height of the Prism"`

`"V"_"Prism" = `_{span.comments(text="Equation Field")}`16 xx 10 = 160 "mm"^3`_

:::
::: tab

#### Hexagonal Prism

::: column.fit

    figure: x-img(src="images/ch3_53.png" width="200" height="169")

::: column.grow

Since the base of the prism a hexagon,

_{span.comments(text="pill to yellow area")}Base Area_ is the six equilateral triangle's area that the hexagon is made of.

    // COMMENT: Since the base of the prism an equilateral triangle,Base Area can be found by the ½ (base x height)ABase = (4 x 3.5)/2= 7 `"mm"^2`

`"A"_"Base" = 6 xx 7 = 42 "mm"^2`

`"V"_"Prism" = "A"_"Base" xx "Height of the Prism"`

    // COMMENT: equation field

`"V"_"Prism" = 42 xx 10 = 420 "mm"^3`

:::
:::

Compared to the other prisms that leave no gaps or overlaps (such as triangular and square), the hexagon prism creates a comb with the maximum volume. 

Remember, bees also need to use the least amount of wax possible to construct these combs. Since they can only produce 1 oz of wax by using 8 oz of honey, the wax is very precious for them too. They cannot spend more wax than necessary.

For finding the amount of wax needed to build walls of the combs, we need to find the [[surface area|volume]] of the prisms.

---

Using [[nets|projections]] can help us to calculate the surface areas of the prisms.

---

We have already found the base area of the prisms.

    // COMMENT: (3D Solids with a slider to open to their nets and close back)

::: tab

#### Triangular Prism

::: column.fit

    figure: x-img(src="images/ch3_16.png" width="200" height="162")

::: column.grow

    // COMMENT: Pill:

`"A"_"Base" = (4 * 3.5) / 2 = 7 "mm"^2`

There are [[3]] _{span.comments(text="Pill: the lateral faces on the net")}rectangular lateral faces_ with the [[3]]x[[10]] = [[30]] `"mm"^2` area.

So the sum of all the areas of the faces will be

    // COMMENT: tutor prompt: Since only one end of the honeycombs is closed, we only include one base area in the surface area calculation.

`"A"_"Prism" = "A"_"Base" + pill("A"_"Lateral face", "blue") = [[37]]  "mm"^2`

:::
::: tab

#### Square Prism

::: column.fit

    figure: x-img(src="images/ch3_42.png" width="200" height="157")

::: column.grow

`"A"_"Base" = 4 xx 4 = 16 "mm"^2`

There are [[4]] _{span.comments(text="Pill: the lateral faces on the net")}rectangular lateral faces_ with the [[4]] x [[10]] = [[40]] `"mm"^2` area.
So the sum of all the areas of the faces will be

`"A"_"Prism" = pill("A"_"Base", "green") + pill("A"_"Lateral face", "blue") = [[56]]  "mm"^2`

:::
::: tab

#### Hexagonal Prism

::: column.fit

    figure: x-img(src="images/ch3_53.png" width="200" height="169")

::: column.grow

    // COMMENT: Since the base of the prism an equilateral triangle,Base Area can be found by the ½ (base x height)ABase = (4 x 3.5)/2= 7 `mm^2

`"A"_"Base" = 6 xx 7 = 42 "mm"^2`

There are [[6]] _{span.comments(text="Pill: the lateral faces on the net")}rectangular lateral faces_ with the [[6]]x[[10]] = [[60]] `"mm"^2` area.

So the sum of all the areas of the faces will be

`"A"_"Prism" = pill("A"_"Base", "blue") + pill("A"_"Lateral face", "green") = [[102]] "mm"^2`

:::
:::

---

_{span.comments(text="Here, also we can align them next to each other, show the shared walls - and recalculate the surface areas accordingly. But this can be complicated ? | I wonder if an animation that shows how surface area changes as more prisms are stacked would do the trick? Students wouldn't need to recalculate. | Yes that would be definitely better | This can be done with the applet  I mentioned before")}Although it seems that the surface area of the hexagonal prism higher, this amount of wax has to be produced to create a volume of  420 `"mm"^3`_

    figure: x-img(src="images/ch3_63.png" width="600" height="403")

Let’s look at the different shaped honeycombs to see how many cells are needed to create a volume of 420 `"mm"^3`

::: column.fit

    figure: x-img(src="images/ch3_56.png" width="271" height="200")

::: column.fit

    figure: x-img(src="images/ch3_65.png" width="225" height="200")

:::

    // COMMENT: An animation can be done like in the circles unit;

_{span.comments(text="A quick animation can be shown as the 6 horizontally layered triangular combs to compare the hexagonal comb. | Maybe these three animations could happen simultaneously? Or maybe in a gallery/slideshow scroll. It could be powerful for students to watch and compare side-by-side.")}To create_ 420 `"mm"^3` volume with the triangular prisms, you need to use [[6]] of them. So the Surface area of 6 triangular prisms will be 6 times [[37]], so 222 `"mm"^2`

---

_{span.comments(text="A quick animation can be shown as the 2-3 horizontally layered square combs to compare the hexagonal comb.")}To create_ 420 `"mm"^3` volume with the square prisms, you need to use more than 2 prisms which have a surface are more than 102 `"mm"^2`

::: column.grow

To create the same volume for storage, bees need to use more wax as the surface area of the triangular or square prisms. That’s why (Neglecting the _{span.comments(text="The closed ends of the honeycomb cells are also an example of geometric efficiency, the ends consists of three intersecting planes to provide the perfect alignment. The shape of the cells is such that two opposing honeycomb layers nest into each other, with each face of the closed ends being shared by opposing cells. | en.wikipedia.org/wiki/Honeycomb | @philipp I have been wondering if having another repository of interesting facts would be worth building. This could live there and appear like glossary and biography entries do. I have a few ideas from my chapters, too.")}closed ends_ of the combs), honeycombs are in the shape of hexagonal prisms. 

The closed ends of the honeycomb cells are a bit more complicated. 

They are composed of three flat planes to ensure the back-to-back ends of cells fit against each other and still the overall shape of the honeycomb cell minimizes surface area for a given volume.

::: column.fit

    figure: x-img(src="images/ch3_17.png" width="150" height="94")

:::

Nowadays, It is also being argued that bees build cylindrical cells that later transform into hexagonal prisms through a process that is still debated like physical forces and mechanical shaping.

[Charles Darwin](bio:darwin) described the honeycomb as a masterpiece of engineering that is _“absolutely perfect in economizing labor and wax.”_

---

Architectural Design imitates nature when seeking solutions of _{span.comments(text="I don't think that's the case here – most of the shapes in the examples below are simply chosen because of the street grid and available space.")}sustainability and efficiency_. All kinds of prisms are regularly used in architecture.

::: column(width=300)

    figure: x-img(src="images/ch3_10.png" width="600" height="337")

{.caption} Hexagonal Cabins

::: column(width=300)

    figure: x-img(src="images/ch3_1.png" width="183" height="275")

{.caption} The Flat Iron building in New York City, a 22-story [[triangular|hexagonal|pentagonal]] prism

::: column(width=300)

    figure: x-img(src="images/ch3_4.png" width="225" height="225")

{.caption} The Baltimore World Trade Center, a 30-story [[pentagonal|triangular|hexagonal]] prism

::: column(width=300)

    figure: x-img(src="images/ch3_22.png" width="600" height="865")

{.caption} The Seagram Building in XXX, a 38-story [[rectangular|square|triangular]] prism

:::

---

Let’s have a look at the tallest buildings in the world.

    figure: x-img(src="images/ch3_66.png" width="600" height="250")

When the buildings become taller and taller they start losing their prism-like shapes and become more triangular.

---

### Pyramids

Pyramids are a particular type of architecture developed since ancient times and still used today for modern buildings. The first pyramids were built in Mesopotamia, but the most famous pyramids are the Egyptian and Mayan pyramids.

    figure: x-img(src="images/ch3_41.png" width="425" height="282")

Egyptians knew vertical walls got less stable as they got taller, that’s why they first tried stacked bricks at an incline. They realized that a pyramid gets you the most stability for the least material.

Thanks to the stability of the triangular structure The Great Pyramid of Giza remained the tallest building of the world for 4000 years until the Eiffel Tower was built in 1889. The Great Pyramid is the oldest monument on the list of the Seven Wonders of the Ancient World, built almost 4600 years ago.  

Can you imagine the number of stones needed to build these giant ancient wonders?

    // COMMENT: https://depositphotos.com/15412875/stock-photo-view-of-the-pyramids-near.html

    figure: x-img(src="images/ch3_47.png" width="600" height="243")

The Great Pyramid of Giza along with the Pyramid of Menkaure and the Pyramid of Khafre 

Like prisms, pyramids are polyhedra too. But unlike prisms, **pyramids** only have [[one|two|three]] polygonal **base**. All of the other faces of the pyramid meet at a single [[vertex|face|edge]] called _{span.comments(text="(gloss:apex)new entry - needs definition | Apex is the top vertex of the pyramids that lateral faces meet.")}**apex**_.

---

There are lots of different kinds of pyramids, depending on the shape of their base.

**Just like prisms, Pyramids are named for the shape of their** _{span.comments(text="Maybe create an interactive piece here in which students have the click on the base as I described in the prism section? Not as crucial here, but a good connection at least.")}**base**_.

    figure: x-img(src="images/ch3_79.png" width="600" height="237")

    figure: x-img(src="images/ch3_71.png" width="327" height="393")

    figure: x-img(src="images/ch3_57.png" width="600" height="417")

For example, if the _{span.comments(text="Interactive solid with a slider to open its net w/ color-coded parts")}base_ is a **square**, then it is called a “[[square|triangular]] **pyramid.**”

---

Regardless of the shape of its base, a pyramid always has [[triangular|square]] **lateral faces.**

---

Before starting to work on a pyramid, Egyptian builders had to calculate its volume in order to acquire the right amount of stone needed to build the pyramid.

    figure: x-img(src="images/ch3_68.png" width="600" height="600")

Imagine slicing a pyramid into lots of thin layers parallel to its base.

All cross sections will be exactly the same shape but different in size. When you go up, the size of the slices decreases proportionally to the base of the pyramid.  The cross sections of a pyramid parallel to its base are similar but not [[congruent|equal]].

---

Since pyramids are made up of decreasing the size of layers of the same base, we [[cannot|can]] use ‘**_area of the base times the height_**’ to calculate the **volume**.

---

This is sure a great advantage during the construction, but it requires a different method to calculate the volume of the pyramids.

{.fixme} We should add a paragraph (and interactive diagram) that shows that all cross sections parallel to the bases are similar (but not congruent).

{.fixme} When I teach this in school, we have a set of many different prisms and pyramids with the same base and same height. Students predict how many pyramids it will take to fill up the related prism. Then, students use rice or pasta or water to check their hypothesis. They fill up the pyramid and pour it into the prism and count how many it takes to fill it up. I found this a really powerful and effective lesson. I wonder how some of that could be incorporated here? I image the GIF on the first slide has some animation of that, but I wonder if there is a way to make students do it? There could be an empty square based pyramid and an empty cuboid and the fill up the pyramid with water by placing it under a sink and then they have to drag it over to the cuboid and fill up the cube. Then, they'd actually have to do it 3 times. Not quite as powerful as doing it in person I think, but if they do it 2-3 times, they helps build understanding of the formula. | I totally agree - I was doing the same experiment with my students with the set of geo solids.. I was planning to talk with Philipp about the animations, pills, hover targets in this section. This part has to be really interactive for kids to grab the formula | Jumping in to agree with you both here. An interactive element that really lets students explore here will take pressure off of the language/text. Since this is such an important, and sometimes challenging, concept. It may be worthwhile to require as little effort on reading as possible.And I think all of the slides help lay a foundation for the interactive!

---

::: tab

#### Experiments

    figure: x-img(src="images/ch3_38.jpg" width="600" height="338")

::: tab

#### Decomposition

    figure
        x-img(src="images/ch3_77.jpg" width="600" height="338")
        x-img(src="images/ch3_39.jpg" width="600" height="338")

::: tab

#### Cubes

    figure: x-img(src="images/ch3_26.jpg" width="600" height="338")

:::

---

`"Volume"_"Pyramids" = ("Base Area" * "Height") / 3`

Now we are able to calculate the number of stones needed to build the Great Pyramid of Giza.

::: column.fit

    figure: x-img(src="images/ch3_pyramid_3.png" width="326" height="202")

::: column.grow

The height of the Great Pyramid of Giza is 146.7 m. 

Be sure you do not confuse the **slant height** of a pyramid with its **solid height.** 

_{span.comments(text="(gloss:slant-height)new term - needs definition. The definition here is good start. | Slant height is a measure along a triangular face. It is the height of the lateral face.")}**Slant height**_ is a measure along a triangular face. It is the height of the lateral face.

:::

_{span.comments(text="(gloss:solid-height)new term - needs definition. The definition here is good start. | Solid height is an internal measure from the apex to the center of the base.")}**Solid height**_ is an internal measure from the apex to the **center **of the base. 

To be able to calculate the volume of a pyramid, you need to know the [[solid height|slant height]].

---

::: column.fit

    figure: x-img(src="images/ch3_70.png" width="300" height="268")

::: column.grow

The base of the Great Pyramid is a square with each side measuring 230 m and covering an area of [[52900]] `"m"^2`.

How much is that? Imagine a football field. Nearly 10 football fields could fit within the base of the Great Pyramid. 

Recall that the volume of the pyramid is [[one-third|half]] of the product of base area and height.

So the volume is: `"Volume" = ("Base Area" * "Height") / 3 = 2.6 "million" "m"^3`

:::

---

It is plenty of room for the Pharaoh and his belongings. It is estimated 2.3 million stone blocks each weigh an average of 2.5 to 15 tons were used to build a pyramid that size. Legend has it that the structure was constructed in just 20 years' time, meaning that a block had to have been moved into place about every 5 minutes of each day and night.

    figure: x-img(src="images/ch3_45.png" width="600" height="489")

    figure: x-img(src="images/ch3_25.jpg" width="600" height="681")

_{span.comments(text="Maybe by using these two images a before -after animation can be made.")}_ A not very well known fact about The Great Pyramid Giza is that it was covered with the smooth white _{span.comments(text="The outer stone layer of the pyramid of Khufu was built with Tura stones. This is a specially beautiful white limestone and is quarried in Tura, which lies to the southeast of Giza on the other side of the Nile.")}Tura_ limestone casing, which now only exists on the upper cap._{span.comments(text="Another very nice transition.")} This stone covered the outer layer of the lateral faces of the pyramid to make them completely smooth_.

It was polished until it shone so that the pyramid would have gleamed in the sun.

Think about how many limestone blocks were needed only to cover the Great Pyramid.  To determine how many blocks were needed, we need to know the [[surface area|volume]] of the 4 triangular lateral faces of the pyramid.

---

::: column.fit

    figure: x-img(src="images/ch3_72.png" width="300" height="268")

::: column.grow

Recall that all pyramids also have a slant height, which is the height of its [[ lateral faces|base]]. It is usually denoted either `s` or `l`.

The slant height is used to calculate the [[areas|perimeters]] of the lateral faces.

:::

---

Slant Height of the Great Pyramid is 186.6m. Each triangle face’s area is [[½ (base xx height) | base area xx height]] which is 21,500 `"m"^2`.

---

::: column.fit

    x-img(src="images/ch3_pyramid_side.svg" width="200" height="164")

::: column.grow

Since we have [[4]] lateral faces, the total **lateral area** is _{span.comments(text="Instead of the direct result, this can be an equation filed too")}[[86000]]_.

Each block of limestone covered about 1.25 square meters. So the Egyptians need almost 70 000 extra white limestones to cover the lateral faces of the pyramid.

While it still stays as a mystery how Egyptians build the pyramids, _{span.comments(text="gph.is/1yqexne")} it is no longer a mystery for us how many stones are used to build or cover them_.

:::

---

Surface Area calculations in prisms and pyramids have longer steps than finding their volume. 

In surface area calculations, **nets** allow us to see all the faces of the solid at once. While calculating surface area, base or lateral area, instead of working on a picture of the solid, drawing nets helps us to visualize the hidden faces. 

_{span.comments(text="Maybe as a fun-fact, this info can be added too (without further explanation)?.")}Do you know that?_

What is the most efficient way to stack fruits?

::: column.fit

    figure: x-img(src="images/ch3_12.png" width="200" height="146")

::: column.grow

On market stalls or street vendor carts, fruits like apples, and oranges are mostly arranged as [[pyramids|prisms]].

In 1611 Johannes Kepler stated that putting each fruit on top of a gap in the layer of fruit underneath is the most efficient arrangement of spherical objects.

After almost 400 years, in 1998, Thomas Hales presented a proof of the Kepler Conjecture. The proof was 300 pages long and it took a computer to verify its correctness.

:::

Apparently, when it comes to stacking stones and fruits or piling cannonballs on ships, pyramids are always the most convenient shape!

---

### Nets of Prisms and Pyramids

**Remember**, nets are composed of [[polygons|cuboids|squares]] that form the faces of a polyhedron. 

---

    // COMMENT: Folding the Net of different polyhedra animation: Solids w/ Slider

    figure: x-img(src="images/ch3_14.jpg" width="600" height="349")

    figure: x-img(src="images/ch3_59.png" width="316" height="159")

    figure: x-img(src="images/ch3_3.png" width="500" height="302")

---

    // COMMENT: Matching Game

Here you have the nets of different prisms or pyramids. 

Match each net with the solid it belongs to.

    figure: x-img(src="images/ch3_51.png" width="600" height="134")

    figure: x-img(src="images/ch3_5.png" width="298" height="282")

    figure: x-img(src="images/ch3_44.png" width="309" height="223")

    figure: x-img(src="images/ch3_2.png" width="460" height="220")

    figure: x-img(src="images/ch3_15.png" width="600" height="389")

    figure: x-img(src="images/ch3_55.png" width="600" height="99")

    figure: x-img(src="images/ch3_78.png" width="600" height="568")

    figure: x-img(src="images/ch3_74.png" width="259" height="292")

    figure: x-img(src="images/ch3_55.png" width="600" height="99")

    // COMMENT: After each correct match, net folds-up to enclose the solid.

_{span.comments(text="This is also like an overview of different prisms and pyramids - I was thinking about giving real-life examples about each one of them next to the explanation - but it can conflict with the game-like nature of the activity? | I think it could work, especially since the question is 'unlocked'. The text could be in a column, and the photo could be in a column. The photo could have a brief caption explaining the connection. To me, this fits the gaming idea of unlocking hidden information. | OR maybe student match the net to the real-life example? | maybe after matching with the actual prism,  the prism can turn to real-life example? I am not sure | Definitely run this one by Philipp. I think you're on to something interesting.")}_

    // COMMENT: After each correct match:

    // COMMENT: For the rectangular prism

A rectangular prism has [[three|four|five|two]] pairs of rectangles, ie. six rectangular faces. Remember, rectangular prisms are also called [[cuboids|rectoids]].

---

    // COMMENT: For the triangular pyramid

A triangular pyramid has [[4]] triangular faces. If all the triangles are the same, then it is a **regular polyhedron** and called a **tetrahedron. Tetrahedron has 4 congruent equilateral triangles.**

---

    // COMMENT: For the octagonal prism

An octagonal prism has [[2]] octagonal bases and [[8]] rectangular lateral faces.

---

    // COMMENT: For the hexagonal pyramid

A hexagonal pyramid has [[1]] hexagonal base and [[6]] triangular lateral faces.

---

    // COMMENT: For the cube

A cube has [[6]] square faces which are all _congruent_ to each other. A **Cube** is also a [[regular polyhedron|regular polygon]].

---

    // COMMENT: For the triangular prism

A triangular prism has [[2]] triangular bases and [[3]] triangular lateral faces.

---

Nets of the polyhedra can give you a lot of information about the faces and the other characteristics of the solid.  Properties of the nets can help us to compare and contrast the prisms and pyramids.

Drag the properties to the part of the [Venn diagram](gloss:venn-diagram) which it is associated with. 

If it matches both, place it in the intersection of the circles.

    // COMMENT: Drag & Drop Activity:

    figure: x-img(src="images/ch3_sorting.svg" width="600" height="432")

---

In the previous chapter, we have also seen that there are many nets for a cube. What about the prisms and pyramids?

Is there only one possible net for them?

    figure: x-img(src="images/ch3_48.png" width="600" height="359")

_The polygons can be arranged in [[different ways | only one way]]  to be assembled into the same prism or pyramid._

---

You can arrange these triangles and rectangles in different ways to fold up a  triangular prism.

Use the grid to draw one of the possible nets of a triangular prism.

    // COMMENT: Then the other possible nets will appear.

    figure: x-img(src="images/ch3_23.png" width="507" height="87")

    // COMMENT: like a shape-shifter ‘ a net closes forms the prism, then opens as another net and continues like that ‘

    figure: x-img(src="images/ch3_60.png" width="564" height="846")

---

We may not build a pyramid or the tallest building of the world yet, but we can start planning for a treehouse (Playhouse / tent…).

Like Egyptians do, before we start building one, we need to calculate the amount of material we are going to use for the outer surface of our model.

A house-shaped prism is created by attaching a [[triangular prism triangular pyramid | square pyramid]] on top of a [[rectangular prism|pentagonal prism]]. 

---

These types of solids are called **Composite solids**.

A _{span.comments(text="(gloss:composite-solid)new term - needs definition. The definition here is good start. | A composite solid is a figure that is made up of more than one solid.")}**composite solid**_ is a figure that is made up of more than one solid.

::: column.fit

    figure: x-img(src="images/ch3_76.svg" width="300" height="264")

::: column.grow

    // TODO: Decide what to do with this (can blanks be pills?)

The base of the house-shaped prism consists of a [[[rectangle]]](pill:teal) and a [[[triangle]]](pill:orange).

We may find the area of the rectangle and triangle separately and then add them up to find the [[base area|base perimeter]].

[Rectangle’s area](pill:teal)is _{span.comments(text="Equation field")}`3 xx 2 = 6 "m"^2`_ and the [triangle’s area](pill:orange) is _{span.comments(text="Equation Field")}`(1/2) (3 xx 2) = 3 "m"2`_

So each base area is [[9]] `"m"^2`

:::

---

Now we can find the **lateral area** of the model;

Is there a way to simplify the calculations?  

Imagine unfolding the prism into a net. Use the slider to see the **net** of the house-shaped prism.

    figure: x-img(src="images/ch3_40.png" width="600" height="315")

    // COMMENT: Color coded - rotatable - Interactive model with a slider to open its net

    // COMMENT: When the lateral faces open:

Sometimes we can simplify the process by combining the lateral faces and finding the area of the combined region.

    figure: x-img(src="images/ch3_52.png" width="600" height="551")

    // COMMENT: Scene 1

We can use one large rectangle instead of separate smaller ones.

We can treat the prism-like house as having three parts: two identical bases, and one long rectangle that has been taped along the edges of the bases. 

The rectangle has the [[same|different]] height as the prism, and its width is the [[perimeter of the base|width of the base]]. 

---

    // COMMENT: Scene 2

    figure: x-img(src="images/ch3_8.png" width="600" height="569")

**In fact, for all the prisms,  you can combine each rectangular lateral face and find the entire area by multiplying the height of the prism by the perimeter of the base.**

So the area of the big rectangle that covers all the lateral face of the prism is [[12]] xx 4 = [[48]] `"m"^2`.

---

    // COMMENT: Scene 3

Now, all we are going to do is to add two [[base areas|base perimeters]] to the [[lateral area|lateral perimeter]]. 

---

So the surface area is [[66]] `"m"^2`.

---

What about the volume?

The Base Area was 9 `"m"^2` and the height is [[4]] `"m"`.

---

Therefore, after completing the construction, your treehouse will have a volume of [[36]] `"m"^3`

---

You may have different designs for your treehouse but, as long as they are prism-like shapes, their volume will always be calculated as `"Base Area" xx "Height"`.

_{span.comments(text="I am not sure to include this part since the chapter is getting longer and longer.  For example, we can create a house with a pyramid and a prism to find the volume. Shall I include those examples too? Or is it more like an intermediate content? | You're right, I think this would add length. If you end up building the volume interactive above, I think the idea is similar enough to this that you won't need to build houses. | I wonder if this is worth a quick conversation in slack or on a call? I keep going back and forth with ideas.")}_

    // COMMENT: animated Gallery

    figure: x-img(src="images/ch3_73.png" width="600" height="572")

    figure: x-img(src="images/ch3_18.png" width="563" height="372")

    figure: x-img(src="images/ch3_61.png" width="450" height="450")

    // COMMENT: On the given shapes, students can be asked to trace the base area.

    // COMMENT: On the given shapes, students can be asked to trace the base area.After the correct base area creation; the Value of the Base Area appears.

    // COMMENT: On the given shapes, students can be asked to trace the base area.Then we may ask the students to trace the height.

    // COMMENT: On the given shapes, students can be asked to trace the base area. And the value of height appears.

    // COMMENT: On the given shapes, students can be asked to trace the base area.Then they can enter the values needed to calculate the Volume.

    // COMMENT: On the given shapes, students can be asked to trace the base area.And the value of volume appears.](pill:blue)

---

## Cylinders and Cones

> section: cylinder-cone
> sectionStatus: dev

**Ever wondered why all rockets have similar shapes?**

::: column.fit

    figure: x-img(src="images/ch4_19.png" width="300" height="281")

::: column.grow

In the past 60 years, rocket technology has advanced significantly, and more than 35 000 rockets have been sent to space.

While launching a rocket to the space, there are three main forces you need to be aware of:

_{span.comments(text="Gravity is the force that attracts a body toward the center of the earth or any other planet.")}*Gravity*_, _{span.comments(text="Ar resistance İis the force that is in the opposite direction to the motion of an object as it passes through the air. Also, known as 'drag'.")}*air resistance*_ and _{span.comments(text="The propulsive force of a jet or rocket engine. Thrust generated by the rockets’ engines by using the fuel to push the rocket upward.")}*thrust*_

:::

The shape of the rockets designed to minimize the air resistance called drag. Smooth, **round surfaces** produce less friction so cause [[less|more]] drag. 

---

Therefore, it is clear that we need [[non-polyhedra|polyhedra]] in the rocket design.

---

**Rockets are** _{span.comments(text="Pills: cone disappears at the rocket model - and the cylinder is shown only.")}**cylindrical**_ **in body and** _{span.comments(text="Pills: cylinder disappears at the rocket model - and the cone is shown only.")}**conical**_ **at the top.**

We can think of **cylinders** as circular versions of prisms. Similarly, we say that the circular version of a pyramid is a **cone**.

::: column(width=300)

    // Prism-> Cylinder Animation

Use the _{span.comments(text="Variable slider")}slider_ to increase the number of sides of the pyramid.

As the number of sides increases, the prism starts to look more like a cylinder.

    figure: x-img(src="images/ch4_30.png" width="300" height="107")

::: column(width=300)

    // Pyramid-> Cone Animation

Use the slider to increase the number of sides of the prism.

As the number of sides increases, the pyramid starts to look more like a cone.

    figure: x-img(src="images/ch4_27.png" width="150" height="154")

:::

    // An interactive Cylinder

::: column.fit

    figure: x-img(src="images/ch4_33.png" width="150" height="150")

::: column.grow

Cylinders consist of two congruent, parallel circles joined by a curved surface. These circles are the _{span.comments(text="pills")}bases_** of the cylinder.

The cylindrical part of the rockets accommodates the rocket's essential components like liquid oxygen, hydrogen tanks and engines.

:::

---

In fact all the pressure vessels like fuel tankers are round, since round shapes provide maximum strength from internal pressure. A cylindrical shape adds less weight of the rocket’s walls. Cylinders also don’t have any “weak points” like the edges of the [[prisms|polygons]]. 

---

::: column.fit

    figure: x-img(src="images/ch4_1.png" width="170" height="156")

::: column.grow

The only problem with cylindrical structures is the drag rate. This value can be reduced slightly by adding a cone to the top.

The conical shape can be in different forms according to the purpose of the rocket.

:::

    // An interactive Cone

::: column.fit

    figure: x-img(src="images/ch4_24.png" width="150" height="150")

::: column.grow

A cone has [[only one|two]] circular **base** that is joined to a single point called the **vertex** or **apex**. 

Nose cones of the rockets usually carry payloads like satellite, cargo or passengers. If it is the external fuel tank, it carries the liquid oxygen tank.

:::

---

Nose cones are also designed for all the aircrafts like planes and zeppelins as well as the underwater and in high-speed land vehicles.

While the shape of the rockets are mostly similar, they can be in different sizes according to the type of the mission. 

**What is the height of a rocket with an orbital mission carrying 23 tons payload?**

::: column.fit

    figure: x-img(src="images/ch4_8.png" width="188" height="142")
    // https://www.youtube.com/watch?time_continue=5&v=su9EVeHqizY&feature=emb_logo
    // https://en.wikipedia.org/wiki/Space_Shuttle_external_tank#/media/File:STS-116_PreLaunch_(NASA_KSC-06PD-2670).jpg

::: column.grow

Type of the mission affects the amount of fuel that the rocket has to carry. The significant portion of the rockets’ volume is held by fuel tanks, therefore the size of the rocket mostly depends on the fuel tanks.

For an orbital mission, fuel tanks must have the capacity to hold approximately 550 thousands liters of liquid oxygen and 1.5 million liters of hydrogen. 

:::

In a space shuttle, the external fuel tank carries a cylindrical liquid hydrogen tank.

The **volume** of the cylinder is a measurement describing how much (in cubic units) the cylinder will hold. It is a measure of the space inside the cylinder.

Think of a stack of coins as a model of a cylinder. The number of coins you put on top of each other is actually the _{span.comments(text="The height of the cylinder is the the perpendicular distance between the bases.")}[[height|radius|diameter|circumference]]_ of the cylinder.

::: column.fit

    figure: x-img(src="images/ch4_15.png" width="239" height="118")

::: column.grow

So the space you have created with the coin stack is basically [[height|width]] times the [[area|perimeter]] of each coin.

Like the prisms, a cylinder has a volume equal to the **product of its** [[base area|base circumference]] **and** [[height|width]].

:::

---

Recall that the ratio of the area of a circle to its square radius is a constant number called _{x-equation.small(solution="π" keys="π")}_. So the area of a circle is _{x-equation.small(solution="π r^2" keys="π sup" short-var)}_.

---

Pi is an [[irrational|rational]] number.

---

This indicates that the decimal part of the π goes to infinity without repeating itself.

π = 3.1415926…

The volume of a cylinder is,

{.text-center} `"V"_"Cylinder" = "Base Area" xx "Height"`

{.text-center} `"V"_"Cylinder" = ` _{x-equation.small(solution="π r^2 × h" keys="π sup ×" short-var)}_

---

::: column.fit

    figure: x-img(src="images/ch4_25.png" width="300" height="176")
    //  https://www.nasa.gov/centers/johnson/pdf/584722main_Wings-ch3a-pgs53-73.pdf

::: column.grow

The cylindrical hydrogen tank has a diameter of approximately 8 meters. It needs to hold 1.5 million liters of hydrogen. 

Remember `1 "\ dm"^3 = 1 "\ liters"`

So the volume of the hydrogen tank has to be around [[1500]] `m^3`.

:::

---

`1500 = input(pi) * input(4)^2 * "Height"_"Liquid Hydrogen Tank"` which is around 30 meters. 

---

The liquid oxygen tank is on the other hand, located at the top of the external tank and has a **conical shape**.

Remember that cones are the [[pyramid|prism]] - like solids with the circular bases

---

Even though a cone is technically not a pyramid, they share many properties. 

To calculate the volume of a cone, can we still use the same formula with the pyramids?

The ratio of the volumes of a pyramid and a prism with the base of same size and shape and the same _{span.comments(text="The height of the cone is theperpendicular distance between thecenter of the base and the apex.")}height_ is [[1]] : [[3]].

---

::: column.fit

    figure: x-img(src="images/ch4_3.gif" width="150" height="125")

::: column.grow

Let’s repeat the same experiment to see how many cones of water are needed to fill the cylinder with the same radius and height.

It takes the contents of [[3]] cones to fill the cylinder with the same base and height. This means,

:::

---

{.text-center} `"V"_"Cone" =` _{x-equation.small(solution="1 / 3" keys="frac" numeric)}_ `xx blank("Base Area", "Base Perimeter") xx blank("height", "width")`

---

{.text-center} `"V"_"Cone" =` _{x-equation.small(solution="(1 / 3) × π r^2 × h" keys="frac sup π ×" short-var)}_

---

Nose cone has the same radius with the cylinder and has to hold 550 thousand liters of oxygen. Therefore the conical tank has to have a volume of 550 cubic meters.

{.text-center} `550 =` _{x-equation.small(solution="1 / 3" keys="frac" numeric)}_ `*` _{x-equation.small(solution="π" keys="π")}_ `* input(4)^2 * blank("Height"_"OxygenTank","Radius"_"OxygenTank")`

---

{.text-center} which is around 30 meters. 

The real shape of the cone is larger than the one that we have calculated here and has a height of almost 17 meters. So the total height of the External Tank is around 50 meters.

When full with the fuel, External tank alone weighs 760 thousands kilograms. Rocket companies try to increase the efficiency of the rockets by decreasing the overall weight and increasing the payload capacity. 

In time, many attempts were made to reduce the huge amount of weight of the tanks.  Standard weight tanks are evolved to super lightweight tanks by examining every little detail of the rockets carefully.

    figure: x-img(src="images/ch4_4.png" width="400" height="308")

    // https://forum.nasaspaceflight.com/index.php?topic=39443.0

1981 Space Shuttle Columbia vs 1982 Space Shuttle Columbia

Inıtially, fuel tanks were painted white to protect them from ultraviolet light damage. Engineers then realized that did not cause a problem and wondered **if no paint is used, how many kilograms of weight can be spared?**

To be able to find the amount of paint used, we calculate the [[surface area | volume | perimeter]] of the tank.

---

Again, we can think of the cylinder and the cone separately.

**Surface area of a cylinder:**

 We can use the [[net|height|width]] of the cylinder to calculate its surface area.

---

::: column.fit

    figure: x-img(src="images/ch4_2.png" width="100" height="104")

    // An interactive Cylinder

::: column.grow

The net of the cylinder has two [[circles|rectangles]] with the area of _{x-equation.small(solution="π r^2" keys="π sup" short-var)}_ each. The curved face is actually a large [[rectangle|square|triangle|pentagon]].

The height of the rectangle is [[h|w|b]] and the width of the rectangle is the same as the [[circumference of the base|base area|diameter of the base]] of the circles.

:::

---

::: column.fit

    figure: x-img(src="images/ch4_34.svg" width="300" height="208")

::: column.grow

Since the lateral face of the cylinder is a rectangle, we can find the area by [[multiplying|dividing|adding|subtracting]] the length and width of the rectangle;

It is basically the [[circumference|radius|diameter]] of the base times the [[height|width]] of the cylinder.

Therefore, the lateral area is _{x-equation.small(solution="2 π r" keys="π" short-var)}_ `* blank("h","w")`.

:::

---

So the **Surface Area** of a cylinder is the sum of all the face areas.

{.text-center} `"A"_"Cylinder" = ` _{x-equation.small(solution="2 π r^2" keys="π sup" short-var)}_ `+` _{x-equation.small(solution="2 π r × h" keys="π ×" short-var)}_

---

The surface area of the cylindrical part of the tank with a height of 30 meters and a diameter of  8 meters . For the rocket model we need to calculate [[only one|two]] base areas for the total surface area.

---

`"A" = (pi "r"^2) + (2 pi "r""h")`

`A = pi input(4)^2 + 2 pi input(4) * input(30)` approximately

---

`A = 800 blank("square meters","meters","cubic meters")`.

---

**Surface area of a cone:**

::: column.grow

Move the slider to see the net of the cone. We have a [[circle|sphere|square]] as the base and a [[circle sector|triangle|rectangle]] lateral area.

“s” is called the _{span.comments(text="Glossary Link")}**slant height**_ of the cone, the same as the pyramids. Slant height is [[different than|as the same as]] the solid height.

Now we just have to add up the area of both faces;

The base of the cone  is a circle with radius r, so its area is

`"A"_"base" =` _{x-equation.small(solution="π r^2" keys="π sup" short-var)}_

::: column.fit

    figure: x-img(src="images/ch4_11.png" width="150" height="156")

:::

---

::: column.fit

    figure: x-img(src="images/ch4_16.png" width="300" height="92")

::: column.grow

We may think the lateral  area as one large triangle consists of infinitely many triangles.The total length of the triangle’s base is the [[circumference|area|diameter]] of the circle and its height is s, slant height of the cone.

:::

---

Recall that the area of a triangle is one [[half|third|quarter]] of the product of its base length and height.

---

`"A"_"lateral" = 1/2 ` _{x-equation.small(solution="2 π r" keys="π" short-var)}_ `* blank("s","h","l")`

---

`"A"_"lateral" =` _{x-equation.small(solution="π r s" keys="π" short-var)}_

---

Then, the total area of the cone is 

{.text-center} `"A"_"cone" =` _{x-equation.small(solution="π r^2 + π r s" keys="π sup +" short-var)}_

---

To find the amount of the paint used, we need to calculate the [[lateral area|base area|surface area]] of the cone.

---

The Conical part of the tank has a slant height of 20 meters and a diameter of 8 meters.

`"A"_"Lateral" = pi * input(4) * input(20)` approximately

---

`"A"_"Lateral" = 250 blank("square meters", "meters", "cubic meters")`.

---

The total surface area of the rocket is the sum of the area of the cylindrical body [[800]] square meters and the nose cone [[250]] square meters  which is [[1050]] square meters.

---

If a gallon of paint is used to cover a **12 square meters,** to cover the entire tank, almost [[90]] gallons of paint must be used.

---

Approximate weight of a gallon of exterior paint is almost 3 kilograms. Therefore, by not painting the tank, the engineers spared [[270]] kilograms that they can use to increase the cargo capacity or the efficiency of the space shuttle.

---

So far, we have learnt the surface area and the volume calculations of the cylinders and the cones as well as the unique properties of these solids that make them right choices for the rocket design as well as the other drag reducing land and underwater vehicles.. 

If we consider our initial question again, we may have a look at another property of the cylinder.

Let’s compare the volumes of different prisms with the same base perimeter and height;

    figure: x-img(src="images/ch4_28.png" width="600" height="532")

    // 3D Version of this applet?

It also turns out that [[cylindrical|spherical|conical]] shapes hold the largest amount of volume compared to different prisms with the same base perimeter and height. This is another reason cylinders have the best properties as a container like the food and beverage cans we use everyday and the huge tanks like grain silos.

---

::: column.fit

    figure: x-img(src="images/ch4_12.png" width="150" height="87")
    // 1: Fuel Storage tanks : https://depositphotos.com/65819151/stock-photo-fuel-storage-tank.html

::: column.fit

    figure: x-img(src="images/ch4_13.png" width="150" height="100")
    // 2: Tanker Truck: https://depositphotos.com/66305481/stock-photo-tanker-trucks.html

::: column.fit

    figure: x-img(src="images/ch4_10.png" width="300" height="111")
    // 3: Canned foods and beverages: https://depositphotos.com/51100149/stock-illustration-set-of-cans.html

::: column.fit

    figure: x-img(src="images/ch4_14.png" width="150" height="109")
    // 4: Scuba Tank: https://depositphotos.com/stock-photos/scuba-tank.html?filter=all\&qview=10890755

::: column.fit

    figure: x-img(src="images/ch4_17.png" width="150" height="100")
    // 5: Grain Silos: https://depositphotos.com/stock-photos/grain-silos.html?filter=all\&qview=17129999

:::

    // CONTINUE

---

Earlier, we have seen that cylinders have the best properties as a container whereas the cones are usually used as roofs, shelters, baskets, etc.. 

Throughout history, conic huts and roofs are built and used by different civilizations all over the world in different places and times. There is even a whole town in Italy, famous for its unique conic shaped _trulli_ roofs.

::: column(width=285)

    figure: x-img(src="images/ch4_18.png" width="285" height="190")

Conical Hats, Asia

::: column(width=166)

    figure: x-img(src="images/ch4_22.png" width="166" height="190")

Native American **Teepees**

::: column(width=189)

    figure: x-img(src="images/ch4_20.png" width="189" height="190")

Alberobello, Italy

:::

Also, there are lots of cone-shaped rock formation examples all around the world. But most probably the first thing comes to our mind when we think of the conical shapes are the roofs of the Earth; Mountains and Volcanoes

::: column(width=150)

    figure: x-img(src="images/ch4_29.png" width="150" height="100")

Kasha-Katuwe

rock formations, New Mexico

::: column(width=150)

    figure: x-img(src="images/ch4_26.png" width="150" height="100")

Chimney rocks

Cappadocia, Turkey

::: column(width=144)

    figure: x-img(src="images/ch4_6.png" width="144" height="100")
    // https://depositphotos.com/stock-photos/everest.html?filter=all\&qview=8593244

Everest Mt 8850 m

Earth

::: column(width=130)

    figure: x-img(src="images/ch4_7.png" width="130" height="100")
    // span.comments(text="https://2016.spaceappschallenge.org/challenges/mars/space-route-66/projects/olympus-mons"

Olympus  Mons 21 000 m

Mars

:::

Mountains and volcanoes maintain the interesting conical shape of these rock formations but they are much bigger.

The Highest Mountain of our world, Everest,  is growing taller up to 5 centimeters each year. **Can it grow infinitely and become as high as the** _{span.comments(text="Olympus Mons is a very large shield volcano on the planet Mars. It is almost 3 times Mount Everest's height above sea level. It is the tallest volcano in the solar system.")}**Olympus Mons**_ **of Mars? Is there a limit for the maximum possible height of a mountain on Earth?**

There is an interesting fact about the height of the mountains. 

By approximating the shape of the mountains to [[cones|spheres|cylinders]], we can approximately find out the maximum height of a mountain. 

---

    // An interactive applet where students can drag up the height of the mountain by 500meters - calculates the weight of the mountain - when hits the max limit,  the mountain sinks.

    figure: x-img(src="images/ch4_21.gif" width="480" height="270")

    // 1A, 2A, 3A ... are the answers of the questions that we are not going to show - but if the applet is approved, we can re-organize them as tutor prompts. | when Mars is selected the left hand side scale turns to ve 0 - 30 000  by increasing 1000 meters at a time | slides are here : https://drive.google.com/drive/folders/1MFMORovFBlcMZFQjUiLFuETQk\_6HAFeB?usp=sharing"

    // 1. **Weight to Base Area ratio** of a mountain cannot exceed the compressive strength of the rock beneath the mountain. Otherwise the rock beneath the mountain starts to compress. The mountain simply would crumble under their own weight.
    // 2. Mass is the amount of matter in an object. Weight is the gravitational pull on a mass. Mass can be found by the product of the density and the volume of the object. When combined; The total **weight** of a mountain on Earth is 
    // 3. The volume of the cone- shaped mountain is _{x-equation.small(solution="(1 / 3) π r^2 h" keys="frac sup")}_. But since mountains are usually a combination of three or more hills, we will ignore the coefficient `1/3` in the volume calculation.
    // 4. When we cancel the Base areas and re–organize the equation; 
    // 5.If you select Mars, we will use the same equation with the [[gravity]] of Mars. We can see that on Mars, the max height of a mountain can be around [[27]] km

    // After 4) 

When we solve the inequality here, we will see that a mountain on Earth can be maximum around [[10]] km tall before collapsing under its own weight!

---

This is just a little bit higher than Mt Everest!

If 8800 meters-tall-Everest continues to grow around 5 cm a year, almost [[24000]] years later, we may expect it to sink!?

---

But do not worry! We still have another mountain which is in fact much higher than Mt Everest. 

Just it is on Mars.

The highest volcano in the solar system is Olympus Mons on Mars with a height of over 21 km and a radius of 312 km. 

    // With 5)

You can change the constants from Earth to Mars to calculate the maximum height of a mountain on Mars. 

With a rough approximation since the gravity of Mars is almost `1/3` of the gravity on Earth. We can conclude that a mountain on Mars can be [[3]] times taller than a mountain on earth.

---

_{span.comments(text="I saw the blue problem boxes in the new chapters. Sı I have included this example from the first version. The answers were not shown in those chapters. But I do not know the policy about the answers, that's why I kept them now.")}PROBLEM SOLVING_

::: column.fit

    figure: x-img(src="images/ch4_35.png" width="200" height="275")

::: column.grow

A grain silo is another example of the usage of cylinders and cones. It usually is built from two cones and a cylinder in between. Silos are used in agriculture to store grain. Find the capacity of the giant grain silo 12 by 20m?

To find the amount of grain that the silo holds, we need to calculate the [[volumes|areas|heights]] of each solid separately and then add them up.

Top and Bottom cones have a radius of [[6]] m and a height of [[5]] m;

The volume of each cone is: _{x-equation.small(solution="1 / 3" keys="frac" numeric)}_ `xx` _{x-equation.small(solution="36 π" keys="π" numeric)}_ `xx input(5) =` _{x-equation.small(solution="60 π" keys="π" numeric)}_ cubic meters

:::

---

Cylinder has the [[same|different]] circular base and a [[10]] m height. So the volume of the cylinder is: _{x-equation.small(solution="36 π" keys="π" numeric)}_ `xx input(10) =` _{x-equation.small(solution="360 π" keys="π" numeric)}_ cubic meters.

---

The total volume of the grain silo is _{x-equation.small(solution="480 π" keys="π" numeric)}_ cubic meters which is approximately 1500 cubic meters.

---

    figure: x-img(src="images/ch4_9.png" width="600" height="600")

**May the Less Drag and the new heights be with you !**

---

## Spheres

> section: spheres
> sectionStatus: dev

::: column.grow

Earth is a big blue planet covered mostly with oceans. It is the fifth-largest planet in our solar system and for now, the only one known to have liquid water on its surface. 

With this vital water supply, our home planet is the only place to host an estimated **8.7 million species** in the known universe.

**Is there enough water supply on earth for all of the species including us?**

::: column.fit

    figure: x-img(src="images/ch5_13.png" width="200" height="200")
    // image: http://pngimg.com/download/25351

:::

Although our Earth is not perfectly round, it maintains the general shape of a **sphere.**

::: column.fit

    figure: x-img(src="images/ch5_45.svg" width="400" height="169")

::: column.grow

Remember, the set of all points equidistant to a certain point on a two-dimensional plane is called a [[circle|triangle]].

If we think of the same definition in 3D, then it becomes a _{span.comments(text="Link to glossary")}**sphere.**_

:::

_{span.comments(text="depositphotos.com/vector-images/thermosphere.html?qview=226395398")}The_ word "sphere" is from Greek meaning "globe". 

::: column.fit

    figure: x-img(src="images/ch5_1.png" width="150" height="135")

::: column.grow

There are many terms related to our world involving the word “sphere”. 

For instance, the blanket of gases that surrounds Earth is called the atmo**sphere**. The atmosphere is sliced up into the different zones as the tropo**sphere**, strato**sphere**, meso**sphere**, and thermo**sphere**.

:::

The Earth has northern and southern hemi**spheres**. Hemisphere means [[half|a third|a quarter]] of the sphere. Earth is divided into two hemispheres by the _{span.comments(text="The Equator is the imaginary line drawn around the earth equally distant from both poles, dividing the earth into northern and southern hemispheres")}equator_.

---

::: column.fit

    figure: x-img(src="images/ch5_24.png" width="150" height="161")

::: column.grow

If you divide the Earth into the hemispheres the resulting flat surface is called **the Great Circle.**

There [[are infinitely many|is only one|are only two]] great circles in a sphere. All the meridians and the equator are the great circles of the Earth. 

Great circles are used in planning routes for aircraft as the air currents and weather conditions.

:::

---

**The shortest possible air path between two points on a curved surface always lies on the great circle that passes through both of those points.**

::: column.fit

    figure: x-img(src="images/ch5_28.png" width="133" height="100")
    // https://gisgeography.com/great-circle-geodesic-line-shortest-flight-path/

::: column.fit

    figure: x-img(src="images/ch5_23.png" width="123" height="100")
    // We may have an intearctive that can show different great circles of Earth that pass tr different cities"

:::

::: column.grow

We know that two-thirds of the earth’s surface is covered with water. But how much is that?

Until now, to be able to find the surface area of the solids, we have always used the [[nets|projections]] of the solids.

Remember nets are the two-dimensional coats of the 3D Solids.

::: column.fit

    figure: x-img(src="images/ch5_43.svg" width="200" height="200")

:::

---

Let’s _{span.comments(text="Interactive drawing tool")}try to draw the [net](gloss:net) of a sphere._

If it is not possible to draw the nets of the spheres how do we have the 2D maps of our world?

    // https://www.youtube.com/watch?time_continue=74\&v=b1xXTi1nFCo\&feature=emb_logo
    // A gif / video or slideshow?

If a _{span.comments(text="A globe is a spherical model of Earth. Globes serve purposes similar to maps, but unlike maps, do not distort the surface.")}globe_ were flattened out into a map the result would be wrinkled and torn. The size, shape, and relative location of continents would change.  Since drawing an accurate net of a sphere is impossible, we reflect the spherical surface of Earth to a flat piece of paper by using different **projections.** 

    // the gif / video / Slideshow:

    figure: x-img(src="images/ch5_19.png" width="600" height="306")

    // Robinson Projection

    figure: x-img(src="images/ch5_5.png" width="600" height="262")

    // Goode’s Homolosine Projection

    figure: x-img(src="images/ch5_2.png" width="600" height="508")

    // Mercator Projection

Unfortunately, there is no truly correct way of representing the earth as a flat image. All the 2D maps are distorted in some manner!  

None of these flat figures can fold up to a sphere.

if we cannot draw its net how can we find the surface area of a sphere?

There are different ways to come up with the **surface area** and **volume** formulas of a sphere. We may start using the 3D Solids that we already knew about.

::: column.fit

    figure: x-img(src="images/ch5_3.png" width="200" height="125")

::: column.grow

Think about a **hemisphere** with a radius **r** fitting inside the smallest possible rectangular prism.

In this case, the dimensions of the rectangular prism in terms of “r” must be 

    // DISCUSS: Leave these as blanks? use equation editor? Multiple choice?

_{span.comments(text="pills")}[[2r]] x [[2r]] x [[r]]_

:::

---

So the volume of the prism is _{x-equation.small(solution="4 r^3" keys="sup" short-var)}_.

---

The volume of the hemisphere is definitely much **_less_** than that. 

::: column.fit

    figure: x-img(src="images/ch5_7.png" width="200" height="124")

::: column.grow

This time let's put the hemisphere in a cylinder.

The smallest possible cylinder that we can fit the hemisphere has the same [[radius|volume]] with the hemisphere and its radius is equal to its [[height|width]].

The volume of this cylinder is _{x-equation.small(solution="π r^2" keys="sup π" short-var)}_ `*` _{x-equation.small(solution="r" short-var)}_ `=` _{x-equation.small(solution="π r^3" keys="sup π" short-var)}_ and again the volume of the hemisphere is [[less|greater]] than that.

:::

---

This time, let’s insert a cone with the maximum possible volume inside of the hemisphere.

::: column.fit

    figure: x-img(src="images/ch5_27.png" width="200" height="137")

::: column.grow

The cone shares the same [[base|volume|surface area]] with the hemisphere and also its height is equal to [[its radius|twice the radius]].

The volume of this cone is _{x-equation.small(solution="(1/3) π r^3" keys="sup frac π" short-var)}_. This time, the volume of the hemisphere is [[more | less]] than the cone.

:::

---

If we **double** these boundaries to reach the volume of a whole sphere;

`"V"_"CONE" < "V"_"SPHERE" < "V"_"CYLINDER"`

_{x-equation.small(solution="(2/3) π r^3" keys="sup frac π" short-var)}_ `< "V"_"SPHERE" <` _{x-equation.small(solution="2 π r^3" keys="sup π" short-var)}_

---

_{span.comments(text="I am not planning to give the actual proof since it can be advanced. - also the intermediate level unit already has some explanation. Instead, I will use the story and the water demo if it is ok?")}In fact,_ here we are following the footsteps of the great Mathematician of ancient times, _{span.comments(text="Bio: link to entry")}**Archimedes.**_  Although he is very famous for the “Eureka” story, he has countless other inventions and contributions to mathematics, science, and engineering.

He studied circles, cylinders, and spheres until he died and made approximations for the number pi and he discovered the volume and the area of the sphere by using the shapes he already knew about like cylinders and cones. 

According to a legend, even his last words were “Don’t disturb my circles”. 

::: column.fit

    figure: x-img(src="images/ch5_15.png" width="200" height="212")

::: column.grow

Think of a cylinder of which its **_diameter and height are equal to each other._**

and a sphere with the **_same diameter_**

Archimedes proved that there is exactly the **_same ratio_** between their volumes and surface areas.

{.text-center} `"V"_"cylinder" / "V"_"sphere" = "A"_"cylinder" / "A"_"sphere"`

:::

To find this ratio, let’s use the water experiment we have used before when comparing the pyramids and prisms. 

We need to have a cylinder and cone with the same heights as the diameter of their bases **(h = 2r)** and a sphere with exactly the same diameter. 

    figure: x-img(src="images/ch5_35.svg" width="600" height="196")

    // Interactive water or sand demo: (like an hourglass)

    // We may create an interactive where the students can choose among cylinder, cone and sphere (with that specific dimensions) drag and drop  to create the hourglass

    // First scene:

::: column.fit

    figure: x-img(src="images/ch5_34.png" width="100" height="215")

::: column.grow

We already know that the volume of the cone is `input(1) / input(3)` of the volume of the cylinder with the same dimensions. It means, when we fill the cylinder with water and pour it into the cone `input(2) / input(3)` of the water will remain in the cylinder.

:::

---

    // Second scene

::: column.fit

    figure: x-img(src="images/ch5_47.png" width="100" height="281")

::: column.grow

Now Let's (add a sphere to the hourglass and) pour the remaining water the sphere:

:::

    // Third scene

::: column.fit

    figure: x-img(src="images/ch5_44.png" width="100" height="250")

::: column.grow

The Sphere is full and the cylinder is completely emptied now! 

You can rotate the hourglass to repeat the experiment.

We have just demonstrated that the volume of the sphere is the `input(2) / input(3)` of the cylinder with the same dimensions.

`"V"_"SPHERE" = (2/3) "V"_"CYLINDER"`

`"V"_"SPHERE" = 2 / 3` _{x-equation.small(solution="π r^2 h" keys="π sup" short-var)}_ since `"h" = 2"r"`, we can replace `"h"`

`"V"_"SPHERE" = (2/3) pi r^2 *` _{x-equation.small(solution="2 r" short-var)}_

`"V"_"SPHERE" = (2/3) * 2 pi *` _{x-equation.small(solution="r^3" keys="sup" short-var)}_

`"V"_"SPHERE" =` _{x-equation.small(solution="π r^3" keys="π sup" short-var)}_

:::

---

Archimedes has also found that the **same ratio** exists between the **surface areas** of the cylinder and sphere as well.

Surface Area of a Cylinder = _{x-equation.small(solution="(2 π r^2) + (2 π r h)" keys="π sup +" short-var)}_

---

Surface Area of the Cylinder with `"h" = "2"` is: `2 pi r^2 + 2 pi r *` _{x-equation.small(solution="2 r" short-var)}_ `=` [[`6 pi "r"^2` | `4 pi "r"^2` | `8 pi "r"^2`]]

---

If we use the same ratio of `input(2) / input(3)` to find the surface area of the sphere; 

---

`"A"_"SPHERE" =` _{x-equation.small(solution="4 π r^2" keys="π sup" short-var)}_

---

::: column.fit

    figure: x-img(src="images/ch5_4.png" width="181" height="217")

::: column.grow

This `2/3` ratio fascinated Archimedes so much he willed to be remembered with this discovery by requesting a sphere within a cylinder figure on his gravestone.

:::

Thanks to Archimedes, now we can go back to our initial question. We can calculate the surface area and volume of our world to find the true amount of water in it.

::: column.grow

The radius of Earth at the equator is 6378 kilometers. Although it is not a perfect sphere, we can still use the sphere’s volume formula to make a fair approximation.

`V_Earth =` _{x-equation.small(solution="π r^3" keys="π sup" short-var)}_ `= * pi * input(6378)^3 = 108.3 xx 10^10 "km"^3` **(approximately 1 trillion cubic kilometers)**

The **surface area** of the Earth can also be found by using the Archimedes formula _{x-equation.small(solution="4 π r^2" keys="π sup" short-var)}_.

`"A"_"Earth" = 4 pi r^2 = 4 * pi * input(6378)^2 =` **510 million square kilometers.**

::: column.fit

    figure: x-img(src="images/ch5_13.png" width="200" height="200")

:::

---

About 70 percent of the Earth’s surface is covered by water. It means **the surface area of water is approximately `510 "million" xx %input(70) = input(357) "million square kilometers"`.**

::: column.fit

    figure: x-img(src="images/ch5_41.svg" width="200" height="106")

::: column.grow

The average depth of oceans is about 4 km, so we can calculate the volume of the water on Earth as `input(357) "miilion" xx input(4)`: almost 1.4 billion `"km"^3` (14 x 1020 liters).

This means that while the water covers 70% of the Earth’s surface, it has a volume of much less than 1% of Earth’s entire volume.

:::

    // CONTINUE

---

Not only our world but also other planets and orbits are spherical too.

Let’s compare the size of the moon and other planets with respect to the radius, surface area, and the volume of the Earth.

**Remember that, the volume of a sphere is directly proportional to [[cube | square | three fourths]] of the radius whereas the surface area is directly proportional to [[square | cube | four times]] of the radius.**

---

|                                                            | Radius | Volume | Surface Area |
| ---------------------------------------------------------- | --- | ---- | ---- |
| _{img(src="images/ch5_14.png" width=30 height=30)}_ Earth  | __r__ | __V__ | __A__ |
| _{img(src="images/ch5_6.png" width=30 height=30)}_ Moon    | `"r"/4` | `"V"/input(64)` | `"A"/16` |
| _{img(src="images/ch5_17.png" width=30 height=30)}_ Mars   | `"r"/2` | `"V"/8` | `"A"/input(4)` |
| _{img(src="images/ch5_20.png" width=30 height=30)}_ Saturn | `input(10) * "r"` | `1000"V"` | `input(100) * "A"` |

---

Spheres have unique properties that make them the favorite shape for many sports, droids, fruits even for soap bubbles.

    div.row.padded
      div(style="width: 264px")
        div.row.padded
          div.fit
            figure: x-img(src="images/ch5_25.png" width="150" height="100")
            // https://depositphotos.com/stock-photos/soap-bubbles.html?filter=all\&qview=2076648
          div.fit
            figure: x-img(src="images/ch5_26.png" width="66" height="100")
            // https://depositphotos.com/stock-photos/bb8.html?filter=all\&qview=231776588
        p
          // I am not sure the include these details under each image or not?
          span.sentence For instance, the spherical shape of a soap bubble minimizes surface tension whereas the round figure of BB-8 gives it the ability to move in any direction
      div(style="width: 173px")
        figure: x-img(src="images/ch5_22.png" width="173" height="100")
        // https://depositphotos.com/stock-photos/balls-of-di%CC%87fferent-games.html?filter=all\&qview=37293593
        p
          span.sentence The round shape of the soccer ball makes it bounce evenly and gives uniform responses from each direction.
      div(style="width: 137px")
        figure: x-img(src="images/ch5_11.png" width="137" height="100")
        // https://depositphotos.com/208835438/stock-photo-top-view-circle-fruits-blue.html
        p
          span.sentence Round shapes of fruits can be a result of the equally-distributed outward expansion as well as the surface area to volume ratio of the spheres.

Let’s compare the surface area and volume of some of the 3D Solids to see them which one of them encloses the most volume for a given surface area;

    // We can use the 3D applet - the students can drag and drop the 3d solids from the menu at the right. Then with sliders, they can fix the surface area to see which one has the greatest volume.

    // the applet will allow students to observe when happens to surface areas when they equalize the volumes or vice versa by using the sliders

    figure: x-img(src="images/ch5_42.svg" width="600" height="337")

Now we have also seen that the [[spheres|cubes]] **_enclose the maximum volume for the given surface area._** For example, fruits use minimum amount of sources to store maximum nutrients.

---

If spheres have so many properties then why not use them in architecture too?  

Throughout this unit, we have witnessed how architecture gets its inspiration from the beauty of solid geometry. Just think about the symmetry and the beauty of the spaces created by spheres.

The only problem with creating spherical surfaces is the manufacturing of curved panels of glass or other materials. In the 1940s, the mathematician _{span.comments(text="Link to Bio")}Buckminster Fuller_ improved the concept of approximating curved surfaces by using flat triangular panels called **geodesic domes** and **surfaces**. 

    figure: x-img(src="images/ch5_18.png" width="600" height="389")

Walt Disney Epcot “Spaceship Earth”

 (Orlando, US)

    figure: x-img(src="images/ch5_10.png" width="600" height="450")

It took more than two years to build Disney’s world-famous spherical attraction.  Its name “Spaceship Earth” is also popularized by Buckminster Fuller.

Spaceship Earth is a complete sphere, supported by three pairs of legs with 50 meters of diameter. The volume of the sphere is `input(4)/input(3) *` _{x-equation.small(solution="π" keys="π")}_ `* input(253)`: almost 62,000 cubic meters.  

---

11,520 isosceles triangles are planned to be used to create a perfect geodesic sphere of this size. 

Like Epcot’s Spaceship Earth, there are many other modern examples of spherical buildings all around the woırld.

{.todo} Slideshow:

    figure: x-img(src="images/ch5_21.png" width="600" height="399")

Tianjin Binhai Library (Tianjin, China)

Besides its perfectly round beauty, the properties of the sphere make it a perfect choice for the modern structures.

    figure: x-img(src="images/ch5_16.png" width="600" height="338")

Amazon Spheres (Seattle, Washington)

Remember, spheres enclose the most volume for a given surface area of any geometric solid. 

So, it requires fewer building materials than more conventional buildings based on shapes such as rectangular prisms.

    figure: x-img(src="images/ch5_9.png" width="600" height="400")

La Géode (Paris, France)

 It also means less heat is lost or gained through the exterior, and the structure receives less force from strong winds that could potentially damage it. 

    figure: x-img(src="images/ch5_8.png" width="600" height="338")

Biosphère (Montreal, Canada)

Also, for the same reason of soap bubbles being spherical, the spherical shapes distribute the load of the building throughout the entire structure, which gives the building great strength.

    figure: x-img(src="images/ch5_12.png" width="600" height="599")
