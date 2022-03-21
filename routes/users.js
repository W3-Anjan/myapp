var express = require('express');
const { get } = require('express/lib/response');
var router = express.Router(); // router instance is a vanilla instance 

/* GET users listing. */
// then we are making modifications on the router 
// through get(), post()
// get('path', handler)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
