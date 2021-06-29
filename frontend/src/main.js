import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import '@/assets/main.scss'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false;

// Vue.prototype.$serverAbsolutePath = '//127.0.0.1:8000';
Vue.prototype.$getDataAPI = function (pathAPI) {
    this.$store.dispatch('setEmpty', pathAPI);
    return this.$store.dispatch('getData', pathAPI);
};

Vue.mixin({
    methods: {
        get_poster: function (instance, placeholder = 'track.png') {
            let image = 'null';
            if (instance.length > 0) {
                if ((''+instance[0].imageURL).indexOf('http')!=-1) image = instance[0].imageURL;
                else if ((''+instance[0].image).indexOf('http')!=-1) image = instance[0].image;
            }
            return (image != 'null') ? image : ('/static/img/placeholder/' + placeholder);
        },
        get_artist: function (artist) {
            if (artist.pseudonym!="") return artist.pseudonym;
            else return artist.name;
        },
    }
})

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
