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
        circle.red(cx=40 cy=60 name="a")
        circle.red(cx=260 cy=40 name="b")
        circle.red(cx=500 cy=80 name="c")
        circle.red(cx=400 cy=180 name="d")
        circle.red(cx=320 cy=138 name="e")
        circle.red(cx=300 cy=330 name="f")
        circle.red(cx=228 cy=240 name="g")
        circle.red(cx=170 cy=130 name="h")

{.reveal(when="one-point")} Pick 4 other points on the map.

{.reveal(when="five-points")} _{button.btn.show-voronoi} Create voronoi diagram_

{.reveal(when="voronoi-diagram")} We’ve just made a Voronoi diagram. Each region contains all the points on the map that are closest to the school in that region. Click a few spots in different regions to check. 

{.reveal(when="eight-points")} The first person to think about these things was probably [Rene Descartes](bio:descartes) 400 years ago - he was a famous philosopher too!  But they’re named after a Russian mathematician, [Gregory Feodosevich Voronoy](bio:voronoy). Physician John Snow used a version of a Voronoi diagram in 1854 during a [cholera epidemic](https://plus.maths.org/content/uncovering-cause-cholera) In London to locate an infected water pump on Broad Street in London 

{.reveal(when="eight-points")} In our example, using a Voronoi diagram can help schools make estimates of how many students will attend. In London, about 1500 people live in each square kilometer. To use this statistic, we first need to first know the [[area | perimeter]] of each region in the diagram. 

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

## Circles and Circumferences

> section: circles
> sectionStatus: dev

TODO

---

## Area of Circles

> section: circle-area
> sectionStatus: dev

TODO
