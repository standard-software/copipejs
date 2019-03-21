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

### 0.2.1
#### 2019/03/21(Thu)
- Updated FileTitle
- Updated hide type check function single arguments (_is---)
- Updated NameSpace structure.  
  copipe.type.isNull etc = copile.isNull etc
  copipe.syntax.assert etc = copipe.assert etc
- Added function or
- Added function if_
- Added function switch_

### More Info
[VERSION_EN.md](https://github.com/standard-software/copipejs/blob/master/VERSION_EN.md)
