var express = require('express');
var config=require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.render('index', { title: 'Express' });
});
router.get('/hj',function (req, res, next) {
   
  res.render('hj', { sn:req.query.snreg,publishtime: "2016-08-16 14:06:05",relateid: req.query.relateid,uid: req.query.uid,exp: req.query.exp,
    level: req.query.level,usign: req.query.usign});
});
router.post('/dm',function (req, res, next) {
  console.log(JSON.stringify(req.body));
  res.json({msg:"success"})
});

module.exports = router;
