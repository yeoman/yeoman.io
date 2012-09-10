
# Yeoman.io

Home to the Yeoman.io site.

## Building the docs site

For the first version of our site, we've opted for a very simple compilation
setup that uses a bash script for file concatenation. 

You can build the site using [mdown](https://github.com/millermedeiros/gh-markdown-cli)
the build.sh file found in the root directory.

First install mdown:

```
sudo npm install gh-markdown-cli -g
```

Then:

```
bash ./build.sh
```

## Notes

At present, we manually include the Yeoman docs folder we use for compilation. This will
be changed once the project is public and we can simple submodule the directory from the
main Yeoman repository.

## Future

We intend on switching over to using Jekyll or Octopress for future versions of the
site. If you would be interested in helping us with this effort, please feel free to
open up a new issue or submit a PR to get things started.