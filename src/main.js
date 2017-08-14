import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlightjs'

// import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/paper/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'highlight.js/styles/github-gist.css'
import '../static/app.css'

Vue.use(BootstrapVue)
Vue.use(VueHighlightJS)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
