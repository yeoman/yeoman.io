---
layout: codelab
markdown: 1
---

# Preview your app in the browser

To preview your web app in your favourite web browser, you don't have to do anything special to set up a local web server on your computer &mdash; it's part of Yeoman.

## Start the server

Run a Grunt task to create a local, Node-based http server on [localhost:9000](http://localhost:9000) (or [127.0.0.1:9000](http://127.0.0.1:9000) for some configurations) by typing:

```
$ grunt serve
```

Your web browser will launch your newly scaffolded application in a new tab:

![](/assets/img/codelab/image_12.png)

## Stop the server

If you ever need to stop the server, use the <span class="keyboard">Ctrl</span>+<span class="keyboard">C</span> keyboard command to quit your current CLI process.

Note: You can't have more than one http server running on the same port (default 9000).

## Watch your files

Open up your favourite text editor and start making changes. Each save will automatically force a browser refresh so you don’t have to do this yourself. This is called *live reloading* and it’s a nice way of getting a real-time view of your application state. 

Live reloading is made available to your application through a set of Grunt tasks configured in ***Gruntfile.js***; it watches for changes to your files and automatically reloads them if it detects a change.

Below, we edited *main.html* in the *views* directory. Thanks to live reload we go from this:

![](/assets/img/codelab/image_13.png)

To this instantly:

![](/assets/img/codelab/image_14.png)

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="write-app.html">Go to the next step &raquo;</a>
</p>
