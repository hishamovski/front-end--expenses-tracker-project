'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const expensesEvents = require('./expenses/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $(document).ready(function () {
    $('#profile').hide()
  })

  $('#expense-create').on('submit', expensesEvents.onCreate)
  $('#get-expense').on('submit', expensesEvents.onShow)
})
