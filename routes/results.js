var express = require('express');
var router = express.Router();

// This is how we bring in external js to use there methods
var helper_path = "../private/js/helpers/";

var utils = require(helper_path + 'utils.js');
var game_list_helper = require(helper_path + 'games_db_helpers.js');

var result = {
      msg: null,
      markup: null
    };

var js_files = [
  '/js/result_list-min.js'
];

var css_files = [
  '/css/result_list-min.css'
];

// If you try to access the url by bypassing the search let
// redirect yo
router.get('/', function(req, res, next) {
  res.redirect('/');
});

// make a post request to the router
// then redirect to use the arguments to build 
// a clean url
router.post('/', function(req, res, next) {
  var url = '/results/' + req.body.game_name;

  if (req.body.game_platform) {
   var game_platform_url = req.body.game_platform + '/';
   url = '/results/' + game_platform_url + req.body.game_name;
  }

  res.redirect(url);
});

router.get('/:game_name', function(req, res, next) {
  console.log(req.params);
  getGameList(req.params.game_name, res);
});

router.get('/:game_platform/:game_name', function(req, res, next) {
  console.log(req.params);
  getGameList(req.params.game_name, res);
});

function getGameList(game_name, res) {
  game_list_helper.getGameList(game_name, function(data) {
    modConf = utils.buildModConf("result-list", null, js_files, css_files, data);
    res.render('partials/result_list', modConf);
  });
};

module.exports = router;
