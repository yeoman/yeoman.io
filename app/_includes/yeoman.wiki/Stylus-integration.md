## Gist

[here](https://gist.github.com/ffcbf037e6e856e1010d)

## How to

1. Run `npm install -D grunt-contrib-stylus` to add `grunt-contrib-stylus` as a `devDependency`. This will add it to your `package.json` after installing. (You may also run `npm install -D  canvas` if you want to use the node-canvas fallback for gradients; see nib doc.)
2. Declare the task in `Gruntfile.js`:
```
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('compass', ['stylus']);
```
3. Stylus configuration
```
    stylus: {
      compile: {
        options: {
          compress: true,
          paths: ['node_modules/grunt-contrib-stylus/node_modules']
        },
        files: {
          'app/styles/*.css': ['app/styles/*.styl']
        }
      }
    },
```
The `paths` definition let you do `@import 'nib'` in stylesheets.
4. Stylus **watch** configuration
```
      stylus: {
        files: [
          'app/styles/**/*.styl'
        ],
        tasks: 'stylus reload'
      },
```
5. (optional) Delete the Compass and Compass watch configurations