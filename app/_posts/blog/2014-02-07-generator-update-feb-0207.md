---
layout: blog
title: Updates to some of our generators
---

Today we have a few updated generators for your consumption. nom nom nom. As always, we welcome any and all feedback or bug reports on the relevant trackers.

<img src="https://i.imgur.com/hSEppjX.gif">

## Scaffold a Gruntfile

We released `generator-gruntfile` [0.0.9](https://github.com/yeoman/generator-gruntfile/releases/tag/v0.0.9) which scaffolds out a Gruntfile and package.json file if you don't already have one. Changes:

* Improved stability
* Fixed peerDependencies issues
* Fixed strict mode and JSHint options
* Updated dependencies

Usage:

```
npm install -g generator-gruntfile
yo gruntfile
```

## Scaffold a Grunt plugin

We released `generator-gruntplugin` [0.0.6](https://github.com/yeoman/generator-gruntplugin/releases/tag/v0.0.6) which scaffolds a grunt plugin module including Nodeunit unit tests. Changes:

* Generate package.json from JS object written out as JSON
* Bumping dependencies

Usage:

```
npm install -g generator-gruntplugin
yo gruntplugin
```

## Scaffold a new Node module

We released `generator-node` [0.0.7](https://github.com/yeoman/generator-node/releases/tag/v0.0.7) which scaffolds a Node.js module including Nodeunit unit tests. Useful if you need something a little more than `npm init`. Changes:

* Improvements to default values
* Updated dependencies
* Fixed peerDep issues
* Fixed test generation for libs with hypens

Usage:

```
npm install -g generator-node
yo node
```

## Scaffold a new yo generator

We released `generator-generator` [0.4.2](https://github.com/yeoman/generator-generator/releases/tag/v0.4.2) which scaffolds a new Yeoman generator with some sensible defaults. Changes:

* Updated inherits to extend within templated index files
* Update to the Yeoman-Generator 0.16 inheritance method
* Update test to use fileContent, update deprecated methods
* Hide JSHint warning for camel case
* Bump to latest versions of dependencies, improve package.json

Usage:

```
npm install -g generator-generator
yo generator
```

## Scaffold a project using Bootstrap

We released `generator-bootstrap` [0.1.5](https://github.com/yeoman/generator-bootstrap/releases/tag/v0.1.5) which prompts you for which flavour of Bootstrap you would like to use - Sass, Less, Stylus or just CSS. Changes:

* Switched to latest official version of bootstrap-sass
* Switched Less version to components-bootstrap

Usage:

```
npm install -g generator-bootstrap
yo bootstrap
```

## Backbone and Ember generator updates

In the past few weeks, we've also released updates to:

* [generator-backbone](https://github.com/yeoman/generator-backbone/releases) - including scaffolding out your mocha tests while generating models/views/collections.

* [generator-ember](https://github.com/yeoman/generator-ember/releases) - better Compass defaults, updates to Ember 1.3.1, Ember Data 1.0.0beta.

* [generator-polymer](https://github.com/yeoman/generator-polymer/releases) - a more Polymerized index.html with further element granularity, updated deps.

We hope you find these updates useful! Happy Friday!

~ Addy and the team.
