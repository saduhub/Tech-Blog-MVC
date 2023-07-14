// Mobile nav bar open and close
let hamburgerButton = $('#hamburger');
let navContent = $('#nav-content');

hamburgerButton.on('click', function() {
  if (navContent.is(':hidden')) {
    navContent.slideDown();
  } else {
    navContent.slideUp();
  }
});


