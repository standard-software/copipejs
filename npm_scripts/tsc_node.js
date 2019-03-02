// このプログラムを node で実行させるときに、
// tsc を動作させる方法は次の通り
// 同期実行
    // const execSync = require('child_process').execSync;
    // const result =  execSync('.\\node_modules\\.bin\\tsc -p .\\tsconfig.node.json').toString();
    // console.log(result);
// 非同期実行
    // const exec = require('child_process').exec;
    // exec('.\\node_modules\\.bin\\tsc -p .\\tsconfig.node.json', (err, stdout, stderr) => {
    //   if (err) { console.log(err); }
    //   console.log(stdout);
    // });
// 同期実行の方はエラー表示もまともに行われないので使い物にならない。
// また、どちらにしてもWindows環境では文字化けしてしまう。

// なので、package.json の
// "scripts": {
//     "tsc_node": "tsc -p tsconfig.node.json & node ./npm_scripts/tsc_node.js",
// この部分でtscコマンドを呼び出してから、このファイルを実行している。
// tsc のビルドエラー内容が最もきれいに詳しく表示される。

// dir コマンド実行の場合でも、Windows環境では日本語文字化けする。
    // const exec = require('child_process').exec;
    // exec('dir', (err, stdout, stderr) => {
    //   if (err) { console.log(err); }
    //   console.log(stdout);
    // });

// 
const fs = require('fs');
fs.copyFile(
  './/source//release_code//node//index.js', 
  './/release//node//index.js', (err) => {
    if (err) {
      throw err;
    } else {
      console.log('file copy release/node/index.js');
    }
  }
);


