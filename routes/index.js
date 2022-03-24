
// hbs = handle bars
var express = require('express');
var router = express.Router();

// Controllers alllow us to seperate the handler logic
let landing = require('../controllers/landing')

/* GET home page. */
router.get('/', landing.index_landing);
router.get('/all/usa/:q', landing.get_landing);




// without export it can't be used
module.exports = router;
