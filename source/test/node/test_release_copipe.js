// node test_release_copipe.js

var copipe = require('../../../release/node/copipe.js');

var test_copipe = require('./test_copipe_core.js');

const main = function() {
  console.log(
    'copipe.VERSION', copipe.VERSION
  );

  test_copipe.run(copipe);
};
main();

