# Kreise und Pi (π)

## Einführung

> section: introduction
> id: intro

::: column.grow

Solange es uns Menschen gibt, haben wir zum Himmel geschaut und versucht, das Leben auf der Erde mit der Bewegung von Sternen, Planeten und Mond zu erklären.


Die altgriechischen Astronomen entdeckten als erste, dass sich alle Himmelsobjekte auf regelmäßigen Bahnen, den so genannten __Umlaufbahnen__, bewegen.
 Sie glaubten, dass diese Umlaufbahnen
immer kreisförmig sind. Schließlich sind Kreise die “vollkommensten” aller Formen:
symmetrisch in alle Richtungen und damit eine passende Wahl für die unserem
Universum zugrundeliegende Ordnung.

::: column(width=320)

    x-media(src="images/geocentric.jpg" width=320 height=272)

{.caption}Die Erde steht im Mittelpunkt des _ptolemäischen Universums_.

:::

---
> id: radius
> goals: compass

Jeder Punkt auf einem [__Kreis__](gloss:circle) hat den gleichen Abstand von seinem Mittelpunkt.
 Das bedeutet, dass sie mittels eines [Zirkels](gloss:compass) gezeichnet werden können:

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(Math.PI/3,a),b.rotate(-2*Math.PI/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).normal.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} Es gibt drei wichtige Maße im Zusammenhang mit Kreisen, die du kennen solltest:


* {.reveal(when="compass" delay="1000")}Der [{.step-target.pill.b.red}Radius](target:r)
 ist der Abstand vom Mittelpunkt eines Kreises zur Kreislinie.
Der [{.step-target.pill.b.blue}Durchmesser](target:d)
 ist der Abstand zwischen zwei gegenüberliegenden Punkten auf einem Kreis. Er geht durch
 den Mittelpunkt, und seine Länge ist [[doppelt|halb|gleich]] groß wie der Radius.
 * {.reveal(when="blank-0")} Der [{.step-target.pill.b.green}Umfang](target:c)
 ist gleich der Länge der Strecke um einen Kreis.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Eine wichtige Eigenschaft von Kreisen ist, dass alle Kreise
[ähnlich](gloss:similar) sind. Du kannst das überprüfen, indem du zeigst, dass alle Kreise durch einfache [Translationen](gloss:translation) und [Dilatationen](gloss:dilation) exakt passend übereinander gelegt werden können:



    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Du erinnerst dich vielleicht daran, dass bei ähnlichen Vielecken das Verhältnis zwischen den entsprechenden Seiten immer konstant ist.
 Ähnliches gilt für Kreise: Das Verhältnis zwischen 
dem [Umfang](gloss:circle-circumference) und dem 
[Durchmesser](gloss:circle-diameter) ist für _alle Kreise_ gleich groß. Es beträgt immer
3,14159.... - eine geheimnisvolle Zahl namens [__Pi__](gloss:pi), die oft 
als griechischer Buchstabe _π_ für “p” geschrieben wird. Pi hat unendlich viele Dezimalstellen, die sich bis in alle Ewigkeit ohne ein bestimmtes Muster aneinanderreihen:


    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Wir haben hier ein Rad mit dem Durchmesser 1. Wenn du den Umfang “abrollst”, kannst du sehen, dass seine Länge genau [[`pi`|`2 * pi`|3]]] ist:


    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Bei einem Kreis mit dem Durchmesser _d_ ist der Umfang `u = π × d`. Ebenso ist
bei einem Kreis mit dem [Radius](gloss:circle-radius) _r_ der Umfang 

{.text-center} `u =` [[`2 π r`|`π r`|`π r^2`]].

---
> id: nature

Kreise sind vollkommen symmetrisch und haben keine “Schwachstellen” wie die
Ecken eines Vielecks. Dies ist einer der Gründe, warum sie
überall in der Natur zu finden sind:

::: column(width=130 parent="padded-thin")

    x-media(src="images/flower.jpg" width=130 height=130)

{.caption} Blumen

::: column(width=130)

    x-media(src="images/earth.jpg" width=130 height=130)

{.caption} Planeten

::: column(width=130)

    x-media(src="images/tree.jpg" width=130 height=130)

{.caption} Bäume

::: column(width=130)

    x-media(src="images/orange.jpg" width=130 height=130)

{.caption} Früchte

::: column(width=130)

    x-media(src="images/soap.jpg" width=130 height=130)

{.caption} Seifenblasen

:::

{.r} Und es gibt noch so viele andere Beispiele: von Regenbögen bis hin zu ins Wasser geworfenen Steinen. Fällt
dir sonst noch etwas ein? [Weiter](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Man hat außerdem festgestell, dass ein Kreis die Form mit der größten Fläche bei einem bestimmten
Umfang ist. Wenn du zum Beispiel ein Seil mit einer Länge von 100\ m hast und damit die 
größtmögliche Fläche umschließen willst, mußt du damit einen Kreis bilden (und nicht andere Formen
wie ein Rechteck oder Dreieck).

In der Natur können Objekte wie Wassertropfen oder Luftblasen _Energie sparen_, indem sie
kreisförmig oder kugelförmig werden und damit ihre Oberfläche reduzieren.

::: column(width=320)

    x-select.area-tabs
      div(data-value="0") Dreieck
      div(data-value="1") Quadrat
      div(data-value="2") Fünfeck
      div(data-value="3") Kreis
    svg(width=320 height=200)

{.caption} _Umfang_ = __{.m-green}100__, _Fläche_ = __${area}__


:::

---
> id: area
> goals: slider

### Die Fläche eines Kreises

Die Fläche eines Kreises berechnen - wie soll das denn gehen? Wir könnten die gleiche
Vorgehensweise, die wir bei der [Berechnung der Viereckflächen](/course/polygons-and-polyhedra/quadrilaterals) angewandt haben, versuchen:
Wir schneiden die Form in mehrere verschiedene Teile und legen diese dann zu einer
anderen Figur zusammen, von der wir bereits die Fläche kennen (z.B. ein Rechteck oder ein Dreieck).

Was es etwas komplizierter macht ist, dass wir, da Kreise gekrümmt sind, ein paar
Annäherungen treffen müssen:

::: column(width=340)

    svg.circle-area.red(width=340 height=245)
      defs
        marker#area-arrow(refX=4 refY=4 markerWidth=5 markerHeight=8 orient="auto-start-reverse")
          path(d="M 1 1 L 4 4 L 1 7" stroke-width=1)
      g.labels
        line.reveal(x1=62 y1=158 x2=62 y2=212 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=80 y1=226 x2=268 y2=226 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=50 y=190 when="blank-1") r
        text.reveal(x=165 y=241 when="blank-2") πr
    x-slider(steps=400)

::: column.grow

Hier siehst du einen Kreis, der in ${toWord(n1)} Tortenstücke unterteilt ist. Bewege den Schieberegler, um
die Tortenstücke in einer Reihe anzuordnen.

{.reveal(when="slider")}Wenn wir die Anzahl der Tortenstücke auf ${n1}{n1|6|6,30,2} erhöhen, beginnt
diese Form immer mehr wie ein [[Rechteck|Kreis|Quadrat]] auszusehen.

{.reveal(when="blank-0")} Die Höhe des Rechtecks entspricht dem 
[[Radius|Umfang|Durchmesser]] des Kreises,
_{span.reveal(when="blank-1")} die Breite des Rechtecks entspricht dem 
[[halben Umfang|Umfang|doppelten Radius]] des Kreises_
_{span.reveal(when="blank-2")} (Beachte, wie die Hälfte der Tortenstücke nach unten und
die andere Hälfte nach oben zeigt.)_

{.reveal(when="blank-2" delay=1000)} Daher beträgt die Gesamtfläche des Rechtecks
etwa `A = π r^2`.

:::

---
> id: area-1
> goals: slider

::: column(width=340)

    svg.circle-area.blue(width=340 height=245)
      g.labels
        line.reveal(x1=20 y1=156 x2=20 y2=206 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-1")
        line.reveal(x1=34 y1=218 x2=355 y2=218 marker-start="url(#area-arrow)" marker-end="url(#area-arrow)" when="blank-2")
        text.reveal(x=10 y=185 when="blank-1") r
        text.reveal(x=165 y=236 when="blank-2") 2πr
    x-slider(steps=400)

::: column.grow

Hier siehst du einen Kreis, der in ${toWord(n)} Ringe unterteilt ist. Wie zuvor kannst du den Schieberegler
bewegen, um die Ringe "gerade zu biegen".

{.reveal(when="slider")}Wenn wir die Anzahl der Ringe auf ${n2}{n2|4|2,12,1} erhöhen,
 beginnt diese Form immer mehr wie ein [[Dreieck|Rechteck|Trapez]]] auszusehen.

{span.reveal(when="blank-1")}Die Höhe des Dreiecks entspricht dem
 [[Radius|Durchmesser|Umfang]] des Kreises. 
_{.reveal(when="blank-0")}_ Die Basis des Dreiecks ist gleich 
[[der Umfang|der doppelte Durchmesser]] des Kreises._
_{span.reveal(when="blank-2")} Daher beträgt die Gesamtfläche des Dreiecks
ungefähr_

{.text-center.reveal(when="blank-2")}`A = 1/2 "Basis" × "Höhe" = π r^2`.

:::

---
> id: area-2

Wenn wir unendlich viele Ringe oder Tortenstücke verwenden könnten,
wären die obigen Näherungen perfekt - und sie ergeben beide die gleiche Formel für die Fläche eines Kreises:

{.text-center.r}`A = π r^2`.
[Weiter](btn:next)

---
> id: pi-approximations

### Berechnung von Pi

Wie du oben gesehen hast, ist `π = 3,1415926....` keine einfache ganze Zahl, und ihre 
Dezimalstellen gehen ewig weiter, ohne dass sich ein Muster wiederholt. Zahlen mit dieser Eigenschaft
werden als [__irrationale Zahlen__](gloss:irrational-numbers) bezeichnet, und das bedeutet, dass `π`
nicht als einfacher Bruch `a/b` ausgedrückt werden kann.

Es bedeutet auch, dass wir nie _alle_ Ziffern von Pi aufschreiben können - schließlich gibt
es unendlich viele. Altgriechische und chinesische Mathematiker berechneten die
ersten vier Dezimalstellen von Pi, indem sie Kreise mit 
regelmäßigen Vielecken annäherten. Beachte, wie das Vieleck, wenn du mehr Seiten hinzufügst, anfängt, [[
[immer mehr|immer weniger|genau]] wie ein Kreis auszusehen:

    figure: x-media(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-media(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665 gelang es [Isaac Newton](bio:newton), 15 Stellen zu berechnen. Heute können wir mit leistungsstarken Computern den Wert von Pi mit einer viel höheren Genauigkeit berechnen.



Der aktuelle Rekord liegt bei 31,4 Billionen Stellen. Ein gedrucktes Buch mit all diesen
Ziffern wäre etwa 400\ km dick - das ist die Höhe, in der die
[Internationale Raumstation](gloss:iss) die Erde umkreist!

Natürlich musst du dir nicht so viele Ziffern von Pi merken. Tatsächlich ist der
Bruch `22/7 = 3,142....` eine gute Annäherung.

:::

---
> id: pi-sequence

Ein Ansatz zur Berechnung von Pi ist die Verwendung unendlicher Zahlenreihen. Hier ist 
ein Beispiel, das 1676 von [Gottfried Wilhelm Leibniz](bio:leibniz) 
entdeckt wurde:

    p.text-center: span.math
      mi π
      mo(value="=") =
      mfrac #[mn 4]#[mn 1]
      mo –
      mfrac #[mn 4]#[mn 3]
      mo +
      mfrac #[mn 4]#[mn 5]
      mo –
      mfrac #[mn 4]#[mn 7]
      mo +
      mfrac #[mn 4]#[mn 9]
      mo –
      mfrac
        mn 4
        mrow.md [[11]]
      mo +
      mo …

{.reveal(when="blank-0")}Wenn wir mehr und mehr Terme dieser Reihe berechnen,
immer nach dem gleichen Muster, wird das Ergebnis sich immer mehr Pi annähern.

---
> id: pi-colours
> goals: hover

::: column.grow

Viele Mathematiker glauben, dass Pi eine noch seltsamere Eigenschaft hat: nämlich dass sie eine sogenannte 
__normale Zahl__ ist Das bedeutet, dass die Ziffern von 0 bis 9 völlig
zufällig auftreten, als ob die Natur einen 10-seitigen Würfel unendlich oft gewürfelt hätte, um den Wert von Pi zu
bestimmen.

Hier kannst du die ersten 100 Ziffern von Pi betrachten. Bewege den Zeiger über einige der Zellen, um zu sehen
, wie die Ziffern verteilt sind.

::: column(width=330)

    .pi-grid
      .pi-left
        .pi-cell 3
        .pi-operator .
      .pi-mid
        for d in '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'.split('')
          .pi-cell= d
      .pi-right: .pi-operator …

:::

---
> id: pi-digits
> goals: search

Wenn Pi normal ist, bedeutet das, dass du dir eine _beliebige_ Zahlenkette ausdenken kannst, und sie
wird irgendwo in den Ziffern von Pi erscheinen. Hier kannst du die erste
Million Ziffern von Pi durchsuchen - enthalten sie deinen Geburtstag?

    .box
      .box-title: h3 Eine Million Stellen von Pi
      .box-body.pi-controls
        | Suche nach einer Zahlenkette:
        input(type="text" pattern="[0-9]*" maxlength=12)
        .pi-warning
      x-pi-scroll.box-body
        .first-row 3.

---
> id: pi-movies

Wir könnten sogar ein ganzes Buch, wie Harry Potter, in eine sehr lange 
Zeichenkette umwandeln (a = 01, b = 02, und so weiter). Wenn Pi normal ist, wird diese Zeichenkette irgendwo in ihren Ziffern erscheinen
- aber es würde Millionen von Jahren dauern, bis genügend Ziffern berechnet
sind, um sie zu finden.

Pi ist leicht zu verstehen, aber von grundlegender Bedeutung für Naturwissenschaften und Mathematik.
 Das könnte ein Grund dafür sein, dass Pi in unserer Kultur ungewöhnlich beliebt geworden ist (zumindest im Vergleich zu anderen Themen der Mathematik)


::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi ist die geheime Kombination für die Tafel in "Nachts im Museum 2".

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink ("Simpsons") bringt einen Raum mit lauter Wissenschaftlern zum Schweigen, indem er sagt, dass Pi gleich 3 ist.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) deaktiviert einen bösartigen Computer, indem er ihn bittet, die letzte Ziffer von Pi zu berechnen.

:::

---
> id: pi-day

Es gibt sogar jedes Jahr einen _Pi day ("Pi-Tag")_
, der entweder auf den 14. März, weil `pi ≈ 3.14`, da das der Datumsschreibweise im englischsprachigen Raum entspricht, oder auf den 22. Juli fällt,
weil `pi ≈ 22/7`, also 22/7 (eine anderen Datumsschreibweise).

    figure: x-media(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")



--------------------------------------------------------------------------------



## Grad und Radiant

> section: radians
> id: degrees

Bisher haben wir in der Geometrie immer Winkel in [Grad](gloss:degrees) gemessen. Eine
__{.m-red}vollständige Umdrehung__ hat [[360]]°, eine __{.m-green}halbe__ hat 
[[180]]°, eine __{.m-yellow}Viertelumdrehung__ hat [[90]]°, und so weiter.

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a0" hidden)
      circle(x="point(80,80)" name="b0")
      circle(x="c0" hidden)
      path.red.fill(x="angle(c0,b0,a0)" round size=40)
      path(x="segment(a0,b0)")
      path(x="segment(b0,c0)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a1" hidden)
      circle(x="point(80,80)" name="b1")
      circle(x="c1" hidden)
      path.green.fill(x="angle(c1,b1,a1)" round size=40)
      path(x="segment(a1,b1)")
      path(x="segment(b1,c1)")

::: column(width=160)

    x-geopad(width=160 height=160): svg
      circle(x="point(150,80)" name="a2" hidden)
      circle(x="point(80,80)" name="b2")
      circle(x="c2" hidden)
      path.yellow.fill(x="angle(c2,b2,a2)" round size=40)
      path(x="segment(a2,b2)")
      path(x="segment(b2,c2)")

:::

---
> id: degrees-1

{.r}Die Zahl 360 ist sehr praktisch, da sie durch so viele andere Zahlen
 teilbar ist: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15 und so weiter. Das bedeutet, dass viele 
Bruchteile eines Kreises praktischerweise ganze Zahlen sind. Aber hast du dich jemals gefragt
, wie man überhaupt auf die Zahl 360 gekommen ist? [ Weiter](btn:next)

---
> id: babylon

::: column.grow

Tatsächlich sind 360 Grad eines der ältesten Konzepte der Mathematik, die wir heute
noch anwenden. Man kann es bis ins alte Babylon zurückverfolgen, 
wo es vor mehr als 5000 Jahren entwickelt worden ist!

Zu dieser Zeit war eine der wichtigsten Anwendungen der Mathematik 
die Astronomie. Die _Sonne_ bestimmt die vier Jahreszeiten, über die die Bauern 
beim Anbau von Pflanzen Bescheid wissen müssen. Ebenso bestimmt der _Mond_ die Gezeiten, was für 
die Fischer wichtig war. Die Menschen studierten auch die Sterne, um die Zukunft 
vorherzusagen oder mit den Göttern zu kommunizieren.

::: column(width=260)

    x-media(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption}Eine babylonische Tafel zur Berechnung von `sqrt(2)`

:::

---
> id: constellations
> goals: rotate

Astronomen bemerkten, dass sich die zu einer bestimmten Zeit während
 der Nacht sichtbaren Konstellationen jeden Tag ein wenig verschoben haben - bis sie 
nach etwa 360 Tagen wieder zu ihrem Ausgangspunkt zurückgekehrt waren. Und das mag der Grund gewesen sein, 
warum sie den Kreis in 360 Grad unterteilt haben.

    figure: .constellations
      .label.md Mitternacht am Tag ${day}
      .bg
      .wheel: svg(width=760 height=760 viewBox="0 0 760 760")
      .fg
    x-gesture(target=".constellations" offset="0,-120", slide="-160,0")

---
> id: constellations-1
> goals: video

Natürlich sind es eigentlich 365 Tage in einem Jahr (genauer gesagt 365,242199), 
aber babylonische Mathematiker arbeiteten mit einfachen Sonnenuhren, 
und diese Annäherung war völlig ausreichend.

Es funktionierte auch gut mit dem bestehenden 60er Zahlensystem (weil 
`6 xx 60 = 360`). Dieses System ist der Grund, warum wir immer noch 60 Sekunden in einer
Minute und 60 Minuten in einer Stunde verwenden - obwohl die meisten anderen Einheiten im [Dezimalsystem](gloss:base-10) angegeben 
werden (zB. ein Jahrzent für 10 Jahre, ein Jahrhundert für 100 Jahre).

::: column.grow

Für viele von uns ist die Winkelmessung in Grad eine Selbstverständlichkeit: Es gibt 
360°-Video, Skateboarder können 540° Drehungen ausführen, und 
jemand, der seine Entscheidung ändert, macht eine Kehrtwendung um 180°.

Aber aus mathematischer Sicht ist die Wahl von 360 
völlig willkürlich. Wenn wir auf dem Mars leben würden, könnte ein Kreis 670° und ein Jahr auf dem 
Jupiter sogar 10.475 Tage haben.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption}Der 540 McFlip, eine Drehung um 540°

:::

---
> id: radians

### Radiant

Anstatt einen Kreis in eine bestimmte Anzahl von Segmenten (z.B. 360 Grad) aufzuteilen, ziehen
Mathematiker es oft vor, Winkel mittels des [Umfangs](gloss:circle-circumference)
eines __Einheitskreises__(gloss:unit-circle) (eines Kreises mit dem Radius 1) zu messen.

::: column(width=280)

    x-geopad(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path.thin(x="circle(c,100)" name="circ")
      circle.move.blue.pulsate(cx=240 cy=140 name="a" project="circ")
      circle.move.green(cx=240 cy=140.4 name="b" project="circ")
      path.fill.green(x="angle(b,c,a)" label="${round(ang.deg)}°" name="ang" round)
      path.red.thick(x="arc(c,b,ang.rad)" label="${rad(ang.rad)}π")
      path.thin(x="segment(c,a)")
      path.thin(x="segment(c,b)")

::: column.grow

Ein _{span.var-action}ganzer Kreis_ hat einen Umfang
_{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")}Bei einer _{span.var-action}halben Drehung_ beträgt der
entsprechende Abstand entlang des Umfangs
_{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")}Bei einer _{span.var-action}Viertelumdrehung_ beträgt der
Abstand entlang des Umfangs
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")}Und so weiter: Diese Art der Winkelmessung wird als 
[__Radiant („Bogenmaß“)__](gloss:radians) bezeichnet (als Eselsbrücke könntest du dir “Radiusanteile” merken).

:::

---
> id: radians-conversion

Jeder Winkel in Grad hat dabei eine gleichwertige Größe in Radiant. Die Umrechnung zwischen den 
beiden ist sehr einfach - so wie man zwischen anderen Einheiten wie Metern und 
Kilometern oder Celsius und Fahrenheit umrechnen kann:

{.text-center} __{.m-red} 360°__ _{span.space}=_ __{.m-green} 2*π* rad__

::: column(width=180 parent="padded-thin")

{.text-center} _{span.rotate.left}`=>`_  
__{.m-red} 1°__ _{span.space}=_ [[`pi/180`|`180pi`|`360/pi`]] __{.m-green} rad__

::: column(width=180)

{.text-center} _{span.rotate.right}`=>`_  
__{.m-green} 1 rad__ _{span.space}=_ [[`180/pi`|`180-pi`|`2pi-360`]] __{.m-red} °__

:::

---
> id: radians-table

Du kannst den Radiantwert entweder als Vielfaches von _π_ oder als 
einzelne Dezimalzahl schreiben. Kannst du diese Tabelle mit den entsprechenden 
Winkelgrößen in Grad und Radiant ausfüllen?

| __{.m-green}Grad__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-red}Radiant__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Zurückgelegte Strecke

Man kann sich Radiant als die "zurückgelegte Wegstrecke" entlang des Umfangs 
eines Einheitskreises vorstellen. Dies ist besonders nützlich bei der Arbeit mit Objekten, 
die sich auf einer Kreisbahn bewegen.

::: column.grow

Zum Beispiel umkreist die [Internationale Raumstation](gloss:iss) die Erde einmal alle 1,5\ Stunden.
 Das bedeutet, dass ihre __Drehgeschwindigkeit__ [[`(2 pi)/1.5`| 
`1.5/(2 pi)`|`1.5 *  pi`]] Radiant pro Stunde beträgt.

{.reveal(when="blank-0")}In einem [Einheitskreis](gloss:unit-circle) ist die 
Drehgeschwindigkeit gleich der _tatsächlichen_, Geschwindigkeit, da die Länge des Umfangs 
gleich einer vollen Umdrehung in Radiant ist (beide sind `2pi`).

{.reveal(when="blank-0" delay=1000)}Der Radius der ISS-Umlaufbahn beträgt 6800\ km,
was bedeutet, dass die _tatsächliche_ Geschwindigkeit der ISS [[`(2 pi)/1.5 xx 6800`| `
(2 pi)/1.5 ÷ 6800`|`6800/(2 * pi)`]] _{span.reveal(when="blank-1")}= 28483 km
pro Stunde betragen muss_

::: column(width=300)

    x-geopad.r(width=300 height=300)
      .earth
      svg.r
        circle(x="point(150,150)" name="c")
        circle(x="point(280,150)" name="a")
        circle(x="a.rotate(p*2*pi,c)" name="b" hidden)
        path.red(x="arc(c,a,p*2*pi)")
        path.fill(x="angle(a,c,b)" label="${round(2*p,1)}π" round)
        path.red(x="segment(c,a)")
        path.red(x="segment(c,b)")
      .var.iss(style="transform: translate(${a.rotate(p*2*pi,c).x}px,${a.rotate(p*2*pi,c).y}px) rotate(${(p+0.25)*2*pi}rad)")
      .time.var ${round(p*1.5,1)}h
      x-play-btn

:::

---
> id: radians-distance-1

Wie du siehst sind in diesem Beispiel Radiant die viel bequemere Einheit 
als Grad. Sobald wir die Drehgeschwindigkeit kennen, müssen wir einfach mit dem
Radius multiplizieren, um die tatsächliche Drehgeschwindigkeit zu erhalten.

Hier ist ein weiteres Beispiel: Dein Auto hat Räder mit einem Radius von 0,25\ m. Wenn du mit einer Geschwindigkeit von 20\ m/s
fährst, drehen sich die Räder deines Autos mit [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = 0,0125`]] Radiant pro Sekunde
_{span.reveal(when="blank-0")}(oder `80/(2pi) = 13` Umdrehungen pro Sekunde)_

---
> id: radians-trig

### Trigonometrie

Für die meisten einfachen Geometrieaufgaben sind Grad und Radiant völlig 
austauschbar - Du kannst entweder wählen, welche du bevorzugst, 
oder in der Frage wird schon festgelegt, in welcher Einheit man antworten soll. Sobald du dich jedoch tiefer
mit [Trigonometrie](gloss:trigonometry) oder [Infinitesimalrechnung ](gloss:calculus) auseinandersetzt,
wirst du feststellen, dass Radiant viel bequemer zu handhaben sind als das Gradmaß.

::: column.grow

Die meisten Taschenrechner verfügen über eine [spezielle Taste](->.button.mode), um zwischen
Grad und Radiant zu wechseln. Trigonometrische Funktionen wie [__sin__](gloss:sin),
[__cos__] (gloss:cos)und __tan__ nehmen Winkel als Eingabe an, und 
ihre inversen Funktionen __arcsin__, __arccos__ und __arctan__ geben Winkel zurück. Die 
Einstellung des aktuellen Taschenrechners bestimmt, welche Einheiten für diese Winkel verwendet werden.

Versuche folgende Rechnungen mit dem Rechner nachzuvollziehen

{.text-center} sin(30°) = [[0.5]] _{span.eqn-gap}_ cos(1°) = [[0.999]]<br>
sin(30 rad) = [[-0.988]] _{span.eqn-gap}_ cos(1 rad) = [[0.54]]

::: column(width=300)

    .calculator
      .display
        span
        .setting DEG
      .button.num 7
      .button.num 8
      .button.num 9
      .button.wide sin
      .button.num 4
      .button.num 5
      .button.num 6
      .button.wide cos
      .button.num 1
      .button.num 2
      .button.num 3
      .button.wide tan
      .button.num 0
      .button .
      .button C
      .button.wide.mode mode

:::

---
> id: small-angle

Die Verwendung von Radiant hat einen besonders interessanten Vorteil bei der Verwendung 
der [__Sinus-Funktion__](gloss:sin). Wenn `θ` ein sehr kleiner Winkel ist (weniger als 20° oder 0,3 rad),
dann gilt `"sin"(θ) ≈ θ`. Zum Beispiel,

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")}Dies wird als __Kleinwinkelnäherung__ bezeichnet und 
kann bestimmte Gleichungen, die trigonometrische Funktionen enthalten, erheblich vereinfachen.
Wir werden darauf später noch näher eingehen.



--------------------------------------------------------------------------------



## Tangenten, Sehnen und Kreisbögen

> section: tangets-chords-arcs
> id: circle-parts

In den vorangegangenen Abschnitten hast du die Bezeichnungen für 
die verschiedenen Teile eines Kreises gelernt - wie Mittelpunkt, Radius, Durchmesser und Umfang.
Es gibt jedoch im Zusammenhang mit Kreisen viele geometrische Elemente, 
die wir zur Lösung komplexerer Aufgaben benötigen:

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle(x="point(150,150)" name="x")
      
      path.teal.fill.reveal(x="sector(x,d1,Math.PI/2.5)" target="sector" when="next-3" label="Sektor" label-colour="white")
      path.purple.fill.reveal(x="arc(x,b1,Math.PI/2.5)" target="segment" when="next-4" label="Segment")
      
      path.black(x="circle(x,100)" name="c")
      
      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Secant" target="secant")
      
      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Sehne" target="chord" when="next-0" animation="draw")
      
      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangente" target="tangent" when="next-1" animation="draw")
      
      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,Math.PI/2.5)" label="Kreisbogen" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r}Eine [{.red}Sekante](pill:secant) ist eine Gerade, die einen Kreis in 
zwei Punkten schneidet. [Weiter](btn:next)
* {.r.reveal(when="next-0")}Eine [{.green}Sehne](pill:chord) ist eine Strecke, 
deren Endpunkte auf dem Umfang eines Kreises liegen. [Weiter](btn:next)
* {.r.reveal(when="next-1")}Eine [{.blue}Tangente](pill:tangent) ist eine Gerade, die 
einen Kreis an genau einem Punkt berührt. Man nennt ihn den 
__Berührungspunkt__. [Weiter](btn:next)
* {.r.reveal(when="next-2")}Ein [{.yellow}Kreisbogen](pill:arc) ist ein Ausschnitt aus 
dem Umfang eines Kreises. [Weiter](btn:next)
* {.r.reveal(when="next-3")}Ein [{.teal} Sektor](pill:sector) ist ein Teil des 
Inneren eines Kreises, begrenzt durch einen _Kreisbogen_ und _zwei Radien_. 
[Weiter](btn:next)
* {.r.reveal(when="next-4")}Und ein [{.purple} Segment](pill:segment) ist ein
 Teil des Inneren eines Kreises, begrenzt durch einen _Kreisbogen_ und _eine Sehne_.
  [Weiter](btn:next)

:::

---
> id: circle-parts-1

In diesem Abschnitt werden wir uns mit der Beziehung zwischen all diesen Elementen befassen
und Theoreme zu ihren Eigenschaften beweisen. Machen dir jetzt einmal keine Sorgen, dass du dir alle
Definitionen merken musst - Du kannst jederzeit das
[Glossar](->.footer-link[data-modal=glossarym]) verwenden.

---

### Tangenten

{.todo} KOMMT BALD!

    // https://www.mathopenref.com/tangentline.html
    // https://www.mathopenref.com/consttangents.html
    // https://www.mathopenref.com/consttangent.html

    // __[CC] Construct a tangent line from a point outside a given circle to the circle.__
    // 
    // Point of Tangency: Der Punkt, an dem eine Tangente den Kreis berührt.
    // 
    //  Die Tangente und der bis zum Berührungspunkt gezeichnete Radius haben eine eindeutige
    // Beziehung. Let’s investigate it here.
    // 
    // _Tangent to a Circle Theorem_: A line is tangent to a circle if and only if the
    // line is perpendicular to the radius drawn to the point of tangency.
    // 
    // To prove this theorem, the easiest way to do so is indirectly (proof by
    // contradiction). Also, notice that this theorem uses the words “if and only if,”
    // making it a biconditional statement. Therefore, the converse of this theorem is
    // also true. Now let’s look at two tangent segments, drawn from the same external
    // point. If we were to measure these two segments, we would find that they are equal.
    // 
    // _Two Tangents Theorem_: If two tangent segments are drawn from the same external
    // point, then the segments are equal.
    //
    // Tangents are actually a much more universal concept,
    // Tangent Circles: Two or more circles that intersect at one point.
    // Two circles can be tangent to each other in two different ways, either
    // internally tangent or externally tangent.

---

### Sehnen

{.todo} KOMMT BALD!

    // Eine Sehne ist eine Strecke, deren Endpunkte auf einem Kreis liegen. Der Durchmesser ist die
    // längste Sehne in einem Kreis. There are several theorems that explore the
    // properties of chords.
    // 
    // Chord Theorem #1: In the same circle or congruent circles, minor arcs are
    // congruent if and only if their corresponding chords are congruent.
    // 
    // Notice the “if and only if” in the middle of the theorem. This means that Chord
    // Theorem #1 is a biconditional statement. Taking this theorem one step further,
    // any time two central angles are congruent, the chords and arcs from the
    // endpoints of the sides of the central angles are also congruent. In both of
    // these pictures, BE≅CD and BEˆ≅CDˆ. In the second picture, we have △BAE≅△CAD
    // because the central angles are congruent and BA≅AC≅AD≅AE because they are all
    // radii (SAS). By CPCTC, BE≅CD.
    // 
    // Investigation: Perpendicular Bisector of a Chord
    // 1. Draw a circle. Label the center A. 
    // 2. Draw a chord in ⨀A. Label it BC.
    // 3. Find the midpoint of BC by using a ruler. Label it D. 
    // 4. Connect A and D to form a diameter. How does AD relate to the chord, BC? 
    // 
    // Chord Theorem #2: The perpendicular bisector of a chord is also a diameter.
    // In the picture to the left, AD⊥BC and BD≅DC. From this theorem, we also notice
    // that AD also bisects the corresponding arc at E, so BEˆ≅ECˆ.
    // 
    // Chord Theorem #3: If a diameter is perpendicular to a chord, then the diameter
    // bisects the chord and its corresponding arc.
    // 
    // Investigation: Properties of Congruent Chords
    // 1. Draw a circle with a radius of 2 inches and two chords that are both 3
    //    inches. Label as in the picture to the right. This diagram is drawn to scale. 
    // 2. From the center, draw the perpendicular segment to AB and CD.
    // 3. Erase the arc marks and lines beyond the points of intersection, leaving FE
    //    and E. Find the measure of these segments. What do you notice? 
    // 
    // Chord Theorem #4: In the same circle or congruent circles, two chords are
    // congruent if and only if they are equidistant from the center.
    // 
    // Recall that two lines are equidistant from the same point if and only if the
    // shortest distance from the point to the line is congruent. The shortest distance
    // from any point to a line is the perpendicular line between them. In this
    // theorem, the fact that FE=EG means that AB and CD are equidistant to the center
    // and AB≅CD.

    // Concentric Circles: Two or more circles that have the same center, but different radii.
    // Congruent Circles: Two or more circles with the same radius, but different centers.

---
> id: earth-arc

### Kreisbögen und Sektoren

::: column.grow

Die meisten Wissenschaftler im antiken Griechenland waren sich einig, dass die Erde eine Kugel ist. Es gab
dafür viele Hinweise: von Schiffen, die auf See hinter dem Horizont verschwanden, bis hin zur
Kreisbewegung der Sterne in der Nacht.

Leider wusste niemand genau, _wie groß_ die Erde war - bis etwa 200 v. Chr.,
als der Mathematiker [Eratosthenes](bio:eratosthenes) eine geniale Möglichkeit
fand, den Erdradius mit Hilfe einfachster Geometrie zu bestimmen. Alles, was wir benötigen, ist etwas mehr
Wissen über die Kreisbögen und Sektoren eines Kreises.

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: arcs

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ" label="A")
      circle.move(cx=85 cy=60 name="b" project="circ" label="B")
      
      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sektor" target="sector" label-colour="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Kreisbogen" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

Wie du im Diagramm sehen kannst, ist ein [{.red} Kreisbogen](pill:arc) ein Teil des
[[Umfangs|Durchmesser|Radius]] eines Kreises, und ein [{.yellow} Sektor](pill:sector)
ist ein Teil des [[Kreisinhalts|Radius|Umfangs]] eines Kreises.

::: .reveal(when="blank-0 blank-1")
Der Kreisbogen zwischen zwei Punkten _A_ und _B_ wird oft als `§arc(AB)` geschrieben. Diese
Definition ist etwas zweideutig: Es gibt einen [{.purple} zweiten Kreisbogen](pill:major)
, der _A_ und _B_ verbindet, aber den anderen Weg um den Kreis herum geht.

Der kleinere der beiden Bögen wird als __Minor__ bezeichnet, der größere
als __Major__. Wenn die Punkte _A_ und _B_ genau gegenüberliegen, haben
beide Bögen die gleiche Länge und sind [[Halbkreise|Durchmesser|Umfänge]]].
:::

:::

---
> id: arcs-1

::: column.grow

Um die Länge eines Bogens oder die Fläche eines Sektors zu ermitteln, müssen wir den
entsprechenden Winkel in der Mitte des Kreises kennen: dieser wird als
[{.blue}Mittelpunktswinkel](pill:angle) bezeichnet.

Beachte, dass Bogen, Sektor und Winkel jeweils den _gleichen Anteil_ eines
Vollkreises einnehmen. Wenn beispielsweise der [{.blue} Mittelpunktswinkel](pill:angle)
_{span.var-action}90°_ ist, nimmt er [[ein Viertel|die Hälfte|ein Drittel]] von einem
[{.teal}Vollkreis](pill:fangle) ein.

::: .reveal(when="blank-0")
Das bedeutet, dass die [{.red} Länge des Kreisbogens](pill:arc) auch `1/4` des
[{.purple}gesamten Umfangs](pill:circ) des Kreises ist, und die [{.yellow} Fläche
des Sektors](pill:sector) `1/4` der [{.orange} gesamten Fläche](pill:area) 
des Kreises.

Wir können diese Beziehung in einer Gleichung ausdrücken:

{.text-center} `§ "Kreisbogenlänge" / "Umfang" = blank("Sektorfläche","Kreisradius","Winkelfläche") / "Kreisfläche" = "Mittelpunktswinkel" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")
      
      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sektor" target="sector" label-colour="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Kreisbogen" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")
      
      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Jetzt können wir diese Gleichungen neu anordnen, um die Variable zu bestimmen, die uns
interessiert. Zum Beispiel,

::: column(width=320 parent="padded-thin")

| [{.red}Kreisbogenlänge](pill) | = | `"Umfang" × c/360` |
|                          | = | `2 π r × c/360`          |
{.eqn-system}

::: column(width=320)

| [{.yellow}Sektorfläche](pill) | = | `"Kreisfläche" × c/360` |
|                              | = | `π r^2 × c/360`         |
{.eqn-system}

:::

wobei _r_ der Radius des Kreises ist und _c_ die Größe des
Mittelpunktswinkels ist.

    // What the formulae are doing is taking the area of the whole circle, and
    // then taking a fraction of that depending on what fraction of the circle
    // the sector fills.

    // The length of an arc is the distance along the curved line of the
    // circumference of the circle. It is slightly longer than the straight
    // line connecting the same two points (the chord).

---
> id: arcs-rad

Wenn der Mittelpunktswinkel 
in [Radiant](gloss:radians) anstatt in [Grad](gloss:degrees) angegeben wird, können wir die gleichen Gleichungen verwenden, müssen aber 
360° durch [[`2 π`|`1/2 π`|`π`]] ersetzen:

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [{.red}Kreisbogenlänge](pill) | = | `2 π r × c/(2π)` |
|                          | = | `r × c`          |
{.eqn-system}

::: column(width=320)

| [{.yellow}Sektorfläche](pill) | = | `π r^2 × c/(2π)` |
|                              | = | `1/2 r^2 c`      |
{.eqn-system}

:::

Beachte, wie die Gleichungen viel einfacher werden, und _π_ überall weggekürzt wird, 
da, wie du dich vielleicht erinnern kannst, die [Definition von
Radiant](/course/circles-and-pi/radians#radians) im Grunde genommen nichts anderes als die Länge eines
Kreisbogens in einem Kreis mit dem Radius 1 ist.

Nun wollen wir uns ansehen, wie wir Kreisbögen und Sektoren verwenden können, um den Umfang der 
Erde zu berechnen. [ Weiter](btn:next)
:::

---
> id: eratosthenes

Im alten Ägypten gab es am Nil eine Stadt namens _Syene_. Syene war
berühmt für einen Brunnen mit einer seltsamen Eigenschaft: jedes Jahr 
zu einem bestimmten Zeitpunkt - mittags am 21. Juni, dem Tag der _Sommersonnenwende_ - spiegelte sich 
das Sonnenlicht am Grund des Brunnens. Zu diesem Zeitpunkt wurde der Boden des Brunnens
beleuchtet, aber nicht die Seitenwände seines Schachts. Die Sonne stand also direkt über
dem Brunnen.

::: column(width=300)

    x-media(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Die alten Ägypter haben lange Strecken gemessen, indem sie die Anzahl der
Schritte gezählt haben, die sie gemacht haben, um diese abzugehen.

::: column(width=300)

    x-media(src="images/well.jpg" width=300 height=300 lightbox)

{.caption}Einige Quellen sagen, dass der “Brunnen von Eratosthenes” auf der Flussinsel _Elephantine_
im Nil lag.

:::

Der Mathematiker [Eratosthenes](bio:eratosthenes) lebte in _Alexandria_, etwa
800\ km nördlich von Syene, wo er Direktor der berühmten „großen Bibliothek“ war. Im
Stadtzentrum von Alexandria stand ein Obelisk, ein hohes, schmales Denkmal mit einer
pyramidenförmigen Spitze.

Eratosthenes bemerkte, dass der Obelisk
am Mittag des Tages der Sommersonnenwende einen Schatten warf - was bedeutete, dass die Sonne hier _nicht_ direkt über ihm stand. Er 
schloss daraus, dass dies an der Krümmung der Erde liegen musste, und erkannte, dass dieser Umstand zur 
Berechnung des Umfangs der Erde verwendet werden konnte.

---
> id: eratosthenes-1

::: column.grow

{.r}Hier siehst du den Brunnen in Syene sowie den Obelisken in Alexandria, 
die Sonnenstrahlen fallen direkt in den Brunnen, treffen aber schräg auf den Obelisken und
werfen einen Schatten. [Weiter](btn:next)

::: .reveal(when="next-0")
Eratosthenes machte eine Messung des [{.teal} Winkels](pill:angle1) dieses Schattens. 
Der Winkel betrug 7,2°. Dieser Wert muss mit dem [{.purple} Mittelpunktswinkel](pill:angle2) des
[{.red}Kreisbogens](pill:arc) von Alexandria nach Syene übereinstimmen, da es sich bei beiden um
[[Wechselwinkel|Komplementärwinkel|Supplementärwinkel]] handelt.
:::

::: .reveal(when="blank-0")
Nun können wir die Formel für die Kreisbogenlänge verwenden, die wir oben hergeleitet haben:

{.text-center} `§pill("Kreisbogenlänge","red","arc") / pill("Umfang","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
Wenn wir diese umformen, stellen wir fest, dass der Umfang der Erde sich so berechnen lässt:

{.text-center} `§pill("Erdumfang","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`
:::

::: .reveal(when="blank-2")
Wie wir wissen, ist der Umfang eines Kreises `u = 2 pi r`, also ist der
Radius der Erde

{.text-center} `§r_"Erde" = (40000 "km") / (2 pi) ≈ 6400 "km"`.
:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#1f7aff")
      
        circle(x="point(150,250)" name="c" hidden)
        circle(x="point(150,120)" name="a" hidden)
        circle.move.pulsate(cx=80 cy=140 name="b" project="arc(c,point(64,155),1.47)")
        circle(x="c.add(b.subtract(c).scale(1.465))" name="d" hidden)
    
        path.shadow(x="triangle(c,d,point(d.x,c.y))")
        path.earth(d="M153,120,152,150h-4l-.95-30a130,130,0,1,0,5.9,0Z" fill="url(#grad1)")
        path.earth-cover.fill(x="circle(c,130)")
        
        path.red.thick.reveal(when="next-0" animation="draw" x="arc(c,b,angle(b,c,a).rad).minor" target="arc")
        path.fill.teal.reveal(when="next-0" x="angle(c,d,point(d.x,c.y)).sup" target="angle1")
        path.fill.purple.reveal(when="next-0" x="angle(b,c,a).sup" name="ang" target="angle2")
        path.thin.white.reveal(when="next-0" animation="draw" x="segment(c,b)")
        path.blue.transparent(x="circle(c,130)" target="circ")
        
        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 x-x="${b.x-4}" x-y="${b.y-60}" style="transform: rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

Eratosthenes' Messung war eines der wichtigsten Experimente der 
Antike. Seine Schätzung der Größe der Erde war überraschend genau, besonders 
wenn man bedenkt, dass er nur Zugang zu sehr einfachen Messwerkzeugen hatte.

::: column(width=280)

    x-media(src="images/obelisk.jpg" width=280 height=450 lightbox)

::: column.grow

Natürlich gestaltet es sich etwas schwierig, seine ursprünglichen Ergebnisse in moderne 
Einheiten wie Kilometer umzuwandeln. Im antiken Griechenland wurde die Entfernung in _Stadien_
(ca. 160 m) gemessen, aber es gab keinen allgemein gültigen Standard dafür. Jedes Gebiet verwendete eine
etwas andere Länge, und wir wissen nicht, welche Eratosthenes verwendet hat.

In den folgenden Jahrhunderten versuchten die Wissenschaftler, den
Radius der Erde mit anderen Methoden zu berechnen - manchmal mit sehr unterschiedlichen und falschen Ergebnissen.

Es war eine dieser falschen Messungen, die Christoph Kolumbus veranlasste, von Portugal aus
nach Westen zu segeln. Er nahm an, dass die Erde viel kleiner war, als sie tatsächlich 
ist, und hoffte, Indien zu erreichen. Tatsächlich gelangte er auf einen anderen Kontinent 
dazwischen: den amerikanischen.

:::

---

### Segmente

{.todo} KOMMT BALD!

    // The last part of a circle that we can find the area of is called a segment, not
    // to be confused with a line segment. A segment of a circle is the area of a
    // circle that is bounded by a chord and the arc with the same endpoints as the
    // chord. The area of a segment is Asegment=Asector−A△ABC



--------------------------------------------------------------------------------



## Die Kreissätze

> section: circle-theorems
> sectionStatus: dev

https://www.mathsisfun.com/geometry/circle-theorems.html
https://mathsmadeeasy.co.uk/gcse-maths-revision/circle-theorems-gcse-revision-and-worksheets/
http://amsi.org.au/teacher_modules/Circle_Geometry.html

__[CC] Identify and describe relationships among inscribed angles, radii, and
chords. Include the relationship between central, inscribed, and circumscribed
angles; inscribed angles on a diameter are right angles; the radius of a circle
is perpendicular to the tangent where the radius intersects the circle.__

An inscribed angle is an angle with its vertex is the circle and its sides
contain chords. The intercepted arc is the arc that is on the interior of the
inscribed angle and whose endpoints are on the angle. The vertex of an inscribed
angle can be anywhere on the circle as long as its sides intersect the circle to
form an intercepted arc.

__Inscribed Angle Theorem__
The measure of an inscribed angle is half the measure of its intercepted arc.
To prove the Inscribed Angle Theorem, you would need to split it up into three
cases, like the three different angles drawn from the Investigation.

__Congruent Inscribed Angle Theorem__
Inscribed angles that intercept the same arc are congruent.

__Inscribed Angle Semicircle Theorem__
An angle that intercepts a semicircle is a right angle.

In the Inscribed Angle Semicircle Theorem we could also say that the angle is
inscribed in a semicircle. Anytime a right angle is inscribed in a circle, the
endpoints of the angle are the endpoints of a diameter. Therefore, the converse
of the Inscribed Angle Semicircle Theorem is also true.

When an angle is on a circle, the vertex is on the circumference of the circle.
One type of angle on a circle is one formed by a tangent and a chord.

__Chord/Tangent Angle Theorem__
The measure of an angle formed by a chord and a tangent that intersect on the
circle is half the measure of the intercepted arc.

From the Chord/Tangent Angle Theorem, we now know that there are two types of
angles that are half the measure of the intercepted arc; an inscribed angle and
an angle formed by a chord and a tangent. Therefore, any angle with its vertex
on a circle will be half the measure of the intercepted arc.

An angle is considered inside a circle when the vertex is somewhere inside the
circle, but not on the center. All angles inside a circle are formed by two
intersecting chords.

__Intersecting Chords Angle Theorem__
The measure of the angle formed by two chords that intersect inside a circle is
the average of the measure of the intercepted arcs.

An angle is considered to be outside a circle if the vertex of the angle is
outside the circle and the sides are tangents or secants. There are three types
of angles that are outside a circle: an angle formed by two tangents, an angle
formed by a tangent and a secant, and an angle formed by two secants. Just like
an angle inside or on a circle, an angle outside a circle has a specific
formula, involving the intercepted arcs.

__Outside Angle Theorem__
The measure of an angle formed by two secants, two tangents, or a secant and a
tangent drawn from a point outside the circle is equal to half the difference
of the measures of the intercepted arcs.

When two chords intersect inside a circle, the two triangles they create are
similar, making the sides of each triangle in proportion with each other. If we
remove AD and BC the ratios between AE, EC, DE, and EB will still be the same.

__Intersecting Chords Theorem__
If two chords intersect inside a circle so that one is divided into segments of
length a and b and the other into segments of length c and d then ab=cd. In
other words, the product of the segments of one chord is equal to the product
of segments of the second chord.

In addition to forming an angle outside of a circle, the circle can divide the
secants into segments that are proportional with each other.

If we draw in the intersecting chords, we will have two similar triangles.

From the inscribed angles and the Reflexive Property (∠R≅∠R),△PRS∼△TRQ. Because
the two triangles are similar, we can set up a proportion between the
corresponding sides. Then, cross-multiply. ac+d=ca+b⇒a(a+b)=c(c+d)

__Two Secants Segments Theorem__
If two secants are drawn from a common point outside a circle and the segments
are labeled as above, then a(a+b)=c(c+d). In other words, the product of the
outer segment and the whole of one secant is equal to the product of the outer
segment and the whole of the other secant.

If a tangent and secant meet at a common point outside a circle, the segments
created have a similar relationship to that of two secant rays. Recall that the
product of the outer portion of a secant and the whole is equal to the same of
the other secant. If one of these segments is a tangent, it will still be the
product of the outer portion and the whole. However, for a tangent line, the
outer portion and the whole are equal.

__Tangent Secant Segment Theorem__
If a tangent and a secant are drawn from a common point outside the circle (and
the segments are labeled like the picture to the left), then a2=b(b+c). This
means that the product of the outside segment of the secant and the whole is
equal to the square of the tangent segment.

---

### Satz des Thales

Nachweis durch gleichschenklige Dreiecke

Kombiniert alle Erkenntnisse der euklidischen Geometrie

{.todo}TODO



--------------------------------------------------------------------------------



## Regelmäßige Vielecke

> sectionStatus: dev
> section: cyclic-polygons

__[CC] Construct an equilateral triangle, a square, and a regular hexagon
inscribed in a circle.__

An inscribed polygon is a polygon where every vertex is on a circle. Note, that
not every quadrilateral or polygon can be inscribed in a circle. Inscribed
quadrilaterals are also called cyclic quadrilaterals. For these types of
quadrilaterals, they must have one special property. We will investigate it here.

This investigation shows that the opposite angles in an inscribed quadrilateral
are supplementary. By cutting the quadrilateral in half, through the diagonal,
we were able to show that the other two angles (that we did not cut through)
formed a linear pair when matched up.

Inscribed Quadrilateral Theorem: A quadrilateral is inscribed in a circle if
and only if the opposite angles are supplementary.



--------------------------------------------------------------------------------



## Kugeln, Kegel und Zylinder

> section: spheres-cones-cylinders
> id: solids

In the previous sections, we studied the properties of circles on a flat
surface. But our world is actually three-dimensional, so lets have a look at
some 3D solids that are based on circles:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} A [__cylinder__](gloss:cylinder) consists of two congruent,
parallel circles joined by a curved surface. 

::: column(width=220)

    x-solid(size=220)

{.text-center} A [__cone__](gloss:cone) has a circular base that is joined to 
a single point (called the vertex).

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Every point on the surface of a [__sphere__](gloss:sphere) has
the same distance from its center.

:::

Notice how the definition of a sphere is almost the same as the definition of a
[[circle|radius|cube]] – except in three dimensions!

---
> id: gasometer

### Zylinder

::: column.grow

Here you can see the cylindrical _Gasometer_ in Oberhausen, Germany. It used to
store natural gas which was used as fuel in nearby factories and power plants.
The Gasometer is 120m tall, and its base and ceiling are two large circles with
radius 35m. There are two important questions that engineers might want to
answer:

* How much natural gas can be stored? This is the [[volume|area|diameter]] of
  the cylinder.
* {.reveal(when="blank-0")} How much steel is needed to build the Gasometer?
  This is (approximately) the [[surface area|circumference|diagonal]] of the
  cylinder.

{.reveal(when="blank-0 blank-1")} Let’s try to find formulas for both these
results!

::: column(width=300)

    x-media(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometer Oberhausen

:::

---
> id: cylinder-prism

#### Volumen eines Zylinders

The top and bottom of a cylinder are two congruent circles, called __bases__.
The __{.m-blue} height *h*__ of a cylinder is the perpendicular distance between
these bases, and the __{.m-red} radius *r*__ of a cylinder is simply the radius
of the circular bases.

We can approximate a cylinder using a ${n}{n|5|3,20,1}-sided
[__prism__](gloss:prism). As the number of sides increases, the prism starts to
look more and more like a cylinder:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Even though a cylinder is technically not a prism, they share many properties.
In both cases, we can find the volume by multiplying the area of their
__{.m-red} base__ with their __{.m-blue} height__. This means that a
cylinder with radius _{.b.m-red} r_ and height _{.b.m-blue} h_ has volume

{.text-center} `V =` _{x-equation(solution="π r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Remember that radius and height must use the same units.
For example, if _r_ and _h_ are both in cm, then the volume will be in
[[`"cm"^3`|`"cm"^2`|cm]].

---
> id: oblique-cylinder
> goals: slide

::: column.grow

In the examples above, the two bases of the cylinder were always _directly above
each other_: this is called a __right cylinder__. If the bases are not directly
above each other, we have an __oblique cylinder__. The bases are still parallel,
but the sides seem to “lean over” at an angle that is not 90°.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-media(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} The _Leaning Tower of Pisa_ in Italy is not quite an oblique
cylinder.

:::

---
> id: cavalieri
> goals: slide

The volume of an oblique cylinder turns out to be exactly the same as that of a
right cylinder with the same radius and height. This is due to [__Cavalieri’s
Principle__](gloss:cavalieri), named after the Italian mathematician
[Bonaventura Cavalieri](bio:cavalieri): if two solids have the same
cross-sectional area at every height, then they will have the same volume.

Imagine slicing a cylinder into lots of thin disks. We can then slide these
disks horizontal to get an oblique cylinder. The volume of the individual discs
does not change as you make it oblique, therefore the total volume also remains
constant:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

    // TODO You must always use the _perpendicular_ height. This is
    // the vertical line to left in the figure above.

    // TODO Volume of horizontal cylinder segments
    // https://www.mathopenref.com/cylindervolpartial.html

---
> id: cylinder-surface

#### Oberfläche eines Zylinders

::: column.grow

Um die Oberfläche eines Zylinders zu bestimmen, müssen wir ihn flach in sein 
[Netz](gloss:net)"ausrollen". You can try this yourself, for example by peeling off the
label on a can of food.

There are two [[circles|spheres|squares]], one at the top and one at the bottom
of the cylinder. The curved side is actually a large [[rectangle|square|ellipse]].

* {.reveal(when="blank-0 blank-1")} The two circles each have area
  _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} The height of the rectangle is
  _{x-equation.small(solution="h" keys=" " short-var)}_
  _{span.reveal(when="eqn-1")}and the width of the rectangle is the
  same as the [[circumference|diameter|tangent]] of the circles:_
  _{x-equation.small.reveal(when="blank-2" solution="2 π r" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

This means that the total surface area of a cylinder with radius _r_ and height
_h_ is given by

{.text-center} `A =` _{x-equation(solution="2 π r^2 + 2 π r h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-media(src="images/cylinders.jpg" width=460 height=125)

Cylinders can be found everywhere in our world – from soda cans to toilet paper
or water pipes. Can you think of any other examples?

The _Gasometer_ above had a radius of 35m and a height of 120m. We can now
calculate that its volume is approximately [[461,000 ± 1000]]`"m"^3` and its
surface area is approximately [[34,080 ± 100]]`"m"^2`.

---
> id: cone

### Cones

::: column.grow

A [__cone__](gloss:cone) is a 3-dimensional solid that has a circular
__{.m-red}base__. Its side “tapers upwards” as shown in the diagram, and ends
in a single point called the __{.m-green}vertex__.

The __{.m-red}radius__ of the cone is the radius of the circular base, and the
__{.m-blue}height__ of the cone is the perpendicular distance from the base
to the vertex.

Just like other shapes we met before, cones are everywhere around us: ice cream
cones, traffic cones, certain roofs, and even christmas trees. What else can you
think of?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-media(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-media(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### Volumen eines Kegels

::: column.grow

We previously found the volume of a cylinder by approximating it using a prism.
Similarly, we can find the volume of a cone by approximating it using a
[__pyramid__](gloss:pyramid).

Here you can see a ${n}{n|5|3,18,1}-sided pyramid. As the number of sides
increases, the pyramid starts to look more and more like a cone. In fact, we
could think of a cone as a pyramid with _infinitely many_ sides!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

This also means that we can also use the equation for the volume:
`V = 1/3 "base" × "height"`. The base of a cone is a circle, so the volume of a
cone with radius _r_ and height _h_ is

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Notice the similarity with the equation for the volume of a cylinder. Imagine
drawing a cylinder _around_ the cone, with the same base and height – this is
called the __circumscribed cylinder__. Now, the cone will take up exactly [[one
third|half|one quarter]] of the volume of the cylinder:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Note: You might think that infinitely many tiny sides as an approximation
is a bit “imprecise”. Mathematics spent a long time trying to find a more
straightforward way to calculate the volume of a cone. In 1900, the great
mathematician [David Hilbert](bio:hilbert) even named it as one of the 23 most
important unsolved problems in mathematics! Today we know that it is actually
impossible.

---
> id: oblique-cone
> goals: slide

::: column.grow

Just like a cylinder, a cone doesn’t have to be “straight”. If the vertex is
directly over the center of the base, we have a __right cylinder__. Otherwise,
we call it an __oblique cylinder__.

Once again, we can use Cavalieri’s principle to show that all oblique cylinders
have the same volume, as long as they have the same base and height.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Oberfläche eines Kegels

::: column.grow

Finding the surface area of a cone is a bit more tricky. Like before, we can
unravel a cone into its net. Move the slider to see what happens: in this
case, we get one circle and one [[circle sector|circle segment|circle arc]].

{.reveal(when="blank-0")} Now we just have to add up the area of both these
components. The __{.m-yellow}base__ is a circle with radius _r_, so its area is

{.text-center.reveal(when="blank-0")} `§pill(A_"Base","yellow","circle") =`
_{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

The radius of the __{.m-green}sector__ is the same as the distance from the
rim of a cone to its vertex. This is called the __{.pill.green.step-target(data-to="s")}
slant height *s*__ of the cone, and not the same as the normal
__{.pill.blue.step-target(data-to="h")}height *h*__. We can find the slant
height using [Pythagoras](gloss:pythagoras-theorem):

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.sketch(width=280 height=200): svg
      circle(x="point(140, 10)" name="a" hidden)
      circle(x="point(140, 170)" name="b" hidden)
      circle(x="point(220, 170)" name="c" hidden)
      circle(x="point(60, 170)" name="d" hidden)
      ellipse(cx=140 cy=172 rx=81 ry=20)
      path(x="angle(a,b,c)" size=12)
      path(x="triangle(a,c,d)")
      path.yellow(x="segment(b,c)" label="r" target="r")
      path.green(x="segment(a,c)" label="s" target="s")
      path.blue(x="segment(a,b)" label="h" target="h")

:::

---
> id: cone-surface-1

::: column.grow

The _{span.pill.step-target.red(data-to="arc")}arc length_ of the sector is the
same as the [[circumference|diameter|arc]] of the _{span.pill.step-target.yellow(data-to="base")}base_:
_{span.reveal(when="blank-0")}`2 π r`. Now we can find the area of the sector
using the [formula](gloss:circle-sector) we derived in a previous section:_

::: x-equation-system.reveal(when="blank-0" steps="π s^2 * ( 2 π r ) / (2 π s) | π r s" hints="cone-surface-1|cone-surface-1")
| `§pill(A_"Sector","green","sector")` | `=` | `§pill(A_"Circle","teal","circle") × pill("arc","red","arc") / pill("circumference","teal","circumference")` |
|                | `=` | _{x-equation(solution="π r sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
:::

::: column(width=280)

    x-geopad.sketch(width=280 height=300 style="margin-top: -20px"): svg
      circle(x="point(140,110)" name="c1" hidden)
      circle(x="point(140,250)" name="c2" hidden)
      circle(x="point(235,141.5)" name="a" hidden)
      circle(x="point(45,141.5)" name="b" hidden)

      path.yellow.fill.light(x="circle(c2, 40)" target="base")
      path.yellow(x="circle(c2, 40)" target="base")
      path.yellow(x="segment(c2,point(180, 250))" label="r" target="base")
      path.red.thick.reveal(when="blank-0" animation="draw" duration=1500 x="circle(c2, 40)")

      path.teal.fill.light(x="circle(c1, 100)" name="circ" target="circle")
      path.green.fill.light(x="sector(c1, a, 2.5)" target="sector circle")

      path.green(x="segment(c1, a)" label="s")
      path.green(x="segment(c1, b)" label="s")
      path.red.thick(x="arc(c1, a, 2.5)" target="arc")
      path.teal.thick.transparent(x="circle(c1, 100)" target="circumference")

:::

---
> id: cone-surface-2

Finally, we just have to add up the area of the __{.m-yellow}base__ and the area
of the __{.m-green}sector__, to get the total surface are of the cone:

{.text-center} `A =` _{x-equation(solution="π r^2 + π r sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Kugeln

::: column.grow

A [__sphere__](gloss:sphere) is a three-dimensional solid consisting of all
points that have the same distance from a given  __{.m-green}center *C*__. This
distance is called the __{.m-red}radius *r*__ of the sphere.

You can think of a sphere as a “three-dimensional [circle](gloss:circle)”. Just
like a circle, a sphere also has a __{.m-blue}diameter *d*__, which is
[[twice|half]] the length of the radius, as well as chords and secants.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} In a [previous section](/course/circles-and-pi/tangets-chords-arcs#eratosthenes-1),
you learned how the Greek mathematician [Eratosthenes](bio:eratosthenes)
calculated the radius of Earth using the shadow of a pole – it was 6,371 km.
Now, let’s try to find the Earth’s total volume and surface area.
[Continue](btn:next)

---
> id: sphere-volume

#### Volumen einer Kugel

To find the volume of a sphere, we once again have to use Cavalieri’s Principle.
Let’s start with a hemisphere – a sphere cut in half along the equator. We also
need a cylinder with the same radius and height as the hemisphere, but with an
inverted cone “cut out” in the middle.

As you move the slider above, you can see the cross-section of both these
shapes at a specific height above the base:

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.sketch.r(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(c1,h1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(a1,h1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.sketch.r(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")
      
      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(c1,h1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)


{.reveal(when="slider-0")} Let us try to find the cross-sectional area of both
these solids, at a distance __{span.pill.blue.step-target(data-to="h")}height *h*__
above the base.

::: column.grow

{.reveal(when="slider-0")} The cross-section of the hemisphere is always a
[[circle|ring|cylinder]].

{.reveal(when="blank-0")} The __{span.pill.red.step-target(data-to="x")}radius
*x*__ of the cross-section is part of a _{span.pill.yellow.step-target(data-to="tri")}
right-angled triangle_, so we can use [Pythagoras](gloss:pythagoras-theorem):

::: .reveal(when="blank-0")
{.text-center} `§pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Now, the area of the cross section is

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)
:::

::: column.grow.reveal(when="eqn-0")

The cross-section of the cut-out cylinder is always a [[ring|circle|cone]].

::: .reveal(when="blank-1")
The radius of the hole is _h_. We can find the area of the ring by subtracting
the area of the hole from the area of the larger circle:

| _A_ | = | `π r^2 - π h^2` |
|     | = | `π (r^2 - h^2)` |
{.eqn-system}
:::

:::

---
> id: sphere-volume-1

It looks like both solids have the same cross-sectional area at every level.
By Cavalieri’s Principle, both solids must also have the same [[volume|surface
area|circumference]]! _{span.reveal(when="blank-0")}We can find the volume of
the hemisphere by subtracting the volume of the [cylinder](gloss:cylinder-volume)
and the volume of the [cone](gloss:cone-volume):_

::: x-equation-system.reveal(when="blank-0" steps="π r^3 - 1/3 π r^3" hints="sphere-volume")
| `V_"Hemisphere"` | = | `V_"Cylinder" - V_"Cone"` |
|                  | = | _{x-equation(solution="2/3 π r^3" keys="+ − × ÷ π frac sup brackets" short-var)}_ |
:::

---
> id: sphere-volume-2

A sphere consists of [[two]] hemispheres, _{span.reveal(when="blank-0")}which
means that its volume must be_

{.text-center.reveal(when="blank-0")} `V = 4/3 π r^3`.

---
> id: earth-volume
> goals: numbers

::: column.grow

The Earth is (approximately) a sphere with a radius of 6,371\ km. Therefore its
volume is

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers}1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} The average density of the Earth is `5510 "kg/m"^3`.
This means that its total mass is

{.text-center.reveal(when="numbers")} `"Mass" = "Volume" × "Density" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} That’s a 6 followed by 24 zeros!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

If you compare the equations for the volume of a cylinder, cone and sphere, you
might notice one of the most satisfying relationships in geometry. Imagine we
have a cylinder with the same height as the diameter of its base. We can now fit
both a cone and a sphere perfectly in its inside:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} This cone has radius `r` and height `2r`. Its volume is
_{x-equation.small(solution="2/3 π r^3" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} This sphere has radius `r`. Its volume is
_{x-equation.small(solution="4/3 π r^3" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} This cylinder has radius `r` and height `2r`. Its volume is
_{x-equation.small(solution="2 π r^3" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Notice how, if we [[add
up|subtract|multiply]] the volume of the cone and the sphere, we get exactly
the volume of the cylinder!

---
> id: sphere-maps
> goals: move projection

#### Oberfläche einer Kugel

Finding a formula for the surface area of a sphere is very difficult. One reason
is that we can’t open and “flatten” the surface of a sphere, like we did for
cones and cylinders before.

This is a particular issue when trying to create maps. Earth has a curved,
3-dimensional surface, but every printed map has to be flat and 2-dimensional.
This means that Geographers have to cheat: by stretching or squishing certain
areas.

Here you can see few different types of maps, called __projections__. Try moving
the red square, and watch what this area _actually_ looks like on a globe:

    .sphere-maps
      x-select.tabs
        .projection Mercator
        .projection Cylindrical
        .projection Robinson
        .projection Mollweide
      .map-body
        .left
          svg.sphere-map(width=240 height=240 viewBox="0 0 240 280")
            path.outline
            path.grid
            path.land
            path.map-select
        .right
          svg.sphere-map#projection(width=440 height=280 viewBox="0 0 440 280")
            path.outline
            path.grid
            path.land
            rect.map-select(x="-24" y="-24" width=48 height=48 style="cursor: move")
          p.caption As you move the square on the map, notice how the size and shape of the #[em actual] area changes on the 3-dimensional globe.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

To find the surface area of a sphere, we can once again approximate it using a
different shape – for example a polyhedron with lots of faces. As the number of
faces increases, the polyhedron starts to look more and more like a sphere.

{.todo} KOMMT BALD!

    // If we connect the small polygons to the center of the sphere, we get
    // lots of small pyramids pointing inwards. The diagram shows one of these pyramids
    // in red. The height of each pyramid is the [[radius|diameter]] of the sphere.
    
    // Here is a
    // volume = lots of cones = 1/3 * radius * lots of bases = 1/3 * radius * surface area
    
    // And therefore,
    // surface area = 3 * volume / radius = 
    
    // In other words, the surface area of a sphere with radius _r_ is `S = 4 π r^2`.

    // ---
    // > id: earth-surface
    // 
    // surface of earth



--------------------------------------------------------------------------------



## Kegelschnitte

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

The circle is one of four different shapes which can be created using “slices”
through a [cone](gloss:cone). This can be demonstrated using the light cone of
a torch:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Circle
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabola
          include svg/parabola.svg
        .hide
          p: strong Hyperbola
          include svg/hyperbola.svg

---
> id: conics-1

If you point the torch vertically downwards, you see a [[circle|ellipse|oval]]
of light. _{span.reveal(when="blank-0")}If you tilt the cone, you get an
[__ellipse__](gloss:ellipse). If you tilt it even further, you get a
[__parabola__](gloss:parabola) or a [__hyperbola__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Collectively, these four shapes are called [__conic sections__](gloss:conic-section).
Even though they all look very different, they are closely related: in fact,
they can all be generated using the same equation!

Conic sections were first studied by the ancient Greek mathematician [Apollonius
of Perga](bio:apollonius), who also gave them their unusual names.

In later courses, you’ll learn much more about parabolas and hyperbolas. For
now, let’s have a closer look at the ellipse.

::: column(width=300)

    x-media(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellipsen

An ellipse just looks almost like an “elongated circle”. In fact, you could
think about it as a circle with _two centers_ – these are called __focal
points__. Just like every point on a circle has the same distance from its
center, every point on an ellipse has the same _sum of distances_ to its two
focal points.

If you have a long string connected to two fixed points, you can draw a perfect
ellipse by tracing the maximum reach of the strings:

{.todo} KOMMT BALD!

    // ---
    // > id: ellipses-1
    // You can also move the focal points around. Notice how, if they are further
    // apart, the ellipse will be [[more|less]] elongated. If they are close together,
    // it will look almost like a [[circle|parabola|trapezium]].

---
> id: ellipses-2
> goals: v0 v1 v2 v3

There are many other physical representations of how you could draw an ellipse:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Gears

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Trammel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Disk

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Swing

:::

---
> id: orbits

### Planetenbahnen

::: column.grow

You might remember from the very beginning of this course, that ancient Greek
astronomers believed that the Earth is at the centre of the universe and that
the sun, moon and planets move around Earth on circular orbits.

Unfortunately, astronomical observation of the sky didn’t quite support this.
For example, the sun appeared larger during some parts of the year and smaller
during others. On a circle, every point should have [[the same|an increasing|a
decreasing]] distance from its center.

::: column(width=330)

    x-media(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Greek astronomer Hipparchus of Nicaea

:::

---
> id: epicycles
> goals: play

To fix this, astronomers added __Epicycles__ to their model of the solar system:
planets move on a large circle around Earth, while simultaneously rotating on
a smaller circle. While very complicated, this was the most widely accepted
model of our universe for more than 1000 years:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#ff941f" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#1f7aff")
        circle.earth(cx=310 cy=160 r=10 fill="#ff941f")
      x-play-btn

{.caption} This planet makes ${n}{n|6|2,12,1} rotations around the small circle
(the __epicycle__) during one rotation around the large circle (the
__deferent__).

::: column(width=320)

    x-media(src="images/epicycles.jpg" width=320 height=320)

{.caption} A 16-century drawing of epicycles in the __Geocentric model__. The
Greek word “planetes” means “wanderers”.
:::

---
> id: kepler
> goals: play

::: column.grow

Over time, people realised that Earth was just one of many planets orbiting the
sun (the __Heliocentric model__), but it wasn’t until 1609, that the astronomer
[Johannes Kepler](bio:kepler) discovered that planets actually move on
_elliptical orbits_.

The sun is in one of the two focal points of these ellipses. The planets speed
up as they get closer to the sun, and slow down as they move further away.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#1f7aff" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#1f7aff")
        circle(cx=220 cy=120 r=15 fill="#ff941f")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

A few decades later, [Isaac Newton](bio:newton) was able to prove Kepler’s
observations, using his newly developed laws of [__gravity__](gloss:gravity).
Newton realised that there is a force between any two masses in the universe –
similar to the attraction between two magnets. 

Gravity is what makes everything fall to the ground and gravity is also what
makes the planets move around the sun. It is only the great speed at which
planets move, that prevents them from falling directly into the sun.

::: column(width=280)

    // Source: https://www.flickr.com/photos/hikingartist/6217869031
    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Using Newton’s laws, you can derive the path that objects take when moving under
the force of gravity. It turns out that Planets move on ellipses, but other
objects like comets can travel on [parabolic](gloss:parabola) or
[hyperbolic](gloss:hyperbola) paths: they fly close to the sun before turning
around and shooting off into the universe, never to come back.

According to legend, a falling apple inspired Newton to think about gravity. He
was one of the most influential scientist of all time, and his ideas shaped our
understanding of the world for nearly 300 years – until Albert Einstein
discovered relativity in 1905.

:::
