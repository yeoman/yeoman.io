---
layout: blog
title: Generator-M-Ionic - JS fatigue and transitioning to Typescript, Angular 2 & Ionic 2
---

<p align="center">
  <a href="https://github.com/mwaylabs/generator-m-ionic" alt="Generator-M-Ionic">
    <img width="175" src="/assets/img/blog/2016-07-13/logo.png">
  </a>
</p>

> This is a guest post by [Jonathan Grupp](https://twitter.com/JonathanGrupp)


[Generator-M-Ionic](https://github.com/mwaylabs/generator-m-ionic) is an open source collection of advanced workflows for building cross-platform HTML5 mobile apps with Ionic. This article gives a quick introduction into the generator's capabilities and refers to more elaborate resources for those willing to work with it.

As we're transitioning to the next generation technology stack with Typescript, Angular 2 and Ionic 2, we're trying to overcome [JS fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.vh3bssyd7) and JS tooling fatigue and bring the development of the different tools closer together. You can help us by joining the discussion!

## What's Generator-M-Ionic for?
> **Advanced workflows for building rock-solid Ionic apps:** develop, prototype, test, build and deliver high quality apps with Yeoman, Gulp, Bower, Angular, Cordova and of course Ionic. All in one sexy generator.

The roots of [Generator-M-Ionic](https://github.com/mwaylabs/generator-m-ionic) reach back more than two years when my team and I ([@gruppjo](https://github.com/gruppjo)) at [M-Way Solutions](http://www.mwaysolutions.com/) decided to move our HTML5 mobile app development stack to Angular and Ionic in [early 2014](http://blog.mwaysolutions.com/2015/03/26/generator-m-the-state-of-html5-mobile-app-development-at-m-way/). Since then [Generator-M-Ionic](https://github.com/mwaylabs/generator-m-ionic) has grown into a full-fledged collection of development tools for building large-scale enterprise apps with [Cordova](http://cordova.apache.org/), [Angular](https://angularjs.org/) and [Ionic](http://ionicframework.com/).

Built on top of the [Yeoman Ecosystem](http://yeoman.io/) with [Gulp](http://gulpjs.com/), [Bower](https://bower.io/) and [npm](https://www.npmjs.com/), Generator-M-Ionic offers highly efficient workflows for building apps from start to finish by wiring together a complex technology stack and by providing workflows for all important aspects of professional cross-platform HTML5 app development with Cordova, Angular and Ionic.

![Generator-M-Ionic technology stack](/assets/img/blog/2016-07-13/tech_stack.png)

Here's a brief overview of Generator-M-Ionic's capabilities:

### Code Generation
- `yo m-ionic` sets up a fine-tuned project including:
  - worry-free [Git integration](https://github.com/mwaylabs/generator-m-ionic/tree/master/docs/guides/git_integration.md)
  - a properly configured [Cordova project](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/development_intro.md#using-the-cordova-cli)
  - an out of the box [sample app](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/questions.md#starter-template)
  - seamless [Sass integration](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/sass_integration.md)
  - easy to understand [file-structure](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/file_structure.md)
- [sub generators](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/sub_generators.md) create ready to use components like Angular controllers, templates, services and more

### Development Workflows
- `gulp watch` automatically connects the frontend-stack including Angular, Ionic and all other bower components, stylesheets, your own Angular and Ionic components with your app and watches for changes
- `gulp --livereload "run ios"` builds an app for your device and watches for changes on your dev machine using [Browsersync](https://www.browsersync.io/)
- ... discover more useful workflows in our [Development Introduction](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/development_intro.md)

### Code Quality
- [ESLint](http://eslint.org/) together with other JSONLint runs along with all important development tasks
- `gulp karma` and `gulp protractor` profit from an out-of-the-box ready-to-use [Testing workflow](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/testing.md)
- these integrate nicely into Continuous Integration, precommit and other hooks with [Husky](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/testing_workflow.md)

### Continuous Integration
In addition to our CI-ready build and test workflows, injecting [Build Vars](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/build_vars.md) into your build and other [CI features](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/programmatically_change_configxml.md) complement a successful Continuous Integration setup with Generator-M-Ionic.

### Advanced Workflows
Handling [CORS & Proxying](https://github.com/mwaylabs/generator-m-ionic/tree/master/docs/guides/cors_proxy.md) issues, managing different sets of [App Icons and splash screens](https://github.com/mwaylabs/generator-m-ionic/tree/master/docs/guides/icons_splash_screens.md), tackling different API endpoints and other things with [Environments](https://github.com/mwaylabs/generator-m-ionic/tree/master/docs/guides/environments.md) and much more is part of the [Advanced Workflows Section](https://github.com/mwaylabs/generator-m-ionic#advanced) of our Guides.

### Ecosystems
Creating things like backends, push services, user management, build infrastructures and others can be hard. Luckily there's ecosystems like the [Ionic Platform](http://ionic.io/), our own enterprise-targeting [Relution](https://www.relution.io/), which your Generator-M-Ionic project integrates into nicely. [Read more](https://github.com/mwaylabs/generator-m-ionic#ecosystems).

## If that wasn't enough
... check out our [GitHub repository](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/programmatically_change_configxml.md) for the full documentation!

Besides that, we recently had the pleasure of publishing a full blog series about Generator-M-Ionic on the [Ionic Blog](http://blog.ionic.io/). Give it a go for a more tutorial-like approach of getting to know the full value of Generator-M-Ionic:

- Advanced workflows for building rock-solid Ionic apps. [Part 1: Playground](http://blog.ionic.io/advanced-workflows-for-building-rock-solid-ionic-apps-part-1/)
- Advanced workflows for building rock-solid Ionic apps. [Part 2: Mountain](http://blog.ionic.io/advanced-workflows-for-building-rock-solid-ionic-apps-part-2/)
- Advanced workflows for building rock-solid Ionic apps. [Part 3: Orbit](http://blog.ionic.io/advanced-workflows-for-building-rock-solid-ionic-apps-part-3/)

We'd love to hear your feedback!

## Transitioning

With Angular 2 [release candidates](http://angularjs.blogspot.de/2016/06/rc4-now-available.html?view=magazine) and Ionic 2 [betas](http://blog.ionic.io/ionic-2-beta-10-is-live/) now being released almost every week [we're preparing to make our transition](http://blog.mwaysolutions.com/2016/03/23/preparing-for-ionic-2-and-angular-2/) in a reasonable and educated fashion.

![Angular 2 Ionic 2](/assets/img/blog/2016-07-13/angular2_ionic2.png)

The Angular 1 & Ionic 1 ecosystem is huge and many companies like ourselves, or organizations who use our generator have a large number of apps and assets written for this stack. Therefore the Angular 1 / Ionic 1 stack will continue to play a major role for a long time to come, before the majority of the market will have made its transition.

Thus it's especially important for us to provide tools that capitalize on these assets and apps instead of rendering them useless. A smooth transition instead of mindlessly rushing towards the new stack.

For this we need your help.

## Spark the discussion
If you like what you're seeing in our generator you can help us figure out how all of us can build Ionic 2 apps in the future. There's many open ends and a lot of commotion regarding the whole Angular 2 / Ionic 2 stack. Whether to Browserify or to Webpack, to ES6/7 or to Typescript and whether to CLI or to Yeoman?

There's a lot of choices contributing to [JS fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.vh3bssyd7) and from a tooling standpoint this isn't any different.

There is an [Angular 2 CLI prototype](https://github.com/angular/angular-cli) from the Angular creators and the [Ionic 2 CLI](http://ionicframework.com/docs/v2/cli/) from the Ionic creators. Unfortunately both of them are more or less closed systems which drastically complicates building on top of it to suit your own needs. As of now it's time consuming, partly impossible to get Ionic, Cordova, a proper e2e and unit [testing workflow](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/testing.md), [linting](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/eslint.md), [environments](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/environments.md), [build vars](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/build_vars.md) and many of our other features into each of these tools without forking and largely altering them.

Personally I'm quite intrigued by the flexibility of the [FountainJS Generators](http://fountainjs.io/), which is the next generation of the famous [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular), both created by [@zckrs](https://twitter.com/Zckrs) and [@Swiip](https://twitter.com/Swiip). I hope we can build on top of their architecture. Relying on the [Yeoman](http://yeoman.io/) architecture allows tremendous flexibility and extensibility in their and our project. Unfortunately the Angular 2 CLI and the Ionic 2 CLI don't use Yeoman and don't provide easy ways to build on top of their functionality. In fact that's exactly the same problem we had with Angular 1 and Ionic 1 and is the reason [why we started building our generator in the first place](http://blog.mwaysolutions.com/2015/09/21/generator-m-ionic-and-the-search-for-the-holy-grail/).

## Get in touch
You can help by joining the discussion, tell us which features of Generator-M-Ionic, the Angular 2 CLI and the Ionic 2 CLI you like and hopefully we can bring development of all of them closer together, getting rid of some of that decision fatigue and bring better tools for all of us.

You can start by commenting on [this issue in our repository](https://github.com/mwaylabs/generator-m-ionic/issues/403), or dive deeper into to the corresponding discussion over at the [yeoman repo](https://github.com/yeoman/yeoman/issues/1571), [angular-cli repo](https://github.com/angular/angular-cli/issues/49#issuecomment-196876545) or [ionic-cli repo](https://github.com/driftyco/ionic-cli/issues/845).

Let us know what you think and help us build better tools for the next generation of HTML5 mobile app development!

For everything else our [Github repository](https://github.com/mwaylabs/generator-m-ionic) and [Gitter channel](https://gitter.im/mwaylabs/generator-m-ionic) is the way to go!
