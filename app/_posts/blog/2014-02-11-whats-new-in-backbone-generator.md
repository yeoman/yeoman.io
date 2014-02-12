---
layout: blog
title: What's new in backbone generator
---
The Backbone generator has undergone a few major updates within the last couple of months and we wanted to share these changes with the community. The overall theme of the changes are intended to make the generator more flexible. There is also some updates related to testing and styling we wanted to share.

# 1. Custom app path
Previously, the scaffold generated the project's application files into the app folder. Now you can customize it using the --appPath option.
```
yo backbone --appPath=public
```
This will create a folder named `public` instead of `app` and when you use any sub generators like `backbone:model` the scaffold will be created into the public directory.

![app-path option](/assets/img/blog/backbone-app-path.png)

# 2. Generating mocha tests
We have written a new generator named [generator-backbone-mocha](https://github.com/revathskumar/generator-backbone-mocha) which will generate mocha tests for you backbone app. When you create new model with `yo backbone:model todo`, this will create `todo.spec.js` in your test folder.

![Backbone mocha](/assets/img/blog/yo-backbone-mocha.png)

You can choose bdd/tdd when generating the new Backbone app with the `--ui` option.

```
yo backbone --ui=tdd 
```

By default the generator will be configured for bdd with mocha.

# 3. Added CoffeeScript support for RequireJS
Another great addition to the Backbone generator (version 2.0), is CoffeeScript support for RequireJS. A lot of people have requested this and we are happy to announce support for it. Thanks to @stephanebachelier for the effort in getting this in.

# 4. Bootstrap 3.0 
The last change we want to announce relates to Bootstrap. We have upgraded to Bootstrap 3.0! Now by default, Yeoman will install Bootstrap 3.0 when you generate a new application. If you want to continue to generate new projects using Bootstrap 2.0 (not recommended), then you have to manually edit the version of sass-bootstrap in the bower.json after the project has been generated.

# Other minor updates

* Dropped support for node 0.8
* `grunt server` task is deprecated and introduced `grunt serve`
* Improved scaffolds

We hope you like the new additions and enhancements we have made on the Backbone generator. We are looking for your feedback on keeping this project awesome.
