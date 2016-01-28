var express = require('express');
var router = express.Router();

// This is how we bring in external js to use there methods
var helper_path = "../private/js/helpers/";

var utils = require(helper_path + 'utils.js');
var game_list_helper = require(helper_path + 'game_list_helper.js');

var result = {
      msg: null,
      markup: null
    };

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/:game_name', function(req, res, next) {
  sendGameName(req.params.game_name, res);
});

// make a post request to the router
// then redirect to use the game name variable
// to keep url clean
router.post('/', function(req, res, next) {
  res.redirect('/results/' + req.body.game_name);
});

function sendGameName(game_name, res) {
    game_list_helper.getGameList(game_name, function(data) {
      modConf = utils.buildModConf("result-list", null, ['/js/result_list-min.js'], ['/css/result_list-min.css'], data);
      res.render('partials/result_list', modConf);
    });
  };

module.exports = router;
