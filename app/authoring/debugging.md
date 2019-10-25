---
layout: documentation
title: Debugging Generators
category: authoring
sidebar: sidebars/authoring.md
excerpt: Not everyone always writes perfect code. Learn how to debug Generators
---

To debug a generator, you can pass Node.js debug flags by running it like this:

```sh
# OS X / Linux / Windows
npx --node-arg=--inspect <generator> [arguments]
```

You can then debug your generator using the Chrome Devtools or your preferred IDE. See [Node Debugging Guide](https://nodejs.org/en/docs/inspector/) for more info.

Yeoman generators also provide a debug mode to log relevant lifecycle information. You can activate it by setting the `DEBUG` environment variable to the desired scope (the scope of the generator system is `yeoman:generator`).

```sh
# OS X / Linux
DEBUG=yeoman:generator

# Windows
set DEBUG=yeoman:generator
```
