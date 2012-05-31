###Changelog for the Yeoman CLI dev team

(Addy, Mickael, Sindre)


**28th May - June 1st**


**`yeoman init`**

* We now have a new remote template pulling in:
    1. html5-boilerplate for the main base
    2. twitter-bootstrap for the optional list of JavaScript plugin
    3. compass_twitter_bootstrap for the sass files, as the CSS files are authored in sass     
* `--template <name>` can now be used to load a pre-defined template

**`yeoman` (no args)**
* Correctly defaults to displaying --v and help
* help updated to display options available


**`yeoman server`**

* We now make .coffee files in the /js folder automagically compile when tasks are run

**`yeoman test`**

* Jasmine testing hasness support has begun in the form of `yeoman --jasmine`

**Additional work on tests**

* Tests for the usemin task
* Tests for the tar task
* Tests for the img task
* Tests for the html task
* Tests for the css task
* Tests for the build:* tasks


**`yeoman build`**

* Image compression: Sindre spent time researching the most optimal approaches we can take for PNG compression. Discovered that OptiPNG was the best so we're using that at the moment. 

**Documentation**

* `yeoman docs` brings up the local docs folder (note: very much WIP)
* Work has begun on the documentation
* Decided on markdown source
* Setting up Jekyll so we can easily generate HTML docs and integrate with whatever the agency come up with

**ES6 Support Research + POC**
* https://github.com/addyosmani/require-hm
* Discussion thread at: https://groups.google.com/forum/#!msg/yeoman-dev/LCZ00RcDVRo/5ufIlxTuP2AJ

**To Discuss:**
* Default wizard questions? https://github.com/yeoman/yeoman/issues/24