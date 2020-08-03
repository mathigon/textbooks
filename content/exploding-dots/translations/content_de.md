# Explodierende Punkte

## Stufen zur Unendlichkeit

> section: infinity
> id: race

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
und so weiter. _{button.next-step} Continue_

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
Zahlenfolge (gloss:sequence), die auf der Zahlengeraden stetig nach rechts wandert
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
[Punkt und Anti-Punkt-Paar] (gloss:anti-dot) zu erstellen. Dadurch wird die Zahl nicht
verändert.

{.reveal(when="d1")} Klicke jetzt auf den [Explodieren-Knopf](->#dots_button), um
die Zahl mit Hilfe der `1←10` Regel zu vereinfachen.

{.reveal(when="x1")} Das Gleiche machen wir nun mit dem [ zweiten Dezimalfeld
(->#dots_.dot-decimal+.dot-cell+.dot-cell). Füge zuerst ein Punkt/Anti-Punkt-Paar
hinzu und drücke dann auf Explodieren. Beachte, wie sich das Punkt/Anti-Punkt-Paar
gegenseitig aufhebt! Das wird [Auslöschung](gloss:dot-annihilation) genannt. Die sich
ergebende Zahl hat sich nicht verändert und ist immer noch 0,9999… Fahre mit den
verbleibenden Zellen fort.

{.reveal(when="d3 x3 d4 x4")} Wenn wir ewig so weitermachen, dann sieht es so aus,
als würden wir tatsächlich zeigen, dass 0,9999… das Gleiche ist wie 1,0000…!

---

### Eine algebraische Erklärung

Wenn du immer noch nicht überzeugt bist, dann schauen wir uns zum Abschluss noch eine
algebraische Erklärung an. Wenn wir uns einig sind, dass 0.9999... eine gültige Zahl
ist (die 1 sein kann oder auch nicht), dann macht es Sinn anzunehmen, dass sie auch
allen sonstigen, üblichen Regeln der Arithmetik gehorcht.

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
denn dasselbe algebraische Argument kann zu philosophischen Problemen führen - wie wir im
nächsten Abschnitt sehen werden…



--------------------------------------------------------------------------------



## Außergewöhnliche Zahlen

> section: unusual

In the [previous section](/course/exploding-dots/infinity), we looked at a
number with infinitely many 9s to the right of the decimal point:

{.text-center} __0.999999…__

Now, let’s see what happens if we add infinitely many 9s to the _left_ of the
decimal point:

{.text-center} __…999999__

---

If we assume that this is a meaningful number (and not, for example, just
“infinity”), we can try to use the same algebraic argument as before, to work
out its value:

    ol.proof.s-yellow
      li Let’s start by giving the number a name, say #[.ivar A] for #[strong.m-yellow Allistaire]:
        .text-center.r #[.ivar A] = …999999#[button.next-step Continue]
      li.reveal(when="next-0") Now multiply it by 10. This gives us
        .text-center.r 10#[.ivar A] = …999990#[button.next-step Continue]
      li.reveal(when="next-1") Notice that #[.ivar A] and 10#[.ivar A] only differ in their final digit. Therefore, if we subtract the equation in step 1 from the equation in step 2, we get
        .text-center.r 9#[.ivar A] = –9#[button.next-step Continue]
      li.reveal(when="next-2") Finally, if we divide both sides by 9, we get
        .text-center.md #[.ivar A] = [[-1]]

---

In other words, we have just shown that _{strong.m-yellow.nowrap}…999999_ = −1.
Apparently, if we pulled out an infinite calculator and computed the sum of 9 +
90 + 900 + 9000 + …, the result would be −1!

_Do you believe that?_

    figure: x-img(src="images/confused.gif" alt="Confused GID" width=200 height=200)

---

### Unusual Arithmetic

Even though …9999999 is clearly not a “normal” number, let’s assume for now that
it exists, and that it follows the basic laws of arithmetic. If that is the
case, we’d expect …9999999 + 1 = [[0]].

---
> id: dots-1
> goals: dot

Let’s use a [`1←10` machine](gloss:dot-machine) to see if that is actually the
case. Click somewhere in the 1s cell to add 1:

    x-dot-machine(cells="…99999")
    x-gesture(target="#dots-1 .dot-cell:last-child")

---

Looks like this actually worked! If we add 1 to _{span.nowrap}…9999999_, the
result is 0.

But remember: all we have shown is that __IF__ we choose to believe that …999999
is a meaningful number that follows our usual laws of arithmetic, __THEN__ it
must have value –1. Most people simply say that it _isn’t_ a number and stop
there – and that is a perfectly valid view.

This begs the question: is there an _unusual_ system of arithmetic for which
…999999 is a meaningful number?

::: .box.f-blue
#### Challenge

Let’s make matters worse! Consider the number with infinitely many 9s both to
the left _and_ to the right of the decimal point: __{.m-red.nowrap}…9999.9999…__.
Try to use the same algebraic argument to show that this equals __{.m-red}zero__.

*Somehow this makes sense, because __{.m-red.nowrap}…9999.9999…__ =
__{.m-green.nowrap}…9999__ + __{.m-yellow.nowrap}0.9999…__ = __{.m-green}−1__ +
__{.m-yellow}1__ = __{.m-red}0__.*

:::

_{button.next-step} Continue_

---
> id: warp-1

### Warping the Number Line

In the previous chapter, we saw that _{span.nowrap}0.999999… = 1_. This seems
somewhat plausible, because the sequence of approximations 0.9, 0.99, 0.999,
0.9999, and so on, get closer and closer to 1.

In this example, the exact opposite happens: the numbers 9, 99, 999, 9999, and
so on, are marching further and further away from –1. That’s why it is so
abstruse to think that _{span.nowrap}…999999_ could possibly equal –1.

    figure: include svg/number-line-1.svg

_{button.next-step} Continue_

---
> id: warp-2

It turns out, however, that it _is_ possible to develop a new arithmetic system
in which numbers like _{span.nowrap}…999999_ are meaningful. To do that, we just
have to change how we measure “distance” between numbers on the number line.

Usually, _distance_ is defined using __addition__ and __subtraction__. For
example, the distance between 2 and 6 is [[4]],
_{span.reveal(when="blank-0")}because `2 + 4 = 6`._

    figure: include svg/number-line-2.svg

---

Instead, we can define a “different kind” of distance using __multiplication__
and __division__.

{.r} In the world of integers, 0 is the _most divisible_ number of all. It can
be divided any number of times by any integer, and still give an integer result
(namely 0). If we focus on our number base of 10, we can see that 0 can be
divided by 10 once, or twice, or thirty-seven times, or a million times.
_{button.next-step} Continue_

---
> id: zero-list

* The number __40__ is a little bit “zero-like”, in this sense in that we can
  divide it by ten and still have an integer.
* The number __1700__ is more zero-like: it can be divided [[twice|three
  times|four times]] by 10, and still give an integer result.
* {.reveal(when="blank-0")} The number __230,000__ is even more zero-like. It
  can be divided [[four]] times by 10, and still stay an integer.
* {.reveal(when="blank-1")} The number __5__, on the other hand, is not very
  zero-like. We can’t divide it by ten even once, and have it stay an integer.

---

We can now develop a __distance formula__, based on how often 10 “goes into”
into a number multiplicatively. If we can divide a number _a_ by ten a maximum
of _k_ times while remaining an integer, let’s write

{.text-center} `|a|_(ten) = 1/10^k`

For example, `|850|_(ten) = 1/(10^1) = 0.1`, and `|8500|_(ten) = 1/(10^2) = 0.01`,
and `|850000|_(ten) =` [[0.0001]].

---

We can also measure the distance between any two different numbers. For example,
the distance between 3 and 33 is `|33−3|_(ten) = |30|_(ten) = 1/(10^1) = 0.1`.

With this new way to measure distance, 1, 10, 100, 1000, … is a sequence of
numbers getting closer and closer to [[zero|1|–1|infinity]]. Similarly, 9, 99,
999, 9999, … is getting closer and closer to [[-1]], just like we saw above.

---
> id: p-adic-numbers

Mathematicians call this way of viewing distances between the non-negative
integers [__ten-adic arithmetic__](gloss:adic). The suffix “adic” means “a
counting of operations”. Here we are counting factors of ten.

---
> id: dots-2
> goals: dots

### Negative Numbers and Fractions

We’ve already seen that our new, ten-adic system supports negative integers:
_{span.nowrap}…999999 = –1_. We can do something similar for other negative numbers. How much
do you have to add to _{span.nowrap}…999998_, to get it to explode?

    x-dot-machine(cells="…99998")
    x-gesture(target="#dots-2 .dot-cell:last-child")

---

In other words, _{span.nowrap}…999998 = [[-2]]_. _{span.reveal(when="blank-0")}
We can similarly calculate that *{span.nowrap}…999997 = [[-3]]*,
*{span.nowrap}…999953 = [[-47]]*, *{span.nowrap}…999700 = –300*
and so on. Every negative integer has a ten-adic equivalent._

---
> id: dots-3
> goals: dots

{.text-center} •

Constructing ten-adic fractions is a bit more difficult. Let’s see what happens
if we multiply _{span.nowrap}…6666667_ by 3:

    x-dot-machine.tiny(cells="…66667")
    p.text-center: button.btn.btn-small.btn-red Multiply by 3
    x-gesture(target="#dots-3 button")

---

Since _{span.nowrap}…6666667_ × 3 = [[1]], *{span.reveal(when="blank-0")}we
know that _{span.nowrap}…6666667_ = `1/3`.*

---

::: .box.f-blue
#### Challenge

Can you work out which ten-adic number behaves like `2/3`?

What about other fractions like `4/7` or `2/13`?

:::

_It turns out that there are a few fractions that cannot be expressed in our
ten-adic number system: all fractions that, in their reduced form, have a
[denominator](gloss:denominator) that is a multiple of 2 or 5 (or both). You
can fix this by allowing ten-adic numbers to have a finite number of decimal
places. Now, every [rational number](gloss:rational-numbers) has a ten-adic
equivalent._

---
> id: flaw

### A Serious Flaw

We’ve now seen that every integer an fraction has a ten-adic equivalent, and
that we can add, subtract and multiply ten-adic numbers, just like we would
normal integers. Unfortunately there is one serious flaw: we cannot _divide_ by
all ten-adic numbers.

To see why that’s the case, we need to look at the powers of 2 and 5:

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

Notice how many of the powers of 5 end in <x-target to=".po2" no-margins>other,
smaller powers of 5</x-target>. The same is also true for powers of 2. It turns
out that we can create two infinite, 10-adic numbers, that always end in powers
of 2 or 5 respectively:

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

_{button.next-step} Continue_

---
> id: flaw-2

If we try to multiply powers of 2 and 5, we get a sequence of products that get
closer and closer to zero (in our 10-adic sense):

|    |   |     |   |           |
| -: | - | --: | - | --------: |
|  2 | × |   5 | = |        10 |
|  4 | × |  25 | = |       100 |
|  8 | × | 125 | = |  [[1000]] |
| 16 | × | 625 | = | [[10000]] |

---
> id: flaw-3

The same happens if we try to multiply __{.i.m-red}M__ and __{.i.m-yellow}N__:

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

In other words, we have found two non-zero numbers __{.i.m-red}M__ and
__{.i.m-yellow}N__ so that __{.i.m-red}M__ × __{.i.m-yellow}N__ = 0.

This means that in ten-adic arithmetic, it is impossible to divide by
__{.i.m-red}M__ or __{.i.m-yellow}N__. (If it were possible, we could divide the
equation __{.i.m-red}M__ × __{.i.m-yellow}N__ = 0 by __{.i.m-yellow}N__, and get
__{.i.m-red}M__ = 0. That is a contradiction.)



--------------------------------------------------------------------------------



## P-adic Numbers

> section: p-adic
> id: p-adic

In the [previous section](/course/exploding-dots/unusual), we managed to
construct two non-zero [10-adic numbers](gloss:adic) _M_ and _N_, so that
`M×N=0`. This means that it is impossible to divide by numbers like _M_ and _N_
– a serious flaw in any number system.

It turns out, however, that this problem only occurs if the number base is not a
[prime number](gloss:prime). Since 10 [[is not prime|is prime]],
_{span.reveal(when="blank-0")}the 10-adic numbers are flawed. 2-adic or 3-adic
numbers, on the other hand, are not._

---

Mathematicians call these numbers __*p*-adic numbers__, where the *p* stands for
“prime”. Even though they don’t seem particularly relevant in everyday life,
_p_-adic numbers turn out to be very useful in certain parts of mathematics.

For example, many unanswered problems in mathematics are related to prime
numbers and [prime factorizations](gloss:factorisation). Since _p_-adic numbers
were defined using _multiplication_ rather than _addition_, they are perfect for
analysing these problems. *P*-adic numbers were even used in Andrew Wiles’
famous proof of [Fermat’s Last Theorem](gloss:fermat-last).

---
> id: square

One of the must surprising applications of p-adic numbers is in geometry. Here
you can see a square that is divided into ${2*x}{x|9|1,50,1} small triangles of
equal area:

    figure: svg.square(width=320 height=320)
    x-gesture(target="x-var" slide="100,0")

---
> id: square-1

As you move the slider, you can see that it is possible to divide the square
into any [[even|odd|prime]] number of equal triangles.

{.r.reveal(when="blank-0")} But what about _odd_ numbers? Draw a square on a
sheet of paper, and then try dividing it into 3, 5 or 7 triangles of equal area.
_{button.next-step} Continue_

---
> id: square-3

Here’s the shocker: it turns out that it is _impossible_ to divide a square into
an _odd_ number of triangles of equal area! This was proven in 1970 by
mathematician [Paul Monsky](bio:monsky) – you can even have a look at the paper
he published about it:

    figure
      x-img(src="images/paper.jpg" alt="Paper by Paul Monsky" width=400 height=132)
      p.caption #[a(href="http://ieee.scripts.mit.edu/urgewiki/images/0/00/Monsky.pdf" target="_blank") The American Mathematical Monthly]

In the proof, Monsky had to use the 2-adic number system. Mathematics, no matter
how abstruse it might seem, always comes up with surprising and unexpected
applications.
