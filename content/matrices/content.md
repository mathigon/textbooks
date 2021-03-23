# Matrices

## Transformations

> section: transformations
> sectionStatus: dev
> id: rocket
> goals: projectile
> color: "#5A49C9"
> level: Advanced

::: column.grow

When we play video games with 3d graphics, what we are really looking at are millions of tiny triangles. Everything from the mountains and grass that make up the environment, to the goblins that guard the precious treasure, to the spaceship that you pilot through an asteroid belt, is made up of many small triangles. The computer in your video game console runs trillions of computations to figure out how each shape will be displayed on the screen.

::: column.fit

    x-geopad(width=400 x-axis="-18,18,5" y-axis="-18,18,5" padding=5): svg
      - var path = "point(0,3),point(2,0),point(2,-2),point(0,-1),point(-2,-2),point(-2,0)"
      path.fill.green(x=`polygon(${path}).rotate(th)`)

:::

What kind of computations is our computer performing? Before we try displaying intricate three-dimensional landscapes and characters, let's imagine we want to draw a 2d spaceship that we can rotate to shoot incoming asteroids.

---

Here is our humble spaceship. Like the shapes displayed in video games, we can represent our spaceship as a collection of points, with lines connecting them. We can draw it on the xy coordinate plane, centered on the origin, with each point labelled as an (x, y) value.

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="a" x="point(0,3)" label="A" target="a")
      circle.green(name="b" x="point(2,0)" label="B")
      circle.green(name="c" x="point(2,-2)" label="C")
      circle.green(name="d" x="point(0,-1)" label="D")
      circle.green(name="e" x="point(-2,-2)" label="E")
      circle.green(name="f" x="point(-2,0)" label="F")

      path.green(x="segment(a,b)")
      path.green(x="segment(b,c)")
      path.green(x="segment(c,d)")
      path.green(x="segment(d,e)")
      path.green(x="segment(e,f)")
      path.green(x="segment(f,a)")

:::

Here the point [{.green} A](target:a) has coordinates ([[0]], [[3]]).

---

We would like to give our spaceship the ability to rotate in place, so the player can point it at incoming asteroids. This rotation is something we call a [transformation](gloss:transformation). Let's notify the Rotation of the spaceship through angle θ as `R_"θ"`.

{.text-center} `{P_"1", P_"2", P_"3", P_"4", P_"5", P_"6"}` --- `R_"θ"` ---> `{P_"1"', P_"2"', P_"3"', P_"4"', P_"5"', P_"6"'}`
{.fixme} Could be nice with hover points to graphic.

Each point `P_"n"` has the transformation `R_"θ"` applied to it, which  rotates the point around the origin to get point `P_"n"'` (pronounced "P n prime").

Here is a spaceship we can rotate by ${phi + 'º'}{phi|60|10,350,10} around the origin.

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="a" x="point(0,3)" label="A" target="a")
      circle.green(name="b" x="point(2,0)" label="B")
      circle.green(name="c" x="point(2,-2)" label="C")
      circle.green(name="d" x="point(0,-1)" label="D")
      circle.green(name="e" x="point(-2,-2)" label="E")
      circle.green(name="f" x="point(-2,0)" label="F")

      circle.blue(name="ap" x="a.rotate(phi/180*pi)" label="A'")
      circle.blue(name="bp" x="b.rotate(phi/180*pi)" label="B'")
      circle.blue(name="cp" x="c.rotate(phi/180*pi)" label="C'")
      circle.blue(name="dp" x="d.rotate(phi/180*pi)" label="D'")
      circle.blue(name="ep" x="e.rotate(phi/180*pi)" label="E'")
      circle.blue(name="fp" x="f.rotate(phi/180*pi)" label="F'")

      path.green(x="segment(a,b)")
      path.green(x="segment(b,c)")
      path.green(x="segment(c,d)")
      path.green(x="segment(d,e)")
      path.green(x="segment(e,f)")
      path.green(x="segment(f,a)")

      path.blue(x="segment(ap,bp)")
      path.blue(x="segment(bp,cp)")
      path.blue(x="segment(cp,dp)")
      path.blue(x="segment(dp,ep)")
      path.blue(x="segment(ep,fp)")
      path.blue(x="segment(fp,ap)")

:::

Here are some things we can say about the shape of our spaceship as it rotates:
- The spaceship must retain its shape.
- The spaceship will have the same size.
- It does not move up and down.

We would like a formula to convert any point `P` into its rotated point `P'`.

Let's start by calculating this formula for two different points.

[Continue](btn:next)

---
> id: two-points

### Calculating the rotation of two points

For our two points, let's pick [{.green} A](target:a) = `(0,3)` and [{.green} B](target:b) = `(2,0)`. We can determine the formulas for their rotation [{.purple} θ](target:theta) around the origin one at a time.

::: tab
#### (0,3)

If we rotate the point [{.green}A](target:a) at (0,3) ${t1 + 'º'}{t1|60|10,350,10} around the origin, it has a new `(x,y)` value. We can call our rotated point [{.blue}A'](target:ap) (A prime), with coordinates `(x', y')` (x prime and y prime).

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="a" x="point(0,3)" label="A" target="a")

      circle.blue(name="ap" x="a.rotate(t1/180*pi)" label="A'" target="ap tri1")

      path.green(x="segment(point(0,0),a)")

      path.blue(x="segment(point(0,0),ap)" target="tri1")
      path.red(x="segment(point(0,ap.y), point(ap.x, ap.y))" target="xp tri1" label="x'")
      path.yellow(x="segment(point(0,0), point(0, ap.y))" target="yp tri1" label="y'")

      path.purple(x="angle(ap,point(0,0),a)" target="theta tri1" round size=40)

:::

What is a formula to get the new coordinates for A’? We can call our new x value [{.red}x'](target:xp), and our new y value [{.yellow}y'](target:yp). Both __x'__ and __y'__ will be dependent on the length of __A__, which is 3.

These points form a [right triangle](target:tri1), so we can draw upon our knowledge of trigonometry to find the formulas for __x'__ and __y'__.

{.fixme} This might be confusing for theta > 90º

Our [{.red}x'](target:xp) value is the opposite of the known angle, so we can use the formula for [sine](gloss:sin) to determine that:

`x' = 3 * `[[-sin(θ)|sin(θ)|cos(θ)]]

Our [{.yellow}y'](target:yp) value is the adjacent side of a right triangle, so we can use the formula for [cosine](gloss:cos) to determine that:

`y' = 3 * `[[cos(θ)|sin(θ)]]


::: tab
#### (2,0)

Let's look at another point.
If we rotate the point [{.green}B](target:b) at (2,0) ${t2 + 'º'}{t2|60|10,350,10} around the origin, it has a new `(x,y)` We can call our rotated point [{.blue}B'](target:bp) (B prime), with coordinates `(x', y')` (x prime and y prime).

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="b" x="point(2,0)" label="B" target="b")

      circle.blue(name="bp" x="b.rotate(t2/180*pi)" label="B'" target="bp tri2")

      path.green(x="segment(point(0,0),b)")

      path.blue(x="segment(point(0,0),bp)" target="tri2")
      path.red(x="segment(point(0,0), point(bp.x, 0))" label="x'" target="xp tri2")
      path.yellow(x="segment(point(bp.x, 0), point(bp.x, bp.y))" label="y'" target="yp tri2")
      path.purple(x="angle(bp,point(0,0),b)" target="tri2" round size=40)


:::

What is a formula to get the new coordinates for [{.blue}B’](target:bp)? We can call our new x value [{.red}x'](target:xp), and our new y value [{.yellow}y'](target:yp). Both __x'__ and __y'__ will be dependent on the length of __B__, which is 2.

These points form a [right triangle](target:tri2), so we can draw upon our knowledge of trigonometry to find the formulas for __x'__ and __y'__.

{.fixme} This might be confusing for theta > 90º

Our [{.red}x'](target:xp) value is the adjacent side of the known angle, so we can use the formula for [cosine](gloss:cos) to determine that:

`x' = 2 * `[[cos(θ)|sin(θ)]]

Our [{.yellow}y'](target:yp) value is the opposite side of the known angle, so we can use the formula for [sine](gloss:sin) to determine that:

`y' = 2 * `[[sin(θ)|cos(θ)]]

:::


---
> id: linear-combination

::: column

We now have equations for the `(x', y')` coordinates of the two points `A'` and `B'`. We still have four more rotated points to calculate (`C'`, etc), but is there a shortcut where we can use what we already have?

::: column


    table
      tr
        td Name
        td xy
        td Rotated
        td Rxy
      tr
        td A
        td (0, 2)
        td A'
        td (-2sin(θ), 2cos(θ))
      tr
        td B
        td (3, 0)
        td B'
        td 3cos(θ), 3sin(θ))
      each p in [['C', [2, -2]] , ['D', [0, -1]], ['E', [-2, -2]], ['F', [-2, 0]]]
        - var pp = p[0] + "'"
        tr
          td= p[0]
          td= p[1]
          td= pp
          td

:::

{.fixme} Table needs to look a lot nicer.

[Continue](btn:next)

---

Remember from our last course on [vectors](link/to/course) that any vector can be treated as a [linear combination](gloss:linear-combination) of the two unit vectors <uv>__i__</uv> and <uv>__j__</uv>.

We can use the formulas we calculated for rotations of __A__ and __B__ to find the rotation for any other point! __A__ lies along the y-axis so it is just a scaled version of the unit vector [[j|i]], and __B__ lies upon the x-axis so it is just a scaled version of the unit vector [[i|j]].

---

When we divide the lengths of A and B from the respective coordinates in A' and B', we can get the formulas for the rotations of the unit vectors.

{.fixme} What kind of notation should we use? Unit Vectors? Points?

`(1, 0)` becomes `(sinθ, -cosθ)` and `(0, 1)` becomes `(cosθ, sinθ)`.

---

We can then write the equation for __any__ rotated point by writing it as a linear combination of the unit vectors.

for `x'`...

{.text-center} `x' = pill(x, "teal") * cosθ - pill(y, "purple") * sinθ`

for `y'`...

{.text-center} `y' = pill(x, "teal") * sinθ + pill(y, "purple") * cosθ`


We can rewrite this as a new vector.

{.text-center} `§[[x'] [y']]` = `§[[(pill(x, "teal", "x", "x") * cosθ - pill(y, "purple") * sinθ)] [(pill(x, "teal") * sinθ + pill(y, "purple") * cosθ)]]`


Notice that both x' and y' are dependent on [{.teal}x](target:x) and [{.purple}y.](target:y)

[Continue](btn:next)

---
> id: matrices

#### Matrices

Mathematicians came up with a very powerful concept called a [matrix](gloss:matrix), that can help us write this in a new way. A matrix is like a spreadsheet table, with cells each containing their own numbers.

This matrix has 2 rows and 2 columns so it is a 2x2 matrix, but they can be any size.

{.text-center}`§[[cosθ (-sinθ)] [sinθ cosθ]]`


**We can rewrite our calculations for the coordinates `x'` and `y'` in the following way:**

{.text-center}`§[[x'] [y']]` = `§[[cosθ (-sinθ)] [sinθ cosθ]]` x `§[[pill(x, "teal")] [pill(y, "purple")]]` = `§[[(pill(x, "teal", "x", "x") * cosθ - pill(y, "purple") * sinθ)] [(pill(x, "teal") * sinθ + pill(y, "purple") * cosθ)]]`

This is a [matrix multiplication](gloss:matrix-multiplication), wherein we multiply a matrix times a vector `(x,y)` to get a new vector `(x', y')`. [This matrix](target:rotation-matrix) is the transformation `R_"θ"` that we have been looking for! When we change the values within this matrix, we can change the transformation.

{.fixme} Here is another representation:

::: column(width=100)

    table.vector
      tr: td(target="feature pref-A-1"): b x'
      tr: td(target="feature pref-A-2"): b y'

::: column(width=20)

    div.op =

::: column(width=200)

    table.matrix
      tr
        td(target="feature pref-A-1"): b cosθ
        td(target="feature pref-A-2"): b -sinθ
      tr
        td.name(target="pref-A-1 pref-A-2"): b {.m-green}sinθ
        td.cell(target="pref-A-1") cosθ

::: column(width=20)

    div.op x

::: column(width=100)

    table.vector
      tr: td(target="feature pref-A-1"): b x
      tr: td(target="feature pref-A-2"): b y

::: column(width=20)

    div.op =

::: column(width=400)

    table.vector
      tr: td
          div(target="x") cosθ * x
          div.op +
          div(target="y") -sinθ * y
      tr: td
          div(target="x") sinθ * x
          div.op +
          div(target="y") cosθ * y

:::

{.fixme} Activity where student can drag slider to adjust θ and the matrix values are updated (up to two decimal points).

[Hover x](target:x) and [Hover y](target:y)

{.todo} Stronger Connection between matrices and what it means to be a "transformation"

[Continue](btn:next)

---
> id: identity

#### Identity Matrix

What if for our matrix, we wrote this instead?

{.text-center} `§[[1 0] [0 1]]`

What happens when we apply this transformation to the vector `§[[x] [y]]`?

{.text-center} `§[[1 0] [0 1]]` x `§[[x] [y]]` = `§[[(1*x + 0*y)] [(0*x + 1*y)]]` = `§[[x] [y]]`

{.fixme} The student should fill in these values on their own.

This transformation [[has no effect on|reverses|negates]] the vector `§[[x] [y]]`.

---

{.text-center}`x' = x` and `y' = y`

For any vector, the result of the transforation will be the same. This is called the [identity matrix](gloss:identity-matrix), because its product with any 2x1 vector is that identical 2x1 vector. This is much like `1` is the identity function for integer multiplication (`1 x n = n`) and `0` is the identity function for addition (`0 + n = n`).

[Continue](btn:next)

---
> id: basic-transformations

We have already seen how we can multiply a vector by a 2x2 matrix to rotate that vector about the origin, and we have seen how the identity matrix leaves the vector unchanged. What other transformations exist?

::: tab
#### Scale

What if we adjust the top-left and bottom-right numbers of our transformation matrix?

<table>
<tr><td>${xscale}{xscale|1.0|-2.0,2.0,0.1}</td><td>0</td></tr>
<tr><td>0</td><td>${yscale}{yscale|1.0|-2.0,2.0,0.1}</td></tr>
</table>

    include mixins
    svg(width=220 height=220)
      +grid220
      g.var.scale(:html="polygonTransform(xscale, 0, 0, yscale)")

Changing the [top-left](target:ma) value scales x' along the x-axis.

Changing the [bottom-right](target:md) value scales y' along the y-axis.

{.text-center} `§[[a 0] [0 d]]` x `§[[x] [y]]` = `§[[a*x + 0*y] [0*x + d*y]]` = `§[[ax] [dy]]`

{.fixme} formatting and input.

{.fixme} Add some code that lets us snap to x-big, x-shrink, x-reverse, y-big, y-shrink, y-reverse, etc.


::: tab
#### Reflections

What happens when we make the top-left and bottom-right values negative or positive?

Adjust the matrix to see how it changes in the coordinates.

<table>
<tr><td>${xreflect}{xreflect|1.0|-1,1,2}</td><td>0</td></tr>
<tr><td>0</td><td>${yreflect}{yreflect|1.0|-1,1,2}</td></tr>
</table>

    include mixins
    svg(width=220 height=220)
      +grid220
      g.var.scale(:html="polygonTransform(xreflect, 0, 0, yreflect)")


Flipping the sign of the [top-left](target:ma) value reflects the transformation across the [[x-axis|y-axis]], and flipping the sign of the [bottom-right](target:ma) value reflects the transformation across the [[y-axis|x-axis]].

{.text-center} `§[[a 0] [0 d]]` x `§[[x] [y]]` = `§[[a*x + 0*y] [0*x + d*y]]` = `§[[ax] [dy]]`

{.fixme} formatting and input.

::: tab
#### Shear

What if we adjust the values in the [top-right](target:mb) and [bottom-left](target:mc) corners of the matrix?

Adjust the matrices to see how they change the transformations.

::: column(width=220)

{.caption} A shear in the x direction.

    include mixins
    svg(width=220 height=220)
      +grid220
      g.var.shear(:html="polygonTransform(1, xshear, 0, 1)")

<table>
<tr><td>1</td><td>${xshear}{xshear|0.0|-2.0,2.0,0.1}</td></tr>
<tr><td>0</td><td>1</td></tr>
</table>

`§[[1 b] [0 1]]` x `§[[x] [y]]` = `§[[(x+by)] [y]]`

{.fixme} formatting and inputs

::: column(width=220)

{.caption} A shear in the y direction.

    include mixins
    svg(width=220 height=220)
      +grid220
      g.var.shear(:html="polygonTransform(1, 0, yshear, 1)")

<table>
<tr><td>1</td><td>0</td></tr>
<tr><td>${yshear}{yshear|0.0|-2.0,2.0,0.1}</td><td>1</td></tr>
</table>

`§[[1 0] [c 1]]` x `§[[x] [y]]` = `§[[x] [cx+y]]`

{.fixme} formatting and inputs

:::

Now add some buttons and code that make it snap to a set of matrix values.

These types of transformations are called [shear transformations](gloss:shear), because they shear the coordinate system in a perpindicular proportion (?phrasing?).

::: tab
#### Other

Of course, matrices can have any values in them, and thus can transform in many ways. Play with the values here and see how the transformation is still some combination of the basic transformations.

{.todo} Free reign to do whatever they want. Or just keep this separate, as shown below.

:::

---
> id: play-with-me

Try adjusting the values in the matrix and see what kind of transformations you can make!

    // try w/ grid on or off, to compare underlying grid w/ transformation
    - var GRID = 8
    x-geopad(width=400 x-axis=`-${GRID},${GRID},1` y-axis=`-${GRID},${GRID},1` grid padding=5): svg
      circle.green.move(name="ipoint" x="point(1,0)" target="i")
      circle.blue.move(name="jpoint" x="point(0,1)" target="j")
      circle(name="origin", x="point(0,0)")


        // right values for these? Ideally we'd show to "infinity", but this might render slowly?
      - var MINMAX = GRID*2
      - for (var b=-MINMAX; b <=MINMAX; ++b)
        // .fabric as in "fabric of reality"
        // can also try class ".grid" for default grid
        path.fabric(x=`line(point(${b}*jpoint.x, ${b}*jpoint.y), point(ipoint.x + ${b}*jpoint.x, ipoint.y + ${b}*jpoint.y))`)
        path.fabric(x=`line(point(${b}*ipoint.x, ${b}*ipoint.y), point(${b}*ipoint.x + jpoint.x, ${b}*ipoint.y + jpoint.y))`)

      - var DRAW_SHIP = false
      - var SPACESHIP = [[3,0], [0,3], [-3,0], [-3,-3], [0,-1], [3,-3]]
      if DRAW_SHIP
        each p,i in SPACESHIP
          circle.red(name=`s${i}` x=`point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`)
          path.red(x=`segment(s${i}, s${(i+1)%SPACESHIP.length})`)

      - var DRAW_BOAT = true
      - var BOAT_RED = [[0.25,-2.5], [6.5,-2.5], [0.25,7]]
      - var BOAT_PURPLE = [[-0.25,-1.5], [-4.25,-1.5], [-0.25,7]]
      - var BOAT_ORANGE = [[0,5], [0,7.5], [-3.75,6.25]]
      - var BOAT_GREEN = [[7, -4], [5,-6], [-5,-6], [-7,-4]]
      - var BOAT_GRAY = [[-0.25,-4],[0.25,-4],[0.25,7],[-0.25,7]]
      if DRAW_BOAT
        - var gray = BOAT_GRAY.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
        path.fill.gray(x=`polygon(${gray})` label-class="gray")
        - var red = BOAT_RED.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
        path.fill.red(x=`polygon(${red})` label-class="red")
        - var purple = BOAT_PURPLE.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
        path.fill.purple(x=`polygon(${purple})` label-class="purple")
        - var orange = BOAT_ORANGE.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
        path.fill.orange(x=`polygon(${orange})` label-class="orange")
        - var green = BOAT_GREEN.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
        path.fill.green(x=`polygon(${green})` label-class="green")


        // each p,i in BOAT_GRAY
          // circle.gray(name=`bgy${i}` x=`point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`)
          // path.gray(x=`segment(bgy${i}, bgy${(i+1)%BOAT_GRAY.length})`)

        // each p,i in BOAT_RED
          // circle.red(name=`brd${i}` x=`point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`)
          // path.red(x=`segment(brd${i}, brd${(i+1)%BOAT_RED.length})`)
        // each p,i in BOAT_PURPLE
          // circle.purple(name=`bpp${i}` x=`point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`)
          // path.purple(x=`segment(bpp${i}, bpp${(i+1)%BOAT_PURPLE.length})`)
        // each p,i in BOAT_ORANGE
          // circle.orange(name=`bor${i}` x=`point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`)
          // path.orange(x=`segment(bor${i}, bor${(i+1)%BOAT_ORANGE.length})`)
        each p,i in BOAT_GREEN
          circle.green(name=`bgn${i}` x=`point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`)
          // path.green(x=`segment(bgn${i}, bgn${(i+1)%BOAT_GREEN.length})`)

      path.green(x="segment(point(0,0),ipoint)", label="i", target="i")
      path.blue(x="segment(point(0,0),jpoint)", label="j", target="j")



Here we display the [i](target:i) and [j](target:j) unit vectors.
Inside the matrix we have i = (${ipoint.x}, ${ipoint.y}) and j = (${jpoint.x}, ${jpoint.y})

Choose one of these buttons to snap to different transformations.

    .button IDENTITY
    .button SHEAR
    .button SCALE
    .button ROTATE
    .button LINE

[Continue](btn:next)

---
> id: gpu

{.todo} How does this relate to video games?

Video games can manipulate and millions of shapes per second with use of a __Graphical Processing Unit__ (GPU). GPUs are specially designed to perform many matrix multiplications at once.

[Continue](btn:next)

---
> id: translate

You may have noticed we have not discussed one type of transformation. We cannot move our shapes through space! To transform our shapes so they are centered anywhere but the origin, we need a special kind of matrix called a __Translation Matrix__.

{.text-center} `§[[1 0 dx] [0 1 dy] [0 0 1]]`

We add an extra row and column to our 2x2 matrix, and we add an extra row to our vector (which will not change).

The factor [dx](target:dx) will be multiplied by [1](target:bottom1) and added to the final [x'](target:xprime) value.
The factor [dy](target:dy) will be multiplied by [1](target:bottom1) and added to the final [y'](target:xprime) value.

{.text-center} `§[[1 0 dx] [0 1 dy] [0 0 1]]` x `§[[x] [y] [1]]` = `§[[(x + dx)] [(y + dy)] [1]]`

{.fixme} Focus effects.

{.todo} Possibly an interactive like ncase?

[Continue](btn:next)


---
> id: three-d

Matrices do not have to represent transformations in 2 dimensions. They can also exist in 3 or higher dimensions.

This is the identity matrix for three dimensions

{.text-center} `§[[1 0 0] [0 1 0] [0 0 1]]` x `§[[x] [y] [z]]` = `§[[x] [y] [z]]`

{.todo} An interaction with a 3d transformation.

[Continue](btn:next)


---
> id: mathigon-matrix

Let's mess around with the Mathigon Logo!

    include mixins
    svg(width=220 height=220)
      +grid220
      g.var.mathigon.red(:html="polygonTransform(m1a, m1b, m1c, m1d, 'red')")
      g.var.mathigon.green(:html="polygonTransform(m2a, m2b, m2c, m2d, 'green')")
      g.var.mathigon.yellow(:html="polygonTransform(m3a, m3b, m3c, m3d, 'yellow')")
      g.var.mathigon.blue(:html="polygonTransform(m4a, m4b, m4c, m4d, 'blue')")


<table>
  <tr>
    <td>
      <table>
        <tr><td>${m1a}{m1a|1|-2.0,2.0,0.1}</td><td>${m1b}{m1b|0.0|-2.0,2.0,0.1}</td></tr>
        <tr><td>${m1c}{m1c|0.0|-2.0,2.0,0.1}</td><td>${m1d}{m1d|1|-2.0,2.0,0.1}</td></tr>
      </table>
    </td>
    <td>
      <table class="green">
        <tr><td>${m2a}{m2a|1|-2.0,2.0,0.1}</td><td>${m2b}{m2b|0.0|-2.0,2.0,0.1}</td></tr>
        <tr><td>${m2c}{m2c|0.0|-2.0,2.0,0.1}</td><td>${m2d}{m2d|1|-2.0,2.0,0.1}</td></tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <table class="yellow">
        <tr><td>${m3a}{m3a|1|-2.0,2.0,0.1}</td><td>${m3b}{m3b|0.0|-2.0,2.0,0.1}</td></tr>
        <tr><td>${m3c}{m3c|0.0|-2.0,2.0,0.1}</td><td>${m3d}{m3d|1|-2.0,2.0,0.1}</td></tr>
      </table>
    </td>
    <td>
      <table class="blue">
        <tr><td>${m4a}{m4a|1|-2.0,2.0,0.1}</td><td>${m4b}{m4b|0.0|-2.0,2.0,0.1}</td></tr>
        <tr><td>${m4c}{m4c|0.0|-2.0,2.0,0.1}</td><td>${m4d}{m4d|1|-2.0,2.0,0.1}</td></tr>
      </table>
    </td>
  </tr>
</table>

{.todo} Possible Activities: switch Orange and Green, reflect/scale the whole thing, make shapes.


----------------------------------------------------------------------------------------------------


## Matrix Arithmetic

> id: multiplication
> section: arithmetic
> sectionStatus: dev

### Matrix Multiplication

We learned in the last chapter that matrices can represent linear transformations. However, there are many other things that matrices can represent! Also, matrices do not always have to be [square matrices](gloss:square-matrix), but can have many different dimensional values. Let's explore this with a hypothetical scenario.

Four friends are in a new city and they're looking for a restaurant to eat at together. What are some features they might look for in a restaurant?

- Outdoor seating
- Vegetarian food
- Low price
- Spicy food
- Kid's menu
- Good wine selection

Each friend has preferences for how important these things are, which we can quantify with a value 0 (not important) to 4 (very important). If we create a table with friends on the left-most column and restaurant features across the top row, we can fill in the cells of the table with each friend's preference for that feature.

    figure: img(src="images/proto-2/matrix-1-frn-fea.png")

What we have built here is a 4 by 2 matrix. We have four rows to represent the four [[friends|features|restaurants]], and two columns to represent the two [[features|friends|restaurants]].

---

The friends have found three restaurants within walking distance, and they have pulled up the websites for each. Lucky for them, each restaurants' website has listed the quality of the features that the friends have quantified: availability of outdoor seating, and vegetarian options.

    figure: img(src="images/proto-2/matrix-1-fea-res.png")

This is a 2 by 3 matrix. There are two rows to represent the two [[features|restaurants]] and three rows, one to represent each [[restaurant|feature]].

---

{.fixme} Begin side-by-side column display.

What we would like to do is somehow synthesize these two tables of information so we can get a sense of how much each person might like each restaurant. We can use a procedure called [matrix multiplication](gloss:matrix-multiplication) to do this. The result will be a *new* table with the friends as [[rows]] and the restaurants as [[columns]].

    figure: img(src="images/proto-2/matrix-1-frn-res-empty.png")

How should we fill out this table? The value of each cell should represent how much each person might like each restaurant.

For example, the first cell will represent how much Alice might like [[Gauss Grill|Laplace Lounge]].

    figure: img(src="images/proto-2/mult-alice-gauss.png")

Alice has a preference of 1 for Outdoor Seating, and Gauss Grill has a value of 3 for Outdoor Seating, and we multiply these to get [[3]].

Alice has a preference of 4 for Vegetarian food, but Gauss Grill only has a value of 1 for Vegetarian food, and we mutiply these to get [[4]].

We sum together all the products to get [[7]], which we can write in the first cell.

    figure: img(src="images/proto-2/mult-bob-laplace.png")

How much might Bob like Laplace Lounge?
[[3]]*[[1]] + [[0]]*[[4]] = [[3]].

When we finish our process, we get a matrix of 4 rows and 3 columns. This makes sense! We had 4 people and 3 restaurants, so we will end up with a row for each person and a column for each restaurant.

    figure: img(src="images/proto-2/matrix-1-frn-res-full.png")

We can then sum the values in each column to figure out which restaurant is most popular (this is left as an exercise for the reader).

{.fixme} End side-by-side column display.

What we have just done is [matrix multiplication](gloss:matrix-multiplication).

{.fixme} Align these.

    figure: img(src="images/proto-2/matrix-1-frn-fea.png" width=100)
    div x
    figure: img(src="images/proto-2/matrix-1-fea-res.png" width=200)
    div =
    figure: img(src="images/proto-2/matrix-1-frn-res-full.png" width=200)

---
> id: formal-definition

#### Formal definition of Matrix Multiplication

The formal defintion for matrix multiplication is as follows:

{.text-center} Given matrix `A` with dimensions `[r_"A", c_"A"]`
and matrix `B` with dimensions `[r_"B", c_"B"]`

{.text-center} The value of the cell `x_"ij"` in `A × B` is:

{.text-center} `a_"i1"b_"1j"` + ... `a_"iN"b_"Nj"`

{.text-center} where `N = c_"A" = r_"B"`.


Notice that, for this algorithm to work, the number of [[columns]] in the first matrix has to be equal to the number of [[rows]] in the second matrix.

For example, if in our restaurant example, each friend had a preference level for spicy food, our preference matrix would be `4x3`.

    figure: img(src="images/proto-2/matrix-1-extra.png" width=200)

We are now attempting to multiply a `4x3` matrix by a `2x3` matrix, but we don't have any information about which restaurants have spicy food! So we __cannot__ multiply the two matrices.

    figure: img(src="images/proto-2/matrix-1-extra-mult.png" width=200)

{.fixme} Could end section with a simple checkmark multiple choice, for which multiplications are possible.

---
> id: matrix-factorisation

#### Matrix Factorisation

This type of matrix is used in all sorts of online recommender systems. Movies can be categorized by their genres like Comedy, Action, Romance, or Horror. Songs can be categorized into genres with ever-increasing specificity like Rock, Classical, Pop, Rap, Electro-Funk, Indie Folk, or Norwegian Black Metal. When you watch a movie on Netflix, or listen to a song on Spotify, there's likely a very large matrix somewhere, remembering your taste!

However, this process is slightly different from what we did above. The company running the streaming service *doesn't know* what its users' tastes are. It does know what movies they have watched, and whether they liked them or not. From this information they attempt to figure out each user's possible genre preferences using a process called __matrix factorisation__. Much like in [integer factorisation](gloss:factorisation), where an integer can be written as a product of prime numbers, matrix factorisation is about working backwards from an incomplete product matrix to find possible preference matrices. This algorithm is much more complex than integer factorisation, so we need complex machine leaerning algorithms to perform it.

    figure: img(src="images/proto-2/factorisation.png")

[Continue](btn:next)

---
> id: multiply-transformations

### Multiplying Linear Transformations

We have now learned two different ways to think about matrix multiplication. In the first chapter we learned that multiplying a 2x2 matrix by a 2x1 vector, can be thought of as a linear transformation. And we just learned to the detailed rules for how to multiply matrices of any size, like a preference matrix. Let's go back to thinking about matrices as linear transformations.

Recall the 2x2 matrix representing the rotation of 90º about the origin. Let's call it `R_"90"`.

    include mixins
    img(src="images/proto-2/rotate-90-m.png" width=100)
    +ij([0,1], [-1,0], "Rotate 90º")

What if we multiply this matrix by the 2x2 matrix for rotation of 180º, `R_"180"`?

    include mixins
    img(src="images/proto-2/rotate-180-m.png")
    +ij([-1,0], [0,-1], "Rotate 180º")

The resulting matrix is this:

    include mixins
    img(src="images/proto-2/rotate-270-m.png")
    +ij([0,-1], [1,0], "Rotate 270º")

This matrix is the linear transformation for a [[rotation of 270º|identity matrix|rotation of 90º]].

---

That's right,

`R_"90"` x `R_"180"` = `R_"270"`

In this case, multiplying two rotation matrices give us a *new* rotation matrix with an angle equal to the sum of the first two angles. A more general way to say this is that when we multiplied two transformation matrices, the resulting transformation matrix has the effect applying BOTH of the original two matrices in succession.

This works for all rotation values:

- `R_"90"` x `R_"90"` = `R_"80"`
- `R_"180"` x `R_"180"` = `R_"360"` = `I`

[Continue](btn:next)

---
> id: transforms-calculator
> goals: calculate

What about other types of transformations?

{.fixme} Perhaps let them draw points (like a spaceship), and then the points are transformed by each transformation?
{.fixme} Should be displayed horizontally, with their matrices across the bottom.

    include mixins
    .calculator
      .display
        .mat
          x-geopad(width=150 x-axis="-3,3,1" y-axis="-3,3,1" grid padding=5): svg
        .mat.operator x
        .mat
          x-geopad(width=150 x-axis="-3,3,1" y-axis="-3,3,1" grid padding=5): svg
        .mat.operator =
        .mat
          x-geopad(width=150 x-axis="-3,3,1" y-axis="-3,3,1" grid padding=5): svg
        .button.clear CLEAR
        .button.calc CALCULATE
      .cubes
        +ij([1,0], [0,1], "Identity")
        +ij([0,1], [-1,0], "Rotate 90º")
        +ij([-1,0], [0,-1], "Rotate 180º")
        +ij([0,-1], [1,0], "Rotate 270º")

        +ij([-1,0], [0,1], "Reflect x=0")
        +ij([0,1], [1,0], "Reflect y=x")
        +ij([1,0], [0,-1], "Reflect y=0")
        +ij([0,-1], [-1,0], "Reflect y=-x")

        +ij([1,1], [0,1], "Shear x 1")
        +ij([1,-1], [0,1], "Shear x -1")
        +ij([1,0], [1,1], "Shear y 1")
        +ij([1,0], [-1,1], "Shear y -1")

        +ij([2,0], [0,2], "Scale by 2")
        +ij([0.5,0], [0, 0.5], "Scale by 1/2")
        +ij([2,0], [0,1], "Scale x by 2")
        +ij([1,0], [0,1/2], "Scale y by 1/2")

---
> id: matrix-addition

### Matrix Addition

Matrices can also be added. Matrix addition does not happen very often, but it is very simple to learn.

We write matrix arithmetic just as you might expect:

`A + B`

* Two matrices can be added only if they have the same dimensions.
* The resulting matrix will be the same dimension as the matrices added.
* Each value in location (i,j) of the resulting matrix will be the sum of the values at (i,j) in the other two matrices.

Add these two matrices!

<div class="addition">
  <table class="add">
    <tr>
      <td target="a">[1](target:a)</td>
      <td target="b">[2](target:b)</td>
    </tr>
    <tr>
      <td target="c">[3](target:c)</td>
      <td target="d">[4](target:d)</td>
    </tr>
  </table>

  <div class="add">+</div>

  <table class="add">
    <tr>
      <td target="a">[9](target:a)</td>
      <td target="b">[8](target:b)</td>
    </tr>
    <tr>
      <td target="c">[7](target:c)</td>
      <td target="d">[6](target:d)</td>
    </tr>
  </table>

  <div class="add">=</div>

  <table class="add">
    <tr>
      <td target="a">
        <strong class="pill step-target" tabindex="0" data-to="a">[[10]]</strong>
      </td>
      <td target="b">
        <strong class="pill step-target" tabindex="0" data-to="b">[[10]]</strong>
      </td>
    </tr>
    <tr>
      <td target="c">
        <strong class="pill step-target" tabindex="0" data-to="c">[[10]]</strong>
      </td>
      <td target="d">
        <strong class="pill step-target" tabindex="0" data-to="d">[[10]]</strong>
      </td>
    </tr>
  </table>
</div>

Great.

This code could be a lot simpler! And why is this not going below the tables?

---
> id: scalar-multiplication

### Scalar Multiplication

Another operation we can perform with a matrix is __scalar multiplication__. A __scalar__ is what we call a real number in matrix and vector arithmetic.

We write scalar multiplication as

`sA`

Scalar multiplication is as simple as multiplying every cell in a matrix `A` times a scalar `s`.

<div class="scalar">
  <div class="scm s">2</div>

  <table class="scm">
    <tr>
      <td target="a">[3](target:a)</td>
      <td target="b">[1](target:b)</td>
    </tr>
    <tr>
      <td target="c">[-4](target:c)</td>
      <td target="d">[0](target:d)</td>
    </tr>
  </table>

  <div class="scm">=</div>

  <table class="scm">
    <tr>
      <td target="a">
        <strong class="pill step-target" tabindex="0" data-to="a">[[6]]</strong>
      </td>
      <td target="b">
        <strong class="pill step-target" tabindex="0" data-to="b">[[2]]</strong>
      </td>
    </tr>
    <tr>
      <td target="c">
        <strong class="pill step-target" tabindex="0" data-to="c">[[-8]]</strong>
      </td>
      <td target="d">
        <strong class="pill step-target" tabindex="0" data-to="d">[[0]]</strong>
      </td>
    </tr>
  </table>
</div>

Note that while it is possible to add two matrices, and to multiply a matrix by a scalar, the operation of adding a scalar to a matrix is __not defined__.

---
> id: arith-properties

### Properties of Matrix Arithmetic

Recall operators like addition and multiplication, and how it's useful to think about their properties. Commutative, distributive, and associative properties.

::: tab
#### Associative

Is matrix multiplication [associative](gloss:associative)?. If it is, then the equation below will be true.

`Ax(BxC) = (AxB)xC`

A good first question to ask is: will the dimensions of the matrices allow this?

If `Ax(BxC)` is possible, then

`columns_"B" = rows_"C"`

`BxC` will have `rows_"B"` number of rows, and will be equal to `columns_"A"`. This means that when attempting `(AxB)xC`, we know we can perform `AxB`. `AxB` will then have `columns_"B"` columns, so we can multiply it by C.

We know we can perform this multiplication based on the dimensions, but will we get the same result? Recall from our section on multiplication that it can be thought of as successive linear transformations.

It turns out that as long as we keep the ordering of the matrices, we will get the same result. Whether we do BxC first or AxB first, it does not matter.

Matrix multiplication __is associative__.

::: tab
#### Commutative

Is matrix multiplication [commutative](gloss:commutative)?. If it is, then the equation below will be true.

`AxB = BxA`

Recall that when we multiply two matrices, the number of columns of the first must match the number of rows of the second. This means that if we can multiply `AxB`, `columns_"A" = rows_"B"`, but it is not necessarily true that `rows_"A" = columns_"B"`. Therefore, it does not follow that we can multiply `BxA`, and matrix multiplication __is not commutative__.

What if both matrices are square matrices? We can then perform both `AxB` and `BxA`, however we do not know if they will be equal.

If we think of the matrices as transformations, we can imagine scenarios wherein applying two different transformations will be different depending on which direction you multiply them.

If we perform a 90º Rotation, and then a reflection across the x-axis, the final transformation will look like this:

    include mixins
    .cubes
      +ij([0,1], [-1,0], "Rotate 90º")
      .cube.op x
      +ij([-1,0], [0,1], "Reflect x=0")
      .cube.op =
      +ij([0,1], [1,0], "Reflect y=x")

However, if we reverse the order of the transformations, the final transformation will look like this.

    include mixins
    .cubes
      +ij([-1,0], [0,1], "Reflect x=0")
      .cube.op x
      +ij([0,1], [-1,0], "Rotate 90º")
      .cube.op =
      +ij([0,-1], [1,0], "Reflect y=-x")

There are many more examples of how matrix multiplication does not meet the commutative property, and we encourage you to experiment!


::: tab
#### Distributive

Is matrix multiplication [distributive](gloss:distributive) over matrix addition?. If it is, then the equation below will be true.

`Ax(B+C) = AxB + AxC`

{.todo} Could demonstrate this by adding basis vectors and applying transformations to them. Or could somehow leave it as an exercise for the reader.

:::


----------------------------------------------------------------------------------------------------


## Determinants

> section: determinants
> sectionStatus: dev
> id: determinants

Watch the area change.

    - var GRID = 4
    x-geopad(width=400 x-axis=`-${GRID},${GRID},1` y-axis=`-${GRID},${GRID},1` grid padding=5): svg
      circle.green.move(name="ipoint" x="point(1,0)" target="i")
      circle.blue.move(name="jpoint" x="point(0,1)" target="j")
      circle(name="origin", x="point(0,0)")


        // right values for these? Ideally we'd show to "infinity", but this might render slowly?
      - var MINMAX = GRID*2
      - for (var b=-MINMAX; b <=MINMAX; ++b)
        // .fabric as in "fabric of reality"
        // can also try class ".grid" for default grid
        path.fabric(x=`line(point(${b}*jpoint.x, ${b}*jpoint.y), point(ipoint.x + ${b}*jpoint.x, ipoint.y + ${b}*jpoint.y))`)
        path.fabric(x=`line(point(${b}*ipoint.x, ${b}*ipoint.y), point(${b}*ipoint.x + jpoint.x, ${b}*ipoint.y + jpoint.y))`)

      - var DETERMINANT = [[0,0], [1,0], [1,1], [0,1]]
      - var determinant = DETERMINANT.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
      path.fill.light.purple(x=`polygon(${determinant})` label-class="purple")

      path.green(x="segment(point(0,0),ipoint)", label="i", target="i")
      path.blue(x="segment(point(0,0),jpoint)", label="j", target="j")

Inside the matrix we have i = (${ipoint.x}, ${ipoint.y}) and j = (${jpoint.x}, ${jpoint.y})

The deterimant is ${determinant}

Choose one of these buttons.

    .button IDENTITY
    .button SHEAR
    .button SCALE
    .button ROTATE
    .button LINE

---
> id: examples

{.todo} Demonstrate how basic transformations effect the determinant
{.todo} Demonstrate possible values: less than 1, greater than 1, negative, zero

---
> id: zero-det

{.todo} Matrices can have a determinant of zero. What does this mean?

---
> id: det-formula

The formula for the determinant of a 2x2 matrix is:

```ad - bc```

matrix:

[a](target:a), [b](target:b)

[c](target:c), [d](target:d)

The area [determinant](target:determinant) is equal to the area [ad](target:ad) minus the area [bc](target:bc).

Let's see why this is true geometrically.

    - var GRID = 1.5
    x-geopad(width=400 x-axis=`-${GRID},${GRID},1` y-axis=`-${GRID},${GRID},1` grid padding=5): svg
      circle.green.move(name="ipoint" x="point(1,0)" target="i")
      circle.blue.move(name="jpoint" x="point(0,1)" target="j")
      circle(name="origin", x="point(0,0)")

      - var MINMAX = GRID*2
      - for (var b=-MINMAX; b <=MINMAX; ++b)
        // .fabric as in "fabric of reality"
        // can also try class ".grid" for default grid
        path.fabric(x=`line(point(${b}*jpoint.x, ${b}*jpoint.y), point(ipoint.x + ${b}*jpoint.x, ipoint.y + ${b}*jpoint.y))`)
        path.fabric(x=`line(point(${b}*ipoint.x, ${b}*ipoint.y), point(${b}*ipoint.x + jpoint.x, ${b}*ipoint.y + jpoint.y))`)

      - var DETERMINANT = [[0,0], [1,0], [1,1], [0,1]]
      - var determinant = DETERMINANT.map(p => `point(${p[0]}*ipoint.x+${p[1]}*jpoint.x,${p[0]}*ipoint.y+${p[1]}*jpoint.y)`).join(',')
      path.fill.light.purple(x=`polygon(${determinant})` label-class="purple", target="determinant")

      path.green(x="segment(point(0,0),ipoint)", label="i", target="i")
      path.blue(x="segment(point(0,0),jpoint)", label="j", target="j")

      path.red(x="segment(point(0,0), point(ipoint.x,0))", label="a", target="a")
      path.red(x="segment(point(0,0), point(0,jpoint.y))", label="d", target="d")

      path.red(x="segment(point(0,0), point(0,ipoint.y))", label="c", target="c")
      path.red(x="segment(point(0,0), point(jpoint.x,0))", label="b", target="b")

      path.fill.light.teal(x="polygon(point(0,0),point(ipoint.x,0),point(ipoint.x,jpoint.y),point(0,jpoint.y))" target="ad")

      path.fill.light.lime(x="polygon(point(0,0),point(jpoint.x,0),point(jpoint.x,ipoint.y),point(0,ipoint.y))" target="bc")


{.fixme} The shapes are blocking each other when targeted.

{.fixme} Could do an animation that shows how the triangles fit together, like in Pythagoras.

---
> id: nonsquare

{.todo} Determinants only exist for square matrices.


----------------------------------------------------------------------------------------------------


## Matrix Inverses

> section: inverses
> sectionStatus: dev

{.todo} COMING SOON


----------------------------------------------------------------------------------------------------


## Cramer’s Rule and Gaussian Elimination

> section: systems
> sectionStatus: dev

{.todo} COMING SOON


----------------------------------------------------------------------------------------------------


## Eigenvalues and Eigenvectors

> section: eigenvalues
> sectionStatus: dev

{.todo} COMING SOON
