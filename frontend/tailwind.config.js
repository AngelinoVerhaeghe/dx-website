/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily : {
            'figtree': [ 'Figtree', 'sans-serif' ],
        },
        extend: {
            colors: {
                'dx-blue-light' : '#63ABCC',
                'dx-blue-dark' : '#32529D',
                'dx-blue-darkest' : '#2F287B'
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

