
var test_copipe;
(function(test_copipe){

  /**
   * 各関数を変数として宣言
   */
  let {
    or, if_, switch_, equal, sc, guard, 
    checkEqual,
    isThrown, isThrownValue, isThrownException, isNotThrown,
    isUndefined, isNotUndefined, isUndefinedArray, isNotUndefinedArray,
    isNull, isNotNull, isNullArray, isNotNullArray,
    isBoolean, isNotBoolean, isBooleanArray, isNotBooleanArray,
    isNumber, isNotNumber, isNumberArray, isNotNumberArray,
    isInteger, isNotInteger, isIntegerArray, isNotIntegerArray,
    isString, isNotString, isStringArray, isNotStringArray,
    isFunction, isNotFunction, isFunctionArray, isNotFunctionArray,
    isObject, isNotObject, isObjectArray, isNotObjectArray,
    isArray, isNotArray, isArrayArray, isNotArrayArray,
    isDate, isNotDate, isDateArray, isNotDateArray,
    isException, isNotException, isExceptionArray, isNotExceptionArray,
  } = {};
  
  /**
   * 初期化として関数変数を代入する
   */
  const initialize = function(copipe){
    ({
      isUndefined, isNotUndefined, isUndefinedArray, isNotUndefinedArray,
      isNull, isNotNull, isNullArray, isNotNullArray,
      isBoolean, isNotBoolean, isBooleanArray, isNotBooleanArray,
      isNumber, isNotNumber, isNumberArray, isNotNumberArray,
      isInteger, isNotInteger, isIntegerArray, isNotIntegerArray,
      isString, isNotString, isStringArray, isNotStringArray,
      isFunction, isNotFunction, isFunctionArray, isNotFunctionArray,
      isObject, isNotObject, isObjectArray, isNotObjectArray,
      isArray, isNotArray, isArrayArray, isNotArrayArray,
      isDate, isNotDate, isDateArray, isNotDateArray,
      isException, isNotException, isExceptionArray, isNotExceptionArray,
    } = copipe.type);
    ({ 
      or, if_, switch_, equal, sc, guard,
      isThrown, isThrownValue, isThrownException, isNotThrown,
    } = copipe.syntax);
    ({ 
      checkEqual, 
    } = copipe.test);
  }
  test_copipe.initialize = initialize;

  (function(type){
    const test_isUndefined = function() {
      var u1;
      var n1 = null;
      var v1 = 1;
    
      checkEqual(true, isUndefined(u1));
      checkEqual(false, isUndefined(n1));
      checkEqual(false, isUndefined(v1));
      checkEqual(true, isUndefinedArray([u1]));
      checkEqual(false, isUndefinedArray([n1]));
      checkEqual(false, isUndefinedArray([v1]));
    
      checkEqual(true, isUndefined(u1, u1));
      checkEqual(false, isUndefined(u1, n1));
      checkEqual(false, isUndefined(u1, v1));
      checkEqual(true, isUndefinedArray([u1, u1]));
      checkEqual(false, isUndefinedArray([u1, n1]));
      checkEqual(false, isUndefinedArray([u1, v1]));
    
      checkEqual(false, isNotUndefined(u1));
      checkEqual(true, isNotUndefined(n1));
      checkEqual(true, isNotUndefined(v1));
      checkEqual(false, isNotUndefinedArray([u1]));
      checkEqual(true, isNotUndefinedArray([n1]));
      checkEqual(true, isNotUndefinedArray([v1]));
    
      checkEqual(false, isNotUndefined(u1, u1));
      checkEqual(false, isNotUndefined(u1, n1));
      checkEqual(true, isNotUndefined(n1, n1));
      checkEqual(false, isNotUndefined(n1, u1));
      checkEqual(true, isNotUndefined(v1, v1));
      checkEqual(true, isNotUndefined(v1, n1));
      checkEqual(false, isNotUndefined(v1, u1));
      checkEqual(false, isNotUndefinedArray([u1, u1]));
      checkEqual(false, isNotUndefinedArray([u1, n1]));
      checkEqual(true, isNotUndefinedArray([n1, n1]));
      checkEqual(false, isNotUndefinedArray([n1, u1]));
      checkEqual(true, isNotUndefinedArray([v1, v1]));
      checkEqual(true, isNotUndefinedArray([v1, n1]));
      checkEqual(false, isNotUndefinedArray([v1, u1]));
    
      //配列の中身ではなく配列自体を判定する
      //配列はundefinedではない
      checkEqual(false, isUndefined([v1, v1]));
      checkEqual(false, isUndefined([u1, u1]));
      checkEqual(true, isNotUndefined([v1, v1]));
      checkEqual(true, isNotUndefined([u1, u1]));
    }
    type.test_isUndefined = test_isUndefined;

    const test_isNull = function() {
    
      var u1;
      var n1 = null;
      var v1 = 1;
    
      checkEqual(false, isNull(u1));
      checkEqual(true, isNull(n1));
      checkEqual(false, isNull(v1));
      checkEqual(false, isNullArray([u1]));
      checkEqual(true, isNullArray([n1]));
      checkEqual(false, isNullArray([v1]));
    
      checkEqual(true, isNull(n1, n1));
      checkEqual(false, isNull(n1, u1));
      checkEqual(false, isNull(n1, v1));
      checkEqual(true, isNullArray([n1, n1]));
      checkEqual(false, isNullArray([n1, u1]));
      checkEqual(false, isNullArray([n1, v1]));
    
      checkEqual(true, isNotNull(u1));
      checkEqual(false, isNotNull(n1));
      checkEqual(true, isNotNull(v1));
      checkEqual(true, isNotNullArray([u1]));
      checkEqual(false, isNotNullArray([n1]));
      checkEqual(true, isNotNullArray([v1]));
    
      checkEqual(true, isNotNull(u1, u1));
      checkEqual(false, isNotNull(u1, n1));
      checkEqual(false, isNotNull(n1, n1));
      checkEqual(false, isNotNull(n1, u1));
      checkEqual(true, isNotNull(v1, v1));
      checkEqual(false, isNotNull(v1, n1));
      checkEqual(true, isNotNull(v1, u1));
      checkEqual(true, isNotNullArray([u1, u1]));
      checkEqual(false, isNotNullArray([u1, n1]));
      checkEqual(false, isNotNullArray([n1, n1]));
      checkEqual(false, isNotNullArray([n1, u1]));
      checkEqual(true, isNotNullArray([v1, v1]));
      checkEqual(false, isNotNullArray([v1, n1]));
      checkEqual(true, isNotNullArray([v1, u1]));
    }
    type.test_isNull = test_isNull;

    const test_isBoolean = function() {
    
      checkEqual(true, isBoolean(true));
      checkEqual(true, isBoolean(false));
      checkEqual(false, isBoolean(undefined));
      checkEqual(false, isBoolean(null));
      checkEqual(false, isBoolean(''));
      checkEqual(false, isBoolean('true'));
      checkEqual(false, isBoolean('false'));
      checkEqual(false, isBoolean(123));
      checkEqual(false, isBoolean(0));
      checkEqual(false, isBoolean(-1));
    
      checkEqual(true, isBoolean(true, true));
      checkEqual(true, isBoolean(true, true, true));
      checkEqual(true, isBoolean(true, false, true));
      checkEqual(false, isBoolean(true, 1, true));
    
      checkEqual(false, isBoolean([true, true]));
    
      checkEqual(true, isBooleanArray([true, true]));
      checkEqual(true, isBooleanArray([true, true, true]));
      checkEqual(true, isBooleanArray([true, false, true]));
      checkEqual(false, isBooleanArray([true, 1, true]));
    };
    type.test_isBoolean = test_isBoolean;

    const test_isNumber = function() {
    
      checkEqual(true, isNumber(123));
      checkEqual(true, isNumber(0));
      checkEqual(true, isNumber(-1));
      checkEqual(true ,isNumber(123.4));
      checkEqual(true, isNumber(123.0));
      checkEqual(false,isNumber(true));
      checkEqual(false,isNumber(false));
      checkEqual(false,isNumber(null));
      checkEqual(false,isNumber(undefined));
      checkEqual(false,isNumber(Infinity));  //InfinityもNumberとして許可しないことにする
      checkEqual(false,isNumber(NaN));
      checkEqual(false,isNumber(''));
      checkEqual(false,isNumber('ABC'));
      checkEqual(false,isNumber('ABC10'));
      checkEqual(false,isNumber('10ABC'));
      checkEqual(false,isNumber('0ABC'));
      checkEqual(false,isNumber('0'));
      checkEqual(false,isNumber('5'));
      checkEqual(false,isNumber('-5'));
      checkEqual(false,isNumber('100'));
      checkEqual(false,isNumber('-100'));
      checkEqual(false,isNumber([]));
      checkEqual(false,isNumber({}));
    
      checkEqual(false,  isNotNumber(123));
      checkEqual(false,  isNotNumber(0));
      checkEqual(true,   isNotNumber(true));
      checkEqual(true,   isNotNumber(null));
      checkEqual(true,   isNotNumber(undefined));
      checkEqual(true,   isNotNumber(Infinity));
      checkEqual(true,   isNotNumber(NaN));
      checkEqual(true,   isNotNumber(''));
    
      checkEqual(true,   isNumber(1, 2));
      checkEqual(true,   isNumber(3, 4, 5));
      checkEqual(true,   isNumber(10.5, 20.5, 30.5));
      checkEqual(false,  isNumber(1, 2, true));
    
      checkEqual(false,  isNotNumber(1, 2));
      checkEqual(false,  isNotNumber(3, 4, 5));
      checkEqual(false,  isNotNumber(10.5, 20.5, 30.5));
      checkEqual(false,  isNotNumber(1, 2, true));
      checkEqual(true,   isNotNumber(false, true));
      checkEqual(true,   isNotNumber('a', 'b'));
    
      checkEqual(false,  isNumber([1, 2]));
    
      checkEqual(true,   isNumberArray([1, 2]));
      checkEqual(true,   isNumberArray([3, 4, 5]));
      checkEqual(true,   isNumberArray([10.5, 20.5, 30.5]));
      checkEqual(false,  isNumberArray([1, 2, true]));
    
      checkEqual(false,  isNotNumberArray([1, 2]));
      checkEqual(false,  isNotNumberArray([3, 4, 5]));
      checkEqual(false,  isNotNumberArray([10.5, 20.5, 30.5]));
      checkEqual(false,  isNotNumberArray([1, 2, true]));
      checkEqual(true,   isNotNumberArray([false, true]));
      checkEqual(true,   isNotNumberArray(['a', 'b']));
    };
    type.test_isNumber = test_isNumber;
    
    const test_isInteger = function() {
    
      checkEqual(true,  isInteger(123));
      checkEqual(true,  isInteger(0));
      checkEqual(true,  isInteger(-1));
      checkEqual(false, isInteger(123.4));
      checkEqual(true,  isInteger(123.0));
      //.0の場合は整数か小数かは判断できない
    
      checkEqual(false, isInteger(true));
      checkEqual(false, isInteger(false));
      checkEqual(false, isInteger(null));
      checkEqual(false, isInteger(undefined));
      checkEqual(false, isInteger(''));
      checkEqual(false, isInteger('ABC'));
      checkEqual(false, isInteger('0'));
      checkEqual(false, isInteger('5'));
      checkEqual(false, isInteger('-5'));
      checkEqual(false, isInteger('100'));
      checkEqual(false, isInteger('-100'));
      checkEqual(false, isInteger([]));
      checkEqual(false, isInteger({}));
    
      checkEqual(true,    isInteger(1, 2));
      checkEqual(true,    isInteger(3, 4, 5));
      checkEqual(true,    isInteger(10, 20, 30));
      checkEqual(false,   isInteger(1, 2, 3.5));
    
      checkEqual(false,   isNotInteger(1, 2));
      checkEqual(false,   isNotInteger(3, 4, 5));
      checkEqual(false,   isNotInteger(10, 20, 30));
      checkEqual(false,   isNotInteger(1, 2, 3.5));
      checkEqual(false,   isNotInteger(1, 2.1, 3.5));
      checkEqual(true,    isNotInteger(1.1, 2.2, 3.5));
    
      checkEqual(false,   isIntegerArray([]));
      checkEqual(true,    isIntegerArray([1]));
      checkEqual(true,    isIntegerArray([1, 2, 3]));
      checkEqual(true,    isIntegerArray([1, 2, 0]));
      checkEqual(false,   isIntegerArray([1, 2, NaN]));
      checkEqual(false,   isIntegerArray([1, 2, null]));
      checkEqual(false,   isIntegerArray(['a', 'b', 1]));
    };
    type.test_isInteger = test_isInteger;

    const test_isString = function() {

      checkEqual(true,    isString(''));
      checkEqual(true,    isString('a'));
      checkEqual(true,    isString('a', 'b', 'c'));
      checkEqual(true,    isString('a', 'b', ''));
      checkEqual(false,   isString('a', 'b', 0));
      checkEqual(false,   isString('a', 'b', 1));
      checkEqual(false,   isString('a', 'b', null));
      checkEqual(false,   isString('a', 'b', undefined));
    
      checkEqual(false,   isStringArray([]));
      checkEqual(true,    isStringArray(['']));
      checkEqual(true,    isStringArray(['a']));
      checkEqual(true,    isStringArray(['a', 'b', 'c']));
      checkEqual(true,    isStringArray(['a', 'b', '']));
      checkEqual(false,   isStringArray(['a', 'b', 0]));
      checkEqual(false,   isStringArray(['a', 'b', 1]));
      checkEqual(false,   isStringArray(['a', 'b', null]));
      checkEqual(false,   isStringArray(['a', 'b', undefined]));
    };
    type.test_isString = test_isString;

    const test_isFunction = function() {
    
      checkEqual(true,    isFunction( function(){} ) );
      checkEqual(false,   isFunction( {} ) );
    
      checkEqual(true,    isFunction( function(){},  test_isFunction ) );
      checkEqual(false,   isFunction( {},  test_isFunction ) );
    
      checkEqual(true,    isFunctionArray(
        [function(){},  test_isFunction] ) );
      checkEqual(false,   isFunctionArray(
        [{},  test_isFunction] ) );
        
    };
    type.test_isFunction = test_isFunction;

    const test_isObject = function() {
    
      checkEqual(true,    isObject({}));
      checkEqual(false,   isObject([]));
      checkEqual(false,   isObject(null));
      checkEqual(false,   isObject(undefined));
    
      checkEqual(true,    isObject({}));
      checkEqual(true,    isObject({a:0}));
      checkEqual(true,    isObject({a:0, b:1}));
      checkEqual(true,    isObjectArray([{}, {a:0, b:1}]));
      checkEqual(false,   isObjectArray([[], {a:0, b:1}]));
      checkEqual(false,   isObjectArray([[{}], {a:0, b:1}]));
    
      checkEqual(true,    isObject({a:0, b:1}, {c:0, d:1}));
    
      checkEqual(false,   isObject([]));
      checkEqual(false,   isObject(null));
      checkEqual(false,   isObject(undefined));
      checkEqual(false,   isObject(function(){}));
    };
    type.test_isObject = test_isObject;
    
    const test_isArray = function() {
    
      checkEqual(true,  isArray([123]));
      checkEqual(true,  isArray([]));
      checkEqual(true,  isArray([1,2,3]));
      checkEqual(false, isArray(123));
      checkEqual(false, isArray('1,2,3'));
    
      checkEqual(true,    isArray([1], [2]));
      checkEqual(true,    isArray([3], [4], [5]));
      checkEqual(true,    isArray([10, 20], [30]));
      checkEqual(false,   isArray([1, 2], 3));
    
      checkEqual(true,    isNotArray(1, 2));
      checkEqual(false,   isNotArray([3], [4], 5));
      checkEqual(true,    isNotArray(10, 20, 30));
      checkEqual(false,   isNotArray(10, 20, [30]));
    
    
      checkEqual(true,    isArrayArray([[1], [2]]));
      checkEqual(true,    isArrayArray([[3], [4], [5]]));
      checkEqual(true,    isArrayArray([[10, 20], [30]]));
      checkEqual(false,   isArrayArray([[1, 2], 3]));
    
      checkEqual(true,    isNotArrayArray([1, 2]));
      checkEqual(false,   isNotArrayArray([[3], [4], 5]));
      checkEqual(true,    isNotArrayArray([10, 20, 30]));
      checkEqual(false,   isNotArrayArray([10, 20, [30]]));
    };
    type.test_isArray = test_isArray;
    
    const test_isDate = function() {
      checkEqual(true,    isDate(new Date(2017,1,1)));
      checkEqual(true,    isDate(new Date('2017/01')));
      checkEqual(true,    isDate(new Date(2017,1)));
      checkEqual(true,    isDate(new Date(2017,1)));
    };
    type.test_isDate = test_isDate;

    const test_isExcection = function() {
      checkEqual(true,  isException({name: '', message: ''}));
      checkEqual(false, isException({name: ''}));
      checkEqual(false, isException({message: ''}));

      checkEqual(true,  isException(new Error()));
      checkEqual(true,  isException(new TypeError()));
      checkEqual(true,  isException(new SyntaxError()));
      checkEqual(true,  isException(new ReferenceError()));

      const UserException = function(message) {
        this.message = message;
        this.name = "UserException";
      };
      checkEqual(true,  isException(new UserException('message')));
    }
    type.test_isExcection = test_isExcection;

  })(type = test_copipe.type || (test_copipe.type = {}));

  (function(syntax){

    const test_or = function() {
      var value;
      checkEqual(false, or(value, []));
      checkEqual(false, or(value, [null]));
      checkEqual(false, or(value, [null, null]));
      checkEqual(false, or(value, [null, 0]));
      checkEqual(false, or(value, [0, '']));
      checkEqual(true,  or(value, [undefined]));
      checkEqual(true,  or(value, [undefined, null]));
      checkEqual(true,  or(value, [null, undefined]));
      checkEqual(true,  or(value, [undefined, undefined]));
      checkEqual(true,  or(value, [undefined, 0]));
      var value = null;
      checkEqual(false, or(value, []));
      checkEqual(false, or(value, [undefined]));
      checkEqual(false, or(value, [undefined, undefined]));
      checkEqual(false, or(value, [undefined, 0]));
      checkEqual(false, or(value, [0, '']));
      checkEqual(true,  or(value, [null]));
      checkEqual(true,  or(value, [null, undefined]));
      checkEqual(true,  or(value, [undefined, null]));
      checkEqual(true,  or(value, [null, null]));
      checkEqual(true,  or(value, [null, 0]));
      var value = 1;
      checkEqual(true,  or(value, [1]));
      checkEqual(true,  or(value, [1, 2]));
      checkEqual(true,  or(value, [1, 2, 3]));
      checkEqual(false, or(value, [2]));
      checkEqual(false, or(value, [2, 3]));
    }
    syntax.test_or = test_or;

    const test_if_ = function() {
      
      const ifResultValue = {
        then: 'THEN', 
        else: 'ELSE',
      };
      checkEqual('THEN', if_(true)(ifResultValue));
      checkEqual('ELSE', if_(false)(ifResultValue));

      const ifResultFunc = {
        then: () => 'THEN', 
        else: () => 'ELSE',
      };
      checkEqual('THEN', if_(true)(ifResultFunc));
      checkEqual('ELSE', if_(false)(ifResultFunc));

      const ifThenValue = {
        then: 'THEN', 
      };
      checkEqual('THEN', if_(true)(ifThenValue));
      checkEqual(undefined, if_(false)(ifThenValue));
      
      const ifElseValue = {
        else: 'ELSE', 
      };
      checkEqual(undefined, if_(true)(ifElseValue));
      checkEqual('ELSE', if_(false)(ifElseValue));

      const ifThenFunc = {
        then: () => 'THEN', 
      };
      checkEqual('THEN', if_(true)(ifThenFunc));
      checkEqual(undefined, if_(false)(ifThenFunc));
      
      const ifElseFunc = {
        else: () => 'ELSE', 
      };
      checkEqual(undefined, if_(true)(ifElseFunc));
      checkEqual('ELSE', if_(false)(ifElseFunc));

      // Error
      checkEqual(true, isThrownException(
        () => { if_(true)() },
        'SyntaxError'
      ));

      checkEqual(true, isThrownException(
        () => { if_(true)({}) },
        'SyntaxError'
      ));

      checkEqual(true, isThrownException(
        () => { if_(true)({thenn: ''}) },
        'SyntaxError'
      ));

      checkEqual(false, isNotThrown(
        () => { if_(true)() }
      ));
      checkEqual(true, isNotThrown(
        () => { if_(true)({then: ''}) }
      ));
    }
    syntax.test_if_ = test_if_;

    const test_switch_ = function() {
      const switchResultValue1 = [
        [1, 'number 1'],
        ['1', 'string 1'],
      ];
      checkEqual('number 1', switch_(1)(switchResultValue1));
      checkEqual('string 1', switch_('1')(switchResultValue1));
      checkEqual(undefined, switch_(2)(switchResultValue1));

      const switchResultValue2 = [
        [1, 'number 1'],
        ['1', 'string 1'],
        ['default'],
      ];
      checkEqual('number 1', switch_(1)(switchResultValue2));
      checkEqual('string 1', switch_('1')(switchResultValue2));
      checkEqual('default',  switch_(2)(switchResultValue2));

      const switchResultValue3 = [
        [1, 'number 1'],
        ['1', 'string 1'],
        [],
      ];
      checkEqual('number 1', switch_(1)(switchResultValue3));
      checkEqual('string 1', switch_('1')(switchResultValue3));
      checkEqual(undefined,  switch_(2)(switchResultValue3));

      // Error
      const switchResultValue4 = [
        [1, '1'], 
        'default'
      ]
      checkEqual(true, isThrownException(
        () => { switch_(1)(switchResultValue4) },
        'SyntaxError'
      ));
      checkEqual(true, isThrownException(
        () => { switch_(2)(switchResultValue4) },
        'SyntaxError'
      ));

      const switchResultFunc1 = [
        [1, () => 'number 1'],
        ['1', () => 'string 1'],
      ];
      checkEqual('number 1', switch_(1)(switchResultFunc1));
      checkEqual('string 1', switch_('1')(switchResultFunc1));
      checkEqual(undefined, switch_(2)(switchResultFunc1));

      const switchResultFunc2 = [
        [1, () => 'number 1'],
        ['1', () => 'string 1'],
        [() => 'default'],
      ];
      checkEqual('number 1', switch_(1)(switchResultFunc2));
      checkEqual('string 1', switch_('1')(switchResultFunc2));
      checkEqual('default',  switch_(2)(switchResultFunc2));

      const switchResultFunc3 = [
        [1, 'number 1'],
        ['1', 'string 1'],
        [() => {}],
      ];
      checkEqual('number 1', switch_(1)(switchResultFunc3));
      checkEqual('string 1', switch_('1')(switchResultFunc3));
      checkEqual(undefined,  switch_(2)(switchResultFunc3));
    }
    syntax.test_switch_ = test_switch_;

    const test_sc = function() {
      checkEqual(true,  sc(1, equal, 1));
      checkEqual(false, sc(1, equal, 2));

      checkEqual(true,  sc(1, or, [1, 2]));
      checkEqual(false, sc(0, or, [1, 2]));
    };
    syntax.test_sc = test_sc;

    const test_guard = function() {

      var guardFunc = ()=>[
        isInteger(value1), [isInteger(value2), 'testmessage'] 
      ];
      {
        // ガードされない処理
        var result1 = false; var value1 = 1; var value2 = 2;
        if (guard(guardFunc)) { result1 = true }
        checkEqual(false, result1);
        checkEqual('', guard.message());
  
        // ガードされる処理
        {
          var result1 = false; var value1 = '1'; var value2 = 2;
          if (guard(guardFunc)) { result1 = true }
          checkEqual(true, result1);
          checkEqual('', guard.message());

          var result1 = false; var value1 = 1; var value2 = '2';
          if (guard(guardFunc)) { result1 = true }
          checkEqual(true, result1);
          checkEqual('testmessage', guard.message());
        }

        // ガードされる処理だがガードOFFされているので実行されない
        guard.off();
        {
          var result1 = false; var value1 = '1'; var value2 = 2;
          if (guard(guardFunc)) { result1 = true }
          checkEqual(false, result1);
          checkEqual('', guard.message());     

          var result1 = false; var value1 = 1; var value2 = '2';
          if (guard(guardFunc)) { result1 = true }
          checkEqual(false, result1);
          checkEqual('', guard.message());
        }
        guard.on();   
      }

      var guardFunc = ()=>[
        isInteger(value1), isArray(value2), 1 <= value2.length
      ];
      {
        var result1 = false; var value1 = 1; var value2 = [1];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(false, result1);
  
        var result1 = false; var value1 = 1; var value2 = [];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
  
        var result1 = false; var value1 = [1]; var value2 = [1];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
      }

      var guardFunc = ()=>[
        isArray(value1), 
        [1 <= value1.length], 
        [value1[0] === 1, 'value1[0]error'],
        () => isArray(value2),
        [() => 2 <= value2.length],
        [() => value2[0] === 1, 'value2[0]error'],
      ];
      {
        var result1 = false; var value1 = [1]; var value2 = [1,2];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(false, result1);
        checkEqual('', guard.message());
  
        var result1 = false; var value1 = 1; var value2 = [1,2];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
        checkEqual('', guard.message());
  
        var result1 = false; var value1 = []; var value2 = [1,2];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
        checkEqual('', guard.message());
  
        var result1 = false; var value1 = [2]; var value2 = [1,2];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
        checkEqual('value1[0]error', guard.message());
  
        var result1 = false; var value1 = [1]; var value2 = '[1,2]';
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
        checkEqual('', guard.message());
  
        var result1 = false; var value1 = [1]; var value2 = [1];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
        checkEqual('', guard.message());
  
        var result1 = false; var value1 = [1]; var value2 = [2,2];
        if (guard(guardFunc)) { result1 = true }
        checkEqual(true, result1);
        checkEqual('value2[0]error', guard.message());
      }
    };
    syntax.test_guard = test_guard;

    const test_isThrown = () => {
      checkEqual(true,  isThrown(() => { throw 1 }, (throwValue) => { return throwValue === 1; } ));
      checkEqual(false, isThrown(() => { throw 1 }, (throwValue) => { return throwValue !== 1; } ));
      checkEqual(false, isThrown(() => { throw 2 }, (throwValue) => { return throwValue === 1; } ));
      checkEqual(false, isThrown(() => { throw 1 }, (throwValue) => { return throwValue === '1'; } ));
      checkEqual(true,  isThrown(() => { throw '1' }, (throwValue) => { return throwValue === '1'; } ));
      checkEqual(true,  isThrown(() => { throw '' }, (throwValue) => { return throwValue === ''; } ));
      checkEqual(true,  isThrown(() => { throw {test:'TEST'} }, (throwValue) => { return throwValue.test === 'TEST'; } ));
      checkEqual(false, isThrown(() => { throw {test:'TEST'} }, (throwValue) => { return throwValue.test === 'test'; } ));

      checkEqual(false,  isThrown(() => { }, () => { } ));
      // 例外を投げない場合は isThrown は false
    };
    syntax.test_checkThrow = test_isThrown;
  })(syntax = test_copipe.syntax || (test_copipe.syntax = {}));

})(test_copipe || (test_copipe = {}));

test_copipe.run = (copipe) => {

  test_copipe.initialize(copipe);

  const { checkEqual } = copipe.test;
  checkEqual(true, true, 'assert test');
  checkEqual(false, false, 'assert test');

  const {
    test_isUndefined,
    test_isNull,
    test_isBoolean,
    test_isNumber,
    test_isInteger,
    test_isString,
    test_isFunction,
    test_isObject,
    test_isArray,
    test_isDate,
    test_isExcection,
  } = test_copipe.type;

  const {
    test_or,
    test_if_,
    test_switch_,
    test_sc,
    test_guard,
    test_checkThrow,
  } = test_copipe.syntax;

  test_isUndefined();
  test_isNull();
  test_isBoolean();
  test_isNumber();
  test_isInteger();
  test_isString();
  test_isFunction();
  test_isObject();
  test_isArray();
  test_isDate();
  test_isExcection(),
  test_or();
  test_if_();
  test_switch_();
  test_sc();
  test_guard();
  test_checkThrow();

  console.log('test_copipe_core finish.');
};

module.exports = test_copipe;
