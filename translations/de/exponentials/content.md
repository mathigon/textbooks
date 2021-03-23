# Exponentialfunktionen

## Kohlenstoff-Datierung

> section: carbon-dating
> id: egypt
> color: "#EF551E"
> level: Intermediate
> next: probability

::: column.grow

Eine Gruppe von Archäologen hat in der ägyptischen Wüste ein neues Grab entdeckt.
Vorsichtig öffnen sie den verborgenen Eingang, klettern durch mehrere mit
antiken Schätzen gefüllte Räume, bis sie in der Grabkammer ankommen. Der Sarkophag
ist immer noch versiegelt und enthält die Mumie eines Pharaos.

Nachdem sie alle Gegenstände in der Gruft katalogisiert und sorgfältig in ein
nahe gelegenes Museum gebracht haben, versuchen sie, ihrer drängendsten Frage auf den Grund zu gehen: Wer ist dieser
Pharao, und wann ist er gestorben?

::: column(width=300)

    x-img(src="images/egypt.jpg" alt="Ägyptisches Grab" lightbox width=300 height=312)

:::

Leider scheint keine der Zeichnungen und Inschriften an den Wänden des Grabes
Namen oder Zeitangaben zu enthalten. Es gibt jedoch eine geniale Methode zur
genauen Bestimmung des Alters von antiken Artefakten wie Mumien oder Fossilien,
die sich ausschließlich auf Physik und Mathematik stützt: die __Kohlenstoffdatierung__.
[Weiter](btn:next)

---
> id: carbon-1

    figure: x-img(src="images/sarcophagus.jpg" alt="Egyptian Sarcophagus" width=600 height=180)

Alle lebenden Organismen auf der Erde - Pflanzen, Tiere und
Menschen - enthalten [Kohlenstoffatome](gloss:atom). Normalerweise besteht der Kern eines Kohlenstoffatoms aus sechs
[Protonen](gloss:proton) und sechs [Neutronen](gloss:neutron), aber ein kleiner
Teil der Kohlenstoffatome enthält zusätzliche Neutronen. Diese verschiedenen
"Varianten" des Kohlenstoffs werden __Isotope__ genannt:

::: column(width=170)

    x-atom(protons=6 neutrons=6 size=150)

{.text-center} __Kohlenstoff-12__
6 Protonen, 6 Neutronen
98,8%

::: column(width=170)

    x-atom(protons=6 neutrons=7 size=150)

{.text-center} __Kohlenstoff-13__
6 Protonen, 7 Neutronen
1,1%

::: column(width=170)

    x-atom(protons=6 neutrons=8 size=150)

{.text-center} __Kohlenstoff-14__
6 Protonen, 8 Neutronen
0,1%

:::

[Weiter](btn:next)

---
> id: carbon-2

Der Anteil, in dem diese Isotope vorkommen, ist fast
überall auf der Erde nahezu gleich - und das wird später sehr wichtig sein. In unserem Beispiel sind wir
besonders an Kohlenstoff-14 interessiert, das mit <sup>14</sup>C abgekürzt wird.
Er enthält 6 Protonen und 8 Neutronen und entsteht, wenn kosmische Strahlung aus
dem Weltall auf Teilchen trifft, die sich hoch in unserer Atmosphäre befinden.

Jede Probe von Kohlenstoffatomen besteht zu [[0.1]]% aus diesen speziellen <sup>14</sup>C-Atomen. Man könnte
meinen, das wäre eine unbedeutende Menge, aber dein Körper enthält etwa `8 × 10^26` Kohlenstoffatome,
was bedeutet, dass auch etwa `8 × 10^23` Kohlenstoff-14 Atome dabei sind. Das sind fast eine Million Millionen
Millionen Millionen Atome!

---
> id: radioactive-1
> goals: decay

::: column(width=300)

    .decay-box
      x-atom(protons=6 neutrons=8 size=68 style="cursor: pointer;")
      x-atom(hidden protons=7 neutrons=7 size=68 style="left: 100px")
      x-atom(hidden protons=1 color="fd8c00" size=68 style="left: 178px")
      x-atom(hidden protons=1 color="22ab24" size=68 style="left: 244px")
      .label #[strong Kohlenstoff-14]#[br]6 Protonen#[br]8 Neutronen
      .label(hidden style="left: 100px") #[strong Stickstoff]#[br]7 Protonen#[br]7 Neutronen
      .label(hidden style="left: 178px"): strong Antineutrino
      .label(hidden style="left: 244px"): strong Elektron
      .operator(hidden style="left: 76px") →
      .operator(hidden style="left: 176px") +
      .operator(hidden style="left: 240px") +
    x-gesture(target=".decay-box x-atom")

{.caption}

::: column.grow

Kohlenstoff-14 ist nützlich, weil er [__radioaktiv__](gloss:radioactive) ist. Das
Atom ist instabil, und es könnte in andere, stabilere Elemente __zerfallen__. Wir
sind tatsächlich von vielen radioaktiven Stoffen umgeben, aber ihre Konzentration
ist nicht hoch genug, um gefährlich zu sein.

:::

---
> id: radioactive-2

::: column.grow

Während unseres Lebens, wenn wir essen und atmen, absorbiert unser Körper <sup>14</sup>C Atome.
Wenn wir sterben, hören wir auf, neue <sup>14</sup>C-Atome zu absorbieren, und diejenigen, die sich
bereits in unserem Körper befinden, beginnen [[zu zerfallen|sich zu vervielfältigen|zu verschwinden]].

{.reveal(when="blank-0")} Alle radioaktiven Elemente zerfallen mit einer sehr vorhersagbaren
Geschwindigkeit - diese wird durch ihre __Halbwertszeit__ bestimmt. Kohlenstoff-14 zum Beispiel hat eine
Halbwertszeit von etwa 6.000 Jahren. Das bedeutet, dass es bei einem Brocken aus <sup>14</sup>C-Atomen
6.000 Jahre dauert, bis die Hälfte davon zerfällt. Nach
weiteren 6.000 Jahren wird die Hälfte der verbleibenden Atome ebenfalls zerfallen sein, so
dass nur noch [[ein Viertel|ein Drittel|1/8|nichts]] der ursprünglichen Menge übrig bleibt.

::: column(width=220)

    x-img(src="images/atom.jpg" alt="Atom" width=220 height=310)

:::

---
> id: radioactive-table-1

Nehmen wir an, wir beginnen mit einem Brocken aus 1.200 Kohlenstoff-14 Atomen. Mit Hilfe der Halbwertszeit können
wir die verbleibende Menge von <sup>14</sup>C-Atomen über die Zeit berechnen:

::: .overflow-wrap

|            | _{div.col}_ | _{div.col.c1}_ | _{div.col.c2}_ | _{div.col.c3}_ | _{div.col.c4}_ |
| __Jahre__  | 0           | 6000           | 12 000         | 18 000         | 24 000         |
| __Menge__  | 1200        | [[600]]        | [[300]]        | [[150]]        | [[75]]         |
{.grid.col-grid}

:::

---
> id: radioactive-table-2

Wie du sehen kannst, multiplizieren wir bei jedem Schritt mit `§1/2`, genau wie bei einer
[[geometrischen|arithmetischen|Fibonacci]]-Folge.

---
> id: radioactive-equation

Mit Hilfe von Exponenten können wir eine Gleichung für die nach `t` Jahren verbleibende Menge aufstellen:

{.text-center} `§"Menge" = 1200 × (1/2)^(t/6000)`

[Weiter](btn:next)

---
> id: radioactive-equation-1

Natürlich waren 1200 und 6000 nur willkürlich gewählte Zahlen. Eine allgemeinere Gleichung
lautet:

::: x-algebra-flow

`"Menge" = "Anfangsmenge" × (1/2)^(t/"Halbwertszeit")`

* Mit Hilfe der Rechenregeln für Exponenten können wir den Bruch `1/2` in eine 2 umkehren,
  wenn wir den Exponenten mit `-1`   multiplizieren.
* {.new-row} Diese Gleichung beschreibt, wie viele Atome nach _t_
  Jahren übrig sind.

:::

---
> id: radioactive-chart

Da die Gleichung einen _Exponenten_ enthält und die Anzahl der Atome _abnimmt_,
nennen wir diesen Prozess __exponentiellen Zerfall__.

Wir können die Menge von <sup>14</sup>C Atomen über die Zeit in einem Koordinatensystem darstellen.
Wenn wir mit einer Anfangsmenge von ${format(x0)}{x0|3000|100,4000,100} Atomen beginnen
und die Halbwertszeit ${format(hl)}{hl|5000|200,10000,200} Jahre beträgt, sieht der Zerfall
so aus:

    x-coordinate-system(width=600 height=400 x-axis="0,18000" y-axis="0,4000" axis-names="Jahre,C-14 Atome" padding="20 20 20 40")

---
> id: radioactive-chart-2

Die Punkte auf dem Diagramm zeigen, wann sich die Anzahl der Atome halbiert hat. Beachte, dass
wir die verbleibende Anzahl von Atomen zu _jedem beliebigen Zeitpunkt_ berechnen können, nicht nur
für diese spezifische Intervalle. Das ist der Hauptunterschied im Vergleich zu geometrischen
Folgen.

Der Zerfall radioaktiver Atome ist zufällig, und es ist unmöglich,
vorherzusagen, _wann genau_ ein bestimmtes <sup>14</sup>C zerfallen wird. Die Grafik zeigt
die _durchschnittliche_ Anzahl von Atomen, die wir zu einem bestimmten Zeitpunkt _voraussichtlich_ noch übrig haben. Das ist
auch der Grund dafür, dass die verbleibende Anzahl von Atomen nicht immer eine ganze Zahl ist - auch
wenn man nicht "ein halbes Atom" haben kann. Mehr dazu erfährst du in unserem
[Kurs über Wahrscheinlichkeit](/course/probability/randomness).
[Weiter](btn:next)

---
> id: spectrometer

::: column.grow

Jetzt verfügen wir über alle Informationen, die wir benötigen, um das Alter des Pharaos zu bestimmen. Die
Archäologen beschlossen, eine winzige Probe aus der Haut der Mumie herauszuschneiden. Mit Hilfe einer
aufwendigen Apparatur, einem so genannten __Massenspektrometer__, konnten sie die
Anzahl der <sup>12</sup>C und <sup>14</sup>C Atome in der Probe "zählen".

In unserem Beispiel fanden sie 800 Kohlenstoff-14-Atome. Unter Berücksichtigung des Verhältnisses von <sup>12</sup>C
zu <sup>14</sup>C Atomen, schätzten sie, dass dieselbe Probe 1200 <sup>14</sup>C Atome hätte
enthalten müssen, als der Pharao noch lebte.

::: column(width=320)

    x-img(src="images/spectrometer.jpg" alt="Beschleuniger-Massenspektrometer" lightbox width=320 height=280)

{.caption} Beschleuniger-Massenspektrometer in der  Radiokohlenstoff-Beschleuniger-Einheit von Oxford

:::

Jetzt müssen wir nur noch berechnen, wie lange es dauert, bis diese 400 fehlenden <sup>14</sup>C-Atome
zerfallen. Diese Zahl ist genau [[die Zeit, seit dem
Tod des Pharaos|das Alter des Pharaos, als er starb]].

---
> id: carbon-solver

Wir können die oben gefundene Gleichung verwenden und die erforderlichen Parameter einfügen:

::: x-algebra-flow

`input(1200,"Anfangsmenge") × 2^((-t)/input(6000,"Halbwertszeit")) = input(800,"Menge")`

* Trage die drei Parameter von oben ein!
* Lass uns damit beginnen, beide Seiten der Gleichung durch 1200 zu teilen.
* {.new-row} Wir berechnen den Dezimalwert des Bruchteils auf der
 rechten Seite der Gleichung.
* Nun müssen wir uns mit dem Exponenten auf der linken Seite befassen. Dazu
  können wir eine spezielle Funktion namens __Logarithmus__ verwenden,
  über die du später mehr erfahren wirst.
* {.new-row} Mit einem Taschenrechner können wir den Wert von `log_2(0.667)` ermitteln.
* {.new-row} Der Rest sollte einfach sein: Multiplizieren wir beide Seiten der
  Gleichung mit 6000.
* {.new-row} Wir können die rechte Seite der Gleichung vereinfachen.
* Wir können auch das - Zeichen auf beiden Seiten der Gleichung entfernen.
* Wir sehen also, dass es 3510 Jahre dauert, bis die erforderliche Anzahl
  von <sup>14</sup>C-Atomen zerfällt.

:::

---
> id: carbon-end-1

::: column(width=280)

    x-img(src="images/mummy.jpg" alt="Ägyptische Mumie" lightbox width=280 height=170)

::: column.grow

Das bedeutet, dass der Pharao vor etwa 3510 Jahren oder
[[1490 ± 10]] v. Chr. gestorben ist. Dieser Zeitraum war der Beginn des _Neuen Reichs_ in der
ägyptischen Geschichte: ein "goldenes Zeitalter", das den Höhepunkt der Macht Ägyptens markierte. Und alles, was
wir brauchten, war ein winziges Stück Hautgewebe, zusammen mit cleverer Mathematik!

:::

---
> id: carbon-end-2

Geologen und Biologen können die gleiche Methode verwenden, um das Alter von
Fossilien zu bestimmen. Das hilft ihnen zu verstehen, wann bestimmte Gesteinsschichten in unserer
Erdkruste entstanden sind, oder wie die evolutionäre Abstammungslinie zwischen ausgestorbenen Tieren verläuft.

Die Kohlenstoffdatierung wurde in den späten 1940er Jahren an der Universität von Chicago von
Willard Libby entwickelt, der 1960 den Nobelpreis für Chemie für seine Arbeit erhielt.
Sie ist zu einer unverzichtbaren Methode in vielen Bereichen der Wissenschaft geworden.

    figure: x-img(src="images/dinosaur.jpg" alt="Fossil" width=760, height=360)

Beachte, dass wir den Prozess der Kohlenstoffdatierung in diesem
Kapitel stark vereinfacht haben. Es gibt noch viele andere Dinge zu berücksichtigen, wie z.B. die Verschmutzung von Proben
oder wie sich die Konzentration von Kohlenstoff-14 in unserer Atmosphäre im Laufe der Zeit verändert hat.

---

## Exponentielles Wachstum und Zerfall

> section: growth-decay
> sectionStatus: dev

    img.text-wrap(src="images/fossil.jpg" style="shape-outside: url(images/fossil.png)" width=320 height=295)

Im vorigen Abschnitt haben wir uns mit dem __exponentiellen Zerfall__ radioaktiver
Materialien befasst und wie er Wissenschaftlern helfen kann, das Alter von Fossilien und
Mumien mit Hilfe der Kohlenstoffdatierung zu bestimmen. Aber es gibt auch einige Dinge, die sich
genau umgekehrt verhalten: Sie _wachsen_ exponentiell.

{.todo} TODO

---

## Comparing Models

> section: comparing-models
> sectionStatus: dev

Der radioaktive Zerfall folgt einer _konstanten Rate_: während gleicher Zeitintervalle
ändert sich die Anzahl der Atome um einen __gleichbleibenden Anteil__{.red} (z.B. 50%).
Daraus ergibt sich ein __exponentielles Modell__{.red}, entweder exponentielles Wachstum
oder exponentieller Zerfall.

Exponentielle Modelle unterscheiden sich stark von __linearen Modellen__{.blue}, bei denen
sich der Wert in gleichen Zeitintervallen um einen __gleichbleibenden Wert__{.blue} ändert.

diagram {.todo}

Hier sind einige Beispiele für Prozesse in der Natur oder im Alltag. Versuche dich zu
entscheiden, welche exponentiell oder linear sind. (Beachte, dass einige Modelle zunehmen
und andere abnehmen)

{.todo} Zellteilung

{.todo} Zinsen

{.todo} Geschwindigkeit von Computern, Moore'sches Gesetz

---

## Zinseszins

> section: compound-interest
> sectionStatus: dev

TODO

---

## Population Dynamics

> section: population-dynamics
> sectionStatus: dev

TODO
