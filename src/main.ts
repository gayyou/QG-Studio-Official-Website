import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.config.productionTip = false;
Vue.use(ElementUI);

declare global {
  interface Window {
    $: any
  }
}

// declare global {
//   interface Window {
//     $: any
//   }
// }

window.$ = $;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

