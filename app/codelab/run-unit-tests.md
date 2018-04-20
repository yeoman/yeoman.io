---
layout: codelab
title: 'Step 6: Test with Karma and Jasmine'
markdown: 1
sidebar: sidebars/codelab.md
---

For those unfamiliar with [Karma](http://karma-runner.github.io), it is a JavaScript test runner that is test framework agnostic. The fountainjs generator has included test framework [Jasmine](http://jasmine.github.io/). When we ran `yo fountain-webapp` earlier in this codelab the generator scaffolded  files with pattern `*.spec.js` in the source folder of the `mytodo` folder, created a `conf/karma.conf.js` file, and pulled in the Node modules for Karma.  We’ll be editing a Jasmine script to describe our tests soon but let’s see how we can run tests first.

## Run unit tests

Let’s go back to the command line and kill our local server using <span class="keyboard">Ctrl</span>+<span class="keyboard">C</span>. There is already a npm script scaffolded out in our `package.json` for running tests. It can be run as follows:

```sh
npm test
```

Every tests should pass.

## Update unit tests

You’ll find unit tests scaffolded in the `src` folder, so open up **src/app/reducers/todos.spec.js**. This is the unit test for your Todos reducer. For example we get focus on the first test who verify the initial state. (Note: on windows, you might need to [add `127.0.0.1 localhost` to your `etc/hosts` file](https://github.com/karma-runner/karma-phantomjs-launcher/issues/84))

```js
it('should handle initial state', () => {
  expect(todos(undefined, {})).toEqual([
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
  ]);
});
```

And replace that test with the following:

```js
it('should handle initial state', () => {
  expect(todos(undefined, {})).toEqual([
    {
      text: 'Use Yeoman', // <=== HERE
      completed: false,
      id: 0
    }
  ]);
});
```

Re-running our tests with `npm test` should see our tests now failing.

<div class="note tip">

  <p>If you want run test automatically on change you can use <code>npm run test:auto</code> instead.</p>

</div>

Open `src/app/reducers/todos.js`.

Replace the initial state by:

```js
const initialState = [
  {
    text: 'Use Yeoman',
    completed: false,
    id: 0
  }
];
```

Fantastic, you have fixed the test:

![](/assets/img/codelab/06_run_test.png)

Writing unit tests make it easier to catch bugs as your app gets bigger and when more developers join your team. The scaffolding feature of Yeoman makes writing unit tests easier so no excuse for not writing your own tests! ;)

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="local-storage.html">Go to the next step &raquo;</a>
</p>
