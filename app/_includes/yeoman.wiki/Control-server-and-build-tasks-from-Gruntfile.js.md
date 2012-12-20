# How to control yeoman server targets tasks from your app's Gruntfile.js

_This entry should be useful until a new version older than 0.9.6 is released. The developers have announced they're working on a refactor for v1, but in the meantime this is your best choice to have control on what tasks are run when you do ```yeoman server```._

You just rename the default task, and then override it, add in your custom tasks in front or after and make sure to also include the renamed default task.

Example:

```js
grunt.renameTask('server', 'old-server');
grunt.registerTask('server', 'custom-task old-server');
```

Note that this will only be useful if your tasks doesn't write to the `temp` folder. If what you are trying to achieve is to compile something to the `temp` folder to have it served, then you must make sure your compilation happens after the `clean` task that the server includes in its targets list. 

```js
  grunt.renameTask('clean', 'original-clean');
  grunt.registerTask('clean', 'original-clean custom-task');
```

This method must overload at least one of the tasks in the default server targets (``clean coffee compass open-browser watch``), so you can choose to make the renaming above with any of the other tasks if you'd like to have clean only perform its default behavior.