var express = require('express');
var config=require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.render('index', { title: 'Express' });
});
router.get('/hj',function (req, res, next) {
   
  res.render('hj', { sn:"_LC_RE_non_2986077314713275641584459_SX",publishtime: "2016-08-16 14:06:05",relateid: 27142606,uid: "29860773",exp: 46591,
    level: 24,usign: "a88fd4d0f73879e99e7a4002de7e1ceb"});
});
router.post('/dm',function (req, res, next) {
  console.log(JSON.stringify(req.body));
  res.json({msg:"success"})
});

module.exports = router;
