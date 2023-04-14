var express = require('express');
const Animal_controllers= require('../controllers/Animal');
var router = express.Router();
/* GET costumes */
router.get('/', Animal_controllers.Animal_view_all_Page );
module.exports = router;
