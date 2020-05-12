# Testing

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

    svg.barcode(width=400 height=220)
      - var barClusters = [3, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 7, 7, 7, 3]
      - var barWidth = 4
      - var numBars = 95
      - var totalI = 0
      - var height = 200
      g#bars
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

Okay bye.
BARCODE: /// next, add numbers at the bottom. Make edges longer. How? variable?


---

## Hamming Codes
> section: ham1
> sectionStatus: dev
> id: ham1


Here's a digit

    .hamming
      include svg/h8.svg

    .hamming
      include svg/h12.svg