# Mathigon Textbooks

![](https://mathigon.org/images/hero.jpg)

Welcome to [Mathigon](https://mathigon.org), an award-winning mathematics education platform for
students aged 12 to 18. Part textbook and part virtual personal tutor, it uses cutting-edge
technology and an innovative new curriculum to make learning mathematics more fun and more
interactive and engaging than ever before. [Learn more…](https://www.youtube.com/watch?v=vwyIZsi0b98)

This repository contains the source code and assets for all our courses.

## Setup

![CI Tests](https://github.com/mathigon/textbooks/workflows/CI%20Tests/badge.svg)
![Code Quality](https://github.com/mathigon/textbooks/workflows/Code%20Quality/badge.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/mathigon/textbooks)
![GitHub issues](https://img.shields.io/github/issues-raw/mathigon/textbooks)

If you want to make changes or additions to this content, you can run a local Node.js server for
development. First, make sure you have NPM and Node.js (version 14+) installed on your computer,
or download them from the [official page](https://nodejs.org).

Next, clone this repository, install all dependencies, and then start a local server using these
commands:

```bash
git clone https://github.com/mathigon/textbooks
cd textbooks
npm install
npm start
```

Running `npm start` for the first time may take a few minutes, as it compiles all existing courses.
Later, it should use cached versions whenever possible. Finally, you can visit
[localhost:5000](http://localhost:5000) and select any of the chapters.

The server will watch for changes to any of the files and recompile automatically whenever
necessary (with a few exceptions like shared or YAML files).


### Contributing

We welcome any contributions to Mathigon – from bug fixes and correcting typos to creating entirely
new courses. If you find any bugs or mistakes, please [file an issue](https://github.com/mathigon/textbooks/issues).

When writing new content, make sure you follow our [content development
guide](https://www.notion.so/718073cf25bf468b9d717735884803da), which contains pedagogical
principles, style recommendations, and descriptions of interactive elements.

If you want to help us translate Mathigon into more languages, take a look at our [localisation
documentation](docs/translations.md).

Before submitting a pull request, you have to sign our [Individual Contributor
License Agreement](https://gist.github.com/plegner/5ad5b7be2948a4ad073c50b15ac01d39).

If you want to work for Mathigon, visit our [careers page](https://mathigon.org/careers), and
[contact us](mailto:dev@mathigon.org) if you have any questions.


## Documentation

### Course Structure

Every course is a subfolder in the [content](content) directory, and consists of these components:

* `content.md` contains the source code and metadata for a course. It is written in a custom
  extension of Markdown. [More documentation…](docs/markdown.md)
* `functions.ts` contains all the TypeScript code for all the interactive elements in this course.
  [More documentation…](docs/interactives.md)
* `styles.scss` contains all course-specific styles, written in [SCSS](https://sass-lang.com/).
* `hints.yaml` (optional) contains any messages that can be sent by Mathigon's virtual tutor.

The [content/shared](content/shared) directory contains biographies, glossary, web components, and
assets used by multiple courses.

### Dependencies

This repository contains all the code and content for our interactive courses. Its dependencies
include a number of separate libraries that are published on NPM. In most cases, you should not have
to make changes to these libraries directly, but it may be helpful to look at their documentation:

- [@mathigon/core](https://github.com/mathigon/core.js) contains JavaScript utilities such as
  array and string manipulation, promises, function caching, and event handling.
- [@mathigon/fermat](https://github.com/mathigon/fermat.js) is a powerful mathematics library for
  TypeScript. It contains everything from number theory to random numbers and linear algebra classes.
- [@mathigon/hilbert](https://github.com/mathigon/hilbert.js) handles expression parsing,
  simplification, and MathML rendering.
- [@mathigon/euclid](https://github.com/mathigon/euclid.js) contains Geometry classes as well as
  SVG and Canvas drawing utilities.
- [@mathigon/boost](https://github.com/mathigon/boost.js) contains browser utilities such as DOM
  selections, web components, gesture recognisers, animations, routing, multi-threading and AJAX
  requests.
- [@mathigon/studio](https://github.com/mathigon/studio) contains the base NodeJS server, TypeScript
  components and markdown parser for our interactive courses.

### Testing and Linting

Before submitting a pull request, make sure to run `npm run lint-fix`, to ensure a consistent coding
style across all files.

TODO: _Unit and screendiff tests_


## Translations and Localisation

Translations are powered by [GitLocalize](https://gitlocalize.com/repo/5711). In order to help us
translate content, you have to create a GitHub account and then [contact us](mailto:contact@mathigon.org)
to be added to the list of editors. [This blog post](https://blog.gitlocalize.com/posts/introducing-gitlocalize.html)
explains how you can use the GitLocalize platform to add new languages, translate new courses, or
fix bugs in existing translations.


## Audio Narrations

To generate audio narration files for the text in all courses, using the Google Cloud TTS API, you
first need to install [FFmpeg](https://ffmpeg.org), for example using `brew install ffmpeg`. Then
simply run `node utilities/audio.js`.

---

[![Twitter Follow](https://img.shields.io/twitter/follow/MathigonOrg?style=social)](https://twitter.com/intent/follow?screen_name=MathigonOrg)

© Mathigon 2016–2022, All rights reserved
