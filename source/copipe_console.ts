/**
 * copipe.js
 *  file: copipe_console.js
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
    match,
  } = string;
  export const {
    checkEqual,
  } = test;

  export namespace consoleHook {

    export const original: any = {};
    original.log = console.log;

    export const hookLog = (hookFunc: () => void) => {
      console.log = hookFunc;
    };

    export const unHookLog = () => {
      console.log = original.log;
    };

    export const accept = (
      acceptArray: (string|RegExp)[], 
      rejectArray: (string|RegExp)[] | undefined,
      hookFunc: any = original.log,
    ) => {
      guard(() => [
        [isArray(acceptArray), 'accept args1(acceptArray) type is not array.'],
        [
          isUndefined(rejectArray) || isArray(rejectArray), 
          'accept args2(rejectArray) type is not array.'
        ],
      ], () => { throw new TypeError(guard.message()) });

      hookLog((...messageArgs: any[]) => {
        let acceptFlag = acceptArray.length === 0;
        if (!acceptFlag) {
          acceptFlag = acceptArray.some((acceptValue) => {
            if (!isString(messageArgs[0])) {
              return false;
            }
            return match(messageArgs[0], acceptValue);
          });
        }
        if (acceptFlag && isArray(rejectArray)) {
          acceptFlag = !(rejectArray.some((rejectValue) => {
            if (!isString(messageArgs[0])) {
              return false;
            }
            return match(messageArgs[0], rejectValue);
          }));
        }

        if (acceptFlag) {
          hookFunc(...messageArgs);
        }
      });
      
    };

  }
};
export = copipe;


