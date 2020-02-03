<a name="Generator"></a>

## Generator
The `Generator` class provides the common API shared by all generators.
It define options, arguments, file, prompt, log, API, etc.

It mixes into its prototype all the methods found in the `actions/` mixins.

Every generator should extend this base class.

**Kind**: global class  
**Mixes**: <code>actions/help</code>, <code>actions/install</code>, <code>actions/spawn-command</code>, <code>actions/user</code>, <code>nodejs/EventEmitter</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| env | <code>Object</code> | the current Environment being run |
| args | <code>Object</code> | Provide arguments at initialization |
| resolved | <code>String</code> | the path to the current generator |
| description | <code>String</code> | Used in `--help` output |
| appname | <code>String</code> | The application name |
| config | <code>Storage</code> | `.yo-rc` config file manager |
| fs | <code>Object</code> | An instance of [Mem-fs-editor](https://github.com/SBoudrias/mem-fs-editor) |
| log | <code>function</code> | Output content through Interface Adapter |


* [Generator](#Generator)
    * [new Generator(args, options)](#new_Generator_new)
    * [.debug(...args)](#Generator+debug)
    * [.prompt(questions)](#Generator+prompt) ⇒ <code>Promise</code>
    * [.option(name, config)](#Generator+option)
    * [.argument(name, config)](#Generator+argument)
    * [.queueMethod(method:, [methodName], [queueName], [reject])](#Generator+queueMethod)
    * [.run([cb])](#Generator+run) ⇒ <code>Promise</code>
    * [.composeWith(generator, options)](#Generator+composeWith) ⇒ <code>this</code>
    * [.rootGeneratorName()](#Generator+rootGeneratorName) ⇒ <code>String</code>
    * [.rootGeneratorVersion()](#Generator+rootGeneratorVersion) ⇒ <code>String</code>
    * [.destinationRoot(rootPath)](#Generator+destinationRoot) ⇒ <code>String</code>
    * [.sourceRoot(rootPath)](#Generator+sourceRoot) ⇒ <code>String</code>
    * [.templatePath(...path)](#Generator+templatePath) ⇒ <code>String</code>
    * [.destinationPath(...path)](#Generator+destinationPath) ⇒ <code>String</code>
    * [.determineAppname()](#Generator+determineAppname) ⇒ <code>String</code>
    * [.registerTransformStream(stream)](#Generator+registerTransformStream) ⇒ <code>this</code>

<a name="new_Generator_new"></a>

### new Generator(args, options)

| Param | Type |
| --- | --- |
| args | <code>String</code> \| <code>Array</code> | 
| options | <code>Object</code> | 

**Example**  
```js
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  writing() {
    this.fs.write(this.destinationPath('index.js'), 'const foo = 1;');
  }
};
```
<a name="Generator+debug"></a>

### generator.debug(...args)
Convenience debug method

**Kind**: instance method of [<code>Generator</code>](#Generator)  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | parameters to be passed to debug |

<a name="Generator+prompt"></a>

### generator.prompt(questions) ⇒ <code>Promise</code>
Prompt user to answer questions. The signature of this method is the same as [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

On top of the Inquirer.js API, you can provide a `{cache: true}` property for
every question descriptor. When set to true, Yeoman will store/fetch the
user's answers as defaults.

**Kind**: instance method of [<code>Generator</code>](#Generator)  

| Param | Type | Description |
| --- | --- | --- |
| questions | <code>array</code> | Array of question descriptor objects. See [Documentation](https://github.com/SBoudrias/Inquirer.js/blob/master/README.md) |

<a name="Generator+option"></a>

### generator.option(name, config)
Adds an option to the set of generator expected options, only used to
generate generator usage. By default, generators get all the cli options
parsed by nopt as a `this.options` hash object.

### Options:

  - `description` Description for the option
  - `type` Either Boolean, String or Number
  - `alias` Option name alias (example `-h` and --help`)
  - `default` Default value
  - `hide` Boolean whether to hide from help

**Kind**: instance method of [<code>Generator</code>](#Generator)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| config | <code>Object</code> | 

<a name="Generator+argument"></a>

### generator.argument(name, config)
Adds an argument to the class and creates an attribute getter for it.

Arguments are different from options in several aspects. The first one
is how they are parsed from the command line, arguments are retrieved
based on their position.

Besides, arguments are used inside your code as a property (`this.argument`),
while options are all kept in a hash (`this.options`).

### Options:

  - `description` Description for the argument
  - `required` Boolean whether it is required
  - `optional` Boolean whether it is optional
  - `type` String, Number, Array, or Object
  - `default` Default value for this argument

**Kind**: instance method of [<code>Generator</code>](#Generator)  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| config | <code>Object</code> | 

<a name="Generator+queueMethod"></a>

### generator.queueMethod(method:, [methodName], [queueName], [reject])
Schedule methods on a run queue.

**Kind**: instance method of [<code>Generator</code>](#Generator)  

| Param | Type | Description |
| --- | --- | --- |
| method: | <code>function</code> \| <code>Object</code> | Method to be scheduled or object with function properties. |
| [methodName] | <code>String</code> | Name of the method to be scheduled. |
| [queueName] | <code>String</code> | Name of the queue to be scheduled on. |
| [reject] | <code>String</code> | Reject callback. |

<a name="Generator+run"></a>

### generator.run([cb]) ⇒ <code>Promise</code>
Runs the generator, scheduling prototype methods on a run queue. Method names
will determine the order each method is run. Methods without special names
will run in the default queue.

Any method named `constructor` and any methods prefixed by a `_` won't be scheduled.

You can also supply the arguments for the method to be invoked. If none are
provided, the same values used to initialize the invoker are used to
initialize the invoked.

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>Promise</code> - Resolved once the process finish  

| Param | Type | Description |
| --- | --- | --- |
| [cb] | <code>function</code> | Deprecated: prefer to use the promise interface |

<a name="Generator+composeWith"></a>

### generator.composeWith(generator, options) ⇒ <code>this</code>
Compose this generator with another one.

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>this</code> - This generator  

| Param | Type | Description |
| --- | --- | --- |
| generator | <code>String</code> \| <code>Object</code> \| <code>Array</code> | The path to the generator module or an object (see examples) |
| options | <code>Object</code> | The options passed to the Generator |

**Example** *(Using a peerDependency generator)*  
```js
this.composeWith('bootstrap', { sass: true });
```
**Example** *(Using a direct dependency generator)*  
```js
this.composeWith(require.resolve('generator-bootstrap/app/main.js'), { sass: true });
```
**Example** *(Passing a Generator class)*  
```js
this.composeWith({ Generator: MyGenerator, path: '../generator-bootstrap/app/main.js' }, { sass: true });
```
<a name="Generator+rootGeneratorName"></a>

### generator.rootGeneratorName() ⇒ <code>String</code>
Determine the root generator name (the one who's extending Generator).

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - The name of the root generator  
<a name="Generator+rootGeneratorVersion"></a>

### generator.rootGeneratorVersion() ⇒ <code>String</code>
Determine the root generator version (the one who's extending Generator).

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - The version of the root generator  
<a name="Generator+destinationRoot"></a>

### generator.destinationRoot(rootPath) ⇒ <code>String</code>
Change the generator destination root directory.
This path is used to find storage, when using a file system helper method (like
`this.write` and `this.copy`)

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - destination root path  

| Param | Type | Description |
| --- | --- | --- |
| rootPath | <code>String</code> | new destination root path |

<a name="Generator+sourceRoot"></a>

### generator.sourceRoot(rootPath) ⇒ <code>String</code>
Change the generator source root directory.
This path is used by multiples file system methods like (`this.read` and `this.copy`)

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - source root path  

| Param | Type | Description |
| --- | --- | --- |
| rootPath | <code>String</code> | new source root path |

<a name="Generator+templatePath"></a>

### generator.templatePath(...path) ⇒ <code>String</code>
Join a path to the source root.

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - joined path  

| Param | Type |
| --- | --- |
| ...path | <code>String</code> | 

<a name="Generator+destinationPath"></a>

### generator.destinationPath(...path) ⇒ <code>String</code>
Join a path to the destination root.

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - joined path  

| Param | Type |
| --- | --- |
| ...path | <code>String</code> | 

<a name="Generator+determineAppname"></a>

### generator.determineAppname() ⇒ <code>String</code>
Determines the name of the application.

First checks for name in bower.json.
Then checks for name in package.json.
Finally defaults to the name of the current directory.

**Kind**: instance method of [<code>Generator</code>](#Generator)  
**Returns**: <code>String</code> - The name of the application  
<a name="Generator+registerTransformStream"></a>

### generator.registerTransformStream(stream) ⇒ <code>this</code>
Add a transform stream to the commit stream.

Most usually, these transform stream will be Gulp plugins.

**Kind**: instance method of [<code>Generator</code>](#Generator)  

| Param | Type | Description |
| --- | --- | --- |
| stream | <code>stream.Transform</code> \| <code>Array.&lt;stream.Transform&gt;</code> | An array of Transform stream or a single one. |

