module.exports = {
    theme: {
        screens: {
            // sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        colors: {
            white: 'var(--c-white)',
            black: 'var(--c-black)',
            transparent: 'transparent',
            primary: {
                '100': 'var(--c-primary-100)',
                '300': 'var(--c-primary-300)',
                '500': 'var(--c-primary-500)',
                '700': 'var(--c-primary-700)',
                '900': 'var(--c-primary-900)'
            },
            secondary: {
                '100': 'var(--c-secondary-100)',
                '300': 'var(--c-secondary-300)',
                '500': 'var(--c-secondary-500)',
                '700': 'var(--c-secondary-700)',
                '900': 'var(--c-secondary-900)'
            },
            info: {
                '100': 'var(--c-info-100)',
                '300': 'var(--c-info-300)',
                '500': 'var(--c-info-500)',
                '700': 'var(--c-info-700)',
                '900': 'var(--c-info-900)'
            },
            success: {
                '100': 'var(--c-success-100)',
                '300': 'var(--c-success-300)',
                '500': 'var(--c-success-500)',
                '700': 'var(--c-success-700)',
                '900': 'var(--c-success-900)'
            },
            warning: {
                '100': 'var(--c-warning-100)',
                '300': 'var(--c-warning-300)',
                '500': 'var(--c-warning-500)',
                '700': 'var(--c-warning-700)',
                '900': 'var(--c-warning-900)'
            },
            danger: {
                '100': 'var(--c-danger-100)',
                '300': 'var(--c-danger-300)',
                '500': 'var(--c-danger-500)',
                '700': 'var(--c-danger-700)',
                '900': 'var(--c-danger-900)'
            },
            gray: {
                '100': 'var(--c-gray-100)',
                '200': 'var(--c-gray-200)',
                '300': 'var(--c-gray-300)',
                '400': 'var(--c-gray-400)',
                '500': 'var(--c-gray-500)',
                '600': 'var(--c-gray-600)',
                '700': 'var(--c-gray-700)',
                '800': 'var(--c-gray-800)',
                '900': 'var(--c-gray-900)'
            }
        },
        container: {
            center: true,
            padding: '1rem'
        },
        cursor: {
            // auto: 'auto',
            default: 'default',
            pointer: 'pointer'
            // wait: 'wait',
            // text: 'text',
            // move: 'move',
            // 'not-allowed': 'not-allowed'
        },
        fontFamily: {
            sans: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ]
            // serif: [
            //   'Georgia',
            //   'Cambria',
            //   '"Times New Roman"',
            //   'Times',
            //   'serif',
            // ],
            // mono: [
            //   'Menlo',
            //   'Monaco',
            //   'Consolas',
            //   '"Liberation Mono"',
            //   '"Courier New"',
            //   'monospace'
            // ]
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem'
            // '5xl': '3rem',
            // '6xl': '4rem'
        },
        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        listStyleType: {
            none: 'none'
            // disc: 'disc',
            // decimal: 'decimal'
        },
        spacing: {
            px: '1px',
            '0': '0',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem'
            // '20': '5rem',
            // '24': '6rem',
            // '32': '8rem',
            // '40': '10rem',
            // '48': '12rem',
            // '56': '14rem',
            // '64': '16rem',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6'
            // '7': '7',
            // '8': '8',
            // '9': '9',
            // '10': '10',
            // '11': '11',
            // '12': '12'
        },
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1-2': '50%',
            '1-3': '33.333333%',
            '2-3': '66.666667%',
            '1-4': '25%',
            '2-4': '50%',
            '3-4': '75%',
            '1-5': '20%',
            '2-5': '40%',
            '3-5': '60%',
            '4-5': '80%',
            // '1/6': '16.666667%',
            // '2/6': '33.333333%',
            // '3/6': '50%',
            // '4/6': '66.666667%',
            // '5/6': '83.333333%',
            // '1/12': '8.333333%',
            // '2/12': '16.666667%',
            // '3/12': '25%',
            // '4/12': '33.333333%',
            // '5/12': '41.666667%',
            // '6/12': '50%',
            // '7/12': '58.333333%',
            // '8/12': '66.666667%',
            // '9/12': '75%',
            // '10/12': '83.333333%',
            // '11/12': '91.666667%',
            full: '100%',
            screen: '100vw'
        }),
        zIndex: {
            auto: 'auto',
            '0': '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '100': '100',
            '110': '110'
        }
    },
    variants: {
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: [],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: [],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: [],
        display: ['responsive'],
        fill: [],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: [],
        fontStyle: ['responsive'],
        fontWeight: ['responsive'],
        height: ['responsive'],
        inset: [],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: [],
        listStyleType: [],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: [],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: [],
        verticalAlign: [],
        visibility: ['responsive'],
        whitespace: [],
        width: ['responsive'],
        wordBreak: [],
        zIndex: []
    }
    // plugins: [require('tailwindcss-accessibility')]
}
