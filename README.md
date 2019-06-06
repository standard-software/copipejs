# Copipe.js
simple code parts

## URL
standard-software/Copipe.js: simple code parts  
https://github.com/standard-software/copipejs

@standard-software/copipe - npm  
https://www.npmjs.com/package/@standard-software/copipe


## for node webpack etc.. 

### npm install
    npm i @standard-software/copipe

### How to use type CommonJS

```
// index.js
const copipe = require("@standard-software/copipe");

console.log(
  'copipe.VERSION', copipe.VERSION
);
```
    node index.js

### How to use type ES Modules

```
// index.mjs
import copipe from '@standard-software/copipe';

console.log(
  'copipe.VERSION', copipe.VERSION
);
```
    node --experimental-modules index.mjs

## for web

### Setting to use Debug Version

```
<script>
  var require = function() {
    return copipe;
  };
  var module = {};
</script>
  <script src="../copipe_core.js"></script>
  <script src="../copipe_console.js"></script>
  <script src="../copipe_polyfill.js"></script>
<script>
  console.log(copipe.VERSION);
</script>
```
- refer to ./debug/web/test/test_debug_copipe.html

### Setting to use Release Version

```
<script>
  var module = {};
</script>
  <script src="../copipe.js"></script>
<script>
  console.log(copipe.VERSION);
</script>
```
- refer to ./release/web/test/test_release_copipe.html

## for WSH(Window Scripting Host / Windows10)

### Setting to use Debug Version

- refer to ./debug/wsh/test/test_debug_copipe.wsf

### Setting to use Release Version

- refer to ./release/wsh/test/test_release_copipe.wsf


## Version

### 1.1.0
#### 2019/06/06(Thu)
- update isThrown no args thrown value.
- update compare.match
- update string.include and consoleHook
- add Polyfill statsWith endsWith
- update compare.equal or
- add compare.matchValue defaultValue

### 1.0.1
#### 2019/06/02(Sun)
- update consoleHook._accept
  check args second over value

### 1.0.0
#### 2019/05/22(Wed)
- update README.md for Web for WSH
- Support Windows WSH (debug/release)
- update README.md for Web for WSH
- update pacage.json tsc command
- Add Array.some polyfill
- isThrownException no exceptionName support
- update copipe_node.js forceMkDirSync

### More Info
[VERSION_EN.md](https://github.com/standard-software/copipejs/blob/master/VERSION_EN.md)
