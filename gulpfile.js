// =============================================================================
// Mathigon Textbooks Gulpfile
// (c) Mathigon
// =============================================================================


const path = require('path');
const pug = require('pug');
const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const {nodeResolve} = require('@rollup/plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const autoprefixer = require('autoprefixer');
const gulpTextbooks = require('@mathigon/parser').gulp;
const rtl = require('postcss-rtl');

const LANGUAGES = ['en'/*, 'ar', 'az', 'ca', 'cn', 'de', 'es', 'fr', 'hi', 'hr',
  'it', 'ja', 'pt', 'ro', 'ru', 'sv', 'tr', 'vi'*/];
const CACHE = __dirname + '/build/.cache.json';


const pugRollup = {
  name: 'rollup-pug-plugin',
  transform(code, filename) {
    if (path.extname(filename).toLowerCase() !== '.pug') return;
    const compiled = pug.compile(code, {filename, doctype: 'html'})({});
    return {code: 'export default ' + JSON.stringify(compiled)};
  }
};


function markdown() {
  return gulp.src(['content/*/', '!content/shared/'])
      .pipe(gulpTextbooks(LANGUAGES, CACHE))
      .pipe(gulp.dest('build'));
}

function scripts() {
  return gulp.src(['content/*/*.ts', '!content/shared/**'])
      .pipe(rollup({
        plugins: [nodeResolve(), typescript(), pugRollup],
        onwarn(e) {
          if (e.code !== 'CIRCULAR_DEPENDENCY') console.warn(e.message);
        }
      }, {format: 'iife', name: 'StepFunctions'}))
      .pipe(rename({extname: '.js'}))
      .pipe(gulp.dest('build'));
}

const RTL_BLACKLIST = ['background', 'background-color', 'background-image',
  'background-repeat', 'background-size', 'cursor'];

function stylesheets() {
  return gulp.src(['content/*/*.less', '!content/shared/**'])
      .pipe(less())
      .pipe(postcss([rtl({blacklist: RTL_BLACKLIST}), autoprefixer()]))
      .pipe(rename({extname: '.css'}))
      .pipe(gulp.dest('build'));
}

exports.watch = () => {
  // TODO Also listen to YAML and SVG dependencies of .md files
  gulp.watch('content/**/*.md', markdown);
  gulp.watch('content/**/*.{ts,pug}', scripts);
  gulp.watch('content/**/*.less', stylesheets);
};

exports.default = gulp.parallel(markdown, scripts, stylesheets);
