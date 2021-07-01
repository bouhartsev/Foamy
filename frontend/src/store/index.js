import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        dataAPI: {}, // ITEMS: null if error, {} if loading, [] if empty, [{...},{...}] if not empty
    },
    mutations: {
        SET_DATA(state, data) {
            Vue.set(state.dataAPI, data[0], data[1]);
        }
    },
    actions: {
        getData({commit}, pathAPI) {
            return axios.get("/api/" + pathAPI + "/?format=json", {responseType: 'json',})
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
