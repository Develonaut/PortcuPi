document.addEventListener("DOMContentLoaded", initGameSearchPage.call(document));

function initGameSearchPage (e) {
  var page = this,
      mod = page.querySelector("[data-role=mod]"),
      search_button = mod.querySelector("[data-role=search_button]"),
      game_platform_input = mod.querySelector("#game_platform");

  // Using methods from typeahead.js, include typeahead.js into any page
  // looking to use its methods.
  var results_list = mod.querySelector("[data-role=results_list]");
  var debounce = _.debounce(filterResults.bind(game_platform_input, results_list), 200);
  game_platform_input.addEventListener("keyup", debounce);

  page.addEventListener("DOMContentLoaded", clearInputs.bind(mod));
  page.addEventListener("keydown", hijackEnterPress.bind(mod));
  search_button.addEventListener("click", checkFields.bind(search_button, mod));
}

// Going to clear out the inputs if the user hits this page, to
// allow for fresh searches everytime.
function clearInputs () {
  var mod = this;
      game_name_input = mod.querySelector("#game_name"),
      game_platform_selection = mod.querySelector("#game_platform");

  game_platform_selection.value = "";
  game_name_input.value = "";
}

// Forces any enter keypresses to go through a check for missing input fields
// in the form.
function hijackEnterPress (e) {
  var mod = this,
      search_button = mod.querySelector("[data-role=search_button]");

  if (e.which == 13) {
    e.preventDefault();
    e.stopImmediatePropagation();
    checkFields.call(search_button, mod, e);    
  }
}

// Checks to make sure the required input fields are filled.
function checkFields (mod, e) {
  var self = this,
      submit_text = mod.querySelector("[data-role=submit_text]"),
      loader = mod.querySelector("[data-role=loader]"),
      required_inputs = mod.querySelector("[data-required]"),
      game_name_input = mod.querySelector("#game_name"),
      required_input_values = required_inputs.value;

  if (required_input_values == "") {
    required_inputs.classList.add("error");
    game_name_input.placeholder = "Please Enter A Game Name";

    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  } 
    
  submit_text.classList.add("hidden");
  loader.classList.remove("hidden");
  self.removeEventListener("click", checkFields);
  self.click();

}