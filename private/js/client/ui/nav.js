var page = $(document);

page.on("ready", checkMetaFile);

function checkMetaFile () {
  var meta_button = $('[data-role=my_meta]');

  if (typeof(Storage) !== "undefined") {
    console.log('HTML5 Storage available');
    if (metaFile) {
      console.log('metaFile exists:' + metaFile);
      meta_button.removeClass('disabled');
    } else {
      console.log('No current metaFile');
    }
  }
}