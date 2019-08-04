# Euklidische Geometrie

## Einführung

> id: thales
> goals: p1 p2 p3 move
> section: introduction

::: column.grow
Mit Mathematik beschäftigt man sich seit Jahrtausenden - um die Jahreszeiten vorherzusagen, Steuern zu
berechnen oder die Größe der landwirtschaftlichen Nutzfläche zu schätzen.

Mathematiker im antiken Griechenland, um 500 v. Chr., waren von mathematischen
Mustern begeistert und wollten sie erforschen und erklären. Zum ersten Mal begannen
sie, Mathematik nur “zum Spaß” zu studieren, ohne eine bestimmte Anwendung im Sinn zu haben. 
::: column(width=300)

    x-media(src="images/tablet.jpg" width=300 height=210)

{.caption} Eine babylonische Tontafel, datiert 1800 v. Chr., die geometrische
Berechnungen enthält.
:::

Einer dieser Mathematiker war [Thales von Milet](bio:thales), der eine
überraschende Entdeckung machte, als er mit geometrischen Figuren herumspielte:

::: column(width=420)

    x-geopad.sticky(width=420 height=320): svg

::: column.grow
Wähle zuerst zwei Punkte irgendwo in dem Feld auf der linken Seite aus.
_{span.reveal(when="p1 p2")} Wir wollen diese Punkte mit einem Halbkreis verbinden._

{.reveal(when="p1 p2")} Wähle jetzt einen dritten Punkt, der irgendwo auf dem
[Kreisbogen](target:circumf) des Halbkreises liegt.

{.reveal(when="p3")} Als nächstes zeichnen wir das [Dreieck], das aus den
beiden Eckpunkten des Halbkreises(target:triangle) und dem auf dem
Kreisbogen gewählten Punkt gebildet wird.

{.reveal(when="p3" delay=1000)} Schau was mit dem [Winkel](target:angle) oben im Dreieck
passiert wenn du die Position der drei Punkte verschiebst.
_{span.reveal(when="move")} Wie es aussieht, hat er immer [[90]]°!_
_{span.reveal(when="blank-0")} Das bedeutet, dass das Dreieck
[[rechtwinklig|gleichseitig|spitzwinklig]] ist._
:::

---
> id: thales-1

Für Thales war dies ein ziemlich spektakuläres Ergebnis. Warum sollten _Halbkreise_ und
_rechtwinklige Dreiecke_, zwei völlig unterschiedliche Figuren, auf diese
grundlegende Weise miteinander verbunden sein? Er war von seiner Entdeckung so begeistert, dass er der Legende nach einen ganzen Ochsen
opferte, um den Göttern zu danken.

    figure
      x-media(src="images/temple.svg" width=400 height=170)

Doch die bloße _Beobachtung_ einer solchen Verbindung reichte Thales nicht aus,
er wollte verstehen, _warum_ das so ist, und überprüfen, ob das _immer_ gilt
- nicht nur in den wenigen Beispielen, die er ausprobiert hat.

Ein Argument, das logisch erklärt, warum etwas
wahr sein muss, wird als [__Beweis__](gloss:proof) bezeichnet. In den folgenden Kursen
lernst du eine Reihe von geometrischen Techniken, die es uns letztendlich ermöglichen, den
_Satz des Thales_ zu beweisen.

---
> id: applications

Aber Geometrie ist nicht nur für den Nachweis von Sätzen nützlich - sie ist überall um
uns herum, in der Natur, in der Architektur, in der Technik und im Design. Wir brauchen Geometrie für
alles, von der Entfernungsmessung über den Bau von Wolkenkratzern bis hin zur Entsendung von
Satelliten ins All. Hier sind noch ein paar weitere Beispiele:

::: column(width=200)

    x-media(src="images/pyramids.jpg" credit="© Ricardo Liberato" width=200 height=200)

{.caption} Die Geometrie erlaubte es den alten Ägyptern, gigantische,
perfekt regelmäßige Pyramiden zu bauen.
::: column(width=200)

    x-media(src="images/sextant.jpg" width=200 height=200)

{.caption} Seefahrer verwenden Sextanten, um ihren Standort auf See zu bestimmen, wobei
sie die von der Sonne oder den Sternen gebildeten Winkel verwenden.
::: column(width=200)

    x-media(src="images/video-game.jpg" credit="© Eric Lascoña" width=200 height=200)

{.caption} Geometrie wird benötigt, um realistische Videospiel- oder Filmgrafiken zu erstellen.
::: column(width=200)

    x-media(src="images/plane.jpg" width=200 height=200)

{.caption} Geometrie kann dabei helfen, neue Flugzeugmodelle zu entwerfen und zu testen, um sie
sicherer und effizienter zu machen.
::: column(width=200)

    x-media(src="images/cctv.jpg" lightbox width=200 height=200)

{.caption} Geometrie war bei der Planung dieses Wolkenkratzers in Peking entscheidend - und
um sicherzustellen, dass er nicht umkippt.
::: column(width=200)

    x-media(src="images/satellite.jpg" lightbox credit="NASA" width=200 height=200)

{.caption} Geometrie ermöglicht es uns, die Position von Sternen, Planeten und
Satelliten in der Erdumlaufbahn vorherzusagen.
:::

In diesem und den folgenden Kursen lernst du viele verschiedene Werkzeuge und
Techniken der Geometrie kennen, die von Mathematikern im Laufe
vieler Jahrhunderte entdeckt wurden. Wir werden auch sehen, wie diese Techniken eingesetzt werden können,
um wichtige Probleme in der realen Welt zu lösen.

---
> id: points
> section: definitions

## Geometrische Definitionen

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
du bewegen kannst, während [kleinere, nicht ausgefüllte Punkte](target:no-move) fixe Punkte anzeigen
, die du nicht bewegen kannst
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
{.r}Eine [__Strecke__](gloss:line-segment)ist der Abschnitt einer Geraden zwischen zwei
Punkten, ohne sich bis ins Unendliche zu erstrecken. Wir können sie genau wie Geraden beschriften, aber
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
Ein [__Strahl__](gloss:ray) ist etwas zwischen einer _Geraden_ und einer _Strecke_:
er erstreckt sich nur auf einer Seite bis zur Unendlichkeit. Du kannst dir das wie _Sonnenstrahlen_ vorstellen:
Sie beginnen an einem Punkt (der Sonne) und gehen dann für immer weiter.

{.r} Bei der Beschriftung von Strahlen zeigt der Pfeil die Richtung an, in die er sich bis zur
Unendlichkeit erstreckt, z.B. "vec(AB)`. Diesmal spielt die Reihenfolge der Punkte _eine_ Rolle.
_{button.next-step} Weiter_
:::

---
> id: circles

::: column(width=240)

    x-geopad(width=240 height=160): svg
      circle.move(name="a" cx=50 cy=60)
      path(x="segment(a,a.add(point(1,1).normal.scale(40)))" target="radius")
      path.red(x="circle(a,40)")

      circle.move(name="b" cx=170 cy=90)
      path(x="segment(b,b.shift(60,0))" target="radius")
      path.blue(x="circle(b,60)")

::: column.grow
{.r}Ein [__Kreis__](gloss:circle) ist die Ansammlung von Punkten, die alle den
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
      path.fill.green(name="x" x="polygon(point(30,30),point(80,20),point(100,80),point(70,110),point(30,90))" label="A" label-colour="white" target="move")
      path.fill.green.light(x="x.rotate(1).shift(190,10)" target="move")
      path.fill.green#congruent-path(x="x.rotate(1).shift(190,10)" target="move" label="B" label-colour="white")

::: column.grow
Die beiden Formen auf der rechten Seite stimmen im Wesentlichen überein. Sie haben die gleiche Größe
und Form, und wir könnten durch [drehen und verschieben](target:move) einen von ihnen exakt über
den anderen legen. In der Geometrie sagen wir, dass die beiden Formen 
[__kongruent]__(gloss:congruent) oder deckungsgleich sind.

Das Symbol für Kongruenz ist `≅`. Wir würden also sagen, dass `A ≅ B`.
:::

Hier sind ein paar verschiedene geometrische Objekte. Verbinde alle
kongruenten Formen und denke daran, dass mehr als zwei Formen miteinander
kongruent sein können:

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

Beachte, dass _“Kongruenz”_ nicht _“gleich”_ bedeutet. Beispielsweise müssen kongruente
Geraden und Winkel nicht in die gleiche Richtung zeigen. Dennoch hat die _Kongruenz_
viele der Eigenschaften die auch die _Gleichheit_ hat:

* Kongruenz ist __symmetrisch__: wenn `X ≅ Y` dann auch `Y ≅ X`.
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
Zwei Geraden, die sich nie schneiden, werden als [__Parallele__](gloss:parallel) bezeichnet,
sie zeigen in die gleiche Richtung, und der Abstand zwischen ihnen ist
[[immer gleich|zunehmend|abnehmend]].

{.reveal(when="blank-0")} Ein gutes Beispiel für parallele Linien im wirklichen Leben sind
_Eisenbahngleise_. Beachte jedoch, dass mehr als zwei Geraden parallel
zueinander sein können!

{.reveal(when="blank-0")} In Diagrammen bezeichnen wir parallele Linien, indem wir einen oder
mehrere kleine Pfeile hinzufügen. In diesem Beispiel schreiben wir __{.m-red}`a ∥ b ∥ c`__ und
__{.m-yellow}`d ∥ e`__. Das Symbol `∥` bedeutet einfach _“parallel zu”_.
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

{.r} In diesem Beispiel würden wir schreiben: _{.b.m-blue}a_ `_|_` _{.b.m-green}b_. Das Symbol 
`_|_` bedeutet einfach _“ist normal auf”_.
_{button.next-step} Weiter_

:::

---
> id: euclid
> section: euclids-axioms

## Euklids Axiome

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
      path.red(x="segment(a,b)" target="1_line")
      circle.move(name="a" cx=30 cy=130 target="1_point")
      circle.move(name="b" cx=190 cy=30 target="1_point")

{.text-center }__Erstes Axiom__  
Man kann beliebige [zwei Punkte](target:1_point) mit genau einer geraden
[Strecke](target:1_line) verbinden.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path.red(x="line(c,d)")
      path(x="segment(c,d)" target="2_segment")
      circle.move(name="c" cx=60 cy=100 target="2_segment")
      circle.move(name="d" cx=180 cy=60 target="2_segment")

{.text-center }__Zweites Axiom__  
Man kann jede beliebige [Strecke](target:2_segment) unendlich weit <br>
 zu einer Geraden verlängern.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      path(x="segment(e,f)" label="r" target="3_radius")
      path.red(x="circle(e,distance(e,f))" target="3_circle")
      circle.move(name="e" cx=120 cy=80 target="3_center" label="P")
      circle.move(name="f" cx=170 cy=130)

{.text-center }__Drittes Axiom__  
Bei einem gegebenen [Punkt _P_](target:3_center) und einem [Abstand _r_](target:3_radius)
 kann man einen [Kreis](target:3_circle) mit dem Mittelpunkt _P_ und dem Radius _r_ zeichnen.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="x" cx=50 cy=100)
      circle(hidden name="xa" x="x.translate(point(110,80).subtract(x).rotate(pi/4).normal.scale(50))")
      circle(hidden name="xb" x="x.translate(point(110,80).subtract(x).rotate(-pi/4).normal.scale(50))")
      path.fill.red(x="angle(xb,x,xa)")
      path.dark(x="segment(x,xa)")
      path.dark(x="segment(x,xb)")

      circle.move(name="y" cx=190 cy=60)
      circle(hidden name="ya" x="y.translate(point(110,80).subtract(y).rotate(pi/4).normal.scale(50))")
      circle(hidden name="yb" x="y.translate(point(110,80).subtract(y).rotate(-pi/4).normal.scale(50))")
      path.fill.red(x="angle(yb,y,ya)")
      path.dark(x="segment(y,ya)")
      path.dark(x="segment(y,yb)")

{.text-center }__Viertes Axiom__  
Zwei beliebige rechte Winkel sind kongruent.

::: column(width=220)

    x-geopad(width=220 height=160): svg
      circle.move(name="g" cx=170 cy=60 target="5_point" label="P")
      path.red(x="line5.parallel(g)" target="5_parallel")
      path(name="line5" x="line(point(40,80),point(120,140))" target="5_line" label="L")

{.text-center }__Fünftes Axiom__  
Zu einer gegebenen [Geraden _g_](target:5_line) und einem [Punkt _P_](target:5_point) nicht auf _g_,
gibt es genau [eine Gerade](target:5_parallel) durch _P_, die
[parallel](gloss:parallel) zu _g_ ist .
:::

{.r} _{button.next-step} Weiter_

---
> id: jefferson

::: column.grow
Jedes dieser Axiome sieht ziemlich offensichtlich und selbstverständlich aus, aber zusammen
bilden sie die Grundlage der Geometrie und können verwendet werden, um fast alles
andere abzuleiten. Laut keinem Geringeren als [Isaac Newton](bio:newton) ist _“es das großartige an
der Geometrie, dass mit so wenigen Prinzipien so viel erreicht werden kann”_.

Euklid veröffentlichte die fünf Axiome in seinem Buch _“Elemente”_. Es ist das erste Beispiel
eines systematischen Ansatzes in der Geschichte der Mathematik und wurde als
Mathematik-Lehrbuch über Tausende von Jahren verwendet.

::: column(width=220)

    x-media(src="images/elements.jpg" width=220 height=330 lightbox)

:::

Einer derjenigen, die Euklids Arbeit studierten, war der amerikanische Präsident[Thomas
Jefferson](bio:jefferson). Als er 1776 die Unabhängigkeitserklärung schrieb, wollte
er einen ähnlichen Ansatz verfolgen. Er beginnt mit einigen wenigen, einfachen
“Axiomen” und “beweist” dann komplexere Ergebnisse:

    .parchment “Wir halten diese Wahrheiten für ausgemacht, daß alle Menschen gleich erschaffen worden, daß sie von ihrem Schöpfer mit gewissen unveräußerlichen Rechten begabt worden, worunter sind Leben, Freyheit und das Bestreben nach Glückseligkeit.”

{.text-center.follows} `=>`

    .parchment Wir erklären daher … , daß diese Vereinigten Colonien Freye und Unabhängige Staaten sind, und von Rechtswegen seyn sollen.”

Dies ist nur ein Beispiel dafür, dass Euklids Ideen in der Mathematik
auch auf ganz anderen Gebieten als Inspiuratio9n dienten.

---
> id: measuring
> section: geometric-construction

## Geometrisches Konstruktieren

Du hast vielleicht bemerkt, dass die fünf Axiome von Euklid nichts über die
_Messung_ von Abständen oder Winkeln sagen. Das war schon immer ein wesentlicher Bestandteil der
Geometrie, z.B. zur Berechnung von Flächen und Volumen.

::: column.grow
Zu Zeiten von Thales oder Euklid gab es jedoch kein allgemein angewandtes System von
Einheiten, wie wir es heute haben. Abstände wurden oft mittels Körperteilen gemessen, z.B
. Fingerbreiten oder Armlängen. Diese sind nicht sehr genau und sie unterscheiden sich
von Mensch zu Mensch.

Um größere Entfernungen zu messen, verwendeten Architekten oder Gutachter _geknotete Schnüre_: lange
Schnüre, die in gleichen Abständen viele Knoten enthielten. Aber diese waren
auch nicht ganz genau, und verschiedene Schnüre hatten die Knoten in
leicht unterschiedlichen Abständen platziert.

    figure: x-media(src="images/knots.jpg" width=370 height=23 style="opacity: 0.8")

::: column(width=200)

    x-media(src="images/units.png" width=200 height=336)

:::

Griechische Mathematiker wollten sich nicht wirklich mit diesen Ungenauigkeiten befassen. Sie interessierten sich
viel mehr für die zugrunde liegenden Gesetze der Geometrie als für ihre praktischen
Anwendungen.

Deshalb haben sie eine viel idealisiertere Version unseres Universums entwickelt: eine
, in der Punkte keine Größe und Geraden keine Breite haben können. Natürlich ist es
[[unmöglich|sehr schwer]], diese auf Papier zu zeichnen. Sichtbare Punkte nehmen immer
etwas Platz ein, und Geraden haben immer eine gewisse Breite. Aus diesem Grund sind unsere
Zeichnungen immer nur “Näherungen”.

---
> id: tools
> goals: play-l1 play-c1

    figure: img(src="images/divider-1.svg" width=760 height=42)

Die Axiome von Euklid sagen uns im Grunde, was in seiner Vorstellung von Geometrie _möglich ist_
Es stellt sich heraus, dass wir nur zwei sehr einfache Werkzeuge benötigen, um dies
auf Papier skizzieren zu können:

::: column(width=320)

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="a" cx=50 cy=190)
        circle.move(name="b" cx=250 cy=50)
        path.red(name="l1" x="segment(a,b)" style="display: none")
      x-play-btn

{.text-center} Eine __gerade__ Kante ist wie ein Lineal, aber ohne Markierungen. You
can use it to connect two points (as in Axiom 1), or to extend a line segment
(as in Axiom 2).

::: column.reveal(width=300 when="play-l1")

    x-geopad.r(width=300 height=240)
      svg
        circle.move(name="c" cx=150 cy=120)
        circle.move(name="d" cx=250 cy=150)
        path(x="segment(c,d)")
        path.red(name="c1" x="arc(c,d,1.99*pi)" style="display: none")
      x-play-btn

{.text-center} A __compass__ allows you to draw a circle of a given size around
a point (as in Axiom 3).
:::

---
> id: construction

Axioms 4 and 5 are about comparing properties of shapes, rather than drawing
anything. Therefore they don’t need specific tools.

::: column.grow
You can imagine that Greek mathematicians were thinking about Geometry on the
beach, and drawing different shapes in the sand: using long planks as
straight-edge and pieces of string as compass.

Even though these tools look very primitive, you can draw a great number of
shapes with them. This became almost like a puzzle game for mathematicians:
trying to find ways to “construct” different geometric shapes using just a
straight-edge and compass.

::: column(width=340)

    x-media(src="images/archimedes.jpg" width=340 height=265)

{.caption} The Greek Mathematician [Archimedes](bio:archimedes) was studying
Geometry when he was killed by Roman invaders. His last words were “do not
disturb my circles”.
:::

---
> id: equilateral
> goals: segment0 segment1 segment2 circle1 circle2

::: column(width=320)

    x-geopad.sticky(width=320 tools="move|line|circle" intersect=true): svg

::: column.grow
{.task} Draw an [equilateral triangle](gloss:equilateral-triangle) using just a
straight-edge and compass.

To begin, draw a line segment anywhere in a box on the right. With the
<x-target no-margins to="#equilateral .tool:nth-child(3)">line tool</x-target>
selected, simply drag from start to end. This segment will be one of the sides
of the triangle.

{.reveal(when="segment0")} Next, draw two circles that have one of the endpoints
of the line segments as center, and go through the other endpoint. With
the <x-target no-margins to="#equilateral .tool:nth-child(5)">circle tool</x-target> selected,
simply drag from one endpoint to the other.

{.reveal(when="circle1 circle2")} We already have two vertices of the triangle,
and the third one is the intersection of the two circles. Use the line tool
again to draw the two missing sides and complete the triangle.

{.reveal(when="segment1 segment2")} Now [these two sides](target:a) and
[these two sides](target:b) are each [[radii|diameters|circumferences]] of the
same circle, _{span.reveal(when="blank-0")} so they must have the same length.
In other words, all three sides of the triangle are congruent – and therefore it
is indeed an equilateral triangle._
:::

---
> id: perp-bisector

### Midpoints and Perpendicular Bisectors

{.todo} COMING SOON – Constructing Midpoints and Perpendicular Bisectors

    // A midpoint is a point on a line segment that divides it into two congruent
    // segments. If A,B, and C are collinear, and AB=BC, then B is the midpoint of
    // `bar(AC)`.
    // 
    // A line, segment, or ray that passes through a midpoint of another segment 
    // at a right angle is called a __perpendicular bisector__. `bar(DE)` is the
    // perpendicular bisector of `bar(AC)`, so `bar(AB) ~= bar(BC)` and `bar(AC) _|_ bar(DE)`.

---
> id: angle-bisector

### Angle Bisectors

{.todo} COMING SOON – Constructing Angle Bisectors

    // When two rays have the same endpoint, an angle is created.
    // 
    // Here, `vec(BA)` and `vec(BC)` meet to form an angle. An angle is labeled with an
    // “∠” symbol in front of the three letters used to label it. This angle can be
    // labeled `/_ABC` or `/_CBA`. Always put the vertex (the common endpoint of the
    // two rays) in the middle of the three points. It doesn’t matter which side point
    // is written first.
    // 
    // An __angle bisector__ is a ray that divides an angle into two congruent angles,
    // each having a measure exactly half of the original angle. Every angle has
    // exactly one angle bisector.
    // 
    // Angle Bisector Theorem: If a point is on the bisector of an angle, then the
    // point is equidistant from the sides of the angle.
    // In other words, if BD←→ bisects ∠ABC,BE−→−⊥ED, and BF−→−⊥DF, then ED=DF.

---
> id: parallel-perp

### Parallel and Perpendicular Lines

{.todo} COMING SOON – Constructing Parallel and Perpendicular Lines

{.todo} COMING SOON – Constructing a Square

    // Perpendicular Line Construction; through a Point NOT on the Line
    // Draw a horizontal line and a point above that line. Label the line l and the point A.
    // 
    // * Take the compass and put the pointer on A. Open the compass so that it reaches beyond line l. Draw an arc that intersects the line twice.
    // * Move the pointer to one of the arc intersections. Widen the compass a little and draw an arc below the line. Repeat this on the other side so that the two arc marks intersect.
    // * Take your straightedge and draw a line from point A to the arc intersections below the line. This line is perpendicular to l and passes through A.
    // 
    // Theorem #1: If two lines are parallel and a third line is perpendicular to one of the parallel lines, it is also perpendicular to the other parallel line. Or, if l || m and l⊥n, then n⊥m.
    // 
    // Theorem #2: If two lines are perpendicular to the same line, they are parallel to each other.
    // 
    // Distance Between Parallel Lines 
    // The shortest distance between two parallel lines is the length of the perpendicular segment between them. It doesn’t matter which perpendicular line you choose, as long as the two points are on the lines. Recall that there are infinitely many perpendicular lines between two parallel lines.

---
> id: impossible

### Impossible Constructions

In the following courses, we will see even more shapes that can be constructed
like this. However, there is a limit to Euclidean geometry: some constructions
are simply impossible using just straight-edge and compass.

::: column.grow
According to legend, the city of Delos in ancient Greece was once faced with a
terrible plague. The oracle in Delphi told them that this was a punishment from
the gods, and the plague would go away if they built a new altar for their
temple that was _exactly twice_ the volume of the existing one.

    figure: img(src="images/altar.svg" width=320 height=140)

::: column(width=300)

    x-media(src="images/delphi.jpg" credit="© De Agostini Editorial" width=300 height=239)
    
{.caption} A reconstruction of a temple in Delphi
:::

Note that _doubling the volume_ is not the same as _doubling an edge of the
cube_. In fact, if the [[3-dimensional|2-dimensional|1-dimensional]] volume
increases by a factor of 2, the [[1-dimensional|3-dimensional|2-dimensional]]
edge of the cube will increase by a factor of `root(3)(2)`.

---
> id: impossible-1

This still sounds pretty simple, but doubling the cube is actually impossible
in [Euclidean geometry](gloss:euclidean-geometry), using only straight-edge and
compass! For the citizens of Delos this unfortunately meant that all hope was
lost. There are two other constructions that are famously impossible.
Mathematicians devoted a great amount of time trying to find a solution – but
without success:

::: column(width=220)

    figure: img(src="images/impossible-1.svg" width=200 height=180)

{.text-center} __{.m-red} Trisecting the angle__  
We already know how to bisect angles. However it is impossible to similarly
split an angle into _three_ equal parts.

::: column(width=220)

    figure: img(src="images/impossible-2.svg" width=200 height=180)

{.text-center} __{.m-blue} Doubling the cube__  
Given the edge of a cube, it is impossible to construct the edge of another cube
that has exactly twice the volume.

::: column(width=220)

    figure: img(src="images/impossible-3.svg" width=200 height=180)

{.text-center} __{.m-green} Squaring the circle__  
Given a circle, it is impossible to construct a square that has exactly the same
area.
:::

Note that these problems can all be solved quite easily with algebra, or using
marked rulers and protractors. But they are impossible if you are just allowed to
use straight-edge and compass.

---
> id: origami
> section: origami
> sectionBackground: dark

## Origami and Paper Folding

Using straight-edge and compass is not the only way to construct geometric
shapes. Another technique uses no tools at all: __Origami__.

The word _Origami_ (折り紙) comes from the Japanese _oru_ (to fold) and _kami_
(paper). The goal is to make objects out of one or more sheets of paper,
without any additional tools like glue or scissors. You can create incredibly
beautiful and impressive designs – all of these figures were built using nothing
but rectangular sheets of paper:

::: column(width=186)
    x-media(src="images/origami/origami-1.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-2.jpg" lightbox credit="© Dirk Eisner, Thomas Hull" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-3.jpg" lightbox credit="© ServeSmasher (Flickr)" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-4.jpg" lightbox credit="© Dirk Eisner" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-5.jpg" lightbox credit="© Meenakshi Mukerji" width=186 height=200)
::: column(width=186)
    x-media(src="images/origami/origami-6.jpg" lightbox credit="© Meenakshi Mukerji, Dennis Walker" width=186 height=200)
:::

---
> id: crane
> goals: video

Building shapes like this can take a lot of time, and it is important to be
extremely accurate. But with a bit of practice, you can do it yourself!

::: column.sticky-video(width=360)

    x-video(src="https://storage.googleapis.com/mathigon-videos/crane.mp4" poster="images/crane.jpg" width=360 height=360 controls)

::: column.grow
{.step.active(data-t=0)} You just need a square sheet of paper. To start, fold
the sheet along its two diagonals.

{.step(data-t=16)} Next, fold it along its horizontal and vertical centers – but
in the opposite direction.

{.step(data-t=38)} Now take two opposite corners of the sheet and bring them
together as shown. This forms a smaller square which is open at the bottom.

{.step(data-t=51)} Fold the left and right corners of the square towards its
center line. Then turn it over and repeat the same.

{.step(data-t=83)} Now fold the top triangle down, along the horizontal line,
and then open up the folds from the last two steps.

{.step(data-t=99)} This one is difficult: take the bottom corner of the paper
and fold it all the way up, along the horizontal line you just created. Some of
the folds you made before will be inverted. Then turn over and repeat.

{.step(data-t=135)} Make sure the two “legs” are pointing down. Then take the
left and right corner and fold them towards the center line. Turn over and
repeat.

{.step(data-t=172)} You’re almost done! Slightly open the right side, and fold
the head up towards the top. You will have to turn it inside out. Then repeat
the same with the tail on the left.

{.step(data-t=203)} Reverse the fold as shown to create a beak. You can decide
how long you want it to be by picking the location of the fold.

{.step(data-t=215)} Finally, fold down the two wings, and pull them apart.
:::

---
> id: crane-1

This _crane_ is one of the oldest and most famous Origami models. We have many
more [instructions for Origami models](/origami) you can try!

    figure: x-media(src="images/origami-1.jpg" credit="© Meenakshi Mukerji, Joel Lord, Dirk Eisner, Angie Harms, Michal Kosmulski" width=760 height=118)

---
> id: origami-axioms

### Origami Axioms

Just like drawing with straight-edge and compass, there are a few axioms of
different _folds_ that are possible with origami. They were first listed in
1992, by the Italian-Japanese mathematician Humiaki Huzita.

::: column(width=220 parent="padded-thin origami-axioms")

    x-video(src="images/origami/axiom-1.mp4" width=220 height=220)

{.text-center} You can fold a line connecting any two points.
::: column(width=220)

    x-video(src="images/origami/axiom-2.mp4" width=220 height=220)

{.text-center} You can fold any point _P_ onto any other point _Q_. This creates
the [[perpendicular bisector|angle bisector|midpoint]] of the line `bar(PQ)`.
::: column(width=220)

    x-video(src="images/origami/axiom-3.mp4" width=220 height=220)

{.text-center} We can fold any two lines onto each other. If the lines
intersect, this creates the [[angle bisector|perpendicular bisector|midpoint]]
of the angle between the two lines.
::: column(width=220)

    x-video(src="images/origami/axiom-4.mp4" width=220 height=220)

{.text-center} Given a point _P_ and a line _L_, we can make a fold
perpendicular to _L_ passing through _P_.
::: column(width=220)

    x-video(src="images/origami/axiom-5.mp4" width=220 height=220)

{.text-center} Given two points _P_ and _Q_ and a line _L_, we can make a fold 
that passes through _P_ and places _Q_ onto _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-6.mp4" width=220 height=220)

{.text-center} Given any two points _P_ and _Q_ and any two lines _K_ and _L_,
we can make a fold that places point _P_ onto line _K_ and at the same time
places point _Q_ onto line _L_.
::: column(width=220)

    x-video(src="images/origami/axiom-7.mp4" width=220 height=220)

{.text-center} Given a point _P_ and two lines _K_ and _L_, we can fold a line
perpendicular to _K_ that places _P_ onto _L_.
:::

---
> id: origami-axioms-1

It turns out that these axioms are even more powerful than the Euclidean ones.
It is possible to trisect angles and double cubes using just paper folding!
Of course, it is impossible to fold any _curved_ lines, and you still can’t
square the circle with origami.

    figure: x-media(src="images/origami-2.jpg" credit="© Dirk Eisner, Meenakshi Mukerji, noricum, fdecomite" width=760 height=123)

---
> id: origami-applications
> goals: video

### Applications of Origami

Origami is an ancient art, and for the longest time, it was mostly a recreational
pursuit, without real-life applications. However, it turns out that techniques
developed for Origami can be incredibly useful in technology and engineering:

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/space.mp4" poster="images/space.jpg" width=300 height=225 credit="© Brigham Young University")

::: column.grow

#### Origami in Space

Satellites need large solar panels to generate power. Unfortunately, the rockets
that carry satellites into space only have very limited space for cargo, and
any additional weight costs a lot of fuel.

Origami techniques allow solar panels to “unfold” when they reach space. Some
particularly clever folds are incredibly compact and require very few motors
and other mechanical components.

    // One of these is the __Miura Map Fold__, which was invented by _Korio Miura_.
    // The same is also true for the mirrors of telescopes in space. Larger mirrors
    // can take better images. Engineers can use Origami to build large mirrors that
    // can be folded up very efficiently when loaded onto rockets.

:::

---
> id: origami-applications-3
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/stents.mp4" poster="images/stents.jpg" width=300 height=225 credit="© Virtual Point")

::: column.grow

#### Origami in Medicine

In medicine, similar ideas from Origami are used on a much smaller scale. In
2003, researchers developed _Origami Stents_: tiny tubes that can be inserted
into blood vessels. They are initially folded up but can expand inside patients’
blood in order to enlarge clogged arteries or veins.

:::

---
> id: origami-applications-1

::: column(width=300)

    x-media(src="images/bridge.jpg" width=300 height=225 credit="© Hiroshima University")

::: column.grow

#### Foldable Bridges

The British and American military used Origami to develop foldable, mobile
bridges. These were important for quickly crossing rivers or anti-tank ditches,
and could be deployed much faster than previous designs.

They can also be used for disaster relief, to quickly give emergency vehicles
access after earthquakes or tsunamis. This image is of a prototype designed at
Hiroshima University in Japan.

:::

    // ---
    // > id: origami-applications-2
    // > goals: video
    // 
    // ::: column(width=300)
    // 
    // x-video(src="https://storage.googleapis.com/mathigon-videos/stadium.mp4" poster="images/stadium.jpg" width=300 height=225 credit="© Mercedes Benz Stadium")
    // 
    // ::: column.grow
    // #### Stadium Roofs
    // 
    // Bridges are difficult to construct because they have to span large distances
    // without intermediate support. This also is the case for the roofs of sports
    // stadiums, which have to cover a large area without being supported by pillars.
    // 
    // The roof of the new Falcons Stadium in Atlanta consists of eight enormous
    // modules that can twist to open or close.
    // :::

---
> id: origami-applications-4
> goals: video

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/marine.mp4" poster="images/marine.jpg" width=300 height=225 credit="© Harvard University")

::: column.grow

#### Origami under the Sea

The depths of the oceans are some of the least explored areas on Earth. Animals
that live there are often squishy and delicate, which makes them very hard
to examine.

Here you can see a “trap” in the shape of a [dodecahedron](gloss:dodecahedron)
that can fold around marine organisms, allowing them to be studied. It is
remotely controlled and only needs a single motor to drive the complex folding
motion of its five arms.

:::

---
> id: origami-applications-5

And there are many more applications of Origami in everyday life: houses
that will compress rather than crumble during an earthquake, unfolding airbags
in cars, self-assembling robots, more efficient packaging, and lightweight
aircraft.

---
> id: origami-wings
> goals: video

### Origami in Nature

It turns out that we humans are not the only ones harnessing the power of
Origami: nature has been doing so for millions of years.

Here you can see the wing of an __earwig__ that can be folded up using an
ingenious pattern. When opened, the size of the wing expands by a factor of 10 –
the highest “folding ratio” in the animal kingdom:

::: column(width=300)

    x-media(src="images/wing.jpg" width=300 height=170 credit="© ETH Zürich")

::: column(width=300)

    x-video(src="https://storage.googleapis.com/mathigon-videos/wing-animation.mp4" poster="images/wing-animation.jpg" width=300 height=170 credit="© ETH Zürich")

:::

---
> id: origami-wings-1

When expanded, the large wings snap into a stable position that allows the
insects to fly. But it only takes the lightest touch for the wings to retract.
When folded up, they are compact enough to allow earwigs to tunnel underground.
Many other insects, bats, leaves and flowers use similar folding patterns to fit
large surfaces into small spaces.

Scientists are studying these plants and animals, hoping to mimic their abilities
in engineering and technology. Potential applications could include foldable
electronics in smartphones, expanding solar panels for satellites, or even
self-folding camping tents.

---
> id: origami-dna
> goals: video

::: column(width=320)

    x-video(src="https://storage.googleapis.com/mathigon-videos/dna.mp4" poster="images/dna.jpg" width=320 height=240 credit="© PyMOL")

::: column.grow

Origami even appears in your own body: every human cell contains around 2 meters
of [DNA](gloss:dna), the [molecule](gloss:molecule) that carries all your
genetic information. If you could combine the DNA from all cells in your body,
their length would be more than 140 times the distance from Earth to the sun!

To fit all that DNA in your body, without it getting twisted or torn, every
strand is curled, folded, and held in place by special molecules.

:::

---
> id: origami-dna-1

A similar process is also used by other complex molecules that appear in living
organisms. For example, __[protein](gloss:protein) folding__ is one of the most
complex problems in biology. Understanding it better can help scientists develop
new drugs in the future.
