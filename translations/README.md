# Translation Utilities

The scripts in this folder can help generating draft translations using
Google Translate, while preserving all built-in tags, markup and syntax.

Here are the steps to generate them:

1. Copy a markdown source file as `input.md` into this repository.
2. Run the script `node translations/encode.js`. This should generate a new
   `translate.md` file.
3. Manually translate this new file by copying it into [Google
   Translate](https://translate.google.com). Note that Google has a 5000
   character limit, and the file is already divided into appropriately-sized
   segments which are separated using `======`s.
4. Run the script `node translations/decode.js` to covert the translated
   file into a valid markdown document with all custom tags restored.

Note that the script might miss some words, and that Google's translations
might not be perfect. In particular:

* Text inside html blocks (indented by 4 characters) is never translated.
* Only the correct, first answer of multiple choice questions is translated.
* Markdown's bold and italic tags might no longer be valid, because Google
  inserts whitespace before and after them.
