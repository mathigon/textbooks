# Area and Shapes

## Introduction

> section: introduction
> sectionStatus: dev

[TODO]

---

## Parallelograms and Triangles

> section: parallelograms-triangles
> sectionStatus: dev

[TODO]

---

## Polygons

> section: polygons
> sectionStatus: dev
> id: voronoi
> goals: blank-4

School districts  need an accurate estimate of the number of students that may attend their schools. Below is a map of primary schools in London. In general, students attend the school closest to where they live. Click anywhere on the map to see the distance between that point and all the schools on the map.

    figure: x-geopad(width=600 height=400).voronoi-1
      img(src="images/map-temp.png" width=600 height=400)
      canvas.voronoi(width=600 height=400)
      svg

{.reveal(when="one-point")} Pick 4 other points on the map.

{.reveal(when="five-points")} _{button.btn.show-voronoi} Create voronoi diagram_

{.reveal(when="voronoi-diagram")} We’ve just made a Voronoi diagram. Each region contains all the points on the map that are closest to the school in that region. Click a few spots in different regions to check.

{.reveal(when="eight-points")} The first person to think about these things was probably [Rene Descartes](bio:descartes) 400 years ago - he was a famous philosopher too!  But they’re named after a Russian mathematician, [Gregory Feodosevich Voronoy](bio:voronoy). Physician John Snow used a version of a Voronoi diagram in 1854 during a [cholera epidemic](https://plus.maths.org/content/uncovering-cause-cholera) In London to locate an infected water pump on Broad Street in London 

{.reveal(when="eight-points")} In our example, using a Voronoi diagram can help schools make estimates of how many students will attend. In London, about 1500 people live in each square kilometer. To use this statistic, we first need to first know the [[area | perimeter]] of each region in the diagram.

::: .reveal(when="blank-0")

    figure: x-geopad(width=600 height=400).voronoi-2
      svg

Some of these regions are shapes we’ve learned about in previous chapters. [This shape](->.triangle-cell) is a triangle and we can find the area by doing [[1/2]] x base x height.

{.reveal(when="blank-1")} Click on the side of the triangle you want to use as the base.

{.reveal(when="side-selected")} Now draw in the height that corresponds with the base you selected.

{.reveal(when="height-drawn")} The area of this triangle is [[ [TODO] ]] [[square km | km]].

{.text-center.reveal(when="blank-2 blank-3")} `(1500 "\ people") / (1 "\ square km") = (input(0) "\ people") / ([TODO] "\ square km")`

:::

::: .reveal(when="blank-4")

[TODO] people live closest to that school and that can be a good starting point for the school to use to estimate how many students might attend that school. Next, the schools would want to use other statistics to estimate how many of those people are elementary aged students.

The other regions are more complicated. Some have [4 sides](->.four-sided). Some have [5 sides](->.five-sided). And some have [6 sides](->.six-sided).

    // [TODO]: Probably don't need geopad for this
    figure: x-geopad(width=600 height=400).voronoi-3
      svg

:::

---

> id: sort-polygons
> goals: cards-sorted

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

Let’s revisit the Voronoi diagram and find out how many people live in one of the regions with 5 sides. Note the [region outlined in white](->.population-pentagon) in the image below.

    // [TODO]: Voronoi region area exercise
    figure: x-geopad(width=600 height=400).voronoi-1
      svg

Just by looking at this region, it seems that [[more | less]] students will attend the school in this region than the school in the triangular region we explored above. The region looks similar in size, so it’s hard to be sure just by looking. Let’s find its area by splitting it up into rectangles and triangles and compare the area to the area of the triangular region.

:::

::: .reveal(when="blank-1")

| The total area is equal to the area of the rectangle plus the area of [[2]] triangles. | Total Area = Area of Rect + Area of Triangle 1 + Area of Triangle 2 |
| Area of a rectangle = b x h and Area of a triangle = [[½]] x b x h | Total Area = b x h + ½ x b x h + ½ x b x h |
| Click on the base and height of the rectangle | Total area = # x # + ½ x b x h + ½ x b x h |
| Click on the base you want to use for triangle #1 and then draw in the corresponding height. | Total area = # x # + ½ x # x # + ½ x b x h |
| Click on the base you want to use for triangle #2 and then draw in the corresponding height. | Total area = # x # + ½ x # x # + ½ x # x #Calculate the area of each shape |
| Calculate the area of each shape | Total area = [[#]] + [[#]] + [[#]] |
| Calculate the total area | Total area = [[#]] sq km |

:::

{.reveal(when="area-calculated")} [TODO]: People equation

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

::: column(width=300)

    x-img(src="https://static4.depositphotos.com/1010232/271/i/950/depositphotos_2712874-stock-photo-dome-of-the-rock-jerusalem.jpg" width=300 height=199)

::: column(width=300)

    x-img(src="https://ak7.picdn.net/shutterstock/videos/20482537/thumb/8.jpg" with=300 height=169)

:::

The Dome of the Rock is an Islamic Shrine in the Old City of Jerusalem. Built in 692 BCE, the base is a regular [[octagon | pentagon | hexagon]].

:::

::: .reveal(when="blank-0")

::: column(width=300)

    x-img(src="https://st2.depositphotos.com/1457640/9876/i/950/depositphotos_98761548-stock-photo-giants-causeway-and-cliffs-in.jpg" width=300 height=200)

::: column(width=300)

    object(type="image/svg+xml" data="/resources/shapes/images/giants-causeway-shape.svg" width=300 height=219).column-photo

:::

The Giant’s Causeway in Northern Ireland is made up of over 40,000 polygonal basalt (a type of igneous rock) columns sticking out of the sea. The column outlined in white in [the photo](->.column-photo) is a [[hexagon | pentagon | octagon]].

:::

::: .reveal(when="blank-1")

::: column(width=150)

    x-img(src="https://static5.depositphotos.com/1008458/490/i/950/depositphotos_4906550-stock-photo-red-stop-sign.jpg" width=150 height=150)

::: column(width=150)

    x-img(src="https://st.depositphotos.com/1259239/2593/v/950/depositphotos_25933337-stock-illustration-usa-yield-sign.jpg" width=150 height=150)

::: column(width=150)

    x-img(src="https://static8.depositphotos.com/1259239/1058/v/950/depositphotos_10588449-stock-illustration-fork-in-road-sign.jpg" width=150 height=150)

::: column(width=150)

    x-img(src="https://st.depositphotos.com/1669155/2769/i/450/depositphotos_27698627-stock-photo-road-sign.jpg" width=150 height=225)

:::

All sorts of traffic signs are polygons - some regular and some irregular. 
The sign of the two people crossing the street is a [[irregular | regular]] [[pentagon | hexagon | octagon]].

:::

::: .reveal(when="blank-2 blank-3")

Polygons show up in all sorts of natural objects - honeycomb and starfish - to name a few.

::: column(width=300)

    x-img(src="https://static8.depositphotos.com/1491329/1068/i/950/depositphotos_10680850-stock-photo-worker-bees-on-honeycomb.jpg" width=300 height=199)

::: column(width=300)

    x-img(src="https://st.depositphotos.com/1054213/2023/i/950/depositphotos_20238089-stock-photo-starfish-asterias-rubens.jpg" width=300 height=200)

:::

The 10-sided starfish is a [[decagon | nonagon | octagon]].

:::

::: .reveal(when="blank-4")

::: column(width=150)

    x-img(src="https://static9.depositphotos.com/1013513/1148/i/950/depositphotos_11488218-stock-photo-drought-land-and-hot-weather.jpg" width=150 height=100)

::: column(width=150)

    x-img(src="https://static5.depositphotos.com/1011160/517/i/950/depositphotos_5177840-stock-photo-texture-of-dry-cracked-soil.jpg" width=150 height=100)

::: column(width=150)

    x-img(src="https://st.depositphotos.com/1594920/1698/i/950/depositphotos_16982455-stock-photo-somali-giraffe-commonly-known-as.jpg" width=150 height=109)

::: column(width=150)

    x-img(src="https://static3.depositphotos.com/1003348/177/i/950/depositphotos_1773326-stock-photo-dragonfly.jpg" width=150 height=100)

:::

The ground of a dried out desert, the skin patterns on giraffes, and dragonfly wings look strikingly similar to Voronoi diagrams!

Lastly, many flags use polygons. Drag the name of each country to the correct flag. Just make a guess if you’re not sure!

    x-relation.flags-countries
      .item(slot="domain" match="canada" comment=true)
        object(type="image/svg+xml" data="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg")
      .item(slot="domain" match="south-africa" comment=true)
        object(type="image/svg+xml" data="https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg")
      .item(slot="domain" match="finland" comment=true)
        object(type="image/svg+xml" data="/resources/shapes/images/Flag_of_Finland.svg")
      .item(slot="domain" match="nepal" comment=true)
        object(type="image/svg+xml" data="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg")
      .item(slot="range" name="canada") Canada
      .item(slot="range" name="south-africa") South Africa
      .item(slot="range" name="finland") Finland
      .item(slot="range" name="nepal") Nepal

:::

::: .reveal(when="flags-matched")

The hexagons in the South African flag and the pentagon in the Nepalese flag may not appear to be the standard image you may have in your head of a pentagon and a hexagon. Move around the vertices (these are the points where the edges meet) in the regular polygons below to make some irregular polygons of your own.

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

:::

---

> id: simple-tangram

Below are 7 polygons. Move and rotate the polygons to completely fill in the square

    figure: .tangram
      .simple-tangram-bg
      x-polypad

::: .reveal(when="tangram-complete")

The set of these 7 polygons is called a tangram. The tangram is an ancient Chinese puzzle invented over 1,000 years ago during the Song Dynasty. In Chinese, the puzzle is called 七巧板. Pronounced “Chi-Chiao Pan,” this translates to “the seven intriguing pieces.” The goal of the puzzle is to use all 7 pieces to form any number of images. Below are just some of the shapes you can try to make at the [Tangram](https://mathigon.org/tangram) activity on Mathigon!

    // [TODO]: Image

In 1815, Shan Chiao published “New Figures of the Tangram” which contained 374 tangram puzzles!

:::

---

> id: football-polygons

Now that we have a firm understanding of polygons, let’s revisit thinking about the area of polygons. The football below is made up of 12 black [[pentagons | hexagons | octagons]] and 20 white [[hexagons | pentagons | octagons]]. The mathematical name for this is 3D shape is a truncated icosahedron. A football is slightly more rounded than a true truncated icosahedron since the pentagons and hexagons bulge out due to the air pressure inside.

    // [TODO]: Image

Most footballs are made of synthetic leather. Manufacturers make so many footballs that they pay great attention to the amount of synthetic leather they need to produce each football. Let’s find the amount of synthetic leather needed to make one professional football.

    // [TODO]: Football 'unfolding' animation

    // [TODO]: Pentagon and hexagon diagram/animation

| A football is made up of [[12]] pentagons and [[20]] hexagons | Total Area = 12 pentagons + 20 hexagons |
| Let’s split the pentagon into [[5]] congruent triangles and the hexagon into [[6]] congruent triangles..  Note - at this point, the triangles will appear on the pentagon and hexagon | Total Area = 12 x (Area of 5 triangles) + 20 x (Area of 6 triangles) |
| The area formula for a triangle is [[½]] x base x height. | Total area = 12 x (5 x ½ x b x h) + 20 x (6 x ½ x b x h) |
| In the pentagon, click on the side you want to use as the base and then draw in the height. | Total area = 12 x  (5 x ½ x 4.56 x 3.138) + 20 x (6 x ½ x b x h) |
| Calculate the area of one pentagon and one hexagon | Total area = 12 x [[35.7732]] + 20 x [[54.0223]] |
| Calculate the area of the 12 pentagons and the 20 hexagons | Total area = [[429.28]] + [[1080.45]] |
| Calculate the total area | Total area = [[1509.73]] square cm |

Recently, football manufacturers have begun to experiment with different shaped panels other than hexagons and pentagons. Here are some of the official footballs from the recent men’s World Cup tournaments.

**2006 World Cup**

    x-img(src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Teamgeist_Ball_World_Cup_2006_Finale.jpg" width=400 height=300)

**2010 World Cup**

    x-img(src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Jo%27bulani.jpg" width=400 height=419)

**2014 World Cup**

    x-img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Deutsches_Fu%C3%9Fballmuseum_2015_3.jpg/1280px-Deutsches_Fu%C3%9Fballmuseum_2015_3.jpg" width=400 height=300)

**2018 World Cup**

    x-img(src="https://upload.wikimedia.org/wikipedia/commons/5/50/Adidas_Telstar_18_in_Russia_vs._Argentina.jpg" width=400 height=400)


While these designs are creative and interesting, some studies have shown that the different shaped panels impact how the ball travels through the air!

---

> id: area-methods

Below is a polygon from a different Voronoi diagram. Each grid represents 1 square kilometer. Let’s find the area of this region in a few different ways.

    // [TODO]: Polygon image

    // [TODO]: Polygon area methods exercise

No matter which approach we take, the area of the pentagon is 27.5 square units!

---

> id: triangle-tangram

Throughout our work on area, we have often used the idea that as parts of a shape are moved around, the area stays the same - as long as the pieces don’t overlap and all the pieces are used.

    figure: .triangle-tangram
      svg.solution-outline
      x-polypad(rotate="no")
    x-gesture(target=".triangle-tangram x-polypad svg" slide="25,325" offset="-50, -150")

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

::: .reveal(when="blank-5 blank-6 blank-7 blank-8 blank-9")

Well, it turns out that neither of the shapes we made using the 4 pieces are in fact triangles. Below is the 1st arrangement. It looks like the red and blue triangles line up perfectly, but they do not. Move the slider below to zoom in on the green line connecting the corners of two triangles.

    figure: .zoom-1
      x-polypad(rotate="no")
    x-slider(steps=1000 speed=1).zoom-s-1

:::

::: .reveal(when="first-zoom")

While the blue and red seem to line up so the ends connect with a straight line, they do not.  Using the formula ½ x b x h to find the area of this [shape](->.paradox-poly) made by the 4 pieces is incorrect because the shape [[is not | is]] a triangle. The area of this shape is 32 square units. Using ½ x b x h, we got 32.5 square units. The extra ½ unit came from the amount of space in between the green line and the actual line connecting the endpoints of the red and blue triangle.

    figure: .triangle-ref
      x-polypad(rotate="no")

:::

::: .reveal(when="blank-10")

In the 2nd arrangement, the shapes also seem to make a triangle with the same total area, but we’ve used one additional square unit. So, our first thought was that the area of these 4 shapes decreased by one. Move the slider below to zoom in on the green line connecting the corners of two triangles.

    figure: .zoom-2
      x-polypad(rotate="no")
    x-slider(steps=1000 speed=1).zoom-s-2

:::

::: .reveal(when="second-zoom")

Adding the extra square unit into this arrangement of the 4 pieces causes the triangles to bulge outside of the green line. So, this arrangement is not a triangle either! The total area of the pieces is remaining constant at 32!

So, we’ve made sense of this paradox. The area of the green triangle is 32.5 square units and the area of the 4 pieces is 32 square units. The pieces do NOT fit perfectly inside the triangle. When we tried just using the 4 pieces, we still had ½ of a square unit to fill in within the triangle. At first, we just didn’t notice the ½ of the square unit missing.

    figure: .paradox-comparison
      x-polypad(rotate="no")

In the second arrangement, we added in an additional square unit to make the 4 pieces fit inside the green triangle. Again, it seemed to fit, but it actually was ½ square unit too big. Our eyes just couldn’t perceive the extra ½ square unit. 

Phew! Our fundamental idea that the area of shapes remains the same regardless of the arrangement of the shapes remains true. We’ll use this idea to explore circles in the next few chapters.

:::


---

## Circles and Circumferences

> section: circles
> sectionStatus: dev

In the previous chapters, we’ve been exploring and learning about shapes with straight side lengths. Of course, many interesting items - all sorts of foods, entertaining attractions, objects in nature, and tires, just to name a few - all have curved edges.

::: column.grow(width=110)

    x-img(src="https://st.depositphotos.com/1689882/1219/i/950/depositphotos_12195072-stock-photo-grapefruit-isolated-on-white-background.jpg" width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://static3.depositphotos.com/1005504/200/i/950/depositphotos_2003912-stock-photo-london-eye.jpg"  width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://st.depositphotos.com/1872017/1625/i/950/depositphotos_16253565-stock-photo-top-view-of-pizza-margherita.jpg" width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://st.depositphotos.com/1001469/2018/i/950/depositphotos_20187853-stock-photo-automobile-tire-isolated-on-white.jpg" width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://lh3.googleusercontent.com/ur9ajZgRO1ENrL4gl5CrRuMe2DOucBJoKeFP7wsgNqv6axRuCqDOUoM7xVufuSeQf0uGITvFzT5li2WE05052xknJMMRiv_HNquH6gGTFnYYzL-p4PmlMHLDL82-0ufc9kwEH16b" width=110 height=110)

:::

As you likely know, a circle is the line connecting all points that are the same distance away from a center point.

    // ANIMATION-01: Construct circle

The Indianapolis Motor Speedway in Indiana in the United States is one of the most well-known race tracks in the world.

::: column.grow(width=350)

    x-img(src="https://st3.depositphotos.com/2942339/35223/i/1600/depositphotos_352234002-stock-photo-indianapolis-circa-march-2020-gate.jpg" width=350 height=255)

::: column.grow(width=350)

    x-img(src="https://image.shutterstock.com/z/stock-photo-may-indianapolis-in-helio-castroneves-of-brazil-heads-through-the-turns-to-practice-1407372011.jpg" width=350 height=257)

:::

The Indianapolis 500 is the most famous race at the track. In this race, cars must drive 500 miles. This race began in 1911 and it is the world's oldest car race still taking place today. Teams supporting the drivers must change the times many times during a race. The rubber on the tires wears out quickly because of the heat that is generated when driving at high speeds. The tires need to be changed after about 52,000 revolutions. While this may seem like a lot, the average tire on a car can last upwards of [[31,000,000 | 310,000, 3,100,000]] revolutions.

Drivers make pit stops during the race to have the tires changed and refuel.

::: column(width=560)

    iframe(width="560" height="315" src="https://www.youtube-nocookie.com/embed/ql5h00xcHLQ" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

:::

Teams need to know when to make a pit stop. If they wait too long and wear out the tires, their speed will decrease and they’ll run the risk of this happening...

::: column(width=560)

    iframe(width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZMZJ3ZaEcIQ" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

:::

Let’s try to determine the number of laps the cars can go before a pit stop is needed. To answer this, we need to think about how far a tire travels in one revolution. Below are 4 vehicles with very different tire sizes. Move each vehicle so the tire makes one full rotation.

    // INTERACTIVE-01: Wheel distances

The distance the vehicle travels in one revolution of the tire is the same as the distance [around | across] the tire. In general, distance around a shape is the [[perimeter | area]] of the shape. However, the perimeter of a circle has a unique name - the circumference.

    // DIAGRAM: Tire and track

To determine how far the car goes in one revolution of the tire, we need to know the [[circumference | area ] of each tire. We also need to know the length of each lap. The straight-aways are simple enough. However, each of the four turns come together to form a [[full | half]] circle, so we’ll also need a way to calculate the distance around that full circle.

We could use a piece of string and a ruler to determine the distance around a tire. Or we could use some sort of flexible measuring tool. Or we could walk around a circular track to determine the distance. However, it would be helpful if there was some relationship between the straight distance across a circle and the distance around a circle. Straight lines are much easier to measure with tools such as rulers and tape measures. We are going to explore this idea in this chapter.

    // ESTIMATING THE CIRCUMFERENCE OF A TIRE BY ENCASEMENT

In our previous geometry chapters, we used what we had learned about earlier shapes to help us with new ones. For example, we re-arranged parallelograms into rectangles to understand how to find the area of parallelograms. Let’s first find an estimate of the distance around the tire by using what we know about the perimeter of polygons. Place the square around the circle so it totally encloses the circle.

    // INTERACTIVE-02: Tire circumference estimation

The tire fits inside the square, so the circumference of the tire is [[less than | more than]] the perimeter of the square. The perimeter of the square is [[108]] cm so the distance around the tire is less than 108 cm.

As we increase the number of sides of the polygon, our estimate gets closer and closer to the distance around the tire. This process helps get a good estimate of the circumference around a circle. But what if we need to be exact? Can we use the straight lines in a circle to help find the circumference? Before exploring this further, let’s learn some of the names of the parts of a circle.

The RADIUS of a circle is a line from the center of the circle to a point on the circle. The DIAMETER of a circle is a line connecting two points on the circle that passes through the center point.

    // DIAGRAM: Radius and diameter

Draw 3 radii (this is the plural for radius!) and 3 diameters on the circle below:

    // INTERACTIVE-03: Drawing radii and diameters

Now, let’s identify parts of a circle in the objects below:

::: column.grow(width=110)

    x-img(src="https://st.depositphotos.com/1689882/1219/i/950/depositphotos_12195072-stock-photo-grapefruit-isolated-on-white-background.jpg" width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://static3.depositphotos.com/1005504/200/i/950/depositphotos_2003912-stock-photo-london-eye.jpg"  width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://st.depositphotos.com/1872017/1625/i/950/depositphotos_16253565-stock-photo-top-view-of-pizza-margherita.jpg" width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://st.depositphotos.com/1001469/2018/i/950/depositphotos_20187853-stock-photo-automobile-tire-isolated-on-white.jpg" width=110 height=110)

::: column.grow(width=110)

    x-img(src="https://lh3.googleusercontent.com/ur9ajZgRO1ENrL4gl5CrRuMe2DOucBJoKeFP7wsgNqv6axRuCqDOUoM7xVufuSeQf0uGITvFzT5li2WE05052xknJMMRiv_HNquH6gGTFnYYzL-p4PmlMHLDL82-0ufc9kwEH16b" width=110 height=110)

:::

One of the white lines in the grapefruit is a [[radius | diameter | circumference]], A spoke of the ferris wheel is a [[radius | diameter | circumference]]. The crust of the pizza is the [[circumference | radius | diameter]]. The height of the tire is the [[diameter | radius | circumference]]. The width of the log is the [[diameter | radius | circumference]].

While it’s not typical to think of the “diameter” of a square, it could be the line from one side to the other that passes through the center.

    // ANIMATION-02: Diameter of a square

It takes [[4]] “diameters” of a square to wrap around a square and therefore create the perimeter of the square. Upon entering in the 4: In a square, the distance around is 4 times as long as the distance across. Let’s think about this same question with circles. How many diameters of a circle do you think are needed to wrap around the circle? [[--]].

Let’s find out!

    // INTERACTIVE-04: 'Wrapping' circumference

1. Draw a circle. 
2. Drag the diameter outside of the circle and wrap it around the circumference. 
3. Keep doing this until you cover as much of the circumference as possible using full diameters. 
4. Repeat this process with two different sized circles.

    // HANDS-ON ICON

This is a great time to step away from your device and try this at home. Find any circular object. It could be something in your kitchen like a glass or a plate or a can of vegetables. Or it could be something in your room like a round clock, or a marker, or a bottle of something. Anything circular will work! Use a piece of string and mark of the length of the diameter. Then use a ruler to place a mark on the string that is 3 diameters long. Wrap the string around the circle and see how close the length of three diameters gets to making it all the way around the circle!

You predicted it would take [[--]] diameters to wrap around the circle. It seems to take a little more than [[3]] diameters to fit around a circle. But what is this “little bit more than?” Can we determine how much of a diameter this is? Is it 1/10 of a diameter? 1/5th of a diameter? 1/4th of the diameter? Before answering this question, let’s work with this idea.

::: column.grow(width=350)

    x-img(src="https://static8.depositphotos.com/1051392/952/i/950/depositphotos_9520930-stock-photo-3d-running-around-diagram.jpg" width=350 height=219)

::: column.grow(width=350)

    x-img(src="https://static6.depositphotos.com/1016225/556/i/950/depositphotos_5562081-stock-photo-barefoot-frame.jpg" width=350 height=350)

:::

Imagine you are going to run around a circular track that has a diameter of 500 meters and you want to estimate how far you’lll run. This distance around the track is [[3]] times as long as the distance across, so you’ll run about [[1500]] meters. This is 1.5 kilometers. The actual distance is a little [[more than | less than]] this, but as an estimate for a distance that you’ll run, this works well.

::: column(width=400)

    x-img(src="https://st2.depositphotos.com/2222024/5609/i/950/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg" width=400 height=267)

:::

Now imagine you want to build a fence to enclose a circular play area for your dog. You have measured the distance across the circle to be 60 meters and you know the distance around the circle is about [[3]] times the distance across. Therefore, you buy 180 meters of fencing. You use all the fencing in an attempt to create perfect circle and find out that you have purchased [[not enough fencing | too much fencing | just the right amount of fencing]].

It takes a little more than 3 diameters to equal the circumference. Using 3 as an approximation is fine for some general estimates, but we need to keep working to get to a point where we can more accurately calculate the circumference of a circle.

    // FIND 3.14 AND ESTABLISH FORMULA

Let’s see if we can determine how much more of the 4th diameter is needed to fully wrap around the circle. Draw a line below and watch as it is then formed into a circle.

    // INTERACTIVE-05: Finding PI

Let’s think about how many diameters are needed to make the circumference. Determining how many times one number is needed to make another is represented by [[division | multiplication | subtraction]]. 

Dividing the length of the circumference by the length of the diameter will determine how many diameters are needed to equal the circumference. Do that division and enter the value in the table.

Try it again with a different length starting line.

The little bit more of the 4th diameter that is needed to wrap around a circle is 0.14 of a diameter. While it took 4 diameters off a square to wrap around the square, it only takes [[3.14]] diameters to fit around a circle.

    // HANDS-ON ICON

Now is another great time to step away from your device and try this on any circle at home. Use a ruler to measure the diameter of a circle. Then, wrap a piece of string around the circle and make a mark where the string meets the starting point. Measure this length of string with a ruler. Divide the circumference by the diameter. Do you get a result close to 3.14?

We’ve now established the idea that the circumference of a circle can be found by measuring the diameter of a circle and [[multiplying | dividing]] it by [[ 3.14 | 4 | 5]]. This idea written as a formula is C = 3.14 x D. Let’s add this formula to our toolkit. Since the diameter is [[double | half]] of the radius, we can also measure the radius, double it and then multiply by 3.14. This gives another version of the formula: C = 3.14 x [[2]] x R.

::: column(width=400)

    x-img(src="https://st2.depositphotos.com/2222024/5609/i/950/depositphotos_56093859-stock-photo-happy-little-orange-havanese-puppy.jpg" width=400 height=267)

:::

Now we can accurately calculate the amount of fencing needed to enclose a circle with a diameter of 60 meters. Recall that 180 meters was [[not enough | too much]] fencing. If the diameter is 60, we find the circumference by multiplying 60 by [[3.14]]. The actual circumference is [[188.4]]. If you can only buy fencing whole-meter sections, you should buy [[189]] meters of fencing. Only using 180 meters of fencing as we originally estimated would have left almost a 10 meter opening!

Some of the earliest civilizations have pondered the question of how many diameters are needed to equal the circumference of a circle. A Babylonian clay tablet dated between 1900 BC to 1600 BC described the number of diameters needed to be 3 ⅛, or 3.125. This is only [[0.15]] away from the 3.14 we established above. The Rhind Mathematical Papyrus from around 1650 shows the Greeks used 3.16 as the number of diameters needed. This is only [[0.02]] from 3.14.

::: column(width=600)

    x-img(src="https://media.britishmuseum.org/media/Repository/Documents/2014_10/5_19/595e9f4b_efb3_481a_9257_a3bb013ab718/mid_00366139_001.jpg" width=600 height=109)

:::

The Shatapatha Brahmans, an Indian text from 400-300 BC, shows that Indians used 3.139. This is only [[0.001]] away from 3.14.

It turns out that 3.14 is not the exact number of diameters needed to equal the circumference. In the 3rd century BCE, Greek mathematician Archimedes placed polygons inside and outside of circles to estimate the number to be 3.1418. 400 years later, Greek mathematician Ptolemy used polygons with 360 sides to estimate the number to be 3.1418.

Through the work of these and other mathematicians around the world, the number became more and more precise. When describing this number, mathematicians would say things like “the quantity which, when the diameter is multiplied by it, yields the circumference,” or other wordy descriptions.

In 1706, William Jones, a Welsh mathematician, simplified things by using a letter of the Greek alphabet to stand for this number. The greek work “perimetros” roughly translates to “around” so Jones used the first letter of the word “perimetros.” The Greek alphabet uses different symbols than the English alphabet. In Greek, “perimetros” is written περίμετρος. The first letter of this word is π and pronounced “Pi” in English. Swiss mathematician Leonard Euler popularized the π symbol when he began using it in 1737. It’s just a coincidence that the English pronunciation of the Greek letter π also happens to be the name of a circular dessert!

::: column(width=480)

    x-img(src="https://media.giphy.com/media/3ohjUZawOtwng26rN6/giphy.gif" width=480 height=360)

:::

So what is the exact value of π? Is it 3.14? 3.141? It turns out that mathematicians have discovered patterns and rules that can determine each next digit of π. Today, mathematicians have programs on supercomputers to determine digits of π. Mathematicians currently know over 30 trillion digits after the decimal point! The first 5 digits of π after the decimal are 3.14159. You’ll learn more about the decimal expansion of π in future mathigon chapters. The most commonly used fractional approximation of π is 22/7 or 3 1/7 since this equals 3.142857.

Let’s not let the ever-expanding decimal expansion of π detract from the simplicity here. The number π represents how many diameters of a circle are needed to equal the circumference.

In the rest of this chapter, we’ll use the approximation of 3.14.

We had written the formulas as C = 3.14 x D and C = 3.14 x 2 x [[R | D]]. Now that we know the Greek letter π is used to represent the exact number of diameters needed to equal the circumference, we can replace 3.14 with π in these formulas. C = π x [[ D | R ]] or C = π x [[2] x R. The formulas are often written without the multiplication symbols as follows: C = πD and C = 2πR. Let’s update our toolkit with these versions of the formulas.

Traffic is a concern in cities around the world. In an attempt to keep traffic outside of the city-center, many cities have circular highways going around the city. Let’s explore three examples around the world.

    // INTERACTIVE-06: Circular highways

::: column(width=400)

    x-img(src="https://st4.depositphotos.com/13193824/19879/i/1600/depositphotos_198799636-stock-photo-young-smiling-woman-sunglasses-riding.jpg" width=400 height=292)

:::

An average road bike tire has a diameter of 68 cm. Recall that the distance a tire travels in one revolution is the same as the [[circumference | diameter]] of the tire. In one revolution of the tires of an average road bike, the bike travels [[214]] cm. The loop around Moscow is 15.1 km. This equals 1,510,000 cm. If you were to ride your bike around this loop, your wheels would make about [[7,056]] revolutions!

    // BACK TO INTRODUCTORY TIRE/LAP EXAMPLE

    // DIAGRAM: Track

We are now ready to answer the question from the start of the chapter! Recall that the tires need to be changed after about 52,000 revolutions and that we want to know how many laps around the track equals 52,000 tire revolutions.

The diameter of the tire is [[27]] inches so the circumference is [[85]] inches. 52,000 revolutions gives a distance traveled of [[4,420,000]] inches. This equals about 70 miles.

Now, calculate the distance around 1 lap. The 4 straight sections have a total distance of [[7,920]] feet. Combining the 4 turns of the track creates [[1 | ½ | 2]] circles.

    // ANIMATION-03: Lap distance

The radius of the circle is [[840.8]] feet, so the distance around the circle is [[5,280]] feet. Therefore, the total distance of 1 lap is [[13,200]] feet. This equals 2.5 miles.

Each set of tires last 70 miles and the distance around one lap is 2.5 miles, so the tires should be changed after [[28]] laps. 

The race is called the Indy 500 because cars must drive 500 miles. Each lap is 2.5 miles, so the race is [[200]] laps long. That means there are about [[7]] tire changes over the course of the race. That’s a lot of tires!

Let’s end this chapter with one final question. What do you think is longer - the height of the can of tennis balls or the distance around the can? [[the height of the can | the distance around the can]].

    // IMG

A tennis ball has a diameter of 6.7 cm and the can holds 3 of them with no extra room at the top or the bottom. Therefore, the height of the can is [[20.1]] cm.

The distance around the can is the same as the [[circumference | diameter | radius]] of the cap of the can.

    // IMG

The circumference of the cap is 3.14 x [[D | R]]. The distance around the can is [[21]] cm. The longer distance is the [[distance around the can | height of the can]].

We could have answered this question without doing any calculations! The height of the can is the same as [[3]] diameters of the tennis balls. The distance around the can is 𝞹 [[diameters  radii]]. The number 𝞹 is [[more than | less than]] 3, so the distance around any can (like this can of squash balls) that perfectly holds 3 circular objects is more than the height of that can!

    // IMG

---

## Area of Circles

> section: circle-area
> sectionStatus: dev

    // [TODO]
