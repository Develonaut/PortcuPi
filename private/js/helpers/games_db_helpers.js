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
    }
};