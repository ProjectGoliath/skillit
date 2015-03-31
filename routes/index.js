var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Skillit' });
});


/* GET secret page. */
router.get('/hiddenLeaf', function(req, res, next) {
    res.render('hiddenVillage', { title: 'Konoha' });
});

module.exports = router;
