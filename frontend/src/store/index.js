import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: window.localStorage,
})
Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    /*state: {
        user: "",
        mode: "month",
        authenticatedUser: false
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },*/
})