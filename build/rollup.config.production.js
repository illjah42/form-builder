import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import license from 'rollup-plugin-license'
import postcss from 'rollup-plugin-postcss'
import css from 'rollup-plugin-css-only'

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

export default [
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
            css({ output: 'dist/css/form-builder.min.css' }),
            postcss(),
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
                template: {
                    ...vuePluginConfig.template,
                    optimizeSSR: true
                }
            }),
            // babel(),
            ...tailPlugins
        ]
    },

    // IIFE
    {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/js/sample.min.js',
            format: 'iife',
            name: 'FormBuilder',
            exports: 'named'
        },
        plugins: [
            ...headPlugins,
            vue(vuePluginConfig),
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
