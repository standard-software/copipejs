"use strict";
/**
 * copipe.js
 *  file: copipe_console.ts
 */
var copipe_core = require("./copipe_core");
var copipe;
(function (copipe) {
    copipe.VERSION = copipe_core.VERSION, copipe.type = copipe_core.type, copipe.syntax = copipe_core.syntax, copipe.compare = copipe_core.compare, copipe.convert = copipe_core.convert, copipe.string = copipe_core.string, copipe.test = copipe_core.test;
    /**
     * 名前空間でルート公開されている関数の展開
     */
    // type
    copipe.isUndefined = copipe_core.isUndefined, copipe.isNull = copipe_core.isNull, copipe.isBoolean = copipe_core.isBoolean, copipe.isNumber = copipe_core.isNumber, copipe.isInteger = copipe_core.isInteger, copipe.isString = copipe_core.isString, copipe.isFunction = copipe_core.isFunction, copipe.isObject = copipe_core.isObject, copipe.isArray = copipe_core.isArray, copipe.isDate = copipe_core.isDate, copipe.isRegExp = copipe_core.isRegExp, copipe.isException = copipe_core.isException, copipe.isNotUndefined = copipe_core.isNotUndefined, copipe.isNotNull = copipe_core.isNotNull, copipe.isNotBoolean = copipe_core.isNotBoolean, copipe.isNotNumber = copipe_core.isNotNumber, copipe.isNotInteger = copipe_core.isNotInteger, copipe.isNotString = copipe_core.isNotString, copipe.isNotFunction = copipe_core.isNotFunction, copipe.isNotObject = copipe_core.isNotObject, copipe.isNotArray = copipe_core.isNotArray, copipe.isNotDate = copipe_core.isNotDate, copipe.isNotRegExp = copipe_core.isNotRegExp, copipe.isNotException = copipe_core.isNotException, copipe.isUndefinedArray = copipe_core.isUndefinedArray, copipe.isNullArray = copipe_core.isNullArray, copipe.isBooleanArray = copipe_core.isBooleanArray, copipe.isNumberArray = copipe_core.isNumberArray, copipe.isIntegerArray = copipe_core.isIntegerArray, copipe.isStringArray = copipe_core.isStringArray, copipe.isFunctionArray = copipe_core.isFunctionArray, copipe.isObjectArray = copipe_core.isObjectArray, copipe.isArrayArray = copipe_core.isArrayArray, copipe.isDateArray = copipe_core.isDateArray, copipe.isRegExpArray = copipe_core.isRegExpArray, copipe.isExceptionArray = copipe_core.isExceptionArray, copipe.isNotUndefinedArray = copipe_core.isNotUndefinedArray, copipe.isNotNullArray = copipe_core.isNotNullArray, copipe.isNotBooleanArray = copipe_core.isNotBooleanArray, copipe.isNotNumberArray = copipe_core.isNotNumberArray, copipe.isNotIntegerArray = copipe_core.isNotIntegerArray, copipe.isNotStringArray = copipe_core.isNotStringArray, copipe.isNotFunctionArray = copipe_core.isNotFunctionArray, copipe.isNotObjectArray = copipe_core.isNotObjectArray, copipe.isNotArrayArray = copipe_core.isNotArrayArray, copipe.isNotDateArray = copipe_core.isNotDateArray, copipe.isNotRegExpArray = copipe_core.isNotRegExpArray, copipe.isNotExceptionArray = copipe_core.isNotExceptionArray, copipe.isUndef = copipe_core.isUndef, copipe.isBool = copipe_core.isBool, copipe.isNum = copipe_core.isNum, copipe.isInt = copipe_core.isInt, copipe.isStr = copipe_core.isStr, copipe.isFunc = copipe_core.isFunc, copipe.isObj = copipe_core.isObj, copipe.isExcept = copipe_core.isExcept, copipe.isNotUndef = copipe_core.isNotUndef, copipe.isNotBool = copipe_core.isNotBool, copipe.isNotNum = copipe_core.isNotNum, copipe.isNotInt = copipe_core.isNotInt, copipe.isNotStr = copipe_core.isNotStr, copipe.isNotFunc = copipe_core.isNotFunc, copipe.isNotObj = copipe_core.isNotObj, copipe.isNotExcept = copipe_core.isNotExcept, 
    // syntax
    copipe.assert = copipe_core.assert, copipe.guard = copipe_core.guard, copipe.functionValue = copipe_core.functionValue, copipe.sc = copipe_core.sc, copipe.if_ = copipe_core.if_, copipe.switch_ = copipe_core.switch_, copipe.isThrown = copipe_core.isThrown, copipe.isThrownValue = copipe_core.isThrownValue, copipe.isThrownException = copipe_core.isThrownException, copipe.isNotThrown = copipe_core.isNotThrown, 
    // compare
    copipe.equal = copipe_core.equal, copipe.or = copipe_core.or, copipe.match = copipe_core.match, copipe.matchValue = copipe_core.matchValue, copipe.matchTo = copipe_core.matchTo, copipe.defaultValue = copipe_core.defaultValue, copipe.defaultTo = copipe_core.defaultTo;
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
