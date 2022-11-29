import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";

const global = {
    preserveEntrySignatures: true,
    plugins: [
        postcss({
            extensions: [".css"],
        }),
        url(),
        uglify(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
    ],
};

const config = [
    {
        input: "src/index.ts",
        output: {
            compact: true,
            minifyInternalExports: true,
            exports: "auto",
            dir: "dist",
            name: "guidelineTipId",
            format: "umd",
        },
        ...global
    },
    {
        input: ["src/react.ts", "src/vue.ts"],
        output: {
            compact: true,
            minifyInternalExports: true,
            exports: "auto",
            dir: "dist",
            format: "es",
        },
        external: ["react-dom", "vue"],
        ...global
    },
];

export default config;
