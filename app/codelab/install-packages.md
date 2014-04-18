---
layout: codelab
markdown: 1
---

# Use Bower to install packages

<div class="mast-holder">
  <img src="/assets/img/yeoman-005.png" class="mast"/>
</div>

Let’s add some order to our list and make it sortable. For this we’re going to use Bower to install the [AngularUI Sortable module](https://github.com/angular-ui/ui-sortable), a directive component for AngularJS.

We can check what packages we have already installed with:

```
$ bower list
```


![](/assets/img/codelab/image_22.png)

To verify that there are AngularUI packages available, use Bower to search for "angular-ui-sortable":

```
$ bower search angular-ui-sortable
```

There is one result for `angular-ui-sortable` so let’s install it along with [jQuery UI](http://jqueryui.com/) as we already have jQuery installed. To save you from searching, the package name for jQuery UI is "jquery-ui".

To install both at once, use `bower install`:

```
$ bower install --save angular-ui-sortable jquery-ui
```


The `--save` option updates the bower.json file with dependencies on angular-ui-sortable and jquery-ui which will save you from having to manually add it to bower.json yourself.

![](/assets/img/codelab/image_24.png)

Take a look at your bower_components directory just to check that everything is there as expected. You should see folders for ‘jquery-ui’ and ‘angular-ui-sortable’ alongside the previously installed angular packages:

![](/assets/img/codelab/image_25.png)

## Make todos sortable (using the AngularUI Sortable module)

References to these newly installed dependencies must be added to our index.html file. You _could_ manually add the AngularUI Sortable module and jQueryUI script files yourself but Yeoman will automate this for you.

Quit your current command line process by using the `Ctrl+C` keyboard command. 

Run `grunt serve` again and you'll see that the scripts section at the bottom of index.html has automatically updated to include jquery-ui/ui/jquery-ui.js and angular-ui-sortable/sortable.js:

```html
<!-- build:js scripts/vendor.js -->
<!-- bower:js -->
<script src="bower_components/jquery/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script src="bower_components/angular-resource/angular-resource.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="bower_components/jquery-ui/ui/jquery-ui.js"></script>
<script src="bower_components/angular-ui-sortable/sortable.js"></script>
<!-- endbower -->
<!-- endbuild -->
```

In order to use the Sortable module, we must load it into our application by updating our Angular module definitions in scripts/app.js. Currently it looks like this:

```js
angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
```


Add the ‘ui.sortable’ dependency to that array list. Our complete todo module (scripts/app.js) should now look like this:

```js
'use strict';

angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable'
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

Finally, we need to add the ‘ui-sortable’ directive as a div wrapper around our ng-repeats in main.html.

```html
<!-- Todos list -->
<div ui-sortable ng-model="todos">
  <p class="input-group" ng-repeat="todo in todos">
```

We’ll also add some inline css in order to show a move cursor so it’s clear that we can move todo items:

```html
<p class="input-group" ng-repeat="todo in todos" style="padding:5px 10px; cursor: move;">
```
The full todo list markup looks like this now:

```html
<!-- Todos list -->
<div ui-sortable ng-model="todos">
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

Pat yourself on the back! You just used Yeoman to build a snazzy todo app in no time. Can you imagine doing front-end web development in any other way now?

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="write-unit-tests.html">Go to the next step &raquo;</a>
</p>
