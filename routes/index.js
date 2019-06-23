var express = require('express');
var router = express.Router();
var data = require('./data');

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = {};
  res.render('index', { title: 'Express', 'user':user });
});

router.get('/step1', function(req, res, next) {
  res.render('step1', { title: 'Express','jbHours':'12','jbDays':'33' });
});

router.get('/step2', function(req, res, next) {
  var user = {};
  res.render('step2', { title: 'Express','zzDaka':'06:12', 'zwDaka':'23:12' });
});

router.get('/step3', function(req, res, next) {
  var user = {};
  res.render('step3',
    {
      title: 'Express',
      outDay: '4',
      outAddr: '苏州，上海，北京',
      abroadDay: '5',
      abroadAddr: '新加坡，印尼，额罗搜',
      jtDay: '7',
      jdAddr: '英国，法国，中国',
    }
  );
});

router.get('/step4', function(req, res, next) {
  var user = {};
  res.render('step4', { title: 'Express',wordRecords:'123',zini:'562' });
});

router.get('/step5', function(req, res, next) {
  var user = {};
  res.render('step5', { title: 'Express',day:'123'});
});

router.post('/login', function(req, res, next){
  const account = req.body.account;
  const username = req.body.username;
  res.send('success');
});

module.exports = router;
