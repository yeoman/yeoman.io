---
layout: codelab
title: 'Step 7: Make Todos persistent with local storage'
markdown: 1
---

Let’s revisit the issue of items not persisting when the browser refreshes with our React/Redux *mytodo* app.

<div class="note tip">
  <p>If the persistence is not a issue for you or you're short on time, you can skip this step and jump directly to <a href="keep-going.html">the Step 8 "Get ready for production"</a>.</p>.
</div>

## Install npm package

To easily achieve this we can use another Redux module called "[redux-localstorage](https://github.com/elgerlambert/redux-localstorage/tree/1.0-breaking-changes)" that will allow us to quickly implement [local storage](http://diveintohtml5.info/storage.html).

Run the following command:

```sh
npm install --save redux-localstorage@rc
```

![](/assets/img/codelab/07_install_localstorage.png)

## Use redux-localstorage

The Redux store should be configured to use storage. Replace the whole your `src/app/store/configureStore.js` by this code:

```js
import {compose, createStore} from 'redux';
import rootReducer from '../reducers';

import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';

export default function configureStore(initialState) {
  const reducer = compose(
    mergePersistedState()
  )(rootReducer, initialState);

  const storage = adapter(window.localStorage);

  const createPersistentStore = compose(
    persistState(storage, 'state')
  )(createStore);

  const store = createPersistentStore(reducer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

```

If you look at your app in the browser now you’ll see that there are one item "Use Yeoman" in the todo list. The app is initialising the todos store if local storage is empty and we haven’t given it any todo items yet.

![](/assets/img/codelab/07_before_localstorage.png)

Go ahead and add a few items to the list:

![](/assets/img/codelab/07_after_localstorage.png)

Now when we refresh our browser the items persist. Hooray!

We can confirm whether our data is being persisted to local storage by checking the **Resources** panel in Chrome DevTools and selecting **Local Storage** from the lefthand side:

![](/assets/img/codelab/07_show_localstorage.png)

<div class="note tip">

  <h2>Write unit tests</h2>

  <p>For an extra challenge, revisit unit testing in <a href="run-unit-tests.html">Step 6</a> and consider how you might update your tests now that the code is using local storage.</p>

</div>

<p class="codelab-paging">
  <a href="index.html#toc">&laquo; Return to overview</a>
  or
  <a href="prepare-production.html">Go to the next step &raquo;</a>
</p>
