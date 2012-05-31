The weekly changelog (started May 31st) will give us an easier window into what has been done during the last week without having to review all of the commit history. 

**28th May - June 1st**

(Will include updates that were not discussed at the last Tooling meeting)

A new remote template:
  * html5-boilerplate for the main base
  * twitter-bootstrap for the optional list of JavaScript plugins
  * compass_twitter_bootstrap for the sass files, as the CSS files are authored in sass

Other:

* --template <name> option used to load a pre-defined template
* make .coffee files in the /js folder automagically compile when tasks are run
* - jasmine task
* start on documentation
* Tests for the usemin task
* Tests for the tar task
* Tests for the img task
* Tests for the html task
* Tests for the css task
* CSS task - minifications once inline imports are done
* Tests for the build:* tasks

Todos:
* Yeoman template notes for the CLI intro


**Notes:**

Installation: 
`
cd yeoman/cli
sudo npm instal -g
`

Usage:
`
yeoman init
`
