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

Recall that the ratio of the area of a circle to its square radius is a constant number called _{x-equation.small(solution="π" keys="π")}_. So the area of a circle is _{x-equation.small(solution="π r^2" keys="π sup")}_.

---

Pi is an [[irrational|rational]] number.

---

This indicates that the decimal part of the π goes to infinity without repeating itself.

π = 3.1415926…

The volume of a cylinder is,

{.text-center} `"V"_"Cylinder" = "Base Area" xx "Height"`

{.text-center} `"V"_"Cylinder" = ` _{x-equation.small(solution="π r^2 * h" keys="π sup")}_

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

{.text-center} `"V"_"Cone" =` _{x-equation.small(solution="1 / 3" keys="frac")}_ `xx blank("Base Area", "Base Perimeter") xx blank("height", "width")`

---

{.text-center} `"V"_"Cone" =` _{x-equation.small(solution="(1 / 3) × π r^2 × h" keys="frac sup π ×")}_

---

Nose cone has the same radius with the cylinder and has to hold 550 thousand liters of oxygen. Therefore the conical tank has to have a volume of 550 cubic meters.

{.text-center} `550 =` _{x-equation.small(solution="1 / 3" keys="frac")}_ `*` _{x-equation.small(solution="π" keys="π")}_ `* input(4)^2 * blank("Height"_"OxygenTank","Radius"_"OxygenTank")`

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

The net of the cylinder has two [[circles|rectangles]] with the area of _{x-equation.small(solution="π r^2" keys="π sup")}_ each. The curved face is actually a large [[rectangle|square|triangle|pentagon]].

The height of the rectangle is [[h|w|b]] and the width of the rectangle is the same as the [[circumference of the base|base area|diameter of the base]] of the circles.

:::

---

::: column.fit

    figure: x-img(src="images/ch4_34.svg" width="300" height="208")

::: column.grow

Since the lateral face of the cylinder is a rectangle, we can find the area by [[multiplying|dividing|adding|subtracting]] the length and width of the rectangle;

It is basically the [[circumference|radius|diameter]] of the base times the [[height|width]] of the cylinder.

Therefore, the lateral area is _{x-equation.small(solution="2 π r" keys="π")}_ `* blank("h","w")`.

:::

---

So the **Surface Area** of a cylinder is the sum of all the face areas.

{.text-center} `"A"_"Cylinder" = ` _{x-equation.small(solution="2 π r × 2" keys="π ×")}_ `+` _{x-equation.small(solution="2 π r × h" keys="π ×")}_

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

`"A"_"base" =` _{x-equation.small(solution="π r^2" keys="π sup")}_

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

`"A"_"lateral" = 1/2 ` _{x-equation.small(solution="2 π r" keys="π")}_ `* blank("s","h","l")`

---

`"A"_"lateral" =` _{x-equation.small(solution="π r s" keys="π")}_

---

Then, the total area of the cone is 

{.text-center} `"A"_"cone" =` _{x-equation.small(solution="π r^2 + π r s" keys="π sup")}_

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

The volume of each cone is: _{x-equation.small(solution="1 / 3" keys="frac")}_ `xx` _{x-equation.small(solution="36 π" keys="π")}_ `xx input(5) =` _{x-equation.small(solution="60 π" keys="π")}_ cubic meters

:::

---

Cylinder has the [[same|different]] circular base and a [[10]] m height. So the volume of the cylinder is: _{x-equation.small(solution="36 π" keys="π")}_ `xx input(10) =` _{x-equation.small(solution="360 π" keys="π")}_ cubic meters.

---

The total volume of the grain silo is _{x-equation.small(solution="480 π" keys="π")}_ cubic meters which is approximately 1500 cubic meters.

---

    figure: x-img(src="images/ch4_9.png" width="600" height="600")

**May the Less Drag and the new heights be with you !**

---

## Spheres

> section: spheres
> sectionStatus: dev

{.todo} COMING SOON
