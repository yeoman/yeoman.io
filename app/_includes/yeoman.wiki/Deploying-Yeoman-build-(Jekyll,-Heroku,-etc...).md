When you run ```yeoman build```, we generate a completely optimized version of your application in a ```dist``` directory which has a completely optimized version of your application that can be deployed.

The recommended way of deploying the ```dist``` directory is using ```git subtree```.

1. Remove the ```dist``` directory from the ```.gitignore``` file.

2. Add the ```dist``` directory to your repository and commit it with your project.

   ```
   git add dist && git commit -m "Initial dist subtree commit"
   ```

3. Once the ```dist``` directory is part of your project we can use ```git subtree``` to set up a separate repository on a different branch.

```
git subtree push --prefix dist origin gh-pages
```

This examples assumes the ```dist``` directory is being deployed to GitHub Pages.
