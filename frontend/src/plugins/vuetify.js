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
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#00bfff',
                anchor: 'inherit',
            },
            dark: {
                primary: '#00bfff',
                anchor: 'inherit',
            },
        },
        options: { customProperties: true },
    },
}

export default new Vuetify(opts)