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
we will need to have `input(28)/input(0.006)=4467` sticky notes to cover the car!

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

    // COMMENT: Use Tinder component for this for now

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

Number of sides of the base polygon: _{span.comments(text="TODO: Variable Slider")}[<<3>>](pill:green)_

#### Triangular Prism

::: column.fit

    figure: x-img(src="images/ch3_16.png" width="200" height="162")

::: column.grow

Since the base of the prism an equilateral triangle, _{span.comments(text="pill to yellow area")}[Base Area](pill:blue)_ can be found by the `1/2 ("base" xx "height")`

`"A"_"Base" = (4 * 3.5) / 2 = 7 "mm"^2`

`"V"_"Prism" = "A"_"Base" xx "Height of the Prism"`

`"V"_"Prism" = ` _{span.comments(text="We can create equation fields for all the calculations")}_ `7 xx 10 = 70 "mm"^3`

:::

#### Square Prism

::: column.fit

    figure: x-img(src="images/ch3_42.png" width="200" height="157")

::: column.grow

Since the base of the prism a square, _{span.comments(text="pill to yellow area")}[Base Area](pill:blue)_ can be found by squaring the side length 

`"A"_"Base" = 4 xx 4 = 16 "mm"^2`

`"V"_"Prism" = "A"_"Base" xx "Height of the Prism"`

`"V"_"Prism" = `_{span.comments(text="Equation Field")}`16 xx 10 = 160 "mm"^3`_

:::

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

Compared to the other prisms that leave no gaps or overlaps (such as triangular and square), the hexagon prism creates a comb with the maximum volume. 

Remember, bees also need to use the least amount of wax possible to construct these combs. Since they can only produce 1 oz of wax by using 8 oz of honey, the wax is very precious for them too. They cannot spend more wax than necessary.

For finding the amount of wax needed to build walls of the combs, we need to find the [[surface area|volume]] of the prisms.

---

Using [[nets|projections]] can help us to calculate the surface areas of the prisms.

---

We have already found the base area of the prisms.

    // COMMENT: (3D Solids with a slider to open to their nets and close back)

_{span.comments(text="Variable Slider")}Number of sides of the base polygon [<<3>>](pill:blue)_

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

---

#### Square Prism

::: column.fit

    figure: x-img(src="images/ch3_42.png" width="200" height="157")

::: column.grow

`"A"_"Base" = 4 xx 4 = 16 "mm"^2`

There are [[4]] _{span.comments(text="Pill: the lateral faces on the net")}rectangular lateral faces_ with the [[4]] x [[10]] = [[40]] `"mm"^2` area.
So the sum of all the areas of the faces will be

`"A"_"Prism" = pill("A"_"Base", "green") + pill("A"_"Lateral face", "blue") = [[56]]  "mm"^2`

:::

---

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

**Charles Darwin** described the honeycomb as a masterpiece of engineering that is **_“absolutely perfect in economizing labor and wax.”_**

Architectural Design imitates nature when seeking solutions of _{span.comments(text="I don't think that's the case here – most of the shapes in the examples below are simply chosen because of the street grid and available space.")}sustainability and efficiency_. All kinds of prisms are regularly used in architecture.

An interactive slideshow :

    figure: x-img(src="images/ch3_10.png" width="600" height="337")

    figure: x-img(src="images/ch3_1.png" width="183" height="275")

    figure: x-img(src="images/ch3_4.png" width="225" height="225")

    figure: x-img(src="images/ch3_22.png" width="600" height="865")

Hexagonal Cabins

22-story Triangular Prism Building 

Flat Iron, Manhattan, NYC

A 30 story Pentagonal Prism  Building 

Baltimore World Trade Center

A 38 story Rectangular prism Building 

Seagram Building

Let’s have a look at the tallest buildings in the world.

    figure: x-img(src="images/ch3_66.png" width="600" height="250")

    // COMMENT: Probably not needed but for some reason, this got me thinking of the Olympic Village in Montreal that is somewhat of a pyramid: en.wikipedia.org/wiki/Olympic_Village_(Montreal)

_{span.comments(text="I really like this transition!")}When the buildings become taller and taller they start losing their prism-like shapes and become more triangular_. Pyramids are a particular type of architecture developed since ancient times and still used today for modern buildings. The first pyramids were built in Mesopotamia, but the most famous pyramids are the Egyptian and Mayan pyramids.

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

This is sure a great advantage during the construction, but it requires a different method to calculate the volume of the pyramids._{span.comments(text="We should add a paragraph (and interactive diagram) that shows that all cross sections parallel to the bases are similar (but not congruent).")}_

    figure: x-img(src="images/ch3_38.jpg" width="600" height="338")

    figure: x-img(src="images/ch3_77.jpg" width="600" height="338")

_{span.comments(text="docs.google.com/presentation/d/1PW_E6QjsT9qLr2h2XewZRjzCMXNsTimmOT-fC7c48aI/edit?usp=sharing")}**Tabbed Box**_ **:** _{span.comments(text="When I teach this in school, we have a set of many different prisms and pyramids with the same base and same height. Students predict how many pyramids it will take to fill up the related prism. Then, students use rice or pasta or water to check their hypothesis. They fill up the pyramid and pour it into the prism and count how many it takes to fill it up. I found this a really powerful and effective lesson. I wonder how some of that could be incorporated here? I image the GIF on the first slide has some animation of that, but I wonder if there is a way to make students do it? There could be an empty square based pyramid and an empty cuboid and the fill up the pyramid with water by placing it under a sink and then they have to drag it over to the cuboid and fill up the cube. Then, they'd actually have to do it 3 times. Not quite as powerful as doing it in person I think, but if they do it 2-3 times, they helps build understanding of the formula. | I totally agree - I was doing the same experiment with my students with the set of geo solids.. I was planning to talk with Philipp about the animations, pills, hover targets in this section. This part has to be really interactive for kids to grab the formula | Jumping in to agree with you both here. An interactive element that really lets students explore here will take pressure off of the language/text. Since this is such an important, and sometimes challenging, concept. It may be worthwhile to require as little effort on reading as possible.And I think all of the slides help lay a foundation for the interactive! | @philipp this is a great discussion on an interactive element. What's possible?")}_

    figure: x-img(src="images/ch3_39.jpg" width="600" height="338")

    figure: x-img(src="images/ch3_26.jpg" width="600" height="338")

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

{.todo} COMING SOON

---

## Spheres

> section: spheres
> sectionStatus: dev

{.todo} COMING SOON
