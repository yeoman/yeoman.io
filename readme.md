# Yeoman.io

Home to the [Yeoman.io](http://yeoman.io) site.

## Attention

If you want to create an issue about something of Yeoman's website you are in the right place! But if the problem is with Yeoman's source code, please visit the [yeoman/yeoman repository](https://github.com/yeoman/yeoman).

## Getting started

The site is made with [Jekyll](https://github.com/mojombo/jekyll/), a static generator in Ruby. It also uses [redcarpet](https://github.com/vmg/redcarpet) to process the markdown in the site.

The best way to install Jekyll and Redcarpet is via RubyGems:

```
gem install jekyll redcarpet
```

Once Jekyll is installed, you just need to clone the project:

```
git clone --recursive git@github.com:yeoman/yeoman.io.git
```

Then go to the project's folder:

```
cd yeoman.io
```

If you are using Git 1.6.4 or earlier, you will manually need to initialize the submodules:

```
git submodule update --init
```

You should now have a copy of the source files for the site that are ready for editing.

## Jekyll commands

Jekyll has three basic options used in this project:

To generate the site and run it in a server, which can be viewed at `http://localhost:4000`, run:

```
jekyll server
```

To regenerate the site as you edit and save files, run:

```
jekyll server --watch
```

To generate a static version of the site that is ready to upload to a server (it will create a folder called _site), run:

```
jekyll build
```

## Notes
 - If you're adding a Youtube embed iframe please wrap the iframe in a div with the ```video-container``` class in order to keep the site responsive.
