var page = $(document);
// Let's store the user created text file in HTML5 local storage.

page.on("click", '[data-role=download]', createDownloadLink);

function makeTextFile () {
  var self = $(this),
      game_name = self.data("game-name");

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
  localStorage.setItem("metaFile", textFile);

  return textFile;
};

function createDownloadLink (e) {
  self = this;
  self.href = makeTextFile.call(self, e);
}