# Winkel und Vielecke

## Winkel

> section: angles
> sectionStatus: dev
> color: "#2E6AE1"
> level: Foundations

TODO

---

## Winkel in Vielecken

> section: angles-in-polygons
> sectionStatus: dev

TODO

---

## Dreiecke zeichnen

> section: triangles
> id: triangle-inequality
> goals: s0 s1 s3 s5

In diesem Abschnitt werden wir näher betrachten, wie wir Dreiecke zeichnen können. Wenn ich dir zB. drei beliebige Zahlen vorgebe, kannst
du dann ein Dreieck zeichnen, das diese Seitenlängen hat?

Hier sind einige Beispiele - verschiebe die Ecken des Dreiecks, bis die drei
Seitenlängen jeweils mit einer der Zahlenkombinationen auf der linken Seite übereinstimmen.

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
](target:short) an beiden Enden.

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

Mit anderen Worten, wenn ein Dreieck die Seiten _a_, _b_ und _c_ hat, dann wissen wir, dass
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

Stell dir vor, dass ein Dreieck zwei Seiten der Länge 4 und 6 hat. Wir wollen die Länge der dritten
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

Jetzt sehen wir, dass das Gummiband immer [kürzer als](action:hover(50,127,250,127,0))
`6+4=10` und [länger als](action:hover(90,45,125,65,1)) `6-4=2` ist.

::: column(width=300)

    x-geopad(width=300 height=200): svg
      circle(name="a" cx=170 cy=130 hidden)
      circle.move(name="b" cx=75 cy=60 project="circle(a,120)")
      circle.move(name="c" cx=300 cy=110 project="circle(a,80)")
      path.thick(x="segment(a,b)" label="6")
      path.thick(x="segment(a,c)" label="4")
      path.orange(x="segment(b,c)" label="${floor(distance(b,c)/20+0.01)}")

:::

Beachte, dass es sich hierbei um _strikte_ Ungleichheiten handelt. Wenn die dritte Seite _genau_ 2 oder
10 ist, erhalten wir eine gerade Linie und kein Dreieck. Allerdings würde es schon mit 2.1 oder 9.9
klappen, ein Dreieck zu bilden.

---

{.todo} COMING SOON - Mehr über das Zeichnen von Dreiecken, Winkel in Dreiecken,
Ähnlichkeit und Kongruenz.

---

## Der Satz des Pythagoras

> section: pythagoras
> sectionStatus: dev

TODO

---

## The Coordinate Plane

> section: coordinate-plane
> sectionStatus: dev

TODO

---

## Transformations and Congruence

> section: transformations
> sectionStatus: dev

TODO
