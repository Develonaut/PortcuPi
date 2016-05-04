var page = $(document);

// Game form event listeners.
page.on("click", "[data-role=dd_trigger]", showDDMenu);
page.on("click", "[data-role=dd_item]", selectItem);
page.on("click", "[data-role=search_button]", checkFields);
page.on("keydown", "[data-role=game_search_form]", hijackEnterPress);
page.on("ready", clearInputs);

// Going to clear out the inputs if the user hits this page, to
// allow for fresh searches everytime.
function clearInputs () {
  var mod = $("[data-role=mod-game-form]"),
      game_name_input = mod.find("#game_name"),
      game_platform_selection = mod.find("#game_platform");

  game_platform_selection.val('');
  game_name_input.val('');
}

// Dropdown menu trigger that shows the drop down menu,
// and adds an active state to the dropdown button.
function showDDMenu (e) {
  e.preventDefault();
  e.stopImmediatePropagation();

  var self = $(this),
      mod = self.parents("[data-role=mod-game-form]"),
      dd_list = mod.find("[data-role=dd_menu]");

  self.toggleClass("active");
  dd_list.toggleClass("hidden");
}

// Takes the text form the selected item and update the platform
// button value, and the hidden game platform input for the search form.
function selectItem (e) {
  var self = $(this),
      self_text = $.trim(self.text()),
      mod = self.parents("[data-role=mod-game-form]"),
      dd_trigger = mod.find("[data-role=dd_trigger]"),
      dd_list = mod.find("[data-role=dd_menu]"),
      game_platform_selection = mod.find("#game_platform");

  dd_trigger.removeClass("active");
  dd_list.addClass("hidden");
  dd_trigger.text(self_text);
  dd_trigger.addClass("selected");
  game_platform_selection.val(self_text);
}

// Forces any enter keypresses to go through a check for missing input fields
// in the form.
function hijackEnterPress (e) {
  if (e.which == 13) {
    checkFields(e);    
  }
}

// Checks to make sure the required input fields are filled.
function checkFields (e) {
  var self = $(this),
      mod = self.parents("[data-role=mod-game-form]"),
      required_inputs = mod.find("[data-required]"),
      required_input_values = required_inputs.val();

  if (required_input_values == "") {
    required_inputs.addClass("error");

    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
}