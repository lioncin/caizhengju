var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = {};
  res.render('index', { title: 'Express', 'user':user });
});

router.get('/step1', function(req, res, next) {
  res.render('step1', { title: 'Express','jbHours':'12','jbDays':'33' });
});

router.get('/step2', function(req, res, next) {
  res.render('step2', { title: 'Express' });
});

router.get('/step3', function(req, res, next) {
  res.render('step3', { title: 'Express' });
});

router.get('/step4', function(req, res, next) {
  res.render('step4', { title: 'Express' });
});

module.exports = router;
