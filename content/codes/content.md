# Codes and Ciphers

    // SOURCES:
    // http://plus.maths.org/content/cracking-codes
    // http://plus.maths.org/content/exploring-enigma
    // http://nrich.maths.org/2198

## Simple Codes

__Information__ is everywhere around us, but it is difficult to define what
exactly "information" _means_. Instead we can give examples of things that
contain information: books and newspapers, numbers and charts, images, sound or
film clips.

    .row
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
      div(style="width: 80px"): img(width="100", height="100", src="xyz")
    
__Codes__ are rules or algorithms to express information in certain formats. Our
alphabet is a example of a code can can be used to express _language_ in the
form of _letters_.

Sometimes letters are not the best format to express information, and we can use
other codes. In this course we will discover some of these codes as well as the
algorithms to encode and decode messages.

---

### Morse Code

{.todo} TODO

---

### Binary Codes

{.todo} TODO

---

### Create your own Codes

{.todo} TODO

---

## Error Correction and Error Detection

{.todo} Bar Code

{.todo} Satellite Communications

{.todo} CDs and DVDs

---

## Cryptography

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

---

## The Enigma

{.todo} TODO

---

## RSA Cryptography

{.todo} TODO

---

## Quantum Cryptography

{.todo} TODO
