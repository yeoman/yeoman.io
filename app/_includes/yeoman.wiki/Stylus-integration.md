## Gist 

[here](https://gist.github.com/ffcbf037e6e856e1010d)

## How to

1. add `grunt-contrib-stylus` as a devDependency by running `npm install -D grunt-contrib-stylus`. This will add it to your package.json after installing.
2. declare the task in Gruntfile.js:
```
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('compass', ['stylus']);
```
3. stylus configuration
```
    stylus: {
      compile: {
        options: {
          compress: true,
          paths: []
        },
        files: {
          'app/styles/*.css': ['app/styles/*.styl']
        }
      }
    },
```
4. stylus **watch** configuration
```
      stylus: {
        files: [
          'app/styles/**/*.styl'
        ],
        tasks: 'stylus reload'
      },
```
5. (optional) delete the compass and compass watch configurations