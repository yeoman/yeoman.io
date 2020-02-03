## Modules

<dl>
<dt><a href="#module_env/log">env/log</a></dt>
<dd></dd>
<dt><a href="#module_env/util">env/util</a></dt>
<dd></dd>
</dl>

<a name="module_env/log"></a>

## env/log
<a name="module_env/util"></a>

## env/util

* [env/util](#module_env/util)
    * [.log](#module_env/util.log)
    * [.duplicateEnv(initialEnv)](#module_env/util.duplicateEnv) ⇒ <code>Environment</code>

<a name="module_env/util.log"></a>

### env/util.log
Log utility

**Kind**: static property of [<code>env/util</code>](#module_env/util)  
**See**: [env/log](env/log)  
<a name="module_env/util.duplicateEnv"></a>

### env/util.duplicateEnv(initialEnv) ⇒ <code>Environment</code>
Create a "sloppy" copy of an initial Environment object. The focus of this method is on
performance rather than correctly deep copying every property or recreating a correct
instance. Use carefully and don't rely on `hasOwnProperty` of the copied environment.

Every property are shared except the runLoop which is regenerated.

**Kind**: static method of [<code>env/util</code>](#module_env/util)  
**Returns**: <code>Environment</code> - sloppy copy of the initial Environment  

| Param | Type | Description |
| --- | --- | --- |
| initialEnv | <code>Environment</code> | an Environment instance |

