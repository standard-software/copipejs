module.exports = {
  mode: 'none',
  entry: ['./debug/wsh/copipe.js'],
  output: {
    filename: 'copipe.js',
    path: __dirname + '/release/wsh/',

    library: 'copipe',
    libraryTarget: 'global',
  }
};