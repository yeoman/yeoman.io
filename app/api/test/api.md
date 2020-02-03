## Modules

<dl>
<dt><a href="#module_test/helpers">test/helpers</a></dt>
<dd><p>Collection of unit test helpers. (mostly related to Mocha syntax)</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#RunContext">RunContext</a></dt>
<dd></dd>
</dl>

<a name="module_test/helpers"></a>

## test/helpers
Collection of unit test helpers. (mostly related to Mocha syntax)


* [test/helpers](#module_test/helpers)
    * [.setUpTestDirectory(dir)](#module_test/helpers.setUpTestDirectory) ⇒ <code>function</code>
    * [.gruntfile(options, done)](#module_test/helpers.gruntfile)
    * [.testDirectory(dir, cb)](#module_test/helpers.testDirectory)
    * [.mockPrompt(generator, answers)](#module_test/helpers.mockPrompt)
    * [.restorePrompt(generator)](#module_test/helpers.restorePrompt)
    * [.mockLocalConfig(generator, localConfig)](#module_test/helpers.mockLocalConfig)
    * [.createDummyGenerator()](#module_test/helpers.createDummyGenerator)
    * [.createGenerator(name, dependencies, args, options)](#module_test/helpers.createGenerator)
    * [.registerDependencies(dependencies)](#module_test/helpers.registerDependencies)
    * [.run(GeneratorOrNamespace)](#module_test/helpers.run) ⇒ [<code>RunContext</code>](#RunContext)

<a name="module_test/helpers.setUpTestDirectory"></a>

### test/helpers.setUpTestDirectory(dir) ⇒ <code>function</code>
Create a function that will clean up the test directory,
cd into it, and create a dummy gruntfile inside. Intended for use
as a callback for the mocha `before` hook.

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  
**Returns**: <code>function</code> - mocha callback  

| Param | Type | Description |
| --- | --- | --- |
| dir | <code>String</code> | path to the test directory |

<a name="module_test/helpers.gruntfile"></a>

### test/helpers.gruntfile(options, done)
Generates a new Gruntfile.js in the current working directory based on
options hash passed in.

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Grunt configuration |
| done | <code>function</code> | callback to call on completion |

**Example**  
```js
before(helpers.gruntfile({
  foo: {
    bar: '<config.baz>'
  }
}));
```
<a name="module_test/helpers.testDirectory"></a>

### test/helpers.testDirectory(dir, cb)
Clean-up the test directory and cd into it.
Call given callback after entering the test directory.

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| dir | <code>String</code> | path to the test directory |
| cb | <code>function</code> | callback executed after setting working directory to dir |

**Example**  
```js
testDirectory(path.join(__dirname, './temp'), function () {
  fs.writeFileSync('testfile', 'Roses are red.');
});
```
<a name="module_test/helpers.mockPrompt"></a>

### test/helpers.mockPrompt(generator, answers)
Answer prompt questions for the passed-in generator

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| generator | <code>Generator</code> | a Yeoman generator |
| answers | <code>Object</code> | an object where keys are the   generators prompt names and values are the answers to   the prompt questions |

**Example**  
```js
mockPrompt(angular, {'bootstrap': 'Y', 'compassBoostrap': 'Y'});
```
<a name="module_test/helpers.restorePrompt"></a>

### test/helpers.restorePrompt(generator)
Restore defaults prompts on a generator.

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type |
| --- | --- |
| generator | <code>Generator</code> | 

<a name="module_test/helpers.mockLocalConfig"></a>

### test/helpers.mockLocalConfig(generator, localConfig)
Provide mocked values to the config

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| generator | <code>Generator</code> | a Yeoman generator |
| localConfig | <code>Object</code> | localConfig - should look just like if called config.getAll() |

<a name="module_test/helpers.createDummyGenerator"></a>

### test/helpers.createDummyGenerator()
Create a simple, dummy generator

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  
<a name="module_test/helpers.createGenerator"></a>

### test/helpers.createGenerator(name, dependencies, args, options)
Create a generator, using the given dependencies and controller arguments
Dependecies can be path (autodiscovery) or an array [<generator>, <name>]

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | the name of the generator |
| dependencies | <code>Array</code> | paths to the generators dependencies |
| args | <code>Array</code> \| <code>String</code> | arguments to the generator;   if String, will be split on spaces to create an Array |
| options | <code>Object</code> | configuration for the generator |

**Example**  
```js
var deps = ['../../app',
             '../../common',
             '../../controller',
             '../../main',
             [createDummyGenerator(), 'testacular:app']
           ];
var angular = createGenerator('angular:app', deps);
```
<a name="module_test/helpers.registerDependencies"></a>

### test/helpers.registerDependencies(dependencies)
Register a list of dependent generators into the provided env.
Dependecies can be path (autodiscovery) or an array [<generator>, <name>]

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| dependencies | <code>Array</code> | paths to the generators dependencies |

<a name="module_test/helpers.run"></a>

### test/helpers.run(GeneratorOrNamespace) ⇒ [<code>RunContext</code>](#RunContext)
Run the provided Generator

**Kind**: static method of [<code>test/helpers</code>](#module_test/helpers)  

| Param | Type | Description |
| --- | --- | --- |
| GeneratorOrNamespace | <code>String</code> \| <code>function</code> | Generator constructor or namespace |

<a name="RunContext"></a>

## RunContext
**Kind**: global class  

* [RunContext](#RunContext)
    * [new RunContext(Generator, [settings])](#new_RunContext_new)
    * [.async()](#RunContext+async) ⇒ <code>function</code>
    * [.toPromise()](#RunContext+toPromise) ⇒ <code>Promise</code>
    * [.then()](#RunContext+then) ⇒ <code>Promise</code>
    * [.catch()](#RunContext+catch) ⇒ <code>Promise</code>
    * [.inDir(dirPath, [cb])](#RunContext+inDir) ⇒ <code>this</code>
    * [.cd(dirPath)](#RunContext+cd) ⇒ <code>this</code>
    * [.inTmpDir([cb])](#RunContext+inTmpDir) ⇒ <code>this</code>
    * [.withEnvironment([cb])](#RunContext+withEnvironment) ⇒ <code>this</code>
    * [.cleanTestDirectory()](#RunContext+cleanTestDirectory)
    * [.withArguments(args)](#RunContext+withArguments) ⇒ <code>this</code>
    * [.withOptions(options)](#RunContext+withOptions) ⇒ <code>this</code>
    * [.withPrompts(answers)](#RunContext+withPrompts) ⇒ <code>this</code>
    * [.withGenerators(dependencies)](#RunContext+withGenerators) ⇒ <code>this</code>
    * [.withLocalConfig(localConfig)](#RunContext+withLocalConfig) ⇒ <code>this</code>

<a name="new_RunContext_new"></a>

### new RunContext(Generator, [settings])
This class provide a run context object to façade the complexity involved in setting
up a generator for testing


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| Generator | <code>String</code> \| <code>function</code> |  | Namespace or generator constructor. If the later                                       is provided, then namespace is assumed to be                                       'gen:test' in all cases |
| [settings] | <code>Object</code> |  |  |
| [settings.tmpdir] | <code>Boolean</code> | <code>true</code> | Automatically run this generator in a tmp dir |
| [settings.compatibility] | <code>Boolean</code> | <code>false</code> | Run with yeoman-test 1.x compatibility |
| [settings.resolved] | <code>String</code> |  | File path to the generator (only used if Generator is a constructor) |
| [settings.namespace] | <code>String</code> | <code>&#x27;gen:test&#x27;</code> | Namespace (only used if Generator is a constructor) |

<a name="RunContext+async"></a>

### runContext.async() ⇒ <code>function</code>
Hold the execution until the returned callback is triggered

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
**Returns**: <code>function</code> - Callback to notify the normal execution can resume  
<a name="RunContext+toPromise"></a>

### runContext.toPromise() ⇒ <code>Promise</code>
Return a promise representing the generator run process

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
**Returns**: <code>Promise</code> - Promise resolved on end or rejected on error  
<a name="RunContext+then"></a>

### runContext.then() ⇒ <code>Promise</code>
Promise `.then()` duck typing

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
<a name="RunContext+catch"></a>

### runContext.catch() ⇒ <code>Promise</code>
Promise `.catch()` duck typing

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
<a name="RunContext+inDir"></a>

### runContext.inDir(dirPath, [cb]) ⇒ <code>this</code>
Clean the provided directory, then change directory into it

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
**Returns**: <code>this</code> - run context instance  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>String</code> | Directory path (relative to CWD). Prefer passing an absolute                            file path for predictable results |
| [cb] | <code>function</code> | callback who'll receive the folder path as argument |

<a name="RunContext+cd"></a>

### runContext.cd(dirPath) ⇒ <code>this</code>
Change directory without deleting directory content.

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
**Returns**: <code>this</code> - run context instance  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>String</code> | Directory path (relative to CWD). Prefer passing an absolute                            file path for predictable results |

<a name="RunContext+inTmpDir"></a>

### runContext.inTmpDir([cb]) ⇒ <code>this</code>
Cleanup a temporary directy and change the CWD into it

This method is called automatically when creating a RunContext. Only use it if you need
to use the callback.

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
**Returns**: <code>this</code> - run context instance  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback who'll receive the folder path as argument |

<a name="RunContext+withEnvironment"></a>

### runContext.withEnvironment([cb]) ⇒ <code>this</code>
Create an environment

This method is called automatically when creating a RunContext. Only use it if you need
to use the callback.

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
**Returns**: <code>this</code> - run context instance  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | callback who'll receive the folder path as argument |

<a name="RunContext+cleanTestDirectory"></a>

### runContext.cleanTestDirectory()
Clean the directory used for tests inside inDir/inTmpDir

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  
<a name="RunContext+withArguments"></a>

### runContext.withArguments(args) ⇒ <code>this</code>
Provide arguments to the run context

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>String</code> \| <code>Array</code> | command line arguments as Array or space separated string |

<a name="RunContext+withOptions"></a>

### runContext.withOptions(options) ⇒ <code>this</code>
Provide options to the run context

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | command line options (e.g. `--opt-one=foo`) |

<a name="RunContext+withPrompts"></a>

### runContext.withPrompts(answers) ⇒ <code>this</code>
Mock the prompt with dummy answers

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  

| Param | Type | Description |
| --- | --- | --- |
| answers | <code>Object</code> | Answers to the prompt questions |

<a name="RunContext+withGenerators"></a>

### runContext.withGenerators(dependencies) ⇒ <code>this</code>
Provide dependent generators

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  

| Param | Type | Description |
| --- | --- | --- |
| dependencies | <code>Array</code> | paths to the generators dependencies |

**Example**  
```js
var angular = new RunContext('../../app');
angular.withGenerators([
  '../../common',
  '../../controller',
  '../../main',
  [helpers.createDummyGenerator(), 'testacular:app']
]);
angular.on('end', function () {
  // assert something
});
```
<a name="RunContext+withLocalConfig"></a>

### runContext.withLocalConfig(localConfig) ⇒ <code>this</code>
Mock the local configuration with the provided config

**Kind**: instance method of [<code>RunContext</code>](#RunContext)  

| Param | Type | Description |
| --- | --- | --- |
| localConfig | <code>Object</code> | should look just like if called config.getAll() |

