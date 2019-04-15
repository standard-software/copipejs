# Copipe.js
simple code parts

## URL
standard-software/Copipe.js: simple code parts  
https://github.com/standard-software/copipejs

@standard-software/copipe - npm  
https://www.npmjs.com/package/@standard-software/copipe


## install
    npm i @standard-software/copipe

## How to use

### type CommonJS

```
// index.js
const copipe = require("@standard-software/copipe");

console.log(
  'copipe.VERSION', copipe.VERSION
);
```
    node index.js

### type ES Modules

```
// index.mjs
import copipe from '@standard-software/copipe';

console.log(
  'copipe.VERSION', copipe.VERSION
);
```
    node --experimental-modules index.mjs


## Version

### 0.4.3
### 2019/04/15(Mon)
- Updated consoleHook._accept

### 0.4.2
### 2019/04/15(Mon)
- Updated test code

### 0.4.1
### 2019/04/12(Fri)
- Updated copipe.consoleHook 
  only hookLog add hookInfo hookWarn hookError hookDebug
- Updated test_consoleHook

### 0.4.0
### 2019/04/12(Fri)
- Added copipe.consoleHook copipe_console.ts
- Added copipe.type:{ isRegExp, isNotRegExp, isRegExpArray, isNotRegExpArray }
- Added copipe.string:{ match }

### More Info
[VERSION_EN.md](https://github.com/standard-software/copipejs/blob/master/VERSION_EN.md)
