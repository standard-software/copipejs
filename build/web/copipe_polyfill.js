"use strict";
/**
 * copipe.js
 *  file: copipe_console.js
 */
var copipe_console = require("./copipe_console");
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
    };
    copipe.polyfillDefine();
})(copipe || (copipe = {}));
module.exports = copipe;
