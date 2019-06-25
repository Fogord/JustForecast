import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '../lang/messages'
import cookies from '../js//cookies'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: cookies.getCookies('locale') || 'ua',
  fallbackLocale: 'en',
  messages
})

export default i18n
