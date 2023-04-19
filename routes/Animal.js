var express = require('express');
const Animal_controllers= require('../controllers/Animal');
var router = express.Router();
/* GET costumes */
router.get('/', Animal_controllers.Animal_view_all_Page );
/* GET detail costume page */
router.get('/detail',Animal_controllers.Animal_view_one_Page);
/* GET create costume page */
router.get('/create', Animal_controllers.Animal_create_Page);
/* GET create update page */
router.get('/update', Animal_controllers.Animal_update_Page);
/* GET delete costume page */
router.get('/delete', Animal_controllers.Animal_delete_Page);
module.exports = router;
