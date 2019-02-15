---
layout: blog
title: Say allo' to yeoman-generator 1.0
---

It's been a long time coming, but `yeoman-generator` 1.0 is finally available!

- [Full changelog](https://github.com/yeoman/generator/releases/tag/v1.0.0)
- [Download from npm](https://www.npmjs.com/package/yeoman-generator)

We've been [talking about releasing a 1.0](https://github.com/yeoman/generator/issues/766) release since February 2015. Yeoman has been around since 2012. Over those 4 years, it accumulated a lot of technical debt and depreciated API. We always put a lot of value in maintaining backward compatibility and making upgrading to new version of our core framework as smooth as possible. As such, we started in 2015 to release smaller sets of breaking changes as minor pre 1.0.

It's hard to clearly define when we're ready to accept an API as good enough to be maintained as the baseline of our project. Stripping out useless and deprecated methods brought us to a point where we could clearly see some core accidental complexity. So, we're releasing 1.0 today fixing these and removing all the methods that had been marked as deprecated.

If you've been keeping up to date with past `yeoman-generator` releases, we expect the update process to be relatively painless.

## Changes

The two major changes with this release was rethinking and simplifying the way you compose generators and the way you handle options and arguments passed to your generator.

### Update to option and argument parsing

A lot of bugs accumulated around the way the generator system handled option and argument. We believe we fixed most of these as of 1.0.

For generator maintainers, the main changes is that argument and options are now both accessible in the same transparent way. Arguments are now accessed as `this.options[argumentName]` instead of `this[argumentName]`. The old way was often creating bugs due to clashes with other instance names.

The `type` property should now be correctly respected. It can also be defined as a function taking the string input and parsing it to whatever value you wish.

```js
this.option("bar", {
  type: input => _.capitalize(input)
});
```

### Update to composeWith

`composeWith` was without any doubt the function with the most accidental complexity from other parts of our system. Changes to the input parsing as explained previously allowed us to reduce the complexity of that method.

Previously you'd write a composeWith function as:

```js
// OLD API
this.composeWith(
  "node:eslint",
  {
    options: {
      indent: 2
    }
  },
  {
    local: require.resolve("generator-node/generators/eslint")
  }
);
```

Now, it's just:

```js
this.composeWith(require.resolve("generator-node/generators/eslint"), {
  indent: 2
});
```

### Simpler default export

Previously the `yeoman-generator` package would expose a lot of unrelated functions.

It now only exports the core `Generator` class:

```js
const Generator = require("yeoman-generator");

export default class extends Generator {}
```

No more `NamedBase` and no more `yeoman-environment` factory (use `yeoman-environment` directly for that).

### Yarn support

We now expose `this.yarnInstall()` (just like `this.npmInstall()`) because life is too short to wait on installs.

`npmInstall` has also been improved with a longer default cache duration.

### Misc changes

We deleted a lot of deprecated functions:

- `this.expand()`
- `this.expandFiles()`
- `this.isPathAbsolute()`
- `this.mkdir()`
- `this.invoke()`
- `this.hookFor()`
- `this.remote()`
- `this.remoteDir()`
- `this.fetch()`
- `this.extract()`
- `this.tarball()`
- `this.welcome()`
- `this.write()`
- `this.read()`
- `this.copy()`
- `this.bulkCopy()`
- `this.template()`
- `this.directory()`
- `this.bulkDirectory()`

These are all functions that can be replaced by raw npm modules. They didn't require Generator prototype functions.

File handling should all be done with the `this.fs` virtual file system (/authoring/file-system.html)

## Migration guide

If you've been keeping up with the latest `yeoman-generator` release, then you should've seen deprecation warning each time you used a function that was going to be deleted.

If you didn't keep up with our releases. Then I'd suggest updating to [`v0.19`](https://github.com/yeoman/generator/releases/tag/v0.19.0) and progressively update to 1.0 as you'll get future deprecation warning as you update to each version. Fix the warning and update to the next minor until you reach 1.0.

As always, feel free to drop in [our gitter chat](https://gitter.im/yeoman/yeoman) to get support if you run into issues. Bugs can be reported to [the yeoman-generator repository](https://github.com/yeoman/generator/issues/new).

We do hope this release will help you make better and more efficient generators!

Cheers,
[Simon](https://twitter.com/Vaxilart) and the rest of the [Yeoman team](https://yeoman.io/)
