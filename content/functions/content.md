# Functions

## Notation, Domain and Range

Here is an interactive numberline:

    include ./components/numberline
    x-numberline

---
> sectionId: slope
> id: slope

## Equations of Linear Functions

::: .theorem
__Common Core Standard 8.EE.6__  
Use similar triangles to explain why the slope _m_ is the same between any two
distinct points on a non-vertical line in the coordinate plane; derive the
equation `y=mx` for a line through the origin and the equation `y=mx+b` for a
line intercepting the vertical axis at _b_.
:::

Here you can see a [coordinate system](gloss:coordinate-system), with a straight
line that goes through its origin. Pick a point anywhere on the line.

::: column(width=360 parent="padded-thin")

    x-coordinate-system(width=360 height=440 x-axis="-5|5|1" y-axis="-6|6|1" no-crosshairs margins="5 5 5 5")
    x-gesture(target="#slope x-coordinate-system")

::: column.grow

{.reveal(when="make-point")} Now let's draw the triangle between this point and
the origin of the coordinate system. Try sliding the point along the line:
notice how different points form differently sized triangles, but they are all
[[similar|congruent|equilateral]].

{.lgrey.reveal(when="blank-0")} _The best way to see this is to look at the two
angles along the x-axis. They are the same size for all triangles, so they must
be similar._

{.reveal(when="blank-0")} Now we can use one of the results we know about
similar triangles: the ratio of two of the sides is always constant. Move the
point again, and watch what happens:

    p.text-center
      span.math
        mfrac
          mrow: span.pill.green y
          mrow: span.pill.blue x
        mo =
        mn y/x

{.reveal(when="slide-point")} But the opposite is also true: any point (x, y)
that satisfies this equation must lie somewhere on the line. This means we now
have an equation for the line:

{.text-center} TODO

:::

---

It turns out that _every line_ that goes through the origin of a coordinate
system has an equation of the form `y = mx`, where _m_ is called the __slope__.

If you're given a line, you can find the corresponding value of _m_ by picking
any point that lies on the line and simply dividing its y and x value. Here
are a few examples:

::: column(width=220)


{.text-center} `m = 2/4 =` [[0.5]]

::: column(width=220)


{.text-center} _m_ = [[2]]

::: column(width=220)


{.text-center} _m_ = [[2]]

:::

---

But what about lines that _don't_ go through the origin of the coordinate
system?

{.todo} TODO: y-axis intercept

---
> sectionStatus: dev

## Piecewise Functions

{.todo} TODO

---
> sectionStatus: dev

## Interpreting Functions

{.todo} TODO

---
> sectionStatus: dev

## Numeric Solutions

{.todo} TODO

---
> sectionStatus: dev

## Rate of Change and Area under the Curve

{.todo} TODO
