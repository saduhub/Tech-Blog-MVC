// Event listener for each tile
$(".tile").on("click", function () {
  searchQuery = $(this).text();
  getInfo();
  console.log(searchQuery);
  console.log(artistDescription);
  $('#picks-main').remove();
  $('#description').remove();
// will only work if artist is removed from array
  if (artistArray.includes(searchQuery)) {
    return;
  } else {
    artistArray.push(searchQuery);
    localStorage.setItem("artists", artistArray);
    artistString = localStorage.getItem("artists");
    artistArray = artistString.split(",")
    console.log(artistArray)
    generateArtistButtons();
  }
});

// Navigation to home
let homeBtn = $("#home");

homeBtn.on("click", function () {
  location.reload();
});



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

// input
$("#search-button1").on("click", function() {
  $('#description').addClass('hidden');
  $('#picks-main').addClass('hidden');
  $('#artist-profile').addClass('hidden');
  $('#video-div').removeClass('hidden');
  if (navContent.is(':hidden')) {
    navContent.slideDown();
  } else {
    navContent.slideUp();
  }

});

$("#search-button2").on("click", function() {
  $('#description').addClass('hidden');
  $('#picks-main').addClass('hidden');
  $('#artist-profile').addClass('hidden');
  $('#video-div').removeClass('hidden');
  if (navContent.is(':hidden')) {
    navContent.slideDown();
  } else {
    navContent.slideUp();
  }
});


document.querySelectorAll(".tile").forEach((item) => {
  item.addEventListener("click", () => {
    let searchQuery = $(item).text();
    
  });

});
