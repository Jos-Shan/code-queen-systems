var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
  const user = req.user;
  //fetch from DB using user ID
  res.render('profile', { 
    name:"",
    email: "",
    age: "",
    cohort:"",
    facilitator: '',
    status:"",
    assessments: ''
  });
});

module.exports = router;