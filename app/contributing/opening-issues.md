---
layout: default
title: Opening an issue
category: contributing
excerpt: Guidelines to opening an issue on the Yeoman project
---

# How to open an helpful issue

In order for us to help you please check that you've completed the following steps:

* Made sure you're on the latest version `npm update -g yo`
* Used the search feature to ensure that the bug hasn't been reported before
* Included as much information about the bug as possible, including any output you've received, what OS and version you're on, etc.
* Shared the output from running the following command in your project root as this can also help track down the issue.

Unix:

```
yo --version && echo $PATH $NODE_PATH && node -e 'console.log(process.platform, process.versions)' && cat Gruntfile.js
```

Windows:

```
yo --version && echo %PATH% %NODE_PATH% && node -e "console.log(process.platform, process.versions)" && type Gruntfile.js
```

Then submit your issue on the relevant repository

* [General concerns on the project](https://github.com/yeoman/yeoman/issues/new)
* [Issues with `yo`](https://github.com/yeoman/yo/issues/new)
* [Issues when writing a generator](https://github.com/yeoman/generator/issues/new)

For any issues related to a particular generator (`grunt build` not working, you'd like a new feature, etc), then search on github for the relevant repository. They're usually named `generator-X`.
