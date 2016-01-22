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
          callback(game_list);
        } else {
          callback('error');
        }
      })
    }
};