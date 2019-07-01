import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jQuery'

Vue.config.productionTip = false;
Vue.use(ElementUI)
// window.$ = $;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
