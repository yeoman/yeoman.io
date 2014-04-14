---
layout: documentation
---

# Editing the Gruntfile

Writing file is usually a simple task. You prepare a string and write it to an output file using the [file system api](/authoring/file-system.html).

Issues arise when many generators must write to the same file; a conflict prompt appear on each write action. This doesn't make for good user experience.

That's why Yeoman wrap the most commonly edited file, the `Gruntfile.js`, behind a façade.

## The Gruntfile editor API

Inside a generator context, you can access a `this.gruntfile` object. This object is a `GruntfileEditor` instance provided by the [gruntfile-editor](https://github.com/SBoudrias/gruntfile-editor) module.

As a quick example, you'd use it this way:

``` javascript
module.exports = Yeoman.generators.Base.extend({
  writing: function () {
    this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
  }
});
```

Yeoman load the current project Gruntfile (or a default template) and write the file at the end. You only need to insert your config blocks, Yeoman take care everything else.

## Gruntfile editor methods

Please refer to the [gruntfile-editor](https://github.com/SBoudrias/gruntfile-editor) module documentation for the full API.

### `this.gruntfile.insertConfig( name, config )`

This method insert a configuration block inside the `grunt.initConfig()` call.

For example:

``` javascript
this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
```

The previous line of code would output the following sections in the Gruntfile:

``` javascript
grunt.initConfig({
  compass: {
    watch: { watch: true }
  }
});
```

### `this.gruntfile.registerTask( name, tasks )`

This method register a task inside a named task group. For example:

```javascript
this.gruntfile.registerTask('build', 'compass');
// output: grunt.registerTask('build', ['compass']);

this.gruntfile.registerTask('build', ['compass', 'uglify']);
// output: grunt.registerTask('build', ['compass', 'uglify']);
```

If the named task already exist, we append it to the end of the task array.
