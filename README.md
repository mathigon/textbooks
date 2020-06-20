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

First, make sure you have Node installed in your environment before continue with the setup. You can check if Node is already installed by running the `node -v` command.

If Node is not yet installed, please download and follow instructions for installation from its [official page](https://nodejs.org/en/).

After forking and cloning this repository, install all dependencies using
`npm install`.

Now you can start a local development server by running `npm start`. Wait for
the assets to be compiled and then open [localhost:5000](http://localhost:5000).
The server will automatically watch for file changes.

Every course is a subfolder in the [content](content) directory. The URL of the
[Sequences course](content/sequences), for example, will be
[localhost:5000/course/sequences](http://localhost:5000/course/sequences).


## Course Structure

Every course consists of a few different components:

* `content.md` contains the source code and metadata for a course. It is
  written in a [custom extension](https://mathigon.io/markdown) of
  [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
* `functions.ts` contains all course-specific TypeScript code.
* `styles.less` contains all course-specific styles, in
  [LESS](http://lesscss.org/) format.
* `hints.yaml` (optional) contains any messages that can be sent by Mathigon's
  virtual personal tutor.
* `concepts.yaml` (optional) contains parts of Mathigon's internal knowledge
  tree for this topic.

The [shared directory](content/shared) contains biographies, glossary and assets
used by multiple courses.

Every course is divided into multiple steps, each with a unique ID. These IDs
are used as function names in `functions.ts` when exporting the setup code
for every section. Every function gets called with a `$step` argument, when
the corresponding step is revealed for the first time. Check
[types.d.ts](content/shared/types.d.ts) for the available properties and
methods.

The [server directory](server) contains a simplified version of Mathigon's web
server. It is used for local testing, but should not usually be modified.


## Contributing

We welcome any contributions to Mathigon – from bug fixes and correcting typos
to creating entirely new courses. If you find any errors or problems, please
[file an issue](https://github.com/mathigon/textbooks/issues). For larger
changes, please [contact us](mailto:dev@mathigon.org) before starting your work.

Before submitting a pull request, you will need to sign the [Mathigon Individual
Contributor License Agreement](https://gist.github.com/plegner/5ad5b7be2948a4ad073c50b15ac01d39).

You can find out more on [Mathigon.io](https://mathigon.io).

---

© Mathigon 2016–2020, All rights reserved
