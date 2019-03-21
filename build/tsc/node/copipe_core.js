"use strict";
/**
 * copipe.js
 *  file: copipe_core.js
 */
var copipe;
(function (copipe) {
    copipe.VERSION = '0.2.1';
})(copipe || (copipe = {}));
(function (copipe) {
    /**
     * 単独引数の場合の型判定関数
     */
    var type;
    (function (type) {
        type.objectToString = function (value) {
            return Object.prototype.toString.call(value);
        };
    })(type = copipe.type || (copipe.type = {}));
    var _type;
    (function (_type) {
        var objectToString = type.objectToString;
        var _primitiveTypeCheckFunc = function (typeName) {
            return (function (value) { return typeof value === typeName; });
        };
        var _objectTypeCheckFunc = function (typeName) {
            return (function (value) { return objectToString(value) === "[object " + typeName + "]"; });
        };
        _type._isUndefined = _primitiveTypeCheckFunc('undefined');
        _type._isNull = function (value) { return (value === null); };
        _type._isBoolean = _primitiveTypeCheckFunc('boolean');
        _type._isNumber = function (value) {
            return (_primitiveTypeCheckFunc('number')(value) && (isFinite(value)));
        };
        _type._isInteger = function (value) {
            if (!_type._isNumber(value)) {
                return false;
            }
            return Math.round(value) === value;
        };
        _type._isString = _primitiveTypeCheckFunc('string');
        _type._isFunction = _primitiveTypeCheckFunc('function');
        _type._isObject = function (value) {
            if ((_objectTypeCheckFunc('Object')(value))
                && (_type._isNotNull(value))
                && (_type._isNotUndefined(value))) {
                return true;
            }
            return false;
        };
        _type._isArray = _objectTypeCheckFunc('Array');
        _type._isDate = _objectTypeCheckFunc('Date');
        /**
         * 単独引数の場合の型判定関数の否定形
         */
        _type._isNotUndefined = function (value) { return !_type._isUndefined(value); };
        _type._isNotNull = function (value) { return !_type._isNull(value); };
        _type._isNotBoolean = function (value) { return !_type._isBoolean(value); };
        _type._isNotNumber = function (value) { return !_type._isNumber(value); };
        _type._isNotInteger = function (value) { return !_type._isInteger(value); };
        _type._isNotString = function (value) { return !_type._isString(value); };
        _type._isNotFunction = function (value) { return !_type._isFunction(value); };
        _type._isNotObject = function (value) { return !_type._isObject(value); };
        _type._isNotArray = function (value) { return !_type._isArray(value); };
        _type._isNotDate = function (value) { return !_type._isDate(value); };
    })(_type || (_type = {}));
    /**
     * 文法拡張
     * ここでは型判定関数で使うための assert のみ記載
     */
    var syntax;
    (function (syntax) {
        var _isBoolean = _type._isBoolean, _isString = _type._isString;
        function assert(value, message) {
            if (message === void 0) { message = ''; }
            if (!_isString(message)) {
                throw new Error('assert argsType:' + message);
            }
            if (!_isBoolean(value)) {
                throw new Error('assert argsType:' + message);
            }
            if (!value) {
                throw new Error('assert:' + message);
            }
        }
        syntax.assert = assert;
        ;
    })(syntax = copipe.syntax || (copipe.syntax = {}));
    /**
     * 複数引数や関数引数の場合の型判定関数
     */
    (function (type) {
        var assert = syntax.assert;
        var _isUndefined = _type._isUndefined, _isNull = _type._isNull, _isBoolean = _type._isBoolean, _isNumber = _type._isNumber, _isInteger = _type._isInteger, _isString = _type._isString, _isFunction = _type._isFunction, _isObject = _type._isObject, _isArray = _type._isArray, _isDate = _type._isDate, _isNotUndefined = _type._isNotUndefined, _isNotNull = _type._isNotNull, _isNotBoolean = _type._isNotBoolean, _isNotNumber = _type._isNotNumber, _isNotInteger = _type._isNotInteger, _isNotString = _type._isNotString, _isNotFunction = _type._isNotFunction, _isNotObject = _type._isNotObject, _isNotArray = _type._isNotArray, _isNotDate = _type._isNotDate;
        var _isTypeCheck = function (checkFunc, argsArray) {
            assert(_isFunction(checkFunc));
            assert(_isArray(argsArray));
            var l = argsArray.length;
            if (l === 0) {
                return false;
            }
            else if (l === 1) {
                return checkFunc(argsArray[0]);
            }
            else {
                for (var i = 0; i < l; i += 1) {
                    if (!checkFunc(argsArray[i])) {
                        return false;
                    }
                }
                return true;
            }
        };
        var _isTypeCheckArgsFunc = function (checkFunc) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _isTypeCheck(checkFunc, args);
            };
        };
        var _isTypeCheckArrayFunc = function (checkFunc) {
            return function (value) { return _isTypeCheck(checkFunc, value); };
        };
        type.isUndefined = _isTypeCheckArgsFunc(_isUndefined);
        type.isNull = _isTypeCheckArgsFunc(_isNull);
        type.isBoolean = _isTypeCheckArgsFunc(_isBoolean);
        type.isNumber = _isTypeCheckArgsFunc(_isNumber);
        type.isInteger = _isTypeCheckArgsFunc(_isInteger);
        type.isString = _isTypeCheckArgsFunc(_isString);
        type.isFunction = _isTypeCheckArgsFunc(_isFunction);
        type.isObject = _isTypeCheckArgsFunc(_isObject);
        type.isArray = _isTypeCheckArgsFunc(_isArray);
        type.isDate = _isTypeCheckArgsFunc(_isDate);
        type.isNotUndefined = _isTypeCheckArgsFunc(_isNotUndefined);
        type.isNotNull = _isTypeCheckArgsFunc(_isNotNull);
        type.isNotBoolean = _isTypeCheckArgsFunc(_isNotBoolean);
        type.isNotNumber = _isTypeCheckArgsFunc(_isNotNumber);
        type.isNotInteger = _isTypeCheckArgsFunc(_isNotInteger);
        type.isNotString = _isTypeCheckArgsFunc(_isNotString);
        type.isNotFunction = _isTypeCheckArgsFunc(_isNotFunction);
        type.isNotObject = _isTypeCheckArgsFunc(_isNotObject);
        type.isNotArray = _isTypeCheckArgsFunc(_isNotArray);
        type.isNotDate = _isTypeCheckArgsFunc(_isNotDate);
        type.isUndefinedArray = _isTypeCheckArrayFunc(_isUndefined);
        type.isNullArray = _isTypeCheckArrayFunc(_isNull);
        type.isBooleanArray = _isTypeCheckArrayFunc(_isBoolean);
        type.isNumberArray = _isTypeCheckArrayFunc(_isNumber);
        type.isIntegerArray = _isTypeCheckArrayFunc(_isInteger);
        type.isStringArray = _isTypeCheckArrayFunc(_isString);
        type.isFunctionArray = _isTypeCheckArrayFunc(_isFunction);
        type.isObjectArray = _isTypeCheckArrayFunc(_isObject);
        type.isArrayArray = _isTypeCheckArrayFunc(_isArray);
        type.isDateArray = _isTypeCheckArrayFunc(_isDate);
        type.isNotUndefinedArray = _isTypeCheckArrayFunc(_isNotUndefined);
        type.isNotNullArray = _isTypeCheckArrayFunc(_isNotNull);
        type.isNotBooleanArray = _isTypeCheckArrayFunc(_isNotBoolean);
        type.isNotNumberArray = _isTypeCheckArrayFunc(_isNotNumber);
        type.isNotIntegerArray = _isTypeCheckArrayFunc(_isNotInteger);
        type.isNotStringArray = _isTypeCheckArrayFunc(_isNotString);
        type.isNotFunctionArray = _isTypeCheckArrayFunc(_isNotFunction);
        type.isNotObjectArray = _isTypeCheckArrayFunc(_isNotObject);
        type.isNotArrayArray = _isTypeCheckArrayFunc(_isNotArray);
        type.isNotDateArray = _isTypeCheckArrayFunc(_isNotDate);
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
/**
 * 型判定関数の省略形
 */
(function (copipe) {
    var type;
    (function (type) {
        type.isUndef = type.isUndefined;
        type.isBool = type.isBoolean;
        type.isNum = type.isNumber;
        type.isInt = type.isInteger;
        type.isStr = type.isString;
        type.isFunc = type.isFunction;
        type.isObj = type.isObject;
        type.isNotUndef = type.isNotUndefined;
        type.isNotBool = type.isNotBoolean;
        type.isNotNum = type.isNotNumber;
        type.isNotInt = type.isNotInteger;
        type.isNotStr = type.isNotString;
        type.isNotFunc = type.isNotFunction;
        type.isNotObj = type.isNotObject;
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
/**
 * 文法拡張
 */
(function (copipe) {
    var syntax;
    (function (syntax) {
        /**
         * a, b の2つの引数が一致するかどうかを判定する関数
         * テストコードに使うためのもの
         */
        syntax.checkEqual = function (a, b, message) {
            if (message === void 0) { message = ''; }
            if (a === b) {
                return true;
            }
            message = "Test: " + message + "\n" +
                'A !== B\n' +
                ("A = " + String(a) + "\n") +
                ("B = " + String(b));
            console.log(message);
            return false;
        };
        /**
         * 非関数の場合はそのままの値、関数の場合は実行結果を返す関数
         */
        syntax.functionValue = function (value) {
            if (copipe.isFunction(value)) {
                return value();
            }
            else {
                return value;
            }
        };
        /**
         * 配列内に value と一致する値があるかどうかを判定する関数
         */
        syntax.or = function (value, compares) {
            syntax.assert(copipe.isArray(compares));
            for (var i = 0; i < compares.length; i += 1) {
                if (value === compares[i]) {
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
        syntax.if_ = function (condition) {
            syntax.assert(copipe.isBoolean(condition), 'if_ argsType');
            var assertObjectThenElse = function (args) {
                syntax.assert(copipe.isObject(args), 'if_() argsType');
                syntax.assert(!(copipe.isUndefined(args.then) && copipe.isUndefined(args.else)), 'if_() argsType');
            };
            if (condition) {
                return function (args) {
                    assertObjectThenElse(args);
                    return syntax.functionValue(args.then);
                };
            }
            else {
                return function (args) {
                    assertObjectThenElse(args);
                    return syntax.functionValue(args.else);
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
        syntax.switch_ = function (expression) {
            return function (args) {
                syntax.assert(copipe.isArray(args), 'switch_() argsType');
                for (var i = 0; i < args.length; i += 1) {
                    syntax.assert(copipe.isArray(args[i]), 'switch_() argsType not[[]]');
                }
                for (var i = 0; i < args.length; i += 1) {
                    if (args[i].length === 0) {
                        return undefined;
                    }
                    ;
                    if (args[i].length === 1) {
                        return syntax.functionValue(args[i][0]);
                    }
                    ;
                    if (args[i][0] === expression) {
                        return syntax.functionValue(args[i][1]);
                    }
                }
                return undefined;
            };
        };
    })(syntax = copipe.syntax || (copipe.syntax = {}));
})(copipe || (copipe = {}));
/**
 * 名前空間ルートの公開
 */
(function (copipe) {
    var _a, _b;
    /**
     * 型判定
     */
    _a = copipe.type, copipe.isUndefined = _a.isUndefined, copipe.isNull = _a.isNull, copipe.isBoolean = _a.isBoolean, copipe.isNumber = _a.isNumber, copipe.isInteger = _a.isInteger, copipe.isString = _a.isString, copipe.isFunction = _a.isFunction, copipe.isObject = _a.isObject, copipe.isArray = _a.isArray, copipe.isDate = _a.isDate, copipe.isNotUndefined = _a.isNotUndefined, copipe.isNotNull = _a.isNotNull, copipe.isNotBoolean = _a.isNotBoolean, copipe.isNotNumber = _a.isNotNumber, copipe.isNotInteger = _a.isNotInteger, copipe.isNotString = _a.isNotString, copipe.isNotFunction = _a.isNotFunction, copipe.isNotObject = _a.isNotObject, copipe.isNotArray = _a.isNotArray, copipe.isNotDate = _a.isNotDate, copipe.isUndefinedArray = _a.isUndefinedArray, copipe.isNullArray = _a.isNullArray, copipe.isBooleanArray = _a.isBooleanArray, copipe.isNumberArray = _a.isNumberArray, copipe.isIntegerArray = _a.isIntegerArray, copipe.isStringArray = _a.isStringArray, copipe.isFunctionArray = _a.isFunctionArray, copipe.isObjectArray = _a.isObjectArray, copipe.isArrayArray = _a.isArrayArray, copipe.isDateArray = _a.isDateArray, copipe.isNotUndefinedArray = _a.isNotUndefinedArray, copipe.isNotNullArray = _a.isNotNullArray, copipe.isNotBooleanArray = _a.isNotBooleanArray, copipe.isNotNumberArray = _a.isNotNumberArray, copipe.isNotIntegerArray = _a.isNotIntegerArray, copipe.isNotStringArray = _a.isNotStringArray, copipe.isNotFunctionArray = _a.isNotFunctionArray, copipe.isNotObjectArray = _a.isNotObjectArray, copipe.isNotArrayArray = _a.isNotArrayArray, copipe.isNotDateArray = _a.isNotDateArray, copipe.isUndef = _a.isUndef, copipe.isBool = _a.isBool, copipe.isNum = _a.isNum, copipe.isInt = _a.isInt, copipe.isStr = _a.isStr, copipe.isFunc = _a.isFunc, copipe.isObj = _a.isObj, copipe.isNotUndef = _a.isNotUndef, copipe.isNotBool = _a.isNotBool, copipe.isNotNum = _a.isNotNum, copipe.isNotInt = _a.isNotInt, copipe.isNotStr = _a.isNotStr, copipe.isNotFunc = _a.isNotFunc, copipe.isNotObj = _a.isNotObj;
    /**
     * 文法拡張
     */
    _b = copipe.syntax, copipe.assert = _b.assert, copipe.checkEqual = _b.checkEqual;
})(copipe || (copipe = {}));
module.exports = copipe;
