import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tracksAPI: {},
        artistsAPI: {},

        anotherAPI: {}
    },
    mutations: {
        SET_DATA(state, data) {
            // state.dataAPI[data[0]] = data[1];
            switch (data[0]) {
                case 'tracks':
                    state.tracksAPI = data[1];
                    break;
                case 'artists':
                    state.artistsAPI = data[1];
                    break;
            }
        }
    },
    actions: {
        getData({commit}, pathAPI) {
            return axios.get("//127.0.0.1:8000/api/" + pathAPI + "/?format=json", {responseType: 'json',})
                .then(res => {
                    commit('SET_DATA', [pathAPI, res.data]);
                    console.log("Data '"+pathAPI+"' uploaded");
                })
                .catch(error => {
                    commit('SET_DATA', [null, null]);
                    console.log("Data load error:", error.response);
                });
        }
    },
    modules: {},
});
