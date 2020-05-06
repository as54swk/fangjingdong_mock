import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 共享的token
    token: ""
  },
  mutations: {
    // 添加token数据
    addToken(state, payload) {
      state.token = payload.token;
    }
  },
  actions: {
  },
  modules: {
  }
})
