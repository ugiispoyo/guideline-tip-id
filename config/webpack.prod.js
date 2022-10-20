const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
    entry: {
        "index": "./src/index.ts",
        "react": "./src/index-react.tsx",
    },
    mode: "production",
    output: {
        filename: '[name].js',
        library: "guidelineTipId",
        libraryTarget: "umd",
        // filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
};


module.exports = merge(commonConfig, prodConfig);