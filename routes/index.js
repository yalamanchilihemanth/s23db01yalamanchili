var express = require('express'); 
var passport = require('passport'); 
var router = express.Router(); 
var Account = require('../models/account'); 
 
router.get('/', function (req, res) { 
    res.render('index', { title: 'animal App', user : req.user }); 
}); 
 
router.get('/register', function(req, res) { 
    res.render('register', { title: 'animal App Registration'}); 
}); 
 
router.post('/register', function(req, res) { 
  Account.findOne({ username : req.body.username }) // Removed callback function
    .then((user) => { // Handle the result with a Promise
      if(user) { 
        return res.render('register', { title: 'Registration',  
                   message: 'Existing User', account : req.body.username }) 
      } 
      let newAccount = new Account({ username : req.body.username }); 
      Account.register(newAccount, req.body.password, function(err, user){ 
        if (err) { 
          return res.render('register', { title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        } 
        if(!user){ 
          return res.render('register',{ title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        }  
        console.log('Sucess, redirect'); 
        res.redirect('/'); 
      }) 
    })
    .catch((err) => { // Handle errors with a Promise
      return res.render('register', { title: 'Registration',  
                  message: 'Registration error', account : req.body.username }) 
    })  
});

  
router.get('/login', function(req, res) { 
    res.render('login', { title: 'animal App Login', user : req.user }); 
}); 
 
router.post('/login', passport.authenticate('local'), function(req, res) { 
  if(req.session.returnTo) 
    res.redirect(req.session.returnTo); 
  res.redirect('/'); 
});  
 
router.get('/logout', function(req, res, next) {          // use post or delete for better safety

  req.logout( function(err) {

      if (err) { return next(err);}

      res.redirect('/');

  });

});

 
router.get('/ping', function(req, res){ 
    res.status(200).send("pong!"); 
}); 
 

module.exports = router; 