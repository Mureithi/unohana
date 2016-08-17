// API ROUTES -------------------

// get an instance of the router for api routes
var express = require('express');
var app = express();
var router = express.Router();
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var models = require('../models');
var config = require('../config/config.json'); // get our config file

app.set('superSecret', config.development.secret); // secret variable

// route to authenticate a user (POST http://localhost:3000/authenticate)
router.post('/auth', function(req, res) {

  // find the user
  models.User.findOne({
     where: {username: req.body.username}
  }).then(function(user){
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign({user: user.username}, app.get('superSecret'), {
          expiresIn: '10m',
          algorithm: 'HS256'
        });

        // return the information including token as JSON
        var full_name = user.first_name + " " + user.last_name;
        res.json({
          success: true,
          message: 'Successfull login!',
          user: {
              id: user.id,
              name: full_name,
              username : user.username
            },
          token: token
        });
      }

    }

  });

});
module.exports = router;
