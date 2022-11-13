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
                name: "react",
                dir: "dist",
                format: "es",
                preserveModules: false,
                globals: {
                  'react-dom': 'ReactDOM',
                },
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
        external: ["react-dom"],
    },
];

export default config;
