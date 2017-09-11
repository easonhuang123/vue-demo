// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Dialog from './components/dialog'
import Loading from './components/loading'
import Toast from './components/toast'

Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
Vue.prototype.$toast = Toast

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
