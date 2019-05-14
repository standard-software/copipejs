/**
 * copipe.js
 *  file: copipe_console.ts
 */

import copipe_core = require('./copipe_core');

namespace copipe {
  /**
   * ルート公開されている名前空間の展開
   */
  export const { VERSION, type, syntax, string, test } = copipe_core;
  export const {
    isUndefined, isNull,
    isBoolean, isNumber, isInteger, isString,
    isFunction, isObject, isArray, isDate,
    isRegExp, isException,

    isNotUndefined, isNotNull,
    isNotBoolean, isNotNumber,isNotInteger, isNotString,
    isNotFunction, isNotObject, isNotArray, isNotDate,
    isNotRegExp, isNotException,

    isUndefinedArray, isNullArray,
    isBooleanArray, isNumberArray, isIntegerArray, isStringArray,
    isFunctionArray, isObjectArray, isArrayArray, isDateArray,
    isRegExpArray, isExceptionArray,

    isNotUndefinedArray, isNotNullArray,
    isNotBooleanArray, isNotNumberArray, isNotIntegerArray, isNotStringArray,
    isNotFunctionArray, isNotObjectArray, isNotArrayArray, isNotDateArray,
    isNotRegExpArray, isNotExceptionArray,

    isUndef, isBool, isNum, isInt, isStr,
    isFunc, isObj, isExcept,

    isNotUndef, isNotBool, isNotNum, isNotInt, isNotStr,
    isNotFunc, isNotObj, isNotExcept,
  } = type;
  export const {
    assert, guard,
    functionValue, sc, equal, or, if_, switch_,
    isThrown, isThrownValue, isThrownException, isNotThrown,
  } = copipe.syntax;
  export const {
    checkEqual,
  } = test;

  export namespace consoleHook {

    export const original: any = {};
    original.log = console.log;
    original.info = console.info;
    original.warn = console.warn;
    original.error = console.error;
    original.debug = console.debug;

    type consoleOutMethodName = 'log' | 'info' | 'warn' | 'error' | 'debug';
    export const _hook = (
      methodName: consoleOutMethodName,
      hookFunc: (() => void) | undefined = () => {}
    ) => {
      guard(() => [
        or(methodName, ['log', 'info', 'warn', 'error', 'debug'])
      ], () => {
        throw new Error('_hook args1(methodName) is not log|info|warn|error|debug.');
      });
      console[methodName] = hookFunc;
    };
    export const hookLog = (hookFunc: (() => void) | undefined) => {
      _hook('log', hookFunc);
    };
    export const hookInfo = (hookFunc: (() => void) | undefined) => {
      _hook('info', hookFunc);
    };
    export const hookWarn = (hookFunc: (() => void) | undefined) => {
      _hook('warn', hookFunc);
    };
    export const hookError = (hookFunc: (() => void) | undefined) => {
      _hook('error', hookFunc);
    };
    export const hookDebug = (hookFunc: (() => void) | undefined) => {
      _hook('debug', hookFunc);
    };

    export const _unHook = (methodName: consoleOutMethodName) => {
      guard(() => [
        or(methodName, ['log', 'info', 'warn', 'error', 'debug'])
      ], () => {
        throw new Error('_unHook args1(methodName) is not log|info|warn|error|debug.');
      });
      console[methodName] = original[methodName];
    };
    export const unHookLog = () => {
      _unHook('log');
    };
    export const unHookInfo = () => {
      _unHook('info');
    };
    export const unHookWarn = () => {
      _unHook('warn');
    };
    export const unHookError = () => {
      _unHook('error');
    };
    export const unHookDebug = () => {
      _unHook('debug');
    };

    export const _accept = (
      methodName: consoleOutMethodName,
      acceptArray: (string|RegExp)[],
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      guard(() => [
        [or(methodName, ['log', 'info', 'warn', 'error', 'debug']),
          '_accept args1(methodName) is not log|info|warn|error|debug.'],
        [isArray(acceptArray), '_accept args2(acceptArray) type is not array.'],
        [
          isUndefined(rejectArray) || isArray(rejectArray),
          '_accept args3(rejectArray) type is not array.'
        ],
      ], () => { throw new TypeError(guard.message()); });

      _hook(methodName, (...messageArgs: any[]) => {
        let acceptFlag = acceptArray.length === 0;
        if (!acceptFlag) {
          acceptFlag = acceptArray.some((acceptValue) => {
            if (!isString(messageArgs[0])) {
              return false;
            }
            guard(() => [
              [
                isString(acceptValue) || isRegExp(acceptValue),
                '_accept args2(acceptArray) array item type is not string|RegExp.'
              ],
            ], () => {
              throw new TypeError(guard.message());
            });
            return copipe.string.includes(messageArgs[0], acceptValue);
          });
        }
        if (acceptFlag && isArray(rejectArray)) {
          acceptFlag = !(rejectArray.some((rejectValue) => {
            if (!isString(messageArgs[0])) {
              return false;
            }
            guard(() => [
              [
                isString(rejectValue) || isRegExp(rejectValue),
                '_accept args3(rejectValue) array item type is not string|RegExp.'
              ],
            ], () => {
              throw new TypeError(guard.message());
            });
            return copipe.string.includes(messageArgs[0], rejectValue);
          }));
        }

        if (acceptFlag) {
          hookFunc(...messageArgs);
        }
      });
    };
    export const acceptLog = (
      acceptArray: (string|RegExp)[],
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      _accept('log', acceptArray, rejectArray, hookFunc);
    };
    export const acceptInfo = (
      acceptArray: (string|RegExp)[],
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      _accept('info', acceptArray, rejectArray, hookFunc);
    };
    export const acceptWarn = (
      acceptArray: (string|RegExp)[],
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      _accept('warn', acceptArray, rejectArray, hookFunc);
    };
    export const acceptError = (
      acceptArray: (string|RegExp)[],
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      _accept('error', acceptArray, rejectArray, hookFunc);
    };
    export const acceptDebug = (
      acceptArray: (string|RegExp)[],
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      _accept('debug', acceptArray, rejectArray, hookFunc);
    };

  }
}
export = copipe;


