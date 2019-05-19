/**
 * copipe.js
 *  file: start_web_debug.js
 */

const { execSync } = require('child_process');
const { copyFileSync } = require('fs');
const { forceMkDirSync } = require('./copipe_node.js');

// run tsc
execSync('tsc -p ./tsconfig.web.json');

// copy test code
forceMkDirSync('./debug/web/test/');
copyFileSync('./source/test/web/test_debug_copipe.html', './debug/web/test/test_debug_copipe.html');

// run test code
execSync('opener ./debug/web/test/test_debug_copipe.html');

// NG opener iexplore relative path. OK full path.
// opener iexplore ./source/test/web/test_debug.html
