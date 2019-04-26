/**
 * copipe.js
 *  file: start_node_build.js
 */

const execSync = require('child_process').execSync;
// console.log('start_node_build.js')

// run tsc
execSync('npm run tsc:node');

// copy test code
execSync('cpx ./source/test/node/test_build_copipe.js ./build/node/test/');

// run test code
let result;
result = execSync('node ./build/node/test/test_build_copipe.js').toString();
console.log(result);
