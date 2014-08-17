var express = require('express');
var router = express.Router();

/* GET home page. WGG 8/16/2014 original */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* 
WGG 8/16/2014 hello world page
  this handles the URL routing
*/
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!'})
});
module.exports = router;

/* WGG 8/17/2014 GET new user page */

router.get('/newuser', function(req, res) {
    res.render('newuser', {title: 'Add New User' });
});

/* WGG 8/16/2014 get user list */
router.get('/userlist', function(req, res) {
  var db = req.db
  var collection = db.get('usercollection');
  collection.find({},{}, function(e,docs){
    res.render('userlist', {
      "userlist" : docs
    });
  });
});
