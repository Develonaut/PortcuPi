var request=require("request"),parseString=require("xml2js").parseString;module.exports={getGameList:function(t,e){request("http://thegamesdb.net/api/GetGamesList.php?name="+t,function(t,r,a){var s=null;t||200!=r.statusCode?e("getGameList error"):(parseString(a,function(t,e){s=e.Data.Game}),console.log(s),e(s))})},getPlatformList:function(t){request("http://thegamesdb.net/api/GetPlatformsList.php",function(e,r,a){var s=null;e||200!=r.statusCode?t("getPlatformList Error"):(parseString(a,function(t,e){s=e.Data.Platforms[0].Platform}),t(s))})}};