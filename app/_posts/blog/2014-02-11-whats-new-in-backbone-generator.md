---
layout: blog
title: What's new in the Backbone generator
---

The Backbone generator has had a few major updates recently and we wanted to share these changes with the community. The theme of the changes is to make the generator more flexible. There is also some updates related to testing and styling we wanted to share.

## Custom app path
Before, the scaffold generated the project's application files into the app folder. Now you can customize it using the `--appPath` option.

```sh
yo backbone --appPath=public
```

This will create a folder named `public` instead of `app`. It will then put the scaffolded code into that folder.  When you use a sub-generator, like `backbone:model`, the scaffold will use the `public` directory.

![app-path option](/assets/img/blog/backbone-app-path.png)

## Generating [Mocha](http://mochajs.org/) tests
We have written a new generator named [generator-backbone-mocha](https://github.com/revathskumar/generator-backbone-mocha). This will generate Mocha tests for your Backbone app. When you create new model with `yo backbone:model todo`, this will create `todo.spec.js` in your `test` folder.

![Backbone mocha](/assets/img/blog/yo-backbone-mocha.png)

You can choose BDD/TDD when generating the new Backbone app with the `--ui` option.

```sh
yo backbone --ui=tdd
```

By default the generator is setup to use BDD with Mocha.

## Added CoffeeScript support for RequireJS
Another great addition to the Backbone generator (version 2.0), is CoffeeScript support for RequireJS. A lot of people have requested this and we are happy to announce support for it. Thanks to [@stephanebachelier](https://github.com/stephanebachelier) for the effort in getting this in.

## Bootstrap 3.0
The last change we want to announce relates to Bootstrap. We have upgraded to Bootstrap 3.0! Now by default, Yeoman will install Bootstrap 3.0 when you generate a new application. Don't fear though, projects can include Bootstrap 2.0 still. After project  generation, edit the bower.json file and change the version of (sass-)bootstrap required.

## Other minor updates

* Dropped support for node 0.8
* `grunt server` task is now deprecated. `grunt serve` has replaced it. For more information, see [this issue explaining it](https://github.com/yeoman/yeoman/issues/1183)
* Improved scaffolds

We hope you like the new additions and enhancements we have made on the Backbone generator. We are looking for your feedback on keeping this project awesome.
