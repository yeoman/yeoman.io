Below you can find common questions and answers to recent issues. We'll be adding these to our main FAQ page on yeoman.io shortly.

**Q: When trying to list generators I receive "Cannot call method 'substr' of undefined...."**

This was an issue in Yeoman 0.9 and is [fixed](https://github.com/yeoman/generators/issues/21) in master. To manually update your local installation to get this version, please do the following:

```
sudo npm uninstall yeoman -g
git clone https://github.com/yeoman/yeoman.git
cd yeoman/cli
sudo npm install -g
sudo npm link
```