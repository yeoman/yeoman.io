# Stylus integration

## Gist 

[here](https://gist.github.com/ffcbf037e6e856e1010d)

## Howto

1. add `grunt-contrib-stylus`  dependency to `package.json` 
```
{
  "author": "",
  "name": "app_name",
  "version": "0.0.0",
  "dependencies": {},
  "devDependencies": {
    "grunt-contrib-stylus":"*"
  }
}
```
(and enter something in the name field otherwise npm is not happy)
2. run `npm install -l`
3. declare the task in Gruntfile.js:
```
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('compass', ['stylus']);
```
4. stylus configuration
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
6. stylus **watch** configuration
```
      stylus: {
        files: [
          'app/styles/**/*.styl'
        ],
        tasks: 'stylus reload'
      },
```
6. (optional) delete the compass and compass watch configurations