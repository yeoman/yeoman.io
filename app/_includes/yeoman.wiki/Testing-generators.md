Right now, there is no specific infrastructure to test out individual generators.

`yeoman init mocha:generator` was however added:

```sh
Usage:
  yeoman init mocha:generator NAME app/file/to/test.js test/something.js ... [options]

Options:
  -h, --help      # Print generator's options and usage                           
                  # Default: false
      --internal  # Enable this flag when generating from yeoman-generators repo  
                  # Default: false
      --prefix    # Specify an alternate base directory                           
                  # Default: test/generators/

Description:
    This generator is here to help you scaffold a very basic mocha test suite
    for a given generator, using yeoman-generators helpers.

    Give it additional arguments as filepath to check, and the correspoding
    assertions will be generated for you.

Example:
    yeoman init mocha:generator Thing

    This will create:
        test/generators/test-thing.js
```

Additionally, the `./support/test` script can be used to generate the appropriate command, depending on the generator name provided. https://github.com/mklabs/generators/blob/2886759ff5f4a86267da0775dc67d94633307f18/support/test

`./support/test angular:all` should generate the associated test suite: https://github.com/mklabs/generators/blob/2886759ff5f4a86267da0775dc67d94633307f18/test/generators/test-angular.js
