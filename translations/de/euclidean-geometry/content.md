# Euklidische Geometrie

## Einführung

> id: thales
> goals: p1 p2 p3 move
> section: introduction
> description: Die Geometrie ist einer der ältesten Teile der Mathematik - und einer der nützlichsten. Ihr logischer, systematischer Ansatz wurde auf vielen anderen Gebieten übernommen.
> color: "#0F82F2"
> level: Intermediate
> next: transformations

::: column.grow
Mit Mathematik beschäftigt man sich seit tausenden von Jahren - um die Jahreszeiten
vorherzusagen, Steuern zu berechnen oder die Größe der landwirtschaftlichen Nutzfläche
zu schätzen.

Mathematiker im antiken Griechenland, um 500 v. Chr., waren von mathematischen
Mustern begeistert und wollten sie erforschen und erklären. Zum ersten Mal begannen
sie, Mathematik nur „zum Spaß“ zu studieren, ohne eine bestimmte Anwendung im Sinn zu haben.
::: column(width=300)

    x-img(src="images/tablet.jpg" width=300 height=210)

{.caption} Eine babylonische Tontafel, datiert 1800 v. Chr., die geometrische
Berechnungen enthält.
:::

Einer dieser Mathematiker war [Thales von Milet](bio:thales), der eine
überraschende Entdeckung machte, als er mit geometrischen Figuren herumspielte:

::: column(width=420)

    x-geopad.sticky(width=420 height=320): svg

::: column.grow
Wähle zuerst zwei Punkte irgendwo in dem Feld auf der linken Seite aus.
_{span.reveal(when="p1 p2")} Nun wollen wir diese Punkte mit einem Halbkreis verbinden._

{.reveal(when="p1 p2")} Wähle jetzt einen dritten Punkt, der irgendwo auf dem
[Kreisbogen](target:circumf) des Halbkreises liegt.

{.reveal(when="p3")} Als nächstes zeichnen wir das [{.red}Dreieck](target:triangle), das aus den
beiden Eckpunkten des Halbkreises und dem auf dem
Kreisbogen gewählten Punkt gebildet wird.

{.reveal(when="p3" delay=1000)} Versuche, die Position der drei Punkte zu verschieben und
beobachte, was mit dem [{.yellow}Winkel](target:angle) oben im Dreieck passiert.
_{span.reveal(when="move")} Es scheint, als wäre er immer [[90]]° groß!_
_{span.reveal(when="blank-0")} Das bedeutet, dass das Dreieck
[[rechtwinklig|gleichseitig|spitzwinklig]] ist._
:::

---
> id: thales-1

Für Thales war dies ein ziemlich spektakuläres Ergebnis. Warum sollten _Halbkreise_ und
_rechtwinklige Dreiecke_, zwei völlig unterschiedliche Figuren, auf diese
grundlegende Weise miteinander verbunden sein? Er war von seiner Entdeckung so begeistert,
dass er der Legende nach einen ganzen Ochsen opferte, um den Göttern zu danken.

    figure
      x-img(src="images/temple.svg" width=400 height=170)

Doch die bloße _Beobachtung_ einer solchen Verbindung reichte Thales nicht aus,
er wollte verstehen, _warum_ das so ist, und überprüfen, ob das _immer_ gilt
und nicht nur in den wenigen Beispielen, die er ausprobiert hatte.

Ein Argument, das logisch erklärt, warum etwas
wahr sein muss, wird als [__Beweis__](gloss:proof) bezeichnet. In den folgenden Kursen
lernst du eine Reihe von geometrischen Techniken, die es uns letztendlich ermöglichen, den
_Satz des Thales_ zu beweisen.

---
> id: applications

Aber Geometrie ist nicht nur für den Nachweis von Sätzen nützlich - sie ist überall um
uns herum: in der Natur, in der Architektur, in der Technik und im Design. Wir brauchen Geometrie für
alles, von der Entfernungsmessung über den Bau von Wolkenkratzern bis hin zur Entsendung von
Satelliten ins All. Hier sind noch ein paar weitere Beispiele:

::: column(width=200)

    x-img(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} Die Geometrie erlaubte es den alten Ägyptern, gigantische,
perfekt regelmäßige Pyramiden zu bauen.
::: column(width=200)

    x-img(src="images/sextant.jpg" width=200 height=200)

{.caption} Seefahrer verwenden Sextanten, um ihren Standort auf See zu bestimmen, wobei
sie die von der Sonne oder den Sternen gebildeten Winkel verwenden.
::: column(width=200)

    x-img(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} Geometrie wird benötigt, um realistische Videospiel- oder Filmgrafiken zu erstellen.
::: column(width=200)

    x-img(src="images/plane.jpg" width=200 height=200)

{.caption} Geometrie kann dabei helfen, neue Flugzeugmodelle zu entwerfen und zu testen, um sie
sicherer und effizienter zu machen.
::: column(width=200)

    x-img(src="images/cctv.jpg" lightbox width=200 height=200)

{.caption} Geometrie war bei der Planung dieses Wolkenkratzers in Peking entscheidend - und
um sicherzustellen, dass er nicht umkippt.
::: column(width=200)

    x-img(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} Geometrie ermöglicht es uns, die Position von Sternen, Planeten und
Satelliten in der Erdumlaufbahn vorherzusagen.
:::

In diesem und den folgenden Kursen lernst du viele verschiedene Werkzeuge und
Techniken der Geometrie kennen, die von Mathematikern im Laufe
vieler Jahrhunderte entdeckt wurden. Wir werden auch sehen, wie diese Techniken eingesetzt werden können,
um wichtige Probleme in der realen Welt zu lösen.

---

## Euklids Axiome

> section: axioms
> id: points

Bevor wir irgendwelche Beweise formulieren können, müssen wir uns auf ein paar Fachausdrücke einigen,
die es einfacher machen, über geometrische Objekte zu sprechen. Diese sind vielleicht nicht wirklich spannend,
aber die meisten davon solltest du eh bereits kennen:

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move.pulsate(cx=100 cy=30 target="move" label="P")
      circle.move.pulsate(cx=150 cy=100 target="move" label="Q")
      circle.move.pulsate(cx=40 cy=75 target="move")
      circle(x="point(200,50)" target="no-move")
      circle(x="point(70,120)" target="no-move" label="R")

::: column.grow
Ein [__Punkt__](gloss:point) ist eine bestimmte Position im Raum. Punkte beschreiben eine
Position, haben aber selbst keine _Größe_ oder _Form_. Sie werden mit
Großbuchstaben bezeichnet.

{.r} In Mathigon zeigen [große, ausgefüllte Punkte](target:move) interaktive Punkte an, die
du bewegen kannst, während [kleinere, nicht ausgefüllte Punkte](target:no-move) fixe Punkte anzeigen,
die du nicht bewegen kannst.
_{button.next-step} Weiter_
:::

---
> id: lines

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.green(x="line(point(60,100),point(90,40))" label="a")
      path.red(x="line(point(50,120),point(150,150))" label="b")
      circle.move(name="P" cx=170 cy=55 label="P")
      circle.move(name="Q" cx=200 cy=130 label="Q")
      path.yellow(x="line(P,Q)")

::: column.grow
Eine [__Gerade__](gloss:line) ist eine Ansammlung von unendlich vielen Punkten, die sich
in beide Richtungen unbegrenzt erstreckt. Geraden sind immer gerade und nehmen, genau wie Punkte, keinen
Platz ein - sie haben keine _Breite_.

{.r} Geraden werden mit Kleinbuchstaben beschriftet. Wir können sie auch mit
zwei Punkten festlegen, die auf der Geraden liegen, z.B.
<span class="math"><mover><mi>PQ</mi><mo value="↔">↔</mo></mover></span> oder
<span class="math"><mover><mi>QP</mi><mo value="↔">↔</mo></mover></span>. Die
Reihenfolge der Punkte spielt keine Rolle.
_{button.next-step} Weiter_
:::

---
> id: segments

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=50 label="A")
      circle.move(name="b" cx=90 cy=120 label="B")
      path.red(x="segment(a,b)")
      circle.move(name="c" cx=120 cy=40 label="C")
      circle.move(name="d" cx=210 cy=110 label="D")
      path.blue(x="segment(c,d)")

::: column.grow
{.r} Eine [__Strecke__](gloss:line-segment) ist der Abschnitt einer Geraden zwischen zwei
Punkten, und geht in beiden Richtungen nicht unendlich weiter. Wir können sie genau wie Geraden beschriften, aber
ohne Pfeilspitzen auf dem Strich darüber: `bar(AB)` oder `bar(BA)`. Auch hier spielt
die Reihenfolge der Punkte keine Rolle.
_{button.next-step} Weiter_
:::

---
> id: rays

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="c" cx=40 cy=120)
      circle.move(name="d" cx=60 cy=40)
      path.green(x="ray(c,d)")
      circle.move(name="a" cx=90 cy=90 label="A")
      circle.move(name="b" cx=190 cy=130 label="B")
      path.yellow(x="ray(a,b)")

::: column.grow
Ein [__Strahl__](gloss:ray) ist mehr als eine _Strecke_ aber weniger als eine _Gerade_.
Man ihn auch _Halbgerade_, da er nur auf einer Seite unendlich weiter geht. Du kannst dir
das wie _Sonnenstrahlen_ vorstellen: Sie beginnen an einem Punkt (der Sonne) und gehen
dann für immer weiter.

{.r} Bei der Beschriftung von Strahlen zeigt der Pfeil die Richtung an, in die er sich bis zur
Unendlichkeit erstreckt, z.B. `vec(AB)`. Diesmal spielt die Reihenfolge der Punkte _eine_ Rolle.
_{button.next-step} Weiter_
:::

---
> id: circles

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=60)
      path(x="segment(a,a.add(point(1,1).unitVector.scale(40)))" target="radius")
      path.red(x="circle(a,40)")

      circle.move(name="b" cx=170 cy=90)
      path(x="segment(b,b.shift(60,0))" target="radius")
      path.blue(x="circle(b,60)")

::: column.grow
{.r} Ein [__Kreis__](gloss:circle) ist die Ansammlung von Punkten, die alle den
gleichen [Abstand](target:radius) zu einem Punkt in der Mitte haben. Dieser Abstand
wird als [__Radius__](gloss:circle-radius) bezeichnet.
_{button.next-step} Weiter_
:::

---
> id: congruence
> goals: pair-a-a pair-b-b pair-c-c pair-d-d pair-e1-e2 pair-e1-e3 pair-e2-e3 pair-f-f

### Kongruenz

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path.fill.green(name="x" x="polygon(point(30,30),point(80,20),point(100,80),point(70,110),point(30,90))" label="A" label-class="white" target="move")
      path.fill.green.light(x="x.rotate(1).shift(190,10)" target="move")
      path.fill.green#congruent-path(x="x.rotate(1).shift(190,10)" target="move" label="B" label-class="white")

::: column.grow
Diese beiden Figuren schauen eigentlich genau gleich aus. Sie haben die gleiche Größe
und Form, und wir könnten durch [drehen und verschieben](target:move) eine von ihnen exakt über
die anderen legen. In der Geometrie sagen wir, dass die beiden Figuren
[__kongruent__](gloss:congruent) oder deckungsgleich sind.

Das Symbol für Kongruenz ist `≅`. Wir würden also sagen, dass `A ≅ B`.
:::

Hier sind verschiedene geometrische Objekte: verbinde alle Formen, die
kongruent zueinander sind. Bedenke, dass möglicherweise _mehr als zwei_ Formen miteinander
bzw. einige auch mit _keiner_ kongruent sind:

    svg.congruence(width=760 height=320 viewBox="0 0 760 320")
      g.lines
      g.obj(data-q="a" cx="145.2" cy="166.1")
    	polygon(points="119.6,146.6 131.7,186.9 170.9,175.1 139.7,159.5 154.4,145.2")
      g.obj(data-q="a" cx="376.4" cy="73.5")
    	polygon(points="388.1,44.7 353.1,68.2 376,102.2 381.7,67.8 399.7,77.6")
      g.obj(data-q="b" cx="93" cy="258")
    	rect(x="80" y="245" transform="matrix(0.5953 0.8035 -0.8035 0.5953 244.9541 29.6955)" width=26 height=26)
      g.obj(data-q="b" cx="264" cy="200")
        rect(x="251" y="187" transform="matrix(0.1863 0.9825 -0.9825 0.1863 411.3196 -96.636)" width=26 height=26)
      g.obj(data-q="c" cx="77" cy="59.5")
    	rect(x="54" y="36.5" transform="matrix(0.9159 0.4013 -0.4013 0.9159 30.3505 -25.8995)" width=46 height=46)
      g.obj(data-q="c" cx="238" cy="78")
        rect(x="215" y="55" transform="matrix(0.828 -0.5607 0.5607 0.828 -2.8011 146.8683)" width=46 height=46)
      g.obj(data-q="d" cx="510" cy="55")
    	polyline(points="539.9,68.9 489.7,78.3 506.7,27.5")
        path(d="M523.5,72c-2.4-12.7-11.4-22.4-22.9-26.3")
      g.obj(data-q="d" cx="501" cy="258")
    	polyline(points="497.8,287.8 475.2,242.1 528.7,244.7")
        path(d="M490.4,272.9c11.6-5.7,18.5-17.1,19.1-29.1")
      g.obj(data-q="e1" cx="417" cy="166.8")
        ellipse(transform="matrix(0.9464 -0.3229 0.3229 0.9464 -31.5073 143.6043)" cx="417" cy="166.8" rx="30.7" ry="17.1")
      g.obj(data-q="e2" cx="585" cy="138.2")
        ellipse(transform="matrix(0.4618 -0.887 0.887 0.4618 192.197 593.2707)" cx="585" cy="138.2" rx="17.1" ry="30.7")
      g.obj(data-q="e3" cx="618" cy="250.2")
        ellipse(transform="matrix(0.9089 -0.4171 0.4171 0.9089 -48.0564 280.5469)" cx="618" cy="250.2" rx="17.1" ry="30.7")
      g.obj(data-q="f" cx="670.8" cy="72.5")
        line(x1="649.4" y1="65.5" x2="692.1" y2="79.5")
        path(d="M647.6,72c-3.6-1.2-5.5-5-4.3-8.5s5-5.5,8.5-4.3c3.6,1.2,5.5,5,4.3,8.5C655,71.3,651.1,73.2,647.6,72z")
        path(d="M689.7,85.8c3.6,1.2,7.4-0.8,8.5-4.3s-0.8-7.4-4.3-8.5c-3.6-1.2-7.4,0.8-8.5,4.3C684.2,80.8,686.2,84.7,689.7,85.8z")
      g.obj(data-q="f" cx="705.1" cy="190.6")
        line(x1="693.9" y1="210.1" x2="716.4" y2="171.1")
        path(d="M699.9,213.2c-1.9,3.2-6,4.3-9.2,2.5c-3.2-1.9-4.3-6-2.5-9.2c1.9-3.2,6-4.3,9.2-2.5C700.7,205.8,701.8,209.9,699.9,213.2z")
        path(d="M722.1,174.8c1.9-3.2,0.8-7.4-2.5-9.2c-3.2-1.9-7.4-0.8-9.2,2.5c-1.9,3.2-0.8,7.4,2.5,9.2C716.1,179.1,720.2,178,722.1,174.8z")
      g.obj(data-q="g" cx="357" cy="265")
    	polyline(points="372.2,298.7 336,271.4 354.3,230.3")
    	path(d="M362.1,291.2c4.3-5.6,6.9-12.6,6.9-20.2c0-13.4-8-25-19.5-30.1")

---
> id: congruence-1

Zwei Strecken sind kongruent, wenn sie [[die gleiche Länge haben|sich schneiden]]. Zwei
Winkel sind kongruent, wenn sie [[die gleiche Größe haben|sich an einem Punkt treffen]] (in Grad).

Beachte, dass _“kongruent”_ nicht _“gleich”_ bedeutet. Beispielsweise müssen kongruente
Geraden und Winkel nicht in die gleiche Richtung zeigen. Dennoch hat die _Kongruenz_
viele der Eigenschaften die auch die _Gleichheit_ hat:

* Kongruenz ist __symmetrisch__: wenn `X ≅ Y` dann gilt auch `Y ≅ X`.
* Kongruenz ist __reflexiv__: jede Form ist kongruent zu sich selbst. Zum Beispiel: `A ≅ A`.
* Kongruenz ist __übertragbar__: wenn `X ≅ Y` und `Y ≅ Z` dann gilt auch `X ≅ Z`.

---
> id: parallel

### Parallele und Normale

::: column(width=240)

    x-geopad(width=240 height=200): svg
      path.red(x="line(point(30,100),point(70,20))" name="l1" mark="arrow" label="a")
      path.red(x="l1.shift(40,10)" mark="arrow" label="b")
      path.red(x="l1.shift(100,30)" mark="arrow" label="c")
      path.yellow(x="line(point(30,120),point(160,140))" name="l2" mark="arrow2" label="d")
      path.yellow(x="l2.shift(-30,40)" mark="arrow2" label="e")

::: column.grow
Zwei Geraden, die sich nie schneiden, werden als [__Parallele__](gloss:parallel) bezeichnet.
Sie zeigen in die gleiche Richtung, und der Abstand zwischen ihnen
[[ist immer gleich|nimmt zu|nimmt ab]].

{.reveal(when="blank-0")} Ein gutes Beispiel für parallele Geraden im wirklichen Leben sind
_Eisenbahngleise_. Beachte jedoch, dass mehr als zwei Geraden parallel
zueinander sein können!

{.reveal(when="blank-0")} In Diagrammen bezeichnen wir parallele Geraden, indem wir einen oder
mehrere kleine Pfeile hinzufügen. In diesem Beispiel sind __{.m-red}`a ∥ b ∥ c`__ und
__{.m-yellow}`d ∥ e`__. Das Symbol `∥` bedeutet einfach _"ist parallel zu"_.
:::

---
> id: perpendicular

::: column(width=240)

    x-geopad(width=240 height=160): svg
      path(x="angle(point(60,50),point(50,100),point(100,110))")
      path.blue(x="line(point(50,100),point(100,110))" label="a")
      path.green(x="line(point(50,100),point(70,0))" label="b")

::: column.grow
Das Gegenteil von _parallel_ sind zwei Geraden, die sich in einem Winkel von 90° (rechter Winkel) treffen.
Solche Geraden werden als [__Normale__](gloss:perpendicular) bezeichnet.

{.r} In diesem Beispiel würden wir _{.b.m-blue}a_ `⊥` _{.b.m-green}b_ schreiben. Das
`⊥` Symbol bedeutet einfach _"ist normal auf"_.

:::

---
> id: euclid

### Satz des Euklid

::: column.grow
Griechische Mathematiker erkannten, dass man, um formale Beweise zu schreiben, eine Art
_Ausgangspunkt_ braucht: einfache, leicht zu verstehende und für alle als wahr geltende Aussagen.
Sie werden als [__Axiome__](gloss:axiom) (oder _Postulate_) bezeichnet.

Ein wichtiger Teil der Mathematik ist die Kombination verschiedener Axiome, um komplexere
Ergebnisse unter Verwendung der Regeln der Logik zu beweisen.

Der griechische Mathematiker [Euklid von Alexandria](bio:euclid), der oft als _Vater der Geometrie_
bezeichnet wird, veröffentlichte die fünf Axiome der Geometrie:
::: column(width=220)

    img(src="images/euclid.jpg" width=220 height=269)

{.caption} Euklid von Alexandria
:::

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="a" cx=30 cy=130 target="1_point")
      circle.move(name="b" cx=190 cy=30 target="1_point")
      path.red(x="segment(a,b)" target="1_line")

{.text-center }__Erstes Axiom__
Man kann [zwei beliebige Punkte](target:1_point) mit genau einer geraden
[Strecke](target:1_line) verbinden.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="c" cx=60 cy=100 target="2_segment")
      circle.move(name="d" cx=180 cy=60 target="2_segment")
      path.red(x="line(c,d)")
      path(x="segment(c,d)" target="2_segment")

{.text-center }__Zweites Axiom__
Man kann jede beliebige [Strecke](target:2_segment) unendlich weit<br>
zu einer Geraden verlängern.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="e" cx=120 cy=80 target="3_center" label="P")
      circle.move(name="f" cx=170 cy=130)
      path(x="segment(e,f)" label="r" target="3_radius")
      path.red(x="circle(e,distance(e,f))" target="3_circle")

{.text-center }__Drittes Axiom__
Mit einem gegebenen [Punkt _P_](target:3_center) und einem [Abstand _r_](target:3_radius) kann
man einen [Kreis](target:3_circle) mit dem Mittelpunkt _P_ und dem Radius _r_ zeichnen.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="x" cx=50 cy=100)
      circle(hidden name="xa" x="x.translate(point(110,80).subtract(x).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="xb" x="x.translate(point(110,80).subtract(x).rotate(-pi/4).unitVector.scale(50))")
      path.fill.red(x="angle(xb,x,xa)")
      path.dark(x="segment(x,xa)")
      path.dark(x="segment(x,xb)")

      circle.move(name="y" cx=190 cy=60)
      circle(hidden name="ya" x="y.translate(point(110,80).subtract(y).rotate(pi/4).unitVector.scale(50))")
      circle(hidden name="yb" x="y.translate(point(110,80).subtract(y).rotate(-pi/4).unitVector.scale(50))")
      path.fill.red(x="angle(yb,y,ya)")
      path.dark(x="segment(y,ya)")
      path.dark(x="segment(y,yb)")

{.text-center }__Viertes Axiom__
Zwei beliebige rechte Winkel sind kongruent.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="g" cx=170 cy=60 target="5_point" label="P")
      path(name="line5" x="line(point(40,80),point(120,140))" target="5_line" label="L")
      path.red(x="line5.parallel(g)" target="5_parallel")

{.text-center }__Fünftes Axiom__
Zu einer gegebenen [Geraden _g_](target:5_line) und einem [Punkt _P_](target:5_point) nicht auf _g_,
gibt es genau [eine Gerade](target:5_parallel) durch _P_, die
[parallel](gloss:parallel) zu _g_ ist.
:::

{.r} _{button.next-step} Weiter_

---
> id: jefferson

::: column.grow
Jedes dieser Axiome sieht ziemlich offensichtlich und selbstverständlich aus, aber zusammen
bilden sie die Grundlage der Geometrie und können verwendet werden, um fast alles
andere abzuleiten. Laut keinem Geringeren als [Isaac Newton](bio:newton) ist _"es das Großartige an
der Geometrie, dass mit so wenigen Prinzipien so viel erreicht werden kann"_.

Euklid veröffentlichte die fünf Axiome in seinem Buch _"Elemente"_. Es ist das erste Beispiel
eines systematischen Ansatzes in der Geschichte der Mathematik und wurde als
Mathematik-Lehrbuch über Tausende von Jahren verwendet.

::: column(width=220)

    x-img(src="images/elements.jpg" width=220 height=330 lightbox)

:::

Einer derjenigen, die Euklids Arbeit studierten, war der amerikanische Präsident
[Thomas Jefferson](bio:jefferson). Als er 1776 die Unabhängigkeitserklärung schrieb, wollte
er einen ähnlichen Ansatz verfolgen. Er beginnt mit einigen wenigen, einfachen
"Axiomen" und "beweist" dann komplexere Ergebnisse:

    .parchment “Wir halten diese Wahrheiten für ausgemacht, daß alle Menschen gleich erschaffen worden, daß sie von ihrem Schöpfer mit gewissen unveräußerlichen Rechten begabt worden, worunter sind Leben, Freyheit und das Bestreben nach Glückseligkeit.”

{.text-center.follows} `=>`

    .parchment “Wir erklären daher … , daß diese Vereinigten Colonien Freye und Unabhängige Staaten sind, und von Rechtswegen seyn sollen.”

Dies ist nur ein Beispiel dafür, dass Euklids Ideen in der Mathematik
auch auf ganz anderen Gebieten als Inspiration dienten.

---

## Konstruktion mit Zirkel und Lineal

> section: construction
> id: measuring

Du hast vielleicht bemerkt, dass die fünf Axiome von Euklid nichts über die
_Messung_ von Abständen oder Winkeln sagen, was schon immer ein wesentlicher Bestandteil der
Geometrie, z.B. zur Berechnung von Flächen und Volumen, gewesen ist.

::: column.grow
Zu Zeiten von Thales oder Euklid gab es jedoch kein allgemein angewandtes System von
Einheiten, wie wir es heute haben. Abstände wurden oft mittels Körperteilen gemessen, z.B.
Fingerbreiten oder Armlängen. Diese sind nicht sehr genau und sie unterscheiden sich
von Mensch zu Mensch.

Um größere Entfernungen zu messen, verwendeten Architekten oder Gutachter _geknotete Schnüre_: lange
Schnüre, die in gleichen Abständen viele Knoten enthielten. Aber diese waren
auch nicht ganz genau, und verschiedene Schnüre hatten die Knoten in
leicht unterschiedlichen Abständen platziert.

    figure: x-img(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-img(src="images/units.png" width=200 height=336)

:::

Griechische Mathematiker wollten sich nicht wirklich mit diesen Ungenauigkeiten befassen. Sie interessierten sich
viel mehr für die zugrunde liegenden Gesetze der Geometrie als für ihre praktischen
Anwendungen.

Deshalb haben sie eine viel idealisiertere Version unseres Universums entwickelt: eine,
in der Punkte keine Größe und Geraden keine Breite haben können. Natürlich ist es
[[unmöglich|sehr schwer]], diese auf Papier zu zeichnen. Sichtbare Punkte nehmen immer
etwas Platz ein, und Geraden haben immer eine gewisse Breite. Aus diesem Grund sind unsere
Zeichnungen immer nur "Näherungen".

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

Die Axiome von Euklid sagen uns im Grunde, was in seiner Vorstellung von Geometrie _möglich ist_.
Es stellt sich heraus, dass wir nur zwei sehr einfache Werkzeuge benötigen, um dies
auf Papier skizzieren zu können:

::: column(width=320)

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" hidden)
      x-play-btn

{.text-center} Eine __gerade Leiste__ die nichts anderes als ein Lineal ohne Zentimeterskala ist. Du
kannst damit zwei Punkte verbinden (wie in Axiom 1) oder eine Strecke
erweitern (wie in Axiom 2).

::: column.reveal(width=300 when="play-l1")

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" hidden)
      x-play-btn

{.text-center} Mit einem __Zirkel__ kannst du einen Kreis einer bestimmten Größe um
einen Punkt zeichnen (wie in Axiom 3).
:::

---
> id: construction

Bei den Axiomen 4 und 5 geht es darum, die Eigenschaften von Figuren zu vergleichen,
anstatt etwas zu zeichnen. Daher werden dafür keine speziellen Werkzeuge benötigt.

::: column.grow
Du kannst dir das Ganze so vorstellen, dass griechische Mathematiker über die Geometrie am
Strand nachdachten und verschiedene Figuren in den Sand zeichneten: mit langen Stecken als
Lineal und Schnurstücken als Zirkel.

Obwohl diese Werkzeuge sehr primitiv aussehen, kann man mit ihnen eine große Anzahl von
Figuren zeichnen. Das wurde fast wie ein Quizspiel für Mathematiker:
Wie kann man verschiedene geometrische Figuren nur mit einer
geraden Leiste und einem Zirkel "konstruieren"?

::: column(width=340)

    x-img(src="images/archimedes.jpg" width=340 height=265)

{.caption} Der griechische Mathematiker [Archimedes](bio:archimedes) beschäftigte sich mit
Geometrie, als er von römischen Eroberern getötet wurde. Seine letzten Worte waren: "Stört meine
Kreise nicht".
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersections projections="no"): svg

::: column.grow
{.task} Zeichne ein [gleichseitiges Dreieck](gloss:equilateral-triangle) nur mit einer
geraden Leiste und einem Zirkel.

Zeichne zunächst eine Strecke an einer beliebigen Stelle im Feld rechts. Wähle das
[{.no-margins} Linienwerkzeug](->#equilateral_.tool:nth-child(3))
aus und ziehe damit einfach vom Anfang bis zum Ende. Diese Strecke wird eine der Seiten
des Dreiecks sein.

{.reveal(when="segment0")} Zeichne anschließend zwei Kreise, die jeweils einen der Endpunkte
der Strecke als Mittelpunkt haben und durch den anderen Endpunkt gehen. Wähle das
[{.no-margins} Kreiswerkzeug](->#equilateral_.tool:nth-child(5))
aus und ziehe damit einfach jeweils von einem Endpunkt zum anderen.

{.reveal(when="circle1 circle2")} Wir haben bereits zwei Eckpunkte des Dreiecks,
und der dritte ist der Schnittpunkt der beiden Kreise. Verwende das Linienwerkzeug
erneut, um die beiden fehlenden Seiten zu zeichnen und das Dreieck zu vervollständigen.

{.reveal(when="segment1 segment2")} Da [diese beiden Seiten](target:a) und
[diese beiden Seiten](target:b) jeweils die [[Radien|Durchmesser|Umfänge]] des
gleichen Kreises sind, _{span.reveal(when="blank-0")} müssen sie die gleiche Länge haben.
Mit anderen Worten, alle drei Seiten des Dreiecks sind kongruent - und damit
ist es tatsächlich ein gleichseitiges Dreieck._
:::

---
> id: perp-bisector

### Mittelpunkte und Mittelsenkrechten (Streckensymmetrale)

{.todo} Demnächst - Konstruktion von Mittelpunkten und Mittelsenkrechten

---
> id: angle-bisector

### Winkelhalbierende (Winkelsymmetrale)

{.todo} Demnächst - Konstruktion von Winkelhalbierenden

---
> id: impossible

### Unmögliche Konstruktionen

Im folgenden Kapitel werden wir noch mehr Figuren sehen, die auf
dieselbe Weise konstruiert werden können. Allerdings gibt es eine Grenze für die euklidische Geometrie: Einige Konstruktionen
sind nur mit einer geraden Leiste und einem Zirkel schlicht unmöglich.

::: column.grow
Der Legende nach war die Stadt Delos im antiken Griechenland einst mit einer
schrecklichen Pest konfrontiert. Das Orakel in Delphi sagte, dass dies eine Strafe der
Götter sei, und dass die Pest verschwinden würde, wenn sie einen neuen Altar für ihren
Tempel bauen würden, mit _genau dem doppelten_ Volumen des vorhandenen.

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-img(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)

{.caption} Eine Rekonstruktion eines Tempels in Delphi
:::

Beachte, dass die _Verdoppelung des Volumens_ nicht dasselbe ist wie die _Verdoppelung der Kantenlänge des
Würfels_. Wenn das [[3-dimensionale|2-dimensionale|1-dimensionale]] Volumen
um den Faktor 2 zunimmt, wird die [[1-dimensionale|3-dimensionale|2-dimensionale]]
Würfelkante nämlich um den Faktor `root(2,3)` vergrößert.

---
> id: impossible-1

Das klingt immer noch ziemlich einfach, aber eine Verdoppelung
eines Würfels ist in der [euklidischen Geometrie](gloss:euclidean-geometry) unter
Verwendung von nur einer geraden Leiste und einem Zirkel unmöglich! Für die Bürger von Delos bedeutete dies leider, dass alles hoffnungslos
war. Es gibt zwei weitere Konstruktionen, die berümt dafür sind unmöglich zu sein.
Mathematiker widmeten der Suche nach einer Lösung viel Zeit - aber
ohne Erfolg:

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} Dreiteilung des Winkels__
Wir wissen bereits, wie man Winkel halbiert. Es ist jedoch nicht möglich, einen Winkel auf ähnliche Weise
in _drei_ gleiche Teile zu teilen.

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} Würfelverdoppelung__
Bei gegebener Würfelkantenlänge ist es unmöglich, die Kantenlänge eines anderen Würfels
zu konstruieren, der genau das doppelte Volumen hat.

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} Quadratur des Kreises__
Zu einem Kreis ist es unmöglich, ein Quadrat zu konstruieren, das genau die gleiche
Fläche hat.
:::

Beachte, dass diese Probleme alle ganz einfach durch Rechnen oder mit
Linealen und Winkelmessern mit einer Skalierung gelöst werden können. Aber sie sind unmöglich, wenn man nur eine gerade Leiste und einen Zirkel
benutzen darf.

---

## Noch mehr Konstruktionen

> section: more-construction
> sectionStatus: dev

TODO

---

## Winkel und Beweise

> section: proofs
> sectionStatus: dev

TODO

---

## Origami und Papierfalten

> id: origami
> section: origami
> sectionBackground: dark

Die Verwendung von einem Lineal und einem Zirkel ist nicht die einzige Möglichkeit,
geometrische Figuren zu konstruieren. Eine andere Technik verwendet überhaupt keine Werkzeuge: __Origami__.

Das Wort _Origami_ (折り紙) ergibt sich aus dem japanischen _oru_ (falten) und _kami_
(Papier). Ziel ist es, Objekte aus einem oder mehreren Blättern Papier herzustellen,
ohne zusätzliche Werkzeuge wie Kleber oder Schere zu verwenden. Man kann unglaublich
schöne und beeindruckende Designs entwerfen - alle diese Figuren wurden aus nichts anderem
als rechteckigen Papierblättern gebaut:

::: column(width=186)
    x-img(src="images/origami/origami-1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)
::: column(width=186)
    x-img(src="images/origami/origami-6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)
:::

---
> id: crane
> goals: video

Das Erstellen solcher Formen kann viel Zeit in Anspruch nehmen,
und es ist wichtig, dabei extrem genau zu arbeiten. Aber mit ein wenig Übung schaffst du das selbst auch!

::: column.sticky-video(width=360)

    x-video(src="https://static.mathigon.org/videos/crane.mp4" poster="images/crane.jpg" width=360 height=360 controls)

::: column.grow
{.step.active(data-t=0)} Du brauchst nur ein quadratisches Blatt Papier. Falte
das Blatt zuerst entlang seiner beiden Diagonalen.

{.step(data-t=16)} Als nächstes falte es jeweils horizontal und vertikal in der Mitte - allerdings
in die entgegengesetzte Richtung.

{.step(data-t=38)} Nimm nun zwei gegenüberliegende Ecken des Blatts und falte sie wie gezeigt
zusammen. Es entsteht ein kleineres Quadrat, das nach unten offen ist.

{.step(data-t=51)} Falte die linke und rechte Ecke des Quadrats in Richtung
Mittellinie. Dann drehe es um und wiederhole das.

{.step(data-t=83)} Falte nun das obere Dreieck entlang der horizontalen Linie nach unten
und öffne dann die Falten aus den letzten beiden Schritten.

{.step(data-t=99)} Jetzt wird's schwierig: Nimm die untere Ecke des Papiers
und falte sie entlang der horizontalen Linie, die du gerade erstellt hast, ganz nach oben. Einige
der Faltlinien, die du vorher gemacht hast, werden umgekehrt. Dann dreh das Blatt um und wiederhole die Schritte.

{.step(data-t=135)} Achte darauf, dass die beiden "Beine" nach unten zeigen. Dann nimm die
linke und rechte Ecke und falte sie zur Mittellinie. Dreh das Blatt um und
wiederhole die Schritte.

{.step(data-t=172)} Du bist fast fertig! Öffne die rechte Seite leicht und falte
den Kopf nach oben. Du musst sie dabei aufklappen. Wiederhole
das dann mit dem Schwanz links.

{.step(data-t=203)} Falte den Teil wie gezeigt, um einen Schnabel zu erzeugen. Du kannst entscheiden,
wie lange er sein soll, indem du den Abstand der Faltung wählst.

{.step(data-t=215)} Zum Schluss die beiden Flügel herunterklappen und auseinanderziehen.
:::

---
> id: crane-1

Dieser _Kranich_ ist eines der ältesten und bekanntesten Origami-Modelle. Wir haben noch viele
weitere [Anleitungen für Origami-Modelle](/origami), die du ausprobieren kannst!

    figure: x-img(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

---
> id: origami-axioms

### Origami Axiome

Genau wie beim Zeichnen mit Lineal und Zirkel gibt es einige Axiome mit
unterschiedlichen _Falten_, die mittels Origami möglich sind. Sie wurden erstmals
1992 vom italienisch-japanischen Mathematiker Humiaki Huzita zusammengestellt.

::: column(width=220 parent="padded-thin origami-axioms")

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center} Man kann eine Gerade falten, die zwei beliebige Punkte verbindet.
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} Man kann jeden Punkt _P_ auf jeden anderen Punkt _Q_ falten. Dadurch entsteht
[[die Mittelsenkrechte|die Winkelhalbierende|der Mittelpunkt]] der Strecke `(PQ)`.
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} Wir können zwei beliebige Linien aufeinander falten. Wenn sich die Geraden
schneiden, entsteht [[die Winkelhalbierende|die Mittelsenkrechte|der Mittelpunkt]]
des Winkels zwischen den beiden Geraden.
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} Mit einem Punkt _P_ und einer Geraden _L_können wir eine Falte
normal zu _L_ machen, die durch _P_ geht.
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} Mit zwei Punkten _P_ und _Q_ und einer Geraden _L_ können wir eine Falte
machen, die durch _P_ geht wobei _Q_ auf _L_ platziert wird.
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} Mit zwei beliebigen Punkten _P_ und _Q_ und zwei beliebigen Geraden _K_ und _L_können
wir eine Falte machen, die den Punkt _P_ auf die Gerade _K_ und gleichzeitig den Punkt _Q_ auf die Gerade _L_
setzt.
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} Mit einem Punkt _P_ und zwei Geraden _K_ und _L_ können wir eine Gerade
senkrecht zu _K_ falten, die _P_ auf _L_ setzt.
:::

---
> id: origami-axioms-1

Es stellt sich heraus, dass diese Axiome noch mächtiger sind als die euklidischen.
Die Dreiteilung eines Winkels und die Würfelverdoppelung sind mit nur einer Papierfaltung möglich!
Natürlich ist es unmöglich, _geschwungene_ Linien zu falten, und man bekommt die Quadratur des Kreises auch mit Origami
nicht hin.

    figure: x-img(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

### Anwendungen von Origami

Origami ist eine alte Kunst, und für die längste Zeit war es vor allem eine
Freizeitbeschäftigung, ohne reale Anwendungen. Es stellt sich jedoch heraus, dass die für Origami entwickelten Techniken
in der Technologie und Technik unglaublich nützlich sein können:

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow

#### Origami im Weltraum

Satelliten benötigen große Solarmodule, um Strom zu erzeugen. Leider haben die Raketen,
die Satelliten in den Weltraum transportieren, nur sehr begrenzten Raum für Fracht, und
jedes zusätzliche Gewicht kostet viel Treibstoff.

Origami-Techniken ermöglichen es, dass sich Solarmodule "entfalten", wenn sie den Weltraum erreichen. Einige
besonders clevere Faltungen sind unglaublich kompakt und benötigen nur wenige Motoren
und andere mechanische Komponenten.

:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow

#### Origami in der Medizin

In der Medizin werden ähnliche Ideen von Origami in einem viel kleineren Maßstab übernommen. Im Jahr
2003 entwickelten die Forscher _Origami Stents_: winzige Röhrchen, die in die Blutgefäße eingeführt
werden können. Sie werden zunächst hochgeklappt, können sich aber im
Blut des Patienten ausdehnen, und so verstopfte Arterien oder Venen vergrößern.

:::

---
> id: origami-applications-1

::: column(width=300)

    x-img(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")

::: column.grow

#### Zusammenklappbare Brücken

Das britische und amerikanische Militär verwendete Origami, um zusammenklappbare, mobile
Brücken zu entwickeln. Diese waren wichtig für die schnelle Überquerung von Flüssen oder Panzergräben
und konnten viel schneller eingesetzt werden als frühere Konstruktionen.

Sie können auch für die Katastrophenhilfe eingesetzt werden, um Rettungsfahrzeugen nach Erdbeben oder Tsunamis schnell
Zugang zu verschaffen. Dieses Bild ist von einem Prototyp, der an der
Hiroshima University in Japan entworfen wurde.

:::

---
> id: origami-applications-4
> goals: video

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/marine.mp4" poster="images/marine.jpg" width=300 height=225 credit="© Harvard University")

::: column.grow

#### Origami im Meer

Die Tiefen der Ozeane sind einige der am wenigsten erforschten Gebiete der Erde. Die dort lebenden Tiere
sind oft schwammig und empfindlich, was ihre Untersuchung sehr schwierig
macht.

Hier siehst du eine "Falle" in Form eines [Dodekaeders](gloss:dodecahedron),
die sich um Meeresorganismen falten kann, um sie untersuchen zu können. Sie wird
ferngesteuert und benötigt nur einen einzigen Motor, um die komplexe Klappbewegung
ihrer fünf Arme zu steuern.

:::

---
> id: origami-applications-5

Und es gibt noch viel mehr Anwendungen von Origami im Alltag: Häuser,
die sich bei einem Erdbeben zusammendrücken anstatt zu zerbröckeln, aufgehende Airbags
im Auto, sich selbst zusammensetzende Roboter, effizientere Verpackungen und
Leichtflugzeuge.

---
> id: origami-wings
> goals: video

### Origami in der Natur

Es stellt sich heraus, dass wir Menschen nicht die einzigen sind, die dieses machtvolle
Origami nutzen: Die Natur tut dies seit Millionen von Jahren.

Hier siehst du den Flügel eines __Ohrwurms__, der nach einem
ausgeklügelten Muster hochgeklappt werden kann. Beim Öffnen dehnt sich die Größe des Flügels um den Faktor 10 aus -
die höchste "Faltungsrate" im Tierreich:

::: column(width=300)

    x-img(src="images/wing.jpg" width=300 height=170 credit="© ETH Zürich")

::: column(width=300)

    x-video(src="https://static.mathigon.org/videos/wing-animation.mp4" poster="images/wing-animation.jpg" width=300 height=170 credit="© ETH Zürich")

:::

---
> id: origami-wings-1

Im aufgeklappten Zustand rasten die großen Flügel in eine stabile Position ein, die es den
Insekten ermöglicht, zu fliegen. Aber es braucht nur die leichteste Berührung, damit sich die Flügel zurückziehen.
Zusammengeklappt sind sie kompakt genug, um es Ohrwürmern zu ermöglichen, in Gängen unter der Erde zu leben.
Viele andere Insekten, Fledermäuse, Blätter und Blumen verwenden ähnliche Faltmuster, um
große Flächen auf engstem Raum unterzubringen.

Wissenschaftler untersuchen diese Pflanzen und Tiere und hoffen, ihre Fähigkeiten
in Technik und Technologie nachzuahmen. Mögliche Anwendungen könnten beispielsweise zusammenklappbare
Elektronik in Smartphones, sich entfaltende Solarmodule für Satelliten oder sogar
sich selbst zusammenlegende Campingzelte sein.

---
> id: origami-dna
> goals: video

::: column(width=320)

    x-video(src="https://static.mathigon.org/videos/dna.mp4" poster="images/dna.jpg" width=320 height=240 credit="© PyMOL")

::: column.grow

Origami kommt sogar im eigenen Körper vor: Jede menschliche Zelle enthält etwa 2 Meter
[DNA](gloss:dna), das [Molekül](gloss:molecule), das alle deine
genetischen Informationen trägt. Wenn du die DNA aller Zellen in deinem Körper kombinieren könntest, wäre
ihre Länge mehr als das 140-fache der Entfernung von der Erde zur Sonne!

Um die gesamte DNA in deinen Körper einzupassen, ohne dass sie verdreht oder zerrissen wird, ist jeder
Strang eingerollt, gefaltet und wird mittels spezieller Moleküle fixiert.

:::

---
> id: origami-dna-1

Ein ähnlicher Prozess wird auch von anderen komplexen Molekülen genutzt, die in lebenden Organismen
vorkommen. So ist beispielsweise die __[Protein](gloss:protein)faltung__ eines der komplexesten
Probleme in der Biologie. Es besser zu verstehen, kann Wissenschaftlern helfen, in Zukunft neue
Medikamente zu entwickeln.
