# Mathigon Active


## Introduction
Welcome to Mathigon! This repository contains all the textbook content for http://mathigon.org, including text, code, styling as well as image and media resources.

![Creative Commons Attribution-ShareAlike license](https://licensebuttons.net/l/by-nc-sa/3.0/88x31.png "CC BY-NC-SA")

All text and code in this repo is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike license (CC BY-NC-SA) version 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Note that some third-party images or media may have more restrictive licenses.

## How to Contribute
Thanks for your interest in contributing to Mathigon. There are many ways how you can help provide amazing educational content to students all around the world:
* Research and write new chapters.
* Create graphics and diagrams.
* Write code for interactive problems and animations.
* Test and proofread chapters, and fix bugs and mistakes.

To contribute, you need to create a _GitHub account_, _fork_ this repository and create a _local clone_ on your computer. Now you can make changes to the code and content, _committ_ your changes, _push_ your changes to GitHub and finally create a _pull request_ back into our central repo. We will review all your pull requests with changes and then merge them back into our master.


## Documentation

We're still working on more detailed documentation!

### content.jade
This file is the main content of every chapter, written in [Jade](http://jade-lang.com). It could consist of a series of `<section>`s which define the progress steps throughout the chapter.

### functions.js
This file contains additional data as well all interactive content for every chapter. The file can import any of the Mathigon libraries and should export and should export an object, optionally containing `{ bio, gloss, hints, sections }`.

* `bio` should be an object of biographies indexed by an `<id>`. These can then be referenced in the textbook content as `.bio(id="<id>">)`. The biography itself should be an object containing `{ name, birth, death, img, bio }`.
* `gloss`
* `hints`
* `fns`
