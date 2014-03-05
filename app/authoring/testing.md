---
layout: default
---

# Testing Generators

Read on to learn more about the testing helpers Yeoman add to ease the pain of unit testing a generator.

The examples below assume you uses [Mocha](http://visionmedia.github.io/mocha/) in BDD mode. The global concept should apply easily to your unit testing framework of choice.

## Organizing your tests

It is important to keep your tests simple and easily editable.

Usually the best way to organize your tests is to separate each generator and sub-generator into its own `describe` block. Then, add a `describe` block for each option your generator accept. And then, use an `it` block for each assertion (or related assertion).

The code running the generator should be located in a `before` or `beforeEach` block - it usually doesn't belong with your assertions.

In code, you should end up with a structure similar to this:

```js
describe('backbone:app', function () {
  describe('when using require.js', function () {
    before(function () {
      // Mock the options, set up an output folder and run the generator
    });

    it('generate a router.js file', function () {
      // assert the file exist
      // assert the file uses AMD definition
    });

    it('generate a view file');
    it('generate a base controller');
  });
});
```

## Test helpers

Yeoman provide test helpers methods. Require them like this:

```js
var helpers = require('yeoman-generator').test;
```

You can check [the full helpers API here](http://yeoman.github.io/generator/helpers.html). These methods will usually be run inside a `before` block.

The most useful method when unit testing a generator is `helpers.run()`. This method will return a [RunContext](http://yeoman.github.io/generator/RunContext.html) instance on which you can call method to setup a directory, mock prompt, mock arguments, etc.

```js
before(function (done) {
  helper.run('../generators/app')
    .inDir('./tmp') // Clear the directory and set it as the CWD
    .withOptions({ foo: 'bar' }) // Mock options passed in
    .withArguments(['name-x']) // Mock the arguments
    .withPrompt({ coffee: false }) // Mock the prompt answers
    .onEnd(done)
})
```

## Assertions helpers

Yeoman extends the [native assert module](http://nodejs.org/api/assert.html) with generator related assertions helpers. You can see the full list of assertions helpers in our [API documentation](http://yeoman.github.io/generator/assert.html).

Require the assertion helpers:

```js
var assert = require('yeoman-generator').assert;
```

### Assert files exists

```js
assert.file(['Gruntfile.js', 'app/router.js', 'app/views/main.js']);
```

`assert.noFile()` assert the contrary.

### Assert a file content

```js
assert.fileContent('controllers/user.js', /App\.UserController = Ember\.ObjectController\.extend/);
```

`assert.noFileContent()` assert the contrary.

### Others

Refers to the [API documentation](http://yeoman.github.io/generator/helpers.html) for other methods.
