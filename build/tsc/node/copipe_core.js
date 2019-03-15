"use strict";
/**
 * copipe.js
 * version 0.1.8
 *  copipe_core.js
 */
var copipe;
(function (copipe) {
    copipe.VERSION = '0.1.8';
})(copipe || (copipe = {}));
(function (copipe) {
    var type;
    (function (type) {
        function _isNull(value) {
            return (value === null);
        }
        type._isNull = _isNull;
        function _isUndefined(value) {
            return (typeof value === 'undefined');
        }
        type._isUndefined = _isUndefined;
        function _isBoolean(value) {
            return (typeof value === 'boolean');
        }
        type._isBoolean = _isBoolean;
    })(type = copipe.type || (copipe.type = {}));
})(copipe || (copipe = {}));
(function (copipe) {
    var syntax;
    (function (syntax) {
        var _a = copipe.type, _isUndefined = _a._isUndefined, _isNull = _a._isNull, _isBoolean = _a._isBoolean;
        function assert(value, message) {
            if (_isUndefined(message) || _isNull(message)) {
                message = '';
            }
            if (!_isBoolean(value)) {
                throw new Error('assert:' + message);
            }
            if (!value) {
                throw new Error('assert:' + message);
            }
        }
        syntax.assert = assert;
        ;
    })(syntax = copipe.syntax || (copipe.syntax = {}));
})(copipe || (copipe = {}));
module.exports = copipe;
