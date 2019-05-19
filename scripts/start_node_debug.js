/**
 * copipe.js
 *  file: start_node_debug.js
 */

const { execSync } = require('child_process');
const { copyFileSync } = require('fs');
const { forceMkDirSync } = require('./copipe_node.js');

// run tsc
execSync('tsc -p ./tsconfig.node.json');

// copy test code
forceMkDirSync('./debug/node/test/');
copyFileSync('./source/test/node/test_debug_copipe.js', './debug/node/test/test_debug_copipe.js');

// run test code
let result;
result = execSync('node ./debug/node/test/test_debug_copipe.js').toString();
console.log(result);
