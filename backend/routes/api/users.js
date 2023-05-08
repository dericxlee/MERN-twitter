var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Respond with a user resource');
  res.json({
    message: "GET /api/users"
  });
});

module.exports = router;
