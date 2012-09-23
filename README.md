# Yeoman.io

Home to the Yeoman.io site.
Made with [Jekyll](https://github.com/mojombo/jekyll/), a static generator in Ruby.

## Attention

If you want to create an issue about something of Yeoman's website you are in the right place! But if the problem is with Yeoman's source code, please visit [this repository](https://github.com/yeoman/yeoman).

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