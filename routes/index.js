var express = require('express');
var config=require('../config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.render('index', { title: 'Express' });
});
router.post('/dm',function (req, res, next) {
  console.log(JSON.stringify(req.body));
  res.json({msg:"success"})
});

module.exports = router;
