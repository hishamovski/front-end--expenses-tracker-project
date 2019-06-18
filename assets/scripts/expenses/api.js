'use strict'

const store = require('../store')
const config = require('../config.js')

const create = formData => {
  return $.ajax({
    url: config.apiUrl + 'expenses',
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

const getExpenses = function () {
  return $.ajax({
    url: config.apiUrl + 'expenses',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteExpense = function (id) {
  return $.ajax({
    url: config.apiUrl + 'expenses/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = (data, id) => {
  return $.ajax({
    url: config.apiUrl + 'expenses/' + id,
    method: 'PATCH',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  show,
  getExpenses,
  deleteExpense,
  update
}
