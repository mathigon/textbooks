# Wahrscheinlichkeit

## Einführung

> id: intro
> section: introduction
> color: "#CD0E66"
> level: Intermediate
> next: statistics

Wahrscheinlichkeiten und Prognosen findet sich überall in unserem Alltag,
von der Wettervorhersage bis hin zu Spielen, Versicherungen oder Wahlumfragen. In der Geschichte der Mathematik ist die
Vorstellung von Wahrscheinlichkeiten aber noch relativ neu. Während die Zahlen und die Geometrie bereits vor mehr als 2500 Jahren von altgriechischen Mathematikern
studiert wurden, entstanden die Grundlagen
der Wahrscheinlichkeit erst im 17. und 18. Jahrhundert.

::: column.grow
Der Legende nach trafen sich zwei der größten Mathematiker, [Blaise
Pascal](bio:pascal) und [Pierre de Fermat](bio:fermat), regelmäßig
in einem kleinen Café in Paris.

Zur Ablenkung von den schwierigen mathematischen Theorien, die sie diskutierten, spielten sie
oft ein einfaches Spiel: Sie warfen wiederholt eine Münze - jedes Mal _Kopf_ war ein
Punkt für Pascal und jedes Mal _Zahl_ war ein Punkt für Fermat. Wer nach drei Münzwürfen weniger
Punkte hatte, musste die Rechnung bezahlen.
::: column(width=360)

    img(src="images/paris.jpg" width=360 height=254)

:::

Eines Tages wurden sie jedoch nach dem ersten Münzwurf unterbrochen, und Fermat musste
dringend abreisen. Später fragten sie sich, wer die Rechnung bezahlen sollte, oder ob es eine
faire Möglichkeit gäbe, den Betrag aufzuteilen. Die erste Münze hatte _Kopf_ ergeben (ein Punkt für Pascal), also sollte vielleicht
Fermat alles bezahlen. Es bestand jedoch eine kleine Chance, dass Fermat
noch hätte gewinnen können, wenn [[die beiden nächsten Münzwürfe|der nächste Münzwurf]] _Zahl_ gewesen wäre(n).

---
> id: intro-1

Pascal und Fermat beschlossen, alle Möglichkeiten aufzuschreiben, wie das Spiel hätte
weitergehen können:

::: column.grow(width=120)

    img(src="images/coins-1.png" width=136 height=48 alt="HHH")

{.caption} Pascal gewinnt
::: column.grow(width=120)

    img(src="images/coins-2.png" width=136 height=48 alt="HHT")

{.caption} Pascal gewinnt
::: column.grow(width=120)

    img(src="images/coins-3.png" width=136 height=48 alt="HTH")

{.caption} Pascal gewinnt
::: column.grow(width=120)

    img(src="images/coins-4.png" width=136 height=48 alt="HTT")

{.caption} Fermat gewinnt
:::

Alle vier möglichen Ergebnisse sind gleich wahrscheinlich, und Pascal gewinnt in
[[drei|vier|zwei]] davon. _{span.reveal(when="blank-0")}So beschlossen sie, dass
Fermat 3/4 und Pascal 1/4 der Rechnung bezahlen sollte._

---
> id: intro-2

Pascal und Fermat hatten die erste wichtige Wahrscheinlichkeitsgleichung entdeckt: Wenn
ein Experiment mehrere mögliche Ergebnisse hat, die alle gleich wahrscheinlich sind, dann gilt

{.text-center} Wahrscheinlichkeit eines Ereignisses =
`"Anzahl der Möglichkeiten, wie das Ereignis stattfinden könnte"/"Gesamtzahl der möglichen Ergebnisse"`.

In unserem Beispiel beträgt die Wahrscheinlichkeit, dass Pascal das Spiel gewinnt, `3/4 = 0.75`, und
die Wahrscheinlichkeit, dass Fermat das Spiel gewinnt, `1/4 = 0.25`.

---

### Was sind Wahrscheinlichkeiten

> id: prob-line

Eine __Wahrscheinlichkeit__ ist eine Zahl zwischen 0 und 1, die die Chancen dafür beschreibt,
dass ein bestimmtes __Ereignis__ eintritt. Eine Wahrscheinlichkeit von 0 bedeutet, dass etwas _unmöglich_ ist; eine
Wahrscheinlichkeit von 1 bedeutet, dass etwas ganz _sicher_ eintritt.

Es ist zum Beispiel [[unmöglich|sicher]], dass du einem echten Drachen begegnen wirst,
und es ist [[sicher|unmöglich]], dass die Sonne morgen aufgeht. Die
Wahrscheinlichkeit dass ein Münzwurf _Kopf_ ergibt ist genau [[die Hälfte|gleich]].

{.reveal(when="blank-0 blank-1 blank-2")} Die Wahrscheinlichkeit, eine 6 mit einem
Würfel zu würfeln oder eine bestimmte Farbe aus einem Kartenspiel zu wählen, ist
[[kleiner|größer]] als 0,5 - also unwahrscheinlich. Die Wahrscheinlichkeit, dass
eine gute Fussballmannschaft ein Spiel gewinnt oder dass ein Zug pünktlich ankommt,
ist [[größer|kleiner]] als 0,5 - also wahrscheinlich.

    .p-line.clearfix
      img.reveal(src="images/line-1.png" width=140 height=140 style="width: 18.42%" when="blank-0" animation="pop" alt="Drache")
      img.reveal(src="images/line-2.png" width=140 height=140 style="width: 10.53%" when="blank-3" animation="pop" alt="Würfel")
      img.reveal(src="images/line-3.png" width=140 height=140 style="width: 15.79%" when="blank-3" animation="pop" delay="300" alt="Karten")
      img.reveal(src="images/line-4.png" width=140 height=140 style="width: 11.84%" when="blank-2" animation="pop" alt="Münzen")
      img.reveal(src="images/line-5.png" width=140 height=140 style="width: 11.84%" when="blank-4" animation="pop" alt="Fußball")
      img.reveal(src="images/line-6.png" width=140 height=140 style="width: 17.11%" when="blank-4" animation="pop" delay="300" alt="Zug")
      img.reveal(src="images/line-7.png" width=140 height=140 style="width: 14.47%" when="blank-1" animation="pop" alt="Sonne")
      img(src="images/line-8.png" width=760 height=40 style="width: 100%")

---
> id: prob-line-1

Ziehe nun die folgenden Ereignisse in die richtige Reihenfolge, von wahrscheinlich bis unwahrscheinlich:

    x-sortable
      .item.md(data-index="3") Du wirfst einen Würfel :game-die: und er landet auf 6.
      .item.md(data-index="5") Pinguine :penguin: leben am Nordpol.
      .item.md(data-index="1") Im November wird es regnen :cloud-with-rain:.
      .item.md(data-index="0") Heute wird in China ein Baby geboren. :baby-bottle:
      .item.md(data-index="4") Du kaufst einen Lottoschein und gewinnst den Jackpot :party-popper:.
      .item.md(data-index="2") Ein neugeborenes Baby wird ein Mädchen sein :girl:.

Im Alltag sprechen wir oft von Wahrscheinlichkeiten und Chancen, meist ohne
darüber nachzudenken. Wie hoch ist die Wahrscheinlichkeit, dass es morgen regnet? Wie wahrscheinlich ist es, dass ich
den Bus verpasse? Welche Chance habe ich, dieses Spiel zu gewinnen?

---
> id: prob-line-2

Das Werfen einer (fairen) Münze hat zwei mögliche Ergebnisse, _Kopf_ und _Zahl_, die
beide gleich wahrscheinlich sind. Nach der obigen Gleichung muss die Wahrscheinlichkeit dafür,
 dass die Münze auf _Kopf_ landet  `1/2` = 0,5 oder 50% betragen.

Beachte, dass diese Wahrscheinlichkeit _zwischen_ 0 und 1 liegt, auch wenn nur eines der
Ergebnisse tatsächlich eintreten kann. Aber Wahrscheinlichkeiten haben sehr wenig mit den
tatsächlichen Ergebnissen zu tun: Wenn wir eine Münze viele Male werfen, wissen wir, dass
[[ungefähr die Hälfte der|genau die Hälfte der|alle|keine]] Ergebnisse Kopf lauten werden - aber wir
haben keine Möglichkeit, vorherzusagen, _welche Würfe genau_ auf Kopf landen.

Selbst Ereignisse mit verschwindend kleinen Wahrscheinlichkeiten (wie z.B. ein Lottogewinn :party-popper:)
_können dennoch eintreten_ - und sie _treten ein_ - andauernd, aber eben nur für sehr wenige
Teilnehmer.

---
> id: prob-line-3

Die Wahrscheinlichkeiten hängen auch davon ab, wie viel jeder von uns über das Ereignis weiß. Zum
Beispiel könnten wir schätzen, dass die Regenwahrscheinlichkeit heute etwa 70% beträgt, während ein
Meteorologe mit detaillierten Wetterdaten sagen könnte, dass die Regenwahrscheinlichkeit 64,2% beträgt.

Oder nehmen wir an, ich werfe eine Münze und decke sie mit meinen Händen zu - die Wahrscheinlichkeit von
Zahl liegt bei 50%. Jetzt schaue ich mir das Ergebnis an, sage es dir aber nicht. Ich weiß mit Sicherheit,
was eingetreten ist, aber für dich beträgt die Wahrscheinlichkeit [[immer noch 50%|100%|nicht mehr 50%]].

---
> id: prob-line-4

Es gibt viele verschiedene Arten, über Wahrscheinlichkeiten nachzudenken, aber in der Praxis führen sie
oft zu den gleichen Ergebnissen:

::: column(width=230 parent="padded-thin")

    img(src="images/classical.png" width=240 height=75 alt="klassische Wahrscheinlichkeit")

{.text-center} Die __klassische__ Wahrscheinlichkeit von Kopf ist der Anteil
der _möglichen Ergebnisse_, die Kopf sind.
::: column(width=230)

    img(src="images/frequentist.png" width=240 height=75 alt="Häufigkeitswahrscheinlichkeit")

{.text-center} Die __Häufigkeitswahrscheinlichkeit__ ist der Anteil des Ereignisses Kopf, den wir erhalten,
wenn wir die Münze _viele Male_ werfen.
::: column(width=230)

    img(src="images/subjectivist.png" width=240 height=75 alt="subjectivist probability")

{.text-center} Die __subjektivistische__ Wahrscheinlichkeit beruht darauf, wie stark wir
_glauben_, dass die Münze auf Kopf landen wird.
:::

Denke daran, dass Wahrscheinlichkeiten für _Schätzungen und Vorhersagen_ zwar eine großartige Sache sind, wir
aber nie sagen können, was _tatsächlich_ passieren wird.

---

### Zukunftsvorhersagen

> id: future

Wenn wir einen Würfel werfen, ist das Ergebnis eine Zahl zwischen 1 und 6, und alle Ergebnisse sind
gleich wahrscheinlich. Wenn wir zwei Würfel auf einmal werfen und ihre Augenzahlen addieren, erhalten wir
Ergebnisse im Bereich von [[2]] bis [[12]]. In diesem Fall sind sie jedoch nicht alle gleich
wahrscheinlich.

    include mixins
    p.md Manche Ergebnisse können nur auf eine Weise erzielt werden (um #[span.dice.outline 12] zu erhalten muss man #[span.dice #[+dice(6)]] + #[span.dice #[+dice(6)]] würfeln) während andere auf mehrere verschiedene Arten zustande kommen können (um #[span.dice.outline 5] zu erhalten muss man #[span.dice #[+dice(1)]] + #[span.dice #[+dice(4)]] oder #[span.dice #[+dice(2)]] + #[span.dice #[+dice(3)]] würfeln).

---
> id: future-1

Diese Tabelle zeigt alle möglichen Ergebnisse:

    include mixins
    table.dice-table
      tr
        td #[.dice.outline 2]
        td #[.dice.outline 3]
        td #[.dice.outline 4]
        td #[.dice.outline 5]
        td #[.dice.outline 6]
        td #[.dice.outline 7]
        td #[.dice.outline 8]
        td #[.dice.outline 9]
        td #[.dice.outline 10]
        td #[.dice.outline 11]
        td #[.dice.outline 12]
      tr
        td #[.dice #[+dice(1)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(1)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(6)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(6)]]
      tr
        td
        td #[.dice #[+dice(2)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(2)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(5)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(5)]]
        td
      tr
        td(colspan=2)
        td #[.dice #[+dice(3)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(3)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(4)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(4)]]
        td(colspan=2)
      tr
        td(colspan=3)
        td #[.dice #[+dice(4)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(4)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(3)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(3)]]
        td(colspan=3)
      tr
        td(colspan=4)
        td #[.dice #[+dice(5)]] #[.dice #[+dice(1)]]
        td #[.dice #[+dice(5)]] #[.dice #[+dice(2)]]
        td #[.dice #[+dice(6)]] #[.dice #[+dice(2)]]
        td(colspan=4)
      tr
        td(colspan=5)
        td #[.dice #[+dice(6)]] #[.dice #[+dice(1)]]
        td(colspan=5)

Das wahrscheinlichste Ergebnis beim Würfeln mit zwei Würfeln ist _{span.dice.outline}7_. Es
gibt [[6]] Ergebnisse, bei denen die Summe 7 beträgt, und insgesamt [[36]] Ergebnisse,
_{span.reveal(when="blank-0 blank-1")}so dass die Wahrscheinlichkeit, eine 7 zu erhalten,
`6/36 = "0,1666"` beträgt._

---
> id: future-2

Die unwahrscheinlichsten Ergebnisse sind _{span.dice.outline}2_ und _{span.dice.outline}12_,
jeweils mit einer Wahrscheinlichkeit von `1/36 = "0,0277"`.

Es ist unmöglich, das Ergebnis eines einzigen Münzwurfs oder eines einmaligen Würfelns vorherzusagen.
Mit Hilfe der Wahrscheinlichkeit können wir jedoch das Ergebnis _vieler_
 Würfelwürfe sehr genau vorhersagen.

Wenn wir einen Würfel 30 Mal werfen, wissen wir, dass wir etwa `1/6 × 30 = 5`
Sechsen erhalten werden. Wenn wir 300 Mal werfen, werden es etwa `1/6 × 300 = 50`
Sechsen sein. Diese Vorhersagen werden mit jeder Wiederholung immer
genauer.

---
> id: dice-simulation
> goals: roll
> title: Rolling Dice

In dieser Animation kannst du viele "virtuelle" Würfel auf einmal werfen und sehen, wie die
Ergebnisse im Vergleich zu den vorhergesagten Wahrscheinlichkeiten ausfallen:

::: .box.f-red

#### Würfeln

    .probTable.var(:html="probTable(d)")

Wir werfen ${d}{d|2|1,6,1} Würfel auf einmal und notieren die _{span.dice(style="width: auto; padding: 0 4px;")} SUMME_ ihrer Augenzahlen. Die __{.m-green} grünen Linien__ stellen die Wahrscheinlichkeiten jedes möglichen Ergebnisses dar, wie es durch die Wahrscheinlichkeitstheorie vorhergesagt wird, und die __{.m-blue} blauen Balken__ zeigen, wie oft jedes Ergebnis in diesem computergenerierten Experiment aufgetreten ist.

    p.btn-row.no-voice
      button.btn Einmal werfen
      button.btn 100 mal werfen
      button.btn 1000 mal werfen

:::

{.reveal(when="roll")} Beachte, wie die beobachteten
Häufigkeiten mit zunehmende Würfen immer näher an die Häufigkeiten herankommen, die wir mit Hilfe der
Wahrscheinlichkeitstheorie vorhergesagt haben. Dieses Prinzip gilt für alle Wahrscheinlichkeitsexperimente und wird das __Gesetz der großen Zahlen__ genannt.

{.reveal(when="roll")} Wenn wir die Anzahl der auf
einmal gewürfelten Würfel erhöhen, kannst du auch sehen, dass sich die Wahrscheinlichkeiten von einer geraden Linie (ein
Würfel) zu einem Dreieck (zwei Würfel) und dann zu einer "glockenförmigen" Kurve ändern. Dies ist
als __Zentraler Grenzwertsatz__ bekannt, und die glockenförmige Kurve wird als
__Normalverteilung__ bezeichnet.

---

## Probability Trees

> section: trees
> sectionStatus: dev

{.fixme} In real life, coins never have exactly a probability of 0.5. It might be 0.4932
or 0.500012, depending on their exact shape or physical properties. In
mathematics we don’t have to worry about these tiny inaccuracies: we can simply
assume that our “mathematical model” of a coin has exactly a 0.5 probability of
landing heads and is truly random. With this simplification, we can start
answering much more interesting questions.
Now let’s try a more difficult game: there is a bag that contains five
red and three blue marbles. When picking two marbles at random, what is
the probability that both of them are red?
We already know how to calculate the probability that the first marble is
red: it is 5/8 = 0.625.
However, once we have picked the first marble, the probabilities change:
now there are only 7 marbles left, and only four of them are red.
Therefore the probability that the second marble is red is 4/7 = 0.571.
To calculate the probability that #[em both] marbles are red, we simply
have to multiply these probabilities: the final answer is 0.625 × 0.571 = 0.357.
There are four possible outcomes in total: red-red, red-blue, blue-red
and blue-blue. We can represent all these possibilities in a single diagram:
slideshow
Now we can simply read off the probability of the different outcomes. The
probability that both marbles are blue is xxx, and the probability that
you get two marbles with different colours are xxx + xxx = xxx.
Probability trees can be used to solve many problems that consist of
multiple steps that happen one after the other.

---

## Venn-Diagramme

> section: venn-diagrams
> sectionStatus: dev

{.fixme} Entgegengesetzte Wahrscheinlichkeiten addieren sich immer zu 1. This means that you can
calculate the opposite of a probability by subtracting it from 1.
Venn Diagrams and set operations
Independent and Mutually Exclusive Events
There are 200 kids in a school. 140 students are taking Mathematics, and
100 students are taking Biology. 80 students are studying both Maths and Biology.
The corresponding Venn Diagram corresponds to two overlapping circles for
Maths and Biology. We can write 80 in their interx-step.
There are 140 - 80 = 60 students studying just Mathematics, so we write
than in the remaining part of the Maths circle.  There are 100 - 80 = 20
students studying just Biology so we write that in the remaining part of
the Biology circle.
How many students at the school study neither Mathematics nor Biology?

---

## Conditional Probability

> section: conditional
> sectionStatus: dev

TODO

---

## Das Ziegenproblem

> id: monty-hall
> sectionBackground: dark gameshow
> goals: game
> section: monty-hall

Willkommen bei der spektakulärsten Spielshow der Welt! Sie haben jetzt die
einmalige Chance, einen fantastischen Sportwagen zu gewinnen, der sich
hinter einer dieser drei Türen verbirgt. Leider befinden sich hinter den
beiden anderen Türen nur Ziegen. Wählen Sie jetzt eine aus, um Ihre Wahl zu treffen!

    .monty-hall.selectable
      .door-box: .door
      .door-box: .door
      .door-box: .door
      .floor

{.monty-reveal} Sind Sie sich sicher? Sie können Ihre Meinung noch ändern und
eine andere Tür wählen..

    p.text-center.monty-reveal: button.btn.sure Ich bin mir sicher!

{.monty-reveal} Eine großartige Wahl, aber lassen Sie mich Ihnen das Leben ein wenig leichter machen.
Ich öffne eine der anderen Türen mit einer Ziege, so dass Ihnen nur noch zwei Türen
zur Auswahl stehen. Wollen Sie bei Ihrer Wahl bleiben, oder wollen
Sie tauschen?

    p.text-center.monty-reveal
      button.btn.swap Ich bleibe dabei!
      button.btn.swap Ich möchte tauschen!

{.monty-reveal} Ok – dann schauen wir mal, wie Sie abgeschnitten haben…

    p.text-center.monty-reveal: button.btn.show Öffne die Türen…

{.monty-reveal} _{span.monty-option}Sieht aus, als hätten Sie die richtige Wahl getroffen.
Herzlichen Glückwunsch, Sie haben gerade einen schönen neuen Sportwagen gewonnen!_
_{span.monty-option.hidden} Oje - es scheint, als hätten Sie dieses Mal nur eine
Ziege gewonnen. Aber keine Sorge, Sie können noch einmal spielen!_

    p.text-center.monty-reveal: button.btn.reset Spiel wiederholen

---
> id: monty-hall-1

Wenn du dieses Spiel viele Male spielst, wirst du feststellen, dass du eher gewinnst,
wenn du [[tauschst|nicht tauschst]], nachdem die erste Tür geöffnet wurde,
_{.reveal(when="blank-0")}anstatt bei deiner ursprünglichen Wahl zu bleiben._

{.reveal(when="blank-0")} Aber wie kann das sein - das Auto befindet sich doch mit gleicher Wahrscheinlichkeit
hinter jeder der beiden verbleibenden Türen?

---
> id: monty-hall-2

Die Erklärung ist sehr raffiniert. Wenn du die erste Tür wählst, beträgt die Wahrscheinlichkeit
, richtig zu liegen, `1/3` und die Wahrscheinlichkeit, falsch zu liegen, `2/3`.

    p.text-center: include svg/monty-1.svg

---
> id: monty-hall-3

Nachdem der Spielleiter eine der anderen Türen geöffnet hat, liegt die Wahrscheinlichkeit, dass du dich
irrst, immer _noch bei_ `2/3`, nur dass sich diese Wahrscheinlichkeit jetzt auf nur eine Tür bezieht.
Das bedeutet, dass das Vertauschen von Türen deine Gewinnchancen [[verdoppelt|verdreifacht|halbiert]].

    p.text-center: include svg/monty-2.svg

---
> id: monty-hall-4

Auch wenn dies nicht sehr intuitiv erscheint, können wir beweisen, dass es richtig ist -
einfach indem wir alle verschiedenen Möglichkeiten auflisten:

    figure: img(src="images/monty.png" width=694 height=468)

Bei den 9 Möglichkeiten ist es in [[6]] Fällen nötig, die Türen zu wechseln, um zu gewinnen. Daraus ergibt sich eine
Chance von `6/9 = 2/3` wie vorher.

---

## Das Geburtstagsproblem

> section: birthdays
> sectionStatus: dev

TODO

---

## Echte Zufälligkeit

> id: quantum
> section: randomness

::: column.grow
Der größte Teil dieses Kurses stützte sich auf die Tatsache, dass Dinge wie Münzen, Würfel oder
Roulette-Räder völlig zufällig sind. Das ist jedoch nicht wirklich wahr - wir haben
bereits erfahren, dass Edward Thorpe es geschafft hat, den Ausgang beim Roulette vorherzusagen.

Nehmen wir an, wir werfen eine Münze: Die Chance, dass sie auf Kopf landet, beträgt 0,5. Wenn wir wüssten, in welche
Richtung die Münze zeigt, kurz bevor sie die Hand verlässt, könnten wir vielleicht eine
etwas bessere Vorhersage machen, z.B. 0,58 oder 0,41. Wenn wir auch das Gewicht und die
Größe der Münze sowie den Winkel, die Position und die Geschwindigkeit kennen würden, mit der sie die Hand verlässt,
könnten wir die physikalischen Gesetze - Schwerkraft, Reibung und Luftwiderstand - nutzen, um die Bewegung der Münze zu modellieren
und das Ergebnis vorherzusagen. Wenn wir schließlich die genaue
Position jedes Atoms in der Münze und aller sie umgebenden Luftmoleküle kennen würden,
könnten wir eine Computersimulation erstellen, um genau vorherzusagen, was passieren wird.
::: column(width=240)

    x-img(src="images/coins.jpg" alt="Werfen einer Münze" width=240 height=343)

:::

---
> id: quantum1

Man könnte argumentieren, dass das Werfen einer Münze in Wirklichkeit überhaupt nicht zufällig ist - sondern
_chaotisch_. Das bedeutet, dass die zugrundeliegenden physikalischen Prinzipien so komplex
sind, dass selbst winzige Änderungen der Ausgangsbedingungen (Geschwindigkeit, Winkel) einen
dramatischen Einfluss auf das Endergebnis haben können. Wir verwenden Münzen beim Spielen und in Glücksspielen nicht
deshalb, weil sie zufällig sind, sondern weil es so unglaublich schwierig (und aus
praktischen Gründen unmöglich) ist, das Ergebnis vorherzusagen.

Dasselbe Prinzip gilt für viele andere "zufällige" Ereignisse im Leben, einschließlich Würfel
und Roulette-Räder. Sie sind nicht wirklich _zufällig_, wir haben einfach nicht die
Mittel, um die mathematischen Berechnungen genau genug durchzuführen, um das
Ergebnis vorherzusagen.

---
> id: radioactive
> goals: decay

Aber _echte Zufälligkeit_ existiert - und zwar tief im Innern der Materie. Ein Block
radioaktiven Materials besteht aus Milliarden von Atomen, die mit der Zeit zerfallen:
Sie zerfallen in kleinere Atome und geben dabei gefährliche Strahlung ab.

::: column.grow

Physiker können die Wahrscheinlichkeit berechnen, dass ein bestimmtes Atom in einer
bestimmten Zeitspanne zerfällt, aber es ist unmöglich, herauszufinden, _welches_ als
nächstes zerfällt - selbst wenn man die genauen Eigenschaften jedes Atoms kennt.

Die Gesamtzerfallsrate ist dagegen so stabil, dass sie zur Berechnung des Alters von Fossilien, die vor Tausenden von Jahren auf der Erde starben, herangezogen
werden kann. Dieser
Prozess wird __Kohlenstoffdatierung__ genannt.

::: column(width=300)

    p: svg.radioactive(width=300 height=200 viewBox="0 0 300 200")
    p.text-center.btn-row.no-voice: button.btn Zerfall starten

:::

---
> id: radioactive-1

Der [radioaktive Zerfall](gloss:radioactive) von Atomen wird durch Kräfte verursacht, die inherhalb von Atomen auf
kleinstem Raum wirken, und die mit Hilfe der [Quantenmechanik
](gloss:quantum) erklärt werden können. Im letzten Jahrhundert entdeckten Physiker wie [Max
Planck](bio:planck) und [Paul Dirac](bio:dirac), dass
Elementarteilchen eine verblüffende Eigenschaft haben: Sie können sich an mehreren verschiedenen Orten
_gleichzeitig_ befinden. Sie haben keine feste Position, sondern eine Wahrscheinlichkeitsverteilung
(auch _Wellenfunktion_ genannt), die uns sagt, wie wahrscheinlich es ist, dass
wir sie an einer bestimmten Position finden werden.

Diese unglaubliche Eigenschaft wird von Quantencomputern genutzt. Herkömmliche Computer
können zu jedem Zeitpunkt immer nur eine Berechnung durchführen. Quantencomputer können die
Eigenschaften von subatomaren Teilchen nutzen, um viele Berechnungen gleichzeitig durchzuführen - und
das macht sie erheblich schneller.

    figure: x-img(lightbox src="images/quantum.jpg" alt="Quantum Mechanics" width=760 height=390)

---
> id: radioactive-2

Wir können die Quantenmechanik nicht wirklich _verstehen_ oder _erklären_ - wir
müssen einfach akzeptieren, dass sie das ist, was von der mathematischen Theorie
vorhergesagt und durch physikalische Beobachtungen bestätigt wird. Die merkwürdigen
Quanteneffekte sind bisher nur in winzigen Bereichen einiger weniger Atome beobachtet
worden, und es ist nicht klar, wie sie uns im Alltag beeinflussen. Aber dabei handelt
es sich um den einzigen bekannten Effekt in der Natur, der _echte Zufälligkeit_ erzeugt.
