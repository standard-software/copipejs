import { isUndefined, isFunction } from "util";

/**
 * copipe.js
 * version 0.2.0
 *  copipe_core.js
 */

namespace copipe {
  export const VERSION = '0.2.0';
}

namespace copipe.type {

  /**
   * 単独引数の場合の型判定処理
   */

  const _typeofCheckFunc = (typeName: string): any => {
    return ((value: any) => typeof value === typeName);
  }

  export const objectToString = (value: any) => {
    return Object.prototype.toString.call(value);
  }

  const _objectToStringFunc = (typeName: string): any => {
    return ((value: any) => objectToString(value) === `[object ${typeName}]`);
  }  

  export const _isUndefined = _typeofCheckFunc('undefined');
  
  export const _isNull = (value: any): boolean => (value === null);
  
  export const _isBoolean = _typeofCheckFunc('boolean');

  export const _isNumber = (value: any) => {
    return (_typeofCheckFunc('number')(value) && (isFinite(value)));
  };
 
  export const _isInteger = (value: any) => {
    if (!_isNumber(value)) {
      return false;
    }
    return Math.round(value) === value;
  };
  export const _isString = _typeofCheckFunc('string');

  export const _isFunction = _typeofCheckFunc('function');

  export const _isObject = (value: any) => {
    if (
      (_objectToStringFunc('Object')(value))
      && (_isNotNull(value))
      && (_isNotUndefined(value))
      ) {
        return true;
    }
    return false;
  };

  export const _isArray = _objectToStringFunc('Array');

  export const _isDate = _objectToStringFunc('Date');
}

namespace copipe.type {
  export const _isNotUndefined = (value: any) => !_isUndefined(value);
  export const _isNotNull = (value: any) => !_isNull(value);
  export const _isNotBoolean = (value: any) => !_isBoolean(value);
  export const _isNotNumber = (value: any) => !_isNumber(value);
  export const _isNotInteger = (value: any) => !_isInteger(value);
  export const _isNotString = (value: any) => !_isString(value);
  export const _isNotFunction = (value: any) => !_isFunction(value);
  export const _isNotObject = (value: any) => !_isObject(value);
  export const _isNotArray = (value: any) => !_isArray(value);
  export const _isNotDate = (value: any) => !_isDate(value);
}

namespace copipe.syntax {
  const { _isUndefined, _isBoolean, _isString } = copipe.type;

  export function assert(value: boolean, message: string = '') {
    if (!_isString(message)) {
      throw new Error('assert argsType:' + message);
    }
    if (!_isBoolean(value)) {
      throw new Error('assert argsType:' + message);
    }
    if (!value) {
      throw new Error('assert:' + message);
    }
  };

  export const alert = (message: string) => {
    console.log(message);
  }

  export const checkEqual = 
  (a: any, b: any, message: string = '') => {
    if (a === b) {
      return true;
    }
    message = `Test: ${message}
  A !== B
  A = ${a.toString()}
  B = ${b.toString()}`
    alert(message);
    return false
  }
}

namespace copipe.type {

  const { assert } = copipe.syntax;

  /**
   * 複数引数の場合の型判定処理
   */

  const _isTypeCheck = (checkFunc: any, argsArray: any[]) => {
    assert(_isFunction(checkFunc));
    assert(_isArray(argsArray));

    var l = argsArray.length;
    if (l === 0) {
      return false;
    } else if (l === 1) {
      return checkFunc(argsArray[0]);
    } else {
      for (var i = 0; i < l; i += 1) {
        if (!checkFunc(argsArray[i])) {
          return false;
        }
      }
      return true;
    }
  };

  const _isTypeCheckArgsFunc = (checkFunc: any): any => {
    return (...args: any[]): boolean => _isTypeCheck(checkFunc, args);
  };

  const _isTypeCheckArrayFunc = (checkFunc: any): any => {
    return (value: any[]): boolean => _isTypeCheck(checkFunc, value);
  };

  export const isUndefined = _isTypeCheckArgsFunc(_isUndefined);
  export const isNull = _isTypeCheckArgsFunc(_isNull);
  export const isBoolean = _isTypeCheckArgsFunc(_isBoolean);
  export const isNumber = _isTypeCheckArgsFunc(_isNumber);
  export const isInteger = _isTypeCheckArgsFunc(_isInteger);
  export const isString = _isTypeCheckArgsFunc(_isString);
  export const isFunction = _isTypeCheckArgsFunc(_isFunction);
  export const isObject = _isTypeCheckArgsFunc(_isObject);
  export const isArray = _isTypeCheckArgsFunc(_isArray);
  export const isDate = _isTypeCheckArgsFunc(_isDate);

  export const isNotUndefined = _isTypeCheckArgsFunc(_isNotUndefined);
  export const isNotNull = _isTypeCheckArgsFunc(_isNotNull);
  export const isNotBoolean = _isTypeCheckArgsFunc(_isNotBoolean);
  export const isNotNumber = _isTypeCheckArgsFunc(_isNotNumber);
  export const isNotInteger = _isTypeCheckArgsFunc(_isNotInteger);
  export const isNotString = _isTypeCheckArgsFunc(_isNotString);
  export const isNotFunction = _isTypeCheckArgsFunc(_isNotFunction);
  export const isNotObject = _isTypeCheckArgsFunc(_isNotObject);
  export const isNotArray = _isTypeCheckArgsFunc(_isNotArray);
  export const isNotDate = _isTypeCheckArgsFunc(_isNotDate);

  export const isUndefinedArray = _isTypeCheckArrayFunc(_isUndefined);
  export const isNullArray = _isTypeCheckArrayFunc(_isNull,);
  export const isBooleanArray = _isTypeCheckArrayFunc(_isBoolean);
  export const isNumberArray = _isTypeCheckArrayFunc(_isNumber);
  export const isIntegerArray = _isTypeCheckArrayFunc(_isInteger);
  export const isStringArray = _isTypeCheckArrayFunc(_isString);
  export const isFunctionArray = _isTypeCheckArrayFunc(_isFunction);
  export const isObjectArray = _isTypeCheckArrayFunc(_isObject);
  export const isArrayArray = _isTypeCheckArrayFunc(_isArray);
  export const isDateArray = _isTypeCheckArrayFunc(_isDate);

  export const isNotUndefinedArray = _isTypeCheckArrayFunc(_isNotUndefined);
  export const isNotNullArray = _isTypeCheckArrayFunc(_isNotNull,);
  export const isNotBooleanArray = _isTypeCheckArrayFunc(_isNotBoolean);
  export const isNotNumberArray = _isTypeCheckArrayFunc(_isNotNumber);
  export const isNotIntegerArray = _isTypeCheckArrayFunc(_isNotInteger);
  export const isNotStringArray = _isTypeCheckArrayFunc(_isNotString);
  export const isNotFunctionArray = _isTypeCheckArrayFunc(_isNotFunction);
  export const isNotObjectArray = _isTypeCheckArrayFunc(_isNotObject);
  export const isNotArrayArray = _isTypeCheckArrayFunc(_isNotArray);
  export const isNotDateArray = _isTypeCheckArrayFunc(_isNotDate);

}

namespace copipe.type {
  export const isUndef = isUndefined;
  export const isBool = isBoolean;
  export const isNum = isNumber;
  export const isInt = isInteger;
  export const isStr = isString;
  export const isFunc = isFunction
  export const isObj = isObject

  export const isNotUndef = isNotUndefined;
  export const isNotBool = isNotBoolean;
  export const isNotNum = isNotNumber;
  export const isNotInt = isNotInteger;
  export const isNotStr = isNotString;
  export const isNotFunc = isNotFunction
  export const isNotObj = isNotObject
}

export = copipe;
