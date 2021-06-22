# Fraktale

## Einführung

> section: introduction
> id: intro
> trailer: ohygDnKg5mg
> color: "#8032AD"
> level: Advanced
> next: chaos

Wenn du dich in der Natur umschaust, hast du vielleicht komplizierte Pflanzen wie diese bemerkt:

::: column.r(width=320)

    img(src="images/fern.jpg" width=320 height=240)
    img.fractal-overlay(src="images/fern-overlay.png" width=320 height=240)

{.caption} Dieser __Farn__ besteht aus vielen kleinen Blättern, die von einem größeren abzweigen.

::: column.r(width=320)

    img(src="images/romanesco.jpg" width=320 height=240)
    img.fractal-overlay(src="images/romanesco-overlay.png" width=320 height=240)

{.caption} Dieser __Romanesco-Brokkoli__ besteht aus kleineren [[Zapfen|cubes|spheres]], die sich um einen größeren drehen.

:::

{.reveal(when="blank-0")} Anfangs erscheinen diese wie hochkomplexe Formen - aber wenn du genauer hinschaust, wirst du feststellen, dass beide einem relativ einfachen Muster folgen: Alle [Einzelteile](target:fractal) der Pflanzen sehen genauso aus wie die gesamten Pflanze, nur kleiner. Das gleiche Muster wird in kleineren Maßstäben immer wieder wiederholt. [Weiter](btn:next)

---

> id: fern

In der Mathematik nennen wir diese Eigenschaft __Selbstähnlichkeit__, und Formen, die sie haben, heißen [__Fraktale__](gloss:fractal). Sie sind einige der schönsten und bizarrsten Objekte in der gesamten Mathematik.

Um unsere eigenen Fraktale zu erstellen, müssen wir mit einem einfachen Muster beginnen und es dann in kleineren Maßstäben immer wieder wiederholen.

::: column.grow

Eines der einfachsten Muster könnte ein [{.pill.red} Liniensegment](target:s1) sein, wobei [{.pill.blue} zwei weitere Segmente](target:s2) an einem Ende abzweigen. Wenn wir dieses Muster wiederholen, haben diese beiden blauen Segmente auch zwei weitere Zweige an ihren Enden.

Du kannst die [blauen Punkte](target:dot) verschieben, um die Länge und den Winkel aller Zweige zu ändern. Dann erhöhe die Anzahl der Iterationen mit [dem Schieberegler](->#fern-slider) unten.

{.reveal(when="slider-0")} Abhängig von der Position der Zweige kannst du völlig unterschiedliche Muster erstellen - ähnlich wie der [Farn](action:set(130,228,197,184)) oben, ein [Baum](action:set(160,186,200,186)) oder [verschachtelte Fünfecke](action:set(113,235,232,238)). Was kannst du sonst noch finden? [Weiter](btn:next)

::: column(width=360)

    x-geopad(width=360 height=360 projections="no")
      canvas(width=720 height=720)
      svg
        circle(x="point(180,340)" name="a" hidden)
        circle(x="point(180,250)" name="b" hidden)
        circle.move.blue.pulsate(name="c1" cx=150 cy=175 target="s2 dot")
        circle.move.blue.pulsate(name="c2" cx=225 cy=220 target="s2 dot")
        path.thick.red(x="segment(a,b)" target="s1")
        path.thick.blue.rounded(x="polyline(c1,b,c2)" target="s2")
    x-slider#fern-slider(steps=8 :bind="steps")

:::

---

> id: triangle

::: column.grow(parent="right")

Ein weiteres berühmtes Fraktal ist das [__Sierpinski-Dreieck__](gloss:sierpinski-triangle). In diesem Fall beginnen wir mit einem großen, gleichseitigen Dreieck und schneiden dann wiederholt kleinere Dreiecke aus den verbleibenden Teilen aus.

{.reveal(when="slider=0")} Beachte, wie die endgültige Form aus [drei identischen Kopien von sich selbst besteht](target:x), und jede davon besteht aus noch kleineren Kopien des gesamten Dreiecks! Du könntest das Dreieck für immer vergrößern, und die Muster und Formen wiederholen sich immer weiter.

::: column(width=300)

    svg.sierpinski.var(width=300 height=265)
      path.red(:draw="triangle" :show="!steps")
      g.red.t1
        path(:draw="t1")
        path.white(:d="sierpinski(t1.points, steps-1)")
      g.red.t2
        path(:draw="t2")
        path.white(:d="sierpinski(t2.points, steps-1)")
      g.red.t3
        path(:draw="t3")
        path.white(:d="sierpinski(t3.points, steps-1)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: real

Die Pflanzen am Anfang dieses Kapitels _sehen wie Fraktale aus_, aber es ist eindeutig unmöglich, im wirklichen Leben _echte_ Fraktale zu erstellen. Wenn wir das gleiche Muster immer wieder wiederholen, immer kleiner, gelangen wir schließlich zu Zellen, Molekülen oder Atomen, die nicht mehr geteilt werden können.

Mit Hilfe der Mathematik können wir jedoch über die Eigenschaften nachdenken, die echte Fraktale „haben“ würden - und diese sind sehr überraschend… [Weiter](btn:next)

---
> id: dimension

### Fraktale Dimensionen

::: column(width=240)

    img(src="images/line.png" width=240 height=20)

::: column.grow

Lasst uns zunächst über die Dimension von Fraktalen nachdenken. Eine Linie hat die Dimension [[1]]. _{span.reveal(when="blank-0")} Wenn es um den Faktor 2 skaliert wird, erhöht sich seine Länge um den Faktor `2^1 = 2`. Offensichtlich!_

:::

---
> id: dimension-1

::: column(width=240)

    img(src="images/square.png" width=240 height=131)

::: column.grow

Ein Quadrat hat die Dimension [[2]]. _{span.reveal(when="blank-0")} Wenn du es um den Faktor 2 skalierst, vergrößert sich seine Fläche um den Faktor `2^2 =` [[4]]._

:::

---
> id: dimension-2

::: column(width=240)

    img(src="images/cube.png" width=240 height=157)

::: column.grow

Ein Würfel hat die Dimension [[3]]. _{span.reveal(when="blank-0")} Wenn du es um den Faktor 2 skalierst, erhöht sich sein Volumen um den Faktor `2^3 =` [[8]]._ _{span.reveal(when="blank-1")} Beachte, dass der größere Würfel im Bild aus 8 Kopien des kleineren besteht!_

:::

---
> id: dimension-3

::: column(width=240)

    img(src="images/sierpinski.png" width=240 height=114 style="position:sticky;top:48px")

::: column.grow

Schauen wir uns nun das Sierpinski-Dreieck an. Wenn wir es um den Faktor 2 skalieren, kannst du sehen, dass sich die „Fläche“ um den Faktor [[3]] erhöht.

{.reveal(when="blank-0")} Nehmen wir an, _d_ ist die Dimension des Sierpinski-Dreiecks. Unter Verwendung des gleichen Musters wie oben erhalten wir `2^d = 3`. Mit anderen Worten, _d_ = [[`log_2(3)`|`log_3(2)`]] _{span.reveal(when="blank-1")} ≈ 1,585…_

:::

---
> id: dimension-4

Aber warte ... wie kann etwas eine Dimension haben, die keine ganze Zahl ist? Es scheint unmöglich, aber dies ist nur eine der seltsamen Eigenschaften von Fraktalen. Dies ist es, was Fraktalen ihren Namen gibt: Sie haben eine __Bruchdimension__.

Mit jeder Iteration entfernen wir einen Teil der Fläche des Sierpinski-Dreiecks. Wenn wir dies unendlich oft tun könnten, wäre tatsächlich keine Fläche mehr vorhanden. Deshalb liegt das Sierpinski-Dreieck zwischen einem zweidimensionalen Fläche und einer eindimensionalen Linie.

::: .theorem

Während viele Fraktale _selbstähnlich sind_, ist eine bessere Definition, dass __Fraktale__ Formen sind, die eine __nicht ganzzahlige Dimension__ haben.

:::

[Weiter](btn:next)

---

> id: snowflake

### Die Koch-Schneeflocke

Es gibt viele Formen in der Natur, die wie Fraktale aussehen. Wir haben bereits zu Beginn dieses Kapitels einige Pflanzen gesehen. Andere gute Beispiele sind Schneeflocken und Eiskristalle:

::: column(width=120 parent="padded-thin")

    x-img(src="images/snow-1.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-2.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-3.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-4.jpg" width=120 height=120)

::: column(width=120)

    x-img(src="images/snow-5.jpg" width=120 height=120)

:::

---

> id: koch

Um unsere eigene fraktale Schneeflocke zu erzeugen, müssen wir erneut ein einfaches Verfahren finden, das wir immer wieder anwenden können.

::: column.grow

Beginnen wir wie beim Sierpinski-Dreieck mit einem einzigen gleichseitigen Dreieck. Anstatt bei jedem Schritt kleinere Dreiecke zu _entfernen_, fügen wir kleinere Dreiecke entlang der Kante _hinzu_. Die Seitenlänge jedes Dreiecks beträgt [[`1/3`|`1/4`|`1/2`]] der Dreiecke im vorherigen Schritt.

{.reveal(when="blank-0")} Die resultierende Form heißt [__Koch-Schneeflocke__](gloss:koch-snowflake), benannt nach dem schwedischen Mathematiker [Helge von Koch](bio:koch). Beachte erneut, dass [kleine Abschnitte](target:t2) des Randes der Schneeflocke genauso aussehen wie [größere Abschnitte](target:t1).

::: column(width=300)

    svg.var(width=300 height=300)
      path.blue(:draw="koch(steps)")
      rect.overlay(y=76 width=300 height=224 target="t1")
      polygon.overlay(points="300 0 90 0 107 76 0 76 0 300 300 300 300 0" target="t2")
    x-slider(steps=5 :bind="steps")

:::

---

> id: koch-dimension

::: column(width=380)

    img(src="images/koch.png" width=380 height=171)

::: column.grow

Wenn wir ein Kantensegment der Koch-Schneeflocke um den Faktor 3 skalieren, [[vervierfacht|verdreifacht|verdoppelt]] sich ihre Länge.

{.reveal(when="blank-0")} Unter Verwendung der gleichen Beziehung zwischen Dimensionen und Skalierungsfaktoren wie oben erhalten wir die Gleichung [[`3^d=4`|`2^d=4`|`2^d=3`|`4^d=3`]]. _{span.reveal(when="blank-1")} Dies bedeutet, dass die Dimension der Koch-Schneeflocke `§d = log_3(4) ≈ 1.262` beträgt._

:::

---

> id: koch-size

::: tab

#### Fläche _{span.check(when="blank-6")}_

Das Erstellen der Koch-Schneeflocken ist fast wie eine [rekursive Sequenz](gloss:sequence-recursive): Wir kennen die Startform (ein Dreieck) und wissen, wie man von einem Term zum nächsten gelangt (indem wir an jeder Kante weitere Dreiecke hinzufügen):

::: column(width=140)

    img#koch-0(src="images/koch-0.svg" width=140 height=160)

::: column(width=140)

    img#koch-1(src="images/koch-1.svg" width=140 height=160)

{.text-center} [[3]] neue Dreiecke

::: column(width=140)

    img(src="images/koch-2.svg" width=140 height=160)

{.text-center} [[12]] neue Dreiecke

::: column(width=140)

    img(src="images/koch-3.svg" width=140 height=160)

{.text-center} [[48]] neue Dreiecke

:::

{.reveal(when="blank-0 blank-1 blank-2")} Nach der ersten Iteration erhöht sich die Anzahl der neu hinzugefügten Dreiecke bei jedem Schritt um den Faktor [[4]]. Gleichzeitig verringert sich die Fläche dieser neuen Dreiecke bei jedem Schritt um den Faktor [[9]].

{.reveal(when="blank-3 blank-4")} Nehmen wir an, das [erste Dreieck](->#koch-0) hat eine Fläche von 1. Dann beträgt die Gesamtfläche der [nächsten drei Dreiecke](->#koch-1) `3 × 1/9 = 1/3`. Die folgenden Schritte bilden alle eine [[geometrische Reihe|arithmetische Reihe|quadratische Reihe]], _{span.reveal(when="blank-5")} mit dem gemeinsamen Verhältnis [[`4/9`|`9/4`|`4/3`]]._

{.reveal(when="blank-6")} Mit der Formel für die Summe der unendlichen [geometrischen Reihen](gloss:geometric-series) können wir berechnen, dass die Gesamtfläche der Koch-Schneeflocke beträgt

{.text-center.reveal(when="blank-6")} `A = 1 + 1/3 × 1/blank(1-4/9, 1+9/4, 9-1/4) reveal(= 8/5 = 1.6,"blank-7")`.

::: tab

#### Umfang _{span.check(when="blank-9")}_

::: column.grow

Wir können auch versuchen, den Umfang der Koch-Schneeflocke zu berechnen. Wie wir bereits gesehen haben, ändert sich die Länge des Umfangs bei jedem Schritt um den Faktor [[`4/3`|`3/4`|`1/4`]].

{.reveal(when="blank-8")} Dies bedeutet, dass wir wieder eine geometrische Reihe haben - aber in diesem Fall [[konvergiert sie nicht|konvergiert sie zu 0|hat sie keinen ersten Term]]. _{span.reveal(when="blank-9")} Dies bedeutet, dass der Umfang der Koch-Schneeflocke tatsächlich **unendlich lang ist**!_

::: column(width=220)

    img(src="images/koch-edge.svg" width=220 height=250)

:::

{.reveal(when="blank-9")} _Wenn dies nicht intuitiv erscheint, denke daran, dass wir den Umfang bei jedem Schritt mit `§4/3` multiplizieren und dies unendlich oft tun._

:::

---

> id: frozen

::: column.grow

Es ist fast undenkbar, dass man eine Form mit einer _endlichen_ Fläche und einem _unendlichen_ Umfang haben können - aber dies ist nur eine der vielen unerwarteten Eigenschaften von Fraktalen.

Kannst du dir andere Möglichkeiten einfallen lassen, um deine eigenen Fraktale zu erstellen? [Weiter](btn:next)

::: column(width=352)

    x-video(src="images/frozen.mp4" poster="images/frozen.jpg" width=352 height=198 audio credit="© Disney")

{.caption} “My soul is spiralling on frozen fractals all around…”

:::

---

> id: menger-sponge

### Menger-Schwamm

Fraktale müssen nicht "flach" sein, wie viele der obigen Beispiele. Eines der bekanntesten Fraktale, die dreidimensional aussehen, ist der __Menger-Schwamm__, benannt nach dem Mathematiker [Karl Menger](bio:menger), der ihn 1926 erstmals beschrieb.

::: column(width=320 parent="right")

    x-menger-sponge.var(size=320 :steps="steps")
    x-slider(steps=3 :bind="steps")

::: column.grow

Wir beginnen mit einem festen Würfel und bohren wiederholt immer kleinere Löcher in seine Seiten. Jede neue Iteration von Löchern hat [[`1/3`|`1/2`|`1/4`]] die Breite der vorherigen Iteration von Löchern.

{.reveal(when="blank-0")} Ein `3×3×3` Würfel besteht aus 27 kleineren Würfeln, aber hier haben wir einige davon entfernt. Der Menger-Schwamm besteht aus [[20]] Kopien von sich selbst, die dreimal kleiner sind.

{.reveal(when="blank-1")} Jetzt können wir versuchen, die Abmessung _d_ des Menger-Schwamms genau wie für die Koch-Schneeflocke oben zu berechnen. In diesem Fall erhalten wir `3^d = 20` oder `§d = log_3(20) ≈ 2.727`.

:::

{.reveal(when="blank-1")} Wenn du dir vorstellst, unendlich oft mehr und mehr Löcher auszuschneiden, ist kein tatsächliches Volumen mehr vorhanden. Deshalb ist der Würfel „nicht ganz“ dreidimensional! [Weiter](btn:next)

---

> id: coastlines

### Fraktale Küsten

Eines der Hauptmerkmale aller Fraktale, die wir bisher gesehen haben, ist, dass man für immer „hineinzoomen“ kann, und immer neue Muster findet. Um 1920 erkannte der britische Mathematiker [Lewis Fry Richardson](bio:richardson), dass dies auch für die Grenze oder Küste vieler Länder gilt.

Man beginnt mit der Grundform des Landes und fügen beim Vergrößern Flusseinlässe, Buchten und Flussmündungen sowie einzelne Klippen, Felsen, Kieselsteine usw. hinzu:

::: column(width=120 parent="padded-thin")

    x-img(src="images/coast-1.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-2.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-3.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-4.jpg" width=120 height=180)

::: column(width=120)

    x-img(src="images/coast-5.jpg" width=120 height=180)

:::

[Weiter](btn:next)

---

> id: coastlines-1

::: column.grow

Dies ist ein erhebliches Problem, wenn Sie versuchen, die Länge der Grenze eines Landes zu berechnen. Wie entscheidet man, wie weit die Ansicht vergrößert werden soll und welche Ecken und Winkel berücksichtigt werden sollen?

Eine Möglichkeit, die Länge der britischen Küste zu messen, besteht beispielsweise darin, ein langes Lineal zu nehmen, den ganzen Weg um die Strände herumzulaufen und dann alle Entfernungen zu addieren.

Wenn das Lineal ${rulers[index]}{index|0|0,8,1} km lang ist, müssen wir es ${count} Mal verwenden, damit wir eine Gesamtküstenlinie von ${count} × ${rulers[index]} = ${count * rulers[index]} km erhalten.

{.reveal(when="var-0")} Wir können einfach mit immer kleineren Herrschern weitermachen, und jedes Mal wird unser Ergebnis für die Länge der Küste etwas länger. Genau wie bei der Koch-Schneeflocke scheint die britische Küste unendlich lang zu sein! Dies wird oft als __Küstenparadoxon__ bezeichnet. [Weiter](btn:next)

::: column(width=280)

    .coastline: include svgs/britain.svg

:::

---

> id: coastline-grid

Einige Jahrzehnte später stieß der Mathematiker [Benoit Mandelbrot](bio:mandelbrot) bei seiner Arbeit bei IBM auf Richardsons Arbeit in einem alten Bibliotheksbuch. Er erkannte seine Bedeutung und auch seine Beziehung zu neueren Forschungen zu Fraktalen und Dimensionen.

::: column(width=340)

    include svgs/cells.svg
    x-slider(steps=10 continuous :bind="i")

::: column.grow

Die Küste Großbritanniens sieht sicherlich fraktal aus, ist aber nicht _selbstähnlich_ wie andere Fraktale, die wir zuvor gesehen haben. Um seine Größe zu ermitteln, können wir es in ein Raster zeichnen und die Anzahl der Zellen zählen, mit denen es sich schneidet.

{.r.reveal(when="slider-0")} Anfangs gibt es __{.pill.yellow} 88__ sich schneidende Zellen. Wenn wir die Küste um den Faktor 2 skalieren, gibt es __{.pill.yellow} 197__ sich schneidende Zellen - mehr als doppelt so viele! [Weiter](btn:next)

{.r.reveal(when="next-0")} Die Größe der Küste hat sich um den Faktor `§197/88` erhöht. Dies bedeutet, wie vorher, dass die Dimension der Küste

{.text-center.reveal(when="next-0")} `§d = log_2(197/88) ≈ 1.16` ist.

:::

---

> id: coastline-dimension-1

Wenn wir dies mit größeren Gittern wiederholen, stellen wir fest, dass die Dimension der britischen Küste tatsächlich ungefähr 1,21 beträgt. Mandelbrot erkannte, dass diese fraktale Dimension auch ein Maß für die __Rauheit__ einer Form ist - ein neues Konzept, für das er wichtige Anwendungen in vielen anderen Bereichen der Mathematik und Naturwissenschaften fand.

---

> id: nature

### Mehr Fraktale in Natur und Technologie

Während echte Fraktale in der Natur niemals auftreten können, gibt es viele Objekte, die _fast wie_ wie Fraktale aussehen. Wir haben bereits Pflanzen, Schneeflocken und Küsten gesehen, und hier sind einige weitere Beispiele:

::: column(width=200)

    x-img(src="images/nature/mountains.jpg" width=200 height=200 lightbox credit="NASA/GSFC")

{.caption} Gebirgszug in Zentralasien

::: column(width=200)

    x-img(src="images/nature/rivers.jpg" width=200 height=200 lightbox credit="NASA")

{.caption} Ganges-Delta in Indien

::: column(width=200 parent="padded-thin")

    x-img(src="images/nature/lightning.jpg" width=200 height=200 lightbox)

{.caption} Blitze

::: column(width=200)

    x-img(src="images/nature/retina.jpg" width=200 height=200 lightbox credit="Mikael Häggström, CC-BY-SA")

{.caption} Blutgefäße in der Netzhaut

::: column(width=200)

    x-img(src="images/nature/canyons.jpg" width=200 height=200 lightbox credit="US Geological Survey")

{.caption} Grand Canyon in den USA

::: column(width=200)

    x-img(src="images/nature/clouds.jpg" width=200 height=200 lightbox)

{.caption} Wolken

:::

Alle diese Objekte mögen völlig zufällig erscheinen, aber genau wie Fraktale gibt es ein zugrunde liegendes Muster, das bestimmt, wie sie gebildet werden. Die Mathematik kann uns helfen, die Formen besser zu verstehen, und Fraktale finden Anwendung in Bereichen wie Medizin, Biologie, Geologie und Meteorologie. [Weiter](btn:next)

---

> id: technology

::: column(width=300)

    x-img(src="images/terrain.jpg" width=360 height=270 lightbox)

{.caption} Computergeneriertes fraktales Gelände

::: column.grow

Wir können auch Fraktale verwenden, um realistische „Kopien“ der Natur zu erstellen, beispielsweise als Landschaften und Texturen, die in Videospielen oder computergenerierten Filmen verwendet werden. Das Wasser, die Berge und die Wolken in diesem Bild werden vollständig von einem Computer mit Hilfe von Fraktalen erstellt!

Und wir können diesen Prozess sogar umkehren, um digitale Bilder zu komprimieren und ihre Dateigröße zu reduzieren. Die ersten Algorithmen wurden in den 1980er Jahren von Michael Barnsley und Alan Sloan entwickelt, und neue werden noch heute erforscht.

:::

---

## Das Sierpinski-Dreieck

> section: sierpinski
> id: sierpinski

::: column.grow

Eines der Fraktale, die wir im vorherigen Kapitel gesehen haben, war das [__Sierpinski-Dreieck__](gloss:sierpinski-triangle), das nach dem polnischen Mathematiker [Wacław Sierpiński](bio:sierpinski) benannt ist. Es kann erstellt werden, indem mit einem großen, gleichseitigen Dreieck begonnen wird und dann wiederholt kleinere Dreiecke aus seiner Mitte herausgeschnitten werden.

{.r.reveal(when="slider-0")} Wacław Sierpiński war der erste Mathematiker, der über die Eigenschaften dieses Dreiecks nachdachte, aber es ist viele Jahrhunderte zuvor in Kunstwerken, Mustern und Mosaiken aufgetaucht.

::: column(width=300)

    svg.var.sierpinsk(width=300 height=265)
      path.red(:draw="triangle")
      path.white(:d="sierpinski(triangle.points, steps)")
    x-slider(steps=8 :bind="steps")

:::

---

> id: sierpinski-history

Hier einige Beispiele für Bodenfliesen aus verschiedenen Kirchen in Rom:

::: column(width=140 parent="padded-thin")

    x-img(src="images/floor-1.jpg" width=140 height=140 credit="Wiki LIC, CC-BY-SA-4.0")

::: column(width=140)

    x-img(src="images/floor-2a.jpg" width=140 height=140 credit="San Clemente, Carlini und Conversano, 2010")

::: column(width=140)

    x-img(src="images/floor-2.jpg" width=140 height=140 credit="© cattedraledianagni.it")

::: column(width=140)

    x-img(src="images/floor-3.jpg" width=140 height=140 credit="© Lycée Baudelaire")

:::

Wie sich herausstellt, erscheint das Sierpinski-Dreieck in einer Vielzahl anderer Bereiche der Mathematik, und es gibt viele verschiedene Möglichkeiten, es zu erzeugen. In diesem Kapitel werden wir einige davon untersuchen! [Weiter](btn:next)

---

> id: pascal
> goals: select

### Pascals Dreieck

Vielleicht erinnerst du dich bereits an das Sierpinski-Dreieck aus unserem Kapitel über [__Pascals Dreieck__](gloss:pascals-triangle). Dies ist eine Zahlenpyramide, in der jede Zahl die Summe der beiden obigen Zahlen ist. Tippe auf alle _geraden_ Zahlen im Dreieck unten, um sie hervorzuheben - und schau ob du ein Muster findest:

    - var fact = function(x) { return !x ? 1 : (x * fact(x-1)); };
    - var bin = function(a, b) { return Math.round(fact(a) / fact(b) / fact(a - b)); };
    figure: .overflow-wrap: .pascal-grid.small(style="width: 760px")
      - var i = 0;
      while i <= 18
        - var j = 0
        .r
          while j <= i
            - b = bin(i, j)
            .c= b
            - j += 1;
        - i += 1;

---

> id: pascal-1

Pascals Dreieck kann für immer nach unten fortgesetzt werden, und das Sierpinski-Muster wird mit immer größeren Dreiecken fortgesetzt. Du kannst bereits den Anfang eines noch größeren Dreiecks sehen das in Zeile 16 beginnt.

Wenn zwei benachbarte Zellen durch 2 teilbar sind, muss ihre Summe in der Zelle darunter auch durch 2 teilbar sein - deshalb können wir nur farbige Dreiecke (oder einzelne Zellen) erhalten. Natürlich können wir auch versuchen, alle Zellen zu färben, die durch _andere Zahlen_ teilbar sind. Was glaubst du wird in diesen Fällen passieren? [Weiter](btn:next)

---

> id: pascal-large

    .pascal-canvas
      canvas.pascal(width=960 height=840)
      .label Divisible by #[span.circled.var(style="background: ${gradient[n - 2]}") ${n}]:

Hier ist eine winzige Version der ersten 128 Reihen des Pascalschen Dreiecks. Wir haben alle Zellen hervorgehoben, die durch ${n}{n|2|2,40,1} teilbar sind - was fällt dir auf?

{.reveal(when="var-0")} Für jede Zahl haben wir ein anderes Dreiecksmuster ähnlich dem Sierpinski-Dreieck. Das Muster ist besonders regelmäßig, wenn wir eine [[Primzahl|Dreieckszahl|Fibonacci Zahl]] wählen. _{span.reveal(when="blank-0")} Wenn die Zahl *viele verschiedene* Primfaktoren hat, sieht das Muster weniger regelmäßig aus._

    x-gesture(target="#pascal-large x-var" slide="100,0")

---

> id: chaos-game
> goals: point play

### Das Chaos-Spiel

::: column(width=360 parent="right")

    x-geopad.sticky#chaos-geo(width=360)
      canvas(width=720 height=720)
      svg
        circle.red(name="x0" x="tri[0]")
        circle.green(name="x1" x="tri[1]")
        circle.yellow(name="x2" x="tri[2]")
    x-gesture(target="#chaos-geo")

::: column.grow

Hier siehst du die drei Eckpunkte eines gleichseitigen Dreiecks. Tippe auf eine beliebige Stelle im grauen Bereich, um einen vierten Punkt zu erstellen.

{.r.reveal(when="point")} Jetzt spielen wir ein einfaches Spiel: Wir wählen zufällig einen der Eckpunkte des Dreiecks aus, zeichnen ein Liniensegment zwischen unserem Punkt und dem Scheitelpunkt und finden dann den [{.pill.red} Mittelpunkt](target:p1) dieses Segments. [Weiter](btn:next)

{.r.reveal(when="next-0")} Nun wiederholen wir den Vorgang: Wir wählen einen anderen zufälligen Scheitelpunkt aus, zeichnen das Segment von unserem letzten Punkt und finden dann den [{.pill.green} Mittelpunkt](target:p2). Beachten Sie, dass wir diese neuen Punkte basierend auf der Farbe des Scheitelpunkts des ausgewählten Dreiecks färben. [Weiter](btn:next)

{.reveal(when="next-1")} Bisher ist nichts Überraschendes passiert - aber schau was passier wenn wir denselben Vorgang noch viele Male wiederholen:

{.text-center.reveal.var(when="next-1")} _{button.btn.btn-red(@click="play()")} 1000 Schritte hinzufügen_

:::

---

> id: fractal-builder
> goals: s1 s2 shape play

Dieser Vorgang wird als __Chaos-Spiel__ bezeichnet. Am Anfang kann es einige Streupunkte geben, aber wenn Sie dieselben Schritte viele Male wiederholen, sieht die Punktverteilung genau wie das Sierpinski-Dreieck aus!

Es gibt viele andere Versionen davon - zum Beispiel könnten wir mit einem Quadrat oder einem Fünfeck beginnen, wir könnten zusätzliche Regeln hinzufügen, wie zum Beispiel, dass wir nicht zweimal hintereinander denselben Scheitelpunkt auswählen können, oder wir könnten den nächsten Punkt in einem Verhältnis auswählen außer `§1/2` entlang des Segments. In einigen dieser Fälle erhalten wir nur eine zufällige Verteilung der Punkte, in anderen Fällen zeigen wir noch mehr Fraktale:

    include components/chaos-game

{.reveal(when="s1 s2 play")} Hast du den [Sierpinski-Teppich](action:carpet()) oder diese [fünfeckige Schneeflocke](action:snowflake()) entdeckt, die auf dem [__Goldenen Schnitt__](gloss:golden-ratio) basiert?

---

> id: cellular
> goals: sierpinski

### Zelluläre Automaten

Ein __Zellularautomat__ ist ein Gitter, das aus vielen einzelnen Zellen besteht. Jede Zelle kann sich in unterschiedlichen "Zuständen" befinden (z. B. unterschiedlichen Farben), und der Zustand jeder Zelle wird durch ihre umgebenden Zellen bestimmt.

In unserem Beispiel kann jede Zelle entweder schwarz oder weiß sein. Wir beginnen mit einer Zeile, die nur ein einziges schwarzes Quadrat enthält. In jeder folgenden Zeile wird die Farbe jeder Zelle durch die drei unmittelbar darüber liegenden Zellen bestimmt. Tippen Sie auf die acht möglichen Optionen unten, um deren Farbe umzudrehen. Können Sie eine Reihe von Regeln finden, die ein Muster ähnlich dem Sierpinski-Dreieck erstellen?

    figure: x-automaton(size=28)

{.reveal(when="sierpinski")} Für jede der acht Optionen gibt es zwei Auswahlmöglichkeiten, was bedeutet, dass insgesamt `2^8 =` [[256]] mögliche Regeln vorhanden sind. Einige, wie [Regel 126](action:setRule('01111110')), sehen aus wie das Sierpinski-Dreieck. Andere, wie [Regel 30](action:setRule('01111000')), sehen völlig chaotisch aus. Es wurde 1983 von [Stephen Wolfram](bio:wolfram) entdeckt und kann von Computern sogar verwendet werden, um Zufallszahlen zu generieren!

---

> id: cellular-1

::: column.grow

Zelluläre Automaten zeigen, wie hochkomplexe Muster mit sehr einfachen Regeln erstellt werden können - genau wie Fraktale. Viele Prozesse in der Natur folgen ebenfalls einfachen Regeln, erzeugen jedoch unglaublich komplexe Systeme.

In einigen Fällen kann dies dazu führen, dass Muster auftreten, die genau wie zellulare Automaten aussehen, z. B. die Farben auf dem Schalenmantel dieser Schnecke.

::: column(width=320)

    x-img(src="images/shell.jpg" width=320 height=240 lightbox credit="Richard Ling, CC BY-SA 3.0")

{.caption} Conus Textil, eine giftige Meeresschnecke

:::

---

> id: tetrahedra

### Sierpinski Tetrahedra

Es gibt viele Varianten des Sierpinski-Dreiecks und andere Fraktale mit ähnlichen Eigenschaften und Erstellungsprozessen. Einige sehen zweidimensional aus, wie der _Sierpinski-Teppich_, den Sie oben gesehen haben. Andere sehen dreidimensional aus, wie diese Beispiele:

::: column(width=320)

    x-sierpinski-tetrahedra(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski Tetrahedra

::: column(width=320)

    x-sierpinski-pyramid(size=320 steps=5 style="display: block; margin-top: -20px")

{.caption} Sierpinski-Pyramide

:::

---

## Die Mandelbrot-Menge

> section: mandelbrot
> id: iteration
> goals: move-1 move-2

Alle Fraktale, die wir in den vorherigen Kapiteln gesehen haben, wurden mit einem Prozess der __Iteration__ erstellt: Sie beginnen mit einem bestimmten Muster und wiederholen es dann immer wieder.

::: column(width=112 parent="padded-thin")

    img(src="images/koch-0.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-1.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-2.svg" width=112 height=128)

::: column(width=112 parent="padded-thin")

    img(src="images/koch-3.svg" width=112 height=128)

:::

Dies ähnelt einem anderen Konzept in der Mathematik, das Sie zuvor gesehen haben: Mit [rekursiven Sequenzen](gloss:sequence-recursive) beginnen Sie mit einer bestimmten Zahl und wenden dann immer wieder dieselbe rekursive Formel an, um die nächste Zahl in der zu erhalten Reihenfolge.

Nehmen wir als Beispiel die rekursive Formel `§x_n = x_(n-1)^2` und zeichnen ihre Begriffe auf eine Zahlenlinie. Sie können den Wert von `pill(x_0,"yellow","x0")` ändern:

    figure: x-geopad.no-background(width=720 height=120 x-axis="-2.4,4.4,1" y-axis="-0.1,0.1" axes="yes,no" padding="40 20 0"): svg
      circle.yellow.move.pulsate(x="point(0,0)" name="x0" project="line(point(-3,0),point(3,0))" target="x0")
      path.blue.thick.reveal.light(x="segment(point(-1,0),point(1,0))" style="stroke-width: 20px" when="move-1 move-2" animation="draw" duration=1200)
      path.yellow(:d="drawArc(x0)")

---

> id: iteration-1

Beachten Sie, wie sich die resultierende Sequenz je nach Startwert `x_0` sehr unterschiedlich verhalten kann:

::: column.frame.f-blue.text-center(width=212 parent="padded-thin")

Wenn `x_0 > 1`, [[divergiert|konvergiert]] die Sequenz: _{span.reveal(when="blank-0")} wächst sie einfach weiter bis unendlich._

::: column.frame.f-blue.text-center(width=212)

Wenn `x_0` zwischen –1 und 1 liegt, [[konvergiert|divergiert]] die Sequenz.

::: column.frame.f-blue.text-center(width=212)

Wenn `x_0 < -1`, [[divergiert|konvergiert]] die Sequenz.

:::

---

> id: iteration-2

Bisher haben wir nichts Neues gelernt. Vor ungefähr einem Jahrhundert begannen Mathematiker jedoch zu untersuchen, was mit diesen Sequenzen passiert, wenn Sie [__komplexe Zahlen__](gloss:complex-numbers) anstelle nur der reellen Zahlenlinie verwenden. Ihre Entdeckungen waren einige der überraschendsten und schönsten Ergebnisse in der gesamten Mathematik.

---

> id: julia
> goals: wipe-a wipe-b wipe-c wipe-d

### Julia Sets

Verwenden wir dieselbe Sequenz wie zuvor, `§x_n = x_(n-1)^2`, jedoch auf der komplexen Ebene. Sie können die Position von `pill(x_0,"yellow","x0")` verschieben, um zu sehen, was mit den folgenden Begriffen passiert. Wenn die Sequenz so aussieht, als würde sie konvergieren, färben wir den entsprechenden Punkt in der Ebene in _{span.pill.blue} blau_:

    figure: x-geopad(slot="stage" width=720 height=480 x-axis="-2.2,2.2,1" y-axis="-1.5,1.5,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-positioning="no" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.yellow.pulsate(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2)" target="x3")
        path.yellow(x="spiral(x0)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Converges!
            strong.var(:show="!converges" data-display="inline") Diverges!

{.reveal(when="wipe-a wipe-b wipe-c wipe-d")} Wie Sie sehen können, konvergiert die Sequenz, solange `pill(x_0,"yellow","x0")` [[innerhalb des Einheitskreises| outside the unit square|above the _x_-axis]] liegt _{span.reveal(when="blank-0")} (der Kreis mit dem Radius 1, zentriert am Ursprung)._

---

> id: julia-1

Lassen Sie uns die Dinge jetzt etwas schwieriger machen. Anstatt nur die vorherige Zahl zu quadrieren, fügen wir jedes Mal eine Konstante _{.pill.red} c_ hinzu (die eine beliebige komplexe Zahl sein kann). Mit anderen Worten, `§x_n = x_(n-1)^2 + c`. Glauben Sie, wir werden immer noch einen Konvergenzkreis bilden? Welche anderen Formen könnten wir Ihrer Meinung nach sehen? [Weiter](btn:next)

---

> id: julia-2

In diesem Diagramm können Sie die Position von `pill(x_0,"yellow","x0")` sowie den Wert von `pill(c,"red","c")` verschieben:

::: x-slideshow

    x-geopad(slot="stage" width=720 height=480 x-axis="-1.8,1.8,1" y-axis="-1.2,1.2,1" axes grid padding=8 projections="no" style="margin-bottom: 24px" label-suffix=",i" axis-names="Real, Imaginary")
      canvas(width=1440 height=960)
      svg
        circle.move.yellow(name="x0" x="point(0.5,0.5)" target="x0")
        circle.move.red(name="c" x="point(0,0)" target="c")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

{div(slot="legend")} Wir wissen bereits, was passiert, wenn [`c = 0`](action:animate(0,0)) - das ist das gleiche wie im obigen Beispiel. Die Sequenzkonvergenz, solange `x_0` innerhalb des Einheitskreises liegt.

{div(slot="legend")} Sobald wir den Wert von _c_ ändern, passiert etwas Wunderbares. Der Kreis verwandelt sich in eine hochkomplexe fraktale Form.

{div(slot="legend")} Wenn [`c = –0.54 + 0.5i`](action:animate(-0.54,0.5)), teilt sich die Form in unendlich viele winzige Elemente, die in Spiralen angeordnet sind.

::: div(slot="legend")

In einigen Fällen konvergiert die Sequenz nicht zu einem _Einzelpunkt_, sondern erreicht einen Zyklus aus mehreren Punkten wie ein Dreieck. Diese Zyklen werden als __Umlaufbahnen__ bezeichnet.

Blau gefärbte Punkte bedeuten, dass die entsprechende Sequenz entweder konvergiert oder eine Umlaufbahn hat (wir sagen, dass sie __begrenzt ist__). Punkte, die weiß bleiben, bedeuten, dass die entsprechende Sequenz __divergiert__: Sie ist nicht begrenzt und sprengt schließlich bis ins Unendliche.

:::

{div(slot="legend")} Was kannst du noch finden? Schauen Sie sich die Muster an, wenn [`c = 0.4 + 0.21i`](action:animate(0.4,0.21)) oder wenn [`c = 0.38 – 0.25i`](action:animate(0.38,-0.25)). Es gibt auch einige Werte von _c_, wobei _jede_ Sequenz divergiert, sodass die gesamte komplexe Ebene weiß bleibt.

:::

---

> id: julia-3

Die verschiedenen Formen, die durch Färben der Zahlen gebildet werden, heißen [__Julia Sets__](gloss:julia-set). Sie wurden unabhängig voneinander von zwei französischen Mathematikern, [Gaston Julia](bio:julia) und [Pierre Fatou](bio:fatou), um 1918 entdeckt.

Zu dieser Zeit gab es keine Computer, um zu visualisieren, wie Julia-Sets tatsächlich aussahen. Mathematiker wie Julia und Fatou konnten mathematisch über sie nachdenken, aber sie sahen immer nur grobe, handgezeichnete Skizzen, wie sie aussehen könnten.

Wir haben dieses Problem heute nicht - die Bilder unten zeigen alle verschiedene Julia-Sets. Die verschiedenen Farben zeigen _an, wie schnell_ die Sequenz an diesem Punkt divergiert:

::: column(width=220)

    x-img(src="images/julia-1.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.70176 – 0.3842"i"`

::: column(width=220)

    x-img(src="images/julia-2.jpg" width=220 height=165 lightbox)

{.caption} `c = −0.4 + 0.6"i"`

::: column(width=220)

    x-img(src="images/julia-3.jpg" width=220 height=165 lightbox)

{.caption} `c = 0.285 + 0.01"i"`

:::

[Weiter](btn:next)

---

> id: mandel-paint
> goals: wipe-a wipe-b wipe-c

### Die Mandelbrot-Menge

Beim Erstellen der verschiedenen Julia-Mengen haben Sie möglicherweise bemerkt, dass es einige Werte von _c_ gab, für die jede Sequenz divergiert, und die gesamte komplexe Ebene weiß bleibt. Einige Jahrzehnte nach Julia und Fatou versuchte eine neue Generation von Mathematikern abzubilden, wie diese Gebiete aussahen.

Im vorherigen Beispiel haben wir einen festen Wert für `pill(c,"red","c")` ausgewählt und dann die Position von `pill(x_0,"yellow","x0")` geändert, um die Ebene einzufärben. Legen Sie nun den Wert von `pill(x_0 = 0,"yellow","x0")` fest und ändern Sie stattdessen den Wert von `pill(c,"red","c")`.

Übermalen Sie die komplexe Ebene erneut, um den Bereich anzuzeigen, in dem die Sequenzen begrenzt bleiben. Welche Formen erwarten Sie zu erscheinen?

    figure: x-geopad.no-background(width=720 height=480 x-axis="-2.1,1.1,1" y-axis="-1.1,1.1,1" axes grid padding=8 projections="no" label-suffix=",i" axis-names="Real, Imaginary")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      canvas(width=1440 height=960 style="opacity: 1")
      svg
        circle.move.red.pulsate(name="c" cx=0 cy=0 target="c")
        circle.yellow.transparent(name="x0" x="point(0,0)" target="x0")
        circle.yellow.transparent(name="x1" x="iterate(x0,c)" target="x1")
        circle.yellow.transparent(name="x2" x="iterate(x1,c)" target="x2")
        circle.yellow.transparent(name="x3" x="iterate(x2,c)" target="x3")
        path.yellow(x="spiral(x0,c)")
      .geo-legend
        .formula.md `pill(x_n,"yellow") = pill(x_(n-1),"yellow")^2 + pill(var("complex(c)"),"red","c")`
        .sequence
          .md `pill(x_0,"yellow", "x0") = var("complex(x0)")`
          .md `pill(x_1,"yellow", "x1") = var("complex(x1)")`
          .md `pill(x_2,"yellow", "x2") = var("complex(x2)")`
          .md `pill(x_3,"yellow", "x3") = var("complex(x3)")`
          div
            span.vdots …
            strong.var.m-blue(:show="converges" data-display="inline") Bounded!
            strong.var(:show="!converges" data-display="inline") Diverges!

---

> id: mandel-history

Dieses Fraktal wird als [__Mandelbrot-Menge__](gloss:mandelbrot-set) bezeichnet. Wenn es um 90 ° gedreht wird, sieht es fast aus wie eine Person mit Kopf, Körper und zwei Armen. Es wurde 1978 zum ersten Mal in einem Forschungsbericht der Mathematiker Robert Brooks und Peter Matelski definiert und gezeichnet:

    figure: x-img(src="images/mandelbrot.jpg" width=360 height=290 credit="© Princeton University Press")

Einige Jahre später verwendete [Benoit Mandelbrot](bio:mandelbrot) die leistungsstarken Computer von IBM, um eine viel detailliertere Visualisierung des Fraktals zu erstellen, das später nach ihm benannt wurde. Die ersten Ausdrucke sahen anders aus als erwartet - bis er feststellte, dass die an den Druckern arbeitenden Techniker die „Unschärfe“ an ihrem Rand bereinigten, vorausgesetzt, dass sie durch Staubpartikel oder Druckerfehler verursacht wurde und kein definierendes Merkmal von Fraktalen war ! [Weiter](btn:next)

---

> id: mandel-zoom

Wie alle Fraktale können wir die Mandelbrot-Menge für immer „vergrößern“ und auf jeder Skala neue Muster finden. Hier kannst du einen Teil der Mandelbrot-Menge vergrößern, der als __Seepferdchen-Tal__ bezeichnet wird. Schwarze Punkte befinden sich _innerhalb von_ der Mandelbrot-Menge, wo die Sequenz begrenzt ist. Farbige Punkte befinden sich _außerhalb von_ der Mandelbrot-Menge, wo die Sequenz divergiert, und die verschiedenen Farben zeigen _an, wie schnell_ es bis ins Unendliche wächst:

    .mandel-frame
      - i = 1;
      while i <= 27
        img(src="images/mandel/mandel-" + i + ".jpg" width=760 height=500)
        - i += 1;
      .scale.var Scale: ${pow(scale)}
    x-slider(steps=27 continuous speed=0.1 :bind="scale")

---

> id: mandel-zoom-1

Dieser Schieberegler besteht aus 27 Einzelbildern bis zu einer Zoomstufe von über 14 Billiarden oder `2^54`. Insgesamt dauerte das Rendern auf einem modernen Laptop fast 45 Minuten. Die Mandelbrot-Menge kann mit nur einer einfachen Gleichung `§x_n = x_(n-1)^2 + c` erstellt werden, ist jedoch unendlich komplex und atemberaubend schön.

---

> id: mandel-orbits

::: column(width=360 parent="right")

    x-geopad.no-background(width=360 height="340" x-axis="-1.5,0.5,1" y-axis="-0.9,0.9,1" axes padding=8 labels="no")
      img(src="images/mandelbrot.png" data-bounds="1,0.5,-1,-1.5")
      svg
        circle.move.red.pulsate(name="c" x="point(-0.3,0.4)" target="c")
        path.blue.transparent.fill(x="cardioid" target="bulb0")
        path.blue.transparent.fill(x="circle(point(-0.125,0.745),0.094)" target="bulb1")
        path.blue.transparent.fill(x="circle(point(-0.5045,0.563),0.039)" target="bulb2")
        path.yellow.thin(x="spiral(point(0,0),c)")

::: column.grow

Wenn Sie den Wert von [{.pill.red} c](target:c) um die Mandelbrot-Menge verschieben, werden Sie möglicherweise eine merkwürdige Eigenschaft bemerken:

* Alle Sequenzen innerhalb des [Hauptkörpers](target:bulb0) der Mandelbrot-Menge [[konvergieren|diverge|reach an orbit]] _{span.reveal(when="blank-0")} zu einem einzelnen Punkt._
* {.reveal(when="blank-0")} Die Sequenzen innerhalb der [großen Glühbirne](target:bulb1) oben [[erreichen eine Umlaufbahn|converge|diverge]] _{span.reveal(when="blank-1")}, die aus [[3]] Punkten besteht._
* {.reveal(when="blank-2")} Sequenzen in [dieser kleineren Glühbirne](target:bulb2) haben Umlaufbahnen mit der Länge [[5]].

:::

{.reveal(when="blank-3")} Jede Glühbirne hat eine Umlaufbahn unterschiedlicher Größe, wobei kleinere Glühbirnen immer mehr Punkte in ihrer Umlaufbahn haben. Die Größe dieser Umlaufbahnen hängt eng mit der __Logistic Map__ zusammen, einem wichtigen Konzept in der [Chaostheorie](/course/chaos).

---

> id: mandel-outro

::: column.grow

Bernoit Mandelbrot widmete den größten Teil seines Lebens dem Studium der Fraktale sowie der Mathematik der _Rauheit_ und _Selbstähnlichkeit_. Seine Arbeit hatte Anwendungen in Physik, Meteorologie, Neurologie, Wirtschaft, Geologie, Ingenieurwesen, Informatik und vielen anderen Bereichen.

1985 erschien die Mandelbrot-Menge auf dem Cover des _Scientific American_ -Magazins und ist seitdem zu einer der bekanntesten mathematischen Formen der Welt geworden. Sie finden es auf T-Shirts, in Musikvideos und als Bildschirmschoner. In vielen populären Büchern und Filmen wurde darauf verwiesen.

::: column(width=220)

    x-img(src="images/magazine.jpg" width=220 height=316 credit="© Scientific American")

:::

---

## Raumfüllungskurven

> section: space-filling
> sectionStatus: dev

{.todo} Bald erhältlich!
