---
layout: codelab
title: 'Step 5: Preview your app in the browser'
markdown: 1
---

To preview your web app in your favourite web browser, you don't have to do anything special to set up a local web server on your computer &mdash; it's part of Yeoman.

## Start the server

Run a npm script to create a local, Node-based http server on [localhost:3000](http://localhost:3000) (or [127.0.0.1:3000](http://127.0.0.1:3000) for some configurations) by typing:

```sh
npm run serve
```

Open a new tab in your web browser on [localhost:3000](http://localhost:3000):

![](/assets/img/codelab/05_run_preview.png)

## Stop the server

If you ever need to stop the server, use the <span class="keyboard">Ctrl</span>+<span class="keyboard">C</span> keyboard command to quit your current CLI process.

Note: You can't have more than one http server running on the same port (default 3000).

## Watch your files

Open up your favorite text editor and start making changes. Each save will automatically force a browser refresh so you don’t have to do this yourself. This is called *live reloading* and it’s a nice way of getting a real-time view of your application state.

Live reloading is made available to your application through a set of Gulp tasks configured in `gulpfile.js` and [Browsersync](https://www.browsersync.io/) configured in `gulp_tasks/browsersync.js`; it watches for changes to your files and automatically reloads them if it detects a change.

Below, we edited *Header.js* in the *src/app/components* directory. Thanks to live reload we go from this:

![](/assets/img/codelab/05_before_live_reload.png)

To this instantly:

![](/assets/img/codelab/05_after_live_reload.png)

<div class="note tip">

  <h2>Don't forgot the test!</h2>

  <p>You have a TodoMVC app tested and you change the title header. You should edit test in `mytodo/src/app/components/Header.spec.js` **or** revert the change for demonstrate livereloading</p>

</div>

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="run-unit-tests.html">Go to the next step &raquo;</a>
</p>
