/**
 * copipe.js
 *  file: start_node_release.js
 */

const { execSync } = require('child_process');
const { copyFileSync, renameSync } = require('fs');
const { forceMkDirSync } = require('./copipe_node.js');

// run tsc
execSync('tsc -p ./tsconfig.node.json');

// copy test code
forceMkDirSync('./release/node/test/');
copyFileSync('./debug/node/test/test_copipe_core.js', './release/node/test/test_copipe_core.js');
copyFileSync('./debug/node/test/test_copipe_console.js', './release/node/test/test_copipe_console.js');
copyFileSync('./source/test/node/test_release_copipe.js', './release/node/test/test_release_copipe.js');
copyFileSync('./source/test/node/test_release_copipe.mjs', './release/node/test/test_release_copipe.mjs');

// run webpack
execSync('webpack --config webpack.config.node.mode_production.js');

// run test code
let result;
result = execSync('node ./release/node/test/test_release_copipe.js').toString();
console.log(result);
result = execSync('node --experimental-modules ./release/node/test/test_release_copipe.mjs').toString();
console.log(result);

// rename release file
renameSync('./release/node/copipe.js', './release/node/copipe.min.js');

// run webpack
execSync('webpack --config webpack.config.node.mode_none.js');

// run test code
result = execSync('node ./release/node/test/test_release_copipe.js').toString();
console.log(result);
result = execSync('node --experimental-modules ./release/node/test/test_release_copipe.mjs').toString();
console.log(result);

