## Classes

<dl>
<dt><a href="#TerminalAdapter">TerminalAdapter</a></dt>
<dd><p><code>TerminalAdapter</code> is the default implementation of <code>Adapter</code>, an abstraction
layer that defines the I/O interactions.</p>
<p>It provides a CLI interaction</p>
</dd>
<dt><a href="#Environment">Environment</a></dt>
<dd><p><code>Environment</code> object is responsible of handling the lifecyle and bootstrap
of generators in a specific environment (your app).</p>
<p>It provides a high-level API to create and run generators, as well as further
tuning where and how a generator is resolved.</p>
<p>An environment is created using a list of <code>arguments</code> and a Hash of
<code>options</code>. Usually, this is the list of arguments you get back from your CLI
options parser.</p>
<p>An optional adapter can be passed to provide interaction in non-CLI environment
(e.g. IDE plugins), otherwise a <code>TerminalAdapter</code> is instantiated by default</p>
</dd>
</dl>

## Mixins

<dl>
<dt><a href="#env/resolver">env/resolver</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#splitArgsFromString">splitArgsFromString()</a></dt>
<dd><p>Two-step argument splitting function that first splits arguments in quotes,
and then splits up the remaining arguments if they are not part of a quote.</p>
</dd>
<dt><a href="#getGeneratorHint">getGeneratorHint()</a></dt>
<dd><p>Hint of generator module name</p>
</dd>
<dt><a href="#callbackWrapper">callbackWrapper()</a></dt>
<dd><p>Wrap callback so it can&#39;t get called twice</p>
</dd>
</dl>

<a name="TerminalAdapter"></a>

## TerminalAdapter
`TerminalAdapter` is the default implementation of `Adapter`, an abstraction
layer that defines the I/O interactions.

It provides a CLI interaction

**Kind**: global class  

* [TerminalAdapter](#TerminalAdapter)
    * [.log](#TerminalAdapter+log) : <code>env/log</code>
    * [.prompt(questions, callback)](#TerminalAdapter+prompt)
    * [.diff(actual, expected, changes)](#TerminalAdapter+diff)

<a name="TerminalAdapter+log"></a>

### terminalAdapter.log : <code>env/log</code>
Logging utility

**Kind**: instance property of [<code>TerminalAdapter</code>](#TerminalAdapter)  
<a name="TerminalAdapter+prompt"></a>

### terminalAdapter.prompt(questions, callback)
Prompt a user for one or more questions and pass
the answer(s) to the provided callback.

It shares its interface with `Base.prompt`

(Defined inside the constructor to keep interfaces separated between
instances)

**Kind**: instance method of [<code>TerminalAdapter</code>](#TerminalAdapter)  

| Param | Type |
| --- | --- |
| questions | <code>Array</code> | 
| callback | <code>function</code> | 

<a name="TerminalAdapter+diff"></a>

### terminalAdapter.diff(actual, expected, changes)
Shows a color-based diff of two strings

**Kind**: instance method of [<code>TerminalAdapter</code>](#TerminalAdapter)  

| Param | Type | Description |
| --- | --- | --- |
| actual | <code>string</code> |  |
| expected | <code>string</code> |  |
| changes | <code>Array</code> | returned by diff. |

<a name="Environment"></a>

## Environment
`Environment` object is responsible of handling the lifecyle and bootstrap
of generators in a specific environment (your app).

It provides a high-level API to create and run generators, as well as further
tuning where and how a generator is resolved.

An environment is created using a list of `arguments` and a Hash of
`options`. Usually, this is the list of arguments you get back from your CLI
options parser.

An optional adapter can be passed to provide interaction in non-CLI environment
(e.g. IDE plugins), otherwise a `TerminalAdapter` is instantiated by default

**Kind**: global class  
**Mixes**: [<code>env/resolver</code>](#env/resolver)  

* [Environment](#Environment)
    * [new Environment(args, opts, [adaper])](#new_Environment_new)
    * _instance_
        * [.error(err)](#Environment+error) ⇒ <code>Error</code>
        * [.help(name)](#Environment+help)
        * [.register(name, namespace, packagePath)](#Environment+register) ⇒ <code>Object</code>
        * [.registerStub(Generator, namespace, [resolved], [packagePath])](#Environment+registerStub) ⇒ <code>this</code>
        * [.namespaces()](#Environment+namespaces) ⇒ <code>Array</code>
        * [.getGeneratorsMeta()](#Environment+getGeneratorsMeta) ⇒ <code>Object</code>
        * [.getGeneratorNames()](#Environment+getGeneratorNames) ⇒ <code>Array</code>
        * [.isPackageRegistered([packageNS])](#Environment+isPackageRegistered) ⇒ <code>boolean</code>
        * [.getRegisteredPackages()](#Environment+getRegisteredPackages) ⇒ <code>Array</code>
        * [.getPackagePath(namespace)](#Environment+getPackagePath) ⇒ <code>String</code>
        * [.getPackagePaths(namespace)](#Environment+getPackagePaths) ⇒ <code>Array</code>
        * [.get(namespaceOrPath)](#Environment+get) ⇒ <code>Generator</code> \| <code>null</code>
        * [.getByPath(path)](#Environment+getByPath) ⇒ <code>Generator</code> \| <code>null</code>
        * [.create(namespace, options)](#Environment+create)
        * [.instantiate(namespace, options)](#Environment+instantiate)
        * [.run(args, options, done)](#Environment+run)
        * [.runGenerator(generator, done)](#Environment+runGenerator)
        * [.namespace(filepath, lookups)](#Environment+namespace)
        * [.resolveModulePath(moduleId)](#Environment+resolveModulePath) ⇒ <code>String</code>
        * [.lookup([options], cb)](#Environment+lookup)
        * [.findGeneratorsIn(List, [options])](#Environment+findGeneratorsIn) ⇒ <code>Array</code>
        * [.getNpmPaths([options])](#Environment+getNpmPaths) ⇒ <code>Array</code>
        * [.alias(match, value)](#Environment+alias)
        * [.lookup([options], cb)](#Environment+lookup)
        * [.findGeneratorsIn(List, [options])](#Environment+findGeneratorsIn) ⇒ <code>Array</code>
        * [.getNpmPaths([options])](#Environment+getNpmPaths) ⇒ <code>Array</code>
        * [.alias(match, value)](#Environment+alias)
    * _static_
        * [.util](#Environment.util)
        * [.enforceUpdate(env)](#Environment.enforceUpdate) ⇒ [<code>Environment</code>](#Environment)
        * [.createEnv()](#Environment.createEnv) ⇒ [<code>Environment</code>](#Environment)
        * [.namespaceToName(namespace)](#Environment.namespaceToName) ⇒ <code>String</code>
        * [.lookupGenerator(namespace, [options])](#Environment.lookupGenerator) ⇒ <code>String</code>

<a name="new_Environment_new"></a>

### new Environment(args, opts, [adaper])

| Param | Type | Description |
| --- | --- | --- |
| args | <code>String</code> \| <code>Array</code> |  |
| opts | <code>Object</code> |  |
| [adaper] | [<code>TerminalAdapter</code>](#TerminalAdapter) | A TerminalAdapter instance or another object                                     implementing this adapter interface. This is how                                     you'd interface Yeoman with a GUI or an editor. |

<a name="Environment+error"></a>

### environment.error(err) ⇒ <code>Error</code>
Error handler taking `err` instance of Error.

The `error` event is emitted with the error object, if no `error` listener
is registered, then we throw the error.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>Error</code> - err  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 

<a name="Environment+help"></a>

### environment.help(name)
Outputs the general help and usage. Optionally, if generators have been
registered, the list of available generators is also displayed.

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="Environment+register"></a>

### environment.register(name, namespace, packagePath) ⇒ <code>Object</code>
Registers a specific `generator` to this environment. This generator is stored under
provided namespace, or a default namespace format if none if available.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>Object</code> - environment - This environment  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Filepath to the a generator or a npm package name |
| namespace | <code>String</code> | Namespace under which register the generator (optional) |
| packagePath | <code>String</code> | PackagePath to the generator npm package (optional) |

<a name="Environment+registerStub"></a>

### environment.registerStub(Generator, namespace, [resolved], [packagePath]) ⇒ <code>this</code>
Register a stubbed generator to this environment. This method allow to register raw
functions under the provided namespace. `registerStub` will enforce the function passed
to extend the Base generator automatically.

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type | Description |
| --- | --- | --- |
| Generator | <code>function</code> | A Generator constructor or a simple function |
| namespace | <code>String</code> | Namespace under which register the generator |
| [resolved] | <code>String</code> | The file path to the generator |
| [packagePath] | <code>String</code> | The generator's package path |

<a name="Environment+namespaces"></a>

### environment.namespaces() ⇒ <code>Array</code>
Returns the list of registered namespace.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
<a name="Environment+getGeneratorsMeta"></a>

### environment.getGeneratorsMeta() ⇒ <code>Object</code>
Returns stored generators meta

**Kind**: instance method of [<code>Environment</code>](#Environment)  
<a name="Environment+getGeneratorNames"></a>

### environment.getGeneratorNames() ⇒ <code>Array</code>
Get registered generators names

**Kind**: instance method of [<code>Environment</code>](#Environment)  
<a name="Environment+isPackageRegistered"></a>

### environment.isPackageRegistered([packageNS]) ⇒ <code>boolean</code>
Verify if a package namespace already have been registered.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>boolean</code> - - true if any generator of the package has been registered  

| Param | Type | Description |
| --- | --- | --- |
| [packageNS] | <code>String</code> | namespace of the package. |

<a name="Environment+getRegisteredPackages"></a>

### environment.getRegisteredPackages() ⇒ <code>Array</code>
Get all registered packages namespaces.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>Array</code> - - array of namespaces.  
<a name="Environment+getPackagePath"></a>

### environment.getPackagePath(namespace) ⇒ <code>String</code>
Get last added path for a namespace

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>String</code> - - path of the package  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>String</code> | namespace |

<a name="Environment+getPackagePaths"></a>

### environment.getPackagePaths(namespace) ⇒ <code>Array</code>
Get paths for a namespace

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>Array</code> - - array of paths.  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>String</code> | namespace |

<a name="Environment+get"></a>

### environment.get(namespaceOrPath) ⇒ <code>Generator</code> \| <code>null</code>
Get a single generator from the registered list of generators. The lookup is
based on generator's namespace, "walking up" the namespaces until a matching
is found. Eg. if an `angular:common` namespace is registered, and we try to
get `angular:common:all` then we get `angular:common` as a fallback (unless
an `angular:common:all` generator is registered).

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>Generator</code> \| <code>null</code> - - the generator registered under the namespace  

| Param | Type |
| --- | --- |
| namespaceOrPath | <code>String</code> | 

<a name="Environment+getByPath"></a>

### environment.getByPath(path) ⇒ <code>Generator</code> \| <code>null</code>
Get a generator by path instead of namespace.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>Generator</code> \| <code>null</code> - - the generator found at the location  

| Param | Type |
| --- | --- |
| path | <code>String</code> | 

<a name="Environment+create"></a>

### environment.create(namespace, options)
Create is the Generator factory. It takes a namespace to lookup and optional
hash of options, that lets you define `arguments` and `options` to
instantiate the generator with.

An error is raised on invalid namespace.

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type |
| --- | --- |
| namespace | <code>String</code> | 
| options | <code>Object</code> | 

<a name="Environment+instantiate"></a>

### environment.instantiate(namespace, options)
Instantiate a Generator with metadatas

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type | Description |
| --- | --- | --- |
| namespace | <code>String</code> |  |
| options | <code>Object</code> |  |
| options.arguments | <code>Array</code> \| <code>String</code> | Arguments to pass the instance |
| options.options | <code>Object</code> | Options to pass the instance |

<a name="Environment+run"></a>

### environment.run(args, options, done)
Tries to locate and run a specific generator. The lookup is done depending
on the provided arguments, options and the list of registered generators.

When the environment was unable to resolve a generator, an error is raised.

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type |
| --- | --- |
| args | <code>String</code> \| <code>Array</code> | 
| options | <code>Object</code> | 
| done | <code>function</code> | 

<a name="Environment+runGenerator"></a>

### environment.runGenerator(generator, done)
Convenience method to run the generator with callbackWrapper.
See https://github.com/yeoman/environment/pull/101

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type |
| --- | --- |
| generator | <code>Object</code> | 
| done | <code>function</code> | 

<a name="Environment+namespace"></a>

### environment.namespace(filepath, lookups)
Given a String `filepath`, tries to figure out the relative namespace.

### Examples:

    this.namespace('backbone/all/index.js');
    // => backbone:all

    this.namespace('generator-backbone/model');
    // => backbone:model

    this.namespace('backbone.js');
    // => backbone

    this.namespace('generator-mocha/backbone/model/index.js');
    // => mocha:backbone:model

**Kind**: instance method of [<code>Environment</code>](#Environment)  

| Param | Type | Description |
| --- | --- | --- |
| filepath | <code>String</code> |  |
| lookups | <code>Array</code> | paths |

<a name="Environment+resolveModulePath"></a>

### environment.resolveModulePath(moduleId) ⇒ <code>String</code>
Resolve a module path

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Returns**: <code>String</code> - - The resolved path leading to the module  

| Param | Type | Description |
| --- | --- | --- |
| moduleId | <code>String</code> | Filepath or module name |

<a name="Environment+lookup"></a>

### environment.lookup([options], cb)
Search for generators and their sub generators.

A generator is a `:lookup/:name/index.js` file placed inside an npm package.

Defaults lookups are:
  - ./
  - generators/
  - lib/generators/

So this index file `node_modules/generator-dummy/lib/generators/yo/index.js` would be
registered as `dummy:yo` generator.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>lookup</code>](#env/resolver.lookup)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>boolean</code> \| <code>Object</code> |  |  |
| [options.localOnly] | <code>boolean</code> | <code>false</code> | Set true to skip lookups of                                               globally-installed generators. |
| [options.packagePaths] | <code>string</code> \| <code>Array</code> |  | Paths to look for generators. |
| [options.npmPaths] | <code>string</code> \| <code>Array</code> |  | Repository paths to look for generators packages. |
| [options.filePatterns] | <code>string</code> \| <code>Array</code> | <code>&quot;&#x27;*\\/index.js&#x27;&quot;</code> | File pattern to look for. |
| [options.packagePatterns] | <code>string</code> \| <code>Array</code> | <code>&quot;&#x27;generator-*&#x27;&quot;</code> | Package pattern to look for. |
| cb | <code>function</code> |  | Callback called once the lookup is done. Take err as first                        parameter. |

<a name="Environment+findGeneratorsIn"></a>

### environment.findGeneratorsIn(List, [options]) ⇒ <code>Array</code>
Search npm for every available generators.
Generators are npm packages who's name start with `generator-` and who're placed in the
top level `node_module` path. They can be installed globally or locally.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>findGeneratorsIn</code>](#env/resolver.findGeneratorsIn)  
**Returns**: <code>Array</code> - List of the generator modules path  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| List | <code>Array</code> |  | of search paths |
| [options] | <code>Object</code> |  |  |
| [options.packagePatterns] | <code>boolean</code> | <code>&#x27;generator-*&#x27;</code> | Pattern pattern. |

<a name="Environment+getNpmPaths"></a>

### environment.getNpmPaths([options]) ⇒ <code>Array</code>
Get the npm lookup directories (`node_modules/`)

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>getNpmPaths</code>](#env/resolver.getNpmPaths)  
**Returns**: <code>Array</code> - lookup paths  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>boolean</code> \| <code>Object</code> |  |  |
| [options.localOnly] | <code>boolean</code> | <code>false</code> | Set true to skip lookups of                                               globally-installed generators. |
| [options.filterPaths] | <code>boolean</code> | <code>false</code> | Remove paths that don't ends                       with a supported path (don't touch at NODE_PATH paths). |

<a name="Environment+alias"></a>

### environment.alias(match, value)
Get or create an alias.

Alias allows the `get()` and `lookup()` methods to search in alternate
filepath for a given namespaces. It's used for example to map `generator-*`
npm package to their namespace equivalent (without the generator- prefix),
or to default a single namespace like `angular` to `angular:app` or
`angular:all`.

Given a single argument, this method acts as a getter. When both name and
value are provided, acts as a setter and registers that new alias.

If multiple alias are defined, then the replacement is recursive, replacing
each alias in reverse order.

An alias can be a single String or a Regular Expression. The finding is done
based on .match().

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>alias</code>](#env/resolver.alias)  

| Param | Type |
| --- | --- |
| match | <code>String</code> \| <code>RegExp</code> | 
| value | <code>String</code> | 

**Example**  
```js
env.alias(/^([a-zA-Z0-9:\*]+)$/, 'generator-$1');
    env.alias(/^([^:]+)$/, '$1:app');
    env.alias(/^([^:]+)$/, '$1:all');
    env.alias('foo');
    // => generator-foo:all
```
<a name="Environment+lookup"></a>

### environment.lookup([options], cb)
Search for generators and their sub generators.

A generator is a `:lookup/:name/index.js` file placed inside an npm package.

Defaults lookups are:
  - ./
  - generators/
  - lib/generators/

So this index file `node_modules/generator-dummy/lib/generators/yo/index.js` would be
registered as `dummy:yo` generator.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>lookup</code>](#env/resolver.lookup)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>boolean</code> \| <code>Object</code> |  |  |
| [options.localOnly] | <code>boolean</code> | <code>false</code> | Set true to skip lookups of                                               globally-installed generators. |
| [options.packagePaths] | <code>string</code> \| <code>Array</code> |  | Paths to look for generators. |
| [options.npmPaths] | <code>string</code> \| <code>Array</code> |  | Repository paths to look for generators packages. |
| [options.filePatterns] | <code>string</code> \| <code>Array</code> | <code>&quot;&#x27;*\\/index.js&#x27;&quot;</code> | File pattern to look for. |
| [options.packagePatterns] | <code>string</code> \| <code>Array</code> | <code>&quot;&#x27;generator-*&#x27;&quot;</code> | Package pattern to look for. |
| cb | <code>function</code> |  | Callback called once the lookup is done. Take err as first                        parameter. |

<a name="Environment+findGeneratorsIn"></a>

### environment.findGeneratorsIn(List, [options]) ⇒ <code>Array</code>
Search npm for every available generators.
Generators are npm packages who's name start with `generator-` and who're placed in the
top level `node_module` path. They can be installed globally or locally.

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>findGeneratorsIn</code>](#env/resolver.findGeneratorsIn)  
**Returns**: <code>Array</code> - List of the generator modules path  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| List | <code>Array</code> |  | of search paths |
| [options] | <code>Object</code> |  |  |
| [options.packagePatterns] | <code>boolean</code> | <code>&#x27;generator-*&#x27;</code> | Pattern pattern. |

<a name="Environment+getNpmPaths"></a>

### environment.getNpmPaths([options]) ⇒ <code>Array</code>
Get the npm lookup directories (`node_modules/`)

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>getNpmPaths</code>](#env/resolver.getNpmPaths)  
**Returns**: <code>Array</code> - lookup paths  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>boolean</code> \| <code>Object</code> |  |  |
| [options.localOnly] | <code>boolean</code> | <code>false</code> | Set true to skip lookups of                                               globally-installed generators. |
| [options.filterPaths] | <code>boolean</code> | <code>false</code> | Remove paths that don't ends                       with a supported path (don't touch at NODE_PATH paths). |

<a name="Environment+alias"></a>

### environment.alias(match, value)
Get or create an alias.

Alias allows the `get()` and `lookup()` methods to search in alternate
filepath for a given namespaces. It's used for example to map `generator-*`
npm package to their namespace equivalent (without the generator- prefix),
or to default a single namespace like `angular` to `angular:app` or
`angular:all`.

Given a single argument, this method acts as a getter. When both name and
value are provided, acts as a setter and registers that new alias.

If multiple alias are defined, then the replacement is recursive, replacing
each alias in reverse order.

An alias can be a single String or a Regular Expression. The finding is done
based on .match().

**Kind**: instance method of [<code>Environment</code>](#Environment)  
**Mixes**: [<code>alias</code>](#env/resolver.alias)  

| Param | Type |
| --- | --- |
| match | <code>String</code> \| <code>RegExp</code> | 
| value | <code>String</code> | 

**Example**  
```js
env.alias(/^([a-zA-Z0-9:\*]+)$/, 'generator-$1');
    env.alias(/^([^:]+)$/, '$1:app');
    env.alias(/^([^:]+)$/, '$1:all');
    env.alias('foo');
    // => generator-foo:all
```
<a name="Environment.util"></a>

### Environment.util
Expose the utilities on the module

**Kind**: static property of [<code>Environment</code>](#Environment)  
**See**: [env/util](env/util)  
<a name="Environment.enforceUpdate"></a>

### Environment.enforceUpdate(env) ⇒ [<code>Environment</code>](#Environment)
Make sure the Environment present expected methods if an old version is
passed to a Generator.

**Kind**: static method of [<code>Environment</code>](#Environment)  
**Returns**: [<code>Environment</code>](#Environment) - The updated env  

| Param | Type |
| --- | --- |
| env | [<code>Environment</code>](#Environment) | 

<a name="Environment.createEnv"></a>

### Environment.createEnv() ⇒ [<code>Environment</code>](#Environment)
Factory method to create an environment instance. Take same parameters as the
Environment constructor.

**Kind**: static method of [<code>Environment</code>](#Environment)  
**Returns**: [<code>Environment</code>](#Environment) - a new Environment instance  
**See**: This method take the same arguments as [Environment](#Environment) constructor  
<a name="Environment.namespaceToName"></a>

### Environment.namespaceToName(namespace) ⇒ <code>String</code>
Convert a generators namespace to its name

**Kind**: static method of [<code>Environment</code>](#Environment)  

| Param | Type |
| --- | --- |
| namespace | <code>String</code> | 

<a name="Environment.lookupGenerator"></a>

### Environment.lookupGenerator(namespace, [options]) ⇒ <code>String</code>
Lookup for a specific generator.

**Kind**: static method of [<code>Environment</code>](#Environment)  
**Returns**: <code>String</code> - generator  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| namespace | <code>String</code> |  |  |
| [options] | <code>Object</code> |  |  |
| [options.localOnly] | <code>Boolean</code> | <code>false</code> | Set true to skip lookups of                                                     globally-installed generators. |
| [options.packagePath] | <code>Boolean</code> | <code>false</code> | Set true to return the package                                                       path instead of generators file. |
| [options.singleResult] | <code>Boolean</code> | <code>true</code> | Set false to return multiple values. |

<a name="env/resolver"></a>

## env/resolver
**Kind**: global mixin  

* [env/resolver](#env/resolver)
    * [.lookup([options], cb)](#env/resolver.lookup)
    * [.findGeneratorsIn(List, [options])](#env/resolver.findGeneratorsIn) ⇒ <code>Array</code>
    * [.getNpmPaths([options])](#env/resolver.getNpmPaths) ⇒ <code>Array</code>
    * [.alias(match, value)](#env/resolver.alias)

<a name="env/resolver.lookup"></a>

### env/resolver.lookup([options], cb)
Search for generators and their sub generators.

A generator is a `:lookup/:name/index.js` file placed inside an npm package.

Defaults lookups are:
  - ./
  - generators/
  - lib/generators/

So this index file `node_modules/generator-dummy/lib/generators/yo/index.js` would be
registered as `dummy:yo` generator.

**Kind**: static method of [<code>env/resolver</code>](#env/resolver)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>boolean</code> \| <code>Object</code> |  |  |
| [options.localOnly] | <code>boolean</code> | <code>false</code> | Set true to skip lookups of                                               globally-installed generators. |
| [options.packagePaths] | <code>string</code> \| <code>Array</code> |  | Paths to look for generators. |
| [options.npmPaths] | <code>string</code> \| <code>Array</code> |  | Repository paths to look for generators packages. |
| [options.filePatterns] | <code>string</code> \| <code>Array</code> | <code>&quot;&#x27;*\\/index.js&#x27;&quot;</code> | File pattern to look for. |
| [options.packagePatterns] | <code>string</code> \| <code>Array</code> | <code>&quot;&#x27;generator-*&#x27;&quot;</code> | Package pattern to look for. |
| cb | <code>function</code> |  | Callback called once the lookup is done. Take err as first                        parameter. |

<a name="env/resolver.findGeneratorsIn"></a>

### env/resolver.findGeneratorsIn(List, [options]) ⇒ <code>Array</code>
Search npm for every available generators.
Generators are npm packages who's name start with `generator-` and who're placed in the
top level `node_module` path. They can be installed globally or locally.

**Kind**: static method of [<code>env/resolver</code>](#env/resolver)  
**Returns**: <code>Array</code> - List of the generator modules path  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| List | <code>Array</code> |  | of search paths |
| [options] | <code>Object</code> |  |  |
| [options.packagePatterns] | <code>boolean</code> | <code>&#x27;generator-*&#x27;</code> | Pattern pattern. |

<a name="env/resolver.getNpmPaths"></a>

### env/resolver.getNpmPaths([options]) ⇒ <code>Array</code>
Get the npm lookup directories (`node_modules/`)

**Kind**: static method of [<code>env/resolver</code>](#env/resolver)  
**Returns**: <code>Array</code> - lookup paths  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>boolean</code> \| <code>Object</code> |  |  |
| [options.localOnly] | <code>boolean</code> | <code>false</code> | Set true to skip lookups of                                               globally-installed generators. |
| [options.filterPaths] | <code>boolean</code> | <code>false</code> | Remove paths that don't ends                       with a supported path (don't touch at NODE_PATH paths). |

<a name="env/resolver.alias"></a>

### env/resolver.alias(match, value)
Get or create an alias.

Alias allows the `get()` and `lookup()` methods to search in alternate
filepath for a given namespaces. It's used for example to map `generator-*`
npm package to their namespace equivalent (without the generator- prefix),
or to default a single namespace like `angular` to `angular:app` or
`angular:all`.

Given a single argument, this method acts as a getter. When both name and
value are provided, acts as a setter and registers that new alias.

If multiple alias are defined, then the replacement is recursive, replacing
each alias in reverse order.

An alias can be a single String or a Regular Expression. The finding is done
based on .match().

**Kind**: static method of [<code>env/resolver</code>](#env/resolver)  

| Param | Type |
| --- | --- |
| match | <code>String</code> \| <code>RegExp</code> | 
| value | <code>String</code> | 

**Example**  
```js
env.alias(/^([a-zA-Z0-9:\*]+)$/, 'generator-$1');
    env.alias(/^([^:]+)$/, '$1:app');
    env.alias(/^([^:]+)$/, '$1:all');
    env.alias('foo');
    // => generator-foo:all
```
<a name="splitArgsFromString"></a>

## splitArgsFromString()
Two-step argument splitting function that first splits arguments in quotes,
and then splits up the remaining arguments if they are not part of a quote.

**Kind**: global function  
<a name="getGeneratorHint"></a>

## getGeneratorHint()
Hint of generator module name

**Kind**: global function  
<a name="callbackWrapper"></a>

## callbackWrapper()
Wrap callback so it can't get called twice

**Kind**: global function  
