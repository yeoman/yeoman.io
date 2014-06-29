---
layout: default
title: Pull Request Guidelines
category: contributing
sidebar: sidebars/contributing.html
excerpt: The yeoman project pull request guidelines
---

Pull Request (_PR_) is the step where you submit patches to one of our repository. To prevent any frustration, you should make sure to **open an issue to discuss any new features** before working on it. This will prevent you waisting time on a feature the core team doesn't see fit for the project scope and goals.

Once you've worked on a feature or a bug, it is then time to send a PR. Make sure to follow these steps along the way to make sure your patch land as soon as possible!

## Only touch relevant files

Make sure your PR stay focused on a single features. Don't change project configs or any unrelevant files to the subject you're working. Open a single PR for each subjects.

## Make sure your code is clean

Checkout the project [style guide](/contributing/style-guide.html), make sure your code is conform and clean. Remove any debugging lines (`debuggers`, `console.log`).

## Make sure you unit tested your changes

Adding a feature? Make sure you add unit tests to support it.

Fixing a bug? Make sure you added a test reproducing the issue.

## Make sure tests passes

All our projects units tests can be run by typing `npm test` at the root of the project. You may need to install dependencies like `mocha`, `grunt` or `gulp`.

## Keep your commit history short and clean

In a large project, it is very important to keep the git history clean and tidy. This help to find bug causes and finding the best fixes.

Keeping history clean means making one commit per feature. It also means to squash every fixes you make on your branch after team review.

Wondering why it matters to keep history clean? Read this [article from Isaac Schlueter (ex Node.js Lead)](http://blog.izs.me/post/37650663670/git-rebase). Remember _Git is an editor_.

## Be descriptive

Write a convincing description of your PR and why we should land it.

## Hang on during code review

It is important for us to keep the core code clean and consistent. This mean we're pretty hard on code review!

Code reviews are the best way to improve ourselves as engineers. Don't take the reviews personnal, they're there to keep Yeoman clean and improve ourselves.

Read more about [code review around here](http://blog.codinghorror.com/code-reviews-just-do-it/).
