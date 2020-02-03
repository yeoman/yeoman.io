## Modules

<dl>
<dt><a href="#module_promptSuggestion">promptSuggestion</a></dt>
<dd><p>Utilities to allow remembering answers to Inquirer.js prompts</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#Conflicter">Conflicter</a></dt>
<dd><p>The Conflicter is a module that can be used to detect conflict between files. Each
Generator file system helpers pass files through this module to make sure they don&#39;t
break a user file.</p>
<p>When a potential conflict is detected, we prompt the user and ask them for
confirmation before proceeding with the actual write.</p>
</dd>
<dt><a href="#Storage">Storage</a></dt>
<dd><p>Storage instances handle a json file where Generator authors can store data.</p>
<p>The <code>Generator</code> class instantiate the storage named <code>config</code> by default.</p>
</dd>
</dl>

<a name="module_promptSuggestion"></a>

## promptSuggestion
Utilities to allow remembering answers to Inquirer.js prompts

<a name="Conflicter"></a>

## Conflicter
The Conflicter is a module that can be used to detect conflict between files. Each
Generator file system helpers pass files through this module to make sure they don't
break a user file.

When a potential conflict is detected, we prompt the user and ask them for
confirmation before proceeding with the actual write.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| force | <code>Boolean</code> | same as the constructor argument |


* [Conflicter](#Conflicter)
    * [new Conflicter(adapter, force, bail)](#new_Conflicter_new)
    * [.checkForCollision(filepath, contents, callback)](#Conflicter+checkForCollision)
    * [.resolve(cb)](#Conflicter+resolve)
    * [._printDiff(file)](#Conflicter+_printDiff)
    * [._detectConflict(file)](#Conflicter+_detectConflict) ⇒ <code>Boolean</code>
    * [.collision(file, cb)](#Conflicter+collision)

<a name="new_Conflicter_new"></a>

### new Conflicter(adapter, force, bail)

| Param | Type | Description |
| --- | --- | --- |
| adapter | <code>TerminalAdapter</code> | The generator adapter |
| force | <code>Boolean</code> | When set to true, we won't check for conflict. (the                           conflicter become a passthrough) |
| bail | <code>Boolean</code> | When set to true, we will abort on first conflict. (used for                           testing reproducibility) |

<a name="Conflicter+checkForCollision"></a>

### conflicter.checkForCollision(filepath, contents, callback)
Add a file to conflicter queue

**Kind**: instance method of [<code>Conflicter</code>](#Conflicter)  

| Param | Type | Description |
| --- | --- | --- |
| filepath | <code>String</code> | File destination path |
| contents | <code>String</code> | File new contents |
| callback | <code>function</code> | callback to be called once we know if the user want to                              proceed or not. |

<a name="Conflicter+resolve"></a>

### conflicter.resolve(cb)
Process the _potential conflict_ queue and ask the user to resolve conflict when they
occur

The user is presented with the following options:

  - `Y` Yes, overwrite
  - `n` No, do not overwrite
  - `a` All, overwrite this and all others
  - `x` Exit, abort
  - `d` Diff, show the differences between the old and the new
  - `h` Help, show this help

**Kind**: instance method of [<code>Conflicter</code>](#Conflicter)  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | Callback once every conflict are resolved. (note that each                       file can specify it's own callback. See `#checkForCollision()`) |

<a name="Conflicter+_printDiff"></a>

### conflicter.\_printDiff(file)
Print the file differences to console

**Kind**: instance method of [<code>Conflicter</code>](#Conflicter)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Object</code> | File object respecting this interface: { path, contents } |

<a name="Conflicter+_detectConflict"></a>

### conflicter.\_detectConflict(file) ⇒ <code>Boolean</code>
Detect conflicts between file contents at `filepath` with the `contents` passed to the
function

If `filepath` points to a folder, we'll always return true.

Based on detect-conflict module

**Kind**: instance method of [<code>Conflicter</code>](#Conflicter)  
**Returns**: <code>Boolean</code> - `true` if there's a conflict, `false` otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Object</code> | File object respecting this interface: { path, contents } |

<a name="Conflicter+collision"></a>

### conflicter.collision(file, cb)
Check if a file conflict with the current version on the user disk

A basic check is done to see if the file exists, if it does:

  1. Read its content from  `fs`
  2. Compare it with the provided content
  3. If identical, mark it as is and skip the check
  4. If diverged, prepare and show up the file collision menu

**Kind**: instance method of [<code>Conflicter</code>](#Conflicter)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>Object</code> | File object respecting this interface: { path, contents } |
| cb | <code>function</code> | Callback receiving a status string ('identical', 'create',                       'skip', 'force') |

<a name="Storage"></a>

## Storage
Storage instances handle a json file where Generator authors can store data.

The `Generator` class instantiate the storage named `config` by default.

**Kind**: global class  

* [Storage](#Storage)
    * [new Storage([name], fs, configPath)](#new_Storage_new)
    * [.save()](#Storage+save)
    * [.get(key)](#Storage+get) ⇒ <code>\*</code>
    * [.getAll()](#Storage+getAll) ⇒ <code>Object</code>
    * [.set(key, val)](#Storage+set) ⇒ <code>\*</code>
    * [.delete(key)](#Storage+delete)
    * [.defaults(defaults)](#Storage+defaults) ⇒ <code>\*</code>

<a name="new_Storage_new"></a>

### new Storage([name], fs, configPath)

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>String</code> | The name of the new storage (this is a namespace) |
| fs | <code>mem-fs-editor</code> | A mem-fs editor instance |
| configPath | <code>String</code> | The filepath used as a storage. |

**Example**  
```js
class extend Generator {
  writing: function() {
    this.config.set('coffeescript', false);
  }
}
```
<a name="Storage+save"></a>

### storage.save()
Save a new object of values

**Kind**: instance method of [<code>Storage</code>](#Storage)  
<a name="Storage+get"></a>

### storage.get(key) ⇒ <code>\*</code>
Get a stored value

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>\*</code> - The stored value. Any JSON valid type could be returned  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key under which the value is stored. |

<a name="Storage+getAll"></a>

### storage.getAll() ⇒ <code>Object</code>
Get all the stored values

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>Object</code> - key-value object  
<a name="Storage+set"></a>

### storage.set(key, val) ⇒ <code>\*</code>
Assign a key to a value and schedule a save.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>\*</code> - val  Whatever was passed in as val.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key under which the value is stored |
| val | <code>\*</code> | Any valid JSON type value (String, Number, Array, Object). |

<a name="Storage+delete"></a>

### storage.delete(key)
Delete a key from the store and schedule a save.

**Kind**: instance method of [<code>Storage</code>](#Storage)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | The key under which the value is stored. |

<a name="Storage+defaults"></a>

### storage.defaults(defaults) ⇒ <code>\*</code>
Setup the store with defaults value and schedule a save.
If keys already exist, the initial value is kept.

**Kind**: instance method of [<code>Storage</code>](#Storage)  
**Returns**: <code>\*</code> - val  Returns the merged options.  

| Param | Type | Description |
| --- | --- | --- |
| defaults | <code>Object</code> | Key-value object to store. |

