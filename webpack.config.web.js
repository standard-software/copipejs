module.exports = {
  mode: 'none',
  entry: ['./debug/web/copipe.js'],
  output: {
    filename: 'copipe.js',
    path: __dirname + '/release/web/',

    library: 'copipe',
    libraryTarget: 'global',
  }
};