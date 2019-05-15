/**
 * copipe.js
 *  file: start_web_release.js
 */

const execSync = require('child_process').execSync;
// console.log('start_web_release.js')

// run tsc
execSync('npm run tsc:web');

// run webpack
execSync('webpack --config webpack.config.web.js');

// copy test code
execSync('cpx ./debug/web/test/test_copipe_core.js ./release/web/test/');
execSync('cpx ./debug/web/test/test_copipe_console.js ./release/web/test/');
execSync('cpx ./source/test/web/test_release_copipe.html ./release/web/test/');

// run test code
execSync('opener ./release/web/test/test_release_copipe.html');

