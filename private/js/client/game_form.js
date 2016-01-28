// var page = $(document);

// page.on("click", "[data-role=search_button]", getGame);
// page.on("keydown", "[data-role=game_search_form]", hijackEnterPress);

// function hijackEnterPress (e) {
//   if (e.which == 13 ) {
//     e.preventDefualt;
//     e.stopImmediatePropagation();
//     getGame.call($(this));
//     return false;      
//   }
// }

// function getGame (e) {
//   var button = $(this),
//       form = button.closest("[data-role=game_search_form]"),
//       seralized_form = form.serializeArray();

//   // If this post method is throwing errors,
//   // be sure you are pasing JSONifed data.
//   $.ajax({
//     url: "/results/" + seralized_form[0].value,
//     type: "POST",
//     dataType: "json",
//     data: JSON.stringify({
//       action: "get_game_name"
//     }),
//     contentType: "application/json",
//     success: function (data) {
//       console.log('succes');
//       console.log(data);
//       insertHTMLElement(data.markup);
//     }
//   });
// }

// function insertHTMLElement (markup) {
//   console.log(markup);
//   var form = page.find("[data-role=game_search_form]");
//   form.after(markup);
// }





