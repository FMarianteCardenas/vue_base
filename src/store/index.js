import Vue from 'vue'
import Vuex from 'vuex'

//plugin para persistir los datos de vuex
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    base_url:'',
    usuario:null,
    roles:null,
    autenticado:false,
    headers:null,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins:[
    createPersistedState({
      paths: ['base_url','usuario','roles','autenticado','headers']
    })
  ]
})
