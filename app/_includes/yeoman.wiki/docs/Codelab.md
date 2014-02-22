# Allo! Allo! Let's Scaffold A Web App

<style>
body { background: white; }
img { max-width: 100%;}
.mast-holder{ width:100%; text-align:center;}
.mast { margin:0 auto; width:350px;}
.note { background: #f2dede; padding: 15px; }
.social { margin: 0 auto; }
</style>

<div class="social">
<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://http://yeoman.io/codelab.html" data-text="Let's Scaffold A Web App With Yeoman!" data-via="addyosmani">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
<script src="https://apis.google.com/js/plusone.js"></script><g:plus action="share"></g:plus>
</div>

<div class="mast-holder">
	<img src="/assets/img/yeoman-008.png" class="mast"/>
	<p><strong> By Addy Osmani, James Cryer & Pearl Chen</strong></p>
	<p><strong>Estimated time to complete:</strong> 60 minutes</p>
</div>


In this code lab, you build a fully functional application using [Yeoman](http://yeoman.io) and [AngularJS](http://angularjs.org). The sample app provides a brief look at some Yeoman, [Grunt](http://gruntjs.com) and [Bower](http://bower.io) features. This code lab assumes that you have some programming experience.

## Meet Yeoman

![](/assets/img/codelab/image_1.png)

Yeoman is a man in a hat with three tools for improving your productivity:

* [yo](http://yeoman.io) is a scaffolding tool that offers an ecosystem of framework-specific scaffolds, called generators, that can be used to perform some of the tedious tasks I mentioned earlier. 

* [grunt](http://gruntjs.com) is used to build, preview and test your project, thanks to help from tasks curated by the Yeoman team and [grunt-contrib](https://github.com/gruntjs/grunt-contrib).

* [bower](http://bower.io) is used for dependency management, so that you no longer have to manually download your front-end libraries.

With just a command or two, Yeoman can write boilerplate code for your app (or individual pieces like Models), compile your Sass, and fire up a simple web server in your current directory. It can also run your unit tests, minimize and concatenate your CSS, JS, HTML and images, plus more.

You can install generators using the [npm](http://npmjs.org) command and there are over [450 generators](http://yeoman.io/community-generators.html) now available, many of which have been written by the open-source community. Popular generators include [generator-angular](https://github.com/yeoman/generator-angular), [generator-backbone](https://github.com/yeoman/generator-backbone) and [generator-ember](https://github.com/yeoman/generator-ember).

## Today’s sample Yeoman app: a Todo app using AngularJS

For those unfamiliar with AngularJS, it is a JavaScript framework for developing dynamic web apps. Angular is what HTML would have been if it had been designed for web apps, instead of static documents. Angular aims to simplify application development by providing high-level features like data-binding and dependency injection (DI).

To dig deeper into the sweet spots of AngularJS, take a look at the detailed [documentation](http://docs.angularjs.org/guide/overview).

Let’s dive right into building the below Todo app from scratch.

![](/assets/img/codelab/image_2.png)


<div class="note">

<p><strong>Source code for the final project files</strong></p>

<p>For your reference, the final sources for this exercise can be found over at <a href="http://bit.ly/yoangular">http://bit.ly/yoangular</a> in the &quot;angular-localStorage-todos&quot; folder. Remember that you need to run <code>npm install</code> followed by <code>bower install</code> in the directory before you will be able to test the application out.</p>

<p>If that sounds like too much work, here are some direct links to the files that we will be editing in the ‘angular-localStorage-todos/app’ folder. You can use them as a guide in case you get stuck. :) </p>

<ul>
<li><a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/index.html">index.html</a></li>
<li><a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/views/main.html">views/main.html</a></li>
<li><a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/scripts/app.js">scripts/app.js</a></li>
<li><a href="https://github.com/addyosmani/yeoman-examples/blob/master/angular-localStorage-todos/app/scripts/controllers/main.js">scripts/controllers/main.js</a></li>
</ul>

</div>

# Getting set up


<div class="mast-holder">
  <img src="/assets/img/yeoman-004.png" class="mast"/>
</div>

Before installing Yeoman, you will need the following:

* [Node.js](http://nodejs.org/download/) version 0.10.x or greater and npm version 1.3.7 or higher (comes with latest Node.js) or greater

Once you’ve got Node installed, you can install the Yeoman toolset using the command line. 

Note: Most of your interations with Yeoman will be through the command line. Run these commands in the Terminal app if you’re on Mac, your shell in Linux, or [Cygwin](http://www.cygwin.com/) if you are on Windows.

```js
$ npm install --global yo
```



(If you see permission or access errors, you will need to prepend `sudo` to the above command.)

It is a good idea to check that everything is installed as expected by running common Yeoman commands with the --version flag as follows:

```js
$ yo --version && bower --version && grunt --version
```


Running the above should output four separate version numbers:

* Yeoman

* Bower

* Grunt

* Grunt CLI -- the command-line interface for Grunt


<div class="note">

<p><strong><em>Versions of Yeoman, Bower, and Grunt that this codelab works with</em></strong></p>

<p>Technology changes quickly! This tutorial has been tested with Yeoman 1.1.2, Bower 1.2.8, grunt-cli v0.1.11, and grunt v0.4.2.</p>

<p>If you are running into issues with a newer version, we would like to hear about it. Please feel free to open up an issue on our tracker.</p>

<p><img src="/assets/img/codelab/image_3.png" alt=""></p>
</div>

## Installing Yeoman generators

In a traditional web development workflow, you would need to spend a lot of time setting up boilerplate code for your webapp, downloading dependencies, and manually creating your web folder structure. Yeoman generators to the rescue! Generators do the hard work for you by scaffolding out your project. Let’s install a generator for creating AngularJS projects.

Yeoman comes with a handy interactive menu, to access this menu run:

```js
$ yo
```

![](/assets/img/codelab/image_4.png)

Use your keyboard’s up / down arrow keys to navigate the menu and hit enter when ‘**Install a generator**’ is highlighted.  

Next we need to search for a generator to install. A search for ‘angular’ will find many generators contributed by various members of the Yeoman open source community. In this instance we want to install the ‘**generator-angular**’ generator.

![](/assets/img/codelab/image_5.png)

With `generator-angular` selected, hit enter to start installing the generator.  This will start to install the Node packages required for the generator.  

Alternatively, if you already know the name of the generator you want to use, the generator can be installed using npm as follows:

```js
$ npm install -g generator-angular
```

See below for a preview:

![](/assets/img/codelab/image_6.png)

<div class="note">
<p><strong>Versions of generator-angular that this codelab works with</strong></p>

<p>Technology changes quickly! This tutorial has been tested with generator-angular 0.7.1. You can check which version you are using by running &quot;yo&quot; at the command-line after you have installed Yeoman and the Angular generator.</p>

<p>If you are running into issues with a newer version, we would like to hear about it. Please feel free to open up an issue on our tracker.</p>

<p>Otherwise, you can always install the same version of the generator we are using by running this command instead:</p>
<div class="highlight"><pre><code class="js language-js" data-lang="js"><span class="nx">$</span> <span class="nx">npm</span> <span class="nx">install</span> <span class="o">-</span><span class="nx">g</span> <span class="nx">generator</span><span class="o">-</span><span class="nx">angular</span><span class="err">@</span><span class="mf">0.7</span><span class="p">.</span><span class="mi">1</span>
</code></pre></div>
</div>

## Use a generator to scaffold out your app

Once a generator has been installed it can be accessed via the Yeoman interactive menu:

```js
$ yo
```

![](/assets/img/codelab/image_7.png)

But wait! Don’t run a generator in any old place on your computer. Make a project directory where the generator will place your scaffolded out project files.

```js
$ mkdir mytodo
$ cd mytodo
```

Run `yo` and highlight ‘Run the Angular generator’. Hit enter to run the generator. 

As you become more familiar with Yo, you might want to run generators directly without the use of the interactive menu:

```js
$ yo angular
```


Some generators will also provide optional settings to customize your app with common developer libraries and speed up the initial setup of your development environment. 

The AngularJS generator provides options to include use [Sass](http://sass-lang.com/) (with Compass) and/or  [Twitter Bootstrap](http://getbootstrap.com/). Enter ‘n’ and ‘y’ respectively to these options.

![](/assets/img/codelab/image_8.png)

Next you are prompted to select what Angular modules you would like to include as well. Angular modules are self-contained JavaScript files with helpful functionality. For example, the ngResource module (angular-resource.js) provides interaction support with RESTful services.

You can deselect options using the spacebar. Let’s roll with the defaults. (So if you have been playing around with the spacebar, make sure that all the modules are marked as green.)

![](/assets/img/codelab/image_9.png)

Okay, hit enter. Yeoman will automatically scaffold out your app, grab your dependencies, and pull in a few useful Grunt tasks for your workflow. After a few minutes of we should be ready.

 

![](/assets/img/codelab/image_10.png)

## The Yeoman app directory structure

Open up your "mytodo" directory to take a look at what was actually scaffolded. We have:

* **app**: a parent directory for our web application

    * **index.html**: the base html file for our Angular app
    * **404.html**, **favicon.ico**, and **robots.txt**: commonly used web files so you don’t have to create them yourself
    * **bower_components**: a home for our JavaScript/web dependencies, installed by Bower
    * **scripts**: our own JS files
        * **app.js**: our main application code
        * **controllers**: our Angular controllers
    * **styles**: our CSS files
    * **views**: a place for our Angular templates

* **Gruntfile.js**, **package.json,** and **node_modules**: configuration and dependencies required by our Grunt tasks

* **test** and **karma.conf.js**/**karma-e2e.conf.js**: a scaffolded out test runner and the unit tests for the project, including boilerplate tests for our controllers.

![](/assets/img/codelab/image_11.png)

## Preview your new app in the browser

We can do this by running grunt server:

```js
$ grunt serve
```


Running `grunt serve` will create a local, Node-based http server on [localhost:9000](http://localhost:9000). Your web browser will launch your newly scaffolded application in a new tab.

![](/assets/img/codelab/image_12.png)

We can actually open up our favorite text editor and start making changes. Each save will automatically force a browser refresh so you don’t have to do this yourself. This is called *live reloading* and it’s a nice way of getting a real-time view of your application state. Live reloading is made available to your application through a set of Grunt tasks; it watches for changes to your files and automatically reloads them if it detects a change.

In this case, we’re editing a template file called main.html in the views directory. Thanks to live reload we go from this:

![](/assets/img/codelab/image_13.png)

to this instantly:

![](/assets/img/codelab/image_14.png)

# Let’s start writing our AngularJS application...

The files that you see in the web browser can be found in the ‘app’ subfolder of your ‘mytodo’ directory. All the instructions in this section assume that you are editing files in this ‘app’ folder.  If you are unsure about the structure you should be using, see the reference solution.

## Create a new template to show a todo list

To start from a cleaner slate, delete everything from your views/main.html file except for the div with a class of "jumbotron", which we will replace with the class “container”:

```html
<div class="container">
</div>
```

Modify the boilerplate Angular Controller (in scripts/controllers/main.js) to contain a list of todos instead of awesomeThings:


```js

'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
  });

 ```


Then modify our view (views/main.html) to output our todos items as text input fields:

```html

<div class="container">
  <h2>My todos</h2>
  <p class="form-group” ng-repeat="todo in todos">
    <input type="text" ng-model="todo" class="form-control">
  </p>
</div>

```


The [ng-repeat](http://docs.angularjs.org/api/ng.directive:ngRepeat) attribute on the paragraph tag is an Angular [directive](http://docs.angularjs.org/guide/directive) that instantiates a template once per item from a collection. In our case, imagine that the paragraph element and its content is turned into a virtual rubber stamp by adding the `ng-repeat` attribute. For each item in the todos array, Angular will stamp out a new instance of the `<p><input></p>` HTML.

The [ng-model](http://docs.angularjs.org/api/ng.directive:ngModel) attribute is another Angular directive that works with input, select, textarea and custom controls to create a two-way data binding. In our example, it populates a text input field with the value from the current todo item in the ng-repeat loop. 

See `ng-repeat` and `ng-model` in action within the browser. Upon saving, our application should now look like this:

![](/assets/img/codelab/image_15.png)

## Adding a todo

Let’s implement a way to add new todo items to the list of existing todos within the application. 

Modify the views/main.html file by adding a form element in between the `<h2>` and `<p>` elements from the previous section. Your views/main.html should now look like this:

```html

<div class="container">
  <h2>My todos</h2>

  <!-- Todos input -->
  <form role="form" ng-submit="addTodo()">
    <div class="row">
      <div class="input-group">
        <input type="text" ng-model="todo" placeholder="What needs to be done?" class="form-control">
        <span class="input-group-btn">
          <input type="submit" class="btn btn-primary" value="Add">
        </span>
      </div>
    </div>
  </form>
  <p></p>

  <!-- Todos list -->
  <p class="form-group" ng-repeat="todo in todos">
    <input type="text" ng-model="todo" class="form-control">
  </p>
</div>

```

This adds a form with a submit button to the top of the page. It utilises another Angular directive, [ng-submit](http://docs.angularjs.org/api/ng.directive:ngSubmit) which we’ll get to next. Return to your browser and the UI should now look similar to this:

![](/assets/img/codelab/image_16.png)

If you click the Add button currently, nothing will happen - let’s change that. 

`ng-submit` binds an angular expression to the onsubmit event of the form. If no action attribute is applied to the form, it also prevents the default browser behaviour. In our example we’ve added an angular expression of ‘addTodo()’. 

The following `addTodo` function pushes new todo items onto the existing todo items array and then clears the text input field:

```js

$scope.addTodo = function () {
  $scope.todos.push($scope.todo);
  $scope.todo = '';
};

```

Edit scripts/controllers/main.js by adding the `addTodo` function within the MainCtrl controller definition. Your complete controller should look like this:

```js
'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
  });
 ```


Note: if you encounter linting errors in the terminal/command-line, this may be due to indentation warnings being thrown from [jshint](http://www.jshint.com/). They are only warnings so your todo app will continue to work. However, do look at the suggestions made from jshint and adjust your code accordingly for clean and readable code. 

View the app in the browser again. Type some text in the input field for a new todo item and hit the Add button. It will be immediately reflected in your todos list!

![](/assets/img/codelab/image_17.png)  ![](/assets/img/codelab/image_18.png)

Note: if you enter in more than one blank todo item, or a todo item with the same name, your todo app will unexpectedly stop working. :( As a fun exercise on your own time, enhance the `addTodo` function with error checking.

## Removing a todo

Let’s now add the ability to remove a todo item. We’ll need to add a new remove button alongside each todo item. 

Going back to our view template (views/main.html), add a button to the existing `ng-repeat` directive. And to make sure our input field and remove button line up nicely, change the class on the paragraph tag from "form-group" to “input-group”.

Previous markup:

```html
<!-- Todos list -->
<p class="form-group" ng-repeat="todo in todos">
  <input type="text" ng-model="todo" class="form-control">
</p>
```


New markup:

```html
<!-- Todos list -->
<p class="input-group" ng-repeat="todo in todos">
  <input type="text" ng-model="todo" class="form-control">
  <span class="input-group-btn">
    <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button>
  </span>
</p>
```


Your todo app is looking snazzy!

![](/assets/img/codelab/image_19.png)

We introduced a new Angular directive above, [ng-click](http://docs.angularjs.org/api/ng.directive:ngClick). `ng-click` allows you to specify custom behaviours when an element is clicked. In this instance, we call `removeTodo()` and pass $index to the function. 

The value of $index will be the array index of the current todo item within the ng-repeat directive. For example, the first item will have an array index of 0 and `removeTodo` will be passed the value of 0. Similarly, the last item of a todo list with 5 items will have an array index of 4 and `removeTodo` will be passed a value of 4.

Let’s now add some logic for removing todo items to our controller. The following `removeTodo` function removes one todo item from the items array using the JavaScript splice method at the given $index value:

```js
$scope.removeTodo = function (index) {
  $scope.todos.splice(index, 1);
};
```


The complete controller (scripts/controllers/main.js) with the new `removeTodo` function is below:

```js
'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
 ```


Back in the browser, our app should look like this once the code has been updated. Here we’ve just added a new item:

![](/assets/img/codelab/image_20.png)

You can now hit the ‘X’ button to remove the item from the Todo list. Fantastic! 

![](/assets/img/codelab/image_21.png)

One thing you might notice is that although we’re able to add and remove items, we don’t have a way to persist them. Any time we refresh the page our todo items are reset back to the defaults in our todos array hardcoding in main.js. Don’t worry, we’ll fix this later after we learn more about installing packages with Bower.

# Using Bower to install packages 

<div class="mast-holder">
  <img src="/assets/img/yeoman-005.png" class="mast"/>
</div>

Let’s add some order to our list and make it sortable. For this we’re going to use Bower to install [AngularUI](http://angular-ui.github.io/), a companion suite to AngularJS, which has a "sortable" directive available. 

We can check what packages we have already installed with:

```
$ bower list
```


![](/assets/img/codelab/image_22.png)

To verify that there are AngularUI packages available, use Bower to search for "angular-ui":

```
$ bower search angular-ui
```


![](/assets/img/codelab/image_23.png)

Plain old `angular-ui` is the first option shown in the list. Let’s install it along with [jQuery UI](http://jqueryui.com/) as we already have jQuery installed. To save you from searching, the package name for jQuery UI is "jquery-ui". 

To install both at once, use `bower install`:

```
$ bower install --save angular-ui jquery-ui
```


The `--save` option updates the bower.json file with dependencies on angular-ui and jquery-ui which will save you from having to manually adding it to bower.json yourself.

![](/assets/img/codelab/image_24.png)

Take a look at your bower_components directory just to check that everything is there as expected. You should see folders for ‘jquery-ui’ and ‘angular-ui’ alongside the previously installed angular packages:

![](/assets/img/codelab/image_25.png)

## Make todos sortable (using AngularUI Sortable)

References to these newly installed dependencies must be added to our index.html file:

First, add a link to the angular-ui CSS file. In the document head, under where we include main.css:

```html
<link rel="stylesheet" href="styles/main.css">
<link rel="stylesheet" href="bower_components/angular-ui/build/angular-ui.css">
```


Second, add the AngularUI and jQueryUI JavaScript. In the scripts section at the bottom of index.html include jquery-ui.js and angular-ui.js:

```html
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/jquery-ui/ui/jquery-ui.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-ui/build/angular-ui.js"></script>
```
  

Note: Make sure to place the reference to angular-ui.js outside of the `<!-- bower:js -->` block as this will otherwise not build correctly due to an issue with the AngularUI Bower package setup.

Third, load the AngularUI module into our application by updating our Angular module definition in scripts/app.js. Currently it looks like this:

```js
angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
```


Add the ‘ui’ dependency to that array list. Our complete todo module (scripts/app.js) should now look like this:

```js
'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
```

Finally, we need to add the ‘ui-sortable’ directive as a div wrapper around our ng-repeats in main.html. We’ll also add some inline css in order to show a move cursor so it’s clear that we can move todo items:

```html
<!-- Todos list -->
<div ui-sortable>
  <p class="input-group" ng-repeat="todo in todos" style="padding:5px 10px; cursor: move;">
    <input type="text" ng-model="todo" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button>
    </span>
  </p>
</div>
```


This allows us to take our ordered list that looks like:

![](/assets/img/codelab/image_26.png)

and sort it to look like this:

![](/assets/img/codelab/image_27.png)

animated GIF:

![](/assets/img/codelab/image_28.gif)

## Persistence with Local Storage

Let’s revisit the issue of items not persisting when the browser refreshes. 

To easily achieve this we can use another Angular module called ‘[angular-local-storage](http://gregpike.net/demos/angular-local-storage/demo.html)’ that will allow us to quickly implement [Local Storage](http://diveintohtml5.info/storage.html). Again, Bower comes to the rescue. Run the following command:

```
$ bower install --save angular-local-storage
```


![](/assets/img/codelab/image_29.png)

Modify index.html to include the new Angular module by add the following after the other Angular script tags:

```html
<script src="bower_components/angular-local-storage/angular-local-storage.js"></script>
```


Note: if using bower.json, you may need to Ctrl +C to exit the current `grunt serve` instance, run `bower install` and then re-run `grunt serve` to get some automated magic in your index.html.

Your index.html scripts should now look like this:

```html
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script src="bower_components/angular-resource/angular-resource.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="bower_components/angular-ui/angular-ui.js"></script>
<script src="bower_components/jquery-ui/ui/jquery-ui.js"></script>
<script src="bower_components/angular-local-storage/angular-local-storage.js"></script>
```

Edit the todo module (scripts/app.js) to include the localStorage adapter:

```js
angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui',
  'LocalStorageModule'
])
```


While you’re in app.js, also configure 'localStorageServiceProvider' to use ‘todo’ as a localStorage name prefix so your app doesn’t accidently read todos from another app using the same variable names: 

```js
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}])
```


Our todo module (scripts/app.js) should now look like this:

```js
'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui',
  'LocalStorageModule'
])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
 ```


You will also need to update your controller (scripts/controllers/main.js) to declare a dependency on the localStorage service. Add ‘localStorageService’ as the second parameter in the callback function.

```js
'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // (code hidden here to save space)
  });
 ```

So now, rather than reading our todos from a static array, we’ll be reading it from Local Storage and then storing it in `$scope.todos` instead. 

We’ll also use the angular [$watch](http://docs.angularjs.org/api/ng.$rootScope.Scope#methods_$watch) listener to watch for changes in the value of $scope.todos. If someone adds or removes a todo, it will then keep our localStorage `todos` datastore in sync:

Therefore, we need to remove the current $scope.todos declaration:

```js
$scope.todos = ['Item 1', 'Item 2', 'Item 3'];
```


And replace it with this:

```js
var todosInStore = localStorageService.get('todos');

$scope.todos = todosInStore && todosInStore.split('\n') || [];

$scope.$watch('todos', function () {
  localStorageService.add('todos', $scope.todos.join('\n'));
}, true);
```


We now have a controller that is as follows:

```js
'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];

    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
 ```


If you look at your app in the browser now you’ll see that there are no items in the todo list. The app is initialising the todos array from localStorage and we haven’t given it any todo items yet. 

![](/assets/img/codelab/image_30.png)

Go ahead and add a few items to the list:

![](/assets/img/codelab/image_31.png)

Now when we refresh our browser the items persist. Hooray!

We can confirm whether our data is being persisted to localStorage by checking the Resources panel in Chrome DevTools and selecting "Local Storage" from the lefthand side:

![](/assets/img/codelab/image_32.png)

Pat yourself on the back! You just used Yeoman to build a snazzy todo app in no time. Can you imagine doing front-end web development in any other way now?

So to recap, in this section we:

* Scaffolded the boilerplate for an application using `yo`

* Installed dependencies to improve the functionality in our app with `bower`

* Used `grunt serve` to build and preview an interim version of our app. All our edits resulted in a live reload of the page giving us a nice real-time view of what we authored.

# Getting ready for production

Now that we have a functional app, let’s try to test and build a production ready version of it which we can ship. 

## Testing with Karma and Jasmine

For those unfamiliar with [Karma](http://karma-runner.github.io), it is a JavaScript test runner that is test framework agnostic. The Angular generator has two included test frameworks: [ngScenario](http://docs.angularjs.org/guide/dev_guide.e2e-testing) and [Jasmine](http://pivotal.github.io/jasmine/). When we ran `yo angular` earlier in this Codelab, the generator scaffolded a `test` directory in the root of the ‘mytodo’ folder, created a karma.conf file, and pulled in the Node modules for Karma.  We’ll be editing a Jasmine script to describe our tests soon but let’s see how we can run tests first.

Let’s go back to the command-line and kill our grunt server using Ctrl+C. There is already a grunt task scaffolded out in our Gruntfile.js for running tests. It can be run as follows:

```js
$ grunt test
```

When you run `grunt test`, you will see a new browser window open and close, and some warnings in the Yeoman console. Don’t worry, that’s to be expected right now.

Our tests are currently failing as we haven’t updated the boilerplate test which still references awesomeThings.  We also need to update the Karma configuration to load the the new Bower components into the browser. Open karma.conf.js and replace the "files" array with:

```js
 files: [
  'app/bower_components/jquery/jquery.js',
  'app/bower_components/jquery-ui/ui/jquery-ui.js',
  'app/bower_components/angular/angular.js',
  'app/bower_components/angular-ui/build/angular-ui.js',
  'app/bower_components/angular-mocks/angular-mocks.js',
  'app/bower_components/angular-local-storage/angular-local-storage.js',
  'app/scripts/*.js',
  'app/scripts/**/*.js',
  'test/mock/**/*.js',
  'test/spec/**/*.js',
  'app/bower_components/angular-resource/angular-resource.js',
  'app/bower_components/angular-cookies/angular-cookies.js',
  'app/bower_components/angular-sanitize/angular-sanitize.js',
  'app/bower_components/angular-route/angular-route.js'
],
```


So remember that we previously changed app/scripts/controllers/main.js to load items from localStorage? To keep your head from exploding, let’s work with some static todo items to keep things simple for these unit tests.

Replace the contents of main.js with the following:

```js
'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {

  $scope.todos = [];

  $scope.addTodo = function () {
    $scope.todos.push($scope.todo);
    $scope.todo = '';
  };
  
  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };
});
```


Next, modify the unit test for your main.js. You’ll find the tests scaffolding out in the ‘test’ folder, so open up test/spec/controllers/main.js. 

Delete the following:

```js
it('should attach a list of awesomeThings to the scope', function () {
  expect(scope.awesomeThings.length).toBe(3);
});
```


And replace that test with the following:

```js
it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
});
```


Re-running our tests with `grunt test` should see our tests passing:

![](/assets/img/codelab/image_33.png)

Let’s add a couple of extra tests to test the adding and removing of items:

```js
  it('should add items to the list', function () {
      scope.todo = 'Test 1';
      scope.addTodo();
      expect(scope.todos.length).toBe(1);
    });

  it('should add items to the list', function () {
      scope.todo = 'Test 1';
      scope.addTodo();
      scope.removeTodo(0);
      expect(scope.todos.length).toBe(0);
    });
 ```


Your full MainCtrl test script (test/spec/controllers/main.js) should now look like this:

```js
'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

});
```


Running the tests again, we should see everything pass with 3 tests being executed:

![](/assets/img/codelab/image_34.png)

Fantastic!

Writing unit tests make it easier to catch bugs as your app gets bigger and when more developers join your team. The scaffolding feature of Yeoman makes writing unit tests easier so no excuse for not writing your own tests! ;)

## Building files optimized for production

<div class="mast-holder">
  <img src="/assets/img/yeoman-009.png" class="mast"/>
</div>

Ready to show your beautiful todo app to the world? Let’s try to create a production version of our application. We’ll want to lint our code, run our tests, concatenate and minify our scripts and styles to save on those network requests, optimize images if we were using any, compile the output of any preprocessors we’re using and in general make our application really lean. Phew!

Amazingly we can achieve all of this just by running:

```js
$ grunt
```


This command will go through the Grunt tasks and configuration Yeoman has set up for you and create a version of your app we can ship. Give it a minute and you should be presented with a completed build and a report of how long the build took to complete and where time was spent:

![](/assets/img/codelab/image_35.png)

Your lean, production ready application is now available in a ‘dist’ folder in the root of your ‘mytodo’ project. 

Want to preview your production app locally? That’s just another simple grunt command:

```js
$ grunt serve:dist
```


It will build your project and launch a local web server. Yo Hero!

![](/assets/img/codelab/image_36.png)

# Like what you see? Yeoman can do more.

Yeoman supports scaffolding out a lot more for Angular and other frameworks than we’ve shown today.

For example, the Angular generator also supports creating new views, directives and controllers for you. A new controller can be scaffolded by running `yo angular:controller controllerName`, which will create your controller files but also update the route in app.js for you. We also try scaffolding out unit tests where possible. 

To find out all the Yeoman commands for the Angular generator take a look at the [generator readme](https://github.com/yeoman/generator-angular#readme).

# Where to go next

<div class="mast-holder">
  <img src="/assets/img/yeoman-003.png" class="mast"/>
</div>

* **Grunt** ([gruntjs.com](http://gruntjs.com)) has tasks for almost anything you might like to do with your app, whether it’s [compiling CoffeeScript](https://github.com/gruntjs/grunt-contrib-compass) or [hooking up your app to custom middleware](https://github.com/gruntjs/grunt-contrib-connect) like PHP or Express. Your Yeoman app already has a Gruntfile.js already set up for you so read up on how to configure more Grunt tasks [here](http://gruntjs.com/configuring-tasks).

* Bower ([bower.io](http://bower.io)) has a growing collection of easily installable packages for adding capabilities to your app. View all the packages available through Bower's registry [here](http://sindresorhus.com/bower-components/).

* Yeoman is always evolving. Be sure to checkout [yeoman.io](http://yeoman.io) for more information and follow [@yeoman](https://twitter.com/yeoman) and [+Yeoman](https://plus.sandbox.google.com/101063139999404044459/posts) to stay up to date.

That’s it from your man-in-a-hat for now. Thanks!

