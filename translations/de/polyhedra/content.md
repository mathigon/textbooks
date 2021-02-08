# Vielecke und Polyeder

## Vielecke (Polygone)

> section: polygons
> id: polygons

Ein [__Vieleck__](gloss:polygon) oder Polygon ist eine geschlossene,
ebene Figur, die nur gerade Seiten hat. Vielecke können beliebig viele Seiten und Winkel haben, aber die Seiten dürfen nicht
gebogen sein. Welche der folgenden Formen sind Vielecke?

    x-picker
      .item#item1: include svg/polygons/polygon-1.svg
      .item(data-error="not-a-polygon-1"): include svg/polygons/polygon-2.svg
      .item(data-error="not-a-polygon-2"): include svg/polygons/polygon-3.svg
      .item: include svg/polygons/polygon-4.svg
      .item(data-error="not-a-polygon-3"): include svg/polygons/polygon-5.svg
      .item: include svg/polygons/polygon-6.svg

    x-gesture(target="#item1")

---
> id: polygons-1

Wir geben Vielecken unterschiedliche Namen, je nachdem, wie viele Seiten sie haben:

    .row.padded-thin
      div(style="width: 100px")
        include svg/polygons/number-3.svg
        p.caption #[strong Dreieck]#[br]3 Seiten
      div(style="width: 100px")
        include svg/polygons/number-4.svg
        p.caption #[strong Viereck]#[br]4 Seiten
      div(style="width: 100px")
        include svg/polygons/number-5.svg
        p.caption #[strong Fünfeck]#[br]5 Seiten
      div(style="width: 100px")
        include svg/polygons/number-6.svg
        p.caption #[strong Sechseck]#[br]6 Seiten
      div(style="width: 100px")
        include svg/polygons/number-7.svg
        p.caption #[strong Siebeneck]#[br]7 Seiten
      div(style="width: 100px")
        include svg/polygons/number-8.svg
        p.caption #[strong Achteck]#[br]8 Seiten

---
> id: angles-0

### Winkel in Vielecken

Jedes Vieleck mit _n_ Seiten hat auch _n_ [Innenwinkel](gloss:internal-angle).
Wir wissen bereits, dass die Summe der Innenwinkel in einem Dreieck immer
[[180]]° beträgt, aber wie ist das bei anderen Vielecken?

---
> id: angles
> goals: angle-0 angle-1

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="a" cx=40 cy=40)
      circle.move(name="b" cx=260 cy=80)
      circle.move(name="c" cx=240 cy=220)
      circle.move(name="d" cx=80 cy=260)
      path.fill.red(x="angle(b,a,d)" label="${a1[0]}°")
      path.fill.blue(x="angle(c,b,a)" label="${a1[1]}°")
      path.fill.green(x="angle(d,c,b)" label="${a1[2]}°")
      path.fill.yellow(x="angle(a,d,c)" label="${360-a1[0]-a1[1]-a1[2]}°")
      path(name="p1" x="polygon(a,b,c,d)")

{.text-center.var} _{span.circled.red}${a1[0]}°_ +
_{span.circled.blue}${a1[1]}°_ + _{span.circled.green}${a1[2]}°_ +
_{span.circled.yellow}${360-a1[0]-a1[1]-a1[2]}°_ &nbsp;=&nbsp; _{x-anibutton(text="???")}_

    x-gesture(target="x-anibutton")

::: column.grow(width=300)

    x-geopad(width=300 height=300): svg
      circle.move(name="e" cx=120 cy=30)
      circle.move(name="f" cx=270 cy=100)
      circle.move(name="g" cx=220 cy=270)
      circle.move(name="h" cx=80 cy=240)
      circle.move(name="i" cx=30 cy=150)
      path.fill.red(x="angle(f,e,i)" label="${a2[0]}°")
      path.fill.blue(x="angle(g,f,e)" label="${a2[1]}°")
      path.fill.green(x="angle(h,g,f)" label="${a2[2]}°")
      path.fill.yellow(x="angle(i,h,g)" label="${a2[3]}°")
      path.fill.purple(x="angle(e,i,h)" label="${540-a2[0]-a2[1]-a2[2]-a2[3]}°")
      path(name="p2" x="polygon(e,f,g,h,i)")

{.text-center.var} _{span.circled.red}${a2[0]}°_ +
_{span.circled.blue}${a2[1]}°_ + _{span.circled.green}${a2[2]}°_ +
_{span.circled.yellow}${a2[3]}°_ +
_{span.circled.purple}${540-a2[0]-a2[1]-a2[2]-a2[3]}°_ &nbsp;=&nbsp; _{x-anibutton(text="???")}_
:::

---
> id: angles-1

Es sieht so aus, als ob die Summe der Innenwinkel in einem Viereck immer [[360]]°
beträgt- genau [[das Doppelte|das Dreifache|die Hälfte]] der Summe der Winkel in einem Dreieck.
_{span.reveal(when="blank-0 blank-1")} Das ist kein Zufall: Jedes Viereck
kann in zwei Dreiecke geteilt werden._

    .row.padded-thin
      .reveal(when="blank-1" style="width: 140px"): include svg/polygons/triangles-4.svg
      .reveal(when="blank-2" style="width: 140px"): include svg/polygons/triangles-1.svg
      .reveal(when="blank-4" style="width: 140px"): include svg/polygons/triangles-2.svg
      .reveal(when="blank-4" delay=500 style="width: 140px"): include svg/polygons/triangles-3.svg

{.reveal(when="blank-0 blank-1")} Das Gleiche gilt auch für größere Vielecke.
Wir können ein Fünfeck in [[3]] Dreiecke aufteilen, so dass seine Innenwinkelsumme
`3 × 180° =` [[540]]° beträgt. _{span.reveal(when="blank-2 blank-3")} Und wir können ein Sechseck in [[4]] Dreiecke aufteilen
, so dass seine Innenwinkelsumme `4 × 180° =` [[720]]° beträgt._

---
> id: internal-angle-sum

Ein Vieleck mit ${x}{x|7|3,15,1} Seiten hat also eine Innenwinkelsumme von
180° × ${x-2} = ${(x-2)*180}°. Generell kann ein Vieleck mit _n_ Seiten in [[n - 2|n - 1|n]] Dreiecke
unterteilt werden. Daher ist die
 
{.text-center.reveal(when="blank-0")} Summe der Innenwinkel in einem _n_-eck
`= (n - 2) × 180°`.

    x-gesture(target="#internal-angle-sum x-var" slide="100,0")

---
> id: concave

### Konvexe und nichtkonvexe (konkave) Vielecke

::: column.grow
Wir sagen, dass ein Vieleck (Polygon) [__konkav__](gloss:concave) ist, wenn es einen Abschnitt hat, der
"nach innen zeigt"[__. Vielecke, die _nicht_ konkav sind, werden als [__konvex__](gloss:convex) bezeichnet.

Es gibt zwei Möglichkeiten, konkave Vielecke leicht zu identifizieren: Sie haben mindestens
einen [Innenwinkel, der größer als 180° ist](target:angle). Sie haben außerdem
mindestens eine [Diagonale, die _außerhalb_ des Vielecks](target:diagonal) liegt.

Bei konvexen Vielecken hingegen sind alle Innenwinkel kleiner als
[[180]]°, und alle Diagonalen liegen [[innerhalb|außerhalb]] des Vielecks.
::: column(width=240)

    x-geopad(width=240): svg
      circle(hidden name="a" x="point(40,70)")
      circle(hidden name="b" x="point(60,170)")
      circle(hidden name="c" x="point(160,200)")
      circle(hidden name="d" x="point(150,130)")
      circle(hidden name="e" x="point(190,40)")
      path.fill.blue(x="polygon(a,b,c,d,e)" target="cave diagonal angle")
      path.transparent.red.fill(x="polygon(c,d,e)" target="cave")
      path.red.fill.transparent(x="angle(c,d,e)" target="angle")
      path.transparent(x="segment(a,c)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(a,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,d)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent(x="segment(b,e)" target="diagonal" style="stroke: #f7f7f8")
      path.transparent.red(x="segment(c,e)" target="diagonal")
:::

---
> id: concave-1

Welche dieser Vielecke sind konkav?

    x-picker
      .item(data-error="not-concave-1"): include svg/polygons/concave-1.svg
      .item(data-error="not-concave-2"): include svg/polygons/concave-2.svg
      .item: include svg/polygons/concave-3.svg
      .item: include svg/polygons/concave-4.svg
      .item(data-error="not-concave-3"): include svg/polygons/concave-5.svg
      .item: include svg/polygons/concave-6.svg

---
> id: regular-polygons

### Regelmäßige Vielecke

Wir sagen, dass ein Vieleck [__regelmäßig__](gloss:regular-polygon) ist, wenn alle seine
Seiten die gleiche Länge und alle Winkel die gleiche Größe haben. Welche
dieser Figuren sind regelmäßige Vielecke?

    x-picker
      .item: include svg/polygons/regular-1.svg
      .item(data-error="not-regular-1"): include svg/polygons/regular-2.svg
      .item: include svg/polygons/regular-3.svg
      .item(data-error="not-regular-2"): include svg/polygons/regular-4.svg
      .item(data-error="not-regular-3"): include svg/polygons/regular-5.svg
      .item: include svg/polygons/regular-6.svg

---
> id: regular-1

Regelmäßige Vielecke können in vielen verschiedenen Größen auftreten - aber alle regelmäßigen Vielecke
mit der gleichen Anzahl von Seiten [[sind ähnlich|sind kongruent|haben die gleiche Fläche!]]

---
> id: regular-2

Wir kennen bereits die [Innenwinkelsumme](gloss:internal-angle) von
Vielecken. Für regelmäßige Vielecke gilt, dass alle diese Winkel [[gleich groß|spitze Winkel]] sind,
so dass wir die Größe eines einzelnen Innenwinkels berechnen können:

{.text-center.reveal(when="blank-0")} Winkel = <mfrac><mrow>[[Summe aller Winkel|Anzahl der Winkel]]</mrow><mrow>[[Anzahl der Winkel|Summe aller Winkel]]</mrow></mfrac>
_{span.reveal(when="blank-1 blank-2")} = `(180° × (x-2))/x = 180° - (360°)/x`._

{.reveal(when="blank-1 blank-2" delay=1000)} Wenn `n=3` ist, erhalten wir die Größe der
Innenwinkel eines gleichseitigen Dreiecks - wir wissen bereits, dass
[[60]]° herauskommen muss. _{span.reveal(when="blank-3")} In einem regelmäßigen Vieleck mit ${x}{x|6|3,12,1}
Seiten ist jeder Innenwinkel 180° - <mfrac class="inline"><mrow>360°</mrow><mrow>${x}</mrow></mfrac> =
${Math.round(180-360/x)}°._

---
> id: regular-area

### Die Fläche eines regelmäßigen Vielecks

::: column(width=320)

    x-geopad.sticky(width=320 height=320): svg
      circle.reveal(name="m" x="point(160, 160)" when="blank-0" animation="pop")
      path(name="p" x="regular(m, 140, n)")
      circle(name="p0" x="p.points[0]")
      circle(name="p1" x="p.points[1]")
      circle(name="k" x="segment(p1,p0).midpoint" hidden)

      path.blue.fill.light.transparent(x="polygon(p0,m,p1)" target="isosceles-triangle")
      path.blue.fill.light.transparent(x="polygon(p0,m,k)" target="right-triangle")
      path.blue.fill.transparent(x="angle(m,k,p0)" size=15 target="right-triangle")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(k,p0,m)" size=25 target="base-angle right-triangle alpha isosceles-triangle" label="α")
      path.blue.fill.reveal(when="blank-1 blank-2" x="angle(m,p1,k)" size=25 target="base-angle isosceles-triangle")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.thin.reveal(when="blank-0" delay=i*150 x=`segment(p.points[${i}%n],m)` animation="draw")

      path.yellow.reveal(when="blank-2" x="segment(m,k)" target="apothem" label="Apothema" animation="draw")
      path.green(x="segment(p1,p0)" target="base" label="s = 1m")
      path.green(x="segment(k,p0)" target="base half-base")

      for i in [0,1,2,3,4,5,6,7,8,9,10,11]
        path.red.fill.transparent(x=`angle(p.points[${i+2}%n],p.points[${i+1}%n],p.points[${i}%n])` size=18 target="int-angle")

::: column.grow
Hier siehst du ein [regelmäßiges Vieleck](gloss:regular-polygon) mit ${n}{n|5|4,12,1}
Seiten. Jede Seite hat eine Länge von [{.step-target.pill.green}1m](target:base). Wir
wollen nun versuchen, seine Fläche zu berechnen!

Zuerst können wir das Vieleck in ${n} kongruente,
[[gleichschenklige|gleichseitige|rechtwinklige]] Dreiecke aufteilen.

{.reveal(when="blank-0")} Wir kennen bereits die [[Basis|Höhe|Fläche]] dieser
Dreiecke, aber wir brauchen auch die [[Höhe|Schenkel|Schwerlinie]], um ihre Fläche berechnen
zu können. _{span.reveal(when="blank-2")} In regelmäßigen Vielecken wird diese Höhe
manchmal als [{.step-target.pill.yellow}Apothema](target:apothem) bezeichnet._

{.reveal(when="blank-1 blank-2" delay=1000)} Beachte, dass es ein [rechtwinkliges
Dreieck](target:right-triangle) gibt, das aus dem Apothema und der Hälfte der Basis des
gleichschenkligen Dreiecks gebildet wird. Das bedeutet, dass wir die Trigonometrie nutzen können!

{.reveal(when="blank-1 blank-2" delay=2000)} Die [{.step-target.pill.blue}Basiswinkel](target:base-angle)
des gleichschenkligen Dreiecks (nennen wir sie α) sind [[halb so|gleich|doppelt so]]
groß wie der [Innenwinkel](target:int-angle) des Vielecks:

{.text-center.reveal(when="blank-3")} `pill(α, "blue", "alpha") = 1/2 (180° -
(360°)/var("n")) = var("round(90-180/n,2)")`

{.reveal(when="blank-3")} Um das Apothema zu finden, können wir die Definition der
[[Tangens|Sinus|Kosinus]]funktion verwenden:

{.text-center.reveal(when="blank-4")} `tan pill(α, "blue", "alpha") = 
pill("Gegenkathete", "yellow", "apothem") / pill("Ankathete", "green", "half-base") =
blank("Apothema", "s", "s/2") / blank("s/2", "s", "Apothema")`

{.text-center.reveal(when="blank-5 blank-6")} `⇒ pill("Apothema", "yellow",
"apothem") = 1/2 pill(s, "green", "base") × tan pill(α, "blue", "alpha") =
var("round(tan(pi/2-pi/n)/2,2)")"m"`

{.reveal(when="blank-5 blank-6" delay=2000)} Die Fläche des
[gleichschenkligen Dreiecks](target:isosceles-triangle) ist somit

{.text-center.reveal(when="blank-5 blank-6" delay=2000)} `1/2 "Basis" × "Höhe"
= 1/2 pill("1m", "green", "base") × pill(var("round(tan(pi/2-pi/n)/2,2)"),
"yellow", "apothem") = var("round(tan(pi/2-pi/n)/4,2)") "m"^2`

{.reveal(when="blank-5 blank-6" delay=4000)} Das Vieleck besteht aus ${n}
dieser gleichschenkligen Dreiecke, die alle die gleiche Fläche haben. Die
Gesamtfläche des Vielecks beträgt daher

{.text-center.reveal(when="blank-5 blank-6" delay=4000)} `A = var("n") ×
var("round(Math.tan(pi/2-pi/n)/4,2)") = var("round(n×tan(pi/2-pi/n)/4,2)")
"m"^2`
:::

---

## Vierecke

> section: quadrilaterals
> id: quadrilaterals

Im [vorherigen Kurs](/course/triangles) haben wir viele verschiedene
Eigenschaften von Dreiecken untersucht. Wir wollen jetzt die Vierecke genauer
betrachten.

Ein _regelmäßiges Viereck_ wird als [[Quadrat|Rechteck|gleichseitiges Viereck]] bezeichnet.
Alle seine Seiten haben die gleiche Länge, und alle seine Winkel sind gleich.

::: column.quadrilateral.reveal(when="blank-0")

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=60 cy=15)
      circle.move(name="b" cx=60 cy=105)
      circle(name="c" x="a.rotate(pi/2,b)")
      circle(name="d" x="b.rotate(-pi/2,a)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)" target="side" mark="bar")
      path.red(x="segment(b,c)" target="side" mark="bar")
      path.red(x="segment(c,d)" target="side" mark="bar")
      path.red(x="segment(d,a)" target="side" mark="bar")

{.caption} Ein __Quadrat__ ist ein Viereck mit [vier gleichen Seiten](target:side)
und [vier gleichen Winkeln](target:angle).
:::

---
> id: quadrilaterals-1

Für etwas "weniger regelmäßige" Vierecke haben wir zwei Möglichkeiten. Wenn wir nur wollen
, dass die _Winkel_ gleich sind, erhalten wir ein [__Rechteck__](gloss:rectangle). Wenn wir nur
wollen, dass die _Seiten_ gleich sind, bekommen wir eine [__Raute__](gloss:rhombus).

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=40 cy=15)
      circle.move(name="b" cx=40 cy=105)
      circle.move(name="c" cx=180 cy=105 project="line(a,b).perpendicular(b)")
      circle(name="d" x="c.add(a).subtract(b)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.blue(x="angle(a,b,c)" target="angle")
      path.blue(x="angle(b,c,d)" target="angle")
      path.blue(x="angle(c,d,a)" target="angle")
      path.blue(x="angle(d,a,b)" target="angle")
      path.red(x="segment(a,b)")
      path.red(x="segment(b,c)")
      path.red(x="segment(c,d)")
      path.red(x="segment(d,a)")

{.caption} Ein __Rechteck__ ist ein Viereck mit [vier gleichen Winkeln](target:angle).
::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=50 cy=60)
      circle.move(name="f" cx=105 cy=15)
      circle.move(name="h" cx=105 cy=105 project="circle(e,distance(e,f))")
      circle(name="g" x="h.add(f).subtract(e)")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f)" target="side" mark="bar")
      path.red(x="segment(f,g)" target="side" mark="bar")
      path.red(x="segment(g,h)" target="side" mark="bar")
      path.red(x="segment(h,e)" target="side" mark="bar")

{.caption} Eine __Raute__ ist ein Viereck mit [vier gleichen Seiten](target:side).
:::

---
> id: quadrilaterals-2

Es gibt noch ein paar andere Vierecke, die noch etwas weniger regelmäßig sind, aber dennoch bestimmte wichtige Eigenschaften haben
:

::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="a" cx=20 cy=20)
      circle.move(name="b" cx=160 cy=20)
      circle.move(name="c" cx=50 cy=100)
      circle(name="d" x="b.add(c).subtract(a)")
      path.fill.yellow.light(x="polygon(a,b,d,c)")
      path.red(x="segment(a,b)" mark="arrow")
      path.red(x="segment(c,d)" mark="arrow")
      path.blue(x="segment(a,c)" mark="arrow2")
      path.blue(x="segment(b,d)" mark="arrow2")

{.caption} Wenn beide Paare der _gegenüberliegenden_ Seiten [parallel](gloss:parallel) sind,
erhalten wir ein __Parallelogramm__.
::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="e" cx=20 cy=60)
      circle.move(name="f" cx=140 cy=15)
      circle.move(name="g" cx=190 cy=60)
      circle(name="h" x="f.reflect(line(e,g))")
      path.fill.yellow.light(x="polygon(e,f,g,h)")
      path.red(x="segment(e,f,)" mark="bar")
      path.blue(x="segment(f,g)" mark="bar2")
      path.blue(x="segment(g,h)" mark="bar2")
      path.red(x="segment(h,e,)" mark="bar")

{.caption} Wenn zwei Paare _benachbarter_ Seiten die gleiche Länge haben, bekommen wir ein __Deltoid__.
::: column.quadrilateral

    x-geopad(width=210 height=120): svg
      circle.move(name="i" cx=60 cy=15)
      circle.move(name="j" cx=20 cy=105)
      circle.move(name="k" cx=190 cy=105)
      circle.move(name="l" cx=160 cy=15 project="line(j,k).parallel(i)")
      path.fill.yellow.light(x="polygon(i,j,k,l)")
      path(x="segment(i,j)")
      path.red(x="segment(j,k)" mark="arrow")
      path(x="segment(k,l)")
      path.red(x="segment(i,l)" mark="arrow")

{.caption} Wenn nur ein Paar der gegenüberliegenden Seiten parallel ist, erhalten wir ein __Trapez__.
:::

---
> id: quadrilaterals-venn

Vierecke können in mehrere dieser Kategorien fallen. Wir können die
Hierarchie der verschiedenen Arten von Vierecken in einem [Venn-Diagramm
](gloss:venn-diagram) darstellen:

    figure: include svg/venn.svg

Zum Beispiel ist jedes Rechteck auch [[ein Parallelogramm|eine Raute|ein Quadrat]], und
 [[jede Raute|jedes Trapez|jedes Parallelogramm]] ist auch ein Deltoid. Eine Raute ist
[[manchmal|immer|nie]] ein Quadrat und ein Rechteck ist [[immer|manchmal|nie]]
ein Trapez.

{.reveal(when="blank-0 blank-1 blank-2 blank-3")} Um Unklarheiten zu vermeiden, verwenden wir in der
Regel nur den spezifischsten Typ.

---
> id: midsegments

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg

::: column.grow
Wähle nun vier Punkte, irgendwo im grauen Feld.
_{span.reveal(when="points")} Wir können sie alle zu einem Viereck verbinden._

{.reveal(when="points" delay=1000)} Wir wollen jetzt den Mittelpunkt jeder der vier
Seiten bestimmen. Wenn wir die Mittelpunkte verbinden, erhalten wir ein weiteres [[Viereck|Dreieck|Rechteck]].

{.reveal(when="blank-0")} Versuche, die Ecken des äußeren Vierecks zu verschieben und
beobachte dabei, was mit dem kleineren passiert. Es sieht so aus, als wäre es nicht _irgendein_
Viereck, sondern immer ein [[Parallelogramm|Trapez|Rechteck]]!

{.reveal(when="blank-1")} Aber warum ist das so? Warum sollte das Ergebnis
für _jedes_ Viereck immer ein Parallelogramm sein? Um eine Erklärung dafür zu finden,
müssen wir eine der [Diagonalen](gloss:polygon-diagonal) des ursprünglichen
Vierecks einzeichnen.

{.reveal(when="diagonal")} Die Diagonale teilt das Viereck in [zwei
Dreiecke](target:triangle) auf. Wie du jetzt erkennen kannst sind [zwei der Seiten](target:midsegment)
des inneren Vierecks eigentlich [[Mittelparallelen|Schwerlinien|Streckensymmetralen]]
 dieser Dreiecke.

{.reveal(when="blank-2")} Im [vorherigen Kurs](/course/triangles/properties) haben wir gezeigt
, dass die [Mittelparallelen](gloss:triangle-midsegment) eines Dreiecks immer parallel
zu seiner Basis sind. In diesem Fall bedeutet das, dass [beide Seiten](target:parallel)
parallel zur Diagonale sind - daher müssen sie auch
[[parallel zueinander|gleich lang|zueinander senkrecht]] sein.

{.reveal(when="blank-3" delay=2000)} Genauso können wir mit der [zweiten
Diagonale](target:other) des Vierecks verfahren, um zu zeigen, dass beide Paare von
gegenüberliegenden Seiten parallel sind. Und das ist alles was wir für den Beweis, dass das innere
Viereck ein [Parallelogramm](gloss:parallelogram) ist, benötigen. _{span.qed}_
:::

---
> id: parallelograms

### Parallelogramme

Es stellt sich heraus, dass Parallelogramme viele andere interessante Eigenschaften haben,
außer dass die gegenüberliegenden Seiten parallel sind. Welche der folgenden sechs Aussagen sind
wahr?

::: column.grow

    x-picker.list
      .item.md Die gegenüberliegenden Seiten sind [kongruent](gloss:congruent).
      .item(data-error="parall-error-1") Die Innenwinkel sind immer kleiner als 90°.
      .item.md(data-error="parall-error-2") Die Diagonalen [teilen](gloss:angle-bisector) die Innenwinkel in der Mitte.
      .item Die gegenüberliegenden Winkel sind kongruent.
      .item(data-error="parall-error-3") Beide Diagonalen sind kongruent.
      .item(data-error="parall-error-4") Angrenzende Seiten haben die gleiche Länge
      .item Die beiden Diagonalen teilen sich in der Mitte.

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a" cx=80 cy=50)
      circle.move(name="b" cx=20 cy=190)
      circle.move(name="c" cx=220 cy=190)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.red(x="segment(a,b)")
      path.red(x="segment(c,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(a,d)")
      path.thin.light(x="segment(a,c)")
      path.thin.light(x="segment(b,d)")

      path.thin.light(x="angle(a,b,c).sup")
      path.thin.light(x="angle(b,c,d).sup")
      path.thin.light(x="angle(c,d,a).sup")
      path.thin.light(x="angle(d,a,b).sup")

:::

---
> id: parallelograms-proof

Natürlich reicht es nicht aus, diese Eigenschaften nur zu "beobachten". Um sicher zu sein, dass
sie _immer_ wahr sind, müssen wir sie _beweisen_:

::: tab
#### Gegenüberliegende Seiten und Winkel _{span.check(when="diagonal blank-0 blank-1")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a" cx=80 cy=80)
      circle.move(name="b" cx=20 cy=220)
      circle.move(name="c" cx=220 cy=220)
      circle(name="d" x="b.rotate(pi,line(a,c).midpoint)")

      path.reveal.fill.red(when="diagonal" x="angle(a,o?c:b,d).sup" target="red-angle")
      path.reveal.fill.red(when="diagonal" x="angle(c,o?a:d,b).sup" target="red-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(d,o?a:b,c).sup" target="blue-angle")
      path.reveal.fill.blue(when="diagonal" x="angle(b,o?c:d,a).sup" target="blue-angle")

      path.fill.yellow.transparent(x="polygon(a,b,o?c:d)" target="triangles")
      path.fill.green.transparent(x="polygon(o?a:b,c,d)" target="triangles")
      path(x="polygon(a,b,c,d)")
      
      path.green.transparent(x="segment(a,b)" target="sides")
      path.green.transparent(x="segment(c,d)" target="sides")
      path.yellow.transparent(x="segment(b,c)" target="sides")
      path.yellow.transparent(x="segment(a,d)" target="sides")
      path.fill.green.transparent(x="angle(a,b,c).sup" target="angles")
      path.fill.green.transparent(x="angle(c,d,a).sup" target="angles")
      path.fill.yellow.transparent(x="angle(b,c,d).sup" target="angles")
      path.fill.yellow.transparent(x="angle(d,a,b).sup" target="angles")

::: column.grow
{.task} Versuchen wir also zu beweisen, dass die gegenüberliegenden Seiten und Winkel in einem Parallelogramm
immer deckungsgleich sind.

Zeichne zunächst eine der Diagonalen des Parallelogramms.

{.reveal(when="diagonal")} Die Diagonale erzeugt vier neue Winkel mit den Seiten
des Parallelogramms. Die beiden [roten Winkel](target:red-angle) und die beiden
[blauen Winkel](target:blue-angle) sind [Wechselwinkel](gloss:alternate-angles),
so dass sie jeweils [[kongruent|benachbart|supplementät]] sein müssen.

{.reveal(when="blank-0")} Wenn wir uns nun die [beiden durch die Diagonale erzeugten Dreiecke](target:triangles)
ansehen, sehen wir, dass sie zwei kongruente Winkel
und [eine kongruente Seite](target:diagonal) haben. Nach dem [[WSW|WWS|WWW]] Kongruenzsatz
 müssen beide Dreiecke kongruent sein.

{.reveal(when="blank-1")} Das bedeutet, dass auch die anderen entsprechenden Teile der
Dreiecke kongruent sein müssen: Insbesondere sind beide [Paare von gegenüberliegenden
Seiten](target:sides) und beide [Paare von gegenüberliegenden
Winkeln](target:angles) kongruent. _{span.qed}_
:::

{.reveal(when="blank-1")} Es stellt sich heraus, dass das auch umgekehrt wahr ist: Wenn beide
Paare von gegenüberliegenden Seiten (oder Winkeln) in einem Viereck deckungsgleich sind, dann muss das
Viereck ein Parallelogramm sein.


::: tab
#### Diagonalen _{span.check(when="diagonal blank-2 blank-3")}_

::: column(width=300)

    x-geopad.sticky(width=300 height=300): svg
      circle.move(name="a1" cx=80 cy=80 label="A")
      circle.move(name="b1" cx=20 cy=220 label="B")
      circle.move(name="c1" cx=220 cy=220 label="C")
      circle(name="d1" x="b1.rotate(pi,line(a1,c1).midpoint)" label="D")
      circle(name="m1" x="polygon(a1,b1,c1,d1).centroid" label="M")

      path.fill.yellow.light(x="polygon(b1,m1,c1)" target="triangles1")
      path.fill.yellow.light(x="polygon(a1,m1,d1)" target="triangles1")

      path.fill.red(x="angle(c1,a1,d1).sup" target="anglesR")
      path.fill.red(x="angle(b1,c1,a1).sup" target="anglesR")
      path.fill.blue(x="angle(a1,d1,b1).sup" target="anglesB")
      path.fill.blue(x="angle(d1,b1,c1).sup" target="anglesB")
      
      path(x="polygon(a1,b1,c1,d1)")
      path(x="segment(a1,c1)")
      path(x="segment(b1,d1)")
      path.green(x="segment(a1,d1)" target="side1")
      path.green(x="segment(b1,c1)" target="side1")
      
      path.yellow.tick.transparent(x="segment(a1,m1)" target="AM")
      path.yellow.tick.transparent(x="segment(b1,m1)" target="BM")
      path.yellow.tick.transparent(x="segment(c1,m1)" target="CM")
      path.yellow.tick.transparent(x="segment(d1,m1)" target="DM")

::: column.grow
{.task} Beweise jetzt, dass sich die beiden Diagonalen in einem Parallelogramm gegenseitig halbieren.

Überlegungen zu den beiden gelben Dreiecken, die durch die Diagonalen erzeugt werden:

* Wir haben gerade erst bewiesen, dass die [beiden grünen Seiten](target:side1) kongruent sind,
  da sie gegenüberliegende Seiten eines Parallelogramms sind.
* Die [beiden roten](target:anglesR) und [zwei blauen Winkel](target:anglesB) sind
  kongruent, da es sich um [[Wechselwinkel|gegenüberliegende Winkel|rechte Winkel]] handelt.

{.reveal(when="blank-2")} Nach dem [[WSW|SSS|WWS]]-Satz müssen daher auch die beiden gelben
Dreiecke kongruent sein.

{.reveal(when="blank-3")} Nun können wir die Tatsache nutzen, dass die einander entsprechenden Teile
kongruenter Dreiecke auch kongruent sind, um zu dem Schluss zu kommen, dass [`bar(AM)`](target:AM)
= [`bar(CM)`](target:CM) and [`bar(BM)`](target:BM) = [`bar(DM)`](target:DM). Mit
anderen Worten, die beiden Diagonalen schneiden sich an ihren Mittelpunkten. _{span.qed}_
:::

{.reveal(when="blank-3")} Wie zuvor ist auch hier der Umkehrschluss richtig: Wenn sich die beiden
Diagonalen eines Vierecks gegenseitig halbieren, dann ist das Viereck ein
Parallelogramm.
:::

---
> id: kites

### Deltoide (Drachenviereck)

::: column.grow
Wir haben oben gezeigt, dass die beiden Paare der [[gegenüberliegenden|benachbarten]] Seiten eines
Parallelogramms kongruent sind. In einem Deltoid sind zwei Paare _benachbarter_ Seiten
kongruent.

Der Name _Drachenviereck_ geht eindeutig auf seine Form zurück: Ein Deltoid sieht aus wie die Drachen, die man am Himmel
fliegen lassen kann. Von allen speziellen Vierecken, die wir bisher gesehen haben, ist
das Deltoid jedoch das einzige, das auch [konkav](gloss:concave) sein kann: wenn es wie ein Pfeil
geformt ist:
::: column(width=320)

    x-img(src="images/kites.jpg")

:::

::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a" x="point(20,90)")
      circle(name="b" x="point(90,20)")
      circle.move(name="c" cx=200 cy=90 project="segment(point(100,90),point(220,90))")
      circle(name="d" x="point(90,160)")
      path.fill.yellow.light(x="polygon(a,b,c,d)")
      path.red(x="segment(a,b)")
      path.red(x="segment(a,d)")
      path.blue(x="segment(b,c)")
      path.blue(x="segment(d,c)")

{.caption} Ein konvexes Deltoid
::: column(width=240)

    x-geopad(width=240 height=180): svg
      circle(name="a1" x="point(20,90)")
      circle(name="b1" x="point(220,20)")
      circle.move(name="c1" cx=150 cy=90 project="segment(point(70,90),point(210,90))")
      circle(name="d1" x="point(220,160)")
      path.fill.green.light(x="polygon(a1,b1,c1,d1)")
      path.red(x="segment(a1,b1)")
      path.red(x="segment(a1,d1)")
      path.blue(x="segment(b1,c1)")
      path.blue(x="segment(d1,c1)")

{.caption} Ein konkaves Deltoid, das wie ein Pfeil aussieht
:::

---
> id: kites-1

::: column(width=300)

    x-geopad.sticky(width=300): svg
      circle.move(name="a" cx=30 cy=150)
      circle.move(name="b" cx=110 cy=250)
      circle.move(name="c" cx=270 cy=150)
      circle(name="d" x="b.reflect(line(a,c))")
      circle.transparent(name="m" x="line(a,c).project(b)")

      path.fill.light.blue.reveal(when="next-0" x="angle(b,a,d).sup" target="angles vAngle sas")
      path.fill.light.green.reveal(when="next-0" x="angle(b,c,d).sup" target="angles vAngle")
      path.fill.light.red.reveal(when="next-0" x="angle(a,d,c).sup" target="angles")
      path.fill.light.red.reveal(when="next-0" x="angle(a,b,c).sup" target="angles")
      path.fill.light.yellow.reveal(when="next-3" x="angle(a,m,d).sup" target="alpha" label="α")
      path.fill.light.yellow.reveal(when="next-3" x="angle(b,m,a).sup" target="beta" label="β")

      path.fill.red.transparent(x="polygon(a,b,c)" target="triangle1")
      path.fill.yellow.transparent(x="polygon(a,c,d)" target="triangle1")
      path.fill.red.transparent(x="polygon(a,m,d)" target="triangle2")
      path.fill.yellow.transparent(x="polygon(a,m,b)" target="triangle2")

      path.green(x="segment(a,b)" target="sss sas")
      path.green(x="segment(a,d)" target="sss sas")
      path.blue(x="segment(d,c)" target="sss")
      path.blue(x="segment(b,c)" target="sss")

      path.red.light.thin.reveal(when="blank-1" x="line(a,c)" target="symmetry" animation="draw")
      path.red.reveal(when="blank-1" x="segment(a,c)" target="symmetry sss d1" animation="draw")
      path.red.transparent(x="segment(a,m)" target="sas" animation="draw")
      path.red.reveal(when="next-2" x="segment(b,d)" animation="draw")

::: column.grow
Du hast vielleicht bemerkt, dass alle Deltoide [[symmetrisch|ähnlich]] sind.
_{span.reveal(when="blank-0")} Die [Symmetrieachse](gloss:axis-of-symmetry) ist
[[eine der Diagonalen|eine der Seiten|eine Mittelparallele]]._

{.reveal.r(when="blank-1")} Die Diagonale teilt das Deltoid in [zwei
kongruente Dreiecke](target:triangle1) auf. Wir wissen aufgrund des
[SSS](gloss:triangle-sss)-Satzes dass sie kongruent sind: Beide Dreiecke haben [drei kongruente
Seiten](target:sss) (rot, grün und blau).
_{button.next-step} Weiter_

{.reveal.r(when="next-0")} Unser "[CPOCT](gloss:cpoct)-Wissen" sagt uns, dass auch die
[entsprechenden Winkel](target:angles) kongruent sein müssen.
_{button.next-step} Weiter_

{.reveal.r(when="next-1")} Das bedeutet z.B., dass die [Diagonale](target:d1)
eine [[Winkelsymmetrale|Normale|Schwerlinie]] der [beiden Winkel](target:vAngle) an ihren
Enden ist.
_{button.next-step} Weiter_

{.reveal.r(when="next-2")} Wir können noch weiter gehen: Wenn wir die andere Diagonale zeichnen,
erhalten wir [zwei weitere, kleinere Dreiecke](target:triangle2). Diese müssen aufgrund des [SWS](gloss:triangle-sss)-Satzes auch
kongruent sein: Sie haben die gleichen
[zwei Seiten und eingeschlossenen Winkel](target:sas).
_{button.next-step} Weiter_

{.reveal(when="next-3")} Das bedeutet, dass der [Winkel α](target:alpha) auch derselbe sein
muss wie der [Winkel β](target:beta). Da sie nebeneinander liegen, und
[supplementär](gloss:supplementary-angles) sind müssen sowohl α als auch β [[90]]° groß sein.

{.reveal(when="blank-3")} Mit anderen Worten, die Diagonalen eines Drachens sind immer
[[Senkrechten|Parallelen]].
:::

---
> id: quadrilaterals-area
> goals: draw-1 draw-2

### Fläche von Vierecken

Bei der Berechnung der Fläche von Dreiecken im vorherigen Kurs haben wir den
Trick benutzt, sie in ein [[Rechteck|Quadrat|Fünfeck]] zu verwandeln. Es stellt sich heraus, dass
wir das auch für einige Vierecke tun können:

::: tab
#### Parallelogramm _{span.check(when="draw-1 blank-1")}_

::: column(width=300)

    x-geopad(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a1" x="point(4,3)")
      circle.transparent(name="b1" x="point(12,3)")
      circle.transparent(name="c1" x="point(10,9)")
      circle.transparent(name="d1" x="point(2,9)")
      path.fill.blue.light(x="polygon(a1,b1,c1,d1)")
      path.fill.red.transparent(x="polygon(point(2,3),a1,d1)" target="triangle-1")
      path.fill.red.transparent(x="polygon(point(10,3),b1,c1)" target="triangle-2")
      path.blue(x="polygon(a1,b1,c1,d1)")

::: column.grow
Versuche entlang der Kästchen, ein Rechteck zu zeichnen, das die gleiche Fläche wie das
Parallelogramm hat.

{.reveal(when="draw-1")} Kannst du sehen, dass das [fehlende Dreieck](target:triangle-1)
auf der linken Seite [[genau gleich groß wie|kleiner als|größer als]] das [überlappende
Dreieck](target:triangle-2) auf der rechten Seite ist?
_{span.reveal(when="blank-1")}Daher ist die Fläche eines Parallelogramms_

{.text-center.reveal(when="blank-1")} Fläche = __{.i.m-green}Grundseite__ × __{.i.m-yellow}Höhe__

{.reveal(when="blank-1" delay=1000)} _Sei vorsichtig bei der Messung der Höhe eines
Parallelogramms: Es ist in der Regel nicht gleich lang wie eine der beiden Seiten._
:::

::: tab
#### Trapez _{span.check(when="draw-2 blank-2 blank-3 blank-4 next-0")}_

Erinnere dich daran, dass Trapeze Vierecke mit einem Paar [paralleler Seiten](target:bases) sind.
Diese parallelen Seiten werden als __Grundseiten__ des Trapezes bezeichnet.

::: column(width=300)

    x-geopad.sticky(width=300 height=240 grid=20 no-points): svg
      circle.transparent(name="a2" x="point(4,3)")
      circle.transparent(name="b2" x="point(9,3)")
      circle.transparent(name="c2" x="point(13,9)")
      circle.transparent(name="d2" x="point(2,9)")
      path.fill.blue.light(x="polygon(a2,b2,c2,d2)")
      path.fill.red.transparent(x="polygon(a2,point(3,3),point(3,9),d2)" target="triangles-3")
      path.fill.yellow.transparent(x="polygon(b2,point(11,3),point(11,9),c2)" target="triangles-3")
      path.blue(x="polygon(a2,b2,c2,d2)")
      path.blue(x="segment(a2,b2)" target="bases base-1")
      path.blue(x="segment(d2,c2)" target="bases base-2")
      path.green.transparent(x="segment(point(2,3),d2)" target="t-height")
      path.yellow.transparent(x="segment(point(3,6),point(11,6))" target="t-width")
      circle.reveal(when="blank-3" x="line(a2,d2).midpoint" target="t-width" animation="pop")
      circle.reveal(when="blank-3" x="line(b2,c2).midpoint" target="t-width" animation="pop")

::: column.grow
Versuche wie zuvor, ein Rechteck zu zeichnen, das die gleiche Fläche wie das Trapez hat.
_{span.reveal(when="draw-2")} Kannst du sehen, wie sich die [fehlenden und hinzugefügten
Dreiecke](target:triangles-3) links und rechts aufheben?_

{.reveal(when="draw-2" delay=2000)} Die [{.step-target.pill.green} Höhe](target:t-height)
dieses Rechtecks entspricht [[dem Abstand|der mittleren Länge|der Länge]] der [parallelen
Seiten](target:bases) des Trapezes.

{.reveal.r(when="blank-2")} Die [{.step-target.pill.yellow} Breite](target:t-width)
des Rechtecks ist der Abstand zwischen den [[Mittelpunkten|Endpunkten]] der beiden nicht
parallelen Seiten des Trapezes. _{span.reveal(when="blank-3")} Dieser wird als
die __Mittelparallele__ des Trapezes bezeichnet._
_{button.next-step.reveal(when="blank-3")} Weiter_

{.reveal(when="next-0")} Wie bei [Dreiecken](gloss:triangle-midsegment) ist die
Mittelparallele eines Trapezes [[parallel zu|senkrecht auf|gleich lang wie]]
 seine beiden Grundseiten. Die Länge der Mittelparallelen ist der Durchschnitt der Längen der
Grundseiten: `(a+c)/2`.

{.reveal(when="blank-4")} Wenn wir all das zusammenfügen, erhalten wir eine Gleichung für die
Fläche eines Trapezes mit den parallelen Seiten [_a_](target:base-2) und [_c_](target:base-1),
und der Höhe [_h_](target:t-height):

{.text-center.reveal(when="blank-4")} `A = h xx ((a+c) / 2)`
:::

::: tab
#### Deltoid _{span.check(when="blank-5")}_

::: column(width=300)

    x-geopad(width=300 height=220 grid=20 no-points): svg
      circle.transparent(name="a3" x="point(1,5)")
      circle.transparent(name="b3" x="point(5,1)")
      circle.transparent(name="c3" x="point(13,5)")
      circle.transparent(name="d3" x="point(5,9)")
      
      path.fill.blue.light(x="polygon(a3,b3,c3,d3)")
      path.green(x="segment(a3,c3)" label="d1" target="diag3 d31")
      path.yellow(x="segment(b3,d3)" label="d2" target="diag3 d32")
      path(x="polygon(point(1,1),point(13,1),point(13,9),point(1,9))" target="rect4")
      path.blue(x="polygon(a3,b3,c3,d3)")
      
      path.fill.red.transparent(x="polygon(a3,b3,point(5,5))" target="inside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(5,5))" target="inside")
      path.fill.green.transparent(x="polygon(c3,d3,point(5,5))" target="inside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(5,5))" target="inside")
      
      path.fill.red.transparent(x="polygon(a3,b3,point(1,1))" target="outside")
      path.fill.blue.transparent(x="polygon(b3,c3,point(13,1))" target="outside")
      path.fill.green.transparent(x="polygon(c3,d3,point(13,9))" target="outside")
      path.fill.yellow.transparent(x="polygon(d3,a3,point(1,9))" target="outside")

::: column.grow
Bei diesem [Deltoid](target:diag3) bilden die beiden Diagonalen die Breite und Höhe
eines großen [Rechtecks](target:rect4), das das Deltoid umgibt.

Die Fläche dieses Rechtecks ist [[doppelt so|gleich|dreimal so]] groß wie die Fläche des
Deltoids. _{span.reveal(when="blank-5")} Kannst du sehen, wie jedes der [vier
Dreiecke](target:inside), aus denen das Deltoid besteht, mit den
[vier Lücken](target:outside) außerhalb des Deltoids identisch ist?_

{.reveal(when="blank-5")} Das bedeutet, dass die Fläche eines Deltoids mit den Diagonalen
[{.step-target.i.pill.green}d1](target:d31) und
[{.step-target.i.pill.yellow}d2](target:d32) sich folgendermaßen berechnen lässt:

{.text-center.reveal(when="blank-5")} _Fläche_ = `1/2`
[{.step-target.i.pill.green}d1](target:d31) ×
[{.step-target.i.pill.yellow}d2](target:d32).
:::

::: tab
#### Raute _{span.check(when="blank-6 blank-7")}_

::: column(width=300)

    x-geopad(width=300 height=240): svg
      circle.move(name="a4" cx=40 cy=120)
      circle.move(name="b4" cx=150 cy=50)
      circle.move(name="d4" cx=150 cy=190 project="circle(a4,distance(a4,b4))")
      circle(name="c4" x="d4.add(b4).subtract(a4)")
      
      path.fill.blue.light(x="polygon(a4,b4,c4,d4)")

      path.thin(x="line(c4,d4)")
      circle(name="q4" x="line(c4,d4).project(a4)")
      path.thin(x="angle(a4,q4,d4).sup" size=15)
      path.red(x="segment(q4,a4)" label="height" target="height")
      
      path.green(x="segment(a4,c4)" label="d1" target="d41")
      path.yellow(x="segment(b4,d4)" label="d2" target="d42")
      path.blue(x="polygon(a4,b4,c4,d4)")
      path.blue(x="segment(c4,d4)" target="base")

::: column.grow
Eine [Raute](gloss:rhombus) ist ein Viereck mit vier kongruenten Seiten. Du weißt
vielleicht noch, dass jede Raute ein [[Parallelogramm|Rechteck|Quadrat]] ist - ebenso
wie ein [[Deltoid|Sechseck|konkaves Vieleck]].

{.reveal(when="blank-6 blank-7")} Das bedeutet, dass
wir zur Bestimmung der Fläche einer Raute entweder die Gleichung für die Fläche eines Parallelogramms oder die Gleichung für die
Fläche eines Deltoids verwenden können:

{.text-center.reveal(when="blank-6 blank-7")} _Fläche_ =
[{.step-target.i.pill.blue}Grundseite](target:base) ×
[{.step-target.i.pill.red}Höhe](target:height) = `1/2`
[{.step-target.i.pill.green}d1](target:d41) ×
[{.step-target.i.pill.yellow}d2](target:d42).

{.reveal(when="blank-6 blank-7" delay=1000)} _Je nachdem
werden also verschiedene Teile einer Raute (Seiten, Höhe, Diagonalen) gegeben sein, und solltest dann die Formel
wählen, die am besten geeignet ist._
:::

:::



---

## Parkettierung (Tessellation)

> section: tessellations
> id: tessellations

[Vielecke](gloss:polygon) treten überall in der Natur auf. Sie sind besonders
nützlich, wenn man eine große Fläche kacheln möchte, da man Vielecke
ohne Lücken oder Überlappungen zusammenfügen kann. Solche Muster werden als
[__Parkettierungen__](gloss:tessellation) bezeichnet.

::: column(width=200)

    x-img(lightbox src="images/tessellations/honeycomb.jpg", width=200 height=200)

{.caption} [[Sechseckige|Dreieckige|Quadratische]] Wabe
::: column(width=200)

    x-img(lightbox src="images/tessellations/snake.jpg", width=200 height=200)

{.caption} Haut einer Sinaloa-Dreiecksnatter
::: column(width=200)

    x-img(lightbox src="images/tessellations/leaf.jpg", width=200 height=200)

{.caption} Zellstruktur von Blättern
::: column(width=200)

    x-img(lightbox, credit="Chmee2, via Wikipedia", src="images/tessellations/causeway.jpg", width=200 height=200)

{.caption} Basaltsäulen am Giant's Causeway in Nordirland
::: column(width=200)

    x-img(lightbox src="images/tessellations/pineapple.jpg", width=200 height=200)

{.caption} Ananasschale
::: column(width=200)

    x-img(lightbox src="images/tessellations/tortoise.jpg", width=200 height=200)

{.caption} Schildpatt einer Schildkröte
:::

---
> id: tessellations-1

Die Menschen haben viele dieser natürlichen Muster in Kunst, Architektur und
Technik kopiert - vom alten Rom bis in die Gegenwart. Hier sind einige Beispiele:

::: column(width=200)

    x-img(lightbox src="images/tessellations/pavement.jpg", width="200", height="200")

{.caption} [[Rechteckiges|Quadratisches|Sechseckiges]] Belagsmuster
::: column(width=200)

    x-img(lightbox, src="images/tessellations/greenhouse.jpg", width="200", height="200")

{.caption} Gewächshaus am Eden Project in England
::: column(width=200)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", src="images/tessellations/alhambra.jpg", width="200", height="200")

{.caption} Mosaik in der Alhambra
::: column(width=200)

    x-img(lightbox, credit="Chmee2 via Wikipedia", src="images/tessellations/museum.jpg", width="200", height="200")

{.caption} [[Dreieckiges|Sechseckiges|Rechteckiges]] Dach im British Museum in London
::: column(width=200)

    x-img(lightbox, credit="© Patrick Boland, via archinect.com", src="images/tessellations/cellular.jpg", width="200", height="200")

{.caption} Cellular Tessellation Pavillon in Sydney
::: column(width=200)

    x-img(credit="© M. C. Escher", src="images/tessellations/escher.jpg", width="200", height="200")

{.caption} _Studie einer regelmäßigen Flächenfüllung mit Reptilien_, M. C. Escher
:::


---
> id: tessellation-drawing
> goals: shapes0 shapes1

Hier kannst du deine eigenen Parkettierungen mit regelmäßigen Vielecken erstellen. Ziehe einfach
neue Formen aus der Seitenleiste auf die Leinwand. Welche Formen eignen sich gut für Parkettierungen? Gibt
es Formen, die sich nicht kacheln lassen? Versuche, interessante
Muster zu erstellen!

    figure: .tessellation
      x-polypad
      .menu
        for s in ['equ-triangle', 'square', 'reg-pentagon', 'reg-hexagon', 'reg-octagon']
          .add(data-shape=s)
      .btn-row
        button.btn Clear
        button.btn Download
      svg.overlay: g.tiles.active
    x-gesture(target=".tessellation .menu" slide="-300, 140")
    .other-students.reveal(when="shapes0")
      h4 Beispiele für die Parkettierungen anderer Studenten
      .row.padded-thin
        div(style="width: 224px"): img(src="images/user/tess-1.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-2.png" width=240 height=160)
        div(style="width: 224px"): img(src="images/user/tess-3.png" width=240 height=160)

---
> id: tessellation-regular

### Parkettierungen mit regelmäßigen Vielecken

Du hast vielleicht bemerkt, dass sich einige [regelmäßige Vielecke](gloss:regular-polygon) (wie
[[Quadrate|Fünfecke]]) sehr gut und andere (wie
[[Fünfecke|Dreiecke|Sechsecke]]) sich überhaupt nicht für Parkettierungen eignen.

---
> id: tessellation-regular-1

Das hat mit der Größe ihrer [Innenwinkel](gloss:internal-angle)zu tun,
mit deren Berechnung wir uns schon beschäftigt haben. An jedem [Eckpunkt](gloss:polygon-vertex) in
dieser Parkettierung treffen sich die Innenwinkel mehrerer verschiedener Vielecke. Alle
diese Winkel müssen zusammengezählt [[360°]] ergeben, sonst gibt
es entweder eine Lücke oder eine Überlappung.

---
> id: tessellation-regular-2

::: column(width=160 parent="padded-thin")
    include svg/tessellations/triangles.svg

{.caption} Dreiecke [[kann man|kann man nicht]] zu einer Parkettierung zusammenfügen, _{span.reveal(when="blank-0")} da 6 × 60° = 360°._
::: column(width=160)
    include svg/tessellations/squares.svg

{.caption} Quadrate [[kann man|kann man nicht]] zu einer Parkettierung zusammenfügen, _{span.reveal(when="blank-1")} da 4 × 90° = 360°._
::: column(width=160)
    include svg/tessellations/pentagons.svg

{.caption} Fünfecke [[kann man|kann man nicht]] zu einer Parkettierung zusammenfügen, _{span.reveal(when="blank-2")} da sich
Vielfache von 108° nicht zu 360° summieren._

::: column(width=160)
    include svg/tessellations/hexagons.svg

{.caption} Sechsecke [[kann man|kann man nicht]] zu einer Parkettierung zusammenfügen, _{span.reveal(when="blank-3")} da 3 × 120° = 360°._
:::

---
> id: tessellation-regular-3

Du kannst auch überprüfen, dass, genau wie bei Fünfecken, jedes normale Vieleck mit 7 oder
mehr Seiten keine Parkettierung ergibt. Das bedeutet, dass die einzigen regelmäßigen Vielecke, die
Parkettierungen ermöglichen, Dreiecke, Quadrate und Sechsecke sind!

Natürlich kann man auch verschiedene Arten von regelmäßigen Vielecken in einer
Parkettierung kombinieren, vorausgesetzt, ihre Innenwinkel ergeben in Summe 360°:

    x-gallery(slide-width="520")
      div
        img(src="images/tessellations/regular-1.svg" width=360 height=240)
        p.caption Quadrate und Dreiecke#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-3.svg" width=360 height=240)
        p.caption Quadrate und Dreiecke#[br]#[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-4.svg" width=360 height=240)
        p.caption Sechsecke und Dreiecke#[br]#[strong.m-red 120°] + #[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-5.svg" width=360 height=240)
        p.caption Sechsecke und Dreiecke#[br]#[strong.m-red 120°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-2.svg" width=360 height=240)
        p.caption Sechsecke, Quadrate und Dreiecke#[br]#[strong.m-red 120°] + #[strong.m-blue 90°] + #[strong.m-blue 90°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-6.svg" width=360 height=240)
        p.caption Achtecke und Quadrate#[br]#[strong.m-green 135°] + #[strong.m-green 135°] + #[strong.m-blue 90°] = 360°
      div
        img(src="images/tessellations/regular-7.svg" width=360 height=240)
        p.caption Zwölfecke (Dodekagone) und Dreiecke#[br]#[strong.m-green 150°] + #[strong.m-green 150°] + #[strong.m-yellow 60°] = 360°
      div
        img(src="images/tessellations/regular-8.svg" width=360 height=240)
        p.caption Zwölfecke, Sechsecke und Quadrate#[br]#[strong.m-green 150°] + #[strong.m-red 120°] + #[strong.m-blue 90°] = 360°

---
> id: tessellation-triangles

### Parkettierungen mit unregelmäßigen Vielecken

Wir können auch versuchen, Parkettierungen aus [unregelmäßigen Vielecken](gloss:irregular-polygon)
herzustellen - vorausgesetzt, wir passen beim Drehen und Anordnen gut auf.

::: column(width=360)

    x-geopad(width=360 height300): svg
      circle.move(name="a" cx=220 cy=90 target="vertex")
      circle.move(name="b" cx=145 cy=180 target="vertex")
      circle.move.pulsate(name="c" cx=225 cy=200 target="vertex")

      path.red.fill(name="x" x="polygon(a,b,c)")
      path.yellow.fill(name="y" x="x.rotate(pi,line(b,c).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.red.fill(x=`x.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)
            path.yellow.fill(x=`y.translate(c.subtract(a).scale(${x}).add(b.subtract(a).scale(${y})))`)

::: column.grow
Es stellt sich heraus, dass man nicht nur gleichseitige Dreiecke, sondern _jedes
beliebige Dreieck_ für eine Parkettierung verwenden kann! Versuche, die [Eckpunkte](target:vertex) in diesem Diagramm zu verschieben.
 
Die Summe der Innenwinkel in einem Dreieck beträgt [[180]]°. Wenn wir jeden Winkel
[[zweimal|einmal|dreimal]] an jedem Eckpunkt der Parkettierung verwenden, erhalten wir 360°:

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" cx=100 cy=80)
      circle(name="p" cx=100 cy=150)
      circle.move(name="q" cx=175 cy=130)
      circle(name="r" x="p.rotate(pi,line(m,q).midpoint)")
      circle(name="s" x="p.rotate(pi,m)")
      circle(name="t" x="q.rotate(pi,m)")
      circle(name="u" x="q.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,q).sup" size=20)
      path.fill.blue(x="angle(q,m,r).sup" size=20)
      path.fill.green(x="angle(r,m,s).sup" size=20)
      path.fill.red(x="angle(s,m,t).sup" size=20)
      path.fill.blue(x="angle(t,m,u).sup" size=20)
      path.fill.green(x="angle(u,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,q,r).sup" size=20)
      path.fill.red.light(x="angle(r,s,m).sup" size=20)
      path.fill.red.light(x="angle(m,t,u).sup" size=20)
      path.fill.red.light(x="angle(u,p,m).sup" size=20)
      path.fill.blue.light(x="angle(p,q,m).sup" size=20)
      path.fill.blue.light(x="angle(m,r,s).sup" size=20)
      path.fill.blue.light(x="angle(s,t,m).sup" size=20)
      path.fill.blue.light(x="angle(m,u,p).sup" size=20)
      path.fill.green.light(x="angle(m,p,q).sup" size=20)
      path.fill.green.light(x="angle(q,r,m).sup" size=20)
      path.fill.green.light(x="angle(m,s,t).sup" size=20)
      path.fill.green.light(x="angle(t,u,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,q)")
      path(x="segment(m,r)")
      path(x="segment(m,s)")
      path(x="segment(m,t)")
      path(x="segment(m,u)")
      path(x="polygon(p,q,r,s,t,u)")
:::

---
> id: tessellation-quadrilaterals

::: column(width=360)

    x-geopad(width=360 height=300): svg
      circle.move(name="a" cx=100 cy=105)
      circle.move(name="b" cx=115 cy=200)
      circle.move.pulsate(name="c" cx=180 cy=170)
      circle.move(name="d" cx=200 cy=120)

      path.blue.fill(name="x" x="polygon(a,b,c,d)")
      path.green.fill(name="y" x="x.rotate(pi,line(c,d).midpoint)")

      for x in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
        for y in [-5,-4,-3,-2,-1,0,1,2,3,4,5]
          if x || y
            path.blue.fill(x=`x.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)
            path.green.fill(x=`y.translate(c.subtract(a).scale(${x}).add(d.subtract(b).scale(${y})))`)


::: column.grow    
Noch überraschender ist, dass auch _alle Vierecke_ zu Parkettierungen zusammengefügt werden können! Ihre innere
Winkelsumme beträgt [[360]]°, wenn wir also jeden Winkel [[einmal|zweimal|dreimal]] an jedem
Eckpunkt der Parkettierung verwenden, erhalten wir 360°.

    x-geopad.reveal(width=200 height=160 when="blank-0 blank-1"): svg
      circle(name="m" x="point(100,80)")
      circle(name="p" x="point(100,150)")
      circle.move(name="q" cx=180 cy=140)
      circle.move(name="r" cx=165 cy=90)
      circle(name="s" x="p.rotate(pi,line(m,r).midpoint)")
      circle(name="t" x="q.rotate(pi,line(m,r).midpoint)")
      circle(name="u" x="r.rotate(pi,line(m,t).midpoint)")
      circle(name="v" x="q.rotate(pi,line(m,p).midpoint)")
      circle(name="w" x="r.rotate(pi,line(m,p).midpoint)")

      path.fill.red(x="angle(p,m,r).sup" size=20)
      path.fill.blue(x="angle(r,m,t).sup" size=20)
      path.fill.green(x="angle(t,m,v).sup" size=20)
      path.fill.yellow(x="angle(v,m,p).sup" size=20)

      path.fill.red.light(x="angle(m,r,s).sup" size=20)
      path.fill.red.light(x="angle(t,u,v).sup" size=20)
      path.fill.red.light(x="angle(w,p,m).sup" size=20)
      path.fill.blue.light(x="angle(q,r,m).sup" size=20)
      path.fill.blue.light(x="angle(m,t,u).sup" size=20)
      path.fill.blue.light(x="angle(v,w,p).sup" size=20)
      path.fill.green.light(x="angle(p,q,r).sup" size=20)
      path.fill.green.light(x="angle(s,t,m).sup" size=20)
      path.fill.green.light(x="angle(m,v,w).sup" size=20)
      path.fill.yellow.light(x="angle(m,p,q).sup" size=20)
      path.fill.yellow.light(x="angle(r,s,t).sup" size=20)
      path.fill.yellow.light(x="angle(u,v,m).sup" size=20)

      path(x="segment(m,p)")
      path(x="segment(m,r)")
      path(x="segment(m,t)")
      path(x="segment(m,v)")
      path(x="polygon(p,q,r,s,t,u,v,w)")
:::

---
> id: tessellation-pentagons

Fünfecke sind etwas kniffliger. Wir haben bereits gesehen, dass _regelmäßige_ Fünfecke sich [[nicht
|gut]] für Parkettierungen eignen. Aber was ist mit unregelmäßigen Fünfecken?

---
> id: tessellation-pentagons-1

::: column(width=220)
    include svg/tessellations/pentagons-1.svg
::: column(width=220)
    include svg/tessellations/pentagons-2.svg
::: column(width=220)
    include svg/tessellations/pentagons-3.svg
:::

Hier sind drei verschiedene Beispiele für Parkettierungen mit Fünfecken. Sie sind nicht
_regelmäßig_, aber sie sind einwandfreie fünfseitige Vielecke.

Bisher haben Mathematiker nur 15 verschiedene Arten von Parkettierungen mit
(konvexen) Fünfecken gefunden - die jüngste davon wurde 2015 entdeckt. Niemand
weiß, ob es noch andere gibt, oder ob diese 15 die einzigen sind…

---
> id: escher

### Parkettierungen in der Kunst

Parkettierungen sind für viele Künstler, Architekten und 
Designer ein Werkzeug und eine Inspiration - allen voran der niederländische Künstler [M. C. Escher](bio:escher). Eschers
Werk enthält seltsame, mutierende Kreaturen, Muster und Landschaften:

    .row
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-1.jpg" width=220 height=220)
        p.caption "Himmel und Wasser I" (1938)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-2.jpg" width=220 height=220)
        p.caption "Eidechse" (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-3.jpg" width=220 height=220)
        p.caption "Eidechsen, Fische, Fledermäuse" (1952)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-4.jpg" width=220 height=220)
        p.caption "Schmetterlinge" (1948)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-5.jpg" width=220 height=220)
        p.caption “Zwei Fische” (1942)
      div(style="width: 220px")
        x-img(credit="© M. C. Escher Foundation" src="images/escher/escher-6.jpg" width=220 height=220)
        p.caption "Muscheln und Seesterne" (1941)

Diese Kunstwerke sehen oft spaßig und mühelos aus, aber die zugrunde liegenden mathematischen
Prinzipien sind die gleichen wie zuvor: Winkel, Rotationen, Translationen und Vielecke.
Wenn die Mathematik nicht stimmt, wird die Parkettierung nicht funktionieren!

    .metamorph: img(src="images/escher/metamorphosis.jpg" width=3000 height=150)
    p.caption “Metamorphose II” von M. C. Escher (1940)

---
> id: penrose

### Penrose-Parkettierungen

Alle bisherigen Parkettierungen haben eines gemeinsam: Sie sind
__periodisch__. Das heißt, sie bestehen aus einem regelmäßigen Muster, das immer wieder wiederholt
wird. Sie können auf ewig in alle Richtungen weitergehen und werden
überall gleich aussehen.

In den 1970er Jahren entdeckte der britische Mathematiker und Physiker [Roger Penrose](bio:penrose)
 _nicht-periodische_ Parkettierungen - sie gehen immer noch unendlich in alle
Richtungen weiter, sehen aber _nie_ genau gleich aus. Diese werden als __Penrose-Parkettierungen__
bezeichnet, und man benötigt nur ein paar verschiedene Arten von Vielecken, um sie zu
erstellen:

    figure
      include svg/penrose.svg
      x-slider(steps=100, style="max-width: 400px; margin: 24px auto")
      p.caption Bewege den Schieberegler, um die zugrunde liegende Struktur dieser Parkettierung zu enthüllen. Beachte, dass in verschiedenen Maßstäben die gleichen Muster auftauchen: Die kleinen gelben Fünfecke, blaue Sterne, orangefarbene Rauten und grüne "Schiffe" erscheinen in ihrer Originalgröße, in einer #[strong.blue etwas größeren Größe] und einer #[strong.red noch größeren Größe]. Diese #[em Selbstähnlichkeit] kann dazu verwendet werden, um zu beweisen, dass diese Penrose-Parkettierung nicht periodisch ist.

---
> id: penrose-1

Penrose untersuchte Parkettierungen nur zum Spaß, aber es stellte sich heraus, dass die
innere Struktur einiger echter Materialien (wie Aluminium) einem ähnlichen
Muster folgt. Das Muster wurde sogar auf Toilettenpapier verwendet, da die Hersteller
feststellten, dass ein nicht-periodisches Muster ganz glatt aufgerollt werden kann.

---

## Polyeder

> section: polyhedra
> id: polyhedra

Bisher haben wir uns nur angesehen, was wir mit Vielecken in einer flachen,
zweidimensionalen Welt machen können. Ein [__Polyeder__](gloss:polyhedron) ist ein dreidimensionales
Objekt, das aus Vielecken besteht. Hier sind ein paar Beispiele:

::: column.padded-thin(width=220)
    x-polyhedron#poly1(size=220 shape="PentagonalPrism")
::: column(width=220)
    x-polyhedron(size=220 shape="Hebesphenorotunda")
::: column(width=220)
    x-polyhedron(size=220 shape="StellatedDodecahedron")
:::

Polyeder können keine gekrümmten Oberflächen enthalten - Kugeln und Zylinder zum Beispiel
sind keine Polyeder.

Die Vielecke, aus denen ein Polyeder besteht, werden seine [__Flächen__](gloss:polyhedron-face) genannt.
Die Strecken die zwei Flächen miteinander verbinden, werden [__Kanten__](gloss:polyhedron-edge),
und die Punkte, an denen sich die Kanten treffen, werden [__Ecken__](gloss:polyhedron-vertex) genannt.

---
> id: euler

Polyeder gibt es in vielen verschiedenen Formen und Größen - von einfachen Würfeln oder
Pyramiden mit nur wenigen Flächen bis hin zu komplexen Objekten wie dem Stern oben, der 60 dreieckige Flächen
hat. Es stellt sich jedoch heraus, dass _alle_ Polyeder eine
wichtige Eigenschaft gemeinsam haben:

::: .theorem
__Eulerscher Polyedersatz__  
In jedem Polyeder ist die Anzahl der Flächen ("_F_") plus die Anzahl der Ecken ("_E_")
um zwei größer als die Anzahl der Kanten ("_K_"). Anders ausgedrückt,

{.text-center} `F + E = K + 2`
:::

Wenn ein Polyeder zum Beispiel 12 Flächen und 18 Ecken hat, wissen wir, dass es [[28]] Kanten
haben muss.

---
> id: euler-1

Diese Gleichung wurde vom berühmten Schweizer Mathematiker [Leonard
Euler](bio:euler) entdeckt. Sie gilt für jedes Polyeder, solange es
keine Löcher enthält.

Wenn du das mit verschiedenen Polyedern, wie den oben aufgeführten, ausprobierst wirst du feststellen,
dass der Satz von Euler immer funktioniert. In [einem späteren Kurs](/course/graph-theory/planar-graphs)
lernst du, wie du das auch mathematisch beweisen kannst.

---

## Netze und Querschnitte

> section: nets-cross-sections
> sectionStatus: dev

Unsere ganze Welt ist 3-dimensional - aber es ist oft viel einfacher, flache,
2-dimensionale Objekte zu zeichnen oder zu visualisieren. Und es gibt einige
verschiedene Möglichkeiten, dreidimensionale Polyeder zweidimensional zu
betrachten.

---

## Prismen und Pyramiden

> section: prisms-pyramids
> sectionStatus: dev

TODO

---

## Platonische Körper

> section: platonic
> id: platonic

Zu Beginn dieses Kurses haben wir [regelmäßige Vielecke](gloss:regular-polygon)
 als besonders "symmetrische" Vielecke definiert, bei denen alle Seiten und Winkel gleich sind.
Wir können etwas Ähnliches für Polyeder tun.

In einem _regelmäßigen Polyeder_ sind alle [Flächen](gloss:polyhedron-face) 
regelmäßige Vielecke von derselben Art und an jeder
[Ecke](gloss:polyhedron-vertex) trifft die gleiche Anzahl von Flächen aufeinander. Polyeder mit diesen beiden Eigenschaften werden als [__platonische Körper__](gloss:platonic-solid)
 bezeichnet, benannt nach dem griechischen
Philosophen [Platon](bio:plato).


Wie sehen also die platonischen Körper aus - und wie viele von ihnen gibt es? Um eine dreidimensionale Form zu
erhalten, benötigen wir mindestens [[3]] Flächen, die sich an jeder
Ecke treffen. Beginnen wir systematisch mit dem kleinsten regelmäßigen Vieleck:
gleichseitige Dreiecke:

---
> id: platonic-tetrahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Tetrahedron")

::: column(width=200)

    img(src="images/platonic/tetrahedron.svg" width=200 height=120)

::: column.grow
Wenn wir ein Polyeder zusammensetzen, so dass an jeder Ecke drei [gleichseitige Dreiecke](gloss:equilateral-triangle)
zusammentreffen, erhalten wir den Körper auf der linken Seite. Er wird als
__Tetraeder__ bezeichnet und hat [[4]] Flächen. _{.reveal(when="blank-0")}("Tetra" bedeutet auf Griechisch
"vier")._
:::

---
> id: platonic-octahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Octahedron")

::: column(width=200)

    img(src="images/platonic/octahedron.svg" width=200 height=120)

::: column.grow
Wenn sich an jeder Ecke vier gleichseitige Dreiecke treffen, erhalten wir einen anderen platonischen
Körper. Er wird __Oktaeder__ genannt und hat [[8]] Flächen.
_{.reveal(when="blank-0")}("Octa" bedeutet auf Griechisch "acht". So wie "Oktogon" eine 8-seitige Figur
meint, meint "Oktaeder" einen 8-seitigen Körper.)_
:::

---
> id: platonic-icosahedron

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Icosahedron")

::: column(width=200)

    img(src="images/platonic/icosahedron.svg" width=200 height=120)

::: column.grow
Wenn sich an jeder Ecke [[5]] Dreiecke treffen, erhalten wir ein __Ikosaeder__. Es hat
[[20]] Flächen. _{.reveal(when="blank-1")}("Icosa" bedeutet auf Griechisch "zwanzig".)_
:::

---
> id: platonic-6-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/triangles-6.svg" width=200 height=120)

::: column.grow
Wenn [[6]] Dreiecke an jeder Ecke zusammentreffen, geschieht etwas anderes: Wir erhalten nur [[
eine Parkettierung|ein Viereck|einen anderen Ikosaeder]],
_{span.reveal(when="blank-1")}anstelle eines dreidimensionalen Polyeders._
:::

---
> id: platonic-7-triangles

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/triangles-7.svg" width=200 height=120)

::: column.grow
Und sieben oder mehr Dreiecke an jeder Ecke produzieren auch keine neuen Polyeder:
Es gibt für so viele Dreiecke nicht genug Platz um eine Ecke herum.
:::

Das bedeutet, dass wir [[3]] platonische Körper gefunden haben, die aus Dreiecken bestehen. Kommen
wir zum nächsten regelmäßigen Vieleck: Quadrate.

---
> id: platonic-cube

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Cube")

::: column(width=200)

    img(src="images/platonic/cube.svg" width=200 height=120)

::: column.grow
Wenn [[3]] Quadrate an jeder Ecke zusammentreffen, erhalten wir einen __Würfel__. Genau wie ein Spielwürfel
hat er [[6]] Flächen. _{span.reveal(when="blank-1")}Der Würfel wird manchmal auch *Hexaeder*
genannt, nach dem griechischen Wort "hexa" für "sechs"._
:::

---
> id: platonic-4-squares

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-1" src="images/platonic/squares.svg" width=200 height=120)

::: column.grow
Wenn sich an jeder Ecke [[4]] Quadrate treffen, erhalten wir eine [[ander Parkettierung|ein Tetraeder|einen weiteren Würfel]].
_{span.reveal(when="blank-1")}Und wie zuvor funktioniert es auch hier mit fünf oder mehr Quadrate nicht._
:::

---
> id: platonic-dodecahedron

Als nächstes versuchen wir es mit regelmäßigen Fünfecken (Pentagon):

::: column(width=120 parent="padded-thin")

    x-polyhedron(size=120 shape="Dodecahedron")

::: column(width=200)

    img(src="images/platonic/dodecahedron.svg" width=200 height=120)

::: column.grow
Wenn [[3]] Fünfecke an jeder Ecke zusammentreffen, erhalten wir ein __Dodekaeder__. Es hat
[[12]] Flächen. _{.reveal(when="blank-1")} ("Dodeca" bedeutet auf Griechisch "zwölf".)_
:::

---
> id: platonic-4-pentagons

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img(src="images/platonic/pentagons.svg" width=200 height=120)

::: column.grow
Wie zuvor sind vier oder mehr Fünfecke [[nicht möglich|möglich]], weil
nicht genügend Platz vorhanden ist.
:::

---
> id: platonic-hexagons

Das nächste regelmäßige Vieleck, das wir untersuchen wollen ist das Sechseck (Hexagon):

::: column(width=120 parent="padded-thin")
::: column(width=200)

    img.reveal(when="blank-0" src="images/platonic/hexagons.svg" width=200 height=120)

::: column.grow
Wenn an jeder Ecke drei Sechsecke zusammentreffen, erhalten wir sofort [[eine Parkettierung|ein Polyeder|ein Hexaeder]].
_{span.reveal(when="blank-0")} Da es keinen Platz für mehr als drei gibt,
scheint es keine platonischen Körper aus Sechsecken zu geben._
:::

---
> id: platonic-final

Dasselbe gilt auch für alle regelmäßigen Vielecke mit mehr als sechs Seiten. Sie
lassen sich nicht zu einer Parkettierung zusammenfügen und man erhält schon gar keine dreidimensionalen Vielecke.

Das bedeutet, dass es nur [[5]] platonische Körper gibt! Schauen wir uns
alle auf einmal an:

---
> id: platonic-overview

::: column.grow.text-center(width=120 parent="plato padded-thin")
__Tetraeder__

    x-polyhedron.dual(size=120 shape="Tetrahedron")

_{span.dual}[[4]] Flächen_  
_{span.dual}[[4]] Ecken_  
_{span.dual}[[6]] Kanten_

::: column.grow.text-center(width=120)
__Würfel__

    x-polyhedron.dual(target="dual1" size=120 shape="Cube")

_{span.dual(target="dual1")}[[6]] Flächen_  
_{span.dual(target="dual1")}[[8]] Ecken_  
_{span.dual}[[12]] Kanten_

::: column.grow.text-center(width=120)
__Oktaeder__

    x-polyhedron.dual(target="dual1" size=120 shape="Octahedron")

_{span.dual(target="dual1")}[[8]] Flächen_  
_{span.dual(target="dual1")}[[6]] Ecken_  
_{span.dual}[[12]] Kanten_

::: column.grow.text-center(width=120)
__Dodekaeder__

    x-polyhedron.dual(target="dual2" size=120 shape="Dodecahedron")

_{span.dual(target="dual2")}[[12]] Flächen_  
_{span.dual(target="dual2")}20 Ecken_  
_{span.dual}30 Kanten_

::: column.grow.text-center(width=120)
__Ikosaeder__

    x-polyhedron.dual(target="dual2" size=120 shape="Icosahedron")

_{span.dual(target="dual2")}[[20]] Flächen_  
_{span.dual(target="dual2")}12 Ecken_  
_{span.dual}30 Kanten_
:::

{.reveal(when="blank-3 blank-4 blank-6 blank-7 blank-9 blank-10")} Beachte, dass
die Anzahl der Flächen und Ecken bei [Würfeln und
Oktaedern](target:dual1) sowie bei [Dodekaedern und Ikosaedern](target:dual2) [[vertauscht wird|gleich ist]],
während die Anzahl der Kanten bei beiden [[gleich bleibt|unterschiedlich ist]]. Diese Paare
platonischer Körper werden als [__duale Körper__](gloss:polyhedron-dual) bezeichnet.

---
> id: platonic-dual

Wir können ein Polyeder in sein Dual verwandeln, indem wir jede Fläche durch eine Ecke
und jede Ecke durch eine Fläche "ersetzen". Diese Animationen zeigen, wie das abläuft:

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

::: column(width=300)

    x-solid(size=300)
    x-slider(steps=100)

:::

Das Tetraeder ist dual mit sich selbst. Da es die gleiche Anzahl von Flächen und
Eckpunkten hat, würde das Austauschen nichts ändern.

---
> id: platonic-elements

[Platon](bio:plato) glaubte, dass die ganze Materie im Universum aus vier
Elementen besteht: Luft, Erde, Wasser und Feuer. Er dachte, dass jedes Element einem der platonischen Körper entspricht,
während das fünfte das Universum
als Ganzes darstellen würde. Heute wissen wir, dass es mehr als 100 verschiedene Elemente gibt, die aus kugeligen Atomen und nicht aus Polyedern
bestehen.

    figure
      img(src="images/elements.jpg" width=600 height=153)
      p.caption Bilder aus Johannes Keplers Buch "Harmonices Mundi" (1619)

---

### Archimedische Körper

> id: archimedean

Platonische Körper sind besonders wichtige Polyeder, aber es gibt unzählige
andere.

[__Archimedische Körper__](gloss:archimedean-solid) zum Beispiel müssen auch aus [regelmäßigen Vielecken](gloss:regular-polygon)
bestehen, aber man kann dabei mehrere
unterschiedliche Arten verwenden. Sie sind nach einem anderen griechischen Mathematiker, [Archimedes
von Syrakus](bio:archimedes), benannt, und es gibt 13 von ihnen:

::: column(width=170 parent="padded-thin")
    x-polyhedron(size=170 shape="TruncatedTetrahedron")
    
{.caption} __Tetraederstumpf__  
8 Flächen, 12 Ecken,  18 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="Cuboctahedron")

{.caption} __Kuboktaeder__  
14 Flächen, 12 Ecken, 24 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCube")

{.caption} __Hexaederstumpf__  
14 Flächen, 24 Ecken, 36 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedOctahedron")

{.caption} __Oktaederstumpf__  
14 Flächen, 24 Ecken, 36 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicuboctahedron")

{.caption} __Rhombenkuboktaeder__  
26 Flächen, 24 Ecken, 48 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Kuboktaederstumpf__  
26 Flächen, 48 Ecken, 72 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="SnubCube")

{.caption} __Abgeschrägtes Hexaeder__  
38 Flächen, 24 Ecken, 60 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="Icosidodecahedron")

{.caption} __Ikosidodekaeder__  
32 Flächen, 30 Ecken, 60 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedCuboctahedron")

{.caption} __Dodekaederstumpf__  
32 Flächen, 60 Ecken, 90 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosahedron")

{.caption} __Ikosaederstumpf__  
32 Flächen, 60 Ecken, 90 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="Rhombicosidodecahedron")

{.caption} __Rhombenikosidodekaeder__  
62 Flächen, 60 Ecken, 120 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="TruncatedIcosidodecahedron")

{.caption} __Ikosidodekaederstumpf__  
62 Flächen, 120 Ecken, 180 Kanten
::: column(width=170)
    x-polyhedron(size=170 shape="SnubDodecahedron")

{.caption} __abgeschrägtes Dodekaeder__  
92 Flächen, 60 Eckpunkte, 150 Kanten
:::


---
> id: polyhedra-applications

### Anwendungen

Platon hatte Unrecht, als er glaubte, dass alle Elemente aus platonischen Körpern bestehen. Aber
regelmäßige Polyeder haben viele besondere Eigenschaften, die an anderer
Stelle in der Natur zum Vorschein kommen - und wir können diese Eigenschaften in Wissenschaft und Technik kopieren.

::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/radiolaria.jpg")
    p.caption Skelett eines Strahlentierchens
    
::: column(width=180)

    x-img(lightbox width=180 height=180 src="images/virus.jpg")
    p.caption Ikosaedrisches Virus

::: column.grow
Viele __Viren__, __Bakterien__ und andere kleine __Organismen__ haben die Form von
[Ikosaedern](gloss:icosahedron). So müssen beispielsweise Viren ihr
Erbgut in eine Hülle aus vielen identischen Proteineinheiten einschließen. Das Ikosaeder
ist der effizienteste Weg, da es aus wenigen regelmäßigen
Elementen besteht, aber fast wie eine Kugel geformt ist.
:::

::: column(width=180)

    x-img(lightbox, credit="NASA/JPL", width=180, height=180, src="images/buckyball.jpg")
    p.caption Fulleren-Moleküle
      
::: column(width=180)

    x-img(lightbox, credit="Philipp Hienstorfer, via Wikipedia", width=180, height=180, src="images/biosphere.jpg")
    p.caption Biosphère Montreal
      
::: column.grow
Viele __Moleküle__ sind wie regelmäßige Polyeder geformt. Das bekannteste Beispiel ist
`C_60`, das aus 60 Kohlenstoffatomen besteht, die in Form eines
[Ikosaederstumpfs](gloss:truncated-icosahedron) angeordnet sind.

Es wurde 1985 entdeckt, als Wissenschaftler interstellaren Staub erforschten. Sie
nannten es "Buckyball" (oder Buckminsterfullerene) nach dem Architekten [Buckminster
Fuller](bio:fuller), der für den Bau ähnlich aussehender Gebäude bekannt ist.
:::

::: column(width=180)

    x-img(lightbox credit="Chris Gladis via Wikipedia" width=180 height=180 src="images/crystal.jpg")
    p.caption Fluorit-Oktaeder
      
::: column(width=180)

    x-img(lightbox credit="Archaeodontosaurus, via Wikipedia" width=180 height=180 src="images/rock.jpg")
    p.caption Pyritwürfel
      
::: column.grow
Die meisten __Kristalle__ haben ihre Atome in einem regelmäßigen Gitter angeordnet, das aus
[Tetraedern](gloss:tetrahedron), [Würfeln](gloss:cube) oder [Oktaedern](gloss:octahedron) besteht.
Wenn sie abbrechen oder zerspringen, kannst du diese Formen in größerem Maßstab sehen.
:::

::: column(width=180)

    x-img(lightbox, credit="Andrew Dunn, via Wikipedia", width="180", height="180", src="images/space-frame.jpg")
    p.caption Achteckige Gitterrahmen

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/louvre.jpg")
    p.caption Louvre-Museum in Paris

::: column.grow
Tetraeder und Oktaeder sind unglaublich steif und stabil, weshalb sie sehr
oft für __Konstruktionen__ verwendet werden. _Gitterrahmen_ sind vieleckige Konstruktionen, die große Dächer und schwere Brücken
tragen können.
:::

::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/football.jpg")
    p.caption Fußball
    
::: column(width=180)

    x-img(lightbox width="180", height="180", src="images/dice.jpg")
    p.caption Mehrseitige Würfel

::: column.grow
Platonische Körper werden auch verwendet, um __Würfel__ zu machen. Aufgrund ihrer Symmetrie hat
jede Seite die gleiche [Wahrscheinlichkeit](gloss:probability), mit dem Gesicht nach oben zu landen - also sind
Würfel immer fair.

Der [Ikosaederstumpf](gloss:truncated-icosahedron) ist wahrscheinlich der
berühmteste Polyeder der Welt: Er hat die Form eines Fußballs.
:::
