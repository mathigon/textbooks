# Exponential Functions

## Carbon Dating

> section: carbon-dating
> sectionStatus: dev
> id: egypt

::: column.grow

A group of archaeologists has discovered a new tomb in the Egyptian desert.
They carefully open the hidden entrance, climb through several rooms filled with
ancient treasures, until they arrive in the burial chamber. The sarcophagus
is still sealed, and contains the mummy of a Pharaoh.

After cataloguing every item in the tomb and carefully transporting it to a
nearly museum, they want to answer their most pressing question: who is this
Pharaoh, and when did he die?

::: column(width=300)

    x-media(src="images/egypt.jpg" lightbox width=300 height=312)

:::

Unfortunately, none of the drawings and inscriptions on the walls of the tomb
seem to contain names or dates. However, it turns out that there is a method
to accurately determine the age of ancient artifacts like mummies or fossils,
which solely relies on physics and mathematics – called __Carbon Dating__.
[Continue](btn:next)

---
> id: carbon-1

{.fixme} Mummy Image

All living organisms on Earth, plants, animals and humans, contain Carbon
[atoms](gloss:atom). Usually, the core of a Carbon atom consists of six
[protons](gloss:proton) and six [neutrons](gloss:neutron), but a small
proportion of Carbon atoms contain additional neutrons. These “variants” are
called __isotopes__:

::: column(width=170)

    x-atom(protons=6 neutrons=6 size=150)

{.text-center} __Carbon-12__  
6 protons, 6 neutrons  
98.8%

::: column(width=170)

    x-atom(protons=6 neutrons=7 size=150)

{.text-center} __Carbon-13__  
6 protons, 7 neutrons  
1.1%

::: column(width=170)

    x-atom(protons=6 neutrons=8 size=150)

{.text-center} __Carbon-14__  
6 protons, 8 neutrons  
0.1%

:::

In this example, we are particularly interested in Carbon-14. It contains 6
protons and 8 neutrons, and is abbreviated as <sup>14</sup>C. It is created high
in the atmosphere, by cosmic rays coming from space. This also means that the
proportion at which it occurs is almost exactly the same, anywhere on Earth. In
other words, any sample of Carbon atoms contains 0.1% of <sup>14</sup>C atoms.

You might think that this is an insignificant amount, but your body contains
around `8 × 10^26` Carbon atoms, which means that you also contain around
`8 × 10^23` <sup>14</sup>C atoms. That's almost a million-million-million-million
atoms!

---
> id: carbon-2

The reason why Carbon-14 is so important is that it is [radioactive](gloss:radioactive).
This means that over time, it “decays” by breaking apart into other elements.
We are actually surrounded by many different radioactive materials, but they are
all much, much weaker than nuclear power stations or atomic bombs.

::: column.grow

During our life, as we eat and breathe, we absorb <sup>14</sup>C atoms which
are stored in our body. When we die, we stop absorbing new <sup>14</sup>C atoms,
and the ones that are already in our body slowly start to
[[decay|multiply|disappear]].

This is what scientists can use when trying to estimate the age of mummies,
fossils, and similar objects.

::: column(width=300)

{.fixme} chart animation

:::

---
> id: carbon-3

The archaeologists in our story decided to take a very small piece of the
mummy's skin. Using a complex machine called a __mass spectrometer__, they were
able to “count” the number of <sup>12</sup>C and <sup>14</sup>C atoms in the
sample.

If you know the proportion of <sup>14</sup>C atoms, you can work out how much
<sup>14</sup>C must have decayed since the Pharaoh died. Next, you have to
work out how long it takes for that much <sup>14</sup>C to decay – and that
number is precisely the [[age of the Pharaoh when he died|time since the
Pharaoh died]].

---
> id: carbon-4

Luckily, all radioactive elements decay at a very predictable rate, which is
usually indicated by their __half life__. Carbon-14, for example, has a half
life of approximately 6,000 years. This means that if you have a block of
<sup>14</sup>C atoms, it will take 6,000 years for half of them to decay into
other elements. After another 6,000 years, half of the remaining atoms will have
also decayed, so you're left with just [[a quarter|a third|nothing]] of the
original amount.

---
> id: carbon-5

Let’s assume we start with 1,200 Carbon 14 atoms, and summarise the remaining
amount over time in a table:

|            | _{div.col}_ | _{div.col.c1}_ | _{div.col.c2}_ | _{div.col.c3}_ | _{div.col.c4}_ |
| __Years__  | 0           | 6000           | 12,000         | 18,000         | 24,000         |
| __Amount__ | 1200        | [[600]]        | [[300]]        | [[150]]        | [[75]]         |
{.grid.col-grid}

---
> id: carbon-6

As you can see, we’re multiplying by `1/2` at every step, just like a
[[geometric|arithmetic|Fibonacci]] sequence.

Using exponents, we can write down an equation for the amount left after `t` years:

| `"amount"` | `= 1000 × (1/2)^(t/6000)` |
|            | `= 1000 × 2^((-t)/6000)`  |
{.eqn-system}

Of course 1,000 and 6,000 were just arbitrary numbers. A more general equation
is:

    x-equation-flow(expr=`"amount" = "initial" × 2^((-t)/"half life")` max-steps="2")

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
    //- img.text-wrap(src="images/fossil.jpg" style="shape-outside: url(images/fossil.png)" width=320 height=295)

The method was developed in the late 1940s at the University of Chicago by Willard Libby, who received the Nobel Prize in Chemistry for his work in 1960.

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
