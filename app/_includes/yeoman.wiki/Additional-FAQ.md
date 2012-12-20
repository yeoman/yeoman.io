# Additional FAQ

Below you can find common questions and answers to recent issues. We'll be adding these to our main FAQ page on yeoman.io shortly.

### Q: I just got prompted to upgrade, but it is asking me for a sudo password and not working.


We [shipped v0.9.0](https://github.com/yeoman/yeoman/blob/v0.9/cli/package.json#L33) with an npm uninstall script [with an error](https://github.com/yeoman/yeoman/issues/327#issuecomment-8446662). For some people, this has resulted in an un/re-install procedure that asks for two sudo passwords. The second one is actually asking for the `nobody` user, whoever that is... :)

A full and comprehensive uninstallation of 0.9.0 to upgrade to the latest yeoman is this:

```sh
sudo rm -rf ~/.yeoman
sudo rm -rf ~/.npm/yeoman*
sudo rm -rf /usr/local/lib/node_modules/yeoman
npm cache clean yeoman

# and install:
npm install -g yeoman # may need sudo
```

For clarity, the bug is in line 29 of `/usr/local/lib/node_modules/yeoman/package.json`.
This bug is fixed in _master_ and ships in 0.9.1.



### Q: I'd like to use the latest Yeoman that's in git _master_. How?

To get a prerelease version of Yeoman, you can install from git master. This is also recommended for developing Yeoman.

```sh
sudo npm uninstall yeoman -g   # if you experience problems, read below...
git clone https://github.com/yeoman/yeoman.git
cd yeoman/cli
sudo npm install -g
sudo npm link # links your global yeoman binary to this folder location
```

*as of yeoman 0.9.6 the contents of cli have been moved to the root yeoman directory.  Step 3 above would be:* 
```sh
cd yeoman
```

### Q: When trying to list generators I receive "Cannot call method 'substr' of undefined...."

This was an issue in Yeoman 0.9 and is [fixed](https://github.com/yeoman/generators/issues/21) in master. Follow the instructions above to manually update your local installation to master.

### Q: NPM appears to have installed yeoman but `yeoman` still gives me "command not found".

It's likely your PATH does not account for global NPM modules just yet. Better documentation forthcoming but until then, read [this comment](https://github.com/yeoman/yeoman/issues/466#issuecomment-8602733) and [this thread](https://github.com/yeoman/yeoman/issues/430#issuecomment-8597663).

This usually happens when you install Node through Homebrew, since it puts Node modules in a directory that's not in your PATH.

From Homebrew:

```
==> Caveats
Homebrew installed npm.
We recommend prepending the following path to your PATH environment
variable to have npm-installed binaries picked up:
  /usr/local/share/npm/bin
```

Quick fix for advanced users is to put the following in your .bashrc/.zshrc file:
`export PATH=/usr/local/share/npm/bin:$PATH`

For beginners `brew uninstall node` and download and install Node from their [website](http://nodejs.org).

### Q: I'm trying to uninstall or reinstall and having problems. Help?

See the answer to the first question.


### Q: I'm getting `EMFILE, too many open files`

EMFILE mean you've reached the OS limit of concurrently open files. There aren't much we can do about it, however you can increase the limit yourself.

Add `ulimit -n [number of files]` to your .bashrc/.zshrc file to increase the soft limit.

If you reach the OS hard limit, you can follow this [StackOverflow answer](http://stackoverflow.com/a/34645/64949) to increase it.

### Q: I just upgraded to 0.9.1 and my coffee files are not compiled anymore

With 0.9.1, coffescript file are now handled through [grunt-contrib-coffee](https://github.com/gruntjs/grunt-contrib-coffee), and thus the old configuration, contained in your project `Gruntfile.js` is deprecated.
To fix the issue replace your old coffee config, but something like:
```
    coffee: {
      compile: {
        files: {
          'app/scripts/build/*.js': 'app/scripts/**/*.coffee'
        },
        options: {
          basePath: 'app/scripts',
          flatten: true
        }
      }
    },
```
(see the [grunt-contrib-coffee](https://github.com/gruntjs/grunt-contrib-coffee) for additional documentation).

Additionally the `watch` config related to coffee files needs to be updated from:
```
    watch: {
      coffee: {
        files: <config:coffee.dist.src>,
        tasks: 'coffee reload'
      },

```
to
```
    watch: {
      coffee: {
        files: 'app/scripts/**/*.coffee',
        tasks: 'coffee reload'
      },

```

### Q: Yeoman just auto-updated but still shows the old version

That is as intended. Since the update check run daily, we don't want to disrupt your flow, so your previous action continues after the update check and/or update, which uses the old version loaded in memory. The next time you use Yeoman you'll be using the updated version.


### Q: How can I change built-in task like `build` or `server`

Please refer to the wiki page [How to control yeoman server and build tasks from Gruntfile.js](https://github.com/yeoman/yeoman/wiki/Control-server-and-build-tasks-from-Gruntfile.js).

### What should I use for documenting my app

View the details within [#152 ticket for recommended solutions for documentation generation](https://github.com/yeoman/yeoman/issues/152#issuecomment-7081670)

### Why does Yeoman require a CLA?

It keeps the IP clean and helps to prevent frivolous lawsuits around who owns what software. Basically the thing all of us want to avoid anyhow. In summary, the CLA asserts that when you donate fixes or documentation, you both own the code that you're submitting and that Google can in turn license that code to other people. (In this case, making it available under the BSD license)

So yeah it's an extra hurdle, but it's something we can't avoid here. This is a Google open source project and thems are the rules.

Just FWIW, here are some other projects that require a similar agreement, jQuery, Firefox, Sizzle, Dojo, Plone, Fedora, Cordova/Phonegap, Apache, Flex.

More:
* http://incubator.apache.org/ip-clearance/index.html
* http://wiki.civiccommons.org/Contributor_Agreements