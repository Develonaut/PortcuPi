document.addEventListener("DOMContentLoaded", initPage.call(document));

function initPage (e) {
  var page = this,
      mod = page.querySelector("[data-role=mod]");

  page.addEventListener("DOMContentLoaded", revealResults.bind(mod));
}


function revealResults () {
  var mod = this,
      results = mod.querySelector("[data-role=results]");

  results.classList.add('results-found');

}