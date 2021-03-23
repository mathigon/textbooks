# Graphen und Netzwerke

## Einführung

> id: intro-0
> section: introduction
> color: "#A7208A"
> level: Intermediate
> next: probability

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

In der Mathematik können all diese Beispiele als [__Graphen__](gloss:graph) dargestellt werden
(nicht zu verwechseln mit dem _Graph_ einer Funktion). Ein Graph besteht aus einzelnen
_Punkten_ die [[Knoten oder Ecken|Kreise oder Ecken|Kreuzungen oder Ecken]] genannt werden, von denen einige durch
[[Kanten|Grenzen|Paare]] verbunden sind.

Die __Graphentheorie__ beschäftigt sich mit Graphen und ihren Eigenschaften. Sie ist
eines der spannendsten und visuell ansprechendsten Gebiete der Mathematik und hat unzählige wichtige Anwendungen.

::: column(width=180)

    svg#graph0.graph.novertices.noedges(width=180 height=180)

:::

---
> id: intro-1

Wir können das Layout von einfachen Graphen mit Kreisen und Linien zeichnen. Die Position
der Knoten (Ecken) und die Länge der Kanten spielt dabei keine Rolle - uns interessiert nur, _wie sie
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

Einer der ersten Mathematiker, der sich Gedanken zu Graphen und Netzwerke machte, war [Leonhard Euler](bio:euler).
Euler war fasziniert von einem alten Problem in Bezug auf die Stadt Königsberg nahe der Ostsee.

Der Fluss Pregel teilt Königsberg in vier voneinander getrennte Teile, die durch sieben Brücken
miteinander verbunden sind. Ist es möglich, durch die Stadt zu gehen und alle Brücken genau einmal
zu überqueren - aber nicht mehr als einmal? (Start und Ziel können überall sein und müssen nicht
unbedingt am selben Ort sein).

Versuche, eine passende Route zu finden, indem du auf diese Karten einen Weg einzeichnest:

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

Im Fall von Königsberg scheint es unmöglich zu sein, eine gültige Route zu finden,
aber einige der anderen Städte funktionieren. Euler gelang es, eine einfache
Regel zu finden, die auf jede Stadt angewendet werden kann, ohne viele Möglichkeiten
ausprobieren zu müssen - mithilfe der Graphentheorie.

::: column.grow

Zuerst müssen wir die Stadtpläne in Graphen mit Kanten und Knoten umwandeln.
Jede Insel oder Region des Landes wird durch [[einen Knoten|eine Kante|eine Fläche]]
dargestellt und jede Brücke, die zwei Regionen verbindet, wird durch eine/n entsprechende/n [[Kante|Knoten|Straße]] dargestellt.

{.reveal(when="blank-0 blank-1")} Jetzt ist das Problem, "eine Stadt zu durchwandern,
während man jede Brücke genau einmal überquert", zu einem Problem geworden, "einen Graphen
mit einem Strich ohne abzusetzen zu zeichnen, während man jede Kante genau einmal nachzieht".

::: column(width=200)

    include svg/konigsberg.svg

:::

---
> id: bridges-2

Überlege dir auf dem Papier ein paar unterschiedliche Graphen und versuche dann herauszufinden,
welche mit einem einzigen, kontinuierlichen Strich gezeichnet werden können.

---
> id: bridges-3
> goals: size prime eo

Genau wie bei den Stadtplänen zuvor, stellen wir fest, dass einige Graphen möglich sind,
während andere nicht möglich sind. Um zu verstehen, warum das so ist, beschriften wir
jeden Knoten mit seinem [Grad](gloss:graph-degree). Dann können wir die Knoten auf
verschiedene Weise einfärben und versuchen, ein Muster zu erkennen:

    figure
      x-select.var.tabs(:bind="colour")
        div(value="val") Wert
        div(value="size") Größe
        div(value="prime") Primzahlen
        div(value="eo") Gerade und ungerade
      .box
        p.no-voice(style="margin: 0"): strong Diese Graphen sind möglich:
        include svg/vertex-orders-1.svg
        p.no-voice(style="margin: 1em 0 0"): strong Diese Graphen sind nicht möglich:
        include svg/vertex-orders-2.svg

---
> id: bridges-4

Vergleicht man diese Zahlen für Graphen, die möglich sind, und solche, die nicht
möglich sind, scheint es, dass ein Graph gezeichnet werden kann, wenn er [[nicht
mehr als zwei "ungerade" Knoten hat|nur "gerade" Knoten hat|keine Knoten mit einer
Ordnung größer als 4 hat|eine ungerade Anzahl von Knoten hat|keine Knoten der
Ordnung 3 hat]]. Diese Bedingung kann erklärt werden, wenn wir nur einen einzigen
Knoten im Graphen betrachten:

    x-slideshow
      .stage(slot="stage"): include svg/konigsberg-proof.svg
      .legend(slot="legend") Hier siehst du einen einzelnen, vergrößerten Knoten in einem Graphen.
      .legend(slot="legend") Wenn wir den Graphen zeichnen, werden wir irgendwann eine Kante haben, die zu diesem Knoten führt, und dann eine andere, die wegführt. Auf diese Weise treffen zwei Kanten am Knoten aufeinander.
      .legend(slot="legend") Vielleicht ist der Knoten eher eine Kreuzung als eine Ecke. In diesem Fall gibt es eine andere Kante, die zum Knoten hinführt, und eine weitere Kante, die wegführt. Jetzt haben wir vier Kanten.
      .legend(slot="legend") Und in manchen Graphen kann es sogar ein drittes Kantenpaar geben, das auf den Knoten zu und von ihm weg führt. Jetzt gibt es sechs Kanten.
      .legend(slot="legend") Beachte, dass es in jedem Fall immer eine gerade Anzahl von Kanten gibt, die sich am Knoten treffen.
      .legend(slot="legend") Die einzigen zwei Ausnahmen sind die Knoten, wo der Pfad beginnt und wo er endet - diese beiden können eine ungerade Anzahl von Kanten haben. Wenn der Start- und Endpunkt derselbe ist, ist der Grad aller Knoten im Graphen gerade.

---
> id: bridges-5

::: column.grow(parent="right")

Wenn du zur Karte von Königsberg zurückscrollst, wirst du feststellen, dass es mehr
als zwei Inseln mit einer ungeraden Anzahl von Brücken gibt. Daher ist eine Route,
die jede Brücke genau einmal überquert, natürlich unmöglich - und das ist es,
was Leonard Euler entdeckt hat.

Eulers Entdeckung mag im wirklichen Leben nicht besonders nützlich erscheinen,
aber Graphen sind die Grundlage für viele andere geografische Probleme, wie zum
Beispiel das Finden von Wegstrecken zwischen zwei Orten. Wir werden später noch mehr
von diesen Anwendungen kennenlernen.

::: column(width=240)

    x-img(lightbox width=240 height=260 src="images/prague.jpg")

:::

---
> id: handshakes-1
> section: handshakes

## Händeschütteln und Dating

::: column.grow

Du bist zu einer tollen Geburtstagsparty mit deinen Freunden eingeladen worden.
Einschließlich dir selbst und dem Gastgeber sind ${hnd}{hnd|5|3,15,1} Gäste anwesend.

Als die Gäste sich abends zum Aufbruch bereit machen, schüttelt jeder jedem anderen die Hand.
Wie oft werden insgesamt die Hände geschüttelt?

Wir können das Händeschütteln mit einem Graphen darstellen: jeder Gast entspricht [[einem Knoten|einer Kante]], und jedes Händesschütteln entspricht [[einer Kante|einem Knoten]].

{.reveal(when='blank-0 blank-1')} Jetzt kann man ganz einfach die Anzahl der Kanten im Graphen zählen. Wir stellen
fest, dass bei ${hnd} Gästen ${hnd*(hnd-1)/2} mal die Hände geschüttelt werden.

::: column.s-hide(width=240)

    img.shifted(src="images/party.jpg" width=240 height152)
    svg.graph(style='width: 240px; height: 240px;')

:::

---
> id: handshakes-2

Anstatt alle Kanten in großen Graphen zu zählen, könnten wir auch versuchen,
eine einfache Formel zu finden, die uns das Ergebnis für eine _beliebige_ Anzahl von Gästen angibt.

Jeder der ${n}{n|5|2,8,1} Gäste auf der Party schüttelt ${n-1} anderen die Hand.
Es werden also insgesamt ${n} × ${n-1} = ${n×(n-1)} mal die Hände geschüttelt. Für _n_ Gäste
heißt das, dass [[`n×(n–1)`|`n×(n+1)`|`n^2`]] mal die Hände geschüttelt werden.

    p.var(:html="handshakeTable(n)")
    x-gesture(target="#handshakes-2 x-var" slide="100,0")

---
> id: handshakes-2a

Leider ist diese Antwort nicht ganz richtig. Beachte, dass [die ersten beiden Einträge
in der obersten Zeile](->.handshakes_tr:first-child_td:first-child,_.handshakes_tr:first-child_td:nth-child(2)) eigentlich identisch sind, nur umgedreht.

Tatsächlich haben wir jedes Händeschütteln [[zweimal|einmal|dreimal]] gezählt, _{span.reveal(when="blank-0")}
einmal für jeden der beiden beteiligten Gäste. Das bedeutet, dass die korrekte
Anzahl wie oft bei ${n}{n|5|2,25,1} Gästen einander die Hände geschüttelt werden
`(var("n") × var("n-1"))/2 = var("n*(n-1)/2")` beträgt._

---
> id: handshakes-3

Die Graphen, die das Händeschütteln beschreiben, stellen einen besonderen Fall dar, weil jeder Knoten
mit jedem anderen Knoten verbunden ist. Graphen mit dieser Eigenschaft werden __vollständige Graphen__
genannt. Ein vollständiger Graph mit 4 Knoten wird oft als `K_4` abgekürzt, ein
vollständiger Graph mit 5 Knoten wird als `K_5` bezeichnet, und so weiter.

Wir haben gerade gezeigt, dass ein vollständiger Graph mit `n` Knoten, also `K_n`,
genau `(n × (n-1))/2` Kanten hat.

    .row
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")
      svg.graph(style="width: 90px; height: 90px")

---
> id: handshakes-4

    figure: img(src="images/flags.jpg" width=855 height=100)

An einem anderen Tag bist du zu einem Speed-Dating-Event für ${m}{m|5|2,8,1}
Jungs und ${f}{f|4|2,8,1} Mädchen eingeladen. Es gibt viele kleine Tische und jeder Junge
verbringt 5 Minuten mit jedem der Mädchen. Wie viele einzelne "Dates" ergibt das insgesamt?

::: column.grow

In diesem Fall besteht der entsprechende Graph aus zwei getrennten Gruppen von Knoten.
Jeder Knoten ist mit allen Knoten in der [[anderen|eigenen]], aber keiner der Knoten
mit denen in [[seiner eigenen|der anderen]] Gruppe verbunden. Graphen, die diese
Anordnung haben, werden __bipartite Graphen__ oder __paare Graphen__ genannt.

::: column(width=300)

    svg.graph(style="width: 300px; height: 140px;")

:::

{.reveal(when="blank-0 blank-1")} Der zweigeteilte Graph mit zwei Gruppen der Größe _x_ und _y_
wird oft als `K_"x,y"` geschrieben. Er hat [[`x×y`|`x+y`|`2x–y`]] Kanten, _{span.reveal(when="blank-2")}_
was bedeutet, dass es im obigen Beispiel zu ${m} × ${f} = ${m×f} Dates kommt.

---
> id: utilities
> goals: try-three-times
> section: planar-graphs

## Planare Graphen

::: column.grow

Hier ist ein weiteres Rätsel, das mit der Graphentheorie zu tun hat.

In einem kleinen Dorf gibt es drei Häuser und drei Versorgungswerke,
die Wasser, Strom und Gas produzieren. Wir müssen die einzelnen Leitungen
an jedes der Versorgungswerke anschließen, aber aufgrund der Anordnung des Dorfes dürfen
sich die verschiedenen Rohre und Kabel nicht kreuzen.

::: column(width=300)

    x-img(width=300 height=200 src="images/power-plant.jpg")

:::

Versuche, jedes der Häuser mit jedem der untenstehenden Versorgungswerke zu verbinden, ohne dass sich eine deiner Leitungen kreuzt:

    .box.no-padding
      include svg/utilities.svg
      button.btn Clear

---
> id: utilities-1

Genau wie bei den Königsberger Brücken vorher, stellt man schnell fest,
dass auch dieses Problem nicht lösbar ist. Es scheint, dass einige Graphen ohne
überlappende Kanten gezeichnet werden können - diese nennt man __planare Graphen__
, andere jedoch nicht.

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

Der [vollständige Graph](gloss:complete-graph) `K_5` ist der kleinste Graph,
der nicht planar ist. Jeder andere Graph, der `K_5` in irgendeiner Weise als
Teilgraph enthält, ist auch nicht planar. Dazu gehören `K_6`, `K_7`, und alle
größeren vollständigen Graphen.

Der Graph im Rätsel der drei Versorgungswerke ist der [bipartite graph](gloss:bipartite-graph)
`K_"3,3"`. Es stellt sich heraus, dass jeder nicht-planare Graph entweder
einen `K_5` oder einen `K_"3,3"`  (bzw. eine [Unterteilung](gloss:subdivision) dieser
beiden Graphen) als Teilgraph enthalten muss. Das ist bekannt als _Kuratowskis Theorem_.

---
> id: planarity
> goals: planarity

::: .box.f-blue

#### Planarität

    x-solved
    svg#planarity(viewBox="0 0 720 360")

Dies ist ein planarer Graph, aber die Knoten ${n}{n|7|5,20,1} sind durcheinander
geraten. Ordne die Knoten neu an, so dass keine der Kanten überlappen.

    p.btn-row: button.btn Neuer zufälliger Graph

:::

---
> id: euler

### Eulersche Polyederformel

Alle planaren Graphen unterteilen die Ebene, auf der sie gezeichnet werden,
in mehrere Bereiche, genannt __Flächen__.

::: column(width=200)

    include svg/euler-2.svg

{.text-center} [[6]] Ecken (Knoten)
[[5]] Flächen
[[10]] Kanten
_{span.euler-sum} 11 Ecken + Flächen_

::: column(width=200)

    include svg/euler-1.svg

{.text-center} [[8]] Ecken (Knoten)
[[7]] Flächen
[[14]] Kanten
_{span.euler-sum} 15 Ecken + Flächen_

::: column(width=200)

    include svg/euler-3.svg

{.text-center} [[12]] Ecken (Knoten)
[[13]] Flächen
[[24]] Kanten
_{span.euler-sum} 25 Ecken + Flächen_

:::

---
> id: euler-1

Wenn du diese Zahlen vergleichst, wirst du feststellen, dass die Anzahl der Kanten
immer [[eins weniger|größer|dieselbe]] ist als die Anzahl der Flächen plus die Anzahl
der Knoten, die wir hier als Ecken E bezeichnen wollen. Mit anderen Worten:
_{.b.blue}F_ + _{.b.green}E_ = _{.b.red}K_ + 1.
Dieses Ergebnis wollen wir __Euler-Formel__ nennen, nach demselben
[Mathematiker](bio:euler), der auch das Problem der Königsberger Brücken gelöst hat.

Leider gibt es unendlich viele Graphen, und wir können nicht jeden einzelnen überprüfen,
um zu sehen, ob die Euler-Formel funktioniert. Stattdessen können
wir versuchen, einen einfachen [Beweis](gloss:proof) zu finden, der für
jeden Graphen funktioniert...

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
              td: strong.green.i E
              td: strong.red.i K
            tr
              td.xf 0
              td.xv 1
              td.xe 0
          p.no-voice #[strong.blue.xf 0] + #[strong.green.xv 1] &nbsp;=&nbsp; #[strong.red.xe 0] + 1

      .legend(slot="legend") Der einfachste Graph besteht aus einer einzigen Ecke (Knoten). Wir können leicht überprüfen, dass die Euler-Formel funktioniert.
      .legend(slot="legend") Wir wollen eine neue Ecke zu unserem Graphen hinzufügen. Außerdem müssen wir noch eine Kante hinzufügen, und die Euler-Formel funktioniert immer noch.
      .legend(slot="legend") Wenn wir eine dritte Ecke zum Graphen hinzufügen wollen, haben wir zwei Möglichkeiten. Wir könnten ein kleines Dreieck erstellen: dies fügt eine Ecke, eine Fläche und zwei Kanten hinzu, so dass die Euler-Formel immer noch funktioniert.
      .legend(slot="legend") Stattdessen könnten wir die Linie einfach um eins verlängern: das fügt eine Ecke und eine Kante hinzu, und die Euler-Formel funktioniert.
      .legend(slot="legend") Machen wir weiter: Wenn wir jetzt ein Viereck erstellen, fügen wir eine Ecke, zwei Kanten und eine Fläche hinzu. Die Euler-Formel funktioniert immer noch.

---
> id: euler-3

Jeder (endliche) Graph kann konstruiert werden, indem man mit einem Knoten beginnt
und nach und nach weitere Knoten hinzufügt. Wir haben gezeigt, dass,
egal auf welche Weise wir neue Knoten hinzufügen, die Euler-Formel
gültig ist. Daher ist sie für alle Graphen gültig.

Der Prozess, den wir verwendet haben, wird __mathematische Induktion__ genannt.
Das ist eine sehr nützliche Technik, um Ergebnisse in unendlich vielen
Fällen zu beweisen, indem man einfach mit dem einfachsten Fall beginnt und
zeigt, dass das Ergebnis, wenn man komplexere Fälle entwickelt, bei jedem
Schritt gültig bleibt.

    .svg-block: include svg/dominoes.svg

---
> id: euler-4

Viele planare Graphen sehen den Netzen von [Polyedern](gloss:polyhedron),
dreidimensionalen Körpern mit [polygonalen](gloss:polygon) Flächen, sehr
ähnlich. Wenn wir uns vorstellen, dass Polyeder aus Gummibändern bestehen,
könnten wir sie so lange dehnen, bis sie zu flachen, planaren Graphen werden:

::: column(width=300)

    img.img-sequence(src="images/cube/cube0.png" width=300 height=300)
    x-slider(steps=31)

::: column(width=300)

    img.img-sequence(src="images/dodecahedron/dodeca0.png" width=300 height=300)
    x-slider(steps=31)

:::

---
> id: euler-5

Das bedeutet, dass wir die Euler-Formel nicht nur für planare Graphen,
sondern auch für alle Polyeder verwenden können - mit einem kleinen Unterschied.
Wenn man die Polyeder in Graphen umwandelt, verschwindet eine der Flächen: die oberste Fläche der Polyeder wird zur "Umrandung" des jeweiligen Graphen.

Mit anderen Worten, wenn du die Anzahl der __{.red}Kanten__, __{.blue}Flächen__
und __{.green}Ecken__ eines _beliebigen_ Polyeders zählst, wirst du feststellen,
dass _{.b.blue}F_ + _{.b.green}E_ = _{.b.red}K_ + [[2]] ist, bekannt als __Eulersche Polyederformel__.

::: column(width=200)

    x-video(width=200 height=200 src="images/icosahedron.mp4" hover loop)

{.caption} __Ikosaeder__
__{.blue} 20__ Flächen
__{.green} 12__ Ecken
__{.red} 30__ Kanten

::: column(width=200)

    x-video(width=200 height=200 src="images/rhombi.mp4" hover loop)

{.caption} __Rhombicosidodekaeder__
__{.blue} 62__ Flächen
__{.green} 60__ Ecken
__{.red} 120__ Kanten

::: column(width=200)

    x-video(width=200 height=200 src="images/football.mp4" hover loop)

{.caption} __Abgestumpftes Icosahedron__
__{.blue} 32__ Flächen (12 schwarz, 20 weiß)
__{.green} 60__ Ecken
__{.red} 90__ Kanten

:::

---
> id: maps
> section: map-colouring

## Karten färben

::: column.grow

Wir haben die Graphentheorie bereits bei verschiedenen Landkarten angewendet.
Wenn wir herauszoomen, verschwinden einzelne Straßen und Brücken und wir sehen
stattdessen den Umriss ganzer Länder.

Beim Einfärben einer Karte - oder jeder anderen Zeichnung, die aus verschiedenen
Regionen besteht - dürfen benachbarte Länder nicht die gleiche Farbe haben.
Außerdem sollten wir so wenig verschiedene Farben wie möglich verwenden.

Einige einfache "Karten", wie ein Schachbrett, brauchen nur zwei Farben
(schwarz und weiß), aber die meisten komplexeren Karten brauchen mehrere.

::: column(width=240 style="margin-top: -10px")

    x-img.shifted(src="images/globe.jpg" width=240 height=320)

:::

---
> id: maps-1
> goals: map-0 map-1 map-2 map-3
> title: Colouring Maps

Wenn man die Karte der US-Bundesstaaten einfärbt, dann sind natürlich 50 Farben
ausreichend, aber es sind weit weniger notwendig. Versuche die Karten unten
mit so wenig Farben wie möglich einzufärben:

    .four-colour-icons
      for i in [1, 2, 3, 4, 5, 6, 7]
        .four-colour-icon(tabindex=0)

    x-tabbox.four-colours.full-width
      .tab
        h3 Vereinigte Staaten #[span.check(when="map-0")]
        x-solved
        .colour-count(style="margin-bottom: -32px") #[span 0] verwendete Farben
        include svg/colours-1.svg
        button.btn.clear Löschen
        // Beachte, dass Staaten oder Länder, die sich nur eine Ecke teilen, die gleiche Farbe haben dürfen.
        // Alaska und Hawaii sind von allen anderen Staaten isoliert und können jede beliebige Farbe haben.
      .tab
        h3 Südamerika #[span.check(when="map-1")]
        x-solved
        .colour-count #[span 0] verwendete Farben
        include svg/colours-2.svg
        button.btn.clear Löschen
      .tab
        h3 Deutschland #[span.check(when="map-2")]
        x-solved
        .colour-count #[span 0] verwendete Farben
        include svg/colours-3.svg
        button.btn.clear Löschen
      .tab
        h3 England #[span.check(when="map-3")]
        x-solved
        .colour-count #[span 0] verwendete Farben
        include svg/colours-4.svg
        button.btn.clear Löschen

---
> id: maps-2
> title: The Four Colour Theorem

::: column.grow

Alle diese Karten können mit nur vier verschiedenen Farben eingefärbt werden,
aber es ist nicht schwer, sich vorzustellen, dass andere, sehr komplizierte
Karten viel mehr Farben benötigen. Tatsächlich brauchen manche Karten
__mindestens__ vier Farben, wenn sie vier Länder enthalten, die alle miteinander
verbunden sind.

::: column(width=200)

    img(src="images/four-colours.png" width=200 height=120)

:::

Wie zuvor können wir eine Karte mit Ländern und Grenzen in einen planaren
Graphen umwandeln: jedes Land entspricht [[einem Knoten|einer Kante|einer Fläche]], und Länder, die [[eine Grenze teilen|die gleiche Farbe haben]] werden durch eine Kante verbunden:

    .svg-block: include svg/colour-graph.svg

{.reveal(when="blank-0 blank-1")} Jetzt wollen wir die Knoten eines Graphen einfärben,
und zwei Knoten müssen eine andere Farbe haben, wenn sie durch eine Kante verbunden sind.

---
> id: maps-3

::: column(width=240 parent="right")

    x-img(lightbox width=240 height=320 src="images/england-counties.jpg")

::: column.grow

1852 musste der Botanikstudent [Francis Guthrie](bio:guthrie) eine Karte der Grafschaften
in England ausmalen. Er bemerkte, dass vier Farben für jede Karte, die er ausprobierte,
ausreichten, aber er konnte keinen Beweis dafür finden, dass das für _alle_ Karten so ist.
Dies stellte sich als äußerst schwieriges Problem heraus und wurde bekannt als __Vier-Farben-Satz__.

In den folgenden 100 Jahren veröffentlichten viele Mathematiker „Beweise“ für den Vier-Farben-Satz,
nur um später Fehler zu finden. Einige dieser ungültigen Beweise waren so überzeugend,
dass es mehr als 10 Jahre dauerte, um die Fehler zu entdecken.

Mathematiker konnten lange Zeit weder beweisen, dass vier Farben ausreichen,
noch eine Karte finden, die mehr als vier Farben benötigte.

:::

---
> id: maps-4

In Bezug auf das Vier-Farben-Problem wurden bis 1976 nur geringe Fortschritte erzielt,
als [Wolfgang Haken](bio:haken) und [Kenneth Appel](bio:appel) einen Computer verwendeten,
um es endgültig zu lösen. Sie reduzierten unendlich viele mögliche Karten auf 1936 Sonderfälle,
die jeweils von einem Computer überprüft wurden, was insgesamt über 1000 Stunden in Anspruch nahm.

    x-parallax.full-width(background="images/ibm-360.jpg")

---
> id: maps-5

Der __Vier-Farben-Satz__ ist der erste bekannte mathematische Satz, der mit Hilfe eines Computers
bewiesen wurde, etwas, das inzwischen viel gebräuchlicher und weniger umstritten ist.
Schnellere Computer und ein effizienterer Algorithmus tragen dazu bei, dass man heute den
Vier-Farben-Satz auf einem Laptop in nur wenigen Stunden beweisen kann.

    figure
      x-img(src="images/suffice.jpg" width=320 height=80 credit="http://www.math.illinois.edu/History/postmarks.pdf")
      p.caption Stempel der mathematischen Fakultät der Universität von <br/>Illinois Urbana-Champaign, wo Haken und Appel gearbeitet haben. <br/>"Four colors suffice" bedeutet "Vier Farben reichen aus"

---
> id: maps-6

::: column.grow

Der Vier-Farben-Satz funktioniert nur für Karten auf einer flachen Ebene oder einer Kugel,
wobei alle Länder aus einem einzigen Gebiet bestehen.

Mathematiker haben sich aber auch Karten von _Imperien_ angesehen, auf denen Länder aus
mehreren nicht zusammenhängenden Gebieten bestehen können, und Karten auf unterschiedlich
geformten Planeten, wie zum Beispiel einem Torus (Donutform). In diesen Fällen braucht
man mehr als vier Farben, und die Beweise werden noch schwieriger.

::: column(width=300)

    x-video(width=300 height=220 src="images/torus.mp4" hover loop)
    p.caption Diese Karte auf einem Torus benötigt sieben Farben.

:::

---
> id: salesman
> section: travelling-salesman

## Problem des Handlungsreisenden

::: column.grow(parent="right")

Wir wollen uns noch einmal über Netzwerke und Karten Gedanken machen. Stelle dir vor,
ein Lieferservice muss ${tsn}{tsn|8|2,50,1} verschiedene Städte abklappern, um Pakete zu
verteilen. Wir können uns diese Städte als die Knoten in einem Graphen vorstellen. Wenn
alle Städte durch Straßen miteinander verbunden sind, handelt es sich um einen
[[vollständigen Graphen|Zyklus|bipartiten Graphen]], und er hat also insgesamt
<mfrac><mrow>${tsn} × (${tsn} – 1)</mrow><mn>2</mn></mfrac> =
${tsn*(tsn-1)/2} Kanten.

Der Lieferwagen muss alle Städte besuchen, egal in welcher Reihenfolge. Beim Königsberger
Brückenproblem wollten wir Wege finden, die _jede Kante_ genau einmal entlangfahren.
Jetzt wollen wir Pfade finden, die _jeden Knoten_ genau einmal passieren. Diese Pfade werden
__Hamiltonkreise__ genannt.

::: column(width=260)

    x-img(src="images/truck.jpg" width=260 height=280)

:::

---
> id: salesman-1

Es gibt unzählige verschiedene Möglichkeiten für Hamiltonkreise in vollständigen Graphen.
Tatsächlich können wir jeden beliebigen Knoten als Startpunkt wählen und dann eine der
übrigen Städte in beliebiger Reihenfolge auswählen:

    .row
      .grow: p.todo Diagramm kommt bald…
      .grow: p.todo Diagramm kommt bald…

---
> id: salesman-2

In einem Graphen mit 8 Städten muss jeder Hamiltonkreis auch 8 Städte enthalten. Somit gilt:

- Es gibt 8 Auswahlmöglichkeiten für die 1. Stadt.
- Nachdem die erste Stadt ausgewählt wurde, gibt es nur noch 7 Auswahlmöglichkeiten für die 2. Stadt.
- Danach gibt es 6 Auswahlmöglichkeiten für die 3. Stadt.
- Weiter geht's mit 5 Auswahlmöglichkeiten für die 4. Stadt.
- Dann gibt es noch 4 Auswahlmöglichkeiten für die 5. Stadt.
- …
- Schließlich bleibt für die 8. Stadt nur noch 1 Wahl übrig.

Dies bedeutet, dass es insgesamt 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1 = 40 320 mögliche Pfade gibt.
Eine Kurzschreibweise für dieses Produkt ist 8! oder __Faktor__ 8.

Du kannst dir vorstellen, dass es unter Umständen nicht möglich ist, direkt zwischen zwei
Städten zu reisen, ohne dabei über eine andere Stadt zu fahren. In diesem Fall haben wir
es mit keinem vollständigen Graphen mehr zu tun, und es wird viel schwieriger,
die Anzahl der Hamiltonkreise zu finden, falls es überhaupt welche gibt.

---
> id: salesman-3

::: column.grow(parent="right")

Bisher haben wir die Tatsache ignoriert, dass einige Städte weiter voneinander entfernt
sein könnten als andere. Im wirklichen Leben ist dies jedoch eine sehr wichtige Überlegung:
Wir wollen nicht nur _einen_ Weg finden, sondern den kürzesten. Man nennt dies das
__Problem des Handlungsreisenden__. Es muss nicht nur im Transport- und Logistikbereich gelöst
werden, sondern auch bei der Positionierung von Transistoren auf Mikrochips, um
immer schnellere Computer herzustellen, oder bei der Analyse der Struktur der [DNA](gloss:dna).

Eine einfache Methode wäre es, alle möglichen Wege auszuprobieren, die Länge jedes
Weges zu ermitteln und dann den kürzesten zu wählen. Wie auch immer, wir haben gerade
gezeigt, dass es selbst mit nur ${tsn2}{tsn2|10|2,20,1} Städten ${tsn2}! = ${factorial(tsn2)} mögliche
Wege gibt. Sobald du hunderte oder tausende Knoten hast, wird es selbst mit leistungsstarken
Computern unmöglich, alle verschiedenen Wege auszuprobieren.

::: column(width=220)

    x-img(lightbox src="images/microchip.jpg" width=210 height=365)

:::

---
> id: salesman-4
> goals: move

Leider gibt es keinen effizienteren Algorithmus, um das Problem des Handlungsreisenden
zu lösen. Stattdessen haben Mathematiker und Informatiker verschiedene Algorithmen entwickelt,
die _gute_ Lösungen finden, auch wenn sie möglicherweise nicht die besten sind. Solche
Algorithmen, die nur Näherungslösungen liefern, werden als __Heuristiken__ bezeichnet.

Versuche, die Städte auf dieser Karte neu anzuordnen, und schau dir an, wie sich der
kürzeste Weg zwischen ihnen verändert. Du kannst Städte entfernen, indem du sie anklickst,
und du kannst Städte hinzufügen (bis zu 8), indem du irgendwo auf die Karte klickst:

    figure: .tsm
      svg(width=760 height=480 viewBox="0 0 760 480")

---
> id: salesman-5

::: column.grow

Der __Greedy-Algorithmus__ (oder Nearest-Neighbor-Algorithmus, "Nächster-Nachbar"
bzw. "gieriger" Algorithmus) ist sehr einfach: Du beginnst in einer zufälligen Stadt
und bewegst dich nacheinander in die jeweils nächstgelegene Stadt, die du noch nicht
besucht hast. Wenn du alle Städte besucht hast, hältst du an.

::: column(width=300)

{.todo} Animation kommt bald…

:::

Man kann zeigen, dass die Wege, die mit dem Greedy-Algorithmus gefunden werden,
im Durchschnitt 25% länger sind als der kürzestmögliche Weg.

---
> id: salesman-6

::: column.grow

Der __2-Opt Algorithmus__ beginnt mit einem zufälligen möglichen Pfad. Dann wählst du
wiederholt zwei Kanten aus und vertauschst sie, wenn das die Länge des Pfades verringern
würde. Du hörst auf, wenn du die Länge nicht weiter reduzieren kannst, indem du
irgendwelche Paare von Kanten vertauschst.

::: column(width=300)

{.todo} Animation kommt bald…

:::

---
> id: ants

Es stellt sich heraus, dass die Natur, lange bevor es Computer überhaupt gab, schon einen
schlaueren Weg gefunden hatte, um die Wege zwischen verschiedenen Orten zu optimieren:
in Ameisenkolonien.

    x-parallax.full-width(background="images/ants.jpg")

Ameisen wollen möglichst kurze Wege zwischen ihrem Nest und möglichen Nahrungsquellen finden.
Sie können miteinander durch Chemikalien kommunizieren, die sie auf ihrem Weg hinterlassen
und denen andere Ameisen folgen können.

---
> id: ants-1

::: column.grow

* Die Ameisenkolonie sendet viele Späher aus, die sich zunächst in zufällige
  Richtungen bewegen. Sobald sie Nahrung gefunden haben, kehren sie zurück und hinterlassen eine Spur von Pheromon.
* Andere Ameisen neigen dazu, wenn sie eine Spur finden, einer zu folgen die
  sie zum Essen führt. Auf ihrer Rückreise geben sie mehr Pheromon ab und verstärken so den Weg.
* Mit der Zeit verdunstet das Pheromon. Je länger ein Weg ist, desto länger
  brauchen Ameisen, um sich auf ihm fortzubewegen, und so hat das Pheromon mehr Zeit, um zu verdampfen. Kurze Wege hingegen können schneller verstärkt werden, sodass ihre Stärke schneller zunimmt.

::: column(width=240)

{.todo} Diagramm kommt bald…

:::

---
> id: ants-2

::: column(width=220 parent="right")

    x-img(style="margin-top: 5px" src="images/ant.jpg" width=220 height=220)

::: column.grow

Ameisenalgorithmen (Ant Colony System - ACS) versuchen, dieses Verhalten auf Computern
nachzubilden, indem sie viele "virtuelle" Ameisen zum Einsatz bringen. Sie können schnell
sehr gute Lösungen für das Problem des Handlungsreisenden finden.

Eine besonders nützliche Eigenschaft der ACS-Algorithmen ist, dass sie ständig ausgeführt
werden und sich in Echtzeit an Änderungen des Graphen anpassen können. Diese Änderungen
können in Straßennetzen durch Autounfälle und Straßensperrungen oder auf Webservern
durch Überlastungen in Computernetzwerken verursacht werden.

:::

---
> id: ants-3

::: column(width=140)

    img(src="images/binary.jpg" width=140 height=320)

::: column.grow

Das Problem des Handlungsreisenden ist [NP-hard](gloss:np), was bedeutet, dass es sehr
schwer von Computern zu lösen ist (zumindest für eine große Anzahl von Städten).

Die Entwicklung eines schnellen und genauen Algorithmus hätte schwerwiegende Auswirkungen
auf den Bereich der Informatik: es würde bedeuten, dass es schnelle Algorithmen für
_alle_ NP-hard-Probleme gibt. Es würde auch den größten Teil der Sicherheitsmaßnahmen
im Internet aushebeln, die sich darauf verlassen, dass bestimmte Probleme sehr schwer
für  Computer zu lösen sind.

Einen schnellen Algorithmus zu finden, um das Problem des Handlungsreisenden zu lösen,
würde auch eines der berühmtesten offenen Probleme in Mathematik und Informatik lösen,
das __P versus NP__ Problem. Es ist eines der sieben [Millenniumprobleme](gloss:millennium-prize),
die jeweils mit einem Preis von \$1 Mio. dotiert sind.

:::

---
> section: scheduling
> sectionStatus: dev

## Terminplanungs-Probleme

{.todo} Kommt bald

---
> id: applications
> section: applications

## Graphen im Alltag

In den vorhergehenden Kapiteln haben wir viele verschiedene Anwendungen der Graphentheorie
kennen gelernt, auch wenn einige von ihnen ein wenig konstruiert waren. Es stellt sich
jedoch heraus, dass Graphen die Grundlage vieler Gegenstände, Konzepte und Prozesse des
täglichen Lebens bilden.

::: column.grow

Das Internet, zum Beispiel, ist ein riesiger, virtueller Graph. Jeder Knoten ist eine
einzelne Webseite, und jede Kante bedeutet, dass es einen Hyperlink zwischen zwei
Seiten gibt. Beachte, dass Links nur in eine Richtung gehen, also ist dieser Graph
[[gerichtet|mehrzeilig|verbunden]], und außerdem ist er _sehr, sehr, groß_.

 Einige Websites, wie Wikipedia oder Facebook, haben viele eingehende Links, während
 viele kleinere Websites möglicherweise nur sehr wenige eingehende Links haben. Das ist
 übrigens das Konzept, nach dem Google seine Suchergebnisse sortiert.

::: column(width=240)

    img(credit="© Various" src="images/websites.png" width=240 height=240)

:::

---
> id: applications-1

Websites mit mehr eingehenden Links sind in der Regel von höherer Qualität und sollten in
den Suchergebnissen ganz oben angezeigt werden. Wenn man zum Beispiel nach "London" sucht,
werden offizielle Touristeninformationen vor kleinen Geschäften in London oder Blogs von
Leuten, die in London leben, angezeigt. Diese einfache Idee aus der Graphentheorie,
der __PageRank-Algorithmus__, führte dazu, dass Google viel besser war als andere frühe Suchmaschinen.

---
> id: applications-2

Das Internet ist das größte Netzwerk, das je von Menschenhand geschaffen wurde. Dieses
Bild zeigt einen sehr kleinen Teil aller an das Internet angeschlossenen Server:

    x-parallax.full-width(background="images/internet.jpg")
      .credit © LyonLabs, LLC and Barrett Lyon, 2014

---
> id: applications-3

Während Webseiten und Hyperlinks einen _virtuellen_ Graphen bilden, gibt es auch ein
_wirkliches_ Netzwerk von Computern, Servern, Routern, Telefonleitungen und Kabeln.

::: column.grow(parent="right")

Jedes Mal, wenn du telefonierst oder eine Webseite aufrufst, müssen die Netzbetreiber einen
Weg finden, Sender und Empfänger zu verbinden, ohne die Kapazität jedes einzelnen Kabels
oder jeder einzelnen Verbindung zu überschreiten. Mit Hilfe der Graphentheorie
und der
Wahrscheinlichkeitsrechnung kann ein zuverlässiger Betrieb garantiert werden,
indem beispielsweise Umleitungen gefunden werden, wenn eine bestimmte Verbindung besetzt ist.

::: column(width=220)

    x-img(lightbox src="images/phone.jpg" width=220 height=166)

:::

---
> id: applications-4

Graphen spielen auch im Transport- und Verkehrswesen eine wichtige Rolle. Alle Flug-, Zug-
und U-Bahn-Netze bilden Graphen, die bei der Erstellung effizienter Fahrpläne verwendet
werden können. Einer der bekanntesten Graphen ist die Karte der Londoner U-Bahn:

    figure: x-img(lightbox src="images/tube-map.png" width=720 height=480 credit="© Transport for London")

---
> id: applications-5

::: column.grow

Auch alle Straßen und Autobahnen bilden ein großes Netzwerk, das von Navigationsdiensten
wie Google Maps verwendet wird, um die kürzeste Route zwischen zwei bestimmten Punkten
zu ermitteln.

::: column(width=60)

    x-img(credit="© Google" src="images/google-maps.jpg" width=70 height=70)

:::

::: column(width=280)

    x-img(lightbox src="images/congestion.jpg" width=280 height=170)

::: column.grow

In Zukunft werden __Intelligente Transportsysteme__ Staus und Unfälle reduzieren,
da Autos mit Hilfe von Standortdaten, die von Smartphones und selbstfahrenden Autos
gesammelt werden, effizienter geleitet werden können. Dadurch könnten jedes Jahr Millionen
von Stunden, die auf der Straße verloren gehen, eingespart, die Umweltverschmutzung
erheblich reduziert und Notfalldienste rascher werden.

:::

---
> id: applications-6

Dieses Bild zeigt das Netzwerk kommerzieller Fluglinienflüge durch Nordeuropa.

    x-parallax.full-width(background="images/flights.jpg")

---
> id: applications-7

Es gibt unzählige andere Graphen in Wissenschaft, Technik oder im Alltag:

::: column(width=200)

    x-img(lightbox src="images/molecules.jpg" width=200 height=200)

{.caption} Die Verbindungen zwischen Atomen in __Molekülen__ und Kristallgittern bilden einen Graphen.

::: column(width=200)

    x-img(lightbox src="images/epidemic.jpg" width=200 height=200)

{.caption} Die __Ausbreitung von Krankheiten__ und Epidemien kann mithilfe eines Netzwerks modelliert werden.

::: column(width=200)

    x-img(lightbox src="images/evolution.jpg" width=200 height=200)

{.caption} In der Biologie bilden die __Evolutionsbäume__, die die Abstammung von Arten zeigen, einen Graphen.

::: column(width=200)

    x-img(lightbox src="images/network6.jpg" width=200 height=200)

{.caption} Die verschiedenen Bestandteile von __Stromkreisen__ und Computerchips bilden ein Netzwerk.

::: column(width=200)

    x-img(lightbox src="images/letters.jpg" width=200 height=200)

{.caption} Die grammatikalische Struktur von __Sprachen__ kann mithilfe von Graphen modelliert werden,
um beispielsweise Übersetzungsalgorithmen zu erstellen.

::: column(width=200)

    x-img(lightbox src="images/finance.jpg" width=200 height=200)

{.caption} Graphen haben auch viele Anwendungen in der __Wahrscheinlichkeitsrechnung__,
__Spieltheorie__ und __Finanzmathematik__.

:::

---
> id: social

### Soziale Netzwerke

Zum Schluss wollen wir uns noch ein besonders gutes Beispiel für Graphen aus dem
täglichen Leben ansehen: Soziale Medien. Hier repräsentieren Knoten [[Menschen|Freunde|Netzwerke]]
und Kanten stehen für Freundschaften, Vorlieben, Abonnements oder Follower.

Wenn wir Graphen zu sozialen Medien zeichnen, sehen wir unter Umständen bestimmte
__Häufungen__ bei gemeinsamen Bekannten, die vielleicht in die gleiche Schule gehen
oder in der gleichen Stadt leben. Wir können auch bestimmen, wie sehr jemand im __Mittelpunkt__
steht, was davon abhängt, wie gut ein Knoten mit dem anderen verbunden ist, und somit ein
Maß für die Popularität in Sozialen Medien sein kann.

    figure: x-img(lightbox src="images/social-network.png" width=720 height=500)

---
> id: social-1

::: column.grow

Im Jahr 2014 hatte Facebook 1,4 Milliarden aktive Nutzer und insgesamt mehr als 200 Milliarden
Freundschaften. Die Hälfte aller Facebook-Nutzer hat mehr als 200 Freunde, und da die
meisten unserer Freunde eine ähnliche Anzahl von Freunden haben, könnten wir leicht
Zehntausende von _Freunden von Freunden_ haben.

Eine spannende Frage wäre nun: Wenn du zwei zufällige Facebook-Nutzer auswählst, wie
viele „Freundschaftskanten“ müsstest du entlang gehen, um von einem zum anderen zu
gelangen? Beispielsweise beträgt der Abstand zwischen Freunden [[1]], der Abstand zwischen
Freunden von Freunden [[2]] usw.

::: column(width=200)

    x-img(src="images/facebook-like.png" width=200 height=200)

:::

---
> id: social-2

Im Jahr 2016 führte Facebook [eine Studie](https://research.facebook.com/blog/three-and-a-half-degrees-of-separation/)
durch, um festzustellen, wie eng die Benutzer miteinander verbunden sind. Sie fanden heraus,
dass du im Durchschnitt mit _jedem anderen_ auf Facebook durch höchstens 3,57 andere Personen
verbunden bist. Und dazu gehören Berühmtheiten, Politiker oder sogar Könige!

Mit anderen Worten: Wenn du einen der Milliarden Facebook-Nutzer auf der ganzen Welt auswählst,
dann wird dieser wahrscheinlich einen Freund eines Freundes haben, der einen Freund von
einem deiner Freunde kennt. Man sagt, der __Grad der Trennung__ beträgt 3,57.

    figure
      x-img(lightbox src="images/facebook.jpg" width=720 height=360 credit="© Facebook")
      p.caption Geografische Darstellung aller Facebook-Freundschaften im Jahr 2010.

---
> id: social-3

::: column(width=200)

    x-img(credit="© Metro-Goldwyn-Mayer" src="images/six-degrees.jpg" width=200 height=265 style="border: 1px solid #ccc")

::: column.grow

Als der ungarische Autor [Frigyes Karinthy](bio:karinthy) 1929 erstmals die Idee zu den „sechs
Graden der Trennung“ ("six degrees of separation") vorstellte, gab es weder Internet noch
soziale Medien, aber die Welt begann bereits, sich stärker zu vernetzen.

1967 führte [Stanley Milgram](bio:milgram) ein erstes empirisches Experiment durch,
bei dem 296 in Nebraska und Kansas lebende Teilnehmer gebeten wurden, einen Brief an eine
bestimmte in Boston, Massachusetts, lebende Person zu senden. Sie alle mussten einen
Freund auswählen, um den den Brief an diesen zu senden, der dann wiederum einen anderen
Freund auswählte. Bei jedem Schritt näherte sich der Brief Boston immer mehr. Milgram
stellte fest, dass es im Durchschnitt nur 5,2 Zwischenfreunde gab - also einen Grad der Trennung von 5,2.

:::

Heute ist jeder von uns Teil unzähliger unsichtbarer Graphen, die unseren sozialen Interaktionen, Reisen, Internet und Technik, Wissenschaft und vielem mehr zugrunde liegen.
