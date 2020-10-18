/* eslint-disable camelcase */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
let instance = null
function render () {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
// // 用乾坤 修改路径
if (window._POWER_BY_QIANKUN_) {
  // eslint-disable-next-line no-undef
  _webpack_public_path_ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
// // 不用乾坤
if (!window._POWER_BY_QIANKUN_) {
  render()
}
export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  render(props)
}
export async function unmount () {
  instance.$destroy()
}
