var express = require('express');
var router = express.Router();
var USERDATA = require('./USERDATA');
var USERLIST = require('./USERLIST');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/step1', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  res.render('step1', { title: 'Express','jbHours':user['jbHours'],'jbDays':user['workDay'] });
});

router.get('/step2', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  res.render('step2', { title: 'Express','zzDaka':user['zzDaka'], 'zwDaka':user['zwDaka'] });
});

router.get('/step3', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  res.render('step3',
    {
      title: 'Express',
      outDay: user['workOutDays'],
      outAddr: user['workOutAddr'],
      abroadDay: user['abroadDays'],
      abroadAddr: user['abroadAddr'],
      jtDay: user['workOutDays2'],
      jdAddr: user['workOutAddr2'],
    }
  );
});

router.get('/step4', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  res.render('step4', { title: 'Express',wordRecords:user['workRecords'],zini:user['tasks'] });
});

router.get('/step5', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  res.render('step5', { title: 'Express',day:user['vacation']});
});

router.post('/login', function(req, res, next){
  const target = req.body.account + '-' +req.body.username;
  console.log(target);
  console.log(USERLIST);
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
