const { server, io } = require('../server')
const route = require('express').Router()

route.get('', function (req, res, next) {
  res.json({ message: "Hello from server!" })
})


module.exports = route