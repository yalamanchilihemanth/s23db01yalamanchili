var express = require('express');
const Animal_controllers= require('../controllers/Animal');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET costumes */
router.get('/', Animal_controllers.Animal_view_all_Page );
/* GET detail costume page */
router.get('/detail',Animal_controllers.Animal_view_one_Page);
/* GET create costume page */
router.get('/create',secured, Animal_controllers.Animal_create_Page);
/* GET create update page */
router.get('/update',secured, Animal_controllers.Animal_update_Page);
/* GET delete costume page */
router.get('/delete',secured, Animal_controllers.Animal_delete_Page);
module.exports = router;
