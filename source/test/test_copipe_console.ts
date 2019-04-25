
var test_copipe_console: any;
(function(test_copipe_console){

  /**
   * 各関数を変数として宣言
   */
  var
    isUndefined: any,
    isNull: any,
    isBoolean: any,
    isNumber: any,
    isInteger: any,
    isString: any,
    isFunction: any,
    isObject: any,
    isArray: any,
    isDate: any,
    isRegExp: any,
    isException: any,

    isNotUndefined: any,
    isNotNull: any,
    isNotBoolean: any,
    isNotNumber: any,
    isNotInteger: any,
    isNotString: any,
    isNotFunction: any,
    isNotObject: any,
    isNotArray: any,
    isNotDate: any,
    isNotRegExp: any,
    isNotException: any,

    isUndefinedArray: any,
    isNullArray: any,
    isBooleanArray: any,
    isNumberArray: any,
    isIntegerArray: any,
    isStringArray: any,
    isFunctionArray: any,
    isObjectArray: any,
    isArrayArray: any,
    isDateArray: any,
    isRegExpArray: any,
    isExceptionArray: any,

    isNotUndefinedArray: any,
    isNotNullArray: any,
    isNotBooleanArray: any,
    isNotNumberArray: any,
    isNotIntegerArray: any,
    isNotStringArray: any,
    isNotFunctionArray: any,
    isNotObjectArray: any,
    isNotArrayArray: any,
    isNotDateArray: any,
    isNotRegExpArray: any,
    isNotExceptionArray: any,

    isUndef: any,
    isBool: any,
    isNum: any,
    isInt: any,
    isStr: any,
    isFunc: any,
    isObj: any,
    isExcept: any,

    isNotUndef: any,
    isNotBool: any,
    isNotNum: any,
    isNotInt: any,
    isNotStr: any,
    isNotFunc: any,
    isNotObj: any,
    isNotExcept: any,

    assert: any,
    guard: any,
    functionValue: any,
    sc: any,
    equal: any,
    or: any,
    if_: any,
    switch_: any,
    isThrown: any,
    isThrownValue: any,
    isThrownException: any,
    isNotThrown: any,

    checkEqual: any,

    consoleHook: any;

  /**
   * 初期化として関数変数を代入する
   */
  var initialize = function (copipe: any) {
    isUndefined = copipe.isUndefined;
    isNull = copipe.isNull;
    isBoolean = copipe.isBoolean;
    isNumber = copipe.isNumber;
    isInteger = copipe.isInteger;
    isString = copipe.isString;
    isFunction = copipe.isFunction;
    isObject = copipe.isObject;
    isArray = copipe.isArray;
    isDate = copipe.isDate;
    isRegExp = copipe.isRegExp;
    isException = copipe.isException;

    isNotUndefined = copipe.isNotUndefined;
    isNotNull = copipe.isNotNull;
    isNotBoolean = copipe.isNotBoolean;
    isNotNumber = copipe.isNotNumber;
    isNotInteger = copipe.isNotInteger;
    isNotString = copipe.isNotString;
    isNotFunction = copipe.isNotFunction;
    isNotObject = copipe.isNotObject;
    isNotArray = copipe.isNotArray;
    isNotDate = copipe.isNotDate;
    isNotRegExp = copipe.isNotRegExp;
    isNotException = copipe.isNotException;

    isUndefinedArray = copipe.isUndefinedArray;
    isNullArray = copipe.isNullArray;
    isBooleanArray = copipe.isBooleanArray;
    isNumberArray = copipe.isNumberArray;
    isIntegerArray = copipe.isIntegerArray;
    isStringArray = copipe.isStringArray;
    isFunctionArray = copipe.isFunctionArray;
    isObjectArray = copipe.isObjectArray;
    isArrayArray = copipe.isArrayArray;
    isDateArray = copipe.isDateArray;
    isRegExpArray = copipe.isRegExpArray;
    isExceptionArray = copipe.isExceptionArray;

    isNotUndefinedArray = copipe.isNotUndefinedArray;
    isNotNullArray = copipe.isNotNullArray;
    isNotBooleanArray = copipe.isNotBooleanArray;
    isNotNumberArray = copipe.isNotNumberArray;
    isNotIntegerArray = copipe.isNotIntegerArray;
    isNotStringArray = copipe.isNotStringArray;
    isNotFunctionArray = copipe.isNotFunctionArray;
    isNotObjectArray = copipe.isNotObjectArray;
    isNotArrayArray = copipe.isNotArrayArray;
    isNotDateArray = copipe.isNotDateArray;
    isNotRegExpArray = copipe.isNotRegExpArray;
    isNotExceptionArray = copipe.isNotExceptionArray;

    isUndef = copipe.isUndef;
    isBool = copipe.isBool;
    isNum = copipe.isNum;
    isInt = copipe.isInt;
    isStr = copipe.isStr;
    isFunc = copipe.isFunc;
    isObj = copipe.isObj;
    isExcept = copipe.isExcept;

    isNotUndef = copipe.isNotUndef;
    isNotBool = copipe.isNotBool;
    isNotNum = copipe.isNotNum;
    isNotInt = copipe.isNotInt;
    isNotStr = copipe.isNotStr;
    isNotFunc = copipe.isNotFunc;
    isNotObj = copipe.isNotObj;
    isNotExcept = copipe.isNotExcept;

    assert = copipe.assert;
    guard = copipe.guard;
    functionValue = copipe.functionValue;
    sc = copipe.sc;
    equal = copipe.equal;
    or = copipe.or;
    if_ = copipe.if_;
    switch_ = copipe.switch_;
    isThrown = copipe.isThrown;
    isThrownValue = copipe.isThrownValue;
    isThrownException = copipe.isThrownException;
    isNotThrown = copipe.isNotThrown;

    checkEqual = copipe.checkEqual;

    consoleHook = copipe.consoleHook;
  }
  test_copipe_console.initialize = initialize;

  var test_consoleHook = function(methodName: string) {

    var consoleOutput = '';
    var consoleHook_hook = function() {
      consoleHook._hook(methodName, function(args: string) { consoleOutput += args + ';' });
    }

    var testConsoleMethod = function() {
      console[methodName]('debug1');
      console[methodName]('debug2');
      console[methodName]('release1');
      console[methodName]('release2');
    }

    var consoleMethod = console.log;

    consoleOutput = '';
    consoleHook_hook();
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug1;debug2;release1;release2;', consoleOutput)

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, ['debug1'], [], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug1;', consoleOutput);

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, ['debug'], [], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug1;debug2;', consoleOutput);

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, ['debug1', 'release1'], [], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug1;release1;', consoleOutput)

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, [/debug?/], [], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug1;debug2;', consoleOutput)

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, [/debug?/], ['debug1'], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug2;', consoleOutput)

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, [], ['release1'], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug1;debug2;release2;', consoleOutput);

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, [], [/debug?/], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('release1;release2;', consoleOutput);

    consoleOutput = '';
    consoleHook_hook();
    consoleHook._accept(methodName, ['debug1', 'debug2'], ['debug1'], console[methodName])
    testConsoleMethod();
    consoleHook._unHook(methodName);
    checkEqual('debug2;', consoleOutput);

    consoleHook._hook(methodName, consoleMethod);
  }
  test_copipe_console.test_consoleHook = test_consoleHook;

})(test_copipe_console || (test_copipe_console = {}));

test_copipe_console.run = function(copipe: any) {

  console.log('test_copipe_console start.');

  test_copipe_console.initialize(copipe);

  var
    test_consoleHook = test_copipe_console.test_consoleHook;

  test_consoleHook('log');
  test_consoleHook('info');
  test_consoleHook('warn');
  test_consoleHook('error');
  test_consoleHook('debug');

  console.log('test_copipe_console finish.');

  copipe.consoleHook.unHookLog();

  // console.info('info');
  // console.warn('warn');
  // console.error('error');
  // console.debug('debug');

};

module.exports = test_copipe_console;
