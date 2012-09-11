Feel free to read through the [get.yeoman.io](http://get.yeoman.io) shell script before installing it. Alternatively, you're very welcome to handle installation on your own:

1. Use system package manager to install some necessary dependencies
  * On Mac, install Homebrew: `ruby <(curl -fsSkL raw.github.com/mxcl/homebrew/go)`
  * On Linux, you can use `apt-get`, `yum`, or `up2date`
1. Install these packages if you don't already have them: `git optipng jpeg-turbo phantomjs`
  * `git` for obvious reasons, `optipng` and `jpeg-turbo` for image optimization in the build process. The [PhantomJS install](http://phantomjs.org/download.html) is used for a browser-run test suite.
1. Confirm Ruby >= 1.8.7 is installed. If not, [install it](http://www.ruby-lang.org/en/downloads/). (Used for Compass)
1. [Install latest 0.8.x NodeJS](http://nodejs.org/)  
  * Yeoman requires 0.8.x; 0.7.x will cause problems. You can use [nave](https://github.com/isaacs/nave#readme) to manage this.
1. [Install Compass](http://compass-style.org/install/) stable
1. Install Yeoman as a global node module: `npm install yeoman -g`