var page = $(document);

// Game form event listeners.
page.on("click", "[data-role=dd_trigger]", showDDMenu);
// Dropdown menu trigger that shows the drop down menu,
// and adds an active state to the dropdown button.
function showDDMenu (e) {
  e.preventDefault();
  e.stopImmediatePropagation();

  var self = $(this),
      mod = self.parents("[data-role=mod]"),
      dd_list = mod.find("[data-role=dd_menu]");

  self.toggleClass("active");
  dd_list.toggleClass("hidden");
}