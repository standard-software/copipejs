module.exports = {
  // mode: process.env.NODE_ENV || "development",
  entry: ["./build/web/copipe.js"],
  output: {
    filename: "copipe.js",
    path: __dirname + "/release/web/",

    library: 'copipe',
    libraryTarget: 'global',
  }
};