---
layout: blog
title: generator-gulp-angular 1.0.0 stable released
excerpt: Several millions possibility to simplify your developments
---

> This is a guest post by [Matthieu Lux](https://github.com/Swiip) and [Mehdy Dara](https://github.com/zckrs).

## Intro ![Logo](/assets/img/blog/generator-gulp-angular-logo.png)


It has now been more than a year since I ([@Swiip](https://twitter.com/Swiip)), quickly followed by [@zckrs](https://twitter.com/Zckrs), started working on our Yeoman generator. Today we’re celebrating the release of our first major and stable version : [generator-gulp-angular 1.0.0](https://www.npmjs.com/package/generator-gulp-angular).

At first we simply wanted to make a good merge between [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) and [generator-angular](https://github.com/yeoman/generator-angular) as I worked on Angular and got tired of Grunt verbosity. Then, the project popularity started to increase and so did its ambition.

## Philosophy

We followed all the precepts of Yeoman adding our owns:
* Gives a well written seed project following best recommendations in terms of folder structure and code style.
* Offers lots of options enabling the user to start instantly with the best tooling and optimization adapted to the latest technologies.
* Uses the concept of automatic injection in different parts of the project: scripts tags both vendor and sources in the index.html, styles files, vendor, css or preprocessed.
* Provides a test coverage as perfect as possible of the code of the generator but also of the generated code.

### Technologies supported

We’re not joking talking of a stable version. We integrated lots of technologies and languages, from CoffeeSript to TypeScript, from Sass to Stylus. The number of combinations of our options exceeds several millions! We wrote tests, documentation and fixed issues for 12 minor versions and 2 release candidates to be able to deliver a perfectly configured seed project whatever options you choose.

![](/assets/img/blog/technologies-gga.png)

### Optimization served

We integrate many optimizations for your web application using some Gulp plugins:
* **[browserSync](http://www.browsersync.io/docs/gulp/)**: full-featured development web server with livereload and devices sync
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

But the v1 is not the end of the road. While maintaining the v1 branch, we started a new Github organization called [FountainJS](https://github.com/FountainJS) targeting a futuristic v2 version. As the context of the build tools has greatly evolved over a year, it’ll be a reboot of the code base.
The major axes will be to use Yeoman generators composition, to upgrade to Gulp 4 and to write in ES6. Finally, I hope to open new horizons in terms of options: dependency management for sure, but why not also Web frameworks (someone talked about React?) and also a backend.


Go try out the [generator-gulp-angular](https://www.npmjs.com/package/generator-gulp-angular) v1.0.0 release! Any feedback, issues, or contributions on the new  [FountainJS](https://github.com/FountainJS) project will always be appreciated.
