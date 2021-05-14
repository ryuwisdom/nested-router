/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Kakao.init('e1bde4fd26acdde1c43683b308efc611');
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
