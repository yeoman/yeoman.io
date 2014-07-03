---
layout: documentation
title: Writing Your Own Yeoman Generator
category: authoring
sidebar: sidebars/authoring.html
excerpt: Just starting out with generators? Start here
---

Generators are the building blocks of the Yeoman ecosystem. They're the plugins run by `yo` to generate files for end users.

In reading this section, you'll learn how to create and distribute your own.

<aside class="excerpt">
  Note: We built a [generator-generator](https://github.com/yeoman/generator-generator) to help users get started with their own generator. Feel free to use it to bootstrap your own generator once you understand the below concepts.
</aside>


## Organizing your generators

### Setting up as a node module

A generator is at its core a Node.js module.

First, create a folder in which you'll write your generator. This folder must be named `generator-name` (where name is the name of your generator). This is important as Yeoman relies on the file system to find available generators.

Once inside your generator folder, create a `package.json` file. This file is a Node.js module manifest. You can generate this file by running `npm init` from your command line or by entering the following manually:

```json
{
  "name": "generator-name",
  "version": "0.1.0",
  "description": "",
  "keywords": ["yeoman-generator"],
  "dependencies": {
    "yeoman-generator": "^0.16.0"
  }
}
```

The `name` property must be prefixed by `generator-`. The `keywords` property must contain `"yeoman-generator"` to be indexed by our [community generator page](/generators/community.html).

You should make sure you set the latest version of `yeoman-generator` as a dependency. You can do this by running: `npm install --save yeoman-generator`.

Add other [`package.json` properties](https://www.npmjs.org/doc/files/package.json.html) as needed.

### Folder tree

Yeoman is deeply linked to the file system and how you lay out your directory tree. Each sub-generator is contained within its own folder.

The default generator used when you call `yo name` is the `app` generator. This must be contained within the `app/` directory.

Sub-generators, used when you call `yo name:subcommand` are stored in folders named exactly like the sub command.

In an example project, a directory tree could look like this:

```
├───package.json
├───app/
│   └───index.js
└───router/
    └───index.js
```

This generator will expose `yo name` and `yo name:router` commands.

You may not like keeping all your code at the root of your folder. Luckily Yeoman allows for two different directory structures. It'll look in `./` and `generators/` to register available generators.

The previous example can be written as follows:

```
├───package.json
└───generators/
    ├───app/
    │   └───index.js
    └───router/
        └───index.js
```


## Extending generator

Once you have this structure in place, it's time to write the actual generator.

Yeoman offers base generators which you can extend to implement your own behavior. These base generators will add most of the functionality you'd expect to ease your task.

Here's how you extend a base generator:

```js
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend();
```

If you would like to require a `name` argument for your generator (for example `foo` in `yo name:router foo`) that will be assigned to `this.name`,  you can instead do the following:

```js
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend();
```

Either type of generator can be extended to create an app generator or a subcommand generator. `Base` is extended most often for an app generator and `NamedBase` for a subcommand generator where a filename is required.


The `extend` method will extend the base class and allow you to provide a new prototype. This functionality comes from the [Class-extend](https://github.com/SBoudrias/class-extend) module and should be familiar if you've ever worked with Backbone.

We assign the extended generator to `module.exports` to make it available to the ecosystem. This is how we [export modules in Node.js](http://nodejs.org/api/modules.html#modules_module_exports).

### Overwriting the constructor

Some generator methods can only be called inside the `constructor` function. These special methods may do things like set up important state controls and may not function outside of the constructor.

To override the generator constructor you pass a constructor function to `extend()` like so:

```js
module.exports = yeoman.generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly setup
    yeoman.generators.Base.apply(this, arguments);

    // And next add your custom code
    this.option('coffee'); // This method add support for a `--coffee` flag
  }
});
```

### Adding our own functionality

Every method added to the prototype is run once the generator is called, usually in sequence. But we'll see in the next section that some special method names will trigger specific run order.

Let's add some methods:

```js
module.exports = yeoman.generators.Base.extend({
  method1: function () {
    console.log('method 1 just ran');
  },
  method2: function () {
    console.log('method 2 just ran');
  }
});
```

When we run the generator later, you'll see those line logged to the console.


## Running the generator

At this point, you have a working generator. The next logical step would be to run it and see if it works.

As you're developing the generator locally, it is not yet available as a global npm module. npm allows you to create a global module symlinked to a local one. This is what you'll want to do.

From the root of your generator project (in `generator-name/` folder). Open a terminal and type:

```
npm link
```

That'll install your project dependencies and symlink a global module to your local file. After npm is done, you'll be able to call `yo name` and you should see the `console.log` defined earlier outputted in the terminal. Congratulations, you just built your first generator!


### Finding the project root

When running a generator, Yeoman tries to figure out some things from the context it runs.

The most important one is that Yeoman looks up the directory tree for a `.yo-rc.json` file. If found, it then considers the location of the file as the root of the project. Behind the scenes, Yeoman will change the current directory to the `.yo-rc.json` file location and run the requested generator there.

The Storage module creates the `.yo-rc.json` file. Calling `this.config.save()` from a generator for the first time will create the file.

So if your generator is not running in your current working directory, make sure there's no `.yo-rc.json` somewhere up the directory tree.


## Where to go from here?

After reading this you should be able to create a local generator and run it.

If this is your first time writing a generator, you should definitely read the next section on the [running context and the run loop](/authoring/running-context.html). This section is a mandatory read to understand in what context your generator will run and to make sure it'll compose well with the other generators in the Yeoman ecosystem. The other sections of the documentation will present functionality available in the core to help you achieve your goals.
