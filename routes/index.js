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

//mawei
router.get('/mawei1', function(req, res, next) {
  res.render('leader/mawei1', { title: '园区税务年度账单'});
});

router.get('/mawei2', function(req, res, next) {
  res.render('leader/mawei2', { title: '园区税务年度账单'});
});

router.get('/mawei3', function(req, res, next) {
  res.render('leader/mawei3', { title: '园区税务年度账单'});
});

router.get('/mawei4', function(req, res, next) {
  res.render('leader/mawei4', { title: '园区税务年度账单'});
});


//linshuming-linxm
router.get('/linsm1', function(req, res, next){
  res.render('leader/linsm1', {'title':'园区税务年度账单'});
});

router.get('/linsm2', function(req, res, next){
  res.render('leader/linsm2', {'title':'园区税务年度账单'});
});

router.get('/linsm3', function(req, res, next){
  res.render('leader/linsm3', {'title':'园区税务年度账单'});
});

router.get('/linsm4', function(req, res, next){
  res.render('leader/linsm4', {'title':'园区税务年度账单'});
});

//zhaoxin zhaox
router.get('/zhaox1', function(req, res, next){
  res.render('leader/zhaox1', {'title':'园区税务年度账单'});
});

router.get('/zhaox2', function(req, res, next){
  res.render('leader/zhaox2', {'title':'园区税务年度账单'});
});
router.get('/zhaox3', function(req, res, next){
  res.render('leader/zhaox3', {'title':'园区税务年度账单'});
});
router.get('/zhaox4', function(req, res, next){
  res.render('leader/zhaox4', {'title':'园区税务年度账单'});
});

//cuie cuie
router.get('/cuie1', function(req, res, next){
  res.render('leader/cuie1', {'title':'园区税务年度账单'});
});
router.get('/cuie2', function(req, res, next){
  res.render('leader/cuie2', {'title':'园区税务年度账单'});
});
router.get('/cuie3', function(req, res, next){
  res.render('leader/cuie3', {'title':'园区税务年度账单'});
});
router.get('/cuie4', function(req, res, next){
  res.render('leader/cuie4', {'title':'园区税务年度账单'});
});

//sunzhongnan sunzn
router.get('/sunzn1', function(req, res, next){
  res.render('leader/sunzn1', {'title':'园区税务年度账单'});
});
router.get('/sunzn2', function(req, res, next){
  res.render('leader/sunzn2', {'title':'园区税务年度账单'});
});
router.get('/sunzn3', function(req, res, next){
  res.render('leader/sunzn3', {'title':'园区税务年度账单'});
});
router.get('/sunzn4', function(req, res, next){
  res.render('leader/sunzn4', {'title':'园区税务年度账单'});
});

//sunjianping sunjp
router.get('/sunjp1', function(req, res, next){
  res.render('leader/sunjp1', {'title':'园区税务年度账单'});
});
router.get('/sunjp2', function(req, res, next){
  res.render('leader/sunjp2', {'title':'园区税务年度账单'});
});
router.get('/sunjp3', function(req, res, next){
  res.render('leader/sunjp3', {'title':'园区税务年度账单'});
});
router.get('/sunjp4', function(req, res, next){
  res.render('leader/sunjp4', {'title':'园区税务年度账单'});
});

//zhangweihong zhangwh
router.get('/zhangwh1', function(req, res, next){
  res.render('leader/zhangwh1', {'title':'园区税务年度账单'});
});
router.get('/zhangwh2', function(req, res, next){
  res.render('leader/zhangwh2', {'title':'园区税务年度账单'});
});
router.get('/zhangwh3', function(req, res, next){
  res.render('leader/zhangwh3', {'title':'园区税务年度账单'});
});
router.get('/zhangwh4', function(req, res, next){
  res.render('leader/zhangwh4', {'title':'园区税务年度账单'});
});

//zhanfeng zhangf
router.get('/zhangf1', function(req, res, next){
  res.render('leader/zhangf1', {'title':'园区税务年度账单'});
});
router.get('/zhangf2', function(req, res, next){
  res.render('leader/zhangf2', {'title':'园区税务年度账单'});
});
router.get('/zhangf3', function(req, res, next){
  res.render('leader/zhangf3', {'title':'园区税务年度账单'});
});
router.get('/zhangf4', function(req, res, next){
  res.render('leader/zhangf4', {'title':'园区税务年度账单'});
});

//wangqun wangq
router.get('/wangq1', function(req, res, next){
  res.render('leader/wanq1', {'title':'园区税务年度账单'});
});
router.get('/wangq2', function(req, res, next){
  res.render('leader/wanq2', {'title':'园区税务年度账单'});
});
router.get('/wangq3', function(req, res, next){
  res.render('leader/wanq3', {'title':'园区税务年度账单'});
});
router.get('/wangq4', function(req, res, next){
  res.render('leader/wanq4', {'title':'园区税务年度账单'});
});

//bianweidong bianwd
router.get('/bianwd1', function(req, res, next){
  res.render('leader/bianwd1', {'title':'园区税务年度账单'});
});
router.get('/bianwd2', function(req, res, next){
  res.render('leader/bianwd2', {'title':'园区税务年度账单'});
});
router.get('/bianwd3', function(req, res, next){
  res.render('leader/bianwd3', {'title':'园区税务年度账单'});
});
router.get('/bianwd4', function(req, res, next){
  res.render('leader/bianwd4', {'title':'园区税务年度账单'});
});

//tanjun tanj
router.get('/tanj1', function(req, res, next){
  res.render('leader/tanj1', {'title':'园区税务年度账单'});
});
router.get('/tanj2', function(req, res, next){
  res.render('leader/tanj2', {'title':'园区税务年度账单'});
});
router.get('/tanj3', function(req, res, next){
  res.render('leader/tanj3', {'title':'园区税务年度账单'});
});
router.get('/tanj4', function(req, res, next){
  res.render('leader/tanj4', {'title':'园区税务年度账单'});
});

router.get('/step1', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const jbDays = user['workDay'].split('.')[0];
  const jbHours = user['jbHours'].split('.')[0];
  res.render('step/step1', { title: '园区税务年度账单','jbHours':user['jbHours'],'jbDays':jbDays });
});

router.get('/step2', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const zzDaka = user['zzDaka'].split('.')[0];
  const zwDaka = user['zwDaka'].split('.')[0];
  res.render('step/step2', { title: '园区税务年度账单','zzDaka':zzDaka, 'zwDaka':zwDaka });
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

  var outAddr = '去过一些地方';
  if(user['workOutAddr']!=''){
    outAddr = '到过<span class="day number hidden">'+user['workOutAddr']+'</span>';
  }
  var abroadAddr = '';
  if(abroadAddr!=''){
    abroadAddr = '到过<span class="day number hidden">'+user['workOutAddr']+'</span>';
  }

  res.render('step/step3',{
      title: '园区税务年度账单',
      outDay: workOutDays,
      abroadDay: abroadDays,
      outAddr:outAddr,
      abroadAddr:abroadAddr,
    });
});

router.get('/step4', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const workRecords = user['workRecords'].split('.')[0];
  const tasks = user['tasks'].split('.')[0];
  res.render('step/step4', { title: '园区税务年度账单',wordRecords:workRecords,zini:tasks });
});

router.get('/step5', function(req, res, next) {
  const uIndex = req.query.user;
  const user = USERDATA[uIndex];
  const vacation = user['vacation'].split('.')[0];
  var abroadDays = '';
  if(user['abroadDays']==''){
    abroadDays = 0;
  }else{
    abroadDays = user['abroadDays'].split('.')[0];
  }

  var abroadAddr = '和时间赛跑的路上';
  if(user['abroadAddr']!=''){
    abroadAddr = '去过<span class="day number hidden">'+user['abroadAddr']+'</span>';
  }

  res.render('step/step5', {
    title: '园区税务年度账单',
    abroad: abroadDays,
    abroadAddr: abroadAddr,
    vacation: vacation});
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
