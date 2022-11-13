import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import postcss from "rollup-plugin-postcss";

const config = [
    {
        preserveEntrySignatures: true,
        input: "src/react.tsx",
        output: [
            {
                exports: "auto",
                dir: "dist",
                format: "cjs",
                preserveModules: false,
            },
        ],
        plugins: [
            postcss({
                extensions: [".css"],
            }),
            url(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
            }),
        ],
        external: ["react", "react-dom"],
    },
];

export default config;
