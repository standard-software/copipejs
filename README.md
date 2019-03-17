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

### 0.2.0
#### 2019/03/17(Sun)
- Updated package.json, npm script.
- Added type check function (multiple arguments).  
copipe.type:{
  isUndefined, isNull, isBoolean, isNumber, isInteger, isFunction, isObject, isArray, isDate
}
- Added type check function.  
for isNot---, is---Array, isNot---Array.  
- Added function.  
copipe.syntax:{checkEqual, alert}
- Added test code.  
test_build_copipe.js, test_copipe_core.js, test_release_copipe.js, test_release_copipe.mjs

### More Info
[VERSION_EN.md](https://github.com/standard-software/copipejs/blob/master/VERSION_EN.md)
