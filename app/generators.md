# Generate a Generator

* [What's a Generator?](#whats-a-generator)
* [Setup](#setup)
* [Writing Your First Generator](#writing-your-first-generator)
  * [Exploring Prompts](#lets-explore-prompts-a-little-more)
  * [Let's Talk Magic](#i-mentioned-magic-earlier-heres-some-more)
* [Huddle Up](#okay-huddle-up)
  * [Where We Are](#where-we-are)
  * [Where We're Going](#where-were-going)
* [Writing Your First Generator... Again](#writing-your-first-generator-again)
  * [Templates](#templates)
  * [Let's See It](#lets-see-it)
  * [Sub-Generators](#a-sub-generator)
* [Writing Your Next Generator](#writing-your-next-generator)
* [Snippets](#snippets)
* [FAQ](#frequently-asked-questions)
* [Reference Materials](#reference-materials)
* [Get Help](#get-help)

<h2 id="whats-a-generator">What's a Generator?</h2>

By now, you've probably read the lovely [Getting Started](http://yeoman.io/gettingstarted.html) guide, and have used `yo webapp` to bootstrap your application. Remember all the prompts, like "Would you like to install Bootstrap?"? You've used a generator! That was [`generator-webapp`](https://github.com/yeoman/generator-webapp) in action.

The idea behind a generator can be simplified to sharing your ideas and best practices with others. It wasn't long ago using [HTML5 Boilerplate](http://html5boilerplate.com) was the best way to get your application off the ground. But now, even the act of cloning and customizing the boilerplate to work within your environment seems strenuous.

<img src="/assets/img/yobox.png" style="width: 100%; max-width: 400px;">

_And a day of good to you, sir._

When developing a generator, having the option to "do this else that" based on the response of the user creates a whole new world of possibilities. You can conditionally fetch dependencies, create files, tests, configuration files for various tools (EditorConfig, git, JSHint), and anything else you dream up.

Working with the terminal, worrying about spawning concurrent processes, creating race conditions, and other concerns you may have about the Node enviroment have been taken care of. Even for the unfamiliar, it's super easy to get started writing your own generator.

So, let's do that.


<h2 id="setup">Setup</h2>

To get your system ready for creating your own generator, you'll need to install `yo` and `generator-generator`.

From your terminal, run:

```bash
npm install -g yo generator-generator
```

You're set up!


<h2 id="writing-your-first-generator">Writing Your First Generator</h2>

Now that you have `yo` and `generator-generator` installed, let's say we wanted to make a generator to help someone build a simple blog.

We'll create a directory to work on our generator called `generator-blog`. **It's important to name the directory correctly following the generator-____ convention**. You'll see why in a moment. Let's create the directory, and get going!

```bash
$ mkdir ~/dev/generator-blog && cd $_
$ yo generator

    _-----_
   |       |
   |--(o)--|   .--------------------------.
  `---------´  |    Welcome to Yeoman,    |
   ( _´U`_ )   |   ladies and gentlemen!  |
   /___A___\   '__________________________'
    |  ~  |
  __'.___.'__
´   `  |° ´ Y `
```

Look at that handsome devil. He will be our friend while creating your generator, and your users' friend when using it.

He'll ask you a couple of questions about your intentions.

Make sure you name your generator "blog". This will name your generator, `generator-blog`, in your `package.json` file. This `generator-____` is the convention that the `yo` command requires when your user types `yo blog`.

Answer accordingly, and I'll see you in a minute!

...

Hi, again!

Did he generate all your stuff?

```text
├── app
│   ├── index.js
│   └── templates
│       ├── _bower.json
│       ├── _package.json
│       ├── editorconfig
│       ├── jshintrc
│       └── travis.yml
├── test
│   ├── test-creation.js
│   └── test-load.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── LICENSE
├── package.json
└── README.md
```

When a user first interacts with your generator, they'll type:

```bash
~ yo blog
```

You'll probably want to see what you're creating and play with it while still developing. To do that, run:

```bash
~ npm link
```

Because `generator-blog` was specified as the package name in `package.json`, `npm link` will create a symbolic link in a more widely-accessible location (e.g., `/usr/local/lib/node_modules/generator-blog`). This enables you to access your local `~/dev/generator-blog` generator globally, making development, and life in general, much easier.

Switch over to a new tab, create a new folder, and see what you get!

```bash
~ mkdir ~/dev/generator-blog-playground && cd $_
~ yo blog

     _-----_
    |       |
    |--(o)--|   .--------------------------.
   `---------´  |    Welcome to Yeoman,    |
    ( _´U`_ )   |   ladies and gentlemen!  |
    /___A___\   '__________________________'
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

Would you like to enable this option? (Y/n)
```

There he is again with his silly questions. Play around for a bit, then come back when you're ready for a walkthrough of what's happening behind the scenes.

...

Not terribly useful, is it? But did you get a sense of the power you have and the absence of head scratching it took to get there?

If you were to leave your generator this way, you would have, like, 0 downloads per week. Let's make it do something useful!

Open your `~/dev/generator-blog` folder in your favorite editor, and navigate to `app/index.js`.  This is the starting point for your generator.

<h4 id="lets-explore-prompts-a-little-more">Let's explore prompts a little more.</h4>

```js
var prompts = [{
  type: 'confirm',
  name: 'someOption',
  message: 'Would you like to enable this option?',
  default: true
}];
```

There's a `prompts` array, containing an object for each question you wish to ask the user. For our blog, maybe we want it to look something more like:

```js
var prompts = [{
  name: 'blogName',
  message: 'What do you want to call your blog?'
}];
```

Next, you'll see something you'll start seeing a lot more of-- magic. Helper methods given to you from the Yeoman Generator itself.

```js
this.prompt(prompts, function (props) {
  this.someOption = props.someOption;

  cb();
}.bind(this));
```

`this.prompt` ate up our prompts array for it's first argument, then a callback that will execute after all of the responses have come in.

Let's switch this function up to make sense for our application.

```js
this.prompt(prompts, function (props) {
  // `props` is an object passed in containing the response values, named in
  // accordance with the `name` property from your prompt object. So, for us:
  this.blogName = props.blogName;

  cb();
}.bind(this));
```

Above, we assigned the user's input to `this.blogName`. Because of the `.bind(this)` on the call to `this.prompt`, we save the context of the `BlogGenerator` function, so we can use the user's responses later.

Yeoman generators rely on the Inquirer.js prompt system. Make sure to checkout the [full documentation over there](https://github.com/SBoudrias/Inquirer.js) to learn more about prompt types (checkboxes, lists, etc) and control helpers (validation, prompt hierarchy, filtering, etc).

<h4 id="i-mentioned-magic-earlier-heres-some-more">I mentioned "magic" earlier. Here's some more.</h4>

If you scroll back to the top of the file (`app/index.js`), you'll see:

```js
var BlogGenerator = module.exports = function BlogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  // ...
};

util.inherits(BlogGenerator, yeoman.generators.NamedBase);
```

With these two calls, we are inheriting functionality from both [`Base`](https://github.com/yeoman/generator/blob/master/lib/base.js) and [`NamedBase`](https://github.com/yeoman/generator/blob/master/lib/named-base.js). That's how we were able to call that `this.prompt` function, as well as many others you'll see while creating your generator.

So, back to what we're doing in this file. Starting from the top, every method you place on the `BlogGenerator.prototype` will be invoked in the order you've written them. If you need a "private" method, just place an underscore in front of the method name, e.g. `BlogGenerator.prototype._dontRunMe`.

So, let's walk through it. From the top.

```js
var BlogGenerator = module.exports = function BlogGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};
```

This is our constructor function, which will be run first. Out of the box, this:

* wires us up with `Base`
* creates a listener for the `end` event (when the methods on the prototype finish executing)
* gives us access to our generator's `package.json` file

Next:

```js
BlogGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // ...

  this.prompt(prompts, function (props) {
    // ...

    cb();
  }.bind(this));
};
```

I've extracted the useful bits we haven't covered yet, just to point out one thing you may have been wondering: what if you need to execute an asynchronous task? Just call `this.async()`. This will return a function, that you then pass into your asynchronous task as a callback.

`this.async()` tells the handsome devil he needs to hang on a sec, while we resolve something. Then when the callback is executed, it pokes him in the shoulder until he wakes up, and he's back on to the next method.

Next:

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};
```

This is pretty cool stuff. `this.mkdir` creates a directory in the directory the user is running your generator from. So, the first two lines simply create some directories for the user. Directory directory directory.

The last two lines call `this.copy`, which then removes the `_` and places the files in the project's root directory.

Let's rewrite this to something more sensible for a blog:

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('posts');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};
```

Next:

```js
BlogGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
```

Just like the `app` function, this uses `this.copy` to move over two "project files".

Note:

`BlogGenerator.prototype.app` and `BlogGenerator.prototype.projectfiles` could just as easily have been written in one method, but it's the predictable behavior of the Yeoman chain of execution that makes splitting your functionality up into different methods totally up to you.


<h2 id="okay-huddle-up">Okay, huddle up.</h2>

Let's review what we're trying to do real quick, to make sure we're on the same page.

<h3 id="where-we-are">Where we are.</h3>

When a user types...

```bash
~ yo blog
```

...they are presented with...

```text
What do you want to call your blog?
```

In `app/index.js`, we're storing their response on the `BlogGenerator` prototype as a property called `blogName`.

We then copy a few files into their application's directory, install any Bower or NPM dependencies we decide their app will have, and that's about it. It may not be the most elaborate example of a generator, but now that you know what's going on behind the prompts, you can imagine how trivial it will be for you to extend the functionality of this generator to unprecedented levels.

<h3 id="where-were-going">Where we're going.</h3>

You're pretty much armed with all you need to start popping out generators. At this point, it might be a good idea to go make a simple generator or two, or keep playing with the blog generator.

In the back of your head, start kicking around some ideas for a generator you could use in your workflow at home on personal projects, at work with your peers, in class with fellow students, on the street with stinky saxophone players, etc.

If you're sticking with me, here's what we're going to work on next:

* Add in some dependencies our target user will need
* Make a sub-generator to let a user create a new post
* Bring in some Grunt tasks

Intrigued? Join me in our souped-up version of this introduction...


<h2 id="writing-your-first-generator-again">Writing Your First Generator... Again.</h2>

Things are looking great for our blog generator. We have enough in place to start making some decisions. So much is possible, but keeping in mind the scope of an introductory walkthrough, here are the decisions I made for us:

* Blog posts will be written in Markdown
* NPM will install some Grunt tasks, and a few other helpers for two custom tasks we'll give the user:
  * `grunt build` - creates a "wordmap" of keywords from each blog post
  * `grunt server` - watches for changes to the Markdown, re-builds the project
* Bower will fetch two run-time dependencies:
  * [Showdown](https://github.com/coreyti/showdown) - translates Markdown into HTML
  * [Showup](https://github.com/stephenplusplus/showup) - a library written for the purposes of this generator

When all is said and done, the user will have a collection of files in a structure resembling:

```text
├── bower_components
│   ├── showdown
│   └── showup
├── posts
│   ├── 2013-06-01-a-blog-post.md
│   └── 2013-06-01-another-blog-post.md
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── Gruntfile.js
├── bower.json
├── config.json
├── index.html
├── package.json
└── wordmap.json
```

Alright, I think it's time we go back and edit some more files from `~/dev/generator-blog` and make this thing happen!


<h3 id="templates">Templates</h3>

When our user runs `yo blog`, they will receive the files from `app/templates` in the directory they are working in at the time the command is run. Let's set up some more useful files.

Remember those `_underscored` files? Think about it this way: they are lead by an "underscore", or "Lo-Dash" to indicate we will use [Lo-Dash](http://lodash.com) to process them.

Head back to `app/index.js`. Since it's been a while, scroll back to the `app` function, so we can see if we need to change anything.

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('posts');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};
```

Hey, that actually held up! We need a few more thangs, though.

```js
BlogGenerator.prototype.app = function app() {
  this.mkdir('posts');
  this.template('_index.md', 'posts/index.md');

  this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('index.html', 'index.html');

  this.template('_bower.json', 'bower.json');
  this.template('_config.json', 'config.json');
  this.template('_package.json', 'package.json');
  this.copy('wordmap.json', 'wordmap.json');
};
```

Something new: `this.template`! Instead of just performing a simple copy, this function will run Lo-Dash through the file matched from the first parameter, then create and place the compiled result at the location passed in as the second argument.

For our generator, what the user decided to call their blog at our prompt will shape the files we create.

Create/edit the following files from [this gist](https://gist.github.com/stephenplusplus/5647725).

* `app/templates/_index.md`
* `app/templates/Gruntfile.js`
* `app/templates/index.html`
* `app/templates/_bower.json`
* `app/templates/_config.json`
* `app/templates/_package.json`
* `app/templates/wordmap.json`

You'll see `<%= _.slugify(blogName) %>` come up a couple times. `slugify` is a method provided by [underscore.string](http://epeli.github.io/underscore.string), which takes "A name like this!" and turns it into "a-name-like-this". `blogName` refers to `this.blogName`, which we assigned in the callback to `this.prompt`.

We already talked about the different dependencies we have and the purpose of these files. Let's move on and actually create our first unique method in `app/index.js`.

```js
BlogGenerator.prototype.app = function app() {
  // ...
};

BlogGenerator.prototype.runtime = function runtime() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};
```

Create/edit the following files from [this gist](https://gist.github.com/stephenplusplus/5647725).

* `app/templates/bowerrc`
* `app/templates/gitignore`

We're just doing a simple copy on these files as they don't require any dynamically generated content within them.

At this point, believe it or not, we have a blog generator! Yes, there is some stuff going on in our Gruntfile that we didn't talk about. Again, though, we just want to focus on getting a generator up and running.

Let's see, what time is it for you? If you said drink time, you are correct! Grab one and I'll meet you back here. Get me something good.

<h3 id="lets-see-it">Let's See It</h3>

Let's test this bad boy out! Flip open a new terminal and type our beloved command:

```bash
$ yo blog
```

We should see the HD (handsome devil) asking us what we want to call our blog. I don't know about you, but I name all of my blogs after characters from [California Dreams](http://en.wikipedia.org/wiki/California_Dreams).

So, for me, after running `yo blog`, I saw:

```bash
What do you want to call your blog? sly winkle
   create posts/index.md
   create Gruntfile.js
   create index.html
   create bower.json
   create config.json
   create package.json
   create wordmap.json
   create .bowerrc
   create .gitignore


I'm all done. Running bower install & npm install for you to install the
required dependencies. If this fails, try running the command yourself.

# whole bunch of "installing..." lines
```

If you take a look at the file structure you ended up with, it should match what we had anticipated earlier. Since your NPM and Bower dependencies were installed for you, thanks to `this.installDependencies` in your `BlogGenerator` constructor, you have everything you need to try a build. Let's see what happens.

```bash
$ grunt build
Running "build" task

Done, without errors.
```

Why does it have to "quote" our build task? It's almost offensive.

Anyway, what that did for us was re-generate `posts/index.md`. That's our index, or Table of Contents file that is generated each time `grunt build` is run.

The build task also performs the following sub-tasks:

* loops over the files inside of `posts/`
  * strips out 10 of the most commonly used words from each post
  * stuffs them in a big array in `wordmap.json` to enable searching from the front end

If you're curious to see more, just go look!

That's the build task, which is also run from another grunt task; `server`. Try that one out:

```bash
$ grunt server
Running "build" task

Running "connect:livereload" (connect) task
Starting connect web serve on localhost:9000.

Running "open:server" (open) task

Running "watch" task
```

You should now at least see a somewhat finished product. We're only missing one rather important thing...

<h3 id="a-sub-generator">A Sub-Generator!</h3>

The last piece of our generator puzzle is enabling a sub-generator, something that takes your basic "scaffolding" generator a step further. Here's what we want to see happen:

```bash
$ yo blog:post "California Dreams was good, but not great."
# creates a new markdown file
```

Let's wire it up!

```bash
$ cd ~/dev/generator-blog
$ yo generator:subgenerator "post"
   create post/index.js
   create post/templates/somefile.js
```

Thanks, `generator-generator`! Let's see what that `post/index.js` file it created looks like.

`post/index.js`:

```js
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PostGenerator = module.exports = function PostGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the post subgenerator with the argument ' + this.name + '.');
};

util.inherits(PostGenerator, yeoman.generators.NamedBase);

PostGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
```

A sub-generator function, e.g. `PostGenerator`, works in the same way as a generator function. Your methods will be invoked in the order they are defined, and you're free to use the methods available to your generator within your sub-generator, such as `this.async`, `this.installDependencies`, `this.mkdir`, etc.

As was explained in the comment, calling `NamedBase` will give us "The blog title" from the `yo blog:post "The blog title"` command as `this.name`. Let's test it out.

```bash
# from your playground directory
$ yo blog:post "hey, buddy."
You called the post subgenerator with the argument hey, buddy.
   create somefile.js
```

You can probably already tell how simple it will be to get exactly what we want. All we have to do is change some words, what file is created, and what goes in it.

If you don't still have `post/index.js` open, please go back and make the following changes.

`post/index.js`:

```js
'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var PostGenerator = module.exports = function PostGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(PostGenerator, yeoman.generators.NamedBase);

PostGenerator.prototype.files = function files() {
  var today = new Date();

  var prefix = today.getUTCMonth() + 1;
  prefix += '-' + today.getDate();
  prefix += '-' + today.getFullYear();

  var filename = prefix + '-' + this._.slugify(this.name) + '.md';
  this.write('posts/' + filename, '# ' + this.name);
};
```

We made use of a new method here, `this.write`. As I'm sure you've guessed by now, `this.write` will write the second argument (the file contents) to the first argument (the file path). For us, we chose to prefix the name of the file with a timestamp, then a slugified version of the post name, to make something like `06-01-2013-apples-make-good-juice.md`. We passed that in to `this.write` as its first argument, then a simple `# Heading`-style heading as the content of the Markdown file.

_I chose to remove the `templates` directory, as the file we're generating is quite small in content. Since it's just a `# Heading` based on the title of the post, I inlined it into this `PostGenerator.prototype.files` function. For a larger-scale application, well structured separation is indispensable._

Holy moly, we have a blog generator! Try creating and editing posts. Play with `grunt server` and `grunt build`, keeping `index.html` open to see the results. Did everything work?


<h2 id="writing-your-next-generator">Writing Your Next Generator</h2>

For such a long tutorial, we've accomplished something rather light-weight. Don't be fooled, though. You're running JavaScript (which you're already familiar with) in a Node world. You don't have to stick to the built-in helper methods to get the job done. You are free, and encouraged, to think outside the box, create or pull in your own modules, and make your generator do exactly what it needs to.

Writing a generator is a whole new way of thinking, and as such, it will take a while for the potential to be fully realized and used appropriately. If you have the time and patience required to create something and learn about Yeoman as you go, you will have a [world of support](#get-help) available to you.

Some tips going forward:

* **Play** with other generators. - Pick a generator, and see all it can do.
* **Review** the code of other generators. _One of the most advanced examples is [`generator-angular`](https://github.com/yeoman/generator-angular)._
* **Test**. `generator-generator` comes with a basic testing framework in place. Inspect how it's set up, and be sure to use it when writing your own generators.


<h2 id="get-help">Get Help</h2>

Currently, there are over 90 generators available on NPM-- generators for [Angular](https://github.com/yeoman/generator-angular), [Backbone](https://github.com/yeoman/generator-backbone), [Ember](https://github.com/yeoman/generator-ember), [Chrome apps](https://github.com/yeoman/generator-chromeapp), [FireFox OS](https://github.com/zenorocha/generator-firefox-os), Express stacks, PHP frameworks, [and more](http://yeoman.io/community-generators.html). You are joining a young, growing community of Generator developers when you enter the ring.

If you hang around the [Yeoman > Generator](https://github.com/yeoman/generator) GitHub long enough, you'll start to recognize some names. There is always a place to let your questions, opinions, and ideas be heard.

There's also the [#yeoman freenode IRC room](http://webchat.freenode.net/?channels=yeoman) you can hop in. Introduce yourself and let us know what you're working on.

We're all part of the team, working towards the same future: intuitive, scalable, and maintainable applications that start and grow from an intelligent workflow. If you want to help keep the web going in the right direction, come meet other people just like you.

We look forward to meeting you and your generator!


<h3 id="snippets">Snippets</h3>

The following section will help you get acquainted with some common actions you 
might want to implement when writing your own generator.

**Prompts**

The prompts system can be used to prompt the user for information when 
scaffolding out a project using a generator or sub-generator. Prompts below take 
the form of an array of objects, each of which specify:

* type: the type of prompt (defaults to "input")
* name: a prompt name (which can later be used to access data associated with 
  the response)
* message: the actual question to prompt the user with
* default: the default value

```javascript
var prompts = [{
  type: 'confirm',
  name: 'compassBootstrap',
  message: 'Would you like to include Bootstrap for Sass?',
  default: true
}, {
  type: 'confirm',
  name: 'includeRequireJS',
  message: 'Would you like to include RequireJS (for AMD support)?',
  default: false
}];

this.prompt(prompts, function (props) {
  // manually deal with the response, get back and store the results.
  // we change a bit this way of doing to automatically do this in the self.prompt() method.
  this.compassBootstrap = props.compassBootstrap;
  this.includeRequireJS = props.includeRequireJS;

  cb();
}.bind(this));
};
```

**Template/copy specific files:**

Copying specific files for your generator output can be done using this.copy() 
or this.template(). The latter will copy the files over from your generator's 
templates directory to the directory the user is currently in. The second 
argument to this.template() can be used to store a file with a custom filename 
if required.

```javascript
Generator.prototype.bootstrapJs = function bootstrapJs() {
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
Generator.prototype.mainStylesheet = function mainStylesheet() {
    this.write('app/styles/main.scss', 
    'MY SASS STYLESHEET CONTENT');
};
```

**Writing directories and file contents:**

this.write() and this.mkdir() can be similarly used to create new directories, 
sub-directories and again, write custom content to a new file.

```javascript
Generator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.write('app/index.html', this.indexFile);
  this.write('app/scripts/main.js', this.mainJsFile);
  this.write('app/scripts/hello.coffee', this.mainCoffeeFile);
};
```

**Importing file-content as a string**

```javascript
var indexFile = this.readFileAsString(path.join(this.sourceRoot(), 'index.html'));
```

**Scaffolding an index:**

```javascript
Generator.prototype.writeIndex = function writeIndex() {
  // prepare default content text
  var defaults = ['HTML5 Boilerplate', 'Bootstrap'];

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
    this.mainJsFile = "console.log('Allo!');";
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
    this.installDependencies({ 
      skipInstall: options['skip-install'] 
    });
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
using `yo myGenerator:mySubGenerator`.

```javascript
this.hookFor('foo:app', {
  args: args,
  options: {
    options: {
        'skip-install': true;
    }
  }
});
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
      remote.directory('stylesheets', path.join(appPath, 'styles'));
      cb();
    });
  } else if (this.bootstrap) {
    this.log.writeln('Writing compiled Bootstrap');
    this.copy('bootstrap.css', path.join(appPath, 'styles/bootstrap.css'));
  }
};
```


<h2 id="frequently-asked-questions">Frequently Asked Questions</h2>

* **How do I pull in dependencies using Bower?** Place a bower.json file filled out with Underscore templating in the /templates directory and then run `this.installDependencies` from within your generator's app/index.js. Alternatively they can be installed with the following:
```javascript
this.bowerInstall([
  'jquery', 
  'underscore'
], { 
  save: true 
});
```

* **How do I unit test generators?** Very basic Mocha unit tests will be scaffolded out for you. You can also take a look at the [unit tests written for generator-webapp](https://github.com/yeoman/generator-webapp/blob/master/test/test.js) to see an example of what you should be testing.

* **How do I create sub-generators?**  See the [generator-generator readme](https://github.com/yeoman/generator-generator#commands).

* **How can I extend my generators to do more than what the system allows out of the box?** Generators are just Node.js and what's not available in the API can be found over on [nodejs.org](http://nodejs.org/api/).

* **How do I publish my generator to NPM?** Make sure you add relevant keywords to your package so that people can find your generator (e.g `yeoman-generator`) and then run `npm publish`. Further information about using NPM and registering packages can be found in the [official docs](https://npmjs.org/doc/developers.html).


<h2 id="reference-materials">Reference Materials</h2>

* [Generator API](http://yeoman.github.io/generator/)
* [Testing generators](https://github.com/yeoman/generator/wiki/Testing-generators)
