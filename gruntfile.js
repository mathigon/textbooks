// =============================================================================
// Grunt Configuration
// (c) Mathigon
// =============================================================================



const grunt = require('grunt');
const rollup = require('rollup');
const rollupResolve = require('rollup-plugin-node-resolve');


// -----------------------------------------------------------------------------
// Plugins and Setup

grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-concurrent');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
require('@mathigon/parser')(grunt);

grunt.registerMultiTask('rollup', '', function() {
  const done = this.async();

  function onwarn(error) {
    if (error.code !== 'CIRCULAR_DEPENDENCY') grunt.log.error(error.message);
  }

  const promises = this.files.map(f => {
    return rollup.rollup({input: f.src[0], plugins: [rollupResolve()], onwarn})
      .then(bundle => bundle.generate({format: 'iife', name: '_stepFunctions'}))
      .then(result => grunt.file.write(f.dest, result.output[0].code));
  });

  Promise.all(promises)
    .then(() => done())
    .catch(error => grunt.fail.warn(error));
});


// -----------------------------------------------------------------------------
// Grunt Configuration

grunt.initConfig({

  less: {
    options: {
      rootpath: ['server/assets'],
      paths: ['server/assets'],
      optimisation: 1,
      banner: '/* (c) Mathigon */\n'
    },
    app: {
      files: [{
        expand: true,
        cwd: 'content',
        src: ['*/*.less', '!node_modules/**'],
        dest: 'server/assets/resources',
        ext: '.css'
      }]
    }
  },

  autoprefixer: {
    app: {
      files: [{
        expand: true,
        src: 'server/assets/resources/**/*.css'
      }]
    }
  },

  textbooks: {
    options: {languages: ['en', 'ru', 'vn', 'cn', 'de'], cache: true},
    app: {
      files: [{
        expand: true,
        cwd: 'content',
        src: ['*', '!shared'],
        dest: 'server/assets/resources'
      }]
    }
  },

  rollup: {
    app: {
      files: [{
        expand: true,
        cwd: 'content',
        src: '*/functions.js',
        dest: 'server/assets/resources'
      }]
    }
  },

  watch: {
    css: {
      files: ['content/**/*.less'],
      tasks: ['less', 'autoprefixer']
    },
    js: {
      files: ['content/**/*.js'],
      tasks: ['rollup']
    },
    textbooks: {
      files: ['content/**/*.md', 'content/**/*.yaml'],
      tasks: ['textbooks']
    }
  },

  concurrent: {
    options: {limit: 3, logConcurrentOutput: true},
    app: { tasks: ['watch:css', 'watch:js', 'watch:textbooks'] }
  }
});

grunt.registerTask('default', ['less', 'autoprefixer', 'textbooks', 'rollup']);
