import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import store from './vuex/store'
Vue.use(VueRouter)
Vue.use(VueResource)


const router = new VueRouter({routes: routerConfig})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

