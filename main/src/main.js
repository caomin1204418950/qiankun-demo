// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill';
import 'whatwg-fetch';
import 'custom-event-polyfill';

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'
Vue.config.productionTip = false
// //兼容ie


// import 'core-js/stable/promise';
// import 'core-js/stable/symbol';
// import 'core-js/stable/string/starts-with';
// import 'core-js/web/url';
/* eslint-disable no-new */
Vue.use(ElementUI)
const apps = [
  {
    name: 'nomal',
    // entry: '/local-music', //线上
    entry: '//localhost:10000', //本地e
    container: '#music',
    activeRule: '/music'
  },
  {
    name: 'resume',
    entry: '//localhost:20000',
    container: '#resume',
    activeRule: '/resume'
  }
]
registerMicroApps(apps)
start()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
