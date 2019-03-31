/**
 * copipe.js
 *  file: ./source/test/node/test_release_copipe.js
 *  description:
 *    release ビルド後の test_copipe オブジェクトを実行するためのファイル
 */

var copipe = require('../../../release/node/copipe.js');

var test_copipe = require('../test_copipe_core.js');

const main = function() {
  console.log(
    'copipe.VERSION', copipe.VERSION
  );

  test_copipe.run(copipe);
};
main();

