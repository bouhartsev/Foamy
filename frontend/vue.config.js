const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    configureWebpack: {
        plugins: [
            new VuetifyLoaderPlugin()
        ],
    },

    // css: {
    //     loaderOptions: {
    //         sass: {
    //             prependData: `@import "~@/assets/main.scss"`,
    //         },
    //     },
    // },

    pwa: {
        name: "Foamy",
        short_name: "Foamy",
        manifestOptions: {
            "start_url": 'http://foamy.std-1374.ist.mospolytech.ru',
            "icons": [
                {
                    "src": "./static/img/icons/android-chrome-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "./static/img/icons/android-chrome-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ],
            "background_color": "#ffffff",
        },
        themeColor: '#ffffff',
        msTileColor: '#ffffff',
        iconPaths: {
            favicon32: 'static/img/icons/favicon-32x32.png',
            favicon16: 'static/img/icons/favicon-16x16.png',
            appleTouchIcon: 'static/img/icons/apple-touch-icon.png',
            maskIcon: 'static/img/icons/safari-pinned-tab.svg',
            msTileImage: 'static/img/icons/msapplication-icon-144x144.png'
        }
    },

    devServer: {
        proxy: {
            '^/api/': {
                target: 'http://127.0.0.1:8000/',
                ws: false,
            },
        },
    },

    // publicPath: '/',

    // outputDir must be added to Django's TEMPLATE_DIRS
    outputDir: 'dist',
    // assetsDir must match Django's STATIC_URL
    assetsDir: 'static',
}