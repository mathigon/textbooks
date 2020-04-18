# Codes and Ciphers

    // SOURCES:
    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma
    // http://nrich.maths.org/2198

## Introduction

> section: introduction
> sectionStatus: dev

{.fixme} Imagine you’re in the jungle, being held hostage. You’ve been there for three months and you’re losing hope. You just want to be free and see your family again. A song comes on the radio. You hear a secret message in the song that gives you reason to believe you will be rescued soon. But your captors have no idea. How might you get this message that someone else can’t hear?

{.fixme} Listen to a clip of this song and see if you can find a hidden message:

    figure: iframe(width="100%" height=166 scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184253099&color=%23295869&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&sharing=false&download=false&show_playcount=false")

---

{.fixme} There are many other situations where we want to communicate, but we can't use our voices or text.
Imagine that there's been a power outage in the night, and your phone doesn't work. Your friend
lives across the street, and you can see his window…

---

### Morse Code

{.fixme} A similar technique was invented in XXX by XXXX. A few years earlier, the telegraph was invented,
and engineers 

{.fixme} This secret language is just like something called Morse Code, which was used in the invention of the telgegraph.

---
> id: telegraph

::: column.grow

{.fixme} The telegraph can send electrical messages across long distances. Telephone wires span the country, allowing messages to go from one part of the country to another. Before the telegraph, the fastest way to get your message across was the sending letters through the mail? Or  Or train? << Look this up >>.

{.fixme} Like in our flashlight scenario, the people who could work with telegraph could communicate in a very limited medium. Telegraphs work when you press down and connect a circut (on), or let go and disconnect the circuit (off). 

::: column(width=320)

    .telegraph
      img(src="images/telegraph-bg.jpg" width=320 height=210)
      img.handle(src="images/telegraph-handle.png" width=320 height=210)
      img.fg(src="images/telegraph-fg.png" width=320 height=210)
      svg(width=320 height=210): path(d="M-3.2,112.8c5.7-2.3,43.1-13.4,47.1-16.9l9.8-6.6c4.4-3.3,20.2-6.8,25.5-8.6,7.6-2,1.5-14.5,9.6-15,3.3.3,88.9,1.5,88.5,3a5.2,5.2,0,0,1,3.9,4.9V93.3a4.1,4.1,0,0,1-4,4.1l-92,.9a4.1,4.1,0,0,1-4.1-4c.1-3,.2-8.1-4.2-7.8l-24.2,1C40.1,89.4,30.2,106.2,22,114.6c-6.1,6.3-16.5,6.5-24.7,7.6")

:::

{.fixme} XXX came up with a way to change the letters of our alphabet into sequences of short and long XXX.
These could be transmitted

    .alphabet
      for letter, index in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
        div
         strong= letter
         x-morse(char=letter)

{.fixme} For example… 
To signal an E you would make a [dot|dash] <<< AUDIO + 
To signal a Y you would make a [dash dot dash dash | dot whatever]

---
> id: morse-encoding

{.fixme} The most well-known message sent in Morse Code is “SOS”, which is the emergency help message. SOS can be sent by 3 dots (S), 3 dashes (O), and 3 dots (S).

    x-code-box
      .input(contenteditable="true" spellcheck="false") SOS
      .output.morse

{.fixme} Resolve music

---

### Codes and Information

{.todo} TODO

{.fixme} __Information__ is everywhere around us, but it is difficult to define what
exactly "information" _means_. Instead we can give examples of things that
contain information: books and newspapers, numbers and charts, images, sound or
film clips.

{.fixme} __Codes__ are rules or algorithms to express information in certain formats. Our
alphabet is a example of a code can can be used to express _language_ in the
form of _letters_.

{.fixme} Sometimes letters are not the best format to express information, and we can use
other codes. In this course we will discover some of these codes as well as the
algorithms to encode and decode messages.

---

### More Examples

{.todo} TODO


----------------------------------------------------------------------------------------------------


## Binary Numbers

> section: binary
> sectionStatus: dev

{.todo} Computers

---

{.todo} Finger Codes

---

{.todo} What are binary numbers

---

{.todo} Create your own code


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
