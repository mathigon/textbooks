# Exponential Functions

## Carbon Dating

> section: carbon-dating
> id: egypt
> color: "#EF551E"
> level: Intermediate
> next: probability

::: column.grow

A group of archaeologists has discovered a new tomb in the Egyptian desert.
They carefully open the hidden entrance, climb through several rooms filled with
ancient treasures, until they arrive in the burial chamber. The sarcophagus
is still sealed and contains the mummy of a Pharaoh.

After cataloguing every item in the tomb and carefully transporting them to a
nearby museum, they try to answer their most pressing question: who is this
Pharaoh, and when did he die?

::: column(width=300)

    x-img(src="images/egypt.jpg" alt="Egyptian Tomb" lightbox width=300 height=312)

:::

Unfortunately, none of the drawings and inscriptions on the walls of the tomb
seem to contain any names or dates. However, there is an ingenious method to
accurately determine the age of ancient artefacts like mummies or fossils,
which solely relies on physics and mathematics: __Carbon dating__.
[Continue](btn:next)

---
> id: carbon-1

    figure: x-img(src="images/sarcophagus.jpg" alt="Egyptian Sarcophagus" width=600 height=180)

All living organisms on Earth – plants, animals and humans – contain carbon
[atoms](gloss:atom). Usually, the core of a carbon atom consists of six
[protons](gloss:proton) and six [neutrons](gloss:neutron), but a small
proportion of carbon atoms contain additional neutrons. These different
“variants” of carbon are called __isotopes__:

::: column(width=170)

    x-atom(protons=6 neutrons=6 size=150)

{.text-center} __Carbon-12__<br>
6 protons, 6 neutrons<br>
98.8%

::: column(width=170)

    x-atom(protons=6 neutrons=7 size=150)

{.text-center} __Carbon-13__<br>
6 protons, 7 neutrons<br>
1.1%

::: column(width=170)

    x-atom(protons=6 neutrons=8 size=150)

{.text-center} __Carbon-14__<br>
6 protons, 8 neutrons<br>
0.1%

:::

[Continue](btn:next)

---
> id: carbon-2

The proportion at which these isotopes occur is almost exactly the same,
everywhere on Earth – and this will be very important later. In our example, we
are particularly interested in carbon-14, which is abbreviated as <sup>14</sup>C.
It contains 6 protons and 8 neutrons, and it is created when cosmic rays coming
from outer space hit particles high in our atmosphere.

Any sample of carbon atoms consists of [[0.1]]% of these special <sup>14</sup>C atoms. You might
think that this is an insignificant amount, but your body contains around `8 × 10^26` carbon atoms,
which means that you also contain around `8 × 10^23` carbon-14 atoms. That’s almost a
million-million-million-million atoms!

    // Carbon is an essential part of our body, because it can form long,
    // complex molecules.

---
> id: radioactive-1
> goals: decay

::: column(width=300)

    .decay-box
      x-atom(protons=6 neutrons=8 size=68 style="cursor: pointer;")
      x-atom(hidden protons=7 neutrons=7 size=68 style="left: 100px")
      x-atom(hidden protons=1 color="fd8c00" size=68 style="left: 178px")
      x-atom(hidden protons=1 color="22ab24" size=68 style="left: 244px")
      .label #[strong Carbon-14]#[br]6 protons#[br]8 neutrons
      .label(hidden style="left: 100px") #[strong Nitrogen]#[br]7 protons#[br]7 neutrons
      .label(hidden style="left: 178px"): strong Antineutrino
      .label(hidden style="left: 244px"): strong Electron
      .operator(hidden style="left: 76px") →
      .operator(hidden style="left: 176px") +
      .operator(hidden style="left: 240px") +
    x-gesture(target=".decay-box x-atom")

{.caption}

::: column.grow

Carbon-14 is useful because it is [__radioactive__](gloss:radioactive). The
atom is unstable, and it might __decay__ into other, more stable elements. We
are actually surrounded by many radioactive materials, but their concentration
is not high enough to be dangerous.

:::

---
> id: radioactive-2

::: column.grow

During our life, as we eat and breathe, our body absorbs <sup>14</sup>C atoms.
When we die, we stop absorbing new <sup>14</sup>C atoms, and the ones that are
already in our body slowly start to [[decay|multiply|disappear]].

{.reveal(when="blank-0")} All radioactive elements decay at a very predictable
rate – this is determined by their __half-life__. Carbon-14, for example, has a
half-life of approximately 6,000 years. This means that if you have a block of
<sup>14</sup>C atoms, it will take 6,000 years for half of them to decay. After
another 6,000 years, half of the remaining atoms will have also decayed, so
you’re left with just [[a quarter|a third|1/8|none]] of the original amount.

::: column(width=220)

    x-img(src="images/atom.jpg" alt="Atom" width=220 height=310)

:::

---
> id: radioactive-table-1

Let’s assume we start with a block of 1,200 carbon-14 atoms. Using the half-life,
we can calculate the remaining amount of <sup>14</sup>C atoms over time:

::: .overflow-wrap.overflow-table

|            | _{div.col}_ | _{div.col.c1}_ | _{div.col.c2}_ | _{div.col.c3}_ | _{div.col.c4}_ |
| __Years__  | 0           | 6000           | 12,000         | 18,000         | 24,000         |
| __Amount__ | 1200        | [[600]]        | [[300]]        | [[150]]        | [[75]]         |
{.grid.col-grid}

:::

---
> id: radioactive-table-2

As you can see, we’re multiplying by `§1/2` at every step, just like a
[[geometric|arithmetic|Fibonacci]] sequence.

---
> id: radioactive-equation

Using exponents, we can write down an equation for the amount left after `t` years:

{.text-center} `§"amount" = 1200 × (1/2)^(t/6000)`

[Continue](btn:next)

---
> id: radioactive-equation-1

Of course, 1200 and 6000 were just arbitrary numbers. A more general equation
is:

::: x-algebra-flow

`"amount" = "initial" × (1/2)^(t/"half-life")`

* Using the exponents laws, we can flip the fraction `1/2` into a 2, if we
  multiply the exponent by `–1`.
* {.new-row} This equation describes how many atoms are left after _t_ number of
  years.

:::

---
> id: radioactive-chart

Since the equation contains an _exponent_ and the number of atoms _decreases_,
we call this process __exponential decay__.

We can plot the amount of <sup>14</sup>C atoms over time in a coordinate system.
If we start with an initial amount of ${format(x0)}{x0|3000|100,4000,100} atoms,
and the half-life is ${format(hl)}{hl|5000|200,10000,200} years, then the decay
looks like this:

    x-coordinate-system(width=600 height=400 x-axis="0,18000" y-axis="0,4000" axis-names="Years,Carbon-14 Atoms" padding="20 20 20 40")

---
> id: radioactive-chart-2

The points on the graph show when the number of atoms has halved. Notice that
we can calculate the remaining number of atoms at _any point in time_, not just
these specific intervals. This is the main difference compared to geometric
sequences.

The decay of radioactive atoms is random, and it is impossible to predict
_when exactly_ an individual <sup>14</sup>C is going to decay. The graph shows
the _average_ number of atoms we _expect_ to be left at a specific time. That’s
also why the remaining number of atoms might not always be an integer – even
though you can’t have “half an atom”. You will learn more about this in our
[course on probability](/course/probability/randomness).
[Continue](btn:next)

---
> id: spectrometer

::: column.grow

Now we have all the information needed to determine the age of the Pharaoh. The
archaeologists decided to cut a tiny sample out of the mummy’s skin. Using a
complex machine called a __mass spectrometer__, they were able to “count” the
number of <sup>12</sup>C and <sup>14</sup>C atoms in the sample.

In our example, they found 800 carbon-14 atoms. Given the ratios of
<sup>12</sup>C and <sup>14</sup>C atoms, they also estimate that the same
sample should have contained 1200 <sup>14</sup>C atoms when the Pharaoh was
still alive.

::: column(width=320)

    x-img(src="images/spectrometer.jpg" alt="Accelerator Mass Spectrometer" lightbox width=320 height=280)

{.caption} Accelerator Mass Spectrometer in the Oxford Radiocarbon Accelerator Unit

:::

All we have to do now is calculate how long it takes for the 400 missing
<sup>14</sup>C atoms to decay. That number is precisely the [[time since the
Pharaoh died|age of the Pharaoh when he died]].

---
> id: carbon-solver

We can use the equation we found above and fill in the required parameters:

::: x-algebra-flow

`input(1200,"initial") × 2^((-t)/input(6000,"half-life")) = input(800,"amount")`

* Fill in the three parameters from above!
* Let’s start by dividing both sides of the equation by 1200.
* {.new-row} We can find the decimal value of the fraction on the right-hand
  side of the equation.
* Now, we have to deal with the exponent on the left-hand side. To do that, we
  can use a special function called the __Logarithm__, which you’ll learn more
  about later.
* {.new-row} Using a calculator, we can find the value of `log_2(0.667)`.
* {.new-row} The rest should be simple: let’s multiply both sides of the
  equation by 6000.
* {.new-row} We can simplify the right-hand side of the equation.
* We can also remove the – sign on both sides of the equation.
* Thus, we see that it takes 3510 years for the required number
  of <sup>14</sup>C atoms to decay.

:::

---
> id: carbon-end-1

::: column(width=280)

    x-img(src="images/mummy.jpg" alt="Egyptian Mummy" lightbox width=280 height=170)

::: column.grow

This means that the Pharaoh died approximately 3510 years ago, or in
[[1490 ± 10]] BC. This time period was the beginning of the _New Kingdom_ in
Egyptian history: a “golden age” which marked the peak of Egypt’s power. And all
we needed was a tiny piece of skin tissue, together with clever mathematics!

:::

---
> id: carbon-end-2

Geologists and biologists can use the same method to determine the age of
fossils. This helps them understand when certain layers of rock in our Earth’s
crust formed, or the evolutionary ancestry between extinct animals.

Carbon dating was developed in the late 1940s at the University of Chicago, by
Willard Libby, who received the Nobel Prize in Chemistry for his work in 1960.
It has become an indispensable method in many areas of science.

    figure: x-img(src="images/dinosaur.jpg" alt="Fossil" width=760, height=360)

Note that we have greatly simplified the process of carbon dating in this
chapter. There are many other things to consider, such as sample contamination,
or how the concentration of carbon-14 in our atmosphere has changed over time.

---

## Exponential Growth and Decay

> section: growth-decay
> sectionStatus: dev

    img.text-wrap(src="images/fossil.jpg" style="shape-outside: url(images/fossil.png)" width=320 height=295)

In the previous section, we looked at the __exponential decay__ of radioactive
materials, and how it can help scientists determine the age of fossils and
mummies using carbon dating. But there are also some things that behave in
exactly the opposite way: they _grow_ exponentially.

{.todo} TODO

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
