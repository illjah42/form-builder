const vue = require('rollup-plugin-vue')
const { terser } = require('rollup-plugin-terser')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonJs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const license = require('rollup-plugin-license')
const postcss = require('rollup-plugin-postcss')
const css = require('rollup-plugin-css-only')

const baseConfig = {
    input: './src/entry.js'
}

const external = [] // (if needed)

const headPlugins = [
    commonJs({
        include: 'node_modules/**'
    }),
    nodeResolve({
        mainFields: ['module', 'main', 'jsnext:main']
    })
]

const tailPlugins = [
    license({
        banner: `
            Bundle of AWES <%= pkg.name %> \n
            Generated: <%= moment().format("YYYY-MM-DD HH:mm:ss") %> \n
            Version: <%= pkg.version %>
        `
    })
]

const vuePluginConfig = {
    css: false,
    template: {
        isProduction: true
    }
}

module.exports = [
    // ESM
    {
        ...baseConfig,
        output: {
            file: 'dist/js/form-builder.esm.js',
            format: 'esm',
            exports: 'named'
        },
        plugins: [
            ...headPlugins,
            postcss({ extract: './dist/css/form-builder.min.css' }),
            vue(vuePluginConfig),
            terser({
                output: {
                    ecma: 6
                }
            }),
            ...tailPlugins
        ]
    },

    // UMD
    {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/js/form-builder.ssr.js',
            format: 'cjs',
            name: 'FormBuilder',
            exports: 'named'
        },
        plugins: [
            ...headPlugins,
            vue({
                ...vuePluginConfig,
                css: false,
                template: {
                    ...vuePluginConfig.template,
                    optimizeSSR: true
                }
            }),
            css({ output: false }),
            babel({
                exclude: 'node_modules/**'
            }),
            ...tailPlugins
        ]
    },

    // IIFE
    {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/js/form-builder.min.js',
            format: 'iife',
            name: 'FormBuilder',
            exports: 'named'
        },
        plugins: [
            ...headPlugins,
            vue(vuePluginConfig),
            css({ output: false }),
            babel({
                exclude: 'node_modules/**'
            }),
            terser({
                output: {
                    ecma: 5
                }
            }),
            ...tailPlugins
        ]
    }
]
