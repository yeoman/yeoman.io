---
layout: codelab
markdown: 1
---

# Start writing our AngularJS application

The files that you see in the web browser can be found in the ‘app’ subfolder of your ‘mytodo’ directory. All the instructions in this section assume that you are editing files in this ‘app’ folder.  If you are unsure about the structure you should be using, see the <a href="../codelab.html#source-files">reference solution</a>.

## Create a new template to show a todo list

To start from a cleaner slate, delete everything from your views/main.html file except for the div with a class of "jumbotron", which we will replace with the class "container":

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
  <p class="form-group" ng-repeat="todo in todos">
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

Going back to our view template (views/main.html), add a button to the existing `ng-repeat` directive. And to make sure our input field and remove button line up nicely, change the class on the paragraph tag from "form-group" to "input-group".

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

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="install-packages.html">Go to the next step &raquo;</a>
</p>
