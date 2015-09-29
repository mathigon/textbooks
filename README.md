# Mathigon Active


## Introduction
Welcome to Mathigon! This repository is where we create


## How to Contribute
Thanks for your interest in contributing to Mathigon. There are many ways how you can help provide amazing educational content to students all around the world:
* Research and write new chapters; we have a long list of planned topics at XXX.
* Create graphics and diagrams.
* Write code for interactive problems and animations.
* Test and proofread chapters, and fix bugs and mistakes.

To contribute, you need to create a _GitHub account_, _fork_ this repository and create a _local clone_ on your computer. Now you can make changes to the code and content, _committ_ your changes, _push_ your changes to GitHub and finally create a _pull request_ back into our central repo. We will review all your pull requests with changes and then merge them back into our master.


## Documentation

### content.jade
This file is the main content of every chapter, written in [Jade](http://jade-lang.com). It could consist of a series of `<section>`s which define the progress steps throughout the chapter.

### functions.js
This file contains additional data as well all interactive content for every chapter. The file can import any of the Mathigon libraries and should export and should export an object, optionally containing `{ bio, gloss, hints, sections }`.

* `bio` should be an object of biographies indexed by an `<id>`. These can then be referenced in the textbook content as `.bio(id="<id>">)`. The biography itself should be an object containing `{ name, birth, death, img, bio }`.
* `gloss`
* `hints`
* `fns`

### Media Resources

## Style Guide
TODO

