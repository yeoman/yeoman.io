Developers looking for an end-to-end workflow with Yeoman may be interested in getting it working with specific middleware, such as [Express](http://expressjs.com/). Express, if unfamiliar with it, is a web application framework which compliments Yeoman well as they're both written for Node.

A typical workflow using Express would be to first use the express binary to generate a new application as covered in the official [getting started](http://expressjs.com/guide.html) guide then later create your corresponding client-side views/code. 

This workflow, whilst not difficult from the outset can prove more challenging when you're trying to get Express working with tools such as LiveReload. How does it fit there? How and where do Express views fit in a build process, if at all? How do you manage deployment?. We try to mitigate some of these challenges using a Yeoman sub-project called Express Stack.

Express Stack is proof of concept end-to-end stack for development using [Yeoman](http://yeoman.io) 0.9.6, Express and [AngularJS](http://angularjs.org). Note: This project is currently considered an experiment and is likely to break after Yeoman 1.0 is released. We do however have plans on upgrading it soon after to maintain forwards and backwards compatibility.

The high-level goals of the stack are to provide:

* Custom version of Yeoman's server.js with support for Express middleware
* LiveReload supported out of the box
* Generator for Express and CRUD generator for AngularJS
* Proof-of-concept application using AngularJS

This stack assumes that you wish to develop both the server and client portions of your application within the same directory. Let's walk through how to use it. By the end of setup, you will be able to see how to do this using the demo application which has a `server` directory for Express code and an `app` directory for your client-side code.

### Components

* `yeoman-custom` - A custom build of Yeoman 0.9.6 with support for Express middleware
* `generators` - Express and AngularJS Crud generators for scaffolding
* `demo` - A sample application

### Installation (assume you have already installed Yeoman@0.9.6)

Clone this repository:

```
git clone git://github.com/yeoman/yeoman.git
cd yeoman
git checkout express-stack
```

Install Yeoman@0.9.6 and Grunt

```
npm install -g yeoman
npm install -g grunt
```

and then from the `express-stack` root:

1. `npm install`
2. `grunt install`
3. follow output of step 2 and update your [system path](http://hathaway.cc/2008/06/how-to-edit-your-path-environment-variables-on-mac-os-x/)
4. Now your system has a new command `yeomen` (notice the `e`, instead of `a` in yeoman? - `e` is for `express`), which will run this custom copy of yeoman bundled with the custom generators listed below.

### Getting started with the stack

After you've gone through the installation process, you have two options - you can
either start a brand new application using the below commands or skip to the demo
where some included sample code is available for you to try out.

```
yeomen init angularcrud            # Standard Angular app
yeomen init angularcrud:crud post  # Angular CRUD routes/views
yeomen init express post           # Express CRUD
yeomen server

# you can then navigate to #/api/post/index to verify
# that the routing is working with Express correctly
```

Note: should you receive any warnings about Express not being present, 
`npm install express` should resolve this.

### Demo

You should now be able to navigate to `demo` and run `yeomen server` to run it. Note, if you have multiple versions of yeoman installed locally, you may wish to directly use the binary in `yeoman-custom`, otherwise everything should work.

