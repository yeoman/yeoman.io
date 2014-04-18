---
layout: codelab
markdown: 1
---

# Use a generator to scaffold out your app

## Accessing the Yeoman menu

Once a generator has been installed it can be accessed via the Yeoman interactive menu:

```js
$ yo
```

![](/assets/img/codelab/image_7.png)

<strong>But wait!</strong> Don’t run a generator in any old place on your computer. Make a project directory where the generator will place your scaffolded project files.

Highlight **Get me out of here!** to exit the menu.

## Create a project folder

To create a **mytodo** folder for all your code lab work:

```js
$ mkdir mytodo
$ cd mytodo
```

## Scaffold out your AngularJS app

Now run `yo`:

```
$ yo
```

And highlight **Run the Angular generator**. Hit enter to run the generator.

## Advanced scaffolding

As you become more familiar with `yo`, you might want to run generators directly without the use of the interactive menu, like so:

```js
$ yo angular
```
## Additional settings

Some generators will also provide optional settings to customize your app with common developer libraries and speed up the initial setup of your development environment.

The AngularJS generator provides options to include use [Sass](http://sass-lang.com/) (with Compass) and/or [Bootstrap](http://getbootstrap.com/). Enter ‘n’ and ‘y’ respectively to these options.

![](/assets/img/codelab/image_8.png)

Next you are prompted to select what Angular modules you would like to include as well. Angular modules are self-contained JavaScript files with helpful functionality. For example, the ngResource module (angular-resource.js) provides interaction support with RESTful services.

You can deselect options using the spacebar. Let’s roll with the defaults. (So if you have been playing around with the spacebar, make sure that all the modules are marked as green.)

![](/assets/img/codelab/image_9.png)

Okay, hit enter. Yeoman will automatically scaffold out your app, grab your dependencies, and pull in a few useful Grunt tasks for your workflow. After a few minutes of we should be ready.

![](/assets/img/codelab/image_10.png)

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="review-generated-files.html">Go to the next step &raquo;</a>
</p>
