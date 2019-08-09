const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-easings'),
        require('tailwindcss'),
        require('autoprefixer'),
        isDev ? false : require('postcss-discard-empty'),
        isDev ? false : require('cssnano')({ preset: 'default' })
        // isDev ? false : require("css-mqpacker")()
    ]
}
