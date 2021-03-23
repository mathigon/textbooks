
---
> id: voxel-builder
> goal: problem

To use these, you put the word "figure" then "x-voxel-painter()" indented beneath it. Between the brackets, you can do the following:
1. To control the size of the applet in pixels, put width= and height= numbers
2. To control how big the grid at the bottom is, i.e. how wide and broad you can make things and how zoomed in we'll be, add playingFieldSize = desired width in grid squares
3. If you don't want a grid at all, put hideGrid
4. You may want to make a certain shape yourself, and then have that appear in a window and not be editable.
  To do this, you first need to make the shape. You can do this in the first figure on this page.
  When you've made it, click the check mark and copy the comma-separated list it gives you
  In the place you want the shape-on-its-own to appear, make your figure. Paste in shape= "..." into the brackets, putting in what you copied
  That applet should now contain just the thing you made
5. If you don't want the students to be adding anything to what they see, so put rotateOnly
6. If you want no interaction at all, even rotating, put noInteraction
7. To have the color of interior cubs shown sometimes, have "explodeOnGrab" as well. Warning: this induces "rotateOnly" mode

### Examples

Take a look at this cube. Some of the faces, the ones on the inside you'll see, are grey. The ones that aren't grey are on its surface. How many non-grey faces are there?

    figure
      x-voxel-painter(width=600 height=400 color-sides,shape="-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,",playingFieldSize="4",hideGrid,rotateOnly,explodeOnGrab)

The following can be used to create and save:

    figure
      x-voxel-painter(width=600 height=400 color-sides playingFieldSize="20" )
        button.icon-btn: x-icon(name="eraser")

The volume of the cuboid below is 3 x 4 x 7 = [[72]].

    figure
      x-voxel-painter(width=600 height=400 color-sides, shape="-2.5,-1,-1.5,-1.5,-1,-1.5,-0.5,-1,-1.5,0.5,-1,-1.5,1.5,-1,-1.5,2.5,-1,-1.5,-2.5,-1,-0.5,-1.5,-1,-0.5,-0.5,-1,-0.5,0.5,-1,-0.5,1.5,-1,-0.5,2.5,-1,-0.5,-2.5,-1,0.5,-1.5,-1,0.5,-0.5,-1,0.5,0.5,-1,0.5,1.5,-1,0.5,2.5,-1,0.5,-2.5,-1,1.5,-1.5,-1,1.5,-0.5,-1,1.5,0.5,-1,1.5,1.5,-1,1.5,2.5,-1,1.5,-3.5,-1,-1.5,-3.5,-1,-0.5,-3.5,-1,0.5,-3.5,-1,1.5,-3.5,0,-1.5,-2.5,0,-1.5,-1.5,0,-1.5,-0.5,0,-1.5,0.5,0,-1.5,1.5,0,-1.5,2.5,0,-1.5,-3.5,0,-0.5,-2.5,0,-0.5,-1.5,0,-0.5,-0.5,0,-0.5,0.5,0,-0.5,1.5,0,-0.5,2.5,0,-0.5,-3.5,0,0.5,-2.5,0,0.5,-1.5,0,0.5,-0.5,0,0.5,0.5,0,0.5,1.5,0,0.5,2.5,0,0.5,-3.5,0,1.5,-2.5,0,1.5,-1.5,0,1.5,-0.5,0,1.5,0.5,0,1.5,1.5,0,1.5,2.5,0,1.5,-3.5,1,-1.5,-2.5,1,-1.5,-1.5,1,-1.5,-0.5,1,-1.5,0.5,1,-1.5,1.5,1,-1.5,2.5,1,-1.5,-3.5,1,-0.5,-2.5,1,-0.5,-1.5,1,-0.5,-0.5,1,-0.5,0.5,1,-0.5,1.5,1,-0.5,2.5,1,-0.5,-3.5,1,0.5,-2.5,1,0.5,-1.5,1,0.5,-0.5,1,0.5,0.5,1,0.5,1.5,1,0.5,2.5,1,0.5,-3.5,1,1.5,-2.5,1,1.5,-1.5,1,1.5,-0.5,1,1.5,0.5,1,1.5,1.5,1,1.5,2.5,1,1.5,",playingFieldSize="8",hideGrid,rotateOnly)

Take a look at the three shapes below...

::: column.grow.text-center(width=120 parent="plato padded-thin")
__Front view__

    figure
      x-voxel-painter(width=180 height=120 color-sides, shape="-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,1.5,-0.5,-0.5,",playingFieldSize="3",hideGrid,rotateOnly,noInteraction,startingYRotation="0" startingXRotation="0")

::: column.grow.text-center(width=120)
__Side view__

    figure
      x-voxel-painter(width=180 height=120 color-sides, shape="-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,",playingFieldSize="3",hideGrid,rotateOnly,noInteraction,startingYRotation="270" startingXRotation="0")

::: column.grow.text-center(width=120)
__Top view__

    figure
      x-voxel-painter(width=180 height=120 color-sides, shape="-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,1.5,-0.5,-0.5,",playingFieldSize="3",hideGrid,rotateOnly,noInteraction,startingYRotation="0" startingXRotation="-90")
:::

Can you make a 3D shape that looks like these?

    figure
      x-voxel-painter(width=600 height=400 color-sides,shape="-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,1.5,-0.5,-0.5,-0.5,0.5,-0.5,",playingFieldSize="4",hideGrid,rotateOnly)

---
> id: voxel-builder-question
> goal: problem

Try to make a shape with a surface area of 10 and a volume of 2

    figure
      x-voxel-painter(width=600 height=400 color-sides,playingFieldSize="4")
        button.icon-btn: x-icon(name="eraser")
        button.icon-btn(surfaceArea=10 volume=2): x-icon(name="check")

---
