// node test_index.js

var copipe = require('../../../release/node/copipe.js');
const { assert } = copipe.syntax;
const { _isUndefined, _isNull, _isBoolean } = copipe.type;

const main = function() {
  console.log(
    'copipe.VERSION', copipe.VERSION
  );

  assert(true, 'assert test');

  assert(_isUndefined(undefined));
  assert(!_isUndefined(null));
  assert(!_isUndefined(false));
  assert(!_isUndefined(true));
  assert(!_isUndefined(0));
  assert(!_isUndefined(1));
  assert(!_isUndefined(''));

  assert(_isNull(null));
  assert(!_isNull(undefined));
  assert(!_isNull(false));
  assert(!_isNull(true));
  assert(!_isNull(0));
  assert(!_isNull(1));
  assert(!_isNull(''));

};
main();

