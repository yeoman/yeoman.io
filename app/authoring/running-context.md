---
layout: documentation
---

# Generator running context

One of the most important concepts to grasp when writing a Generator is how methods are run and in which context.

## Prototype methods as actions

Each method directly attached to a Generator prototype is considered to be an action. Each action is run in sequence by the Yeoman environment run loop.

In other words, each method returned by `Object.getPrototypeOf(Generator)` will be automatically run.

### Helper and private methods

Now that you know the prototype methods are considered as action, you may wonder how to define helper or private methods that won't be called automatically. There's three different methods to achieve this.

1. Prefix method name by an underscore (e.g. `_method`).
2. Use instance methods:
   
  ```js
    yeoman.generators.base.extend({
      init: function () {
        this.helperMethod = function () {
          console.log('won\'t be called automatically');
        };
      }
    });
  ``` 
3. Extend a parent generator
 
  ```js
    var MyBase = yeoman.generators.base.extend({
      helper: function () {
        console.log('won\'t be called automatically');
      }
    });
    
    module.exports = MyBase.extend({
      exec: function () {
        this.helper();
      }
    });
  ```
  
## The run loop

Running methods sequentially is alright if there's a single generator. But it is not enough once you start composing generators together.

That's why Yeoman uses a run loop internally.

The run loop is a queue system with priority support. We uses [Grouped-queue](https://github.com/SBoudrias/grouped-queue) module to handle the run loop.

Priorities are defined in your code as special prototype method name. When a method name is also a priority name, the run loop push the method into this special queue. If the method name doesn't match a priority, it is pushed in the `default` group.

In code, it will look this way:

```js
yeoman.generators.Base.extend({
  priorityName: function () {}
});
```

You can also group multiple methods to be run together in a queue by using a hash instead of a single method:

```js
yeoman.generators.Base.extend({
  priorityName: {
    method: function () {},
    method2: function () {}
  }
});
```

The available priorities are (in order):

1. `initialize` - Your initialization methods (checking current project state, getting configs, etc)
2. `prompt` - Where you prompt users for options (where you'd call `this.prompt()`)
3. `configure` - Saving configurations and configure the project (creating `.editorconfig` files and other metadata files)
4. `default`
5. `write` - Where you write the generator specific files (routes, controllers, etc)
6. `conflicts` - Where conflicts are handled (used internally)
7. `install` - Where installation are run (npm, bower)
8. `end` - Called last, cleanup, say _good bye_, etc

Follow these priorities guidelines and your generator will play nice with others.
