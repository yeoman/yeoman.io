Below you can find common questions and answers to recent issues. We'll be adding these to our main FAQ page on yeoman.io shortly.

### Q: I'd like to use the Yeoman that's in git _master_. How?

To get a prerelease version of Yeoman, you can install from git master. This is also recommended for developing Yeoman.

```sh
sudo npm uninstall yeoman -g   # if you experience problems, read below...
git clone https://github.com/yeoman/yeoman.git
cd yeoman/cli
sudo npm install -g
sudo npm link
```

### Q: When trying to list generators I receive "Cannot call method 'substr' of undefined...."

This was an issue in Yeoman 0.9 and is [fixed](https://github.com/yeoman/generators/issues/21) in master. Follow the instructions above to manually update your local installation to master.


### Q: I'm trying to uninstall or reinstall and having problems. Help?

We [shipped v0.9.0](https://github.com/yeoman/yeoman/blob/v0.9/cli/package.json#L33) with an npm uninstall script [with an error](https://github.com/yeoman/yeoman/issues/327#issuecomment-8446662). For some people, this has resulted in an un/re-install procedure that asks for two sudo passwords. The second one is actually asking for the `nobody` user, whoever that is... :)

A full and comprehensive uninstallation of 0.9.0 is:

```sh
sudo rm -rf ~/.yeoman
sudo rm -rf ~/.npm/yeoman*
sudo rm -rf /usr/local/lib/node_modules/yeoman
npm cache clean yeoman
```

This bug is fixed in _master_ and ships in 0.9.1.