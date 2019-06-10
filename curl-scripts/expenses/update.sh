#!/bin/bash

curl "http://localhost:4741/expenses/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "expense": {
      "amount": "'"${AMOUNT}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo


# curl "https://fathomless-depths-22387.herokuapp.com/expenses"
