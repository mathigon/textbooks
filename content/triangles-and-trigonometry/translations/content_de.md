# Dreiecke und Trigonometrie

## Einführung

> id: intro

::: column.grow
Zu Beginn des 19. Jahrhunderts hatten die Forscher den größten Teil der Welt entdeckt. Handel und
Transport boomten zwischen den fernen Ländern, was die Notwendigkeit
_genauer Karten_ des gesamten Planeten mit sich brachte.

Heute haben wir Satelliten, die Fotos von oben machen können - aber vor 200 Jahren war die
Erstellung von Karten eine schwierige und zeitraubende Aufgabe. Sie wurde von
Mathematikern wie [Radhanath Sikdar](bio:sikdar)bewerkstelligt, die an
der _Große Trigonometrische Vermessung_ arbeiteten: einem jahrhundertelangem Projekt zur Vermessung
ganz Indiens,einschließlich des Himalaya-Gebirges.

::: column(width=240)

    x-media.shift-1(src="images/theodolite.jpg" width=240 height=320 credit="Science & Society Picture Library")

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
Berges] (->.mountain-top) klettern lassen müssen - eine extrem schwierige Aufgabe, die erst
ein Jahrhundert später umgesetzt wurde
_{button.next-step} Weiter_

{.r.reveal(when="next-1")} Du könntest auch versuchen, ähnliche Dreiecke zu verwenden, wie wir
es im [vorherigen Kurs](/course/transformations-and-symmetry/similarity) gemacht haben,
diese Methode erfordert die Kenntnis des [Abstands](->.mountain-distance) zur [Basis
des Bergers](->.mountain-base): der Punkt auf Meereshöhe, der direkt unter
seinem Gipfel liegt. Wir können das bei Bäumen oder hohen Gebäuden so machen, aber für Berge ist dieser
Punkt unter Hunderten von Metern Felsen verborgen
_{button.next-step} Weiter_

---
> id: intro-2

::: column(width=320)

    x-media(src="images/hillary.jpg" width=320 height=190)

{.caption} Edmund Hillary und Tenzing Norgay waren die ersten, die 1953 den Gipfel des
Mount Everest erreichten.

::: column.grow
Aber es gibt fortgeschrittenere geometrische Techniken,
mit denen [Radhanath](bio:sikdar) den höchsten Berg der Erde entdeckte: Er heißt heute _Mount Everest_.
Seine Messungen wichen nur um wenige Meter von der heutigen offiziellen Höhe von 8848 Metern ab.

In diesem Kurs lernst du viele verschiedene Merkmale und Eigenschaften von
Dreiecken kennen. Diese ermöglichen es dir, die Höhe von Bergen zu messen, aber sie sind
auch in vielen anderen Bereichen der Mathematik, Naturwissenschaften und
Technik von grundlegender Bedeutung.
:::

---
> id: angle-sum

## Eigenschaften von Dreiecken

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
hat [[3]][spitze Winkel](gloss:acute-angle).
:::

---
> id: labels

::: column.grow
Aus Gründen der Übersichtlichkeit beschriften wir Dreiecke immer auf die gleiche Weise. Die Eckpunkte werden
mit Großbuchstaben [_A_, _B_ und _C_](target:vertex), die Seiten mit Kleinbuchstaben [_a_, _b_ und _c_](target:side) und die Winkel
mit griechischen Buchstaben [`α`, `β` and `γ`](target:angle) (“alpha”, “beta” und
“gamma”)
 gekennzeichnet.
 
Die [Seite, die _gegenüber_ dem Eckpunkt _A ]_(target:X) liegt, ist mit _a_, und der
[Winkel, der direkt bei _A_](target:Y) anliegt, mit `α` gekennzeichnet. Auf dieselbe Art und Weise
verfahren wir bei _B_/_b_/`β` und bei _C_/_c_/`γ`.
::: column(width=220)

    x-geopad.label-halo(width=220 height=200): svg
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

    x-geopad.sticky(width=300 tools="move|line"): svg
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

Eine [__Seitenhalbierende__](gloss:median)eines Dreiecks ist eine Strecke, die einen Eckpunkt
mit dem Mittelpunkt der gegenüberliegenden Seite verbindet. Zeichne die drei Seitenhalbierenden dieses Dreiecks.
_{span.reveal(when="s0 s1 s2")}Was passiert, wenn du die Eckpunkte des
Dreiecks verschiebst?_

{.reveal(when="move")} Es scheint, dass sich die Seitenhalbierenden immer [[in einem
Punkt schneiden|auf gleiche Größe anpassen|gegenseitig halbieren]].
_{span.reveal(when="blank-0")}Dieser Punkt wird als
[__Schwerpunkt__](gloss:centroid)bezeichnet._

{.reveal(when="blank-0")} Seitenhalbierende (oder Schwerlinien) teilen sich immer im
[Verhältnis 2:1](target:ratio). Für jede der drei Seitenhalbierenden ist der Abstand vom
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

::: column.grow
Das funktioniert, weil das Gewicht des Dreiecks gleichmäßig um den
Schwerpunkt verteilt ist. In der Physik wird dieser Punkt oft als __Massenschwerpunkt__ bezeichnet.

Jede gerade Linie, die durch den Schwerpunkt verläuft, teilt das Dreieck in zwei
Teile, die genau die gleiche Fläche haben. Verschiebe den [blauen Punkt](target:move) in der
Abbildung rechts. Die roten und grünen Bereiche haben immer die gleiche Fläche.
::: column(width=220)

    x-geopad(width=220): svg
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

:::

---
> id: circumcircle
> goals: s0 s1 s2

### Streckensymmetralen und Umkreis

::: column(width=300)

    x-geopad.sticky.label-halo(tools="move|perpBisector" width=300): svg
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
Dreiecks. _{.lgrey}Um die Streckensymmetrale einer Seite des Dreiecks zu
zeichnen, klicke auf einen Eckpunkt und ziehe ihn einfach zum anderen Endpunkt der Seite._

{.reveal(when="s0 s1 s2")} Wie zuvor schneiden sich die drei Streckensymmetralen in einem
einzigen Punkt. Und wieder hat dieser Punkt eine besondere Eigenschaft.

{.reveal(when="s0 s1 s2")} Jeder Punkt auf einer Streckensymmetrale hat den gleichen
Abstand zu den beiden Endpunkten der Strecke, die er halbiert. So hat beispielsweise jeder Punkt
auf der [blauen Symmetrale](target:b-blau) den gleichen Abstand zu den Punkten _A_ und
_C_ und jeder Punkt auf der [roten Symmetrale](target:b-rot) den gleichen Abstand zu den
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

    x-geopad.sticky.label-halo(tools="move|angleBisector" width=300): svg
      circle.move(name="a" cx=75 cy=75)
      circle.move(name="b" cx=50 cy=250 target="b-blue")
      circle.move(name="c" cx=250 cy=200 target="b-red")

      path.thin.red(x="angle(c,a,b).sup" name="xa")
      path.thin.blue(x="angle(a,b,c).sup" name="xb")
      path.thin.green(x="angle(b,c,a).sup" name="xc")

      path(x="segment(a,b)" label="a" target="b-blue b-red")
      path(x="segment(a,c)" label="b" target="b-red")
      path(x="segment(b,c)" label="c" target="b-blue")

      circle.reveal.yellow(x="triangle(a,b,c).incircle.c" when="s0 s1 s2" target="center")
      path.yellow(hidden x="arc(triangle(a,b,c).incircle.c,triangle(a,b,c).incircle.at(0),1.999*pi)" name="incircle")

::: column.grow
Erinnere dich, dass die [Winkelsymmetrale](gloss:angle-bisector) einen Winkel genau
in der Mitte teilt. Zeichne die Winkelsymmetrale der drei Winkel in diesem Dreieck.
_{.lgrey}Um eine Winkelsymmetrale zu zeichnen, musst du auf die drei Punkte klicken, die den Winkel bilden,
den du halbieren möchtest._

{.r.reveal(when="s0 s1 s2")} Auch hier schneiden sich alle drei Linien in einem Punkt.
Du hast so etwas wahrscheinlich erwartet, aber es ist wichtig zu beachten, dass
es eigentlich keinen offensichtlichen Grund gibt, warum dies passieren sollte - außer dass Dreiecke eben sehr
spezielle Figuren sind!
_{button.next-step} Weiter_

{.reveal(when="next-0")} Punkte, die auf einer Winkelhalbierenden liegen, haben den gleichen
Abstand zu den beiden Linien, die den Winkel bilden. Zum Beispiel hat jeder Punkt auf der
[blauen Symmetrale](target:b-blue) den gleichen Abstand von Seite _a_ und Seite _c_,
und jeder Punkt auf der [roten Symmetrale](target:b-rot) hat den gleichen Abstand von den
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
[Unterseite](target:base) des Dreiecks (die als __Basis__bezeichnet wird). Die
Höhe des Rechtecks ist der [senkrechte Abstand](target:height) von der
Basis zum gegenüberliegenden Eckpunkt
_{button.next-step} Weiter_

{.reveal(when="next-1")} Die Höhe teilt das Dreieck in zwei Teile. Beachte,
dass die [zwei Lücken im Rechteck](target:gap) genau so groß sind wie die beiden
entsprechenden Teile des Dreiecks. Das bedeutet, dass das Rechteck
[[doppelt|dreimal|genau]] so groß wie das Dreieck ist.

{.reveal(when="blank-0")}Wir können die Fläche des Rechtecks leicht herausbekommen, und
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
      path.blue.reveal(x="segment(c,d)" label="height" when="next-0" delay="1000" target="height")
      path.blue.reveal(x="angle(c,d,b).sup" when="next-0" delay="1000" target="height")
      path.red.reveal(x="segment(a,b)" label="base" when="next-0" delay="1000" target="base")

:::

---
> id: altitudes

Um die Fläche eines Dreiecks zu berechnen, kannst du eine der drei Seiten als
__Basis__ auswählen und dann die dazugehörige __Höhe__ bestimmen, d.h. die Strecke, die
[[senkrecht|parallel]] zur Basis und durch den gegenüberliegenden Eckpunkt verläuft.

{.reveal(when="blank-0")} In Dreiecken spricht man von der 
[__Höhe__](gloss:triangle-altitude) _auf die Seite_. Jedes Dreieck hat [[3]] Höhen.

---
> id: altitudes-1

::: column(width=300)

    x-geopad.label-halo(width=300): svg
      circle.move(name="a" cx=75 cy=75 label="A")
      circle.move(name="b" cx=50 cy=250 label="B")
      circle.move(name="c" cx=250 cy=200 label="C")
      
      path(x="triangle(a,b,c)")
      path.altitude.red(hidden x="line(a,b).perpendicular(c)")
      path.altitude.blue(hidden x="line(a,c).perpendicular(b)")
      path.altitude.green(hidden x="line(b,c).perpendicular(a)")
      circle.yellow(hidden x="triangle(a,b,c).orthocenter" target="center")

::: column.grow
Wie die [Seitenhalbierenden](gloss:median), [Streckensymmetralen](gloss:perpendicular-bisector)
und [Winkelsymmetralen](gloss:angle-bisector)
schneiden sich auch die drei Höhen eines Dreiecks in einem einzigen Punkt. Dies wird als [__Höhenschnittpunkt__](target:center)
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
> id: midsegments
> goals: s0 s1 s2

### Mittelparallele

::: column(width=300)

    x-geopad.label-halo.sticky(tools="move|line" width=300): svg
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
Eine [__Mittelparallele]__(gloss:triangle-midsegment) ist eine Strecke, die die
Mittelpunkte zweier Seiten eines Dreiecks miteinander verbindet. Zeichne die drei Mittelparallelen dieses
Dreiecks.

{.reveal(when="s0 s1 s2")} Wie du siehst, teilen die Mittelparallelen das Dreieck
in [vier kleinere Dreiecke](target:triangles).

{.reveal(when="s0 s1 s2")} Es stellt sich heraus, dass alle diese kleineren Dreiecke
[[kongruent|überlappend|verschieden groß]] sind - auch das umgedrehte in der
Mitte_{span.reveal(when="blank-0")} - und dass sie alle [[ähnlich|kongruent]]
 zum [ursprünglichen Dreieck](target:large) sind,_ _{span.reveal(when="blank-1")}mit einem
Skalierungsfaktor von `1/2`_.

{.reveal(when="blank-1")} Das erlaubt es uns, einige wichtige Eigenschaften
 der Mittelparallelen von Dreiecken abzuleiten:

::: .theorem.reveal(when="blank-1")
__Satz von der Mittelparallelen im Dreieck__  
Eine Mittelparallele eines Dreiecks ist parallel zu ihrer gegenüberliegenden Seite und genau halb
so lang wie diese Seite.
:::
:::

---
> id: triangle-inequality
> goals: s0 s1 s3 s5

## Die Dreiecksungleichung

Nachdem wir viele der Eigenschaften und Komponenten von Dreiecken untersucht haben,
wollen wir uns jetzt Gedanken darüber machen, wie Dreiecke _aufgebaut_ sind. Wenn ich dir zB. jetzt drei Zahlen vorgebe, kannst
du ein Dreieck zeichnen, das diese Seitenlängen hat?

Hier sind einige Beispiele - verschiebe die Ecken des Dreiecks, bis die drei
Seitenlängen jeweils mit einer der drei Zahlenkombinationen auf der linken Seite übereinstimmen.

    .inequality.row
      div(style="width:150px")
        .item #[.t-num 5]#[.t-num 6]#[.t-num 7] #[span.check(when="s0")]
        .item #[.t-num 3]#[.t-num 9]#[.t-num 9] #[span.check(when="s1")]
        .item #[.t-num 2]#[.t-num 4]#[.t-num 8]
        .item #[.t-num 4]#[.t-num 6]#[.t-num 7] #[span.check(when="s3")]
        .item #[.t-num 1]#[.t-num 2]#[.t-num 6]
        .item #[.t-num 3]#[.t-num 5]#[.t-num 7] #[span.check(when="s5")]
      .grow
        x-geopad.label-halo(height=360): svg
          circle.move.pulsate(name="a" cx=175 cy=75)
          circle.move(name="b" cx=150 cy=250)
          circle.move(name="c" cx=350 cy=200)
          path.red(x="segment(a,b)" label="${roundD(a,b)}")
          path.blue(x="segment(b,c)" label="${roundD(b,c)}")
          path.yellow(x="segment(a,c)" label="${roundD(a,c)}")

{.reveal(when="s0 s1 s3 s5")} Es scheint so zu sein, dass es einige Fälle gibt, in denen aus den drei
Längen einfach _kein Dreieck_ gebildet werden kann. Dies ist insbesondere der Fall, wenn eine Seite
[[viel länger als|viel kürzer als|gleich lang wie]] die beiden anderen ist.

---
> id: triangle-inequality-1

::: column.grow
Stell dir die drei Seiten eines Dreiecks als Metallstangen vor, die mit Scharnieren verbunden sind, und
platziere die [längste Stange](target:long) in der Mitte und die [kürzeren
](target:kurz) an beiden Enden.

{.r} Jetzt ist leicht zu erkennen, dass es unmöglich ist, die Enden der
kürzeren Stangen zusammen zu bringen, wenn ihre Gesamtlänge kleiner ist als die Länge der größeren Stange ist.
_{button.next-step} Weiter_

::: column(width=300)

    x-geopad(width=300 height=180): svg
      circle(name="a" x="point(90,90)")
      circle(name="b" x="point(210,90)")
      circle.move.pulsate(name="c" cx=150 cy=50 project="circle(a,60)")
      circle.move.pulsate(name="d" cx=150 cy=50 project="circle(b,40)")

      path.blue(x="circle(a,60)" style="stroke-dasharray: 8px 10px")
      path.blue(x="circle(b,40)" style="stroke-dasharray: 8px 10px")
      path.thick(x="segment(a,b)" target="long")
      path.thick(x="segment(a,c)" target="short")
      path.thick(x="segment(b,d)" target="short")

:::

---
> id: inequality-picker

Wir wollen diese Beobachtung nun mathematisch formulieren:

::: .theorem
__Die Dreiecksungleichung__  
Die Summe der Längen von zwei beliebigen Seiten eines Dreiecks muss größer sein als die
Länge der dritten.
:::

Mit anderen Worten, wenn ein Dreieck die Seiten _a_, _b_ und _c_hat, dann wissen wir, dass
`a+b>c` und `a+c>b` und `b+c>a` sein müssen.

Die Dreiecksungleichung ermöglicht es uns, schnell zu überprüfen, ob drei Zahlen ein
Dreieck bilden können. Mit welchen dieser drei Zahlen geht es?

    x-picker
      .item.text-center #[.t-num 4]#[.t-num 6]#[.t-num 9]
      .item.text-center(data-error="inequality-error-1") #[.t-num 1]#[.t-num 2]#[.t-num 3]
      .item.text-center #[.t-num 3]#[.t-num 7]#[.t-num 8]
      .item.text-center(data-error="inequality-error-2") #[.t-num 2]#[.t-num 4]#[.t-num 7]
      .item.text-center(data-error="inequality-error-3") #[.t-num 1]#[.t-num 5]#[.t-num 8]
      .item.text-center #[.t-num 2]#[.t-num 3]#[.t-num 4]

---
> id: triangle-inequality-2

Die Dreiecksungleichung erlaubt es uns auch, die Länge der dritten Seite
eines Dreiecks zu schätzen, wenn wir die Länge der beiden anderen kennen.

Stellen dir vor, dass ein Dreieck zwei Seiten der Länge 4 und 6 hat. Wir wollen die Länge der dritten
Seite _c_ nennen. Dann wissen wir, dass

{.text-center} `4+6>c`, _{span.space}_ `4+c>6` _{span.space}_ und _{span.space}_ `6+c>4`

Wir können diese Ungleichungen neu anordnen, und erhalten [[2]] `<c<` [[10]].
_{span.reveal(when="blank-0 blank-1")}Die Länge der Seite *c* muss also zwischen 2 und 10 liegen_

---
> id: triangle-inequality-3
> goals: target-0 target-1

::: column.grow
Stellen wir uns das wieder als eine Konstruktion aus Bauteilen vor: zwei Seiten des
Dreiecks sind Metallstäbe der Länge 4 und 6, und die dritte Seite ist ein Gummiband
, das sich dehnen oder zusammenziehen kann.

Jetzt sehen wir, dass das Gummiband immer _{span.hover-target} länger als _
`6-4=2`und _{span.hover-target} kürzer als_ `6+4=10` ist.
::: column(width=300)

    x-geopad.label-halo(width=300 height=200): svg
      circle.move(name="a" cx=150 cy=150)
      circle.move(name="b" cx=70 cy=150 project="circle(a,80)")
      circle.move(name="c" cx=250 cy=50 project="circle(a,120)")
      path(x="segment(a,b)" style="stroke-width: 5px" label="4")
      path(x="segment(a,c)" style="stroke-width: 5px" label="6")
      path.rubber(x="segment(b,c)" style="stroke: #00cca6" label="${round(distance(b,c)/20)}")

:::

Beachte, dass es sich hierbei um _strikte_ Ungleichheiten handelt. Wenn die dritte Seite _genau_ 2 oder
10 ist, erhalten wir eine gerade Linie und kein Dreieck. Allerdings würden 2.1 oder 9.9
genügen, um ein Dreieck zu bilden.

---
> id: sss-construction
> goals: draw-base draw-c1 draw-c2

## Kongruente Dreiecke

Nun, da wir überprüfen können, ob drei Seiten ein Dreieck bilden können, wollen wir darüber nachdenken, wie
wir tatsächlich ein Dreieck mit diesen Seitenlängen _konstruieren_ könnten.

::: column(width=300)

    x-geopad.sticky.label-halo(width=300 tools="move|line|circle"): svg

::: column.grow
{.task} Zeichne ein Dreieck, das Seiten mit den Längen 4cm, 5cm und 6cm hat.

{.r} Zeichne zuerst die längste Seite des Dreiecks mit __6cm__ in das Feld.
 _{span.reveal(when="draw-base")} Damit haben wir bereits [zwei](target:base)
der drei Eckpunkte des Dreiecks - die Herausforderung besteht darin, den letzten zu finden
*{button.next-step} Weiter*_

{.reveal(when="next-0")} Zeichne als nächstes einen Kreis mit dem Radius __4cm__ um einen der
Eckpunkte _{span.reveal(when="draw-c1")}und einen Kreis mit dem Radius __5cm__ um
den anderen._

{.reveal(when="draw-c2")}Der dritte Eckpunkt des Dreiecks ist der
[[|Schnittpunkt|Mittelpunkt|Radius]] der beiden Kreise. _{span.reveal(when="blank-0")}
Jetzt können wir sie einfach zu einem Dreieck verbinden._

{.reveal(when="blank-0" delay="3000")} Die Kreise schneiden sich eigentlich 
[[zweimal|dreimal|unendlich oft]]: _{span.reveal(when="blank-1")}einmal
[oben](target:top) und einmal [unten](target:bottom). Wir können jeden dieser Schnittpunkte auswählen
, und die beiden resultierenden Dreiecke sind
[[kongruent|gleichseitig|rechtwinklig]]._
:::

---
> id: congruence

### Kongruenzsätze

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
        p.caption Zwei Winkel und einer der nicht anliegenden Seiten.
:::

---
> id: cpoct

Du kannst dir diese Bedingungen als “Abkürzungen” vorstellen: Um zu überprüfen, ob zwei Dreiecke
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
{.task} Zeichne das Dreieck, das Winkel von 40° und 50° und eine angrenzende
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
Linie, die durch A geht. (Du hast bereits in einem [vorherigen Kurs](/course/euclidean-geometry/geometric-construction) gelernt,
wie man parallele Linienkonstruiert.)

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
{.todo} COMING SOON – Animation
::: column.grow
{.task}Zeichne das Dreieck, das Seiten von 4 cm und 5 cm und einen nicht eingeschlossenen
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
> id: pythagoras
> class: no-border

## Der Satz des Pythagoras 

Wir sind nun an einem wichtigen Punkt in der Geometrie angelangt - wir sind in der Lage, einen der berühmtesten [Lehrsätze](gloss:theorem) der gesamten
Mathematik zu formulieren und zu
verstehen: den __Satz des Pythagoras__. Er ist nach dem altgriechischen
Mathematiker [Pythagoras von Samos](bio:pythagoras) benannt.

::: .theorem
::: column.grow
__Der Satz des Pythagoras__  
In jedem rechtwinkligen Dreieck ist das Quadrat der Länge der
[__Hypotenuse__](target:hypot) (die Seite, die dem rechten Winkel gegenüberliegt)
gleich der Summe der Quadrate der anderen beiden Seiten. Mit anderen Worten,
 
{.text-center} _{span.circled.green}`a^2`_ + _{span.circled.blue}`b^2`_ =
_{span.circled.yellow}`c^2`_

_Umgekehrt gilt auch: Wenn die drei Seiten eines Dreiecks
a*{sup}2* + b*{sup}2* = c*{sup}2* entsprechen, dann muss es [[rechtwinklig|spitzwinklig,|stumpfwinklig]] sein._
::: column(width=300)

    x-geopad(width=300): svg
      circle.move(name="a" cx=82 cy=160 target="hypot")
      circle.move(name="b" cx=218 cy=160 target="hypot")
      circle.move(name="c" cx=120 cy=100 project="arc(line(a,b).midpoint,a,pi).contract(0.2)")
      
      path.fill.green(x="polygon(b,c,b.rotate(-pi/2,c),c.rotate(pi/2,b))" label="a²" label-colour="white")
      path.fill.blue(x="polygon(c,a,c.rotate(-pi/2,a),a.rotate(pi/2,c))" label="b²" label-colour="white")
      path.fill.yellow(x="polygon(b,a,b.rotate(pi/2,a),a.rotate(-pi/2,b))" label="c²" label-colour="white")
      
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
dem Boden besteht. Mit dem Satz des Pythagoras bekommen wir einen

    //- Ideal syntax:
    //- | `green(h^2) + blue(1^2)` | `red(6^2)`          |
    //- |          `=> green(h^2)` | `= blank(35)`       |
    //- |            `=> green(h)` | `= sqrt(35) = 5.92` |
    
    table.eqn-system
      tr
        <td><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow><mo>+</mo><mrow class="b m-blue"><msup><mn>1</mn><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><mrow class="b m-red"><msup><mn>6</mn><mn>2</mn></msup></mrow></td>
      tr
        <td><mo>⇒</mo><mrow class="b m-green"><msup><mi>h</mi><mn>2</mn></msup></mrow></td>
        <td><mo>=</mo><x-blank-input solution="35"></x-blank-input></td>
      tr.reveal(when="blank-0")
        <td><mo>⇒</mo><mrow class="b m-green"><mi>h</mi></mrow></td>
        <td><mo>=</mo><msqrt><mn>35</mn></msqrt><mo>=</mo><mn>5.92m</mn></td>

:::

{.reveal(when="blank-0")} Wann immer du ein rechtwinkliges Dreieck gegeben hast und
zwei seiner Seiten kennst, kannst du mit der Hilfe von Pythagoras die dritte bestimmen.

---
> id: pythagoras-proof

### Beweise für den Satz des Pythagoras

Pythagoras’ theorem was known to ancient Babylonians, Mesopotamians,
Indians and Chinese – but Pythagoras may have been the first to find a formal,
mathematical proof.

There are actually many different ways to prove Pythagoras’ theorem. Here you
can see three different examples that each use a different strategy:

::: tab.proof-1

#### Rearrangement _{span.check(when="blank-0 blank-1")}_

::: column.grow

Have a look at the figure on the right. The square has side length _a_ + _b_,
and contains [four right-angled triangles](target:triangle), as well as a
[smaller square](target:square) of size [[<msup><mi>c</mi><mn>2</mn></msup>|_a_ – _b_|_a_ + _b_]].

{.reveal(when="blank-0")} Now let’s rearrange the triangles in the square. The
result still contains the four right-angles triangles, as well as two squares
of size [[<msup><mi>a</mi><mn>2</mn></msup> and <msup><mi>b</mi><mn>2</mn></msup>|<msup><mi>c</mi><mn>2</mn></msup>|<msup><mfenced><mi>a</mi><mo>+</mo><mi>b</mi></mfenced><mn>2</mn></msup>]].

{.reveal(when="blank-1")} Comparing the size of the red area
_{span.hover-target}before_ and _{span.hover-target}after_ the rearrangement, we
see that

{.text-center.reveal(when="blank-1")} `a^2 + b^2 = c^2`.

{.reveal(when="blank-1")} This is the original proof that
[Pythagoras](bio:pythagoras) came up with. _{span.qed}_

::: column(width=240)

    x-geopad(width=240)
      svg
        circle(hidden name="a" x="point(20,20)")
        circle(hidden name="b" x="point(220,20)")
        circle(hidden name="c" x="point(220,220)")
        circle(hidden name="d" x="point(20,220)")

        circle.move(name="e" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
        circle(name="f" x="b.add(e.subtract(a).flip)")
        circle(name="g" x="c.subtract(e.subtract(a))")
        circle(name="h" x="d.subtract(e.subtract(a).flip)")

        path.dark.thin(x="segment(a,e)" label="a")
        path.dark.thin(x="segment(e,b)" label="b")
        path.dark.thin(x="segment(a,h)" label="b")
        path.dark.thin(x="segment(h,d)" label="a")
        path.dark.thin(x="segment(e,h)" label="c")
        path.dark.thin(x="segment(e,f).shift(0,x*distance(h,a))" label="c")

        path.dark.square(x="polygon(a,b,c,d)")
        path.dark.tri(x="polygon(a,e,h)" target="triangle")
        path.dark.tri(x="polygon(c,g,f).shift(-x*distance(d,g),-x*distance(b,f))" target="triangle")
        path.dark.tri(x="polygon(d,h,g).shift(x*distance(e,a),0)" target="triangle")
        path.dark.tri(x="polygon(b,f,e).shift(0,x*distance(h,a))" target="triangle")
        path.dark.square.transparent(x="polygon(e,f,g,h)" target="square")

      .label(style="left: 120px; top: 120px;") c²
      .label.var(x-style="left: ${10 + e.x/2}px; top: ${230 - e.x/2}px;") a²
      .label.var(x-style="left: ${110 + e.x/2}px; top: ${130 - e.x/2}px;") b²

    x-slider(steps=100)

:::
::: tab.proof-2

#### Algebra _{span.check(when="blank-2 blank-3 blank-4")}_

::: column.grow
Here we have the same figure as before, but this time we’ll use _algebra_ rather
than _rearrangement_ to prove Pythagoras’ theorem.

The large square has side length `a + b` and area
[[(_a_ + _b_)<sup>2</sup>|_a_<sup>2</sup> + _b_<sup>2</sup>|_c_<sup>2</sup>]].

{.reveal(when="blank-2")} It consists of [four triangles](target:triangle), each
of size [[<mfrac><mn>1</mn><mn>2</mn></mfrac>_ab_|(_a_ × _b_)<sup>2</sup>|<mfrac><mn>1</mn><mn>2</mn></mfrac>(_a_ + _b_)]],
and [one square](target:square) of size [[_c_<sup>2</sup>|(_a_ + _b_)<sup>2</sup>|_a_ × _b_]].

{.reveal(when="blank-3 blank-4")} If we combine all of that information, we have

    //- Ideal syntax:
    //- |         `(a+b)^2` | `= 4 xx 1/2ab + c^2` |
    //- | `a^2 + 2ab + b^2` | `= 2ab + c^2`        |
    //- |       `a^2 + b^2` | `= c^2`              |

    table.eqn-system.reveal(when="blank-3 blank-4")
      tr
        <td><msup><mfenced><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow></mfenced><mn>2</mn></msup></td>
        <td><mo>=</mo><mn>4</mn><mo>×</mo><mfrac><mn>1</mn><mrow><mn>2</mn></mfrac><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mrow><mn>2</mn><mi>a</mi><mi>b</mi></mrow><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup></td>
      tr
        <td><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></td>

{.reveal(when="blank-3 blank-4")} And, once again, we get Der Satz des Pythagoras.
_{span.qed}_

::: column(width=240)

    x-geopad(width=240): svg        
      circle.move(name="e1" cx=100 cy=20 project="segment(line(a,b).at(.1),line(a,b).at(.9))")
      circle(name="f1" x="b.add(e1.subtract(a).flip)")
      circle(name="g1" x="c.subtract(e1.subtract(a))")
      circle(name="h1" x="d.subtract(e1.subtract(a).flip)")

      path.dark.thin(x="segment(a,e1)" label="a")
      path.dark.thin(x="segment(e1,b)" label="b")
      path.dark.thin(x="segment(a,h1)" label="b")
      path.dark.thin(x="segment(h1,d)" label="a")
      path.dark.thin(x="segment(e1,h1)" label="c")
      path.dark.thin(x="segment(e1,f1).shift(0,x*distance(h,a))" label="c")

      path.dark.square(x="polygon(e1,f1,g1,h1)" target="square")
      path.dark.tri(x="polygon(a,e1,h1)" target="triangle")
      path.dark.tri(x="polygon(c,g1,f1)" target="triangle")
      path.dark.tri(x="polygon(d,h1,g1)" target="triangle")
      path.dark.tri(x="polygon(b,f1,e1)" target="triangle")

:::
::: tab.proof-3

#### Similar Triangles _{span.check(when="next-0 next-1 next-2 blank-5")}_

::: column.grow
{.r} Here you can see another right-angled triangle. If we draw one of the
altitudes, it splits the triangle into two smaller triangle.
It also divides the hypotenuse _c_ into [two smaller parts](target:hypotenuse)
which we’ll call [{.step-target.i.pill.blue}x](target:x) and
[{.step-target.i.pill.green}y](target:y).
_{span.next-step} Continue_

{.r.reveal(when="next-0")} Let’s separate out the two smaller triangles, so that
it’s clearer to see how they are related…
_{span.next-step} Continue_

{.reveal(when="next-1")} Both smaller triangles [share one angle](target:angle)
with the original triangle. They also all have [one right angle](target:right).
By the AA condition, all thee triangles must be [[similar|congruent|right-angled]].

::: column(width=260)

    x-geopad.similar-triangle.label-halo(width=260): svg
      circle(x="B1")
      circle(x="X1")
      circle(x="C1")
      path.fill.light.red(x="polygon(B1,X1,C1)")
      path.fill.yellow(x="angle(C1,B1,X1).sup" size=25 target="angle")
      path.dark.thin(x="angle(B1,X1,C1).sup" size=10 target="right")
      path.red(x="segment(B1,C1)" label="a" target="a ac")
      path.dark(x="segment(X1,C1)")
      path.blue(x="segment(X1,B1)" label="x" target="x xa")

      circle(x="A2")
      circle(x="X2")
      circle(x="C2")
      path.fill.light.yellow(x="polygon(A2,X2,C2)")
      path.fill.red(x="angle(C2,A2,X2).sup" size=20 target="angle")
      path.dark.thin(x="angle(A2,X2,C2).sup" size=10 target="right")
      path.yellow(x="segment(A2,C2)" label="b" target="b bc")
      path.dark(x="segment(X2,C2)")
      path.green(x="segment(X2,A2)" label="y" target="y yb")

      circle(name="A" x="point(220,100)")
      circle(name="B" x="point(40,100)")
      circle(name="C" x="point(170,20)")
      circle(name="X" x="point(170,100)")
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

{.reveal(when="blank-5")} Now we can use the equations we already know about
similar polygons:

    table.proof-table.reveal(when="blank-5")
      tr
        td
          <p class="text-center"><mrow class="step-target pill blue" data-to="xa"><mfrac><mi>x</mi><mi>a</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill red" data-to="ac"><mfrac><mi>a</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill blue" data-to="x">x</mi><mo>=</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>c</mi></mfra></p>
        td
          <p class="text-center"><mrow class="step-target pill green" data-to="yb"><mfrac><mi>y</mi><mi>b</mi></mfra></mrow><mo>=</mo><mrow class="step-target pill yellow" data-to="bc"><mfrac><mi>b</mi><mi>c</mi></mfra></mrow></p>
          <p class="text-center"><mi class="step-target pill green" data-to="y">y</mi><mo>=</mo><mfrac><msup><mi>b</mi><mn>2</mn></msup><mi>c</mi></mfra></p>

{.r.reveal(when="blank-5")} _{span.next-step} Continue_

{.reveal(when="next-2")} But remember that _c_ = [{.step-target.i.pill.blue}x](target:x) +
[{.step-target.i.pill.green}y](target:y). Therefore

{.text-center.reveal(when="next-2")} `c = a^2/c + b^2/c`

{.text-center.reveal(when="next-2")} `c^2 = a^2 + b^2`

{.reveal(when="next-2")} Once more, we’ve proven Pythagoras’ theorem! _{span.qed}_
:::

---
> id: pythagoras-2

Much about Pythagoras’ life is unknown, and no original copies of his work have
survived. He founded a religious cult, the _Pythagoreans_, that practiced a kind
of  “number worship”. They believed that all numbers have their own character,
and followed a variety of other bizarre customs.

::: column.grow
The Pythagoreans are credited with many mathematical discoveries, including
finding the first [irrational number](gloss:irrational-numbers), `sqrt(2)`.
Irrational numbers cannot be expressed as a simple fraction – a concept the
Pythagoreans found deeply troubling and (unsuccessfully) tried to cover up!
::: column(width=400)
    x-media(src="images/pythagoreans.jpg" width=400 height=200 lightbox)

{.caption} “Pythagoreans celebrate sunrise” by Fyodor Bronnikov
:::

---
> id: distance-formula

### Calculating Distances

One of the most important application of Pythagoras’ Theorem is for calculating
distances. 

::: column.grow
{.r} On the right you can see two points in a coordinate system. We could
measure their distance using a ruler, but that is not particularly accurate.
Instead, let’s try using Pythagoras.
_{span.next-step} Continue_

{.reveal(when="next-0")} We can easily count the [horizontal distance](target:dx)
along the _x_-axis, and the [vertical distance](target:dy) along the _y_-axis.
If we draw those two lines, we get a [right-angled triangle](target:triangle).

{.reveal(when="next-0")} Using Pythagoras,

    table.eqn-system.reveal(when="next-0")
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><msup><mn class="step-target pill blue var" data-to="dx">${b.x-a.x}</mn><mn>2</mn></msup><mo>+</mo><msup><mn class="step-target pill red var" data-to="dy">${a.y-b.y}</mn><mn>2</mn></msup></td>
      tr
        <td><msup><mi>d</mi><mn>2</mn></msup></td>
        <td><mo>=</mo><mn class="var">${(b.x-a.x)*(b.x-a.x) + (a.y-b.y)*(a.y-b.y)}</mn></td>
      tr
        <td><mi>d</mi></td>
        <td><mo>=</mo><msqrt><mn class="var">${(b.x-a.x)*(b.x-a.x) + (a.y-b.y)*(a.y-b.y)}</mn></msqrt><mo>=</mo><mn class="var">${round(Math.sqrt((b.x-a.x)*(b.x-a.x) + (a.y-b.y)*(a.y-b.y)),4)}</mn></td>

::: column(width=300)

    x-geopad.label-halo(width=300 height=300 grid="25"): svg
      circle.move.pulsate(name="a" cx="2" cy="6" label="(${x},${11-y})")
      circle.move.pulsate(name="b" cx="9" cy="1" label="(${x},${11-y})")
      path(x="segment(a,b)" label="d")
      path.blue.reveal(x="segment(a,point(b.x,a.y))" label="${b.x-a.x}" mark="arrow" when="next-0" target="dx")
      path.red.reveal(x="segment(point(b.x,a.y),b)" label="${a.y-b.y}" mark="arrow" when="next-0" target="dy")
      path.yellow.transparent#tri-move(target="triangle" x="polygon(a,b,point(b.x,a.y))")

:::

---
> id: distance-formula-1

This method works for _any_ two points:

::: .theorem
__The Distance Formula__  
If you are given two points with coordinates  (`x_1`,`y_1`) and (`x_2`,`y_2`),
the distance between them is

{.text-center} `d^2=(x_2−x_1)^2+(y_2−y_1)^2`

{.text-center} `d=sqrt((x_2−x_1)^2+(y_2−y_1)^2)`
:::

---
> id: pythagorean-triples

### Pythagorean Triples

As you moved the [vertices of the triangle](->#tri-move) in the previous step,
you might have noticed that in most cases, the length of the hypothenuse _d_
ended up being a [[decimal number|fraction|integer]].
_{span.reveal(when="blank-0")}However there are a few examples of right-angled
triangles where the lengths of *all three sides* happens to be *whole numbers*._

---
> id: pythagorean-triples-1

::: column.grow
One famous example is the 3-4-5 triangle. Since `3^2 + 4^2 = 5^2`, any triangle
with sides of length 3, 4 and 5 must be right-angled.

The ancient Egyptians didn’t know about Pythagoras’ theorem, but they did know
about the 3-4-5 triangle. When building the pyramids, they used knotted ropes
of lengths 3, 4 and 5 to measure perfect right angles.
::: column(width=400)

    img(src="images/egypt.png" width=400 height=220)

:::

Three integers like this are called [__Pythagorean Triples__](gloss:pythagorean-triple).
(3, 4, 5) is one example of a Pythagorean triple. If we multiply every number
by 2, we get another Pythagorean triple: (6, 8, [[10]]).

---
> id: pythagorean-triples-grid
> goals: p0 p1 p2 p3 p4 p5

We can think of these triples as grid points in a coordinate systems. For a
valid Pythagorean triples, the distance from the origin to the grid point has to
be a whole number. Using the coordinate system below, can you find any other
Pythagorean triples?

    figure: x-geopad.r.label-halo(width=450 height=450 grid=25)
      svg
        path(x="line(o,point(0,16))")
        path(x="line(o,point(1,17))")

        circle.move.pulsate(cx=4 cy=10 name="a")
        circle(x="point(0,17)" name="o")
        path.thick(x="polygon(o,a,point(a.x,o.y))")

      .label.var(x-style="left:${12.5+12.5*a.x}px; top:440px") ${a.x}
      .label.var(x-style="left:${12.5+25*a.x}px; top:${225+12.5*a.y}px") ${17-a.y}
      .label.var(x-style="left:${12.5+12.5*a.x}px; top:${225+12.5*a.y}px") ${sqrtDistance(a)}

{.reveal(when="p0 p1 p2 p3 p4 p5")} Do you notice any pattern in the
distribution of these points? 

    // The mathematician Euclid found a clever method for generating new
    // Pythagorean triples. First, we need to pick any two integers _m_ and _n_:
    // {.text-center} _m_ = ${m}{m|2|1,20,1} _{span.space}_ _n_ = ${n}{n|2|1,20,1}
    // Now we can calculate the three numbers that make up the triple:
    // {.text-center} `2mn =` ${2×m×n}, `m^2 - n^2 =` ${m×m-n×n},  `m^2 + n^2 =` ${m×m+n×n}
    // And there you have your pythagorean triple! You can check that a2 + b2 = c2.

----
> id: isosceles
> sectionStatus: dev

## Isosceles and Equilateral Triangles

Other then right-angled triangles, there are a few other triangles with
special properties. In this section we’ll have a look at some of them.

### Isosceles Triangles

We say that a triangle is [__isosceles__](gloss:isosceles-triangle) if it has
two congruent sides. These congruent sides are called the __legs__ of the
triangle, while the third side is called the __base__.

{.todo} COMING SOON – Base angles theorem
Proof by constructing angle bisector and using SAS result.

{.todo} COMING SOON – Find the height of an Isosceles Triangles using Pythagoras

    // {.todo} The angles between the base and the congruent sides are
    // called base angles. The angle made by the two legs of the isosceles triangle is
    // called the vertex angle.
    // 
    // {.todo} Base Angles Theorem: The base angles of an isosceles triangle are congruent.
    // To prove the Base Angles Theorem, we will construct the angle bisector through
    // the vertex angle of an isosceles triangle.
    // 
    // {.todo} Isosceles Triangle Theorem: The angle bisector of the vertex angle in an
    // isosceles triangle is also the perpendicular bisector to the base.
    // 
    // {.todo} The converses of the Base Angles Theorem and the Isosceles Triangle Theorem are
    // both true. If two angles in a triangle are congruent, then
    // the opposite sides are also congruent. And if the perpendicular bisector of the base of
    // an isosceles triangle is also the angle bisector of the vertex angle.
    // 
    // {.todo} In other words, if △ABC is isosceles, AD⊥CB and CD≅DB, then ∠CAD≅∠BAD.
    // 
    // {.todo} Find the Height of an Isosceles Triangle
    // One way to use The Pythagorean Theorem is to identify the heights in isosceles
    // triangles so you can calculate the area.

---
> id: equilateral

### Equilateral Triangles

We say that a triangle is [__equilateral__](todo:equilateral-triangle) if all of
its sides  have the same length. You’ve [already
seen](/course/euclidean-geometry/geometric-construction) how to construct an
equilateral triangle using straight-edge and compass.

    // Any equilateral triangle is always also isosceles. From the base angle theorem
    // we know that angles opposite congruent sides in a triangle are also congruent.
    // In an equilateral triangle, all of the sides are congruent, so all of the angles
    // must also be congruent.
    // 
    // Since we know that the sum of all three angles is 180°, every individual angle
    // in an equilateral triangle must be [[60]]°.

{.todo} COMING SOON – Size of angles in an equilateral triangle

{.todo} COMING SOON – Area of an equilateral triangle

----
> id: trigonometry

## Trigonometry

So far we have seen relationships between the __angles__ of triangles (e.g.
they always sum up to 180°) and relationships between the __sides__ of triangles
(e.g. Pythagoras). But there is nothing that _connects_ the size of angles and
sides.

For example, if I know the three sides of a triangle, how do I find the size of
its angles – without drawing the triangle and measuring them using a protractor?
This is where __Trigonometry__ comes in!

    figure: img(src="images/trig-om-nom.jpg" width=200 height=200)

---
> id: trigonometry-1

::: column.grow
Imagine we have a right-angled triangle, and we also know one of the two other
angles, __{.m-red}α__. We already know that the longest side is called the
[__{.m-yellow}hypotenuse__](target:hyp). The other two are usually called the
[__{.m-green}adjacent__](target:adj) (which is next to angle __{.m-red}α__) and
the [__{.m-blue}opposite__](target:opp) (which is opposite angle __{.m-red}α__).
::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse" target="hyp")
      path.blue(x="segment(b,c)" label="Opposite" target="opp")
      path.green(x="segment(a,c)" label="Adjacent" target="adj")

:::

There are many different triangles that have angles __{.m-red}α__ and 90°, but
from the [AA condition](gloss:triangle-aa) we know that they are all
[[similar|congruent]]:

    figure: img(src="images/triangles.svg" width=600 height=240)

---
> id: trig-functions

Since all of these triangles are similar, we know that their sides are
proportional. In particular, the following ratios are the same for all of these
triangles:

    p.text-center
      mfrac
        mrow: mtext.m-blue.b Opposite
        mrow: mtext.m-yellow.b Hypotenuse
      span.space
      mfrac
        mrow: mtext.m-green.b Adjacent
        mrow: mtext.m-yellow.b Hypotenuse
      span.space
      mfrac
        mrow: mtext.m-blue.b Opposite
        mrow: mtext.m-green.b Adjacent

Let’s try to summarise this: we picked a certain value for __{.m-red}α__, and
got lots of similar, right-angled triangles. All of these triangles have the
same ratios of sides. Since __{.m-red}α__ was our only variable, there must be
some relationship between __{.m-red}α__ and those ratios.

These relationships are the __Trigonometric functions__ – and there are three of
them:

::: .theorem
The three Trigonometric functions are relationships between the angles and the
ratios of sides in a right-angles triangle. They each have a name, as well as
a 3-letter abbreviation:

::: column.grow

    ul
      li
        strong Sine:
        .space
        mtext sin
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Opposite
          mrow: mtext.m-yellow.b Hypotenuse
      li
        strong Cosine:
        .space
        mtext cos
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-green.b Adjacent
          mrow: mtext.m-yellow.b Hypotenuse
      li
        strong Tangent:
        .space
        mtext tan
        mfenced: mtext.m-red.b α
        mo =
        mfrac
          mrow: mtext.m-blue.b Opposite
          mrow: mtext.m-green.b Adjacent

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle(name="a" x="point(30,120)")
      circle(name="b" x="point(210,40)")
      circle(name="c" x="point(210,120)")
      path(x="angle(a,c,b)")
      path.red(x="angle(b,a,c)" label="α")
      path.yellow(x="segment(a,b)" label="Hypotenuse")
      path.blue(x="segment(b,c)" label="Opposite")
      path.green(x="segment(a,c)" label="Adjacent")

:::
:::

---
> id: trig-functions-1

{.todo} COMING SOON – More on Trigonometry

    // {.todo} COMING SOON – Abbreviations: sin x, cos y
    // {.todo} COMING SOON – Using calculators
    // {.todo} COMING SOON – Examples
    // {.todo} COMING SOON – Rationalize the denominator

---
> id: inverse-trig

### Inverse Trignometric Functions 

{.todo} COMING SOON – Inverse functions

    // The word inverse is probably familiar to you. In mathematics, once you learn how
    // to do an operation, you also learn how to “undo” it. For example, you may
    // remember that addition and subtraction are considered inverse operations.
    // Multiplication and division are also inverse operations. In algebra you used
    // inverse operations to solve equations and inequalities. When we apply the word
    // inverse to the trigonometric ratios, we can find the acute angle measures within
    // a right triangle. Normally, if you are given an angle and a side of a right
    // triangle, you can find the other two sides, using sine, cosine or tangent. With
    // the inverse trig ratios, you can find the angle measure, given two sides.

    // On most scientific and graphing calculators, the buttons look like
    // [SIN−1],[COS−1], and [TAN−1]. Typically, you might have to hit a shift
    // button to access these functions.

---
> id: sine-cosine-rule

### Sine and Cosine Rules

So far, all you’ve learned about Trigonometry only works in right-angled
triangles. But most triangles are not right-angled, and there are two important
results that work for all triangles

::: column.grow
::: .theorem
__Sine Rule__  
In a triangle with sides _a_, _b_ and _c_, and angles _A_, _B_ and _C_,

{.text-center} `(sin(a))/a = (sin(b))/b = (sin(c))/c`
:::

    // {.todo} Use Law of Sines when given:
    // An angle and its opposite side.
    // Any two angles and one side.

::: column.grow
::: .theorem
__Cosine Rule__  
In a triangle with sides _a_, _b_ and _c_, and angles _A_, _B_ and _C_,

{.text-center} `c^2 = a^2 + b^2 - 2ab cos(C)`  
`b^2 = c^2 + a^2 - 2ca cos(B)`  
`a^2 = b^2 + c^2 - 2bc cos(A)`
:::

    // {.todo} Even though there are three formulas, they are all very similar. First, notice
    // that whatever angle is in the cosine, the opposite side is on the other side of
    // the equal sign.
    // 
    // {.todo} Use Law of Cosines when given:
    // Two sides and the included angle.
    // All three sides.
:::

---
> id: trigonometry-4

{.todo} COMING SOON – Proof, examples and applications

    // TODO Future stuff about trigonometry

---
> id: mountains

### The Great Trigonometric Survey

Do you still remember the quest to find the highest mountain on Earth from the
[introduction](/course/triangles-and-trigonometry/introduction)? With
Trigonometry, we finally have the tools to do it!

::: .sticky-wrap

    figure.sticky.mountain
      x-geopad(width=760 height=250 style="background: white"): svg
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
        path.yellow(x="segment(x,y)" target="right" label="height")

The surveyors in India measured the angle of the top of a mountain from [two
different positions](target:points), _{span.pill.step-target.yellow(data-to="base")}5km apart_.
The results were _{span.pill.step-target.red(data-to="ang")}23°_ and
_{span.pill.step-target.blue(data-to="ang1")}29°_.

Because _{span.pill.step-target.green(data-to="a")}angle α_ is a [supplementary
angle](gloss:supplementary-angles), we know that it must be [[151]]°.
_{span.reveal(when="blank-0")}Now we can use the sum of the internal angles of
a triangle to work out that *{span.pill.step-target(data-to="b")}angle β* is [[6]]°._

{.reveal(when="blank-1")} Now we know [all three angles](target:angles) of the
triangle, as well as _{span.pill.step-target.yellow(data-to="base")}one of the
sides_. This is enough to use the [[sine rule|cosine rule]] to find the distance
[_d_](target:d):

    table.eqn-system
      tr.reveal(when="blank-2")
        td
          mfrac
            mrow
              mo sin
              mn.pill.step-target.green(data-to="a") 151°
            mrow.md [[d|5]]
        td
          mo =
          mfrac
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°
            mrow.md [[5|d]]
      tr.reveal(when="blank-3 blank-4")
        td: mi d
        td
          mo =
          mo sin
          mn.pill.step-target.green(data-to="a") 151°
          mo ×
          mfrac
            mrow: mn.pill.step-target.yellow(data-to="base") 5
            mrow
              mo sin
              mn.pill.step-target(data-to="b") 6°

      tr.reveal(when="blank-3 blank-4" delay=1000)
        td
        td
          mo =
          mn.pill.yellow.step-target(data-to="d") 23.2 km

{.reveal(when="blank-3 blank-4" delay=2000)} There is one final step: let’s have
a look at the [big, right-angled triangle](target:right). We already know the
length of the hypotenuse, but what we really need is the [[opposite|adjacent]]
side. _{span.reveal(when="blank-5")}We can find it using the definition of
*sin*:_

    table.eqn-system
      tr.reveal(when="blank-5" delay=1000)
        td
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
        td
          mo =
          mfrac
            mrow.md [[height|23]]
            mrow.md [[23|height]]
      tr.reveal(when="blank-6 blank-7")
        td: mtext height
        td
          mo =
          mo sin
          mn.pill.step-target.red(data-to="ang") 23°
          mo ×
          mn.pill.step-target.yellow(data-to="d") 23

      tr.reveal(when="blank-6 blank-7" delay=1000)
        td
        td
          mo =
          mn.pill.step-target.yellow(data-to="height") 8.987 km

{.reveal(when="blank-6 blank-7" delay=2000)} And that is very close to the
actual height of Mount Everest, the highest mountain on Earth: 8.848 m.
:::

---
> id: mountains-1

This explanation greatly simplifies the extraordinary work done by the
mathematicians and geographers working on the Great Trigonometrical Survey. They
started from sea level at the beach, measured thousands of kilometers of
distance, built surveying towers across the entire country and even accounted
for the curvature of Earth.

    figure: x-media(src="images/himalaya.jpg" width=760 height=320)

---
> id: applications
> class: no-border

## Applications

But triangles and trigonometry are not just useful for measuring the height of
mountains, and the tools and concepts you have learned are incredibly important
in countless areas of mathematics, science and engineering.

Triangles are special because they are particularly _strong_. They are the only
polygon that, when made out of wooden beams and hinges, will be completely
_rigid_ – unlike rectangles, for example, which you can easily push over.

{.todo} COMING SOON – Animations

---
> id: applications-1

This property makes triangles particularly useful in construction, where they
can carry heavy weights.

::: column(width=200)
    x-media(src="images/truss-bridge.jpg" credit="© ykanazawa1999, Flickr" width=200 height=200 lightbox)

{.caption} A “Truss bridge” is supported by triangular bars
::: column(width=200)
    x-media(src="images/pylon.jpg" width=200 height=200 lightbox)

{.caption} Triangles in high-voltage electricity Pylons
::: column(width=200)
    x-media(src="images/bike.jpg" width=200 height=200 lightbox)

{.caption} Even bikes use triangles for stability.
:::

---
> id: applications-2
> goals: video

Triangles are also the simplest polygon, with the fewest sides. This makes them
particularly well suited to approximating complex curved surfaces. This is done
in physical building…

::: column(width=200)
    x-media(src="images/st-mary.jpg" credit="Kunstlerbob, Wikipedia" width=200 height=200 lightbox)

{.caption} “The Gherkin”, a skyscraper in London
::: column(width=200)
    x-media(src="images/hk-bank.jpg" credit="WiNG, Wikipedia" width=200 height=200 lightbox)

{.caption} Bank of China Tower in Hong Kong
::: column(width=200)
    x-media(src="images/museum.jpg" credit="Andrew Dunn, Wikipedia" width=200 height=200 lightbox)

{.caption} Courtyard of the British Museum in London
:::

::: column.grow
…but also in virtual worlds. In computer generated graphics (e.g. for movies or
video games), all surfaces are approximated using a “mesh” of tiny triangles.
Artists and software engineers need to know about geometry and trigonometry in
order to be able to move and transform these triangles realistically, and to
calculate their colour and texture.
::: column(width=220)
    x-media(src="images/dolphin.jpg" width=220 height=135)
:::

    figure: x-video(src="images/tiger.mp4" width=480 height=270 credit="© UCTV, The STEAM Channel")
    //- src: https://www.youtube.com/watch?v=Y9PYzdFsVio

---
> id: applications-3

Many results from this course will be useful when studying bigger polygons like
quadrilaterals or pentagons in the future.


    // ### Euler Line
    // 
    // Let’s put all of this together… construct the centroid, the circumcenter and the
    // orthocenter in this triangle.
    // 
    // Now move the vertices of the triangle and observe what happens to these three
    // points.
    // 
    // It looks like they always lie on a single line: called the __Euler line__.

    // ### Determine if a Triangle is Acute, Obtuse, or Right
    // We can extend the converse of the Pythagorean Theorem to determine if a triangle
    // has an obtuse angle or is acute. We know that if the sum of the squares of the
    // two smaller sides equals the square of the larger side, then the triangle is
    // right. We can also interpret the outcome if the sum of the squares of the
    // smaller sides does not equal the square of the third.
    // 
    // Theorem: (1) If the sum of the squares of the two shorter sides in a right
    // triangle is greater than the square of the longest side, then the triangle is
    // acute. (2) If the sum of the squares of the two shorter sides in a right
    // triangle is less than the square of the longest side, then the triangle is obtuse.
    // 
    // In other words: The sides of a triangle are a,b, and c and c>b and c>a.
    // If a2+b2>c2, then the triangle is acute.
    // If a2+b2=c2, then the triangle is right.
    // If a2+b2<c2, then the triangle is obtuse.


    // ### Comparing Angles and Sides in Triangles
    // 
    // Theorem: If one side of a triangle is longer than another side, then the angle
    // opposite the longer side will be larger than the angle opposite the shorter side.
    // 
    // The SAS Inequality Theorem (Hinge Theorem): If two sides of a triangle are
    // congruent to two sides of another triangle, but the included angle of one
    // triangle has greater measure than the included angle of the other triangle,
    // then the third side of the first triangle is longer than the third side of the
    // second triangle.
    // 
    // SSS Inequality Theorem (also called the Converse of the Hinge Theorem): If two
    // sides of a triangle are congruent to two sides of another triangle, but the
    // third side of the first triangle is longer than the third side of the second
    // triangle, then the included angle of the first triangle is greater in measure
    // than the included angle of the second triangle.


    // ## Inscribed Similar Triangles 

    // If two objects are similar, corresponding angles are congruent and their sides
    // are proportional in length. Let’s look at a right triangle, with an altitude
    // drawn from the right angle. There are three right triangles in this picture,
    // △ADB,△CDA, and △CAB. Both of the two smaller triangles are similar to the larger
    // triangle because they each share an angle with △ADB. That means all three
    // triangles are similar to each other.
    // 
    // Inscribed Triangle Theorem: If an altitude is drawn from the right angle of any
    // right triangle, then the two triangles formed are similar to the original
    // triangle and all three triangles are similar to each other.
    // 
    // You are probably familiar with the arithmetic mean, which divides the sum of n
    // numbers by n. This is commonly used to determine the average test score for a
    // group of students. The geometric mean is a different sort of average, which
    // takes the nth root of the product of n numbers. In this text, we will primarily
    // compare two numbers, so we would be taking the square root of the product of two
    // numbers. This mean is commonly used with rates of increase or decrease.
    // 
    // Geometric Mean: The geometric mean of two positive numbers a and b is the number
    // x, such that ax=xb or x2=ab and x=ab−−√.
    // 
    // Geometric Mean Theorem #1: In a right triangle, the altitude drawn from the
    // right angle to the hypotenuse divides the hypotenuse into two segments. The
    // length of the altitude is the geometric mean of these two segments. In other
    // words, BCAC=ACDC.
    // 
    // Geometric Mean Theorem #2: In a right triangle, the altitude drawn from the
    // right angle to the hypotenuse divides the hypotenuse into two segments. The
    // length of each leg of the right triangle is the geometric mean of the lengths
    // of the hypotenuse and the segment of the hypotenuse that is adjacent to the leg.
    // In other words, BCAB=ABDB and DCAD=ADDB.
    // 
    // Both of these theorems are proved using similar triangles.
