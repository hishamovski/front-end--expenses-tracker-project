'use strict'

const showExpensesTemplate = require('../templates/expense-listing.handlebars')

const onShowSuccess = responseData => {
  const text = responseData.expense
  $('.get-message').text('Showing an expense: ' + text.amount + ' Date ' + text.date)
}

const onShowFailure = responseData => {
  $('.get-message').text('failed to GET')
}

const getExpensesSuccess = (data, message) => {
  let jan = 0
  let feb = 0
  let mar = 0
  let apr = 0
  let may = 0
  let jun = 0
  let jul = 0
  let aug = 0
  let sep = 0
  let oct = 0
  let nov = 0
  let dec = 0

  const curr = new Date().getFullYear()
  if (data.expenses.length > 0) {
    for (let i = 0; i < data.expenses.length; i++) {
      if (data.expenses[i].date !== undefined && data.expenses[i].date !== null) {
        if (data.expenses[i].date.substring(0, 4) == curr) {
          if (data.expenses[i].date.substring(5, 7) === '01') {
            jan += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '02') {
            feb += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '03') {
            mar += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '04') {
            apr += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '05') {
            may += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '06') {
            jun += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '07') {
            jul += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '08') {
            aug += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '09') {
            sep += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '10') {
            oct += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '11') {
            nov += data.expenses[i].amount
          }
          if (data.expenses[i].date.substring(5, 7) === '12') {
            dec += data.expenses[i].amount
          }
        }
      }
    }
  }

  const chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: `This chart represent your total spending in ${curr}`
    },
    axisX: {
      title: 'timeline',
      gridThickness: 2
    },
    axisY: {
      title: 'Amount'
    },
    data: [{
      type: 'area',
      dataPoints: [
        {
          x: new Date(curr, 0),
          y: jan
        },
        {
          x: new Date(curr, 1),
          y: feb
        },
        {
          x: new Date(curr, 2),
          y: mar
        },
        {
          x: new Date(curr, 3),
          y: apr
        },
        {
          x: new Date(curr, 4),
          y: may
        },
        {
          x: new Date(curr, 5),
          y: jun
        },
        {
          x: new Date(curr, 6),
          y: jul
        },
        {
          x: new Date(curr, 7),
          y: aug
        },
        {
          x: new Date(curr, 8),
          y: sep
        },
        {
          x: new Date(curr, 9),
          y: oct
        },
        {
          x: new Date(curr, 10),
          y: nov
        },
        {
          x: new Date(curr, 11),
          y: dec
        }

      ]
    }]
  })

  const showExpensesHtml = showExpensesTemplate({ expenses: data.expenses })
  $('.content').html(showExpensesHtml)
  chart.render()
  $('#action-feedback').text('')
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('success')
  if (message === 'add') {
    $('#action-feedback').text('Created successfully')
  }
  if (message === 'delete') {
    $('#action-feedback').text('Deleted successfully')
  }
  if (message === 'update') {
    $('#action-feedback').text('Updated successfully')
  }
  if (message === 'index') {
  }

  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
}

const getExpensesFailure = (data) => {
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('Loading failed')
  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 4000)
}

const onUpdateFailure = responseData => {
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('update failed')
  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
}

const onCreateFailure = data => {
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('Create failed')
  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
}

const onDeleteFailure = data => {
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('Delete failed')
  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
}

module.exports = {
  onShowFailure,
  onShowSuccess,
  getExpensesSuccess,
  getExpensesFailure,
  onUpdateFailure,
  onCreateFailure,
  onDeleteFailure
}
