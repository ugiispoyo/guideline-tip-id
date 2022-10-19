const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    entry: "./src/index.ts",
    mode: "production",
    devtool: 'cheap-module-source-map',
    output: {
        library: 'guidelineTipId',
        libraryTarget: 'umd',
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new HtmlWebpackPlugin({ template: "./example/index.html" })],
};

module.exports = merge(commonConfig, devConfig);
