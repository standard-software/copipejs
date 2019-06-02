window["copipe"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * copipe.js
 *  file: copipe.js
 */
var copipe = __webpack_require__(2);
module.exports = copipe;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * copipe.js
 *  file: copipe_console.js
 */
var copipe_console = __webpack_require__(3);
var copipe;
(function (copipe) {
    /**
     * ルート公開されている名前空間の展開
     */
    copipe.VERSION = copipe_console.VERSION, copipe.type = copipe_console.type, copipe.syntax = copipe_console.syntax, copipe.string = copipe_console.string, copipe.test = copipe_console.test, copipe.consoleHook = copipe_console.consoleHook;
    copipe.isUndefined = copipe.type.isUndefined, copipe.isNull = copipe.type.isNull, copipe.isBoolean = copipe.type.isBoolean, copipe.isNumber = copipe.type.isNumber, copipe.isInteger = copipe.type.isInteger, copipe.isString = copipe.type.isString, copipe.isFunction = copipe.type.isFunction, copipe.isObject = copipe.type.isObject, copipe.isArray = copipe.type.isArray, copipe.isDate = copipe.type.isDate, copipe.isRegExp = copipe.type.isRegExp, copipe.isException = copipe.type.isException, copipe.isNotUndefined = copipe.type.isNotUndefined, copipe.isNotNull = copipe.type.isNotNull, copipe.isNotBoolean = copipe.type.isNotBoolean, copipe.isNotNumber = copipe.type.isNotNumber, copipe.isNotInteger = copipe.type.isNotInteger, copipe.isNotString = copipe.type.isNotString, copipe.isNotFunction = copipe.type.isNotFunction, copipe.isNotObject = copipe.type.isNotObject, copipe.isNotArray = copipe.type.isNotArray, copipe.isNotDate = copipe.type.isNotDate, copipe.isNotRegExp = copipe.type.isNotRegExp, copipe.isNotException = copipe.type.isNotException, copipe.isUndefinedArray = copipe.type.isUndefinedArray, copipe.isNullArray = copipe.type.isNullArray, copipe.isBooleanArray = copipe.type.isBooleanArray, copipe.isNumberArray = copipe.type.isNumberArray, copipe.isIntegerArray = copipe.type.isIntegerArray, copipe.isStringArray = copipe.type.isStringArray, copipe.isFunctionArray = copipe.type.isFunctionArray, copipe.isObjectArray = copipe.type.isObjectArray, copipe.isArrayArray = copipe.type.isArrayArray, copipe.isDateArray = copipe.type.isDateArray, copipe.isRegExpArray = copipe.type.isRegExpArray, copipe.isExceptionArray = copipe.type.isExceptionArray, copipe.isNotUndefinedArray = copipe.type.isNotUndefinedArray, copipe.isNotNullArray = copipe.type.isNotNullArray, copipe.isNotBooleanArray = copipe.type.isNotBooleanArray, copipe.isNotNumberArray = copipe.type.isNotNumberArray, copipe.isNotIntegerArray = copipe.type.isNotIntegerArray, copipe.isNotStringArray = copipe.type.isNotStringArray, copipe.isNotFunctionArray = copipe.type.isNotFunctionArray, copipe.isNotObjectArray = copipe.type.isNotObjectArray, copipe.isNotArrayArray = copipe.type.isNotArrayArray, copipe.isNotDateArray = copipe.type.isNotDateArray, copipe.isNotRegExpArray = copipe.type.isNotRegExpArray, copipe.isNotExceptionArray = copipe.type.isNotExceptionArray, copipe.isUndef = copipe.type.isUndef, copipe.isBool = copipe.type.isBool, copipe.isNum = copipe.type.isNum, copipe.isInt = copipe.type.isInt, copipe.isStr = copipe.type.isStr, copipe.isFunc = copipe.type.isFunc, copipe.isObj = copipe.type.isObj, copipe.isExcept = copipe.type.isExcept, copipe.isNotUndef = copipe.type.isNotUndef, copipe.isNotBool = copipe.type.isNotBool, copipe.isNotNum = copipe.type.isNotNum, copipe.isNotInt = copipe.type.isNotInt, copipe.isNotStr = copipe.type.isNotStr, copipe.isNotFunc = copipe.type.isNotFunc, copipe.isNotObj = copipe.type.isNotObj, copipe.isNotExcept = copipe.type.isNotExcept;
    copipe.assert = copipe.syntax.assert, copipe.guard = copipe.syntax.guard, copipe.functionValue = copipe.syntax.functionValue, copipe.sc = copipe.syntax.sc, copipe.equal = copipe.syntax.equal, copipe.or = copipe.syntax.or, copipe.if_ = copipe.syntax.if_, copipe.switch_ = copipe.syntax.switch_, copipe.isThrown = copipe.syntax.isThrown, copipe.isThrownValue = copipe.syntax.isThrownValue, copipe.isThrownException = copipe.syntax.isThrownException, copipe.isNotThrown = copipe.syntax.isNotThrown;
    copipe.checkEqual = copipe.test.checkEqual;
    copipe.polyfillDefine = function () {
        // console.info('polyfill String.prototype.includes');
        if (!String.prototype.includes) {
            String.prototype.includes = function (search, start) {
                'use strict';
                if (typeof start !== 'number') {
                    start = 0;
                }
                if (start + search.length > this.length) {
                    return false;
                }
                else {
                    return this.indexOf(search, start) !== -1;
                }
            };
        }
        if (!Array.prototype.some) {
            Array.prototype.some = function (fun, thisArg) {
                'use strict';
                if (this == null) {
                    throw new TypeError('Array.prototype.some called on null or undefined');
                }
                if (typeof fun !== 'function') {
                    throw new TypeError();
                }
                var t = Object(this);
                var len = t.length >>> 0;
                var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
                for (var i = 0; i < len; i++) {
                    if (i in t && fun.call(thisArg, t[i], i, t)) {
                        return true;
                    }
                }
                return false;
            };
        }
        // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        if (!Array.prototype.map) {
            Array.prototype.map = function (callback /*, thisArg*/) {
                var T, A, k;
                if (this == null) {
                    throw new TypeError('this is null or not defined');
                }
                var O = Object(this);
                var len = O.length >>> 0;
                if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                }
                if (arguments.length > 1) {
                    T = arguments[1];
                }
                A = new Array(len);
                k = 0;
                while (k < len) {
                    var kValue, mappedValue;
                    if (k in O) {
                        kValue = O[k];
                        mappedValue = callback.call(T, kValue, k, O);
                        A[k] = mappedValue;
                    }
                    k++;
                }
                return A;
            };
        }
    };
    copipe.polyfillDefine();
})(copipe || (copipe = {}));
module.exports = copipe;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * copipe.js
 *  file: copipe_console.ts
 */
var copipe_core = __webpack_require__(4);
var copipe;
(function (copipe) {
    var _a;
    /**
     * ルート公開されている名前空間の展開
     */
    copipe.VERSION = copipe_core.VERSION, copipe.type = copipe_core.type, copipe.syntax = copipe_core.syntax, copipe.string = copipe_core.string, copipe.test = copipe_core.test;
    copipe.isUndefined = copipe.type.isUndefined, copipe.isNull = copipe.type.isNull, copipe.isBoolean = copipe.type.isBoolean, copipe.isNumber = copipe.type.isNumber, copipe.isInteger = copipe.type.isInteger, copipe.isString = copipe.type.isString, copipe.isFunction = copipe.type.isFunction, copipe.isObject = copipe.type.isObject, copipe.isArray = copipe.type.isArray, copipe.isDate = copipe.type.isDate, copipe.isRegExp = copipe.type.isRegExp, copipe.isException = copipe.type.isException, copipe.isNotUndefined = copipe.type.isNotUndefined, copipe.isNotNull = copipe.type.isNotNull, copipe.isNotBoolean = copipe.type.isNotBoolean, copipe.isNotNumber = copipe.type.isNotNumber, copipe.isNotInteger = copipe.type.isNotInteger, copipe.isNotString = copipe.type.isNotString, copipe.isNotFunction = copipe.type.isNotFunction, copipe.isNotObject = copipe.type.isNotObject, copipe.isNotArray = copipe.type.isNotArray, copipe.isNotDate = copipe.type.isNotDate, copipe.isNotRegExp = copipe.type.isNotRegExp, copipe.isNotException = copipe.type.isNotException, copipe.isUndefinedArray = copipe.type.isUndefinedArray, copipe.isNullArray = copipe.type.isNullArray, copipe.isBooleanArray = copipe.type.isBooleanArray, copipe.isNumberArray = copipe.type.isNumberArray, copipe.isIntegerArray = copipe.type.isIntegerArray, copipe.isStringArray = copipe.type.isStringArray, copipe.isFunctionArray = copipe.type.isFunctionArray, copipe.isObjectArray = copipe.type.isObjectArray, copipe.isArrayArray = copipe.type.isArrayArray, copipe.isDateArray = copipe.type.isDateArray, copipe.isRegExpArray = copipe.type.isRegExpArray, copipe.isExceptionArray = copipe.type.isExceptionArray, copipe.isNotUndefinedArray = copipe.type.isNotUndefinedArray, copipe.isNotNullArray = copipe.type.isNotNullArray, copipe.isNotBooleanArray = copipe.type.isNotBooleanArray, copipe.isNotNumberArray = copipe.type.isNotNumberArray, copipe.isNotIntegerArray = copipe.type.isNotIntegerArray, copipe.isNotStringArray = copipe.type.isNotStringArray, copipe.isNotFunctionArray = copipe.type.isNotFunctionArray, copipe.isNotObjectArray = copipe.type.isNotObjectArray, copipe.isNotArrayArray = copipe.type.isNotArrayArray, copipe.isNotDateArray = copipe.type.isNotDateArray, copipe.isNotRegExpArray = copipe.type.isNotRegExpArray, copipe.isNotExceptionArray = copipe.type.isNotExceptionArray, copipe.isUndef = copipe.type.isUndef, copipe.isBool = copipe.type.isBool, copipe.isNum = copipe.type.isNum, copipe.isInt = copipe.type.isInt, copipe.isStr = copipe.type.isStr, copipe.isFunc = copipe.type.isFunc, copipe.isObj = copipe.type.isObj, copipe.isExcept = copipe.type.isExcept, copipe.isNotUndef = copipe.type.isNotUndef, copipe.isNotBool = copipe.type.isNotBool, copipe.isNotNum = copipe.type.isNotNum, copipe.isNotInt = copipe.type.isNotInt, copipe.isNotStr = copipe.type.isNotStr, copipe.isNotFunc = copipe.type.isNotFunc, copipe.isNotObj = copipe.type.isNotObj, copipe.isNotExcept = copipe.type.isNotExcept;
    _a = copipe.syntax, copipe.assert = _a.assert, copipe.guard = _a.guard, copipe.functionValue = _a.functionValue, copipe.sc = _a.sc, copipe.equal = _a.equal, copipe.or = _a.or, copipe.if_ = _a.if_, copipe.switch_ = _a.switch_, copipe.isThrown = _a.isThrown, copipe.isThrownValue = _a.isThrownValue, copipe.isThrownException = _a.isThrownException, copipe.isNotThrown = _a.isNotThrown;
    // export const {
    // } = convert;
    copipe.checkEqual = copipe.test.checkEqual;
    var consoleHook;
    (function (consoleHook) {
        consoleHook.original = {};
        consoleHook.original.log = console.log;
        consoleHook.original.info = console.info;
        consoleHook.original.warn = console.warn;
        consoleHook.original.error = console.error;
        consoleHook.original.debug = console.debug;
        consoleHook._hook = function (methodName, hookFunc) {
            if (hookFunc === void 0) { hookFunc = function () { }; }
            copipe.guard(function () { return [
                copipe.or(methodName, ['log', 'info', 'warn', 'error', 'debug'])
            ]; }, function () {
                throw new Error('_hook args1(methodName) is not log|info|warn|error|debug.');
            });
            console[methodName] = hookFunc;
        };
        consoleHook.hookLog = function (hookFunc) {
            consoleHook._hook('log', hookFunc);
        };
        consoleHook.hookInfo = function (hookFunc) {
            consoleHook._hook('info', hookFunc);
        };
        consoleHook.hookWarn = function (hookFunc) {
            consoleHook._hook('warn', hookFunc);
        };
        consoleHook.hookError = function (hookFunc) {
            consoleHook._hook('error', hookFunc);
        };
        consoleHook.hookDebug = function (hookFunc) {
            consoleHook._hook('debug', hookFunc);
        };
        consoleHook._unHook = function (methodName) {
            copipe.guard(function () { return [
                copipe.or(methodName, ['log', 'info', 'warn', 'error', 'debug'])
            ]; }, function () {
                throw new Error('_unHook args1(methodName) is not log|info|warn|error|debug.');
            });
            console[methodName] = consoleHook.original[methodName];
        };
        consoleHook.unHookLog = function () {
            consoleHook._unHook('log');
        };
        consoleHook.unHookInfo = function () {
            consoleHook._unHook('info');
        };
        consoleHook.unHookWarn = function () {
            consoleHook._unHook('warn');
        };
        consoleHook.unHookError = function () {
            consoleHook._unHook('error');
        };
        consoleHook.unHookDebug = function () {
            consoleHook._unHook('debug');
        };
        consoleHook._accept = function (methodName, acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            copipe.guard(function () { return [
                [copipe.or(methodName, ['log', 'info', 'warn', 'error', 'debug']),
                    '_accept args1(methodName) is not log|info|warn|error|debug.'],
                [copipe.isArray(acceptArray), '_accept args2(acceptArray) type is not array.'],
                [
                    copipe.isUndefined(rejectArray) || copipe.isArray(rejectArray),
                    '_accept args3(rejectArray) type is not array.'
                ],
            ]; }, function () { throw new TypeError(copipe.guard.message()); });
            consoleHook._hook(methodName, function () {
                var messageArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    messageArgs[_i] = arguments[_i];
                }
                var messageArgsAll = messageArgs.map(function (value) { return String(value); }).join(' ');
                var acceptFlag = acceptArray.length === 0;
                if (!acceptFlag) {
                    acceptFlag = acceptArray.some(function (acceptValue) {
                        if (!copipe.isString(messageArgsAll)) {
                            return false;
                        }
                        copipe.guard(function () { return [
                            [
                                copipe.isString(acceptValue) || copipe.isRegExp(acceptValue),
                                '_accept args2(acceptArray) array item type is not string|RegExp.'
                            ],
                        ]; }, function () {
                            throw new TypeError(copipe.guard.message());
                        });
                        return copipe.string.includes(messageArgsAll, acceptValue);
                    });
                }
                if (acceptFlag && copipe.isArray(rejectArray)) {
                    acceptFlag = !(rejectArray.some(function (rejectValue) {
                        if (!copipe.isString(messageArgsAll)) {
                            return false;
                        }
                        copipe.guard(function () { return [
                            [
                                copipe.isString(rejectValue) || copipe.isRegExp(rejectValue),
                                '_accept args3(rejectValue) array item type is not string|RegExp.'
                            ],
                        ]; }, function () {
                            throw new TypeError(copipe.guard.message());
                        });
                        return copipe.string.includes(messageArgsAll, rejectValue);
                    }));
                }
                if (acceptFlag) {
                    hookFunc.apply(void 0, messageArgs);
                }
            });
        };
        consoleHook.acceptLog = function (acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            consoleHook._accept('log', acceptArray, rejectArray, hookFunc);
        };
        consoleHook.acceptInfo = function (acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            consoleHook._accept('info', acceptArray, rejectArray, hookFunc);
        };
        consoleHook.acceptWarn = function (acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            consoleHook._accept('warn', acceptArray, rejectArray, hookFunc);
        };
        consoleHook.acceptError = function (acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            consoleHook._accept('error', acceptArray, rejectArray, hookFunc);
        };
        consoleHook.acceptDebug = function (acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            consoleHook._accept('debug', acceptArray, rejectArray, hookFunc);
        };
    })(consoleHook = copipe.consoleHook || (copipe.consoleHook = {}));
})(copipe || (copipe = {}));
module.exports = copipe;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * copipe.js
 *  file: copipe_core.ts
 */
var copipe;
(function (copipe) {
    copipe.VERSION = '1.0.1';
})(copipe || (copipe = {}));
(function (copipe) {
    /**
     * 単独引数の場合の型判定関数
     *  assert などの防御はなし。
     */
    var type;
    (function (type) {
        type.objectToString = function (value) {
            return Object.prototype.toString.call(value);
        };
    })(type = copipe.type || (copipe.type = {}));
    var _type;
    (function (_type) {
        var objectToString = type.objectToString;
        var _primitiveTypeCheckFunc = function (typeName) {
            return (function (value) { return typeof value === typeName; });
        };
        var _objectTypeCheckFunc = function (typeName) {
            return (function (value) { return objectToString(value) === "[object " + typeName + "]"; });
        };
        _type._isUndefined = _primitiveTypeCheckFunc('undefined');
        _type._isNull = function (value) { return (value === null); };
        _type._isBoolean = _primitiveTypeCheckFunc('boolean');
        _type._isNumber = function (value) {
            return (_primitiveTypeCheckFunc('number')(value) && (isFinite(value)));
        };
        _type._isInteger = function (value) {
            if (!_type._isNumber(value)) {
                return false;
            }
            return Math.round(value) === value;
        };
        _type._isString = _primitiveTypeCheckFunc('string');
        _type._isFunction = _primitiveTypeCheckFunc('function');
        _type._isObject = function (value) {
            if ((_objectTypeCheckFunc('Object')(value))
                && (_type._isNotNull(value))
                && (_type._isNotUndefined(value))) {
                return true;
            }
            return false;
        };
        _type._isArray = _objectTypeCheckFunc('Array');
        _type._isDate = _objectTypeCheckFunc('Date');
        _type._isRegExp = _objectTypeCheckFunc('RegExp');
        _type._isError = _objectTypeCheckFunc('Error');
        /**
         * 例外オブジェクト判定
         *  Errorオブジェクトを含む例外(Exception)オブジェクトは
         *  name と message プロパティの有無によって判定する
         *
         *  Errorオブジェクトの判定は下記のように実装することが可能
         *  export const _isError = _objectTypeCheckFunc('Error');
         *  だが
         *  Errorオブジェクトを継承して
         *  独自エラーオブジェクトを作成する方法は記載が難しいために利用しずらい
         *  なので、単に name と message プロパティを持つオブジェクトかどうかの判定で
         *  機能として十分になる
         *
         *  参考：独自例外(Exception)オブジェクト作成方法
         *    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/throw
         */
        _type._isException = function (value) {
            if (_type._isObject(value)) {
                if ('name' in value) {
                    if ('message' in value) {
                        return true;
                    }
                }
            }
            else if (_type._isError(value)) {
                return true;
            }
            return false;
        };
        /**
         * 単独引数の場合の型判定関数の否定形
         */
        _type._isNotUndefined = function (value) { return !_type._isUndefined(value); };
        _type._isNotNull = function (value) { return !_type._isNull(value); };
        _type._isNotBoolean = function (value) { return !_type._isBoolean(value); };
        _type._isNotNumber = function (value) { return !_type._isNumber(value); };
        _type._isNotInteger = function (value) { return !_type._isInteger(value); };
        _type._isNotString = function (value) { return !_type._isString(value); };
        _type._isNotFunction = function (value) { return !_type._isFunction(value); };
        _type._isNotObject = function (value) { return !_type._isObject(value); };
        _type._isNotArray = function (value) { return !_type._isArray(value); };
        _type._isNotDate = function (value) { return !_type._isDate(value); };
        _type._isNotRegExp = function (value) { return !_type._isRegExp(value); };
        _type._isNotException = function (value) { return !_type._isException(value); };
    })(_type || (_type = {}));
    /**
     * 文法拡張
     * 型判定関数で使うための assert を記載する
     */
    /**
     * 契約プログラミングで使用する assert
     *  assert(boolean, message) の形式で記載。
     *  boolean に false が入ると assert=宣言する ことが false になるので
     *  例外を発生して停止させるものとして使う。
     */
    var syntax;
    (function (syntax) {
        var _isBoolean = _type._isBoolean, _isString = _type._isString;
        syntax.assert = function (value, message) {
            if (message === void 0) { message = ''; }
            if (!_isBoolean(value)) {
                throw new TypeError('assert args1(value) type is not boolean. message:' + message);
            }
            if (!_isString(message)) {
                throw new TypeError('assert args2(message) type is not string. message:' + message);
            }
            if (!value) {
                throw new Error('assert error. message:' + message);
            }
        };
        /**
         * assert を発展させた guard 節 として使用する。
         *  guard の構文に従っていない場合は SyntaxError が出るようにしている
         *  TypeError と迷ったが、guard で守られている場合は TypeError を投げるべきで
         *  guard 構文の記載ミスの場合なので SyntaxError としている
         */
        var guard_status = true;
        var guard_message;
        syntax.guard = function (guardFunc, runFunc) {
            guard_message = '';
            if (guard_status === false) {
                return false;
            }
            if (!copipe.isFunction(guardFunc)) {
                throw new SyntaxError('guard args1(guardFunc) type is not function.');
            }
            var result = guardFunc();
            if (!copipe.isArray(result)) {
                throw new SyntaxError('guard args1(guardFunc) result type is not array.');
            }
            for (var i = 0; i < result.length; i += 1) {
                // 配列の [a,b,] の最終カンマ対策
                if ((i === result.length - 1) && copipe.isUndefined(result[i])) {
                    continue;
                }
                var resultValue = void 0;
                var message = '';
                if (copipe.isArray(result[i])) {
                    if (!(1 <= result[i].length)) {
                        throw new SyntaxError('guard args1(guardFunc) result item is not array.length >= 1.');
                    }
                    resultValue = result[i][0];
                    if (2 <= result[i].length) {
                        message = result[i][1];
                    }
                }
                else {
                    resultValue = result[i];
                }
                resultValue = syntax.functionValue(resultValue);
                if (!copipe.isBoolean(resultValue)) {
                    throw new SyntaxError('guard args1(guardFunc) result item value type is not boolean.');
                }
                if (resultValue === false) {
                    guard_message = message;
                    if (!copipe.isUndefined(runFunc)) {
                        if (!copipe.isFunction(runFunc)) {
                            throw new SyntaxError('guard args2(runFunc) type is not function');
                        }
                        runFunc();
                    }
                    return true;
                }
            }
            return false;
        };
        syntax.guard.message = function () { return guard_message; };
        syntax.guard.status = function (value) {
            return guard_status = value;
        };
        syntax.guard.on = function () {
            guard_status = true;
        };
        syntax.guard.off = function () {
            guard_status = false;
        };
    })(syntax = copipe.syntax || (copipe.syntax = {}));
    /**
     * 複数引数や関数引数の場合の型判定関数
     */
    (function (type) {
        var assert = syntax.assert;
        var _isUndefined = _type._isUndefined, _isNull = _type._isNull, _isBoolean = _type._isBoolean, _isNumber = _type._isNumber, _isInteger = _type._isInteger, _isString = _type._isString, _isFunction = _type._isFunction, _isObject = _type._isObject, _isArray = _type._isArray, _isDate = _type._isDate, _isRegExp = _type._isRegExp, _isException = _type._isException, _isNotUndefined = _type._isNotUndefined, _isNotNull = _type._isNotNull, _isNotBoolean = _type._isNotBoolean, _isNotNumber = _type._isNotNumber, _isNotInteger = _type._isNotInteger, _isNotString = _type._isNotString, _isNotFunction = _type._isNotFunction, _isNotObject = _type._isNotObject, _isNotArray = _type._isNotArray, _isNotDate = _type._isNotDate, _isNotRegExp = _type._isNotRegExp, _isNotException = _type._isNotException;
        var _isTypeCheck = function (checkFunc, argsArray) {
            assert(_isFunction(checkFunc));
            assert(_isArray(argsArray));
            var l = argsArray.length;
            if (l === 0) {
                return false;
            }
            else if (l === 1) {
                return checkFunc(argsArray[0]);
            }
            else {
                for (var i = 0; i < l; i += 1) {
                    if (!checkFunc(argsArray[i])) {
                        return false;
                    }
                }
                return true;
            }
        };
        var _isTypeCheckArgsFunc = function (checkFunc) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _isTypeCheck(checkFunc, args);
            };
        };
        var _isTypeCheckArrayFunc = function (checkFunc) {
            return function (value) { return _isTypeCheck(checkFunc, value); };
        };
        type.isUndefined = _isTypeCheckArgsFunc(_isUndefined);
        type.isNull = _isTypeCheckArgsFunc(_isNull);
        type.isBoolean = _isTypeCheckArgsFunc(_isBoolean);
        type.isNumber = _isTypeCheckArgsFunc(_isNumber);
        type.isInteger = _isTypeCheckArgsFunc(_isInteger);
        type.isString = _isTypeCheckArgsFunc(_isString);
        type.isFunction = _isTypeCheckArgsFunc(_isFunction);
        type.isObject = _isTypeCheckArgsFunc(_isObject);
        type.isArray = _isTypeCheckArgsFunc(_isArray);
        type.isDate = _isTypeCheckArgsFunc(_isDate);
        type.isRegExp = _isTypeCheckArgsFunc(_isRegExp);
        type.isException = _isTypeCheckArgsFunc(_isException);
        type.isNotUndefined = _isTypeCheckArgsFunc(_isNotUndefined);
        type.isNotNull = _isTypeCheckArgsFunc(_isNotNull);
        type.isNotBoolean = _isTypeCheckArgsFunc(_isNotBoolean);
        type.isNotNumber = _isTypeCheckArgsFunc(_isNotNumber);
        type.isNotInteger = _isTypeCheckArgsFunc(_isNotInteger);
        type.isNotString = _isTypeCheckArgsFunc(_isNotString);
        type.isNotFunction = _isTypeCheckArgsFunc(_isNotFunction);
        type.isNotObject = _isTypeCheckArgsFunc(_isNotObject);
        type.isNotArray = _isTypeCheckArgsFunc(_isNotArray);
        type.isNotDate = _isTypeCheckArgsFunc(_isNotDate);
        type.isNotRegExp = _isTypeCheckArgsFunc(_isNotRegExp);
        type.isNotException = _isTypeCheckArgsFunc(_isNotException);
        type.isUndefinedArray = _isTypeCheckArrayFunc(_isUndefined);
        type.isNullArray = _isTypeCheckArrayFunc(_isNull);
        type.isBooleanArray = _isTypeCheckArrayFunc(_isBoolean);
        type.isNumberArray = _isTypeCheckArrayFunc(_isNumber);
        type.isIntegerArray = _isTypeCheckArrayFunc(_isInteger);
        type.isStringArray = _isTypeCheckArrayFunc(_isString);
        type.isFunctionArray = _isTypeCheckArrayFunc(_isFunction);
        type.isObjectArray = _isTypeCheckArrayFunc(_isObject);
        type.isArrayArray = _isTypeCheckArrayFunc(_isArray);
        type.isDateArray = _isTypeCheckArrayFunc(_isDate);
        type.isRegExpArray = _isTypeCheckArrayFunc(_isRegExp);
        type.isExceptionArray = _isTypeCheckArrayFunc(_isException);
        type.isNotUndefinedArray = _isTypeCheckArrayFunc(_isNotUndefined);
        type.isNotNullArray = _isTypeCheckArrayFunc(_isNotNull);
        type.isNotBooleanArray = _isTypeCheckArrayFunc(_isNotBoolean);
        type.isNotNumberArray = _isTypeCheckArrayFunc(_isNotNumber);
        type.isNotIntegerArray = _isTypeCheckArrayFunc(_isNotInteger);
        type.isNotStringArray = _isTypeCheckArrayFunc(_isNotString);
        type.isNotFunctionArray = _isTypeCheckArrayFunc(_isNotFunction);
        type.isNotObjectArray = _isTypeCheckArrayFunc(_isNotObject);
        type.isNotArrayArray = _isTypeCheckArrayFunc(_isNotArray);
        type.isNotDateArray = _isTypeCheckArrayFunc(_isNotDate);
        type.isNotRegExpArray = _isTypeCheckArrayFunc(_isNotRegExp);
        type.isNotExceptionArray = _isTypeCheckArrayFunc(_isNotException);
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
/**
 * 型判定関数の省略形
 */
(function (copipe) {
    var type;
    (function (type) {
        type.isUndef = type.isUndefined;
        type.isBool = type.isBoolean;
        type.isNum = type.isNumber;
        type.isInt = type.isInteger;
        type.isStr = type.isString;
        type.isFunc = type.isFunction;
        type.isObj = type.isObject;
        type.isExcept = type.isException;
        type.isNotUndef = type.isNotUndefined;
        type.isNotBool = type.isNotBoolean;
        type.isNotNum = type.isNotNumber;
        type.isNotInt = type.isNotInteger;
        type.isNotStr = type.isNotString;
        type.isNotFunc = type.isNotFunction;
        type.isNotObj = type.isNotObject;
        type.isNotExcept = type.isNotException;
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
/**
 * 文法拡張
 */
(function (copipe) {
    var syntax;
    (function (syntax) {
        /**
         * 例外や値が投げられたかどうかを判定する関数
         *  テストコードに使うためのもの
         *  compareFunc で 引数として投げられた値が渡されるのでそこで判定する
         *  関数になっているのはオブジェクトを値比較ができないため
         */
        syntax.isThrown = function (targetFunc, compareFunc) {
            if (!copipe.isFunction(targetFunc, compareFunc)) {
                throw new SyntaxError('isThrown args(targetFunc or compareFunc) type is not function.');
            }
            try {
                targetFunc();
            }
            catch (e) {
                return compareFunc(e);
            }
            return false;
        };
        /**
         * 値が投げられたかどうか判定する関数
         */
        syntax.isThrownValue = function (targetFunc, thrownValue) {
            return syntax.isThrown(targetFunc, function (thrown) {
                return thrown === thrownValue;
            });
        };
        /**
         * 例外が投げられたかどうか判定する関数
         */
        syntax.isThrownException = function (targetFunc, exceptionName) {
            if (!(copipe.isUndefined(exceptionName) || copipe.isString(exceptionName))) {
                throw new SyntaxError('isThrownException args2(exceptionName) type is not string.');
            }
            return syntax.isThrown(targetFunc, function (thrown) {
                if (copipe.isException(thrown)) {
                    if (copipe.isUndefined(exceptionName)) {
                        return true;
                    }
                    return thrown.name === exceptionName;
                }
                return false;
            });
        };
        /**
         * 例外や値が投げられていないことを判定する関数
         */
        syntax.isNotThrown = function (targetFunc) {
            return !syntax.isThrown(targetFunc, function () { return true; });
        };
        /**
         * 非関数の場合はそのままの値、関数の場合は実行結果を返す関数
         */
        syntax.functionValue = function (value) {
            if (copipe.isFunction(value)) {
                return value();
            }
            else {
                return value;
            }
        };
        /**
         * 二番目の引数を比較関数として利用して結果を返す関数
         *  sc は second call の略
         */
        syntax.sc = function (argsFirst, 
        // func: (args1: any, ...args: any) => any,
        func) {
            var argsRest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                argsRest[_i - 2] = arguments[_i];
            }
            return func.apply(void 0, [argsFirst].concat(argsRest));
        };
        /**
         * 比較する関数
         */
        syntax.equal = function (valueA, valueB) {
            return valueA === valueB;
        };
        /**
         * 配列内に value と一致する値があるかどうかを判定する関数
         */
        syntax.or = function (value, compareArray) {
            syntax.assert(copipe.isArray(compareArray));
            for (var i = 0; i < compareArray.length; i += 1) {
                if (value === compareArray[i]) {
                    return true;
                }
            }
            return false;
        };
        /**
         * ifを値を返す関数にしたもの。
         *  次の形式で記載する
         *  if_(true)({
         *   then: ()=>valueA,
         *   else: ()=>valueB
         *  })
         *  condition に指定されたBoolean値によって
         *  処理を分岐して値を返す。
         *
         *  thenとelse には関数でも値でも設定可能
         *  関数の場合は、条件に合致しない場合は実行されない。
         *
         *  then else どちらも含まないオブジェクトを指定すると
         *  例外を発生する
         */
        syntax.if_ = function (condition) {
            if (!copipe.isBoolean(condition)) {
                throw new TypeError('if_ args(condition) type is not boolean.');
            }
            var checkSyntax = function (args) {
                if (!copipe.isObject(args)) {
                    throw new SyntaxError('if_() args type is not object.');
                }
                if (copipe.isUndefined(args.then) && copipe.isUndefined(args["else"])) {
                    throw new SyntaxError('if_() args .then .else both nothing.');
                }
            };
            if (condition) {
                return function (args) {
                    checkSyntax(args);
                    return syntax.functionValue(args.then);
                };
            }
            else {
                return function (args) {
                    checkSyntax(args);
                    return syntax.functionValue(args["else"]);
                };
            }
        };
        /**
         * switch を値を返す関数にしたもの
         *  次の形式で記載する
         *  switch_(value)([
         *   [1, valueA],
         *   [2, valueB],
         *   ['1', valueC],
         *   [valueD],
         *  ]);
         *  数値と文字列の厳密な比較が可能。
         *
         *  valueDはデフォルト値を返す
         *  デフォルト値に undefined を返す場合は
         *  [undefined] もしくは [] と記載すること
         *
         *  valueA-D の部分には関数でも値でも設定可能
         *  関数の場合は、条件に合致しない場合は実行されない。
         *
         *  switch_(value1)(args) argsの部分に配列内配列以外の値を渡すと
         *  例外を発生する
         */
        syntax.switch_ = function (expression) {
            return function (args) {
                if (!copipe.isArray(args)) {
                    throw new SyntaxError('switch_() args type is not array.');
                }
                for (var i = 0; i < args.length; i += 1) {
                    // 配列の [a,b,] の最終カンマ対策
                    if ((i === args.length - 1) && copipe.isUndefined(args[i])) {
                        continue;
                    }
                    if (!copipe.isArray(args[i])) {
                        throw new SyntaxError('switch_() args type is not array in array.');
                    }
                }
                for (var i = 0; i < args.length; i += 1) {
                    // 配列の [a,b,] の最終カンマ対策
                    if ((i === args.length - 1) && copipe.isUndefined(args[i])) {
                        continue;
                    }
                    if (args[i].length === 0) {
                        return undefined;
                    }
                    if (args[i].length === 1) {
                        return syntax.functionValue(args[i][0]);
                    }
                    if (args[i][0] === expression) {
                        return syntax.functionValue(args[i][1]);
                    }
                }
                return undefined;
            };
        };
    })(syntax = copipe.syntax || (copipe.syntax = {}));
})(copipe || (copipe = {}));
/**
 * 変換処理
 */
// namespace copipe.convert {
// }
/**
 * 文字列処理
 */
(function (copipe) {
    var string;
    (function (string) {
        /**
         * 文字列を他の文字列か正規表現で一致を調べる関数
         */
        string.match = function (value, compareValue) {
            copipe.guard(function () { return [
                [copipe.isString(value), 'match args1(value) type is not String.'],
                [
                    copipe.isString(compareValue) || copipe.isRegExp(compareValue),
                    'match args2(compareValue) type is not String or RegExp.'
                ],
            ]; }, function () {
                throw new TypeError(copipe.guard.message());
            });
            if (copipe.isString(compareValue)) {
                return value === compareValue;
            }
            if (copipe.isRegExp(compareValue)) {
                return value.match(compareValue) !== null;
            }
            throw new TypeError('match args2(compareValue) type is not String or RegExp.');
        };
        /**
         * 文字列を他の文字列か正規表現で含むかどうかを調べる関数
         */
        string.includes = function (value, compareValue) {
            copipe.guard(function () { return [
                [copipe.isString(value), 'includes args1(value) type is not String.'],
                [
                    copipe.isString(compareValue) || copipe.isRegExp(compareValue),
                    'includes args2(compareValue) type is not String or RegExp.'
                ],
            ]; }, function () {
                throw new TypeError(copipe.guard.message());
            });
            if (copipe.isString(compareValue)) {
                // console.info('copipe_core value.incluedes', isString(value), value);
                return value.includes(String(compareValue));
            }
            if (copipe.isRegExp(compareValue)) {
                return value.match(compareValue) !== null;
            }
            throw new TypeError('includes args2(compareValue) type is not String or RegExp.');
        };
    })(string = copipe.string || (copipe.string = {}));
})(copipe || (copipe = {}));
/**
 * テスト
 */
(function (copipe) {
    var test;
    (function (test) {
        /**
         * a, b の2つの引数が一致するかどうかを判定する関数
         *  テストコードに使うためのもの
         */
        test.checkEqual = function (a, b, message) {
            if (message === void 0) { message = ''; }
            if (!copipe.isString(message)) {
                throw new SyntaxError('checkEqual args(message) type is not string.');
            }
            if (a === b) {
                return true;
            }
            message = "Test: " + message + "\n" +
                'A !== B\n' +
                ("A = " + String(a) + "\n") +
                ("B = " + String(b));
            console.log(message);
            return false;
        };
    })(test = copipe.test || (copipe.test = {}));
})(copipe || (copipe = {}));
/**
 * 名前空間ルートの公開
 */
(function (copipe) {
    var _a, _b;
    /**
     * 型判定
     */
    _a = copipe.type, copipe.isUndefined = _a.isUndefined, copipe.isNull = _a.isNull, copipe.isBoolean = _a.isBoolean, copipe.isNumber = _a.isNumber, copipe.isInteger = _a.isInteger, copipe.isString = _a.isString, copipe.isFunction = _a.isFunction, copipe.isObject = _a.isObject, copipe.isArray = _a.isArray, copipe.isDate = _a.isDate, copipe.isRegExp = _a.isRegExp, copipe.isException = _a.isException, copipe.isNotUndefined = _a.isNotUndefined, copipe.isNotNull = _a.isNotNull, copipe.isNotBoolean = _a.isNotBoolean, copipe.isNotNumber = _a.isNotNumber, copipe.isNotInteger = _a.isNotInteger, copipe.isNotString = _a.isNotString, copipe.isNotFunction = _a.isNotFunction, copipe.isNotObject = _a.isNotObject, copipe.isNotArray = _a.isNotArray, copipe.isNotDate = _a.isNotDate, copipe.isNotRegExp = _a.isNotRegExp, copipe.isNotException = _a.isNotException, copipe.isUndefinedArray = _a.isUndefinedArray, copipe.isNullArray = _a.isNullArray, copipe.isBooleanArray = _a.isBooleanArray, copipe.isNumberArray = _a.isNumberArray, copipe.isIntegerArray = _a.isIntegerArray, copipe.isStringArray = _a.isStringArray, copipe.isFunctionArray = _a.isFunctionArray, copipe.isObjectArray = _a.isObjectArray, copipe.isArrayArray = _a.isArrayArray, copipe.isDateArray = _a.isDateArray, copipe.isRegExpArray = _a.isRegExpArray, copipe.isExceptionArray = _a.isExceptionArray, copipe.isNotUndefinedArray = _a.isNotUndefinedArray, copipe.isNotNullArray = _a.isNotNullArray, copipe.isNotBooleanArray = _a.isNotBooleanArray, copipe.isNotNumberArray = _a.isNotNumberArray, copipe.isNotIntegerArray = _a.isNotIntegerArray, copipe.isNotStringArray = _a.isNotStringArray, copipe.isNotFunctionArray = _a.isNotFunctionArray, copipe.isNotObjectArray = _a.isNotObjectArray, copipe.isNotArrayArray = _a.isNotArrayArray, copipe.isNotDateArray = _a.isNotDateArray, copipe.isNotRegExpArray = _a.isNotRegExpArray, copipe.isNotExceptionArray = _a.isNotExceptionArray, copipe.isUndef = _a.isUndef, copipe.isBool = _a.isBool, copipe.isNum = _a.isNum, copipe.isInt = _a.isInt, copipe.isStr = _a.isStr, copipe.isFunc = _a.isFunc, copipe.isObj = _a.isObj, copipe.isExcept = _a.isExcept, copipe.isNotUndef = _a.isNotUndef, copipe.isNotBool = _a.isNotBool, copipe.isNotNum = _a.isNotNum, copipe.isNotInt = _a.isNotInt, copipe.isNotStr = _a.isNotStr, copipe.isNotFunc = _a.isNotFunc, copipe.isNotObj = _a.isNotObj, copipe.isNotExcept = _a.isNotExcept;
    /**
     * 文法拡張
     */
    _b = copipe.syntax, copipe.assert = _b.assert, copipe.guard = _b.guard, copipe.functionValue = _b.functionValue, copipe.sc = _b.sc, copipe.equal = _b.equal, copipe.or = _b.or, copipe.if_ = _b.if_, copipe.switch_ = _b.switch_, copipe.isThrown = _b.isThrown, copipe.isThrownValue = _b.isThrownValue, copipe.isThrownException = _b.isThrownException, copipe.isNotThrown = _b.isNotThrown;
    /**
     * 変換
     */
    // export const {
    // } = copipe.convert;
    /**
     * 文字列
     */
    // export const {
    // } = copipe.string;
    /**
     * テスト
     */
    // export const {
    // } = copipe.test;
})(copipe || (copipe = {}));
module.exports = copipe;


/***/ })
/******/ ]);