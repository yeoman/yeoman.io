---
layout: codelab
title: 'Step 2: Install a Yeoman generator'
markdown: 1
---

In a traditional web development workflow, you would need to spend a lot of time setting up boilerplate code for your webapp, downloading dependencies, and manually creating your web folder structure. Yeoman generators to the rescue! Let's install a generator for FountainJS projects.

## Install a generator

You can install Yeoman generators using the [npm](https://www.npmjs.com/) command and there are over [3500+ generators](/generators/) now available, many of which have been written by the open-source community.

Install [generator-fountain-webapp](https://www.npmjs.com/package/generator-fountain-webapp) using this command:

```sh
npm install --global generator-fountain-webapp
```

This will start to install the Node packages required for the generator.

<div class="note important">

  <h2>Errors?</h2>

  <p>If you see permission or access errors, such as <code>EPERM</code> or <code>EACCESS</code>, do not use <code>sudo</code> as a work-around. You can consult <a href="https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md">this guide</a> for a more robust solution.</p>

</div>

<hr>

<div class="note tip">

  <p>Along with using <code>npm install</code> directly, you can search for generators via the Yeoman interactive menu. Run <code>yo</code> and select <b>Install a generator</b> to search for published generators.</p>

  <img src="/assets/img/codelab/02_yo_interactive.png">

</div>


<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="scaffold-app.html">Go to the next step &raquo;</a>
</p>
