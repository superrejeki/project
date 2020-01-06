var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(pool){

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('login',{

    });
  });

// router.get('/', function(req, res, next) {
//   pool.query('SELECT * FROM users', (err, response) => {
//     if(err) return res.send(err)
//     res.render('/login', { data: response.rows });
//   })
// });
return router;
}
