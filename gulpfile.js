// =============================================================================
// Mathigon Textbooks Gulpfile
// (c) Mathigon
// =============================================================================


const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const autoprefixer = require('autoprefixer');
const gulpTextbooks = require('@mathigon/parser').gulp;
const tsconfig = require('./tsconfig.json');
const rtl = require('postcss-rtl');

const LANGUAGES = ['en',  'ar', 'cn', 'de', 'es', 'fr', 'hi', 'it', 'ja', 'pt',
  'ru', 'sv', 'tr', 'vi', 'fa', 'mr', 'ro', 'hr'];
const CACHE = __dirname + '/content/.cache.json';


function markdown() {
  return gulp.src(['content/*/', '!content/shared/'])
      .pipe(gulpTextbooks(LANGUAGES, CACHE))
      .pipe(gulp.dest('server/assets/resources'));
}

const TSConfig = Object.assign({}, tsconfig.compilerOptions,
    {include: ['../*.ts', '../**/*.ts']});

function scripts() {
  return gulp.src(['content/*/*.ts', '!content/shared/**'])
      .pipe(rollup({
        plugins: [resolve({mainFields: ['main:ts', 'module', 'main']}),
          typescript(TSConfig)],
        onwarn(e) {
          if (e.code !== 'CIRCULAR_DEPENDENCY') console.warn(e.message);
        }
      }, {format: 'iife', name: 'StepFunctions'}))
      .pipe(rename({extname: '.js'}))
      .pipe(gulp.dest('server/assets/resources'));
}

const RTL_BLACKLIST = ['background', 'background-color', 'background-image',
  'background-repeat', 'background-size', 'cursor'];

function stylesheets() {
  return gulp.src(['content/*/*.less', '!content/shared/**'])
      .pipe(less())
      .pipe(postcss([rtl({blacklist: RTL_BLACKLIST}), autoprefixer()]))
      .pipe(rename({extname: '.css'}))
      .pipe(gulp.dest('server/assets/resources'));
}

exports.watch = () => {
  gulp.watch('content/**/*.{md,yaml}', markdown);
  gulp.watch('content/**/*.ts', scripts);
  gulp.watch('content/**/*.less', stylesheets);
};

exports.default = gulp.parallel(markdown, scripts, stylesheets);
