# Translations and Localisation

All of Mathigon's content is stored in this GitHub repository. The text, including translations, are written in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet), a special way of annotating HTML. We use a slightly different [custom syntax](markdown.md), and you can have a look at one of our existing courses like [Circles and Pi](https://raw.githubusercontent.com/mathigon/textbooks/master/content/circles-and-pi/content.md).

Every course lives in a different folder under [content/](https://github.com/mathigon/textbooks/tree/master/content). To translate a course, you have to create a copy of the `content.md` file in that folder, add the appropriate extension (e.g. `content_de.md`), and place it in the `translations/` folder for that course. You have to do the same for any `.yaml` files in the folder (e.g `hints.yaml`), as well as the YAML fiels in the [shared/](https://github.com/mathigon/textbooks/tree/master/content/shared) directory (e.g. `bios.yaml` and `glossary.yaml`).

Next, replace all the English text with the corresponding translation (but not any IDs, class names or embedded HTML code). Of course, you can start with just some sections, rather than the entire course at once.

When adding a new language for the first time, you also have to add it to the [Gulpfile](https://github.com/mathigon/textbooks/blob/master/gulpfile.js#L19), to ensure it is parsed correctly. If you're familiar with GitHub and NodeJS, you can follow [these instructions](setup.md) to run a local webserver and test your changes. Otherwise, you can also just email the translations as a text file to dev@mathigon.org.

## Automated Translations

It is possible to generate automated translations using Google Translate, while preserving all built-in tags, markup and syntax. Simply edit the constants at the beginning of [utilities/translate.js](../utilities/translate.js), including a link to a Google Cloud Service Account for the Translate API) and then run `node utilities/translate.js`.

The auto-generated files will need to be reviewed manually, paying particular attention to these common issues:

* Multiple choice questions may result in grammatical errors.
* Text inside html blocks (indented by 4 characters) is never translated.
* Markdown's bold and italic tags might no longer be valid, because Google inserts whitespace before and after them, or because we replace `*` and `**` tokens with `_` or `__`.
* YAML files like `hints.yaml`, `bios.yaml` and `glossary.yaml` are not translated by default.
