import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from 'url';
import path from "path";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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

export default (env, argv) => {
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
