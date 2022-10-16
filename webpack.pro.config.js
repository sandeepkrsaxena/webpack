var path = require("path");
module.exports={
    mode: "production",
    entry: "./src/js/App.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
      module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
      }
}