import Vue from 'vue'
import Vuex from 'vuex'
import Server from '../js/server.js'
import cookies from '../js//cookies'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    liItems: {
      singup: 'Sing Up',
      login: 'Log in'
    },
    drawer: false,
    isAuthorizated: false,
    dialog: false,
    errors: null,
    errorDialog: false,
    user: null,
    showRegisterationElement: false,
    showAutorisationElement: false,
    manifestUri: '',
    dark: false,
    locale: 'ua'
  },
  getters: {
    showRegisterationElement (state) {
      return state.showRegisterationElement
    },
    showAutorisationElement (state) {
      return state.showAutorisationElement
    },
    isAuthorizated (state) {
      state.isAuthorizated = !!Server.isAuthorizated()
      return state.isAuthorizated
    },
    manifestUri (state) {
      return state.manifestUri
    },
    userEmail () {
      return cookies.getCookies('user')
    },
    user (state) {
      return state.user
    },
    processes (state) {
      return state.processes
    },
    dialog (state) {
      return !!state.errors
    },
    getDrawer (state) {
      return state.drawer
    },
    getStyle (state) {
      return {
        // drawer mode
        temporary: false,
        permanent: true,
        // drawer
        clipped: true,
        floating: true,
        miniVariant: false,
        // fooret
        inset: false
      }
    },
    getLocale (state) {
      state.locale = cookies.getCookies('locale')
      return state.locale
    },
    getDarkMode (state) {
      state.dark = !!+cookies.getCookies('dark')
      return state.dark
    },
    errors (state) {
      return state.errors
    }
  },
  mutations: {
    set (state, { key, value, needCookie }) {
      if (!!needCookie) {
        cookies.setCookies(key, value)
      }
      state[key] = value
    }
  },
  actions: {
    setValueOf ({ commit }, keyValueObj) {
      commit('set', keyValueObj)
    },
    singup ({ commit }, value) {
      commit('set', { key: 'showRegisterationElement', value: value })
    },
    login ({ commit }, value) {
      commit('set', { key: 'showAutorisationElement', value: value })
    },
    /// //SERVER/////
    async acceptRegistration ({ commit }, user) {
      let value = {}// await Server.identity.account.register(user)
      commit('set', { key: 'user', value: value })
    },
    async acceptAutorisation ({ commit }, user) {
      // await Server.identity.account.token(user)
    },
    async acceptRemaidPassword ({ commit }, email) {
      await Server.identity.account.forgotPassword(email)
    },
    async resendEmailConfirmation ({ commit }, user) {
      let value = await Server.identity.account.resendEmailConfirmation(user)
      commit('set', { key: 'user', value: value })
    },
    async cancelAutorisation ({ commit }) {
      await Server.identity.account.cancelToken()
    },
    async changePassword ({ commit }, user) {
      let value = await Server.identity.account.changePassword(user)

      commit('set', { key: 'user', value: value })
    },
    async getPersonalInfo ({ commit }, user) {
      let value = await Server.identity.account.aboutUser(user)
      commit('set', { key: 'user', value: value })
    },
    async editUserData ({ commit }, user) {
      let value = await Server.identity.user.edit(user)
      commit('set', { key: 'user', value: value })
    }
  }
})

export default Store
