# Abbildungen und Symmetrie

## Einführung

> id: intro
> section: introduction

Viele geometrische Grundvorstellungen, wie [Geraden](gloss:line) und [Punkte](gloss:point),
wurden von Mathematikern "erfunden". Symmetrie hingegen ist überall
um uns herum. Fast alle Pflanzen, Tiere und sogar wir Menschen sind symmetrisch.

::: column(width=200)
    x-media(src="images/butterfly.jpg" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/lion.jpg" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/starfish.jpg" width=200 height=200 lightbox)
:::

_{button.next-step} Weiter_

---

Im Laufe der Zeit haben wir die Symmetrie der Natur in Kunst, Architektur, Technologie
und Design nachgeahmt. Symmetrische Formen und Muster scheinen einfach schöner
_zu sein_ als unsymmetrische.

::: column(width=200)
    x-media(src="images/taj-mahal.jpg" credit="© Yann Forget / Wikimedia Commons" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/capitol.jpg" credit="© Martin Falbisoner" width=200 height=200 lightbox)
::: column(width=200)
    x-media(src="images/window.jpg" width=200 height=200 lightbox)
:::

Aber bei der Symmetrie geht es um viel mehr, als einfach nur _schön auszusehen_. Sie liegt 
unserem Universum zu Grunde und kann sogar die grundlegendsten
Gesetze der Physik erklären.

Obwohl man sich unter Symmetrie sehr leicht etwas vorstellen kann, ist es
schwieriger als man vermuten würde, sie mathematisch zu beschreiben. Zuerst müssen wir etwas über
_Abbildungen_ lernen.

---

## Abbildungen

> id: transformations
> goals: t1 t2 t3
> section: transformations

Unter einer [__Abbildung__](gloss:transformation) versteht man ganz spezielle Regeln, wie eine geometrische Figur in eine andere
umgewandelt wird. Hier sind einige Beispiele:

::: column.r(width=200)
    .animation
      include svg/transform-1.svg
      x-play-btn
::: column.r(width=200)
    .animation
      include svg/transform-2.svg
      x-play-btn
::: column.r(width=200)
    .animation
      include svg/transform-3.svg
      x-play-btn
:::

{.reveal(when="t1 t2 t3")} Das Ergebnis einer Abbildung wird als
[__Bild__](gloss:transformation-image) bezeichnet. Das Bild einer Figur `A` wird in der Regel
mit `A'` bezeichnet (ausgesprochen als "A Strich").

---
> id: rigid

Zunächst werden wir nur uns nur mit Abbildungen befassen, die die Größe und Form der
ursprünglichen Figur nicht verändern. Stell dir vor, sie besteht aus einem festen
Material wie Holz oder Metall: Wir können sie bewegen, drehen und wenden, aber wir können sie nicht dehnen
oder irgendwie verformen. Diese Abbildungen werden als
[__Kongruenzabbildungen (längentreue Abbildungen)__](gloss:rigid-transformation) bezeichnet.

Welche dieser Abbildungen sind längentreu?

    x-picker.rigid
      .item: img(src="images/picker-1.svg" width=130 height=240)
      .item(data-error="not-rigid-1"): img(src="images/picker-2.svg" width=130 height=240)
      .item: img(src="images/picker-3.svg" width=130 height=240)
      .item(data-error="not-rigid-2"): img(src="images/picker-4.svg" width=130 height=240)
      .item: img(src="images/picker-5.svg" width=130 height=240)

---
> id: rigid-1
> goals: t1 t2 t3

Bei Kongruenzabbildungen ist das Bild immer
[[kongruent|gleich|umgedreht]] im Vergleich mit dem Original. Es gibt drei verschiedene
Arten von Kongruenzabbildungen:

::: column.grow.r(width=200)
    .animation
      include svg/rigid-1.svg
      x-play-btn

{.text-center} Eine Abbildung, die eine Figur einfach _bewegt_ wird als
[__Verschiebung (Translation)__](gloss:translation) bezeichnet.

::: column.grow.r(width=200)
    .animation
      include svg/rigid-2.svg
      x-play-btn

{.text-center} Eine Abbildung, die eine Figur _um eine Achse dreht_, wird als
[__Spiegelung__](gloss:reflection) bezeichnet.

::: column.grow.r(width=200)
    .animation
      include svg/rigid-3.svg
      x-play-btn

{.text-center} Eine Abbildung, die eine Figur _dreht_, wird als
[__Drehung (Rotation)__](gloss:rotation) bezeichnet.
:::

---
> id: rigid-2

Wir können auch mehrere Arten von Abbildungen kombinieren, um komplexere
Abbildungen zu erreichen - zum Beispiel eine Verschiebung mit anschließender Drehung.

Aber zuerst wollen wir einen genauren Blick auf jede
dieser Arten von Abbildungen werfen.

---
> id: translations

### Verschiebungen (Translationen)

Eine [__Verschiebung__](gloss:translation) ist eine Abbildung, die jeden
Punkt einer Figur um den gleichen Abstand in die gleiche Richtung bewegt.

In der Koordinatenebene können wir eine Verschiebung festlegen, indem wir angeben
wie weit die Figur entlang der _x_-Achse und der _y_-Achse bewegt wird. Beispielsweise bewegt eine Verschiebung um
(3, 5) eine Figur um 3 entlang der _x_-Achse und um 5 entlang der _y_-Achse.

::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill(x="polygon(point(2,2),point(1,5),point(4,5),point(3,2))" name="s1" label="A" style="fill: #d94c44; opacity: 0.6" label-colour="white")
      path.fill(x="s1.shift(5,-1)" style="fill: #d94c44" label="A'" label-colour="white")
      path.reveal(x="segment(point(4,5),point(9,5))" mark="arrow" when="blank-0" animation="draw")
      path.reveal(x="segment(point(9,5),point(9,4))" mark="arrow" when="blank-1" animation="draw")

{.caption} Verschoben um ([[5]], [[1]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill.red(x="circle(point(7,4),1.5)" name="s2" label="B" style="opacity: 0.6" label-colour="white")
      path.fill.red(x="s2.shift(-4,-2)" label="B'" label-colour="white")
      path.reveal(x="segment(point(6,5),point(2,5))" mark="arrow" when="blank-2" animation="draw")
      path.reveal(x="segment(point(2,5),point(2,3))" mark="arrow" when="blank-3" animation="draw")

{.caption} Verschoben um ([[-4]], [[2]])
::: column(width=220)

    x-geopad(width=220 height=140 grid=20 no-points): svg
      path.fill(x="polygon(point(2,0),point(5,0),point(5,2),point(4,2),point(4,1),point(3,1),point(3,4),point(2,4))" name="s3" label="C" style="fill: #822b9b; opacity: 0.6" label-colour="white")
      path.fill(x="s3.shift(4,2)" style="fill: #822b9b" label="C'" label-colour="white")
      path.reveal(x="segment(point(2,6),point(6,6))" mark="arrow" when="blank-4" animation="draw")
      path.reveal(x="segment(point(2,4),point(2,6))" mark="arrow" when="blank-5" animation="draw")

{.caption} Verschoben um ([[4]], [[-2]])
:::

---
> id: translations-1
> goals: drag-0 drag-1 drag-2

Jetzt bist du an der Reihe - verschiebe die folgenden Figuren wie angegeben:

::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; opacity: .5;")
      polygon(points="30,10 10,70 70,70 50,10" style="fill: #289782; cursor: move")

{.caption} Verschiebe um (3, 1) _{span.check(when="drag-0")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; opacity: .5;")
      polygon(points="50,10 90,50 50,90 10,50" style="fill: #2ba058; cursor: move")

{.caption} Verschiebe um (-4, -2) _{span.check(when="drag-1")}_
::: column(width=220)

    svg(width=220 height=140)
      each i in [10,30,50,70,90,110,130,150,170,190,210]
        line(x1=i x2=i y1=0 y2=140 stroke="#e6e6e6" stroke-width=2)
      each i in [10,30,50,70,90,110,130]
        line(x1=0 x2=220 y1=i y2=i stroke="#e6e6e6" stroke-width=2)
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; opacity: .5;")
      polygon(points="10,10 30,10 30,50 50,50 50,10 70,10 70,70 10,70" style="fill: #2ea92e; cursor: move")

{.caption} Verschiebe um (5, -1) _{span.check(when="drag-2")}_
:::

---
> id: reflections
> goals: r0 r1 r2

### Spiegelungen

Eine [__Spiegelung__](gloss:reflection) ist eine Abbildung, die eine Figur entlang einer Geraden
"dreht" bzw. "spiegelt". Man nennt diese Gerade __Spiegelachse__ oder kurz Achse.

Zeichne die Spiegelachse in jedem dieser Beispiele:

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20): svg
      path(x="polygon(point(2,1),point(1,2),point(2,3),point(8,2))" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)" name="from0")
      path(hidden name="line0" x="line(point(-1,4),point(11,4))")
      path(x="from0.reflect(line0)" style="stroke: #363644; stroke-width: 3px; fill: rgba(179,4,105,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20): svg
      path(x="polygon(point(1,1),point(1,5),point(3,5),point(2,3),point(4,1))" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)" name="from1")
      path(hidden name="line1" x="line(point(9,-1),point(-1,9))")
      path(x="from1.reflect(line1)" style="stroke: #363644; stroke-width: 3px; fill: rgba(154,24,130,0.4)")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20)
      x-media.background(src="images/rorschach.jpg" width=220 height=180)
      svg
        path(hidden name="line2" x="line(point(5,-1),point(5,9))")

:::

---
> id: reflections-1
> goals: r0 r1 r2

Jetzt bist du an der Reihe - zeichne die Spiegelung zu jeder dieser Figuren:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(1,2),point(3,1),point(4,3),point(4,5),point(2,6),point(1,4))" name="from0" style="fill: rgba(105,63,180,0.4)")
      path.red(x="line(point(5,0), point(5,1))" name="line0")
      path.finished(hidden x="from0.reflect(line0)" name="to0" style="fill: rgba(105,63,180,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,6),point(6,4),point(8,6),point(5,7))" name="from1" style="fill: rgba(80,83,205,0.4)")
      path.red(x="line(point(-1,4), point(11,4))" name="line1")
      path.finished(hidden x="from1.reflect(line1)" name="to1" style="fill: rgba(80,83,205,0.4)")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,3),point(3,3),point(3,5),point(5,5),point(5,6),point(2,6))" name="from2" style="fill: rgba(56,102,230,0.4)")
      path.red(x="line(point(2,1), point(3,2))" name="line2")
      path.finished(hidden x="from2.reflect(line2)" name="to2" style="fill: rgba(56,102,230,0.4)")

:::

---
> id: reflections-2

Beachte, dass, wenn ein Punkt auf der Spiegelachse liegt, sein
Bild [[gleich|rechts von|gegenüber]] dem ursprünglichen Punkt ist.

---
> id: reflections-3

In allen oben genannten Beispielen war die Spiegelachse horizontal, vertikal
oder in einem Winkel von 45° - was es einfach machte, die Spiegelbilder zu zeichnen. Ist dies nicht
der Fall, erfordert die Konstruktion etwas mehr Aufwand:

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="l1" cx="180" cy="30" target="refl")
      circle.move.pulsate(name="l2" cx="120" cy="270" target="refl")
      path.dark(name="refl" x="line(l1,l2)" target="refl")

      circle.reveal(name="a" x="point(60,50)" when="next-0" animation="pop" target="circ")
      circle.reveal(name="b" x="point(120,100)" when="next-2" animation="pop")
      circle.reveal(name="c" x="point(110,170)" when="next-2" animation="pop" delay=100)
      circle.reveal(name="d" x="point(65,200)" when="next-2" animation="pop" delay=200)
      circle.reveal(name="e" x="point(30,120)" when="next-2" animation="pop" delay=300)

      circle.reveal(name="a1" x="a.reflect(refl)" when="next-1" animation="pop" target="circ")
      circle.reveal(name="b1" x="b.reflect(refl)" when="next-2" animation="pop" delay=1000)
      circle.reveal(name="c1" x="c.reflect(refl)" when="next-2" animation="pop" delay=1100)
      circle.reveal(name="d1" x="d.reflect(refl)" when="next-2" animation="pop" delay=1200)
      circle.reveal(name="e1" x="e.reflect(refl)" when="next-2" animation="pop" delay=1300)

      path.fill.blue(x="polygon(a,b,c,d,e)")
      path.fill.reveal.blue1(x="polygon(a1,b1,c1,d1,e1)" when="next-3")

      path.thin.reveal(x="line(a,a1)" when="next-0" animation="draw" delay=1000)
      path.thin.reveal(x="segment(b,b1)" when="next-2" animation="draw" delay=400)
      path.thin.reveal(x="segment(c,c1)" when="next-2" animation="draw" delay=500)
      path.thin.reveal(x="segment(d,d1)" when="next-2" animation="draw" delay=600)
      path.thin.reveal(x="segment(e,e1)" when="next-2" animation="draw" delay=700)

      circle.transparent(name="ax" x="refl.project(a)" target="circ")
      path.dark.transparent(x="segment(a,ax)" target="d1 circ")
      path.dark.transparent(x="segment(a1,ax)" target="d2 circ")
      path.dark.transparent(x="circle(ax,distance(a,ax))" target="circ")

::: column.grow
{.r} Um diese Form über die [Spiegelachse](target:refl) zu spiegeln,
müssen wir jeden [Eckpunkt](gloss:polygon-vertex) einzeln
spiegeln und dann alle wieder verbinden.
_{button.next-step} Weiter_

{.r.reveal(when="next-0")} Wählen wir einen der Eckpunkte aus und zeichnen wir die Gerade
durch diesen Eckpunkt, die senkrecht zur Spiegelachse steht.
_{button.next-step} Weiter_

{.r.reveal(when="next-1")} Jetzt können wir den [Abstand](target:d1) vom
Eckpunkt bis zur Spiegelachse messen und den Punkt markieren,
der den [gleichen Abstand](target:d2) auf der anderen Seite hat. _{span.lgrey}(Wir können dazu entweder ein Lineal
oder einen [Zirkel](target:circ) verwenden.)_
_{button.next-step} Weiter_

{.r.reveal(when="next-2")} Wir können das für alle anderen Eckpunkte unserer
Figur wiederholen.
_{button.next-step} Weiter_

{.r.reveal(when="next-3")} Jetzt müssen wir nur noch die gespiegelten Eckpunkte in
der richtigen Reihenfolge verbinden, und wir haben das Spiegelbild gefunden!
:::

---
> id: rotations
> goals: r0 r1 r2

### Drehungen (Rotationen)

Eine [__Drehung__](gloss:rotation) ist eine Abbildung, die eine Figur um
einen bestimmten Winkel um einen Festpunkt "rotieren" lässt. Dieser Punkt wird
als [__Drehzentrum__](gloss:center-of-rotation) bezeichnet. Drehungen können im oder
gegen den Uhrzeigersinn erfolgen.

Versuche, die untenstehenden Figuren um das rote Drehzentrum zu drehen:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(2,2),point(2,5),point(5,5),point(5,2))" name="from0" style="fill: rgba(34,132,213,0.4)")
      circle.red(x="point(5,6)" name="c0")
      path.finished(hidden x="from0.rotate(pi/2,c0)" name="to0" style="fill: rgba(34,132,213,0.4)")

{.caption} Um 90° im Uhrzeigersinn drehen.
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,2),point(8,1),point(9,4))" name="from1" style="fill: rgba(40,151,130,0.4)")
      circle.red(x="point(5,4)" name="c1")
      path.finished(hidden x="from1.rotate(pi,c1)" name="to1" style="fill: rgba(40,151,130,0.4)")

{.caption} Um 180° drehen.
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path(x="polygon(point(3,0),point(8,0),point(8,4),point(1,4))" name="from2" style="fill: rgba(46,169,46,0.4)")
      circle.red(x="point(6,3)" name="c2")
      path.finished(hidden x="from2.rotate(-pi/2,c2)" name="to2" style="fill: rgba(46,169,46,0.4)")

{.caption} Um 90° gegen den Uhrzeigersinn drehen.
:::

---
> id: rotations-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move.pulsate(name="rot" cx="150" cy="250" target="rot angle compass protractor")

      circle.reveal(name="a" x="point(270,190)" when="next-0" animation="pop" target="compass")
      circle.reveal(name="b" x="point(280,110)" when="next-3" animation="pop")
      circle.reveal(name="c" x="point(210,80)" when="next-3" animation="pop" delay=100)
      circle.reveal(name="d" x="point(190,170)" when="next-3" animation="pop" delay=200)
      circle.reveal(name="e" x="point(220,200)" when="next-3" animation="pop" delay=300)

      circle.reveal(name="a1" x="a.rotate(-ang/18*pi,rot)" when="next-2" animation="pop" target="a1 compass")
      circle.reveal(name="b1" x="b.rotate(-ang/18*pi,rot)" when="next-3" animation="pop" delay=1200)
      circle.reveal(name="c1" x="c.rotate(-ang/18*pi,rot)" when="next-3" animation="pop" delay=1300)
      circle.reveal(name="d1" x="d.rotate(-ang/18*pi,rot)" when="next-3" animation="pop" delay=1400)
      circle.reveal(name="e1" x="e.rotate(-ang/18*pi,rot)" when="next-3" animation="pop" delay=1500)

      path.fill.green(x="polygon(a,b,c,d,e)")
      path.fill.reveal.green1(x="polygon(a1,b1,c1,d1,e1)" when="next-4")

      path.transparent.red.light.fill(x="arc(rot,a.rotate(pi,rot),pi)" target="protractor")
      path.thin.reveal(x="angle(a1,rot,a)" when="next-1" animation="draw" target="angle protractor")

      path.thin.reveal(x="segment(a,rot)" when="next-0" animation="draw" delay=500 target="angle compass protractor")
      path.thin.reveal(x="segment(rot,b)" when="next-3" animation="draw" delay=400)
      path.thin.reveal(x="segment(rot,c)" when="next-3" animation="draw" delay=500)
      path.thin.reveal(x="segment(rot,d)" when="next-3" animation="draw" delay=600)
      path.thin.reveal(x="segment(rot,e)" when="next-3" animation="draw" delay=700)

      path.thin.reveal(x="ray(rot,a1)" when="next-1" animation="draw" delay=500 target="angle l2")
      path.thin.reveal(x="segment(rot,b1)" when="next-3" animation="draw" delay=800)
      path.thin.reveal(x="segment(rot,c1)" when="next-3" animation="draw" delay=900 )
      path.thin.reveal(x="segment(rot,d1)" when="next-3" animation="draw" delay=1000)
      path.thin.reveal(x="segment(rot,e1)" when="next-3" animation="draw" delay=1100)
      
      path.transparent(x="segment(rot,a1)" target="compass protractor")
      path.transparent.dark(x="circle(rot,distance(rot,a))" target="compass")


::: column.grow
Es ist schwieriger, Drehungen zu zeichnen, die nicht genau 90° oder 180° betragen. 
Versuchen wir, diese Figur um ${10*ang}{ang|6|-18,18,1}° um das [
Drehzentrum](target:rot) zu drehen.

{.r} Wie bei den Spiegelungen müssen wir jeden Punkt einer Figur einzeln drehen.
_{button.next-step} Weiter_

{.r.reveal(when="next-0")} Wir beginnen damit, einen der Eckpunkte auszuwählen und eine Linie zum 
Drehpunkt zu zeichnen.
_{button.next-step} Weiter_

{.r.reveal(when="next-1")} Mit einem [Winkelmesser](target:protractor) können
wir einen [Winkel von ${ang*10}°](target:angle) um das Drehzentrum messen.
Zeichnen wir eine [zweite Linie](target:l2) in diesem Winkel dazu.
_{button.next-step} Weiter_

{.r.reveal(when="next-2")} Mit einem [Zirkel](target:compass) oder Lineal können wir auf dieser Linie einen [Punkt](target:a1) 
markieren, der den gleichen Abstand vom
Drehzentrum hat wie der ursprüngliche Punkt.
_{button.next-step} Weiter_

{.r.reveal(when="next-3")} Nun müssen wir diese Schritte für alle anderen Eckpunkte unserer Figur wiederholen.
_{button.next-step} Weiter_

{.reveal(when="next-4")} Und schließlich können wir, wie bisher, die einzelnen
Eckpunkte verbinden, um das gedrehte Bild unserer ursprünglichen Figur zu erhalten.
:::

    // ---
    // > id: composition
    // 
    // ### Composition of Transformations
    // 
    // Of course, we can combine multiple translations, reflections and rotations to
    // create more complex transformations.
    // 
    // {.todo} TODO Example
    // 
    // However, as it turns out, it doesn’t matter how many different transformations
    // you combine: you can always find another transformation that does the same in
    // one go!
    // 
    // {.todo} TODO Transformation composition calculator
    // 
    // Combining two reflections is particularly interesting. There are two different
    // cases we need to consider:
    // 
    // ::: column.grow
    // If the two lines of reflection are parallel, the result is a single translation.
    // The direction of the translation is perpendicular to the lines of reflection,
    // and the distance is twice the distance between the lines of reflection.
    // 
    // {.todo} TODO Animation
    // ::: column.grow
    // If the two lines of reflection intersect, the result is a single rotation. The
    // center of rotation is the intersection between the lines of reflection, and the
    // angle is twice the angle between the lines of reflection.
    // 
    // {.todo} TODO Animation
    // :::

---
> id: composition-1

Abbildungen sind in vielen Bereichen der Mathematik eine wichtige Grundlage, nicht nur in der
Geometrie. Beispielsweise kann man [_Funktionen_](gloss:function) transformieren ("abbilden"), indem man ihre [Graphen](gloss:function-graph)
 verschiebt oder dreht. Andere Abbildungen (Transformationen)
haben nicht einmal eine visuelle Darstellung. Du wirst mehr über diese
Abbildungen in späteren Kursen erfahren, aber für den Moment wollen wir zur Symmetrie weitergehen.

---

## Symmetrie

> id: symmetry
> goals: play-0 play-1
> section: symmetry

[__Symmetrie__](gloss:symmetry) ist überall um uns herum, und eigentlich
weiß man was damit gemeint ist: Ein Objekt sieht teilweise _gleich_ aus. Aber durch
Abbildungen können wir viel präziser und mathematischer definieren,
was Symmetrie _wirklich_ bedeutet:

{.definition} Ein Objekt ist _symmetrisch_ , wenn es auch nachdem
man eine bestimmte Abbildung angewendet hat gleich aussieht.

::: column.grow

    .symmetry
      img(src="images/symmetry-1.png" width=320 height=240)
      img(src="images/symmetry-1.png" width=320 height=240)
      x-play-btn

{.text-center} Wir können diesen Schmetterling spiegeln, und er sieht danach noch immer gleich aus.
Wir sprechen dann von einer __Spiegelsymmetrie__.

::: column.grow

    .symmetry
      img(src="images/symmetry-2.jpg" width=320 height=240)
      img(src="images/symmetry-2.jpg" width=320 height=240)
      x-play-btn

{.text-center} Wir können diese Blume drehen, und sie sieht danach genauso aus. Wir
sprechen dann von __Drehsymmetrie (Rotationssymmetrie)__.
:::

---
> id: reflectional-symmetry

### Spiegelsymmetrie

Eine Figur ist [__spiegelsymmetrisch__](gloss:rotational-symmetry), wenn sie nach einer Spieglung gleich aussieht
. Die Spiegelachse wird als [__
Symmetrieachse__](gloss:axis-of-symmetry) bezeichnet und teilt die Figur in zwei
[[kongruente|gleiche|ähnliche]] Hälften auf. Einige Figuren können auch mehr als eine
Symmetrieachse haben.

---
> id: reflectional-symmetry-1
> goals: r0 r1 r2 r3 r4 r5

Zeichne alle Symmetrieachsen in diesen sechs Bildern und Figuren:

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20)
      x-media.background(src="images/lake.jpg" width=220 height=180)
      svg
        path(hidden name="line0" x="line(point(-1,4),point(11,4))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20)
      x-media.background(src="images/beijing.jpg" width=220 height=180)
      svg
        path(hidden name="line1" x="line(point(5,-1),point(5,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20)
      x-media.background(src="images/blue-butterfly.jpg" width=220 height=180)
      svg
        path(hidden name="line2" x="line(point(1,-1),point(11,9))")

::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20): svg
      path(x="polygon(point(2,2),point(5,1),point(8,2),point(9,4),point(8,6),point(5,7),point(2,6),point(1,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(255,148,31,0.4)")
      path(hidden name="line3a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line3b" x="line(point(5,-1),point(5,9))")

{.caption} Diese Figur hat [[2]] Symmetrieachsen.
::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20): svg
      path(x="polygon(point(3,2),point(7,2),point(7,6),point(3,6))" style="stroke: #363644; stroke-width: 3px; fill: rgba(242,124,43,0.4)")
      path(hidden name="line4a" x="line(point(-1,4),point(11,4))")
      path(hidden name="line4b" x="line(point(5,-1),point(5,9))")
      path(hidden name="line4c" x="line(point(0,-1),point(10,9))")
      path(hidden name="line4d" x="line(point(10,-1),point(0,9))")

{.caption} Ein Quadrat hat [[4]] Symmetrieachsen.
::: column(width=220)

    x-geopad.draw.reflection(width=220 height=180 grid=20): svg
      path(x="polygon(point(3,1),point(9,3),point(8,6),point(2,4))" style="stroke: #363644; stroke-width: 3px; fill: rgba(230,100,56,0.4)")
      path(hidden name="line5a" x="line(point(-2,1),point(13,6))")
      path(hidden name="line5b" x="line(point(7,-1),point(3,11))")

{.caption} Diese Figur hat [[2]] Symmetrieachsen.
:::

---
> id: alphabet

Viele Buchstaben im Alphabet sind spiegelsymmetrisch. Wähle diejenigen aus,
für die das zutrifft:

    x-picker.letters
      - let c = ['#D92120', '#E6642C', '#E68E34', '#D9AD3C', '#B5BD4C', '#7FB972', '#63AD99', '#55A1B1', '#488BC2', '#4065B1', '#413B93', '#781C81']
      for l, i in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        if 'FGJKLNPQRSZ'.indexOf(l) < 0
          .item(style=`color: ${c[i%12]}`)= l
        else
          .item(data-error="letter-not-symmetric" style=`color: ${c[i%12]}`)= l

---
> id: reflectional-symmetry-2
> goals: r0 r1 r2

Hier sind noch ein paar weitere Figuren. Vervollständige sie so, dass sie eine
spiegelsymmetrisch sind:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(8,5),point(9,3),point(9,2),point(8,1),point(6,1),point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" style="fill: rgba(179,4,105,0.4)")
      path(x="polyline(point(5,2),point(4,1),point(2,1),point(1,2),point(1,3),point(2,5),point(5,7))" name="from0")
      path.red(x="line(point(5,-1),point(5,9))" name="line0")
      path(hidden x="from0.reflect(line0)" name="to0")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(1,5),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4),point(5,8),point(4,7),point(6,5))" style="fill: rgba(154,24,130,0.4)")
      path(x="polyline(point(1,4),point(1,3),point(6,3),point(4,1),point(5,0),point(9,4))" name="from1")
      path.red(x="line(point(-1,4),point(11,4))" name="line1")
      path(hidden x="from1.reflect(line1)" name="to1")

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      path.fill.finished(hidden x="polygon(point(2,1),point(8,1),point(9,2),point(9,6),point(8,7),point(2,7),point(1,6),point(1,2))" style="fill: rgba(130,43,155,0.4)")
      path(x="polyline(point(5,1),point(8,1),point(9,2),point(9,4))")
      path.red(x="line(point(5,-1),point(5,9))" name="line2")
      path.red(x="line(point(-1,4),point(11,4))" name="line2")
      path(hidden x="polyline(point(5,1),point(2,1),point(1,2),point(1,6),point(2,7),point(8,7),point(9,6),point(9,4))" name="to2")

:::

---
> id: palindromes
> goals: p0 p1 p2

Nicht nur Figuren, Buchstaben und Bilder können spiegelsymmetrisch sein, sondern auch ganze
Zahlen, Wörter und Sätze!

Zum Beispiel kann man "25352" und "ANNA" auch von hinten nach vorne lesen ohne dass sich die Bedeutung verändert. Zahlen
oder Wörter wie diese werden [__Palindrome__](gloss:palindrome) genannt. Fallen dir
noch andere Beispiele für Palindrome ein?

    form.palindromes.text-center.form-field
      input(type="text")
      span.check(when="p0")
      input(type="text")
      span.check(when="p1")
      input(type="text")
      span.check(when="p2")

---
> id: palindromes-1

Wenn wir Leerzeichen und Interpunktion ignorieren, sind auch die kurzen Sätze unten 
spiegelsymmetrisch. Fallen dir eigene Beispiele ein?

{.text-center} Ein Esel lese nie.  
Sei mein, [[nie]] fies - sei fein, nie mies.  
Trug Tim eine so helle Hose nie [[mit]] Gurt?

{.reveal(when="blank-0 blank-1")} Aber Palindrome machen nicht nur Spaß, sie haben
auch eine praktische Bedeutung. Vor einigen Jahren entdeckten Wissenschaftler, dass
Teile unserer [DNA](gloss:dna) palindromisch sind. Das macht sie widerstandsfähiger gegen
Mutationen oder Beschädigungen - denn von jedem Teilstück gibt es eine zweite Sicherungskopie.

---
> id: rotational-symmetry

### Rotationssymmetrie (Drehsymmetrie)

::: column.grow
Eine Figur nennt man [__rotationssymmetrisch__](gloss:rotational-symmetry), wenn sie nach einer Drehung (um weniger als 360°) gleich aussieht. Das [
Drehzentrum](gloss:center-of-rotation) ist normalerweise die Mitte der Figur.

Die [__Zähligkeit__](gloss:order-of-symmetry) ist die Anzahl der verschiedenen
Ausrichtungen, in denen die Figur gleich aussieht. Du kannst dir das auch so vorstellen, wie
 _oft eine Figur_ gedreht werden kann, bevor man wieder zum Anfang zurückgelangt.
Zum Beispiel hat diese Schneeflocke die Zähligkeit [[6]].

{.reveal(when="blank-0")} Der Winkel jeder Drehung beträgt `"360°"/"Zähligkeit"`. Für der
Schneeflocke sind das `"360°"/6` = [[60]]°.

::: column(width=240)

    include svg/snowflake.svg

:::

---
> id: rotational-symmetry-1

Finde die Zähligkeit und den Drehwinkel für jede dieser Figuren:

::: column(width=220)
    img(src="images/clover.jpg" width=200 height=200)

{.caption} Zähligkeit [[4]],Winkel [[90]]°
::: column(width=220)
    img(src="images/playing-card.jpg" width=200 height=200)

{.caption} Zähligkeit [[2]], Winkel [[180]]°
::: column(width=220)
    img(src="images/flower.jpg" width=200 height=200)

{.caption} Zähligkeit [[8]], Winkel [[45]]°
:::

---
> id: rotational-symmetry-2
> goals: r0 r1 r2

Vervollständige diese Figuren, so dass sie rotationssymmetrisch sind:

::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(5,0),point(6,3),point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3))" style="fill: rgba(56,102,230,0.4)")
      path(x="polyline(point(5,0),point(6,3),point(9,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(11,4))")
      path(hidden x="polyline(point(9,4),point(6,5),point(5,8),point(4,5),point(1,4),point(4,3),point(5,0))" name="to0")

{.caption} Zähligkeit 4
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)" name="c1")
      path.fill.finished(hidden x="polygon(point(6,2),point(1,2),point(1,4),point(4,6),point(9,6),point(9,4))" style="fill: rgba(40,151,130,0.4)")
      path(x="polyline(point(5,2),point(1,2),point(1,4),point(4,6),point(5,6))" name="from1")
      path.red(x="segment(point(5,-1),point(5,9))")
      path(hidden x="from1.rotate(pi,c1)" name="to1")

{.caption} Zähligkeit 2
::: column(width=220)

    x-geopad.draw(width=220 height=180 grid=20 no-points): svg
      circle.red(x="point(5,4)")
      path.fill.finished(hidden x="polygon(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3),point(3,1),point(2,2))" style="fill: rgba(83,174,9,0.4)")
      path(x="polyline(point(5,3),point(3,1),point(2,2),point(4,4))")
      path.red(x="segment(point(5,-1),point(5,4))")
      path.red(x="segment(point(5,4),point(-1,4))")
      path(hidden x="polyline(point(4,4),point(2,6),point(3,7),point(5,5),point(7,7),point(8,6),point(6,4),point(8,2),point(7,1),point(5,3))" name="to2")

{.caption} Zähligkeit 4
:::

---

## Symmetriegruppen

> id: groups
> section: symmetry-groups

    // TIPP: Um verschiedene Konfigurationen zu erkennen, müssen wir die
    // vier Ecken in verschiedenen Farben hervorheben.

Einige Formen haben mehr als eine Symmetrie - schauen wir uns das
[Quadrat](gloss:square) als einfaches Beispiel an.

::: column(width=400 parent="padded-thin")

    .cubes
      img.cube.reveal(src="images/cube-0.svg" width=80 height=80 when="blank-1 blank-2 blank-3" delay=1000 animation="pop")
      img.cube.reveal(src="images/cube-1.svg" width=80 height=80 when="blank-1" animation="pop")
      img.cube.reveal(src="images/cube-2.svg" width=80 height=80 when="blank-2" animation="pop")
      img.cube.reveal(src="images/cube-3.svg" width=80 height=80 when="blank-3" animation="pop")
      img.cube.reveal(src="images/cube-4.svg" width=80 height=80 when="blank-0" animation="pop")
      img.cube.reveal(src="images/cube-5.svg" width=80 height=80 when="blank-0" delay=200 animation="pop")
      img.cube.reveal(src="images/cube-6.svg" width=80 height=80 when="blank-0" delay=400 animation="pop")
      img.cube.reveal(src="images/cube-7.svg" width=80 height=80 when="blank-0" delay=600 animation="pop")

::: column.grow(width=200)
Du hast bereits oben gezeigt, dass ein Quadrat [[4]] Spiegelachsen hat.

{.reveal(when="blank-0")} Es ist auch rotationssymmetrisch und zwar um [[90]]°,
[[180]]° und [[270]]°.

{.reveal(when="blank-1 blank-2 blank-3")} Und schließlich können wir uns als eine weitere besondere Art der Symmetrie das "Nichts tun" vorstellen
- denn das Ergebnis
ist (eh klar) das gleiche wie zuvor. Dies wird manchmal als die __Identität__ bezeichnet.

{.reveal(when="blank-1 blank-2 blank-3" delay=1000)} Insgesamt haben wir [[8]]
verschiedene "Symmetrien des Quadrats" gefunden.
:::

---
> id: add-symmetries
> goals: sum-0 sum-1

Jetzt können wir tatsächlich anfangen, mit diesen Symmetrien zu rechnen. Zum
Beispiel können wir zwei Symmetrien _addieren_ , um neue zu erhalten:

::: column(width=260)

    .text-center
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-1.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube(src="images/cube-2.svg" width=54 height=54)
    x-gesture(target=".sym-sum")

::: column(width=260)

    .text-center
      img.cube(src="images/cube-2.svg" width=54 height=54)
      mo +
      img.cube(src="images/cube-6.svg" width=54 height=54)
      mo =
      span.sym-sum.pending: img.cube.ani-sym(src="images/cube-4.svg" width=54 height=54)

:::

---
> id: calculator
> title: Symmetry Calculator
> goals: calculate

Immer wenn man zwei Symmetrien eines Quadrats addiert, erhält man eine neue. Hier ist ein
"Symmetrie-Rechner", mit dem du das selbst ausprobieren kannst:

    .calculator
      .display
        .operator +
        .operator =
        .clear ×
      .button + #[img.cube(src="images/cube-0.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-1.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-2.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-3.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-4.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-5.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-6.svg" width=40 height=40)]
      .button + #[img.cube(src="images/cube-7.svg" width=40 height=40)]

---
> id: symmetry-arithmetic

Verbringe einige Zeit damit, mit dem Symmetrie-Rechner herumzuspielen, und versuche, irgendwelche
gemeinsame Muster zu finden. Kannst du diese Beobachtungen vervollständigen?

* Das Addieren von zwei Drehungen ergibt immer eine [[Drehung|Spiegelung]] (oder die Identität).
* Das Addieren von zwei Spiegelungen ergibt immer eine [[Drehung|Spiegelung]] (oder die Identität).
* Das Addieren zweier Symmetrien in umgekehrter Reihenfolge ergibt
  [[manchmal ein anderes|immer ein anderes|immer das gleiche]] Ergebnis.
* Die Addition der Identität [[ändert nichts|bewirkt eine Spiegelung|führt zum Gegenteil]].

---
> id: group-axioms

Du hast vielleicht schon bemerkt, dass das Addieren __{.orange}von Symmetrien__ eigentlich
dem Addieren __{.green}von ganzen Zahlen__ sehr ähnlich ist:

    ol.proof
      
      li.r
        | Die Addition von zwei #[strong.orange Symmetrien]/#[strong.green ganzen Zahlen] ergibt immer eine andere #[strong.orange Symmetrie]/#[strong.green ganze Zahl]:
        .text-center.axiom 
          img.cube(src="images/cube-2.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-6.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-4.svg" width=32 height=32)
        .text-center.axiom 
          mn 12
          mo +
          mn 7
          mo =
          mn 19
        .next-step Weiter
      
      li.r.reveal(when="next-0")
        span.md Die Addition von zwei #[strong.orange Symmetrien]/#[strong.green ganzen Zahlen] ist [assoziativ](gloss:associative):
        .text-center.axiom 
          mfenced
            img.cube(src="images/cube-1.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-4.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="=") =
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          mfenced
            img.cube(src="images/cube-4.svg" width=32 height=32)
            mo +
            img.cube(src="images/cube-3.svg" width=32 height=32)
        .text-center.axiom
          mfenced #[mn 4]#[mo +]#[mn 2]
          mo +
          mn 5
          mo =
          mn 4
          mo +
          mfenced #[mn 2]#[mo +]#[mn 5]
        .next-step Weiter
      
      li.r.reveal(when="next-1")
        | Jede #[strong.orange Symmetrie]/#[strong.green ganze Zahl] hat eine #[strong inverse], eine andere #[strong.orange Symmetrie]/#[strong.green ganze Zahl] die, wenn man sie dazu addiert, die Identität ergibt:
        .text-center.axiom 
          img.cube(src="images/cube-1.svg" width=32 height=32)
          mo +
          img.cube(src="images/cube-3.svg" width=32 height=32)
          mo(value="= ) =") =
          img.cube(src="images/cube-0.svg" width=32 height=32)
        .text-center.axiom 
          mn 4
          mo +
          mn -4
          mo(value="=") =
          mn 0
        .next-step Weiter

---
> id: groups-1

In der Mathematik wird jede Menge von Elementen, die diese Eigenschaften hat, als
[__Gruppe__](gloss:group) bezeichnet. Einige Gruppen (wie die __{.orange}Symmetrien__ eines
Quadrats) haben nur eine begrenzte Anzahl von Elementen. Andere (wie die ganzen
__{.green}Zahlen__) sind unendlich.

In diesem Beispiel haben wir mit den acht Symmetrien des Quadrats begonnen. Tatsächlich hat
jede geometrische Form ihre eigene __Symmetriegruppe__. Sie alle haben unterschiedliche
Elemente, aber sie erfüllen immer die drei obigen Regeln.

Gruppen erscheinen überall in der Mathematik. Die Elemente können Zahlen oder
Symmetrien sein, aber auch Polynome, Permutationen, Matrizen, Funktionen … _alles_
, was die drei Regeln erfüllt. Die Grundidee der _Gruppentheorie_ ist, dass wir uns nicht
für die einzelnen Elemente interessieren, sondern nur dafür, _wie sie
sich gegenseitig beeinflussen_.

::: column.grow
So können beispielsweise die Symmetriegruppen verschiedener Moleküle den Wissenschaftlern
helfen, die Eigenschaften der entsprechenden Materialien vorherzusagen und zu erklären.

Gruppen können auch verwendet werden, um die Gewinnstrategie in Brettspielen, das
Verhalten von Viren in der Medizin, verschiedene Harmonien in der Musik und viele andere
Konzepte zu analysieren…
::: column(width=340)

    img(src="images/molecule.jpg" width=160 height=160 style="margin-right: 20px")
    img(src="images/virus.jpg" width=160 height=160)

{.caption} Die Eigenschaften des CCl<sub>4</sub>-Moleküls (links) und des Adenovirus
(rechts) werden durch ihre Symmetrien bestimmt.
:::

---

## Ornamentgruppen

> id: wallpaper-groups
> section: wallpaper-groups

In den vorangegangenen Abschnitten haben wir nun zwei verschiedene Arten von Symmetrie gesehen, die zwei verschiedenen Abbildungen
entsprechen: Drehungen und Spiegelungen. Aber
es gibt auch eine Symmetrie für die dritte Art der Kongruenzabbildung:
[[Verschiebungen|Verwirbelungen|Saltos]].

---
> id: wallpaper-groups-1
> goals: play-0 play-1

[__Verschiebungssymmetrie__](gloss:translational-symmetry) funktioniert nicht mit
einzelnen Objekten wie Blumen oder Schmetterlingen, sondern bei regelmäßigen Mustern
, die sich in alle Richtungen erstrecken:

::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      img(src="images/honeycomb.jpg" width=376 height=276 style="margin: 0 0 -36px -56px; max-width: none;")
      x-play-btn

{.caption} Sechseckige Honigwaben
::: column.grow

    .symmetry(style="width: 320px; height: 240px;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      img(src="images/tiling.jpg" width=376 height=240 style="margin-left: -56px; max-width: none;")
      x-play-btn

{.caption} Keramische Wandfliesen
:::

---
> id: footsteps

Neben der Spiegelungs-, Rotations- und Verschiebungssymmetrie gibt es sogar
eine vierte Art: [__Gleitspiegelungen__](gloss:glide-reflection). Dabei handelt es sich um
eine Kombination aus einer 
Spiegelung und einer Verschiebung in die Richtung der Spiegelachse.

    figure
      .footsteps
         img(src="images/footsteps.svg" width=650 height=120)
         img(src="images/footsteps.svg" width=650 height=120)
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")

---
> id: wallpaper-groups-2

Ein Muster kann auch mehr als eine Art von Symmetrie aufweisen. Und wir finden die [Symmetriegruppe](gloss:symmetry-group) eines Musters
, die alle seine verschiedenen Symmetrien
enthält, genau wie bei Quadraten.

Diese Gruppen sagen wenig darüber aus, wie das Muster _aussieht_ (z.B. seine
Farben und Formen), man erfährt nur wie es sich _wiederholt_. Mehrere verschiedene Muster können die gleiche Symmetriegruppe
haben - vorausgesetzt, sie werden auf die gleiche
Weise angeordnet und wiederholt.

::: column.grow

    .text-center
      img(src="images/wallpaper-1.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-2.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Diese beiden Muster haben die gleichen Symmetrien,
auch wenn sie sehr unterschiedlich aussehen. Bei Symmetrien geht es aber nicht um Farben oder oberflächliche Formen.
::: column.grow

    .text-center
      img(src="images/wallpaper-3.svg" width=150 height=150 style="margin: 0 10px")
      img(src="images/wallpaper-4.svg" width=150 height=150 style="margin: 0 10px")

{.caption} Diese beiden Muster haben auch die gleichen Symmetrien - auch wenn sie
den entsprechenden Mustern auf der linken Seite ähnlicher sind als einander.
:::

---
> id: wallpaper-groups-3

Es stellt sich heraus, dass es zwar unendlich viele mögliche Muster gibt, sie aber alle
eine von nur 17 verschiedenen Symmetriegruppen haben. Diese werden als __Ornamentgruppen
__ bezeichnet. Jede Ornamentgruppe wird durch eine Kombination von Verschiebungen,
Drehungen, Spiegelungen und Gleitspiegelungen definiert. Kannst du in diesen Beispielen die [
Drehpunkte](gloss:center-of-rotation) und die [
Spiegelungsachsen](gloss:axis-of-symmetry) erkennen?

    x-gallery(slide-width="320")
      div
        img(src="images/wallpapers/p1.svg" width=360, height=240)
        p.caption <strong>Gruppe p1</strong><br>Nur Verschiebungen
      div
        img(src="images/wallpapers/p2.svg" width=360, height=240)
        p.caption <strong>Gruppe p2</strong><br>zweizählige Drehung, Verschiebungen
      div
        img(src="images/wallpapers/p3.svg" width=360, height=240)
        p.caption <strong>Gruppe p3</strong><br>Dreizählige Drehungen (120°), Verschiebungen
      div
        img(src="images/wallpapers/p4.svg" width=360, height=240)
        p.caption <strong>Gruppe p4</strong><br>Vier zweizählige Drehungen (180°), Verschiebungen
      div
        img(src="images/wallpapers/p6.svg" width=360, height=240)
        p.caption <strong>Gruppe p6</strong><br>Zwei-, drei- und sechszählige Drehungen (60°), Verschiebungen
      div
        img(src="images/wallpapers/pm.svg" width=360, height=240)
        p.caption <strong>Gruppe PM</strong><br>Parallele Spiegelachsen, Verschiebungen
      div
        img(src="images/wallpapers/pmm.svg" width=360, height=240)
        p.caption <strong>Gruppe PMM</strong><br>Senkrechte Spiegelungen, zweizählige Drehungen, Verschiebungen
      div
        img(src="images/wallpapers/p4m.svg" width=360, height=240)
        p.caption <strong>Gruppe P4M</strong><br>Drehungen (2 + 4), Spiegelungen, Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/p6m.svg" width=360, height=240)
        p.caption <strong>Gruppe P6M</strong><br>Drehungen (2 + 6), Spiegelungen, Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/p3m1.svg" width=360, height=240)
        p.caption <strong>Gruppe P3M1</strong><br>Drehungen (3), Spiegelungen, Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/p31m.svg" width=360, height=240)
        p.caption <strong>Gruppe P31M</strong><br>Drehungen (3), Spiegelungen, Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/p4g.svg" width=360, height=240)
        p.caption <strong>Gruppe P4G</strong><br>Drehungen (2 + 4), Spiegelungen, Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/cmm.svg" width=360, height=240)
        p.caption <strong>Gruppe CMM</strong><br>Senkrechte Spiegelungen, Drehungen (2), Verschiebungen
      div
        img(src="images/wallpapers/pmg.svg" width=360, height=240)
        p.caption <strong>Gruppe PMG</strong><br>Spiegelungen, Gleitspiegelungen, Drehungen (2), Verschiebungen
      div
        img(src="images/wallpapers/pg.svg" width=360, height=240)
        p.caption <strong>Gruppe PG</strong><br>Parallele Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/cm.svg" width=360, height=240)
        p.caption <strong>Gruppe CM</strong><br>Spiegelungen, Gleitspiegelungen, Verschiebungen
      div
        img(src="images/wallpapers/pgg.svg" width=360, height=240)
        p.caption <strong>Gruppe PGG</strong><br>Senkrechte Gleitspiegelungen, Drehungen (2), Verschiebungen

Leider gibt es keinen einfachen Grund, warum es _17_ dieser Gruppen gibt.
Der Beweis dafür erfordert eine viel fortgeschrittenere Mathematik…

Stattdessen kannst du versuchen, deine eigenen sich wiederholenden Muster für jede der 17
Ornamentgruppen zu zeichnen:

---
> id: drawing
> title: Drawing Wallpaper Symmetries
> goals: draw-1 draw-2 switch

    include ./components/wallpaper
    x-wallpaper
    .other-students.reveal(when="draw-1 switch")
      h4 Beispiele von Zeichnungen anderer Schüler
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/wallpaper-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/wallpaper-3.png" width=240 height=160)

---
> id: crystallographic-groups

::: column.grow
Bei den Ornamentgruppen ging es um ebene, zweidimensionale Muster. Bei dreidimensionalen Mustern können wir etwas Ähnliches tun
: Man nennt sie
kristallographische Raumgruppen, und es gibt 219 davon!

Zu
diesen Gruppen gehören neben Verschiebungen, Spiegelungen, Drehungen und Gleitspiegelungen auch Symmetrien wie __Gleitebenen__ und __Schraubungen__ (stelle
dir die Bewegung beim Aufschrauben einer Flasche vor).
::: column(width=300)

    img(src="images/crystal.jpg" width=300 height=240)

{.caption} In diesem Kristallgitter,
das eine dreidimensionale Symmetriegruppe aufweist, sind die Moleküle von Bornitrid angeordnet.
:::

---

## Symmetrie in der Physik

> id: planets
> sectionBackground: dark stars
> section: symmetry-in-physics

Bisher waren alle Symmetrien, die wir betrachteten, in gewisser Weise _visuell_: sichtbare
Formen, Bilder oder Muster. Tatsächlich kann Symmetrie ein viel weitreichenderes Konzept sein:
_Widerstandsfähigkeit gegen Veränderungen_.

Wenn du zum Beispiel Apfelsaft genauso magst wie Orangensaft, dann ist
deine Vorliebe "symmetrisch" in Bezug auf die Abbildung, die Äpfel und
Orangen tauscht.

1915 stellte die deutsche Mathematikerin [Emmy Noether](bio:noether) fest, dass
etwas Ähnliches für die [Naturgesetze](gloss:laws-of-nature) gilt.

::: column.grow
Zum Beispiel sagt uns unsere Erfahrung, dass die Gesetze der Physik
überall im Universum die gleichen sind. Es spielt keine Rolle, ob man ein Experiment in
London, New York oder auf dem Mars durchführt - die Gesetze der Physik sollten immer die
gleichen sein. In gewisser Weise haben sie [[Verschiebungssymmetrie|Spiegelsymmetrie]].

{.reveal(when="blank-0")} Ebenso sollte es egal sein, ob wir ein
Experiment mit Blick auf den Norden oder Süden, den Osten oder den Westen durchführen: Die Naturgesetze
haben [[Drehsymmetrie|Gleitspiegelungssymmetrie]].

{.reveal(when="blank-1")} Und schließlich sollte es keine Rolle spielen, ob wir heute, morgen oder in einem Jahr ein
Experiment durchführen. Die Naturgesetze sind
"zeitsymmetrisch".
::: column(width=300)

    include svg/planets.svg

:::

---
> id: planets-1

Diese "Symmetrien" mögen zunächst recht bedeutungslos erscheinen, aber sie können uns tatsächlich
viel über unser Universum erzählen. Emmy Noether gelang es zu beweisen, dass jede
Symmetrie einer bestimmten physikalischen Größe entspricht, die _erhalten_ bleibt.

Zum Beispiel bedeutet Zeitsymmetrie, dass __Energie__ in unserem
Universum erhalten bleiben muss: Man kann Energie von einem Typ in einen anderen umwandeln (z.B. Licht, oder Wärme
oder Elektrizität), aber man kann niemals Energie erzeugen oder zerstören. Die Gesamtenergiemenge
im Universum wird immer konstant bleiben.

    figure
      x-media(src="images/cern.jpg" width=760 height=400 credit="© CERN")
      p.caption CERN ist der weltweit größte Partikelbeschleuniger. Wissenschaftler zerschlagen Elementarteilchen mit enormen Geschwindigkeiten, um mehr über ihre Eigenschaften zu erfahren. Kannst du die Person unten sehen, zum Größenvergleich?

::: column(width=220)

    x-media(src="images/higgs.png" width=220 height=150)
    p.caption Die Wege, die die Teilchenfragmente nach einer Kollision zurücklegen

::: column.grow
Es stellt sich heraus, dass Physiker allein durch das Wissen um die Symmetrie die meisten
Naturgesetze ableiten können, die das Universum bestimmen - ohne jemals ein
Experiment oder eine Beobachtung durchführen zu müssen.

Symmetrie kann sogar die Existenz von Elementarteilchen vorhersagen. Ein Beispiel ist
das berühmte __Higgs-Boson__: Es wurde in den 1960er Jahren von theoretischen
Physikern vorhergesagt, aber erst 2012 in der realen Welt beobachtet.
:::

---

## Ähnlichkeit

> id: dilations
> section: similarity

Bisher haben wir uns nur mit [[längentreuen|verformenden|visuellen]] Abbildungen beschäftigt.
_{span.reveal(when="blank-0")} Widmen wir uns jetzt einer Abbildung, bei der das nicht so ist: Eine
[__Streckung__](gloss:dilation) verändert die Abmessungen einer Figur, indem sie sie größer oder
kleiner macht._

---
> id: dilations-1

::: column.grow
Alle Streckungen haben ein [__Zentrum__](target:center) und einen [__Skalierungsfaktor__](->.scalee-target).
Das Zentrum ist der Bezugspunkt für die Streckung und der Skalierungsfaktor sagt uns
, wie stark die Figur gedehnt oder gestaucht wird.

Wenn der [Skalierungsfaktor](gloss:scale-factor) zwischen 0 und 1 liegt, ist das Bild
[[kleiner|größer]] als das Original. Wenn der Skalierungsfaktor größer als 1 ist, ist das
Bild [[größer|kleiner]] als das Original.
::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="C" cx=40 cy=35 target="center")

      circle(hidden name="a" x="point(140,55)")
      circle(hidden name="b" x="point(160,115)")
      circle(hidden name="c" x="point(60,130)")

      circle(hidden name="a1" x="a.subtract(C).scale(s).add(C)")
      circle(hidden name="b1" x="b.subtract(C).scale(s).add(C)")
      circle(hidden name="c1" x="c.subtract(C).scale(s).add(C)")

      path.fill.green(x="polygon(a,b,c)" label="A" label-colour="white")
      path.fill.blue(x="polygon(a1,b1,c1)" label="A’" label-colour="white")

      path.light.thin(x="segment(C,s<1?a:a1)")
      path.light.thin(x="segment(C,s<1?b:b1)")
      path.light.thin(x="segment(C,s<1?c:c1)")
    
{.text-center.scale-target} Skalierungsfaktor: ${s}{s|2|0,3,0.1}
:::

{.todo} COMING SOON – More on Dilations and Similarity

    // ---
    // > id: dilations-1
    // 
    // Here is how we can construct the dilation of a geometric shape:
    // 
    // ::: column(width=300)
    // {.todo} COMING SOON – Animation
    // ::: column.grow
    // First we draw rays from the center of dilation to every point in the shape.
    // 
    // Now let’s measure the distance of all these points from the center of dilation.
    // Then we can multiply the distance by the scale factor, and the measure the
    // image of the point along the same ray.
    // 
    // All that’s left is to connect the transformed points in the image … all done!
    // :::
    // 
    // ---
    // > id: similarity
    // 
    // ::: column.grow
    // For rigid transformations, the image is always [[congruent|larger|smaller]] to
    // the original – but this is [[no longer|still]] true for dilations. Instead, we
    // say that two shapes are [__similar__](gloss:similar). They have the same overall
    // shape, but not necessarily the same size.
    // 
    // The symbol for similarity is `∼` (similar to the symbol for congruence, which
    // was `≅`). In this example, we would write `A ∼ A'`.
    // 
    // ::: column(width=240)
    // {.todo} COMING SOON – Illustration
    // :::
    // 
    // ---
    // > id: perspective
    // 
    // ### Perspective Drawings
    // 
    // You might have noticed that these dilations with the connecting rays almost look
    // like __perspective drawings__. The center of dilation is called the __vanishing
    // point__, because it looks like this is where everything is “vanishing in the
    // distance”.
    // 
    // Find the vanishing point in the figure below:
    // 
    // {.todo} COMING SOON – Interactive
    // 
    // Now can you draw another house that matches the existing ones?
    // 
    // ---
    // > id: similar-polygons
    // 
    // ### Similar Polygons
    // 
    // Similarity can tell us a lot about shapes. For example, [circles](gloss:circle),
    // [squares](gloss:square) and [equilateral triangles](gloss:equilateral-triangle)
    // are [[always|sometimes|never]] similar. They might have different sizes, but
    // always the same general shape.
    // 
    // ::: column.grow
    // The two quadrilaterals on the right are similar. Our first important observation
    // is that in similar polygons, all the matching pairs of angles are
    // [congruent](gloss:congruent-angles). This means that
    // 
    // {.text-center} [_{.m-red}`∡ABC`_ `≅` _{.m-red}`∡A'B'C'`_](target:a)_{.space}_
    // [_{.m-blue}`∡BCD`_ `≅` _{.m-blue}`∡B'C'D'`_](target:b)  
    // [_{.m-green}`∡CDE`_ `≅` _{.m-green}`∡C'D'E'`_](target:c)_{.space}_
    // [_{.m-yellow}`∡DEA`_ `≅` _{.m-yellow}`∡D'E'A'`_](target:d)
    // 
    // The second important fact is that in similar polygons, all sides are scaled
    // __proportionally__ by the scale factor of the corresponding dilation. If the
    // scale factor is ${k}{k|1.5|0.5,2,0.1}, then
    // 
    // {.text-center} `|AB| ×` ${k} `= |A'B'|`_{.space}_`|BC| ×` ${k} `= |B'C'|`  
    // `|CD| ×` ${k} `= |C'D'|`_{.space}_`|DE| ×` ${k} `= |D'E'|`
    // 
    // We can instead rearrange these equations and eliminate the scale factor
    // entirely:
    // 
    // {.text-center} `|AB|/|A'B'| = |BC|/|B'C'| = |AB|/|A'B'| = |AB|/|A'B'|`
    // 
    //     // This proportional relationship is true not just for the sides of the
    //     // polygon, but also for properties like diagonals.
    // 
    // We can use this to solve real life problems that involve similar polygons – for
    // example finding the length of missing sides, if we know some of the other sides.
    // In the following section you will see a few examples.
    // ::: column(width=240)
    // 
    //     x-geopad.sticky(width=240 height=360): svg
    //       - var x = ['a', 'b', 'c', 'd']
    //       - var initial = {a:[50,70], b:[160,50], c:[200,110], d:[150,160]}
    //       - var next = {a:'b', b:'c', c:'d', d:'a'}
    //       - var prev = {a:'d', b:'a', c:'b', d:'c'}
    //       - var classes = {a:'red', b:'blue', c:'green', d:'yellow'}
    //       each l in x
    //         circle(name=l x=`point(${initial[l][0]},${initial[l][1]})` r=4 target=l)
    //         path(x=`angle(${prev[l]},${l},${next[l]})` target=l class=classes[l])
    //         path(x=`segment(${l},${next[l]})` target=`${l} ${next[l]}`)
    //         circle(name=l+'1' r=4 x=`${l}.subtract({x:120,y:90}).scale(k).rotate(3).add({x:120,y:270})` target=l)
    //         path(x=`angle(${prev[l]}1,${l}1,${next[l]}1)` target=l class=classes[l])
    //         path(x=`segment(${l}1,${next[l]}1)` target=`${l} ${next[l]}`)
    // :::
    // 
    // ---
    // > id: similar-triangles
    // 
    // ### Similar Triangles
    // 
    // The concept of similarity is particularly powerful with triangles. We already
    // know that the corresponding internal angles in similar polygons are equal.
    // 
    // For triangles, the opposite is also true: this means that if you have two
    // triangles with the same three angle sizes, then the triangles must be similar.
    // 
    // And it gets even better! We know that the internal angles in a triangle always
    // add up to [[180]]°. This means that if we know two angles in a triangle, we can
    // always work out the third one.
    // 
    // For similarity, this means that we also just need to check _two angles_ to
    // determine if triangles are similar. If two triangles have two angles of the same
    // size, then the third angle must also be the same in both.
    // 
    // This result is sometimes called the [__AA Similarity Condition__](gloss:triangle-aa)
    // for triangles. (The two _As_ stand for the two _angles_ we compare.)
    // 
    // ::: .theorem
    // If two angles in one triangle are congruent to two angles in another triangle,
    // the two triangles are similar.
    // :::
    // 
    // ---
    // > id: similar-triangles-1
    // 
    // Let’s have a look at a few examples where this is useful:
    // 
    // ::: column(width=320)
    // {.todo} COMING SOON – Animation
    // 
    // ::: column.grow
    // Here you can see the image of a large lighthouse. Together with a friend, you
    // want to measure the height of the lighthouse, but unfortunately we cannot climb
    // to the top.
    // 
    // It turns out that, very well hidden, the diagram contains two similar triangles:
    // one is formed by the lighthouse and its shadow, and one is formed by your friend
    // and her shadow.
    // 
    // Both triangles have one right angle at the bottom. The sun rays are parallel,
    // which means that the other two angles at the bottom are corresponding angles,
    // and also equal. By the AA condition for triangles, these two must be similar.
    // 
    // We can easily measure the length of the shadows, and we also know the height of
    // your friend. Now we can use the proportionality of sides in similar triangles
    // to find the height of the lighthouse:
    // 
    // {.todo} COMING SOON – Equation
    // 
    // Therefore the lighthouse is 1.5m tall.
    // :::
    // 
    // ---
    // > id: similar-triangles-2
    // 
    // ::: column(width=320)
    // {.todo} COMING SOON – Animation
    // ::: column.grow
    // We can use the same technique to measure distances on the ground. Here we want
    // to find the width of a large river. There is a big tree on one side of the
    // river, and I’ve got a stick that is one meter long.
    // 
    // Try drawing another two similar triangles in this diagram.
    // 
    // You can mark the point along the side of the river, that lies directly on the
    // line of sight from the end of the stick to the tree. Then we can measure the
    // distances to the stick, and to the point directly opposite the tree.
    // 
    // Once again, these two triangles are similar because of the AA condition. They
    // both have a right angle, and on pair of opposite angles.
    // 
    // According to the proportionality rule, this means that
    // 
    // {.todo} COMING SOON – Equation
    // 
    // Therefore the width of the river is 45 meters.
    // :::

---
> id: outro

Dreiecke sind nicht nur zum Messen von Entfernungen geeignet. Im nächsten Kurs
werden wir viel mehr über Dreiecke und ihre Eigenschaften erfahren.


    // ### Similarity on Rays
    //
    // Theorem: If a ray bisects an angle of a triangle, then it divides the
    // opposite side into segments that are proportional to the lengths of the
    // other two sides.
    // 
    // We can extend this theorem to a situation outside of triangles where we
    // have multiple parallel lines cut by transverals.
    // 
    // Theorem: If three or more parallel lines are cut by two transversals, then they
    // divide the transversals proportionally.
    // 
    // Think about a midsegment of a triangle. A midsegment is parallel to one side of
    // a triangle and divides the other two sides into congruent halves. The midsegment
    // divides those two sides proportionally.
    // 
    // Triangle Proportionality Theorem: If a line parallel to one side of a triangle
    // intersects the other two sides, then it divides those sides proportionally.
    // 
    // Triangle Proportionality Theorem Converse: If a line divides two sides of a
    // triangle proportionally, then it is parallel to the third side.


