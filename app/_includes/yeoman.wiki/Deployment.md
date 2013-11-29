#Deployment

## Deploying your application

Running `grunt build` generates an optimized version of your application in the `dist` directory. There are multiple ways to version and deploy this code to production.

### grunt-build-control

[Grunt build control](https://github.com/robwierzbowski/grunt-build-control) is developed specifically to deploy Yeoman applications. It helps you version and deploy buitl code automatically with a grunt task. Configuration options include:

- The name of the branch to commit to (e.g., prod, gh-pages)
- Optionally a remote to push to (e.g., a Heroku instance, a GitHub remote, or the local source code repo)
- Automatic commit messages that include the commit the code was built from
- Safety checks to make sure the source repository is clean, so that built code always corresponds to a source code commit

Build control fetches prior to every commit and in general does a pretty good job of keeping code well versioned even with multiple contributors deploying independently. It will maintain a full revision history as long as you never manually force push. Complete documentation is available at the project's [GitHub page](https://github.com/robwierzbowski/grunt-build-control).

### git subtree

You can also maintain the source and built code on the same branch, and deploy only the `dist` directory's files and history with [`git subtree`](https://github.com/apenwarr/git-subtree).

1. Remove the `dist` directory from the `.gitignore` file. Yeoman projects ignore it by default.
2. Add the `dist` directory to your repository:  

        git add dist && git commit -m "Initial dist subtree commit

3. Deploy the subtree to a different branch. Specify a relative path to your `dist` directory with `--prefix`:

        git subtree push --prefix dist origin gh-pages

4. Develop normally, committing your entire repository to your default (master) branch.
5. To deploy the `dist` directory, run the `subtree push` command from the root directory:

        git subtree push --prefix dist origin gh-pages

### git-directory-deploy script

[Git-directory-deploy](https://github.com/X1011/git-directory-deploy) is a less-automated script that works on similar principles to grunt build control.

### Further reading

- [Git Subtree docs](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt)
- [Yeoman Build process docs](https://github.com/yeoman/yeoman/wiki/yeoman-build)
- [Github Pages docs](https://help.github.com/articles/user-organization-and-project-pages)
- [Generating a Heroku procfile with generator-heroku](https://github.com/passy/generator-heroku)
