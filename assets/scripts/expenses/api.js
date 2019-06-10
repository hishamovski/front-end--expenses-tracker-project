'use strict'

const store = require('../store')
const config = require('../config.js')

const create = formData => {
  console.log('store is', store)
  return $.ajax({
    url: config.apiUrl + '/expenses',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = (formData) => {
  const id = formData.expense.id
  return $.ajax({
    url: config.apiUrl + '/expenses/' + id,
    method: 'GET', // default value is GET
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  show
}
