# Teilbarkeit und Primzahlen

## Teiler und Vielfache

> section: factors-and-multiples
> id: divisibility1
> color: "#1AA845"
> level: Foundations

    mixin grid(n, fn)
      .number-grid
        - var i = 1
        while i <= n
          .number-cell= i
            if fn
              - var badge = fn(i)
              if badge
                .number-badge= badge
          - i += 1

    mixin divisor-table(divisors, pairs)
      - var len = divisors.length
      - var last = divisors[len-1]
      table.divisor-table
        tr
          td.td-border-right(width="24")= last
          for i in divisors
            td.divisor-number(width="24" data-display="visibility")= i + (i == last ? '' : ',')
        for i in pairs
          tr
            td
            if i
              td(colspan=i)
            td(colspan=len - 2 * i): .divisor-pair(style="height: " + (len/2 - i) + "00%" data-display="visibility")
            if i
              td(colspan=i)

Inzwischen solltest du mit der Addition, Subtraktion und Multiplikation
von ganzen Zahlen vertraut sein. Die Division ist etwas anders, da man nicht immer eine ganze
Zahl durch eine andere teilen kann. Zum Beispiel ist 17 geteilt durch 3 keine ganze Zahl - sie liegt
irgendwo zwischen 5 und 6. Du musst entweder einen Rest (2) angeben oder die Antwort als Dezimalzahl (5,66)
ausdrücken.

    .row.padded
      .grow
        include svg/divisibility-1.svg
        p.caption 12 ist durch 3 teilbar
      .grow
        include svg/divisibility-2.svg
        p.caption 10 ist durch 4 nicht teilbar

Wenn du eine Zahl __{.red}A__ durch eine Zahl __{.blue}B__ ohne
Rest teilen kannst, sagen wir, dass __{.blue}B__ ein __Teiler__ von
__{.red}A__ ist, und dass __{.red}A__ ein __Vielfaches__ von __{.blue}B__ ist. Wir schreiben oft
__{.blue}B__|__{.red}A__, wobei der vertikale Strich einfach _“teilt”_ bedeutet.

Zum Beispiel __{.green}7__ × 3 = __{.orange}21__, also ist __{.green}7__ ein
[[Teiler|Vielfaches]] von __{.orange}21__ und __{.orange}21__ ist ein [[Vielfaches|Teiler]]
von __{.green}7__ - kurz: __{.green}7__|__{.orange}21__.

---
> id: divisibility-game

In diesem kurzen Spiel sollst du
so schnell wie möglich bestimmen, welche Zahlen Teiler oder Vielfache sind. Klicke auf den [Startknopf](->#divisibility-game_.toggle), um zu beginnen.

::: .box.blue.no-padding
#### Teiler und Vielfache Quiz

    x-gameplay.factors-quiz
      .circled ${x}
      | ist
      .factor-value
        .factor-bubble: .btn.btn-blue Teiler
        .factor-bubble: .btn.btn-blue Vielfaches
        .factor-bubble: .btn.btn-blue Keines
      | von
      .circled ${y}

:::

---
> id: factors

Es ist oft sinnvoll, _alle_ Teiler einer Zahl zu finden. Zum Beispiel sind 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 und 60
die Teiler von 60.

Natürlich willst du nicht alle Zahlen bis 60 überprüfen, ob es sich um Teiler handelt.
Es gibt eine einfache Methode, die von der Tatsache ausgeht, dass Teiler
immer [[paarweise|zu dritt|als Hälften]] auftreten.

---
> id: factors1

Im Falle von 60 haben wir 60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 =
6 × 10. Oder, in einer anderen Schreibweise,

    include mixins
    +divisor-table([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], [5, 4, 3, 2, 1, 0])

Um alle Teiler einer Zahl zu finden, beginnen wir einfach an beiden Enden dieser Liste,
bis wir in der Mitte angelangt sind.

---
> id: factors2

    include mixins
    x-slideshow
      .stage(slot="stage")
        +divisor-table([1, 2, 3, 6, 7, 14, 21, 42], [3, 2, 1, 0])
      .legend(slot="legend") Zum Beispiel ist das erste Teilerpaar von 42 einfach 1 und 42, und wir schreiben beide mit viel Platz dazwischen auf.
      .legend(slot="legend") Nach 1 am Anfang prüfen wir, ob 2 ein Teiler von 42 ist. Das trifft zu, und das entsprechende Paar ist 42 ÷ 2 = 21.
      .legend(slot="legend") Als nächstes prüfen wir, ob 3 42 teilt. Das trifft zu, und das entsprechende Paar ist 42 ÷ 3 = 14.
      .legend(slot="legend") Als nächstes prüfen wir, ob 4 42 teilt. Das geht aber nicht, weshalb wir weitersuchen.
      .legend(slot="legend") 5 teilt 42 auch nicht, also gehen wir weiter.
      .legend(slot="legend") 6 teilt 42 wieder. Das entsprechende Paar ist 42 ÷ 6 = 7. Beachte, wie wir uns nach wenigen Versuchen in der Mitte getroffen haben, ohne alle Zahlen von 7 bis 42 durchprobieren zu müssen.

Der einzige Sonderfall bei dieser Methode sind Quadratzahlen: In diesem Fall ist zum Schluss
nur eine einzige Zahl in der Mitte, wie bei 64 = 8 × 8.

---

## Teilbarkeitsregeln

> id: divisibility2
> section: rules

Es gibt ein paar verschiedene Regeln, die es dir überraschend einfach machen können, zu überprüfen, ob eine
Zahl durch eine andere teilbar ist. In diesem Abschnitt werden wir einen Blick auf einige von
ihnen werfen....

### Teilbarkeit durch 2 und 5

Jede Zahl ist durch 1 teilbar. Um festzustellen, ob eine Zahl durch 2 teilbar ist, müssen wir
einfach prüfen, ob sie gerade ist: Jede Zahl, die auf 0, 2, 4, 6 oder 8 endet, ist durch 2
teilbar.

    include mixins
    +grid(30)

---
> id: divisibility5

Um zu sehen, ob eine Zahl durch 5 teilbar ist, müssen wir ebenfalls nur überprüfen, ob ihre
letzte Ziffer 0 oder 5 ist:

    include mixins
    +grid(30)

---
> id: divisibility5a

Der Grund, warum diese Regeln für 2 und 5 so einfach sind, liegt in unserem
Zahlensystem. Die Basis unseres Zahlensystems ist 10, was bedeutet, dass jede Ziffer einer
Zahl zehnmal so viel wert ist wie die nächste rechts von ihr. Wenn wir die
Zahl 6382 als Beispiel nehmen,

    table.base-10.base-10-fixed
      tr.base-10-large
        td: strong 6
        td: strong 3
        td: strong 8
        td: strong 2
      tr.caption
        td: | =6000
        td: | =300
        td: | =80
        td: | =2

Jetzt können wir die letzte Ziffer einer Zahl von allen anderen Ziffern trennen:

    table.table-tiny
      tr.base-10-large
        td #[strong.m-red abc]#[strong.m-green d]
        td: | =
        td #[strong.m-red abc × 10]
        td +
        td #[strong.m-green d]
      tr.caption
        td #[strong.m-red 638]#[strong.m-green 2]
        td: | =
        td #[strong.m-red 638 × 10]
        td +
        td #[strong.m-green 2]

Sowohl 2 als auch 5 sind Teiler von 10, so dass sie __{.m-red}abc × 10__
[[immer teilen|niemals teilen]], egal welche Werte __{.m-red}a__, __{.m-red}b__
und __{.m-red}c__ haben. Deshalb müssen wir nur die letzte Ziffer überprüfen: Wenn
__{.m-green}d__ durch 2 teilbar ist, dann ist [[die ganze Zahl|abc]] auch
durch 2 teilbar. Wenn __{.m-green}d__ durch 5 teilbar ist, dann ist die ganze Zahl durch 5
teilbar.

---
> id: divisibility4b

Am einfachsten ist die Teilbarkeitsregel für 10: Wir müssen nur prüfen, ob die
[[letzte Ziffer eine 0 ist|erste Ziffer eine 1 ist|letzte Ziffer gerade ist]].

---
> id: divisibility4

### Teilbarkeit durch 4 und 8

Leider lässt sich 10 nicht durch 4 teilen, also können wir nicht einfach die letzte Zahl betrachten -
aber 4 _teilt_ 100, also müssen wir unsere Regel von oben nur leicht ändern.
Wir schreiben jetzt __{.m-red}ab__**{.m-green}cd** = __{.m-red}ab × 100__ +
__{.m-green}cd__. Wir wissen, dass 4 immer __{.m-red}ab × 100__ teilt, also müssen wir
uns die letzten [[2]] Ziffern ansehen, um zu überprüfen, ob eine Zahl durch 4 teilbar ist.

Zum Beispiel ist __{.m-green}24__ durch 4 teilbar, also ist __{.m-red}2735__**{.m-green}24**
[[auch|nicht]] durch 4 teilbar, und __{.m-green}18__ ist nicht durch 4 teilbar, also ist
__{.m-red}1947__**{.m-green}18** [[auch nicht|auch]] durch 4 teilbar.

---
> id: divisibility4a

Die Teilbarkeitsregeln für 8 werden noch etwas schwieriger, da 100 nicht durch 8
teilbar ist. Stattdessen müssen wir bis zu [[1000|800|108]] gehen und uns die
letzten [[3]] Ziffern einer Zahl ansehen.

Zum Beispiel ist __{.m-green}120__ durch 8 teilbar, also ist
__{.m-red}271__**{.m-green}120** auch durch 8 teilbar.

---
> id: divisibility3a

### Teilbarkeit durch 3 und 9

Die Teilbarkeitsregel für 3 ist etwas komplizierter. 3 teilt 10 nicht, und
es teilt auch 100 nicht, oder 1000, oder eine andere Potenz von 10. Einfach nur
die letzten paar Ziffern einer Zahl zu betrachten wird also nicht funktionieren.

Stattdessen müssen wir die __Quersumme__ einer Zahl verwenden, die einfach die Summe
aller ihrer einzelnen Ziffern ist. Zum Beispiel ist die Quersumme von ${13×n+123}{n|3|0,20,1}
ist ${digitSumString(123+13×n)} = ${digitSum(123+13×n)} und die Quersumme von 3524
ist [[14]].

---
> id: divisibility3b

    include mixins
    +grid(40, function(n) { if (!(n % 3)) { var s = '' + n; return +s[0] + (+s[1] || 0); } })

Hier haben wir alle Zahlen hervorgehoben, die ein Vielfaches von drei sind. Wie du siehst
 sind ihre Quersummen immer [[ein Vielfaches von 3|entweder 0 oder 3|ungerade Zahlen]].

{.reveal(when="blank-0")} Um also festzustellen, ob eine Zahl durch 3 teilbar ist, musst du
nur ihre Quersumme berechnen und prüfen, ob das Ergebnis auch durch 3 teilbar
ist.

---
> id: divisibility9

Als nächstes betrachten wir die Vielfachen von 9:

    .number-grid
      for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        .number-cell.yellow= x*9
          .number-badge= (x == 11 ? 18 : 9)

Es scheint, dass alle durch 9 teilbaren Zahlen eine Quersumme haben, die
[[auch|nicht]] durch 9 teilbar ist, _{span.reveal(when="blank-0")}z.B. ist die
Quersumme von 4752 [[18]], also gilt: 4752 [[ist|ist nicht]] durch 9 teilbar._

---
> id: divisibility9a

Selbstverständlich gibt es für diese seltsamen Muster für Zahlen, die durch 3 und 9 teilbar sind,
einen Grund - und wieder hat er mit unserem Zahlensystem auf der Basis von 10 zu tun. Wie
wir gesehen haben, bedeutet die Schreibweise der Zahl __{.m-red}6__**{.m-blue}3**__{.m-green}8__**{.m-yellow}4**
eigentlich

{.text-center} __{.m-red}6 × 1000__ + __{.m-blue}3 × 100__ + __{.m-green}8 × 10__ + __{.m-yellow}4__.

Wir können jedes dieser Produkte in zwei Teile aufteilen:

{.text-center} __{.m-red}*{span.digit-sum-else}6 × 999* + *{span.digit-sum-is}6*__ +
__{.m-blue}*{span.digit-sum-else}3 × 99* + *{span.digit-sum-is}3*__ +
__{.m-green}*{span.digit-sum-else}8 × 9* + *{span.digit-sum-is}8*__ +
__{.m-yellow.digit-sum-is}4__.

Natürlich sind __{.m-green}9__, __{.m-blue}99__, 999, __{.m-red}999__ usw.
immer durch 3 (oder durch 9) teilbar. Es bleibt nur noch zu prüfen, ob das, was übrig bleibt
, auch durch 3 (oder 9) teilbar ist:

{.text-center} __{.m-red}6__ + __{.m-blue}3__ + __{.m-green}8__ + __{.m-yellow}4__

Das ist zufällig die Quersumme! Wenn also die [{.no-margins}Quersumme](->.digit-sum-is) ein
Vielfaches von 3 ist, und wir wissen, dass [{.no-margins}alles andere](->.digit-sum-else) ein
Vielfaches von 3 ist, dann muss das Ergebnis auch ein Vielfaches von 3 sein.

---
> id: divisibility6
> goals: btn2 btn3

### Teilbarkeit durch 6

Wir haben jetzt die Nummer 6 übersprungen - aber wir haben bereits die eigentliche Arbeit geleistet.
Wie du weißt ist 6 = 2 × 3.

    include mixins
    +grid(40)
    p.btn-row.text-center(style="margin-bottom:1em")
      button.btn.btn-small(data-display="visibility") Vielfache von 2
      button.btn.btn-small(data-display="visibility") Vielfache von 3

Um zu überprüfen, ob eine Zahl durch 6 teilbar ist, müssen wir nur prüfen, ob sie durch 2 [[und auch|oder]] durch 3
teilbar ist. Beachte, dass dies
zwar für 6 funktioniert, aber sicherlich nicht für _jede_ Zahl, die das Produkt von zwei anderen ist.
Mehr dazu später....

---

## Primzahlen

> id: primes
> section: primes

Bei der Berechnung der Teilerpaare einer Zahl kann es vorkommen, dass die Zahl außer
dem ersten Paar keine anderen Teiler mehr hat. Ein Beispiel dafür ist 13 - seine einzigen Teiler
sind 1 und 13 selbst. Diese besonderen Zahlen werden als __Primzahlen__ bezeichnet. Sie
können nicht in Produkte mit kleineren Zahlen zerlegt werden, was sie
gewissermaßen zu “Atomen von Zahlen” macht.

Beachte, dass 1 selbst _keine_ Primzahl ist, so dass die ersten Primzahlen
2, 3, 5, 7, 11, 13,.... sind.

---
> id: primes1

Jede Zahl, die keine Primzahl ist, kann als Produkt von Primzahlen geschrieben werden: Wir teilen sie
einfach in mehrere Teile, bis alle Faktoren prim sind. Zum Beispiel,

    table.table-tiny
      tr
        td(colspan=4)
        td: .number-ball.legs.b.a 84
      tr
        td(colspan=2)
        td: .number-ball.blue 2
        td(colspan=3) ×
        td: .number-ball.blue.legs.b 42
      tr
        td(colspan=4)
        td: .number-ball.green 2
        td(colspan=2) ×
        td: .number-ball.green.legs(style="margin: 0 -10px") 21
      tr.td-border-bottom
        td(colspan=6)
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7
      tr
        td: .number-ball 84
        td: | =
        td: .number-ball.blue 2
        td ×
        td: .number-ball.green 2
        td ×
        td: .number-ball.yellow 3
        td ×
        td: .number-ball.yellow 7

Jetzt sind 2, 3 und 7 Primzahlen und können nicht weiter unterteilt werden. Das Produkt
2 × 2 × 2 × 3 × 3 × 7 wird als die __Primfaktorzerlegung__ von 84 bezeichnet, und 2, 3 und 7 sind
seine __Primfaktoren__. Beachte, dass einige Primzahlen, wie in diesem Fall 2, in
einer Primfaktorzerlegung mehrfach auftreten können.

Jede ganze Zahl hat eine Primfaktorzerlegung und keine zwei ganzen Zahlen haben die gleiche
Primfaktorzerlegung. Außerdem gibt es nur eine einzige Möglichkeit, eine beliebige Zahl als
Produkt von Primzahlen zu schreiben - es sei denn, wir zählen unterschiedliche Anordnungen der Primzahlen. Das wird
als der __Fundamentalsatz der Arithmetik__ (FdA) bezeichnet.

Die Anwendung des FdA kann viele Probleme in der Mathematik viel einfacher machen: Wir teilen
Zahlen in ihre Primfaktoren auf, dann lösen wir das Problem für die einzelnen
Primzahlen, was oft viel einfacher sein kann, kombinieren zum Schluss diese Ergebnisse und
lösen so das anfängliche Problem.

---
> id: eratosthenes

### Das Sieb des Eratosthenes

Es stellte sich heraus, dass es ziemlich schwierig war, festzustellen, ob eine Zahl eine Primzahl ist: Man musste
immer _alle_ ihre Primfaktoren finden, was
mit zunehmender Größe der Zahlen immer schwieriger wird. Stattdessen entwickelte der griechische Mathematiker [Eratosthenes von
Kyrene](bio:eratosthenes) einen einfachen Algorithmus, um alle
Primzahlen bis 100 zu finden: das __Sieb des Eratosthenes__.

    include mixins
    x-slideshow
      .stage(slot="stage")
        +grid(100)
      .legend(slot="legend") Zuerst müssen wir alle Zahlen bis 100 aufschreiben.
      .legend(slot="legend") Wir wissen, dass 1 nicht prim ist, also löschen wir die 1.
      .legend(slot="legend") Die kleinste Primzahl ist #[strong.m-red 2]. Jedes Vielfache von 2 kann also keine Primzahl sein, da es 2 als Faktor hat. Daher können wir alle Vielfachen von 2 streichen.
      .legend(slot="legend") Die nächste Zahl in unserer Liste ist #[strong.m-blue 3] - also wieder eine Primzahl. Alle Vielfache von 3 können nicht Primzahlen sein, da sie 3 als Teiler haben. Deshalb können wir diese auch streichen.
      .legend(slot="legend") Die nächste Zahl, 4, ist bereits gestrichen, also gehen wir weiter zu #[strong.m-green 5]: das ist eine Primzahl und wir streichen wieder alle Vielfache von 5.
      .legend.md(slot="legend") Die nächste Primzahl muss [[7]] sein, da 6 durchgestrichen ist. Und wieder streichen wir alle entsprechenden Vielfachen durch.
      .legend.md(slot="legend") Die nächste Primzahl ist [[11]]. Beachte jedoch, dass alle seine Vielfache [[bereits gestrichen sind|Vielfache von 3 sind]]. Das Gleiche gilt eigentlich für alle anderen verbleibenden Zahlen. Daher müssen alle diese verbleibenden Zahlen Primzahlen sein.

Durch Abzählen sehen wir, dass es insgesamt [[25]] Primzahlen gibt, die kleiner als 100 sind.

---
> id: primes3

### Wie viele Primzahlen gibt es?

::: column.grow
Natürlich können wir auch das Sieb des Eratosthenes verwenden, um größere
Primzahlen zu finden. Es gibt 21 Primzahlen zwischen 100 und 200, 16 Primzahlen zwischen 200 und 300,
17 Primzahlen zwischen 400 und 500 und nur 11 zwischen 10.000 und 10.100.

Die Primzahlen scheinen in immer größeren Abständen aufzutreten, aber hören sie jemals auf?
Gibt es eine _größte_ oder eine _letzte_ Primzahl?

Der altgriechische Mathematiker [Euklid von Alexandria](bio:euclid) bewies
als erster, dass es unendlich viele Primzahlen gibt, mit dem folgenden Argument:

::: column(width=220)

    x-img(lightbox width=220 height=300 src="images/euclid.jpg")

:::

    ol.proof
      li Angenommen, es gäbe nur endlich viele Primzahlen.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P]
      li Wir wollen nun alle miteinander multiplizieren, um eine sehr große Zahl zu erhalten, die wir #[em N] nennen.
        .text-center #[em.number-ball N] = #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P]
      li Sehen wir uns jetzt #[em N] + 1 genauer an. Jede Primzahl, die #[em N] teilt, kann nicht auch #[em N] + 1 teilen. Und da alle Primzahlen, die wir bisher gefunden haben, #[em N] teilen, kann keine davon auch #[em N] + 1 teilen.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[.number-ball.blue P] #[span.divides] #[em.number-ball N]
        .text-center #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[.number-ball.blue.cross P] #[span.divides] #[em.number-ball N] + 1
      li.md Der [Fundamentalsatz der Arithmetik](gloss:fta) besagt, dass #[em N] + 1, wie jede andere Zahl in Primfaktoren zerlegt werden kann. Entweder #[em N] + 1 ist selbst prim, oder es gibt eine zusätzliche neue Primzahl #[em P’] die Teiler von #[em N] + 1 ist.
        .text-center #[em.number-ball.green P’] #[span.divides] #[em.number-ball N] + 1
      li In beiden Fällen hätten wir also eine neue Primzahl gefunden, die nicht in unserer ursprünglichen Liste enthalten ist - aber wir hatten ja angenommen, dass #[em alle] Primzahlen in dieser Liste sind.
      li Offensichtlich ist da etwas schiefgelaufen! Aber da die Schritte #[span.proof-step 2]-#[span.proof-step 4] alle korrekt waren, ist die einzige mögliche Erklärung die, dass unsere anfängliche Annahme #[span.proof-step 1] falsch war. Das bedeutet, dass es tatsächlich unendlich viele Primzahlen geben muss.

---
> id: primes4

Euklids Erklärung ist eines der ersten Beispiele in der Geschichte für einen formalen
mathematischen __Beweis__ - ein logisches Argument, das zeigt, dass eine Aussage
definitiv wahr sein muss. Dieses Beispiel wird oft als __Widerspruchsbeweis__ bezeichnet: Wir
beginnen mit einer Annahme, leiten daraus etwas Unmögliches ab und wissen daher, dass unsere
Annahme falsch gewesen sein muss.

---

## Die Verteilung der Primzahlen

> id: prime-test
> goals: calculator
> section: distribution-of-primes

Der einfachste Weg, um zu überprüfen, ob eine Zahl eine Primzahl ist, ist, sie durch alle
kleineren natürlichen Zahlen zu teilen. Computer können das sehr schnell und effizient bewerkstelligen. Für _sehr
große_ Zahlen, mit Hunderten von Ziffern, gibt es auch effizientere
Algorithmen. Einige von ihnen nutzen sogar die Wahrscheinlichkeitsrechnung, um festzustellen, ob
eine Zahl mit _an Sicherheit grenzender Wahrscheinlichkeit_ eine Primzahl ist.

Hier ist ein Taschenrechner, mit dem du überprüfen kannst, ob eine Zahl eine Primzahl ist:

    .calculator
      h3 Primzahl-Checker
      input(type="number" min="2")
      .result.var(:html="result")

---
> id: prime-test-1

::: column.grow

Im Laufe der Geschichte haben die Menschen versucht, immer größere und größere Primzahlen zu finden.
1460 war die größte bekannte Primzahl 131.071. Im Jahr 1772
zeigte [Leonard Euler](bio:euler), dass 2.147.483.647 auch prim ist.

Mit der Einführung von Computern im 20. Jahrhundert wurde die Berechnung großer Primzahlen
viel einfacher. Die größte derzeit bekannte Primzahl wurde im
Dezember 2018 entdeckt und hat 24.862.048 Stellen. Du bräuchtest 8000 Blatt Papier, um
sie auszudrucken!

::: column(width=300)

    img(src="images/network.jpg" width=300 height=200)

{.caption}GIMPS ("_Great Internet Mersenne Prime Search_") ist ein gemeinschaftliches
Projekt, bei dem Freiwillige mit frei zugänglicher Software Primzahlen finden können.

:::

---
> id: prime-generator
> goals: calculator

Die Berechnung dieser großen Primzahlen mag wie Zeitverschwendung erscheinen, aber
später in diesem Kurs wirst du mehr über verschiedene reale Anwendungen erfahren, bei denen
Computer große Primzahlen verwenden müssen.

Hier kannst du deine eigenen Primzahlen mit einer gegebenen Anzahl von Ziffern generieren
(beachte, dass die Kommas im Ergebnis im englischsprachigen Raum Tausendertrennzeichen sind):

    .calculator
      h3 Primzahlgenerator
      p.md Anzahl an Ziffern: ${d}{d|6|2,16,1}
      p(style="margin: 10px 0"): button.btn.btn-white Generate
      .result.var(:html="result")

---
> id: ulam

### Die Ulam-Spirale

Der polnische Mathematiker [Stanisław Ulam](bio:ulam) entwickelte eine coole Methode, um die Verteilung großer Primzahlen zu
zeigen, während er bei einem _“langen und
sehr langweiligen”_ Treffen 1963 herumkritzelte.

    .number-grid.ulam-grid
      for x in [37, 36, 35, 34, 33, 32, 31]
        .number-cell(data-display="visibility")= x
      for x in [38, 17, 16, 15, 14, 13, 30]
        .number-cell(data-display="visibility")= x
      for x in [39, 18,  5,  4,  3, 12, 29]
        .number-cell(data-display="visibility")= x
      for x in [40, 19,  6,  1,  2, 11, 28]
        .number-cell(data-display="visibility")= x
      for x in [41, 20,  7,  8,  9, 10, 27]
        .number-cell(data-display="visibility")= x
      for x in [42, 21, 22, 23, 24, 25, 26]
        .number-cell(data-display="visibility")= x
      for x in [43, 44, 45, 46, 47, 48, 49]
        .number-cell(data-display="visibility")= x

Wir notieren alle natürlichen Zahlen in einem rechteckigen Raster, beginnend mit 1 in der Mitte
und gehen dabei spiralförmig nach außen. Dann markieren wir alle Primzahlen.

---
> id: ulam1

Bisher sieht die Ulam-Spirale nicht besonders aufregend aus. Aber wenn wir herauszoomen, entstehen
interessante Muster. Hier sind die Primzahlen bis zu 160.000:

    figure: img(src="images/ulam.png" width=399 height=399)

::: column.grow
Anstatt zufällig zu erscheinen, wie man es erwarten könnte, scheint es, dass bestimmte
Diagonalen bei Primzahlen viel beliebter sind als andere. Dadurch entsteht ein merkwürdiges
“Karomuster”.

_{.lgrey}Es stellt sich heraus, dass diese Diagonalen alle bestimmten quadratischen
Gleichungen entsprechen, die offenbar häufiger als der Durchschnitt Primzahlen erzeugen. Es ist jedoch
nicht bekannt, was der genaue Hintergrund dafür sein sollte...._

::: column(width=200)

    x-img(lightbox credit="© Scientific American" width=200 height=272 src="images/magazine.jpg")

{.caption} Titelbild der März-Ausgabe 1964 von Scientific American
:::

---
> id: goldbach1
> goals: calculator

### Die Goldbachsche Vermutung

1742 machte der deutsche Mathematiker [Christian Goldbach](bio:goldbach) eine
seltsame Entdeckung: Er bemerkte, dass alle geraden Zahlen (außer 2) als Summe zweier Primzahlen geschrieben
werden können. Zum Beispiel 8 = 5 + 3 und 24 = 13 + 11. Das
ist ziemlich überraschend, denn Primzahlen werden durch Multiplikation und Teiler
definiert - und sollten nicht viel mit Addition zu tun haben.

    .calculator
      h3 Goldbach Rechner
      p Wähle eine beliebige gerade Zahl, um zu berechnen, wie#[br]sie als Summe zweier Primzahlen geschrieben werden kann.
      input(type="number", min=4, step=2)
      .result.var(:html="result")

Goldbach schrieb über seine Beobachtung in einem Brief an den berühmten Mathematiker
[Leonhard Euler](bio:euler), aber keiner von ihnen konnte sie beweisen. So wurde
 sie bekannt als die __Goldbachsche Vermutung__.

Computer haben überprüft, dass die Goldbachsche Vermutung für jede gerade Zahl
bis zu 4 × 10<sup>18</sup> gilt (das ist eine 4 mit 18 Nullen), aber Mathematiker haben immer
noch keinen Beweis gefunden, dass sie für _alle_ geraden Zahlen zutrifft. Und das ist ein großer
Unterschied, denn es gibt unendlich viele gerade Zahlen, so dass wir nicht alle
überprüfen können.

Ihre scheinbare Einfachheit machte die Goldbachsche Vermutung zu einem der berühmtesten
ungelösten Probleme in der Mathematik.

---
> id: twin-primes

### Primzahlzwillinge

Wir haben bereits gesehen, dass Primzahlen mit zunehmender Größe immer weiter auseinanderliegen,
aber sie scheinen immer völlig zufällig aufzutreten, und gelegentlich finden wir zwei
Primzahlen direkt nebeneinander, nur eine Zahl auseinander: diese
werden __Primzahlzwillinge__ genannt.

    p.text-center
      span.twin
        span.number-ball 3
        span.number-ball 5
      | ,
      span.twin
        span.number-ball.blue 11
        span.number-ball.blue 13
      | ,
      span.twin
        span.number-ball.green 41
        span.number-ball.green 43
      | ,
      span.twin
        span.number-ball.yellow 101
        span.number-ball.yellow 103
      | ,
      span.twin
        span.number-ball 2027
        span.number-ball 2029
      | ,
      span.twin
        span.number-ball.blue 108.377
        span.number-ball.blue 108.379
      | ,
      span.twin
        span.number-ball.green 1.523.651
        span.number-ball.green 1.523.653

Das größte bekannte Paar von Primzahlzwillingen hat unglaubliche 58.711 Ziffern! Aber gibt
es unendlich viele Primzahlzwillinge, so wie es unendlich viele Primzahlen gibt?
Niemand weiß es - die _Primzahlzwillings-Vermutung_ ist eine weitere der vielen ungelösten
Probleme rund um die Primzahlen.

---
> id: riemann
> goals: zoom
> title: Distribution of the Primes

### Die Riemannsche Hypothese

Mathematiker haben viele Jahrhunderte damit verbracht, das Ordnungsmuster und die Verteilung
von Primzahlen zu erforschen. Sie scheinen völlig zufällig aufzutreten - manchmal gibt es
riesige Lücken zwischen aufeinanderfolgenden Primzahlen, und manchmal finden wir
[Primzahlzwillinge](gloss:twin-primes) direkt nebeneinander.

Bereits im Alter von 15 Jahren
hatte der deutsche Mathematiker [Carl Friedrich Gauß](bio:gauss) eine bahnbrechende neue Idee: Er zählte die Anzahl der Primzahlen bis zu einem bestimmten
Punkt und zeigte die Ergebnisse in einer Grafik an:

    figure(style="max-width:680px; position:relative;")
      svg(width=680 height=300 viewBox="0 0 680 300")
        line.axis(x1=0 y1=280 x2=680 y2=280)
        g.chart
          path.pi(fill="none" stroke="#0f82f2")
          path.log(fill="none" stroke="#cd0e66")
          g.small-primes
        g.numbers
      .zoom-icon: svg(viewBox="0 0 32 32" class="icon" width=32 height=32)
        use(xlink:href="/icons.svg#search")

Entlang der x-Achse stehen alle natürlichen Zahlen. Wann immer eine eine Primzahl ist, erhöht sich die
_{span.m-blue}Primzahlzählfunktion_ (__{.m-blue}blau__ dargestellt) um
eins. Wenn wir [herauszoomen](->#riemann_.zoom-icon), verläuft die blaue Linie sehr glatt. Gauß bemerkte
, dass die Form dieser Funktion der Funktion
_{span.m-red}`x/(log(x))`_ (__{.m-red}rot__ dargestellt) sehr ähnlich sieht. Er sagte voraus, dass die beiden
Funktionen immer “ungefähr gleich” sind, und das wurde 1896 bewiesen.

---
> id: riemann1
> title: The Riemann Hypothesis

Wie du oben sehen kannst, gibt es jedoch immer noch einen deutlichen Fehler zwischen der
tatsächlichen Anzahl der Primzahlen und der Näherung von Gauß. 1859 entdeckte der Mathematiker
[Bernhard Riemann](bio:riemann) eine Näherung, die viel
besser aussah, aber er konnte nicht beweisen, dass sie _immer_ gilt. Seine Idee
wurde bekannt als die __Riemannsche Hypothese__.

Hunderte von Mathematikern haben versucht, Riemanns Hypothese zu beweisen, aber alle
blieben ohne Erfolg. Sie wird oft als eines der schwierigsten und
wichtigsten ungelösten Probleme in der Mathematik angesehen. Im Jahr 2000 nannte das Clay Mathematics
Institute sie eines von sieben [__Millennium-Problemen__](gloss:millennium-prize)
 und versprach 1.000.000 Dollar für jeden Mathematiker, der es löst.

---

## Kleinstes gemeinsames Vielfaches

> id: race
> goals: race
> section: lcm

Auf einer Rundstrecke trainieren zwei Läufer. Der __{.m-blue}erste Läufer__
benötigt __{.m-blue}60__ Sekunden für eine Runde. Der __{.m-green}zweite Läufer__ benötigt nur
__{.m-green}40__ Sekunden für eine Runde. Wenn beide gleichzeitig von
der Startlinie losstarten, wann werden sie sich am Start wieder treffen?

    figure: include svg/race.svg

---
> id: race1

Bei dieser Frage geht es in Wirklichkeit nicht um die Geometrie der Rennstrecke oder um
Geschwindigkeit und Schnelligkeit - es geht um Vielfache und Teilbarkeit.

Der erste Läufer überquert die Startlinie nach 60s, 120s, 180s, 240s usw.
Dies sind einfach die [[Vielfachen|Teiler]] von __{.m-blue}60__. Der zweite Läufer
überquert die Startlinie nach 40s, 80s, 120s, 160s und so weiter. Das erste Mal, dass
beide Läufer wieder an der Startlinie sind, ist nach [[120]] Sekunden.

{.reveal(when="blank-0 blank-1")}Was wir gerade gefunden haben, ist die kleinste Zahl
, die sowohl ein Vielfaches von __{.m-green}40__ als auch ein Vielfaches von __{.m-blue}60__ ist,
was als das __kleinste gemeinsame Vielfache__ oder __kgV__ bezeichnet wird.

---
> id: race2

Um das kgV von zwei beliebigen Zahlen zu finden, ist es wichtig zu erkennen, dass, wenn
__{.m-blue}b__ durch __{.m-yellow}a__ teilbar ist, __{.m-blue}b__ alle
Primfaktoren von __{.m-yellow}a__ (und dann noch einige zusätzlich) beinhalten muss:

    table.table-tiny
      tr
        td.text-right: .number-ball.yellow 12
        td: .divides
        td.text-left: .number-ball.blue 60
      tr
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
        td
        td
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 2
          | &nbsp;×&nbsp;
          .number-ball.l-yellow 3
          | &nbsp;×&nbsp;
          .number-ball.l-blue 5

Das ist leicht zu überprüfen: Wenn ein Primfaktor __{.m-yellow}a__ teilt und
__{.m-yellow}a__ wiederum __{.m-green}b__ teilt, dann muss dieser Primfaktor _auch_
__{.m-green}b__ teilen.

---
> id: race3

Um den kgV von __{.m-green}40__ und __{.m-blue}60__ zu finden, müssen wir
zuerst die [Primfaktorzerlegung](gloss:factorisation) von beiden finden:

    table.table-tiny
      tr
        td: .number-ball.blue 40
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td(colspan=3): | ×
        td: .number-ball.l-blue 5
      tr
        td: .number-ball.green 60
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td: | ×
        td: .number-ball.l-green 5

Angenommen, __{.m-red}X__ ist das kgV von __{.m-green}40__ und __{.m-blue}60__.
__{.m-green}40__ teilt dann __{.m-red}X__, also müssen _{span.number-ball.small.l-blue}2_,
_{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}2_ und
_{span.number-ball.small.l-blue}5_ Primfaktoren von __{.m-red}X__ sein. Außerdem teilt
__{.m-blue}60__ __{.m-red}X__, weshalb __{span.number-ball.small.l-green}2__,
_{span.number-ball.small.l-green}2_, _{span.number-ball.small.l-green}3_ und
_{span.number-ball.small.l-green}5_ Primfaktoren von __{.m-red}X__ sein müssen.

---
> id: race4

Um __{.m-red}X__ zu finden, kombinieren wir einfach alle Primfaktoren von __{.m-green}40__
und __{.m-blue}60__, aber alle Duplikate benötigen wir nur einmal:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}2_ × _{span.number-ball.l-blue}2_ ×
_{span.number-ball.l-green}3_ × _{span.number-ball.l-blue-green}5_

Das ergibt __{.m-red}X__ = 120, genau wie wir es oben gesehen haben. Beachte, dass, wenn
der gleiche Primfaktor mehrfach vorkommt, wie oben 2, wir die
maximalen Vorkommen in einer der beiden Zahlen behalten müssen (3 mal in __{.m-green}40__ ist
mehr als 2 mal in __{.m-blue}60__).

---
> id: race5

Jetzt haben wir eine einfache Methode, um das kgV von zwei Zahlen zu finden:

    ol.proof
      li Mache die Primfaktorzerlegung für jede Zahl.
      li Fasse die Primfaktoren zusammen, nimm aber jeden doppelt vorkommenden Wert nur einmal.

Wir können die gleiche Methode verwenden, um das kgV von drei oder mehr Zahlen auf einmal zu finden,
zB von __{.m-blue}12__, __{.m-green}30__ und __{.m-yellow}45__:

    table.table-tiny
      tr
        td: .number-ball.blue 12
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td(colspan=3): | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5
      tr
        td: .number-ball.yellow 45
        td: | =
        td(colspan=4)
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 3
        td: | ×
        td: .number-ball.l-yellow 5

Jetzt ist das kgV von __{.m-blue}12__, __{.m-green}30__ und __{.m-yellow}45__ gleich
2 × [[2]] × 3 × 3 × [[5]] = 180.

---
> id: race6

Ein Sonderfall sind Primzahlen: Das kgV von zwei verschiedenen Primzahlen ist einfach
[[ihr Produkt|ihre Summe|ihre Differenz]], da sie keine gemeinsamen
Primfaktoren haben, die “gestrichen” werden würden.

---
> id: cicadas
> goals: bound-low bound-high

### Zikaden

::: column.grow
Nordamerika ist die Heimat verschiedener Zikadenarten. Diese haben die seltsame
Eigenschaft, dass sie nur alle paar Jahre im Sommer zum Brüten auftauchen - die
restliche Zeit verbringen sie unter der Erde.

So erscheinen beispielsweise die Zikaden in Florida und Mississippi alle 13 Jahre. Die
Zikaden in Illinois und Iowa erscheinen nur alle 17 Jahre. Aber es gibt keine
Zikaden mit Jahreszyklen von 12, 14, 15 oder 16 Jahren.
::: column(width=360)

    x-img(width=360 height=240 src="images/cicadas.jpg")

:::

Sowohl 13 als auch 17 sind Primzahlen - und das hat einen sehr guten Grund. Stell dir vor,
es gibt Raubtiere im Wald, die Zikaden töten. Diese Raubtiere treten auch
in regelmäßigen Abständen auf, zB alle 6 Jahre.

Stell dir nun vor, dass die Zikaden
alle ${n}{n|13|4,20,1} Jahre ausbrüten würden (${isPrime(n) ? 'Primzahl' : 'keine Primzahl'}). Die beiden Tiere würden alle
${lcm(n,6)} Jahre, was dem [[kgV|ggT|Produkt]] von 6 und ${n} entspricht, aufeinandertreffen.

    figure
      include svg/cicadas.svg
      p.caption Zeit bis sich Zikaden und Raubtiere treffen, für verschiedene Zikadenzykluslängen.

---
> id: cicadas1

Diese Zahl scheint viel größer zu sein, wenn der Zikadenzyklus eine Primzahl wie
13 und 17 ist. Das liegt daran, dass Primzahlen keine Teiler mit 6 gemeinsam haben, so dass wir
bei der Berechnung des kgV keine doppelten Teiler zu löschen haben.

Natürlich haben die Zikaden keine Ahnung, was Primzahlen sind - aber in Millionen von
Jahren hat die Evolution herausgefunden, dass Primzahlen für sie am sichersten sind. Das Raubtier
scheint im Laufe der Zeit ausgestorben zu sein, aber die Primzahlzyklen wurden beibehalten.

---

## Größter gemeinsamer Teiler

> id: gcd
> section: gcf

Eine Architektin plant den Boden für einen großen Innenhof, der 18m x
30m misst. Sie möchte, dass er mit den größtmöglichen quadratischen Fliesen bedeckt ist, ohne Lücken oder Überlappungen
an den Seiten. Welche Abmessungen haben diese Quadrate?

    figure
      include svg/floorplan.svg
      p.text-center.md Die Fliesen haben eine Größe von ${x}{x|3|1,18,1}m.#[br]#[span.result.var]

---
> id: gcd1

Wie zuvor geht es bei dieser Frage nicht um Geometrie, sondern um
die Teilbarkeit. Die Länge der Seiten der Fliesen muss sowohl 18 als auch 30 teilen,
und die größtmögliche Zahl die das erfüllt ist [[6]]. Man spricht vom
__größten gemeinsamen Teiler__ oder __ggT__ von 18 und 30.

---
> id: gcd2

Auch hier können wir mit der [Primfaktorzerlegung](gloss:factorisation) den ggT von zwei beliebigen Zahlen
berechnen. Bedenke, dass jeder Teiler einer Zahl
einige der Primfaktoren dieser Zahl beinhalten muss.

    table.table-tiny
      tr
        td: .number-ball.blue 18
        td: | =
        td: .number-ball.l-blue 2
        td: | ×
        td: .number-ball.l-blue 3
        td: | ×
        td: .number-ball.l-blue 3
      tr
        td: .number-ball.green 30
        td: | =
        td: .number-ball.l-green 2
        td: | ×
        td: .number-ball.l-green 3
        td(colspan=3): | ×
        td: .number-ball.l-green 5

Angenommen, __{.m-red}X__ ist der ggT von __{.m-green}18__ und __{.m-blue}30__,
dann lässt sich __{.m-green}18__ durch __{.m-red}X__ teilen, weshalb die Primfaktoren von __{.m-red}X__
auch _{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}3_
und _{span.number-ball.small.l-blue}3_ beinhalten müssen. Außerdem lässt sich __{.m-blue}30__ auch durch __{.m-red}X__
teilen, weshalb die Primfaktoren von __{.m-red}X__ ebenso _{span.number-ball.small.l-green}2_,
_{span.number-ball.small.l-green}3_ und _{span.number-ball.small.l-green}5_ beinhalten müssen.

---
> id: gcd3

Um __{.m-red}X__ zu finden, müssen wir einfach alle Zahlen multiplizieren, die Primfaktoren
von __{.m-green}18__ [[und|oder]] __{.m-blue}30__ sind:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}3_ &nbsp;=&nbsp; 6.

---
> id: gcd4

Jetzt haben wir eine einfache Methode, um den ggT von zwei Zahlen zu bestimmen:

    ol.proof
      li Mache die Primfaktorzerlegung für jede Zahl.
      li Multipliziere die gemeinsamen Primfaktoren beider Zahlen.

Auch hier gilt für Primzahlen etwas Besonderes: Der ggT von zwei verschiedenen Primzahlen ist immer
[[1]], da sie keine Primfaktoren miteinander teilen.

---
> id: crypto

### Kryptographie

::: column.grow
Eine der wichtigsten modernen Anwendungen von Primzahlen liegt in einem
mathematischen Gebiet namens __Kryptographie__. Seit Jahrtausenden versuchen
Menschen, Nachrichten irgendwie geheim zu halten, sodass nur der vorgesehene Empfänger sie lesen kann - das
nennt man Verschlüsselung. Sie wird von allen genutzt, von Generälen, die geheime
Befehle während des Krieges austauschen, bis hin zu persönlichen E-Mails oder Online-Banking-Details.

Die Menschen versuchten immer bessere und sicherere Verschlüsselungsmethoden zu entwickeln, aber
nach einiger Zeit wurden sie alle mit noch fortschrittlicheren Algorithmen geknackt. Im
Zweiten Weltkrieg nutzte die deutsche Wehrmacht die Enigma: eine komplexe Maschine,
die aus einer Tastatur, rotierenden Walzen und Steckern bestand. Sie verschlüsselte Nachrichten mit einer von 158
Millionen Millionen Millionen Möglichkeiten (also 158 gefolgt von 18 Nullen!). Der
Code galt allgemein als unknackbar, aber der britische Geheimdienst, angeführt
vom Mathematiker Alan Turing, baute einige der ersten Computer, die es schafften, ihn zu
entschlüsseln.
::: column(width=240)

    x-img(lightbox credit="Magnus Manske, via Wikipedia" width=240 height=344 src="images/enigma.jpg")
    p.caption Deutsche Enigma-Maschine mit 4 Walzen

:::

Die heutigen Computer sind viel fortschrittlicher und in der Lage, jede Sekunde Millionen von
Möglichkeiten durchzuprobieren. Um bessere Verschlüsselungsalgorithmen zu entwickeln, muss man eine mathematische Operation
finden, die selbst für leistungsfähige Computer schwierig ist:
Computer sind unglaublich schnell bei Addition, Subtraktion, Multiplikation und
Division. Wie sich jedoch herausstellt, sind Computer sehr langsam dabei,
große Zahlen in Primzahlen zu zerlegen....

---
> id: crypto1

{.todo} Demnächst - RSA-Beispiel mit Alice und Bob

Dieser Verschlüsselungsalgorithmus heißt __RSA Verschlüsselung__, nach seinen drei
Erfindern Ron Rivest, Adi Shamir und Leonard Adleman, die ihn 1977 veröffentlichten.
Es stellte sich heraus, dass dem britischen Geheimdienst
seit 1973 eine sehr ähnliche Methode bekannt war, die aber lange Zeit geheim gehalten wurde.

Heute werden Primzahlen von Computern auf der ganzen Welt zum Austausch von Daten verwendet.
Wenn du im Internet surfst oder Chat-Nachrichten sendest, erzeugt dein Telefon oder Laptop
im Hintergrund große Primzahlen und tauscht öffentliche Schlüssel mit anderen
Computern aus.
