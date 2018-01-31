'use strict'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  console.log('Message')
  res.render('messages')
})

module.exports = router
