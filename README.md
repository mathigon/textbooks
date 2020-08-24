# Mathigon Textbooks

![](https://mathigon.org/images/hero.png)

Welcome to [Mathigon](https://mathigon.org), an award-winning mathematics education platform for
students aged 12 to 18. Part textbook and part virtual personal tutor, it uses cutting-edge
technology and an innovative new curriculum to make learning mathematics more fun and more
interactive and engaging than ever before. [Learn more…](https://www.youtube.com/watch?v=vwyIZsi0b98)

This repository contains the source code and assets for all our courses.

## Course Structure

Every course is a subfolder in the [content](content) directory, and consists of these components:

* `content.md` contains the source code and metadata for a course. It is written in a custom
  extension of Markdown. [Docs…](docs/markdown.md)
* `functions.ts` contains all the TypeScript code for all the interactive elements in this course.
  [Docs…](docs/interactives.md)
* `styles.less` contains all course-specific styles, using [LESS](http://lesscss.org/) format.
* `hints.yaml` (optional) contains any messages that can be sent by Mathigon's virtual tutor.

The [content/shared](content/shared) directory contains biographies, glossary, web components, and
assets used by multiple courses.

If you want to make changes or additions to this content, you can run a local Node.js server for
development. Simply follow our [setup instructions](docs/setup.md).

## Contributing

[![Build Status](https://travis-ci.org/mathigon/textbooks.svg?branch=master)](https://travis-ci.org/mathigon/textbooks)
![GitHub repo size](https://img.shields.io/github/repo-size/mathigon/textbooks)
![GitHub issues](https://img.shields.io/github/issues-raw/mathigon/textbooks)

We welcome any contributions to Mathigon – from bug fixes and correcting typos to creating entirely
new courses. If you find any bugs or mistakes, please [file an issue](https://github.com/mathigon/textbooks/issues).

When writing new content, make sure you follow our [content development
guide](https://www.notion.so/718073cf25bf468b9d717735884803da), which contains pedagogical
principles, style recommendations, and descriptions of interactive elements.

If you want to help us translate Mathigon into more languages, take a look at our [localisation
documentation](docs/translations.md).

Before submitting a pull request, you will need to sign the [Mathigon Individual Contributor
License Agreement](https://gist.github.com/plegner/5ad5b7be2948a4ad073c50b15ac01d39).

If you want to work for Mathigon, visit our [careers page](https://mathigon.org/careers), and
[contact us](mailto:dev@mathigon.org) if you have any questions.

---

[![Twitter Follow](https://img.shields.io/twitter/follow/MathigonOrg?style=social)](https://twitter.com/intent/follow?screen_name=MathigonOrg)

© Mathigon 2016–2020, All rights reserved
