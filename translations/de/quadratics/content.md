# Quadratische Gleichungen

## Einführung

> id: intro
> section: introduction
> color: "#F6700F"
> level: Intermediate
> next: graph-theory

    img.text-wrap(src="images/skater-1.jpg" style="shape-outside: url(images/skater-1-mask.png)" width=300 height=393)

Willkommen bei SkateSum, einer kleinen Firma, die Skateboards herstellt. Die Ingenieure haben
an einem brandneuen Modell, dem _SquareBoard_, gearbeitet, das nun endlich
serienreif ist. Du wurdest damit beauftragt, den optimalen Weiterverkaufspreis
für die Skateboards zu finden - und es stellt sich heraus, dass der Bau der Skateboards nicht billig ist:

* Die für den Bau von Skateboards erforderlichen Werkzeuge und Maschinen kosten 5.000 €. Man
  bezeichnet das oft als __Fixkosten__.
* Jedes Skateboard kostet zusätzlich 30 € für Holz, andere Materialien
  und das Gehalt der Angestellten. Das bezeichnet man oft als __variable Kosten__.

Mit anderen Worten, die __Kosten__ für die Herstellung von _n_ Skateboards betragen

{.text-center.no-voice} _{.pill.orange}Kosten_ = _{x-equation(solution="5000+30×n")}_.

---
> id: demand

Die neuen Skateboards werden mit Spannung erwartet, aber wenn der Preis zu hoch ist, werden weniger
Menschen tatsächlich eines kaufen. Wir können dies in einem Graphen darstellen, in dem der Preis eines
Skateboards auf der _x-Achse_ und die entsprechende Anzahl von Menschen, die ein Skateboard
kaufen wollen (die __Nachfrage__) auf der _y-Achse_ dargestellt wird.

Welches dieser Diagramme ist für das Verhältnis zwischen Preis und
Nachfrage am sinnvollsten?

    x-picker.wrap
      .item(data-error="wrong-chart-1" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="Preis,Nachfrage" crosshairs="no" labels="no" fn="0.6x + 2")
      .item(style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="Preis,Nachfrage" crosshairs="no" labels="no" fn="8 - 0.6x")
      .item(data-error="wrong-chart-2" style="width: 220px")
        x-coordinate-system(width=220 height=180 x-axis="0,10,2" y-axis="0,10,2" axis-names="Preis,Nachfrage" crosshairs="no" labels="no" fn="2.5 * sqrt(x)")

---
> id: demand-1

Ein höherer Preis bedeutet, dass weniger Menschen ein Skateboard kaufen wollen, so dass sich der Graph
der Funktion nach unten bewegen muss. Nach einigen Marktforschungen kamen die
Ökonomen zu folgender Gleichung:

{.text-center} _{.pill.teal}Nachfrage_ = 2800 - 15 × _{.pill.purple}Preis_

Wenn zum Beispiel ein Skateboard 80 € kostet, wird die Nachfrage bei [[1600]] Einheiten liegen.

---
> id: intro4

Der __Umsatz__ unseres Unternehmens sind die Gesamteinnahmen, die wir erzielen. Er ergibt sich aus der Anzahl der verkauften
Skateboards (die _Nachfrage_) multipliziert mit dem Stückpreis:

{.text-center} _{.pill.green}Umsatz_ = _{.pill.teal}Nachfrage_ ×  _{.pill.purple}Preis_

Aber die Zahl, an der wir mehr interessiert sind, ist unser __Gewinn__: die Einnahmen, die wir
durch den Verkauf von Skateboards erzielen, abzüglich der Kosten für deren Herstellung. Kannst du eine
Gleichung finden, die unseren  _{.pill.yellow}Gewinn_ in Abhängigkeit des
_{.pill.purple}Preises_ ausdrückt?

    x-equation-system(steps="Nachfrage*Preis-(5000 + 30*nachfrage) | (2800-15*Preis)*Preis-5000-30*(2800-15*Preis)" hints="intro-1|intro-2|intro-3")
      table
        tr
          td: em.pill.yellow Gewinn
          td= '='
          td #[em.pill.green Umsatz] − #[em.pill.orange Kosten]
        tr
          td
          td= '='
          td: x-equation(solution="-15 × preis^2 + 3250 × preis - 89000" substitutions="kosten: 89000 - 450 preis | nachfrage: 2800 - 15 preis | umsatz: 2800 preis - 15 preis^2")

---
> id: intro-table

Beachte, dass diese Gleichung sowohl den _{.pill.purple}Preis_ als auch den
_{.pill.purple}`Preis^2`_ enthält. Man nennt das eine [__quadratische
Gleichung__](gloss:quadratic-equation), benannt nach dem lateinischen Wort "quadratus"
für Quadrat.

Um herauszufinden, wie wir unseren Gewinn maximieren können, wollen wir den Gewinn für ein paar
verschiedene Preise berechnen:

::: .overflow-wrap

| _{.pill.purple}Preis/€_  | 20   | 40   | 60  | 80  | 100 | 120 | 140 | 160 | 180 |
| _{.pill.yellow}Gewinn/€_ | –30k | 17k | [[52]]k | [[75]]k | [[86]]k | [[85]]k | _{span.reveal(when="blank-3")}72k_ | _{span.reveal(when="blank-3" delay=400)}47k_ | _{span.reveal(when="blank-3" delay=800)}10k_ |
{.grid}

:::

---
> id: intro-chart

Jetzt können wir all diese Punkte in einem Koordinatensystem darstellen und sie miteinander
verbinden:

    x-coordinate-system(width=640 height=400 x-axis="-20,200,20" y-axis="-100000,100000,20000" axis-names="Preis/€,Gewinn/€" padding=10 animate)
      .region.r1(style="top: 48%; height: 46%; left: 6%; width: 6%;")
      .region.r2(style="top: 26%; height: 40%; left: 79%; width: 21%;")

Du erinnerst dich sicher daran, dass der Graph einer [linearen Funktion](gloss:linear-function)
immer eine gerade Linie ist. Aber wie du oben gesehen hast, ist der Graph einer [quadratischen
Funktion](gloss:quadratic-function) gekrümmt. Er hat sogar einen eigenen Namen: eine
[__Parabel__](gloss:parabola).

Wenn der [Preis 0 ist](->.r1), ist unser Gewinn negativ,
weil wir dann ja einfach nur teure Skateboards verschenken. Wenn die Preise steigen, steigen auch unsere
Gewinne. Wenn die Skateboards jedoch [zu teuer](->.r2) werden, wollen die
Leute sie nicht mehr kaufen, und unser Gewinn sinkt wieder.

Wir können unseren Gewinn maximieren, indem wir die Skateboards zu Preisen von etwa
[[108 ± 10]] € anbieten.

---
> id: intro-final

    figure: x-img(src="images/skater-2.jpg" alt="Skateboarder" width=400 height=352)

In Wirklichkeit kann es für Unternehmen sehr schwierig sein, eine genaue
Gleichung für ihren Gewinn aufzustellen - wahrscheinlich viel komplizierter als
dieses Beispiel.

Wie auch immer, quadratische Gleichungen tauchen überall in der Natur, Technik und
Wirtschaft auf. In diesem Kurs lernst du verschiedene Methoden kennen, um quadratische Gleichungen zu lösen
und ihre Graphen zu verstehen.

--------------------------------------------------------------------------------

## Binomische Formeln

> section: binomials
> sectionStatus: dev

TODO

--------------------------------------------------------------------------------

## Quadratische Gleichungen Lösen

> section: solving
> sectionStatus: dev

TODO

--------------------------------------------------------------------------------

## Die Quadratische Formel

> section: formula
> sectionStatus: dev

TODO

--------------------------------------------------------------------------------

## Quadratische Funktionen

> sectionStatus: dev
> section: graphs

TODO

--------------------------------------------------------------------------------

## Projektilbewegung

> section: projectiles
> sectionStatus: dev
> sectionBackground: projectiles

TODO

--------------------------------------------------------------------------------

## Noch Mehr Anwendungen

> section: applications
> sectionStatus: dev

TODO
