---
layout: default
markdown: 1
social_text: "Let's Scaffold A Web App With @Yeoman!"
social_url: http://yeoman.io/codelab.html
sidebar: sidebars/codelab.html
---

# Step 9: Get ready for production

Ready to show your beautiful todo app to the world? Let’s try to build a production-ready version of it which we can ship.

<div class="mast-holder">
  <img src="/assets/img/yeoman-009.png">
</div>

## Optimize files for production

To create a production version of our application, we’ll want to:

* lint our code,
* run our tests,
* concatenate and minify our scripts and styles to save on those network requests,
* optimize images if we were using any,
* compile the output of any preprocessors we’re using, and
* generally make our application really lean. 

Phew! Amazingly we can achieve all of this just by running:

```js
$ grunt
```

This command will go through the Grunt tasks and configuration Yeoman has set up for you in *Gruntfile.js* and create a version of your app we can ship. Give it a minute and you should be presented with a completed build and a report of how long the build took to complete and where time was spent:

![](/assets/img/codelab/image_35.png)

Your lean, production-ready application is now available in a ***dist*** folder in the root of your ***mytodo*** project. These are the files that you can put on your server using FTP or any other deployment service.

## Build and preview the production-ready app

Want to preview your production app locally? That’s just another simple grunt command:

```js
$ grunt serve:dist
```

It will build your project and launch a local web server. Yo Hero!

![](/assets/img/codelab/image_36.png)

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="local-storage.html">Go to the next step &raquo;</a>
</p>
