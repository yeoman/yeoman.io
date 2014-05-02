---
layout: documentation
title: Composability
category: authoring
sidebar: sidebars/authoring.html
excerpt: Sometimes generators should work together
---

> Composability is a way to combine smaller parts to make one large thing. Sort of [like Voltron&reg;](http://25.media.tumblr.com/tumblr_m1zllfCJV21r8gq9go11_250.gif)

Yeoman offers multiple ways for generators to build upon common ground. There's no sense in rewriting the same functionality, so an API is provided to use generators inside other generators.

In Yeoman, composability can be initiated in two ways:
* A generator can decide to compose itself with other generator (e.g., `generator-backbone` uses `generator-mocha`).
* An end user may also initiate the composition (e.g., Simon wants to generate a Backbone project with SASS and Rails).

**Note:** The User composability feature hasn't landed in core as of Feb, 26, 2014. It is on the roadmap and will land sooner than later!

## `generator.composeWith()`

The `composeWith` method allows the generator to run side-by-side with another generator. That way it can use features from the other generator instead of having to do it all by itself.

### API

`composeWith` takes three parameters.

1. `namespace` - A String declaring the namespace of the generator to compose with. The default matches generators installed on the end user's system. Use [`peerDependencies`](http://blog.nodejs.org/2013/02/07/peer-dependencies/) to install needed generators with this one.
2. `options` - An Object containing an `options` and/or an `arguments` property. The called generator will receive these when it runs.
3. `settings` - An Object used to declare composition settings. The generator uses these when determining how to run other generators.
    * `settings.local` - A String that defines a path to the requested generator. This allows the use of sub-generators. It also allows the use of a specific version of a generator. To do so, declare it in the [`dependencies` section inside `package.json`](https://www.npmjs.org/doc/files/package.json.html#dependencies). Then reference the path to that generator, usually `node_modules/generator-name`.
    * `settings.link` - A String that is either `weak` (default), or `strong`.

      A `weak` link will not run when the composability is user initiated. A `strong` link will always run.

      A `weak` link is for features unrelated to the core of the generator like backend frameworks or CSS preprocessors. A`strong` link is for features requiring an action to occur. An example is scaffolding a _module_ by composing a _route_ generator and a _model_ generator.


When composing with a `peerDependencies` generator:

```js
this.composeWith('backbone:route', { options: {
  rjs: true
}});
```

When composing with a `dependencies` generator:

```js
this.composeWith('backbone:route', {}, {
  local: require.resolve('generator-bootstrap')
});
```

`require.resolve()` returns the path from where Node.js would load the provided module.

## `generator.hookFor()`

`hookFor` is like `composeWith()` except that `hookFor` is overridable by the end user.

When creating a `hookFor`, give it a name like `test-framework`. With this name, the user can specify a custom generator to run as a command line option. For example, the user would run `yo generator --test-framework=jasmine` to compose with the `generator-jasmine`. If the user does not provide an option, then a default generator runs.

As `hookFor` defines new command line options, it can **only run inside the constructor** method.

The API looks like this:

```js
this.hookFor('test-framework', {
  as: 'mocha' // In this case, `mocha` will be the default
});
```

## dependencies or peerDependencies

*npm* allows three types of dependencies:
* `dependencies` get installed local to the generator. It is the best option to control the version of the dependency used. This is the preferred option.
* `peerDependencies` get installed alongside the generator, as a sibling. If `generator-backbone` declared `generator-gruntfile` as a peer dependency, the folder tree would look this way:
* `devDependencies` for testing and development utility. This is not needed here.

```
├───generator-backbone/
└───generator-gruntfile/
```

When using `peerDependencies`, be aware other modules may also need the requested module. Take care not to create version conflicts by requesting a specific version (or a narrow range of versions). Yeoman's recommendation with `peerDependencies` is to always request _higher or equal to (>=)_ or _any (*)_ available versions. For example:

```json
{
  "peerDependencies": {
    "generator-gruntfile": "*",
    "generator-bootstrap": ">=1.0.0"
  }
}
```
