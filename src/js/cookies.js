let cookies = (function () {
  let getCookies = function (name) {
    let matches = document.cookie.match(new RegExp(
      '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))

    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  let setCookies = function (name, value, options) {
    options = options || {}

    let expires = options.expires

    if (typeof expires === 'number' && expires) {
      let d = new Date()
      d.setTime(d.getTime() + expires * 1000)
      expires = options.expires = d
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString()
    }

    value = encodeURIComponent(value)

    let updatedCookie = name + '=' + value

    for (let propName in options) {
      updatedCookie += '; ' + propName
      let propValue = options[propName]
      if (propValue !== true) {
        updatedCookie += '=' + propValue
      }
    }

    document.cookie = updatedCookie
  }

  // удаляет cookie с именем name
  let deleteCookies = function (name) {
    setCookies(name, '', {
      expires: -1
    })
  }
  return {
    getCookies,
    setCookies,
    deleteCookies
  }
})()

export default cookies
