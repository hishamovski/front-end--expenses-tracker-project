'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const expensesEvents = require('./expenses/events')

$(() => {
  $('#profile').hide()
  $('[data-toggle="tooltip"]').tooltip()

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.add-new').click(function () {
    const index = $('table tbody tr:last-child').index()
    const row = '<tr>' +
      '<td><input type="text" value="ID" class="form-control" name="id" id="name" readonly></td>' +
      '<td><input type="text" class="form-control" name="department" id="department"></td>' +
      '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
      '<td><a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a><a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a><a class="delete" title="Delete" data-id="{{expense.id}}"  data-toggle="tooltip"><i class="material-icons"></i></a></td>' +
    '</tr>'
    // '<td><input type="text" class="form-control" name="id" id="name"></td>' +
    // <a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a>
    // <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
    // <a class="delete" title="Delete" data-id="{{expense.id}}"  data-toggle="tooltip"><i class="material-icons"></i></a>

    $('table').append(row)
    $('table tbody tr').eq(index + 1).find('.add, .edit').toggle()
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('.content').on('click', '.add', function () {
    const data = []
    let empty = false
    const input = $(this).parents('tr').find('input[type="text"]')
    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass('error')
        empty = true
      } else {
        $(this).removeClass('error')
      }
    })
    $(this).parents('tr').find('.error').first().focus()
    if (!empty) {
      input.each(function () {
        $(this).parent('td').html($(this).val())
        data.push($(this).val())
      })
      const data2 = {
        'expense': {
          'amount': `${data[1]}`,
          'date': `${data[2]}`
        }
      }
      if (data[0] === 'ID') {
        expensesEvents.onCreate(data2)
      } else {
        expensesEvents.onUpdate(data2, data[0])
      }

      $(this).parents('tr').find('.add, .edit').toggle()
      $('.add-new').removeAttr('disabled')
    }
  })

  $('.content').on('click', '.edit', function () {
    $(this).parents('tr').find('td:not(:last-child)').each(function () {
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">')
    })
    $(this).parents('tr').find('.add, .edit').toggle()
    $('.add-new').attr('disabled', 'disabled')
  })
  $('.content').on('click', '.delete', expensesEvents.onDeleteExpense)
  $('#expense-create').on('submit', expensesEvents.onCreate)
  $('#get-expense').on('submit', expensesEvents.onShow)
  $('#expense-index').on('click', expensesEvents.onGetExpenses)
})
