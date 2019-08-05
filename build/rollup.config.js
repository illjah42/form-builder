import vue from 'rollup-plugin-vue'
import nodeResolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import commonJs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
// import { eslint } from 'rollup-plugin-eslint'

export default {
    input: './src/entry.js',
    output: {
        name: 'FormBuilder',
        file: './dist/js/form-builder.js',
        format: 'iife',
        exports: 'named'
    },
    plugins: [
        vue(),
        commonJs({
            include: 'node_modules/**'
        }),
        nodeResolve({
            mainFields: ['module', 'main', 'jsnext:main']
        }),
        json(),
        postcss(),
        babel({
            exclude: 'node_modules/**'
        })
        // eslint()
    ],
    watch: {
        exclude: ['node_modules/**']
    }
}
