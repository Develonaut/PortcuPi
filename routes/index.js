var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('game_form', { 
    module_name: 'game-form',
    data_conf: JSON.stringify({'example': 'test'}),
    js_files: '/js/game_form-min.js',
    css_files: '/css/game_form-min.css'
  });
});

router.post('/', function (req, res){
   console.log('req received');
   console.log(req.body);
});


module.exports = router;
