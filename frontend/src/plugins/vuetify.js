import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
    // customVariables: ['~@/assets/variables.scss'],
    // treeShake: true,
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#00bfff',
                secondary: colors.blue,
                accent: colors.orange,
                error: colors.purple,
                info: colors.yellow,
                success: colors.white,
                warning: colors.black,
                anchor: colors.orange,

                background: '#00bfff',
            },
            dark: {
                primary: '#00bfff',
                secondary: colors.blue,
                accent: colors.orange,
                error: colors.purple,
                info: colors.black,
                success: colors.white,
                warning: colors.yellow,
                anchor: colors.orange,
            },
        },
        options: { customProperties: true },
    },
}

export default new Vuetify(opts)