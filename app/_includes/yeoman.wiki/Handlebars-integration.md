1. Install Yeoman directly from GitHub (or get v0.9.6 if it's out), we need this so we can configure server tasks from our Gruntfile.

2. Add `grunt-contrib-handlebars` as a devDependency by running `npm install -D grunt-contrib-handlebars`. This will add it to package.json after installing it.

3. Load the `handlebars` task in your Gruntfile.js

    ```javascript
    // Gruntfile.js
    module.exports = function(grunt) {
      grunt.loadNpmTasks('grunt-contrib-handlebars');
    };
    ```

4. Configure the handlebars task for building. Update the paths in here to suit your project's filesystem structure. For more information on configuration, visit the [grunt-contrib-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars) repo.

    ```javascript
    // Gruntfile.js
    module.exports = function(grunt) {
      grunt.loadNpmTasks('grunt-contrib-handlebars');
      
      grunt.initConfig({

        handlebars: {
          compile: {
            files: {
              "temp/modules/compiled-templates.js": [
                "app/modules/*/templates/**/*.hbs"
              ]
            },
            options: {
              namespace: 'MyApp.Templates',
              processName: function(filename) {
                // funky name processing here
                return filename
                        .replace(/^app\/modules\//, '')
                        .replace(/\.hbs$/, '');
              }
            }
          }
        }
      });
    };
    ```

5. Update the watch task to recompile your templates when they change.

    ```javascript
    // Gruntfile.js
    module.exports = function(grunt) {
      grunt.loadNpmTasks('grunt-contrib-handlebars');
      
      grunt.initConfig({

        handlebars: {
          compile: {
            files: {
              "temp/modules/compiled-templates.js": [
                "app/modules/*/templates/*.hbs"
              ]
            },
            options: {
              namespace: 'MyApp.Templates',
              processName: function(filename) {
                // funky name processing here
                return filename
                        .replace(/^app\/modules\//, '')
                        .replace(/\.hbs$/, '');
              }
            }
          }
        },

        watch: {
          handlebars: {
            files: [
              'app/modules/*/templates/*.hbs'
            ],
            tasks: 'handlebars reload'
          }
        }
      });
    };
    ```

6. Configure Yeoman to run our handlebars task during the `build` and `server` tasks.

    ```javascript
    // Gruntfile.js
    module.exports = function(grunt) {
      grunt.loadNpmTasks('grunt-contrib-handlebars');
      
      grunt.initConfig({

        handlebars: {
          compile: {
            files: {
              "temp/modules/compiled-templates.js": [
                "app/modules/*/templates/**/*.hbs"
              ]
            },
            options: {
              namespace: 'MyApp.Templates',
              processName: function(filename) {
                // funky name processing here
                return filename
                        .replace(/^app\/modules\//, '')
                        .replace(/\.hbs$/, '');
              }
            }
          }
        },

        watch: {
          handlebars: {
            files: [
              'app/modules/*/templates/*.hbs'
            ],
            tasks: 'handlebars reload'
          }
        },

        // this server config requires you install yeoman directly from GitHub, it won't work for Yeoman <=0.9.5
        server: {
          // Personally I find open-browser annoying and so I remove it
          app: 'clean lint compass coffee handlebars open-browser watch'
        }
      });

      grunt.renameTask('build', 'original-build'); // optional

      // override default build task, the built-in yeoman build task spits out all the tasks it runs in your command line
      grunt.registerTask('build', 'intro clean compass coffee handlebars mkdirs usemin-handler rjs concat css min img rev usemin manifest copy time');
    };
    ```
7. Run `yeoman install handlebars` to install the handlebars runtime. 

8. Add the generated compiled-templates.js to your index.html, preferably in your build blocks:

    ```html
    <!-- build:js scripts/scripts.js -->
    <script src="components/jquery/jquery.js"></script>
    <script src="components/lodash/lodash.js"></script>
    <script src="components/backbone/backbone.js"></script>
    <script src="components/handlebars/handlebars.runtime-1.0.0-rc.1.js"></script>
    <script src="modules/compiled-templates.js"></script>
    <script src="modules/main.js"></script>
    <!-- endbuild -->
    ```

9. Enjoy Handlebars goodness in your `yeoman build` and `yeoman server`.

IMPORTANT NOTICE: Customizing the server tasks using the configuration ``server: {  app: 'clean lint compass coffee handlebars open-browser watch'  }`` doesn't work out of the box with 0.9.6 (form npmjs). You must either modify your implementation as suggested in the [FAQ (Q: How can I change built-in task like build or server)](https://github.com/yeoman/yeoman/wiki/Additional-FAQ) or if you want the method described here to work, then check the instructions at https://github.com/yeoman/yeoman/wiki/Control-server-target-tasks-via-Gruntfile.js However this manual shows the main parts you need to have it all ready, you will only have to change the way you chain Handlebars task to the server task.