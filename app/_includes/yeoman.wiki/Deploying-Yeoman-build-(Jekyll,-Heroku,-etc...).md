When you run ```yeoman build```, we generate a completely optimized version of your application in a ```dist``` directory which has a completely optimized version of your application that can be deployed.

The recommended way of deploying the ```dist``` directory is using ```git subtree```.

1. Remove the ```dist``` directory from the ```.gitignore``` file.

2. Add the ```dist``` directory to your repository

```
git add dist
```
