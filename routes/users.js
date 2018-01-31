'use strict'

const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('Users')
  res.render('users')
})

/* router.get('/:username', function (req, res, next) {
  console.log('Users', req.params)
  res.render('users', {username: req.params.username})
})
 */
module.exports = router
