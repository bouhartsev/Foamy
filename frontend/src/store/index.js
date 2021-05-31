import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tracksAPI: {},
        artistsAPI: {},

        anotherAPI: {},
        dataAPI: {
            'tracks': {},
            'artists': {},
        },
        changed: 0,
    },
    mutations: {
        SET_DATA(state, data) {
            state.changed=state.changed+1;
            state.dataAPI[data[0]] = data[1];
            // switch (data[0]) {
            //     case 'tracks':
            //         state.tracksAPI = data[1];
            //         break;
            //     case 'artists':
            //         state.artistsAPI = data[1];
            //         break;
            // }
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
                    console.log("Data load error:", error.response);
                });
        }
    },
    modules: {},
});
