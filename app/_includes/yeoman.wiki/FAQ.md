# Frequently Asked Questions

### What are the goals of the project?

The short-term goals for Yeoman are to provide developers with an improved tooling workflow so that they can spend less time on process and more time focusing on building beautiful web applications. Initially, we hope to make it as easy as possible to work with existing frameworks and tools developers are used to using.

Long-term, the project may also assist developers with creating applications using modern technologies such as Web Components.

### What is a command-line interface?

A command-line interface is a means for developers to interact with a system using text commands. On OSX this this is often done using the Terminal and on Windows we use the command shell or a third-party tool such as [Cygwin](http://www.cygwin.com).


### What is a package manager?

A package manager runs through a command-line interface and is a tool for automating the process of installing, upgrading, configuring and managing dependencies for projects. An example of a package management registry is NPM.


### How does Yeoman differ from Grunt?

Yeoman builds upon a number of open-source tools to offer an opinionated workflow that helps developers achieve common tasks more easily. [Grunt.js](http://gruntjs.com) is one of these tools and powers our underlying build process and task plugin architecture.

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
* [Twitter Bower](http://bower.io)
* [Bootstrap](http://twbs.github.io/bootstrap)
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


### NPM appears to have installed yeoman but `yeoman` still gives me "command not found".

It's likely your PATH does not account for global NPM modules just yet. Better documentation forthcoming but until then, read [this comment](https://github.com/yeoman/yeoman/issues/466#issuecomment-8602733) and [this thread](https://github.com/yeoman/yeoman/issues/430#issuecomment-8597663).

This usually happens when you install Node through Homebrew, since it puts Node modules in a directory that's not in your PATH.

From Homebrew:

```
==> Caveats
Homebrew installed npm.
We recommend prepending the following path to your PATH environment
variable to have npm-installed binaries picked up:
  /usr/local/share/npm/bin
```

Quick fix for advanced users is to put the following in your .bashrc/.zshrc file:
`export PATH=/usr/local/share/npm/bin:$PATH`

For beginners `brew uninstall node` and download and install Node from their [website](http://nodejs.org).


### I'm getting `EMFILE, too many open files`

EMFILE mean you've reached the OS limit of concurrently open files. There aren't much we can do about it, however you can increase the limit yourself.

Add `ulimit -n [number of files]` to your .bashrc/.zshrc file to increase the soft limit.

If you reach the OS hard limit, you can follow this [StackOverflow answer](http://stackoverflow.com/a/34645/64949) to increase it.



### What should I use for documenting my app

View the details within [#152 ticket for recommended solutions for documentation generation](https://github.com/yeoman/yeoman/issues/152#issuecomment-7081670)

### Why does Yeoman require a CLA?

It keeps the IP clean and helps to prevent frivolous lawsuits around who owns what software. Basically the thing all of us want to avoid anyhow. In summary, the CLA asserts that when you donate fixes or documentation, you both own the code that you're submitting and that Google can in turn license that code to other people. (In this case, making it available under the BSD license)

So yeah it's an extra hurdle, but it's something we can't avoid here. This is a Google open source project and thems are the rules.

Just FWIW, here are some other projects that require a similar agreement, jQuery, Firefox, Sizzle, Dojo, Plone, Fedora, Cordova/Phonegap, Apache, Flex.

More:
* http://incubator.apache.org/ip-clearance/index.html
* http://wiki.civiccommons.org/Contributor_Agreements

### How do I use Compass sprites and the `image_url` helper with Yeoman?

Follow the guide provided in [this gist](https://gist.github.com/passy/5270050).


### How can I disable Insight or Update Notifier?

You can use use a command line flag to disable them. Eg. `yo webapp --no-insight`

Insight: `--no-insight`  
Update Notifier: `--no-update-notifier`

You can also add `yeoman_test` as an environment variable with any value to permanently disable both.

### Can I use livereloading with a custom webserver?

You bet! You can remove the `connect` task from your Gruntfile and manually insert this snippet into your HTML:

```html
<!-- livereload script -->
<script>document.write('<script src="http://'
 + (location.host || 'localhost').split(':')[0]
 + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
</script>
```

After that, simply run `grunt server` like you normally would and enjoy automatic page refreshes.

### What should I do after cloning a web application generated with Yeoman?

Yeoman creates a `.gitignore` file for you. This file adds `node_modules` and `bower_components` folders to the blacklist. So, to run `grunt server` and download the Javascript dependencies listed in the `bower.json` file, you need to run 
```Bash
npm install & bower install
```
And check if these folders are created correctly.