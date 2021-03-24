# Functions

## Relations and Functions

> section: relations
> sectionStatus: dev
> id: sorting-hat
> color: "#FD8C00"
> level: Intermediate
> next: sequences

::: column.grow

Welcome to the Hoctagon School of Magic! You’ve taken the train from King’s Cross station in London,
a boat across the great lake in front of the castle, and just arrived in the great hall with all the
other students.

But before the welcome feast can begin, the Sorting Hat has to assign all new students to a house.
Try sorting each of these students into one of the four house:

::: column(width=300)

    // EDITORIAL ONLY
    // https://depositphotos.com/139592200/stock-photo-the-hogwarts-express-train.html

{.fixme} Image

:::

    x-relation
      .item(slot="domain" name="a") **Current User**
      .item(slot="domain" name="b") Phineas Lynch
      .item(slot="domain" name="c") Sturgis Switch
      .item(slot="domain" name="d") Dilys Derwent
      .item(slot="domain" name="e") Demelza Zabini
      .item(slot="domain" name="f") Bogod Clearwater
      .item(slot="range") Lionpaw
      .item(slot="range") Eaglewing
      .item(slot="range") Badgerclaw
      .item(slot="range") Serpentfang

---

After dinner, all students return to the common rooms of their new houses. Everyone settles into their dorms and returns to the common room to meet their new housemates. Heads of houses use this time to pass out class lists. Like before, connect each of the students with different classes:

    x-relation
      .item(slot="domain" name="a") **Current User**
      .item(slot="domain" name="b") Phineas Lynch
      .item(slot="domain" name="c") Sturgis Switch
      .item(slot="domain" name="d") Dilys Derwent
      .item(slot="domain" name="e") Demelza Zabini
      .item(slot="domain" name="f") Bogod Clearwater
      .item(slot="range") Potions
      .item(slot="range") Transfiguration
      .item(slot="range") Magical Creatures
      .item(slot="range") Broomstick Flying
      .item(slot="range") Charms

---

The next day, you and several of your classmates arrive early to your first lesson. Conversation quickly turns to your new wands. You trade stories about how the wands chose you. Connect each of these wands to a student.

    x-relation
      .item(slot="domain")
        img(src="images/wand-1.png" width=200 height=30)
        span.caption Birch, phoenix feather, 5 3/4
      .item(slot="domain")
        img(src="images/wand-2.png" width=200 height=30)
        span.caption Oak,dragon heartstring, 6 9/16
      .item(slot="domain")
        img(src="images/wand-3.png" width=200 height=30)
        span.caption Oak, unicorn hair, 6 5/8
      .item(slot="domain")
        img(src="images/wand-4.png" width=200 height=30)
        span.caption Yew, kneazle whicker, 4 9/16
      .item(slot="domain")
        img(src="images/wand-5.png" width=200 height=30)
        span.caption Yew, unicorn hair, 5 7/8
      .item(slot="range" name="a") **Current User**
      .item(slot="range" name="b") Phineas Lynch
      .item(slot="range" name="c") Sturgis Switch
      .item(slot="range" name="d") Dilys Derwent
      .item(slot="range" name="e") Demelza Zabini

---

In all of the examples above, there were two groups of things (like students, houses or wands), which you had to connect to each other.

In mathematics, we call groups of things like this [__sets__](gloss:set). We can write down the elements of a set in “curly brackets”, e.g. {Lionpaw, Eaglewing, Badgerclaw, Serpentfang}. The order of the items in a set does not matter, but every item can only appear once in a set.

A connection between two sets is called a [__relation__](gloss:relation). Relations can take different forms, and you might have already noticed some similarities and differences between the examples above.

| Houses | Classes | Wands |
| ------ | ------- | ----- |
|[[Many]] student(s) can be in [[one]] house(s). A relation like this is called many-to-one.| [[Many students]] can be in [[many classes]]. A relation like this is called many-to-many. | [[One wand]] chooses [[one student]]. A relation like this is called one-to-one. |

---

There are many ways we can represent the same relation between sets. So far we have been using mapping diagrams. We can also represent the same information using a table. The sorting hat mapping diagram is shown in the table below.

TODO Interactive here

We can also use ordered pairs to show this relationship. The first value in an ordered pair is from the input set. The second value is from the output set.

({{Current User Name}}, Lionpaw) (Phineas Lynch, Lionpaw) (Sturgis Switch, Eaglewing) (Dilys Derwent, Badgerclaw) (Demelza Zabini, Serpentfang) (Bogod Clearwater, Serpentfang)

---

### Domain and Range

You can think of relations as an operation: you pass in an item from the __set__ on the left, and you get items from the set on the right as an output. Consider this relation:

| Input | | Output |
| :---: | | :----: |
| 14 |  | even |
| 3 |  | odd |
| 11 |  | odd |
| 6 |  | even |
| -6 |  | even |

The input set for the first example is {14, 3, 11, 6, -6}. Note that these numbers don’t have to be in order from least to greatest. The output set for this example is {even, odd}. Notice the elements even and odd are not repeated.

These input and output sets have special names. The complete set of all possible inputs is called [__domain__](gloss:domain). Similarly,  [__range__](gloss:range) is the set of all possible output values. We use the same curly brace notation in the example above.  Sometimes we use inequalities to communicate domain and range. We will look at this in more detail later. Use the tabs to answer the questions below.

TODO Interactive here

---

### Coordinate Systems

We have been using mapping diagrams, coordinate pairs, and tables to represent relations. Graphs are another way to visualize relations. We can note a few interesting things when we look at relations on the [__coordinate plane__](gloss:coordinate-system).

Let’s plot the relation {(0,0), (1,4), (-5,3), (-2,-1), (4, -3)} on the coordinate plane. Two points are already on the graph.

TODO Interactive here

TODO Tutor prompts here

Let’s look at the graphs of the relations we have been working with so far. Notice how the mapping diagram relates to the graph. The axes in the coordinate plane below take names other than x and y, the variables we’ve seen before. This graph, for instance, includes a name- and a house-axis.

TODO Interactive here

Using coordinate systems, it is also very easy to check whether a relation is many-to-many, or one-to-many. The many-to-one and many-to-many graphs have [[at least one | no]] points that share an x-value. The one-to-one and one-to-many graphs have [[no | at least one]] points that share an x-value.

Go through the coordinate system from left to right, and check if there are any two points connected by a vertical line. This means that they share the same x-value, so the relation is not many-to-one. This is called the vertical line test. The graphs that share an x-value seem like they could have a vertical line that connects [[two or more | none]] of their points.

TODO Interactive here

---

### Functions

In math, relations that are one-to-one or many-to-one are particularly important, and we will see many more examples in later chapters. That’s why they have a special name: Functions. A [__function__](gloss:function) is a rule that assigns each input to  [[exactly one | at least one]] output.

---

Let’s return to the Hoctagon relations. Using the definition of function, select the relations that are functions.

TODO Interactive here

---

We can think of functions as machines. Let’s look at the sorting hat machine to see how it works.

TODO Interactive here

---

Every function needs to have a name. Function notation tells us the name of the function, the input value, and the rule that gives us the output value.

Let’s say a function, we’ll call f, put top hats on inputs.

IMAGE

If we are given, f(🙊), we know the output is INSERT IMAGE. Similarly, if we know f(x)= INSERT IMAGE , we know the x is 🦊.

| Function Name | | Input Value | = | Output Value |
| :-----------: | |:---------: | :---:| :-------: |
|      _f_      | |      _(x)_ | = | value or expression|

Let’s use this pattern to describe the sorting hat function.

sortinghat(first year name) = house name

From the function notation above, we know that putting the sorting hat on a first year shows what house the first year is sorted into. This pattern is important to remember. The notation and expressions opposite the function name can sometimes distract us from remembering how to read function notation.

sortinghat({current user name}= [[{current user house} | not {current user house}1 | not {current user house}2  |not {current user house}3 ]]

sortinghat(Sturgis Switch) = [[{Sturgis Switch’s house} | not {Sturgis Switch’s house}1  | not {Sturgis Switch’s house}2 | not {Sturgis Switch’s house}3]]

Now let’s try some examples with algebraic expressions.
Let x=2 and f(x)=50-3x, find f(2). [[44]]

TODO optional text for incorrect answers

Here are a few more function machines. Can you work out what the rule is in each case?

TODO Interactive here

Just like before, we can visualise functions in a coordinate system. The value along the horizontal x-axis represents the input, and the value along the vertical y-axis represents the output.

TODO Interactive here

A domain and range may include more elements than those listed. We have to think about what would make a complete list of all inputs or outputs. For each of these examples, drag the numbers into the groups “possible input” or “impossible input”.

TODO Interactive here

Look at the graphs of the functions. Determine what outputs make sense and why.

::: column(width=300)

TODO coordinate plane

::: column.grow

The graph only appears in the [[1st]] quadrant. We can see that all output values must be [[positive | negative | zero]].

::: column(width=300)

TODO coordinate plane

::: column.grow

The lowest y-value on the graph is about [[1250+-50 depending on scale]]. Let’s think about how we would figure out the highest y-value. If every student at the school bought a ticket, we would multiply [[student enrollment]] by $25 to calculate the highest possible y-value.

:::


--------------------------------------------------------------------------------


## Graphing and Interpreting Functions

> section: graphing
> sectionStatus: dev

    // NOTE
    // Local server trouble - not able to visualize design decisions. Followed the conventions I could find in terms of notes, fixme tags, image/ graph mock-ups, and targets. Targets do not have objects set, but the syntax should indicate where the target is intended to go. Worked last to first. Some of these conventions change as I learned more from other code.

    // EDITORIAL USE ONLY
    // [mock-up title image](https://drive.google.com/file/d/1P7d1Tfb7NwYLR5FM-e0zMbj5JKYgpJMJ/view?usp=sharing)

The Olympics is full of incredible athletic feats. It’s also full of interesting data. Graphs help us visualize that data. During our time together today, we will watch Olympic competitions and analyse their graphs for interesting information. Let’s head over to the gymnastics arena!

::: column(width=240)

![Ri](https://media.gettyimages.com/photos/derval-orourke-of-ireland-sally-pearson-of-australia-and-brigitte-of-picture-id123295200)

::: column.grow

Ri Se-gwang of the People’s Republic of Korea is about to vault. He won the gold medal for the vault in the 2016 Summer Olympic Games. Let’s watch.

:::

    // NOTES
    // [citation](https://en.wikipedia.org/wiki/Gymnastics_at_the_2016_Summer_Olympics_%E2%80%93_Men%27s_vault)
    // Student presses play on a [video](https://www.youtube.com/watch?v=85v0Un19A94) (0:00-0:18) of Ri’s vault. Simultaneously, a distance-time graph populates in a card to the right of the animation.

[vault mock-up](https://www.desmos.com/calculator/td3fynck7q)

There are several things going on here. Move the video back and forth to see how the graph lines up with the motion.

First, we need to understand is what the axes represent. The x-axis in this graph is the horizontal distance Ri travels throughout his vault. It is measured in centimeters. The y-axis is the vertical distance in centimeters Ri travels. This gives us information about Ri’s position much like chess pieces on a board.

The graph does not include any information about time. For example, we cannot tell _when_ Ri landed on the pit. Some of the graphs of later events will include time along the horizontal axis.

On this graph, we see the vault is at ([[3565+-5]], [[135+-5]])), which means Ri ran about 3.5 meters in his approach. The starting point on the runway is at the [__origin__](gloss:coordinate-system-origin). Ri lands at (3910, 30), which means the pit is about [[30]] centimeters tall.

---

Let’s build some intuition for what graphs of different events look like. Match the graph to the event. Be sure to pay close attention to what the axes represent.

    // NOTE
    // Organized as a table in the Google Doc, so I (Dani) put it in a table here. The idea is to make it cards.
    // Match graphs to sports of time functions

    // I'm having a tough time getting the shape to work with the scale. It might be easier to get the shape then layer the axes over - make this a static image. [sketch](https://drive.google.com/file/d/1uh9_0Abfs0lYIa8q6uZxUYFoRnHeLKtr/view?usp=sharing) disegard notes dotted graph

| Triple Jump | 50 M Freestyle | 100 M Hurdles | Vault | Diving | Skiing |
| ----------- | -------------- | ------------- | ----- | ------ | ------ |
| [Graph](https://www.desmos.com/calculator/qxfugm6xpi) | [Graph](https://www.desmos.com/calculator/z07xkap2bl) | [Graph](https://www.desmos.com/calculator/fwgpfln0ne) | [Graph](https://www.desmos.com/calculator/td3fynck7q) | [Graph](https://www.desmos.com/calculator/es8ugnvxeq) | [Graph](https://www.desmos.com/calculator/x58olmjtkl) |
| ![Photo](https://thumb.spokesman.com/LzzALA-yzk6jmSOYmVPZ6rdEsbU=/1170x0/media.spokesman.com/photos/2008/08/18/triplejumppic18_08-18-2008_ILE22PC.jpg) | ![Photo](https://c7.alamy.com/comp/2A8DJYK/genova-italy-08-nov-2019-cesar-cielo-filho-brazil-during-trofeo-nicola-sapio-swimming-credit-lpsdanilo-vigoalamy-live-news-2A8DJYK.jpg) | ![Photo](https://media.gettyimages.com/photos/derval-orourke-of-ireland-sally-pearson-of-australia-and-brigitte-of-picture-id123295200?s=2048x2048) | ![Photo](https://www.gettyimages.dk/detail/news-photo/derval-orourke-of-ireland-sally-pearson-of-australia-and-news-photo/123295200) | ![Photo](https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/08/19/Production/Daily/Style/Images/2016-08-18T192657Z_01_OLYGK111_RTRIDSP_3_OLYMPICS-RIO-DIVING-W-10MPLATFORM.jpg?uuid=BvCIjGYKEeaLJ7uLo5SXog) | ![Photo](https://st.depositphotos.com/2579941/2911/i/950/depositphotos_29111391-stock-photo-fra-alpine-skiing-val-disere.jpg) |
| [Video](https://www.youtube.com/watch?v=wVqYjmK-T3w) | [Video](https://www.youtube.com/watch?v=qZvdhv9uhi0) | [Video](https://www.youtube.com/watch?v=AFNqbhJ3kmw) | [Video](https://www.youtube.com/watch?v=85v0Un19A94) | [Video](https://www.youtube.com/watch?v=wTX13JZFHd4) | [Video](https://www.youtube.com/watch?v=kU0a-kvvKW4) |
| [Françoise Mbango Etone](https://en.wikipedia.org/wiki/List_of_Olympic_records_in_athletics) of Cameroon holds the Olympic record in women’s triple jump with a length of 15.39 meters. | [César Cielo](https://en.wikipedia.org/wiki/List_of_Olympic_records_in_athletics) of Brazil holds the Olympic record for the men’s 50 meter with a time of 21.47 seconds. | [Sally Pearson](https://en.wikipedia.org/wiki/List_of_Olympic_records_in_athletics) of Australia holds the Olympic record in the women’s 100 meter hurdles with a time of 12.35 seconds. | [Ri Se-gwang](https://en.wikipedia.org/wiki/Gymnastics_at_the_2016_Summer_Olympics_%E2%80%93_Men%27s_vault) of the People’s Republic of Korea won the gold medal for the vault in the 2016 Summer Olympic Games. | [Ren Qian](https://en.wikipedia.org/wiki/Diving_at_the_2016_Summer_Olympics_–_Women%27s_10_metre_platform) of China won the gold medal for diving in the 2016 Summer Olympic Games. |
| Start: 985m | Finish: 805m | Vertical drop: 180m | Gates: 66 | Finish time: 48.33 |

As you can see there are several different perspectives for graphing motion. One perspective is distance as a function of time. Select the events represented with this perspective.

    // NOTES
    // Multiple Select

We see the other two events are [[height | distance]] as a function of [[distance | height]].  We will look at two of these functions in more detail. Let’s head over to the pool.

---

We are just in time for the men’s 50 meter freestyle finals. Keep a close eye on César Cielo Filho of Brazil. The graph of his swim will appear as the video plays.

    // NOTES
    // Student presses play on a [video](https://www.youtube.com/watch?v=qZvdhv9uhi0) (0:12-1:21) of Cielo’s record setting swim. Simultaneously, a distance-time graph populates in a card to the right of the animation.

::: column.grow

César Cielo of Brazil holds the Olympic record for the men’s 50 meter with a time of 21.47 seconds.

::: column(width=240)

![César Cielo](https://c7.alamy.com/comp/2A8DJYK/genova-italy-08-nov-2019-cesar-cielo-filho-brazil-during-trofeo-nicola-sapio-swimming-credit-lpsdanilo-vigoalamy-live-news-2A8DJYK.jpg)

:::
::: column.grow

What an emotional race for Cielo! He broke the world and olympic records with this swim. The graph shows Cielo’s record-breaking swim. The shape is one we have seen before in [graphing linear functions](/linear-functions/graphing-functions). Recall this graph represents all the ordered pairs matching inputs to outputs. We can use information from the graph to write the function describing Cielo’s swim. Let’s call the function f(t).

Remember the general form for [__linear function__](gloss:linear-function) like this is y=mx+c, where m is the slope and c is the y-intercept. We replace y with the name of the function, and we replace x with the input variable for this function.

{.text-center} `y=mx+c`
`=> f(t)=m[[t]]+c`

This means we need to find [[slope {.fixme} also accept "m"]] and [[y-intercept {.fixme} also accept "c"]] from the graph.

Notice the [horizontal-axis](target:1_xAxis), in this graph shows [[time]] in seconds. The [vertical-axis](target:1_yAxis) is the distance from the starting block to the opposite end of the pool measured in [[meters]]. We see that the y-axis [__intercept__](gloss:intercept) is [[00]] meters, which represent the [[distance | time | number of laps]] of the race.

{.text-center} `y=mx+c`
`=> f(t)=mt+[[0]]`

We are only missing slope. In this function, slope represents Cielo’s [[speed | distance | kick rate]]. How could we use the graph to see how fast he swims?

    // NOTES
    // This might work better as an animation to keep the stairs equal distances. We won't have to worry about reducing ratios.
    // Students can click two points on the graph. These coordinates appear in a x-y table. Dashed lines with the horizontal and vertical measurements appear one unit at a time as though counting the slope. Students can choose between one and five points to see a pattern (slope).

As we move from left to right along the line, the vertical distances measure [[-2.35]] meters. The horizontal distances measure [[1]] second. Cielo’s speed [[stayed constant | increased | decreased]] for this race, which is a key feature of linear functions.

Recall that the [__slope__](gloss:line-slope) is the vertical change divided by the horizontal change (rise over run). The slope of f(t) is [[2.35]] meters per second.
y=mx+c

f(t)=[[2.35]]t+0

::: column(width=240)

[Cielo race mock-up](https://www.desmos.com/calculator/o3de2a7odh)

:::

Let’s say we want to know how long it took Cielo to swim the first 10 meters. Ten meters into the race, This means we are looking at [f(t)=10](target:1_cieloGraph). The phrase “how long” indicates we are solving for t.

    // NOTE
    // Algebra Flow

{.text-center} `f(t)=2.35t`
`10=2.35t`
`(10)/(2.35)=t`
`4.25=t`

Cielo swims the first 10 meters in just over [[4.1+-0.1]] seconds.

---

Take a look at the top four finishers during this race:

    // NOTES
    // Lines are labeled with the swimmer’s name and the function name. Moving the cursor along the active line show crosshairs extending to the axes. Students can also select a line, then select a value along one of the axes to lock the crosshairs to that value.
| Swimmer | | Function Name | | Color |
| :------ | | :------------ | | :---- |
| Cesar Cielo Filho | | f(t) | | green |
| Amaury Leveaux | | l(t) | | purple |
| Alain Bernard | | b(t) | | blue |
| Ashley Callus | | c(t) | | red |

::: column(width=240)

[50 free mock-up](https://www.desmos.com/calculator/ahx1i7lkau)

::: column.grow

All the lines cross the y-axis at [[0]] meters because this is the distance of the race. At first glance, we notice the graphs seem almost on top of each other. This must indicate that the swimmers’ speeds are similar.

Say we want to figure out how many seconds Cielo is ahead of Leveaux after 10 meters. We already know Cielo swam this distance in 4.25 seconds. We don’t know the function rule for l(t), Leveaux’s swim, but we do have the graph. Find the time, t, where l(t) = [[10]].

    // NOTES
    // Student clicks on l(t) to make it the active function. Student clicks on 10 on the y-axis. Dotted line from y-axis to l(t) appears. Dotted line from l(t) at 10 meters to corresponding t-value appears.

Leveaux swims the first 10 meters in [[4.56+-.02]] seconds. That means Cielo was only [[0.46+-0.12]] seconds ahead of Leaveaux!

Leveaux and Bernard trained together, and it shows. They stay neck-in-neck the whole race. They finish only [[0.4+-.01]] seconds apart.

Use the graph to find where everyone is at the 20 second mark.
f(20)=[[47+-0.1]]
l(20)=[[43+-0.1]]
b(20)=[[43.8+-0.1]]
c(20)=[[41.2+-0.1]]

Callus is 6 meters behind [[Cielo | Leveaux | Bernard]] at the 20 second mark.

:::

Let’s head over to the diving pool for the women’s 10 meter platform competition.

---

::: column.grow

Meanwhile, on the other side of the Aquatics center, a diving competition is in progress.
Ren Qian is among the youngest Olympic medalists. She is diving now - let’s [watch](https://www.youtube.com/watch?v=wTX13JZFHd4)

    // NOTES (0:00-0:12)!

Ren Qian of China won the gold medal for diving in the 2016 Summer Olympic Games.

::: column(width=240)

[Ren image mock-up](https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/08/19/Production/Daily/Style/Images/2016-08-18T192657Z_01_OLYGK111_RTRIDSP_3_OLYMPICS-RIO-DIVING-W-10MPLATFORM.jpg?uuid=BvCIjGYKEeaLJ7uLo5SXog)

::: column(width=240)

    // NOTES
    // make sticky
[dive mock-up](https://www.desmos.com/calculator/es8ugnvxeq)

::: column.grow

Let’s call the function representing Ren’s dive d(x). The input values, x, are horizontal distances from the platform. The output values, d(x), are Ren’s [[height]] throughout the dive. Immediately, we notice the shape of this graph is different from the swimming graphs above. This graph has [[2]] turning points compared to the linear functions [[0]] turning points.

Graphs with this shape are called cubic functions. We can get important information from the graph even without knowing the function equation. Match the given statements to the graph.

:::

    // NOTES
    // Students cards for all of the items below, and then drag them onto the corresponding point along the graph. Let’s show all the contextual statements, but talk about one key feature at a time.

| Place contextual statement cards on graph | | Target key feature appears when card is placed |  |Function notation appears when card is placed |
| :---: | | :---: | | :---: |
| Ren’s takes her place on the platform. | | Vertical intercept | |    |
| Ren reaches the highest point of her dive. | | maximum | |    |
| Ren completes 3.5 somersaults. | | decreasing | | 0.335<x<2.556 |
| Ren’s entry is nearly flawless. | | Horizontal intercept | | d(2.056)=0 |
| Ren turns around under water. | | minimum | | d(2.556)=-1.623 |
| Ren surfaces after a nearly flawless dive. | | Horizontal intercept | | d(2.989)=0|

    // NOTES
    // If I read this correctly, the explanation of the various features of the graph would come up and then students would drag the corresponding ones into place? Is that correct? If so, I wonder how it would go if the order is flipped - students choose any item from the table above and then when they drag it into the correct spot, some narrative comes up explaining the math of that point. I'm only suggesting this because as I read the table without any of the text below, I found myself moving all the "cards" into the correct spot on the graph and enjoyed that. Maybe the scaffolding is needed and important tot the math here. Just sharing my 1st experience of reading the table.
Recall the y-intercept is where x=[[0]]. In function notation, this looks like d([[0]])=10. The pattern of d(0)=y-intercept is true for any function.
    // That's an interesting thought. +philipp@mathigon.org can text oder be dependent on how the student uses the interactive? In this case, what order they choose to place the cards on the graph?

Similarly, the x-intercepts are were [[d(x) | x]]=0. This graph has [[2]] x-intercepts. They represent the surface of the water in the pool.

---

When we talk about the maximum, we are really talking about the highest [[d(x) | x]] value. Ren’s tallest height is [[10.9+-0.1]] meters. She reaches her maximum height when she is [[0.3+-0.1]] meters from the board. In function notation, this looks like [[d(0.3)=10.9 | d(10.9=0.3]].

The minimum is Ren’s lowest height. In this graph her lowest point is underwater. Because the x-axis represents the surface of the water, the minimum d(x) is [[negative | positive | zero]]. She turns around at [[-1.6 +-0.1]] meters underwater and [[2.6 +-0.1]] meters from the diving platform.

---

    // NOTES
    // +philipp@mathigon.org I pulled the intervals of increase from the cards. Do we want to pull it from the discussion, too? It gives a few more opportunities to use intevals.

Intuitively, we understand that the graph is increasing when Ren’s body is moving [[up | down]]. The notation for increasing is different from tuning points and intercepts. Since the graph increases for more than one point, we represent the section of the graph using an [__interval__](gloss:interval). The interval communicates the [[x | d(x)]] values corresponding to Ren’s increasing height. Note that there are many different ways to write intervals, we use inequalities in this chapter.

Ren moves up during the intervals:

    // NOTES
    // Multiple selector (shuffle order)

0<x<0.335		0.335<x<2.556		2.556<x<2.989

The unchecked interval is where the graph is [[decreasing]]. Ren is moving down from d(0.335)= [[10.941+-0.1]] meters to d(2.556)=[[-1.623+-0.1]] meters.

Notice the [[maximum | minimum]] is where the Ren’s path changes from increasing to decreasing heights.  The minimum is where Ren’s path changes from decreasing to increasing.

    // NOTES
    // Not sure where to put the comment, so putting it here. I like how in the 1st example, students see the graph being made as the video is playing. Maybe at the end of this section, something similar could happen? They have the graph labeled with the cards correctly. Then, the graph goes away and the cards stay in place. Then, they hit play on the video and see the graph made in real time as they watch the dive?

---

Let’s think about the input and output values for d(x). Recall [__domain__](gloss:domain) is the set of all possible input values for d(x). One method for finding the domain is starting with the set of Real numbers and narrowing the set down to a reasonable range for the given situation.

Ren’s horizontal distance starts at the diving platform and ends where she resurfaces in the pool. We know the diving platform is at x=[[0]] meters. She resurfaces at x= [[2.989]] meters. Therefore, we can write the domain as [[0<=x<=2.989 | 0<=x<=10.941 | 0<x<2.989]]. {.fixme} SHOW AFTER PREVIOIUS BLANKS FILLED  Note that the endpoints, 0 and 2.989, are included in the domain using <= and >=.

Recall [__range__](gloss:range) is the set of all heights Ren travels. Notice that Ren goes below the surface of the water. In fact, we can use the function’s [[minimum | maximum | horizontal intercept | vertical intercept]] to determine the lower bound on the range.  The minimum d(x) is [[-1.623]] meters.

Similarly, the maximum d(x) gives us the upper bound on the range. Therefore, the range is [[-2]] <= d(x) <= [[10.941]].

---

Let’s head to the beach for the gold medal men’s volleyball match between Brazil and Italy. The teams engage in a beautiful [volley](https://www.youtube.com/watch?v=k4ux0jau_ws) (5:56-6:01). As you watch the video, notice the shape of the graph. Is it what you expect?

    // NOTES
    // Students watch the video of the volley and the graph appears simultaneously.
    // I'm thinking students can use estimates for y-values. The times should be pretty close to the video, but the heights should just be correct relative to each other (e.g. the second relative max is higher than the first and lower than the third). We can have the net height on the graph for reference.
    // We make this graph, add discussion.

[sketch](https://drive.google.com/file/d/1mrT-d6Xwunc6I6hC7y2U_38bWR1y-lF5/view?usp=sharing)

The graph shows the volley as a function of [[time | distance | height]]. That means for at each moment, the ball has a position marked by [[(time, height) | (height, time)]]. For example, the ball is [[9+-.5 ]] feet high at 2 seconds. We can find information about _when_ certain things happen.

For instance, the ball spends about [[3.5+-.5]] seconds above the net. Brazil scores a point after about [[4.75+-.5]] seconds. Italy places a beautiful set at about [[3]] seconds. The ball reaches its maximum height, about [[11+-1]] feet, off of the set.

Notice that the graph does not show when the ball changes direction. This could happen if the graph were a function of [[distance | height | time]].  Such a graph would tell us _where_ certain things happen. We can’t tell by looking at this graph which side of the net the ball is on.

___

### Creating Graphs

    // NOTES
    // From David re: diving graph. Capturing idea.
    // Great graph. I really like how you included the part under the water. That's nice to show. I wonder if before showing the graph, students could draw the shape they think the graph would be? Maybe have an image of a diving board at the 10 meter mark and they use like a "scribble" or "line" tool to draw in the line they think the graph will be. Then, when they are done, the graph you have gets superimposed on their graph and their line fades away.
    // Create videos similar to the ball bouncing activity here: https://curriculum.illustrativemathematics.org/HS/teachers/1/4/8/index.html
    // Students place a point on the coordinate plane and label it with a key feature name. The might also be able to place approximate points on the internals of increase and decrease. Students click “graph”, or some such button, to see a line connect the points according to their labels. Once students see the graph, they can choose to edit or submit for checking.
    // Alternate interactive ideas
    // Give components of this similar to the piecing it together activity. [This is the same idea](https://www.google.com/url?q=https://curriculum.illustrativemathematics.org/HS/teachers/1/4/12/index.html&sa=D&ust=1595249230079000&usg=AFQjCNFlsjZxKJ9PGN9cluHSZm-OAFBaOA) used in the next chapter for building the tri graph.

The women’s pole vault is just about to start. You will be drawing the graph for this event.

    // NOTES
    // Allow scrubbing in video. Superimpose timer on the frames to make graphing easier. [1:00 - 1:15](https://www.youtube.com/watch?v=PPaUgaBor2I)

We like to start graphing using a table. Fill in the table below. Note the landing pad, called the pit, is 0.81 meters tall.

    // NOTES
    // Students fill in the missing values.

| Time (s) | | Height (m) |
| :------: | | :--------: |
| 0 | | 0 |
| 1 | | 0 |
| 4 | | [[0]] |
| 5.5 | | [[0]] |
| 6 | | [[1.5+-.2]] |
| 6.5 | | [[3.2+-.2]] |
| 7 | | [[4.85]] |
| 7.5 | | [[3.2+-.2]] |
| 8 | | [[0.81]] |

Plot these values on the coordinate plane.

[sketch](https://drive.google.com/file/d/1iywz65_-0ySs5Sd6rSxWF9RN_zun7pLc/view?usp=sharing)

This graph is interesting because between [[0]] and about  [[5.7+-0.2]] seconds, the graph is constant. Stefanidi’s maximum height is [[4.85]] meters. The last point on the graph is at ([[8]], [[0.81]]) because she lands on the pit, not the ground.

---

### Systems of Functions/ Simultaneous Functions

Let’s head over to the track for the women’s 800 meter final. Looks like we arrive in time to catch the last 200 meters of the race. [3:22-4:00](https://www.youtube.com/watch?v=h83yS9gPkA8)

    // NOTES
    // Information for the interactive:

| __Athlete__ | | Adelle Tracey | | Laila Boufaarirane | | Raevyn Rogers |
| :---------: | | :-----------: | | :----------------: | | :------------:|
| __Country__ | | GBR | | FRA | | USA |
| __@ 90.63 s__ | | 600 | | 598 | | 590 |
| __@ 800 m__ | | 121 | | 126 | | 120.2 |
| __color__ | | black | | green | | orange |
| __function__ | | g(t)=6.58545x+3.16101 | | f(t)=5.71105x+80.4071 | | u(t)=7.10179x-53.6354 |

    // NOTES
    // Students see the graph populate in time with the video.
    // We'll need to think about where we want to place this in the coordinate plane. Floating axes are nice as seen here. We could also change it such that 90.63s is t=0, though I think that would be a higher barrier to understand than not seeing the origin on the coordinate plane.

[800 M mock-up](https://www.desmos.com/calculator/msryjohuz9)

When we have two or more function on the same coordinate plane, we call them a [__system of equations__](gloss:system-of-equations). Systems like this add key features that help us further understand what is happening in the race between Tracey, Boufaarirane, and Rogers. For example, something interesting is happening when the graphs intersect. Select all the true statements about the intersection points in this system.

    // NOTES
    // Multiple select

| Tracey and Rogers are at the same location. | | g(t) = u(t) | | Rogers is ahead of Boufaarirane. | | u(t) < f(t) |
| Boufaarirane and Rogers are at the same location. | | f(t) = u(t) | | Tracey is behind Rogers. | | g(t) > u(t) |

The graphs intersect when one runner passes another. When the runners have about 200 meters left in their race, [[Rogers | Boufaarirane | Tracey]] is in third place.

---

Rogers passes Boufaarirane at about [[96.5+-.25]] seconds when they are both about [[630]] meters into the race. In function notation, this looks like f([[96.5+-.25]])=u([[96.5+-.25]])=[[630]].

About [[13.5+-.25]] seconds later, [[Rogers | Boufaarirane | Tracey]] overtakes [[Tracey | Rogers | Boufaarirane]]. They have about [[73+-1]] meters to the finish line.

---

The slopes of each function tell us each runner’s [[speed | distance | cadence]]. Rogers is running at about [[7.1+-0.2]] meters per second.

    // NOTES
    // We looked at counting slope above. This is a review of calculating slope. They need to pull the values off of the graph.
    // Algebra Flow

{.text-center} `m=(y_2 - y_1)/(x_2 - x_1)`
`m= (y_2 - 590)/(x_2 - 90.63)`
`m= (800-590)/(120.2-90.63)`
`m= (210)/(29.57)`
`m=7.1`

Roger’s speed is [[0.6+-0.2]] meters per second faster than Boufaarirane and [[1.4+-0.2]] meters per second faster than Tracey.

---

In this system of functions, we can see who is ahead at any given time during the race. For example, we write f(t) > u(t) when [[Boufaarirane is ahead of Rogers | Rogers is ahead of Boufaarirane]].

    // NOTES
    // Used both < and > to show both. Would it be better for students to see a "readable" pattern than matches the sentences, which would only use > ?

| Students label with the given contextual statement cards. | | This information appears after the functions notation card is correctly placed. | | Extra information. Not cards. |
| :---: | | :---: | | :---: |
| Boufaarirane is ahead of Rogers. | | f(t) > u(t) | | 90.63=<t<96.382 |
| Rogers is ahead of Boufaarirane. | | f(t) < u(t) | | 96.382<t<=120.2 |
| Tracey is ahead of Rogers. | | u(t) < g(t) | | 90.63<=t<109.998 |
| Tracey is ahead of Boufaarirane. | | g(t) > f(t) | |   |
| Rogers is ahead of Tracey. | | g(t) < u(t) | | 109.998<t<=120.2 |

When we talk about one function being greater than another, we are using the [[output | input]] values to identify a range of [[input | values]]. For example, we see Tracey is ahead of Boufaarirane for this entire stretch of the race. This is expressed as [[g(t) > f(t) | g(t) < f(t)]]. We can think of this as “the range of time when Tracey has run a farther distance than Boufaarirane”. That range is [[90.63+-0.2]] <= t <= [[121]]. We can do a similar analysis for each pair of functions.

Looking at the three functions on the coordinate plane, we can see that the relationship between u(t) and g(t) changes from g(t)>u(t) to u(t)>g(t) when [[Rogers passes Tracey | Tracey passes Rogers | Rogers passes Boufaarirane | Boufaarirane passes Rogers]]. This means that the upper bound on g(t)>u(t) is where g(t) [[= | < | >]] u(t), which is t=[[110+-0.2]] seconds. This t-value, 110 seconds, is also the lower bound on u(t)>g(t).

----

Finally, here is one more function that represents a sport. Can you think of what it is, and write a short story that explains the different features of the chart?

TODO: draw chart
<< free-form text input >>


--------------------------------------------------------------------------------


## Piecewise Functions

> section: piecewise
> sectionStatus: dev
> id: fn-sketch

Draw a Function:

    x-coordinate-sketch(width=600 height=400 x-axis="-1,10,1" y-axis="-5,5,1")
      button.btn.clear Clear

Type some text:

    x-free-text(placeholder="Your answer…")

    // NOTE
    // Local server trouble - not able to visualize design decisions. Followed the conventions I could find in terms of notes, fixme tags, image/ graph mock-ups, and targets. Targets do not have objects set, but the syntax should indicate where the target is intended to go. Worked last to first. Some of these conventions change as I learned more from other code.

Multisport races test athletes endurance. Swimrun is a rather new multi sport competition that started in 2002 in Sweden. The story goes that the owner of the Utö Värdshus hotel, his friend, and two hotel staff challenged each other to a two-versus-two race from the Utö Värdshus hotel, across three islands, to Sandhamn. The losing team would pay for everyone’s post-race meals. How long do you think the race lasted?

    // NOTES
    // Anders Malm - owner of Utö Värdshus, Janne Lindberg - friend, Andersson brothers - staff at Utö Värdshus
    // [citation](https://en.wikipedia.org/wiki/Swimrun)

    // Map between these two locations. Include images from each place. I like David’s map zoom effect he has mentioned in a couple of chapters. While it wouldn’t necessarily add to the math directly, it would make the story more interesting and help student intuit distance.
    // EDITOR USE ONLY
    // [Utö Värdshus](https://www.utovardshus.se/wp-content/uploads/2019/03/Liggande_VH-fr%C3%A5n-Bastun_Copyright-Ut%C3%B6-V%C3%A4rdshus-1.jpg)

    // [map view](https://www.google.com/maps/dir/Sandhamn,+Sweden/Ut%C3%B6+V%C3%A4rdshus,+Pr%C3%A4stbacken+22,+130+56+Ut%C3%B6,+Sweden/@59.1054899,18.3165704,10z/data=!4m14!4m13!1m5!1m1!1s0x46f5741069214bbf:0xbfee8fb6ece8997c!2m2!1d18.9108304!2d59.2878703!1m5!1m1!1s0x46f58b4425a902e9:0xb792bc38be8de224!2m2!1d18.329336!2d58.967417!3e4)

![Sandham](https://upload.wikimedia.org/wikipedia/commons/c/c1/Sandhamn_February_2013_04.jpg)

The race ended up taking over 24 hours! The friends did the same race the next year, and the idea for the ÖtillÖ (island to island) was born.

---

::: column(width=240)

    // NOTES
    // Something like this would be awesome. Transition from water to run. Setting. Dressed for water in Sweden.
    // EDITORIAL ONLY

![](https://live.staticflickr.com/65535/48213036251_c9ae4edc7b_b.jpg)

::: column.grow

We are training for the ÖtillÖ. We need to get used to the feeling of swimming then immediately running. We decide to swim for 500 meters then run for 5 kilometers. Choose the graph that represents the athlete’s distance as a function of time, d(t).

:::

    // NOTES
    // Multiple selector with one choice
    // [option 1](https://drive.google.com/file/d/1UhFc87ir21UUNnQWmJ0UhvrXn6bZu6Lo/view?usp=sharing)
    // [option 2](https://drive.google.com/file/d/1T0q0btNyuiNaOVWk6NbM8dQydXthhwtv/view?usp=sharing)
    // [option 3](https://drive.google.com/file/d/18DMyDqbjmOq7Wdou-yTuMvI0NTBfSg-T/view?usp=sharing)
    // [option 4](https://drive.google.com/file/d/1zKhk2t_V00SSEsmyXWCvohxnOyzMk0Q6/view?usp=sharing)
    // Option 2 is the object of the targets below.

This is an example of a [__piecewise function__](gloss:piecewise) where different rules apply to different sets of input values. We can see the [first section](target:1_piecewise) of the graph has a different slope than the [second section](target:2_piecewise).

One of the most common ways to write piecewise functions is by using cases.

    // NOTES
    // It would be great to target or color code the different components of the function. Input ranges point to x-axis, rules point to graph.

`d(t)= {(1/20t,0<=t<10),(1/6 t-7/6,10<=t<=40):}`

Each line in this function is a case. It includes the function rule and the input values where the rule is used. We read this function as “The function d has a value of (1/20)t when t is at least 0 and up to 10. Function d is (⅙)t-(7/6) when t is at least 10 and no more than 40.”

Let’s continue to get our feet wet in the world of piecewise functions.

---

::: column.grow

The 400 meter medley relay in swimming includes four swimmers. Each athlete swims 100 meters of the relay in one of the four strokes. These 100 meter segments are called legs. This relay includes [backstroke](target:1_relayGraph), [breaststroke](target:2_relayGraph), [butterfly](https://www.desmos.com/calculator/y3zz7gphmo), and [freestyle](https://www.desmos.com/calculator/y3zz7gphmo) in that order. The graph below shows s(d). Notice the vertical axis is [[distance | speed]] in meters. The horizontal axis represents [[speed | distance]] in meters per second. Is s(d) a [__function__](gloss:function)?

::: column(width=240)

    // EDITORIAL USE ONLY

![](https://depositphotos.com/stock-photos/backstroke-start.html?filter=all&qview=115180204)

    // NOTES
    // Add vertical line test tool.
    // [200 Medley Mock-up](https://www.desmos.com/calculator/y3zz7gphmo)
    // Graph above is the object of the targets in relay paragraph.

:::

Recall that functions cannot have one input going to [[more than one | only one]] output value.  The [__vertical line test__](gloss:vertical-line-test) is a tool to test whether a relation is a function. Use the vertical line above to test this relation.

:::

---

We need to pay close attention to the endpoints of each section of the domain. The endpoints ensure each element of the domain is matched to only one element of the range. With this in mind, select the function that matches the graph above.

    // NOTES
    // Multiple selector with one correct answer

[option 1](s(d)={(1.3, 0<=d<=100),(1.2, 100<d<=200),(1.4, 200<d<=300),(1.5, 300<d<=400):})
[option 2](s(d)={(1.3, 0<=d<=100),(1.2, 100<=d<=200),(1.4, 200<=d<300),(1.5, 300<d<=400):})

Notice the graph shows “<” as an open circle - the same would be true for endpoint containing “>”. The closed circles inculcate “<=” and “>=”.

---

The function s(d) is a special kind of piecewise function called a [__step function__](gloss:step-function). One major difference between s(d) and d(t) above is all the slopes in s(d) are [[0]].

The fastest leg of the relay is [[freestyle | butterfly | breaststroke | backstroke]] with a speed of [[1.5+-0.025]] meters per second. The slowest leg was [[breaststroke | freestyle | butterfly | backstroke]] completed in [[1.2+-0.025]] meters per second. Each leg of the race was [[100]] meters long.

We’re ready to dive into graphing.

---

One of the most common multisport competitions is a triathlon where athletes swim, bike, and run. The function l(t), Lisa Laws’s race, is given below. Use the given line segments to draw l(t) on the coordinate plane.

    // EDITORIAL USE ONLY
    // Fun, quick [video](https://tokyo2020.org/en/sports/triathlon/) of triathlon. Nod to 2020 Olympics, especially if they don't happen. Includes map of courses.

`l(t)={(75x, 0<=t<=20),(50000, 20<t<=21),(-615.385t+63000, 21<t<=86),(10000, 86<t<=87),(-277.778t+34166.7, 87<t<=123):}`

    // EDITORIAL USE ONLY

[triathlon transition](https://depositphotos.com/stock-photos/triathlon-competition-woman.html?filter=all&qview=111615040)

    // NOTES
    // There is a paper-based activity in the [IM chapter](https://curriculum.illustrativemathematics.org/HS/teachers/1/4/12/index.html) on piecewise functions “Students are given the equations that define two piecewise functions, along with strips of paper, each containing a part of a graph and a portion of the horizontal axis (no scale is shown). Their job is to arrange the strips, apply a scale on each axis, and add open and closed circles to the graph to accurately represent the function values at each interval of input.” - IM After building the first function, students label with the given cards.
    // Maybe shuffle order and orientation? Students can spin them as they would a paper cut out?

[piece 1](https://www.desmos.com/calculator/pqdjlinaf1)
[piece 2](https://www.desmos.com/calculator/yauvuvkbpx)
[piece 3](https://www.desmos.com/calculator/t9ltbpdotk)
[piece 4](https://www.desmos.com/calculator/zaa3wcoa05)
[piece 5](https://www.desmos.com/calculator/hcghou4mr7)
[solution](https://www.desmos.com/calculator/mkyxyep0jv)

    // TUTOR PROMPTS
    // What do you remember about slope?
    // Positive slope increases from left to right.
    // Negative slope decreases from left to right.
    // What does a linear function with zero slope look like?

Noticing that each slope is either constant or [[positive | negative]] helps us determine the orientation of each piece of the graph. Constant slope is a [[horizontal | vertical]] line. Positive slope moves [[up | down]] as we read from left to right.

Slope can also help us determine the order of the pieces from left to right. For example, Law’s fastest leg of the race was [[cycling | swimming | running]]. The largest slope, [[615.4+-.1]] meters per minute, is the third case in the function. It runs between [[21]] and [[84]] minutes. We now know where on the x-axis to place the steepest piece of the graph.

---

Recall that a function’s key features give us insights into what’s going on during the race. For example, the starting line is represented by the {.FIXME} (multiple select) [[y-intercept | x-intercept | maximum | minimum]]. We can write this point in function notation as l([[0]])=[[0]]. Place the remaining statements on the graph.

    // NOTES
    // Students label with the given cards.

| Place contextual statement cards on graph | | Target key feature appears when card is placed |  |Function notation appears when card is placed |
| :---: | | :---: | | :---: |
| Law crosses the finish line. | | maximum | | l(123)=51500 |
| Law is cycling toward the transition point. | | increasing | | 21 < t <= 86 |
| Law is transitioning from swimming to cycling. | | constant | | 20 < t <= 21 |
| Law is transitioning from cycling to running. | | constant | | 86 < t <= 87 |

---

Now you get to race Law. One of the exciting things about triathlons is that you don’t need to be the fastest at each of the three sports, you just need to cross the finish line first. Here you can adjust your graph, s(t), to see how the race changes. Let’s say your most challenging leg of this race is swimming. As you can see, this segment cannot be adjusted. Can you beat Law with a swim leg that’s [[4]] minutes slower?

::: column.grow

    // NOTES
    // Slider in __bold__ . Like slider graphs in https://mathigon.org/course/sequences/arithmetic-geometric. Or drag endpoints along the transition lines to change slopes.
    // Adjusts to match given input _italics_.

s(t) = {(60t, 0<=t<=25),(1500, 25<t<=26.5),(_695.652_t-_16934.8_, __26.5+-0.75__<=t<__84+-0.75__),(41500, _84_<t<=_85.5_), (_298.50_t+_15977.6_, _85.5_<t<=__123+-5__):}

    // NOTES for 60t line: Actually adjusting these points in the background.
    // NOTES for 695.652 line: (__26.5+-.75__, 1500) and (__84+-.75__, 41500)
    // NOTES for 41500 line: (_84_, 41500) and (_85.5_, 41500), _84_ matches slider in last case, _85.5_ Adjusts to be lower bound + 1.5
    // NOTES for 298.50 line: (_85.5_, 41500) and (__123+-5__, 51500), _85.5_ matches previous case

---

Try adjusting the graph so that your swim __and__ run are slower than Law’s. You need to cycle at [[{.fixme} Is there a way to accept a range of slopes that are dependent on the slider values? ]] meters per minute in order to beat Law.

::: column(width=240)

    // NOTES
    // Graph: l(t) is blue, s(t) is orange
    // [mock-up triathlon graph](https://www.desmos.com/calculator/1wcntarqcv)

:::

---

::: column(width=240)

[sundae image](https://depositphotos.com/4537530/stock-photo-ice-cream.html)

::: column.grow

Let’s go get some ice cream to celebrate you win! Ice-agon gives two pricing schemes. You can pay by the gram or buy one of three sizes. What do you want to order?

:::

    // NOTES
    // Students interact with the graph. Small, medium, and large are in orange. Price per gram is in purple.

[graph mock-up](https://www.desmos.com/calculator/i0iatpatrn)

As you can see, your choice will depend on a few different factors. Fill out the table below to have a clearer understanding of your options.

| Weight | | Cost | | Cost |
| :---: | | :---: | | :---: |
| 50 | | [[ Not available ]] {.fixme} also accept NA, N/A, na, n/a, none, no | | 0.10 |
| 75 | | [[2.75]] | | [[1.50+-0.1]] |
| 125 | | [[2.75]] | | [[2.50+-0.1]] |
| 150 | | [[Not available]] | | [[3+-0.1]] |
| 175 | | [[4.25]] | | [[3.50+-0.1]] |
| 225 | | [[4.25]] | | [[4.50+-0.1]] |
| 275 | | [[Not available]] | | [[5.50+-0.1]] |
| 325 | | [[5]] | | [[6.50+-0.1]] |
| 335 | | [[Not available]] | | [[6.70+-0.1]] |

The most ice cream you can buy with $5  is about [[300+-30]] grams with the large size container. The best buy if you want 200 grams of ice cream is [[pay per gram | medium container]], which costs [[4]].


--------------------------------------------------------------------------------


## Absolute Value Functions

> section: absolute-value
> sectionStatus: dev

    // NOTE
    // Local server trouble - not able to visualize design decisions. Followed the conventions I could find in terms of notes, fixme tags, image/ graph mock-ups, and targets. Targets do not have objects set, but the syntax should indicate where the target is intended to go. Worked last to first. Some of these conventions change as I learned more from other code.

::: column.grow

Atari's Pong, released in 1972, launched the video gaming industry as we know it. The game is effectively a digital table tennis game. Pong is so popular that pop culture still references it today.

These days gamers can play internet-based variations of pong or visit an arcade with an original Atari Ping console.

    // REFERENCE ONLY
    // [https://www.youtube.com/watch?time_continue=9&v=fiShX2pTz9A&feature=emb_logo](https://www.youtube.com/watch?time_continue=9&v=fiShX2pTz9A&feature=emb_logo)

MathiPong pays homage to this titan in gaming history. The objective is to direct the ball to the target. Choose regular or challenge mode to get started.

::: column(width=240)

![](https://upload.wikimedia.org/wikipedia/commons/3/32/Signed_Pong_Cabinet.jpg)

    // Source: https://commons.wikimedia.org/wiki/File:Signed_Pong_Cabinet.jpg

:::

    // NOTES
    // onboard the game. User uses arrow keys to move platform. Platform is wider than the point shown.
    // User plays several rounds.

![](/content/functions/images/4/Screenshot_2020-06-29_at_13.53.44.png)

Now that you've played a few rounds and have the idea of how the game works, let's think about a strategy for hitting the target. Let's take a look at the game on a coordinate plane.

    // NOTES
    // The animation mock-ups are on a loop for minimal clicking in this draft. I don't think they need to be on a loop in the final. In fact, I actually envision these happening on one coordinate plane. This would make each a different state of the same interactive.
    // Left column shows states of game. Right column is the text matching the state. In final version of the chapter, this won't need to be a series of columns.

::: column(width=240)

[https://www.desmos.com/calculator/vy9nhnyp1z](https://www.desmos.com/calculator/vy9nhnyp1z)

::: column.grow

If we just let the ball fall from the upper left part of the screen. It's path will look like [this](target:1_linearGraph). Here we recognise the slope of the line describing the path of the ball is [[-1]]. Given that this line crosses the origin, the function is f(x)=-x.

::: column(width=240)

[https://www.desmos.com/calculator/yyoqeezli2](https://www.desmos.com/calculator/yyoqeezli2)

::: column.grow

We know we want the path of the ball to look like [this](target:2_linearGraph) in order to hit the target. This new line describing the intended path of the ball is [[1]]. Interestingly, this is simply the opposite of the slope above. The function of this line is g(x)=x.

::: column(width=240)

[https://www.desmos.com/calculator/jr6scyqzdn](https://www.desmos.com/calculator/jr6scyqzdn)

::: column.grow

If we move the platform to the intersection of these two lines, the path of  the ball will move from its original path to our desired path. The intersection is at ([[0]], [[0]]).

::: column(width=240)

[https://www.desmos.com/calculator/jjbzth2pta](https://www.desmos.com/calculator/jjbzth2pta)

::: column.grow

In the chapter on piecewise functions, we practised writing functions to describe situations like this. That is, we want to use a specific section of one function and a specific section of another. The domain values for the piecewise function describing this path are:

h(x)= \begin{matrix}-x & x [[\ge]]\ [[0]] \\x & x\ [[<]]\ [[0]]\end{matrix}

:::

There is actually another way to express the same shape using a different function.

[https://www.desmos.com/calculator/vyl1ggpfxc](https://www.desmos.com/calculator/vyl1ggpfxc)

[https://www.desmos.com/calculator/ihajfmgvkl](https://www.desmos.com/calculator/ihajfmgvkl)

This [v-shaped graph](target:1_absGraph) is called an absolute value function. As you can see, the shape is the same as the one described by the piecewise function. In addition to function notation, it uses bars to mean absolute value. Recall that [**absolute value**](gloss:absolute-value) is the distance between the given number and zero. In other words, absolute value of any number is not negative. The same idea applies to this function.

f(x)=|x|

Absolute value functions have many of the same key features we have been looking at through the functions course. The platform is at a key point called the [vertex](gloss:graph-vertex) of a graph. It is the turning point in all absolute value graphs. The vertex of this absolute value function is at ([[0]], [[0]]).

Now Mathipong wouldn't be much of a game if the ball always fell from the same spot and the target never moved. Likewise, absolute vallue functions wouldn't be very useful if they only ever occured with the rule f(x)=|x|. Let's have a look at how they move around the coordinate plane.

    // NOTES
    // This section will likely work better with some animations. The graphs here can be mock-ups of key points in the animations.

So far, when we have been graphing functions, we have been either plotting points on the line and connecting them with a line, or we have been finding a significant point, like the y-intercept or x-intercept and counting the slope to construct the line. The graphs and their respective equations actually leads us to a new way of understanding graphs on the coordinate plane. We can think of graphing in terms of **[transformations](gloss:transformations).** Let's take a look at this with a lin we are familiar with graphing y=x.

::: column(width=240)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.18.28.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_14.47.44.png)

::: column.grow

Now graph the line y=x+2.

::: column(width=240)

[https://www.desmos.com/calculator/mcwyh3toux](https://www.desmos.com/calculator/mcwyh3toux)

Notice that this line is y=x shift up 2. Or, we could see if as y=x shifted left 2.

Then let's reflect it over the x-axis.

::: column(width=240)

![](/content/functions/images/4/Screenshot_2020-07-10_at_14.50.39.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_14.53.38.png)

::: column.grow

The right side of the original like, the portion above the x-axis, remained unmoved. The left side, everything below the x-axis, reflected up above the x-axis. The position above the x-axis is the same as the graph of f(x)=|x+2|.

::: column(width=240)

[https://www.desmos.com/calculator/6fpbvgfrny](https://www.desmos.com/calculator/6fpbvgfrny)

::: column.grow

Notice y=|x+2| is y=|x| shift to the left 2.

Now suppose we add a number to y=|x| similar to y=x+2. What do you think will happen to the graph?

:::

---

::: column(width=240)

[https://www.desmos.com/calculator/aqly16ptq5](https://www.desmos.com/calculator/aqly16ptq5)

::: column.grow

The graph of y=|x| shift up.

Notice that moving the graph left and right changes values [[inside | outside]] the absolute value bars. Similarly, moving the graph up and down changes the values [[outside | inside]] the absolute value bars. This means that y=|x+2| is **not** the same as y=|x|+2.

These two transformations, which we call shifts, clearly result in different graphs. The left graph shows a [[horizontal | vertical]] shift while the graph on the right shows a [[vertical | horizontal]] shift. We will look at transformations in more detail in the [Function Transformations](https://mathigon.org/course/function-transformations) course.

:::

---

Match the function with its graph. Keep in mind the shifts f(x)=|x-h|+k where h is the horizontal shift and k is the vertical shift.

    // NOTES
    // Students drag functions to their respective graphs.

    // Functions for cards.

[](https://lh6.googleusercontent.com/bjmVukpDAuueGt7ShvzlA7ciunIpVLBrQPg-WNbdw0JZSFb59imu8XM4rDi_sS1mIn8FcooZjyUbeJnj04TExksgfPn70I0CdNL6kN65eIHZ611gFplehLVgMMnl11QhTOUUl0C-)

    // Graph mock-ups for cards.

[https://lh6.googleusercontent.com/BiB7qoKIoH-Ct1EKL54qUHd5DaPt8yEC11EHxDh0NY8jv_baTSmdjCIxuT4I-bEkGIgpj_zUhe-Q-vYyURKf6rv9mWpFtkWF8ClKaPNfkle5r575c3isjwp47h8128K9Dol5Pael](https://lh6.googleusercontent.com/BiB7qoKIoH-Ct1EKL54qUHd5DaPt8yEC11EHxDh0NY8jv_baTSmdjCIxuT4I-bEkGIgpj_zUhe-Q-vYyURKf6rv9mWpFtkWF8ClKaPNfkle5r575c3isjwp47h8128K9Dol5Pael)

[https://lh5.googleusercontent.com/qDPHACr6mN2lDyvT2T4HzeV93FcMRj0yXAvctg0Wu00_WrB3VSRacBLURLB_A3VQazxfFoIjJ9mtRvZEsl9uYnPvl3zOgOOIemy6GXwziJR1A-PdxQpl2FKFJ23flqUg2rHdGTXY](https://lh5.googleusercontent.com/qDPHACr6mN2lDyvT2T4HzeV93FcMRj0yXAvctg0Wu00_WrB3VSRacBLURLB_A3VQazxfFoIjJ9mtRvZEsl9uYnPvl3zOgOOIemy6GXwziJR1A-PdxQpl2FKFJ23flqUg2rHdGTXY)

[https://lh6.googleusercontent.com/vmg68ABIbxAl6uhLVfxGs3Z0GOZqUF3LvM4hdubZ4qKBIBIyrY1fgUc9rP9oPBthfbFAyWz8Ra_8-SN2kpZMO4bONJ6Awj1V17MksaDdxQA01Xr9BoMRgTM8t-zA9BeOjID1PPyS](https://lh6.googleusercontent.com/vmg68ABIbxAl6uhLVfxGs3Z0GOZqUF3LvM4hdubZ4qKBIBIyrY1fgUc9rP9oPBthfbFAyWz8Ra_8-SN2kpZMO4bONJ6Awj1V17MksaDdxQA01Xr9BoMRgTM8t-zA9BeOjID1PPyS)

[https://lh4.googleusercontent.com/jjOSNHGZ4SyupkjyNcwV6R6SttOVaNW2Wans6ug9mOx24AXzNrUIIqIY531O1sF9tAc5kKJSV01yE6C__uy1JLKh32XFDf-jkfWJyhBAimFWGyMbP8U0_FHf--NHtqZ18dPPIqQ9](https://lh4.googleusercontent.com/jjOSNHGZ4SyupkjyNcwV6R6SttOVaNW2Wans6ug9mOx24AXzNrUIIqIY531O1sF9tAc5kKJSV01yE6C__uy1JLKh32XFDf-jkfWJyhBAimFWGyMbP8U0_FHf--NHtqZ18dPPIqQ9)

[https://lh5.googleusercontent.com/Fs4qVDVYffvrT6EWYqmwbxPiNXNQrrVHXqA3kK85-H8V1hwLoIbN59ODnXwXjRp-SW17-Y4vjMTg6mXVM8m6csg_zDb4BcptbReFnap16j7KYvF1xbuJ5tjNo0lDlmoToLS-RexU](https://lh5.googleusercontent.com/Fs4qVDVYffvrT6EWYqmwbxPiNXNQrrVHXqA3kK85-H8V1hwLoIbN59ODnXwXjRp-SW17-Y4vjMTg6mXVM8m6csg_zDb4BcptbReFnap16j7KYvF1xbuJ5tjNo0lDlmoToLS-RexU)

---

Let's return to this idea of reflecting a graph over the x-axis. This is actually not a coincidence that this action give the absolute value function of the original linear function. The same property holds for the absolute value of other kinds of function.

    // NOTES
    // **Slideshow** functions: https://www.desmos.com/calculator/l2lveli1ey
    // This could be a cool graph drawing interactive once your tool is done.
    // Function mock-ups. Left column is original graph. Right column is absolute value Superimposed over original.

::: column (width=240)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.27.58.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.30.12.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.29.35.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.28.36.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.31.06.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.29.58.png)

::: column(width=240)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.29.23.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.28.13.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.30.22.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.29.47.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.28.55.png)

![](/content/functions/images/4/Screenshot_2020-07-10_at_15.31.30.png)

:::

We explore reflections more in [Reflecting Functions](https://mathigon.org/course/function-transformations/refleticing).

---

### Absolute Error

    // NOTES
    // This section may not work with final chapter. Editors may strike.

Let's take a look at how the idea of absolute value can relate to data analysis. There is an kind of measurement called absolute error that quantifies the difference between an expected value and a measured value. For example, we know our thermometer has an error of 2 degrees. The thermometer says it is 25 C right now. We can use absolute values to determine what the lowest and highest possible temperatures the air could be given the error on the theromometer.

Let x represent the actual temperature while 25 is the measured temperature. Their difference gives us the error, which we know is 2. Therefore, we can use the equation |x-25|=2 to determine the possible actual temperatures.

Recall that absolute value measures the distance from zero. This means that that measurement can go in the positive direction **or** in the negative direction. We don't actually know the intended direction when we are given a value like *absolute error is 5*. To account for this, we need to look at both options.

    // NOTES
    // Algebra Flow. Currently written step-by-step in step then description.

$|x-25|=2 $

Given

$x-25=2 \ \text{or}\ -(x-25)=2 $

Account for the value in the [positive direction](target:1_leftEquation) and the value in the [negative direction](target:2_rightEquation).

$x=27 \ \text{or} \ x-25=-2$

Solve each equation normally.

$x=27\ \text{or}\ x=23$

The solutions give the lowest and highest possible temperatures.

    // END ALGEBRA FLOW

In order to know whether the temperature is higher or lower than our measured value, we would need additional information like a measurement from another thermometer.

Many different kinds of function have situations like this where they can actually have more than one solution to a problem. We will explore this idea in more depth in [quadratic functions](https://mathigon.org/course/quadratics/introduction).

---

Now that we know more about absolute value functions and how they work, take a swing at the next level of Mathipong.

    // NOTES
    // Ball comes at different locations on the upper left side of the screen. Path is at different angels (slopes).


--------------------------------------------------------------------------------


## Inverse Functions

> section: inverse
> sectionStatus: dev

    // NOTE
    // Local server trouble - not able to visualize design decisions. Followed the conventions I could find in terms of notes, fixme tags, image/ graph mock-ups, and targets. Targets do not have objects set, but the syntax should indicate where the target is intended to go. Worked last to first. Some of these conventions change as I learned more from other code.
    // Many links go to databases in Notion where design elements and texts are stored.

Team sports is a world of split-second decisions and fast-moving bodies. Teammates choose where to place a pass. Referees decide who gains possession of the ball. Fans follow the action from great distances. In all these cases, jersey colour is deciding factor in how these instantaneous decisions are made.

Let's take a look at the the Balligon Soccer League. Match each team to a jersey colour such that you have a [function](gloss:function).

    // NOTES
    // Same interactive as chapter 1. Links go to the databases with assets and text.

[team mascots](https://www.notion.so/a89f42d0f2b447f89f0d4ae58ad565be)

[Jersey Colours](https://www.notion.so/e13166523b5e47ef96044c922bac940b)

Recall that the team mascots make up the [[domain | range]] of the function,

    // NOTE hide until blank is filled

while jersey colours make up the range. In function notation, we write this relationship as f([[team]])=[[jersey colour]].

    // NOTE
    // also accept "domain", "mascot", "team name"; also accept "range", "colour", "color", "jersey"; OR make multi-select

Take a look at the end of season tournament brackets.

::: column(width=240)

![](/content/functions/images/5/Screenshot_2020-07-01_at_16.50.26.png)

Example brackets. Fill in with teams matched to colours.

::: column.grow

The game between `team1 assigned to same color` and `team2 assigned to same color` is going to be a challenge for the players, referees, and fans. The jersey colours are `{jersey colour}` for both teams. Imagine keeping track of who has possession of the ball from 30 meters away. The consequences of wearing the same colours are so challenging, in fact, that many sports leagues give penalties to teams who are in the wrong uniform.

:::

---

This idea of seeing jersey colour and immediately knowing what team the player belongs to is the opposite of `f(team)=jersey` colour. In math, we call this backwards relationship an [inverse](gloss:inverse-operation). We use this idea when we balance equations: addition cancels subtraction, multiplication cancels division, etc. Specifically, we are thinking about an [inverse function](gloss:inverse-function) relationship.

The inverse function we are looking at identifies the team based on jersey colour. Take a look at the mapping for the function above moving from left to right.

    // NOTES
    // Show mapping from above with copy of the team group to the right of colour.
    // Think about how to guide students toward adding a colour to the output. This should be integrated into the interactive design.

Here we can see that the [relation](target:1_mapping) between colour and team is not a function. What would fix this relationship between `f(team)` and  so that `f^(-1)(colour)`  is a function?

---

    // NOTES
    // Show mapping from above with copy of the team group to the right of colour. Students can add a colour option. Change the mapping s.t. `f(team)` is one-to-one.

Now  `f^(-1)(colour)` is a function. In fact, recall from [Relations and Functions](https://mathigon.org/course/functions/relations) there are several types of functions. `f(team)`is now a [[one-to-one | one-to-many | many-to-one | many-to-many]].

    // Decide whether or not to include all relation classificiations or just function classifications.

---

Let's look at this mapping relationship in a function machine. Choose a team to pass through the machine. The machine assigns the team to a colour, then reverses the assignment. In other words, the machine applied the function rule then the inverse function rule.

    // NOTES
    // Visual inspiration
    // Apples are team names. Lemons are jersey colours. Label the first machine with `f(team)` and the second with `f^1(colour)`.
    // EDITORIAL USE ONLY

![](https://upload.wikimedia.org/wikipedia/commons/f/fe/Fruit_function_and_inverse.PNG)

[Inspiration](https://phet.colorado.edu/sims/html/function-builder/latest/function-builder_en.html)

Every time you pass `{team}` through both machines, you get out the team's [[name | jersey color]]. Algebraically we write this as `f(f^1(x))=x`. We will look more closely at why this is important throughout the chapter.

    // NOTES
    // Highlight that f^-1 is not exponent

---

### Currency Conversion

International tourism reached over 4 million arrivals each day in 2019. With so much travel between countries, people are more aware of their spending power.  That is, how far a `{user's currency unit e.g. dollar}` in `{user's home country's currency}` goes in another currency. Let's explore this idea of spending power - choose a destination from the cities listed.

    // NOTES
    // Do not show city options located in the same country as the user.
    // Could be great to tie the conversion rate in this interactive to the daily rates. This would complicate the rest of the chapter's text and [[blanks]]. I think it could be a nice touch, though. Users who return to this chapter would see how (potentially) volatile, or at least not-static, this rate is in real life.

[Cities and Currencies](https://www.notion.so/554f2cbfc43640799fff025363f6d2fc)

    // NOTES
    // The text below is build on visiting Machu Picchu from the USA.

Along your trip, you find many different markets take only cash. To prepare for your next trip to the market, you withdraw cash. The conversion function is `{destination currency}={conversion rate}*{home currency}` . Based on your budget you have about [[home currency]]

{.fixme} user enters whatever amount they want

to spend on souvenirs, which means you need to withdraw [[{destination currency}={conversion rate}*{home currency}]]

{.fixme} user must do this calculation and enter the amount +- .5

Take a stroll through the market and decide what you want to buy.

    // MOCK UP
    // Souvenir cards
    // Images have local price. Rollover shows price in `{home currency}`. Even cooler, user calculates and inputs on the back of the card.

[Figma](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAItjhFAz9DsTkH0elhIbNt%2FUntitled%3Fnode-id%3D10%253A5%26viewport%3D-720%252C470%252C0.9163351058959961%26scaling%3Dmin-zoom)

[Souvenirs by city](https://www.notion.so/20a2f11c078940b6ae0170578e84c4ea)

---

### Visual relationship

We can represent this relationship between the cost in `{destination currency}` and `{home currency}` as (`{destination currency}`, `{user home currency}`). This relationship means `{destination currency}` is the [[input | output]] and `{user home}` is the [[output | input]]. The points fall on a line. Let's call this line f(`{destination currency}`)=`{conversion rate}`x`{destination currency}`.

---

Recall that earlier we used the equation `{destination currency}={conversion rate}*{home currency}` to calculate how much money to withdraw from the bank before our trip to the market. Notice that the this equation is strikingly similar to the [f(x)](target:1_souvenirGraph) on the graph.

In fact, the most important difference is that the input and output values are switched. We saw this relationship between functions above in the jersey example. Using this observation, we can see that `{destination currency}={conversion rate}*{home currency}` is the inverse function of f(`{destination currency}`)=`{conversion rate}`x`{destination currency}`. This means we can use the notation `f^(-1)({home currency})` for the function representing the exchange from `{home currency}` to `{destination currency}`.

---

The graphs of inverse functions have some interesting features. First, this idea of switching inout and output values helps us plot points for `f^(-1)({home currency})`. Let's plot the souvenir points for the inverse function.

    // NOTES
    // f(x)=3.54x where x is soles and f(x) is dollars. The souvenir labels would be stronger if they were the name of the souvenir purchased.
    // Object of f(x) target above.
[https://www.desmos.com/calculator/ff6489z9ns](https://www.desmos.com/calculator/ff6489z9ns)

[https://www.desmos.com/calculator/tlscgnsyy3](https://www.desmos.com/calculator/tlscgnsyy3)

    // Students plot these points.
[https://www.desmos.com/calculator/ccbs3quxpu](https://www.desmos.com/calculator/ccbs3quxpu)

[https://www.desmos.com/calculator/mgmj8jbz26](https://www.desmos.com/calculator/mgmj8jbz26)

---

There is another interesting feature of inverse functions, though it may not be immediately obvious. Let's make some measurements between lines to see if the interesting feature emerges.

Begin by measuring the vertical distance from `{souvenir 1}` on `f^(-1)({home currency})`to  `f({destination currency})`. The distance is

    // NOTES
    // Students read this from the measurement tool on the graph. I'm not as worried about the exact measurement as I interested in their noticing the vertical and horizontal distances are the same. I also want them to eventually key into the intersection points.

[[`f({cost of souvenir 1 in destination currency})`- `f^(-1)({cost of souvenir 1 in home currency})`|xxx]]. Similarly measure the horizontal distance between `{souvenir 1}` on  `f({destination currency})` to `f^(-1)({home currency})`.

---

This distance is the same as the vertical distance you measured! Make the same measurements for each of the souvenir points.

    // NOTES
    // Interactive states

![](/content/functions/images/5/Screenshot_2020-06-30_at_14.58.09.png)

![](/content/functions/images/5/Screenshot_2020-06-30_at_14.58.39.png)

![](/content/functions/images/5/Screenshot_2020-06-30_at_14.59.00.png)


Notice that the intersection points of each of these measurements fall on their own line.

    // NOTES
    // Interactive states

![](/content/functions/images/5/Screenshot_2020-06-30_at_14.59.38.png)

![](/content/functions/images/5/Screenshot_2020-06-30_at_15.00.10.png)

![](/content/functions/images/5/Screenshot_2020-06-30_at_14.11.11.png)

The equation of this [line](target:2_souvenirGraph) is y= [[1]]m+[[0]]

{.fixme} hide until blank filled

which simplifies to y=x. Notice that if we were to fold the coordinate plane along the line y=x,  `f({destination currency})` and `f^(-1)({home currency})`would lie on top of each other.  The line y=x would remain in the same position during this fold.

In fact, all inverse functions are symmetric over the line y=x. The tools we used to arrive at this observation are the same that we can use to determine whether two functions are inverses. Let's take a closer look at this with a new graph shape called a parabola.

---

### Parabolas

::: column(width=240)

    // NOTES
    // Interactive states - not shown: vertical line test
![](/content/functions/images/5/Screenshot_2020-06-30_at_15.29.04.png)

![](/content/functions/images/5/Screenshot_2020-06-30_at_15.33.18.png)

::: column.grow

We call this shape a [parabola](gloss:parabola). [Check](target:1_lineTest) to make sure it is indeed a function.

---

The parabola passes the vertical line test, so it is a function. We just observed that inverses are symmetric about the line y=x. Make a copy of the parabola and rotate it in the coordinate plane to make it a reflection of the original parabola over the line y=x. Reflection in this case means that the two parabolas are symmetric over y=x.

:::


    // NOTES
    // New parabola can snap to inverse when user gets close.

![](/content/functions/images/5/Screenshot_2020-06-30_at_15.37.42.png)

::: column.grow

The inverse parabola has the same mirror look as the currency functions. Recall the ordered pairs on those line were switched. That is (`destination currency`, `home currency`) was on one line and (`home currency`, `destination currency`) was on the other line. Check that this pattern hold for these two parabolas.

Fill in the table with the coordinate points for each key feature in the original parabola. Verify that their inverses appear on the rotated parabola.

    // NOTES
    // All values are fill-in-the-blank. Students can indicate or track that they have found the corresponding coordinate points.

::: column(width=240)

    // NOTES
    // **Note** students should check several points to verify.

![](/content/functions/images/5/Screenshot_2020-06-30_at_15.43.10.png)

:::

[Untitled](https://www.notion.so/3c9309dafa2f4ed6b49e3d5a9cb6004a)

---

::: column(width=240)

![](/content/functions/images/5/Screenshot_2020-06-30_at_15.47.25.png)


::: column.grow

According to the properties of inverses, this is the inverse of the original parabola. It's symmetric over y=x and the points on this curve are the inverses of the points on the original parabola. The last thing we need to do is check that it is a function.

---

The inverse function doesn’t pass the vertical line test. It isn’t actually a function! When we were looking at the jersey example, we changed the team to colour function so that each team was assign to only one colour. Can you apply that idea here?

:::

    // NOTES
    // CTA: Use the sliders to adjust the original function so that the second parabola is a function.
    // Sliders here prototype the slider function in the chapter. They restrict the domain from each direction.

[https://www.desmos.com/calculator/ywpamz642r](https://www.desmos.com/calculator/ywpamz642r)

When we change the [domain](gloss:domain) of the original parabola, we can make the inverse parabola a function. In fact, the domain must be restricted so that each input value is matched to only one output. This means that some functions have inverses and some functions don’t. Specifically, only one-to-one functions have inverse functions.

---

### Algebraic Relationship

::: column(width=240)

![](/content/functions/images/5/Screenshot_2020-07-01_at_21.27.34.png)

[https://stock.adobe.com/images/beachside-hammock/328924634?prev_url=detail](https://stock.adobe.com/images/beachside-hammock/328924634?prev_url=detail)

::: column.grow

The Caribbean islands are another popular tourist destination. Their iconic beaches and crystal blue waters paint a picture of relaxation. Bermuda, an island country in the Caribbean, is one of the few places in the world that use both Celsius and Fahrenheit temperature scales in meteorology.  Let's set up a hammock in the this shady nook and take a look at the relationship between these temperature scales.

Recall that inverting money from one currency to another are inverse functions. We looked at this using graphs. Let's look at converting temperatures from one scale to another to see if this is indeed an instance of inverse functions.

---

The forecast calls for a high of 27 degrees Celsius today. We missed the report that included the temperature in Fahrenheit, so we Google the conversion and find C(x)= $\frac{5}{9}(x-32)$. Find today's high in Fahrenheit.

:::

    // NOTES
    // Algebra Flow. Written as step, description, step, description, etc.

$27=\frac{5}{9}(x-32) $

Substitute 27 in for C(X)

$9*27=[\frac{5}{9}(x-32)]x9$

Use inverse operation on to move 9

$\frac{9}{5}x27=\frac{5*(x-32)}{5}$

Use inverse operation to move 5

$\frac{9}{5}x27+32=x-32+32$

Use inverse operation to move 32

$\frac{9}{5}x27+32=x$

x, representing the temperature in Fahrenheit, is isolated

$80.6=x$

Today's high in Fahrenheit

    // END Algebra FLOW

This is a familiar process for solving equations. We can use this same process to find inverse functions algebraically. Let's take a look at two key steps in solving the equations above.


    // NOTES
    // Several columns to show alignment between text and steps. Does not need to remain as several columns.

::: column(width=240)

{.text-center} Original Function: $27=\frac{5}{9}(x-32) $

::: column(width=240)

{.text-center} Inverse Function: $\frac{9}{5}x27+32=x$

:::

Recall that we substituted 27 in for C(x) since it was our given temperature. Let's put y in for 27 to represent the output value in an ordered pair.

::: column.grow

{.text-center} Original Function $y=\frac{5}{9}(x-32) $

::: column(width=240)

{.text-center} Inverse Function: $\frac{9}{5}y+32=x$

::: column.grow

Now remember that to graph the inverse function when we were buying souvenirs at the market in `{destination}`, we swapped the x and y coordinates. That is, we switched the input and output. Let's do that same thing in the inverse function.

::: column(width=240)

{.text-center} $\frac{9}{5}x+32=y$

::: column.grow

Recall the notation for inverse functions use the letter name of the original function with a -1 in the exponent location. This means y in the inverse function represents `C^(-1)(x)`.

Take another look at the original and inverse functions side-by-side.

::: column(width=240)

{.text-center} $\frac{9}{5}x+32=C^{-1}(x)$

::: column.grow

{.text-center} $C(x)=\frac{5}{9}(x-32) $

::: column(width=240)

{.text-center} $\frac{9}{5}x+32=C^{-1}(x)$

:::

 Recall from the jersey example above that passing a value through a function machine then its inverse function machine gives the same value in the end. We called this `f(f^(-1)(x))=x`. Let's verify that this works for C(x) and `C^(-1)(x)`.

    // NOTES
    // Use same function builder inspirations as above.
    // Let's use the function machine as the way to explore `f(f^(-1)(x))=x`. List lots of numbers to pass through the machines. List a few variables, including x, to pass through. We can dig into the algebraic composition  functions in another chapter.

Let's determine whether these two functions are inverses.

{.text-center} $f(x)=4-\frac{3}{2}x\\ g(x)=\frac{1}{2}x+\frac{3}{2}$

    // NOTES
    // Students use function machine. They see they are not inverses.

The function machine indicates that f(x) and g(x) [[are not | are]] inverse functions.

---

Let's find the inverse function of f(x).

    // NOTES
    // Students put the steps cards in order, then match the equation cards to the steps cards.

{.text-center} $f(x)=4-\frac{3}{2}x $

    // NOTES
    // Several columns to show alignment between text and steps. Does not need to remain as several columns.
    // Left column indicates equation cards. Right column represents steps cards.
    // Students put the steps cards in order, then they fill in the blanks of the equations cards.

::: column(width=240)

{.text-center} $y=4-\frac{3}{2}x$

::: column(width=240)

substitute y in for f(x)

::: column(width=240)

{.text-center} $x=4-\frac{3}{2}y$

::: column(width=240)

switch x and y

::: column(width=240)

{.text-center} $x-4=-\frac{3}{2}y$

::: column(width=240)

solve for y as usual

::: column(width=240)

{.text-center} $-2(x-4)={3}y$
$\frac{-2x+8}{3}=y$

::: column(width=240)

{.text-center} $\frac{-2x+8}{3}=f^{-1}(x)$

::: column(width=240)

substitute `f^(-1)(x)` in for y

:::

We know have several ways of identifying and verifying inverse functions. Select your favourite method and describe why.

    // NOTES
    // Multiple select. No correct answer (i.e. open ended)

[option 1](inverting equations algebraically)
[option 2](graphing using coordinate points and their inverses)
[option 3](graphing using y=x as the line of symmetry)
[option 4](mapping diagram)

    // NOTES
    // Open-ended answer field

Functions and inverse functions are fundamental ideas in coding and deciphering. Check out [Codes and Ciphers](https://mathigon.org/course/codes/introduction) to see these ideas in action!


--------------------------------------------------------------------------------


## Rates of Change

> section: rates-of-change
> sectionStatus: dev

    // NOTE
    // Local server trouble - not able to visualize design decisions. Followed the conventions I could find in terms of notes, fixme tags, image/ graph mock-ups, and targets. Targets do not have objects set, but the syntax should indicate where the target is intended to go. Worked last to first. Some of these conventions change as I learned more from other code.

Throughout history, bacteria and viruses have plagued populations ranging in size from villages to entire civilisations. We see cycles of infectious diseases such as small pox, black death, salmonella,  yellow fever, flu, polio, AIDS, ebola, Zika, and  COVID-19 change the course of history.

Math can help us understand the scale and impact of disease outbreaks. Today we will be focusing on the [function](gloss:function) describing the cumulative confirmed cases of COVID-19.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_09.52.32.png)

::: column.grow

The table to the right shows the cumulative confirmed cases as a function of time. Recall that this wording means that time is the [[input | output]]

###fixme: hide until blank filled
 and cumulative confirmed cases is the output.

This word cumulative means current total over all time. That means this number only goes up, even if the daily confirmed cases begins to decrease. To get a more accurate picture of what's going on, we can calculate the number of new cases every day.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_09.52.45.png)

::: column.grow

For example, we can place points on the graph to the right on January 26 and June 12. The slope of the line running through these two points is called [t](gloss:secant-line)he **average rate of change** for this timeframe.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_09.53.21.png)

::: column.grow

This line estimates the confirmed cases have been increasing at a rate of over [[14]] billion per day.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_10.00.25.png)

::: column.grow

Now, we can see that this line doesn't do a great job of telling the story of how the daily case count changed over time. The area in blue shows the distance between the average rate of change and the actual graph.

Let's see if there is a way to make the average rate of change better estimate the actual daily change.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_10.11.24.png)

::: column.grow

When we zoom in on a smaller date range, we see that the cumulative case count makes huge jumps on some days. The average rate of change can smooth these jumps.

This can be especially helpful for data sets that have huge outliers. Outliers are data that are substantially different than other data points. In statistics, we recognise that outliers can pull averages and standard deviations in their direction.

:::

The same thing can happen here with this data. Days where there is particularly high or low increase rates can make the graph jagged. Average rates of change can help smooth the graph and perhaps our understanding of what is going on during a specific interval. The trick is adjusting the interval to the appropriate size. We will looks this more in [statistics](/course/statistics).

---

Average rate of change can also give a way to compare change among different countries. Let's compare cumulative confirmed cases in the [USA](target:1_USAgraph) and [Italy](target:2_ITgraph) in the month of March 2020.

{.fixme} Students can use crosshairs to read data from the graphs. They can also draw lines between interesting point (as noted in the text) to visualize rate of change.

![](/content/functions/images/6/Screenshot_2020-07-09_at_10.43.53.png)

::: column.grow

We can see that Italy had a higher cumulative case count until March [[27]]. This means that Italy had more cases of COVID-19 for most of March.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_10.52.43.png)

:::

::: column.grow

When we look at the average rates of change for the two countries between March 9 and March 18, we see that Italy's daily case count is rising about [[2]] thousand more cases per day than the USA's.

It makes sense that the country with the highest case count would be seeing a higher number of cases per day. But something interesting happens between March 19 and 26.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_10.49.26.png)

:::

---

::: column.grow

During this week, the total case count in the USA was still lower than Italy's. However, the USA's case count was increasing faster that Italy's. The USA's daily case count was growing about [[3]] thousand cases per day faster than Italy's!

While it may seem opposite of our expectations, this odd relationship between average rates of change and total count is the only way that the USA's total case count surpasses Italy's.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_11.01.15.png)

:::

As we have seen, average rates of change can be helpful for understanding statistical data. They can also help us understand objects in motion. Let's take a look at rates of change in SCUBA diving and space shuttle missions.

---

### SCUBA Diving

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-02_at_13.03.48.png)

::: column.grow

Scuba diving (self-contained underwater breathing apparatus) is a XXX dollar industry globally. People travel to destinations to dive in new and different waters. With this recreation XXX industry growing, diver education and safety is a high priority for organisations like PADI and DAN. The pressure of the water on the human body is higher than we are used to at ground level in the atmosphere. And, those pressure increase the deeper a diver travels.

::: column(width=240)

[Stock Video of Group of Divers During Safety Stop at Adobe Stock](https://stock.adobe.com/video/group-of-divers-during-safety-stop/122711283?prev_url=detail)

{.fixme} Nice 14s video of safety stop

::: column.grow

The laws of gasses and pressures are such that the air we breathe, even with scuba gear, can change XXX and XXX as the water pressure increases. This compression needs to reverse as the pressure decreases when a diver ascends to the water's surface. If a diver resurfaces too quickly, the gases in their cells won't have time to XXX - creating bubbles in tissues and joints. This can lead to decompression illness. To prevent this, divers pay close attention to the rate at which they are ascending. Yep, rate. The idea is to ascend slower than 10-15 meters per minute.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_13.28.42.png)

{.fixme} Lots of great options in Adobe Stock with search: SS Thistlegorm.

::: column.grow

The S.S. Thistlegorm is one of the top 10 wreck diving sites in the world. This British Merchant Navy ship sank on 6 October, 1941 during the Second World War. Jacques Cousteau discovered her wreck site in the early 1950s.

::: column.grow

This is the depth profile of a typical dive to the SS Thistlegorm. We call a graph like this one a **position** function. The y-values tell us where the diver is in relation to the the surface of the water, while the x-axis tell us *when* they are at any given position.

The diver's maximum depth was about [[30+-.25]] meters about [[40+-2]] minutes into the dive. Let's take a look at other key features in this graph. They will give us areas to focus on as we think about whether the diver ascended at a safe rate. Label the graph with each key feature.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_13.30.23.png)

{.fixme} The above is a mock-up of a more realistic profile. Combine this with the noise elements of the image below.

![](https://upload.wikimedia.org/wikipedia/commons/d/db/Dive_computer_recorded_profile_example.png)

[image citation](https://en.wikipedia.org/wiki/File:Dive_computer_recorded_profile_example.png)

:::

{.fixme} Design cards for the words below. Students drag to above graph.

::: column(width=100)

x-intercept

maximum

x-intercept

::: column(width=100)

increasing

increasing

increasing

::: column(width=100)

decreasing

decreasing

decreasing

:::

Notice the graph has a bunch of peaks and valleys. These seemingly random highs and lows are called "noise". Many different factors can contribute to data like this. GPS readings often have noise because of lapses in connection between the diver's computer and the satellites.

We can use average rates of change to smooth out this graph just like we did in the COVID-19 graph above.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_13.52.19.png)

{.fixme} The above is a mock-up of a more realistic profile. Combine this with the noise elements of the image below.

![](/content/functions/images/6/Screenshot_2020-07-02_at_14.41.47.png)

::: column.grow

We see that the diver's position function more or less increases from (45, -30) to ([[60+-5, [[0]]). These two points give us enough information to calculate the diver's **average rate of change** of [[2]] meters per minute, well below the threshold of 10-15 meters per minute. So far, it seems like this diver prevents decompression illness.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-09_at_13.56.16.png)

{.fixme} The above is a mock-up of a more realistic profile. Combine this with the noise elements of the image below.

![](/content/functions/images/6/Screenshot_2020-07-02_at_14.46.02.png)

::: column.grow

Notice, though, that the rate of increase is not constant. This diver seems to have taken breaks along the way.

This begs the question - did the diver ever exceed the recommended ascent rate?

:::

To answer this question, we can [place points](target:1_point, target:2_point) on the graph indicating the segments we want to isolate. The line running through two of these two points is called a [secant](gloss:secant) line. We can compare the **secant** to the  actual graph. The [distance](target:1_distance) between the two gives us a sense for how accurate the average rate of change between the two points is compared to what the graph shows is happening.

Use the slider to see how changing the number of averages affects the relative average rates of change.

{.fixme} Approximate states for slider. Design similar for the "depth vs. time" data. Images are mock-ups based on old data.

![](/content/functions/images/6/Screenshot_2020-07-02_at_14.47.24.png)

![](/content/functions/images/6/Screenshot_2020-07-02_at_14.48.09.png)

![](/content/functions/images/6/Screenshot_2020-07-02_at_14.48.36.png)

The more lines representing average rates of change there are, the secant lines gets [[closer to | farther from]] the graph. Select the other true statements.

{.fixme} Multiple select

The slope of the secant line gets closer to the rate of change on the cumulative cases graph between the intersection points.

The slope of the secant line gets farther from the rate of change on the cumulative cases graph between the intersection points.

Distance between the secant line and the cumulative cases graph increases.

Distance between the secant line and the cumulative cases graph decreases.

Slope of the secant line changes.

---

{.fixme} Design similar for the "depth vs. time" data. Images below are mock-ups with old data.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-02_at_15.06.21.png)

{.fisxme} Just highlighted some noise. We can decide how detailed we want to be here.

::: column.grow

Data based in GPS reading like this often have a lot of "noise", or points that seem inconsistent with the general trend of the rest of the points. One way to deal with points like these is to think of them as outliers. Average rates of change should cut out the noise.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-02_at_15.16.57.png)

{.fixme} Eyeballing this. Mock-up level accuracy.

::: column.grow

Lines of best fit like this reduce, or eliminate, the noise from GPS. From here, we can determine whether the diver exceeded the safe ascent speed.

To do this, we are going to look at *many* average rates of change.

::: column(width=240)

![](/content/functions/images/6/Screenshot_2020-07-02_at_15.22.50.png)

::: column.grow

{.fixme} slider to zero. Target to tangent.  You seem to have a clear idea of what this feature will do. I can mock something up if you want, but it doesn't seem to the the highest priority in this chapter.

:::

As we add more lines approximating the rate of change, the two points on the graph get closer together. When this distance gets very small, the average rate of change approximates **instantaneous rate of change**.

---

Move the line along the position graph to see how the instantaneous rate of change changes.

This line is called a **[tangent](gloss:tangent)**. It only touches the position graph at one point compared to secant line's two. The tangent line's slope is the diver's **instantaneous rate of change**.

We can plot the slopes of the tangent lines on a new graph. Notice the x-axis is time since the start of the dive. The y-axis is diver's ascent and descent speeds.

{.fixme} This seems like it will work best with either *more* sliders, this time moving time along like scrubbing, or as an animation with actual scrubbing. Images are state mock-ups.

![](/content/functions/images/6/Screenshot_2020-07-09_at_14.16.53.png)

![](/content/functions/images/6/Screenshot_2020-07-09_at_14.17.08.png)

The position and speed graphs look very different but are generated from the same data. The position graph is most useful for knowing exactly how deep the diver is during any moment during the dive. The speed graph is most useful for knowing how well the diver regulated their decompression. The maximum y-value on the speed graph is about [[8+-.2]] meters per min, so the diver did take good care of their decompression.

---

Match the use/information with the appropriate graph

::: column(width=100)

location in the pool

length of the race

race time

time of turn

::: column(width=100)

when he got tired

speed during first length

speed during second length

slowest part of the race

relationship to other swimmers

::: column(width=100)

position graph

velocity graph

:::

The relations between these two graphs, really  between the two functions represented by the graphs, is called a **[derivative](gloss:derivative)**. Specifically, the velocity graph is the derivative of the position graph. This relationship exists with many functions. The derivative can give useful information that is hidden in the position graph. In this case, the diver can quickly determine whether he/she/they stayed in the safety recommendations for decompression illness.

Let's look at another application of derivatives.

---

### Space Shuttle Discovery

{.fixme} Data from: https://www.nasa.gov/pdf/522588main_AP_ED_Phys_ShuttleLaunch.pdf

The Space Shuttle *Discovery* is one of the space shuttles in NASA's space shuttle program. Discovery alone launched and landed 39 times in about 27 years between 1984 and 2011. It's missions included both research and assembly missions for the International Space Station.

Space shuttle flights like the Discovery's are split into four phases: ascent, entry, orbit, and rendezvous. This is the [altitude graph](target:1_altgraph) for the ascent phase of one of the Discovery's missions.  The space shuttle needs to reach at least 7.85 kilometres per second in order to attain orbit. We will need the speed graph to determine if and when the Discovery reaches this speed.

{.fixme} Students use the same tangent tool as above to make the speed graph. Images below are state mock-ups.

![](/content/functions/images/6/Screenshot_2020-07-08_at_15.09.45.png)

The x-axis would be easier to read if gridlines were at the minute (e.g. 60, 120, etc).

![](/content/functions/images/6/Screenshot_2020-07-08_at_14.53.25.png)

The Discovery does reach the required speed at about [[470+-10]] seconds.  It only takes about [[25+-5]] seconds to break the sound barrier at 343 meters per second. That's an incredible change in speed. The space shuttle goes from 0 to over 343 meters per second in about half a minute. That kind of [acceleration](gloss:acceleration) will flatten an astronaut to their seat.

In fact, the safety of the crew and equipment requires the shuttle's acceleration to stay under 29 meters per `second^2`.

We typically think of acceleration in terms of fast cars. Think "This Ferrari goes from 0 to 100 kilometres per hour in 2.4 seconds!" **Acceleration** is actually the derivative of speed. That means acceleration measures the change of speed during a certain time. Let's see how close to the safety limit of 29 meters per `second^2`.

{.fixme} Students use the same tangent tool as above to make the acceleration graph. The images are state mock-ups.

![](/content/functions/images/6/Screenshot_2020-07-08_at_15.09.45.png)

{.fixme} The x-axis would be easier to read if gridlines were at the minute (e.g. 60, 120, etc).

![](/content/functions/images/6/Screenshot_2020-07-08_at_14.53.25.png)

![](/content/functions/images/6/Screenshot_2020-07-08_at_15.16.08.png)

The maximum acceleration during this ascent phase is about [[28+-1]] meters per second, just at the safety limit. Remember that it only take the Discovery about 30 seconds to break the speed of sound. The acceleration at 30 seconds is [[17+-2]] meters per `second^2`, not even close to the maximum acceleration the crew and shuttle experience later in the ascent phase.

The ascent phase of the mission include several events between lift-off and reaching orbit. Small variations in the position and velocity graphs show as large jumps in the acceleration graph. Drag the events to their corresponding locations on the acceleration graph. Some events are single points on the graph and others are entire sections of the graph.

{.fixme} design cards for each line below

::: column(width=100)

Space shuttle lift-off

Solid Rocket Booster separation

Main Engine Cutoff

::: column(width=100)

Space Shuttle Main Engines provide smoothly changing acceleration

External Tank Separation

::: column(width=100)

Negative rate of change of acceleration (large air drag)

Constant acceleration (3 g’s)

On orbit

:::

---

From virus spread to diving decompression to space flights, the relationship between velocity and position stays constant. The velocity is the derivative of position. What position graphs show in steepness, velocity graphs show in coordinate points. Continue practicing visualising this relationship by matching the position graphs on the left to the velocity graphs on the right.

{.fixme} shuffle the cards below. Students match.

![](/content/functions/images/6/chart.png)

![](/content/functions/images/6/chart_(3).png)

![](/content/functions/images/6/chart_(5).png)

![](/content/functions/images/6/chart_(7).png)

![](/content/functions/images/6/chart_(9).png)

![](/content/functions/images/6/chart_(11).png)

![](/content/functions/images/6/chart_(1).png)

![](/content/functions/images/6/chart_(2).png)

![](/content/functions/images/6/chart_(4).png)

![](/content/functions/images/6/chart_(6).png)

![](/content/functions/images/6/chart_(8).png)

![](/content/functions/images/6/chart_(10).png)
