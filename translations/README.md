# Translations

## Development Roadmap

* [x] Translate course content (including shared glossary and biographies)
* [x] Translate course UI text
* [x] Translate sitewide UI text (header, login, homepage, dashboards, …)
* [X] Improved URLs for other languages (`de.mathigon.org` rather than `?hl=de`)
* [ ] Translate curriculum.yaml document and indicate which translations are missing
* [ ] RTL support for Arabic and Hebrew
* [ ] Translate JavaScript functions like `numberToString()`

## Manual Translations

All of Mathigon's content is stored in this GitHub repository. The text, including translations, are written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), a special way of annotating HTML. We use some additional, custom syntax which is [documented here](https://mathigon.io/markdown), and you can have a look at one of our existing courses like [Circles and Pi](https://raw.githubusercontent.com/mathigon/textbooks/master/content/circles-and-pi/content.md).

Every course lives in a different folder under [content/](https://github.com/mathigon/textbooks/tree/master/content). To translate a course, you have to create a copy of the `content.md` file in that folder, add the appropriate extension (e.g. `content_de.md`), and place it in the `translations/` folder for that course. You have to do the same for any `.yaml` files in the folder (e.g `hints.yaml`), as well as the YAML fiels in the [shared/](https://github.com/mathigon/textbooks/tree/master/content/shared) directory (e.g. `bios.yaml` and `glossary.yaml`).

Next, replace all the English text with the corresponding translation (but not any IDs, class names or embedded HTML code). Of course, you can start with just some sections, rather than the entire course at once.

When adding a new language for the first time, you also have to add it to the [Gulpfile](https://github.com/mathigon/textbooks/blob/master/gulpfile.js#L20), to ensure it is parsed correctly. If you're familiar with GitHub and NodeJS, you can follow [these instructions](https://github.com/mathigon/textbooks/blob/master/README.md) to run a local webserver and test your changes. Otherwise, you can also just email the translations as a Word document to dev@mathigon.org.

## Automated Translations

The scripts in this folder can help generating draft translations using Google Translate, while preserving all built-in tags, markup and syntax.

Here are the steps to generate them:

1. Copy a markdown source file as `input.md` into this repository.
2. Run the script `node translations/encode.js`. This should generate a new `translate.md` file.
3. Manually translate this new file by copying it into [Google Translate](https://translate.google.com). Note that Google has a 5000 character limit, and the file is already divided into appropriately-sized segments which are separated using `======`s.
4. Run the script `node translations/decode.js` to covert the translated file into a valid markdown document with all custom tags restored.

Note that the script might miss some words, and that Google's translations might not be perfect. In particular:

* Text inside html blocks (indented by 4 characters) is never translated.
* Only the correct, first answer of multiple choice questions is translated.
* Markdown's bold and italic tags might no longer be valid, because Google inserts whitespace before and after them.
