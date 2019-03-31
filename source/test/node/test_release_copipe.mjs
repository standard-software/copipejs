/**
 * copipe.js
 *  file: ./source/test/node/test_release_copipe.mjs
 *  description:
 *    release ビルド後の test_copipe オブジェクトを
 *    import 形式でリンクして実行するためのファイル
 *  実行方法:
 *    node --experimental-modules test_release_copipe.mjs
 */

import copipe from '../../../release/node/copipe';

import test_copipe from '../test_copipe_core.js';

const main = function() {
  console.log(
    'copipe.VERSION', copipe.VERSION
  );

  test_copipe.run(copipe);
};
main();