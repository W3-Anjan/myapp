

var express = require('express');
var router = express.Router();

// Controllers alllow us to seperate the handler logic
let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing);

module.exports = router;
