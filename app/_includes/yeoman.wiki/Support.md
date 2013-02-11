Rough thoughts as I work out how to word this.

Yeoman provides an optimized **scaffolding** and workflow experience for creating compelling web applications. Developers use Yeoman together with Grunt, for **building** their projects and Bower for **package management**. A typical workflow between this trinity of tools might look like:

```
yo webapp
yo angular
bower install angular-directives
grunt
```

### Binary issues
For issues with the Yeoman binary, such as being unable to run Yeoman at all you should submit a bug ticket to the Yeoman issue tracker for further help.

### Scaffold issues
Our scaffolds (such as angular above) are community-driven, with several of our default ones living under the Yeoman organization on GitHub. These are maintained by developers in the community around a particular framework. Issue trackers for some of our popular generators can be found below

* AngularJS
* Backbone
* Chrome Apps
* Ember

### Build issues

As we recommend using Grunt for building your projects, the Grunt issue tracker should be used for support issues around building projects. Keep in mind however that if you have an issue with a specific task (e.g CoffeeScript compilation) it probably makes more sense to submit a bug report to grunt-contrib to address this as the official Grunt tracker should not be used for such issues.

Issue trackers for some of the common tasks used in the Yeoman workflow can be found below:

* coffee
* compass
* handlebars
* requirejs

### Package management issues

If you have installed a package using Bower, updated a package or are experiencing issues managing packages, the Bower issue tracker should be used for submitting bug reports. The Yeoman workflow typically relies on Grunt for minification/concat of such dependencies, however we will let you know if an issue submitted is a Bower issue or a Yeoman issue.