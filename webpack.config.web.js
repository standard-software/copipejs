module.exports = {
  // mode: process.env.NODE_ENV || "development",
  entry: ["./build/tsc/web/copipe.js"],
  output: {
    filename: "copipe.js",
    path: __dirname + "/release/web/",

    library: 'copipe',
    libraryTarget: 'global',
  }
};