var express = require('express');
var router = express.Router();
var path = require('path');

// This is how we bring in external js to use there methods
var js_path = "../private/js/", 
    helper_path = "../private/js/helpers/"

var utils = require(js_path + 'utils.js');
var game_list_helper = require(helper_path + 'game_list_helper.js');

var result = {
      msg: null,
      markup: null
    };

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // lets build the conf settings for the module
  modConf = utils.buildModConf("game-form", null, ['/js/game_form-min.js'], ['/css/game_form-min.css'], null);

  res.render('partials/game_form', modConf);
});

// If our page/route gets a post request
// let's do something with it.
router.post('/', function (req, res){
  // when making post calls to the route
  // make sure you pass an action value
  // and add it to the switch
  switch(req.body.action) {
      case "get_game_name":;
          sendGameName(req, res); 
          break;
  }
});

function sendGameName(req, res) {
    var game_name = req.body.form_data.value;
    game_list_helper.getGameList(game_name, function(data) {
      modConf = utils.buildModConf("result-list", null, '', '', data, false);
      res.render('partials/result_list', modConf, function(err, html) {
        result.markup = html;
        res.send(result);
      });
    });
  };

module.exports = router;
