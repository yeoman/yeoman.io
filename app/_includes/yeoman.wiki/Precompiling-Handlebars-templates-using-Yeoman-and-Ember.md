A regular question we are asked is 'How do I precompile Handlebar templates using Yeoman?'. Some of our generators include support for a templates directory and if you wish to precompile templates for Ember.js applications, the following guide should help.

Note: Users wishing to use one of our other generators with Handlebar precompilation as a part of their build may be interested in our related [Handlebars Integration](https://github.com/yeoman/yeoman/wiki/Handlebars-integration) guide which uses `grunt-contrib-handlebars`.

Let's begin by scaffolding out a brand new Ember.js application.

```sh
yeoman init ember
```
Next..

```sh
npm install grunt-ember-templates # https://github.com/dgeb/grunt-ember-templates
```
Then in the Gruntfile.js that you should have at the root of your project add this:

```js
module.exports = function( grunt ) {
  'use strict';

  grunt.loadNpmTasks('grunt-ember-templates'); // <- this
```

Then configure the `ember_templates` task:

```js
  grunt.initConfig({

    // Project configuration
    // ---------------------

    ember_templates: {
      compile:{
        options: {
          templateName: function(sourceFile){
            return sourceFile.replace(/path\/to\//, '');
          }
        },
        files: {
          'result.js' : ['app/scripts/templates/**/*.handlebars'],
        }
      }
    },
```

Finally, "handlebars" task needs to be registered in Gruntfile.js:
      ...

      // Alias the `test` task to run the `mocha` task instead
      grunt.registerTask('test', 'server:phantom mocha');

      // Define the `handlebars` task.
      grunt.registerTask('handlebars', ['ember_templates']);
    };



With that, you can run the command `yeoman ember_templates`, it will compile your templates, and put them in the `app/scripts/templates` folder.

Example:

```sh
$  ls app/scripts/templates
application.handlebars forms.handlebars
$  yeoman ember_templates
Running "ember_templates:compile" (ember_templates) task
File "result.js" created.

Done, without errors.
$  ls app/scripts/templates
application.handlebars application.js         forms.handlebars       forms.js

```
Then you can access load the templates from your html file like normal js files:

```html
  <script src="scripts/templates/application.js"></script>
  <script src="scripts/templates/forms.js"></script>
```

You can also enable auto-reload by addind this in you Gruntfile:

```js
watch: {
  ember_templates: {
    files: 'app/scripts/**/*.handlebars',
    tasks: 'ember_templates reload'
  },
}
```

and that's it!

Precompilation can also be added as a part of your build process by overriding the default build profile. In your Gruntfile, you can use:

```sh
  grunt.registerTask('build', 'intro clean compass coffee ember_templates mkdirs usemin-handler rjs concat css min img rev usemin manifest copy time');
```

to achieve this.