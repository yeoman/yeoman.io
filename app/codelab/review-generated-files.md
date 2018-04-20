---
layout: codelab
title: 'Step 4: Review the Yeoman-generated app'
markdown: 1
sidebar: sidebars/codelab.md
---

Open up your `mytodo` directory to take a look at what was actually scaffolded. It'll look like this:

![](/assets/img/codelab/04_tree_view.png)

In *mytodo*, we have:

`src`: a parent directory for our web application

  * `app`: our React + Redux code
  * `index.html`: the base html file
  * `index.js`: the entry point for our TodoMVC app

`conf`: a parent directory for our configuration files for thrid-party tools (Browsersync, Webpack, Gulp, Karma)

`gulp_tasks` and `gulpfile.js`: our builder tasks

`.babelrc`, `package.json,` and `node_modules`: configuration and dependencies required

`.gitattributes` and `.gitignore`: configuration for git


<div class="note tip">

  <h2>Create the first commit</h2>

  <p>After generation and installation you should have a fresh git repository already initialzing.</p>
  <p>You can safely add a commit to save the current state by these commands.</p>

<pre>
<code class="language-sh">git add --all && git commit -m 'First commit'</code>
</pre>

</div>


<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="preview-inbrowser.html">Go to the next step &raquo;</a>
</p>
