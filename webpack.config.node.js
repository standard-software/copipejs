module.exports = {
  mode: 'none',
  entry: ['./build/node/copipe.js'],
  output: {
    filename: 'copipe.js',
    path: __dirname + '/release/node/',

    library: '',
    libraryTarget: 'commonjs2',
  }
};