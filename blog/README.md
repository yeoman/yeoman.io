# Yeoman Team Blog

## Attention

If you want to create an issue about something of Yeoman's website you are in the right place! But if the problem is with Yeoman's source code, please visit the [yeoman/yeoman repository](https://github.com/yeoman/yeoman).

## Getting started

The blog is made with [Octopress](https://github.com/imathis/octopress), a static generator in Ruby.

Get the dependencies:

```
gem install bundler
rbenv rehash    # If you use rbenv, rehash to be able to run the bundle command
bundle install
```

Clone the repo and go the project folder :

```
git clone --recursive git@github.com:yeoman/yeoman.io.git && cd blog
```

To generate a static version of the site that is ready to upload to a server (it will create a folder called _deploy):

```
rake setup_github_pages
```

```
rake setup_github_pages
Enter the read/write url for your repository
(For example, 'git@github.com:your_username/your_username.github.io)
           or 'https://github.com/your_username/your_username.github.io')
Repository url: https://github.com/yeoman/yeoman.github.io
rm -rf _deploy
mkdir _deploy
cd _deploy
Initialized empty Git repository in /Users/hemanth/labs/yeoman.io/blog/_deploy/.git/
[master (root-commit) 2e086fe] Octopress init
 1 file changed, 1 insertion(+)
 create mode 100644 index.html
cd -

---
## Now you can deploy to http://yeoman.github.io with `rake deploy` ##
```

## Octopress commands

Octorpess uses rake tasks [ `rake -T` to list them all ] :

To generate the site and run it in a server, which can be viewed at `http://localhost:4000`, run:

```
rake generate &&
rake preview
```

To create a new post :

```
rake new_post["Post title"]
```
