const { colors, screens } = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [ "src/**/*.svelte" ],
    theme: {
        screens: {
            'xs': '375px',
            ...screens
        },
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            ...colors
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui')
    ]
};