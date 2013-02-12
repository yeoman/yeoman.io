Our initial release of Yeoman attempted to be a lot of things to a lot of people. We learned a number of lessons from this process, including the importance of clear messaging around the tools used in our toolbelt and how our workflow might be customized. We aim to make the experience of using Yeoman more streamlined in 1.0 keeping in mind the following:

## Yeoman 0.9 pain points

* Confusion with Grunt, no clear migration path
* Not enough flexibility with existing projects
* Grunt tasks, Yeoman tasks - it's not entirely clear what the differences are
* 10-20 minutes to install all dependencies
* A little too opinionated in some areas. It's not clear how to customize
* Package management only occasionally worked

## Clearing up misconceptions

* Isn't meant to replace Grunt, but be used alongside it
* Is an opinionated collection of Grunt tasks, with scaffolding
* Is meant to be used for workflow alone. Grunt is the build process
* Not a Mac/Unix only tool. Windows support coming
* Not recommended for building websites
* Shouldn't be used as a blanket "replace everything" solution
* Doesn't aim to replace all well established back-end tools
* IS meant to be used for building complex web applications, with a back-end/third-party API

## Yeoman 1.0 high-level goals

* Harmony with Grunt
* Better installation experience
* Everything is more configurable
* Generators are more flexible
* Improved package management story
* Better stability
* Less opinionated in some areas
* Easier to work with existing projects 

## Installation

* Install time greatly reduced 
* Less required dependencies
* Only install something when it's needed (TM)
* Python, which was slow but required, is gone
* Ruby is only required if the user wants Compass support
* Image compression tools (OptiPNG, JPEGTran) are gone as defaults and automatically get pulled from npm
* The same is the case with PhantomJS
* The updater is gone, which was a big cause of slow-down during start-up times
* Improved support for Windows and Linux

## Configuration

* Improved compatibility with Grunt
* Everything is more configurable
* Tasks
* Hooks
* Project structure
* Generators
* Dependency/Usemin blocks
* Almost all tasks upstreamed to grunt-contrib
* As a result of the rewrite, even modifying Yeoman itself is now more straight-forward

## Generators

* New, simplified API for scaffolding apps
* Aiming to serve grunt init
* Will soon all use Bower for their dependencies
* Will be easily fetchable via NPM
* Improved hooks to tie in to the back-end
* Driven by developers in the community using them regularly
* Will soon offer scaffolding for the front-end and back-end

## Bower

* Now driven by Yeoman contributors
* Several stability fixes for general usage
* Search and publish to different endpoints via your bowerrc file
* Improved Bower RequireJS wiring. Modifies config as an object, doesn't duplicate entries
* Installation using install userName/repoName
* Autocompletion
* Improved listing times
* Improved error handling and messages

<hr>

If you're interested in [Migrating your 0.9 app to 1.0 then follow this migration guide](https://github.com/yeoman/yeoman/wiki/Migrate-from-0.9.6-to-1.0).