# Getting started with Yeoman

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

First, you'll need to install `yo` and other required tools:

```
npm install -g yo
```

*npm is the package manager for [Node.js](http://nodejs.org/) and comes bundled with it.*

If you are using npm 1.2.10 or above, this will also automatically install `grunt` and `bower` for you. If you're on an older version of npm, you will need to install them manually:

```
# For npm versions < 1.2.10.
npm install -g grunt-cli bower
```

*If you have installed Grunt globally in the past, you will need to remove it first:* `npm uninstall -g grunt`

*On Windows, we suggest you use an improved command line tool such as Console2 or PowerShell to improve the experience.*


### Basic scaffolding

To scaffold a web application, you'll need to install the `generator-webapp` generator:

```
npm install -g generator-webapp
```

This is the default web application generator that will scaffold out a project containing [HTML5 Boilerplate](http://html5boilerplate.com), [jQuery](http://jquery.com), [Modernizr](http://modernizr.com), and [Bootstrap](http://twbs.github.io/bootstrap). You'll have a choice during the interactive prompts to not include many of these.

Now that the generator is installed, create a directory for your new project 
```
mkdir my-yo-project
cd my-yo-project
```

and then run:

```
yo webapp
```

Each project created with yo will also pull in relevant Grunt tasks which the community feels is needed or useful for your workflow.

The webapp generator is considered the simplest possible start for a web app. We also provide some framework generators which can be used to scaffold out a project and later views, models, controllers and so on. 


#### Example: Scaffolding an AngularJS app

As always, before using a new generator, you must install it from npm first:

```
npm install -g generator-angular
```

After that, create a new directory for your application, then run:

```
yo angular
```

Many generators allow you to customize your application by using flags from the initial command. As an example, with `generator-angular`, you can enter:

```
yo angular --minsafe
```

Here, we are first generating the file structure for a basic web application and then writing a number of boilerplate files for a new AngularJS application on top of it. This includes boilerplate directives and controllers as well as scaffolded Karma unit tests.


##### Scaffolding out your Angular app’s pieces

Some generators can also be used to scaffold further pieces of your application - we call these sub-generators.

In the AngularJS framework, for example, your application is made up of a number of pieces including controllers, directives and filters. You can actually scaffold out any of these pieces (and more) during your development workflow as shown below:

```
yo angular:controller myController
yo angular:directive myDirective
yo angular:filter myFilter
yo angular:service myService
```

Each framework generator has further documentation available noting what sub-generators it supports.

### Creating your own generators

See [Generators](https://github.com/yeoman/yeoman/wiki/Generators).


## Bower

Bower is a package manager for the web which allows you to easily manage dependencies for your projects. This includes assets such as JavaScript, images and CSS. It is maintained by Twitter and the open-source community.

Managing packages using Bower can be done using the following commands:

```
# Search for a dependency in the Bower registry.
bower search <dep>

# Install one or more dependencies.
bower install <dep>..<depN>

# List out the dependencies you have installed for a project.
bower list

# Update a dependency to the latest version available.
bower update <dep>
```

### Using Bower with a project scaffolded using yo

To create a basic web app with a dependency on a jQuery plug-in:

```
# Scaffold a new application.
yo webapp

# Search Bower's registry for the plug-in we want.
bower search jquery-pjax

# Install it and save it to bower.json
bower install jquery-pjax --save

# If you're using RequireJS...
grunt bower
> Injects your Bower dependencies into your RequireJS configuration.

# If you're not using RequireJS...
grunt bower-install
> Injects your dependencies into your index.html file.
```

It’s as simple as that.

*Your chosen generator may not include the grunt tasks "bower" and "bower-install". You can read more about how to install and use these at [grunt-bower-requirejs](https://github.com/yeoman/grunt-bower-requirejs) and [grunt-bower-install](https://github.com/stephenplusplus/grunt-bower-install).*


## Grunt

Grunt is a task-based command-line tool for JavaScript projects. It can be used to build projects, but also exposes several commands which you will want to use in your workflow. Many of these commands utilize Grunt tasks under the hood which are maintained by the Yeoman team.

### Grunt commands

```
# Preview an app you have generated (with Livereload).
grunt serve

# Run the unit tests for an app.
grunt test

# Build an optimized, production-ready version of your app.
grunt
```

These commands can be used together with the yo binary for a seamless development workflow:

```
yo webapp
grunt serve
grunt test
grunt
```