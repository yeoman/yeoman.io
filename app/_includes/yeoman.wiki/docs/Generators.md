# Writing Custom Yo Generators

This guide will help you get started with the Yeoman generator system. If you want to skip the explanations and just get started, you can.

* [Introduction](#introduction)
* [Types of generators](#generator-types)
* [Creating a Boilerplate generator](#generator-boilerplate)
* [Creating an Application scaffolding generator](#generator-application)	
* [Using the Passy generator-generator](#passy-generator)
	* [The built-in generator generator](#generator-generator)
	* [Generator Bootstrap](#generator-bootstrap)
* [Generator snippets](#generator-snippets)
* [Generator Internals](#generator-internals)
* [FAQ](#faq)


<h2 id="introduction">Introduction</h2>

Yo generator templates allow you to scaffold out a project using a custom setup 
of boilerplates, frameworks and dependencies. Think of them as a way to easily 
kick off a new project (or part of a project) without manually writing or 
grabbing a random boilerplate.

The basic application generated when calling `yo webapp` actually uses a 
generator itself and they can be quite powerful. A generator can simply copy an 
existing set of files that make up a boilerplate or be more complex, offering 
customization prompts, unit tests and documentation.

In case you think they're a Yeoman-only thing, they're not - anyone in the 
community and write and published by anyone and there are already a number of 
them that have been published to npm: generators for HTML5 Boilerplate, Twitter 
Bootstrap, Karma and so on.


<h2 id="generator-types">Types of generators</h2>

There are two types of Yeoman generators: _boilerplate_ copiers and _application 
scaffolders_. Boilerplate generators generally take an existing boilerplate 
project and write them to your application directory when calling them using 
`yo`. 

Application scaffolders do a lot more and can cover build systems, 
sub-generators, dependency management and automating workflow. 

<h2 id="generator-boilerplate">Creating a Boilerplate generator</h2>

Let's say you have an existing boilerplate Grunt project hosted on GitHub you 
would like to expose via a generator called "awesome". For arguments sake, let's 
say it's HTML5 Boilerplate.

```bash

# Grab the boilerplate generator project
git clone git://github.com/addyosmani/generator-boilerplate.git

# Add your boilerplate to the templates directory
git submodule add https://github.com/h5bp/html5-boilerplate app/templates

# Edit package.json and README.md to customize the repository, author
# and dependencies as well as your instructions (here, our generator is 
# called generator-awesome)

# Run `npm install` within the directory for your generator
npm install

# Create a new directory and run the new generator

mkdir app
cd app
yo awesome 
```



Note: By default, Yo will run the code located at `app/index.js` within your generator's 
directory. This is the file that defines what should happen when a user calls 
your generator.

<h2 id="generator-application">Creating an Application scaffolding generator</h2>

<h3 id="passy-generator">Using the Passy generator-generator</h3>

The [generator-generator](https://github.com/passy/generator-generator) project 
can be used to create complete application scaffold generators, but also 
includes editorconfig, package.json, tests and other sane defaults.

**Writing your own new generator (with generator-generator)**

```bash
# Make sure you have yo installed
npm install -g yo

# Install the generator
npm install -g generator-generator

# Run the generator
yo generator:app 

# Be sure to include :app as generator alone is part of yeoman itself.
```

**How is this different from the built-in generator?**

The built-in yo generator command only generates an index.js file for you. 
generator-generator instead comes with a full project directory 
structure:

```plain
├── app
│   ├── index.js
│   └── templates
│       ├── editorconfig
│       └── jshintrc
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .jshintrc
├── LICENSE
├── package.json
├── README.md
└── test
    ├── test-creation.js
    └── test-load.js
```

`yo generator:app` shows a wizard for generating a new generator whilst yo 
`generator:subgenerator NAME` generates a sub-generator with the name NAME.

<h3 id="generator-generator">The built-in generator generator</h3>

Yo also includes the ability to create a new generator directly from the 
command-line (without additional tools) which is useful for projects requiring 
more custom capabilities or build steps. The following steps will allow you to 
get started with your own custom generator project:

**Make sure you've installed yo**

`npm install -g yo`

**Then to see what has already been installed:**

Running `yo` by itself gives a list of available generators.

**Then to create a new generator call: `yo generate:generatorName`**

```bash
$ yo generator generator
   create generator/index.js
   create generator/templates/readme.md
```


The index.js file is the entry point for your generator whilst the templates 
directory is the place to put the list of files /templates for the generator to 
consume. For example, if you have an existing boilerplate directory of files you 
want to just write out whenever a generator is called, the templates directory 
is where this would go. Same for a simple static site/page generator.

**The contents of generator/index.js are:**

```javascript
var generator = require('yeoman-generator');
var util = require('util');

// Documentation: https://github.com/yeoman/generator/wiki/base

var Generator = module.exports = function Generator() {
  generator.Base.apply(this, arguments);
  // this.option('flag', { desc: 'Desc for flag', ...})
  // this.argument('filename', { desc: 'Desc for filename argument', ...})
};

util.inherits(Generator, generator.Base);

// Copies the entire template directory (with `.`, meaning the
// templates/ root) to the specified location
Generator.prototype.scaffold = function scaffold() {
  this.directory('.', 'place/to/generate');
};
```

The Base class allows you to specify the expected options for the generator, 
generally only to be used by the generator.

The more interesting part of this code is near the end where you define a 
scaffold method for taking the contents of the directory at your root (the 
template directory) and placing them in a location with the users new project 
workspace. You can of course customize the source and destination easily, making 
it simple to say copy either all of a boilerplate (e.g '.') or just a portion 
(e.g '/views').

Now by default the `yo generate` command will only scaffold you out two files. 
You may however be looking for something more fleshed out. 

<h3 id="generator-bootstrap">Generator Bootstrap</h3>

To better understand how generators are written, let's continue looking at them. 
We're now going to review generator-bootstrap which is used for scaffolding 
basic Twitter Bootstrap projects.

It contains a number of files, but the important one is under app/index.js (our 
entry point again):

[https://github.com/yeoman/generator-bootstrap](https://github.com/yeoman/generator-bootstrap)

**What is different about this generator?**

* It includes use strict
* It includes specific modules required for the generator
* It includes the yeoman-generator as a dependency - why?
* Nothing special is done in the module.exports, but it inherits the Yeoman 
  generator base
* It uses prompts to prompt the user for some information used to customize the 
  experience
* Depending on their response, we this.install (using Bower) a specified package

```javascript
'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator() {
   yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.askFor = function askFor(argument) {
   var cb = this.async();

   var formats = ['css', 'sass', 'less'];

   var prompts = [{
       name: 'format',
       message: 'In what format would you like the Twitter Bootstrap 
stylesheets?',
       default: formats.join('/')
   }];

   this.format = formats[0];

   this.prompt(prompts, function(err, props) {
       if (err) {
           return this.emit('error', err);
       }

       formats.forEach(function(opt) {
           if ((new RegExp(opt, 'i')).test(props.format)) {
               this.format = opt;
           }
       }, this);

       cb();
   }.bind(this));
};

Generator.prototype.bootstrapFiles = function bootstrapFiles() {

   // map format -> package name
   var packages = {
       css: 'bootstrap.css',
       sass: 'sass-bootstrap',
       less: 'bootstrap'
   };

   this.install(packages[this.format]);
};
```


For a more complete example look at 
[https://github.com/yeoman/generator-webapp/blob/master/app/index.js](https://github.com/yeoman/generator-webapp/blob/master/app/index.js)

<h3 id="generator-snippets">Generator snippets</h3>

The following section will help you get acquainted with some common actions you 
might want to implement when writing your own generator.

**Prompts**

The prompts system can be used to prompt the user for information when 
scaffolding out a project using a generator or sub-generator. Prompts below take 
the form of an array of objects, each of which specify:

* name: a prompt name (which can later be used to access data associated with 
  the response)
* message: the actual question to prompt the user with
* default: the options available for answering the prompt question
* warning: a warning displayed before continuing with a specific option

```javascript
var prompts = [{
    name: 'compassBootstrap',
    message: 'Would you like to include Twitter Bootstrap for Sass?',
    default: 'Y/n',
    warning: 'Yes: All Twitter Bootstrap files will be placed into the styles directory.'
  },
  {
    name: 'includeRequireJS',
    message: 'Would you like to include RequireJS (for AMD support)?',
    default: 'Y/n',
    warning: 'Yes: RequireJS will be placed into the JavaScript vendor directory.'
  }];

  this.prompt(prompts, function (err, props) {
    if (err) {
      return this.emit('error', err);
    }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.compassBootstrap = (/y/i).test(props.compassBootstrap);
    this.includeRequireJS = (/y/i).test(props.includeRequireJS);

    cb();
  }.bind(this));
};
```

**Using them in for conditionally including files later:**

```javascript
AppGenerator.prototype.bootstrapJs = function bootstrapJs() {
  if (this.includeRequireJS) {
    this.copy('bootstrap.js', 'app/scripts/vendor/bootstrap.js');
  }
};
```

**Template/copy specific files:**

Copying specific files for your generator output can be done using this.copy() 
or this.template(). The latter will copy the files over from your generator's 
templates directory to the directory the user is currently in. The second 
argument to this.template() can be used to store a file with a custom filename 
if required.

```javascript
AppGenerator.prototype.bootstrapJs = function bootstrapJs() {
  if (this.includeRequireJS) {
    this.copy('bootstrap.js', 'app/scripts/vendor/bootstrap.js');
  }
};
```

**Writing content to files:**

Sometimes you may wish to write custom content to a file as a part of your 
generator's workflow. This can be done using this.write() which will save custom 
content to a specified file.

```javascript
AppGenerator.prototype.mainStylesheet = function mainStylesheet() {
    this.write('app/styles/main.scss', 
    'MY SASS STYLESHEET CONTENT');
};
```

**Writing directories and file contents:**

this.write() and this.mkdir() can be similarly used to create new directories, 
sub-directories and again, write custom content to a new file.

```javascript
AppGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.write('app/index.html', this.indexFile);
  this.write('app/scripts/main.js', this.mainJsFile);
  this.write('app/scripts/hello.coffee', this.mainCoffeeFile);
};
```

**Scaffolding an index:**

```javascript
AppGenerator.prototype.writeIndex = function writeIndex() {
  // prepare default content text
  var defaults = ['HTML5 Boilerplate', 'Twitter Bootstrap'];

  var contentText = [
    '        <div class="container">',
    '            <div class="hero-unit">',
    '                <h1>Allo!</h1>',
    '                <p>You now have</p>',
    '                <ul>'
  ];

  if (!this.includeRequireJS) {
    this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', [
      'components/jquery/jquery.js',
      'scripts/main.js'
    ]);

    this.indexFile = this.appendFiles({
      html: this.indexFile,
      fileType: 'js',
      optimizedPath: 'scripts/coffee.js',
      sourceFileList: ['scripts/hello.js'],
      searchPath: '.tmp'
    });
  }


  if (this.includeRequireJS) {
    defaults.push('RequireJS');
  } else {
    this.mainJsFile = 'console.log('Allo!');';
  }

  // iterate over defaults and create content string
  defaults.forEach(function (el) {
    contentText.push('                    <li>' + el  +'</li>');
  });

  contentText = contentText.concat([
    '                </ul>',
    '                <p>installed.</p>',
    '                <h3>Enjoy coding! - Yeoman</h3>',
    '            </div>',
    '        </div>',
    ''
  ]);

  // append the default content
  this.indexFile = this.indexFile.replace('<body>', '<body>\n' + contentText.join('\n'));
};
```

**You can trigger the installation of Bower dependencies using:**

```javascript
 this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });
```

**Hooks for sub-generators (e.g common is the name of another generator, 
considered a piece of an angular app).**

Occasionally, you may wish to provide sub-generators as a part of your generator 
workflow. A sub-generator takes care of scaffolding one specific piece of an 
application, such as a view or model. Crafting part of your workflow as a 
sub-generators means that a broader generator could call them (using 
`this.hookFor`) to create an initial application, but you can also later call the 
sub-generator to just create that one piece (e.g a new view). This might be done 
using `yo mygenerator:mysubgenerator`.

```javascript
AppGenerator.prototype.writeIndex = function writeIndex() {
  // prepare default content text
  var defaults = ['HTML5 Boilerplate', 'Twitter Bootstrap'];

  var contentText = [
    '        <div class="container">',
    '            <div class="hero-unit">',
    '                <p>You now have</p>',
    '                <ul>'
  ];

  if (!this.includeRequireJS) {
    this.indexFile = this.appendScripts(this.indexFile, 'scripts/main.js', [
      'components/jquery/jquery.js',
      'scripts/main.js'
    ]);

    this.indexFile = this.appendFiles({
      html: this.indexFile,
      fileType: 'js',
      optimizedPath: 'scripts/coffee.js',
      sourceFileList: ['scripts/hello.js'],
      searchPath: '.tmp'
    });
  }


  if (this.includeRequireJS) {
    defaults.push('RequireJS');
  } else {
    this.mainJsFile = 'console.log(\'Allo!');';
  }

  // iterate over defaults and create content string
  defaults.forEach(function (el) {
    contentText.push('                    <li>' + el  +'</li>');
  });

  contentText = contentText.concat([
    '                </ul>',
    '                <p>installed.</p>',
    '                <h3>Enjoy coding! - Yeoman</h3>',
    '            </div>',
    '        </div>',
    ''
  ]);

  // append the default content
  this.indexFile = this.indexFile.replace('<body>', '<body>\n' + contentText.join('\n'));
};
```


**Remotely pull in files:**


```javascript
Generator.prototype.bootstrapFiles = function bootstrapFiles() {
  var appPath = this.appPath;
  if (this.compassBootstrap) {
    var cb = this.async();

    this.write(path.join(appPath, 'styles/main.scss'),
    '@import "compass_twitter_bootstrap";');
    this.remote('vwall', 'compass-twitter-bootstrap', 'v2.2.2.2', function (err, remote) {
      if (err) {
        return cb(err);
      }
      remote.directory('stylesheets', path.join(appPath, 'styles') );
      cb();
    });
  } else if (this.bootstrap) {
    this.log.writeln('Writing compiled Bootstrap');
    this.copy( 'bootstrap.css', path.join(appPath, 'styles/bootstrap.css') );
  }

  if (this.bootstrap || this.compassBootstrap) {
    //this.directory( 'images', 'app/images' );
  }
};
```

<h2 id="generator-internals">Generator Internals</h2>

If you wish to dive in further into how the Yo generator system works, 
documentation on the system internals are also available. Read below for:

[Generator API](https://github.com/yeoman/generator/wiki/base)
[Environment](https://github.com/yeoman/generator/wiki/env)
[Testing 
generators](https://github.com/yeoman/generator/wiki/Testing-generators)

Once you've grokked the basics, the best way to learn how to write your own 
generators is taking look at generators other developers have written. The HTML5 
Boilerplate and Mobile Boilerplate projects are good examples of simpler 
generators whilst the AngularJS generator is one of the more advanced ones out 
there. 

<h2 id="faq">Frequently asked questions</h2>

* **How do I pull in dependencies using Bower?** Place a component.json file 
  filled out with Underscore templating in the /templates directory and then run 
  `this.installDependencies` from within your generator's app/index.js. 
  Alternatively they can install with `this.bowerInstall(['jquery', 
  'underscore'], { save: true });`
* **How do I unit test generators?** If using the 
  [generator-generator](https://github.com/passy/generator-generator), very 
  basic Mocha unit tests will be scaffolded out for you. You can also take a 
  look at the [unit 
  tests](https://github.com/yeoman/generator-webapp/blob/master/test/test.js) 
  written for generator-webapp for examples of what you probably want to be 
  testing.
* **How do I create sub-generators?** Again, the generator-generator now has 
  support for [generating 
  sub-generators](https://github.com/passy/generator-generator#commands) that is 
  worth checking out. 
* **How can I extend my generators to do more than what the system allows out of 
  the box?** Generators are just Node.js and what's not available in the API can 
  be found over on npmjs.org.
* **How do I publish my generator to NPM?** Make sure you add relevant keywords 
  to your package so that people can find your generator (e.g 
  `yeoman-generator`) and then run `npm publish`. Further information about using
NPM and registering packages with it can be found in the [official docs](https://npmjs.org/doc/developers.html).