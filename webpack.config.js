var path = require("path");
module.exports={
    mode: "development",
    entry: "./src/js/App.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: {
          directory: path.join(__dirname, "dist")
        },
    
        compress: true,
        port: 5000,
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