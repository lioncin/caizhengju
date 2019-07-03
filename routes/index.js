var express = require('express');
var router = express.Router();
var USERDATA = require('./USERDATA');
var USERLIST = require('./USERLIST');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '园区税务年度账单' });
});

router.get('/cover', function(req, res, next) {
  res.render('cover', { title: '园区税务年度账单'});
});

router.get('/end', function(req, res, next) {
  res.render('end', { title: '园区税务年度账单'});
});

router.get('/p1', function(req, res, next) {
  res.render('p1', { title: '园区税务年度账单'});
});

router.get('/p2', function(req, res, next) {
  res.render('p2', { title: '园区税务年度账单'});
});

router.get('/p3', function(req, res, next) {
  res.render('p3', { title: '园区税务年度账单'});
});

router.get('/p4', function(req, res, next) {
  res.render('p4', { title: '园区税务年度账单'});
});

router.get('/p5', function(req, res, next) {
  res.render('p5', { title: '园区税务年度账单'});
});

router.get('/p6', function(req, res, next) {
  res.render('p6', { title: '园区税务年度账单'});
});

router.get('/p7', function(req, res, next) {
  res.render('p7', { title: '园区税务年度账单'});
});

router.get('/p8', function(req, res, next) {
  res.render('p8', { title: '园区税务年度账单'});
});

router.get('/p9', function(req, res, next) {
  res.render('p9', { title: '园区税务年度账单'});
});

router.get('/mawei1', function(req, res, next) {
  res.render('mawei1', { title: '园区税务年度账单'});
});

router.get('/mawei2', function(req, res, next) {
  res.render('mawei2', { title: '园区税务年度账单'});
});

router.get('/mawei3', function(req, res, next) {
  res.render('mawei3', { title: '园区税务年度账单'});
});

router.get('/mawei4', function(req, res, next) {
  res.render('mawei4', { title: '园区税务年度账单'});
});

router.get('/step1', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const jbDays = user['workDay'].split('.')[0];
  const jbHours = user['jbHours'].split('.')[0];
  res.render('step1', { title: '园区税务年度账单','jbHours':user['jbHours'],'jbDays':jbDays });
});

router.get('/step2', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const zzDaka = user['zzDaka'].split('.')[0];
  const zwDaka = user['zwDaka'].split('.')[0];
  res.render('step2', { title: '园区税务年度账单','zzDaka':zzDaka, 'zwDaka':zwDaka });
});

router.get('/step3', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  var workOutDays = user['workOutDays'].split('.')[0];
  if(workOutDays==''){
    workOutDays = 0;
  }
  var abroadDays = user['abroadDays'].split('.')[0];
  if(abroadDays==''){
    abroadDays = 0;
  }
  res.render('step3',
    {
      title: '园区税务年度账单',
      outDay: workOutDays,
      abroadDay: abroadDays,
    }
  );
});

router.get('/step4', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const workRecords = user['workRecords'].split('.')[0];
  const tasks = user['tasks'].split('.')[0];
  res.render('step4', { title: '园区税务年度账单',wordRecords:workRecords,zini:tasks });
});

router.get('/step5', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const vacation = user['vacation'].split('.')[0];
  res.render('step5', { title: '园区税务年度账单',day:vacation});
});

router.post('/login', function(req, res, next){
  const target = req.body.username + '-' +req.body.account;
  const size = USERLIST.length;
  var index = -1;
  for(var i=0; i<size; i++){
    if(target==USERLIST[i]){
      index = i;
    }
  }
  if(index==-1){
    res.send('/');
  }else{
    res.send('/cover?user='+index);
  }

});

module.exports = router;
