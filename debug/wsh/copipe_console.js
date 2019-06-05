"use strict";
/**
 * copipe.js
 *  file: copipe_console.ts
 */
var copipe_core = require("./copipe_core");
var copipe;
(function (copipe) {
    var _a;
    /**
     * ルート公開されている名前空間の展開
     */
    copipe.VERSION = copipe_core.VERSION, copipe.type = copipe_core.type, copipe.syntax = copipe_core.syntax, copipe.compare = copipe_core.compare, copipe.convert = copipe_core.convert, copipe.string = copipe_core.string, copipe.test = copipe_core.test;
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
                if (acceptFlag === false) {
                    acceptFlag = copipe.string.includes(messageArgsAll, acceptArray);
                }
                if (acceptFlag && copipe.isArray(rejectArray)) {
                    acceptFlag = !copipe.string.includes(messageArgsAll, rejectArray);
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
