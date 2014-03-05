---
layout: default
---

# Storing and sharing configuration

Storing user configuration options and sharing them between sub-generator is a common task. For example, it is common to share preferences like the language (does the user use CoffeeScript?), style options (indenting with spaces or tabs), etc.

These configuration can be stored in the `.yo-rc.json` file through the [Yeoman Storage API]. This API is accessible through the `generator.config` object.

Here's some common methods you'll use.

## Methods

### `generator.config.save()`

This method will write the configuration to the `.yo-rc.json` file. If the file doesn't exist yet, the `save` method will create it.

The `.yo-rc.json` file is also determining the root of a project. Because of that, even if you're not using storage for anything, it is considered to be a best practice to always call `save` inside your `:app` generator.

Also note that the `save` method is called automatically each time you `set` a configuration option. So you usually won't need to call it explicitly.

### `generator.config.set()`

`set` either take a key and an associated value, or an object hash of multiple key/values.

Note that values must be JSON serializable (String, Number or non-recursive objects).

### `generator.config.get()`

`get` takes a `String` key as parameter and return the associated value.

### `generator.config.getAll()`

Return an object of the full available configuration.

The returned object is passed by value, not reference. This mean you still need to use the `set` method to update the configuration store.

### `generator.config.delete()`

Delete a key.

### `generator.config.defaults()`

Accept a hash of options to use as defaults values. If a key/value pair already exist, the value will remains untouched. If a key is missing, it'll be added.

## `.yo-rc.json` structure

The `.yo-rc.json` file is a JSON file where configuration objects from multiples generators are stored. Each generator configuration is namespaced to ensure no naming conflicts will occur between generators.

This also mean each generator configuration is sandboxed and can only be shared between sub-generators. You cannot share configuration between different generator using the storage API. Use options and arguments during invocation to share data between different generators.

Here's what a `.yo-rc.json` file looks like internally:

```json
{
  "generator-backbone": {
    "requirejs": true,
    "coffee": true
  },
  "generator-gruntfile": {
    "compass": false
  }
}
```

The structure is pretty comprehensive for your end user. This mean, you may wish to store advanced configurations inside this file and ask advanced users to edit the file directly when it doesn't make sense to use prompts for every options.