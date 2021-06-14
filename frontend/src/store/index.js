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
            // state.dataAPI[data[0]] = data[1];
            Vue.set(state.dataAPI, data[0], data[1]);
        }
    },
    actions: {
        getData({commit}, pathAPI) {
            return axios.get(Vue.prototype.$serverAbsolutePath+"/api/" + pathAPI + "/?format=json", {responseType: 'json',})
                .then(res => {
                    commit('SET_DATA', [pathAPI, res.data]);
                    console.log("Data '"+pathAPI+"' uploaded");
                })
                .catch(error => {
                    commit('SET_DATA', [pathAPI, null]);
                    // console.log("Data load error:", error.response);
                });
        },
        setEmpty({commit}, pathAPI) {
            commit('SET_DATA', [pathAPI, {}]);
        },
    },
    modules: {},
});
