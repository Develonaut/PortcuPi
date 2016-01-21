var page = $(document);

page.on("click", "[data-role=search_button]", getGame);
page.on("keydown", "[data-role=game_search_form]", hijackEnterPress);


function hijackEnterPress (e) {
  var game_name_input = page.find("")


  if (e.which == 13 ) {
    e.preventDefualt;
    e.stopImmediatePropagation();
    getGame.call($(this));
    return false;      
  }
}

function getGame (e) {
  var button = $(this),
      form = button.closest("[data-role=game_search_form]"),
      seralized_form = form.serializeArray();

  // If this post method is throwing errors,
  // be sure you are pasing JSONifed data.
  $.ajax({
      url: "http://localhost:3000/",
      type: "POST",
      dataType: "json",
      data: JSON.stringify(seralized_form[0]),
      contentType: "application/json"
  });
}

// function getGameList(game_name){
//   $.ajax({
//       url: 'http://thegamesdb.net/api/GetGamesList.php?name=' + game_name,
//       dataType: "xml",
//       type: 'GET',
//       success: function(res) {
//       var gameXML = res.responseText;
//       var gameJSON = $.xml2json(gameXML);
//       findGameInList(gameJSON.Game);
//       },
//       error: function() {
//         alert('error');
//       }
//   });
// }

// function findGameInList(game_list_object) {
//   var result_list = document.getElementById("result-list");

//   for (var i = 0; i < game_list_object.length; i++) { 
//       var result_list_item = document.createElement("li");
//           result_list_item.setAttribute('data-game-id', game_list_object[i].id);
//       var result_list_div = document.createElement("div");
//       var result_span = document.createElement("span");
//       var result_game_title = document.createTextNode(game_list_object[i].GameTitle);
//       var result_game_platform = document.createTextNode(game_list_object[i].Platform);

//       console.log(game_list_object[i]);

//       result_span.appendChild(result_game_title);
//       result_list_div.appendChild(result_span);
//       result_span.appendChild(result_game_platform);
//       result_list_div.appendChild(result_span);
//       result_list_item.appendChild(result_list_div);
//       result_list.appendChild(result_list_item);
//    }

//    if (game_list_object.length > 1) {
//       result_list.classList.remove("hidden");
//     } else {

//       var game_id = game_list_object[0].id;
//       getGameMetaData();
//     }
// }
    





