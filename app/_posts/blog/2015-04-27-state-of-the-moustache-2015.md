---
layout: blog
title: State of the Moustache
excerpt: Digest of what's new in the Yeoman ecosystem
---

> this is a post by team member [Addy Osmani](https://github.com/addyosmani). <br>In this issue we cover generators for React, ES6, desktop apps and more.

## Intro

Allo! Allo! April is a special month for us as it represents 3 years since the project first started and almost 2 years since we decided to rename the binary from [yeoman](github.com/yeoman/yeoman) to [yo](github.com/yeoman/yo). This month also saw Yeoman grow to [94,000](npmjs.com/package/yo) monthly installs and 1635 community [generators](http://yeoman.io/generators/).

A huge thank you to all our contributors and a special call-out to all the global event organisers that featured Yeoman at their events. [YeomanTO](https://twitter.com/YeomanTO), the [Codepen Meetups](https://twitter.com/Smartass_io/status/580501962527010816), [IBM Design Camp](https://twitter.com/kevinSuttle/status/568811512938127361), [OttawaJS](https://twitter.com/solanojuan/status/575807587095990272), [JSMontreal](https://twitter.com/jsmontreal) and others all have our ❤. We couldn't be doing this without you.

## Highlights

Some of our recent highlights have been increased use of Yeoman for scaffolding in the React community, folks trying out ES6 to write their own [generators](http://mammal.io/articles/yeoman-generators-es6) and Internet Explorer PM Ade Bateman using yo to scaffold out [technical specifications](http://adrianba.net/archive/2015/03/14/using-yeoman-to-start-writing-technical-specifications-with-respec.aspx). Crazy cool.

![](/assets/img/blog/april-es6.png)

We're excited to see so much passion for project scaffolding and are working on some new features to enable generators to extend and build on top of each other.

### Spotlight: React

[React](http://reactjs.com) is a library for creating user-interfaces by Facebook. It creates its own Virtual DOM, where components live. This approach provides the potential for performance gains as React calculates what work needs to be done in the DOM beforehand, updating the DOM tree in a batch accordingly. React avoids costly DOM operations and aims to update in an efficient way.

Three new generators for quickly getting started with React are out: [React and WebPack](https://github.com/newtriks/generator-react-webpack) (recommended, with support for Flux and react-router), [React and Flux](https://github.com/banderson/generator-flux-react) (with Browserify), and [React and Meteor](https://github.com/payner35/generator-meteor-react).

![](/assets/img/blog/april-react.png)


### Spotlight: ES6

A number of new generators are also now available for quickly turning your ES6+ code into ES5 code. There are generators available for [Babel](https://github.com/thejameskyle/generator-es6-library-boilerplate), [Angular2](https://github.com/swirlycheetah/generator-angular2) and [Aurelia](https://github.com/zewa666/generator-aurelia) - a new framework using ES6 and Web Components. A few more ES6 generators can be found over on my [es6-tools](https://github.com/addyosmani/es6-tools#code-generation) project.

![](/assets/img/blog/april-es62.png)

### Spotlight: Electron

[Electron](http://electron.atom.io/), formerly atom-shell, allows you to build cross-platform desktop apps using JS/CSS/HTML. Some of the apps built using it that you may already be using include [Slack](https://slack.com/), [Atom Editor](https://atom.io) (of course) and PhotoShop/Sketch export tool [Avocode](http://avocode.com/).

Electron is based on [io.js](http://iojs.org/) and Chromium and to help you get started with projects using it, Sindre Sorhus has written a quick Electron [generator](https://github.com/sindresorhus/generator-electron) you can try out. He also maintains a list of [awesome-electron](https://github.com/sindresorhus/awesome-electron) projects in case you're looking for inspiration.

![](/assets/img/blog/april-electron.png)

### Spotlight: Node

While many of us are used to just using `npm init` for fleshing out our new Node modules, some might prefer a more opinionated alternative.  Cue [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) and [generator-nm](https://github.com/sindresorhus/generator-nm) by Sindre Sorhus. His starting point includes EditorConfig, Travis and a unit testing starting point out of the box. 

On a related note, if you find yourself needing to automate debugging a Yeoman generator with node-inspector, Hemanth on the team has written up a useful [script](https://github.com/hemanth/debug-yeoman-generator) you can also check out.

## Community

Below is a round-up of community authored articles about or mentioning Yeoman which we enjoyed reading this month. Learn how to build a complete WebRTC client, a Slack bot or automate your Wordpress theme tooling workflow. This and more below.

### Articles

[Multi-User Video Conference with WebRTC and Yeoman](http://blog.mgechev.com/2014/12/26/multi-user-video-conference-webrtc-angularjs-yeoman)

[Writing Yeoman generators in ES6](http://mammal.io/articles/yeoman-generators-es6)

[Putting your bot on #Slack using Yeoman](http://blog.pandorabots.com/putting-your-bot-on-slack/)

[How to Build an App With AngularJS, Node.js and Stormpath in 15 Minutes](https://stormpath.com/blog/angular-node-15-
minutes)

[Worflow automation for Wordpress Theme Developers with Yeoman](https://speakerdeck.com/artificermil/front-end-workflow-automation-for-wordpress-theme-and-plugin-development)

[A Baseline for Front-End [JS] Developers: 2015](http://rmurphey.com/blog/2015/03/23/a-baseline-for-front-end-developers-2015)

[Yeoman, Polymer and Gulp](http://robdodson.me/yeoman-polymer-and-gulp)

[Integrating Yeoman with third-party tools](http://yeoman.io/authoring/integrating-yeoman.html)

[Using yo webapp via Docker](https://asciinema.org/a/13240)

[Node, Yeoman, Bower, and Gulp with PostCSS on OS X Yosemite](http://itmustbe.com/code/2015/04/04/node-yeoman-bower-gulp-postcss-os-x-yosemite/)

[Yeoman Tutorial video series](https://youtube.com/watch?list=PLpP9FLMkNf54AFwvRgYb8KMbKCaqqopsl&v=bqTLJi086Po)

[Internationalization of AngularJS Applications](https://scotch.io/tutorials/internationalization-of-angularjs-applications)

[Starting modern Java projects with JHipster and Yeoman](http://www.drissamri.be/blog/technology/starting-modern-java-project-with-jhipster/)

[How to set up a modern web app and stay sane](http://khmylov.com/blog/2015/02/build-web-app-and-survive/)

[How to Wire Up Ruby on Rails and AngularJS as a Single-Page Application (Gulp Version)](http://angularonrails.com/how-to-wire-up-ruby-on-rails-and-angularjs-as-a-single-page-application-gulp-version/?utm_medium=email&utm_source=rubyweekly)

[Practical TypeScript Development with Gulp and Sublime Text 3](https://airpair.com/typescript/posts/typescript-development-with-gulp-and-sublime-text?utm_medium=email&utm_source=javascriptweekly)

### Some generators we liked

[A new generator for Django projects](http://axiacore.github.io/generator-django-axiacore/)

[Mobile Chrome Apps Starter Kit with Polymer](http://goo.gl/3MdaIk)

[Angular + Gulp generator has a new release](https://github.com/Swiip/generator-gulp-angular/releases)

[Symphony2 with JSPM and critical-CSS optimisation](https://github.com/bezoerb/generator-grunt-symfony)

[Generator for Adobe Brackets extensions](https://github.com/sixertoy/generator-brackextension)

## Announcements from core

### Exploring npm3

[npm@3](https://github.com/npm/npm/wiki/Roadmap) plans to introduce a number of improvements, including a caching rewrite and no longer installing `peerDependencies` by default. This particular change will have an impact on `yo` as it means you end up needing to resolve peerDep conflicts yourself manually. We may end up having our sub-generators in `dependencies` instead, but look forward to taking full advantage of npm@3 where it'll benefit our users.

### Deprecations

As Simon mentioned in our [0.19 release notes](https://github.com/yeoman/generator/releases/tag/v0.19.0) for the generator system, we're currently looking to deprecate a set of methods as we work on cleaning up our API towards an eventual 1.0 release. As always, please test your generators against the latest version of `yeoman-generator` to ensure everything continues to run smoothly.

### Composition FTW

It's been pleasant to see an [increasing](https://twitter.com/tomwayson/status/588564830665084930) number of developers using our [composability](http://yeoman.io/authoring/composability.html) feature for their generators. This enables building upon common ground so that a generator can be run inside another generator, rather than having to replicate functionality. E.g call out to a generator for scaffolding Karma tests rather than doing this inside your AngularApp one.

## Tipping our hat

That's about it for this round-up. We would like to remind folks that we're always checking out [@yeoman](http://twitter.com/yeoman) and enjoy hearing suggestions for anything we can be doing better, news, new generators you've written or even just [doodles](https://twitter.com/kittytail38/status/573522972528373761) of your favorite man in a hat. Until next time, `yo awesomeness`.

