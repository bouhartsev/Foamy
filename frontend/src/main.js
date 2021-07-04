import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import '@/assets/main.scss'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false;

Vue.prototype.$getDataAPI = function (pathAPI) {
    this.$store.dispatch('setEmpty', pathAPI);
    return this.$store.dispatch('getData', pathAPI);
};

Vue.mixin({
    data() {
        return {
            instancesList: [
                'tracks',
                'artists',
                'releases',
                'genres',
                'playlists',
            ],
        }
    },
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
        get_duration: function (sec_num) {
            let hours   = Math.floor(sec_num / 3600);
            let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
            let seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours   < 10) {hours   = "0"+hours;}
            if (minutes < 10) {minutes = "0"+minutes;}
            if (seconds < 10) {seconds = "0"+seconds;}

            let time = '';
            if (hours!='00') time+=hours+':';
            time+=minutes+':';
            time+=seconds;

            return time;
        },
        changeTheme: function() {
            this.$vuetify.theme.dark=!this.$vuetify.theme.dark;
            sessionStorage['theme'] = (this.$vuetify.theme.dark) ? 'dark' : 'light';
        }
    }
})

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
