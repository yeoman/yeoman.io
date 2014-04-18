---
layout: codelab
markdown: 1
---

# Preview your new app in the browser

We can do this by running the Grunt server:

```js
$ grunt serve
```

Running `grunt serve` will create a local, Node-based http server on [localhost:9000](http://localhost:9000) (or 127.0.0.1:9000 for some configurations). 

Your web browser will launch your newly scaffolded application in a new tab:

![](/assets/img/codelab/image_12.png)

## Live reload

We can actually open up our favorite text editor and start making changes. Each save will automatically force a browser refresh so you don’t have to do this yourself. This is called *live reloading* and it’s a nice way of getting a real-time view of your application state. Live reloading is made available to your application through a set of Grunt tasks; it watches for changes to your files and automatically reloads them if it detects a change.

In this case, we’re editing a template file called main.html in the views directory. Thanks to live reload we go from this:

![](/assets/img/codelab/image_13.png)

to this instantly:

![](/assets/img/codelab/image_14.png)

<p class="codelab-paging">
  <a href="../codelab.html#toc">&laquo; Return to overview</a>
  or
  <a href="write-app.html">Go to the next step &raquo;</a>
</p>
