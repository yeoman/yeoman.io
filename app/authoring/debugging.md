---
layout: documentation
title: Debugging Generators
category: authoring
sidebar: sidebars/authoring.md
excerpt: Not everyone always writes perfect code. Learn how to debug Generators
---

To debug a generator, you can pass Node.js debug flags by running it like this:

```sh
# OS X / Linux
node --debug `which yo` <generator> [arguments]

# Windows
# Find the path to the yo binary in Command Prompt
where yo
# Or find the path to the yo binary in PowerShell
get-command yo
# Would be something like C:\Users\<USER>\AppData\Roaming\npm\yo
# Use this path to derive yo cli.js file
# C:\Users\<USER>\AppData\Roaming\npm\node_modules\yo\lib\cli.js
node --debug <path to yo cli.js> <generator> [arguments]
```

Yeoman generators also provide a debug mode to log relevant lifecycle information. You can activate it by setting the `DEBUG` environment variable to the desired scope (the scope of the generator system is `yeoman:generator`).

```sh
# OS X / Linux
DEBUG=yeoman:generator

# Windows
set DEBUG=yeoman:generator
```
