function showDDMenu(e){e.preventDefault(),e.stopImmediatePropagation();var a=$(this),t=a.parents("[data-role=mod]"),o=t.find("[data-role=dd_menu]");a.toggleClass("active"),o.toggleClass("hidden")}var page=$(document);page.on("click","[data-role=dd_trigger]",showDDMenu);