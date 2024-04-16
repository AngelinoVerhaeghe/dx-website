// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig( {
    ssr: false,
    runtimeConfig: {
        public: {
            strapiUrl: "http://localhost:1337",
        }
    },
    devtools: { enabled: true },
    css: [ '~/assets/css/main.css' ],
    modules: [
        '@pinia/nuxt',
        'nuxt-icon',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
} );
