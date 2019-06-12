'use strict'

const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const onCreate = (data, event) => {
  event.preventDefault()
  api.create(data)
    .then(function () {
      onGetExpenses(event)
    })
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

const onGetExpenses = event => {
  event.preventDefault()
  api.getExpenses()
    .then(ui.getExpensesSuccess)
    .catch(ui.getExpensesFailure)
}

const getExpenses = () => {
  api.getExpenses()
    .then(ui.getExpensesSuccess)
    .catch(ui.getExpensesFailure)
}

const onDeleteExpense = (event) => {
  const id = $(event.target).closest('tr').data('id')
  if (id !== undefined) {
    event.preventDefault()
    api.deleteExpense(id)
      .then(function () {
        onGetExpenses(event)
      })
      .catch(ui.getExpensesFailure)
  }
}

const onUpdate = (data, id) => {
  event.preventDefault()
  api.update(data, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onCreate,
  onShow,
  onGetExpenses,
  getExpenses,
  onDeleteExpense,
  onUpdate
}
