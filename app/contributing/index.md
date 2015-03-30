---
layout: default
title: Contributing
category: contributing
sidebar: sidebars/contributing.html
excerpt: The yeoman project contribution guidelines
---

It can sometimes be hard to know where to start contributing when looking at a large project like Yeoman. This document will try to layout the project organization and the different ways you can help us!

## Community

The easiest way to start is probably to get involved with our community.

* Hangout in our IRC channel (#yeoman on [Freenode](http://freenode.net/))
* Answer questions on [StackOverflow (#yeoman)](http://stackoverflow.com/questions/tagged/yeoman)
* Attend local meetups and speak with your colleagues!
* Help people asking questions in issues on [yeoman/yeoman](https://github.com/yeoman/yeoman) and generator's repositories.

## Documentation

The most time consuming task of most open source projects is writing and updating documentation. This include the core docs, but also help maintaining and updating the Website.

Chances are you're probably a web developer. If so that's awesome because there's a lot to do making this website better.

Head to [yeoman/yeoman.io](https://github.com/yeoman/yeoman.io) to work on the website and documentation.

## Official Generators

The core yeoman team maintains a lot of [officials generators](https://github.com/yeoman?query=generator-). You like frameworks? You use one of our generators and have some ideas on how to improve it? Then really this is where you should start!

Checkout out [our github organization](https://github.com/yeoman) to find the repository you'd like to contribute to.

## The plugins and modules

The core team maintains a couple node modules and a bunch of Grunt plugins.

- [grunt-usemin](https://github.com/yeoman/grunt-usemin)
- [grunt-filerev](https://github.com/yeoman/grunt-filerev)
- [yosay](https://github.com/yeoman/yosay)
- [update-notifier](https://github.com/yeoman/update-notifier)
- [configstore](https://github.com/yeoman/configstore)
- [bower-requirejs](https://github.com/yeoman/bower-requirejs)
- [stringify-object](https://github.com/yeoman/stringify-object)
- [insight](https://github.com/yeoman/insight)

## The core system

Once you're familiar with the way Yeoman works - or if you just want to work with Node.js - then you might want to contribute to the core system.

There's basically three components to the core system:

1. [yo](https://github.com/yeoman/yo), the command line interface to use Yeoman.
2. [The runner system](https://github.com/yeoman/generator) which allow to discover and run generators.
3. [The base classes](https://github.com/yeoman/generator) you extend to create your own generators. Those classes contain the helper methods to ease the authoring of your own generators.
