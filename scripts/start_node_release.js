/**
 * copipe.js
 *  file: start_node_release.js
 */

const execSync = require('child_process').execSync;
// console.log('start_node_release.js')

// run tsc
execSync('npm run tsc:node');

// copy test code
execSync('cpx ./debug/node/test/test_copipe_core.js ./release/node/test/');
execSync('cpx ./debug/node/test/test_copipe_console.js ./release/node/test/');
execSync('cpx ./source/test/node/test_release_copipe.js ./release/node/test/');
execSync('cpx ./source/test/node/test_release_copipe.mjs ./release/node/test/');

// run webpack
execSync('webpack --config webpack.config.node.mode_production.js');

// run test code
let result;
result = execSync('node ./release/node/test/test_release_copipe.js').toString();
console.log(result);
result = execSync('node --experimental-modules ./release/node/test/test_release_copipe.mjs').toString();
console.log(result);

// copy release file
require('fs').rename('./release/node/copipe.js', './release/node/copipe.min.js');

// run webpack
execSync('webpack --config webpack.config.node.mode_none.js');

// run test code
result = execSync('node ./release/node/test/test_release_copipe.js').toString();
console.log(result);
result = execSync('node --experimental-modules ./release/node/test/test_release_copipe.mjs').toString();
console.log(result);

