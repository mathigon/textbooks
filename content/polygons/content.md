# Angles and Polygons

## Angles

> section: angles
> sectionStatus: dev
> color: "#2E6AE1"
> level: Foundations

TODO

---

## Angles in Polygons

> section: angles-in-polygons
> sectionStatus: dev

TODO

---

## Drawing Triangles

> section: triangles
> id: triangle-inequality
> goals: s0 s1 s3 s5

In this section, we will explore how we can draw triangles. For example, if I
give you any three numbers, can you make a triangle that has those side lengths?

Here are a some examples – move the vertices of the triangle until the three
sides match one of the triples on the left.

    .inequality.row
      div(style="width:150px")
        .item #[.t-num 5]#[.t-num 6]#[.t-num 7] #[span.check(when="s0")]
        .item #[.t-num 3]#[.t-num 9]#[.t-num 9] #[span.check(when="s1")]
        .item #[.t-num 2]#[.t-num 4]#[.t-num 8]
        .item #[.t-num 4]#[.t-num 6]#[.t-num 7] #[span.check(when="s3")]
        .item #[.t-num 1]#[.t-num 2]#[.t-num 6]
        .item #[.t-num 3]#[.t-num 5]#[.t-num 7] #[span.check(when="s5")]
      .grow
        x-geopad.label-halo(height=360): svg
          circle.move.pulsate(name="a" cx=175 cy=75)
          circle.move(name="b" cx=150 cy=250)
          circle.move(name="c" cx=350 cy=200)
          path.red(x="segment(a,b)" label="${roundD(a,b)}")
          path.blue(x="segment(b,c)" label="${roundD(b,c)}")
          path.yellow(x="segment(a,c)" label="${roundD(a,c)}")

{.reveal(when="s0 s1 s3 s5")} It seems like there are a few cases where three
numbers simply _cannot_ make a triangle. This particularly happens when one side
[[is much longer than|is much shorter than|is the same length as]] the other two.

---
> id: triangle-inequality-1

::: column.grow
Think about the three sides of a triangle as metal rods, connected with hinges.
Let’s place the [longest rod](target:long) in the middle and the [shorter
ones](target:short) on either side.

{.r} Now it is easy to see that it is impossible to link up the ends of the
shorter rods, if their combined length is less than the length of the larger rod.
[Continue](btn:next)

::: column(width=300)

    x-geopad(width=300 height=180): svg
      circle(name="a" x="point(90,90)")
      circle(name="b" x="point(210,90)")
      circle.move.pulsate(name="c" cx=150 cy=50 project="circle(a,60)")
      circle.move.pulsate(name="d" cx=150 cy=50 project="circle(b,40)")

      path.blue(x="circle(a,60)" style="stroke-dasharray: 8px 10px")
      path.blue(x="circle(b,40)" style="stroke-dasharray: 8px 10px")
      path.thick(x="segment(a,b)" target="long")
      path.thick(x="segment(a,c)" target="short")
      path.thick(x="segment(b,d)" target="short")

:::

---
> id: inequality-picker

Let’s rewrite this observation in mathematical terms:

::: .theorem
__The Triangle Inequality__<br>
The sum of the lengths of any two sides of a triangle must be greater than the
length of the third.
:::

In other words, if a triangle has sides _a_, _b_ and _c_, then we know that
`a+b>c` and `a+c>b` and `b+c>a`.

The triangle inequality allows us to quickly check if three numbers can make a
triangle. Which of these triples of numbers are possible?

    x-picker
      .item.text-center #[.t-num 4]#[.t-num 6]#[.t-num 9]
      .item.text-center(data-error="inequality-error-1") #[.t-num 1]#[.t-num 2]#[.t-num 3]
      .item.text-center #[.t-num 3]#[.t-num 7]#[.t-num 8]
      .item.text-center(data-error="inequality-error-2") #[.t-num 2]#[.t-num 4]#[.t-num 7]
      .item.text-center(data-error="inequality-error-3") #[.t-num 1]#[.t-num 5]#[.t-num 8]
      .item.text-center #[.t-num 2]#[.t-num 3]#[.t-num 4]

---
> id: triangle-inequality-2

The triangle inequality also allows us to estimate the length of the third side
of a triangle, if we know the length of the other two.

Imagine that a triangle has two sides of length 4 and 6. Let’s call _c_ the
length of the third side. Then we know that

{.text-center} `4+6>c`, _{span.space}_ `4+c>6` _{span.space}_ and _{span.space}_ `6+c>4`

We can rearrange these inequalities to give [[2]] `<c<` [[10]].
_{span.reveal(when="blank-0 blank-1")}The length of side *c* has to be between 2 and 10._

---
> id: triangle-inequality-3
> goals: target-0 target-1

::: column.grow

Once again, we can think about this using physical objects: two sides of the
triangle are metal rods of length 4 and 6, and the third side is a rubber band
that can expand or contract.

Now you can see that the length of the rubber band will always be
[at least](action:hover(90,45,118,69,1)) `6-4=2` and [at most](action:hover(50,127,250,127,0))
`6+4=10`.

::: column(width=300)

    x-geopad(width=300 height=200): svg
      circle(name="a" cx=170 cy=130 hidden)
      circle.move(name="b" cx=75 cy=60 project="circle(a,120)")
      circle.move(name="c" cx=300 cy=110 project="circle(a,80)")
      path.thick(x="segment(a,b)" label="6")
      path.thick(x="segment(a,c)" label="4")
      path.orange(x="segment(b,c)" label="${round(distance(b,c)/20,1)}")

:::

Note that these are _strict_ inequalities. If the third side is _exactly_ 2 or
10, we get a straight line and not a triangle. However, 2.1 or 9.9 would be
enough to form a triangle.

---

{.todo} COMING SOON – More on drawing triangles, angles in triangles,
similarity and congruence.

---

## Pythagoras’ Theorem

> section: pythagoras
> sectionStatus: dev

TODO

---

## The Coordinate Plane

> section: coordinate-plane
> sectionStatus: dev

TODO

---

## Transformations and Congruence

> section: transformations
> sectionStatus: dev

TODO
