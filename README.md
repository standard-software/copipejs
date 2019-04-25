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

### 0.6.1
#### 2019/04/25(Thu)
- Updated package.json main setting

### 0.6.0
#### 2019/04/25(Thu)
- Changed testcode js >> ts
  test_copipe_core.ts, test_copipe_console.ts
- Changed compileoption "noImplicitAny": true >> false
- Updated npm script setting

### More Info
[VERSION_EN.md](https://github.com/standard-software/copipejs/blob/master/VERSION_EN.md)
