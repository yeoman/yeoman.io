---
layout: default
markdown: 1
social_text: "Let's Scaffold A Web App With @Yeoman!"
social_url: http://yeoman.io/codelab.html
sidebar: sidebars/codelab.html
---

# Step 7: Use Bower to install packages

<div class="mast-holder">
  <img src="/assets/img/yeoman-005.png">
</div>

Let’s add some order to our list and make it sortable. For this we’re going to use Bower to install the [AngularUI Sortable module](https://github.com/angular-ui/ui-sortable), a directive component for AngularJS.

## List current packages

We can check what packages we have already installed by running this command from within the myTodo project directory created earlier:

```sh
bower list
```

![](/assets/img/codelab/image_22.png)

You should see that you already have packages for angular-cookies, angular-resources, angular-route, plus others. Remember how we selected these as part of [Step 3](scaffold-app.html#configure) when we configured our generator?

## Search for packages

To verify that there are AngularUI packages available, use Bower to search for "angular-ui-sortable":

```sh
bower search angular-ui-sortable
```

There is one result for "angular-ui-sortable" so let’s install it along with [jQuery UI](http://jqueryui.com/) as we already have jQuery installed. To save you from searching, the package name for jQuery UI is "jquery-ui".

<h2 id="install">Install packages</h2>

Use Bower to install both "angular-ui-sortable" and "jquery-ui":

```sh
bower install --save angular-ui-sortable
```
```sh
bower install --save jquery-ui
```

The `--save` option updates the ***bower.json*** file with dependencies on angular-ui-sortable and jquery-ui. This will save you from having to manually add it to *bower.json* yourself.

<div class="note tip">

  <h2>Install multiple Bower packages at once</h2>

  <p>If you have multiple packages that you want to install, you can do it in one line:</p>

<pre>
<code class="language-sh">bower install --save angular-ui-sortable jquery-ui</code>
</pre>

</div>

![](/assets/img/codelab/image_24.png)

## Confirm installation

Take a look at your ***bower_components*** directory just to check that everything is there as expected. You should see folders for "jquery-ui" and "angular-ui-sortable" alongside the previously installed angular packages:

![](/assets/img/codelab/image_25.png)

<h2 id="implement">Make todos sortable</h2>

References to these newly installed dependencies must be added to our *index.html* file. You *could* manually add the AngularUI Sortable module and jQueryUI script files yourself but Yeoman will automate this for you!

Quit your current command line process by using the <span class="keyboard">Ctrl</span>+<span class="keyboard">C</span> keyboard command.

Then run `grunt serve` again.

You'll see that the `script` section at the bottom of *index.html* has automatically updated to include `jquery-ui/ui/jquery-ui.js` and `angular-ui-sortable/sortable.js`:

```html
<!-- build:js scripts/vendor.js -->
<!-- bower:js -->
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script src="bower_components/angular-resource/angular-resource.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/angular-animate/angular-animate.js"></script>
<script src="bower_components/angular-touch/angular-touch.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="bower_components/jquery-ui/jquery-ui.js"></script>
<script src="bower_components/angular-ui-sortable/sortable.js"></script>
<!-- endbower -->
<!-- endbuild -->
```

In order to use the Sortable module, we must load it into our application by updating our Angular module definitions in *scripts/app.js*. Currently it looks like this:

```js
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
```

Add the `ui.sortable` dependency to the array list in the second parameter after `'ngTouch'`:

```js
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
```

Finally, we need to add the `ui-sortable` directive as a `div` wrapper around our `ng-repeat` in *main.html*:

```html
<!-- Todos list -->
<div ui-sortable ng-model="todos">
  <p class="input-group" ng-repeat="todo in todos">
```

Let's also add some inline css in order to show a move cursor so it’s clear that we can move todo items:

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

Back in the browser, we can now re-order our list:

<div class="side-by-side">
  <img src="/assets/img/codelab/image_26.png">
  <img src="/assets/img/codelab/image_27.png">
</div>

Pat yourself on the back! You just used Yeoman to build a snazzy todo app in no time. Can you imagine doing front-end web development in any other way now?

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="write-unit-tests.html">Go to the next step &raquo;</a>
</p>
