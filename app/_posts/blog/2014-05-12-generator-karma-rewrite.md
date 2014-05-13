---
layout: blog
title: Karma Generator Rewrite 0.8.0
---

Allo' allo'! Here's [Eddie](https://github.com/eddiemonge) from the Yeoman team on the recent changes to the Karma Generator. The changes focused on configuration and testing.

## Why was a Rewrite Necessary?

**tl;dr**: a rewrite was not necessary. The [Angular generator](https://www.github.com/yeoman/generator) needed some changes to continue to work.

The [Karma Team](http://karma-runner.github.io/) recently made some changes to the way Karma [installs its plugins](https://github.com/karma-runner/karma/blob/master/CHANGELOG.md#breaking-changes). Before, it would install a lot of default plugins. Now it does not install any plugins. Many people viewed this as a pretty bad change. In fact it is a great change because bloatware is not included anymore. Only the plugins users want are now installed.

The Angular generator used the Karma generator to write its testing components. The Karma change led to testing not working out of the box. The tests complained about not being able to do some things like launch browsers. A quick fix was to install the missing plugins as part of the Angular generation process. This was not an ideal fix as it made the project more fragile and less composable. A better solution was to make the Karma generator be more customizable.

Also, this was a good project to test the new 0.17.0 changes to the [Generator system](https://www.github.com/yeoman/generator).

## What was the Goal of the Rewrite?

 * Use the new 0.17.0 Yeoman Generator
 * Better testing overall
 * Support customizing almost everything in the Karma config
 * Install user requested Karma plugins (and required ones not explicitly specified)
 * Write Gruntfile.js config block and task

### 0.17.0 Yeoman Generator

[Simon](https://github.com/sboudrias) recently made a lot of changes to the Yeoman Generator system that needed some real world testing. While every new feature wasn't tested, the core features got some exposure. This includes easier testing methods, simpler generator syntax and Gruntfile integration[*](#coffeescript-gruntfile-support).

### Testing

The new Generator system made testing the rewrite a pleasure instead of a dreaded task. It reduced the amount of code needed while making it more readable. That usually does not happen so it was a welcome change.

The generator tests now cover testing the options and file creation instead of doing both at the same time. This should ensure more accuracy from the tests as the pieces get tested on their own. Every source code change is verifiable; no more worrying about if this or that change will break the whole thing.

### Customizations

There are few parts of the generator that are not customizable now. Here is a small list of the the options that are available:

 * Specify what browsers to run the tests in (defaults to PhantomJS)
 * What framework to use (defaults to Jasmine)
 * Which files to test
 * What plugins to use. Missing plugins, like a framework or browser, get added by the generator.
 * Where the config files get written to (including the name and path)

This is not the complete list. For that, check out the project's [README](https://www.github.com/yeoman/generator-karma).

### Gruntfile

The generator also tries to add the appropriate Gruntfile configuration blocks and tasks. This is a welcome change from having to do it by hand and hoping to get it right. For Gruntfiles written in CoffeeScript, see the [CoffeeScript note](#coffeescript-gruntfile-support).


###### CoffeeScript Gruntfile Support

CoffeeScript does not have a parser to be able to read it programmatically and insert the config (if it does, pull requests are welcome). Because of this, the Generator system cannot write the configs. :(

## The Dark Side

Not everything is peachy though; there are a few downsides to this rewrite. The first, which is also an upside, is that this is no longer Angular-centric. `angular-scenario` and `angular-mock` are no longer installed by default. To use them, add them as components in the `bower-components` option. The other change is that there are not any more default plugins specified other than the two needed for Jasmine and PhantomJS.

## Vs `karma init`

With `karma init` isn't this generator kind of pointless?

No. `karma init` scaffolds out a basic configuration file but does not give the option to customize as much as this does. It also does not update the Gruntfile. This generator provides that, allows it to composed with other generators and installs dependencies.

## Wrap-Up

Its my hope that this rewrite is a sign of things to come for the other Yeoman generators. If nothing else, at least the testing should bring smiles to many faces since it is better tested now.

As always, please file bug reports at the [issues page](https://github.com/yeoman/generator-karma/issues). Pull requests are always welcome but be sure to start with an issue proposing the change(s).
