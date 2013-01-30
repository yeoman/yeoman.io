A regular question we are asked is 'How do I load Handlebar templates using Yeoman?'. Some of our generators include support for a templates directory, but if you wish to use Handlebars to precompile these templates the following guide should help.

Note: Whilst this guide demonstrates how to precompile templates for use with Ember, there is nothing here that should prevent you from using the solution with another Yeoman generator.

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
