"use strict";
/**
 * copipe.js
 *  file: copipe_console.js
 */
var copipe_console = require("./copipe_console");
var copipe;
(function (copipe) {
    copipe.VERSION = copipe_console.VERSION, copipe.type = copipe_console.type, copipe.syntax = copipe_console.syntax, copipe.compare = copipe_console.compare, copipe.convert = copipe_console.convert, copipe.string = copipe_console.string, copipe.test = copipe_console.test, copipe.consoleHook = copipe_console.consoleHook;
    /**
     * 名前空間でルート公開されている関数の展開
     */
    // type
    copipe.isUndefined = copipe_console.isUndefined, copipe.isNull = copipe_console.isNull, copipe.isBoolean = copipe_console.isBoolean, copipe.isNumber = copipe_console.isNumber, copipe.isInteger = copipe_console.isInteger, copipe.isString = copipe_console.isString, copipe.isFunction = copipe_console.isFunction, copipe.isObject = copipe_console.isObject, copipe.isArray = copipe_console.isArray, copipe.isDate = copipe_console.isDate, copipe.isRegExp = copipe_console.isRegExp, copipe.isException = copipe_console.isException, copipe.isNotUndefined = copipe_console.isNotUndefined, copipe.isNotNull = copipe_console.isNotNull, copipe.isNotBoolean = copipe_console.isNotBoolean, copipe.isNotNumber = copipe_console.isNotNumber, copipe.isNotInteger = copipe_console.isNotInteger, copipe.isNotString = copipe_console.isNotString, copipe.isNotFunction = copipe_console.isNotFunction, copipe.isNotObject = copipe_console.isNotObject, copipe.isNotArray = copipe_console.isNotArray, copipe.isNotDate = copipe_console.isNotDate, copipe.isNotRegExp = copipe_console.isNotRegExp, copipe.isNotException = copipe_console.isNotException, copipe.isUndefinedArray = copipe_console.isUndefinedArray, copipe.isNullArray = copipe_console.isNullArray, copipe.isBooleanArray = copipe_console.isBooleanArray, copipe.isNumberArray = copipe_console.isNumberArray, copipe.isIntegerArray = copipe_console.isIntegerArray, copipe.isStringArray = copipe_console.isStringArray, copipe.isFunctionArray = copipe_console.isFunctionArray, copipe.isObjectArray = copipe_console.isObjectArray, copipe.isArrayArray = copipe_console.isArrayArray, copipe.isDateArray = copipe_console.isDateArray, copipe.isRegExpArray = copipe_console.isRegExpArray, copipe.isExceptionArray = copipe_console.isExceptionArray, copipe.isNotUndefinedArray = copipe_console.isNotUndefinedArray, copipe.isNotNullArray = copipe_console.isNotNullArray, copipe.isNotBooleanArray = copipe_console.isNotBooleanArray, copipe.isNotNumberArray = copipe_console.isNotNumberArray, copipe.isNotIntegerArray = copipe_console.isNotIntegerArray, copipe.isNotStringArray = copipe_console.isNotStringArray, copipe.isNotFunctionArray = copipe_console.isNotFunctionArray, copipe.isNotObjectArray = copipe_console.isNotObjectArray, copipe.isNotArrayArray = copipe_console.isNotArrayArray, copipe.isNotDateArray = copipe_console.isNotDateArray, copipe.isNotRegExpArray = copipe_console.isNotRegExpArray, copipe.isNotExceptionArray = copipe_console.isNotExceptionArray, copipe.isUndef = copipe_console.isUndef, copipe.isBool = copipe_console.isBool, copipe.isNum = copipe_console.isNum, copipe.isInt = copipe_console.isInt, copipe.isStr = copipe_console.isStr, copipe.isFunc = copipe_console.isFunc, copipe.isObj = copipe_console.isObj, copipe.isExcept = copipe_console.isExcept, copipe.isNotUndef = copipe_console.isNotUndef, copipe.isNotBool = copipe_console.isNotBool, copipe.isNotNum = copipe_console.isNotNum, copipe.isNotInt = copipe_console.isNotInt, copipe.isNotStr = copipe_console.isNotStr, copipe.isNotFunc = copipe_console.isNotFunc, copipe.isNotObj = copipe_console.isNotObj, copipe.isNotExcept = copipe_console.isNotExcept, 
    // syntax
    copipe.assert = copipe_console.assert, copipe.guard = copipe_console.guard, copipe.functionValue = copipe_console.functionValue, copipe.sc = copipe_console.sc, copipe.if_ = copipe_console.if_, copipe.switch_ = copipe_console.switch_, copipe.isThrown = copipe_console.isThrown, copipe.isThrownValue = copipe_console.isThrownValue, copipe.isThrownException = copipe_console.isThrownException, copipe.isNotThrown = copipe_console.isNotThrown, 
    // compare
    copipe.equal = copipe_console.equal, copipe.or = copipe_console.or, copipe.match = copipe_console.match, copipe.matchValue = copipe_console.matchValue, copipe.matchTo = copipe_console.matchTo, copipe.defaultValue = copipe_console.defaultValue, copipe.defaultTo = copipe_console.defaultTo;
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
        if (!String.prototype.startsWith) {
            String.prototype.startsWith = function (search, pos) {
                pos = !pos || pos < 0 ? 0 : +pos;
                return this.substring(pos, pos + search.length) === search;
            };
        }
        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function (search, this_len) {
                if (this_len === undefined || this_len > this.length) {
                    this_len = this.length;
                }
                return this.substring(this_len - search.length, this_len) === search;
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
