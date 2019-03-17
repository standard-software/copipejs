// node --experimental-modules test_index.mjs

import copipe from '../../../release/node/copipe';

import test_copipe from './test_copipe_core.js';

const main = function() {
  console.log(
    'copipe.VERSION', copipe.VERSION
  );

  test_copipe.run(copipe);
};
main();