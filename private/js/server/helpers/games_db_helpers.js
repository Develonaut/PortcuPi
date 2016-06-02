var request = require('request');
var parseString = require('xml2js').parseString;
var _ = require('underscore');
var fs = require("fs");

var helper_path = "../min/";
var xml_helper = require(helper_path + 'xml_helpers-min.js');

var db_helper_vars = {
  temp_path_url: 'public/images/temp/',
  base_image_url: 'http://thegamesdb.net/banners/'
};

module.exports = {
    getGameList: function(game_name, callback) {
      request('http://thegamesdb.net/api/GetGamesList.php?name=' + game_name, function (error, response, body) {
        var game_list = null;
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            game_list = result.Data.Game;
          });
          callback(game_list);
        } else {
          callback('getGameList error');
        }
      })
    },
    getPlatformSpecifiedGameList: function(game_platform, game_name, callback) {
      var base_url = 'http://thegamesdb.net/api/GetGamesList.php?',
          game_name_url = 'name=' + game_name,
          game_platform_url = '&platform=' + game_platform,
          url = base_url + game_name_url + game_platform_url;

      request(url, function (error, response, body) {
        var game_list = null;
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            game_list = result.Data.Game;
          });
          callback(game_list);
        } else {
          callback('getGameList error');
        }
      })
    },
    getPlatformList: function (callback) {
      request('http://thegamesdb.net/api/GetPlatformsList.php', function (error, response, body) {
        var platform_list = null;
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            platform_list = result.Data.Platforms[0].Platform;
          });
          callback(platform_list);
        } else {
          callback('getPlatformList Error');
        }
      })
    },
    getGame: function (game_id, callback) {
      request('http://thegamesdb.net/api/GetGame.php?id=' + game_id, function (error, response, body) {
        var game = null;
        if (!error && response.statusCode == 200) {
          
          // console.log(body);
          parseString(body, function (err, result) {
            game = result.Data.Game;
            game.XML = xml_helper.buildXML(result.Data.Game);
          });

         // Get the image url's from the game data
          var game_object = game[0];
          // console.log(game_object);

          // Let's see if the game we got has boxart to display. If it does 
          // let's get the data we want and store it in the game object.
          var box_art = {},
              game_has_images = _.has(game_object, 'Images');
              game_has_boxart = _.has(game_object.Images[0], 'boxart');

          if (game_has_images && game_has_boxart) {
            var game_box_art = game_object.Images[0].boxart; 

            if (!_.isEmpty(game_box_art[0])) {
              box_art.front = game_box_art[0].$;

              // game_object.BoxArtSize = [game_box_art[0].]
              game_object.BoxArt = [box_art];
            }

            if (!_.isEmpty(game_box_art[1])) {
              box_art.front = game_box_art[1].$;
              box_art.back = game_box_art[0].$;
              game_object.BoxArt = [box_art];
            }
          }

          // // Let's look and see if the game has genres for us to use.
          var genres = '',
              game_has_genres = _.has(game_object, 'Genres');

          if (game_has_genres) {
            genres = game_object.Genres[0].genre[0];
            game_object.Genres = [genres];
          }

          // console.log(game);

          callback(game);
        } else {
          callback('getGame Error');
        }
      })
    }
};