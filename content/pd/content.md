# 2D Shapes and Perimeter

## Introduction

There are four levels of geometric thinking that students progress through in K–5. In earlier grades, students describe, compare, and sort two-dimensional shapes. This work is known as the visual and descriptive levels. In third grade, they apply their understandings in more analytic and abstract ways.

For example, when looking at the given shape, students might talk about it in different ways, depending on their current level of geometric thinking.

    figure: img(src="images/intro1.png" width=600)

[Continue](btn:next)

---

In this course, you will learn how third grade students reason about the attributes of two-dimensional shapes and then apply these understandings to measure of [perimeter](gloss:perimeter)

    figure: img(src="images/intro2.png" width=400)

---

## Attributes of 2D Shapes

In third grade, students see that [quadrilaterals](gloss:quadrilateral) can be classified based on their sides (whether some are of equal length) and their corners (whether one or more square corners are present). They sort shapes using language and attributes that are familiar to them.

    iframe.pp(src="https://mathigon.org/polypad/embed/SUuz3WzmCSqKhA?key=mathigon")
    // iframe.pp(src="https://mathigon.org/polypad/embed/fQSU8mcO3jgXg?key=mathigon")

[Continue](btn:next)

---
> id: quadrilaterals
> goals: tabs

Quadrilaterals can be used to create patterns that are visually appealing and interesting. Look at how the pattern changes as we highlight the shapes in the design:

    x-select.segmented.var(:bind="type")
      div(value="quadrilateral" style="width:130px") Quadrilateral
      div(value="rhombus") Rhombus
      div(value="rectangle") Rectangle
      div(value="square") Square
    figure: img.var(src="images/${type}.png" width=300)

---

A quadrilateral consists of [[4 | 1 | 2 | 3]] sides and [[4 | 1 | 2 | 3]] corners. Students come to understand that a shape can have more than one name.

---

A [rectangle](gloss:rectangle) is a quadrilateral with equal angles:

    figure: x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

[Continue](btn:next)

---

A [square](gloss:square) is a quadrilateral with equal sides and angles:

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

[Continue](btn:next)

---

A [rhombus](gloss:rhombus) is a quadrilateral with equal sides.

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

[Continue](btn:next)

---

Students also see that some [quadrilaterals](gloss:quadrilateral) aren’t [squares](gloss:square), [rhombuses](gloss:rhombus), or [rectangles](gloss:rectangle) because they don’t have the defining attributes of these shapes.

    figure: img(src="images/venn.png" width=600)

[Continue](btn:next)

---

For example, here are three quadrilaterals. The first one is a rectangle, a rhombus, and a square. The other two [[are not | are]] squares, rhombuses, or rectangles.

    figure: img(src="images/examples.png" width=400)

---

Here are two more examples:

::: column(width=300)

    figure: img(src="images/e1.png" width=300)

::: column(width=300)

    figure: img(src="images/e2.png" width=300)

:::

It is [[True | False]] that both shapes are quadrilaterals.

It is [[True | False]] that both shapes have one or more square corners.

It is [[True | False]] that both shapes have two equal-side lengths.

---

## Using Attributes of 2D Shapes to Find Perimeter

In third grade, students are introduced to the idea of [perimeter](gloss:perimeter).

Progression of finding the perimeter:

(1) Students use concrete object (like paperclips) to build the boundary

    figure: img(src="images/clips.png" width=280)

[Continue](btn:next)

---
> id: q1
> goals: tabs

(2) Students find the distance around the shape by counting the [intervals](gloss:interval) or
adding the number of units on each side.

    x-select.segmented.var(:bind="type")
      div(value="q1") Question
      div(value="q2") Answer
    figure: img.var(src="images/${type}.png" width=440)

---
> id: q2
> goals: tabs

(3) Students use the geometric attributes of shapes to find perimeter more efficiently (by
recognizing sides that are the same length and using multiplication).

    x-select.segmented.var(:bind="type")
      div(value="q3") Question
      div(value="q4") Answer
    figure: img.var(src="images/${type}.png" width=520)

---

Try these activities by entering some correct and incorrect values, to see what students will experience. Click on each of the images below to try it:

::: column(width=220 parent="padded-thin")

    a(href="https://teacher.desmos.com/activitybuilder/custom/621922800267e14121270128?collections=6203f4d0058a1e12161434e0#preview/bba0e5a0-cbc0-42d1-834a-c42bdb267ce9" style="display:block" target="_blank"): img(src="images/bird1.png" width=220)

::: column(width=220)

    a(href="https://teacher.desmos.com/activitybuilder/custom/621922800267e14121270128?collections=6203f4d0058a1e12161434e0#preview/7519d907-ddf5-4d67-a827-60265a134eb3" style="display:block" target="_blank"): img(src="images/bird2.png" width=220)

::: column(width=220)

    a(href="https://teacher.desmos.com/activitybuilder/custom/621922800267e14121270128?collections=6203f4d0058a1e12161434e0#preview/589e00f4-7c68-4b52-bdb3-50f3613f45d7" style="display:block" target="_blank"): img(src="images/bird3.png" width=220)

:::

[Continue](btn:next)

---

When finding perimeter, there are complexities in understanding linear measurements on grids.  Consider the following problem.  Who is correct?

Three students were asked to find the perimeter of this square:

    figure: img.var(src="images/grid.png" width=220)

* Tyler: perimeter is 16 units
* Lexi: perimeter is 12 units
* Maggie: perimeter is 8 units

[Continue](btn:next)

---
> id: buckets
> goals: buckets

The correst student is [[Tyler | Lexi | Maggie]]. Consider ways to illuminate these types of
misconceptions with students: Drag the statements into the box for the correct student.

    x-buckets
      .inputs
        .input(bucket="2") Counted 2 tick marks along the bottom of the square and multiplied that by 4.
        .input(bucket="0") Saw that 3 square units fit along each side. Therefore the perimeter of the entire square is 4 times that length.
        .input(bucket="1") Counted 4 tick marks along the bottom of the square, and multiplied that by 4.
      .buckets
        .bucket
          .title Typer (12 units)
        .bucket
          .title Lexi (16 units)
        .bucket
          .title Maggie (8 units)

---

## Relating Perimeter and Area

As students solve problems relating [perimeter](gloss:perimeter) and [area](gloss:area), they begin to see that shapes that have the same perimeter can have different areas.  They also see that shapes that have the same areas can have different perimeters.

::: column(width=320)

    img(src="images/p1.png" width=320)

::: column(width=320)

    img(src="images/p2.png" width=320)

:::

[Continue](btn:next)

---

Try these activities by entering some correct and incorrect values, to see what students will experience!  Click on each of the images below to try  it.

::: column(width=500)

    a(href="https://teacher.desmos.com/activitybuilder/custom/6203f4fecb3f9b1f5c872cc8?collections=6203f4d0058a1e12161434e0#preview/1f0e7182-08fb-4761-9c7a-e33cf1f4d154" style="display:block" target="_blank"): img(src="images/d3.png" width=500)

::: column(width=500)

    a(href="https://teacher.desmos.com/activitybuilder/custom/6203f4fecb3f9b1f5c872cc8?collections=6203f4d0058a1e12161434e0#preview/24004b27-8365-4b19-82a1-352197ae4078" style="display:block" target="_blank"): img(src="images/d4.png" width=500)

:::

---

It is important that students understand the differences and relationships between area and perimeter.  Let’s think through five examples that highlight the difference between the two for students.

::: column.grow

1. If we need to know how much carpet to buy to for our living room floor, we would need to find the [[area | perimeter]] of our living room floor.
3. {.reveal(when="blank-0")} If we need to know how much ribbon we need to decorate the outside a mirror, we would need to find the [[perimeter | area]] of the mirror.
2. {.reveal(when="blank-1")} If we need to know much fencing is needed to surround a field, we would need to find the [[perimeter | area]] of the field.
4. {.reveal(when="blank-2")} If we need to determine how much coastline there is of an island, we would need to find the [[perimeter | area]] of the island.
5. {.reveal(when="blank-3")} If we need to know how much material is needed to replace the floor of a gym, we would need to find the [[area | perimeter]] of the gym.

::: column(width=200)

    img(src="images/floor.png" width=200 style="margin-bottom: 12px")
    img.reveal(src="images/grass.png" width=200 style="margin-bottom: 12px" when="blank-1")
    img.reveal(src="images/coast.png" width=200 when="blank-2")

:::

---

Try it!  What are the possible solutions your students might come up with?

::: column(width=500)

    a(href="https://teacher.desmos.com/activitybuilder/custom/6203f4fecb3f9b1f5c872cc8?collections=6203f4d0058a1e12161434e0#preview/1f0e7182-08fb-4761-9c7a-e33cf1f4d154" style="display:block" target="_blank"): img(src="images/d2.png" width=500)

::: column(width=500)

    a(href="https://teacher.desmos.com/activitybuilder/custom/6203f4fecb3f9b1f5c872cc8?collections=6203f4d0058a1e12161434e0#preview/24004b27-8365-4b19-82a1-352197ae4078" style="display:block" target="_blank"): img(src="images/d1.png" width=500)

:::

    style .next-section { display: none !important; }
