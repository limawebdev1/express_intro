var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var name = req.body.name;
  //figure out what to do with the request data
  res.end();
});

module.exports = router;
