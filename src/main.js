// The Vue build version to load with the `import` command
import '@/../node_modules/font-awesome/scss/font-awesome.scss'
import './assets/scss/bundle.scss'

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueProgressBar from 'vue-progressbar'
import FullCalendar from 'vue-full-calendar'

import App from './App'
import router from './router'

Vue.config.productionTip = false

const options = {
  color: '#467fcf',
  failedColor: '#cd201f',
  thickness: '2px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)
Vue.use(FullCalendar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
