---
layout: blog
title: generator-gulp-angular 1.0.0 stable released
excerpt: Several million possibilities to simplify your Angular development using the latest tools available
---

> This is a guest post by [Matthieu Lux](https://github.com/Swiip) and [Mehdy Dara](https://github.com/zckrs).

## Intro ![Logo](/assets/img/blog/generator-gulp-angular-logo.png)

It has now been more than a year since we ([@Swiip](https://twitter.com/Swiip) and [@zckrs](https://twitter.com/Zckrs)), started work on our Yeoman generator. Today we are celebrating the release of our first major and stable version: [generator-gulp-angular 1.0.0](https://www.npmjs.com/package/generator-gulp-angular).

At first, we wanted to make a good merge of [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) and [generator-angular](https://github.com/yeoman/generator-angular), as we worked on Angular but grew tired of Grunt's verbosity. Then, the project popularity started to increase and so did its ambition.

## Philosophy

We followed all the precepts of Yeoman and added our own:

 * Provide a well written seed project, following the best recommendations for folder structure and code style.
 * Offer options to enable the user to start with the best tooling and optimizations using the latest technologies.
 * Use automatic injection in different parts of the project: script tags both vendor and sources in the index.html, styles files, vendor, css or preprocessed.
 * Provide test coverage, as perfect as possible, for both the generator and also code it generated.

### Technologies supported

We are not joking around when we talk about this being a stable version. We integrated lots of technologies and languages, from CoffeeScript to TypeScript, to Sass to Stylus. The number of combinations exceeds several million! We wrote tests, documentation and fixed issues for 12 minor versions and 2 release candidates, to be able to deliver a perfectly configured seed project, no matter the options you choose.

![](/assets/img/blog/technologies-gga.png)

### Optimization served

We integrated many optimizations for your web application using a few Gulp plugins:

 * **[browserSync](http://www.browsersync.io/docs/gulp/)**: full-featured development web server with livereload and device sync
 * **[ngAnnotate](https://github.com/Kagami/gulp-ng-annotate)**: convert simple injection to complete syntax to be minification proof
 * **[angular-templatecache](https://github.com/miickel/gulp-angular-templatecache)**: all HTML partials will be converted to JS to be bundled in the application
 * **[ESLint](https://github.com/adametry/gulp-eslint)**: the pluggable linting utility for JavaScript
 * **[watch](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb)**: watch your source files and recompile them automatically
 * **[useref](https://github.com/jonkemp/gulp-useref)**: allow configuration of your files in comments of your HTML file
 * **[uglify](https://github.com/terinjokes/gulp-uglify)**: optimize all your JavaScript
 * **[clean-css](https://github.com/murphydanger/gulp-minify-css)**: optimize all your CSS
 * **[rev](https://github.com/sindresorhus/gulp-rev)**: add a hash in the file names to prevent browser cache problems
 * **[karma](https://github.com/karma-runner/gulp-karma#tldr)**: out of the box unit test configuration with karma
 * **[protractor](https://github.com/mllrsohn/gulp-protractor)**: out of the box e2e test configuration with protractor

## 2.0.0 on the road...

But version 1.0.0 is not the end of the road. While maintaining the v1 branch, we started a new Github organization called [FountainJS](https://github.com/FountainJS) targeting a futuristic v2 version. As the context of the build tools has greatly evolved over a year, it’ll be a reboot of the code base.
The major selling point will be to use Yeoman Generator's composition support, to upgrade to Gulp 4 and to write it in ES6. Finally, we hope to open new horizons in terms of options: dependency management for sure, but why not also Web frameworks (someone talked about React?) and also a backend.

Go try out the [generator-gulp-angular](https://www.npmjs.com/package/generator-gulp-angular) v1.0.0 release! Any feedback, issues, or contributions on the new [FountainJS](https://github.com/FountainJS) project will always be appreciated.
