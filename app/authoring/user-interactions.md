---
layout: documentation
title: Interacting With The User
category: authoring
sidebar: sidebars/authoring.md
excerpt: Its all about the users in the end
---

Your generator will interact a lot with the end user. By default Yeoman runs on a terminal, but it also supports custom user interfaces that different tools can provide. For example, nothing prevents a Yeoman generator from being run inside of a graphical tool like an editor or a standalone app.

To allow for this flexibility, Yeoman provides a set of user interface element abstractions. It is your responsibility as an author to only use those abstractions when interacting with your end user. Using other ways will probably prevent your generator from running correctly in different Yeoman tools.

For example, it is important to never use `console.log()` or `process.stdout.write()` to output content. Using them would hide the output from users not using a terminal. Instead, always rely on the UI generic `generator.log()` method, where `generator` is the context of your current generator.

## User interactions

### Prompts

Prompts are the main way a generator interacts with a user. The prompt module is provided by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) and you should refer [to its API](https://github.com/SBoudrias/Inquirer.js) for a list of available prompt options.

The `prompt` method is asynchronous and return a promise. You'll need to return the promise from your task in order to wait for it's completion before running the next one. ([learn more about asynchronous task](/authoring/running-context.html))

```js
module.exports = generators.Base.extend({
  prompting: function () {
    return this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }).then(function (answers) {
      this.log(answers.name);
    }.bind(this));
  }
})
```

Note here that we use the [`prompting` queue](/authoring/running-context.html) to ask for feedback from the user.

#### Remembering user preferences

A user may give the same input to certain questions every time they run your generator. For these questions, you probably want to remember what the user answered previously and use that answer as the new `default`.

Yeoman extends the Inquirer.js API by adding a `store` property to question objects. This property allows you to specify that the user provided answer should be used as the default answer in the future. This can be done as follows:

```js
this.prompt({
  type    : 'input',
  name    : 'username',
  message : 'What\'s your Github username',
  store   : true
});
```

_Note:_ Providing a default value will prevent the user from returning any empty answers.

If you're only looking to store data without being directly tied to the prompt, make sure to checkout [the Yeoman storage documentation](/authoring/storage.html).

### Arguments

Arguments are passed directly from the command line:

```
yo webapp my-project
```

In this example, `my-project` would be the first argument.

To notify the system that we expect an argument, we use the `generator.argument()` method. This method accepts a `name` (String) and an optional hash of options.

The `name` will be used to create a getter on the generator: `generator['name']`.

The options hash accepts multiple key-value pairs:

- `desc` Description for the argument
- `required` Boolean whether it is required
- `optional` Boolean whether it is optional
- `type` String, Number, Array, or Object
- `defaults` Default value for this argument

This method must be called inside the `constructor` method. Otherwise Yeoman won't be able to output the relevant help information when a user calls your generator with the help option: e.g. `yo webapp --help`.

Here is an example:

```js
var _ = require('lodash');

module.exports = generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
    this.appname = _.camelCase(this.appname);
  }
});
```

### Options

Options look a lot like arguments, but they are written as command line _flags_.

```
yo webapp --coffee
```

To notify the system we expect an option, we use the `generator.option()` method. This method accepts a `name` (String) and an optional hash of options.

The `name` value will be used to retrieve the argument at the matching key `generator.options[name]`.

The options hash (the second argument) accepts multiple key-value pairs:

- `desc` Description for the option
- `alias` Short name for option
- `type` Either Boolean, String or Number
- `defaults` Default value
- `hide` Boolean whether to hide from help

Here is an example:

```js
module.exports = generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    generators.Base.apply(this, arguments);

    // This method adds support for a `--coffee` flag
    this.option('coffee');
    // And you can then access it later on this way; e.g.
    this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");
  }
});
```

## Outputting Information

Outputting information is handled by the `generator.log` module.

The main method you'll use is simply `generator.log` (e.g. `generator.log('Hey! Welcome to my awesome generator')`). It takes a string and outputs it to the user; basically it mimics `console.log()` when used inside of a terminal session. You can use it like so:

```js
module.exports = generators.Base.extend({
  myAction: function () {
    this.log('Something has gone wrong!');
  }
});
```

There's also some other helper methods you can find in the [API documentation](http://yeoman.io/environment/TerminalAdapter.html).
