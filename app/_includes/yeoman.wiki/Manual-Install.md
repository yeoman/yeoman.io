Feel free to read through the [get.yeoman.io](http://get.yeoman.io) shell script before installing it. 

Alternatively, you're very welcome to manually install Yeoman:

1. Use system package manager to install some necessary dependencies
  * On Mac, install Homebrew: `ruby <(curl -fsSkL raw.github.com/mxcl/homebrew/go)`. After installing, run `brew doctor` and follow the recommendations.
  * On Linux, you can use `apt-get`, `yum`, or `up2date`
1. Install these packages if you don't already have them: `git optipng jpeg-turbo phantomjs`
  * In homebrew you may want to `brew update` first.
  * `git` for obvious reasons, `optipng` and `jpeg-turbo` for image optimization in the build process. The [PhantomJS install](http://phantomjs.org/download.html) is used for a browser-run test suite.
1. Confirm Ruby >= 1.8.7 is installed (`ruby -v`). If not, [install it](http://www.ruby-lang.org/en/downloads/). (Used for Compass)
1. [Install latest 0.8.x NodeJS](http://nodejs.org/)  
  * Yeoman requires 0.8.x; 0.6.x will cause problems. 
  * We recommend downloading and installing the node binaries directly from [nodejs.org](http://nodejs.org/download/). This will save you needing to compile from source. 
1. [Install Compass](http://compass-style.org/install/) stable
1. Install Yeoman as a global node module: `npm install yeoman -g`