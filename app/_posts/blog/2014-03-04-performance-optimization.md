---
layout: blog
title: Grunt And Gulp Tasks For Performance Optimization
---

![](/assets/img/blog/tasks.jpg)

Delays in performance have the potential to impact user [engagement](https://twitter.com/igrigorik/status/300226402496704512), [experience](http://www.smashingmagazine.com/2013/06/10/pinterest-paint-performance-case-study/) and [revenue](https://speakerdeck.com/lara/design-for-performance).
Thankfully, Google's 'Make The Web Faster' team recommend a set of best-practice [rules](https://developers.google.com/speed/docs/insights/rules) for keeping your pages lean, fast and smooth. These include minifying resources like CSS and JavaScript, optimizing images, inlining and removing unused styles and so on.

If you have complete control over your server, an excellent [PageSpeed](https://developers.google.com/speed/pagespeed) [Module](https://developers.google.com/speed/pagespeed/module) for [Apache](https://developers.google.com/speed/pagespeed/module/download) and [Nginx](https://developers.google.com/speed/pagespeed/module/build_ngx_pagespeed_from_source) exists with filters for many of these tasks. If not however, or you feel the module isn’t quite for you, a number of build-tasks exist for tools you’re probably already using to fill in the gaps with more granular control.

The below represent [Grunt](http://gruntjs.com) and [Gulp](http://gulpjs.com) tasks the Yeoman team regularly use in our projects. We’ve tried our best to keep this list focused and exclude previous suggestions which no-longer offer as much value, but there’s plenty here to help you keep your pages and their resources as small as possible.

<div class="note">
<strong>Note:</strong> Yeoman's <a href="http://github.com/yeoman/generator-webapp">Grunt</a> and <a href="http://github.com/yeoman/generator-gulp-webapp">Gulp</a> webapp generators include tasks for optimizing images and concatenating and minifying HTML/CSS/JS. We feel that this provides a healthy baseline, but this post will cover tasks which go further.
</div>

## Compress & optimize images

The average web page is now over [1.5MB](http://httparchive.org/interesting.php?a=All&l=Aug%2015%202013#bytesperpage) in size, with images responsible for the bulk of this. We aim to keep our image sizes as lean as possible to reduce the time it takes for a user to wait for that resource to load.

With the right balance of compression and formatting it's possible to still ship images as a part of your page whilst minimizing load time as much as possible. This is really important for users on mobile with limited data plans or slow connections.

#### Grunt

* [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* [grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim) (OSX only)

Why two tasks? Well, here’s an excellent [breakdown](http://jamiemason.github.io/ImageOptim-CLI) of differences between the two. Choose the one that is most suitable for you.

#### Gulp

* [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)

<div class="note"><strong>Note:</strong> Etsy found that just by <a href="http://programming.oreilly.com/2014/01/web-performance-is-user-experience.html">adding</a> 160KB of images to their pages on mobile, their bounce rate increased by 12%. If you can't cut down on the images used in your pages, at least run them through an optimizer.</div>


## Generate responsive images for the `<picture>` element

If you have a responsive site which is visually flexible on multiple devices, you'll want a strategy to make images flexible too.

Serving unnecessarily large images to the browser can [impact](http://timkadlec.com/2013/11/why-we-need-responsive-images-part-deux/) both rendering and load performance, but these aren't the only metrics that can suffer when large images are shipped to the browser.

This is one reason we need responsive images, and it's great to see [srcset](http://blog.chromium.org/2014/02/chrome-34-responsive-images-and_9316.html?m=1) - hopefully leading to a full implementation of `<picture>` - is already in Chrome Beta.

There are a number of Grunt tasks available that can help generate multi-resolution images as part of your build process.

#### Grunt

* [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images) - use this along with [Imager.js](https://github.com/BBC-News/Imager.js/), `<picture>` or the picturefill [polyfill](https://github.com/jansepar/picturefill).
* [grunt-clowncar](https://npmjs.org/package/grunt-clowncar)

In addition, if you need to just resize/normalize images that are large in dimension, you can use [grunt-image-resize](https://www.npmjs.org/package/grunt-image-resize).

<div class="note">
<strong>Note:</strong> Tim Kaldec's research into responsive images has <a href="http://timkadlec.com/2013/06/why-we-need-responsive-images/">suggested</a> a responsive images strategy could lead to savings of up to 72% on image weight. Whilst it is still early to opt for a spec-compatible, cross-browser approach to responsive images the BBC and Guardian have been using Imager.js for this successfully.
</div>


## Minify SVG images

SVG files created with editors usually contain a large quantity of redundant information (metadata, comments, hidden elements and so forth). This content can be safely removed or converted to a more minimal form without imacting the final SVG that's being rendered.

#### Grunt

* [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin)

#### Gulp

* [gulp-svgmin](https://www.npmjs.org/package/gulp-svgmin)

## Generate spritesheets

#### Grunt

* [grunt-spritesmith](https://www.npmjs.org/package/grunt-spritesmith)

#### Gulp

* [gulp-sprite](https://www.npmjs.org/package/gulp-sprite)

## Convert images to WebP

WebP is a recent image format that offers lossless and lossy compression for images on the web. WebP lossless images are up to 26% smaller in size compared to PNGs and WebP lossy images are 25-34% smaller in size compared to JPEGs. That's quite a saving and thankfully there exist tasks for encoding to WebP for both Grunt and Gulp.

#### Grunt

* [grunt-webp](https://github.com/somerandomdude/grunt-webp)

#### Gulp

* [gulp-webp](https://github.com/sindresorhus/gulp-webp)


<div class="note">
<strong>Note:</strong> This <a href="http://www.webpagetest.org/video/compare.php?tests=130125_6N_KZA%2C130125_NH_KZ8&thumbSize=200&ival=100&end=full">test</a> from WebPageTest suggests that compared to JPEG, WebP encoded images complete loading much quicker due to their smaller filesizes. The Chrome Web Store <a href="http://www.igvita.com/2013/03/07/faster-smaller-and-more-beautiful-web-with-webp/">found</a> that switching to WebP saw a 30% average saving on bytes, saving them several terabytes of bandwidth a day.
</div>


## Build SVG sprites with support for various browsers

### Grunt

* [grunticon](https://github.com/filamentgroup/grunticon)

### Gulp

* [gulp-svgmin](https://www.npmjs.org/package/gulp-svgmin)

We consider inlining images using Data URIs to now be an anti-pattern given their [poor](http://www.mobify.com/blog/data-uris-are-slow-on-mobile/) performance on mobile.

## Minify CSS

Minification eliminates unnecessary space, line breaks, indendation and characters in your files, which are generally unnecessary in production. Compacting down your HTML, CSS and JS can improve on parsing, execution and doanload times. For CSS specifically, we recommend:

#### Grunt

* [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)

#### Gulp

* [gulp-cssmin](https://www.npmjs.org/package/gulp-cssmin)

## Remove unused CSS

In projects using CSS frameworks like Bootstrap, Foundation and so forth you typically don’t use the entire kitchen-sink of styles available. Rather than shipping the full framework to production, use UnCSS to remove unused styles across your pages. Some developers have seen anything up to 85% savings in stylesheet filesize.

#### Grunt

* [grunt-uncss](https://github.com/addyosmani/grunt-uncss)

#### Gulp
* [gulp-uncss](https://github.com/ben-eb/gulp-uncss)

<div class="note">
    <strong>Note:</strong> A question developers regularly ask is whether UnCSS, or the process of removing unused CSS can also work with styles injected into the page dynamically. The answer is 'yes'. UnCSS works in tandem with PhantomJS in order to make this happen. Devs have seen anything between <a href="https://twitter.com/efexen/status/438672726996574209">10</a>-<a href="https://twitter.com/thisbetom/status/432575411138998273">120KB</a> in savings on a typical Bootstrap page and UnCSS also works wel with other frameworks.
</div>

## Inline CSS

If the external CSS resources for a particular page are small, you can inline those directly in your markup to save on additional requests. Inlining small CSS in this way allows the browser to proceed with rendering the page.

#### Grunt

* [grunt-inline-css](https://github.com/jgallen23/grunt-inline-css)

#### Gulp

* [gulp-inline-css](https://www.npmjs.org/package/gulp-inline-css/)

## Combine media queries

This isn't a PageSpeed recommendation, but allows you to combine matching media queries into a single media query definition. We've found it useful for handling CSS generated by preprocessors which may use nested media queries.


#### Grunt

* [grunt-combine-media-queries](https://npmjs.org/package/grunt-combine-media-queries)

#### Gulp

* [gulp-combine-media-queries](https://www.npmjs.org/package/gulp-combine-media-queries)

## JavaScript

### Minify, compress JS

#### Grunt

* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-closure-compiler](https://github.com/gmarty/grunt-closure-compiler)

#### Gulp

* [gulp-uglify](https://github.com/terinjokes/gulp-uglify)
* [gulp-closure-compiler](https://github.com/sindresorhus/gulp-closure-compiler)


## RequireJS (optimization via r.js)

#### Grunt

* [grunt-requirejs](https://github.com/asciidisco/grunt-requirejs)

#### Gulp

* [RequireJS](http://requirejs.org)

## Minify HTML

#### Grunt

* [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)

#### Gulp

* [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)

## Simple concatenation

#### Grunt

* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)

#### Gulp

* [gulp-concat](https://www.npmjs.org/package/gulp-concat)


## General compression for files/folders

#### Grunt

 * [grunt-contrib-compress](https://www.npmjs.org/package/grunt-contrib-compress)

#### Gulp

* [gulp-zip](https://github.com/sindresorhus/gulp-zip)

## Zopfli compression

The Zopfli Compression Algorithm is an open-source compression library that generates output typically 3–8% smaller compared to zlib at maximum compression. It is best suited for apps where data is compressed just once and then sent over the network lots of times.

#### Grunt

* [grunt-zopfli](https://github.com/mathiasbynens/grunt-zopfli)

#### Gulp

* [gulp-zopfli](https://www.npmjs.org/package/gulp-zopfli)

<div class="note"><strong>Note:</strong> When Google Fonts  switched to using Zopfli fonts were ~6% smaller on average, and in some cases up to 15% smaller. According to <a href="https://plus.google.com/+IlyaGrigorik/posts/1sxencNkbNS">Ilya Grigorik</a>, for the case of Open Sans it was more than 10% smaller, translating to faster rendering and loading times. Zopfli images can however take longer to decode than JPGs so measure the metrics that matter to you when deciding whether to use WebP.</div>


## Inline Critical path CSS

The critical path represents the code and resources needed to render the "above-the-fold" content in the page - i.e what your users will first see when they load up your page. PageSpeed recommends inlining your critical path CSS for improved performance. Whilst tools like [mod_pagespeed](https://code.google.com/p/modpagespeed/) are highly efficient at achieving this, it’s more difficult to optimize for the critical path with other tooling.

You could probably use PhantomJS along with the above the fold scripts from [speedreport](https://github.com/r3b/speedreport/) to get an idea of what CSS is above the fold and can then work on optimizing this manually.

<div class="note"><strong>Note:</strong> Paul Kinlan wrote a <a href="http://addyosmani.com/blog/detecting-critical-above-the-fold-css-with-paul-kinlan-video/">bookmarklet</a> for estimating the above-the-fold CSS for a page which is also worth checking out.</div>


## Asset pipeline (auto-handle all optimizations)

On the ‘tools to keep an eye on’ list is [AssetGraph](https://github.com/assetgraph/assetgraph).

AssetGraph looks at projects as a set of graph problems where the nodes are considered assets (HTML, CSS, Images, JS) and edges, the relationships between them (image tags, anchor tag, script tags etc).

As AssetGraph can determine how project assets relate to each other it can perform many of the common performance optimizations developers may want to achieve on their own automatically. This works particularly well on smaller projects and support for larger projects is being worked on.

#### Grunt
* [grunt-reduce](https://github.com/Munter/grunt-reduce)

#### Gulp

Gulp users should just use AssetGraph directly.



## Benchmarking

The following benchmarking tasks are useful to integrate as a part of Continuous Integration. Although the following are currently only available for Grunt, you can use [gulp-grunt](https://npmjs.org/package/gulp-grunt) to run Grunt tasks from Gulp. We recommend:

* [grunt-pagespeed](https://npmjs.org/package/grunt-pagespeed) - fantastic for automating checking your PageSpeed score as a part of CI.
* [grunt-topcoat-telemetry](https://github.com/topcoat/topcoat-grunt-telemetry) - get smoothness, load time and other stats from Telemetry as part of CI. This could help you set up a performance benchmarking dashboard similar to the one used by [TopCoat](http://bench.topcoat.io/)
* [grunt-wpt](https://npmjs.org/package/grunt-wpt) - CI for WebPageTest scores
* [grunt-phantomas](https://www.npmjs.org/package/grunt-phantomas) - response times for requests, responses, time to first image/CSS/JS, onDOMReady and more.

## Framework Optimization


#### Grunt

* [grunt-ngmin](https://npmjs.org/package/grunt-ngmin)
* [grunt-react](https://npmjs.org/package/grunt-react)
* [grunt-vulcanize](https://npmjs.org/package/grunt-vulcanize) - excellent for concatenating and flatening Web Components.

#### Gulp

* [gulp-ngmin](https://github.com/sindresorhus/gulp-ngmin)
* [gulp-react](https://github.com/sindresorhus/gulp-react)
* [gulp-vulcanize](https://github.com/sindresorhus/gulp-vulcanize)

#### Misch

* [gulp-google-cdn](https://github.com/sindresorhus/gulp-google-cdn)
* [gulp-size](https://github.com/sindresorhus/gulp-size)

## Conclusions

Delays in performance have the potential to impact user engagement, experience and revenue. Take time to experiment with the tasks available for performance optimization, find out what practical gains they can offer to your projects.

Visitors to your page will be happier as a result of a snappier experience and a faster web is better for all.

~ Addy Osmani

*With thanks to Sindre Sorhus, Pascal Hartig and Stephen Sawchuk for their review*
