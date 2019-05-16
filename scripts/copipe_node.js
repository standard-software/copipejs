/**
 * copipe.js
 *  file: copipe_node.js
 */

const { existsSync, mkdirSync } = require('fs');

/**
 * 強制的にフォルダパスを作成する関数
 * dir: './a/b/c/' の形式で指定する
 */
const forceMkDirSync = (dir) => {
  dirArray = dir.split('/');
  let path = '';
  dirArray.forEach((dirName) => {
    if (dirName === '') { dirName = '.'; }
    path += dirName + '/';
    if (!existsSync(path)) {
      mkdirSync(path);
    }
  });
};

module.exports = { forceMkDirSync };