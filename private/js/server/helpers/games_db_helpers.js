var request = require('request');
var parseString = require('xml2js').parseString;
var _ = require('underscore');
var fs = require("fs");

var helper_path = "../min/";
var xml_helper = require(helper_path + 'xml_helpers-min.js');
var cache_helper = require(helper_path + 'cache_helpers-min.js');

var db_helper_vars = {
  temp_path_url: 'public/images/temp/',
  base_image_url: 'http://thegamesdb.net/banners/'
};

module.exports = {
    getGameList: function(game_name, callback) {
      request('http://thegamesdb.net/api/GetGamesList.php?name=' + game_name, function (error, response, body) {
          var results = {
            game_name: null,
            results: null 
        };
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            if (_.isEmpty(result.Error) && !_.isEmpty(result.Data.Game)) {
              results.game_name = game_name;
              results.results = result.Data.Game;
            } else {
              console.log('Something went wrong in the game list call.');
            }
          });
          callback(results);
        }
      })
    },
    getPlatformSpecifiedGameList: function(game_platform, game_name, callback) {
      var base_url = 'http://thegamesdb.net/api/GetGamesList.php?',
          game_name_url = 'name=' + game_name,
          game_platform_url = '&platform=' + game_platform,
          url = base_url + game_name_url + game_platform_url;

        request(url, function (error, response, body) {
          var results = {
            allow_game_search: null,
            game_name: null,
            game_platform: null,
            results: null 
          };
          if (!error && response.statusCode == 200) {
            parseString(body, function (err, result) {
              if (_.isEmpty(result.Error)  && !_.isEmpty(result.Data.Game)) {
                results.game_name = game_name,
                results.game_platform = game_platform,
                results.results = result.Data.Game;
              } else {
                results.game_name = game_name,
                results.allow_game_search = true;
                console.log('Something went wrong in the platform game list call.');
              }
            });
            callback(results);
          }
        });
    },
    getPlatformList: function (callback) {
      try {
        cached_file_name = 'PlatformList';
        cache_helper.checkCachedData(cached_file_name, function(cached_data) {
          if (!_.isEmpty(cached_data)) {
            console.log('Sending back cached data.');
            callback(cached_data);
          } else {
            request('http://thegamesdb.net/api/GetPlatformsList.php', function (error, response, body) {
              var platform_list = null;
              if (!error && response.statusCode == 200) {
                parseString(body, function (err, result) {
                  if (_.isEmpty(result.Error)  && !_.isEmpty(result.Data.Platforms)) {
                    platform_list = result.Data.Platforms[0].Platform;
                    cache_helper.writeToCache(cached_file_name, platform_list);
                  } else {
                    console.log('Something went wrong in the get platform list call.');
                  }
                });
                console.log('Sending back api data.');
                callback(platform_list);
              }
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    getGame: function (game_id, callback) {
      request('http://thegamesdb.net/api/GetGame.php?id=' + game_id, function (error, response, body) {
        var game = null;
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            if (_.isEmpty(result.Error)  && !_.isEmpty(result.Data.Game)) {
              game = result.Data.Game;
              game.XML = xml_helper.buildXML(result.Data.Game);
            
              // Get the image url's from the game data
              var game_object = game[0];
              // Let's see if the game we got has boxart to display. If it does 
              // let's get the data we want and store it in the game object.
              var box_art = {},
                  game_has_images = _.has(game_object, 'Images');
                  game_has_boxart = _.has(game_object.Images[0], 'boxart');

              if (game_has_images && game_has_boxart) {
                var game_box_art = game_object.Images[0].boxart; 


                if (!_.isEmpty(game_box_art[0])) {
                  var adjusted_width = game_box_art[0].$.width / 2,
                      adjusted_height = game_box_art[0].$.height / 2;
                  // Assign some heights and width to use in markup
                  game_box_art[0].$.adjusted_height = adjusted_height;
                  game_box_art[0].$.adjusted_height = adjusted_width;
                  // Add the available box art data to our box_art object
                  box_art.front = game_box_art[0].$;

                  // Add our new box art object to the original game object
                  game_object.BoxArt = [box_art];
                }

                if (!_.isEmpty(game_box_art[1])) {
                  var adjusted_width = game_box_art[1].$.width / 2,
                      adjusted_height = game_box_art[1].$.height / 2;
                  // Assign some heights and width to use in markup
                  game_box_art[1].$.adjusted_height = adjusted_height;
                  game_box_art[1].$.adjusted_width = adjusted_width;

                  var adjusted_width = game_box_art[0].$.width / 2,
                      adjusted_height = game_box_art[0].$.height / 2;
                  // Assign some heights and width to use in markup
                  game_box_art[0].$.adjusted_height = adjusted_height;
                  game_box_art[0].$.adjusted_width = adjusted_width;

                  console.log(game_box_art[1].$);
                  console.log(game_box_art[0].$);

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
            } else {
              console.log('Something went wrong in the get game call.');
            }
          });
          callback(game);
        }
      })
    }
};