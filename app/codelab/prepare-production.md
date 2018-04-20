---
layout: codelab
title: 'Step 8: Get ready for production'
markdown: 1
sidebar: sidebars/codelab.md
---

Ready to show your beautiful todo app to the world? Let’s try to build a production-ready version of it which we can ship.

<div class="mast-holder">
  <img src="/assets/img/yeoman-009.png">
</div>

## Optimize files for production

To create a production version of our application, we’ll want to:

* lint our code,
* concatenate and minify our scripts and styles to save on those network requests,
* compile the output of any preprocessors we’re using, and
* generally make our application really lean.

Phew! Amazingly we can achieve all of this just by running:

```sh
npm run build
```

Your lean, production-ready application is now available in a `dist` folder in the root of your `mytodo` project. These are the files that you can put on your server using FTP or any other deployment service.

## Build and preview the production-ready app

Want to preview your production app locally? That’s just another simple npm script:

```sh
npm run serve:dist
```

It will build your project and launch a local web server. Yo Hero!

![](/assets/img/codelab/08_serve_dist.png)

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="keep-going.html">You're done! Keep going &raquo;</a>
</p>
