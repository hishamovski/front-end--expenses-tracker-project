'use strict'

const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const onCreate = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onShow = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.show(formData)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

const onGetExpenses = (event) => {
  event.preventDefault()
  api.getExpenses()
    .then(ui.getExpensesSuccess)
    .catch(ui.getExpensesFailure)
}

module.exports = {
  onCreate,
  onShow,
  onGetExpenses
}
