# How to control yeoman server targets tasks on your app's Gruntfile.js

_This entry should be useful until a new version older than 0.9.6 is released. The developers have announced they're working on a refactor for v1, but in the meantime this is your best choice to have control on what tasks are run when you do ```yeoman server```_

Customizing the server is useful to have at your services new NPM modules, like pre-processors or compilers not available by default (e.g. Handlebars, Jade, Haml, etc.). An example appears in [Hamlbars integration](https://github.com/yeoman/yeoman/wiki/Handlebars-integration) however this requires that your running version of Yeoman includes the capability of customizing server tasks.

Yeoman's Github repo contains a version of the code with such capabilities, but you must install it manually. This version will be a custom build made by you. It will be named as an alternative build of 0.9.6 and therefore it'll be replaced by any auto updates once a new version is published. Therefore this is the cleanest workaround I could find. If you share your custom gruntfile with third parties you must indicate them that a custom installation to replace 0.9.6 must be made. Otherwise, ```yeoman server``` will run with default behaviour and hence ignore any custom tasks you define using the override like those in the [Hamlbars integration](https://github.com/yeoman/yeoman/wiki/Handlebars-integration)

## required steps to install your custom 0.9.6-2 yeoman

Open a terminal where you want the yeoman directory to be downloaded. this is a temporary location to get the source and you may delete if after the process is complete.

### Clone Yeoman from Github.
This will be in the last commit inside master. We must bring the repo back to the moment where the server.js modiciations allowing us to customize it's task was present. I found the following commit to be that moment: https://github.com/yeoman/yeoman/tree/606de80eb598046152233a8e868b9c9687559468

The commit below includes the changes from: https://github.com/yeoman/yeoman/commit/6b0f3289381ffb6ae496a48f4188cfe0988e3e8a and another commit fixing a small typo, which is the code we want to have that isn't present by default in 0.9.6

For some reason, I couldn't find any package.json reporting version 0.9.6, but this apparently contains all 0.9.6 code only labeled as 0.9.5 so it shouldn't be a problem.

To clone and get into the directory:
``git clone https://github.com/yeoman/yeoman.git
cd yeoman``

Get the last version including the server.js that accepts customization of its tasks, for that checkout to the commit identified before:
```git checkout -b 0.9.5 606de80e```

Remove all files from the current master and leave only the version we checked out. THIS IS DESTRUCTIVE, so make sure you are in yeoman cloned dir and not any other git tracked folder.

```git reset --hard HEAD```

Reset the version to something else that 0.9.5 so that 0.9.6 doesnt overwrite this custom installation, but 0.9.7 or older versions do
```sed -i -- 's/0.9.5/0.9.6-2/g' package.json```

Now, you are ready to use this as your installation source.

```cd cli
npm install -g cli```

Now you have yeoman 0.9.2-2 (-2 indicates our custom build)

You can control server tasks as indicated in  the [Hamlbars integration](https://github.com/yeoman/yeoman/wiki/Handlebars-integration)

For information about the issue of controlling server tasks, please refer to:
https://github.com/yeoman/yeoman/pull/709
https://github.com/yeoman/yeoman/pull/530