var request = require('request');
var parseString = require('xml2js').parseString;
var _ = require('underscore');
var fs = require("fs");

var cache_path = "./private/js/server/cache/";

module.exports = {
  checkCachedData: function (file_name, callback) {
    try {
      fs.accessSync(cache_path + file_name + '.json', fs.R_OK | fs.W_OK);
      console.log('Found ' + cache_path + file_name + '.json' + ' in cache.');
      callback(module.exports.getCache(file_name));
    } catch (e) {
      console.log(e);
      callback(false);
    }
  },
  isCachedFileFresh: function(file_timestamp, file_name) {
    expiration_times = {
      test: 2, // 2 seconds
      standard : (24 * 60 * 60) * 2, // two days
      PlatformList : (24 * 60 * 60) * 7 // one week
    };

    console.log('Checking cache timestamp versus expiry date');
    var current_timestamp = Math.floor(new Date().getTime() / 1000),
        timestamp_difference = current_timestamp - file_timestamp,
        expiration_time = (expiration_times[file_name]) ? expiration_times[file_name] : expiration_times.standard;

    if (timestamp_difference < expiration_time) {
      console.log('Cache is still fresh');
      return true; 
    } else {
      console.log('Cache file has expired');
      return false;
    }
  },
  getCache: function(file_name, callback) {
    try {
      var file = fs.readFileSync(cache_path + file_name + '.json', 'utf8'),
          file_data = JSON.parse(file);

      var fresh_cache = module.exports.isCachedFileFresh(file_data[0].timestamp, file_name);
      if (fresh_cache) {
        return file_data;
      } else {
        return false;
      }      
    } catch (e) {
      console.log(e);
    }
  },
  writeToCache: function (file_name, data) {
    try {
      // Append a timestamp at the beggining of our json data
      // for when we created the cache file.
      var timestamp = {timestamp : Math.floor(new Date().getTime() / 1000)};
      data.unshift(timestamp);

      fs.writeFileSync(cache_path + file_name + '.json', JSON.stringify(data));
      console.log('Writing' +cache_path + file_name + '.json to cache.');
    } catch (e) {
      console.log(e);
    }
  }
};