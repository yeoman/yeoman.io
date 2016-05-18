---
layout: codelab
title: 'Step 3: Use a generator to scaffold out your app'
markdown: 1
---

We've used the word "scaffold" a few times but you might not know what that means. Scaffolding, in the Yeoman sense of the word, means generating files for your web app based on your specific configuration requests. In this step, you'll see how Yeoman can generate files specifically for your favorite library or framework &mdash; with options for using other external libraries like Webpack, Babel and SASS &mdash; with minimal effort.

## Create a project folder

Create a `mytodo` folder for all your codelab work:

```sh
mkdir mytodo && cd mytodo
```

This folder is where the generator will place your scaffolded project files.

## Access generators via the Yeoman menu

Run `yo` again to see your generators:

```sh
yo
```

If you have a few generators installed, you'll be able to interactively choose from them. Highlight **Fountain Webapp**. Hit **enter** to run the generator.

![](/assets/img/codelab/03_yo_interactive.png)

<div class="note tip">

  <h2>Use generators directly</h2>

  <p>As you become more familiar with <code>yo</code>, you can run generators directly without the use of the interactive menu, like so:</p>

<pre>
<code class="language-sh">yo fountain-webapp</code>
</pre>

</div>

<h2 id="configure">Configure your generator</h2>

Some generators will also provide optional settings to customize your app with common developer libraries to speed up the initial setup of your development environment.

The FountainJS generator provides some choices to use your favorite:
* framework ([React](https://facebook.github.io/react/), [Angular2](https://angular.io/) or [Angular1](https://angularjs.org/))
* module management ([Wepack](https://webpack.github.io/), [SystemJS](https://github.com/systemjs/systemjs) or [None with Bower](http://bower.io/))
* javascript preprocessor ([Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/) or none)
* css preprocessor ([SASS](http://sass-lang.com/), [LESS](http://lesscss.org/) or none)
* three sample app (a landing page, hello world, and TodoMVC)

For this codelab, we will use **React**, **Wepack**, **Babel**, **SASS** and the **Redux TodoMVC** sample.

![](/assets/img/codelab/03_yo_run_generator.png)

Select successively these options with the arrows keys and the **enter** and watch the magic happen.

![](/assets/img/codelab/03_yo_select.png)

Yeoman will automatically scaffold out your app, grab your dependencies. After a few minutes we should be ready to go onto the next step.

![](/assets/img/codelab/03_yo_end.png)

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="review-generated-files.html">Go to the next step &raquo;</a>
</p>
