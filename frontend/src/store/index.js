import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dataAPI: {},
    },
    mutations: {
        SET_DATA(state, data) {
            state.dataAPI = data;
        }
    },
    actions: {
        getData({commit}, pathAPI) {
            axios.get("//127.0.0.1:8000/api/" + pathAPI + "/?format=json", {responseType: 'json',})
                .then(res => {
                    commit('SET_DATA', res.data);
                    console.log("Data uploaded");
                })
                .catch(error => {
                    commit('SET_DATA', null);
                    console.log("Data load error:", error.response);
                });
        }
    },
    modules: {},
});
