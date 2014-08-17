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

/* WGG 8/17/2014 POST to Add User Service */
router.post('/adduser', function(req, res) {

    // WGG 8/17/2014 Set our internal DB variable
    var db = req.db;

    // WGG 8/17/2014 Get our form values. These rely on the "name attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // WGG 8/17/2014 set our collection
    var collection = db.get('usercollection');

    // WGG 8/17/2014 submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail,
    }, function (err, doc) {
        if (err) {
            // WGG 8/17/2014 if it railed, return error
            res.send("There was a problem adding the information to the dtabase.")
        }
        else {
            // WGG 8/17/2014 If it worked, set the header so the address bar
            // doesn't still say /aduser
            // I originally had a typo here, loction instead of location
            res.location("userlist");
            // WGG 8/17/2014 And forward to the success page
            res.redirect("userlist");
        }
    });
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



module.exports = router;