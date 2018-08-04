# Exponential and Rational Functions

## Carbon Dating

> id: cd1

Everything in our world is made up of different chemical elements: Oxygen,
Hydrogen, Iron, and many others. Many of these elements can have different types
of atoms, called __isotopes__. For example, the element Carbon occurs in three
different isotopes:

    figure.row
      .text-center(style="width: 170px")
        include svg/atom-1.svg
        div #[strong Carbon 12]
        .small 6 Protons, 6 Neutrons#[br]98.8%
      .text-center(style="width: 170px")
        include svg/atom-2.svg
        div #[strong Carbon 13]
        .small 6 Protons, 7 Neutrons#[br]1.1%
      .text-center(style="width: 170px")
        include svg/atom-3.svg
        div #[strong Carbon 14]
        .small 6 Protons, 8 Neutrons#[br]0.1%

One amazing fact is that the proportions of these isotopes is almost exactly the
same, anywhere on Earth – almost everything is C12, but approximately 0.1% of
all carbon atoms are C14.

{.todo} use mummies!

Another amazing fact is that C14 is radioactive :radioactive:. That means that
over time, it decays: it breaks apart into other element. We are actually
surrounded by many different radioactive materials, but they are all much, much
weaker than nuclear power stations or atomic bombs.

During our life, as we eat or breathe, all living things – plants, animals or
humans – absorb these materials, which means that our body contains some
radioactive atoms. When we die, we no longer absorb any new atoms, and the ones
that we have already absorbed start to [[decay|multiply|disappear]].

    figure: include svg/chart.svg

---
> id: cd3

    img.text-wrap(src="images/fossil.jpg" style="shape-outside: url(images/fossil.png)" width=320 height=295)

This can be used by geologists, when the’re trying to determine the age of
fossils: they take a small sample of fossil and “count” the number of C12 and
C14 atoms in the sample. By looking at the ratio, they can work out how much C14
must have decayed since the animal died. Finally, they can calculate how long it
takes for that much C14 to decay, and that’s precisely the age of the fossil!

This process is called __Carbon Dating__, and it relies on some interesting
mathematics. The key concept to understand is that radioactive materials always
decay at a constant rate, which is usually indicated by their __half life__.

---
> id: cd4

C14, for example, has a half life of approximately 6,000 years. This means that
if I have a block of C14, it will take 6,000 years for half of it to decay into
other elements. After another 6,000 years, half of the remaining atoms will have
decayed, so I’m left with [[a quarter|a third|nothing]] of the original amount.

Let’s assume we start with 1,200 Carbon 14 atoms, and summarise the remaining
amount over time in a table:

    table.grid.col-grid
      tr
        td
        td: .col
        td: .col.c1
        td: .col.c2
        td: .col.c3
        td: .col.c4
        td: .col.c3
      tr
        td __time__
        td 0
        td 6000
        td 12000
        td 18000
        td 24000
      tr
        td __amount__
        td 1200
        td [[600]]
        td [[300]]
        td [[150]]
        td [[75]]

---

As you can see, we’re just multiplying by 1/2, again and again. Using exponents,
we can write down an equation for the amount left after time `t`:

| `"amount"` | `= 1000 × (1/2)^(t/6000)` |
|            | `= 1000 × 2^((-t)/6000)`  |
{.eqn-system}

Of course 1,000 and 6,000 were just arbitrary numbers. A more general equation
is:

`"amount" = "initial" × 2^((-t)/"half life")` {.text-center}

---

Let's get back to our geologists, who were trying to determine the age of the
fossil. In a small sample, they found 10 Carbon 14 atoms, when given the ratios
of C12 and C14, they would estimate there would have been 100 atoms when the
animal died.

|         `10` | `= 100 × 2^((-t)/6000)` |
|        `0.1` | `= 2^((-t)/6000)`       |
| `log_2(0.1)` | `= (-t)/6000`           |
|          `t` | `= -6000 × log_2(0.1)`  |
|              | `= 19932 "years"`       |
{.eqn-system}

Using the mathematics of logarithms and the properties of radioactive decay, we
have worked out that the fossil is around 20 thousand years old!

This information can give crucial information to geologists, archaeologists and
biologists: to determine the age of mummies, the evolutinary ancestry between
extinct animals, or when certain layers of rock in our Earth's crust formed.

    figure: x-media(src="images/dinosaur.jpg" width=760, height=360)

---

## Linear and Exponential Models

Radioactive decay follows a _constant rate_: during equal time intervals, the
number of atoms changes by a __fixed proportion__{.red} (e.g. 50%). This gives
rise to an __exponential model__{.red}, either exponential growth or
exponential decay.

Exponential models are very different from __linear models__{.blue}, where the
value changes by a __fixed value__{.blue} during equal time intervals.

diagram {.todo}

Here are a few examples of processes in nature or everyday life. Try to decide
which ones are exponential or linear. (Note that some models are increasing, 
and others are decreasing.)

{.todo} cell division

{.todo} interest

{.todo} speed of computers, Moore's Law
