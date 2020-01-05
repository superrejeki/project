var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(pool){
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM users', (err, response) => {
    if(err) return res.send(err)
    res.render('index', { data: response.rows });
  })
});
return router;
}
