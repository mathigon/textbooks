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

const LANGUAGES = ['en', 'es', 'vn', 'cn', 'tr', 'de', 'fr'];
const CACHE = __dirname + '/content/.cache.json';

const connect = require('gulp-connect');


function markdown() {
  return gulp.src(['content/*/', '!content/shared/'])
      .pipe(gulpTextbooks(LANGUAGES, CACHE))
      .pipe(gulp.dest('server/assets/resources'));
}

function scripts() {
  return gulp.src(['content/*/*.ts', '!content/shared/**'])
      .pipe(rollup({
        plugins: [typescript(tsconfig.compilerOptions), resolve()],
        onwarn(e) {
          if (e.code !== 'CIRCULAR_DEPENDENCY') console.warn(e.message);
        }
      }, {format: 'iife', name: 'StepFunctions'}))
      .pipe(rename({extname: '.js'}))
      .pipe(gulp.dest('server/assets/resources'));
}

function stylesheets() {
  return gulp.src(['content/*/*.less', '!content/shared/**'])
      .pipe(less())
      .pipe(postcss([autoprefixer()]))
      .pipe(rename({extname: '.css'}))
      .pipe(gulp.dest('server/assets/resources'));
}

gulp.task('serveprod', function() {
  connect.server({
    root: ['.'],
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  })

});

exports.watch = () => {
  gulp.watch('content/**/*.{md,yaml}', markdown);
  gulp.watch('content/**/*.ts', scripts);
  gulp.watch('content/**/*.less', stylesheets);
};

exports.default = gulp.parallel(markdown, scripts, stylesheets);
