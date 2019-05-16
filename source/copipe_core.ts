/**
 * copipe.js
 *  file: copipe_core.ts
 */

namespace copipe {
  export const VERSION = '0.7.3';
}

namespace copipe {

  /**
   * 単独引数の場合の型判定関数
   *  assert などの防御はなし。
   */
  export namespace type {
    export const objectToString = (value: any): string => {
      return Object.prototype.toString.call(value);
    };
  }

  namespace _type {
    const { objectToString } = type;

    type PrimitiveTypeName = 'undefined' | 'boolean' | 'number' | 'string' | 'function';
    const _primitiveTypeCheckFunc =
      (typeName: PrimitiveTypeName): (args1: any) => boolean => {
        return ((value: any): boolean => typeof value === typeName);
      };

    type ObjectTypeName = 'Object' | 'Array' | 'Date' | 'Error' | 'RegExp';
    const _objectTypeCheckFunc =
      (typeName: ObjectTypeName): (args1: any) => boolean => {
        return ((value: any): boolean => objectToString(value) === `[object ${typeName}]`);
      };

    export const _isUndefined = _primitiveTypeCheckFunc('undefined');

    export const _isNull = (value: any): boolean => (value === null);

    export const _isBoolean = _primitiveTypeCheckFunc('boolean');

    export const _isNumber = (value: any): boolean => {
      return (_primitiveTypeCheckFunc('number')(value) && (isFinite(value)));
    };

    export const _isInteger = (value: any): boolean => {
      if (!_isNumber(value)) {
        return false;
      }
      return Math.round(value) === value;
    };
    export const _isString = _primitiveTypeCheckFunc('string');

    export const _isFunction = _primitiveTypeCheckFunc('function');

    export const _isObject = (value: any): boolean => {
      if (
        (_objectTypeCheckFunc('Object')(value))
        && (_isNotNull(value))
        && (_isNotUndefined(value))
      ) {
        return true;
      }
      return false;
    };

    export const _isArray = _objectTypeCheckFunc('Array');

    export const _isDate = _objectTypeCheckFunc('Date');

    export const _isRegExp = _objectTypeCheckFunc('RegExp');

    export const _isError = _objectTypeCheckFunc('Error');

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
    export const _isException = (value: any) => {
      if (_isObject(value)) {
        if ('name' in value) {
          if ('message' in value) {
            return true;
          }
        }
      } else if (_isError(value)) {
        return true;
      }
      return false;
    };

    /**
     * 単独引数の場合の型判定関数の否定形
     */
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
    export const _isNotRegExp = (value: any) => !_isRegExp(value);
    export const _isNotException = (value: any) => !_isException(value);
  }

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
  export namespace syntax {
    const { _isBoolean, _isString } = _type;

    export const assert = (value: boolean, message: string = '') => {
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
    let guard_status = true;
    let guard_message: any;
    export const guard = (guardFunc: () => any[], runFunc: any): boolean => {
      guard_message = '';
      if (guard_status === false) { return false; }

      if (!isFunction(guardFunc)) {
        throw new SyntaxError('guard args1(guardFunc) type is not function.');
      }
      const result = guardFunc();
      if (!isArray(result)) {
        throw new SyntaxError('guard args1(guardFunc) result type is not array.');
      }
      for (let i = 0; i < result.length; i += 1) {
        let resultValue;
        let message = '';
        if (isArray(result[i])) {
          if (!(1 <= result[i].length)) {
            throw new SyntaxError('guard args1(guardFunc) result item is not array.length >= 1.');
          }
          resultValue = result[i][0];
          if (2 <= result[i].length) {
            message = result[i][1];
          }
        } else {
          resultValue = result[i];
        }
        resultValue = functionValue(resultValue);
        if (!isBoolean(resultValue)) {
          throw new SyntaxError('guard args1(guardFunc) result item value type is not boolean.');
        }
        if (resultValue === false) {
          guard_message = message;
          if (!isUndefined(runFunc)) {
            if (!isFunction(runFunc)) {
              throw new SyntaxError('guard args2(runFunc) type is not function');
            }
            runFunc();
          }
          return true;
        }
      }
      return false;
    };
    guard.message = () => guard_message;

    guard.status = (value: boolean): boolean => {
      return guard_status = value;
    };
    guard.on = (): void => {
      guard_status = true;
    };
    guard.off = (): void => {
      guard_status = false;
    };
  }

  /**
   * 複数引数や関数引数の場合の型判定関数
   */
  export namespace type {
    const { assert } = syntax;

    const {
      _isUndefined, _isNull,
      _isBoolean, _isNumber, _isInteger, _isString,
      _isFunction, _isObject, _isArray, _isDate,
      _isRegExp, _isException,

      _isNotUndefined, _isNotNull,
      _isNotBoolean, _isNotNumber, _isNotInteger, _isNotString,
      _isNotFunction, _isNotObject, _isNotArray, _isNotDate,
      _isNotRegExp, _isNotException,
    } = _type;

    const _isTypeCheck = (
      checkFunc: (args1: any) => boolean,
      argsArray: any[],
    ) => {
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

    const _isTypeCheckArgsFunc = (
      checkFunc: (args1: any) => boolean
    ): ((...args: any[]) => boolean) => {
      return (...args: any[]): boolean => _isTypeCheck(checkFunc, args);
    };

    const _isTypeCheckArrayFunc = (
      checkFunc: (args1: any) => boolean
    ): (args1: any[]) => boolean => {
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
    export const isRegExp = _isTypeCheckArgsFunc(_isRegExp);
    export const isException = _isTypeCheckArgsFunc(_isException);

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
    export const isNotRegExp = _isTypeCheckArgsFunc(_isNotRegExp);
    export const isNotException = _isTypeCheckArgsFunc(_isNotException);

    export const isUndefinedArray = _isTypeCheckArrayFunc(_isUndefined);
    export const isNullArray = _isTypeCheckArrayFunc(_isNull);
    export const isBooleanArray = _isTypeCheckArrayFunc(_isBoolean);
    export const isNumberArray = _isTypeCheckArrayFunc(_isNumber);
    export const isIntegerArray = _isTypeCheckArrayFunc(_isInteger);
    export const isStringArray = _isTypeCheckArrayFunc(_isString);
    export const isFunctionArray = _isTypeCheckArrayFunc(_isFunction);
    export const isObjectArray = _isTypeCheckArrayFunc(_isObject);
    export const isArrayArray = _isTypeCheckArrayFunc(_isArray);
    export const isDateArray = _isTypeCheckArrayFunc(_isDate);
    export const isRegExpArray = _isTypeCheckArrayFunc(_isRegExp);
    export const isExceptionArray = _isTypeCheckArrayFunc(_isException);

    export const isNotUndefinedArray = _isTypeCheckArrayFunc(_isNotUndefined);
    export const isNotNullArray = _isTypeCheckArrayFunc(_isNotNull);
    export const isNotBooleanArray = _isTypeCheckArrayFunc(_isNotBoolean);
    export const isNotNumberArray = _isTypeCheckArrayFunc(_isNotNumber);
    export const isNotIntegerArray = _isTypeCheckArrayFunc(_isNotInteger);
    export const isNotStringArray = _isTypeCheckArrayFunc(_isNotString);
    export const isNotFunctionArray = _isTypeCheckArrayFunc(_isNotFunction);
    export const isNotObjectArray = _isTypeCheckArrayFunc(_isNotObject);
    export const isNotArrayArray = _isTypeCheckArrayFunc(_isNotArray);
    export const isNotDateArray = _isTypeCheckArrayFunc(_isNotDate);
    export const isNotRegExpArray = _isTypeCheckArrayFunc(_isNotRegExp);
    export const isNotExceptionArray = _isTypeCheckArrayFunc(_isNotException);
  }
}

/**
 * 型判定関数の省略形
 */
namespace copipe.type {
  export const isUndef = isUndefined;
  export const isBool = isBoolean;
  export const isNum = isNumber;
  export const isInt = isInteger;
  export const isStr = isString;
  export const isFunc = isFunction;
  export const isObj = isObject;
  export const isExcept = isException;

  export const isNotUndef = isNotUndefined;
  export const isNotBool = isNotBoolean;
  export const isNotNum = isNotNumber;
  export const isNotInt = isNotInteger;
  export const isNotStr = isNotString;
  export const isNotFunc = isNotFunction;
  export const isNotObj = isNotObject;
  export const isNotExcept = isNotException;
}

/**
 * 文法拡張
 */
namespace copipe.syntax {

  /**
   * 例外や値が投げられたかどうかを判定する関数
   *  テストコードに使うためのもの
   *  compareFunc で 引数として投げられた値が渡されるのでそこで判定する
   *  関数になっているのはオブジェクトを値比較ができないため
   */
  export const isThrown = (
    targetFunc: Function,
    compareFunc: Function
  ): boolean => {
    if (!isFunction(targetFunc, compareFunc)) {
      throw new SyntaxError(
        'isThrown args(targetFunc or compareFunc) type is not function.'
      );
    }
    try {
      targetFunc();
    } catch (e) {
      return compareFunc(e);
    }
    return false;
  };

  /**
   * 値が投げられたかどうか判定する関数
   */
  export const isThrownValue = (
    targetFunc: Function,
    thrownValue: any
  ): boolean => {
    return isThrown(targetFunc, (thrown: any): boolean => {
      return thrown === thrownValue;
    });
  };

  /**
   * 例外が投げられたかどうか判定する関数
   */
  export const isThrownException = (
    targetFunc: Function,
    exceptionName: string
  ): boolean => {
    if (!isString(exceptionName)) {
      throw new SyntaxError('isThrownException args2(exceptionName) type is not string.');
    }

    return isThrown(
      targetFunc,
      (thrown: any): boolean => {
        if (isException(thrown)) {
          return thrown.name === exceptionName;
        }
        return false;
      }
    );
  };

  /**
   * 例外や値が投げられていないことを判定する関数
   */
  export const isNotThrown = (targetFunc: Function): boolean => {
    return !isThrown(targetFunc, () => true);
  };

  /**
   * 非関数の場合はそのままの値、関数の場合は実行結果を返す関数
   */
  export const functionValue = (value: any): any => {
    if (isFunction(value)) {
      return value();
    } else {
      return value;
    }
  };

  /**
   * 二番目の引数を比較関数として利用して結果を返す関数
   *  sc は second call の略
   */
  export const sc = (
    argsFirst: any,
    // func: (args1: any, ...args: any) => any,
    func: any,
    ...argsRest: any
  ): any => {
    return func(argsFirst, ...argsRest);
  };

  /**
   * 比較する関数
   */
  export const equal = (valueA: any, valueB: any) => {
    return valueA === valueB;
  };

  /**
   * 配列内に value と一致する値があるかどうかを判定する関数
   */
  export const or = (value: any, compareArray: any[]) => {
    assert(isArray(compareArray));
    for (let i = 0; i < compareArray.length; i += 1) {
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
  export const if_ = (condition: boolean): any => {
    if (!isBoolean(condition)) {
      throw new TypeError('if_ args(condition) type is not boolean.');
    }
    const checkSyntax = (args: any) => {
      if (!isObject(args)) {
        throw new SyntaxError('if_() args type is not object.');
      }
      if (isUndefined(args.then) && isUndefined(args.else)) {
        throw new SyntaxError('if_() args .then .else both nothing.');
      }
    };
    if (condition) {
      return (args: any) => {
        checkSyntax(args);
        return functionValue(args.then);
      };
    } else {
      return (args: any) => {
        checkSyntax(args);
        return functionValue(args.else);
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
  export const switch_ = (expression: any): any => {
    return (args: any[]) => {
      if (!isArray(args)) {
        throw new SyntaxError('switch_() args type is not array.');
      }
      for (let i = 0; i < args.length; i += 1) {
        if (!isArray(args[i])) {
          throw new SyntaxError('switch_() args type is not array in array.');
        }
      }
      for (let i = 0; i < args.length; i += 1) {
        if (args[i].length === 0) { return undefined; }
        if (args[i].length === 1) { return functionValue(args[i][0]); }
        if (args[i][0] === expression) {
          return functionValue(args[i][1]);
        }
      }
      return undefined;
    };
  };
}

/**
 * 文字列処理
 */
namespace copipe.string {

  /**
   * 文字列を他の文字列か正規表現で一致を調べる関数
   */
  export const match = (
    value: string, compareValue: string | RegExp
  ) => {
    guard(() => [
      [isString(value), 'match args1(value) type is not String.'],
      [
        isString(compareValue) || isRegExp(compareValue),
        'match args2(compareValue) type is not String or RegExp.'
      ],
    ], () => {
      throw new TypeError(guard.message());
    });

    if (isString(compareValue)) {
      return value === compareValue;
    }
    if (isRegExp(compareValue)) {
      return value.match(compareValue) !== null;
    }
    throw new TypeError('match args2(compareValue) type is not String or RegExp.');
  };

  /**
   * 文字列を他の文字列か正規表現で含むかどうかを調べる関数
   */
  export const includes = (
    value: string, compareValue: string | RegExp
  ) => {
    guard(() => [
      [isString(value), 'includes args1(value) type is not String.'],
      [
        isString(compareValue) || isRegExp(compareValue),
        'includes args2(compareValue) type is not String or RegExp.'
      ],
    ], () => {
      throw new TypeError(guard.message());
    });

    if (isString(compareValue)) {
      // console.info('copipe_core value.incluedes', isString(value), value);
      return value.includes(String(compareValue));
    }
    if (isRegExp(compareValue)) {
      return value.match(compareValue) !== null;
    }
    throw new TypeError('includes args2(compareValue) type is not String or RegExp.');
  };
}

/**
 * テスト
 */
namespace copipe.test {

  /**
   * a, b の2つの引数が一致するかどうかを判定する関数
   *  テストコードに使うためのもの
   */
  export const checkEqual =
    (a: any, b: any, message: string = ''): boolean => {
      if (!isString(message)) {
        throw new SyntaxError('checkEqual args(message) type is not string.');
      }

      if (a === b) { return true; }
      message = `Test: ${message}\n` +
        'A !== B\n' +
        `A = ${String(a)}\n` +
        `B = ${String(b)}`;
      console.log(message);
      return false;
    };
}

/**
 * 名前空間ルートの公開
 */
namespace copipe {

  /**
   * 型判定
   */
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
  } = copipe.type;

  /**
   * 文法拡張
   */
  export const {
    assert, guard,
    functionValue, sc, equal, or, if_, switch_,
    isThrown, isThrownValue, isThrownException, isNotThrown,
  } = copipe.syntax;

  /**
   * テスト
   */
  export const {
    checkEqual,
  } = copipe.test;
}

export = copipe;
