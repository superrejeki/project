var express = require('express');
var router = express.Router();

module.exports = function(pool){
    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('projects/list',{
      });
    });
  return router;
  }
