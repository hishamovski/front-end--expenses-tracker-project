'use strict'

const onCreateFailure = responseData => {
}

const onShowSuccess = responseData => {
  const text = responseData.expense
  $('.get-message').text('Showing an expense: ' + text.amount + ' Date ' + text.date)
}

const onShowFailure = responseData => {
  $('.get-message').text('failed to GET')
}

const showExpensesTemplate = require('../templates/expense-listing.handlebars')

const getExpensesSuccess = (data) => {
  const showExpensesHtml = showExpensesTemplate({ expenses: data.expenses })
  $('.content').html(showExpensesHtml)
}

const getExpensesFailure = (data) => {
}

const onUpdateSuccess = responseData => {
}

const onUpdateFailure = responseData => {
}

module.exports = {
  onCreateFailure,
  onShowFailure,
  onShowSuccess,
  getExpensesSuccess,
  getExpensesFailure,
  onUpdateSuccess,
  onUpdateFailure
}
