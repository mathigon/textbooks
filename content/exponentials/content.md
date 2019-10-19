# Exponential Functions

## Carbon Dating

> section: carbon-dating
> sectionStatus: dev

A group of archaeologists has discovered a new tomb in the Egyptian desert.
They carefully break the sealed door, walk through several rooms filled with
ancient treasures, until they arrive in the XXXXX. The sarkophagus 

They carefully catalogue every item in the tomb, before transporting it to a
nearby museum for further examination. The most important question is: who is
this

Unfortunately, none of the drawings and inscriptions on the wall of the tomb
seem to contain names or dates. Instead, it turns out that there is another way
to accurately determine the age of ancient artifacts, that solely relies on
physics.

---

All living organisms on Earth – plants, animals and humans – contain Carbon
[atoms](gloss:atom). Usually, the core of a Carbon atom consists of six
[protons](gloss:proton) and six [neutrons](gloss:protons). However, a small
number of Carbon atoms contain additional neutrons. These "variants" are called
__isotopes__:

::: column(width=170)

    x-media(src="svg/atom-1.svg" width=150 height=150)

{.text-center} __Carbon 12__  
6 Protons, 6 Neutrons  
98.8%

::: column(width=170)

    x-media(src="svg/atom-2.svg" width=150 height=150)

{.text-center} __Carbon 13__  
6 Protons, 7 Neutrons  
1.1%

::: column(width=170)

    x-media(src="svg/atom-3.svg" width=150 height=150)

{.text-center} __Carbon 14__  
6 Protons, 8 Neutrons  
0.1%

:::

One amazing fact is that the proportion at which each of these isotopes occurs
is almost exactly the same, anywhere on Earth! Another important fact is that
`C_14` is [radioactive](gloss:radioactive). This means that over time, it
"decays" by breaking apart into other elements.

We are actually surrounded by many different radioactive materials, but they are
all much, much weaker than nuclear power stations or atomic bombs.

During our life, as we eat or breathe, all living things – plants, animals or
humans – absorb these materials, which means that our body contains some
radioactive atoms.

You might think that 0.1% is a very small proportion, but your body contains
around XXXXX Carbon atoms, which means that you also contain around XXXXX
C-14 atoms.

---

When we die, we no longer absorb any new atoms, and the ones that we have
already absorbed in our body start to [[decay|multiply|disappear]].

    figure: include svg/chart.svg

This is the key fact that can be used by archaeologists and geologists when
they are trying to find the age of fossils, mummies, and similar objects.

First, they take a small sample of fossil. Using a complex machine called a
__mass spectrometer__, they can “count” the number of C12 and C14 atoms in the
sample. By looking at the ratio, they can work out how much C14 must have
decayed since the animal died. Finally, they can calculate how long it
takes for that much C14 to decay, and that’s precisely the age of the fossil!

This process is called __Carbon Dating__, and it relies on some interesting
mathematics. The key concept to understand is that radioactive materials always
decay at a constant rate, which is usually indicated by their __half life__.

---
> id: cd4

C14, for example, has a half life of approximately 8,000 years. This means that
if you have a block of C14 atoms, it will take 8,000 years for half of it to
decay into other elements. After another 8,000 years, half of the remaining
atoms will have decayed, so you're left with just [[a quarter|a third|nothing]]
of the original amount.

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
        td.md [[600]]
        td.md [[300]]
        td.md [[150]]
        td.md [[75]]

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

    img.text-wrap(src="images/fossil.jpg" style="shape-outside: url(images/fossil.png)" width=320 height=295)

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

## Exponential Growth and Decay

> section: growth-decay
> sectionStatus: dev

TODO

---

## Comparing Models

> section: comparing-models
> sectionStatus: dev

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

---

## Compound Interest

> section: compound-interest
> sectionStatus: dev

TODO

---

## Population Dynamics

> section: population-dynamics
> sectionStatus: dev

TODO
