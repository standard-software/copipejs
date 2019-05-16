module.exports = {
  mode: 'production',
  entry: ['./debug/node/copipe.js'],
  output: {
    filename: 'copipe.js',
    path: __dirname + '/release/node/',

    library: '',
    libraryTarget: 'commonjs2',
  }
};