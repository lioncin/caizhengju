var express = require('express');
var router = express.Router();
var USERDATA = require('./USERDATA');
var USERLIST = require('./USERLIST');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '园区税务年度账单' });
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
  const workOutDays = user['workOutDays'].split('.')[0];
  const abroadDays = user['abroadDays'].split('.')[0];
  const workOutDays2 = user['workOutDays2'].split('.')[0];

  var workOutAddr2 = '';
  if(user['workOutAddr2']!=''){
    workOutAddr2 = '，到过<span class="day number hidden">'+user['workOutAddr2']+'</span>';
  }
  var abroadAddr = '';
  if(user['abroadAddr']!=''){
    abroadAddr = '，到过<span class="day number hidden">'+user['abroadAddr']+'</span>';
  }
  var workOutAddr = '';
  if(user['workOutAddr']!=''){
    workOutAddr = '，到过<span class="day number hidden">'+user['workOutAddr']+'</span>';
  }
  res.render('step3',
    {
      title: '园区税务年度账单',
      outDay: workOutDays,
      outAddr: workOutAddr,
      abroadDay: abroadDays,
      abroadAddr: abroadAddr,
      jtDay: workOutDays2,
      jdAddr: workOutAddr2,
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
    res.send('/step1?user='+index);
  }

});

module.exports = router;
