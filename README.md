# Mathigon Textbooks

![](https://mathigon.org/images/hero.png)

Welcome to [Mathigon](https://mathigon.org)! This repository contains the source
code and assets for all our interactive textbooks.

Mathigon is an award winning new mathematics education platform for students
aged 12 to 18. Part textbook and part virtual personal tutor, it uses
cutting-edge technology and an innovative new curriculum to make learning
mathematics more fun and more interactive.

![](https://mathigon.org/images/unused/divider-1.png)


## Getting Started

After forking and cloning this repository, install all dependencies using
`npm install`.

Now you can start a local development server by running `npm start`. Wait for
the assets to be compiled and then open [localhost:5000](http://localhost:5000).
The server will automatically watch for file changes.

Every chapter is a subfolder in the [content](tree/master/content) directory.
The corresponding URL is `localhost:5000/course/<chapter_name>`.

![](https://mathigon.org/images/unused/divider-2.png)


## Chapter Structure

Every chapter consists of a few different components:

* `content.md` contains the source code and metadata for every chapter. It is
  written in a [custom extension](wiki/content.md) of
  [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* `functions.js` contains all chapter-specific JavaScript code.
* `styles.less` contains all chapter-specific styles, in
  [LESS](http://lesscss.org/) format.
* `hints.yaml` (optional) contains any messages that can be sent by Mathigon's
  virtual personal tutor.
* `concepts.yaml` (optional) contains parts of Mathigon's internal knowledge
  tree for this topic.

The [shared folder](tree/master/content/shared) contains biographies, glossary
and assets used by multiple chapters.

Every chapter is divided into multiple steps, each with a unique ID. These IDs
are used as function names in `functions.js` when exporting the setup code
for every section.

![](https://mathigon.org/images/unused/divider-3.png)


## Contributing

We welcome any contributions to Mathigon – from bug fixes and correcting typos
to creating entirely new chapters. If you find any errors or problems, please
[file an issue](issues). For larger changes, please
[contact us](mailto:dev@mathigon.org) before starting your work.

You can find out more on [Mathigon’s contributions
page](https://mathigon.org/contribute).

![](https://mathigon.org/images/unused/divider-4.png)


## License

All original text and code is licensed under a [Creative Commons
Attribution-NonCommercial-NoDerivatives license (CC BY-NC-ND)
version 4.0](https://spdx.org/licenses/CC-BY-NC-ND-4.0.html). Third-party images
and media resources may have more restrictive licenses.

![Creative Commons Attribution-NoDerivatives
license](https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png "CC BY-NC-SA")
