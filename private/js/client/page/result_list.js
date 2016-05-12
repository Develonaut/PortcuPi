var page = $(document);

page.on("ready", showResults);

function showResults () {
  var results = $('.results-wrapper');

  results.addClass('results-found');

}