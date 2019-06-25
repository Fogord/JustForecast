import 'babel-polyfill'
import 'flag-icon-css/css/flag-icon.css'
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import FlagIcon from 'vue-flag-icon' // для флажков
import i18n from './js/i18n'
import store from './js/store'
import router from './js/router'
import colors from 'vuetify/es5/util/colors'
import fortawesome from '@fortawesome/fontawesome-free/css/all.css'

(function () {
  const theme = {
    primary: colors.teal.accent4,
    secondary: colors.cyan.accent4,
    third: '#FB4D4D',
    accent: colors.shades.black,
    error: colors.red.accent2
  }

  Vue.use(Vuetify, { theme, iconfont: fortawesome })
  Vue.use(FlagIcon)

  const app = new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router,
    i18n
  })
})()
