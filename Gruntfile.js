// Generated on 2014-01-19 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: assets/css
//   sass: assets/_scss
//   javascript: assets/js
//   images: assets/img
//   fonts: assets/fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },

    livestyle: {
      root: '.tmp',

      browsers: ['last 2 versions'],

      // Watch HTML-files and livereload on changes
      watchHtml: true,

      // Watch CSS background images and livereload on changes
      watchCssImages: false,

      // Run each image through the image processing pipeline exposed by express-processimage
      // Allows you to resize, recompress, change image format, rasterize SVG and much more
      // Reading the documentation is highly recommended: https://github.com/papandreou/express-processimage#express-processimage
      processimage: true,
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp'
      ]
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {},
      serve: {
        options: {
          config: '_config.yml',
          watch: true
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },

    reduce: {
      root: '.tmp',
      outroot: '<%= yeoman.dist %>',

      include: [
        'index.html',
        '404.html',
        'migrate.html',
        'blacklist.json',
        '*/**/*.html',
        'CNAME'
      ],

      browsers: [
        'last 2 versions'
      ]
    },

    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:yeoman/yeoman.io.git',
          branch: 'gh-pages',
          commit: true,
          push: true
        }
      },
      travis: {
        options: {
          remote: 'https://github.com/yeoman/yeoman.io.git',
          branch: 'gh-pages',
          login: 'SBoudrias',
          token: process.env.GH_TOKEN,
          commit: true,
          push: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/assets/js/**/*.js',
        '!<%= yeoman.app %>/assets/js/libs/*.js'
      ]
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/assets/css/**/*.css'
        ]
      }
    },

    concurrent: {
      server: {
        tasks: [
          'livestyle',
          'jekyll:serve'
        ],
        logConcurrentOutput: true
      }
    }
  });

  // Define Tasks
  grunt.registerTask('serve', [
     'concurrent:server'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'reduce'
  ]);

  grunt.registerTask('deploy', [
    'check',
    'build',
    'buildcontrol'
  ]);

  grunt.registerTask('deploy-travis', [
    'check',
    'build',
    'buildcontrol:travis'
  ]);

  grunt.registerTask('default', [
    'check',
    'build'
  ]);
};
