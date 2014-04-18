---
layout: codelab
markdown: 1
---

# Make Todos Persistent with Local Storage

Let’s revisit the issue of items not persisting when the browser refreshes.

To easily achieve this we can use another Angular module called ‘[angular-local-storage](http://gregpike.net/demos/angular-local-storage/demo.html)’ that will allow us to quickly implement [Local Storage](http://diveintohtml5.info/storage.html). Again, Bower comes to the rescue. Run the following command:

```
$ bower install --save angular-local-storage
```


![](/assets/img/codelab/image_29.png)

Similar to how we added jQueryUI and AngularUI Sortable, we need to add a reference to the angular-local-storage.js file in index.html:

```html
<script src="bower_components/angular-local-storage/angular-local-storage.js"></script>
```

Since we're using bower.json to keep track of our modules, `Ctrl+C` to exit the current command line process, then re-run `grunt serve` to get some automated magic in your index.html.

Your index.html scripts should now look like this:

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
<script src="bower_components/angular-local-storage/angular-local-storage.js"></script>
<!-- endbower -->
<!-- endbuild -->
```

Edit the todo module (scripts/app.js) to include the localStorage adapter:

```js
angular.module('mytodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable',
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
  'ui.sortable',
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


<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="prepare-production.html">Go to the next step &raquo;</a>
</p>
