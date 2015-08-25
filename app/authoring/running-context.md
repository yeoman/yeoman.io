---
layout: documentation
title: Generator Runtime Context
category: authoring
sidebar: sidebars/authoring.md
excerpt: this, that, Yeoman. What is available when and where?
---

One of the most important concepts to grasp when writing a Generator is how methods are run and in which context.

## Prototype methods as actions

Each method directly attached to a Generator prototype is considered to be an action. Each action is run in sequence by the Yeoman environment run loop.

In other words, each method returned by `Object.getPrototypeOf(Generator)` will be automatically run.

### Helper and private methods

Now that you know the prototype methods are considered as action, you may wonder how to define helper or private methods that won't be called automatically. There's three different methods to achieve this.

1. Prefix method name by an underscore (e.g. `_method`).
2. Use instance methods:

    ```js
      generators.Base.extend({
        init: function () {
          this.helperMethod = function () {
            console.log('won\'t be called automatically');
          };
        }
      });
    ```

3. Extend a parent generator

    ```js
      var MyBase = generators.Base.extend({
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

The run loop is a queue system with priority support. We use the [Grouped-queue](https://github.com/SBoudrias/grouped-queue) module to handle the run loop.

Priorities are defined in your code as special prototype method names. When a method name is also a priority name, the run loop pushes the method into this special queue. If the method name doesn't match a priority, it is pushed in the `default` group.

In code, it will look this way:

```js
generators.Base.extend({
  priorityName: function () {}
});
```

You can also group multiple methods to be run together in a queue by using a hash instead of a single method:

```js
generators.Base.extend({
  priorityName: {
    method: function () {},
    method2: function () {}
  }
});
```

The available priorities are (in order):

1. `initializing` - Your initialization methods (checking current project state, getting configs, etc)
2. `prompting` - Where you prompt users for options (where you'd call `this.prompt()`)
3. `configuring` - Saving configurations and configure the project (creating `.editorconfig` files and other metadata files)
4. `default`
5. `writing` - Where you write the generator specific files (routes, controllers, etc)
6. `conflicts` - Where conflicts are handled (used internally)
7. `install` - Where installation are run (npm, bower)
8. `end` - Called last, cleanup, say _good bye_, etc

Follow these priorities guidelines and your generator will play nice with others.
