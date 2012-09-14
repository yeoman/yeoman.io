Yeoman used to have an automated installer, which worked great on fresher systems, but had trouble with more used and configured systems. It has been officially deprecated, though is maintained at the [Yeoman-scripts](https://github.com/tomlane/Yeoman-scripts) repo. It's recommended for people with less experience installing node, homebrew packages, etc.

### Audit script

The audit script can tell you what you're missing in order to install Yeoman. You can run it as many times are you want:

```sh
curl -L get.yeoman.io | bash
```

Below is a more verbose install procedure for Yeoman:

### Yeoman Install Procedure

1. Use system package manager to install some necessary dependencies
  * On Mac, install Homebrew: `ruby <(curl -fsSkL raw.github.com/mxcl/homebrew/go)`. After installing, run `brew doctor` and follow the recommendations. You may also want to `brew update`.
  * On Linux, you can use `apt-get`, `yum`, or `up2date`
1. Install these packages if you don't already have them: `git optipng jpeg-turbo phantomjs`
  * `git` for obvious reasons, `optipng` and `jpeg-turbo` for image optimization in the build process. The [PhantomJS install](http://phantomjs.org/download.html) is used for a browser-run test suite.
1. Confirm Ruby >= 1.8.7 is installed (`ruby -v`). If not, [install it](http://www.ruby-lang.org/en/downloads/). (Ruby is used with Compass)
1. [Install latest 0.8.x NodeJS](http://nodejs.org/)  
  * Yeoman requires 0.8.x; running 0.6.x will cause problems. 
  * We recommend downloading and installing the node binaries directly from [nodejs.org](http://nodejs.org/download/). This will save you needing to compile from source. 
1. [Install Compass](http://compass-style.org/install/) stable
1. Install Yeoman as a global node module: `npm install yeoman -g`. You may potentially need to run this with `sudo`


### Other procedures

For uninstall, reinstall, running an edge build, and other issues, see [[Additional FAQ]]