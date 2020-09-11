## Matrices as Transformations

> section: transformations
> sectionStatus: dev
> id: test

{.todo} IN PROGRESS

We want to draw a spaceship.
We can represent our spaceship as a collection of points.

When we rotate each point A, B, C, etc, we will give the new point the name A’ (A prime), B’, C’

Here is a spaceship we can rotate by ${phi + 'º'}{phi|60|10,350,10} around the origin.

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="a" x="point(0,3)" label="A" target="a")
      circle.green(name="b" x="point(3,0)" label="B")
      circle.green(name="c" x="point(3,-3)" label="C")
      circle.green(name="d" x="point(0,-1)" label="D")
      circle.green(name="e" x="point(-3,-3)" label="E")
      circle.green(name="f" x="point(-3,0)" label="F")

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

---

> id: unit-j

{.fixme} REVISE: put unit-i and unit-j side by side, so there's not so much emphasis on them.

Now let's look at one point at a time how this might work.
Let's rotate this point [A](target:a) at (0,3) ${t1 + 'º'}{t1|60|10,350,10} around the origin. Our rotated point is called [A'](target:ap).

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="a" x="point(0,3)" label="A" target="a")

      circle.blue(name="ap" x="a.rotate(t1/180*pi)" label="A'" target="ap")

      path.green(x="segment(point(0,0),a)")

      path.blue(x="segment(point(0,0),ap)")
      path.red(x="segment(point(0,ap.y), point(ap.x, ap.y))" target="xp" label="x'")
      path.yellow(x="segment(point(0,0), point(0, ap.y))" target="yp" label="y'")


:::

What is a formula to get the new coordinates for A’? We can call our new x value [x'](target:xp), and our new y value [y'](target:yp). Both x' and y' will be dependent on the length of __A__, which is 3.


x' = 3 * [[-sinθ|sinθ|cosθ]]

y' = 3 * [[cosθ|sinθ]]



---

> id: unit-i

Let's look at another point.
Rotate the point [B](target:b) (3,0) ${t1 + 'º'}{t1|60|10,90,10} around the origin.

::: column(width=400)

    x-geopad(width=400 x-axis="-5,5,1" y-axis="-5,5,1" axes grid padding=5): svg
      circle.green(name="a" x="point(3,0)" label="B" target="b")

      circle.blue(name="ap" x="a.rotate(t1/180*pi)" label="B'" target="bp")

      path.green(x="segment(point(0,0),a)")

      path.blue(x="segment(point(0,0),ap)")
      path.red(x="segment(point(0,0), point(ap.x, 0))" label="x'" target="xp")
      path.yellow(x="segment(point(ap.x, 0), point(ap.x, ap.y))" label="y'" target="yp")


:::

What is a formula to get the new coordinates for [B’](target:bp)? We can call our new x value [x'](target:xp), and our new y value [y'](target:yp). Both x' and y' will be dependent on the length of __B__, which is 3.


x' = 3 * [[cosθ|sinθ]]

y' = 3 * [[sinθ|cosθ]]

---

Now that we have computed the formula for two points, can we say anthing about the general formula for rotation?

Remember from our last course that any vector can be treated as a sum of the two unit vectors <uv>__i__</uv> and <uv>__j__</uv>.

Our points __A__ and __B__ were the unit vectors <uv>__j__</uv> and <uv>__i__</uv>, each multiplied by 3.

Instead of using trigonometry to find rotated point of (1, -1) or (0, -0.5), we can re-write these as... i - j.
It turns out that we can apply blah blah blah... linear transformation.

for x...

x' = xi + xj
x' = x * cosTH - y * sinTH

for y...

y' = yi + yj
y' = x * sinTH + y * cosTH

put it together and...

x'       x * cosTH - y * sinTH
     = 
y'       x * sinTH + y * cosTH

Notice that there are like terms in here: both are dependent on X and Y.

Mathematicians came up with a concept called the "matrix", to do this easier, and you'll see this is a very powerful construct.

A matrix is like a spreadsheet.

This is a 2x2 matrix, but they can be any size.

***Here's some formatting for how a matrix times a vector works.***

> id: play-with-me

Linear transformation means each grid line will remain "parallel and evenly spaced". Now play with it.

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

Choose one of these buttons.

    .button IDENTITY
    .button SHEAR
    .button SCALE
    .button ROTATE
    .button LINE

Press the buttons to...

---

## Matrix Arithmetic

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

    figure: img(src="images/matrix-1-frn-fea.png")

What we have built here is a 4 by 2 matrix. We have four rows to represent the four [[friends|features|restaurants]], and two columns to represent the two [[features|friends|restaurants]].

The friends have found three restaurants within walking distance, and they have pulled up the websites for each. Lucky for them, each restaurants' website has listed the quality of the features that the friends have quantified: availability of outdoor seating, and vegetarian options.

    figure: img(src="images/matrix-1-fea-res.png")

This is a 2 by 3 matrix. There are two rows to represent the two [[features|restaurants]] and three rows, one to represent each [[restaurant|feature]].

{.fixme} Begin side-by-side column display.

What we would like to do is somehow synthesize these two tables of information so we can get a sense of how much each person might like each restaurant. We can use a procedure called [matrix multiplication](gloss:matrix-multiplication) to do this. The result will be a *new* table with the friends as [[rows]] and the restaurants as [[columns]].

    figure: img(src="images/matrix-1-frn-res-empty.png")

How should we fill out this table? The value of each cell should represent how much each person might like each restaurant.

For example, the first cell will represent how much Alice might like [[Gauss Grill|Laplace Lounge]].

    figure: img(src="images/mult-alice-gauss.png")

Alice has a preference of 1 for Outdoor Seating, and Gauss Grill has a value of 3 for Outdoor Seating, and we multiply these to get [[3]].

Alice has a preference of 4 for Vegetarian food, but Gauss Grill only has a value of 1 for Vegetarian food, and we mutiply these to get [[4]].

We sum together all the products to get [[7]], which we can write in the first cell.

    figure: img(src="images/mult-bob-laplace.png")

How much might Bob like Laplace Lounge?
[[3]]*[[1]] + [[0]]*[[4]] = [[3]].

When we finish our process, we get a matrix of 4 rows and 3 columns. This makes sense! We had 4 people and 3 restaurants, so we will end up with a row for each person and a column for each restaurant.

    figure: img(src="images/matrix-1-frn-res-full.png")

We can then sum the values in each column to figure out which restaurant is most popular (this is left as an exercise for the reader).

{.fixme} End side-by-side column display.

What we have just done is [matrix multiplication](gloss:matrix-multiplication).

{.fixme} Align these.

    figure: img(src="images/matrix-1-frn-fea.png" width=100)
    div x
    figure: img(src="images/matrix-1-fea-res.png" width=200)
    div =
    figure: img(src="images/matrix-1-frn-res-full.png" width=200)

#### Formal definition of Matrix Multiplication

The formal defintion for matrix multiplication is as follows:

{.text-center} Given matrix `A` with dimensions `[r_"A", c_"A"]`
and matrix `B` with dimensions `[r_"B", c_"B"]`

{.text-center} The value of the cell `x_"ij"` in `A × B` is:

{.text-center} `a_"i1"b_"1j"` + ... `a_"iN"b_"Nj"`

{.text-center} where `N = c_"A" = r_"B"`.


Notice that, for this algorithm to work, the number of [[columns]] in the first matrix has to be equal to the number of [[rows]] in the second matrix.

For example, if in our restaurant example, each friend had a preference level for spicy food, our preference matrix would be `4x3`.

    figure: img(src="images/matrix-1-extra.png" width=200)

We are now attempting to multiply a `4x3` matrix by a `2x3` matrix, but we don't have any information about which restaurants have spicy food! So we __cannot__ multiply the two matrices.

    figure: img(src="images/matrix-1-extra-mult.png" width=200)

{.fixme} Could end section with a simple checkmark multiple choice, for which multiplications are possible.


#### Matrix Factorisation
This type of matrix is used in all sorts of online recommender systems. Movies can be categorized by their genres like Comedy, Action, Romance, or Horror. Songs can be categorized into genres with ever-increasing specificity like Rock, Classical, Pop, Rap, Electro-Funk, Indie Folk, or Norwegian Black Metal. When you watch a movie on Netflix, or listen to a song on Spotify, there's likely a very large matrix somewhere, remembering your taste!

However, this process is slightly different from what we did above. The company running the streaming service *doesn't know* what its users' tastes are. It does know what movies they have watched, and whether they liked them or not. From this information they attempt to figure out each user's possible genre preferences using a process called __matrix factorisation__. Much like in [integer factorisation](gloss:factorisation), where an integer can be written as a product of prime numbers, matrix factorisation is about working backwards from an incomplete product matrix to find possible preference matrices. This algorithm is much more complex than integer factorisation, so we need complex machine leaerning algorithms to perform it.

    figure: img(src="images/factorisation.png")

[Continue](btn:next)

---

### Multiplying Linear Transformations

> section: multiply
> id: multiply

    mixin ij(i, j, label)
      .cube
        - var iSeg = "segment(point(0,0),point(" +i[0] + "," + i[1] + "))"
        - var jSeg = "segment(point(0,0),point(" +j[0] + "," + j[1] + "))"
        x-geopad(width=100 x-axis="-2,2,1" y-axis="-2,2,1" grid padding=5): svg
          path.red(x=iSeg label="i")
          path.green(x=jSeg label="j")
        .caption= label

We have now learned two different ways to think about matrix multiplication. In the first chapter we learned that multiplying a 2x2 matrix by a 2x1 vector, can be thought of as a linear transformation. And we just learned to the detailed rules for how to multiply matrices of any size, like a preference matrix. Let's go back to thinking about matrices as linear transformations.

Recall the 2x2 matrix representing the rotation of 90º about the origin. Let's call it `R_"90"`.

    img(src="images/rotate-90-m.png" width=100)
    +ij([0,1], [-1,0], "Rotate 90º")

What if we multiply this matrix by the 2x2 matrix for rotation of 180º, `R_"180"`?

    img(src="images/rotate-180-m.png")
    +ij([-1,0], [0,-1], "Rotate 180º")

The resulting matrix is this:

    img(src="images/rotate-270-m.png")
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

What about other types of transformations?

{.fixme} This would be great as a calculator type thing.

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


> section: calculator
> id: calculator

Now we can actually start doing some arithmetic with these transformations. For example, we can _multiply_ two transformations to get new ones:

::: column(width=260)

    .text-center
      +ij([0,1], [-1,0], "Rotate 90º")
      mo x
      +ij([-1,0], [0,-1], "Rotate 180º")
      mo =
      span.sym-sum.pending(tabindex=0): +ij([0,-1], [1,0], "Rotate 270º")
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      +ij([-1,0], [0,1], "Reflect x=0")
      mo x
      +ij([-1,0], [0,1], "Reflect x=0")
      mo =
      span.sym-sum.pending(tabindex=0): +ij([1,0], [0,1], "Identity")

:::



### Matrix Addition
> section: arithmetic
> sectionStatus: dev

* Two matrices can be added only if they have the same dimensions.
* The resulting matrix will be the same dimension as the matrices added.
* Each value in location (x,y) of the resulting matrix will be the sum of the values at (x,y) in the other two matrices.

{.todo} COMING SOON

---

## Determinants

> section: determinants
> sectionStatus: dev
> id: intro

{.todo} COMING SOON

The determinant is the change in area.
{.fixme} How can I draw the area??? I need a polygon
Scale changes it by a factor of N.
Shear doesn't change it.


    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")

      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")

      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")


^^^^^ Scrap this for parts ^^^^^^ See we can turn a "rotate" into a more general "applyMatrix" or "transform"

---

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

## Matrix Inverses

> section: inverses
> sectionStatus: dev

{.todo} COMING SOON

---

## Cramer’s Rule and Gaussian Elimination

> section: systems
> sectionStatus: dev

{.todo} COMING SOON

---

## Eigenvalues and Eigenvectors

> section: eigenvalues
> sectionStatus: dev

{.todo} COMING SOON

---

## Translations

> id: translations
> section: translations

Now it's your turn - translate this:

    svg(width=220 height=220)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=220 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill:#289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Adjust this matrix to perform a transformation.

And mimic the layout of Nicky Case's matrix.

Oh and this thing ${a} is a slider for ${a}{a|0|-2.0,2.0,0.1}

---

> id: rotations

Now let's rotate this:

    svg(width=220 height=220)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Adjust this matrix to make it rotate.

Adjust the angle ${angle} with this slider for ${angle}{angle|0|-359,360,5}

---

## Matrix Rotate
> section: matrix-rotate
> id: rotate

#### Rotate
Let's see how rotation works.

    svg(width=220 height=220)
      g.grid
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          - var width = i == 110 ? 4 : 2
          - stroke = i == 110 ? "#e6e6e6" : "#e6e6e6"
          line(x1=i x2=i y1=0 y2=210 stroke=stroke stroke-width=width)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          - var width = i == 110 ? 4 : 2
          - stroke = i == 110 ? "#e6e6e6" : "#e6e6e6"
          line(x1=0 x2=220 y1=i y2=i stroke=stroke stroke-width=width)
      g.var.rotate(:html="polygonRotate(angle)")

Rotate: adjust this ${angle}{angle|0|-340,340,20} degrees

<table>
<tr><td>cos(${angle})</td><td>-sin(${angle})</td></tr>
<tr><td>sin(${angle})</td><td>cos(${angle})</td></tr>
</table>

Now add the final result?

---

## Matrix Scale
> section: matrix-scale
> id: scale

#### Scale
Let's try a scale operation.

    svg(width=220 height=220)
      g.grid
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          - var width = i == 110 ? 4 : 2
          - stroke = i == 110 ? "#e6e6e6" : "#e6e6e6"
          line(x1=i x2=i y1=0 y2=210 stroke=stroke stroke-width=width)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          - var width = i == 110 ? 4 : 2
          - stroke = i == 110 ? "#e6e6e6" : "#e6e6e6"
          line(x1=0 x2=220 y1=i y2=i stroke=stroke stroke-width=width)
      g.var.scale(:html="polygonScale(xscale, yscale)")


Adjust the matrix to see how it changes in the coordinates.

<table>
<tr><td>${xscale}{xscale|1.0|-2.0,2.0,0.1}</td><td>0</td></tr>
<tr><td>0</td><td>${yscale}{yscale|1.0|-2.0,2.0,0.1}</td></tr>
</table>

Cool. Let's now add some code that lets us snap to x-big, x-shrink, x-reverse, y-big, y-shrink, y-reverse.

---

## Shear
> id: shear

#### Shear
Now let's try a shear


    svg(width=220 height=220)
      g.grid
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          - var width = i == 110 ? 4 : 2
          - stroke = i == 110 ? "#e6e6e6" : "#e6e6e6"
          line(x1=i x2=i y1=0 y2=210 stroke=stroke stroke-width=width)
        each i in [10,30,50,70,90,110,130,150,170,190,210]
          - var width = i == 110 ? 4 : 2
          - stroke = i == 110 ? "#e6e6e6" : "#e6e6e6"
          line(x1=0 x2=220 y1=i y2=i stroke=stroke stroke-width=width)
      g.var.shear(:html="polygonShear(xshear, yshear)")


Adjust the matrix to see how it changes in the coordinates.

<table>
<tr><td>1</td><td>${xshear}{xshear|0.0|-2.0,2.0,0.1}</td></tr>
<tr><td>${yshear}{yshear|0.0|-2.0,2.0,0.1}</td><td>1</td></tr>
</table>

Now add some buttons and code that make it snap to a set of matrix values.


---

## 3D playground
> id: three-dimensions

#### Watch what we can do with a 3d matrix
Watch what we can do with a 3d matrix.

::: column(width=280)

    x-solid(size=280)

:::

Try adjusting the vector.
<table class="vector">
<tr>x = ${x}{x|-2|-2,2,0.1}</tr>
<tr>y = ${y}{y|-2|-2,2,0.1}</tr>
<tr>z = ${z}{z|-2|-2,2,0.1}</tr>
</table>

Neat, huh?

### Systems of Equations
A linear equation can be represented as a geometrical object, depending on how many variables it has. A linear equation with two variables can be represented as a [[line|plane|hypercube]]. A linear equation with three variables can be represented as a [[plane|line|point]].


    x-solid(size=300)


Try adjusting the vector (only Z does anything).
<table class="vector">
<tr>x = ${xi}{xi|1|-2,2,0.1}</tr>
<tr>y = ${yi}{yi|1|-2,2,0.1}</tr>
<tr>z = ${zi}{zi|1|-2,2,0.1}</tr>
</table>

Above us is a system of three equations, each with three variables. The intersection of two of these planes gives us a [[line|plane|point]]. The intersection of all three of these planes gives us a [[point|line|plane]].


---

## Scroller playground
> id: scroller

Let's put a matrix on the right, and text on the left.

::: column(width=300)

    table
      tr
        td
        td(target="feature pref-A-1"): b {.m-red}Outdoors
        td(target="feature pref-A-2"): b {.m-red}Veggie
      tr
        td.name(target="pref-A-1 pref-A-2"): b {.m-green}Alice
        td.cell(target="pref-A-1") 1
        td.cell(target="pref-A-2") 4
      tr
        td.name: b {.m-green}Bob
        td.cell 3
        td.cell 0
      tr
        td.name: b {.m-green}Charlie
        td.cell 0
        td.cell 4
      tr
        td.name: b {.m-green}Dave
        td.cell 3
        td.cell 0

    div x

    table
      tr
        td
        td(target="feat-A-1 feat-A-2"): b {.m-blue}Gauss
        td: b {.m-blue}Laplace
        td: b {.m-blue}Pizza
      tr
        td(target="feature feat-A-1"): b {.m-red}Outdoor
        td.cell(target="feat-A-1") 3
        td.cell 1
        td.cell 3
      tr
        td(target="feature feat-A-2"): b {.m-red}Veggie
        td.cell(target="feat-A-2") 1
        td.cell 4
        td.cell 3

    table
      tr
        td
        td(target="rest cell-A"): b {.m-blue}Gauss
        td(target="rest cell-C"): b {.m-blue}Laplace
        td(target="rest"): b {.m-blue}Pizza
      tr
        td.name(target="friend cell-A"): b {.m-green}Alice
        td.cell(target="cell-A"): b {.reveal(when="blank-5")} 7
        td.cell
        td.cell
      tr
        td.name(target="friend"): b {.m-green}Bob
        td.cell
        td.cell
        td.cell
      tr
        td.name(target="friend cell-C"): b {.m-green}Charlie
        td.cell
        td.cell(target="cell-C"): b {.reveal(when="blank-7")} 16
        td.cell
      tr
        td.name(target="friend"): b {.m-green}Dave
        td.cell
        td.cell
        td.cell

::: column.grow(parent="right")

The result will be a new table with the [{.green} friends](pill:friend) as [[rows|columns]] and the [{.blue} restaurants](pill:rest) as [[columns|rows]].

{.reveal(when="blank-0 blank-1")} How should we fill out this table? The value of each cell should represent how much each person might like each restaurant. For example, the [{.orange} first cell](pill:cell-A) will represent how much Alice might like [[Gauss Grill|Laplace Lounge]].

{.reveal(when="blank-2")} Alice has a [{.orange} preference of 1](pill:pref-A-1) for Outdoor Seating, and Gauss Grill has a [{.orange} value of 3](pill:feat-A-1) for Outdoor Seating, so we multiply these to get [[3]].

{.reveal(when="blank-3")} Alice has a [{.orange} preference of 4](pill:pref-A-2) for Vegetarian Food, and Gauss Grill has a [{.orange}value of 1](pill:feat-A-2) for Vegetarian Food, so we multiply these to get [[4]].

{.reveal(when="blank-4")} We sum together all the products to get [[7]], which we can write in the [{.orange} first cell](pill:cell-A).

{.reveal(when="blank-5")}[Continue](btn:next)

{.reveal(when="next-0")} [{.teal} This cell](pill:cell-C) will represent how much [[Charlie|Bob]] might like [[Laplace Lounge|Pizzathagoras]].
:::
