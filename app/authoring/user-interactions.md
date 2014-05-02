---
layout: documentation
title: Interacting With The User
category: authoring
sidebar: sidebars/authoring.html
excerpt: Its all about the users in the end
---

Your generator will interact a lot with the end user. By default Yeoman runs on a terminal, but it also supports custom user interfaces different tools can provide. For example, nothing prevents a Yeoman generator from being run inside a graphical tool like an editor or a standalone app.

To allow this flexibility, Yeoman provides a set of user interface element abstractions. It is your responsibility as an author to only uses those abstractions when interacting with your end user. Using other ways will probably prevent your generator from running correctly in different Yeoman tools.

For example, it is important to never use `console.log()` or `process.stdout.write()` to output content. Using them would hide the output from user not using a terminal. Instead, always rely on the UI generic `generator.log()` method.

## User interactions

### Prompts

Prompts are the main way a generator interact with a user. The prompt module is provided by [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) and you should refer to the [module API](https://github.com/SBoudrias/Inquirer.js) for a list of available prompt options.

You'll call the prompt method this way:

```js
yeoman.generators.Base.extend({
  prompt: function () {
    var done = this.async();
    this.prompt({
      type    : "input",
      name    : "name",
      message : "Your project name",
      default : this.appname // Default to current folder name
    }, function (answers) {
      console.log(answers.name);
      done();
    });
  }
})
```

Note here that we use the `prompt` queue to ask feedback from the user.

### Arguments

Arguments are passed directly from the command line:

```
yo webapp my-project
```

In this example, `my-project` would be the first argument.

To notify the system we expect an argument, we use the `generator.argument()` method. This method accept a `name` (String) and an optional options hash.

The `name` value will be used to retrieve the argument at the matching key `generator.arguments[name]`.

The `option` hash accept multiples key/values:

- `desc` Description for the argument
- `required` Boolean whether it is required
- `optional` Boolean whether it is optional
- `type` String, Number, Array, or Object
- `defaults` Default value for this argument
- `banner` String to show on usage notes (this one is provided by default)

This method must be call inside the `constructor` method otherwise Yeoman won't be able to output relevant help information when a user call your generator with the help option. e.g.: `yo webapp --help`

### Options

Options look a lot like arguments, but they are written as command line _flags_.

```
yo webapp --coffee
```

To notify the system we expect an option, we use the `generator.option()` method. This method accept a `name` (String) and an optional options hash.

The `name` value will be used to retrieve the argument at the matching key `generator.options[name]`.

The `options` hash (the second argument) accept multiples key/values:

- `desc` Description for the option
- `type` Either Boolean, String or Number
- `defaults` Default value
- `banner` String to show on usage notes
- `hide` Boolean whether to hide from help

## Outputting informations

Outputting information is handled by the `generator.log` module.

The main method you'll use is simply `generator.log('Hey! Welcome to my awesome generator')`. It takes a string and output it to the user; basically it mimic `console.log()` when used inside a terminal.

There's also some other helper methods you can find in the [API documentation](http://yeoman.github.io/generator/TerminalAdapter.html).
