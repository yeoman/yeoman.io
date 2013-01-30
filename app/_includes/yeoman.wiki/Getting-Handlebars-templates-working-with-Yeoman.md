## How do I load handlebar templates from the templates folder with the ember.js boilerplate?

```sh
npm install grunt-ember-templates # https://github.com/dgeb/grunt-ember-templates
```
Then in the Gruntfile.js that you should have at the root of your project add this:

```js
module.exports = function( grunt ) {
  'use strict';

  grunt.loadNpmTasks('grunt-ember-templates'); // <- this
```

Then configure the `ember_handlebars` task:

```js
 grunt.initConfig({

    // Project configuration
    // ---------------------
   ember_handlebars: {
      all: {
        src: ['app/scripts/templates/**/*.handlebars'],
        dest: 'app/scripts/templates/'
      }
    },

  // ...
```

With that, you can run the command `yeoman ember_handlebars`, it will compile your templates, and put them in the `app/scripts/templates` folder.

Example:

```sh
$  ls app/scripts/templates
application.handlebars forms.handlebars
$  y ember_handlebars
Running "ember_handlebars:all" (ember_handlebars) task
Precompiling "app/scripts/templates/application.handlebars" to "app/scripts/templates/"
Precompiling "app/scripts/templates/forms.handlebars" to "app/scripts/templates/"

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
  // default watch configuration
    watch: {
      // ...
      reload: {
        files: [
          'app/*.html',
          'app/styles/**/*.css',
          'app/scripts/**/*.js',
          'app/scripts/handlebars/**/*.js', // this changed, was app/scripts/**/*.handlebars
          'app/images/**/*'
        ],
        tasks: 'reload'
      },
      handlebars: { // add this, it will compile the handlebar files whenever they change
        files: [ 'app/scripts/templates/**/*.handlebars' ],
        tasks: 'ember_handlebars reload'
      }
    },
```

And voilà!

I haven't really worried about the deploy/compiling all the templates into a single file for now, but it's probably quite easy.

### Issues

~~Note that (out of the box, I haven't dug very deeply into it, yet) it doesn't seem to handle folders when compiling the templates into js files.~~

~~I would expect `scripts/templates/posts/edit.handlebars` to compile into `scripts/templates/posts/edit.js` and declare the template as `Ember.TEMPLATES["posts-edit"] ` (or something "namespaces" like that) but it just creates `scripts/templates/edit.js` and the template name is just "edit".~~

(edit: that is not true anymore using [grunt-ember-templates](https://github.com/dgeb/grunt-ember-templates) instead of grunt-ember-handlebars)

I'm pretty sure there's a better way for compiling the templates. Extracting the compilation from ember-rails is probably the way to go here.



For anyone else looking at this thread Midu's solution is fantastic.  There's just one missing step.  A "handlebars" task needs to be registered in Gruntfile.js (I put it below the `test` task definition at the bottom of the file):

      ...

      // Alias the `test` task to run the `mocha` task instead
      grunt.registerTask('test', 'server:phantom mocha');

      // Define the `handlebars` task.
      grunt.registerTask('handlebars', ['ember_handlebars']);
    };

(At the time of this writing I'm on yeoman v0.9.6.)

