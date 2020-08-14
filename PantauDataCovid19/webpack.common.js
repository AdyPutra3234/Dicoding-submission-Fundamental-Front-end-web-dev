const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader",
                include: path.join(__dirname, "src")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}