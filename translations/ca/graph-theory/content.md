# Gràfics i xarxes 

## Introducció 

> id: intro-0
> section: introduction
> translated: auto

Cada dia ens envolten infinitat de connexions i xarxes: carreteres i vies ferroviàries, línies telefòniques, internet, circuits electrònics i fins i tot enllaços moleculars. Fins i tot hi ha _xarxes socials_ entre amics i famílies. Pot pensar en altres exemples? 

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Xarxes viàries i ferroviàries 

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Xips d’ordinador 

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Cadenes de subministrament 

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Amistats 

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Connexions neuronals 

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} Internet 

:::

---
> id: intro

::: column.grow

En matemàtiques, tots aquests exemples es poden representar com a [__gràfics__](gloss:graph) (no s’han de confondre amb el _gràfic_ d’una funció). Un gràfic està format per certs _punts_ anomenats [[vèrtexs | cercles | creus]] , algunes de les quals estan connectades per [[vores | límits | parelles]] . 

__La teoria__ de gràfics és l'estudi dels gràfics i de les seves propietats. És una de les àrees visuals més emocionants i visuals de les matemàtiques i té infinitat d'aplicacions importants. 

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Podem dibuixar la disposició de gràfics senzills mitjançant cercles i línies. La posició dels vèrtexs i la longitud de les vores és irrellevant; només ens importa la _forma de connectar_ -se entre ells. Les vores fins i tot es poden creuar entre si i no han de ser rectes. 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} En alguns gràfics, les vores només van d’un sol sentit. S’anomenen [__gràfics dirigits__](gloss:directed-graph) . 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Alguns gràfics consisteixen en diversos grups de vèrtexs que no estan connectats entre si per arestes. Aquests gràfics estan __desconnectats__ . 

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Altres gràfics poden contenir múltiples vores entre els mateixos parells de vèrtexs o vèrtexs connectats a ells mateixos (bucles). 

:::

---
> id: intro-2

Podem crear gràfics nous a partir d’un gràfic existent eliminant alguns dels vèrtexs i les vores. El resultat s’anomena [__subgraf__](gloss:subgraph) . Aquí podeu veure alguns exemples més de gràfics, amb vores i vèrtexs de colors que indiquen un possible subgraf: 

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

Diem que l’ [__ordre__](gloss:graph-order) d’un gràfic és el nombre de vèrtexs que té. El [__grau__](gloss:graph-degree) d'un vèrtex és el nombre d'arcs que es troben en aquest vèrtex. 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Ordre: [[5]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Ordre: [[8]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grau: [[3]] 

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Titulació: [[6]] 

:::

---
> id: intro-4

Els gràfics que consisteixen en un sol bucle de vèrtexs s’anomenen [__cicles__](gloss:graph-cycle) . Tots els cicles tenen [[el mateix nombre de vores i vèrtexs | més arestes que vèrtexs | menys vores que vèrtexs]] . 

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Equipat amb aquestes noves definicions, anem a explorar algunes de les fascinants propietats i aplicacions dels gràfics. 

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges
> translated: auto

## Els ponts de Königsberg 

::: column.grow

Un dels primers matemàtics a pensar en gràfics i xarxes va ser [Leonhard Euler](bio:euler) . Euler va quedar intrigat per un antic problema sobre la ciutat de Königsberg, prop del mar Bàltic. 

El riu Pregel divideix Königsberg en quatre parts separades, que estan connectades per set ponts. És possible passejar per la ciutat creuant tots els ponts exactament una vegada, però no més d’una vegada? (Podeu començar i acabar en qualsevol lloc, no necessàriament al mateix lloc.) 

Proveu de trobar una ruta vàlida dibuixant aquests mapes: 

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

En el cas de Königsberg sembla ser impossible trobar una ruta vàlida, però algunes altres ciutats funcionen. Euler va aconseguir trobar una regla senzilla que es pugui aplicar a qualsevol ciutat, sense haver de provar gaires possibilitats, utilitzant la teoria de gràfics. 

::: column.grow

Primer, hem de convertir els mapes de la ciutat en gràfics amb vores i vèrtexs. Tota illa o regió terrestre està representada per [[un vèrtex | una vora | una àrea]] i cada pont que connecta dues regions està representada per un [[cant]] corresponent [[| vèrtex | carrer]] . 

{.reveal(when="blank-0 blank-1")} Ara el problema de "recórrer una ciutat mentre es creua cada pont exactament una vegada" s'ha convertit en un problema de "dibuixar un gràfic amb un traç continu mentre es traça cada extrem exactament una vegada". 

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Al paper, traieu uns quants gràfics diferents i, a continuació, intenteu esbrinar quins es poden dibuixar amb un traç únic i continu. 

---
> id: bridges-3
> goals: size prime eo

Igual que els mapes de la ciutat d’abans, trobem que alguns gràfics són possibles mentre que d’altres no. Per ajudar-nos a comprendre el perquè, etiquetem tots els vèrtexs amb el seu [grau](gloss:graph-degree) . A continuació, podem acolorir els vèrtexs de diferents maneres i intentar revelar un patró: 

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

Si comparem aquests nombres per a gràfics possibles i els que no són possibles, sembla que es pot dibuixar un gràfic si no [[té més de dos vèrtexs “imparells”. | només té vèrtexs "parells" | no té vèrtexs amb un ordre superior a 4 | té un nombre senar de vèrtexs | no té vèrtexs d'ordre 3]] . Aquesta condició es pot explicar si ens fixem en un sol vèrtex al gràfic: 

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

Si aneu cap al mapa de Königsberg, trobareu que hi ha més de dues illes amb un nombre senar de ponts. Per tant, és realment impossible una ruta que creua tots els ponts exactament una vegada, i això va descobrir Leonard Euler. 

Pot ser que el descobriment d'Euler no sembli especialment útil a la vida real, però els gràfics són el fonament de molts altres problemes geogràfics, com ara trobar indicacions entre dues ubicacions. Més endavant descobrirem més d’aquestes aplicacions. 

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes
> translated: auto

## Enganxaments de mans i cites 

::: column.grow

Ha estat convidat a una meravellosa festa d’aniversari amb els teus amics. Inclosos tu mateix i l’amfitrió, n’hi ha ${hnd}{hnd|5|3,15,1} gent present. 

Al vespre, quan els convidats es disposen a sortir, tothom dóna la mà amb els altres. Quants cops de mà hi ha en total? 

Podem representar els cops de mà mitjançant un gràfic: cada persona és [[un vèrtex | una vora]] , i cada cop de mà és [[una vora | un vèrtex]] . 

{.reveal(when='blank-0 blank-1')} Ara és fàcil comptar el nombre d'arcs del gràfic. Ho trobem amb això ${hnd} gent, n’hi ha ${hnd*(hnd-1)/2} encaixades de mans. 

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

En lloc de comptar totes les vores en gràfics grans, també podríem intentar trobar una fórmula senzilla que ens indiqui el resultat per a _qualsevol_ nombre de convidats. 

Cadascun dels ${n}{n|5|2,8,1} la gent de la festa dóna la mà ${n-1} d’altres. Que fà ${n} × ${n-1} = ${n×(n-1)} encaixades de mans en total. Per a _n_ persones, el nombre de cops de mà seria [[`n×(n–1)`|`n×(n+1)`|`n^2`]] . 

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Malauradament aquesta resposta no és del tot correcta. Observeu com [les dues primeres entrades a la fila superior](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) en realitat són els mateixos, simplement han voltat. 

De fet, hem comptat cada cop de mà [[dues vegades | un cop | tres vegades]] , _{span.reveal(when="blank-0")} una vegada per cadascuna de les dues persones implicades. Això significa que el nombre correcte de cops de mà ${n}{n|5|2,25,1} convidats ho és `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._ 

---
> id: handshakes-3

Els gràfics de mà són especials perquè cada vèrtex està connectat a tots els altres vèrtexs. Els gràfics amb aquesta propietat s’anomenen __gràfics complets__ . El gràfic complet amb 4 vèrtexs sovint s’abreuja com `K_4` , es coneix com a gràfic complet amb 5 vèrtexs `K_5` , etcètera. 

Acabem de demostrar que amb un gràfic complet `n` vèrtexs, `K_n` , té `(n × (n-1))/2` vores. 

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

En un dia diferent, se us convida a un esdeveniment de cites ràpides ${m}{m|5|2,8,1} nois i ${f}{f|4|2,8,1} noies. Hi ha moltes taules petites i cada noi passa 5 minuts amb cadascuna de les noies. Quantes “dates” individuals hi ha en total? 

::: column.grow

En aquest cas, el gràfic corresponent consta de dos conjunts de vèrtexs separats. Cada vèrtex està connectat a tots els vèrtexs [[del contrari | el seu propi]] conjunt, però cap dels vèrtexs [[propis | el]] conjunt [[oposat]] . Els gràfics que disposen d'aquest disseny s'anomenen __gràfics de bipartit__ . 

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} El gràfic bipartit amb dos conjunts de mida _x_ i _y_ s’escriu sovint com `K_"x,y"` . Té [[`x×y`|`x+y`|`2x–y`]] vores, _{span.reveal(when="blank-2")} cosa que significa que en l’exemple anterior n’hi ha ${m} × ${f} = ${m×f} dates._ 

---
> id: utilities
> goals: try-three-times
> section: planar-graphs
> translated: auto

## Gràfics plans 

::: column.grow

Heus aquí un altre trencaclosques relacionat amb la teoria de gràfics. 

En un petit poble hi ha tres cases i tres plantes d’utilitat que produeixen aigua, llum i gas. Hem de connectar cadascun dels cursos a cadascuna de les plantes d’utilitat, però, a causa del traçat del poble, no es poden creuar les diferents canonades i cables. 

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Proveu de connectar cadascuna de les cases amb cadascuna de les empreses de serveis a sota, sense que cap de les vostres línies s’hi creui 

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Igual que els ponts de Königsberg abans, descobriu ràpidament que aquest problema també és impossible. Sembla que alguns gràfics es poden dibuixar sense sobreposar-se a les arestes (es diuen __gràfics plans__ ), però d'altres no. 

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` és pla. 

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[és pla | no és planer]] . 

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[no és planer | és pla]] . 

:::

---
> id: utilities-2

El [gràfic complet](gloss:complete-graph) `K_5` és el gràfic més petit que no és pla. Qualsevol altre gràfic que contingui `K_5` com a subgraf d’alguna manera tampoc és planer. Això inclou `K_6` , `K_7` i tots els gràfics complets més grans. 

El gràfic del trencaclosques de les tres utilitats és el [gràfic](gloss:bipartite-graph) del [bipartit](gloss:bipartite-graph) `K_"3,3"` . Resulta que qualsevol gràfic no pla ha de contenir una `K_5` o a `K_"3,3"` (o una [subdivisió](gloss:subdivision) d'aquests dos gràfics) com a subgraf. D’això s’anomena _teorema de Kuratowski_ . 

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planaritat 

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Aquest és un gràfic pla, però el ${n}{n|7|5,20,1} els vèrtexs s’han revoltat. Reordeneu els vèrtexs de manera que cap de les vores se superposi. 

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Fórmula d'Euler 

Tots els gràfics plans divideixen el pla en què es dibuixen en diverses zones, anomenades __cares__ . 

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] vèrtexs  
[[5]] cares  
[[10]] Vores  
_{span.euler-sum} 11 vèrtexs + cares_ 

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] vèrtexs  
[[7]] cares  
[[14]] Vores  
_{span.euler-sum} 15 vèrtexs + cares_ 

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] vèrtexs  
[[13]] cares  
[[24]] Vores  
_{span.euler-sum} 25 vèrtexs + cares_ 

:::

---
> id: euler-1

Quan compareu aquests nombres, notareu que el nombre d'arcs és sempre [[un menys | més gran | igual]] al nombre de cares més el nombre de vèrtexs. En altres paraules, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Aquest resultat s’anomena __equació d’Euler__ i rep el nom del mateix [matemàtic](bio:euler) que va resoldre el problema de Ponts de Königsberg. 

Malauradament, hi ha infinites gràfiques i no podem comprovar cadascú per veure si funciona l’equació d’Euler. En lloc d'això, podem intentar trobar una [prova](gloss:proof) senzilla que funcioni per a qualsevol gràfic ... 

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

Qualsevol gràfic (finit) es pot construir començant per un vèrtex i afegint més vèrtexs un per un. Hem demostrat que, segons la manera d’afegir nous vèrtexs, l’equació d’Euler és vàlida. Per tant, és vàlid per a tots els gràfics. 

El procés que hem utilitzat s’anomena __inducció matemàtica__ . És una tècnica molt útil per demostrar resultats en infinitat de casos, simplement començant pel cas més senzill i mostrant que el resultat es manté a cada pas quan es construeixen casos més complexos. 

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Molts gràfics plans semblen molt similars a les xarxes de [políedres](gloss:polyhedron) , formes tridimensionals amb cares [poligonals](gloss:polygon) . Si pensem en els poliedres constituïts per bandes elàstiques, podem imaginar estirar-los fins a convertir-los en gràfics plans i plans: 

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Això significa que podem utilitzar la fórmula d’Euler no només per a gràfics plans, sinó també per a tots els poliedres, amb una petita diferència. En transformar els políedres en gràfics, una de les cares desapareix: la cara superior del políedre es converteix en la “exterior”; dels gràfics. 

En altres paraules, si compta el nombre de __{.red} vores__ , __{.blue} cares__ i __{.green} vèrtexs__ de _qualsevol_ poliedre, ho trobareu _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] . 

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosaedre__  
__{.blue} 20__ cares  
__{.green} 12__ vèrtexs  
__{.red} 30__ Vores 

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Ròmbicosidodecaedre__  
__{.blue} 62__ cares  
__{.green} 60__ vèrtexs  
__{.red} 120__ Vores 

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Icosaedre troncocònic__  
__{.blue} 32__ cares (12 negres, 20 blancs)  
__{.green} 60__ vèrtexs  
__{.red} 90__ Vores 

:::

---
> id: maps
> section: map-colouring
> translated: auto

## Pintar Mapa 

::: column.grow

Ja hem utilitzat la teoria de gràfics amb determinats mapes. A mesura que ens reduïm, les carreteres i ponts individuals desapareixen i, en canvi, veiem el traç de països sencers. 

Quan es colora un mapa o qualsevol altre dibuix format per regions diferents, els països adjacents no poden tenir el mateix color. També potser voldríem utilitzar el mínim color possible. 

Alguns “mapes” simples, com un tauler d’escacs, només necessiten dos colors (blanc i negre), però els mapes més complexos necessiten més. 

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Al pintar el mapa dels estats dels Estats Units, òbviament són suficients 50 colors, però són necessaris molt menys. Proveu de pintar els mapes a continuació amb el mínim color possible: 

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

Tots aquests mapes poden ser acolorits només amb quatre colors diferents, però no és difícil imaginar que altres mapes molt complicats poden necessitar molts més colors. De fet, alguns mapes necessiten __almenys__ quatre colors, sempre que contenen quatre països tots connectats entre si. 

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Com abans, podem convertir un mapa amb països i fronteres en un gràfic pla: cada país es converteix [[en vèrtex | una vora | una cara]] i els països que [[comparteixen frontera | tenen el mateix color]] connectat per una vora: 

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Ara volem acolorir els vèrtexs d’un gràfic i dos vèrtexs han de tenir un color diferent si estan connectats per una vora. 

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

El 1852, l'estudiant de botànica [Francis Guthrie va](bio:guthrie) haver de pintar un mapa de comtats d'Anglaterra. Va observar que quatre colors semblaven suficients per a qualsevol mapa que intentava, però no va ser capaç de trobar una prova que funcionés per a _tots els_ mapes. Aquest va resultar ser un problema extremadament difícil, i es va fer conegut com el __teorema de quatre colors__ . 

Durant els següents 100 anys, molts matemàtics van publicar “proves” al teorema de quatre colors, només per trobar errors després. Algunes d’aquestes proves no vàlides eren tan convincents que van trigar més de deu anys a descobrir errors. 

Durant molt de temps, els matemàtics no van poder demostrar que són suficients quatre colors o bé trobar un mapa que necessités més de quatre colors. 

:::

---
> id: maps-4

Es van progressar poc en el problema dels quatre colors fins al 1976, quan [Wolfgang Haken](bio:haken) i [Kenneth Appel van](bio:appel) utilitzar un ordinador per solucionar-lo finalment. Van reduir infinitament molts mapes possibles a casos especials de 1936, els quals van ser verificats per un ordinador amb més de 1000 hores en total. 

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

El __teorema de quatre colors__ és el primer teorema matemàtic conegut que es va provar mitjançant un ordinador, cosa que des de llavors s’ha convertit en molt més comuna i menys controvertida. Els ordinadors més ràpids i un algorisme més eficient significa que avui podeu demostrar el teorema de quatre colors en un ordinador portàtil en poques hores. 

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

El teorema de quatre colors només funciona per mapes en un pla pla o una esfera, i on tots els països consisteixen en una sola àrea. 

Tanmateix, els matemàtics també han mirat mapes d’ _imperis_ , on els països poden constar de múltiples components desconnectats i mapes en planetes de forma diferent, com ara un toro (forma de donut). En aquests casos, és possible que necessiteu més de quatre colors, i les proves es fan encara més difícils. 

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman
> translated: auto

## El problema del venedor ambulant 

::: column.grow(parent="right")

Pensem, una vegada més, en xarxes i mapes. Imagineu que un servei de lliurament ha de visitar ${tsn}{tsn|8|2,50,1} diferents ciutats per distribuir paquets. Podem pensar en aquestes ciutats com els vèrtexs en un gràfic. Si totes les ciutats estan connectades per carreteres, aquest és el [[gràfic complet | cicle | gràfic bipartit]] , per tant n'hi ha <mfrac><mrow>${tsn} × ( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} vores en total. 

El camió de lliurament ha de visitar totes les ciutats, en qualsevol ordre. En el problema dels ponts de Königsberg volíem trobar camins que transitessin per _cada vora_ exactament. Ara volem trobar camins que visiten _tots els vèrtexs_ exactament una vegada. Aquests camins s’anomenen __cicles hamiltonians__ . 

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Hi ha infinites possibilitats de cicles hamiltonians en gràfics complets. De fet, podem escollir qualsevol vèrtex com a vèrtex inicial i, a continuació, escollir qualsevol de les ciutats restants en qualsevol ordre: 

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

En un gràfic amb ${tsn1}{tsn1|4|2,10,1} ciutats, tots els cicles hamiltonians també han de contenir ${tsn1} ciutats. Ara, 

    ul.var(:html="tsmString(tsn1)")

Això vol dir que, en total, n’hi ha ${tsnPaths(tsn1)} possibles camins. Una drecera per a aquest producte és ${tsn1} ! o ${tsn1} __Factorial__ . 

Us podríeu imaginar que potser no es podria viatjar directament entre dues ciutats, sense passar per una altra ciutat. En aquest cas, ja no tenim un gràfic complet, i és molt més difícil trobar el nombre de cicles hamiltonians. 

---
> id: salesman-3

::: column.grow(parent="right")

Fins ara, hem ignorat el fet que algunes ciutats podrien estar més enllà de les altres. En la vida real, però, aquesta és una consideració molt important: no només volem trobar _cap_ camí, sinó que en volem trobar el més curt. Això s’anomena el __problema del venedor ambulant__ . S'ha de resoldre no només en transport i logística, sinó també quan es posicionen transistors en microxips, per fer ordinadors més ràpids o en analitzar l'estructura de l' [ADN](gloss:dna) . 

Un mètode senzill seria provar tots els camins possibles, trobant la longitud de cadascun i, a continuació, escollir el més curt. Tot i això acabem de demostrar-ho, fins i tot amb just ${tsn2}{tsn2|10|2,20,1} ciutats hi ha ${tsn2} ! = ${factorial(tsn2)} possibles camins. Un cop tingueu centenars o milers de vèrtexs, intentar tots els camins possibles es fa impossible, fins i tot amb ordinadors potents. 

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Malauradament, no hi ha cap algorisme més eficient per resoldre el problema del venedor viatger. En canvi, els matemàtics i informàtics han desenvolupat diversos algoritmes que troben _bones_ solucions, fins i tot si no poden ser els millors. Aquests algoritmes, que només donen solucions aproximades, s’anomenen __heurístiques__ . 

Proveu de reordenar les ciutats en aquest mapa i observeu com canvia el camí més curt entre elles. Podeu eliminar les ciutats tocant-les i podeu afegir ciutats fent clic a qualsevol lloc del mapa (fins a 8): 

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

El __Greedy Algorithm__ (o l' __algoritme__ més proper del barri) és molt senzill: comenceu en una ciutat a l'atzar i consecutivament aneu a la ciutat més propera que no heu visitat abans. Un cop hagueu visitat totes les ciutats, us atureu. 

::: column(width=300)

{.todo} L’animació en breu… 

:::

Podeu demostrar que, de mitjana, les rutes que es troben amb l’algoritme greedy són un 25% més llargues que la ruta més curta possible. 

---
> id: salesman-6

::: column.grow

L’ __algoritme de dues opcions__ comença amb una ruta aleatòria possible. A continuació, trieu repetidament dos vores i els canvieu si això reduiria la longitud del camí. Atureu-vos quan no podeu reduir la longitud encara més canviant cap parell d'arcs. 

::: column(width=300)

{.todo} L’animació en breu… 

:::

---
> id: ants

Resulta que, molt abans que fins i tot existissin els ordinadors, la natura havia trobat una manera hàbil de trobar rutes òptimes entre diferents ubicacions: a les colònies de formigues. 

    x-parallax.full-width(background="images/ants.jpg")

Les formigues volen trobar les rutes més curtes possibles entre el seu niu i les possibles fonts d'aliments. Es poden comunicar entre ells a través de productes químics que deixen al llarg del seu rastre i que poden seguir altres formigues. 

---
> id: ants-1

::: column.grow

* La colònia de formigues envia molts exploradors que inicialment viatgen en indicacions aleatòries. Un cop troben menjar, tornen, deixant enrere un rastre de feromona. * Altres formigues acostumen a seguir un rastre quan en troben una, que les porta a menjar. Al seu viatge de tornada dipositen més feromones, reforçant així la pista. * Amb el temps, la feromona s’evapora. Com més llarg és el camí, més temps triga les formigues a recórrer-lo, de manera que la feromona té més temps per evaporar-se. Els camins curts, en canvi, es poden reforçar més ràpidament, de manera que la seva força augmenta més ràpidament. 

::: column(width=240)

{.todo} Diagrama que ve aviat ... 

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Els algorismes ACS (Ant Colony System) de formiga intenten replicar aquest comportament als ordinadors, utilitzant moltes formigues "virtuals". Ràpidament poden trobar solucions molt bones per al problema del venedor en viatge. 

Una propietat particularment útil dels algorismes ACS és que poden funcionar contínuament i adaptar-se en temps real als canvis del gràfic. Aquests canvis es poden produir per accidents i tancaments de carreteres a les xarxes de carrers o per pics de trànsit als servidors web de les xarxes d’ordinadors. 

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

El problema del viatger venedor és [NP](gloss:np) , el que significa que és molt difícil resoldre’l per ordinadors (almenys per a un gran nombre de ciutats). 

Trobar un algoritme ràpid i exacte tindria serioses implicacions en el camp de la informàtica: significaria que hi ha algoritmes ràpids per a _tots els_ problemes durs amb NP. A més, inutilitzaria la major part de la seguretat d’Internet, que es basa en el fet que alguns ordinadors creuen que són molt difícils per als ordinadors. 

Trobar un algorisme ràpid per resoldre el problema del venedor de viatges també solucionaria un dels problemes oberts més famosos en matemàtiques i informàtica, el problema __P vs NP__ . És un dels set [problemes del premi del Mil·lenni](gloss:millennium-prize) , cadascun d'ells amb un premi d'1 milió de dòlars. 

:::

---
> section: scheduling
> sectionStatus: dev

## Problemes de programació 

{.todo} Pròximament 

---
> id: applications
> section: applications
> translated: auto

## Gràfics a la vida quotidiana 

Hem vist diverses aplicacions diferents de la teoria de gràfics en els capítols anteriors, tot i que algunes d’elles eren una mica contrius. Tot i així, resulta que els gràfics són el fonament mateix de molts objectes, conceptes i processos de la vida quotidiana. 

::: column.grow

Internet, per exemple, és un gràfic vast i virtual. Cada vèrtex és una pàgina web individual i cada vora significa que hi ha un hiperenllaç entre dues pàgines. Tingueu en compte que els enllaços només van per un sol sentit, de manera que aquest gràfic està [[dirigit | multi-línia | connectat]] , i que aquest gràfic és _molt, molt, gran_ . 

 Alguns llocs web, com Wikipedia o Facebook, tenen molts enllaços entrants, mentre que molts llocs web més petits poden tenir molt pocs enllaços entrants. Aquest és el concepte subjacent que utilitza Google per ordenar els resultats de la cerca. 

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Els llocs web amb enllaços més entrants solen ser de més qualitat i s'han de mostrar a la part superior dels resultats de la cerca. Per exemple, quan cerqueu "Londres", es mostren llocs d'informació turística oficial davant botigues petites de Londres o blogs de gent que viu a Londres. Aquesta idea senzilla de la teoria de gràfics, l' __algoritme de classificació de pàgines__ , va fer que Google fos molt millor que altres motors de cerca inicials. 

---
> id: applications-2

Internet és la xarxa més gran que mai ha creat la humanitat. Aquesta imatge mostra una proporció molt petita de tots els servidors connectats a Internet: 

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Mentre que els llocs web i els enllaços formen un gràfic _virtual_ , també hi ha la xarxa _física_ d’ordinadors, servidors, encaminadors, línies de telèfon i cables. 

::: column.grow(parent="right")

Cada vegada que realitzeu una trucada telefònica o carregueu un lloc web, els operadors de xarxa han de trobar una manera de connectar emissor i receptor, sense sobrepassar la capacitat de cap cable o connexió individual. La teoria i la probabilitat de gràfics permeten garantir un servei fiable, per exemple, trobant desviacions quan una connexió concreta està ocupada. 

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Els gràfics també tenen un paper important en el transport i la navegació. Totes les xarxes de vol, tren i metro formen gràfics que es poden utilitzar quan es creen horaris eficients. Un dels gràfics més reconeixibles és el mapa de metro de Londres: 

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Totes les carreteres i autopistes també formen una gran xarxa, que és utilitzada per serveis de navegació com Google Maps quan es busca la ruta més curta entre dos punts donats. 

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

En el futur, els __sistemes de transport intel·ligents__ reduiran la congestió i l'accidentalitat en dirigir els cotxes de manera més eficient, mitjançant dades de localització recollides de telèfons intel·ligents i automòbils de conducció pròpia. Això podria estalviar milions d’hores perdudes a la carretera cada any, reduir significativament la contaminació i permetre als serveis d’emergència viatjar més ràpidament. 

:::

---
> id: applications-6

Aquesta imatge mostra la xarxa de vols aèries comercials a través del nord d’Europa. 

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Hi ha molts altres gràfics en ciències, enginyeria o vida quotidiana: 

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Els enllaços entre àtoms de __molècules__ i quadrícules de cristall formen un gràfic. 

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} La __propagació de malalties__ i epidèmies es pot modelar mitjançant una xarxa. 

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} A Biologia, els __arbres evolutius__ que mostren l'ascendència d'espècies formen un gràfic. 

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Els diferents components dels __circuits elèctrics__ i els xips informàtics formen una xarxa. 

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} L’estructura gramatical dels __idiomes__ es pot modelar mitjançant gràfics, per exemple per crear algoritmes de traducció. 

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Els gràfics també tenen moltes aplicacions en __probabilitats__ , __teoria de jocs__ i __matemàtiques financeres__ . 

:::

---
> id: social

### Xarxes socials 

Finalment, pensem en un exemple especialment bo de gràfics que existeixen a la vida quotidiana: els mitjans socials. Aquí, els vèrtexs representen [[persones | amics | les xarxes]] i les vores representen amistats, likes, subscripcions o seguidors. 

Quan dibuixem gràfics de mitjans socials, podríem veure certs __grups__ d’amics mutuos, que potser han anat a la mateixa escola o viuen a la mateixa ciutat. També podem determinar la __centralitat__ de les persones, que depèn de la connexió que tingui un vèrtex i que pot ser una mesura de la popularitat d'una persona en les xarxes socials. 

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

El 2014, Facebook tenia 1.400 milions d’usuaris actius i un total de més de 200 mil milions d’amistats. La meitat de tots els usuaris de Facebook tenen més de 200 amics i, com que la majoria dels nostres amics tenen un nombre similar d'amics, podríem tenir fàcilment desenes de milers _d'amics_ . 

Ara seria una pregunta emocionant: si escolliu dos usuaris de Facebook a l’atzar, quants “talls d’amistat” hauríeu de seguir per anar d’un a l’altre? Per exemple, la distància entre amics és [[1]] , la distància entre amics d'amics és de [[2]] , etc. 

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

El 2016, Facebook va realitzar [un estudi](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) per determinar com es connecten els seus usuaris entre ells. Van comprovar que, de mitjana, esteu connectat a _qualsevol altra persona_ a Facebook mitjançant un màxim de 3.57 persones. I això inclou famosos, polítics o fins i tot una reialesa! 

Dit d’una altra manera, si escolliu algun dels milers de milions d’usuaris de Facebook arreu del món, probablement tindran un amic d’un amic que coneix un amic d’un dels vostres amics. Diem que hi ha 3,57 __graus de separació__ . 

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

El 1929, quan l’autor hongarès [Frigyes Karinthy](bio:karinthy) va proposar per primera vegada la idea de “sis graus de separació”, no hi havia Internet ni mitjans socials, però el món ja havia començat a estar més interconnectat. 

El 1967, [Stanley Milgram va](bio:milgram) realitzar un primer experiment empíric, on 296 participants residents a Nebraska i Kansas van demanar que enviessin una carta a una persona particular que vivís a Boston, Massachusetts. Tots van haver de triar un amic per enviar-li la carta, que després va escollir un altre amic. A cada pas, la carta s’acostava a Boston. Milgram va trobar que, de mitjana, només hi havia 5,2 amics intermedis - 5,2 graus de separació. 

:::

Avui en dia, cadascun de nosaltres forma part d’infinitat de gràfics invisibles, que subjeuen a les nostres interaccions socials, viatges, Internet i tecnologia, ciències i molt més.
