# Grafici e reti

## Introduzione

> id: intro-0
> section: introduction

Ogni giorno siamo circondati da innumerevoli connessioni e reti: strade e binari, linee telefoniche, Internet, circuiti elettronici e persino legami molecolari. Esistono anche _social network_ tra amici e famiglie. Riesci a pensare ad altri esempi?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Reti stradali e ferroviarie

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Chip di computer

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Catene di approvvigionamento

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Amicizie

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Connessioni neurali

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} Internet

:::

---

> id: intro

::: column.grow

In matematica, tutti questi esempi possono essere rappresentati come [__grafici__](gloss:graph) (da non confondere con il _grafico_ di una funzione). Un grafico è costituito da alcuni _punti_ chiamati [[vertici|circles|crossings]], alcuni dei quali sono collegati da [[spigoli|boundaries|pairs]].

__Teoria dei grafi__ è lo studio dei grafici e delle loro proprietà. È una delle aree più interessanti e visive della matematica e ha innumerevoli applicazioni importanti.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---

> id: intro-1

Possiamo disegnare il layout di semplici grafici usando cerchi e linee. La posizione dei vertici e la lunghezza dei bordi è irrilevante - ci preoccupiamo solo di _come sono collegati_ l'uno all'altro. I bordi possono anche incrociarsi e non devono essere dritti.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} In alcuni grafici, i bordi vanno solo in una direzione. Questi sono chiamati [__grafici diretti__](gloss:directed-graph).

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Alcuni grafici sono costituiti da più gruppi di vertici che non sono collegati tra loro da bordi. Questi grafici sono __disconnessi__.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Altri grafici possono contenere più spigoli tra le stesse coppie di vertici o vertici collegati a se stessi (anelli).

:::

    // TODO maybe include examples of graphs with edges crossing, curved edges, etc.
    // could include an "is this a graph?" quiz

---

> id: intro-2

Siamo in grado di creare nuovi grafici da un grafico esistente rimuovendo alcuni vertici e bordi. Il risultato si chiama [__sottotogramma__](gloss:subgraph). Qui puoi vedere alcuni altri esempi di grafici, con bordi e vertici colorati che indicano un possibile sottografo:

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

Diciamo che l'ordine [__<<<<__](gloss:graph-order) di un grafico è il numero di vertici che ha. Il [__grado__](gloss:graph-degree) di un vertice è il numero di spigoli che si incontrano in quel vertice.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Ordine: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Ordine: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Laurea: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Laurea: [[6]]

:::

---

> id: intro-4

I grafici costituiti da un singolo ciclo di vertici sono chiamati [__cicli__](gloss:graph-cycle). Tutti i cicli hanno [[lo stesso numero di spigoli e vertici|more edges than vertices|fewer edges than vertices]].

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Dotato di queste nuove definizioni, esploriamo alcune delle affascinanti proprietà e applicazioni dei grafici.

---

> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges

## I ponti di Königsberg

::: column.grow

Uno dei primi matematici a pensare a grafici e reti fu [Leonhard Euler](bio:euler). Eulero era incuriosito da un vecchio problema riguardante la città di Königsberg vicino al Mar Baltico.

Il fiume Pregel divide Königsberg in quattro parti separate, che sono collegate da sette ponti. È possibile passeggiare per la città attraversando tutti i ponti esattamente una volta, ma non più di una volta? (Puoi iniziare e finire ovunque, non necessariamente nello stesso posto.)

Prova a trovare un percorso valido disegnando su queste mappe:

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

Nel caso di Königsberg sembra impossibile trovare un percorso valido, ma alcune delle altre città funzionano. Eulero è riuscito a trovare una semplice regola che può essere applicata a qualsiasi città, senza dover provare molte possibilità - usando la teoria dei grafi.

::: column.grow

Innanzitutto, dobbiamo convertire le mappe della città in grafici con bordi e vertici. Ogni isola o regione di terra è rappresentata da [[un vertice|an edge|an area]] e ogni ponte che collega due regioni è rappresentato da un [[bordo|vertex|street]] corrispondente.

{.reveal(when="blank-0 blank-1")} Ora il problema di "visitare una città mentre attraversi ogni ponte esattamente una volta" è diventato un problema di "tracciare un grafico con un colpo continuo mentre traccia ogni bordo esattamente una volta".

::: column(width=200)

    include svg/konigsberg.svg

:::

---

> id: bridges-2

Sulla carta, crea alcuni grafici diversi e poi prova a capire quali possono essere disegnati con un singolo tratto continuo.

    // p Try drawing these graphs with one continuous stroke:
    // p.todo Interactive coming soon…

---

> id: bridges-3
> goals: size prime eo

Proprio come per le mappe della città prima, scopriamo che alcuni grafici sono possibili mentre altri no. Per aiutarci a capire perché, etichettiamo ogni vertice con il suo [grado](gloss:graph-degree). Quindi possiamo colorare i vertici in diversi modi e provare a rivelare uno schema:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Value
        div(value="size") Size
        div(value="prime") Prime Numbers
        div(value="eo") Even and Odd
      .frame-body
        p(style="margin: 0"): strong These graphs are possible:
        include svg/vertex-orders-1.svg
        p(style="margin: 1em 0 0"): strong These graphs are not possible:
        include svg/vertex-orders-2.svg

---

> id: bridges-4

Confrontando questi numeri per i grafici che sono possibili e quelli che non sono possibili, sembra che un grafico possa essere disegnato se [[non ha più di due vertici "dispari"|only has “even” vertices|has no vertices with an order larger than 4|has an odd number of vertices|has no vertices of order 3]]. Questa condizione può essere spiegata se osserviamo solo un singolo vertice nel grafico:

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

Se scorri indietro sulla mappa di Königsberg, scoprirai che ci sono più di due isole con un numero dispari di ponti. Pertanto, un percorso che attraversa ogni ponte esattamente una volta è davvero impossibile - e questo è ciò che Leonard Euler ha scoperto. La scoperta di Eulero potrebbe non sembrare particolarmente utile nella vita reale, ma i grafici sono alla base di molti altri problemi geografici, come trovare indicazioni stradali tra due località. Scopriremo più di queste applicazioni in seguito.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes ## Strette di mano e appuntamenti

::: column.grow

Sei stato invitato a una meravigliosa festa di compleanno con i tuoi amici. Compreso te e l&#39;host, ci sono ${hnd}{hnd|5|3,15,1} persone presenti. La sera, mentre gli ospiti si preparano a partire, tutti si stringono la mano con tutti gli altri. Quante strette di mano ci sono in totale? Possiamo rappresentare le strette di mano usando un grafico: ogni persona è [[un vertice|an edge]] e ogni stretta di mano è [[un bordo|a vertex]].

{.reveal(when=&#39;blank-0 blank-1&#39;)} Ora è facile contare il numero di spigoli nel grafico. Troviamo che lì con ${hnd} persone, ci sono ${hnd*(hnd-1)/2} strette di mano.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Invece di contare tutti i bordi in grafici di grandi dimensioni, potremmo anche provare a trovare una semplice formula che ci dice il risultato per _qualsiasi_ numero di ospiti . Ognuna delle ${n}{n|5|2,8,1} persone alla festa stringe la mano a ${n-1} altre. Ciò rende ${n} × ${n-1} = ${n×(n-1)} strette di mano in totale. Per _n_ persone, il numero di strette di mano sarebbe [[`n×(n–1)`|`n×(n+1)`|`n^2`]].

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Purtroppo questa risposta non è del tutto corretta. Notare come <x-target to=".handshakes tr:first-child td:first-child, .handshakes tr:first-child td:nth-child(2)"> le prime due voci nella riga superiore </x-target> sono in realtà gli stessi, appena capovolti. In effetti, abbiamo contato ogni stretta di mano [[due volte|once|three times]], _{span.reveal(when="blank-0")} una volta per ciascuna delle due persone coinvolte. Ciò significa che il numero corretto di strette di mano per ${n}{n|5|2,25,1} ospiti è `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")`._

---
> id: handshakes-3

I grafici delle strette di mano sono speciali perché ogni vertice è collegato ad ogni altro vertice. I grafici con questa proprietà sono chiamati __grafici completi__. Il grafico completo con 4 vertici è spesso abbreviato come `K_4`, il grafico completo con 5 vertici è noto come `K_5` e così via. Abbiamo appena dimostrato che un grafico completo con `n` vertici, `K_n`, ha `(n × (n-1))/2` bordi.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

In un altro giorno, sei invitato a un evento di speed dating per ${m}{m|5|2,8,1} ragazzi e ${f}{f|4|2,8,1} ragazze. Ci sono molti tavolini e ogni ragazzo trascorre 5 minuti con ciascuna delle ragazze. Quante "date" individuali ci sono in totale?

::: column.grow

In questo caso, il grafico corrispondente è costituito da due serie separate di vertici. Ogni vertice è collegato a tutti i vertici in [[il set opposto|its own]], ma nessuno dei vertici in [[è il suo|the opposite]] set. I grafici che hanno questo layout sono chiamati __grafici bipartiti__.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Il grafico bipartito con due serie di dimensioni _x_ e _y_ è spesso scritto come `K_"x,y"`. Ha [[`x×y`|`x+y`|`2x–y`]] bordi, _{span.reveal(when="blank-2")}, il che significa che nell&#39;esempio precedente ci sono ${m} × ${f} = ${m×f} date._

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Grafici planari

::: column.grow

Ecco un altro enigma relativo alla teoria dei grafi. In un piccolo villaggio ci sono tre case e tre impianti di servizio che producono acqua, elettricità e gas. Dobbiamo collegare ciascuno dei corsi a ciascuno degli impianti di servizio, ma a causa della disposizione del villaggio, i diversi tubi e cavi non possono attraversare.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Prova a collegare ciascuna delle case a ciascuna delle società di servizi sottostanti, senza che nessuna delle tue linee si intersechi:

    .frame.fill
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Proprio come i ponti di Königsberg prima, scopri rapidamente che anche questo problema è impossibile. Sembra che alcuni grafici possano essere disegnati senza bordi sovrapposti - questi sono chiamati __grafici planari__ - ma altri no.

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_3` è planare.

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center} `K_4` [[è planare|is not planar]].

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center} `K_5` [[non è planare|is planar]].

:::

---
> id: utilities-2

Il [grafico completo](gloss:complete-graph) `K_5` è il grafico più piccolo che non è planare. Qualsiasi altro grafico che contiene `K_5` in qualche modo un sottografo non è planare. Ciò include `K_6`, `K_7` e tutti i grafici completi più grandi. Il grafico nel puzzle delle tre utility è il [grafico bipartito](gloss:bipartite-graph) `K_"3,3"`. Si scopre che qualsiasi grafico non planare deve contenere una `K_5` o una `K_"3,3"` (o una [suddivisione](gloss:subdivision) di questi due grafici) come un sottografo. Questo si chiama _teorema di Kuratowski_.

---
> id: planarity
> goals: planarity

    .box.problem-box
      .box-title: h3 Planarity
      .box-body
        x-solved
        svg#planarity.frame(viewBox="0 0 640 320")
        p.md This is a planar graph, but the ${n}{n|7|5,20,1} vertices have been scrambled up. Rearrange the vertices so that none of the edges overlap.
        button.btn New Random Graph

---
> id: euler

### Formula di Eulero

Tutti i grafici planari dividono il piano su cui sono disegnati in un numero di aree, chiamate __facce__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Vertici <br> [[5]] Volti <br> [[10]] Bordi <br> _{span.euler-sum} 11 Vertici + Facce_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Vertici <br> [[7]] Volti <br> [[14]] Bordi <br> _{span.euler-sum} 15 vertici + facce_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Vertici <br> [[13]] Volti <br> [[24]] Bordi <br> _{span.euler-sum} 25 vertici + facce_

:::

---
> id: euler-1

Quando si confrontano questi numeri, noterai che il numero di bordi è sempre [[uno in meno|bigger|the same]] rispetto al numero di facce più il numero di vertici. In altre parole, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Questo risultato si chiama __equazione di Eulero__ e prende il nome dallo stesso [matematico](bio:euler) che ha risolto il problema dei ponti di Königsberg. Sfortunatamente, ci sono infiniti grafici e non possiamo controllare tutti per vedere se l&#39;equazione di Eulero funziona. Invece possiamo provare a trovare una semplice [prova](gloss:proof) che funziona per qualsiasi grafico ...

---
> id: euler-2

    x-slideshow
      .stage(slot="stage")
        svg.frame(viewBox="0 0 640 200")
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=30  x2=150 y2=100)
          line.link(style="stroke-width: 3px; display: none" x1=150 y1=100 x2=270 y2=170)
          line.link(style="stroke-width: 3px; display: none" x1=270 y1=170 x2=390 y2=100)
          line.link(style="stroke-width: 3px" x1="390" y1="100" x2="270" y2="30")
          circle.node(cx=270 cy=30  r=7)
          circle.node(cx=150 cy=100 r=7 style="display: none")
          circle.node(cx=270 cy=170 r=7 style="display: none")
          circle.node(cx=390 cy=100 r=7 style="display: none")
    
        div(style="position: absolute; top: 20px; right: 0; font-size: 1.2em;")
          table.grid.table-small
            tr
              td: strong.blue.i F
              td: strong.green.i V
              td: strong.red.i E
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1
    
      .legend(slot="legend") The simplest graph consists of a single vertex. We can easily check that Euler’s equation works.
      .legend(slot="legend") Let us add a new vertex to our graph. We also have to add an edge, and Euler’s equation still works.
      .legend(slot="legend") If we want to add a third vertex to the graph we have two possibilities. We could create a small triangle: this adds one vertex, one face and two edges, so Euler’s equation still works.
      .legend(slot="legend") Instead we could simply extend the line by one: this adds one vertex and one edge, and Euler’s equation works.
      .legend(slot="legend") Let’s keep going: if we now create a quadrilateral we add one vertex, two edges and one face. Euler’s equation still works.

---
> id: euler-3

Qualsiasi grafico (finito) può essere costruito iniziando con un vertice e aggiungendo più vertici uno per uno. Abbiamo dimostrato che, in qualunque modo aggiungiamo nuovi vertici, l&#39;equazione di Eulero è valida. Pertanto è valido per tutti i grafici. Il processo che abbiamo usato si chiama __induzione matematica__. È una tecnica molto utile per dimostrare i risultati in infiniti casi, semplicemente partendo dal caso più semplice e dimostrando che il risultato vale in ogni fase della costruzione di casi più complessi.     .svg-block: include svg/dominoes.svg

---
> id: euler-4

Molti grafici planari sembrano molto simili alle reti di [poliedri](gloss:polyhedron), forme tridimensionali con facce [poligonali](gloss:polygon). Se pensiamo ai poliedri come fatti di elastici, possiamo immaginare di allungarli fino a quando non diventano piatti, grafici planari:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Ciò significa che noi può usare la formula di Eulero non solo per i grafici planari ma anche per tutti i poliedri - con una piccola differenza. Quando si trasformano i poliedri in grafici, una delle facce scompare: la faccia più in alto dei poliedri diventa "l&#39;esterno"; dei grafici. In altre parole, se si conta il numero di __{.red} bordi__, __{.blue} facce__ e __{.green} vertici__ di _qualsiasi_ poliedro, scoprirai che _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]].

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Icosaedro__  
__{.blue} 20__ Volti  
__{.green} 12__ Vertici  
__{.red} 30__ Bordi

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodecahedron__  
__{.blue} 62__ Volti  
__{.green} 60__ Vertici  
__{.red} 120__ Bordi

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Icosaedro troncato__  
__{.blue} 32__ Volti (12 neri, 20 bianchi)  
__{.green} 60__ Vertici  
__{.red} 90__ Bordi

:::

---
> id: maps
> section: map-colouring ## Colorazione delle mappe

::: column.grow

Abbiamo già usato la teoria dei grafi con alcune mappe. Mentre rimpiccioliamo, le singole strade e i ponti scompaiono e invece vediamo il contorno di interi paesi. Quando si colora una mappa - o qualsiasi altro disegno costituito da regioni distinte - i paesi adiacenti non possono avere lo stesso colore. Potremmo anche voler usare il minor numero possibile di colori diversi. Alcune semplici "mappe", come una scacchiera, richiedono solo due colori (bianco e nero), ma la maggior parte delle mappe complesse ha bisogno di più.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Quando si colora la mappa degli Stati USA, 50 colori sono ovviamente sufficienti, ma sono necessari molti meno. Prova a colorare le mappe sottostanti con il minor numero di colori possibile:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)
    
    x-tabbox.four-colours.full-width
      .tab
        h3 United States #[span.check(when="map-0")]
        x-solved
        include svg/colours-1.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution
      .tab
        h3 South America #[span.check(when="map-1")]
        x-solved
        include svg/colours-2.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution
      .tab
        h3 Germany #[span.check(when="map-2")]
        x-solved
        include svg/colours-3.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        include svg/colours-4.svg
        .colour-count Number of colours: #[span 0]
        button.btn.clear Clear
        button.btn.solve Solution

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Tutte queste mappe possono essere colorate con solo quattro colori diversi, ma non è difficile immaginare che altre mappe molto complicate potrebbe aver bisogno di molti più colori. In effetti, alcune mappe richiedono __almeno__ quattro colori, ogniqualvolta contengano quattro paesi tutti collegati tra loro.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Come in precedenza, possiamo convertire una mappa con paesi e confini in un grafico planare: ogni paese diventa [[un vertice|an edge|a face]] e i paesi che [[condividono un confine|have the same colour]] connettersi con un bordo:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Ora vogliamo colorare i vertici di un grafico e due vertici devono avere un colore diverso se sono collegati da un bordo.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

Nel 1852, lo studente di botanica [Francis Guthrie](bio:guthrie) dovette colorare una mappa delle contee in Inghilterra. Ha osservato che quattro colori sembravano sufficienti per qualsiasi mappa provasse, ma non era in grado di trovare una prova che funzionasse per _tutte le_ mappe. Questo si è rivelato un problema estremamente difficile ed è diventato noto come il teorema dei quattro colori __<<<<__. Durante i successivi 100 anni, molti matematici hanno pubblicato "prove" sul teorema dei quattro colori, solo per errori che possono essere trovati in seguito. Alcune di queste prove non valide erano così convincenti che ci sono voluti più di 10 anni per scoprire errori. Per molto tempo, i matematici non sono stati in grado né di dimostrare che quattro colori sono sufficienti, né di trovare una mappa che richiedesse più di quattro colori.

:::

---
> id: maps-4

Poco è stato fatto progressi sul problema dei quattro colori fino al 1976, quando [Wolfgang Haken](bio:haken) e [Kenneth Appel](bio:appel) hanno finalmente usato un computer per risolverlo. Ridussero all'infinito molte possibili mappe a casi speciali del 1936, che furono controllati da un computer per un totale di oltre 1000 ore.

    x-parallax.full-width(background="images/ibm-360.jpg")

---

> id: maps-5

Il teorema dei quattro colori è il primo noto teorema matematico a essere dimostrato usando un computer, qualcosa che è diventato molto più comune e meno controverso da allora. Computer più veloci e un algoritmo più efficiente significano che oggi puoi dimostrare il teorema dei quattro colori su un laptop in poche ore.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---

> id: maps-6

::: column.grow

Il teorema dei quattro colori funziona solo per le mappe su un piano piatto o una sfera e in cui tutti i paesi sono costituiti da un'unica area.

Tuttavia i matematici hanno anche esaminato le mappe degli imperi _<<<<_, in cui i paesi possono essere composti da più componenti disconnesse, e le mappe su pianeti di forma diversa, come un toro (forma di ciambella). In questi casi potresti aver bisogno di più di quattro colori e le prove diventano ancora più difficili.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---

> id: salesman
> section: travelling-salesman

## Il problema del commesso viaggiatore

::: column.grow(parent="right")

Pensiamo ancora una volta a reti e mappe. Immagina che un servizio di consegna debba visitare ${tsn}{tsn|8|2,50,1} città diverse per distribuire i pacchi. Possiamo pensare a queste città come ai vertici in un grafico. Se tutte le città sono collegate da strade, questo è un [[grafico completo|cycle|bipartite graph]], quindi ci sono <mfrac> <mrow> ${tsn} × (${tsn} - 1) </mrow> <mn> 2 </mn> </mfrac> = ${tsn*(tsn-1)/2} bordi in totale.

Il camion di consegna deve visitare tutte le città, in qualsiasi ordine. Nel problema dei ponti di Königsberg volevamo trovare percorsi che percorressero _ogni bordo_ esattamente uno. Ora vogliamo trovare percorsi che visitino _ogni vertice_ esattamente una volta. Questi percorsi sono chiamati __cicli hamiltoniani__.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---

> id: salesman-1

Esistono innumerevoli possibilità diverse per i cicli hamiltoniani nei grafici completi. In effetti, possiamo scegliere qualsiasi vertice come vertice iniziale e quindi scegliere una delle città rimanenti in qualsiasi ordine:

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---

> id: salesman-2

In un grafico con ${tsn1}{tsn1|4|2,10,1} città, ogni ciclo hamiltoniano deve contenere anche ${tsn1} città. Adesso,

    ul.var(:html="tsmString(tsn1)")

Ciò significa che, in totale, ci sono ${tsnPaths(tsn1)} possibili percorsi. Una scorciatoia per questo prodotto è ${tsn1}! o ${tsn1} __Fattoriale__.

Potresti immaginare che potrebbe non essere possibile viaggiare direttamente tra due città - senza passare per un'altra città. In quel caso non abbiamo più un grafico completo e trovare il numero di cicli hamiltoniani, se esistono, diventa molto più difficile.

---

> id: salesman-3

::: column.grow(parent="right")

Finora abbiamo ignorato il fatto che alcune città potrebbero essere più distanti di altre. Nella vita reale, tuttavia, questa è una considerazione molto importante: non vogliamo solo trovare _qualsiasi percorso_ ma vogliamo trovare il percorso più breve. Questo è chiamato __Problema del commesso viaggiatore__. Deve essere risolto non solo nei trasporti e nella logistica, ma anche quando si posizionano i transistor su microchip, per rendere i computer più veloci o quando si analizza la struttura del [DNA](gloss:dna).

Un metodo semplice sarebbe quello di provare tutti i percorsi possibili, trovare la lunghezza di ciascuno e quindi scegliere quello più breve. Tuttavia abbiamo appena dimostrato che, anche con solo ${tsn2}{tsn2|10|2,20,1} città ci sono ${tsn2}! = ${factorial(tsn2)} possibili percorsi. Una volta che hai centinaia o migliaia di vertici, provare tutti i possibili percorsi diventa impossibile, anche usando computer potenti.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---

> id: salesman-4
> goals: move

Purtroppo non esiste un algoritmo più efficiente per risolvere il problema del commesso viaggiatore. Invece, matematici e scienziati informatici hanno sviluppato vari algoritmi che trovano _buone soluzioni_, anche se potrebbero non essere le migliori. Questi algoritmi, che forniscono solo soluzioni approssimative, sono chiamati __Euristica__.

Prova a riorganizzare le città su questa mappa e osserva come cambia il percorso più breve tra di esse. Puoi rimuovere le città toccandole e puoi aggiungere città facendo clic in un punto qualsiasi della mappa (fino a 8):

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---

> id: salesman-5

::: column.grow

Il __Greedy Algorithm__ (o Algoritmo del vicino più vicino) è molto semplice: inizi in una città a caso e ti sposti consecutivamente nella città più vicina che non hai mai visitato prima. Una volta che hai visitato tutte le città, ti fermi.

::: column(width=300)

{.todo} Animazione in arrivo ...

:::

Puoi mostrare che, in media, i percorsi trovati usando l'algoritmo avido sono più lunghi del 25% rispetto al percorso più breve possibile.

---

> id: salesman-6

::: column.grow

L'algoritmo __2-Opt__ inizia con un percorso casuale possibile. Quindi scegli ripetutamente due bordi e scambiarli se ciò ridurrebbe la lunghezza del percorso. Ti fermi quando non puoi ridurre ulteriormente la lunghezza scambiando qualsiasi coppia di spigoli.

::: column(width=300)

{.todo} Animazione in arrivo ...

:::

---

> id: ants

Si scopre che, molto prima ancora che esistessero i computer, la Natura aveva trovato un modo intelligente per trovare percorsi ottimali tra diverse posizioni: nelle colonie di formiche.

    x-parallax.full-width(background="images/ants.jpg")

Le formiche vogliono trovare i percorsi più brevi possibili tra il loro nido e le possibili fonti di cibo. Possono comunicare tra loro attraverso sostanze chimiche che lasciano lungo il loro cammino e quali altre formiche possono seguire.

---

> id: ants-1

::: column.grow

* La colonia di formiche invia molti esploratori che inizialmente viaggiano in direzioni casuali. Una volta trovato il cibo, ritornano, lasciando dietro di sé una scia di feromone.
* Altre formiche tendono a seguire una scia quando ne trovano una, che le conduce al cibo. Durante il viaggio di ritorno depositano più feromoni, rafforzando così la pista.
* Nel tempo, il feromone evapora. Più lungo è un percorso, maggiore è il tempo impiegato dalle formiche per percorrerlo, quindi il feromone ha più tempo per evaporare. I percorsi brevi, d'altra parte, possono essere rinforzati più rapidamente, quindi la loro forza aumenta più velocemente.


::: column(width=240)

{.todo} Diagramma in arrivo ...

:::

---

> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Gli algoritmi di Ant Colony System (ACS) provano a replicare questo comportamento sui computer, usando molte formiche "virtuali". Possono rapidamente trovare ottime soluzioni per il problema del commesso viaggiatore.

Una proprietà particolarmente utile degli algoritmi ACS è che possono essere eseguiti continuamente e adattarsi in tempo reale alle modifiche al grafico. Questi cambiamenti potrebbero essere causati da incidenti stradali e chiusure di strade su reti stradali o da picchi di traffico ai server Web su reti di computer.

:::

---

> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Il problema del commesso viaggiatore è [NP-hard](gloss:np), il che significa che è molto difficile essere risolto dai computer (almeno per un gran numero di città).

Trovare un algoritmo veloce ed esatto avrebbe serie implicazioni nel campo dell'informatica: significherebbe che ci sono algoritmi veloci per _tutti i_ problemi NP-difficili. Renderebbe inoltre inutile la maggior parte della sicurezza di Internet, il che si basa sul fatto che alcuni problemi sono ritenuti molto difficili per i computer.

Trovare un algoritmo veloce per risolvere il problema del venditore ambulante risolverebbe anche uno dei più noti problemi aperti in matematica e informatica, il problema __P vs NP__. È uno dei sette [Millennium Prize Problems](gloss:millennium-prize), ciascuno con un premio di $ 1 milione.

:::

---

> section: scheduling
> sectionStatus: dev

## Problemi di pianificazione

FARE

---

> id: applications
> section: applications

## Grafici nella vita quotidiana

Abbiamo visto molte diverse applicazioni della teoria dei grafi nei capitoli precedenti, sebbene alcune di esse fossero un po 'inventate. Si scopre, tuttavia, che i grafici sono alla base di molti oggetti, concetti e processi nella vita di tutti i giorni.

::: column.grow

Internet, ad esempio, è un vasto grafico virtuale. Ogni vertice è una singola pagina Web e ogni margine indica che esiste un collegamento ipertestuale tra due pagine. Nota che i collegamenti vanno solo in un modo, quindi questo grafico è [[diretto|multi-line|conected]] e che questo grafico è _molto, molto, grande_.

    // * "can be viewed as" instead of "is a vast, virtual graph". "Every
    // vertex represens an individual webpage and every edge a hyperlink
    // from one page to another".

Alcuni siti Web, come Wikipedia o Facebook, hanno molti collegamenti in entrata, mentre molti siti più piccoli possono avere pochissimi collegamenti in entrata. Questo è il concetto di base che Google utilizza per ordinare i risultati della ricerca.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---

> id: applications-1

I siti Web con più collegamenti in entrata tendono ad essere di qualità superiore e dovrebbero essere visualizzati nella parte superiore dei risultati di ricerca. Ad esempio, quando si cerca "Londra", i siti di informazione turistica ufficiali vengono mostrati davanti a piccoli negozi a Londra o ai blog di persone che vivono a Londra. Questa semplice idea della teoria dei grafi, l '__Page Rank Algorithm__, ha reso Google significativamente migliore rispetto ad altri primi motori di ricerca.

---

> id: applications-2

Internet è la più grande rete mai creata dall'umanità. Questa immagine mostra una proporzione molto piccola di tutti i server connessi a Internet:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---

> id: applications-3

Mentre siti Web e collegamenti ipertestuali formano un grafico _virtuale_, esiste anche la rete _fisica_ di computer, server, router, linee telefoniche e cavi.

::: column.grow(parent="right")

Ogni volta che si effettua una telefonata o si carica un sito Web, gli operatori di rete devono trovare un modo per collegare il mittente e il destinatario, senza superare la capacità di ogni singolo cavo o connessione. La teoria dei grafi e la probabilità consentono di garantire un servizio affidabile, ad esempio trovando diversioni quando una determinata connessione è occupata.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---

> id: applications-4

I grafici svolgono anche un ruolo importante nel trasporto e nella navigazione. Tutte le reti di volo, treno e metropolitana formano grafici che possono essere utilizzati per la creazione di orari efficienti. Uno dei grafici più riconoscibili è la mappa della metropolitana di Londra:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---

> id: applications-5

::: column.grow

Tutte le strade e le autostrade formano anche una grande rete, che viene utilizzata dai servizi di navigazione come Google Maps durante l'elaborazione del percorso più breve tra due punti dati.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

In futuro, __Sistemi di trasporto intelligenti__ ridurranno la congestione e gli incidenti indirizzando le auto in modo più efficiente, utilizzando i dati sulla posizione raccolti da smartphone e auto a guida autonoma. Ciò potrebbe risparmiare milioni di ore perse sulla strada ogni anno, ridurre significativamente l'inquinamento e consentire ai servizi di emergenza di viaggiare più velocemente.

:::

---

> id: applications-6

Questa immagine mostra la rete di voli di compagnie aeree commerciali nel nord Europa.

    x-parallax.full-width(background="images/flights.jpg")

---

> id: applications-7

Ci sono innumerevoli altri grafici nella scienza, ingegneria o vita quotidiana:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} I legami tra atomi in __molecole__ e griglie cristalline formano un grafico.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} La __diffusione di malattie__ ed epidemie può essere modellata usando una rete.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} In Biologia, gli __alberi evolutivi__ che mostrano gli antenati delle specie formano un grafico.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} I diversi componenti di __circuiti elettrici__ e chip di computer formano una rete.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} La struttura grammaticale di __lingue__ può essere modellata utilizzando grafici, ad esempio per creare algoritmi di traduzione.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} I grafici hanno anche molte applicazioni in __probabilità__, __teoria dei giochi__ e __matematica finanziaria__.

:::

---

> id: social

### Social Network

Infine, pensiamo a un esempio particolarmente buono di grafici che esistono nella vita di tutti i giorni: i social media. Qui, i vertici rappresentano [[persone|friends|networks]] e i bordi rappresentano amicizie, Mi piace, abbonamenti o follower.

Quando disegniamo grafici per social media, potremmo vedere alcuni __gruppi__ di amici comuni, che potrebbero essere andati nella stessa scuola o vivere nella stessa città. Possiamo anche determinare la __centralità delle persone__, che dipende da quanto è ben collegato un vertice e quale può essere una misura della popolarità di una persona sui social media.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---

> id: social-1

::: column.grow

Nel 2014, Facebook aveva 1,4 miliardi di utenti attivi e un totale di oltre 200 miliardi di amicizie. La metà di tutti gli utenti di Facebook ha più di 200 amici e poiché la maggior parte dei nostri amici ha un numero simile di amici, potremmo facilmente avere decine di migliaia di _amici di amici_.

Una domanda interessante sarebbe ora: se scegli due utenti casuali di Facebook, quanti "limiti dell'amicizia" dovresti seguire per passare dall'uno all'altro? Ad esempio, la distanza tra amici è [[1]], la distanza tra amici di amici è [[2]] e così via.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---

> id: social-2

Nel 2016, Facebook ha condotto [uno studio](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) per determinare come i suoi utenti sono collegati tra loro. Hanno scoperto che, in media, sei connesso a _chiunque altro_ su Facebook tramite al massimo 3,57 altre persone. E questo include celebrità, politici o persino reali!

In altre parole, se scegli uno dei miliardi di utenti di Facebook in tutto il mondo, probabilmente avranno un amico di un amico che conosce un amico di uno dei tuoi amici. Diciamo che ci sono 3,57 __gradi di separazione__.

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---

> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

Nel 1929, quando l'autore ungherese [Frigyes Karinthy](bio:karinthy) per la prima volta propose l'idea di "sei gradi di separazione", non c'erano internet o social media, ma il mondo aveva già iniziato a diventare più interconnessi.

Nel 1967, [Stanley Milgram](bio:milgram) condusse un primo esperimento empirico, dove fu chiesto a 296 partecipanti che vivevano nel Nebraska e nel Kansas di consegnare una lettera a una persona che viveva a Boston, nel Massachusetts. Tutti dovevano scegliere un amico a cui inviare la lettera, che poi sceglieva un altro amico. Ad ogni passo, la lettera si avvicinava a Boston. Milgram scoprì che c'erano, in media, solo 5,2 amici intermedi & # 8211; 5,2 gradi di separazione.

:::

Oggi ognuno di noi fa parte di innumerevoli grafici invisibili, che sono alla base delle nostre interazioni sociali, viaggi, Internet e tecnologia, scienza e molto altro ancora.
