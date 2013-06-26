# Yeoman.io

Home to the Yeoman.io site.

Made with [Jekyll](https://github.com/mojombo/jekyll/), a static generator in Ruby.

## Attention

If you want to create an issue about something of Yeoman's website you are in the right place! But if the problem is with Yeoman's source code, please visit the [yeoman/yeoman repository](https://github.com/yeoman/yeoman).

## Getting started

The best way to install Jekyll is via RubyGems:

```
gem install jekyll
```

Once Jekyll is installed, you just need to clone the project:

```
git clone git@github.com:yeoman/yeoman.io.git
```

Then go to the project's folder:

```
cd yeoman.io
```

Initialize the submodule:

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
