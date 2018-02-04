'use strict'

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('Users');
  res.render('users');
}).get('/changepassword', function (req, res, next) {
  res.render('changepassword');
}).get('/:username', function (req, res, next) {
  console.log('Users', req.params)
  res.render('profile', {username: req.params.username})
});

module.exports = router;
