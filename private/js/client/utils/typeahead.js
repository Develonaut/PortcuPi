// NOTE: API calls or other forms of data retrieved should come from the source calling
// filterResults().

// typeahead.js shows a list of results in the form of a filtered ul/li list based 
// off a the DOM result list passed in to the filterResults function from 
// the source call/element. Typeahead.js assumes the source call is coming from an 
// input from which it pulls the query string to compare against passed in results. 

// Master function of typeahead, this is the beggining point of the function.
function filterResults (results_element) {
  var input = this,
      input_value = input.value,
      result_list = results_element,
      results = result_list.querySelectorAll("[data-role=result]");

  if (input_value == '') {
    result_list.classList.add("hidden");
    return;
  }

  var input_position = input_value.length;

  // Hide list before we loop through and check
  result_list.classList.add("hidden");
  Array.prototype.forEach.call(results, function(result_element, i) {
    // As we loop hide each result.
    result_element.classList.add("hidden");
    var result_element_text = result_element.getAttribute("data-value");

    // do an index of search instead to grab results that contain the letter
    // if (result_element_text.indexOf(input_value)) {
    if (result_element_text.indexOf(input_value) !== -1) {
      // Let's add event listeners to the result items
      result_element.addEventListener("click", selectResult.bind(result_element, input, result_list));
      // Let's bold the letters that match.
      var matching_index_beggining = result_element_text.indexOf(input_value);
      var matching_index_end = matching_index_beggining + input_position;

      var matching_result_text = result_element_text.substring(matching_index_beggining, matching_index_end);
      var remaining_result_text = result_element_text.substring(matching_index_end, result_element_text.length);

      result_element.innerHTML = "<strong>" + matching_result_text + "</strong>" + remaining_result_text;

      if (matching_index_beggining > 0) {
        before_result_text = result_element_text.substring(0, matching_index_beggining);
        result_element.innerHTML = before_result_text + "<strong>" + matching_result_text + "</strong>" + remaining_result_text;
      }

      // If we find something let's unhide the list and the elements that match.
      result_list.classList.remove("hidden");
      result_element.classList.remove("hidden");

      // Hides the results when the user gets a direct match
      // if (remaining_result_text.length <= 0) {
      //   console.log('we have no matching results');
      //   result_list.classList.add("hidden");
      // }
    }

    // Alternate search method: do not use only for refrence
    // if (result_element_text.substring(0, input_position) == input_value) {
    //   // Let's bold the letters that match.
    //   matching_result_text = result_element_text.substring(0, input_position);
    //   remaining_result_text = result_element_text.slice(matching_result_text.length, result_element_text.length);

    //   result_element.innerHTML = "<strong>" + matching_result_text + "</strong>" + remaining_result_text;

    //   // If we find something let's unhide the list and the elements that match.
    //   result_list.classList.remove("hidden");
    //   result_element.classList.remove("hidden");

    //   // Hides the results when the user gets a direct match
    //   // if (remaining_result_text.length <= 0) {
    //   //   console.log('we have no matching results');
    //   //   result_list.classList.add("hidden");
    //   // }
    // }
  });
}

function selectResult(input, result_list) {
  var self = this,
      result_item_value = self.getAttribute("data-value");
      input = input;

  input.value = result_item_value;
  filterResults.call(input, result_list);
  result_list.classList.add("hidden");
}








