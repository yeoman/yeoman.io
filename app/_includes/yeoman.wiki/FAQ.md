# Frequently Asked Questions

### What are the goals of the project?

The short-term goals for Yeoman are to provide developers with an improved tooling workflow so that they can spend less time on process and more time focusing on building beautiful web applications. Initially, we hope to make it as easy as possible to work with existing frameworks and tools developers are used to using.

Long-term, the project may also assist developers with creating applications using modern technologies such as Web Components.

### What is a command-line interface?

A command-line interface is a means for developers to interact with a system using text commands. On OSX this this is often done using the Terminal and on Windows we use the command shell or a third-party tool such as [Cygwin](http://www.cygwin.com).


### What is a package manager?

A package manager runs through a command-line interface and is a tool for automating the process of installing, upgrading, configuring and managing dependencies for projects. An example of a package management registry is NPM.


### How does Yeoman differ from Grunt?

Yeoman builds upon a number of open-source tools to offer an opinionated workflow that helps developers achieve common tasks more easily.[Grunt.js](http://gruntjs.com) is one of these tools and powers our underlying build process and task plugin architecture.

On top of this architecture, we've highly customized tasks, profiles and systems which work well together and also provide developers with features like our generator system and Twitter Bower integration. Yeoman takes care of configuring your Gruntfile and setup to support Sass, CoffeeScript and Require.js/r.js out of the box. With additional features like wiring, an improved `server` and `init`, we like to think of ourselves as a helper project on top of Grunt.

Developers are free to continue using any Grunt tasks with Yeoman and there should remain a good level of cross-tool task compatibility.

### How does Yeoman differ from tools like Brunch or BBB?

We love tools like Brunch and Grunt-BBB and feel that they offer a great solution for developers wishing to scaffold with frameworks like Backbone.js and Ember. With the Yeoman generator system, as we've ported over the Rails Generator system to work with Node, we feel we have an interesting opportunity to take application scaffolding in a new direction - one where it's easier for any developer to write scaffolds, support multiple testing frameworks, capture their own boilerplates and easily re-use them and so on.

### How do I register or unregister a package on Bower?

Packages can be registered on Bower using the `register` command. e.g `bower register myawesomepackagename git://github.com/youraccount/yourrepo`. We recommend reading the Bower [documentation](https://github.com/twitter/bower) before doing this to ensure that your repo includes the necessary files to supporting being `install`ed.



### Will the project be providing Generators for popular frameworks?

Our goal is to facilitate both developers and the community with the tools needed to create rich web applications easily. With that goal in mind, we'll be providing a great API (and docs) to our Generators system with examples of how to implement samples, but will rely on the community to create and maintain Generators for popular frameworks. This will allow us to focus on making Yeoman better without he distractions of maintaining a large number of Generators.


### What license is Yeoman released under?

Yeoman is released under a [BSD](http://opensource.org/licenses/bsd-license.php/) license.

### What should I do before submitting an issue through GitHub?

Thanks for your interest in submitting an issue. In order for us to help you please check that you've completed the following steps:

* Made sure you're on the latest version
* Read our documentation and [README](https://github.com/yeoman/yeoman/blob/master/readme.md) to ensure the issue hasn't been noted or solved already
* Used the search feature to ensure that the bug hasn't been reported before
* Included as much information about the bug as possible, including any output you've received, what OS and version you're on.
* Shared the output from `echo $PATH $NODE_PATH` and `brew doctor` as this can also help track down the issue.

Issues can be submitted via the [issues tab](https://github.com/yeoman/yeoman/issues) on our GitHub repo.


### What tools do Yeoman make use of?

* [Grunt](https://github.com/cowboy/grunt)
* [Twitter Bower ](http://twitter.github.com/bower)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap)
* [Node Build Script](https://github.com/h5bp/node-build-script)
* [HTML5 Boilerplate](http://html5boilerplate.com)
* [Compass](http://compass-style.org/)
* [Modernizr](https://github.com/Modernizr/Modernizr/)
* [Node](http://nodejs.org)
* [NPM](http://npmjs.org)
* [socket.io](http://socket.io)
* [CoffeeScript](http://coffeescript.org)
* [Mocha](http://visionmedia.github.com/mocha/)
* [Jasmine](http://pivotal.github.com/jasmine/)
* [PhantomJS](http://phantomjs.org/)
* [Require.js](http://requirejs.org/)
* [RequireHM](https://github.com/jrburke/require-hm)
* [optipng](http://optipng.sourceforge.net/)
* [JPEGTran](http://jpegclub.org/jpegtran/)
* [connect](https://npmjs.org/package/connect)
* [html-minifier](https://npmjs.org/package/html-minifier)
* [clean-css](https://github.com/GoalSmashers/clean-css)
* [compass_bootstrap](https://github.com/vwall/compass-twitter-bootstrap/)


### My question isn't answered! Help?

A few more common questions relating to using Yeoman are answered here: [github.com/yeoman/yeoman/wiki/Additional-FAQ](https://github.com/yeoman/yeoman/wiki/Additional-FAQ)
