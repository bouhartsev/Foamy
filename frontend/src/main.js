import Vue from "vue";
import App from "./App.vue";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";


Vue.config.productionTip = false;

Vue.prototype.$getDataAPI = function (pathAPI) {
  this.$store.dispatch('getData', pathAPI);
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
