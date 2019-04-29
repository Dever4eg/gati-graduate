import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      accounts
  },
  strict: process.env.NODE_ENV !== 'production'
})
