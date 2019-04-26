/**
 * copipe.js
 *  file: start_node_release.js
 */

const execSync = require('child_process').execSync;
// console.log('start_node_release.js')

// run tsc
execSync('npm run tsc:node');

// run webpack
execSync('webpack --config webpack.config.node.js');

// copy test code
execSync('cpx ./build/node/test/test_copipe_core.js ./release/node/test/');
execSync('cpx ./build/node/test/test_copipe_console.js ./release/node/test/');
execSync('cpx ./source/test/node/test_release_copipe.js ./release/node/test/');
execSync('cpx ./source/test/node/test_release_copipe.mjs ./release/node/test/');

// run test code
let result;
result = execSync('node ./release/node/test/test_release_copipe.js').toString();
console.log(result);
result = execSync('node --experimental-modules ./release/node/test/test_release_copipe.mjs').toString();
console.log(result);
