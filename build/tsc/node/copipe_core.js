"use strict";
/**
 * copipe.js
 * version 0.2.0
 *  copipe_core.js
 */
var copipe;
(function (copipe) {
    copipe.VERSION = '0.2.0';
})(copipe || (copipe = {}));
(function (copipe) {
    var type;
    (function (type) {
        /**
         * 単独引数の場合の型判定処理
         */
        var _typeofCheckFunc = function (typeName) {
            return (function (value) { return typeof value === typeName; });
        };
        type.objectToString = function (value) {
            return Object.prototype.toString.call(value);
        };
        var _objectToStringFunc = function (typeName) {
            return (function (value) { return type.objectToString(value) === "[object " + typeName + "]"; });
        };
        type._isUndefined = _typeofCheckFunc('undefined');
        type._isNull = function (value) { return (value === null); };
        type._isBoolean = _typeofCheckFunc('boolean');
        type._isNumber = function (value) {
            return (_typeofCheckFunc('number')(value) && (isFinite(value)));
        };
        type._isInteger = function (value) {
            if (!type._isNumber(value)) {
                return false;
            }
            return Math.round(value) === value;
        };
        type._isString = _typeofCheckFunc('string');
        type._isFunction = _typeofCheckFunc('function');
        type._isObject = function (value) {
            if ((_objectToStringFunc('Object')(value))
                && (type._isNotNull(value))
                && (type._isNotUndefined(value))) {
                return true;
            }
            return false;
        };
        type._isArray = _objectToStringFunc('Array');
        type._isDate = _objectToStringFunc('Date');
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
(function (copipe) {
    var type;
    (function (type) {
        type._isNotUndefined = function (value) { return !type._isUndefined(value); };
        type._isNotNull = function (value) { return !type._isNull(value); };
        type._isNotBoolean = function (value) { return !type._isBoolean(value); };
        type._isNotNumber = function (value) { return !type._isNumber(value); };
        type._isNotInteger = function (value) { return !type._isInteger(value); };
        type._isNotString = function (value) { return !type._isString(value); };
        type._isNotFunction = function (value) { return !type._isFunction(value); };
        type._isNotObject = function (value) { return !type._isObject(value); };
        type._isNotArray = function (value) { return !type._isArray(value); };
        type._isNotDate = function (value) { return !type._isDate(value); };
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
(function (copipe) {
    var syntax;
    (function (syntax) {
        var _a = copipe.type, _isUndefined = _a._isUndefined, _isBoolean = _a._isBoolean, _isString = _a._isString;
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
        syntax.alert = function (message) {
            console.log(message);
        };
        syntax.checkEqual = function (a, b, message) {
            if (message === void 0) { message = ''; }
            if (a === b) {
                return true;
            }
            message = "Test: " + message + "\n  A !== B\n  A = " + a.toString() + "\n  B = " + b.toString();
            syntax.alert(message);
            return false;
        };
    })(syntax = copipe.syntax || (copipe.syntax = {}));
})(copipe || (copipe = {}));
(function (copipe) {
    var type;
    (function (type) {
        var assert = copipe.syntax.assert;
        /**
         * 複数引数の場合の型判定処理
         */
        var _isTypeCheck = function (checkFunc, argsArray) {
            assert(type._isFunction(checkFunc));
            assert(type._isArray(argsArray));
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
        type.isUndefined = _isTypeCheckArgsFunc(type._isUndefined);
        type.isNull = _isTypeCheckArgsFunc(type._isNull);
        type.isBoolean = _isTypeCheckArgsFunc(type._isBoolean);
        type.isNumber = _isTypeCheckArgsFunc(type._isNumber);
        type.isInteger = _isTypeCheckArgsFunc(type._isInteger);
        type.isString = _isTypeCheckArgsFunc(type._isString);
        type.isFunction = _isTypeCheckArgsFunc(type._isFunction);
        type.isObject = _isTypeCheckArgsFunc(type._isObject);
        type.isArray = _isTypeCheckArgsFunc(type._isArray);
        type.isDate = _isTypeCheckArgsFunc(type._isDate);
        type.isNotUndefined = _isTypeCheckArgsFunc(type._isNotUndefined);
        type.isNotNull = _isTypeCheckArgsFunc(type._isNotNull);
        type.isNotBoolean = _isTypeCheckArgsFunc(type._isNotBoolean);
        type.isNotNumber = _isTypeCheckArgsFunc(type._isNotNumber);
        type.isNotInteger = _isTypeCheckArgsFunc(type._isNotInteger);
        type.isNotString = _isTypeCheckArgsFunc(type._isNotString);
        type.isNotFunction = _isTypeCheckArgsFunc(type._isNotFunction);
        type.isNotObject = _isTypeCheckArgsFunc(type._isNotObject);
        type.isNotArray = _isTypeCheckArgsFunc(type._isNotArray);
        type.isNotDate = _isTypeCheckArgsFunc(type._isNotDate);
        type.isUndefinedArray = _isTypeCheckArrayFunc(type._isUndefined);
        type.isNullArray = _isTypeCheckArrayFunc(type._isNull);
        type.isBooleanArray = _isTypeCheckArrayFunc(type._isBoolean);
        type.isNumberArray = _isTypeCheckArrayFunc(type._isNumber);
        type.isIntegerArray = _isTypeCheckArrayFunc(type._isInteger);
        type.isStringArray = _isTypeCheckArrayFunc(type._isString);
        type.isFunctionArray = _isTypeCheckArrayFunc(type._isFunction);
        type.isObjectArray = _isTypeCheckArrayFunc(type._isObject);
        type.isArrayArray = _isTypeCheckArrayFunc(type._isArray);
        type.isDateArray = _isTypeCheckArrayFunc(type._isDate);
        type.isNotUndefinedArray = _isTypeCheckArrayFunc(type._isNotUndefined);
        type.isNotNullArray = _isTypeCheckArrayFunc(type._isNotNull);
        type.isNotBooleanArray = _isTypeCheckArrayFunc(type._isNotBoolean);
        type.isNotNumberArray = _isTypeCheckArrayFunc(type._isNotNumber);
        type.isNotIntegerArray = _isTypeCheckArrayFunc(type._isNotInteger);
        type.isNotStringArray = _isTypeCheckArrayFunc(type._isNotString);
        type.isNotFunctionArray = _isTypeCheckArrayFunc(type._isNotFunction);
        type.isNotObjectArray = _isTypeCheckArrayFunc(type._isNotObject);
        type.isNotArrayArray = _isTypeCheckArrayFunc(type._isNotArray);
        type.isNotDateArray = _isTypeCheckArrayFunc(type._isNotDate);
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
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
module.exports = copipe;
