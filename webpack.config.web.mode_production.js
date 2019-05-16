module.exports = {
  mode: 'production',
  entry: ['./debug/web/copipe.js'],
  output: {
    filename: 'copipe.js',
    path: __dirname + '/release/web/',

    library: 'copipe',
    libraryTarget: 'global',
  }
};