# Yeoman.io

Home to the Yeoman.io site.
Made with [Jekyll](https://github.com/mojombo/jekyll/), a static generator in Ruby.

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

And finally run:

```
jekyll --server
```

Now you can see the website running in `localhost:4000` :D

## Build

To generate the files, just run:

```
jekyll
```

It will create a folder called `_site`. Upload it's content to your server.