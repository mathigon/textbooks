# Divisibility and Primes (v2)

## Factors and Multiples

> section: factors
> id: factris
> goals: play
> color: "#1AA845"
> level: Foundations

Here is a simple game similar to [Tetris](gloss:tetris). Rectangular blocks fill slowly fall from
the top, and you have to arrange them using the arrow keys, to fill entire rows. Can you work out
what the rules are, and what the [{.red}rearrange button](->.key-up) does?

    link(href="https://fonts.googleapis.com/css?family=Comfortaa:400,700" rel="stylesheet")
    figure: x-factris(highscore="no")

{.reveal(when="play")} Well done – you scored ${factris} points! :party-popper: You may have noticed
that the _rearrange button_ changes the shape of the falling rectangle: for example, a 1 × 6
rectangle might become a 2 × 3 rectangle. Maybe we can improve your score by learning more about
these rectangular arrangements of various numbers.

---
> id: rectangle-1

### Factors

Here you can see a row of 24 squares. Move the black tab on the right, and see if you can create
other rectangles consisting of 24 squares:

    figure
      x-factor-rect(size="24:1")
    // TODO Table with factors, filled in automatically

---
> id: rectangle-2

Here is another rectangle with 2 × 9 = 18 tiles. Once again, try to find other rectangular
arrangements of these tiles:

    figure
      x-factor-rect.m-yellow(size="9:2")
    // TODO Table with factors, filled in automatically.

---
> id: rectangle-3

You might have noticed that each every rectangular arrangement corresponds to a multiplication
problem:

::: column.text-center(width=140)

18 = 3 × 6

::: column.text-center(width=140)

18 = 2 × [[9]]

::: column.text-center(width=140)

18 = 18 × 1

:::

---

By finding all the possible rectangular arrangements of 18 desks, we’ve also found all the ways to multiply to 18: 1 × [[18]], 2 × [[9]], and 3 × [[6]]. Rotating the rectangle simply swaps the order.
Show image of 3 × 6 rotating to make 6 × 3.

All of these numbers 1, 2, 3, 6, 9 and 18 are the [factors](gloss:factor) of 18 because they can be multiplied with another whole number to equal 18. Said another way, a factor of a number can divide into that number without a reminder. TODO definine "divisible"

::: column.grow

    include svg/divisibility-1.svg

{.caption} 12 __is__ divisible by 3

::: column.grow

    include svg/divisibility-2.svg

{.caption} 10 __is not__ divisible by 4

:::

---

::: tab

#### 20

Move the tab in the rectangle below to find all the factors of 20. Start with 1 row of 20. Now, anytime a rectangle is made, the numbers show up on the sides and then the factors get automatically added into the list. The list starts out with blanks in it where the numbers will go so students will know when they have found all the factors.

    figure
      x-factor-rect.m-yellow(size="20:1")

::: tab

#### 28

    figure
      x-factor-rect.m-yellow(size="28:1")

Example #2 - Students will now do the same thing with the factors of 28, but this time, students will need to fill in the blanks as they make the different rectangles. I’ve left out the picture of the rectangle here, but it would be the same as above. It would start as one row of 28 tiles.

Start: 1  [[2]]  [[4]]  [[7]]  [[14]]  28

::: tab

#### 11

    figure
      x-factor-rect.m-yellow(size="11:1")

Example #3 - Students will now do the same thing with the factors of 11. They will see there is only one blank to fill in, but can’t move on until they at least try to create other rectangles by moving around the tabs.

Start: 1  [[11]]

:::

---

Some numbers, like 11, don’t have any factors other than 1 and itself. In one of the upcoming
chapters, we’ll learn more about these numbers and what makes these numbers special.

Now that we have a better understanding of factors, try playing [Factris](/factris) again. Can you
beat your previous score of ${factris}? Or can you even get a place on our highscore?

---
> id: grid

### Multiples

::: column.fit

    x-number-grid.medium

::: column.grow


The opposite of a factor is a [__multiple__](gloss:multiple). We know that 5 is a factor of 20, so we say that 20 is
a multiple of 5. Said another way, the multiples of 5 are all the numbers you get when you count by
5 (starting at 0). The list of the multiples of 5 is 0, 5, [[10]], [[15]] and so on.

In general, a number divisible by N if that number divided by N equals a whole number.
Click any number to see all the multiples of that number.

:::

---

You may have noticed some nice patterns in multiples of numbers.
There are many different patterns hidden in these multiples. Take a look at the multiples of 3 and
9 – what do you notice and wonder? We'll learn more about the patterns in multiples in the next chapter.

    x-free-text

---
> id: factors-quiz

Factors and multiples are opposites of each other, and it is easy to confuse the words! A
[__factor__](gloss:factor) is always the _smaller_ number: it divides another number without
remainder. For example, the factors of 10 and 1, 2, 5 and 10.

A [__multiple__](gloss:multiple) is always the _larger_ number. You can obtain the multiples of a
number by “counting by that number”. For example, the multiples of 10 are 10, 20, 30, 40, 50 and so
on. Let’s practice this terminology with a simple quiz:

::: .box.blue.no-padding
#### Factors and Multiples Quiz

    x-gameplay.factors-quiz
      .circled ${x}
      | is a
      .factor-value
        .factor-bubble: .btn.btn-blue factor
        .factor-bubble: .btn.btn-blue multiple
        .factor-bubble: .btn.btn-blue neither
      | of
      .circled ${y}

:::

---
> id: factor-pairs

### Finding Factors

As we’ve seen, arranging numbers into rectangular arrays is a great technique for finding factors of numbers. Sometimes, though, we may just want to make a list of all the factors of a number. One technique is to start with the first factor pair, 1 and the number itself, and work towards the middle.

::: x-slideshow(step="auto")

    svg(width=310 height=110 viewBox="0 0 310 110" slot="stage" style="margin: 0 auto 24px")
      g(text-anchor="middle" font-size=20 font-weight=600)
        text(x=20 y=25 fill="#333") 40
        text(x=60 y=25 fill="#eb4726") 1
        text(x=90 y=25 fill="#cd0e66" slide="1-") 2
        text(x=120 y=25 fill="#6d3bbf" slide="2") 3
        text(x=120 y=25 fill="#6d3bbf" slide="3-") 4
        text(x=150 y=25 fill="#0f82f2" slide="4-") 5
        text.reveal(x=200 y=25 when="blank-5" fill="#0f82f2" slide="4-") 8
        text.reveal(x=230 y=25 when="blank-4" fill="#6d3bbf" slide="3-") 10
        text.reveal(x=260 y=25 when="blank-2" fill="#cd0e66" slide="1-") 20
        text.reveal(x=290 y=25 when="blank-0" fill="#eb4726") 40
      g(fill="none" stroke-linecap="round" stroke-width=2 opacity=0.5)
        line(x1="42" y1="3" x2="42" y2="33" stroke="#333")
        path.reveal(d="M60,30c0,38.11,51.49,69,115,69S290,68.11,290,30" stroke="#eb4726" animation="draw" when="blank-0")
        path.reveal(d="M90,30c0,28.17,38.06,51,85,51s85-22.83,85-51" stroke="#cd0e66" animation="draw" when="blank-1" slide="1-")
        path.reveal(d="M120,30c0,18.23,24.62,33,55,33s55-14.77,55-33" stroke="#6d3bbf" animation="draw" when="blank-4" slide="3-")
        path.reveal(d="M150,30c0,8.28,11.19,15,25,15s25-6.72,25-15" stroke="#0f82f2" animation="draw" when="blank-5" slide="4-")

Let's try to find all factors of 40. In this case, the first factor pair is 1 and [[40]].

The next smallest integer is 2, which [[is also | isn’t]] a factor of 40, _{span.reveal(when="blank-1")} and 2 × [[20]] = 40._

The next number is 3, which [[is not | is]] a factor of 40, _{span.reveal(when="blank-3")} so we skip it._

The next number is 4, which is a factor of 40, because 4 × [[10]] = 40.

The next number is 5 which is also a factor of 40, because 5 × [[8]] = 40.

Finally, 6 [[is not | is]] a factor of 40 and 7 [[is also not | is]] a factor.
_{span.reveal("blank-6 blank-7")} We’ve met in the middle, which means that we’ve found **all** factors of 40._

:::

---
> id: factor-circles

We’ve now seen how to find the factors of a numbers using rectangles or by making a list of factor
pairs – but there are many other representations.

::: column.fit

    figure
      x-factor-circles.var(size="400" :n="n + 1")
      x-slider(steps=99 speed=0.1 :bind="n")

::: column.grow

Play this animation to see another way to represent numbers that also shows the factor pairs. When the animation stops at 12, show these questions.

In this arrangement of 12 circles, we can see 3 groups of [[4]] circles. We can also see [[6]] pairs of 2 circles. So, this diagram shows the factor pairs 2 × 6 and 3 × 4. When we include 1 × 12, we have all the factor pairs for 12.

Upon correct answers, have the animation continue up to the number 17. Then, show this question.

Since the only factor pair for 17 is [[1]] × 17, the dots are arranged in one large circle. Upon correct answers, have the animation continue up to the number 40 Then, show this question.

:::

We found the factor pairs of 40 above - 1 × 40, 2 × 20, 4 × 10 and 5 × 8. In this arrangement, we can see [[20]] groups of , [[10]] groups of  and [[5]] groups of .

Upon correct answers, play the animation up to 60. After reaching 60, move on to the next section.

---

### Perfect Numbers

::: column.grow

Scientists and mathematicians have been thinking about the factors of different numbers for
thousands of years. One of these mathematicians was [Diophantus](bio:diophantus), who lived in
Alexandria, a coastal town in Egypt famous for its large library.

Diophantus noticed, just like you might have done above, that some numbers like 24 seem to have
many factors while other numbers like 17 or 22 have very few factors.
[Continue](btn:next)

::: column(width=320)

    // https://commons.wikimedia.org/wiki/File:Incendie_Alexandrie_by_Hermann_Goll_1876.jpg
    x-img(src="images/alexandria.jpg" width=320 height=225 lightbox credit="Hermann Göll, 1876")

{.caption} The Library of Alexandria was one of the largest in the ancient world. It partially
burned down in 48 BCE during a siege by Julius Caesar.

:::

{.reveal(when="next-0")} One way to think about this observation mathematically is to add up all
the factors of a number, except for the number itself. For example, the factors of 8 are 1, 2, 4
and 8. If we add up all factors except 8 itself, we get 1 + 2 + 4 = [[7]].

---
> id: perfect-1

Here you can see all numbers from 1 to 18 together with their factors. Try to fill in the missing
totals – do you notice any patterns?

    - factors = (n) => Array(n-2).fill(1).map((x, i) => i+1).filter(i => !(n % i))
    - total = (a) => a.reduce((a, c) => a + c, 0)
    .factor-table
      for i in [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
        div
          span.bulb= i
          span.factors= factors(i).join(', ')
          span.total= total(factors(i))

::: column.frame.red.text-center(width=235 parent="padded-thin")

For most numbers on this list, this sum of its factors is [[less than | more than | equal to]] itself. These numbers are called __deficient numbers__. Deficient means _“not having enough”_ and these numbers don’t have enough factors to add up to equal itself.

    // Upon correct answer, all the rows of deficient numbers are highlighted in the same pink color of the text box below (from the Intermediate course).

::: column.frame.green.text-center(width=235)

For some numbers on this list, the sum of its factors is greater than itself: 12 and [[18]]. These are called __abundant numbers__. Abundant means _“having plenty of”_ and these numbers have more than enough factors to add up to more than itself.

    // Upon correct answer, all the rows of abundant numbers are highlighted in the same blue color of the text box below.

::: column.frame.yellow.text-center(width=235)

Only one number on this list has a sum of factors that is equal to itself: [[6]]. This is called a __perfect number__: it has the perfect amount of factors to equal itself!

    // Upon correct answer, the row of the perfect number is highlighted in the same green color of the text box below.

:::

---

Let’s explore numbers in the 20’s and see how many of each type we have. First, click on any numbers in the table that are abundant. Now click on any numbers in the table that are perfect.

    // Show the table below with all numbers filled in, but with the panels still in gray (no pink, green or blue yet)
    // Upon doing so, the panels for 20 and 24 turn green.
    //Upon doing so, the panel for 28 turns blue and then all the other numbers turn pink.

    - factors = (n) => Array(n-2).fill(1).map((x, i) => i+1).filter(i => !(n % i))
    - total = (a) => a.reduce((a, c) => a + c, 0)
    .factor-table
      for i in [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        div
          span.bulb= i
          span.factors= factors(i).join(', ')
          span.total= total(factors(i))

---

Again, most of these numbers are [[deficient | abundant | perfect]]. There are 2 abundant numbers and 1 perfect number. If we extend our list through 100, we might expect a similar distribution of deficient, abundant and perfect numbers.

    // Place the 3rd star on the number line below where you think the next perfect number might be. Just make a guess.
    // Tick marks at every number aren’t needed. Just at the 10’s is fine. This is just the image I found to use for a number line. And make the font size of the multiple of 10’s smaller than the font size of 6 and 28 so the perfect numbers numbers stand out more.
    // Students will drag the 3rd star somewhere on the number line
    // Students can click the “zoom out” button if they want to go above 100. Each time, the number line will be bigger by 100, from 0-200, then 0-300 and so on.
    // After students place their star, a tutor comment will say “Good guess. But the next perfect number is actually 496.” At this point the 3rd star will rise above the number they placed it, the number line will zoom out to 0-500 and the three stars will be at 6, 28 and 496. Then, the following text will appear under the numberline.

The next perfect number doesn’t appear until 8,128! Then, the number line will zoom out quickly to 0 to 10,000 with stars above 6, 28, 496 and 8128.
The gaps between perfect numbers continue to grow and grow. The first 8 perfect numbers are:

The first four of these numbers were already known to ancient Greek mathematicians, and the last one in the list above was calculated by the famous mathematician Leonard Euler in 1772.

Today, mathematicians use supercomputers to check for perfect numbers. The latest one - the 51st perfect numbers - was discovered in 2018 and is 49,724,095 digits long! That’s not the number - that’s how many digits it has. The number begins as 110847779864… and ends with …007191207936.

    // Click here for text file. Maybe instead have a pop up of the number they can scroll through if they want? I think it’s pretty cool just to open it and scroll for a while...

    //- x-modal#share: .modal-body
      h2 The Largest Perfect number
      .share-row

Notice that all these perfect numbers are [[even | odd]]. In fact, all known 51 perfect numbers are even. Greek mathematicians wondered if there were any odd perfect numbers. Their question remains unanswered today. It is still unknown if there are any odd perfect numbers, making this the oldest unsolved problem in all of mathematics!

---

### Square Numbers

The idea of even and odd also comes up when we look at how many factors each number has. Let’s now move back to including the number itself as one of the factors. Since factors come in pairs, we might initially think that all numbers have an even number of factors. For example, the factor pairs for 20 are 1 × 20, 2 × [[10]] and 4 × [[5]]. So, 20 has 6 factors which is indeed [[even | odd ]]. However, let’s explore all the factors of 36. As you did before, more the tab to create all possible factor pairs for 36.

    // Start with 2 rows of 18 with the 1st two factor pairs listed. Now, anytime a rectangle is made, the numbers show up on the sides and then the factors get added into the list. The list starts out with blanks in it where the numbers will go so students will know when they are done or not.

    figure
      x-factor-rect.m-purple(size="18:2")

36 has [[9]] total factors which is an [[odd | even]] number of factors. How did this happen? You may have noticed that one of the arrangements for 36 is a 6 by 6 square.

6 × 6 does equal 36. However, when we list the factors of 36, we only need to list the 6 once. This gives us an odd number of factors! So, any number that can be formed into a square will give an odd number of factors.

---
> id: square-list

Below are the first 8 numbers that can be made with a square number of tiles.

::: column.fit(parent="padded-thin")

    x-factor-rect.m-yellow(size="1:1" static)

{.caption} 1 square

::: column.fit

    x-factor-rect.m-orange(size="2:2" static)

{.caption} 4 squares

::: column.fit

    x-factor-rect.m-red(size="3:3" static)

{.caption} [[9]] squares

::: column.fit

    x-factor-rect.m-purple(size="4:4" static)

{.caption} [[16]] squares

::: column.fit

    x-factor-rect.m-blue(size="5:5" static)

{.caption} [[25]] squares

::: column.fit

    x-factor-rect.m-teal(size="6:6" static)

{.caption} [[36]] squares

::: column.fit

    x-factor-rect.m-green(size="7:7" static)

{.caption} [[49]] squares

::: column.fit

    x-factor-rect.m-lime(size="8:8" static)

{.caption} [[64]] squares

:::

---

These numbers are called [__square numbers__](gloss:square-number), and they all have an
[[odd|even]] number of factors. We will explore this sequence of numbers, as well as triangular
numbers and other shaped numbers [in the future](/course/sequences/figurate).

---
> id: locker-problem

::: .box.blue
#### The Locker Problem

100 students are lined up at the beginning of a long school hallway with lockers numbered from 1 to
100.

::: x-slideshow

    .todo(slot="stage") diagram

The first student goes down the hall and opens every locker.

The second students goes down the hall and closes every second locker, starting at locker #2.

The third student begins at locker #3 and reverses the state of every third locker: if it’s open,
they close it, and if it’s closed, they open it.

The fourth student begins at locker #4 and reverses the state of that locker and every four locker,
like before. This continues until all 100 students have gone down the hallway.

:::

What numbered lockers are open at the end?

Let’s look at locker 10 as an example. Play the animation below.
	Student 1 opens it.
	Student 2 closes it.
	Student 5 opens it.
	Student 10 closes it.
No other students will touch locker #10 because any student after student 10 will start at a locker past #10. Notice that the students that touch locker 10 - 1, 2, 5 and 10 - are the [[factors | multiples]] of 10. Since 10 has an [[even | odd]] number of factors, every time it gets opened, it also gets closed.

Let’s now look at locker 16:
Student 1 opens it.
	Student 2 closes it.
	Student 4 opens it.
	Student 8 closes it.
	Student 16 opens it.
16 is a square number so it has an [[odd | even]] number of factors. Since the factors don’t come in pairs, the locker will remain [[opened | closed]] at the end. Therefore, all lockers with an [[odd | even]] number of factors will remain open.

All lockers with an odd number of factors are lockers that are square numbers: 1, 4, 9, 16, 25, 36, 49, 64, 81 and 100.

:::



----------------------------------------------------------------------------------------------------



## Divisibility Rules

> section: rules
> id: divisibility-grid

In the following chapters, we will learn how to solve many interesting problems using the factors
and multiples of numbers. To do that, it is very useful to quickly tell if one number is divisible
by another – for example, is 3861 divisible by 3?

::: column.fit(parent="right")

    x-number-grid.medium

::: column.grow

In this number grid, we have highlighted all multiples of ${n}{n|2|2,12,1}. As you move the slider,
notice how every number forms a different, regular pattern of multiples.

{.reveal(when="var-0")} By trying to understand how these patterns form, we can quickly tell whether
a number is divisible by another – without having to the actual division.

{.reveal(when="var-0")} You can simply memorise __divisibility rules__ for different small integers
– but thinking about _why_ they work also reveals many important properties of our number system.
[Continue](btn:next)

:::

---
> id: div-2

### Divisibility by 2 and 5

A number is divisible by 2 if it is [[even|odd]]. This means that to check whether a number is
divisible by 2, we just have to check that the last digit is [[0]], [[2]], [[4]], [[6]], or [[8]].

    figure: x-number-grid(rows="3")

---
> id: div-5

Similarly, a number is divisible by 5, if it ends in a 0 or [[5]].

    figure: x-number-grid(rows="3")

---

We call patterns and observations like these [__divisibility tests__](gloss:divisibility-tests),
because they are useful for “testing” if one number is divisible by another. It doesn’t matter how
long the number is, from 28 to 47,928,349,828 – we just have to look at the last digit. For example,
both of these numbers [[are|are not]] divisible by 2 and [[are not|are]] divisible by 5.

---

{.fixme} You’ve probably counted by 2’s and 5’s enough to believe these divisibility tests work. However, let’s work to understand some of the math behind the scenes in these examples to help us figure out some other divisibility tests.

{.fixme} We need to first establish an important idea about combining multiples of a number.

{.fixme} Here are 3 groups of 4 and 5 groups of [[4]]. Both pictures represent [[multiples | factors]] of 4.  Upon correct answer, show the labels below the diagrams.

{.fixme} Put the rectangles together to make one big rectangle. Show a hand directing students to slide the blue rectangle over to the right. Change both rectangles to purple upon making one rectangle.

{.fixme} Our new rectangle is [[8]] groups of 4. So, (3 × 4) + (5 × 4) = (8 × 4). The purple rectangle is also a [[multiple | factor]] of 4. So, adding two multiples of 4 produces another multiple of 4. Upon correct answer, students go through a similar example with less text.

{.fixme} Upon correct answer, a hand shows up showing students to combine the rectangles as above. Here is the End State to that:

{.fixme} Here, we’ve combined 3 multiples of 5 to create another multiple of 5. Combining rectangles like this shows us that that, in general, whenever we add together multiples of a number, the sum is another multiple of that number.

---

### Divisibility by 10

{.fixme} The easiest divisibility test is for 10: we just need to check if the [[last digit is 0 | last digit is 1 | last digit is even]].

{.fixme} The reason why the divisibility rules for 2, 5 and 10 are so easy is that we use a base-10 number system, and 2, 5 and 10 are all factors of 10. Let’s have a look at what that actually means.

{.fixme} This place value is the “tens” and represents how many full groups of tens are in the number. So, this 80 is a [[multiple | factor]] of 10. Each place value to the left is 10 times bigger than the one before it, so the 6000 and 300 are also multiples of 10.

{.fixme} 6 3 8 0
(show the =6000, =300, =80 and =0 below the number in gray as in the current chapter)

{.fixme} The number 6380 is composed of 3 multiples of 10, plus nothing in the ones pace. We are adding three multiple of 10, so the number is indeed a multiple of 10. 6380 [[is | is not]] divisible by 10. Any amount other than 0 in the one’s place will result in three multiples of 10 (6000 + 300  80) being added to a number that is NOT a multiple of 10. So, a number like 6,387 [[is | is not]] divisible by 10.

---

{.fixme} The smallest place value that is a multiple of 2 is the [[10s | 100s | 1000s]] place. The smallest place value that is a multiple of 5 is also the [[10s | 100s | 1000s]] place. So, like we showed with 10 above, all we need to do is check the digit in the ones place. Let’s go through an example:

			6,385 = [[6,380]] + 5.

{.fixme} Upon correct answer of 6380 above, show each part moving to the columns in the table below.

{.fixme} Divisible by 2?
Divisible by 5?
Divisible by 10?
6,380
[[ ✅  | × ]]
[[ ✅  | × ]]
[[ ✅  | × ]]
5
[[ × | ✅  ]]
[[ ✅  | × ]]
[[ × | ✅  ]]
6,385
[[ × | ✅  ]]
[[ ✅  | × ]]
[[ × | ✅  ]]
Fill in the cell of the table green or red based on the correct answer.

{.fixme} Upon correct answer:
We don’t need to go through this process each time while performing the divisibility test for 2, 5 or 10. We can just check the last digit of the number.

{.fixme} Divisible by 2?
Divisible by 5?
Divisible by 10?
3,546
[[ ✅  | × ]]
[[ × | ✅  ]]
[[ × | ✅  ]]

{.fixme} Fill in the a digit to make this number divisible by 2, 5 and 10:	47,62[[0]].

---

{.fixme} Show a 10 × 10 grid with all the multiples of 2, 5 and 10 in a different color. Notice how the multiples of 2, 5 and 10 line up in the grid below. The digits in the ones place confirm the divisibility tests we just learned. As you move this slider again to show the multiples of , notice that both the visual pattern and the pattern of digits in the ones place is not as clear as it is for 2, 5 and 10. So, the divisibility tests for other numbers becomes more complicated.

---

### Divisibility by 4

{.fixme} Unfortunately 4 doesn’t divide 10, so just looking at the last digit no longer works. For example, some numbers that end in 4, like 44, are divisible by 4. Some numbers ending in 4 are NOT divisible by 4. One example is [[--]].

{.fixme} The smallest place value that is divisible by 4 is the [[10s | 100s | 1000s]] place. So, any number that ends with two 0’s is a multiple of 100 and therefore also a multiple of 4:

{.fixme} 4500 = 45 × [[100]]
    = 45 × (25 × [[4]])
    = 1125 × 4

{.fixme} 4 × 1125 = 4500, so 4500 [[is | is not]] divisible by 4. Adding any multiple of 4 onto to 4500 will create another number that is divisible by 4. Fill in the blanks below to create numbers that are divisible by 4:

{.fixme} Upon a correct answer, the number turns green. If incorrect, it turns red. When turning green, maybe underneath it, have it show the factor pair with 4. So, if students enter 16 and make 4516, underneath 4516, 4 × 1129 would show up in a light gray underneath it. For the last two, there are multiple answers of course, When students enter the correct answer, have the tutor comment tell them all the other possible answers.

{.fixme} 45[[ _ _ ]]			452[[ _ ]]				45[[ _ ]]2

{.fixme} Therefore, to check to see if a number is divisible by 4, we only need to see if the two-digit number in the tens and ones place is divisible by 4:

273,524 	=	273,500 			+ 		[[24]]
			[[is | is not]] divisible by 4			[[is | is not]] divisible by 4

{.fixme} 273,524 is the sum of two multiples of 4, so it [[is | is not]] divisible by 4.

{.fixme} Let’s do one more example:

{.fixme} 19,418		=	19,400				+		[[18]]
			Always divisible by 4				[[is | is not]] divisible by 4

{.fixme} 19,418 is the sum of a number that is a multiple of 4 and of a number that is NOT a multiple 4, so 19,418 [[is not | is]] divisible by 4.

{.fixme} To simplify this, we just need to check the last two digits of any number. 36 is divisible by 4, so 828,736 is divisible by 4.

---

### Divisibility by 8

{.fixme} The smallest place value that is divisible by 8 is the [[10s | 100s | 1000s]] place. Upon correct answer: 8 × 125 = 1000, so every number ending in “000” is divisible by 8. We just need to check to see if the number formed by the first three place values is divisible by 8.

{.fixme} 271,325 = 271,000 + 325
Always divisible by 8 [[is not | is]] divisible by 8

{.fixme} So, 271,325 [[is not | is]] divisible by 8. Again, we can simplify the process by just checking the last three digits of the number. 120 is divisible by 8, so 97,120 is also divisible by 8. 80 is divisible by 8, so 417,080 [[is also | is not]] divisible by 8. Enter a number in the ones digit of this number to make it divisible by 8: 32,56[[0 or 8]].

{.fixme} Summary of using place value somehow in a table...
Let’s summarize what we’ve learned so far.

{.fixme} A number is divisible by 2 if the last digit is [[even | odd]].
A number is divisible by 4 if the number formed by the last [[2]] digits is divisible by 4.
A number is divisible by 5 if the last digit is [[0]] or 5.
A number is divisible by 8 if the number formed by the last [[3]] digits is divisible by 8.
A number is divisible by 10 if the last digit is [[0]].

{.fixme} See how you do using these divisibility tests!
Make a quiz like the Factors/Multiples quiz. The set up will be:

{.fixme} is divisible by
	(some number)				(some number)
{.fixme} Is NOT divisible by

{.fixme} Here are the questions to appear in random order.

{.fixme} 4836 is divisible by 2.
31197 is not divisible by 2.
12816 is divisible by 4
4030 is not divisible by 4
32,875 is divisible by 5
105,912 is not divisible by 5
12,816 is divisible by 8
9,042 is not divisible by 8
1,326,450 is divisible by 10
23,739,215 is not divisible by 10

---

### Divisibility by 3

{.fixme} 10 [[is | is not]] divisible by 3, nor is 100 or 1000. In fact, since there is not any place value that is divisible by 3, the divisibility test for 3 is a little more complicated. To start working towards a test for 3, let’s first notice that all of these numbers are multiples of 3:

{.fixme} 99,999 	9,999		999		99		9

{.fixme} Each one is [[1]] less than a place value in our number system. We can use this pattern to figure out a divisibility test for 3. Let’s take the number 6,384. Make this whole next section a slide show:

{.fixme} 6384 = 6 × [[1000]] + 3 × [[100]]	+ 	8 × [[10]]	+ 	4

{.fixme} Upon correct answer show each addend above moving to stack in a column as shown below:

{.fixme} 6 × 1000 		= 		6 × 999	+ 	[[6]]
(1000 groups of 6)			(999 groups of 6)	(upon correct answer, show 1 group of 6)

{.fixme} 3 × 100		=		3 × 99		+ 	[[3]]
(100 groups of 3)			(99 groups of 3)	(upon correct answer, show 1 group of 3)

{.fixme} 8 × 10			=		8 × 9		+	[[8]]
(10 groups of 8)			(9 groups of 8)		(upon correct answer, show 1 group of 8)

{.fixme} Upon correct answers, an animation happens showing the red and green pieces above moving back into place to show create the following:

{.fixme} 6384	=  6 × 999 + 6	+ 3 × 99 + 3 + 8 × 9 + 8 + 4

{.fixme} Rearranging the order of items being added [[does | does not]] change the answer. Upon correct answer, rearrange the red and green to make the following:

{.fixme} 6384 = 6 × 999 + 3 × 99 + 8 × 9 + 6 + 3 +8 + 4

{.fixme} This arrangement can help us check to see if 6384 is divisible by 3. Since 9, 99, and 999 are divisible by 3, each item in red [[is | is not]] divisible by 3. Adding multiples of 3 creates another multiple of 3 so the entire sum of the red numbers [[is | is not]] divisible of 3. Upon correct answer, add a label under the red items as follows:

{.fixme} 6384 = 6 × 999 + 3 × 99 + 8 × 9 + 6 + 3 + 8 + 4
	     (DIVISIBLE BY 3)

{.fixme} We now need to check the numbers in green. 6 + 3 + 8 + 4 = [[21]]. 21 is divisible by 3 as well. Upon correct answer show:

{.fixme} 6384 = 6 × 999 + 3 × 99 + 8 × 9 + 6 + 3 + 8 + 4
	     (DIVISIBLE BY 3)  +   (DIVISIBLE BY 3)

{.fixme} 6384 is the sum of two numbers that are divisible by 3, so 6384 [[is also | is not]] divisible by 3. 2128 × 3 = 6384

---

{.fixme} All the numbers in RED will always be divisible by 3 no matter the original number. The numbers in GREEN are the same as the digits of the number and will sometimes be divisible and 3 and sometimes not. So, to see if a number is divisible by 3, we just need to check if the sum of the digits of the numbers is divisible by 3. The digit sum of 32,652 is 3 + 2 + 6 + 5 + 2 = [[18]]. 18 is divisible by 3 so 32,652 is also divisible by 3.

{.fixme} Make this a quick slideshow as well. After each line, they push a button or an arrow to show the next line. They don’t need to enter in answers here, but I think seeing the breakdown of the numbers again is helpful.

{.fixme} 32652 = (3 × 10000) + (2 × 1000) + (6 × 100) + (5 × 10) + 2
	= (3 × 9999 + 3) + (2 × 999 + 2) + (6 × 99 + 6) + (5 × 9 + 5) + 2
	= (3 × 9999 + 2 × 999 + 6 × 99 + 5 × 9) + (3 + 2 + 6 + 5 + 2)
	= (some number that we know is divisible by 3) + 18

{.fixme} Try these two:

{.fixme} Digit Sum
Divisible by 3
4,381
[[16]]
[[ × | ✅  ]]
831,348
[[27]]
[[ ✅  | × ]]

---

### Divisibility by 9

{.fixme} We developed the test for 3 based on the fact that each place value is 1 above a number that is divisible by 3. Those numbers were 9, 99, 999, 9999 and so on. Well, these numbers are also divisible by 9. So, the same approach applies to determine if a number, say 8,726, is divisible by 9. Students click through to see each line below

{.fixme} 8,726 	= 8 × 1000 + 7 × 100 + 2 × 10 + 6
	= 8 × 999 + 8 + 7 × 99 + 7 + 2 × 9 + 2 + 6
	= 8 × 999 + 7 × 99 + 2 × 9 + 8 + 7 + 2 + 6
	= Always divisible by 9 + we need to check and see
	= Divisible by 9 + 23
	= Divisible by 9 + A number that [[is not | is]] divisible by 9

{.fixme} Since 23 is not divisible by 9, 8,726 [is also not | is also]] divisible by 9. As with 3, we don’t need to go through the above analysis every time. The work above shows the mathematics as to why the test works. We simply need to see if the sum of the digits of the number is divisible by 9. Try these two:

{.fixme} Digit Sum
Divisible by 3
42,093
[[18]]
[[ ✅  | × ]]
8,437
[[22]]
[[ × | ✅  ]]

---

### Divisibility by 6

{.fixme} In the grid below, click all numbers divisible by 6.

{.fixme} Upon clicking each multiple of 6, the number will have a bold, red outline around the circle. Upon selecting all correct numbers, students see this (with all multiples of 6 outlined in red):

{.fixme} Students click on each button and then see the following. Again, all multiples of 6 also have a thick red line around them:

{.fixme} Notice that every number divisible by 6 is divisible by 2 [[and also | but not]] divisible by 3. So, to test if a number is divisible by 6, we need to test if the number is divisible by 2 and 3.

{.fixme} Divisible by 2?
Divisible by 3?
Divisible by 6?
414
[[ ✅  | × ]]
[[ ✅  | × ]]
[[ ✅  | × ]]
8036
[[ ✅  | × ]]
[[ × | ✅  ]]
[[ × | ✅  ]]
903
[[ × | ✅  ]]
[[ ✅  | × ]]
[[ × | ✅  ]]

{.fixme} 2 × 3 = 6 and this test happens to work for 6, but not for any number that is the product of two other numbers. For example, 2 × 10 = 20, but 30 is divisible by 2 and 10, but not by 20. We’ll learn more about when tests like this do and don’t work in future Mathigon chapters.

---

### Divisibility by 11

{.fixme} The beauty of the structure of mathematics shows up even more in the 11 divisibility test. For this test, we’ll start with how the test works and then explain the underlying mathematics. 948,453 is divisible by 11 because 86,223 × 11 = 948,453.

{.fixme} To show the test, students read the instruction on the left, then click “Show Me,” and then see it happen on the right. Then, the next instruction appears below it.

{.fixme} Starting at the left, highlight every other digit			948,453

{.fixme} Now highlight every other digit				948,453

{.fixme} Add up all the yellow digits and				9 + 8 + 5 = [[22]]
Add up all the green digits					4 + 4 + 3 = [[11]]
Show the 9, 8 and 5 moving into place below and the same with the 4, 4, and 3.

{.fixme} Now subtract the two sums					22 - 11 = [[11]]

{.fixme} Notice that the difference of the sums is 11 and 948,453 is divisible by 11! This process is the divisibility test for 11. If the answer to the final subtraction problem is a multiple of 11 (0, 11, 22, 33 etc..), then the number is divisible by 11. Let’s check it out one more time before we work to understand the math behind the scene.

{.fixme} Create a number divisible by 11 by entering in any 4-digit number: 	11 × [[----]] = --------

{.fixme} Now, show the students the same process outlined above for the multiple of 11 they just created.

---

{.fixme} This seemingly random process can be explained through place-value just like the other divisibility tests - it’s just a tad more complicated.

{.fixme} In understanding the other divisibility tests, we did one of two things:

{.fixme} We found place values that were divisible by the number of interest (like 2, 4, 8  and 10)

{.fixme} We found place values that were one away from a number divisible by the number of interest (9, 99, 999 and so one were all one way from place values).

{.fixme} Below are the first 6 place values.

{.fixme} 100,000       10,000	   1,000   100	 10	1
Blanks just show up under 10 and 100
Enter the closest multiple of 11 for 100 and 10		              [[99]]    [[11]]

{.fixme} Once students fill in those two, the rest show up underneath the place value in a different color.

{.fixme} Place Value:	100,000	10,000		1,000		100		10		1
Mult of 11:	100,001	9999		1001		99		11		0

{.fixme} Notice that each place value is either [[1]] above or 1 [[below | above]] a number that is divisible by 11. This is helpful when we check if a number like 836 is divisible by 11:

{.fixme} 836 = 		8 × [[100]] 	+ 		3 × [[10]] 	+ 		6

{.fixme} 836 = 	 (8 × 99)   [[+ | -]]      8		+ 	3 × 11         [[- | +]]     3	+            6
        (99 groups of 8) + (1 group of 8)        (11 groups of 3)  -  (1 group of 3)

{.fixme} Upon correct answer, show regrouping to the following

{.fixme} 836 = (8 × 99) + (3 × 11) + 8 - 3 + 6
	(divisible by 11)     (we need to check)

{.fixme} The red items above are divisible by 11, so we just need to check the single digits left over. 8 - 3 + 6 = [[11]]. This shows that 836 is the result of adding up numbers divisible by 11 so 836 [[is | is not]] divisible by 11. All we really had to check is the result of adding and subtracting the digits in the number.

---

{.fixme} In the tests for 3 and 9, we just add up all the digits of the number since each place value is one more than a multiple of 3 and 9. For 11, the place values alternate between being one more and one less than a multiple of 11, so we must alternate between adding and subtracting the digits of the number.

{.fixme} Click through the slideshow below to see this analysis for the number 58,234. Pay attention to the alternating of adding and subtracting the digits.

{.fixme} 58234 = (5 × 10,000) + (8 × 1,000) + (2 × 100) + (3 × 10) + 4
	= (5 × 9999 + 5) + (8 × 1001 - 8) + (2 × 99 + 2) + (3 × 11 - 3) + 4
	= (5 × 9999 + 8 × 1001 + 2 × 99 + 3 × 11) + 5 - 8 + 2 - 3 + 4
	     (always divisible by 11)		(we need to check)

{.fixme} We can group all the yellow and green numbers as follows:

{.fixme} 5 + 2 + 4 - 8 - 3. This is the same as:

{.fixme} 5 + 2 + 4 - (8 + 3)

{.fixme} [[11]] - [[11]] = [[0]] which is divisible by 11, so 58234 is also divisible by 11.

---

{.fixme} Like the other tests, this place-value analysis is not needed every time. To see if 32,419 is divisible by 11 we just do the following

{.fixme} (Sum of every other digit starting on the left) - (sum of the leftover digits)

{.fixme} ( 3 + 4 + [[9]] )  -  (2 + [[1]] )

{.fixme} [[16]]   -  [[3]]

{.fixme} [[13]] [[is not | is]] divisible by 11, so 32,419 is [[also not | also]] divisible by 11.

---

### Other Divisibility Tests

{.fixme} There are all sorts of other divisibility tests, including one for 7, but those become more and more complicated. For now, practice the tests we’ve learned.

{.fixme} Make a quiz like the Factors/Multiples quiz. The set up will be:

{.fixme} is divisible by
	(some number)				(some number)
Is NOT divisible by

{.fixme} Here are the questions to appear in random order.

{.fixme} 832 is divisible by 2.
487,191 is not divisible by 2.
828 is divisible by 3
1234 is not divisible by 3
8024 is divisible by 4
9142 is not divisible by 4
16,340 is divisible by 5
89,314 is not divisible by 5
294 is divisible by 6
148 is not divisible by 6
127,832 is divisible by 8
82,317 is not divisible by 8
6525 is divisible by 9
9137 is not divisible by 9
29,320 is divisible by 10
8925 is not divisible by 10
9284 is divisible by 11
57,106 is not divisible by 11

---

{.fixme} Show a chart with numbers 0 to 99. Beside each number is a symbol - we should have 10-12 different symbols to assign to each number. The symbols can be randomly assigned, but all the multiples of 9 from 9 to 81 NEED TO BE THE SAME SYMBOL. It’s best if 0, 90 and 99 are different symbols from the other multiples of 9. Something like this, but going from 0 to 99 and a symbol next to each.

{.fixme} Pick any two digit number in your head. Find the sum of those two digits and then subtract that sum from the number you picked. For example, if you picked 17 as your starting number, you would do 17 - 8 since 1 + 7 equals [[8]]. Upon correct answer: In the chart above, find the symbol next to your ending number. Concentrate hard on that symbol and click below when you’re ready. Have a button with the words below. When students click it, the chart gets replaced with the symbol that was with the multiples of 9.

{.fixme} SHOW ME MY SYMBOL

{.fixme} The symbol stays there for 2-3 seconds and then it fades away and is replaced again by the chart. This time, the symbols are randomly assigned differently. The following text appears. Try it again with a new starting number:

{.fixme} SHOW ME MY SYMBOL

{.fixme} Again, the symbol stays there for 2 seconds and then it fades away and is replaced again by the chart. This time, the symbols are randomly assigned differently. The following text appears. Try it one more time with a new starting number:

{.fixme} SHOW ME MY SYMBOL

{.fixme} Again, the symbol stays there for 2 seconds and then it fades away and is replaced again by the chart. The following text appears.

{.fixme} While it may seem like Mathigon is reading your mind, let’s see if we can understand this trick. Enter 4 different starting numbers in the table below. Upon entering the starting number the rest of the table if filled in automatically:

{.fixme} The final answer always seems to be divisible by [[9]]! Upon correct answer, add two more blank rows to the table. Check this pattern by entering in two more numbers into the table. Upon entering those numbers: The patterns hold true - the final answer is always divisible by 9. In fact, you may notice that the final answer is always 9 times the number in the tens place of the starting number.

{.fixme} Now look at the number chart. Show the chart again with a “refresh” button below it. Highlight all the multiples of 9. Upon clicking, All symbols next to these numbers are [[the same | different]]. Refresh the chart a few times. Each time the symbols next to the multiples of 9 are the same. When students refresh the chart, the symbols refresh and the multiples of 9 from 0-81 stay highlighted for students.

{.fixme} After 3 refreshes, show the following: So, while it seems like the symbols are randomly changing each time, the multiples of 9 always have the same symbols next to them. Therefore, whatever picture you are thinking of (as long as you do the subtraction correctly!) is one of the symbols next to a [[multiple | factor]] of 9. Upon correct answer:

{.fixme} Let’s end the chapter by proving that the final number in this process is always a multiple of 9. You started with any two-digit number. Let’s call this number AB.

{.fixme} AB = 10 groups of [[A]] + 1 group of [[B]].

{.fixme} Upon correct answer. Then, you added the two digits together: A + [[B]]. This is 1 group of A and 1 group of B. Finally, you subtracted this from the starting number:
	= 10 groups of A + 1 group of B - 1 group of A - 1 group of B
	= [[9]] groups of A + [[0]] groups of B

{.fixme} Upon correct answer:
The final result is 9 groups of A. A is the number in the [[tens | ones]] place of the starting number. 9 × A will always be a multiple of 9 so we’ve proven that the final number in this series of calculations will indeed be divisible by 9, no matter what 2-digit number you start with!



----------------------------------------------------------------------------------------------------



## Prime Numbers

> section: primes
> id: ishango

::: column(width=116)

    x-image-sequence(image="url(images/ishango.jpg)" tiles="21,4" size="116,400")
    x-gesture(target="x-image-sequence" slide="60,0")

::: column.grow

The __Ishango bone__ is more than 20,000 years old, and one of the few remaining _composite tools_
from prehistoric times. It has an animal bone as a handle, and a small piece of quartz attached at
the top, which may have been used for engraving and writing. The bone was discovered in 1950 in
central Africa, near the border between present-day Uganda and Congo.

Carved into the bone are 168 notches, which are grouped and separated into three rows. For example,
if you count the number of notches in the first row, you get the numbers 11, 13, 17 and 19.

    figure(style="margin:0"): img(src="images/ishango-chart.png" width=400 height=150)

:::

Which other numbers can you see on the bone, and what do you notice about the patterns and
properties of those numbers?

    x-free-text

---
> id: ishango-1

In the [first chapter](/course/divisibility/factors), we used rectangular arrangements of tiles to
explore factor pairs. Let’s do this with the numbers in the first row of the Ishango Bone. Like
before, you can move the tabs to change the number of columns to find all possible factor pairs:

::: column(width=160 parent="padded-thin")

{.fixme} 11 Rectangle

::: column(width=160)

{.fixme} 13 Rectangle

::: column(width=160)

{.fixme} 17 Rectangle

::: column(width=160)

{.fixme} 19 Rectangle

:::

---
> id: ishango-2

Notice how all four of these numbers only have a single possible rectangular arrangement, either as
a single row or a single column of squares. This means that these numbers only have [[two]] factors:
_{span.reveal(when="blank-0")} 1 and the number itself. For example, the only way to multiply two
integers to get 17 is 1\ ×\ 17._

---
> id: primes

{.fixme} Numbers like this, which have exactly two factors, are called [__prime numbers__](gloss:prime), or
just __primes__. Can't be divided. Atoms or building blocks of all numbers.

Other numbers, with more than two factors, are called __composite numbers__. The word “composite”
simply describes anything made up of multiple parts. For example, the Ishango Bone is a _composite_
tool because it is made up of a bone and a piece of quartz. Similarly, _composite numbers_ are
those with multiple factor pairs.

The number 1 is special because it only has a single factor – itself. This means that it is neither
prime nor composite. In later chapters, we will find out why it is helpful to say that 1 is not
a prime number.
[Continue](btn:next)

---

Prime numbers have fascinated mathematicians for thousands of years. They also appear in nature and
have many different applications in technology and engineering.

::: column(width=220 parent="padded-thin")

{.fixme} Something about Greek mathematicians / Euclid

::: column(width=220)

{.fixme} Picture of cicadas

{.caption} Cicadas in North America emerge in cycles of either 13 and 17 years. Both are prime
numbers!

::: column(width=220)

{.fixme} Picture of computer networks

{.caption} Prime numbers can help keep your data private when you send messages online.

:::

Some believe that the creators of the Ishango Bone knew about prime numbers more than 20,000 years
ago. Others think that the groupings notches were just a coincidence, or that they represent some
form of calendar. Regardless, there is great mathematical allure and delight in prime numbers, and
they will form an important part of your toolkit as a mathematician.

---
> id: prime-picker-1
> goals: picker

### Finding Primes

How do we tell if a number is prime? For small integers, you can use your knowledge of
multiplication facts to check if a number has any other factors. Can you click on all the prime
numbers below?

    figure: x-prime-picker
      for n in [2, 3, 5, 7, 11, 13, 19, 23, 4, 8, 10, 12, 15, 21, 25, 27, 28]
        .bubble= n

---
> id: prime-picker-2

As numbers become larger, our [divisibility tests](gloss:divisibility-tests) can help determine
whether they are prime or composite. For example, the number 51 might initially seem prime, but
its digit sum is [[6]], which means that 51 is [[divisible by 3|divisible by 6|a prime number]].

---
> id: prime-picker-3
> goals: picker

Like before, try to click on all the prime numbers floating around below. Remember to use the
divisibility tests and check the digit sum!

    figure: x-prime-picker
      for n in [109, 137, 163, 179, 111, 153, 189, 207]
        .bubble= n

---

{.fixme} Our divisibility tests are helpful, but they won’t sort all numbers correctly. 91 is [[odd | even]] and ends in a 1, so it is not divisible by 2, 4, 5, 6 or 10. It’s digit sum is [[10]], so it is not divisible by 3 or 9. And 91 [[is not | is]] divisible by 11. All our divisibility tests fail, so we may initially think it is prime, but 13 × [[7]] = 91. 91 is [[composite | prime]]. So, don’t automatically assume a number is prime if all our divisibility tests fail.

{.fixme} Play a few rounds of the game [Is it Prime](https://isthisprime.com/game/). Let students control the challenge level by using a slider to set the highest number (from 50 to 150).

---
> id: sieve

### The Sieve of Eratosthenes

{.fixme} Checking factors to determine if a number is prime or composite becomes more and more challenging as numbers get larger and larger. The Greek mathematician [Eratosthenes of Cyrene](bio:eratosthenes) came up with a simple process to find all prime numbers up to 100: the Sieve of Eratosthenes.

::: x-slideshow

    div(slot="stage")
      x-number-grid(style="margin: 0 auto 36px")
      x-gesture(target="#sieve x-number-grid > *")

First, we need to write down all numbers up to 100. We know 1 is not prime, so let's remove it.

{.fixme} The smallest prime number is 2. Any multiple of 2 is not prime since 2 is a factor of it. Begin clicking on multiples of 2 to remove them from the list. Students begin clicking on multiples of 2. Each time, the number they click on turns red and then fades away. After they’ve clicked on 5 multiples of 2, all the other multiples of 2 turn red and fade away.

{.fixme} The next number on our list is 3 - again a prime number. Any multiple of 3 is not prime. Begin clicking on multiples of 3 to remove them from the list as well. Students begin clicking on multiples of 2. Each time, the number they click on turns blue and then fades away. After they’ve done 5 or so, all the other multiples of 3 turn blue and fade away.

{.fixme} The next number,  4, is already crossed out since it is a multiple of 2 and therefore composite. So, we move on to 5. It is prime so click on multiples of 5 to remove them from the list. Same process as above.

{.fixme} The next prime number must be 7, since 6 is already crossed out. Once more, click on all its multiples.

{.fixme} The next prime number is 11. Notice, however, that all of its multiples are already crossed out. The same is actually true for all other remaining numbers. Therefore, all these remaining numbers must be prime.

:::

---

We can could all the remaining numbers in the grid to find that there are [[25]] prime numbers less
than 100.

{.fixme} The Sieve of Eratosthenes can be continued to find prime numbers above 100.
Between 100 and 200, there are 21 prime numbers.
Between 200 and 300, there are 16 primes numbers.
Between 400 and 500, there are 17 prime numbers.
Between 10,000 and 10,100, there are only 11 primes.

{.fixme} The primes seem to keep getting more and more spread out. We will explore the distribution of prime numbers in future chapters. For now, let’s think about if prime numbers ever stop? Is there a biggest or a last prime number?

---

### How many prime numbers are there?

{.fixme} Let first answer the question if the list of prime numbers ever stops. We are going to use a process first used by Ancient Greek mathematician Euclid of Alexandria.

{.fixme} Imagine the only prime numbers you know are 2, 3, 5 and 7. 2 × 3 × 5 × 7 =[[210]]. 210 is a [[multiple | factor]] of 2, 3, 5, and 7
Upon correct answer, show a number grid similar to the 1-100 grid, but have it go from 200 to 300. 210 should be split into fourths with each fourth a different color - red, blue, green and purple (or other colors). This is not the correct grid - just placing here as an example.

{.fixme} Once 210 becomes colored, show the following text:
Now let’s think about the number 211 - the number that is 1 more than the product of our prime numbers. Starting at 210, click on the next 3 multiples of 2. Each one turns red when students click on it, Upon clicking on 3 correctly, all multiples of 2 turn red. Then, show the following:

{.fixme} 211 is one more than a multiple of 2, so 211 [[is not | is]] divisible by 2.

{.fixme} Upon correct answer, show
211 is one more than a multiple of 3, so 211 [[is not | is]] divisible by 3.

{.fixme} Upon correct answer, all multiples of 3 turn blue and then show
211 is one more than a multiple of 5, so 211 [[is not | is]] divisible by 5.

{.fixme} Upon correct answer, all multiples of 5 turn green and then show
211 is one more than a multiple of 7, so 211 [[is not | is]] divisible by 7.

{.fixme} Upon correct answer, all multiples of 7 turn purple and then show
211 is not divisible by 2, 3, 5 and 7 since it is 1 more than a multiple of each. So, either 211 is prime or 211 is divisible by some other prime number above 7. In this case, 211 happens to be prime. We started this by thinking that 2, 3, 5 and 7 were the only known prime numbers and ending up finding another, [[larger | smaller]] prime number through this process. So, our assumption that 2, 3, 5 and 7 were the only prime numbers was wrong - we found another!

---

{.fixme} Let’s go through this analysis one more time. Imagine we only knew of the prime numbers 2, 3, 5, 7, 11 and 13. Multiplying them together and adding 1 gives the number 30,031. Since 30,031 is [[1]] more than a multiple of 2, 3, 5, 7, 11 and 13, it [[is not | is]] divisible by any of those numbers.

{.fixme} So, either 30,031 is [[prime | composite]] or there is some other prime number it is divisible by.

{.fixme} It turns out 30,031 is not prime. It must have some other prime factors then. It turns out 509 × [[59]] equals 30,031. Upon correct answer: 59 and 509 are both prime numbers. We started this analysis assuming 2, 3, 5, 7, 11 and 13 were the only prime numbers and we found 2 more!

---

{.fixme} This analysis can be replicated with a much, much longer list of prime numbers. If we multiply together the first 100 prime numbers and then add 1, we will have either created a new prime number itself or found a new prime number that is a factor of this created number. This process can continue infinitely.

---

### Finding Large Primes

{.fixme} Knowing that the list of prime numbers goes on forever is very different from knowing some of the very large prime numbers on the list. Throughout history, people have tried to find larger and larger prime numbers.

{.fixme} In 1460, the largest known prime was 131,071. In 1772, Leonard Euler showed that 2,147,483,647 is also prime. With the arrival of computers in the 20th century, calculating large primes became much easier. The largest currently known prime number was discovered in December 2018 and has 24,862,048 digits. Keep in mind, that is not the actual number - it is how many digits are in the number. The prime number 131,071 has [[6]] digits in it. We would need 8000 sheets of paper to print out the largest prime number that has 24,862,048 digits! What do you think is the last digit of this largest prime number? Just make a guess. [[--]]

{.fixme} Upon entering an answer, show a window with the largest prime number in it. The link to the text file is below. Start at the end showing the last digit highlighted and make students scroll for a little bit before letting them move one.

{.fixme} You can put your own computer to work on finding the next largest prime number. Visit the Great Internet Mersenne Prime Search for more information.

---
> id: prime-generator

{.fixme} Generate various prime numbers below

    .calculator
      h3 Prime Generator
      p.no-voice.md Number of digits: ${d}{d|6|2,16,1}
      p.no-voice(style="margin: 10px 0"): button.btn.btn-white Generate
      .result.var(:html="result")

{.fixme} Some see the joy and wonder or creating such large numbers that have no factors other than 1 and itself. Others may consider this a waste of time. However, as mentioned above, anytime browse the internet, scroll through social media, or send any type of message, your phone or laptop is generating massively large prime numbers and exchanging public keys with other computers. These prime numbers are the basis for sending private messages around the internet. In the Cryptography course, you will learn more about the specifics of this encryption process.

{.fixme} Prime numbers appeared as early as 20,000 years ago on the Ishango Bone. Some suggest the marks were used to communicate numerical ideas. Today, prime numbers are the fundamental mathematical tool in ensuring secure communication across the internet! Insert photo of the Ishango Bone and something techy….



----------------------------------------------------------------------------------------------------



## Prime Factorisation

> section: factorisation
> sectionStatus: dev

Our understanding of prime numbers unlocks some powerful mathematical tools for us to use. Let’s start by combining prime numbers in various ways to create composite numbers. Find at least three ways to add prime numbers to equal 14.

OVERVIEW OF GUMBALL MACHINE IDEA:
Show an interactive of gumball machines with prime numbers in each, starting at 2 and giving users the ability to scroll to the right to reveal more and more prime numbers. The balls in each machine should be colored according to this chart. 2s are orange, 3s are green, 5s are blue, 7s are purple and all other primes are red.

Show a floating hand directing students how to click on the turning-handle of the machine to “release” a prime number. Each prime factor should be an actual ball that acts as a physics object so when one comes out of the machine, the other gumballs kind of fall down into place in the machine.

Additionally, the same set up gumballs would move with students down the screen throughout the entire chapter. Later in the chapter, they can just type in primes instead of clicking the handles of the machine. But I would still want a ball from the machine to quickly be released or pop (like a bubble) each time they use a prime factor.

When a given machine is empty (they’ve used all 2’s or something), they need to click “Refill.” Maybe we can have an animation of a cartoon character carrying a box or or sack of 2’s and they open the top of the machine and dump them in. This may seem goofy or elementary and maybe not worth the coding time, but I really do think it helps this age student build deep connections and fundamental understanding of the underlying concept that prime factors are the building blocks of numbers and the idea of combining them to make composite numbers. I think the brain connections being made as the see the machine slowly being depleted and then filled up as needed really do help construct meaning for students.

When students click on the next prime number to be dropped into place, that number gets added to the first one. When their sum gets to 14, the problem becomes grouped in a colored box and there is a “Ding” sound effect. Then, they make some more.

2	and then	2 + 5		and then	2 + 5 + 7

Atter correctly finding one, a tutor comment says, “Great! Now find another.” This process continues until students find 3 options. After finding 3, the ones they haven’t found will be added to their list so students can see the many ways to add primes to equal 14.

Total Ways to Add Primes to Equal 14
3 + 11
7 + 7
2 + 2 + 2 + 2 + 2 + 2 + 2
2 + 2 + 2 + 3 + 5
2 + 5 + 7
2 + 2 + 5 + 5

Keep this list on the left side of the screen, somewhat out of the way, and then show the following:

Now find a way to multiply prime numbers to equal 14.
The same process happens here - students click on the machine to release primes. Eventually, students will be able to type in primes, but I think still making them release primes develops good underlying ideas at this point.

2	and then	2 • 7

After making 2 • 7, show a tutor comment “Great! Can you find another way?” Students should try making another. Once they’ve tried a few attempts, show a tutor comment of “Good try. It turns out 2 • 7 is the only way.” Then show:

Total Ways to ADD Primes to Equal 14	Total Ways to MULTIPLY Primes to Equal 14
3 + 11						2 • 7
7 + 7
2 + 2 + 2 + 2 + 2 + 2 + 2
2 + 2 + 2 + 3 + 5
2 + 5 + 7
2 + 2 + 5 + 5

---

Notice there are many different ways to add primes to equal 14, but only 1 way to multiply primes to equal 14. Let’s try this again with a different number.

Move the slider below to a different number you’d like to work with first. The green 18 below is a slider from 10 to 30, but without any prime numbers on the list. As students move the slider, the yellow 18 below automatically changes to the number in the slider.

The bank of gumball machines floats down. However, from this point on, students can either type in numbers or release them from the machines.

3 of the Ways to ADD Primes to Equal 18	All of the Ways to MULTIPLY Primes to Equal 18

After students enter 3 ways to add and 1 way to multiply, show another 3 ways to add primes to equal the given number so students see that the list is even longer. After this, show the following:

Select another number to try. This process happens the same as above. When they are done, show the following:

Now, move the slider to see the possibilities for other numbers.
Now, moving the slider changes the number and reveals all the possibilities for each number. Once they’ve moved the slider back and forth, show the following questions. They can use the slider to answer the questions. Reveal the questions one at a time.

One of the many ways to add primes to equal 27 is [[ -- ]].
The only way to multiply primes to equal 24 is [[ 3 × 3 × 3]].

One of the many ways to add primes to equal 30 is [[ -- ]].
The only way to multiply primes to equal 30 is [[ 2 × 3 × 5]].

---

As you may suspect, for every number there is only ONE way to multiply primes to equal that number. For example, 2 × 2 × 3 × 7 is the only way to multiple primes to equal [[84]]. This is called the prime factorization of 84 and 2, 3, and 7 are its prime factors. Note that some primes, like 2 in this case, can appear multiple times in a prime factorization.

The Fundamental Theorem of Arithmetic states that every integer has a different prime factorization and that every integer has only 1 prime factorization. You’ll likely prove this algebraically later in your math career.

Every integer has a prime factorization and no two integers have the same prime factorization. And again, there is only a single way to write any number as a product of primes. This is called the Fundamental Theorem of Arithmetic (FTA).

---

We learned in the Prime Numbers chapters that a prime number has exactly [[2]] factors and a composite number has [[more than | less than]] 2 factors. Therefore, 1 is [[neither | prime | composite]]. You may have wondered why 1 isn’t defined as a prime number. Well, if 1 was prime, numbers would have infinitely many prime factorizations. 14 could be 2 • 7, 1 • 2 • 7, 1 • 1 • 2 • 7, and so on. All of these prime factorizations are basically the same, so mathematicians define prime numbers in such a way to avoid this issue. With 1 not being prime, the only prime factorization for 14 is [[2 • 7]].

---

Let’s now visualize some of the patterns of prime factorization.

Show the gumball machine as well as 1-30 of the blank Prime Climb chart.

Important Note - The circles for the numbers should be completely empty - they should not have the outlines as shown in the diagram below:

Part 1 - Make this first part a slideshow with these two images above. Again - the circles are just empty for now.

Slide 1
Click on any 3 prime numbers.
When students do so, a ball from the machines will quickly go to that number and a ring around the number will be colored in according to this chart. Note that 2, 3, 5, 7 have their own color and all the other primes are red. After selecting any 3, all the other primes get filled in as well. Students now click to the next slide.

Slide 2
We know 1 isn’t prime or composite, so let’s fill that in gray.
Students click to the next slide and the 1 circle is filled in gray.

Slide 3
The following numbers should be highlighted in some manner - maybe a light yellow background behind them or a yellow circle around them: 4, 6, 9, 10, 14, 15, 21, 25, 26. Also, as shown in the grid above, now the outline of the prime factor sections for just these numbers should show up.
These composite numbers have 2 prime numbers in their prime factorization. Enter in the prime factors needed to multiply together to equal these composite numbers. Do it for any 3 you like.
Students can either type in directly into the sections around the numbers or drag in prime factors from the gumball machine. When they do 3 correctly, all the other ones get filled in as well.

Slide 4
The following numbers should be highlighted in some manner - maybe a light yellow background behind them or a yellow circle around them: 8, 12, 18, 20, 27, 28, 30. Also, as shown in the grid above, now the outline of the prime factor sections for just these numbers should show up.
These composite numbers have 3 prime numbers in their prime factorization. Enter in the prime factors needed to multiply together to equal these composite numbers. Do it for any 2 you like.
Students can either type in directly into the sections around the numbers or drag in prime factors from the gumball machine. When they do 3 correctly, all the other ones get filled in as well.
ll.

Slide 5
Now highlight 16 and 24.
All we have left are the numbers needing 4 prime factors. Enter in the prime factors needed for one of them.
Students can either type in directly into the sections around the numbers or drag in prime factors from the gumball machine. When they do 1 correctly, all the other ones get filled in as well.

End of slide show.

After the slide show, show a 1-100 number grid with 1-30 colored in and 31-100 just empty circles. Again - these should just be empty circles without any outlines of the sections for the prime factors. Under the grid, show the following.

Enter in the number represented by this coloring.
One of the colored circles appears large on the screen (I envision if flying in from the side of something or maybe bouncing down from the top) right on top of the 31-100 part of the chart. However, we need to be sure it doesn’t cover up the 1-30 rows as students will need to see these rows to help them.

The number will NOT be shown in the middle of the circle - that middle will be a text box for students to enter in the number. Once they do so correctly, the number circle will shrink to the size of the ones in the chart and move into its correct place.

Then, the next one comes up on the screen. Once they do 4 correctly, the entire grid gets filled in. We could either do random composite numbers or use the following: 54, 70, 84, 100. Note - we can’t do primes, because they are all red and indistinguishable from other primes (In the final chart, the number is in the red ring, which defeats the purpose here…)

---

https://depositphotos.com/stock-photos/dna.html?sh=211a00d20650fe5191bd78529b5f16fa&filter=all&qview=12673266

Every living organism contains a unique combination of chemical blocks to form their DNA. The specific combination of the parts of the DNA impacts characteristics of the organism, like eye color for example. Prime factorization can be thought of as a number’s DNA - it is the unique combination of numerical building blocks (primes) needed to create the number. Just like the DNA impacts eye color, we are going to learn how the prime factorization can reveal all sorts of characteristics of the number.

---

### Finding Prime Factorizations

Make the section below into 3 tabs - 60, 990 and 37.

Do we include something after the PF of 60 about rewriting the PF with exponents?

Watch this video for my vision of the prime factorization interactive element here.
https://drive.google.com/file/d/10G1OgzEdcdFnE4zmFhSodwLcj66IdyU7/view?usp=sharing

::: tab

60 = _____ (watch video for details of how this will work)

Possible tutor comments connected to divisibility tests can help. Something like, “Notice 60 ends in a 0. What does this tell you about its factors?” Or “Look at the chart above to help you.”

::: tab

Remember that the divisibility tests we learned can help us find factors of numbers.
Find the prime factorization of 990.

990 =

::: tab

It students struggle for a while, a hovering hand can come up instructing students to click on the arrow at the right of the gumball machine to reveal more prime numbers.

Find the prime factorization of 37.

37 =

Tutor comment upon correct answer: “The Prime Factorization of prime numbers is just the number itself!”

:::

There are many other techniques you may learn for finding the prime factorization of a number. However, computers are pretty good at this as well. Enter any number below to find it’s prime factorization.

Is it easy enough to code something like this? https://www.calculatorsoup.com/calculators/math/prime-factors.php

So, rather than spending time learning various techniques for finding prime factorizations, let’s move onto interesting mathematical uses of prime factorization.

---

Knowing the prime factorization of a number can be helpful for finding all sorts of information about a number. We are going to explore a number of areas below.

What can the prime factorization tell us about the number?
Let’s think about the number with the prime factorization of 2 × 2 × 3 × 5 × 5. Resist the urge to do out the multiplication and answer these questions instead.

Show the PF diagram for this number, but don’t put the actual number in the middle. The sections for the number above would have 2 orange parts, 1 green part, and 2 blue parts. Here is the one for 72 just as a placeholder in the document to show that an image would go here.

The prime factorization contains a 2, so we know the number is [[even | odd]]. Upon correct answer, have one of the orange parts of the ring pop up for a second and then show:

The prime factorization of 15 is [[3 × 5]], which [[is | is not]] in the prime factorization of this number. So, this number [[is | is not]] a multiple of 15. Upon correct answer, have a green and blue part of the ring pop up for a second and show:

The prime factorization of 22 is [[2 × 11]], which [[is not | is]] in the prime factorization of this number. So, 11 [[is not | is]] a factor of this number. Upon correct answer, have the full red ring for 11 hover next to the circle for this number showing that 11 is not a part of it, and then show:

The prime factorization of 100 is [[2 × 2 × 5 × 5]], which [[is | is not]] in the prime factorization of this number. So, 100 is a factor of this number and therefore it must end with [[2]] zeros. Upon correct answer, show two orange and two blue parts of the ring pop up for a second, and then show:

The number we’ve been thinking of is [[300]].

---

The next section will be like a quiz/slideshow. Each slide will start with the following.

Enter in the prime factorization of a number above 200 that you know will _______. The blank on each slide will be filled in with the statements below.

 See this video for how I envision this section going:
https://drive.google.com/file/d/1Tw9Ow7xQVuJDakVTkhukuRG9baok7HzG/view?usp=sharing

Have a factor of 4
Be a multiple of 10
Have a factor of 15
Be a multiple of 77
Have a factor of 30
Be a multiple of 12

---

### Finding all factors of a number

The first attempt at this section was overwritten and had too much text I think. Watch the video at the link below for my new idea based on the visuals in the Prime Climb chart:
https://drive.google.com/file/d/1VLsKIZt5v5yHnmf-k56IWvEbT4J_iO2I/view?usp=sharing

Let’s use the prime factorization of 24 to find all the factors of 24.

		24 = 2 × 2 × 2 × 3

Make factors of 24 by selecting prime factors from the visual above.

Start State
Pick 1

(See the video at the link above for details on this element. If we agree this is the way to go, I will write this up formally)

End State
Pick 1		Pick 2			Pick 3			Pick 4
2		2 × 2			2 × 2 × 2		2 × 2 × 2 × 3
3		2 × 3			2 × 2 × 3

One number that is a factor of 24 is missing from this list: [[1]]. Add “1” to the list above as follows:

Pick None	Pick 1		Pick 2			Pick 3			Pick 4
1		2		2 × 2			2 × 2 × 2		2 × 2 × 2 × 3
3		2 × 3			2 × 2 × 3

Since 1 is a factor of every number, we don’t need to pick any prime factors to create the factor of 1.

---

In the chapter Factors and Multiples, we explored a variety of ways to find all the factors of numbers. We’ve now added another technique. This approach is often more efficient as numbers become larger and have more and more factors. Let’s use the process to find all the factors of 396.

---

I’d like to chat on where to go next from here. So many possibilities:
Combinatorics extension of determining number of factors without listing (see comment though - I think this is a big leap for kids at this point and will require some “work”
Nothing symmetry of the patterns in the table above (the Pick 4 is somewhat the “same” as the Pick 1 since each Pick 4 list has 1 missing, and so on…”
The Matt Parker Marching Band question.
Maybe this can be answered using a slider of some sort or guess and check form the kids part.
Or maybe an easier question on this idea first and then build up to it...

---

### Square numbers

In the Factors and Multiples chapter, we learned about what square numbers look like using tiles.

Let’s explore the prime factorization of square numbers.
Students click a button to reveal the PF of the square numbers. These will show up under the squares above.

You may recall that we can create square numbers by taking any number and multiplying it by [[Itself | 2 | 3]]. Take one of the numbers above in all one color and pull it apart to reveal the two numbers being multiplied

Watch this quick video to see what would happen here. This video is for 49, but students could select from 4, 9, 16, 25, 49, 64, or 81. If they select 16, 64 of 81, see the video for 100 below as to how that works with more than 2 sections.
https://drive.google.com/file/d/1QLTY2jetQBLPYu2P2xHxIrgqripdLWB6/view?usp=sharing

Now do the same thing for one of the square numbers that uses more than one color in its prime factorization.

Watch this quick video to see what would happen here. This video is for 100, but the same process would be for 36:
https://drive.google.com/file/d/1Cwsiwmuc0pCmJj7uSv4UcGmnkULYfAIZ/view?usp=sharing

Upon finishing that one, show the following:
529,984 is also a square number. Break it up into two numbers to find out the side length of the square array that will give 529,984.
The same process above happens here. Students are shown the visual for 529,984 ( 2 × 2 × 2 × 2 × 2 × 2 × 7 × 7 × 13 × 13) and find its square root (728) by doing the same process as above.

Upon completion, show the following.
Let’s use this approach to check to see if 67,500 is a square number.
The same process happens here, but 67,500 is 2 × 2 × 3 × 3 × 3 × 5 × 5 × 5 × 5. The three 3’s can’t be split up evenly so it’s not a square number.

After a few attempts, show the following (I think it more important than a tutor comment)
We can split up the 2’s and the 5’s into two equal groups because there are an [[even | odd]] amount of each of them. However, we have an [[odd | even]] number of 3’s in the prime factorization of 67,500 so they can’t be split into two equal groups. A square number must have an [[even | odd]] number of each prime factor that is part of its prime factorization.

Enter any number below to see if it is a square number.

The “calculator” works as follows:
Students enter any number they want and click “enter” or something.
The prime factorization of the number shows up - both just the list of the prime factors and the visual with the colored rings.
Each get of prime factors is grouped together - if it is an even number, it’s highlighted in green with a check mark or something. If it’s an odd number, it’s highlighted in red with an x.
Then some sentence comment, either “Yes! --- is a square numbre. --- × --- = -------.” Or “--- is not a square number. There is not an even amount of all different prime factors in its prime factorization.”

---

We’ve seen a variety of ways to use the prime factorization to understand a variety of aspects of numbers. In the next chapter, we’ll see how prime factorization can help us identify common aspects of groups of numbers.



----------------------------------------------------------------------------------------------------



## Greatest Common Factors

> section: gcf

An architect is planning the floor for a large courtyard that measures 24 m by 40 m. She wants to cover it with square tiles and wants the square tiles to fit in perfectly, with no need for partial tiles along the sides. Move the slider to test out various options. Insert this current interactive from the GCF chapter but change the dimensions to 24 by 40 (I want more common factors here).

The slider goes from 1 to 24. As students move the slider, the following lists get automatically filled in (Consider just having the “Possible Options” List and follow-up questions about the other ones…)

Possible options:		1 × 1, 2 × 2, 3 × 3, 4 × 4, 8 × 8
Works for 24 but not 40:	6 × 6, 12 × 12, 24 × 24
Works for 40, but not 24: 	5 × 5, 10 × 10, 20 × 20
Doesn’t work for either:	7 × 7, 9 × 9, 11 × 11, 13 × 13, 14 × 14, 15 × 15, 16 × 16, 17 × 17,
18 × 18, 19 × 19, 21 × 21, 22 × 22, 23 × 23

The numbers that work for each side are the [[factors | multiples]] of the dimensions of the courtyard. The tile sizes that work for both must be factors of both numbers. We call these common factors. If the architect is interested in the largest square tiles that will work, she will choose tiles with a side length of [[8]] m. This is called the greatest common factor (GCF) of 24 and 40.

---

One method for finding the GCF of numbers is to simply list the factors of the numbers and identify the ones they have in common. Move the tabs in the rectangles to find the factors of 18 and 30: This interactive is the same as the one from the Factors and Multiples chapter. I think having students do it again (especially since they can do chapters out of order) is worth it.

18 and 30 have many common factors: [[1]], [[2]], [[3]], and [[6]]. Upon entering each correct answer, show the rectangles forming with that factor and showing how they match up. For example, when students enter 3, show this. Maybe reveal the blanks one a time, so students can pause for a second and see the two rectangles aligned with that common factor:


The GCF of 18 and 30 is [[6]].

---

Let’s try one more just by listing the factors of each number: If students enter the factors out of numerical order, re-arrange the numbers into order.

Factors of 22: [[1]], [[2]], [[11]], [[22]]

Factors of 15: [[1]], [[3]], [[5]], [[15]]

These numbers only have one common factor: [[1]]. Two numbers that have a GCF of 1 are called relatively prime. Some thoughts on this sentence:
It doesn’t make sense to define relatively prime when we haven’t introduced the word prime yet. I like ending this chapter with the cicada example as an intro to prime numbers so I’m tempted to not introduce the phrase relatively prime, but that feels slightly weird as well. I could say something like, “We’ll come back to this idea in a later chapter.”
Also, while this could be a place to discuss divisibility tests for 6 and others numbers, doing so would seem to break up the flow of the chapter. So, I’m inclined to NOT define relatively prime here and not mention divisibility tests at all and perhaps save that for another place in this course. What do you think?

---

Greatest common factor can also be helpful when making equal sized groups of various objects. I don’t totally love this flower example, but I like the visuals created of making the equal groups. The other question I was considering here was using common factors to simplify fractions and show that the GCF is the common factor that can be used to simplify the fraction in one step.

https://depositphotos.com/stock-photos/wildflowers.html?filter=all&qview=31046859

Imagine you went to pick some wild flowers in a field and came back with 32 white daisies, 16 blue cornflowers and 24 red poppies. You want to make bouquets that will have the same number of each flower type in each. Let’s think about all the possible arrangements?

White daisy: https://depositphotos.com/stock-photos/wildflower.html?filter=all&qview=46598715
Blue Cornflower: https://depositphotos.com/similar-images/144697325.html?qview=123248252
Red Poppy: https://depositphotos.com/stock-photos/red-poppy.html?filter=all&qview=3547402

Since we want to have equal numbers of each flower in each bouquet, let’s list the ways to split up each group of flowers. This is the same as finding the factors of each number of flowers:

Factors of 32: 		[[1]] have a loop going over to….. 32.

Once that is filled in, another blank appears next to the “1” and another loop appears to the left of the “32” will the 16 will go.

Factors of 32		1, [[2]], 			[[16]], 32

Same thing again:
Factors of 32		1, 2, [[4]]		[[8]], 16, 32

Students do this same process again to find the factors of 16 and 24. The final lists will be as follows. Maybe just have them do one and the others get filled in automatically since they’ve done a few factor lists above.

Factors of 32		1, 2, 4, 8, 16, 32
Factors of 16		1, 2, 4, 8, 16
Factors of 24		1, 2, 3, 4, 6, 8, 12, 24

The common factors of 32, 16, and 24 are 1, 2, 4, and [[8]]. This shows us all the different amounts of flower arrangements we can make.

We can make 1 arrangement with [[32]] daisies, [[16]] cornflowers and [[24]] poppies.
Show this visual:

We can make [[2]] arrangements with 16 daisies, 8 cornflowers and 12 poppies.
Show the visual changing to this. Each bar gets split in half and moves apart.

We can make 4 arrangements with [[8]] daisies, [[4]] cornflowers and [[6]] poppies.
Show the visual changing to this:

We can make 8 arrangements with [[4]] daisies, [[2]] cornflowers and [[3]] poppies.
Show the visual changing to this:

The GCF of 32, 16 and 24 is [[8]], so that tells us the greatest number of equal bouquets.

---

Let’s think about finding the GCF for the numbers 5250, 6300, and 11550. We can use our divisibility tests to find some common factors. All three numbers end in 0, so we know all three are divisible by [[2]], [[5]] and [[10]]. Upon correct answer: We can also use the digit sum to check for other divisibility tests:

5250		5 + 2 + 5 + 0 = [[12]]
6300		6 + 3 + 0 + 0 = [[9]]
11550		1 + 1 + 5 + 5 + 0 = [[12]].

The digit sums tell us all three numbers are divisible by [[3]]. Finally, since all numbers are divisible by 2 and 3, they are also divisible by [[6]]. Upon correct answer:

If you forget any of these tests, you can review them in the Divisibility Test chapter. We know that 1, 2, 3, 5, 6 and 10 are all common factors of 5250, 6300 and 11,550. Do you think 10 is the greatest common factor? To answer this, we would need to try listing all the factors of each number. Doing so will be challenging since the numbers are large and likely have many factors. In a future chapter, we’ll learn another process for finding the GCF. However, we have more math to learn before we’re ready to understand that process.

---

To make windows more visually appealing, architects often install narrow strips of wood, called muntins, to give an appearance of smaller panes of glass. Installing muntins on top of the glass is much easier and more affordable than manufacturing windows with smaller, individual panes of glass.

Insert animation of a window (or maybe a house with windows) without muntins and then show it changing to having muntins installed in the windows. The one below is not the final picture, but here’s what I have for now as a place holder.

An architect is planning for a large, rectangular glass window in the library of a new school. The  window will measure 180 centimeters by 300 centimeters. She plans to install muntins in the window but wants to divide the window up into squares. She is interested in making the squares as large as possible.

Possible square sizes:

One possible side length of each square is [[--]] cm. Upon correct answer, the muntins get filled in on the window. So, if students enter 30, the picture will look something like this (with better square of course):

Possible square sizes: 30 cm

After one correct answer, the text changes to:
Another possible side length of each square is [[--]] cm. Students create three total answers, and then see the following text under the picture.

All these possible answers are common [[factors | multiples]] of 180 and 300. In the chapter GCF and LCM Introduction, we learned that the largest factor two numbers have in common is called the [[greatest common factor | least common multiple]]. Upon correct answer:

As we learned in that chapter, one way to find the GCF of two numbers is to list the factors of each and compare what they have in common. Let’s do this for 180 and 300 and see if one of the numbers we found for the square size is indeed the GCF.

When students click to enter in a blank, a loop will go to the corresponding factor pair. For example, when they put their cursor in the blank for 2 in the 180 list, a loop will go over to the 90 in the factor list.

Factors of 180: 1, [[2]], 3, 4, 5, 6, 9, 10, 12, 15, [[18]], 20, 30, 36, 45, [[60]], 90, 180

Factors of 300: 1, 2, 3, 4, [[5]], 6, 10, 12, 15, [[20]], 25, 30, 50, 60, 75,100, 150, [[300]]

Upon correct answer, all the common factors get highlighted or circled in the same color. The GCF of 180 and 300 is [[60]]. Upon correct answer, show the following:

Square size: 60 cm

The architect wants the biggest squares and therefore will make the squares 60 cm by 60 cm. Move the slider to see for yourself which sized squares look the best to you.

---

In this chapter, we are going to learn another technique for finding the GCF of any set of numbers. In the last chapter, we learned how to use the Prime Factorization of a number to help find all the factors of an individual number. Let’s see how prime factorization can help us find the GCF of groups of numbers. To start, find the prime factorization of 180 and 300.

Insert interactive to find the PF for 180 and 300. The process is explained in detail in this chapter. Watch this video for an overview:
https://drive.google.com/file/d/10G1OgzEdcdFnE4zmFhSodwLcj66IdyU7/view?usp=sharing

Upon final answer, students will have made the following. Note - unlike in the other chapter, I think it is worthwhile here to have the prime factors labeled in the sections around the number:

::: x-slideshow

    p.todo(slot="stage") TODO

Let’s use the prime factorization of each to build common factors of 180 and 300. Click on a number that is a prime factor of both.
https://drive.google.com/file/d/1HDnSNsmeNGmw4OcqRnY0rNEG5H1iDAAc/view?usp=sharing

Now find common factors that are made from 2 shared prime factors of each number
https://drive.google.com/file/d/1dCsV1pVko85afLHG71hms7ttXwmsRlij/view?usp=sharing

Now let’s find the common factors that are made from 3 shared prime factors of each number.
This process will be the same as the others. No video needed. Students only need to do 2 and the third one will fill in after they do 2 correctly.

Finally, let’s find the common factor this is made from 4 shared prime factors of each number.
Same process as above. There is only 1 common factor here - 60. This is the end of the slide show. Upon correct answer of 60, show the following:

:::

We found common factors of 180 and 300 using the prime factorization of each number. By taking the [[largest | smallest]] collection of shared prime factors, we found the [[greatest common factor | least common multiple]] of [[60]].

We’ve learned a new method for finding the GCF. First, find the prime factorization of each number and then build the number that uses the [[most | fewest]] prime factors that all the numbers have in common. We actually missed one common factor in this approach. [[1]] is a common factor of any groups of numbers. We can “build” one by not choosing any of the shared prime factors.

Let’s practice this new technique by finding the GCF of the numbers below.

::: tab

Find the GCF of 84 and 210
Show students the PF rings. Students must enter in numbers in the middle. Students then find the GCF using a similar interactive element as above.

Build the GCF by selecting common factors from each number

::: tab

Find the GCF of 132 and 198
For this tab, students do the whole process. The first find the prime factorization of each number (both the list of prime factors and the colored rings) and then use the PF to find the GCF. The interactive elements for finding each are the same as above.

:::

First, find the prime factorization of each number. Upon correct answer, show the following:
Now, build the GCF by selecting common factors from each number.

---

You hopefully found using the colored prime factorization diagrams helpful for building the GCF. Venn Diagrams are another common tool often used when finding the GCF because Venn Diagrams can help us identify common elements.

Let’s use a Venn Diagram to again find the GCF of 132 and 198. A Venn Diagram has 2 (or sometimes more) overlapping circles. Items in common are placed in the overlapping region of each circle. Play the animation below to see the Venn Diagram for the prime factorizations of  132 and 198.

Quick video of animation:
https://drive.google.com/file/d/1Q91R6hKbHVo9RXGSpcQUxTJ7rBxCW7Fr/view?usp=sharing
When animation is over, show the following:

The Venn Diagram shows us that 132 and 198 share the following prime factors: 2, 3 and [[11]]. To build the GCF, we [[multiply | add]] the greatest collection of shared prime factors. 2 × 3 × 11 = [[66]], which is the same GCF we found using the colored, prime factor diagrams.

Let’s practice using Venn Diagrams and the prime factorization diagrams to find greatest common factors.

Students will solve some GCF questions in the GCF workspace as shown below. Watch this video for an overview of how this works:

Video 1 (2:44) https://drive.google.com/file/d/1VDnpNkjJfW_LA7BrIEbVlEVteOsdrroX/view?usp=sharing

Video 2 (2:52)
https://drive.google.com/file/d/11KO_U51OYrEGiV-498AOc7JJ_IV7AwtI/view?usp=sharing

Video 3 (1:10)
https://drive.google.com/file/d/1DmMb4OQIWPhDlNWGBcQsHZqPfW7yVnRl/view?usp=sharing

Video 4 (3:47)
https://drive.google.com/file/d/1Wr_UNMs0kYqEtp-Gug21uXBN82M50Xud/view?usp=sharing

    // Should we have students do some with just the Venn diagrams since they often won’t have the
    // whole workspace to use? Should we do a hard question with three numbers and be explicit about
    // divisibility tests (maybe 468, 3510 and 4095). Could they use the workspace for that?

---

Imagine you have a cake as shown below and want to cut the cake into identical cubes to serve your guests. You are interested in the dimensions of the largest possible cubes you can create. Move the slider below to see some possibilities:

Possible Side lengths of cubes: The slider will only have 1, 2, 3 and 4. As students move the slider, gridlines will show up on the cake.

After moving the slider, show the following:
The side length of the largest possible cube is the [[GCF | LCM]] of 24, 132 and 168.
Upon correct answer:
Use the workspace below to calculate the GCF of 24, 132 and 168. The workspace will be the same as above, but with 3 numbers, 3 prime factorization rings, and a 3-circle Venn Diagram:

The GCF of 24, 132, and 168 is [[12]]. Upon correct answer, show the rectangular prism as above cut into 12 × 12 × 12 cubes. Sliced like this, the cake can serve [[308]] people!



----------------------------------------------------------------------------------------------------



## Lowest Common Multiples

> section: lcm

### Cicadas

North America is home to various broods, or groups, of cicadas. Each brood has the curious property that the cicadas in that brood only emerge every few years during the summer to breed - the remaining time is spent underground in an immature, nymph-like state. There are 12 different broods that emerge every 17 years and 3 different broods that emerge every 13 years, however they don’t all come out in the same year.

One of the 13-year broods of Cicadas lives in Mississippi. Imagine they emerged this year. In the grid below, start clicking on the number of years from now in which these cicadas will emerge again:

This is the same 1-100 number chart from the Prime Numbers chapter. There could be a hovering hand showing them to click 13 and then 26 and then students will continue clicking every other multiple of 13. Once students, click 52, the rest become highlighted automatically.

As we learned in the Factors and Multiples chapter, the numbers you just selected (13, 26, 39, 52, 65 and so on) are the [[multiples | factors]] of 13. Enter in some of the multiples of 5, 8 and 12 below

As students fill in the numbers below, the multiples of each number will be highlighted in a different color in another 1-100 grid as shown below. Students don’t have to fill in all the multiples below. Those that are given will already be highlighted in the appropriate color. Numbers that are common multiples of a pair of number will be highlighted with both of the colors - the circle will be split in half, with one color on each half. Maybe the lists below can be something like this from the Sequences and Patterns Introduction course.

Multiples of 5:
5, [[10]], [[15]], 20, 25, 30, [[35]], 40, 45, 50, [[55]], [[60]], [[65]], 70, 75, 80, 85, 90, [[100]]...

Multiples of 8
[[8]], 16, [[24]], 32, 40, [[48]], [[56]], [[64]], 72, 80, [[88]], 96...

Multiples of 12
12, 24, [[36]], [[48]], [[60]], 72, 84, [[96]]

Unlike factors of numbers, the list of multiples of a number [[continues on forever | stops at 100]]. The numbers with two colors are multiples of two numbers. The first number that is a multiple of both 8 and 12 is [[24]]. The next number that is a multiple of 8 and 12 is [[48]]. The first number that is a multiple of 5 and 12 is [[60]]. These are called common multiples and the first one is called the least common multiple (LCM).

---

Sometimes finding the LCM can be found by simply listing multiples. Do this to find the LCM of of 9 and 12

Multiples of 9: [[9]], [[18]], [[27]], [[36]], [[45]], ...
Multiples of 12: [[12]], [[24]], [[36]], [[48]], …

So, the LCM of 9 and 12 is [[36]]

Now, try finding the LCM of 18 and 40 by listing the first 10 multiples of each.

Multiples of 18: [[18]], [[36]], 54, 72, [[90]], [[108]], 126, 144, 162, [[180]]
Multiples of 40: [[40]], [[80]], [[120]], 160, [[200]], [[240]], 280, 320, [[360]], [[400]]

After listing 10 multiples of each number, we [[have not | have]] found the LCM. As with GCF, in a future chapter, we’ll learn another method for finding the LCM of numbers besides just listing each multiple.

---

Let’s return to thinking about the cicadas that emerge every 13 years.

Show the 1-100 grid again with the multiples of 13 in one color.

Research into cicadas suggests that, over millions of years, they have evolved to emerging on these cycles to avoid predators. Imagine one predator that eats cicadas emerges every 6 years. Click below to highlight the years in which the predators emerge.

Students will click play on a button that will highlight all the multiples of 6 in a different color than the multiples of 13. It would be a nice visual if each multiple could change color one at a time, in order, rather than every multiple appearing in a different color all at once. Again, here’s the grid without the highlights.

The cicadas and the predators match up only once in 100 years - [[78]] years from now. This is the [[least common multiple | greatest common factor]] of 13 and 6. The cicadas will emerge 5 times before they emerge at the same time as their predators.

Upon correct answer:
Imagine instead that the cicadas emerge every 12 years. Click below to show the years in which these cicadas would emerge.

Now, when students click the animation, the multiples of 13 will fade away and the multiples of 12 will show up in a different color. Again, it would be a nice visual if each multiple could change color one at a time, in order, rather than every multiple appearing in a different color all at once. The end state will be this grid with all the multiples of 6 and 12 highlighted. Obviously, every multiple of 12 will be two-toned with each color taking up half the circle.

In this scenario, every time the cicadas emerge, the predators also emerge! Every multiple of 12 [[is also | is not]] a common multiple of 6. So, emerging every 13 years is much more beneficial to the cicadas then emerging every 12 years. Of course, the cicadas didn’t plan this - they have evolved over time into this cycle.

In the next section, the 13 is a slider that goes from 4 to 20 like the slider in the current LCM chapter. As students move the slider, the “1” changes to the LCM of 6 and the number in the slider and the 1-100 grid (maybe we need a new one below this text) also changes to highlight the multiples of the number in the slider. The grid still has the multiples of 6 highlighted for the predator and any number that is a common multiple of the number in the slider and 6 shows up in both colors. Here, it’s fine for just the multiples to appear all at once in the grid as students move the slider - the multiples don’t need to show up one by one as they did before.
A 13 year cycle creates 1 time(s) in 100 years in which the cicadas would emerge at the same time as the predators. Move the slider to see how other cycles match up with predators that appear every 6 years. For two possible cicada cycles, the cicadas and the predators don’t meet at all in 100 years - a [[17]] year cycle and a  [[19]] year cycle. We’ll learn more about what’s unique about these numbers in the next chapter!

---

### Gears

Watch the animation below to see when the red dots line up again:

Video of Animation:
https://drive.google.com/file/d/1_WguZFSmHAH-dg4vfeaU08mPzV_7tbYK/view?usp=sharing

As the gears move, a counter will be underneath each gear indicating the number of full revolutions each gear makes. The animation stops when the blue one makes 3 revolutions and the gray one makes 4. Upon completion of the animation, show the following:

In gears, the little bits sticking out are often called teeth. The blue gear has [[8]] teeth and the gray one has [[6]] teeth. In order for the red dots to line up again, the blue gear made [[3]] full revolutions and the gray one made [[4]].

	Blue: 8 teeth × 3 revolutions = [[24]]
	Gray: 6 teeth × 4 revolutions = [[24]].

You may recall from the chapter GCF and LCM Introduction, that 24 is the [[ LCM | GCF ]] of 8 and 6. In that chapter, to find the LCM of a set of numbers, we just listed the multiples of each and found the smallest one common to both.

Show a gear animation again - this time one with 9 and 15 teeth. Like above, have a counter with the number of revolutions each gear is making, but also add a list of the multiples of each number. So, as the counter for the gear with 9 teeth goes up by 1 each time, the next multiple of 9 is added to the list. So, the end state would look like this:

Gray Gear - 9 Teeth
Full Revolutions: 5
Multiples of 9: 0, 9, 18, 27, 36, 45

Blue Gear - 15 Teeth
Full Revolutions: 3
Multiples of 15: 0, 15, 30, 45

After playing the animation, show the following:
You also may recall from the earlier chapter, that sometimes listing the first few multiples of numbers does not reveal a common multiple. We tried to find the LCM of 18 and 40 by listing the first 10 multiples of each:.

Multiples of 18: 18, [[36]], 54, 72, [[90]], 108, 126, 144, 162, [[180]]
Multiples of 40: 40, [[80]], [[120]], 160, 200, 240, 280, 320, [[360]], [[400]]
Upon all correct answers, show the following:

After listing 10 multiples of each number, we [[have not | have]] found the LCM. Above, we used the prime factorization to help us calculate the GCF of numbers. Let’s see if we can use prime factorization to also help us with harder to find LCMs.

First, find the prime factorization for 18 and 40. This will be the same process as above. It is explained in detail in this chapter. Watch this video for an overview:
https://drive.google.com/file/d/10G1OgzEdcdFnE4zmFhSodwLcj66IdyU7/view?usp=sharing

Upon final answer, students will have made the following. Note - unlike in the other chapter, I think it is worthwhile here to have the prime factors labeled in the sections around the number:

Upon finding the correct prime factorization, show the following.
As we learned in the Prime Factorization chapter, when building multiples a target number, the prime factorization of the multiple must contain all the prime factors of that target number. For example, we see that 40 [[is | is not]] a multiple of 8, because 2 × 2 × 2 is in the prime factorization of 40. Upon correct answer, show an arrow going from the “2 × 2 × 2” in the text to three “2”s in the prime factorization ring of 40. Similarly, 18 [[is | is not]] a multiple of 6. Upon correct answer, have the “2” and “3” in the prime factorization ring for 18 hover outside or above the ring for a second or two. Then, show the following:

Let’s use this idea to build a number that is a multiple of 18 and 40 while using the fewest prime factors as possible. Remember, we want the [[least | greatest]] common multiple. Upon correct answer, show the two factor rings again and the gumball machine of prime factors:

To enter a prime factor into the ring, students can either type it to a blank text field in the ring, drag down a section from the rings for 18 and 40, or release a prime factor from the gumball machines.

Watch this video for an overview of the animation:
https://drive.google.com/file/d/1nWYjfToDB6ryb6jFujB3eo8NADNbu0bo/view?usp=sharing

---

The LCM of 18 and 40 is [[360]]. If we had continued to list the multiples in order find the first one in common, we would have needed the first 20 multiples of 18:

Show an animation of these gears spinning and list the multiples below as they spin:

Multiples of 18: 18, 36, 54, 72, 90, 108, 126, 144, 162, 180, 198, 216, 234, 252, 270, 288, 306, 324, 342, 360

Multiples of 40: 40, 80, 120, 160, 200, 240, 280, 320, 360, 400

After finishing the animation, show the following:
The gears could keep spinning around and around to create more common multiples. Any multiple of 360 will be a common multiple of 18 and 40. For example, 3 × 360 = [[1,080]]. The prime factorization of 1,080 is 2 × 2 × 2 × 3 × 3 × 3 × 5. Watch the animation below to see 18 and 40 in the prime factorization of 1,080:

Video of animation:
https://drive.google.com/file/d/1yUjY6Prh0GC6RX7RYeN8Kcs-xoMox6j6/view?usp=sharing

After animation, show the following:
In order to create a common multiple with as few prime factors as possible, we only need [[2]] 3’s, [[3]] 2’s, and [[1]] 5. One of the 2’s is shared by the 18 and the 40. Upon correct answer, show the following:

The grouping of the prime factors in the animation above looks similar to the Venn Diagram we used to find the GCF of two numbers.

Using a Venn Diagram helps identify the common prime factors and therefore helps us see the smallest collection of prime factors needed to build the least common multiple.

Find the LCM of 45 and 126 using the Venn Diagram below:

List the fewest prime factors needed to create a multiple of 126 and 45: [[2 × 7 × 3 × 3 × 5]]. Upon correct answer: So, the LCM of 126 and 45 is [[630]]. We created the LCM using only [[2]] 3’s since both 45 and 126 have 2 3’s in their prime factorization. Additionally, we can see in the diagram that:

126 × [[5]] = 630 and 45 × [[14]] = 630. When students enter in the correct answer, the circle for 126 and 45 become highlighted for a second to show 126 × 5 in the diagram and 45 × 14. Something like this for the two end states:

In general, to find the GCF, we just multiply the prime factors [[in the overlapping regions | in the outside regions]]. To find the LCM, we must multiply [[all the prime factors in the diagram | just the prime factors NOT in the overlapping region]].

---

Let’s combine all our work into using prime factorization and Venn Diagrams to find the GCF and LCM of 300 and 350.

Video of interactive element:
https://drive.google.com/file/d/1-e8UO4toAhQimS9IbQzuZvUeuJyee5yc/view?usp=sharing

---

Below are 3 gears with 18, 45, and 75 teeth each. Show them turning for a little bit and have the counter for the number of revolutions as above.

Find the LCM of these numbers to determine how many rotations each gear must make in order for them to align again for the first time. The workspace will be the same as above, but with 3 numbers, 3 prime factorization rings, and a 3-circle Venn Diagram:

The LCM of 18, 45, and 75 is [[450]]. We can use the Venn Diagram to determine how many times each gear must spin to be aligned again for the first time.

Make each number (18, 45, and 75) a hover target so when students hover on the number, that circle in the Venn becomes highlighted. So when they hover on 18, they will see the following:

This visual should help them see that 18 × 25 = 450. Maybe there could even be a quick animation like the following showing the 18 × 35 a little more clearly:

https://drive.google.com/file/d/1Hk2p8bqGiEzaYPPz18nSaiU6XFv7gkYn/view?usp=sharing

18 × [[25]] = 450. So, this gear must spin [[25]] times.
45 × [[10]] = 450. So this gear must spin [[10]] times.
75 × [[6]] = 450. So this gear must spin [[6[[ times.

Upon correct answers, show the gears spinning the correct number of times. Make it go pretty quick to get to 25 for the smallest one. Have the counters as before.

    // Do we end with Spirographs? Should Spirographs be its own extension chapter?



----------------------------------------------------------------------------------------------------



## The Distribution of Primes

> section: distribution

Over the past few chapters, we’ve learned about prime numbers and how these numbers can be helpful for a range of mathematics. In this chapter, we’ll further explore prime numbers.

Remember that a prime number has exactly [[2]] factors, 1 and itself. Numbers with more than 2 factors are called [[composite | even | fractions]]. Some numbers may initially seem prime, but are in fact composite. 57 is one example. It may seem prime but it’s factors are 1, 3, [[19]] and 57. Sort the numbers below into “Prime” and “Composite.” Use the Prime Checker to help you if you want.

Students will see the following numbers in the middle of the screen. Each will be inside a colored circle or some other shape. The left side of the screen will have a circle labeled “Prime” and the right side will have a circle labeled “Composite.” Students drag each number into the correct circle.

Numbers to show on the screen: 43, 51, 59, 67, 75, 91, 93, 97, 101, 111 (The underlined numbers are prime)

Can the checker list the factors of numbers that are not prime, or even 1 factor pair? So, here it could say “is not prime. 3 × 19 is 57.”

---

In the chapter on Prime Numbers, we learned that the list of prime numbers is infinite. The largest known prime number was discovered in 2018. Mathematicians know there are primes larger than it, we just haven’t found them yet. There is no simple rule or equation for finding prime numbers, and they almost seem to be completely randomly distributed. However, over time, mathematicians have discovered some curious patterns, and Exploring patterns in prime numbers can help in finding more and more of them.

---

### Twin Primes

Except for 2 and 3, prime numbers can’t be next to each other. That’s because one of two adjacent numbers is always [[even | ?? | ??]] and therefore divisible by 2. However,
You may have noticed that oftentimes prime numbers are two away from each other - there is only 1 number in between them:

Below is an image from the current Mathigon chapter. Change the graphic to include more twin primes and have some blanks for students to fill in:

3 - [[5]], 11-13, [[41]]-43, 101-103, 419-[[421]], [[1151]]-1153, 2027-2020, 44531-[[44533]], 108,377-108,379, 1,523,651-[[1,523,653]].

These pairs of numbers are called Twin Primes. The largest known pair of twin primes has 58,711 digits! That's not one of the numbers - that is how many digits are in the number!

We know that there are infinitely many prime numbers, but Do you think there are also infinitely many twin primes, just like there are infinitely many prime numbers? [[Yes, I think there are infinitely many | No, I believe the list stops at some point]]. Upon entering an answer, show the following:

Mathematicians believe this to be true, but haven’t yet been able to prove it. The Twin Primes Conjecture is one of the many unsolved problems involving prime numbers. A conjecture or hypothesis is an idea thought to be true but not yet proven.

---

### The Ulam Spiral

One day in 1963, Polish mathematician Stanislaw Ulam began doodling during what he later described as “a long and very boring” meeting. He began by placing numbers in a spiral.
Students click play of an animation of the numbers 1-11 being placed in a spiral. Below is the final image and here is a quick 18 second video of the animation:

https://drive.google.com/file/d/1qyc5GmaG-JiM-PhDo8wZIKyMHuU_rRQ6/view?usp=sharing

Then, more numbers will show up, but some will be empty for students to fill in. These numbers will fill up the spiral quickly. I think it’s nice for students to see the numbers being added in the spiral manner rather than just having a grip pop up. At this point, having the spiral go up to 49 is great. Have 5-6 of the numbers be blank for students to fill in so they think about the spiral formation a little more critically. Once they fill in all the blanks, show the following:

Ulam was interested in prime numbers so he colored all the prime numbers a different color. Click on any 5 prime numbers in the grid above. After students click on 5 primes, all the other primes in the grid change color as well to become the following:


You may notice that some of the prime numbers in this spiral create diagonal lines. So far, the Ulam spiral doesn’t look particularly exciting. But if we zoom out, interesting patterns emerge. Here are the primes up to 160,000. The primes are shown red dots like in our first spiral. The white spaces are numbers that are NOT prime - like the gray numbers in our spiral. This is the image from the current course:


(The image on the right is a screenshot from this Numberphile video. We don’t need to copy the image from them - I imagine we can make our own. I’m just including it here as an example as an example with the diagonals shown a little more clearly.

::: column.grow

Some diagonal lines have more and more prime numbers. It turns out these diagonal lines all correspond to certain equations that seem to generate prime numbers more often than average. However, it is still unknown why this is the case. This is another yet-to-be solved problem involving prime numbers! Continuing along these diagonals in the spiral can help mathematicians find bigger and bigger prime numbers!

::: column(width=200)

    x-img(lightbox credit="© Scientific American" width=200 height=272 src="images/magazine.jpg" alt="Scientific American Magazine Cover")

{.caption} Cover of the March 1964 issue of Scientific American

:::


Many other interesting patterns emerge in the Ulam spiral. In this course on Primes and Divisibility, we’ve learned about multiples and square numbers, amongst many other topics. Explore some of these ideas in the Ulam Spiral.

Here will be an interactive very much like the one at this website (http://labs.minutelabs.io/Number-Constellations/) except there will be an option to toggle back and forth between the Ulam spiral and a typical number grid, and not all the other options. On the side, will be the following options:
Prime Numbers
Square numbers
Multiples of 9
Multiples of 6
Multiples of [[--]] (students can enter their own multiple)
Random (maybe have this as well just to contrast the patterns with selecting random numbers)

I’ve picked some examples that show interesting patterns in the spiral and show a good contrast between the typical number grid. We could have a “Notice/Wonder” box for students to comment on at least one of them to share with their teacher.

SQUARE NUMBERS (we could write up a whole section on this for the Figurate Numbers chapter)
Spiral

Typical number grid

MULTIPLES OF 9 (Some cool patterns here as well in both numerical arrangements)
Spiral


Typical Number grid:

MULTIPLES OF 6 (Some cool patterns here as well)

Spiral

Typical Number Grid

---

### The Goldbach Conjecture

In 1742, the German mathematician Christian Goldbach made a curious discovery. He noticed that that all even integers above 2 can be written as the sum of two primes. For example, 8 = 5 + [[3]] and 24 = 13 + [[11]]. Upon correct answer. See if you can find the two primes that add up to the numbers below:

Insert the Gumball machine interactive from earlier chapters:

16 = [[3]] + [[13]]		60 = [[37]] + [[23]]		100 = [[47]] + [[53]]

If students struggle for a while, the tutor can give them 1 of the numbers Upon all correct answers, show the following:

Enter in some numbers into the Goldbach Calculator below.

After doing 2 or 3, show the following:

Goldbach’s idea is quite surprising. Prime numbers are defined using multiplication and factors - and shouldn’t have much to do with addition. In face, in the Prime Factorization chapter, we learned about the value of multiplying, not adding, prime numbers.

Goldbach wrote about his observation in a letter to the famous mathematician Leonhard Euler, but neither of them was able to prove the idea. We have yet another conjecture involving prime numbers - the Goldbach Conjecture.

Computers have checked that the Goldbach Conjecture works for every even number up to 4,000,000,000,000,000,000, but mathematicians have still not yet found a proof that it works for ALL even integers. And that is a big difference. There are infinitely many integers, so we can’t possibly check them all.

The simplicity of this idea has made Goldbach’s Conjecture one of the most famous unsolved problems in all of mathematics! Maybe you’ll one day be part of a team that finally proves all even numbers can be written as the sum of two primes!

------------------------------------------------------------------------------------------------------------------------------

### Mersenne Primes

https://www.youtube.com/watch?v=T0xKHwQH-4I

In the Factors and Multiples chapter, we learned about Perfect Numbers. A number if “perfect” it all of its factors, except the number itself, add up to equal the number. 6 is the smallest perfect number. The factors of 6 are 1, [[2]], [[3]] and 6. 1 + 2 + 3 = [[6]]. Upon correct answer:

Listed below are the first 4 perfect numbers and their factors

Number
Factors less than the number
Sum of those factors
6
1, 2, 3
6
28
1, 2, 4, 7, 14
28
496
1, 2, 4, 8, 16, 31, 62, 124, 248
496
8196
1, 2, 5, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064
8196

Perfect numbers become more and more spread out on the number line. Below are the first 8 perfect numbers.

What may be surprising to hear is that these enormous perfect numbers are connected to enormous prime numbers. Let’s explore this connection. Begin by filling in the table below.

Notes on this interactive table
Start with just the rows for 1 and 2. After each correct answer in the “Prime or Composite” column, the row either becomes shaded green if it’s prime and red if it is composite. Then, the next row of the table appears. This continues one row at a time until N = 10.

I’m not sure how much students will have worked with exponents yet when they get to this course, so I’m showing the repeated multiplication for the first few rows of the table. I think after N=4, we don’t need it anymore.

Maybe we can insert the Prime Checker from the introduction of the chapter next to the table so students can easily check the larger numbers in the table.

N
2N
2N - 1
Is 2N - 1 Prime or Composite?
1
2
[[1]]
Neither
2
22 = 2 × 2 = [[4]]
[[3]]
[[Prime | Composite]]
3
23 = 2 × 2 × 2 = [[8]]
[[7]]
[[Prime | Composite]]
4
24 = 2 × 2 × 2 × 2 = [[16]]
[[15]]
[[Composite | Prime]]
5
[[32]]
[[31]]
[[Prime | Composite]]
6
64
[[63]]
[[Composite | Prime]]
7
128
[[127]]
[[Prime | Composite]]
8
256
[[255]]
[[Composite | Prime]]
9
512
[[511]]
[[Composite | Prime]]
10
[[1024]]
[[1023]]
[[Composite | Prime]]

Look carefully at all the rows in which 2N-1 is prime. Notice the starting value of N is also [[prime | composite]]. Upon correct answer: Fill in the next three rows of the table to see if this pattern holds up. Add rows for N = 11, 12 and 13 to the bottom of the table:

11
2048
[[2047]]
[[Composite | Prime]]
12
4096
4095
[[Composite | Prime]]
13
8192
8191
[[Composite | Prime]]

Unfortunately, 2047 is composite. 23 × [[89]] = 2047. So, when N is prime, 2N - 1 is [[sometimes | always | never]] prime. Upon correct answer: Since this sometimes works, mathematicians use this pattern to try to find bigger and bigger prime numbers. Prime numbers of the form 2N - 1 are named Mersenne Primes after French mathematician Marin Mersenne. Mersenne studied these numbers in the early 17th century.

Mathematicians know of 51 Mersenne Primes and the current largest known prime number was found using this process. People around the world are using their computers to search for the 52nd Mersenne Prime. You can put your computer to work and maybe find it yourself! Read more about how to get involved at the Great Internet Mersenne Prime Search.

Let’s connect together the ideas of Perfect Numbers and Mersenne Primes. Here again are the first 4 perfect numbers and their factors.

Number
Factors less than the number
Sum of those factors
6
1, 2, 3
6
28
1, 2, 4, 7, 14
28
496
1, 2, 4, 8, 16, 31, 62, 124, 248
496
8196
1, 2, 5, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064
8196

Look carefully at the list of factors for each one and click on any factor that is also on the list of Mersenne primes. Students click on 3 (factor of 6), 7 (factor of 28), 31 (factor of 496) and 127 (factor of 8196). Place each number in a red circle or something when students click on it. Upon doing all 4, show the following: Amazingly, all even perfect numbers have a Mersenne primes as a factor! So, when mathematicians discover a new Mersenne prime, they use that prime number to find a new perfect number!

Notice how beautiful and awe-inspiring mathematics can be. Finding patterns in prime numbers (numbers that only have exactly 2 factors) leads to patterns in Perfect Numbers (numbers that have the exact factors that somehow add up to the number itself). Results like this cause mathematicians to continue to search, explore and wonder about other connections and possibilities!

---

### The Riemann Hypothesis

Mathematicians have spent many centuries exploring the pattern and distributions of prime numbers. Primes seem to appear completely randomly - sometimes there are huge gaps in between consecutive primes and sometimes we find twin primes right next to each other.

In 1792, At age 15, German mathematician [Carl Friedrich Gauss](bio:gauss) had a groundbreaking new idea. He counted the number of primes up a certain point and graphed the results. Complete the table below to see the points show up in the graph:
Students enter numbers in the table and then those points show up in the graph. Making the graph a little more interactive can help students understand more what the graph represents. Just looking at the graph in the current chapter may be confusing to some students.

Below is the start and end state. This video as a quick overview:
https://drive.google.com/file/d/1RbckOKp9YXu_zESPqWIZPdmsGk3XemHf/view?usp=sharing

Upon finishing the graph, show the following:
As we zoom out , the blue line becomes very smooth.
Upon zooming out, now include the x/log × function in red on the graph. Then show the following:
Gauss noticed that the shape of the blue line looks very similar to the function x/(log x) (shown in red). He predicted that the two functions are always “approximately similar.” This was proven to be true in 1896.

However, as you can see, there is a significant gap between the actual number of primes in blue and Gauss’s approximation in red. In 1859, mathematician [Bernhard Riemann](bio:riemann) discovered an approximation that looked much better, but he wasn’t able to prove that it would always work. His process allows mathematicians to determine how many prime numbers exist between any two numbers. His idea has become known as the Riemann Hypothesis.

Hundreds of mathematicians have tried to prove Riemann’s Hypothesis, but all without success. Mathematicians consider it to be one of the most difficult and important unsolved problems in mathematics. In 2000, the Clay Mathematics Institute named it one of the seven Millennium Prize Problems and promised $1,000,000 to any mathematician who solves it. Maybe you’ll be part of that team as mathematicians some day as well!
