var request = require('request');
var parseString = require('xml2js').parseString;
var _ = require('underscore');

var db_helper_vars = {
  'base_image_url': 'http://thegamesdb.net/banners/'
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
          parseString(body, function (err, result) {
            game = result.Data.Game;
          });

         // Get the image url's from the game data
          var game_object = game[0],
              box_art = {};

          // TODO: Work on the eror casses for getting a game:
          // use http://localhost:3000/game/Spyro%20Adventures?id=34869
          // and notice the error it throws.

          if (game_object.Images[0] !== undefined) {
            var game_object_images = game_object.Images[0];

            if (game_object_images.boxart[0] !== undefined) {
              box_art.front = game_object_images.boxart[0].$;
              game_object.BoxArt = box_art;
            }

            if (game_object_images.boxart[1] !== undefined) {
              box_art.front = game_object_images.boxart[1].$;
              box_art.back = game_object_images.boxart[0].$;

              game_object.BoxArt = box_art;
            }
          }

          // TODO: Work on the eror casses for getting a game:
          // use http://localhost:3000/game/Spyro%20Adventures?id=34869
          // and notice the error it throws.

          // var genres = '';
          // if (game_object.Genres[0] !== undefined) {
          //   genres = game_object.Genres[0].genre[0];
          // }
          // game_object.Genres = [genres];

          callback(game);
        } else {
          callback('getGame Error');
        }
      })
    }
};