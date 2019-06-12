'use strict'

let apiUrl
const apiUrls = {
  production: 'https://infinite-cliffs-65510.herokuapp.com/',
  development: 'http://localhost:4741/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
// https://infinite-cliffs-65510.herokuapp.com/
// https://fathomless-depths-22387.herokuapp.com/
// http://localhost:4741/
