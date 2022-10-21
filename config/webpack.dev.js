const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: "development",
    devtool: "cheap-module-source-map",
    output: {
        filename: "[name].js",
        library: "guidelineTipId",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "dist"),
    },
};

module.exports = (env, argv) => {
    let dist;
    switch(argv.nodeEnv) {
        case 'platform-vanilla':
            dist = {
                template: "./example/index.html",
                entry: {
                    index: "./src/index.ts",
                }
            }
            break;
        case 'platform-react':
            dist = {
                template: "./example/index-react.html",
                entry: {
                    react: "./src/index-react.tsx",
                }
            }
            break;
    }   
    return {
        ...merge(commonConfig, {
            ...devConfig,
            entry: dist.entry,
            plugins: [
                new HtmlWebpackPlugin(
                    { 
                        template: dist.template,
                        scriptLoading: 'blocking',
                        inject: 'body',
                    }
                )
                /* webpack template documentation https://github.com/jantimon/html-webpack-plugin#options */
            ],
        }),
    };
};
