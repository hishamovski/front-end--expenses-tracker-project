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
      if (data.expenses[i].date.substring(0, 4) == curr) {
        if (data.expenses[i].date.substring(5, 7) == '01') {
          jan += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '02') {
          feb += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '03') {
          mar += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '04') {
          apr += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '05') {
          may += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '06') {
          jun += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '07') {
          jul += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '08') {
          aug += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '09') {
          sep += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '10') {
          oct += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '11') {
          nov += data.expenses[i].amount
        }
        if (data.expenses[i].date.substring(5, 7) == '12') {
          dec += data.expenses[i].amount
        }
    }
  }
}

  const chart = new CanvasJS.Chart('chartContainer', {
    title: {
      text: `Expenses Tracker in ${curr}`
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
  $('#action-feedback').addClass('success')
  $('#action-feedback').text('Change updated successfully')
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
}

const getExpensesFailure = (data) => {
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('Change updated failed')
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 4000)
}

const onUpdateSuccess = responseData => {
  $('#action-feedback').addClass('success')
  $('#action-feedback').text('Change updated successfully')
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
}

const onUpdateFailure = responseData => {
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('Change updated failed')
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
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
