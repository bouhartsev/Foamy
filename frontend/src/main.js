import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import '@/assets/main.scss'
import vuetify from '@/plugins/vuetify'


Vue.config.productionTip = false;

Vue.prototype.$serverAbsolutePath = '//127.0.0.1:8000';
Vue.prototype.$getDataAPI = function (pathAPI) {
    this.$store.dispatch('setEmpty', pathAPI);
    return this.$store.dispatch('getData', pathAPI);
};

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
