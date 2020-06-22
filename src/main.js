// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import toast from './components/toast'
// import FaskClick from 'faskclick'
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(VueLazyload)
/* eslint-disable no-new */
Vue.use(toast)

// FaskClick.attach(document.body)
new Vue({
  el: '#app',
  components:{App},
  router,
  store,
  template: '<App/>'
})
