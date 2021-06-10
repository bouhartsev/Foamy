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
        // manifestPath: "public/manifest.json"
        iconPaths: {
            favicon32: 'static/img/icons/favicon-32x32.png',
            favicon16: 'static/img/icons/favicon-16x16.png',
            appleTouchIcon: 'static/img/icons/apple-touch-icon-152x152.png',
            maskIcon: 'static/img/icons/safari-pinned-tab.svg',
            msTileImage: 'static/img/icons/msapplication-icon-144x144.png'
        }
    },

    // publicPath: '/',

    // outputDir must be added to Django's TEMPLATE_DIRS
    outputDir: 'dist',
    // assetsDir must match Django's STATIC_URL
    assetsDir: 'static',
}