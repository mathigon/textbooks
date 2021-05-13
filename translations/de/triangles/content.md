# Dreiecke und Trigonometrie

## Einführung

> id: intro
> section: introduction
> description: "Dreiecke gehören zu den wichtigsten Formen in der Geometrie: Sie haben unzählige interessante Eigenschaften und tauchen überall in Technik und Ingenieurwesen auf."
> color: "#3566DE"
> level: Intermediate
> next: polyhedra

::: column.grow
Zu Beginn des 19. Jahrhunderts hatten die Forscher den größten Teil der Welt entdeckt. Handel und
Transport boomten zwischen den fernen Ländern, was die Notwendigkeit
_genauer Karten_ des gesamten Planeten mit sich brachte.

Heute haben wir Satelliten, die Fotos von oben machen können - aber vor 200 Jahren war die
Erstellung von Karten eine schwierige und zeitraubende Aufgabe. Sie wurde von
Mathematikern wie [Radhanath Sikdar](bio:sikdar) bewerkstelligt, die an
der _Großen Trigonometrischen Vermessung_ arbeiteten: einem jahrhundertelangem Projekt zur Vermessung
ganz Indiens,einschließlich des Himalaya-Gebirges.

::: column(width=240)

    x-img.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

{.caption} Der _Theodolit_, ein Vermessungsinstrument
:::

Von besonderem Interesse war die Suche nach dem höchsten Berg der Erde:
Es gab einige verschiedene Kandidaten, aber aus Hunderten von Kilometern Entfernung
war es schwer zu sagen, welcher der höchste war.

Wie misst man also die Höhe eines Berges?

    figure.mountain: include svg/mountain.svg

{.r} Heute können wir die Höhe von Bergen mit Hilfe von Satelliten auf
wenige Zentimeter genau messen - aber diese Möglichkeit hatte man bei der Vermessung Indiens durch Radhanath nicht.
_{button.next-step} Weiter_

{.r.reveal(when="next-0")} Kletterer verwenden _Höhenmesser_, um ihre Höhe zu bestimmen,
indem sie den Luftdruckunterschied in verschiedenen Höhen nutzen. Allerdings
hätte man dafür jemanden tatsächlich auf die [Spitze jedes
Berges](->.mountain-top) klettern lassen müssen - eine extrem schwierige Aufgabe, die erst
ein Jahrhundert später umgesetzt wurde.
_{button.next-step} Weiter_

{.r.reveal(when="next-1")} Du könntest auch versuchen, ähnliche Dreiecke zu verwenden, wie wir
es im [vorherigen Kurs](/course/transformations/similarity) gemacht haben,
diese Methode erfordert die Kenntnis des [Abstands](->.mountain-distance) zur [Basis
des Bergers](->.mountain-base): der Punkt auf Meereshöhe, der direkt unter
seinem Gipfel liegt. Wir können das bei Bäumen oder hohen Gebäuden so machen, aber für Berge ist dieser
Punkt unter Hunderten von Metern Felsen verborgen.
_{button.next-step} Weiter_

---
> id: intro-2

::: column(width=320)

    x-img(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary und Tenzing Norgay waren die ersten, die 1953 den Gipfel des
Mount Everest erreichten.

::: column.grow
Aber es gibt fortgeschrittenere geometrische Techniken,
mit denen [Radhanath](bio:sikdar) den höchsten Berg der Erde entdeckte: Er wird heute _Mount Everest_ genannt.
Seine Messungen wichen nur um wenige Meter von der heutigen offiziellen Höhe von 8848 Metern ab.

In diesem Kurs lernst du viele verschiedene Merkmale und Eigenschaften von
Dreiecken kennen. Diese ermöglichen es dir, die Höhe von Bergen zu messen, aber sie sind
auch in vielen anderen Bereichen der Mathematik, Naturwissenschaften und
Technik von grundlegender Bedeutung.
:::

---
> id: applications

Dreiecke sind etwas Besonderes, weil sie besonders _stabil_ sind. Sie sind das einzige
Vieleck, das, wenn es aus Holzbalken und Scharnieren zusammengebaut wird, völlig
_steif_ wird - im Gegensatz zu z.B. Rechtecken, die man leicht verschieben kann.

{.todo} KOMMT BALD - Animationen

---
> id: applications-1

Diese Eigenschaft macht Dreiecke besonders nützlich für Konstruktionen, wobei sie schwere Lasten tragen
können.

::: column(width=200)
    x-img(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} Eine "Fachwerkbrücke" wird von Dreieckskonstruktionen getragen
::: column(width=200)
    x-img(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Dreiecke in Hochspannungsmasten
::: column(width=200)
    x-img(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Auch Fahrräder verwenden Dreiecke für Stabilität.
:::

---
> id: applications-2
> goals: video

Dreiecke sind auch das einfachste Polygon, mit den wenigsten Seiten. Dadurch sind sie
besonders gut geeignet, um komplexe gekrümmte Oberflächen nachzubilden. Das wird
in realen Gebäuden…

::: column(width=200)
    x-img(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} "Die Gurke", ein Wolkenkratzer in London
::: column(width=200)
    x-img(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Bank of China Tower in Hong Kong
::: column(width=200)
    x-img(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Innenhof des British Museums in London
:::

::: column.grow
…aber auch in virtuellen Welten angewendet. In computergenerierten Grafiken (z.B. für Filme oder
Videospiele) werden alle Oberflächen durch ein "Netz" aus winzigen Dreiecken nachgebildet.
Künstler und Softwareingenieure müssen sich mit Geometrie und Trigonometrie auskennen,
um diese Dreiecke realistisch bewegen und verformen zu können und ihre Farbe und Textur zu
berechnen.
::: column(width=220)
    x-img(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="https://static.mathigon.org/videos/tiger.mp4" poster="images/tiger.jpg" width=480 height=270 credit="© UCTV, The STEAM Channel")

---

## Eigenschaften von Dreiecken

> id: angle-sum
> section: properties

Fangen wir ganz einfach an: Ein Dreieck ist eine geschlossene Figur mit drei Seiten (die [Strecken](gloss:line-segment)
sind) und drei Eckpunkten (die
[Punkte](gloss:point), an denen sich die Seiten treffen). Es hat auch drei [
Innenwinkel](gloss:internal-angle), und wir wissen bereits, dass ihre Summe
immer [[180]]° beträgt.

---
> id: classification

Wir können Dreiecke nach der Größe ihrer Winkel einteilen:

::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a1" x="point(40,60)")
      circle(name="b1" x="point(40,140)")
      circle(name="c1" x="point(180,140)")
      path.fill.red(x="angle(a1,b1,c1)")
      path(x="polygon(a1,b1,c1)")

{.caption} Ein __rechtwinkliges Dreieck__
hat einen [rechten Winkel](gloss:right-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a2" x="point(30,30)")
      circle(name="b2" x="point(150,60)")
      circle(name="c2" x="point(190,190)")
      path.fill.blue(x="angle(c2,b2,a2)")
      path(x="polygon(a2,b2,c2)")

{.caption} Ein __stumpfwinkliges Dreieck__
hat einen [stumpfen Winkel](gloss:obtuse-angle).
::: column(width=220)

    x-geopad(width=220): svg
      circle(name="a3" x="point(60,50)")
      circle(name="b3" x="point(30,180)")
      circle(name="c3" x="point(190,130)")
      path.fill.green(x="angle(a3,b3,c3)")
      path.fill.green(x="angle(b3,c3,a3)")
      path.fill.green(x="angle(c3,a3,b3)")
      path(x="polygon(a3,b3,c3)")

{.caption} Ein __spitzwinkliges Dreieck__
hat [[3]] [spitze Winkel](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
Aus Gründen der Übersichtlichkeit beschriften wir Dreiecke immer auf die gleiche Weise. Die Eckpunkte werden
mit Großbuchstaben [_A_, _B_ und _C_](target:vertex), die Seiten mit Kleinbuchstaben [_a_, _b_ und _c_](target:side) und die Winkel
mit griechischen Buchstaben [`α`, `β` and `γ`](target:angle) (“alpha”, “beta” und
“gamma”)
bezeichnet.

Die [Seite, die _gegenüber_ dem Eckpunkt _A_](target:X) liegt, ist mit _a_, und der
[Winkel, der direkt bei _A_](target:Y) anliegt, mit `α` bezeichnet. Auf dieselbe Art und Weise
verfahren wir bei _B_/_b_/`β` und bei _C_/_c_/`γ`.
::: column(width=220)

    x-geopad(width=220 height=200): svg
      circle.move.red(name="a" cx=80 cy=30 label="A" target="vertex X Y")
      circle.move.blue(name="b" cx=30 cy=170 label="B" target="vertex")
      circle.move.green(name="c" cx=190 cy=150 label="C" target="vertex")
      path.red(x="angle(c,a,b).sup" label="α" target="angle Y")
      path.blue(x="angle(a,b,c).sup" label="β" target="angle")
      path.green(x="angle(b,c,a).sup" label="γ" target="angle")
      path.red(x="segment(b,c)" label="a" target="side X")
      path.blue(x="segment(a,c)" label="b" target="side")
      path.green(x="segment(b,a)" label="c" target="side")

:::

---
> id: medians
> goals: s0 s1 s2 move

### Seitenhalbierende (Schwerlinien)

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line" projections="no"): svg
      circle.move(name="a" cx=75 cy=75 target="ratio")
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      path(x="triangle(a,b,c)")

      circle.green(name="ab" x="line(a,b).midpoint")
      circle.blue(name="ac" x="line(a,c).midpoint")
      circle.red(name="bc" x="line(b,c).midpoint" target="ratio")

      circle.yellow.reveal(name="d" x="triangle(a,b,c).centroid" when="blank-0" animation="pop" target="ratio")

      path.red.transparent(x="segment(a,d)" label="2" target="ratio")
      path.red.transparent(x="segment(d,bc)" label="1" target="ratio")


::: column.grow
Hier siehst du ein Dreieck sowie die [Mittelpunkte](gloss:midpoint) seiner
drei Seiten.

Eine [__Seitenhalbierende__](gloss:triangle-median) eines Dreiecks ist eine Strecke, die einen Eckpunkt
mit dem Mittelpunkt der gegenüberliegenden Seite verbindet. Zeichne die drei Seitenhalbierenden dieses
Dreiecks. _{span.reveal(when="s0 s1 s2")}Was passiert, wenn du die Eckpunkte
des Dreiecks verschiebst?_

{.reveal(when="move")} Es scheint, dass sich die Seitenhalbierenden immer [[in einem
Punkt schneiden|als gleich groß herausstellen|gegenseitig halbieren]].
_{span.reveal(when="blank-0")}Dieser Punkt wird als
[__Schwerpunkt__](gloss:centroid)bezeichnet._

{.reveal(when="blank-0")} Schwerlinien (Seitenhalbierende) teilen sich immer im
[Verhältnis 2:1](target:ratio). Für jede der drei Schwerlinien ist der Abstand vom
Eckpunkt zum Schwerpunkt immer [[zweimal|dreimal|genau]] so lang wie der
Abstand vom Schwerpunkt zum Mittelpunkt der Seite.
:::

---
> id: center-of-mass
> goals: move

Der Schwerpunkt ist auch der “Balancierpunkt” eines Dreiecks. Zeichne ein Dreieck auf
einen Karton, schneide es aus und finde die drei Seitenhalbierenden (Schwerlinien). Wenn du genau gearbeitet hast,
kannst du das Dreieck nun auf der Bleistiftspitze ausbalancieren oder es ganz
waagrecht an einem Stück Schnur aufhängen, die an seinem Schwerpunkt befestigt ist:

    figure: img(src="images/center-of-mass.jpg" width=600 height=190)

Das funktioniert, weil das Gewicht des Dreiecks gleichmäßig um den
Schwerpunkt verteilt ist. In der Physik wird dieser Punkt oft als __Massenschwerpunkt__ bezeichnet.
    // Any straight line that goes through the centroid divides the triangle into two
    // parts that have exactly the same area. Move the [blue point](target:move) in the
    // figure on the right. The red and green areas will always have the same area.

    // x-geopad(width=220): svg
      circle.move(name="a" cx=70 cy=50)
      circle.move(name="b" cx=60 cy=160)
      circle.move(name="c" cx=180 cy=130)
      circle.yellow(x="triangle(a,b,c).centroid" name="d")
      circle.move.blue.pulsate(name="p" cx=50 cy=50 project="circle(point(110,110),100)" target="move")
      circle(hidden name="q" x="p.rotate(pi,d)")

      path.dark(x="triangle(a,b,c)" name="t")
      path.fill.green.light(x="t.intersect(polygon(p,q,p.rotate(pi/2,q),q.rotate(-pi/2,p)))")
      path.fill.red.light(x="t.intersect(polygon(p,q,p.rotate(-pi/2,q),q.rotate(pi/2,p)))")
      path.blue(x="line(p,d)")

---
> id: circumcircle
> goals: s0 s1 s2

### Streckensymmetralen und Umkreis

::: column(width=300)

    x-geopad.sticky(tools="move|perpBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75 label="A" target="b-blue b-red")
      circle.move(name="b" cx=50 cy=250 label="B" target="b-red")
      circle.move(name="c" cx=250 cy=200 label="C" target="b-blue")
      path(x="triangle(a,b,c)")

      circle.reveal.red(x="line(a,b).midpoint" when="blank-0")
      circle.reveal.blue(x="line(a,c).midpoint" when="blank-0")
      circle.reveal.green(x="line(b,c).midpoint" when="blank-0")

      circle.reveal.yellow(x="triangle(a,b,c).circumcircle.c" name="d" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(d,c,1.99*pi)" name="circumcircle")

::: column.grow
Erinnere dich, dass die [Streckensymmetrale](gloss:perpendicular-bisector) einer Strecke die Senkrechte
ist, die durch [[ihren Mittelpunkt|ihre Endpunkte]] verläuft.

{.reveal(when="blank-0")}Zeichne die Streckensymmetrale aller drei Seiten dieses
Dreiecks. _{.lgrey} Um die Streckensymmetrale einer Seite des Dreiecks zu
zeichnen, klicke auf einen Eckpunkt und ziehe ihn einfach zum anderen Endpunkt der Seite._

{.reveal(when="s0 s1 s2")} Wie zuvor schneiden sich die drei Streckensymmetralen in einem
einzigen Punkt. Und wieder hat dieser Punkt eine besondere Eigenschaft.

{.reveal(when="s0 s1 s2")} Jeder Punkt auf einer Streckensymmetrale hat den gleichen
Abstand zu den beiden Endpunkten der Strecke, die er halbiert. So hat beispielsweise jeder Punkt
auf der [blauen Symmetrale](target:b-blue) den gleichen Abstand zu den Punkten _A_ und
_C_ und jeder Punkt auf der [roten Symmetrale](target:b-red) den gleichen Abstand zu den
Punkten [[A und B|A und C|B und C]].

{.reveal(when="blank-1")} Der [Schnittpunkt](target:center) liegt auf allen
drei Senkrechten, daher muss er den gleichen Abstand zu allen drei
[[Eckpunkten|Seiten]] des Dreiecks haben.

{.reveal(when="blank-2")} Das bedeutet, dass wir einen Kreis um ihn herum zeichnen können, der genau durch
alle Eckpunkte geht. Dieser Kreis wird als
[__Umkreis__](gloss:circumcircle) des Dreiecks bezeichnet, und sein Mittelpunkt wird als
__Umkreismittelpunkt__ bezeichnet.
:::

---
> id: circumcircle-1

Das heißt, dass wenn du drei Punkte gegeben hast, du den
Umkreismittelpunkt benutzen kannst, um den Kreis zu finden, der durch alle diese drei Punkte geht. (Es sei denn, die
Punkte sind [[kollinear|parallel]], in diesem Fall liegen sie alle auf einer geraden Linie.)

---
> id: incircle
> goals: s0 s1 s2

### Winkelsymmetralen und Inkreis

Du hast jetzt wahrscheinlich den Dreh raus: Wir wählen eine bestimmte Geradenkonstruktion aus, führen
diese dreimal für alle Seiten/Winkel der Dreiecke aus, und versuchen dann herauszufinden,
was das Besondere am Schnittpunkt der Geraden ist.

::: column(width=300)

    x-geopad.sticky(tools="move|angleBisector" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.fill.light.red(x="angle(c,a,b).sup" name="xa")
      path.fill.light.blue(x="angle(a,b,c).sup" name="xb")
      path.fill.light.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow
Erinnere dich, dass die [Winkelsymmetrale](gloss:angle-bisector) einen Winkel genau
in der Mitte teilt. Zeichne die Winkelsymmetrale aller drei Winkel dieses Dreiecks.
_{.lgrey} Um einen Winkelhalbierenden zu zeichnen, musst du auf die drei Punkte klicken, die den Winkel bilden
, den du halbieren möchtest._

{.r.reveal(when="s0 s1 s2")} Auch hier schneiden sich alle drei Linien in einem Punkt.
Du hast so etwas wahrscheinlich erwartet, aber es ist wichtig zu beachten, dass
es eigentlich keinen offensichtlichen Grund gibt, warum dies passieren sollte - außer dass Dreiecke eben sehr
spezielle Figuren sind!
_{button.next-step} Weiter_

{.reveal(when="next-0")} Punkte, die auf einer Winkelsymmetralen liegen, haben den gleichen
Abstand zu den beiden Linien, die den Winkel bilden. Zum Beispiel hat jeder Punkt auf der
[blauen Symmetrale](target:b-blue) den gleichen Abstand von Seite _a_ und Seite _c_,
und jeder Punkt auf der [roten Symmetrale](target:b-red) hat den gleichen Abstand von den
Seiten [[a und b|a und c|b und c]].

{.reveal(when="blank-0")} Der [Schnittpunkt](target:center) liegt auf allen
drei Symmetralen. Daher muss er den gleichen Abstand von allen drei
[[Seiten|Eckpunkten]] des Dreiecks haben.

{.reveal(when="blank-1")} Das bedeutet, dass wir einen Kreis um ihn herum zeichnen können, der innerhalb des Dreiecks liegt
und seine drei Seiten nur in jeweils einem Punkt berührt. Dieser Kreis wird als
__Inkreis__ des Dreiecks bezeichnet, und sein Mittelpunkt als __Inkreismittelpunkt__.
:::

---
> id: area

### Fläche und Höhen

::: column.grow
{.r} Die Berechnung der Fläche eines [Rechtecks](gloss:rectangle) ist einfach: Man
multipliziert einfach seine Breite mit seiner Höhe. Das Bestimmen der Fläche eines Dreiecks ist
etwas weniger offensichtlich. Beginnen wir damit, ein “passgenaues” Rechteck um unser Dreieck zu zeichnen.
_{button.next-step} Weiter_

{.reveal.r(when="next-0")} Die Länge des Rechtecks ist gleich der Länge der
[unteren Seite](target:base) des Dreiecks (die als __Grundseite (Basis)__ bezeichnet wird). Die
Höhe des Rechtecks ist der [senkrechte Abstand](target:height) von der
Basis zum gegenüberliegenden Eckpunkt.
_{button.next-step} Weiter_

{.reveal(when="next-1")} Die Höhe teilt das Dreieck in zwei Teile. Beachte,
dass die [zwei Lücken im Rechteck](target:gap) genau so groß sind wie die beiden
entsprechenden Teile des Dreiecks. Das bedeutet, dass das Rechteck
[[doppelt|dreimal|genau]] so groß wie das Dreieck ist.

{.reveal(when="blank-0")} Wir können die Fläche des Rechtecks leicht herausbekommen, und
die Fläche des Dreiecks muss dann also halb so groß sein:

{.text-center.reveal(when="blank-0")} `A = 1/2 ×` [{.step-target.pill.red} Basis](target:base)
`×` [{.step-target.pill.blue} Höhe](target:height)
::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=40 cy=220)
      circle.move(name="b" cx=260 cy=220)
      circle.move(name="c" cx=190 cy=80)
      circle(hidden x="line(a,b).project(c)" name="d")
      circle(hidden x="a.add(c).subtract(d)" name="e")
      circle(hidden x="b.add(c).subtract(d)" name="f")

      path.fill.green.reveal(x="polygon(a,d,c)" when="next-1" target="gap")
      path.fill.green.transparent(x="polygon(a,e,c)" target="gap")

      path.fill.yellow.reveal(x="polygon(b,d,c)" when="next-1" target="gap")
      path.fill.yellow.transparent(x="polygon(b,f,c)" target="gap")

      path.dark(x="polygon(a,b,c)")
      path.red.reveal(x="polygon(a,b,f,e)" when="next-0" animation="draw")
      path.blue.reveal(x="segment(c,d)" label="Höhe" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="Basis" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

Um die Fläche eines Dreiecks zu berechnen, kannst du eine der drei Seiten als
__Basis__ auswählen und dann die entsprechende __Höhe__ bestimmen, d.h. die Strecke, die
[[senkrecht|parallel]] zur Basis und durch den gegenüberliegenden Eckpunkt verläuft.

{.reveal(when="blank-0")} In Dreiecken spricht man von der
[__Höhe__](gloss:triangle-altitude) _auf die Seite_. Jedes Dreieck hat [[3]] Höhen.

---
> id: altitudes-1

::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")

      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Wie die [Seitenhalbierenden (Schwerlinien)](gloss:triangle-median), [Streckensymmetralen](gloss:perpendicular-bisector)
und [Winkelsymmetralen](gloss:angle-bisector)
schneiden sich auch die drei Höhen eines Dreiecks in einem einzigen Punkt. Dieser wird als [__Höhenschnittpunkt__](target:center)
des Dreiecks bezeichnet.

Bei [spitzwinkligen Dreiecken](gloss:acute-triangle) liegt der Höhenschnittpunkt
[[innerhalb|außerhalb|auf einem Eckpunkt]] des Dreiecks.

{.reveal(when="blank-0")} Bei [stumpfwinkligen Dreiecken](gloss:obtuse-triangle), liegt der
Höhenschnittpunkt [[außerhalb|innerhalb|auf einem Eckpunkt]] des Dreiecks.

{.reveal(when="blank-1")} Bei [rechtwinkligen Dreiecken](gloss:right-triangle) ist der
Höhenschnittpunkt [[ein Eckpunkt|innerhalb|außerhalb]] des Dreiecks. Zwei der
Höhen sind eigentlich nur Seiten des Dreiecks.
:::

---

## Mittelparallelen und Ähnlichkeit

> section: midsegments
> sectionStatus: dev
> id: midsegments
> goals: s0 s1 s2

::: column(width=300)

    x-geopad.sticky(tools="move|line" width=300 projections="no"): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250)
      circle.move(name="c" cx=250 cy=200)
      circle.red(name="p" x="line(a,b).midpoint")
      circle.red(name="q" x="line(a,c).midpoint")
      circle.red(name="r" x="line(b,c).midpoint")
      path(x="triangle(a,b,c)")

      path.transparent.fill.red(x="polygon(a,p,q)" target="triangles")
      path.transparent.fill.blue(x="polygon(b,p,r)" target="triangles")
      path.transparent.fill.yellow(x="polygon(c,q,r)" target="triangles")
      path.transparent.fill.green(x="polygon(p,q,r)" target="triangles")
      path.transparent.fill.red(x="polygon(a,b,c)" target="large")

::: column.grow
Eine [__Mittelparallele__](gloss:triangle-midsegment) ist eine Strecke, die die
Mittelpunkte zweier Seiten eines Dreiecks miteinander verbindet. Zeichne die drei Mittelparallelen dieses
Dreiecks.

{.reveal(when="s0 s1 s2")} Wie du siehst, teilen die Mittelparallelen das Dreieck
in [vier kleinere Dreiecke](target:triangles).

{.reveal(when="s0 s1 s2")} Es stellt sich heraus, dass alle diese kleineren Dreiecke
[[kongruent|überlappend|verschieden groß]] sind- sogar das umgedrehte in der
Mitte. _{span.reveal(when="blank-0")} Sie sind auch alle [[ähnlich|kongruent]]
zum [ursprünglichen Dreieck](target:large),_ _{span.reveal(when="blank-1")}mit einem
Verkleinerungsfaktor von `1/2`._

{.reveal(when="blank-1")} Das erlaubt es uns, einige wichtige Eigenschaften
 der Mittelparallelen von Dreiecken abzuleiten:

::: .theorem.reveal(when="blank-1")
__Satz von der Mittelparallelen im Dreieck__
Eine Mittelparallele eines Dreiecks ist parallel zu ihrer gegenüberliegenden Seite und genau halb
so lang wie diese Seite.
:::
:::

---

{.todo} COMING SOON – More on triangle midsegments, and how they relate to
similarity and proportionality.

---

## Kongruenzsätze

> id: sss-construction
> section: congruence
> goals: draw-base draw-c1 draw-c2

Nun, da wir überprüfen können, ob drei Seiten ein Dreieck bilden können, wollen wir darüber nachdenken, wie
wir tatsächlich ein Dreieck mit diesen Seitenlängen _konstruieren_ könnten.

::: column(width=300)

    x-geopad.sticky(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Zeichne ein Dreieck, das Seiten mit den Längen 4cm, 5cm und 6cm hat.

{.r} Zeichne zuerst die längste Seite des Dreiecks mit __6cm__ in das Feld. _{span.reveal(when="draw-base")} Damit haben wir bereits [zwei](target:base)
der drei Eckpunkte des Dreiecks - die Herausforderung besteht darin, den letzten zu finden
*{button.next-step} Weiter*_

{.reveal(when="next-0")} Zeichne als nächstes einen Kreis mit dem Radius __4cm__ um einen der
Eckpunkte _{span.reveal(when="draw-c1")}und einen Kreis mit dem Radius __5cm__ um
den anderen._

{.reveal(when="draw-c2")} Der dritte Eckpunkt des Dreiecks ist der
[[Schnittpunkt|Mittelpunkt|Radius]] der beiden Kreise. _{span.reveal(when="blank-0")}
Jetzt können wir sie einfach zu einem Dreieck verbinden._

{.reveal(when="blank-0" delay="3000")} Die Kreise schneiden sich eigentlich
[[zweimal|dreimal|unendlich oft]]: _{span.reveal(when="blank-1")}einmal
[oben](target:top) und einmal [unten](target:bottom). Wir können jeden dieser Schnittpunkte auswählen
, und die beiden resultierenden Dreiecke sind
[[kongruent|gleichseitig|rechtwinklig]]._
:::

---
> id: congruence

### Kongruenzkriterien

Aber ist es überhaupt möglich, _ein anderes_ Dreieck mit den gleichen drei
Seiten zu konstruieren?

Wir haben oben bereits zwei Dreiecke gesehen, aber sie waren beide kongruent. Tatsächlich sind
zwei beliebige Dreiecke, die die gleichen drei Seitenlängen haben, immer kongruent. Dies wird
als [__SSS-Satz__](gloss:triangle-sss) für Dreiecke
(“Seiten-Seiten-Seiten-Satz”) bezeichnet.

Wir haben jetzt zwei Bedingungen für Dreiecke: “WW” bedeutet, dass zwei Dreiecke [[ähnlich|kongruent|Abbildungen]] sind
, und “SSS” bedeutet, dass zwei Dreiecke
[[kongruent|ähnlich|gleich]] sind. Es gibt noch einige weitere Kongruenzsätze:

---
> id: congruence-1

::: .theorem
Zwei Dreiecke sind kongruent, wenn eine der folgenden Bedingungen erfüllt ist:

    .row.padded-thin
      div(style="width: 150px")
        .text-center: strong SSS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="segment(a,b)")
          path.red(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Alle Seiten sind kongruent.

      div(style="width: 150px")
        .text-center: strong SWS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path.red(x="segment(b,c)")
        p.caption Zwei Seiten und der #[strong eingeschlossene] Winkel sind kongruent.

      div(style="width: 150px")
        .text-center: strong WSW
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(c,a,b)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Zwei Winkel und die #[strong anliegende] Seite sind kongruent.

      div(style="width: 150px")
        .text-center: strong WWS
        x-geopad(width=150 height=120): svg
          circle(name="a" x="point(60,10)")
          circle(name="b" x="point(10,110)")
          circle(name="c" x="point(140,80)")
          path.red(x="angle(b,c,a)")
          path.red(x="angle(a,b,c)")
          path.red(x="segment(a,b)")
          path(x="segment(a,c)")
          path(x="segment(b,c)")
        p.caption Zwei Winkel und eine der nicht anliegenden Seiten.
:::

---
> id: cpoct

Du kannst dir diese Kriterien als “Abkürzungen” vorstellen: Um zu überprüfen, ob zwei Dreiecke
deckungsgleich sind, musst du nur eine der obigen Bedingungen überprüfen.

Sobald du _weißt_, dass zwei Dreiecke kongruent sind, weißt du auch, dass _alle_ ihre
entsprechenden Seiten und Winkel deckungsgleich sind. Im englischsprachigen Raum wird das oft mit
[__CPOCT__](gloss:cpoct) bezeichnet, und bedeutet dass “einander entsprechende Teile von kongruenten Dreiecken”
kongruent sind.

Es ist auch von Interesse, dass alle Sätze aus [[3]] verschiedenen
Werten (entweder Seiten oder Winkel) gebildet werden!

---
> id: contruction

### Dreieckskonstruktionen

Am Anfang dieses Abschnitts haben wir gesehen, wie man ein Dreieck konstruiert, wenn
 man alle drei seiner Seiten kennt. Ebenso ist es möglich, Dreiecke für jeden
der genannten Kongruenzsätze zu konstruieren.

::: tab
#### SWS

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task}Zeichne das Dreieck, das Seiten mit den Längen 5 cm und 3 cm und einen eingeschlossenen
Winkel von 40° hat.

Wie zuvor beginnen wir damit, eine der Seiten des Dreiecks zu zeichnen.

Als nächstes messen wir mit einem Winkelmesser einen Winkel von 40° um einen der beiden Eckpunkte und
markieren diesen Winkel mit einem Punkt.

Wir können den Eckpunkt mit unserer Messung verbinden, um die zweite Seite des
Dreiecks zu konstruieren.

Wir wissen, dass diese Seite 3 cm lang sein muss, also messen wir diesen Abstand mit einem
Lineal und markieren dann den dritten Eckpunkt des Dreiecks.

Schließlich können wir die letzten beiden Eckpunkte verbinden, um das Dreieck zu vervollständigen.
:::

Natürlich hätten wir auch zuerst die 3 cm Seite zeichnen oder den anderen Eckpunkt
wählen können, um den 40°-Winkel zu zeichnen. In all diesen Fällen wären die resultierenden
Dreiecke jedoch kongruent zu diesem gewesen.

::: tab
#### WSW

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task}Zeichne das Dreieck, das Winkel von 70° und 50° und eine anliegende
Seite von 5 cm Länge hat.

Zeichnen wir zunächst die erste Seite und messen mit einem Lineal 5 cm ab.

Nun können wir mit einem Winkelmesser einen Winkel von 70° von einem der
Endpunkte der Seite und einen Winkel von 50° vom anderen Endpunkt aus abmessen. (Auch
der umgekehrte Weg ist möglich - die resultierenden Dreiecke werden kongruent sein.)

Das Verbinden der Winkelmarkierungen mit den Endpunkten vervollständigt das Dreieck.
:::

::: tab
#### WWS

::: column(width=300)
{.todo} COMING SOON – Animation
::: column.grow
{.task}Zeichne das Dreieck, das Winkel von 40° und 50° und eine anliegende
Seite von 5 cm Länge hat.

Auch hier beginnen wir mit der Konstruktion der ersten Seite des Dreiecks, die 5 cm
lang ist.

Und wieder werden wir mit einem Winkelmesser einen Winkel von 40° um einen der
Endpunkte abtragen und die zweite Seite des Dreiecks zeichnen. Allerdings wissen
wir noch nicht, wo diese Seite enden wird.

Stattdessen wählen wir einen beliebigen Punkt um diese Linie herum, stellen uns vor, es sei der dritte Eckpunkt
des Dreiecks und tragen einen Winkel von 50° ab.

Wie du sehen kannst, funktioniert das nicht ganz: Die dritte Seite lässt sich noch nicht
mit dem Eckpunkt A verbinden. Um das zu beheben, müssen wir sie einfach verschieben: Wir zeichnen eine parallele
Linie, die durch A verläuft. (Du hast bereits in einem [früheren Kurs](/course/euclidean-geometry/geometric-construction) gelernt, wie man parallele Linien
konstruiert.)

Nun sind die beiden Winkel an der Oberseite [Wechselwinkel](gloss:alternate-angles), weshalb sie kongruent
und beide 50° sein müssen. Wir können die falsche, erste Linie löschen, um unser fertiges WWS-Dreieck
zu erhalten.
:::

::: tab
#### SSW
Die SSW-Konstruktion ist etwas anders. Du hast vielleicht bemerkt, dass “SSW”
nicht in der Liste der oben genannten Kongruenzsätze stand, da der Vergleich durch SSW allein nicht
gewährleistet, dass zwei Dreiecke kongruent sind. Warum das so ist, siehst du hier:

::: column(width=300)
{.todo} KOMMT BALD – Animation
::: column.grow
{.task} Zeichne das Dreieck, das Seiten von 4 cm und 5 cm und einen nicht eingeschlossenen
Winkel von 50° hat.

Wie immer beginnen wir damit, die erste Seite des
5 cm langen Dreiecks zu zeichnen.

Als nächstes tragen wir einen Winkel von 50° an einem der Endpunkte ab und zeichnen die
zweite Seite des Dreiecks. Allerdings wissen wir noch nicht, wo diese Seite
enden wird.

Die dritte Seite muss eine Länge von 4 cm haben. Mit einem Zirkel können wir einen Kreis mit einem
Radius von 4 cm um den anderen Endpunkt der ursprünglichen Seite zeichnen.

Der letzte Eckpunkt des Dreiecks wird durch den Schnittpunkt des Kreises und
der zweiten Linie gebildet. In diesem Fall gibt es jedoch zwei Schnittpunkte!

Diese beiden Dreiecke sind eindeutig nicht kongruent. Das bedeutet, dass es zwei
verschiedene Dreiecke gibt, die Seiten von 4 cm und 5 cm, sowie einen nicht eingeschlossenen
Winkel von 50° haben. SSW ist also nicht ausreichend, um zu sicherzustellen, dass zwei Dreiecke kongruent sind.
:::
:::

---

## Der Satz des Pythagoras

> id: pythagoras
> section: pythagoras

Wir sind nun an einem wichtigen Punkt in der Geometrie angelangt - wir sind in der Lage, einen der berühmtesten [Lehrsätze](gloss:theorem) der gesamten
Mathematik zu formulieren und zu
verstehen: __Den Satz des Pythagoras__. Er ist nach dem altgriechischen
Mathematiker [Pythagoras von Samos](bio:pythagoras) benannt.

::: .theorem
::: column.grow
__Der Satz des Pythagoras__
In jedem rechtwinkligen Dreieck ist das Quadrat der Länge der
[__Hypotenuse__](target:hypot) (die Seite, die dem rechten Winkel gegenüberliegt)
gleich der Summe der Quadrate der anderen beiden Seiten. Mit anderen Worten,

{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_Umgekehrt gilt auch: Wenn für die drei Seiten eines Dreiecks
`a^2 + b^2 = c^2` gilt, dann muss es [[rechtwinklig|spitzwinklig,|stumpfwinklig]] sein._
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")

      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-class="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-class="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-class="white")

      path.dark(x="segment(b,c)" label="a")
      path.dark(x="segment(a,c)" label="b")
      path.dark(x="segment(a,b)" label="c" target="hypot")
      path.dark.thin(x="angle(b,c,a)")

:::
:::

---
> id: pythagoras-1

::: column(width=220)

    img(src="images/ladder.svg" width=220 height=300)

::: column.grow
Rechte Winkel sind überall, und deshalb ist der Satz des Pythagoras so nützlich.

Hier siehst du eine __{.m-red}6 m__ lange Leiter, die an eine Wand gelehnt ist. Das untere Ende
der Leiter ist __{.m-blue}1 m__ von der Wand entfernt. Wie weit reicht sie die
Wand hinauf?

Beachte, dass ein rechtwinkliges Dreieck gebildet wird, das aus der Leiter, der Wand und
dem Boden besteht. Mit dem Satz des Pythagoras können wir das so schreiben:

    table.eqn-system
      tr
        td.md `class(h^2,"b m-green") + class(1^2,"b m-blue")`
        td.md `= class(6^2,"b m-red")`
      tr
        td.md `⇒ class(h^2,"b m-green")`
        td.md `= input(35)`
      tr.reveal(when="blank-0")
        td.md `⇒ class(h, "b m-green")`
        td.md `= sqrt(35) = "5.92m"`

:::

{.reveal(when="blank-0")} Immer wenn du ein rechtwinkliges Dreieck gegeben hast und
zwei seiner Seiten kennst, kannst du mit dem Satz des Pythagoras die dritte bestimmen.

---
> id: pythagoras-proof

### Beweise für den Satz des Pythagoras

Der Satz des Pythagoras war den alten Babyloniern, Mesopotamiern,
Indern und Chinesen bekannt - aber Pythagoras war wohl der erste, der einen formalen,
mathematischen Beweis fand.

Es gibt tatsächlich viele verschiedene Möglichkeiten, den Satz des Pythagoras zu beweisen. Hier zeigen wir
drei verschiedene Beispiele, die jeweils eine andere Strategie verwenden:

::: tab.proof-1

#### Neuanordnung _{span.check(when="blank-0 blank-1")}_

::: column.grow

Schau dir die Abbildung rechts an. Das Quadrat hat die Seitenlänge `a + b`,
und enthält [vier rechtwinklige Dreiecke](target:triangle), sowie ein
[kleineres Quadrat](target:square) mit der Fläche [[`c^2`|`a - b`|`a + b`]].

{.reveal(when="blank-0")} Nun ordnen wir die Dreiecke im Quadrat neu an. Das
Ergebnis enthält noch immer die vier rechtwinkligen Dreiecke sowie zwei Quadrate
mit der Fläche [[`a^2` und `b^2`|`c^2`|`(a + b)^2`]].

{.reveal(when="blank-1")} Vergleicht man die Größe des roten Bereichs
[vor](action:set(0)) und [nach](action:set(100)) der Umstellung, so
sieht man, dass

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} Das ist genau der gleiche Beweis, den sich
[Pythagoras](bio:pythagoras) ausgedacht hat _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" hidden x="b.add(e.subtract(a).flip)")
        circle(name="g" hidden x="c.subtract(e.subtract(a))")
        circle(name="h" hidden x="d.subtract(e.subtract(a).flip)")

        path.thin(x="segment(a,e)" label="a")
        path.thin(x="segment(e,b)" label="b")
        path.thin(x="segment(a,h)" label="b")
        path.thin(x="segment(h,d)" label="a")
        path.thin(x="segment(e,h)" label="c")
        path.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.square(x="polygon(a,b,c,d)")
        path.tri(x="polygon(a,e,h)" target="triangle")
        path.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Algebra _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow
Hier haben wir die gleiche Skizze wie zuvor, aber diesmal verwenden wir _Algebra_
anstatt einer _Neuanordnung_, um den Satz des Pythagoras zu beweisen.

Das große Quadrat hat eine Seitenlänge von `a + b` und eine Fläche
[[`(a + b)^2`|`a^2 + b^2`|`c^2`]].

{.reveal(when="blank-2")} Es besteht aus [{.blue}vier Dreiecken](target:triangle), mit einer Fläche von
jeweils [[`1/2 a b`|`(a + b)^2`|`1/2 (a + b)`]],
und [ein Quadrat](target:square) der Fläche [[`c^2`|`(a + b)^2`|`a × b`]].

{.reveal(when="blank-3 blank-4")} Wenn wir alle diese Informationen zusammenführen, bekommen wir folgende Gleichung:

|          `(a+b)^2` | `= 4 × 1/2 a b + c^2` |
| `a^2 + 2a b + b^2` | `= 2a b + c^2`        |
|        `a^2 + b^2` | `= c^2`               |
{.eqn-system.reveal(when="blank-3 blank-4")}

{.reveal(when="blank-3 blank-4")} Und wieder erhalten wir den Satz des Pythagoras.
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" hidden x="b.add(e1.subtract(a).flip)")
      circle(name="g1" hidden x="c.subtract(e1.subtract(a))")
      circle(name="h1" hidden x="d.subtract(e1.subtract(a).flip)")

      path.thin(x="segment(a,e1)" label="a")
      path.thin(x="segment(e1,b)" label="b")
      path.thin(x="segment(a,h1)" label="b")
      path.thin(x="segment(h1,d)" label="a")
      path.thin(x="segment(e1,h1)" label="c")
      path.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.tri(x="polygon(a,e1,h1)" target="triangle")
      path.tri(x="polygon(c,g1,f1)" target="triangle")
      path.tri(x="polygon(d,h1,g1)" target="triangle")
      path.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Ähnliche Dreiecke _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow
{.r} Hier haben wir irgendein rechtwinkliges Dreieck. Wenn wir eine der
Höhen einzeichnen, teilt sie das Dreieck in zwei kleinere Dreiecke auf,
und sie teilt die Hypotenuse _c_ in [zwei kleinere Teile](target:hypotenuse)
, die wir [{.step-target.i.pill.blue}x](target:x) und
[{.step-target.i.pill.green}y](target:y) nennen wollen.
_{span.next-step} Weiter_

{.r.reveal(when="next-0")} Sehen wir uns die beiden kleineren Dreiecke getrennt an, damit
klarer wird, wie sie zusammenhängen…
_{span.next-step} Weiter_

{.reveal(when="next-1")} Beide kleineren Dreiecke [teilen sich einen Winkel](target:angle)
mit dem ursprünglichen Dreieck. Beide haben auch [einen rechten Winkel](target:right).
Es gilt der WWW-Satz, dh alle drei Dreiecke sind [[ähnlich|kongruent|rechtwinklig]].

::: column(width=260)

    x-geopad.similar-triangle(width=260): svg
      circle(name="B1" hidden cx=40 cy=100)
      circle(name="X1" hidden cx=170 cy=100)
      circle(name="C1" hidden cx=170 cy=20)
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(name="A2" hidden cx=220 cy=100)
      circle(name="X2" hidden cx=170 cy=100)
      circle(name="C2" hidden cx=170 cy=20)
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" hidden x="point(220,100)")
      circle(name="B" hidden x="point(40,100)")
      circle(name="C" hidden x="point(170,20)")
      circle(name="X" hidden x="point(170,100)")
      path.dark(x="segment(X,C)" target="altitude")
      path.dark.thin(x="angle(B,X,C)" size=10 target="altitude")
      path.fill.yellow(x="angle(C,B,X)" size=25 target="angle")
      path.fill.red(x="angle(X,A,C)" size=20 target="angle")
      path.dark.thin(x="angle(A,C,B)" size=10 target="right")
      path.red(x="segment(B,C)" label="a" target="a xa")
      path.yellow(x="segment(A,C)" label="b" target="b yb")
      path.blue(x="segment(B,X)" label="x" target="hypotenuse x ac bc")
      path.green(x="segment(X,A)" label="y" target="hypotenuse y ac bc")

:::

{.reveal(when="blank-5")} Jetzt können wir die Gleichungen verwenden, die wir bereits über
ähnliche Vielecke kennen:

    table.proof-table.reveal(when="blank-5"): tr
      td.md `pill(x/a, "blue", "xa") = pill(a/c, "red", "ac")`<br>`pill(x, "blue", "x") = (a^2)/c`
      td.md `pill(y/b, "green", "yb") = pill(b/c, "yellow", "bc")`<br>`pill(y, "green", "y") = (b^2)/c`

{.r.reveal(when="blank-5")} [Weiter](btn:next)

{.reveal(when="next-2")} Aber erinnere dich, dass _c_ = [{.step-target.i.pill.green}y](target:y) +
[{.step-target.i.pill.blue}x](target:x). Wir setzen ein und erhalten

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Und damit haben wir ein weiteres mal den Satz des Pythagoras bewiesen! _{span.qed}_
:::

---
> id: pythagoras-2

Vieles über Pythagoras' Leben ist unbekannt, und es sind keine Originalschriften seines Werkes
erhalten geblieben. Er gründete einen religiösen Kult, die _Pythagoräer_, der eine Art
“Zahlenverehrung” praktizierte. Sie glaubten, dass alle Zahlen ihren eigenen Charakter haben,
und folgten einer Vielzahl anderer bizarrer Bräuche.

::: column.grow
Den Pythagoräern werden viele mathematische Entdeckungen zugeschrieben, darunter das
Auffinden der ersten [irrationalen Zahl](gloss:irrational-numbers), `sqrt(2)`.
Irrationale Zahlen können nicht als einfacher Bruch ausgedrückt werden - ein Konzept, das die
Pythagoräer zutiefst beunruhigend fanden und (erfolglos) zu vertuschen versuchten!
::: column(width=400)
    x-img(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pythagoräer feiern den Sonnenaufgang” von Fjodor Bronnikow
:::

---
> id: distance-formula

### Abstände berechnen

Eine der wichtigsten Anwendungen des Satzes des Pythagoras ist die Berechnung
von Abständen.

::: column.grow
{.r} Auf der rechten Seite siehst du zwei Punkte in einem Koordinatensystem. Wir könnten ihren Abstand mit einem Lineal
messen, aber das ist nicht besonders genau,
stattdessen versuchen wir es mit Pythagoras.
_{span.next-step} Weiter_

{.reveal(when="next-0")} Wir können leicht den [horizontalen Abstand](target:dx)
entlang der _x-Achse_ und den [vertikalen Abstand](target:dy) entlang der _y-Achse_ abzählen.
Wenn wir diese beiden Linien einzeichnen, erhalten wir ein [rechtwinkliges Dreieck](target:triangle).

{.reveal(when="next-0")} Mit Pythagoras,

| `d^2` | `= pill(var("b.x-a.x"),"blue","dx")^2 + pill(var("b.y-a.y"),"red","dy")^2`   |
| `d^2` | `= var("(b.x-a.x)**2 + (b.y-a.y)**2")`                                       |
| `d`   | `= sqrt(var("(b.x-a.x)**2 + (b.y-a.y)**2")) = var("round(distance(a,b),4)")` |
{.eqn-system.reveal(when="next-0")}

::: column(width=300)

    x-geopad(width=300 height=300 x-axis="-0.5,11.5,1" y-axis="-0.5,11.5,1" grid snap): svg
      circle.move.pulsate(name="a" cx="2" cy="5" label="(${a.x},${a.y})")
      circle.move.pulsate(name="b" cx="9" cy="10" label="(${b.x},${b.y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${b.y-a.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.fill.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

Diese Methode funktioniert für zwei _beliebige_ Punkte:

::: .theorem
__Die Abstandsformel__
Wenn du zwei Punkte mit den Koordinaten (`x_1`,`y_1`) und (`x_2`,`y_2`) gegeben hast,
beträgt der Abstand zwischen ihnen

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Pythagoräische Tripel

Als du die [Ecken des Dreiecks](->#tri-move) im vorherigen Schritt verschoben hast, hast
du vielleicht bemerkt, dass die Länge der Hypothenuse _d_
in den meisten Fällen eine [[Dezimalzahl|Bruchzahl|ganze Zahl]] ist.
_{span.reveal(when="blank-0")} aber es gibt einige Beispiele für rechtwinklige
Dreiecke, bei denen die Länge von *allen drei Seiten* zufällig *natürliche Zahlen* sind._

---
> id: pythagorean-triples-1

::: column.grow
Ein berühmtes Beispiel ist das 3-4-5 Dreieck. Da `3^2 + 4^2 = 5^2`, muss jedes Dreieck
mit Seiten der Länge 3, 4 und 5 rechtwinklig sein.

Die alten Ägypter wussten nichts über den Satz von Pythagoras, aber sie wussten etwas
über das 3-4-5 Dreieck. Beim Bau der Pyramiden verwendeten sie geknotete Seile
der Längen 3, 4 und 5, um perfekte rechte Winkel zu messen.
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Drei Zahlen wie diese werden als [__Pythagoräische Tripel__](gloss:pythagorean-triple) bezeichnet.
(3, 4, 5) ist ein Beispiel für ein Pythagoräisches Tripel. Wenn wir jede Zahl
mit 2 multiplizieren, erhalten wir ein weiteres Pythagoräisches Tripel: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

Wir können uns diese Tripel als Gitterpunkte in einem Koordinatensystem vorstellen. Für ein
gültiges Pythagoräisches Tripel muss der Abstand vom Ursprung bis zum Gitterpunkt eine ganze Zahl
sein. Kannst du mit dem untenstehenden Koordinatensystem weitere
Pythagoräische Tripel finden?

    figure: x-geopad.r.no-background(width=450 height=450 x-axis="0,16.5,1" y-axis="0,16.5,1" grid axes padding="10 10 25 25" snap)
      svg
        circle.move.pulsate(cx=4 cy=10 name="a")
        path.thick(x="polygon(point(0,0),a,point(a.x,0))")
      .label.var(style="left:${26+12.5*a.x}px; top:425px") ${a.x}
      .label.var(style="left:${26+25*a.x}px; top:${425-12.5*a.y}px") ${a.y}
      .label.var(style="left:${26+12.5*a.x}px; top:${425-12.5*a.y}px") ${round(a.length,2)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Erkennst du ein Muster in der
Verteilung dieser Punkte?

----

## Gleichschenklige und gleichseitige Dreiecke

> id: isosceles
> section: isosceles-and-equilateral
> sectionStatus: dev

Neben den rechtwinkligen Dreiecken gibt es noch einige andere Dreiecke mit
besonderen Eigenschaften. In diesem Abschnitt werden wir uns einige davon ansehen.

### Gleichschenklige Dreiecke

Wir sagen, dass ein Dreieck [__gleichschenklig__](gloss:isosceles-triangle)ist, wenn es
zwei kongruente Seiten hat. Diese kongruenten Seiten werden die __Schenkel__ des
Dreiecks genannt, während die dritte Seite die __Basis__ genannt wird.

{.todo} COMING SOON – Base angles theorem
Proof by constructing angle bisector and using SAS result.

{.todo} COMING SOON – Find the height of an Isosceles Triangles using Pythagoras

---
> id: equilateral

### Gleichseitige Dreiecke

Wir sagen, dass ein Dreieck [__gleichseitig__](todo:equilateral-triangle) ist, wenn alle
seine Seiten die gleiche Länge haben. Du hast [bereits
gesehen](/course/euclidean-geometry/geometric-construction), wie man ein
gleichseitiges Dreieck mit Lineal und Zirkel konstruiert.

{.todo} KOMMT BALD - Größe der Winkel in einem gleichseitigen Dreieck

{.todo} KOMMT BALD - Fläche eines gleichseitigen Dreiecks

----

## Trigonometrie

> id: trigonometry
> section: trigonometry

Bisher haben wir Beziehungen zwischen den __Winkeln__ von Dreiecken (z.B. summieren
sie sich immer auf 180°) und Beziehungen zwischen den __Seiten__ von Dreiecken
(z.B. Pythagoras) betrachtet. Aber wir haben nichts, was die Größe von Winkeln und
Seiten _miteinander verbindet_.

Wenn ich zum Beispiel die drei Seiten eines Dreiecks kenne, wie finde ich die Größe
seiner Winkel - ohne das Dreieck zu zeichnen und mit einem Winkelmesser zu messen -
hier kommt die __Trigonometrie__ ins Spiel!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
Stell dir vor, wir haben ein rechtwinkliges Dreieck, und wir kennen auch einen der beiden anderen
Winkel, __{.m-red}α__. Wir wissen bereits, dass die längste Seite
[__{.m-yellow}Hypotenuse__](target:hyp) genannt wird. Die anderen beiden werden normalerweise als
[__{.m-green}Ankathete__](target:adj) (anliegend am Winkel __{.m-red}α__) und
[__{.m-blue}Gegenkathete__](target:opp) (gegenüberliegend zum Winkel __{.m-red}α__) bezeichnet.
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse" target="hyp")
      path.blue(x="segment(b,c)" label="Gegenkathete" target="opp")
      path.green(x="segment(a,c)" label="Ankathete" target="adj")

:::

Es gibt viele verschiedene Dreiecke, die einen Winkel __{.m-red}α__ und 90° haben, aber
vom [WWW-Satz](gloss:triangle-aa) wissen wir, dass sie alle
[[ähnlich|kongruent]] sind:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Da alle diese Dreiecke ähnlich sind, wissen wir, dass ihre Seiten
proportional sind. Insbesondere sind die folgenden Verhältnisse für alle diese
Dreiecke gleich:

{.text-center} `class("Gegenkathete","m-blue b") / class("Hypotenuse","m-yellow b")`
_{span.space}_
`class("Ankathete","m-green b") / class("Hypotenuse","m-yellow b")`
_{span.space}_
`class("Gegenkathete","m-blue b") / class("Ankathete","m-green b")`

Fassen wir zusammenzufassen: Wir haben einen bestimmten Wert für __{.m-red}α__ gewählt
und viele ähnliche, rechtwinklige Dreiecke erhalten. Die Seiten dieser Dreiecke stehen zueinander
in jeweils gleichem Verhältnis. Da __{.m-red}α__ unsere einzige Variable war, muss es irgendeine
 Beziehung zwischen __{.m-red}α__ und diesen Verhältnissen geben.

Diese Beziehungen sind die __trigonometrischen Funktionen__ - und es gibt
drei davon:

::: .theorem
Die drei trigonometrischen Funktionen sind Beziehungen zwischen den Winkeln und den
Verhältnissen der Seiten in einem rechtwinkligen Dreieck. Jede hat einen Namen sowie
eine dreistellige Abkürzung:

::: column.grow

    ul
      li.display.md __Sinus:__ `sin(class(α,"m-red b")) = class("Gegenkathete","m-blue b") / class("Hypotenuse","m-yellow b")`
      li.display.md __Kosinus:__ `cos(class(α,"m-red b")) = class("Ankathete","m-green b") / class("Hypotenuse","m-yellow b")`
      li.display.md __Tangens:__ `tan(class(α,"m-red b")) = class("Gegenkathete","m-blue b") / class("Ankathete","m-green b")`

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Gegenkathete")
      path.green(x="segment(a,c)" label="Ankathete")

:::
:::

---
> id: trig-functions-1

{.todo} KOMMT BALD - Mehr zur Trigonometrie

---
> id: inverse-trig

### Trignometrische Umkehrfunktionen (inverse Funktionen)

{.todo} KOMMT BALD - Umkehrfunktion

---

## Sinus- und Kosinussätze

> section: sine-cosine-rule
> id: sine-cosine-rule

Bisher funktioniert alles, was du über die Trigonometrie gelernt hast, nur in rechtwinkligen
Dreiecken. Aber die meisten Dreiecke sind nicht rechtwinklig, und es gibt zwei wichtige
Ergebnisse, die für alle Dreiecke funktionieren

::: column.grow
::: .theorem
__Sinussatz__
In einem Dreieck mit den Seiten _a_, _b_ und _c_, und den Winkeln _A_, _B_ und _C_,

{.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`
:::

::: column.grow
::: .theorem
__Kosinussatz__
In einem Dreieck mit den Seiten _a_, _b_ und _c_, und den Winkeln _A_, _B_ und _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`
`b^2 = c^2 + a^2 - 2ca cos(B)`
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

:::

---
> id: trigonometry-4

{.todo} COMING SOON – Proof, examples and applications

---
> id: mountains

### Die Große Trigonometrische Vermessung

Erinnerst du dich noch an die Suche nach dem höchsten Berg der Erde in der
[Einleitung](/course/triangles/introduction)? Mit der
Trigonometrie haben wir endlich die Werkzeuge das zu bewerkstelligen!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad.no-background(width=760 height=250): svg
        image(href="images/mountain.svg" height=240 width=760 y=5)
        circle(name="a" x="point(25, 230)" target="points")
        circle(name="b" x="point(185, 230)" target="points")
        circle(name="x" x="point(573, 7)" target="")
        circle(name="y" x="point(573, 230)" target="")

        path.fill.red(x="angle(x,a,b)" label="23°" target="angles ang" size=60)
        path.fill.blue(x="angle(x,b,y)" label="29°" target="ang1" size=50)
        path.fill(name="angle-b" x="angle(b,x,a)" label="β" target="b angles" size=100)
        path.fill.green(name="angle-a" x="angle(a,b,x)" label="α" target="a angles" size=25)
        path(x="angle(b,y,x)")

        path.yellow(x="segment(a,b)" target="base right" label="5km")
        path.yellow(x="segment(b,x)" target="")
        path.yellow(name="side-d" x="segment(a,x)" target="d right" label="d")
        path.yellow(x="segment(b,y)" target="right")
        path.yellow(x="segment(x,y)" target="right" label="Höhe")

Die Vermesser in Indien haben den Winkel zur Bergspitze von [zwei
verschiedenen Positionen](target:points) aus gemessen, die _{span.pill.step-target.yellow(data-to="base")}im Abstand von 5 km_ liegen.
Die Ergebnisse waren _{span.pill.step-target.red(data-to="ang")}23°_ und
_{span.pill.step-target.blue(data-to="ang1")}29°_.

Da der _{span.pill.step-target.green(data-to="a")}Winkel α_ ein [Supplementärwinkel](gloss:supplementary-angles)
ist, wissen wir, dass er [[151]]° betragen muss.
_{span.reveal(when="blank-0")}Jetzt können wir die Summe der Innenwinkel
eines Dreiecks verwenden, um herauszufinden, dass der *{span.pill.step-target(data-to="b")}Winkel β*  [[6]]° beträgt._

{.reveal(when="blank-1")} Jetzt kennen [wir alle drei Winkel](target:angles) des
Dreiecks, sowie _{span.pill.step-target.yellow(data-to="base")}eine der
Seiten_. Das genügt, um mit dem [[Sinussatz|Kosinussatz]] den Abstand
[_d_](target:d) zu finden:

    table.eqn-system
      tr.reveal(when="blank-2")
        td.md `("sin" pill("151°","green","a")) / blank(d,5)`
        td.md `= ("sin" pill("6°","","b")) / blank(5,d)`
      tr.reveal(when="blank-3 blank-4")
        td.md `d`
        td.md `= "sin" pill("151°","green","a") × pill(5,"yellow","base") / ("sin" pill("6°","","b"))`
      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td.md `= pill("23.2 km","yellow","d")`

{.reveal(when="blank-3 blank-4" delay=2000)} Es gibt noch einen letzten Schritt: Wir wollen uns
das [große, rechtwinklige Dreieck](target:right) ansehen. Wir kennen bereits die
Länge der Hypotenuse, aber was wir wirklich brauchen, ist die Länge der [[Gegenkathete|Ankathete]]
. _{span.reveal(when="blank-5")}Wir können sie mit der Definition des
*sin* finden:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td.md `"sin" pill("23°","red","ang")`
        td.md `= blank("height",23) / blank(23,"height")`
      tr.reveal(when="blank-6 blank-7")
        td.md `"Höhe"`
        td.md `= "sin" pill("23°","red","ang") × pill(23,"yellow","d")`
      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td.md `= pill("8.987 km","yellow","height")`

{.reveal(when="blank-6 blank-7" delay=2000)} Und dieser Wert ist sehr nahe an der
tatsächlichen Höhe des Mount Everest, dem höchsten Berg der Welt: 8.848 m.
:::

---
> id: mountains-1

Diese Erklärung vereinfacht die außerordentliche Arbeit der
Mathematiker und Geographen, die an der Großen Trigonometrische Vermessung arbeiteten, erheblich. Sie
starteten vom Meeresspiegel am Strand, maßen Tausende von
Kilometern, bauten Vermessungstürme im ganzen Land und berücksichtigten
sogar die Krümmung der Erde.

    figure: x-img(src="images/himalaya.jpg" width=760 height=320)
