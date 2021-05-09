import Vue from "vue";
import Vuetify from 'vuetify'
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false;

Vue.prototype.$getDataAPI = function (pathAPI) {
    this.$store.dispatch('getData', pathAPI);
};

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
