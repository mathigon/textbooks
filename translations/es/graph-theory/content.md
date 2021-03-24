# Gráficos y Redes

## Introducción

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability
> translated: auto

Todos los días estamos rodeados de innumerables conexiones y redes: carreteras y vías férreas, líneas telefónicas, Internet, circuitos electrónicos e incluso enlaces moleculares. Incluso hay _redes sociales_ entre amigos y familiares. ¿Se te ocurren otros ejemplos?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Redes de carreteras y ferrocarriles

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Chips de ordenador

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Cadenas de suministro

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Amistades

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Conexiones neuronales

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} La Internet

:::

---
> id: intro

::: column.grow

En matemáticas, todos estos ejemplos pueden representarse como [__gráficos__](gloss:graph) (no confundir con el _gráfico_ de una función). Un gráfico consta de ciertos _puntos_ llamados [[vértices. | círculos | cruces]] , algunos de los cuales están conectados por [[bordes | límites | pares]] .

__La teoría de grafos__ es el estudio de los grafos y sus propiedades. Es una de las áreas más emocionantes y visuales de las matemáticas, y tiene innumerables aplicaciones importantes.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Podemos dibujar el diseño de gráficos simples usando círculos y líneas. La posición de los vértices y la longitud de los bordes es irrelevante: solo nos importa _cómo están conectados_ entre sí. Los bordes incluso pueden cruzarse entre sí, y no tienen que ser rectos.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} En algunos gráficos, los bordes solo van en una dirección. Estos se llaman [__gráficos dirigidos__](gloss:directed-graph) .

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Algunos gráficos consisten en múltiples grupos de vértices que no están conectados entre sí por bordes. Estos gráficos están __desconectados__ .

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Otros gráficos pueden contener múltiples aristas entre los mismos pares de vértices, o vértices que están conectados entre sí (bucles).

:::

---
> id: intro-2

Podemos crear nuevos gráficos a partir de un gráfico existente eliminando algunos de los vértices y bordes. El resultado se llama [__subgrafo__](gloss:subgraph) . Aquí puede ver algunos ejemplos más de gráficos, con bordes y vértices de colores que indican un posible subgrafo:

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

Decimos que el [__orden__](gloss:graph-order) de un gráfico es el número de vértices que tiene. El [__grado__](gloss:graph-degree) de un vértice es el número de aristas que se encuentran en ese vértice.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Orden: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Orden: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grado: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grado: [[6]]

:::

---
> id: intro-4

Los gráficos que consisten en un solo bucle de vértices se denominan [__ciclos__](gloss:graph-cycle) . Todos los ciclos tienen [[el mismo número de aristas y vértices. | más aristas que vértices | menos aristas que vértices]] .

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Equipado con estas nuevas definiciones, exploremos algunas de las fascinantes propiedades y aplicaciones de los gráficos.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Los puentes de Königsberg

::: column.grow

Uno de los primeros matemáticos en pensar en gráficos y redes fue [Leonhard Euler](bio:euler) . Euler estaba intrigado por un viejo problema relacionado con la ciudad de Königsberg, cerca del mar Báltico.

El río Pregel divide Königsberg en cuatro partes separadas, que están conectadas por siete puentes. ¿Es posible caminar por la ciudad cruzando todos los puentes exactamente una vez, pero no más de una vez? (Puede comenzar y terminar en cualquier lugar, no necesariamente en el mismo lugar).

Intenta encontrar una ruta válida dibujando en estos mapas:

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

En el caso de Königsberg parece imposible encontrar una ruta válida, pero algunas de las otras ciudades sí funcionan. Euler logró encontrar una regla simple que se puede aplicar a cualquier ciudad, sin tener que probar muchas posibilidades, utilizando la teoría de grafos.

::: column.grow

Primero, necesitamos convertir los mapas de la ciudad en gráficos con bordes y vértices. Cada isla o región de tierra está representada por [[un vértice | un borde | un área]] y cada puente que conecta dos regiones está representado por un [[borde]] correspondiente [[| vértice | calle]]

{.reveal(when="blank-0 blank-1")} Ahora el problema de "recorrer una ciudad mientras se cruza cada puente exactamente una vez" se ha convertido en un problema de "dibujar un gráfico con un trazo continuo y trazar cada borde exactamente una vez".

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

En el papel, crea algunos gráficos diferentes y luego trata de determinar cuáles se pueden dibujar con un solo trazo continuo.

---
> id: bridges-3
> goals: size prime eo

Al igual que en los mapas de la ciudad antes, encontramos que algunos gráficos son posibles mientras que otros no. Para ayudarnos a entender por qué, etiquetemos cada vértice con su [grado](gloss:graph-degree) . Luego podemos colorear los vértices de diferentes maneras e intentar revelar un patrón:

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

Al comparar estos números para los gráficos que son posibles y los que no son posibles, parece que se puede dibujar un gráfico si no [[tiene más de dos vértices "impares" | solo tiene vértices "pares" | no tiene vértices con un orden superior a 4 | tiene un número impar de vértices | no tiene vértices de orden 3]] . Esta condición puede explicarse si observamos solo un vértice único en el gráfico:

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Here you can see a single, magnified vertex in a graph.
      .legend(slot="legend") If we draw the graph, we will eventually have an edge leading towards this vertex, and then another one leading away. This makes two edges meeting at the vertex.
      .legend(slot="legend") Maybe the vertex is a crossing rather than a corner. In that case there will be another edge leading towards the vertex, and another edge leading away. Now we have four edges.
      .legend(slot="legend") And in some graphs, there may even be a third pair of edges leading towards and away from the vertex. Now there are six edges.
      .legend(slot="legend") Notice that, either way, there always is an even number of edges meeting at the vertex.
      .legend(slot="legend") The only two exceptions are the vertices where the path starts, and where it ends – these two may have an odd number of edges. If the start and end point are the same, all vertices in the graph are even.

---
> id: bridges-5

::: column.grow(parent="right")

Si regresa al mapa de Königsberg, encontrará que hay más de dos islas con un número impar de puentes. Por lo tanto, una ruta que cruza cada puente exactamente una vez es realmente imposible, y esto es lo que descubrió Leonard Euler.

El descubrimiento de Euler puede no parecer particularmente útil en la vida real, pero los gráficos son la base de muchos otros problemas geográficos, como encontrar direcciones entre dos ubicaciones. Descubriremos más de estas aplicaciones más adelante.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## Apretones de manos y citas

::: column.grow

Has sido invitado a una maravillosa fiesta de cumpleaños con tus amigos. Incluyéndote a ti y al anfitrión, hay ${hnd}{hnd|5|3,15,1} personas presentes

Por la noche, cuando los invitados se preparan para partir, todos se dan la mano con todos los demás. ¿Cuántos apretones de manos hay en total?

Podemos representar los apretones de manos usando un gráfico: cada persona es [[un vértice | una ventaja]] , y cada apretón de manos es [[una ventaja | un vértice]]

{.reveal(when='blank-0 blank-1')} Ahora es fácil contar el número de aristas en el gráfico. Encontramos que allí con ${hnd} gente, hay ${hnd*(hnd-1)/2} apretones de manos

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

En lugar de contar todos los bordes en gráficos grandes, también podríamos tratar de encontrar una fórmula simple que nos diga el resultado para _cualquier_ número de invitados.

Cada una de las ${n}{n|5|2,8,1} la gente en la fiesta se da la mano con ${n-1} otros. Lo que hace ${n} × ${n-1} = ${n×(n-1)} apretones de manos en total. Para _n_ personas, la cantidad de apretones de manos sería [[`n×(n–1)`|`n×(n+1)`|`n^2`]] .

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Lamentablemente, esta respuesta no es del todo correcta. Date cuenta cómo [las dos primeras entradas en la fila superior](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) en realidad son lo mismo, solo volteado.

De hecho, hemos contado cada apretón de manos [[dos veces | una vez | tres veces]] _{span.reveal(when="blank-0")} una vez para cada una de las dos personas involucradas. Esto significa que la cantidad correcta de apretones de manos para ${n}{n|5|2,25,1} invitados es `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._

---
> id: handshakes-3

Los gráficos de apretón de manos son especiales porque cada vértice está conectado a cualquier otro vértice. Los gráficos con esta propiedad se llaman __gráficos completos__ . El gráfico completo con 4 vértices a menudo se abrevia como `K_4` , el gráfico completo con 5 vértices se conoce como `K_5` , y así.

Acabamos de mostrar que un gráfico completo con `n` vértices `K_n` , tiene `(n × (n-1))/2` bordes

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

En un día diferente, estás invitado a un evento de citas rápidas para ${m}{m|5|2,8,1} chicos y ${f}{f|4|2,8,1} muchachas. Hay muchas mesas pequeñas y cada niño pasa 5 minutos con cada una de las niñas. ¿Cuántas "fechas" individuales hay en total?

::: column.grow

En este caso, el gráfico correspondiente consta de dos conjuntos separados de vértices. Cada vértice está conectado a todos los vértices en [[el lado opuesto. | su propio]] conjunto, pero ninguno de los vértices en [[sí mismo | El]] conjunto [[opuesto]] . Los gráficos que tienen este diseño se denominan __gráficos bipartitos__ .

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} El gráfico bipartito con dos conjuntos de tamaño _x_ e _y a_ menudo se escribe como `K_"x,y"` . Tiene [[`x×y`|`x+y`|`2x–y`]] bordes, _{span.reveal(when="blank-2")} lo que significa que en el ejemplo anterior hay ${m} × ${f} = ${m×f} fechas._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Gráficos Planos

::: column.grow

Aquí hay otro rompecabezas relacionado con la teoría de grafos.

En un pequeño pueblo hay tres casas y tres plantas de servicios públicos que producen agua, electricidad y gas. Tenemos que conectar cada uno de los cursos a cada una de las plantas de servicios públicos, pero debido al diseño de la aldea, no se permite cruzar las diferentes tuberías y cables.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Intente conectar cada una de las casas a cada una de las compañías de servicios a continuación, sin que ninguna de sus líneas se crucen:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Al igual que los puentes de Königsberg, descubres rápidamente que este problema también es imposible. Parece que algunos gráficos se pueden dibujar sin bordes superpuestos, estos se llaman __gráficos planos__ , pero otros no.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` es plano

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[es plano | No es plano]] .

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[no es plano | es plano]]

:::

---
> id: utilities-2

El [gráfico completo](gloss:complete-graph) `K_5` es el gráfico más pequeño que no es plano. Cualquier otro gráfico que contenga `K_5` como subgrafo de alguna manera tampoco es plano. Esto incluye `K_6` , `K_7` , y todos los gráficos completos más grandes.

El gráfico en el rompecabezas de las tres utilidades es el [gráfico bipartito](gloss:bipartite-graph) `K_"3,3"` . Resulta que cualquier gráfico no plano debe contener un `K_5` o un `K_"3,3"` (o una [subdivisión](gloss:subdivision) de estos dos gráficos) como un subgrafo. Esto se llama _teorema de Kuratowski_ .

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planaridad

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Este es un gráfico plano, pero el ${n}{n|7|5,20,1} vértices han sido revueltos. Reorganice los vértices para que ninguno de los bordes se superponga.

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Fórmula de Euler

Todos los gráficos planos dividen el plano en el que se dibujan en varias áreas, llamadas __caras__ .

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] vértices
[[5]] caras
[[10]] bordes
_{span.euler-sum} 11 vértices + caras_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] vértices
[[7]] caras
[[14]] bordes
_{span.euler-sum} 15 vértices + caras_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] vértices
[[13]] caras
[[24]] bordes
_{span.euler-sum} 25 vértices + caras_

:::

---
> id: euler-1

Al comparar estos números, notará que el número de aristas es siempre [[uno menos | más grande | lo mismo]] que el número de caras más el número de vértices. En otras palabras, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Este resultado se llama __ecuación de Euler__ y lleva el nombre del mismo [matemático](bio:euler) que resolvió el problema de los puentes de Königsberg.

Desafortunadamente, hay infinitos gráficos y no podemos verificar cada uno para ver si la ecuación de Euler funciona. En cambio, podemos intentar encontrar una [prueba](gloss:proof) simple que funcione para cualquier gráfico ...

---
> id: euler-2

    x-slideshow
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
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p.no-voice #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler’s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler’s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler’s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---
> id: euler-3

Se puede construir cualquier gráfico (finito) comenzando con un vértice y agregando más vértices uno por uno. Hemos demostrado que, independientemente de la forma en que agreguemos nuevos vértices, la ecuación de Euler es válida. Por lo tanto, es válido para todos los gráficos.

El proceso que hemos usado se llama __inducción matemática__ . Es una técnica muy útil para probar resultados en infinitos casos, simplemente comenzando con el caso más simple y mostrando que el resultado se cumple en cada paso cuando se construyen casos más complejos.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Muchos gráficos planos se parecen mucho a las redes de [poliedros](gloss:polyhedron) , formas tridimensionales con caras [poligonales](gloss:polygon) . Si pensamos que los poliedros están hechos de bandas elásticas, podemos imaginar estirarlos hasta que se conviertan en gráficos planos y planos:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Esto significa que podemos usar la fórmula de Euler no solo para gráficos planos sino también para todos los poliedros, con una pequeña diferencia. Al transformar los poliedros en gráficos, una de las caras desaparece: la cara superior del poliedro se convierte en el "exterior"; de los gráficos.

En otras palabras, si cuenta el número de __{.red} bordes__ , __{.blue} caras__ y __{.green} vértices__ de _cualquier_ poliedro, encontrarás que _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] .

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosaedro__
__{.blue} 20__ caras
__{.green} 12__ vértices
__{.red} 30__ bordes

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rombicosidodecaedro__
__{.blue} 62__ caras
__{.green} 60__ vértices
__{.red} 120__ bordes

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Icosaedro Truncado__
__{.blue} 32__ caras (12 negras, 20 blancas)
__{.green} 60__ vértices
__{.red} 90__ bordes

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Mapa para colorear

::: column.grow

Ya hemos usado la teoría de grafos con ciertos mapas. A medida que nos alejamos, desaparecen carreteras y puentes individuales y en su lugar vemos el contorno de países enteros.

Al colorear un mapa, o cualquier otro dibujo que conste de regiones distintas, los países adyacentes no pueden tener el mismo color. También podríamos querer usar la menor cantidad posible de colores diferentes.

Algunos "mapas" simples, como un tablero de ajedrez, solo necesitan dos colores (blanco y negro), pero la mayoría de los mapas complejos necesitan más.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Al colorear el mapa de los estados de EE. UU., 50 colores son obviamente suficientes, pero se necesitan muchos menos. Intente colorear los mapas a continuación con la menor cantidad de colores posible:

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

Todos estos mapas se pueden colorear con solo cuatro colores diferentes, pero no es difícil imaginar que otros mapas muy complicados puedan necesitar muchos más colores. De hecho, algunos mapas necesitan __al menos__ cuatro colores, siempre que contengan cuatro países, todos conectados entre sí.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Como antes, podemos convertir un mapa con países y fronteras en un gráfico plano: cada país se convierte en [[un vértice | un borde | una cara]] y países que [[comparten una frontera | tienen el mismo color]] conectado por un borde:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Ahora queremos colorear los vértices de un gráfico, y dos vértices deben tener un color diferente si están conectados por un borde.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

En 1852, el estudiante de botánica [Francis Guthrie](bio:guthrie) tuvo que colorear un mapa de condados en Inglaterra. Observó que cuatro colores parecían ser suficientes para cualquier mapa que intentara, pero no pudo encontrar una prueba que funcionara para _todos los_ mapas. Esto resultó ser un problema extremadamente difícil, y se conoció como el __teorema de__ los __cuatro colores__ .

Durante los siguientes 100 años, muchos matemáticos publicaron "pruebas" del teorema de los cuatro colores, solo para errores que se encontrarán más adelante. Algunas de estas pruebas inválidas fueron tan convincentes que tardó más de 10 años en descubrir errores.

Durante mucho tiempo, los matemáticos no pudieron probar que cuatro colores son suficientes o encontrar un mapa que necesitara más de cuatro colores.

:::

---
> id: maps-4

Se hicieron pocos progresos en el problema de los cuatro colores hasta 1976, cuando [Wolfgang Haken](bio:haken) y [Kenneth Appel](bio:appel) usaron una computadora para finalmente resolverlo. Redujeron infinitamente muchos mapas posibles a 1936 casos especiales, que fueron verificados por una computadora que tomó más de 1000 horas en total.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

El teorema de los cuatro colores es el primer teorema matemático conocido que se prueba usando una computadora, algo que se ha vuelto mucho más común y menos controvertido desde entonces. Las computadoras más rápidas y un algoritmo más eficiente significan que hoy puede probar el teorema de los cuatro colores en una computadora portátil en solo unas pocas horas.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

El teorema de cuatro colores solo funciona para mapas en un plano plano o una esfera, y donde todos los países consisten en un área única.

Sin embargo, los matemáticos también han observado mapas de _imperios_ , donde los países pueden consistir en múltiples componentes desconectados, y mapas en planetas de formas diferentes, como un toro (forma de rosquilla). En estos casos, puede necesitar más de cuatro colores y las pruebas se vuelven aún más difíciles.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## El problema del vendedor ambulante

::: column.grow(parent="right")

Pensemos, una vez más, en redes y mapas. Imagine que un servicio de entrega tiene que visitar ${tsn}{tsn|8|2,50,1} diferentes ciudades para distribuir parcelas. Podemos pensar en estas ciudades como los vértices en un gráfico. Si todas las ciudades están conectadas por carreteras, este es un [[gráfico completo | ciclo | gráfico bipartito]] , entonces hay <mfrac><mrow>${tsn} × ( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} bordes en total.

El camión de reparto tiene que visitar todas las ciudades, en cualquier orden. En el problema de los puentes de Königsberg, queríamos encontrar caminos que recorrieran exactamente _cada borde_ . Ahora queremos encontrar caminos que visiten _cada vértice_ exactamente una vez. Estos caminos se llaman __ciclos hamiltonianos__ .

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Existen innumerables posibilidades diferentes para los ciclos hamiltonianos en gráficos completos. De hecho, podemos elegir cualquier vértice como vértice inicial y luego elegir cualquiera de las ciudades restantes en cualquier orden:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

En un gráfico con ${tsn1}{tsn1|4|2,10,1} ciudades, cada ciclo de Hamilton también debe contener ${tsn1} ciudades Ahora,

    ul.var(:html="tsmString(tsn1)")

Esto significa que, en total, hay ${tsnPaths(tsn1)} posibles caminos. Una abreviatura de este producto es ${tsn1} ! o ${tsn1} __Factorial__

Podrías imaginar que tal vez no sea posible viajar directamente entre dos ciudades, sin pasar por otra ciudad. En ese caso, ya no tenemos un gráfico completo, y encontrar el número de ciclos hamiltonianos, si es que existen, se vuelve mucho más difícil.

---
> id: salesman-3

::: column.grow(parent="right")

Hasta ahora hemos ignorado el hecho de que algunas ciudades podrían estar más separadas que otras. Sin embargo, en la vida real, esta es una consideración muy importante: no solo queremos encontrar _un_ camino, sino que queremos encontrar el más corto. Esto se llama el __problema del vendedor ambulante__ . Tiene que resolverse no solo en el transporte y la logística, sino también al colocar transistores en microchips, para hacer computadoras más rápidas o al analizar la estructura del [ADN](gloss:dna) .

Un método simple sería probar todos los caminos posibles, encontrar la longitud de cada uno y luego elegir el más corto. Sin embargo, acabamos de demostrar eso, incluso con solo ${tsn2}{tsn2|10|2,20,1} ciudades hay ${tsn2} ! = ${factorial(tsn2)} posibles caminos. Una vez que tenga cientos o miles de vértices, probar todos los caminos posibles se vuelve imposible, incluso utilizando computadoras potentes.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Desafortunadamente, no existe un algoritmo más eficiente para resolver el problema del vendedor ambulante. En cambio, los matemáticos y los informáticos han desarrollado varios algoritmos que encuentran _buenas_ soluciones, incluso si no son la mejor. Estos algoritmos, que solo dan soluciones aproximadas, se denominan __heurísticas__ .

Intente reorganizar las ciudades en este mapa y observe cómo cambia el camino más corto entre ellas. Puede eliminar ciudades al tocarlas, y puede agregar ciudades haciendo clic en cualquier parte del mapa (hasta 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

El __algoritmo codicioso__ (o algoritmo vecino más cercano) es muy simple: comienzas en una ciudad aleatoria y te mueves consecutivamente a la ciudad más cercana que no has visitado antes. Una vez que haya visitado todas las ciudades, se detiene.

::: column(width=300)

{.todo} Animación próximamente ...

:::

Puede mostrar que, en promedio, las rutas encontradas utilizando el algoritmo codicioso son un 25% más largas que la ruta más corta posible.

---
> id: salesman-6

::: column.grow

El __algoritmo 2-Opt__ comienza con una ruta aleatoria posible. Luego, elige repetidamente dos bordes y los intercambia si eso reduciría la longitud del camino. Te detienes cuando no puedes reducir más la longitud intercambiando cualquier par de bordes.

::: column(width=300)

{.todo} Animación próximamente ...

:::

---
> id: ants

Resulta que, mucho antes de que existieran las computadoras, la naturaleza había encontrado una manera inteligente de encontrar caminos óptimos entre diferentes lugares: en colonias de hormigas.

    x-parallax.full-width(background="images/ants.jpg")

Las hormigas quieren encontrar las rutas más cortas posibles entre su nido y las posibles fuentes de alimento. Pueden comunicarse entre sí a través de sustancias químicas que dejan a lo largo de su rastro y que otras hormigas pueden seguir.

---
> id: ants-1

::: column.grow

* La colonia de hormigas envía muchos exploradores que inicialmente viajan en direcciones aleatorias. Una vez que encuentran comida, regresan, dejando un rastro de feromona. * Otras hormigas tienden a seguir un rastro cuando encuentran uno, lo que los lleva a la comida. En su viaje de regreso depositan más feromona, lo que refuerza el camino. * Con el tiempo, la feromona se evapora. Cuanto más largo es un camino, más tiempo le toma a las hormigas recorrerlo, por lo que la feromona tiene más tiempo para evaporarse. Los caminos cortos, por otro lado, pueden reforzarse más rápidamente, por lo que su fuerza aumenta más rápido.

::: column(width=240)

{.todo} Diagrama próximamente ...

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Los algoritmos del Sistema de colonia de hormigas (ACS) intentan replicar este comportamiento en las computadoras, utilizando muchas hormigas "virtuales". Pueden encontrar rápidamente muy buenas soluciones para el problema del vendedor ambulante.

Una propiedad particularmente útil de los algoritmos ACS es que pueden ejecutarse continuamente y adaptarse en tiempo real a los cambios en el gráfico. Estos cambios podrían ser causados por accidentes automovilísticos y cierres de carreteras en redes de calles, o por picos de tráfico a servidores web en redes de computadoras.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

El problema del vendedor ambulante es [NP-hard](gloss:np) , lo que significa que es muy difícil de resolver con computadoras (al menos para un gran número de ciudades).

Encontrar un algoritmo rápido y exacto tendría serias implicaciones en el campo de la informática: significaría que existen algoritmos rápidos para _todos los_ problemas NP-difíciles. También haría inútil la mayor parte de la seguridad de Internet, lo que se basa en el hecho de que se cree que ciertos problemas son muy difíciles para las computadoras.

Encontrar un algoritmo rápido para resolver el problema del vendedor ambulante también resolvería uno de los problemas abiertos más famosos en matemáticas e informática, el problema __P vs NP__ . Es uno de los siete [problemas del Premio del Milenio](gloss:millennium-prize) , cada uno con un premio de $ 1 millón.

:::

---
> section: scheduling
> sectionStatus: dev

## Problemas de programación

{.todo} Próximamente

---
> id: applications
> section: applications
> translated: auto

## Gráficos en la vida cotidiana

Hemos visto muchas aplicaciones diferentes de la teoría de grafos en los capítulos anteriores, aunque algunas de ellas fueron un poco artificiales. Sin embargo, resulta que los gráficos son la base de muchos objetos, conceptos y procesos en la vida cotidiana.

::: column.grow

Internet, por ejemplo, es un vasto gráfico virtual. Cada vértice es una página web individual, y cada borde significa que hay un hipervínculo entre dos páginas. Tenga en cuenta que los enlaces solo van en una dirección, por lo que este gráfico está [[dirigido | multilínea | conectado]] , y que este gráfico es _muy, muy grande_ .

 Algunos sitios web, como Wikipedia o Facebook, tienen muchos enlaces entrantes, mientras que muchos sitios web más pequeños pueden tener muy pocos enlaces entrantes. Este es el concepto subyacente que Google utiliza para ordenar los resultados de búsqueda.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Los sitios web con más enlaces entrantes tienden a ser de mayor calidad y deben mostrarse en la parte superior de los resultados de búsqueda. Por ejemplo, cuando se busca "Londres", los sitios oficiales de información turística se muestran antes de pequeñas tiendas en Londres, o blogs de personas que viven en Londres. Esta idea simple de la teoría de gráficos, el __algoritmo de rango de página__ , hizo que Google sea significativamente mejor que otros motores de búsqueda anteriores.

---
> id: applications-2

Internet es la red más grande jamás creada por la humanidad. Esta imagen muestra una proporción muy pequeña de todos los servidores conectados a Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Si bien los sitios web y los hipervínculos forman un gráfico _virtual_ , también existe la red _física_ de computadoras, servidores, enrutadores, líneas telefónicas y cables.

::: column.grow(parent="right")

Cada vez que realiza una llamada telefónica o carga un sitio web, los operadores de red tienen que encontrar una manera de conectar el remitente y el receptor, sin exceder la capacidad de ningún cable o conexión individual. La teoría de gráficos y la probabilidad hacen posible garantizar un servicio confiable, por ejemplo al encontrar desvíos cuando una conexión particular está ocupada.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Los gráficos también juegan un papel importante en el transporte y la navegación. Todas las redes de vuelo, tren y metro forman gráficos, que pueden usarse al crear horarios eficientes. Uno de los gráficos más reconocibles es el mapa del metro de Londres:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Todas las carreteras y autopistas también forman una gran red, que es utilizada por los servicios de navegación como Google Maps al calcular la ruta más corta entre dos puntos dados.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

En el futuro, los __sistemas inteligentes de transporte__ reducirán la congestión y los accidentes al enrutar los automóviles de manera más eficiente, utilizando los datos de ubicación recopilados de los teléfonos inteligentes y los vehículos autónomos. Esto podría ahorrar millones de horas perdidas en la carretera cada año, reducir significativamente la contaminación y permitir que los servicios de emergencia viajen más rápido.

:::

---
> id: applications-6

Esta imagen muestra la red de vuelos de aerolíneas comerciales en el norte de Europa.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Hay innumerables otros gráficos en la ciencia, la ingeniería o la vida cotidiana:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Los enlaces entre los átomos en las __moléculas__ y las rejillas de cristal forman un gráfico.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} La __propagación de enfermedades__ y epidemias se puede modelar utilizando una red.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} En biología, los __árboles evolutivos__ que muestran la ascendencia de las especies forman un gráfico.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Los diferentes componentes de __circuitos eléctricos__ y chips de computadora forman una red.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} La estructura gramatical de los __idiomas__ se puede modelar mediante gráficos, por ejemplo, para crear algoritmos de traducción.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Los gráficos también tienen muchas aplicaciones en __probabilidad__ , __teoría de juegos__ y __matemática financiera__ .

:::

---
> id: social

### Redes sociales

Finalmente, pensemos en un ejemplo particularmente bueno de gráficos que existen en la vida cotidiana: las redes sociales. Aquí, los vértices representan [[personas | amigos | Las redes]] y los bordes representan amistades, me gusta, suscripciones o seguidores.

Cuando dibujamos gráficos de redes sociales, podemos ver ciertos __grupos__ de amigos en común, que pueden haber ido a la misma escuela o vivir en la misma ciudad. También podemos determinar la __centralidad de__ las personas, que depende de qué tan bien conectado esté un vértice, y que puede ser una medida de la popularidad de una persona en las redes sociales.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

En 2014, Facebook tenía 1.400 millones de usuarios activos y un total de más de 200.000 millones de amistades. La mitad de todos los usuarios de Facebook tienen más de 200 amigos, y dado que la mayoría de nuestros amigos tienen un número similar de amigos, podríamos tener fácilmente decenas de miles _de amigos_ .

Una pregunta emocionante ahora sería: si eliges dos usuarios aleatorios de Facebook, ¿cuántos “límites de amistad” necesitarías seguir para pasar de uno a otro? Por ejemplo, la distancia entre amigos es [[1]] , la distancia entre amigos de amigos es [[2]] , y así sucesivamente.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

En 2016, Facebook realizó [un estudio](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) para determinar cómo sus usuarios están conectados entre sí. Descubrieron que, en promedio, está conectado a _cualquier otra persona_ en Facebook a través de, como máximo, 3.57 personas más. ¡Y esto incluye celebridades, políticos o incluso realeza!

En otras palabras, si elige cualquiera de los miles de millones de usuarios de Facebook en todo el mundo, probablemente tendrán un amigo de un amigo que conozca a un amigo de uno de sus amigos. Decimos que hay 3.57 __grados de separación__ .

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

En 1929, cuando el autor húngaro [Frigyes Karinthy](bio:karinthy) propuso por primera vez la idea de "seis grados de separación", no había Internet ni redes sociales, pero el mundo ya había comenzado a estar más interconectado.

En 1967, [Stanley Milgram](bio:milgram) realizó un primer experimento empírico, donde se pidió a 296 participantes que vivían en Nebraska y Kansas que entregaran una carta a una persona en particular que vivía en Boston, Massachusetts. Todos tuvieron que elegir un amigo para enviarle la carta, quien luego eligió a otro amigo. A cada paso, la carta se acercaba a Boston. Milgram descubrió que, en promedio, solo había 5.2 amigos intermedios, 5.2 grados de separación.

:::

Hoy en día, cada uno de nosotros forma parte de innumerables gráficos invisibles, que subyacen a nuestras interacciones sociales, viajes, Internet y tecnología, ciencia y mucho más.
