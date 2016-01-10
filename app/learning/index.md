---
layout: default
markdown: 1
title: Getting started with Yeoman
sidebar: sidebars/learning.md
---

Yeoman is a generic scaffolding system allowing the creation any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects.

Yeoman is language agnostic. It can generate projects in any language (Web, Java, Python, C#, etc.)

Yeoman by itself doesn't make any decisions. Every decision is made by _generators_ which are basically plugins in the Yeoman environment. There's a [lot of publicly available generators](/generators) and its easy to [create a new one](/authoring) to match any workflow. Yeoman is always the right choice for your scaffolding needs.

Here are some common use cases:

- Rapidly create a new project
- Create new sections of a project, like a new controller with unit tests
- Create modules or packages
- Bootstrapping new services
- Enforcing standards, best practices and style guides
- Promote new projects by letting users get started with a sample app
- Etc, etc

## Getting started

`yo` is the Yeoman command line utility allowing the creation of projects utilizing scaffolding templates (referred to as generators). Yo and the generators used are installed using [npm](http://npmjs.org).

### Installing yo and some generators

First thing is to install `yo` using `npm`:

```sh
npm install -g yo
```

Then install the needed generator(s). Generators are npm packages named `generator-XYZ`. Search for them on [our website](/generators) or by selecting "install a generator" menu option while running `yo`. To install the `webapp` generator:

```
npm install -g generator-webapp
```

New Node and npm users might runs into permissions issues. These issues shows up in the form of `EACCESS` errors during installation. Refer to the [npm guide to fix permissions]
(https://docs.npmjs.com/getting-started/fixing-npm-permissions) if this happens to you.

*npm is the package manager for [Node.js](https://nodejs.org/) and comes bundled with it.*

*On Windows, we suggest using a better command line tool such as [`cmder`](http://cmder.net/) or PowerShell to improve the experience.*


### Basic scaffolding

We'll use `generator-webapp` in our examples below. Replace `webapp` with the name of your generator for the same result.

To scaffold a new project, run:

```sh
yo webapp
```

Most generators will ask a series of questions to customize the new project. To see which options are available, use the `help` command:

```sh
yo webapp --help
```

A lot of generators rely on build systems (like Grunt or Gulp), and package managers (like npm and Bower). Make sure to visit the generator's site to learn about running and maintaining the new app. Easily access a generator's home page by running:

```sh
npm home generator-webapp
```

Generators scaffolding complex frameworks are likely to provide additional generators to scaffold smaller parts of a project. These generators are usually referred to as _sub-generators_, and are accessed as `generator:sub-generator`.

Take `generator-angular` as an example. Once the full angular app has been generated, other features can be added. To add a new controller to the project, run the controller sub-generator:

```sh
yo angular:controller MyNewController
```


### Other yo commands

Other than the basics covered in the previous section, `yo` is also a fully interactive tool. Simply typing `yo` in a terminal will provide a list of options to manage everything related to the generators: run, update, install, help and other utilities.

Yo also provide the following commands.

- `yo --help` Access the full help screen
- `yo --generators` List every installed generators
- `yo --version` Get the version


### Troubleshooting

Most issues can be found by running:

```sh
yo doctor
```

The `doctor` command will diagnose and provide steps to resolve the most common issues.


### Creating a generator

See [Authoring](/authoring).
