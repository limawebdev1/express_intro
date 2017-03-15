var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var usersPath = path.join(__dirname, '../users.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var name = req.body.name;
  //figure out what to do with the request data
  //check database if user exists
  //new user -> send a welcome message and show them the leaderboard and current points
  fs.readFile(usersPath, 'utf8', (err, userData) => {
    if(err){
      console.log(err);
    }else {
      console.log(userData);
    }
  })
  res.end();
});

module.exports = router;
