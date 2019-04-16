module.exports = {
  // mode: process.env.NODE_ENV || "development",
  entry: ["./build/tsc/node/copipe.js"],
  output: {
    filename: "copipe.js",
    path: __dirname + "/release/node/",

    library: '',
    libraryTarget: 'commonjs2',
  }
};