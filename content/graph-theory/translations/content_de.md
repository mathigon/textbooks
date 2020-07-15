# Graphen und Netzwerke

## Einführung

> id: intro-0
> section: introduction

Wir haben es in unserem täglichen Umfeld mit unzähligen Netzwerken und Verbindungen zu tun: Straßen
 und Eisenbahnschienen, Telefonleitungen, das Internet, elektronische Schaltkreise und sogar
 Molekülbindungen. Außerdem gibt es _soziale Netzwerke_ zwischen Freunden und Familien. Kannst du
 dir noch andere Beispiele vorstellen?

::: column(width=220 parent="padded-thin")

    x-img(src="images/network1.jpg" width=220 height=220 lightbox)

{.caption} Straßen- und Schienennetze

::: column(width=220)

    x-img(src="images/network6.jpg" width=220 height=220 lightbox)

{.caption} Computer-Chips

::: column(width=220)

    x-img(src="images/network3.jpg" width=220 height=220 lightbox)

{.caption} Lieferketten

::: column(width=220)

    x-img(src="images/network2.jpg" width=220 height=220 lightbox)

{.caption} Freundschaften

::: column(width=220)

    x-img(src="images/network7.jpg" width=220 height=220 lightbox)

{.caption} Neuronale Verbindungen

::: column(width=220)

    x-img(src="images/network4.jpg" width=220 height=220 lightbox)

{.caption} Das Internet

:::

---
> id: intro

::: column.grow

In der Mathematik können all diese Beispiele als __Graphen__](gloss:graph) dargestellt werden
 (nicht zu verwechseln mit dem _Graph_ einer Funktion). Ein Graph besteht aus einzelnen
 _Punkten_ die [[Knoten|Kreise|Kreuzungen]] genannt werden, von denen einige durch
 [[Kanten|Grenzen|Paare]] verbunden sind.

Die __Graphentheorie__ beschäftigt sich mit Graphen und ihren Eigenschaften. Sie ist
 eines der spannendsten und visuell ansprechendsten Gebiete der Mathematik und hat unzählige wichtige Anwendungen.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Wir können das Layout von einfachen Graphen mit Kreisen und Linien zeichnen. Die Position
 der Knoten und die Länge der Kanten spielt dabei keine Rolle - uns interessiert nur, _wie sie
 miteinander verbunden_ sind. Die Kanten können sich sogar kreuzen und müssen nicht unbedingt gerade sein.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} In manchen Graphen verlaufen die Kanten nur in eine Richtung. Diese werden [__gerichtete
Graphen__](gloss:directed-graph) genannt.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Manche Graphen bestehen aus mehreren Gruppen von Knoten, die nicht durch Kanten miteinander
verbunden sind. Diese Graphen nennt man __nicht zusammenhängend__.

::: column(width=200)

    svg.graph(height=120 width=200 style="margin: 0 auto .8em")

{.caption} Andere Graphen können mehrere Kanten zwischen denselben Knotenpaaren enthalten,
oder Knoten, die mit sich selbst verbunden sind (Schleifen).

:::

---
> id: intro-2

Wir können neue Graphen aus einem bestehenden Graphen erstellen, indem wir einige der Knoten und
 Kanten entfernen. Das Ergebnis nennt sich [__Teilgraph__](gloss:subgraph). Hier siehst du ein paar
 weitere Beispiele für Graphen, mit farbigen Kanten und Knoten, die auf einen möglichen
 Teilgraphen hinweisen:

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

Wir sagen, dass die [__Ordnung__](gloss:graph-order) eines Graphen die Anzahl der Knoten ist,
 die er hat. Der [__Grad__]( gloss: graph-degree) eines Knotens ist die Anzahl der Kanten, die
 sich an diesem Knoten treffen.

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Ordnung: [[5]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Ordnung: [[8]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grad: [[3]]

::: column(width=130)

    svg.graph(height=120 width=120 style='margin: 0 auto .8em')

{.text-center} Grad: [[6]]

:::

---
> id: intro-4

Graphen, die aus einem einzigen Knoten-Ring bestehen, werden als [__Kreisgraphen__](gloss:graph-cycle)
 bezeichnet. Alle Kreisgraphen haben [[die gleiche Anzahl von Kanten und Knoten|mehr Kanten als Knoten|weniger Kanten als Knoten]].

    .row
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')
      svg.graph(style='width: 120px; height: 120px;')

{.reveal(when="blank-0")} Nachdem wir diese neuen Definitionen eingeführt haben, wollen wir nun einige der
faszinierenden Eigenschaften und Anwendungen von Graphen näher betrachten.

---
> id: bridges-0
> title: The Bridges of Königsberg
> section: bridges

## Die Brücken von Königsberg

::: column.grow

Einer der ersten Mathematiker, der über Graphen und Netzwerke nachdachte, war [Leonhard Euler](bio:euler) . Euler war fasziniert von einem alten Problem in Bezug auf die Stadt Königsberg in der Nähe der Ostsee. 

Der Fluss Pregel teilt Königsberg in vier separate Teile, die durch sieben Brücken verbunden sind. Ist es möglich, alle Brücken genau einmal zu durchqueren - aber nicht mehr als einmal? (Sie können überall beginnen und enden, nicht unbedingt am selben Ort.) 

Versuchen Sie, eine gültige Route zu finden, indem Sie auf diese Karten zeichnen: 

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

Im Fall von Königsberg scheint es unmöglich zu sein, eine gültige Route zu finden, aber einige der anderen Städte funktionieren. Euler gelang es, eine einfache Regel zu finden, die auf jede Stadt angewendet werden kann, ohne viele Möglichkeiten ausprobieren zu müssen - mithilfe der Graphentheorie. 

::: column.grow

Zuerst müssen wir die Stadtpläne in Diagramme mit Kanten und Eckpunkten konvertieren. Jede Insel oder Region des Landes wird durch [[einen Scheitelpunkt dargestellt | eine Ecke | Ein Bereich]] und jede Brücke, die zwei Regionen verbindet, wird durch eine entsprechende [[Kante dargestellt | Scheitel | Straße]] . 

{.reveal(when="blank-0 blank-1")} Das Problem, „eine Stadt zu bereisen, während jede Brücke genau einmal überquert wird“, ist nun zu einem Problem geworden, „einen Graphen mit einem kontinuierlichen Strich zu zeichnen, während jede Kante genau einmal verfolgt wird“. 

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Überlegen Sie sich auf dem Papier ein paar verschiedene Grafiken und versuchen Sie dann herauszufinden, welche mit einem einzigen, kontinuierlichen Strich gezeichnet werden können. 

---
> id: bridges-3
> goals: size prime eo

Genau wie bei den Stadtplänen zuvor stellen wir fest, dass einige Grafiken möglich sind, andere nicht. Um zu verstehen, warum, beschriften wir jeden Scheitelpunkt mit seinem [Grad](gloss:graph-degree) . Dann können wir die Eckpunkte auf verschiedene Arten färben und versuchen, ein Muster aufzudecken: 

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

Vergleicht man diese Zahlen mit Graphen, die möglich sind, und solchen, die nicht möglich sind, so scheint es, dass ein Graph gezeichnet werden kann, wenn er [[nicht mehr als zwei „ungerade“ Eckpunkte hat | hat nur "gerade" Eckpunkte | hat keine Eckpunkte mit einer Ordnung größer als 4 | hat eine ungerade Anzahl von Eckpunkten | hat keine Eckpunkte der Ordnung 3]] . Diese Bedingung kann erklärt werden, wenn wir nur einen einzelnen Scheitelpunkt in der Grafik betrachten: 

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

Wenn Sie zurück zur Karte von Königsberg scrollen, werden Sie feststellen, dass es mehr als zwei Inseln mit einer ungeraden Anzahl von Brücken gibt. Daher ist eine Route, die jede Brücke genau einmal überquert, in der Tat unmöglich - und genau das hat Leonard Euler entdeckt. 

Eulers Entdeckung mag im wirklichen Leben nicht besonders nützlich erscheinen, aber Diagramme bilden die Grundlage für viele andere geografische Probleme, z. B. das Finden von Richtungen zwischen zwei Orten. Wir werden später mehr von diesen Anwendungen entdecken. 

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes

## Handshakes und Dating 

::: column.grow

Sie wurden zu einer wundervollen Geburtstagsfeier mit Ihren Freunden eingeladen. Einschließlich sich selbst und des Gastgebers gibt es ${hnd}{hnd|5|3,15,1} anwesende Personen. 

Am Abend, wenn die Gäste bereit sind zu gehen, geben sich alle anderen die Hand. Wie viele Handshakes gibt es insgesamt? 

Wir können die Handshakes anhand eines Diagramms darstellen: Jede Person ist [[ein Scheitelpunkt | eine Kante]] , und jeder Handschlag ist [[eine Kante | ein Scheitelpunkt]] . 

{.reveal(when='blank-0 blank-1')} Jetzt ist es einfach, die Anzahl der Kanten im Diagramm zu zählen. Wir finden das dort mit ${hnd} Menschen gibt es ${hnd*(hnd-1)/2} Handshakes. 

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Anstatt alle Kanten in großen Diagrammen zu zählen, könnten wir auch versuchen, eine einfache Formel zu finden, die das Ergebnis für eine _beliebige_ Anzahl von Gästen angibt. 

Jedes von den ${n}{n|5|2,8,1} Leute auf der Party geben sich die Hand ${n-1} Andere. Das macht ${n} × ${n-1} = ${n×(n-1)} Handshakes insgesamt. Für _n_ Personen wäre die Anzahl der Handshakes [[`n×(n–1)`|`n×(n+1)`|`n^2`]] . 

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Leider ist diese Antwort nicht ganz richtig. Beachte wie <x-target to=".handshakes tr:first-child td:first-child, .handshakes tr:first-child td:nth-child(2)">die ersten beiden Einträge in der oberen Reihe</x-target> sind eigentlich gleich, nur umgedreht. 

Tatsächlich haben wir jeden Handschlag [[zweimal gezählt | Einmal | dreimal]] _{span.reveal(when="blank-0")} einmal für jede der beiden beteiligten Personen. Dies bedeutet, dass die richtige Anzahl von Handshakes für ${n}{n|5|2,25,1} Gäste ist `(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` ._ 

---
> id: handshakes-3

Die Handshake-Diagramme sind etwas Besonderes, da jeder Scheitelpunkt mit jedem anderen Scheitelpunkt verbunden ist. __Diagramme__ mit dieser Eigenschaft werden als __vollständige Diagramme bezeichnet__ . Das vollständige Diagramm mit 4 Eckpunkten wird häufig als abgekürzt `K_4` ist der vollständige Graph mit 5 Eckpunkten bekannt als `K_5` , und so weiter. 

Wir haben gerade gezeigt, dass eine vollständige Grafik mit `n` Eckpunkte, `K_n` , hat `(n × (n-1))/2` Kanten. 

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

An einem anderen Tag sind Sie zu einem Speed-Dating-Event für eingeladen ${m}{m|5|2,8,1} Jungs und ${f}{f|4|2,8,1} Mädchen. Es gibt viele kleine Tische und jeder Junge verbringt 5 Minuten mit jedem der Mädchen. Wie viele einzelne "Daten" gibt es insgesamt? 

::: column.grow

In diesem Fall besteht der entsprechende Graph aus zwei getrennten Sätzen von Eckpunkten. Jeder Scheitelpunkt ist mit allen Scheitelpunkten im [[Gegenteil verbunden | seine eigene]] Menge, aber keine der Eckpunkte in [[seiner eigenen | der entgegengesetzte]] Satz. __Diagramme__ mit diesem Layout werden als __zweiteilige Diagramme bezeichnet__ . 

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Der zweigeteilte Graph mit zwei Sätzen der Größe _x_ und _y_ wird oft als geschrieben `K_"x,y"` . Es hat [[`x×y`|`x+y`|`2x–y`]] Kanten, _{span.reveal(when="blank-2")} was bedeutet, dass es im obigen Beispiel gibt ${m} × ${f} = ${m×f} Termine._ 

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Planare Graphen 

::: column.grow

Hier ist ein weiteres Rätsel, das sich auf die Graphentheorie bezieht. 

In einem kleinen Dorf gibt es drei Häuser und drei Versorgungsanlagen, die Wasser, Strom und Gas produzieren. Wir müssen jeden der Kurse mit jedem der Versorgungsanlagen verbinden, aber aufgrund der Anordnung des Dorfes dürfen sich die verschiedenen Rohre und Kabel nicht kreuzen. 

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Versuchen Sie, jedes der Häuser mit jedem der unten aufgeführten Versorgungsunternehmen zu verbinden, ohne dass sich eine Ihrer Linien kreuzt: 

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Genau wie bei den Königsberg-Brücken stellen Sie schnell fest, dass auch dieses Problem nicht möglich ist. Es scheint, dass einige Diagramme ohne überlappende Kanten gezeichnet werden können - diese werden als __planare Diagramme bezeichnet__ -, andere jedoch nicht. 

::: column(width=200)

    svg.graph(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_3` ist planar. 

::: column(width=200)

    svg.graph#planar-2(width=200 height=200 style="margin-bottom: .4em")

{.text-center}`K_4` [[ist planar | ist nicht planar]] . 

::: column(width=200)

    svg.graph#planar-3(width=200 height=200 style="margin-bottom: .4em;")

{.text-center}`K_5` [[ist nicht planar | ist planar]] . 

:::

---
> id: utilities-2

Das [komplette Diagramm](gloss:complete-graph) `K_5` ist der kleinste Graph, der nicht planar ist. Jedes andere Diagramm, das enthält `K_5` als Untergraph ist in gewisser Weise auch nicht planar. Das beinhaltet `K_6` , `K_7` und alle größeren vollständigen Grafiken. 

Das Diagramm in den drei Hilfsprogrammen ist das [zweiteilige Diagramm](gloss:bipartite-graph) `K_"3,3"` . Es stellt sich heraus, dass jeder nicht planare Graph entweder a enthalten muss `K_5` oder ein `K_"3,3"` (oder eine [Unterteilung](gloss:subdivision) dieser beiden Graphen) als Untergraph. Dies nennt man _Kuratowskis Theorem_ . 

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planarität 

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Dies ist ein planarer Graph, aber der ${n}{n|7|5,20,1} Eckpunkte wurden verschlüsselt. Ordnen Sie die Scheitelpunkte so an, dass sich keine der Kanten überlappt. 

    p.btn-row: button.btn New Random Graph

:::

---
> id: euler

### Eulers Formel 

Alle planaren Graphen unterteilen die Ebene, auf der sie gezeichnet werden, in eine Reihe von Bereichen, die als __Flächen bezeichnet werden__ . 

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Eckpunkte  
[[5]] Gesichter  
[[10]] Kanten  
_{span.euler-sum} 11 Eckpunkte + Gesichter_ 

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Eckpunkte  
[[7]] Gesichter  
[[14]] Kanten  
_{span.euler-sum} 15 Eckpunkte + Gesichter_ 

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Eckpunkte  
[[13]] Gesichter  
[[24]] Kanten  
_{span.euler-sum} 25 Eckpunkte + Gesichter_ 

:::

---
> id: euler-1

Wenn Sie diese Zahlen vergleichen, werden Sie feststellen, dass die Anzahl der Kanten immer [[eins weniger ist | größer | das gleiche]] wie die Anzahl der Flächen plus die Anzahl der Eckpunkte. Mit anderen Worten, _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + 1. Dieses Ergebnis heißt __Eulers Gleichung__ und ist nach demselben [Mathematiker benannt,](bio:euler) der das Problem der Königsbergbrücken gelöst hat. 

Leider gibt es unendlich viele Graphen und wir können nicht jeden überprüfen, ob die Euler-Gleichung funktioniert. Stattdessen können wir versuchen, einen einfachen [Beweis](gloss:proof) zu finden, der für jedes Diagramm funktioniert… 

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

Jeder (endliche) Graph kann erstellt werden, indem mit einem Scheitelpunkt begonnen und nacheinander weitere Scheitelpunkte hinzugefügt werden. Wir haben gezeigt, dass die Euler-Gleichung gültig ist, unabhängig davon, wie wir neue Eckpunkte hinzufügen. Daher gilt es für alle Grafiken. 

Der Prozess, den wir verwendet haben, heißt __mathematische Induktion__ . Es ist eine sehr nützliche Technik, um Ergebnisse in unendlich vielen Fällen zu beweisen, indem Sie einfach mit dem einfachsten Fall beginnen und zeigen, dass das Ergebnis bei jedem Schritt bei der Erstellung komplexerer Fälle gilt. 

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Viele planare Graphen sehen den Netzen von [Polyedern](gloss:polyhedron) sehr ähnlich, dreidimensionale Formen mit [polygonalen](gloss:polygon) Flächen. Wenn wir uns Polyeder aus elastischen Bändern vorstellen, können wir uns vorstellen, sie auszudehnen, bis sie flache, planare Graphen werden: 

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Dies bedeutet, dass wir die Euler-Formel nicht nur für planare Graphen, sondern auch für alle Polyeder verwenden können - mit einem kleinen Unterschied. Bei der Umwandlung der Polyeder in Diagramme verschwindet eine der Flächen: Die oberste Fläche der Polyeder wird zur „Außenseite“; der Graphen. 

Mit anderen Worten, wenn Sie die Anzahl der zählen __{.red} Kanten__ , __{.blue} Gesichter__ und __{.green} Eckpunkte__ _jedes_ Polyeder, werden Sie feststellen , dass _{.b.blue} F_ + _{.b.green} V_ = _{.b.red} E_ + [[2]] . 

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Ikosaeder__  
__{.blue} 20__ Gesichter  
__{.green} 12__ Eckpunkte  
__{.red} 30__ Kanten 

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodekaeder__  
__{.blue} 62__ Gesichter  
__{.green} 60__ Eckpunkte  
__{.red} 120__ Kanten 

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Verkürztes Ikosaeder__  
__{.blue} 32__ Gesichter (12 schwarz, 20 weiß)  
__{.green} 60__ Eckpunkte  
__{.red} 90__ Kanten 

:::

---
> id: maps
> section: map-colouring

## Kartenfärbung 

::: column.grow

Wir haben bereits die Graphentheorie mit bestimmten Karten verwendet. Beim Verkleinern verschwinden einzelne Straßen und Brücken und stattdessen sehen wir die Umrisse ganzer Länder. 

Wenn Sie eine Karte oder eine andere Zeichnung aus verschiedenen Regionen ausmalen, können benachbarte Länder nicht dieselbe Farbe haben. Möglicherweise möchten wir auch so wenig verschiedene Farben wie möglich verwenden. 

Einige einfache „Karten“, wie ein Schachbrett, benötigen nur zwei Farben (Schwarzweiß), aber die meisten komplexen Karten benötigen mehr. 

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Beim Ausmalen der Karte der US-Bundesstaaten reichen natürlich 50 Farben aus, aber es sind weit weniger erforderlich. Färben Sie die folgenden Karten mit möglichst wenigen Farben: 

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

Alle diese Karten können mit nur vier verschiedenen Farben gefärbt werden, aber es ist nicht schwer vorstellbar, dass andere, sehr komplizierte Karten viel mehr Farben benötigen. Tatsächlich benötigen einige Karten __mindestens__ vier Farben, wenn sie vier miteinander verbundene Länder enthalten. 

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Wie zuvor können wir eine Karte mit Ländern und Grenzen in ein planares Diagramm konvertieren: Jedes Land wird [[zum Scheitelpunkt | eine Ecke | ein Gesicht]] und Länder, die [[eine Grenze teilen | habe die gleiche Farbe]] durch eine Kante verbunden: 

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Jetzt möchten wir die Scheitelpunkte eines Diagramms einfärben, und zwei Scheitelpunkte müssen eine andere Farbe haben, wenn sie durch eine Kante verbunden sind. 

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852 musste der Botanikstudent [Francis Guthrie](bio:guthrie) eine Karte der Grafschaften in England ausmalen. Er bemerkte, dass vier Farben für jede Karte, die er versuchte, ausreichten, aber er konnte keinen Beweis finden, der für _alle_ Karten funktionierte. Dies stellte sich als äußerst schwieriges Problem heraus und wurde als __Vierfarbensatz bekannt__ . 

In den folgenden 100 Jahren veröffentlichten viele Mathematiker „Beweise“ für den Vierfarbensatz, nur um später Fehler zu finden. Einige dieser ungültigen Beweise waren so überzeugend, dass es mehr als 10 Jahre dauerte, um Fehler zu entdecken. 

Mathematiker konnten lange Zeit weder beweisen, dass vier Farben ausreichen, noch eine Karte finden, die mehr als vier Farben benötigte. 

:::

---
> id: maps-4

In Bezug auf das Vierfarbenproblem wurden bis 1976 nur geringe Fortschritte erzielt, als [Wolfgang Haken](bio:haken) und [Kenneth Appel](bio:appel) einen Computer verwendeten, um es endgültig zu lösen. Sie reduzierten unendlich viele mögliche Karten auf 1936 Sonderfälle, die jeweils von einem Computer überprüft wurden, der insgesamt über 1000 Stunden dauerte. 

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Der Vierfarbensatz ist der erste bekannte mathematische Satz, der mit einem Computer bewiesen wurde, was seitdem viel häufiger und weniger kontrovers geworden ist. Dank schnellerer Computer und eines effizienteren Algorithmus können Sie heute den Vierfarbensatz in nur wenigen Stunden auf einem Laptop beweisen. 

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Postmark for the Department of Mathematics at the University of<br/>Illinois Urbana-Champaign, where Haken and Appel worked.

---
> id: maps-6

::: column.grow

Der Vierfarbensatz funktioniert nur für Karten auf einer flachen Ebene oder einer Kugel, bei denen alle Länder aus einem einzigen Bereich bestehen. 

Mathematiker haben sich jedoch auch Karten von _Imperien angesehen_ , in denen Länder aus mehreren getrennten Komponenten bestehen können, und Karten auf unterschiedlich geformten Planeten wie einem Torus (Donutform). In diesen Fällen benötigen Sie möglicherweise mehr als vier Farben, und die Proofs werden noch schwieriger. 

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption This map on a torus requires seven colours.

:::

---
> id: salesman
> section: travelling-salesman

## Das Problem des reisenden Verkäufers 

::: column.grow(parent="right")

Denken wir noch einmal über Netzwerke und Karten nach. Stellen Sie sich vor, ein Lieferservice muss einen Besuch abstatten ${tsn}{tsn|8|2,50,1} verschiedene Städte, um Pakete zu verteilen. Wir können uns diese Städte als Eckpunkte in einem Diagramm vorstellen. Wenn alle Städte durch Straßen verbunden sind, ist dies eine [[vollständige Grafik | Zyklus | zweigeteilter Graph]] , also gibt es <mfrac><mrow>${tsn} × (( ${tsn} - 1)</mrow><mn>2</mn></mfrac> = ${tsn*(tsn-1)/2} Kanten insgesamt. 

Der Lieferwagen muss alle Städte in beliebiger Reihenfolge besuchen. Im Königsberger Brückenproblem wollten wir Wege finden, die an _jeder Kante_ genau einen entlang _verlaufen_ . Jetzt wollen wir Pfade finden, die _jeden Scheitelpunkt_ genau einmal besuchen. Diese Pfade werden __Hamilton-Zyklen genannt__ . 

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Es gibt unzählige verschiedene Möglichkeiten für Hamilton-Zyklen in vollständigen Graphen. Tatsächlich können wir jeden Scheitelpunkt als Startscheitelpunkt auswählen und dann eine der verbleibenden Städte in beliebiger Reihenfolge auswählen: 

    .row
      .grow: p.todo Diagram coming soon…
      .grow: p.todo Diagram Coming Soon…

---
> id: salesman-2

In einer Grafik mit ${tsn1}{tsn1|4|2,10,1} Städte muss jeder Hamilton-Zyklus auch enthalten ${tsn1} Städte. Jetzt, 

    ul.var(:html="tsmString(tsn1)")

Dies bedeutet, dass es insgesamt gibt ${tsnPaths(tsn1)} mögliche Wege. Eine Abkürzung für dieses Produkt ist ${tsn1} ! oder ${tsn1} __Factorial__ . 

Sie können sich vorstellen, dass es möglicherweise nicht möglich ist, direkt zwischen zwei Städten zu reisen - ohne über eine andere Stadt zu fahren. In diesem Fall haben wir keinen vollständigen Graphen mehr, und es wird viel schwieriger, die Anzahl der Hamilton-Zyklen zu finden, falls sie überhaupt existieren. 

---
> id: salesman-3

::: column.grow(parent="right")

Bisher haben wir die Tatsache ignoriert, dass einige Städte weiter voneinander entfernt sein könnten als andere. Im wirklichen Leben ist dies jedoch eine sehr wichtige Überlegung: Wir wollen nicht nur _einen_ Weg finden, sondern den kürzesten. Dies wird als __Problem__ des __Handlungsreisenden bezeichnet__ . Dies muss nicht nur in Transport und Logistik gelöst werden, sondern auch bei der Positionierung von Transistoren auf Mikrochips, bei der Herstellung schnellerer Computer oder bei der Analyse der [DNA-](gloss:dna) Struktur. 

Eine einfache Methode wäre, alle möglichen Pfade auszuprobieren, die Länge jedes Pfades zu ermitteln und dann den kürzesten auszuwählen. Wir haben das jedoch gerade gezeigt, auch mit nur ${tsn2}{tsn2|10|2,20,1} Städte gibt es ${tsn2} ! = ${factorial(tsn2)} mögliche Wege. Sobald Sie Hunderte oder Tausende von Eckpunkten haben, wird es unmöglich, alle möglichen Pfade auszuprobieren, selbst wenn Sie leistungsstarke Computer verwenden. 

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Leider gibt es keinen effizienteren Algorithmus zur Lösung des Problems der reisenden Verkäufer. Stattdessen haben Mathematiker und Informatiker verschiedene Algorithmen entwickelt, die _gute_ Lösungen finden, auch wenn sie möglicherweise nicht die besten sind. Diese Algorithmen, die nur ungefähre Lösungen liefern, werden als __Heuristiken bezeichnet__ . 

Versuchen Sie, die Städte auf dieser Karte neu anzuordnen, und beobachten Sie, wie sich der kürzeste Weg zwischen ihnen ändert. Sie können Städte entfernen, indem Sie darauf tippen, und Sie können Städte hinzufügen, indem Sie auf eine beliebige Stelle auf der Karte klicken (bis zu 8): 

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

Der __Greedy-Algorithmus__ (oder Nearest Neighbor-Algorithmus) ist sehr einfach: Sie beginnen in einer zufälligen Stadt und wechseln nacheinander in die nächstgelegene Stadt, die Sie zuvor noch nicht besucht haben. Sobald Sie alle Städte besucht haben, halten Sie an. 

::: column(width=300)

{.todo} Animation kommt bald ... 

:::

Sie können zeigen, dass Pfade, die mit dem Greedy-Algorithmus gefunden wurden, im Durchschnitt 25% länger sind als der kürzestmögliche Pfad. 

---
> id: salesman-6

::: column.grow

Der __2-Opt-Algorithmus__ beginnt mit einem zufällig möglichen Pfad. Dann wählen Sie wiederholt zwei Kanten aus und tauschen sie aus, wenn dies die Länge des Pfades verringern würde. Sie hören auf, wenn Sie die Länge nicht weiter reduzieren können, indem Sie Kantenpaare vertauschen. 

::: column(width=300)

{.todo} Animation kommt bald ... 

:::

---
> id: ants

Es stellte sich heraus, dass die Natur lange bevor es überhaupt Computer gab, einen cleveren Weg gefunden hatte, um optimale Wege zwischen verschiedenen Orten zu finden: in Ameisenkolonien. 

    x-parallax.full-width(background="images/ants.jpg")

Ameisen wollen möglichst kurze Wege zwischen ihrem Nest und möglichen Nahrungsquellen finden. Sie können durch Chemikalien miteinander kommunizieren, die sie auf ihrer Spur hinterlassen und denen andere Ameisen folgen können. 

---
> id: ants-1

::: column.grow

* Die Ameisenkolonie sendet viele Späher aus, die sich zunächst in zufällige Richtungen bewegen. Sobald sie Nahrung gefunden haben, kehren sie zurück und hinterlassen eine Spur von Pheromon. * Andere Ameisen neigen dazu, einer Spur zu folgen, wenn sie eine finden, die sie zum Essen führt. Auf ihrer Rückreise lagern sie mehr Pheromon ab und verstärken so den Weg. * Mit der Zeit verdunstet das Pheromon. Je länger ein Weg ist, desto länger brauchen Ameisen, um sich auf ihm fortzubewegen, und so hat das Pheromon mehr Zeit, um zu verdampfen. Kurze Wege hingegen können schneller verstärkt werden, sodass ihre Stärke schneller zunimmt. 

::: column(width=240)

{.todo} Diagramm kommt bald ... 

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Ant Colony System (ACS) -Algorithmen versuchen, dieses Verhalten auf Computern mithilfe vieler „virtueller“ Ameisen zu replizieren. Sie können schnell sehr gute Lösungen für das Problem der reisenden Verkäufer finden. 

Eine besonders nützliche Eigenschaft von ACS-Algorithmen besteht darin, dass sie kontinuierlich ausgeführt werden und sich in Echtzeit an Änderungen am Diagramm anpassen können. Diese Änderungen können durch Autounfälle und Straßensperrungen in Straßennetzen oder durch Verkehrsspitzen zu Webservern in Computernetzwerken verursacht werden. 

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Das Problem des Handlungsreisenden ist [NP-schwer](gloss:np) , was bedeutet, dass es sehr schwierig ist, von Computern gelöst zu werden (zumindest für eine große Anzahl von Städten). 

Das Finden eines schnellen und genauen Algorithmus hätte schwerwiegende Auswirkungen auf das Gebiet der Informatik: Es würde bedeuten, dass es schnelle Algorithmen für _alle_ NP-harten Probleme gibt. Dies würde auch den größten Teil der Internetsicherheit unbrauchbar machen, was auf der Tatsache beruht, dass bestimmte Probleme für Computer als sehr schwierig angesehen werden. 

Die Suche nach einem schnellen Algorithmus zur Lösung des Problems des Handlungsreisenden würde auch eines der bekanntesten offenen Probleme in Mathematik und Informatik lösen, das __P-gegen-NP-__ Problem. Es ist eines der sieben [Millennium-Preisprobleme](gloss:millennium-prize) , die jeweils mit einem Preisgeld von 1 Mio. USD verbunden sind. 

:::

---
> section: scheduling
> sectionStatus: dev

## Planungsprobleme 

{.todo} Kommt bald 

---
> id: applications
> section: applications

## Grafiken im Alltag 

Wir haben in den vorhergehenden Kapiteln viele verschiedene Anwendungen der Graphentheorie gesehen, obwohl einige davon etwas erfunden wurden. Es stellt sich jedoch heraus, dass Graphen die Grundlage vieler Objekte, Konzepte und Prozesse im Alltag bilden. 

::: column.grow

Das Internet zum Beispiel ist ein riesiger virtueller Graph. Jeder Scheitelpunkt ist eine einzelne Webseite, und jede Kante bedeutet, dass zwischen zwei Seiten ein Hyperlink besteht. Beachten Sie, dass Links gehen nur in eine Richtung, so dass dieser Graph [[gerichtet]] ist [[| mehrzeilig | verbunden]] , und dass dieser Graph _sehr, sehr, groß ist_ . 

 Einige Websites, wie Wikipedia oder Facebook, haben viele eingehende Links, während viele kleinere Websites möglicherweise nur sehr wenige eingehende Links haben. Dies ist das zugrunde liegende Konzept, mit dem Google Suchergebnisse sortiert. 

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Websites mit mehr eingehenden Links sind in der Regel von höherer Qualität und sollten oben in den Suchergebnissen angezeigt werden. Wenn Sie beispielsweise nach „London“ suchen, werden offizielle Touristeninformationsseiten vor kleinen Geschäften in London oder vor Blogs von Menschen angezeigt, die in London leben. Diese einfache Idee aus der Graphentheorie, der __Page Rank-Algorithmus__ , machte Google deutlich besser als andere frühe Suchmaschinen. 

---
> id: applications-2

Das Internet ist das größte Netzwerk, das jemals von der Menschheit geschaffen wurde. Dieses Bild zeigt einen sehr kleinen Teil aller mit dem Internet verbundenen Server: 

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Während Websites und Hyperlinks ein _virtuelles_ Diagramm bilden, gibt es auch das _physische_ Netzwerk von Computern, Servern, Routern, Telefonleitungen und Kabeln. 

::: column.grow(parent="right")

Jedes Mal, wenn Sie einen Anruf tätigen oder eine Website laden, müssen Netzbetreiber einen Weg finden, Sender und Empfänger zu verbinden, ohne die Kapazität eines einzelnen Kabels oder einer einzelnen Verbindung zu überschreiten. Die Graphentheorie und die Wahrscheinlichkeit ermöglichen es, einen zuverlässigen Dienst zu gewährleisten, indem beispielsweise Umleitungen gefunden werden, wenn eine bestimmte Verbindung besetzt ist. 

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Grafiken spielen auch beim Transport und bei der Navigation eine wichtige Rolle. Alle Flug-, Zug- und U-Bahn-Netze bilden Diagramme, die zur Erstellung effizienter Flugpläne verwendet werden können. Eine der bekanntesten Grafiken ist die Karte der Londoner U-Bahn: 

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Alle Straßen und Autobahnen bilden auch ein großes Netzwerk, das von Navigationsdiensten wie Google Maps verwendet wird, um die kürzeste Route zwischen zwei bestimmten Punkten zu ermitteln. 

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

In Zukunft werden __intelligente Verkehrssysteme__ Staus und Unfälle reduzieren, indem Autos effizienter geroutet werden, indem Standortdaten von Smartphones und selbstfahrenden Autos verwendet werden. Dies könnte jedes Jahr Millionen von Stunden auf der Straße einsparen, die Umweltverschmutzung erheblich reduzieren und es den Rettungsdiensten ermöglichen, schneller zu reisen. 

:::

---
> id: applications-6

Dieses Bild zeigt das Netzwerk kommerzieller Fluglinienflüge durch Nordeuropa. 

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Es gibt unzählige andere Grafiken in Wissenschaft, Technik oder im Alltag: 

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Die Verbindungen zwischen Atomen in __Molekülen__ und Kristallgittern bilden einen Graphen. 

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} Die __Ausbreitung von Krankheiten__ und Epidemien kann mithilfe eines Netzwerks modelliert werden. 

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} In der Biologie bilden die __Evolutionsbäume__ , die die Abstammung von Arten zeigen, eine Grafik. 

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Die verschiedenen Komponenten von __Stromkreisen__ und Computerchips bilden ein Netzwerk. 

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} Die grammatikalische Struktur von __Sprachen__ kann mithilfe von Diagrammen modelliert werden, um beispielsweise Übersetzungsalgorithmen zu erstellen. 

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Graphen haben auch viele Anwendungen in der __Wahrscheinlichkeits-__ , __Spieltheorie__ und __Finanzmathematik__ . 

:::

---
> id: social

### Soziale Netzwerke 

Lassen Sie uns abschließend ein besonders gutes Beispiel für Grafiken betrachten, die im Alltag existieren: Social Media. Hier repräsentieren Eckpunkte [[Menschen | Freunde | Netzwerke]] und Kanten repräsentieren Freundschaften, Likes, Abonnements oder Follower. 

Wenn wir Social-Media-Grafiken zeichnen, sehen wir möglicherweise bestimmte __Gruppen__ gemeinsamer Freunde, die möglicherweise dieselbe Schule besucht haben oder in derselben Stadt leben. Wir können auch die __Zentralität__ von Personen bestimmen, die davon abhängt, wie gut ein Scheitelpunkt verbunden ist, und die ein Maß für die Popularität einer Person in sozialen Medien sein kann. 

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

Im Jahr 2014 hatte Facebook 1,4 Milliarden aktive Nutzer und insgesamt mehr als 200 Milliarden Freundschaften. Die Hälfte aller Facebook-Nutzer hat mehr als 200 Freunde, und da die meisten unserer Freunde eine ähnliche Anzahl von Freunden haben, könnten wir leicht Zehntausende von _Freunden von Freunden haben_ . 

Eine spannende Frage wäre nun: Wenn Sie zwei zufällige Facebook-Nutzer auswählen, wie viele „Freundschaftskanten“ müssten Sie befolgen, um von einem zum anderen zu gelangen? Beispielsweise beträgt der Abstand zwischen Freunden [[1]] , der Abstand zwischen Freunden von Freunden [[2]] usw. 

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Im Jahr 2016 führte Facebook [eine Studie durch,](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/) um festzustellen, wie die Nutzer miteinander verbunden sind. Sie fanden heraus , dass im Durchschnitt, Sie zu _jedermann_ verbunden sind _sonst_ auf Facebook durch höchstens 3,57 andere Menschen. Und dazu gehören Prominente, Politiker oder sogar Könige! 

Mit anderen Worten, wenn Sie einen der Milliarden Facebook-Nutzer auf der ganzen Welt auswählen, haben diese wahrscheinlich einen Freund eines Freundes, der einen Freund eines Ihrer Freunde kennt. Wir sagen, es gibt 3,57 __Grad Trennung__ . 

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geographic visualisation of all Facebook friendships in 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

Als der ungarische Autor [Frigyes Karinthy](bio:karinthy) 1929 erstmals die Idee von „sechs Trennungsgraden“ vorschlug, gab es weder Internet noch soziale Medien, aber die Welt begann bereits, sich stärker zu vernetzen. 

1967 führte [Stanley Milgram](bio:milgram) ein erstes empirisches Experiment durch, bei dem 296 in Nebraska und Kansas lebende Teilnehmer gebeten wurden, einen Brief an eine bestimmte in Boston, Massachusetts, lebende Person zu senden. Sie alle mussten einen Freund auswählen, an den sie den Brief senden wollten, der dann einen anderen Freund auswählte. Bei jedem Schritt rückte der Brief näher an Boston heran. Milgram stellte fest, dass es im Durchschnitt nur 5,2 Zwischenfreunde gab - 5,2 Grad Trennung. 

:::

Heute ist jeder von uns Teil unzähliger unsichtbarer Grafiken, die unseren sozialen Interaktionen, Reisen, Internet und Technologie, Wissenschaft und vielem mehr zugrunde liegen.
