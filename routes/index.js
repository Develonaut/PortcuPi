var express = require('express');
var router = express.Router();
var path = require('path');

// This is how we bring in external js to use there methods
var helper_path = "../private/js/helpers/";
var utils = require(helper_path + 'utils.js');
var game_list_helper = require(helper_path + 'games_db_helpers.js');

var result = {
  msg: null,
  markup: null
};

var js_files = [
  '/js/game_form-min.js'
];

var css_files = [
  '/css/game_form-min.css'
];

/* GET home page. */
router.get('/', function(req, res, next) {
  loadHomepage(res);
});

// Need to use a helper to get a list of console platforms from the API, then
// use that to create a dropdown.
function loadHomepage(res) {
  game_list_helper.getPlatformList(function(data) {
    console.log(data);
    // lets build the conf settings for the module
    modConf = utils.buildModConf("game-form", null, js_files, css_files, data);
    // then let's pass the build modConf data to our partial view
    res.render('partials/game_form', modConf);
  });
};


module.exports = router;
