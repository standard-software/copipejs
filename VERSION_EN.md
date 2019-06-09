# Copipe.js

## Version

### 1.2.0
#### 2019/06/08(Sat)
- add numberToString, stringToNumber, stringToInteger
- add isNaNStrict
- add matchFormat

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

### 0.7.4
#### 2019/05/17(Fri)
- Update npm script 
- Created copipe_node.js function forceMkDirSync
- Uninstalled cpx

### 0.7.3
#### 2019/05/16(Thu)
- Created copipe.min.js and copipe.js for node and web
- Changed folder structure build >> debug
  same npm script name
  same debug file name

### 0.7.2
#### 2019/05/14(Tue)
- Update miss README.md and VERSION_EN.md

### 0.7.1
#### 2019/05/14(Tue)
- Uninstall prettier with eslint

### 0.7.0
#### 2019/05/08(Wed)
- Introduction eslint

### 0.6.3
#### 2019/04/27(Sat)
- Updated test code
- Updated npm script code

### 0.6.2
#### 2019/04/26(Fri)
- Updated package.json npm scripts
- Added call scripts
  start_node_build.js
  start_node_release.js
  start_web_build.js
  start_web_release.js
- Updated test code
  test_copipe_core.ts, test_copipe_console.ts

### 0.6.1
#### 2019/04/25(Thu)
- Updated package.json main setting

### 0.6.0
#### 2019/04/25(Thu)
- Changed testcode js >> ts
  test_copipe_core.ts, test_copipe_console.ts
- Changed compileoption "noImplicitAny": true >> false

### 0.5.4
#### 2019/04/18(Thu)
- Changed structure folder
  test file folder, test html file

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

### 0.4.3
#### 2019/04/15(Mon)
- Updated consoleHook._accept

### 0.4.2
#### 2019/04/15(Mon)
- Updated test code

### 0.4.1
#### 2019/04/12(Fri)
- Updated copipe.consoleHook 
  only hookLog add hookInfo hookWarn hookError hookDebug
- Updated test_consoleHook

### 0.4.0
#### 2019/04/12(Fri)
- Added copipe.consoleHook copipe_console.ts
- Added copipe.type:{ isRegExp, isNotRegExp, isRegExpArray, isNotRegExpArray }
- Added copipe.string:{ match }

### 0.3.3
#### 2019/04/10(Wed)
- Updated copipe.syntax.checkEqual >> copipe.test.checkEqual.
- Updated error message etc.

### 0.3.2
#### 2019/04/01(Mon)
- Updated checkThrow >> isThrown
- Added isThrownValue isThrownException isNotThrown

### 0.3.1
#### 2019/03/31(Sun)
- Added function checkThrow
- file move test_copipe_core.js
- Added isException

### 0.3.0
#### 2019/03/28(Thu)
- Added function guard
- Updated function assert
  throw TypeError

### 0.2.2
#### 2019/03/21(Thu)
- Added function equal
- Added function sc (second call)

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

### 0.2.0
#### 2019/03/17(Sun)
- Updated package.json, npm script.
- Added type check function (multiple arguments).  
copipe.type:{  
  isUndefined, isNull, isBoolean, isNumber, isInteger, isFunction, isObject, isArray, isDate  
}
- Added type check function (single arguments _is---).  
- Added type check function.  
for isNot---, is---Array, isNot---Array.  
- Added function.  
copipe.syntax:{checkEqual, alert}
copipe.type:{objectToString}
- Added test code.  
test_build_copipe.js, test_copipe_core.js, test_release_copipe.js, test_release_copipe.mjs

### 0.1.8
#### 2019/03/16(Sat)
assert _isUndefined _isNull _isBoolean + Test Code
create VERSION_EN.md

### 0.1.7
#### 2019/03/15(Fri)  
Package.json main miss bug fix

### 0.1.6
#### 2019/03/15(Fri)  
TypeScript + WebPack Environment

### 0.1.5
#### 2019/03/03(Sun)  
TypeScript Environment

### 0.1.4
#### 2019/02/20(Wed)  
update file directory structure

### 0.1.3
#### 2019/02/19(Tue)  
update README.md

### 0.1.2
#### 2019/02/19(Tue)  
update file directory structure

### 0.1.1
#### 2019/02/19(Tue)  
update README.md

### 0.1.0 
#### 2019/01/21(Mon)  
update README.md

### 0.0.3
#### 2019/01/21(Mon)  
update README.md

### 0.0.2
#### 2019/01/21(Mon)  
add index.mjs  
ES Modules 

### 0.0.1  
#### 2019/01/21(Mon)  
First Release  
Only Console.log output
