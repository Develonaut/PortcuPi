function hijackEnterPress(a){var e=page.find("");return 13==a.which?(a.preventDefualt,a.stopImmediatePropagation(),getGame.call($(this)),!1):void 0}function getGame(a){var e=$(this),t=e.closest("[data-role=game_search_form]"),r=t.serializeArray();$.ajax({url:"http://localhost:3000/",type:"POST",dataType:"json",data:JSON.stringify(r[0]),contentType:"application/json"})}var page=$(document);page.on("click","[data-role=search_button]",getGame),page.on("keydown","[data-role=game_search_form]",hijackEnterPress);