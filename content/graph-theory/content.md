# Graphs and Networks

## Introduction

> id: intro-0
> section: introduction
> description: Discover the mathematical principles that connect our world – from shaking hands to travel and navigation, colouring maps and social networks.
> color: "#A7208A"
> level: Intermediate
> next: probability

Every day we are surrounded by countless connections and networks: roads and rail tracks, phone
lines, the internet, electronic circuits and even molecular bonds. There are even _social networks_
between friends and families. Can you think of any other examples?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Road and Rail Networks

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Computer Chips

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Supply Chains

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Friendships

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Neural Connections

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} The Internet

:::

---
> id: intro

::: column.grow

In mathematics, all these examples can be represented as [__graphs__](gloss:graph) (not to be
confused with the _graph_ of a function). A graph consists of certain _points_ called
[[vertices|circles|crossings]], some of which are connected by [[edges|boundaries|pairs]].

__Graph theory__ is the study of graphs and their properties. It is one of the most exciting and
visual areas of mathematics, and has countless important applications.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

We can draw the layout of simple graphs using circles and lines. The position of the vertices and
the length of the edges is irrelevant – we only care about _how they are connected_ to each other.
The edges can even cross each other, and don’t have to be straight.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} In some graphs, the edges only go one way. These are called [__directed
graphs__](gloss:directed-graph).

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Some graphs consist of multiple groups of vertices which are not connected with each
other by edges. These graphs are __disconnected__.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Other graphs may contain multiple edges between the same pairs of vertices, or vertices
which are connected to themselves (loops).

:::

    // TODO maybe include examples of graphs with edges crossing, curved edges, etc.
    // could include an "is this a graph?" quiz

---
> id: intro-2

We can create new graphs from an existing graph by removing some of the vertices and edges. The
result is called a [__subgraph__](gloss:subgraph). Here you can see a few more examples of graphs,
with coloured edges and vertices indicating a possible subgraph:

::: column(width=212 parent="padded-thin")

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

::: column(width=212)

    svg.graph(height=100 width=100 style='float: left; margin-right: 12px')
    svg.graph(height=100 width=100 style='float: left')

:::

---
> id: intro-3

We say that the [__order__](gloss:graph-order) of a graph is the number of vertices it has. The
[__degree__](gloss:graph-degree) of a vertex is the number of edges which meet at that vertex.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Order: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Order: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Degree: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Degree: [[6]]

:::

---
> id: intro-4

Graphs that consist of a single loop of vertices are called [__cycles__](gloss:graph-cycle). All
cycles have [[the same number of edges and vertices|more edges than vertices|fewer edges than
vertices]].

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Equipped with these new definitions, let’s explore some of the fascinating
properties and applications of graphs.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges

## The Bridges of Königsberg

::: column.grow

One of the first mathematicians to think about graphs and networks was [Leonhard
Euler](bio:euler). Euler was intrigued by an old problem regarding the town of
Königsberg near the Baltic Sea.

The river Pregel divides Königsberg into four separate parts, which are
connected by seven bridges. Is it possible to walk around the city crossing all
of the bridges exactly once – but not more than once? (You can start and finish
anywhere, not necessarily in the same place.)

Try to find a valid route by drawing on these maps:

::: column(width=250)

    img.shifted(src="images/konigsberg1.jpg" width=250 height=350)

:::

---
> id: bridges
> goals: bridge-0 bridge-1 bridge-2 bridge-3
> title: The Bridges of Königsberg

    x-tabbox.full-width
      .tab
        h3 Map 1#[span.check.incorrect(when="bridge-0")]
        x-solved
        include svg/bridges-1.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 2#[span.check(when="bridge-1")]
        x-solved
        include svg/bridges-2.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 3#[span.check(when="bridge-2")]
        x-solved
        include svg/bridges-3.svg
        button.btn Clear
        button.btn.right Skip
      .tab
        h3 Map 4 #[span.check.incorrect(when="bridge-3")]
        x-solved
        include svg/bridges-4.svg
        button.btn Clear
        button.btn.right Skip

---
> id: bridges-1

In the case of Königsberg it seems to be impossible to find a valid route, but
some of the other cities do work. Euler managed to find a simple rule that can
be applied to any city, without having to try lots of possibilities – using
graph theory.

::: column.grow

First, we need to convert the city maps into graphs with edges and vertices.
Every island or region of land is represented by [[a vertex|an edge|an area]]
and every bridge connecting two regions is represented by a corresponding
[[edge|vertex|street]].

{.reveal(when="blank-0 blank-1")} Now the problem of “touring a city while
crossing every bridge exactly once” has become a problem of “drawing a graph
with one continuous stroke while tracing every edge exactly once”.
::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

On paper, come up with a few different graphs and then try to work out which
ones can be drawn with a single, continuous stroke.

    // p Try drawing these graphs with one continuous stroke:
    // p.todo Interactive coming soon…

---
> id: bridges-3
> goals: size prime eo

Just like for the city maps before, we find that some graphs are possible while
others are not. To help us understand why, let us label every vertex with its
[degree](gloss:graph-degree). Then we can colour the vertices in different ways,
and try to reveal a pattern:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Value
        div(value="size") Size
        div(value="prime") Prime Numbers
        div(value="eo") Even and Odd
      .box
        p.no-voice(style="margin: 0"): strong These graphs are possible:
        include svg/vertex-orders-1.svg
        p.no-voice(style="margin: 1em 0 0"): strong These graphs are not possible:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

Comparing these numbers for graphs which are possible, and those which are not
possible, it seems that a graph can be drawn if it [[has no more than two “odd”
vertices|only has “even” vertices|has no vertices with an order larger than
4|has an odd number of vertices|has no vertices of order 3]]. This condition can
be explained if we look at just a single vertex in the graph:

::: x-slideshow

    .stage(slot="stage"): include svg/konigsberg-proof.svg

Here you can see a single, magnified vertex in a graph.

If we draw the graph, we will eventually have an edge leading towards this vertex, and then another
one leading away. This makes two edges meeting at the vertex.

Maybe the vertex is a crossing rather than a corner. In that case there will be another edge leading towards the vertex, and another edge leading away. Now we have four edges.

And in some graphs, there may even be a third pair of edges leading towards and away from the vertex. Now there are six edges.

Notice that, either way, there always is an even number of edges meeting at the vertex.

The only two exceptions are the vertices where the path starts, and where it ends – these two may have an odd number of edges. If the start and end point are the same, all vertices in the graph are even.

:::

---
> id: bridges-5

::: column.grow(parent="right")

If you scroll back to the map of Königsberg, you will find that there are more
than two islands with an odd number of bridges. Therefore, a route that crosses
every bridge exactly once is indeed impossible – and this is what Leonard Euler
discovered.

Euler’s discovery may not seem particularly useful in real life, but graphs are
at the foundation of many other geographic problems, such as finding directions
between two locations. We will discover more of these applications later.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes

## Handshakes and Dating

::: column.grow

You have been invited to a wonderful birthday party with your friends. Including yourself and the
host, there are ${hnd}{hnd|5|3,15,1} people present.

In the evening, as the guests get ready to leave, everyone shakes hands with everyone else. How
many handshakes are there in total?

We can represent the handshakes using a graph: every person is [[a vertex|an edge]],
and every handshake is [[an edge|a vertex]].

{.reveal(when='blank-0 blank-1')} Now it is easy to count the number of edges in the graph. We find
that with ${hnd} people, there are ${hnd*(hnd-1)/2} handshakes.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Rather than counting all the edges in large graphs, we could also try to find a
simple formula that tells us the result for _any_ number of guests.

Each of the ${n}{n|5|2,8,1} people at the party shakes hands with ${n-1} others.
That makes ${n} × ${n-1} = ${n×(n-1)} handshakes in total. For _n_ people, the
number of handshakes would be [[`n×(n–1)`|`n×(n+1)`|`n^2`]].

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Unfortunately this answer is not quite right. Notice how [the first two entries on the top
row](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) are
actually the same, just flipped around.

In fact, we have counted every handshake [[twice|once|three times]], _{span.reveal(when="blank-0")}
once for each of the two people involved. This means that the correct number of handshakes for
${n}{n|5|2,25,1} guests is `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")`._

---
> id: handshakes-3

The handshake graphs are special because every vertex is connected to every
other vertex. Graphs with this property are called __complete graphs__. The
complete graph with 4 vertices is often abbreviated as `K_4`, the complete graph
with 5 vertices is known as `K_5`, and so on.

We have just shown that a complete graph with `n` vertices, `K_n`, has
`(n × (n-1))/2` edges.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

On a different day, you are invited to a speed dating event for ${m}{m|5|2,8,1}
boys and ${f}{f|4|2,8,1} girls. There are many small tables and every boy spends
5 minutes with each of the girls. How many individual “dates” are there in total?

::: column.grow

In this case, the corresponding graph consists of two separate sets of vertices. Every vertex is
connected to all the vertices in [[the opposite|its own]] set, but none of the vertices in
[[its own|the opposite]] set. Graphs which have this layout are called __bipartite graphs__.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} The bipartite graph with two sets of size _x_ and _y_ is often
written as `K_"x,y"`. It has [[`x×y`|`x+y`|`2x–y`]] edges, _{span.reveal(when="blank-2")} which
means that in the above example there are ${m} × ${f} = ${m×f} dates._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Planar Graphs

::: column.grow

Here is another puzzle that is related to graph theory.

In a small village there are three houses and three utility plants that produce water, electricity
and gas. We have to connect each of the houses to each of the utility plants, but due to the layout
of the village, the different pipes and cables are not allowed to cross.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Try to connect each of the houses to each of the utility companies below, without any of your lines
intersecting:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Just like the Königsberg bridges before, you quickly discover that this problem
is also impossible. It seems that some graphs can be drawn without overlapping
edges – these are called __planar graphs__ – but others cannot.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` is planar.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[is planar|is not planar]].

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[is not planar|is planar]].

:::

---
> id: utilities-2

The [complete graph](gloss:complete-graph) `K_5` is the smallest graph that is
not planar. Any other graph that contains `K_5` as a subgraph in some way is
also not planar. This includes `K_6`, `K_7`, and all larger complete graphs.

The graph in the three utilities puzzle is the [bipartite graph](gloss:bipartite-graph) `K_"3,3"`.
It turns out that any non-planar graph must either contain a `K_5` or a `K_"3,3"` (or a
[subdivision](gloss:subdivision) of these two graphs) as a subgraph. This is called _Kuratowski’s
theorem_.

    // TODO Add bio of Kazimierz Kuratowski

---
> id: planarity
> goals: planarity

::: .box.blue

#### Planarity

    x-solved
    svg#planarity(viewBox="0 0 720 360")

This is a planar graph, but the ${n}{n|7|5,20,1} vertices have been scrambled up. Rearrange the
vertices so that none of the edges overlap.

    p.btn-row: button.btn New Random Graph
    // TODO Maybe mention that the restriction to straight line edges in the Planarity puzzle isn't
    // a restriction that matters (Fáry's Theorem).

:::

---
> id: euler

### Euler’s Formula

All planar graphs divide the plane they are drawn on into a number of areas,
called __faces__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vertices<br>
[[5]] Faces<br>
[[10]] Edges<br>
_{span.euler-sum} 11 Vertices + Faces_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Vertices<br>
[[7]] Faces<br>
[[14]] Edges<br>
_{span.euler-sum} 15 Vertices + Faces_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Vertices<br>
[[13]] Faces<br>
[[24]] Edges<br>
_{span.euler-sum} 25 Vertices + Faces_

:::

---
> id: euler-1

When comparing these numbers, you will notice that the number of edges is always
[[one less|bigger|the same]] than the number of faces plus the number of
vertices. In other words, _{.b.m-blue}F_ + _{.b.m-green}V_ = _{.b.m-red}E_ + 1. This
result is called __Euler’s equation__ and is named after the same
[mathematician](bio:euler) who solved the Königsberg Bridges problem.

Unfortunately, there are infinitely many graphs, and we can’t check every one to
see if Euler’s equation works. Instead, we can try to find a simple
[proof](gloss:proof) that works for any graph…

---
> id: euler-2

::: x-slideshow

    .stage(slot="stage")
      svg(viewBox="0 0 640 200")
        line.link(style="stroke-width: 3px; display: none" x1=270 y1=30  x2=150 y2=100)
        line.link(style="stroke-width: 3px; display: none" x1=150 y1=100 x2=270 y2=170)
        line.link(style="stroke-width: 3px; display: none" x1=270 y1=170 x2=390 y2=100)
        line.link(style="stroke-width: 3px" x1="390" y1="100" x2="270" y2="30")
        circle.node(cx=270 cy=30  r=7)
        circle.node(cx=150 cy=100 r=7 style="display: none")
        circle.node(cx=270 cy=170 r=7 style="display: none")
        circle.node(cx=390 cy=100 r=7 style="display: none")

      .euler-table
        table.grid.table-small
          tr
            td: strong.m-blue.i F
            td: strong.m-green.i V
            td: strong.m-red.i E
          tr
            td.xf 0
            td.xv 1
            td.xe 0
        p.no-voice #[strong.m-blue.xf 0] + #[strong.m-green.xv 1] &nbsp;=&nbsp; #[strong.m-red.xe 0] + 1

The simplest graph consists of a single vertex. We can easily check that Euler’s equation works.

Let us add a new vertex to our graph. We also have to add an edge, and Euler’s equation still works.

If we want to add a third vertex to the graph we have two possibilities. We could create a small
triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.

Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler’s
equation works.

Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face.
Euler’s equation still works.

:::

---
> id: euler-3

Any (finite) graph can be constructed by starting with one vertex and adding
more vertices one by one. We have shown that, whichever way we add new vertices,
Euler’s equation is valid. Therefore, it is valid for all graphs.

The process we have used is called __mathematical induction__. It is a very
useful technique for proving results in infinitely many cases, simply by
starting with the simplest case, and showing that the result holds at every
step when constructing more complex cases.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Many planar graphs look very similar to the nets of [polyhedra](gloss:polyhedron),
three-dimensional shapes with [polygonal](gloss:polygon) faces. If we think of
polyhedra as made of elastic bands, we can imagine stretching them out until
they become flat, planar graphs:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

This means that we can use Euler’s formula not only for planar graphs but
also for all polyhedra – with one small difference. When transforming the
polyhedra into graphs, one of the faces disappears: the topmost face of the
polyhedra becomes the “outside”; of the graphs.

In other words, if you count the number of __{.m-red}edges__, __{.m-blue}faces__ and
__{.m-green}vertices__ of _any_ polyhedron, you will find that _{.b.m-blue}F_ +
_{.b.m-green}V_ = _{.b.m-red}E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosahedron__<br>
__{.m-blue}20__ Faces<br>
__{.m-green}12__ Vertices<br>
__{.m-red}30__ Edges

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__<br>
__{.m-blue}62__ Faces<br>
__{.m-green}60__ Vertices<br>
__{.m-red}120__ Edges

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Truncated Icosahedron__<br>
__{.m-blue}32__ Faces (12 black, 20 white)<br>
__{.m-green}60__ Vertices<br>
__{.m-red}90__ Edges

:::

---
> id: maps
> section: map-colouring

## Map Colouring

::: column.grow

We have already used graph theory with certain maps. As we zoom out, individual
roads and bridges disappear and instead we see the outline of entire countries.

When colouring a map – or any other drawing consisting of distinct regions –
adjacent countries cannot have the same colour. We might also want to use as few
different colours as possible.

Some simple “maps”, like a chessboard, only need two colours (black and white),
but most complex maps need more.

::: column(width=240 style="margin-top: -10px")

    x-img(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

When colouring the map of US states, 50 colours are obviously enough, but far
fewer are necessary. Try colouring the maps below with as few colours as
possible:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        .colour-count(style="margin-bottom: -32px") #[span 0] colours used
        include svg/colours-1.svg
        button.btn.clear Clear
        // Note that states or countries which only share a corner are allowed to have the same colour.
        // Alaska and Hawaii are isolated from all of the other states and can have any colour.
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-2.svg
        button.btn.clear Clear
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-3.svg
        button.btn.clear Clear
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        .colour-count #[span 0] colours used
        include svg/colours-4.svg
        button.btn.clear Clear

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

All of these maps can be coloured with only four different colours, but it is
not hard to imagine that other, very complicated maps might need many more
colours. In fact, some maps need __at least__ four colours, whenever they
contain four countries all connected to each other.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Like before, we can convert a map with countries and borders into a planar
graph: every country becomes [[a vertex|an edge|a face]], and countries which
[[share a border|have the same colour]] get connected by an edge:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Now we want to colour the vertices of a graph,
and two vertices must have a different colour if they are connected by an edge.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

In 1852, the botany student [Francis Guthrie](bio:guthrie) had to colour a map
of counties in England. He observed that four colours seemed to suffice for any
map he tried, but he was not able to find a proof that worked for _all_ maps.
This turned out to be an extremely difficult problem, and became known as the
__four colour theorem__.

During the following 100 years, many mathematicians published “proofs” to the
four colour theorem, only for mistakes to be found later. Some of these invalid
proofs were so convincing that it took more than 10 years to discover errors.

For a long time, mathematicians were unable to either prove that four colours
are enough, or to find a map that needed more than four colours.

:::

---
> id: maps-4

Little progress was made on the four colour problem until 1976, when [Wolfgang
Haken](bio:haken) and [Kenneth Appel](bio:appel) used a computer to finally
solve it. They reduced infinitely many possible maps to 1936 special cases,
which were each checked by a computer taking over 1000 hours in total.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

The __four colour theorem__ is the first well-known mathematical theorem to be
proven using a computer, something that has become much more common and less
controversial since. Faster computers and a more efficient algorithm mean that
today you can prove the four colour theorem on a laptop in just a few hours.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

The four colour theorem only works for maps on a flat plane or a sphere, and
where all countries consist of a single area.

However, mathematicians have also looked at maps of _empires_, where countries
can consist of multiple disconnected components, and at maps on
differently-shaped planets, such as a torus (doughnut shape). In these cases you
may need more than four colours, and the proofs become even more difficult.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman

## The Travelling Salesman Problem

::: column.grow(parent="right")

Let us think, once more, about networks and maps. Imagine that a delivery
service has to visit ${tsn}{tsn|8|2,50,1} different cities to distribute
parcels. We can think of these cities as the vertices in a graph. If all the
cities are connected by roads, this is a [[complete graph|cycle|bipartite graph]],
so there are `(var("tsn") × (var("tsn") – 1)) / 2 = var("tsn*(tsn-1)/2")` edges in total.

The delivery truck has to visit all cities, in any order. In the Königsberg
bridges problem we wanted to find paths which travel along _every edge_ exactly
once. Now we want to find paths which visit _every vertex_ exactly once. These
paths are called __Hamiltonian cycles__.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

There are countless different possibilities for Hamiltonian cycles in complete
graphs. In fact, we can pick any vertex as starting vertex and then pick any of
the remaining cities in any order:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

In a graph with ${tsn1}{tsn1|4|2,10,1} cities, every Hamiltonian cycle must also
contain ${tsn1} cities. Now,

    ul.var(:html="tsmString(tsn1)")

This means that, in total, there are ${tsnPaths(tsn1)} possible paths. A
shorthand for this product is ${tsn1}! or ${tsn1} __Factorial__.

You could imagine that it might not be possible to travel directly between two
cities - without going via another city. In that case we no longer have a
complete graph, and finding the number of Hamiltonian cycles, if they exist at
all, becomes much more difficult.

---
> id: salesman-3

::: column.grow(parent="right")

So far we have ignored the fact that some cities might be further apart than
others. In real life, however, this is a very important consideration: we don’t
just want to find _any_ path but we want to find the shortest one. This is
called the __Travelling Salesman Problem__. It has to be solved not only in
transportation and logistics, but also when positioning transistors on
microchips, to make faster computers, or when analysing the structure of
[DNA](gloss:dna).

One simple method would be to try all possible paths, finding the length of
each, and then picking the shortest one. However we have just shown that, even
with just ${tsn2}{tsn2|10|2,20,1} cities there are ${tsn2}! = ${factorial(tsn2)}
possible paths. Once you have hundreds or thousands of vertices, trying all
possible paths becomes impossible, even using powerful computers.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Unfortunately, there is no more efficient algorithm to solve the travelling
salesman problem. Instead, mathematicians and computer scientists have developed
various algorithms that find _good_ solutions, even if they may not be the very
best one. These algorithms, which only give approximate solutions, are called
__Heuristics__.

Try rearranging the cities on this map, and watch how the shortest path between
them changes. You can remove cities by tapping them, and you can add cities by
clicking anywhere on the map (up to 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

The __Greedy Algorithm__ (or Nearest Neighbour Algorithm) is very simple: you
start in a random city and consecutively move to the closest city you haven’t
visited before. Once you have visited all cities, you stop.

::: column(width=300)

{.todo} Animation coming soon…

:::

You can show that, on average, paths found using the greedy algorithm are 25% longer than the shortest possible path.

---
> id: salesman-6

::: column.grow

The __2-Opt Algorithm__ starts with a random possible path. Then you repeatedly
pick two edges and swap them around if that would reduce the length of the path.
You stop when you can't reduce the length further by swapping any pairs of
edges.

::: column(width=300)

{.todo} Animation coming soon…

:::

---
> id: ants

It turns out that, long before computers even existed, Nature had found a clever
way to find optimal paths between different locations: in ant colonies.

    x-parallax.full-width(background="images/ants.jpg")

Ants want to find the shortest possible routes between their nest and possible
food sources. They can communicate with each other through chemicals which they
leave along their trail, and which other ants can follow.

---
> id: ants-1

::: column.grow

* The ant colony sends out many scouts which initially travel in random
  directions. Once they find food, they return, leaving behind a trail of
  pheromone.
* Other ants tend to follow a trail when they find one, which leads them to
  food. On their return journey they deposit more pheromone, thus reinforcing
  the trail.
* Over time, pheromone evaporates. The longer a path is, the more time it takes
  ants to travel along it, and so the pheromone has more time to evaporate.
  Short paths, on the other hand, can get reinforced more quickly, so their
  strength increases faster.

::: column(width=240)

{.todo} Diagram coming soon…

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Ant Colony System (ACS) algorithms try to replicate this behaviour on computers,
using many “virtual” ants. They can quickly find very good solutions for the
travelling salesman problem.

One particularly useful property of ACS algorithms is that they can run
continuously and adapt in real time to changes to the graph. These changes could
be caused by car accidents and road closures on street networks, or by traffic
spikes to web servers on computer networks.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

The Travelling Salesman problem is [NP-hard](gloss:np), which means that it is
very difficult to be solved by computers (at least for large numbers of cities).

Finding a fast and exact algorithm would have serious implications in the field
of computer science: it would mean that there are fast algorithms for _all_
NP-hard problems. It would also render most of Internet security useless, which
relies on the fact that certain problems are believed to be very difficult for
computers.

Finding a fast algorithm to solve the Travelling Salesman problem would also
solve one of the most famous open problems in mathematics and computer science,
the __P vs NP__ problem. It is one of the seven [Millennium Prize
Problems](gloss:millennium-prize), each carrying a \$1m prize.

:::

---
> section: scheduling
> sectionStatus: dev

## Scheduling Problems

{.todo} Coming Soon

---
> id: applications
> section: applications

## Graphs in Everyday Life

We have seen many different applications of graph theory in the previous chapters, although some of
them were a bit contrived. However, it turns out that graphs are at the very foundation of many
objects, concepts and processes in everyday life.

::: column.grow

The Internet, for example, is a vast, virtual graph. Every vertex is an
individual webpage, and every edge means that there is a hyperlink between two
pages. Note that links only go one way, so this graph is
[[directed|multi-line|conected]], and that this graph is _very, very, large_.

    // * "can be viewed as" instead of "is a vast, virtual graph". "Every
    // vertex represens an individual webpage and every edge a hyperlink
    // from one page to another".

Some websites, like Wikipedia or Facebook, have lots of incoming links, while
many smaller websites may have very few incoming links. This is the underlying
concept which Google uses to sort search results.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Websites with more incoming links tend to be of higher quality and should be
shown at the top of the search results. For example, when searching for “London”,
official tourist information sites are shown before small shops in London, or
blogs of people who live in London. This simple idea from graph theory, the
__Page Rank Algorithm__, made Google much better than other early
search engines.

---
> id: applications-2

The Internet is the largest network ever created by mankind. This image shows a
very small proportion of all the servers connected to the Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

While websites and hyperlinks form a _virtual_ graph, there is also the
_physical_ network of computers, servers, routers, phone lines and cables.

::: column.grow(parent="right")

Every time you make a phone call or load a website, network operators have to
find a way to connect sender and receiver, without exceeding the capacity of any
individual cable or connection. Graph theory and probability make it possible to
guarantee a reliable service, for example by finding diversions when a
particular connection is busy.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Graphs also play an important role in transportation and navigation. All flight,
train and subway networks form graphs, which can be used when creating efficient
schedules. One of the most recognisable graphs is the London Underground map:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

All roads and motorways also form a large network, which is used by navigation
services like Google Maps when working out the shortest route between two given
points.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::
::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

In the future, __Intelligent Transportation Systems__ will reduce congestion and
accidents by routing cars more efficiently, using location data collected from
smartphones and self-driving cars. This could save millions of hours lost on the
road every year, significantly reduce pollution, and allow emergency services to
travel faster.

:::

---
> id: applications-6

This image shows the network of commercial airline flights across northern Europe.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

There are countless other graphs in science, engineering or everyday life:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} The links between atoms in __molecules__ and crystal grids form a graph.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} The __spread of diseases__ and epidemics can be modelled using a network.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} In Biology, the __evolutionary trees__ that show the ancestry of
species form a graph.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} The different components of __electric circuits__ and computer chips
form a network.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} The grammatical structure of __languages__ can be modelled using
graphs, for example to create translation algorithms.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Graphs also have many applications in __probability__, __game
theory__ and __financial mathematics__.

:::

---
> id: social

### Social Networks

Finally, let us think about one particularly good example of graphs which exist
in everyday life: social media. Here, vertices represent [[people|friends|networks]]
and edges represent friendships, likes, subscriptions or followers.

When we draw social media graphs, we might see certain __clusters__ of mutual friends, who may have
gone to the same school or live in the same city. We can also determine people’s __centrality__,
which depends on how well-connected a vertex is, and which may be a measure of a person’s
popularity on social media.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

In 2014, Facebook had 1.4 billion active users and a total of more than 200
billion friendships. Half of all Facebook users have more than 200 friends, and
since most of our friends have a similar number of friends, we could easily have
tens of thousands of _friends of friends_.

An exciting question would now be: if you pick any two random Facebook users,
how many “friendship edges” would you need to follow to get from one to the
other? For example, the distance between friends is [[1]], the distance between
friends of friends is [[2]], and so on.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

In 2016, Facebook conducted [a study](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/)
to determine how its users are connected to each other. They found that, on average, you are
connected to _anyone else_ on Facebook through at most 3.57 other people. And this includes
celebrities, politicians or even royalty!

In other words, if you pick any one of the billions of Facebook users all around the world, they
will probably have a friend of a friend who knows a friend of one of your friends.  We say there are
3.57 __degrees of separation__.

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

In 1929, when the Hungarian author [Frigyes Karinthy](bio:karinthy) first
proposed the idea of “six degrees of Separation”, there was no Internet or
social media, but the world had already started to become more interconnected.

In 1967, [Stanley Milgram](bio:milgram) conducted a first empirical experiment,
where 296 participants living in Nebraska and Kansas were asked to deliver a
letter to a particular person living in Boston, Massachusetts. They all had to
choose a friend to send the letter to, who then picked another friend. At every
step, the letter moved closer to Boston. Milgram found that there were, on
average, only 5.2 intermediate friends &#8211; 5.2 degrees of separation.

:::

Today, every one of us is part of countless invisible graphs, which underlie our
social interactions, travel, Internet and technology, science, and so much more.
