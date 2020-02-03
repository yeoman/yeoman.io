## Mixins

<dl>
<dt><a href="#actions/help">actions/help</a></dt>
<dd></dd>
<dt><a href="#actions/install">actions/install</a></dt>
<dd></dd>
<dt><a href="#actions/spawn-command">actions/spawn-command</a></dt>
<dd></dd>
<dt><a href="#actions/user">actions/user</a></dt>
<dd></dd>
</dl>

<a name="actions/help"></a>

## actions/help
**Kind**: global mixin  

* [actions/help](#actions/help)
    * [.help()](#actions/help.help) ⇒ <code>String</code>
    * [.usage()](#actions/help.usage) ⇒ <code>String</code>
    * [.desc(description)](#actions/help.desc)
    * [.argumentsHelp()](#actions/help.argumentsHelp) ⇒ <code>String</code>
    * [.optionsHelp()](#actions/help.optionsHelp) ⇒ <code>String</code>

<a name="actions/help.help"></a>

### actions/help.help() ⇒ <code>String</code>
Tries to get the description from a USAGE file one folder above the
source root otherwise uses a default description

**Kind**: static method of [<code>actions/help</code>](#actions/help)  
**Returns**: <code>String</code> - Help message of the generator  
<a name="actions/help.usage"></a>

### actions/help.usage() ⇒ <code>String</code>
Output usage information for this given generator, depending on its arguments
or options

**Kind**: static method of [<code>actions/help</code>](#actions/help)  
**Returns**: <code>String</code> - Usage information of the generator  
<a name="actions/help.desc"></a>

### actions/help.desc(description)
Simple setter for custom `description` to append on help output.

**Kind**: static method of [<code>actions/help</code>](#actions/help)  

| Param | Type |
| --- | --- |
| description | <code>String</code> | 

<a name="actions/help.argumentsHelp"></a>

### actions/help.argumentsHelp() ⇒ <code>String</code>
Get help text for arguments

**Kind**: static method of [<code>actions/help</code>](#actions/help)  
**Returns**: <code>String</code> - Text of options in formatted table  
<a name="actions/help.optionsHelp"></a>

### actions/help.optionsHelp() ⇒ <code>String</code>
Get help text for options

**Kind**: static method of [<code>actions/help</code>](#actions/help)  
**Returns**: <code>String</code> - Text of options in formatted table  
<a name="actions/install"></a>

## actions/install
**Kind**: global mixin  

* [actions/install](#actions/install)
    * [.scheduleInstallTask(installer, [paths], [options], [spawnOptions])](#actions/install.scheduleInstallTask)
    * [.installDependencies([options])](#actions/install.installDependencies)
    * [.bowerInstall([cmpnt], [options], [spawnOptions])](#actions/install.bowerInstall)
    * [.npmInstall([pkgs], [options], [spawnOptions])](#actions/install.npmInstall)
    * [.yarnInstall([pkgs], [options], [spawnOptions])](#actions/install.yarnInstall)

<a name="actions/install.scheduleInstallTask"></a>

### actions/install.scheduleInstallTask(installer, [paths], [options], [spawnOptions])
Combine package manager cmd line arguments and run the `install` command.

During the `install` step, every command will be scheduled to run once, on the
run loop.

**Kind**: static method of [<code>actions/install</code>](#actions/install)  

| Param | Type | Description |
| --- | --- | --- |
| installer | <code>String</code> | Which package manager to use |
| [paths] | <code>String</code> \| <code>Array</code> | Packages to install. Use an empty string for `npm install` |
| [options] | <code>Object</code> | Options to pass to `dargs` as arguments |
| [spawnOptions] | <code>Object</code> | Options to pass `child_process.spawn`. ref                                https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options |

<a name="actions/install.installDependencies"></a>

### actions/install.installDependencies([options])
Runs `npm` and `bower`, in sequence, in the generated directory and prints a
message to let the user know.

**Kind**: static method of [<code>actions/install</code>](#actions/install)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  |  |
| [options.npm] | <code>Boolean</code> \| <code>Object</code> | <code>true</code> | whether to run `npm install` or can be options to pass to `dargs` as arguments |
| [options.bower] | <code>Boolean</code> \| <code>Object</code> | <code>true</code> | whether to run `bower install` or can be options to pass to `dargs` as arguments |
| [options.yarn] | <code>Boolean</code> \| <code>Object</code> | <code>false</code> | whether to run `yarn install` or can be options to pass to `dargs` as arguments |
| [options.skipMessage] | <code>Boolean</code> | <code>false</code> | whether to log the used commands |

**Example**  
```js
this.installDependencies({
  bower: true,
  npm: true
});
```
**Example**  
```js
this.installDependencies({
  yarn: {force: true},
  npm: false
});
```
<a name="actions/install.bowerInstall"></a>

### actions/install.bowerInstall([cmpnt], [options], [spawnOptions])
Receives a list of `components` and an `options` object to install through bower.

The installation will automatically run during the run loop `install` phase.

**Kind**: static method of [<code>actions/install</code>](#actions/install)  

| Param | Type | Description |
| --- | --- | --- |
| [cmpnt] | <code>String</code> \| <code>Array</code> | Components to install |
| [options] | <code>Object</code> | Options to pass to `dargs` as arguments |
| [spawnOptions] | <code>Object</code> | Options to pass `child_process.spawn`. |

<a name="actions/install.npmInstall"></a>

### actions/install.npmInstall([pkgs], [options], [spawnOptions])
Receives a list of `packages` and an `options` object to install through npm.

The installation will automatically run during the run loop `install` phase.

**Kind**: static method of [<code>actions/install</code>](#actions/install)  

| Param | Type | Description |
| --- | --- | --- |
| [pkgs] | <code>String</code> \| <code>Array</code> | Packages to install |
| [options] | <code>Object</code> | Options to pass to `dargs` as arguments |
| [spawnOptions] | <code>Object</code> | Options to pass `child_process.spawn`. |

<a name="actions/install.yarnInstall"></a>

### actions/install.yarnInstall([pkgs], [options], [spawnOptions])
Receives a list of `packages` and an `options` object to install through yarn.

The installation will automatically run during the run loop `install` phase.

**Kind**: static method of [<code>actions/install</code>](#actions/install)  

| Param | Type | Description |
| --- | --- | --- |
| [pkgs] | <code>String</code> \| <code>Array</code> | Packages to install |
| [options] | <code>Object</code> | Options to pass to `dargs` as arguments |
| [spawnOptions] | <code>Object</code> | Options to pass `child_process.spawn`. |

<a name="actions/spawn-command"></a>

## actions/spawn-command
**Kind**: global mixin  

* [actions/spawn-command](#actions/spawn-command)
    * [.spawnCommand(command, args, [opt])](#actions/spawn-command.spawnCommand) ⇒ <code>String</code>
    * [.spawnCommandSync(command, args, [opt])](#actions/spawn-command.spawnCommandSync) ⇒ <code>String</code>

<a name="actions/spawn-command.spawnCommand"></a>

### actions/spawn-command.spawnCommand(command, args, [opt]) ⇒ <code>String</code>
Normalize a command across OS and spawn it (asynchronously).

**Kind**: static method of [<code>actions/spawn-command</code>](#actions/spawn-command)  
**Returns**: <code>String</code> - spawned process reference  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>String</code> | program to execute |
| args | <code>Array</code> | list of arguments to pass to the program |
| [opt] | <code>object</code> | any cross-spawn options |

<a name="actions/spawn-command.spawnCommandSync"></a>

### actions/spawn-command.spawnCommandSync(command, args, [opt]) ⇒ <code>String</code>
Normalize a command across OS and spawn it (synchronously).

**Kind**: static method of [<code>actions/spawn-command</code>](#actions/spawn-command)  
**Returns**: <code>String</code> - spawn.sync result  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>String</code> | program to execute |
| args | <code>Array</code> | list of arguments to pass to the program |
| [opt] | <code>object</code> | any cross-spawn options |

<a name="actions/user"></a>

## actions/user
**Kind**: global mixin  

* [actions/user](#actions/user)
    * [.git.name()](#actions/user.git.name) ⇒ <code>String</code>
    * [.git.email()](#actions/user.git.email) ⇒ <code>String</code>
    * [.github.username()](#actions/user.github.username) ⇒ <code>Promise</code>

<a name="actions/user.git.name"></a>

### actions/user.git.name() ⇒ <code>String</code>
Retrieves user's name from Git in the global scope or the project scope
(it'll take what Git will use in the current context)

**Kind**: static method of [<code>actions/user</code>](#actions/user)  
**Returns**: <code>String</code> - configured git name or undefined  
<a name="actions/user.git.email"></a>

### actions/user.git.email() ⇒ <code>String</code>
Retrieves user's email from Git in the global scope or the project scope
(it'll take what Git will use in the current context)

**Kind**: static method of [<code>actions/user</code>](#actions/user)  
**Returns**: <code>String</code> - configured git email or undefined  
<a name="actions/user.github.username"></a>

### actions/user.github.username() ⇒ <code>Promise</code>
Retrieves GitHub's username from the GitHub API

**Kind**: static method of [<code>actions/user</code>](#actions/user)  
**Returns**: <code>Promise</code> - Resolved with the GitHub username or rejected if unable to
                  get the information  
