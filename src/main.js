import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/bootstrap-vue'
import './plugins/axios'

Vue.config.productionTip = false



new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
