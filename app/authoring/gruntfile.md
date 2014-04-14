---
layout: documentation
---

# Managing a Yo Gruntfile

Writing to a file is usually a simple task: prepare a string and write it to an output file using the [file system api](/authoring/file-system.html). However, issues arise when different, (hopefully [compasable](/authoring/composability.html)) generators must write to the same file. A conflict prompt often appears on each write action. This does not make for a good end user experience.

This is why Yeoman is wrapping the most commonly edited file, the `Gruntfile.js`, behind a façade. Introducing, the Yeoman Gruntfile editor API.

## The Gruntfile editor API

Inside of a generator context, a new object, the `this.gruntfile` object, is now accessible. This object is a `GruntfileEditor` instance provided by the [gruntfile-editor](https://github.com/SBoudrias/gruntfile-editor) module.

As a quick example, you'd use it this way:

```javascript
module.exports = Yeoman.generators.Base.extend({
  writing: function () {
    this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
  }
});
```

Yeoman loads the current project's `Gruntfile.js` (or a default template), and writes the file to disk at the end of the generation process. Insert a config block and Yeoman will take care of everything else in the file.

## Gruntfile editor methods

Please refer to the [gruntfile-editor](https://github.com/SBoudrias/gruntfile-editor) module documentation for the full API.

### insertConfig

`this.gruntfile.insertConfig( name, config )`

This method inserts a configuration block inside the `grunt.initConfig()` call.

For example:

```javascript
this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
```

The previous line of code would output the following sections in the Gruntfile:

```javascript
grunt.initConfig({
  compass: {
    watch: { watch: true }
  }
});
```

### registerTask

`this.gruntfile.registerTask( name, tasks )`

This method registers a task inside a named task group. For example:

```javascript
this.gruntfile.registerTask('build', 'compass');
// output: grunt.registerTask('build', ['compass']);

this.gruntfile.registerTask('build', ['compass', 'uglify']);
// output: grunt.registerTask('build', ['compass', 'uglify']);
```

If the named task already exist, the tasks are appended to the end of that task array.
