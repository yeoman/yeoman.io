---
layout: codelab
markdown: 1
---

# Install a Yeoman generator

In a traditional web development workflow, you would need to spend a lot of time setting up boilerplate code for your webapp, downloading dependencies, and manually creating your web folder structure. Yeoman generators to the rescue! Let's install a generator for AngularJS projects.

## Use the Yeoman interactive menu

Yeoman comes with a handy interactive menu. To access this menu run:

```js
$ yo
```
Use your keyboard’s up / down arrow keys to navigate the menu:

![](/assets/img/codelab/image_4.png)

## Install an AngularJS generator

In the Yeoman menu, hit enter when **Install a generator** is highlighted.  

Since we're writing our Todo app in Angular, let’s search for an Angular generator to install.

A search for "angular" will find many generators contributed by various members of the Yeoman open source community. In this instance we want to install the **generator-angular** generator.

![](/assets/img/codelab/image_5.png)

With **generator-angular** selected, hit enter to start installing.  This will start to install the Node packages required for the generator.  

<div class="note tip">

  <h2>Install generators using 'yo'</h2>

  <p>Alternatively, if you already know the exact name of the generator you want to use, the generator can be installed directly using npm as follows:</p>

<pre>
$ npm install --global generator-angular
</pre>

</div>

<div class="note important">

  <h2>Errors?</h2>

  <p>If you see permission or access errors, you will need to install the generator using <code>sudo</code>, like so:</p>

<pre>
$ sudo npm install --global generator-angular
</pre>

</div>

<div class="note important">
  
  <h2>Versions of generator-angular that this codelab works with</h2>

  <p>Technology changes quickly! This tutorial has been tested with <strong>generator-angular 0.7.1</strong>. You can check which version you are using by running <code>yo</code> at the command line after you have installed Yeoman and the Angular generator.</p>

  <p>If you are running into issues with a newer version, we would like to hear about it. Please open up an issue on our <a href="https://github.com/yeoman/yeoman.io/issues">tracker</a>.</p>

  <p>Otherwise, you can always install the same version of the generator we are using by running this command instead:</p>

<pre>
npm install --global generator-angular@0.7.1
</pre>

</div>

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="scaffold-app.html">Go to the next step &raquo;</a>
</p>
