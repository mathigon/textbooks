# Statistik und Daten

## Casino-Mathematik

> id: roulette
> sectionBackground: dark casino
> goals: rotate
> section: casino
> color: "#BA1778"
> level: Intermediate
> next: graph-theory

    .roulette-wheel
      .layer-2.wheel
      .layer-3
      .layer-4.wheel
      .layer-5
      .ball
      svg(width=380 height=380): circle(cx=190 cy=190 r=190)
    x-gesture(target=".roulette-wheel" offset="-90,-100" slide="0,200")

Bald nach ihrer ersten Entdeckung begannen Mathematiker damit, die
Wahrscheinlichkeitsgesetze auf viele verschiedene Bereiche des Lebens anzuwenden - auch auf Casinospiele.

Einer dieser Mathematiker war [Karl Pearson](bio:pearson), der die
 in der französischen Zeitung _Le Monaco_ veröffentlichten Ergebnisse von Roulette-Spielen analysierte.

Roulette besteht aus einem Rad mit den Zahlen von 1 bis 36 in den Farben
__{.red}rot__ und __{.black}schwarz__ sowie einer grünen 0. Eine Kugel rollt außen herum
und landet zufällig auf einer der Zahlen. Die Spieler können auf eine
einzelne Zahl, eine Reihe von mehreren Zahlen oder auch nur auf eine Farbe setzen. Ihr potenzieller
Gewinn hängt von der Wahrscheinlichkeit jedes dieser Ergebnisse ab.

---
> id: roulette-1

Hier ist einer der vielen hundert Zeitungsauszüge, die Pearson gesammelt
und analysiert hat. Auf den ersten Blick sieht es ziemlich zufällig aus:

    include mixins
    .newspaper
      p Roulette-Ergebnisse vom 19. August 1823, Tabelle 5:
      div
        for x in [13, 12, 30, 33, 3, 12, 29, 5, 8, 22, 23, 13, 5, 18, 14, 31, 36, 15, 18, 28, 32, 29, 11, 34, 23, 36, 8, 16, 2, 3, 9, 20, 16, 14, 15, 26, 31, 21, 15, 3, 33, 22, 12, 14, 9, 6, 30, 13, 33, 5, 28, 17, 27, 6, 5, 34, 11, 18, 32, 6, 9, 31, 29, 2, 18, 35, 6, 1, 34, 28, 1, 10]
          span(class=colour(x))= x

Ein Rouletterad hat die gleiche Anzahl von roten und schwarzen Zahlen. Wenn wir die
grüne 0 ignorieren (was bedeutet, dass das Casino gewinnt), würden wir erwarten, dass die Anzahl der roten und
schwarzen Zahlen [[ungefähr|genau]] gleich groß ist. Lass uns überprüfen,
ob das bei den oben genannten Ergebnissen tatsächlich der Fall ist.

    include mixins
    +barchart([['Rot', 37, 'r'], ['Schwarz', 35, 'b']])

---
> id: roulette-2

Das sieht ziemlich gleichmäßig verteilt aus - es gibt einen kleinen Unterschied zwischen der
Anzahl der roten und schwarzen Ergebnisse, aber das ist bei
Wahrscheinlichkeiten immer zu erwarten.

Doch Pearson hat hier nicht aufgehört. Er erkannte, dass, wenn die Ergebnisse
völlig zufällig wären, jedes der vier möglichen Paare von zwei aufeinander
folgenden Farben auch gleich wahrscheinlich sein müsste. Auch in unserem Beispiel können
wir wieder die Anzahl dieser Ereignisse zählen:

    include mixins
    +barchart([['RR', 14, 'r'], ['RB', 24, 'rb'], ['BR', 24, 'rb'], ['BB', 9, 'b']])

---
> id: roulette-3

Aus irgendwelchen Gründen scheint es, dass __{.red}RR__ und __{.black}BB__ viel
[[seltener|häufiger]] vorkommen als __{.red}R__**{.black}B** und
__{.red}B__**{.black}R**, obwohl sie alle die gleiche Wahrscheinlichkeit haben sollten.
Natürlich hätten wir bei dieser speziellen Abolge von
Ergebnissen auch einfach nur _Pech_ haben können - aber Pearson testete viele Tausende von Ergebnissen
und es war immer dasselbe.

---
> id: roulette-4

Noch schlimmer wird es, wenn wir uns Dreiergruppen von Ergebnissen ansehen. Jedes der 8 möglichen
Farbentripel sollte gleich wahrscheinlich sein, aber das ist
hier eindeutig nicht der Fall:

    include mixins
    +barchart([['RRR', 3, 'r'], ['RRB', 10, 'rrb'], ['BRR', 10, 'rrb'], ['RBR', 15, 'rrb'], ['BRB', 14, 'bbr'], ['RBB', 8, 'bbr'], ['BBR', 8, 'bbr'], ['BBB', 2, 'b']])

Es scheint, dass in diesem speziellen Casino die Farben viel öfter wechseln,
als man erwarten würde. Es gibt kaum lange Aufeinanderfolgen der gleichen Farbe
(__{.red}RRR__ oder __{.black}BBB__).

Pearson berechnete, dass die Wahrscheinlichkeit, Ergebnisse zu sehen, die so verzerrt
sind, weniger als 1 zu 100.000.000 beträgt! Er nahm an, dass die Roulette-Räder manipuliert wurden,
um höhere Gewinne für das Casino zu erzielen - und schrieb viele wütende Briefe,
um diesen Betrug aufzudecken.

---
> id: roulette-5

::: column(width=300)

    x-img(src="images/cocktails.jpg" alt="Cocktail Bar" width=300 height=185)

::: column.grow
Als er schließlich nach Monte Carlo reiste, entdeckte er, dass der Grund für die
verzerrten Ergebnisse ganz anderer Natur war: Die Journalisten, die die Ergebnisse festhalten sollten,
 saßen stattdessen nur in der Bar des Casinos beim Trinken
und erfanden zufällige Farben…
:::

---
> id: random-sequence
> goals: random

Diese Geschichte zeigt, dass wir Menschen dazu neigen, ziemlich schlecht mit zufällig
aussehenden Daten zurechtzukommen: Wir unterschätzen oft unwahrscheinliche Ereignisse (lange Abfolgen
derselben Farbe) und überschätzen wahrscheinliche (wechselnde Farben). Das kann erfolgreich dazu
genutzt werden, Betrug im Bank- und Versicherungswesen aufzudecken.

Hier kannst du selbst versuchen, ob du besser bist als die Journalisten: Schreibe
eine Abfolge von Rs und Bs auf, und finde heraus, wie zufällig sie wirklich ist:

    label.newspaper: input(type="text", placeholder="RBBRRBBBRRRBRBRRB")
    p.text-center(style="margin-top: -1em; Schriftfamilie: monospace") Zufalls-Wertung: #[span.score 100]/100

---
> id: dealer

::: column.grow
Während Pearson nur frühere Roulette-Ergebnisse analysierte, versuchten andere, die Mathematik zu nutzen,
um ihre Gewinnchancen in den Casinos zu erhöhen. Einer von diesen war
[Edward Thorp](bio:thorp), der das _Kartenzählen_ erfand - eine Technik, die ihm
erlaubte, Casinos beim [Blackjack](gloss:blackjack) zu schlagen.

Später wandte er sich dem Roulette zu: Er glaubte, dass man, wenn man die genaue
Position und Geschwindigkeit der Kugel in einem Rouletterad kennt, in der Lage sein sollte, mit Hilfe der
Physik das Ergebnis annähernd vorherzusagen. Nachdem der Coupier das Rouletterad
zum Drehen gebracht hat, gibt es nur noch wenige Sekunden, in denen man noch neue Einsätze platzieren
darf. Leider ist diese Zeit für den Menschen viel zu kurz, um das
Ergebnis im Kopf zu berechnen.
::: column(width=150)

    .book: img(src="images/beat-the-dealer.jpg" width=150 height=250)

:::

---
> id: dealer-1

    img.computer(src="images/wearable-computer.png" width=275 height=364)

Am Massachusetts Institute of Technology, diskutierte Thorp seine Ideen mit
[Claude Shannon](bio:shannon), einem weiteren Mathematiker und der Vater der
[Informationstheorie](gloss:information). Gemeinsam beschlossen sie, den
allerersten _Wearable Computer_ ("tragbaren" Computer) zu bauen, Jahrzehnte vor
Google Glass oder Apple Watch.

Der Computer hatte ungefähr die Größe einer Zigarettenschachtel und war um
ihre Taille geschnallt. Eine Reihe von Drähten lief bis zu ihrem Schuh, mit dem sie immer dann leicht auf
den Boden stampften, wenn die Kugel eine bestimmte Markierung auf dem Rouletterad überquerte. Dadurch konnte der
Computer ihre Geschwindigkeit berechnen und vorhersagen, wo sie landen würde. Ein weiterer Satz
Drähte führte vom Computer zu einem Ohrhörer, der je nach Ergebnis unterschiedliche Töne
erzeugte.

---
> id: dealer-2

    figure: x-img(src="images/las-vegas.jpg" alt="Las Vegas Strip" width=760 height=345)

Im Sommer 1961 probierten Thorp und Shannon erfolgreich ihren Computer
in Las Vegas aus. Aber während sie etwas Geld verdienten, war der Computer - der sogar
Teile von Modellflugzeugen enthielt - nicht robust genug, um in
größerem Maßstab eingesetzt werden zu können.

Thorp schrieb über ihre Ergebnisse in einer wissenschaftlichen Arbeit, und natürlich wurden Computer
später in Casinos verboten. Thorp wurde sogar aus allen Casinos in Las
Vegas verbannt, aber zu diesem Zeitpunkt hatte er sich bereits zu noch gewinnbringenderen Unternehmungen entschlossen:
Mathematik und Computer an der Börse einzusetzen.

--------------------------------------------------------------------------------

## Data Visualisation

> section: visualisation
> sectionStatus: dev

TODO

---

## Center and Spread of Data

> section: center-and-spread
> sectionStatus: dev

TODO

---

## Sampling and Estimation

> section: sampling
> sectionStatus: dev

TODO

---

## Spreadsheets and Frequency Tables

> section: spreadsheets
> sectionStatus: dev

TODO

---

## Linear Models

> section: linear-models
> sectionStatus: dev

TODO

---

## Causation vs Correlation

> section: causation-correlation
> sectionStatus: dev

TODO
