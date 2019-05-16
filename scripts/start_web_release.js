/**
 * copipe.js
 *  file: start_web_release.js
 */

const execSync = require('child_process').execSync;
// console.log('start_web_release.js')

// run tsc
execSync('npm run tsc:web');

// copy test code
execSync('cpx ./debug/web/test/test_copipe_core.js ./release/web/test/');
execSync('cpx ./debug/web/test/test_copipe_console.js ./release/web/test/');
execSync('cpx ./source/test/web/test_release_copipe.html ./release/web/test/');
execSync('cpx ./source/test/web/test_release_copipe_min.html ./release/web/test/');

// run webpack
execSync('webpack --config webpack.config.web.mode_production.js');

// copy release file
require('fs').rename('./release/web/copipe.js', './release/web/copipe.min.js');

// run test code
execSync('opener ./release/web/test/test_release_copipe_min.html');

// run webpack
execSync('webpack --config webpack.config.web.mode_none.js');

// run test code
execSync('opener ./release/web/test/test_release_copipe.html');
