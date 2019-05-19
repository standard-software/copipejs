/**
 * copipe.js
 *  file: start_web_release.js
 */

const { execSync } = require('child_process');
const { copyFileSync, renameSync } = require('fs');
const { forceMkDirSync } = require('./copipe_node.js');

// run tsc
execSync('tsc -p ./tsconfig.web.json');

// copy test code
forceMkDirSync('./release/web/test/');
copyFileSync('./debug/web/test/test_copipe_core.js', './release/web/test/test_copipe_core.js');
copyFileSync('./debug/web/test/test_copipe_console.js', './release/web/test/test_copipe_console.js');
copyFileSync('./source/test/web/test_release_copipe.html', './release/web/test/test_release_copipe.html');
copyFileSync('./source/test/web/test_release_copipe_min.html', './release/web/test/test_release_copipe_min.html');

// run webpack
execSync('webpack --config webpack.config.web.mode_production.js');

// copy release file
renameSync('./release/web/copipe.js', './release/web/copipe.min.js');

// run test code
execSync('opener ./release/web/test/test_release_copipe_min.html');

// run webpack
execSync('webpack --config webpack.config.web.mode_none.js');

// run test code
execSync('opener ./release/web/test/test_release_copipe.html');
