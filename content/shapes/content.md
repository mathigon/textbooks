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
> id: voronoi
> goals: one-point five-points voronoi-diagram eight-points

School districts  need an accurate estimate of the number of students that may attend their schools. Below is a map of primary schools in London. In general, students attend the school closest to where they live. Click anywhere on the map to see the distance between that point and all the schools on the map.

    figure: x-geopad(width=600 height=400)
      img(src="images/map-temp.png" width=600 height=400)
      canvas.voronoi(width=600 height=400)
      svg

{.reveal(when="one-point")} Pick 4 other points on the map.

{.reveal(when="five-points")} _{button.btn.show-voronoi} Create voronoi diagram_

{.reveal(when="voronoi-diagram")} We’ve just made a Voronoi diagram. Each region contains all the points on the map that are closest to the school in that region. Click a few spots in different regions to check. 

{.reveal(when="eight-points")} The first person to think about these things was probably [Rene Descartes](bio:descartes) 400 years ago - he was a famous philosopher too!  But they’re named after a Russian mathematician, [Gregory Feodosevich Voronoy](bio:voronoy). Physician John Snow used a version of a Voronoi diagram in 1854 during a [cholera epidemic](https://plus.maths.org/content/uncovering-cause-cholera) In London to locate an infected water pump on Broad Street in London 

{.reveal(when="eight-points")} In our example, using a Voronoi diagram can help schools make estimates of how many students will attend. In London, about 1500 people live in each square kilometer. To use this statistic, we first need to first know the [[area | perimeter]] of each region in the diagram.

{.reveal(when="blank-0")} Some of these regions are shapes we’ve learned about in previous chapters. [This shape](->#triangle-cell) is a triangle and we can find the area by doing [[1/2]] x base x height.

::: .reveal(when="blank-1")
Click on the side of the triangle you want to use as the base.

    // TODO: show triangle from prev voronoi diagram

:::

{.reveal(when="side-selected")} Now draw in the height that corresponds with the base you selected.

{.reveal(when="height-drawn")} The area of this triangle is [[TODO]] [[square km | km]].

{.text-center.reveal(when="blank-2 blank-3")} `(1500 "\ people") / (1 "\ square km") = (input(0) "\ people") / (TODO "\ square km")`

::: .reveal(when="blank-4")

${peopleCount} people live closest to that school and that can be a good starting point for the school to use to estimate how many students might attend that school. Next, the schools would want to use other statistics to estimate how many of those people are elementary aged students.

The other regions are more complicated. Some have [4 sides](->#four-sided). Some have [5 sides](->#five-sided). And some have [6 sides](->#six-sided).

    // TODO: Display prev voronoi diagram

:::

---

> id: sort-polygons

All of these regions in the Voronoi diagram are examples of polygons. A polygon is a closed, two-dimensional shape with straight sides that do not cross each other. A polygon does not have any holes in the shape. Click on a card below and drag it to the “Polygon” or “Non Polygon” side.

    include ../shared/components/binary-swipe.pug

::: x-binary-swipe(a-title="Polygons" b-title="Not Polygons")
      
{div.card.c-red(solution="a" comment="card-1")} Card #1 - Regular Polygon

{div.card.c-teal(solution="b" comment="card-2")} Card #2 - NOT a Polygon

{div.card.c-green(solution="b" comment="card-3")} Card #3 - NOT a Polygon

{div.card.c-orange(solution="a" comment="card-4")} Card #4 - Irregular Polygon

{div.card.c-blue(solution="a" comment="card-5")} Card #5 - Irregular Polygon

{div.card.c-yellow(solution="b" comment="card-6")} Card #6 - Not a polygon

{div.card.c-teal(solution="a" comment="card-7")} Card #7 - Regular polygon

{div.card.c-orange(solution="b" comment="card-8")} Card #8 - Not a Polygon

{div.card.c-blue(solution="b" comment="card-9")} Card #9 - Not a polygon

{div.card.c-red(solution="a" comment="card-10")} Card #10 - Irregular Polygon

{div.card.c-purple(solution="a" comment="card-11" hint="This is not correct. Try again!")} Card #11 - Polygon

:::

{.reveal(when="cards-sorted")} A regular polygon has [[all equal | all different]] side lengths. 

---

> id: populations

Let’s revisit the Voronoi diagram and find out how many people live in one of the regions with 5 sides. Note the [region outlined in white](->#population-pentagon) in the image below.

    // TODO: Show voronoi diagram

Just by looking at this region, it seems that [[more | less]] students will attend the school in this region than the school in the triangular region we explored above. The region looks similar in size, so it’s hard to be sure just by looking. Let’s find its area by splitting it up into rectangles and triangles and compare the area to the area of the triangular region. 

    // TODO: Voronoi region area exercise

So, indeed more (less?) students will likely attend the school in the pentagon region than the triangular region.

---

> id: polygon-names

---

> id: simple-tangram

---

> id: football-polygons

---

> id: area-methods

---

> id: triangle-tangram

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
