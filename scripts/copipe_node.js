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
  const isEnd = (str, search) => {
    return (str.lastIndexOf(search) === str.length - search.length);
  };

  const excludeEnd = (str, search) => {
    if (isEnd(str, search)) {
      return str.slice(0, -1 * search.length);
    }
    return str;
  };

  // 末尾の[/]を切り取る
  dir = excludeEnd(dir, '/');
  // console.log(dir);

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