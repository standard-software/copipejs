/**
 * copipe.js
 *  file: copipe_console.js
 */
import copipe_console = require('./copipe_console');

namespace copipe {
  /**
   * ルート公開されている名前空間の展開
   */
  export const { VERSION, type, syntax, string, test, consoleHook } = copipe_console;
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
  } = syntax;
  export const {
    checkEqual,
  } = test;

  export const polyfillDefine = () => {
    console.info('polyfill String.prototype.includes');

    if (!String.prototype.includes) {
      String.prototype.includes = function(search, start) {
        'use strict';
        if (typeof start !== 'number') {
          start = 0;
        }

        if (start + search.length > this.length) {
          return false;
        } else {
          return this.indexOf(search, start) !== -1;
        }
      };
    }
  };

  polyfillDefine();

};
export = copipe;


