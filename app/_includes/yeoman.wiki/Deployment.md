## Deploying your application

When you run ```grunt build```, it generates a completely optimized version of your application in a ```dist``` directory that can be deployed.

The recommended way of deploying the ```dist``` directory is using ```git subtree```.

1. Remove the ```dist``` directory from the ```.gitignore``` file.


2. Add the ```dist``` directory to your repository and commit it with your project.

   ```
   git add dist && git commit -m "Initial dist subtree commit"
   ```

3. Once the ```dist``` directory is part of your project we can use [```git subtree```](https://github.com/apenwarr/git-subtree) to set up a separate repository on a different branch.

   ```
   // Deploying dist to GitHub Pages
   git subtree push --prefix dist origin gh-pages
   ```

   Note: prefix must be the relative path to your ```dist``` directory. This is assuming ```dist``` is in your root directory.


4. Now you can commit to your entire repository in your default (master) branch and whenever you want to deploy the ```dist``` directory you can run:

   ```
   git subtree push --prefix dist origin gh-pages
   ```

### Some common errors
 * By default the ```dist``` directory is going to be ignored by git. It is important to remove it from the .gitignore file.
 * You must first commit your ```dist``` directory to the default (master) branch before running the git subtree command.
 * The ```git subtree``` command must be called from the root directory.
 * The ```--prefix``` option must be the relative path to your ```dist``` directory.
 * GitHub Pages uses the ```gh-pages``` branch for deploying project pages. Users & Organization Pages use the ```master``` branch. This means you might want to use master as your subtree branch and set up a different branch for your app source.
 * You might get an error like this `Updates were rejected because the tip of your current branch is behind`. You can solve this by [force pushing to the remote](http://stackoverflow.com/a/13403588/64949) (be careful though, it will destroy whatever is already there).


### Extra
 [Git Subtree Documentation](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt)

 [Yeoman Build](https://github.com/yeoman/yeoman/wiki/yeoman-build)

 [Github Pages](https://help.github.com/articles/user-organization-and-project-pages)

 [generator-heroku](https://github.com/passy/generator-heroku)