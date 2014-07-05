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
  grunt.loadNpmTasks('grunt-livestyle');

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/assets/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,js,yml,md,mkd,markdown,xml}'
        ],
        tasks: ['jekyll:serve']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/assets/css/**/*.css',
          '<%= yeoman.app %>/assets/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },

    livestyle: {
      root: '.tmp'
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
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        bundleExec: true,
        debugInfo: false,
        lineNumbers: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/assets/css',
          ext: '.css'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '.tmp',
        }
      },
      serve: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
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
        '*.html',
        '*.txt',
        '*.ico',
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
        '!<%= yeoman.app %>/assets/js/libs/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/assets/css/**/*.css',
          '<%= yeoman.app %>/assets/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'jekyll:serve'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', ['livestyle']);

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
    //   'clean:server',
    //   'concurrent:test',
    //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
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
    'test',
    'build',
    'buildcontrol'
  ]);

  grunt.registerTask('deploy-travis', [
    'check',
    'test',
    'build',
    'buildcontrol:travis'
  ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
