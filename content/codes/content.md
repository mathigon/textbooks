# Codes and Ciphers

    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma

## Introduction

> section: introduction
> sectionStatus: dev
> id: intro
> goals: play

::: column.grow

In the early 2000s, the Colombian government was fighting a civil war against groups of insugents
and terrorists, who were hiding in camps in the South American rainforest. Occasionally, soldiers
were captured by these rebels, and then had to spent months or even years in captivity.

It is easy to lose hope when you’ve been chained up in a hostage camp for such a long time, unable
to see your family, and guarded by armed guerilla forces. However, in 2010, there was reason to
be hopeful: the army was approaching, and planning to rescue them shortly.

::: column(width=260)

    // https://depositphotos.com/97306690/stock-photo-jungle-in-colombian-green-mountains.html
    x-img(src="images/rainforest.jpg" width=260 heght=320)

{.fixme} IMAGE

:::

Unfortunately, it seemed impossible to tell the prisoners that help was coming, without also
alerting their capturers – that is, until Colonel Jose Espejo came up with an ingenious idea. With
his team, he wrote a new pop song, embedded a secret message in the chorus, and then played it
thousands of times over the radio.

To the rebels, it sounded just like meaningless music, but to the prisoners listening in, it was a
message of hope. See if you can spot the message – it starts around 1:30.

    figure: iframe(width="100%" height=166 scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184253099&color=%23295869&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false&download=false&show_playcount=false")


---
> id: flashlight
> goals: flashlight

There are many other examples in our world, where we want to communicate with others, but we can’t
use our voices or our text.

::: column.grow

{.fixme} Imagine you and your friend who live across the street want a way to communicate at night time, without using phones or computers and without waking your family members. You both have flashlights which can be turned either off or on. How might you communicate with each other?

{.fixme} One way we might communicate is by turning it on for different lengths of time, to represent different letters.

::: column(width=260)

{.fixme} A flashlight SVG with an on/off button (see the "conic section" section for an existing flashlight) {.caption} experiment with ways you might communicate using just a flashlight.

:::

---
> id: telegraph
> goals: press

### Morse Code

{.fixme} A similar technique was invented around the year 1837 by [Samuel Morse](bio:morse) after the invention of the [electric telegraph](gloss:telegraph).

::: column.grow

{.fixme} The electric telegraph can send electrical messages across long distances. In 1861, a wire was built across the U.S. across which messages could be sent from coast to coast nearly instantly. Before telegraphs, messages could take hundreds of days to reach one coast from the other.

{.fixme} Like in our flashlight scenario, the people who could work with telegraph could communicate in a very limited medium. Telegraphs work when you press down and connect a circut (on), or let go and disconnect the circuit (off). 

::: column(width=320)

    .telegraph
      img(src="images/telegraph-bg.jpg" width=320 height=210)
      img.handle(src="images/telegraph-handle.png" width=320 height=210)
      img.fg(src="images/telegraph-fg.png" width=320 height=210)
      svg(width=320 height=210): path(d="M-3.2,112.8c5.7-2.3,43.1-13.4,47.1-16.9l9.8-6.6c4.4-3.3,20.2-6.8,25.5-8.6,7.6-2,1.5-14.5,9.6-15,3.3.3,88.9,1.5,88.5,3a5.2,5.2,0,0,1,3.9,4.9V93.3a4.1,4.1,0,0,1-4,4.1l-92,.9a4.1,4.1,0,0,1-4.1-4c.1-3,.2-8.1-4.2-7.8l-24.2,1C40.1,89.4,30.2,106.2,22,114.6c-6.1,6.3-16.5,6.5-24.7,7.6")
    x-gesture(target=".telegraph .handle")

:::

---
> id: morse

{.fixme} Samuel Morse came up with a way to represent the letters of our alphabet by sequences of short beeps (dots) and long beeps (dashes). Each letter has a different sequence. [Morse Code](gloss:morse-code)

    .alphabet
      for letter, index in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
         strong= letter
         x-morse(char=letter)

For example, to transmit the letter E, we just have to send one [[short beep|long beep]]. To send
the letter U, we have to send [[dot-dot-dash|dot-dash-dot|dash-dash-dot]].

---
> id: morse-encoding
> goals: type

The most famous Morse code signal is “SOS”, which indicates that you have an emergency and need
help. It is consists of three dots, followed by three dashes, followed by three more dots. Try
writing other words or sentences in this box, and watch how they are encoded as Morse code:

    x-code-box
      .input(contenteditable="true" spellcheck="false") SOS
      .output.morse

---
> id: resolution
> goals: play

Morse code was also what the Colombian army used to send a message to the hostages. Translated from
Spanish, the message was _19 PEOPLE RESCUED. YOU’RE NEXT. DON’T GIVE UP._ Listen to the song once
more, and see if you can hear the dots and dashes in the background:

    figure.fixme: x-video(src="images/BetterDaysClip.mp4" poster="images/BetterDays.jpg" width=320 height=180 audio controls credit="YouTube")
    // TODO Audio rather than video, Show actual morse code while playing, score when finished

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
symbols (called _letters_). Another example we saw before is the [Morse code](gloss:morse), which
expresses words as sequences of [[dots and dashes|letters and spaces|radio music]].

---
> id: smoke-signals

But this is only the beginning, and there is a huge variety of codes that can be used for different
purposes, or to encode different kinds of information. In this course, we will explore some of the
most important and most interesting ones.

::: column.grow

Codes are not a recent invention – they were used by ancient cultures, many thousands of years ago.

For example, guards along the Great Wall of China used smoke to warn each other about potential
attacks, and different tribes of indigenous peoples in North American each had their own signalling
systems. They, too, created columns of smoke by burning damp grass, which allowed them to
communicate over long distances.

{.r} Smoke signals are even used today, for example as a distress signal at sea. When a new Pope is
elected by the College of Cardinals, the outcome of each vote is indicated by black or white smoke.
[Continue](btn:next)

::: column(width=280)

    x-img(src="images/smoke-signals.jpg" width=280 height=350 lightbox)
    // https://commons.wikimedia.org/wiki/File:John_Mix_Stanley_-_Indian_Telegraph.jpg

{.caption} Native American Smoke Signals, painted by _John Mix Stanley_

:::

---
> id: flags

There are many examples where words or letters are not the best way to express information. Here
are some other codes you might have heard of:

::: tab

#### Phonetic Alphabet

Many letters sound very similar – especially when spoken over the phone or radio, with lound
background noise. That’s why the military, police, pilots, and many others use the __NATO Phonetic
Alphabet__ when they have to spell names. Here, every individual letter is replaced with a unique
word:

    - nato = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu']
    .alphabet
      for letter in nato
        div
         strong= letter[0]
         span= letter

{.fixme} EXERCISE

::: tab

#### Maritime Flags

Ships can use __Maritime Signal Flags__, which are hung from their masts, to communicate with other
ships within sight range.

::: column(width=320)

    x-img(src="images/nautical-signal.jpg" width=320 height=225)
    // https://commons.wikimedia.org/wiki/File:Nautical_signal_flags_-_USS_Bonhomme_Richard_(LHD_6).jpg

::: column(width=320)

    x-img(src="images/nautical-flags.jpg" width=253 height=360)

:::

All flags have different colours or patterns, and represent a different letter:

    .flags
      for l in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
          img(src=`images/maritime/${l.toLowerCase()}.svg` alt=l width=50 height=50)
          strong= l

{.fixme} EXERCISE

::: tab

#### Flag Semaphore

__Flag Semaphore__ is another way to communicate using flags, which was used long befor the
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
same name. However, they didn’t like the way it looked, so they just chose four random letters
instead – spelling the word [[nuiv]].  

::: column(width=300)

    // https://en.wikipedia.org/wiki/File:Help!_(The_Beatles_album_-_cover_art).jpg
    x-img(src="images/help-album.jpg" width=300 height=300)

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

{.fixme} We can represent each of these using the letters __{.m-red} A__, __{.m-blue} T__,
__{.m-green} C__ and __{.m-yellow} G__. You may see a string of something like
__CGATCGTTACGCGATTCGATCATTTGTGTCCATCGTGGG__. This is a _code_ for a sequence of molecules within a
strand of DNA. In this case, the _letter_ is the code representing the nucleotide.

{.fixme} The same symbol can mean different things within completely different codes. For example, the letter __C__ can be represented by "Charlie" in the NATO Phonetic Alphabet, __this maritime flag__, __these arms__, or it can represent Cytosine if placed within a strand of other DNA letters.


----------------------------------------------------------------------------------------------------


## Binary Codes

> id: finger32
> section: binary
> sectionStatus: dev

### Fingers

How high can you count using only one hand, without skipping any numbers? When we count with our hands, we traditionally use how many fingers are up to represent the number. We have five fingers, so that means the highest we can count with one hand is [[five|four|ten]].

---

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

{.todo} could possibly show a // TABLE with all the extra values...

What if there was a way that we could count much higher while still using only one hand? The secret lies in something called [binary numbers](gloss:binary-numbers). Instead of using the number of fingers up as our count, we have to do something a bit more complicated. We can treat each of our fingers as a __digit__ with one of two possible values: down or up. Down can represent the number __0__ and up can represent the number __1__.

If we want to use each combination of ups and downs to represent a different number, then how many combinations can we represent?

---

### 1s and 0s

> section: bracket
> sectionStatus: dev
> id: bracket

{.fixme} off-by-one error for animation

{.todo} clear up this exposition

With each finger that we add, our number of options multiplies by two.

    svg.bracket(width=600 height=320)
      - var textb = 4
      g#b32
        - var i = 0
        while i < 32
          line(x1=500 y1=10+i*10 x2=600 y2=10+i*10)
          line(x1=500 y1=10+i*10+(i%2==0?5:-5) x2=500 y2=10+i*10)
          text(x=550 y=10+i*10-1 font-size=12)= i%2
          - i += 1
      g#b16
        - var i = 0
        while i < 16
          line(x1=400 y1=15+i*20 x2=500 y2=15+i*20)
          line(x1=400 y1=15+i*20+(i%2==0?10:-10) x2=400 y2=15+i*20)
          text(x=450 y=15+i*20-textb font-size=16)= i%2
          - i += 1
      g#b8
        - var i = 0
        while i < 8
          line(x1=300 y1=25+i*40 x2=400 y2=25+i*40)
          line(x1=300 y1=25+i*40+(i%2==0?20:-20) x2=300 y2=25+i*40)
          text(x=350 y=25+i*40-textb font-size=20)= i%2
          -i += 1
      g#b4
        - var i = 0
        while i < 4
          line(x1=200 y1=45+i*80 x2=300 y2=45+i*80)
          line(x1=200 y1=45+i*80+(i%2==0?40:-40) x2=200 y2=45+i*80)
          text(x=250 y=45+i*80-textb font-size=30)= i%2
          -i += 1
      g#b2
        - var i = 0
        while i < 2
          line(x1=100 y1=85+i*160 x2=200 y2=85+i*160)
          line(x1=100 y1=85+i*160+(i%2==0?80:-80) x2=100 y2=85+i*160)
          text(x=150 y=85+i*160-textb font-size=40)= i%2
          -i += 1
      g#b1
        - var i = 0
        while i < 1
          line(x1=0 y1=165+i*320 x2=100 y2=165+i*320)
          -i += 1


    x-slider.bracket(steps=6 speed=0.5)

--- 

We can get our five-digit binary number by following any path from beginning to end. 

{.todo} // DIGITZ: could make it point to a full number, e.g. [b4](->#b4)

Please enter the number of things into the table below.

| With __ fingers... | we can make __ possible combinations. |
| 1 | [[2]] |
| 2 | [[4]] |
| 3 | [[8]] |
| 4 | [[16]] |
| 5 | [[32]] |

More generally, with N fingers we can represent [[2^N]] possible combinations.

---

#### Fingers

Yes, there are [[32]] different combinations we can make with five fingers.

    table.finger-grid   
      for x in [0, 1, 2, 3]
        tr
          for y in [0, 1, 2, 3, 4, 5, 6, 7]
            - var n = x*8 + y
            // FINGERFADE: make this binary
            td: div.bin-finger(padding="1px")
              x-img(src="images/fingers/binary_" + (n < 10 ? "0"+n : n) + ".jpg" width=64 height=64)
              .caption= n
          

    button.appear FINGERS

(we'll find out soon why we started with zero).

---

And here are the same hands, but with their fingers shown as 1s and 0s.

    table.finger-grid
      for b0 in [0, 1]
        for b1 in [0, 1]
          tr
            for b2 in [0, 1]
              for b3 in [0, 1]
                for b4 in [0, 1]
                  - var n = b0*16 + b1*8 + b2*4 + b3*2 + b4*1
                  td: div.bin-finger(padding="1px")
                    x-img(src="images/fingers/binary_" + (n < 10 ? "0"+n : n) + ".jpg" width=60 height=60)
                    .caption= ""+b0+b1+b2+b3+b4

---

{.todo} Transistors


A [transistor](gloss:transistor) is like a switch than can be either on or off. Recall how in our morse code/flashlight examples we were constrained by the medium’s ability to be on or off. Computers store data in transistors, so they store data as a collection of ons and offs, or 1s and 0s. Just like we just did with our fingers (by putting them up or down). If a computer had fingers (up/down), they would probably count to 31 on one hand. Everything that’s stored on a computer, from text and images to video and sound is stored in transistors as sequences of 1s and 0s, or binary code.


---

### Binary to Base-Ten

Before we can understand how computers use binary code to store complex things like sound and video, we must first understand the basics, like how a base-ten number is stored.

Our number system operates as a [base ten](gloss:base-10) number system. Base ten numbers have ten possible values for each digit. 0 1 2 3 4 5 6 7 8 and 9. In a base-ten number, each digit is worth ten times as much as the previous smaller digit. The first right-most digit represents how many [[ones|tens|twos]] there are, the second right-most digit represents how many [[tens|hundreds|fives]] there are, and so on.

| number | hundreds value | tens value | ones value |
| 432 | [[400]] | [[30]] | [[2]] |
| 907 | [[900]] | [[0]] | [[7]] |

---

Recall that binary numbers do not operate on the base ten number system, but a base-two number system. They do not have ten possible digit values, they only have [[2|1|5]]. In base-ten, each digit value increases by a multiple of ten (e.g. one hundred is ten times ten). However in binary, each digit value increases by a multiple of [[2]].

Let's examine the binary number that is 5 consecutive 1s. How much is each digit worth?

| __{.m-red}digit__ | 1 | 1 | 1 | 1 | 1 |
| __{.m-green}digit value__   | [[16]] | [[8]] | [[4]] | [[2]] | [[1]] |
{.table-small.grid}

---

So the full value of binary number 11111 is not eleven thousand, one-hundred and eleven, but is 

16 + 8 + 4 + 2 + 1 = [[31]]

---

Here are some 6-digit binary numbers. Let's convert them to decimal.

{.text-center} _{.ns.b}100110_ = _{.ns.b}[[32]]_ + _{.ns.lb}0_ + _{.ns.lb}0_ + _{.ns.b}[[4]]_ + _{.ns.b}[[2]]_ + _{.ns.lb}0_ = _{.ns.b}[[38]]_

{.text-center} _{.ns.y}111000_ = _{.ns.y}[[32]]_ + _{.ns.y}[[16]]_ + _{.ns.y}[[8]]_ + _{.ns.ly}0_ + _{.ns.ly}0_ + _{.ns.ly}0_ = _{.ns.y}[[56]]_

{.text-center} _{.ns.g}101011_ = _{.ns.g}[[32]]_ + _{.ns.lg}0_ + _{.ns.g}[[8]]_ + _{.ns.lg}0_ + _{.ns.g}[[2]]_ + _{.ns.g}[[1]]_ = _{.ns.g}[[43]]_

{.fixme} which looks better???

    table.table-tiny
      tr
        td: .ns.b 100110
        td: | =
        td: .ns.b 32
        td: | +
        td: .ns.lb 0
        td: | +
        td: .ns.lb 0
        td: | +
        td: .ns.b 4
        td: | +
        td: .ns.b 2
        td: | +
        td: .ns.lb 0
        td: | =
        td: .ns.b 38
      tr
        td: .ns.y 111000
        td: | =
        td: .ns.y 32
        td: | +
        td: .ns.y 16
        td: | +
        td: .ns.y 8
        td: | +
        td: .ns.ly 0
        td: | +
        td: .ns.ly 0
        td: | +
        td: .ns.ly 0
        td: | =
        td: .ns.y 56
      tr
        td: .ns.g 101011
        td: | =
        td: .ns.g 32
        td: | +
        td: .ns.lg 0
        td: | +
        td: .ns.g 8
        td: | +
        td: .ns.lg 0
        td: | +
        td: .ns.g 2
        td: | +
        td: .ns.g 1
        td: | =
        td: .ns.g 43

The decimal value of  __{.m-blue}100110__ is [[38]].
The decimal value of __{.m-yellow}111000__ is [[56]].
The decimal value of  __{.m-green}101011__ is [[43]].

---

### Converting Base-Ten to Binary

> section: dec2bin
> sectionStatus: dev
> id: dec2bin

Now that we know how to convert a binary to decimal, how can we convert a decimal to a binary code?

Follow the slideshow below.

{.fixme} make this design more consistent with the rest of Mathigon

    x-slideshow
      .stage.cheesecake(slot="stage")
        figure: include svg/ch.svg
      .legend(slot="legend") We have a full block of length #[strong 25]f.
      .legend(slot="legend") We always start with the leftmost digit. In this case, 16 is the largest power of 2 that can fit into 25. So first we test the #[strong 16s] place.
      .legend(slot="legend") We subtract 16, so we write a #[strong 1] in the 16s place. We're left with #[strong 9].
      .legend(slot="legend") Next we test the #[strong 8s] place. 
      .legend(slot="legend") We can subtract 8, so we write a #[strong 1] in the 8s place. We're left with #[strong 1].
      .legend(slot="legend") Next we test the #[strong 4s] place.
      .legend(slot="legend") We cannot subtract 4, so we write a #[strong 0] in the 4s place.
      .legend(slot="legend") Next we test the #[strong 2s] place.
      .legend(slot="legend") We cannot subtract 2, so we write a #[strong 0] in the 2s place.
      .legend(slot="legend") Next we test the #[strong 1s] place.
      .legend(slot="legend") We can subtract 1, so we write a #[strong 1] in the 1s place. We're left with 0, and we are finished.


Here is that simple method put into steps. 
// BUTTER: format it
When converting decimal number N into binary:
1. Start with the highest power of 2^n, d, that you can subtract from N. 
2. If you can subtract d from N, then write a 1 in that place and continue with N = N - d.
3. If you cannot subtract d from N, then write a 0 in that place and continue with N = N.
4. Divide d by 2 to get the next digits place.
5. Repeat steps 2 through 4 until you have written the 1s place.


---

### References in Culture and Whatnot

We've seen decimal, we've seen binary, but you can create a number system with any base. Cmoputers use something called a "hexidecimal" or base-16 number system to store colors. (// TODO: image of color palette with their hexidecimal colors on the right.)

Computers.


__There are 10 types of people in the world: those who understand binary numbers, and those who don't.__

Sports leagues often use tournaments where the number of teams is a power of two. The NCAA basketball tournament begins with 64 teams. Each round, half of the teams are eliminated. The rounds of 16, 8, and 4 are called respectively the Sweet Sixteen, the Elite Eight, and the Final Four. (// TODO: image of bracket)

The I-Ching is an ancient Chinese divination text. Each I-Ching "Hexagram" is made of six horizontal lines, each of which can be either solid (Yang) or divided (Yin). There are 64 possible Hexagrams (2^6). (// TODO: image of I-Ching)



### Bonus: Binary Brain Teasers
Name the band represented by each puzzle:

{.todo} Matchbox 20, Blink 182, M83, Maroon 5

### Conclusion
{.todo} Conclusion


----------------------------------------------------------------------------------------------------


## Error Detection 

> section: error-detection
> sectionStatus: dev

{.todo} Satellite Communications

---

{.todo} Bar Code

---

{.todo} CDs and DVDs


----------------------------------------------------------------------------------------------------


## Secret Codes

> section: cryptography
> sectionStatus: dev

https://plus.maths.org/content/cracking-codes

Some codes are designed in a way that only

Alice and Bob

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
> id: caesar_cipher

### The Caesar Cipher

{.todo} TODO

The diagram below shows how plaintext letters [{.letter.plain} *] are converted
into cipher letters [{.letter.cipher} *]. The chart also shows the relative
frequency of every letter in your text, as well as the entire english language.

    .code-play
      .freq-table-wrap
        .freq-table
          .freq-table-chart
            each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
              .freq-col
                .letter-bar.plain
                .letter-bar.real
          .freq-table-plain
            each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
              .freq-col: .letter.plain= l
          .freq-table-cipher
            each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
              .freq-col
            #letter-slider(data-slide-width="26")
              each l in ('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')
                .freq-col: .letter.cipher= l
      .row
        .code-area.grow
          h3.code-title Plain Text
          .plain-text(contenteditable="true", placeholder="Start typing to create your first cypher …")
        .code-area.grow
          h3.code-title Enciphered Text
          .cipher-text

Once you know the pattern the Caesar cipher is very easy to break: you just have
to try all <25> possibilities. Try to decode the following secret messages:

{.todo} TODO

---

### Substitution Cipher

It is not hard to make the Caesar cipher more secure: rather than shifting the
letters we could scramble all of them randomly. Now there are not only 25 but
26! = 403,291,461,126,605,635,584,000,000 possibilities. Even using a computer
it would take very long to check all possible combinations.

{.todo} Substitution Cipher Encoding Interactive

---

But it turns out that if we have a sufficiently long section of text, even the
substitution cipher is easy to crack – using what we know about the language of
the original plaintext.

In every language, some letters are more common than others. This means that the
ciphertext should also contain some letters more often than others.

{.todo} Substitution Cipher Decoding Setp-by-step demo

---

Now it is your turn: try decoding the following messages which have been encoded 
using substitution ciphers:

{.todo} Substitution Cipher Decoding Interactive

---

### One Time Pads

{.todo} TODO

---

### The Vigenère Cipher

{.todo} TODO


----------------------------------------------------------------------------------------------------


## The Enigma

> section: enigma
> sectionStatus: dev

http://plus.maths.org/content/exploring-enigma

{.todo} TODO

    include ./components/enigma
    x-enigma


----------------------------------------------------------------------------------------------------


## Public Key Cryptography

> section: rsa
> sectionStatus: dev

{.todo} TODO
