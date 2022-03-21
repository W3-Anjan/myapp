

var express = require('express');
var router = express.Router();

// Controllers alllow us to seperate the handler logic
let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.get_landing);

router.post('/', landing.submit_lead);

module.exports = router;
