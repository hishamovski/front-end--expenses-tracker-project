#!/bin/bash

curl "http://localhost:4741/expenses/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

 echo


# curl "https://fathomless-depths-22387.herokuapp.com/expenses"
