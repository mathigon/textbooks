// =============================================================================
// Mathigon Textbooks Gulpfile
// (c) Mathigon
// =============================================================================


const gulp = require('gulp');
const rollup = require('gulp-better-rollup');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const autoprefixer = require('autoprefixer');

const gulpTextbooks = require('@mathigon/parser').gulp;
const tsconfig = require('./tsconfig.json');
const LANGUAGES = ['en', 'es', 'vn', 'cn', 'tr', 'de'];


function markdown() {
  return gulp.src(['*', '!{shared}'], {cwd: `content`})
      .pipe(gulpTextbooks(LANGUAGES, true))
      .pipe(gulp.dest('server/assets/resources'));
}

function scripts() {
  return gulp.src(['*/*.ts', '!{shared}'], {cwd: `content`})
      .pipe(rollup({
        external: ['vue'],
        plugins: [typescript(tsconfig.compilerOptions), resolve()],
        onwarn(e) {
          if (e.code !== 'CIRCULAR_DEPENDENCY') console.warn(e.message);
        }
      }, {format: 'iife', name: 'CourseApp', globals: {vue: 'Vue'}}))
      // .pipe(gulpRename({extname: '.js'}))
      .pipe(gulp.dest('server/assets/resources'));
}

function stylesheet() {
  return gulp.src(['*/styles.less', '!{shared}'], {cwd: `content`})
      .pipe(less())
      .pipe(postcss([autoprefixer()]))
      // .pipe(gulpRename({extname: '.css'}))
      .pipe(gulp.dest('server/assets/resources'));
}

exports.default = () => {
  gulp.watch('content/*.{md,yaml}', {ignoreInitial: false}, markdown);
  gulp.watch('content/**.ts', {ignoreInitial: false}, scripts);
  gulp.watch('content/**.less', {ignoreInitial: false}, stylesheet);
};
