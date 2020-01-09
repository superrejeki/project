var express = require('express');
var router = express.Router();
//const path = require('path');
const helpers = require('../helpers/util');

module.exports = function(pool){
    /* GET home page. */
    router.get('/', helpers.isLoggedIn, function(req, res, next) {
      res.render('projects/list',{
      });
    });
  return router;
  }
