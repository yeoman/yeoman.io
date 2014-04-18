---
layout: codelab
markdown: 1
---

# Set up your dev environment

<img src="/assets/img/yeoman-004.png" class="spacer"/>

## Fire up the command line

Most of your interactions with Yeoman will be through the command line. Run commands in the Terminal app if you’re on Mac, your shell in Linux, or [Cygwin](http://www.cygwin.com/) if you are on Windows.

## Install prerequisites 

Before installing Yeoman, you will need the following:

* [NodeJS](http://nodejs.org/download/) v0.10.x+
* npm (which comes bundled with NodeJS) v1.3.7+ 

You can check if you have Node (and npm) installed by typing:

```js
$ node --version && npm --version
```

## Install the Yeoman toolset 

Once you’ve got Node installed, you can install the Yeoman toolset using the command line:

```js
$ npm install --global yo
```

(If you see permission or access errors, you will need to prepend `sudo` to the above command.)

## Confirm installation

It is a good idea to check that everything is installed as expected by running commonly used Yeoman commands like `yo`, `bower`, and `grunt` with the `--version` flag as follows:

```js
$ yo --version && bower --version && grunt --version
```

Running the above should output four separate version numbers:

* Yeoman
* Bower
* Grunt
* Grunt CLI (the command-line interface for Grunt)

![](/assets/img/codelab/image_3.png)

<div class="note">

  <p><strong><em>Versions of Yeoman, Bower, and Grunt that this code lab works with</em></strong></p>

  <p>Technology changes quickly! This tutorial has been tested with <strong>Yeoman 1.1.2</strong>, <strong>Bower 1.2.8</strong>, <strong>grunt-cli v0.1.11</strong>, and <strong>grunt v0.4.2</strong>. If you are running into issues with a newer version, we would like to hear about it. Please feel free to open up an issue on our <a href="https://github.com/yeoman/yeoman.io/issues">tracker</a>.</p>

</div>

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="install-generators.html">Go to the next step &raquo;</a>
</p>
