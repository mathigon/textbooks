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

    include ../shared/components/binary-swipe

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

---

> id: populations

A regular polygon has [[all equal | all different]] side lengths.

::: .reveal(when="blank-0")

Let’s revisit the Voronoi diagram and find out how many people live in one of the regions with 5 sides. Note the [region outlined in white](->#population-pentagon) in the image below.

    // TODO: Show voronoi diagram

Just by looking at this region, it seems that [[more | less]] students will attend the school in this region than the school in the triangular region we explored above. The region looks similar in size, so it’s hard to be sure just by looking. Let’s find its area by splitting it up into rectangles and triangles and compare the area to the area of the triangular region.

:::

::: .reveal(when="blank-1")

    // TODO: Voronoi region area exercise

:::

{.reveal(when="area-calculated")} TODO: People equation

{.reveal(when="people-calculated")} So, indeed more students will likely attend the school in the pentagon region than the triangular region.

---

> id: polygon-names

We give different names to polygons based on how many sides they have. You may remember some of the names. Drag the names on top of the correct shapes.

    include ../shared/components/relation
    x-relation.shapes-names
      .item(slot="domain" match="5") Pentagon
      .item(slot="domain" match="6") Hexagon
      .item(slot="domain" match="7") Septagon/Heptagon
      .item(slot="domain" match="8") Octagon
      .item(slot="domain" match="9") Nonagon
      .item(slot="domain" match="10") Decagon
      .item(slot="range" name="5") 5 sides
      .item(slot="range" name="6") 6 sides
      .item(slot="range" name="7") 7 sides
      .item(slot="range" name="8") 8 sides
      .item(slot="range" name="9") 9 sides
      .item(slot="range" name="10") 10 sides

::: .reveal(when="names-matched")

Let’s practice using these names by looking at some examples of polygons out in the world.

TODO: Images

The Dome of the Rock is an Islamic Shrine in the Old City of Jerusalem. Built in 692 BCE, the base is a regular [[octagon | pentagon | hexagon]].

:::

::: .reveal(when="blank-0")

TODO: Images

The Giant’s Causeway in Northern Ireland is made up of over 40,000 polygonal basalt (a type of igneous rock) columns sticking out of the sea. The column outlined in white in the photo is a [[hexagon | pentagon | octagon]].

:::

::: .reveal(when="blank-1")

TODO: Images

All sorts of traffic signs are polygons - some regular and some irregular. 
The sign of the two people crossing the street is a [[irregular | regular]] [[pentagon | hexagon | octagon]].

:::

::: .reveal(when="blank-2 blank-3")

Polygons show up in all sorts of natural objects - honeycomb and starfish - to name a few.

TODO: Images

The 10-sided starfish is a [[decagon | nonagon | octagon]].

:::

::: .reveal(when="blank-4")

TODO: Images

The ground of a dried out desert, the skin patterns on giraffes, and dragonfly wings look strikingly similar to Voronoi diagrams!

Lastly, many flags use polygons. Drag the name of each country to the correct flag. Just make a guess if you’re not sure!

    x-relation.flags-countries
      .item(slot="domain" match="canada" comment=true) [Canada flag]
      .item(slot="domain" match="south-africa" comment=true) [South Africa flag]
      .item(slot="domain" match="finland" comment=true) [Finland flag]
      .item(slot="domain" match="nepal" comment=true) [Nepal flag]
      .item(slot="range" name="canada") Canada
      .item(slot="range" name="south-africa") South Africa
      .item(slot="range" name="finland") Finland
      .item(slot="range" name="nepal") Nepal

:::

::: .reveal(when="flags-matched")

The hexagons in the South African flag and the pentagon in the Nepalese flag may not appear to be the standard image you may have in your head of a pentagon and a hexagon. Move around the vertices (these are the points where the edges meet) in the regular polygons below to make some irregular polygons of your own.

:::

::: column.grow(width=220)

    // pentagon
    x-geopad(width=220 height=220): svg
      circle.move(name="a" cx=16.304 cy=71.944)
      circle.move(name="b" cx=119.065 cy=15.526)
      circle.move(name="c" cx=204.477 cy=95.823)
      circle.move(name="d" cx=154.503 cy=201.868)
      circle.move(name="e" cx=38.206 cy=187.109)
      path(name="pentagon" x="polygon(a,b,c,d,e)")

::: column.grow(width=220)

    // hexagon
    x-geopad(width=220 height=220): svg
      circle.move(name="f" cx=17.191 cy=123.874)
      circle.move(name="g" cx=51.786 cy=35.629)
      circle.move(name="h" cx=145.507 cy=21.466)
      circle.move(name="i" cx=204.632 cy=95.55)
      circle.move(name="j" cx=170.037 cy=183.795)
      circle.move(name="k" cx=76.316 cy=197.958)
      path(name="hexagon" x="polygon(f,g,h,i,j,k)")

::: column.grow(width=220)

    // octagon
    x-geopad(width=220 height=220): svg
      circle.move(name="l" cx=202.682 cy=93.196)
      circle.move(name="m" cx=163.59 cy=31.852)
      circle.move(name="n" cx=92.572 cy=16.119)
      circle.move(name="o" cx=31.229 cy=55.21)
      circle.move(name="p" cx=15.495 cy=126.229)
      circle.move(name="q" cx=54.587 cy=187.572)
      circle.move(name="r" cx=125.605 cy=203.306)
      circle.move(name="s" cx=186.948 cy=164.214)
      path(name="octagon" x="polygon(l,m,n,o,p,q,r,s)")

:::

---

> id: simple-tangram

Below are 7 polygons. Move and rotate the polygons to completely fill in the square

    figure: .tangram
      .simple-tangram-bg
      x-polypad

::: .reveal(when="tangram-complete")

The set of these 7 polygons is called a tangram. The tangram is an ancient Chinese puzzle invented over 1,000 years ago during the Song Dynasty. In Chinese, the puzzle is called 七巧板. Pronounced “Chi-Chiao Pan,” this translates to “the seven intriguing pieces.” The goal of the puzzle is to use all 7 pieces to form any number of images. Below are just some of the shapes you can try to make at the [Tangram](https://mathigon.org/tangram) activity on Mathigon!

TODO: Image

In 1815, Shan Chiao published “New Figures of the Tangram” which contained 374 tangram puzzles!

:::

---

> id: football-polygons

Now that we have a firm understanding of polygons, let’s revisit thinking about the area of polygons. The football below is made up of 12 black [[pentagons | hexagons | octagons]] and 20 white [[hexagons | pentagons | octagons]]. The mathematical name for this is 3D shape is a truncated icosahedron. A football is slightly more rounded than a true truncated icosahedron since the pentagons and hexagons bulge out due to the air pressure inside.

TODO: Image

Most footballs are made of synthetic leather. Manufacturers make so many footballs that they pay great attention to the amount of synthetic leather they need to produce each football. Let’s find the amount of synthetic leather needed to make one professional football.

TODO: Football 'unfolding' animation

    // TODO: Pentagons and hexagons area exercise

Recently, football manufacturers have begun to experiment with different shaped panels other than hexagons and pentagons. Here are some of the official footballs from the recent men’s World Cup tournaments.

TODO: Images

While these designs are creative and interesting, some studies have shown that the different shaped panels impact how the ball travels through the air!

---

> id: area-methods

Below is a polygon from a different Voronoi diagram. Each grid represents 1 square kilometer. Let’s find the area of this region in a few different ways.

TODO: Polygon image

    // TODO: Polygon area methods exercise

No matter which approach we take, the area of the pentagon is 27.5 square units!

---

> id: triangle-tangram

Throughout our work on area, we have often used the idea that as parts of a shape are moved around, the area stays the same - as long as the pieces don’t overlap and all the pieces are used.

    figure: .triangle-tangram
      svg.solution-outline
      x-polypad(rotate="no")

{.reveal(when="triangle-complete")} We’ve made a triangle with a base of 13 units and a height of 5 units. The area of this triangle is [[32.5]] square units. So, the area of these 4 pieces must also be [[32.5]] square units.

::: .reveal(when="blank-0 blank-1")

    x-slider(steps=1000 speed=1).rearrange-triangle

:::

{.reveal(when="triangle-rearranged")} This triangle also has a base of [[13]] and a height of [[5]] so the area of the triangle has stayed the same at 32.5 square units. However, now it seems the area of the 4 pieces is one [[less than | more than]] the area of the triangle! How can this be when we expect the area of shapes to stay the same when we move them around? Move the slider back and forth to see this again.

::: .reveal(when="triangle-slid blank-2 blank-3 blank-4")

This situation is called Curry’s Paradox. A paradox is a statement or situation that contradicts itself. This paradox, created by American mathematician [Haskell Curry](bio:curry), is that the area of the 4 pieces first seemed to equal 32.5 square units and then they seem to equal 31.5 square units!

Let’s take the shape apart and find the area of each piece to help us see what’s happening here. 

    figure: .tangram-polys
      x-polypad(rotate="no")

The red triangle has a base of 8 and a height of 3, so the area of the red triangle is [[12]] square units. The area of the blue triangle is [[5]] square units. The area of the green hexagon is [[8]] square units and the area of the orange hexagon is [[7]] square units. So, the total area of all the pieces when pulled apart is [[32]] square units. However, in the first arrangement, they seem to make a triangle with an area of 32.5 square units and in the second arrangement, they seem to have an area of 31.5 square units. The area of these 4 pieces seems to be changing as we are moving them around! What is going on here?

:::

Well, it turns out that neither of the shapes we made using the 4 pieces are in fact triangles. Below is the 1st arrangement. It looks like the red and blue triangles line up perfectly, but they do not. Move the slider below to zoom in on the green line connecting the corners of two triangles.

    // TODO: Triangle zoom exercise 1

While the blue and red seem to line up so the ends connect with a straight line, they do not.  Using the formula ½ x b x h to find the area of this shape made by the 4 pieces is incorrect because the shape [[is not | is]] a triangle. The area of this shape is 32 square units. Using ½ x b x h, we got 32.5 square units. The extra ½ unit came from the amount of space in between the green line and the actual line connecting the endpoints of the red and blue triangle.

    // TODO: Triangle zoom exercise 2

In the 2nd arrangement, the shapes also seem to make a triangle with the same total area, but we’ve used one additional square unit. So, our first thought was that the area of these 4 shapes decreased by one. Move the slider below to zoom in on the green line connecting the corners of two triangles.

    // TODO: Slider

Adding the extra square unit into this arrangement of the 4 pieces causes the triangles to bulge outside of the green line. So, this arrangement is not a triangle either! The total area of the pieces is remaining constant at 32!

So, we’ve made sense of this paradox. The area of the green triangle is 32.5 square units and the area of the 4 pieces is 32 square units. The pieces do NOT fit perfectly inside the triangle. When we tried just using the 4 pieces, we still had ½ of a square unit to fill in within the triangle. At first, we just didn’t notice the ½ of the square unit missing.

TODO: Comparison diagram

In the second arrangement, we added in an additional square unit to make the 4 pieces fit inside the green triangle. Again, it seemed to fit, but it actually was ½ square unit too big. Our eyes just couldn’t perceive the extra ½ square unit. 

Phew! Our fundamental idea that the area of shapes remains the same regardless of the arrangement of the shapes remains true. We’ll use this idea to explore circles in the next few chapters. 


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
