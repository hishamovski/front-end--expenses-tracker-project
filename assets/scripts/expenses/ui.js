'use strict'

const onCreateSuccess = responseData => {
  console.log('Success', responseData)
  const text = responseData.expense
  console.log('created' + text)
}

const onCreateFailure = responseData => {
  console.log('Failure', responseData)
}

const onShowSuccess = responseData => {
  const text = responseData.expense
  console.log(text)
  $('#get-message').text('Showing an expense: ' + text.amount + ' Date ' + text.date)
}

const onShowFailure = responseData => {
  console.log('Failure', responseData)
  $('#get-message').text('failed to GET')
}

const showExpensesTemplate = require('../templates/expense-listing.handlebars')

const getExpensesSuccess = (data) => {
  console.log('success')
  console.log(data)
  const showExpensesHtml = showExpensesTemplate({ expenses: data.expenses })
  $('#content').html(showExpensesHtml)
}

const getExpensesFailure = (data) => {
  console.log('failure')
  console.log('Failure', data)
  $('#get-message').text('failed to GET')
}
module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onShowFailure,
  onShowSuccess,
  getExpensesSuccess,
  getExpensesFailure
}
