const vue = require('rollup-plugin-vue')
const nodeResolve = require('rollup-plugin-node-resolve')
const json = require('rollup-plugin-json')
const commonJs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
// const { eslint } = require('rollup-plugin-eslint')
const postcss = require('rollup-plugin-postcss')

module.exports = {
    input: './src/entry.js',
    output: {
        name: 'FormBuilder',
        file: './dist/js/form-builder.js',
        format: 'iife',
        exports: 'named'
    },
    plugins: [
        vue(),
        postcss({ extract: './dist/css/form-builder.css' }),
        commonJs({
            include: 'node_modules/**'
        }),
        nodeResolve({
            mainFields: ['module', 'main', 'jsnext:main']
        }),
        json(),
        babel({
            exclude: 'node_modules/**'
        })
        // eslint()
    ],
    watch: {
        exclude: ['node_modules/**']
    }
}
