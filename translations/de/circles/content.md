# Kreise und Pi

## Einführung

> section: introduction
> id: intro
> trailer: tBJUNvCBkLo
> color: "#5A49C9"
> level: Intermediate
> next: graph-theory

::: column.grow

Solange es Menschen gibt, haben wir zum Himmel geschaut und versucht, das Leben
auf der Erde mit der Bewegung von Sternen, Planeten und Mond zu erklären.

Die altgriechischen Astronomen entdeckten als erste, dass sich alle Himmelsobjekte
auf regelmäßigen Bahnen, den so genannten __Umlaufbahnen__, bewegen. Sie glaubten,
dass diese Bahnen immer kreisförmig sind. Schließlich ist ein Kreis die "vollkommenste"
aller Formen: symmetrisch in alle Richtungen und damit die perfekte Wahl für die
unserem Universum zugrunde liegende Ordnung.

::: column(width=320)

    x-img(src="images/geocentric.jpg" width=320 height=272)

{.caption} Die Erde steht im Mittelpunkt des _ptolemäischen Universums_.

:::

---
> id: radius
> goals: compass

Alle Punkte auf einem [__Kreis__](gloss:circle) haben den gleichen Abstand von seinem
Mittelpunkt. Das bedeutet, dass sie mit einem [Zirkel](gloss:compass) gezeichnet werden können:

::: column(width=320)

    x-geopad(width=320 height=300 style="position: relative;")
      svg(style="stroke-linecap: round; stroke-linejoin: round")
        circle.move(name="a" cx=160 cy=150 target="r d")
        circle.move.reveal(name="b" cx=250 cy=240 project="circle(a, 120)" target="r" when="compass")
        path.red(x="segment(a,b).contract(0.08)" target="r" arrows="both" hidden)
        path(name="c1" x="arc(a,b,1.99*pi)" hidden)
        path.blue(x="segment(b.rotate(pi/3,a),b.rotate(-2*pi/3,a)).contract(0.01)" target="d" arrows="both" hidden)
        path.green(x="arc(a,b.add(b.subtract(a).unitVector.scale(12)),1.99*pi).contract(0.02)" target="c" arrows="start" hidden)
      x-play-btn

::: column.grow

{.reveal(when="compass")} Es gibt drei wichtige Maße im Zusammenhang mit
Kreisen, die du kennen solltest:

* {.reveal(when="compass" delay="1000")} Der [{.step-target.pill.b.red}Radius](target:r)
  ist der Abstand vom Mittelpunkt eines Kreises zur Kreislinie.
* {.reveal(when="compass" delay="4000")} Der [{.step-target.pill.b.blue}Durchmesser](target:d)
  ist der Abstand zwischen zwei gegenüberliegenden Punkten auf einem Kreis. Er geht durch den
  Mittelpunkt, und seine Länge ist [[doppelt|halb|genau]] so groß wie der Radius.
* {.reveal(when="blank-0")} Der [{.step-target.pill.b.green}Umfang](target:c)
  entspricht der Länge der Strecke um einen Kreis.

:::

---
> id: similar
> goals: circle-0 circle-1 circle-2

Eine wichtige Eigenschaft von Kreisen ist, dass alle Kreise
[ähnlich](gloss:similar) sind. Du kannst das überprüfen, indem du zeigst,
dass alle Kreise durch einfaches [Verschieben](gloss:translation) und
[Vergrößern bzw. Verkleinern](gloss:dilation) exakt passend übereinander gelegt werden können:

    figure: svg.similar-circles(width=640 height=380 viewBox="0 0 640 380")

---
> id: pi-definition
> goals: digits

Du erinnerst dich vielleicht daran, dass bei ähnlichen Vielecken das Verhältnis
zwischen den entsprechenden Seiten immer konstant ist. Ähnliches gilt für Kreise: Das Verhältnis zwischen
dem [Umfang](gloss:circle-circumference) und dem
[Durchmesser](gloss:circle-diameter) ist für _alle Kreise_ gleich groß. Es beträgt immer
3,14159.... - eine geheimnisvolle Zahl namens [__Pi__](gloss:pi), die oft
als griechischer Buchstabe _π_ für “p” geschrieben wird. Pi hat unendlich viele Dezimalstellen, die sich bis in
alle Ewigkeit ohne ein bestimmtes Muster aneinanderreihen:

    canvas.pi-spiral(width=800 height=760)

---
> id: wheel
> goals: unroll

Wir haben hier ein Rad mit dem Durchmesser 1. Wenn du den Umfang “abrollst”, kannst du sehen,
dass seine Länge genau [[`pi`|`2 * pi`|3]] ist:

    figure: include svg/wheel.svg
    x-gesture(target="#wheel .wheel" slide="100,0")

---
> id: circumference

Bei einem Kreis mit dem Durchmesser _d_ ist der Umfang `u = d × π`. Ebenso ist
bei einem Kreis mit dem [Radius](gloss:circle-radius) _r_ der Umfang

{.text-center} `u =` [[`2 r π`|`r π`|`r^2 π`]].

---
> id: nature

Kreise sind vollkommen symmetrisch und haben keine “Schwachstellen” wie die
Ecken eines Vielecks. Dies ist einer der Gründe, warum sie
überall in der Natur zu finden sind:

::: column(width=130 parent="padded-thin")

    x-img(src="images/flower.jpg" width=130 height=130)

{.caption} Blumen

::: column(width=130)

    x-img(src="images/earth.jpg" width=130 height=130)

{.caption} Planeten

::: column(width=130)

    x-img(src="images/tree.jpg" width=130 height=130)

{.caption} Bäume

::: column(width=130)

    x-img(src="images/orange.jpg" width=130 height=130)

{.caption} Früchte

::: column(width=130)

    x-img(src="images/soap.jpg" width=130 height=130)

{.caption} Seifenblasen

:::

{.r} Und es gibt noch so viele andere Beispiele: von Regenbögen bis hin zu ins Wasser geworfenen Steinen. Fällt
dir sonst noch etwas ein? [Weiter](btn:next)

---
> id: max-area
> goals: area-circle

::: column.grow

Man hat außerdem festgestellt, dass ein Kreis die Form mit der größten Fläche bei einem bestimmten
Umfang ist. Wenn du zum Beispiel ein Seil mit einer Länge von 100\ m hast und damit die
größtmögliche Fläche umschließen willst, mußt du damit einen Kreis bilden (und nicht andere Formen
wie ein Rechteck oder Dreieck).

In der Natur können Objekte wie Wassertropfen oder Luftblasen _Energie sparen_, indem sie
kreisförmig oder kugelförmig werden und damit ihre Oberfläche reduzieren.

::: column(width=320)

    x-select.segmented
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
Vorgehensweise, die wir bei der [Berechnung der Viereckflächen](/course/polyhedra/quadrilaterals?hl=de) angewandt haben, versuchen:
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

Hier siehst du einen Kreis, der in ${n1} Tortenstücke unterteilt ist. Bewege den Schieberegler, um
die Tortenstücke in einer Reihe anzuordnen.

{.reveal(when="slider")} Wenn wir die Anzahl der Tortenstücke auf ${n1}{n1|6|6,30,2} erhöhen, beginnt
diese Form immer mehr wie ein [[Rechteck|Kreis|Quadrat]] auszusehen.

{.reveal(when="blank-0")} Die Höhe des Rechtecks entspricht dem
[[Radius|Durchmesser|Umfang]] des Kreises.
_{span.reveal(when="blank-1")} Die Breite des Rechtecks entspricht
[[der Hälfte des Umfangs|dem Umfang|dem doppelten Radius]] des Kreises._
_{span.reveal(when="blank-2")} (Beachte, wie die Hälfte der Tortenstücke nach unten und
die andere Hälfte nach oben zeigt.)_

{.reveal(when="blank-2" delay=1000)} Daher beträgt die Gesamtfläche des Rechtecks
etwa `A = r * r π = r^2 π`.

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

Hier siehst du einen Kreis, der in ${n} Ringe unterteilt ist. Wie zuvor kannst du den Schieberegler
bewegen, um die Ringe gerade zu biegen.

{.reveal(when="slider")} Wenn wir die Anzahl der Ringe auf ${n2}{n2|4|2,12,1} erhöhen,
 beginnt diese Form immer mehr wie ein [[Dreieck|Rechteck|Trapez]] auszusehen.

{.reveal(when="blank-0")} Die Höhe des Dreiecks entspricht dem
 [[Radius|Durchmesser|Umfang]] des Kreises.
_{span.reveal(when="blank-1")} Die Basis des Dreiecks ist gleich
[[der Umfang|der doppelte Durchmesser]] des Kreises._
_{span.reveal(when="blank-2")} Daher beträgt die Gesamtfläche des Dreiecks
ungefähr_

{.text-center.reveal(when="blank-2")} `A = 1/2 "Basis" × "Höhe" = 1/2 * 2rπ * r = r^2 π`.

:::

---
> id: area-2

Wenn wir unendlich viele Ringe oder Tortenstücke verwenden könnten,
wären die obigen Näherungen perfekt - und sie ergeben beide die gleiche Formel für die Fläche eines Kreises:

{.text-center.r} `A = r^2 π`.
[Weiter](btn:next)

---
> id: pi-approximations

### Berechnung von Pi

Wie du oben gesehen hast, ist `π = "3,1415926…"` keine einfache ganze Zahl, und ihre
Dezimalstellen gehen ewig weiter, ohne dass sich ein Muster wiederholt. Zahlen mit dieser Eigenschaft
werden als [__irrationale Zahlen__](gloss:irrational-numbers) bezeichnet, und das bedeutet, dass `π`
nicht als einfacher Bruch `a/b` ausgedrückt werden kann.

Es bedeutet auch, dass wir nie _alle_ Ziffern von Pi aufschreiben können - schließlich gibt
es unendlich viele. Altgriechische und chinesische Mathematiker berechneten die
ersten vier Dezimalstellen von Pi, indem sie Kreise mit
regelmäßigen Vielecken annäherten. Beachte, wie das Vieleck, wenn du mehr Seiten hinzufügst, anfängt, [[
immer mehr|immer weniger|genau]] wie ein Kreis auszusehen:

    figure: x-img(src="images/polygons.svg" width=460 height=110)

---
> id: pi-record

::: column(width=280)

    x-img(src="images/iss.jpg" width=280 height=330 credit="NASA")

::: column.grow

1665 gelang es [Isaac Newton](bio:newton), 15 Stellen zu berechnen. Heute können wir mit leistungsstarken Computern den Wert von Pi mit einer viel höheren Genauigkeit berechnen.

Der aktuelle Rekord liegt bei 31,4 Billionen Stellen. Ein gedrucktes Buch mit all diesen
Ziffern wäre etwa 400\ km dick - das ist die Höhe, in der die
[Internationale Raumstation](gloss:iss) die Erde umkreist!

Natürlich musst du dir nicht so viele Ziffern von Pi merken. Tatsächlich ist der
Bruch `22/7 = "3,142…"` eine gute Annäherung.

:::

---
> id: pi-sequence

Ein Ansatz zur Berechnung von Pi ist die Verwendung unendlicher Zahlenreihen. Hier ist
ein Beispiel, das 1676 von [Gottfried Wilhelm Leibniz](bio:leibniz)
entdeckt wurde:

{.text-center} `π = 4/1 - 4/3 + 4/5 - 4/7 + 4/9 - 4/input(11) + …`

{.reveal(when="blank-0")} Wenn wir mehr und mehr Terme dieser Reihe berechnen,
immer nach dem gleichen Muster, wird das Ergebnis sich immer mehr Pi annähern.

---
> id: pi-colours
> goals: hover

::: column.grow

Viele Mathematiker glauben, dass Pi eine noch seltsamere Eigenschaft hat: nämlich dass sie eine sogenannte
__normale Zahl__ ist. Das bedeutet, dass die Ziffern von 0 bis 9 völlig
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

::: .box.f-red.pi-box
#### Eine Million Stellen von Pi

    .pi-controls
      | Suche nach einer Zahlenkette:
      input(type="text" pattern="[0-9]*" maxlength=12)
      .pi-warning
    x-pi-scroll
      .first-row 3.

:::

---
> id: pi-movies

Wir könnten sogar ein ganzes Buch, wie Harry Potter, in eine sehr lange
Zeichenkette umwandeln (a = 01, b = 02, und so weiter). Wenn Pi normal ist, wird diese Zeichenkette irgendwo in ihren
Ziffern erscheinen - aber es würde Millionen von Jahren dauern, bis genügend Ziffern berechnet
sind, um sie zu finden.

Pi ist leicht zu verstehen, aber von grundlegender Bedeutung für Naturwissenschaften
und Mathematik. Das könnte ein Grund dafür sein, dass Pi in unserer Kultur ungewöhnlich beliebt
geworden ist (zumindest im Vergleich zu anderen Themen der Mathematik)

::: column(width=220 parent="padded-thin")

    x-video(src="images/museum.mp4" poster="images/museum.jpg" width=220 height=140 audio credit="© 20th Century Fox")
    p.caption Pi ist die geheime Kombination für die Tafel in Nachts im Museum 2.

::: column(width=220)

    x-video(src="images/simpsons.mp4" poster="images/simpsons.jpg" width=220 height=140 audio credit="© Fox")
    p.caption Professor Frink (Simpsons) bringt einen Raum mit lauter Wissenschaftlern zum Schweigen, indem er sagt, dass Pi gleich 3 ist.

::: column(width=220)

    x-video(src="images/star-trek.mp4" poster="images/star-trek.jpg" width=220 height=140 audio credit="© NBC")
    p.caption Spock (“Star Trek”) deaktiviert einen bösartigen Computer, indem er ihn bittet, die letzte Ziffer von Pi zu berechnen.

:::

---
> id: pi-day

Es gibt sogar jedes Jahr einen _Pi Day (Pi-Tag)_, der entweder am 14. März
begangen wird, weil `pi ≈ 3.14`, was der Datumsschreibweise im englischsprachigen
Raum entspricht, oder der am 22. Juli gefeiert wird, weil `pi ≈ 22/7`, also 22/7
(eine andere Datumsschreibweise).

    figure: x-img(src="images/pies.jpg" width=500 height=150 credit="Evan Shelhamer, Matman from Lublin")

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

{.r} Die Zahl 360 ist sehr praktisch, da sie durch so viele andere Zahlen
 teilbar ist: 2, 3, 4, 5, 6, 8, 9, 10, 12, 15 und so weiter. Das bedeutet, dass viele
Bruchteile eines Kreises praktischerweise ganze Zahlen sind. Aber hast du dich jemals gefragt
, wie man überhaupt auf die Zahl 360 gekommen ist? [Weiter](btn:next)

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

    x-img(src="images/babylon.jpg" width=260 height=250 credit="Yale University")

{.caption} Eine babylonische Tafel zur Berechnung von `sqrt(2)`

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
360°-Videos, Skateboarder können 540° Drehungen ausführen, und
jemand, der seine Entscheidung ändert, macht eine Kehrtwendung um 180°.

Aber aus mathematischer Sicht ist die Wahl von 360
völlig willkürlich. Wenn wir auf dem Mars leben würden, könnte ein Kreis 670° und ein Jahr auf dem
Jupiter sogar 10.475 Tage haben.

::: column(width=280)

    x-video(src="images/skateboard.mp4" poster="images/skateboard.jpg" width=280 height=200 credit="© RIDE Channel, from YouTube")

{.caption} Der 540 McFlip, eine Drehung um 540°

:::

---
> id: radians

### Radiant

Anstatt einen Kreis in eine bestimmte Anzahl von Teilbereiche (z.B. 360 Grad) aufzuteilen, ziehen
Mathematiker es oft vor, Winkel mittels des [Umfangs](gloss:circle-circumference)
eines [__Einheitskreises__](gloss:unit-circle) (eines Kreises mit dem Radius 1) anzugeben.

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

Ein [ganzer Kreis](action:setState(0)) hat dann einen Umfang
_{x-equation.small(solution="2 π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-0")} Bei einer [halben Drehung](action:setState(1)) beträgt der
entsprechende Abstand entlang des Umfangs
_{x-equation.small(solution="π" keys="+ × π" numeric)}_.

{.reveal(when="eqn-1")} Bei einer [Viertelumdrehung](action:setState(2)) beträgt der
Abstand entlang des Umfangs
_{x-equation.small(solution="π/2" keys="+ × π frac" numeric)}_.

{.reveal(when="eqn-2")} Und so weiter: Diese Art der Winkelmessung wird als
[__Radiant („Bogenmaß“)__](gloss:radians) bezeichnet (als Eselsbrücke könntest du dir “Radanteile” für die Teile des Umfangs eines Rads merken).

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

| __{.m-red}Grad__ | 0 | 60 | _{x-equation.small(solution="360/π" keys="π frac" numeric)}_ | 180 | _{x-equation.small(solution="270" keys="π frac" numeric)}_    |
| __{.m-green}Radiant__   | 0 | _{x-equation.small(solution="π/3" keys="π frac" numeric)}_ | 2    | _{x-equation.small(solution="π" keys="π frac" numeric)}_ | `3/2 pi` |
{.table-small.grid}

---
> id: radians-distance

### Zurückgelegte Strecke

Man kann sich Radiant als die zurückgelegte Wegstrecke entlang des Umfangs
eines Einheitskreises vorstellen. Dies ist besonders nützlich bei der Arbeit mit Objekten,
die sich auf einer Kreisbahn bewegen.

::: column.grow

Zum Beispiel umkreist die [Internationale Raumstation](gloss:iss) die
Erde einmal alle 1,5\ Stunden. Das bedeutet, dass ihre __Drehgeschwindigkeit__ [[`(2 pi)/1.5`|
`1.5/(2 pi)`|`1.5 *  pi`]] Radiant pro Stunde beträgt.

{.reveal(when="blank-0")} In einem [Einheitskreis](gloss:unit-circle) ist die
Drehgeschwindigkeit gleich der _tatsächlichen_, Geschwindigkeit, da die Länge des Umfangs
gleich einer vollen Umdrehung in Radiant ist (beide sind `2pi`).

{.reveal(when="blank-0" delay=1000)} Der Radius der ISS-Umlaufbahn beträgt 6800\ km,
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

Hier ist ein weiteres Beispiel: Dein Auto hat Reifen mit einem Radius von 0,25\ m. Wenn du mit einer Geschwindigkeit von 20\ m/s
fährst, drehen sich die Reifen deines Autos mit [[`20/0.25 =
80`|`20 xx 0.25 = 5`|`0.25/50 = "0,0125"`]] Radiant pro Sekunde
_{span.reveal(when="blank-0")}(oder `80/(2pi) = 13` Umdrehungen pro Sekunde)_

---
> id: radians-trig

### Trigonometrie

Für die meisten einfachen Geometrieaufgaben sind Grad und Radiant völlig
austauschbar - Du kannst entweder wählen, welche du bevorzugst,
oder in der Frage wird schon festgelegt, in welcher Einheit man antworten soll. Sobald du dich jedoch tiefer
mit [Trigonometrie](gloss:trigonometry) oder [Infinitesimalrechnung](gloss:calculus) auseinandersetzt,
wirst du feststellen, dass Radiant viel bequemer zu handhaben sind als das Gradmaß.

::: column.grow

Die meisten Taschenrechner verfügen über eine [spezielle Taste](->.button.mode), um zwischen
Grad und Radiant zu wechseln. Trigonometrische Funktionen wie [__sin__](gloss:sin),
[__cos__](gloss:cos) und __tan__ nehmen Winkel als Eingabe an, und
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
dann gilt `sin(θ) ≈ θ`. Zum Beispiel,

{.text-center} sin(${x}{x|0.1|0,0.5,0.05}) `≈` ${sin(x)}…

{.reveal(when="var-0")} Dies wird als __Kleinwinkelnäherung__ bezeichnet und
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

      path.teal.fill.reveal(x="sector(x,d1,pi/2.5)" target="sector" when="next-3" label="Sektor" label-class="white")
      path.purple.fill.reveal(x="arc(x,b1,pi/2.5)" target="segment" when="next-4" label="Segment")

      path.black(x="circle(x,100)" name="c")

      circle.red(x="c.at(0.5)" name="a1" target="secant")
      circle.red(x="c.at(0.7)" name="a2" target="secant")
      path.red.thick(x="line(a1,a2)" label="Sekante" target="secant")

      circle.green.reveal(x="c.at(0.8)" name="b1" target="chord" when="next-0" animation="pop")
      circle.green.reveal(x="c.at(0)" name="b2" target="chord" when="next-0" animation="pop")
      path.green.thick.reveal(x="segment(b1,b2)" label="Sehne" target="chord" when="next-0" animation="draw")

      circle.blue.reveal(x="c.at(0.1)" name="c1" target="tangent" when="next-1" animation="pop")
      path.blue.thick.reveal(x="c.tangentAt(0.1)" label="Tangente" target="tangent" when="next-1" animation="draw")

      circle.yellow.reveal(x="c.at(0.2)" name="d1" target="arc" when="next-2" animation="pop")
      circle.yellow.reveal(x="c.at(0.4)" name="d2" target="arc" when="next-2" animation="pop")
      path.yellow.thick.reveal(x="arc(x,d1,pi/2.5)" label="Kreisbogen" target="arc" when="next-2" animation="draw")

::: column.grow(parent="right")

* {.r} Eine [{.red}Sekante](target:secant) ist eine Gerade, die einen Kreis in
  zwei Punkten schneidet. [Weiter](btn:next)
* {.r.reveal(when="next-0")}Eine [{.green}Sehne](target:chord) ist eine Strecke,
  deren Endpunkte auf dem Umfang eines Kreises liegen. [Weiter](btn:next)
* {.r.reveal(when="next-1")}Eine [{.blue}Tangente](target:tangent) ist eine Gerade, die
  einen Kreis an genau einem Punkt berührt. Man nennt ihn den
  __Berührungspunkt__. [Weiter](btn:next)
* {.r.reveal(when="next-2")}Ein [{.yellow}Kreisbogen](target:arc) ist ein Ausschnitt aus
  dem Umfang eines Kreises. [Weiter](btn:next)
* {.r.reveal(when="next-3")}Ein [{.teal} Sektor](target:sector) ist ein Teil der
  Kreisfläche, begrenzt durch einen _Kreisbogen_ und _zwei Radien_.
  [Weiter](btn:next)
* {.r.reveal(when="next-4")}Und ein [{.purple} Segment](target:segment) ist ein
  Teil der Kreisfläche, begrenzt durch einen _Kreisbogen_ und _eine Sehne_.
  [Weiter](btn:next)

:::

---
> id: circle-parts-1

In diesem Abschnitt werden wir uns mit der Beziehung zwischen all diesen Elementen befassen
und Sätze zu ihren Eigenschaften beweisen. Mach dir jetzt einmal keine Sorgen, dass du dir alle
diese Definitionen merken musst - du kannst jederzeit im
[Glossar](->.footer-link[data-modal=glossarym]) nachschlagen.

---

### Tangenten

{.todo} KOMMT BALD!

---

### Sehnen

{.todo} KOMMT BALD!

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

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad).minor" label="Sektor" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad).minor" label="Kreisbogen" target="arc")
      path.purple.thick.transparent(x="arc(c,a,2*pi-angle(b,c,a).rad).major" target="major")

::: column.grow

Wie du im Diagramm sehen kannst, ist ein [{.red} Kreisbogen](target:arc) ein Teil des
[[Umfangs|Durchmesser|Radius]] eines Kreises, und ein [{.yellow} Sektor](target:sector)
ist ein Teil des [[Flächeninhalts|Radius|Umfangs]] eines Kreises.

::: .reveal(when="blank-0 blank-1")
Der Kreisbogen zwischen zwei Punkten _A_ und _B_ wird oft als `arc(AB)` geschrieben. Diese
Definition ist etwas zweideutig: Es gibt einen [{.purple} zweiten Kreisbogen](target:major),
der _A_ und _B_ verbindet, aber den anderen Weg um den Kreis herum geht.

Der kleinere der beiden Bögen wird als __Minor__ bezeichnet, der größere
als __Major__. Wenn die Punkte _A_ und _B_ genau gegenüberliegen, haben
beide Bögen die gleiche Länge und sind [[Halbkreise|Durchmesser|Umfänge]].
:::

:::

---
> id: arcs-1

::: column.grow

Um die Länge eines Bogens oder die Fläche eines Sektors zu ermitteln, müssen wir den
entsprechenden Winkel in der Mitte des Kreises kennen: dieser wird als
[{.blue}Mittelpunktswinkel](target:angle) bezeichnet.

Beachte, dass Bogen, Sektor und Winkel jeweils den _gleichen Anteil_ eines
Vollkreises einnehmen. Wenn beispielsweise der [{.blue} Mittelpunktswinkel](target:angle)
[90°](action:set90Deg()) ist, nimmt er [[ein Viertel|die Hälfte|ein Drittel]] von einem
[{.teal}Vollkreis](target:fangle) ein.

::: .reveal(when="blank-0")
Das bedeutet, dass die [{.red} Länge des Kreisbogens](target:arc) auch `1/4` des
[{.purple}gesamten Umfangs](target:circ) des Kreises ist, und die [{.yellow} Fläche
des Sektors](target:sector) `1/4` der [{.orange} gesamten Fläche](target:area)
des Kreises.

Wir können diese Beziehung in einer Gleichung ausdrücken:

{.text-center} `"Kreisbogenlänge" / "Umfang" = blank("Sektorfläche","Kreisradius","Winkelfläche") / "Kreisfläche" = "Mittelpunktswinkel" / blank("360°","180°","90°")`
:::

::: column(width=280)

    x-geopad.sticky(width=280 height=280): svg
      circle(x="point(140,140)" name="c")
      path(x="circle(c,100)" name="circ")
      circle.move(cx=240 cy=140 name="a" project="circ")
      circle.move(cx=85 cy=60 name="b" project="circ")

      path.yellow.fill(x="sector(c,b,angle(b,c,a).rad)" label="Sektor" target="sector" label-class="white")
      path.red.thick(x="arc(c,b,angle(b,c,a).rad)" label="Kreisbogen" target="arc")
      path.fill.blue(x="angle(b,c,a)" target="angle")

      path.fill.orange.transparent(x="circ" target="area")
      path.thick.purple.transparent(x="circ" target="circ")
      path.teal.fill.transparent(x="circle(c,32)" target="fangle")

:::

---
> id: arcs-2

Jetzt können wir diese Gleichungen umformen, um die Variable zu bestimmen, die uns
interessiert. Zum Beispiel,

::: column(width=320 parent="padded-thin")

| [Kreisbogenlänge](pill:red) | = | `"Umfang" × α/360` |
|                               | = | `2 r π × α/360`          |
{.eqn-system}

::: column(width=320)

| [Sektorfläche](pill:yellow) | = | `"Kreisfläche" × α/360` |
|                               | = | `r^2 π × α/360`         |
{.eqn-system}

:::

wobei _r_ der Radius des Kreises ist und _α_ die Größe des
Mittelpunktswinkels ist.

---
> id: arcs-rad

Wenn der Mittelpunktswinkel
in [Radiant](gloss:radians) anstatt in [Grad](gloss:degrees) angegeben wird, können wir die gleichen Gleichungen verwenden, müssen aber
360° durch [[`2 π`|`1/2 π`|`π`]] ersetzen:

::: .reveal(when="blank-0")
::: column(width=320 parent="padded-thin")

| [Kreisbogenlänge](pill:red) | = | `2 r π × α/(2π)` |
|                               | = | `r × α`          |
{.eqn-system}

::: column(width=320)

| [Sektorfläche](pill:yellow) | = | `r^2 π × α/(2π)` |
|                               | = | `1/2 r^2 α`      |
{.eqn-system}

:::

Beachte, wie die Gleichungen viel einfacher werden, und _π_ überall weggekürzt wird,
da, wie du dich vielleicht erinnern kannst, die [Definition von
Radiant](/course/circles/radians?hl=de#radians) im Grunde genommen nichts anderes als die Länge eines
Kreisbogens in einem Kreis mit dem Radius 1 ist.

Nun wollen wir uns ansehen, wie wir Kreisbögen und Sektoren verwenden können, um den Umfang der
Erde zu berechnen. [Weiter](btn:next)
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

    x-img(src="images/egypt-map.jpg" width=300 height=300 lightbox credit="© Google Maps")

{.caption} Die alten Ägypter haben lange Strecken gemessen, indem sie die Anzahl der
Schritte gezählt haben, die sie gemacht haben, um diese abzugehen.

::: column(width=300)

    x-img(src="images/well.jpg" width=300 height=300 lightbox)

{.caption} Einige Quellen sagen, dass der “Brunnen von Eratosthenes” auf der Flussinsel _Elephantine_
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

{.r} Hier siehst du den Brunnen in Syene sowie den Obelisken in Alexandria,
die Sonnenstrahlen fallen direkt in den Brunnen, treffen aber schräg auf den Obelisken und
werfen einen Schatten. [Weiter](btn:next)

::: .reveal(when="next-0")
Eratosthenes machte eine Messung des [{.teal} Winkels](target:angle1) dieses Schattens. Der Winkel betrug 7,2°. Dieser Wert muss mit dem [{.purple} Mittelpunktswinkel](target:angle2) des
[{.red}Kreisbogens](target:arc) von Alexandria nach Syene übereinstimmen, da es sich bei beiden um
[[Wechselwinkel|Komplementärwinkel|Supplementärwinkel]] handelt.
:::

::: .reveal(when="blank-0")
Nun können wir die Formel für die Kreisbogenlänge verwenden, die wir oben hergeleitet haben:

{.text-center} `pill("Kreisbogenlänge","red","arc") / pill("Erdumfang","blue","circ") = (input(7.2)"°") / "360°"`
:::

::: .reveal(when="blank-1")
Wenn wir diese umformen, stellen wir fest, dass der Umfang der Erde sich so berechnen lässt:

{.text-center} `pill("Erdumfang","blue","circ") = "360°" / "7.2°" × pill("800 km","red","arc") = input(40000) "km"`
:::

::: .reveal(when="blank-2")
Wie wir wissen, ist der Umfang eines Kreises `u = 2 r pi`, also ist der
Radius der Erde

{.text-center} `r_"Erde" = (40000 "km") / (2 pi) ≈ 6400 "km"`.
:::

::: column(width=300)

    x-geopad.sticky(width=300 height=400)
      img.sunrays(src="images/sunlight.png" width=300 height=400)
      svg.r
        defs: radialGradient#grad1(cx=200 cy=200 r=200 gradientUnits="userSpaceOnUse")
          stop(offset=0 stop-color="#63a3ff")
          stop(offset=1 stop-color="#0f82f2")

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

        image.obelisk.var(xlink:href="images/obelisk.svg" height=60 width=8 style="transform: translate(${b.x-4}px, ${b.y-60}px) rotate(-${angle(b,c,a).rad}rad)")

:::

---
> id: eratosthenes-2

Eratosthenes' Messung war eines der wichtigsten Experimente der
Antike. Seine Schätzung der Größe der Erde war überraschend genau, besonders
wenn man bedenkt, dass er nur Zugang zu sehr einfachen Messwerkzeugen hatte.

::: column(width=280)

    x-img(src="images/obelisk.jpg" width=280 height=450 lightbox)

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

--------------------------------------------------------------------------------

## Die Kreissätze

> section: circle-theorems
> sectionStatus: dev

{.todo} TODO

--------------------------------------------------------------------------------

## Regelmäßige Vielecke

> sectionStatus: dev
> section: cyclic-polygons

{.todo} TODO

--------------------------------------------------------------------------------

## Kugeln, Kegel und Zylinder

> section: spheres-cones-cylinders
> id: solids

In den vorangegangenen Abschnitten haben wir die Eigenschaften von Kreisen auf einer ebenen
Fläche untersucht. Aber unsere Welt ist eigentlich dreidimensional, also schauen wir uns
einige Körper in 3D an, die auf Kreisen basieren:

::: column(width=220 parent="padded-thin")

    x-solid(size=220)

{.text-center} Ein [__Zylinder__](gloss:cylinder) besteht aus zwei kongruenten,
parallelen Kreisen, die durch eine gekrümmte Oberfläche verbunden sind.

::: column(width=220)

    x-solid(size=220)

{.text-center} Ein [__Kegel__](gloss:cone) hat eine kreisförmige Grundfläche, die mit
einem einzigen Punkt (der sogenannten Spitze) verbunden ist.

::: column(width=220)

    x-solid(size=220 static)

{.text-center} Jeder Punkt auf der Oberfläche einer [__Kugel__](gloss:sphere) hat
den gleichen Abstand von ihrem Mittelpunkt.

:::

Beachte, dass die Definition einer Kugel fast identisch ist mit der Definition von einem
[[Kreis|Radius|Würfel]] - aber eben dreidimensional!

---
> id: gasometer

### Zylinder

::: column.grow

Hier siehst du den zylindrischen _Gasometer_ in Oberhausen, Deutschland.
Er wird verwendet um Erdgas, das als Brennstoff in nahegelegenen Fabriken
und Kraftwerken verwendet wird, zu speichern. Der Gasometer ist 120 m hoch und
sein Boden und seine Deckfläche sind zwei große Kreise mit einem
Radius von 35 m. Es gibt zwei wichtige Fragen, die hier für Ingenieure
von Interesse sein dürften:

* Wie viel Erdgas kann gespeichert werden? Das entspricht [[dem Volumen|der Fläche|dem Durchmesser]] des
  Zylinders.
* {.reveal(when="blank-0")} Wie viel Stahl wird für den Bau des Gasometers benötigt?
  In diesem Fall geht es (ungefähr) um [[die Oberfläche|den Umfang|die Diagonale]] des Zylinders.

{.reveal(when="blank-0 blank-1")} Wir wollen versuchen, Formeln für diese beiden
Werte zu finden!

::: column(width=300)

    x-img(src="images/gasometer.jpg" width=300 height=400 lightbox)

{.caption} Gasometer Oberhausen

:::

---
> id: cylinder-prism

#### Volumen eines Zylinders

Oberhalb und unterhalb des Zylinders befinden sich zwei kongruente Kreise, die __Grund- und Deckfläche__.
Die __{.m-blue}Höhe *h*__ eines Zylinders ist der senkrechte Abstand zwischen
Grund- und Deckfläche, und der __{.m-red}Radius *r*__ eines Zylinders ist einfach der Radius
der runden Grundfläche.

Wir können einen Zylinder mit einem ${n}{n|5|3,20,1}-seitigen
[__Prisma__](gloss:prism) annähern. Mit zunehmender Anzahl der Seiten beginnt das Prisma
immer mehr wie ein Zylinder auszusehen:

::: column(width=240)

    x-solid(size=240)

::: column(width=240)

    x-solid(size=240)

:::

---
> id: cylinder-volume

Auch wenn ein Zylinder technisch gesehen kein Prisma ist, haben sie viele Eigenschaften gemeinsam:
In beiden Fällen können wir das Volumen bestimmen, indem wir die Fläche ihrer
__{.m-red}Grundfläche__ mit ihrer __{.m-blue}Höhe__ multiplizieren. Das bedeutet, dass das Volumen eines
Zylinders mit Radius _{.b.m-red}r_ und Höhe _{.b.m-blue}h_ sich wie folgt berechnen lässt:

{.text-center} `V =` _{x-equation(solution="r^2 π h" keys="+ − × ÷ π frac sup brackets" short-var hints="cylinder-volume-hint1 cylinder-volume-hint2")}_

{.reveal(when="eqn-0")} Beachte, dass Radius und Höhe die gleichen Einheiten haben müssen,
z.B. wenn _r_ und _h_ beide in cm sind, dann wird das Volumen in
[[`"cm"^3`|`"cm"^2`|cm]] sein.

---
> id: oblique-cylinder
> goals: slide

::: column.grow

In den obigen Beispielen lagen die beiden Kreisflächen des Zylinders immer _direkt übereinander_:
Man nennt dies einen __geraden Zylinder__. Wenn die Kreisflächen nicht direkt
übereinander liegen, reden wir von einem __schiefen Zylinder__. Die Kreisflächen sind noch parallel,
aber die Seiten scheinen sich seitwärts zu ”lehnen“, in einem Winkel der nicht 90° groß ist.

    x-solid(size="300,200" static)
    x-gesture(target="#oblique-cylinder x-solid" slide="40,0")

::: column(width=300)

    x-img(src="images/pisa.jpg" width=300 height=360 lightbox)

{.caption} Beim _Schiefen Turm von Pisa_ in Italien handelt es sich um keinen
wirklich schiefen Zylinder.

:::

---
> id: cavalieri
> goals: slide

Das Volumen eines schiefen Zylinders erweist sich als genau das gleiche wie bei einem
geraden Zylinder mit gleichem Radius und gleicher Höhe. Dies ist auf das
[__Prinzip von Cavalieri__](gloss:cavalieri) zurückzuführen, benannt nach dem italienischen Mathematiker
[Bonaventura Cavalieri](bio:cavalieri): Wenn zwei Festkörper in jeder Höhe die gleiche
Querschnittsfläche haben, dann haben sie das gleiche Volumen.

Stell dir vor, du schneidest einen Zylinder in viele dünne Scheiben. Wir können diese
Scheiben dann horizontal verschieben, um einen schiefen Zylinder zu erhalten. Das Volumen der einzelnen Scheiben
ändert sich nicht, wenn man sie schräg stellt, daher bleibt auch das Gesamtvolumen
konstant:

::: column(width=240)

    x-solid(size=280 style="margin: -20px")

::: column(width=240)

    x-solid.slide-me(size=280 static style="margin: -20px")
    x-gesture(target=".slide-me" slide="60,0")

:::

---
> id: cylinder-surface

#### Oberfläche eines Zylinders

::: column.grow

Um die Oberfläche eines Zylinders zu bestimmen, müssen wir ihn in sein
[Netz](gloss:net) “auseinanderklappen”. Du kannst das selbst ausprobieren, indem du z.B. das
Etikett auf einer Lebensmitteldose ablöst.

Jeder Zylinder setzt sich aus zwei [[Kreisen|Kugeln|Quadraten]] zusammen,
oberhalb und unterhalb. Dazu kommt eine gebogene Seitenfläche, die eigentlich ein
großes [[Rechteck|Quadrat|Trapez]] ist.

* {.reveal(when="blank-0 blank-1")} Die zwei Kreisflächen haben jeweils eine Fläche von
  _{x-equation.small(solution="π r^2" keys="+ × π sup" short-var)}_.
* {.reveal(when="eqn-0")} Die Höhe des Rechtecks ist gleich
  _{x-equation.small(solution="h" keys=" " short-var)}_
  _{span.reveal(when="eqn-1")} und die Breite des Rechtecks ist
  gleich [[dem Umfang|dem Durchmesser|der Tangente]] der Kreise:_
  _{x-equation.small.reveal(when="blank-2" solution="2 r π" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: cylinder-surface-1

Das bedeutet, dass sich die gesamte Oberfläche eines Zylinders mit Radius _r_ und Höhe
_h_ wie folgt berechnen lässt:

{.text-center} `A =` _{x-equation(solution="2 r^2 π + 2 r π h" keys="+ − × ÷ π frac sup brackets" short-var)}_.

---
> id: cylinder-real-life

    figure: x-img(src="images/cylinders.jpg" width=460 height=125)

Zylinder sind überall in unserem Alltag zu finden - von der Limonade bis zum Toilettenpapier
oder Wasserleitungen. Fallen dir noch ein andere Beispiele ein?

Der _Gasometer_ von weiter oben hatte einen Radius von 35m und eine Höhe von 120m. Wir können nun
berechnen, dass sein Volumen etwa [[461.000 ± 1000]]`"m"^3`und seine
Oberfläche etwa [[34.080 ± 100]]`"m"^2`betragen.

---
> id: cone

### Kegel

::: column.grow

Ein [__Kegel__](gloss:cone) ist ein dreidimensionaler Körper, der eine kreisförmige
__{.m-red}Grundfläche__ hat. Seine Seite “verjüngt sich nach oben”, wie im Diagramm dargestellt, und endet
in einem einzigen Punkt, der __{.m-green}Spitze__.

Der __{.m-red}Radius__ des Kegels ist der Radius der kreisförmigen Grundfläche, und die
__{.m-blue}Höhe__ des Kegels ist der senkrechte Abstand von der Grundfläche
zur Spitze.

Genau wie andere Formen, die wir vorher betrachtet haben, sind Kegel überall um uns herum zu finden:
Eistüten, Verkehrskegel, bestimmte Dächer und sogar Weihnachtsbäume. Was fällt dir
sonst noch ein?

::: column(width=280)

    x-solid(size=280)

:::

::: column(width=120 parent="padded-thin")

    x-img(src="images/ice-cream.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/traffic.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/roof.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/christmas.jpg" width=120 height=120 lightbox)

::: column(width=120 parent="padded-thin")

    x-img(src="images/tipi.jpg" width=120 height=120 lightbox)

:::

---
> id: cone-volume

#### Volumen eines Kegels

::: column.grow

Wir haben zuvor das Volumen eines Zylinders ermittelt, indem wir es mit einem Prisma angenähert haben.
Ebenso können wir beim Volumen eines Kegels vorgehen, nur dass wir es mit einer
[__Pyramide__](gloss:pyramid) annähern.

Hier siehst du eine ${n}{n|5|3,18,1}-seitige Pyramide. Mit zunehmender Anzahl der Seiten
beginnt die Pyramide immer mehr wie ein Kegel auszusehen: Tatsächlich
könnten wir uns einen Kegel als eine Pyramide mit _unendlich vielen_ Seiten vorstellen!

::: column(width=280)

    x-solid(size=280 style="margin: -44px 0 -20px 0")

:::

---
> id: cone-volume-1

Das bedeutet auch, dass wir die Gleichung für das Volumen verwenden können: V
= 1/3 "Grundfläche" × "Höhe" `. Die Grundfläche eines Kegels ist ein Kreis, so dass das Volumen eines
Kegels mit Radius _r_ und Höhe _h_ sich wie folgt berechnet

{.text-center} `V =` _{x-equation(solution="1/3 π × r^2 h" keys="+ − × ÷ π frac sup brackets" short-var hints="cone-volume-hint1 cone-volume-hint2")}_

---
> id: cone-circumscribed

Beachte die Ähnlichkeit mit der Gleichung für das Volumen eines Zylinders. Stell dir vor
, du zeichnest einen Zylinder _um_ den Kegel herum, mit der gleichen Grundfläche und Höhe - man
nennt das den __umschriebenen Zylinder__. Wir stellen fest, dass das Volumen des Kegels genau [[ein
Drittel|die Hälfte|ein Viertel]] des Volumens des Zylinders beträgt:

    figure: x-solid(size=280)

---
> id: cone-hilbert

{.i.lgrey} Anmerkung: Man könnte meinen, dass unendlich viele kleine Seiten als Annäherung
etwas “ungenau” sind. Die Mathematiker haben lange Zeit versucht, einen
einfacheren Weg zu finden, um das Volumen eines Kegels zu berechnen. Im Jahr 1900 nannte der große
Mathematiker [David Hilbert](bio:hilbert) das sogar als eines der 23
wichtigsten ungelösten Probleme in der Mathematik! Heute wissen wir, dass es eigentlich
unmöglich ist.

---
> id: oblique-cone
> goals: slide

::: column.grow

Genau wie ein Zylinder muss ein Kegel nicht “gerade” sein. Wenn die Spitze
direkt über der Mitte der Grundfläche liegt, handelt es sich um einen __geraden Kegel__. Ansonsten sprechen
wir von einem __schiefen Kegel__.

Noch einmal können wir das Prinzip von Cavalieri anwenden, um zu zeigen, dass alle schiefen Kegel
das gleiche Volumen haben, solange sie die gleiche Grundfläche und Höhe haben.

::: column(width=280)

    x-solid(size="280,240" static)
    x-gesture(target="#oblique-cone x-solid" slide="60,0")

:::

---
> id: cone-surface

#### Oberfläche eines Kegels

::: column.grow

Die Bestimmung der Oberfläche eines Kegels ist etwas komplizierter. Wie zuvor können wir einen Kegel in sein Netz
entfalten. Bewege den Schieberegler, um zu sehen, was passiert: In diesem
Fall erhalten wir einen Kreis und [[einen Kreissektor|ein Kreissegment|einen Kreisbogen]].

{.reveal(when="blank-0")} Nun müssen wir nur noch die Fläche dieser beiden
Teilstücke addieren. Die __{.m-yellow}Grundfläche__ ist ein Kreis mit dem Radius _r_. Somit ist seine Fläche gleich

{.text-center.reveal(when="blank-0")} `pill(A_"Grundfläche","yellow","circle") =`
_{x-equation.small(solution="r^2 π" keys="+ × π sup" short-var)}_.

::: column(width=320)

    x-solid(size=340 style="margin: -32px -10px -10px;")
    x-slider(steps=100 speed=0.5)

:::

---
> id: slant-height

::: column.grow

Der Radius des __{.m-green}Sektors__ ist gleich dem Abstand vom
Rand eines Kegels zu seiner Spitze. Dies wird als __{.pill.green.step-target(data-to="s")}
Mantellinie *s*__ des Kegels bezeichnet und ist nicht gleich der eigentlichen
__{.pill.blue.step-target(data-to="h")}Höhe *h*__. Wir können die Mantellinie
mit Hilfe des [Satzes von Pythagoras](gloss:pythagoras-theorem) ermitteln:

| `s^2` | `=` | _{x-equation(solution="r^2 + h^2" keys="+ × π sup")}_       |
| `s`   | `=` | _{x-equation(solution="sqrt(r^2 + h^2)" keys="+ × sup sqrt")}_ |
{.eqn-system}

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=200): svg
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

Die _{span.pill.step-target.red(data-to="arc")}Kreisbogenlänge_ des Sektors ist
gleich dem [[Umfang|Durchmesser|Radius]] der _{span.pill.step-target.yellow(data-to="base")}Grundfläche_:
_{span.reveal(when="blank-0")}`2 r π`. Jetzt können wir die Sektorfläche
mit der [Formel](gloss:circle-sector) finden, die wir in einem vorherigen Abschnitt hergeleitet haben:_

::: x-equation-system.reveal(when="blank-0" steps="s^2 π * ( 2 r π ) / (2 s π) | r π s" hints="cone-surface-1|cone-surface-1")
| `pill(A_"Sektor","green","sector")` | `=` | `pill(A_"Kreis","teal","circle") × pill("Kreisbogen","red","arc") / pill("Umfang","teal","circumference")` |
|                | `=` | _{x-equation(solution="r π sqrt(r^2 + h^2)" fns="/" substitutions="s: sqrt(r^2 + h^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
:::

::: column(width=280)

    x-geopad.geo-sketch.no-background(width=280 height=300 style="margin-top: -20px"): svg
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

Schließlich müssen wir nur noch die Fläche der __{.m-yellow}Grundfläche__ und die Fläche
des __{.m-green}Sektors__ addieren, um die Gesamtoberfläche des Kegels zu erhalten:

{.text-center} `A =` _{x-equation(solution="r^2 π + r π sqrt(h^2 + r^2)" keys="+ − × ÷ π frac sup sqrt" short-var)}_

---
> id: sphere

### Kugeln

::: column.grow

Eine [__Kugel__](gloss:sphere) ist ein dreidimensionaler Körper, der aus allen
Punkten besteht, die den gleichen Abstand zu einem gegebenen __{.m-green}Mittelpunkt *M*__ haben . Dieser
Abstand wird als __{.m-red}Radius *r*__ der Kugel bezeichnet.

Du kannst dir eine Kugel als einen “dreidimensionalen [Kreis](gloss:circle)” vorstellen. Wie ein
Kreis hat auch eine Kugel einen __{.m-blue}Durchmesser *d*__, der
[[doppelt|halb]] so groß wie der Radius ist, sowie Sektoren und Segmente.

::: column(width=240)

    x-solid(size=240)

:::

---
> id: sphere-1

{.r} In einem [früheren Abschnitt](/course/circles/tangets-chords-arcs?hl=de#eratosthenes-1) hast du
gelernt, wie der griechische Mathematiker [Eratosthenes](bio:eratosthenes) den Radius der Erde mit dem Schatten eines Obelisken
berechnete - er betrug 6.371 km.
Nun wollen wir versuchen, das Gesamtvolumen und die Oberfläche der Erde zu berechnen.
[Weiter](btn:next)

---
> id: sphere-volume

#### Volumen einer Kugel

Um das Volumen einer Kugel zu bestimmen, müssen wir wieder einmal das Prinzip von Cavalieri anwenden:
Beginnen wir mit einer Halbkugel - einer Kugel, die entlang des Äquators in zwei Hälften geschnitten ist. Wir betrachten auch
einen Zylinder mit dem gleichen Radius und der gleichen Höhe wie diese Halbkugel, aber mit einem
umgekehrten Kegel, der aus seiner Mitte “herausgebohrt” worden ist.

Wenn du den Schieberegler nach oben bewegst, kannst du sehen, wie sich der Querschnitt dieser beiden
Formen in einer bestimmten Höhe über der Grundfläche ändert:

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(110,110)" name="c1")
      circle(x="c1.shift(0,-100*h)" name="h1")
      circle(x="h1.shift(-100 * sqrt(1-h*h),0)" name="a1")

      path.yellow.fill.light(x="triangle(c1,a1,h1)" target="tri")
      path(x="arc(c1,point(10,c1.x),pi)")
      path(x="segment(point(10,c1.x),point(210,c1.x))")
      path.green.thin(x="segment(c1,a1)" label="r" target="r tri")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h h1 tri")
      path.red.thick(x="segment(h1,a1)" label="x" target="x tri")
      path.red.thick(x="segment(h1,point(220-a1.x,a1.y))")

::: column(width=240)

    x-solid(size=240 style="margin: -24px 0 10px")

    x-geopad.r.no-background(width=220 height=120): svg
      circle(x="point(10,10)" name="a2" hidden)
      circle(x="point(210,10)" name="b2" hidden)
      path(x="polygon(a2,b2,point(210,110),point(10,110))")

      circle(x="point(110,110)" name="c2")
      circle(x="c2.shift(0,-100*h)" name="h2")
      circle(x="h2.shift(-100*h,0)" name="x2")

      path.thin(x="segment(a2,c2)")
      path.thin(x="segment(b2,c2)")
      path.blue.thin(x="segment(h1,c1)" label="h" target="h")
      path.blue.thin(x="segment(h1,point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(10,h2.y),point(110-100*h,h2.y))")
      path.red.thick(x="segment(point(110+100*h,h2.y),point(210,h2.y))")

:::

    x-slider(steps=100)

{.reveal(when="slider-0")} Versuchen wir, die Querschnittsfläche
dieser beiden Körper in einem Abstand der __{span.pill.blue.step-target(data-to="h")}Höhe *h*__
über der Grundfläche zu berechnen.

::: column.grow

{.reveal(when="slider-0")} Der Querschnitt der Halbkugel ist immer ein
[[Kreis|Ring|Zylinder]].

{.reveal(when="blank-0")} Der __{span.pill.red.step-target(data-to="x")}Radius
*x*__ des Querschnitts ist Teil eines _{span.pill.yellow.step-target(data-to="tri")}
rechtwinkligen Dreiecks_, so dass wir den [Satz des Pythagoras](gloss:pythagoras-theorem) anwenden können:

::: .reveal(when="blank-0")
{.text-center} `pill(r^2,"green","r") = pill(h^2,"blue","h1") + pill(x^2,"red","x")`.

Damit ergibt sich die Fläche des Querschnitts

    x-equation-system(steps="π x^2" hints="circle-cross-sec")
      table: tr
        td: em A
        td =
        td: x-equation(solution="π * (r^2 - h^2)" substitutions="x: sqrt(r^2 - h^2)" fns="sqrt" keys="+ − × ÷ π sup sqrt brackets" short-var)
:::

::: column.grow.reveal(when="eqn-0")

Der Querschnitt des Zylinderauschnitts ist immer ein [[Ring|Kreis|Kegel]].

::: .reveal(when="blank-1")
Der Radius der „Bohrung“ beträgt _h_. Wir können die Fläche des Rings finden,
indem wir die Fläche der Bohrung von der Fläche des größeren Kreises abziehen:

| _A_ | = | `r^2 π - h^2 π` |
|     | = | `(r^2 - h^2) π` |
{.eqn-system}
:::

:::

---
> id: sphere-volume-1

Es sieht so aus, als hätten beide Körper auf jeder Ebene die gleiche Querschnittsfläche.
Nach dem Prinzip von Cavalieri müssen beide Körper auch
[[das gleiche Volumen|die gleiche Oberfläche|den gleichen Umfang]] haben! _{span.reveal(when="blank-0")}Wir können das Volumen
der Halbkugel finden, indem wir das Volumen des [Zylinders](gloss:cylinder-volume)
und das Volumen des [Kegels](gloss:cone-volume) voneinander abziehen_

::: x-equation-system.reveal(when="blank-0" steps="r^3 π - 1/3 r^3 π" hints="sphere-volume")
| `V_"Halbkugel"` | = | `V_"Zylinder" - V_"Kegel"` |
|                 | = | _{x-equation(solution="2/3 r^3 π" keys="+ − × ÷ π frac sup brackets" short-var)}_ |
:::

---
> id: sphere-volume-2

Eine Kugel besteht aus [[2]] Halbkugeln, _{span.reveal(when="blank-0")}d.h.
ihr Volumen ergibt sich zu_

{.text-center.reveal(when="blank-0")} `V = 4/3 r^3 π`.

---
> id: earth-volume
> goals: numbers

::: column.grow

Die Erde ist (ungefähr) eine Kugel mit einem Radius von 6.371\ km. Daher beträgt ihr
Volumen

| `V` | `=` | _{x-equation(solution="4/3 pi × 6371^3" keys="+ − × ÷ π frac sup sqrt" short-var)}_ |
|     | `=` | _{span.numbers}1_ `"km"^3` |
{.eqn-system}

{.reveal(when="numbers")} Die durchschnittliche Dichte der Erde beträgt `5510 "kg/m"^3`,
d.h. ihre Gesamtmasse ist

{.text-center.reveal(when="numbers")} `"Masse" = "Volumen" × "Dichte" ≈ 6 × 10^24 "kg"`

{.reveal(when="numbers")} Das ist eine 6, gefolgt von 24 Nullen!

::: column(width=280)

    x-solid(size=280 rotate="0.5")

:::

---
> id: sphere-sum

Wenn du die Gleichungen für das Volumen von Zylinder, Kegel und Kugel vergleichst, wirst du
vielleicht einen der verblüffendsten Zusammenhänge in der Geometrie bemerken. Stelle dir vor, wir
haben einen Zylinder mit der gleichen Höhe wie der Durchmesser seiner Grundfläche. Wir können nun sowohl einen Kegel
als auch eine Kugel perfekt in sein Inneres einpassen:

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") +

{.text-center} Dieser Kegel hat den Radius `r` und die Höhe `2r`. Sein Volumen beträgt
_{x-equation.small(solution="2/3 r^3 π" keys="× π sup frac" short-var)}_

::: column.r(width=220)

    x-solid(size=220 style="margin-top: -20px")
    .large-op.reveal(when="blank-0" animation="pop") =

{.text-center} Diese Kugel hat den Radius `r`. Ihr Volumen beträgt
_{x-equation.small(solution="4/3 r^3 π" keys="× π sup frac" short-var)}_

::: column(width=220)

    x-solid(size=220 style="margin-top: -20px")

{.text-center} Der Zylinder hat den Radius `r` und die Höhe `2r`. Sein Volumen beträgt
_{x-equation.small(solution="2 r^3 π" keys="× π sup frac" short-var)}_

:::

{.reveal(when="eqn-0 eqn-1 eqn-2")} Beachte, dass, wenn wir das Volumen des Kegels und der Kugel
[[addieren|subtrahieren|vervielfachen]], wir genau
das Volumen des Zylinders erhalten!

---
> id: sphere-maps
> goals: move projection

#### Oberfläche einer Kugel

Es ist sehr schwierig, eine Formel für die Oberfläche einer Kugel zu finden. Ein Grund
dafür ist, dass wir die Oberfläche einer Kugel nicht aufschneiden und “ausbreiten” können, wie wir es weiter oben bei
Kegeln und Zylindern getan haben.

Dieses Problem stellt sich besonders, wenn man versucht Landkarten zu erstellen. Die Erde hat eine gekrümmte,
dreidimensionale Oberfläche, aber jede gedruckte Karte muss flach und zweidimensional sein,
was bedeutet, dass Geographen tricksen müssen: durch Strecken oder Stauchen bestimmter
Bereiche.

Hier siehst du einige verschiedene Arten von Karten, die als __Projektionen__ bezeichnet werden. Versuche, das rote Feld zu verschieben
und beobachte, wie dieser Bereich auf einer Kugel _tatsächlich_ aussieht:

    figure
      x-select.tabs
        .projection(data-name="mercator") Mercator
        .projection(data-name="cylindrical") Zylindrisch
        .projection(data-name="robinson") Robinson
        .projection(data-name="mollweide")  Mollweide
      .box.no-padding.sphere-maps
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
          p.caption Wenn du das Feld auf der Karte verschiebst, beachte, wie sich Größe und Form des #[em ausgewählten] Bereichs auf dem dreidimensionalen Globus ändern.
    x-gesture(target="#projection" slide="50, 20")

---
> id: sphere-surface

Um die Oberfläche einer Kugel zu bestimmen, können wir sie noch einmal mit einer
anderen Form annähern - zum Beispiel einem Polyeder mit vielen Flächen. Mit zunehmender Anzahl der
Flächen beginnt das Polyeder immer mehr wie eine Kugel auszusehen.

{.todo} DEMNÄCHST: KOMMT BALD!





--------------------------------------------------------------------------------

## Kegelschnitte

> section: conic-sections
> id: conics
> goals: ellipse parabola hyperbola

Der Kreis ist eine von vier verschiedenen Formen, die durch "Schnitte"
durch einen [Kegel](gloss:cone) erzeugt werden können. Das kann am Lichtkegel
einer Taschenlampe demonstriert werden:

    x-conic-section
    x-scale-box(width=760).conics
      .row
        .active
          p: strong Kreis
          include svg/circle.svg
        .hide
          p: strong Ellipse
          include svg/ellipse.svg
        .hide
          p: strong Parabel
          include svg/parabola.svg
        .hide
          p: strong Hyperbel
          include svg/hyperbola.svg

---
> id: conics-1

Wenn du die Taschenlampe senkrecht nach unten richtest, siehst du [[einen Kreis|eine Ellipse|ein Oval]]
 aus Licht. _{span.reveal(when="blank-0")}Wenn du den Lichtkegel neigst, wird daraus eine
[__Ellipse__](gloss:ellipse). Wenn du ihn noch weiter kippst, bekommst du eine
[__Parabel__](gloss:parabola) oder eine [__Hyperbel__](gloss:hyperbola)._

---
> id: conics-2

::: column.grow

Zusammenfassend werden diese vier Formen als [__Kegelschnitte__](gloss:conic-section) bezeichnet.
Auch wenn sie alle sehr unterschiedlich aussehen, sind sie doch eng miteinander verbunden: Tatsächlich können
sie alle nach der gleichen Gleichung erzeugt werden!

Kegelschnitte wurden zunächst vom altgriechischen Mathematiker [Apollonius
von Perge](bio:apollonius) untersucht, der ihnen auch ihre ungewöhnlichen Namen gab.

In späteren Kursen wirst du noch viel mehr über Parabeln und Hyperbeln erfahren. Lass uns
zunächst einen genaueren Blick auf die Ellipse werfen.

::: column(width=300)

    x-img(src="images/conics.svg" width=300 height=340)

:::

---
> id: ellipses

### Ellipsen

Eine Ellipse sieht irgendwie fast wie ein "länglicher Kreis" aus. Tatsächlich könnte man sie sich als einen Kreis mit _zwei Mittelpunkten_
vorstellen - diese werden als __Brennpunkte__
bezeichnet. So wie jeder Punkt auf einem Kreis den gleichen Abstand von seiner
Mitte hat, so hat jeder Punkt auf einer Ellipse die gleiche _Summe der Abstände_ zu seinen beiden
Brennpunkten.

Wenn du eine lange Schnur mit zwei Fixpunkten verbindest, kannst du eine perfekte
Ellipse zeichnen, indem du die Schnur gespannt hältst und so ganz herum zeichnest:

{.todo} KOMMT BALD! Ellipsenzeichnung interaktiv

---
> id: ellipses-2
> goals: v0 v1 v2 v3

Es gibt viele andere Darstellungsformen, mit denen man eine Ellipse zeichnen könnte:

::: column(width=320 parent="padded-thin")

    x-video(src="images/gears.mp4" poster="images/gears.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Zahnräder (Spirograph)

::: column(width=320)

    x-video(src="images/trammel.mp4" poster="images/trammel.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Elipsenzirkel

::: column(width=320)

    x-video(src="images/disk.mp4" poster="images/disk.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Scheibe

::: column(width=320)

    x-video(src="images/swing.mp4" poster="images/swing.jpg" width=320 height=230 credit="© Pavel Boytchev, Elica Logo")
    p.caption Schaukel

:::

---
> id: orbits

### Planetenbahnen

::: column.grow

Du erinnerst dich vielleicht an die Einleitung zu diesem Kurs, und dass altgriechische
Astronomen glaubten, dass die Erde im Mittelpunkt des Universums steht und dass
sich Sonne, Mond und Planeten auf kreisförmigen Bahnen um die Erde bewegen.

Zu ihrem Leidwesen hat die astronomische Beobachtung des Himmels dies
nicht wirklich bestätigt. So schien beispielsweise die Sonne
in einigen Jahreszeiten größer und in anderen kleiner. Auf einem Kreis sollte aber jeder Punkt [[den gleichen|einen zunehmenden|
einen abnehmendem]] Abstand von seinem Mittelpunkt haben.

::: column(width=330)

    x-img(src="images/hipparchus.jpg" width=330 height=280 lightbox)

{.caption} Der griechische Astronom Hipparchus von Nicäa

:::

---
> id: epicycles
> goals: play

Um das zu beheben, fügten Astronomen __Epizykeln__ zu ihrem Modell des Sonnensystems hinzu:
Planeten bewegen sich auf einem großen Kreis um die Erde, während sie sich gleichzeitig auf
einem kleineren Kreis drehen. Obwohl sehr kompliziert, war dies das am weitesten verbreitete
Modell unseres Universums für mehr als 1000 Jahre:

::: column(width=320)

    .r
      svg(width=320 height=320)
        circle.large-circle(cx=160 cy=160 r=120 fill="none" stroke="#ccc" stroke-width="2px")
        circle.small-circle(cx=280 cy=160 r=30 fill="none" stroke="#ccc" stroke-width="2px")
        path(fill="none" stroke="#fd8c00" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle(cx=160 cy=160 r=15 fill="#0f82f2")
        circle.earth(cx=310 cy=160 r=10 fill="#fd8c00")
      x-play-btn

{.caption} Dieser Planet  dreht sich in ${n}{n|6|2,12,1} kleinen Kreisen
(den __Epizykeln__) während er sich in einer großen Kreisbahn (dem
__Deferent__) bewegt.

::: column(width=320)

    x-img(src="images/epicycles.jpg" width=320 height=320)

{.caption} Eine Zeichnung aus dem 16. Jahrhundert mit Epizykeln im __geozentrischen Modell__. Das
griechische Wort "planetes" bedeutet "Wanderer".
:::

---
> id: kepler
> goals: play

::: column.grow

Im Laufe der Zeit erkannten die Menschen, dass die Erde nur einer von vielen Planeten ist, die die
Sonne umkreisen (das __heliozentrische Modell__), aber erst 1609 entdeckte der Astronom
[Johannes Kepler](bio:kepler), dass sich die Planeten eigentlich auf
_elliptischen Bahnen_ bewegen.

Die Sonne steht in einem der beiden Brennpunkte dieser Ellipsen. Die Planeten beschleunigen
sich, wenn sie der Sonne näher kommen, und verlangsamen sich, wenn sie sich weiter entfernen.

::: column(width=320)

    .r
      svg(width=320 height=240)
        path.sweep(fill="#0f82f2" opacity="0.25")
        path.orbit(fill="none" stroke="#ccc" stroke-width="3px" opacity="0.8" stroke-linejoin="round")
        circle.earth(cx=280 cy=120 r=10 fill="#0f82f2")
        circle(cx=220 cy=120 r=15 fill="#fd8c00")
        circle(cx=100 cy=120 r=4 fill="#ccc")
      x-play-btn

:::

---
> id: newton
> goals: apple

Ein paar Jahrzehnte später konnte [Isaac Newton](bio:newton) Keplers
Beobachtungen mit seinen neu entwickelten Gesetzen der [__Schwerkraft__](gloss:gravity) beweisen.
Newton erkannte, dass es eine Kraft zwischen zwei beliebigen Massen im Universum gibt -
ähnlich wie die Anziehungskraft zwischen zwei Magneten.

Die Schwerkraft ist es, die alles auf den Boden fallen lässt, und die Schwerkraft
ist es auch, die die Planeten sich um die Sonne herum bewegen lässt. Nur die große Geschwindigkeit, mit der sich die
Planeten bewegen, verhindert, dass sie direkt in die Sonne fallen.

::: column(width=280)

    .newton.interactive
      img(src="images/newton-2.jpg" width=280 height=370)
      img.over(src="images/newton-1.jpg" width=280 height=370)
      img.apple(src="images/newton-apple.png" width=30 height=40)
      .credit Frits Ahlefeldt
    x-gesture(target=".newton" offset="20,-120")

::: column.grow

Anhand der Newtonschen Gesetze kann man den Weg bestimmen, den Objekte nehmen,
wenn sie sich unter dem Einfluss der Schwerkraft bewegen. Es stellt sich heraus, dass sich Planeten auf Ellipsen bewegen, aber andere
Objekte wie Kometen können auf [parabolischen](gloss:parabola) oder
[hyperbolischen](gloss:hyperbola) Bahnen unterwegs sein: Sie fliegen nahe zur Sonne, bevor sie
um sie herum fliegen und ins Universum schießen und nie wieder zurückzukehren.

Der Legende nach inspirierte ein fallender Apfel Newton dazu, sich Gedanken über die Schwerkraft zu machen. Er
war einer der einflussreichsten Wissenschaftler aller Zeiten, und seine Ideen prägten fast 300 Jahre lang unser
Weltbild - bis Albert Einstein
1905 die Relativitätstheorie entdeckte.

