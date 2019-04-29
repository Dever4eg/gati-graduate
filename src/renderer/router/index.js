import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/Start').default
    },
    {
      path: '/result',
      component: require('@/components/Result').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
