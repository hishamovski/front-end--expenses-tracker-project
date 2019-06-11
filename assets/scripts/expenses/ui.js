'use strict'

const onCreateSuccess = responseData => {
  console.log('created')
}

const onCreateFailure = responseData => {
  $('.get-message').text('failed to create')
}

const onShowSuccess = responseData => {
  const text = responseData.expense
  console.log(text)
  $('.get-message').text('Showing an expense: ' + text.amount + ' Date ' + text.date)
}

const onShowFailure = responseData => {
  console.log('Failure', responseData)
  $('.get-message').text('failed to GET')
}

const showExpensesTemplate = require('../templates/expense-listing.handlebars')

const getExpensesSuccess = (data) => {
  const showExpensesHtml = showExpensesTemplate({ expenses: data.expenses })
  $('.content').html(showExpensesHtml)
}

const getExpensesFailure = (data) => {
  console.log('failure getting expenses')
}

const onUpdateSuccess = responseData => {
  console.log('Success', responseData)
}

const onUpdateFailure = responseData => {
  console.log('Failure', responseData)
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onShowFailure,
  onShowSuccess,
  getExpensesSuccess,
  getExpensesFailure,
  onUpdateSuccess,
  onUpdateFailure
}
