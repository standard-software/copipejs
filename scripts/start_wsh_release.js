/**
 * copipe.js
 *  file: start_wsh_release.js
 */

const { execSync } = require('child_process');
const { copyFileSync, renameSync } = require('fs');
const { forceMkDirSync } = require('./copipe_node.js');

// run tsc
execSync('tsc -p ./tsconfig.wsh.json');

// copy test code
forceMkDirSync('./release/wsh/test/');
copyFileSync('./debug/wsh/test/test_copipe_core.js', './release/wsh/test/test_copipe_core.js');
copyFileSync('./debug/wsh/test/test_copipe_console.js', './release/wsh/test/test_copipe_console.js');
copyFileSync('./source/test/wsh/test_release_copipe.wsf', './release/wsh/test/test_release_copipe.wsf');

// run webpack
execSync('webpack --config webpack.config.wsh.mode_none.js');

// run test code
execSync('opener ./release/wsh/test/test_release_copipe.wsf');
