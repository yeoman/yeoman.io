---
layout: codelab
markdown: 1
---

# Install a Yeoman generator

In a traditional web development workflow, you would need to spend a lot of time setting up boilerplate code for your webapp, downloading dependencies, and manually creating your web folder structure. Yeoman generators to the rescue! Generators do the hard work for you by scaffolding out your project. 

Yeoman comes with a handy interactive menu, to access this menu run:

```js
$ yo
```

![](/assets/img/codelab/image_4.png)

Use your keyboard’s up / down arrow keys to navigate the menu and hit enter when **Install a generator** is highlighted.  

## Install an AngularJS generator

Since we're writing our Todo app in AngularJS, let’s search for an AngularJS generator to install.

A search for "angular" will find many generators contributed by various members of the Yeoman open source community. In this instance we want to install the **generator-angular** generator.

![](/assets/img/codelab/image_5.png)

With **generator-angular** selected, hit enter to start installing.  This will start to install the Node packages required for the generator.  

Alternatively, if you already know the name of the generator you want to use, the generator can be installed directly using npm as follows:

```js
$ npm install -g generator-angular
```

See below for a preview:

![](/assets/img/codelab/image_6.png)

<div class="note">
  
  <p><strong>Versions of generator-angular that this codelab works with</strong></p>

  <p>Technology changes quickly! This tutorial has been tested with <strong>generator-angular 0.7.1</strong>. You can check which version you are using by running &quot;yo&quot; at the command-line after you have installed Yeoman and the Angular generator.</p>

  <p>If you are running into issues with a newer version, we would like to hear about it. Please feel free to open up an issue on our <a href="https://github.com/yeoman/yeoman.io/issues">tracker</a>.</p>

  <p>Otherwise, you can always install the same version of the generator we are using by running this command instead:</p>

  <pre>
  npm install -g generator-angular@0.7.1
  </pre>

</div>

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="scaffold-app.html">Go to the next step &raquo;</a>
</p>
