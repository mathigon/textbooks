# Setup

If you want to make changes or additions to our content, you can run a local Node.js server for
development. First, make sure you have NPM and Node.js (version 12+) installed on your computer,
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

The server will watch for changes to any of the files and recompile automatically whenever necessary
(with a few exceptions, like YAML files).

## Testing and Linting

Before submitting a pull request, make sure to run `npx eslint . --ext .ts --fix`, to ensure a
consistent coding style across all files.

TODO: _Unit and screendiff tests_

## Dependencies

This repository contains all the code and content for our interactive courses. Its dependencies
include a number of separate libraries that are published on NPM. In most cases, you should not have
to make changes to these libraries directly, but it may be helpful to look at their documentation:

- [@mathigon/core](https://github.com/mathigon/core.js) contains JavaScript utilities such as
  array and string manipulation, promises, function caching, and event handling.
- [@mathigon/fermat](https://github.com/mathigon/fermat.js) is a powerful mathematics, statistics
  and geometry library for TypeScript. It contains everything from number theory to random numbers,
  expression parsing and linear algebra classes.
- [@mathigon/hilbert](https://github.com/mathigon/hilbert.js) handles expression parsing,
  simplification, and MathML rendering.
- [@mathigon/boost](https://github.com/mathigon/boost.js) contains browser utilities such as DOM
  selections, web components, gesture recognisers, animations, routing, multi-threading and AJAX
  requests.
- [@mathigon/parser](https://github.com/mathigon/parser) is our custom markdown parser.
- [@mathigon/dev-server](https://github.com/mathigon/dev-server) is a Node.js server for running
  Mathigon's textbooks locally.

## Translations

To generate automated translations for a specific course, follow [these instructions](translations.md)
and then run `node utilities/translate.js`,

## Audio Narrations

To generate audio narration files for the text in all courses, using the Google Cloud TTS API, you
first need to install [FFmpeg](https://ffmpeg.org), for example using `brew install ffmpeg`. Then
simply run `node utilities/audio.js`.
