/**
 * copipe.js
 *  file: start_node_debug.js
 */

const execSync = require('child_process').execSync;
// console.log('start_node_debug.js')

// run tsc
execSync('npm run tsc:node');

// copy test code
execSync('cpx ./source/test/node/test_debug_copipe.js ./debug/node/test/');

// run test code
let result;
result = execSync('node ./debug/node/test/test_debug_copipe.js').toString();
console.log(result);
