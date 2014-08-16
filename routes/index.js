var express = require('express');
var router = express.Router();

/* GET home page. WGG 8/16/2014 original
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
*/

/* 
WGG 8/16/2014 hello world home page
  this handles the URL routing
*/
router.get('/helloworld', function(req, res) {
  res.render('helloworld', { title: 'Hello, World!'})
});
module.exports = router;
