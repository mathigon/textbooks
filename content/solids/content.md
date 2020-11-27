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

::: column.fit

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

---


----------------------------------------------------------------------------------------------------


## Nets and Surface Area

> section: surface-area
> sectionStatus: dev

### Meaning

::: column.fit

    // https://imgur.com/iJVU7
    x-img(width=300 height=179 src="https://i.imgur.com/iJVU7.jpeg")

::: column.grow

_As a prank, you may want to cover your friend’s car with lots of sticky notes. But how many will you need?_

:::

---

Let’s create a model of the car to estimate the number of sticky notes we will need.

We can use the unit cubes to create the model of the car:

::: column.fit

{.todo} INTERACTIVE: car model

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
we will need to have `input(28)-:input(0.006)=4467` sticky notes to cover the car!

---

Here, we have calculated the __surface area__ of the car model to find the total number of sticky notes needed.

    // page 2

__The surface area of a 3D solid is the number of square units that cover all the faces of the polyhedron, without any gaps or overlaps.__

::: column.grow

Here is a rectangular prism built up of [[12]] cubes.

It has [[6]] faces, but we only see three of them in the sketch.

::: column.fit

{.todo} INTERACTIVE: Faces rotation

:::

---

Rotate the shape to look at all of its faces.

{.todo} INTERACTIVE: Faces area display

---

Surface Area = [[32]] __square units__.
The units used to measure the surface area are square meter (`"m"^2`), square centimeter (`"cm"^2`), square inches (`"in"^2`), square feet (`"ft"^2`), and so forth.

---

### SA : V

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

::: column.fit

{.todo} INTERACTIVE: Elephant cuboid

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

{.todo} INTERACTIVE: Mind map

---

_{button.btn.continue}Continue_

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

When the solids get complicated, drawing them on a 2D paper gets harder too. But there is another way to represent the 3D solids on a 2D plane.

    // page 8

We can use the [nets](gloss:net) of the solids which are composed of polygons that form the faces of a polyhedron.

{.todo} INTERACTIVE: 3D Solids with a slider to open and close the net. (Maybe Da Vinci’s examples’ nets can be included)

---

__They are the 2D coats that cover up the entire surface of 3D solids.__

For instance, the net of a cube consists of [[6]] squares. With the correct arrangement of the squares, they can fold up a cube.

---

Let’s try to draw the __net__ of a cube:

::: column.fit

{.todo} INTERACTIVE: Cube net drawing

::: column.grow

There are many different ways to arrange six squares to fold up as a cube.

Let’s have a look at which one of the below can be folded to a cube.

::: column.fit

    x-img(width=177 height=154 src="images/cubenet.png")

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

---

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

With this information, we can now calculate the amount of cardboard needed to make the box; `(4 * 2) + (4 * 2) + (3 * 2) + (4 * 3) + (4 * 3) = input(52)  "square centimeters"`

The surface area of the cuboid is 52 `blank("cm^2", "cm")`.

:::

---

Use the slider to open the cuboid to its net. Then drag the side length measures to corresponding sides to find the surface area.

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

`"Surface Area of the Cuboid" = ` _{x-equation(solution="2ab" keys="a b c" numeric)}_ ` + ` _{x-equation(solution="2bc" keys="a b c" numeric)}_ ` + ` _{x-equation(solution="2ac" keys="a b c" numeric)}_

::: column(width=250)

`"Surface Area of the Cube" = ` _{x-equation(solution="6 a^2" keys="a b c sup" numeric)}_

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

{.todo} COMING SOON
