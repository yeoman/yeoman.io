`npm uninstall -g yeoman`

On some systems, and especially if you were an early user, this might fail to clean out everything, if so, try this:

`rm -rf ~/.yeoman && npm cache clean yeoman`