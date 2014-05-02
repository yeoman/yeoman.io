---
layout: documentation
title: Managing Dependencies
category: authoring
sidebar: sidebars/authoring.html
excerpt: Working with npm and Bower to manage external dependencies
---

Once you've run your generators, you'll often want to run [npm](http://npmjs.org) and [Bower](http://bower.io) to install any additional dependencies your generators require.

As these tasks are very frequent, Yeoman already abstracts them away. We'll also cover how you can launch installation through other tools.

## NPM

You just need to call `generator.npmInstall()` to run an `npm` installation. You can call it anywhere in your code as Yeoman will automatically schedule the task to run once everything else is complete. Yeoman will also ensure the `npm install` command is only run once even if it is called multiple time by multiple generators.

## Bower

You just need to call `generator.bowerInstall()` to launch the installation. You can call it anywhere in your code as Yeoman will automatically schedule the task to run once everything else is complete. Yeoman will also ensure the `bower install` command is only run once even if it is called multiple time by multiple generators.

## Both?

Call `generator.installDependencies()` to run both npm and bower.

## Using other tools

Yeoman provides an abstraction to allow users to `spawn` any CLI commands. This abstraction will normalize to command so it can run seamlessly in Linux, Mac and Windows system.

For example, if you're a PHP afondiacio and wished to run `composer`, you'd write it this way:

```js
yeoman.generators.Base.extend({
  end: function () {
    this.spawnCommand('composer', ['install']);
  }
});
```

Make sure to call the `spawnCommand` method inside the `end` queue. Your user don't want to wait for an installation command to complete.
