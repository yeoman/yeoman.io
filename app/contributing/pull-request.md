---
layout: default
title: Pull Request Guidelines
category: contributing
sidebar: sidebars/contributing.html
excerpt: The yeoman project pull request guidelines
---

We are more than happy to accept external contributions to the project in the form of feedback, bug reports and even better - pull requests :) At this time we are primarily focusing on improving the user-experience and stability of Yeoman for our first release. Please keep this in mind if submitting feature requests, which we're happy to consider for future versions.

## Pull Request Guidelines

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as a team member may be working on the issue in a branch or fork.
* Non-trivial changes should be discussed in an issue first
* Develop in a topic branch, not master
* Lint the code by running `grunt` or `gulp`
* Add relevant tests to cover the change
* Make sure test-suite passes: `npm test`
* Squash your commits
* Write a convincing description of your PR and why we should land it
