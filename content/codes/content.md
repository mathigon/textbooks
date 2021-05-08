# Codes and Ciphers

## Introduction

> section: introduction
> id: intro
> goals: play
> color: "#93299B"
> level: Intermediate
> next: game-theory

::: column.grow

In the early 2000s, the Colombian government was fighting a civil war against groups of insurgents,
who were hiding in camps in the South American rainforest. Occasionally, soldiers were captured by
these rebels, and then had to spend months or even years in captivity.

It is easy to lose hope when you’ve been chained up in a hostage camp for such a long time, unable
to see your family, and guarded by armed guerilla forces. However, in 2010, there was reason to
be hopeful: the army was approaching, and planning to rescue them shortly.

::: column(width=260)

    // https://depositphotos.com/97306690/stock-photo-jungle-in-colombian-green-mountains.html
    x-img(src="images/rainforest.jpg" width=260 height=320)

:::

Unfortunately, it seemed impossible to tell the prisoners that help was coming, without also
alerting their captors – that is, until Colonel Jose Espejo came up with an ingenious idea. With
his team, he wrote a new pop song, embedded a secret message in the chorus, and then played it
thousands of times over the radio.

To the rebels, it sounded just like meaningless music, but to the prisoners listening in, it was a
message of hope. See if you can spot the message – it starts around 1:30.

    figure: iframe(width="100%" height=166 scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184253099&color=%23295869&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false&download=false&show_playcount=false")


---
> id: flashlight
> goals: flashlight

There are many other examples in our world, where we want to communicate with others, but we can’t
use our voices or text. Maybe your friend lives across the street from you. At night, you secretly
talk to each other using flashlights – without waking up your family by shouting.

::: column(width=300)

    x-img.window(src="images/window.png" width=300 height=280)
      img.flash(src="images/light.png" width=74 height=74)
    x-gesture(target=".window" offset="-80,-44")

::: column.grow

For example, one short flash might mean “hello” or “yes”. One long flash might mean “how are you?”,
and two short flashes might mean “good night”. Can you come up with any other signals you might
need?

{.reveal(when="flashlight")} However, even if you agree many different signals for different words
or questions, it will be difficult to have more complex conversations, or to talk about new topics…

:::

---
> id: telegraph
> goals: press

### Morse Code

In the early 19th century, the only way to transmit messages across long distances was my mail or
by messenger. Companies like the “Pony Express” ran delivery routes with couriers riding on horses,
but it could still take days or even weeks to send a message between distant cities.

This all changed in 1837, with the invention of the [__telegraph__](gloss:telegraph). Using electric
cables spanned across the country, it was possible to send messages almost instantly.

::: figure

    // https://commons.wikimedia.org/wiki/File:The_Overland_Pony_Express.jpg
    img(src="images/pony-express.jpg" width=525 height=260)

{.caption} The pony express next to a telegraph line under construction – a painting by _George
Ottinger_

:::

The first commercial telegraph was developed by William Forthergill Cooke and Charles Wheatstone,
and used compass needles to point at different letters on a display.

::: column.grow

One year later, the inventor [Samuel Morse](bio:morse), together with his assistant Alfred Vail,
developed an even better version of the telegraph.

Pressing a button at one end of the telegraph line closes an electronic circuit. This means that
current is flowing, which triggers a buzzing sound at the other end of the telegraph line.

::: column(width=320)

    .telegraph
      img(src="images/telegraph-bg.jpg" width=320 height=210)
      img.handle(src="images/telegraph-handle.png" width=320 height=210)
      img.fg(src="images/telegraph-fg.png" width=320 height=210)
      svg(width=320 height=210): path(d="M-3.2,112.8c5.7-2.3,43.1-13.4,47.1-16.9l9.8-6.6c4.4-3.3,20.2-6.8,25.5-8.6,7.6-2,1.5-14.5,9.6-15,3.3.3,88.9,1.5,88.5,3a5.2,5.2,0,0,1,3.9,4.9V93.3a4.1,4.1,0,0,1-4,4.1l-92,.9a4.1,4.1,0,0,1-4.1-4c.1-3,.2-8.1-4.2-7.8l-24.2,1C40.1,89.4,30.2,106.2,22,114.6c-6.1,6.3-16.5,6.5-24.7,7.6")
    x-gesture(target=".telegraph" offset="108,-35")

:::

---
> id: morse

To send more complex messages, Morse represented every letter in the alphabet using a unique
sequence of short beeps (called dits or dots) and long beeps (called dahs or dashes):

    .alphabet
      for letter, index in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
         strong= letter
         x-morse(char=letter)

For example, to transmit the letter E, we just have to send one [[short beep|long beep]]. To send
the letter U, we have to send [[dot-dot-dash|dot-dash-dot|dash-dash-dot]]. Morse had invented a
new “language”, which we now call the [Morse code](gloss:morse-code).

---
> id: morse-1

::: column(width=280)

    // https://depositphotos.com/59221337/stock-photo-vintage-morse-telegraph-machine.html
    // alternative: https://americanhistory.si.edu/collections/search/object/nmah_1096762
    x-img(src="images/morse.jpg" width=280 height=300)

{.caption} This telegraph machine also records messages on a long strip of paper.

::: column.grow

Now we can send any message by first converting its letters into Morse code, and then tapping out
the corresponding dots and dashes on the telegraph.

One of Morse’s goals was to keep the messages as short as possible. This is why common letters
like E and T have a very short code, while uncommon letters like J or Q have much longer codes.

{.r} Morse code quickly became popular all around the world. Trained operators can send around 25
words per minute, which corresponds to six dots or dashes _every second_!
[Continue](btn:next)

:::

---
> id: morse-encoding
> goals: type

The most famous Morse code signal is “SOS”, which indicates that you have an emergency and need
help. It consists of three dots, followed by three dashes, followed by three more dots. Try
writing other words or sentences in this box, and watch how they are encoded as Morse code:

    x-code-box
      .input(contenteditable="true" spellcheck="false") SOS
      .output.morse

---
> id: radio
> goals: play

Morse code was also what the Colombian army used to send a message to the hostages. Translated from
Spanish, the message was _19 PEOPLE RESCUED. YOU’RE NEXT. DON’T GIVE UP._ Listen to the song once
more, and see if you can hear the dots and dashes in the background:

    figure: x-img(src="images/radio.png" width=225 height=220 style="margin-top: -24px")
      button.radio-play
    x-gesture(target=".radio-play")
    // TODO Show actual morse code while playing

---
> id: morse-applications
> goals: play

If you don’t know Morse code, this may just sound like part of the music – but the hostages were
soldiers who had been trained in Morse code, and recognized it in the song when they heard it on the
radio. A few days later, they were rescued and safely returned home.

It turns out that there were many other examples throughout history, where Morse code has been used
to communicate secret (or not so secret) messages:

::: column(width=220 parent="padded-thin")

    // https://depositphotos.com/310187600/stock-photo-capital-records-building.html
    x-img(src="images/capitol-records.jpg" width=220 height=280)
      .capitol-light

{.caption} The red warning light at the top of the _Capitol Records_ building in Los Angeles blinks
out the word _HOLLYWOOD_ in Morse code.

::: column(width=220)

    x-video(src="images/denton.mp4" poster="images/denton.jpg" width=220 height=280 audio)

{.caption} When captured during the Vietnam war, Navy pilot Jeremiah Denton blinks the word
_TORTURE_ in Morse, while being forced to record a propaganda video.

::: column(width=220)

    // https://www.wired.com/2012/01/british-pow-uses-morse-code-to-stitch-hidden-message-during-wwii/
    x-img(src="images/stitching.jpg" width=220 height=280 lightbox credit="David Fearn / newsteam")

{.caption} During World War II, a British prisoner was forced to create decorative stitchings like
this one. Can you find (and decipher) the hidden Morse code messages?

:::

---
> id: information

### Codes and Information

Wherever we look, we are surrounded by [__information__](gloss:information), like books and
newspapers, numbers and charts, photos, images, music, or movie clips.

A [__code__](gloss:code) is a rule or algorithm that can be used to express information in a certain
format. One example is our _alphabet_, which can be used to express language as a series of written
symbols (called _letters_). Another example we saw before is the [Morse code](gloss:morse-code),
which expresses words as sequences of [[dots and dashes|letters and spaces|radio music]].

---
> id: smoke-signals

But this is only the beginning, and there is a huge variety of codes that can be used for different
purposes, or to encode different kinds of information. In this course, we will explore some of the
most important and most interesting ones.

::: column.grow

Codes are not a recent invention – they were used by ancient cultures, many thousands of years ago.

For example, guards along the Great Wall of China used smoke to warn each other about potential
attacks. Different tribes of indigenous peoples in North American each had their own signalling
systems: they created columns of smoke by burning damp grass, which allowed them to communicate
over long distances.

{.r} Smoke signals are even used today, for example as a distress signal at sea. And when a new Pope
is elected by the College of Cardinals, the outcome of each vote is indicated by black or white
smoke. [Continue](btn:next)

::: column(width=280)

    x-img(src="images/smoke-signals.jpg" width=280 height=350 lightbox)
    // https://commons.wikimedia.org/wiki/File:John_Mix_Stanley_-_Indian_Telegraph.jpg

{.caption} Native American Smoke Signals – a painting by _John Mix Stanley_

:::

---
> id: flags

There are many other examples where words or letters are not the best way to express information.
Here are some other codes you might have heard of:

::: tab(parent="sticky")

#### Phonetic Alphabet _{span.check(when="blank-0")}_

Many letters sound very similar – especially when spoken over the phone or radio, with loud
background noise. That’s why the military, police, pilots, and many others use the __NATO Phonetic
Alphabet__ when they have to spell names. Here, every individual letter is replaced with a unique
word:

    - nato = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu']
    .alphabet
      for letter in nato
        div
         strong= letter[0]
         span= letter

For example, saying “Mike–Alpha–Tango–Hotel–Sierra” would spell the word [[Maths]].

::: tab

#### Maritime Flags _{span.check(when="blank-1")}_

Ships can use __Maritime Signal Flags__, which are hung from their masts, to communicate with other
ships within sight range.

::: column(width=320)

    x-img(src="images/maritime-flags-1.jpg" width=320 height=220 lightbox)
    // https://commons.wikimedia.org/wiki/File:Nautical_signal_flags_-_USS_Bonhomme_Richard_(LHD_6).jpg

{.caption} Storage for signal flags onboard a US Navy ship

::: column(width=320 parent="padded-thin")

    x-img(src="images/maritime-flags-2.jpg" width=320 height=220 lightbox)
    // https://depositphotos.com/39723603/stock-photo-colourful-signal-flags-on-a.html

{.caption} Decorative flags on a sailing boat

:::

All flags have different colours or patterns, and represent a different letter:

    .flags
      for l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
          img(src=`images/maritime/${l.toLowerCase()}.svg` alt=l width=50 height=50)
          strong= l

For example, if you see the flags _{img(src="images/maritime/i.svg" width=20 height=20)}_
_{img(src="images/maritime/c.svg" width=20 height=20)}_
_{img(src="images/maritime/e.svg" width=20 height=20)}_ on a passing ship, you should
[[watch out for icebergs|give them assistance|reduce speed]].

::: tab

#### Flag Semaphore _{span.check(when="blank-2")}_

__Flag Semaphore__ is another way to communicate using flags, which was used long before the
invention of the telegraph. In this case, all flags are the same, but holding them in different
positions indicates different letters:

    // https://depositphotos.com/77499298/stock-illustration-semaphore-alphabet-flags-on-a.html
    .flags
      for l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
          img(src=`images/semaphore/${l.toLowerCase()}.svg` alt=l width=90 height=80)
          strong= l

::: column.grow

The Beatles wanted to use Semaphore to spell the word “HELP” on the cover of their album with the
same name.

However, they didn’t like the way these specific letters looked – so they just chose four random
letters instead! As you can see, they ended up spelling the word [[rujv]]!

::: column(width=200)

    // https://en.wikipedia.org/wiki/File:Help!_(The_Beatles_album_-_cover_art).jpg - FAIR USE
    x-img.beatles(src="images/help-album.jpg" width=200 height=200 credit="© Parlophone")

:::
:::

---
> id: genetic

### The Genetic Code

Codes even appear inside our own body! The [DNA](gloss:dna) is a long [molecule](gloss:molecule)
that appears in every cell of your body, and contains the genetic instructions for how all living
organisms work. It consists of four different components, called _nucleotides_:

    .row.padded-thin
      for a in ['Adenine', 'Thymine', 'Cytosine', 'Guanine']
        div(style="width: 150px")
          img(src=`images/dna/${a.toLowerCase()}.svg` width=150 height=120)
          p.caption= a

::: column(width=260)

    // https://depositphotos.com/220660220/stock-photo-dna-spiral-molecule-high-detailed.html
    x-img(src="images/dna.jpg" width=260 height=380)

::: column.grow

A strand of DNA consists of billions of these _nucleotides_, which contain the instructions for
the development and functioning of our body. We can represent them using sequences of the letters
__{.m-red} A__, __{.m-blue} T__, __{.m-green} C__ and __{.m-yellow} G__.

Similar to Morse code, every three consecutive nucleotides correspond to a specific [_amino
acid_](gloss:amino-acid), a small component used by the cells in our body. For example,
__{.m-red}AA__**{.m-yellow}G** represents _Lysine_, an amino acid we consume by eating food like
eggs, meat or soybeans.

The genetic code has space for `4^3 = 64` amino acids (four options for each of the three
nucleotides in a triple), but only 20 are actually needed in our body.

:::

---
> id: intro-end

Finally, remember that the same symbol can mean completely different things within different codes.
For example, the letter _C_ can be represented by “Charlie” in the NATO Phonetic Alphabet, it could
be the maritime flag _{img(src="images/maritime/c.svg" width=20 height=20)}_, or it can represent
_Cytosine_ if placed within a strand of DNA letters.


----------------------------------------------------------------------------------------------------


## Binary Numbers

> section: binary
> id: transistor
> goals: switch
> sectionStatus: dev

Computers are all around us. You’re reading this on a computer right now! But how many people actually know how computers work? How many of us, as we scroll through our social media feeds, or search for a recipe, or watch a movie from our favorite streaming service know how what's happening actually works?

There are many many complex layers and processes that operate together to get information from all over the world and display it on your screen. But at the lowest level of every computer are [transistors](gloss:transistor). Transistors are the building blocks of how computers store and manipulate information.

::: column(width=320)

    .transist
      figure: include svg/transistor.svg

::: column.grow

Transistors are like tiny microscopic electrical switches that transmit electrons. Turn on a transistor and the electrons flow. Turn it off and the electrons stop (Perhaps this sounds familiar to the telegraph).

But how can a simple on/off switch store information as complex as sound, images, and videos? We learned in the last chapter about Morse Code, which is used to communicate letters via sound or light. But transistors store data that is interpreted by a computer through very different means.

:::

---
> id: finger5
> sectionStatus: dev

To understand how all sorts of different codes can be stored in the transistors of a computer, let’s try a thought exercise. We've just looked at how a transistor can be turned on or off, now let's look at how we can count on our fingers by putting them up or down.


### Playing with Digits

How high can you count using only one hand, without skipping any numbers? When we count with our hands, we traditionally use how many fingers are up to represent the number. We have five fingers, so that means the highest we can count with one hand is [[five|four|ten]].

    table.finger-grid
      tr
        for x in [1, 2, 3, 4, 5]
          td: div.bin-finger(padding="1px")
            x-img(src="images/fingers/decimal_"+x+".jpg" width=100 height=100)
            .caption= x

---

::: column.grow
A drawback of this strategy is that there are many unused finger combinations. For example, this finger combination to the right would represent [[2]]. With our traditional model there are two fingers up, so it means two. But we already have a configuration for two! We're wasting valuable space.

::: column(width=320)
    x-img(src="images/fingers/binary_17.jpg" width=320 height=320)
:::

---

There is a way that we can count much higher while still using only one hand, and this counting method will also help us understand how transistors store information. The secret lies in something called [binary numbers](gloss:binary-numbers). Instead of using the number of fingers up as our count, we have to do something a bit more complicated.

::: column.grow
We can treat each of our fingers as a __digit__ with one of two possible values: down or up. Down can represent the number __0__ and up can represent the number __1__.

::: column(width=200)

    table.finger-highlights
      tr
        td
          x-img(src="images/fingers/finger_0_highlight.png" width=100)
          .caption= 0
        td
          x-img(src="images/fingers/finger_1_highlight.png" width=100)
          .caption= 1
:::

If we want to use each combination of ups and downs to represent a different number, then how many combinations can we represent? (Link back to combinatorics).

---

{.todo PHILIPP please help! How to style a table, while also accepting inputs?}



    table.finger-combos
      tr
        td
          .head Number of fingers
        td
          .head Possible combinations
      - var i = 1
      while i <= 5
        tr
          td
            div= i
          td
            div.md [[#{2**i}]]
        - i+=1


| .head Number of fingers | .head Possible combinations. |
| 1 | [[2]] |
| 2 | [[4]] |
| 3 | [[8]] |
| 4 | [[16]] |
| 5 | [[32]] |

More generally, with __n__ fingers we can represent _{x-equation.small(solution="2^n" keys="n sup" numeric)}_. possible combinations. Remember that our fingers are merely serving as a metaphor for binary numbers. This means that __any n-digit number can represent up to 2^n different values__.



---

### 1s and 0s
> id: bracket

Recalling our lesson on [probability trees](link/to/course), with each finger that we add our number of options multiplies by two.

    svg.bracket(width=600 height=320)
      - var textb = 4
      g#b1
        - var i = 0
        - xMin = 0
        - xMax = 100
        while i < 1
          - yHorizontal = 165+i*320
          line(x1=xMin y1=yHorizontal x2=xMax y2=yHorizontal target="yes")
          -i += 1
      g#b2
        - var i = 0
        - xMin = 100
        - xMax = 200
        while i < 2
          - yHorizontal = 85+i*160
          - yToMid = i%2 == 0 ? 80 : -80
          - cl = i==1 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax   y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin   y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=40 target=cl)= i%2
          -i += 1
      g#b4
        - var i = 0
        - xMin = 200
        - xMax = 300
        while i < 4
          - yHorizontal = 45+i*80
          - yToMid = i%2 == 0 ? 40 : -40
          - cl = i==2 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=30 target=cl)= i%2
          -i += 1
      g#b8
        - var i = 0
        - xMin = 300
        - xMax = 400
        while i < 8
          - yHorizontal = 25+i*40
          - yToMid = i%2 == 0 ? 20 : -20
          - cl = i==5 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=20 target=cl)= i%2
          -i += 1
      g#b16
        - var i = 0
        - xMin = 400
        - xMax = 500
        while i < 16
          - yHorizontal = 15+i*20
          - yToMid = i%2 == 0 ? 10 : -10
          - cl = i==11 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-textb font-size=16 target=cl)= i%2
          - i += 1
      g#b32
        - var i = 0
        - xMin = 500
        - xMax = 600
        while i < 32
          - yHorizontal = 10+i*10
          - yToMid = i%2 == 0 ? 5 : -5
          - cl = i==22 ? "yes" : "no"
          line(x1=xMin  y1=yHorizontal         x2=xMax  y2=yHorizontal target=cl)
          line(x1=xMin  y1=yHorizontal+yToMid  x2=xMin  y2=yHorizontal target=cl)
          text(x=(xMin+xMax)/2 y=yHorizontal-1 font-size=12 target=cl)= i%2
          - i += 1


    x-slider.bracket(steps=6 speed=0.5)

We can represent any five-digit binary number by following any path from beginning to end. For example, this is the binary sequence for [10110](target:yes).

{.todo // PHILIPP help make this pointer look good}

---

> id: finger32

Yes, there are [[32]] different combinations we can make with five fingers.

    x-select.segmented
      div Decimal
      div Binary
    table.finger-grid
      for b0 in [0, 1]
        for b1 in [0, 1]
          tr
            for b2 in [0, 1]
              for b3 in [0, 1]
                for b4 in [0, 1]
                  - var n = b0*16 + b1*8 + b2*4 + b3*2 + b4*1
                  // FINGERFADE: make this binary
                  td: div.bin-finger(padding="1px")
                    x-img(src="images/fingers/binary_" + (n < 10 ? "0"+n : n) + ".jpg" width=64 height=64)
                    .caption.dec= n
                    .caption.bin= ""+b0+b1+b2+b3+b4


{.TODO PHILIPP how to make them appear after entering value into blank?}

(we'll find out soon why we started with zero).
Change the [tabs](->.segmented) to toggle between the binary values and their decimal counterparts.

---

{.todo} Transistors


Now that we have learned a bit about how we can represent different values by strings of 0s and 1s, let's tie this back to transistors. Recall how in our morse code/flashlight examples we were constrained by our medium’s ability to be on or off. Computers store data in transistors, so they store data as a collection of ons and offs, or 1s and 0s. Just like we just did with our fingers (by putting them up or down). If a computer had fingers, they would probably count to 31 on one hand. Everything that’s stored on a computer, from text and images to video and sound is stored in transistors as sequences of 1s and 0s, or binary code.

Another way we can imagine these transistors is with a series of lights.

    table.led-binary
      tr
        for x in [1, 0, 0, 1, 1, 0, 1, 1]
          - var on = x===1 ? 'on' : 'off'
          td: div.led(padding="1px")
            x-img(src="images/light_"+on+".png")


This is how the sequence _{.ns.g}10011011_ would be stored.


---

### Binary to Base-Ten

Before we can understand how computers use binary code to store complex things like sound and video, we must first understand the basics, like how a base-ten number is stored.

Our number system operates as a [base ten](gloss:base-10) number system. Base ten numbers have ten possible values for each digit. 0 1 2 3 4 5 6 7 8 and 9. In a base-ten number, each digit is worth ten times as much as the previous smaller digit. The first right-most digit represents how many [[ones|tens|twos]] there are, the second right-most digit represents how many [[tens|hundreds|fives]] there are, and so on.

The value represented by each digit is the digit number times the value of the digit. So A four in the hundreds place represents the value [[400]].

| __number__ | __hundreds value__ | __tens value__ | __ones value__ |
| 432 | [[400]] | [[30]] | [[2]] |
| 907 | [[900]] | [[0]] | [[7]] |
{.table-small.grid}

To find the value of a base ten number, we add up the values of each digit!

---

Binary numbers work very similarly except they use a base-two number system. So instead of ten possible digit values, they only have 2. Each consective digit is worth [[twice|three times|ten times]] as much as the previous digit. And because in a binary number each digit can either be __1__ or __0__, each digit value can be either __on__ or __off__.

Let's examine the binary number _{.ns.g}11111_ (5 consecutive 1s). How much is each digit worth?

| __{.m-red}digit__ | 1 | 1 | 1 | 1 | 1 |
| __{.m-green}digit value__   | {.s-green}_{.hex}[[16]]_ | {.s-green}_{.hex}[[8]]_ | {.s-green}_{.hex}[[4]]_ | {.s-green}_{.hex}[[2]]_ | {.s-green}_{.hex}[[1]]_ |
{.table-small.grid}

---

We can find the decimal value of this binary number _{.ns.g}11111_ by adding up the digit values. So its value is _not_ eleven thousand, one-hundred and eleven, but is

{.text-center.s-red} _{.hex}16_ + _{.hex}8_ + _{.hex}4_ + _{.hex}2_ + _{.hex}1_ = _{.hex}[[31]]_

---

Here are some 6-digit binary numbers. Let's convert them to decimal by first writing the values of each digit, and then adding the digits together.

{.text-center.s-purple} _{.ns}100110_ = _{.hex}[[32]]_ + _{.hex.z}0_ + _{.hex.z}0_ + _{.hex}[[4]]_ + _{.hex}[[2]]_ + _{.hex.z}0_ = _{.hex}[[38]]_

{.text-center.s-yellow} _{.ns.y}111000_ = _{.hex}[[32]]_ + _{.hex}[[16]]_ + _{.hex}[[8]]_ + _{.hex.z}0_ + _{.hex.z}0_ + _{.hex.z}0_ = _{.hex}[[56]]_

{.text-center.s-teal} _{.ns.g}101011_ = _{.hex}[[32]]_ + _{.hex.z}0_ + _{.hex}[[8]]_ + _{.hex.z}0_ + _{.hex}[[2]]_ + _{.hex}[[1]]_ = _{.hex}[[43]]_


When computers (including digital calculators) add and subtract numbers, this is how the numbers are represented at the level of the transistor!

---

### Converting Base-Ten to Binary
> id: dec2bin

Now that we know how to convert a binary to decimal, how can we convert a decimal to a binary number? This solution is not as obvious. Follow the animation below to visualize how to break a decimal number into binary digits.

Imagine a conveyor belt that slides a large block of a gelatin-like material. This block has a length of a discrete integer. Along the conveyor belts are claws that can only fit the size of 2^N multiples. The claw will ONLY pick up a slice of its exact size, and will subtract it from the block. The block slides along until it has gone under each and every one of the claws (digits).

{.fixme} make this design more consistent with the rest of Mathigon.
{.fixme} there is potential to make the text in the slide legends point to the diagram (see third slide)

    x-slideshow
      .stage.cheesecake(slot="stage")
        figure: include svg/ch.svg
      .legend(slot="legend") We have a full block of length #[strong 25].
      .legend(slot="legend") We always start with the leftmost digit. In this case, 16 is the largest power of 2 that can fit into 25. So first we test the #[strong 16s] place.
      .legend(slot="legend") We can subtract 16, so we write a [1 in the 16s place](->.#digit16). We're left with #[strong 9].
      .legend(slot="legend") Next we test the #[strong 8s] place.
      .legend(slot="legend") We can subtract 8, so we write a #[strong 1] in the 8s place. We're left with #[strong 1].
      .legend(slot="legend") Next we test the #[strong 4s] place.
      .legend(slot="legend") We cannot subtract 4, so we write a #[strong 0] in the 4s place.
      .legend(slot="legend") Next we test the #[strong 2s] place.
      .legend(slot="legend") We cannot subtract 2, so we write a #[strong 0] in the 2s place.
      .legend(slot="legend") Next we test the #[strong 1s] place.
      .legend(slot="legend") We can subtract 1, so we write a #[strong 1] in the 1s place. We're left with 0, and we are finished.


{.fixme} I'm not sure exactly how to format this, Could just leave as is, or could do as a proof (see below).

Here is that simple method put into steps.
When converting decimal number N into binary:
1. Start with the highest power of 2^n, d, that you can subtract from N.
2. If you can subtract d from N, then write a 1 in that place and continue with N = N - d.
3. If you cannot subtract d from N, then write a 0 in that place and continue with N = N.
4. Divide d by 2 to get the next digits place.
5. Repeat steps 2 through 4 until you have written the 1s place.

{.fixme} I don't think "proof" is the right format, but it should look something like this.
Here are the steps generalized:

    ol.proof
      li Find the highest power of 2 that you can subtract from #[em N], let's call it #[em d]
      li Subtract #[em d] from #[em N] to get how much you have left. Write a 1 in the first digit. Let's call this value #[em N']
      li Divide #[em d] by 2 to get the next digits place. This will always be the next highetst power of 2.
      li If you can subtract #[em d] from #[em N'] (if N' > d), then do so and go back to Step 2. Otherwise, do not subtract and write a 0.
      li Repeat steps #[span.proof-step 3] and #[span.proof-step 4] until you've done all digits.

---

### Other places you might find binary patterns.

If you look around, you can find patterns related to binary numbers in computers, and in some other unexpected places!


::: column(width=160 parent="padded-thin")

    x-img(src="images/smartphone.png" width=160 height=160 alt="Color Hex Codes")

::: column(width=400)

When you’re looking to buy any digital device with memory like a Smartphone, Tablet, Computer, or SD Card the options often come with __Memory__ options that are a power of 2, like 16GB, 32GB, or 64GB.


::: column(width=160 parent="padded-thin")

    x-img(src="images/colors_mathigon.png" width=160 height=160 alt="Color Hex Codes")

::: column(width=400)

 __Colors__ on computers are stored using a combination of letters and numbers. This is another base system called __hexadecimal__, which is a base-16 system. Each color has a Red, a Green, and a Blue value, each of which is a number between 0 and 255.


::: column(width=160 parent="padded-thin")

    x-img(src="images/whatsapp.png" width=160 height=160 alt="Color Hex Codes")

::: column(width=400)

In 2016, the messaging app __WhatsApp__ increased the maximum number of possible users in a single group to 256 (2^8).


::: column(width=160)

    x-img(src="images/ncaa_tourney.png" width=160 height=160 alt="Bracket")

::: column(width=400)

 Many sports tournaments start with a number of teams that is a power of two. The __NCAA Basketball Tournament__ begins with 64 (2^6) teams and has rounds called “The Sweet Sixteen”, “The Elite Eight”, and “The Final Four” (each of which is a power of two!).

::: column(width=160)

    x-img(src="images/i-ching.png" width=160 height=160 alt="I-ching")

::: column(width=400)

The __I-Ching__ is an ancient Chinese divination text. It contains 64 different "Hexagrams", each of which is made up of six horizontal lines which can be either solid (Yang) or divided (Yin).

:::


### Conclusion
{.todo} Conclusion


Now that you've learned about binary numbers, you can make this joke to your friends:

{.fixme} Make this bigger and centered.

__There are only 10 types of people in the world:__
__those who understand binary,__
__and those who don't.__


----------------------------------------------------------------------------------------------------

    // EDC photo resources
    // https://commons.wikimedia.org/wiki/File:Barcodedmail.JPG
    // Satellite
    // https://commons.wikimedia.org/wiki/File:Erdfunkstelle_Raisting_2.jpg
    // https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Night_Sky.png/1024px-Night_Sky.png
    // https://upload.wikimedia.org/wikipedia/commons/6/61/Satellite_Cylinder_%28PSF%29.png

## Error Detection

> section: error-detection
> sectionStatus: dev
> id: satellite
> goals: transmit

### Introduction

Scientists and engineers have worked very hard to make satellites that travel very far from Earth. Voyager 1 is now _13 billion miles_ away from Earth.  When a satellite captures information about space, it must then transmit this data back to a satellite dish back on Earth. Perhaps this data is a photo of Jupiter's great red spot? Or perhaps it's data about the temperature on Neptune? Or movement data of asteroids? Regardless of what the message is we received, how do we know that the data we've received is accurate?

Unforuntately, our atmosphere gets in the way of our messages. Just like looking through a glass of water distorts the image of what's behind it, the charged particles in our atmosphere might distort some of the signals coming from the satellite.

    .satellites
      img(src="images/satellite/nightsky.png" width=640 height=420)
      img.sat(src="images/satellite/satellites.png" width=640 height=420)
      img.atm(src="images/satellite/atmosphere.png" width=640 height=420)
      svg(width=640 height=420): line(class="bitstream" x1=525 y1=95 x2=145 y2=265)
    .caption Hold down to transmit bits back to Earth.

---

When we receive a message, transmitted as many packets of binary numbers, there is a chance that some of the bits may be incorrect. We need a way to figure out (a) if any bits are incorrect and (b) which ones. Just like if you write a letter to someone and send it in the mail. If some of the words are blurred, you might be able to infer the original message from context -- but with 0s and 1s, we don't have any way to understand the context.

---
> id: messages

Let's think about some ways we could possibly make sure that we know the correct message.

::: column.grow

    x-img(src="images/envelopes-2.png" width=100 height=200)

::: column(width=330)

Perhaps the simplest way to do it would be to send multiple copies of the same message. If we send two copies, then we know that there's an error, but we won't know what the error is because [[we don't know which message is correct|something else]]. This would be an [Error Detecting Code](gloss:error-detecting-code).

:::

---

::: column.grow

If we send three copies, then we will know that there's an error, *and* be able to see which message is correct. This would be an [Error Correcting Code](gloss:error-correcting-code). In this example to the left, we know that the [[blue|green]] envelope will be the correct message.

::: column(width=300)

    x-img(src="images/envelopes-3.png" width=100 height=300)

:::

---

This message-encoding scheme would consume a lot of space! Imagine if you bought a state-of-the-art smartphone with 96 GB of memory which used this type of error correction. [[Two thirds|One third|One half]] of the space would be redundant data. The phone would only be able to hold less than [[32]] GB of memory!

There must be a better way.

---

> id: parity-bit

#### Parity Bit
One very simple and cost-effective way to detect an error in a sequences of numbers is with a __parity bit__.
The parity bit is added to the end of the message to tell us something about the rest of the message.

For example we can add one more bit to the end of a sequence of binary numbers depending on the sum of the first bits.

{.text-center} If the sum is even, the parity bit is __0__.

{.text-center} If the sum is odd, the parity bit is __1__.

With this scheme, after the parity bit has been appended, the sum of the entire encoded number will be [[even|odd]].

---

Adding one parity bit will not always allow the receiver to detect an error. If an [[even|odd|prime]] number of bits have flipped, the parity will still be even, and no error will be detected.

---

This simple method of adding a parity bit gives us a hint into how we can build more complex error detection and correction schemes. Before we do that, let's look at an example that we experience quite often.

---

> section: error-detection
> sectionStatus: dev
> id: barcode-intro

### Bar Codes

We encounter error-detecting codes every time we go to the supermarket, in the form of bar codes. Bar codes are also used for identifying all sorts of things like driver's licenses or babies in hospitals. And in the last decade, 2-dimensional barcodes (QR codes) have been adapted for ticketing at events like concerts or airplane flights.

    // https://previews.agefotostock.com/previewimage/medibigoff/2d9a55ab36e1de8cce7899216a9f4c09/fot-1046044.jpg
    x-img(src="images/baby-wristband.jpg" width=200 height=300)

{.caption} Barcodes are used for many things!

Bar codes were invented as a way to make it easier for stores to track which items a customer is buying. Numbers are easy for us humans to read, but it's much harder for computers. For example, 1 and 7 or 6 and 8 might look almost the same to a low-resolution camera. A new system was needed, so that cashiers or nurses didn't have to manually type all these numbers into a computer.

{.fixme} Transition: similar to morse code.
Joe Woodland, one of the inventors of Bar Code was sitting on the beach, trying to think of a way to encode information for a light scanner to understand.

    div
      .quote I remember I was thinking about dots and dashes when I poked my four fingers into the sand and, for whatever reason--I didn't know--I pulled my hand toward me and I had four lines. I said 'Golly! Now I have four lines and they could be wide lines and narrow lines, instead of dots and dashes.'
      .author Joe Woodland, inventor of the Bar Code

Woodland used his knowledge of Morse Code as a foundation to invent a new type of code. By learning about different types of codes, we can build our own knowledge foundation and perhaps invent our own codes!

    // https://www.smithsonianmag.com/innovation/history-bar-code-180956704/
    // https://thumbs-prod.si-cdn.com/auNtLAvrz9_5FxqGlbnQjAzcKiQ=/fit-in/1072x0/https://public-media.si-cdn.com/filer/cc/08/cc08d39a-0576-4794-a264-0eaf3a6923bb/barcode-patent.jpg
    x-img(src="images/barcode-patent.jpg" width=500 height=400)

{.caption} The original barcode was invented as a circle, but in the 1970s an IBM engineer figured out that a rectangle would be more compact than a bulls-eye.


    // https://www.vice.com/en/article/qv38wp/how-the-railroad-industry-invented-then-immediately-discarded-the-barcode
    // https://video-images.vice.com/articles/59ef239aa525153b1140ebc5/lede/1508845007190-image2.jpeg
    x-img(src="images/train-barcode.jpeg" width=300 height=200)

    // https://www.youtube.com/watch?v=trtuf_iX1lM&t=4m32s
    x-img(src="images/barcode-scanner-train.png" width=300 height=200)

{.caption} An early use of barcodes was for tracking train cars.

#### So how does it work?

{.fixme} Each bar code is a 12-digit number. See here that we can read the numbers written on the bottom. But how does a computer read it?

{.fixme} There are 95 columns, each of which can be black or white. The computer uses a laser to identify each stripe's color, based on how much light is reflected. These 95 columns are grouped into 15 groups of columns. (continue below)

---

#### Bar code values

> id: barcode-drawing

::: column.grow

    // only takes 11 values (last digit is error digit)
    x-barcode(value="05100001251")
    button.generate NEW BARCODE

::: column(width=250)

The guards are on the [{.step-target.pill.b.red}outside](target:outside) and in the
[{.step-target.pill.b.red}center](target:middle).
The first six digits are on the [{.step-target.pill.b.blue}left](target:left).
The last six digits are on the [{.step-target.pill.b.green}right](target:right).

__The Guards__

| LEFT | CENTER | RIGHT |
| --- | --- | --- |
| [{.step-target.pill.b.red}101](target:outside) | [{.step-target.pill.b.red}01010](target:middle) | [{.step-target.pill.b.red}101](target:outside) |

__The Digits__

{.fixme} why is left and right different?

| DIGIT | LEFT SIDE | RIGHT SIDE |
|---|---|---|
| 0 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WWWBBWB.svg" width=80)}_](target:l0) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BBBWWBW.svg" width=80)}_](target:r0) |
| 1 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WWBBWWB.svg" width=100)}_](target:l1) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BBWWBBW.svg" width=100)}_](target:r1) |
| 2 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WWBWWBB.svg" width=100)}_](target:l2) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BBWBBWW.svg" width=100)}_](target:r2) |
| 3 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WBBBBWB.svg" width=100)}_](target:l3) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BWWWWBW.svg" width=100)}_](target:r3) |
| 4 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WBWWWBB.svg" width=100)}_](target:l4) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BWBBBWW.svg" width=100)}_](target:r4) |
| 5 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WBBWWWB.svg" width=100)}_](target:l5) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BWWBBBW.svg" width=100)}_](target:r5) |
| 6 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WBWBBBB.svg" width=100)}_](target:l6) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BWBWWWW.svg" width=100)}_](target:r6) |
| 7 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WBBBWBB.svg" width=100)}_](target:l7) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BWWWBWW.svg" width=100)}_](target:r7) |
| 8 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WBBWBBB.svg" width=100)}_](target:l8) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BWWBWWW.svg" width=100)}_](target:r8) |
| 9 | [{.pill.b.yellow}_{img(src="images/barcode/bar-WWWBWBB.svg" width=100)}_](target:l9) | [{.pill.b.yellow}_{img(src="images/barcode/bar-BBBWBWW.svg" width=100)}_](target:r9) |

:::

{.fixme} There are a few interesting patterns we can recognize here. First, notice that the codes on the left side are different from the codes on the right side. This allows the bar code to be read upside down or backwards.

##### Barcodes in different countries
These barcodes with 12 digits are how they work in the US. In Europe, there are 13 digits. And other countries have different protocols for how barcodes. work.

##### Digit Value

- The first digit represents what type of object it is (0 - Standard; 2 - Weighted item like fruit; 3 - Pharmacy; 5 - Coupon)
- Digits 2-6 (highlight) represent the *Manufacturer's Code*
- The 7-11 (highlight) represent the *Product Code*
- The final, 12th digit (highlight) is the __Error-Detection digit__, also called the __Modulo Check Character__

##### Different between Left and Right
Every binary representation of digits on the left begins with a 0 and ends with a 1, and every digit on the right begins with a 1 and ends with a 0. This results in a pattern: there will always be a 10 (on the left side) or a 01 (on the right side) on the edge between digits.


#### Error Checking.
Just like our case with the satellite signals, there is a chance that the laser reading the barcode can make a mistake. Perhaps there is some dirt, or a scratch, or the laser reads it incorrectly. For that reason, barcodes have a special way of determining whether there's been a mistake.

The 12th digit is dependent on the first 11 digits, so that if any of the digits is wrong, we will know (most of the time). Can you guess how the 12th digit can indicate information about the first 11?

{.fixme} The odd digit places are summed and multiplied by three. Then we calculate the sum of the even places, and sum these two values together. The __Modulo Check Character__ is 10 minus the ones digit of this number.

---

> id: barcode-error

{.text-center} **Calculating the Error-Check Digit**

::: column.grow

    x-barcode(value="05100001251")

::: column(width=330)

{.text-center} X = 3 * (∑ [oddDigits](target:odds)) + ∑ [evenDigits](target:evens)

{.text-center} `N = 10 - ones(X)`

{.text-center} **Example**

{.text-center} X = 3 * (0 + 1 + 0 + 0 + [[2]] + [[1]]) + (5 + 0 + 0 + [[1]] + [[5]])

{.text-center.reveal(when="blank-0 blank-1 blank-2 blank-3")} X = 3 * ([[4]]) + ([[11]])

{.text-center.reveal(when="blank-0 blank-1 blank-2 blank-3 blank-4 blank-5")} X = [[12]] + 11

{.text-center.reveal(when="blank-0 blank-1 blank-2 blank-3 blank-4 blank-5 blank-6")} X = [[23]]

{.text-center.reveal(when="blank-0 blank-1 blank-2 blank-3 blank-4 blank-5 blank-6 blank-7")} `N = 10 - ones(23)`

{.text-center.reveal(when="blank-0 blank-1 blank-2 blank-3 blank-4 blank-5 blank-6 blank-7")} N = 10 - [[3]]

{.text-center.reveal(when="blank-0 blank-1 blank-2 blank-3 blank-4 blank-5 blank-6 blank-7 blank-8")} N = [[7]]

:::

---

When the computer scans the digits of a barcode, it performs this calculation. If the modulo check doesn't match up, we immediately know that the barcode hasn't been read correctly. In a supermarket, the cash register won't beep, and you can try again -- or, as a last resort, enter the numbers manually.

---

> id: barcode-exercise

Pick the barcodes that have a valid error-check character.

    // TODO: make barcodes much bigger
    x-picker
      .item: x-barcode(value="22456923745" targets="off")
      .item(data-error="no-6"): x-barcode(value="270761927055" targets="off")
      .item(data-error="no-3"): x-barcode(value="647805889041" targets="off")
      .item: x-barcode(value="35802034085" targets="off")
      .item: x-barcode(value="35802034085" targets="off")
      .item: x-barcode(value="35802034085" targets="off")


{.todo} ACTIVITY: Look around you for something with a barcode (pretty much anything you can buy at a store). Hide the numbers with paper or tape, and try to decode the numbers. After you've written down your answer, see if you're correct! And then you can try the error detection formula and confirm that it is correct. (PHOTOS also)

#### Barcode Conclusion
{.fixme} These are only the UPC bar codes. There are many other types of bar codes listed here: http://www.makebarcode.com/specs/barcodechart.html

---

### Hamming Codes
> id: hamming

Let's go back to our original problem of how we might detect errors in a message received from a satellite. We don't know the message the satellite intended to send, and unlike with barcodes there is no way to find it, such as a cashier who can look at the number and type it into the computer.

A mathematician named [Richard Hamming](bio:hamming) encountered a very similar problem not with data from satellites, but with mechanical computers.

::: column.grow

Computers used to be programmed by creating holes in special [punch cards](gloss:punch-card), which were then fed into the computer. These were time-consuming to program, and the calculations could take hours or even days to complete. In 1947, Hamming wrote a program to perform a long and complex series of calculations while he went home over the weekend. When he returned, he discovered that an error had occurred somewhere early in the calculation and his entire result was useless. He felt a need to invent a way to correct when an error had happened.

::: column(width=280)

    x-img(src="images/punch-card.png" width=640 height=288 lightbox)
    // https://commons.wikimedia.org/wiki/File:Blue-punch-card-front-horiz.png

{.caption} A blue IBM punched card.

:::

{.quote}If the computer can tell when an error has occurred, surely there is a way of telling where the error is so that the computer can correct the error itself. - Richard Hamming

How can we detect and correct an error in a messaage that is just a sequence of binary numbers? A [Hamming Code](gloss:hamming-code) can be used to do just this. The solution involves inserting new bits into the message that will tell us information about the values of those original bits. If we know the location of where an error occurred, then we know the original value of that bit because [[binary digits can only have two values|we can just look at the number under the barcode]].


---
> id: hamming-encode

#### Encoding a Hamming Code

Click through the slides to see how to encode a string of bits using a Hamming Code.

    x-hamming(value="11001111" direction="encode")

::: x-slideshow

{div.inline(slot="legend")} Let's say we want to encode this string of 8 bits. We call these 8 bits the [{.pill.green}data bits](target:data).

{div.inline(slot="legend")} First we must shift the [{.pill.green}data bits](target:data) to the right to make room for the [{.pill.red}parity bits](target:parity). The parity bits will encode information about the data bits.

{div.inline(slot="legend")} The [{.pill.red}parity bits](target:parity) will go into any position that is a power of 2. Here we place parity bits at [{.pill.red}1](target:p1), [{.pill.red}2](target:p2), [{.pill.red}4](target:p4), and [{.pill.red}8](target:p8).

{div.inline(slot="legend")} We must figure out the values that go into the parity bits. We do this by dividing the sequence into one __parity group__ for each parity bit. We then assign the parity bit whatever value will make the parity of the group even.

{div.inline(slot="legend")} Let's start with the first parity group. Start at the parity bit in [{.pill.red}position 1](target:p1), then choose every other **1** bit.

{div.inline(slot="legend")} This group of bits has an [[${parity1right}|${parity1wrong}]] parity, so we give the parity bit value [[${pb1r}|${pb1w}]].

{div.inline(slot="legend")} Now do the next parity group. Start at the parity bit in [{.pill.red}position 2](target:p2), then choose every other **2** bits.

{div.inline(slot="legend")} This group of bits has an [[${parity2right}|${parity2wrong}]] parity, so we give the parity bit value [[${pb2r}|${pb2w}]].

{div.inline(slot="legend")} Now do the next parity group. Start at the parity bit in [{.pill.red}position 4](target:p4), then choose every other **4** bits.

{div.inline(slot="legend")} This group of bits has an [[${parity4right}|${parity4wrong}]] parity, so we give the parity bit value [[${pb4r}|${pb4w}]].

{div.inline(slot="legend")} Now let's do the last parity group. Start at the parity bit in [{.pill.red}position 8](target:p8), then choose every other **8** bits.

{div.inline(slot="legend")} This group of bits has an [[${parity8right}|${parity8wrong}]] parity, so we give the parity bit value [[${pb8r}|${pb8w}]].

{div.inline(slot="legend")} Here is our final encoded string of bits to send!

:::

---

Did you notice anything about how the bits for each parity group are selected? The answer has to do with the [[binary value|divisibility]] of each digit position.

---

Here is how to select the digits to include in a parity group.

    ol.proof
      li Convert the place numbers to binary.
      li Identify the parity groups. Each will be a power of 2.
      li For each parity group, select any digit whose binary place number has a **1** in that position.

[Continue](btn:next)

---

::: column.grow

| group | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |
| 2 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| 4 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| 8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |

::: column(width=300)

The 9th digit in the encoded bit sequence will be part of parity groups [[1 and 8|1, 2, and 4|1, 2, and 8]]

The 6th digit in the encoded bit sequence will be part of parity groups [[2 and 4|1 and 4|2 and 8]]

:::

{.fixme} Some table formatting would be nice.

---

> id: hamming-decode

#### Decoding a Hamming Code

Now that we have an encoded message, how can we extract the data from it? We must reverse the process.

::: column

__Encoding__
1. Make room for parity bits
2. Identify parity groups.
3. Define parity bits.

::: column

__Decoding__
1. Check parity bits.
2. Make corrections.
3. Remove parity bits.

:::

Click through the slides to see how to decode a string of bits using Hamming Codes.

    x-hamming(value="011100011110" direction="decode")

::: x-slideshow

{div.inline(slot="legend")} What if we receive this packet of information? Assume we know that is has been encoded using Hamming encoding. This means that each parity group should have an [[even|odd]] parity. As we check each group, we can mark which have an incorrect bit.

{div.inline(slot="legend")} First let's check parity group 1. The parity is [[odd|even]]. There is [[something|nothing]] wrong here!

{div.inline(slot="legend")} Now let's check parity group 2. The parity is [[even|odd]]. There is [[nothing|something]] wrong here!

{div.inline(slot="legend")} Now let's check parity group 4. The parity is [[odd|even]]. There is [[something|nothing]] wrong here!

{div.inline(slot="legend")} Now let's check parity group 8. The parity is [[even|odd]]. There is [[nothing|something]] wrong here!

{div.inline(slot="legend")} We identified there is something wrong in the [{.pill.red}1st](target:pg1) and [{.pill.red}4th](target:pg4) parity groups. We can add these values to determine that there is an error with bit [[5]]. We flip this bit to a [[1]].

{div.inline(slot="legend")} Now we can remove the parity bits to fully decode our message.


:::

---

This is not a perfect system. This type of code will not correctly detect an error when there are more than [[1]] errors.

---

### Other Error Detection and Correction

::: column(width=220 parent="padded-thin")

    x-img(src="images/credit-cards.jpg" width=200 height=200)
    // https://commons.wikimedia.org/wiki/File:Credit-cards.jpg
      .

{.caption} Credit cards use a checksum digit calculated with __Luhn's algorithm__ to check for errors.

::: column(width=220)

    x-img(src="images/compact-disc.jpg" width=200 height=200)
    // https://commons.wikimedia.org/wiki/File:Compact_disc_1.jpg

{.caption} CDs and DVDs use the __Reed-Solomon__ error-correcting code to allow playback even when the disc has scratches.

::: column(width=220)

    x-img(src="images/snapchat-qr.png" width=180 height=180)
    // https://support.snapchat.com/en-GB/a/about-snapcodes

{.caption} __QR Codes__ such as Snapchat profile codes also use a __Reed-Solomon__ error-correction code.

:::


{.fixme} PHOTO? Software applications often include a __MD5__ or __SHA-1__ checksum that indicates they came from a valid source.


----------------------------------------------------------------------------------------------------


## Secret Codes

> section: cryptography
> sectionStatus: dev
> id: caesar

In 49 BCE, Julius Caesar was leader of the Roman Empire, and his adopted heir Octavian was engaged
in a battle


The year is 49BC and Julius Caesar, leader of the Roman Empire has sent a message to his adopted heir , who is engaged in a battle that is not going well and reinforcements are needed. In order to make sure the message arrives he has sent 3 copies with trusted agents of his army. Spies from the opposing army intercept two of the messages, but one copy makes it through to Octavian.

Upon receiving the letter Octavian eagerly opens the message and reads:

{.parchment} “Xlcjerjw, anrwoxalnvnwcb jan xw cqn fjh. Cx jaaren xw orocnnwcq Xlcxkna. Qxum yxbrcrxw
dwcru cqnw. SL”

As you can see, the message makes no sense. Knowing that his message might fall into enemy hands,
Caesar protected it by using a cipher.

[Continue](btn:next)

---
> id: caesar-wheel
> goals: wheel

    svg.caesar-wheel(width=380 height=380)
      circle(cx=190 cy=190 r=190)

But Octavian knows how to crack the code: every letter in the message has been swapped with another
one.

Here you can see two wheels with all the letters of the alphabet. The outer, blue letters represent
the original, correct letters, and the inner, red letters represent the encoded letters.

To encode a message we simply have to swap every blue letter with the corresponding red one, and to
decode it, we just have to go the other way.

Try rotating the wheel to different possitions, until the message makes sense:

{.parchment} “Octavian, reinforcements are on the way. To arrive on fifteenth October. Hold
position until then. JC”

---

{.fixme} Octavian breathes a sigh of relief knowing that help is coming, and also that the enemy agents who captured the other two messages won’t be able to read it without the secret key.

This method of encoding a secret message is called the __Caesar cipher__. We simply "shift" every
letter in the alphabet by a certain amount

{.fixme}  And because Octavian knew what method Caesar had used to hide the message (an algorithm), and Caesar had told him the key (what letter the A lined up with on his wheel) before they had left Rome, he was able to read Caesar’s hidden message with ease.   shifts the alphabet a certain number of places in order to write out the message. This shifting is the algorithm. The key is how many places it is shifted.

Take a look at this message:

“ymj hfpj nx ns ymj kwnilj. ny nx f hmthtqfyj hfpj bnym afsnqqf nhnsl fsi wfnsgtb xuwnspqjx.”

We know that each letter has been replaced with a new letter of the alphabet by shifting the whole alphabet over by a specific number of spaces. For example, if it was shifted 1 space, all A’s would be written as B’s, B’s as C’s, C’s as D’s and so on. Using the wheel above, and some guess work, try to determine the message.

Interactive Elements: an input box where they should write the text
“The cake is in the fridge. It is a chocolate cake with vanilla icing and rainbow sprinkles.”

The shift, or key, for this message, is Input Box (5).

We can use devices like this, or even just writing out the alphabet two times, to match up each letter and either encrypt (definition: turn plaintext into cryptotext) or decrypt (definition: turn cryptotext back into plaintext) the message.

Caesar ciphers were quite popular, and secure, for a long time. Inventors even made devices to make the encryption and decryption of these messages easier.

---

### Cryptography

{.fixme} Cryptography (definition: cryptography is two words crypto - hidden, secret; and graphein - to write) is the art of hiding a message using an algorithm (a way of writing the cipher) and a key (the secret to locking and unlocking it). Many people can know an algorithm but only a few people should know the key, and the less people that know it, the more secure the message is.

Cryptography really is the art of hiding or obscuring a message. Early methods used steganography (definition: steganos - covered and graphein - to write), which is the art of simply hiding a message. It can be done in many ways, like using ink that can only be seen under certain conditions (like heat or acid), or hiding a message under something else (like wax, or even hair - though this one takes a long time).

This method physically hides the message but, if detected, the message can still be easily read.

So ciphers, like the Caesar, were designed to hide messages from being read by anyone who didn’t have the key. Sometimes these encrypted messages could be combined with stenography to make them even more secure.

![](https://csegrecorder.com/columns/view/science-break-201303)

In previous modules (Link to module on Morse Code) you learned how letters and words could be written in different ways and encoded to symbols or sounds (like in Morse code). But this way of writing doesn’t hide the message, it just changes it into a different format (through an algorithm, but without a key); like how letters on a keyboard are converted to ASCII, then binary, and then back again to display on your phone or monitor. But if you know how to convert between the two languages you can read the message easily. Cryptography hides the message so that you need both an algorithm AND a key to read the message.

---

### The Skytale

One of these methods was called a scytale, and it involved wrapping either a plaintext message, or an encrypted message for even more security, around a stick or tube of a specific size. You could only read the message properly if you had a stick or tube of the exact same size.

Interactive Elements: An animated picture of a paper with text being wrapped around a stick and being readable, then wrapping around a different sized stick and no longer having the text line up.

Interactive Element: A text box where students can write a message and then an animation of the message being cut and then wrapped around tubes of different sizes. Only one of the tubes will be the right size to have the message line up properly and be read; all other messages will be gibberish.

To make a message even more difficult they could encrypt it and then wrap it around a tube. Meaning the person intercepting it would have to first find a tube of the correct size to line up the message before they could even begin to decipher it. And because the message would appear to be gibberish to start with, it would make it nearly impossible to find a tube the correct size (or would require a LOT of guesswork).

Interactive Element: A text box students can write a message in, encrypt using the cipher wheel, and then an interactive ‘tube size selector’ that then wraps their message around the tube. This message could be sent to another user who then has to select the correct sized tube in order to read the message and decrypt it on their end (see the end of the Vigenere section for additional communication between users). There would also be an option to print out the encrypted message and instructions on how to choose a tube size from items found around the home to make a physical scytale and then share it with friends and family.

![](https://www.britannica.com/topic/Morse-Code)

---

### Frequency Analysis

A Caesar, or substitution, cipher is one of the easiest ciphers to create, but it’s also one of the easiest to break (or crack). This is because all someone needs to do is figure out the shift being used and they can easily read the whole message. To break the encryption you’d just have to try shifting each letter in the ciphertext to see if it created a plaintext that made sense. If it does, you’ve got the key, if it doesn’t, then you try the next shift until you get it; and you’d only have to try Input Box (25) different times (at maximum).

    // 25: Please check but I believe this is correct; if it was mapped A --> A it would be readable so there are only 25 choices for the shift really

Of course this is looking at a basic Caesar cipher, which shifted the letters, but it kept them in order. But what would happen if we shuffled the letters and put them in a different order?

Let’s start with the letter A, we could map it with itself, so A → A, but that would be rare and wouldn’t make much sense, but it’s still an option. Or we could map A → B, or A → C, or A → D and so on. This would give us Input Box (26) different possible options for A. We would then choose the next letter, let’s say B, assuming it wasn’t mapped to A, and do that one next. Well we know it can’t be mapped to A, as A is already mapped to another letter, but it could map to itself so that gives us Input Box (25) different options for B. We then pick our next letter and map it to other letter giving us Input Box (24) different options and so on…

Interactive Element: Two rows of the alphabet and students can join a line from one letter to another, mapping them (like the image below). There will also be a counter that goes from 26 down to 1 for each mapping, showing the remaining choices for letters. This can then generate a substitution alphabet that students can use to encrypt and send a message with.

This would give us 26 * 25 * 24 * 23 * … * 5 * 4 * 3 * 2 * 1 = 4.03 x 10^26 (Pop-up: multiplying a sequential chain of numbers like this can also be written as 26! where the ! means factorial. You can learn more about factorials here https://mathigon.org/world/Combinatorics ) different choices. Far too many choices to try a brute force attack (definition: trying one possibility after the other until you find one that works. This can be done systematically or at random) on to decipher. So instead we turn to frequency analysis to help us crack this code.

To start with frequency analysis involves looking at how many times a specific letter (or letters) appear in a block of text and comparing it to the most commonly used letters in that language). For example, in English, the most commonly used letter is the letter E. The least common letters are Z, X, Q and J.

Here is what a general frequency analysis of the English language looks like:

Image: frequency analysis chart There is a good generator here:
https://www.braingle.com/brainteasers/codes/frequencyanalysis.php#form

So, for someone intercepting a secret message using a simple Caesar substitution cipher, all they would have to do is look for the letter that appears the most, assume it was an E, and then count how many letters it is from the letter E to determine the shift (or key). Let’s see how accurate it is. Using your mapping from above let’s encrypt a block of text and then run a frequency analysis on it to see how close it got.

Interactive Element: A large block of text will be encoded using the the student’s mapping from above and then they could push a button that runs a frequency analysis on it and shows their mapping and the frequency analysis ‘guessing’. The block of text to be analyzed though should be pretty accurate to frequency analysis unsubstituted though to give the most accurate results.

Now it’s your turn to try:

https://asecuritysite.com/challenges/scramb

    x-code-box
      .input XXX
      .output ???

If you picked up on the fact that the code above was generated using a simple Caesar cipher with a shift of Input (14) you may have been able to guess the letters more quickly. However, you can also use it on a more complicated cipher where the letters are not sequential such as:

Interactive Element: The same as above but with a different encrypted text:

Note: the above text decrypts as:

Side note or pop-up: it is important to keep in mind that we are keeping punctuation and spaces in place for our encryptions, in most cases these are removed to make decrypting the text even harder.

There are also combinations of letters that are unique and appear more often together that can make our analysis work easier. In the English language this would be combinations like q and u, or the word “the” or the combination of letters like “th” “wh” and “ing”. All these patterns help to analyze text and determine what letters are being substituted.

Interactive Element: An analysis of the above text that also shows the frequency of the common items (qu, the, th, wh, ing, an). Students could then click on a word or combination of letters in the text and see all the other instances highlighted and a counter of how many appear in the rest of the text.

---

    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma

The science of creating secret codes is called __Cryptography__ and the are of
breaking them is called __Cryptanalysis__.

When designing ciphers, there are several possible objectives:

* __Secrecy:__ A and B can be sure that no third party X can read the message.
* __Integrity:__ A and B can be sure that no third party X can alter the message
  while it is being transmitted.
* __Secrecy:__ B can be sure that the message actually comes from A, and not
  from some impostor.

Length of security (hours, years), level of security

---

### The Vignere Cipher

![](https://travelnoire.com/5-things-must-rome)

It’s now 1562 and you now find yourself in Rome once again trying to crack a code. This time it is a communication from one of the Pope’s security guards that reads:

“EYDRICFILMRRBEGTYMESQNETVEMZKZXDHSFDLWLLKBRRRLXNRFAKFNEKTVCIUQEEDMYFUNPFOAZGOJLQDLFDGOTR”

It is imperative that the message be decrypted as you have discovered that the guard who sent it is a traitor and is involved in a plot to kidnap and ransom the Pope. But without proof, no one will believe you.

You initially try to decode the message using a simple Caesar cipher and try all 25 combinations, but nothing comes from it. You then try frequency analysis on the text, but it still comes out as gibberish, there are no patterns to be found. So you seek out Blaise de Vigenère, a French diplomat living in Rome as you have a sneaking suspicion you are dealing with a Vigenère cipher.

![](http://www.musicologie.org/Biographies/v/vigenere_blaise_de.html)

First credited to Giovan Battista Bellaso, an Italian cryptologist, the Vigenère cipher was named after Blaise de Vigenère, a French cryptographer and translator, who developed an autokey method of encryption about 20 years after Bellaso, based on his work.

A Vigenère cipher starts with the concept of a transposition cipher (definition: a transposition cipher is one where the letters remain the same but their position changes). An example of this is a rail fence cipher where every other letter has been moved to the end of the sentence.

Interactive Element: An animation of first the reverse of this process and then the forward method described here. Take the sentence “Cryptography is a fascinating field of mathematics. It allows people to converse with one another and not allow others to read the message.”. Remove all punctuation and spaces, take every other letter and move it to a row below the original sentence, then remove the spaces from both new lines and put the second line at the end of the first line. It should look like this by the end: cytgahiaacntnfedfahmtcIalwpoltcneswtoenteadoalwtesoedhmsaerporpysfsiaigilomteaistlosepeoovreihnaohrnntloohrtrateesg

Each line was called a rail, and the number of rails could be 2 or more.

Interactive Element: Allow students to write out a sentence, select the number of rails, and then it will reorganize the sentence as above.

Interactive Element: Show the students the sentence “Miiirieoheeoiriaaaaahgnsnneatvtxbotatahsltfneetnfcsnmtfcstoatcetktcaotsgtdht” allow students to try different numbers of rails to decipher the text (the correct input is 3 rails). Input box for the answer: “Mathigon is an interactive textbook that teaches a lot of interesting facts and math facts.”

The Vigenère cipher takes this one step farther and uses a series of alphabets, each shifted by one more for each linke.

Image: a picture of the alphabet written out 26 times, each line shifted by one, like this: https://en.wikipedia.org/wiki/Vigenère_cipher#/media/File:Vigenère_square_shading.svg

Then a keyword is picked:

Interactive Element: Allow students to type in a 5 - 10 letter keyword of their choice. Show how this keyword would be used to encrypt a series of 15 A’s. This shows that each A is encrypted as a different letter until the keyword starts to repeat. This should be animated to show the path for encrypting each letter. It could be an automatic animation or students could click for each step.

So now that we have our keyword, and we can see how each letter is encrypted, we can use this to encrypt a sentence:

Interactive Element: Allow students to type in a sentence of their choosing and, using their keyword, and the same animation as above show their sentence being encrypted. This site shows this process: https://studio.code.org/s/vigenere/stage/1/puzzle/1

By doing this the Vigenère cipher became an encryption method that was much more secure than a single Caesar cipher. It was essentially a series of Caesar ciphers strung together using a keyword, making it much stronger.

But don’t be fooled. Just because we are using a keyword to mix up the shifts it becomes much harder, but not impossible, to crack. For instance, since the person you are sending the message to needs to know the keyword, it could be intercepted and then the message could be easily read. Or someone could figure out what the keyword was based on what they knew about the person who sent the message (they could have used something easy to guess, like your favourite flower or a pet’s name).

In the case of your message from the Pope’s guard, this is exactly what happened. Using some investigative techniques you learned that the guard has a cat named Mr. Supreme Snuggles and tried that as the keyword.

Interactive Element: Same as above but this time they copy in the sentence “EYDRICFILMRRBEGTYMESQNETVEMZKZXDHSFDLWLLKBRRRLXNRFAKFNEKTVCIUQEEDMYFUNPFOAZGOJLQDLFDGOTR” and the keyword mrsupremesnuggles. The message is shows should be “The Pope is planning on going from the Vatican to the Cathedral at nine oclock in the morning”. The students will have to put in their own spacing to fully read the message.

Luckily you and Vigenère were able to figure out the keyword and saved the Pope. But what about if you didn’t have such information, or the sender had used a random phrase or group of letters. For many centuries the Vigenère cipher remained unbroken because people were unable to figure out how to find patterns that would help them decipher the text without knowing the keyword. And so it became the common method of sending messages for a very long time.

---

In the 1830’s and 1840’s a new mode of communication was being used, called the telegraph. It was able to send messages, using Morse code, over large distances using cable lines. These lines ran between two points but could be easily spliced into and their messages intercepted. So operators used the Vigenère cipher to protect their messages.

![](https://fineartamerica.com/featured/1-charles-babbage-1792-1871-granger.html)

Charles Babbage (1791 - 1871) was an English polymath (definition: someone who knows a lot of different subjects and can use them to solve various complex problems) who became interested in finding a way to crack the Vigenère cipher. Building on the work of others who came before him Babbage was able to crack the cipher using the concept of frequency analysis and looking for repeating patterns in the messages in order to determine keyword lengths and eventually crack the code.

In order to break the Vigenère cipher, Babbage started by looking for patterns to try and find the length of the key. He spent what must have been enormous amounts of time pouring over encrypted blocks of text and studying it for repeating sets of letters that occurred at regular intervals in the text. He did this because he knew that once he knew the key length he could use frequency analysis on each part of the cipher to crack the overall code.

Interactive Element (a slide show) -
Text to include “Say you have an encrypted block of text and you know that the key has a length of 6. This means that you know that the first letter of the ciphertext and the seventh letter of the ciphertext are encrypted using the same substitution alphabet; as you are now repeating the key and have returned to the starting letter.” The animation shows how the 1st and 7th letters are encrypted using the same row of the Vignere cipher (this can be pulled from the previous animation showing how the Vignere cipher works).
The next slide would be an animation showing the following text being split into its parts (every 7th letter, starting from the 8th, being grouped together). Text: “This means we can then rewrite the original text grouping all the 1st, 7th, 14th, 21st, etc letters together.”
The next slide would be a frequency analysis chart being generated for each section of the text. Text: We can then perform a frequency analysis on each part of the text to determine each letter of the key
Text: Finally we have a key and we can use it to decrypt the entire text (or put it back together from its parts)

But what happens if you don’t know the length of the key, which in most cases you wouldn’t? Well, in cryptography, patterns are the downfall of a cipher and Babbage knew this. By looking for repetitions of patterns in the ciphertext he was able to break them down to determine the length of the key. He did this by looking for repeated sequences in the text, how long the repeated sequences were, and how many spaces were between the sequences.

Let’s say we had a block of text we knew was encrypted with a Vigenère cipher and we found the following patterns in it that kept repeating at regular intervals: LSB, PMBJT, WJRFL, JCAT. We would then create a chart like the one below and fill in factors of each spacing.

Interactive Element: Students would check off the factor boxes for each pattern (putting in the X’s below). Note: the rest of the chart would be filled in for them.

We can now see that the common factor between the spacings of repeated patterns is 7; meaning our key is 7 characters long. We now have a pattern to work with and a known key length. Now it just becomes a matter of breaking up the text and using frequency analysis, along with a lot of guesswork, to crack the code.

Sadly, Babbage never published his work and the credit for cracking the Vigenère cipher eventually went to Fredrich Wilhelm Kasiski who broke the cipher independently of Babbage’s work and published it in 1863.

---

### The One Time Pad

![](https://www.nutsvolts.com/magazine/article/may2015_Koebel)

We now find ourselves in 1894 and in the time of a wonderful new invention: the radio. This wondrous device has made communication much easier and faster as a wire between places is no longer needed; merely a transmitter and a receiver aimed at each other. However, they are also much less secure. To intercept a message you no longer have to splice into a telegraph wire, you just have to aim your own receiver at a transmitter to intercept all the messages you want (including encrypted ones).

During WWI this caused an issue as there were no new unbreakable ciphers being created, they were just using variations on older ciphers (which already had methods to break them). In addition to methods to break these codes, due to the ease of using radio waves, more messages were being sent and intercepted so there was more text to work with (remember, more text = easier to find patterns = easier to decrypt). Another issue with radio waves is the ability to triangulate where the signal is coming from.

Interactive Element: a picture of two receivers (like the two satellites in the image shown) that students can move around to point in different directions. When they are pointed at a certain (hidden) point they will beep - they beep slowly when pointed away from the hidden point and more quickly as they get closer and a sustained tone when pointed directly at the spot. Once both receivers are pointing at the same point it will appear. If sound is not an option then a dotted line can be used (getting darker as it gets closer to the point) when only one transceiver is point at the right spot and then a dot appears when they are both pointed at the same spot.

So not only could you intercept the messages and decode them you could also figure out where they were being sent from. This was especially handy if you were decrypting plans for an attack and now you knew not only what their plans were, but where they were hiding too!

As we know the longer a key is, the harder it is to break. But with a bit of skill and time, even long keys can be broken. Also, keywords would have to be shared among radio operators so if one was lost or captured then all their messages could be read.

![](https://www.cryptomuseum.com/crypto/otp/index.htm)

This led to the Invention of the one-time pad. This was a large book that contained strings of random letters. Each time a message was sent it was encoded using a page of the book. It was then decoded using the same page on the other end. Then both parties would throw out that page of the book, so that code would never be used again.

This meant there was no repetition for code breakers to use. The random strings meant no easily guessable words, and no easily guessable phrases (Pop-up: sometimes codebreakers would get to know the operators and they would use words like their mother’s name or favourite ice cream flavour). This made one-time pads very secure. But they were also highly impractical as operators needed large code books distributed to them on a regular basis and, if one was captured, they would all become compromised and useless.

Important note: The weakest link in cryptography is often humans and the fact that they simplify things to make them easier to remember, but also easier to guess. The worst thing for a secure encryption is a repeating pattern.

---

Let’s use what we’ve learned so far to send some messages.

Interactive Element: A text box where students can write an encrypted message and send it to another student. They can choose what type of cipher and if they want to combine different methods (scytale + Caesar, or scytale + Vignere, or rail fence). It’s a selector tool where they can encrypt a message and then send it to someone along with how much info they want to send along (they can tell them nothing, or just the algorithm, or the algorithm and the key). They can make it as hard or easy as they want to. On the other end the student receiving the message would have access to things like tubes, cipher wheels, and frequency analysis tools.



----------------------------------------------------------------------------------------------------


## The Enigma

> section: enigma
> sectionStatus: dev

    // plus.maths.org/content/exploring-enigma
    // www.youtube.com/watch?v=mcX7iO_XCFA

Here is a virtual Engima machine:

    figure: x-enigma

And here are the rotor cross-sections:

    figure: x-enigma-rotors

The letter shown inside each rotor indicates the rotation, and the connecting orange lines
show the link between the notch on one rotor and the rotation position
of the next rotor.

We now find ourselves in 1938, one year away from World War II, a war that is going to involve many countries and last until 1945. It was also going to spawn a new and highly effective way to encrypt messages. The Enigma machine!

![](http://www.cbsnews.com/news/rare-alan-turing-manuscript-enigma-machine-auction-bonhams/)

In 1918 Arthur Scherbius and Richard Ritter formed the Scherbius and Ritter company. They made many things but one of the most famous of these is the Enigma machine.

Originally made of 3 parts (a 4th was added later) and connected by wires the Enigma combined many different elements of cryptography into a single machine.

The three parts are 1) a keyboard for entering in plain or cipher text, 2) a set of rotors for encrypting / decrypting the text, and 3) a light board for displaying the final text. Later on plugboards and a reflector were added. The machine itself looks like a typewriter. When you enter a letter by pressing a key the encoded letter lights up. Someone writes down these encoded letters and then uses this to send the message (usually through radio message) to the recipient. When the message is received on the other end the operator types in the letters and records the letters that light up, providing them with the unencoded message.

Interactive Element: an exploded image of the Enigma machine where each part is highlighted / brought out when a student clicks on the part name. Kind of like these:

![](https://hackaday.com/2017/08/22/the-enigma-enigma-how-the-enigma-machine-worked/)

![]( https://www.alamy.com/stock-photo-an-enigma-machine-rotor-on-display-showing-the-internal-wiring-in-41587437.html)

In its simplest form an Enigma machine is simply a mechanical Vigenère cipher with a 26 letter keyword. An operator types a letter, an electrical signal then gets sent through a wire to encrypt that letter to a new letter and then the new letter lights up on the board. This new letter is then written down, the rotor moves forward one place, and the next letter is typed and it’s encrypted version lights up. This continues until the rotor has gone around all 26 spots and then returns to its initial position.

Interactive Element: this will be a slide show showing the following steps:
The first part is the first rotor of the machine, which operates similar to a basic Caesar cipher. The students type in a letter and it shows the encrypted letter lighting up - start with a shift of 3 - and then each time it moves forward by one letter. You can use the paper template (see comment) to get an idea of what the picture would look like but it should show the path from the letter typed to the encrypted letter with each letter the student types. Students should be encouraged to type the same letter multiple times and see how each time it is encoded differently. Text to be included:
With only one rotor this is no better than a simple cipher wheel and only gives 25 different starting points (26 if it maps to itself, which wouldn’t make much sense), which could easily be cracked.
A second wheel is added, it only turns once more than 26 letters have been typed so there must be a minimum requirement on the input box to type more than 26 letters - or have a bunch of letters already pre-programmed into the box. The same highlighting of the path should be shown. Text to be included:
So they added a second wheel, one that only turned once the first had gone all the way around (after 26 letters had been typed). By adding this second rotor there were now Input box (26 * 26 = 676) different combinations. This was better but a team of cryptographers, especially ones who had their own Enigma machines, would be able to determine the correct orientation in fairly short order. And so a third rotor was added.
A third rotor added, same idea as above showing the path being followed by the letters being encrypted. A large block of text should be included though to show the first, second and third rotors moving (as the third only moves once the second has rotated 26 times). Text to be included:
This gave Input box 26*26*26 = 17,576 possible combinations. And, while much better, a dedicated team with access to a machine, could still potentially crack this. And so eventually they added a plugboard that switched 6 letters with each other.
Interactive Element: an image of a plug board that students can drag the cord from one letter to another to switch them before being fed into the Enigma machine. There should be 3 such cords.
The plugboard added a random element to the encryption and gave another 100,391,791,500 additional combinations. They also decided to make the rotors moveable (so they could be put in different configurations), giving another 6 options.
Interactive Element: an animation showing each piece of the Enigma machine being put in with the number of combinations it adds and a running total of combinations. Text to be included:
In total, a fully equipped Enigma machine had over 10 x 10^16 possible configurations making it impossible to crack through brute force attempts.

Because of the way the Enigma machine worked you couldn’t do frequency analysis on the ciphertext. Some letters were switched using the plugboards, and each letter was encrypted different from the one before it. Even in the simplest form of Enigma, with just three rotors, you would have to type 17,576 letters before repeating the encryption pattern and this would have to be done many, many times for a discernable pattern to emerge.(Pop-up” For comparison a Twitter post is a maximum of 280 characters so you’d need to post about Input box (62 or 63) tweets before your encryption pattern would start to repeat.)

![](http://users.telenet.be/d.rijmenants/en/enigmatech.htm#reflector)

One of the neatest elements of the Enigma machine was the inclusion of a reflector panel at the back of the machine. This panel would serve to link two encrypted letters together so that the machine could be used to both encrypt and decrypt text with the same rotor settings. On the rotors letters could be linked to new letters: for example P → H, H → C, C → B. But the reflector was responsible for linking the letters as pairs: so P → B and B → P. Once a rotor setting was set the reflector would make sure that the wiring for the forward and backwards processes were also linked together.

While this made it easy to use the same machine, with the same settings, to encrypt and decrypt messages, it also meant that a letter could never be linked to itself; and this made the job of code crackers much easier later on.

Interactive Element: the second portion the paper simulator from above showing the reflector panel being added and the letter being encrypted being traced through the encryption, bouncing off the reflector and travelling back to light up the encrypted letter and then the reverse process as well.

Now that we know how Enigma works, let’s try it out ourselves:

Interactive Element: an emulator similar to this where students can press a keyboard, switch a plugboard, and see the new letter light up https://www.101computing.net/enigma-machine-emulator/

---

Because of all these features, the German military believed that the Enigma code was impossible to crack – but they were wrong. Breaking Enigma included some of the most groundbreaking achievements during the second world war, involving some of the greatest mathematicians in history, the invention of computers, and a little bit (or a lot) of luck.
Breaking it also saved thousands of lives by ending the war a few years earlier.

It all started in 1938 when rumblings had started that Germany was going to invade Poland and knowledge of a new, unbreakable, code machine to be used by them had started to spread.

![](http://dailyinfographics.eu/world-war-ii-on-old-maps/)

![](https://www.polishgreatness.com/enigma.html)

Desperate to help however he could, Mariam Rejewski, a Polish cryptographer, was one of the first people to attempt to break Enigma. Just prior to WWII Rejewski received the blueprint for making a military style Enigma machine from a disgruntled German named Hans-Thilo Schmidt. But having the machine (the algorithm) wasn’t enough, he needed the key. With over 10x10^16 possible keys it was a daunting task but Rejewski realized if he could somehow separate the plugboards from the rotors he could dramatically decrease the potential number of keys. In fact, if he could separate out the plugboards he would only have 6 * 26 * 26 * 26 =  Input box 105,456 potential settings to work with (note: there were an extra 6 settings in the Enigma Rejewksi was working with because in his version of the Enigma you could take the three rotors out and change their physical positions in the machine, giving another 6 configurations).

Interactive Element: a table like this that students can fill out or physical/clickable/draggable rotors that students can move around and ‘plug into’ an Enigma machine and a counter that keeps track of the different combinations.

Possible Rotor Settings
123
132
231
321
213
231

This was not a small number but, with enough effort, he realized he could do it, he just needed to get rid of those plugboards somehow. So set to work on the issue and soon he realized that, because the plugboards were fixed in their substitutions they had an effect on the messages themselves, but they didn’t have an effect on how those letters were linked to each other when encrypted. A “P” switched with a “B” would switch those letters in the final message but it wouldn’t change what “P” and “B” were encrypted as when they went through the Enigma rotors.

Image: an plugboard showing P switched with B, J switched with T, and W with R

Success! This served to simplify the problem greatly, but he was still stuck on how to break the rest of the encryption.

Rejewski’s biggest breakthrough came from the way messages were sent by the German’s. Realizing that repetition in encryption was bad, and could lead to messages being cracked, the German’s used a combination of day codes and message codes, and this became their downfall.

Day codes were the rotor and plugboard settings to be used each day by operators. These would be sent in codebooks to the operators every few weeks. However, sending millions of messages using the same key would create a lot of repetition, so instead of coding each message with the same key, the operators would use the day codes to send a special message key for each message they sent.

This three letter key (one for each rotor setting) would be encrypted at the start of the message using the day key, then the rotors would be set to the message key and the rest of the message would be written.

Let’s assume an Enigma machine’s day key for the rotors was G B K, choose your own three letter message key, and send it through the machine, write it down somewhere safe and we’ll come back to it shortly.

Interactive Element: using the tracing element from before students can set the rotors to be G B K and then enter a three letter code and see how it comes out. Need to make sure it is just the three rotors, not the plugboards.

By having different day and message codes it worked well to keep the day code from being overused, however the Germans made one fatal flaw with this method. They insisted that, in order to ensure there were no issues with receiving the message code (due to operator error or poor reception when sending/receiving the message), the code was sent twice. So if the operator chose a message key of J A T then the operator would first set their rotors to the day key, and then start the message by writing J A T J A T. They would then reset the rotors to the settings J A T and type the rest of their message.

Image/Animation: three rotors set to a code of GBK, then a message being encrypted and the rotors being reset to JAT and the rest of the message being written.

Go back to your message key (the one you wrote down) and now encrypt it twice - noting that the six letter string you get out will have six different letters (even though it’s a repeating pattern). We are now going to use that repeating pattern to crack Enigma.

The repetition of the message key using the day key allowed Rejewksi to study links and patterns in the messages, because all of these initial message keys were sent using the same day key.

He knew that the first 6 letters of any message were the message key and that the first and fourth, second and fifth, and third and sixth letters of these keys were the same letters. By intercepting multiple messages in a day he was able to build an alphabet matching the pairs of letters up and then was able to trace the number of links between letters.

To keep it simple, and make sure that we have all 26 letters properly included and mapped, we’ll assume that the message keys are each letter of the alphabet repeated: AAA, BBB, CCC, etc. In reality, operators used many different combinations of three letters for their message keys (and some lazy operators even used AAA, BBB, CCC, which made it easier for code breakers like Rejewski when they did).

Interactive Element: an illustration / animation showing the following - I think it should first be an animation showing the data and highlighting the chains and links. This could be done with the first and fourth letters and then the students could fill in the patterns for the second and fifth and third and sixth to ‘break the day code’. I’ve provided an explanation below of how it works but I would be happy to speak with the person creating it to explain in detail how it works. Or I could make a little video explaining it.

So this method seemed pretty effective for cracking most messages, however it wasn’t perfect. For instance, what would happen if two or more day keys had a similar chain and link pattern? Well, because of the way the Enigma was created, it would be almost impossible for two day codes to have the exact same chain and link profile. And even if they did, it would simply be a matter of testing the duplicated keys until a message that made sense was found. Or what if the letters chosen for the day key or message key were also the letters that had been swapped in the plugboards? In this case Rejewksi might have had to assume he had most of the key correct and then test out the various plugboard settings until he found a key that unlocked the rest of the message.

While Rejewksi’s method had some flaws it was still a revolution and a breakthrough for cracking the Enigma and helped with future efforts. However, Rejewksi’s exact method was a short lived victory as soon after creating his codebooks 2 extra, interchangeable cylinders were added to the machine which gave an extra 60 arrangements of the rotors and increased the number of possible rotor configurations to 1,054,560. To add to this they also increased the number of plugboards from 6 to 10, giving 20 possible letter swaps for a total of 1.59x10^20 possible keys. Rejewkski would have needed 10 times more bombes to create a new code book and they were too expensive for the Polish intelligence. Enigma now, once again, seemed unbreakable. Add to this the fact that Germany was about to invade Poland and so Rejewski, and Polish intelligence, gave all his work (including the blueprints for making an Enigma machine, how to set up a bombe, and his methods) to the French and British intelligence.

---
Bletchley Park

From: https://en.wikipedia.org/wiki/Bletchley_Park

Soon after receiving the information from Rejewski, British Intelligence realized they needed people to help break Enigma. So they hired about 200 people from various backgrounds including chess masters, puzzle experts, linguists and mathematicians to work on the problem. This small group was sent to live and work in the English countryside in what would be called Bletchley Park. Over time the number of people grew to around 7000 men and women. Some of the people who worked there were recruited through crossword puzzle contests in the newspaper, some were recruited from universities and through connections who were already part of the project. The British military had more resources and were therefore able to build more bombes and crack the codes using the methods set up by Rejewski. Furthermore they were able to look for cribs (definition: words that stand out like repeated phrases, names of people, weather reports) to help with cracking the settings. Through their efforts the people of Bletchley Park were able to crack day keys within a few hours, allowing them to read daily messages about German movements and strategies much faster.

From: http://cnet.com/uk/pictures/see-alan-turings-lost-notes-found-in-the-walls-of-bletchley-park-70-years-later/10

Pop up or box of information: some things that sped up the process - human error (operators choosing repeating message codes, or initials of people they knew), as they got to know operators they could start to guess what they called cillies. There was also a requirement by the Germans that the rotors not be set in the same position 2 days in a row, meaning when the code breakers knew the setting for one day they could eliminate various settings for the next day automatically. There were also rules about the plugboards not being able to swap adjacent letters (N couldn’t be swapped with M or O) so this reduced possibilities again.

Pop-up or Side Box: The Women of Bletchley Park

From: http://www.cnn.com/2016/11/24/europe/uk-bletchley-park-college/index.html

While most of the initial codebreakers at Bletchley Park were male, there were 3 or 4 exceptional women who started working there as well. Pamela Rose, Pat Davies, and Charlotte Webb were among the first codebreakers, mostly due to their high status families, which allowed them to go to university. However, as the war progressed more women were recruited to assist with the effort, some coming from crossword solving competition that were held across England. Joan Clarke (fiancee of Alan Turing) was one such codebreaker. Some of these women came from the Women’s Royal Naval Service and were called Wren’s, and by the end there were 1,676 of these Wren’s, along with many other incredible women, attending to the more than 200 bombes along with other decryption tasks.

It should be noted that, while the codebreakers at Bletchley Park were incredible, they were still only human and the work they were doing could only move at human pace. Even though they were assisted by a series of bombes, the work was tireless and time consuming and the codes they were cracking were only valid for one day at a time. So even if they managed to crack the day code before midnight, they’d have to start all over again the next morning. But they were making good progress and decrypting German messages that the German’s thought were unbreakable. This gave the Allied forces a HUGE advantage and saved many lives. But there was still room for improvement; enter Alan Turing.

Born in 1912 Alan Turing is considered the father of modern computing and artificial intelligence. He was a mathematician who focused on the unknowable nature of math and the idea that there will always be truths in mathematics that we can never know. He is perhaps most famous for his work at Bletchley Park and breaking codes and wrote a number of books that have become the foundation for mathematical code breaking.

Note: this is an image of an early counting machine from the 1800’s for comparison.

During his time at Bletchley Turing envisioned a machine that one could feed a paper with a question into one end and a paper with the answer would come out the other end. This was, in fact, an early version of the modern computer. More than a mechanical counting machine, which already existed, it could show when various portions of the Enigma machine lined up. To do this Turing set up a series of Enigma machines, similar to what Rejewski’s bombes were (and in fact Turing called it a Bombe out of respect). However, instead of running them mechanically Turing ran electrical wires through them. The intention was that when the rotors lined up in the correct configuration (using the chains and links discovered by Rejewkski) a light would light up showing that the circuit had been completed. This allowed Turing to automate the process, having the machines turn themselves until they hit on the correct combination, and lighting up the light.

Interactive Element: an animation showing the flow of an electrical current going through the links of letters in a guessed plaintext to known ciphertext but getting stopped at the wrong configuration; then, when it hits the correct one, a light lights up. The previous tracing element along with the chain and links developed in the charts above could be used to show the G B K configuration lighting up.

Here is what it would look like (maybe an animation of a wrong combination where the electron starts at the first point and then gets blocked so the rotor moves forward one position and tries again and then eventually the electron makes it all the way through and lights up the bulb). Text: In these images, S, S+1, S+2, S+3, etc refer to the rotor settings where S is the initial (unknown) rotor setting, S+1 is where it clicks forward one place, S+2 is two forward rotations, etc. Where a setting doesn’t produce a link in the chain it is skipped. Of important note, this version is using a crib (or known word that the code breakers were able to guess - like in a weather report) and is not using the day codes as Turing believed (rightfully) that these would soon no longer be used. But the same process could work for other pieces of information found in the text.

So this method seemed pretty effective for cracking most messages, however it wasn’t perfect. For instance, what would happen if two or more day keys had a similar chain and link pattern? Well, because of the way the Enigma was created, it would be almost impossible for two day codes to have the exact same chain and link profile. And even if they did, it would simply be a matter of testing the duplicated keys until a message that made sense was found. Or what if the letters chosen for the day key or message key were also the letters that had been swapped in the plugboards? In this case Rejewksi might have had to assume he had most of the key correct and then test out the various plugboard settings until he found a key that unlocked the rest of the message.

While Rejewksi’s method had some flaws it was still a revolution and a breakthrough for cracking the Enigma and helped with future efforts. However, Rejewksi’s exact method was a short lived victory as soon after creating his codebooks 2 extra, interchangeable cylinders were added to the machine which gave an extra 60 arrangements of the rotors and increased the number of possible rotor configurations to 1,054,560. To add to this they also increased the number of plugboards from 6 to 10, giving 20 possible letter swaps for a total of 1.59x10^20 possible keys. Rejewkski would have needed 10 times more bombes to create a new code book and they were too expensive for the Polish intelligence. Enigma now, once again, seemed unbreakable. Add to this the fact that Germany was about to invade Poland and so Rejewski, and Polish intelligence, gave all his work (including the blueprints for making an Enigma machine, how to set up a bombe, and his methods) to the French and British intelligence.

---
Bletchley Park

From: https://en.wikipedia.org/wiki/Bletchley_Park

Soon after receiving the information from Rejewski, British Intelligence realized they needed people to help break Enigma. So they hired about 200 people from various backgrounds including chess masters, puzzle experts, linguists and mathematicians to work on the problem. This small group was sent to live and work in the English countryside in what would be called Bletchley Park. Over time the number of people grew to around 7000 men and women. Some of the people who worked there were recruited through crossword puzzle contests in the newspaper, some were recruited from universities and through connections who were already part of the project. The British military had more resources and were therefore able to build more bombes and crack the codes using the methods set up by Rejewski. Furthermore they were able to look for cribs (definition: words that stand out like repeated phrases, names of people, weather reports) to help with cracking the settings. Through their efforts the people of Bletchley Park were able to crack day keys within a few hours, allowing them to read daily messages about German movements and strategies much faster.

From: http://cnet.com/uk/pictures/see-alan-turings-lost-notes-found-in-the-walls-of-bletchley-park-70-years-later/10

Pop up or box of information: some things that sped up the process - human error (operators choosing repeating message codes, or initials of people they knew), as they got to know operators they could start to guess what they called cillies. There was also a requirement by the Germans that the rotors not be set in the same position 2 days in a row, meaning when the code breakers knew the setting for one day they could eliminate various settings for the next day automatically. There were also rules about the plugboards not being able to swap adjacent letters (N couldn’t be swapped with M or O) so this reduced possibilities again.

Pop-up or Side Box: The Women of Bletchley Park

From: http://www.cnn.com/2016/11/24/europe/uk-bletchley-park-college/index.html

While most of the initial codebreakers at Bletchley Park were male, there were 3 or 4 exceptional women who started working there as well. Pamela Rose, Pat Davies, and Charlotte Webb were among the first codebreakers, mostly due to their high status families, which allowed them to go to university. However, as the war progressed more women were recruited to assist with the effort, some coming from crossword solving competition that were held across England. Joan Clarke (fiancee of Alan Turing) was one such codebreaker. Some of these women came from the Women’s Royal Naval Service and were called Wren’s, and by the end there were 1,676 of these Wren’s, along with many other incredible women, attending to the more than 200 bombes along with other decryption tasks.

It should be noted that, while the codebreakers at Bletchley Park were incredible, they were still only human and the work they were doing could only move at human pace. Even though they were assisted by a series of bombes, the work was tireless and time consuming and the codes they were cracking were only valid for one day at a time. So even if they managed to crack the day code before midnight, they’d have to start all over again the next morning. But they were making good progress and decrypting German messages that the German’s thought were unbreakable. This gave the Allied forces a HUGE advantage and saved many lives. But there was still room for improvement; enter Alan Turing.

Born in 1912 Alan Turing is considered the father of modern computing and artificial intelligence. He was a mathematician who focused on the unknowable nature of math and the idea that there will always be truths in mathematics that we can never know. He is perhaps most famous for his work at Bletchley Park and breaking codes and wrote a number of books that have become the foundation for mathematical code breaking.

Note: this is an image of an early counting machine from the 1800’s for comparison.

During his time at Bletchley Turing envisioned a machine that one could feed a paper with a question into one end and a paper with the answer would come out the other end. This was, in fact, an early version of the modern computer. More than a mechanical counting machine, which already existed, it could show when various portions of the Enigma machine lined up. To do this Turing set up a series of Enigma machines, similar to what Rejewski’s bombes were (and in fact Turing called it a Bombe out of respect). However, instead of running them mechanically Turing ran electrical wires through them. The intention was that when the rotors lined up in the correct configuration (using the chains and links discovered by Rejewkski) a light would light up showing that the circuit had been completed. This allowed Turing to automate the process, having the machines turn themselves until they hit on the correct combination, and lighting up the light.

Interactive Element: an animation showing the flow of an electrical current going through the links of letters in a guessed plaintext to known ciphertext but getting stopped at the wrong configuration; then, when it hits the correct one, a light lights up. The previous tracing element along with the chain and links developed in the charts above could be used to show the G B K configuration lighting up.

Here is what it would look like (maybe an animation of a wrong combination where the electron starts at the first point and then gets blocked so the rotor moves forward one position and tries again and then eventually the electron makes it all the way through and lights up the bulb). Text: In these images, S, S+1, S+2, S+3, etc refer to the rotor settings where S is the initial (unknown) rotor setting, S+1 is where it clicks forward one place, S+2 is two forward rotations, etc. Where a setting doesn’t produce a link in the chain it is skipped. Of important note, this version is using a crib (or known word that the code breakers were able to guess - like in a weather report) and is not using the day codes as Turing believed (rightfully) that these would soon no longer be used. But the same process could work for other pieces of information found in the text.


----------------------------------------------------------------------------------------------------


## Public Key Cryptography

> section: rsa
> sectionStatus: dev

Any discussion of cryptography needs to make mention of the number of people that need to work together and build upon each other's work in order to both create and break ciphers; and one process is constantly driving the other. One person needs to make a message secret, and so they create a way to encrypt it. Then another person wants to read it so they find a way to break it. So then a new method needs to be created to encrypt messages again, and a new method to break it, and so on, and so on… And methods are always building upon themselves, in fact you can see how the simple Caesar cipher can be found in every other process discussed here, including the ‘uncrackable’ Enigma.

We also need various methods of cryptography for different purposes. For example, while highly secure, one-time pads were awkward to use and not practical for day to day use and are now only used in a few situations. Enigma was highly secure but required large, bulky machines and operators, making them impractical in many situations. Yet, Caesar and Vigenère ciphers could be done with a piece of paper and knowledge of the shift or keyword, but could be easily broken. Different methods of cryptography therefore are used for different purposes and where they make the most sense.

Also, because of the inherent secrecy of cryptography, many methods of decryption, including the people who work on it, remain hidden and secret for many years after their work is done. For example, those who worked at Bletchley Park, including Alan Turing, returned home to be seen by friends and family as not contributing to the war efforts; and they were forbidden to speak of their work. Even the accomplishments of Flowers and his Colossus machine weren’t revealed to the public until decades later. In the case of Turing, he passed away before ever receiving recognition for his contributions.

It is believed that, even today, there are many government and private efforts to both protect and decrypt our data. But the people working on these efforts remain hidden and secret; just like the codes they are attempting to make and break!

---

RSA

You want to send a message to your friend, but your friend lives on the other side of the world. There are many ways you can send this message including: sending a letter through the mail, phoning them, or sending them an electronic message (like an email, text message, or message through social media or an app). If you want the message to not be read by others then you need to find some way to encrypt it. As we have seen in previous chapters cryptography requires two parts: an algorithm (a way to encrypt the information) and a key (a specific piece of information required to ‘crack the code’). In earlier times the key would often be written down and distributed to those exchanging messages. This could be done through code books, or by simply telling the other person the key directly. Cryptographers who intercepted these encrypted messages would look for ways to break them or, if they were lucky enough, would find these codebooks or intercept the keys in some way (a spy or someone who wasn’t careful keeping the key a secret - like writing it down) and then they would have access to all the hidden messages.

While the modern internet, and modern computers, have made communication across the world much faster and easier it has also presented new ways for information to be intercepted. Let’s say the message you want to send to your friend is supposed to be secret, but it gets intercepted along the way. If you were to use one of the methods of cryptography described earlier a modern computer could easily crack it by using the tricks and methods developed by people like Babbage, Rejewski and Turing; things like frequency analysis and investigating patterns within the encrypted code. It could also use a brute force attack with thousands of possibilities a second; much faster than cracking it by hand.

So you need to share a key first, but how can you do this safely? Let’s say you’re sending an email to your friend, how could you send the key?

Interactive Element: a drop down list of different options they could pick to send the key separate from the message and each selection would have a pop-up of the difficulties that method presents:


Method
Issue
Send another email
If the email address has already been ‘hacked’ then the interceptor will have both key and message.
Phone them
They have to remember the key exactly; you might be more tempted to pick a really simple/easy to remember key for them; the phone could also be hacked; they could choose to write the key down on a piece of paper that could be found or on a file on their computer that could be seen if the computer and not the email was hacked
Tell it to them in person
Requires you both to be in the same place; hey have to remember the key exactly; you might be more tempted to pick a really simple/easy to remember key for them; they could choose to write the key down on a piece of paper that could be found or lost, or they could write it as a file on their computer that could be seen if the computer and not the email was hacked
Send it to them over another form of communication (text message, social media, an app)
Message could be intercepted by the phone company or by the company that owns the social media or app; if their computer is compromised the hacker might be able to see the key regardless of the way it is sent.

As you can see there are many ways that the key could be intercepted. So why not create a method to send a key publicly where it doesn’t matter if someone else gets it? That’s what RSA is.


From: https://en.wikipedia.org/wiki/RSA_Security

RSA is named after the co-founders of RSA Security: Ron Rivest, Adi Shamir and Leonard Adelman, and they named the encryption method the same. It uses a series of public (Definition: not secret, can be intercepted, and read by a third party freely) and private (Definition: only known by the recipient and kept secure on their system) keys, along with modular arithmetic, to encrypt messages being sent electronically and ensure that, even if they are intercepted, they can’t be cracked.

---

Prime Numbers

To explain how RSA encryption works we have to start with prime numbers (link to Prime Numbers module in Mathigon) and factors.

What are all the factors of 150? Input 1, 150, 2, 75, 3, 50, 5, 30, 6, 25, 15, 10

Now how about 151? Input 1, 151

151 is a prime number so there are only two factors. If you knew that 151 was a prime, getting the factors would be quite easy, but it becomes more work if you don’t know it’s a prime, as you have to test all the numbers in between 1 and 151 to see if 151 is evenly divisible by any of them.

Now there are some tricks that can simplify this such as any even number is divisible by 2, a number ending in 5 or 0 is divisible by 5, but for larger numbers it can be quite tricky. Imagine finding all the factors of 125728394792, it would take a while, even with the help of a computer.

Let’s go the other way now. What is 547 x 251? Input 137,297

Pretty easy to figure out (especially if you have a calculator or computer on hand). But what if I asked you what two numbers multiply together to get 262,319?

Interactive Element: an input box with an “HELP” button that gives the answer 947 and 277

947 and 277 are both prime numbers and so, when multiplied together, gives an answer that only has 4 possible factors, 1, 262319, 947 and 277. Now with the help of a computer you could determine this answer pretty quickly, it would be very difficult to figure it out by hand (but it could be done, especially if you knew it was the product of two prime numbers).

However, what if the prime number was longer, MUCH longer. In fact, in 2048-bit RSA encryption the number is 617 digits long.  A number this long, with only 4 factors, would take a classic, modern computer about 300 trillion years to crack. So this is what RSA makes use of.

---

So how does knowing the factors of a number help secure information? It has to do with private and public keys. A public key is something that can be shared freely between people and it doesn’t matter if someone else intercepts it. Without the private key, which is stored only by the sender or the recipient (not both - they each have their own) then intercepting the message and the public key is not enough to decrypt the message. But when you pair the public and private key together, the message unlocks and can be read only by the intended recipients.

Generating the Keys

In order to generate our keys we need to pick two prime numbers that are big enough and far enough apart that they will work. The smaller the numbers and the closer together they are the Input (selection box “easier” or “harder” choices, correct answer is “easier”) they are to guess.

Interactive Element: this will be a multi-step process (it could be set up as a step by step slideshow with text and inputs)
Step 1: Text: “first we choose two prime numbers Pop-up/side note: the actual numbers chosen for RSA are normally very large and a primality test (like the Rabin-Miller Primality Test) is used to ensure that they are actually prime numbers.” students will then choose two prime numbers (there needs to be instructions and a check that the primes are at least over 100 and they have to be primes). The two primes should be labelled “p” and “q”
Step 2: Text: “next multiply your two primes together” students will then multiple the two numbers together to give “n”
Step 3: Text: “now we need to find a number that will form an upper limit for our next step. This is done using Carmichael’s totient function: \lambda(n) = lcm(p-1, q-1), where lcm is the least or lowest common multiple (you can learn more about lcm here). However, because lcm requires finding prime factors and we are dealing with large numbers here’s a calculator to help you” Students will input their p-1 and q-1 numbers and then we will provide a calculator to determine the lcm for those numbers and show them their \lambda value (like this: https://www.calculatorsoup.com/calculators/math/lcm.php)
Step 4: Text: “we now use this \lambda(n) value to find a value we can use to make up our public key called e” students will then be asked to pick a prime number (e) between 1 and \lambda(n). This could be an auto-generated list of prime numbers between 1 and their \lambda(n) and they click on what number they want to use.
Step 5: Text: “we now have p, q, n, and e to work with, where our public key is a combination of e and n” These numbers should all be filled in, perhaps a labelled box with their various values.
Step 6: Text: “so now it’s time to encrypt. Let’s start with a very simple message, a number (we’ll talk about text later), and call it m.” students pick a number between 1 and 9 (inclusive) and it gets labelled as m.
Step 7: Text: “now we are going to use this equation to encrypt our message c = m^e mod n. Pop-up: this pop-up links to the below section on modular arithmetic” students will fill in the equation with the various parts to solve for c, this should be a calculator that shows the various steps (the m^e calculation and then finding out the mod n part).
Step 8: Text: “so we now have our plaintext (the student’s m value) as a ciphertext (the student’s c value) that gets sent to the receiver.”

Pop-up on Modular Arithmetic (see above):
In order to understand this method of encryption we have to understand the concept of modular arithmetic. In its most basic form modular arithmetic is like reading a clock where the ‘n’ in mod n determines how many ‘hours’ there are. Every time the clock reaches back to where it starts we restart our numbering (like when we go from 12:59 to 1:00 on a regular clock, we don’t go to 13 because there are only 12 numbers on the face).

Each time we go around the clock we return to our starting number. So if we were going on a trip and we left at midnight and it was going to take 18 hours to get to our destination, what time would it be when we get there? Input: 6:00 (this should be a drop down with options to avoid am, pm, or 24 hour time).

So you see, we went around the clock 18 ‘hours’ but ended up at the number 6. This is the basis of modular arithmetic. It’s how many times the number we are looking for goes into the mod evenly, and the remainder becomes the value we are looking for.

Let’s try an example: say we are looking at the number 13 in mod 5. Important note: unlike the clock above, we always start modular calculations with a 0 so the numbers go from 0 to n-1 (more on this in a minute). So to find 13 mod 5 we can simply count, starting at 0, 13 places, and then record where we end up Input 3.


So how do we do this for bigger numbers (because who wants to count something like 447 mod 5) and why do we start at 0? This is because modular arithmetic is based on integer division and remainders. So to calculate 447 mod 5 we divide 447 by 5 and then we look at the remainder Input 2. The reason we start at 0: because a number like 550 mod 5 would have a remainder of Input 0 not of 5.

How to calculate mods: the best way to do this is to practice long division and find the integer remainder of the number.

Interactive Element: have students calculate 134 mod 8. This should be set up as a long division question where they have to put an input at each step and they find the remainder to be 6. It should look something like this (where the blue boxes are input boxes and the text in them is the correct solution):

So 134 mod 8 = Input 6

For very large numbers however, we often use a mod calculator.

So now we have an encrypted message that we can send to a receiver. But we need to make sure they can read it. This is where the private key comes in.

A private key must work with the public key so we use the same e and n values. Neither the e or n value is particularly useful on its own, and remember, the n value is actually the product of two prime numbers, which we saw before were very difficult (if not impossible) to guess for large, far apart numbers.

So we send e and n out in the open and they are received by our intended recipient, and if someone else gets them in the middle it’s not going to be of much use.

To create the private key (called d) we use this formula:

d = 1/e mod \lambda(n)

Now it’s important to note that 1/e is not 1 divided by e but is instead the modular inverse of e. To solve for this we are going to use a calculator as finding this by hand involves the Extended Euclidean Algorithm, which is beyond the scope of this lesson but more can be found here https://www.extendedeuclideanalgorithm.com/index.php

So let’s take our e value Interactive Element: the e value from before and an inverse modular calculator like the one here (https://planetcalc.com/3311/) to give an answer.

We then use that information and the value of n Interactive Element: the value of n from above

To calculate d Interactive Element: the value of d

Voila! Our private key (d).

Now we can use our value of (d), the product of two primes (n), and our public key (c), to decrypt the message (m) as:

m = c^d mod n

Interactive Element: students will input their various values and the value of m will be calculated. It should be the same m value as what they chose in the previous step.

---

In our example we encrypted a number, but what about text or other information?

Well computers actually already convert input information into numbers and then into binary; and this is the information that gets encrypted and sent.


From: https://stillthere.co/encryption

Interactive Element: using a chart like this: https://www.asciitable.com students would either type in a word and an animation would show it being converted to ASCII or they would type in a word and then click on elements in the table to convert their message to ASCII. They would then see their word appear as a series of numbers.

As you can see your word (their word from above) has been re-written as (the ASCII text from above) and we know how to encrypt a series of numbers using RSA. The computer can then transform this into binary (Link to Mathigon section on Binary) and send the message through the internet; safe in the knowledge it is secure and unreadable by anyone without a corresponding key.

---

From: (not sure where this image is from but it’s just to show an interceptor of the messages)

The public and private key exchange used in RSA allows for users to keep parts of the key hidden and away from potential interceptors but to share a public aspect that is useless without the other part. This is what makes it possible to send encrypted, secret, message through insecure means without a worry that someone will be able to decrypt it.

By using the power of prime numbers, and the near un-guessability of the factors of a product of two large primes, we are able to keep messages safe as they travel through the internet.

---

Cracking RSA (P vs NP and Quantum Computers)

Whenever anyone comes up with a new way to secure and encrypt data following right behind them are the codebreakers, and RSA is no different. Currently there are two considerations for the long term usability of RSA encryption.

The first is linked to something called the P vs NP problem, which is one of the 7 Millenium Prize Problems (valued at $1 million to whoever can solve it) Link: http://www.claymath.org/millennium-problems. The question essentially sets P as ‘easy to find’ and NP as ‘easy to check’. It then seeks to ask if we can easily/quickly check a solution then can it also be solved quickly. In RSA, we can quickly check if a given solution is correct (we just see if the value for m we get out is correct), so if we are able to quickly solve it as well, then it would be easily cracked by modern computers.

The second deals with the development of newer and faster computers. As mentioned previously, a ‘classic’ modern computer would take about 300 trillion years to crack a 2048 bit RSA encryption; but, it did crack a 768 bit RSA in about 2 years. Still a long time, but it does mean it’s doable.

From: https://www.technologyreview.com/s/612844/what-is-quantum-computing/

Enter the quantum computer. A quantum computer works on the principles of superposition (Definition: we can add quantum states together and get a new quantum state) and entanglement (Definition: that two particles or groups are connected to each other in a way that you can’t change one without affecting the other). Quantum mechanics, and quantum computing, is a whole new way of looking at how we process information. In terms of RSA, unlike a modern ‘classic’ computer that would test every prime number until it found one that was a factor of n, a quantum computer could test all the primes nearly simultaneously and determine n in a matter of seconds (not years).

But, while many people are currently working on problems like P vs NP and quantum computers we are still a long way off. The most modern version of a quantum we have currently can only handle a 2-digit factor (remember, RSA 2048 uses 617 digits) so the solution is still a long way off. But, like any form of encryption, people will keep trying to break it. Luckily we can also use these new technologies to create newer, and more secure, methods of keeping our data safe as well!
