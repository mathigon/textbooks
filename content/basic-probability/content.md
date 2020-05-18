# Introduction to Probability

## Introduction

> section: introduction
> sectionStatus: dev
> id: intro
> goals: spin


Often, we make decisions by measuring likelihoods of things - which team to support? what card to play? Lets start by ordering some events on this line.
- Winning a lottery amonst 1 million people
- A coin toss landing on head two times in a row
- Shuffling a deck of cards two times and getting the same sequence
- Two people in a room of 30 have the same birthday


    img(src="images/numberline.png")

-- step --

You're right: It's unlikely to win that lottery, and unlikely for that shuffle to come out in sequence too. 

The chance of winning the lottery is 1 in 1000000. But the chance of the same shuffle coming out? That's 1 in 80658175170943878571660636856403766975289505440883277824000000000000. 

This is why words like "likely" and "unlikely" aren't particularly useful for us - they can mean a lot of things! In this course, we will gain a mathematical understanding of likelihood: called Probability.

Think of probability as a scale of likelihood from 0 to 1 - 1 being that it is certain that an event will occur, while 0 means an event is impossible.


::: column.grow

Let's now actually measure the exact probability of an event occuring.

Here's a classic spinner, with four sections. When rotated, it will land on a randomly selected section. 

Drag these colors in order of how likely it is that the spinner lands on them!

    x-sortable
      .item.md(data-index="3") Green
      .item.md(data-index="0") Red
      .item.md(data-index="1") Yellow
      .item.md(data-index="2") Purple

::: column(width=300)

    svg.spinner(width=300 height=300)
      circle(cx=150 cy=150 r=100)

:::

The chance that the spinner lands on a section is proportional to the area of the section - bigger the area, the more likely it is that the spinner lands on it.

    img(src="images/angles.png" width=300)
    br
    br

A circle had 360 degrees - so we can easily come up with what fraction of area each color is!

Red is [[7/20]], Yellow is [[6/20]], Purple is [[4/20]], and Green is [[3/20]].

It turns out the fraction of this area is the same as the probability of the spinner landing on the sector: 7/20 is the same thing as it's likely that the spinner lands on the red section 7 out of 20 times!

We can represent probabilites in decimals too! 6/20 is the same thing as 0.3. And representing in percentages is a possibility too: the probability in percentage of the spinner landing on the Purple section is [[20]]%
---

* Comprehend and use the terms “impossible,” “unlikely,” “equally likely as not,” “likely,” and “certain” to describe the likelihood of an event.
* Interpret percentages, fractions, and decimals that represent the likelihood of events.
* Order a given set of events from least likely to most likely, and justify the reasoning.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/2/preparation.html

---

* Generalize the relationship between the probability of an event and the number of possible outcomes in the sample space, for an experiment in which each outcome in the sample space is equally likely.
* List the sample space of a simple chance experiment.
* Use the sample space to determine the probability of an event, and express it as a fraction, decimal, or percentage.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/3/preparation.html


----------------------------------------------------------------------------------------------------


## Coins, Cards and Dice

> section: coins-cards-dice
> sectionStatus: dev

* Describe patterns observed on a table or graph that shows the relative frequency for a repeated experiment.
* Generalize that the cumulative relative frequency approaches the probability of the event as an experiment is repeated many times.
* Generate possible results that would or would not be surprising for a repeated experiment, and justify the reasoning.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/4/preparation.html

---

* Describe reasons why the relative frequency from an experiment may not exactly match the actual probability of the event.
* Recognize that sometimes the outcomes in a sample space are not equally likely.
* Use the results from a repeated experiment to estimate the probability of an event, and justify the estimate.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/5/preparation.html

---

* Comprehend the that term “simulation” refers to a chance experiment used to represent a real-world situation.
* Describe a simple chance experiment that could be used to simulate a real-world event.
* Perform a simulation, and use the results to estimate the probability of a simple event in a real-world situation.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/6/preparation.html


----------------------------------------------------------------------------------------------------


## Multi-Step Experiments

> section: multi-step
> sectionStatus: dev

* Compare and contrast different methods for representing the sample space of a compound event, and evaluate their usefulness.
* Determine the total number of possible outcomes for a compound event, and justify the reasoning.
* Interpret or create a list, table, or tree diagram that represents the sample space of a compound event.
* Understand that the probabilities of all possible outcomes sum to 1

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/8/preparation.html

---

* Choose a method for representing the sample space of a compound event, and justify the choice.
* Use the sample space to determine the probability of a compound event, and explain the reasoning.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/9/preparation.html


----------------------------------------------------------------------------------------------------


## Designing Simulations

> section: simulations
> sectionStatus: dev

* Describe a multi-step experiment that could be used to simulate a compound event in a real-world situation, and justify that it represents the situation.
* Perform a simulation to estimate the probability of a compound event, and explain how the simulation could be improved.

https://curriculum.illustrativemathematics.org/MS/teachers/2/8/10/preparation.html
