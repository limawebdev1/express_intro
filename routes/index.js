var express = require('express');
var fs = require('fs');
const path = require('path');
const usersPath = path.join(__dirname, '../users.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  var username = req.body.username;
  fs.readFile(usersPath, 'utf8', (err, userData) => {
    if(err){
      console.log('heyheyhey');
      console.error(err);
      return res.sendStatus(500);
    }else{
      var isCool = false;
      var pleaseBeRight = JSON.parse(userData)
      for(var i = 0; i < pleaseBeRight.length; i++){
        console.log(pleaseBeRight[i]);
        if(pleaseBeRight[i] === username){
          isCool = true;
        }
      }
      if(isCool){
        console.log('hey supposed to be cool');
        res.render('cool', {cool: 'You are damn cool!', person: username});
      }else{
        console.log('not cool brah');
        res.render('cool', {cool: 'Try harder. You are not cool.', person:username});
      }
    }
  });
})
module.exports = router;
