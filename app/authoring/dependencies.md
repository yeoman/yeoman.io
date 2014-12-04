---
layout: documentation
title: Managing Dependencies
category: authoring
sidebar: sidebars/authoring.html
excerpt: Working with npm and Bower to manage external dependencies
---

Once you've run your generators, you'll often want to run [npm](http://npmjs.org) and [Bower](http://bower.io) to install any additional dependencies your generators require.

As these tasks are very frequent, Yeoman already abstracts them away. We'll also cover how you can launch installation through other tools.

Note that Yeoman provided installation helpers will automatically schedule the installation to run once as part of the `install` queue. If you need to run anything after they've run, use the `end` queue.

## npm

You just need to call `generator.npmInstall()` to run an `npm` installation. Yeoman will ensure the `npm install` command is only run once even if it is called multiple times by multiple generators.

For example you want to install lodash as a dev dependency:

```js
generators.Base.extend({
  installingLodash: function() {
    this.npmInstall(['lodash'], { 'saveDev': true });
  }
}):
```

This is equivalent to call:

```
npm install lodash --save-dev
```

on the command line in your project.


## Bower

You just need to call `generator.bowerInstall()` to launch the installation. Yeoman will ensure the `bower install` command is only run once even if it is called multiple time by multiple generators.

## Both?

Call `generator.installDependencies()` to run both npm and bower.

## Using other tools

Yeoman provides an abstraction to allow users to `spawn` any CLI commands. This abstraction will normalize to command so it can run seamlessly in Linux, Mac and Windows system.

For example, if you're a PHP aficionado and wished to run `composer`, you'd write it this way:

```js
generators.Base.extend({
  install: function () {
    this.spawnCommand('composer', ['install']);
  }
});
```

Make sure to call the `spawnCommand` method inside the `install` queue. Your users don't want to wait for an installation command to complete.
