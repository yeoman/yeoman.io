# MODERN WORKFLOWS FOR MODERN WEBAPPS

<p class="toolset">
<img src="https://raw.github.com/yeoman/yeoman.io/gh-pages/media/toolset.png" alt="Yo, Grunt, Bower">
</p>

## 1.0 beta 

Yeoman 1.0 is more than just a tool. It's a workflow; a collection of tools and best practices working in harmony to make developing for the web even better. 

Our workflow is comprised of three tools for improving your **productivity** and **satisfaction** when building a web app: *yo* (the scaffolding tool), *grunt* (the build tool) and *bower* (for package management).

* [Yo](https://github.com/yeoman/yo) scaffolds out a new application, writing your Grunt configuration and pulling in relevant Grunt tasks that you might need for your build. 

* [Grunt](http://gruntjs.com) is used to build, preview and test your project, thanks to help from tasks curated by the Yeoman team and grunt-contrib. 

* [Bower](http://twitter.github.com/bower) is used for dependency management, so that you no longer have to manually download and manage your scripts.

All three of these tools are developed and maintained separately, but work well together as part of our prescribed workflow for keeping you effective.

## Getting started

### Installation

A complete [getting started](https://github.com/yeoman/yeoman/wiki/Getting-Started) guide is available but for those looking to get up and running quickly. Make sure you have [Node.js](http://nodejs.org) and [Git](http://git-scm.org) installed (plus [Ruby](http://ruby-lang.org) and [Compass](http://compass-style.org/install) too if you plan to use it) then install the recommended tools by running:

```
npm install -g yo 
```

This will install the recommended tools globally. For scaffolding, our web app generator comes bundled with `yo`. You can install additional generators with npm. For example to install the [AngularJS](http://angularjs.org) generator, you do `npm install generator-angular`. Run `yo` for more info.

### Usage

Run `yo` in your Terminal to see some help and get familiar with the tool.

Then you would want to scaffold out a new project. For this you use `yo` the scaffolder. It comes bundled with the webapp generator by default, which scaffolds out a skeleton front-end web app:

```
yo webapp
```

You may also want to install and use additional generators. This is done through npm. For example, to install the Angular generator with the required Karma generator one would run: `npm install generator-angular generator-karma`.

A complete workflow might look like this:

```sh
yo webapp                      # scaffold out a skeleton web app project
bower install underscore       # install a dependency for your project from Bower
grunt                          # build the application for deployment
```

Or with the AngularJS generator:

```sh
npm install -g generator-angular generator-karma  # install generators
yo angular                     # scaffold out a AngularJS project
bower install angular-ui       # install a dependency for your project from Bower
grunt test                     # test your app
grunt server                   # preview your app
grunt                          # build the application for deployment
```

## Migrating from earlier versions

If you were previously using Yeoman 0.9.x, you may have noticed a few things have changed. A [migration guide](https://github.com/yeoman/yeoman/wiki/Migrate-from-0.9.6-to-1.0) is available to help you move over to 1.0. We've also written up some of the [reasons](https://github.com/yeoman/yeoman/wiki/The-Road-to-1.0) behind our move. 

## Contributing

We are more than happy to accept external contributions to the project in the form of feedback, [bug reports](https://github.com/yeoman/yeoman) and even better - pull requests. 

At this time we are primarily focusing on improving the user-experience and stability of Yeoman for our 1.0 beta release. Please keep this in mind when submitting feature requests, which we're happy to consider for future versions.