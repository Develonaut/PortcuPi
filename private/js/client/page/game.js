document.addEventListener("DOMContentLoaded", initGamePage.bind(document));

function initGamePage (e) {
  var page = this, // document
      mod = page.querySelector("[data-role=mod]"),
      download_button = mod.querySelector("[data-role=download]"),
      box_arts_parent = mod.querySelector(".box-art"),
      box_arts = mod.querySelectorAll("[data-role=box_art]");

  download_button.addEventListener("click", createDownloadLink);
  addImageConstraints(box_arts, box_arts_parent);
}

function addImageConstraints (box_arts, box_arts_parent) {
  if (box_arts[0].offsetHeight && box_arts[0].offsetWidth) {
      box_arts_parent.style.overflow = "hidden";
      Array.prototype.forEach.call(box_arts, function(result_element, i) {
        box_arts_parent.style.minHeight = box_arts[0].offsetHeight + 'px';
        box_arts_parent.style.minWidth = box_arts[0].offsetWidth + 'px';
        box_arts[i].style.minHeight = box_arts[0].offsetHeight + 'px';
        box_arts[i].style.minWidth = box_arts[0].offsetWidth + 'px';
      });
  } else {
    _.delay(addImageConstraints.bind(null, box_arts, box_arts_parent), 200);
  }
}

// Let's store the user created text file in HTML5 local storage.
function makeTextFile () {
  var self = this,
      game_name = self.getAttribute("data-game-name");

  var textFile = metaFile;
  var text = game_name;

  var data = new Blob([text], {type: 'text/plain'});

  // If we are replacing a previously generated file from loval storage we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    console.log('there already was a file stored');
    window.URL.revokeObjectURL(textFile);
  }

  // Going to store the newly created file in local storage just in case they want
  // to download it again.
  textFile = window.URL.createObjectURL(data);
  localStorage.setItem("metaFile", text);

  return textFile;
};

function createDownloadLink (e) {
  self = this;
  self.href = makeTextFile.call(self, e);
}
