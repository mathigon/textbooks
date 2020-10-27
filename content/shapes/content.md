# Area and Shapes

## Introduction

> section: introduction
> sectionStatus: dev

TODO

---

## Parallelograms and Triangles

> section: parallelograms-triangles
> sectionStatus: dev

TODO

---

## Polygons

> section: polygons
> sectionStatus: dev

TODO

---
> id: sort-polygons

All of these regions in the Voronoi diagram are examples of polygons. A polygon is a closed, two-dimensional shape with straight sides that do not cross each other. A polygon does not have any holes in the shape. Click on a card below and drag it to the “Polygon” or “Non Polygon” side.

    include ../shared/components/binary-swipe.pug

::: x-binary-swipe(a-title="Polygons" b-title="Not Polygons").abshapes
      
{div.card.c-red(solution="a")} Card #1 - Regular Polygon

{div.card.c-teal(solution="b")} Card #2 - NOT a Polygon

{div.card.c-green(solution="b")} Card #3 - NOT a Polygon

{div.card.c-orange(solution="a")} Card #4 - Irregular Polygon

{div.card.c-blue(solution="a")} Card #5 - Irregular Polygon

{div.card.c-yellow(solution="b")} Card #6 - Not a polygon

{div.card.c-teal(solution="a")} Card #7 - Regular polygon

{div.card.c-orange(solution="b")} Card #8 - Not a Polygon

{div.card.c-blue(solution="b")} Card #9 - Not a polygon

{div.card.c-red(solution="a")} Card #10 - Irregular Polygon

{div.card.c-purple(solution="a" hint="This is not correct. Try again!")} Card #11 - Polygon

:::

{.reveal(when="cards-sorted")} A regular polygon has [[all equal | all different]] side lengths. 

---
> id: tangram

Here is a Tangram canvas:

    figure: .tangram
      x-polypad
      .shapes

---

## Circles and Circumferences

> section: circles
> sectionStatus: dev

TODO

---

## Area of Circles

> section: circle-area
> sectionStatus: dev

TODO
