var express = require('express');
var router = express.Router();

// load helpers path
var helper_path = "../../private/js/helpers/min/";
// load helpers
var game_list_helper = require(helper_path + 'games_db_helpers-min.js');
var utils = require(helper_path + 'utils-min.js');

var result = {
      msg: null,
      markup: null
    };

var js_files = [
  '/js/game-min.js'
];

var css_files = [
  '/css/result_list-min.css'
];

router.get('/:game_name/', function(req, res, next) {
  getGame(req.query.id, res);
});

function getGame(game_id, res) {
  game_list_helper.getGame(game_id, function(data) {
    modConf = utils.buildModConf("game", null, js_files, css_files, data);
    res.render('partials/game', modConf);
  });
};

module.exports = router;
