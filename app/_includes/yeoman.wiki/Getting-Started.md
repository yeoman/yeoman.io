# Getting started with Yeoman 1.0 beta

**Keep in mind that this is a beta and will have bugs. Don't use in production.**

The Yeoman workflow is comprised of three core tools for improving your productivity and satisfaction when building a web app. These tools are:

* [yo](https://github.com/yeoman/yo) - the scaffolding tool from Yeoman
* [bower](http://bower.io) - the package management tool
* [grunt](http://gruntjs.com) - the build tool

Each of these projects are independently maintained by their respective communities, but work well together as a part of a prescriptive workflow for keeping you effective. Let’s walk through what these binaries can do.

<p class="toolset">
  <img class="full" src="https://raw.github.com/yeoman/yeoman.io/gh-pages/media/workflow.jpg">
</p>

## yo 

Yo is maintained by the Yeoman project and offers web application scaffolding, utilizing scaffolding templates we refer to as generators. You typically install yo and any generators you think you might use via npm.

### Installing yo and some generators

First you'll need to install `yo` (the webapp generator is included):

```
npm install -g yo grunt-cli bower
```

This will automatically install `grunt` and `bower` for you, if you are using npm 1.2.10 or above. You can also install those manually: `npm install -g grunt-cli bower`.

If you have installed Grunt globally in the past, you will need to remove it first: `npm uninstall -g grunt`

On Windows we suggest you use an improved command line tool such as Console2 or PowerShell to improve the experience.

### Basic scaffolding

```
yo webapp
```

This is the default generator and will scaffold out a project containing [HTML5 Boilerplate](http://html5boilerplate.com), [jQuery](http://jquery.com) and [Modernizr](http://modernizr.com). [Twitter Bootstrap](http://twitter.github.com/bootstrap) can be optionally installed from the prompt you will be presented.

Each project created with yo will also pull in relevant Grunt tasks which we feel are needed or useful for your workflow.

The webapp generator is considered the simplest possible start for a webapp. We also provide some framework generators can be used to scaffold out a project and later views, models, controllers and so on. 

### Scaffolding an AngularJS app

Before you can create an angular app you need to install the generator  

```
npm install -g generator-angular
```

Generator must be installed locally unless you have upgraded to ```1.0.0-beta.4```, to upgrade use ```npm cache clean && npm update -g yo```.

After that you can run
```
yo angular
```

or if you intend to minify your code

```
yo angular --minsafe
```

Here, we are first generating the file structure for a basic web application and then writing a number of boilerplate files for a new AngularJS application on top of it. This includes boilerplate directives and controllers as well as scaffolded Karma unit tests.

### Scaffolding out Angular pieces

```
yo angular:controller myController
yo angular:directive myDirective
yo angular:filter myFilter
yo angular:service myService
```

Yo scaffolds can also be used to scaffold further pieces of your application - we call these sub-generators. 

In the AngularJS framework for example your application is made up of a number of pieces including controllers, directives and filters. You can actually scaffold out any of these pieces (and more) during your development workflow as shown above.

Each framework generator has further documentation available noting what sub-generators it supports.

### Creating your own generators

See [Generators](https://github.com/yeoman/yeoman/wiki/Generators).

## Bower 

Bower is a package manager for the web which allows you to easily manage dependencies for your projects. This includes assets such as JavaScript, images and CSS. It is maintained by Twitter and the open-source community.

Managing packages using Bower can be done using the following commands:

```
bower search <dep> - search for a dependency in the Bower registry
bower install <dep>..<depN> - install one or more dependencies
bower list - list out the dependencies you have installed for a project
bower update <dep> - update a dependency to the latest version available
```

Bower can be used with a project scaffolded using yo.

### Create a basic webapp, search for a jQuery plugin with Bower and install it

```
yo webapp
bower search jquery-bbq
> BBQ has been found. Let’s install it!
bower install jquery-bbq
> installs jquery, jquery-bbq
```

### Create an AngularJS app, install Angular UI from Bower, include in your page and build it.

```
yo angular
bower install angular-ui
# then add <script src="components/angular-ui/build/angular-ui.js"></script>
# and <link rel="stylesheet" href="components/angular-ui/build/angular-ui.css"/>
grunt
```

It’s as simple as that. 

## grunt

Grunt is a task-based command-line tool for JavaScript projects. It can be used to build projects, but also exposes several commands which you will want to use in your workflow. Many of these commands utilize Grunt tasks behind the hood which are maintained by the Yeoman team.

### Grunt commands

```
grunt - build an optimized, production-ready version of your app
grunt server - preview an app you have generated (with Livereload)
grunt test  - run the unit tests for an app
```

These commands can be used together with the yo binary for a seamless development workflow:

#### Create a basic web app, preview it, test, build

```
yo webapp
grunt server
grunt test
grunt
```
---

### I used Yeoman 0.9.x and would like to upgrade to 1.0. What do I do?

We have an [upgrade guide](https://github.com/yeoman/yeoman/wiki/Migrate-from-0.9.6-to-1.0) to assist with moving your 0.9.x projects over to 1.0. Note that we no longer offer a yeoman binary which wraps both grunt and bower, but instead use a new yo binary for your scaffolding needs. The guide will explain how this workflow applies to upgrading in more detail.