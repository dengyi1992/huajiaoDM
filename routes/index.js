var express = require('express');
var config=require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.render('index', { title: 'Express' });
});
router.get('/hj',function (req, res, next) {
  res.render('hj', { sn:"_LC_ps3_non_2214982214711570731406128_SX",publishtime: "2016-08-14 14:44:34",relateid: 26841504,uid: "22149822",exp: 932278,
    level: 24,usign: "40e2e62c4421a0013d62ca3712f7f2ae"});
});
router.post('/dm',function (req, res, next) {
  console.log(JSON.stringify(req.body));
  res.json({msg:"success"})
});

module.exports = router;
