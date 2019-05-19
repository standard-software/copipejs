/**
 * copipe.js
 *  file: start_wsh_debug.js
 */

const { execSync } = require('child_process');
const { copyFileSync } = require('fs');
const { forceMkDirSync } = require('./copipe_node.js');
// console.log('start_wsh_debug.js')

// run tsc
execSync('npm run tsc:wsh');

// copy test code
forceMkDirSync('./debug/wsh/test/');
copyFileSync('./source/test/wsh/test_debug_copipe.wsf', './debug/wsh/test/test_debug_copipe.wsf');

// run test code
execSync('opener ./debug/wsh/test/test_debug_copipe.wsf');

// NG opener iexplore relative path. OK full path.
// opener iexplore ./source/test/wsh/test_debug.html
