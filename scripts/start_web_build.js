/**
 * copipe.js
 *  file: start_web_build.js
 */

const execSync = require('child_process').execSync;
// console.log('start_web_build.js')

// run tsc
execSync('tsc -p ./tsconfig.web.json');

// copy test code
execSync('cpx ./source/test/web/test_build.html ./build/web/test/');

// run test code
execSync('opener ./build/web/test/test_build.html')

// NG opener iexplore relative path. OK full path.
// opener iexplore ./source/test/web/test_build.html
