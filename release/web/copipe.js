window.copipe=function(t){var r={};function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=t,i.c=r,i.d=function(t,r,n){i.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,r){if(1&r&&(t=i(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)i.d(n,e,function(r){return t[r]}.bind(null,e));return n},i.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="",i(i.s=0)}([function(t,r,i){t.exports=i(1)},function(t,r,i){"use strict";var n=i(2);t.exports=n},function(t,r,i){"use strict";var n,e=i(3);!function(t){t.VERSION=e.VERSION,t.type=e.type,t.syntax=e.syntax,t.string=e.string,t.test=e.test,t.consoleHook=e.consoleHook,t.isUndefined=t.type.isUndefined,t.isNull=t.type.isNull,t.isBoolean=t.type.isBoolean,t.isNumber=t.type.isNumber,t.isInteger=t.type.isInteger,t.isString=t.type.isString,t.isFunction=t.type.isFunction,t.isObject=t.type.isObject,t.isArray=t.type.isArray,t.isDate=t.type.isDate,t.isRegExp=t.type.isRegExp,t.isException=t.type.isException,t.isNotUndefined=t.type.isNotUndefined,t.isNotNull=t.type.isNotNull,t.isNotBoolean=t.type.isNotBoolean,t.isNotNumber=t.type.isNotNumber,t.isNotInteger=t.type.isNotInteger,t.isNotString=t.type.isNotString,t.isNotFunction=t.type.isNotFunction,t.isNotObject=t.type.isNotObject,t.isNotArray=t.type.isNotArray,t.isNotDate=t.type.isNotDate,t.isNotRegExp=t.type.isNotRegExp,t.isNotException=t.type.isNotException,t.isUndefinedArray=t.type.isUndefinedArray,t.isNullArray=t.type.isNullArray,t.isBooleanArray=t.type.isBooleanArray,t.isNumberArray=t.type.isNumberArray,t.isIntegerArray=t.type.isIntegerArray,t.isStringArray=t.type.isStringArray,t.isFunctionArray=t.type.isFunctionArray,t.isObjectArray=t.type.isObjectArray,t.isArrayArray=t.type.isArrayArray,t.isDateArray=t.type.isDateArray,t.isRegExpArray=t.type.isRegExpArray,t.isExceptionArray=t.type.isExceptionArray,t.isNotUndefinedArray=t.type.isNotUndefinedArray,t.isNotNullArray=t.type.isNotNullArray,t.isNotBooleanArray=t.type.isNotBooleanArray,t.isNotNumberArray=t.type.isNotNumberArray,t.isNotIntegerArray=t.type.isNotIntegerArray,t.isNotStringArray=t.type.isNotStringArray,t.isNotFunctionArray=t.type.isNotFunctionArray,t.isNotObjectArray=t.type.isNotObjectArray,t.isNotArrayArray=t.type.isNotArrayArray,t.isNotDateArray=t.type.isNotDateArray,t.isNotRegExpArray=t.type.isNotRegExpArray,t.isNotExceptionArray=t.type.isNotExceptionArray,t.isUndef=t.type.isUndef,t.isBool=t.type.isBool,t.isNum=t.type.isNum,t.isInt=t.type.isInt,t.isStr=t.type.isStr,t.isFunc=t.type.isFunc,t.isObj=t.type.isObj,t.isExcept=t.type.isExcept,t.isNotUndef=t.type.isNotUndef,t.isNotBool=t.type.isNotBool,t.isNotNum=t.type.isNotNum,t.isNotInt=t.type.isNotInt,t.isNotStr=t.type.isNotStr,t.isNotFunc=t.type.isNotFunc,t.isNotObj=t.type.isNotObj,t.isNotExcept=t.type.isNotExcept,t.assert=t.syntax.assert,t.guard=t.syntax.guard,t.functionValue=t.syntax.functionValue,t.sc=t.syntax.sc,t.equal=t.syntax.equal,t.or=t.syntax.or,t.if_=t.syntax.if_,t.switch_=t.syntax.switch_,t.isThrown=t.syntax.isThrown,t.isThrownValue=t.syntax.isThrownValue,t.isThrownException=t.syntax.isThrownException,t.isNotThrown=t.syntax.isNotThrown,t.checkEqual=t.test.checkEqual,t.polyfillDefine=function(){String.prototype.includes||(String.prototype.includes=function(t,r){return"number"!=typeof r&&(r=0),!(r+t.length>this.length)&&-1!==this.indexOf(t,r)})},t.polyfillDefine()}(n||(n={})),t.exports=n},function(t,r,i){"use strict";var n,e=i(4);!function(t){var r;t.VERSION=e.VERSION,t.type=e.type,t.syntax=e.syntax,t.string=e.string,t.test=e.test,t.isUndefined=t.type.isUndefined,t.isNull=t.type.isNull,t.isBoolean=t.type.isBoolean,t.isNumber=t.type.isNumber,t.isInteger=t.type.isInteger,t.isString=t.type.isString,t.isFunction=t.type.isFunction,t.isObject=t.type.isObject,t.isArray=t.type.isArray,t.isDate=t.type.isDate,t.isRegExp=t.type.isRegExp,t.isException=t.type.isException,t.isNotUndefined=t.type.isNotUndefined,t.isNotNull=t.type.isNotNull,t.isNotBoolean=t.type.isNotBoolean,t.isNotNumber=t.type.isNotNumber,t.isNotInteger=t.type.isNotInteger,t.isNotString=t.type.isNotString,t.isNotFunction=t.type.isNotFunction,t.isNotObject=t.type.isNotObject,t.isNotArray=t.type.isNotArray,t.isNotDate=t.type.isNotDate,t.isNotRegExp=t.type.isNotRegExp,t.isNotException=t.type.isNotException,t.isUndefinedArray=t.type.isUndefinedArray,t.isNullArray=t.type.isNullArray,t.isBooleanArray=t.type.isBooleanArray,t.isNumberArray=t.type.isNumberArray,t.isIntegerArray=t.type.isIntegerArray,t.isStringArray=t.type.isStringArray,t.isFunctionArray=t.type.isFunctionArray,t.isObjectArray=t.type.isObjectArray,t.isArrayArray=t.type.isArrayArray,t.isDateArray=t.type.isDateArray,t.isRegExpArray=t.type.isRegExpArray,t.isExceptionArray=t.type.isExceptionArray,t.isNotUndefinedArray=t.type.isNotUndefinedArray,t.isNotNullArray=t.type.isNotNullArray,t.isNotBooleanArray=t.type.isNotBooleanArray,t.isNotNumberArray=t.type.isNotNumberArray,t.isNotIntegerArray=t.type.isNotIntegerArray,t.isNotStringArray=t.type.isNotStringArray,t.isNotFunctionArray=t.type.isNotFunctionArray,t.isNotObjectArray=t.type.isNotObjectArray,t.isNotArrayArray=t.type.isNotArrayArray,t.isNotDateArray=t.type.isNotDateArray,t.isNotRegExpArray=t.type.isNotRegExpArray,t.isNotExceptionArray=t.type.isNotExceptionArray,t.isUndef=t.type.isUndef,t.isBool=t.type.isBool,t.isNum=t.type.isNum,t.isInt=t.type.isInt,t.isStr=t.type.isStr,t.isFunc=t.type.isFunc,t.isObj=t.type.isObj,t.isExcept=t.type.isExcept,t.isNotUndef=t.type.isNotUndef,t.isNotBool=t.type.isNotBool,t.isNotNum=t.type.isNotNum,t.isNotInt=t.type.isNotInt,t.isNotStr=t.type.isNotStr,t.isNotFunc=t.type.isNotFunc,t.isNotObj=t.type.isNotObj,t.isNotExcept=t.type.isNotExcept,r=t.syntax,t.assert=r.assert,t.guard=r.guard,t.functionValue=r.functionValue,t.sc=r.sc,t.equal=r.equal,t.or=r.or,t.if_=r.if_,t.switch_=r.switch_,t.isThrown=r.isThrown,t.isThrownValue=r.isThrownValue,t.isThrownException=r.isThrownException,t.isNotThrown=r.isNotThrown,t.checkEqual=t.test.checkEqual,function(r){r.original={},r.original.log=console.log,r.original.info=console.info,r.original.warn=console.warn,r.original.error=console.error,r.original.debug=console.debug,r._hook=function(r,i){void 0===i&&(i=function(){}),t.guard(function(){return[t.or(r,["log","info","warn","error","debug"])]},function(){throw new Error("_hook args1(methodName) is not log|info|warn|error|debug.")}),console[r]=i},r.hookLog=function(t){r._hook("log",t)},r.hookInfo=function(t){r._hook("info",t)},r.hookWarn=function(t){r._hook("warn",t)},r.hookError=function(t){r._hook("error",t)},r.hookDebug=function(t){r._hook("debug",t)},r._unHook=function(i){t.guard(function(){return[t.or(i,["log","info","warn","error","debug"])]},function(){throw new Error("_unHook args1(methodName) is not log|info|warn|error|debug.")}),console[i]=r.original[i]},r.unHookLog=function(){r._unHook("log")},r.unHookInfo=function(){r._unHook("info")},r.unHookWarn=function(){r._unHook("warn")},r.unHookError=function(){r._unHook("error")},r.unHookDebug=function(){r._unHook("debug")},r._accept=function(i,n,e,o){void 0===o&&(o=r.original.log),t.guard(function(){return[[t.or(i,["log","info","warn","error","debug"]),"_accept args1(methodName) is not log|info|warn|error|debug."],[t.isArray(n),"_accept args2(acceptArray) type is not array."],[t.isUndefined(e)||t.isArray(e),"_accept args3(rejectArray) type is not array."]]},function(){throw new TypeError(t.guard.message())}),r._hook(i,function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];var s=0===n.length;s||(s=n.some(function(i){return!!t.isString(r[0])&&(t.guard(function(){return[[t.isString(i)||t.isRegExp(i),"_accept args2(acceptArray) array item type is not string|RegExp."]]},function(){throw new TypeError(t.guard.message())}),t.string.includes(r[0],i))})),s&&t.isArray(e)&&(s=!e.some(function(i){return!!t.isString(r[0])&&(t.guard(function(){return[[t.isString(i)||t.isRegExp(i),"_accept args3(rejectValue) array item type is not string|RegExp."]]},function(){throw new TypeError(t.guard.message())}),t.string.includes(r[0],i))})),s&&o.apply(void 0,r)})},r.acceptLog=function(t,i,n){void 0===n&&(n=r.original.log),r._accept("log",t,i,n)},r.acceptInfo=function(t,i,n){void 0===n&&(n=r.original.log),r._accept("info",t,i,n)},r.acceptWarn=function(t,i,n){void 0===n&&(n=r.original.log),r._accept("warn",t,i,n)},r.acceptError=function(t,i,n){void 0===n&&(n=r.original.log),r._accept("error",t,i,n)},r.acceptDebug=function(t,i,n){void 0===n&&(n=r.original.log),r._accept("debug",t,i,n)}}(t.consoleHook||(t.consoleHook={}))}(n||(n={})),t.exports=n},function(t,r,i){"use strict";var n;!function(t){t.VERSION="0.6.3 beta"}(n||(n={})),function(t){var r,i,n;!function(t){t.objectToString=function(t){return Object.prototype.toString.call(t)}}(r=t.type||(t.type={})),function(t){var i=r.objectToString,n=function(t){return function(r){return typeof r===t}},e=function(t){return function(r){return i(r)==="[object "+t+"]"}};t._isUndefined=n("undefined"),t._isNull=function(t){return null===t},t._isBoolean=n("boolean"),t._isNumber=function(t){return n("number")(t)&&isFinite(t)},t._isInteger=function(r){return!!t._isNumber(r)&&Math.round(r)===r},t._isString=n("string"),t._isFunction=n("function"),t._isObject=function(r){return!!(e("Object")(r)&&t._isNotNull(r)&&t._isNotUndefined(r))},t._isArray=e("Array"),t._isDate=e("Date"),t._isRegExp=e("RegExp"),t._isError=e("Error"),t._isException=function(r){if(t._isObject(r)){if("name"in r&&"message"in r)return!0}else if(t._isError(r))return!0;return!1},t._isNotUndefined=function(r){return!t._isUndefined(r)},t._isNotNull=function(r){return!t._isNull(r)},t._isNotBoolean=function(r){return!t._isBoolean(r)},t._isNotNumber=function(r){return!t._isNumber(r)},t._isNotInteger=function(r){return!t._isInteger(r)},t._isNotString=function(r){return!t._isString(r)},t._isNotFunction=function(r){return!t._isFunction(r)},t._isNotObject=function(r){return!t._isObject(r)},t._isNotArray=function(r){return!t._isArray(r)},t._isNotDate=function(r){return!t._isDate(r)},t._isNotRegExp=function(r){return!t._isRegExp(r)},t._isNotException=function(r){return!t._isException(r)}}(i||(i={})),function(r){var n=i._isBoolean,e=i._isString;r.assert=function(t,r){if(void 0===r&&(r=""),!n(t))throw new TypeError("assert args1(value) type is not boolean. message:"+r);if(!e(r))throw new TypeError("assert args2(message) type is not string. message:"+r);if(!t)throw new Error("assert error. message:"+r)};var o,s=!0;r.guard=function(i,n){if(o="",!1===s)return!1;if(!t.isFunction(i))throw new SyntaxError("guard args1(guardFunc) type is not function.");var e=i();if(!t.isArray(e))throw new SyntaxError("guard args1(guardFunc) result type is not array.");for(var a=0;a<e.length;a+=1){var u=void 0,y="";if(t.isArray(e[a])){if(!(1<=e[a].length))throw new SyntaxError("guard args1(guardFunc) result item is not array.length >= 1.");u=e[a][0],2<=e[a].length&&(y=e[a][1])}else u=e[a];if(u=r.functionValue(u),!t.isBoolean(u))throw new SyntaxError("guard args1(guardFunc) result item value type is not boolean.");if(!1===u){if(o=y,!t.isUndefined(n)){if(!t.isFunction(n))throw new SyntaxError("guard args2(runFunc) type is not function");n()}return!0}}return!1},r.guard.message=function(){return o},r.guard.status=function(t){return s=t},r.guard.on=function(){s=!0},r.guard.off=function(){s=!1}}(n=t.syntax||(t.syntax={})),function(t){var r=n.assert,e=i._isUndefined,o=i._isNull,s=i._isBoolean,a=i._isNumber,u=i._isInteger,y=i._isString,c=i._isFunction,N=i._isObject,p=i._isArray,g=i._isDate,f=i._isRegExp,l=i._isException,A=i._isNotUndefined,d=i._isNotNull,x=i._isNotBoolean,E=i._isNotNumber,b=i._isNotInteger,h=i._isNotString,_=i._isNotFunction,w=i._isNotObject,S=i._isNotArray,m=i._isNotDate,j=i._isNotRegExp,O=i._isNotException,F=function(t,i){r(c(t)),r(p(i));var n=i.length;if(0===n)return!1;if(1===n)return t(i[0]);for(var e=0;e<n;e+=1)if(!t(i[e]))return!1;return!0},I=function(t){return function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return F(t,r)}},B=function(t){return function(r){return F(t,r)}};t.isUndefined=I(e),t.isNull=I(o),t.isBoolean=I(s),t.isNumber=I(a),t.isInteger=I(u),t.isString=I(y),t.isFunction=I(c),t.isObject=I(N),t.isArray=I(p),t.isDate=I(g),t.isRegExp=I(f),t.isException=I(l),t.isNotUndefined=I(A),t.isNotNull=I(d),t.isNotBoolean=I(x),t.isNotNumber=I(E),t.isNotInteger=I(b),t.isNotString=I(h),t.isNotFunction=I(_),t.isNotObject=I(w),t.isNotArray=I(S),t.isNotDate=I(m),t.isNotRegExp=I(j),t.isNotException=I(O),t.isUndefinedArray=B(e),t.isNullArray=B(o),t.isBooleanArray=B(s),t.isNumberArray=B(a),t.isIntegerArray=B(u),t.isStringArray=B(y),t.isFunctionArray=B(c),t.isObjectArray=B(N),t.isArrayArray=B(p),t.isDateArray=B(g),t.isRegExpArray=B(f),t.isExceptionArray=B(l),t.isNotUndefinedArray=B(A),t.isNotNullArray=B(d),t.isNotBooleanArray=B(x),t.isNotNumberArray=B(E),t.isNotIntegerArray=B(b),t.isNotStringArray=B(h),t.isNotFunctionArray=B(_),t.isNotObjectArray=B(w),t.isNotArrayArray=B(S),t.isNotDateArray=B(m),t.isNotRegExpArray=B(j),t.isNotExceptionArray=B(O)}(r=t.type||(t.type={}))}(n||(n={})),function(t){!function(t){t.isUndef=t.isUndefined,t.isBool=t.isBoolean,t.isNum=t.isNumber,t.isInt=t.isInteger,t.isStr=t.isString,t.isFunc=t.isFunction,t.isObj=t.isObject,t.isExcept=t.isException,t.isNotUndef=t.isNotUndefined,t.isNotBool=t.isNotBoolean,t.isNotNum=t.isNotNumber,t.isNotInt=t.isNotInteger,t.isNotStr=t.isNotString,t.isNotFunc=t.isNotFunction,t.isNotObj=t.isNotObject,t.isNotExcept=t.isNotException}(t.type||(t.type={}))}(n||(n={})),function(t){!function(r){r.isThrown=function(r,i){if(!t.isFunction(r,i))throw new SyntaxError("isThrown args(targetFunc or compareFunc) type is not function.");try{r()}catch(t){return i(t)}return!1},r.isThrownValue=function(t,i){return r.isThrown(t,function(t){return t===i})},r.isThrownException=function(i,n){if(!t.isString(n))throw new SyntaxError("isThrownException args2(exceptionName) type is not string.");return r.isThrown(i,function(r){return!!t.isException(r)&&r.name===n})},r.isNotThrown=function(t){return!r.isThrown(t,function(){return!0})},r.functionValue=function(r){return t.isFunction(r)?r():r},r.sc=function(t,r){for(var i=[],n=2;n<arguments.length;n++)i[n-2]=arguments[n];return r.apply(void 0,[t].concat(i))},r.equal=function(t,r){return t===r},r.or=function(i,n){r.assert(t.isArray(n));for(var e=0;e<n.length;e+=1)if(i===n[e])return!0;return!1},r.if_=function(i){if(!t.isBoolean(i))throw new TypeError("if_ args(condition) type is not boolean.");var n=function(r){if(!t.isObject(r))throw new SyntaxError("if_() args type is not object.");if(t.isUndefined(r.then)&&t.isUndefined(r.else))throw new SyntaxError("if_() args .then .else both nothing.")};return i?function(t){return n(t),r.functionValue(t.then)}:function(t){return n(t),r.functionValue(t.else)}},r.switch_=function(i){return function(n){if(!t.isArray(n))throw new SyntaxError("switch_() args type is not array.");for(var e=0;e<n.length;e+=1)if(!t.isArray(n[e]))throw new SyntaxError("switch_() args type is not array in array.");for(e=0;e<n.length;e+=1){if(0===n[e].length)return;if(1===n[e].length)return r.functionValue(n[e][0]);if(n[e][0]===i)return r.functionValue(n[e][1])}}}}(t.syntax||(t.syntax={}))}(n||(n={})),function(t){!function(r){r.match=function(r,i){if(t.guard(function(){return[[t.isString(r),"match args1(value) type is not String."],[t.isString(i)||t.isRegExp(i),"match args2(compareValue) type is not String or RegExp."]]},function(){throw new TypeError(t.guard.message())}),t.isString(i))return r===i;if(t.isRegExp(i))return null!==r.match(i);throw new TypeError("match args2(compareValue) type is not String or RegExp.")},r.includes=function(r,i){if(t.guard(function(){return[[t.isString(r),"includes args1(value) type is not String."],[t.isString(i)||t.isRegExp(i),"includes args2(compareValue) type is not String or RegExp."]]},function(){throw new TypeError(t.guard.message())}),t.isString(i))return r.includes(String(i));if(t.isRegExp(i))return null!==r.match(i);throw new TypeError("includes args2(compareValue) type is not String or RegExp.")}}(t.string||(t.string={}))}(n||(n={})),function(t){!function(r){r.checkEqual=function(r,i,n){if(void 0===n&&(n=""),!t.isString(n))throw new SyntaxError("checkEqual args(message) type is not string.");return r===i||(n="Test: "+n+"\nA !== B\nA = "+String(r)+"\nB = "+String(i),console.log(n),!1)}}(t.test||(t.test={}))}(n||(n={})),function(t){var r,i;r=t.type,t.isUndefined=r.isUndefined,t.isNull=r.isNull,t.isBoolean=r.isBoolean,t.isNumber=r.isNumber,t.isInteger=r.isInteger,t.isString=r.isString,t.isFunction=r.isFunction,t.isObject=r.isObject,t.isArray=r.isArray,t.isDate=r.isDate,t.isRegExp=r.isRegExp,t.isException=r.isException,t.isNotUndefined=r.isNotUndefined,t.isNotNull=r.isNotNull,t.isNotBoolean=r.isNotBoolean,t.isNotNumber=r.isNotNumber,t.isNotInteger=r.isNotInteger,t.isNotString=r.isNotString,t.isNotFunction=r.isNotFunction,t.isNotObject=r.isNotObject,t.isNotArray=r.isNotArray,t.isNotDate=r.isNotDate,t.isNotRegExp=r.isNotRegExp,t.isNotException=r.isNotException,t.isUndefinedArray=r.isUndefinedArray,t.isNullArray=r.isNullArray,t.isBooleanArray=r.isBooleanArray,t.isNumberArray=r.isNumberArray,t.isIntegerArray=r.isIntegerArray,t.isStringArray=r.isStringArray,t.isFunctionArray=r.isFunctionArray,t.isObjectArray=r.isObjectArray,t.isArrayArray=r.isArrayArray,t.isDateArray=r.isDateArray,t.isRegExpArray=r.isRegExpArray,t.isExceptionArray=r.isExceptionArray,t.isNotUndefinedArray=r.isNotUndefinedArray,t.isNotNullArray=r.isNotNullArray,t.isNotBooleanArray=r.isNotBooleanArray,t.isNotNumberArray=r.isNotNumberArray,t.isNotIntegerArray=r.isNotIntegerArray,t.isNotStringArray=r.isNotStringArray,t.isNotFunctionArray=r.isNotFunctionArray,t.isNotObjectArray=r.isNotObjectArray,t.isNotArrayArray=r.isNotArrayArray,t.isNotDateArray=r.isNotDateArray,t.isNotRegExpArray=r.isNotRegExpArray,t.isNotExceptionArray=r.isNotExceptionArray,t.isUndef=r.isUndef,t.isBool=r.isBool,t.isNum=r.isNum,t.isInt=r.isInt,t.isStr=r.isStr,t.isFunc=r.isFunc,t.isObj=r.isObj,t.isExcept=r.isExcept,t.isNotUndef=r.isNotUndef,t.isNotBool=r.isNotBool,t.isNotNum=r.isNotNum,t.isNotInt=r.isNotInt,t.isNotStr=r.isNotStr,t.isNotFunc=r.isNotFunc,t.isNotObj=r.isNotObj,t.isNotExcept=r.isNotExcept,i=t.syntax,t.assert=i.assert,t.guard=i.guard,t.functionValue=i.functionValue,t.sc=i.sc,t.equal=i.equal,t.or=i.or,t.if_=i.if_,t.switch_=i.switch_,t.isThrown=i.isThrown,t.isThrownValue=i.isThrownValue,t.isThrownException=i.isThrownException,t.isNotThrown=i.isNotThrown,t.checkEqual=t.test.checkEqual}(n||(n={})),t.exports=n}]);