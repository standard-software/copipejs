
var test_copipe;
(function(test_copipe){

  /**
   * 各関数を変数として宣言
   */
  let {
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

    assert, guard,
    functionValue, sc, equal, or, if_, switch_, 
    isThrown, isThrownValue, isThrownException, isNotThrown,

    match,

    checkEqual,

    consoleHook,
  } = {};
  
  /**
   * 初期化として関数変数を代入する
   */
  const initialize = function(copipe){
    ({
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

      assert, guard,
      functionValue, sc, equal, or, if_, switch_, 
      isThrown, isThrownValue, isThrownException, isNotThrown,

      match,

      checkEqual, 

      consoleHook,
    } = copipe);
  }
  test_copipe.initialize = initialize;

  const test_consoleHook_hookLog = function() {

    let consoleOutput = '';
    const consoleHookHookLog = () => {
      consoleHook.hookLog((args) => { consoleOutput += args + ';' });
    }

    const testConsoleLog = () => {
      console.log('debug1');
      console.log('debug2');
      console.log('release1');
      console.log('release2');
    }
  
    consoleOutput = '';
    consoleHookHookLog();
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug1;debug2;release1;release2;', consoleOutput)

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog(['debug1'], [], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug1;', consoleOutput);

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog(['debug1', 'release1'], [], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug1;release1;', consoleOutput)

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog([/debug?/], [], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug1;debug2;', consoleOutput)

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog([/debug?/], ['debug1'], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug2;', consoleOutput)

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog([], ['release1'], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug1;debug2;release2;', consoleOutput);

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog([], [/debug?/], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('release1;release2;', consoleOutput);

    consoleOutput = '';
    consoleHookHookLog();
    consoleHook.acceptLog(['debug1', 'debug2'], ['debug1'], console.log)
    testConsoleLog();
    consoleHook.unHookLog();
    checkEqual('debug2;', consoleOutput);

    consoleHook.unHookLog();
  }
  test_copipe.test_consoleHook_hookLog = test_consoleHook_hookLog;

})(test_copipe || (test_copipe = {}));

test_copipe.run = (copipe) => {

  console.log('test_copipe_console start.');

  test_copipe.initialize(copipe);

  const {
    test_consoleHook_hookLog,
  } = test_copipe;

  test_consoleHook_hookLog();

  console.log('test_copipe_console finish.');

};

module.exports = test_copipe;
