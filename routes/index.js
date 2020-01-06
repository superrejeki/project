var express = require('express');
var router = express.Router();


module.exports = function(pool){
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('login',{
    });
  });
router.post('/login', function(req, res, next) {
  const emailuser = req.body.emailuser;
  const password = req.body.password;
  if( emailuser && password ){
    pool.query(`SELECT * FROM users WHERE email = '${emailuser}' AND password = '${password}'`, 
    (err, response) => {
      if (response.rows.length > 0){
        res.redirect('/')
      }else{
        res.send('email atau password salah')
      }
    })
  }else{
    res.send('lengkapi form')
  }
})
return router;
}
