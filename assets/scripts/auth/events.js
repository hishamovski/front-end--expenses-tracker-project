'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  if (isValid(formData.credentials.password, formData.credentials.password_confirmation)) {
    api.signUp(formData)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
  } else {
    $('.password-validation').show()
    $('.password-validation').text('Password must contain at least 6 characters, at least one lower case and one Upper case')
    setTimeout(function () {
      $('.password-validation').hide()
    }, 6000)
  }
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const isValid = (password, password2) => {
  let isLengthValid = false
  let isUpCase = false
  let isLowCase = false

  for (let i = 0; i < password.length; i++) {
    if (password.length > 5 && password2.length > 5) {
      isLengthValid = true
    }
    if (password[i] === password[i].toUpperCase() && password2[i] === password2[i].toUpperCase()) {
      isUpCase = true
    }
    if (password[i] === password[i].toLowerCase() && password2[i] === password2[i].toLowerCase()) {
      isLowCase = true
    }
  }

  if (isLengthValid && isUpCase && isLowCase) {
    return true
  } else {
    return false
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
