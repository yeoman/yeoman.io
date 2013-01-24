# Installation

Yeoman used to have an automated installer, which worked great on fresher systems, but had trouble with more used and configured systems. It has been officially deprecated, though is maintained at the [Yeoman-scripts](https://github.com/tomlane/Yeoman-scripts) repo. It's recommended for people with less experience installing node, homebrew packages, etc.  Below is the recommended installation route.

## Audit script

The audit script can tell you what you're missing in order to install Yeoman. _(Feel free to read the [script source](https://github.com/yeoman/yeoman/blob/master/setup/install.sh) first, if you like)_. You can run it as many times are you want:

```sh
curl -L get.yeoman.io | bash
```

![](https://a248.e.akamai.net/camo.github.com/17d4523f378ce6aab85ce2901e09d87d016c266e/687474703a2f2f7061756c69726973682e636f6d2f692f6263383765302e706e67)

The script recommends how to install what's missing, but a more verbose description follows:

## Yeoman Install Procedure

###Windows

**NOTE:** [Windows is not officially supported yet](https://github.com/yeoman/yeoman/issues/216). Some things might not work!

1. Follow the instructions [here](http://www.decodize.com/css/installing-yeoman-front-end-development-stack-windows/#chocolatey) to install Yeoman and its dependencies using Chocolatey.
2. [Download](http://www.python.org/getit/) and install Python 2.7.
3. Add python to your system path. Add "`C:\Python27;`" to the `PATH` env variable. See [these instructions](http://java.com/en/download/help/path.xml).

###  Mac & Linux 
_(Debian and ArchLinux users can check below)_.

1. Use system package manager to install some necessary dependencies
  * On Mac, install Homebrew: `ruby <(curl -fsSkL raw.github.com/mxcl/homebrew/go)`. After installing, run `brew doctor` and follow the recommendations. 
  * **Please** `brew update`. Your formulae are likely outdated.
  * On Linux, you can use `apt-get`, `yum`, or `up2date`. Install jpegtran on linux using `sudo apt-get install libjpeg-progs`
1. Install these packages if you don't already have them: `git optipng jpeg-turbo phantomjs`
  * `git` for obvious reasons, `optipng` and `jpeg-turbo` for image optimization in the build process. The [PhantomJS install](http://phantomjs.org/download.html) is used for a browser-run test suite.
1. Confirm Ruby >= 1.8.7 is installed (`ruby -v`). If not, [install it](http://www.ruby-lang.org/en/downloads/). (Ruby is used with Compass)
1. [Install latest 0.8.x NodeJS](http://nodejs.org/)  
  * Yeoman requires 0.8.x; running 0.6.x will cause problems. 
  * We recommend downloading and installing the node binaries directly from [nodejs.org](http://nodejs.org/download/). This will save you needing to compile from source. 
1. [Install Compass](http://compass-style.org/install/) stable
1. Install Yeoman as a global node module: `npm install yeoman -g`. You may potentially need to run this with `sudo`

_(Also, specific instructions for Debian users [here](https://github.com/yeoman/yeoman/issues/461))_.

_(and for ArchLinux users, yeoman is present in [AUR](http://aur.archlinux.org/packages.php?ID=62782))_.

## Requirements

Dependencies in list form:

* NodeJS >= 0.8.x
* Ruby >= 1.8.7
* Compass >= 0.12.1
* optipng
* jpegtran
* PhantomJS >= 1.6

Also, Homebrew is recommended on Mac to install phantomjs, jpegtran, optipng. It depends on Xcode CLI Tools.

### Other procedures

For uninstall, reinstall, running an edge build, and other issues, see [[Additional FAQ]]