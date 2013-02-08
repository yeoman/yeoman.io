# Migrate from 0.9.6 to 1.0

A lot has changed since our last release 0.9.6. We decided to make Yeoman more than just a tool. It's a workflow; a collection of tools and best practices working in harmony to make developing for the web even better.

You can read more about the changes in [[The Road to 1.0]].

The first thing you'll notice is that there is no more `yeoman` command. We extracted the scaffolding into a new tool called `yo`. For package management we no longer proxy Bower, but let you use it directly. Same goes for grunt.

Instead of having a lot of the logic hidden in the `yeoman` binary we basically converted everything into generic grunt tasks that we've shared with the community. The `yo` command will scaffold out a static Gruntfile which contains everything you need. The obvious benefits are that everything is now totally explicit and customizable.


## Example

The new workflow is similar to the old one, but instead of using the `yeoman` command, you use the right tool for the task:


Old:

```
yeoman init
yeoman install jquery
yeoman build
```

New:

```
yo webapp
bower install jquery
grunt build
```


## Command conversions

```
yeoman init       ➜    yo
yeoman build      ➜    grunt [build]
yeoman server     ➜    grunt server
yeoman test       ➜    grunt test

yeoman install    ➜    bower install
yeoman uninstall  ➜    bower uninstall
yeoman update     ➜    bower update
yeoman list       ➜    bower list
yeoman search     ➜    bower search
yeoman lookup     ➜    bower lookup
```


## How to upgrade?

There have been [major changes](https://github.com/yeoman/generator-webapp/compare/adb4ae52b47f80e2cdcca9557aa461dbce798450...master#diff-8?w=1) done to the Gruntfile, so you can't simply use the same file. If you've done no changes to the Gruntfile you can just generate a new project with the `yo` command and then copy paste over your files except for the generated ones like the Gruntfile.js, package.json, etc. However, if you have made changes to the Gruntfile, you could diff the [original](https://github.com/yeoman/generator-webapp/blob/adb4ae52b47f80e2cdcca9557aa461dbce798450/app/templates/Gruntfile.js) one with yours and try to apply the same changes to the new one.
