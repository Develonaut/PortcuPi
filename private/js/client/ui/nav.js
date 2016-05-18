document.addEventListener("DOMContentLoaded", initPage);

function initPage (e) {
  var nav = document.querySelector("[data-role=nav]"),
      sticky_nav = document.querySelector("[data-role=sticky_nav]"),
      nav_scroller = _.throttle(handleStickyNav.bind(sticky_nav, nav), 150);

  document.addEventListener("scroll", nav_scroller);
  checkMetaFile.apply(sticky_nav, [nav]);
  handleStickyNav.apply(sticky_nav, [nav]);
}

function checkMetaFile (nav) {
  var sticky_nav = this, 
      regular_nav = nav,
      regular_nav_meta_button = sticky_nav.querySelector("[data-role=my_meta]");
      sticky_nav_meta_button = regular_nav.querySelector("[data-role=my_meta]");

  if (typeof(Storage) !== "undefined") {
    console.log('HTML5 Storage available');
    if (metaFile) {
      console.log('metaFile exists:' + metaFile);
      sticky_nav_meta_button.classList.remove('disabled');
      regular_nav_meta_button.classList.remove('disabled');
    } else {
      console.log('No current metaFile');
    }
  }
}

function handleStickyNav (nav) {
  var sticky_nav = this,
      regular_nav = nav;

  var viewport = {
    top: window.pageYOffset,
    bottom: window.pageYOffset + window.innerHeight,
    width: window.innerWidth
  };

  var regNavHeight = (regular_nav.offsetTop + regular_nav.offsetHeight),
      stickyNavHeight = (sticky_nav.offsetHeight),
      regNavPosition = (regNavHeight - viewport.top),
      stickyNavPostion = (stickyNavHeight - viewport.top);

  var navVisibility = regNavPosition,
      navHeight = regNavHeight;
  
  if (viewport.width <= 713) {
    navVisibility = stickyNavPostion;
    navHeight = stickyNavHeight;
  }

  if (navVisibility <= 0) {
    sticky_nav.classList.add("appear");
  }

  if (navVisibility === navHeight) {
    sticky_nav.classList.remove("appear");
  }

}