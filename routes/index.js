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
      if(err) return res.send(err)
      if (response.rows.length > 0){
        req.session.user = response.rows[0]
        res.redirect('/projects')
      }else{
        res.send('username atau password salah')
      }
    })
  }else{
    res.send('Lengkapi form')
  }
})
return router;
}
