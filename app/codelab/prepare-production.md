---
layout: codelab
markdown: 1
---

# Get ready for production

Now that we have a functional app, let’s try to test and build a production ready version of it which we can ship.

## Building files optimized for production

<div class="mast-holder">
  <img src="/assets/img/yeoman-009.png" class="mast"/>
</div>

Ready to show your beautiful todo app to the world? Let’s try to create a production version of our application. We’ll want to lint our code, run our tests, concatenate and minify our scripts and styles to save on those network requests, optimize images if we were using any, compile the output of any preprocessors we’re using and in general make our application really lean. Phew!

Amazingly we can achieve all of this just by running:

```js
$ grunt
```

This command will go through the Grunt tasks and configuration Yeoman has set up for you and create a version of your app we can ship. Give it a minute and you should be presented with a completed build and a report of how long the build took to complete and where time was spent:

![](/assets/img/codelab/image_35.png)

Your lean, production ready application is now available in a ‘dist’ folder in the root of your ‘mytodo’ project.

Want to preview your production app locally? That’s just another simple grunt command:

```js
$ grunt serve:dist
```

It will build your project and launch a local web server. Yo Hero!

![](/assets/img/codelab/image_36.png)

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="keep-going.html">You're done! Keep going &raquo;</a>
</p>
