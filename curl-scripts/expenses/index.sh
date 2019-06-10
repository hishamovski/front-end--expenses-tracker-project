#!/bin/bash

curl "http://localhost:4741/expenses/" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

  echo


# curl "https://fathomless-depths-22387.herokuapp.com/expenses"
