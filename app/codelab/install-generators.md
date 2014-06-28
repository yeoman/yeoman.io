---
layout: default
markdown: 1
social_text: "Let's Scaffold A Web App With @Yeoman!"
social_url: http://yeoman.io/codelab.html
sidebar: sidebars/codelab.html
---

# Step 2: Install a Yeoman generator

In a traditional web development workflow, you would need to spend a lot of time setting up boilerplate code for your webapp, downloading dependencies, and manually creating your web folder structure. Yeoman generators to the rescue! Let's install a generator for AngularJS projects.

## Install an AngularJS generator

You can install Yeoman generators using the [npm](http://npmjs.org) command and there are over [800 generators](http://yeoman.io/generators/community.html) now available, many of which have been written by the open-source community.

Install [generator-angular](https://www.npmjs.org/package/generator-angular) using this command: 

```html
npm install --global generator-angular@0.9.0-1
```

This will start to install the Node packages required for the generator. Using `@0.9.0-1` will request a specific version of the generator.

<div class="note important">

  <h2>Errors?</h2>

  <p>If you see permission or access errors, you will need to install the generator using <code>sudo</code>, like so:</p>

<pre>
$ sudo npm install --global generator-angular@0.9.0-1
</pre>

</div>

<hr>

<div class="note tip">

  <p>Along with using <code>npm install</code> directly, you can search for generators via the Yeoman interactive menu. Run <code>yo</code> and select <b>Install a generator</b> to search for published generators.</p>

  <img src="/assets/img/codelab/image_4.png">

</div>


<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="scaffold-app.html">Go to the next step &raquo;</a>
</p>
