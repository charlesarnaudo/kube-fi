import Vue from 'vue'
import VueMaterial from 'vue-material'
Vue.use(VueMaterial)

import App from './App.vue'
// Need to clean up imports (* import hurts performance)

new Vue({
  el: '#app',
  render: h => h(App)
})
