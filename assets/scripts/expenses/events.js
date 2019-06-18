'use strict'

const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const onCreate = (data, event) => {
  event.preventDefault()
  api.create(data)
    .then(function () {
      onGetExpenses(event, 'add')
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

const onGetExpenses = (event, message) => {
  event.preventDefault()
  api.getExpenses()
    .then((data) => { ui.getExpensesSuccess(data, message) })
    .catch(ui.getExpensesFailure)
}

const getExpenses = (message) => {
  api.getExpenses()
    .then((data) => { ui.getExpensesSuccess(data, message) })
    .catch(ui.getExpensesFailure)
}

const onDeleteExpense = (event) => {
  event.preventDefault()
  const id = $(event.target).closest('tr').data('id')

  if ($(event.target).parents('tr').children('td:first').text() === '' ||
    $(event.target).parents('tr').children('td:first').text() === null ||
    $(event.target).parents('tr').children('td:first').text() === undefined) {
    $(event.target).parents('tr').remove()
  } else {
    if (id !== undefined && id !== '' && id !== 'ID') {
      api.deleteExpense(id)
        .then(function () {
          onGetExpenses(event, 'delete')
        })
        .catch(ui.onDeleteFailure)
    }
  }
  // if (id !== undefined && id !== '' && id !== 'ID') {
  //   api.deleteExpense(id)
  //     .then(function () {
  //       onGetExpenses(event, 'delete')
  //     })
  //     .catch(ui.onDeleteFailure)
  // }
}

const onUpdate = (data, id, event) => {
  event.preventDefault()
  api.update(data, id)
    .then(function () {
      onGetExpenses(event, 'update')
    })
    .catch(ui.onUpdateFailure)
}

module.exports = {
  onCreate,
  onShow,
  getExpenses,
  onGetExpenses,
  onDeleteExpense,
  onUpdate
}
