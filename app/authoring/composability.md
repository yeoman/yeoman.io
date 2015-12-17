---
layout: documentation
title: Composability
category: authoring
sidebar: sidebars/authoring.md
excerpt: Sometimes generators should work together
---

> Composability is a way to combine smaller parts to make one large thing. Sort of [like Voltron&reg;](http://25.media.tumblr.com/tumblr_m1zllfCJV21r8gq9go11_250.gif)

Yeoman offers multiple ways for generators to build upon common ground. There's no sense in rewriting the same functionality, so an API is provided to use generators inside other generators.

In Yeoman, composability can be initiated in two ways:

 * A generator can decide to compose itself with another generator (e.g., `generator-backbone` uses `generator-mocha`).
 * An end user may also initiate the composition (e.g., Simon wants to generate a Backbone project with SASS and Rails). Note: end user initiated composition is a planned feature and currently not available.

**Note:** The User composability feature landed in core in version **0.17.0**. It is a work in progress but is stable enough to start using. Further documentation will come after a few refinements to the process and can be expected sooner rather than later!

## `generator.composeWith()`

The `composeWith` method allows the generator to run side-by-side with another generator. That way it can use features from the other generator instead of having to do it all by itself.

### API

`composeWith` takes three parameters.

 1. `namespace` - A String declaring the namespace of the generator to compose with. The default matches generators installed on the end user's system. Use [`peerDependencies`](https://nodejs.org/en/blog/npm/peer-dependencies/) to install needed generators with this one.
 1. `options` - An Object containing an `options` object and/or an `args` array. The called generator will receive these when it runs.
 1. `settings` - An Object used to declare composition settings. The generator uses these when determining how to run other generators.
    * `settings.local` - A String that defines a path to the requested generator. This allows the use of sub-generators. It also allows the use of a specific version of a generator. To do so, declare it in the [`dependencies` section inside `package.json`](https://docs.npmjs.com/files/package.json#dependencies). Then reference the path to that generator, usually `node_modules/generator-name`.
    * `settings.link` - A String that is either `weak` (default), or `strong`.

      A `weak` link will not run when the composability is user initiated. A `strong` link will always run.

      A `weak` link is for features unrelated to the core of the generator like backend frameworks or CSS preprocessors. A `strong` link is for features requiring an action to occur. An example is scaffolding a _module_ by composing a _route_ generator and a _model_ generator.


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

## dependencies or peerDependencies

*npm* allows three types of dependencies:

 * `dependencies` get installed local to the generator. It is the best option to control the version of the dependency used. This is the preferred option.
 * `peerDependencies` get installed alongside the generator, as a sibling (<strong>*</strong> See note at bottom). If `generator-backbone` declared `generator-gruntfile` as a peer dependency, the folder tree would look this way:

    ```
    ├───generator-backbone/
    └───generator-gruntfile/
    ```
 * `devDependencies` for testing and development utility. This is not needed here.

When using `peerDependencies`, be aware other modules may also need the requested module. Take care not to create version conflicts by requesting a specific version (or a narrow range of versions). Yeoman's recommendation with `peerDependencies` is to always request _higher or equal to (>=)_ or _any (*)_ available versions. For example:

```json
{
  "peerDependencies": {
    "generator-gruntfile": "*",
    "generator-bootstrap": ">=1.0.0"
  }
}
```

**Note**: as of npm@3, `peerDependencies` are no longer automatically installed. To install these dependencies, they must be manually installed: `npm install generator-yourgenerator generator-gruntfile generator-bootstrap@">=1.0.0"`
