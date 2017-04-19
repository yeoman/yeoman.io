---
layout: codelab
title: 'Step 1: Set up your dev environment'
markdown: 1
---

<p class="mast-holder">
  <img src="/assets/img/yeoman-004.png">
</p>

Most of your interactions with Yeoman will be through the command line. Run commands in the Terminal app if you’re on Mac, your shell in Linux, or [`cmder`](http://cmder.net/) *(preferably)* / PowerShell / `cmd.exe` if you are on Windows.

## Install prerequisites

Before installing the Fountain Webapp Generator, you will need the following:
* Node.js v6.0.0 or higher
* NPM v3.0.0 or higher (which comes bundled with Node)
* Git

You can check if you have Node and npm installed by typing:

```sh
node --version && npm --version
```

If you need to upgrade or install Node, the easiest way is to use an installer for your platform. Download the *.msi* for Windows or *.pkg* for Mac from the [NodeJS website](https://nodejs.org/).

The [npm](https://www.npmjs.com/) package manager is bundled with Node, although you might need to update it. Some Node versions ship with rather old versions of npm. You can update npm using this command:

```sh
npm install --global npm@latest
```

You can check if you have Git installed by typing:

```sh
git --version
```
If you don't have Git, grab the installers from the [git website](https://git-scm.com/).

## Install the Yeoman toolset

Once you’ve got Node installed, install the Yeoman toolset:

```sh
npm install --global yo
```

<div class="note important">

  <h2>Errors?</h2>

  <p>If you see permission or access errors, such as <code>EPERM</code> or <code>EACCESS</code>, do not use <code>sudo</code> as a work-around. You can consult <a href="https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md">this guide</a> for a more robust solution.</p>

</div>

## Confirm installation

It is a good idea to check that everything is installed as expected by running commonly used Yeoman commands like `yo` with the `--version` flag as follows:

```sh
yo --version
```

<div class="note important">

  <h2>Versions of the CLI tools that this codelab works with</h2>

  <p>Technology changes quickly! This tutorial has been tested with <strong>yo 1.8.4</strong>. If you are running into issues with a newer version, we would like to hear about it. Please open up an issue on our <a href="https://github.com/yeoman/yo/issues">tracker</a>.</p>

</div>

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="install-generators.html">Go to the next step &raquo;</a>
</p>
