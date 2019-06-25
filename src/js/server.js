import axios from 'axios'
import cookies from './cookies'

let server = (function () {
  const _axios = axios.create({
    baseURL: 'ip',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' }
  })

  // _axios.interceptors.request.use(
  //   config => {
  //     if (!this.token) {
  //       return config;
  //     }

  //     const newConfig = {
  //       headers: {},
  //       ...config,
  //     };

  //     // newConfig.headers.Authorization = `Bearer ${this.token}`;
  //     newConfig.headers.withCredentials = true
  //     return newConfig;
  //   },
  //   e => Promise.reject(e)
  // );

  _axios.interceptors.request.use(
    config => {
      const _token = token.get
      if (!_token) {
        return config
      }

      const newConfig = {
        headers: {},
        ...config
      }

      newConfig.headers.Authorization = _token
      // newConfig.headers.withCredentials = true
      return newConfig
    },
    e => Promise.reject(e)
  )

  let token = {}
  Object.defineProperty(token, 'get', {
    // writable: false,
    configurable: false,
    get: function () {
      const token = cookies.getCookies('token')
      console.log(token)
      return token
    },
    set: function () {}
  })

  let apiMethods = {
    account: {
      async register (user, autoConfirm = true) {
        try {
          let response = await _axios.post('where', {
            'model': {
              'username': user.userName,
              'email': user.email,
              'password': user.pass,
              'passwordConfirm': user.passwordConfirm
            },
            'autoConfirm': autoConfirm
          })

          let data = checkData(response)
          return
        } catch (err) {
          checkData(err.response)
        }
      },
      async resendEmailConfirmation (user) {
        try {
          let response = await _axios.post('where', {
            'email': user.email
          })

          let data = checkData(response)
          return data
        } catch (err) {
          checkData(err.response)
        }
      },
      confirmEmail () {

      },
      async aboutUser (user) {
        try {
          let response = await _axios.post('where', {
            'email': user.email
          })
          let data = checkData(response)
          return data
        } catch (err) {
          checkData(err.response)
        }
      },
      changePassword () {

      },
      async resetPassword (user) { // forgotPassword
        try {
          let response = await _axios.post('where', {
            'email': user.email
          })
          let data = checkData(response)
          return data
        } catch (err) {
          checkData(err.response)
        }
      },
      async forgotPassword (email) {
        try {
          let response = await _axios.post('where', {
            'model': {
              'email': email
            }
          })

          let data = checkData(response)
          return
        } catch (err) {
          checkData(err.response)
        }
      },
      async token (user) { // getToken
        try {
          let response = await _axios.post('where', {
            'model': {
              'email': user.email,
              'password': user.pass
            }
          })

          let data = checkData(response)
          cookies.setCookies('token', 'Bearer ' + data.access_token)
          cookies.setCookies('user', data.email)
          // token = data.access_token;
          return
        } catch (err) {
          checkData(err.response)
        }
      },
      async cancelToken () { // cancelToken
        try {
          let response = await _axios.post('where', {})
          cookies.deleteCookies('token')
          cookies.deleteCookies('user')
          checkData(response)
          return
        } catch (err) {
          checkData(err.response)
        }
      }
    }
  }

  let checkData = function (response) {
    // console.log("\n", JSON.stringify(response), "\n")
    if (response.status !== 200) {
      if (response.status === 401 && response.data.__IsError) {
        cookies.deleteCookies('token')
        cookies.deleteCookies('user')
        throw response.statusText
      }
      throw response.statusText
    } else {
      if (response.data.__IsError) {
        throw response.data.Message
      } else {
        return response.data
      }
    }
  }

  return {
    apiMethods,
    isAuthorizated () {
      return (cookies.getCookies('user') && cookies.getCookies('token')) || false
    }
  }
})()

export default server
