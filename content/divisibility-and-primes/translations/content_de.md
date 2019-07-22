# Teilbarkeit und Primzahlen

## Teiler und Vielfache

> section: factors-and-multiples
> id: divisibility1

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
von ganzen Zahlen vertraut sein. Die Division ist etwas anders, da man nicht immer eine ganze
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
[[Teiler|Vielfaches]] von __{.orange}21__, __{.orange}21__ ist ein [[Vielfaches|Teiler]]
von __{.green}7__, und __{.green}7__|__{.orange}21__.

---
> id: divisibility-game

In diesem kurzen Spiel sollst du
so schnell wie möglich bestimmen, welche Zahlen Teiler oder Vielfache sind. Klicke auf den [Startknopf](->#divisibility-game_.toggle), um zu beginnen.

    .box.problem-box
      .box-title: h3 Teiler und Vielfache Quiz
      x-gameplay.box-body
        .factors-row
          .factor-number ${x}
          | ist
          .factor-value
            .factor-bubble: .btn.btn-blue Teiler
            .factor-bubble: .btn.btn-blue Vielfaches
            .factor-bubble: .btn.btn-blue Keines
          | von
          .factor-number ${y}

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

    +divisor-table([1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60], [5, 4, 3, 2, 1, 0])

Um alle Teiler einer Zahl zu finden, beginnen wir einfach an beiden Enden dieser Liste,
bis wir in der Mitte angelangt sind.

---
> id: factors2

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

    //- TODO Factorisation exercises

---
> id: divisibility2
> section: divisibility-rules

## Teilbarkeitsregeln

Es gibt ein paar verschiedene Regeln, die es dir überraschend einfach machen können, zu überprüfen, ob eine
Zahl durch eine andere teilbar ist. In diesem Abschnitt werden wir einen Blick auf einige von
ihnen werfen....


### Teilbarkeit durch 2 und 5

Jede Zahl ist durch 1 teilbar. Um festzustellen, ob eine Zahl durch 2 teilbar ist, müssen wir
einfach prüfen, ob sie gerade ist: Jede Zahl, die auf 0, 2, 4, 6 oder 8 endet, ist durch 2
teilbar.

    +grid(30)

---
> id: divisibility5

Um zu sehen, ob eine Zahl durch 5 teilbar ist, müssen wir ebenfalls nur überprüfen, ob ihre
letzte Ziffer 0 oder 5 ist:

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

Das ist zufällig die Quersumme! Wenn also die <x-target no-margins
to=".digit-sum-is">Quersumme</x-target> ein Vielfaches von 3 ist, und wir
wissen, dass <x-target no-margins to=".digit-sum-else">alles andere</x-target>
ein Vielfaches von 3 ist, dann muss das Ergebnis auch ein Vielfaches von 3 sein.

---
> id: divisibility6
> goals: btn2 btn3

### Teilbarkeit durch 6

Wir haben jetzt die Nummer 6 übersprungen - aber wir haben bereits die eigentliche Arbeit geleistet.
Wie du weißt ist 6 = 2 × 3.

    +grid(40)
    p.btn-row.text-center(style="margin-bottom:1em")
      button.btn.btn-small(data-display="visibility") Vielfache von 2
      button.btn.btn-small(data-display="visibility") Vielfache von 3

Um zu überprüfen, ob eine Zahl durch 6 teilbar ist, müssen wir nur prüfen, ob sie durch 2 [[und auch|oder]] durch 3
teilbar ist. Beachte, dass dies
zwar für 6 funktioniert, aber sicherlich nicht für _jede_ Zahl, die das Produkt von zwei anderen ist.
Mehr dazu später....

    //- TODO Practice exercises

---
> id: primes
> section: prime-numbers

## Prime Numbers

When calculating these divisor pairs, it can happen that a number doesn’t have
any divisors except for the first pair. One example is 13 – its only divisors
are 1 and 13 itself. These special numbers are called __Prime numbers__. They
can’t be broken up into products of smaller numbers, which, in a way, makes them
the “atoms of numbers”.

Note that 1 itself is _not_ a prime number, so the first few prime numbers are
2, 3, 5, 7, 11, 13, …

    //- TODO Exercises

---
> id: primes1

Any number which is not prime can be written as the product of prime numbers: we
simply keep dividing it into more parts until all factors are prime. For example,

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

Now 2, 3 and 7 are prime numbers and can’t be divided further. The product
2 × 2 × 3 × 7 is called the __prime factorisation__ of 84, and 2, 3 and 7 are
its __prime factors__. Note that some primes, like 2 in this case, can appear
multiple times in a prime factorisation.

Every integer has a prime factorisation and no two integers have the same prime
factorisation. Furthermore, there is only a single way to write any number as a
product of primes – unless we count different orderings of the primes. This is
called the __Fundamental Theorem of Arithmetic__ (FTA).

Using the FTA can make many problems in mathematics much easier: we divide
numbers into their prime factors, we solve the problem for the individual
primes, which can often be much easier, and then we combine these results to
solve the initial problem.

    //- TODO Exercises

---
> id: eratosthenes

### The Sieve of Eratosthenes

It turned out to be quite difficult to determine if a number is prime: you
always had to find _all_ its prime factors, which gets more and more challenging
as the numbers get bigger. Instead, the Greek mathematician [Eratosthenes of
Cyrene](bio:eratosthenes) came up with a simple algorithm to find all prime
numbers up to 100: the __Sieve of Eratosthenes__.

    x-slideshow
      .stage(slot="stage")
        +grid(100)
      .legend(slot="legend") First we need to write down all numbers up to 100.
      .legend(slot="legend") We know that 1 is not prime, so we delete it.
      .legend(slot="legend") The smallest prime number is #[strong.m-red 2]. Any multiple of 2 can’t be prime, since it has 2 as a factor. Therefore we can cross out all multiples of 2.
      .legend(slot="legend") The next number in our list is #[strong.m-blue 3] – again a prime number. All multiples of 3 can’t be prime, since they have 3 as a factor. Therefore we can cross these out as well.
      .legend(slot="legend") The next number, 4, is already crossed out so we move on to #[strong.m-green 5]: it is a prime number and again we cross out all multiples of 5.
      .legend.md(slot="legend") The next prime number must be [[7]], since 6 is crossed out. Once more, we cross out all of its multiples.
      .legend.md(slot="legend") The next prime number is [[11]]. Notice, however, that all of its multiples are [[already crossed out|multiples of 3]]. The same is actually true for all other remaining numbers. Therefore all these remaining numbers must be prime.

Now we can count that, in total, there are [[25]] prime numbers less than 100.

---
> id: primes3

### How many Prime Numbers are there?

::: column.grow
Of course we can also use the Sieve of Eratosthenes to find larger prime
numbers. There are 21 primes between 100 and 200, 16 primes between 200 and 300,
17 primes between 400 and 500 and only 11 between 10,000 and 10,100.

The primes seem to keep getting more and more spread out, but do they ever stop?
Is there a _biggest_ or a _last_ prime number?

The ancient Greek mathematician [Euclid of Alexandria](bio:euclid) first proved
that there are infinitely many prime numbers, using the following argument:
::: column(width=220)

    x-media(lightbox width=220 height=300 src="images/euclid.jpg")

:::

    ol.proof
      li Suppose there were only finitely many prime numbers.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P]
      li Let us multiply all of them together, to get a very large number which we call #[em N].
        .text-center #[em.number-ball N] = #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P] × #[em.number-ball.blue P]
      li Now let’s think about #[em N] + 1. Any prime number that divides #[em N] can’t also  divide #[em N] + 1. And since all prime numbers we have found so far divide #[em N], none of these can also divide #[em N] + 1.
        .text-center #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[em.number-ball.blue P], #[.number-ball.blue P] #[span.divides] #[em.number-ball N]
        .text-center #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[em.number-ball.blue.cross P], #[.number-ball.blue.cross P] #[span.divides] #[em.number-ball N] + 1
      li.md We know from the [Fundamental Theorem of Arithmetic](gloss:fta) that #[em N] + 1, must have a prime factor. Either #[em N] + 1 is itself prime, or there is some other new prime #[em P’] that divides #[em N] + 1.
        .text-center #[em.number-ball.green P’] #[span.divides] #[em.number-ball N] + 1
      li In both cases we’ve found a new prime not in our original list – but we assumed that #[em all] primes were in this list.
      li Clearly something went wrong! But since steps #[span.proof-step 2]–#[span.proof-step 4] were definitely valid, the only possibility is that our initial assumption in #[span.proof-step 1] was wrong. This means there must actually be infinitely many primes.

    // Notice that any prime that divides N cannot divide N + 1. (If it would,
    // it also had to divide the difference between N and N + 1 which is 1. But
    // the only number that divides 1 is 1 itself.)

---
> id: primes4

Euclid’s explanation is one of the first examples in history of a formal
mathematical __proof__ – a logical argument that shows a statement must
definitely be true. This example is often called __proof by contradiction__: we
start with an assumption, deduce something impossible, and thus know that our
assumption must be incorrect.

---
> id: prime-test
> goals: calculator
> section: the-distribution-of-primes

## The Distribution of Primes

The easiest way to check if a number is prime, is to try to divide it by all
smaller integers. Computers can do this very quickly and efficiently. For _very
large_ numbers, with hundreds of digits, there are also more efficient
algorithms. Some of these even use probability to determine if a number is
_almost certainly_ prime.

Here is a calculator that allows you to check if any number is prime:

    .calculator
      h3 Prime Checker
      input(type="number" min="2")
      p.result.var ${result}

---
> id: prime-test-1

::: column.grow

Throughout history, people have tried to find larger and larger prime numbers.
In 1460, the largest known prime was 131,071. In 1772, [Leonard Euler](bio:euler)
showed that 2,147,483,647 is also prime.

With the arrival of computers in the 20th century, calculating large primes
became much easier. The largest currently known prime was discovered in
December 2018 and has 24,862,048 digits. You would need 8000 sheets of paper to
print it out!

::: column(width=300)

    img(src="images/network.jpg" width=300 height=200)

{.caption} GIMPS (_Great Internet Mersenne Prime Search_) is a collaborative
project, where volunteers can find primes using free software.

:::

---
> id: prime-generator
> goals: calculator

Calculating these large prime numbers might seem like just a waste of time, but
later in this course you’ll learn about various real life applications where
computers have to use large primes.

Here you can generate your own prime numbers with a given number of digits:

    .calculator
      h3 Prime Generator
      p.md Number of digits: ${d}{d|6|2,16,1}
      p(style="margin: 10px 0"): button.btn.btn-white Generate
      p.result.var ${result}

---
> id: ulam

    //- Stanislaw M. Ulam was doodling during the presentation of a "long and very boring paper" at a scientific meeting in 1963.

### The Ulam Spiral

The Polish mathematician [Stanisław Ulam](bio:ulam) came up with a cool way to
show the distribution of large prime numbers, while doodling during a _“long and
very boring”_ meeting in 1963.

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

We write down all integers in a rectangular grid, starting with 1 in the middle
and then spiralling outwards. Then we highlight all numbers which are prime.

---
> id: ulam1

So far, the Ulam spiral doesn’t look particularly exciting. But if we zoom out,
interesting patterns emerge. Here are the primes up to 160,000:

    figure: img(src="images/ulam.png" width=399 height=399)

::: column.grow
Rather than appearing randomly, as one might expect, it seems that certain
diagonals are much more popular with primes than others. This creates a curious
“plaid” pattern.

_{.lgrey}It turns out that these diagonals all correspond to certain quadratic
equations which seem to generate prime numbers more often than average. However
it is unknown why that would be the case…_
::: column(width=200)

    x-media(lightbox credit="© Scientific American" width=200 height=272 src="images/magazine.jpg")

{.caption} Cover of the March 1964 issue of Scientific American
:::

---
> id: goldbach1
> goals: calculator

### The Goldbach Conjecture

In 1742, the German mathematician [Christian Goldbach](bio:goldbach) made a
curious discovery: he noticed that all even integers (except 2) can be written
as the sum of two prime numbers. For example, 8 = 5 + 3 and 24 = 13 + 11. This
is quite surprising, because primes are defined using multiplication and factors
– and shouldn’t have much to do with addition.

    .calculator
      h3 Goldbach Calculator
      p Pick any even number, to calculate how it#[br]can be written as the sum of two primes.
      input(type="number", min=4, step=2)
      p.result.var ${result}

Goldbach wrote about his observation in a letter to the famous mathematician
[Leonhard Euler](bio:euler), but neither of them was able to prove it. It became
known as the __Goldbach Conjecture__.

Computers have checked that the Goldbach Conjecture works for every even number
up to 4 × 10<sup>18</sup> (that’s a 4 with 18 zeros), but mathematicians have still
not found a proof that it works for _all_ even integers. And that is a big
difference, because there are infinitely many integers, so we couldn’t possibly
check all of them.

Its apparent simplicity made the Goldbach conjecture one of the most famous
unsolved problems in mathematics.

---
> id: twin-primes

### Twin Primes

We have already seen that prime numbers get more spread out as they get bigger.
But they always seem to appear completely random, and occasionally we find two
primes right next to each other, just one number apart: these are called __Twin
Primes__.

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
        span.number-ball.blue 108,377
        span.number-ball.blue 108,379
      | ,
      span.twin
        span.number-ball.green 1,523,651
        span.number-ball.green 1,523,653

The largest known pair of twin primes has an incredible 58,711 digits! But are
there infinitely many twin primes, just like there are infinitely many primes?
Nobody knows – the _Twin Prime conjecture_ is another one of the many unsolved
problems surrounding the primes.

---
> id: riemann
> goals: zoom
> title: Distribution of the Primes

### The Riemann Hypothesis

Mathematicians have spent many centuries exploring the pattern and distribution
of prime numbers. They seem to appear completely randomly – sometimes there are
huge gaps in between consecutive primes, and sometimes we find [twin
primes](gloss:twin-primes) right next to each other.

When only 15 years old, the German mathematician [Carl Friedrich Gauss](bio:gauss)
had a groundbreaking new idea: he counted the number of primes up to a certain
point, and showed the results in a chart:

    figure(style="max-width:680px; position:relative;")
      svg(width=680 height=300 viewBox="0 0 680 300")
        line.axis(x1=0 y1=280 x2=680 y2=280)
        g.chart
          path.pi(fill="none" stroke="#1f7aff")
          path.log(fill="none" stroke="#b30469")
          g.small-primes
        g.numbers
      .zoom-icon: svg(viewBox="0 0 32 32" class="icon" width=32 height=32)
        use(xlink:href="/icons.svg#search")

Along the x-axis you can see all integers. Whenever there is a prime, the
_{span.m-blue}Prime Counting Function_ (shown in __{.m-blue}blue__) increases by
one. As we [zoom out](->#riemann_.zoom-icon), the blue line becomes very smooth.
Gauss noticed that the shape of this function looks very similar to the function
_{span.m-red}`x/(log(x))`_ (shown in __{.m-red}red__). He predicted that the two
functions are always “approximately similar”, and this was proven in 1896.

---
> id: riemann1
> title: The Riemann Hypothesis

However, as you can see above, there is still a significant error between the
actual number of primes, and Gauss’s approximation. In 1859, the mathematician
[Bernhard Riemann](bio:riemann) discovered an approximation that looked much
better, but he wasn’t able to prove that that would _always_ work. His idea
became known as the __Riemann Hypothesis__.

Hundreds of mathematicians have tried to prove Riemann’s hypothesis, but all
without success. It is often considered one of the most difficult and most
important unsolved problems in mathematics. In 2000, the Clay Mathematics
Institute named it one of six [__Millennium Prize Problems__](gloss:millennium-prize)
and promised $1,000,000 to any mathematician who solves it.

---
> id: race
> goals: race
> section: least-common-multiple

## Least Common Multiples

Two runners are training on a circular racing track. The __{.m-blue}first runner__
takes __{.m-blue}60__ seconds for one lap. The __{.m-green}second runner__ only
takes __{.m-green}40__ seconds for one lap. If both leave at the same time from
the start line, when will they meet again at the start?

    figure: include svg/race.svg

---
> id: race1

This question really isn’t about the geometry of the race track, or about
velocity and speed – it is about multiples and divisibility.

The first runner crosses the start line after 60s, 120s, 180s, 240s, and so on.
These are simply the [[multiples|factors]] of __{.m-blue}60__. The second runner
crosses the start line after 40s, 80s, 120s, 160s, and so on. The first time
both runners are back at the start line is after [[120]] seconds.

{.reveal(when="blank-0 blank-1")} What we’ve just found is the smallest number
which is both a multiple of __{.m-green}40__ and a multiple of __{.m-blue}60__.
This is called the __least common multiple__ or __lcm__.

---
> id: race2

To find the lcm of any two numbers, it is important to realise that if
__{.m-yellow}a__ divides __{.m-blue}b__, then __{.m-blue}b__ needs to have all
the prime factors of __{.m-yellow}a__ (plus some more):

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

This is easy to verify: if a prime factor divides __{.m-yellow}a__, and
__{.m-yellow}a__ divides __{.m-green}b__, then that prime factor must _also_
divide __{.m-green}b__.

---
> id: race3

To find the lcm of __{.m-green}40__ and __{.m-blue}60__, we first need to find
the [prime factorisation](gloss:factorisation) of both:

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

Suppose that __{.m-red}X__ is the lcm of __{.m-green}40__ and __{.m-blue}60__.
Then __{.m-green}40__ divides __{.m-red}X__, so _{span.number-ball.small.l-blue}2_,
_{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}2_ and
_{span.number-ball.small.l-blue}5_ must be prime factors of __{.m-red}X__. Also,
__{.m-blue}60__ divides __{.m-red}X__, so __{span.number-ball.small.l-green}2__,
_{span.number-ball.small.l-green}2_, _{span.number-ball.small.l-green}3_ and
_{span.number-ball.small.l-green}5_ must be prime factors of __{.m-red}X__.

---
> id: race4

To find __{.m-red}X__, we simply combine all the prime factors of __{.m-green}40__
and __{.m-blue}60__, but any duplicates we only need once:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}2_ × _{span.number-ball.l-blue}2_ ×
_{span.number-ball.l-green}3_ × _{span.number-ball.l-blue-green}5_

This gives us that __{.m-red}X__ = 120, just like we saw above. Notice that if
the same prime factor appears multiple times, like 2 above, we need to keep the
maximum occurrences in one of the two numbers (3 times in __{.m-green}40__ is
more than 2 times in __{.m-blue}60__).

---
> id: race5

Now we have a simple method for finding the lcm of two numbers:

    ol.proof
      li Find the prime factorisation of each number.
      li Combine all prime factors, but only count duplicates once.

We can use the same method to find the lcm of three or more numbers at once,
like __{.m-blue}12__, __{.m-green}30__ and __{.m-yellow}45__:

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

Therefore the lcm of __{.m-blue}12__, __{.m-green}30__ and __{.m-yellow}45__ is
2 × [[2]] × 3 × 3 × [[5]] = 180.

---
> id: race6

A special case are prime numbers: the lcm of two different primes is simply 
their [[product|sum|difference]], because they don’t have any common prime
factors which would get “canceled”.

    //- TODO Exercises

---
> id: gcd
> section: greatest-common-factor

## Greatest Common Factors

An architect is planning the floor for a large courtyard that measures 18m by
30m. She wants it to be covered in quadratic tiles, without any gaps or overlaps
along the sides. What is the largest size of squares she can use?

    figure
      include svg/floorplan.svg
      p.text-center.md The tiles have a size of ${x}{x|3|1,18,1}m.#[br]#[span.result.var]

---
> id: gcd1

Just like before, this question is not about geometry - it is about
divisibility. The length of the sides of the tiles has to divide both 18 and 30,
and the largest possible number with that property is [[6]]. This is called the
__Greatest Common Divisor__ or __gcd__ of 18 and 30.

---
> id: gcd2

Once again, we can use the [prime factorisation](gloss:factorisation) to
calculate the gcd of any two numbers. Remember that any divisor of a number
must have some of the prime factors of that number.

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

Suppose that __{.m-red}X__ is the gcd of __{.m-green}18__ and __{.m-blue}30__.
Then __{.m-red}X__ divides __{.m-green}18__ so the prime factors of __{.m-red}X__
must be among _{span.number-ball.small.l-blue}2_, _{span.number-ball.small.l-blue}3_
and _{span.number-ball.small.l-blue}3_. Also, __{.m-red}X__ divides __{.m-blue}30__
so the prime factors of __{.m-red}X__ must be among _{span.number-ball.small.l-green}2_,
_{span.number-ball.small.l-green}3_ and _{span.number-ball.small.l-green}5_.

---
> id: gcd3

To find __{.m-red}X__, we simply need to multiply all numbers which are  prime
factors of [[both|one of]] __{.m-green}18__ and __{.m-blue}30__:

{.text-center} __{.m-red}X__ &nbsp;=&nbsp; _{span.number-ball.l-blue-green}2_ ×
_{span.number-ball.l-blue-green}3_ &nbsp;=&nbsp; 6.

---
> id: gcd4

Now we have a simple method for finding the gcd of two numbers:

    ol.proof
      li Find the prime factorisation of each number.
      li Multiple the prime factors which are in both numbers.

Once again prime numbers are special: the gcd of two different primes is always
[[1]], because they don’t share any prime factors.

---
> id: cicadas
> goals: bound-low bound-high
> section: real-life-applications

## Real Life Applications

### Cicadas

::: column.grow
North America is home to various broods of cicadas. These have the curious
property that they only emerge every few years during the summer to breed – the
remaining time they spend underground.

For example, the cicadas in Florida and Mississippi appear every 13 years. The
cicadas in Illinois and Iowa only appear every 17 years. But there are no
cicadas with 12, 14, 15 or 16 year cycles.
::: column(width=360)

    x-media(width=360 height=240 src="images/cicadas.jpg")

:::

Both 13 and 17 are prime numbers – and that has a very good reason. Imagine that
there are predators in the forest which kill cicadas. These predators also
appear in regular intervals, say every 6 years.

Now imagine that a brood of cicadas appears every ${n}{n|13|4,20,1} years
(${isPrime(n) ? 'prime' : 'not prime'}). The two animals would meet every
${lcm(n,6)} years, which is the [[lcm|gcd|product]] of 6 and ${n}.

    figure
      include svg/cicadas.svg
      p.caption Time until cicadas and predators meet, for various different cicada cycle lengths.

---
> id: cicadas1

This number seems to be much larger if the cicada cycle is a prime number like
13 and 17. That’s because prime numbers don’t share any factors with 6, so
when calculating the lcm we don’t cancel any duplicate factors.

Of course, cicadas have no idea what prime numbers are – but over millions of
years, evolution has worked out that prime cycles are the safest. The predator
animal seems to have gone extinct over time, but the prime number cycles remain.

    //- TODO Exercises

---
> id: crypto

### Cryptography

::: column.grow
One of the most important modern applications of prime numbers is in a field of
mathematics called __Cryptography__. For thousands of years, people have tried
to conceal messages so that only the intended recipient could read them – this
is called encryption. It is used by everyone from generals exchanging secret
orders during wars to personal emails or online banking details.

People always tried to come up with better, more secure encryption methods, but
after some time, they were all broken using yet more advanced algorithms. In the
Second World War, the German army used the Enigma: a complex machine consisting
of a keyboard, rotating wheels and plugs. It encrypted messages using one of 158
million million million possibilities (that’s a 158 followed by 18 zeros!). The
code was widely believed to be unbreakable, but the British Secret Service, led
by mathematician Alan Turing, built some of the first computers that managed to
decode it.
::: column(width=240)

    x-media(lightbox credit="Magnus Manske, via Wikipedia" width=240 height=344 src="images/enigma.jpg")
    p.caption German four-rotor Enigma machine

:::

Today’s computers are much more advanced, capable of trying millions of
possibilities every second. To develop better encryption algorithms, you have to
find a mathematical operation that is difficult even for powerful computers.
Computers are incredibly fast at addition, subtraction, multiplication and
division. However, as it turns out, computers are very slow at factorising
large integers into primes…

---
> id: crypto1

{.todo} COMING SOON – RSA example with Alice and Bob

This encryption algorithm is called __RSA Cryptography__, after its three
inventors, Ron Rivest, Adi Shamir and Leonard Adleman who published it in 1977.
It turns out that a very similar method was known to the British Secret Service
since 1973, but remained classified until much later.

Today, prime numbers are used by computers all over the world to exchange data.
As you browse the internet or send chat messages, your phone or laptop will
quietly generate large prime numbers and exchange public keys with other
computers.
