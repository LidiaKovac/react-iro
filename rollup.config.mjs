import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';
import packageJson from "./package.json" assert { type: "json" };
import path from "path"

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",

            },
            {
                file: packageJson.module,
                format: "esm",

            },
        ],
        plugins: [
            external(),
            resolve({
                extensions: ['.ts', '.tsx'],
                alias: {
                    react: path.resolve('./node_modules/react')
                  }
            }),
            commonjs(
                {
                    include: 'node_modules/**',
                    // This was required to fix some random errors while building
                }
            ),
            replace({
                preventAssignment: false,
                'process.env.NODE_ENV': '"development"'
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                presets: ["@babel/preset-react"],
                exclude: 'node_modules/**',
                babelHelpers: 'bundled',
            })

        ],
        external: ["react", "react-dom"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },

];