---
layout: blog
title: Exploring A Generator For Gulp.js
---

Work has begun on our [first](https://github.com/yeoman/generator-gulp-webapp) official Yeoman generator for [Gulp.js](http://gulpjs.com).

<img src="https://i.imgur.com/TXdznhb.png" style="width:150px"/>

Gulp is a [streaming](https://github.com/substack/stream-handbook) build system which focuses on code over configuration. By harnessing the power of Node streams, it enables faster build times by avoiding the need to write temporary files to disk. You simply put in a file and get a file out.

The Yeoman team don't have any plans on dropping our support for [Grunt](http://gruntjs.com) at all. On the contrary, we feel that both Grunt and Gulp can [happily co-exist](https://github.com/yeoman/yeoman/issues/1232) and hope to support both communities with some automation tooling as best we can.


Our Gulp generator based on our Grunt generator for [web apps](https://github.com/yeoman/generator-webapp) and you can follow along our progress at [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp). It's still early days, but our [gulpfile](https://github.com/yeoman/generator-gulp-webapp/blob/master/app/templates/gulpfile.js) already contains early work for handling HTML, CSS, JS and images. See the samples below for a peek at what we're doing:

Require Gulp and load our Gulp plugins:

```
var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugin')({camelize: true});
var server = $.tinyLr();
```

Styles:

```
gulp.task('styles', function () {
    return gulp.src('app/styles/main.scss')
        .pipe($.sass({
          style: 'expanded',
          loadPath: ['app/bower_components']
        }))
        .pipe($.livereload(server))
        .pipe($.autoprefixer('last 1 version'))
        .pipe($.csso())
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size());
});
```

Scripts:

```
gulp.task('scripts', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('default'))
        .pipe($.concat('main.js'))
        .pipe($.livereload(server))
        .pipe($.uglify())
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.size());
});
```

Images:

```
gulp.task('images', function () {
    return gulp.src('app/images/**/*')
        .pipe($.livereload(server))
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});
```

Watch:

```
gulp.task('watch', function () {
    // Listen on port 35729
    server.listen(35729, function (err) {
        if (err) {
            return console.error(err);
        };

        // Watch .html files
        gulp.watch('app/*.html');

        // Watch .scss files
        gulp.watch('app/styles/**/*.scss', ['styles']);

        // Watch .js files
        gulp.watch('app/scripts/**/*.js', ['scripts']);

        // Watch image files
        gulp.watch('app/images/**/*', ['images']);
    });
});
```

Clean:

```
gulp.task('clean', function () {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false}).pipe($.clean());
});
```

Build:

```
// Build
gulp.task('build', ['html', 'styles', 'scripts', 'images']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
```

At this time, we welcome community contributions which help us fill in the feature gap in our new generator. Feel free to watch the project repo. We'll let you know as soon as it's finished cooking.

## Further reading

The below are some of the recent articles on Gulp we've enjoyed reading:

* [My First Gulp Adventure](http://ponyfoo.com/articles/my-first-gulp-adventure)
* [Gulp, Grunt, Whatever](http://ponyfoo.com/articles/gulp-grunt-whatever)
* [No Need To Grunt, Take A Gulp Of Fresh Air](https://travismaynard.com/writing/no-need-to-grunt-take-a-gulp-of-fresh-air)
* [Grunt vs Gulp - Beyond the Numbers](http://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/)
