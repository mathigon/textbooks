# Introduction to Probability

## Introduction

> section: introduction
> sectionStatus: dev
> id: intro
> goals: spin



In previous courses, you have seen many examples of how we can try to predict the future using science and mathematics. For example, we can predict when a car will arrive at its destination if it is driving at a constant speed, or we can predict the next time when we’ll be able to see a particular comet.

However, there are many examples in life where it is impossible to predict exactly what will happen. This could be because you don’t have all the information you need, because the decisions of other people might influence the result, or just because it is incredibly complicated.

::: column(width=200 height=200)

    img(src="https://st.depositphotos.com/1018414/4343/i/950/depositphotos_43434771-stock-photo-fragments-of-the-planet-earth.jpg")

{.caption} The atmosphere consists of billions of molecules that interact with each other. That’s why it’s impossible to exactly predict the weather.


::: column(width=200 )

    img(src="https://st.depositphotos.com/1007566/3105/v/450/depositphotos_31050267-stock-illustration-financial-growth.jpg")

{.caption} You don’t know exactly how people are going to vote. That’s why it’s impossible to exactly predict the outcome of an election.


::: column(width=200)

    img(src="https://static8.depositphotos.com/1000865/859/i/450/depositphotos_8594169-stock-photo-playing-cards.jpg")

{.caption} After shuffling, you don’t know the order of the cards in a deck. That’s why it is impossible to exactly predict the colour of the next card.


:::

---
> id: drag

Of course, our language has many words we can use to describe the answer to these questions, without knowing exactly what will happen. Try to move each of these events to the best possible description.

<!-- Drop events into buckets of impossible, unlikely, likely, certain -->

* The sun rises tomorrow.
* You see a mammoth while walking on the street.
* 1 million bitcoins are mined tomorrow
* You get homework tomorrow (assuming school is in session)
* You roll a die and the number it lands on is less than 7.
* Probability that any given calendar year has 366 days.
* You roll a die and it lands on a 6.
* A randomly selected human lives in asia.
* Winning a lottery amongst 10 million people
* Shuffling a deck of cards two times and getting the exact same sequence

You might have noticed that some of the descriptions were a bit “imprecise”. For example, if you roll a die just once, it is unlikely that it lands on a 6 – but you certainly wouldn’t be surprised if it does. WInning the lottery is unlikely too - but obviously, more unlikely than rolling that 6! 

Unfortunately, our four word scale to describe the likelihood or chance of events occurring isn’t too useful.


---
> id: dartboard

::: column(width=500)

<!-- Make number of darts + accuracy slidable -->

One way to determine more accurately how likely a certain outcome is, is to look at how often it has happened in the past. For example, Imagine you’re playing a game of darts with your friend - and you want to numerically know how likely it is that your friend hits the bullseye. You could try to come up with some model to measure his skill, and learn how “good” he is - but a far easier method would be to listen to what his history says. In this case, your friend threw ${20} darts, ${5} of which landed in the center.

::: column(width=200)

    img(src="https://static9.depositphotos.com/1027309/1217/v/450/depositphotos_12178989-stock-illustration-dart-board.jpg")

:::

From this, you might deduce that the next throw has a `5/20=0.25` chance to also land in the center. We say that 0.25 is the probability of hitting the center. 


For many centuries, mathematicians have struggled to deal with these uncertain situations – until the development of **probability** theory. In this course, we will explore what probability is, and give you some amazing new tools to be able to predict the future.



----------------------------------------------------------------------------------------------------