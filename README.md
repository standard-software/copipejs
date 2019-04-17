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

### 0.5.3
#### 2019/04/18(Thu)
- Updated npm run script for integration win mac
- Installed package.json cli-tool cpx opener
- Changed Folder Structure

### 0.5.2
#### 2019/04/17(Wed)
- Added copipe_polyfill.ts
- for IE11 test OK for Windows

### 0.5.1
#### 2019/04/16(Tue)
- CRLF >> LF
- package.json add command for Mac for Win
- Added string.includes
- Updated consoleHook

### 0.5.0
#### 2019/04/16(Tue)
- Added HTML web version
  test_build.html / test_release.html

### More Info
[VERSION_EN.md](https://github.com/standard-software/copipejs/blob/master/VERSION_EN.md)
