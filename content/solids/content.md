# 3D Solids

## Introduction

> section: introduction
> sectionStatus: dev

So far, we’ve only looked at the geometry of flat, 2-dimensional objects like circles or rectangles – but we live in a three-dimensional world. Every object we see or touch has three __dimensions__.

::: column

{.todo} IMAGE: Dimensions gif 

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

::: column

{.todo} IMAGE: Egyptian pyramids

::: column.grow

As soon as humankind began constructing complex buildings, we needed solid geometry. In some Babylonian and Egyptian texts, you can see that they are concerned about the problems related to the sizes of the pyramids and other structures they have made.

Since then, architects have been using 3D geometry to define the spatial form of a building.  Nowadays, the design of buildings is continually advancing by combining different 3D shapes and their properties.

:::

{.todo} IMAGES

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

{.todo} [DISCUSS] INTERACTIVE: Polyhedra parts

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

::: column.grow

The Flatland is an animated film based on Edwin Abbott’s book Flatland: A Romance of Many Dimensions. The movie revolves around the inability of 2D shapes to grasp the third dimension. Characters are circles, triangles, and squares living in a 2D world. Their reality is shattered when a sphere from the 3D World comes to visit.

:::

---

Without realising, you will have seen many different types of polyhedra before:

::: column.grow

{.todo} IMAGE: Dice

::: column.grow

{.todo} IMAGE: Football

A football consists of [[pentagons]] and [[hexagons]]. Mathematicians call this shape a truncated icosahedron.

:::

---

There are some things impossible in the 2D world that become possible in the 3D.

    // Page 5

Try this puzzle now.

Can you create 4 congruent triangles by using 6 toothpicks without bending or cutting them?

{.todo} [LATER] INTERACTIVE: Toothpicks puzzle

The trick is again thinking in 3D instead of 2D.

    // Page 6

---

### Cubes

One of the most common types of 3D solids is a cube.

{.todo} IMAGES

A cube is a 3d shape that has 6 faces all of which are [[squares]].

::: column

{.todo} IMAGE: Rubik's Cube

::: column.grow

For instance, The Rubik's Cube is a classic toy invented in 1974 by Hungarian architecture and design professor Erno Rubik.  Each of the faces of a Rubik’s cube contains 9 colored squares. 

Although one of the smaller cubes (the central one) is not exposed, if we count carefully, we see that the Rubik’s cube is made up of [[27]] smaller rotatable cubes arranged in a 3x3x3 grid. 

:::

---

A cube has all its sides of the same length. If the length of all its sides is 1 unit, then it is called a unit cube. Unit cubes can be stacked together to create different 3D solids.

The 3D solids below consist of unit cubes. Can we find out the number of cubes used in each one including the hidden cubes?

Rotate the solids below to find the number of cubes that used to build them.

{.todo} INTERACTIVE: Cube-counting

::: column(width=300)

    figure
      x-voxel-painter(width=600 height=400, shape="-1.0,1.0,-0.8,0.0,1.0,-0.8,1.0,1.0,-0.8,2.0,1.0,-0.8,-1.0,0.0,-0.8,-1.0,-1.0,-0.8,-1.0,-2.0,-0.8,-1.0,1.0,0.2,-1.0,0.0,0.2,-1.0,-1.0,0.2,-1.0,0.0,1.2,-1.0,1.0,1.2,-1.0,1.0,2.2,0.0,1.0,0.2,0.0,1.0,1.2,1.0,1.0,0.2" playingFieldSize="5" rotateOnly hideGrid)

[[16]] cubes

::: column(width=300)

    figure
      x-voxel-painter(width=600 height=400, shape="0.0,0.0,-0.5,1.0,0.0,-0.5,2.0,0.0,-0.5,-1.0,0.0,-0.5,-2.0,0.0,-0.5,0.0,1.0,-0.5,1.0,1.0,-0.5,2.0,1.0,-0.5,-1.0,1.0,-0.5,-2.0,1.0,-0.5,0.0,-1.0,-0.5,1.0,-1.0,-0.5,2.0,-1.0,-0.5,-1.0,-1.0,-0.5,-2.0,-1.0,-0.5,0.0,2.0,-0.5,1.0,2.0,-0.5,2.0,2.0,-0.5,-1.0,2.0,-0.5,-2.0,2.0,-0.5,0.0,-2.0,-0.5,1.0,-2.0,-0.5,2.0,-2.0,-0.5,-1.0,-2.0,-0.5,-2.0,-2.0,-0.5,0.0,0.0,0.5,1.0,0.0,0.5,-1.0,0.0,0.5,0.0,1.0,0.5,1.0,1.0,0.5,-1.0,1.0,0.5,0.0,-1.0,0.5,1.0,-1.0,0.5,-1.0,-1.0,0.5,0.0,0.0,1.5" playingFieldSize="6" rotateOnly hideGrid)

[[35]] cubes

:::

    // Page 7

---

### Cuboids

::: column.grow

As with a square being rectangle, a cube is a cuboid.

A __cuboid__ is a box-shaped, where all six sides are rectangles. For example, pizza, cereal or shoe boxes are all cuboids.

Cuboids are some of the most common polyhedra we use every day.

::: column(width=200)

{.todo} IMAGE: Boxes

:::

---

{.todo} 3D; no pointing lines; hover for parts

Basically, a cuboid is a polyhedron with six rectangular faces. The opposite faces of cuboids are identical and parallel to each other.  Cuboids have  [[12]] edges, [[8]] vertices.

::: column(width=200)

{.todo} IMAGE: Pizza box

::: column.grow

An average pizza box has dimensions as 33 cm x 33 cm x 4 cm. It means it has 33 cm in length, 33 cm in width, and 4 cm in height or depth.
Sometimes a cuboid has two square faces and four rectangular faces like most of the pizza boxes.

:::

---

    // Page 8

An average cereal box has dimensions of 30 cm x 20 cm x 8 cm.

::: column

{.todo} IMAGE: Crunchy O's

::: column.grow

A Marketing agency built a 6 meters tall tipped-over cereal box outside the Vancouver Art Gallery in 2012.
Can you guess the dimensions of this cereal box?
Length: [[4 m]]   Width: [[1.6 m]]  Height: 6 m        
A cereal box is a cuboid with six [[rectangular]] faces.

:::

---

{.todo} IMAGE: Delivery box dimensions

When you try to send boxes from one place to another via delivery services, the company asks you the dimensions of your package in the form of  “l x w x h” to calculate the size and weight of the box to determine the shipping rate. 

Try identifying the dimensions of the cuboids in the form of  “l x w x h”:

{.todo} INTERACTIVE: Dimensions cube-counting

::: column(width=150)

    figure
      x-voxel-painter(width=150 height=200, shape="-1.0,-0.5,-3.5,0.0,-0.5,-3.5,1.0,-0.5,-3.5,-1.0,0.5,-3.5,0.0,0.5,-3.5,1.0,0.5,-3.5,-1.0,-0.5,-2.5,0.0,-0.5,-2.5,1.0,-0.5,-2.5,-1.0,0.5,-2.5,0.0,0.5,-2.5,1.0,0.5,-2.5,-1.0,-0.5,-1.5,0.0,-0.5,-1.5,1.0,-0.5,-1.5,-1.0,0.5,-1.5,0.0,0.5,-1.5,1.0,0.5,-1.5,-1.0,-0.5,-0.5,0.0,-0.5,-0.5,1.0,-0.5,-0.5,-1.0,0.5,-0.5,0.0,0.5,-0.5,1.0,0.5,-0.5,-1.0,-0.5,0.5,0.0,-0.5,0.5,1.0,-0.5,0.5,-1.0,0.5,0.5,0.0,0.5,0.5,1.0,0.5,0.5,-1.0,-0.5,1.5,0.0,-0.5,1.5,1.0,-0.5,1.5,-1.0,0.5,1.5,0.0,0.5,1.5,1.0,0.5,1.5,-1.0,-0.5,2.5,0.0,-0.5,2.5,1.0,-0.5,2.5,-1.0,0.5,2.5,0.0,0.5,2.5,1.0,0.5,2.5,-1.0,-0.5,3.5,0.0,-0.5,3.5,1.0,-0.5,3.5,-1.0,0.5,3.5,0.0,0.5,3.5,1.0,0.5,3.5" playingFieldSize="9" rotateOnly hideGrid)

[[3]]x[[2]]x[[8]]

::: column(width=150)
    
    figure
      x-voxel-painter(width=150 height=200, shape="-2.0,0.0,0.0,-1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,2.0,0.0,0.0" playingFieldSize="6" rotateOnly hideGrid)

[[5]]x[[1]]x[[1]]

::: column(width=150)

    figure
      x-voxel-painter(width=150 height=200, shape="-2.0,0.0,-2.5,-1.0,0.0,-2.5,0.0,0.0,-2.5,1.0,0.0,-2.5,2.0,0.0,-2.5,-2.0,1.0,-2.5,-1.0,1.0,-2.5,0.0,1.0,-2.5,1.0,1.0,-2.5,2.0,1.0,-2.5,-2.0,-1.0,-2.5,-1.0,-1.0,-2.5,0.0,-1.0,-2.5,1.0,-1.0,-2.5,2.0,-1.0,-2.5,-2.0,-2.0,-2.5,-1.0,-2.0,-2.5,0.0,-2.0,-2.5,1.0,-2.0,-2.5,2.0,-2.0,-2.5,-2.0,2.0,-2.5,-1.0,2.0,-2.5,0.0,2.0,-2.5,1.0,2.0,-2.5,2.0,2.0,-2.5,-2.0,2.0,-1.5,-1.0,2.0,-1.5,0.0,2.0,-1.5,1.0,2.0,-1.5,2.0,2.0,-1.5,-2.0,0.0,-0.5,-1.0,0.0,-0.5,0.0,0.0,-0.5,1.0,0.0,-0.5,2.0,0.0,-0.5,-2.0,1.0,-0.5,-1.0,1.0,-0.5,0.0,1.0,-0.5,1.0,1.0,-0.5,2.0,1.0,-0.5,-2.0,-1.0,-0.5,-1.0,-1.0,-0.5,0.0,-1.0,-0.5,1.0,-1.0,-0.5,2.0,-1.0,-0.5,-2.0,-2.0,-0.5,-1.0,-2.0,-0.5,0.0,-2.0,-0.5,1.0,-2.0,-0.5,2.0,-2.0,-0.5,-2.0,2.0,-0.5,-1.0,2.0,-0.5,0.0,2.0,-0.5,1.0,2.0,-0.5,2.0,2.0,-0.5,-2.0,2.0,0.5,-1.0,2.0,0.5,0.0,2.0,0.5,1.0,2.0,0.5,2.0,2.0,0.5,-2.0,0.0,1.5,-1.0,0.0,1.5,0.0,0.0,1.5,1.0,0.0,1.5,2.0,0.0,1.5,-2.0,1.0,1.5,-1.0,1.0,1.5,0.0,1.0,1.5,1.0,1.0,1.5,2.0,1.0,1.5,-2.0,-1.0,1.5,-1.0,-1.0,1.5,0.0,-1.0,1.5,1.0,-1.0,1.5,2.0,-1.0,1.5,-2.0,-2.0,1.5,-1.0,-2.0,1.5,0.0,-2.0,1.5,1.0,-2.0,1.5,2.0,-2.0,1.5,-2.0,2.0,1.5,-1.0,2.0,1.5,0.0,2.0,1.5,1.0,2.0,1.5,2.0,2.0,1.5,-2.0,2.0,2.5,-1.0,2.0,2.5,0.0,2.0,2.5,1.0,2.0,2.5,2.0,2.0,2.5,-2.0,0.0,2.5,-1.0,0.0,2.5,0.0,0.0,2.5,1.0,0.0,2.5,2.0,0.0,2.5,-2.0,1.0,2.5,-1.0,1.0,2.5,0.0,1.0,2.5,1.0,1.0,2.5,2.0,1.0,2.5,-2.0,-1.0,2.5,-1.0,-1.0,2.5,0.0,-1.0,2.5,1.0,-1.0,2.5,2.0,-1.0,2.5,-2.0,-2.0,2.5,-1.0,-2.0,2.5,0.0,-2.0,2.5,1.0,-2.0,2.5,2.0,-2.0,2.5,-2.0,0.0,0.5,-1.0,0.0,0.5,0.0,0.0,0.5,1.0,0.0,0.5,2.0,0.0,0.5,-2.0,1.0,0.5,-1.0,1.0,0.5,0.0,1.0,0.5,1.0,1.0,0.5,2.0,1.0,0.5,-2.0,-1.0,0.5,-1.0,-1.0,0.5,0.0,-1.0,0.5,1.0,-1.0,0.5,2.0,-1.0,0.5,-2.0,-2.0,0.5,-1.0,-2.0,0.5,0.0,-2.0,0.5,1.0,-2.0,0.5,2.0,-2.0,0.5,-2.0,0.0,-1.5,-1.0,0.0,-1.5,0.0,0.0,-1.5,1.0,0.0,-1.5,2.0,0.0,-1.5,-2.0,1.0,-1.5,-1.0,1.0,-1.5,0.0,1.0,-1.5,1.0,1.0,-1.5,2.0,1.0,-1.5,-2.0,-1.0,-1.5,-1.0,-1.0,-1.5,0.0,-1.0,-1.5,1.0,-1.0,-1.5,2.0,-1.0,-1.5,-2.0,-2.0,-1.5,-1.0,-2.0,-1.5,0.0,-2.0,-1.5,1.0,-2.0,-1.5,2.0,-2.0,-1.5" playingFieldSize="7" rotateOnly hideGrid)

[[5]]x[[5]]x[[6]]

::: column(width=150)

    figure
      x-voxel-painter(width=150 height=200, shape="-3.0,-1.0,0.0,-3.0,0.0,0.0,-3.0,1.0,0.0,-2.0,-1.0,0.0,-2.0,0.0,0.0,-2.0,1.0,0.0,-1.0,-1.0,0.0,-1.0,0.0,0.0,-1.0,1.0,0.0,0.0,-1.0,0.0,0.0,0.0,0.0,0.0,1.0,0.0,1.0,-1.0,0.0,1.0,0.0,0.0,1.0,1.0,0.0,2.0,-1.0,0.0,2.0,0.0,0.0,2.0,1.0,0.0,3.0,-1.0,0.0,3.0,0.0,0.0,3.0,1.0,0.0" playingFieldSize="8" rotateOnly hideGrid)

[[7]]x[[3]]x[[1]]

:::

---

    // Page 9

::: column

{.todo} IMAGE: Temple model

::: column.grow

According to a legend, there was a devastating plague in Greece in 430BC. The Delians (citizens of a Greek Island, Delos) went to the temple of Apollo who told them that the plague will stop when they ___double the volume of his altar.___

:::

We can find the volume of more complex shapes by determining how many cubes of volume 1 it contains. 

The Apollo’s altar was a cubical temple with dimensions of five meters as its length, width, and height.

The Delians doubled the sides of the altar, but the plague did not stop. What went wrong? 

One way to find the volume of a cuboid is to fill the cuboid with unit cubes.

Volume is the number of cubic units that fill a 3D region, without any gaps or overlaps.

---

Let’s look at Apollo’s altar. If the edge length of the original altar was 5 units, then its base is a 5x5 square that has [[25]] unit cubes.

::: column

{.todo} Image for now, 3d later

::: column.grow

We continue to fill the altar by adding more cubes. 
The first layer is a 5 x 5 square made up from [[25]] cubes.

:::

---

    // Page 10

{.todo} INTERACTIVE: Area filling animation

There will be [[5]] layers of 25 cubes.
There must be `5 x 25 = input(125)` cubes to fill the entire altar. 

__It means the original cubic altar has a volume of 125 cubic units.__

The Delians did not follow the instructions carefully. They [[doubled each side]] of the altar. 
Let’s see what happened when they doubled the sides. 

::: column

{.todo} INTERACTIVE: temple area cubes

::: column.grow

When we double the sides of the cıube as the Delians have done with the incorrect altar, there will be [[100]] cubes and [[10]] layers. Therefore, the second altar they built had a volume of [[1000]] cubic units.

Doubling the dimensions of a three-dimensional figure will increase its volume by a factor of [[8]]. 

The Delians did not double the altar - they made it 8 times bigger.

:::

They should have doubled the volume instead of the side lengths.

::: column

{.todo} IMAGE: base-height

::: column.grow

To find the volume of the cube, the number of cubes in the first layer is multiplied by the height. This first layer is called the base and usually refers to the top and bottom faces of the cube.

:::

---

    // Page 11

Recall the original altar. We counted [[25]] cubes in each layer. Alternatively, we could have calculated the [[ area | length | diagonal]] of the base. 
The number of layers we added constitutes the [[height]] of the altar. 

We calculated the volume of the cubic altar by multiplying [[Base Area]] and [[height]].

Base Area => `ABase = input(5) x input(5) =25 m^2` and height is 5 meters

`Volume = A_Base x h`

`Volume = 25 x 5 = input(125) m^3`

In other words, the volume of a cube is the product of its length, [[width]], and [[height]].

`Volume = length x width x height`

::: column

A cube has the same value as its length, width, and height. 
The volume of a cube with a side length of “a” units is 
`V = a • a • a = blank(x, "a3", "3a", "3 + a")`

Multiplying three edge lengths allows us to determine the volume of cube efficiently.

::: column

{.todo} INTERACTIVE: cube

:::

A cube with an edge length of 3 centimeters has a volume of [[27]] cubic centimeters, which we can write as 27 cm3.

A cube with an edge length of 4 inches has a volume of [[64]] cubic inches, which we can write as 64 [[in3]].

Volume is always measured in cubic units, such as cubic inches (in3), cubic feet [[ft3]], cubic centimeters (cm3), or cubic meters [[m3]].

Greek temples have a very predictable layout. At the center, there is a section called Cella that holds a statue of the God to which the temple is dedicated. The cella is surrounded by a long string of columns.  They are not always in cubic forms but mostly in cuboids.

    // Page 12

Helping to prevent any future conflicts, we can find a general method to find the volume of all cuboids?

{.todo} IMAGE: temple model

::: column

{.todo} IMAGE: floorplan

::: column

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

{.todo} INTERACTIVE: Dimensions cube-counting

::: column

    figure
      x-voxel-painter(width=600 height=400, shape="-1.5,-1.5,-1.5,-0.5,-1.5,-1.5,0.5,-1.5,-1.5,1.5,-1.5,-1.5,-1.5,-0.5,-1.5,-0.5,-0.5,-1.5,0.5,-0.5,-1.5,1.5,-0.5,-1.5,-1.5,0.5,-1.5,-0.5,0.5,-1.5,0.5,0.5,-1.5,1.5,0.5,-1.5,-1.5,1.5,-1.5,-0.5,1.5,-1.5,0.5,1.5,-1.5,1.5,1.5,-1.5,-1.5,-1.5,-0.5,-0.5,-1.5,-0.5,0.5,-1.5,-0.5,1.5,-1.5,-0.5,-1.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,1.5,-0.5,-0.5,-1.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,1.5,0.5,-0.5,-1.5,1.5,-0.5,-0.5,1.5,-0.5,0.5,1.5,-0.5,1.5,1.5,-0.5,-1.5,-1.5,0.5,-0.5,-1.5,0.5,0.5,-1.5,0.5,1.5,-1.5,0.5,-1.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,1.5,-0.5,0.5,-1.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,1.5,0.5,0.5,-1.5,1.5,0.5,-0.5,1.5,0.5,0.5,1.5,0.5,1.5,1.5,0.5,-1.5,-1.5,1.5,-0.5,-1.5,1.5,0.5,-1.5,1.5,1.5,-1.5,1.5,-1.5,-0.5,1.5,-0.5,-0.5,1.5,0.5,-0.5,1.5,1.5,-0.5,1.5,-1.5,0.5,1.5,-0.5,0.5,1.5,0.5,0.5,1.5,1.5,0.5,1.5,-1.5,1.5,1.5,-0.5,1.5,1.5,0.5,1.5,1.5,1.5,1.5,1.5" playingFieldSize="5" rotateOnly hideGrid)

Volume= [[4]] x [[4]] x [[4]] = [[64]]

::: column

    figure
      x-voxel-painter(width=600 height=400, shape="-1.5,-0.5,-1.5,-0.5,-0.5,-1.5,0.5,-0.5,-1.5,-1.5,0.5,-1.5,-0.5,0.5,-1.5,0.5,0.5,-1.5,-1.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-1.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,-1.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-1.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-1.5,-0.5,1.5,-0.5,-0.5,1.5,0.5,-0.5,1.5,-1.5,0.5,1.5,-0.5,0.5,1.5,0.5,0.5,1.5" playingFieldSize="6" rotateOnly hideGrid)

Volume= [[2]] x [[3]] x [[5]] = [[30]]

::: column

    figure
      x-voxel-painter(width=600 height=400, shape="-1.0,-4.5,0.0,0.0,-4.5,0.0,1.0,-4.5,0.0,-1.0,-2.5,0.0,-1.0,-3.5,0.0,0.0,-3.5,0.0,1.0,-3.5,0.0,0.0,-2.5,0.0,1.0,-2.5,0.0,-1.0,-1.5,0.0,0.0,-1.5,0.0,1.0,-1.5,0.0,-1.0,-0.5,0.0,0.0,-0.5,0.0,1.0,-0.5,0.0,-1.0,0.5,0.0,0.0,0.5,0.0,1.0,0.5,0.0,-1.0,1.5,0.0,0.0,1.5,0.0,1.0,1.5,0.0,-1.0,2.5,0.0,0.0,2.5,0.0,1.0,2.5,0.0,-1.0,3.5,0.0,0.0,3.5,0.0,1.0,3.5,0.0,-1.0,4.5,0.0,0.0,4.5,0.0,1.0,4.5,0.0" playingFieldSize="11" rotateOnly hideGrid)

Volume= [[1] x [[3]] x [[10]] = [[30]]

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

{.todo} IMAGE: left column

If the base area of a cuboid smaller than the other, then its height has to be [[bigger | smaller | equal to]] to have the same volume.

If two cuboids have the same height, then the one with the greater base area has a [[greater]] volume.

We now know about how to find the volume of the cuboids, can we find another measure about them as well?



----------------------------------------------------------------------------------------------------



## Nets and Surface Area

> section: surface-area
> sectionStatus: dev

{.todo} COMING SOON

---

## Prisms and Pyramids

> section: prism-pyramid
> sectionStatus: dev

{.todo} COMING SOON

---

## Cylinders and Cones

> section: cylinder-cone
> sectionStatus: dev

{.todo} COMING SOON

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

So the volume of the prism is _{x-equation.small(solution="4 r^3" keys="sup")}_.

---

The volume of the hemisphere is definitely much **_less_** than that. 

::: column.fit

    figure: x-img(src="images/ch5_7.png" width="200" height="124")

::: column.grow

This time let's put the hemisphere in a cylinder.

The smallest possible cylinder that we can fit the hemisphere has the same [[radius|volume]] with the hemisphere and its radius is equal to its [[height|width]].

The volume of this cylinder is _{x-equation.small(solution="π r^2" keys="sup π")}_ `*` _{x-equation.small(solution="r")}_ `=` _{x-equation.small(solution="π r^3" keys="sup π")}_ and again the volume of the hemisphere is [[less|greater]] than that.

:::

---

This time, let’s insert a cone with the maximum possible volume inside of the hemisphere.

::: column.fit

    figure: x-img(src="images/ch5_27.png" width="200" height="137")

::: column.grow

The cone shares the same [[base|volume|surface area]] with the hemisphere and also its height is equal to [[its radius|twice the radius]].

The volume of this cone is _{x-equation.small(solution="(1/3) π r^3" keys="sup frac π")}_. This time, the volume of the hemisphere is [[more | less]] than the cone.

:::

---

If we **double** these boundaries to reach the volume of a whole sphere;

`"V"_"CONE" < "V"_"SPHERE" < "V"_"CYLINDER"`

_{x-equation.small(solution="(2/3) π r^3" keys="sup frac π")}_ `< "V"_"SPHERE" <` _{x-equation.small(solution="2 π r^3" keys="sup π")}_

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

`"V"_"SPHERE" = 2 / 3` _{x-equation.small(solution="π r^2 h" keys="π sup")}_ since `"h" = 2"r"`, we can replace `"h"`

`"V"_"SPHERE" = (2/3) pi r^2 *` _{x-equation.small(solution="2 r")}_

`"V"_"SPHERE" = (2/3) * 2 pi *` _{x-equation.small(solution="r^3" keys="sup")}_

`"V"_"SPHERE" =` _{x-equation.small(solution="π r^3" keys="π sup")}_

:::

---

Archimedes has also found that the **same ratio** exists between the **surface areas** of the cylinder and sphere as well.

Surface Area of a Cylinder = _{x-equation.small(solution="(2 π r^2) + (2 π r h)" keys="π sup +")}_

---

Surface Area of the Cylinder with `"h" = "2"` is: `2 pi r^2 + 2 pi r *` _{x-equation.small(solution="2 r")}_ `=` [[`6 pi "r"^2` | `4 pi "r"^2` | `8 pi "r"^2`]]

---

If we use the same ratio of `input(2) / input(3)` to find the surface area of the sphere; 

---

`"A"_"SPHERE" =` _{x-equation.small(solution="4 π r^2" keys="π sup")}_

---

::: column.fit

    figure: x-img(src="images/ch5_4.png" width="181" height="217")

::: column.grow

This `2/3` ratio fascinated Archimedes so much he willed to be remembered with this discovery by requesting a sphere within a cylinder figure on his gravestone.

:::

Thanks to Archimedes, now we can go back to our initial question. We can calculate the surface area and volume of our world to find the true amount of water in it.

::: column.grow

The radius of Earth at the equator is 6378 kilometers. Although it is not a perfect sphere, we can still use the sphere’s volume formula to make a fair approximation.

`V_Earth =` _{x-equation.small(solution="π r^3" keys="π sup")}_ `= * pi * input(6378)^3 = 108.3 xx 10^10 "km"^3` **(approximately 1 trillion cubic kilometers)**

The **surface area** of the Earth can also be found by using the Archimedes formula _{x-equation.small(solution="4 π r^2" keys="π sup")}_.

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

    // TODO: Include images in table

    // figure: x-img(src="images/ch5_14.png" width="600" height="600")
    // Earth

    // figure: x-img(src="images/ch5_6.png" width="600" height="600")
    // Moon

    // figure: x-img(src="images/ch5_17.png" width="512" height="512")
    // Mars

    //figure: x-img(src="images/ch5_20.png" width="324" height="156")
    // Saturn

| Solar System | Radius | Volume | Surface Area |
|-|-|-|-|
| Earth | __r__ | __V__ | __A__ |
| Moon | `"r"/4` | `"V"/input(64)` | `"A"/16` |
| Mars | `"r"/2` | `"V"/8` | `"A"/input(4)` |
| Saturn | `input(10) * "r"` | `1000"V"` | `input(100) * "A"` |

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

**May the more volume be with you!**
