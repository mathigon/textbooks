# Testing

## Introducing Binary Digits

> section: bracket
> sectionStatus: dev
> id: bracket

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

We can get our five-digit binary number by following any path from beginning to end. 

{.todo} // DIGITZ: could make it point to a full number, e.g. [b4](->#b4)

Please enter the number of things into the table below.

With 1 finger there are [[2]] possible combinations.

With 2 fingers there are [[4]] possible combinations.

With 3 fingers there are [[8]] possible combinations.

With 4 fingers there are [[16]] possible combinations.

With 5 fingers there are [[32]] possible combinations.

More generally, with N fingers we can represent [[2^N]] possible combinations.

---

## Converting Decimal to Binary
> section: dec2bin
> sectionStatus: dev
> id: dec2bin

How do we convert from decimal to binary? Follow the animation below.

    x-slideshow
      .stage.cheesecake(slot="stage")
        figure: include svg/ch.svg
      .legend(slot="legend") We have a full block of length 25.
      .legend(slot="legend") We always start with the leftmost digit. In this case, 16 is the largest power of 2 that can fit into 25. So first we test the 16s place.
      .legend(slot="legend") We subtract 16, so we write a *1* in the 16s place. We're left with 9.
      .legend(slot="legend") Next we test the 8s place. 
      .legend(slot="legend") We can subtract 8, so we write a *1* in the 8s place. We're left with 1.
      .legend(slot="legend") Next we test the 4s place.
      .legend(slot="legend") We cannot subtract 4, so we write a *0* in the 4s place.
      .legend(slot="legend") Next we test the 2s place.
      .legend(slot="legend") We cannot subtract 2, so we write a *0* in the 2s place.
      .legend(slot="legend") Next we test the 1s place.
      .legend(slot="legend") We can subtract 1, so we write a *1* in the 1s place. We're left with 0.


Here is that simple method put into steps. 
// BUTTER: format it
When converting decimal number N into binary:
1. Start with the highest power of 2^n, d, that you can subtract from N. 
2. If you can subtract d from N, then write a 1 in that place and continue with N = N - d.
3. If you cannot subtract d from N, then write a 0 in that place and continue with N = N.
4. Divide d by 2 to get the next digits place.
5. Repeat steps 2 through 4 until you have written the 1s place.


---

## Emoji Codes
> section: emoji-codes
> sectionStatus: dev
> id: emoji-codes

    mixin codeTable(base, emojis, letters)
      table(class=attributes.class)
        tr
          td
          -var e= 0
          while (e < base)
            td= emojis[e]
            - e+= 1
        - var r = 0
        while (r < base)
          tr
            -var d = 0
            td= emojis[r]
            while (d < base)
              td= letters[r*base + d]
              -d += 1
          - r += 1

          
### Section 1.0
##### Let's do some table stuff

    - var hearts = ['💙', '💚', '💛', '💜', '🧡']
    - var fruit = ['🍏', '🍎', '🍐', '🍊', '🍋']
    - var sports = ['⚽️', '🏀', '⚾️', '🏈', '🥎']
    - var books = [ '📕', '📗', '📘', '📙', '📒'];

    - var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']
    +codeTable(5, hearts, letters)(class="hearts")
    +codeTable(5, fruit, letters)(class="fruit")
    +codeTable(5, sports, letters)(class="sports")
    +codeTable(5, books, letters)(class="books")


##### Pick a theme and write with emojis to create a code.

    div.wtf
      p: select
        option(value="hearts", selected) Hearts 💙💚💛
        option(value="sports") Sports ⚽️🏀⚾️
        option(value="fruit") Fruit 🍎🍊🍐
        option(value="books") Books 📕📗📘
      .typeout
      // EMOJI: (1) this could be a m1x1n (see divisibility)
    div
      table.emoji-table
        tr.hearts
          td: button.emoji 💙
          td: button.emoji 💚
          td: button.emoji 💛
          td: button.emoji 💜
          td: button.emoji 🧡
          td: button.back 🔙
          td: button.clear 🚫
        tr.sports
          td: button.emoji ⚽️
          td: button.emoji 🏀
          td: button.emoji ⚾️
          td: button.emoji 🏈
          td: button.emoji 🥎
          td: button.back 🔙
          td: button.clear 🚫
        tr.fruit
          td: button.emoji 🍏
          td: button.emoji 🍎
          td: button.emoji 🍐
          td: button.emoji 🍊
          td: button.emoji 🍋
          td: button.back 🔙
          td: button.clear 🚫
        tr.books
          td: button.emoji 📕
          td: button.emoji 📗
          td: button.emoji 📘
          td: button.emoji 📙
          td: button.emoji 📒
          td: button.back 🔙
          td: button.clear 🚫

    .button.translate TRANSLATE

    div.output

---

## Transistors
> section: transistor
> sectionStatus: dev
> id: transistor

    figure: include svg/transistor_on.svg

    button.transistor SWITCH

---

## Hamming Codes
> section: hamming
> sectionStatus: dev
> id: hamming

    // HAMMING: next mimic a quiz

In this short game you have to determine the parity of a binary number, as fast as possible. Click the play button to start.

    // HAMMING: next
    .box.problem-box
      .box-title: h3 Parity Quiz
      x-gameplay.box-body
        .parity-row
          .parity-bin-number ${bin}
          | has parity value
          .parity-value
            .parity-bubble: .btn.btn-blue 0
            .parity-bubble: .btn.btn-blue 1


{.todo} see //HAMMING in triangles to animate numbers moving

---

> section: morse-demo
> sectionStatus: dev
> id: morse-demo

## Morse Demos

// iframe example
<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184253099&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

// proto- conversion box

    div.wtf
      .typeout
    div
      table.emoji-table
        tr.hearts
          td: button.dot DOT
          td: button.dash DASH
          td: button.letter LETTER
          td: button.word WORD

    .button.translate TRANSLATE

    div.output

---
> section: telegraph
> id: telegraph
### Look at this Telegraph

Here tap the telegraph.

    figure: include svg/telegraph.svg

{.todo} fix rotation point (if we decide to include)

---

> section: bin2dec
> sectionStatus: dev
> id: bin2dec

## Converting Binary to Decimal

{.todo} do a multiple step, one-step-at-a-time revealed proof, as in // ALGEBRA:


---

## SVG Experiment
> section: krii8it
> sectionStatus: dev
> id: krii8it

### Krii8it
This is a painting by a local Pittsburgh artist, [Brad Bianchi](https://www.instagram.com/krii8it/)

    x-media.background(src="images/kri8it.png" width=220 height=220)

It looks quite like a graph, doesn't it?

    p(style="margin: 0"): strong What if we animate a dot to run around it?
    .button Press Me
    // KRI8: how to get the actual painting underneath??? oh well, leave it for another time
    include svg/kri8it_paths.svg
    // x-media.background(src="images/kri8it.png")

---

## Bar Codes
> section: barcode
> sectionStatus: dev
> id: barcode


Look at this barcodes.

    svg.barcode(width=400 height=200)
      - var barClusters = [3, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 3]
      - var barWidth = 4
      - var numBars = 95
      - var totalI = 0
      g#b32
        - var i = 0
        while i < barClusters.length
          - var j = 0
          g.bar
            while j < barClusters[i]
              - var color= i%2 ? "black" : "white"
              rect(x=totalI*barWidth y=0 width=barWidth height=200)
              - j += 1
              - totalI += 1
          - i += 1

Okay bye