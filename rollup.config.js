import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";

const config = [
    {
        preserveEntrySignatures: true,
        input: ["src/react.ts", "src/vue.ts"],
        output: {
            compact: true,
            minifyInternalExports: true,
            exports: "auto",
            dir: "dist",
            format: "es",
        },
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
        external: ["react-dom", "vue"],
    },
];

export default config;
