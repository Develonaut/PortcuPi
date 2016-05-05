var request = require('request');
var parseString = require('xml2js').parseString;

module.exports = {
    getGameList: function(game_name, callback) {
      request('http://thegamesdb.net/api/GetGamesList.php?name=' + game_name, function (error, response, body) {
        var game_list = null;
        if (!error && response.statusCode == 200) {
          parseString(body, function (err, result) {
            game_list = result.Data.Game;
          });
          console.log(game_list);
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
          callback(game);
        } else {
          callback('getGame Error');
        }
      })
    }
};