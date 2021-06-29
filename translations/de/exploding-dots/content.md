# Explodierende Punkte

## Stufen zur Unendlichkeit

> section: infinity
> id: race
> color: "#6D3BBF"

Im antiken Griechenland war Achilles einer der größten Helden und (fast) unverwundbar.
Eines Tages wurde er zu einem Rennen herausgefordert … von einer Schildkröte!

::: x-slideshow

    .race(slot="stage")
      svg(width=760 height=140 viewBox="0 0 760 140")
        line(x1=40 y1=113 x2=761 y2=113)
        line(x1=40 y1=113 x2=40 y2=121)
        text(x=40 y=135) 0
        line(x1=451 y1=113 x2=451 y2=121)
        text(x=451 y=135) 100
        g
          line(x1=616 y1=113 x2=616 y2=121)
          text(x=616 y=135) 110
        g
          line(x1=683 y1=113 x2=683 y2=121)
          text(x=683 y=135) 111
        g: line(x1=709 y1=113 x2=709 y2=121)
        g: line(x1=720 y1=113 x2=720 y2=121)
      img(src="images/achilles.png" width=80 height=110 style="left: 0%; z-index: 1;")
      img(src="images/tortoise.png" width=80 height=50 style="left: 54%; margin-top: 8%;")

{div(slot="legend")} Achilles wusste, dass er _zehnmal_ so schnell laufen konnte
wie die Schildkröte. Da er sehr siegessicher war, beschloss er, ihr einen Vorsprung
von 100m zu geben.

{div(slot="legend")} Und das Rennen begann. In der Zeit, die Achilles brauchte, um
die 100m-Marke zu erreichen, bewegte sich die Schildkröte um [[10]]m weiter:
_{span.reveal(when="blank-0")} sie war also jetzt bei 110m._

{div(slot="legend")} Als Achilles bei 110m ankam, hatte sich die Schildkröte um
[[1]] Meter weiter bewegt: _{span.reveal(when="blank-1")}sie war jetzt bei 111m._

{div(slot="legend")} Als Achilles die 111m-Marke erreichte, hatte sich die Schildkröte
aber um 10cm fortbewegt.

{div(slot="legend")} Mit jedem Schritt nähert sich Achilles der Schildkröte. Aber da
die Schildkröte sich immer weiter bewegt, erreicht er sie nie ganz. Und da er sie nicht
überholen kann, gewinnt dann am Ende die Schildkröte das Rennen!

:::

---

    figure: x-img(src="images/mind-blown.gif" alt="Mind Blown GIF" width=300 height=200)

Offensichtlich muss in unserer Argumentation etwas schief gelaufen sein. Wir _wissen_
natürlich, dass Achilles irgendwann die Schildkröte überholen wird. Aber, wenn man dieser
Erzählung folgt ist es gar nicht einfach einen Punkt zu entdecken, an dem man sagen kann,
dass da etwas nicht stimmt und alles ein Blödsinn ist.

Es stellt sich heraus, dass es in der Mathematik sehr gefährlich sein kann, "und so weiter,
bis in alle Ewigkeit" zu sagen. Wenn es um etwas Unendliches geht, verhalten sich die Dinge
meist ganz anders als es unser Gefühl vermuten lässt. In diesem Kurs wollen wir den Begriff
der Unendlichkeit von unterschiedlichen Blickwinkeln aus betrachten.

---

### Unser Zahlensystem

::: column.grow

Unsere Zahlenschreibweise ist unglaublich mächtig und hat es uns ermöglicht, erstaunliche
Entdeckungen in Mathematik, Naturwissenschaften und Technik zu machen. In Europa verwendeten
die Mathematiker zuerst das [römische Zahlensystem](gloss:roman-numerals) (Zahlen wie I, V,
X, …), bevor die [arabischen Zahlen](gloss:arabic-numerals) im 15. Jahrhundert eingeführt
wurden.

{.r} Es gibt eine wichtige Eigenschaft von Zahlen, die wir natürlich als selbstverständlich
ansehen: Alle Zahlen sind __einzigartig__. Mit anderen Worten, es gibt keine zwei verschiedenen
Zahlen, die gleich sind. 5 und 8 sind verschieden, genauso wie 100 von 101 verschieden sind,
und so weiter. _{button.next-step} Weiter_

::: column(width=300)

    x-img(src="images/clock.jpg" alt="Uhr" width=300 height=300)

{.caption} Auf einer Uhr gibt es eigentlich keinen Unterschied zwischen der Zahl 12 (XII) und
der Zahl 0.

:::

---
> id: choice
> goals: choice

Nun - fast. Wie für jede Regel könnte es auch für diese einige Ausnahmen geben. Hier ist zum
Beispiel eine uralte Frage, die von Schülern auf der ganzen Welt gestellt wird:

::: blockquote
Ist 0,999999… gleich 1?
:::

Das "…" bedeutet, dass _unendlich viele_ 9er rechts vom Dezimalpunkt stehen. Wenn die Antwort
auf diese Frage _ja_ lautet, würde das bedeuten, dass es zwei völlig verschiedene Zahlen gibt,
die eigentlich gleich sind. Was denkst du?

    p: .btn-row.text-center
      button.btn.btn-green Sie sind gleich
      button.btn.btn-blue Sie sind verschieden

---

Wir werden das später in diesem Kurs beantworten - aber man könnte auch auf den Gedanken
kommen, dass die ganze Frage etwas dubios klingt. Es gibt keine Möglichkeit, wie wir unendlich
viele 9er _wirklich_ aufschreiben könnten - es würde unendlich lange dauern. Wir müssen
schummeln, indem wir drei Punkte machen und es unserer Vorstellungskraft überlassen, wie es
weiter geht. Die Frage sollte also eigentlich so lauten:

::: blockquote(style="max-width: 480px; margin: 1.5em auto")
Wenn wir irgendwie gottgleich wären und eine unendliche Zeichenfolge von 9ern schreiben könnten,
würde das Ergebnis dann gleich 1 sein?
:::

Da wir Menschen nicht gottgleich sind, könntest du der Ansicht sein, dass die Frage bedeutungslos
ist. Aber was sollten wir mit dieser Antwort anfangen. Sie hilft uns nicht weiter - und jede neue
Entdeckung beginnt bekanntlich mit der Frage _"was wäre, wenn …"_

_{button.next-step} Weiter_

---
> id: numberline
> goals: n2 n3 n4

Als Menschen können wir immer nur eine endliche Anzahl von 9ern schreiben, wie zum Beispiel ${n}{n|1|1,15,1}:

    figure: svg(width=680 height=110 viewBox="0 0 680 110")
      line(x1="20" y1="79.5" x2="660" y2="79.5" stroke="#000" stroke-linecap="round" stroke-width="2")
      line(x1="20" y1="88" x2="20" y2="80" stroke="#000" stroke-linecap="round" stroke-width="2")
      line(x1="660" y1="88" x2="660" y2="80" stroke="#000" stroke-linecap="round" stroke-width="2")
      text(transform="translate(16.01 106.62)" font-size="18") 0
      text(transform="translate(656.01 106.62)" font-size="18") 1
      g(fill="#fd8c00")
        text(transform="translate(522.54 38.62)" font-size="16") 0.9
        line(x1="532" y1="68.53" x2="532" y2="43" stroke="#fd8c00" stroke-linecap="round" stroke-width="2")
        polygon(points="532 77 536.88 65.06 532 67.89 527.12 65.06 532 77")
      g.reveal(when="n2" fill="#22ab24")
        text(transform="translate(620.57 38.62)" font-size="16") 0.99
        line(x1="634" y1="68.53" x2="634" y2="43" stroke="#22ab24" stroke-linecap="round" stroke-width="2")
        polygon(points="634 77 638.88 65.06 634 67.89 629.12 65.06 634 77")
      g.reveal(when="n3" fill="#0f82f2")
        text(transform="translate(637.59 14.62)" font-size="16") 0.999
        line(x1="655" y1="68.53" x2="655" y2="19" stroke="#0f82f2" stroke-linecap="round" stroke-width="2")
        polygon(points="655 77 659.88 65.06 655 67.89 650.12 65.06 655 77")
    x-gesture(target="x-var" slide="100,0")

{.convergence.no-voice} **{.m-yellow}0.9** ist weniger als 1.
_{span.reveal(when="n2")} **{.m-green}0.99** ist weniger als 1._
_{span.reveal(when="n3")} **{.m-blue}0.999** ist weniger als 1._
_{span.reveal(when="n4")} **{.m-red}0.9999** ist weniger als 1._
_{span.hidden} **${nines(n)}** ist weniger als 1._

---

Jede dieser Näherungen ist [[kleiner als|größer als|gleich]] 1. Sie bilden eine
[Zahlenfolge](gloss:sequence), die auf der Zahlengeraden stetig nach rechts wandert
und sich immer mehr der 1 nähert (ohne sie aber je ganz zu erreichen).

---
> id: convergence

Beachte, dass die Zahlenfolge irgendwann so viel Platz einnimmt, wie du links
von 1 hast. Wenn du zum Beispiel eine Näherung erreichen willst, die innerhalb
von 1/${pow(x)}{x|7|1,20,1} bei 1 liegt, würde schon ${nines(x)} genügen.

---

Anders ausgedrückt, der Abstand zwischen 0,999999… und 1 wäre unendlich klein und
nicht vorhanden. Da diese Zahl jedenfalls auch niemals _größer_ als 1 ist, können
wir daraus ableiten, dass 0,999999… eigentlich _gleich_ 1 sein muss.

---
> id: dots
> goals: d1 d2 d3 d4 x1 x2 x3 x4

### Eine Punkt-Maschinen-Erklärung

Falls du mit dieser Erklärung nicht zufrieden bist, schauen wir uns doch einmal an,
wie 0,9999… in einer [`1←10`-Maschine](gloss:dot-machine) dargestellt werden würde:

    x-dot-machine(cells="0.9999…")
    p.text-center.reveal(when="d1"): button.btn.btn-small.btn-red Explodieren

Klicke irgendwo in das [erste Dezimalfeld](->#dots_.dot-decimal+.dot-cell), um ein
[Punkt und Anti-Punkt-Paar](gloss:anti-dot) zu erstellen. Dadurch wird die Zahl nicht
verändert.

{.reveal(when="d1")} Klicke jetzt auf den [Explodieren-Knopf](->#dots_button), um
die Zahl mit Hilfe der `1←10` Regel zu vereinfachen.

{.reveal(when="x1")} Das Gleiche machen wir nun mit dem [zweiten Dezimalfeld](->#dots_.dot-decimal+.dot-cell+.dot-cell).
Füge zuerst ein Punkt/Anti-Punkt-Paar hinzu und drücke dann auf Explodieren.
Beachte, wie sich das Punkt/Anti-Punkt-Paar gegenseitig aufhebt! Das wird
[Auslöschung](gloss:dot-annihilation) genannt. Die sich ergebende Zahl hat sich
nicht verändert und ist immer noch 0,9999… Fahre mit den verbleibenden Zellen fort.

{.reveal(when="d3 x3 d4 x4")} Wenn wir ewig so weitermachen, dann sieht es so aus,
als würden wir tatsächlich zeigen, dass 0,9999… das Gleiche ist wie 1,0000…!

---

### Eine mathematische Erklärung

Wenn du immer noch nicht überzeugt bist, dann schauen wir uns zum Abschluss noch eine
mathematische Erklärung an. Wenn wir uns einig sind, dass 0,9999… eine gültige Zahl
ist (die 1 sein kann oder auch nicht), dann macht es Sinn anzunehmen, dass sie auch
allen sonstigen, üblichen Regeln der Mathematik gehorcht.

    ol.proof
      li Wir beginnen damit, dass wir dieser Zahl einen Namen geben. Wir nennen sie #[.ivar F] für #[strong.m-green Friederike].:
        .text-center.r #[.ivar F] = 0,9999…#[button.next-step Weiter]
      li.reveal(when="next-0") Nun multipliziere sie mit 10. Das ergibt dann
        .text-center.r 10#[.ivar F] = 9,9999…#[button.next-step Weiter]
      li.reveal(when="next-1") Subtrahiere die Gleichung aus Schritt 1 von der Gleichung aus Schritt 2. Da alle ihre Nachkommastellen gleich sind, heben sie sich einfach auf:
        .text-center.r 9#[.ivar F] = 9#[button.next-step Weiter]
      li.reveal(when="next-2") Schließlich, wenn wir beide Seiten durch 9 teilen, erhalten wir
        .text-center.md #[.ivar F] = [[1]]

---

Erstaunlich! Aber wir sollten uns darüber klar sein, was wir hier herausgefunden haben.
__WENN__ man davon ausgeht, dass 0,9999… in der gängigen Mathematik eine sinnvolle
Größe ist, __DANN__ folgt daraus, dass diese Zahl gleich 1 ist. Das ist ein wichtiges Detail,
denn dasselbe mathematische Argument kann zu philosophischen Problemen führen - wie wir im
nächsten Abschnitt sehen werden…



--------------------------------------------------------------------------------



## Außergewöhnliche Zahlen

> section: unusual

Im [vorherigen Abschnitt](/course/exploding-dots/infinity) haben wir uns eine Zahl mit
unendlich vielen 9ern rechts vom Komma angesehen:

{.text-center} __0,999999…__

Jetzt wollen wir mal sehen, was passiert, wenn wir unendlich viele 9er links vom Komma
hinzufügen:

{.text-center} __…999999__

---

Wenn wir davon ausgehen, dass es sich um eine gültige Zahl handelt (und nicht z.B. nur um
"Unendlich"), können wir versuchen, dasselbe mathematische Argument wie vorher zu verwenden,
um ihren Wert herauszufinden:

    ol.proof.s-yellow
      li Fangen wir damit an, der Nummer einen Namen zu geben, sagen wir #[.ivar A] für #[strong.m-yellow Arabella]:
        .text-center.r #[.ivar A] = …999999#[button.next-step Weiter]
      li.reveal(when="next-0") Nun multipliziere sie mit 10. Damit erhalten wir
        .text-center.r 10#[.ivar A] = …999990#[button.next-step Weiter]
      li.reveal(when="next-1") Beachte, dass #[.ivar A] und 10#[.ivar A] sich nur in der Endziffer unterscheiden. Wenn wir also die Gleichung in Schritt 1 von der Gleichung in Schritt 2 subtrahieren, erhalten wir
        .text-center.r 9#[.ivar A] = –9#[button.next-step Weiter]
      li.reveal(when="next-2") Schließlich, wenn wir beide Seiten durch 9 teilen, erhalten wir
        .text-center.md #[.ivar A] = [[-1]]

---

Mit anderen Worten, wir haben gerade gezeigt, dass _{strong.m-yellow.nowrap}…99999999_ = -1 ist.
Anscheinend, wenn wir einen Unendlichkeitsrechner zur Hand nehmen und die Summe von 9 + 90 +
900 + 9000 + … berechnen würden, wäre das Ergebnis also -1!

_Glaubst du das wirklich?_

    figure: x-img(src="images/confused.gif" alt="Confused GID" width=200 height=200)

---

### Außergewöhnliche Mathematik

Auch wenn …999999999 eindeutig keine "normale" Zahl ist, nehmen wir zunächst einmal an,
dass sie existiert und dass die Grundregeln der Mathematik für sie gelten. Wenn das der
Fall ist, müssten wir also davon ausgehen, dass …9999999 + 1 = [[0]] ist.

---
> id: dots-1
> goals: dot

Schauen wir mit einer [`1←10`-Maschine](gloss:dot-machine) nach, ob das tatsächlich der
Fall ist. Klicke irgendwo in die 1er-Zelle, um 1 hinzuzufügen:

    x-dot-machine(cells="…99999")
    x-gesture(target="#dots-1 .dot-cell:last-child")

---

Sieht aus, als hätte das tatsächlich funktioniert! Wenn wir 1 zu _{span.nowrap}…999999999_
addieren, ist das Ergebnis 0.

Aber denk dran: Alles, was wir gezeigt haben, ist, dass __WENN__ wir uns entschieden haben
zu glauben, dass …99999999 eine sinnvolle Zahl ist, die unseren üblichen Gesetzen der
Mathematik folgt, __DANN__ muss sie den Wert -1 haben. Die meisten Leute sagen einfach, dass
sie _keine_ Zahl ist und hören an dieser Stelle auf - und das ist eine vollkommen zulässige
Sichtweise.

Das wirft die Frage auf: Gibt es ein _außergewöhnliches_ mathematisches System, für das
…999999 eine sinnvolle Zahl ist?

::: .box.f-blue
#### Herausforderung

Machen wir das Ganze noch schlimmer! Betrachte die Zahl mit unendlich vielen 9ern sowohl
links _und_ rechts vom Komma: __{.m-red.nowrap}…9999,9999…__.
Versuche wieder, das vorige mathematische Argument zu benutzen, um zu zeigen, dass das
gleich __{.m-red}Null__ ist.

*Irgendwie macht das Sinn, denn __{.m-red.nowrap}…9999,9999…__ =
__{.m-green.nowrap}…9999__ + __{.m-yellow.nowrap}0,9999…__ = __{.m-green}−1__ +
__{.m-yellow}1__ = __{.m-red}0__.*

:::

_{button.next-step} Weiter_

---
> id: warp-1

### Eine außergewöhnliche Zahlengerade

Im vorigen Kapitel haben wir gesehen, dass _{span.nowrap}0,99999999… = 1_.
Das ist ziemlich plausibel, denn die Abfolge der Näherungen 0,9; 0,99; 0,999;
0,9999 usw. nähert sich immer mehr der 1 an.

In diesem Beispiel geschieht genau das Gegenteil: die Zahlen 9, 99, 999, 9999,
9999 usw. entfernen sich immer weiter von -1. Deshalb ist es so abwegig zu
glauben, dass _{span.nowrap}…999999_ möglicherweise gleich -1 sein könnte.

    figure: include svg/number-line-1.svg

_{button.next-step} Weiter_

---
> id: warp-2

Es stellt sich jedoch heraus, dass es _möglich ist_, ein neues arithmetisches
System zu entwickeln, in dem Zahlen wie _{span.nowrap}…999999_ sinnvoll sind.
Um das zu erreichen, müssen wir nur die Art und Weise ändern, wie wir den
"Abstand" zwischen den Zahlen auf der Zahlengeraden messen.

Normalerweise wird _Abstand_ durch __Addition__ und __Subtraktion__ definiert.
Zum Beispiel ist der Abstand zwischen 2 und 6 gleich [[4]], _{span.reveal(when="blank-0")}
denn `2 + 4 = 6`._

    figure: include svg/number-line-2.svg

---

Stattdessen können wir eine "andere Art" von Abstand definieren, indem wir __Multiplikation__
und __Division__ verwenden.

{.r} In der Welt der ganzen Zahlen ist 0 die _am meisten teilbare_ Zahl von allen. Sie kann
beliebig oft durch eine beliebige ganze Zahl geteilt werden und ergibt trotzdem ein
ganzzahliges Ergebnis (nämlich 0). Wenn wir uns auf unsere Zahlenbasis von 10 konzentrieren,
können wir sehen, dass 0 einmal oder zweimal oder siebenunddreißig Mal oder eine Million Mal
durch 10 geteilt werden kann.
_{button.next-step} Weiter_

---
> id: zero-list

* Die Zahl __40__ ist ein bisschen "null-artig", in dem Sinne, dass wir sie durch zehn teilen
  können und immer noch eine ganze Zahl bekommen.
* Die Zahl __1700__ ist schon etwas null-artiger: sie kann [[zweimal|dreimal|viermal]] durch
  10 geteilt werden, und ergibt immer noch eine ganze Zahl.
* {.reveal(when="blank-0")} Die Zahl __230.000__ ist sogar noch null-artiger. Sie kann [[4]]
  mal durch 10 geteilt werden und bleibt trotzdem eine ganze Zahl.
* {.reveal(when="blank-1")} Die Zahl __5__ hingegen ist nicht sehr null-artig. Wir können sie
  nämlich keinmal durch zehn teilen, so dass sich eine ganze Zahl ergibt.

---

Wir können jetzt eine __Abstandsformel__ erstellen, die darauf basiert, wie oft 10 "in" einer
Zahl als Multiplikator "steckt". Wenn wir eine Zahl _a_ maximal _k_ mal durch zehn teilen
können und dabei eine ganze Zahl erhalten, schreiben wir

{.text-center} `abs(a)_(zehn) = 1/10^k`

Zum Beispiel, `abs(850)_(zehn) = 1/(10^1) = 0,1` und `abs(8500)_(zehn) = 1/(10^2) = "0,01"`
und `abs(850000)_(zehn) =` [[0,0001]].

---

Wir können auch den Abstand zwischen zwei beliebigen Zahlen messen. Zum Beispiel ist der
Abstand zwischen 3 und 33 gleich `abs(33−3)_(zehn) = abs(30)_(zehn) = 1/(10^1) = "0,1"`.

Mit dieser neuen Art, den Abstand zu messen, ist 1, 10, 100, 1000, … eine Zahlenfolge,
die sich immer mehr [[Null|1|-1|unendlich]] annähert. In ähnlicher Weise kommt 9, 99, 999,
9999, … immer näher an [[-1]] heran, so wie wir oben gesehen haben.

---
> id: p-adic-numbers

Mathematiker nennen diese Art der Betrachtungsweise der Abstände zwischen den nicht-negativen
ganzen Zahlen [__10-adische Arithmetik__](gloss:adic). Die Endung "adisch" bedeutet "eine
Zählung von Operationen". Hier zählen wir Faktoren von zehn.

---
> id: dots-2
> goals: dots

### Negative Zahlen und Brüche

Wir haben bereits gesehen, dass unser neues, 10-adisches System negative ganze
Zahlen unterstützt: _{span.nowrap}…999999 = -1_. Wir können etwas Ähnliches für
andere negative Zahlen tun. Wie viel muss man zu _{span.nowrap}…999998_ addieren,
um die Explosionen auszulösen?

    x-dot-machine(cells="…99998")
    x-gesture(target="#dots-2 .dot-cell:last-child")

---

Oder anders ausgedrückt: _{span.nowrap}…999998 = [[-2]]_. _{span.reveal(when="blank-0")}
Ebenso können wir berechnen, dass *{span.nowrap}…99999997 = [[-3]]*, *{span.nowrap}…999953
= [[-47]]*, *{span.nowrap}…999700 = -300* und so weiter. Jede negative ganze Zahl hat ein
10-adisches Äquivalent._

---
> id: dots-3
> goals: dots

{.text-center} •

Etwas schwieriger ist es, 10-adische Brüche zu bilden. Sehen wir mal, was passiert,
wenn wir _{span.nowrap}...6666667_ mit 3 multiplizieren:

    x-dot-machine.tiny(cells="…66667")
    p.text-center: button.btn.btn-small.btn-red Multipliziere mit 3
    x-gesture(target="#dots-3 button")

---

Da _{span.nowrap}…6666667_ × 3 = [[1]], *{span.reveal(when="blank-0")}wissen
wir, dass _{span.nowrap}…6666667_ = `1/3`.*

---

::: .box.f-blue
#### Herausforderung

Kannst du herausfinden, welche 10-adische Zahl sich wie `2/3` verhält?

Wie sieht es mit anderen Brüchen wie `4/7` oder `2/13` aus?

:::

_Es stellt sich heraus, dass es ein paar Brüche gibt, die in unserem 10-adischen
Zahlensystem nicht ausgedrückt werden können: alle Brüche, die in ihrer gekürzten
Form einen [Nenner](gloss:denominator) haben, der ein Vielfaches von 2 oder 5
(oder beides) ist. Du kannst das korrigieren, indem du den 10-adischen Zahlen erlaubst,
eine endliche Anzahl von Dezimalstellen zu haben. Nun besitzt jede [rationale Zahl](gloss:rational-numbers)
ein 10-adisches Äquivalent._

---
> id: flaw

### Ein gravierender Schönheitsfehler

Wir haben jetzt gesehen, dass jede ganze Zahl, die ein Bruch ist, ein 10-adisches Äquivalent
hat, und dass wir 10-adische Zahlen addieren, subtrahieren und multiplizieren können, genau
wie normale ganze Zahlen. Leider gibt es aber einen gravierenden Schönheitsfehler: wir können
nicht durch alle 10-adischen Zahlen _dividieren_.

Um zu sehen, warum das der Fall ist, müssen wir uns die Potenzen 2 und 5 ansehen:

::: column(width=180)

{.text-center} `2^1` = 2<br>
`2^2` = 4<br>
`2^3` = 8<br>
`2^4` = 16<br>
`2^5` = [[32]]<br>
`2^6` = [[64]]<br>
`2^7` = 128<br>
…

::: column(width=180)

{.text-center} `5^1` = 5<br>
`5^2` = 25<br>
`5^3` = [[125]]<br>
`5^4` = [[625]]<br>
`5^5` = 3,_{span.po2}125_<br>
`5^6` = 15,_{span.po2}625_<br>
`5^7` = 78,_{span.po2}125_<br>
…

:::

---
> id: flaw-1

Beachte, wie viele der 5er-Potenzen mit [{.no-margins}anderen, kleineren Potenzen von 5](->.po2)
enden. Das Gleiche gilt auch für die 2er Potenzen: Es stellt sich heraus, dass wir zwei unendliche,
10-adische Zahlen erzeugen können, die immer mit 2er bzw. 5er Potenzen enden:

::: column(width=140)

{.text-right} `2^1` = 2<br>
`2^5` = 32<br>
`2^25` = 33554432<br>
__{.i.m-red}M__ = …33554432

::: column(width=140)

{.text-right} `5^1` = 5<br>
`5^2` = 25<br>
`5^3` = 125<br>
__{.i.m-yellow}N__ = …1953125

:::

_{button.next-step} Weiter_

---
> id: flaw-2

Wenn wir versuchen, die Potenzen von 2 und 5 zu multiplizieren, erhalten wir
eine Zahlenfolge von Produkten, die immer näher an Null heranrücken (in unserem
10adischen Sinn):

|    |   |     |   |           |
| -: | - | --: | - | --------: |
|  2 | × |   5 | = |        10 |
|  4 | × |  25 | = |       100 |
|  8 | × | 125 | = |  [[1000]] |
| 16 | × | 625 | = | [[10000]] |

---
> id: flaw-3

Dasselbe passiert, wenn wir versuchen, __{.i.m-red}M__ und __{.i.m-yellow}N__
miteinander zu multiplizieren:

|   |   |    |    |    |    |
| - | - | -- | -- | -- | -- |
|   | … |  3 |  1 |  2 |  5 |
| × | … |  4 |  4 |  3 |  2 |
|   | … |  6 |  2 |  4 | 10 |
|   | … |  3 |  6 | 15 |    |
|   | … |  8 | 20 |    |    |
| + | … | 20 |    |    |    |
| = | … | 37 | 28 | 19 | 10 |
| = | … |  0 |  0 |  0 |  0 |

---

Mit anderen Worten, wir haben zwei von Null verschiedene Zahlen __{.i.m-red}M__
und __{.i.m-yellow}N__ gefunden für die gilt __{.i.m-red}M__ × __{.i.m-yellow}N__ = 0.

Das bedeutet, dass es in der 10-adischen Arithmetik unmöglich ist, durch
__{.i.m-red}M__ oder __{.i.m-yellow}N__ zu dividieren. (Wenn es möglich wäre, könnten
wir die Gleichung __{.i.m-red}M__ × __{.i.m-yellow}N__ = 0 durch __{.i.m-yellow}N__
dividieren und würden als Ergebnis __{.i.m-red}M__ = 0 erhalten. Das ist ein Widerspruch.)



--------------------------------------------------------------------------------



## P-adische Zahlen

> section: p-adic
> id: p-adic

Im [vorherigen Abschnitt](/course/exploding-dots/unusual) haben wir es geschafft,
zwei von Null verschiedene [10-adische Zahlen](gloss:adic) _M_ und _N_ zu bilden, so dass
`M×N=0` ergibt. Das bedeutet, dass es unmöglich ist, durch Zahlen wie _M_ und _N_ zu
dividieren - ein gravierender Schönheitsfehler in jedem Zahlensystem.

Es stellt sich jedoch heraus, dass dieses Problem nur auftritt, wenn die Zahlenbasis
keine [Primzahl](gloss:prime) ist. Da 10 [[keine|eine]] Primzahl ist, _{span.reveal(when="blank-0")}
besitzen die 10-adischen Zahlen diesen Schönheitsfehler. 2-adische oder 3-adische Zahlen
hingegen betrifft das nicht._

---

Mathematiker nennen diese Zahlen __*p*-adische Zahlen__, wobei das *p* für "Primzahl" steht.
Auch wenn sie im Alltag nicht besonders relevant erscheinen, erweisen sich _p_-adische Zahlen
in bestimmten Gebieten der Mathematik als sehr nützlich.

Zum Beispiel hängen viele unbeantwortete Probleme in der Mathematik mit Primzahlen und
[Primfaktorzerlegung](gloss:factorisation) zusammen. Da _p_-adische Zahlen durch
_Multiplikation_ und nicht durch _Addition_ definiert wurden, sind sie perfekt, um diese
Probleme zu analysieren. *P*-adische Zahlen wurden sogar in Andrew Wiles' berühmtem Beweis
von [Fermats letztem Satz](gloss:fermat-last) verwendet.

---
> id: square

Eine der wohl überraschendsten Anwendungen der p-adischen Zahlen liegt in der Geometrie.
Hier siehst du ein Quadrat, das in ${2*x}{x|9|1,50,1} kleine Dreiecke gleicher Fläche
unterteilt ist:

    figure: svg.square(width=320 height=320)
    x-gesture(target="x-var" slide="100,0")

---
> id: square-1

Wenn du den Schieberegler bewegst, kannst du sehen, dass es möglich ist, das Quadrat in
eine beliebige [[gerade|ungerade|prime]] Anzahl gleicher Dreiecke zu teilen.

{.r.reveal(when="blank-0")} Aber was ist mit _ungeraden_ Zahlen? Zeichne ein Quadrat auf
ein Blatt Papier und versuche dann, es in 3, 5 oder 7 Dreiecke gleicher Fläche zu teilen.
_{button.next-step} Weiter_

---
> id: square-3

Und jetzt kommt die schockierende Überraschung: es stellt sich heraus, dass es _unmöglich_
ist, ein Quadrat in eine _ungerade_ Anzahl von Dreiecken gleicher Fläche zu teilen! Das
wurde 1970 von dem Mathematiker [Paul Monsky](bio:monsky) bewiesen - du kannst sogar einen
Blick auf die Arbeit werfen, die er darüber veröffentlicht hat:

    figure
      x-img(src="images/paper.jpg" alt="Artikel von Paul Monsky" width=400 height=132)
      p.caption #[a(href="http://ieee.scripts.mit.edu/urgewiki/images/0/00/Monsky.pdf" target="_blank") The American Mathematical Monthly]

Bei der Beweisführung musste Monsky das 2-adische Zahlensystem verwenden. Die Mathematik,
so seltsam sie auch erscheinen mag, bringt immer wieder überraschende und unerwartete
Anwendungen hervor.
