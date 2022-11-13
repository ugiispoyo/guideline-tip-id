import { fileURLToPath } from 'url';
import path from "path";
import { merge } from "webpack-merge";
import commonConfig from "./webpack.common.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log(__dirname)

const prodConfig = {
    entry: {
        "index": "./src/index.ts",
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

export default merge(commonConfig, prodConfig);