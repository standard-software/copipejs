"use strict";
/**
 * copipe.js
 *  file: copipe_console.js
 */
var copipe_core = require("./copipe_core");
var copipe;
(function (copipe) {
    var _a;
    /**
     * ルート公開されている名前空間の展開
     */
    copipe.VERSION = copipe_core.VERSION, copipe.type = copipe_core.type, copipe.syntax = copipe_core.syntax, copipe.string = copipe_core.string, copipe.test = copipe_core.test;
    copipe.isUndefined = copipe.type.isUndefined, copipe.isNull = copipe.type.isNull, copipe.isBoolean = copipe.type.isBoolean, copipe.isNumber = copipe.type.isNumber, copipe.isInteger = copipe.type.isInteger, copipe.isString = copipe.type.isString, copipe.isFunction = copipe.type.isFunction, copipe.isObject = copipe.type.isObject, copipe.isArray = copipe.type.isArray, copipe.isDate = copipe.type.isDate, copipe.isRegExp = copipe.type.isRegExp, copipe.isException = copipe.type.isException, copipe.isNotUndefined = copipe.type.isNotUndefined, copipe.isNotNull = copipe.type.isNotNull, copipe.isNotBoolean = copipe.type.isNotBoolean, copipe.isNotNumber = copipe.type.isNotNumber, copipe.isNotInteger = copipe.type.isNotInteger, copipe.isNotString = copipe.type.isNotString, copipe.isNotFunction = copipe.type.isNotFunction, copipe.isNotObject = copipe.type.isNotObject, copipe.isNotArray = copipe.type.isNotArray, copipe.isNotDate = copipe.type.isNotDate, copipe.isNotRegExp = copipe.type.isNotRegExp, copipe.isNotException = copipe.type.isNotException, copipe.isUndefinedArray = copipe.type.isUndefinedArray, copipe.isNullArray = copipe.type.isNullArray, copipe.isBooleanArray = copipe.type.isBooleanArray, copipe.isNumberArray = copipe.type.isNumberArray, copipe.isIntegerArray = copipe.type.isIntegerArray, copipe.isStringArray = copipe.type.isStringArray, copipe.isFunctionArray = copipe.type.isFunctionArray, copipe.isObjectArray = copipe.type.isObjectArray, copipe.isArrayArray = copipe.type.isArrayArray, copipe.isDateArray = copipe.type.isDateArray, copipe.isRegExpArray = copipe.type.isRegExpArray, copipe.isExceptionArray = copipe.type.isExceptionArray, copipe.isNotUndefinedArray = copipe.type.isNotUndefinedArray, copipe.isNotNullArray = copipe.type.isNotNullArray, copipe.isNotBooleanArray = copipe.type.isNotBooleanArray, copipe.isNotNumberArray = copipe.type.isNotNumberArray, copipe.isNotIntegerArray = copipe.type.isNotIntegerArray, copipe.isNotStringArray = copipe.type.isNotStringArray, copipe.isNotFunctionArray = copipe.type.isNotFunctionArray, copipe.isNotObjectArray = copipe.type.isNotObjectArray, copipe.isNotArrayArray = copipe.type.isNotArrayArray, copipe.isNotDateArray = copipe.type.isNotDateArray, copipe.isNotRegExpArray = copipe.type.isNotRegExpArray, copipe.isNotExceptionArray = copipe.type.isNotExceptionArray, copipe.isUndef = copipe.type.isUndef, copipe.isBool = copipe.type.isBool, copipe.isNum = copipe.type.isNum, copipe.isInt = copipe.type.isInt, copipe.isStr = copipe.type.isStr, copipe.isFunc = copipe.type.isFunc, copipe.isObj = copipe.type.isObj, copipe.isExcept = copipe.type.isExcept, copipe.isNotUndef = copipe.type.isNotUndef, copipe.isNotBool = copipe.type.isNotBool, copipe.isNotNum = copipe.type.isNotNum, copipe.isNotInt = copipe.type.isNotInt, copipe.isNotStr = copipe.type.isNotStr, copipe.isNotFunc = copipe.type.isNotFunc, copipe.isNotObj = copipe.type.isNotObj, copipe.isNotExcept = copipe.type.isNotExcept;
    _a = copipe.syntax, copipe.assert = _a.assert, copipe.guard = _a.guard, copipe.functionValue = _a.functionValue, copipe.sc = _a.sc, copipe.equal = _a.equal, copipe.or = _a.or, copipe.if_ = _a.if_, copipe.switch_ = _a.switch_, copipe.isThrown = _a.isThrown, copipe.isThrownValue = _a.isThrownValue, copipe.isThrownException = _a.isThrownException, copipe.isNotThrown = _a.isNotThrown;
    copipe.match = copipe.string.match;
    copipe.checkEqual = copipe.test.checkEqual;
    var consoleHook;
    (function (consoleHook) {
        consoleHook.original = {};
        consoleHook.original.log = console.log;
        consoleHook.hookLog = function (hookFunc) {
            console.log = hookFunc;
        };
        consoleHook.unHookLog = function () {
            console.log = consoleHook.original.log;
        };
        consoleHook.accept = function (acceptArray, rejectArray, hookFunc) {
            if (hookFunc === void 0) { hookFunc = consoleHook.original.log; }
            copipe.guard(function () { return [
                [copipe.isArray(acceptArray), 'accept args1(acceptArray) type is not array.'],
                [
                    copipe.isUndefined(rejectArray) || copipe.isArray(rejectArray),
                    'accept args2(rejectArray) type is not array.'
                ],
            ]; }, function () { throw new TypeError(copipe.guard.message()); });
            consoleHook.hookLog(function () {
                var messageArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    messageArgs[_i] = arguments[_i];
                }
                var acceptFlag = acceptArray.length === 0;
                if (!acceptFlag) {
                    acceptFlag = acceptArray.some(function (acceptValue) {
                        if (!copipe.isString(messageArgs[0])) {
                            return false;
                        }
                        return copipe.match(messageArgs[0], acceptValue);
                    });
                }
                if (acceptFlag && copipe.isArray(rejectArray)) {
                    acceptFlag = !(rejectArray.some(function (rejectValue) {
                        if (!copipe.isString(messageArgs[0])) {
                            return false;
                        }
                        return copipe.match(messageArgs[0], rejectValue);
                    }));
                }
                if (acceptFlag) {
                    hookFunc.apply(void 0, messageArgs);
                }
            });
        };
    })(consoleHook = copipe.consoleHook || (copipe.consoleHook = {}));
})(copipe || (copipe = {}));
;
module.exports = copipe;
